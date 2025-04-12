from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from cliente import cliente_rtr
from user import router
from alojamiento import rtr
from pago import pago_rtr
from agenda import agenda_rtr
from reserva import reserva_rtr
from planes import plan_rtr



 
app = FastAPI()
app.include_router(cliente_rtr)
app.include_router(router)
app.include_router(rtr)
app.include_router(agenda_rtr)
app.include_router(pago_rtr)
app.include_router(reserva_rtr)
app.include_router(plan_rtr)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:",
    "http://localhost:8080",
    "http://localhost:3000",
]
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Esta es mi API con FAst Api"}


