import Form from './components/form/Form'
import { login } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
  const navigate = useNavigate()
 const {user,status} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const handleLogin = (data) =>{
    dispatch(login(data))
    if(status === STATUSES.SUCCESS){
      return navigate('/')
    }else{
      return navigate('/login')
    }

  }
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin}/>
  )
}

export default Login