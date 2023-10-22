import axios from 'axios'
import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)

    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsFetching(false);
      }
    };

  return {data, error, isFetching, fetchData}
}