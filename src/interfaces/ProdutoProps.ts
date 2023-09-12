import { Types } from "mongoose"

export interface ProdutoProps {
    _id: Types.ObjectId
    nome:string 
    preco:number
    desconto:number
    params?:any
    image?:any
    salePrice?: number
    genero: {_id: Types.ObjectId, nome:string, codigo:number} 
  }