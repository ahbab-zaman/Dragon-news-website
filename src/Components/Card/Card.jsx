import { Link } from "react-router-dom";

function Card({ singleNews }) {
  const { thumbnail_url, author, title, details, _id } = singleNews;
  return (
    <div className="w-full mb-4 mx-auto bg-base-100 shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="flex items-center bg-base-200 px-4 py-4">
        <img className="w-10 h-10 rounded-full" src={author.img} alt="Author" />
        <div className="ml-3">
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
        <div className="ml-auto">
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-share-alt"></i>
          </button>
        </div>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="px-4">
        <img
          className="rounded-lg w-full object-cover"
          src={thumbnail_url}
          alt="News"
        />
      </div>

      <div className="px-4 py-2 text-sm text-gray-500">
        <p>{details.slice(0, 150)}...</p>
        <Link
          to={`/card/${_id}`}
          className="text-orange-500 font-semibold hover:underline"
        >
          Read More
        </Link>
      </div>

      <div className="flex items-center px-4 py-2 border-t border-gray-200 text-sm text-gray-500">
        <div className="flex items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-gray-300"
            />
          </div>
          <span className="ml-2">4.9</span>
        </div>
        <span className="ml-auto flex items-center gap-1">
          <i className="fas fa-eye"></i>
          <span>499</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
