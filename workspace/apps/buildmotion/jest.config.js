module.exports = {
  name: 'buildmotion',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/buildmotion/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
