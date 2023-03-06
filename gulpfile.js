const gulp = require('gulp')
const del = require('del')

const path_page = '../blacktoolboxlaboratory.github.io/vue'
const path_backup = '../codebase/homepage_vue'

gulp.task('updateHomePage', async function (done) {
  /* clean files */
  await del([path_page + '/'], { force: true })

  /* dist */
  gulp.src(['dist/**/*'])
    .pipe(gulp.dest(path_page))
  /* sitemap */
  gulp.src(['sitemap.xml'])
    .pipe(gulp.dest(path_page))
  done()
})

gulp.task('backupCodebase', async function (done) {
  /* clean files */
  await del([path_backup + '/'], { force: true })

  /* src */
  gulp.src(['src/**/*'])
    .pipe(gulp.dest(path_backup + '/src/'))
  gulp.src(['public/**/*'])
    .pipe(gulp.dest(path_backup + '/public/'))
  /* others */
  gulp.src([
    '.browserslistrc',
    '.eslintrc.js',
    '.gitignore',
    'LICENSE',
    'README.md',
    'package.json',
    'package-lock.json',
    'babel.config.js',
    'gulpfile.js',
    'vue.config.js',
    'sitemap.xml'
  ])
    .pipe(gulp.dest(path_backup))
  done()
})
