import React from 'react';

import {Comments} from "../../components";
import {CommentForm} from "../../components";
import './CommentsPage.css';

const CommentsPage = () => {
    return (
        <div className={'CommentsPage'}>
            <CommentForm/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};