import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


const Detail = () => {
    const params = useParams()
    const [search, setSearch] = useState({})

    const { store } = useContext(Context)

    const details = () => {
        if (params.nature == "planets") {
            const searchFind = store.planets.find((item) => item.uid == params.id)
            console.log(searchFind)
            setSearch(searchFind)
        } else {
            const searchFind = store.characters.find((item) => item.uid == params.id)
            console.log(searchFind)
            setSearch(searchFind)
        }
    }
    useEffect(() => {
        details()
    }, )

    return (
        <>
            <div>
                <h1>Name : {search?.properties?.name}</h1>
            </div>

            <div>
                <p>climate: {search?.properties?.climate}</p>
                <p>mass: {search?.properties?.mass}</p>
                <p>eye color : {search?.properties?.eye_color}</p>
                <p>hair color: {search?.properties?.hair_color}</p>
                <p>terrain: {search?.properties?.terrain}</p>
                <p>population: {search?.properties?.population}</p>

            </div>
        </>
    )
}

export default Detail;