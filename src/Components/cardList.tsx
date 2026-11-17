import { useEffect, useState } from 'react'
import type { ProgLang } from '../Types/progLangType'
import ProgLangCard from './proglangCard'

export default function CardList(props: { list: ProgLang[] }) {

    return (
        <div className="container">
            <h2 className='h2 text-center mb-5 mt-4'>See all the programming languages</h2>
            <div className="row">
                {props.list.map((item) => (
                    <ProgLangCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )

}