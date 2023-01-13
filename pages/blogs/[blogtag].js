import React from 'react'
import { useRouter } from "next/router"
const blogtag = () => {

    const router = useRouter()
    console.log(router.query)
    return (
        <div>{router.query.blogtag}</div>
    )
}

export default blogtag