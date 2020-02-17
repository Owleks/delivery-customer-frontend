import axious from 'axios';
import {ENVIRONMENT} from '../environments/environment';

export default axious.create({
  baseURL: ENVIRONMENT.API
});
