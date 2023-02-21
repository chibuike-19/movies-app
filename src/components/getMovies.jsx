import axios from 'axios'
import React from 'react'

const GetMovies = async(url, setError, setLoading) => {

    try {
        setLoading(true)
        const response = await axios(url);
        setLoading(false)
        return response.data;
    } catch (error) {
        console.log(error)
        setLoading(false)
        setError(error.message)
    }
  return (
    <div>

    </div>
  )
}

export default GetMovies

export const base_url = "https://api.themoviedb.org/3"