module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'dest/js',
            ext: '.min.js'
        }]
    }
};