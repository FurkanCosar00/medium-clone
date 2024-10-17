"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import { login, signup } from './actions';
import Modal from '@/components/user/Login Page/Modal';

export default function LoginPage() {
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header>
        <h1>Medium</h1>
        
        <ul>
          <li><Link href="/our-story">Our Story</Link></li>
          <li><Link href="/membership">Membership</Link></li>
          <li><button onClick={toggleModal}>Write</button></li>
          <li><button onClick={toggleModal}>Sign in</button></li>
        </ul>
      </header>

      <div className="container">
        <div className="login-page-texts">
          <h1>Human stories & ideas</h1>
          <p>A place to read, write, and deepen your understanding</p>
        </div>

        <button onClick={toggleModal}>Start reading</button>
      </div>
      
      <Modal show={showModal} onClose={toggleModal}>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </form>
      </Modal>
    </>
  )
}