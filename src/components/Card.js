// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { AiOutlinePlus } from "react-icons/ai";
// import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
// import { BiChevronDown } from "react-icons/bi";
// import { BsCheck } from "react-icons/bs";

//  export default React.memo(function Card({movieData}){ 
//   const [onHovered, setOnHovered] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <CardContainer
//       onMouseEnter={() => setOnHovered(true)}
//       onMouseLeave={() => setOnHovered(false)}
//     >
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
//         alt="movie poster"
//         onClick={() => navigate("/player")}
//       />
//       {onHovered && (
//         <div className="hover">
//           <div className="image-video-wrapper">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
//               alt="movie poster"
//               onClick={() => navigate("/player")}
//             />
//             <video
//               src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
//               autoPlay
//               loop
//               controls
//             />
//           </div>
//           <div className="info-container">
//             <h3 className="movieName" onClick={() => navigate("/player")}>
//              {movieData.name}
//             </h3>
//             <div className="icons">
//               <div className="controls">
//                 <IoPlayCircleSharp
//                   title="play"
//                   onClick={() => navigate("/player")}
//                 />
//                 <RiThumbUpFill title="like" />
//                 <RiThumbDownFill title="Dis like" />
//                 <BsCheck title="Remove from  List" />
//                 <AiOutlinePlus title="Add to my List" />
//               </div>
//               <div className="info">
//                 <BiChevronDown title="More Info" />
//               </div>
//             </div>
//             <div className="genres">
//               <ul>
//                 {movieData.genres.map((genre)=>{
//                  return <li>{genre}</li>
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </CardContainer>
//   );
// } );

// const CardContainer = styled.div`
//   margin-top: 1rem;
//   max-width: 230px;
//   width: 230px;
//   height: 100%;
//   cursor: pointer;
//   position: relative;


//   img {
//     border-radius: 0.2rem;
//     width: 100%;
//     height: 100%;
//     z-index: 10;

//   }
//   .hover {
//     z-index: 99;
//     height: max-content;
//     width: 20rem;
//     position: absolute;
//     top: -18vh;
//     left: 0;
//     border-radius: 0.2rem;
//     border: 0.1rem solid gray;
//     background-color: #181818;
//     transition: 0.3s ease-out;
//     .image-video-wrapper {
//       position: relative;
//       height: 140px;
//       img {
//         width: 100%;
//         height: 150px;
//         object-fit: cover;
//         border-radius: 0.3rem;
//         top: 0;
//         z-index: 4;
//         position: absolute;
//       }
//       video {
//         width: 100%;
//         height: 150px;
//         object-fit: cover;
//         border-radius: 0.3rem;
//         top: 0;
//         z-index: 4;
//         position: absolute;
//       }
//     }
//     .info-container {
//       display: flex;
//       flex-direction: column;
//       padding: 1rem;
//       gap: 0.5rem;
//       .movieName {
//         color: white;
//       }
//     }
//     .icons {
//       display: flex;
//       justify-content: space-between;
//       .controls {
//         display: flex;
//         gap: 0.5rem;
//       }

//       svg {
//         color: white;
//         border: 0.1rem solid white;
//         border-radius: 50%;
//         font-size: 1.5rem;
//         cursor: pointer;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: #b8b8b8;
//         }
//       }
//     }
//     .genres {
//       display: flex;
//       color: white;
//       ul {
//         display: flex;
//         gap: 1rem;
//         li {
//           padding-right: 0.7rem;
//           &:first-of-type {
//             list-style-type: none;
//           }
//         }
//       }
//     }
//   }
// `;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { AiOutlinePlus } from "react-icons/ai";
// import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
// import { BiChevronDown } from "react-icons/bi";
// import { BsCheck } from "react-icons/bs";

// export default React.memo(function Card({ movieData = {} }) {
//   const [onHovered, setOnHovered] = useState(false);
//   const navigate = useNavigate();

//   const imageUrl = movieData.image ? `https://image.tmdb.org/t/p/w500${movieData.image}` : "";
//   const movieName = movieData.name || "Unknown Title";
//   const genres = movieData.genres || [];

//   return (
//     <CardContainer
//       onMouseEnter={() => setOnHovered(true)}
//       onMouseLeave={() => setOnHovered(false)}
//     >
//       {imageUrl && (
//         <img
//           src={imageUrl}
//           alt="movie poster"
//           onClick={() => navigate("/player")}
//         />
//       )}
//       {onHovered && (
//         <div className="hover">
//           <div className="image-video-wrapper">
//             {imageUrl && (
//               <img
//                 src={imageUrl}
//                 alt="movie poster"
//                 onClick={() => navigate("/player")}
//               />
//             )}
//             <video
//               src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
//               autoPlay
//               loop
//               controls
//             />
//           </div>
//           <div className="info-container">
//             <h3 className="movieName" onClick={() => navigate("/player")}>
//               {movieName}
//             </h3>
//             <div className="icons">
//               <div className="controls">
//                 <IoPlayCircleSharp
//                   title="play"
//                   onClick={() => navigate("/player")}
//                 />
//                 <RiThumbUpFill title="like" />
//                 <RiThumbDownFill title="Dislike" />
//                 <BsCheck title="Remove from List" />
//                 <AiOutlinePlus title="Add to my List" />
//               </div>
//               <div className="info">
//                 <BiChevronDown title="More Info" />
//               </div>
//             </div>
//             <div className="genres">
//               <ul>
//                 {genres.map((genre, index) => (
//                   <li key={index}>{genre}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </CardContainer>
//   );
// });

// const CardContainer = styled.div`
//   margin-top: 2rem;
//   max-width: 430px;
//   width: 230px;
//   height: 200%;
//   cursor: pointer;
//   position: relative;

//   img {
//     border-radius: 0.9rem;
//     width: 100%;
//     height: 100%;
//     z-index: 10;
//   }
//   .hover {
//     z-index: 99;
//     height: max-content;
//     width: 20rem;
//     position: absolute;
//     top: -18vh;
//     left: 0;
//     border-radius: 0.2rem;
//     border: 0.1rem solid gray;
//     background-color: #181818;
//     transition: 0.3s ease-out;
//     .image-video-wrapper {
//       position: relative;
//       height: 140px;
//       img {
//         width: 100%;
//         height: 150px;
//         object-fit: cover;
//         border-radius: 0.3rem;
//         top: 0;
//         z-index: 4;
//         position: absolute;
//       }
//       video {
//         width: 100%;
//         height: 150px;
//         object-fit: cover;
//         border-radius: 0.3rem;
//         top: 0;
//         z-index: 4;
//         position: absolute;
//       }
//     }
//     .info-container {
//       display: flex;
//       flex-direction: column;
//       padding: 1rem;
//       gap: 0.5rem;
//       .movieName {
//         color: white;
//       }
//     }
//     .icons {
//       display: flex;
//       justify-content: space-between;
//       .controls {
//         display: flex;
//         gap: 0.5rem;
//       }

//       svg {
//         color: white;
//         border: 0.1rem solid white;
//         border-radius: 50%;
//         font-size: 1.5rem;
//         cursor: pointer;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           color: #b8b8b8;
//         }
//       }
//     }
//     .genres {
//       display: flex;
//       color: white;
//       ul {
//         display: flex;
//         gap: 1rem;
//         li {
//           padding-right: 0.7rem;
//           &:first-of-type {
//             list-style-type: none;
//           }
//         }
//       }
//     }
//   }
// `;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
//import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

export default React.memo(function Card({ movieData = {} }) {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();

  const imageUrl = movieData.image ? `https://image.tmdb.org/t/p/w500${movieData.image}` : "";
  const movieName = movieData.name || "Unknown Title";
  const genres = movieData.genres || [];

  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <div className="genres">
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="movie poster"
          onClick={() => navigate("/player")}
        />
      )}
      <div className="info-container">
        <h3 className="movieName" onClick={() => navigate("/player")}>
          {movieName}
        </h3>
        <div className="controls">
          <IoPlayCircleSharp
            title="play"
            onClick={() => navigate("/player")}
          />
          <RiThumbUpFill title="like" />
          <RiThumbDownFill title="Dislike" />
          <BsCheck title="Remove from List" />
          <AiOutlinePlus title="Add to my List" />
        </div>
      </div>
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="movie poster"
                onClick={() => navigate("/player")}
              />
            )}
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
            />
          </div>
        </div>
      )}
    </CardContainer>
  );
});

const CardContainer = styled.div`
  margin-top: 2rem;
  max-width: 600px;
  width: 300px;
  height: 400px;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 0.9rem;
    width: 100%;
    height: auto;
    z-index: 10;
  }

  .genres {
    display: flex;
    justify-content: center;
    color: white;
    margin-bottom: 0.5rem;

    ul {
      display: flex;
      gap: 1rem;

      li {
        padding-right: 0.7rem;
        list-style-type: none;
      }
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #181818;
    padding: 0.5rem;
    border-radius: 0 0 0.9rem 0.9rem;

    .movieName {
      color: white;
      cursor: pointer;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    .controls {
      display: flex;
      gap: 0.5rem;

      svg {
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #b8b8b8;
        }
      }
    }
  }

  .hover {
    z-index: 99;
    height: max-content;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out;

    .image-video-wrapper {
      position: relative;
      height: 140px;

      img, video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
  }
`;
