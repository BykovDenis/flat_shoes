module.exports = {
    files: ['src/js/*.js', 'src/scss/*.scss', 'src/jade/*.jade', 'dest/css/*.css', 'dest/*.html'],
    tasks: ['jshint', 'uglify', 'sass:dev', 'jade', 'autoprefixer'],
    options: {
        spawn: false,
        livereload: true
    }
};