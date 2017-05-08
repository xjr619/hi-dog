'use strict';
/*1.less文件的压缩 编译合并
  2.js合并压缩混淆
  3.image复制
  4.HTML压缩
*/
//载入gulp包和其他插件包，因为gulp提供了一些API
 var gulp=require('gulp');
 var less=require('gulp-less');
 var cssnano=require('gulp-cssnano');
 var concat=require('gulp-concat');
 var uglify=require('gulp-uglify');
 var htmlmin=require('gulp-htmlmin');
 var browserSync=require('browser-sync');
 var reload=browserSync.reload
 //1.less文件的压缩 编译合并 但是合并没必要，一般css预处理导包就可以了
 gulp.task('style',function(){
 	gulp.src('src/styles/*.css')
 	.pipe(cssnano())
 	.pipe(gulp.dest('dist/styles'))
 	.pipe(browserSync.reload({
 		stream:true
 	}));
 });
 //2.js合并 压缩混淆
 gulp.task('script',function(){
    gulp.src('src/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
   .pipe(browserSync.reload({
 		stream:true
 	}));
 });
 // 3.image复制
 gulp.task('image',function(){
 	gulp.src('src/images/*.*')
 	.pipe(gulp.dest('dist/images'))
 	.pipe(browserSync.reload({
 		stream:true
 	}));

 });
 //4.HTML压缩
 gulp.task('html',function(){
 	gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace:true,
    	removeComments:true,
    }))
 	.pipe(gulp.dest('dist'))
 	.pipe(browserSync.reload({
 		stream:true
 	}));

 });
 gulp.task('html2',function(){
  gulp.src('src/html/*.html')
    .pipe(htmlmin({collapseWhitespace:true,
      removeComments:true,
    }))
  .pipe(gulp.dest('dist/html'))
  .pipe(browserSync.reload({
    stream:true
  }));

 });

 gulp.task('serve',function(){
      browserSync({server: {
      	baseDir:"./",
      },

      }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
	});
      gulp.watch('src/styles/*.css',['style']);
      gulp.watch('src/scripts/*.js',['script']);
      gulp.watch('src/*.html',['html']);
      gulp.watch('src/html/*.html',['html2']);
      gulp.watch('src/images/*.*',['image']);

 });