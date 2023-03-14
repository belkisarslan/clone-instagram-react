import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const ChatList = () => {

  const chats = [
    {
      id:1,
      user:{
        avatar: "https://img-s1.onedio.com/id-5cf9be310a9a1a007bef5970/rev-0/w-600/h-509/f-jpg/s-b251005796b9525ce631c88dd39bf56b035cc448.jpg",
        name: "Cansuu"
      },
      lastMessage: "Hey Sabit naberr?"
    },
    {
      id:2,
      user:{
        avatar: "https://img-s3.onedio.com/id-5cf9b62ea2702c3979d9ef05/rev-0/w-635/f-jpg/s-9c444d2ef8ffa887e5220f2d705f742aba21cff9.jpg",
        name: "Haydar Ballıoglu"
      },
      unread: true,
      lastMessage: "Herhalde galiba sanursam..."
    },
    {
      id:3,
      user:{
        avatar: "https://img-s3.onedio.com/id-5cf9be9baf29a86871b878c5/rev-0/w-600/h-632/f-jpg/s-bbe2bce8622fcdaa9c0774af9b16d592e3202ece.jpg",
        name: "Yusuf Güdük"
      },
      lastMessage: "Ahh le yar yar!"
    }
  ]

  return (
    <div className='h-[calc(100%-60px)] overflow-auto p-4'>
    <header className='flex items-center justify-between px-5 mb-1'>
        <h6 className='text-base font-semibold'>Messages</h6>
        <button className='text-brand text-sm font-semibold'>16 request</button>
    </header>
    {chats.map(chat => (
      <NavLink className={classNames({
        "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
        "font-semibold": chat?.unread
      })} 
      key={chat.id} 
      to="/inbox">
      <img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt=''/>
      <div>
        <h6 className='text-sm'>{chat.user.name}</h6>
        <p  className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>{chat.lastMessage}</p>
      </div>
      </NavLink>
    ))}
    </div>
  )
}
