import axios from 'axios';

export interface Employment {
  title: string;
  key_skill: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Address {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates;
}

export interface CreditCard {
  cc_number: string;
}

export interface Subscription {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

export interface User {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: CreditCard;
  subscription: Subscription;
}

export async function fetchRandomUsers(): Promise<User[]> {
  return axios
    .get<User[]>('https://random-data-api.com/api/users/random_user?size=10')
    .then(({data}) => {
      return data;
    });
}