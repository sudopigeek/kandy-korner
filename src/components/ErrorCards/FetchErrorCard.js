import React from "react"
import "./ErrorCards.css"

export const FetchErrorCard = ({ message }) => {
    return (
        <section className="fetchError">
            <h3>{message}</h3>
        </section>
    );
}