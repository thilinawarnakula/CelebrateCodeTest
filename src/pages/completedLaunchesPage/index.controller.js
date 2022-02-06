import api from '../../services/api';

export const getCompletedList = async (
    freshPull,
    offset,
    limit,
    getCompletedListSuccess,
    getCompletedListError,
) => {
  try {
    const response = await api.get(`/launches/past?offset=${offset}&limit=${limit}&id=true`);
    console.log("getCompletedList -- : Success");
    getCompletedListSuccess( {
      freshPull,
      resultData:response
    });
  } catch (error) {
    console.error("getCompletedList ERROR -- : ",error);
    getCompletedListError(error);
  }
};
