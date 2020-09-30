import React from 'react'

function About() {
    return (
        <div className="about-container">
            <div className="title-topAiring">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" className="icon about-icon" style={{ enableBackground: "new 0 0 512 512" }} >
                    <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z
		 M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"/>
                    <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991
		c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"/>
                    <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z
		"/>
                </svg>
                <h3 className="about topAiring">About</h3>
            </div>
            <div className="about-info">
                <h2 className="Logo">Logo</h2>
                <table className="about-table">
                    <tr>
                        <th>Legal</th>
                        <th>Account</th>
                        <th>Newsletter</th>
                    </tr>
                    <tr>
                        <td>Terms of use</td>
                        <td>My Account</td>
                        <td>Subscribe</td>
                    </tr>
                    <tr>
                        <td>Privacy Policy</td>
                        <td>Watchlist</td>
                        <td>Get latest news</td>
                    </tr>
                    <tr>
                        <td>Security</td>
                        <td>Collections</td>

                    </tr>
                </table>
            </div>
            <p className="copyright">&copy; 2020 AnimeGen. All rights reserved</p>
        </div>
    )
}

export default About
