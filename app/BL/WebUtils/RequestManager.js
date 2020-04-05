import axios from 'axios';

const APIURL = 'https://api.jsonbin.io/b/';
const EducationPlacesBinID = '5e89abc38841e979d0fe0830';
const AbiturientsBinID = '5e89fb6441019a79b61e0ae4';

const MakeRequest = (binID, type, data) => axios.request({
  baseURL: APIURL + binID,
  method: type,
  data,
  headers: {
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line max-len
const EducationPlacesRequest = (requestType, data) => MakeRequest(EducationPlacesBinID, requestType, data);
const AbiturientsRequest = (requestType, data) => MakeRequest(AbiturientsBinID, requestType, data);

const RequestManager = {
  EducationPlacesRequest,
  AbiturientsRequest,
};

export default RequestManager;
