module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/scripts/javascript.min.js": "public/scripts/javascript.js"
                }
            }
        },

        scss: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/styles/style.css": "public/styles/style.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/styles/style.min.css": "public/styles/style.css"
                }
            }
        },

        watch: {
            files: ["public/styles/style.scss", "public/scripts/javascript.js"],
            tasks: ["uglify", "scss", "cssmin"]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-scss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["uglify", "scss", "cssmin", "watch"]);

};
