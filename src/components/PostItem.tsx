import React from 'react';
import MyButton from "../UI/button/MyButton";
import {PostType} from "../App";

const PostItem: React.FC<PostItemProps> = (props) => {
    const {post, remove, ...restProps} = props
    const onClockHandler = () => {
        remove(post)
    }

    return (
        <div className = {'post'}>
            <div className = "post-content">
                <strong>{restProps.number}. {post.title}</strong>
                <div>{post.body}</div>
                <div className = "post-btn">
                    <MyButton onClick = {onClockHandler}>delete</MyButton>
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
    number: number
    remove: (post: PostType) => void
}

export default PostItem;
