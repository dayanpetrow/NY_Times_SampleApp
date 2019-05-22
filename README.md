# App

Sample application for interaction with the New York Times Most Popular API

Demo: 
[http://nytimes-sampleapp-dayan.herokuapp.com/](http://nytimes-sampleapp-dayan.herokuapp.com/ "Demo")

**Note: The server is likely asleep. Refresh when the server becomes active (about 30 seconds after the first request).**


## Installation

Clone the project

```bash
git clone https://github.com/dayanpetrow/NY_Times_SampleApp.git
cd NY_Times_SampleApp
```

Install dependencies
```bash
yarn 
(or npm install)
```

Change API key (recommended)
```bash
src/sagas/index.js (line 5)
const KEY = "<YOUR-KEY>";
const FETCH_ARTICLES_URL = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${KEY}`
```

Run project
```bash
yarn start 
(or npm start)
```

## Test

Run tests

```bash
yarn test
(or npm run test)
```

Run tests with coverage
```bash
yarn coverage
(or npm run coverage)
```

![image](https://user-images.githubusercontent.com/26420002/58156521-edde4080-7c7e-11e9-9cea-0a3ef58c195c.png)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Screenshots
Home
![image](https://user-images.githubusercontent.com/26420002/58155674-0188a780-7c7d-11e9-9e4c-44fcc3f2afd9.png)

Article
![image](https://user-images.githubusercontent.com/26420002/58155777-46acd980-7c7d-11e9-8441-9ed30c07c935.png)

Mobile
![image](https://user-images.githubusercontent.com/26420002/58156101-069a2680-7c7e-11e9-8dad-5b298d804613.png)

