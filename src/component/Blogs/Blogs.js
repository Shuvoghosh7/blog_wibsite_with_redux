import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import BlogSidebar from './BlogSidebar';
import BlogsItems from './BlogsItems';

const Blogs = () => {
    const dispatch = useDispatch()
    const { blogs, isLoading, isError, error } = useSelector(state => state.blogs)

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])

    let content = null;
    if (isLoading)
        return content = <p>loading...........</p>
    if (!isLoading && isError)
        return content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && blogs?.length === 0) {
        return content = <div className="col-span-12">No Videos Found</div>
    }

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map((blog) => (
            <BlogsItems key={blog.id} blog={blog} />
        ));
    }
    return (
        <section className="wrapper">
            <div>
                <BlogSidebar />
            </div>
            <main className="post-container" id="lws-postContainer">
                {content}
            </main>
        </section>
    );
};

export default Blogs;