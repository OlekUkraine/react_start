

const Character = ({person}) => {
    const {id,name,status,species,gender,image} = person;
    return (
            <div className='block-person'>
                <div><h3>Name-{name} id-{id}</h3></div>
                <div><p>status:{status}  species:{species}</p> <p>gender:{gender}</p></div>
                <img src={image} alt={name}/>
            </div>
    );
};

export default Character;