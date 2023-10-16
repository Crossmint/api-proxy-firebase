"use client"
import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import jwt from 'jsonwebtoken'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google'

const mono = Space_Mono({ subsets: ['latin'], weight: ["400"] })

const Home = () => {
  const [token, setToken] = useState('');
  const [tokenTree, setTokenTree] = useState('');

  useEffect(() => {
    const initializeFirebase = () => {
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: "crossmint-unity-demo.firebaseapp.com",
        databaseURL: "https://crossmint-unity-demo-default-rtdb.firebaseio.com",
        projectId: "crossmint-unity-demo",
        storageBucket: "crossmint-unity-demo.appspot.com",
        messagingSenderId: "767977857805",
        appId: "1:767977857805:web:c327a87ca6c35485748644"
      };

      const app = initializeApp(firebaseConfig);
    };

    initializeFirebase();
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user) {
        const idToken = await user.getIdToken();
        setToken(idToken);
      }

    } catch (error) {
      console.log('Error signing in:', error);
    }
  };
  
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setToken('');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  const decodeToken = () => {
    try {
      const decodedToken = jwt.decode(token);
      console.log('Decoded Token:', decodedToken);
      setTokenTree(JSON.stringify(decodedToken, null, 2));
    } catch (error) {
      console.log('Error decoding token:', error);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-4 p-4">
        <div className="sm:col-span-5 flex flex-col">
          {token ? (
            <>
              <button onClick={handleSignOut} className="w-full h-12 px-6 m-1 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Sign Out</button>
              <button onClick={decodeToken} className="w-full h-12 px-6 m-1 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Decode Token</button>
              <h2>Google Auth Token:</h2>
              <textarea className={`code ta ${mono.className}`}>{token}</textarea>
              <pre className={`code ${mono.className}`}>{tokenTree}</pre>
            </>
          ) : (
            <button onClick={handleSignIn} className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Sign In with Google</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home;