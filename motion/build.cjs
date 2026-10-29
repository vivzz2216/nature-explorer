const path=require('path');
const esbuild=require('esbuild');
esbuild.buildSync({entryPoints:[path.join(__dirname,'fireflies.jsx')],bundle:true,minify:true,format:'iife',platform:'browser',target:['es2020'],define:{'process.env.NODE_ENV':'"production"'},outfile:path.join(__dirname,'../assets/fireflies-player.js'),jsx:'automatic'});
