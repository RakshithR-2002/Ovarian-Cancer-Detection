import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import logo from "./logo2.png";

   
    

function Histopatho()  {
  return (
    
  
    <Card className="w-[450px]">
       <img src={logo} alt="Logo" className="logo" />
    <CardHeader>
      <CardTitle>Histopathological Images</CardTitle>
      <CardDescription>Choose the type of detection you want to see </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
      <div className="button-group">
       
        <Button><Link to="/mitosis">Mitosis</Link>  </Button>
        <Button> <Link to="/pleo">Nuclear Pleomorphism</Link></Button>
        <Button> <Link to="/infil">Infiltration</Link> </Button>
      
       </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-center">
        <Button><Link to ="/">Back</Link></Button>
        
      </CardFooter>
  </Card>
      
    
    
  )
}

export default Histopatho