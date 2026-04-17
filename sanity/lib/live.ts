import { defineLive } from "next-sanity/live";
import { client } from "./client";

// 1. Get your token from the environment variables
const token = process.env.NEXT_SANITY_API_READ_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // This ensures we use the correct API version for live updates
    apiVersion: "2024-01-01",
  }),
  // 2. Add these two lines to enable draft/real-time previews
  serverToken: process.env.NEXT_SANITY_API_READ_TOKEN,
  browserToken: process.env.NEXT_SANITY_API_READ_TOKEN,
});
