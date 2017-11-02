module.exports = {
    // Development settings
    dev: {
        options: {
            style: 'nested',
            sourcemap: true
        },
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['*.scss'],
            dest: 'dest/css',
            ext: '.css'
        }]
    },
    // Production settings
    prod: {
        options: {
            style: 'compressed',
            sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: 'src/scss',
            src: ['*.scss'],
            dest: 'dest/css',
            ext: '.css'
        }]
    }
};