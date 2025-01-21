module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "build/styles/main.min.css": "./src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:development"]
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.min.css"
                        },
                        {
                            match: "ENDERECO_DO_JS",
                            replacement: "./scripts/main.min.js"
                        }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ["src/index.html"],
                    dest: "build/"
                }]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: "./styles/main.min.css"
                        },
                        {
                            match: "ENDERECO_DO_JS",
                            replacement: "./scripts/main.min.js"
                        }
                    ]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ["prebuild/index.html"],
                    dest: "build/"
                }]
            }
        },
        clean: ["prebuild"],
        uglify: {
            target: {
                files: {
                    "build/scripts/main.min.js": "src/scripts/main.js"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less:development", "uglify", "replace", "clean"]);
}