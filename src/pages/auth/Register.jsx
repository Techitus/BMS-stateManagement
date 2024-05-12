import Form from './components/form/Form'
import { register } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {status} = useSelector((state)=>state.auth)
  const handleRegister = (data) => {
   dispatch(register(data))
   if(status === STATUSES.SUCCESS){
     return navigate('/login')
   }else{
   return navigate('/register')
   }

  }

  return (
    <Form type='Register' onSubmit = {handleRegister}/>
  )
}

export default Register