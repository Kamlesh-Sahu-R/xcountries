import {useEffect, useState} from "react";
import { CountryFlagCard } from "./coutry-flag-card";
import axios from "axios";


export default function Countries(){
    
    const [countries, setCountries] = useState([]);
    const url = 'https://xcountries-backend.azurewebsites.net/all';

    const apiCall = async () => {
        try {
            const resp = await axios.get(url);
            setCountries(resp.data);
        } catch (e) {
            return <p> Error: {e.message}</p>
        }
    };

    useEffect(() => {apiCall()}, []);

    if (countries.length > 0) {
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
    };

   
}