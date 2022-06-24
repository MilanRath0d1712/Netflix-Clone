import React from 'react';
import Row from './Row';
import requests from "./request";
import Banner from "./Banner";
import Nav from './Nav';

const Home = () => {

  return (
    <>
    <Nav/>
    {/*Banner*/}
    <Banner/>
     <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
     />
     {/* Fetching Movies As Per Request*/}
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>  
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>  
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/></>
  )
}

export default Home