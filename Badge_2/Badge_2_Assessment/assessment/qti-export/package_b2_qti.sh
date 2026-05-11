#!/usr/bin/env bash
# Package B2 QTI for Canvas import.
# Copies stimulus images from ../stimuli/ into stimuli/, then creates the zip.
set -e
cd "$(dirname "$0")"

echo "Copying stimulus images from ../stimuli/ ..."
mkdir -p stimuli
cp -f ../stimuli/*.png stimuli/ 2>/dev/null || true

echo "Creating B2_Define_Badge_Final_Assessment_QTI_v2.zip ..."
zip -r B2_Define_Badge_Final_Assessment_QTI_v2.zip B2_Final_Assessment.xml imsmanifest.xml stimuli/

echo "Done. Import B2_Define_Badge_Final_Assessment_QTI_v2.zip in Canvas."
