import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b1e467c24944afa95f9824c19a10e1e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category} | NewsFunnky`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category, page]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b1e467c24944afa95f9824c19a10e1e&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
    >
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: "80px", marginBottom: "20px" }}>
          NewsFunnky - Top {props.category} Headlines
        </h1>
        {loading && <p>...</p>}
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default News;
News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
