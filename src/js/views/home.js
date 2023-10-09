import React, { useContext } from "react";
import "../../styles/home.css"
import { Context } from "../store/appContext";

export const Home = () => {

    const {store} = useContext(Context)

        return (
        <>
            <div className="container">
                <h1 className="text-danger">Characters</h1>
                <div className="my-carrusel">
                    {store.characters.map((item) => {
                        return ( 
                            <div className="my-card">
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""/>
                        </div>
                        <div className="body-text">
                            <p> <strong>Nombre:  {item.properties.name} </strong></p>
                            <p>Genero: {item.properties.gender}</p>
                            <p>Color de ojos : {item.properties.eye_color}</p>
                            <p>Color de cabello: {item.properties.hair_color}</p>
                        </div>
                        <div className="button-footer">
                            <button className="btn btn-outline-primary">Learn more</button>
                            <button className="btn btn-outline-warning">C</button>
                        </div>
                    </div>
                        )
                    })}

                </div>
            </div>
            <div className="container">
                <h1 className="text-danger">Planets</h1>
                <div className="my-carrusel">
                    {store.planets.map((item) => {
                        return ( 
                            <div className="my-card">
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt=""/>
                        </div>
                        <div className="body-text">
                            <p> <strong>Nombre: {item.properties.name} </strong></p>
                            <p>Terrain: {item.properties.terrain} </p>
                            <p>Population: {item.properties.population} </p>
                        </div>
                        <div className="button-footer">
                            <button className="btn btn-outline-primary">Learn more</button>
                            <button className="btn btn-outline-warning">C</button>
                        </div>
                    </div>
                        )
                    })}

                </div>
            </div>
        </>
        );
        
        }
