import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightAside from "../../Components/RightAside/RightAside";

const NewsDetails = () => {

  const navigate = useNavigate();
//   const handleCategory = () =>{
//     navigate(`/category/01`)
//   }

  const data = useLoaderData();
  const news = data.data[0];
  return (
    <main className="w-11/12 mx-auto">
      <div>
        <Header></Header>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9">
            <h2 className="text-slate-700 font-semibold">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl my-4">
            <figure className="px-10 pt-10">
              <img
                src={news.thumbnail_url}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-start">{news.title}</h2>
              <p className="text-gray-500 text-sm text-start">{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news.category_id}`} className="bg-[#D72050] text-white px-4 py-2">All news in this category</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RightAside></RightAside>
        </div>
      </div>
    </main>
  );
};

export default NewsDetails;
