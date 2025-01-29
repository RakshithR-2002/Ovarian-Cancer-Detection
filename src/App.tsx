
import "./App.css"
import { Link } from 'react-router-dom'
import { Button } from './components/ui/button'
import { cn } from './lib/utils'
import logo from "./logo2.png"
function App() {
  
  return (
    <main >
    <div className="space-y-6 text-center">
    <img src={logo} alt="Logo" className="logo" />
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md")}>
       Ovarian Cancer Detection
      </h1>
      <p className="text-white text-lg">Choose between biomarkers or histopathological images</p>
      <div className="button-group">
       
        <Button variant="secondary" size="lg"><Link to="/biomarkers">
          Biomarkers
          </Link>
        </Button>
        <Button variant="secondary"  size="lg"><Link to="/histopatho">
          Images
          </Link>
        </Button>

       
      </div>
    </div>
    </main>
  )
}

export default App
