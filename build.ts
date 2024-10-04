import * as esbuild from 'esbuild';
import { copyFile, writeFile } from 'fs/promises';

(async () => {
    await esbuild.build({
        entryPoints: ['source/index.ts'],
        bundle     : true,
        minify     : true,
        sourcemap  : true,
        outdir     : 'lib',
    });

    await copyFile('source/view/index.css', 'lib/index.css');

    await writeFile('lib/index.html', `
<!doctype html>
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Factory Calculator</title>
<link rel="icon" href="data:,">
<link rel="stylesheet" href="index.css"/>
</head>

<body>

<script src="index.js"><script>
<script>

</script>
</body>
</html>
        `.replaceAll('\n', '').trim(), 'utf-8');
})();
