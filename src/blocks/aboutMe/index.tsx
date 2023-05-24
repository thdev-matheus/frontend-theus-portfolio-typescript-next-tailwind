export default function AboutMeBlock() {
  return (
    <section
      id="about"
      className="flex justify-center w-full px-64 mb-20 scroll-mt-24"
    >
      <div className="w-1/3">
        <h2 className="leading-none title-2">Sobre mim</h2>
      </div>

      <div className="w-2/3">
        <p className="leading-8 paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
          magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam
          a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra,
          vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis
          ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
        </p>
      </div>
    </section>
  );
}
