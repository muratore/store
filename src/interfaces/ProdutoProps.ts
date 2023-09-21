import { ObjectId } from "bson";
// import { ObjectId } from "mongodb";

export default interface ProdutoProps {
  _id: ObjectId
  nome: string;
  image?: string;
  salePrice?: number
  params?: {id: string}
  genero?: {
    _id: ObjectId;
    nome: string;
    codigo: 1;
    __v: number;
  };
  preco: number;
  precoDesconto?:number
  desconto: number;
  tipo?: string;
  __v?: number;
}
