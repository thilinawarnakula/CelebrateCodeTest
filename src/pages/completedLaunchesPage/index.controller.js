import api from '../../services/api';

export const getCompletedList = async (
    freshPull,
    offset,
    limit,
    getCompletedListSuccess,
    getCompletedListError,
) => {
  try {
    const response = await api.get(`/launches/past?offset=${offset}&limit=${limit}`);
    console.log("getCompletedList -- : ",response);
    getCompletedListSuccess( {
      freshPull,
      resultData:response
    });
  } catch (error) {
    console.error("getCompletedList ERROR -- : ",error);
    getCompletedListError(error);
  }
};
