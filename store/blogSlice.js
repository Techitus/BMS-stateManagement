/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/status/statuses";

const blogSlice= createSlice({
    name: "blog",
    initialState : {
        user: null,
        token: null,
        status: null,
    },
    reducers : {

        setUser(state, action){
            state.user = action.payload
        },
        setToken(state,action){
            state.token = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})
export const {setTitle, setDescription,setImage, setCategory,setSubtitle} = blogSlice.actions
export default blogSlice.reducer

export const createBlog = (data)=>{
    return async function createBlogThunk(dispatch){
        try {
            const response = await axios.get('https://react30.onrender.com/api/user/blog',data,
        {
            headers : {
                "Content-Type" : "multipart/form-data",
                "Authorization " : localStorage.getItem('token')
            }
        })
            if(response.status === 201){
                dispatch(setUser(data))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    } 

}