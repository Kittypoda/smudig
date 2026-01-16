import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import MapEmbed from "./MapEmbed";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start text-center md:text-left">

        {/* LEFT COLUMN – CONTACT INFO */}
        <div className="space-y-6">

          <h2 className="text-3xl font-semibold text-neutral-900 mb-6 md:mb-8">
            Kontakt oss
          </h2>

          {/* Adresse */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <MapPinIcon className="w-6 h-6 text-neutral-900 flex-shrink-0" />
            <div>
              <p className="font-medium">Adresse</p>
              <p>{info.address}</p>
            </div>
          </div>

          {/* Telefon */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <PhoneIcon className="w-6 h-6 text-neutral-900 flex-shrink-0" />
            <div>
              <p className="font-medium">Telefon</p>
              <a
                href={`tel:${info.phone}`}
                className="underline hover:no-underline"
              >
                {info.phone}
              </a>
            </div>
          </div>

          {/* E-post */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <EnvelopeIcon className="w-6 h-6 text-neutral-900 flex-shrink-0" />
            <div>
              <p className="font-medium">E-post</p>
              <a
                href={`mailto:${info.email}`}
                className="underline hover:no-underline"
              >
                {info.email}
              </a>
            </div>
          </div>

          {/* Åpningstider */}
          <div className="flex items-start gap-4 justify-center md:justify-start">
            <ClockIcon className="w-6 h-6 text-neutral-900 flex-shrink-0" />
            <div>
              <p className="font-medium">Åpningstider</p>
              <p>{info.openingHours}</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN – MAP */}
        <MapEmbed address={info.address} />

      </div>
    </section>
  );
}

