"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const jeu = () => {

    const [number, setNumber] = useState(0)

    const Increment = () => {
        setNumber(number + 1)
    }


   const decrement = () => {
        setNumber(number - 1)
    }

    useEffect( () =>{
        return () =>{
            console.log('Le composant a été démonté')
        }        
    }
    ,[])


  return (
    <>
    <Link href="/cv">CV</Link>
    <div>{number}</div>
    <button onClick={() => Increment()}>Increment</button>
    <div></div>
    <button onClick={() => decrement()}>Decrement</button>
    </>
  )
}

export default jeu
