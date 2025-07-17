'use client'

import { getContactForm } from '@/api/api'
import React, { useEffect } from 'react'

const Feedback = () => {
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await getContactForm()
                console.log(response) 
            } catch (error) {
                console.error("Error Fetching data",error)
            }
        }
        fetchData()
    },[])
  return (
    <div>Feedback</div>
  )
}

export default Feedback