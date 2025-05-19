import React from 'react'
import './card.css'

const Card = ({ title, imgurl, description }) => {
  return (
    <>
     <div className="container">
        <img src={imgurl || "https://lyricssy.com/wp-content/uploads/2024/09/Talha-Anjum-Lyrics.webp"} alt="sample image" />
        <h1 className="title">{title || "Card title"}</h1>
        <div className="description">
            {description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, tempore quam perferendis soluta voluptas nam accusamus. Omnis hic delectus quos ratione nulla praesentium exercitationem voluptas?"}
        </div>
        </div> 
    </>
  )
}

export default Card
