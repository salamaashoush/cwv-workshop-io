import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // experimental: {
  //   renderBuiltUrl(filename, { type }) {
  //     if (type === "public" || filename.endsWith(".css") || filename.endsWith(".js")) {
  //       return "/" + filename
  //     } else {
  //       return "https://d2odhasnor359f.cloudfront.net/landing/" + filename
  //     }
  //   },
  // },
})
