import Image from "next/image"
import Logotipo from "../../assets/images/Logotipo/logotipo.svg"
import LogotipoWhite from "../../assets/images/Logotipo/logotipo-white.svg"

interface LogoProps{
  color?:boolean
  className?: string
  colorLogo?: boolean
}
const Logo = (props:LogoProps) => {
  return (
    <div className="flex gap-3 items-center mr-10">
      {props.colorLogo ? 
      <Image          
      src={LogotipoWhite}
     alt="Logotipo Digital Store " /> : 
     <Image          
     src={Logotipo}
    alt="Logotipo Digital Store " />
    }
    {props.color ? 
     <div className=" text-white text-3xl  font-semibold">Digital Store</div>
     :<div className=" text-dc-pink text-3xl  font-semibold">Digital Store</div>
     }
        
       
    </div>
  )
}

export default Logo