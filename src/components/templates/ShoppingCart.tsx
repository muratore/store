import { IconShoppingCart} from '@tabler/icons-react'

const ShoppingCart = () => {
  return (
    <div className='flex justify-center items-center ml-10'>
    
    <div className='flex relative w-[33px] h-[29px]'>
        <IconShoppingCart size={28} className=' text-dc-pink' />     
        <div className='absolute right-0 -top-1 font-medium text-sm rounded-full bg-dc-pink text-white w-[18px] h-[18px] flex justify-center items-center'>2</div>
    </div>
    </div>
  )
}

export default ShoppingCart