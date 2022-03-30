import React from "react"
import "./footer.css"

const Footer = () => {
    return (

<footer>
    <div class="footer-spotify">
    <h3 id="footer-title">Designed and Built by Desk 4, Powered By Spotify</h3>
    <a id="link-to-spotify" href="https://www.spotify.com/uk/"> <img src="./images/spotifylogo.png" alt="Spotify logo"/></a>
    </div>
    <div class="github">
    <h3 id="link-to-team-githubs">If you like this site you can see more of our work on GitHub</h3>
    <ul className="footer-list">
        <li className="footer-item">
            <a href="https://github.com/APerezBanks"> <img src="./images/githublogo.png" alt="Link to Alex Perez Banks GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/Volandis"> <img src="./images/cartoon_robot.jpg" alt="Link to Jamie Heywood GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/LittleManc"> <img src="./images/jstewartprofilepic-1.jpg" alt="Link to Jessica Stewart GitHub profile"/> </a>
        </li>
        <li className="footer-item">
            <a href="https://github.com/maryoud2000"> <img src="./images/githublogo.png" alt="Link to Osama Elhaj GitHub profile"/> </a>
                </li>
        <li className="footer-item">
            <a href="https://github.com/riggage"> <img src="./images/githublogo.png" alt="Link to Tom Rigg GitHub profile"/> </a>
                </li>
        <li className="footer-item">
            <a href="https://github.com/zian-javed"> <img src="./images/githublogo.png" alt="Link to Zian Javed GitHub profile"/> </a>
                </li>
    </ul>
    </div>
</footer>
)}

export default Footer