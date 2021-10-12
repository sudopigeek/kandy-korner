const remoteURL = "http://localhost:8088"

//#region animalAPI
export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}`)
  .then(res => res.json())
}

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then(res => res.json())
}

export const closeLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
//#endregion
//#region productAPI
export const getProductById = (productId) => {
  return fetch(`${remoteURL}/products/${productId}`)
  .then(res => res.json())
}

export const getAllProducts = () => {
  return fetch(`${remoteURL}/products?_expand=location&_expand=productType`)
  .then(res => res.json())
}

export const removeProduct = (id) => {
  return fetch(`${remoteURL}/products/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}
//#endregion