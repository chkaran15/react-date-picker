import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/home';
import ReactQueryDevtoolsProduction, {
	isProduction,
} from './tools/tanstack/tanstack-query-devtools';
import { Suspense } from 'react';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<HomePage />
			</div>

			{isProduction && (
				<Suspense fallback={null}>
					<ReactQueryDevtoolsProduction />
				</Suspense>
			)}
		</QueryClientProvider>
	);
}

export default App;
