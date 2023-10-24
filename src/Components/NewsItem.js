import React from "react";
const NewsItem = (props) => {
  let { title, description, newsUrl, imgUrl, author, date, source } =
    props;
  return (
    <div>
      <div className="card">
        <img
          src={
            !imgUrl
              ? "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAsQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARFBMf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxEQAAAAAAAVFRUKoqIqEBQEUVAFQBABQAQEVFA8FBAUEFQUiggAgKigiKgCgCgCoAAoioIiiiCoCoaIqpQAABRFAAARSiIAAACgAAAACiKKIAgAAAAAAoigAgAoAAIAAACgAAAIKKIAgAAACAACoooACKAAAAAACgAgAAgqAACAAACgAgoiigAAAAAARVEAQKAAlVAAFQAAAQAAFQFFAAAAAABQAAARBAUAAAAAEAFFQUBFABUigigCAKAAhUAAAAxQEFAMRRAAFOAAQAFAAUFH/2Q=="
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6>
            <span className="badge bg-danger">{source}</span>
          </h6>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </strong>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
