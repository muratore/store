interface CardBestSellingProps {
  tag?: string;
  img?: any;
  description?: string;
  salePrice?: number;
  nome?:string
  preco: number;
  desconto?: boolean;
  onSale?: number;
}

const CardBestSelling = (props: CardBestSellingProps) => {
  return (
    <div className="">
        <div className="w-[290px] h-[300px] bg-white drop-shadow-sm p-5"> 
        {props.desconto ? (
        <span className=" bg-dc-yellow text-dc-gray font-semibold py-2 text-sm rounded-full px-3">
          {props.onSale}% OFF
        </span>
      ) : (
        ""
      )}
      
      <div> {props.img}
        </div>
        </div>
        <div className=" text-slate-700 font-bold text-xs pt-3">{props.tag}</div>
        {props.description ? <p>{props.description}</p> : <p> {props.nome}</p> }
        
        <span className="line-through text-zinc-400">{props.preco}</span>{" "}
        <span>R$ {props.salePrice}</span>
      
    </div>
  );
};

export default CardBestSelling;
