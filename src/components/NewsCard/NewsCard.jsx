import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

const NewsCard = ({ singleNews }) => {
    const {
        author,
        title,
        details,
        rating,
        total_view,
        thumbnail_url,
    } =singleNews;

    return (
        <div className="card w-full bg-base-100 mb-4">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                    <img src={author.img} alt="Author" className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <FiShare2 className="text-gray-500 cursor-pointer" />
            </div>
          <div>
          <img src={thumbnail_url} alt="Thumbnail" className="w-full h-72 rounded-lg object-cover" />
          </div>
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-600 mb-3">{details.slice(0, 100)}... <span className="text-blue-500 cursor-pointer">Read More</span></p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <AiFillStar key={i} className={i < Math.floor(rating.number) ? 'text-yellow-500' : 'text-gray-300'} />
                        ))}
                        <span className="ml-2 text-gray-700 font-semibold">{rating.number}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
