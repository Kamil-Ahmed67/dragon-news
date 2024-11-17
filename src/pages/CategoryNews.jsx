import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard/NewsCard";

const CategoryNews = () => {
    const {data: news}=useLoaderData();
    return (
        <div>
          <h2 className="font-semibold mb-3">Dragon News Home</h2>
          <p className="text-gray-400 text-sm">{news.length} News Found in This Category</p>
          {
            news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}  ></NewsCard>)
          }
        </div>
    );
};

export default CategoryNews;