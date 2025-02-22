import React, { useRef } from 'react'

interface FormDataObject {
    [key: string]: string | File;
}

const Formulario1: React.FC = () => {
    // Definir el tipo de la referencia
    const dataForm = useRef<HTMLFormElement | null>(null)

    // Tipar el evento
    const queryForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Asegurarse de que dataForm no sea null
        if (dataForm.current) {
            console.log(dataForm.current)
            const formData: FormData = new FormData(dataForm.current)

            const data: FormDataObject = Object.fromEntries(formData.entries());
            console.log(data); // Ahora deberías obtener los datos correctamente
        }
    }

    return (
        <div>
            <form ref={dataForm} onSubmit={queryForm}>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" />
                <input type="email" name="email" placeholder="Ingrese su email" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario1


