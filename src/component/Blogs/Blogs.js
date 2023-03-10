import React from 'react';
import BlogSidebar from './BlogSidebar';
import BlogsItems from './BlogsItems';

const Blogs = () => {
    return (
        <section class="wrapper">
            <BlogSidebar/>
            <BlogsItems/>
        </section>
    );
};

export default Blogs;