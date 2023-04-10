

const Person = ({person}) => {
    return (
            <div className='block-person'>
                <h2>{person.name} is {person.age} years old</h2>
                <img src={person.photo} alt={person.surname}/>
                <h3>{person.surname}</h3>
                <p>{person.info}</p>
            </div>
    );
};

export default Person;