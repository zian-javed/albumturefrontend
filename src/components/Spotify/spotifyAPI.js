import React, { useState, useEffect } from "react";
import axios from "axios";
import "./spotifyStyle.css"




const Spotify = () => {
    const CLIENT_ID = "0af314e7a1b2419f91d7cd48e6a05a52";
    // const clientSecret = "1cf3bfcdd3934969afacab8ddaa3a663";
    const REDIRECT_URI = "http://localhost:3000/addToListPage"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey]= useState("")
    const [ albums, setAlbums] = useState([])
    // const [ genres, setGenre] = useState([])


    

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


///////////////////////////Search by Artist///////////////////////////
    const searchAlbums = async (e) =>{
    
        const {data} = await axios.get("https://api.spotify.com/v1/search?limit=5", {
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

            <div className="albumcover" key={album.id}>
                {album.images.length ? <img id="image"  src= {album.images[0].url} alt=""/> 
                : 
                <p> No Cover Image </p> }
                {/* Styling Button */}
                    <div className="box2" >  
                         {/* <p>{album.name} </p> */}
                         {/* <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">Open in Spotify</a> */}
                         {/* <button> Add to Collection</button> */}
                    </div>
            </div>
            
        ))
    }







    const Dropdown = () => {
        // const [selectedValue, setSelectedValue] = useState('');
    
        const dataValue = [
            {value: 1, name: 'Search by Artist'}
            // {value: 2, name: 'Search by Playlist'},
        ];
    return (
        <div>
            <select>
            {dataValue.map( (item, idx) => <option key={idx} value={item.value}> {item.name}</option>)}
            </select>
            {/* <p>{selectedValue}</p> */}
        </div>
    )
    
    }





return(
    <div className="pagewrap">
        {/* <h1>Spotify React</h1> */}
        {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}> Login to Spotify </a>
        : 
        <button id="logoutButton" onClick={logout}>Logout from Spotify</button>}

        {Dropdown()}

        {token ?
        <form id="spotifyForm" className="SpotifyForm" onSubmit={searchAlbums}>
            <input type="text" placeholder="Let's find your album.." onChange={((e) => setSearchKey(e.target.value))}   />
            
            <button id="searchButton" type={"submit"}> Search </button>
        </form>    
        : 
        <h2>Please login</h2>
    }

        {renderAlbums()}
        {/* {renderGenre()} */}
    </div>
)
}
export default Spotify;






///////////////////////////Search by Playlist///////////////////////////

    // const searchGenre = async (e) =>{
    
    //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "playlist"
    //         }
    //     })
    //     console.log(data)
    //     setGenre(data.playlists.items)

    // }

    // const renderGenre = () => {
    //     return genres.map(playlist => (
    //         <div key={playlist.id}>
    //             {playlist.images.length ? <img width={"25%"} src= {playlist.images[0].url} alt=""/> : <div> No Cover Image </div> }
    //         {playlist.name}
    //         </div>
    //     ))
    // }
