module.exports =  {
    // Development settings
    autoprefixer: {
      options: {
        browsers: ['last 30 versions']
      },
      files: {
        'dest/css/style.css': 'dest/css/style.css'
      }
    },
    watch: {
      sass: {
        files: ['src/scss/**/*.{scss,sass}','src/scss/_partials/**/*.{scss,sass}'],
        tasks: ['sass:src', 'autoprefixer']
      },
      livereload: {
        files: ['dest/*.html', '*.php', 'dest/js/**/*.{js,json}', 'dest/css/*.css','dest/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }



};