import React from 'react';

const PostCard = ({ post }) => {
    return <div>
        {post.title}
        {post.brief}
    </div>;
};

export default PostCard;
