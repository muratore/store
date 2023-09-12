"use client"
import {useParams, usePathname} from 'next/navigation'
import MenuItem from "./MenuItem"


const Menu = () => {
  const path = usePathname()
  let baseRote = '/produtos'
  const getParams = useParams()

  if(getParams.id !== undefined){
    const partOfParams = getParams.id.toString().replace(',', '/')
    baseRote = `${baseRote}/${partOfParams}`
    
  }

  return (
    <div className="flex gap-10 mt-10">
        <MenuItem text="Home" url='/'  selecionado={path === '/'}/>
        <MenuItem text="Produtos"  url='/produtos' selecionado={path === `${baseRote}`}/>
        <MenuItem text="Categorias"  url='/categorias' selecionado={path === '/categorias'}/>
        <MenuItem text="Meus Pedidos"  url='/pedidos' selecionado={path === '/pedidos'}/>
    </div>
  )
}

export default Menu