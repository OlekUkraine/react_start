import React, {Component} from 'react';

import Posts from "../component/posts/Posts";


class PostPage extends Component {
    render() {
        return (
            <div className={'Page'}>
                <Posts/>
            </div>
        );
    }
}

export default PostPage;