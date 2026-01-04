import { useTranslation } from "react-i18next";

export default function About() {
  const {t} = useTranslation()
  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-300 mb-16 myfont">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="md:w-80 md:h-96 w-68 bg-green-300 rounded-lg overflow-hidden">
              {/* Placeholder for image */}
              <img
                src="/mee bg.png"
                alt="Charles"
                className="w-full h-full object-cover snap-proximity"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 lg:block hidden">
              {t("about.p2")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed lg:block hidden">
              {t("about.p3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
