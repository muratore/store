"use client";
import HeaderSection from "./HeaderSection";
import dataCollection from "../../data/mainCollections";
import CardCollections from "./CardCollections";
import MainBtn from "./MainBtn";
import ItemsHighlighted from "./ItemHighlightedCard";
import itemsProducts from "../../data/itemsProducts";

const Collections = () => {
  return (
    <div className="container m-auto px-4 py-4 lg:px-10 2xl:px-32 pt-12 bg-dc-background ">
      <HeaderSection text="Coleções em Destaque" />
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {dataCollection.map((item, i) => (
          <CardCollections
            btn={
              <MainBtn
                className="bg-white text-dc-pink"
                color
                texto="Veja a Oferta"
              />
            }
            key={i}
            saleTag={item.discount}
            title={item.title}
            urlImg={`/images/mainCollections/${item.img}`}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center my-14">
        <HeaderSection text="Coleções em Destaque" />
        <div className="flex justify-center gap-5">
          {itemsProducts.map((item, i) => (
            <ItemsHighlighted
              key={i}
              imgUrl={`/images/colecoesProducts/${item.icon}`}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
