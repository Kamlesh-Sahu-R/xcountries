import {useEffect, useState} from "react";
import { CountryFlagCard } from "./coutry-flag-card";



export default function Countries(){
    
    const [countries, setCountries] = useState([]);
    const url = 'https://xcountries-backend.azurewebsites.net/all';

    const apiCall = async () => {
        try {
            const resp = await fetch(url);
            const jsonResp = await resp.json();
            setCountries(jsonResp);
        } catch (e) {
            console.error("This is API error: ", e);
            return <p> Error: {e.message}</p>
        }
    };

    //apiCall()

    useEffect(() => {apiCall()}, []);

    return(
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "15px"
          }}
        >
            {countries.map(({name, flag, abbr}) =>(
                <CountryFlagCard name = {name} flag ={flag} key = {abbr} />
            ))}
        </div>
    );
}