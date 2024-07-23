import { FaStar } from "react-icons/fa";
import "./index.css";

/*
company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png"
employment_type: "Internship"
id: "4a10e138-de09-4dbd-b5f8-fc3063e4fbaa"
job_description: "As a Frontend Engineer, you will be directly responsible for helping the evolution of enterprise design systems at Google. You will engineer solutions that create shareable web components to be used in enterprise products within the organization. You’ll support multiple different product areas."
location: "Mumbai"
package_per_annum: "14 LPA"
rating: 4
title: "Frontend Engineer"

*/

const DisplayAllJobs = (props) => {
  const { jobsItem } = props;

  return (

    <li className="jobs-card">
        <div className="logo-title-cont">
            <img className="card-logo" src={jobsItem.company_logo_url} alt="" />
            <div className="rating-cont">
                <h3>{jobsItem.title}</h3>
                <FaStar className="rating-icon"/>
                <span>{jobsItem.rating}</span>
            </div>
        </div>
    </li>

  )
};

export default DisplayAllJobs;
