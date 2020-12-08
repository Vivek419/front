import axios from 'axios';
const BaseUrl='http://localhost:3080'

const postdata = async (url,body) => {
    const response = await axios.post(`${BaseUrl}/${url}`,body);
    debugger
    const result = response
    console.log(result)
    return result
};
const getdata = async (url) => {
    alert("hy")
    const response = await axios.get(`${BaseUrl}/${url}`);
    console.log(response)
    const result = response
    return result
}
export { postdata, getdata }