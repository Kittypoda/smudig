import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function Booking() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "service"] | order(order asc)`)
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-neutral-900 mb-6">
        Send bookingforespørsel
      </h1>

      <p className="text-neutral-600 mb-10 max-w-xl">
        Fyll ut skjemaet under, så tar vi kontakt med deg for å bekrefte time.
      </p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-sm border border-neutral-200"
      >
        {/* Web3Forms Key */}
        <input type="hidden" name="access_key" value="2ed53145-b11e-41d5-b36e-5175b90c0156" />

        {/* Redirect URL */}
        <input
          type="hidden"
          name="redirect"
          value={`${window.location.origin}/booking-success`}
        />

        {/* Navn */}
        <div>
          <label className="block text-sm mb-1">Navn</label>
          <input
            type="text"
            name="navn"
            required
            className="w-full border border-neutral-300 p-3 rounded-md focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        {/* E-post */}
        <div>
          <label className="block text-sm mb-1">E-post</label>
          <input
            type="email"
            name="epost"
            required
            className="w-full border border-neutral-300 p-3 rounded-md focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        {/* Telefon */}
        <div>
          <label className="block text-sm mb-1">Telefon</label>
          <input
            type="text"
            name="telefon"
            required
            className="w-full border border-neutral-300 p-3 rounded-md focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        {/* Behandling */}
        <div>
          <label className="block text-sm mb-1">Behandling</label>
          <select
            name="behandling"
            className="w-full border border-neutral-300 p-3 rounded-md bg-white focus:ring-1 focus:ring-neutral-400"
          >
            <option value="">Velg behandling</option>
            {services.map((service) => (
              <option key={service._id} value={service.title}>
                {service.title} ({service.price} kr)
              </option>
            ))}
          </select>
        </div>

        {/* Dato */}
        <div>
          <label className="block text-sm mb-1">Ønsket dato</label>
          <input
            type="date"
            name="dato"
            className="w-full border border-neutral-300 p-3 rounded-md focus:ring-1 focus:ring-neutral-400"
          />
        </div>

        {/* Melding */}
        <div>
          <label className="block text-sm mb-1">Melding</label>
          <textarea
            name="melding"
            rows="4"
            className="w-full border border-neutral-300 p-3 rounded-md focus:ring-1 focus:ring-neutral-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-800 transition"
        >
          Send forespørsel
        </button>
      </form>
    </div>
  );
}
