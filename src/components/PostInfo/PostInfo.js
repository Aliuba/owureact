const PostInfo = ({aboutPost}) => {

    const {id, title, userId, body}=aboutPost

    return(

        <div>
            <div> id: {id}</div>
            <div>title: {title}</div>
            <div> userId: {userId}</div>
            <div> body: {body}</div>
        </div>
    )
}

export {PostInfo}