import React from "react"; 
import Card from "./components/Card"


const cardInfo = {
  name: "Sarah Dole",
  username: "@sarahdole", 
  review: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  imagePath: "profile-image.png"
}
export default function App(): React.ReactNode {
  return <Card info={cardInfo}/>
}