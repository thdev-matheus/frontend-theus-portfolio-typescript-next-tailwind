import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactBlock() {
  return (
    <section
      id="contact"
      className="flex items-center justify-between w-full gap-8 py-12 border-t border-b border-white max-md:flex-col"
    >
      <div className="flex flex-col gap-4 max-md:items-center">
        <h2 className="leading-none title-2">Contato</h2>
        <ul className="flex gap-2">
          <li>
            <a href="https://wa.me/5581996336588">
              <FaWhatsapp className="text-[18pt] text-color-primary hover:btn-animation" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/th-matheus/">
              <FaLinkedin className="text-[18pt] text-color-primary hover:btn-animation" />
            </a>
          </li>
          <li>
            <a href="https://github.com/thdev-matheus">
              <FaGithub className="text-[18pt] text-color-primary hover:btn-animation" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center paragraph">
        Todos os direitos reservados - Matheus Vieira
      </p>
    </section>
  );
}
