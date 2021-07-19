import useSWR from 'swr'
import axios from 'axios'

async function fetcher(url) {
    const result = await axios.get(url);
    return result.data;
}
export default function DataContainer() {
    // const { data, error } = useSWR('./pages/api/data', fetcher)
    const { data, error } = useSWR('../api/data', fetcher)


    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
            <section>
                <h1>API DATA</h1>
                <ul>
                    {data.map(board => (
                        <li>Student: {board.student} - Interviewer: {board.interviewer}</li>
                    ))}
                </ul>
            </section>
    )
}