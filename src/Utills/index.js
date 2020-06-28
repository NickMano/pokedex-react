export const toCapitalized = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getData = async url => {
    const response = await fetch(url)
    return await response.json()
}