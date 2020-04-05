import RequestManager from "../WebUtils/RequestManager";

const GetEducationPlaces = () => new Promise((resolve, reject) => {
  RequestManager.EducationPlacesRequest('GET')
    .then((res) => {
      return resolve(res.data.higherEducationPlaces)
    }, (rejRes) => reject(rejRes));
});

const AddEducationPlace = (educationPlaceInfo) => new Promise((resolve, reject) => {

});

const EducationPlacesProvider = {
  GetEducationPlaces,
  AddEducationPlace,
};

export default EducationPlacesProvider;
