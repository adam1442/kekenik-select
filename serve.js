let mix = require('laravel-mix');
const liveServer = require("live-server");

class Serve {
    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}
     */
    dependencies() {
        return ['live-server'];
    }

    /**
     * Register the component
     *
     * @param {Number} port
     * @param {String} host
     * @param {String} publicDir
     */
    register(params = {port: 1442, host: 'localhost', root: '', watch: ''}) {
        this.params = params;
    }

    /**
     * Boot the component. This method is triggered after the
     * user's webpack.mix.js file has executed.
     */
    boot() {
        if (this.isWatchMode()) {
            liveServer.start(this.params);
        }
    }

    /**
     * Check if webpack is running in watch mode
     *
     * @returns {Boolean}
     */
    isWatchMode() {
        // at the moment it only checks cli flag,
        // might need to also check configuration object
        return process.argv.includes('--watch');
    }

}

mix.extend('serve', new Serve());