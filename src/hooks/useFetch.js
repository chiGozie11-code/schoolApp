import { useState, useEffect} from 'react'

const useFetch = (url) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
      fetch(url)
      .then((res) => {
        if (!res.ok) {
            if (res.status === 400) {
                throw Error('Bad request')
            }else if(res.status === 404)
            {
                throw Error('Not found')
            }else{
                throw Error('Can not fetch data')
            }
        }
        setIsLoading(false)
        return res.json()
      })
    
      .then((data) => {
        setIsLoading(false)
        setError(false)
        setData(data)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err.message)
      })
      return () => abortCont.abort()
    }, [url])
    
  return {data, isLoading, error}
}

export default useFetch
