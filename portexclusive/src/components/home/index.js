import React from 'react'
import Video from '../../video/video.mp4'
import { HomeContainer, HomeBg, VideoBg, ImgBg, HomeContent } from './Homestyle'


const Home = () => {


    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <h1 class= "about">About me</h1>
                <ImgBg src="https://www.cochonon2nd.com/wp-content/uploads/placeholder_image2.png" alt="Img" />
                <p class= "me">I am a Full Stack Web Developer based in Salt Lake City, Utah. I am a boot camp graduate from the University of Utah.
                    I am currently enrolled in a Masters program at George Washington Univeristy for Cybersecurity.
                    I have always had a passion for coding and love every opportunity I get to code! In my portfolio you can view my projects
                    and find my contact information. </p>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home