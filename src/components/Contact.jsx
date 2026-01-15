import { useEffect, useState } from "react";
import { client } from "../sanityClient";

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
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
          Kontakt oss
        </h2>

        <div className="space-y-4 text-neutral-700">
          <p><strong>Adresse:</strong> {info.address}</p>
          <p><strong>Telefon:</strong> {info.phone}</p>
          <p><strong>E-post:</strong> {info.email}</p>
          <p><strong>Åpningstider:</strong> {info.openingHours}</p>
        </div>

      </div>
    </section>
  );
}

