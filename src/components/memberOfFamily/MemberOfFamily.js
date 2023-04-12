import '../../modules/MemberOfFamily.css';

const MemberOfFamily = ({memberOfFamily}) => {
    const {name, surname, photo, info} = memberOfFamily

    return (
            <div className='Block-person'>
                <h3>{name} {surname}</h3>
                <img src={photo} alt={name}/>
                <p>{info}</p>
            </div>
    );
};

export default MemberOfFamily;