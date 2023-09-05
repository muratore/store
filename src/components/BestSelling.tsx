"use client";
import bestSelling from "../data/bestSelling";
import CardBestSelling from "./templates/CardBestSelling";
import Image from "next/image";
import HeaderSection from "./templates/HeaderSection";
import { useEffect, useState } from "react";
import { Types } from 'mongoose';
import axios from "axios";
import tenis from '../../public/images/bestSelling/Layer1aa2.png'


interface ProdutoProps {
  nome:string 
  preco:number
  desconto:number
  genero: {_id: Types.ObjectId, nome:string, codigo:number} 
}
const BestSelling = () => {

  const [produto, setProduto] = useState<ProdutoProps[]>();

  const buscarProdutos = async () => {
    const response = await axios.get("http://localhost:5005/produtos");
    console.log("response", response.data);
    setProduto(response.data);
  };

  useEffect(() => {
    buscarProdutos();

  }, []);
 
  console.log(produto);
  
  return (
    <div className="container bg-dc-background m-auto px-28 py-16">
      <HeaderSection className=" text-center" text="Mais vendidos" />
    
      <div className="flex flex-wrap justify-center gap-5">

      {produto && produto.map((item, i)=>(
        <>
            <CardBestSelling
            nome={`${item.nome} | ${item.genero.nome}`}
            preco={item.preco}
            onSale={item.desconto}
            salePrice={+(item.preco - (item.desconto * item.preco / 100)).toFixed(2)}
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
        {/* {bestSelling.map((item, i) => (
          <CardBestSelling
            discount={item.discount}
            tag={item.tag}
            onSale={80}
            img={
              <Image
                alt={item.description}
                src={`/images/bestSelling/${item.img}`}
                width={248}
                height={134}
              />
            }
            key={i}
            preco={item.price}
            salePrice={item.salePrice}
            description={item.description}
          />
        ))} */}
      </div>
    </div>
  );
};

export default BestSelling;
