import { Link } from "react-router-dom";

import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-100vh">
        <Image
          image={googleLogo}
          styleClass={"h-[90px] mt-3 text-center mb-6"}
        />
        <SearchBar
          styleClass={
            "rounded-full w-[37rem] pb-3 pt-3 pl-10 pr-10 border focus:outline-none  focus-within:shadow-[0_3px_10px_rgb(0,0,0,0.2)] focus-within:border-0"
          }
        />
        <div className="flex space-x-3 space-y-8">
          <div></div>
          <Button
            title={"Google Search"}
            styleClass={
              "pt-2 pb-2 pr-4 pl-4 bg-[#F0F1F2] text-black font-light rounded  text-sm"
            }
          />
          <Button
            title={"I'm Feeling Lucky"}
            styleClass={
              "pt-2 pb-2 pr-4 pl-4 bg-[#F0F1F2] text-black font-light rounded  text-sm"
            }
          />
        </div>
        <div className="flex items-center text-[#1a0dab]  space-x-2  text-xs mt-8">
          <div>
            <p className="text-black text-[13px] ">Google offered in : </p>
          </div>
          <Link>हिन्दी</Link>
          <Link>বাংলা</Link>
          <Link>తెలుగు</Link>
          <Link>मराठी</Link>
          <Link>தமிழ்</Link>
          <Link>தமிழ்</Link>
          <Link>ગુજરાતી</Link>
          <Link>ಕನ್ನಡ</Link>
          <Link>മലയാളം</Link>
          <Link>ਪੰਜਾਬੀ</Link>
        </div>
      </div>
      <footer className=" fixed bottom-0">
        <Footer />
      </footer>
    </>
  );
}
