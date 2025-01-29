import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "./logo2.png";
import { BlobServiceClient } from "@azure/storage-blob";

// Replace with your Azure Blob Storage SAS URL
const sasUrl = "https://ovariancancerdetection.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiyx&se=2025-08-03T11:34:47Z&st=2024-08-03T03:34:47Z&spr=https,http&sig=NYt7zIA3JqDxEymlU7OFkdbWwpx%2F9dA8swdmBjR00aw%3D";
// Container name
const containerName = "uploads";

const Pleo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const uploadImageToBlobStorage = async (file: File): Promise<string | null> => {
    try {
      // Validate image type
      if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") {
        console.error("Invalid file type. Only PNG and JPG images are allowed.");
        return null;
      }

      // Create a BlobServiceClient
      const blobServiceClient = new BlobServiceClient(sasUrl);

      // Get a reference to the container
      const containerClient = blobServiceClient.getContainerClient(containerName);

      // Use the original file name as the blob name
      const blobName = file.name;

      // Get a block blob client
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);

      // Upload the file
      await blockBlobClient.uploadData(file, {
        blobHTTPHeaders: {
          blobContentType: file.type,
        },
      });

      // Get the URL of the uploaded blob
      const blobUrl = blockBlobClient.url;
      console.log(`File uploaded to Azure Blob Storage: ${blobUrl}`);
      return blobUrl;
    } catch (error) {
      console.error("Error uploading file to Azure Blob Storage:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      setIsSubmitting(true);

      try {
        // Upload the file and get the URL
        const imageUrl = await uploadImageToBlobStorage(selectedFile);

        if (imageUrl) {
          // Send the image URL to Azure Function
          const response = await axios.post(' https://ovariancancerdetection.azurewebsites.net/api/pleomorphism ', {
            imageUrl: imageUrl
          });

          // Handle the response from the Azure Function
          const resultImageUrl = response.data;
          console.log('Processed image URL:', resultImageUrl);

          // Navigate to the result page with the image URL
          navigate('/pleores', { state: { imageUrl: resultImageUrl } });
        }
      } catch (error) {
        console.error('Error uploading or processing image:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="w-[450px]">
      <img src={logo} alt="Logo" className="logo" />
      <CardHeader>
        <CardTitle>Histopathological Images</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Upload the tile in which you want to detect Infiltration</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Button><Link to="/histopatho">Back</Link></Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default Pleo;
