import { Link } from "react-router-dom";

export default function BookingModal({ isOpen, onClose, bookingUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">

        <h2 className="text-2xl font-semibold mb-6">Hvordan vil du booke?</h2>

        {bookingUrl ? (
          <div className="space-y-4">

            {/* Ekstern booking */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-800 transition font-medium"
            >
              Book via Timma (anbefalt)
            </a>

            {/* Intern booking */}
            <Link
              to="/booking"
              onClick={onClose}
              className="block border border-neutral-300 py-3 rounded-md hover:bg-neutral-100 transition"
            >
              Send bookingforespørsel
            </Link>
          </div>
        ) : (
          /* Hvis ingen bookingUrl → kun intern booking */
          <Link
            to="/booking"
            onClick={onClose}
            className="block bg-neutral-900 text-white py-3 rounded-md hover:bg-neutral-800 transition font-medium"
          >
            Gå til bookingskjema
          </Link>
        )}

        <button
          onClick={onClose}
          className="mt-6 text-neutral-500 hover:text-neutral-700"
        >
          Lukk
        </button>

      </div>
    </div>
  );
}

