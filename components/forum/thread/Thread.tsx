import { ForumThread } from "../../../types/Thread";
import styles from '../../../styles/forum.module.css'
import Column from "../../layout/Column";
import UnorderedList from "../../html/UnorderedList";
import ThreadPost from "./ThreadPost";
import ForumThreadPosts from "./ThreadPosts";
import HoverableComponent from "../../styled/HoverableComponent";
import { ThemeContext } from "../../../context/ThemeProvider";

const ForumThread = ({
    slug,
    author,
    content,
    activity,
    comments
}: ForumThread) => {
    return (
        <Column style={{
            componentClass: {
                name: 'forum-thread',
                src: styles
            }
        }}>
            <p>{content.title}</p>
            <UnorderedList style={{
                componentClass: {
                    name: 'forum-thread-metadata',
                    src: styles
                }
            }}>
                <li>
                    <ThemeContext.Consumer>
                        {value => {
                            return (
                                <HoverableComponent style={{
                                    componentClass: {
                                        name: 'forum-thread-author',
                                        src: styles
                                    },
                                    state: {
                                        active: {
                                            color: value.quaternary
                                        },
                                        fallback: {}
                                    }
                                }}>
                                    <a href={`http://localhost:3000/users/${author.userSlug}`}>
                                        {author.name}
                                    </a>
                                </HoverableComponent>
                            )
                        }}
                    </ThemeContext.Consumer>
                </li>
                <li>{activity.createdAt.toString()}</li>
            </UnorderedList>
        </Column>
    )
}

export default ForumThread;