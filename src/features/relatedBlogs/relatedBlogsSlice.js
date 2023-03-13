import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsApi";

const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchRelatedBlogs", async ({ tags, id }) => {
    const videos=await getRelatedBlogs({ tags, id });
    return videos;
});

const relatedBlogsSlice=createSlice({
    name: "relatedBlogs",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchRelatedBlogs.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchRelatedBlogs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.relatedBlogs=action.payload;
        })
        .addCase(fetchRelatedBlogs.rejected,(state,action)=>{
            state.isLoading=false;
            state.relatedBlogs=[];
            state.isError=action.payload;
            state.error=action.error?.message;
        })

    }
});

export default relatedBlogsSlice.reducer;