import mysql.connector

def conectar_a_base_de_datos():
    # Conexión a la base de datos
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="contactos"
    )

    return conexion

def guardar_contacto(nombre, apellidos, correo_electronico):
    # Conexión a la base de datos
    conexion = conectar_a_base_de_datos()

    # Inserción del contacto en la base de datos
    sentencia = "INSERT INTO contactos (nombre, apellidos, correo_electronico) VALUES (%s, %s, %s)"
    valores = (nombre, apellidos, correo_electronico)
    cursor = conexion.cursor()
    cursor.execute(sentencia, valores)
    conexion.commit()
    cursor.close()

def recuperar_contactos():
    # Conexión a la base de datos
    conexion = conectar_a_base_de_datos()

    # Recuperación de los contactos de la base de datos
    sentencia = "SELECT * FROM contactos"
    cursor = conexion.cursor()
    cursor.execute(sentencia)
    contactos = cursor.fetchall()
    cursor.close()

    return contactos

def modificar_contacto(id, nombre, apellidos, correo_electronico):
    # Conexión a la base de datos
    conexion = conectar_a_base_de_datos()

    # Modificación del contacto en la base de datos
    sentencia = "UPDATE contactos SET nombre=%s, apellidos=%s, correo_electronico=%s WHERE id=%s"
    valores = (nombre, apellidos, correo_electronico, id)
    cursor = conexion.cursor()
    cursor.execute(sentencia, valores)
    conexion.commit()
    cursor.close()

def eliminar_contacto(id):
    # Conexión a la base de datos
    conexion = conectar_a_base_de_datos()

    # Eliminación del contacto de la base de datos
    sentencia = "DELETE FROM contactos WHERE id=%s"
    valores = (id,)
    cursor = conexion.cursor()
    cursor.execute(sentencia, valores)
    conexion.commit()
    cursor.close()

if __name__ == "__main__":
    # Guardar un contacto
    guardar_contacto("Juan", "Pérez", "juan.perez@example.com")

    # Recuperar todos los contactos
    contactos = recuperar_contactos()
    for contacto in contactos:
        print(contacto)

    # Modificar un contacto
    modificar_contacto(1, "María", "García", "maria.garcia@example.com")

    # Eliminar un contacto
    eliminar_contacto(2)
