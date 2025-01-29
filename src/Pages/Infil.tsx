import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";
import logo from "./logo2.png";

function Infil() {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBase64Image(base64String);
        console.log(base64String); // Print the base64 string to the console
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-[450px]">
      <img src={logo} alt="Logo" className="logo" />
      <CardHeader>
        <CardTitle>Histopathological Images</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload the tile in which you want to detect Infiltration</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button><Link to="/histopatho">Back</Link></Button>
        <Button><Link to="/infilres">Submit</Link></Button>
      </CardFooter>
    </Card>
  );
}

export default Infil;
