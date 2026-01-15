import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityImageUrl";

export default function Hero() {
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "clinic"][0]`).then((data) => setClinic(data));
  }, []);

  if (!clinic) {
    return <div className="p-10">Laster...</div>;
  }

  const heroImageUrl = clinic.heroImage ? urlFor(clinic.heroImage).width(900).url() : null;

  return (
    <section className="bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
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

          <div className="flex flex-col sm:flex-row gap-4">
            {clinic.bookingUrl ? (
              <>
                <a
                  href={clinic.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition font-medium flex items-center gap-2"
                >
                  Book via Timma
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    Anbefalt
                  </span>
                </a>

                <Link
                  to="/booking"
                  className="border border-neutral-300 px-6 py-3 rounded-md hover:bg-neutral-100 transition text-neutral-800"
                >
                  Send forespørsel
                </Link>
              </>
            ) : (
              <Link
                to="/booking"
                className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition font-medium"
              >
                Send bookingforespørsel
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT SIDE — DYNAMISK HERO-BILDE */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden bg-neutral-200 flex items-center justify-center">

          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Klinikk hero"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-neutral-500">Ingen bilde lastet opp</span>
          )}

        </div>

      </div>
    </section>
  );
}



