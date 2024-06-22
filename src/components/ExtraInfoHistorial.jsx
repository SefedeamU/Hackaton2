import React, { useState } from 'react'
import {ExtraInfoItem} from './ExtraInfoItem'

export const ExtraInfoHistorial = ({extraInfo}) => {

    if (!extraInfo) {
        return <p>Loading...</p>;
    }

    return (
        <article>
            <h1>Extra Info History</h1>
            <section>
                {extraInfo.map((extra, index) => (
                    <ExtraInfoItem key={index} id={index} {...extra} />
                ))}
            </section>
        </article>
    )
}