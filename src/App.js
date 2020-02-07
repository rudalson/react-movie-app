import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://www.rotinrice.com/wp-content/uploads/2011/09/NapaCabbageKimchi-1.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "Samgyopsal",
        image: "https://image.ajunews.com/content/image/2017/01/25/20170125102649752096.jpg",
        rating: 4.9
    },
    {
        id: 3,
        name: "Bibimbap",
        image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
        rating: 4.8
    }
];

function Food({name, pic, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={pic} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function renderFood(dish) {
    return <Food
        key={dish.id}
        name={dish.name}
        pic={dish.image}
        rating={dish.rating}
    />
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    )
}

export default App;
