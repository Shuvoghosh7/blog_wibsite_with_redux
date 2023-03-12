import React from 'react';
import blog from '../../images/git.webp'

const BlogItem = ({blog}) => {
    const { title, description, createdAt, image, isSaved, likes, tags,id} = blog
    return (
        <main className="post">
            <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <div className="btn-group">

                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> {likes}
                    </button>
                    {/*  <!-- handle save on button click -->
            <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i> {isSaved}
                    </button>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        </main>
    );
};

export default BlogItem;