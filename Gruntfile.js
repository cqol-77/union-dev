module.exports = function (grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        lib:{
            jq:'js/lib/jquery.min.js',
            tmpl:'js/lib/jquery.tmpl.min.js',
            ttsui:'js/lib/ttsui.min.js'
        },
        build:{
            file:{
                js:'build/tts_union_media.js',
                css:'build/p4p-2.0.css',
                img:'build/'
            },
            debug:'build/debug/tts_union_media.js'
        },
        union:{
            file:{
                js:'js/tts_union_media.source.js',
                img:'img/',
                css:'css/p4p-2.0.css'
            }
        },
        concat:{
            lib:{
                options:{
                    banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                src:['<%= lib.jq %>', '<%= lib.tmpl %>'],
                dest:'<%= lib.ttsui %>'
            },
            union:{
                src:['<%= lib.ttsui %>', '<%= union.file.js %>'],
                dest:'<%= build.debug %>'
            }
        },
        uglify:{
            lib:{
                options:{
                    banner:'/*!  <%= pkg.name %> -  by cqol_77 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files:{
                    '<%= lib.ttsui %>':'<%= lib.ttsui %>'
                }
            },
            union:{
                options:{
                    banner:'/*! <%= pkg.name %> - by cqol_77 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                files:{
                    '<%= build.file.js %>':'<%= build.debug %>'
                }
            }
        },
        jshint:{
            union:{
                options:{
                    jshintrc:'.jshintrc'
                },
                files:{
                    src:['<%= union.file.js %>']
                }
            }
        },
        replace:{
            options:{
                variables:{
                    'timestamp':'<%= new Date().getTime() %>'
                }
            },
            union:{
                files:[
                    {src:['<%= build.debug %>'], dest:'<%= build.debug %>'}
                ]
            }
        },
        copy:{
            union:{
                files:[
                    {expand:true, cwd:'<%= union.file.img %>', src:'*', dest:'<%= build.file.img %>'}
                ]
            }
        },
        cssmin: {
            options: {
                banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            combine: {
                files: {
                    '<%= build.file.css %>': ['<%= union.file.css %>']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('union', 'tts union', function () {
        grunt.task.run('jshint:union');
        grunt.task.run('concat:union');
        grunt.task.run('replace:union');
        grunt.task.run('uglify:union');
    });
    grunt.registerTask('lib', 'tts union', function () {
        //grunt.task.run('jshint:union');
        grunt.task.run('concat:lib');
        grunt.task.run('uglify:lib');
    });
    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};