"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactElement } from "react";

interface ServiceOption {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  icon: ReactElement;
  image: string;
  helper?: string;
}

const services: ServiceOption[] = [
  {
    title: "Buy Kathgolap Saplings",
    description:
      "Healthy কাঠগোলাপ flower plants grown with care and ready for immediate delivery within Chattogram.",
    actionLabel: "Message on WhatsApp",
    href:
      "https://wa.me/8801884040881?text=Hi%20Rahul,%0A%0AI%20want%20to%20order%20Kathgolap%20saplings.%20Here%20are%20my%20details:%0A%0AName:%20[Your%20Name]%0AQuantity%20Needed:%20[Number%20of%20Saplings]%0ADelivery%20Location:%20[Address/Area]%0APreferred%20Delivery%20Date:%20[Date]%0AAdditional%20Notes:%20[Any%20special%20requests]%0A%0APlease%20let%20me%20know%20pricing%20and%20next%20steps.%0AThank%20you!",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3c2.8 0 5 2.2 5 5 0 2.1-1.4 4-3.4 4.7a1 1 0 0 0-.6.9v2.4a1 1 0 0 1-.29.7l-1.42 1.42a1 1 0 0 1-1.41 0L8.4 18.7a1 1 0 0 1-.29-.7v-2.4a1 1 0 0 0-.6-.9A5.01 5.01 0 0 1 7 8c0-2.8 2.2-5 5-5Zm0 1.8A3.2 3.2 0 0 0 8.8 8a3.2 3.2 0 0 0 2.2 3v1.6h2V11A3.2 3.2 0 0 0 15.2 8 3.2 3.2 0 0 0 12 4.8Z"
          fill="currentColor"
        />
        <path
          d="M5 20h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/Garderner_Job.jpg",
  },
  {
    title: "Hire as Photographer",
    description:
      "Book Rahul for one-day object or occasion photography (available on off-days only).",
    actionLabel: "Schedule via WhatsApp",
    href:
      "https://wa.me/8801884040881?text=Hi%20Rahul,%0A%0AI%20would%20like%20to%20hire%20you%20for%20a%20photography%20session.%20Details%20below:%0A%0AOccasion%20Name:%20[Event]%0AProposed%20Date:%20[Date]%0ALocation:%20[Venue/City]%0AShoot%20Type:%20[Object/Occasion]%0AContact%20Number:%20[Your%20Phone]%0AAdditional%20Notes:%20[Any%20specific%20requests]%0A%0AKindly%20confirm%20your%20availability%20for%20an%20off-day%20slot.%0AThank%20you!",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8a2 2 0 0 1 2-2h1.172a2 2 0 0 0 1.414-.586l1.242-1.242A2 2 0 0 1 10.828 3h2.344a2 2 0 0 1 1.414.586l1.242 1.242A2 2 0 0 0 17.242 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12.5"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="17.5" cy="8.5" r="0.75" fill="currentColor" />
      </svg>
    ),
    image: "/Photographer_Job.jpg",
    helper: "Replace [DATE] and [OCCASION] with your details before sending.",
  },
  {
    title: "Network Engineer Support",
    description:
      "Need troubleshooting, on-site configuration, or infrastructure planning? Let’s discuss your requirements.",
    actionLabel: "Write an Email",
    href:
      "https://mail.google.com/mail/?view=cm&fs=1&to=rahulchandradey08@gmail.com&su=Network%20Infrastructure%20Support&body=Hi%20Rahul,%0A%0AI%20am%20reaching%20out%20for%20network%20engineering%20support.%20Please%20find%20the%20details%20below:%0A%0AOrganisation/Individual:%20[Name]%0AService%20Required:%20[Troubleshooting/Setup/Audit/Other]%0ALocation:%20[Address/Remote]%0APreferred%20Timeline:%20[Dates]%0AProject%20Scope/Issue%20Description:%0A-%20%5BPoint%201%5D%0A-%20%5BPoint%202%5D%0A-%20%5BPoint%203%5D%0ATechnical%20Contacts:%20[Team%20Members%20or%20Phone]%0AAdditional%20Notes:%20[Any%20other%20info]%0A%0ALooking%20forward%20to%20your%20response.%0AThank%20you!",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M6 7l6 5 6-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/NetworkEngineer_Job.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-indigo-200/18 via-fuchsia-100/12 to-slate-200/18 blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-slate-200/18 via-emerald-100/12 to-indigo-200/18 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-500/30 text-indigo-700 text-sm uppercase tracking-[0.2em]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Services
          </motion.span>
          <h2
            id="services-heading"
            className="mt-6 text-4xl md:text-5xl font-bold text-slate-900"
          >
            Ways to Collaborate with Rahul
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From cultivating premium flower saplings to capturing stories and
            stabilising networks, choose the path that fits your next project.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-slate-200 bg-white backdrop-blur-xl p-8 shadow-[0_25px_65px_rgba(148,163,184,0.25)] hover:shadow-[0_35px_75px_rgba(79,70,229,0.25)] transition-all"
            >
              <div className="relative mb-6 h-44 rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 360px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                  <div className="flex items-start gap-4">
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <motion.a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/50 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 hover:border-indigo-500 transition-all"
              >
                {service.actionLabel}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 7h10v10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>

              {service.helper && (
                <p className="mt-3 text-xs text-slate-500">
                  {service.helper}
                </p>
              )}

              <div className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-200/20 via-fuchsia-200/15 to-emerald-200/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

