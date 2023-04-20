import {Link} from "react-router-dom";

import './Comment.css';


const Comment = ({comment}) => {
    const {postId, id, name, email} = comment;

    return (
        <div className={'Comment'}>
                <Link to={postId.toString()} state={{...comment}}>
                <div>postId: {postId}</div>
                <div>id: {id} - name: {name}</div>
                <div>email: {email}</div>
            </Link>
        </div>
    );
};

export default Comment;