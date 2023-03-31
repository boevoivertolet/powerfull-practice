import React from 'react';
import PostItem from "./PostItem";
import {PostType} from "../App";

const PostList: React.FC<PostListProps> = (props) => {
    const {posts, title, remove, ...restProps} = props
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>{title}</h1>
            {
                posts.map((post, index) => <PostItem remove = {remove} number = {index + 1} key = {post.id}
                                                     post = {post} />)
            }
        </div>
    );
};
type PostListProps = {
    posts: Array<PostType>
    title: string
    remove: (post: PostType) => void
}

export default PostList;
