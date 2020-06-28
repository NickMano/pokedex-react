const useGetTypes = types => {
    return types.map(type => {
        try {
            return {img: require(`../assets/static/${type}.png`), name: type} 
        } catch (error) {
            return {img: '', name: type}
        }
    })
}

export default useGetTypes