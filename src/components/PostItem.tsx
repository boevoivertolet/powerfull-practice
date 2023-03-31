import React from 'react';

const PostItem: React.FC<PostItemProps> = (props) => {
    const {post, ...restProps} = props
    return (
        <div className = {'post'}>
            <div className = "post-content">
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
                <div className = "post-btn">
                    <button>delete</button>
                </div>
            </div>
        </div>
    );
};
type PostItemProps = {
    post: {
        id: string
        title: string
        body: string
    }
}

export default PostItem;
