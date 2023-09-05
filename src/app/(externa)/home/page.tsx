import BestSelling from "@/components/BestSelling"
import Carrossel from "@/components/Carrossel"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SpecialOffer from "@/components/SpecialOffer"
import Collections from "@/components/templates/Collections"


const Page = () => {
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