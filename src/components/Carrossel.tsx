"use client"
import Image from "next/image";
import dataSale from "../data/sale";
import CarrosselItem from "./CarrosselItem";
import MainBtn from "./templates/MainBtn";

import { useEffect, useState } from "react";

const Carrossel = () => {
    const [move, setMove]= useState(0)

    const carrosel = setTimeout(()=>{
        console.log('working 2 seconds');
        
    },2000)

    useEffect(()=>{
     
        // return ()=> clearTimeout(carrosel)
    },[])

  return (
    <div className="w-[1350px] relative m-auto overflow-hidden " >
       <div className={`w-[5400px] relative flex -left-[${move}px]`}>
      {dataSale.map((item, i) => (
        <CarrosselItem
          key={i}
          tag={item.header}
          title={item.title}
          text={item.text}
          btn={<MainBtn bg texto="Ver Ofertas"/>}
          img={<Image className="absolute object-contain" src={`/images/sale/${item.urlImg}`} alt="teste" fill />}
        />    
      ))}
       </div>
    
    </div>
  );
};

export default Carrossel;
