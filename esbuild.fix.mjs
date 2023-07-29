import * as esbuild from 'esbuild';
import { join, relative, sep, dirname } from 'node:path';
import glob from 'tiny-glob';

const matchExts = (exts) => new RegExp(String.raw`\.(${exts.join('|')})$`)
const fontExtensions = ['woff', 'woff2', 'ttf', 'eot']

const remap = () => {
    /* Return plugin */
    return ({
        name: 'remap',
        setup: async (build) => {
            /* Prepare cache */
            let rootPath = null;
            /* Prepare resolve */
            build.onResolve({ filter: matchExts(fontExtensions) }, async (args) => {
                /* If rootPath not get */
                if (rootPath === null) {
                    /* Find the root path */
                    const result = await build.resolve('./package.json', {
                        kind: 'import-statement',
                        resolveDir: '.',
                    });
                    /* Error ? */
                    if (result.errors.length > 0) {
                        throw "Could not find package.json";
                    }
                    /* We good */
                    rootPath = dirname(result.path);    
                }
                /* Get relative path to root path */
                const relativeDir = relative(rootPath, args.resolveDir).split(sep);
                /* Remove dist part */
                if (relativeDir[0] === 'dist') {
                    relativeDir.shift();
                }                
                /* Join */
                return { path: join(rootPath, ...relativeDir, args.path) }
            })
        }
    });
}

/* Build time */
try {
    /* Inline assets */
    await esbuild.build({
        /* The entrypoint */
        entryPoints: await glob('./dist/fix/fonts/**/*.font.js'),
        bundle: true,
        sourcemap: true,
        allowOverwrite: true,
        /* Output in dist, and mimic folder structure */
        outdir: '.',
        outbase: '.',
        /* Treat font files */
        loader: fontExtensions.reduce((o, e) => ({ ...o, [`.${e}`]: 'dataurl' }), {}),
        /* Remap paths */
        plugins: [remap()]
    });
}
catch(e) { 
    console.error(e); 
    process.exit(1); 
}

/* Done ! */
console.log('Successfully inlined static assets.');
