import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import MapEmbed from "./MapEmbed";

export default function Contact() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutContact"][0]`)
      .then((data) => setInfo(data));
  }, []);

  if (!info) {
    return (
      <section className="py-20 text-center">
        <p className="text-neutral-500">Laster kontaktinfo...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT COLUMN – CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
            Kontakt oss
          </h2>

          <div className="space-y-4 text-neutral-700">
            <p>
              <strong className="font-medium">Adresse:</strong><br />
              {info.address}
            </p>

            <p>
              <strong className="font-medium">Telefon:</strong><br />
              <a href={`tel:${info.phone}`} className="underline hover:no-underline">
                {info.phone}
              </a>
            </p>

            <p>
              <strong className="font-medium">E-post:</strong><br />
              <a href={`mailto:${info.email}`} className="underline hover:no-underline">
                {info.email}
              </a>
            </p>

            <p>
              <strong className="font-medium">Åpningstider:</strong><br />
              {info.openingHours}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN – GOOGLE MAP */}
        <MapEmbed address={info.address} />

      </div>
    </section>
  );
}


