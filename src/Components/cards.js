import React, { Fragment } from "react";

 

const cards = ({infocards}) => {
  const cardsItem = infocards.map(({name, desc, link}, ind) =>(
      <div className="cardsItem" key={ind}>
        <h2>{name}</h2>
        <p>{desc}</p>
        <a href={link}>شاهد الان</a>
      </div>
  ))
  return(
    <Fragment>{cardsItem}</Fragment>
  )
}
export default cards