import Header from './components/Header'
import Reply from './components/Reply'

export default function Chat(){
  const user = {
    name: "Cansuu",
    avatar: "https://img-s1.onedio.com/id-5cf9be310a9a1a007bef5970/rev-0/w-600/h-509/f-jpg/s-b251005796b9525ce631c88dd39bf56b035cc448.jpg"
  }
  return (
    <div className='flex-1'>
      <Header user={user}/>
      <main className='h-[calc(100%-144px)]'>

      </main>
      <Reply/>
    </div>
  )
}
