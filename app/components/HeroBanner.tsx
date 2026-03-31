export default function HeroBanner() {
  return (
    <section
      id="home-company-profile"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-900 px-6 pt-20 text-white"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          We Build Solutions That Matter
        </h1>
        <p className="mt-6 text-lg leading-8 text-blue-100 sm:text-xl">
          A trusted partner for digital transformation, innovation, and growth.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow transition-colors hover:bg-blue-50"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
