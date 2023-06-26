import Logo from "./templates/Logo"
import MainBtn from "./templates/MainBtn"
import Menu from "./templates/Menu"
import SearchInput from "./templates/SearchInput"
import ShoppingCart from "./templates/ShoppingCart"

const Header = () => {
  return (
    <div className="flex flex-col container  m-auto pt-5 px-32 pb-5">
        {/* logo */}
       <div className="flex container m-auto">
       <Logo/>
        <SearchInput/>
        <MainBtn texto="Cadastre-se" color className=" underline"/>
        <MainBtn bg texto="Entrar" />
        <ShoppingCart/>
       </div>
        
        <div>
            <Menu/>
        </div>
       
    </div>
  )
}

export default Header