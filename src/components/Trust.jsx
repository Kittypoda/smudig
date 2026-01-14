const reasons = [
  {
    title: "Sertifiserte behandlere",
    text: "Alle våre terapeuter og behandlere er utdannet og sertifisert innen sitt fagfelt.",
  },
  {
    title: "Personlig tilpasset",
    text: "Hver behandling tilpasses dine behov og ønsker, slik at du får best mulig resultat.",
  },
  {
    title: "Rolig og trygg atmosfære",
    text: "Vi har skapt et miljø der du kan slappe av og føle deg ivaretatt fra første øyeblikk.",
  },
  {
    title: "Moderne utstyr",
    text: "Vi bruker oppdatert teknologi og kvalitetsprodukter i alle våre behandlinger.",
  },
];

export default function Trust() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-neutral-900 mb-4">
            Hvorfor velge oss
          </h2>
          <p className="text-neutral-600 max-w-2xl">
            Vi legger stor vekt på kvalitet, trygghet og personlig oppfølging i alt vi gjør.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-neutral-200"
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-600">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
