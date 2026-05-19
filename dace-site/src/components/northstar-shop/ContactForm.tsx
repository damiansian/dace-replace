"use client";

import { useEffect, useId, useRef, useState } from "react";
import { northstarLandmarkProps } from "./northstar-landmark";

type FieldKey = "name" | "email" | "message";

type FieldErrors = Partial<Record<FieldKey, string>>;

const FIELD_ORDER: FieldKey[] = ["name", "email", "message"];

function validateContactForm(values: {
  name: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Enter your name.";
  }
  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) {
    errors.message = "Enter a message.";
  }

  return errors;
}

function RequiredMark() {
  return (
    <>
      <span className="text-accent-red" aria-hidden="true">
        {" "}
        *
      </span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const requiredHintId = useId();
  const successTitleId = useId();

  useEffect(() => {
    if (!showSuccess) return;
    closeRef.current?.focus();
  }, [showSuccess]);

  useEffect(() => {
    if (!showSuccess) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSuccess(false);
        submitRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSuccess]);

  function describedBy(field: FieldKey, errorId: string): string | undefined {
    const ids = [errors[field] ? errorId : null].filter(Boolean);
    return ids.length > 0 ? ids.join(" ") : undefined;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm({ name, email, message });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      for (const field of FIELD_ORDER) {
        if (nextErrors[field]) {
          const ref =
            field === "name"
              ? nameRef
              : field === "email"
                ? emailRef
                : messageRef;
          ref.current?.focus();
          break;
        }
      }
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setShowSuccess(true);
  }

  function closeSuccessDialog() {
    setShowSuccess(false);
    submitRef.current?.focus();
  }

  return (
    <>
      <form
        noValidate
        aria-labelledby="contact-heading"
        aria-describedby={requiredHintId}
        {...northstarLandmarkProps(
          "contact-form",
          "rounded-md border border-border bg-white p-4 space-y-3 w-full"
        )}
        onSubmit={handleSubmit}
      >
        <h2
          id="contact-heading"
          className="text-lg font-semibold text-foreground mt-0 m-0"
        >
          Contact us
        </h2>
        <p id={requiredHintId} className="text-xs text-text-secondary m-0">
          Fields marked with an asterisk (
          <span aria-hidden="true">*</span>) are required.
        </p>

        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Name
            <RequiredMark />
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) {
                setErrors((prev) => ({ ...prev, name: undefined }));
              }
            }}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name", "contact-name-error")}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-foreground ${
              errors.name ? "border-accent-red" : "border-border"
            }`}
          />
          {errors.name ? (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-1 text-xs text-accent-red m-0"
            >
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
            <RequiredMark />
          </label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: undefined }));
              }
            }}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email", "contact-email-error")}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-foreground ${
              errors.email ? "border-accent-red" : "border-border"
            }`}
          />
          {errors.email ? (
            <p
              id="contact-email-error"
              role="alert"
              className="mt-1 text-xs text-accent-red m-0"
            >
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Message
            <RequiredMark />
          </label>
          <textarea
            ref={messageRef}
            id="contact-message"
            name="message"
            rows={3}
            required
            aria-required="true"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (errors.message) {
                setErrors((prev) => ({ ...prev, message: undefined }));
              }
            }}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message", "contact-message-error")}
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm text-foreground min-h-[80px] ${
              errors.message ? "border-accent-red" : "border-border"
            }`}
          />
          {errors.message ? (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1 text-xs text-accent-red m-0"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          ref={submitRef}
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Send message
        </button>
      </form>

      {showSuccess ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={closeSuccessDialog}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={successTitleId}
            className="w-full max-w-sm rounded-lg border border-border bg-white p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h4
              id={successTitleId}
              className="text-base font-semibold text-foreground mt-0 m-0 mb-2"
            >
              Message sent
            </h4>
            <p className="text-sm text-text-secondary m-0 mb-4">
              Thank you. We received your message and will respond soon.
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={closeSuccessDialog}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
