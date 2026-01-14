const services = [
  {
    title: "Avslappende massasje",
    description: "En rolig helkroppsbehandling som løser opp spenninger og gir ny energi.",
    price: "790 kr",
  },
  {
    title: "Hudpleiebehandling",
    description: "Skånsom og effektiv behandling tilpasset din hudtype.",
    price: "950 kr",
  },
  {
    title: "Yoga & bevegelse",
    description: "Små grupper med fokus på pust, balanse og velvære.",
    price: "350 kr",
  },
];

export default function Services() {
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
          {services.map((service, index) => (
            <div
              key={index}
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
