import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../images/git.webp'
const BlogsItems = ({ blog }) => {
    const { title, description, createdAt, image, isSaved, likes, tags,id} = blog
    return (
            <div>
                <Link to={`/blogs/${id}`} >
                    <Link to={`/blogs/${id}`}>
                        <img src={image} className="lws-card-image" alt="" />
                    </Link>
                    <div className="p-4">
                        <div className="lws-card-header">
                            <p className="lws-publishedDate">{createdAt}</p>
                            <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>100</p>
                        </div>
                        <Link to={`blog/${1}`} className="lws-postTitle"> {title} </Link>
                        <div className="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>

                        <div className="flex gap-2 mt-4">
                            <span className="lws-badge"> {isSaved} </span>
                        </div>
                    </div>
                </Link>
            </div>
    );
};

export default BlogsItems;