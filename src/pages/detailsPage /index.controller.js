import api from '../../services/api';

export const getFlighData = async (
    flightId,
    getFlighDataSuccess,
    getFlighDataError,
) => {
  try {
    const response = await api.get(`/launches/${flightId}`);
    console.log("getFlighData -- : ",response);
    getFlighDataSuccess(response);
  } catch (error) {
    console.error("getFlighData ERROR -- : ",error);
    getFlighDataError(error);
  }
};
