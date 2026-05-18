const inputClass =
  "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const selectClass =
  "inline-block w-auto min-w-[12rem] max-w-md rounded-lg border border-border bg-white px-3 py-2 pr-8 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function WorkbookLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground mb-1">
      {children}
      {required ? (
        <span className="text-accent-red" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
    </label>
  );
}

export function WorkbookInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { id: string }
) {
  return <input {...props} className={`${inputClass} ${props.className ?? ""}`} />;
}

export function WorkbookSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { id: string }
) {
  return (
    <select {...props} className={`${selectClass} ${props.className ?? ""}`} />
  );
}

export function WorkbookTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string }
) {
  return (
    <textarea
      {...props}
      className={`${inputClass} min-h-[80px] ${props.className ?? ""}`}
    />
  );
}

export function WorkbookYesNoRadio({
  name,
  legend,
  value,
  onChange,
  required,
  hint,
}: {
  name: string;
  legend: string;
  value: "yes" | "no" | "";
  onChange: (next: "yes" | "no") => void;
  required?: boolean;
  hint?: string;
}) {
  const options = [
    { id: `${name}-yes`, value: "yes" as const, label: "Yes" },
    { id: `${name}-no`, value: "no" as const, label: "No" },
  ];

  return (
    <fieldset className="border-0 m-0 p-0 min-w-0">
      <legend className="text-sm font-medium text-foreground mb-1">
        {legend}
        {required ? (
          <span className="text-accent-red" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </legend>
      {hint ? <p className="text-xs text-text-secondary m-0 mb-2">{hint}</p> : null}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center gap-2">
            <input
              type="radio"
              id={opt.id}
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 shrink-0 accent-primary"
            />
            <label htmlFor={opt.id} className="text-sm text-foreground">
              {opt.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
