
  import React, { useState, useEffect } from 'react';
  import styled from 'styled-components';
  import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
  import { firebaseAuth } from '../utils/firebase-config';
  import { useNavigate } from 'react-router-dom';
  import BackgroundImage from '../components/BackgroundImage'
  import Header from '../components/Header'
  
  const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) {
          navigate('/login');
        }
      });
      return () => unsubscribe();
    }, [navigate]);
  
    const handleSignIn = async () => {
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className='content'>
        <Header login={true} />
        <div className='body'>
          <div className='text'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>Ready to Watch? Enter your email to create or restart membership</h6>
          </div>
          <div className='form'>
            {showPassword ? (
              <input
                type='password'
                placeholder='password'
                name='password'
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type='email'
                placeholder='email address'
                name='email'
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;

    .body {
      display: flex;
      gap: 3rem;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;
      height: 100%;

      .text {
        max-width: 35rem;

        h1 {
          font-size: 3rem;
          color:white;
        }

        h4 {
          margin: 1rem 0;
          font-size: 1.5rem;
          color:white;
        }

        h6 {
          font-size: 1rem;
          color: #757575;
          margin-bottom: 2rem;
        }
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
          height: 3rem;
          width: 30rem;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: white;
          color: black;
          border: none;
          border-radius: 0.2rem;
          outline: none;
        }

        button {
          height: 3rem;
          width: 30rem;
          background-color:#23013f ;
          box-shadow: 0 0 0.2rem white; /* Adjust the size of the shadow as needed */
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          border-radius: 0.2rem;
          cursor: pointer;
          transition: 0.3s ease-in-out;

          &:hover {
            background-color: #000000;
          }
        }
      }
    }
  }

  ${({ showPassword }) =>
    showPassword &&
    `
    .content {
      .body {
        .form {
          input {
            width: 30rem;
          }

          button {
            background-color: #e50914;
            &:hover {
              background-color: #ff0a16;
            }
          }
        }
      }
    }
  `}
`;

export default SignUpPage;
