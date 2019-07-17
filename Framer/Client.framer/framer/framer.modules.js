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
    return nDOB_But_Next.visible = true;
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
  return sumFill();
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

exports.myFunction = function() {};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL1ZpZXdDb250cm9sbGVyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfY29uYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2NvbnRhY3QuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9lbXBsb3kuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9oZWxwLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaG91cmluYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2ludGVycC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2xhbmcuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9uYXl5LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfbmRvYi5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3JlYWRzcGVhay5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3NwbGFzaC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3N1bW1hcnkuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl93ZWVraW5jLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL3J1YnlXZWJzaXRlQ29kZS9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfeWFzcy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2ZpbmRNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvcnVieVdlYnNpdGVDb2RlL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2lucHV0LWZyYW1lci9pbnB1dC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9ydWJ5V2Vic2l0ZUNvZGUvRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7OztBQUFNLE1BQU0sQ0FBQzs7O0VBRUMsaUJBQUMsT0FBRDtBQUNaLFFBQUE7O01BRGEsVUFBUTs7O01BQ3JCLE9BQU8sQ0FBQyxRQUFTLE1BQU0sQ0FBQzs7O01BQ3hCLE9BQU8sQ0FBQyxTQUFVLE1BQU0sQ0FBQzs7O01BQ3pCLE9BQU8sQ0FBQyxPQUFROzs7TUFDaEIsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxpQkFBa0I7OztNQUMxQixPQUFPLENBQUMsbUJBQW9CO1FBQUUsS0FBQSxFQUFPLGdDQUFUO1FBQTJDLElBQUEsRUFBTSxFQUFqRDs7OztNQUM1QixPQUFPLENBQUMsa0JBQW1COzs7TUFDM0IsT0FBTyxDQUFDLFNBQVU7OztNQUNsQixPQUFPLENBQUMsV0FBWTs7SUFFcEIseUNBQU0sT0FBTjtJQUNBLElB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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VCxDQUF1QixPQUF2QjtJQUNiLElBQUMsQ0FBQSxTQUFTLENBQUMsSUFBWCxHQUFrQjtJQUNsQixHQUFBLEdBQU0sR0FBQSxHQUFJLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBWCxHQUFjLHVDQUFkLEdBQXFELElBQUMsQ0FBQSxnQkFBdEQsR0FBdUU7SUFDN0UsSUFBQyxDQUFBLFNBQVMsQ0FBQyxXQUFYLENBQXVCLFFBQVEsQ0FBQyxjQUFULENBQXdCLEdBQXhCLENBQXZCO1dBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFkLENBQTBCLElBQUMsQ0FBQSxTQUEzQjtFQVJ1Qjs7a0JBVXhCLEtBQUEsR0FBTyxTQUFBO1dBQ04sSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLENBQUE7RUFETTs7a0JBR1AsT0FBQSxHQUFTLFNBQUMsRUFBRDtXQUNSLElBQUMsQ0FBQSxLQUFLLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsU0FBQTthQUNoQyxFQUFFLENBQUMsS0FBSCxDQUFTLElBQVQ7SUFEZ0MsQ0FBakM7RUFEUTs7a0JBSVQsTUFBQSxHQUFRLFNBQUMsRUFBRDtXQUNQLElBQUMsQ0FBQSxLQUFLLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBQTthQUMvQixFQUFFLENBQUMsS0FBSCxDQUFTLElBQVQ7SUFEK0IsQ0FBaEM7RUFETzs7OztHQTdHbUI7Ozs7QUNoRTVCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7O0FBR3JCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIG1vZHVsZS5leHBvcnRzIGV4dGVuZHMgTGF5ZXJcblx0XHRcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdG9wdGlvbnMuY2xpcCA/PSB0cnVlXG5cdFx0b3B0aW9ucy5pbml0aWFsVmlld05hbWUgPz0gJ2luaXRpYWxWaWV3J1xuXHRcdG9wdGlvbnMuYmFja0J1dHRvbk5hbWUgPz0gJ2JhY2tCdXR0b24nXG5cdFx0b3B0aW9ucy5hbmltYXRpb25PcHRpb25zID89IHsgY3VydmU6IFwiY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpXCIsIHRpbWU6IC43IH1cblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBcImJsYWNrXCJcblx0XHRvcHRpb25zLnNjcm9sbCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0xpbmsgPz0gdHJ1ZVxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEBoaXN0b3J5ID0gW11cblxuXHRcdEBvbkNoYW5nZSBcInN1YkxheWVyc1wiLCAoY2hhbmdlTGlzdCkgPT5cblx0XHRcdHZpZXcgPSBjaGFuZ2VMaXN0LmFkZGVkWzBdXG5cdFx0XHRpZiB2aWV3P1xuXHRcdFx0XHQjIGRlZmF1bHQgYmVoYXZpb3JzIGZvciB2aWV3c1xuXHRcdFx0XHR2aWV3LmNsaXAgPSB0cnVlXG5cdFx0XHRcdHZpZXcub24gRXZlbnRzLkNsaWNrLCAtPiByZXR1cm4gIyBwcmV2ZW50IGNsaWNrLXRocm91Z2gvYnViYmxpbmdcblx0XHRcdFx0IyBhZGQgc2Nyb2xsY29tcG9uZW50XG5cdFx0XHRcdGlmIEBzY3JvbGxcblx0XHRcdFx0XHRjaGlsZHJlbiA9IHZpZXcuY2hpbGRyZW5cblx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQgPSBuZXcgU2Nyb2xsQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRuYW1lOiBcInNjcm9sbENvbXBvbmVudFwiXG5cdFx0XHRcdFx0XHR3aWR0aDogQHdpZHRoXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IEBoZWlnaHRcblx0XHRcdFx0XHRcdHBhcmVudDogdmlld1xuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5jb250ZW50LmJhY2tncm91bmRDb2xvciA9IFwiXCJcblx0XHRcdFx0XHRpZiB2aWV3LndpZHRoIDw9IEB3aWR0aFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbEhvcml6b250YWwgPSBmYWxzZVxuXHRcdFx0XHRcdGlmIHZpZXcuaGVpZ2h0IDw9IEBoZWlnaHRcblx0XHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5zY3JvbGxWZXJ0aWNhbCA9IGZhbHNlXG5cdFx0XHRcdFx0Zm9yIGMgaW4gY2hpbGRyZW5cblx0XHRcdFx0XHRcdGMucGFyZW50ID0gc2Nyb2xsQ29tcG9uZW50LmNvbnRlbnRcblx0XHRcdFx0XHR2aWV3LnNjcm9sbENvbXBvbmVudCA9IHNjcm9sbENvbXBvbmVudCAjIG1ha2UgaXQgYWNjZXNzaWJsZSBhcyBhIHByb3BlcnR5XG5cdFx0XHRcdFx0IyByZXNldCBzaXplIHNpbmNlIGNvbnRlbnQgbW92ZWQgdG8gc2Nyb2xsQ29tcG9uZW50LiBwcmV2ZW50cyBzY3JvbGwgYnVnIHdoZW4gZHJhZ2dpbmcgb3V0c2lkZS5cblx0XHRcdFx0XHR2aWV3LnNpemUgPSB7d2lkdGg6IEB3aWR0aCwgaGVpZ2h0OiBAaGVpZ2h0fVxuXG5cdFx0dHJhbnNpdGlvbnMgPVxuXHRcdFx0c3dpdGNoSW5zdGFudDoge31cblx0XHRcdGZhZGVJbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7b3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge29wYWNpdHk6IDF9XG5cdFx0XHR6b29tSW46XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMSwgb3BhY2l0eTogMX1cblx0XHRcdHpvb21PdXQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMC44LCBvcGFjaXR5OiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVJblVwOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5SaWdodDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHNsaWRlSW5Eb3duOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhZOiAwfVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5MZWZ0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7bWF4WDogQHdpZHRofVxuXHRcdFx0bW92ZUluVXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRtb3ZlSW5Eb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogLUBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0bW92ZUluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7bWF4WDogMH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGgvNSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC1Ad2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaE91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiAtKEB3aWR0aC81KSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdFx0dG86IHt4OiAwLCBicmlnaHRuZXNzOiAxMDB9XG5cdFx0XHRwdXNoT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHNsaWRlT3V0VXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhZOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXRSaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0RG93bjpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IEBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dExlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXG5cdFx0IyBzaG9ydGN1dHNcblx0XHR0cmFuc2l0aW9ucy5zbGlkZUluID0gdHJhbnNpdGlvbnMuc2xpZGVJblJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMuc2xpZGVPdXQgPSB0cmFuc2l0aW9ucy5zbGlkZU91dFJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMucHVzaEluID0gdHJhbnNpdGlvbnMucHVzaEluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoT3V0ID0gdHJhbnNpdGlvbnMucHVzaE91dFJpZ2h0XG5cblx0XHQjIGV2ZW50c1xuXHRcdEV2ZW50cy5WaWV3V2lsbFN3aXRjaCA9IFwidmlld1dpbGxTd2l0Y2hcIlxuXHRcdEV2ZW50cy5WaWV3RGlkU3dpdGNoID0gXCJ2aWV3RGlkU3dpdGNoXCJcblx0XHRMYXllcjo6b25WaWV3V2lsbFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgY2IpXG5cdFx0TGF5ZXI6Om9uVmlld0RpZFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBjYilcdFx0XG5cblx0XHRfLmVhY2ggdHJhbnNpdGlvbnMsIChhbmltUHJvcHMsIG5hbWUpID0+XG5cblx0XHRcdGlmIG9wdGlvbnMuYXV0b0xpbmtcblx0XHRcdFx0bGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblx0XHRcdFx0Zm9yIGJ0biBpbiBsYXllcnNcblx0XHRcdFx0XHRpZiBfLmluY2x1ZGVzIGJ0bi5uYW1lLCBuYW1lXG5cdFx0XHRcdFx0XHR2aWV3Q29udHJvbGxlciA9IEBcblx0XHRcdFx0XHRcdGJ0bi5vbkNsaWNrIC0+XG5cdFx0XHRcdFx0XHRcdGFuaW0gPSBAbmFtZS5zcGxpdCgnXycpWzBdXG5cdFx0XHRcdFx0XHRcdGxpbmtOYW1lID0gQG5hbWUucmVwbGFjZShhbmltKydfJywnJylcblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBsaW5rTmFtZS5yZXBsYWNlKC9cXGQrL2csICcnKSAjIHJlbW92ZSBudW1iZXJzXG5cdFx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyW2FuaW1dIF8uZmluZChsYXllcnMsIChsKSAtPiBsLm5hbWUgaXMgbGlua05hbWUpXG5cblx0XHRcdEBbbmFtZV0gPSAobmV3VmlldywgYW5pbWF0aW9uT3B0aW9ucyA9IEBhbmltYXRpb25PcHRpb25zKSA9PlxuXG5cdFx0XHRcdHJldHVybiBpZiBuZXdWaWV3IGlzIEBjdXJyZW50Vmlld1xuXG5cblxuXHRcdFx0XHQjIG1ha2Ugc3VyZSB0aGUgbmV3IGxheWVyIGlzIGluc2lkZSB0aGUgdmlld2NvbnRyb2xsZXJcblx0XHRcdFx0bmV3Vmlldy5wYXJlbnQgPSBAXG5cdFx0XHRcdG5ld1ZpZXcuc2VuZFRvQmFjaygpXG5cblx0XHRcdFx0IyByZXNldCBwcm9wcyBpbiBjYXNlIHRoZXkgd2VyZSBjaGFuZ2VkIGJ5IGEgcHJldiBhbmltYXRpb25cblx0XHRcdFx0bmV3Vmlldy5wb2ludCA9IHt4OjAsIHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXcub3BhY2l0eSA9IDFcblx0XHRcdFx0bmV3Vmlldy5zY2FsZSA9IDFcblx0XHRcdFx0bmV3Vmlldy5icmlnaHRuZXNzID0gMTAwXG5cdFx0XHRcdFxuXHRcdFx0XHQjIG9sZFZpZXdcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wb2ludCA9IHt4OiAwLCB5OiAwfSAjIGZpeGVzIG9mZnNldCBpc3N1ZSB3aGVuIG1vdmluZyB0b28gZmFzdCBiZXR3ZWVuIHNjcmVlbnNcblx0XHRcdFx0QGN1cnJlbnRWaWV3Py5wcm9wcyA9IGFuaW1Qcm9wcy5vbGRWaWV3Py5mcm9tXG5cdFx0XHRcdGFuaW1PYmogPSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm9sZFZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRfLmRlZmF1bHRzKGFuaW1PYmosIHsgcHJvcGVydGllczoge30gfSlcblx0XHRcdFx0b3V0Z29pbmcgPSBAY3VycmVudFZpZXc/LmFuaW1hdGUgYW5pbU9ialxuXG5cdFx0XHRcdCMgbmV3Vmlld1xuXHRcdFx0XHRuZXdWaWV3LnByb3BzID0gYW5pbVByb3BzLm5ld1ZpZXc/LmZyb21cblx0XHRcdFx0aW5jb21pbmcgPSBuZXdWaWV3LmFuaW1hdGUgXy5leHRlbmQge3Byb3BlcnRpZXM6IGFuaW1Qcm9wcy5uZXdWaWV3Py50b30sIGFuaW1hdGlvbk9wdGlvbnNcblx0XHRcdFx0XG5cdFx0XHRcdCMgbGF5ZXIgb3JkZXJcblx0XHRcdFx0aWYgXy5pbmNsdWRlcyBuYW1lLCAnT3V0J1xuXHRcdFx0XHRcdG5ld1ZpZXcucGxhY2VCZWhpbmQoQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcdG91dGdvaW5nLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlZm9yZShAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgQGN1cnJlbnRWaWV3LCBuZXdWaWV3KVxuXHRcdFx0XHRcblx0XHRcdFx0IyBjaGFuZ2UgQ3VycmVudFZpZXcgYmVmb3JlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWQgc28gb25lIGNvdWxkIGdvIGJhY2sgaW4gaGlzdG9yeVxuXHRcdFx0XHQjIHdpdGhvdXQgaGF2aW5nIHRvIHdhaXQgZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGZpbmlzaFxuXHRcdFx0XHRAc2F2ZUN1cnJlbnRWaWV3VG9IaXN0b3J5IG5hbWUsIG91dGdvaW5nLCBpbmNvbWluZ1xuXHRcdFx0XHRAY3VycmVudFZpZXcgPSBuZXdWaWV3XG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOnByZXZpb3VzVmlld1wiLCBAcHJldmlvdXNWaWV3KVxuXHRcdFx0XHRAZW1pdChcImNoYW5nZTpjdXJyZW50Vmlld1wiLCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHRpZiBpbmNvbWluZy5pc0FuaW1hdGluZ1xuXHRcdFx0XHRcdGhvb2sgPSBpbmNvbWluZyBcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGhvb2sgPSBvdXRnb2luZ1xuXHRcdFx0XHRob29rPy5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBAcHJldmlvdXNWaWV3LCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlld05hbWU/XG5cdFx0XHRhdXRvSW5pdGlhbCA9IF8uZmluZCBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IGwubmFtZSBpcyBvcHRpb25zLmluaXRpYWxWaWV3TmFtZVxuXHRcdFx0aWYgYXV0b0luaXRpYWw/IHRoZW4gQHN3aXRjaEluc3RhbnQgYXV0b0luaXRpYWxcblxuXHRcdGlmIG9wdGlvbnMuaW5pdGlhbFZpZXc/XG5cdFx0XHRAc3dpdGNoSW5zdGFudCBvcHRpb25zLmluaXRpYWxWaWV3XG5cblx0XHRpZiBvcHRpb25zLmJhY2tCdXR0b25OYW1lP1xuXHRcdFx0YmFja0J1dHRvbnMgPSBfLmZpbHRlciBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVycywgKGwpIC0+IF8uaW5jbHVkZXMgbC5uYW1lLCBvcHRpb25zLmJhY2tCdXR0b25OYW1lXG5cdFx0XHRmb3IgYnRuIGluIGJhY2tCdXR0b25zXG5cdFx0XHRcdGJ0bi5vbkNsaWNrID0+IEBiYWNrKClcblxuXHRAZGVmaW5lIFwicHJldmlvdXNWaWV3XCIsXG5cdFx0XHRnZXQ6IC0+IEBoaXN0b3J5WzBdLnZpZXdcblxuXHRzYXZlQ3VycmVudFZpZXdUb0hpc3Rvcnk6IChuYW1lLG91dGdvaW5nQW5pbWF0aW9uLGluY29taW5nQW5pbWF0aW9uKSAtPlxuXHRcdEBoaXN0b3J5LnVuc2hpZnRcblx0XHRcdHZpZXc6IEBjdXJyZW50Vmlld1xuXHRcdFx0YW5pbWF0aW9uTmFtZTogbmFtZVxuXHRcdFx0aW5jb21pbmdBbmltYXRpb246IGluY29taW5nQW5pbWF0aW9uXG5cdFx0XHRvdXRnb2luZ0FuaW1hdGlvbjogb3V0Z29pbmdBbmltYXRpb25cblxuXHRiYWNrOiAtPlxuXHRcdHByZXZpb3VzID0gQGhpc3RvcnlbMF1cblx0XHRpZiBwcmV2aW91cy52aWV3P1xuXG5cdFx0XHRpZiBfLmluY2x1ZGVzIHByZXZpb3VzLmFuaW1hdGlvbk5hbWUsICdPdXQnXG5cdFx0XHRcdHByZXZpb3VzLnZpZXcuYnJpbmdUb0Zyb250KClcblxuXHRcdFx0YmFja0luID0gcHJldmlvdXMub3V0Z29pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cdFx0XHRtb3ZlT3V0ID0gcHJldmlvdXMuaW5jb21pbmdBbmltYXRpb24ucmV2ZXJzZSgpXG5cblx0XHRcdGJhY2tJbi5zdGFydCgpXG5cdFx0XHRtb3ZlT3V0LnN0YXJ0KClcblxuXHRcdFx0QGN1cnJlbnRWaWV3ID0gcHJldmlvdXMudmlld1xuXHRcdFx0QGhpc3Rvcnkuc2hpZnQoKVxuXHRcdFx0bW92ZU91dC5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PiBAY3VycmVudFZpZXcuYnJpbmdUb0Zyb250KClcbiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfQ29uY2Vzc2lvbiA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0NvbmNlc3Npb25cIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmNvbmNlc3Npb25fQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQm9keVwiXG4gIHBhcmVudDogYUJfQ29uY2Vzc2lvblxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNiA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzZcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuY29uY2Vzc2lvbl9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8yNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yN1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI3ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI3XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuY29uY2Vzc2lvbl90X0NhcmQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl90X0NhcmRcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiBBbGlnbi5jZW50ZXJcbiAgeTogMzQwXG4gIHRleHQ6IFwiRG8geW91IGhhdmUgYSBjdXJyZW50IENlbnRyZWxpbmsgYmVuZWZpdCBjYXJk4oCoIG9yIFBlbnNpb25lciBDb25jZXNzaW9uIENhcmRcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG4gIHdpZHRoOiAxNDAwXG5cbmNvbmNlc3Npb25fQnV0X05vID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9CdXRfTm9cIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiAxMjA0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5cbnJlY3RhbmdsZV8yOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yOFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDIyNSwyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjggPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjhcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X05vXG4gIHg6IDBcbiAgeTogQWxpZ24uY2VudGVyXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvbmNlc3Npb25fQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X1llc1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjlcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI5XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9ZZXNcbiAgeDogMFxuICB5OiBBbGlnbi5jZW50ZXJcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIlllc1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDg3LDE1NSw4MSwxKVwiXG5cbmNvbmNlc3Npb25faV9DZW50cmVsaW5rID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9pX0NlbnRyZWxpbmtcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiA5MjMuOTk5OTk5OTkwMDMxOVxuICB5OiAxMDBcbiAgd2lkdGg6IDE5OS45OTkzNzE2Mzk3MjMwNVxuICBoZWlnaHQ6IDE5NS4zOTk4NjY1NDgxNTc5N1xuICBpbWFnZTogXCJpbWFnZXMvQ29uY2Vzc2lvbl9pX0NlbnRyZWxpbmsuc3ZnXCJcblxuxpIoXCJjb25jZXNzaW9uX0J1dF9Ob1wiKS5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmNvbmMgPSBmYWxzZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfRW1wbG95bWVudFwiKVxuxpIoXCJjb25jZXNzaW9uX0J1dF9ZZXNcIikub24gRXZlbnRzLlRhcCwgLT5cbiAgZGF0YS5jb25jID0gdHJ1ZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfU3VtbWFyeVwiKVxuICBzdW1GaWxsKCkiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSAnaW5wdXQtZnJhbWVyL2lucHV0J1xuXG53aW5kb3cuYUJfQ29udGFjdCA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0NvbnRhY3RcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmNvbnRhY3RfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfQm9keVwiXG4gIHBhcmVudDogYUJfQ29udGFjdFxuICB4OiAwXG4gIHk6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfMTEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR18xMVwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5jb250YWN0X0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9CdXRfQmFja1wiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTYwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzQyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQyXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfNDIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDJcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5jb250YWN0X3RfRGV0YWlscyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X3RfRGV0YWlsc1wiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDc1NlxuICB5OiAyMTZcbiAgdGV4dDogXCJDb250YWN0IERldGFpbHNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmNvbnRhY3RfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X0J1dF9OZXh0XCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxuY29udGFjdF9CdXRfTmV4dC5vblRhcCAtPlxuICBkYXRhLm1haWwgPSDGkihcImlucF9NYWlsXCIpLnZhbHVlXG4gIGRhdGEuZW1haWwgPSDGkihcImlucF9FbWFpbFwiKS52YWx1ZVxuICBkYXRhLnBob25lID0gxpIoXCJpbnBfUGhvbmVcIikudmFsdWVcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX0NvbmNlc3Npb25cIilcblxucmVjdGFuZ2xlXzQzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQzXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDJcblxubGFiZWxfNDMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDNcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuY29udGFjdF9UeHRfTWFpbCA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfVHh0X01haWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA1NjRcbiAgeTogMzYwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl84ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl84XCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9NYWlsXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxubWFpbCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJMYWJlbFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfTWFpbFxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIk1haWxcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5jb250YWN0X1R4dF9FbWFpbCA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfVHh0X0VtYWlsXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNTY0XG4gIHk6IDUyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfOVwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfRW1haWxcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5lbWFpbCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJMYWJlbFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfRW1haWxcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJFbWFpbFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmNvbnRhY3RfVHh0X1Bob25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9UeHRfUGhvbmVcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA1NjRcbiAgeTogNjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl8xMCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfMTBcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X1Bob25lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxucGhvbmUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiTGFiZWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X1Bob25lXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiUGhvbmVcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5jb250YWN0X2lfTGV0dGVyID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9pX0xldHRlclwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDQwNFxuICB5OiAzNzhcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDg0LjcwMjc5MzE5MjI0ODI4XG4gIGltYWdlOiBcImltYWdlcy9Db250YWN0X2lfTGV0dGVyLnN2Z1wiXG5cbmNvbnRhY3RfaV9FbWFpbCA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfaV9FbWFpbFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDQwNFxuICB5OiA1MjBcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDExOS45OTkzMzQ0NDM0OTUwNlxuICBpbWFnZTogXCJpbWFnZXMvQ29udGFjdF9pX0VtYWlsLnN2Z1wiXG5cbmNvbnRhY3RfaV9QaG9uZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfaV9QaG9uZVwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDQwNFxuICB5OiA2ODBcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDExOS42NzkyOTQ3MDQ4MjA4MlxuICBpbWFnZTogXCJpbWFnZXMvQ29udGFjdF9pX1Bob25lLnN2Z1wiIiwid2luZG93LmFCX0VtcGxveW1lbnQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9FbXBsb3ltZW50XCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5lbXBsb3ltZW50X0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0JvZHlcIlxuICBwYXJlbnQ6IGFCX0VtcGxveW1lbnRcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR183XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9CYWNrXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMzAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzBcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zMFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmVtcGxveW1lbnRfdF9Ib3dFbXBsb3llZCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X3RfSG93RW1wbG95ZWRcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA2MTZcbiAgeTogMzQwXG4gIHRleHQ6IFwiSG93IGFyZSB5b3UgRW1wbG95ZWQ/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5lbXBsb3ltZW50X2lfQnJlaWZjYXNlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9pX0JyZWlmY2FzZVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDkyNFxuICB5OiA2OFxuICB3aWR0aDogMjAwXG4gIGhlaWdodDogMTgwLjY5MDIwNjg5NjU1MTc2XG4gIGltYWdlOiBcImltYWdlcy9FbXBsb3ltZW50X2lfQnJlaWZjYXNlLnN2Z1wiXG5cbmVtcGxveW1lbnRfQnV0X1VuID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfVW5cIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAzMjRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMxID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMxXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9VblxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zMVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfVW5cbiAgeDogNTJcbiAgeTogNjJcbiAgdGV4dDogXCJVbmVtcGxveWVkXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9TZWxmID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfU2VsZlwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDgwNFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzJcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1NlbGZcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzJcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1NlbGZcbiAgeDogMzJcbiAgeTogNjJcbiAgdGV4dDogXCJTZWxmIEVtcGxveWVkXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9DYXN1YWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9DYXN1YWxcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAxMjg0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zMyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zM1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQ2FzdWFsXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMzXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9DYXN1YWxcbiAgeDogMFxuICB5OiAyNFxuICB0ZXh0OiBcIkNhc3VhbGx5IOKAqEVtcGxveWVkXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9GdWxsVGltZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMTA0MFxuICB5OiA3OThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzRcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM0ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM0XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9GdWxsVGltZVxuICB4OiAwXG4gIHk6IDI0XG4gIHRleHQ6IFwiRW1wbG95ZWQgRnVsbCBUaW1lXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9QYXJ0VGltZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X1BhcnRUaW1lXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogNTY0XG4gIHk6IDc5OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zNVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfUGFydFRpbWVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1BhcnRUaW1lXG4gIHg6IDBcbiAgeTogMjRcbiAgdGV4dDogXCJFbXBsb3llZOKAqCBQYXJ0IFRpbWVcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG4iLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcblxud2luZG93LmFCX0hlbHAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9IZWxwXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5oZWxwX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0JvZHlcIlxuICBwYXJlbnQ6IGFCX0hlbHBcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR18zXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmhlbHBfdF9IZWxwID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhlbHBfdF9IZWxwXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogMzAwXG4gIHk6IDQyMFxuICB0ZXh0OiBcIklzIFNvbWVvbmUgSGVscGluZyB5b3UgRmlsbCBPdXQgVGhpcyBGb3JtP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaGVscF9pX0J1b3kgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX2lfQnVveVwiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDg4NFxuICB5OiA3OFxuICB3aWR0aDogMjgwXG4gIGhlaWdodDogMjgwXG4gIGltYWdlOiBcImltYWdlcy9IZWxwX2lfQnVveS5zdmdcIlxuXG5oZWxwX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9CdXRfQmFja1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzExID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzExXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwyNDAsMjQ5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDExOSwxMzEsMTM2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTFcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5oZWxwX0J1dF9ObyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X05vXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogMTIwNFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuaGVscF9CdXRfTm8ub24gRXZlbnRzLlRhcCwgLT5cbiAgZGF0YS5oZWxwID0gZmFsc2VcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1JlYWRTcGVha1wiKVxuXG5yZWN0YW5nbGVfMTIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTJcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X05vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyMjUsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzEyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzEyXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIk5vXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuaGVscF9CdXRfWWVzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9CdXRfWWVzXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogMjQ0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5oZWxwX0J1dF9ZZXMub24gRXZlbnRzLlRhcCwgLT5cbiAgZGF0YS5oZWxwID0gdHJ1ZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfUmVhZFNwZWFrXCIpXG5cbnJlY3RhbmdsZV8xMyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xM1wiXG4gIHBhcmVudDogaGVscF9CdXRfWWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDUsMjMwLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDEwOCwxNzYsMTAxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTNcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIlllc1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDg3LDE1NSw4MSwxKVwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgJ2lucHV0LWZyYW1lci9pbnB1dCdcblxud2luZG93LmFCX0hvdXJJbmNvbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9Ib3VySW5jb21lXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5ob3VySW5jb21lX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX0JvZHlcIlxuICBwYXJlbnQ6IGFCX0hvdXJJbmNvbWVcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR185XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmhvdXJseUluY29tZV9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJseUluY29tZV9CdXRfQmFja1wiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzM4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM4XCJcbiAgcGFyZW50OiBob3VybHlJbmNvbWVfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zOCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zOFwiXG4gIHBhcmVudDogaG91cmx5SW5jb21lX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuaG91cmx5SW5jb21lX3RfUmF0ZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJob3VybHlJbmNvbWVfdF9SYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDU4XG4gIHk6IDM2MlxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciBIb3VybHkgcmF0ZSBhZnRlciB0YXg/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5ob3VybHlJbmNvbWVfdF9Ib3VycyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJob3VybHlJbmNvbWVfdF9Ib3Vyc1wiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDMyNFxuICB5OiA2ODJcbiAgdGV4dDogXCJIb3cgbWFueSBIb3VycyBkbyB5b3Ugd29yayBwZXIgd2Vlaz9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhvdXJJbmNvbWVfaV9icmVpZmNhc2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX2lfYnJlaWZjYXNlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogOTI0XG4gIHk6IDY4XG4gIHdpZHRoOiAyMDBcbiAgaGVpZ2h0OiAxODAuNjkwMjA2ODk2NTUxNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0VtcGxveW1lbnRfaV9CcmVpZmNhc2Uuc3ZnXCJcblxuaG91ckluY29tZV9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfQnV0X05leHRcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzlcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zOSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zOVwiXG4gIHBhcmVudDogaG91ckluY29tZV9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5ob3VySW5jb21lX1R4dF9SYXRlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9UeHRfUmF0ZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDQ4NFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl8yID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl8yXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9SYXRlXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmhvdXJseVJhdGUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaG91cmx5UmF0ZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfUmF0ZVxuICB4OiAyMVxuICB5OiAxOFxuICBoZWlnaHQ6IGhvdXJJbmNvbWVfVHh0X1JhdGUuaGVpZ2h0XG4gIHRleHQ6IFwiJFwiXG5ob3VybHlSYXRlLnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiBcIjQwMHB4XCJcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuXG5ob3VybHlSYXRlID0gbmV3IElucHV0TW9kdWxlLklucHV0XG4gIG5hbWU6IFwiaG91cmx5UmF0ZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfUmF0ZVxuICB4OiA4MFxuICB5OiAwXG4gIGhlaWdodDogaG91ckluY29tZV9UeHRfUmF0ZS5oZWlnaHRcbiAgd2lkdGg6NTAwXG4gIHRleHQ6IFwiMDAuMFwiXG4gIHR5cGU6IFwibnVtYmVyXCJcbmhvdXJseVJhdGUuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwcHhcIlxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5ob3VybHlSYXRlLm9uIFwiaW5wdXRcIiwgLT5cbiAgaWYgKGhvdXJzUGVyV2Vlay52YWx1ZSBpc250IChcIlwiIG9yIFwiMDBcIikpIGFuZCAoaG91cmx5UmF0ZS52YWx1ZSBpc250IChcIlwiIG9yIFwiMDAuMFwiKSlcbiAgICBob3VySW5jb21lX0J1dF9OZXh0LnZpc2libGUgPSB0cnVlXG5ob3VybHlSYXRlLm9uIFwia2V5dXBcIiwgKGV2ZW50KSAtPlxuICBpZiBldmVudC53aGljaCBpcyAxMyB0aGVuIGhvdXJseVJhdGUuaW5wdXQuYmx1cigpXG5ob3VybHlSYXRlLm9uRm9jdXMgLT5cbiAgaWYgQHZhbHVlIGlzIFwiMDAuMFwiIHRoZW4gQHZhbHVlID0gXCJcIlxuXG5ob3VySW5jb21lX1R4dF9Ib3VycyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfVHh0X0hvdXJzXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDg0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X0hvdXJzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmhvdXJzUGVyV2VlayA9IG5ldyBJbnB1dE1vZHVsZS5JbnB1dFxuICBuYW1lOiBcImhvdXJzUGVyV2Vla1wiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfSG91cnNcbiAgeDogMjFcbiAgeTogMFxuICB0ZXh0OiBcIkhvdXJzIHBlciBXZWVrXCJcbiAgdHlwZTogXCJudW1iZXJcIlxuICBoZWlnaHQ6IGhvdXJJbmNvbWVfVHh0X1JhdGUuaGVpZ2h0XG4gIHdpZHRoOjUwMFxuaG91cnNQZXJXZWVrLnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmhvdXJzUGVyV2Vlay5vbiBcImlucHV0XCIsIC0+XG4gIGlmIChob3Vyc1BlcldlZWsudmFsdWUgaXNudCAoXCJcIiBvciBcIjAwXCIpKSBhbmQgKGhvdXJseVJhdGUudmFsdWUgaXNudCAoXCJcIiBvciBcIjAwLjBcIikpXG4gICAgaG91ckluY29tZV9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxuaG91cnNQZXJXZWVrLm9uIFwia2V5dXBcIiwgKGV2ZW50KSAtPlxuICBpZiBldmVudC53aGljaCBpcyAxMyB0aGVuIGhvdXJzUGVyV2Vlay5pbnB1dC5ibHVyKClcblxuaG91ckluY29tZV9CdXRfTmV4dC52aXNpYmxlID0gZmFsc2VcbmhvdXJJbmNvbWVfQnV0X05leHQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LmRhdGEuaW5jb21lID0gKE51bWJlcihob3Vyc1BlcldlZWsudmFsdWUpKk51bWJlcihob3VybHlSYXRlLnZhbHVlKSlcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1N1bW1hcnlcIikiLCJ3aW5kb3cuYUJfSW50ZXJwcmV0ZXIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9JbnRlcnByZXRlclwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaW50ZXJwX2JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfYm9keVwiXG4gIHBhcmVudDogYUJfSW50ZXJwcmV0ZXJcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR181XCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuaW50ZXJwX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8yNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNFwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjRcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmludGVycF90X0ludGVycHJldG9yID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImludGVycF90X0ludGVycHJldG9yXCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiA1NTRcbiAgeTogMzQwXG4gIHRleHQ6IFwiRG8geW91IG5lZWQgYW4gaW50ZXJwcmV0ZXI/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5pbnRlcnBfaV9MYW5ndWFnZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9pX0xhbmd1YWdlXCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiA5NTBcbiAgeTogMTQwXG4gIHdpZHRoOiAxNTBcbiAgaGVpZ2h0OiAxNTVcbiAgaW1hZ2U6IFwiaW1hZ2VzL0ludGVycF9pX0xhbmd1YWdlLnN2Z1wiXG5cbmludGVycF9CdXRfbm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfQnV0X25vXCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiAxMjA0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5cblxucmVjdGFuZ2xlXzI1ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI1XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X25vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyMjUsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI1ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI1XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X25vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiTm9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuXG5pbnRlcnBfQnV0X3llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9CdXRfeWVzXCJcbiAgcGFyZW50OiBpbnRlcnBfYm9keVxuICB4OiAyNDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxucmVjdGFuZ2xlXzI2ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI2XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X3llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI2ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI2XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X3llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIlllc1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDg3LDE1NSw4MSwxKVwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgXCJpbnB1dC1mcmFtZXIvaW5wdXRcIlxud2luZG93LmFCX0xhbmd1YWdlID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYUJfTGFuZ3VhZ2VcIlxuXHR4OiAwXG5cdHk6IDBcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNTM2XG5cbmxhbmd1YWdlX0JvZHkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9Cb2R5XCJcblx0cGFyZW50OiBhQl9MYW5ndWFnZVxuXHR4OiAwXG5cdHk6IDEzOFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblxuYkdfMiA9IG5ldyBMYXllclxuXHRuYW1lOiBcImJHXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9FbmdsaXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0VuZ2xpc2hcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDM0MlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5sYW5ndWFnZV9CdXRfRW5nbGlzaC5vbiBFdmVudHMuVGFwLCAtPlxuXHRkYXRhLmxhbmd1YWdlID0gXCJFbmdsaXNoXCJcblx0Zmxvdy5zaG93TmV4dCDGkihcImFCX0hlbHBcIiksIHNjcm9sbDogZmFsc2VcblxucmVjdGFuZ2xlXzIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfMlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0VuZ2xpc2hcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfMlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0VuZ2xpc2hcblx0eDogMTI1XG5cdHk6IDYyXG5cdHRleHQ6IFwiRW5nbGlzaFwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X0NoaW5lc2UgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfQ2hpbmVzZVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogNjIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfM1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0NoaW5lc2Vcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfM1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0NoaW5lc2Vcblx0eDogMTY0XG5cdHk6IDYyXG5cdHRleHQ6IFwi5Lit5paHXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVGhhaSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9UaGFpXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNCA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV80XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVGhhaVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF80XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVGhhaVxuXHR4OiAxMDFcblx0eTogNjJcblx0dGV4dDogXCLguYTguJfguKIg4oCTIOC5hOC4l+C4olwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X0FyYWJpYyA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9BcmFiaWNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDM0MlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV81ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzVcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9BcmFiaWNcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzUgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfNVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0FyYWJpY1xuXHR4OiAxNThcblx0eTogNjJcblx0dGV4dDogXCLYudix2KjZilwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1NwYW5pc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfU3BhbmlzaFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiA4MDRcblx0eTogNjIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzYgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1NwYW5pc2hcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzYgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfNlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1NwYW5pc2hcblx0eDogMTE3XG5cdHk6IDYyXG5cdHRleHQ6IFwiRXNwYcOxb2xcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9HcmVlayA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9HcmVla1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiA4MDRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzcgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfN1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0dyZWVrXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF83ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzdcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9HcmVla1xuXHR4OiAxMDJcblx0eTogNjJcblx0dGV4dDogXCLOlc67zrvOt3bOuc66zqxcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9WaWV0ID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1ZpZXRcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMTM2NFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfOCA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV84XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVmlldFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfOCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF84XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVmlldFxuXHR4OiAxMTBcblx0eTogNjJcblx0dGV4dDogXCJWaeG7h3Qtbmfhu69cIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9UdXJraXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1R1cmtpc2hcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMTM2NFxuXHR5OiA2MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfOSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV85XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVHVya2lzaFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfOSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF85XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfVHVya2lzaFxuXHR4OiAxMzVcblx0eTogNjJcblx0dGV4dDogXCJUw7xya8OnZVwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1BlcnNpYW4gPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfUGVyc2lhblwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAxMzY0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8xMCA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV8xMFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1BlcnNpYW5cblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzEwID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzEwXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfUGVyc2lhblxuXHR4OiAxNTFcblx0eTogNjJcblx0dGV4dDogXCLZgdin2LEg2LNcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG4iLCJhQl9OYXl5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfTmF5eXlcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbm5heXlfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5heXlfQm9keVwiXG4gIHBhcmVudDogYUJfTmF5eVxuICB4OiAwXG4gIHk6IDEzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR1wiXG4gIHBhcmVudDogbmF5eV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5uYXl5X2lfTG9nbyA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5heXlfaV9Mb2dvXCJcbiAgcGFyZW50OiBuYXl5X0JvZHlcbiAgeDogODg0XG4gIHk6IDIyXG4gIHdpZHRoOiAyNzZcbiAgaGVpZ2h0OiAyNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL25heXlfaV9Mb2dvLnN2Z1wiXG5cbm5heXlfdF9IZWFkaW5nID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIm5heXlfdF9IZWFkaW5nXCJcbiAgcGFyZW50OiBuYXl5X0JvZHlcbiAgeDogMzI0XG4gIHk6IDM3NlxuICB3aWR0aDogMTM5NlxuICB0ZXh0OiBcIknigJltIFNvcnJ5IG15IGR1ZGUgWW91IGRvIG5vdCBxdWFsaWZ5IGZvciB0aGUgRHV0eSBMYXd5ZXIgc2VydmljZVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubmF5eV90X0hlYWRpbmdDb3B5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIm5heXlfdF9IZWFkaW5nQ29weVwiXG4gIHBhcmVudDogbmF5eV9Cb2R5XG4gIHg6IDMyNFxuICB5OiA2MDJcbiAgd2lkdGg6IDEzOTZcbiAgdGV4dDogXCJGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gZG8sIGNhbGwgVkxB4oCZcyBsZWdhbCBoZWxwbGluZSBvbiAxMzAwIDc5MiAzODdcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5heXlfQnV0X1JldHVybiA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5heXlfQnV0X1JldHVyblwiXG4gIHBhcmVudDogbmF5eV9Cb2R5XG4gIHg6IDcyNFxuICB5OiA5MjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxubmF5eV9CdXRfUmV0dXJuLm9uVGFwIC0+XG4gIHdpbmRvdy5kYXRhID0ge31cbiAgZmxvdy5zaG93TmV4dCBhQl9TcGxhc2hcblxucmVjdGFuZ2xlID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXCJcbiAgcGFyZW50OiBuYXl5X0J1dF9SZXR1cm5cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbFwiXG4gIHBhcmVudDogbmF5eV9CdXRfUmV0dXJuXG4gIHg6IDYwXG4gIHk6IDg2XG4gIHRleHQ6IFwiUmV0dXJuIHRvIFN0YXJ0XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG4iLCJJbnB1dE1vZHVsZSA9IHJlcXVpcmUgJ2lucHV0LWZyYW1lci9pbnB1dCdcbnvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xud2luZG93LmFCX05ET0IgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9ORE9CXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5uRE9CX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0JvZHlcIlxuICBwYXJlbnQ6IGFCX05ET0JcbiAgeDogMFxuICB5OiAxMzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzEwID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfMTBcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxubkRPQl9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA0MDRcbiAgeTogMTE0MlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV80MCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80MFwiXG4gIHBhcmVudDogbkRPQl9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQwID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQwXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxubkRPQl90X05hbWUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibkRPQl90X05hbWVcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA2ODBcbiAgeTogMTc0XG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIG5hbWU/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5uRE9CX3RfRG9iID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIm5ET0JfdF9Eb2JcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA1NjhcbiAgeTogNjU0XG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIGRhdGUgb2YgYmlydGg/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5uRE9CX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9CdXRfTmV4dFwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTEwMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5uRE9CX0J1dF9OZXh0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIGlmIG5hbWUudmFsdWUgaXNudCAoXCJOYW1lXCIgb3IgXCJcIikgYW5kIGRheS52YWx1ZSBpc250IFwiXCJcbiAgICBkYXRhLm5hbWUgPSBuYW1lLnZhbHVlXG4gICAgZGF0YS5Eb2IgPSBkYXkudmFsdWVcbiAgICDGkihcInlhc3NfdF9IZWFkaW5nXCIpLnRleHQgPSBcIlwiXCJUaGFuayB5b3UgI3tkYXRhLm5hbWUubWF0Y2goL1xcdysvKX1cbiAgICBQbGVhc2UgdGFrZSBhIHNlYXQgYW5kIHdlIHdpbGwgYmUgd2l0aCB5b3Ugc2hvcnRseVwiXCJcIlxuICAgIMaSKFwibmF5eV90X0hlYWRpbmdcIikudGV4dCA9IFwiSeKAmW0gU29ycnkgI3tkYXRhLm5hbWUubWF0Y2ggL1xcdysvfSBZb3UgZG8gbm90IHF1YWxpZnkgZm9yIHRoZSBEdXR5IExhd3llciBzZXJ2aWNlXCJcbiAgICBpZiBkYXRhLlNwZWFrQWJpbGl0eSA9PSBcInNHb29kXCIgb3IgZGF0YS5TcGVha0FiaWxpdHkgPT0gXCJzRmx1ZW50XCJcbiAgICAgIGZsb3cuc2hvd05leHQgxpIoXCJhQl9Db250YWN0XCIpXG4gICAgICBkYXRhLmludGVycCA9IFwibm9uZVwiXG4gICAgZWxzZVxuICAgICAgZmxvdy5zaG93TmV4dCDGkihcImFCX0ludGVycHJldGVyXCIpXG5cbnJlY3RhbmdsZV80MSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80MVwiXG4gIHBhcmVudDogbkRPQl9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQxID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQxXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbm5ET0JfaV9QZW4gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX2lfUGVuXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNDA0XG4gIHk6IDM0NFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTIwLjAwMDAxODc0OTk2MTg1XG4gIGltYWdlOiBcImltYWdlcy9ORE9CX2lfUGVuLnN2Z1wiXG5cbm5ET0JfaV9DYWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX2lfQ2FsXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNDA0XG4gIHk6IDgyMlxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTIxLjkwODA3ODc4MzA1NTg0XG4gIGltYWdlOiBcImltYWdlcy9ORE9CX2lfQ2FsLnN2Z1wiXG5cbm5ET0JfdGV4dF9OYW1lID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl90ZXh0X05hbWVcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA1NjRcbiAgeTogMzQyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfNFwiXG4gIHBhcmVudDogbkRPQl90ZXh0X05hbWVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxubmFtZSA9IG5ldyBJbnB1dE1vZHVsZS5JbnB1dFxuICBuYW1lOiBcIm5hbWVcIlxuICBwYXJlbnQ6IG5ET0JfdGV4dF9OYW1lXG4gIHg6IDIxXG4gIHk6IDBcbiAgaGVpZ2h0OiAxMjBcbiAgdmlydHVhbEtleWJvYXJkOiBmYWxzZVxuICB0ZXh0OiBcIk5hbWVcIlxuICB0ZXh0Q29sb3VyOiBcIiNDOTg2MzlcIlxuICBmb250U2l6ZTogXCI3MlwiXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcbm5hbWUuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgY29sb3I6IFwiI0M5ODYzOVwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcblxubkRPQl9CdXRfRGF5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9CdXRfRGF5XCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogQWxpZ24uY2VudGVyXG4gIHk6IDgyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNzAwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfNVwiXG4gIHBhcmVudDogbkRPQl9CdXRfRGF5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNzAwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIyMSwyNDAsMjQ5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAyMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDU3LDE1MSwxOTIsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuZGF5ID0gbmV3IElucHV0TW9kdWxlLklucHV0XG4gIG5hbWU6IFwiZGF5XCJcbiAgcGFyZW50OiBuRE9CX0J1dF9EYXlcbiAgeDogMTVcbiAgeTogMTJcbiAgdmlydHVhbEtleWJvYXJkOiBmYWxzZVxuICBoZWlnaHQ6IDEwMFxuICB3aWR0aDogNzAwXG4gIHRleHQ6IFwiRE9CXCJcbiAgdHlwZTogXCJkYXRlXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTcxLDIxOCwyMzksMSlcIlxuZGF5LnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGNvbG9yOiBcIiMyNTgyQUJcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG5kYXkuaW5wdXQubWF4ID0gXCIyMDEwLTAxLTAxXCJcbmRheS5pbnB1dC52YWx1ZSA9IFwiMjAxMC0wMS0wMVwiXG5uRE9CX0J1dF9OZXh0LnZpc2libGUgPSBmYWxzZVxuZGF5LmlucHV0LnR5cGUgPSBcImRhdGVcIlxuZGF5Lm9uIFwiaW5wdXRcIiwgLT5cbiAgaWYgbmFtZS52YWx1ZSBpc250IChcIk5hbWVcIiBvciBcIlwiKSBhbmQgZGF5LnZhbHVlIGlzbnQgXCJcIlxuICAgIG5ET0JfQnV0X05leHQudmlzaWJsZSA9IHRydWVcbm5hbWUub24gXCJpbnB1dFwiLCAtPlxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgbkRPQl9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxuXG5uYW1lLm9uIFwia2V5dXBcIiwgKGV2ZW50KSAtPlxuICBpZiBldmVudC53aGljaCBpcyAxMyB0aGVuIG5hbWUuaW5wdXQuYmx1cigpXG5uYW1lLm9uRm9jdXMgLT5cbiAgaWYgQHZhbHVlIGlzIFwiTmFtZVwiIHRoZW4gQHZhbHVlID0gXCJcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlIFwiaW5wdXQtZnJhbWVyL2lucHV0XCJcblxud2luZG93LlJWYWxzID1cbiAgck5vbmU6IDBcbiAgclNvbWV3aGF0OiAwXG4gIHJHb29kOiAwXG4gIHJGbHVlbnQ6IDBcbndpbmRvdy5TVmFscyA9XG4gIHNOb25lOiAwXG4gIHNTb21ld2hhdDogMFxuICBzR29vZDogMFxuICBzRmx1ZW50OiAwXG5cbndpbmRvdy5hQl9SZWFkU3BlYWsgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9SZWFkU3BlYWtcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbnJlYWRTcGVha19Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0JvZHlcIlxuICBwYXJlbnQ6IGFCX1JlYWRTcGVha1xuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNCA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5yZWFkU3BlYWtfaV9SZWFkID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX2lfUmVhZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDA0XG4gIHk6IDM3MFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTA4LjMwMzY5NDg0Mzk1NjY2XG4gIGltYWdlOiBcImltYWdlcy9SZWFkU3BlYWtfaV9SZWFkLnN2Z1wiXG5cbnJlYWRTcGVha19pX1NwZWFrID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX2lfU3BlYWtcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQxMFxuICB5OiA4MzhcbiAgd2lkdGg6IDEwNy42NTkyMzU3MTUxMTk1NlxuICBoZWlnaHQ6IDEyMFxuICBpbWFnZTogXCJpbWFnZXMvUmVhZFNwZWFrX2lfU3BlYWsuc3ZnXCJcblxucmVhZFNwZWFrX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9CYWNrXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8xNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbnJlYWRTcGVha190X1JlYWQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX3RfUmVhZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDk2XG4gIHk6IDE5OFxuICB0ZXh0OiBcIkhvdyB3ZWxsIGNhbiB5b3UgcmVhZCBFbmdsaXNoP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX3RfU3BlYWsgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX3RfU3BlYWtcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQ3NFxuICB5OiA2ODBcbiAgdGV4dDogXCJIb3cgd2VsbCBjYW4geW91IHNwZWFrIEVuZ2xpc2g/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JOb25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yTm9uZVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNTY0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JOb25lLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJOb25lXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yTm9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE1ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE1XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JOb25lXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJOb25lXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NOb25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zTm9uZVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNTY0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NOb25lLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlNWYWxzLCBcInNOb25lXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zTm9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE2ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE2XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NOb25lXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJOb25lXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JTb21ld2hhdCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfclNvbWV3aGF0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA4ODRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfclNvbWV3aGF0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJTb21ld2hhdFwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTdcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfclNvbWV3aGF0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTdcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfclNvbWV3aGF0XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJTb21ld2hhdFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9zU29tZXdoYXQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NTb21ld2hhdFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogODg0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NTb21ld2hhdC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5TVmFscywgXCJzU29tZXdoYXRcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE4XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NTb21ld2hhdFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE4ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE4XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NTb21ld2hhdFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiU29tZXdoYXRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfckdvb2QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JHb29kXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMjA0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JHb29kLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJHb29kXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xOVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yR29vZFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE5XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JHb29kXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJHb29kXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NHb29kID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zR29vZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTIwNFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zR29vZC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsKHdpbmRvdy5TVmFscywgXCJzR29vZFwiKVxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzIwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIwXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NHb29kXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjBcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0dvb2RcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkdvb2RcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfckZsdWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfckZsdWVudFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTUyNFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yRmx1ZW50Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlJWYWxzLCBcInJGbHVlbnRcIilcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8yMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yMVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yRmx1ZW50XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjFcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckZsdWVudFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiRmx1ZW50XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NGbHVlbnQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NGbHVlbnRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDE1MjRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc0ZsdWVudC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsKHdpbmRvdy5TVmFscywgXCJzRmx1ZW50XCIpXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMjIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjJcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0ZsdWVudFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIyXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NGbHVlbnRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkZsdWVudFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9OZXh0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5cblxucmVjdGFuZ2xlXzIzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIzXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yM1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfU3BsYXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYUJfU3BsYXNoXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG53aW5kb3cuc3BsYXNoX0JvZHkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfQm9keVwiXG5cdHBhcmVudDogYUJfU3BsYXNoXG5cdHg6IDBcblx0eTogMTM4XG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXG53aW5kb3cuYkcgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfaV9Mb2dvID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX2lfTG9nb1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogODg0XG5cdHk6IDIyXG5cdHdpZHRoOiAyNzZcblx0aGVpZ2h0OiAyNzZcblx0aW1hZ2U6IFwiaW1hZ2VzL1NwbGFzaF9pX0xvZ28uc3ZnXCJcblxud2luZG93LnNwbGFzaF90X1RpdGxlID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInNwbGFzaF90X1RpdGxlXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA1NjRcblx0eTogMzQyXG5cdHdpZHRoOiA5MTguODUzNjM3MDA4MDU2MlxuXHR0ZXh0OiBcIlZpY3RvcmlhIExlZ2FsIEFpZFwiXG5cdGZvbnRTaXplOiA3MlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNzAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2luZG93LnNwbGFzaF90X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3BsYXNoX3RfSGVhZGluZ1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNTY0XG5cdHk6IDUwNFxuXHR3aWR0aDogOTE3Ljg4NjkyNzc1OTEwMlxuXHR0ZXh0OiBcIkR1dHkgTGF3eWVyIFNlcnZpY2XigKhBcHBsaWNhdGlvbiBmb3IgQWlkXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9CdXRfQmVnaW5cIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDcyNFxuXHR5OiA4MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDYwMFxuXHRoZWlnaHQ6IDI4MFxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbi5vbiBFdmVudHMuVGFwLCAtPlxuXHRmbG93LnNob3dOZXh0IMaSKFwiYUJfTGFuZ3VhZ2VcIilcblxuXG53aW5kb3cucmVjdGFuZ2xlID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNjAwXG5cdGhlaWdodDogMjgwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxud2luZG93LmxhYmVsID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDIwMlxuXHR5OiA4NlxuXHR0ZXh0OiBcIkJlZ2luXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG5cbndpbmRvdy5zdW1GaWxsID0gLT5cbiAgxpIoXCJzdW1tYXJ5X3RfZGF0YVwiKS5odG1sID1cbiAgICBcIlwiXCIje2RhdGEubmFtZX08YnI+XG4je3dpbmRvdy5kYXRhLkRvYn08YnI+XG4je3dpbmRvdy5kYXRhLmhlbHB9PGJyPlxuI3t3aW5kb3cuZGF0YS5pbnRlcnB9PGJyPjxicj5cbuKAqCN7d2luZG93LmRhdGEubWFpbH3igKg8YnI+XG4je3dpbmRvdy5kYXRhLmVtYWlsfTxicj5cbuKAqCN7d2luZG93LmRhdGEucGhvbmV9PGJyPlxuYXQgbGVhc3QgJCN7d2luZG93LmRhdGEuaW5jb21lfSBwZXIgd2Vlazxicj5cbiN7d2luZG93LmRhdGEuZGlzcFN1bX08YnI+XCJcIlwiXG5cblxuXG5cbndpbmRvdy5hQl9TdW1tYXJ5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfU3VtbWFyeVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuc3VtbWFyeV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwic3VtbWFyeV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9TdW1tYXJ5XG4gIHg6IDBcbiAgeTogMTM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5zdW1tYXJ5X0JHID0gbmV3IExheWVyXG4gIG5hbWU6IFwic3VtbWFyeV9CR1wiXG4gIHBhcmVudDogc3VtbWFyeV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5zdW1tYXJ5X3RfVGl0bGUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwic3VtbWFyeV90X1RpdGxlXCJcbiAgcGFyZW50OiBzdW1tYXJ5X0JvZHlcbiAgeDogNTY0XG4gIHk6IDM4XG4gIHdpZHRoOiA5MTguODUzNjM3MDA4MDU2MlxuICB0ZXh0OiBcIlN1bW1hcnlcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDcwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnN1bW1hcnlfdF9IZWFkaW5nID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInN1bW1hcnlfdF9IZWFkaW5nXCJcbiAgcGFyZW50OiBzdW1tYXJ5X0JvZHlcbiAgeDogNDA0XG4gIHk6IDIzMlxuICB3aWR0aDogNjAwXG4gIGh0bWw6IFwiXCJcIk5hbWU6PGJyPlxuRGF0ZSBvZiBCaXJ0aDo8YnI+XG5IZWxwIEZpbGxpbmcgb3V0IEZvcm06PGJyPlxuSW50ZXJwcmV0ZXI6PGJyPlxuQ29udGFjdOKAqDxicj5cbi1NYWlsOuKAqDxicj5cbi1FbWFpbDo8YnI+XG7igKgtUGhvbmU6PGJyPlxuSW5jb21lOjxicj5cbkRpc2FiaWxpdHkocyk6PGJyPlwiXCJcIlxuICBmb250U2l6ZTogNDhcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICBsaW5lSGVpZ2h0OiAxLjMzMzMzMzMzMzMzMzMzMzNcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuc3VtbWFyeV90X0hlYWRpbmdDb3B5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInN1bW1hcnlfdF9kYXRhXCJcbiAgcGFyZW50OiBzdW1tYXJ5X0JvZHlcbiAgeDogMTA2NFxuICB5OiAyMzJcbiAgd2lkdGg6IDYwMFxuICBmb250U2l6ZTogNDhcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICBsaW5lSGVpZ2h0OiAxLjMzMzMzMzMzMzMzMzMzMzNcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuXG5cblxuaG91cmx5SW5jb21lX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiU3VtbWFyeV9CdXRfQmFja1wiXG4gIHBhcmVudDogYUJfU3VtbWFyeVxuICB4OiA0MDRcbiAgeTogMTI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTc4XCJcbiAgcGFyZW50OiBob3VybHlJbmNvbWVfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbDc4XCJcbiAgcGFyZW50OiBob3VybHlJbmNvbWVfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5pZlRoaXNJc0NvcnJlY3QgPSBuZXcgVGV4dExheWVyXG4gIHBhcmVudDogYUJfU3VtbWFyeVxuICBuYW1lOiBcImlmVGhpc0lzQ29ycmVjdFwiXG4gIHg6IDc0MlxuICB5OiAyNzhcbiAgdGV4dDogXCJJZiB0aGlzIGlzIGNvcnJlY3QsIFRhcCBOZXh0LlwiXG4gIGZvbnRTaXplOiA0OFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cblxuaG91ckluY29tZV9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcIlN1bW1hcnlfQnV0X05leHRcIlxuICBwYXJlbnQ6IGFCX1N1bW1hcnlcbiAgeDogMTM2NFxuICB5OiAxMjQwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjY1XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDJcblxubGFiZWxfMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNjVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuYUJfU3VtbWFyeS5vbiBcImNoYW5nZTpwYXJlbnRcIiwgLT5cbiAgc3VtRmlsbCgpXG5cbiIsIndpbmRvdy5hQl9XZWVrSW5jb21lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfV2Vla0luY29tZVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxud2Vla0luY29tZV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9XZWVrSW5jb21lXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR184ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfOFwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG53ZWVrSW5jb21lX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9CdXRfQmFja1wiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzM2ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM2XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzZcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG53ZWVrSW5jb21lX3RfSW5jb21lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfdF9JbmNvbWVcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiAzOTNcbiAgeTogMzQwXG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIHdlZWtseSBpbmNvbWUgYWZ0ZXIgdGF4P1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2Vla0luY29tZV9pX2JyaWVmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfaV9icmllZmNhc2VcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuICBpbWFnZTogXCJpbWFnZXMvRW1wbG95bWVudF9pX0JyZWlmY2FzZS5zdmdcIlxuXG53ZWVrSW5jb21lX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9CdXRfTmV4dFwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIHZpc2libGU6IGZhbHNlXG5cbnJlY3RhbmdsZV8zNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zN1wiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cblxubGFiZWxfMzcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzdcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuIiwid2luZG93LmFCX1lhc3MgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9ZYXNzXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG55YXNzX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ5YXNzX0JvZHlcIlxuICBwYXJlbnQ6IGFCX1lhc3NcbiAgeDogMFxuICB5OiAxMzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdcIlxuICBwYXJlbnQ6IHlhc3NfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxueWFzc19pX0xvZ28gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ5YXNzX2lfTG9nb1wiXG4gIHBhcmVudDogeWFzc19Cb2R5XG4gIHg6IDg4NFxuICB5OiAyMlxuICB3aWR0aDogMjc2XG4gIGhlaWdodDogMjc2XG4gIGltYWdlOiBcImltYWdlcy95YXNzX2lfTG9nby5zdmdcIlxuXG55YXNzX3RfSGVhZGluZyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJ5YXNzX3RfSGVhZGluZ1wiXG4gIHBhcmVudDogeWFzc19Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNzZcbiAgd2lkdGg6IDkxNy44ODY5Mjc3NTkxMDJcbiAgdGV4dDogXCJUaGFuayB5b3UgZ2FzIFBsZWFzZSB0YWtlIGEgc2VhdCBhbmQgd2Ugd2lsbCBiZSB3aXRoIHlvdSBzaG9ydGx5XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG55YXNzX0J1dF9SZXR1cm4gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ5YXNzX0J1dF9SZXR1cm5cIlxuICBwYXJlbnQ6IHlhc3NfQm9keVxuICB4OiA3MjRcbiAgeTogOTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbnlhc3NfQnV0X1JldHVybi5vblRhcCAtPlxuICB3aW5kb3cuZGF0YSA9IHt9XG4gIGZsb3cuc2hvd05leHQgYUJfU3BsYXNoXG5cbnJlY3RhbmdsZSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZVwiXG4gIHBhcmVudDogeWFzc19CdXRfUmV0dXJuXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxcIlxuICBwYXJlbnQ6IHlhc3NfQnV0X1JldHVyblxuICB4OiA2MFxuICB5OiA4NlxuICB0ZXh0OiBcIlJldHVybiB0byBTdGFydFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuIiwiX2dldEhpZXJhcmNoeSA9IChsYXllcikgLT5cbiAgc3RyaW5nID0gJydcbiAgZm9yIGEgaW4gbGF5ZXIuYW5jZXN0b3JzKClcbiAgICBzdHJpbmcgPSBhLm5hbWUrJz4nK3N0cmluZ1xuICByZXR1cm4gc3RyaW5nID0gc3RyaW5nK2xheWVyLm5hbWVcblxuX21hdGNoID0gKGhpZXJhcmNoeSwgc3RyaW5nKSAtPlxuICAjIHByZXBhcmUgcmVnZXggdG9rZW5zXG4gIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHMqPlxccyovZywnPicpICMgY2xlYW4gdXAgc3BhY2VzIGFyb3VuZCBhcnJvd3NcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcqJykuam9pbignW14+XSonKSAjIGFzdGVyaWtzIGFzIGxheWVyIG5hbWUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcgJykuam9pbignKD86LiopPicpICMgc3BhY2UgYXMgc3RydWN0dXJlIHdpbGRjYXJkXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnLCcpLmpvaW4oJyR8JykgIyBhbGxvdyBtdWx0aXBsZSBzZWFyY2hlcyB1c2luZyBjb21tYVxuICByZWdleFN0cmluZyA9IFwiKF58PilcIitzdHJpbmcrXCIkXCIgIyBhbHdheXMgYm90dG9tIGxheWVyLCBtYXliZSBwYXJ0IG9mIGhpZXJhcmNoeVxuXG4gIHJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpIFxuICByZXR1cm4gaGllcmFyY2h5Lm1hdGNoKHJlZ0V4cClcblxuX2ZpbmRBbGwgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT5cbiAgbGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnNcblxuICBpZiBzZWxlY3Rvcj9cbiAgICBzdHJpbmdOZWVkc1JlZ2V4ID0gXy5maW5kIFsnKicsJyAnLCc+JywnLCddLCAoYykgLT4gXy5pbmNsdWRlcyBzZWxlY3RvcixjXG4gICAgdW5sZXNzIHN0cmluZ05lZWRzUmVnZXggb3IgZnJvbUxheWVyXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT4gXG4gICAgICAgIGlmIGxheWVyLm5hbWUgaXMgc2VsZWN0b3IgdGhlbiB0cnVlXG4gICAgZWxzZVxuICAgICAgbGF5ZXJzID0gXy5maWx0ZXIgbGF5ZXJzLCAobGF5ZXIpIC0+XG4gICAgICAgICAgaGllcmFyY2h5ID0gX2dldEhpZXJhcmNoeShsYXllcilcbiAgICAgICAgICBpZiBmcm9tTGF5ZXI/XG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBmcm9tTGF5ZXIubmFtZSsnICcrc2VsZWN0b3IpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgX21hdGNoKGhpZXJhcmNoeSwgc2VsZWN0b3IpXG4gIGVsc2VcbiAgICBsYXllcnNcblxuXG4jIEdsb2JhbFxuZXhwb3J0cy5GaW5kICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5leHBvcnRzLsaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpWzBdXG5cbmV4cG9ydHMuRmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuZXhwb3J0cy7GksaSICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilcblxuIyBNZXRob2RzXG5MYXllcjo6ZmluZCAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5MYXllcjo6xpIgICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVswXVxuXG5MYXllcjo6ZmluZEFsbCAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApXG5MYXllcjo6xpLGkiAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQCkiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDIuMC4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBfaW5wdXRTdHlsZSwgY2FsY3VsYXRlUGl4ZWxSYXRpbywgZ3Jvd3RoUmF0aW8sIGltYWdlSGVpZ2h0O1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllcih7XG4gICAgeDogMCxcbiAgICB5OiBTY3JlZW4uaGVpZ2h0LFxuICAgIHdpZHRoOiBTY3JlZW4ud2lkdGgsXG4gICAgaGVpZ2h0OiA0MzIsXG4gICAgaHRtbDogXCI8aW1nIHN0eWxlPSd3aWR0aDogMTAwJTsnIHNyYz0nbW9kdWxlcy9rZXlib2FyZC5wbmcnLz5cIlxuICB9KTtcblxuICAvL3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuICBncm93dGhSYXRpbyA9IFNjcmVlbi53aWR0aCAvIDczMjtcblxuICBpbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyO1xuXG4gIC8vIEV4dGVuZHMgdGhlIExheWVyU3R5bGUgY2xhc3Mgd2hpY2ggZG9lcyB0aGUgcGl4ZWwgcmF0aW8gY2FsY3VsYXRpb25zIGluIGZyYW1lclxuICBfaW5wdXRTdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLCBjYWxjdWxhdGVQaXhlbFJhdGlvID0gZnVuY3Rpb24obGF5ZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAqIGxheWVyLmNvbnRleHQucGl4ZWxNdWx0aXBsaWVyKSArIFwicHhcIjtcbiAgfSwge1xuICAgIGZvbnRTaXplOiBmdW5jdGlvbihsYXllcikge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIGxheWVyLl9wcm9wZXJ0aWVzLmZvbnRTaXplKTtcbiAgICB9LFxuICAgIGxpbmVIZWlnaHQ6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICByZXR1cm4gbGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCArIFwiZW1cIjtcbiAgICB9LFxuICAgIHBhZGRpbmc6IGZ1bmN0aW9uKGxheWVyKSB7XG4gICAgICB2YXIgcGFkZGluZywgcGFkZGluZ1ZhbHVlLCBwYWRkaW5nVmFsdWVzLCBwaXhlbE11bHRpcGxpZXI7XG4gICAgICAoe3BpeGVsTXVsdGlwbGllcn0gPSBsYXllci5jb250ZXh0KTtcbiAgICAgIHBhZGRpbmcgPSBbXTtcbiAgICAgIHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmc7XG4gICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWRkaW5nVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBwYWRkaW5nVmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgdGhleSBjb21lIGFzIHN0cmluZyAoZS5nLiBcIjEgMiAzIDRcIilcbiAgICAgIHBhZGRpbmdWYWx1ZXMgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nLnNwbGl0KFwiIFwiKTtcbiAgICAgIHN3aXRjaCAocGFkZGluZ1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICB9XG4gICAgICAvLyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuICAgICAgcmV0dXJuIGAke3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAke3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICR7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4YDtcbiAgICB9XG4gIH0pO1xuXG4gIGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMgPSB7XG4gICAgc2hvd246IHtcbiAgICAgIHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuICAgIH1cbiAgfTtcblxuICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPSB7XG4gICAgY3VydmU6IFwic3ByaW5nKDUwMCw1MCwxNSlcIlxuICB9O1xuXG4gIGV4cG9ydHMuSW5wdXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgSW5wdXQgZXh0ZW5kcyBMYXllciB7XG4gICAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2V0dXAgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc2V0dXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy53aWR0aCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy53aWR0aCA9IFNjcmVlbi53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jbGlwID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmNsaXAgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5oZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuc2V0dXAgPyBcInJnYmEoMjU1LCA2MCwgNDcsIC41KVwiIDogXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRTaXplID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmZvbnRTaXplID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubGluZUhlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5saW5lSGVpZ2h0ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wYWRkaW5nID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBhZGRpbmcgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnRleHQgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnBsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudmlydHVhbEtleWJvYXJkID0gVXRpbHMuaXNNb2JpbGUoKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50eXBlID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5nb0J1dHRvbiA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5nb0J1dHRvbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db3JyZWN0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9Db3JyZWN0ID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9Db21wbGV0ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvQ29tcGxldGUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPSBcIm9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3BlbGxDaGVjayA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5zcGVsbENoZWNrID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0Q29sb3IgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGV4dENvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udEZhbWlseSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250RmFtaWx5ID0gXCItYXBwbGUtc3lzdGVtXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZm9udFdlaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250V2VpZ2h0ID0gXCI1MDBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdWJtaXQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc3VibWl0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGFiSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMudGFiSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICAvLyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplO1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICAgICAgaWYgKG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQuaWQgPSBgaW5wdXQtJHtfLm5vdygpfWA7XG4gICAgICAgIC8vIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0O1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXgpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIG9wdGlvbnMuYXV0b0NvcnJlY3QpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSk7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2ZvY3VzXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2spO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgaWYgKChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0KSB7XG4gICAgICAgICAgdGhpcy5mb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyQ29sb3IpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Iob3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdmFyIGNzcztcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNvbG9yID0gY29sb3I7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTdHlsZSAhPSBudWxsKSB7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLnBhZ2VTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHRoaXMucGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGNzcyA9IGAjJHt0aGlzLmlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAke3RoaXMucGxhY2Vob2xkZXJDb2xvcn07IH1gO1xuICAgICAgICB0aGlzLnBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5wYWdlU3R5bGUpO1xuICAgICAgfVxuXG4gICAgICBmb2N1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgb25Gb2N1cyhjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNiLmFwcGx5KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25CbHVyKGNiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjYi5hcHBseSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9O1xuXG4gICAgSW5wdXQuZGVmaW5lKFwic3R5bGVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc3R5bGU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQodGhpcy5pbnB1dC5zdHlsZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgSW5wdXQuZGVmaW5lKFwidmFsdWVcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIElucHV0O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlucHV0LmpzLm1hcFxuIiwiZXhwb3J0cy5rZXlib2FyZExheWVyID0gbmV3IExheWVyXG5cdHg6MCwgeTpTY3JlZW4uaGVpZ2h0LCB3aWR0aDpTY3JlZW4ud2lkdGgsIGhlaWdodDo0MzJcblx0aHRtbDpcIjxpbWcgc3R5bGU9J3dpZHRoOiAxMDAlOycgc3JjPSdtb2R1bGVzL2tleWJvYXJkLnBuZycvPlwiXG5cbiNzY3JlZW4gd2lkdGggdnMuIHNpemUgb2YgaW1hZ2Ugd2lkdGhcbmdyb3d0aFJhdGlvID0gU2NyZWVuLndpZHRoIC8gNzMyXG5pbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyXG5cbiMgRXh0ZW5kcyB0aGUgTGF5ZXJTdHlsZSBjbGFzcyB3aGljaCBkb2VzIHRoZSBwaXhlbCByYXRpbyBjYWxjdWxhdGlvbnMgaW4gZnJhbWVyXG5faW5wdXRTdHlsZSA9XG5cdE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLFxuXHRcdGNhbGN1bGF0ZVBpeGVsUmF0aW8gPSAobGF5ZXIsIHZhbHVlKSAtPlxuXHRcdFx0KHZhbHVlICogbGF5ZXIuY29udGV4dC5waXhlbE11bHRpcGxpZXIpICsgXCJweFwiXG5cblx0XHRmb250U2l6ZTogKGxheWVyKSAtPlxuXHRcdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgbGF5ZXIuX3Byb3BlcnRpZXMuZm9udFNpemUpXG5cblx0XHRsaW5lSGVpZ2h0OiAobGF5ZXIpIC0+XG5cdFx0XHQobGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCkgKyBcImVtXCJcblxuXHRcdHBhZGRpbmc6IChsYXllcikgLT5cblx0XHRcdHsgcGl4ZWxNdWx0aXBsaWVyIH0gPSBsYXllci5jb250ZXh0XG5cdFx0XHRwYWRkaW5nID0gW11cblx0XHRcdHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmdcblxuXHRcdFx0IyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG5cdFx0XHRpZiBOdW1iZXIuaXNJbnRlZ2VyKHBhZGRpbmdWYWx1ZSlcblx0XHRcdFx0cmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIHBhZGRpbmdWYWx1ZSlcblxuXHRcdFx0IyBJZiB3ZSBoYXZlIG11bHRpcGxlIHZhbHVlcyB0aGV5IGNvbWUgYXMgc3RyaW5nIChlLmcuIFwiMSAyIDMgNFwiKVxuXHRcdFx0cGFkZGluZ1ZhbHVlcyA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmcuc3BsaXQoXCIgXCIpXG5cblx0XHRcdHN3aXRjaCBwYWRkaW5nVmFsdWVzLmxlbmd0aFxuXHRcdFx0XHR3aGVuIDRcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1szXSlcblxuXHRcdFx0XHR3aGVuIDNcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHR3aGVuIDJcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cblx0XHRcdCMgUmV0dXJuIGFzIDQtdmFsdWUgc3RyaW5nIChlLmcgXCIxcHggMnB4IDNweCA0cHhcIilcblx0XHRcdFwiI3twYWRkaW5nLnRvcCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcucmlnaHQgKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLmJvdHRvbSAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcubGVmdCAqIHBpeGVsTXVsdGlwbGllcn1weFwiXG5cdClcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcyA9XG5cdHNob3duOlxuXHRcdHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRjdXJ2ZTogXCJzcHJpbmcoNTAwLDUwLDE1KVwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXQgZXh0ZW5kcyBMYXllclxuXHRAZGVmaW5lIFwic3R5bGVcIixcblx0XHRnZXQ6IC0+IEBpbnB1dC5zdHlsZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0Xy5leHRlbmQgQGlucHV0LnN0eWxlLCB2YWx1ZVxuXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAaW5wdXQudmFsdWUgPSB2YWx1ZVxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdG9wdGlvbnMuc2V0dXAgPz0gZmFsc2Vcblx0XHRvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuY2xpcCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IDYwXG5cdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gaWYgb3B0aW9ucy5zZXR1cCB0aGVuIFwicmdiYSgyNTUsIDYwLCA0NywgLjUpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcblx0XHRvcHRpb25zLmZvbnRTaXplID89IDMwXG5cdFx0b3B0aW9ucy5saW5lSGVpZ2h0ID89IDFcblx0XHRvcHRpb25zLnBhZGRpbmcgPz0gMTBcblx0XHRvcHRpb25zLnRleHQgPz0gXCJcIlxuXHRcdG9wdGlvbnMucGxhY2Vob2xkZXIgPz0gXCJcIlxuXHRcdG9wdGlvbnMudmlydHVhbEtleWJvYXJkID89IGlmIFV0aWxzLmlzTW9iaWxlKCkgdGhlbiBmYWxzZSBlbHNlIHRydWVcblx0XHRvcHRpb25zLnR5cGUgPz0gXCJ0ZXh0XCJcblx0XHRvcHRpb25zLmdvQnV0dG9uID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvQ29ycmVjdCA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9Db21wbGV0ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9DYXBpdGFsaXplID89IFwib25cIlxuXHRcdG9wdGlvbnMuc3BlbGxDaGVjayA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9mb2N1cyA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGV4dENvbG9yID89IFwiIzAwMFwiXG5cdFx0b3B0aW9ucy5mb250RmFtaWx5ID89IFwiLWFwcGxlLXN5c3RlbVwiXG5cdFx0b3B0aW9ucy5mb250V2VpZ2h0ID89IFwiNTAwXCJcblx0XHRvcHRpb25zLnN1Ym1pdCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGFiSW5kZXggPz0gMFxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG5cdFx0QF9wcm9wZXJ0aWVzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBfcHJvcGVydGllcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0XG5cdFx0QF9wcm9wZXJ0aWVzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdcblxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcj9cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXHRcdEBpbnB1dC5pZCA9IFwiaW5wdXQtI3tfLm5vdygpfVwiXG5cblx0XHQjIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0QGlucHV0LnN0eWxlLndpZHRoID0gX2lucHV0U3R5bGVbXCJ3aWR0aFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5oZWlnaHQgPSBfaW5wdXRTdHlsZVtcImhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IF9pbnB1dFN0eWxlW1wiZm9udFNpemVcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUubGluZUhlaWdodCA9IF9pbnB1dFN0eWxlW1wibGluZUhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAaW5wdXQuc3R5bGUucGFkZGluZyA9IF9pbnB1dFN0eWxlW1wicGFkZGluZ1wiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gb3B0aW9ucy50ZXh0Q29sb3Jcblx0XHRAaW5wdXQuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodFxuXG5cdFx0QGlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0XG5cdFx0QGlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGVcblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXhcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvcnJlY3RcIiwgb3B0aW9ucy5hdXRvQ29ycmVjdFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29tcGxldGVcIiwgb3B0aW9ucy5hdXRvQ29tcGxldGVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZVxuXHRcdGlmIG9wdGlvbnMuYXV0b2ZvY3VzID09IHRydWVcblx0XHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvZm9jdXNcIiwgdHJ1ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJzcGVsbGNoZWNrXCIsIG9wdGlvbnMuc3BlbGxDaGVja1xuXHRcdEBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImZvcm1cIlxuXG5cdFx0aWYgKG9wdGlvbnMuZ29CdXR0b24gJiYgIW9wdGlvbnMuc3VibWl0KSB8fCAhb3B0aW9ucy5zdWJtaXRcblx0XHRcdEBmb3JtLmFjdGlvbiA9IFwiI1wiXG5cdFx0XHRAZm9ybS5hZGRFdmVudExpc3RlbmVyIFwic3VibWl0XCIsIChldmVudCkgLT5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0QGZvcm0uYXBwZW5kQ2hpbGQgQGlucHV0XG5cdFx0QF9lbGVtZW50LmFwcGVuZENoaWxkIEBmb3JtXG5cblx0XHRAYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0QHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Igb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIEBwbGFjZWhvbGRlckNvbG9yXG5cblx0XHQjb25seSBzaG93IGhvbm9yIHZpcnR1YWwga2V5Ym9hcmQgb3B0aW9uIHdoZW4gbm90IG9uIG1vYmlsZSxcblx0XHQjb3RoZXJ3aXNlIGlnbm9yZVxuXHRcdGlmICFVdGlscy5pc01vYmlsZSgpICYmIG9wdGlvbnMudmlydHVhbEtleWJvYXJkIGlzIHRydWVcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZUN5Y2xlKClcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYW5pbWF0ZShcImRlZmF1bHRcIilcblxuXHR1cGRhdGVQbGFjZWhvbGRlckNvbG9yOiAoY29sb3IpIC0+XG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBjb2xvclxuXHRcdGlmIEBwYWdlU3R5bGU/XG5cdFx0XHRkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkIEBwYWdlU3R5bGVcblx0XHRAcGFnZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcInN0eWxlXCJcblx0XHRAcGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCJcblx0XHRjc3MgPSBcIiMje0BpbnB1dC5pZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAcGxhY2Vob2xkZXJDb2xvcn07IH1cIlxuXHRcdEBwYWdlU3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUgY3NzKVxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQgQHBhZ2VTdHlsZVxuXG5cdGZvY3VzOiAoKSAtPlxuXHRcdEBpbnB1dC5mb2N1cygpXG5cblx0b25Gb2N1czogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG5cblx0b25CbHVyOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
