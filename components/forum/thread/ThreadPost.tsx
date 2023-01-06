import { ForumPost } from "../../../types/Thread";
import Row from "../../layout/Row";
import styles from '../../../styles/forum.module.css'
import Column from "../../layout/Column";

const ThreadPost = ({
    user,
    content
}: ForumPost) => {
    return (
        <Row style={{
            componentClass: {
                name: 'thread-post',
                src: styles
            }
        }}>
            <Column style={{
                componentClass: {
                    name: 'thread-post-user',
                    src: styles
                }
            }}>
                <a href={`http://localhost:3000/users/${user.slug}`}>{user.name}</a>
            </Column>
            <Column style={{
                componentClass: {
                    name: 'thread-post-content',
                    src: styles
                }
            }}>
                {content}
            </Column>
        </Row>
    )
}

export default ThreadPost;