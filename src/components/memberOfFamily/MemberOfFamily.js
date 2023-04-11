
const MemberOfFamily = ({memberOfFamily}) => {
    const {name, photo, info} = memberOfFamily

    return (
            <div className='block-person'>
                <h3>{name}</h3>
                <img src={photo} alt={name}/>
                <p>{info}</p>
            </div>
    );
};

export default MemberOfFamily;