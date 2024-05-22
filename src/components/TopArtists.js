import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopArtists = ({ token }) => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => {
                setArtists(response.data.items);
            })
            .catch(error => {
                console.error('Error fetching top artists', error);
            });
    }, [token]);

    return (
        <div>
            <h1>Your Top Artists</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TopArtists;