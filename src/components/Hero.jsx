import { useTranslation } from "react-i18next";

export default function Hero() {
  const {t} = useTranslation()
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Diagonal blue background */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-green-300 transform skew-x-12 md:skew-x-0 md:-skew-y-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:p-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t("hero.title")} <b className="myfont md:text-green-300 text-black">Youssef Moussaddeq</b>
            </h1>
            <p className="text-lg lg:w-120 md:text-xl text-gray-600 mb-8">
              {t("hero.subtitle")}
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-300 text-white rounded-lg font-semibold hover:bg-green-400 transition-colors mb-12">
              {t("buttons.book")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Social Links */}
            <div className="flex gap-8 text-sm font-semibold">
              <a
                href="#"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                GITHUB
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-400 transition-colors"
              >
                TWITTER
              </a>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="hidden md:block relative z-20">
            <div className="bg-gray-900 ms-10 rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-4 py-3  border-b border-gray-700 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-4 text-sm font-mono">
                <div className="text-gray-500">
                  <div className="text-blue-400">
                    const <span className="text-white">youssef</span> = {"{"}
                  </div>
                  <div className="ml-4 text-white">
                    <div className="text-gray-400">
                      name:{" "}
                      <span className="text-yellow-400">
                        "Youssef Moussaddeq"<span className="text-white">,</span>
                      </span>
                    </div>
                    <div className="text-gray-400">
                      age: <span className="text-yellow-400">20<span className="text-white">,</span></span>
                    </div>
                    <div className="text-gray-400">
                      skills:{" "}
                      <span className="text-yellow-400">
                        "React, Laravel, Mysql,..."<span className="text-white">,</span>
                      </span>
                    </div>
                    <div className="text-gray-400">
                      passion:{" "}
                      <span className="text-yellow-400">
                        "{t("hero.passion")}"
                      </span>
                    </div>
                  </div>
                  <div className="text-blue-400">{"}"}<span className="text-white">;</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <svg
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 text-green-300 opacity-10"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    </section>
  );
}
