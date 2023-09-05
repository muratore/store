import Logo from "./templates/Logo";
import SocialMedia from "./templates/SocialMedia";

const Footer = () => {
  return (
    <div className=" w-full px-8 py-8 bg-black md:px-28 md:py-16">
      <div className=" xl:flex ">
        <div className="flex flex-col gap-4 xl:w-3/5  mr-20">
          <div>
            <Logo color colorLogo />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <SocialMedia className="mb-4" />
        </div>

        <div className="md:flex  md:gap-28">
          <div className="flex-1 mt-4 ">
            <h3 className=" font-bold mb-5 text-white">Informação</h3>
            <ul>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div className="flex-1 mt-4">
            <h3 className=" font-bold mb-2 text-white">Categorias</h3>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div className="flex-1 mt-4">
            <h3 className=" font-bold mb-2 text-white">Contato</h3>
            <ul>
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t-2 text-center mt-10 border-zinc-600">
        <p> @ 2022 Digital College / F12</p>
      </div>
    </div>
  );
};

export default Footer;
