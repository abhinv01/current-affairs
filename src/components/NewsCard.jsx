import React, { useEffect, useState } from "react";
import logo from "../images/android-chrome-192x192.png";
import "../css/newsCard.css";

const NewsCard = ({ title, description, src, url, publishedAt, author }) => {
  // console.log(src ? true : title);
  const [imgLoad, setImgLoad] = useState(src === null ? false : true);

  useEffect(() => {
    setImgLoad(src === null ? false : true);
  }, [src]);

  const descriptionSize = 200;

  const handleError = (e) => {
    console.log("img error", e);
    setImgLoad(false);
  };
  return (
    <div>
      {/* <div className="card text-bg-dark" style={{ width: "18rem" }}>
        <img src={logo} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div> */}

      <div className="card m-3 newsCard-body p-2">
        <img
          src={imgLoad ? src : logo}
          style={{ maxHeight: "170px" }}
          className="card-img-top news-card-img"
          alt="..."
          onError={handleError}
        />
        <div className="card-body news-card-body">
          <h5 className="card-title">
            {description ? title.slice(0, 50) : title}
          </h5>
          <p className="card-text news-card-text">
            {description
              ? `${description.slice(0, descriptionSize)}` +
                `${description.length > descriptionSize ? "..." : ""}`
              : ""}
            <span className="news-card-date">
              {publishedAt.toLocaleDateString()}
            </span>
            <span className="news-card-date">Source: {author}</span>
          </p>
          <a
            href={url}
            className="btn btn-primary newscard-button"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
