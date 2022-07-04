import { Carousel } from "react-bootstrap";
import FirstSlide from "../assets/Screenshot3.png";
import SecondSlide from "../assets/Screenshot4.png";
import ThridSlide from "../assets/Screenshot6.png";

function CarouselF() {
return (
  <div id="projects">
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
);
}
export default CarouselF;