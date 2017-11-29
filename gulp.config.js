module.exports = function () {
    var config = {
        dist: 'dist/',
        src: 'src/',
        sass: {
            src: './src/sass/',
            input: './src/sass/style.scss',
            output: './dist/css/',
            watch: ['./src/sass/**/*.sass', './src/sass/**/*.scss']
        },
        js: {
            src: './src/js/',
            input: './src/js/**/*.js',
            lint: ['./src/js/**/*.js', '!./src/js/lib/**/*.js', '!./src/js/extend/url.js'],
            output: './dist/js/',
            watch: ['./src/js/**/*.js']
        },
        img: {
            src: './src/img/',
            input: './src/img/**/*.*',
            output: './dist/img/',
            watch: ['./src/img/*']
        },
        tpl: {
            src: './src/tpl/',
            input: './src/tpl/*.html',
            output: './demo/',
            watch: ['./src/tpl/**/*']
        },
        lib: [
            {
                src: 'bower_components/jquery/dist/jquery.min.js',
                dist: './dist/lib/jquery/'
            },
            {
                src: 'bower_components/font-awesome/fonts/*',
                dist: './dist/fonts/'
            }
        ]
    };
    return config;
}