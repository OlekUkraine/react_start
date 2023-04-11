import Character from "../character/Character";

const Characters = ({itemsRickAndMorty}) => {
    console.log(itemsRickAndMorty)
    return (
        <>
            {
                itemsRickAndMorty.map((person, index) => <Character person={person} key={index}/>)
            }
        </>
    );
};

export default Characters;