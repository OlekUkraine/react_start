import './Post.css'

const Post = ({post, setOpenPosts}) => {
    const {id, title} = post;

    return (
        <div className={'post-block'}>
            <div>
                <p>ID: <strong>{id}</strong></p>
                <p>TITLE: <strong>{title}</strong></p>
            </div>

            <button onClick={() => {
                setOpenPosts(post)
            }}>All post
            </button>

        </div>
    );
};

export default Post;