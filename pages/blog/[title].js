import React from 'react'
import { useRouter } from "next/router"

const title = () => {
    const router = useRouter()
    return (
        <div>{router.query.title}</div>
    )
}

export default title