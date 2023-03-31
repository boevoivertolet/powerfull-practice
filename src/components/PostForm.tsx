import React, {ChangeEvent, MouseEvent, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {PostType} from "../App";

const PostForm: React.FC<PostFormProps> = (props) => {
    const {create, ...restProps} = props
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now().toString()
        }
        create(newPost)
        setPost({title: '', body: ''})

    }


    return (
        <form action = "">

            <MyInput type = "text" placeholder = {'Post name'} value = {post.title}
                     onChange = {(e: ChangeEvent<HTMLInputElement>) => setPost({
                         ...post,
                         title: e.currentTarget.value
                     })} />
            <MyInput type = "text" placeholder = {'Post description'} value = {post.body}
                     onChange = {(e: ChangeEvent<HTMLInputElement>) => setPost({
                         ...post,
                         body: e.currentTarget.value
                     })} />
            <MyButton onClick = {addNewPost}> Create post </MyButton>
        </form>
    );
};
type PostFormProps = {
    create: (newPost: PostType) => void
}

export default PostForm;
