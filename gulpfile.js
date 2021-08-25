const { src, task, series, dest } = require('gulp');
const log = require('fancy-log');
const modifyFile = require('gulp-modify-file');

task('default', done => {
  src('./wiki.json')
    .pipe(
      modifyFile(content => {
        let hasWrongFormatName = false;
        const json = JSON.parse(content);

        for (let idx = 0; idx < json.length; idx++) {
          if (isValidName(json[idx].name) === false) {
            hasWrongFormatName = true;
            break;
          }
        }

        const sorted = !!hasWrongFormatName
          ? json
          : json.sort((a, b) => {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });

        return JSON.stringify(sorted, null, '\t');
      }),
    )
    .pipe(dest('./'));
  done();
});

function isValidName(str) {
  const regex =
    /^[a-zA-Z0-9가-힣][a-zA-Z0-9가-힣\s]*[a-zA-Z0-9가-힣]\s\([a-zA-Z0-9][a-zA-Z0-9\s]*[a-zA-Z0-9]\)/;

  if (regex.test(str) === false) {
    log.error(`
      Error occured in wiki.json data : ${str}
      Please check below wiki.json naming convetion

        ● Each part of name must start with non-whitespace
        ● First part of name must be combination of (korean | english | number | whitespace)
        ● Second part of name must be wrapped round brackets
        ● Second part of name must be combination of (english | number | whitespace)
        ● Second part of name must not be empty
        ● More than two words must be separated by ', '
    `);
    return false;
  }
  return true;
}

exports.default = series('default');
