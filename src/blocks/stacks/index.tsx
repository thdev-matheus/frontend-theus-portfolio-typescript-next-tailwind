import * as C from "@/components";
import { stacksFront, stacksBack } from "@/database/stacks";

export default function StacksBlock() {
  return (
    <section
      id="stacks"
      className="flex flex-col w-full gap-4 mb-20 scroll-mt-24"
    >
      <h2 className="title-2">Tecnologias Front End</h2>
      <ul className="flex flex-wrap justify-center w-full gap-4 mb-10">
        {stacksFront.map((stack) => (
          <C.StackCard key={stack.id} stack={stack} />
        ))}
      </ul>

      <h2 className="title-2">Tecnologias Back End</h2>
      <ul className="flex flex-wrap justify-center w-full gap-4">
        {stacksBack.map((stack) => (
          <C.StackCard key={stack.id} stack={stack} />
        ))}
      </ul>
    </section>
  );
}
