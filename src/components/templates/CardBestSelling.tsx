import Link from "next/link";
import Currency from '@/utils/Currency'
import ProdutoProps from "@/interfaces/ProdutoProps";
import Image from "next/image";

const CardBestSelling = (props: ProdutoProps) => {
  const precoComDesconto = (props.preco) - (props.preco * props.desconto / 100)
  return (
    <div>
      <div className="w-[290px] h-[300px] bg-white drop-shadow-sm p-5">
        {props.desconto ? (
          <span className=" bg-dc-yellow text-dc-gray font-semibold py-2 text-sm rounded-full px-3">
            {props.desconto}% OFF
          </span>
        ) : (
          ""
        )}
        <div>
          {props.image && 
          <Link href={`/produtos/${props._id}`}>
           <Image
           src={props.image}
           width={300}
           height={150}
           alt='imagem do produto'
           />
           </Link>
          }
        </div>
      </div>
      <div className=" text-slate-700 font-bold text-xs pt-3">
        {props.nome}
      </div>
      <div>
      <span className="line-through text-zinc-400">{Currency.format(props.preco)}</span> {" "}
      <span className=" text-zinc-800">
        {Currency.format(precoComDesconto)}
        </span> {" "}
      </div>
    </div>
  );
};

export default CardBestSelling;
