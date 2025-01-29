import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo2.png";

function Pleores() {
  const location = useLocation();
  const { imageUrl } = location.state || { imageUrl: null };

  return (
    <Card className="w-[850px] ">
      <img src={logo} alt="Logo" className="logo" />
      <CardHeader>
        <CardTitle>Mitosis</CardTitle>
      </CardHeader>
      <CardContent>
        {imageUrl ? (
          <img src={imageUrl} alt="Processed Result" />
        ) : (
          <p>No image to display</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button><Link to="/histopatho">Back</Link></Button>
      </CardFooter>
    </Card>
  );
}

export default Pleores;
