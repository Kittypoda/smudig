import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "qeq1l0ro",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});
