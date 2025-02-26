import { env } from '$env/dynamic/public';

export const useDebug = (): boolean => {
	return Boolean(env.PUBLIC_USE_DEBUG).valueOf();
};
