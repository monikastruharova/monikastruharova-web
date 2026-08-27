import Image from "next/image";

/**
 * Jemný dekoratívny oddeľovač sekcií s logom (mandala) — použité na
 * miestach, kde tematicky rezonuje (kruh, energia, mandala).
 */
export function MandalaDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden>
      <span className="h-px w-16 bg-sand sm:w-28" />
      <Image
        src="/images/logo-mandala.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 opacity-80 sm:h-10 sm:w-10"
      />
      <span className="h-px w-16 bg-sand sm:w-28" />
    </div>
  );
}
