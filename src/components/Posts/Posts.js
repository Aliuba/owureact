import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import {Post} from "../Post/Post";
import {PostInfo} from "../PostInfo/PostInfo";

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [aboutPost, setPostInfo] = useState('')

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
    }, [])

    const postInfo = (id) => {
        postService.getById(id).then(value => value.data).then(value => setPostInfo(value))
    }

    return (
        <div>
            <h3>Post Info</h3>
            {aboutPost && <PostInfo aboutPost={aboutPost}/>}

            <hr/>

            <h3>Posts</h3>
            {posts.map(value => <Post key={value.id} post={value} postInfo={postInfo}/>)}
        </div>

    )

}

export {Posts}