import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb



plan_rtr = APIRouter()

class Plan(BaseModel):
    Nombredeplan: str
    Descripcióndeplan : str 
    Tipohabitación : str
    Duraciondelplan : str 
    Serviciosincluidos : str 
    Disponibilidad : str
    Fechadevigencia : str
    Fechadereserva :str

@plan_rtr.get("/plan/")
async def get_planes(id: int):
    select_query = "SELECT * FROM Agenda WHERE idagenda = %s"
    cursor.execute(select_query, (id,))
    results = cursor.fetchall()
    if not results:
       return {"message": "No se encontraron resultados"}
    return results


@plan_rtr.post("/plan_insert/", status_code=status.HTTP_201_CREATED)
def insert_planes(plan: Plan):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO planes (Nombredeplan, Descripcióndeplan , Tipohabitación , Duraciondelplan, 
                        Serviciosincluidos, Disponibilidad, Fechadevigencia, Fechadereserva ) 
    VALUES (%s, %s, %s, %s, %s, %s,%s, %s)
    """
    values = (plan.Nombredeplan, plan.Descripcióndeplan, plan.Tipohabitación, plan.Duraciondelplan, 
          plan.Serviciosincluidos, plan.Disponibilidad, plan.Fechadevigencia, plan.Fechadereserva)


    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Plan guardo con exito"}
 

@plan_rtr.patch("/plan/{id}")
async def update_planes(id: int, plan: Plan):
    try:
        update_query = """UPDATE plan SET Nombredeplan=%s, Descripcióndeplan =%s, 
                          Tipohabitación=%s, Duraciondelplan=%s, Serviciosincluidos=%s, Disponibilidad=%s,Fechadevigencia=%s,Fechadereserva=%s
                         WHERE idplan=%s"""
        cursor.execute(update_query, (Plan.Nombredeplan, Plan.Descripcióndeplan,
                                      Plan.Tipohabitación, Plan.Duraciondelplan,
                                      Plan.Disponibilidad, Plan.Duraciondelplan, Plan.Serviciosincluidos, Plan.Fechadevigencia,Plan.Fechadereserva,id))
        return {"message": "plan actualizado con éxito", "id": id}
    except Exception as e:
        return {"error": str(e)}

@plan_rtr.delete("/plan-1/{id}")
async def delete_planes(id: int):
    try:
        delete_query = "DELETE FROM Planes WHERE idagenda = %s"
        cursor.execute(delete_query, (id,))
        return {"message": f"Plan con id {id} eliminada con éxito"}
    except Exception as e:
        return {"error": str(e)}