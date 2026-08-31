"use client";

/**
 * Momentálne nepoužívané na žiadnej stránke — Monika sa rozhodla, že
 * požiadavky majú chodiť cez Facebook (pozri `siteConfig.facebook` a
 * stránku `/kontakt`), nie cez tento formulár/e-mail. Komponent a
 * príslušný `/api/kontakt` route handler necháme v kóde pre prípad, že by
 * sa neskôr predsa len rozhodla pre formulár/e-mail — stačí ich znova
 * vložiť na stránku.
 */

import { useState, type FormEvent } from "react";

const services = [
  "Terapia Cesta",
  "Harmonizácia čakier",
  "Ženské kruhy — Esencia Bohyne",
  "Intuitívny tanec",
  "Téma Dvojplamene",
  "Neviem si vybrať / poradiť sa",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Odoslanie sa nepodarilo.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Odoslanie sa nepodarilo.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-sage/40 bg-sage/10 p-8 text-center">
        <p className="font-serif text-xl text-ink">Ďakujem za tvoju správu 🤍</p>
        <p className="mt-2 text-sm text-ink-soft md:text-base">
          Ozvem sa ti čo najskôr na uvedený kontakt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-ink-soft">
          Meno a priezvisko
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none focus:border-clay"
          />
        </label>
        <label className="block text-sm text-ink-soft">
          E-mail
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none focus:border-clay"
          />
        </label>
      </div>

      <label className="block text-sm text-ink-soft">
        Telefón (nepovinné)
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none focus:border-clay"
        />
      </label>

      <label className="block text-sm text-ink-soft">
        Mám záujem o
        <select
          name="service"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none focus:border-clay"
        >
          <option value="" disabled>
            Vyber službu
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm text-ink-soft">
        Tvoja správa
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-ink outline-none focus:border-clay"
        />
      </label>

      <label className="flex items-start gap-3 text-xs text-ink-soft">
        <input required name="consent" type="checkbox" className="mt-1" />
        <span>
          Súhlasím so spracovaním mojich osobných údajov za účelom vybavenia mojej požiadavky, v
          súlade so zásadami ochrany osobných údajov.
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm text-clay-dark">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-clay px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-clay-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Odosielam…" : "Odoslať správu"}
      </button>
    </form>
  );
}
