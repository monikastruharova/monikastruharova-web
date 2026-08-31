import { NextResponse } from "next/server";

/**
 * Momentálne nepoužívané — Monika sa rozhodla, že požiadavky majú chodiť cez
 * Facebook (pozri `siteConfig.facebook` a stránku `/kontakt`), nie cez
 * formulár/e-mail. Tento route handler necháme v kóde nedotknutý pre
 * prípad, že by sa neskôr predsa len rozhodla pre formulár/e-mail namiesto
 * (alebo popri) Facebooku — treba naviazať `ContactForm` naspäť na
 * stránku a doplniť reálne odoslanie (napr. cez Resend / Nodemailer +
 * SMTP, alebo webhook do CRM) + príslušné premenné prostredia.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná požiadavka." }, { status: 400 });
  }

  const { name, email, message, consent } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
    return NextResponse.json(
      { error: "Vyplň prosím meno, e-mail, správu a odsúhlas spracovanie údajov." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Zadaj prosím platný e-mail." }, { status: 400 });
  }

  // Zámerne len log — pozri TODO vyššie.
  console.info("[kontaktný formulár] nová požiadavka (odosielanie e-mailu zatiaľ nie je napojené):", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
