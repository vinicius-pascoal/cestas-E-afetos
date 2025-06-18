import logo from "../img/logo.jpg";
import cafeManhaCasal from "../img/cestas/cafeManhaCasal.jpg";
import Image from "next/image";
import fundoAnimado from "../components/fundoAnimado.tsx";

export default function Home() {
  return (
    <fundoAnimado>
    <div className="w-dvw">
      <header className="bg-orange-200 border-b-4 border-b-amber-500 ">
        <Image
          className="rounded-full"
          src={logo}
          alt="Next.js logo"
          width={130}
          height={130}
          priority
        />
      </header>
      <div>

      </div>
    </div>
    </fundoAnimado>
  );
}
