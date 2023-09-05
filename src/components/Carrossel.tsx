"use client";
import Image from "next/image";
import dataSale from "../data/sale";
import CarrosselItem from "./CarrosselItem";
import MainBtn from "./templates/MainBtn";

import { useEffect, useState } from "react";

const Carrossel = () => {
  const containerSlide = +(100 / dataSale.length).toFixed(2);
  const sizeContainer2XL = dataSale.length * 1536;
  const sizeContainerXL = dataSale.length * 1280;
  const sizeContainerLG = dataSale.length * 1024;
  const sizeContainerMD = dataSale.length * 768;

  const [move, setMove] = useState(0);
  const [cor, setCor] = useState(0)

  //   const [windowWidth, SetWindowWidth] = useState();

  const maxSlide = containerSlide * dataSale.length - containerSlide;
  // console.log(move);
  // console.log(maxSlide);

  setTimeout(() => {
    if (move >= maxSlide) {
      console.log("caiu no maxSlide");
      setMove(0);
      setCor(0)
    } else {
      setMove(move + containerSlide)
      setCor(cor + 1)
    }
  }, 3000);

  return (
    <div>
    <div className={`container flex overflow-hidden m-auto`}>
      <div
        className={`flex flex-1
        2xl:w-[${sizeContainer2XL}px]  
        xl:w-[${sizeContainerXL}px] 
        lg:w-[${sizeContainerLG}px]  
        md:w-[${sizeContainerMD}px]         
        transition-all ease-out duration-700
        `}
        style={{ transform: `translateX(-${move}%` }}
        
      >
        {dataSale.map((item, i) => (
          <CarrosselItem
            key={i}
            tag={item.header}
            title={item.title}
            text={item.text}
            btn={<MainBtn bg texto="Ver Ofertas" />}
            img={
              <Image
                className="absolute object-contain"
                src={`/images/sale/${item.urlImg}`}
                alt={item.title}
                fill
              />
            }
          />
        ))}
      </div>
    </div>
    <div className=" flex justify-center gap-3 text-center pb-10">
      {dataSale.map((item, i)=>(
        <div className={`
        w-4 h-4 border-2 border-zinc-300 rounded-full bg-none 
        ${i === cor ? 'bg-dc-pink ' : 'bg-white transition-all duration-300 '}
        `}
        key={i}></div>
      ))}
      </div>
    </div>
  );
};

export default Carrossel;
