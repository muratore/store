interface PropsHeaderSection {
    text:string
    className?: string
}

const HeaderSection = (props:PropsHeaderSection) => {
  return (
    <div>
        <h2 className={` text-dc-gray font-bold text-2xl mb-5
        ${props.className ?? ''}
        `}>
            
            {props.text}</h2>
    </div>
  )
}

export default HeaderSection