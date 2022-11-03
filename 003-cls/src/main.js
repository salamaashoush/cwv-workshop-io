import { ViteSSG } from "vite-ssg"
import "./style.css"
import App from "./App.vue"
import Home from "./routes/Home.vue"
import Houses from "./routes/Houses.vue"
import "@fontsource/yanone-kaffeesatz"

const routes = [
  { path: "/", component: Home },
  { path: "/houses", component: Houses },
]

export const createApp = ViteSSG(App, { routes })
