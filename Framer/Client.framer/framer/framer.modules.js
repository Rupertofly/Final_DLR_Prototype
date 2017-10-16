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


},{}],"ab_conc":[function(require,module,exports){
var bG_6, concession_Body, concession_But_Back, concession_But_No, concession_But_Yes, concession_i_Centrelink, concession_t_Card, label_27, label_28, label_29, rectangle_27, rectangle_28, rectangle_29, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

window.aB_Concession = new Layer({
  name: "aB_Concession",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

concession_Body = new Layer({
  name: "concession_Body",
  parent: aB_Concession,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_6 = new Layer({
  name: "bG_6",
  parent: concession_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

concession_But_Back = new Layer({
  name: "concession_But_Back",
  parent: concession_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_27 = new Layer({
  name: "rectangle_27",
  parent: concession_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_27 = new TextLayer({
  name: "label_27",
  parent: concession_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

concession_t_Card = new TextLayer({
  name: "concession_t_Card",
  parent: concession_Body,
  x: Align.center,
  y: 340,
  text: "Do you have a current Centrelink benefit card\u2028 or Pensioner Concession Card",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)",
  width: 1400
});

concession_But_No = new Layer({
  name: "concession_But_No",
  parent: concession_Body,
  x: 1204,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

rectangle_28 = new Layer({
  name: "rectangle_28",
  parent: concession_But_No,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(253,225,225,1)",
  borderRadius: 40,
  borderColor: "rgba(194,55,52,1)",
  borderWidth: 6
});

label_28 = new TextLayer({
  name: "label_28",
  parent: concession_But_No,
  x: 0,
  y: Align.center,
  width: 600,
  text: "No",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(194,55,52,1)"
});

concession_But_Yes = new Layer({
  name: "concession_But_Yes",
  parent: concession_Body,
  x: 244,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

rectangle_29 = new Layer({
  name: "rectangle_29",
  parent: concession_But_Yes,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(232,245,230,1)",
  borderRadius: 40,
  borderColor: "rgba(108,176,101,1)",
  borderWidth: 6
});

label_29 = new TextLayer({
  name: "label_29",
  parent: concession_But_Yes,
  x: 0,
  y: Align.center,
  width: 600,
  text: "Yes",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(87,155,81,1)"
});

concession_i_Centrelink = new Layer({
  name: "concession_i_Centrelink",
  parent: concession_Body,
  x: 923.9999999900319,
  y: 100,
  width: 199.99937163972305,
  height: 195.39986654815797,
  image: "images/Concession_i_Centrelink.svg"
});

ƒ("concession_But_No").on(Events.Tap, function() {
  data.conc = false;
  return flow.showNext(ƒ("aB_Employment"));
});

ƒ("concession_But_Yes").on(Events.Tap, function() {
  data.conc = true;
  flow.showNext(ƒ("aB_Summary"));
  return sumFill();
});


},{"findModule":"findModule"}],"ab_contact":[function(require,module,exports){
var InputModule, bG_11, contact_Body, contact_But_Back, contact_But_Next, contact_Txt_Email, contact_Txt_Mail, contact_Txt_Phone, contact_i_Email, contact_i_Letter, contact_i_Phone, contact_t_Details, email, label_42, label_43, mail, phone, rectangle2_10, rectangle2_8, rectangle2_9, rectangle_42, rectangle_43, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

InputModule = require('input-framer/input');

window.aB_Contact = new Layer({
  name: "aB_Contact",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

contact_Body = new Layer({
  name: "contact_Body",
  parent: aB_Contact,
  x: 0,
  y: 120,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_11 = new Layer({
  name: "bG_11",
  parent: contact_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

contact_But_Back = new Layer({
  name: "contact_But_Back",
  parent: contact_Body,
  x: 404,
  y: 1160,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_42 = new Layer({
  name: "rectangle_42",
  parent: contact_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_42 = new TextLayer({
  name: "label_42",
  parent: contact_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

contact_t_Details = new TextLayer({
  name: "contact_t_Details",
  parent: contact_Body,
  x: 756,
  y: 216,
  text: "Contact Details",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

contact_But_Next = new Layer({
  name: "contact_But_Next",
  parent: contact_Body,
  x: 1364,
  y: 1120,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

contact_But_Next.onTap(function() {
  data.mail = ƒ("inp_Mail").value;
  data.email = ƒ("inp_Email").value;
  data.phone = ƒ("inp_Phone").value;
  return flow.showNext(ƒ("aB_Concession"));
});

rectangle_43 = new Layer({
  name: "rectangle_43",
  parent: contact_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 2
});

label_43 = new TextLayer({
  name: "label_43",
  parent: contact_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});

contact_Txt_Mail = new Layer({
  name: "contact_Txt_Mail",
  parent: contact_Body,
  x: 564,
  y: 360,
  backgroundColor: "transparent",
  width: 920,
  height: 120
});

rectangle2_8 = new Layer({
  name: "rectangle2_8",
  parent: contact_Txt_Mail,
  x: 0,
  y: 0,
  width: 920,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

mail = new TextLayer({
  name: "Label",
  parent: contact_Txt_Mail,
  x: 21,
  y: 12,
  text: "Mail",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
});

contact_Txt_Email = new Layer({
  name: "contact_Txt_Email",
  parent: contact_Body,
  x: 564,
  y: 520,
  backgroundColor: "transparent",
  width: 920,
  height: 120
});

rectangle2_9 = new Layer({
  name: "rectangle2_9",
  parent: contact_Txt_Email,
  x: 0,
  y: 0,
  width: 920,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

email = new TextLayer({
  name: "Label",
  parent: contact_Txt_Email,
  x: 21,
  y: 12,
  text: "Email",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
});

contact_Txt_Phone = new Layer({
  name: "contact_Txt_Phone",
  parent: contact_Body,
  x: 564,
  y: 680,
  backgroundColor: "transparent",
  width: 920,
  height: 120
});

rectangle2_10 = new Layer({
  name: "rectangle2_10",
  parent: contact_Txt_Phone,
  x: 0,
  y: 0,
  width: 920,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

phone = new TextLayer({
  name: "Label",
  parent: contact_Txt_Phone,
  x: 21,
  y: 12,
  text: "Phone",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
});

contact_i_Letter = new Layer({
  name: "contact_i_Letter",
  parent: contact_Body,
  x: 404,
  y: 378,
  width: 120,
  height: 84.70279319224828,
  image: "images/Contact_i_Letter.svg"
});

contact_i_Email = new Layer({
  name: "contact_i_Email",
  parent: contact_Body,
  x: 404,
  y: 520,
  width: 120,
  height: 119.99933444349506,
  image: "images/Contact_i_Email.svg"
});

contact_i_Phone = new Layer({
  name: "contact_i_Phone",
  parent: contact_Body,
  x: 404,
  y: 680,
  width: 120,
  height: 119.67929470482082,
  image: "images/Contact_i_Phone.svg"
});


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_employ":[function(require,module,exports){
var bG_7, employment_Body, employment_But_Back, employment_But_Casual, employment_But_FullTime, employment_But_PartTime, employment_But_Self, employment_But_Un, employment_i_Breifcase, employment_t_HowEmployed, label_30, label_31, label_32, label_33, label_34, label_35, rectangle_30, rectangle_31, rectangle_32, rectangle_33, rectangle_34, rectangle_35;

window.aB_Employment = new Layer({
  name: "aB_Employment",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

employment_Body = new Layer({
  name: "employment_Body",
  parent: aB_Employment,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_7 = new Layer({
  name: "bG_7",
  parent: employment_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

employment_But_Back = new Layer({
  name: "employment_But_Back",
  parent: employment_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_30 = new Layer({
  name: "rectangle_30",
  parent: employment_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_30 = new TextLayer({
  name: "label_30",
  parent: employment_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

employment_t_HowEmployed = new TextLayer({
  name: "employment_t_HowEmployed",
  parent: employment_Body,
  x: 616,
  y: 340,
  text: "How are you Employed?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

employment_i_Breifcase = new Layer({
  name: "employment_i_Breifcase",
  parent: employment_Body,
  x: 924,
  y: 68,
  width: 200,
  height: 180.69020689655176,
  image: "images/Employment_i_Breifcase.svg"
});

employment_But_Un = new Layer({
  name: "employment_But_Un",
  parent: employment_Body,
  x: 324,
  y: 518,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_31 = new Layer({
  name: "rectangle_31",
  parent: employment_But_Un,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(198,94,54,1)",
  borderWidth: 6
});

label_31 = new TextLayer({
  name: "label_31",
  parent: employment_But_Un,
  x: 52,
  y: 62,
  text: "Unemployed",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

employment_But_Self = new Layer({
  name: "employment_But_Self",
  parent: employment_Body,
  x: 804,
  y: 518,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_32 = new Layer({
  name: "rectangle_32",
  parent: employment_But_Self,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(198,94,54,1)",
  borderWidth: 6
});

label_32 = new TextLayer({
  name: "label_32",
  parent: employment_But_Self,
  x: 32,
  y: 62,
  text: "Self Employed",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

employment_But_Casual = new Layer({
  name: "employment_But_Casual",
  parent: employment_Body,
  x: 1284,
  y: 518,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_33 = new Layer({
  name: "rectangle_33",
  parent: employment_But_Casual,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(198,94,54,1)",
  borderWidth: 6
});

label_33 = new TextLayer({
  name: "label_33",
  parent: employment_But_Casual,
  x: 0,
  y: 24,
  text: "Casually \u2028Employed",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

employment_But_FullTime = new Layer({
  name: "employment_But_FullTime",
  parent: employment_Body,
  x: 1040,
  y: 798,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_34 = new Layer({
  name: "rectangle_34",
  parent: employment_But_FullTime,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(198,94,54,1)",
  borderWidth: 6
});

label_34 = new TextLayer({
  name: "label_34",
  parent: employment_But_FullTime,
  x: 0,
  y: 24,
  text: "Employed Full Time",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

employment_But_PartTime = new Layer({
  name: "employment_But_PartTime",
  parent: employment_Body,
  x: 564,
  y: 798,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_35 = new Layer({
  name: "rectangle_35",
  parent: employment_But_PartTime,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(254,233,225,1)",
  borderRadius: 40,
  borderColor: "rgba(198,94,54,1)",
  borderWidth: 6
});

label_35 = new TextLayer({
  name: "label_35",
  parent: employment_But_PartTime,
  x: 0,
  y: 24,
  text: "Employed\u2028 Part Time",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});


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


},{"findModule":"findModule"}],"ab_hourinc":[function(require,module,exports){
var InputModule, bG_9, hourIncome_Body, hourIncome_But_Next, hourIncome_Txt_Hours, hourIncome_Txt_Rate, hourIncome_i_breifcase, hourlyIncome_But_Back, hourlyIncome_t_Hours, hourlyIncome_t_Rate, hourlyRate, hoursPerWeek, label_38, label_39, rectangle2_2, rectangle2_3, rectangle_38, rectangle_39, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

InputModule = require('input-framer/input');

window.aB_HourIncome = new Layer({
  name: "aB_HourIncome",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

hourIncome_Body = new Layer({
  name: "hourIncome_Body",
  parent: aB_HourIncome,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_9 = new Layer({
  name: "bG_9",
  parent: hourIncome_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

hourlyIncome_But_Back = new Layer({
  name: "hourlyIncome_But_Back",
  parent: hourIncome_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_38 = new Layer({
  name: "rectangle_38",
  parent: hourlyIncome_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_38 = new TextLayer({
  name: "label_38",
  parent: hourlyIncome_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

hourlyIncome_t_Rate = new TextLayer({
  name: "hourlyIncome_t_Rate",
  parent: hourIncome_Body,
  x: 458,
  y: 362,
  text: "What is your Hourly rate after tax?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

hourlyIncome_t_Hours = new TextLayer({
  name: "hourlyIncome_t_Hours",
  parent: hourIncome_Body,
  x: 324,
  y: 682,
  text: "How many Hours do you work per week?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

hourIncome_i_breifcase = new Layer({
  name: "hourIncome_i_breifcase",
  parent: hourIncome_Body,
  x: 924,
  y: 68,
  width: 200,
  height: 180.69020689655176,
  image: "images/Employment_i_Breifcase.svg"
});

hourIncome_But_Next = new Layer({
  name: "hourIncome_But_Next",
  parent: hourIncome_Body,
  x: 1364,
  y: 1118,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_39 = new Layer({
  name: "rectangle_39",
  parent: hourIncome_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 6
});

label_39 = new TextLayer({
  name: "label_39",
  parent: hourIncome_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});

hourIncome_Txt_Rate = new Layer({
  name: "hourIncome_Txt_Rate",
  parent: hourIncome_Body,
  x: 484,
  y: 518,
  backgroundColor: "transparent",
  width: 1080,
  height: 120
});

rectangle2_2 = new Layer({
  name: "rectangle2_2",
  parent: hourIncome_Txt_Rate,
  x: 0,
  y: 0,
  width: 1080,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

hourlyRate = new TextLayer({
  name: "hourlyRate",
  parent: hourIncome_Txt_Rate,
  x: 21,
  y: 18,
  height: hourIncome_Txt_Rate.height,
  text: "$"
});

hourlyRate.style = {
  fontSize: "72px",
  fontFamily: "Avenir Next",
  fontWeight: "400px",
  textAlign: "left",
  color: "rgba(247,203,119,1)"
};

hourlyRate = new InputModule.Input({
  name: "hourlyRate",
  parent: hourIncome_Txt_Rate,
  x: 80,
  y: 0,
  height: hourIncome_Txt_Rate.height,
  width: 500,
  text: "00.0",
  type: "number"
});

hourlyRate.style = {
  fontSize: "72px",
  fontFamily: "Avenir Next",
  fontWeight: "400px",
  textAlign: "left",
  color: "rgba(247,203,119,1)"
};

hourlyRate.on("input", function() {
  if ((hoursPerWeek.value !== ("" || "00")) && (hourlyRate.value !== ("" || "00.0"))) {
    return hourIncome_But_Next.visible = true;
  }
});

hourlyRate.on("keyup", function(event) {
  if (event.which === 13) {
    return hourlyRate.input.blur();
  }
});

hourlyRate.onFocus(function() {
  if (this.value === "00.0") {
    return this.value = "";
  }
});

hourIncome_Txt_Hours = new Layer({
  name: "hourIncome_Txt_Hours",
  parent: hourIncome_Body,
  x: 484,
  y: 838,
  backgroundColor: "transparent",
  width: 1080,
  height: 120
});

rectangle2_3 = new Layer({
  name: "rectangle2_3",
  parent: hourIncome_Txt_Hours,
  x: 0,
  y: 0,
  width: 1080,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

hoursPerWeek = new InputModule.Input({
  name: "hoursPerWeek",
  parent: hourIncome_Txt_Hours,
  x: 21,
  y: 0,
  text: "Hours per Week",
  type: "number",
  height: hourIncome_Txt_Rate.height,
  width: 500
});

hoursPerWeek.style = {
  fontSize: "72px",
  fontFamily: "Avenir Next",
  fontWeight: "400",
  textAlign: "left",
  color: "rgba(247,203,119,1)"
};

hoursPerWeek.on("input", function() {
  if ((hoursPerWeek.value !== ("" || "00")) && (hourlyRate.value !== ("" || "00.0"))) {
    return hourIncome_But_Next.visible = true;
  }
});

hoursPerWeek.on("keyup", function(event) {
  if (event.which === 13) {
    return hoursPerWeek.input.blur();
  }
});

hourIncome_But_Next.visible = false;

hourIncome_But_Next.on(Events.Tap, function() {
  window.data.income = Number(hoursPerWeek.value) * Number(hourlyRate.value);
  return flow.showNext(ƒ("aB_Summary"));
});


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_interp":[function(require,module,exports){
var bG_5, interp_But_Back, interp_But_no, interp_But_yes, interp_body, interp_i_Language, interp_t_Interpretor, label_24, label_25, label_26, rectangle_24, rectangle_25, rectangle_26;

window.aB_Interpreter = new Layer({
  name: "aB_Interpreter",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

interp_body = new Layer({
  name: "interp_body",
  parent: aB_Interpreter,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_5 = new Layer({
  name: "bG_5",
  parent: interp_body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

interp_But_Back = new Layer({
  name: "interp_But_Back",
  parent: interp_body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_24 = new Layer({
  name: "rectangle_24",
  parent: interp_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_24 = new TextLayer({
  name: "label_24",
  parent: interp_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

interp_t_Interpretor = new TextLayer({
  name: "interp_t_Interpretor",
  parent: interp_body,
  x: 554,
  y: 340,
  text: "Do you need an interpreter?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

interp_i_Language = new Layer({
  name: "interp_i_Language",
  parent: interp_body,
  x: 950,
  y: 140,
  width: 150,
  height: 155,
  image: "images/Interp_i_Language.svg"
});

interp_But_no = new Layer({
  name: "interp_But_no",
  parent: interp_body,
  x: 1204,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

rectangle_25 = new Layer({
  name: "rectangle_25",
  parent: interp_But_no,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(253,225,225,1)",
  borderRadius: 40,
  borderColor: "rgba(194,55,52,1)",
  borderWidth: 6
});

label_25 = new TextLayer({
  name: "label_25",
  parent: interp_But_no,
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

interp_But_yes = new Layer({
  name: "interp_But_yes",
  parent: interp_body,
  x: 244,
  y: 678,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

rectangle_26 = new Layer({
  name: "rectangle_26",
  parent: interp_But_yes,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(232,245,230,1)",
  borderRadius: 40,
  borderColor: "rgba(108,176,101,1)",
  borderWidth: 6
});

label_26 = new TextLayer({
  name: "label_26",
  parent: interp_But_yes,
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


},{}],"ab_lang":[function(require,module,exports){
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


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_nayy":[function(require,module,exports){
var aB_Nayy, bG, label, nayy_Body, nayy_But_Return, nayy_i_Logo, nayy_t_Heading, nayy_t_HeadingCopy, rectangle;

aB_Nayy = new Layer({
  name: "aB_Nayyy",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

nayy_Body = new Layer({
  name: "nayy_Body",
  parent: aB_Nayy,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG = new Layer({
  name: "bG",
  parent: nayy_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

nayy_i_Logo = new Layer({
  name: "nayy_i_Logo",
  parent: nayy_Body,
  x: 884,
  y: 22,
  width: 276,
  height: 276,
  image: "images/nayy_i_Logo.svg"
});

nayy_t_Heading = new TextLayer({
  name: "nayy_t_Heading",
  parent: nayy_Body,
  x: 324,
  y: 376,
  width: 1396,
  text: "I’m Sorry my dude You do not qualify for the Duty Lawyer service",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

nayy_t_HeadingCopy = new TextLayer({
  name: "nayy_t_HeadingCopy",
  parent: nayy_Body,
  x: 324,
  y: 602,
  width: 1396,
  text: "For more information on what you can do, call VLA’s legal helpline on 1300 792 387",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

nayy_But_Return = new Layer({
  name: "nayy_But_Return",
  parent: nayy_Body,
  x: 724,
  y: 922,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

nayy_But_Return.onTap(function() {
  window.data = {};
  return flow.showNext(aB_Splash);
});

rectangle = new Layer({
  name: "rectangle",
  parent: nayy_But_Return,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label = new TextLayer({
  name: "label",
  parent: nayy_But_Return,
  x: 60,
  y: 86,
  text: "Return to Start",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});


},{}],"ab_ndob":[function(require,module,exports){
var InputModule, bG_10, day, label_40, label_41, nDOB_Body, nDOB_But_Back, nDOB_But_Day, nDOB_But_Next, nDOB_i_Cal, nDOB_i_Pen, nDOB_t_Dob, nDOB_t_Name, nDOB_text_Name, name, rectangle2_4, rectangle2_5, rectangle_40, rectangle_41, ref, ƒ, ƒƒ;

InputModule = require('input-framer/input');

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

window.aB_NDOB = new Layer({
  name: "aB_NDOB",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

nDOB_Body = new Layer({
  name: "nDOB_Body",
  parent: aB_NDOB,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_10 = new Layer({
  name: "bG_10",
  parent: nDOB_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

nDOB_But_Back = new Layer({
  name: "nDOB_But_Back",
  parent: nDOB_Body,
  x: 404,
  y: 1142,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_40 = new Layer({
  name: "rectangle_40",
  parent: nDOB_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_40 = new TextLayer({
  name: "label_40",
  parent: nDOB_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

nDOB_t_Name = new TextLayer({
  name: "nDOB_t_Name",
  parent: nDOB_Body,
  x: 680,
  y: 174,
  text: "What is your name?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

nDOB_t_Dob = new TextLayer({
  name: "nDOB_t_Dob",
  parent: nDOB_Body,
  x: 568,
  y: 654,
  text: "What is your date of birth?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

nDOB_But_Next = new Layer({
  name: "nDOB_But_Next",
  parent: nDOB_Body,
  x: 1364,
  y: 1102,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

nDOB_But_Next.on(Events.Tap, function() {
  if (name.value !== ("Name" || "") && day.value !== "") {
    data.name = name.value;
    data.Dob = day.value;
    ƒ("yass_t_Heading").text = "Thank you " + (data.name.match(/\w+/)) + "\nPlease take a seat and we will be with you shortly";
    ƒ("nayy_t_Heading").text = "I’m Sorry " + (data.name.match(/\w+/)) + " You do not qualify for the Duty Lawyer service";
    if (data.SpeakAbility === "sGood" || data.SpeakAbility === "sFluent") {
      flow.showNext(ƒ("aB_Contact"));
      return data.interp = "none";
    } else {
      return flow.showNext(ƒ("aB_Interpreter"));
    }
  }
});

rectangle_41 = new Layer({
  name: "rectangle_41",
  parent: nDOB_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 6
});

label_41 = new TextLayer({
  name: "label_41",
  parent: nDOB_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});

nDOB_i_Pen = new Layer({
  name: "nDOB_i_Pen",
  parent: nDOB_Body,
  x: 404,
  y: 344,
  width: 120,
  height: 120.00001874996185,
  image: "images/NDOB_i_Pen.svg"
});

nDOB_i_Cal = new Layer({
  name: "nDOB_i_Cal",
  parent: nDOB_Body,
  x: 404,
  y: 822,
  width: 120,
  height: 121.90807878305584,
  image: "images/NDOB_i_Cal.svg"
});

nDOB_text_Name = new Layer({
  name: "nDOB_text_Name",
  parent: nDOB_Body,
  x: 564,
  y: 342,
  backgroundColor: "transparent",
  width: 1080,
  height: 120
});

rectangle2_4 = new Layer({
  name: "rectangle2_4",
  parent: nDOB_text_Name,
  x: 0,
  y: 0,
  width: 1080,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

name = new InputModule.Input({
  name: "name",
  parent: nDOB_text_Name,
  x: 21,
  y: 0,
  height: 120,
  virtualKeyboard: false,
  text: "Name",
  textColour: "#C98639",
  fontSize: "72",
  fontFamily: "Avenir Next",
  fontWeight: "400",
  textAlign: "center",
  color: "rgba(247,203,119,1)"
});

name.style = {
  fontSize: "72px",
  color: "#C98639",
  fontWeight: "400"
};

nDOB_But_Day = new Layer({
  name: "nDOB_But_Day",
  parent: nDOB_Body,
  x: Align.center,
  y: 822,
  backgroundColor: "transparent",
  width: 700,
  height: 120
});

rectangle2_5 = new Layer({
  name: "rectangle2_5",
  parent: nDOB_But_Day,
  x: 0,
  y: 0,
  width: 700,
  height: 120,
  backgroundColor: "rgba(221,240,249,1)",
  borderRadius: 20,
  borderColor: "rgba(57,151,192,1)",
  borderWidth: 10
});

day = new InputModule.Input({
  name: "day",
  parent: nDOB_But_Day,
  x: 15,
  y: 12,
  virtualKeyboard: false,
  height: 100,
  width: 700,
  text: "DOB",
  type: "date",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "center",
  color: "rgba(171,218,239,1)"
});

day.style = {
  fontSize: "72px",
  color: "#2582AB",
  fontWeight: "400"
};

day.input.max = "2010-01-01";

day.input.value = "2010-01-01";

nDOB_But_Next.visible = false;

day.input.type = "date";

day.on("input", function() {
  if (name.value !== ("Name" || "") && day.value !== "") {
    return nDOB_But_Next.visible = true;
  }
});

name.on("input", function() {
  if (name.value !== ("Name" || "") && day.value !== "") {
    nDOB_But_Next.visible = true;
    return print(ƒ("yass_t_Heading").text);
  }
});

name.on("keyup", function(event) {
  if (event.which === 13) {
    return name.input.blur();
  }
});

name.onFocus(function() {
  if (this.value === "Name") {
    return this.value = "";
  }
});


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_readspeak":[function(require,module,exports){
var InputModule, bG_4, label_14, label_15, label_16, label_17, label_18, label_19, label_20, label_21, label_22, label_23, readSpeak_Body, readSpeak_But_Back, readSpeak_But_Next, readSpeak_But_rFluent, readSpeak_But_rGood, readSpeak_But_rNone, readSpeak_But_rSomewhat, readSpeak_But_sFluent, readSpeak_But_sGood, readSpeak_But_sNone, readSpeak_But_sSomewhat, readSpeak_i_Read, readSpeak_i_Speak, readSpeak_t_Read, readSpeak_t_Speak, rectangle_14, rectangle_15, rectangle_16, rectangle_17, rectangle_18, rectangle_19, rectangle_20, rectangle_21, rectangle_22, rectangle_23, ref, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

InputModule = require("input-framer/input");

window.RVals = {
  rNone: 0,
  rSomewhat: 0,
  rGood: 0,
  rFluent: 0
};

window.SVals = {
  sNone: 0,
  sSomewhat: 0,
  sGood: 0,
  sFluent: 0
};

window.aB_ReadSpeak = new Layer({
  name: "aB_ReadSpeak",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

readSpeak_Body = new Layer({
  name: "readSpeak_Body",
  parent: aB_ReadSpeak,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_4 = new Layer({
  name: "bG_4",
  parent: readSpeak_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

readSpeak_i_Read = new Layer({
  name: "readSpeak_i_Read",
  parent: readSpeak_Body,
  x: 404,
  y: 370,
  width: 120,
  height: 108.30369484395666,
  image: "images/ReadSpeak_i_Read.svg"
});

readSpeak_i_Speak = new Layer({
  name: "readSpeak_i_Speak",
  parent: readSpeak_Body,
  x: 410,
  y: 838,
  width: 107.65923571511956,
  height: 120,
  image: "images/ReadSpeak_i_Speak.svg"
});

readSpeak_But_Back = new Layer({
  name: "readSpeak_But_Back",
  parent: readSpeak_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_14 = new Layer({
  name: "rectangle_14",
  parent: readSpeak_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_14 = new TextLayer({
  name: "label_14",
  parent: readSpeak_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

readSpeak_t_Read = new TextLayer({
  name: "readSpeak_t_Read",
  parent: readSpeak_Body,
  x: 496,
  y: 198,
  text: "How well can you read English?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_t_Speak = new TextLayer({
  name: "readSpeak_t_Speak",
  parent: readSpeak_Body,
  x: 474,
  y: 680,
  text: "How well can you speak English?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_rNone = new Layer({
  name: "readSpeak_But_rNone",
  parent: readSpeak_Body,
  x: 564,
  y: 358,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_rNone.on(Events.Tap, function() {
  window.RVals = window.changeSel(window.RVals, "rNone");
  return window.updateSel();
});

rectangle_15 = new Layer({
  name: "rectangle_15",
  parent: readSpeak_But_rNone,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_15 = new TextLayer({
  name: "label_15",
  parent: readSpeak_But_rNone,
  x: 16,
  y: 28,
  width: 250,
  text: "None",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_sNone = new Layer({
  name: "readSpeak_But_sNone",
  parent: readSpeak_Body,
  x: 564,
  y: 838,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_sNone.on(Events.Tap, function() {
  window.SVals = window.changeSel(window.SVals, "sNone");
  return window.updateSel();
});

rectangle_16 = new Layer({
  name: "rectangle_16",
  parent: readSpeak_But_sNone,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_16 = new TextLayer({
  name: "label_16",
  parent: readSpeak_But_sNone,
  x: 16,
  y: 28,
  width: 250,
  text: "None",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_rSomewhat = new Layer({
  name: "readSpeak_But_rSomewhat",
  parent: readSpeak_Body,
  x: 884,
  y: 358,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_rSomewhat.on(Events.Tap, function() {
  window.RVals = window.changeSel(window.RVals, "rSomewhat");
  return window.updateSel();
});

rectangle_17 = new Layer({
  name: "rectangle_17",
  parent: readSpeak_But_rSomewhat,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_17 = new TextLayer({
  name: "label_17",
  parent: readSpeak_But_rSomewhat,
  x: 16,
  y: 28,
  width: 250,
  text: "Somewhat",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_sSomewhat = new Layer({
  name: "readSpeak_But_sSomewhat",
  parent: readSpeak_Body,
  x: 884,
  y: 838,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_sSomewhat.on(Events.Tap, function() {
  window.SVals = window.changeSel(window.SVals, "sSomewhat");
  return window.updateSel();
});

rectangle_18 = new Layer({
  name: "rectangle_18",
  parent: readSpeak_But_sSomewhat,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_18 = new TextLayer({
  name: "label_18",
  parent: readSpeak_But_sSomewhat,
  x: 16,
  y: 28,
  width: 250,
  text: "Somewhat",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_rGood = new Layer({
  name: "readSpeak_But_rGood",
  parent: readSpeak_Body,
  x: 1204,
  y: 358,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_rGood.on(Events.Tap, function() {
  window.RVals = window.changeSel(window.RVals, "rGood");
  return window.updateSel();
});

rectangle_19 = new Layer({
  name: "rectangle_19",
  parent: readSpeak_But_rGood,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_19 = new TextLayer({
  name: "label_19",
  parent: readSpeak_But_rGood,
  x: 16,
  y: 28,
  width: 250,
  text: "Good",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_sGood = new Layer({
  name: "readSpeak_But_sGood",
  parent: readSpeak_Body,
  x: 1204,
  y: 838,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_sGood.on(Events.Tap, function() {
  window.SVals = window.changeSel(window.SVals, "sGood");
  return window.updateSel();
});

rectangle_20 = new Layer({
  name: "rectangle_20",
  parent: readSpeak_But_sGood,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_20 = new TextLayer({
  name: "label_20",
  parent: readSpeak_But_sGood,
  x: 16,
  y: 28,
  width: 250,
  text: "Good",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_rFluent = new Layer({
  name: "readSpeak_But_rFluent",
  parent: readSpeak_Body,
  x: 1524,
  y: 358,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_rFluent.on(Events.Tap, function() {
  window.RVals = window.changeSel(window.RVals, "rFluent");
  return window.updateSel();
});

rectangle_21 = new Layer({
  name: "rectangle_21",
  parent: readSpeak_But_rFluent,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_21 = new TextLayer({
  name: "label_21",
  parent: readSpeak_But_rFluent,
  x: 16,
  y: 28,
  width: 250,
  text: "Fluent",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});

readSpeak_But_sFluent = new Layer({
  name: "readSpeak_But_sFluent",
  parent: readSpeak_Body,
  x: 1524,
  y: 838,
  backgroundColor: "transparent",
  width: 282,
  height: 120
});

readSpeak_But_sFluent.on(Events.Tap, function() {
  window.SVals = window.changeSel(window.SVals, "sFluent");
  return window.updateSel();
});

rectangle_22 = new Layer({
  name: "rectangle_22",
  parent: readSpeak_But_sFluent,
  x: 0,
  y: 0,
  width: 282,
  height: 120,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label_22 = new TextLayer({
  name: "label_22",
  parent: readSpeak_But_sFluent,
  x: 16,
  y: 28,
  width: 250,
  text: "Fluent",
  fontSize: 44,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

readSpeak_But_Next = new Layer({
  name: "readSpeak_But_Next",
  parent: readSpeak_Body,
  x: 1364,
  y: 1118,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_23 = new Layer({
  name: "rectangle_23",
  parent: readSpeak_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 6
});

label_23 = new TextLayer({
  name: "label_23",
  parent: readSpeak_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
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


},{"findModule":"findModule"}],"ab_summary":[function(require,module,exports){
var InputModule, hourIncome_But_Next, hourlyIncome_But_Back, ifThisIsCorrect, label, label_2, rectangle, rectangle_2, ref, summary_BG, summary_Body, summary_t_Heading, summary_t_HeadingCopy, summary_t_Title, ƒ, ƒƒ;

ref = require('findModule'), ƒ = ref.ƒ, ƒƒ = ref.ƒƒ;

InputModule = require('input-framer/input');

window.sumFill = function() {
  return ƒ("summary_t_data").html = data.name + "<br>\n" + window.data.Dob + "<br>\n" + window.data.help + "<br>\n" + window.data.interp + "<br><br>\n\u2028" + window.data.mail + "\u2028<br>\n" + window.data.email + "<br>\n\u2028" + window.data.phone + "<br>\nat least $" + window.data.income + " per week<br>\n" + window.data.dispSum + "<br>";
};

window.aB_Summary = new Layer({
  name: "aB_Summary",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

summary_Body = new Layer({
  name: "summary_Body",
  parent: aB_Summary,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

summary_BG = new Layer({
  name: "summary_BG",
  parent: summary_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

summary_t_Title = new TextLayer({
  name: "summary_t_Title",
  parent: summary_Body,
  x: 564,
  y: 38,
  width: 918.8536370080562,
  text: "Summary",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 700,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

summary_t_Heading = new TextLayer({
  name: "summary_t_Heading",
  parent: summary_Body,
  x: 404,
  y: 232,
  width: 600,
  html: "Name:<br>\nDate of Birth:<br>\nHelp Filling out Form:<br>\nInterpreter:<br>\nContact\u2028<br>\n-Mail:\u2028<br>\n-Email:<br>\n\u2028-Phone:<br>\nIncome:<br>\nDisability(s):<br>",
  fontSize: 48,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  lineHeight: 1.3333333333333333,
  textAlign: "left",
  color: "rgba(74,74,74,1)"
});

summary_t_HeadingCopy = new TextLayer({
  name: "summary_t_data",
  parent: summary_Body,
  x: 1064,
  y: 232,
  width: 600,
  fontSize: 48,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  lineHeight: 1.3333333333333333,
  textAlign: "left",
  color: "rgba(74,74,74,1)"
});

hourlyIncome_But_Back = new Layer({
  name: "Summary_But_Back",
  parent: aB_Summary,
  x: 404,
  y: 1280,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle = new Layer({
  name: "rectangle78",
  parent: hourlyIncome_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label = new TextLayer({
  name: "label78",
  parent: hourlyIncome_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

ifThisIsCorrect = new TextLayer({
  parent: aB_Summary,
  name: "ifThisIsCorrect",
  x: 742,
  y: 278,
  text: "If this is correct, Tap Next.",
  fontSize: 48,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "left",
  color: "rgba(74,74,74,1)"
});

hourIncome_But_Next = new Layer({
  name: "Summary_But_Next",
  parent: aB_Summary,
  x: 1364,
  y: 1240,
  backgroundColor: "transparent",
  width: 440,
  height: 200
});

rectangle_2 = new Layer({
  name: "rectangle_265",
  parent: hourIncome_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 2
});

label_2 = new TextLayer({
  name: "label_265",
  parent: hourIncome_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});

aB_Summary.on("change:parent", function() {
  sumFill();
  return print("bbom");
});


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_weekinc":[function(require,module,exports){
var bG_8, label_36, label_37, rectangle_36, rectangle_37, weekIncome_Body, weekIncome_But_Back, weekIncome_But_Next, weekIncome_i_briefcase, weekIncome_t_Income;

window.aB_WeekIncome = new Layer({
  name: "aB_WeekIncome",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

weekIncome_Body = new Layer({
  name: "weekIncome_Body",
  parent: aB_WeekIncome,
  x: 0,
  y: 122,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG_8 = new Layer({
  name: "bG_8",
  parent: weekIncome_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

weekIncome_But_Back = new Layer({
  name: "weekIncome_But_Back",
  parent: weekIncome_Body,
  x: 404,
  y: 1158,
  backgroundColor: "transparent",
  width: 440,
  height: 120
});

rectangle_36 = new Layer({
  name: "rectangle_36",
  parent: weekIncome_But_Back,
  x: 0,
  y: 0,
  width: 440,
  height: 120,
  backgroundColor: "rgba(219,231,236,1)",
  borderRadius: 40,
  borderColor: "rgba(169,181,186,1)",
  borderWidth: 6
});

label_36 = new TextLayer({
  name: "label_36",
  parent: weekIncome_But_Back,
  x: 158,
  y: 28,
  width: 124,
  text: "Back",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(68,80,86,1)"
});

weekIncome_t_Income = new TextLayer({
  name: "weekIncome_t_Income",
  parent: weekIncome_Body,
  x: 393,
  y: 340,
  text: "What is your weekly income after tax?",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

weekIncome_i_briefcase = new Layer({
  name: "weekIncome_i_briefcase",
  parent: weekIncome_Body,
  x: 924,
  y: 68,
  width: 200,
  height: 180.69020689655176,
  image: "images/Employment_i_Breifcase.svg"
});

weekIncome_But_Next = new Layer({
  name: "weekIncome_But_Next",
  parent: weekIncome_Body,
  x: 1364,
  y: 1118,
  backgroundColor: "transparent",
  width: 440,
  height: 200,
  visible: false
});

rectangle_37 = new Layer({
  name: "rectangle_37",
  parent: weekIncome_But_Next,
  x: 0,
  y: 0,
  width: 440,
  height: 200,
  backgroundColor: "rgba(250,242,232,1)",
  borderRadius: 40,
  borderColor: "rgba(151,151,151,1)",
  borderWidth: 2
});

label_37 = new TextLayer({
  name: "label_37",
  parent: weekIncome_But_Next,
  x: 159,
  y: 62,
  text: "Next",
  fontSize: 56,
  fontFamily: "Avenir Next",
  fontWeight: 500,
  textAlign: "center",
  color: "rgba(71,71,71,1)"
});


},{}],"ab_yass":[function(require,module,exports){
var bG, label, rectangle, yass_Body, yass_But_Return, yass_i_Logo, yass_t_Heading;

window.aB_Yass = new Layer({
  name: "aB_Yass",
  x: 0,
  y: 0,
  backgroundColor: "transparent",
  width: 2048,
  height: 1536
});

yass_Body = new Layer({
  name: "yass_Body",
  parent: aB_Yass,
  x: 0,
  y: 138,
  backgroundColor: "transparent",
  width: 2048,
  height: 1416
});

bG = new Layer({
  name: "bG",
  parent: yass_Body,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

yass_i_Logo = new Layer({
  name: "yass_i_Logo",
  parent: yass_Body,
  x: 884,
  y: 22,
  width: 276,
  height: 276,
  image: "images/yass_i_Logo.svg"
});

yass_t_Heading = new TextLayer({
  name: "yass_t_Heading",
  parent: yass_Body,
  x: 564,
  y: 376,
  width: 917.886927759102,
  text: "Thank you gas Please take a seat and we will be with you shortly",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

yass_But_Return = new Layer({
  name: "yass_But_Return",
  parent: yass_Body,
  x: 724,
  y: 922,
  backgroundColor: "transparent",
  width: 600,
  height: 280
});

yass_But_Return.onTap(function() {
  window.data = {};
  return flow.showNext(aB_Splash);
});

rectangle = new Layer({
  name: "rectangle",
  parent: yass_But_Return,
  x: 0,
  y: 0,
  width: 600,
  height: 280,
  backgroundColor: "rgba(239,239,239,1)",
  borderRadius: 40,
  borderColor: "rgba(183,183,183,1)",
  borderWidth: 6
});

label = new TextLayer({
  name: "label",
  parent: yass_But_Return,
  x: 60,
  y: 86,
  text: "Return to Start",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
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

exports.myFunction = function() {};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL1ZpZXdDb250cm9sbGVyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfY29uYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2NvbnRhY3QuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9lbXBsb3kuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9oZWxwLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaG91cmluYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2ludGVycC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2xhbmcuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9uYXl5LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfbmRvYi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3JlYWRzcGVhay5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3NwbGFzaC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3N1bW1hcnkuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl93ZWVraW5jLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfeWFzcy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2ZpbmRNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7OztBQUFNLE1BQU0sQ0FBQzs7O0VBRUMsaUJBQUMsT0FBRDtBQUNaLFFBQUE7O01BRGEsVUFBUTs7O01BQ3JCLE9BQU8sQ0FBQyxR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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7O0FBRWhCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCLFNBQUEsR0FBQTs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgbW9kdWxlLmV4cG9ydHMgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5jbGlwID89IHRydWVcblx0XHRvcHRpb25zLmluaXRpYWxWaWV3TmFtZSA/PSAnaW5pdGlhbFZpZXcnXG5cdFx0b3B0aW9ucy5iYWNrQnV0dG9uTmFtZSA/PSAnYmFja0J1dHRvbidcblx0XHRvcHRpb25zLmFuaW1hdGlvbk9wdGlvbnMgPz0geyBjdXJ2ZTogXCJjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSlcIiwgdGltZTogLjcgfVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiYmxhY2tcIlxuXHRcdG9wdGlvbnMuc2Nyb2xsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvTGluayA/PSB0cnVlXG5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QGhpc3RvcnkgPSBbXVxuXG5cdFx0QG9uQ2hhbmdlIFwic3ViTGF5ZXJzXCIsIChjaGFuZ2VMaXN0KSA9PlxuXHRcdFx0dmlldyA9IGNoYW5nZUxpc3QuYWRkZWRbMF1cblx0XHRcdGlmIHZpZXc/XG5cdFx0XHRcdCMgZGVmYXVsdCBiZWhhdmlvcnMgZm9yIHZpZXdzXG5cdFx0XHRcdHZpZXcuY2xpcCA9IHRydWVcblx0XHRcdFx0dmlldy5vbiBFdmVudHMuQ2xpY2ssIC0+IHJldHVybiAjIHByZXZlbnQgY2xpY2stdGhyb3VnaC9idWJibGluZ1xuXHRcdFx0XHQjIGFkZCBzY3JvbGxjb21wb25lbnRcblx0XHRcdFx0aWYgQHNjcm9sbFxuXHRcdFx0XHRcdGNoaWxkcmVuID0gdmlldy5jaGlsZHJlblxuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudCA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdFx0XHRcdG5hbWU6IFwic2Nyb2xsQ29tcG9uZW50XCJcblx0XHRcdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdFx0cGFyZW50OiB2aWV3XG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LmNvbnRlbnQuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0XHRcdGlmIHZpZXcud2lkdGggPD0gQHdpZHRoXG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRcdFx0aWYgdmlldy5oZWlnaHQgPD0gQGhlaWdodFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbFZlcnRpY2FsID0gZmFsc2Vcblx0XHRcdFx0XHRmb3IgYyBpbiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0Yy5wYXJlbnQgPSBzY3JvbGxDb21wb25lbnQuY29udGVudFxuXHRcdFx0XHRcdHZpZXcuc2Nyb2xsQ29tcG9uZW50ID0gc2Nyb2xsQ29tcG9uZW50ICMgbWFrZSBpdCBhY2Nlc3NpYmxlIGFzIGEgcHJvcGVydHlcblx0XHRcdFx0XHQjIHJlc2V0IHNpemUgc2luY2UgY29udGVudCBtb3ZlZCB0byBzY3JvbGxDb21wb25lbnQuIHByZXZlbnRzIHNjcm9sbCBidWcgd2hlbiBkcmFnZ2luZyBvdXRzaWRlLlxuXHRcdFx0XHRcdHZpZXcuc2l6ZSA9IHt3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEBoZWlnaHR9XG5cblx0XHR0cmFuc2l0aW9ucyA9XG5cdFx0XHRzd2l0Y2hJbnN0YW50OiB7fVxuXHRcdFx0ZmFkZUluOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHtvcGFjaXR5OiAwfVxuXHRcdFx0XHRcdHRvOiB7b3BhY2l0eTogMX1cblx0XHRcdHpvb21Jbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7c2NhbGU6IDAuOCwgb3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge3NjYWxlOiAxLCBvcGFjaXR5OiAxfVxuXHRcdFx0em9vbU91dDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZUluVXA6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IEBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJblJpZ2h0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0c2xpZGVJbkRvd246XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFk6IDB9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJbkxlZnQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHttYXhYOiBAd2lkdGh9XG5cdFx0XHRtb3ZlSW5VcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IC1AaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdG1vdmVJbkRvd246XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5MZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogLShAd2lkdGgvNSksIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaEluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogLUB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoT3V0UmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHB1c2hPdXRMZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRoLzUsIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRcdHRvOiB7eDogMCwgYnJpZ2h0bmVzczogMTAwfVxuXHRcdFx0c2xpZGVPdXRVcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXREb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cblx0XHQjIHNob3J0Y3V0c1xuXHRcdHRyYW5zaXRpb25zLnNsaWRlSW4gPSB0cmFuc2l0aW9ucy5zbGlkZUluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5zbGlkZU91dCA9IHRyYW5zaXRpb25zLnNsaWRlT3V0UmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoSW4gPSB0cmFuc2l0aW9ucy5wdXNoSW5SaWdodFxuXHRcdHRyYW5zaXRpb25zLnB1c2hPdXQgPSB0cmFuc2l0aW9ucy5wdXNoT3V0UmlnaHRcblxuXHRcdCMgZXZlbnRzXG5cdFx0RXZlbnRzLlZpZXdXaWxsU3dpdGNoID0gXCJ2aWV3V2lsbFN3aXRjaFwiXG5cdFx0RXZlbnRzLlZpZXdEaWRTd2l0Y2ggPSBcInZpZXdEaWRTd2l0Y2hcIlxuXHRcdExheWVyOjpvblZpZXdXaWxsU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBjYilcblx0XHRMYXllcjo6b25WaWV3RGlkU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIGNiKVx0XHRcblxuXHRcdF8uZWFjaCB0cmFuc2l0aW9ucywgKGFuaW1Qcm9wcywgbmFtZSkgPT5cblxuXHRcdFx0aWYgb3B0aW9ucy5hdXRvTGlua1xuXHRcdFx0XHRsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXHRcdFx0XHRmb3IgYnRuIGluIGxheWVyc1xuXHRcdFx0XHRcdGlmIF8uaW5jbHVkZXMgYnRuLm5hbWUsIG5hbWVcblx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyID0gQFxuXHRcdFx0XHRcdFx0YnRuLm9uQ2xpY2sgLT5cblx0XHRcdFx0XHRcdFx0YW5pbSA9IEBuYW1lLnNwbGl0KCdfJylbMF1cblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBAbmFtZS5yZXBsYWNlKGFuaW0rJ18nLCcnKVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IGxpbmtOYW1lLnJlcGxhY2UoL1xcZCsvZywgJycpICMgcmVtb3ZlIG51bWJlcnNcblx0XHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXJbYW5pbV0gXy5maW5kKGxheWVycywgKGwpIC0+IGwubmFtZSBpcyBsaW5rTmFtZSlcblxuXHRcdFx0QFtuYW1lXSA9IChuZXdWaWV3LCBhbmltYXRpb25PcHRpb25zID0gQGFuaW1hdGlvbk9wdGlvbnMpID0+XG5cblx0XHRcdFx0cmV0dXJuIGlmIG5ld1ZpZXcgaXMgQGN1cnJlbnRWaWV3XG5cblxuXG5cdFx0XHRcdCMgbWFrZSBzdXJlIHRoZSBuZXcgbGF5ZXIgaXMgaW5zaWRlIHRoZSB2aWV3Y29udHJvbGxlclxuXHRcdFx0XHRuZXdWaWV3LnBhcmVudCA9IEBcblx0XHRcdFx0bmV3Vmlldy5zZW5kVG9CYWNrKClcblxuXHRcdFx0XHQjIHJlc2V0IHByb3BzIGluIGNhc2UgdGhleSB3ZXJlIGNoYW5nZWQgYnkgYSBwcmV2IGFuaW1hdGlvblxuXHRcdFx0XHRuZXdWaWV3LnBvaW50ID0ge3g6MCwgeTogMH1cblx0XHRcdFx0bmV3Vmlldy5vcGFjaXR5ID0gMVxuXHRcdFx0XHRuZXdWaWV3LnNjYWxlID0gMVxuXHRcdFx0XHRuZXdWaWV3LmJyaWdodG5lc3MgPSAxMDBcblx0XHRcdFx0XG5cdFx0XHRcdCMgb2xkVmlld1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnBvaW50ID0ge3g6IDAsIHk6IDB9ICMgZml4ZXMgb2Zmc2V0IGlzc3VlIHdoZW4gbW92aW5nIHRvbyBmYXN0IGJldHdlZW4gc2NyZWVuc1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnByb3BzID0gYW5pbVByb3BzLm9sZFZpZXc/LmZyb21cblx0XHRcdFx0YW5pbU9iaiA9IF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMub2xkVmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdF8uZGVmYXVsdHMoYW5pbU9iaiwgeyBwcm9wZXJ0aWVzOiB7fSB9KVxuXHRcdFx0XHRvdXRnb2luZyA9IEBjdXJyZW50Vmlldz8uYW5pbWF0ZSBhbmltT2JqXG5cblx0XHRcdFx0IyBuZXdWaWV3XG5cdFx0XHRcdG5ld1ZpZXcucHJvcHMgPSBhbmltUHJvcHMubmV3Vmlldz8uZnJvbVxuXHRcdFx0XHRpbmNvbWluZyA9IG5ld1ZpZXcuYW5pbWF0ZSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm5ld1ZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRcblx0XHRcdFx0IyBsYXllciBvcmRlclxuXHRcdFx0XHRpZiBfLmluY2x1ZGVzIG5hbWUsICdPdXQnXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlaGluZChAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0b3V0Z29pbmcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT4gQGN1cnJlbnRWaWV3LmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVmb3JlKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRcblx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBAY3VycmVudFZpZXcsIG5ld1ZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGNoYW5nZSBDdXJyZW50VmlldyBiZWZvcmUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCBzbyBvbmUgY291bGQgZ28gYmFjayBpbiBoaXN0b3J5XG5cdFx0XHRcdCMgd2l0aG91dCBoYXZpbmcgdG8gd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZmluaXNoXG5cdFx0XHRcdEBzYXZlQ3VycmVudFZpZXdUb0hpc3RvcnkgbmFtZSwgb3V0Z29pbmcsIGluY29taW5nXG5cdFx0XHRcdEBjdXJyZW50VmlldyA9IG5ld1ZpZXdcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6cHJldmlvdXNWaWV3XCIsIEBwcmV2aW91c1ZpZXcpXG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOmN1cnJlbnRWaWV3XCIsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGluY29taW5nLmlzQW5pbWF0aW5nXG5cdFx0XHRcdFx0aG9vayA9IGluY29taW5nIFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aG9vayA9IG91dGdvaW5nXG5cdFx0XHRcdGhvb2s/Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIEBwcmV2aW91c1ZpZXcsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3TmFtZT9cblx0XHRcdGF1dG9Jbml0aWFsID0gXy5maW5kIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lXG5cdFx0XHRpZiBhdXRvSW5pdGlhbD8gdGhlbiBAc3dpdGNoSW5zdGFudCBhdXRvSW5pdGlhbFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlldz9cblx0XHRcdEBzd2l0Y2hJbnN0YW50IG9wdGlvbnMuaW5pdGlhbFZpZXdcblxuXHRcdGlmIG9wdGlvbnMuYmFja0J1dHRvbk5hbWU/XG5cdFx0XHRiYWNrQnV0dG9ucyA9IF8uZmlsdGVyIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gXy5pbmNsdWRlcyBsLm5hbWUsIG9wdGlvbnMuYmFja0J1dHRvbk5hbWVcblx0XHRcdGZvciBidG4gaW4gYmFja0J1dHRvbnNcblx0XHRcdFx0YnRuLm9uQ2xpY2sgPT4gQGJhY2soKVxuXG5cdEBkZWZpbmUgXCJwcmV2aW91c1ZpZXdcIixcblx0XHRcdGdldDogLT4gQGhpc3RvcnlbMF0udmlld1xuXG5cdHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeTogKG5hbWUsb3V0Z29pbmdBbmltYXRpb24saW5jb21pbmdBbmltYXRpb24pIC0+XG5cdFx0QGhpc3RvcnkudW5zaGlmdFxuXHRcdFx0dmlldzogQGN1cnJlbnRWaWV3XG5cdFx0XHRhbmltYXRpb25OYW1lOiBuYW1lXG5cdFx0XHRpbmNvbWluZ0FuaW1hdGlvbjogaW5jb21pbmdBbmltYXRpb25cblx0XHRcdG91dGdvaW5nQW5pbWF0aW9uOiBvdXRnb2luZ0FuaW1hdGlvblxuXG5cdGJhY2s6IC0+XG5cdFx0cHJldmlvdXMgPSBAaGlzdG9yeVswXVxuXHRcdGlmIHByZXZpb3VzLnZpZXc/XG5cblx0XHRcdGlmIF8uaW5jbHVkZXMgcHJldmlvdXMuYW5pbWF0aW9uTmFtZSwgJ091dCdcblx0XHRcdFx0cHJldmlvdXMudmlldy5icmluZ1RvRnJvbnQoKVxuXG5cdFx0XHRiYWNrSW4gPSBwcmV2aW91cy5vdXRnb2luZ0FuaW1hdGlvbi5yZXZlcnNlKClcblx0XHRcdG1vdmVPdXQgPSBwcmV2aW91cy5pbmNvbWluZ0FuaW1hdGlvbi5yZXZlcnNlKClcblxuXHRcdFx0YmFja0luLnN0YXJ0KClcblx0XHRcdG1vdmVPdXQuc3RhcnQoKVxuXG5cdFx0XHRAY3VycmVudFZpZXcgPSBwcmV2aW91cy52aWV3XG5cdFx0XHRAaGlzdG9yeS5zaGlmdCgpXG5cdFx0XHRtb3ZlT3V0Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9Db25jZXNzaW9uID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfQ29uY2Vzc2lvblwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuY29uY2Vzc2lvbl9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Db25jZXNzaW9uXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR182ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNlwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5jb25jZXNzaW9uX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9CdXRfQmFja1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzI3ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI3XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjdcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5jb25jZXNzaW9uX3RfQ2FyZCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX3RfQ2FyZFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IEFsaWduLmNlbnRlclxuICB5OiAzNDBcbiAgdGV4dDogXCJEbyB5b3UgaGF2ZSBhIGN1cnJlbnQgQ2VudHJlbGluayBiZW5lZml0IGNhcmTigKggb3IgUGVuc2lvbmVyIENvbmNlc3Npb24gQ2FyZFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiAgd2lkdGg6IDE0MDBcblxuY29uY2Vzc2lvbl9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0J1dF9Ob1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxucmVjdGFuZ2xlXzI4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI4XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yOCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yOFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfTm9cbiAgeDogMFxuICB5OiBBbGlnbi5jZW50ZXJcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIk5vXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuY29uY2Vzc2lvbl9CdXRfWWVzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9CdXRfWWVzXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogMjQ0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5cbnJlY3RhbmdsZV8yOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yOVwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfWWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDUsMjMwLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDEwOCwxNzYsMTAxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjlcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X1llc1xuICB4OiAwXG4gIHk6IEFsaWduLmNlbnRlclxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiWWVzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoODcsMTU1LDgxLDEpXCJcblxuY29uY2Vzc2lvbl9pX0NlbnRyZWxpbmsgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX2lfQ2VudHJlbGlua1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDkyMy45OTk5OTk5OTAwMzE5XG4gIHk6IDEwMFxuICB3aWR0aDogMTk5Ljk5OTM3MTYzOTcyMzA1XG4gIGhlaWdodDogMTk1LjM5OTg2NjU0ODE1Nzk3XG4gIGltYWdlOiBcImltYWdlcy9Db25jZXNzaW9uX2lfQ2VudHJlbGluay5zdmdcIlxuXG7GkihcImNvbmNlc3Npb25fQnV0X05vXCIpLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuY29uYyA9IGZhbHNlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9FbXBsb3ltZW50XCIpXG7GkihcImNvbmNlc3Npb25fQnV0X1llc1wiKS5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmNvbmMgPSB0cnVlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9TdW1tYXJ5XCIpXG4gIHN1bUZpbGwoKSIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG5cbndpbmRvdy5hQl9Db250YWN0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfQ29udGFjdFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuY29udGFjdF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Db250YWN0XG4gIHg6IDBcbiAgeTogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18xMSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzExXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmNvbnRhY3RfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X0J1dF9CYWNrXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfNDIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDJcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MlwiXG4gIHBhcmVudDogY29udGFjdF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmNvbnRhY3RfdF9EZXRhaWxzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImNvbnRhY3RfdF9EZXRhaWxzXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNzU2XG4gIHk6IDIxNlxuICB0ZXh0OiBcIkNvbnRhY3QgRGV0YWlsc1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuY29udGFjdF9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfQnV0X05leHRcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5jb250YWN0X0J1dF9OZXh0Lm9uVGFwIC0+XG4gIGRhdGEubWFpbCA9IMaSKFwiaW5wX01haWxcIikudmFsdWVcbiAgZGF0YS5lbWFpbCA9IMaSKFwiaW5wX0VtYWlsXCIpLnZhbHVlXG4gIGRhdGEucGhvbmUgPSDGkihcImlucF9QaG9uZVwiKS52YWx1ZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfQ29uY2Vzc2lvblwiKVxuXG5yZWN0YW5nbGVfNDMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDNcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogMlxuXG5sYWJlbF80MyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80M1wiXG4gIHBhcmVudDogY29udGFjdF9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5jb250YWN0X1R4dF9NYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9UeHRfTWFpbFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzhcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X01haWxcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5tYWlsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9NYWlsXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiTWFpbFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmNvbnRhY3RfVHh0X0VtYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9UeHRfRW1haWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA1NjRcbiAgeTogNTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl85ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl85XCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9FbWFpbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmVtYWlsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9FbWFpbFxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIkVtYWlsXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9UeHRfUGhvbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9QaG9uZVwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA2ODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzEwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl8xMFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfUGhvbmVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5waG9uZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJMYWJlbFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfUGhvbmVcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJQaG9uZVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmNvbnRhY3RfaV9MZXR0ZXIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfTGV0dGVyXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDM3OFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogODQuNzAyNzkzMTkyMjQ4MjhcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9MZXR0ZXIuc3ZnXCJcblxuY29udGFjdF9pX0VtYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9pX0VtYWlsXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDUyMFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTE5Ljk5OTMzNDQ0MzQ5NTA2XG4gIGltYWdlOiBcImltYWdlcy9Db250YWN0X2lfRW1haWwuc3ZnXCJcblxuY29udGFjdF9pX1Bob25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9pX1Bob25lXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDY4MFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTE5LjY3OTI5NDcwNDgyMDgyXG4gIGltYWdlOiBcImltYWdlcy9Db250YWN0X2lfUGhvbmUuc3ZnXCIiLCJ3aW5kb3cuYUJfRW1wbG95bWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0VtcGxveW1lbnRcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmVtcGxveW1lbnRfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQm9keVwiXG4gIHBhcmVudDogYUJfRW1wbG95bWVudFxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzdcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuZW1wbG95bWVudF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8zMCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMwID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMwXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuZW1wbG95bWVudF90X0hvd0VtcGxveWVkID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfdF9Ib3dFbXBsb3llZFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDYxNlxuICB5OiAzNDBcbiAgdGV4dDogXCJIb3cgYXJlIHlvdSBFbXBsb3llZD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfaV9CcmVpZmNhc2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X2lfQnJlaWZjYXNlXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogOTI0XG4gIHk6IDY4XG4gIHdpZHRoOiAyMDBcbiAgaGVpZ2h0OiAxODAuNjkwMjA2ODk2NTUxNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0VtcGxveW1lbnRfaV9CcmVpZmNhc2Uuc3ZnXCJcblxuZW1wbG95bWVudF9CdXRfVW4gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9VblwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDMyNFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzFcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1VuXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMxID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMxXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9VblxuICB4OiA1MlxuICB5OiA2MlxuICB0ZXh0OiBcIlVuZW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X1NlbGYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9TZWxmXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogODA0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMlwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfU2VsZlxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zMlwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfU2VsZlxuICB4OiAzMlxuICB5OiA2MlxuICB0ZXh0OiBcIlNlbGYgRW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X0Nhc3VhbCA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X0Nhc3VhbFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDEyODRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMzXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9DYXN1YWxcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzNcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Nhc3VhbFxuICB4OiAwXG4gIHk6IDI0XG4gIHRleHQ6IFwiQ2FzdWFsbHkg4oCoRW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAxMDQwXG4gIHk6IDc5OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zNFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzRcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lXG4gIHg6IDBcbiAgeTogMjRcbiAgdGV4dDogXCJFbXBsb3llZCBGdWxsIFRpbWVcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X1BhcnRUaW1lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfUGFydFRpbWVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA1NjRcbiAgeTogNzk4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM1ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM1XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfUGFydFRpbWVcbiAgeDogMFxuICB5OiAyNFxuICB0ZXh0OiBcIkVtcGxveWVk4oCoIFBhcnQgVGltZVwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfSGVscCA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0hlbHBcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmhlbHBfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQm9keVwiXG4gIHBhcmVudDogYUJfSGVscFxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfMyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzNcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuaGVscF90X0hlbHAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaGVscF90X0hlbHBcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAzMDBcbiAgeTogNDIwXG4gIHRleHQ6IFwiSXMgU29tZW9uZSBIZWxwaW5nIHlvdSBGaWxsIE91dCBUaGlzIEZvcm0/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5oZWxwX2lfQnVveSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfaV9CdW95XCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogODg0XG4gIHk6IDc4XG4gIHdpZHRoOiAyODBcbiAgaGVpZ2h0OiAyODBcbiAgaW1hZ2U6IFwiaW1hZ2VzL0hlbHBfaV9CdW95LnN2Z1wiXG5cbmhlbHBfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMTEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTFcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLDI0MCwyNDksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTE5LDEzMSwxMzYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xMVwiXG4gIHBhcmVudDogaGVscF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhlbHBfQnV0X05vID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9CdXRfTm9cIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAxMjA0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5oZWxwX0J1dF9Oby5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmhlbHAgPSBmYWxzZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfUmVhZFNwZWFrXCIpXG5cbnJlY3RhbmdsZV8xMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xMlwiXG4gIHBhcmVudDogaGVscF9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDIyNSwyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTJcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X05vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiTm9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuXG5oZWxwX0J1dF9ZZXMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9ZZXNcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAyNDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbmhlbHBfQnV0X1llcy5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmhlbHAgPSB0cnVlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9SZWFkU3BlYWtcIilcblxucmVjdGFuZ2xlXzEzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzEzXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0NSwyMzAsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTA4LDE3NiwxMDEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xM1wiXG4gIHBhcmVudDogaGVscF9CdXRfWWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiWWVzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoODcsMTU1LDgxLDEpXCIiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSAnaW5wdXQtZnJhbWVyL2lucHV0J1xuXG53aW5kb3cuYUJfSG91ckluY29tZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0hvdXJJbmNvbWVcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmhvdXJJbmNvbWVfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfQm9keVwiXG4gIHBhcmVudDogYUJfSG91ckluY29tZVxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfOSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzlcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuaG91cmx5SW5jb21lX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM4ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM4XCJcbiAgcGFyZW50OiBob3VybHlJbmNvbWVfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5ob3VybHlJbmNvbWVfdF9SYXRlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseUluY29tZV90X1JhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0NThcbiAgeTogMzYyXG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIEhvdXJseSByYXRlIGFmdGVyIHRheD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhvdXJseUluY29tZV90X0hvdXJzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseUluY29tZV90X0hvdXJzXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogMzI0XG4gIHk6IDY4MlxuICB0ZXh0OiBcIkhvdyBtYW55IEhvdXJzIGRvIHlvdSB3b3JrIHBlciB3ZWVrP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaG91ckluY29tZV9pX2JyZWlmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfaV9icmVpZmNhc2VcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuICBpbWFnZTogXCJpbWFnZXMvRW1wbG95bWVudF9pX0JyZWlmY2FzZS5zdmdcIlxuXG5ob3VySW5jb21lX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9CdXRfTmV4dFwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zOVwiXG4gIHBhcmVudDogaG91ckluY29tZV9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM5XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmhvdXJJbmNvbWVfVHh0X1JhdGUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX1R4dF9SYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDg0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzJcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X1JhdGVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuaG91cmx5UmF0ZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJob3VybHlSYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9SYXRlXG4gIHg6IDIxXG4gIHk6IDE4XG4gIGhlaWdodDogaG91ckluY29tZV9UeHRfUmF0ZS5oZWlnaHRcbiAgdGV4dDogXCIkXCJcbmhvdXJseVJhdGUuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwcHhcIlxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5cbmhvdXJseVJhdGUgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJob3VybHlSYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9SYXRlXG4gIHg6IDgwXG4gIHk6IDBcbiAgaGVpZ2h0OiBob3VySW5jb21lX1R4dF9SYXRlLmhlaWdodFxuICB3aWR0aDo1MDBcbiAgdGV4dDogXCIwMC4wXCJcbiAgdHlwZTogXCJudW1iZXJcIlxuaG91cmx5UmF0ZS5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogXCI0MDBweFwiXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmhvdXJseVJhdGUub24gXCJpbnB1dFwiLCAtPlxuICBpZiAoaG91cnNQZXJXZWVrLnZhbHVlIGlzbnQgKFwiXCIgb3IgXCIwMFwiKSkgYW5kIChob3VybHlSYXRlLnZhbHVlIGlzbnQgKFwiXCIgb3IgXCIwMC4wXCIpKVxuICAgIGhvdXJJbmNvbWVfQnV0X05leHQudmlzaWJsZSA9IHRydWVcbmhvdXJseVJhdGUub24gXCJrZXl1cFwiLCAoZXZlbnQpIC0+XG4gIGlmIGV2ZW50LndoaWNoIGlzIDEzIHRoZW4gaG91cmx5UmF0ZS5pbnB1dC5ibHVyKClcbmhvdXJseVJhdGUub25Gb2N1cyAtPlxuICBpZiBAdmFsdWUgaXMgXCIwMC4wXCIgdGhlbiBAdmFsdWUgPSBcIlwiXG5cbmhvdXJJbmNvbWVfVHh0X0hvdXJzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9UeHRfSG91cnNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0ODRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfM1wiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfSG91cnNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuaG91cnNQZXJXZWVrID0gbmV3IElucHV0TW9kdWxlLklucHV0XG4gIG5hbWU6IFwiaG91cnNQZXJXZWVrXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9Ib3Vyc1xuICB4OiAyMVxuICB5OiAwXG4gIHRleHQ6IFwiSG91cnMgcGVyIFdlZWtcIlxuICB0eXBlOiBcIm51bWJlclwiXG4gIGhlaWdodDogaG91ckluY29tZV9UeHRfUmF0ZS5oZWlnaHRcbiAgd2lkdGg6NTAwXG5ob3Vyc1BlcldlZWsuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuaG91cnNQZXJXZWVrLm9uIFwiaW5wdXRcIiwgLT5cbiAgaWYgKGhvdXJzUGVyV2Vlay52YWx1ZSBpc250IChcIlwiIG9yIFwiMDBcIikpIGFuZCAoaG91cmx5UmF0ZS52YWx1ZSBpc250IChcIlwiIG9yIFwiMDAuMFwiKSlcbiAgICBob3VySW5jb21lX0J1dF9OZXh0LnZpc2libGUgPSB0cnVlXG5ob3Vyc1BlcldlZWsub24gXCJrZXl1cFwiLCAoZXZlbnQpIC0+XG4gIGlmIGV2ZW50LndoaWNoIGlzIDEzIHRoZW4gaG91cnNQZXJXZWVrLmlucHV0LmJsdXIoKVxuXG5ob3VySW5jb21lX0J1dF9OZXh0LnZpc2libGUgPSBmYWxzZVxuaG91ckluY29tZV9CdXRfTmV4dC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuZGF0YS5pbmNvbWUgPSAoTnVtYmVyKGhvdXJzUGVyV2Vlay52YWx1ZSkqTnVtYmVyKGhvdXJseVJhdGUudmFsdWUpKVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfU3VtbWFyeVwiKSIsIndpbmRvdy5hQl9JbnRlcnByZXRlciA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0ludGVycHJldGVyXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5pbnRlcnBfYm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9ib2R5XCJcbiAgcGFyZW50OiBhQl9JbnRlcnByZXRlclxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzVcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5pbnRlcnBfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzI0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI0XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNFwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuaW50ZXJwX3RfSW50ZXJwcmV0b3IgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX3RfSW50ZXJwcmV0b3JcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDU1NFxuICB5OiAzNDBcbiAgdGV4dDogXCJEbyB5b3UgbmVlZCBhbiBpbnRlcnByZXRlcj9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmludGVycF9pX0xhbmd1YWdlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX2lfTGFuZ3VhZ2VcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDk1MFxuICB5OiAxNDBcbiAgd2lkdGg6IDE1MFxuICBoZWlnaHQ6IDE1NVxuICBpbWFnZTogXCJpbWFnZXMvSW50ZXJwX2lfTGFuZ3VhZ2Uuc3ZnXCJcblxuaW50ZXJwX0J1dF9ubyA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9CdXRfbm9cIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxuXG5yZWN0YW5nbGVfMjUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjVcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfbm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDIyNSwyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjVcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfbm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmludGVycF9CdXRfeWVzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX0J1dF95ZXNcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjZcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfeWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDUsMjMwLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDEwOCwxNzYsMTAxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjZcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfeWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiWWVzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoODcsMTU1LDgxLDEpXCIiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSBcImlucHV0LWZyYW1lci9pbnB1dFwiXG53aW5kb3cuYUJfTGFuZ3VhZ2UgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJhQl9MYW5ndWFnZVwiXG5cdHg6IDBcblx0eTogMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE1MzZcblxubGFuZ3VhZ2VfQm9keSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0JvZHlcIlxuXHRwYXJlbnQ6IGFCX0xhbmd1YWdlXG5cdHg6IDBcblx0eTogMTM4XG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXG5iR18yID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYkdfMlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxubGFuZ3VhZ2VfQnV0X0VuZ2xpc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfRW5nbGlzaFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcbmxhbmd1YWdlX0J1dF9FbmdsaXNoLm9uIEV2ZW50cy5UYXAsIC0+XG5cdGRhdGEubGFuZ3VhZ2UgPSBcIkVuZ2xpc2hcIlxuXHRmbG93LnNob3dOZXh0IMaSKFwiYUJfSGVscFwiKSwgc2Nyb2xsOiBmYWxzZVxuXG5yZWN0YW5nbGVfMiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV8yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfRW5nbGlzaFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfRW5nbGlzaFxuXHR4OiAxMjVcblx0eTogNjJcblx0dGV4dDogXCJFbmdsaXNoXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfQ2hpbmVzZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9DaGluZXNlXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiA2MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMyA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV8zXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQ2hpbmVzZVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8zXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQ2hpbmVzZVxuXHR4OiAxNjRcblx0eTogNjJcblx0dGV4dDogXCLkuK3mlodcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9UaGFpID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1RoYWlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV80ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzRcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UaGFpXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzRcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UaGFpXG5cdHg6IDEwMVxuXHR5OiA2MlxuXHR0ZXh0OiBcIuC5hOC4l+C4oiDigJMg4LmE4LiX4LiiXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfQXJhYmljID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0FyYWJpY1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiA4MDRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzUgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0FyYWJpY1xuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF81XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQXJhYmljXG5cdHg6IDE1OFxuXHR5OiA2MlxuXHR0ZXh0OiBcIti52LHYqNmKXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfU3BhbmlzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9TcGFuaXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiA2MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV82XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfU3BhbmlzaFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF82XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfU3BhbmlzaFxuXHR4OiAxMTdcblx0eTogNjJcblx0dGV4dDogXCJFc3Bhw7FvbFwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X0dyZWVrID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0dyZWVrXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNyA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV83XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfR3JlZWtcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzcgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfN1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0dyZWVrXG5cdHg6IDEwMlxuXHR5OiA2MlxuXHR0ZXh0OiBcIs6VzrvOu863ds65zrrOrFwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1ZpZXQgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVmlldFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAxMzY0XG5cdHk6IDM0MlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV84ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzhcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9WaWV0XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF84ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzhcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9WaWV0XG5cdHg6IDExMFxuXHR5OiA2MlxuXHR0ZXh0OiBcIlZp4buHdC1uZ+G7r1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1R1cmtpc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVHVya2lzaFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAxMzY0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV85ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UdXJraXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF85ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UdXJraXNoXG5cdHg6IDEzNVxuXHR5OiA2MlxuXHR0ZXh0OiBcIlTDvHJrw6dlXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfUGVyc2lhbiA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9QZXJzaWFuXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzEwID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzEwXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfUGVyc2lhblxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTAgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfMTBcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9QZXJzaWFuXG5cdHg6IDE1MVxuXHR5OiA2MlxuXHR0ZXh0OiBcItmB2KfYsSDYs1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiIsImFCX05heXkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9OYXl5eVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxubmF5eV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwibmF5eV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9OYXl5XG4gIHg6IDBcbiAgeTogMTM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iRyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXCJcbiAgcGFyZW50OiBuYXl5X0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbm5heXlfaV9Mb2dvID0gbmV3IExheWVyXG4gIG5hbWU6IFwibmF5eV9pX0xvZ29cIlxuICBwYXJlbnQ6IG5heXlfQm9keVxuICB4OiA4ODRcbiAgeTogMjJcbiAgd2lkdGg6IDI3NlxuICBoZWlnaHQ6IDI3NlxuICBpbWFnZTogXCJpbWFnZXMvbmF5eV9pX0xvZ28uc3ZnXCJcblxubmF5eV90X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibmF5eV90X0hlYWRpbmdcIlxuICBwYXJlbnQ6IG5heXlfQm9keVxuICB4OiAzMjRcbiAgeTogMzc2XG4gIHdpZHRoOiAxMzk2XG4gIHRleHQ6IFwiSeKAmW0gU29ycnkgbXkgZHVkZSBZb3UgZG8gbm90IHF1YWxpZnkgZm9yIHRoZSBEdXR5IExhd3llciBzZXJ2aWNlXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5uYXl5X3RfSGVhZGluZ0NvcHkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibmF5eV90X0hlYWRpbmdDb3B5XCJcbiAgcGFyZW50OiBuYXl5X0JvZHlcbiAgeDogMzI0XG4gIHk6IDYwMlxuICB3aWR0aDogMTM5NlxuICB0ZXh0OiBcIkZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBkbywgY2FsbCBWTEHigJlzIGxlZ2FsIGhlbHBsaW5lIG9uIDEzMDAgNzkyIDM4N1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubmF5eV9CdXRfUmV0dXJuID0gbmV3IExheWVyXG4gIG5hbWU6IFwibmF5eV9CdXRfUmV0dXJuXCJcbiAgcGFyZW50OiBuYXl5X0JvZHlcbiAgeDogNzI0XG4gIHk6IDkyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5uYXl5X0J1dF9SZXR1cm4ub25UYXAgLT5cbiAgd2luZG93LmRhdGEgPSB7fVxuICBmbG93LnNob3dOZXh0IGFCX1NwbGFzaFxuXG5yZWN0YW5nbGUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVcIlxuICBwYXJlbnQ6IG5heXlfQnV0X1JldHVyblxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXCJcbiAgcGFyZW50OiBuYXl5X0J1dF9SZXR1cm5cbiAgeDogNjBcbiAgeTogODZcbiAgdGV4dDogXCJSZXR1cm4gdG8gU3RhcnRcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbiIsIklucHV0TW9kdWxlID0gcmVxdWlyZSAnaW5wdXQtZnJhbWVyL2lucHV0J1xue8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG53aW5kb3cuYUJfTkRPQiA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX05ET0JcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbm5ET0JfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQm9keVwiXG4gIHBhcmVudDogYUJfTkRPQlxuICB4OiAwXG4gIHk6IDEzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfMTAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR18xMFwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5uRE9CX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9CdXRfQmFja1wiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTQyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzQwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQwXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfNDAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDBcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5uRE9CX3RfTmFtZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RfTmFtZVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDY4MFxuICB5OiAxNzRcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgbmFtZT9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5ET0JfdF9Eb2IgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibkRPQl90X0RvYlwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDU2OFxuICB5OiA2NTRcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgZGF0ZSBvZiBiaXJ0aD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5ET0JfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9OZXh0XCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTAyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbm5ET0JfQnV0X05leHQub24gRXZlbnRzLlRhcCwgLT5cbiAgaWYgbmFtZS52YWx1ZSBpc250IChcIk5hbWVcIiBvciBcIlwiKSBhbmQgZGF5LnZhbHVlIGlzbnQgXCJcIlxuICAgIGRhdGEubmFtZSA9IG5hbWUudmFsdWVcbiAgICBkYXRhLkRvYiA9IGRheS52YWx1ZVxuICAgIMaSKFwieWFzc190X0hlYWRpbmdcIikudGV4dCA9IFwiXCJcIlRoYW5rIHlvdSAje2RhdGEubmFtZS5tYXRjaCgvXFx3Ky8pfVxuICAgIFBsZWFzZSB0YWtlIGEgc2VhdCBhbmQgd2Ugd2lsbCBiZSB3aXRoIHlvdSBzaG9ydGx5XCJcIlwiXG4gICAgxpIoXCJuYXl5X3RfSGVhZGluZ1wiKS50ZXh0ID0gXCJJ4oCZbSBTb3JyeSAje2RhdGEubmFtZS5tYXRjaCAvXFx3Ky99IFlvdSBkbyBub3QgcXVhbGlmeSBmb3IgdGhlIER1dHkgTGF3eWVyIHNlcnZpY2VcIlxuICAgIGlmIGRhdGEuU3BlYWtBYmlsaXR5ID09IFwic0dvb2RcIiBvciBkYXRhLlNwZWFrQWJpbGl0eSA9PSBcInNGbHVlbnRcIlxuICAgICAgZmxvdy5zaG93TmV4dCDGkihcImFCX0NvbnRhY3RcIilcbiAgICAgIGRhdGEuaW50ZXJwID0gXCJub25lXCJcbiAgICBlbHNlXG4gICAgICBmbG93LnNob3dOZXh0IMaSKFwiYUJfSW50ZXJwcmV0ZXJcIilcblxucmVjdGFuZ2xlXzQxID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQxXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfNDEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDFcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxubkRPQl9pX1BlbiA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfaV9QZW5cIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA0MDRcbiAgeTogMzQ0XG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMjAuMDAwMDE4NzQ5OTYxODVcbiAgaW1hZ2U6IFwiaW1hZ2VzL05ET0JfaV9QZW4uc3ZnXCJcblxubkRPQl9pX0NhbCA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfaV9DYWxcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA0MDRcbiAgeTogODIyXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMjEuOTA4MDc4NzgzMDU1ODRcbiAgaW1hZ2U6IFwiaW1hZ2VzL05ET0JfaV9DYWwuc3ZnXCJcblxubkRPQl90ZXh0X05hbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RleHRfTmFtZVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl80ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl80XCJcbiAgcGFyZW50OiBuRE9CX3RleHRfTmFtZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5uYW1lID0gbmV3IElucHV0TW9kdWxlLklucHV0XG4gIG5hbWU6IFwibmFtZVwiXG4gIHBhcmVudDogbkRPQl90ZXh0X05hbWVcbiAgeDogMjFcbiAgeTogMFxuICBoZWlnaHQ6IDEyMFxuICB2aXJ0dWFsS2V5Ym9hcmQ6IGZhbHNlXG4gIHRleHQ6IFwiTmFtZVwiXG4gIHRleHRDb2xvdXI6IFwiI0M5ODYzOVwiXG4gIGZvbnRTaXplOiBcIjcyXCJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxubmFtZS5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBjb2xvcjogXCIjQzk4NjM5XCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuXG5uRE9CX0J1dF9EYXkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9EYXlcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiBBbGlnbi5jZW50ZXJcbiAgeTogODIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA3MDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl81ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl81XCJcbiAgcGFyZW50OiBuRE9CX0J1dF9EYXlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA3MDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLDI0MCwyNDksMSlcIlxuICBib3JkZXJSYWRpdXM6IDIwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoNTcsMTUxLDE5MiwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5kYXkgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJkYXlcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0RheVxuICB4OiAxNVxuICB5OiAxMlxuICB2aXJ0dWFsS2V5Ym9hcmQ6IGZhbHNlXG4gIGhlaWdodDogMTAwXG4gIHdpZHRoOiA3MDBcbiAgdGV4dDogXCJET0JcIlxuICB0eXBlOiBcImRhdGVcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxNzEsMjE4LDIzOSwxKVwiXG5kYXkuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgY29sb3I6IFwiIzI1ODJBQlwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbmRheS5pbnB1dC5tYXggPSBcIjIwMTAtMDEtMDFcIlxuZGF5LmlucHV0LnZhbHVlID0gXCIyMDEwLTAxLTAxXCJcbm5ET0JfQnV0X05leHQudmlzaWJsZSA9IGZhbHNlXG5kYXkuaW5wdXQudHlwZSA9IFwiZGF0ZVwiXG5kYXkub24gXCJpbnB1dFwiLCAtPlxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgbkRPQl9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxubmFtZS5vbiBcImlucHV0XCIsIC0+XG4gIGlmIG5hbWUudmFsdWUgaXNudCAoXCJOYW1lXCIgb3IgXCJcIikgYW5kIGRheS52YWx1ZSBpc250IFwiXCJcbiAgICBuRE9CX0J1dF9OZXh0LnZpc2libGUgPSB0cnVlXG5cbiAgICBwcmludCDGkihcInlhc3NfdF9IZWFkaW5nXCIpLnRleHRcbm5hbWUub24gXCJrZXl1cFwiLCAoZXZlbnQpIC0+XG4gIGlmIGV2ZW50LndoaWNoIGlzIDEzIHRoZW4gbmFtZS5pbnB1dC5ibHVyKClcbm5hbWUub25Gb2N1cyAtPlxuICBpZiBAdmFsdWUgaXMgXCJOYW1lXCIgdGhlbiBAdmFsdWUgPSBcIlwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgXCJpbnB1dC1mcmFtZXIvaW5wdXRcIlxuXG53aW5kb3cuUlZhbHMgPVxuICByTm9uZTogMFxuICByU29tZXdoYXQ6IDBcbiAgckdvb2Q6IDBcbiAgckZsdWVudDogMFxud2luZG93LlNWYWxzID1cbiAgc05vbmU6IDBcbiAgc1NvbWV3aGF0OiAwXG4gIHNHb29kOiAwXG4gIHNGbHVlbnQ6IDBcblxud2luZG93LmFCX1JlYWRTcGVhayA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX1JlYWRTcGVha1wiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxucmVhZFNwZWFrX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQm9keVwiXG4gIHBhcmVudDogYUJfUmVhZFNwZWFrXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR180ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbnJlYWRTcGVha19pX1JlYWQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfaV9SZWFkXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0MDRcbiAgeTogMzcwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMDguMzAzNjk0ODQzOTU2NjZcbiAgaW1hZ2U6IFwiaW1hZ2VzL1JlYWRTcGVha19pX1JlYWQuc3ZnXCJcblxucmVhZFNwZWFrX2lfU3BlYWsgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfaV9TcGVha1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDEwXG4gIHk6IDgzOFxuICB3aWR0aDogMTA3LjY1OTIzNTcxNTExOTU2XG4gIGhlaWdodDogMTIwXG4gIGltYWdlOiBcImltYWdlcy9SZWFkU3BlYWtfaV9TcGVhay5zdmdcIlxuXG5yZWFkU3BlYWtfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzE0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxucmVhZFNwZWFrX3RfUmVhZCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfdF9SZWFkXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0OTZcbiAgeTogMTk4XG4gIHRleHQ6IFwiSG93IHdlbGwgY2FuIHlvdSByZWFkIEVuZ2xpc2g/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfdF9TcGVhayA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfdF9TcGVha1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDc0XG4gIHk6IDY4MFxuICB0ZXh0OiBcIkhvdyB3ZWxsIGNhbiB5b3Ugc3BlYWsgRW5nbGlzaD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfck5vbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JOb25lXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA1NjRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfck5vbmUub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwick5vbmVcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE1ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE1XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JOb25lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTVcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfck5vbmVcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIk5vbmVcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfc05vbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NOb25lXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA1NjRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc05vbmUub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlNWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuU1ZhbHMsIFwic05vbmVcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE2ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE2XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NOb25lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTZcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc05vbmVcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIk5vbmVcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfclNvbWV3aGF0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDg4NFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yU29tZXdoYXQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwiclNvbWV3aGF0XCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xN1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xN1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIlNvbWV3aGF0XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NTb21ld2hhdCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc1NvbWV3aGF0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA4ODRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc1NvbWV3aGF0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlNWYWxzLCBcInNTb21ld2hhdFwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMThcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc1NvbWV3aGF0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTggPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMThcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc1NvbWV3aGF0XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJTb21ld2hhdFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yR29vZCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfckdvb2RcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDEyMDRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfckdvb2Qub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwickdvb2RcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE5XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JHb29kXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTlcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckdvb2RcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkdvb2RcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfc0dvb2QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NHb29kXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMjA0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NHb29kLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlNWYWxzLCBcInNHb29kXCIpXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMjAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjBcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0dvb2RcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yMFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zR29vZFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiR29vZFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yRmx1ZW50ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yRmx1ZW50XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxNTI0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JGbHVlbnQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCh3aW5kb3cuUlZhbHMsIFwickZsdWVudFwiKVxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzIxID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIxXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JGbHVlbnRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yMVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yRmx1ZW50XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJGbHVlbnRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlYWRTcGVha19CdXRfc0ZsdWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc0ZsdWVudFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTUyNFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zRmx1ZW50Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlNWYWxzLCBcInNGbHVlbnRcIilcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8yMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yMlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zRmx1ZW50XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjJcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0ZsdWVudFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiRmx1ZW50XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X05leHRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cblxuXG5yZWN0YW5nbGVfMjMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjNcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIzXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9TcGxhc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJhQl9TcGxhc2hcIlxuXHR4OiAwXG5cdHk6IDBcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNTM2XG5cbndpbmRvdy5zcGxhc2hfQm9keSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9Cb2R5XCJcblx0cGFyZW50OiBhQl9TcGxhc2hcblx0eDogMFxuXHR5OiAxMzhcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cbndpbmRvdy5iRyA9IG5ldyBMYXllclxuXHRuYW1lOiBcImJHXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxud2luZG93LnNwbGFzaF9pX0xvZ28gPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfaV9Mb2dvXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA4ODRcblx0eTogMjJcblx0d2lkdGg6IDI3NlxuXHRoZWlnaHQ6IDI3NlxuXHRpbWFnZTogXCJpbWFnZXMvU3BsYXNoX2lfTG9nby5zdmdcIlxuXG53aW5kb3cuc3BsYXNoX3RfVGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3BsYXNoX3RfVGl0bGVcIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDU2NFxuXHR5OiAzNDJcblx0d2lkdGg6IDkxOC44NTM2MzcwMDgwNTYyXG5cdHRleHQ6IFwiVmljdG9yaWEgTGVnYWwgQWlkXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA3MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53aW5kb3cuc3BsYXNoX3RfSGVhZGluZyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfdF9IZWFkaW5nXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA1NjRcblx0eTogNTA0XG5cdHdpZHRoOiA5MTcuODg2OTI3NzU5MTAyXG5cdHRleHQ6IFwiRHV0eSBMYXd5ZXIgU2VydmljZeKAqEFwcGxpY2F0aW9uIGZvciBBaWRcIlxuXHRmb250U2l6ZTogNzJcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDYwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfQnV0X0JlZ2luID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX0J1dF9CZWdpblwiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNzI0XG5cdHk6IDgyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNjAwXG5cdGhlaWdodDogMjgwXG5cbndpbmRvdy5zcGxhc2hfQnV0X0JlZ2luLm9uIEV2ZW50cy5UYXAsIC0+XG5cdGZsb3cuc2hvd05leHQgxpIoXCJhQl9MYW5ndWFnZVwiKVxuXG5cbndpbmRvdy5yZWN0YW5nbGUgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVcIlxuXHRwYXJlbnQ6IHNwbGFzaF9CdXRfQmVnaW5cblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA2MDBcblx0aGVpZ2h0OiAyODBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG53aW5kb3cubGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxcIlxuXHRwYXJlbnQ6IHNwbGFzaF9CdXRfQmVnaW5cblx0eDogMjAyXG5cdHk6IDg2XG5cdHRleHQ6IFwiQmVnaW5cIlxuXHRmb250U2l6ZTogNzJcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDYwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgJ2lucHV0LWZyYW1lci9pbnB1dCdcblxud2luZG93LnN1bUZpbGwgPSAtPlxuICDGkihcInN1bW1hcnlfdF9kYXRhXCIpLmh0bWwgPVxuICAgIFwiXCJcIiN7ZGF0YS5uYW1lfTxicj5cbiN7d2luZG93LmRhdGEuRG9ifTxicj5cbiN7d2luZG93LmRhdGEuaGVscH08YnI+XG4je3dpbmRvdy5kYXRhLmludGVycH08YnI+PGJyPlxu4oCoI3t3aW5kb3cuZGF0YS5tYWlsfeKAqDxicj5cbiN7d2luZG93LmRhdGEuZW1haWx9PGJyPlxu4oCoI3t3aW5kb3cuZGF0YS5waG9uZX08YnI+XG5hdCBsZWFzdCAkI3t3aW5kb3cuZGF0YS5pbmNvbWV9IHBlciB3ZWVrPGJyPlxuI3t3aW5kb3cuZGF0YS5kaXNwU3VtfTxicj5cIlwiXCJcblxuXG5cblxud2luZG93LmFCX1N1bW1hcnkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9TdW1tYXJ5XCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5zdW1tYXJ5X0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJzdW1tYXJ5X0JvZHlcIlxuICBwYXJlbnQ6IGFCX1N1bW1hcnlcbiAgeDogMFxuICB5OiAxMzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbnN1bW1hcnlfQkcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJzdW1tYXJ5X0JHXCJcbiAgcGFyZW50OiBzdW1tYXJ5X0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbnN1bW1hcnlfdF9UaXRsZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJzdW1tYXJ5X3RfVGl0bGVcIlxuICBwYXJlbnQ6IHN1bW1hcnlfQm9keVxuICB4OiA1NjRcbiAgeTogMzhcbiAgd2lkdGg6IDkxOC44NTM2MzcwMDgwNTYyXG4gIHRleHQ6IFwiU3VtbWFyeVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNzAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuc3VtbWFyeV90X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwic3VtbWFyeV90X0hlYWRpbmdcIlxuICBwYXJlbnQ6IHN1bW1hcnlfQm9keVxuICB4OiA0MDRcbiAgeTogMjMyXG4gIHdpZHRoOiA2MDBcbiAgaHRtbDogXCJcIlwiTmFtZTo8YnI+XG5EYXRlIG9mIEJpcnRoOjxicj5cbkhlbHAgRmlsbGluZyBvdXQgRm9ybTo8YnI+XG5JbnRlcnByZXRlcjo8YnI+XG5Db250YWN04oCoPGJyPlxuLU1haWw64oCoPGJyPlxuLUVtYWlsOjxicj5cbuKAqC1QaG9uZTo8YnI+XG5JbmNvbWU6PGJyPlxuRGlzYWJpbGl0eShzKTo8YnI+XCJcIlwiXG4gIGZvbnRTaXplOiA0OFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIGxpbmVIZWlnaHQ6IDEuMzMzMzMzMzMzMzMzMzMzM1xuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5zdW1tYXJ5X3RfSGVhZGluZ0NvcHkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwic3VtbWFyeV90X2RhdGFcIlxuICBwYXJlbnQ6IHN1bW1hcnlfQm9keVxuICB4OiAxMDY0XG4gIHk6IDIzMlxuICB3aWR0aDogNjAwXG4gIGZvbnRTaXplOiA0OFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIGxpbmVIZWlnaHQ6IDEuMzMzMzMzMzMzMzMzMzMzM1xuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5cblxuXG5ob3VybHlJbmNvbWVfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJTdW1tYXJ5X0J1dF9CYWNrXCJcbiAgcGFyZW50OiBhQl9TdW1tYXJ5XG4gIHg6IDQwNFxuICB5OiAxMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlNzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsNzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmlmVGhpc0lzQ29ycmVjdCA9IG5ldyBUZXh0TGF5ZXJcbiAgcGFyZW50OiBhQl9TdW1tYXJ5XG4gIG5hbWU6IFwiaWZUaGlzSXNDb3JyZWN0XCJcbiAgeDogNzQyXG4gIHk6IDI3OFxuICB0ZXh0OiBcIklmIHRoaXMgaXMgY29ycmVjdCwgVGFwIE5leHQuXCJcbiAgZm9udFNpemU6IDQ4XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuXG5ob3VySW5jb21lX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiU3VtbWFyeV9CdXRfTmV4dFwiXG4gIHBhcmVudDogYUJfU3VtbWFyeVxuICB4OiAxMzY0XG4gIHk6IDEyNDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNjVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogMlxuXG5sYWJlbF8yID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI2NVwiXG4gIHBhcmVudDogaG91ckluY29tZV9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5hQl9TdW1tYXJ5Lm9uIFwiY2hhbmdlOnBhcmVudFwiLCAtPlxuICBzdW1GaWxsKClcbiAgcHJpbnQgXCJiYm9tXCJcblxuIiwid2luZG93LmFCX1dlZWtJbmNvbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9XZWVrSW5jb21lXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG53ZWVrSW5jb21lX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0JvZHlcIlxuICBwYXJlbnQ6IGFCX1dlZWtJbmNvbWVcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR184XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbndlZWtJbmNvbWVfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0J1dF9CYWNrXCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMzYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzZcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNlwiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbndlZWtJbmNvbWVfdF9JbmNvbWUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV90X0luY29tZVwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDM5M1xuICB5OiAzNDBcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgd2Vla2x5IGluY29tZSBhZnRlciB0YXg/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53ZWVrSW5jb21lX2lfYnJpZWZjYXNlID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9pX2JyaWVmY2FzZVwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDkyNFxuICB5OiA2OFxuICB3aWR0aDogMjAwXG4gIGhlaWdodDogMTgwLjY5MDIwNjg5NjU1MTc2XG4gIGltYWdlOiBcImltYWdlcy9FbXBsb3ltZW50X2lfQnJlaWZjYXNlLnN2Z1wiXG5cbndlZWtJbmNvbWVfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0J1dF9OZXh0XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgdmlzaWJsZTogZmFsc2VcblxucmVjdGFuZ2xlXzM3ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM3XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDJcblxuXG5sYWJlbF8zNyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zN1wiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG4iLCJ3aW5kb3cuYUJfWWFzcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX1lhc3NcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbnlhc3NfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcInlhc3NfQm9keVwiXG4gIHBhcmVudDogYUJfWWFzc1xuICB4OiAwXG4gIHk6IDEzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR1wiXG4gIHBhcmVudDogeWFzc19Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG55YXNzX2lfTG9nbyA9IG5ldyBMYXllclxuICBuYW1lOiBcInlhc3NfaV9Mb2dvXCJcbiAgcGFyZW50OiB5YXNzX0JvZHlcbiAgeDogODg0XG4gIHk6IDIyXG4gIHdpZHRoOiAyNzZcbiAgaGVpZ2h0OiAyNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL3lhc3NfaV9Mb2dvLnN2Z1wiXG5cbnlhc3NfdF9IZWFkaW5nID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInlhc3NfdF9IZWFkaW5nXCJcbiAgcGFyZW50OiB5YXNzX0JvZHlcbiAgeDogNTY0XG4gIHk6IDM3NlxuICB3aWR0aDogOTE3Ljg4NjkyNzc1OTEwMlxuICB0ZXh0OiBcIlRoYW5rIHlvdSBnYXMgUGxlYXNlIHRha2UgYSBzZWF0IGFuZCB3ZSB3aWxsIGJlIHdpdGggeW91IHNob3J0bHlcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnlhc3NfQnV0X1JldHVybiA9IG5ldyBMYXllclxuICBuYW1lOiBcInlhc3NfQnV0X1JldHVyblwiXG4gIHBhcmVudDogeWFzc19Cb2R5XG4gIHg6IDcyNFxuICB5OiA5MjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxueWFzc19CdXRfUmV0dXJuLm9uVGFwIC0+XG4gIHdpbmRvdy5kYXRhID0ge31cbiAgZmxvdy5zaG93TmV4dCBhQl9TcGxhc2hcblxucmVjdGFuZ2xlID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXCJcbiAgcGFyZW50OiB5YXNzX0J1dF9SZXR1cm5cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbFwiXG4gIHBhcmVudDogeWFzc19CdXRfUmV0dXJuXG4gIHg6IDYwXG4gIHk6IDg2XG4gIHRleHQ6IFwiUmV0dXJuIHRvIFN0YXJ0XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG4iLCJfZ2V0SGllcmFyY2h5ID0gKGxheWVyKSAtPlxuICBzdHJpbmcgPSAnJ1xuICBmb3IgYSBpbiBsYXllci5hbmNlc3RvcnMoKVxuICAgIHN0cmluZyA9IGEubmFtZSsnPicrc3RyaW5nXG4gIHJldHVybiBzdHJpbmcgPSBzdHJpbmcrbGF5ZXIubmFtZVxuXG5fbWF0Y2ggPSAoaGllcmFyY2h5LCBzdHJpbmcpIC0+XG4gICMgcHJlcGFyZSByZWdleCB0b2tlbnNcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyo+XFxzKi9nLCc+JykgIyBjbGVhbiB1cCBzcGFjZXMgYXJvdW5kIGFycm93c1xuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyonKS5qb2luKCdbXj5dKicpICMgYXN0ZXJpa3MgYXMgbGF5ZXIgbmFtZSB3aWxkY2FyZFxuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyAnKS5qb2luKCcoPzouKik+JykgIyBzcGFjZSBhcyBzdHJ1Y3R1cmUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcsJykuam9pbignJHwnKSAjIGFsbG93IG11bHRpcGxlIHNlYXJjaGVzIHVzaW5nIGNvbW1hXG4gIHJlZ2V4U3RyaW5nID0gXCIoXnw+KVwiK3N0cmluZytcIiRcIiAjIGFsd2F5cyBib3R0b20gbGF5ZXIsIG1heWJlIHBhcnQgb2YgaGllcmFyY2h5XG5cbiAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZykgXG4gIHJldHVybiBoaWVyYXJjaHkubWF0Y2gocmVnRXhwKVxuXG5fZmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPlxuICBsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXG4gIGlmIHNlbGVjdG9yP1xuICAgIHN0cmluZ05lZWRzUmVnZXggPSBfLmZpbmQgWycqJywnICcsJz4nLCcsJ10sIChjKSAtPiBfLmluY2x1ZGVzIHNlbGVjdG9yLGNcbiAgICB1bmxlc3Mgc3RyaW5nTmVlZHNSZWdleCBvciBmcm9tTGF5ZXJcbiAgICAgIGxheWVycyA9IF8uZmlsdGVyIGxheWVycywgKGxheWVyKSAtPiBcbiAgICAgICAgaWYgbGF5ZXIubmFtZSBpcyBzZWxlY3RvciB0aGVuIHRydWVcbiAgICBlbHNlXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT5cbiAgICAgICAgICBoaWVyYXJjaHkgPSBfZ2V0SGllcmFyY2h5KGxheWVyKVxuICAgICAgICAgIGlmIGZyb21MYXllcj9cbiAgICAgICAgICAgIF9tYXRjaChoaWVyYXJjaHksIGZyb21MYXllci5uYW1lKycgJytzZWxlY3RvcilcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBzZWxlY3RvcilcbiAgZWxzZVxuICAgIGxheWVyc1xuXG5cbiMgR2xvYmFsXG5leHBvcnRzLkZpbmQgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cbmV4cG9ydHMuxpIgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cblxuZXhwb3J0cy5GaW5kQWxsID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpXG5leHBvcnRzLsaSxpIgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuXG4jIE1ldGhvZHNcbkxheWVyOjpmaW5kICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClbMF1cbkxheWVyOjrGkiAgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5cbkxheWVyOjpmaW5kQWxsICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClcbkxheWVyOjrGksaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKSIsImV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllclxuXHR4OjAsIHk6U2NyZWVuLmhlaWdodCwgd2lkdGg6U2NyZWVuLndpZHRoLCBoZWlnaHQ6NDMyXG5cdGh0bWw6XCI8aW1nIHN0eWxlPSd3aWR0aDogMTAwJTsnIHNyYz0nbW9kdWxlcy9rZXlib2FyZC5wbmcnLz5cIlxuXG4jc2NyZWVuIHdpZHRoIHZzLiBzaXplIG9mIGltYWdlIHdpZHRoXG5ncm93dGhSYXRpbyA9IFNjcmVlbi53aWR0aCAvIDczMlxuaW1hZ2VIZWlnaHQgPSBncm93dGhSYXRpbyAqIDQzMlxuXG4jIEV4dGVuZHMgdGhlIExheWVyU3R5bGUgY2xhc3Mgd2hpY2ggZG9lcyB0aGUgcGl4ZWwgcmF0aW8gY2FsY3VsYXRpb25zIGluIGZyYW1lclxuX2lucHV0U3R5bGUgPVxuXHRPYmplY3QuYXNzaWduKHt9LCBGcmFtZXIuTGF5ZXJTdHlsZSxcblx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvID0gKGxheWVyLCB2YWx1ZSkgLT5cblx0XHRcdCh2YWx1ZSAqIGxheWVyLmNvbnRleHQucGl4ZWxNdWx0aXBsaWVyKSArIFwicHhcIlxuXG5cdFx0Zm9udFNpemU6IChsYXllcikgLT5cblx0XHRcdGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIGxheWVyLl9wcm9wZXJ0aWVzLmZvbnRTaXplKVxuXG5cdFx0bGluZUhlaWdodDogKGxheWVyKSAtPlxuXHRcdFx0KGxheWVyLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQpICsgXCJlbVwiXG5cblx0XHRwYWRkaW5nOiAobGF5ZXIpIC0+XG5cdFx0XHR7IHBpeGVsTXVsdGlwbGllciB9ID0gbGF5ZXIuY29udGV4dFxuXHRcdFx0cGFkZGluZyA9IFtdXG5cdFx0XHRwYWRkaW5nVmFsdWUgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nXG5cblx0XHRcdCMgQ2hlY2sgaWYgd2UgaGF2ZSBhIHNpbmdsZSBudW1iZXIgYXMgaW50ZWdlclxuXHRcdFx0aWYgTnVtYmVyLmlzSW50ZWdlcihwYWRkaW5nVmFsdWUpXG5cdFx0XHRcdHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBwYWRkaW5nVmFsdWUpXG5cblx0XHRcdCMgSWYgd2UgaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgdGhleSBjb21lIGFzIHN0cmluZyAoZS5nLiBcIjEgMiAzIDRcIilcblx0XHRcdHBhZGRpbmdWYWx1ZXMgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nLnNwbGl0KFwiIFwiKVxuXG5cdFx0XHRzd2l0Y2ggcGFkZGluZ1ZhbHVlcy5sZW5ndGhcblx0XHRcdFx0d2hlbiA0XG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbM10pXG5cblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cblx0XHRcdFx0d2hlbiAyXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXG5cdFx0XHQjIFJldHVybiBhcyA0LXZhbHVlIHN0cmluZyAoZS5nIFwiMXB4IDJweCAzcHggNHB4XCIpXG5cdFx0XHRcIiN7cGFkZGluZy50b3AgKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLnJpZ2h0ICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5ib3R0b20gKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLmxlZnQgKiBwaXhlbE11bHRpcGxpZXJ9cHhcIlxuXHQpXG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMgPVxuXHRzaG93bjpcblx0XHR5OiBTY3JlZW4uaGVpZ2h0IC0gaW1hZ2VIZWlnaHRcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0Y3VydmU6IFwic3ByaW5nKDUwMCw1MCwxNSlcIlxuXG5jbGFzcyBleHBvcnRzLklucHV0IGV4dGVuZHMgTGF5ZXJcblx0QGRlZmluZSBcInN0eWxlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQuc3R5bGVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdF8uZXh0ZW5kIEBpbnB1dC5zdHlsZSwgdmFsdWVcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IEBpbnB1dC52YWx1ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QGlucHV0LnZhbHVlID0gdmFsdWVcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRvcHRpb25zLnNldHVwID89IGZhbHNlXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmNsaXAgPz0gZmFsc2Vcblx0XHRvcHRpb25zLmhlaWdodCA/PSA2MFxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IGlmIG9wdGlvbnMuc2V0dXAgdGhlbiBcInJnYmEoMjU1LCA2MCwgNDcsIC41KVwiIGVsc2UgXCJ0cmFuc3BhcmVudFwiXG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAzMFxuXHRcdG9wdGlvbnMubGluZUhlaWdodCA/PSAxXG5cdFx0b3B0aW9ucy5wYWRkaW5nID89IDEwXG5cdFx0b3B0aW9ucy50ZXh0ID89IFwiXCJcblx0XHRvcHRpb25zLnBsYWNlaG9sZGVyID89IFwiXCJcblx0XHRvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA/PSBpZiBVdGlscy5pc01vYmlsZSgpIHRoZW4gZmFsc2UgZWxzZSB0cnVlXG5cdFx0b3B0aW9ucy50eXBlID89IFwidGV4dFwiXG5cdFx0b3B0aW9ucy5nb0J1dHRvbiA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0NvcnJlY3QgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ29tcGxldGUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLnNwZWxsQ2hlY2sgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvZm9jdXMgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRleHRDb2xvciA/PSBcIiMwMDBcIlxuXHRcdG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIi1hcHBsZS1zeXN0ZW1cIlxuXHRcdG9wdGlvbnMuZm9udFdlaWdodCA/PSBcIjUwMFwiXG5cdFx0b3B0aW9ucy5zdWJtaXQgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRhYkluZGV4ID89IDBcblxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdCMgQWRkIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuXHRcdEBfcHJvcGVydGllcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemVcblx0XHRAX3Byb3BlcnRpZXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodFxuXHRcdEBfcHJvcGVydGllcy5wYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nXG5cblx0XHRAcGxhY2Vob2xkZXJDb2xvciA9IG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciBpZiBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3I/XG5cdFx0QGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImlucHV0XCJcblx0XHRAaW5wdXQuaWQgPSBcImlucHV0LSN7Xy5ub3coKX1cIlxuXG5cdFx0IyBBZGQgc3R5bGluZyB0byB0aGUgaW5wdXQgZWxlbWVudFxuXHRcdEBpbnB1dC5zdHlsZS53aWR0aCA9IF9pbnB1dFN0eWxlW1wid2lkdGhcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuaGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJoZWlnaHRcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuZm9udFNpemUgPSBfaW5wdXRTdHlsZVtcImZvbnRTaXplXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmxpbmVIZWlnaHQgPSBfaW5wdXRTdHlsZVtcImxpbmVIZWlnaHRcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiXG5cdFx0QGlucHV0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiXG5cdFx0QGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cdFx0QGlucHV0LnN0eWxlLnBhZGRpbmcgPSBfaW5wdXRTdHlsZVtcInBhZGRpbmdcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuZm9udEZhbWlseSA9IG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdEBpbnB1dC5zdHlsZS5jb2xvciA9IG9wdGlvbnMudGV4dENvbG9yXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHRcblxuXHRcdEBpbnB1dC52YWx1ZSA9IG9wdGlvbnMudGV4dFxuXHRcdEBpbnB1dC50eXBlID0gb3B0aW9ucy50eXBlXG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlclxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJ0YWJpbmRleFwiLCBvcHRpb25zLnRhYmluZGV4XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jb3JyZWN0XCIsIG9wdGlvbnMuYXV0b0NvcnJlY3Rcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvbXBsZXRlXCIsIG9wdGlvbnMuYXV0b0NvbXBsZXRlXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jYXBpdGFsaXplXCIsIG9wdGlvbnMuYXV0b0NhcGl0YWxpemVcblx0XHRpZiBvcHRpb25zLmF1dG9mb2N1cyA9PSB0cnVlXG5cdFx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2ZvY3VzXCIsIHRydWVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2tcblx0XHRAZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJmb3JtXCJcblxuXHRcdGlmIChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0XG5cdFx0XHRAZm9ybS5hY3Rpb24gPSBcIiNcIlxuXHRcdFx0QGZvcm0uYWRkRXZlbnRMaXN0ZW5lciBcInN1Ym1pdFwiLCAoZXZlbnQpIC0+XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdEBmb3JtLmFwcGVuZENoaWxkIEBpbnB1dFxuXHRcdEBfZWxlbWVudC5hcHBlbmRDaGlsZCBAZm9ybVxuXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdEB1cGRhdGVQbGFjZWhvbGRlckNvbG9yIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciBpZiBAcGxhY2Vob2xkZXJDb2xvclxuXG5cdFx0I29ubHkgc2hvdyBob25vciB2aXJ0dWFsIGtleWJvYXJkIG9wdGlvbiB3aGVuIG5vdCBvbiBtb2JpbGUsXG5cdFx0I290aGVyd2lzZSBpZ25vcmVcblx0XHRpZiAhVXRpbHMuaXNNb2JpbGUoKSAmJiBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCBpcyB0cnVlXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG5cblx0dXBkYXRlUGxhY2Vob2xkZXJDb2xvcjogKGNvbG9yKSAtPlxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gY29sb3Jcblx0XHRpZiBAcGFnZVN0eWxlP1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCBAcGFnZVN0eWxlXG5cdFx0QHBhZ2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzdHlsZVwiXG5cdFx0QHBhZ2VTdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiXG5cdFx0Y3NzID0gXCIjI3tAaW5wdXQuaWR9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QHBsYWNlaG9sZGVyQ29sb3J9OyB9XCJcblx0XHRAcGFnZVN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIGNzcylcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkIEBwYWdlU3R5bGVcblxuXHRmb2N1czogKCkgLT5cblx0XHRAaW5wdXQuZm9jdXMoKVxuXG5cdG9uRm9jdXM6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuXG5cdG9uQmx1cjogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMi4wLjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIF9pbnB1dFN0eWxlLCBjYWxjdWxhdGVQaXhlbFJhdGlvLCBncm93dGhSYXRpbywgaW1hZ2VIZWlnaHQ7XG5cbiAgZXhwb3J0cy5rZXlib2FyZExheWVyID0gbmV3IExheWVyKHtcbiAgICB4OiAwLFxuICAgIHk6IFNjcmVlbi5oZWlnaHQsXG4gICAgd2lkdGg6IFNjcmVlbi53aWR0aCxcbiAgICBoZWlnaHQ6IDQzMixcbiAgICBodG1sOiBcIjxpbWcgc3R5bGU9J3dpZHRoOiAxMDAlOycgc3JjPSdtb2R1bGVzL2tleWJvYXJkLnBuZycvPlwiXG4gIH0pO1xuXG4gIC8vc2NyZWVuIHdpZHRoIHZzLiBzaXplIG9mIGltYWdlIHdpZHRoXG4gIGdyb3d0aFJhdGlvID0gU2NyZWVuLndpZHRoIC8gNzMyO1xuXG4gIGltYWdlSGVpZ2h0ID0gZ3Jvd3RoUmF0aW8gKiA0MzI7XG5cbiAgLy8gRXh0ZW5kcyB0aGUgTGF5ZXJTdHlsZSBjbGFzcyB3aGljaCBkb2VzIHRoZSBwaXhlbCByYXRpbyBjYWxjdWxhdGlvbnMgaW4gZnJhbWVyXG4gIF9pbnB1dFN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgRnJhbWVyLkxheWVyU3R5bGUsIGNhbGN1bGF0ZVBpeGVsUmF0aW8gPSBmdW5jdGlvbihsYXllciwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICogbGF5ZXIuY29udGV4dC5waXhlbE11bHRpcGxpZXIpICsgXCJweFwiO1xuICB9LCB7XG4gICAgZm9udFNpemU6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgbGF5ZXIuX3Byb3BlcnRpZXMuZm9udFNpemUpO1xuICAgIH0sXG4gICAgbGluZUhlaWdodDogZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgIHJldHVybiBsYXllci5fcHJvcGVydGllcy5saW5lSGVpZ2h0ICsgXCJlbVwiO1xuICAgIH0sXG4gICAgcGFkZGluZzogZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgIHZhciBwYWRkaW5nLCBwYWRkaW5nVmFsdWUsIHBhZGRpbmdWYWx1ZXMsIHBpeGVsTXVsdGlwbGllcjtcbiAgICAgICh7cGl4ZWxNdWx0aXBsaWVyfSA9IGxheWVyLmNvbnRleHQpO1xuICAgICAgcGFkZGluZyA9IFtdO1xuICAgICAgcGFkZGluZ1ZhbHVlID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZztcbiAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBzaW5nbGUgbnVtYmVyIGFzIGludGVnZXJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhZGRpbmdWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIHBhZGRpbmdWYWx1ZSk7XG4gICAgICB9XG4gICAgICAvLyBJZiB3ZSBoYXZlIG11bHRpcGxlIHZhbHVlcyB0aGV5IGNvbWUgYXMgc3RyaW5nIChlLmcuIFwiMSAyIDMgNFwiKVxuICAgICAgcGFkZGluZ1ZhbHVlcyA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmcuc3BsaXQoXCIgXCIpO1xuICAgICAgc3dpdGNoIChwYWRkaW5nVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pO1xuICAgICAgICAgIHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKTtcbiAgICAgICAgICBwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbM10pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pO1xuICAgICAgICAgIHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKTtcbiAgICAgICAgICBwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pO1xuICAgICAgICAgIHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgIH1cbiAgICAgIC8vIFJldHVybiBhcyA0LXZhbHVlIHN0cmluZyAoZS5nIFwiMXB4IDJweCAzcHggNHB4XCIpXG4gICAgICByZXR1cm4gYCR7cGFkZGluZy50b3AgKiBwaXhlbE11bHRpcGxpZXJ9cHggJHtwYWRkaW5nLnJpZ2h0ICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5ib3R0b20gKiBwaXhlbE11bHRpcGxpZXJ9cHggJHtwYWRkaW5nLmxlZnQgKiBwaXhlbE11bHRpcGxpZXJ9cHhgO1xuICAgIH1cbiAgfSk7XG5cbiAgZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcyA9IHtcbiAgICBzaG93bjoge1xuICAgICAgeTogU2NyZWVuLmhlaWdodCAtIGltYWdlSGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICBjdXJ2ZTogXCJzcHJpbmcoNTAwLDUwLDE1KVwiXG4gIH07XG5cbiAgZXhwb3J0cy5JbnB1dCA9IChmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBJbnB1dCBleHRlbmRzIExheWVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAob3B0aW9ucy5zZXR1cCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXR1cCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLndpZHRoID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLndpZHRoID0gU2NyZWVuLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNsaXAgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuY2xpcCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5zZXR1cCA/IFwicmdiYSgyNTUsIDYwLCA0NywgLjUpXCIgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udFNpemUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuZm9udFNpemUgPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5saW5lSGVpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmxpbmVIZWlnaHQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnBhZGRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMucGFkZGluZyA9IDEwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnRleHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMucGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPSBVdGlscy5pc01vYmlsZSgpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmdvQnV0dG9uID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmdvQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0NvcnJlY3QgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b0NvcnJlY3QgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0NvbXBsZXRlID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9Db21wbGV0ZSA9IFwib25cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSA9IFwib25cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zcGVsbENoZWNrID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnNwZWxsQ2hlY2sgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b2ZvY3VzID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9mb2N1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnRleHRDb2xvciA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy50ZXh0Q29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5mb250RmFtaWx5ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmZvbnRGYW1pbHkgPSBcIi1hcHBsZS1zeXN0ZW1cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5mb250V2VpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN1Ym1pdCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5zdWJtaXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50YWJJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy50YWJJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIC8vIEFkZCBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5fcHJvcGVydGllcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemU7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodDtcbiAgICAgICAgdGhpcy5fcHJvcGVydGllcy5wYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ29sb3IgPSBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5pbnB1dC5pZCA9IGBpbnB1dC0ke18ubm93KCl9YDtcbiAgICAgICAgLy8gQWRkIHN0eWxpbmcgdG8gdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS53aWR0aCA9IF9pbnB1dFN0eWxlW1wid2lkdGhcIl0odGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuaGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJoZWlnaHRcIl0odGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuZm9udFNpemUgPSBfaW5wdXRTdHlsZVtcImZvbnRTaXplXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmxpbmVIZWlnaHQgPSBfaW5wdXRTdHlsZVtcImxpbmVIZWlnaHRcIl0odGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLnBhZGRpbmcgPSBfaW5wdXRTdHlsZVtcInBhZGRpbmdcIl0odGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuZm9udEZhbWlseSA9IG9wdGlvbnMuZm9udEZhbWlseTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5jb2xvciA9IG9wdGlvbnMudGV4dENvbG9yO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHQ7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgIHRoaXMuaW5wdXQudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXI7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgb3B0aW9ucy50YWJpbmRleCk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvcnJlY3RcIiwgb3B0aW9ucy5hdXRvQ29ycmVjdCk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIG9wdGlvbnMuYXV0b0NvbXBsZXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLCBvcHRpb25zLmF1dG9DYXBpdGFsaXplKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b2ZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvZm9jdXNcIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIG9wdGlvbnMuc3BlbGxDaGVjayk7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBpZiAoKG9wdGlvbnMuZ29CdXR0b24gJiYgIW9wdGlvbnMuc3VibWl0KSB8fCAhb3B0aW9ucy5zdWJtaXQpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uYWN0aW9uID0gXCIjXCI7XG4gICAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXJDb2xvcikge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJDb2xvcihvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVXRpbHMuaXNNb2JpbGUoKSAmJiBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhwb3J0cy5rZXlib2FyZExheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZUN5Y2xlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmtleWJvYXJkTGF5ZXIuYW5pbWF0ZShcImRlZmF1bHRcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdXBkYXRlUGxhY2Vob2xkZXJDb2xvcihjb2xvcikge1xuICAgICAgICB2YXIgY3NzO1xuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgaWYgKHRoaXMucGFnZVN0eWxlICE9IG51bGwpIHtcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHRoaXMucGFnZVN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgdGhpcy5wYWdlU3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgY3NzID0gYCMke3RoaXMuaW5wdXQuaWR9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICR7dGhpcy5wbGFjZWhvbGRlckNvbG9yfTsgfWA7XG4gICAgICAgIHRoaXMucGFnZVN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VTdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIGZvY3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBvbkZvY3VzKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gY2IuYXBwbHkodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvbkJsdXIoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNiLmFwcGx5KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH07XG5cbiAgICBJbnB1dC5kZWZpbmUoXCJzdHlsZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5zdHlsZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZCh0aGlzLmlucHV0LnN0eWxlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBJbnB1dC5kZWZpbmUoXCJ2YWx1ZVwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gSW5wdXQ7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5wdXQuanMubWFwXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
