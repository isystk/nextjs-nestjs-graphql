import { ApolloClient, InMemoryCache } from '@apollo/client';
import Env from '../common/env/'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: Env.externalEndpointUrl,
});

export default client;