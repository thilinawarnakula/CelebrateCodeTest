import api from '../../services/api';

export const getUpComingList = async (
    freshPull,
    offset,
    limit,
    getUpComingListSuccess,
    getUpComingListError,
) => {
  try {
    const response = await api.get(`/launches/upcoming?offset=${offset}&limit=${limit}&id=true`);
    console.log("getUpComingList -- : Success");
    getUpComingListSuccess( {
      freshPull,
      resultData:response
    });
  } catch (error) {
    console.error("getUpComingList ERROR -- : ",error);
    getUpComingListError(error);
  }
};
