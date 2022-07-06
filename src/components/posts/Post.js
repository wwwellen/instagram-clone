import React from "react";
import "./Post.css";

function Post ({username, caption, imageURL}) {
    return (
      <div className="post">
        <div className="postheader">
            <h4> {username} </h4>
        </div>
        {/* */}
        <img className="postimage" src={imageURL} alt=""/>
        {/* */}
        <h4 className="textpost">
            <strong> {username} </strong> {caption}
        </h4>
      </div>
    );
}

export default Post;