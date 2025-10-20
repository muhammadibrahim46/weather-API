import React from "react";
const PostCard=(props)=>{


return(
    <div>
<h1 className="hat">{props.title}</h1>
<p>{props.body}</p>
    </div>
)
}
export default PostCard