import { type SchemaTypeDefinition } from "sanity";
import { hero } from "@/sanity/schemaTypes/hero";
import { choose } from "@/sanity/schemaTypes/choose-us";
import { performance } from "@/sanity/schemaTypes/performance";
import { pricing } from "@/sanity/schemaTypes/pricing";
import { services } from "@/sanity/schemaTypes/services";
import { testimonials } from "@/sanity/schemaTypes/testimonials";
import { cta } from "@/sanity/schemaTypes/cta";
import { faqs } from "@/sanity/schemaTypes/faqs";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, choose, performance, pricing, services, testimonials, cta, faqs],
};
