import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'xxx', body: 'xxx'},
        {id: '2', title: 'qqq', body: 'bbb'},
        {id: '3', title: 'bbb', body: 'ccc'}

    ])
    const [selectedSort, setSelectedSort] = useState<string>('')

    const sortPosts = (sort: SortType) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => {
            return a[sort].localeCompare(b[sort]);

        }))
    }

    const createPost = (newPost: PostType) => {
        setPosts([...posts, newPost])

    }
    const removePost = (post: PostType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className = "App">
            <PostForm create = {createPost} />
            <hr style = {{margin: '15px 0'}} />
            <div>
                <MySelect sortPosts = {sortPosts} value = {selectedSort}
                          defaultValue = {'sorting by'} options = {[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'description'}]} />
            </div>
            {
                posts.length
                    ? <PostList remove = {removePost} posts = {posts} title = {'Post List 1'} />
                    : <h1 style = {{textAlign: 'center'}}>Posts not found!</h1>
            }
        </div>
    );
}


export type SortType = 'title' | 'body'

export type PostType = {
    id: string
    title: string
    body: string
}

export default App;
