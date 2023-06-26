interface MenuItemProps {
  text?:string
  url?:string
}

const MenuItem = (props:MenuItemProps) => {
  return (
    
    <div className="hover:text-dc-pink hover:underline underline-offset-4 hover:font-semibold cursor-pointer"
    >{props.url} {props.text}</div>
  )
}

export default MenuItem