import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <div className="max-w-xl mx-auto text-center px-6 py-24">
      <h1 className="text-4xl font-semibold mb-4 text-neutral-900">
        Takk for forespørselen!
      </h1>

      <p className="text-neutral-600 mb-10">
        Vi har mottatt forespørselen din og tar kontakt med deg så snart som mulig.
      </p>

      <Link
        to="/"
        className="bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition"
      >
        Tilbake til forsiden
      </Link>
    </div>
  );
}
