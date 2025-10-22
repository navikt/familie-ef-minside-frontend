import axios from 'axios';
import { Toggles } from './toggles';

const hentToggles = (settToggles: (toggles: Toggles) => void) => {
  return axios
    .get(`familie/alene-med-barn/minside/api/featuretoggle`, {
      withCredentials: true,
    })
    .then((response: { data: Toggles }) => {
      settToggles(response.data);
    });
};

export default hentToggles;
