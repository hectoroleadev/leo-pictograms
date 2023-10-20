export const getEnvVariables = () => {
  const BASE_URL = import.meta.env.BASE_URL || '';
  const HASH_ROUTER = import.meta.env.VITE_HASH_ROUTER;
  const IS_HASH_ROUTER = HASH_ROUTER === 'true';

  return {
    HASH_ROUTER,
    BASE_URL,
    IS_HASH_ROUTER,
    URL_BASE_ROUTER: IS_HASH_ROUTER ? '' : BASE_URL,
  };
};
