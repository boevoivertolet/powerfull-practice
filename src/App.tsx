import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'JS1', body: 'Description'},
        {id: '2', title: 'JS2', body: 'Description'},
        {id: '3', title: 'JS3', body: 'Description'}

    ])

    return (
        <div className = "App">
            <form action = "">
                <input type = "text" placeholder = {'Post name'} />
                <input type = "text" placeholder = {'Post description'} />
                <MyButton disabled> Create post </MyButton>
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
