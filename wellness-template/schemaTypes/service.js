export default {
  name: "service",
  title: "Behandling",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: "price",
      title: "Pris",
      type: "string",
    },
    {
      name: "order",
      title: "Rekkefølge",
      type: "number",
    },
  ],
};
