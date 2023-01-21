import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons=[
        {
            id: 1,
            name: "Apu",
            img: "https://www.pixstudios.com.br/hubfs/apu-500x318.png"
        },
        {
            id: 2,
            name: "Clancy Wiggum",
            img: "https://www.google.com/search?q=Clancy+Wiggum&sourceid=chrome&ie=UTF-8#"
        },
        {
            id: 3,
            name: "Barney Gumble",
            image: "https://upload.wikimedia.org/wikipedia/en/d/de/Barney_Gumble.png"
        },
        {
            id: 4,
            name: "Bart Simpson",

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZNwdK9lSjqjqE8HNb9TfWJPW6j-NB1lQp44uUTHkmdcusbgI4mLpgK4_lXG_KTw9SmM&usqp=CAU"
        },
        {
            id: 5,
            name: "Homer Simpson",
            image: "http://www.pixstudios.com.br/hubfs/homer-excited.png"
        }

    ]
    return(
        <div>
            {simpsons.map(value => <Simpson key={value.id} simpson={value}/>)}
        </div>
    )

}

export default Simpsons;