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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvTGF3eWVyLmZyYW1lci9tb2R1bGVzL1BvaW50ZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9kZWZhdWx0X2NvbnRlbnQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9maW5kTW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9MYXd5ZXIuZnJhbWVyL21vZHVsZXMvaW5wdXQtZnJhbWVyL2lucHV0LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9MYXd5ZXIuZnJhbWVyL21vZHVsZXMvaW5wdXQtZnJhbWVyL2lucHV0LmpzIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0xhd3llci5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvTGF3eWVyLmZyYW1lci9tb2R1bGVzL25vdGVzX2NvbnRlbnQuY29m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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Qjs7QUFVcEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDbEI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxLQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxFQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxLQUFBLEVBQU8seUJBTlA7Q0FEa0I7O0FBU25CLGFBQUEsR0FBb0IsSUFBQSxLQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxNQUFBLEVBQVEsS0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sRUFKUDtFQUtBLE1BQUEsRUFBUSxrQkFMUjtFQU1BLEtBQUEsRUFBTywwQkFOUDtDQURtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiMgQ3JlYXRlZCBieSBKb3JkYW4gUm9iZXJ0IERvYnNvbiBvbiAxNCBBdWd1c3QgMjAxNVxuIyBcbiMgVXNlIHRvIG5vcm1hbGl6ZSBzY3JlZW4gJiBvZmZzZXQgeCx5IHZhbHVlcyBmcm9tIGNsaWNrIG9yIHRvdWNoIGV2ZW50cy5cbiNcbiMgVG8gR2V0IFN0YXJ0ZWQuLi5cbiNcbiMgMS4gUGxhY2UgdGhpcyBmaWxlIGluIEZyYW1lciBTdHVkaW8gbW9kdWxlcyBkaXJlY3RvcnlcbiNcbiMgMi4gSW4geW91ciBwcm9qZWN0IGluY2x1ZGU6XG4jICAgICB7UG9pbnRlcn0gPSByZXF1aXJlIFwiUG9pbnRlclwiXG4jXG4jIDMuIEZvciBzY3JlZW4gY29vcmRpbmF0ZXM6IFxuIyAgICAgYnRuLm9uIEV2ZW50cy5DbGljaywgKGV2ZW50LCBsYXllcikgLT4gcHJpbnQgUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVxuIyBcbiMgNC4gRm9yIGxheWVyIG9mZnNldCBjb29yZGluYXRlczogXG4jICAgICBidG4ub24gRXZlbnRzLkNsaWNrLCAoZXZlbnQsIGxheWVyKSAtPiBwcmludCBQb2ludGVyLm9mZnNldChldmVudCwgbGF5ZXIpXG4jXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY2xhc3MgZXhwb3J0cy5Qb2ludGVyXG5cblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgUHVibGljIE1ldGhvZHMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5cdEBzY3JlZW4gPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdHNjcmVlbkFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0aWYgZS54IGFuZCBlLnlcblx0XHRcdCMgTW91c2UgRXZlbnRcblx0XHRcdHNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggKz0gc2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSArPSBzY3JlZW5Db29yZHMueVxuXHRcdGVsc2Vcblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRyZXR1cm4gZVxuXHRcdFx0XG5cdEBvZmZzZXQgPSAoZXZlbnQsIGxheWVyKSAtPlxuXHRcdG9mZnNldEFyZ3VtZW50RXJyb3IoKSB1bmxlc3MgZXZlbnQ/IGFuZCBsYXllcj9cblx0XHRlID0gb2Zmc2V0Q29vcmRzIGV2ZW50XG5cdFx0dW5sZXNzIGUueD8gYW5kIGUueT9cblx0XHRcdCMgVG91Y2ggRXZlbnRcblx0XHRcdGUgPSBjbGllbnRDb29yZHMgZXZlbnRcblx0XHRcdHRhcmdldFNjcmVlbkNvb3JkcyA9IGxheWVyLnNjcmVlbkZyYW1lXG5cdFx0XHRlLnggLT0gdGFyZ2V0U2NyZWVuQ29vcmRzLnhcblx0XHRcdGUueSAtPSB0YXJnZXRTY3JlZW5Db29yZHMueVxuXHRcdHJldHVybiBlXG5cdFxuXHQjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblx0IyBQcml2YXRlIEhlbHBlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdFxuXHRvZmZzZXRDb29yZHMgPSAoZXYpICAtPiBlID0gRXZlbnRzLnRvdWNoRXZlbnQgZXY7IHJldHVybiBjb29yZHMgZS5vZmZzZXRYLCBlLm9mZnNldFlcblx0Y2xpZW50Q29vcmRzID0gKGV2KSAgLT4gZSA9IEV2ZW50cy50b3VjaEV2ZW50IGV2OyByZXR1cm4gY29vcmRzIGUuY2xpZW50WCwgZS5jbGllbnRZXG5cdGNvb3JkcyAgICAgICA9ICh4LHkpIC0+IHJldHVybiB4OngsIHk6eVxuXHRcblx0IyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cdCMgRXJyb3IgSGFuZGxlciBNZXRob2RzICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXHRcblx0c2NyZWVuQXJndW1lbnRFcnJvciA9IC0+XG5cdFx0ZXJyb3IgbnVsbFxuXHRcdGNvbnNvbGUuZXJyb3IgXCJcIlwiXG5cdFx0XHRQb2ludGVyLnNjcmVlbigpIEVycm9yOiBZb3UgbXVzdCBwYXNzIGV2ZW50ICYgbGF5ZXIgYXJndW1lbnRzLiBcXG5cblx0XHRcdEV4YW1wbGU6IGxheWVyLm9uIEV2ZW50cy5Ub3VjaFN0YXJ0LChldmVudCxsYXllcikgLT4gUG9pbnRlci5zY3JlZW4oZXZlbnQsIGxheWVyKVwiXCJcIlxuXHRcdFx0XG5cdG9mZnNldEFyZ3VtZW50RXJyb3IgPSAtPlxuXHRcdGVycm9yIG51bGxcblx0XHRjb25zb2xlLmVycm9yIFwiXCJcIlxuXHRcdFx0UG9pbnRlci5vZmZzZXQoKSBFcnJvcjogWW91IG11c3QgcGFzcyBldmVudCAmIGxheWVyIGFyZ3VtZW50cy4gXFxuXG5cdFx0XHRFeGFtcGxlOiBsYXllci5vbiBFdmVudHMuVG91Y2hTdGFydCwoZXZlbnQsbGF5ZXIpIC0+IFBvaW50ZXIub2Zmc2V0KGV2ZW50LCBsYXllcilcIlwiXCIiLCJ3aW5kb3cuY29udGVudCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImNvbnRlbnRcIlxuXHR4OiAwXG5cdHk6IDBcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDEwNTJcblx0aGVpZ2h0OiA2MTRcblxubmFtZSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJuYW1lXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDE1XG5cdHRleHQ6IFwie05hbWV9XCJcblx0Zm9udFNpemU6IDQwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuY3VzdG9keVN0YXR1cyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjdXN0b2R5U3RhdHVzXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDE4MVxuXHR0ZXh0OiBcIntDdXN0b2R5U3RhdHVzfVwiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogMjAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlZmVycmVkID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInJlZmVycmVkXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDUxOFxuXHR5OiA0NVxuXHR0ZXh0OiBcIntSZWZlcnJlZH1cIlxuXHRmb250U2l6ZTogMzBcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5tYWdpc3RyYXRlID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcIm1hZ2lzdHJhdGVcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogNTE4XG5cdHk6IDE1OFxuXHR0ZXh0OiBcIntNYWdpc3RyYXRlfVwiXG5cdGZvbnRTaXplOiAzMFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmNvdXJ0ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImNvdXJ0X1wiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiA4MjZcblx0eTogMTYyXG5cdHRleHQ6IFwie0NvdXJ0fVwiXG5cdGZvbnRTaXplOiAzMFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlZmVyZWRGcm9tID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInJlZmVyZWRGcm9tXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDUxOFxuXHR5OiAxNVxuXHR0ZXh0OiBcIlJlZmVyZWQgRnJvbVwiXG5cdGZvbnRTaXplOiAyNFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNDAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmRMUklEID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImRMUklEXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDgyNlxuXHR5OiAyMVxuXHR0ZXh0OiBcIkRMUiBJRDpcIlxuXHRmb250U2l6ZTogMjBcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuZExSSURfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkTFJJRF8yXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDkxMFxuXHR5OiAyNVxuXHR0ZXh0OiBcIntETFJJRH1cIlxuXHRmb250U2l6ZTogMTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvdXJ0SUQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwiY291cnRJRFwiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiA5MTBcblx0eTogNTNcblx0dGV4dDogXCJ7Q291cnRJRH1cIlxuXHRmb250U2l6ZTogMTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwicmlnaHRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvdXJ0SURfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjb3VydElEXzJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogODI2XG5cdHk6IDQ4XG5cdHRleHQ6IFwiQ291cnQgSUQ6XCJcblx0Zm9udFNpemU6IDIwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbm1hdHRlcnMgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibWF0dGVyc1wiXG5cdHBhcmVudDogY29udGVudFxuXHR4OiAxNVxuXHR5OiAyNjNcblx0dGV4dDogXCJNYXR0ZXJzXCJcblx0Zm9udFNpemU6IDM2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbm1hZ2lzdHJhdGVfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJtYWdpc3RyYXRlXzJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogNTE4XG5cdHk6IDEyNVxuXHR0ZXh0OiBcIk1hZ2lzdHJhdGU6XCJcblx0Zm9udFNpemU6IDI0XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA0MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuY291cnRfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJjb3VydF8yXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDgyNlxuXHR5OiAxMjlcblx0dGV4dDogXCJDb3VydDpcIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5vdGhlcndpc2VLbm93bkFzID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcIm90aGVyd2lzZUtub3duQXNcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogMTVcblx0eTogODZcblx0dGV4dDogXCJPdGhlcndpc2Uga25vd24gYXMge290aGVyTmFtZX1cIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5ib3JuRGF0ZU9mQmlydGggPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwiYm9ybkRhdGVPZkJpcnRoXCJcblx0cGFyZW50OiBjb250ZW50XG5cdHg6IDE1XG5cdHk6IDEyOVxuXHR0ZXh0OiBcIkJvcm46IHtkYXRlT2ZCaXJ0aH1cIlxuXHRmb250U2l6ZTogMjRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5tYXR0ZXIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJtYXR0ZXJcIlxuXHRwYXJlbnQ6IGNvbnRlbnRcblx0eDogMlxuXHR5OiAzMDdcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDEwNDhcblx0aGVpZ2h0OiAxMDRcblxucmVjdGFuZ2xlID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXCJcblx0cGFyZW50OiBtYXR0ZXJcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA5NjBcblx0aGVpZ2h0OiAxMDRcblx0YmFja2dyb3VuZENvbG9yOiBcIiNmZmYwZjBcIlxuXHRib3JkZXJSYWRpdXM6IDZcblxudGhlZnQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwidGhlZnRcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiA0MVxuXHR5OiAyOVxuXHR0ZXh0OiBcIlRoZWZ0XCJcblx0Zm9udFNpemU6IDMwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuZGVldHMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJkZWV0c1wiXG5cdHBhcmVudDogbWF0dGVyXG5cdHg6IDcwMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyNTlcblx0aGVpZ2h0OiAxMDFcblxuZGV0YWlscyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkZXRhaWxzXCJcblx0cGFyZW50OiBkZWV0c1xuXHR4OiAwXG5cdHk6IDBcblx0dGV4dDogXCJEZXRhaWxzXCJcblx0Zm9udFNpemU6IDE4XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxudGhlQWNjdXNlZEluTWVsYm8gPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwidGhlQWNjdXNlZEluTWVsYm9cIlxuXHRwYXJlbnQ6IGRlZXRzXG5cdHg6IDBcblx0eTogMjVcblx0d2lkdGg6IDI1OVxuXHR0ZXh0OiBcIlRoZSBBY2N1c2VkIGluIE1lbGJvdXJuZSBvbiB0aGUgMTYvOC8yMDE3IOKAqGRpZCBzdGVhbCBhIGNhbiBvZiBjb3JuIGF0IHRoZSB2YWx1ZSBvZiB0d28gZG9sbGFycyBhbmQgZmlmdHkgY2VudHNcIlxuXHRmb250U2l6ZTogMTRcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDQwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5kYXRlb2ZjaGFyZ2UgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJkYXRlb2ZjaGFyZ2VcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiAyNDFcblx0eTogMjFcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDg5XG5cdGhlaWdodDogNTBcblxub25kYXkgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwib25kYXlcIlxuXHRwYXJlbnQ6IGRhdGVvZmNoYXJnZVxuXHR4OiAwXG5cdHk6IDBcblx0dGV4dDogXCJPbjpcIlxuXHRmb250U2l6ZTogMThcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5sYXllcl8xNjgyMDE3ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxheWVyXzE2ODIwMTdcIlxuXHRwYXJlbnQ6IGRhdGVvZmNoYXJnZVxuXHR4OiAwXG5cdHk6IDI1XG5cdHRleHQ6IFwiMTYvOC8yMDE3XCJcblx0Zm9udFNpemU6IDE4XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuc3VtbWFyeU9mZmVuY2UgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3VtbWFyeU9mZmVuY2VcIlxuXHRwYXJlbnQ6IG1hdHRlclxuXHR4OiA1MjRcblx0eTogMjFcblx0dGV4dDogXCJcIlwiU3VtbWFyeVxuT2ZmZW5jZVwiXCJcIlxuXHRmb250U2l6ZTogMThcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwibGVmdFwiXG5cdGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5cblxuIiwiX2dldEhpZXJhcmNoeSA9IChsYXllcikgLT5cbiAgc3RyaW5nID0gJydcbiAgZm9yIGEgaW4gbGF5ZXIuYW5jZXN0b3JzKClcbiAgICBzdHJpbmcgPSBhLm5hbWUrJz4nK3N0cmluZ1xuICByZXR1cm4gc3RyaW5nID0gc3RyaW5nK2xheWVyLm5hbWVcblxuX21hdGNoID0gKGhpZXJhcmNoeSwgc3RyaW5nKSAtPlxuICAjIHByZXBhcmUgcmVnZXggdG9rZW5zXG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMqPlxccyovZywnPicpICMgY2xlYW4gdXAgc3BhY2VzIGFyb3VuZCBhcnJvd3NcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcqJykuam9pbignW14+XSonKSAjIGFzdGVyaWtzIGFzIGxheWVyIG5hbWUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJykuam9pbignKD86LiopPicpICMgc3BhY2UgYXMgc3RydWN0dXJlIHdpbGRjYXJkXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnLCcpLmpvaW4oJyR8JykgIyBhbGxvdyBtdWx0aXBsZSBzZWFyY2hlcyB1c2luZyBjb21tYVxuICByZWdleFN0cmluZyA9IFwiKF58PilcIitzdHJpbmcrXCIkXCIgIyBhbHdheXMgYm90dG9tIGxheWVyLCBtYXliZSBwYXJ0IG9mIGhpZXJhcmNoeVxuXG4gIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpIFxuICByZXR1cm4gaGllcmFyY2h5Lm1hdGNoKHJlZ0V4cClcblxuX2ZpbmRBbGwgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT5cbiAgbGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblxuICBpZiBzZWxlY3Rvcj9cbiAgICBzdHJpbmdOZWVkc1JlZ2V4ID0gXy5maW5kIFsnKicsJyAnLCc+JywnLCddLCAoYykgLT4gXy5pbmNsdWRlcyBzZWxlY3RvcixjXG4gICAgdW5sZXNzIHN0cmluZ05lZWRzUmVnZXggb3IgZnJvbUxheWVyXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT4gXG4gICAgICAgIGlmIGxheWVyLm5hbWUgaXMgc2VsZWN0b3IgdGhlbiB0cnVlXG4gICAgZWxzZVxuICAgICAgbGF5ZXJzID0gXy5maWx0ZXIgbGF5ZXJzLCAobGF5ZXIpIC0+XG4gICAgICAgICAgaGllcmFyY2h5ID0gX2dldEhpZXJhcmNoeShsYXllcilcbiAgICAgICAgICBpZiBmcm9tTGF5ZXI/XG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBmcm9tTGF5ZXIubmFtZSsnICcrc2VsZWN0b3IpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgX21hdGNoKGhpZXJhcmNoeSwgc2VsZWN0b3IpXG4gIGVsc2VcbiAgICBsYXllcnNcblxuXG4jIEdsb2JhbFxuZXhwb3J0cy5GaW5kICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5leHBvcnRzLsaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5cbmV4cG9ydHMuRmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuZXhwb3J0cy7GksaSICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilcblxuIyBNZXRob2RzXG5MYXllcjo6ZmluZCAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5MYXllcjo6xpIgICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVswXVxuXG5MYXllcjo6ZmluZEFsbCAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApXG5MYXllcjo6xpLGkiAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQCkiLCJleHBvcnRzLmtleWJvYXJkTGF5ZXIgPSBuZXcgTGF5ZXJcblx0eDowLCB5OlNjcmVlbi5oZWlnaHQsIHdpZHRoOlNjcmVlbi53aWR0aCwgaGVpZ2h0OjQzMlxuXHRodG1sOlwiPGltZyBzdHlsZT0nd2lkdGg6IDEwMCU7JyBzcmM9J21vZHVsZXMva2V5Ym9hcmQucG5nJy8+XCJcblxuI3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuZ3Jvd3RoUmF0aW8gPSBTY3JlZW4ud2lkdGggLyA3MzJcbmltYWdlSGVpZ2h0ID0gZ3Jvd3RoUmF0aW8gKiA0MzJcblxuIyBFeHRlbmRzIHRoZSBMYXllclN0eWxlIGNsYXNzIHdoaWNoIGRvZXMgdGhlIHBpeGVsIHJhdGlvIGNhbGN1bGF0aW9ucyBpbiBmcmFtZXJcbl9pbnB1dFN0eWxlID1cblx0T2JqZWN0LmFzc2lnbih7fSwgRnJhbWVyLkxheWVyU3R5bGUsXG5cdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyA9IChsYXllciwgdmFsdWUpIC0+XG5cdFx0XHQodmFsdWUgKiBsYXllci5jb250ZXh0LnBpeGVsTXVsdGlwbGllcikgKyBcInB4XCJcblxuXHRcdGZvbnRTaXplOiAobGF5ZXIpIC0+XG5cdFx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBsYXllci5fcHJvcGVydGllcy5mb250U2l6ZSlcblxuXHRcdGxpbmVIZWlnaHQ6IChsYXllcikgLT5cblx0XHRcdChsYXllci5fcHJvcGVydGllcy5saW5lSGVpZ2h0KSArIFwiZW1cIlxuXG5cdFx0cGFkZGluZzogKGxheWVyKSAtPlxuXHRcdFx0eyBwaXhlbE11bHRpcGxpZXIgfSA9IGxheWVyLmNvbnRleHRcblx0XHRcdHBhZGRpbmcgPSBbXVxuXHRcdFx0cGFkZGluZ1ZhbHVlID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZ1xuXG5cdFx0XHQjIENoZWNrIGlmIHdlIGhhdmUgYSBzaW5nbGUgbnVtYmVyIGFzIGludGVnZXJcblx0XHRcdGlmIE51bWJlci5pc0ludGVnZXIocGFkZGluZ1ZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgcGFkZGluZ1ZhbHVlKVxuXG5cdFx0XHQjIElmIHdlIGhhdmUgbXVsdGlwbGUgdmFsdWVzIHRoZXkgY29tZSBhcyBzdHJpbmcgKGUuZy4gXCIxIDIgMyA0XCIpXG5cdFx0XHRwYWRkaW5nVmFsdWVzID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZy5zcGxpdChcIiBcIilcblxuXHRcdFx0c3dpdGNoIHBhZGRpbmdWYWx1ZXMubGVuZ3RoXG5cdFx0XHRcdHdoZW4gNFxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKVxuXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblxuXHRcdFx0IyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuXHRcdFx0XCIje3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4XCJcblx0KVxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzID1cblx0c2hvd246XG5cdFx0eTogU2NyZWVuLmhlaWdodCAtIGltYWdlSGVpZ2h0XG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdGN1cnZlOiBcInNwcmluZyg1MDAsNTAsMTUpXCJcblxuY2xhc3MgZXhwb3J0cy5JbnB1dCBleHRlbmRzIExheWVyXG5cdEBkZWZpbmUgXCJzdHlsZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRfLmV4dGVuZCBAaW5wdXQuc3R5bGUsIHZhbHVlXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQudmFsdWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBpbnB1dC52YWx1ZSA9IHZhbHVlXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucy5zZXR1cCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5jbGlwID89IGZhbHNlXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gNjBcblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJyZ2JhKDI1NSwgNjAsIDQ3LCAuNSlcIiBlbHNlIFwidHJhbnNwYXJlbnRcIlxuXHRcdG9wdGlvbnMuZm9udFNpemUgPz0gMzBcblx0XHRvcHRpb25zLmxpbmVIZWlnaHQgPz0gMVxuXHRcdG9wdGlvbnMucGFkZGluZyA/PSAxMFxuXHRcdG9wdGlvbnMudGV4dCA/PSBcIlwiXG5cdFx0b3B0aW9ucy5wbGFjZWhvbGRlciA/PSBcIlwiXG5cdFx0b3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPz0gaWYgVXRpbHMuaXNNb2JpbGUoKSB0aGVuIGZhbHNlIGVsc2UgdHJ1ZVxuXHRcdG9wdGlvbnMudHlwZSA/PSBcInRleHRcIlxuXHRcdG9wdGlvbnMuZ29CdXR0b24gPz0gZmFsc2Vcblx0XHRvcHRpb25zLmF1dG9Db3JyZWN0ID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NvbXBsZXRlID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5zcGVsbENoZWNrID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b2ZvY3VzID89IGZhbHNlXG5cdFx0b3B0aW9ucy50ZXh0Q29sb3IgPz0gXCIjMDAwXCJcblx0XHRvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCItYXBwbGUtc3lzdGVtXCJcblx0XHRvcHRpb25zLmZvbnRXZWlnaHQgPz0gXCI1MDBcIlxuXHRcdG9wdGlvbnMuc3VibWl0ID89IGZhbHNlXG5cdFx0b3B0aW9ucy50YWJJbmRleCA/PSAwXG5cblx0XHRzdXBlciBvcHRpb25zXG5cblx0XHQjIEFkZCBhZGRpdGlvbmFsIHByb3BlcnRpZXNcblx0XHRAX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplXG5cdFx0QF9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHRcblx0XHRAX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ1xuXG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yP1xuXHRcdEBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG5cdFx0QGlucHV0LmlkID0gXCJpbnB1dC0je18ubm93KCl9XCJcblxuXHRcdCMgQWRkIHN0eWxpbmcgdG8gdGhlIGlucHV0IGVsZW1lbnRcblx0XHRAaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0XG5cblx0XHRAaW5wdXQudmFsdWUgPSBvcHRpb25zLnRleHRcblx0XHRAaW5wdXQudHlwZSA9IG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXJcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwidGFiaW5kZXhcIiwgb3B0aW9ucy50YWJpbmRleFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29ycmVjdFwiLCBvcHRpb25zLmF1dG9Db3JyZWN0XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY2FwaXRhbGl6ZVwiLCBvcHRpb25zLmF1dG9DYXBpdGFsaXplXG5cdFx0aWYgb3B0aW9ucy5hdXRvZm9jdXMgPT0gdHJ1ZVxuXHRcdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9mb2N1c1wiLCB0cnVlXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInNwZWxsY2hlY2tcIiwgb3B0aW9ucy5zcGVsbENoZWNrXG5cdFx0QGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiZm9ybVwiXG5cblx0XHRpZiAob3B0aW9ucy5nb0J1dHRvbiAmJiAhb3B0aW9ucy5zdWJtaXQpIHx8ICFvcHRpb25zLnN1Ym1pdFxuXHRcdFx0QGZvcm0uYWN0aW9uID0gXCIjXCJcblx0XHRcdEBmb3JtLmFkZEV2ZW50TGlzdGVuZXIgXCJzdWJtaXRcIiwgKGV2ZW50KSAtPlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRAZm9ybS5hcHBlbmRDaGlsZCBAaW5wdXRcblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQGZvcm1cblxuXHRcdEBiYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRAdXBkYXRlUGxhY2Vob2xkZXJDb2xvciBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgQHBsYWNlaG9sZGVyQ29sb3JcblxuXHRcdCNvbmx5IHNob3cgaG9ub3IgdmlydHVhbCBrZXlib2FyZCBvcHRpb24gd2hlbiBub3Qgb24gbW9iaWxlLFxuXHRcdCNvdGhlcndpc2UgaWdub3JlXG5cdFx0aWYgIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgaXMgdHJ1ZVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYnJpbmdUb0Zyb250KClcblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlQ3ljbGUoKVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuXG5cdHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3I6IChjb2xvcikgLT5cblx0XHRAcGxhY2Vob2xkZXJDb2xvciA9IGNvbG9yXG5cdFx0aWYgQHBhZ2VTdHlsZT9cblx0XHRcdGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQgQHBhZ2VTdHlsZVxuXHRcdEBwYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwic3R5bGVcIlxuXHRcdEBwYWdlU3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIlxuXHRcdGNzcyA9IFwiIyN7QGlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BwbGFjZWhvbGRlckNvbG9yfTsgfVwiXG5cdFx0QHBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSBjc3MpXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCBAcGFnZVN0eWxlXG5cblx0Zm9jdXM6ICgpIC0+XG5cdFx0QGlucHV0LmZvY3VzKClcblxuXHRvbkZvY3VzOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcblxuXHRvbkJsdXI6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG4iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuMC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfaW5wdXRTdHlsZSwgY2FsY3VsYXRlUGl4ZWxSYXRpbywgZ3Jvd3RoUmF0aW8sIGltYWdlSGVpZ2h0O1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllcih7XG4gICAgeDogMCxcbiAgICB5OiBTY3JlZW4uaGVpZ2h0LFxuICAgIHdpZHRoOiBTY3JlZW4ud2lkdGgsXG4gICAgaGVpZ2h0OiA0MzIsXG4gICAgaHRtbDogXCI8aW1nIHN0eWxlPSd3aWR0aDogMTAwJTsnIHNyYz0nbW9kdWxlcy9rZXlib2FyZC5wbmcnLz5cIlxuICB9KTtcblxuICAvL3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuICBncm93dGhSYXRpbyA9IFNjcmVlbi53aWR0aCAvIDczMjtcblxuICBpbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyO1xuXG4gIC8vIEV4dGVuZHMgdGhlIExheWVyU3R5bGUgY2xhc3Mgd2hpY2ggZG9lcyB0aGUgcGl4ZWwgcmF0aW8gY2FsY3VsYXRpb25zIGluIGZyYW1lclxuICBfaW5wdXRTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLCBjYWxjdWxhdGVQaXhlbFJhdGlvID0gZnVuY3Rpb24obGF5ZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAqIGxheWVyLmNvbnRleHQucGl4ZWxNdWx0aXBsaWVyKSArIFwicHhcIjtcbiAgfSwge1xuICAgIGZvbnRTaXplOiBmdW5jdGlvbihsYXllcikge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIGxheWVyLl9wcm9wZXJ0aWVzLmZvbnRTaXplKTtcbiAgICB9LFxuICAgIGxpbmVIZWlnaHQ6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICByZXR1cm4gbGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCArIFwiZW1cIjtcbiAgICB9LFxuICAgIHBhZGRpbmc6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICB2YXIgcGFkZGluZywgcGFkZGluZ1ZhbHVlLCBwYWRkaW5nVmFsdWVzLCBwaXhlbE11bHRpcGxpZXI7XG4gICAgICAoe3BpeGVsTXVsdGlwbGllcn0gPSBsYXllci5jb250ZXh0KTtcbiAgICAgIHBhZGRpbmcgPSBbXTtcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmc7XG4gICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWRkaW5nVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBwYWRkaW5nVmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgdGhleSBjb21lIGFzIHN0cmluZyAoZS5nLiBcIjEgMiAzIDRcIilcbiAgICAgIHBhZGRpbmdWYWx1ZXMgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nLnNwbGl0KFwiIFwiKTtcbiAgICAgIHN3aXRjaCAocGFkZGluZ1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICAvLyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuICAgICAgcmV0dXJuIGAke3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAke3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4YDtcbiAgICB9XG4gIH0pO1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMgPSB7XG4gICAgc2hvd246IHtcbiAgICAgIHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuICAgIH1cbiAgfTtcblxuICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSB7XG4gICAgY3VydmU6IFwic3ByaW5nKDUwMCw1MCwxNSlcIlxuICB9O1xuXG4gIGV4cG9ydHMuSW5wdXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgSW5wdXQgZXh0ZW5kcyBMYXllciB7XG4gICAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2V0dXAgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc2V0dXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy53aWR0aCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy53aWR0aCA9IFNjcmVlbi53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jbGlwID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmNsaXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5oZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuc2V0dXAgPyBcInJnYmEoMjU1LCA2MCwgNDcsIC41KVwiIDogXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRTaXplID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmZvbnRTaXplID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubGluZUhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5saW5lSGVpZ2h0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudmlydHVhbEtleWJvYXJkID0gVXRpbHMuaXNNb2JpbGUoKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50eXBlID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5nb0J1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5nb0J1dHRvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db3JyZWN0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9Db3JyZWN0ID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db21wbGV0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvQ29tcGxldGUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3BlbGxDaGVjayA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5zcGVsbENoZWNrID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0Q29sb3IgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGV4dENvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udEZhbWlseSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250RmFtaWx5ID0gXCItYXBwbGUtc3lzdGVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udFdlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250V2VpZ2h0ID0gXCI1MDBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc3VibWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGFiSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQuaWQgPSBgaW5wdXQtJHtfLm5vdygpfWA7XG4gICAgICAgIC8vIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXgpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIG9wdGlvbnMuYXV0b0NvcnJlY3QpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSk7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2ZvY3VzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2spO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgaWYgKChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Iob3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdmFyIGNzcztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gY29sb3I7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTdHlsZSAhPSBudWxsKSB7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLnBhZ2VTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHRoaXMucGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGNzcyA9IGAjJHt0aGlzLmlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoaXMucGxhY2Vob2xkZXJDb2xvcn07IH1gO1xuICAgICAgICB0aGlzLnBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5wYWdlU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBmb2N1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgb25Gb2N1cyhjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNiLmFwcGx5KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25CbHVyKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjYi5hcHBseSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgSW5wdXQuZGVmaW5lKFwic3R5bGVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc3R5bGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQodGhpcy5pbnB1dC5zdHlsZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgSW5wdXQuZGVmaW5lKFwidmFsdWVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIElucHV0O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlucHV0LmpzLm1hcFxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIndpbmRvdy5ub3RlcyA9IG5ldyBMYXllclxuXHRuYW1lOiBcIm5vdGVzXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAxMDUyXG5cdGhlaWdodDogNjE0XG5cbmRvY3VtZW50cyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJkb2N1bWVudHNcIlxuXHRwYXJlbnQ6IG5vdGVzXG5cdHg6IDE1XG5cdHk6IDE1XG5cdHRleHQ6IFwiRG9jdW1lbnRzXCJcblx0Zm9udFNpemU6IDQwXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImxlZnRcIlxuXHRjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxubm90ZXNfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJub3Rlc18yXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAxNVxuXHR5OiAyNTJcblx0dGV4dDogXCJOb3Rlc1wiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnRhc2tzID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInRhc2tzXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiA3OTBcblx0eTogMTVcblx0dGV4dDogXCJUYXNrc1wiXG5cdGZvbnRTaXplOiA0MFxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJsZWZ0XCJcblx0Y29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlY3RhbmdsZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZVwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogMTVcblx0eTogNzVcblx0d2lkdGg6IDcxNlxuXHRoZWlnaHQ6IDE2MVxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG5cdGJvcmRlclJhZGl1czogNlxuXG5yZWN0YW5nbGVDb3B5MiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZUNvcHkyXCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAxNVxuXHR5OiAzMDdcblx0d2lkdGg6IDcxNlxuXHRoZWlnaHQ6IDI1NFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG5cdGJvcmRlclJhZGl1czogNlxuXG5yZWN0YW5nbGVDb3B5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlQ29weVwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogNzkwXG5cdHk6IDkxXG5cdHdpZHRoOiAyMTFcblx0aGVpZ2h0OiA0NzBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuXHRib3JkZXJSYWRpdXM6IDZcblxuY2hhcmdlX1NoZWV0ID0gbmV3IExheWVyXG5cdG5hbWU6IFwiY2hhcmdlX1NoZWV0XCJcblx0cGFyZW50OiBub3Rlc1xuXHR4OiAzOVxuXHR5OiA5MVxuXHR3aWR0aDogODZcblx0aGVpZ2h0OiAxMjJcblx0aW1hZ2U6IFwiaW1hZ2VzL0NoYXJnZV9TaGVldC5wbmdcIlxuXG5ldmlkZW5jZVNoZWV0ID0gbmV3IExheWVyXG5cdG5hbWU6IFwiZXZpZGVuY2VTaGVldFwiXG5cdHBhcmVudDogbm90ZXNcblx0eDogMTY0XG5cdHk6IDkxXG5cdHdpZHRoOiA4NlxuXHRoZWlnaHQ6IDEyMS42NDgzODcwOTY3NzQxN1xuXHRpbWFnZTogXCJpbWFnZXMvZXZpZGVuY2VTaGVldC5wbmdcIlxuXG4iXX0=
