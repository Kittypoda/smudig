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
        bookingUrl: "https://www.timma.no",
      })
    );
  }, []);

  if (!clinic) return null;

  const logoUrl = clinic.logo
    ? urlFor(clinic.logo).width(200).url()
    : null;

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          
          <Link to="/" className="header-logo">
            {logoUrl ? (
              <img src={logoUrl} alt={clinic.name} />
            ) : (
              <span className="header-title">{clinic.name}</span>
            )}
          </Link>

          <button
            className="header-cta"
            onClick={() => setModalOpen(true)}
          >
            Book nå
          </button>

        </div>
      </header>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        bookingUrl={clinic.bookingUrl}
      />
    </>
  );
}

