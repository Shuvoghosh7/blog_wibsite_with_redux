import React from 'react';
import blog from '../../images/git.webp'

const BlogItem = () => {
    return (
        <main class="post">
            <img src={blog} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                    MERN stack for Web Development
                </h1>
                <div class="tags" id="lws-singleTags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <div class="btn-group">

                    <button class="like-btn" id="lws-singleLinks">
                        <i class="fa-regular fa-thumbs-up"></i> 100
                    </button>
                    {/*  <!-- handle save on button click -->
            <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button class="active save-btn" id="lws-singleSavedBtn">
                        <i class="fa-regular fa-bookmark"></i> Saved
                    </button>
                </div>
                <div class="mt-6">
                    <p>
                        A MERN stack comprises a collection of four frameworks (MongoDB,
                        ExpressJs, ReactJs and NodeJs) used to develop full-stack
                        javascript solutions for rapid, scalable, and secure applications.
                        Each framework serves a different purpose in creating successful
                        web applications. It is an excellent choice for companies looking
                        to develop high-quality responsive applications quickly using just
                        one language.
                    </p>
                </div>
            </div>
           
        </main>
    );
};

export default BlogItem;