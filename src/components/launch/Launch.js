import React from 'react';
import './Launch.css';

const Launch = ({launch}) => {
    const {launch_year, mission_name, links} = launch;

    return (
        <div className={'launch-block'}>
            <div>launch_year:{launch_year}</div>
            <div>mission_name:{mission_name}</div>
            <img src={links.mission_patch_small} alt={mission_name}></img>
        </div>
    );
};

export default Launch;