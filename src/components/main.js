import React from "react"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"
import { HeaderCard } from "./header/HeaderCard"

export const Main = () => (
    <>
        <HeaderCard />
        <LocationList />
        <ProductList />
    </>
)