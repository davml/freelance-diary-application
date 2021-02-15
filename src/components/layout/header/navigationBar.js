import React, { useState } from 'react';

const NavigationBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [activeSession, setActiveSession] = useState(false);
    let displayContent;
    
    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }

    if(!activeSession) {
        displayContent = (
            <div className={classes.logo}>

            </div>
        )
    }
}