import { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "./logo2.png";

function Biores() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const ca125 = query.get('ca125');
  const he4 = query.get('he4');
  const ca199 = query.get('ca199');

  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchResult = async () => {
      if (ca125 && he4 && ca199) {
        try {
          const response = await fetch(`https://ovariancancerdetection.azurewebsites.net/api/biomarkers?x=${ca125}&y=${he4}&z=${ca199}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const resultText = await response.text();
          setResult(resultText);
          
        } catch (error) {
          console.error('Error fetching result:', error);
          setResult('Error fetching result');
        }
      } else {
        setResult('Invalid input values');
      }
    };

    fetchResult();
  }, [ca125, he4, ca199]);

  return (
    <Card className="w-[350px]">
       <img src={logo} alt="Logo" className="logo" />
      <CardHeader>
        <CardTitle>Result</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{result}</p>
      </CardContent><div className='flex justify-center'>
      <Button><Link to="/">Back</Link></Button></div>
    </Card>
  );
}

export default Biores;
