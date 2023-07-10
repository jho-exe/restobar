import Image from "next/image"
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { formatearDinero } from '../helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Orden({orden}) {
    const {id, nombre, total, pedido} = orden

    const [preparadas, setPreparadas] = useState(Array(pedido.length).fill(false));

    const completarOrden = async () => {
        try {
           await axios.post(`/api/ordenes/${id}`)
           toast.success('Orden Lista')
        } catch (error) {
           console.log(error)
        }
        
    }

    const marcarPreparada = (index) => {
        const nuevasPreparadas = [...preparadas];
        nuevasPreparadas[index] = true;
        setPreparadas(nuevasPreparadas);
    }

  return (
    <div className="border p-10 space-y-5">
        <h1 className="text-2xl font-bold">Orden: {id}</h1>
        <p className="text-lg font-bold">Cliente: {nombre}</p>

        <div>
            {pedido.map((platillo, index) => (
                <div key={platillo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            alt={`Imagen Platillo ${platillo.nombre}`}
                        />
                    </div>

                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">{platillo.nombre}</h4>
                        <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
                        {!preparadas[index] && (
                            <button className="bg-green-600 hover:bg-green-800 text-white mt-5 md>mt-0 py-2 px-5 uppercase font-bold rounded-lg" type="button" onClick={() => marcarPreparada(index)}>
                                Preparada
                            </button>
                        )}
                        {preparadas[index] && (
                             <p className="text-green-500 font-bold text-xl flex items-center">
                             <FontAwesomeIcon icon={faCheck} className="mr-2" />
                             Listo para entregar
                         </p>
                        )}
                    </div>

                </div>    
            ))}
        </div>
        <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">
                    Total a pagar: {formatearDinero(total)}
                </p>
                
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md>mt-0 py-3 px-10 uppercase font-bold rounded-lg" type="button" onClick={completarOrden}>
                    Completar Orden
                </button>
        </div>
    </div>
  )
}
