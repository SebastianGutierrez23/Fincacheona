import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb

rtr = APIRouter()
 
class Alojamiento(BaseModel):
    idalojamiento :int
    tipoalojamiento : str
    estadodealojamiento : str
    capacidaddealojamiento : str
    descripciondealojamiento : str
    caracteristicasespeciales : str
    
    
@rtr.get("/alojamientos/")
async def get_alojamiento(id:int):
    #return {"message": "Estos son los datos del usuario" ,"id":id}
    select_query = "SELECT * FROM alojamiento where IdAlojamiento = %s"
    cursor.execute(select_query,(id,))
    results = cursor.fetchall()
    return results

 
@rtr.post("/alojamiento_insert/", status_code=status.HTTP_201_CREATED)
def insert_alojamiento(alojamiento : Alojamiento):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO alojamiento (idalojamiento,tipoalojamiento,  estadodealojamiento, capacidaddealojamiento, descripciondealojamiento,
                            caracteristicasespeciales) 
    VALUES (%s, %s, %s, %s, %s, %s,%s,%s)
    """
    values = (alojamiento.idalojamiento,alojamiento.tipoalojamiento, alojamiento.estadodealojamiento, alojamiento.capacidaddealojamiento, alojamiento.descripciondealojamiento, 
              alojamiento.caracteristicasespeciales)

    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "alojamiento insertado exitosamente"}
 
@rtr.patch("/alojamientos/{id}")
async def update_alojamientos(id: int, alojamiento: Alojamiento):
    # Consulta para actualizar el alojamiento con el id dado
    update_query = """
    UPDATE alojamiento 
    SET TipoAlojamiento = %s, EstadoDeAlojamiento = %s, CapacidadDeAlojamiento = %s, DescripcionDeAlojamiento = %s, 
        CaracteristicasEspeciales = %s
    WHERE IdAlojamiento = %s
    """
    values = (
        alojamiento.tipoalojamiento,alojamiento.estadodealojamiento,alojamiento.capacidaddealojamiento,alojamiento.descripciondealojamiento,alojamiento.caracteristicasespeciales,id )

    try:
        cursor.execute(update_query, values)
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Alojamiento con id {id} no encontrado.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Alojamiento actualizado con éxito", "id": id}


@rtr.delete("/alojamientos/{id}")
async def delete_alojamiento(id: int):
    # Consulta para eliminar el alojamiento con el id dado
    delete_query = "DELETE FROM alojamiento WHERE IdAlojamiento = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Alojamiento con id {id} no encontrado.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": f"Alojamiento con id {id} eliminado con éxito"}