export default function Hero() {
  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            Wellness & behandling
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight mb-6">
            Profesjonell behandling for kropp og sinn
          </h1>

          <p className="text-neutral-600 text-lg mb-8 max-w-xl">
            Vi tilbyr rolige, personlige behandlinger som hjelper deg å slappe av, lade opp og føle deg bedre i hverdagen.
          </p>

          <div className="flex gap-4">
            <button className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition">
              Bestill time
            </button>
            <button className="border border-neutral-300 px-6 py-3 rounded-md hover:bg-neutral-100 transition">
              Kontakt oss
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[400px] bg-neutral-200 rounded-xl flex items-center justify-center">
          <span className="text-neutral-500">Bilde av klinikk / behandling</span>
        </div>

      </div>
    </section>
  );
}
