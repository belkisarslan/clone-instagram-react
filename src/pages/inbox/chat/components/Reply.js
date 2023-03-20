import Icon from "components/Icon";

export default function Reply() {
  return (
    <footer className="h-[84px] flex item-center justify-center px-6">
       <div className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
       <button className="w-[40px] h-[42px] flex items-center justify-center">
        <Icon name="emoji" size={24}/>
        </button>
        <input className="flex-1 outline-none h-[40px] placeholder:text-gray-500 text-sm px-[9px]" placeholder="Message..."/> 
        <button className="w-[40px] h-[42px] flex items-center justify-center">
        <Icon name="picture" size={24}/>
        </button>
        <button className="w-[40px] h-[42px] flex items-center justify-center">
        <Icon name="heart" size={24}/>
        </button>
       </div> 
       
    </footer>
  )
}
