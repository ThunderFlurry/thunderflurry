/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import gaze from 'gaze';
import replace from 'replace';
import Promise from 'bluebird';
import mkdirp from 'mkdirp';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({ watch } = {}) {
  const ncp = Promise.promisify(require('ncp'));

	mkdirp('build/public', function (err) {
		if (err) console.error(err);
	});

	mkdirp('build/content', function (err) {
		if (err) console.error(err);
	});

  await Promise.all([
    ncp('src/tenants/app/public', 'build/public/app'),
    ncp('src/tenants/app/content', 'build/content/app'),
    ncp('package.json', 'build/package.json'),
  ]);

  replace({
    regex: '"start".*',
    replacement: '"start": "node server.js"',
    paths: ['build/package.json'],
    recursive: false,
    silent: false,
  });

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('src/tenants/app/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
    });
    watcher.on('changed', async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/tenants/app/content/').length);
      await ncp(`src/tenants/app/content/${relPath}`, `build/content/app/${relPath}`);
    });
  }
}

export default copy;
