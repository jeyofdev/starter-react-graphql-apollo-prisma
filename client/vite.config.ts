import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		server: {
			proxy: {
				api: process.env.VITE_GRAPHQL_URL,
			},
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@components': `${path.resolve(__dirname, 'src/components')}`,
				'@hooks': `${path.resolve(__dirname, 'src/hooks')}`,
				'@images': `${path.resolve(__dirname, 'src/assets/images')}`,
				'@utils': `${path.resolve(__dirname, 'src/utils')}`,
				'@context': `${path.resolve(__dirname, 'src/context')}`,
				'@graphql': `${path.resolve(__dirname, 'src/graphql')}`,
			},
		},
	});
};
