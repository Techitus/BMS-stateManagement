/* eslint-disable no-unused-vars */
import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user : null,
        token : null,
        status : null
    },
    reducers : {
        setStatus(state, action) {
            state.status = action.payload
        },
        setUser(state, action) {
            state.user = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        }

    }
})

export const {setStatus, setUser, setToken} = authSlice.actions
export default authSlice.reducer 

export function register(data){
    return async function registerThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
  try{
    const response =  await axios.post('https://react30.onrender.com/api/user/register',data)
    if(response.status === 200){
        dispatch(setStatus(STATUSES.SUCCESS))
        dispatch(setUser(data))


     }else{
 
        dispatch(setStatus(STATUSES.ERROR))
     }
  }catch(error){
    dispatch(setStatus(STATUSES.ERROR))
  }
}
}

export function login(data){
    return async function loginThunk(dispatch){
      try{
        const response =  await axios.post('https://react30.onrender.com/api/user/login',data)
        if(response.status === 200 && response.data.token){
            dispatch(setStatus(STATUSES.SUCCESS))
            dispatch(setUser(data))
            dispatch(setToken(response.data.token))
            
        }else{

            dispatch(setStatus(STATUSES.ERROR))

        }
      } catch(error){
        dispatch(setStatus(STATUSES.ERROR))
      }

    }
}