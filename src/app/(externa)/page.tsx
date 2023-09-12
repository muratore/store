'use client'
import BestSelling from "@/components/BestSelling"
import Carrossel from "@/components/Carrossel"
import SpecialOffer from "@/components/SpecialOffer"
import Collections from "@/components/templates/Collections"
import { createContext } from "react"

const Page = () => {

  const Context = createContext({valor: 0})
  
  return (
    <div className="flex flex-col m-auto">
    
      <Carrossel/>
      <Collections/>
      <BestSelling />
      <SpecialOffer />
     
    </div>
  )
}

export default Page