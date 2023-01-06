import { ForumPost } from "../../../types/Thread";
import UnorderedList from "../../html/UnorderedList";
import styles from '../../../styles/forum.module.css'
import ThreadPost from "./ThreadPost";

interface Props {
    posts: {
        original: ForumPost,
        replies: ForumPost[]
    }
}

const ForumThreadPosts = ({ posts }: Props) => {
    const { user, content, likes } = posts.original;
    return (
        <UnorderedList style={{
            componentClass: {
                name: 'forum-thread-posts',
                src: styles
            }
        }}>
            <li>
                <ThreadPost
                    user={user}
                    content={content} 
                    likes={likes}                />
            </li>
            {posts.replies.map((post) => {
                const { user, content } = post;
                return <li>
                    <ThreadPost 
                        user={user}
                        content={content} 
                        likes={likes}                    />
                </li>
            })}
        </UnorderedList>
    )
}

export default ForumThreadPosts;