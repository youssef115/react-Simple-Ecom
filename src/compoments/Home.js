import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
//lib to add animation 
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://picsum.photos/v2/list?category=freezer,television,phone'
      );
      const data = await response.json();
      setImages(data.map(item => item.download_url));
    }
    fetchData();
  }, []);
  return (
    //add animation to slider
    // <TransitionGroup>
    // <CSSTransition key={currentIndex} timeout={500} classNames="fade">
    <Slider src={images[currentIndex]} alt="Random"/>
    //   </CSSTransition>
    // </TransitionGroup>
  )
}

export default Home

const Slider=styled.img`
  margin-top:-15px;
  width:100%;
  height:500px;
`;