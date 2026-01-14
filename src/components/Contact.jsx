export default function Contact() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
          Bestill time eller ta kontakt
        </h2>
        <p className="text-neutral-600 mb-10">
          Ta kontakt med oss for å booke time eller hvis du har spørsmål om våre behandlinger.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="#"
            className="bg-neutral-900 text-white px-8 py-4 rounded-md hover:bg-neutral-800 transition"
          >
            Bestill time
          </a>
          <a
            href="tel:00000000"
            className="border border-neutral-300 px-8 py-4 rounded-md hover:bg-neutral-100 transition"
          >
            Ring oss
          </a>
        </div>

        <p className="mt-8 text-neutral-500">
          Åpningstider: Man–Fre 09:00–17:00
        </p>

      </div>
    </section>
  );
}
