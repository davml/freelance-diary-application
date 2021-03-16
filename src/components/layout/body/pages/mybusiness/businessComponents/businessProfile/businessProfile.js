import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import FileBase from 'react-file-base64';

import classes from './businessProfile.css';

import { getBusinessAccount } from '../../../../../../../redux/actions/businessAuth';
import { updateBusinessAccount } from '../../../../../../../redux/actions/businessAuth';


const BusinessProfile = () => {

    const dispatch = useDispatch();
    const [businessData, setBusinessData] = useState(useSelector((state) => state.businessUser))
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        dispatch(getBusinessAccount(currentUser?.result?._id));
        setCurrentUser(JSON.parse(localStorage.getItem('profile')));
        dispatch(getBusinessAccount(currentUser?.result?._id));
    }, [])

    const [user, setUser] = useState(useSelector(state => state.businessUser));

    useEffect(() => {
        if (user) setBusinessData(user);
    }, [user, currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBusinessAccount(businessData._id, businessData));
        dispatch(getBusinessAccount(businessData?._id));
    }
    
    return (/*
        <div className={classes["profile-wrapper"]}>
            <div className={classes["user-profile"]}>
                <div className={classes["user-profile-details"]}>
                    <div className={classes["user-img"]}>
                        <img src={businessData?.information?.selectedFile} className={classes["profile-img"]}/>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setBusinessData({ ...businessData, information: {...businessData?.information, selectedFile: base64 }})} />
                    </div>

                    <div className={classes["user-basic-details"]}>
                        <div className={classes["user-basic-details-username"]}>
                            <p className={classes["user-name"]}>
                                {businessData?.information?.businessName}
                            </p>
                        </div>
                        <div className={classes["user-basic-details-userbio"]}>
                            <p className={classes["user-bio"]}>

                            </p>
                        </div>
                    </div>
                </div>

                <form className={classes["user-profile-cv"]} onSubmit={handleSubmit}>
                    <div className={classes["cv-column"]}>
                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>BUSINESS BIO</h1>
                            </div>
                            <div className={classes["cv-content"]}>
                                <textarea value={businessData?.information?.businessBio} name="biography" className={classes["cv-text-area"]} onChange={(e) => setBusinessData({ ...businessData, information: {...businessData?.information, businessBio: e.target.value }})} maxlength="320"/>
                            </div>
                        </div>

                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>MY EXPERIENCE</h1>
                            </div>
                            <div className={classes["cv-content"]}>
                                <textarea className={classes["cv-text-area"]} />
                            </div>
                        </div>
                    </div>

                    <div className={classes["cv-column"]}>
                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>MY EDUCATION</h1>
                            </div>
                            <div className={classes["cv-content"]}>
                                <textarea className={classes["cv-text-area"]}/>
                            </div>
                        </div>

                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>MY SKILLS</h1>
                            </div>
                            <div className={classes["cv-content"]}>
                                <textarea className={classes["cv-text-area"]}/>
                            </div>
                        </div>
                    </div>

                    <div className={classes["cv-column"]}>
                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>CONTACT DETAILS</h1>
                            </div>
                            <div className={classes["cv-content"]}>
                                <textarea className={classes["cv-text-area"]}/>
                            </div>
                        </div>

                        <div className={classes["cv-subcolumn"]}>
                            <div className={classes["cv-subcolumn-heading"]}>
                                <h1>OYT EXPERIENCE</h1>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className={classes["submit-btn"]}>Save</button>
                </form>
            </div>
        </div>*/

        <div className={classes["profile-wrapper"]}>
            <form className={classes["user-profile"]} onSubmit={handleSubmit}>
                <div className={classes["user-heading"]}>
                    <h1>{businessData?.information?.businessName}</h1>
                    <div className={classes["save-button"]}>
                        <button>Save Details</button>
                    </div>
                </div>
                <div className={classes["user-details"]}>
                    <div className={classes["user-details-2"]}>
                        <div className={classes["user-details-info"]}>
                            <textarea placeholder="Business Biography" value={businessData?.information?.businessBio} className={classes["textarea-bio"]} onChange={(e) => setBusinessData({ ...businessData, information: {...businessData?.information, businessBio: e.target.value }})} maxlength="320"/>
                            <textarea placeholder="Business Type" value={businessData?.information?.businessType} className={classes["textarea-type"]} onChange={(e) => setBusinessData({ ...businessData, information: {...businessData?.information, businessType: e.target.value }})} maxlength="50"/>
                        </div>
                        <div className={classes["user-details-img"]}>
                            <img src={businessData?.information?.selectedFile} />
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setBusinessData({ ...businessData, information: {...businessData?.information, selectedFile: base64 }})} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )


}

export default BusinessProfile;