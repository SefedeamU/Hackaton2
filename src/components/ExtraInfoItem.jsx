import React from 'react'


export const ExtraInfoItem = (
    { id, originName, departureDate, destinationName, price }
) => {
    //CAMBIAR ORIGINNAME, DEPARTUREDATE, DESTINATIONNAME, PRICE POR LOS NOMBRES DE LOS CAMPOS DE LA BASE DE DATOS
    return (
        <section id={id}>
            <div className='flex items-center'>
                <b className='ml-2'>extra info 1</b>
                <p id='origin' className='ml-2'>{originName}</p>
            </div>

            <div className='flex items-center'>
                <b className='ml-2'>extra info 2</b>
                <p id='departure' className='ml-2'>{departureDate}</p>
            </div>

            <div className='flex items-center'>
                <b className='ml-2'>extra info 3</b>
                <p id='destination' className='ml-2'>{destinationName}</p>
            </div>

            <div className='flex items-center'>
                <b className='ml-2'>extra info 4</b>
                <p id='price' className='ml-2'>{price}</p>
            </div>

        </section>
    )
}
