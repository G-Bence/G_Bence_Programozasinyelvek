import { useEffect, useState } from 'react'
import type { ProgLang } from '../Types/progLangType'

export default function ProgLangCard(props: { data: ProgLang }) {
    const [isShown, setIsShown] = useState(false)
    
    return (
        <div className="p-4 col-sm-12 col-md-6 col-lg-4 p-2">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title" style={{color: `${props.data.szin}`}}>{props.data.nev}</h5>
                <hr />
                <div className="container-fluid" style={{display: `${isShown ? "block" : "none"}`}}>
                    <p>Release year: {props.data.megjelenesEve}</p>
                    <p>Developer: {props.data.fejleszto}</p>
                    <p>Popularity: {props.data.nepszeruseg}</p>
                </div>
                <button className="btn btn-primary" onClick={() => {setIsShown(!isShown)}} >See the details</button>
            </div>
        </div>
        </div>
    )

}