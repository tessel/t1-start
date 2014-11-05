exports.manyModules = function (req, res) {
  res.render('many-modules.jade', {title: 'Multiple Modules'});
};

exports.untethered = function (req, res) {
  res.render('untethered.jade', {title: 'Untethered Tessel'});
};
