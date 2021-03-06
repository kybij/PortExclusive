import styled from 'styled-components'

export const HomeContainer = styled.div`
background: #0c0c0c;
display:flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;`

export const HomeBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom:0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34`

export const HomeContent = styled.div`
max-width: 1500px;
position: absolute;
padding: 2px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HomeH1 = styled.h1`
color:#fff;
font-size: 48px;
text-align: center;
font-family:'Roboto Mono', monospace ;
`

export const HomeH4 = styled.h4`
color: #fff;
font-size: 40px;
text-align: center;`

export const HomeP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 32px,
text-align: center;
max-width: 600px;
`

export const ImgBg = styled.img`
width: 25%;
border-radius: 10px;
padding-bottom: 3rem;
`
