interface CardCollectionsProps {
  saleTag?: number;
  title: string;
  btn?: any;
  urlImg?: string;
  style?: any;
}

const CardCollections = (props: CardCollectionsProps) => {
  return (
    <div
      className=" flex flex-1 relative bg-dc-blue bg-right-bottom bg-no-repeat rounded-md h-64 p-8"
      style={{ backgroundImage: `url(${props.urlImg})` }}
    >
      <div>
        <span className=" bg-dc-yellow text-dc-gray font-semibold py-2 text-sm rounded-full px-3">
          {props.saleTag}% OFF
        </span>
        <h3 className=" text-3xl text-dc-gray font-bold py-5">{props.title}</h3>
        {props.btn}
      </div>
    </div>
  );
};

export default CardCollections;
