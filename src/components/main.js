import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"

export const Main = () => (
    <>
        <LocationList />
        <ProductList />
        <ApplicationViews />
    </>
)