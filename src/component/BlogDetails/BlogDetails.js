import React from 'react';
import BlogItem from './BlogItem';
import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from '../../features/blog/blogSlice';
import RelatedBlogs from '../RelatedBlogs/RelatedBlogs';

const BlogDetails = () => {
    const dispatch = useDispatch()
    const { blog, isLoading, isError, error } = useSelector(state => state.blog)
    const { blogId } = useParams()
    useEffect(() => {
        dispatch(fetchBlog(blogId))
    }, [dispatch, blogId])

    const { tags, id } = blog || {};
    let content = null;
    if (isLoading) content = <p>Loading....</p>

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && !blog?.id) {
        content = <div className="col-span-12">No Video Found!</div>
    }
    if (!isLoading && !isError && blog?.id) {
        content = <BlogItem blog={blog} />

    }
    return (
        <section className="post-page-container">
            <div>
                {content}
            </div>
            <RelatedBlogs currentVideoId={id} tags={tags}/>
        </section>
    );
};

export default BlogDetails;