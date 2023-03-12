import React from 'react';
import BlogDetails from '../component/BlogDetails/BlogDetails';
import { useParams } from "react-router-dom";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from '../features/blog/blogSlice';

const Blog = () => {
    return (
        <div>
            <BlogDetails/>
        </div>
    );
};

export default Blog;