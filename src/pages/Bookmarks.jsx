import { useEffect, useState } from "react";
import { deleteItem, getBlogs } from "../utils";
import BlogCard from "./BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]) 
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])

    const handleDelete = id =>{
        deleteItem(id)
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if(blogs.length < 1) return <EmptyState message={'No Bookmarks Found!'} address={'/blogs'} label={'Browse Blogs'}></EmptyState>
    return (
        <div className="grid px-4 sm:px-8  mx-auto max-w-6xl   py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map(blog => <BlogCard handleDelete ={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
          }
          
        </div>
    );
};

export default Bookmarks;