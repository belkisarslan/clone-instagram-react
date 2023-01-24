import { useRoutes } from "react-router-dom";
import routes from "routes";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "components/Loader";


function App() {

    const user = useSelector(state => state.auth.user)
    const showRoutes = useRoutes(routes)


    if(user === null){
        return <Loader/>
    }

    console.log(user.displayName)

 return(
  <>
  <Toaster position="top-right"/>
  {showRoutes}
  </>
 )
}

export default App;
