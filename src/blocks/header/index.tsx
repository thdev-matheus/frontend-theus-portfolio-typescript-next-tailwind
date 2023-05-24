import Image from "next/image";
import * as C from "@/components";

export default function HeaderBlock() {
  return (
    <>
      <div className="w-full h-24 mb-44"></div>
      <header className="fixed flex items-center justify-between w-full h-24 px-64 headerbg">
        <Image
          src="logo.svg"
          alt="logo"
          width={150}
          height={50}
          className="w-[100px]"
        />

        <nav className="flex gap-12">
          <a
            href="#about"
            className="font-semibold hover:btn-animation hover:text-color-primary"
          >
            Sobre
          </a>
          <a
            href="#stacks"
            className="font-semibold hover:btn-animation hover:text-color-primary"
          >
            Stacks
          </a>
          <a
            href="#projects"
            className="font-semibold hover:btn-animation hover:text-color-primary"
          >
            Projetos
          </a>
        </nav>

        <div className="w-[9rem]">
          <C.Button>Contato</C.Button>
        </div>
      </header>
    </>
  );
}
