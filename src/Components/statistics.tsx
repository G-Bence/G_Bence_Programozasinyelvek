import { useEffect, useState } from 'react'
import type { ProgLang } from '../Types/progLangType'

export default function Statistics(props: {list: ProgLang[]}){
    let average = 0
    props.list.forEach((lang) => average += lang.nepszeruseg)

    return(
        <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-8 mx-auto">
                <h2 className="h2 text-center mb-4 mt-4">
                    Statistics
                </h2>
                <div className="container">
                    <p>Number of programming languages: {props.list.length}</p>
                    <p>Name of oldest programming language: {props.list.sort((a, b) => a.megjelenesEve - b.megjelenesEve)[0]?.nev}</p>
                    <p>Name of latest programming language: {props.list.sort((a, b) => b.megjelenesEve - a.megjelenesEve)[0]?.nev}</p>
                    <p>Average popularity of programming langs: {average/props.list.length}</p>
                </div>
            </div>
        </div>
    )

}