import ProdutoProps from "@/interfaces/ProdutoProps";
import Image from "next/image";
import MainBtn from "./templates/MainBtn";
import tennis from '../../public/images/bestSelling/Layer1aa2.png'

const SelectedProduct = (props: ProdutoProps) => {
  return (
    <div className=" md:flex items-center my-8">
      {/* Div da imagem */}
      <div className={` w-[50%] min-h-[250px] `}>
        <Image
          className=" w-full h-full object-cover"
          alt={props.nome}
          src={tennis}
        />
      </div>
      {/* ////////// */}

      {/* Div informações produto */}
      <div className={`w-[50%]`}>
        <div className=" p-3 font-black w-20 bg-dc-yellow rounded-sm mb-5">{`${props.desconto}%`}</div>
        <h2 className="text-2xl font-black md:text-5xl">{props.nome}</h2>
        <div>{props.genero?.nome}</div>
        <div>
          {" "}
          <span>
            {`${props.salePrice
              ?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
              .slice(0, 2)}`}
          </span>
          <span className=" text-3xl font-black">
            {`${
              props.salePrice
                ?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
                .split("$")[1]
                .split(",")[0]
            }`}
          </span>
          <span>
            ,
            {`${
              props.salePrice
                ?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
                .split(",")[1]
            }`}
          </span>
        </div>
        <MainBtn className="mt-6" bg texto="Comprar agora" />
      </div>
    </div>
  );
};

export default SelectedProduct;
