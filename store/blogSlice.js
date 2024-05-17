/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const blogSlice= createSlice({
    name: "blog",
    initialState : {
        data: null,
        status: null,
    },
    reducers : {

        setBlog(state, action){
            state.user = action.payload
        },
    
        setStatus(state,action){
            state.status = action.payload
        }
    }
})
export const {setBlog,setStatus} = blogSlice.actions
export default blogSlice.reducer

export const createBlog = (data)=>{
    return async function createBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await  API.post('blog',data)
            if(response.status === 201){
                dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    } 

}
export const fetchBlog = ()=>{
    return async function fetchBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await  API.get('blog',data)
            if(response.status === 200 && response.data.blog.length >0 ){
                dispatch(setBlog(response.data.blog))
                dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    } 

}
export const deleteBlog = (id,token)=>{
    return async function deleteBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await  API.delete(`blog/${id}`,data,
            {
                headers : {
                    token : token
                }
            }
        )
            if(response.status === 200){
                dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    } 

}