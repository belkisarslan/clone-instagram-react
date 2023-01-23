import Icon from "./Icon"
import { AiFillCloseCircle } from "react-icons/ai"
import classNames from "classnames"
import { useState } from "react"

export default function Seacrh(){

    const [open, setOpen] = useState(false)

    return(
        <div className="w-[268px] relative group">
            <span className={classNames({
                "absolute text-[#8e8e8e] top-0 left-0 h-9 w-9 flex items-center pointer-events-none justify-center" : true,
                "hidden" : open
            })}>
            <Icon name="search"/>
            </span>
            <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" className={classNames({
                "h-9 outline-none focus:pl-3 pl-9 rounded bg-[#efefef] w-full" : true
            })} placeholder="Search" />
            <button onClick={() => setOpen(false)} className={classNames({
                "absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9 items-center justify-center": true,
                "!flex" : open
            })}>
                <AiFillCloseCircle/>
            </button>
        </div>
    )
}