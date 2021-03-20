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

    border:none;
    box-shadow:2px 2px rgba(0,0,0,0.15);
    border-radius:0.6rem;
    background-color:rgba(0,0,0,0.07);

    ::placeholder {
        text-align:center;
    }
}

div {
    text-align:center;
    font-size:1.2rem;
}

p {}

h2 {}

`

export default ConversorStyles;