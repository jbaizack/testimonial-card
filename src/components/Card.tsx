import React from "react"; 

type Props = {
  info: CardInfo
}

type CardInfo = {
  name: string, 
  username: string, 
  review: string, 
  imagePath?: string
}
const Card: React.FC<Props> = ({info}) => {
  const {name, username, review, imagePath} = info; 
  return (
    <div className="wrapper">
      <div className="container">
        <div className="heading">
          {imagePath && <img src={imagePath}></img>}
          <div className="nameInfo">
            <span>{name}</span>
            <span>{username}</span>
          </div>
        </div>
        <div className="review">
          <p>{review}</p>
        </div>
      </div>
    </div>
  )
}


export default Card;