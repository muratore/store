import Image from "next/image"

interface ItemHighlightedProps {
 imgUrl:string
 title:string
}

const ItemsHighlighted = (props:ItemHighlightedProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
    <div className="flex justify-center items-center w-[104px] h-[104px] bg-white rounded-full">
        <Image className="left-0 object-contain" src={props.imgUrl} alt={props.title} width={60} height={60} /> 
    </div>
    <span className="text-sm font-bold">{props.title}</span>
    </div>
  )
}

export default ItemsHighlighted