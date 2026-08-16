import { NextResponse } from "next/server";

/**
 * TODO (pozri sekciu 14, bod 3 zadania): potvrdiť s Monikou/Petrom, kam majú
 * poptávky reálne chodiť (e-mail schránka, prípadne CRM), aby sa zachovalo
 * súčasné správanie starého webu (formulár → notifikácia e-mailom Monike,
 * prípadne autoresponder klientovi).
 *
 * Kým toto nie je potvrdené, formulár NEODOSIELA e-maily naostro — iba
 * validuje vstup a zaloguje správu na serveri, aby sa dal front-end
 * otestovať end-to-end. Po potvrdení cieľa sem doplniť reálne odoslanie
 * (napr. cez Resend / Nodemailer + SMTP, alebo webhook do CRM) a nastaviť
 * príslušné premenné prostredia (napr. CONTACT_TO_EMAIL, RESEND_API_KEY).
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
  console.info("[kontaktný formulár] nová poptávka (odosielanie e-mailu zatiaľ nie je napojené):", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
