import { useField } from "formik"
import { useEffect, useState } from "react"
import classNames from "classnames"

export default function Input({label, type ='text', ...props}){

    const [field] = useField(props)
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)

    useEffect(() => {
     if(show){
        setType('text')
     }else if(type === 'password'){
        setType('password')
     }
    },[show])

    return(
        <label className="relative flex border bg-zinc-50 rounded-sm focus-within:border-gray-400">
        <input type={inputType}
        className={classNames({
            "w-full h-[38px]  outline-none text-xs bg-transparent px-2" : true,
            "pt-[10px]": field.value
        })} {...props} {...field} />
        <small className={classNames({
            "absolute cursor-text pointer-events-none left-[9px] text-gray-500 -translate-y-1/2 transition-all" : true,
            "text-xs top-1/2 ": !field.value,
            "text-[10px] top-2.5" : field.value,
            
        })}>{label}</small>
        {type === 'password' && field.value && (
            <div onClick={() => setShow(show => !show)}className="h-full flex items-center text-sm font-semibold pr-2 cursor-pointer select-none">
            {show ? 'Hide' : 'Show'}
            </div>
        )}
      </label>
    )
}