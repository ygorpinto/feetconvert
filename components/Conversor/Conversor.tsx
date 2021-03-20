import { useState } from "react";
import ConversorStyles from "./ConversorStyles";



const Conversor = () => {

const [feetsize,setFeetSize] = useState("");

    const converter = (value:string) => {
        const convertedSize = {  
        	"5.5":34,	
        	"6":35,	
        	"7":36,	
        	"7.5":37,	
        	"8":38,	
        	"8.5":39,
        }

        if (value === "") {
            return "Digite o tamanho US e será convertido em BR."
        }

        if (!(value in convertedSize)){
            return "Digite um tamanho válido de 5.5 até 8.5."
        }

        return convertedSize[value];
    }

    return (
        <ConversorStyles>
            <input 
            onChange={e=>setFeetSize(e.target.value)}
            type="number"/>
            <div>{converter(feetsize)}</div>
        </ConversorStyles>
    )
}

export default Conversor;