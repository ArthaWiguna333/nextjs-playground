const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "We craft fast, accessible, and beautiful web experiences tailored to your brand and business goals.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that delight users on iOS and Android.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps pipelines that grow with your business.",
  },
];

export default function CardSection() {
  return (
    <section id="services" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-center text-gray-500">
          Everything you need to bring your vision to life.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
            >
              <span className="text-4xl" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
