import type { NextPage } from "next";
import ForumThread from "../../../components/forum/thread/Thread";
import Layout from '../../../components/layout/Layout'
import { ForumPost } from "../../../types/Thread";

const Forum: NextPage = ({ data }: any) => {
    const {
      slug,
      author,
      content,
      activity,
      comments
    } = data;

    if(data) {
      return (
        <Layout title="Nextboard | Forum">
          <ForumThread 
            slug={slug}
            author={author}
            content={content}
            activity={activity}
            comments={comments}
          />
        </Layout>
      )
    }

    return (
        <Layout title="Nextboard | Forum">
          <p>Thread Does Not Exist</p>
        </Layout>
    )
}
  
  // This gets called on every request
  export async function getServerSideProps(context: any) {
    const { tid }= context.query;
    const res = await fetch(`http://localhost:3000/api/forum/threads/${tid}`);
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default Forum;