import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category
        ))
    }, [])
    return (
        <div>
            <h2 className="text-slate-700 font-semibold">All Category</h2>
            <div className="flex flex-col space-y-2 mt-4">
                {
                    category.map(item => <NavLink to={`/category/${item.category_id}`} key={item.category_id}className={({isActive}) => isActive ? "bg-slate-600 text-white p-2 rounded-md btn" : "bg-transparent btn"}>{item.category_name}</NavLink>)
                }
              </div>
        </div>
    );
};

export default LeftAside;