import axios from 'axios';

const APIURL = 'https://api.jsonbin.io/b/';
const EducationPlacesBinID = '5e89abc38841e979d0fe0830';

const MakeRequest = (binID, type, data) => {
    return axios.request({
        baseURL: APIURL + binID,
        method: type,
        data: data,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};

const EducationPlacesRequest = (requestType, data) => MakeRequest(EducationPlacesBinID, requestType, data);

const RequestManager = {
    EducationPlacesRequest,
    // AbiturientsRM,
};

export default RequestManager;
