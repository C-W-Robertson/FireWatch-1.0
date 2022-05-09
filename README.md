# FireWatch 1.0

This web app is designed to display data pulled from the California Department of Forestry and Fire Protection - 
or "CAL FIRE." Cal Fire publishes major fire incident information on its webpage, and I have found it to be the most 
accurate aggregator of said info.

Unfortunately, it is not friendly if you are on a mobile device or have low bandwith available, 
both of which I have personally experienced. Trying to find your position on a map that is meant for desktop usage, 
then clicking on an incident icon to read more info can be almost impossible in some situations. This site is designed 
to minimize those issues, by stripping the incident information down to a bare minimum.

Cal Fire publishes incident data as a JSON here: https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=false. 
(Please note, the published link on Cal Fire's site is set to "inactive=true", and thus shows recent incidents that are 
no longer active. I have chosen to change the settings to "false," so as to only get active incidents.)

While working on this project, I discovered that the JSON data was protected by 'CORS' (Cross-Origin Resource Sharing) 
rules, and was inaccessible through normal means. Research led to several possible suggestions, none of which I found 
were feasible in this version of the web app. As I believe there is value in this app, I will continue to develop it 
beyond the scope of my class assignment.

The current version of FireWatch is a mock-up, pulling data internally instead of from an external source. The data 
is formatted exactly as it is on CalFire's site, and matches a real incident that was occuring during development. 
Once importing external data is possible, the results of each incident will be displayed on their own "card," as seen 
on the home page. As fires are extinguished, they are changed to "inactive=true" by Cal Fire, and drop off the FireWatch site.
The site is responsive, and will resize according to the screen dimensions of the device.

I have used the component architecture found in several sources from throughout our course - the routing and state assignment, 
the various navbar assignments, several of the textbook examples, and Bootstrap for the CSS.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
