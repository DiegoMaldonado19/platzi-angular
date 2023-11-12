export const environment = {
  production: true,
  API_URL: 'https://api.escuelajs.co'
};


/*
To activate the enviroment prod:

1. import { environment } from './../../environments/environment';

2. private apiUrl = `${environment.API_URL}/api/products`;

in product service

ng build --prod

we need to add the flag of the environment that we will use

*/
