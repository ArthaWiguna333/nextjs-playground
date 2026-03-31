import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us - Acme Corp",
};

const teamMembers = [
  {
    initials: "JD",
    color: "bg-violet-500",
    name: "Jane Doe",
    role: "CEO",
    bio: "Jane founded Acme Corp with a vision to transform how businesses approach digital solutions.",
  },
  {
    initials: "MS",
    color: "bg-sky-500",
    name: "Mark Smith",
    role: "CTO",
    bio: "Mark leads our engineering teams and drives the technical strategy behind every product we ship.",
  },
  {
    initials: "AL",
    color: "bg-emerald-500",
    name: "Amy Lee",
    role: "Head of Design",
    bio: "Amy crafts intuitive user experiences that delight customers and reflect our brand values.",
  },
  {
    initials: "CR",
    color: "bg-amber-500",
    name: "Carlos Rivera",
    role: "Lead Developer",
    bio: "Carlos architects scalable systems and mentors the team to deliver high-quality code.",
  },
];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 text-white py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              About Us
            </h1>
            <p className="text-lg text-zinc-300">
              Learn more about our story, mission, and the team behind Acme
              Corp.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
              Our Story
            </h2>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Acme Corp was founded in 2014 by a small group of engineers and
                designers who believed that great software should be both
                powerful and a joy to use. Starting out of a shared office
                space, we took on our first clients and quickly built a
                reputation for quality and reliability.
              </p>
              <p>
                Over the years we grew from a scrappy startup into a
                full-service digital agency, expanding our team and our
                capabilities. We brought on specialists in product design,
                cloud infrastructure, data engineering, and mobile development
                — always with the same goal: help our clients build things that
                matter.
              </p>
              <p>
                Today, Acme Corp partners with organisations of all sizes —
                from early-stage startups to enterprise companies — to deliver
                digital products that make a real difference. We&apos;re proud
                of the journey so far, and even more excited about what comes
                next.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10 text-center">
              Mission &amp; Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
                <span className="text-4xl mb-4 block">🎯</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We exist to empower businesses with thoughtfully crafted
                  digital products. By combining rigorous engineering with
                  human-centred design, we help our clients solve real problems
                  and create lasting value for their users.
                </p>
              </article>
              <article className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
                <span className="text-4xl mb-4 block">🚀</span>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We envision a future where every organisation, regardless of
                  size, has access to world-class digital capabilities. We
                  strive to be the partner that makes that future possible —
                  building bridges between ambition and execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="flex items-start gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6"
                >
                  <div
                    className={`${member.color} w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-zinc-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white dark:bg-zinc-950 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              We&apos;d love to hear about your project. Get in touch and
              let&apos;s build something great together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-8 py-3 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
