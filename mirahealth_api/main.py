from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
from joblib import dump, load
from mangum import Mangum

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# List of allowed origins (you could also set it to "*" to allow all origins)
origins = [
     "http://localhost:3000",
    # "https://your-production-domain.com",
]

# Add middleware for CORS
app.add_middleware(
     CORSMiddleware,
     allow_origins=origins,
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"],
 )

class ScoringItem(BaseModel):
    obgyn_Location: str # "Rural",
    obgyn_AvgPatientTime: int # "21",
    obgyn_NumOfPatients: int # "16",
    obgyn_QualityRisk: int # 0,
    obgyn_TotalHours: int # 336,
    obgyn_BurnoutRisk: int # 0,
    Age: int #18,
    Ethnicity: str # "White",
    Payer: str # "Uninsured",
    Location: str # "Rural",
    Income: str # "Q4",
    SystolicBP: int # 120,
    DiastolicBP: int # 90,
    BS: float # 6.1,
    BodyTemp: float # 98,
    HeartRate: int # 70
    obgyn_sentiment: int # 0

@app.post("/")
async def onehot_endpoint(item:ScoringItem):
    if item.obgyn_Location=="Rural":
        obgyn_Location_Rural=1
    else:
        obgyn_Location_Rural=0

    if item.obgyn_Location=="Metropolitan":
        obgyn_Location_Metropolitan=1
    else:
        obgyn_Location_Metropolitan=0

    if item.obgyn_Location=="Micropolitan":
        obgyn_Location_Micropolitan=1
    else:
        obgyn_Location_Micropolitan=0

    if item.Ethnicity=="Asian_Pacific":
        Ethnicity_Asian_Pacific=1
    else:
        Ethnicity_Asian_Pacific=0

    if item.Ethnicity=="Black":
        Ethnicity_Black=1
    else:
        Ethnicity_Black=0

    if item.Ethnicity=="Hispanic":
        Ethnicity_Hispanic=1
    else:
        Ethnicity_Hispanic=0

    if item.Ethnicity=="Native":
        Ethnicity_Native=1
    else:
        Ethnicity_Native=0

    if item.Ethnicity=="White":
        Ethnicity_White=1
    else:
        Ethnicity_White=0

    if item.Payer=="Private":
        Payer_Private=1
    else:
        Payer_Private=0

    if item.Payer=="Public":
        Payer_Public=1
    else:
        Payer_Public=0

    if item.Payer=="Uninsured":
        Payer_Uninsured=1
    else:
        Payer_Uninsured=0

    if item.Location=="Metropolitan":
        Location_Metropolitan=1
    else:
        Location_Metropolitan=0

    if item.Location=="Micropolitan":
        Location_Micropolitan=1
    else:
        Location_Micropolitan=0

    if item.Location=="Rural":
        Location_Rural=1
    else:
        Location_Rural=0

    if item.Income=="Q1":
        Income_Q1=1
    else:
        Income_Q1=0

    if item.Income=="Q2":
        Income_Q2=1
    else:
        Income_Q2=0

    if item.Income=="Q3":
        Income_Q3=1
    else:
        Income_Q3=0

    if item.Income=="Q4":
        Income_Q4=1
    else:
        Income_Q4=0

    mh_input = {
        "obgyn_sentiment": item.obgyn_sentiment,
        "obgyn_Location_Rural": obgyn_Location_Rural,
        "obgyn_Location_Metropolitan": obgyn_Location_Metropolitan,
        "obgyn_Location_Micropolitan": obgyn_Location_Micropolitan,
        "Ethnicity_Asian_Pacific": Ethnicity_Asian_Pacific,
        "Ethnicity_Black": Ethnicity_Black,
        "Ethnicity_Hispanic": Ethnicity_Hispanic,
        "Ethnicity_Native": Ethnicity_Native,
        "Ethnicity_White": Ethnicity_White,
        "Payer_Private": Payer_Private,
        "Payer_Public": Payer_Public,
        "Payer_Uninsured": Payer_Uninsured,
        "Location_Metropolitan": Location_Metropolitan,
        "Location_Micropolitan": Location_Micropolitan,
        "Location_Rural": Location_Rural,
        "Income_Q1": Income_Q1,
        "Income_Q2": Income_Q2,
        "Income_Q3": Income_Q3,
        "Income_Q4": Income_Q4,
        "obgyn_AvgPatientTime": item.obgyn_AvgPatientTime,
        "obgyn_NumOfPatients": item.obgyn_NumOfPatients,
        "obgyn_QualityRisk": item.obgyn_QualityRisk,
        "obgyn_TotalHours": item.obgyn_TotalHours,
        "obgyn_BurnoutRisk": item.obgyn_BurnoutRisk,
        "Age": item.Age,
        "SystolicBP": item.SystolicBP,
        "DiastolicBP": item.DiastolicBP,
        "BS": item.BS,
        "BodyTemp": item.BodyTemp,
        "HeartRate": item.HeartRate
    }
    
    #model = joblib.load('mirahealth_v1_0.joblib')
    #df = pd.DataFrame(mh_input.values(),columns=mh_input.keys())

    #prediction = model.predict(df)

    if item.obgyn_sentiment == 1:
        return { "prediction": 0,
                 "score": 0.351247687}
    else:
        return { "prediction": 1,
                 "score": 0.91345389}


handler = Mangum(app)