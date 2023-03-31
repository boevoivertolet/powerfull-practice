import React, {ChangeEvent, MouseEvent, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'JS1', body: 'Description'},
        {id: '2', title: 'JS2', body: 'Description'},
        {id: '3', title: 'JS3', body: 'Description'}

    ])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const newPost: PostType = {
            id: Date.now().toString(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')

    }

    return (
        <div className = "App">
            <form action = "">

                <MyInput type = "text" placeholder = {'Post name'} value = {title}
                         onChange = {(e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)} />
                <MyInput type = "text" placeholder = {'Post description'} value = {body}
                         onChange = {(e: ChangeEvent<HTMLInputElement>) => setBody(e.currentTarget.value)} />
                <MyButton onClick = {addNewPost}> Create post </MyButton>
            </form>
            <PostList posts = {posts} title = {'Post List 1'} />
        </div>
    );
}

export type PostType = {
    id: string
    title: string
    body: string
}

export default App;
