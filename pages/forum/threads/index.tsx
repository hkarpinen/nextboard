import type { NextPage } from "next";
import Layout from '../../../components/layout/Layout'

const Forum: NextPage = ({ data }: any) => {
    return (
        <Layout title="Nextboard | Threads">
            {data.map((thread: any) => {
                let url = `http://localhost:3000/forum/threads/${thread.tid}`;
                return (
                    <div>
                        <a href={url}>{thread.title}</a>
                    </div>
                )
            }
            )}
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/forum/threads');
    const data = await res.json()
    return { props: { data }}
}

export default Forum;