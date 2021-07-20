import useSWR from 'swr'
import axios from 'axios'
import { UserContext } from '@auth0/nextjs-auth0';

async function fetcher(url) {
    const result = await axios.get(url);
    return result.data;
}
export default function DataContainer(props) {
    // const { data, error } = useSWR('./pages/api/data', fetcher)
    const { data, error } = useSWR('../api/data', fetcher)


    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <section className="w-max">
            <div className="mt-24">
                {/* <h1>API DATA</h1>
                <p>
                    {props.user.email}
                </p>
                <ul>
                    {data.map(board => (
                        <li>Student: {board.student} - Interviewer: {board.interviewer}</li>
                    ))}
                </ul> */}
                <div className="flex flex-wrap p-14">
                    {/* Metric Card */}
                    <div className="p-5 mr-10 border-b-4 border-green-600 rounded-lg shadow-xl bg-gradient-to-b from-green-200 to-green-100">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="p-5 bg-green-600 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold text-gray-600 uppercase">Score</h5>
                                <h3 className="text-3xl font-bold">20</h3>
                            </div>
                        </div>
                    </div>

                    {/* Metric Card */}
                    <div className="p-5 mr-10 border-b-4 border-green-600 rounded-lg shadow-xl bg-gradient-to-b from-green-200 to-green-100">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="p-5 bg-green-600 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold text-gray-600 uppercase">Score</h5>
                                <h3 className="text-3xl font-bold">20</h3>
                            </div>
                        </div>
                    </div>

                    {/* Metric Card */}
                    <div className="p-5 mr-10 border-b-4 border-green-600 rounded-lg shadow-xl bg-gradient-to-b from-green-200 to-green-100">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="p-5 bg-green-600 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h5 className="font-bold text-gray-600 uppercase">Score</h5>
                                <h3 className="text-3xl font-bold">20</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}