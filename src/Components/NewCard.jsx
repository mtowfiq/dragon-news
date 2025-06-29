import React from 'react';
import { FaShareAlt, FaBookmark, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewCard = ({ singleNews }) => {
    // console.log(singleNews)
    const {
        title,
        author,
        rating,
        total_view,
        thumbnail_url,
        details,
        _id
    } = singleNews;

    return (
        <div className="card bg-base-100 shadow-md mb-2">
            {/* Author and action row */}
            <div className="flex justify-between items-center p-4 bg-gray-100 rounded-xl">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{author?.name}</h2>
                        <p className="text-xs text-gray-500">{author?.published_date?.split(' ')[0]}</p>
                    </div>
                </div>
                <div className="flex gap-2 text-gray-500">
                    <FaBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Thumbnail */}
            <figure className="px-4 pt-4">
                <img
                    src={thumbnail_url}
                    alt="News Thumbnail"
                    className="w-full h-64 object-cover rounded-lg"
                />
            </figure>

            {/* Title and Description */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-700">
                    {details.length > 200 ? (
                        <>
                            {details.slice(0, 200)}...
                            <Link to={`/news/${_id}`} className="text-orange-500 font-semibold cursor-pointer"> Read More</Link>
                        </>
                    ) : (
                        details
                    )}
                </p>

                {/* Footer: Rating and Views */}
                <div className="flex justify-between items-center mt-4 border-t pt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1 text-orange-400">
                        {[...Array(Math.floor(rating?.number || 0))].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="text-black ml-1">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCard;
