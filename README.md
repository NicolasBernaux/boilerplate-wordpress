# Boilerplate based on [Bedrock](https://roots.io/bedrock/)
## Requirements

* PHP >= 7.1
* Composer - [Installer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
* Node - [Installer](https://nodejs.org/en/)
* NPM - [Installer](https://www.npmjs.com/)

## Installation
1. Install dependances
    ```sh
    $ composer install
    $ npm install
    ```
2. The following tasks will then be available:
    ```sh
    $ npm run dev
    $ npm run build
    ```

3. Update environment variables in the .env file
  * Database variables
    * `DB_NAME` - Database name
    * `DB_USER` - Database user
    * `DB_PASSWORD` - Database password
    * `DB_HOST` - Database host
    * Optionally, you can define `DATABASE_URL` for using a DSN instead of using the variables above (e.g. `mysql://user:password@127.0.0.1:3306/db_name`)
  * `WP_ENV` - Set to environment (`development`, `staging`, `production`)
  * `WP_HOME` - Full URL to WordPress home (https://example.com)
  * `WP_SITEURL` - Full URL to WordPress including subdirectory (https://example.com/wp)
  * `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
    * Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command)
    * Generate with [our WordPress salts generator](https://roots.io/salts.html)
  * `THEME_DIRECTORY` - Name of the theme directory

4. Set the document root on your webserver to Bedrock's `web` folder: `/path/to/site/web/`

5. Access WordPress admin at `https://example.com/wp/wp-admin/`