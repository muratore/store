import Image from "next/image"
import Logotipo from "../../assets/images/Logotipo/logotipo.svg"
const Logo = () => {
  return (
    <div className="flex gap-3 items-center mr-10">
        <Image src={Logotipo} alt="Logotipo Digital Store " />
        <div className=" text-dc-pink text-3xl  font-semibold">Digital Store</div>
    </div>
  )
}

export default Logo