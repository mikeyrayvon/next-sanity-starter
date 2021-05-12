1. `cd studio && yarn && sanity init` to create sanity database and install deps
2. update `project.name` in `studio/sanity.json`
2. update initial `siteTitle` and `siteUrl` values in `studio/schemas/documents/siteConfig.js`
3. `cd ../web` and create `.env.development.local` with api values from `studio/sanity.json`
4. `yarn` to install deps
