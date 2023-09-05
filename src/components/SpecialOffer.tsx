import Image from "next/image";
import CarrosselItem from "./CarrosselItem";
import MainBtn from "./templates/MainBtn";
import imgOffer from "../../public/images/specialOffer/jordan.png";

const SpecialOffer = () => {
  return (
    <div className="container m-auto ">
      <CarrosselItem
        className=" flex-row-reverse"
        tag="Oferta Especial"
        title="Air Jordan edição de colecionador"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        btn={<MainBtn bg texto="Ver Oferta" />}
        img={
          <Image
            src={imgOffer}
            className="absolute object-contain"
            fill
            alt="Oferta Especial Jordan"
          />
        }
      >
        <div className=" w-[220px] h-[220px] xl:w-[450px] xl:h-[450px] lg:w-[300px] lg:h-[300px] rounded-full rotate-90 bg-gradient-to-r from-purple-200 to-white absolute left-[25%] xl:top-0 top-[15%]"></div>
      </CarrosselItem>
    </div>
  );
};

export default SpecialOffer;
