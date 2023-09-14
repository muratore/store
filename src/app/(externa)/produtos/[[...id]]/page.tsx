'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import {ProdutoProps} from "@/interfaces/useProdutoProps";
import CardBestSelling from "@/components/templates/CardBestSelling";
import tennis from "../../../../../public/images/bestSelling/Layer1aa2.png";
import Image from "next/image";
import SelectedProduct from "@/components/SelectedProduct";
import { Types } from "mongoose"

export default function Page(props:ProdutoProps) {
  const id = props.params.id;
  console.log(id[0]);
  
  const [produto, setProduto] = useState<ProdutoProps[]>();

  const buscarProdutos = async () => {

    const response = await axios.get(`https://drip-store-api.onrender.com/produtos`);
    const data: ProdutoProps[] = response.data;

    if (id) {
      const produtoSelecionado = data.filter(item => String(item._id) === id[0] )
     console.log(produtoSelecionado);
     setProduto(produtoSelecionado)
      
      
    }else{
      
      setProduto(response.data);
    }

  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className=" container m-auto bg-dc-background py-8">
      {props.params.id ? (
        <div>
          {produto?.map((item, i) => (
            <SelectedProduct
              _id={item._id}
              genero={item.genero}
              desconto={item.desconto}
              nome={item.nome}
              params={item.params}
              salePrice={
                +(item.preco - (item.desconto * item.preco) / 100).toFixed(2)
              }
              preco={item.preco}
              key={i}
            />
          ))}
        </div>
      ) : (
        <div className=" md:flex md:flex-wrap md:px-36 gap-4 justify-center">
          {produto?.map((item, i) => (
            <>
              <CardBestSelling
                key={i}
                _id={item._id}
                nome={`${item.nome} | ${item.genero?.nome}`}
                preco={+item.preco.toFixed(2)}
                onSale={item.desconto}
                desconto
                salePrice={+item.preco - (item.desconto * item.preco) / 100}
                img={
                  <Image
                    alt={item.nome}
                    src={tennis}
                    width={248}
                    height={134}
                  />
                }
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

