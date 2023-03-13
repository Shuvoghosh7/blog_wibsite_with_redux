import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

import RelatedBlogsItems from './RelatedBlogsItems';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';

const RelatedBlogs = ({tags,currentVideoId}) => {
    const dispatch=useDispatch();
    const{relatedBlogs,isLoading,isError,error}=useSelector(state => state.relatedBlogs)
    useEffect(()=>{
        dispatch(fetchRelatedBlogs({tags,id:currentVideoId}))
    },[dispatch,tags,currentVideoId])

    // decide what to render
    let content = null;

    if (isLoading) content = <p>Loading</p>;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedBlogs?.length === 0) {
        content = <div className="col-span-12">No related videos found!</div>;
    }
    if (!isLoading && !isError && relatedBlogs?.length > 0) {
        content = relatedBlogs.map((blog) => (
            <RelatedBlogsItems key={blog.id} blog={blog} />
        ));
    }
    
    return (
        <div>
            {
                content
            }

        </div>
    );
};

export default RelatedBlogs;