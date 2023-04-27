import React, {Component} from 'react';
import {Comments} from "../component/comments/Comments";

class CommentPage extends Component {
    render() {
        return (
            <div className={'Page'}>
                <Comments/>
            </div>
        );
    }
}

export default CommentPage;