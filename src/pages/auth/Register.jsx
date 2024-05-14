/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
import Form from './components/form/Form'
import { register } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setStatus } from '../../../store/blogSlice'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {status} = useSelector((state)=>state.auth)
  const handleRegister = (data) => {
   dispatch(register(data))

  }
  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
       navigate('/login')
      dispatch(setStatus(null))
    }else{
     navigate('/register')
    }

  },[status])

  return (
    <Form type='Register' onSubmit = {handleRegister}/>
  )
}

export default Register