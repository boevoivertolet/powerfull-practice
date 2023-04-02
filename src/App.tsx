import React, {ChangeEvent, useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";


function App() {
    const [posts, setPosts] = useState<Array<PostType>>([
        {id: '1', title: 'xxx', body: 'xxx'},
        {id: '2', title: 'qqq', body: 'bbb'},
        {id: '3', title: 'bbb', body: 'ccc'}

    ])


    const [selectedSort, setSelectedSort] = useState<SortType | ''>('')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const sortedPosts = useMemo(() => {
        console.log('get sorted posts')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const sortPosts = (sort: SortType) => {
        setSelectedSort(sort);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value)
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
                <MyInput placeholder = {'search'} onChange = {onChangeHandler} type = {'text'} value = {searchQuery} />
                <MySelect sortPosts = {sortPosts} value = {selectedSort}
                          defaultValue = {'sorting by'} options = {[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'description'}]} />
            </div>
            {
                sortedAndSearchedPosts.length
                    ? <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = {'Post List 1'} />
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
