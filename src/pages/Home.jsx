import { Image } from "../components/Image";
import googleLogo from "../assets/logo-google.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Image image={googleLogo} styleClass={"h-24 mt-2 text-center"} />
      </div>
    </>
  );
}
