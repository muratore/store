"use client";
import CardBestSelling from "./templates/CardBestSelling";
import Image from "next/image";
import HeaderSection from "./templates/HeaderSection";
import { useEffect, useState } from "react";
import { Types } from 'mongoose';
import axios from "axios";
import tenis from '../../public/images/bestSelling/Layer1aa2.png'
import { IconArrowAutofitRight } from "@tabler/icons-react";
import Link from "next/link";
import { ProdutoProps } from "@/interfaces/ProdutoProps";


const BestSelling = () => {
  const [produto, setProduto] = useState<ProdutoProps[]>();

  const buscarProdutos = async () => {
    const response = await axios.get("http://localhost:5008/produtos");
    const Items = response.data

console.log(Items.slice(0,4));

    
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
        <>
            <CardBestSelling
            _id={item._id}
            nome={`${item.nome} | ${item.genero.nome}`}
            preco={item.preco}
            onSale={+item.desconto}
            salePrice={+((item.preco - (item.desconto * item.preco / 100)))}
            desconto
            img={
              <Image
                alt={item.nome}
                src={tenis}
                width={248}
                height={134}
              />
            }
            /> 
        </>
      ))}
      </div>
    </div>
  );
};

export default BestSelling;
