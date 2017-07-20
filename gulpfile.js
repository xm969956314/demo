
var gulp=require("gulp");
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var cssnano=require("gulp-cssnano");
var htmlmin=require("gulp-htmlmin");



gulp.task("demo",function(){
	console.log(123)
});

gulp.task("script",function(){
	gulp.src(["dem.js","demo.js"])
	.pipe(concat("./de.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./dist"))
});

gulp.task("style",function(){
	gulp.src(["a1.css","a2.css"])
	.pipe(concat("./de.css"))
	.pipe(cssnano())
	.pipe(gulp.dest("./dist"))
});

gulp.task("script",function(){
	gulp.src(["demo.html"])
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest("./dist"))
});
