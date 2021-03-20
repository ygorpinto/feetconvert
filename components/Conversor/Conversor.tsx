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

        return convertedSize[value];
    }

    return (
        <ConversorStyles>
            {(converter(feetsize) === undefined)&&
            (<>
            <div>Digite o tamanho do pé a ser convertido US.</div>
            <p>Use medidas válidas do 5.5 ao 8.5</p>
            </>)}
            <input
            placeholder="Tamanho US. ex:5.5. " 
            onChange={e=>setFeetSize(e.target.value)}
            type="number"/>
            {(converter(feetsize) !== undefined)?
            <h2>{converter(feetsize)} BR</h2>:
            null}
        </ConversorStyles>
    )
}

export default Conversor;