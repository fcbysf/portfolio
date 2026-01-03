import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Diagonal blue background */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-green-300 transform skew-x-12 md:skew-x-0 md:-skew-y-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:p-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t("hero.title")}{" "}
              <b className="myfont md:text-green-300 text-black">
                Youssef Moussaddeq
              </b>
            </h1>
            <p className="text-lg lg:w-120 md:text-xl text-gray-600 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="btns flex gap-2 items-center">
              <a
                href="/Youssef_Moussaddeq_CV.pdf"
                download
                className="inline-flex items-center gap-1 px-6 py-3 bg-green-300 text-white rounded-lg font-semibold hover:bg-green-400 transition-colors mb-8"
              >
                {t("buttons.book")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-file-download"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                  <path d="M12 17v-6" />
                  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                </svg>
              </a>
              <a
                href="/Youssef_Moussaddeq_CV.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-3 bg-black/40 text-white rounded-lg font-semibold hover:text-green-200  transition-colors mb-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-eye"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 text-sm font-semibold">
              <a
                target="_blank"
                href="https://github.com/fcbysf"
                className="text-gray-700 hover:text-green-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                </svg>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-moussaddeq-1a8585352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="text-gray-700 hover:text-green-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&to=youssefmoussaddeq00@gmail.com"
                className="text-gray-700 hover:text-green-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-mail"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
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
                        "Youssef Moussaddeq"
                        <span className="text-white">,</span>
                      </span>
                    </div>
                    <div className="text-gray-400">
                      age:{" "}
                      <span className="text-yellow-400">
                        20<span className="text-white">,</span>
                      </span>
                    </div>
                    <div className="text-gray-400">
                      skills:{" "}
                      <span className="text-yellow-400">
                        "React, Laravel, Mysql,..."
                        <span className="text-white">,</span>
                      </span>
                    </div>
                    <div className="text-gray-400">
                      passion:{" "}
                      <span className="text-yellow-400">
                        "{t("hero.passion")}"
                      </span>
                    </div>
                  </div>
                  <div className="text-blue-400">
                    {"}"}
                    <span className="text-white">;</span>
                  </div>
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
