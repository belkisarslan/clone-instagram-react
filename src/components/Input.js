import { useEffect, useRef, useState } from "react"

export default function Input({label, type ='text', ...props}){

    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(props?.type || 'text')

    useEffect(() => {
     if(show){
        setType('text')
        inputRef.current.focus()
     }else if(type === 'password'){
        setType('password')
        inputRef.current.focus()
     }
    },[show])

    return(
        <label className="relative flex border bg-zinc-50 rounded-sm focus-within:border-gray-400">
        <input ref={inputRef} required={true} type={inputType}
        className="w-full h-[38px]  outline-none text-xs px-2 valid:pt-[10px] peer" {...props} />
        <small className="absolute cursor-text pointer-events-none top-1/2 left-[9px] text-gray-500 text-xs -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
        {type === 'password' && props?.value && (
            <button type="button" onClick={() => setShow(show => !show)} className="h-full flex items-center text-sm font-semibold pr-2">
            {show ? 'Hide' : 'Show'}
            </button>
        )}
      </label>
    )
}