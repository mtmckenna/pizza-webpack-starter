# pizza-webpack-starter
This is the Webpack setup I use when futzing around with new JavaScript things.

## Development
1. Install [nvm](https://github.com/creationix/nvm).
1. ```$ git clone -o pizza-webpack-starter -b master --single-branch https://github.com/mtmckenna/pizza-webpack-starter.git pizza-town```
1. `$ cd pizza-town`
1. `$ nvm install`
2. `$ npm install -g webpack webpack-dev-server`
1. `$ npm install`
1. `$ npm start`
1. Visit http://localhost:8080 in your browser.

## Testing
1. `$ npm test`

## Deploying
1. `$ npm build`
1. Deploy your `dist` directory somewhere, like [Netlify](https://netlify.com).
