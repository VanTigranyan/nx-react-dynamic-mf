import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'remoteobject',
  library: { type: 'var', name: 'remoteobject' },
  exposes: {
    './MyExportedObj': 'libs/mylib/src/lib/mylib.ts',
  },
};
export default config;
