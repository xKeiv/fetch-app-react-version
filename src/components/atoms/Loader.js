import React from 'react';
import styled from '@emotion/styled';

//STYLING

const Background = styled.div`
display: flex;
justify-content: center;
align-items: center;

background: #252525;
color: orange;

height: 100vh;
width: 100vw;
`

const Spinner = styled.div`
    width: 50px;
    height: 50px;
    animation: anm-sq-18-2 1.25s infinite ease-in-out;
    display: inline-block;

    &::after {
        content: "";
        height: 50px;
        width: 50px;
        background-color: #bbb;
        position: fixed;
    }

    &::before {
        content: "";
        height: 50px;
        width: 50px;
        background-color: #252525;
        position: fixed;
        z-index: 1;
        animation: anm-sq-18-1 1.25s alternate infinite ease-in-out;
    }

    @keyframes anm-sq-18-1 {
        0% {
            transform: scale(0.2);
        }
        100% {
            transform: scale(0.75);
        }
    }

    @keyframes anm-sq-18-2 {
        to {
            transform: rotate(90deg);
        }
    }
`

//GENERAL

const loader = () => {
  return (
    <Background>
            <Spinner/>
    </Background>
  )
}

export default loader