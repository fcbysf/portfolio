import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Articles() {
  const { t } = useTranslation();
  const [activeArticle, setActiveArticle] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const articles = [
    {
      title: "YSF SHOOP",
      type: "(Full-Stack E-Commerce System)",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      description: t("projects.YSFSHOOP.description"),
      image: "/ecommP.PNG",
      images: [
        "/ecommShop.PNG",
        "/product.PNG",
        "/cart.PNG",
        "/userOrders.PNG",
        "/addProduct.PNG",
        "/adminProducts.PNG",
        "/aminOrders.PNG",
        "/adminUsers.PNG",
      ],
      techs: [
        "/reactIcon.png",
        "/laravelIcon.png",
        "/mysqlIcon.png",
        "/cssIcon.png",
        "/githubIcon.png",
      ],
      githublink: "https://github.com/fcbysf/E-commerce",
      liveDemo: "",
    },
    {
      title: "BLoggy ",
      type: "(Multi-User Blogging System)",
      bgColor: "bg-white-50 border border-gray-200",
      textColor: "text-gray-900",
      description: t("projects.bloggy.description"),
      image: "/bloggyP.PNG",
      images: [
        "/blog/bloglogin.PNG",
        "/blog/BLogSignUp.PNG",
        "/blog/blogsPage.PNG",
        "/blog/comments page.PNG",
        "/blog/profile.PNG",
        "/blog/profilecommnts.PNG",
      ],
      techs: [
        "/reactIcon.png",
        "/laravelIcon.png",
        "/mysqlIcon.png",
        "/cssIcon.png",
        "/githubIcon.png",
      ],
      githublink: "https://github.com/fcbysf/Blog-Project-laravel-react-",
      liveDemo: "",
    },
    {
      title: "sales Force ",
      type: "(Sales & Pipeline CRM)",
      bgColor: "bg-gray-800 border border-gray-200",
      textColor: "text-white",
      description: t("projects.CRM.description"),
      image: "/CRMP.PNG",
      images: [
        "/CRM/CRMlanding.PNG",
        "/CRM/CRMsignIn.PNG",
        "/CRM/home.PNG",
        "/CRM/CRMgraphs.PNG",
        "/CRMP.PNG",
        "/CRM/CRMOopps.PNG",
        "/CRM/details.PNG",
        "/CRM/add.PNG",
      ],
      techs: [
        "/reactIcon.png",
        "/githubIcon.png",
        "/tailwind.svg",
        "/redux.png",
      ],
      githublink: "https://github.com/Abderrahmane-lrt/SalesForce-CRM-SaaS",
      liveDemo: "https://sales-force-maroc-crm.vercel.app/",
    },
  ];
  return (
    <section id="projects" className="bg-white py-20 md:py-32 z-40 relative">
      {isOpen && activeArticle && (
        <div
          className="fixed inset-0 z-999 bg-black/35 backdrop-blur-sm 
               overflow-y-auto no-scrollbar"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="gallery md:w-3/4 mx-auto my-20 md:my-22 lg:my-20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Description */}
            <p className="text-white font-semibold opacity-95 max-w-220 m-auto">
              {activeArticle.description}
            </p>

            <Swiper
              modules={[Keyboard, Navigation, Pagination]}
              initialSlide={startIndex}
              slidesPerView={1}
              navigation
              loop={true}
              mousewheel={true}
              keyboard={true}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="rounded-2xl"
            >
              {[activeArticle.image, ...activeArticle.images].map((img, i) => (
                <SwiperSlide key={i} className="rounded-2xl">
                  <img
                    src={img}
                    className="w-full h-full md:h-120 mt-5 md:mt-3 lg:mt-0 object-contain"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden z-10 md:px-6 lg:px-8 ">
        <div className="absolute -z-10 inset-y-0 right-20 w-1/2 bg-green-300 transform skew-y-40 skew-x-40 md:-skew-x-55 md:skew-y-20"></div>
        <div className="absolute -z-10 inset-y-0 left-20 w-1/2 bg-green-300 transform -skew-y-40 -skew-x-40 md:skew-x-55 md:-skew-y-20"></div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-300 mb-16 myfont">
          PROJECTS
        </h2>
        <div className="relative z-10">
          <button className="hidden lg:block prev-btn absolute left-20 opacity-50  top-1/2 -translate-y-1/2 z-10  text-white bg-green-300  p-1 rounded-full cursor-pointer">
            <ChevronLeft size={40} />
          </button>

          <button className="hidden lg:block next-btn absolute right-20 opacity-50 top-1/2 -translate-y-1/2 z-10 text-white bg-green-300 p-1 rounded-full cursor-pointer">
            <ChevronRight size={40} />
          </button>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            mousewheel={true}
            keyboard={true}
            spaceBetween={30}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{ clickable: true }}
            className="w-full max-w-4xl"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`pt-5 pb-1 rounded-lg transition-all hover:shadow-lg ${article.bgColor}`}
                >
                  <h3
                    className={`mx-5 text-xl font-bold mb-4 ${article.textColor} md:flex justify-between items-center uppercase`}
                  >
                    {article.title}
                    <small className="opacity-75">{article.type}</small>
                  </h3>
                  <div className="w-full h-80 flex relative ">
                    {isHovered && (
                      <div
                        className="hidden md:flex md:w-2/3 w-full md:h-full bg-black/55 font-semibold text-lg text-white justify-center items-center p-25 absolute cursor-pointer rounded "
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                          setActiveArticle(article);
                          setStartIndex(index);
                          setIsOpen(true);
                        }}
                      >
                        <p className="opacity-90">{article.description}</p>
                      </div>
                    )}{" "}
                    <img
                      src={article.image}
                      className="md:w-2/3 w-full md:h-full not-md:object-contain cursor-pointer rounded"
                      alt=""
                      onMouseOver={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => {
                        setActiveArticle(article);
                        setStartIndex(index);
                        setIsOpen(true);
                      }}
                    />
                    <div className="hidden md:block images w-2/3 h-fit">
                      {article.images.map((image, index) => (
                        <div
                          className={`${
                            index == 1 &&
                            "w-full h-40 relative opacity-80 flex justify-center items-center bg-gray-900 "
                          }`}
                          key={index}
                          onClick={() => {
                            setActiveArticle(article);
                            setStartIndex(index - 1);
                            setIsOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt=""
                            className={`h-40 object-cover w-90 rounded cursor-pointer ${
                              index >= 2 && "hidden"
                            } ${index == 1 && "absolute opacity-30"}`}
                          />
                          {index == 1 && (
                            <h1 className="absolute top-1/2 -translate-y-1/2 text-white text-3xl opacity-90 cursor-pointer">
                              +{article.images.length - 1}
                            </h1>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="flex items-center ms-2 mt-2 opacity-90">
                      {article.techs.map((tech, index) => (
                        <div
                          className="w-10 h-10 rounded-full bg-gray-50 opacity-85 flex items-center justify-center shadow-lg"
                          style={{
                            marginLeft: index === 0 ? "0px" : "-15px",
                            zIndex: article.techs.length + index,
                          }}
                          key={index}
                        >
                          <img
                            src={tech}
                            alt="tech"
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="btns mt-3 me-2 flex gap-1.5">
                      <Button githublink={article.githublink} />
                      <Btn2 liveLink={article.liveDemo} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const Button = ({ githublink }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group relative opacity-80"
      onClick={() => navigate(githublink)}
    >
      <button>
        <svg
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="w-11 hover:scale-115 duration-200 hover:stroke-green-300 cursor-pointer bg-green-50 rounded-full p-2"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        GitHub<span></span>
      </span>
    </div>
  );
};
const Btn2 = ({ liveLink }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative opacity-80"
      onClick={() => navigate(liveLink)}
    >
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-11  hover:scale-115 duration-200 hover:stroke-green-300 cursor-pointer bg-green-50 rounded-full p-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
          <path d="M7 20l10 0" />
          <path d="M9 16l0 4" />
          <path d="M15 16l0 4" />
          <path d="M17 4h4v4" />
          <path d="M16 9l5 -5" />
        </svg>
      </button>
      <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        Demo<span></span>
      </span>
    </div>
  );
};
