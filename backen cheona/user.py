import hashlib
from fastapi import FastAPI, HTTPException, status
import mysql.connector

from fastapi import APIRouter
from pydantic import BaseModel
from conecction import cursor, mydb



router = APIRouter()
 
class User(BaseModel):
    
    NombreUsuario : str
    ApellidodeUsuario :str
    Tipoidentificación : str 
    Numeroidentificación : float
    Estadodelusuario : str 
    Correodeusuario : str
    Telefonodeusuario : float
    
   
 
@router.get("/users/")
async def get_users(id:int):
    #return {"message": "Estos son los datos del usuario" ,"id":id}
    select_query = "SELECT * FROM usuarios where IdUsuario = %s"
    cursor.execute(select_query,(id,))
    results = cursor.fetchall()
    return results


@router.post("/users_insert/", status_code=status.HTTP_201_CREATED)
def insert_user(user: User):
    # Crea un hash de la contraseña usando SHA-256
   # hashed_password = hashlib.sha256(user.password.encode()).hexdigest()

    insert_query = """ 
    INSERT INTO usuarios (NombreUsuario, ApellidodeUsuario, Tipoidentificación, Numeroidentificación, 
                        Estadodelusuario,  Correodeusuario, Telefonodeusuario) 
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    values = (user.NombreUsuario, user.ApellidodeUsuario, user.Tipoidentificación, user.Numeroidentificación, 
              user.Estadodelusuario, user.Correodeusuario, user.Telefonodeusuario)

    try:
        cursor.execute(insert_query, values)
        mydb.commit() # type: ignore
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Usuario insertado exitosamente"}

 
@router.patch("/users/{id}")
async def update_user(id: int, user: User):
    update_query = """
    UPDATE usuarios
    SET NombreUsuario = %s, ApellidodeUsuario = %s, Tipoidentificación = %s, 
        Numeroidentificación = %s, Estadodelusuario = %s, Correodeusuario = %s, Telefonodeusuario = %s 
    WHERE IdUsuario = %s
    """
    values = (
        user.NombreUsuario, user.ApellidodeUsuario, user.Tipoidentificación, 
        user.Numeroidentificación, user.Estadodelusuario, user.Correodeusuario, 
        user.Telefonodeusuario, id
    )

    try:
        cursor.execute(update_query, values)
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Usuario con id {id} no encontrado.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al actualizar el usuario: {err}")

    return {"message": "Usuario actualizado con éxito", "id": id}
 
@router.delete("/users_1/{id}")
async def delete_users(id: int):
    delete_query = "DELETE FROM usuarios WHERE idusuario = %s"
    
    try:
        cursor.execute(delete_query, (id,))
        mydb.commit()  # type: ignore
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail=f"Usuario con id {id} no encontrada.")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error al eliminar el usuario: {err}")

    return {"message": f"usuario con id {id} eliminado con éxito"}
