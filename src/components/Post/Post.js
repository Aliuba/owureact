
const Post = ({post, postInfo}) => {

    const {id, title}=post

    return(
        <div>
            <div>{id}---{title}</div>
            <button onClick={()=>postInfo(id)}>postInfo</button>

        </div>
    )
}

export {Post}