const inputClass =
  "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const selectClass = inputClass;

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
