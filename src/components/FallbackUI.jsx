import React from 'react'
import {useRouteError} from "react-router-dom"

const FallbackUI= () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div>
        <h1>Oops!</h1>
        <h2>We ran into an error</h2>
        <h3>Error Status code is {err.status}</h3>
        <h4>{err.data}</h4>
        </div>
  )
}

export default FallbackUI