import Image from "next/image";
import * as C from "@/components";

export default function WelcomeBlock() {
  return (
    <section className="flex justify-center w-full mb-20 max-md:flex-col max-sm:items-center max-md:gap-12">
      <div className="flex flex-col w-1/2 gap-4 pr-8 max-lg:w-full">
        <div>
          <small className="label text-color-primary">
            MATHEUS
            <span className="font-bold text-button-color-primary">!THEUS!</span>
            VIEIRA
          </small>

          <h1 className="leading-tight title-1 max-sm:title-2">
            Bem vindo ao meu portfólio!
          </h1>
        </div>

        <p className="paragraph">
          Não é só o que você faz que é importante, mas também como você faz.
        </p>

        <a href="#about" className="w-[9rem]">
          <C.Button>Saiba mais</C.Button>
        </a>
      </div>

      <div className="w-1/2 max-md:w-full">
        <Image
          src="welcomeImg.svg"
          alt="welcome image"
          width={150}
          height={50}
          className="w-[100%]"
        />
      </div>
    </section>
  );
}
