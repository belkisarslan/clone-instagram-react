import classNames from "classnames"
import Icon from "components/Icon"
import { getUserInfo } from "firebase.js"
import { useEffect } from "react"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom"
import Header from "./components/header"
import ProfileNotFound from "./not-found"


export default function ProfileLayout(){

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const {username} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
     getUserInfo(username)
     .then(user => {
        setUser(user)
     }).catch(err => {
       setUser(false)
     })
    })

    if(user === false){
      return(
       <ProfileNotFound/>
      )
    }
    
    return user &&(
       <>
       <Helmet>
         <title>{user.full_name}(@{user.username}) • Instagram photos and videos</title>
       </Helmet>
       <Header user={user}/>
       <nav className="border-t flex gap-x-16 justify-center items-center">
          <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
           "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
           "text-[#8e8e8e] border-transparent": !isActive,
           "text-black border-black": isActive
          })}>
            <Icon name="post" size={12}/>
            POSTS
          </NavLink>
          <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
					"text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
					"text-[#8e8e8e] border-transparent": !isActive,
					"text-black border-black": isActive
				})}>
            <Icon name="tag" size={12}/>
            TAGGED
          </NavLink>
       </nav>
       <Outlet/>
       </>
    )
}