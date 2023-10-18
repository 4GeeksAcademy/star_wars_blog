import React, { useContext } from "react"
import { Context } from "../store/appContext";

const Favorites = () =>{
    const { store, actions } = useContext(Context);
    return(
        <div className="">
            <ul className="">
                {store.favorites.map((charac, index) => <li key={index} className="">
                    {charac}
                </li>)}

            </ul>
        </div>
        )
}

export default Favorites;