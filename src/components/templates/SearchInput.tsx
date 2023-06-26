import { IconSearch } from "@tabler/icons-react"


const SearchInput = () => {
  return (
    <div className="flex flex-1">
    <form className="w-full">
        <div className="flex relative items-center w-full">
        <input className=" p-3 outline-none rounded-md bg-dc-gray bg-opacity-5 w-full" type="search" name="" id="" placeholder='Pesquisar Produto...'/>
        <button className="absolute right-1 "><IconSearch/></button>
        </div>
    </form>
    </div>
  )
}

export default SearchInput