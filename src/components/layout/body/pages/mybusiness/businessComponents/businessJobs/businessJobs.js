import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBusinessUserJobs } from '../../../../../../../redux/actions/businessAuth';

import NewJob from '../../../../modals/jobs/newJob/newJob';
import Job from '../../../../modals/jobs/existingJob/job';

import classes from './businessJobs.css';
import { getSomeJobs } from '../../../../../../../redux/actions/jobs';

const BusinessJobs = () => {
    const [newJobModal, setNewJobModal] = useState(false);
    const toggleNewJobModal = () => setNewJobModal(!newJobModal);

    const [jobModal, setJobModal] = useState(false);
    const toggleJobModal = () => setJobModal(!jobModal);

    const dispatch = useDispatch();
    const [business, setBusiness] = useState(useSelector((state) => state.businessUser));

    const [businessData, setBusinessData] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        setBusinessData(business);
        dispatch(getSomeJobs(business?.jobs));
    }, []);

    const jobs = useSelector((state) => state.job);

    let currentJobs;
    if(jobs.length>0){
        currentJobs = jobs.map((job) => <li onClick={()=> {
            setJobModal(!jobModal);
            setSelectedJob(job)
        }}>{job?.title} - {job?.description}</li>);
    }

    
    return(
        <div className={classes["jobs-wrapper"]}>
            <div className={classes["jobs-display"]}>
                <ul>
                    <li onClick={toggleNewJobModal} className={classes["add-job"]}>Add New Job</li>
                    {currentJobs}
                </ul>
            </div>
            <div>
                <NewJob modal={newJobModal} setModal={setNewJobModal} toggle={toggleNewJobModal}/>
                <Job modal={jobModal} setModal={setJobModal} toggle={toggleJobModal} job={selectedJob}/>
            </div>
        </div>
    )
}

export default BusinessJobs;