"use client"

import Link from 'next/link'
import "./auth.css";
import React, { useState } from 'react';
import Modal from '@/components/user/Login Page/Modal';
import LoginForm from './loginform';
import SignupForm from './signupform';

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);
  const [signOrLogin, setSignOrLogin] = useState("login");
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
      <div className="login-page">
        <div className="container">
          <header>
            <h1>Medium</h1>
            
            <ul className='navigation'>
              <li><Link href="/our-story">Our Story</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><button onClick={toggleModal}>Write</button></li>
              <li><button onClick={toggleModal}>Sign in</button></li>
            </ul>

            <button className='get-started' onClick={toggleModal}>Get Started</button>
          </header>

          <div className="texts">
            <h1>Human stories & ideas</h1>
            <p>A place to read, write, and deepen your understanding</p>

            <button onClick={toggleModal}>Start reading</button>
          </div>
        </div>

        <Modal show={showModal} onClose={toggleModal}>
          {signOrLogin === "login" ? <LoginForm /> : <SignupForm />}

          {signOrLogin === "login" ?
            <div className="nav-item">
              <p>No account?</p>
              <button onClick={() => setSignOrLogin("signup")}>Create one</button>
            </div>
            :
            <div className="nav-item">
              <p>Already have an account?</p>
              <button onClick={() => setSignOrLogin("login")}>Sign in</button>          
            </div>
          }

          <small>Click “Sign up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</small>
        </Modal>

        <footer>
          <ul>
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </footer>
      </div>
  )
}