export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
            Om klinikken
          </h2>
          <p className="text-neutral-600 mb-4">
            Vi er en liten, profesjonell klinikk som tilbyr rolige og personlige behandlinger for både kropp og sinn.
          </p>
          <p className="text-neutral-600">
            Vårt mål er å skape en trygg og avslappende opplevelse der du føler deg ivaretatt fra første øyeblikk.
          </p>
        </div>

        <div className="w-full h-[350px] bg-neutral-200 rounded-xl flex items-center justify-center">
          <span className="text-neutral-500">Bilde av behandler / klinikk</span>
        </div>

      </div>
    </section>
  );
}
