import { ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import client from './libs/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
