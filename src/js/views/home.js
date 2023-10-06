import React from "react";
import { useContext } from "react";
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
                            <img src="" alt=""/>
                        </div>
                        <div className="body-text">
                            <p>Nombre: </p>
                            <p>Genero</p>
                            <p>Color de ojos</p>
                            <p>Color de cabello</p>
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
                            <img src="" alt=""/>
                        </div>
                        <div className="body-text">
                            <p>Terrain: </p>
                            <p>Population: </p>
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
