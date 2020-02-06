import React from 'react';

function Food({name, pic}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={pic}/>
        </div>
    )
}

const foodILike = [
    {
        name: "Kimchi",
        image: "https://www.rotinrice.com/wp-content/uploads/2011/09/NapaCabbageKimchi-1.jpg"
    },
    {
        name: "Samgyopsal",
        image: "https://image.ajunews.com/content/image/2017/01/25/20170125102649752096.jpg"
    }
];

function renderFood(dish) {
    return <Food name={dish.name} pic={dish.image}/>
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    )
}

export default App;
