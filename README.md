# Ovarian Cancer Detection 
The diagnosis of Ovarian cancer starts with analysing the different biomarkers of the patient particularly CA-125, HE-4 and others. If the values of these biomarkers are above the threshold values then a biopsy is performed 
on the tissue cells of the patient's ovary to futher diagnose the cancer.
Our project intends to automate this entire process with the help of machine learning and deep learning inorder to assist doctors with quicker detection.
We have divided the process in two parts just like how's it done traditionally. 

## Biomarkers
The first part involves analysing the biomarkers. The biomarkers has been chosen in the increasing order of their sensitivity and specificity. CA-19-9 with sensitivity of around 50%, HE-4 sensitivity of 72.9% and CA-125 
with sensitivity of 62% have been chosen.
The dataset contains these 3 parameters for healthy and cancerous patients. Various models like SVM, Random Forest have been trained to analyse these parameters and make predictions based on the values.
