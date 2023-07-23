from fastapi import FastAPI
from pydantic import BaseModel
from sklearn.externals import joblib

app = FastAPI()

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
    HeartRate: int #70

@app.post("/")
async def scoring_endpoint(item:ScoringItem):
    return item
