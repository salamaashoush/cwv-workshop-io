import { lazy, Suspense, useEffect, useState } from "react"
import { setGithubToken } from "../clients/github"

const STATUS = {
  INITIAL: "initial",
  LOADING: "loading",
  FINISHED_LOADING: "finished_loading",
  AUTHENTICATED: "authenticated",
}

const GATEKEEPER_URI = process.env.REACT_APP_GATEKEEPER_URI
const TOKEN = process.env.REACT_APP_TOKEN || localStorage.getItem("github_token")

const AppContainer = lazy(() => import("./AppContainer"))
const LoginScreen = lazy(() => import("./LoginScreen"))

const AuthWrapper = () => {
  const [status, setStatus] = useState(TOKEN ? STATUS.AUTHENTICATED : STATUS.INITIAL)

  // Poor man’s auth handling
  useEffect(() => {
    const storedToken = TOKEN
    if (storedToken) {
      setGithubToken(storedToken)
      setStatus(STATUS.AUTHENTICATED)
      return
    }

    const code = new URL(window.location.href).searchParams.get("code")

    if (code) {
      setStatus(STATUS.LOADING)

      fetch(`${GATEKEEPER_URI}${code}`)
        .then((response) => response.json())
        .then(({ token, error }) => {
          if (error) throw new Error(error)
          localStorage.setItem("github_token", token)
          setGithubToken(token)
          setStatus(STATUS.FINISHED_LOADING)
        })
    }
  }, [])

  return (
    <section>
      <Suspense fallback="Loading.....">
        {status === STATUS.AUTHENTICATED ? (
          <AppContainer />
        ) : (
          <header>
            <LoginScreen />
          </header>
        )}
      </Suspense>
    </section>
  )
}

export default AuthWrapper
