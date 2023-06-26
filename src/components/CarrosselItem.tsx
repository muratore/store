interface CarrosselProps {
  tag?: string;
  title?: string;
  text?: string;
  btn?: any;
  img?: any;
  className?: string;
}

const CarrosselItem = (props: CarrosselProps) => {
  return (
    <div className="w-[1350px]">
      <div className={`flex h-[680px] bg-green-500 ${props.className ?? ''}`}>
        <div className="flex flex-col justify-center *bg-purple-600 w-[35%] gap-5">
          <div className=" text-yellow-500 font-bold">{props.tag} </div>
          <div className=" text-6xl font-extrabold">{props.title}</div>
          <div className=" text-dc-gray">{props.text}</div>
          <div className=" mt-5">{props.btn}</div>
        </div>
        <div className="flex bg-yellow-500 w-[65%] relative">{props.img}</div>
      </div>
    </div>
  );
};

export default CarrosselItem;
