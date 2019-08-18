import React from "react";
import defaultImg from "../images/room-1.jpeg";

export default function Room({ room }) {
  console.log(room);
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
      </div>
    </article>
  );
}
