import React, { useState, useEffect } from 'react'
const axios = require('axios');


function Carousel() {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
                .then(res => setData(res.data.top.slice(0, 1)))
                .then(() => setLoading(false))
                .catch(err => console.error(err))


        }

        fetchData()
    }, [])


    let list = Loading ? (<div className="card"><p className="loading">Loading...</p></div>)
        : (
            Data.map((item) => {
                let members;
                if (item.members > 1000) {
                    members = item.members.toString().slice(0, 3) + 'k';

                }
                return <div className="card" key={item.mal_id}>
                    <img className="img" src={item.image_url} alt={item.image_url} />
                    <div className="card-details">
                        <h4 className="title">{item.title}</h4>
                        <p className="members">Memebers &nbsp;<span className="member-number">{members}</span></p>
                        <p className="episodes">Episodes &nbsp;{item.episodes}</p>
                        <p className="score">{item.score}</p>
                        <p className="type">{item.type}</p>
                    </div>

                </div>
            })
        )
    console.log(Data);
    return (
        <>
            {list}
        </>
    )
}

export default Carousel
