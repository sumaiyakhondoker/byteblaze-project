import toast from "react-hot-toast";

// get blogs from local storage
const getBlogs = ()=>{
        let blogs = [];
        const storedBlogs = localStorage.getItem('blogs');
        if(storedBlogs){
            blogs = JSON.parse(storedBlogs)
        }

        return blogs;
}

// save 
const saveItem = blog =>{
    const blogs = getBlogs()
    const isExist = blogs.find(b=> b.id === blog.id)
    if(isExist){
         toast.error('Already Bookmarked!')
    }
    else{
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs))
        toast.success('Blog Bookmarked Successfully!')
    }

}

// delete
const deleteItem = id =>{
    const blogs = getBlogs()
    const remaining = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog Removed From Bookmark!')
}
export {getBlogs, saveItem, deleteItem}