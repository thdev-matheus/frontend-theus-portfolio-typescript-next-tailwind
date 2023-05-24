import Image from "next/image";
import * as C from "@/components";

export default function WelcomeBlock() {
  return (
    <section className="flex justify-center w-full px-64">
      <div className="flex flex-col w-1/2 gap-4 pr-8">
        <div>
          <small className="label text-color-primary">
            MATHEUS
            <span className="font-bold text-button-color-primary">!THEUS!</span>
            VIEIRA
          </small>

          <h1 className="leading-tight title-1">Bem vindo ao meu portfólio!</h1>
        </div>

        <p className="paragraph">
          Não é só o que você faz que é importante, mas também como você faz.
        </p>

        <div className="w-[9rem]">
          <C.Button>Saiba mais</C.Button>
        </div>
      </div>

      <div className="w-1/2">
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
