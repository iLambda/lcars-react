import * as esbuild from 'esbuild'

/* Build the fonts */
await esbuild.build({
    /* The entrypoint */
    entryPoints: ['./dist/fix/fonts.css'],
    bundle: true,
    sourcemap: true,
    /* Output in dist, and mimic folder structure */
    outdir: '.',
    outbase: '.',
    allowOverwrite: true,
    /* Treat font files */
    loader: {
        '.woff': 'dataurl',
        '.woff2': 'dataurl',
        '.ttf': 'dataurl',
        '.eot': 'dataurl',
    },
    /* Remap paths */
    tsconfig: './tsconfig.json',
    plugins: []
})

/* We're done ! */
console.log("Successfully bundled the fixtures.");