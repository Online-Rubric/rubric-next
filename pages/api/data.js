// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const boards = [
    {
        student: 'Jane Doe',
        interviewer: 'Spam Eggerton',
        date: '2021-07-19',
        start_time: '14:00',
        end_time: '15:00',
        challenge: 'Linked List Odometer',
    },
]
export default function boardsAPI(req, res) {
    res.status(200).json(boards)
}