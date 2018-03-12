var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var cssnano = require('gulp-cssnano');
var rename  = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var del = require('del');
var imagemin = require('gulp-imagemin');
var	pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');


// Автопрефиксор
gulp.task('default', () =>
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

// Подключение Stylus 
gulp.task('stylus', function () {
	return gulp.src('app/stylus/*.styl')
	.pipe(stylus())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

// Сжатие Css в один файл
gulp.task('css-min', function() {
	return gulp.src('app/css/*.css') 
		.pipe(concat('styles.min.css')) 
		.pipe(cssmin()) 
		.pipe(gulp.dest('app/css')); 
});

// Сжатие JS  
gulp.task('scripts', function() {
	return gulp.src([ 
		'app/libs/bootstrap/dist/js/bootstrap.min.js',
		'app/libs/jquery.maskedinput/jquery.maskedinput.min.js',
		'app/libs/wow/wow.min.js',
		'app/libs/datetimepicker/bootstrap-datepicker.js'
		])
		.pipe(concat('libs.min.js')) 
		.pipe(uglify()) 
		.pipe(gulp.dest('app/js')); 
});


// Сжатие фотографий 
gulp.task('img', function() {
	return gulp.src('app/img/**/*') 
		.pipe(cache(imagemin({  
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});



// Сжатие Css 
gulp.task('css-libs', ['stylus'], function() {
	return gulp.src([
		'css/media.css',
		'css/main.css',
		'css/bootstrap.min.css',
		'css/animate.css'
		]) 
		.pipe(cssnano()) 
		.pipe(rename({suffix: '.min'})) 
		.pipe(gulp.dest('app/css')); 
});

// Удаление папки Dist
gulp.task('clean', function() {
	return del.sync('dist'); 
});

// Удаление Cache
gulp.task('clear', function (callback) {
	return cache.clearAll();
})

// Watch-er за Stylus, Html, JS
gulp.task('watch', ['browser-sync', 'css-libs', 'default', 'scripts'], function () {
	gulp.watch('app/stylus/*.styl', ['stylus']);
	gulp.watch('app/css/*.css', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});

// BrowserSync
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


// Build
gulp.task('build', ['clean', 'img', 'stylus', 'css-min', 'scripts'], function() {

	var buildCss = gulp.src('app/css/styles.min.css')
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') 
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') 
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') 
	.pipe(gulp.dest('dist'));

});


