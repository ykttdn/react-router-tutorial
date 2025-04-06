import { redirect } from "react-router";
import type { Route } from "./+types/destroy-contact";

import { deleteContact } from "../data";

export async function clientAction({ params }: Route.ClientActionArgs) {
  await deleteContact(params.contactId);
  return redirect("/");
}
