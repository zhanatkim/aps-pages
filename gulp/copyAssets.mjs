import gulp from 'gulp';

const copySvg = () => gulp.src('source/img/**/*.svg', {base: 'source'}).pipe(gulp.dest('build'));

const copyImages = () => gulp.src('source/img/**/*.{png,jpg,jpeg,webp,avif}', {base: 'source'}).pipe(gulp.dest('build'));

const copy = () =>
  gulp
      .src(['source/**.html', 'source/fonts/**', 'source/img/**', 'source/**.php', 'source/PHPMailer/**.php', 'source/favicon/**', 'source/data/**'], {
        base: 'source',
      })
      .pipe(gulp.dest('build'));

export {copy, copyImages, copySvg};
