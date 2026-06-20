import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { MainRoutes } from './routes/Routes'

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <>
          <MainRoutes/>
        </>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
