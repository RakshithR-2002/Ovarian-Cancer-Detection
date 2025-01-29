import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"
import logo from "./logo2.png";


function infilres(){
  return (
    <Card className="w-[450px]">
       <img src={logo} alt="Logo" className="logo" />
    <CardHeader>
      <CardTitle>Histopathological Images</CardTitle>
      
    </CardHeader>
    <CardContent>
      <form>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
        <Button><Link to ="/histopatho">Back</Link></Button>
        
      </CardFooter>
    
  </Card>
  )
}

export default infilres