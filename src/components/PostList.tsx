import React from 'react';
import PostItem from "./PostItem";
import {PostType} from "../App";

const PostList: React.FC<PostListProps> = (props) => {
    const {posts,title, ...restProps} = props
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>{title}</h1>
            {
                posts.map(post => <PostItem key = {post.id} post = {post} />)
            }
        </div>
    );
};
type PostListProps = {
    posts: Array<PostType>
    title: string
}

export default PostList;
