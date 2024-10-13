"use strict";

var _ErrorRepository = _interopRequireDefault(require("../ErrorRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Check error', function () {
  var errors = new _ErrorRepository["default"]();
  test('error checker case', function () {
    errors.translate(1, 'Lanoriya');
    errors.translate(2, 'MissLansha');
    var result = [errors.translate(1), errors.translate(2), errors.translate(2), errors.translate(3)];
    expect(result).toEqual(['Lanoriya', 'MissLansha', 'MissLansha', 'Unknown error']);
  });
});