import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card/Card";

const NewsPage = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <div className="mt-4">
        {
            news.map(singleNews => <Card key={singleNews.id} singleNews={singleNews}></Card>)
        }
      </div>
    </div>
  );
};

export default NewsPage;
