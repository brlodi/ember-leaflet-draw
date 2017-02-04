'use strict';

define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/integration/components/draw-control-test', ['exports', 'ember-qunit', 'ember-leaflet-draw/components/draw-control'], function (exports, _emberQunit, _emberLeafletDrawComponentsDrawControl) {
  var drawControl = undefined;

  (0, _emberQunit.moduleForComponent)('draw-control', 'Integration | Component | draw control', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('component:draw-control', _emberLeafletDrawComponentsDrawControl['default'].extend({
        init: function init() {
          this._super.apply(this, arguments);
          drawControl = this;
        }
      }));

      // Set any properties with this.set('myProperty', 'value');
      this.setProperties({
        lat: 38,
        lng: -78,
        zoom: 8
      });

      // Handle any actions with this.on('myAction', function(val) { ... });
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(3);

    this.render(Ember.HTMLBars.template({
      'id': '2+IerzBl',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["unknown",["draw-control"]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is not empty
    assert.notEqual(this.$('.leaflet-draw.leaflet-control').text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '5XVbAoSa',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["block",["draw-control"],null,null,{"statements":[["text","        "],["open-element","span",[]],["static-attr","class","test-insertion"],["flush-element"],["text","template block text"],["close-element"],["text","\\n"]],"locals":[]},null]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is not empty
    assert.notEqual(this.$('.leaflet-draw.leaflet-control').text().trim(), '');

    // Ensure nested element is found
    assert.equal(this.$('.test-insertion').text().trim(), 'template block text');
  });

  (0, _emberQunit.test)('it responds to boolean option for enableEditing', function (assert) {
    assert.expect(4);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ytz2PaUM',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["enableEditing"],[true]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control enables enableEditing
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-edit').length, "setting enableEditing to true fails to render edit button");
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-remove').length, "setting enableEditing to true fails to render delete button");

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'v9CxWJas',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["enableEditing"],[false]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control disables enableEditing
    assert.notOk(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-edit').length, "setting enableEditing to false fails to hide edit button");
    assert.notOk(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-remove').length, "setting enableEditing to false fails to hide delete button");
  });

  (0, _emberQunit.test)('it has deafult value for enableEditing set to true', function (assert) {
    assert.expect(1);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2+IerzBl',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["unknown",["draw-control"]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control defaults to enabling enableEditing
    assert.equal(this.$('.leaflet-draw.leaflet-control').text().trim(), 'Draw a polylineDraw a polygonDraw a rectangleDraw a circleDraw a markerEdit layers.Delete layers.');
  });

  (0, _emberQunit.test)('it responds to boolean option for showDrawingLayer', function (assert) {
    assert.expect(2);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'GUyCTvTq',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["showDrawingLayer"],[true]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control enables showDrawingLayer. If enabled, _layer will be created.
    assert.ok(drawControl._layer, 'failed to find drawing layer');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'sZ3/iS62',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["showDrawingLayer"],[false]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control disables showDrawingLayer. If disabled, _layer will not be created.
    assert.notOk(drawControl._layer, 'failed to find drawing layer');
  });

  (0, _emberQunit.test)('it needs showDrawingLayer to be true for enableEditing to work', function (assert) {
    assert.expect(4);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'WKo7WaYM',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["showDrawingLayer","enableEditing"],[true,true]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control enables showDrawingLayer. If enabled (while edit is defaulted/true) the edit buttons will display becaue there is a layer to edit.
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-edit').length, "setting enableEditing to true fails to render edit button");
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-remove').length, "setting enableEditing to true fails to render delete button");

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'hNiWewGx',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["showDrawingLayer","enableEditing"],[false,true]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control disables showDrawingLayer. If disabled (while edit is defaulted/true) the edit buttons will not display becaue there is no layer to edit.
    assert.notOk(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-edit').length, "setting showDrawingLayer to false fails to hide edit button");
    assert.notOk(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-remove').length, "setting showDrawingLayer to false fails to hide delete button");
  });

  (0, _emberQunit.test)('it has deafult value for showDrawingLayer set to true', function (assert) {
    assert.expect(2);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2+IerzBl',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["unknown",["draw-control"]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control enables showDrawingLayer. If enabled (while edit is defaulted/true) the edit buttons will display becaue there is a layer to edit.
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-edit').length, "setting enableEditing to true fails to render edit button");
    assert.ok(this.$('.leaflet-draw.leaflet-control .leaflet-draw-edit-remove').length, "setting enableEditing to true fails to render delete button");
  });

  (0, _emberQunit.test)('it responds to all options for position', function (assert) {
    assert.expect(4);

    // Set new position to topleft
    this.set('position', 'topleft');

    this.render(Ember.HTMLBars.template({
      'id': 'ecw83nHD',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["position"],[["get",["position"]]]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is in topleft location
    assert.ok(this.$('.leaflet-top.leaflet-left .leaflet-draw.leaflet-control').length, "topleft location fails");

    // Set new position to topright
    this.set('position', 'topright');

    this.render(Ember.HTMLBars.template({
      'id': 'ecw83nHD',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["position"],[["get",["position"]]]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is in topright location
    assert.ok(this.$('.leaflet-top.leaflet-right .leaflet-draw.leaflet-control').length, "topright location fails");

    // Set new position to bottomleft
    this.set('position', 'bottomleft');

    this.render(Ember.HTMLBars.template({
      'id': 'ecw83nHD',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["position"],[["get",["position"]]]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is in bottomleft location
    assert.ok(this.$('.leaflet-bottom.leaflet-left .leaflet-draw.leaflet-control').length, "bottomleft location fails");

    // Set new position to bottomright
    this.set('position', 'bottomright');

    this.render(Ember.HTMLBars.template({
      'id': 'ecw83nHD',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["helper",["draw-control"],null,[["position"],[["get",["position"]]]]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is in bottomright location
    assert.ok(this.$('.leaflet-bottom.leaflet-right .leaflet-draw.leaflet-control').length, "bottomright location fails");
  });

  (0, _emberQunit.test)('it has deafult value for position set to topleft', function (assert) {
    assert.expect(1);

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2+IerzBl',
      'block': '{"statements":[["text","\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","      "],["append",["unknown",["draw-control"]],false],["text","\\n"]],"locals":[]},null],["text","  "]],"locals":[],"named":[],"yields":[],"hasPartials":false}',
      'meta': {}
    }));

    // Ensure draw-control is in topleft location
    assert.ok(this.$('.leaflet-top.leaflet-left .leaflet-draw.leaflet-control').length, "defaulting to topleft location fails");
  });
});
define('dummy/tests/integration/components/draw-control-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/draw-control-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/draw-control-test.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
