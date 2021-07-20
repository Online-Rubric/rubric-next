import axios from 'axios'
import useSWR from 'swr'

const baseUrl = 'https://rubric-api-project.herokuapp.com/';
const tokenUrl = baseUrl + '/api/token/';
const refreshUrl = tokenUrl + 'refresh/';
export const apiUrl = baseUrl + '/api/v1/rubrics/';

// get a JSON Web Token from server
export async function getToken(values) {

    const response = await axios.post(tokenUrl, values);

    const refreshResponse = await axios.post(refreshUrl, { refresh: response.data.refresh });

    return refreshResponse.data.access;
}

// expose useRubrics with token enclosed
export async function fetcher(values) {

    const token = await getToken(values);

    return {
        useRubrics: () => useRubrics(token),
    }
}


function useRubrics(token) {
    const { data, error, } = useSWR([apiUrl, token], fetchWithToken);
    
    return {
        rubrics: data,
        error,
        createRubric: (values) => createRubric(values, data, mutate, token),
    }
}
async function createRubric(values, data, mutate, token) {

    const rubricInfo = Rubic.fromValues(values);

    rubricInfo.student += '...'; // Add the ... to show loading state

    const updatedRubrics = [newRubric, ...data];

    mutate(updatedRubrics, false);

    await postWithToken(token, values);

    mutate();
}