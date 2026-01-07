import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "~/App"
import { Provider } from "~/provider"
import { NavBar } from "~/components/navbar"
import { Footer } from "~/components/footer"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <NavBar />
      <App />
      <Footer />
    </Provider>
  </StrictMode>,
)
