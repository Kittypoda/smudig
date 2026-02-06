import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImageUrl";

export default function Hero() {
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "clinic"][0]`).then((data) => setClinic(data));
  }, []);

  if (!clinic) {
    return <div className="p-10">Laster...</div>;
  }

  const heroImageUrl = clinic.heroImage
    ? urlFor(clinic.heroImage).width(1200).url()
    : null;

  return (
    <section className="hero">
      <div className="hero-wrapper">
        {/* TEXT */}
        <div className="hero-text">
          <h1 className="hero-heading">
            {clinic.tagline}
          </h1>

          <p className="hero-description">
            {clinic.description}
          </p>

          <button className="hero-cta">
            Book nå
          </button>
        </div>

        {/* IMAGE */}
        <div className="hero-image">
          {heroImageUrl ? (
            <img
              src={heroImageUrl}
              alt="Klinikk hero"
            />
          ) : (
            <div className="hero-image-placeholder">
              Ingen bilde lastet opp
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

