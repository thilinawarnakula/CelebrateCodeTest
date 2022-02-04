
import Api from './Api';

const BASE_URL = 'https://api.spacexdata.com/v3/';

const apiInstance = new Api(BASE_URL);

export default apiInstance.axios;
