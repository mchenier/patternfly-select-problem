import ReactDOM from 'react-dom';
import Test from './components/Test';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// eslint-disable-next-line no-restricted-globals

const AppProvider = () => <Test />;

ReactDOM.render(<AppProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();
