const mappings = {
  accounting: null,
  airport: 'travel',
  amusement_park: 'entertainment',
  aquarium: null,
  art_gallery: null,
  atm: null,
  bakery: 'food',
  bank: null,
  bar: 'entertainment',
  beauty_salon: null,
  bicycle_store: null,
  book_store: null,
  bowling_alley: 'entertainment',
  bus_station: 'transport',
  cafe: 'food',
  campground: 'travel',
  car_dealer: null,
  car_rental: null,
  car_repair: 'car',
  car_wash: 'car',
  casino: null,
  cemetery: null,
  church: null,
  city_hall: null,
  clothing_store: 'clothing',
  convenience_store: 'food',
  courthouse: null,
  dentist: 'health',
  department_store: 'household',
  doctor: 'health',
  electrician: 'household',
  electronics_store: 'tech',
  embassy: null,
  fire_station: null,
  florist: null,
  funeral_home: null,
  furniture_store: 'household',
  gas_station: 'car',
  gym: 'health',
  hair_care: 'barber',
  hardware_store: null,
  hindu_temple: null,
  home_goods_store: null,
  hospital: 'health',
  insurance_agency: null,
  jewelry_store: null,
  laundry: null,
  lawyer: null,
  library: null,
  liquor_store: null,
  local_government_office: null,
  locksmith: null,
  lodging: null,
  meal_delivery: 'food',
  meal_takeaway: 'food',
  mosque: null,
  movie_rental: 'entertainment',
  movie_theater: 'entertainment',
  moving_company: 'relocation',
  museum: 'entertainment',
  night_club: 'entertainment',
  painter: null,
  park: null,
  parking: 'car',
  pet_store: 'pet',
  pharmacy: 'health',
  physiotherapist: 'health',
  plumber: 'household',
  police: null,
  post_office: null,
  real_estate_agency: null,
  restaurant: 'food',
  roofing_contractor: null,
  rv_park: null,
  school: 'education',
  shoe_store: 'clothing',
  shopping_mall: null,
  spa: null,
  stadium: 'entertainment',
  storage: null,
  store: null,
  subway_station: 'transport',
  supermarket: 'food',
  synagogue: null,
  taxi_stand: 'transport',
  train_station: 'transport',
  transit_station: 'transport',
  travel_agency: 'travel',
  veterinary_care: 'pet',
  zoo: 'entertainment',
};

export default mappings;

export function applyPlaceTypeMappings(placeTypes: string[]): Set<string> {
  return new Set(
    placeTypes
      .map((placeType) => mappings[placeType])
      .filter((category) => !!category)
  );
}
