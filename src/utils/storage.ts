import storage, { wxAdapter } from 'vstores';

export default storage.create<{
  token: string;
  adapter: wxAdapter;
  [key: string]: any;
}>({
  formatKey: (key) => `${PARSEC_APP_STORAGE_PREFIX}-${key}`,
});
