const api_key = 'd1ccf5c5be3ae317420330980f230032';

export default async function Auth(){
    const auth = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key}`);
    const resAuth = await auth.json();
    return resAuth;
}