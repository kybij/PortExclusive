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
      <img class= "alice" src={image1} className="sliderimg" alt="first"/>
      <a href= "https://github.com/Jsieler/wizard-sorting-quiz"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      <a href= "https://pacific-scrubland-02824.herokuapp.com/login">Deployed</a>
      </div>
      
      <div>
       <img src={image2} className="sliderimg" alt= "second"/>
       <a href= "https://github.com/JuanHernandez96/Project-1"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      <a href= "https://juanhernandez96.github.io/Project-1/">Deployed</a>
       </div>
       <div>
       <img src={image3} className="sliderimg" alt= "third"/>
       <a href= "https://github.com/Jsieler/team-up"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      <a href= "https://protected-depths-21600.herokuapp.com/">Deployed</a>
       </div>
       <div>
      <img src={image4} className="sliderimg" alt = "fourth"/> 
      <a href= "https://github.com/kybij/Weather-App"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      <a href= "https://kybij.github.io/Weather-App/">Deployed</a>
      </div>
      <div>
      <img src={image5} className="sliderimg" alt="fifth"/> 
      <a href= "https://github.com/kybij/MoneyMoney"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      <a href= "https://moneymoney21.herokuapp.com/">Deployed</a>
      </div>
      <div>
      <img src={image6} className="sliderimg" alt = "sixth"/>  
      <a href= "https://github.com/kybij/Team-Generator"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODMuMzA5ODEiIHkxPSI0MyIgeDI9IjgzLjMwOTgxIiB5Mj0iMTQ4LjczMTYzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfNTI1MzlfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYWVlODMiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZGM1OTkiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxMy40Mzc1IiB4Mj0iODYiIHkyPSIxNTkuMDExMzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMl81MjUzOV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q5ZTAyMSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZiODcyYiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTY3LjIwOSwxNTAuNTE4ODFjLTAuMDA4MDYsLTAuOTg5IC0wLjAxNjEzLC01LjI3Mjg3IC0wLjAyNDE5LC05LjI4MjYybC0wLjAwODA2LC00LjE2NTYzYy0xOC4wODQxOSwyLjQ1OTA2IC0yMi40NjIxMiwtMTAuMTU4NzUgLTIyLjUxMDUsLTEwLjI5MzEyYy0yLjUxMDEyLC02LjM2NCAtNS45NDIwNiwtOC4xODM0NCAtNi4wODk4NywtOC4yNTg2OWwtMC4zMzMyNSwtMC4xOTM1Yy0xLjI0NDMxLC0wLjg0OTI1IC00LjU0NDU2LC0zLjEwOTQ0IC0zLjYwNjYzLC02LjA4MTgxYzAuODQ2NTYsLTIuNjc5NDQgNC4xMjgsLTIuOTU2MjUgNS42MTk1NiwtMi45MDc4OGM4LjI2MTM4LDAuNTc3ODEgMTIuNDQzMTIsOC4wMDMzOCAxMi42MTUxMiw4LjMxNzgxYzQuMjE2NjksNy4yMjY2OSAxMC42NTMyNSw2LjQ3OTU2IDE0LjgwNTQ0LDQuOTU1NzVjMC4zODcsLTEuODQ5IDAuOTg2MzEsLTMuNTQ3NSAxLjc3MTA2LC01LjA0NzEzYy0xMy4zMTkyNSwtMi4zNjIzMSAtMjguNDA5NTYsLTkuNDQ2NTYgLTI4LjQwOTU2LC0zNS4yMTdjMCwtNy4wNzYxOSAyLjIwMzc1LC0xMy4zMyA2LjU2MDE5LC0xOC42MjE2OWMtMC45NzI4NywtMy4yNDExMyAtMi4wODAxMywtOS44NTIzOCAxLjE5ODYyLC0xOC4xODA5NGwwLjQ2NzYyLC0xLjE4Nzg3bDEuMjE0NzUsLTAuMzg3YzEuMTE4LC0wLjM2ODE5IDcuMjI0LC0xLjY3NyAxOS43NzczMSw2LjUzODY5YzUuMTgxNSwtMS4zMjc2MiAxMC42NjY2OSwtMi4wMTI5NCAxNi4zMjM4NywtMi4wMzk4MWM1LjY4NDA2LDAuMDI2ODggMTEuMTc0NjMsMC43MTIxOSAxNi4zNjY4NywyLjAzOTgxYzEyLjU0MjU2LC04LjIxODM3IDE4LjYzNTEyLC02Ljg5MzQ0IDE5Ljc1NTgxLC02LjUzODY5bDEuMjEyMDYsMC4zODk2OWwwLjQ2NzYyLDEuMTgyNWMzLjI5MjE5LDguMzI1ODcgMi4xODQ5NCwxNC45Mzk4MSAxLjIxMjA2LDE4LjE4MzYzYzQuMzQ4MzgsNS4yNzU1NiA2LjU1MjEzLDExLjUzMjA2IDYuNTUyMTMsMTguNjIxNjljMCwyNS43NzU4MSAtMTUuMTA2NDQsMzIuODM4NTYgLTI4LjQ1NTI1LDM1LjE3MTMxYzEuNTEzMDYsMi44NjIxOSAyLjMzMjc1LDYuNDU1MzggMi4zMzI3NSwxMC40MjIxMmMwLDQuNTIzMDYgLTAuMDE4ODEsMTkuMzYwNzUgLTAuMDQwMzEsMjIuNTgwMzhsLTUuMzc1LC0wLjAzNzYzYzAuMDIxNSwtMy4yMTQyNSAwLjA0MDMxLC0xOC4wMjc3NSAwLjA0MDMxLC0yMi41NDU0NGMwLC02LjU2Mjg4IC0yLjUzNDMxLC05LjQ2NTM3IC0zLjYyODEzLC0xMC40MTEzOGwtNC42NDkzNywtNC4wMjMxOWw2LjExMTM3LC0wLjY3OTk0YzEzLjk4ODQ0LC0xLjU1MzM4IDI4LjI4NTk0LC02LjM5MzU2IDI4LjI4NTk0LC0zMC40Nzg5NGMwLC02LjI2MTg4IC0yLjA4ODE5LC0xMS43MjAxOSAtNi4yMDgxMywtMTYuMjIxNzVsLTEuMTU1NjMsLTEuMjYwNDRsMC42NTAzNywtMS41Nzc1NmMwLjQ0NjEyLC0xLjA3NzY5IDIuNDAyNjIsLTYuNTYyODcgLTAuMTE1NTYsLTE0LjIxOTU2Yy0yLjAzNzEzLDAuMTIwOTQgLTYuOTAxNSwxLjA4MDM4IC0xNS4wMDcsNi41NzYzMWwtMS4wMzIsMC42OTYwNmwtMS4xOTU5NCwtMC4zMzA1NmMtNS4wMDY4MSwtMS4zOTIxMiAtMTAuNTgzMzgsLTIuMTM5MjUgLTE2LjEyNzY5LC0yLjE2NjEzYy01LjUxNDc1LDAuMDI2ODggLTExLjA4MzI1LDAuNzc0IC0xNi4wODIsMi4xNjYxM2wtMS4xOTU5NCwwLjMzMDU2bC0xLjAyOTMxLC0wLjY5NjA2Yy04LjExMzU2LC01LjQ5MzI1IC0xMi45ODg2OSwtNi40NjA3NSAtMTUuMDMzODgsLTYuNTgxNjljLTIuNTEyODEsNy42NjIwNiAtMC41NTM2MiwxMy4xNDcyNSAtMC4xMDc1LDE0LjIyNDk0bDAuNjUwMzcsMS41Nzc1NmwtMS4xNTI5NCwxLjI2MDQ0Yy00LjEyOCw0LjUxNzY5IC02LjIxODg3LDkuOTc2IC02LjIxODg3LDE2LjIyMTc1YzAsMjQuMDc0NjIgMTQuMjcwNjIsMjguOTQ0MzggMjguMjI5NSwzMC41MzI2OWw2LjA1MjI1LDAuNjg4bC00LjU5MDI1LDQuMDA0MzhjLTAuOTk5NzUsMC44NzM0NCAtMi43NjgxMiwyLjk4ODUgLTMuMzcwMTMsNy4zMjg4MWwtMC4yMDE1NiwxLjQ3NTQ0bC0xLjM1OTg4LDAuNjEwMDZjLTMuNTUwMTksMS41OTEgLTE1LjY5MjMxLDUuODEwMzggLTIyLjk3Mjc1LC02LjY3ODQ0Yy0wLjA0MDMxLC0wLjA2NzE5IC0xLjQ2MiwtMi41Mzk2OSAtNC4wMzY2MiwtNC4xODQ0NGMxLjczNjEzLDEuNzE3MzEgMy44NTExOSw0LjQ5NjE5IDUuNTU3NzUsOC44MzM4MWMwLjE3NzM3LDAuNTEwNjIgMy42NDY5NCw5LjczNDEyIDE5LjU2NSw2LjI4NjA2bDMuMjQxMTIsLTAuNzA0MTNsMC4wMzIyNSwxMC42OTA4OGMwLjAwODA2LDMuOTk2MzEgMC4wMTYxMiw4LjI2Njc1IDAuMDI0MTksOS4yNTU3NXoiIGZpbGw9InVybCgjY29sb3ItMV81MjUzOV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTg2LDE1NS44NzVjLTM4LjUzMDY5LDAgLTY5Ljg3NSwtMzEuMzQ0MzEgLTY5Ljg3NSwtNjkuODc1YzAsLTM4LjUzMDY5IDMxLjM0NDMxLC02OS44NzUgNjkuODc1LC02OS44NzVjMzguNTMwNjksMCA2OS44NzUsMzEuMzQ0MzEgNjkuODc1LDY5Ljg3NWMwLDM4LjUzMDY5IC0zMS4zNDQzMSw2OS44NzUgLTY5Ljg3NSw2OS44NzV6TTg2LDIxLjVjLTM1LjU2MzY5LDAgLTY0LjUsMjguOTM2MzEgLTY0LjUsNjQuNWMwLDM1LjU2MzY5IDI4LjkzNjMxLDY0LjUgNjQuNSw2NC41YzM1LjU2MzY5LDAgNjQuNSwtMjguOTM2MzEgNjQuNSwtNjQuNWMwLC0zNS41NjM2OSAtMjguOTM2MzEsLTY0LjUgLTY0LjUsLTY0LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfNTI1MzlfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a>
      </div>
</AliceCarousel>
        </ProjectContainer>
    )
}

export default Projects
