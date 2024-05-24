// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import TopNav from "../components/TopNav";
// import Card from "../components/Card";
// import { fetchMovies, getGenres } from "../store";
// import SliderContainer from "../components/SliderContainer";

// const Netflix = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navigate = useNavigate();

//   const movies = useSelector((state)=> state.netflix.movies)
//   const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

//   const dispatch = useDispatch();

//   useEffect(() => {
//             // eslint-disable-next-line react-hooks/exhaustive-deps

//     dispatch(getGenres());

//   }, [dispatch]);

//   useEffect(() => {
//         if(generesLoaded){
//           dispatch(fetchMovies({type: "all"}))
//         }
//   });

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//    console.log(movies)

//   return (
//     <HeroContainer>
//       <div className="hero">
//         <TopNav isScrolled={isScrolled} />
//         <img
//           className="background-image"
//           src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
//           alt="hero im"
//         />
//         <div className="container">
//           <div className="title">
//             <h1>Super man</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
//               tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrum exercitationem ullam corporis suscipit
//               laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
//               iure reprehenderit in voluptate velit esse cillum dolore eu
//             </p>
//           </div>
//           <div className="buttons">
//             <button onClick={() => navigate("/player")} className="playBtn">
//               Play
//             </button>
//             <button className="moreBtn">More</button>
//           </div>
//         </div>
//       </div>
//       <div className="cards-container">
//         {movies.map((movie) => (
//           <Card key={movie.id} movieData={movie} /> 
//         ))}
//       </div>
//      <SliderContainer movies={movies}/>
//     </HeroContainer>
//   );
// };

// const HeroContainer = styled.div`
//   .hero {
//     position: relative;
//     .background-image {
//       filter: brightness(40%);
//     }
//     img {
//       height: 70vh;
//       width: 100%;
//     }
//     .container {
//       position: absolute;
//       bottom: 1rem;
//       .title {
//         h1 {
//           margin-left: 5rem;
//           text-transform: uppercase;
//           font-size: 73px;
//           background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         p {
//           margin-bottom: -50px;
//           width: 640px;
//           margin-left: 5rem;
//           font-family: "lexend Deca", sans-serif;
//           color: white;
//         }
//       }
//       .buttons {
//         display: flex;
//         margin: 5rem;
//         gap: 2rem;
//       }

//       .playBtn {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: red;
//         border-radius: 1rem;
//         font-size: 1.4rem;
//         gap: 1rem;
//         padding: 0.9rem;
//         padding-left: 2rem;
//         padding-right: 2.4rem;
//         border: none;
//         cursor: pointer;
//       }
//       .moreBtn {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         color: white;
//         background-color: black;
//         border-radius: 1rem;
//         font-size: 1.4rem;
//         gap: 1rem;
//         padding: 0.9rem;
//         padding-left: 2rem;
//         padding-right: 2.4rem;
//         border: 0.1rem solid white;
//         cursor: pointer;
//       }
//     }
//   }
// `;

// export default Netflix;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";
//import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Body = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const movies = useSelector((state) => state.netflix.movies);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const moviesLoaded = movies.length > 0; // Check if movies are already loaded

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded && !moviesLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }, [genresLoaded, moviesLoaded, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(movies);

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="hero e"
        />
        <div className="container">
          <div className="title">
            <h1>Super man</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
    
      <SliderContainer movies={movies} />
      
    </HeroContainer>
    
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }

  // .cards-container {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   gap: 1rem;
  //   padding: 2rem;
  // }
`;

export default Body;
