import React, { useState, useEffect } from "react";

import axios from "axios";

const Spotify = () => {
    const CLIENT_ID = "0af314e7a1b2419f91d7cd48e6a05a52";
    // const clientSecret = "1cf3bfcdd3934969afacab8ddaa3a663";
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey]= useState("")
    const [ albums, setAlbums] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash){
            token= hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
    
    }, []);

    const logout = () =>{
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchAlbums = async (e) =>{
    
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "album"
            }
        })
        console.log(data)
        setAlbums(data.albums.items)

    }

    const renderAlbums = () => {
        return albums.map(album => (
            <div key={album.id}>
                {album.images.length ? <img width={"25%"} src= {album.images[0].url} alt=""/> : <div> No Cover Image </div> }
            {album.name}
            </div>
        ))
    }

    
return(
    <div>
        <h1>Spotify React</h1>
        {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Login to Spotify </a>
        : <button onClick={logout}>Logout</button>}

        {token ?
        <form onSubmit={searchAlbums}>
            <input type="text" onChange={((e) => setSearchKey(e.target.value))}   />
            <button type={"submit"}> Search </button>
        </form>    
        : <h2>Please login</h2>
    }

        {renderAlbums()}
    </div>
)
}
export default Spotify;
























    // const data = [
    //     {value: 1, name: 'Song 1'},
    //     {value: 2, name: 'Song 2'},
    //     {value: 3, name: 'Song 3'},
    // ];

    // console.log("1")

    // const [token, setToken] = useState("");

    // useEffect(()=> {

    //     axios('https://accounts.spotify.com/api/token', {
    //         headers: {
    //             'Content-Type' : 'application/x-www-form-urlencoded',
    //             'Authorization' : 'Basic ' + btoa(clientID + ':' + clientSecret)
    //         },
    //         body: 'grant_type=client_credentials',
    //         method: 'POST'
    //     })
    //     .then (tokenResponse => {
    //         console.log(tokenResponse.data.access.token);
    //         setToken(tokenResponse.data.access_token);
    //     })
        
    // }, []);

    // console.log("2")



    // return(
    //     <form onSubmit={() =>{}}>
    //     <>
    //     <Dropdown options={data}/>
    //     <Dropdown options={data}/>
    //     <button type="sumbit"> Search</button>
    //     </>
    //     </form>
    // )