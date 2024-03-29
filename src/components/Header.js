import { Link, NavLink } from "react-router-dom"
import Seacrh from "./Search"
import Icon from "./Icon"
import { useSelector } from "react-redux"

export default function Header(){

  const user = useSelector(state => state.auth.user)
  
    return(
        <header className="h-[60px] bg-white border-b border-gray-300">
          <div className="flex items-center justify-between h-[60px] container mx-auto">
          <Link to="/">
					<img className="h-[29px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="logo"/>
		  </Link>
          <Seacrh/>
          <nav className="flex items-center gap-x-6">
            <NavLink to="/">
              <Icon name="home" size={24}/>
            </NavLink>
            <NavLink to="/inbox">
              <Icon name="direct" size={24}/>
            </NavLink>
            <NavLink to="/">
              <Icon name="new" size={24}/>
            </NavLink>
            <NavLink to="/">
              <Icon name="explore" size={24}/>
            </NavLink>
            <NavLink to="/">
              <Icon name="heart" size={24}/>
            </NavLink>
            <NavLink to={`/${user.username}`}>
              <img src="https://img-s3.onedio.com/id-57d5302317b9c22378d43052/rev-0/w-635/f-jpg/s-d38d62880732202e85e164409f9d86d075116020.jpg" alt="" className="w-6 h-6 rounded-full" />
            </NavLink>
          </nav>
          </div>
        </header>
    )
}