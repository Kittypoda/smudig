import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImageUrl";
import BookingModal from "./BookingModal";

export default function Header() {
  const [clinic, setClinic] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    client.fetch(`*[_type == "clinic"][0]`).then((data) =>
      setClinic({
        ...data,
        bookingUrl: "https://www.timma.no", // ← hardkodet midlertidig
      })
    );
  }, []);

  if (!clinic) return null;

  const logoUrl = clinic.logo ? urlFor(clinic.logo).width(200).url() : null;

  // Når brukeren trykker på "Book nå"
  const handleBookingClick = () => {
    // Nå er bookingUrl ALLTID satt → alltid vis modal
    setModalOpen(true);
  };

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={clinic.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-xl font-semibold text-neutral-900">
                {clinic.name}
              </span>
            )}
          </Link>

          {/* BOOK NOW BUTTON */}
          <button
            onClick={handleBookingClick}
            className="bg-neutral-900 text-white px-5 py-2 rounded-md hover:bg-neutral-800 transition font-medium"
          >
            Book nå
          </button>
        </div>
      </header>

      {/* BOOKING MODAL */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookingUrl={clinic.bookingUrl}
      />
    </>
  );
}
