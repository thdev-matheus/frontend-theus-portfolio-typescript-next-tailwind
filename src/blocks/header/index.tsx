import Image from "next/image";
import * as C from "@/components";

export default function HeaderBlock() {
  return (
    <header className="flex items-center justify-between w-full h-24 px-64 mb-20">
      <Image
        src="logo.svg"
        alt="logo"
        width={150}
        height={50}
        className="w-[100px]"
      />

      <nav className="flex gap-12">
        <a href="#about" className="font-semibold">
          Sobre
        </a>
        <a href="#stacks" className="font-semibold">
          Stacks
        </a>
        <a href="#projects" className="font-semibold">
          Projetos
        </a>
      </nav>

      <div className="w-[9rem]">
        <C.Button>Contato</C.Button>
      </div>
    </header>
  );
}
