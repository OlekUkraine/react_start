import React, {useEffect, useState} from 'react';
import axios from "axios";
import Launch from "../launch/Launch";
import './Launches.css';

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => {
            const pastFilter = value.filter(item => item.launch_year === '2020');
            setLaunches(pastFilter);
        });
    }, [])

    return (
        <div className={'list-launches'}>
            {
                launches.map((launch, index) => <Launch launch={launch} key={index}/>)
            }
        </div>
    );
};

export default Launches;