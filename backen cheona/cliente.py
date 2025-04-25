import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb


cliente_rtr = APIRouter()
 
class Cliente(BaseModel):
    
    Direccióncliente : str  
    Correocliente : str 
    Telefonocliente : float 
    Tipoidentificación : str
    Numeroidentificacióncliente : float 
    Nombredecliente : str
    Apellidosdecliente : str
    
@cliente_rtr.get("/clientes/")
async def get_clientes(id:int):
    #return {"message": "Estos son los datos del usuario" ,"id":id}
    select_query = "SELECT * FROM cliente where IdCliente = %s"
    cursor.execute(select_query,(id,))
    results = cursor.fetchall()
    return results

 
@cliente_rtr.post("/cliente_insert/", status_code=status.HTTP_201_CREATED)
def insert_cliente(cliente : Cliente):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO cliente (Direccióncliente,  Correocliente, Telefonocliente, Tipoidentificación, 
                        Numeroidentificacióncliente,  Nombredecliente, Apellidosdecliente) 
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    values = (cliente.Direccióncliente, cliente.Correocliente, cliente.Telefonocliente, cliente.Tipoidentificación, 
              cliente.Numeroidentificacióncliente, cliente.Nombredecliente, cliente.Apellidosdecliente)

    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Cliente insertado exitosamente"}
 
@cliente_rtr.patch("/clientes/{id}")
async def update_clientes(id: int, cliente: Cliente):
    return {"message":"Cliente actualizado con exito", "id":id}
 
@cliente_rtr.delete("/cliente_1/{id}")
async def delete_cliente(id: int):
    delete_query = "DELETE FROM cliente WHERE idcliente = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Cliente con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al eliminar el cliente: {err}")

    return {"message": f"Cliente con id {id} eliminado con éxito"}

    
    