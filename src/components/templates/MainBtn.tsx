interface MainBtnProps{
    className?:string
    texto?:string
    bg?:boolean
    color?:boolean
}
const MainBtn = (props:MainBtnProps) => {
  return (
    
        <button className={`
         px-6 py-2 rounded-md
         ${props.color ? ' text-black' : 'text-white'}
         ${props.bg ? 'bg-dc-pink' : 'bg-inherit'}
         ${props.className ?? ''}
        `}>
            {props.texto}
        </button>
  
  )
}

export default MainBtn