module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/js/javascript.min.js": "public/js/javascript.js",
                    "public/js/burfield-dev-test.min.js": "public/js/burfield-dev-test.js"
                }
            }
        },

        scss: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/css/style.css": "public/css/style.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/css/style.min.css": "public/css/style.css"
                }
            }
        },

        watch: {
            files: ["public/css/style.scss", "public/js/javascript.js", "public/js/burfield-dev-test.js"],
            tasks: ["uglify", "scss", "cssmin"]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-scss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["uglify", "scss", "cssmin", "watch"]);

};
