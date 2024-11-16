import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaRegEye, FaShareAlt } from 'react-icons/fa';
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
        <div className=" p-4 bg-white rounded-lg shadow-md">
        {/* Author Information */}
        <div className="flex items-center mb-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
          <div className="ml-auto">
            <FaShareAlt className="text-gray-600" />
          </div>
        </div>
  
        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
  
        {/* Thumbnail Image */}
        <img
          src={thumbnail_url}
          alt="Thumbnail"
          className="w-full h-72  object-cover rounded-lg mb-4"
        />
  
        {/* Details */}
        <p className="text-gray-700 text-sm mb-4">
          {details.slice(0, 150)}...{" "}
          <span className="text-primary">Read More</span>
        </p>
  
        {/* Ratings and Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-yellow-500 ${
                  i < Math.round(rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold">{rating.number}</span>
          </div>
  
          {/* Views */}
          <div className="flex items-center">
            <FaRegEye className="mr-1" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    );
};

export default NewsCard;
