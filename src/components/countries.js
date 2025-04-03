import {useEffect, useState} from "react";
import { CountryFlagCard } from "./coutry-flag-card";
import axios from "axios";


export default function Countries(){
    
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://xcountries-backend.azurewebsites.net/all';

    const apiCall = async () => {
        try {
            const resp = await axios.get(url);
            setCountries(resp.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        apiCall();
        
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