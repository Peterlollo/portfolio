import makeStore from './src/store';
import startServer from '../server/server';

export const store = makeStore();
startServer(store);