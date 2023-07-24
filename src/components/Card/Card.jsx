import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <h2 className='lg:text-5xl text-3xl text-center font-bold my-6 lg:my-12 text-[#FF69B4]'>College Section</h2>
            <div className="lg:w-3/4 mx-auto grid lg:grid-cols-3 justify-center items-center gap-6">
                {
                    cards.map(card => <SingleCard
                        key={card.collegeName}
                        card={card} />)
                }
            </div>
        </div>
    );
};

export default Card;