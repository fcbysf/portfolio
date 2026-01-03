import { useTranslation } from "react-i18next";

export default function Services() {
  const {t} = useTranslation()
const services = [
    {
      title: t("services.backend.title"),
      description: t("services.backend.description"),
      image: "/backendimg.png",
      reverse: false,
    },
    {
      title: t("services.frontend.title"),
      description: t("services.frontend.description"),
      image: "/frontendimg.png",
      reverse: true,
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-300 mb-16 myfont">
          {t("services.title")}
        </h2>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
            >
              {/* Image Container */}
              <div
                className={`flex justify-center ${
                  service.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="w-full max-w-md h-80  bg-gray-50">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={service.reverse ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
