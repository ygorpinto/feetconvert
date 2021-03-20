import styled from 'styled-components'

const ConversorStyles = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

input {
    margin:0.2rem 0 1rem 0;
    height:2rem;
    width:15rem;

    font-family: 'Montserrat', sans-serif;

    border:none;
    box-shadow:2px 2px rgba(0,0,0,0.15);
    border-radius:0.6rem;
    background-color:rgba(0,0,0,0.09);

    ::placeholder {
        text-align:center;
    }

    :hover {
        background-color:rgba(0,0,0,0.04);
    }
}

div {
    text-align:center;
    font-size:1.2rem;
    font-family: 'Montserrat', sans-serif;
}

p {
    text-align:center;
    font-size:0.8rem;
    font-family: 'Montserrat', sans-serif;
}

h2 {
    text-align:center;
    font-size:1.2rem;
    font-family: 'Montserrat', sans-serif;
}

`

export default ConversorStyles;