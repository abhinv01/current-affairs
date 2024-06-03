import React, { useState, useEffect } from "react";
import "../css/newsboard.css";
import NewsCard from "./NewsCard";
import "../css/newsboard.css";
// import { myPromise } from "../articles";

const NewsBoard = ({ loading, setLoading, ...props }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const twelveHoursInMilliseconds = 12 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();

    let data = localStorage.getItem(props.category);
    data = JSON.parse(data);

    const isLatest = data
      ? Math.abs(currentTime - data[0]) < twelveHoursInMilliseconds
      : false; //checking if last call was done more than 12hrs ago

    if (data && isLatest) {
      // console.log(data);
      setArticles(data.slice(1));
      setLoading(false);
    } else {
      // myPromise
      //   .then((data) => {
      //     setArticles(data.articles);
      // setLoading(false)
      //     localStorage.setItem("articles", JSON.stringify(data.articles));
      //   })
      //   .catch((err) => console.log(err));

      const apiKey = process.env.REACT_APP_SECRET_NAME_2;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.articles);
          setLoading(false);
          localStorage.setItem(
            props.category,
            JSON.stringify([new Date().getTime(), ...data.articles])
          );
        })
        .catch((err) => console.log(err));
    }
  }, [props.category, setLoading]);

  return (
    <div className="my-4 mb-5">
      <h2 className="text-center newsboard-heading">News Room</h2>
      <div className="newsboard-border-bottom col-8 offset-2"></div>

      <div className="container">
        <div className="row">
          {!loading ? (
            articles.map((article, index) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <NewsCard
                    title={article.title}
                    description={article.description}
                    src={article.urlToImage}
                    url={article.url}
                    publishedAt={new Date(article.publishedAt)}
                    author={article.author}
                  ></NewsCard>
                </div>
              );
            })
          ) : (
            <div
              className="col-12 d-flex justify-content-center align-items-center"
              style={{ height: "65vh" }}
            >
              <div
                className="spinner-border custom-spinner-border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
