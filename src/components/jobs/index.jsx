import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';
import Cookies from 'js-cookie';
import './index.css'
import { useEffect, useState } from 'react';

const Jobs = ()=> {

    const [allValues,setValues] = useState({
        jobsList : []
    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const getJobsData = async()=>{

            const api = "https://apis.ccbp.in/jobs";

            const option = {
                method: 'GET',
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }


            const response = await fetch(api,option);

            const jobsData = await response.json();

            if(response.ok === true){
                setValues({...allValues,jobsList : jobsData.jobs});
            }

        }


        getJobsData();

    },[])


    return(

        <>
                <Header/>

                <div className='jobs-cont'>

                            <div className='filter-section'>
                                <FilterSection/>
                            </div>

                            <div className='display-all-jobs-section'>
                                <ul className='jobs-list-cont'>
                                        {
                                            allValues.jobsList.map(each=> <DisplayAllJobs jobsItem = {each} key={each.id}/>)
                                        }
                                </ul>
                            </div>

                </div>
        
        
        </>
    )
}


export default Jobs;