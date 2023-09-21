"use client";
import CardBestSelling from "./templates/CardBestSelling";
import Image from "next/image";
import HeaderSection from "./templates/HeaderSection";
import { useEffect, useState } from "react";
import axios from "axios";
import tenis from '../../public/images/bestSelling/Layer1aa2.png'
import { IconArrowAutofitRight } from "@tabler/icons-react";
import Link from "next/link";
import ProdutoProps from '@/interfaces/ProdutoProps'


const BestSelling = () => {
  const [produto, setProduto] = useState<ProdutoProps[]>();

  const buscarProdutos = async () => {
    const response = await axios.get("https://drip-store-api.onrender.com/produtos");
    const Items = response.data
  
    setProduto(response.data.slice(0,4));
  };

  useEffect(() => {
    buscarProdutos();

  }, []);
  
  return (
    <div className="container bg-dc-background m-auto px-28 py-16">
      <div className=" flex justify-between">

      <HeaderSection className=" text-center" text="Mais vendidos" />     
        <Link href={`/produtos`} className="flex gap-2 text-dc-pink">   
         Ver Todos <IconArrowAutofitRight/>
        </Link>
      </div>
    
      <div className="flex flex-wrap justify-center gap-5">

      {produto && produto.map((item, i)=>(
       
            <CardBestSelling
            key={i}
            _id={item._id}
            nome={`${item.nome} | ${item.genero?.nome}`}
            preco={item.preco}
            desconto={item.desconto}
            precoDesconto={item.preco}
            image="http://source.unsplash.com/featured/300x250?smeakers"
            /> 

      ))}
      </div>
    </div>
  );
};

export default BestSelling;
