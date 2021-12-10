import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css'
import {Link} from 'react-router-dom'

function Home() {
    const [moviesData, setMoviesData] = useState([])
    useEffect(() => {
        axios.post('https://hoblist.com/api/movieList', { category: "movies", language: "kannada", genre: "all", sort: "voting" }).then(res => setMoviesData(res.data.result))
    }, [])
    console.log(moviesData)
    return (
        <>
            <div className="info"><Link to="/info"><button>Company Info</button></Link></div>

            {moviesData.map((item, index) => {
                return <div className="container" key={item + index}>
                    <div className="main">
                        <div className="vote">
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="10.033" height="5"><path d="m5.016 0-2.51 2.5L0 4.999 5.016 5l5.017-.001L7.525 2.5 5.016 0z"/></svg></div>
                            <div>{item.totalVoted}</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg></div>
                            <div>Votes</div>
                        </div>
                        <div className="photo"><img className="poster" src={item.poster} /></div>
                        <div className="desc">
                        <div className="title">{item.title}</div>
                            <div>Genre: {item.genre}</div>
                            <div>Director: {item.director[0]}</div>
                            <div>Starring: {item.stars[0]}</div>
                            <div>{item.language}</div>
                            <div className="viewvote">{item.pageViews} views | Voted by {item.totalVoted} People</div>
                        </div>
                    </div>
                    <div className="btn"><button>Watch Trailer</button></div>
                </div>
            })}
        </>
    )
}
export default Home