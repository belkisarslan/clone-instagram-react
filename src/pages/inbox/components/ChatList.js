import React from 'react'

export const ChatList = () => {
  return (
    <div className='h-[calc(100%-60px)] overflow-auto'>
    <header className='flex items-center justify-between'>
        <h6 className='text-base font-semibold'>Messages</h6>
        <button className='text-brand text-sm font-semibold'>16 request</button>
    </header>
    </div>
  )
}
