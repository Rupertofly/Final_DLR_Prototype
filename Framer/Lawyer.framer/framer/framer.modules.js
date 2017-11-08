require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Pointer":[function(require,module,exports){
exports.Pointer = (function() {
  var clientCoords, coords, offsetArgumentError, offsetCoords, screenArgumentError;

  function Pointer() {}

  Pointer.screen = function(event, layer) {
    var e, screenCoords;
    if (!((event != null) && (layer != null))) {
      screenArgumentError();
    }
    e = offsetCoords(event);
    if (e.x && e.y) {
      screenCoords = layer.screenFrame;
      e.x += screenCoords.x;
      e.y += screenCoords.y;
    } else {
      e = clientCoords(event);
    }
    return e;
  };

  Pointer.offset = function(event, layer) {
    var e, targetScreenCoords;
    if (!((event != null) && (layer != null))) {
      offsetArgumentError();
    }
    e = offsetCoords(event);
    if (!((e.x != null) && (e.y != null))) {
      e = clientCoords(event);
      targetScreenCoords = layer.screenFrame;
      e.x -= targetScreenCoords.x;
      e.y -= targetScreenCoords.y;
    }
    return e;
  };

  offsetCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.offsetX, e.offsetY);
  };

  clientCoords = function(ev) {
    var e;
    e = Events.touchEvent(ev);
    return coords(e.clientX, e.clientY);
  };

  coords = function(x, y) {
    return {
      x: x,
      y: y
    };
  };

  screenArgumentError = function() {
    error(null);
    return console.error("Pointer.screen() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.screen(event, layer)");
  };

  offsetArgumentError = function() {
    error(null);
    return console.error("Pointer.offset() Error: You must pass event & layer arguments. \n\nExample: layer.on Events.TouchStart,(event,layer) -> Pointer.offset(event, layer)");
  };

  return Pointer;

})();


},{}],"default_content":[function(require,module,exports){
var bornDateOfBirth, court, courtID, courtID_2, court_2, custodyStatus, dLRID, dLRID_2, dateofcharge, deets, details, layer_1682017, magistrate, magistrate_2, matter, matters, name, onday, otherwiseKnownAs, rectangle, referedFrom, referred, summaryOffence, theAccusedInMelbo, theft;

window.content = new Layer({
  name: "content",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 1052,
  height: 614
});

name = new TextLayer({
  name: "name",
  parent: content,
  x: 15,
  y: 15,
  text: "{Name}",
  fontSize: 40,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

custodyStatus = new TextLayer({
  name: "custodyStatus",
  parent: content,
  x: 15,
  y: 181,
  text: "{CustodyStatus}",
  fontSize: 40,
  fontFamily: "Avenir Next",
  fontWeight: 200,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

referred = new TextLayer({
  name: "referred",
  parent: content,
  x: 518,
  y: 45,
  text: "{Referred}",
  fontSize: 30,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

magistrate = new TextLayer({
  name: "magistrate",
  parent: content,
  x: 518,
  y: 158,
  text: "{Magistrate}",
  fontSize: 30,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

court = new TextLayer({
  name: "court_",
  parent: content,
  x: 826,
  y: 162,
  text: "{Court}",
  fontSize: 30,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

referedFrom = new TextLayer({
  name: "referedFrom",
  parent: content,
  x: 518,
  y: 15,
  text: "Refered From",
  fontSize: 24,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

dLRID = new TextLayer({
  name: "dLRID",
  parent: content,
  x: 826,
  y: 21,
  text: "DLR ID:",
  fontSize: 20,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(194,55,52,1)"
});

dLRID_2 = new TextLayer({
  name: "dLRID_2",
  parent: content,
  x: 910,
  y: 25,
  text: "{DLRID}",
  fontSize: 16,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "right",
  color: "rgba(194,55,52,1)"
});

courtID = new TextLayer({
  name: "courtID",
  parent: content,
  x: 910,
  y: 53,
  text: "{CourtID}",
  fontSize: 16,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "right",
  color: "rgba(194,55,52,1)"
});

courtID_2 = new TextLayer({
  name: "courtID_2",
  parent: content,
  x: 826,
  y: 48,
  text: "Court ID:",
  fontSize: 20,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(194,55,52,1)"
});

matters = new TextLayer({
  name: "matters",
  parent: content,
  x: 15,
  y: 263,
  text: "Matters",
  fontSize: 36,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(194,55,52,1)"
});

magistrate_2 = new TextLayer({
  name: "magistrate_2",
  parent: content,
  x: 518,
  y: 125,
  text: "Magistrate:",
  fontSize: 24,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

court_2 = new TextLayer({
  name: "court_2",
  parent: content,
  x: 826,
  y: 129,
  text: "Court:",
  fontSize: 24,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

otherwiseKnownAs = new TextLayer({
  name: "otherwiseKnownAs",
  parent: content,
  x: 15,
  y: 86,
  text: "Otherwise known as {otherName}",
  fontSize: 24,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

bornDateOfBirth = new TextLayer({
  name: "bornDateOfBirth",
  parent: content,
  x: 15,
  y: 129,
  text: "Born: {dateOfBirth}",
  fontSize: 24,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

matter = new Layer({
  name: "matter",
  parent: content,
  x: 2,
  y: 307,
  backgroundColor: "transparent",
  width: 1048,
  height: 104
});

rectangle = new Layer({
  name: "rectangle",
  parent: matter,
  x: 0,
  y: 0,
  width: 960,
  height: 104,
  backgroundColor: "#fff0f0",
  borderRadius: 6
});

theft = new TextLayer({
  name: "theft",
  parent: matter,
  x: 41,
  y: 29,
  text: "Theft",
  fontSize: 30,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

deets = new Layer({
  name: "deets",
  parent: matter,
  x: 700,
  y: 0,
  backgroundColor: "transparent",
  width: 259,
  height: 101
});

details = new TextLayer({
  name: "details",
  parent: deets,
  x: 0,
  y: 0,
  text: "Details",
  fontSize: 18,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

theAccusedInMelbo = new TextLayer({
  name: "theAccusedInMelbo",
  parent: deets,
  x: 0,
  y: 25,
  width: 259,
  text: "The Accused in Melbourne on the 16/8/2017 \u2028did steal a can of corn at the value of two dollars and fifty cents",
  fontSize: 14,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

dateofcharge = new Layer({
  name: "dateofcharge",
  parent: matter,
  x: 241,
  y: 21,
  backgroundColor: "transparent",
  width: 89,
  height: 50
});

onday = new TextLayer({
  name: "onday",
  parent: dateofcharge,
  x: 0,
  y: 0,
  text: "On:",
  fontSize: 18,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

layer_1682017 = new TextLayer({
  name: "layer_1682017",
  parent: dateofcharge,
  x: 0,
  y: 25,
  text: "16/8/2017",
  fontSize: 18,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

summaryOffence = new TextLayer({
  name: "summaryOffence",
  parent: matter,
  x: 524,
  y: 21,
  text: "Summary\nOffence",
  fontSize: 18,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});


},{}],"findModule":[function(require,module,exports){
var _findAll, _getHierarchy, _match;

_getHierarchy = function(layer) {
  var a, i, len, ref, string;
  string = '';
  ref = layer.ancestors();
  for (i = 0, len = ref.length; i < len; i++) {
    a = ref[i];
    string = a.name + '>' + string;
  }
  return string = string + layer.name;
};

_match = function(hierarchy, string) {
  var regExp, regexString;
  string = string.replace(/\s*>\s*/g, '>');
  string = string.split('*').join('[^>]*');
  string = string.split(' ').join('(?:.*)>');
  string = string.split(',').join('$|');
  regexString = "(^|>)" + string + "$";
  regExp = new RegExp(regexString);
  return hierarchy.match(regExp);
};

_findAll = function(selector, fromLayer) {
  var layers, stringNeedsRegex;
  layers = Framer.CurrentContext._layers;
  if (selector != null) {
    stringNeedsRegex = _.find(['*', ' ', '>', ','], function(c) {
      return _.includes(selector, c);
    });
    if (!(stringNeedsRegex || fromLayer)) {
      return layers = _.filter(layers, function(layer) {
        if (layer.name === selector) {
          return true;
        }
      });
    } else {
      return layers = _.filter(layers, function(layer) {
        var hierarchy;
        hierarchy = _getHierarchy(layer);
        if (fromLayer != null) {
          return _match(hierarchy, fromLayer.name + ' ' + selector);
        } else {
          return _match(hierarchy, selector);
        }
      });
    }
  } else {
    return layers;
  }
};

exports.Find = function(selector, fromLayer) {
  return _findAll(selector, fromLayer)[0];
};

exports.ƒ = function(selector, fromLayer) {
  return _findAll(selector, fromLayer)[0];
};

exports.FindAll = function(selector, fromLayer) {
  return _findAll(selector, fromLayer);
};

exports.ƒƒ = function(selector, fromLayer) {
  return _findAll(selector, fromLayer);
};

Layer.prototype.find = function(selector, fromLayer) {
  return _findAll(selector, this)[0];
};

Layer.prototype.ƒ = function(selector, fromLayer) {
  return _findAll(selector, this)[0];
};

Layer.prototype.findAll = function(selector, fromLayer) {
  return _findAll(selector, this);
};

Layer.prototype.ƒƒ = function(selector, fromLayer) {
  return _findAll(selector, this);
};


},{}],"input-framer/input":[function(require,module,exports){
// Generated by CoffeeScript 2.0.1
(function() {
  var _inputStyle, calculatePixelRatio, growthRatio, imageHeight;

  exports.keyboardLayer = new Layer({
    x: 0,
    y: Screen.height,
    width: Screen.width,
    height: 432,
    html: "<img style='width: 100%;' src='modules/keyboard.png'/>"
  });

  //screen width vs. size of image width
  growthRatio = Screen.width / 732;

  imageHeight = growthRatio * 432;

  // Extends the LayerStyle class which does the pixel ratio calculations in framer
  _inputStyle = Object.assign({}, Framer.LayerStyle, calculatePixelRatio = function(layer, value) {
    return (value * layer.context.pixelMultiplier) + "px";
  }, {
    fontSize: function(layer) {
      return calculatePixelRatio(layer, layer._properties.fontSize);
    },
    lineHeight: function(layer) {
      return layer._properties.lineHeight + "em";
    },
    padding: function(layer) {
      var padding, paddingValue, paddingValues, pixelMultiplier;
      ({pixelMultiplier} = layer.context);
      padding = [];
      paddingValue = layer._properties.padding;
      // Check if we have a single number as integer
      if (Number.isInteger(paddingValue)) {
        return calculatePixelRatio(layer, paddingValue);
      }
      // If we have multiple values they come as string (e.g. "1 2 3 4")
      paddingValues = layer._properties.padding.split(" ");
      switch (paddingValues.length) {
        case 4:
          padding.top = parseFloat(paddingValues[0]);
          padding.right = parseFloat(paddingValues[1]);
          padding.bottom = parseFloat(paddingValues[2]);
          padding.left = parseFloat(paddingValues[3]);
          break;
        case 3:
          padding.top = parseFloat(paddingValues[0]);
          padding.right = parseFloat(paddingValues[1]);
          padding.bottom = parseFloat(paddingValues[2]);
          padding.left = parseFloat(paddingValues[1]);
          break;
        case 2:
          padding.top = parseFloat(paddingValues[0]);
          padding.right = parseFloat(paddingValues[1]);
          padding.bottom = parseFloat(paddingValues[0]);
          padding.left = parseFloat(paddingValues[1]);
          break;
        default:
          padding.top = parseFloat(paddingValues[0]);
          padding.right = parseFloat(paddingValues[0]);
          padding.bottom = parseFloat(paddingValues[0]);
          padding.left = parseFloat(paddingValues[0]);
      }
      // Return as 4-value string (e.g "1px 2px 3px 4px")
      return `${padding.top * pixelMultiplier}px ${padding.right * pixelMultiplier}px ${padding.bottom * pixelMultiplier}px ${padding.left * pixelMultiplier}px`;
    }
  });

  exports.keyboardLayer.states = {
    shown: {
      y: Screen.height - imageHeight
    }
  };

  exports.keyboardLayer.states.animationOptions = {
    curve: "spring(500,50,15)"
  };

  exports.Input = (function() {
    class Input extends Layer {
      constructor(options = {}) {
        if (options.setup == null) {
          options.setup = false;
        }
        if (options.width == null) {
          options.width = Screen.width;
        }
        if (options.clip == null) {
          options.clip = false;
        }
        if (options.height == null) {
          options.height = 60;
        }
        if (options.backgroundColor == null) {
          options.backgroundColor = options.setup ? "rgba(255, 60, 47, .5)" : "transparent";
        }
        if (options.fontSize == null) {
          options.fontSize = 30;
        }
        if (options.lineHeight == null) {
          options.lineHeight = 1;
        }
        if (options.padding == null) {
          options.padding = 10;
        }
        if (options.text == null) {
          options.text = "";
        }
        if (options.placeholder == null) {
          options.placeholder = "";
        }
        if (options.virtualKeyboard == null) {
          options.virtualKeyboard = Utils.isMobile() ? false : true;
        }
        if (options.type == null) {
          options.type = "text";
        }
        if (options.goButton == null) {
          options.goButton = false;
        }
        if (options.autoCorrect == null) {
          options.autoCorrect = "on";
        }
        if (options.autoComplete == null) {
          options.autoComplete = "on";
        }
        if (options.autoCapitalize == null) {
          options.autoCapitalize = "on";
        }
        if (options.spellCheck == null) {
          options.spellCheck = "on";
        }
        if (options.autofocus == null) {
          options.autofocus = false;
        }
        if (options.textColor == null) {
          options.textColor = "#000";
        }
        if (options.fontFamily == null) {
          options.fontFamily = "-apple-system";
        }
        if (options.fontWeight == null) {
          options.fontWeight = "500";
        }
        if (options.submit == null) {
          options.submit = false;
        }
        if (options.tabIndex == null) {
          options.tabIndex = 0;
        }
        super(options);
        // Add additional properties
        this._properties.fontSize = options.fontSize;
        this._properties.lineHeight = options.lineHeight;
        this._properties.padding = options.padding;
        if (options.placeholderColor != null) {
          this.placeholderColor = options.placeholderColor;
        }
        this.input = document.createElement("input");
        this.input.id = `input-${_.now()}`;
        // Add styling to the input element
        this.input.style.width = _inputStyle["width"](this);
        this.input.style.height = _inputStyle["height"](this);
        this.input.style.fontSize = _inputStyle["fontSize"](this);
        this.input.style.lineHeight = _inputStyle["lineHeight"](this);
        this.input.style.outline = "none";
        this.input.style.border = "none";
        this.input.style.backgroundColor = options.backgroundColor;
        this.input.style.padding = _inputStyle["padding"](this);
        this.input.style.fontFamily = options.fontFamily;
        this.input.style.color = options.textColor;
        this.input.style.fontWeight = options.fontWeight;
        this.input.value = options.text;
        this.input.type = options.type;
        this.input.placeholder = options.placeholder;
        this.input.setAttribute("tabindex", options.tabindex);
        this.input.setAttribute("autocorrect", options.autoCorrect);
        this.input.setAttribute("autocomplete", options.autoComplete);
        this.input.setAttribute("autocapitalize", options.autoCapitalize);
        if (options.autofocus === true) {
          this.input.setAttribute("autofocus", true);
        }
        this.input.setAttribute("spellcheck", options.spellCheck);
        this.form = document.createElement("form");
        if ((options.goButton && !options.submit) || !options.submit) {
          this.form.action = "#";
          this.form.addEventListener("submit", function(event) {
            return event.preventDefault();
          });
        }
        this.form.appendChild(this.input);
        this._element.appendChild(this.form);
        this.backgroundColor = "transparent";
        if (this.placeholderColor) {
          this.updatePlaceholderColor(options.placeholderColor);
        }
        if (!Utils.isMobile() && options.virtualKeyboard === true) {
          this.input.addEventListener("focus", function() {
            exports.keyboardLayer.bringToFront();
            return exports.keyboardLayer.stateCycle();
          });
          this.input.addEventListener("blur", function() {
            return exports.keyboardLayer.animate("default");
          });
        }
      }

      updatePlaceholderColor(color) {
        var css;
        this.placeholderColor = color;
        if (this.pageStyle != null) {
          document.head.removeChild(this.pageStyle);
        }
        this.pageStyle = document.createElement("style");
        this.pageStyle.type = "text/css";
        css = `#${this.input.id}::-webkit-input-placeholder { color: ${this.placeholderColor}; }`;
        this.pageStyle.appendChild(document.createTextNode(css));
        return document.head.appendChild(this.pageStyle);
      }

      focus() {
        return this.input.focus();
      }

      onFocus(cb) {
        return this.input.addEventListener("focus", function() {
          return cb.apply(this);
        });
      }

      onBlur(cb) {
        return this.input.addEventListener("blur", function() {
          return cb.apply(this);
        });
      }

    };

    Input.define("style", {
      get: function() {
        return this.input.style;
      },
      set: function(value) {
        return _.extend(this.input.style, value);
      }
    });

    Input.define("value", {
      get: function() {
        return this.input.value;
      },
      set: function(value) {
        return this.input.value = value;
      }
    });

    return Input;

  })();

}).call(this);



},{}],"input-framer/input":[function(require,module,exports){
var _inputStyle, calculatePixelRatio, growthRatio, imageHeight,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.keyboardLayer = new Layer({
  x: 0,
  y: Screen.height,
  width: Screen.width,
  height: 432,
  html: "<img style='width: 100%;' src='modules/keyboard.png'/>"
});

growthRatio = Screen.width / 732;

imageHeight = growthRatio * 432;

_inputStyle = Object.assign({}, Framer.LayerStyle, calculatePixelRatio = function(layer, value) {
  return (value * layer.context.pixelMultiplier) + "px";
}, {
  fontSize: function(layer) {
    return calculatePixelRatio(layer, layer._properties.fontSize);
  },
  lineHeight: function(layer) {
    return layer._properties.lineHeight + "em";
  },
  padding: function(layer) {
    var padding, paddingValue, paddingValues, pixelMultiplier;
    pixelMultiplier = layer.context.pixelMultiplier;
    padding = [];
    paddingValue = layer._properties.padding;
    if (Number.isInteger(paddingValue)) {
      return calculatePixelRatio(layer, paddingValue);
    }
    paddingValues = layer._properties.padding.split(" ");
    switch (paddingValues.length) {
      case 4:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[2]);
        padding.left = parseFloat(paddingValues[3]);
        break;
      case 3:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[2]);
        padding.left = parseFloat(paddingValues[1]);
        break;
      case 2:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[1]);
        padding.bottom = parseFloat(paddingValues[0]);
        padding.left = parseFloat(paddingValues[1]);
        break;
      default:
        padding.top = parseFloat(paddingValues[0]);
        padding.right = parseFloat(paddingValues[0]);
        padding.bottom = parseFloat(paddingValues[0]);
        padding.left = parseFloat(paddingValues[0]);
    }
    return (padding.top * pixelMultiplier) + "px " + (padding.right * pixelMultiplier) + "px " + (padding.bottom * pixelMultiplier) + "px " + (padding.left * pixelMultiplier) + "px";
  }
});

exports.keyboardLayer.states = {
  shown: {
    y: Screen.height - imageHeight
  }
};

exports.keyboardLayer.states.animationOptions = {
  curve: "spring(500,50,15)"
};

exports.Input = (function(superClass) {
  extend(Input, superClass);

  Input.define("style", {
    get: function() {
      return this.input.style;
    },
    set: function(value) {
      return _.extend(this.input.style, value);
    }
  });

  Input.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(value) {
      return this.input.value = value;
    }
  });

  function Input(options) {
    if (options == null) {
      options = {};
    }
    if (options.setup == null) {
      options.setup = false;
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.clip == null) {
      options.clip = false;
    }
    if (options.height == null) {
      options.height = 60;
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = options.setup ? "rgba(255, 60, 47, .5)" : "transparent";
    }
    if (options.fontSize == null) {
      options.fontSize = 30;
    }
    if (options.lineHeight == null) {
      options.lineHeight = 1;
    }
    if (options.padding == null) {
      options.padding = 10;
    }
    if (options.text == null) {
      options.text = "";
    }
    if (options.placeholder == null) {
      options.placeholder = "";
    }
    if (options.virtualKeyboard == null) {
      options.virtualKeyboard = Utils.isMobile() ? false : true;
    }
    if (options.type == null) {
      options.type = "text";
    }
    if (options.goButton == null) {
      options.goButton = false;
    }
    if (options.autoCorrect == null) {
      options.autoCorrect = "on";
    }
    if (options.autoComplete == null) {
      options.autoComplete = "on";
    }
    if (options.autoCapitalize == null) {
      options.autoCapitalize = "on";
    }
    if (options.spellCheck == null) {
      options.spellCheck = "on";
    }
    if (options.autofocus == null) {
      options.autofocus = false;
    }
    if (options.textColor == null) {
      options.textColor = "#000";
    }
    if (options.fontFamily == null) {
      options.fontFamily = "-apple-system";
    }
    if (options.fontWeight == null) {
      options.fontWeight = "500";
    }
    if (options.submit == null) {
      options.submit = false;
    }
    if (options.tabIndex == null) {
      options.tabIndex = 0;
    }
    Input.__super__.constructor.call(this, options);
    this._properties.fontSize = options.fontSize;
    this._properties.lineHeight = options.lineHeight;
    this._properties.padding = options.padding;
    if (options.placeholderColor != null) {
      this.placeholderColor = options.placeholderColor;
    }
    this.input = document.createElement("input");
    this.input.id = "input-" + (_.now());
    this.input.style.width = _inputStyle["width"](this);
    this.input.style.height = _inputStyle["height"](this);
    this.input.style.fontSize = _inputStyle["fontSize"](this);
    this.input.style.lineHeight = _inputStyle["lineHeight"](this);
    this.input.style.outline = "none";
    this.input.style.border = "none";
    this.input.style.backgroundColor = options.backgroundColor;
    this.input.style.padding = _inputStyle["padding"](this);
    this.input.style.fontFamily = options.fontFamily;
    this.input.style.color = options.textColor;
    this.input.style.fontWeight = options.fontWeight;
    this.input.value = options.text;
    this.input.type = options.type;
    this.input.placeholder = options.placeholder;
    this.input.setAttribute("tabindex", options.tabindex);
    this.input.setAttribute("autocorrect", options.autoCorrect);
    this.input.setAttribute("autocomplete", options.autoComplete);
    this.input.setAttribute("autocapitalize", options.autoCapitalize);
    if (options.autofocus === true) {
      this.input.setAttribute("autofocus", true);
    }
    this.input.setAttribute("spellcheck", options.spellCheck);
    this.form = document.createElement("form");
    if ((options.goButton && !options.submit) || !options.submit) {
      this.form.action = "#";
      this.form.addEventListener("submit", function(event) {
        return event.preventDefault();
      });
    }
    this.form.appendChild(this.input);
    this._element.appendChild(this.form);
    this.backgroundColor = "transparent";
    if (this.placeholderColor) {
      this.updatePlaceholderColor(options.placeholderColor);
    }
    if (!Utils.isMobile() && options.virtualKeyboard === true) {
      this.input.addEventListener("focus", function() {
        exports.keyboardLayer.bringToFront();
        return exports.keyboardLayer.stateCycle();
      });
      this.input.addEventListener("blur", function() {
        return exports.keyboardLayer.animate("default");
      });
    }
  }

  Input.prototype.updatePlaceholderColor = function(color) {
    var css;
    this.placeholderColor = color;
    if (this.pageStyle != null) {
      document.head.removeChild(this.pageStyle);
    }
    this.pageStyle = document.createElement("style");
    this.pageStyle.type = "text/css";
    css = "#" + this.input.id + "::-webkit-input-placeholder { color: " + this.placeholderColor + "; }";
    this.pageStyle.appendChild(document.createTextNode(css));
    return document.head.appendChild(this.pageStyle);
  };

  Input.prototype.focus = function() {
    return this.input.focus();
  };

  Input.prototype.onFocus = function(cb) {
    return this.input.addEventListener("focus", function() {
      return cb.apply(this);
    });
  };

  Input.prototype.onBlur = function(cb) {
    return this.input.addEventListener("blur", function() {
      return cb.apply(this);
    });
  };

  return Input;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"notes_content":[function(require,module,exports){
var charge_Sheet, documents, evidenceSheet, notes_2, rectangle, rectangleCopy, rectangleCopy2, tasks;

window.notes = new Layer({
  name: "notes",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 1052,
  height: 614
});

documents = new TextLayer({
  name: "documents",
  parent: notes,
  x: 15,
  y: 15,
  text: "Documents",
  fontSize: 40,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

notes_2 = new TextLayer({
  name: "notes_2",
  parent: notes,
  x: 15,
  y: 252,
  text: "Notes",
  fontSize: 40,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

tasks = new TextLayer({
  name: "tasks",
  parent: notes,
  x: 790,
  y: 15,
  text: "Tasks",
  fontSize: 40,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "left",
  color: "rgba(71,71,71,1)"
});

rectangle = new Layer({
  name: "rectangle",
  parent: notes,
  x: 15,
  y: 75,
  width: 716,
  height: 161,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 6
});

rectangleCopy2 = new Layer({
  name: "rectangleCopy2",
  parent: notes,
  x: 15,
  y: 307,
  width: 716,
  height: 254,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 6
});

rectangleCopy = new Layer({
  name: "rectangleCopy",
  parent: notes,
  x: 790,
  y: 91,
  width: 211,
  height: 470,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 6
});

charge_Sheet = new Layer({
  name: "charge_Sheet",
  parent: notes,
  x: 39,
  y: 91,
  width: 86,
  height: 122,
  image: "images/Charge_Sheet.png"
});

evidenceSheet = new Layer({
  name: "evidenceSheet",
  parent: notes,
  x: 164,
  y: 91,
  width: 86,
  height: 121.64838709677417,
  image: "images/evidenceSheet.png"
});


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvTGF3eWVyLmZyYW1lci9tb2R1bGVzL1BvaW50ZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9kZWZhdWx0X2NvbnRlbnQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9maW5kTW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9MYXd5ZXIuZnJhbWVyL21vZHVsZXMvaW5wdXQtZnJhbWVyL2lucHV0LmpzIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvTGF3eWVyLmZyYW1lci9tb2R1bGVzL25vdGVzX2NvbnRlbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDb0JNLE9BQU8sQ0FBQztBQUtiLE1BQUE7Ozs7RUFBQSxPQUFDLENBQUEsTUFBRCxHQUFVLFNBQUMsS0FBRCxFQUFRLEtBQVI7QUFDVCxRQUFBO0lBQUEsSUFBQSxDQUFBLENBQTZCLGVBQUEsSUFBVyxlQUF4QyxDQUFBO01BQUEsbUJBQUEsQ0FBQSxFQUFBOztJQUNBLENBQUEsR0FBSSxZQUFBLENBQWEsS0FBYjtJQUNKLElBQUcsQ0FBQyxDQUFDLENBQUYsSUFBUSxDQUFDLENBQUMsQ0FBYjtNQUVDLFlBQUEsR0FBZSxLQUFLLENBQUM7TUFDckIsQ0FBQyxDQUFDLENBQUYsSUFBTyxZQUFZLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUYsSUFBTyxZQUFZLENBQUMsRUFKckI7S0FBQSxNQUFBO01BT0MsQ0FBQSxHQUFJLFlBQUEsQ0FBYSxLQUFiLEVBUEw7O0FBUUEsV0FBTztFQVhFOztFQWFWLE9BQUMsQ0FBQSxNQUFELEdBQVUsU0FBQyxLQUFELEVBQVEsS0FBUjtBQUNULFFBQUE7SUFBQSxJQUFBLENBQUEsQ0FBNkIsZUFBQSxJQUFXLGVBQXhDLENBQUE7TUFBQSxtQkFBQSxDQUFBLEVBQUE7O0lBQ0EsQ0FBQSxHQUFJLFlBQUEsQ0FBYSxLQUFiO0lBQ0osSUFBQSxDQUFBLENBQU8sYUFBQSxJQUFTLGFBQWhCLENBQUE7TUFFQyxDQUFBLEdBQUksWUFBQSxDQUFhLEtBQWI7TUFDSixrQkFBQSxHQUFxQixLQUFLLENBQUM7TUFDM0IsQ0FBQyxDQUFDLENBQUYsSUFBTyxrQkFBa0IsQ0FBQztNQUMxQixDQUFDLENBQUMsQ0FBRixJQUFPLGtCQUFrQixDQUFDLEVBTDNCOztBQU1BLFdBQU87RUFURTs7RUFjVixZQUFBLEdBQWUsU0FBQyxFQUFEO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlFBLElBQUEsMERBQUE7RUFBQTs7O0FBQUEsT0FBTyxDQUFDLGFBQVIsR0FBNEIsSUFBQSxLQUFBLENBQzNCO0VBQUEsQ0FBQSxFQUFFLENBQUY7RUFBSyxDQUFBLEVBQUUsTUFBTSxDQUFDLE1BQWQ7RUFBc0IsS0FBQSxFQUFNLE1BQU0sQ0FBQyxLQUFuQztFQUEwQyxNQUFBLEVBQU8sR0FBakQ7RUFDQSxJQUFBLEVBQUssd0RBREw7Q0FEMkI7O0FBSzVCLFdBQUEsR0FBYyxNQUFNLENBQUMsS0FBUCxHQUFlOztBQUM3QixXQUFBLEdBQWMsV0FBQSxHQUFjOztBQUc1QixXQUFBLEdBQ0MsTUFBTSxDQUFDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQU0sQ0FBQyxVQUF6QixFQUNDLG1CQUFBLEdBQXNCLFNBQUMsS0FBRCxFQUFRLEtBQVI7U0FDckIsQ0FBQyxLQUFBLEdBQVEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUF2QixDQUFBLEdBQTBDO0FBRHJCLENBRHZCLEVBSUM7RUFBQSxRQUFBLEVBQVUsU0FBQyxLQUFEO1dBQ1QsbUJBQUEsQ0FBb0IsS0FBcEIsRUFBMkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUE3QztFQURTLENBQVY7RUFHQSxVQUFBLEVBQVksU0FBQyxLQUFEO1dBQ1YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFuQixHQUFpQztFQUR0QixDQUhaO0VBTUEsT0FBQSxFQUFTLFNBQUMsS0FBRDtBQUNSLFFBQUE7SUFBRSxrQkFBb0IsS0FBSyxDQUFDO0lBQzVCLE9BQUEsR0FBVTtJQUNWLFlBQUEsR0FBZSxLQUFLLENBQUMsV0FBVyxDQUFDO0lBR2pDLElBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsWUFBakIsQ0FBSDtBQUNDLGFBQU8sbUJBQUEsQ0FBb0IsS0FBcEIsRUFBMkIsWUFBM0IsRUFEUjs7SUFJQSxhQUFBLEdBQWdCLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQTFCLENBQWdDLEdBQWhDO0FBRWhCLFlBQU8sYUFBYSxDQUFDLE1BQXJCO0FBQUEsV0FDTSxDQUROO1FBRUUsT0FBTyxDQUFDLEdBQVIsR0FBYyxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDZCxPQUFPLENBQUMsS0FBUixHQUFnQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO0FBSlg7QUFETixXQU9NLENBUE47UUFRRSxPQUFPLENBQUMsR0FBUixHQUFjLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNkLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNoQixPQUFPLENBQUMsTUFBUixHQUFpQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDakIsT0FBTyxDQUFDLElBQVIsR0FBZSxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7QUFKWDtBQVBOLFdBYU0sQ0FiTjtRQWNFLE9BQU8sQ0FBQyxHQUFSLEdBQWMsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2QsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNqQixPQUFPLENBQUMsSUFBUixHQUFlLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtBQUpYO0FBYk47UUFvQkUsT0FBTyxDQUFDLEdBQVIsR0FBYyxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDZCxPQUFPLENBQUMsS0FBUixHQUFnQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO0FBdkJqQjtXQTBCRSxDQUFDLE9BQU8sQ0FBQyxHQUFSLEdBQWMsZUFBZixDQUFBLEdBQStCLEtBQS9CLEdBQW1DLENBQUMsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsZUFBakIsQ0FBbkMsR0FBb0UsS0FBcEUsR0FBd0UsQ0FBQyxPQUFPLENBQUMsTUFBUixHQUFpQixlQUFsQixDQUF4RSxHQUEwRyxLQUExRyxHQUE4RyxDQUFDLE9BQU8sQ0FBQyxJQUFSLEdBQWUsZUFBaEIsQ0FBOUcsR0FBOEk7RUF0Q3hJLENBTlQ7Q0FKRDs7QUFtREQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUF0QixHQUNDO0VBQUEsS0FBQSxFQUNDO0lBQUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFdBQW5CO0dBREQ7OztBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGdCQUE3QixHQUNDO0VBQUEsS0FBQSxFQUFPLG1CQUFQOzs7QUFFSyxPQUFPLENBQUM7OztFQUNiLEtBQUMsQ0FBQSxNQUFELENBQVEsT0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQVYsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7YUFDSixDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBaEIsRUFBdUIsS0FBdkI7SUFESSxDQURMO0dBREQ7O0VBS0EsS0FBQyxDQUFBLE1BQUQsQ0FBUSxPQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFBVixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDthQUNKLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlO0lBRFgsQ0FETDtHQUREOztFQUthLGVBQUMsT0FBRDs7TUFBQyxVQUFVOzs7TUFDdkIsT0FBTyxDQUFDLFFBQVM7OztNQUNqQixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLGtCQUFzQixPQUFPLENBQUMsS0FBWCxHQUFzQix1QkFBdEIsR0FBbUQ7OztNQUM5RSxPQUFPLENBQUMsV0FBWTs7O01BQ3BCLE9BQU8sQ0FBQyxhQUFjOzs7TUFDdEIsT0FBTyxDQUFDLFVBQVc7OztNQUNuQixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxjQUFlOzs7TUFDdkIsT0FBTyxDQUFDLGtCQUFzQixLQUFLLENBQUMsUUFBTixDQUFBLENBQUgsR0FBeUIsS0FBekIsR0FBb0M7OztNQUMvRCxPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxXQUFZOzs7TUFDcEIsT0FBTyxDQUFDLGNBQWU7OztNQUN2QixPQUFPLENBQUMsZUFBZ0I7OztNQUN4QixPQUFPLENBQUMsaUJBQWtCOzs7TUFDMUIsT0FBTyxDQUFDLGFBQWM7OztNQUN0QixPQUFPLENBQUMsWUFBYTs7O01BQ3JCLE9BQU8sQ0FBQyxZQUFhOzs7TUFDckIsT0FBTyxDQUFDLGFBQWM7OztNQUN0QixPQUFPLENBQUMsYUFBYzs7O01BQ3RCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLFdBQVk7O0lBRXBCLHVDQUFNLE9BQU47SUFHQSxJQUFDLENBQUEsV0FBVyxDQUFDLFFBQWIsR0FBd0IsT0FBTyxDQUFDO0lBQ2hDLElBQUMsQ0FBQSxXQUFXLENBQUMsVUFBYixHQUEwQixPQUFPLENBQUM7SUFDbEMsSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLEdBQXVCLE9BQU8sQ0FBQztJQUUvQixJQUFnRCxnQ0FBaEQ7TUFBQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsT0FBTyxDQUFDLGlCQUE1Qjs7SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ1QsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLEdBQVksUUFBQSxHQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUYsQ0FBQSxDQUFEO0lBR3BCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsV0FBWSxDQUFBLE9BQUEsQ0FBWixDQUFxQixJQUFyQjtJQUNyQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFiLEdBQXNCLFdBQVksQ0FBQSxRQUFBLENBQVosQ0FBc0IsSUFBdEI7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBYixHQUF3QixXQUFZLENBQUEsVUFBQSxDQUFaLENBQXdCLElBQXhCO0lBQ3hCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsV0FBWSxDQUFBLFlBQUEsQ0FBWixDQUEwQixJQUExQjtJQUMxQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFiLEdBQXVCO0lBQ3ZCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQWIsR0FBc0I7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBYixHQUErQixPQUFPLENBQUM7SUFDdkMsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBYixHQUF1QixXQUFZLENBQUEsU0FBQSxDQUFaLENBQXVCLElBQXZCO0lBQ3ZCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsT0FBTyxDQUFDO0lBQ2xDLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsT0FBTyxDQUFDO0lBQzdCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsT0FBTyxDQUFDO0lBRWxDLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlLE9BQU8sQ0FBQztJQUN2QixJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsR0FBYyxPQUFPLENBQUM7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFQLEdBQXFCLE9BQU8sQ0FBQztJQUM3QixJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsT0FBTyxDQUFDLFFBQXhDO0lBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLENBQW9CLGFBQXBCLEVBQW1DLE9BQU8sQ0FBQyxXQUEzQztJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBUCxDQUFvQixjQUFwQixFQUFvQyxPQUFPLENBQUMsWUFBNUM7SUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsZ0JBQXBCLEVBQXNDLE9BQU8sQ0FBQyxjQUE5QztJQUNBLElBQUcsT0FBTyxDQUFDLFNBQVIsS0FBcUIsSUFBeEI7TUFDQyxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsV0FBcEIsRUFBaUMsSUFBakMsRUFERDs7SUFFQSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsT0FBTyxDQUFDLFVBQTFDO0lBQ0EsSUFBQyxDQUFBLElBQUQsR0FBUSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QjtJQUVSLElBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUixJQUFvQixDQUFDLE9BQU8sQ0FBQyxNQUE5QixDQUFBLElBQXlDLENBQUMsT0FBTyxDQUFDLE1BQXJEO01BQ0MsSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFOLEdBQWU7TUFDZixJQUFDLENBQUEsSUFBSSxDQUFDLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFNBQUMsS0FBRDtlQUNoQyxLQUFLLENBQUMsY0FBTixDQUFBO01BRGdDLENBQWpDLEVBRkQ7O0lBS0EsSUFBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLElBQUMsQ0FBQSxLQUFuQjtJQUNBLElBQUMsQ0FBQSxRQUFRLENBQUMsV0FBVixDQUFzQixJQUFDLENBQUEsSUFBdkI7SUFFQSxJQUFDLENBQUEsZUFBRCxHQUFtQjtJQUNuQixJQUFvRCxJQUFDLENBQUEsZ0JBQXJEO01BQUEsSUFBQyxDQUFBLHNCQUFELENBQXdCLE9BQU8sQ0FBQyxnQkFBaEMsRUFBQTs7SUFJQSxJQUFHLENBQUMsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFELElBQXFCLE9BQU8sQ0FBQyxlQUFSLEtBQTJCLElBQW5EO01BQ0MsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxTQUFBO1FBQ2hDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBdEIsQ0FBQTtlQUNBLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBdEIsQ0FBQTtNQUZnQyxDQUFqQztNQUdBLElBQUMsQ0FBQSxLQUFLLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBQTtlQUMvQixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQXRCLENBQThCLFNBQTlCO01BRCtCLENBQWhDLEVBSkQ7O0VBMUVZOztrQkFpRmIsc0JBQUEsR0FBd0IsU0FBQyxLQUFEO0FBQ3ZCLFFBQUE7SUFBQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0I7SUFDcEIsSUFBRyxzQkFBSDtNQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixJQUFDLENBQUEsU0FBM0IsRUFERDs7SUFFQSxJQUFDLENBQUEsU0FBRCxHQUFhLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ2IsSUFBQyxDQUFBLFNBQVMsQ0FBQyxJQUFYLEdBQWtCO0lBQ2xCLEdBQUEsR0FBTSxHQUFBLEdBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFYLEdBQWMsdUNBQWQsR0FBcUQsSUFBQyxDQUFBLGdCQUF0RCxHQUF1RTtJQUM3RSxJQUFDLENBQUEsU0FBUyxDQUFDLFdBQVgsQ0FBdUIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBdkI7V0FDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsSUFBQyxDQUFBLFNBQTNCO0VBUnVCOztrQkFVeEIsS0FBQSxHQUFPLFNBQUE7V0FDTixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsQ0FBQTtFQURNOztrQkFHUCxPQUFBLEdBQVMsU0FBQyxFQUFEO1dBQ1IsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxTQUFBO2FBQ2hDLEVBQUUsQ0FBQyxLQUFILENBQVMsSUFBVDtJQURnQyxDQUFqQztFQURROztrQkFJVCxNQUFBLEdBQVEsU0FBQyxFQUFEO1dBQ1AsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxTQUFBO2FBQy9CLEVBQUUsQ0FBQyxLQUFILENBQVMsSUFBVDtJQUQrQixDQUFoQztFQURPOzs7O0dBN0dtQjs7OztBQ2hFNUIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOO0FBRG9COztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDs7OztBQ1RsQixJQUFBOztBQUFBLE1BQU0sQ0FBQyxLQUFQLEdBQW1CLElBQUEsS0FBQSxDQUNsQjtFQUFBLElBQUEsRUFBTSxPQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0NBRGtCOztBQVFuQixTQUFBLEdBQWdCLElBQUEsU0FBQSxDQUNmO0VBQUEsSUFBQSxFQUFNLFdBQU47RUFDQSxNQUFBLEVBQVEsS0FEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sV0FKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxNQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGU7O0FBWWhCLE9BQUEsR0FBYyxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsTUFBQSxFQUFRLEtBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsSUFBQSxFQUFNLE9BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsTUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlkLEtBQUEsR0FBWSxJQUFBLFNBQUEsQ0FDWDtFQUFBLElBQUEsRUFBTSxPQUFOO0VBQ0EsTUFBQSxFQUFRLEtBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE9BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsTUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURXOztBQVlaLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ2Y7RUFBQSxJQUFBLEVBQU0sV0FBTjtFQUNBLE1BQUEsRUFBUSxLQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxDQVBkO0NBRGU7O0FBVWhCLGNBQUEsR0FBcUIsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLEtBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLENBUGQ7Q0FEb0I7O0FBVXJCLGFBQUEsR0FBb0IsSUFBQSxLQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxNQUFBLEVBQVEsS0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsQ0FQZDtDQURtQjs7QUFVcEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDbEI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxLQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxFQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxLQUFBLEVBQU8seUJBTlA7Q0FEa0I7O0FBU25CLGFBQUEsR0FBb0IsSUFBQSxLQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxNQUFBLEVBQVEsS0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sRUFKUDtFQUtBLE1BQUEsRUFBUSxrQkFMUjtFQU1BLEtBQUEsRUFBTywwQkFOUDtDQURtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBieSBKb3JkYW4gUm9iZXJ0IERvYnNvbiBvbiAxNCBBdWd1c3QgMjAxNVxuIyBcbiMgVXNlIHRvIG5vcm1hbGl6ZSBzY3JlZW4gJiBvZmZzZXQgeCx5IHZhbHVlcyBmcm9tIGNsaWNrIG9yIHRvdWNoIGV2ZW50cy5cbiNcbiMgVG8gR2V0IFN0YXJ0ZWQuLi5cbiNcbiMgMS4gUGxhY2UgdGhpcyBmaWxlIGluIEZyYW1lciBTdHVkaW8gbW9kdWxlcyBkaXJlY3RvcnlcbiNcbiMgMi4gSW4geW91ciBwcm9qZWN0IGluY2x1ZGU6XG4jICAgICB7UG9pbnRlcn0gPSByZXF1aXJlIFwiUG9pbnRlclwiXG4jXG4jIDMuIEZvciBzY3JlZW4gY29vcmRpbmF0ZXM6IFxuIyAgICAgYnRuLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LCBsYXllcikgLT4gcHJpbnQgUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVxuIyBcbiMgNC4gRm9yIGxheWVyIG9mZnNldCBjb29yZGluYXRlczogXG4jICAgICBidG4ub24gRXZlbnRzLkNsaWNrLCAoZXZlbnQsIGxheWVyKSAtPiBwcmludCBQb2ludGVyLm9mZnNldChldmVudCwgbGF5ZXIpXG4jXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5Qb2ludGVyXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHVibGljIE1ldGhvZHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdEBzY3JlZW4gPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdHNjcmVlbkFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0aWYgZS54IGFuZCBlLnlcblx0XHRcdCMgTW91c2UgRXZlbnRcblx0XHRcdHNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggKz0gc2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSArPSBzY3JlZW5Db29yZHMueVxuXHRcdGVsc2Vcblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRyZXR1cm4gZVxuXHRcdFx0XG5cdEBvZmZzZXQgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdG9mZnNldEFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0dW5sZXNzIGUueD8gYW5kIGUueT9cblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRcdHRhcmdldFNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggLT0gdGFyZ2V0U2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSAtPSB0YXJnZXRTY3JlZW5Db29yZHMueVxuXHRcdHJldHVybiBlXG5cdFxuXHQjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQcml2YXRlIEhlbHBlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdFxuXHRvZmZzZXRDb29yZHMgPSAoZXYpICAtPiBlID0gRXZlbnRzLnRvdWNoRXZlbnQgZXY7IHJldHVybiBjb29yZHMgZS5vZmZzZXRYLCBlLm9mZnNldFlcblx0Y2xpZW50Q29vcmRzID0gKGV2KSAgLT4gZSA9IEV2ZW50cy50b3VjaEV2ZW50IGV2OyByZXR1cm4gY29vcmRzIGUuY2xpZW50WCwgZS5jbGllbnRZXG5cdGNvb3JkcyAgICAgICA9ICh4LHkpIC0+IHJldHVybiB4OngsIHk6eVxuXHRcblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgRXJyb3IgSGFuZGxlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHRcblx0c2NyZWVuQXJndW1lbnRFcnJvciA9IC0+XG5cdFx0ZXJyb3IgbnVsbFxuXHRcdGNvbnNvbGUuZXJyb3IgXCJcIlwiXG5cdFx0XHRQb2ludGVyLnNjcmVlbigpIEVycm9yOiBZb3UgbXVzdCBwYXNzIGV2ZW50ICYgbGF5ZXIgYXJndW1lbnRzLiBcXG5cblx0XHRcdEV4YW1wbGU6IGxheWVyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LChldmVudCxsYXllcikgLT4gUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVwiXCJcIlxuXHRcdFx0XG5cdG9mZnNldEFyZ3VtZW50RXJyb3IgPSAtPlxuXHRcdGVycm9yIG51bGxcblx0XHRjb25zb2xlLmVycm9yIFwiXCJcIlxuXHRcdFx0UG9pbnRlci5vZmZzZXQoKSBFcnJvcjogWW91IG11c3QgcGFzcyBldmVudCAmIGxheWVyIGFyZ3VtZW50cy4gXFxuXG5cdFx0XHRFeGFtcGxlOiBsYXllci5vbiBFdmVudHMuVG91Y2hTdGFydCwoZXZlbnQsbGF5ZXIpIC0+IFBvaW50ZXIub2Zmc2V0KGV2ZW50LCBsYXllcilcIlwiXCIiLCJ3aW5kb3cuY29udGVudCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImNvbnRlbnRcIlxuXHR4OiAwXG5cdHk6IDBcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDEwNTJcblx0aGVpZ2h0OiA2MTRcblxubmFtZSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJuYW1lXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDE1XG5cdHRleHQ6IFwie05hbWV9XCJcblx0Zm9udFNpemU6IDQwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuY3VzdG9keVN0YXR1cyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjdXN0b2R5U3RhdHVzXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDE4MVxuXHR0ZXh0OiBcIntDdXN0b2R5U3RhdHVzfVwiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogMjAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlZmVycmVkID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInJlZmVycmVkXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDUxOFxuXHR5OiA0NVxuXHR0ZXh0OiBcIntSZWZlcnJlZH1cIlxuXHRmb250U2l6ZTogMzBcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5tYWdpc3RyYXRlID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcIm1hZ2lzdHJhdGVcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogNTE4XG5cdHk6IDE1OFxuXHR0ZXh0OiBcIntNYWdpc3RyYXRlfVwiXG5cdGZvbnRTaXplOiAzMFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmNvdXJ0ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImNvdXJ0X1wiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiA4MjZcblx0eTogMTYyXG5cdHRleHQ6IFwie0NvdXJ0fVwiXG5cdGZvbnRTaXplOiAzMFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlZmVyZWRGcm9tID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInJlZmVyZWRGcm9tXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDUxOFxuXHR5OiAxNVxuXHR0ZXh0OiBcIlJlZmVyZWQgRnJvbVwiXG5cdGZvbnRTaXplOiAyNFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNDAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmRMUklEID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImRMUklEXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDgyNlxuXHR5OiAyMVxuXHR0ZXh0OiBcIkRMUiBJRDpcIlxuXHRmb250U2l6ZTogMjBcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuZExSSURfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkTFJJRF8yXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDkxMFxuXHR5OiAyNVxuXHR0ZXh0OiBcIntETFJJRH1cIlxuXHRmb250U2l6ZTogMTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvdXJ0SUQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwiY291cnRJRFwiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiA5MTBcblx0eTogNTNcblx0dGV4dDogXCJ7Q291cnRJRH1cIlxuXHRmb250U2l6ZTogMTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvdXJ0SURfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjb3VydElEXzJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogODI2XG5cdHk6IDQ4XG5cdHRleHQ6IFwiQ291cnQgSUQ6XCJcblx0Zm9udFNpemU6IDIwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbm1hdHRlcnMgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibWF0dGVyc1wiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiAxNVxuXHR5OiAyNjNcblx0dGV4dDogXCJNYXR0ZXJzXCJcblx0Zm9udFNpemU6IDM2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbm1hZ2lzdHJhdGVfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJtYWdpc3RyYXRlXzJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogNTE4XG5cdHk6IDEyNVxuXHR0ZXh0OiBcIk1hZ2lzdHJhdGU6XCJcblx0Zm9udFNpemU6IDI0XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA0MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuY291cnRfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjb3VydF8yXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDgyNlxuXHR5OiAxMjlcblx0dGV4dDogXCJDb3VydDpcIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5vdGhlcndpc2VLbm93bkFzID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcIm90aGVyd2lzZUtub3duQXNcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogMTVcblx0eTogODZcblx0dGV4dDogXCJPdGhlcndpc2Uga25vd24gYXMge290aGVyTmFtZX1cIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5ib3JuRGF0ZU9mQmlydGggPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwiYm9ybkRhdGVPZkJpcnRoXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDEyOVxuXHR0ZXh0OiBcIkJvcm46IHtkYXRlT2ZCaXJ0aH1cIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5tYXR0ZXIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJtYXR0ZXJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogMlxuXHR5OiAzMDdcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDEwNDhcblx0aGVpZ2h0OiAxMDRcblxucmVjdGFuZ2xlID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXCJcblx0cGFyZW50OiBtYXR0ZXJcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA5NjBcblx0aGVpZ2h0OiAxMDRcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmYwZjBcIlxuXHRib3JkZXJSYWRpdXM6IDZcblxudGhlZnQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwidGhlZnRcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiA0MVxuXHR5OiAyOVxuXHR0ZXh0OiBcIlRoZWZ0XCJcblx0Zm9udFNpemU6IDMwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuZGVldHMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJkZWV0c1wiXG5cdHBhcmVudDogbWF0dGVyXG5cdHg6IDcwMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyNTlcblx0aGVpZ2h0OiAxMDFcblxuZGV0YWlscyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkZXRhaWxzXCJcblx0cGFyZW50OiBkZWV0c1xuXHR4OiAwXG5cdHk6IDBcblx0dGV4dDogXCJEZXRhaWxzXCJcblx0Zm9udFNpemU6IDE4XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxudGhlQWNjdXNlZEluTWVsYm8gPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwidGhlQWNjdXNlZEluTWVsYm9cIlxuXHRwYXJlbnQ6IGRlZXRzXG5cdHg6IDBcblx0eTogMjVcblx0d2lkdGg6IDI1OVxuXHR0ZXh0OiBcIlRoZSBBY2N1c2VkIGluIE1lbGJvdXJuZSBvbiB0aGUgMTYvOC8yMDE3IOKAqGRpZCBzdGVhbCBhIGNhbiBvZiBjb3JuIGF0IHRoZSB2YWx1ZSBvZiB0d28gZG9sbGFycyBhbmQgZmlmdHkgY2VudHNcIlxuXHRmb250U2l6ZTogMTRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5kYXRlb2ZjaGFyZ2UgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJkYXRlb2ZjaGFyZ2VcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiAyNDFcblx0eTogMjFcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDg5XG5cdGhlaWdodDogNTBcblxub25kYXkgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwib25kYXlcIlxuXHRwYXJlbnQ6IGRhdGVvZmNoYXJnZVxuXHR4OiAwXG5cdHk6IDBcblx0dGV4dDogXCJPbjpcIlxuXHRmb250U2l6ZTogMThcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5sYXllcl8xNjgyMDE3ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxheWVyXzE2ODIwMTdcIlxuXHRwYXJlbnQ6IGRhdGVvZmNoYXJnZVxuXHR4OiAwXG5cdHk6IDI1XG5cdHRleHQ6IFwiMTYvOC8yMDE3XCJcblx0Zm9udFNpemU6IDE4XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuc3VtbWFyeU9mZmVuY2UgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3VtbWFyeU9mZmVuY2VcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiA1MjRcblx0eTogMjFcblx0dGV4dDogXCJcIlwiU3VtbWFyeVxuT2ZmZW5jZVwiXCJcIlxuXHRmb250U2l6ZTogMThcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5cblxuIiwiX2dldEhpZXJhcmNoeSA9IChsYXllcikgLT5cbiAgc3RyaW5nID0gJydcbiAgZm9yIGEgaW4gbGF5ZXIuYW5jZXN0b3JzKClcbiAgICBzdHJpbmcgPSBhLm5hbWUrJz4nK3N0cmluZ1xuICByZXR1cm4gc3RyaW5nID0gc3RyaW5nK2xheWVyLm5hbWVcblxuX21hdGNoID0gKGhpZXJhcmNoeSwgc3RyaW5nKSAtPlxuICAjIHByZXBhcmUgcmVnZXggdG9rZW5zXG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMqPlxccyovZywnPicpICMgY2xlYW4gdXAgc3BhY2VzIGFyb3VuZCBhcnJvd3NcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcqJykuam9pbignW14+XSonKSAjIGFzdGVyaWtzIGFzIGxheWVyIG5hbWUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJykuam9pbignKD86LiopPicpICMgc3BhY2UgYXMgc3RydWN0dXJlIHdpbGRjYXJkXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnLCcpLmpvaW4oJyR8JykgIyBhbGxvdyBtdWx0aXBsZSBzZWFyY2hlcyB1c2luZyBjb21tYVxuICByZWdleFN0cmluZyA9IFwiKF58PilcIitzdHJpbmcrXCIkXCIgIyBhbHdheXMgYm90dG9tIGxheWVyLCBtYXliZSBwYXJ0IG9mIGhpZXJhcmNoeVxuXG4gIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpIFxuICByZXR1cm4gaGllcmFyY2h5Lm1hdGNoKHJlZ0V4cClcblxuX2ZpbmRBbGwgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT5cbiAgbGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblxuICBpZiBzZWxlY3Rvcj9cbiAgICBzdHJpbmdOZWVkc1JlZ2V4ID0gXy5maW5kIFsnKicsJyAnLCc+JywnLCddLCAoYykgLT4gXy5pbmNsdWRlcyBzZWxlY3RvcixjXG4gICAgdW5sZXNzIHN0cmluZ05lZWRzUmVnZXggb3IgZnJvbUxheWVyXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT4gXG4gICAgICAgIGlmIGxheWVyLm5hbWUgaXMgc2VsZWN0b3IgdGhlbiB0cnVlXG4gICAgZWxzZVxuICAgICAgbGF5ZXJzID0gXy5maWx0ZXIgbGF5ZXJzLCAobGF5ZXIpIC0+XG4gICAgICAgICAgaGllcmFyY2h5ID0gX2dldEhpZXJhcmNoeShsYXllcilcbiAgICAgICAgICBpZiBmcm9tTGF5ZXI/XG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBmcm9tTGF5ZXIubmFtZSsnICcrc2VsZWN0b3IpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgX21hdGNoKGhpZXJhcmNoeSwgc2VsZWN0b3IpXG4gIGVsc2VcbiAgICBsYXllcnNcblxuXG4jIEdsb2JhbFxuZXhwb3J0cy5GaW5kICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5leHBvcnRzLsaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5cbmV4cG9ydHMuRmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuZXhwb3J0cy7GksaSICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilcblxuIyBNZXRob2RzXG5MYXllcjo6ZmluZCAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5MYXllcjo6xpIgICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVswXVxuXG5MYXllcjo6ZmluZEFsbCAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApXG5MYXllcjo6xpLGkiAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQCkiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuMC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfaW5wdXRTdHlsZSwgY2FsY3VsYXRlUGl4ZWxSYXRpbywgZ3Jvd3RoUmF0aW8sIGltYWdlSGVpZ2h0O1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllcih7XG4gICAgeDogMCxcbiAgICB5OiBTY3JlZW4uaGVpZ2h0LFxuICAgIHdpZHRoOiBTY3JlZW4ud2lkdGgsXG4gICAgaGVpZ2h0OiA0MzIsXG4gICAgaHRtbDogXCI8aW1nIHN0eWxlPSd3aWR0aDogMTAwJTsnIHNyYz0nbW9kdWxlcy9rZXlib2FyZC5wbmcnLz5cIlxuICB9KTtcblxuICAvL3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuICBncm93dGhSYXRpbyA9IFNjcmVlbi53aWR0aCAvIDczMjtcblxuICBpbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyO1xuXG4gIC8vIEV4dGVuZHMgdGhlIExheWVyU3R5bGUgY2xhc3Mgd2hpY2ggZG9lcyB0aGUgcGl4ZWwgcmF0aW8gY2FsY3VsYXRpb25zIGluIGZyYW1lclxuICBfaW5wdXRTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLCBjYWxjdWxhdGVQaXhlbFJhdGlvID0gZnVuY3Rpb24obGF5ZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAqIGxheWVyLmNvbnRleHQucGl4ZWxNdWx0aXBsaWVyKSArIFwicHhcIjtcbiAgfSwge1xuICAgIGZvbnRTaXplOiBmdW5jdGlvbihsYXllcikge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIGxheWVyLl9wcm9wZXJ0aWVzLmZvbnRTaXplKTtcbiAgICB9LFxuICAgIGxpbmVIZWlnaHQ6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICByZXR1cm4gbGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCArIFwiZW1cIjtcbiAgICB9LFxuICAgIHBhZGRpbmc6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICB2YXIgcGFkZGluZywgcGFkZGluZ1ZhbHVlLCBwYWRkaW5nVmFsdWVzLCBwaXhlbE11bHRpcGxpZXI7XG4gICAgICAoe3BpeGVsTXVsdGlwbGllcn0gPSBsYXllci5jb250ZXh0KTtcbiAgICAgIHBhZGRpbmcgPSBbXTtcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmc7XG4gICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWRkaW5nVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBwYWRkaW5nVmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgdGhleSBjb21lIGFzIHN0cmluZyAoZS5nLiBcIjEgMiAzIDRcIilcbiAgICAgIHBhZGRpbmdWYWx1ZXMgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nLnNwbGl0KFwiIFwiKTtcbiAgICAgIHN3aXRjaCAocGFkZGluZ1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICAvLyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuICAgICAgcmV0dXJuIGAke3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAke3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4YDtcbiAgICB9XG4gIH0pO1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMgPSB7XG4gICAgc2hvd246IHtcbiAgICAgIHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuICAgIH1cbiAgfTtcblxuICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSB7XG4gICAgY3VydmU6IFwic3ByaW5nKDUwMCw1MCwxNSlcIlxuICB9O1xuXG4gIGV4cG9ydHMuSW5wdXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgSW5wdXQgZXh0ZW5kcyBMYXllciB7XG4gICAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2V0dXAgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc2V0dXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy53aWR0aCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy53aWR0aCA9IFNjcmVlbi53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jbGlwID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmNsaXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5oZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuc2V0dXAgPyBcInJnYmEoMjU1LCA2MCwgNDcsIC41KVwiIDogXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRTaXplID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmZvbnRTaXplID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubGluZUhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5saW5lSGVpZ2h0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudmlydHVhbEtleWJvYXJkID0gVXRpbHMuaXNNb2JpbGUoKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50eXBlID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5nb0J1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5nb0J1dHRvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db3JyZWN0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9Db3JyZWN0ID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db21wbGV0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvQ29tcGxldGUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3BlbGxDaGVjayA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5zcGVsbENoZWNrID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0Q29sb3IgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGV4dENvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udEZhbWlseSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250RmFtaWx5ID0gXCItYXBwbGUtc3lzdGVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udFdlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250V2VpZ2h0ID0gXCI1MDBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc3VibWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGFiSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQuaWQgPSBgaW5wdXQtJHtfLm5vdygpfWA7XG4gICAgICAgIC8vIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXgpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIG9wdGlvbnMuYXV0b0NvcnJlY3QpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSk7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2ZvY3VzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2spO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgaWYgKChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Iob3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdmFyIGNzcztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gY29sb3I7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTdHlsZSAhPSBudWxsKSB7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLnBhZ2VTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHRoaXMucGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGNzcyA9IGAjJHt0aGlzLmlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoaXMucGxhY2Vob2xkZXJDb2xvcn07IH1gO1xuICAgICAgICB0aGlzLnBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5wYWdlU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBmb2N1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgb25Gb2N1cyhjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNiLmFwcGx5KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25CbHVyKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjYi5hcHBseSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgSW5wdXQuZGVmaW5lKFwic3R5bGVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc3R5bGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQodGhpcy5pbnB1dC5zdHlsZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgSW5wdXQuZGVmaW5lKFwidmFsdWVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIElucHV0O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlucHV0LmpzLm1hcFxuIiwiZXhwb3J0cy5rZXlib2FyZExheWVyID0gbmV3IExheWVyXG5cdHg6MCwgeTpTY3JlZW4uaGVpZ2h0LCB3aWR0aDpTY3JlZW4ud2lkdGgsIGhlaWdodDo0MzJcblx0aHRtbDpcIjxpbWcgc3R5bGU9J3dpZHRoOiAxMDAlOycgc3JjPSdtb2R1bGVzL2tleWJvYXJkLnBuZycvPlwiXG5cbiNzY3JlZW4gd2lkdGggdnMuIHNpemUgb2YgaW1hZ2Ugd2lkdGhcbmdyb3d0aFJhdGlvID0gU2NyZWVuLndpZHRoIC8gNzMyXG5pbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyXG5cbiMgRXh0ZW5kcyB0aGUgTGF5ZXJTdHlsZSBjbGFzcyB3aGljaCBkb2VzIHRoZSBwaXhlbCByYXRpbyBjYWxjdWxhdGlvbnMgaW4gZnJhbWVyXG5faW5wdXRTdHlsZSA9XG5cdE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLFxuXHRcdGNhbGN1bGF0ZVBpeGVsUmF0aW8gPSAobGF5ZXIsIHZhbHVlKSAtPlxuXHRcdFx0KHZhbHVlICogbGF5ZXIuY29udGV4dC5waXhlbE11bHRpcGxpZXIpICsgXCJweFwiXG5cblx0XHRmb250U2l6ZTogKGxheWVyKSAtPlxuXHRcdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgbGF5ZXIuX3Byb3BlcnRpZXMuZm9udFNpemUpXG5cblx0XHRsaW5lSGVpZ2h0OiAobGF5ZXIpIC0+XG5cdFx0XHQobGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCkgKyBcImVtXCJcblxuXHRcdHBhZGRpbmc6IChsYXllcikgLT5cblx0XHRcdHsgcGl4ZWxNdWx0aXBsaWVyIH0gPSBsYXllci5jb250ZXh0XG5cdFx0XHRwYWRkaW5nID0gW11cblx0XHRcdHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmdcblxuXHRcdFx0IyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG5cdFx0XHRpZiBOdW1iZXIuaXNJbnRlZ2VyKHBhZGRpbmdWYWx1ZSlcblx0XHRcdFx0cmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIHBhZGRpbmdWYWx1ZSlcblxuXHRcdFx0IyBJZiB3ZSBoYXZlIG11bHRpcGxlIHZhbHVlcyB0aGV5IGNvbWUgYXMgc3RyaW5nIChlLmcuIFwiMSAyIDMgNFwiKVxuXHRcdFx0cGFkZGluZ1ZhbHVlcyA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmcuc3BsaXQoXCIgXCIpXG5cblx0XHRcdHN3aXRjaCBwYWRkaW5nVmFsdWVzLmxlbmd0aFxuXHRcdFx0XHR3aGVuIDRcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1szXSlcblxuXHRcdFx0XHR3aGVuIDNcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHR3aGVuIDJcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cblx0XHRcdCMgUmV0dXJuIGFzIDQtdmFsdWUgc3RyaW5nIChlLmcgXCIxcHggMnB4IDNweCA0cHhcIilcblx0XHRcdFwiI3twYWRkaW5nLnRvcCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcucmlnaHQgKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLmJvdHRvbSAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcubGVmdCAqIHBpeGVsTXVsdGlwbGllcn1weFwiXG5cdClcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcyA9XG5cdHNob3duOlxuXHRcdHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRjdXJ2ZTogXCJzcHJpbmcoNTAwLDUwLDE1KVwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXQgZXh0ZW5kcyBMYXllclxuXHRAZGVmaW5lIFwic3R5bGVcIixcblx0XHRnZXQ6IC0+IEBpbnB1dC5zdHlsZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0Xy5leHRlbmQgQGlucHV0LnN0eWxlLCB2YWx1ZVxuXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAaW5wdXQudmFsdWUgPSB2YWx1ZVxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdG9wdGlvbnMuc2V0dXAgPz0gZmFsc2Vcblx0XHRvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuY2xpcCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IDYwXG5cdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gaWYgb3B0aW9ucy5zZXR1cCB0aGVuIFwicmdiYSgyNTUsIDYwLCA0NywgLjUpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcblx0XHRvcHRpb25zLmZvbnRTaXplID89IDMwXG5cdFx0b3B0aW9ucy5saW5lSGVpZ2h0ID89IDFcblx0XHRvcHRpb25zLnBhZGRpbmcgPz0gMTBcblx0XHRvcHRpb25zLnRleHQgPz0gXCJcIlxuXHRcdG9wdGlvbnMucGxhY2Vob2xkZXIgPz0gXCJcIlxuXHRcdG9wdGlvbnMudmlydHVhbEtleWJvYXJkID89IGlmIFV0aWxzLmlzTW9iaWxlKCkgdGhlbiBmYWxzZSBlbHNlIHRydWVcblx0XHRvcHRpb25zLnR5cGUgPz0gXCJ0ZXh0XCJcblx0XHRvcHRpb25zLmdvQnV0dG9uID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvQ29ycmVjdCA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9Db21wbGV0ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9DYXBpdGFsaXplID89IFwib25cIlxuXHRcdG9wdGlvbnMuc3BlbGxDaGVjayA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9mb2N1cyA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGV4dENvbG9yID89IFwiIzAwMFwiXG5cdFx0b3B0aW9ucy5mb250RmFtaWx5ID89IFwiLWFwcGxlLXN5c3RlbVwiXG5cdFx0b3B0aW9ucy5mb250V2VpZ2h0ID89IFwiNTAwXCJcblx0XHRvcHRpb25zLnN1Ym1pdCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGFiSW5kZXggPz0gMFxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG5cdFx0QF9wcm9wZXJ0aWVzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBfcHJvcGVydGllcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0XG5cdFx0QF9wcm9wZXJ0aWVzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdcblxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcj9cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXHRcdEBpbnB1dC5pZCA9IFwiaW5wdXQtI3tfLm5vdygpfVwiXG5cblx0XHQjIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0QGlucHV0LnN0eWxlLndpZHRoID0gX2lucHV0U3R5bGVbXCJ3aWR0aFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5oZWlnaHQgPSBfaW5wdXRTdHlsZVtcImhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IF9pbnB1dFN0eWxlW1wiZm9udFNpemVcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUubGluZUhlaWdodCA9IF9pbnB1dFN0eWxlW1wibGluZUhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAaW5wdXQuc3R5bGUucGFkZGluZyA9IF9pbnB1dFN0eWxlW1wicGFkZGluZ1wiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gb3B0aW9ucy50ZXh0Q29sb3Jcblx0XHRAaW5wdXQuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodFxuXG5cdFx0QGlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0XG5cdFx0QGlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGVcblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXhcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvcnJlY3RcIiwgb3B0aW9ucy5hdXRvQ29ycmVjdFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29tcGxldGVcIiwgb3B0aW9ucy5hdXRvQ29tcGxldGVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZVxuXHRcdGlmIG9wdGlvbnMuYXV0b2ZvY3VzID09IHRydWVcblx0XHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvZm9jdXNcIiwgdHJ1ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJzcGVsbGNoZWNrXCIsIG9wdGlvbnMuc3BlbGxDaGVja1xuXHRcdEBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImZvcm1cIlxuXG5cdFx0aWYgKG9wdGlvbnMuZ29CdXR0b24gJiYgIW9wdGlvbnMuc3VibWl0KSB8fCAhb3B0aW9ucy5zdWJtaXRcblx0XHRcdEBmb3JtLmFjdGlvbiA9IFwiI1wiXG5cdFx0XHRAZm9ybS5hZGRFdmVudExpc3RlbmVyIFwic3VibWl0XCIsIChldmVudCkgLT5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0QGZvcm0uYXBwZW5kQ2hpbGQgQGlucHV0XG5cdFx0QF9lbGVtZW50LmFwcGVuZENoaWxkIEBmb3JtXG5cblx0XHRAYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0QHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Igb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIEBwbGFjZWhvbGRlckNvbG9yXG5cblx0XHQjb25seSBzaG93IGhvbm9yIHZpcnR1YWwga2V5Ym9hcmQgb3B0aW9uIHdoZW4gbm90IG9uIG1vYmlsZSxcblx0XHQjb3RoZXJ3aXNlIGlnbm9yZVxuXHRcdGlmICFVdGlscy5pc01vYmlsZSgpICYmIG9wdGlvbnMudmlydHVhbEtleWJvYXJkIGlzIHRydWVcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZUN5Y2xlKClcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYW5pbWF0ZShcImRlZmF1bHRcIilcblxuXHR1cGRhdGVQbGFjZWhvbGRlckNvbG9yOiAoY29sb3IpIC0+XG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBjb2xvclxuXHRcdGlmIEBwYWdlU3R5bGU/XG5cdFx0XHRkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkIEBwYWdlU3R5bGVcblx0XHRAcGFnZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcInN0eWxlXCJcblx0XHRAcGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCJcblx0XHRjc3MgPSBcIiMje0BpbnB1dC5pZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAcGxhY2Vob2xkZXJDb2xvcn07IH1cIlxuXHRcdEBwYWdlU3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUgY3NzKVxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQgQHBhZ2VTdHlsZVxuXG5cdGZvY3VzOiAoKSAtPlxuXHRcdEBpbnB1dC5mb2N1cygpXG5cblx0b25Gb2N1czogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG5cblx0b25CbHVyOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIndpbmRvdy5ub3RlcyA9IG5ldyBMYXllclxuXHRuYW1lOiBcIm5vdGVzXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAxMDUyXG5cdGhlaWdodDogNjE0XG5cbmRvY3VtZW50cyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkb2N1bWVudHNcIlxuXHRwYXJlbnQ6IG5vdGVzXG5cdHg6IDE1XG5cdHk6IDE1XG5cdHRleHQ6IFwiRG9jdW1lbnRzXCJcblx0Zm9udFNpemU6IDQwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxubm90ZXNfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJub3Rlc18yXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAxNVxuXHR5OiAyNTJcblx0dGV4dDogXCJOb3Rlc1wiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnRhc2tzID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInRhc2tzXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiA3OTBcblx0eTogMTVcblx0dGV4dDogXCJUYXNrc1wiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlY3RhbmdsZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZVwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogMTVcblx0eTogNzVcblx0d2lkdGg6IDcxNlxuXHRoZWlnaHQ6IDE2MVxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG5cdGJvcmRlclJhZGl1czogNlxuXG5yZWN0YW5nbGVDb3B5MiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZUNvcHkyXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAxNVxuXHR5OiAzMDdcblx0d2lkdGg6IDcxNlxuXHRoZWlnaHQ6IDI1NFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG5cdGJvcmRlclJhZGl1czogNlxuXG5yZWN0YW5nbGVDb3B5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlQ29weVwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogNzkwXG5cdHk6IDkxXG5cdHdpZHRoOiAyMTFcblx0aGVpZ2h0OiA0NzBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuXHRib3JkZXJSYWRpdXM6IDZcblxuY2hhcmdlX1NoZWV0ID0gbmV3IExheWVyXG5cdG5hbWU6IFwiY2hhcmdlX1NoZWV0XCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAzOVxuXHR5OiA5MVxuXHR3aWR0aDogODZcblx0aGVpZ2h0OiAxMjJcblx0aW1hZ2U6IFwiaW1hZ2VzL0NoYXJnZV9TaGVldC5wbmdcIlxuXG5ldmlkZW5jZVNoZWV0ID0gbmV3IExheWVyXG5cdG5hbWU6IFwiZXZpZGVuY2VTaGVldFwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogMTY0XG5cdHk6IDkxXG5cdHdpZHRoOiA4NlxuXHRoZWlnaHQ6IDEyMS42NDgzODcwOTY3NzQxN1xuXHRpbWFnZTogXCJpbWFnZXMvZXZpZGVuY2VTaGVldC5wbmdcIlxuXG4iXX0=
