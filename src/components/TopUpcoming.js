import React, { useState, useEffect } from 'react'
const axios = require('axios')
function TopAiring() {

    const [TopAiring, setTopAiring] = useState([]);
    useEffect(() => {
        axios.get("https://api.jikan.moe/v3/top/anime/1/upcoming")
            .then(res => setTopAiring(res.data.top.slice(0, 12)))
            .catch(err => console.error(err))
    }, []);

    let list = TopAiring ? (
        TopAiring.map(item => {
            return (
                <div className="card-topAiring" key={item.mal_id}>
                    <img src={item.image_url} alt={item.title} className="image-topAiring" />
                    <span className="card-epi-type">
                        <p className="anime-type">{item.type}</p>
                        <p className="anime-episodes">{item.episodes ?
                            `EP ${item.episodes}`
                            :
                            <>N/A</>
                        }
                        </p>
                    </span>

                    <p>{item.title}</p>

                </div>
            )
        })
    ) : (<p>Loading..</p>)
    return (
        <>
            <div className="title-topAiring">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" className="icon-calender" style={{ enableBackground: "new 0 0 512 512" }} >
                    <path d="M452,40h-24V0h-40v40H124V0H84v40H60C26.916,40,0,66.916,0,100v352c0,33.084,26.916,60,60,60h392
			c33.084,0,60-26.916,60-60V100C512,66.916,485.084,40,452,40z M472,452c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V188
			h432V452z M472,148H40v-48c0-11.028,8.972-20,20-20h24v40h40V80h264v40h40V80h24c11.028,0,20,8.972,20,20V148z"/>

                </svg>
                <h3 className="topAiring">Top Upcoming</h3>
                <a className="more-topAiring" href="#">show all</a>
            </div >
            <div className="Grid-topAiring">
                {list}
            </div>
        </>
    )
}

export default TopAiring
