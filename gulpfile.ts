import { src, dest } from 'gulp'
import * as ts from "gulp-typescript";

function build(cb) {
  return src('src/*ts')
    .pipe(ts())
    .pipe(dest('output/'))
}

exports.build = build
exports.default = build