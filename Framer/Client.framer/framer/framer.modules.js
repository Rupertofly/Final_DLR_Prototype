require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ViewController":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (function(superClass) {
  extend(exports, superClass);

  function exports(options) {
    var autoInitial, backButtons, btn, i, len, transitions;
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    if (options.clip == null) {
      options.clip = true;
    }
    if (options.initialViewName == null) {
      options.initialViewName = 'initialView';
    }
    if (options.backButtonName == null) {
      options.backButtonName = 'backButton';
    }
    if (options.animationOptions == null) {
      options.animationOptions = {
        curve: "cubic-bezier(0.19, 1, 0.22, 1)",
        time: .7
      };
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "black";
    }
    if (options.scroll == null) {
      options.scroll = false;
    }
    if (options.autoLink == null) {
      options.autoLink = true;
    }
    exports.__super__.constructor.call(this, options);
    this.history = [];
    this.onChange("subLayers", (function(_this) {
      return function(changeList) {
        var c, children, i, len, scrollComponent, view;
        view = changeList.added[0];
        if (view != null) {
          view.clip = true;
          view.on(Events.Click, function() {});
          if (_this.scroll) {
            children = view.children;
            scrollComponent = new ScrollComponent({
              name: "scrollComponent",
              width: _this.width,
              height: _this.height,
              parent: view
            });
            scrollComponent.content.backgroundColor = "";
            if (view.width <= _this.width) {
              scrollComponent.scrollHorizontal = false;
            }
            if (view.height <= _this.height) {
              scrollComponent.scrollVertical = false;
            }
            for (i = 0, len = children.length; i < len; i++) {
              c = children[i];
              c.parent = scrollComponent.content;
            }
            view.scrollComponent = scrollComponent;
            return view.size = {
              width: _this.width,
              height: _this.height
            };
          }
        }
      };
    })(this));
    transitions = {
      switchInstant: {},
      fadeIn: {
        newView: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      zoomIn: {
        newView: {
          from: {
            scale: 0.8,
            opacity: 0
          },
          to: {
            scale: 1,
            opacity: 1
          }
        }
      },
      zoomOut: {
        oldView: {
          to: {
            scale: 0.8,
            opacity: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideInUp: {
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      slideInRight: {
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      slideInDown: {
        newView: {
          from: {
            maxY: 0
          },
          to: {
            y: 0
          }
        }
      },
      slideInLeft: {
        newView: {
          from: {
            maxX: 0
          },
          to: {
            maxX: this.width
          }
        }
      },
      moveInUp: {
        oldView: {
          to: {
            y: -this.height
          }
        },
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInRight: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      moveInDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          from: {
            y: -this.height
          },
          to: {
            y: 0
          }
        }
      },
      moveInLeft: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            maxX: 0
          },
          to: {
            x: 0
          }
        }
      },
      pushInRight: {
        oldView: {
          to: {
            x: -(this.width / 5),
            brightness: 70
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushInLeft: {
        oldView: {
          to: {
            x: this.width / 5,
            brightness: 70
          }
        },
        newView: {
          from: {
            x: -this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            x: -(this.width / 5),
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      pushOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width / 5,
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      slideOutUp: {
        oldView: {
          to: {
            maxY: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          to: {}
        }
      }
    };
    transitions.slideIn = transitions.slideInRight;
    transitions.slideOut = transitions.slideOutRight;
    transitions.pushIn = transitions.pushInRight;
    transitions.pushOut = transitions.pushOutRight;
    Events.ViewWillSwitch = "viewWillSwitch";
    Events.ViewDidSwitch = "viewDidSwitch";
    Layer.prototype.onViewWillSwitch = function(cb) {
      return this.on(Events.ViewWillSwitch, cb);
    };
    Layer.prototype.onViewDidSwitch = function(cb) {
      return this.on(Events.ViewDidSwitch, cb);
    };
    _.each(transitions, (function(_this) {
      return function(animProps, name) {
        var btn, i, layers, len, viewController;
        if (options.autoLink) {
          layers = Framer.CurrentContext._layers;
          for (i = 0, len = layers.length; i < len; i++) {
            btn = layers[i];
            if (_.includes(btn.name, name)) {
              viewController = _this;
              btn.onClick(function() {
                var anim, linkName;
                anim = this.name.split('_')[0];
                linkName = this.name.replace(anim + '_', '');
                linkName = linkName.replace(/\d+/g, '');
                return viewController[anim](_.find(layers, function(l) {
                  return l.name === linkName;
                }));
              });
            }
          }
        }
        return _this[name] = function(newView, animationOptions) {
          var animObj, hook, incoming, outgoing, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          if (animationOptions == null) {
            animationOptions = _this.animationOptions;
          }
          if (newView === _this.currentView) {
            return;
          }
          newView.parent = _this;
          newView.sendToBack();
          newView.point = {
            x: 0,
            y: 0
          };
          newView.opacity = 1;
          newView.scale = 1;
          newView.brightness = 100;
          if ((ref = _this.currentView) != null) {
            ref.point = {
              x: 0,
              y: 0
            };
          }
          if ((ref1 = _this.currentView) != null) {
            ref1.props = (ref2 = animProps.oldView) != null ? ref2.from : void 0;
          }
          animObj = _.extend({
            properties: (ref3 = animProps.oldView) != null ? ref3.to : void 0
          }, animationOptions);
          _.defaults(animObj, {
            properties: {}
          });
          outgoing = (ref4 = _this.currentView) != null ? ref4.animate(animObj) : void 0;
          newView.props = (ref5 = animProps.newView) != null ? ref5.from : void 0;
          incoming = newView.animate(_.extend({
            properties: (ref6 = animProps.newView) != null ? ref6.to : void 0
          }, animationOptions));
          if (_.includes(name, 'Out')) {
            newView.placeBehind(_this.currentView);
            outgoing.on(Events.AnimationEnd, function() {
              return _this.currentView.bringToFront();
            });
          } else {
            newView.placeBefore(_this.currentView);
          }
          _this.emit(Events.ViewWillSwitch, _this.currentView, newView);
          _this.saveCurrentViewToHistory(name, outgoing, incoming);
          _this.currentView = newView;
          _this.emit("change:previousView", _this.previousView);
          _this.emit("change:currentView", _this.currentView);
          if (incoming.isAnimating) {
            hook = incoming;
          } else {
            hook = outgoing;
          }
          return hook != null ? hook.on(Events.AnimationEnd, function() {
            return _this.emit(Events.ViewDidSwitch, _this.previousView, _this.currentView);
          }) : void 0;
        };
      };
    })(this));
    if (options.initialViewName != null) {
      autoInitial = _.find(Framer.CurrentContext._layers, function(l) {
        return l.name === options.initialViewName;
      });
      if (autoInitial != null) {
        this.switchInstant(autoInitial);
      }
    }
    if (options.initialView != null) {
      this.switchInstant(options.initialView);
    }
    if (options.backButtonName != null) {
      backButtons = _.filter(Framer.CurrentContext._layers, function(l) {
        return _.includes(l.name, options.backButtonName);
      });
      for (i = 0, len = backButtons.length; i < len; i++) {
        btn = backButtons[i];
        btn.onClick((function(_this) {
          return function() {
            return _this.back();
          };
        })(this));
      }
    }
  }

  exports.define("previousView", {
    get: function() {
      return this.history[0].view;
    }
  });

  exports.prototype.saveCurrentViewToHistory = function(name, outgoingAnimation, incomingAnimation) {
    return this.history.unshift({
      view: this.currentView,
      animationName: name,
      incomingAnimation: incomingAnimation,
      outgoingAnimation: outgoingAnimation
    });
  };

  exports.prototype.back = function() {
    var backIn, moveOut, previous;
    previous = this.history[0];
    if (previous.view != null) {
      if (_.includes(previous.animationName, 'Out')) {
        previous.view.bringToFront();
      }
      backIn = previous.outgoingAnimation.reverse();
      moveOut = previous.incomingAnimation.reverse();
      backIn.start();
      moveOut.start();
      this.currentView = previous.view;
      this.history.shift();
      return moveOut.on(Events.AnimationEnd, (function(_this) {
        return function() {
          return _this.currentView.bringToFront();
        };
      })(this));
    }
  };

  return exports;

})(Layer);


},{}],"ab_help":[function(require,module,exports){
var bG_3, help_Body, help_But_Back, help_But_No, help_But_Yes, help_i_Buoy, help_t_Help, label_11, label_12, label_13, rectangle_11, rectangle_12, rectangle_13, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

window.aB_Help = new Layer({
  name: "aB_Help",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

help_Body = new Layer({
  name: "help_Body",
  parent: aB_Help,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_3 = new Layer({
  name: "bG_3",
  parent: help_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

help_t_Help = new TextLayer({
  name: "help_t_Help",
  parent: help_Body,
  x: 300,
  y: 420,
  text: "Is Someone Helping you Fill Out This Form?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

help_i_Buoy = new Layer({
  name: "help_i_Buoy",
  parent: help_Body,
  x: 884,
  y: 78,
  width: 280,
  height: 280,
  image: "images/Help_i_Buoy.svg"
});

help_But_Back = new Layer({
  name: "help_But_Back",
  parent: help_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_11 = new Layer({
  name: "rectangle_11",
  parent: help_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(221,240,249,1)",
  borderRadius: 40,
  borderColor: "rgba(119,131,136,1)",
  borderWidth: 6
});

label_11 = new TextLayer({
  name: "label_11",
  parent: help_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

help_But_No = new Layer({
  name: "help_But_No",
  parent: help_Body,
  x: 1204,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

help_But_No.on(Events.Tap, function() {
  data.help = false;
  return flow.showNext(ƒ("aB_ReadSpeak"));
});

rectangle_12 = new Layer({
  name: "rectangle_12",
  parent: help_But_No,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(253,225,225,1)",
  borderRadius: 40,
  borderColor: "rgba(194,55,52,1)",
  borderWidth: 6
});

label_12 = new TextLayer({
  name: "label_12",
  parent: help_But_No,
  x: 0,
  y: 0,
  width: 600,
  text: "No",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(194,55,52,1)"
});

help_But_Yes = new Layer({
  name: "help_But_Yes",
  parent: help_Body,
  x: 244,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

help_But_Yes.on(Events.Tap, function() {
  data.help = true;
  return flow.showNext(ƒ("aB_ReadSpeak"));
});

rectangle_13 = new Layer({
  name: "rectangle_13",
  parent: help_But_Yes,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(232,245,230,1)",
  borderRadius: 40,
  borderColor: "rgba(108,176,101,1)",
  borderWidth: 6
});

label_13 = new TextLayer({
  name: "label_13",
  parent: help_But_Yes,
  x: 0,
  y: 0,
  width: 600,
  text: "Yes",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(87,155,81,1)"
});


},{"findModule":"findModule"}],"ab_lang":[function(require,module,exports){
var InputModule, bG_2, label_10, label_2, label_3, label_4, label_5, label_6, label_7, label_8, label_9, language_Body, language_But_Arabic, language_But_Chinese, language_But_English, language_But_Greek, language_But_Persian, language_But_Spanish, language_But_Thai, language_But_Turkish, language_But_Viet, rectangle_10, rectangle_2, rectangle_3, rectangle_4, rectangle_5, rectangle_6, rectangle_7, rectangle_8, rectangle_9, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

InputModule = require("input-framer/input");

window.aB_Language = new Layer({
  name: "aB_Language",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

language_Body = new Layer({
  name: "language_Body",
  parent: aB_Language,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_2 = new Layer({
  name: "bG_2",
  parent: language_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

language_But_English = new Layer({
  name: "language_But_English",
  parent: language_Body,
  x: 244,
  y: 342,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

language_But_English.on(Events.Tap, function() {
  data.language = "English";
  return flow.showNext(ƒ("aB_Help"), {
    scroll: false
  });
});

rectangle_2 = new Layer({
  name: "rectangle_2",
  parent: language_But_English,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_2 = new TextLayer({
  name: "label_2",
  parent: language_But_English,
  x: 125,
  y: 62,
  text: "English",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Chinese = new Layer({
  name: "language_But_Chinese",
  parent: language_Body,
  x: 244,
  y: 622,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_3 = new Layer({
  name: "rectangle_3",
  parent: language_But_Chinese,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_3 = new TextLayer({
  name: "label_3",
  parent: language_But_Chinese,
  x: 164,
  y: 62,
  text: "中文",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Thai = new Layer({
  name: "language_But_Thai",
  parent: language_Body,
  x: 244,
  y: 902,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_4 = new Layer({
  name: "rectangle_4",
  parent: language_But_Thai,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_4 = new TextLayer({
  name: "label_4",
  parent: language_But_Thai,
  x: 101,
  y: 62,
  text: "ไทย – ไทย",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Arabic = new Layer({
  name: "language_But_Arabic",
  parent: language_Body,
  x: 804,
  y: 342,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_5 = new Layer({
  name: "rectangle_5",
  parent: language_But_Arabic,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_5 = new TextLayer({
  name: "label_5",
  parent: language_But_Arabic,
  x: 158,
  y: 62,
  text: "عربي",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Spanish = new Layer({
  name: "language_But_Spanish",
  parent: language_Body,
  x: 804,
  y: 622,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_6 = new Layer({
  name: "rectangle_6",
  parent: language_But_Spanish,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_6 = new TextLayer({
  name: "label_6",
  parent: language_But_Spanish,
  x: 117,
  y: 62,
  text: "Español",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Greek = new Layer({
  name: "language_But_Greek",
  parent: language_Body,
  x: 804,
  y: 902,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_7 = new Layer({
  name: "rectangle_7",
  parent: language_But_Greek,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_7 = new TextLayer({
  name: "label_7",
  parent: language_But_Greek,
  x: 102,
  y: 62,
  text: "Ελληvικά",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Viet = new Layer({
  name: "language_But_Viet",
  parent: language_Body,
  x: 1364,
  y: 342,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_8 = new Layer({
  name: "rectangle_8",
  parent: language_But_Viet,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_8 = new TextLayer({
  name: "label_8",
  parent: language_But_Viet,
  x: 110,
  y: 62,
  text: "Việt-ngữ",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Turkish = new Layer({
  name: "language_But_Turkish",
  parent: language_Body,
  x: 1364,
  y: 622,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_9 = new Layer({
  name: "rectangle_9",
  parent: language_But_Turkish,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_9 = new TextLayer({
  name: "label_9",
  parent: language_But_Turkish,
  x: 135,
  y: 62,
  text: "Türkçe",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

language_But_Persian = new Layer({
  name: "language_But_Persian",
  parent: language_Body,
  x: 1364,
  y: 902,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_10 = new Layer({
  name: "rectangle_10",
  parent: language_But_Persian,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(218,115,75,1)",
  borderWidth: 6
});

label_10 = new TextLayer({
  name: "label_10",
  parent: language_But_Persian,
  x: 151,
  y: 62,
  text: "فار س",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_splash":[function(require,module,exports){
var ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

window.aB_Splash = new Layer({
  name: "aB_Splash",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

window.splash_Body = new Layer({
  name: "splash_Body",
  parent: aB_Splash,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

window.bG = new Layer({
  name: "bG",
  parent: splash_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

window.splash_i_Logo = new Layer({
  name: "splash_i_Logo",
  parent: splash_Body,
  x: 884,
  y: 22,
  width: 276,
  height: 276,
  image: "images/Splash_i_Logo.svg"
});

window.splash_t_Title = new TextLayer({
  name: "splash_t_Title",
  parent: splash_Body,
  x: 564,
  y: 342,
  width: 918.8536370080562,
  text: "Victoria Legal Aid",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 700,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

window.splash_t_Heading = new TextLayer({
  name: "splash_t_Heading",
  parent: splash_Body,
  x: 564,
  y: 504,
  width: 917.886927759102,
  text: "Duty Lawyer Service\u2028Application for Aid",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

window.splash_But_Begin = new Layer({
  name: "splash_But_Begin",
  parent: splash_Body,
  x: 724,
  y: 822,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

window.splash_But_Begin.on(Events.Tap, function() {
  return flow.showNext(ƒ("aB_Language"));
});

window.rectangle = new Layer({
  name: "rectangle",
  parent: splash_But_Begin,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

window.label = new TextLayer({
  name: "label",
  parent: splash_But_Begin,
  x: 202,
  y: 86,
  text: "Begin",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});


},{"findModule":"findModule"}],"findModule":[function(require,module,exports){
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


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9maW5kTW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfc3BsYXNoLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfbGFuZy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2hlbHAuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9WaWV3Q29udHJvbGxlci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmtleWJvYXJkTGF5ZXIgPSBuZXcgTGF5ZXJcblx0eDowLCB5OlNjcmVlbi5oZWlnaHQsIHdpZHRoOlNjcmVlbi53aWR0aCwgaGVpZ2h0OjQzMlxuXHRodG1sOlwiPGltZyBzdHlsZT0nd2lkdGg6IDEwMCU7JyBzcmM9J21vZHVsZXMva2V5Ym9hcmQucG5nJy8+XCJcblxuI3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuZ3Jvd3RoUmF0aW8gPSBTY3JlZW4ud2lkdGggLyA3MzJcbmltYWdlSGVpZ2h0ID0gZ3Jvd3RoUmF0aW8gKiA0MzJcblxuIyBFeHRlbmRzIHRoZSBMYXllclN0eWxlIGNsYXNzIHdoaWNoIGRvZXMgdGhlIHBpeGVsIHJhdGlvIGNhbGN1bGF0aW9ucyBpbiBmcmFtZXJcbl9pbnB1dFN0eWxlID1cblx0T2JqZWN0LmFzc2lnbih7fSwgRnJhbWVyLkxheWVyU3R5bGUsXG5cdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyA9IChsYXllciwgdmFsdWUpIC0+XG5cdFx0XHQodmFsdWUgKiBsYXllci5jb250ZXh0LnBpeGVsTXVsdGlwbGllcikgKyBcInB4XCJcblxuXHRcdGZvbnRTaXplOiAobGF5ZXIpIC0+XG5cdFx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBsYXllci5fcHJvcGVydGllcy5mb250U2l6ZSlcblxuXHRcdGxpbmVIZWlnaHQ6IChsYXllcikgLT5cblx0XHRcdChsYXllci5fcHJvcGVydGllcy5saW5lSGVpZ2h0KSArIFwiZW1cIlxuXG5cdFx0cGFkZGluZzogKGxheWVyKSAtPlxuXHRcdFx0eyBwaXhlbE11bHRpcGxpZXIgfSA9IGxheWVyLmNvbnRleHRcblx0XHRcdHBhZGRpbmcgPSBbXVxuXHRcdFx0cGFkZGluZ1ZhbHVlID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZ1xuXG5cdFx0XHQjIENoZWNrIGlmIHdlIGhhdmUgYSBzaW5nbGUgbnVtYmVyIGFzIGludGVnZXJcblx0XHRcdGlmIE51bWJlci5pc0ludGVnZXIocGFkZGluZ1ZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgcGFkZGluZ1ZhbHVlKVxuXG5cdFx0XHQjIElmIHdlIGhhdmUgbXVsdGlwbGUgdmFsdWVzIHRoZXkgY29tZSBhcyBzdHJpbmcgKGUuZy4gXCIxIDIgMyA0XCIpXG5cdFx0XHRwYWRkaW5nVmFsdWVzID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZy5zcGxpdChcIiBcIilcblxuXHRcdFx0c3dpdGNoIHBhZGRpbmdWYWx1ZXMubGVuZ3RoXG5cdFx0XHRcdHdoZW4gNFxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKVxuXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblxuXHRcdFx0IyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuXHRcdFx0XCIje3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4XCJcblx0KVxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzID1cblx0c2hvd246XG5cdFx0eTogU2NyZWVuLmhlaWdodCAtIGltYWdlSGVpZ2h0XG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdGN1cnZlOiBcInNwcmluZyg1MDAsNTAsMTUpXCJcblxuY2xhc3MgZXhwb3J0cy5JbnB1dCBleHRlbmRzIExheWVyXG5cdEBkZWZpbmUgXCJzdHlsZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRfLmV4dGVuZCBAaW5wdXQuc3R5bGUsIHZhbHVlXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQudmFsdWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBpbnB1dC52YWx1ZSA9IHZhbHVlXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucy5zZXR1cCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5jbGlwID89IGZhbHNlXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gNjBcblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJyZ2JhKDI1NSwgNjAsIDQ3LCAuNSlcIiBlbHNlIFwidHJhbnNwYXJlbnRcIlxuXHRcdG9wdGlvbnMuZm9udFNpemUgPz0gMzBcblx0XHRvcHRpb25zLmxpbmVIZWlnaHQgPz0gMVxuXHRcdG9wdGlvbnMucGFkZGluZyA/PSAxMFxuXHRcdG9wdGlvbnMudGV4dCA/PSBcIlwiXG5cdFx0b3B0aW9ucy5wbGFjZWhvbGRlciA/PSBcIlwiXG5cdFx0b3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPz0gaWYgVXRpbHMuaXNNb2JpbGUoKSB0aGVuIGZhbHNlIGVsc2UgdHJ1ZVxuXHRcdG9wdGlvbnMudHlwZSA/PSBcInRleHRcIlxuXHRcdG9wdGlvbnMuZ29CdXR0b24gPz0gZmFsc2Vcblx0XHRvcHRpb25zLmF1dG9Db3JyZWN0ID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NvbXBsZXRlID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5zcGVsbENoZWNrID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b2ZvY3VzID89IGZhbHNlXG5cdFx0b3B0aW9ucy50ZXh0Q29sb3IgPz0gXCIjMDAwXCJcblx0XHRvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCItYXBwbGUtc3lzdGVtXCJcblx0XHRvcHRpb25zLmZvbnRXZWlnaHQgPz0gXCI1MDBcIlxuXHRcdG9wdGlvbnMuc3VibWl0ID89IGZhbHNlXG5cdFx0b3B0aW9ucy50YWJJbmRleCA/PSAwXG5cblx0XHRzdXBlciBvcHRpb25zXG5cblx0XHQjIEFkZCBhZGRpdGlvbmFsIHByb3BlcnRpZXNcblx0XHRAX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplXG5cdFx0QF9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHRcblx0XHRAX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ1xuXG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yP1xuXHRcdEBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG5cdFx0QGlucHV0LmlkID0gXCJpbnB1dC0je18ubm93KCl9XCJcblxuXHRcdCMgQWRkIHN0eWxpbmcgdG8gdGhlIGlucHV0IGVsZW1lbnRcblx0XHRAaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0XG5cblx0XHRAaW5wdXQudmFsdWUgPSBvcHRpb25zLnRleHRcblx0XHRAaW5wdXQudHlwZSA9IG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXJcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwidGFiaW5kZXhcIiwgb3B0aW9ucy50YWJpbmRleFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29ycmVjdFwiLCBvcHRpb25zLmF1dG9Db3JyZWN0XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY2FwaXRhbGl6ZVwiLCBvcHRpb25zLmF1dG9DYXBpdGFsaXplXG5cdFx0aWYgb3B0aW9ucy5hdXRvZm9jdXMgPT0gdHJ1ZVxuXHRcdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9mb2N1c1wiLCB0cnVlXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInNwZWxsY2hlY2tcIiwgb3B0aW9ucy5zcGVsbENoZWNrXG5cdFx0QGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiZm9ybVwiXG5cblx0XHRpZiAob3B0aW9ucy5nb0J1dHRvbiAmJiAhb3B0aW9ucy5zdWJtaXQpIHx8ICFvcHRpb25zLnN1Ym1pdFxuXHRcdFx0QGZvcm0uYWN0aW9uID0gXCIjXCJcblx0XHRcdEBmb3JtLmFkZEV2ZW50TGlzdGVuZXIgXCJzdWJtaXRcIiwgKGV2ZW50KSAtPlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRAZm9ybS5hcHBlbmRDaGlsZCBAaW5wdXRcblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQGZvcm1cblxuXHRcdEBiYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRAdXBkYXRlUGxhY2Vob2xkZXJDb2xvciBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgQHBsYWNlaG9sZGVyQ29sb3JcblxuXHRcdCNvbmx5IHNob3cgaG9ub3IgdmlydHVhbCBrZXlib2FyZCBvcHRpb24gd2hlbiBub3Qgb24gbW9iaWxlLFxuXHRcdCNvdGhlcndpc2UgaWdub3JlXG5cdFx0aWYgIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgaXMgdHJ1ZVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYnJpbmdUb0Zyb250KClcblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlQ3ljbGUoKVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuXG5cdHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3I6IChjb2xvcikgLT5cblx0XHRAcGxhY2Vob2xkZXJDb2xvciA9IGNvbG9yXG5cdFx0aWYgQHBhZ2VTdHlsZT9cblx0XHRcdGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQgQHBhZ2VTdHlsZVxuXHRcdEBwYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwic3R5bGVcIlxuXHRcdEBwYWdlU3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIlxuXHRcdGNzcyA9IFwiIyN7QGlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BwbGFjZWhvbGRlckNvbG9yfTsgfVwiXG5cdFx0QHBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSBjc3MpXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCBAcGFnZVN0eWxlXG5cblx0Zm9jdXM6ICgpIC0+XG5cdFx0QGlucHV0LmZvY3VzKClcblxuXHRvbkZvY3VzOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcblxuXHRvbkJsdXI6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG4iLCJfZ2V0SGllcmFyY2h5ID0gKGxheWVyKSAtPlxuICBzdHJpbmcgPSAnJ1xuICBmb3IgYSBpbiBsYXllci5hbmNlc3RvcnMoKVxuICAgIHN0cmluZyA9IGEubmFtZSsnPicrc3RyaW5nXG4gIHJldHVybiBzdHJpbmcgPSBzdHJpbmcrbGF5ZXIubmFtZVxuXG5fbWF0Y2ggPSAoaGllcmFyY2h5LCBzdHJpbmcpIC0+XG4gICMgcHJlcGFyZSByZWdleCB0b2tlbnNcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyo+XFxzKi9nLCc+JykgIyBjbGVhbiB1cCBzcGFjZXMgYXJvdW5kIGFycm93c1xuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyonKS5qb2luKCdbXj5dKicpICMgYXN0ZXJpa3MgYXMgbGF5ZXIgbmFtZSB3aWxkY2FyZFxuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyAnKS5qb2luKCcoPzouKik+JykgIyBzcGFjZSBhcyBzdHJ1Y3R1cmUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcsJykuam9pbignJHwnKSAjIGFsbG93IG11bHRpcGxlIHNlYXJjaGVzIHVzaW5nIGNvbW1hXG4gIHJlZ2V4U3RyaW5nID0gXCIoXnw+KVwiK3N0cmluZytcIiRcIiAjIGFsd2F5cyBib3R0b20gbGF5ZXIsIG1heWJlIHBhcnQgb2YgaGllcmFyY2h5XG5cbiAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZykgXG4gIHJldHVybiBoaWVyYXJjaHkubWF0Y2gocmVnRXhwKVxuXG5fZmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPlxuICBsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXG4gIGlmIHNlbGVjdG9yP1xuICAgIHN0cmluZ05lZWRzUmVnZXggPSBfLmZpbmQgWycqJywnICcsJz4nLCcsJ10sIChjKSAtPiBfLmluY2x1ZGVzIHNlbGVjdG9yLGNcbiAgICB1bmxlc3Mgc3RyaW5nTmVlZHNSZWdleCBvciBmcm9tTGF5ZXJcbiAgICAgIGxheWVycyA9IF8uZmlsdGVyIGxheWVycywgKGxheWVyKSAtPiBcbiAgICAgICAgaWYgbGF5ZXIubmFtZSBpcyBzZWxlY3RvciB0aGVuIHRydWVcbiAgICBlbHNlXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT5cbiAgICAgICAgICBoaWVyYXJjaHkgPSBfZ2V0SGllcmFyY2h5KGxheWVyKVxuICAgICAgICAgIGlmIGZyb21MYXllcj9cbiAgICAgICAgICAgIF9tYXRjaChoaWVyYXJjaHksIGZyb21MYXllci5uYW1lKycgJytzZWxlY3RvcilcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBzZWxlY3RvcilcbiAgZWxzZVxuICAgIGxheWVyc1xuXG5cbiMgR2xvYmFsXG5leHBvcnRzLkZpbmQgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cbmV4cG9ydHMuxpIgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cblxuZXhwb3J0cy5GaW5kQWxsID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpXG5leHBvcnRzLsaSxpIgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuXG4jIE1ldGhvZHNcbkxheWVyOjpmaW5kICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClbMF1cbkxheWVyOjrGkiAgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5cbkxheWVyOjpmaW5kQWxsICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClcbkxheWVyOjrGksaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKSIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfU3BsYXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYUJfU3BsYXNoXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG53aW5kb3cuc3BsYXNoX0JvZHkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfQm9keVwiXG5cdHBhcmVudDogYUJfU3BsYXNoXG5cdHg6IDBcblx0eTogMTM4XG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXG53aW5kb3cuYkcgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfaV9Mb2dvID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX2lfTG9nb1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogODg0XG5cdHk6IDIyXG5cdHdpZHRoOiAyNzZcblx0aGVpZ2h0OiAyNzZcblx0aW1hZ2U6IFwiaW1hZ2VzL1NwbGFzaF9pX0xvZ28uc3ZnXCJcblxud2luZG93LnNwbGFzaF90X1RpdGxlID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInNwbGFzaF90X1RpdGxlXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA1NjRcblx0eTogMzQyXG5cdHdpZHRoOiA5MTguODUzNjM3MDA4MDU2MlxuXHR0ZXh0OiBcIlZpY3RvcmlhIExlZ2FsIEFpZFwiXG5cdGZvbnRTaXplOiA3MlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNzAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2luZG93LnNwbGFzaF90X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3BsYXNoX3RfSGVhZGluZ1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNTY0XG5cdHk6IDUwNFxuXHR3aWR0aDogOTE3Ljg4NjkyNzc1OTEwMlxuXHR0ZXh0OiBcIkR1dHkgTGF3eWVyIFNlcnZpY2XigKhBcHBsaWNhdGlvbiBmb3IgQWlkXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9CdXRfQmVnaW5cIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDcyNFxuXHR5OiA4MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDYwMFxuXHRoZWlnaHQ6IDI4MFxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbi5vbiBFdmVudHMuVGFwLCAtPlxuXHRmbG93LnNob3dOZXh0IMaSKFwiYUJfTGFuZ3VhZ2VcIilcblxuXG53aW5kb3cucmVjdGFuZ2xlID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNjAwXG5cdGhlaWdodDogMjgwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxud2luZG93LmxhYmVsID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDIwMlxuXHR5OiA4NlxuXHR0ZXh0OiBcIkJlZ2luXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlIFwiaW5wdXQtZnJhbWVyL2lucHV0XCJcbndpbmRvdy5hQl9MYW5ndWFnZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImFCX0xhbmd1YWdlXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG5sYW5ndWFnZV9Cb2R5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQm9keVwiXG5cdHBhcmVudDogYUJfTGFuZ3VhZ2Vcblx0eDogMFxuXHR5OiAxMzhcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cbmJHXzIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR18yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5sYW5ndWFnZV9CdXRfRW5nbGlzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9FbmdsaXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxubGFuZ3VhZ2VfQnV0X0VuZ2xpc2gub24gRXZlbnRzLlRhcCwgLT5cblx0ZGF0YS5sYW5ndWFnZSA9IFwiRW5nbGlzaFwiXG5cdGZsb3cuc2hvd05leHQgxpIoXCJhQl9IZWxwXCIpLCBzY3JvbGw6IGZhbHNlXG5cbnJlY3RhbmdsZV8yID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDEyNVxuXHR5OiA2MlxuXHR0ZXh0OiBcIkVuZ2xpc2hcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9DaGluZXNlID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0NoaW5lc2VcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDE2NFxuXHR5OiA2MlxuXHR0ZXh0OiBcIuS4reaWh1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1RoYWkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVGhhaVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzQgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMTAxXG5cdHk6IDYyXG5cdHRleHQ6IFwi4LmE4LiX4LiiIOKAkyDguYTguJfguKJcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9BcmFiaWMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfQXJhYmljXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV81XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQXJhYmljXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF81ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzVcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9BcmFiaWNcblx0eDogMTU4XG5cdHk6IDYyXG5cdHRleHQ6IFwi2LnYsdio2YpcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9TcGFuaXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1NwYW5pc2hcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV82ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF82ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDExN1xuXHR5OiA2MlxuXHR0ZXh0OiBcIkVzcGHDsW9sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfR3JlZWsgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfR3JlZWtcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV83ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzdcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9HcmVla1xuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF83XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfR3JlZWtcblx0eDogMTAyXG5cdHk6IDYyXG5cdHRleHQ6IFwizpXOu867zrd2zrnOus6sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVmlldCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9WaWV0XCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzggPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMTEwXG5cdHk6IDYyXG5cdHRleHQ6IFwiVmnhu4d0LW5n4buvXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVHVya2lzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9UdXJraXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogNjIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzkgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMTM1XG5cdHk6IDYyXG5cdHRleHQ6IFwiVMO8cmvDp2VcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9QZXJzaWFuID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1BlcnNpYW5cIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMTM2NFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMTAgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfMTBcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9QZXJzaWFuXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8xMFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1BlcnNpYW5cblx0eDogMTUxXG5cdHk6IDYyXG5cdHRleHQ6IFwi2YHYp9ixINizXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9IZWxwID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSGVscFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaGVscF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9IZWxwXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18zID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfM1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5oZWxwX3RfSGVscCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJoZWxwX3RfSGVscFwiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDMwMFxuICB5OiA0MjBcbiAgdGV4dDogXCJJcyBTb21lb25lIEhlbHBpbmcgeW91IEZpbGwgT3V0IFRoaXMgRm9ybT9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhlbHBfaV9CdW95ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9pX0J1b3lcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA4ODRcbiAgeTogNzhcbiAgd2lkdGg6IDI4MFxuICBoZWlnaHQ6IDI4MFxuICBpbWFnZTogXCJpbWFnZXMvSGVscF9pX0J1b3kuc3ZnXCJcblxuaGVscF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8xMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xMVwiXG4gIHBhcmVudDogaGVscF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsMjQwLDI0OSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMTksMTMxLDEzNiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzExID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzExXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaGVscF9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9Ob1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbmhlbHBfQnV0X05vLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IGZhbHNlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9SZWFkU3BlYWtcIilcblxucmVjdGFuZ2xlXzEyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzEyXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xMlwiXG4gIHBhcmVudDogaGVscF9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmhlbHBfQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X1llc1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuaGVscF9CdXRfWWVzLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IHRydWVcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1JlYWRTcGVha1wiKVxuXG5yZWN0YW5nbGVfMTMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTNcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzEzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzEzXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIiIsImNsYXNzIG1vZHVsZS5leHBvcnRzIGV4dGVuZHMgTGF5ZXJcblx0XHRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdG9wdGlvbnMuY2xpcCA/PSB0cnVlXG5cdFx0b3B0aW9ucy5pbml0aWFsVmlld05hbWUgPz0gJ2luaXRpYWxWaWV3J1xuXHRcdG9wdGlvbnMuYmFja0J1dHRvbk5hbWUgPz0gJ2JhY2tCdXR0b24nXG5cdFx0b3B0aW9ucy5hbmltYXRpb25PcHRpb25zID89IHsgY3VydmU6IFwiY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpXCIsIHRpbWU6IC43IH1cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBcImJsYWNrXCJcblx0XHRvcHRpb25zLnNjcm9sbCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0xpbmsgPz0gdHJ1ZVxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEBoaXN0b3J5ID0gW11cblxuXHRcdEBvbkNoYW5nZSBcInN1YkxheWVyc1wiLCAoY2hhbmdlTGlzdCkgPT5cblx0XHRcdHZpZXcgPSBjaGFuZ2VMaXN0LmFkZGVkWzBdXG5cdFx0XHRpZiB2aWV3P1xuXHRcdFx0XHQjIGRlZmF1bHQgYmVoYXZpb3JzIGZvciB2aWV3c1xuXHRcdFx0XHR2aWV3LmNsaXAgPSB0cnVlXG5cdFx0XHRcdHZpZXcub24gRXZlbnRzLkNsaWNrLCAtPiByZXR1cm4gIyBwcmV2ZW50IGNsaWNrLXRocm91Z2gvYnViYmxpbmdcblx0XHRcdFx0IyBhZGQgc2Nyb2xsY29tcG9uZW50XG5cdFx0XHRcdGlmIEBzY3JvbGxcblx0XHRcdFx0XHRjaGlsZHJlbiA9IHZpZXcuY2hpbGRyZW5cblx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRuYW1lOiBcInNjcm9sbENvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdFx0XHRcdHBhcmVudDogdmlld1xuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5jb250ZW50LmJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XHRcdFx0XHRpZiB2aWV3LndpZHRoIDw9IEB3aWR0aFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbEhvcml6b250YWwgPSBmYWxzZVxuXHRcdFx0XHRcdGlmIHZpZXcuaGVpZ2h0IDw9IEBoZWlnaHRcblx0XHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5zY3JvbGxWZXJ0aWNhbCA9IGZhbHNlXG5cdFx0XHRcdFx0Zm9yIGMgaW4gY2hpbGRyZW5cblx0XHRcdFx0XHRcdGMucGFyZW50ID0gc2Nyb2xsQ29tcG9uZW50LmNvbnRlbnRcblx0XHRcdFx0XHR2aWV3LnNjcm9sbENvbXBvbmVudCA9IHNjcm9sbENvbXBvbmVudCAjIG1ha2UgaXQgYWNjZXNzaWJsZSBhcyBhIHByb3BlcnR5XG5cdFx0XHRcdFx0IyByZXNldCBzaXplIHNpbmNlIGNvbnRlbnQgbW92ZWQgdG8gc2Nyb2xsQ29tcG9uZW50LiBwcmV2ZW50cyBzY3JvbGwgYnVnIHdoZW4gZHJhZ2dpbmcgb3V0c2lkZS5cblx0XHRcdFx0XHR2aWV3LnNpemUgPSB7d2lkdGg6IEB3aWR0aCwgaGVpZ2h0OiBAaGVpZ2h0fVxuXG5cdFx0dHJhbnNpdGlvbnMgPVxuXHRcdFx0c3dpdGNoSW5zdGFudDoge31cblx0XHRcdGZhZGVJbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7b3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge29wYWNpdHk6IDF9XG5cdFx0XHR6b29tSW46XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMSwgb3BhY2l0eTogMX1cblx0XHRcdHpvb21PdXQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMC44LCBvcGFjaXR5OiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVJblVwOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5SaWdodDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHNsaWRlSW5Eb3duOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhZOiAwfVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5MZWZ0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7bWF4WDogQHdpZHRofVxuXHRcdFx0bW92ZUluVXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRtb3ZlSW5Eb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogLUBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0bW92ZUluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7bWF4WDogMH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGgvNSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC1Ad2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaE91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiAtKEB3aWR0aC81KSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdFx0dG86IHt4OiAwLCBicmlnaHRuZXNzOiAxMDB9XG5cdFx0XHRwdXNoT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHNsaWRlT3V0VXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhZOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXRSaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0RG93bjpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IEBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dExlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXG5cdFx0IyBzaG9ydGN1dHNcblx0XHR0cmFuc2l0aW9ucy5zbGlkZUluID0gdHJhbnNpdGlvbnMuc2xpZGVJblJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMuc2xpZGVPdXQgPSB0cmFuc2l0aW9ucy5zbGlkZU91dFJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMucHVzaEluID0gdHJhbnNpdGlvbnMucHVzaEluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoT3V0ID0gdHJhbnNpdGlvbnMucHVzaE91dFJpZ2h0XG5cblx0XHQjIGV2ZW50c1xuXHRcdEV2ZW50cy5WaWV3V2lsbFN3aXRjaCA9IFwidmlld1dpbGxTd2l0Y2hcIlxuXHRcdEV2ZW50cy5WaWV3RGlkU3dpdGNoID0gXCJ2aWV3RGlkU3dpdGNoXCJcblx0XHRMYXllcjo6b25WaWV3V2lsbFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgY2IpXG5cdFx0TGF5ZXI6Om9uVmlld0RpZFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBjYilcdFx0XG5cblx0XHRfLmVhY2ggdHJhbnNpdGlvbnMsIChhbmltUHJvcHMsIG5hbWUpID0+XG5cblx0XHRcdGlmIG9wdGlvbnMuYXV0b0xpbmtcblx0XHRcdFx0bGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblx0XHRcdFx0Zm9yIGJ0biBpbiBsYXllcnNcblx0XHRcdFx0XHRpZiBfLmluY2x1ZGVzIGJ0bi5uYW1lLCBuYW1lXG5cdFx0XHRcdFx0XHR2aWV3Q29udHJvbGxlciA9IEBcblx0XHRcdFx0XHRcdGJ0bi5vbkNsaWNrIC0+XG5cdFx0XHRcdFx0XHRcdGFuaW0gPSBAbmFtZS5zcGxpdCgnXycpWzBdXG5cdFx0XHRcdFx0XHRcdGxpbmtOYW1lID0gQG5hbWUucmVwbGFjZShhbmltKydfJywnJylcblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBsaW5rTmFtZS5yZXBsYWNlKC9cXGQrL2csICcnKSAjIHJlbW92ZSBudW1iZXJzXG5cdFx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyW2FuaW1dIF8uZmluZChsYXllcnMsIChsKSAtPiBsLm5hbWUgaXMgbGlua05hbWUpXG5cblx0XHRcdEBbbmFtZV0gPSAobmV3VmlldywgYW5pbWF0aW9uT3B0aW9ucyA9IEBhbmltYXRpb25PcHRpb25zKSA9PlxuXG5cdFx0XHRcdHJldHVybiBpZiBuZXdWaWV3IGlzIEBjdXJyZW50Vmlld1xuXG5cblxuXHRcdFx0XHQjIG1ha2Ugc3VyZSB0aGUgbmV3IGxheWVyIGlzIGluc2lkZSB0aGUgdmlld2NvbnRyb2xsZXJcblx0XHRcdFx0bmV3Vmlldy5wYXJlbnQgPSBAXG5cdFx0XHRcdG5ld1ZpZXcuc2VuZFRvQmFjaygpXG5cblx0XHRcdFx0IyByZXNldCBwcm9wcyBpbiBjYXNlIHRoZXkgd2VyZSBjaGFuZ2VkIGJ5IGEgcHJldiBhbmltYXRpb25cblx0XHRcdFx0bmV3Vmlldy5wb2ludCA9IHt4OjAsIHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXcub3BhY2l0eSA9IDFcblx0XHRcdFx0bmV3Vmlldy5zY2FsZSA9IDFcblx0XHRcdFx0bmV3Vmlldy5icmlnaHRuZXNzID0gMTAwXG5cdFx0XHRcdFxuXHRcdFx0XHQjIG9sZFZpZXdcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wb2ludCA9IHt4OiAwLCB5OiAwfSAjIGZpeGVzIG9mZnNldCBpc3N1ZSB3aGVuIG1vdmluZyB0b28gZmFzdCBiZXR3ZWVuIHNjcmVlbnNcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wcm9wcyA9IGFuaW1Qcm9wcy5vbGRWaWV3Py5mcm9tXG5cdFx0XHRcdGFuaW1PYmogPSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm9sZFZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRfLmRlZmF1bHRzKGFuaW1PYmosIHsgcHJvcGVydGllczoge30gfSlcblx0XHRcdFx0b3V0Z29pbmcgPSBAY3VycmVudFZpZXc/LmFuaW1hdGUgYW5pbU9ialxuXG5cdFx0XHRcdCMgbmV3Vmlld1xuXHRcdFx0XHRuZXdWaWV3LnByb3BzID0gYW5pbVByb3BzLm5ld1ZpZXc/LmZyb21cblx0XHRcdFx0aW5jb21pbmcgPSBuZXdWaWV3LmFuaW1hdGUgXy5leHRlbmQge3Byb3BlcnRpZXM6IGFuaW1Qcm9wcy5uZXdWaWV3Py50b30sIGFuaW1hdGlvbk9wdGlvbnNcblx0XHRcdFx0XG5cdFx0XHRcdCMgbGF5ZXIgb3JkZXJcblx0XHRcdFx0aWYgXy5pbmNsdWRlcyBuYW1lLCAnT3V0J1xuXHRcdFx0XHRcdG5ld1ZpZXcucGxhY2VCZWhpbmQoQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcdG91dGdvaW5nLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlZm9yZShAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgQGN1cnJlbnRWaWV3LCBuZXdWaWV3KVxuXHRcdFx0XHRcblx0XHRcdFx0IyBjaGFuZ2UgQ3VycmVudFZpZXcgYmVmb3JlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQgc28gb25lIGNvdWxkIGdvIGJhY2sgaW4gaGlzdG9yeVxuXHRcdFx0XHQjIHdpdGhvdXQgaGF2aW5nIHRvIHdhaXQgZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGZpbmlzaFxuXHRcdFx0XHRAc2F2ZUN1cnJlbnRWaWV3VG9IaXN0b3J5IG5hbWUsIG91dGdvaW5nLCBpbmNvbWluZ1xuXHRcdFx0XHRAY3VycmVudFZpZXcgPSBuZXdWaWV3XG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOnByZXZpb3VzVmlld1wiLCBAcHJldmlvdXNWaWV3KVxuXHRcdFx0XHRAZW1pdChcImNoYW5nZTpjdXJyZW50Vmlld1wiLCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHRpZiBpbmNvbWluZy5pc0FuaW1hdGluZ1xuXHRcdFx0XHRcdGhvb2sgPSBpbmNvbWluZyBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGhvb2sgPSBvdXRnb2luZ1xuXHRcdFx0XHRob29rPy5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBAcHJldmlvdXNWaWV3LCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlld05hbWU/XG5cdFx0XHRhdXRvSW5pdGlhbCA9IF8uZmluZCBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IGwubmFtZSBpcyBvcHRpb25zLmluaXRpYWxWaWV3TmFtZVxuXHRcdFx0aWYgYXV0b0luaXRpYWw/IHRoZW4gQHN3aXRjaEluc3RhbnQgYXV0b0luaXRpYWxcblxuXHRcdGlmIG9wdGlvbnMuaW5pdGlhbFZpZXc/XG5cdFx0XHRAc3dpdGNoSW5zdGFudCBvcHRpb25zLmluaXRpYWxWaWV3XG5cblx0XHRpZiBvcHRpb25zLmJhY2tCdXR0b25OYW1lP1xuXHRcdFx0YmFja0J1dHRvbnMgPSBfLmZpbHRlciBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IF8uaW5jbHVkZXMgbC5uYW1lLCBvcHRpb25zLmJhY2tCdXR0b25OYW1lXG5cdFx0XHRmb3IgYnRuIGluIGJhY2tCdXR0b25zXG5cdFx0XHRcdGJ0bi5vbkNsaWNrID0+IEBiYWNrKClcblxuXHRAZGVmaW5lIFwicHJldmlvdXNWaWV3XCIsXG5cdFx0XHRnZXQ6IC0+IEBoaXN0b3J5WzBdLnZpZXdcblxuXHRzYXZlQ3VycmVudFZpZXdUb0hpc3Rvcnk6IChuYW1lLG91dGdvaW5nQW5pbWF0aW9uLGluY29taW5nQW5pbWF0aW9uKSAtPlxuXHRcdEBoaXN0b3J5LnVuc2hpZnRcblx0XHRcdHZpZXc6IEBjdXJyZW50Vmlld1xuXHRcdFx0YW5pbWF0aW9uTmFtZTogbmFtZVxuXHRcdFx0aW5jb21pbmdBbmltYXRpb246IGluY29taW5nQW5pbWF0aW9uXG5cdFx0XHRvdXRnb2luZ0FuaW1hdGlvbjogb3V0Z29pbmdBbmltYXRpb25cblxuXHRiYWNrOiAtPlxuXHRcdHByZXZpb3VzID0gQGhpc3RvcnlbMF1cblx0XHRpZiBwcmV2aW91cy52aWV3P1xuXG5cdFx0XHRpZiBfLmluY2x1ZGVzIHByZXZpb3VzLmFuaW1hdGlvbk5hbWUsICdPdXQnXG5cdFx0XHRcdHByZXZpb3VzLnZpZXcuYnJpbmdUb0Zyb250KClcblxuXHRcdFx0YmFja0luID0gcHJldmlvdXMub3V0Z29pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cdFx0XHRtb3ZlT3V0ID0gcHJldmlvdXMuaW5jb21pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cblx0XHRcdGJhY2tJbi5zdGFydCgpXG5cdFx0XHRtb3ZlT3V0LnN0YXJ0KClcblxuXHRcdFx0QGN1cnJlbnRWaWV3ID0gcHJldmlvdXMudmlld1xuXHRcdFx0QGhpc3Rvcnkuc2hpZnQoKVxuXHRcdFx0bW92ZU91dC5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PiBAY3VycmVudFZpZXcuYnJpbmdUb0Zyb250KClcbiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBT0FBO0FEQUEsSUFBQTs7O0FBQU0sTUFBTSxDQUFDOzs7RUFFQyxpQkFBQyxPQUFEO0FBQ1osUUFBQTs7TUFEYSxVQUFROzs7TUFDckIsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDOzs7TUFDeEIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLE9BQVE7OztNQUNoQixPQUFPLENBQUMsa0JBQW1COzs7TUFDM0IsT0FBTyxDQUFDLGlCQUFrQjs7O01BQzFCLE9BQU8sQ0FBQyxtQkFBb0I7UUFBRSxLQUFBLEVBQU8sZ0NBQVQ7UUFBMkMsSUFBQSxFQUFNLEVBQWpEOzs7O01BQzVCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsU0FBVTs7O01BQ2xCLE9BQU8sQ0FBQyxXQUFZOztJQUVwQix5Q0FBTSxPQUFOO0lBQ0EsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUVYLElBQUMsQ0FBQSxRQUFELENBQVUsV0FBVixFQUF1QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsVUFBRDtBQUN0QixZQUFBO1FBQUEsSUFBQSxHQUFPLFVBQVUsQ0FBQyxLQUFNLENBQUEsQ0FBQTtRQUN4QixJQUFHLFlBQUg7VUFFQyxJQUFJLENBQUMsSUFBTCxHQUFZO1VBQ1osSUFBSSxDQUFDLEVBQUwsQ0FBUSxNQUFNLENBQUMsS0FBZixFQUFzQixTQUFBLEdBQUEsQ0FBdEI7VUFFQSxJQUFHLEtBQUMsQ0FBQSxNQUFKO1lBQ0MsUUFBQSxHQUFXLElBQUksQ0FBQztZQUNoQixlQUFBLEdBQXNCLElBQUEsZUFBQSxDQUNyQjtjQUFBLElBQUEsRUFBTSxpQkFBTjtjQUNBLEtBQUEs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
