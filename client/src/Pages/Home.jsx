// /* eslint-disable react/prop-types */
// import React, { useEffect, useState } from "react";
// export default function Home() {
//   const API_IMG = "https://image.tmdb.org/t/p/w500/";
//   const [movies, setMovies] = useState([]);
//   const API_URL =
//     "https://api.themoviedb.org/3/movie/popular?api_key=a4e8c01c242054960a1c99efdf9e33af";
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);
//         setMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);
//   return (
//     <div>
//       {movies.map((movieReq) => (
//         <div key={movieReq.id}>
//           <h1>{movieReq.title}</h1>
//           {movieReq.poster_path ? (
//             <img src={API_IMG + movieReq.poster_path} alt="image" />
//           ) : (
//             <p>No image available</p>
//           )}
//           <p>{movieReq.overview}</p>
//           <p>{movieReq.vote_average}</p>
//           <p>{movieReq.release_date}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
