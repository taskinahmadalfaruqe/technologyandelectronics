import  { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Provider/ContextProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,isLoading}=useContext(AuthContext);
    const location= useLocation()

    if(user){
        return children
    }

    if(isLoading){
        return (<div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>)
    }else{
        <Navigate  state={location.pathname} to={"/login"}></Navigate>
    }
    return <Navigate  state={location.pathname} to={"/login"}></Navigate>
  
}

PrivetRout.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivetRout