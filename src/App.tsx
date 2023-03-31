import React, {useState} from 'react';
import './styles/App.css'
import PostItem from "./components/PostItem";


function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'JS1', body: 'Description'},
        {id: '2', title: 'JS2', body: 'Description'},
        {id: '3', title: 'JS3', body: 'Description'}

    ])

    return (
        <div className = "App">
            {
                posts.map(post => <PostItem post={post}/>)
            }
        </div>
    );
}

export default App;
