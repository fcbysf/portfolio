import { useTranslation } from "react-i18next";
import LogoLoop from "./techStack";

export default function OpenSource() {
  const {t} = useTranslation()
  return (
      <div id="techstack" className="max-w-300 h-full m-auto flex flex-col items-center overflow-hidden bg-gray-50 rounded-xl py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-300 mb-16 myfont">
          {t('techstack.title')}
        </h2>
        <LogoLoop />
      </div>
  );
}
