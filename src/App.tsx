import React, {useState} from 'react';
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'JS1', body: 'Description'},
        {id: '2', title: 'JS2', body: 'Description'},
        {id: '3', title: 'JS3', body: 'Description'}

    ])
    const [posts2, setPosts2] = useState<Array<PostType>>([
        {id: '1', title: 'Phyton1', body: 'Description'},
        {id: '2', title: 'Phyton2', body: 'Description'},
        {id: '3', title: 'Phyton3', body: 'Description'}

    ])
    return (
        <div className = "App">
            <PostList posts={posts} title={'Post List 1'} />
            <PostList posts={posts2} title={'Post List 2'} />
        </div>
    );
}
export type PostType ={
    id:string
    title:string
    body:string
}

export default App;
