// This shows a full config file!
module.exports = {
  watch: {
      files: ['src/scss/*.scss', 'src/jade/*.jade'],
      tasks: ['sass', 'jade']
  },
  sass: {
      dev: {
          files: {
              'dest/css/style.css': 'src/scss/style.scss'
          }
      }
  },
  browserSync: {
      dev: {
          bsFiles: {
              src : 'dest/*.html'
          },
          options: {
              watchTask: true,
              server: './dest'
          }
      }
  }
};