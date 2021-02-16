const baseUrl = 'http://localhost:8000';

function makeHeader (type,data,options){
    const header = {
        method : type,
        headers : {
            "Content-Type" : 'application/json',
        },
        ...options
        };
        if (type !=="GET") {
            header.body = JSON.stringify(data);
    }
    return header;
}
function makeRequest (type,url,data,options){
    const headers = makeHeader(type,data,options);
    return fetch (`${baseUrl}${url}`,headers)
    .then(deserialize)
}

function deserialize(res) {
    return res.json();
}
const get = makeRequest.bind(undefined,"GET");
const post = makeRequest.bind(undefined,"POST");
const put = makeRequest.bind(undefined,"PUT");
const remove = makeRequest.bind(undefined,"DELETE");
const patch = makeRequest.bind(undefined,"PATCH");

export default {
    get,
    post,
    put,
    remove,
    patch
}