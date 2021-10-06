import React from 'react'
import Video from '../../video/video.mp4'
import { HomeContainer, HomeBg, VideoBg, ImgBg, HomeContent, HomeH1, HomeH4, HomeP } from './Homestyle'


const Home = () => {


    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
        
                <ImgBg src="https://www.cochonon2nd.com/wp-content/uploads/placeholder_image2.png" alt="Img"/>
            
                <HomeH1>Kylee Bijerring </HomeH1>
                <HomeH4>About me</HomeH4>
                <HomeP>I am a Full Stack Web Developer based in Salt Lake City, Utah. I am a boot camp graduate from the University of Utah. 
                    I am currently enrolled in a Masters program at George Washington Univeristy for Cybersecurity.
                     I have always had a passion for coding and love every opportunity I get to code! In my portfolio you can view my projects
                     and find my contact information. </HomeP>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home