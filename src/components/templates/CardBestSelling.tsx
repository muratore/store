import Link from "next/link";
import { Types } from "mongoose";

interface CardBestSellingProps {
  _id: Types.ObjectId;
  tag?: string;
  img?: any;
  description?: string;
  salePrice?: number;
  nome?: string;
  preco: number;
  desconto?: boolean;
  onSale?: number;
}

const CardBestSelling = (props: CardBestSellingProps) => {
  return (
    <div>
      <div className="w-[290px] h-[300px] bg-white drop-shadow-sm p-5">
        {props.desconto ? (
          <span className=" bg-dc-yellow text-dc-gray font-semibold py-2 text-sm rounded-full px-3">
            {props.onSale}% OFF
          </span>
        ) : (
          ""
        )}

        <div>
          <Link href={`/produtos/${props._id}`}>{props.img}</Link>
        </div>
      </div>
      <div className=" text-slate-700 font-bold text-xs pt-3">{props.tag}</div>
      {props.description ? <p>{props.description}</p> : <p> {props.nome}</p>}
      <span className="line-through text-zinc-400">{props.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</span> {" "}
      <span>
       {props.salePrice?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
      </span>
    </div>
  );
};

export default CardBestSelling;
