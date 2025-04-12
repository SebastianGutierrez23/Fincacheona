import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb



agenda_rtr = APIRouter()

class Agenda(BaseModel):
    fechadecreaciondeagenda: str
    fechadeultimamodificacion: str
    fechadeiniciodeagenda: str
    fechadeterminacióndeagenda: str
    idalojamiento: int

@agenda_rtr.get("/agenda/")
async def get_agenda(id: int):
    select_query = "SELECT * FROM Agenda WHERE idagenda = %s"
    cursor.execute(select_query, (id,))
    results = cursor.fetchall()
    if not results:
       return {"message": "No se encontraron resultados"}
    return results


@agenda_rtr.post("/agenda_insert/", status_code=status.HTTP_201_CREATED)
def insert_agenda(agenda: Agenda):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO agenda (fechadecreaciondeagenda, fechadeultimamodificacion, fechadeiniciodeagenda, 
                        fechadeterminacióndeagenda, idalojamiento) 
    VALUES (%s, %s, %s, %s, %s, %s)
    """
    values = ( agenda.fechadecreaciondeagenda, agenda.fechadeultimamodificacion, agenda.fechadeiniciodeagenda, 
              agenda.fechadeterminacióndeagenda, agenda.idalojamiento)

    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Agenda guarda con exito"}
 

@agenda_rtr.patch("/agendas/{id}")
async def update_agenda(id: int, agenda: Agenda):
    try:
        update_query = """UPDATE Agenda SET fechadecreaciondeagenda=%s, fechadeultimamodificacion=%s, 
                         fechadeiniciodeagenda=%s, fechadeterminacióndeagenda=%s, idalojamiento=%s 
                         WHERE idagenda=%s"""
        cursor.execute(update_query, (agenda.fechadecreaciondeagenda, agenda.fechadeultimamodificacion,
                                      agenda.fechadeiniciodeagenda, agenda.fechadeterminacióndeagenda,
                                      agenda.idalojamiento, id))
        return {"message": "Agenda actualizada con éxito", "id": id}
    except Exception as e:
        return {"error": str(e)}
    
@agenda_rtr.delete("/agenda_1/{id}")
async def delete_agenda(id: int):
    delete_query = "DELETE FROM agenda WHERE idagenda = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Agenda con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al eliminar la agenda: {err}")

    return {"message": f"Agenda con id {id} eliminada con éxito"}



