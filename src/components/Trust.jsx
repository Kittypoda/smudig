import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function Trust() {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "trustReason"] | order(order asc)`)
      .then((data) => setReasons(data));
  }, []);

  if (!reasons.length) {
    return (
      <section className="py-20 text-center">
        <p className="text-neutral-500">Laster fordeler...</p>
      </section>
    );
  }

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
          {reasons.map((reason) => (
            <div
              key={reason._id}
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

