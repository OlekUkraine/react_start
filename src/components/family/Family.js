
import FamilyMember from "../memberOfFamily/MemberOfFamily";

const Family = ({itemsSimpsons}) => {
    return (
        <>
            {
                itemsSimpsons.map((person, index) => <FamilyMember memberOfFamily={person} key={index}/>)
            }
        </>
    );
};

export default Family;