/*
 * DEPENDENCIES
 * ============
 */
const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const myth = require('gulp-myth');
const modifyCssUrls = require('gulp-modify-css-urls');
const pkg = require('./package.json');

/*
 * CONFIG
 * ======
 */
const FILES_CSS         = ['./src/assets/css/**/*.css', './src/components/**/*.css'];
const ASSETS_PATH       = '../server/files/assets/';
const ASSETS_CSS_PATH   = ASSETS_PATH + 'css/';
const BROWSERS          = ['> 0.25%', 'last 3 versions', 'Firefox ESR', 'Opera 11'];

/*
 * PRIVATE TASKS
 * =============
 */

/*
 * Compile CSS
 * --
 * Concat, postprocess with Myth, add sourcemaps, add prefixes
 */
gulp.task('css', function () {
	return gulp.src(FILES_CSS)
		.pipe(concat('bundle.css'))
		.pipe(myth({
			sourcemap: true,
			browsers: BROWSERS
		}))
		.pipe(modifyCssUrls({
			modify: function (url) {
				return url.replace('assets/img', 'assets/' + pkg.version + '/img');
			}
		}))
		.pipe(gulp.dest(ASSETS_CSS_PATH))
    ;
});

/*
 * Minify CSS
 * --
 * Contact, postprocess with Myth, add prefixes and minify with MinifyCSS
 * (MinifyCSS does a better job than Myth minifier)
 */
gulp.task('css.min', function () {
	return gulp.src(FILES_CSS)
		.pipe(concat('bundle.min.css'))
		.pipe(myth({
			browsers: BROWSERS
		}))
		.pipe(minifyCSS())
	    .pipe(gulp.dest(ASSETS_CSS_PATH))
    ;
});

/*
 * DEV TASKS
 * =========
 */

/*
 * Watch files for changes
 */
gulp.task('watch', function () {
	gulp.watch(FILES_CSS, ['css', 'css.min']);
});

/*
 * Default task
 */
gulp.task('default', ['watch', 'css', 'css.min']);

/*
 * Build task for production
 */
gulp.task('build', ['css', 'css.min', 'images', 'icons']);
