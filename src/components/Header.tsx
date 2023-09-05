import Logo from "./templates/Logo"
import MainBtn from "./templates/MainBtn"
import Menu from "./templates/Menu"
import SearchInput from "./templates/SearchInput"
import ShoppingCart from "./templates/ShoppingCart"

const Header = () => {
  return (
    <div className="flex flex-col container lg:px-10  m-auto pt-5 2xl:px-36 pb-5">
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