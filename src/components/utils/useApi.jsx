import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
        .get(url)
        .then((res) => res.data)
        .then((json) => {
            setData(json)
            setIsLoading(false)
    })
    },[url])

    return [isLoading, data]
}

export default useApi