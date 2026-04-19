import * as React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Name is required.";
  } else if (fields.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

const inputBase =
  "w-full px-4 py-3 border rounded-lg bg-background dark:bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-all shadow-sm";

export function Contact() {
  const [fields, setFields] = React.useState<FormFields>({ name: "", email: "", message: "" });
  const [touched, setTouched] = React.useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const errors = validate(fields);
  const visibleErrors: FormErrors = {
    name: touched.name ? errors.name : undefined,
    email: touched.email ? errors.email : undefined,
    message: touched.message ? errors.message : undefined,
  };

  const isFormValid = Object.keys(errors).length === 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Simulated API call — swap with real fetch() when backend is wired
    setTimeout(() => {
      setIsSubmitting(false);

      // Simulate occasional network error (remove in production)
      if (Math.random() < 0.15) {
        setSubmitError("Something went wrong. Please try again in a moment.");
        return;
      }

      setIsSuccess(true);
      setFields({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
    }, 1200);
  }

  function handleReset() {
    setIsSuccess(false);
    setSubmitError(null);
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-secondary/40 to-background dark:from-slate-900/60 dark:to-background"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Start a project"
          subtitle="Tell us what you're building. We'll get back to you within 24 hours."
          className="text-center items-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-10 border-l-4 border-primary">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center relative"
                >
                  <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{
                          scale: [0, 2],
                          opacity: [1, 0],
                          x: [0, (i % 2 === 0 ? 1 : -1) * 60],
                          y: [0, (i < 2 ? 1 : -1) * 60],
                        }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="absolute w-3 h-3 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 z-10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 z-10 text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground z-10 max-w-sm">
                    Thanks for reaching out. We'll be in touch within 24 hours.
                  </p>
                  <Button variant="outline" className="mt-8 z-10" onClick={handleReset}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                /* ── Form State ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Submission error banner */}
                  <AnimatePresence>
                    {submitError && (
                      <motion.div
                        key="error-banner"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                      >
                        <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                        <p className="text-sm flex-grow">{submitError}</p>
                        <button
                          type="button"
                          onClick={() => setSubmitError(null)}
                          className="text-red-400 hover:text-red-600 transition-colors"
                          aria-label="Dismiss error"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(
                          inputBase,
                          visibleErrors.name
                            ? "border-red-400 dark:border-red-600 focus:ring-red-400 dark:focus:ring-red-600"
                            : "border-input focus:ring-primary"
                        )}
                        placeholder="Your full name"
                        aria-invalid={!!visibleErrors.name}
                        aria-describedby={visibleErrors.name ? "name-error" : undefined}
                      />
                      <AnimatePresence>
                        {visibleErrors.name && (
                          <motion.p
                            id="name-error"
                            key="name-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {visibleErrors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cn(
                          inputBase,
                          visibleErrors.email
                            ? "border-red-400 dark:border-red-600 focus:ring-red-400 dark:focus:ring-red-600"
                            : "border-input focus:ring-primary"
                        )}
                        placeholder="work@company.com"
                        aria-invalid={!!visibleErrors.email}
                        aria-describedby={visibleErrors.email ? "email-error" : undefined}
                      />
                      <AnimatePresence>
                        {visibleErrors.email && (
                          <motion.p
                            id="email-error"
                            key="email-err"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                          >
                            <AlertCircle className="w-3 h-3" />
                            {visibleErrors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message
                      </label>
                      <span
                        className={cn(
                          "text-xs tabular-nums transition-colors",
                          fields.message.length > 0 && fields.message.length < 20
                            ? "text-amber-500 dark:text-amber-400"
                            : "text-muted-foreground"
                        )}
                      >
                        {fields.message.length} / 20 min
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={cn(
                        inputBase,
                        "resize-none",
                        visibleErrors.message
                          ? "border-red-400 dark:border-red-600 focus:ring-red-400 dark:focus:ring-red-600"
                          : "border-input focus:ring-primary"
                      )}
                      placeholder="Tell us about your project, timeline, and goals..."
                      aria-invalid={!!visibleErrors.message}
                      aria-describedby={visibleErrors.message ? "message-error" : undefined}
                    />
                    <AnimatePresence>
                      {visibleErrors.message && (
                        <motion.p
                          id="message-error"
                          key="message-err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          {visibleErrors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
