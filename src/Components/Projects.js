import { Carousel } from "react-bootstrap";
import FirstSlide from "../assets/Screenshot3.png";
import SecondSlide from "../assets/Screenshot4.png";
import ThridSlide from "../assets/Screenshot6.png";
import { useEffect, useState } from 'react';
import AnimatedLetters from "./AnimatedLetters";

function CarouselF() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
   }, 3000)
 }, [])

return (
<>
  <div id="projects" className="container contain">
    <div className="text-zone">
      <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
            />
          </h1>
          <p>These are screenshots of some of my projects</p>
    </div>
<Carousel fade  className="container carou-s">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={FirstSlide}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={SecondSlide}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ThridSlide}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
</>
);
}
export default CarouselF;