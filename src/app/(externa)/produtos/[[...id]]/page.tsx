"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProdutoProps } from "@/interfaces/ProdutoProps";
import CardBestSelling from "@/components/templates/CardBestSelling";
import tennis from "../../../../../public/images/bestSelling/Layer1aa2.png";
import Image from "next/image";
import SelectedProduct from "@/components/SelectedProduct";

const Page = (props: ProdutoProps) => {
  const id = props.params.id;
  const [produto, setProduto] = useState<ProdutoProps[]>();

  const buscarProdutos = async () => {
    const response = await axios.get("http://localhost:5008/produtos");
    const data: ProdutoProps[] = response.data;

    console.log(data);

    if (props.params.id !== undefined) {
      const item = data.filter((item) => item._id == id);
      console.log(item);

      setProduto(item);
      console.log(produto);
    } else {
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
              image={tennis}
              genero={item.genero}
              desconto={item.desconto}
              nome={item.nome}
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
                nome={`${item.nome} | ${item.genero.nome}`}
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

export default Page;
