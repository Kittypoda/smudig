
import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function Hero() {
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "clinic"][0]`)
      .then((data) => setClinic(data));
  }, []);

  if (!clinic) {
    return <div className="p-10">Laster...</div>;
  }

  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            {clinic.name}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight mb-6">
            {clinic.tagline}
          </h1>

          <p className="text-neutral-600 text-lg mb-8 max-w-xl">
            {clinic.description}
          </p>

          <div className="flex gap-4">
            <a
              href={clinic.bookingUrl}
              className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition"
            >
              Bestill time
            </a>
            <a
              href={`tel:${clinic.phone}`}
              className="border border-neutral-300 px-6 py-3 rounded-md hover:bg-neutral-100 transition"
            >
              Ring oss
            </a>
          </div>
        </div>

        <div className="w-full h-[400px] bg-neutral-200 rounded-xl flex items-center justify-center">
          <span className="text-neutral-500">Bilde av klinikk / behandling</span>
        </div>

      </div>
    </section>
  );
}

