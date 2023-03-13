import React from 'react';
import { Link } from 'react-router-dom';
const RelatedBlogsItems = ({blog}) => {
    const{id,title,image,likes,isSaved,createdAt,tags}=blog
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">

                <div className="card">
                    <Link to={`/blogs/${id}`}>
                        <img src={image} className="card-image" alt="" />
                    </Link>
                    <div className="p-4">
                        <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
                            {title}
                        </a>
                        <div className="mb-0 tags">
                            {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                            {tags}
                        </div>
                        <p>{createdAt}</p>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default RelatedBlogsItems;