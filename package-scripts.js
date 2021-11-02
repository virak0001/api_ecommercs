/**
 * Windows: Please do not use trailing comma as windows will fail with token error
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { series } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nest start',
    /**
     * Database scripts
     */
    db: {
      migrate: {
        script: series(
          'nps banner.migrate',
          runFast('./node_modules/typeorm/cli.js migration:run'),
        ),
        description: 'Migrates the database to newest version available',
      },
      revert: {
        script: series(
          'nps banner.revert',
          runFast('./node_modules/typeorm/cli.js migration:revert'),
        ),
        description: 'Downgrades the database',
      },
      seed: {
        script: series(
          'nps banner.seed',
          runFast2('./commands/seed.cli.ts seed'),
        ),
        description: 'Seeds generated records into the database',
      },
      drop: {
        script: runFast('./node_modules/typeorm/cli.js schema:drop'),
        description: 'Drops the schema of the database',
      },
      sync: {
        script: runFast('./node_modules/typeorm/cli.js schema:sync'),
        description: 'Drops the schema of the database',
      },
      setup: {
        script: series('nps db.drop', 'nps db.migrate', 'nps db.seed'),
        description: 'Recreates the database with seeded data',
      },
    },
    /**
     * This creates pretty banner to the terminal
     */
    banner: {
      migrate: banner('migrate'),
      seed: banner('seed'),
      revert: banner('revert'),
      clean: banner('clean'),
    },
  },
};

function banner(name) {
  return {
    hiddenFromHelp: true,
    silent: true,
    description: `Shows ${name} banners to the console`,
    script: runFast(`./commands/banner.ts ${name}`),
  };
}

function copy(source, target) {
  return `copyfiles --up 1 ${source} ${target}`;
}

function copyDir(source, target) {
  return `ncp ${source} ${target}`;
}

function run(path) {
  return `ts-node ${path}`;
}

function runFast(path) {
  return `ts-node-transpile-only ${path}`;
}

function runFast2(path) {
  return `ts-node -r tsconfig-paths/register ${path}`;
}
