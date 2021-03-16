import React, { useState, useEffect } from 'react';
import classes from './myJobs.css';

import { getSomeJobs } from '../../../../../../../redux/actions/jobs';
import { useSelector, useDispatch } from 'react-redux';

const MyJob = () => {
    const dispatch = useDispatch();

    const [jobsSelection, setJobsSelection] = useState("Active");
    const user = useSelector((state) => state?.user);

    let pendingJobs, activeJobs, rejectedJobs, completedJobs = [];

    useEffect(() => {
        let currentJobs = (((user?.jobs?.pending.concat(user?.jobs?.active)).concat(user?.jobs?.completed)).concat(user?.jobs?.rejected));
        dispatch(getSomeJobs({currentJobs}));
    }, [])

    const jobs = useSelector((state) => state.job);


    if(jobs){
        if(user.jobs?.pending){
            pendingJobs = jobs?.map((job) => user?.jobs?.pending?.includes(job._id) ? <li>{job?.title}</li> : null)
            pendingJobs = pendingJobs.filter(job => job !== null);
        }
        if(user?.jobs?.active){
            activeJobs = jobs?.map((job) => user?.jobs?.active?.includes(job._id) ? <li>{job?.title}</li> : null)
            activeJobs = activeJobs.filter(job => job !== null);
        }
        if(user?.jobs?.rejected){
            rejectedJobs = jobs?.map((job) => user?.jobs?.rejected?.includes(job._id) ? <li>{job?.title}</li> : null)
            rejectedJobs = rejectedJobs.filter(job => job !== null);
        }
        if(user?.jobs?.completed){
            completedJobs = jobs?.map((job) => user?.jobs?.completed?.includes(job._id) ? <li>{job?.title}</li> : null)
            completedJobs = completedJobs.filter(job => job !== null);
        }
    }

    return (
        <div className={classes["jobs-container"]}>
            <div className={classes["jobs-container-2"]}>
                <div className={classes["jobs-selector"]}>
                    <div className={jobsSelection==="Active" ? classes["jobs-heading-active"] : classes["jobs-heading"]} onClick={()=>setJobsSelection("Active")}>Active</div>
                    <div className={jobsSelection==="Pending" ? classes["jobs-heading-active"] : classes["jobs-heading"]} onClick={()=>setJobsSelection("Pending")}>Pending</div>
                    <div className={jobsSelection==="Completed" ? classes["jobs-heading-active"] : classes["jobs-heading"]} onClick={()=>setJobsSelection("Completed")}>Completed</div>
                    <div className={jobsSelection==="Rejected" ? classes["jobs-heading-active"] : classes["jobs-heading"]} onClick={()=>setJobsSelection("Rejected")}>Unsuccessful</div>
                </div>

                <div className={classes["jobs-display"]}>
                    <ul>
                        {jobsSelection==="Active" ? activeJobs : null}
                        {jobsSelection==="Pending" ? pendingJobs : null}
                        {jobsSelection==="Completed" ? completedJobs : null}
                        {jobsSelection==="Rejected" ? rejectedJobs : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyJob;