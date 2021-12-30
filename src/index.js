import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { client } from './apollo/client';
import { ApolloProvider } from '@apollo/client';

import App from './components/App';

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>,
	document.querySelector('.app')
);
