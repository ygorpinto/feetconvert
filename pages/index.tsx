import { useState } from "react";
import Container from "../components/Container/Container";
import Loading from "../components/Loading/Loading";

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(()=>{
  setIsLoading(false)
  },2000)
  return (
    <>
    {isLoading ? <Loading/> : <Container/>}
    </>
  )
}
