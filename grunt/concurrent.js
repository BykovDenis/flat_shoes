module.exports = {
    // �����
    options: {
        limit: 3
    },
    // ������ ����������
    devFirst: [
        'clean',
        'jade',
        'jshint'
    ],
    devSecond: [
        'sass:dev',
        'uglify',
    ],
    // ���������������� ������
    prodFirst: [
        'clean',
        'jade',
        'jshint'
    ],
    prodSecond: [
        'sass:prod',
        'uglify',
    ],
    // ������ �����������
    imgFirst: [
        'imagemin'
    ],
    serve: [
        'browserSync'
    ],
};