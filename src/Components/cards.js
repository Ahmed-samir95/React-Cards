import React, { Fragment } from "react";

 

const cards = ({infocards, deleteFunc}) => {
  const cardsItem = infocards.map(({name, desc, link}, idx) =>(
      <div className="cardsItem" key={idx}>
        <h2>{name}</h2>
        <p>{desc}</p>
        <a href={link}>شاهد الان</a>
        <div className="icon" onClick={(e) => deleteFunc(e, idx)}>X</div>
      </div>
  ))
  return(
    <Fragment>{cardsItem}</Fragment>
  )
}
export default cards