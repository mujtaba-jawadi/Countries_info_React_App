import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <h1>Oops! A {error.status} error occurred</h1>
      <h3>{error && error.data }</h3>
      <NavLink to="/"><button>Go to Home Page</button></NavLink>
    </>
  )
}
