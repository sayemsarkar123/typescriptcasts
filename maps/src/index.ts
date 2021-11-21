import { Company } from './Company';
import { Map } from './Map';
import { User } from './User';

const user = new User();
const company = new Company();
const map = new Map('map', {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
});

map.addMarker(user);
map.addMarker(company);
