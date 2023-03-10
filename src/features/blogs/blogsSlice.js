import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchBlogs=createAsyncThunk("blogs/fetchBlogs",async ()=>{
    const blogs =await getBlogs();
    return blogs;
})

const blogsSlice=createSlice({
    name:"Blogs",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending,(state)=>{
            state.isError=false;
            state.isLoading=true;
        })
        .addCase(fetchBlogs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blogs=action.payload
        })
        .addCase(fetchBlogs.rejected,(state,action)=>{
            state.isLoading=false;
            state.blogs=[];
            state.isError=action.payload;
            state.error=action.error?.message;
        })

    }

})

export default blogsSlice.reducer;