const clientId = 'fb3c112843814e5996f265fad3d76cd5';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [
    'user-top-read',
    'playlist-read-private',
];

export const login = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes.join('%20')}`;
    window.location = authUrl;
};

export const handleCallback = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
    window.localStorage.setItem('token', token);
    window.location.hash = '';
    window.location = '/';
};