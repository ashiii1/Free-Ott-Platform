import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
  const navigate = useNavigate()
  return (
   <HeaderContainer>
     <div className='logo'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxe5_DpdoGNWA_rw6QX3UuSm6DLKrp7HbMhBHsPMO707MOAAp8wHy7T-tM9OzNW02gTyA&usqp=CAU"
      alt='no internet connection'
      />
      <span className='company'>Stream</span>
     </div>
     <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
      {props.login ? 'Log In ' : 'Sign In'}
     </button>
   </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   img{
    margin-left: 10px;
    width: 5rem;
    height: 3.5rem;
    box-shadow: 0 0 0.2rem white; /* Adjust the size of the shadow as needed */

    }
    button{
      padding: 0.5rem 1rem;
      background-color: white ;
    
      border: none;
      cursor: pointer;
      color: black;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.05rem;
    }
    .company {
  font-size: 28px; /* Adjust the font size as needed */
  font-weight: bold; /* Make the text bold if desired */
  color: #23013f; /* Dark violet color */
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5), 
             -1px -1px 0 rgba(255, 255, 255, 0.5), 
              1px -1px 0 rgba(255, 255, 255, 0.5), 
             -1px 1px 0 rgba(255, 255, 255, 0.5);
  margin-left:15px;/* Adjust the color as needed */
}
`

export default Header