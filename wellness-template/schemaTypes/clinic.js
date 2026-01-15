export default {
  name: "clinic",
  title: "Klinikk",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Klinikknavn",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "phone",
      title: "Telefon",
      type: "string",
    },
    {
      name: "email",
      title: "E-post",
      type: "string",
    },
    {
      name: "address",
      title: "Adresse",
      type: "string",
    },
    {
      name: "openingHours",
      title: "Åpningstider",
      type: "string",
    },
    {
      name: "bookingUrl",
      title: "Booking link",
      type: "url",
    },
  ],
};
