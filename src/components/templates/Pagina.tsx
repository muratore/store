import { Children } from "react"

interface PropsPagina {
    children: any
}

const Pagina = (props:PropsPagina) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Pagina