const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['server/server.jsx'],
  outfile: 'build/server.js',
  platform: 'node',
  watch: true,
}).catch(() => process.exit(1)); // En cas d'erreur lors de la compilation, le processus sera terminé avec un code d'erreur 1