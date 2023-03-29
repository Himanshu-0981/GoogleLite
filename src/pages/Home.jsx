import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Image image={googleLogo} styleClass={"h-24 mt-2 text-center mb-6"} />
        <SearchBar
          styleClass={
            "rounded-full w-[35rem] pb-3 pt-3 pl-10 pr-10 border focus:outline-none hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          }
        />
      </div>
    </>
  );
}
