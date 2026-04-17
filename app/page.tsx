import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home() {
  // Fetch data from Sanity for each section
  const { data } = await sanityFetch({
    query: `{
  "hero": *[_type == "hero"][0],
  "choose": *[_type == "whychooseus"][0],
  "services": *[_type == "services"][0],
  "performance": *[_type == "performance"][0],
  "pricing": *[_type == "pricing"][0],
  "testimonials": *[_type == "testimonials"][0],
  "faq": *[_type == "faqs"][0],
  "cta": *[_type == "cta"][0]
}`,
  });

  return (
    <main>
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.choose} />
      <Services data={data.services} />
      <Stats data={data.performance} />
      <Pricing data={data.pricing} />
      <Testimonials data={data.testimonials} />
      <FAQ data={data.faq} />
      <CTA data={data.cta} />
      <Footer />

      <SanityLive />
    </main>
  );
}
