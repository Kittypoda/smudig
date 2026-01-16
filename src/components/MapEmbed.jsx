export default function MapEmbed({ address }) {
  if (!address) return null;

  // Encode address for URL
  const query = encodeURIComponent(address);

  return (
    <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm border">
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${query}&z=14&output=embed`}
      ></iframe>
    </div>
  );
}
