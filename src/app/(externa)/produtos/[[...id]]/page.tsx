'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import CardBestSelling from "@/components/templates/CardBestSelling";
import SelectedProduct from "@/components/SelectedProduct";

export default function Page(props:any) {
  const id = props.params?.id;
 
  const [produto, setProduto] = useState<any[]>();
  const buscarProdutos = async () => {

    const response = await axios.get(`https://drip-store-api.onrender.com/produtos`);
    const data: any[] = response.data;

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
      {props.params?.id ? (
        <div>
          {produto?.map((item, i) => (
            <SelectedProduct
              _id={item._id}
              genero={item.genero}
              desconto={item.desconto}
              nome={item.nome}
              params={item.params}
              salePrice={item.preco - (item.desconto * item.preco) / 100}
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
                _id={item._id}
                nome={`${item.nome} | ${item.genero?.nome}`}
                preco={item.preco}
                desconto={item.desconto} 
                precoDesconto={item.preco}     
                image={'http://source.unsplash.com/featured/299x250?sneakers'}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

