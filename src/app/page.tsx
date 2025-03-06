import logo from "../img/logo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <header className="bg-orange-400 border-b-amber-500 ">
      <div>

      </div>
      <Image
        className="rounded-full"
        src={logo}
        alt="Next.js logo"
        width={130}
        height={130}
        priority
      />
    </header>
  );
}
