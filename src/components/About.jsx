import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function About() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutContact"][0]`)
      .then((data) => setInfo(data));
  }, []);

  if (!info) {
    return (
      <section className="py-20 text-center">
        <p className="text-neutral-500">Laster informasjon...</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
          {info.aboutTitle}
        </h2>

        <p className="text-neutral-600 max-w-3xl leading-relaxed">
          {info.aboutText}
        </p>

      </div>
    </section>
  );
}
