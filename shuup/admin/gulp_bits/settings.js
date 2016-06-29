/**
 * This file is part of Shuup.
 *
 * Copyright (c) 2012-2016, Shuup Ltd. All rights reserved.
 *
 * This source code is licensed under the AGPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gutil = require("gulp-util");
var path = require("path");

module.exports.DEST_DIR = path.join("static", "shuup_admin");
module.exports.PRODUCTION = gutil.env.production || (process.env.NODE_ENV === "production");
module.exports.WATCH = !!gutil.env.watch;