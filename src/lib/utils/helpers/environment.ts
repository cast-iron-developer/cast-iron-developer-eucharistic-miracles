import { env } from '$env/dynamic/private';

export const isDevEnvironment = (): boolean => {
	return Boolean(env.USE_DEV).valueOf();
};

export const isProdEnvironment = (): boolean => {
	return Boolean(env.USE_PROD).valueOf();
};
export const useDebug = (): boolean => {
	return Boolean(env.USE_DEBUG).valueOf();
};
