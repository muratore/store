"use client"
import {usePathname} from 'next/navigation'
import MenuItem from "./MenuItem"


const Menu = () => {
  const path = usePathname()
  return (
    <div className="flex gap-10 mt-10">
        <MenuItem text="Home" url='/home'  selecionado={path === '/home'}/>
        <MenuItem text="Produtos"  url='/produtos' selecionado={path === '/produtos'}/>
        <MenuItem text="Categorias"  url='/categorias' selecionado={path === '/categorias'}/>
        <MenuItem text="Meus Pedidos"  url='/pedidos' selecionado={path === '/pedidos'}/>
    </div>
  )
}

export default Menu