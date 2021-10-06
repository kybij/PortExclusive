import React from 'react'
import '../../App.css'
import {ProjectContainer} from './Projectstyles'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'

const Projects = () => {
    return (
       <ProjectContainer>
            <h1 className= "project">Projects</h1>
    <AliceCarousel autoPlay autoPlayInterval="4000">
        <div>
      <img src={image1} className="sliderimg"/>
      <a href= "https://github.com/Jsieler/wizard-sorting-quiz">Github Repo</a>
      <a href= "https://pacific-scrubland-02824.herokuapp.com/login">Deployed</a>
      </div>
      
      <div>
       <img src={image2} className="sliderimg"/>
       <a href= "https://github.com/JuanHernandez96/Project-1">Github Repo</a>
      <a href= "https://juanhernandez96.github.io/Project-1/">Deployed</a>
       </div>
       <div>
       <img src={image3} className="sliderimg"/>
       <a href= "https://github.com/Jsieler/team-up">Github Repo</a>
      <a href= "https://protected-depths-21600.herokuapp.com/">Deployed</a>
       </div>
       <div>
      <img src={image4} className="sliderimg"/> 
      <a href= "https://github.com/kybij/Weather-App">Github Repo</a>
      <a href= "https://kybij.github.io/Weather-App/">Deployed</a>
      </div>
      <div>
      <img src={image5} className="sliderimg"/> 
      <a href= "https://github.com/kybij/MoneyMoney">Github Repo</a>
      <a href= "https://moneymoney21.herokuapp.com/">Deployed</a>
      </div>
      <div>
      <img src={image6} className="sliderimg"/>  
      <a href= "https://github.com/kybij/Team-Generator">Github Repo</a>
      </div>
</AliceCarousel>
        </ProjectContainer>
    )
}

export default Projects
