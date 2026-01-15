import { useState, useEffect } from "react";
import { client } from "../sanityClient";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "service"] | order(order asc)`)
      .then((data) => setServices(data));
  }, []);

  if (!services.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-neutral-500">Laster behandlinger...</p>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
            Våre behandlinger
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            Vi tilbyr et utvalg rolige og profesjonelle behandlinger, tilpasset dine behov.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="border border-neutral-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-900 font-semibold">
                  {service.price}
                </span>
                <button className="text-sm font-medium text-neutral-900 underline hover:text-neutral-700">
                  Bestill
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

