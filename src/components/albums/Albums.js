import React, {useEffect, useState} from 'react';

import {albumService} from "../../services/album.service";
import Album from "../album/Album";
import './Albums.css';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumService.getAll().then(value => value.data).then(value => setAlbums([...value]))
    },[albums])

    return (
        <div className={'Albums'}>
            {
                albums.map(album=><Album key={album.id} album={album}/> )
            }
        </div>
    );
};

export default Albums;