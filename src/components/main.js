import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { LocationList } from "./location/LocationList"

export const Main = () => (
    <>
        <LocationList />
        <ApplicationViews />
    </>
)