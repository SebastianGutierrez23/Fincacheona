import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb

pago_rtr = APIRouter()
 
class Pago(BaseModel):
    
    iddereserva: int
    metododepago: str
    detallesdepago: str
    comprobantedepago : str
    iddecliente : int
    estadodepago : str
    valordepago : int
    fechayhoradepago: str
    
    
@pago_rtr.get("/pagos/")
async def get_pagos(id:int):
    #return {"message": "Estos son los datos del usuario" ,"id":id}
    select_query = "SELECT * FROM pago where IdPago = %s"
    cursor.execute(select_query,(id,))
    results = cursor.fetchall()
    return results

 
@pago_rtr.post("/pago_insert/", status_code=status.HTTP_201_CREATED)
def insert_pago(pago: Pago):
    # Crea un hash de la contraseña usando SHA-256 (comentado por ahora)
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO pago (iddereserva, metododepago, detallesdepago, 
                        comprobantedepago,iddecliente, estadodepago, valordepago, fechayhoradepago) 
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (pago.iddereserva, pago.metododepago, pago.detallesdepago, 
              pago.comprobantedepago, pago.iddecliente, pago.estadodepago, pago.valordepago, pago.fechayhoradepago)

    try:
        cursor.execute(insert_query, values)
        mydb.commit()  # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Pago insertado exitosamente"}

 
@pago_rtr.patch("/pagos/{id}")
async def update_pagos(id: int, pago: Pago):
    update_query = """
    UPDATE pago
    SET iddereserva = %s, metododepago = %s, detallesdepago = %s, 
        comprobantedepago = %s,iddecliente = %s,estadodepago = %s, valordepago = %s, fechayhoradepago = %s
    WHERE idpago = %s
    """
    values = (
        pago.iddereserva, pago.metododepago, pago.detallesdepago, 
        pago.comprobantedepago,pago.iddecliente,pago.estadodepago, pago.valordepago, pago.fechayhoradepago, id
    )

    try:
        cursor.execute(update_query, values)
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Pago con id {id} no encontrado.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al actualizar el pago: {err}")

    return {"message": "Pago actualizado con éxito", "id": id}



@pago_rtr.delete("/pago_1/{id}")
async def delete_pago(id: int):
    delete_query = "DELETE FROM pago WHERE idpago = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Pago con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al eliminar el pago: {err}")

    return {"message": f"Pago con id {id} eliminado con éxito"}