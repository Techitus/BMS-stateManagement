/* eslint-disable react-hooks/exhaustive-deps */
import Form from './components/form/Form'
import { login, setStatus } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import STATUSES from '../../globals/status/statuses'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate()
 const {user,status} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const handleLogin = (data)=>{
    dispatch(login(data))
  }
  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
      navigate('/')
       dispatch(setStatus(null))
    }else{
      navigate('/login')
    }
  },[status])
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin}/>
  )
}

export default Login