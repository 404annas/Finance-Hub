"use client";

import { testimonials as fallbackTestimonials } from "@/lib/data";
import { StarIcon } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export function Testimonials({ data }: { data?: any }) {
  const heading = data?.heading ?? "What Our Users Say";
  const description =
    data?.description ??
    "Join thousands of satisfied investors who have transformed their financial future.";
  const testimonialCards = data
    ? [data.card1, data.card2, data.card3].filter(Boolean)
    : fallbackTestimonials;

  return (
    <section
      id="testimonials"
      className="border-t border-slate-800 bg-slate-900/30 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">{heading}</h2>
          <p className="max-w-2xl text-slate-400">{description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialCards.map((testimonial, index) => {
            const isSanityData = data !== undefined;
            const quote = isSanityData
              ? testimonial.description
              : testimonial.quote;
            const author = isSanityData ? testimonial.name : testimonial.author;
            const role = isSanityData
              ? testimonial.designation
              : testimonial.role;
            const company = isSanityData ? "" : testimonial.company;
            const avatar = isSanityData
              ? testimonial.image
              : testimonial.avatar;

            return (
              <div
                key={author ?? index}
                className="rounded border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mb-6 text-sm text-slate-300">{quote}</p>

                <div className="flex items-center gap-3">
                  {isSanityData && avatar ? (
                    <img
                      loading="lazy"
                      src={urlFor(avatar).width(40).height(40).url()}
                      alt={author}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                      {avatar}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">{author}</p>
                    <p className="text-xs text-slate-400">
                      {role}
                      {company && ` at ${company}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
