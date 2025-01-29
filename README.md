# Ovarian Cancer Detection 

## About
This Repository is the code and implementation side of the our Research on **_Ovarian Cancer Detection using Deep Learning methods_**
The Research was conducted on the 2 main fronts at which ovarain cancers are diagnosed by pathologists :
  1. Biomarkers
  2. Histopathology

Which in turn were further divided and approached in sub-topics as deemed necessary throughout the course of our research:
1. Histopathology:
   - Tiling 
   - Mitosis Detection
   - Pleomorphism and Infiltration Detection
   - Stratification Detection
2. Biomarker Analysis
   - Feature Extraction
   - Feature Selection
   - Model Training

## Histopathology
Our pursuits in analyzing the Histopathology of ovarian cancers required the processing of Whole Slide Images(WSIs). The large dimensions and high density of information in WSIs makes analyzing them a significant challenge, along with the impracticality of parsing such large images for training of ML & DL models. This led to the process of tiling. 

### Dataset
The [dataset used](https://www.kaggle.com/competitions/UBC-OCEAN/data) is the from the Kaggle competition [UBC OCEAN](https://www.kaggle.com/competitions/UBC-OCEAN/overview) 

### Tiling
Tiling involves the spatial segmentation of the images to tiles. This process can be computationally expensive, especially when handling WSIs where the resolution of the images are absurdly large. To give a perspective on this, an image with 45000X320000 pixels size and 2.3GBs in size takes 12 minutes on an Rx7600X CPU. The Dataset used contains 538 of such images, making Tiling a really computationally expensive task, consuming way too much time. 
In order to make this process of tiling more feasible, we propose a GPU accelerated tiling methodology that uses CUDA along with DALI and CuPy libraries.
This approach to tiling is a novel proposal, and has been presented through a Research paper of its own.

### Mitosis Detection 

**TO BE UPDATED**
## Biomarkers
The first part involves analysing the biomarkers. The biomarkers has been chosen in the increasing order of their sensitivity and specificity. CA-19-9 with sensitivity of around 50%, HE-4 sensitivity of 72.9% and CA-125 
with sensitivity of 62% have been chosen.
The dataset contains these 3 parameters for healthy and cancerous patients. Various models like SVM, Random Forest have been trained to analyse these parameters and make predictions based on the values.
**TO BE UPDATED**
