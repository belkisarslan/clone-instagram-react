import Icon from "components/Icon";
import { useSelector } from "react-redux";
import { ChatList } from "./ChatList";

export default function Sidebar(){

    const user = useSelector(state => state.auth.user)

    return (
        <aside className="w-[349px] flex-shrink-0 border-r border-gray-300">
            <header className="h-[60px] border-b border-gray-300 flex justify-between items-center px-5">
            <button className="flex items-center mx-auto gap-x-2 font-semibold">
            {user.username}
            <Icon className="rotate-180" name="chevron-down" size={20}/>
            </button>
            <Icon name="new-message" size={24}/>
            </header>
            <ChatList/>
        </aside>
    )
}