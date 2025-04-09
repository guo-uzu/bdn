import { useState } from "react";
import BancadaLogo from "@assets/BancadaLogo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Bancada Naranja", href: "#BancadaNaranja" },
    { name: "Spot", href: "#Spot" },
    { name: "Causas", href: "#Causas" },
    { name: "Redes Sociales", href: "#RedesSociales" },
    { name: "Iniciativas", href: "/Iniciativas" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="relative bg-white z-40 flex items-center justify-between p-4 w-full mx-auto max-w-[1000px]">
        <img className="w-[8rem]" src={BancadaLogo.src} alt="Bancada Logo" />
        <div
          className="hidden flex-col gap-1 max-[900px]:flex cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 transition-all ${isOpen ? "bg-orange-300" : "bg-orange-bnd"}`}
            ></div>
          ))}
        </div>

        <nav className="max-[900px]:hidden">
          <ul className="flex gap-5 text-md font-montserrat">
            {menu.map((menuElement, index) => (
              <li key={index} className="text-gray-texts hover:text-orange-bnd transition-colors">
                <a href={menuElement.href}>{menuElement.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        className={`z-10 absolute w-full bg-white max-[900px]:flex flex-col items-center py-4 border-t border-gray-bg transition-transform ${isOpen ? "translate-y-0" : "-translate-y-[300%]"
          }`}
      >
        <ul className="flex flex-col items-center gap-5 max-[425px]:gap-3 text-md font-montserrat max-[425px]:text-xs">
          {menu.map((menuElement, index) => (
            <li key={index} className="text-gray-texts hover:text-orange-bnd transition-colors">
              <a href={menuElement.href} onClick={() => setIsOpen(false)}>{menuElement.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
