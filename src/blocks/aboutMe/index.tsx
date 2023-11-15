export default function AboutMeBlock() {
  return (
    <section
      id="about"
      className="flex justify-center w-full mb-20 max-md:scroll-mt-44 md:scroll-mt-24 max-md:flex-col max-md:gap-4"
    >
      <div className="w-1/3 max-md:w-full">
        <h2 className="leading-none title-2">Sobre mim</h2>
      </div>

      <div className="w-2/3 max-md:w-full">
        <p className="leading-8 paragraph">
          Desenvolvedor Web e Mobile, músico, designer gráfico e apaixonado por
          ensinar. Estou sempre em busca de desafios. Atualmente estou estudando
          Next.JS, Typescript e Tailwind.CSS e pretendo me aprofundar em testes,
          tanto para o front end quanto para o back end. Tenho dois grandes
          sonhos: O primeiro é contribuir com a comunidade de tecnologia de
          forma significativa, O segundo é poder algum dia ensinar as pessoas.
        </p>
      </div>
    </section>
  );
}
