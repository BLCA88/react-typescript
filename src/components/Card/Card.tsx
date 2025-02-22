import { useState } from "react";

// Definimos el tipo de las propiedades de la Card
type CardProps = {
    title: string;
    description: string;
    price: number;
};

const Card: React.FC<CardProps> = ({ title, description, price }) => {
    // Estado local para gestionar si el producto está marcado como favorito
    const [amount, setAmount] = useState(0);

    // Función para alternar el estado de favorito
    const sum = () => {
        setAmount((amount) => amount + 1);
    };

    return (
        <div className="card border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-green-500 font-semibold">${price}</p>

            {/* Mostrar estado de favorito */}
            <button
                onClick={sum}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto mb-4"
            >
                {amount}
            </button>
        </div>
    );
};

export default Card;