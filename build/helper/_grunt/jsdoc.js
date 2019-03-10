module.exports = {
  dist: {
    src: ['src/js/*.js', 'src/index.js'],
    options: {
      configuration: '../../jsdoc.json',
      destination: '<%= paths.docs %>',
      readme: 'README.md',
    },
  },
};
