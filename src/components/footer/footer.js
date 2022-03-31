import React from "react"
import "./footer.css"

const Footer = () => {
    return (

<footer>
    <div className="footer-spotify">   
    <div className="spotify">
        <p className="footer-title">Designed and Built by Desk 4</p>
        <p className="footer-title2">Powered By Spotify</p>
    </div>
    <a id="link-to-spotify" href="https://www.spotify.com/uk/"> <img src="./images/spotifylogo.png" alt="Spotify logo"/></a>
    </div>
    <div className="github">
    <p id="link-to-team-githubs">If you like this site you can see more of our work on GitHub</p>
    <ul className="footer-list">
        <li className="footer-item">
            <a href="https://github.com/APerezBanks"> <img src="./images/awesome_Alex.jpeg" alt="Link to Alex Perez Banks GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/Volandis"> <img src="./images/cartoon_robot.jpg" alt="Link to Jamie Heywood GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/LittleManc"> <img src="./images/jstewartprofilepic-1.jpg" alt="Link to Jessica Stewart GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/maryoud2000"> <img src="./images/osama.jpg" alt="Link to Osama Elhaj GitHub profile"/> </a>
                </li>
        <li className="footer-item">
            <a href="https://github.com/riggage"> <img src="./images/tomr.jpg" alt="Link to Tom Rigg GitHub profile"/> </a>
                </li>
        <li className="footer-item">
            <a href="https://github.com/zian-javed"> <img src="./images/zian.jpg" alt="Link to Zian Javed GitHub profile"/> </a>
                </li>
    </ul>
    </div>
</footer>
)}

export default Footer