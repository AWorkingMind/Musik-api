// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = ({ token }) => {
    const [topArtists, setTopArtists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artistsResponse = await axios.get('https://api.spotify.com/v1/me/top/artists', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const tracksResponse = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setTopArtists(artistsResponse.data.items);
                setTopTracks(tracksResponse.data.items);
            } catch (error) {
                console.error('Error fetching data from Spotify API', error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className="container">
            <h1 className="my-5">Dashboard</h1>
            <div className="row">
                <div className="col">
                    <h2>Top Artists</h2>
                    <div className="row">
                        {topArtists.map(artist => (
                            <div key={artist.id} className="col-md-4 col-6 mb-4">
                                <div className="card">
                                    <img src={artist.images[0]?.url} className="card-img-top" alt={artist.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{artist.name}</h5>
                                        <p className="card-text">{artist.genres.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>Top Tracks</h2>
                    <div className="row">
                        {topTracks.map(track => (
                            <div key={track.id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={track.album.images[0]?.url} className="card-img-top" alt={track.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{track.name}</h5>
                                        <p className="card-text">{track.artists.map(artist => artist.name).join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;