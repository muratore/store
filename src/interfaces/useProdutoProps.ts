import { Types } from "mongoose"



export type ProdutoProps = {
    _id: Types.ObjectId
    nome:string 
    preco:number
    desconto:number
    params: { id: string }
    salePrice?: number
    genero: {_id:Types.ObjectId, nome:string, codigo: number}
  }
  