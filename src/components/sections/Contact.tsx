"use client";

import { CheckCircle2, Loader2, Lock, Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRACTICE_AREAS, SITE } from "@/lib/constants";
import { cn, isValidEmail, isValidPhone, maskPhone } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (form.name.trim().length < 3) {
    errors.name = "Informe seu nome completo.";
  }
  if (!isValidEmail(form.email)) {
    errors.email = "Informe um e-mail válido.";
  }
  if (!isValidPhone(form.phone)) {
    errors.phone = "Informe um telefone válido com DDD.";
  }
  if (!form.area) {
    errors.area = "Selecione a área relacionada ao seu caso.";
  }
  if (form.message.trim().length < 20) {
    errors.message = "Descreva seu caso com pelo menos 20 caracteres.";
  }
  return errors;
}

const inputClasses = (hasError: boolean) =>
  cn(
    "w-full rounded-sm border bg-bone-100 px-4 py-3.5 text-sm text-ink-900 shadow-sm outline-none transition-all duration-300 placeholder:text-ink-400 focus:ring-2 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500",
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-ink-300 focus:border-navy-800 focus:ring-navy-800/15 dark:border-ink-700 dark:focus:border-navy-300 dark:focus:ring-navy-300/20"
  );

export function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? maskPhone(value) : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`campo-${firstField}`)?.focus();
      return;
    }

    setStatus("sending");

    // Funil: encaminha o lead qualificado para o WhatsApp do escritório.
    const message = encodeURIComponent(
      `Olá! Meu nome é ${form.name.trim()}.\n\n` +
        `Área: ${form.area}\n` +
        `E-mail: ${form.email.trim()}\n` +
        `Telefone: ${form.phone}\n\n` +
        `Caso: ${form.message.trim()}`
    );

    window.setTimeout(() => {
      window.open(
        `https://wa.me/${SITE.whatsapp}?text=${message}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("sent");
      setForm(INITIAL_FORM);
    }, 700);
  };

  return (
    <section
      id="contato"
      className="bg-bone-300 py-24 dark:bg-ink-950 lg:py-32"
      aria-labelledby="contato-titulo"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Contato"
              title="Conte-nos o seu caso. A análise é sem compromisso."
              description="Preencha o formulário e a advogada entrará em contato pessoalmente em até 24 horas úteis. Suas informações são protegidas por sigilo profissional."
              align="left"
            />
            <Reveal delay={0.15}>
              <ul className="mt-10 space-y-4 text-sm text-ink-600 dark:text-ink-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-navy-800 dark:text-navy-300" aria-hidden="true" />
                  Resposta garantida em até 24 horas úteis
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-navy-800 dark:text-navy-300" aria-hidden="true" />
                  Análise inicial do caso sem custo
                </li>
                <li className="flex items-center gap-3">
                  <Lock className="h-4 w-4 shrink-0 text-navy-800 dark:text-navy-300" aria-hidden="true" />
                  Sigilo absoluto garantido por lei
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-md border border-ink-200/60 bg-bone-100 p-7 shadow-xl shadow-ink-950/5 dark:border-ink-800 dark:bg-ink-900 sm:p-10"
              aria-describedby="form-observacao"
            >
              {status === "sent" && (
                <div
                  role="status"
                  className="mb-8 flex items-start gap-3 rounded-sm border border-green-600/30 bg-green-600/10 p-4 text-sm text-green-800 dark:text-green-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <p>
                    <strong className="font-semibold">Solicitação enviada.</strong>{" "}
                    Continuamos a conversa pelo WhatsApp — se a janela não
                    abriu, verifique o bloqueador de pop-ups.
                  </p>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="campo-name"
                    className="mb-2 block text-sm font-medium text-ink-800 dark:text-ink-100"
                  >
                    Nome completo <span className="text-navy-800 dark:text-navy-300" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="campo-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "erro-name" : undefined}
                    className={inputClasses(Boolean(errors.name))}
                  />
                  {errors.name && (
                    <p id="erro-name" role="alert" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="campo-phone"
                    className="mb-2 block text-sm font-medium text-ink-800 dark:text-ink-100"
                  >
                    Telefone / WhatsApp <span className="text-navy-800 dark:text-navy-300" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="campo-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 90000-0000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "erro-phone" : undefined}
                    className={inputClasses(Boolean(errors.phone))}
                  />
                  {errors.phone && (
                    <p id="erro-phone" role="alert" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="campo-email"
                    className="mb-2 block text-sm font-medium text-ink-800 dark:text-ink-100"
                  >
                    E-mail <span className="text-navy-800 dark:text-navy-300" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="campo-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "erro-email" : undefined}
                    className={inputClasses(Boolean(errors.email))}
                  />
                  {errors.email && (
                    <p id="erro-email" role="alert" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="campo-area"
                    className="mb-2 block text-sm font-medium text-ink-800 dark:text-ink-100"
                  >
                    Área do caso <span className="text-navy-800 dark:text-navy-300" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="campo-area"
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.area)}
                    aria-describedby={errors.area ? "erro-area" : undefined}
                    className={cn(inputClasses(Boolean(errors.area)), "appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236D6D77%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
                  >
                    <option value="" disabled>
                      Selecione a área
                    </option>
                    {PRACTICE_AREAS.map((area) => (
                      <option key={area.title} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                    <option value="Outra área / não sei">
                      Outra área / não sei informar
                    </option>
                  </select>
                  {errors.area && (
                    <p id="erro-area" role="alert" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {errors.area}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="campo-message"
                    className="mb-2 block text-sm font-medium text-ink-800 dark:text-ink-100"
                  >
                    Descreva brevemente o seu caso <span className="text-navy-800 dark:text-navy-300" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="campo-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conte o que aconteceu, desde quando e o que você espera resolver…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "erro-message" : undefined}
                    className={cn(inputClasses(Boolean(errors.message)), "resize-y")}
                  />
                  {errors.message && (
                    <p id="erro-message" role="alert" className="mt-2 text-xs text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy-800 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bone transition-all duration-300 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-navy-300 dark:text-ink-950 dark:hover:bg-navy-200 dark:focus-visible:outline-navy-300 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Solicitar análise do caso
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>

              <p
                id="form-observacao"
                className="mt-5 text-xs leading-relaxed text-ink-500 dark:text-ink-400"
              >
                Ao enviar, você concorda em ser contatado pela nossa equipe.
                Seus dados são utilizados exclusivamente para a análise do seu
                caso, em conformidade com a LGPD.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
