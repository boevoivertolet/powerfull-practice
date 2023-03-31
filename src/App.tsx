import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'JS1', body: 'Description'},
        {id: '2', title: 'JS2', body: 'Description'},
        {id: '3', title: 'JS3', body: 'Description'}

    ])

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])

    }
    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className = "App">
            <PostForm create = {createPost} />
            <PostList remove = {removePost} posts = {posts} title = {'Post List 1'} />
        </div>
    );
}


export type PostType = {
    id: string
    title: string
    body: string
}

export default App;
