import config from '@/config/env-base.config';
import { ENUM_ENVIRONMENT_VARIABLES } from '@/enum/env-variables';
import React from 'react';

export const isProduction =
	config.ENVIRONMENT === ENUM_ENVIRONMENT_VARIABLES.PRODUCTOIN;

const ReactQueryDevtoolsProduction = React.lazy(() =>
	import('@tanstack/react-query-devtools/production').then((d) => ({
		default: d.ReactQueryDevtools,
	}))
);

export default ReactQueryDevtoolsProduction;
