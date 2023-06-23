import React from "react";
import Link from "next/link";

interface CardProps {
  id?: number;
  title?: string;
  body?: string;
  url?: string;
}

const Card: React.FC<CardProps> = ({ id, title, body, url }) => {
  return (
    <Link style={{ textDecoration: "none" }} href={`/product/${id}`}>
      <div
        className="c-card"
        style={{ width: 320, margin: 12, height: 360, color: "black" }}
      ><div className="card-img-outer">
        <img className="card-img" src={url} alt="image" />
        </div>
        <h6 className="card-title"> {title?.slice(0, 20)}</h6>
        <p className="card-body">{body?.slice(0, 100)}</p>
      </div>
    </Link>
  );
};

export default Card;
