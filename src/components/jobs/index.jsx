import Header from '../header';
import Cookies from 'js-cookie';
import FilterSection from '../filterSection';
import DisplayAllJobs from '../displayAllJobs';
import './index.css'
import { useEffect, useState } from 'react';

const Jobs = ()=> {

    const [allValues,setValues] = useState({
        jobsList : [],
        userSearchIn : "",
        empType : [],
        minPakage : ""
    });

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        const getJobsData = async()=>{

            console.log(allValues.empType);

            const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.minPakage}&search=${allValues.userSearchIn}`;

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

    },[allValues.userSearchIn,allValues.empType])


    const onChangeUserIn = (e)=>{
        if(e.key === "Enter"){
            setValues({...allValues,userSearchIn : e.target.value});
        }
        
    }

    const onChangeEmpType = (value,isChecked)=>{ //check-->fulltime(update),uncheck--->fulltime(remove)

        if(isChecked === true){
            setValues({...allValues, empType : [...allValues.empType,value]});
        }
        else{
            setValues({...allValues,empType : allValues.empType.filter(each=> each !== value)});
        }

        
    }

    const onChangeSallryRange = ()=>{}


    return(

        <>
                <Header/>

                <div className='jobs-cont'>

                            <div className='filter-section'>
                                <FilterSection emptypeChange = {onChangeEmpType}/>
                            </div>

                            <div className='display-all-jobs-section'>
                                <input onKeyDown={onChangeUserIn} type="search" className='form-control w-75 my-input'/>
                                <ul className='jobs-list-cont'>
                                        {
                                            allValues.jobsList.map(each=> <DisplayAllJobs jobsData = {each} key={each.id}/>)
                                        }
                                </ul>
                            </div>

                </div>
        
        
        </>
    )
}


export default Jobs;