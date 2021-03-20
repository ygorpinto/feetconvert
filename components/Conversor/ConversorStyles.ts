import styled from 'styled-components'

const ConversorStyles = styled.div`

height:45vh;
width:40%;

box-shadow:5px 5px 5px 5px rgba(0,0,0,0.19);
border-radius:1rem;
backdrop-filter:blur(5px);

color:#fff;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

@media screen and (max-width:750px) {
    height:40vh;
    width:90%;
}

input {
    margin:0.2rem 0 1rem 0;
    height:2rem;
    width:15rem;

    color:#fff;

    font-family: 'Montserrat', sans-serif;

    border:none;
    box-shadow:2px 2px rgba(0,0,0,0.15);
    border-radius:0.6rem;
    background-color:rgba(0,0,0,0.09);

    ::placeholder {
        text-align:center;
        color:#fff;
    }

    :hover {
        background-color:rgba(0,0,0,0.04);
    }

    @media screen and (max-width:450px) {
        width:80%;
    }
}

div {
    text-align:center;
    font-size:1.2rem;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width:450px) {
        font-size:1rem;
    }

    @media screen and (max-width:300px) {
        font-size:0.8rem;
    }
}

p {
    text-align:center;
    font-size:0.8rem;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width:450px) {
        font-size:0.7rem;
    }
}

h2 {
    text-align:center;
    font-size:1.2rem;
    font-family: 'Montserrat', sans-serif;
}

`

export default ConversorStyles;