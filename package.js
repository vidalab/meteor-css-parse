Package.describe({
  summary: "css parser package for meteor"
});

Package.on_use(function (api) {
  api.export('css_parse');
  api.add_files([
      'lib/css-parse/index.js'
    ]
    ,'client'
  );
});

