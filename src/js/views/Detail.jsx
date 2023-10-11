import React, {useContext, useEffect, useState} from "react"
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";


const Detail=()=>{
    const params = useParams()
    const [search, setSearch] = useState({})

    const {store} = useContext(Context)

    const details = () =>{
        if(params.nature == "characters"){
            const searchFind = store.characters.find((item)=> item.id == params.id)
            setSearch(searchFind)
        }else {
            const searchFind = store.planets.find((item)=> item.id == params.id)
            setSearch(searchFind)
        }
    }
    useEffect(()=>{
        details()
    }, [])

    return(
        <>
        <h1>{search?._id}</h1>
        </>
    )
}

export default Detail;