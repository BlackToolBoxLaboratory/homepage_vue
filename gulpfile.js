const gulp = require('gulp');

const path_page = '../blacktoolboxlaboratory.github.io/vue';
var path_backup = '../codebase/homepage_vue';

gulp.task('updateHomePage', function(done){
  /* dist */
  gulp.src(['dist/**/*'])
    .pipe(gulp.dest(path_page));
  done();
});

gulp.task('backupCodebase', function(done) {  
  /* src */
  gulp.src(['src/**/*'])
    .pipe(gulp.dest(path_backup + '/src/'));
  gulp.src(['public/**/*'])
    .pipe(gulp.dest(path_backup+'/public/'));
  /* others */        
  gulp.src([
      'LICENSE',
      'README.md',
      'package.json',
      'package-lock.json',
      'gulpfile.js',
      'index.html',
      'favicon.ico',
    ])
    .pipe(gulp.dest(path_backup));
  done();
});