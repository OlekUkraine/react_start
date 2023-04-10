import Person from "../person/person";

const Family = ({items}) => {
    return (
        <>
            {
                items.map((person, index) => <Person person={person} key={index}/>)
            }
        </>
    );
};

export default Family;