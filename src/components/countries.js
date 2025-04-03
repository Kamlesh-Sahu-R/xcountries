import {useEffect, useState} from "react";
import { CountryFlagCard } from "./coutry-flag-card";
import axios from "axios";


export default function Countries(){
    
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://xcountries-backend.azurewebsites.net/all';

    useEffect(() => {
        async function apiCall(){
            await axios.get(url)
            .then((resp) =>{
                setCountries(resp.data);
                setLoading(false);
            })
            .catch((e) => {
                setError(e);
                setLoading(false);
            });
        };
        apiCall()
        console.log(countries);
        
    }, []);

    // useEffect(() => {
    //     console.log(countries);
    // }, [countries]);

    if(loading){
        return <p> Loading...</p>
    }
    if(error){
        return <p> Error: {error.message}</p>
    }

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