import logo from "../img/logo.jpg";
import cafeManhaCasal from "../img/cestas/cafeManhaCasal.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-dvw">
      <header className="bg-orange-200 border-b-4 border-b-amber-500 ">
        <div></div>
        <Image
          className="rounded-full"
          src={logo}
          alt="Next.js logo"
          width={130}
          height={130}
          priority
        />
      </header>
      <ul id="hexGrid">
        <li className="hex">
          <a className="hexIn" href="#">
            <Image
              src={cafeManhaCasal}
              alt=""
            />
            <h1>Cafe da Manha de casal</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        
      </ul>
    </div>
  );
}
