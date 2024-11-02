import PropTypes from 'prop-types';
import placeholderImage from '../assets/404.jpg'
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
const BlogCard = ({blog, deletable, handleDelete}) => {
    const {id,cover_image,title,published_at, description} = blog

    return (
        <div className='flex relative'>
          <Link
        to={`/blog/${id}`}
            className="max-w-sm transition border-2 border-primary hover:border-secondary border-opacity-30 hover:scale-105 p-2 mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image || placeholderImage}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
              </span>
              <p>
                {description}
              </p>
            </div>
          </Link>

          {deletable && (
            <div onClick={()=> handleDelete(id)} className='absolute bg-primary  hover:bg-secondary  p-3 rounded-full hover:scale-105  cursor-pointer  text-secondary hover:text-primary -top-5 -right-5'>
              <MdDeleteForever size={20} ></MdDeleteForever>
            </div>
          )}
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object,
    deletable: PropTypes.object,
    handleDelete : PropTypes.func,
}

export default BlogCard;