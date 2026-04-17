import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { choose } from "./choose-us";
import { performance } from "./performance";
import { pricing } from "./pricing";
import { services } from "./services";
import { testimonials } from "./testimonials";
import { cta } from "./cta";
import { faqs } from "./faqs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, choose, performance, pricing, services, testimonials, cta, faqs],
};
