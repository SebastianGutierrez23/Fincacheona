import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb



reserva_rtr = APIRouter()

class Reserva(BaseModel):
    fechainiciodereserva : str
    fechafinalizaciondereserva : str 
    idcliente :int  
    estadodereserva : str 
    
@reserva_rtr.get("/reserva/")
async def get_reservas(id:int):
    #return {"message": "Estos son los datos del usuario" ,"id":id}
    select_query = "SELECT * FROM reservas where idreserva = %s"
    cursor.execute(select_query,(id,))
    results = cursor.fetchall()
    return results


@reserva_rtr.post("/reserva_insert/", status_code=status.HTTP_201_CREATED)
def insert_reservas(reserva : Reserva):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO reservas (fechainiciodereserva,fechafinalizaciondereserva,idcliente,
                            estadodereserva) 
    VALUES (%s, %s, %s, %s)
    """
    values = (reserva.fechainiciodereserva,reserva.fechafinalizaciondereserva,reserva.idcliente,reserva.estadodereserva 
              )

    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Reserva ingresada exitosamente"}
 
@reserva_rtr.patch("/reserva/{id}")
async def update_reserva(id: int, reserva: Reserva):
    update_query = """
    UPDATE reservas
    SET  fechainiciodereserva = %s, fechafinalizaciondereserva = %s, idcliente = %s, 
        estadodereserva = %s,
    WHERE idreserva = %s
    """
    values = (
        reserva.fechainiciodereserva, reserva.fechafinalizaciondereserva, reserva.idcliente, 
        reserva.estadodereserva,id
    )

    try:
        cursor.execute(update_query, values)
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Reserva con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al actualizar la reserva: {err}")

    return {"message": "Reserva actualizada con éxito", "id": id}

 
@reserva_rtr.delete("/reserva_1/{id}")
async def delete_reservas(id: int):
    delete_query = "DELETE FROM reservas WHERE idreserva = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Reserva con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al eliminar la reserva: {err}")

    return {"message": f"Reserva con id {id} eliminada con éxito"}