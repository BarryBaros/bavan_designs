function Food(){

    const shoe1 = "Nike"
    const shoe2 = "Airmax"

    return(
        <ul>
            <li>Jordan 3</li>
            <li>{shoe1}</li>
            <li>{shoe2.toUpperCase()}</li>
        </ul>
    );

}

export default Food