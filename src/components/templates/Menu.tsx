import MenuItem from "./MenuItem"


const Menu = () => {
  return (
    <div className="flex gap-10 mt-10">
        <MenuItem text="Home" />
        <MenuItem text="Produtos" />
        <MenuItem text="Categorias" />
        <MenuItem text="Meus Pedidos" />
    </div>
  )
}

export default Menu