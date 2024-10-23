import { useEffect, useState, useTransition } from "react"
import { Loader } from "../components/UI/Loader"
import { getCountryData } from "../api/postApi"
import { CountryCard } from "../components/Layout/CountryCard"
import "../App.css"

export const Country = () => {
  const [countries, setcountries] = useState([])
  const [isPending, startTransition] = useTransition()

  useEffect(()=>{
    startTransition(async()=>{
     const res = await getCountryData()
     console.log(res.data)
     setcountries(res.data)
     
    })
  },[])
  


  if(isPending) return <Loader/>

  return (
    <ul className="country-section container-card container">
      {
        countries.map((currentCountry,index)=>{
          return <CountryCard currentCountry ={currentCountry} key={index} />
        })
      }
    </ul>
  )
}
