#!/usr/bin/env python3
"""
Generate QTI 1.2 XML for DACE Define Badge Final Assessment (B2).
Reads stems, keys, distractors, and rationales VERBATIM from B2_Final_Assessment_Questions.md.
Output: B2_Final_Assessment.xml, imsmanifest.xml
Includes stimulus images for Canvas import.
"""

import re
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
MD_PATH = SCRIPT_DIR.parent / "B2_Final_Assessment_Questions.md"


def cdata(s):
    if not s:
        return ""
    return s.replace("]]>", "]]>]]><![CDATA[")


def escape_attr(s):
    """Escape for HTML attributes."""
    if not s:
        return ""
    return s.replace("&", "&amp;").replace('"', "&quot;")


def markdown_to_html(text):
    """Convert markdown links to HTML. Preserve other text."""
    if not text:
        return ""
    # [text](url) -> <a href="url" target="_blank">text</a>
    return re.sub(
        r'\[([^\]]+)\]\((https://[^\)]+)\)',
        r'<a href="\2" target="_blank">\1</a>',
        text
    )


def parse_questions(md_path):
    """Parse B2_Final_Assessment_Questions.md and return list of question dicts."""
    content = md_path.read_text(encoding="utf-8")

    # Stop at QTI Export section
    if "## QTI Export" in content:
        content = content.split("## QTI Export")[0]

    parts = re.split(r'\n## Question (\d+):', content)
    questions = []

    for i in range(1, len(parts) - 1, 2):
        qnum = int(parts[i])
        block = parts[i + 1]

        # Stimulus path (line under **Stimulus:**)
        stimulus_path = None
        stim_match = re.search(r'\*\*Stimulus:\*\*\s*\n\s*(stimuli/[^\s\n\[\]]+\.png)', block)
        if stim_match:
            stimulus_path = stim_match.group(1).strip()

        # Figma URL
        figma_match = re.search(r'\[Figma link[^\]]*\]\((https://[^\)]+)\)', block)
        figma_url = figma_match.group(1) if figma_match else None

        # Alt text
        alt_text = None
        alt_match = re.search(r'\*\*Alt text:\*\*\s*["\"]([^"\"]*(?:\\.[^"\"]*)*)["\"]', block)
        if alt_match:
            alt_text = alt_match.group(1).strip().replace('\\"', '"')

        # Question stem: between **Question:** and **Answer Options:**
        # Or between end of Alt text block and **Answer Options:** if no **Question:** (e.g. Q16)
        stem = ""
        q_match = re.search(r'\*\*Question:\*\*\s*\n(.*?)\n\*\*Answer Options:\*\*', block, re.DOTALL)
        if q_match:
            stem = q_match.group(1).strip()
        else:
            # No **Question:** - content between Alt text close and **Answer Options:**
            alt_end = re.search(r'\*\*Alt text:\*\*\s*["\"][^"\"]*["\"]\s*\n', block, re.DOTALL)
            if alt_end:
                rest = block[alt_end.end():]
                aopt = re.search(r'\n\*\*Answer Options:\*\*', rest)
                if aopt:
                    stem = rest[:aopt.start()].strip()

        stem = re.sub(r'\n{3,}', '\n\n', stem)
        stem = stem.strip()

        # Answer options A) B) C) D)
        opts = []
        for letter in ["A", "B", "C", "D"]:
            pattern = rf'^{re.escape(letter)}\)\s*(.*?)(?=\n[A-D]\)|\n\*\*Correct Answer|\Z)'
            m = re.search(pattern, block, re.DOTALL | re.MULTILINE)
            if m:
                opt_text = m.group(1).strip()
                opt_text = re.sub(r'\n+$', '', opt_text)
                opts.append((letter, opt_text))

        # Correct answer
        correct_match = re.search(r'\*\*Correct Answer:\*\*\s*([A-D])', block)
        correct = correct_match.group(1).strip() if correct_match else "A"

        # Feedback for each option
        feedbacks = []
        for letter in ["A", "B", "C", "D"]:
            pattern = rf'\*\*If {re.escape(letter)} selected[^*]*:\*\*\s*\n(.*?)(?=\n\*\*If [A-D] selected|\n---\s*$|\Z)'
            m = re.search(pattern, block, re.DOTALL)
            if m:
                fb = m.group(1).strip()
                if fb.startswith('"') and fb.endswith('"'):
                    fb = fb[1:-1].replace('\\"', '"')
                elif fb.startswith('"') and not fb.endswith('"'):
                    fb = fb[1:].replace('\\"', '"')
                feedbacks.append((letter, fb))

        # Outcome for title (e.g. 2A.01)
        outcome_match = re.search(r'\(Outcome ([^\)]+)\)', block)
        outcome = outcome_match.group(1).strip() if outcome_match else f"Q{qnum}"

        questions.append({
            "num": len(questions) + 1,
            "title": f"Q{len(questions) + 1}: {outcome}",
            "stimulus_path": stimulus_path,
            "alt_text": alt_text or "",
            "figma_url": figma_url,
            "stem": stem,
            "options": opts,
            "correct": correct,
            "feedbacks": feedbacks,
        })

    return questions


def item(qn, title, prompt, opts, correct, feedbacks):
    """Build one QTI item."""
    ident = f"Q{qn:02d}"
    choices = "\n".join(
        f'              <response_label ident="{l}"><material><mattext>{cdata(t)}</mattext></material></response_label>'
        for l, t in opts
    )
    setvar = '<setvar action="Set" varname="SCORE">100</setvar>'
    respconds = "\n".join(
        f'''          <respcondition continue="No">
            <conditionvar><varequal respident="response1">{l}</varequal></conditionvar>
            {setvar + chr(10) + "            " if l == correct else ""}
            <displayfeedback feedbacktype="Response" linkrefid="{ident}_{l}"/>
          </respcondition>'''
        for l in ["A", "B", "C", "D"]
    )
    fb = "\n".join(
        f'''        <itemfeedback ident="{ident}_{l}"><flow_mat><material><mattext texttype="text/html"><![CDATA[<p>{cdata(t)}</p>]]></mattext></material></flow_mat></itemfeedback>'''
        for l, t in feedbacks
    )
    return f'''      <item ident="{ident}" title="{title}">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield><fieldlabel>question_type</fieldlabel><fieldentry>multiple_choice_question</fieldentry></qtimetadatafield>
            <qtimetadatafield><fieldlabel>points_possible</fieldlabel><fieldentry>1</fieldentry></qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          <material><mattext texttype="text/html"><![CDATA[{cdata(prompt)}]]></mattext></material>
          <response_lid ident="response1" rcardinality="Single">
            <render_choice shuffle="Yes">
{choices}
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes><decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/></outcomes>
{respconds}
        </resprocessing>
{fb}
      </item>'''


def build_prompt(q, escape_attr_fn):
    """Build the HTML prompt (image + optional Figma link + stem) from parsed question."""
    parts = []

    if q["stimulus_path"] and q["alt_text"]:
        img_tag = f'<p><img src="{q["stimulus_path"]}" alt="{escape_attr_fn(q["alt_text"])}" style="max-width: 100%;"/></p>'
        parts.append(img_tag)

    if q["figma_url"]:
        parts.append(f'<p><a href="{q["figma_url"]}" target="_blank">View stimulus in Figma</a></p>')

    stem_html = markdown_to_html(q["stem"])
    stem_html = stem_html.replace("\n\n", "</p><p>").replace("\n", " ")
    if stem_html:
        parts.append(f"<p>{stem_html}</p>")

    return "".join(parts)


def main():
    if not MD_PATH.exists():
        raise FileNotFoundError(f"Source not found: {MD_PATH}")

    questions = parse_questions(MD_PATH)
    if len(questions) != 25:
        raise ValueError(f"Expected 25 questions, parsed {len(questions)}")

    items_xml = []
    image_paths = set()

    for q in questions:
        prompt = build_prompt(q, escape_attr)
        opts = q["options"]
        correct = q["correct"]
        feedbacks = q["feedbacks"]

        if len(opts) != 4 or len(feedbacks) != 4:
            raise ValueError(f"Q{q['num']}: expected 4 options and 4 feedbacks")

        if q["stimulus_path"]:
            image_paths.add(q["stimulus_path"])

        items_xml.append(
            item(q["num"], q["title"], prompt, opts, correct, feedbacks)
        )

    xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
  <assessment ident="B2_Final_Assessment_v2" title="Define Badge Final Assessment (v2)">
    <qtimetadata>
      <qtimetadatafield><fieldlabel>qmd_timelimit</fieldlabel><fieldentry>2700</fieldentry></qtimetadatafield>
      <qtimetadatafield><fieldlabel>cc_maxattempts</fieldlabel><fieldentry>1</fieldentry></qtimetadatafield>
    </qtimetadata>
    <section ident="root_section">

{"".join(items_xml)}

    </section>
  </assessment>
</questestinterop>'''

    out_xml = SCRIPT_DIR / "B2_Final_Assessment.xml"
    out_xml.write_text(xml, encoding="utf-8")
    print(f"Generated {out_xml}")

    file_entries = "\n".join(f'      <file href="{p}"/>' for p in sorted(image_paths))
    manifest = f'''<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="B2_Final_Assessment_Manifest_v2" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:imsqti="http://www.imsglobal.org/xsd/ims_qtiasiv1p2">
  <metadata>
    <schema>IMS Content</schema>
    <schemaversion>1.1.3</schemaversion>
    <imsmd:lom>
      <imsmd:general>
        <imsmd:title>
          <imsmd:langstring xml:lang="en-US">Define Badge Final Assessment (v2)</imsmd:langstring>
        </imsmd:title>
        <imsmd:description>
          <imsmd:langstring xml:lang="en-US">Cumulative assessment for DACE Define Badge covering all outcomes from lessons L09-L16. 25 scenario-based multiple choice questions testing knowledge of assistive technology, screen readers, voice control, Windows High Contrast Mode, user preferences, and perceptual design.</imsmd:langstring>
        </imsmd:description>
      </imsmd:general>
    </imsmd:lom>
  </metadata>
  <organizations/>
  <resources>
    <resource identifier="B2_Final_Assessment_v2" type="imsqti_xmlv1p2" href="B2_Final_Assessment.xml">
      <file href="B2_Final_Assessment.xml"/>
{file_entries}
    </resource>
  </resources>
</manifest>'''

    out_manifest = SCRIPT_DIR / "imsmanifest.xml"
    out_manifest.write_text(manifest, encoding="utf-8")
    print(f"Generated {out_manifest}")


if __name__ == "__main__":
    main()
