import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-login',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
