import Link from "next/link";

interface CarrosselProps {
  tag?: string;
  title?: string;
  nome?: string;
  preco?: number;
  text?: string;
  btn?: any;
  url?: string;
  img?: any;
  className?: string;
  children?: any;
}

const CarrosselItem = (props: CarrosselProps) => {
  return (
    <div className="w-screen flex flex-1 2xl:px-28 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px]">
      <div
        className={`min-w-full md:flex flex-1 md:h-[680px] p-5 ${
          props.className ?? ""
        }`}
      >
        <div className=" flex flex-col md:w-[40%] justify-center pr-5 gap-5">
          {/* <div className="text-yellow-500 font-bold">{props.tag} </div> */}
          <div className=" 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-extrabold">
            {props.title}
          </div>
          <div className=" text-dc-gray">{props.text}</div>
          <div className=" mt-5">{props.btn}</div>
        </div>
        <Link
          className={`flex  h-[300px] md:h-full md:w-[60%] relative`}
          href={props.url ?? ""}
        >
          {props.children}
          {props.img}
        </Link>
      </div>
    </div>
  );
};

export default CarrosselItem;
