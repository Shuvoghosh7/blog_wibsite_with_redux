import React from 'react';
import BlogItem from './BlogItem';
import RetatedBlog from './RetatedBlog';

const BlogDetails = () => {
    return (
        <section class="post-page-container">
            <BlogItem/>
            <RetatedBlog/>
        </section>
    );
};

export default BlogDetails;