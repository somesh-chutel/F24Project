import { useParams } from 'react-router-dom';
import './index.css'
import { useEffect } from 'react';
import Cookies from 'js-cookie';



const DetailedJobsSection = ()=>{

    const {id} = useParams();

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const getDetailedJobsData = async()=>{

            const api = `https://apis.ccbp.in/jobs/${id}`;

            const options = {
                method: "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }


            const response = await fetch(api,options);
            const data = await response.json();

            console.log(data);

        }

        getDetailedJobsData();

    },[])

    return (

        <h1> Detailed Job Section </h1>
    )
}




export default DetailedJobsSection;