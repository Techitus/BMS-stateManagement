/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const blogSlice= createSlice({
    name: "blog",
    initialState : {
        inputData: null,
        status: null,
    },
    reducers : {

        setinputData(state, action){
            state.inputData = action.payload
        },
    
        setStatus(state,action){
            state.status = action.payload
        }
    }
})
export const {setinputData,setStatus} = blogSlice.actions
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
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await  API.get('blog')
            if(response.status === 200 && response.data.data.length > 0 ){
                dispatch(setinputData(response.data.data))
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