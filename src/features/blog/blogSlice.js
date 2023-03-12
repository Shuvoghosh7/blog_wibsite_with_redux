import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBlog } from "./blogApi";


const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchBlog=createAsyncThunk("blog/fetchBlog",async (id)=>{
    const blogs =await getBlog(id);
    return blogs;
})

const blogSlice=createSlice({
    name:"Blog",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlog.pending,(state)=>{
            state.isError=false;
            state.isLoading=true;
        })
        .addCase(fetchBlog.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.blog=action.payload
        })
        .addCase(fetchBlog.rejected,(state,action)=>{
            state.isLoading=false;
            state.blog={};
            state.isError=action.payload;
            state.error=action.error?.message;
        })

    }

})

export default blogSlice.reducer;