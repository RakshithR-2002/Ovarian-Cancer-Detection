import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo2.png";
function Biomarkers() {
  const [ca125, setCa125] = useState("");
  const [he4, setHe4] = useState("");
  const [ca199, setCa199] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    navigate(`/biores?ca125=${ca125}&he4=${he4}&ca199=${ca199}`);
  };

  return (
    
    <Card className="w-[350px]">
      <img src={logo} alt="Logo" className="logo" />
      <CardHeader>
        <CardTitle>Biomarkers</CardTitle>
        <CardDescription>Enter the values of CA125, HE4, CA19-9</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ca125">CA-125</Label>
              <Input id="ca125" placeholder="ca125 values" value={ca125} onChange={e => setCa125(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="he4">HE-4</Label>
              <Input id="he4" placeholder="he4 values" value={he4} onChange={e => setHe4(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="ca199">CA-19-9</Label>
              <Input id="ca199" placeholder="ca19-9 values" value={ca199} onChange={e => setCa199(e.target.value)} />
            </div>
          </div>
         <div className="button-group  flex flex-row space-y-4 space-x-4"> 
         <Button><Link to="/">Back</Link></Button>
        <Button type="submit">Submit</Button>
         </div>
        </form>
      </CardContent>
      
    </Card>
  );
}

export default Biomarkers;
