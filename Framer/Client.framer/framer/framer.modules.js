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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvVmlld0NvbnRyb2xsZXIuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2NvbmMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2NvbnRhY3QuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2VtcGxveS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaGVscC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaG91cmluYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaW50ZXJwLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9sYW5nLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9uYXl5LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9uZG9iLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9yZWFkc3BlYWsuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0bW9vcmUvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3NwbGFzaC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfc3VtbWFyeS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfd2Vla2luYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfeWFzcy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvZmluZE1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvaW5wdXQtZnJhbWVyL2lucHV0LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydG1vb3JlL0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuanMiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnRtb29yZS9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs7O0FBQU0sTUFBTSxDQUFDOzs7RUFFQyxpQkFBQyxPQUFEO0FBQ1osUUFBQTs7TUFEYSxVQUFROzs7TUFDckIsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDOzs7TUFDeEIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLE9BQVE7OztNQUNoQixPQUFPLENBQUMsa0JBQW1COzs7TUFDM0IsT0FBTyxDQUFDLGlCQUFrQjs7O01BQzFCLE9BQU8sQ0FBQyxtQkFBb0I7UUFBRSxLQUFBLEVBQU8sZ0NBQVQ7UUFBMkMsSUFBQSxFQUFNLEVBQWpEOzs7O01BQzVCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsU0FBVTs7O01BQ2xCLE9BQU8sQ0FBQyxXQUFZOztJQUVwQix5Q0FBTSxPQUFOO0lBQ0EsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUVYLElBQUMsQ0FBQSxRQUFELENBQVUsV0FBVixFQUF1QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsVUFBRDtBQUN0QixZQUFBO1FBQUEsSUFBQSxHQUFPLFVBQVUsQ0FBQyxLQUFNLENBQUEsQ0FBQTtRQUN4QixJQUFHLFlBQUg7VUFFQyxJQUFJLENBQUMsSUFBTCxHQUFZO1VBQ1osSUFBSSxDQUFDLEVBQUwsQ0FBUSxNQUFNLENBQUMsS0FBZixFQUFzQixTQUFBLEdBQUEsQ0FBdEI7VUFFQSxJQUFHLEtBQUMsQ0FBQSxNQUFKO1lBQ0MsUUFBQSxHQUFXLElBQUksQ0FBQztZQUNoQixlQUFBLEdBQXNCLElBQUEsZUFBQSxDQUNyQjtjQUFBLElBQUEsRUFBTSxpQkFBTjtjQUNBLEtBQUEsRUFBTyxLQUFDLENBQUEsS0FEUjtjQUVBLE1BQUEsRUFBUSxLQUFDLENBQUEsTUFGVDtjQUdBLE1BQUEsRUFBUSxJQUhSO2FBRHFCO1lBS3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBeEIsR0FBMEM7WUFDMUMsSUFBRyxJQUFJLENBQUMsS0FBTCxJQUFjLEtBQUMsQ0FBQSxLQUFsQjtjQUNDLGVBQWUsQ0FBQyxnQkFBaEIsR0FBbUMsTUFEcEM7O1lBRUEsSUFBRyxJQUFJLENBQUMsTUFBTCxJQUFlLEtBQUMsQ0FBQSxNQUFuQjtjQUNDLGVBQWUsQ0FBQyxjQUFoQixHQUFpQyxNQURsQzs7QUFFQSxpQkFBQSwwQ0FBQTs7Y0FDQyxDQUFDLENBQUMsTUFBRixHQUFXLGVBQWUsQ0FBQztBQUQ1QjtZQUVBLElBQUksQ0FBQyxlQUFMLEdBQXVCO21CQUV2QixJQUFJLENBQUMsSUFBTCxHQUFZO2NBQUMsS0FBQSxFQUFPLEtBQUMsQ0FBQSxLQUFUO2NBQWdCLE1BQUEsRUFBUSxLQUFDLENBQUEsTUFBekI7Y0FoQmI7V0FMRDs7TUFGc0I7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXZCO0lBeUJBLFdBQUEsR0FDQztNQUFBLGFBQUEsRUFBZSxFQUFmO01BQ0EsTUFBQSxFQUNDO1FBQUEsT0FBQSxFQUNDO1VBQUEsSUFBQSxFQUFNO1lBQUMsT0FBQSxFQUFTLENBQVY7V0FBTjtVQUNBLEVBQUEsRUFBSTtZQUFDLE9BQUEsRUFBUyxDQUFWO1dBREo7U0FERDtPQUZEO01BS0EsTUFBQSxFQUNDO1FBQUEsT0FBQSxFQUNDO1VBQUEsSUFBQSxFQUFNO1lBQUMsS0FBQSxFQUFPLEdBQVI7WUFBYSxPQUFBLEVBQVMsQ0FBdEI7V0FBTjtVQUNBLEVBQUEsRUFBSTtZQUFDLEtBQUEsRUFBTyxDQUFSO1lBQVcsT0FBQSxFQUFTLENBQXBCO1dBREo7U0FERDtPQU5EO01BU0EsT0FBQSxFQUNDO1FBQUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJO1lBQUMsS0FBQSxFQUFPLEdBQVI7WUFBYSxPQUFBLEVBQVMsQ0FBdEI7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJLEVBQUo7U0FIRDtPQVZEO01BY0EsU0FBQSxFQUNDO1FBQUEsT0FBQSxFQUNDO1VBQUEsSUFBQSxFQUFNO1lBQUMsQ0FBQSxFQUFHLElBQUMsQ0FBQSxNQUFMO1dBQU47VUFDQSxFQUFBLEVBQUk7WUFBQyxDQUFBLEVBQUcsQ0FBSjtXQURKO1NBREQ7T0FmRDtNQWtCQSxZQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUw7V0FBTjtVQUNBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFKO1dBREo7U0FERDtPQW5CRDtNQXNCQSxXQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxJQUFBLEVBQU0sQ0FBUDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUREO09BdkJEO01BMEJBLFdBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLElBQUEsRUFBTSxDQUFQO1dBQU47VUFDQSxFQUFBLEVBQUk7WUFBQyxJQUFBLEVBQU0sSUFBQyxDQUFBLEtBQVI7V0FESjtTQUREO09BM0JEO01BOEJBLFFBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFDLElBQUMsQ0FBQSxNQUFOO1dBQUo7U0FERDtRQUVBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsTUFBTDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BL0JEO01Bb0NBLFdBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLElBQUEsRUFBTSxDQUFQO1dBQUo7U0FERDtRQUVBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBTDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BckNEO01BMENBLFVBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsTUFBTDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxDQUFBLEVBQUcsQ0FBQyxJQUFDLENBQUEsTUFBTjtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BM0NEO01BZ0RBLFVBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBTDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxJQUFBLEVBQU0sQ0FBUDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BakREO01Bc0RBLFdBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFDLENBQUMsSUFBQyxDQUFBLEtBQUQsR0FBTyxDQUFSLENBQUw7WUFBaUIsVUFBQSxFQUFZLEVBQTdCO1dBQUo7U0FERDtRQUVBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBTDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BdkREO01BNERBLFVBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBRCxHQUFPLENBQVg7WUFBYyxVQUFBLEVBQVksRUFBMUI7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsSUFBQSxFQUFNO1lBQUMsQ0FBQSxFQUFHLENBQUMsSUFBQyxDQUFBLEtBQU47V0FBTjtVQUNBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFKO1dBREo7U0FIRDtPQTdERDtNQWtFQSxZQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUk7WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUw7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsSUFBQSxFQUFNO1lBQUMsQ0FBQSxFQUFHLENBQUMsQ0FBQyxJQUFDLENBQUEsS0FBRCxHQUFPLENBQVIsQ0FBTDtZQUFpQixVQUFBLEVBQVksRUFBN0I7V0FBTjtVQUNBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFKO1lBQU8sVUFBQSxFQUFZLEdBQW5CO1dBREo7U0FIRDtPQW5FRDtNQXdFQSxXQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUk7WUFBQyxJQUFBLEVBQU0sQ0FBUDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUQsR0FBTyxDQUFYO1lBQWMsVUFBQSxFQUFZLEVBQTFCO1dBQU47VUFDQSxFQUFBLEVBQUk7WUFBQyxDQUFBLEVBQUcsQ0FBSjtZQUFPLFVBQUEsRUFBWSxHQUFuQjtXQURKO1NBSEQ7T0F6RUQ7TUE4RUEsVUFBQSxFQUNDO1FBQUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJO1lBQUMsSUFBQSxFQUFNLENBQVA7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJLEVBQUo7U0FIRDtPQS9FRDtNQW1GQSxhQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUk7WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLEtBQUw7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJLEVBQUo7U0FIRDtPQXBGRDtNQXdGQSxZQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUk7WUFBQyxDQUFBLEVBQUcsSUFBQyxDQUFBLE1BQUw7V0FBSjtTQUREO1FBRUEsT0FBQSxFQUNDO1VBQUEsRUFBQSxFQUFJLEVBQUo7U0FIRDtPQXpGRDtNQTZGQSxZQUFBLEVBQ0M7UUFBQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUk7WUFBQyxJQUFBLEVBQU0sQ0FBUDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxFQUFBLEVBQUksRUFBSjtTQUhEO09BOUZEOztJQW9HRCxXQUFXLENBQUMsT0FBWixHQUFzQixXQUFXLENBQUM7SUFDbEMsV0FBVyxDQUFDLFFBQVosR0FBdUIsV0FBVyxDQUFDO0lBQ25DLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLFdBQVcsQ0FBQztJQUNqQyxXQUFXLENBQUMsT0FBWixHQUFzQixXQUFXLENBQUM7SUFHbEMsTUFBTSxDQUFDLGNBQVAsR0FBd0I7SUFDeEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7SUFDdkIsS0FBSyxDQUFBLFNBQUUsQ0FBQSxnQkFBUCxHQUEwQixTQUFDLEVBQUQ7YUFBUSxJQUFDLENBQUEsRUFBRCxDQUFJLE1BQU0sQ0FBQyxjQUFYLEVBQTJCLEVBQTNCO0lBQVI7SUFDMUIsS0FBSyxDQUFBLFNBQUUsQ0FBQSxlQUFQLEdBQXlCLFNBQUMsRUFBRDthQUFRLElBQUMsQ0FBQSxFQUFELENBQUksTUFBTSxDQUFDLGFBQVgsRUFBMEIsRUFBMUI7SUFBUjtJQUV6QixDQUFDLENBQUMsSUFBRixDQUFPLFdBQVAsRUFBb0IsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFDLFNBQUQsRUFBWSxJQUFaO0FBRW5CLFlBQUE7UUFBQSxJQUFHLE9BQU8sQ0FBQyxRQUFYO1VBQ0MsTUFBQSxHQUFTLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDL0IsZUFBQSx3Q0FBQTs7WUFDQyxJQUFHLENBQUMsQ0FBQyxRQUFGLENBQVcsR0FBRyxDQUFDLElBQWYsRUFBcUIsSUFBckIsQ0FBSDtjQUNDLGNBQUEsR0FBaUI7Y0FDakIsR0FBRyxDQUFDLE9BQUosQ0FBWSxTQUFBO0FBQ1gsb0JBQUE7Z0JBQUEsSUFBQSxHQUFPLElBQUMsQ0FBQSxJQUFJLENBQUMsS0FBTixDQUFZLEdBQVosQ0FBaUIsQ0FBQSxDQUFBO2dCQUN4QixRQUFBLEdBQVcsSUFBQyxDQUFBLElBQUksQ0FBQyxPQUFOLENBQWMsSUFBQSxHQUFLLEdBQW5CLEVBQXVCLEVBQXZCO2dCQUNYLFFBQUEsR0FBVyxRQUFRLENBQUMsT0FBVCxDQUFpQixNQUFqQixFQUF5QixFQUF6Qjt1QkFDWCxjQUFlLENBQUEsSUFBQSxDQUFmLENBQXFCLENBQUMsQ0FBQyxJQUFGLENBQU8sTUFBUCxFQUFlLFNBQUMsQ0FBRDt5QkFBTyxDQUFDLENBQUMsSUFBRixLQUFVO2dCQUFqQixDQUFmLENBQXJCO2NBSlcsQ0FBWixFQUZEOztBQURELFdBRkQ7O2VBV0EsS0FBRSxDQUFBLElBQUEsQ0FBRixHQUFVLFNBQUMsT0FBRCxFQUFVLGdCQUFWO0FBRVQsY0FBQTs7WUFGbUIsbUJBQW1CLEtBQUMsQ0FBQTs7VUFFdkMsSUFBVSxPQUFBLEtBQVcsS0FBQyxDQUFBLFdBQXRCO0FBQUEsbUJBQUE7O1VBS0EsT0FBTyxDQUFDLE1BQVIsR0FBaUI7VUFDakIsT0FBTyxDQUFDLFVBQVIsQ0FBQTtVQUdBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCO1lBQUMsQ0FBQSxFQUFFLENBQUg7WUFBTSxDQUFBLEVBQUcsQ0FBVDs7VUFDaEIsT0FBTyxDQUFDLE9BQVIsR0FBa0I7VUFDbEIsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7VUFDaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7O2VBR1QsQ0FBRSxLQUFkLEdBQXNCO2NBQUMsQ0FBQSxFQUFHLENBQUo7Y0FBTyxDQUFBLEVBQUcsQ0FBVjs7OztnQkFDVixDQUFFLEtBQWQsNENBQXVDLENBQUU7O1VBQ3pDLE9BQUEsR0FBVSxDQUFDLENBQUMsTUFBRixDQUFTO1lBQUMsVUFBQSwyQ0FBNkIsQ0FBRSxXQUFoQztXQUFULEVBQThDLGdCQUE5QztVQUNWLENBQUMsQ0FBQyxRQUFGLENBQVcsT0FBWCxFQUFvQjtZQUFFLFVBQUEsRUFBWSxFQUFkO1dBQXBCO1VBQ0EsUUFBQSw0Q0FBdUIsQ0FBRSxPQUFkLENBQXNCLE9BQXRCO1VBR1gsT0FBTyxDQUFDLEtBQVIsNENBQWlDLENBQUU7VUFDbkMsUUFBQSxHQUFXLE9BQU8sQ0FBQyxPQUFSLENBQWdCLENBQUMsQ0FBQyxNQUFGLENBQVM7WUFBQyxVQUFBLDJDQUE2QixDQUFFLFdBQWhDO1dBQVQsRUFBOEMsZ0JBQTlDLENBQWhCO1VBR1gsSUFBRyxDQUFDLENBQUMsUUFBRixDQUFXLElBQVgsRUFBaUIsS0FBakIsQ0FBSDtZQUNDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLEtBQUMsQ0FBQSxXQUFyQjtZQUNBLFFBQVEsQ0FBQyxFQUFULENBQVksTUFBTSxDQUFDLFlBQW5CLEVBQWlDLFNBQUE7cUJBQUcsS0FBQyxDQUFBLFdBQVcsQ0FBQyxZQUFiLENBQUE7WUFBSCxDQUFqQyxFQUZEO1dBQUEsTUFBQTtZQUlDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLEtBQUMsQ0FBQSxXQUFyQixFQUpEOztVQU1BLEtBQUMsQ0FBQSxJQUFELENBQU0sTUFBTSxDQUFDLGNBQWIsRUFBNkIsS0FBQyxDQUFBLFdBQTlCLEVBQTJDLE9BQTNDO1VBSUEsS0FBQyxDQUFBLHdCQUFELENBQTBCLElBQTFCLEVBQWdDLFFBQWhDLEVBQTBDLFFBQTFDO1VBQ0EsS0FBQyxDQUFBLFdBQUQsR0FBZTtVQUNmLEtBQUMsQ0FBQSxJQUFELENBQU0scUJBQU4sRUFBNkIsS0FBQyxDQUFBLFlBQTlCO1VBQ0EsS0FBQyxDQUFBLElBQUQsQ0FBTSxvQkFBTixFQUE0QixLQUFDLENBQUEsV0FBN0I7VUFFQSxJQUFHLFFBQVEsQ0FBQyxXQUFaO1lBQ0MsSUFBQSxHQUFPLFNBRFI7V0FBQSxNQUFBO1lBR0MsSUFBQSxHQUFPLFNBSFI7O2dDQUlBLElBQUksQ0FBRSxFQUFOLENBQVMsTUFBTSxDQUFDLFlBQWhCLEVBQThCLFNBQUE7bUJBQzdCLEtBQUMsQ0FBQSxJQUFELENBQU0sTUFBTSxDQUFDLGFBQWIsRUFBNEIsS0FBQyxDQUFBLFlBQTdCLEVBQTJDLEtBQUMsQ0FBQSxXQUE1QztVQUQ2QixDQUE5QjtRQS9DUztNQWJTO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQjtJQWdFQSxJQUFHLCtCQUFIO01BQ0MsV0FBQSxHQUFjLENBQUMsQ0FBQyxJQUFGLENBQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUE3QixFQUFzQyxTQUFDLENBQUQ7ZUFBTyxDQUFDLENBQUMsSUFBRixLQUFVLE9BQU8sQ0FBQztNQUF6QixDQUF0QztNQUNkLElBQUcsbUJBQUg7UUFBcUIsSUFBQyxDQUFBLGFBQUQsQ0FBZSxXQUFmLEVBQXJCO09BRkQ7O0lBSUEsSUFBRywyQkFBSDtNQUNDLElBQUMsQ0FBQSxhQUFELENBQWUsT0FBTyxDQUFDLFdBQXZCLEVBREQ7O0lBR0EsSUFBRyw4QkFBSDtNQUNDLFdBQUEsR0FBYyxDQUFDLENBQUMsTUFBRixDQUFTLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBL0IsRUFBd0MsU0FBQyxDQUFEO2VBQU8sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxDQUFDLENBQUMsSUFBYixFQUFtQixPQUFPLENBQUMsY0FBM0I7TUFBUCxDQUF4QztBQUNkLFdBQUEsNkNBQUE7O1FBQ0MsR0FBRyxDQUFDLE9BQUosQ0FBWSxDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUFHLEtBQUMsQ0FBQSxJQUFELENBQUE7VUFBSDtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBWjtBQURELE9BRkQ7O0VBOU5ZOztFQW1PYixPQUFDLENBQUEsTUFBRCxDQUFRLGNBQVIsRUFDRTtJQUFBLEdBQUEsRUFBSyxTQUFBO2FBQUcsSUFBQyxDQUFBLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQztJQUFmLENBQUw7R0FERjs7b0JBR0Esd0JBQUEsR0FBMEIsU0FBQyxJQUFELEVBQU0saUJBQU4sRUFBd0IsaUJBQXhCO1dBQ3pCLElBQUMsQ0FBQSxPQUFPLENBQUMsT0FBVCxDQUNDO01BQUEsSUFBQSxFQUFNLElBQUMsQ0FBQSxXQUFQO01BQ0EsYUFBQSxFQUFlLElBRGY7TUFFQSxpQkFBQSxFQUFtQixpQkFGbkI7TUFHQSxpQkFBQSxFQUFtQixpQkFIbkI7S0FERDtFQUR5Qjs7b0JBTzFCLElBQUEsR0FBTSxTQUFBO0FBQ0wsUUFBQTtJQUFBLFFBQUEsR0FBVyxJQUFDLENBQUEsT0FBUSxDQUFBLENBQUE7SUFDcEIsSUFBRyxxQkFBSDtNQUVDLElBQUcsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxRQUFRLENBQUMsYUFBcEIsRUFBbUMsS0FBbkMsQ0FBSDtRQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBZCxDQUFBLEVBREQ7O01BR0EsTUFBQSxHQUFTLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUEzQixDQUFBO01BQ1QsT0FBQSxHQUFVLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUEzQixDQUFBO01BRVYsTUFBTSxDQUFDLEtBQVAsQ0FBQTtNQUNBLE9BQU8sQ0FBQyxLQUFSLENBQUE7TUFFQSxJQUFDLENBQUEsV0FBRCxHQUFlLFFBQVEsQ0FBQztNQUN4QixJQUFDLENBQUEsT0FBTyxDQUFDLEtBQVQsQ0FBQTthQUNBLE9BQU8sQ0FBQyxFQUFSLENBQVcsTUFBTSxDQUFDLFlBQWxCLEVBQWdDLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtpQkFBRyxLQUFDLENBQUEsV0FBVyxDQUFDLFlBQWIsQ0FBQTtRQUFIO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFoQyxFQWJEOztFQUZLOzs7O0dBL09zQjs7OztBQ0E3QixJQUFBOztBQUFBLE1BQVUsT0FBQSxDQUFRLFlBQVIsQ0FBVixFQUFDLFNBQUQsRUFBSTs7QUFFSixNQUFNLENBQUMsYUFBUCxHQUEyQixJQUFBLEtBQUEsQ0FDekI7RUFBQSxJQUFBLEVBQU0sZUFBTjtFQUNBLENBQUEsRUFBRyxDQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxlQUFBLEVBQWlCLGFBSGpCO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtDQUR5Qjs7QUFRM0IsZUFBQSxHQUFzQixJQUFBLEtBQUEsQ0FDcEI7RUFBQSxJQUFBLEVBQU0saUJBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLElBTFA7RUFNQSxNQUFBLEVBQVEsSUFOUjtDQURvQjs7QUFTdEIsSUFBQSxHQUFXLElBQUEsS0FBQSxDQUNUO0VBQUEsSUFBQSxFQUFNLE1BQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7Q0FEUzs7QUFTWCxtQkFBQSxHQUEwQixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0scUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFTMUIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixpQkFBQSxHQUF3QixJQUFBLFNBQUEsQ0FDdEI7RUFBQSxJQUFBLEVBQU0sbUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxLQUFLLENBQUMsTUFGVDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsSUFBQSxFQUFNLGtGQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7RUFVQSxLQUFBLEVBQU8sSUFWUDtDQURzQjs7QUFheEIsaUJBQUEsR0FBd0IsSUFBQSxLQUFBLENBQ3RCO0VBQUEsSUFBQSxFQUFNLG1CQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEc0I7O0FBU3hCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsaUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsbUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsaUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxLQUFLLENBQUMsTUFIVDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLElBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxtQkFWUDtDQURhOztBQWFmLGtCQUFBLEdBQXlCLElBQUEsS0FBQSxDQUN2QjtFQUFBLElBQUEsRUFBTSxvQkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHVCOztBQVN6QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGtCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLGtCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsS0FBSyxDQUFDLE1BSFQ7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxLQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sbUJBVlA7Q0FEYTs7QUFhZix1QkFBQSxHQUE4QixJQUFBLEtBQUEsQ0FDNUI7RUFBQSxJQUFBLEVBQU0seUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxpQkFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLGtCQUpQO0VBS0EsTUFBQSxFQUFRLGtCQUxSO0VBTUEsS0FBQSxFQUFPLG9DQU5QO0NBRDRCOztBQVM5QixDQUFBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxFQUF2QixDQUEwQixNQUFNLENBQUMsR0FBakMsRUFBc0MsU0FBQTtFQUNwQyxJQUFJLENBQUMsSUFBTCxHQUFZO1NBQ1osSUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFBLENBQUUsZUFBRixDQUFkO0FBRm9DLENBQXRDOztBQUdBLENBQUEsQ0FBRSxvQkFBRixDQUF1QixDQUFDLEVBQXhCLENBQTJCLE1BQU0sQ0FBQyxHQUFsQyxFQUF1QyxTQUFBO0VBQ3JDLElBQUksQ0FBQyxJQUFMLEdBQVk7RUFDWixJQUFJLENBQUMsUUFBTCxDQUFjLENBQUEsQ0FBRSxZQUFGLENBQWQ7U0FDQSxPQUFBLENBQUE7QUFIcUMsQ0FBdkM7Ozs7QUMzSkEsSUFBQTs7QUFBQSxNQUFVLE9BQUEsQ0FBUSxZQUFSLENBQVYsRUFBQyxTQUFELEVBQUk7O0FBQ0osV0FBQSxHQUFjLE9BQUEsQ0FBUSxvQkFBUjs7QUFFZCxNQUFNLENBQUMsVUFBUCxHQUF3QixJQUFBLEtBQUEsQ0FDdEI7RUFBQSxJQUFBLEVBQU0sWUFBTjtFQUNBLENBQUEsRUFBRyxDQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxlQUFBLEVBQWlCLGFBSGpCO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtDQURzQjs7QUFReEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxVQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxJQU5SO0NBRGlCOztBQVNuQixLQUFBLEdBQVksSUFBQSxLQUFBLENBQ1Y7RUFBQSxJQUFBLEVBQU0sT0FBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtDQURVOztBQVNaLGdCQUFBLEdBQXVCLElBQUEsS0FBQSxDQUNyQjtFQUFBLElBQUEsRUFBTSxrQkFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsSUFISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHFCOztBQVN2QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGdCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLGdCQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLE1BTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQURhOztBQWFmLGlCQUFBLEdBQXdCLElBQUEsU0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxtQkFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLElBQUEsRUFBTSxpQkFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRHNCOztBQVl4QixnQkFBQSxHQUF1QixJQUFBLEtBQUEsQ0FDckI7RUFBQSxJQUFBLEVBQU0sa0JBQU47RUFDQSxNQUFBLEVBQVEsWUFEUjtFQUVBLENBQUEsRUFBRyxJQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURxQjs7QUFTdkIsZ0JBQWdCLENBQUMsS0FBakIsQ0FBdUIsU0FBQTtFQUNyQixJQUFJLENBQUMsSUFBTCxHQUFZLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQztFQUMxQixJQUFJLENBQUMsS0FBTCxHQUFhLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQztFQUM1QixJQUFJLENBQUMsS0FBTCxHQUFhLENBQUEsQ0FBRSxXQUFGLENBQWMsQ0FBQztTQUM1QixJQUFJLENBQUMsUUFBTCxDQUFjLENBQUEsQ0FBRSxlQUFGLENBQWQ7QUFKcUIsQ0FBdkI7O0FBTUEsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxnQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxnQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sTUFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGE7O0FBWWYsZ0JBQUEsR0FBdUIsSUFBQSxLQUFBLENBQ3JCO0VBQUEsSUFBQSxFQUFNLGtCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEcUI7O0FBU3ZCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsZ0JBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsb0JBUmI7RUFTQSxXQUFBLEVBQWEsRUFUYjtDQURpQjs7QUFZbkIsSUFBQSxHQUFXLElBQUEsU0FBQSxDQUNUO0VBQUEsSUFBQSxFQUFNLE9BQU47RUFDQSxNQUFBLEVBQVEsZ0JBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE1BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsTUFSWDtFQVNBLEtBQUEsRUFBTyxxQkFUUDtDQURTOztBQVlYLGlCQUFBLEdBQXdCLElBQUEsS0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxtQkFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHNCOztBQVN4QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGlCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLEVBVGI7Q0FEaUI7O0FBWW5CLEtBQUEsR0FBWSxJQUFBLFNBQUEsQ0FDVjtFQUFBLElBQUEsRUFBTSxPQUFOO0VBQ0EsTUFBQSxFQUFRLGlCQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxPQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLE1BUlg7RUFTQSxLQUFBLEVBQU8scUJBVFA7Q0FEVTs7QUFZWixpQkFBQSxHQUF3QixJQUFBLEtBQUEsQ0FDdEI7RUFBQSxJQUFBLEVBQU0sbUJBQU47RUFDQSxNQUFBLEVBQVEsWUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURzQjs7QUFTeEIsYUFBQSxHQUFvQixJQUFBLEtBQUEsQ0FDbEI7RUFBQSxJQUFBLEVBQU0sZUFBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxvQkFSYjtFQVNBLFdBQUEsRUFBYSxFQVRiO0NBRGtCOztBQVlwQixLQUFBLEdBQVksSUFBQSxTQUFBLENBQ1Y7RUFBQSxJQUFBLEVBQU0sT0FBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sT0FKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxNQVJYO0VBU0EsS0FBQSxFQUFPLHFCQVRQO0NBRFU7O0FBWVosZ0JBQUEsR0FBdUIsSUFBQSxLQUFBLENBQ3JCO0VBQUEsSUFBQSxFQUFNLGtCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsaUJBTFI7RUFNQSxLQUFBLEVBQU8sNkJBTlA7Q0FEcUI7O0FBU3ZCLGVBQUEsR0FBc0IsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGlCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsa0JBTFI7RUFNQSxLQUFBLEVBQU8sNEJBTlA7Q0FEb0I7O0FBU3RCLGVBQUEsR0FBc0IsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGlCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsa0JBTFI7RUFNQSxLQUFBLEVBQU8sNEJBTlA7Q0FEb0I7Ozs7QUN2T3RCLElBQUE7O0FBQUEsTUFBTSxDQUFDLGFBQVAsR0FBMkIsSUFBQSxLQUFBLENBQ3pCO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxDQUFBLEVBQUcsQ0FESDtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsZUFBQSxFQUFpQixhQUhqQjtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7Q0FEeUI7O0FBUTNCLGVBQUEsR0FBc0IsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGlCQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxJQUxQO0VBTUEsTUFBQSxFQUFRLElBTlI7Q0FEb0I7O0FBU3RCLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FDVDtFQUFBLElBQUEsRUFBTSxNQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRFM7O0FBU1gsbUJBQUEsR0FBMEIsSUFBQSxLQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxJQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEd0I7O0FBUzFCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsd0JBQUEsR0FBK0IsSUFBQSxTQUFBLENBQzdCO0VBQUEsSUFBQSxFQUFNLDBCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsSUFBQSxFQUFNLHVCQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FENkI7O0FBWS9CLHNCQUFBLEdBQTZCLElBQUEsS0FBQSxDQUMzQjtFQUFBLElBQUEsRUFBTSx3QkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLGtCQUxSO0VBTUEsS0FBQSxFQUFPLG1DQU5QO0NBRDJCOztBQVM3QixpQkFBQSxHQUF3QixJQUFBLEtBQUEsQ0FDdEI7RUFBQSxJQUFBLEVBQU0sbUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURzQjs7QUFTeEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxtQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sWUFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGE7O0FBWWYsbUJBQUEsR0FBMEIsSUFBQSxLQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEd0I7O0FBUzFCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsbUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLGVBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlmLHFCQUFBLEdBQTRCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSx1QkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVM1QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLHFCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG1CQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLHFCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSx5QkFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGE7O0FBWWYsdUJBQUEsR0FBOEIsSUFBQSxLQUFBLENBQzVCO0VBQUEsSUFBQSxFQUFNLHlCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FENEI7O0FBUzlCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsdUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsbUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsdUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLG9CQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEYTs7QUFZZix1QkFBQSxHQUE4QixJQUFBLEtBQUEsQ0FDNUI7RUFBQSxJQUFBLEVBQU0seUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUQ0Qjs7QUFTOUIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSx1QkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxtQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSx1QkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sMEJBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOzs7O0FDMU9mLElBQUE7O0FBQUEsTUFBVSxPQUFBLENBQVEsWUFBUixDQUFWLEVBQUMsU0FBRCxFQUFJOztBQUVKLE1BQU0sQ0FBQyxPQUFQLEdBQXFCLElBQUEsS0FBQSxDQUNuQjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0NBRG1COztBQVFyQixTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNkO0VBQUEsSUFBQSxFQUFNLFdBQU47RUFDQSxNQUFBLEVBQVEsT0FEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLElBTFA7RUFNQSxNQUFBLEVBQVEsSUFOUjtDQURjOztBQVNoQixJQUFBLEdBQVcsSUFBQSxLQUFBLENBQ1Q7RUFBQSxJQUFBLEVBQU0sTUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtDQURTOztBQVNYLFdBQUEsR0FBa0IsSUFBQSxTQUFBLENBQ2hCO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxJQUFBLEVBQU0sNENBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURnQjs7QUFZbEIsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxLQUFBLEVBQU8sd0JBTlA7Q0FEZ0I7O0FBU2xCLGFBQUEsR0FBb0IsSUFBQSxLQUFBLENBQ2xCO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURrQjs7QUFTcEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRGdCOztBQVFsQixXQUFXLENBQUMsRUFBWixDQUFlLE1BQU0sQ0FBQyxHQUF0QixFQUEyQixTQUFBO0VBQ3pCLElBQUksQ0FBQyxJQUFMLEdBQVk7U0FDWixJQUFJLENBQUMsUUFBTCxDQUFjLENBQUEsQ0FBRSxjQUFGLENBQWQ7QUFGeUIsQ0FBM0I7O0FBSUEsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxXQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG1CQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sSUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLG1CQVZQO0NBRGE7O0FBYWYsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRGlCOztBQVFuQixZQUFZLENBQUMsRUFBYixDQUFnQixNQUFNLENBQUMsR0FBdkIsRUFBNEIsU0FBQTtFQUMxQixJQUFJLENBQUMsSUFBTCxHQUFZO1NBQ1osSUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFBLENBQUUsY0FBRixDQUFkO0FBRjBCLENBQTVCOztBQUlBLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsWUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLEtBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxtQkFWUDtDQURhOzs7O0FDaEpmLElBQUE7O0FBQUEsTUFBVSxPQUFBLENBQVEsWUFBUixDQUFWLEVBQUMsU0FBRCxFQUFJOztBQUNKLFdBQUEsR0FBYyxPQUFBLENBQVEsb0JBQVI7O0FBRWQsTUFBTSxDQUFDLGFBQVAsR0FBMkIsSUFBQSxLQUFBLENBQ3pCO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxDQUFBLEVBQUcsQ0FESDtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsZUFBQSxFQUFpQixhQUhqQjtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7Q0FEeUI7O0FBUTNCLGVBQUEsR0FBc0IsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGlCQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxJQUxQO0VBTUEsTUFBQSxFQUFRLElBTlI7Q0FEb0I7O0FBU3RCLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FDVDtFQUFBLElBQUEsRUFBTSxNQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRFM7O0FBU1gscUJBQUEsR0FBNEIsSUFBQSxLQUFBLENBQzFCO0VBQUEsSUFBQSxFQUFNLHVCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxJQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEMEI7O0FBUzVCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEscUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEscUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsbUJBQUEsR0FBMEIsSUFBQSxTQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsSUFBQSxFQUFNLHFDQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEd0I7O0FBWTFCLG9CQUFBLEdBQTJCLElBQUEsU0FBQSxDQUN6QjtFQUFBLElBQUEsRUFBTSxzQkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLElBQUEsRUFBTSxzQ0FKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRHlCOztBQVkzQixzQkFBQSxHQUE2QixJQUFBLEtBQUEsQ0FDM0I7RUFBQSxJQUFBLEVBQU0sd0JBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxrQkFMUjtFQU1BLEtBQUEsRUFBTyxtQ0FOUDtDQUQyQjs7QUFTN0IsbUJBQUEsR0FBMEIsSUFBQSxLQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxJQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEd0I7O0FBUzFCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE1BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlmLG1CQUFBLEdBQTBCLElBQUEsS0FBQSxDQUN4QjtFQUFBLElBQUEsRUFBTSxxQkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHdCOztBQVMxQixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLG1CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLEVBVGI7Q0FEaUI7O0FBWW5CLFVBQUEsR0FBaUIsSUFBQSxTQUFBLENBQ2Y7RUFBQSxJQUFBLEVBQU0sWUFBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxNQUFBLEVBQVEsbUJBQW1CLENBQUMsTUFKNUI7RUFLQSxJQUFBLEVBQU0sR0FMTjtDQURlOztBQU9qQixVQUFVLENBQUMsS0FBWCxHQUNFO0VBQUEsUUFBQSxFQUFVLE1BQVY7RUFDQSxVQUFBLEVBQVksYUFEWjtFQUVBLFVBQUEsRUFBWSxPQUZaO0VBR0EsU0FBQSxFQUFXLE1BSFg7RUFJQSxLQUFBLEVBQU8scUJBSlA7OztBQU9GLFVBQUEsR0FBaUIsSUFBQSxXQUFXLENBQUMsS0FBWixDQUNmO0VBQUEsSUFBQSxFQUFNLFlBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsTUFBQSxFQUFRLG1CQUFtQixDQUFDLE1BSjVCO0VBS0EsS0FBQSxFQUFNLEdBTE47RUFNQSxJQUFBLEVBQU0sTUFOTjtFQU9BLElBQUEsRUFBTSxRQVBOO0NBRGU7O0FBU2pCLFVBQVUsQ0FBQyxLQUFYLEdBQ0U7RUFBQSxRQUFBLEVBQVUsTUFBVjtFQUNBLFVBQUEsRUFBWSxhQURaO0VBRUEsVUFBQSxFQUFZLE9BRlo7RUFHQSxTQUFBLEVBQVcsTUFIWDtFQUlBLEtBQUEsRUFBTyxxQkFKUDs7O0FBTUYsVUFBVSxDQUFDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFNBQUE7RUFDckIsSUFBRyxDQUFDLFlBQVksQ0FBQyxLQUFiLEtBQXdCLENBQUMsRUFBQSxJQUFNLElBQVAsQ0FBekIsQ0FBQSxJQUEyQyxDQUFDLFVBQVUsQ0FBQyxLQUFYLEtBQXNCLENBQUMsRUFBQSxJQUFNLE1BQVAsQ0FBdkIsQ0FBOUM7V0FDRSxtQkFBbUIsQ0FBQyxPQUFwQixHQUE4QixLQURoQzs7QUFEcUIsQ0FBdkI7O0FBR0EsVUFBVSxDQUFDLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFNBQUMsS0FBRDtFQUNyQixJQUFHLEtBQUssQ0FBQyxLQUFOLEtBQWUsRUFBbEI7V0FBMEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFqQixDQUFBLEVBQTFCOztBQURxQixDQUF2Qjs7QUFFQSxVQUFVLENBQUMsT0FBWCxDQUFtQixTQUFBO0VBQ2pCLElBQUcsSUFBQyxDQUFBLEtBQUQsS0FBVSxNQUFiO1dBQXlCLElBQUMsQ0FBQSxLQUFELEdBQVMsR0FBbEM7O0FBRGlCLENBQW5COztBQUdBLG9CQUFBLEdBQTJCLElBQUEsS0FBQSxDQUN6QjtFQUFBLElBQUEsRUFBTSxzQkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHlCOztBQVMzQixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLEVBVGI7Q0FEaUI7O0FBWW5CLFlBQUEsR0FBbUIsSUFBQSxXQUFXLENBQUMsS0FBWixDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLElBQUEsRUFBTSxnQkFKTjtFQUtBLElBQUEsRUFBTSxRQUxOO0VBTUEsTUFBQSxFQUFRLG1CQUFtQixDQUFDLE1BTjVCO0VBT0EsS0FBQSxFQUFNLEdBUE47Q0FEaUI7O0FBU25CLFlBQVksQ0FBQyxLQUFiLEdBQ0U7RUFBQSxRQUFBLEVBQVUsTUFBVjtFQUNBLFVBQUEsRUFBWSxhQURaO0VBRUEsVUFBQSxFQUFZLEtBRlo7RUFHQSxTQUFBLEVBQVcsTUFIWDtFQUlBLEtBQUEsRUFBTyxxQkFKUDs7O0FBTUYsWUFBWSxDQUFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsU0FBQTtFQUN2QixJQUFHLENBQUMsWUFBWSxDQUFDLEtBQWIsS0FBd0IsQ0FBQyxFQUFBLElBQU0sSUFBUCxDQUF6QixDQUFBLElBQTJDLENBQUMsVUFBVSxDQUFDLEtBQVgsS0FBc0IsQ0FBQyxFQUFBLElBQU0sTUFBUCxDQUF2QixDQUE5QztXQUNFLG1CQUFtQixDQUFDLE9BQXBCLEdBQThCLEtBRGhDOztBQUR1QixDQUF6Qjs7QUFHQSxZQUFZLENBQUMsRUFBYixDQUFnQixPQUFoQixFQUF5QixTQUFDLEtBQUQ7RUFDdkIsSUFBRyxLQUFLLENBQUMsS0FBTixLQUFlLEVBQWxCO1dBQTBCLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBbkIsQ0FBQSxFQUExQjs7QUFEdUIsQ0FBekI7O0FBR0EsbUJBQW1CLENBQUMsT0FBcEIsR0FBOEI7O0FBQzlCLG1CQUFtQixDQUFDLEVBQXBCLENBQXVCLE1BQU0sQ0FBQyxHQUE5QixFQUFtQyxTQUFBO0VBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBWixHQUFzQixNQUFBLENBQU8sWUFBWSxDQUFDLEtBQXBCLENBQUEsR0FBMkIsTUFBQSxDQUFPLFVBQVUsQ0FBQyxLQUFsQjtTQUNqRCxJQUFJLENBQUMsUUFBTCxDQUFjLENBQUEsQ0FBRSxZQUFGLENBQWQ7QUFGaUMsQ0FBbkM7Ozs7QUN6T0EsSUFBQTs7QUFBQSxNQUFNLENBQUMsY0FBUCxHQUE0QixJQUFBLEtBQUEsQ0FDMUI7RUFBQSxJQUFBLEVBQU0sZ0JBQU47RUFDQSxDQUFBLEVBQUcsQ0FESDtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsZUFBQSxFQUFpQixhQUhqQjtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7Q0FEMEI7O0FBUTVCLFdBQUEsR0FBa0IsSUFBQSxLQUFBLENBQ2hCO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLElBTFA7RUFNQSxNQUFBLEVBQVEsSUFOUjtDQURnQjs7QUFTbEIsSUFBQSxHQUFXLElBQUEsS0FBQSxDQUNUO0VBQUEsSUFBQSxFQUFNLE1BQU47RUFDQSxNQUFBLEVBQVEsV0FEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7Q0FEUzs7QUFTWCxlQUFBLEdBQXNCLElBQUEsS0FBQSxDQUNwQjtFQUFBLElBQUEsRUFBTSxpQkFBTjtFQUNBLE1BQUEsRUFBUSxXQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsSUFISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRG9COztBQVN0QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixvQkFBQSxHQUEyQixJQUFBLFNBQUEsQ0FDekI7RUFBQSxJQUFBLEVBQU0sc0JBQU47RUFDQSxNQUFBLEVBQVEsV0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxJQUFBLEVBQU0sNkJBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQUR5Qjs7QUFZM0IsaUJBQUEsR0FBd0IsSUFBQSxLQUFBLENBQ3RCO0VBQUEsSUFBQSxFQUFNLG1CQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLEtBQUEsRUFBTyw4QkFOUDtDQURzQjs7QUFTeEIsYUFBQSxHQUFvQixJQUFBLEtBQUEsQ0FDbEI7RUFBQSxJQUFBLEVBQU0sZUFBTjtFQUNBLE1BQUEsRUFBUSxXQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRGtCOztBQVVwQixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsbUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxJQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sbUJBVlA7Q0FEYTs7QUFhZixjQUFBLEdBQXFCLElBQUEsS0FBQSxDQUNuQjtFQUFBLElBQUEsRUFBTSxnQkFBTjtFQUNBLE1BQUEsRUFBUSxXQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRG1COztBQVNyQixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxLQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sbUJBVlA7Q0FEYTs7OztBQ3pJZixJQUFBOztBQUFBLE1BQVUsT0FBQSxDQUFRLFlBQVIsQ0FBVixFQUFDLFNBQUQsRUFBSTs7QUFDSixXQUFBLEdBQWMsT0FBQSxDQUFRLG9CQUFSOztBQUNkLE1BQU0sQ0FBQyxXQUFQLEdBQXlCLElBQUEsS0FBQSxDQUN4QjtFQUFBLElBQUEsRUFBTSxhQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0NBRHdCOztBQVF6QixhQUFBLEdBQW9CLElBQUEsS0FBQSxDQUNuQjtFQUFBLElBQUEsRUFBTSxlQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxJQUxQO0VBTUEsTUFBQSxFQUFRLElBTlI7Q0FEbUI7O0FBU3BCLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FDVjtFQUFBLElBQUEsRUFBTSxNQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRFU7O0FBU1gsb0JBQUEsR0FBMkIsSUFBQSxLQUFBLENBQzFCO0VBQUEsSUFBQSxFQUFNLHNCQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEMEI7O0FBUTNCLG9CQUFvQixDQUFDLEVBQXJCLENBQXdCLE1BQU0sQ0FBQyxHQUEvQixFQUFvQyxTQUFBO0VBQ25DLElBQUksQ0FBQyxRQUFMLEdBQWdCO1NBQ2hCLElBQUksQ0FBQyxRQUFMLENBQWMsQ0FBQSxDQUFFLFNBQUYsQ0FBZCxFQUE0QjtJQUFBLE1BQUEsRUFBUSxLQUFSO0dBQTVCO0FBRm1DLENBQXBDOztBQUlBLFdBQUEsR0FBa0IsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEsb0JBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsb0JBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbEIsT0FBQSxHQUFjLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFNBQU47RUFDQSxNQUFBLEVBQVEsb0JBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLFNBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlkLG9CQUFBLEdBQTJCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSxzQkFBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVMzQixXQUFBLEdBQWtCLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxhQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWWxCLE9BQUEsR0FBYyxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxJQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEYTs7QUFZZCxpQkFBQSxHQUF3QixJQUFBLEtBQUEsQ0FDdkI7RUFBQSxJQUFBLEVBQU0sbUJBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR1Qjs7QUFTeEIsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxvQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVlsQixPQUFBLEdBQWMsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sU0FBTjtFQUNBLE1BQUEsRUFBUSxpQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sV0FKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGE7O0FBWWQsbUJBQUEsR0FBMEIsSUFBQSxLQUFBLENBQ3pCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEeUI7O0FBUzFCLFdBQUEsR0FBa0IsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsb0JBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbEIsT0FBQSxHQUFjLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE1BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlkLG9CQUFBLEdBQTJCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSxzQkFBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVMzQixXQUFBLEdBQWtCLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxhQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWWxCLE9BQUEsR0FBYyxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxTQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEYTs7QUFZZCxrQkFBQSxHQUF5QixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0sb0JBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFTekIsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxrQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxvQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVlsQixPQUFBLEdBQWMsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sU0FBTjtFQUNBLE1BQUEsRUFBUSxrQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sVUFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGE7O0FBWWQsaUJBQUEsR0FBd0IsSUFBQSxLQUFBLENBQ3ZCO0VBQUEsSUFBQSxFQUFNLG1CQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEdUI7O0FBU3hCLFdBQUEsR0FBa0IsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEsaUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsb0JBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbEIsT0FBQSxHQUFjLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFNBQU47RUFDQSxNQUFBLEVBQVEsaUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLFVBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOztBQVlkLG9CQUFBLEdBQTJCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSxzQkFBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVMzQixXQUFBLEdBQWtCLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxhQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWWxCLE9BQUEsR0FBYyxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsTUFBQSxFQUFRLG9CQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxRQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEYTs7QUFZZCxvQkFBQSxHQUEyQixJQUFBLEtBQUEsQ0FDMUI7RUFBQSxJQUFBLEVBQU0sc0JBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxJQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUQwQjs7QUFTM0IsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDbEI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxvQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxvQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGtCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2Q7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxvQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sT0FKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGM7Ozs7QUM1VGYsSUFBQTs7QUFBQSxPQUFBLEdBQWMsSUFBQSxLQUFBLENBQ1o7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLENBQUEsRUFBRyxDQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxlQUFBLEVBQWlCLGFBSGpCO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtDQURZOztBQVFkLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ2Q7RUFBQSxJQUFBLEVBQU0sV0FBTjtFQUNBLE1BQUEsRUFBUSxPQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxJQU5SO0NBRGM7O0FBU2hCLEVBQUEsR0FBUyxJQUFBLEtBQUEsQ0FDUDtFQUFBLElBQUEsRUFBTSxJQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRE87O0FBU1QsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxLQUFBLEVBQU8sd0JBTlA7Q0FEZ0I7O0FBU2xCLGNBQUEsR0FBcUIsSUFBQSxTQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxJQUFBLEVBQU0sa0VBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQURtQjs7QUFhckIsa0JBQUEsR0FBeUIsSUFBQSxTQUFBLENBQ3ZCO0VBQUEsSUFBQSxFQUFNLG9CQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxJQUFBLEVBQU0sb0ZBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQUR1Qjs7QUFhekIsZUFBQSxHQUFzQixJQUFBLEtBQUEsQ0FDcEI7RUFBQSxJQUFBLEVBQU0saUJBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURvQjs7QUFRdEIsZUFBZSxDQUFDLEtBQWhCLENBQXNCLFNBQUE7RUFDcEIsTUFBTSxDQUFDLElBQVAsR0FBYztTQUNkLElBQUksQ0FBQyxRQUFMLENBQWMsU0FBZDtBQUZvQixDQUF0Qjs7QUFJQSxTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNkO0VBQUEsSUFBQSxFQUFNLFdBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGM7O0FBWWhCLEtBQUEsR0FBWSxJQUFBLFNBQUEsQ0FDVjtFQUFBLElBQUEsRUFBTSxPQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLGlCQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEVTs7OztBQ3JGWixJQUFBOztBQUFBLFdBQUEsR0FBYyxPQUFBLENBQVEsb0JBQVI7O0FBQ2QsTUFBVSxPQUFBLENBQVEsWUFBUixDQUFWLEVBQUMsU0FBRCxFQUFJOztBQUNKLE1BQU0sQ0FBQyxPQUFQLEdBQXFCLElBQUEsS0FBQSxDQUNuQjtFQUFBLElBQUEsRUFBTSxTQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0NBRG1COztBQVFyQixTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNkO0VBQUEsSUFBQSxFQUFNLFdBQU47RUFDQSxNQUFBLEVBQVEsT0FEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLElBTFA7RUFNQSxNQUFBLEVBQVEsSUFOUjtDQURjOztBQVNoQixLQUFBLEdBQVksSUFBQSxLQUFBLENBQ1Y7RUFBQSxJQUFBLEVBQU0sT0FBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtDQURVOztBQVNaLGFBQUEsR0FBb0IsSUFBQSxLQUFBLENBQ2xCO0VBQUEsSUFBQSxFQUFNLGVBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURrQjs7QUFTcEIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLGFBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsV0FBQSxHQUFrQixJQUFBLFNBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLElBQUEsRUFBTSxvQkFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRGdCOztBQVlsQixVQUFBLEdBQWlCLElBQUEsU0FBQSxDQUNmO0VBQUEsSUFBQSxFQUFNLFlBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxJQUFBLEVBQU0sNkJBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURlOztBQVlqQixhQUFBLEdBQW9CLElBQUEsS0FBQSxDQUNsQjtFQUFBLElBQUEsRUFBTSxlQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxJQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEa0I7O0FBUXBCLGFBQWEsQ0FBQyxFQUFkLENBQWlCLE1BQU0sQ0FBQyxHQUF4QixFQUE2QixTQUFBO0VBQzNCLElBQUcsSUFBSSxDQUFDLEtBQUwsS0FBZ0IsQ0FBQyxNQUFBLElBQVUsRUFBWCxDQUFoQixJQUFtQyxHQUFHLENBQUMsS0FBSixLQUFlLEVBQXJEO0lBQ0UsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUwsR0FBVyxHQUFHLENBQUM7SUFDZixDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxJQUFwQixHQUEyQixZQUFBLEdBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBRCxDQUFkLEdBQXNDO0lBRWpFLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLElBQXBCLEdBQTJCLFlBQUEsR0FBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBVixDQUFnQixLQUFoQixDQUFELENBQVosR0FBbUM7SUFDOUQsSUFBRyxJQUFJLENBQUMsWUFBTCxLQUFxQixPQUFyQixJQUFnQyxJQUFJLENBQUMsWUFBTCxLQUFxQixTQUF4RDtNQUNFLElBQUksQ0FBQyxRQUFMLENBQWMsQ0FBQSxDQUFFLFlBQUYsQ0FBZDthQUNBLElBQUksQ0FBQyxNQUFMLEdBQWMsT0FGaEI7S0FBQSxNQUFBO2FBSUUsSUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFBLENBQUUsZ0JBQUYsQ0FBZCxFQUpGO0tBTkY7O0FBRDJCLENBQTdCOztBQWFBLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxhQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxNQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEYTs7QUFZZixVQUFBLEdBQWlCLElBQUEsS0FBQSxDQUNmO0VBQUEsSUFBQSxFQUFNLFlBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxrQkFMUjtFQU1BLEtBQUEsRUFBTyx1QkFOUDtDQURlOztBQVNqQixVQUFBLEdBQWlCLElBQUEsS0FBQSxDQUNmO0VBQUEsSUFBQSxFQUFNLFlBQU47RUFDQSxNQUFBLEVBQVEsU0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxrQkFMUjtFQU1BLEtBQUEsRUFBTyx1QkFOUDtDQURlOztBQVNqQixjQUFBLEdBQXFCLElBQUEsS0FBQSxDQUNuQjtFQUFBLElBQUEsRUFBTSxnQkFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRG1COztBQVNyQixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEsb0JBUmI7RUFTQSxXQUFBLEVBQWEsRUFUYjtDQURpQjs7QUFZbkIsSUFBQSxHQUFXLElBQUEsV0FBVyxDQUFDLEtBQVosQ0FDVDtFQUFBLElBQUEsRUFBTSxNQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsTUFBQSxFQUFRLEdBSlI7RUFLQSxlQUFBLEVBQWlCLEtBTGpCO0VBTUEsSUFBQSxFQUFNLE1BTk47RUFPQSxVQUFBLEVBQVksU0FQWjtFQVFBLFFBQUEsRUFBVSxJQVJWO0VBU0EsVUFBQSxFQUFZLGFBVFo7RUFVQSxVQUFBLEVBQVksS0FWWjtFQVdBLFNBQUEsRUFBVyxRQVhYO0VBWUEsS0FBQSxFQUFPLHFCQVpQO0NBRFM7O0FBY1gsSUFBSSxDQUFDLEtBQUwsR0FDRTtFQUFBLFFBQUEsRUFBVSxNQUFWO0VBQ0EsS0FBQSxFQUFPLFNBRFA7RUFFQSxVQUFBLEVBQVksS0FGWjs7O0FBSUYsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEtBQUssQ0FBQyxNQUZUO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQURpQjs7QUFTbkIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLG9CQVJiO0VBU0EsV0FBQSxFQUFhLEVBVGI7Q0FEaUI7O0FBWW5CLEdBQUEsR0FBVSxJQUFBLFdBQVcsQ0FBQyxLQUFaLENBQ1I7RUFBQSxJQUFBLEVBQU0sS0FBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLGVBQUEsRUFBaUIsS0FKakI7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLEtBQUEsRUFBTyxHQU5QO0VBT0EsSUFBQSxFQUFNLEtBUE47RUFRQSxJQUFBLEVBQU0sTUFSTjtFQVNBLFFBQUEsRUFBVSxFQVRWO0VBVUEsVUFBQSxFQUFZLGFBVlo7RUFXQSxVQUFBLEVBQVksR0FYWjtFQVlBLFNBQUEsRUFBVyxRQVpYO0VBYUEsS0FBQSxFQUFPLHFCQWJQO0NBRFE7O0FBZVYsR0FBRyxDQUFDLEtBQUosR0FDRTtFQUFBLFFBQUEsRUFBVSxNQUFWO0VBQ0EsS0FBQSxFQUFPLFNBRFA7RUFFQSxVQUFBLEVBQVksS0FGWjs7O0FBR0YsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFWLEdBQWdCOztBQUNoQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQVYsR0FBa0I7O0FBQ2xCLGFBQWEsQ0FBQyxPQUFkLEdBQXdCOztBQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLElBQVYsR0FBaUI7O0FBQ2pCLEdBQUcsQ0FBQyxFQUFKLENBQU8sT0FBUCxFQUFnQixTQUFBO0VBQ2QsSUFBRyxJQUFJLENBQUMsS0FBTCxLQUFnQixDQUFDLE1BQUEsSUFBVSxFQUFYLENBQWhCLElBQW1DLEdBQUcsQ0FBQyxLQUFKLEtBQWUsRUFBckQ7V0FDRSxhQUFhLENBQUMsT0FBZCxHQUF3QixLQUQxQjs7QUFEYyxDQUFoQjs7QUFHQSxJQUFJLENBQUMsRUFBTCxDQUFRLE9BQVIsRUFBaUIsU0FBQTtFQUNmLElBQUcsSUFBSSxDQUFDLEtBQUwsS0FBZ0IsQ0FBQyxNQUFBLElBQVUsRUFBWCxDQUFoQixJQUFtQyxHQUFHLENBQUMsS0FBSixLQUFlLEVBQXJEO0lBQ0UsYUFBYSxDQUFDLE9BQWQsR0FBd0I7V0FFeEIsS0FBQSxDQUFNLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLElBQTFCLEVBSEY7O0FBRGUsQ0FBakI7O0FBS0EsSUFBSSxDQUFDLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFNBQUMsS0FBRDtFQUNmLElBQUcsS0FBSyxDQUFDLEtBQU4sS0FBZSxFQUFsQjtXQUEwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQVgsQ0FBQSxFQUExQjs7QUFEZSxDQUFqQjs7QUFFQSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQUE7RUFDWCxJQUFHLElBQUMsQ0FBQSxLQUFELEtBQVUsTUFBYjtXQUF5QixJQUFDLENBQUEsS0FBRCxHQUFTLEdBQWxDOztBQURXLENBQWI7Ozs7QUNuUEEsSUFBQTs7QUFBQSxNQUFVLE9BQUEsQ0FBUSxZQUFSLENBQVYsRUFBQyxTQUFELEVBQUk7O0FBQ0osV0FBQSxHQUFjLE9BQUEsQ0FBUSxvQkFBUjs7QUFFZCxNQUFNLENBQUMsS0FBUCxHQUNFO0VBQUEsS0FBQSxFQUFPLENBQVA7RUFDQSxTQUFBLEVBQVcsQ0FEWDtFQUVBLEtBQUEsRUFBTyxDQUZQO0VBR0EsT0FBQSxFQUFTLENBSFQ7OztBQUlGLE1BQU0sQ0FBQyxLQUFQLEdBQ0U7RUFBQSxLQUFBLEVBQU8sQ0FBUDtFQUNBLFNBQUEsRUFBVyxDQURYO0VBRUEsS0FBQSxFQUFPLENBRlA7RUFHQSxPQUFBLEVBQVMsQ0FIVDs7O0FBS0YsTUFBTSxDQUFDLFlBQVAsR0FBMEIsSUFBQSxLQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxDQUFBLEVBQUcsQ0FESDtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsZUFBQSxFQUFpQixhQUhqQjtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7Q0FEd0I7O0FBUTFCLGNBQUEsR0FBcUIsSUFBQSxLQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxJQUxQO0VBTUEsTUFBQSxFQUFRLElBTlI7Q0FEbUI7O0FBU3JCLElBQUEsR0FBVyxJQUFBLEtBQUEsQ0FDVDtFQUFBLElBQUEsRUFBTSxNQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRFM7O0FBU1gsZ0JBQUEsR0FBdUIsSUFBQSxLQUFBLENBQ3JCO0VBQUEsSUFBQSxFQUFNLGtCQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsa0JBTFI7RUFNQSxLQUFBLEVBQU8sNkJBTlA7Q0FEcUI7O0FBU3ZCLGlCQUFBLEdBQXdCLElBQUEsS0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxtQkFBTjtFQUNBLE1BQUEsRUFBUSxjQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLEtBQUEsRUFBTyxrQkFKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsS0FBQSxFQUFPLDhCQU5QO0NBRHNCOztBQVN4QixrQkFBQSxHQUF5QixJQUFBLEtBQUEsQ0FDdkI7RUFBQSxJQUFBLEVBQU0sb0JBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR1Qjs7QUFTekIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxrQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxrQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixnQkFBQSxHQUF1QixJQUFBLFNBQUEsQ0FDckI7RUFBQSxJQUFBLEVBQU0sa0JBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxJQUFBLEVBQU0sZ0NBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURxQjs7QUFZdkIsaUJBQUEsR0FBd0IsSUFBQSxTQUFBLENBQ3RCO0VBQUEsSUFBQSxFQUFNLG1CQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsSUFBQSxFQUFNLGlDQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEc0I7O0FBWXhCLG1CQUFBLEdBQTBCLElBQUEsS0FBQSxDQUN4QjtFQUFBLElBQUEsRUFBTSxxQkFBTjtFQUNBLE1BQUEsRUFBUSxjQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRHdCOztBQVExQixtQkFBbUIsQ0FBQyxFQUFwQixDQUF1QixNQUFNLENBQUMsR0FBOUIsRUFBbUMsU0FBQTtFQUNqQyxNQUFNLENBQUMsS0FBUCxHQUFlLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQU0sQ0FBQyxLQUF4QixFQUErQixPQUEvQjtTQUNmLE1BQU0sQ0FBQyxTQUFQLENBQUE7QUFGaUMsQ0FBbkM7O0FBSUEsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixtQkFBQSxHQUEwQixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0scUJBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFRMUIsbUJBQW1CLENBQUMsRUFBcEIsQ0FBdUIsTUFBTSxDQUFDLEdBQTlCLEVBQW1DLFNBQUE7RUFDakMsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFNLENBQUMsS0FBeEIsRUFBK0IsT0FBL0I7U0FDZixNQUFNLENBQUMsU0FBUCxDQUFBO0FBRmlDLENBQW5DOztBQUlBLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsdUJBQUEsR0FBOEIsSUFBQSxLQUFBLENBQzVCO0VBQUEsSUFBQSxFQUFNLHlCQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FENEI7O0FBUTlCLHVCQUF1QixDQUFDLEVBQXhCLENBQTJCLE1BQU0sQ0FBQyxHQUFsQyxFQUF1QyxTQUFBO0VBQ3JDLE1BQU0sQ0FBQyxLQUFQLEdBQWUsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBTSxDQUFDLEtBQXhCLEVBQStCLFdBQS9CO1NBQ2YsTUFBTSxDQUFDLFNBQVAsQ0FBQTtBQUZxQyxDQUF2Qzs7QUFJQSxZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLHVCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLHVCQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLFVBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQURhOztBQWFmLHVCQUFBLEdBQThCLElBQUEsS0FBQSxDQUM1QjtFQUFBLElBQUEsRUFBTSx5QkFBTjtFQUNBLE1BQUEsRUFBUSxjQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDRCOztBQVE5Qix1QkFBdUIsQ0FBQyxFQUF4QixDQUEyQixNQUFNLENBQUMsR0FBbEMsRUFBdUMsU0FBQTtFQUNyQyxNQUFNLENBQUMsS0FBUCxHQUFlLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQU0sQ0FBQyxLQUF4QixFQUErQixXQUEvQjtTQUNmLE1BQU0sQ0FBQyxTQUFQLENBQUE7QUFGcUMsQ0FBdkM7O0FBSUEsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSx1QkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSx1QkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxVQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixtQkFBQSxHQUEwQixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0scUJBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxJQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFRMUIsbUJBQW1CLENBQUMsRUFBcEIsQ0FBdUIsTUFBTSxDQUFDLEdBQTlCLEVBQW1DLFNBQUE7RUFDakMsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFNLENBQUMsS0FBeEIsRUFBK0IsT0FBL0I7U0FDZixNQUFNLENBQUMsU0FBUCxDQUFBO0FBRmlDLENBQW5DOztBQUlBLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sTUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsbUJBQUEsR0FBMEIsSUFBQSxLQUFBLENBQ3hCO0VBQUEsSUFBQSxFQUFNLHFCQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEd0I7O0FBUTFCLG1CQUFtQixDQUFDLEVBQXBCLENBQXVCLE1BQU0sQ0FBQyxHQUE5QixFQUFtQyxTQUFBO0VBQ2pDLE1BQU0sQ0FBQyxLQUFQLEdBQWUsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBTSxDQUFDLEtBQXhCLEVBQStCLE9BQS9CO1NBQ2YsTUFBTSxDQUFDLFNBQVAsQ0FBQTtBQUZpQyxDQUFuQzs7QUFJQSxZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLG1CQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEaUI7O0FBWW5CLFFBQUEsR0FBZSxJQUFBLFNBQUEsQ0FDYjtFQUFBLElBQUEsRUFBTSxVQUFOO0VBQ0EsTUFBQSxFQUFRLG1CQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLE1BTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQURhOztBQWFmLHFCQUFBLEdBQTRCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSx1QkFBTjtFQUNBLE1BQUEsRUFBUSxjQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVE1QixxQkFBcUIsQ0FBQyxFQUF0QixDQUF5QixNQUFNLENBQUMsR0FBaEMsRUFBcUMsU0FBQTtFQUNuQyxNQUFNLENBQUMsS0FBUCxHQUFlLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQU0sQ0FBQyxLQUF4QixFQUErQixTQUEvQjtTQUNmLE1BQU0sQ0FBQyxTQUFQLENBQUE7QUFGbUMsQ0FBckM7O0FBSUEsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxxQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxxQkFEUjtFQUVBLENBQUEsRUFBRyxFQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxRQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixxQkFBQSxHQUE0QixJQUFBLEtBQUEsQ0FDMUI7RUFBQSxJQUFBLEVBQU0sdUJBQU47RUFDQSxNQUFBLEVBQVEsY0FEUjtFQUVBLENBQUEsRUFBRyxJQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUQwQjs7QUFRNUIscUJBQXFCLENBQUMsRUFBdEIsQ0FBeUIsTUFBTSxDQUFDLEdBQWhDLEVBQXFDLFNBQUE7RUFDbkMsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFNLENBQUMsS0FBeEIsRUFBK0IsU0FBL0I7U0FDZixNQUFNLENBQUMsU0FBUCxDQUFBO0FBRm1DLENBQXJDOztBQUlBLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEscUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEscUJBRFI7RUFFQSxDQUFBLEVBQUcsRUFGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxJQUFBLEVBQU0sUUFMTjtFQU1BLFFBQUEsRUFBVSxFQU5WO0VBT0EsVUFBQSxFQUFZLGFBUFo7RUFRQSxVQUFBLEVBQVksR0FSWjtFQVNBLFNBQUEsRUFBVyxRQVRYO0VBVUEsS0FBQSxFQUFPLGtCQVZQO0NBRGE7O0FBYWYsa0JBQUEsR0FBeUIsSUFBQSxLQUFBLENBQ3ZCO0VBQUEsSUFBQSxFQUFNLG9CQUFOO0VBQ0EsTUFBQSxFQUFRLGNBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxJQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEdUI7O0FBV3pCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsa0JBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFZbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsa0JBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE1BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOzs7O0FDbmJmLElBQUE7O0FBQUEsTUFBVSxPQUFBLENBQVEsWUFBUixDQUFWLEVBQUMsU0FBRCxFQUFJOztBQUVKLE1BQU0sQ0FBQyxTQUFQLEdBQXVCLElBQUEsS0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxXQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0NBRHNCOztBQVF2QixNQUFNLENBQUMsV0FBUCxHQUF5QixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxJQU5SO0NBRHdCOztBQVN6QixNQUFNLENBQUMsRUFBUCxHQUFnQixJQUFBLEtBQUEsQ0FDZjtFQUFBLElBQUEsRUFBTSxJQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRGU7O0FBU2hCLE1BQU0sQ0FBQyxhQUFQLEdBQTJCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSxlQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLEtBQUEsRUFBTywwQkFOUDtDQUQwQjs7QUFTM0IsTUFBTSxDQUFDLGNBQVAsR0FBNEIsSUFBQSxTQUFBLENBQzNCO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLFdBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLGlCQUpQO0VBS0EsSUFBQSxFQUFNLG9CQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEMkI7O0FBYTVCLE1BQU0sQ0FBQyxnQkFBUCxHQUE4QixJQUFBLFNBQUEsQ0FDN0I7RUFBQSxJQUFBLEVBQU0sa0JBQU47RUFDQSxNQUFBLEVBQVEsV0FEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxLQUFBLEVBQU8sZ0JBSlA7RUFLQSxJQUFBLEVBQU0sOENBTE47RUFNQSxRQUFBLEVBQVUsRUFOVjtFQU9BLFVBQUEsRUFBWSxhQVBaO0VBUUEsVUFBQSxFQUFZLEdBUlo7RUFTQSxTQUFBLEVBQVcsUUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQUQ2Qjs7QUFhOUIsTUFBTSxDQUFDLGdCQUFQLEdBQThCLElBQUEsS0FBQSxDQUM3QjtFQUFBLElBQUEsRUFBTSxrQkFBTjtFQUNBLE1BQUEsRUFBUSxXQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDZCOztBQVM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBeEIsQ0FBMkIsTUFBTSxDQUFDLEdBQWxDLEVBQXVDLFNBQUE7U0FDdEMsSUFBSSxDQUFDLFFBQUwsQ0FBYyxDQUFBLENBQUUsYUFBRixDQUFkO0FBRHNDLENBQXZDOztBQUlBLE1BQU0sQ0FBQyxTQUFQLEdBQXVCLElBQUEsS0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxXQUFOO0VBQ0EsTUFBQSxFQUFRLGdCQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtFQU9BLFlBQUEsRUFBYyxFQVBkO0VBUUEsV0FBQSxFQUFhLHFCQVJiO0VBU0EsV0FBQSxFQUFhLENBVGI7Q0FEc0I7O0FBWXZCLE1BQU0sQ0FBQyxLQUFQLEdBQW1CLElBQUEsU0FBQSxDQUNsQjtFQUFBLElBQUEsRUFBTSxPQUFOO0VBQ0EsTUFBQSxFQUFRLGdCQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxPQUpOO0VBS0EsUUFBQSxFQUFVLEVBTFY7RUFNQSxVQUFBLEVBQVksYUFOWjtFQU9BLFVBQUEsRUFBWSxHQVBaO0VBUUEsU0FBQSxFQUFXLFFBUlg7RUFTQSxLQUFBLEVBQU8sa0JBVFA7Q0FEa0I7Ozs7QUN4Rm5CLElBQUE7O0FBQUEsTUFBVSxPQUFBLENBQVEsWUFBUixDQUFWLEVBQUMsU0FBRCxFQUFJOztBQUNKLFdBQUEsR0FBYyxPQUFBLENBQVEsb0JBQVI7O0FBRWQsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQTtTQUNmLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLElBQXBCLEdBQ08sSUFBSSxDQUFDLElBQU4sR0FBVyxRQUFYLEdBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUROLEdBQ1UsUUFEVixHQUVOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFGTixHQUVXLFFBRlgsR0FHTixNQUFNLENBQUMsSUFBSSxDQUFDLE1BSE4sR0FHYSxrQkFIYixHQUlMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFKUCxHQUlZLGNBSlosR0FLTixNQUFNLENBQUMsSUFBSSxDQUFDLEtBTE4sR0FLWSxjQUxaLEdBTUwsTUFBTSxDQUFDLElBQUksQ0FBQyxLQU5QLEdBTWEsa0JBTmIsR0FPSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BUGhCLEdBT3VCLGlCQVB2QixHQVFOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FSTixHQVFjO0FBVkw7O0FBZWpCLE1BQU0sQ0FBQyxVQUFQLEdBQXdCLElBQUEsS0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxZQUFOO0VBQ0EsQ0FBQSxFQUFHLENBREg7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLGVBQUEsRUFBaUIsYUFIakI7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0NBRHNCOztBQVF4QixZQUFBLEdBQW1CLElBQUEsS0FBQSxDQUNqQjtFQUFBLElBQUEsRUFBTSxjQUFOO0VBQ0EsTUFBQSxFQUFRLFVBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxJQUxQO0VBTUEsTUFBQSxFQUFRLElBTlI7Q0FEaUI7O0FBU25CLFVBQUEsR0FBaUIsSUFBQSxLQUFBLENBQ2Y7RUFBQSxJQUFBLEVBQU0sWUFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsQ0FISDtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7RUFNQSxlQUFBLEVBQWlCLHFCQU5qQjtDQURlOztBQVNqQixlQUFBLEdBQXNCLElBQUEsU0FBQSxDQUNwQjtFQUFBLElBQUEsRUFBTSxpQkFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxpQkFKUDtFQUtBLElBQUEsRUFBTSxTQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEb0I7O0FBYXRCLGlCQUFBLEdBQXdCLElBQUEsU0FBQSxDQUN0QjtFQUFBLElBQUEsRUFBTSxtQkFBTjtFQUNBLE1BQUEsRUFBUSxZQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsSUFBQSxFQUFNLG1MQUxOO0VBZUEsUUFBQSxFQUFVLEVBZlY7RUFnQkEsVUFBQSxFQUFZLGFBaEJaO0VBaUJBLFVBQUEsRUFBWSxHQWpCWjtFQWtCQSxVQUFBLEVBQVksa0JBbEJaO0VBbUJBLFNBQUEsRUFBVyxNQW5CWDtFQW9CQSxLQUFBLEVBQU8sa0JBcEJQO0NBRHNCOztBQXVCeEIscUJBQUEsR0FBNEIsSUFBQSxTQUFBLENBQzFCO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLFlBRFI7RUFFQSxDQUFBLEVBQUcsSUFGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxVQUFBLEVBQVksa0JBUlo7RUFTQSxTQUFBLEVBQVcsTUFUWDtFQVVBLEtBQUEsRUFBTyxrQkFWUDtDQUQwQjs7QUFnQjVCLHFCQUFBLEdBQTRCLElBQUEsS0FBQSxDQUMxQjtFQUFBLElBQUEsRUFBTSxrQkFBTjtFQUNBLE1BQUEsRUFBUSxVQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsSUFISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0NBRDBCOztBQVM1QixTQUFBLEdBQWdCLElBQUEsS0FBQSxDQUNkO0VBQUEsSUFBQSxFQUFNLGFBQU47RUFDQSxNQUFBLEVBQVEscUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURjOztBQVloQixLQUFBLEdBQVksSUFBQSxTQUFBLENBQ1Y7RUFBQSxJQUFBLEVBQU0sU0FBTjtFQUNBLE1BQUEsRUFBUSxxQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEVTs7QUFhWixlQUFBLEdBQXNCLElBQUEsU0FBQSxDQUNwQjtFQUFBLE1BQUEsRUFBUSxVQUFSO0VBQ0EsSUFBQSxFQUFNLGlCQUROO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLElBQUEsRUFBTSwrQkFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxNQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRG9COztBQWF0QixtQkFBQSxHQUEwQixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0sa0JBQU47RUFDQSxNQUFBLEVBQVEsVUFEUjtFQUVBLENBQUEsRUFBRyxJQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFTMUIsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sZUFBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGdCOztBQVlsQixPQUFBLEdBQWMsSUFBQSxTQUFBLENBQ1o7RUFBQSxJQUFBLEVBQU0sV0FBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxJQUFBLEVBQU0sTUFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRFk7O0FBWWQsVUFBVSxDQUFDLEVBQVgsQ0FBYyxlQUFkLEVBQStCLFNBQUE7RUFDN0IsT0FBQSxDQUFBO1NBQ0EsS0FBQSxDQUFNLE1BQU47QUFGNkIsQ0FBL0I7Ozs7QUNoTEEsSUFBQTs7QUFBQSxNQUFNLENBQUMsYUFBUCxHQUEyQixJQUFBLEtBQUEsQ0FDekI7RUFBQSxJQUFBLEVBQU0sZUFBTjtFQUNBLENBQUEsRUFBRyxDQURIO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxlQUFBLEVBQWlCLGFBSGpCO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtDQUR5Qjs7QUFRM0IsZUFBQSxHQUFzQixJQUFBLEtBQUEsQ0FDcEI7RUFBQSxJQUFBLEVBQU0saUJBQU47RUFDQSxNQUFBLEVBQVEsYUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLElBTFA7RUFNQSxNQUFBLEVBQVEsSUFOUjtDQURvQjs7QUFTdEIsSUFBQSxHQUFXLElBQUEsS0FBQSxDQUNUO0VBQUEsSUFBQSxFQUFNLE1BQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sSUFKUDtFQUtBLE1BQUEsRUFBUSxJQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7Q0FEUzs7QUFTWCxtQkFBQSxHQUEwQixJQUFBLEtBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0scUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLElBSEg7RUFJQSxlQUFBLEVBQWlCLGFBSmpCO0VBS0EsS0FBQSxFQUFPLEdBTFA7RUFNQSxNQUFBLEVBQVEsR0FOUjtDQUR3Qjs7QUFTMUIsWUFBQSxHQUFtQixJQUFBLEtBQUEsQ0FDakI7RUFBQSxJQUFBLEVBQU0sY0FBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsQ0FBQSxFQUFHLENBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLE1BQUEsRUFBUSxHQUxSO0VBTUEsZUFBQSxFQUFpQixxQkFOakI7RUFPQSxZQUFBLEVBQWMsRUFQZDtFQVFBLFdBQUEsRUFBYSxxQkFSYjtFQVNBLFdBQUEsRUFBYSxDQVRiO0NBRGlCOztBQVluQixRQUFBLEdBQWUsSUFBQSxTQUFBLENBQ2I7RUFBQSxJQUFBLEVBQU0sVUFBTjtFQUNBLE1BQUEsRUFBUSxtQkFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEVBSEg7RUFJQSxLQUFBLEVBQU8sR0FKUDtFQUtBLElBQUEsRUFBTSxNQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEYTs7QUFhZixtQkFBQSxHQUEwQixJQUFBLFNBQUEsQ0FDeEI7RUFBQSxJQUFBLEVBQU0scUJBQU47RUFDQSxNQUFBLEVBQVEsZUFEUjtFQUVBLENBQUEsRUFBRyxHQUZIO0VBR0EsQ0FBQSxFQUFHLEdBSEg7RUFJQSxJQUFBLEVBQU0sdUNBSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQUR3Qjs7QUFZMUIsc0JBQUEsR0FBNkIsSUFBQSxLQUFBLENBQzNCO0VBQUEsSUFBQSxFQUFNLHdCQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsa0JBTFI7RUFNQSxLQUFBLEVBQU8sbUNBTlA7Q0FEMkI7O0FBUzdCLG1CQUFBLEdBQTBCLElBQUEsS0FBQSxDQUN4QjtFQUFBLElBQUEsRUFBTSxxQkFBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLElBRkg7RUFHQSxDQUFBLEVBQUcsSUFISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sR0FMUDtFQU1BLE1BQUEsRUFBUSxHQU5SO0VBT0EsT0FBQSxFQUFTLEtBUFQ7Q0FEd0I7O0FBVTFCLFlBQUEsR0FBbUIsSUFBQSxLQUFBLENBQ2pCO0VBQUEsSUFBQSxFQUFNLGNBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURpQjs7QUFhbkIsUUFBQSxHQUFlLElBQUEsU0FBQSxDQUNiO0VBQUEsSUFBQSxFQUFNLFVBQU47RUFDQSxNQUFBLEVBQVEsbUJBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxFQUhIO0VBSUEsSUFBQSxFQUFNLE1BSk47RUFLQSxRQUFBLEVBQVUsRUFMVjtFQU1BLFVBQUEsRUFBWSxhQU5aO0VBT0EsVUFBQSxFQUFZLEdBUFo7RUFRQSxTQUFBLEVBQVcsUUFSWDtFQVNBLEtBQUEsRUFBTyxrQkFUUDtDQURhOzs7O0FDeEdmLElBQUE7O0FBQUEsTUFBTSxDQUFDLE9BQVAsR0FBcUIsSUFBQSxLQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLFNBQU47RUFDQSxDQUFBLEVBQUcsQ0FESDtFQUVBLENBQUEsRUFBRyxDQUZIO0VBR0EsZUFBQSxFQUFpQixhQUhqQjtFQUlBLEtBQUEsRUFBTyxJQUpQO0VBS0EsTUFBQSxFQUFRLElBTFI7Q0FEbUI7O0FBUXJCLFNBQUEsR0FBZ0IsSUFBQSxLQUFBLENBQ2Q7RUFBQSxJQUFBLEVBQU0sV0FBTjtFQUNBLE1BQUEsRUFBUSxPQURSO0VBRUEsQ0FBQSxFQUFHLENBRkg7RUFHQSxDQUFBLEVBQUcsR0FISDtFQUlBLGVBQUEsRUFBaUIsYUFKakI7RUFLQSxLQUFBLEVBQU8sSUFMUDtFQU1BLE1BQUEsRUFBUSxJQU5SO0NBRGM7O0FBU2hCLEVBQUEsR0FBUyxJQUFBLEtBQUEsQ0FDUDtFQUFBLElBQUEsRUFBTSxJQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLElBSlA7RUFLQSxNQUFBLEVBQVEsSUFMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0NBRE87O0FBU1QsV0FBQSxHQUFrQixJQUFBLEtBQUEsQ0FDaEI7RUFBQSxJQUFBLEVBQU0sYUFBTjtFQUNBLE1BQUEsRUFBUSxTQURSO0VBRUEsQ0FBQSxFQUFHLEdBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLEtBQUEsRUFBTyxHQUpQO0VBS0EsTUFBQSxFQUFRLEdBTFI7RUFNQSxLQUFBLEVBQU8sd0JBTlA7Q0FEZ0I7O0FBU2xCLGNBQUEsR0FBcUIsSUFBQSxTQUFBLENBQ25CO0VBQUEsSUFBQSxFQUFNLGdCQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsS0FBQSxFQUFPLGdCQUpQO0VBS0EsSUFBQSxFQUFNLGtFQUxOO0VBTUEsUUFBQSxFQUFVLEVBTlY7RUFPQSxVQUFBLEVBQVksYUFQWjtFQVFBLFVBQUEsRUFBWSxHQVJaO0VBU0EsU0FBQSxFQUFXLFFBVFg7RUFVQSxLQUFBLEVBQU8sa0JBVlA7Q0FEbUI7O0FBYXJCLGVBQUEsR0FBc0IsSUFBQSxLQUFBLENBQ3BCO0VBQUEsSUFBQSxFQUFNLGlCQUFOO0VBQ0EsTUFBQSxFQUFRLFNBRFI7RUFFQSxDQUFBLEVBQUcsR0FGSDtFQUdBLENBQUEsRUFBRyxHQUhIO0VBSUEsZUFBQSxFQUFpQixhQUpqQjtFQUtBLEtBQUEsRUFBTyxHQUxQO0VBTUEsTUFBQSxFQUFRLEdBTlI7Q0FEb0I7O0FBUXRCLGVBQWUsQ0FBQyxLQUFoQixDQUFzQixTQUFBO0VBQ3BCLE1BQU0sQ0FBQyxJQUFQLEdBQWM7U0FDZCxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQ7QUFGb0IsQ0FBdEI7O0FBSUEsU0FBQSxHQUFnQixJQUFBLEtBQUEsQ0FDZDtFQUFBLElBQUEsRUFBTSxXQUFOO0VBQ0EsTUFBQSxFQUFRLGVBRFI7RUFFQSxDQUFBLEVBQUcsQ0FGSDtFQUdBLENBQUEsRUFBRyxDQUhIO0VBSUEsS0FBQSxFQUFPLEdBSlA7RUFLQSxNQUFBLEVBQVEsR0FMUjtFQU1BLGVBQUEsRUFBaUIscUJBTmpCO0VBT0EsWUFBQSxFQUFjLEVBUGQ7RUFRQSxXQUFBLEVBQWEscUJBUmI7RUFTQSxXQUFBLEVBQWEsQ0FUYjtDQURjOztBQVloQixLQUFBLEdBQVksSUFBQSxTQUFBLENBQ1Y7RUFBQSxJQUFBLEVBQU0sT0FBTjtFQUNBLE1BQUEsRUFBUSxlQURSO0VBRUEsQ0FBQSxFQUFHLEVBRkg7RUFHQSxDQUFBLEVBQUcsRUFISDtFQUlBLElBQUEsRUFBTSxpQkFKTjtFQUtBLFFBQUEsRUFBVSxFQUxWO0VBTUEsVUFBQSxFQUFZLGFBTlo7RUFPQSxVQUFBLEVBQVksR0FQWjtFQVFBLFNBQUEsRUFBVyxRQVJYO0VBU0EsS0FBQSxFQUFPLGtCQVRQO0NBRFU7Ozs7QUN4RVosSUFBQTs7QUFBQSxhQUFBLEdBQWdCLFNBQUMsS0FBRDtBQUNkLE1BQUE7RUFBQSxNQUFBLEdBQVM7QUFDVDtBQUFBLE9BQUEscUNBQUE7O0lBQ0UsTUFBQSxHQUFTLENBQUMsQ0FBQyxJQUFGLEdBQU8sR0FBUCxHQUFXO0FBRHRCO0FBRUEsU0FBTyxNQUFBLEdBQVMsTUFBQSxHQUFPLEtBQUssQ0FBQztBQUpmOztBQU1oQixNQUFBLEdBQVMsU0FBQyxTQUFELEVBQVksTUFBWjtBQUVQLE1BQUE7RUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxVQUFmLEVBQTBCLEdBQTFCO0VBQ1QsTUFBQSxHQUFTLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFpQixDQUFDLElBQWxCLENBQXVCLE9BQXZCO0VBQ1QsTUFBQSxHQUFTLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFpQixDQUFDLElBQWxCLENBQXVCLFNBQXZCO0VBQ1QsTUFBQSxHQUFTLE1BQU0sQ0FBQyxLQUFQLENBQWEsR0FBYixDQUFpQixDQUFDLElBQWxCLENBQXVCLElBQXZCO0VBQ1QsV0FBQSxHQUFjLE9BQUEsR0FBUSxNQUFSLEdBQWU7RUFFN0IsTUFBQSxHQUFhLElBQUEsTUFBQSxDQUFPLFdBQVA7QUFDYixTQUFPLFNBQVMsQ0FBQyxLQUFWLENBQWdCLE1BQWhCO0FBVEE7O0FBV1QsUUFBQSxHQUFXLFNBQUMsUUFBRCxFQUFXLFNBQVg7QUFDVCxNQUFBO0VBQUEsTUFBQSxHQUFTLE1BQU0sQ0FBQyxjQUFjLENBQUM7RUFFL0IsSUFBRyxnQkFBSDtJQUNFLGdCQUFBLEdBQW1CLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLENBQVAsRUFBMEIsU0FBQyxDQUFEO2FBQU8sQ0FBQyxDQUFDLFFBQUYsQ0FBVyxRQUFYLEVBQW9CLENBQXBCO0lBQVAsQ0FBMUI7SUFDbkIsSUFBQSxDQUFBLENBQU8sZ0JBQUEsSUFBb0IsU0FBM0IsQ0FBQTthQUNFLE1BQUEsR0FBUyxDQUFDLENBQUMsTUFBRixDQUFTLE1BQVQsRUFBaUIsU0FBQyxLQUFEO1FBQ3hCLElBQUcsS0FBSyxDQUFDLElBQU4sS0FBYyxRQUFqQjtpQkFBK0IsS0FBL0I7O01BRHdCLENBQWpCLEVBRFg7S0FBQSxNQUFBO2FBSUUsTUFBQSxHQUFTLENBQUMsQ0FBQyxNQUFGLENBQVMsTUFBVCxFQUFpQixTQUFDLEtBQUQ7QUFDdEIsWUFBQTtRQUFBLFNBQUEsR0FBWSxhQUFBLENBQWMsS0FBZDtRQUNaLElBQUcsaUJBQUg7aUJBQ0UsTUFBQSxDQUFPLFNBQVAsRUFBa0IsU0FBUyxDQUFDLElBQVYsR0FBZSxHQUFmLEdBQW1CLFFBQXJDLEVBREY7U0FBQSxNQUFBO2lCQUdFLE1BQUEsQ0FBTyxTQUFQLEVBQWtCLFFBQWxCLEVBSEY7O01BRnNCLENBQWpCLEVBSlg7S0FGRjtHQUFBLE1BQUE7V0FhRSxPQWJGOztBQUhTOztBQW9CWCxPQUFPLENBQUMsSUFBUixHQUFrQixTQUFDLFFBQUQsRUFBVyxTQUFYO1NBQXlCLFFBQUEsQ0FBUyxRQUFULEVBQW1CLFNBQW5CLENBQThCLENBQUEsQ0FBQTtBQUF2RDs7QUFDbEIsT0FBTyxDQUFDLENBQVIsR0FBa0IsU0FBQyxRQUFELEVBQVcsU0FBWDtTQUF5QixRQUFBLENBQVMsUUFBVCxFQUFtQixTQUFuQixDQUE4QixDQUFBLENBQUE7QUFBdkQ7O0FBRWxCLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLFNBQUMsUUFBRCxFQUFXLFNBQVg7U0FBeUIsUUFBQSxDQUFTLFFBQVQsRUFBbUIsU0FBbkI7QUFBekI7O0FBQ2xCLE9BQU8sQ0FBQyxFQUFSLEdBQWtCLFNBQUMsUUFBRCxFQUFXLFNBQVg7U0FBeUIsUUFBQSxDQUFTLFFBQVQsRUFBbUIsU0FBbkI7QUFBekI7O0FBR2xCLEtBQUssQ0FBQSxTQUFFLENBQUEsSUFBUCxHQUFrQixTQUFDLFFBQUQsRUFBVyxTQUFYO1NBQXlCLFFBQUEsQ0FBUyxRQUFULEVBQW1CLElBQW5CLENBQXNCLENBQUEsQ0FBQTtBQUEvQzs7QUFDbEIsS0FBSyxDQUFBLFNBQUUsQ0FBQSxDQUFQLEdBQWtCLFNBQUMsUUFBRCxFQUFXLFNBQVg7U0FBeUIsUUFBQSxDQUFTLFFBQVQsRUFBbUIsSUFBbkIsQ0FBc0IsQ0FBQSxDQUFBO0FBQS9DOztBQUVsQixLQUFLLENBQUEsU0FBRSxDQUFBLE9BQVAsR0FBa0IsU0FBQyxRQUFELEVBQVcsU0FBWDtTQUF5QixRQUFBLENBQVMsUUFBVCxFQUFtQixJQUFuQjtBQUF6Qjs7QUFDbEIsS0FBSyxDQUFBLFNBQUUsQ0FBQSxFQUFQLEdBQWtCLFNBQUMsUUFBRCxFQUFXLFNBQVg7U0FBeUIsUUFBQSxDQUFTLFFBQVQsRUFBbUIsSUFBbkI7QUFBekI7Ozs7QUNoRGxCLElBQUEsMERBQUE7RUFBQTs7O0FBQUEsT0FBTyxDQUFDLGFBQVIsR0FBNEIsSUFBQSxLQUFBLENBQzNCO0VBQUEsQ0FBQSxFQUFFLENBQUY7RUFBSyxDQUFBLEVBQUUsTUFBTSxDQUFDLE1BQWQ7RUFBc0IsS0FBQSxFQUFNLE1BQU0sQ0FBQyxLQUFuQztFQUEwQyxNQUFBLEVBQU8sR0FBakQ7RUFDQSxJQUFBLEVBQUssd0RBREw7Q0FEMkI7O0FBSzVCLFdBQUEsR0FBYyxNQUFNLENBQUMsS0FBUCxHQUFlOztBQUM3QixXQUFBLEdBQWMsV0FBQSxHQUFjOztBQUc1QixXQUFBLEdBQ0MsTUFBTSxDQUFDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLE1BQU0sQ0FBQyxVQUF6QixFQUNDLG1CQUFBLEdBQXNCLFNBQUMsS0FBRCxFQUFRLEtBQVI7U0FDckIsQ0FBQyxLQUFBLEdBQVEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUF2QixDQUFBLEdBQTBDO0FBRHJCLENBRHZCLEVBSUM7RUFBQSxRQUFBLEVBQVUsU0FBQyxLQUFEO1dBQ1QsbUJBQUEsQ0FBb0IsS0FBcEIsRUFBMkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUE3QztFQURTLENBQVY7RUFHQSxVQUFBLEVBQVksU0FBQyxLQUFEO1dBQ1YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFuQixHQUFpQztFQUR0QixDQUhaO0VBTUEsT0FBQSxFQUFTLFNBQUMsS0FBRDtBQUNSLFFBQUE7SUFBRSxrQkFBb0IsS0FBSyxDQUFDO0lBQzVCLE9BQUEsR0FBVTtJQUNWLFlBQUEsR0FBZSxLQUFLLENBQUMsV0FBVyxDQUFDO0lBR2pDLElBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsWUFBakIsQ0FBSDtBQUNDLGFBQU8sbUJBQUEsQ0FBb0IsS0FBcEIsRUFBMkIsWUFBM0IsRUFEUjs7SUFJQSxhQUFBLEdBQWdCLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQTFCLENBQWdDLEdBQWhDO0FBRWhCLFlBQU8sYUFBYSxDQUFDLE1BQXJCO0FBQUEsV0FDTSxDQUROO1FBRUUsT0FBTyxDQUFDLEdBQVIsR0FBYyxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDZCxPQUFPLENBQUMsS0FBUixHQUFnQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO0FBSlg7QUFETixXQU9NLENBUE47UUFRRSxPQUFPLENBQUMsR0FBUixHQUFjLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNkLE9BQU8sQ0FBQyxLQUFSLEdBQWdCLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNoQixPQUFPLENBQUMsTUFBUixHQUFpQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDakIsT0FBTyxDQUFDLElBQVIsR0FBZSxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7QUFKWDtBQVBOLFdBYU0sQ0FiTjtRQWNFLE9BQU8sQ0FBQyxHQUFSLEdBQWMsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2QsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2hCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtRQUNqQixPQUFPLENBQUMsSUFBUixHQUFlLFVBQUEsQ0FBVyxhQUFjLENBQUEsQ0FBQSxDQUF6QjtBQUpYO0FBYk47UUFvQkUsT0FBTyxDQUFDLEdBQVIsR0FBYyxVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDZCxPQUFPLENBQUMsS0FBUixHQUFnQixVQUFBLENBQVcsYUFBYyxDQUFBLENBQUEsQ0FBekI7UUFDaEIsT0FBTyxDQUFDLE1BQVIsR0FBaUIsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFSLEdBQWUsVUFBQSxDQUFXLGFBQWMsQ0FBQSxDQUFBLENBQXpCO0FBdkJqQjtXQTBCRSxDQUFDLE9BQU8sQ0FBQyxHQUFSLEdBQWMsZUFBZixDQUFBLEdBQStCLEtBQS9CLEdBQW1DLENBQUMsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsZUFBakIsQ0FBbkMsR0FBb0UsS0FBcEUsR0FBd0UsQ0FBQyxPQUFPLENBQUMsTUFBUixHQUFpQixlQUFsQixDQUF4RSxHQUEwRyxLQUExRyxHQUE4RyxDQUFDLE9BQU8sQ0FBQyxJQUFSLEdBQWUsZUFBaEIsQ0FBOUcsR0FBOEk7RUF0Q3hJLENBTlQ7Q0FKRDs7QUFtREQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUF0QixHQUNDO0VBQUEsS0FBQSxFQUNDO0lBQUEsQ0FBQSxFQUFHLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFdBQW5CO0dBREQ7OztBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGdCQUE3QixHQUNDO0VBQUEsS0FBQSxFQUFPLG1CQUFQOzs7QUFFSyxPQUFPLENBQUM7OztFQUNiLEtBQUMsQ0FBQSxNQUFELENBQVEsT0FBUixFQUNDO0lBQUEsR0FBQSxFQUFLLFNBQUE7YUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDO0lBQVYsQ0FBTDtJQUNBLEdBQUEsRUFBSyxTQUFDLEtBQUQ7YUFDSixDQUFDLENBQUMsTUFBRixDQUFTLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBaEIsRUFBdUIsS0FBdkI7SUFESSxDQURMO0dBREQ7O0VBS0EsS0FBQyxDQUFBLE1BQUQsQ0FBUSxPQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUFHLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFBVixDQUFMO0lBQ0EsR0FBQSxFQUFLLFNBQUMsS0FBRDthQUNKLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlO0lBRFgsQ0FETDtHQUREOztFQUthLGVBQUMsT0FBRDs7TUFBQyxVQUFVOzs7TUFDdkIsT0FBTyxDQUFDLFFBQVM7OztNQUNqQixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLGtCQUFzQixPQUFPLENBQUMsS0FBWCxHQUFzQix1QkFBdEIsR0FBbUQ7OztNQUM5RSxPQUFPLENBQUMsV0FBWTs7O01BQ3BCLE9BQU8sQ0FBQyxhQUFjOzs7TUFDdEIsT0FBTyxDQUFDLFVBQVc7OztNQUNuQixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxjQUFlOzs7TUFDdkIsT0FBTyxDQUFDLGtCQUFzQixLQUFLLENBQUMsUUFBTixDQUFBLENBQUgsR0FBeUIsS0FBekIsR0FBb0M7OztNQUMvRCxPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxXQUFZOzs7TUFDcEIsT0FBTyxDQUFDLGNBQWU7OztNQUN2QixPQUFPLENBQUMsZUFBZ0I7OztNQUN4QixPQUFPLENBQUMsaUJBQWtCOzs7TUFDMUIsT0FBTyxDQUFDLGFBQWM7OztNQUN0QixPQUFPLENBQUMsWUFBYTs7O01BQ3JCLE9BQU8sQ0FBQyxZQUFhOzs7TUFDckIsT0FBTyxDQUFDLGFBQWM7OztNQUN0QixPQUFPLENBQUMsYUFBYzs7O01BQ3RCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLFdBQVk7O0lBRXBCLHVDQUFNLE9BQU47SUFHQSxJQUFDLENBQUEsV0FBVyxDQUFDLFFBQWIsR0FBd0IsT0FBTyxDQUFDO0lBQ2hDLElBQUMsQ0FBQSxXQUFXLENBQUMsVUFBYixHQUEwQixPQUFPLENBQUM7SUFDbEMsSUFBQyxDQUFBLFdBQVcsQ0FBQyxPQUFiLEdBQXVCLE9BQU8sQ0FBQztJQUUvQixJQUFnRCxnQ0FBaEQ7TUFBQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0IsT0FBTyxDQUFDLGlCQUE1Qjs7SUFDQSxJQUFDLENBQUEsS0FBRCxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ1QsSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFQLEdBQVksUUFBQSxHQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUYsQ0FBQSxDQUFEO0lBR3BCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsV0FBWSxDQUFBLE9BQUEsQ0FBWixDQUFxQixJQUFyQjtJQUNyQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFiLEdBQXNCLFdBQVksQ0FBQSxRQUFBLENBQVosQ0FBc0IsSUFBdEI7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBYixHQUF3QixXQUFZLENBQUEsVUFBQSxDQUFaLENBQXdCLElBQXhCO0lBQ3hCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsV0FBWSxDQUFBLFlBQUEsQ0FBWixDQUEwQixJQUExQjtJQUMxQixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFiLEdBQXVCO0lBQ3ZCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQWIsR0FBc0I7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBYixHQUErQixPQUFPLENBQUM7SUFDdkMsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBYixHQUF1QixXQUFZLENBQUEsU0FBQSxDQUFaLENBQXVCLElBQXZCO0lBQ3ZCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsT0FBTyxDQUFDO0lBQ2xDLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQWIsR0FBcUIsT0FBTyxDQUFDO0lBQzdCLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQWIsR0FBMEIsT0FBTyxDQUFDO0lBRWxDLElBQUMsQ0FBQSxLQUFLLENBQUMsS0FBUCxHQUFlLE9BQU8sQ0FBQztJQUN2QixJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsR0FBYyxPQUFPLENBQUM7SUFDdEIsSUFBQyxDQUFBLEtBQUssQ0FBQyxXQUFQLEdBQXFCLE9BQU8sQ0FBQztJQUM3QixJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsT0FBTyxDQUFDLFFBQXhDO0lBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxZQUFQLENBQW9CLGFBQXBCLEVBQW1DLE9BQU8sQ0FBQyxXQUEzQztJQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsWUFBUCxDQUFvQixjQUFwQixFQUFvQyxPQUFPLENBQUMsWUFBNUM7SUFDQSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsZ0JBQXBCLEVBQXNDLE9BQU8sQ0FBQyxjQUE5QztJQUNBLElBQUcsT0FBTyxDQUFDLFNBQVIsS0FBcUIsSUFBeEI7TUFDQyxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsV0FBcEIsRUFBaUMsSUFBakMsRUFERDs7SUFFQSxJQUFDLENBQUEsS0FBSyxDQUFDLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsT0FBTyxDQUFDLFVBQTFDO0lBQ0EsSUFBQyxDQUFBLElBQUQsR0FBUSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QjtJQUVSLElBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUixJQUFvQixDQUFDLE9BQU8sQ0FBQyxNQUE5QixDQUFBLElBQXlDLENBQUMsT0FBTyxDQUFDLE1BQXJEO01BQ0MsSUFBQyxDQUFBLElBQUksQ0FBQyxNQUFOLEdBQWU7TUFDZixJQUFDLENBQUEsSUFBSSxDQUFDLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFNBQUMsS0FBRDtlQUNoQyxLQUFLLENBQUMsY0FBTixDQUFBO01BRGdDLENBQWpDLEVBRkQ7O0lBS0EsSUFBQyxDQUFBLElBQUksQ0FBQyxXQUFOLENBQWtCLElBQUMsQ0FBQSxLQUFuQjtJQUNBLElBQUMsQ0FBQSxRQUFRLENBQUMsV0FBVixDQUFzQixJQUFDLENBQUEsSUFBdkI7SUFFQSxJQUFDLENBQUEsZUFBRCxHQUFtQjtJQUNuQixJQUFvRCxJQUFDLENBQUEsZ0JBQXJEO01BQUEsSUFBQyxDQUFBLHNCQUFELENBQXdCLE9BQU8sQ0FBQyxnQkFBaEMsRUFBQTs7SUFJQSxJQUFHLENBQUMsS0FBSyxDQUFDLFFBQU4sQ0FBQSxDQUFELElBQXFCLE9BQU8sQ0FBQyxlQUFSLEtBQTJCLElBQW5EO01BQ0MsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxTQUFBO1FBQ2hDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBdEIsQ0FBQTtlQUNBLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBdEIsQ0FBQTtNQUZnQyxDQUFqQztNQUdBLElBQUMsQ0FBQSxLQUFLLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBQTtlQUMvQixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQXRCLENBQThCLFNBQTlCO01BRCtCLENBQWhDLEVBSkQ7O0VBMUVZOztrQkFpRmIsc0JBQUEsR0FBd0IsU0FBQyxLQUFEO0FBQ3ZCLFFBQUE7SUFBQSxJQUFDLENBQUEsZ0JBQUQsR0FBb0I7SUFDcEIsSUFBRyxzQkFBSDtNQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBZCxDQUEwQixJQUFDLENBQUEsU0FBM0IsRUFERDs7SUFFQSxJQUFDLENBQUEsU0FBRCxHQUFhLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCO0lBQ2IsSUFBQyxDQUFBLFNBQVMsQ0FBQyxJQUFYLEdBQWtCO0lBQ2xCLEdBQUEsR0FBTSxHQUFBLEdBQUksSUFBQyxDQUFBLEtBQUssQ0FBQyxFQUFYLEdBQWMsdUNBQWQsR0FBcUQsSUFBQyxDQUFBLGdCQUF0RCxHQUF1RTtJQUM3RSxJQUFDLENBQUEsU0FBUyxDQUFDLFdBQVgsQ0FBdUIsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBdkI7V0FDQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsSUFBQyxDQUFBLFNBQTNCO0VBUnVCOztrQkFVeEIsS0FBQSxHQUFPLFNBQUE7V0FDTixJQUFDLENBQUEsS0FBSyxDQUFDLEtBQVAsQ0FBQTtFQURNOztrQkFHUCxPQUFBLEdBQVMsU0FBQyxFQUFEO1dBQ1IsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxTQUFBO2FBQ2hDLEVBQUUsQ0FBQyxLQUFILENBQVMsSUFBVDtJQURnQyxDQUFqQztFQURROztrQkFJVCxNQUFBLEdBQVEsU0FBQyxFQUFEO1dBQ1AsSUFBQyxDQUFBLEtBQUssQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxTQUFBO2FBQy9CLEVBQUUsQ0FBQyxLQUFILENBQVMsSUFBVDtJQUQrQixDQUFoQztFQURPOzs7O0dBN0dtQjs7OztBQ3BFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25RQSxPQUFPLENBQUMsS0FBUixHQUFnQjs7QUFFaEIsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQSxHQUFBOztBQUdyQixPQUFPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBtb2R1bGUuZXhwb3J0cyBleHRlbmRzIExheWVyXG5cdFx0XG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IFNjcmVlbi5oZWlnaHRcblx0XHRvcHRpb25zLmNsaXAgPz0gdHJ1ZVxuXHRcdG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lID89ICdpbml0aWFsVmlldydcblx0XHRvcHRpb25zLmJhY2tCdXR0b25OYW1lID89ICdiYWNrQnV0dG9uJ1xuXHRcdG9wdGlvbnMuYW5pbWF0aW9uT3B0aW9ucyA/PSB7IGN1cnZlOiBcImN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKVwiLCB0aW1lOiAuNyB9XG5cdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gXCJibGFja1wiXG5cdFx0b3B0aW9ucy5zY3JvbGwgPz0gZmFsc2Vcblx0XHRvcHRpb25zLmF1dG9MaW5rID89IHRydWVcblxuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRAaGlzdG9yeSA9IFtdXG5cblx0XHRAb25DaGFuZ2UgXCJzdWJMYXllcnNcIiwgKGNoYW5nZUxpc3QpID0+XG5cdFx0XHR2aWV3ID0gY2hhbmdlTGlzdC5hZGRlZFswXVxuXHRcdFx0aWYgdmlldz9cblx0XHRcdFx0IyBkZWZhdWx0IGJlaGF2aW9ycyBmb3Igdmlld3Ncblx0XHRcdFx0dmlldy5jbGlwID0gdHJ1ZVxuXHRcdFx0XHR2aWV3Lm9uIEV2ZW50cy5DbGljaywgLT4gcmV0dXJuICMgcHJldmVudCBjbGljay10aHJvdWdoL2J1YmJsaW5nXG5cdFx0XHRcdCMgYWRkIHNjcm9sbGNvbXBvbmVudFxuXHRcdFx0XHRpZiBAc2Nyb2xsXG5cdFx0XHRcdFx0Y2hpbGRyZW4gPSB2aWV3LmNoaWxkcmVuXG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50ID0gbmV3IFNjcm9sbENvbXBvbmVudFxuXHRcdFx0XHRcdFx0bmFtZTogXCJzY3JvbGxDb21wb25lbnRcIlxuXHRcdFx0XHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBAaGVpZ2h0XG5cdFx0XHRcdFx0XHRwYXJlbnQ6IHZpZXdcblx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuY29udGVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG5cdFx0XHRcdFx0aWYgdmlldy53aWR0aCA8PSBAd2lkdGhcblx0XHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudC5zY3JvbGxIb3Jpem9udGFsID0gZmFsc2Vcblx0XHRcdFx0XHRpZiB2aWV3LmhlaWdodCA8PSBAaGVpZ2h0XG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsVmVydGljYWwgPSBmYWxzZVxuXHRcdFx0XHRcdGZvciBjIGluIGNoaWxkcmVuXG5cdFx0XHRcdFx0XHRjLnBhcmVudCA9IHNjcm9sbENvbXBvbmVudC5jb250ZW50XG5cdFx0XHRcdFx0dmlldy5zY3JvbGxDb21wb25lbnQgPSBzY3JvbGxDb21wb25lbnQgIyBtYWtlIGl0IGFjY2Vzc2libGUgYXMgYSBwcm9wZXJ0eVxuXHRcdFx0XHRcdCMgcmVzZXQgc2l6ZSBzaW5jZSBjb250ZW50IG1vdmVkIHRvIHNjcm9sbENvbXBvbmVudC4gcHJldmVudHMgc2Nyb2xsIGJ1ZyB3aGVuIGRyYWdnaW5nIG91dHNpZGUuXG5cdFx0XHRcdFx0dmlldy5zaXplID0ge3dpZHRoOiBAd2lkdGgsIGhlaWdodDogQGhlaWdodH1cblxuXHRcdHRyYW5zaXRpb25zID1cblx0XHRcdHN3aXRjaEluc3RhbnQ6IHt9XG5cdFx0XHRmYWRlSW46XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge29wYWNpdHk6IDB9XG5cdFx0XHRcdFx0dG86IHtvcGFjaXR5OiAxfVxuXHRcdFx0em9vbUluOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHtzY2FsZTogMC44LCBvcGFjaXR5OiAwfVxuXHRcdFx0XHRcdHRvOiB7c2NhbGU6IDEsIG9wYWNpdHk6IDF9XG5cdFx0XHR6b29tT3V0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7c2NhbGU6IDAuOCwgb3BhY2l0eTogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlSW5VcDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eTogQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRzbGlkZUluUmlnaHQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRzbGlkZUluRG93bjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7bWF4WTogMH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRzbGlkZUluTGVmdDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7bWF4WDogMH1cblx0XHRcdFx0XHR0bzoge21heFg6IEB3aWR0aH1cblx0XHRcdG1vdmVJblVwOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogLUBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IEBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0bW92ZUluUmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0bW92ZUluRG93bjpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IEBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IC1AaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaEluUmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiAtKEB3aWR0aC81KSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoSW5MZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRoLzUsIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiAtQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hPdXRSaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogLShAd2lkdGgvNSksIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRcdHRvOiB7eDogMCwgYnJpZ2h0bmVzczogMTAwfVxuXHRcdFx0cHVzaE91dExlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGgvNSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdFx0dG86IHt4OiAwLCBicmlnaHRuZXNzOiAxMDB9XG5cdFx0XHRzbGlkZU91dFVwOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WTogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0UmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dERvd246XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXRMZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblxuXHRcdCMgc2hvcnRjdXRzXG5cdFx0dHJhbnNpdGlvbnMuc2xpZGVJbiA9IHRyYW5zaXRpb25zLnNsaWRlSW5SaWdodFxuXHRcdHRyYW5zaXRpb25zLnNsaWRlT3V0ID0gdHJhbnNpdGlvbnMuc2xpZGVPdXRSaWdodFxuXHRcdHRyYW5zaXRpb25zLnB1c2hJbiA9IHRyYW5zaXRpb25zLnB1c2hJblJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMucHVzaE91dCA9IHRyYW5zaXRpb25zLnB1c2hPdXRSaWdodFxuXG5cdFx0IyBldmVudHNcblx0XHRFdmVudHMuVmlld1dpbGxTd2l0Y2ggPSBcInZpZXdXaWxsU3dpdGNoXCJcblx0XHRFdmVudHMuVmlld0RpZFN3aXRjaCA9IFwidmlld0RpZFN3aXRjaFwiXG5cdFx0TGF5ZXI6Om9uVmlld1dpbGxTd2l0Y2ggPSAoY2IpIC0+IEBvbihFdmVudHMuVmlld1dpbGxTd2l0Y2gsIGNiKVxuXHRcdExheWVyOjpvblZpZXdEaWRTd2l0Y2ggPSAoY2IpIC0+IEBvbihFdmVudHMuVmlld0RpZFN3aXRjaCwgY2IpXHRcdFxuXG5cdFx0Xy5lYWNoIHRyYW5zaXRpb25zLCAoYW5pbVByb3BzLCBuYW1lKSA9PlxuXG5cdFx0XHRpZiBvcHRpb25zLmF1dG9MaW5rXG5cdFx0XHRcdGxheWVycyA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzXG5cdFx0XHRcdGZvciBidG4gaW4gbGF5ZXJzXG5cdFx0XHRcdFx0aWYgXy5pbmNsdWRlcyBidG4ubmFtZSwgbmFtZVxuXHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXIgPSBAXG5cdFx0XHRcdFx0XHRidG4ub25DbGljayAtPlxuXHRcdFx0XHRcdFx0XHRhbmltID0gQG5hbWUuc3BsaXQoJ18nKVswXVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IEBuYW1lLnJlcGxhY2UoYW5pbSsnXycsJycpXG5cdFx0XHRcdFx0XHRcdGxpbmtOYW1lID0gbGlua05hbWUucmVwbGFjZSgvXFxkKy9nLCAnJykgIyByZW1vdmUgbnVtYmVyc1xuXHRcdFx0XHRcdFx0XHR2aWV3Q29udHJvbGxlclthbmltXSBfLmZpbmQobGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIGxpbmtOYW1lKVxuXG5cdFx0XHRAW25hbWVdID0gKG5ld1ZpZXcsIGFuaW1hdGlvbk9wdGlvbnMgPSBAYW5pbWF0aW9uT3B0aW9ucykgPT5cblxuXHRcdFx0XHRyZXR1cm4gaWYgbmV3VmlldyBpcyBAY3VycmVudFZpZXdcblxuXG5cblx0XHRcdFx0IyBtYWtlIHN1cmUgdGhlIG5ldyBsYXllciBpcyBpbnNpZGUgdGhlIHZpZXdjb250cm9sbGVyXG5cdFx0XHRcdG5ld1ZpZXcucGFyZW50ID0gQFxuXHRcdFx0XHRuZXdWaWV3LnNlbmRUb0JhY2soKVxuXG5cdFx0XHRcdCMgcmVzZXQgcHJvcHMgaW4gY2FzZSB0aGV5IHdlcmUgY2hhbmdlZCBieSBhIHByZXYgYW5pbWF0aW9uXG5cdFx0XHRcdG5ld1ZpZXcucG9pbnQgPSB7eDowLCB5OiAwfVxuXHRcdFx0XHRuZXdWaWV3Lm9wYWNpdHkgPSAxXG5cdFx0XHRcdG5ld1ZpZXcuc2NhbGUgPSAxXG5cdFx0XHRcdG5ld1ZpZXcuYnJpZ2h0bmVzcyA9IDEwMFxuXHRcdFx0XHRcblx0XHRcdFx0IyBvbGRWaWV3XG5cdFx0XHRcdEBjdXJyZW50Vmlldz8ucG9pbnQgPSB7eDogMCwgeTogMH0gIyBmaXhlcyBvZmZzZXQgaXNzdWUgd2hlbiBtb3ZpbmcgdG9vIGZhc3QgYmV0d2VlbiBzY3JlZW5zXG5cdFx0XHRcdEBjdXJyZW50Vmlldz8ucHJvcHMgPSBhbmltUHJvcHMub2xkVmlldz8uZnJvbVxuXHRcdFx0XHRhbmltT2JqID0gXy5leHRlbmQge3Byb3BlcnRpZXM6IGFuaW1Qcm9wcy5vbGRWaWV3Py50b30sIGFuaW1hdGlvbk9wdGlvbnNcblx0XHRcdFx0Xy5kZWZhdWx0cyhhbmltT2JqLCB7IHByb3BlcnRpZXM6IHt9IH0pXG5cdFx0XHRcdG91dGdvaW5nID0gQGN1cnJlbnRWaWV3Py5hbmltYXRlIGFuaW1PYmpcblxuXHRcdFx0XHQjIG5ld1ZpZXdcblx0XHRcdFx0bmV3Vmlldy5wcm9wcyA9IGFuaW1Qcm9wcy5uZXdWaWV3Py5mcm9tXG5cdFx0XHRcdGluY29taW5nID0gbmV3Vmlldy5hbmltYXRlIF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMubmV3Vmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGxheWVyIG9yZGVyXG5cdFx0XHRcdGlmIF8uaW5jbHVkZXMgbmFtZSwgJ091dCdcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVoaW5kKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRvdXRnb2luZy5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PiBAY3VycmVudFZpZXcuYnJpbmdUb0Zyb250KClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5ld1ZpZXcucGxhY2VCZWZvcmUoQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRAZW1pdChFdmVudHMuVmlld1dpbGxTd2l0Y2gsIEBjdXJyZW50VmlldywgbmV3Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdCMgY2hhbmdlIEN1cnJlbnRWaWV3IGJlZm9yZSBhbmltYXRpb24gaGFzIGZpbmlzaGVkIHNvIG9uZSBjb3VsZCBnbyBiYWNrIGluIGhpc3Rvcnlcblx0XHRcdFx0IyB3aXRob3V0IGhhdmluZyB0byB3YWl0IGZvciB0aGUgdHJhbnNpdGlvbiB0byBmaW5pc2hcblx0XHRcdFx0QHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeSBuYW1lLCBvdXRnb2luZywgaW5jb21pbmdcblx0XHRcdFx0QGN1cnJlbnRWaWV3ID0gbmV3Vmlld1xuXHRcdFx0XHRAZW1pdChcImNoYW5nZTpwcmV2aW91c1ZpZXdcIiwgQHByZXZpb3VzVmlldylcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6Y3VycmVudFZpZXdcIiwgQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgaW5jb21pbmcuaXNBbmltYXRpbmdcblx0XHRcdFx0XHRob29rID0gaW5jb21pbmcgXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRob29rID0gb3V0Z29pbmdcblx0XHRcdFx0aG9vaz8ub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT5cblx0XHRcdFx0XHRAZW1pdChFdmVudHMuVmlld0RpZFN3aXRjaCwgQHByZXZpb3VzVmlldywgQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcblxuXHRcdGlmIG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lP1xuXHRcdFx0YXV0b0luaXRpYWwgPSBfLmZpbmQgRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnMsIChsKSAtPiBsLm5hbWUgaXMgb3B0aW9ucy5pbml0aWFsVmlld05hbWVcblx0XHRcdGlmIGF1dG9Jbml0aWFsPyB0aGVuIEBzd2l0Y2hJbnN0YW50IGF1dG9Jbml0aWFsXG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3P1xuXHRcdFx0QHN3aXRjaEluc3RhbnQgb3B0aW9ucy5pbml0aWFsVmlld1xuXG5cdFx0aWYgb3B0aW9ucy5iYWNrQnV0dG9uTmFtZT9cblx0XHRcdGJhY2tCdXR0b25zID0gXy5maWx0ZXIgRnJhbWVyLkN1cnJlbnRDb250ZXh0Ll9sYXllcnMsIChsKSAtPiBfLmluY2x1ZGVzIGwubmFtZSwgb3B0aW9ucy5iYWNrQnV0dG9uTmFtZVxuXHRcdFx0Zm9yIGJ0biBpbiBiYWNrQnV0dG9uc1xuXHRcdFx0XHRidG4ub25DbGljayA9PiBAYmFjaygpXG5cblx0QGRlZmluZSBcInByZXZpb3VzVmlld1wiLFxuXHRcdFx0Z2V0OiAtPiBAaGlzdG9yeVswXS52aWV3XG5cblx0c2F2ZUN1cnJlbnRWaWV3VG9IaXN0b3J5OiAobmFtZSxvdXRnb2luZ0FuaW1hdGlvbixpbmNvbWluZ0FuaW1hdGlvbikgLT5cblx0XHRAaGlzdG9yeS51bnNoaWZ0XG5cdFx0XHR2aWV3OiBAY3VycmVudFZpZXdcblx0XHRcdGFuaW1hdGlvbk5hbWU6IG5hbWVcblx0XHRcdGluY29taW5nQW5pbWF0aW9uOiBpbmNvbWluZ0FuaW1hdGlvblxuXHRcdFx0b3V0Z29pbmdBbmltYXRpb246IG91dGdvaW5nQW5pbWF0aW9uXG5cblx0YmFjazogLT5cblx0XHRwcmV2aW91cyA9IEBoaXN0b3J5WzBdXG5cdFx0aWYgcHJldmlvdXMudmlldz9cblxuXHRcdFx0aWYgXy5pbmNsdWRlcyBwcmV2aW91cy5hbmltYXRpb25OYW1lLCAnT3V0J1xuXHRcdFx0XHRwcmV2aW91cy52aWV3LmJyaW5nVG9Gcm9udCgpXG5cblx0XHRcdGJhY2tJbiA9IHByZXZpb3VzLm91dGdvaW5nQW5pbWF0aW9uLnJldmVyc2UoKVxuXHRcdFx0bW92ZU91dCA9IHByZXZpb3VzLmluY29taW5nQW5pbWF0aW9uLnJldmVyc2UoKVxuXG5cdFx0XHRiYWNrSW4uc3RhcnQoKVxuXHRcdFx0bW92ZU91dC5zdGFydCgpXG5cblx0XHRcdEBjdXJyZW50VmlldyA9IHByZXZpb3VzLnZpZXdcblx0XHRcdEBoaXN0b3J5LnNoaWZ0KClcblx0XHRcdG1vdmVPdXQub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT4gQGN1cnJlbnRWaWV3LmJyaW5nVG9Gcm9udCgpXG4iLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcblxud2luZG93LmFCX0NvbmNlc3Npb24gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9Db25jZXNzaW9uXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5jb25jZXNzaW9uX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0JvZHlcIlxuICBwYXJlbnQ6IGFCX0NvbmNlc3Npb25cbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR182XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmNvbmNlc3Npb25fQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMjcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjdcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yN1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmNvbmNlc3Npb25fdF9DYXJkID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fdF9DYXJkXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogQWxpZ24uY2VudGVyXG4gIHk6IDM0MFxuICB0ZXh0OiBcIkRvIHlvdSBoYXZlIGEgY3VycmVudCBDZW50cmVsaW5rIGJlbmVmaXQgY2FyZOKAqCBvciBQZW5zaW9uZXIgQ29uY2Vzc2lvbiBDYXJkXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuICB3aWR0aDogMTQwMFxuXG5jb25jZXNzaW9uX0J1dF9ObyA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X05vXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogMTIwNFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjhcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X05vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyMjUsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI4ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI4XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9Ob1xuICB4OiAwXG4gIHk6IEFsaWduLmNlbnRlclxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiTm9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuXG5jb25jZXNzaW9uX0J1dF9ZZXMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0J1dF9ZZXNcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiAyNDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxucmVjdGFuZ2xlXzI5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI5XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0NSwyMzAsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTA4LDE3NiwxMDEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yOSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yOVwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfWWVzXG4gIHg6IDBcbiAgeTogQWxpZ24uY2VudGVyXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIlxuXG5jb25jZXNzaW9uX2lfQ2VudHJlbGluayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25faV9DZW50cmVsaW5rXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogOTIzLjk5OTk5OTk5MDAzMTlcbiAgeTogMTAwXG4gIHdpZHRoOiAxOTkuOTk5MzcxNjM5NzIzMDVcbiAgaGVpZ2h0OiAxOTUuMzk5ODY2NTQ4MTU3OTdcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbmNlc3Npb25faV9DZW50cmVsaW5rLnN2Z1wiXG5cbsaSKFwiY29uY2Vzc2lvbl9CdXRfTm9cIikub24gRXZlbnRzLlRhcCwgLT5cbiAgZGF0YS5jb25jID0gZmFsc2VcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX0VtcGxveW1lbnRcIilcbsaSKFwiY29uY2Vzc2lvbl9CdXRfWWVzXCIpLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuY29uYyA9IHRydWVcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1N1bW1hcnlcIilcbiAgc3VtRmlsbCgpIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgJ2lucHV0LWZyYW1lci9pbnB1dCdcblxud2luZG93LmFCX0NvbnRhY3QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9Db250YWN0XCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5jb250YWN0X0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X0JvZHlcIlxuICBwYXJlbnQ6IGFCX0NvbnRhY3RcbiAgeDogMFxuICB5OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzExID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfMTFcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuY29udGFjdF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogMTE2MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV80MiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80MlwiXG4gIHBhcmVudDogY29udGFjdF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQyXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuY29udGFjdF90X0RldGFpbHMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiY29udGFjdF90X0RldGFpbHNcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA3NTZcbiAgeTogMjE2XG4gIHRleHQ6IFwiQ29udGFjdCBEZXRhaWxzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5jb250YWN0X0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9CdXRfTmV4dFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbmNvbnRhY3RfQnV0X05leHQub25UYXAgLT5cbiAgZGF0YS5tYWlsID0gxpIoXCJpbnBfTWFpbFwiKS52YWx1ZVxuICBkYXRhLmVtYWlsID0gxpIoXCJpbnBfRW1haWxcIikudmFsdWVcbiAgZGF0YS5waG9uZSA9IMaSKFwiaW5wX1Bob25lXCIpLnZhbHVlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9Db25jZXNzaW9uXCIpXG5cbnJlY3RhbmdsZV80MyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80M1wiXG4gIHBhcmVudDogY29udGFjdF9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cbmxhYmVsXzQzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQzXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmNvbnRhY3RfVHh0X01haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9NYWlsXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNTY0XG4gIHk6IDM2MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfOFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfTWFpbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbm1haWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiTGFiZWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X01haWxcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJNYWlsXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9UeHRfRW1haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9FbWFpbFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA1MjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzlcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X0VtYWlsXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuZW1haWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiTGFiZWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X0VtYWlsXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiRW1haWxcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5jb250YWN0X1R4dF9QaG9uZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfVHh0X1Bob25lXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNTY0XG4gIHk6IDY4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMTAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzEwXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9QaG9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbnBob25lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9QaG9uZVxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIlBob25lXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9pX0xldHRlciA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfaV9MZXR0ZXJcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogMzc4XG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiA4NC43MDI3OTMxOTIyNDgyOFxuICBpbWFnZTogXCJpbWFnZXMvQ29udGFjdF9pX0xldHRlci5zdmdcIlxuXG5jb250YWN0X2lfRW1haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfRW1haWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogNTIwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMTkuOTk5MzM0NDQzNDk1MDZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9FbWFpbC5zdmdcIlxuXG5jb250YWN0X2lfUGhvbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfUGhvbmVcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogNjgwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMTkuNjc5Mjk0NzA0ODIwODJcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9QaG9uZS5zdmdcIiIsIndpbmRvdy5hQl9FbXBsb3ltZW50ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfRW1wbG95bWVudFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuZW1wbG95bWVudF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9FbXBsb3ltZW50XG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR183ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfN1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfQmFja1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzMwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMwXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzBcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5lbXBsb3ltZW50X3RfSG93RW1wbG95ZWQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF90X0hvd0VtcGxveWVkXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogNjE2XG4gIHk6IDM0MFxuICB0ZXh0OiBcIkhvdyBhcmUgeW91IEVtcGxveWVkP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9pX0JyZWlmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfaV9CcmVpZmNhc2VcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuICBpbWFnZTogXCJpbWFnZXMvRW1wbG95bWVudF9pX0JyZWlmY2FzZS5zdmdcIlxuXG5lbXBsb3ltZW50X0J1dF9VbiA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X1VuXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMzI0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfVW5cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzFcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1VuXG4gIHg6IDUyXG4gIHk6IDYyXG4gIHRleHQ6IFwiVW5lbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfU2VsZiA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X1NlbGZcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA4MDRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMyXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9TZWxmXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMyXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9TZWxmXG4gIHg6IDMyXG4gIHk6IDYyXG4gIHRleHQ6IFwiU2VsZiBFbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfQ2FzdWFsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfQ2FzdWFsXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMTI4NFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzNcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Nhc3VhbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zM1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQ2FzdWFsXG4gIHg6IDBcbiAgeTogMjRcbiAgdGV4dDogXCJDYXN1YWxseSDigKhFbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfRnVsbFRpbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9GdWxsVGltZVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDEwNDBcbiAgeTogNzk4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM0XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9GdWxsVGltZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcbiAgeDogMFxuICB5OiAyNFxuICB0ZXh0OiBcIkVtcGxveWVkIEZ1bGwgVGltZVwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfUGFydFRpbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA3OThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1BhcnRUaW1lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM1ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM1XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVxuICB4OiAwXG4gIHk6IDI0XG4gIHRleHQ6IFwiRW1wbG95ZWTigKggUGFydCBUaW1lXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9IZWxwID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSGVscFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaGVscF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9IZWxwXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18zID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfM1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5oZWxwX3RfSGVscCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJoZWxwX3RfSGVscFwiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDMwMFxuICB5OiA0MjBcbiAgdGV4dDogXCJJcyBTb21lb25lIEhlbHBpbmcgeW91IEZpbGwgT3V0IFRoaXMgRm9ybT9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhlbHBfaV9CdW95ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9pX0J1b3lcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA4ODRcbiAgeTogNzhcbiAgd2lkdGg6IDI4MFxuICBoZWlnaHQ6IDI4MFxuICBpbWFnZTogXCJpbWFnZXMvSGVscF9pX0J1b3kuc3ZnXCJcblxuaGVscF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8xMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xMVwiXG4gIHBhcmVudDogaGVscF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsMjQwLDI0OSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMTksMTMxLDEzNiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzExID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzExXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaGVscF9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9Ob1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbmhlbHBfQnV0X05vLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IGZhbHNlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9SZWFkU3BlYWtcIilcblxucmVjdGFuZ2xlXzEyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzEyXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xMlwiXG4gIHBhcmVudDogaGVscF9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmhlbHBfQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X1llc1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuaGVscF9CdXRfWWVzLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IHRydWVcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1JlYWRTcGVha1wiKVxuXG5yZWN0YW5nbGVfMTMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTNcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzEzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzEzXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG5cbndpbmRvdy5hQl9Ib3VySW5jb21lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSG91ckluY29tZVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaG91ckluY29tZV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Ib3VySW5jb21lXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR185ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfOVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5ob3VybHlJbmNvbWVfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VybHlJbmNvbWVfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8zOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zOFwiXG4gIHBhcmVudDogaG91cmx5SW5jb21lX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzggPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmhvdXJseUluY29tZV90X1JhdGUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX3RfUmF0ZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDQ1OFxuICB5OiAzNjJcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgSG91cmx5IHJhdGUgYWZ0ZXIgdGF4P1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaG91cmx5SW5jb21lX3RfSG91cnMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX3RfSG91cnNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiAzMjRcbiAgeTogNjgyXG4gIHRleHQ6IFwiSG93IG1hbnkgSG91cnMgZG8geW91IHdvcmsgcGVyIHdlZWs/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5ob3VySW5jb21lX2lfYnJlaWZjYXNlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9pX2JyZWlmY2FzZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDkyNFxuICB5OiA2OFxuICB3aWR0aDogMjAwXG4gIGhlaWdodDogMTgwLjY5MDIwNjg5NjU1MTc2XG4gIGltYWdlOiBcImltYWdlcy9FbXBsb3ltZW50X2lfQnJlaWZjYXNlLnN2Z1wiXG5cbmhvdXJJbmNvbWVfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX0J1dF9OZXh0XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM5XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzlcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuaG91ckluY29tZV9UeHRfUmF0ZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfVHh0X1JhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0ODRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfMlwiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfUmF0ZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5ob3VybHlSYXRlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseVJhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X1JhdGVcbiAgeDogMjFcbiAgeTogMThcbiAgaGVpZ2h0OiBob3VySW5jb21lX1R4dF9SYXRlLmhlaWdodFxuICB0ZXh0OiBcIiRcIlxuaG91cmx5UmF0ZS5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogXCI0MDBweFwiXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cblxuaG91cmx5UmF0ZSA9IG5ldyBJbnB1dE1vZHVsZS5JbnB1dFxuICBuYW1lOiBcImhvdXJseVJhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X1JhdGVcbiAgeDogODBcbiAgeTogMFxuICBoZWlnaHQ6IGhvdXJJbmNvbWVfVHh0X1JhdGUuaGVpZ2h0XG4gIHdpZHRoOjUwMFxuICB0ZXh0OiBcIjAwLjBcIlxuICB0eXBlOiBcIm51bWJlclwiXG5ob3VybHlSYXRlLnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiBcIjQwMHB4XCJcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuaG91cmx5UmF0ZS5vbiBcImlucHV0XCIsIC0+XG4gIGlmIChob3Vyc1BlcldlZWsudmFsdWUgaXNudCAoXCJcIiBvciBcIjAwXCIpKSBhbmQgKGhvdXJseVJhdGUudmFsdWUgaXNudCAoXCJcIiBvciBcIjAwLjBcIikpXG4gICAgaG91ckluY29tZV9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxuaG91cmx5UmF0ZS5vbiBcImtleXVwXCIsIChldmVudCkgLT5cbiAgaWYgZXZlbnQud2hpY2ggaXMgMTMgdGhlbiBob3VybHlSYXRlLmlucHV0LmJsdXIoKVxuaG91cmx5UmF0ZS5vbkZvY3VzIC0+XG4gIGlmIEB2YWx1ZSBpcyBcIjAwLjBcIiB0aGVuIEB2YWx1ZSA9IFwiXCJcblxuaG91ckluY29tZV9UeHRfSG91cnMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX1R4dF9Ib3Vyc1wiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDQ4NFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl8zID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl8zXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9Ib3Vyc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5ob3Vyc1BlcldlZWsgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJob3Vyc1BlcldlZWtcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X0hvdXJzXG4gIHg6IDIxXG4gIHk6IDBcbiAgdGV4dDogXCJIb3VycyBwZXIgV2Vla1wiXG4gIHR5cGU6IFwibnVtYmVyXCJcbiAgaGVpZ2h0OiBob3VySW5jb21lX1R4dF9SYXRlLmhlaWdodFxuICB3aWR0aDo1MDBcbmhvdXJzUGVyV2Vlay5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5ob3Vyc1BlcldlZWsub24gXCJpbnB1dFwiLCAtPlxuICBpZiAoaG91cnNQZXJXZWVrLnZhbHVlIGlzbnQgKFwiXCIgb3IgXCIwMFwiKSkgYW5kIChob3VybHlSYXRlLnZhbHVlIGlzbnQgKFwiXCIgb3IgXCIwMC4wXCIpKVxuICAgIGhvdXJJbmNvbWVfQnV0X05leHQudmlzaWJsZSA9IHRydWVcbmhvdXJzUGVyV2Vlay5vbiBcImtleXVwXCIsIChldmVudCkgLT5cbiAgaWYgZXZlbnQud2hpY2ggaXMgMTMgdGhlbiBob3Vyc1BlcldlZWsuaW5wdXQuYmx1cigpXG5cbmhvdXJJbmNvbWVfQnV0X05leHQudmlzaWJsZSA9IGZhbHNlXG5ob3VySW5jb21lX0J1dF9OZXh0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5kYXRhLmluY29tZSA9IChOdW1iZXIoaG91cnNQZXJXZWVrLnZhbHVlKSpOdW1iZXIoaG91cmx5UmF0ZS52YWx1ZSkpXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9TdW1tYXJ5XCIpIiwid2luZG93LmFCX0ludGVycHJldGVyID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSW50ZXJwcmV0ZXJcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmludGVycF9ib2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX2JvZHlcIlxuICBwYXJlbnQ6IGFCX0ludGVycHJldGVyXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR181ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNVwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmludGVycF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9CdXRfQmFja1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMjQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjRcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI0ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI0XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5pbnRlcnBfdF9JbnRlcnByZXRvciA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfdF9JbnRlcnByZXRvclwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogNTU0XG4gIHk6IDM0MFxuICB0ZXh0OiBcIkRvIHlvdSBuZWVkIGFuIGludGVycHJldGVyP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaW50ZXJwX2lfTGFuZ3VhZ2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfaV9MYW5ndWFnZVwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogOTUwXG4gIHk6IDE0MFxuICB3aWR0aDogMTUwXG4gIGhlaWdodDogMTU1XG4gIGltYWdlOiBcImltYWdlcy9JbnRlcnBfaV9MYW5ndWFnZS5zdmdcIlxuXG5pbnRlcnBfQnV0X25vID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX0J1dF9ub1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMTIwNFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5cbnJlY3RhbmdsZV8yNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNVwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9ub1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNVwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9ub1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIk5vXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuaW50ZXJwX0J1dF95ZXMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfQnV0X3llc1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMjQ0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5cbnJlY3RhbmdsZV8yNiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNlwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF95ZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0NSwyMzAsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTA4LDE3NiwxMDEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNlwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF95ZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlIFwiaW5wdXQtZnJhbWVyL2lucHV0XCJcbndpbmRvdy5hQl9MYW5ndWFnZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImFCX0xhbmd1YWdlXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG5sYW5ndWFnZV9Cb2R5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQm9keVwiXG5cdHBhcmVudDogYUJfTGFuZ3VhZ2Vcblx0eDogMFxuXHR5OiAxMzhcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cbmJHXzIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR18yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5sYW5ndWFnZV9CdXRfRW5nbGlzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9FbmdsaXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxubGFuZ3VhZ2VfQnV0X0VuZ2xpc2gub24gRXZlbnRzLlRhcCwgLT5cblx0ZGF0YS5sYW5ndWFnZSA9IFwiRW5nbGlzaFwiXG5cdGZsb3cuc2hvd05leHQgxpIoXCJhQl9IZWxwXCIpLCBzY3JvbGw6IGZhbHNlXG5cbnJlY3RhbmdsZV8yID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDEyNVxuXHR5OiA2MlxuXHR0ZXh0OiBcIkVuZ2xpc2hcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9DaGluZXNlID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0NoaW5lc2VcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDE2NFxuXHR5OiA2MlxuXHR0ZXh0OiBcIuS4reaWh1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1RoYWkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVGhhaVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzQgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMTAxXG5cdHk6IDYyXG5cdHRleHQ6IFwi4LmE4LiX4LiiIOKAkyDguYTguJfguKJcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9BcmFiaWMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfQXJhYmljXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV81XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQXJhYmljXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF81ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzVcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9BcmFiaWNcblx0eDogMTU4XG5cdHk6IDYyXG5cdHRleHQ6IFwi2LnYsdio2YpcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9TcGFuaXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1NwYW5pc2hcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV82ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF82ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDExN1xuXHR5OiA2MlxuXHR0ZXh0OiBcIkVzcGHDsW9sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfR3JlZWsgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfR3JlZWtcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV83ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzdcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9HcmVla1xuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF83XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfR3JlZWtcblx0eDogMTAyXG5cdHk6IDYyXG5cdHRleHQ6IFwizpXOu867zrd2zrnOus6sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVmlldCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9WaWV0XCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzggPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMTEwXG5cdHk6IDYyXG5cdHRleHQ6IFwiVmnhu4d0LW5n4buvXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVHVya2lzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9UdXJraXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogNjIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzkgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMTM1XG5cdHk6IDYyXG5cdHRleHQ6IFwiVMO8cmvDp2VcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9QZXJzaWFuID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1BlcnNpYW5cIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMTM2NFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMTAgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfMTBcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9QZXJzaWFuXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8xMFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1BlcnNpYW5cblx0eDogMTUxXG5cdHk6IDYyXG5cdHRleHQ6IFwi2YHYp9ixINizXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuIiwiYUJfTmF5eSA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX05heXl5XCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5uYXl5X0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuYXl5X0JvZHlcIlxuICBwYXJlbnQ6IGFCX05heXlcbiAgeDogMFxuICB5OiAxMzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdcIlxuICBwYXJlbnQ6IG5heXlfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxubmF5eV9pX0xvZ28gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuYXl5X2lfTG9nb1wiXG4gIHBhcmVudDogbmF5eV9Cb2R5XG4gIHg6IDg4NFxuICB5OiAyMlxuICB3aWR0aDogMjc2XG4gIGhlaWdodDogMjc2XG4gIGltYWdlOiBcImltYWdlcy9uYXl5X2lfTG9nby5zdmdcIlxuXG5uYXl5X3RfSGVhZGluZyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuYXl5X3RfSGVhZGluZ1wiXG4gIHBhcmVudDogbmF5eV9Cb2R5XG4gIHg6IDMyNFxuICB5OiAzNzZcbiAgd2lkdGg6IDEzOTZcbiAgdGV4dDogXCJJ4oCZbSBTb3JyeSBteSBkdWRlIFlvdSBkbyBub3QgcXVhbGlmeSBmb3IgdGhlIER1dHkgTGF3eWVyIHNlcnZpY2VcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5heXlfdF9IZWFkaW5nQ29weSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuYXl5X3RfSGVhZGluZ0NvcHlcIlxuICBwYXJlbnQ6IG5heXlfQm9keVxuICB4OiAzMjRcbiAgeTogNjAyXG4gIHdpZHRoOiAxMzk2XG4gIHRleHQ6IFwiRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIGRvLCBjYWxsIFZMQeKAmXMgbGVnYWwgaGVscGxpbmUgb24gMTMwMCA3OTIgMzg3XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5uYXl5X0J1dF9SZXR1cm4gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuYXl5X0J1dF9SZXR1cm5cIlxuICBwYXJlbnQ6IG5heXlfQm9keVxuICB4OiA3MjRcbiAgeTogOTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbm5heXlfQnV0X1JldHVybi5vblRhcCAtPlxuICB3aW5kb3cuZGF0YSA9IHt9XG4gIGZsb3cuc2hvd05leHQgYUJfU3BsYXNoXG5cbnJlY3RhbmdsZSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZVwiXG4gIHBhcmVudDogbmF5eV9CdXRfUmV0dXJuXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxcIlxuICBwYXJlbnQ6IG5heXlfQnV0X1JldHVyblxuICB4OiA2MFxuICB5OiA4NlxuICB0ZXh0OiBcIlJldHVybiB0byBTdGFydFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuIiwiSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG57xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbndpbmRvdy5hQl9ORE9CID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfTkRPQlwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxubkRPQl9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9Cb2R5XCJcbiAgcGFyZW50OiBhQl9ORE9CXG4gIHg6IDBcbiAgeTogMTM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18xMCA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzEwXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbm5ET0JfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfNDAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDBcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MFwiXG4gIHBhcmVudDogbkRPQl9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbm5ET0JfdF9OYW1lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIm5ET0JfdF9OYW1lXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNjgwXG4gIHk6IDE3NFxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciBuYW1lP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubkRPQl90X0RvYiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RfRG9iXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNTY4XG4gIHk6IDY1NFxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciBkYXRlIG9mIGJpcnRoP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubkRPQl9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQnV0X05leHRcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxubkRPQl9CdXRfTmV4dC5vbiBFdmVudHMuVGFwLCAtPlxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgZGF0YS5uYW1lID0gbmFtZS52YWx1ZVxuICAgIGRhdGEuRG9iID0gZGF5LnZhbHVlXG4gICAgxpIoXCJ5YXNzX3RfSGVhZGluZ1wiKS50ZXh0ID0gXCJcIlwiVGhhbmsgeW91ICN7ZGF0YS5uYW1lLm1hdGNoKC9cXHcrLyl9XG4gICAgUGxlYXNlIHRha2UgYSBzZWF0IGFuZCB3ZSB3aWxsIGJlIHdpdGggeW91IHNob3J0bHlcIlwiXCJcbiAgICDGkihcIm5heXlfdF9IZWFkaW5nXCIpLnRleHQgPSBcIknigJltIFNvcnJ5ICN7ZGF0YS5uYW1lLm1hdGNoIC9cXHcrL30gWW91IGRvIG5vdCBxdWFsaWZ5IGZvciB0aGUgRHV0eSBMYXd5ZXIgc2VydmljZVwiXG4gICAgaWYgZGF0YS5TcGVha0FiaWxpdHkgPT0gXCJzR29vZFwiIG9yIGRhdGEuU3BlYWtBYmlsaXR5ID09IFwic0ZsdWVudFwiXG4gICAgICBmbG93LnNob3dOZXh0IMaSKFwiYUJfQ29udGFjdFwiKVxuICAgICAgZGF0YS5pbnRlcnAgPSBcIm5vbmVcIlxuICAgIGVsc2VcbiAgICAgIGZsb3cuc2hvd05leHQgxpIoXCJhQl9JbnRlcnByZXRlclwiKVxuXG5yZWN0YW5nbGVfNDEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDFcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MVwiXG4gIHBhcmVudDogbkRPQl9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5uRE9CX2lfUGVuID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9pX1BlblwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAzNDRcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDEyMC4wMDAwMTg3NDk5NjE4NVxuICBpbWFnZTogXCJpbWFnZXMvTkRPQl9pX1Blbi5zdmdcIlxuXG5uRE9CX2lfQ2FsID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9pX0NhbFwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiA4MjJcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDEyMS45MDgwNzg3ODMwNTU4NFxuICBpbWFnZTogXCJpbWFnZXMvTkRPQl9pX0NhbC5zdmdcIlxuXG5uRE9CX3RleHRfTmFtZSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfdGV4dF9OYW1lXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNTY0XG4gIHk6IDM0MlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzRcIlxuICBwYXJlbnQ6IG5ET0JfdGV4dF9OYW1lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbm5hbWUgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJuYW1lXCJcbiAgcGFyZW50OiBuRE9CX3RleHRfTmFtZVxuICB4OiAyMVxuICB5OiAwXG4gIGhlaWdodDogMTIwXG4gIHZpcnR1YWxLZXlib2FyZDogZmFsc2VcbiAgdGV4dDogXCJOYW1lXCJcbiAgdGV4dENvbG91cjogXCIjQzk4NjM5XCJcbiAgZm9udFNpemU6IFwiNzJcIlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5uYW1lLnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGNvbG9yOiBcIiNDOTg2MzlcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG5cbm5ET0JfQnV0X0RheSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQnV0X0RheVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IEFsaWduLmNlbnRlclxuICB5OiA4MjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDcwMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzVcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0RheVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDcwMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsMjQwLDI0OSwxKVwiXG4gIGJvcmRlclJhZGl1czogMjBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSg1NywxNTEsMTkyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmRheSA9IG5ldyBJbnB1dE1vZHVsZS5JbnB1dFxuICBuYW1lOiBcImRheVwiXG4gIHBhcmVudDogbkRPQl9CdXRfRGF5XG4gIHg6IDE1XG4gIHk6IDEyXG4gIHZpcnR1YWxLZXlib2FyZDogZmFsc2VcbiAgaGVpZ2h0OiAxMDBcbiAgd2lkdGg6IDcwMFxuICB0ZXh0OiBcIkRPQlwiXG4gIHR5cGU6IFwiZGF0ZVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE3MSwyMTgsMjM5LDEpXCJcbmRheS5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBjb2xvcjogXCIjMjU4MkFCXCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuZGF5LmlucHV0Lm1heCA9IFwiMjAxMC0wMS0wMVwiXG5kYXkuaW5wdXQudmFsdWUgPSBcIjIwMTAtMDEtMDFcIlxubkRPQl9CdXRfTmV4dC52aXNpYmxlID0gZmFsc2VcbmRheS5pbnB1dC50eXBlID0gXCJkYXRlXCJcbmRheS5vbiBcImlucHV0XCIsIC0+XG4gIGlmIG5hbWUudmFsdWUgaXNudCAoXCJOYW1lXCIgb3IgXCJcIikgYW5kIGRheS52YWx1ZSBpc250IFwiXCJcbiAgICBuRE9CX0J1dF9OZXh0LnZpc2libGUgPSB0cnVlXG5uYW1lLm9uIFwiaW5wdXRcIiwgLT5cbiAgaWYgbmFtZS52YWx1ZSBpc250IChcIk5hbWVcIiBvciBcIlwiKSBhbmQgZGF5LnZhbHVlIGlzbnQgXCJcIlxuICAgIG5ET0JfQnV0X05leHQudmlzaWJsZSA9IHRydWVcblxuICAgIHByaW50IMaSKFwieWFzc190X0hlYWRpbmdcIikudGV4dFxubmFtZS5vbiBcImtleXVwXCIsIChldmVudCkgLT5cbiAgaWYgZXZlbnQud2hpY2ggaXMgMTMgdGhlbiBuYW1lLmlucHV0LmJsdXIoKVxubmFtZS5vbkZvY3VzIC0+XG4gIGlmIEB2YWx1ZSBpcyBcIk5hbWVcIiB0aGVuIEB2YWx1ZSA9IFwiXCIiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSBcImlucHV0LWZyYW1lci9pbnB1dFwiXG5cbndpbmRvdy5SVmFscyA9XG4gIHJOb25lOiAwXG4gIHJTb21ld2hhdDogMFxuICByR29vZDogMFxuICByRmx1ZW50OiAwXG53aW5kb3cuU1ZhbHMgPVxuICBzTm9uZTogMFxuICBzU29tZXdoYXQ6IDBcbiAgc0dvb2Q6IDBcbiAgc0ZsdWVudDogMFxuXG53aW5kb3cuYUJfUmVhZFNwZWFrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfUmVhZFNwZWFrXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5yZWFkU3BlYWtfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19Cb2R5XCJcbiAgcGFyZW50OiBhQl9SZWFkU3BlYWtcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR180XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxucmVhZFNwZWFrX2lfUmVhZCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19pX1JlYWRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQwNFxuICB5OiAzNzBcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDEwOC4zMDM2OTQ4NDM5NTY2NlxuICBpbWFnZTogXCJpbWFnZXMvUmVhZFNwZWFrX2lfUmVhZC5zdmdcIlxuXG5yZWFkU3BlYWtfaV9TcGVhayA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19pX1NwZWFrXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0MTBcbiAgeTogODM4XG4gIHdpZHRoOiAxMDcuNjU5MjM1NzE1MTE5NTZcbiAgaGVpZ2h0OiAxMjBcbiAgaW1hZ2U6IFwiaW1hZ2VzL1JlYWRTcGVha19pX1NwZWFrLnN2Z1wiXG5cbnJlYWRTcGVha19CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfQmFja1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMTQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE0ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5yZWFkU3BlYWtfdF9SZWFkID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInJlYWRTcGVha190X1JlYWRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQ5NlxuICB5OiAxOThcbiAgdGV4dDogXCJIb3cgd2VsbCBjYW4geW91IHJlYWQgRW5nbGlzaD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha190X1NwZWFrID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInJlYWRTcGVha190X1NwZWFrXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0NzRcbiAgeTogNjgwXG4gIHRleHQ6IFwiSG93IHdlbGwgY2FuIHlvdSBzcGVhayBFbmdsaXNoP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yTm9uZSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfck5vbmVcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yTm9uZS5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuUlZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5SVmFscywgXCJyTm9uZVwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTVcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfck5vbmVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xNVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yTm9uZVxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiTm9uZVwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9zTm9uZSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc05vbmVcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDU2NFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zTm9uZS5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5TVmFscywgXCJzTm9uZVwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTZcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc05vbmVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xNlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zTm9uZVxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiTm9uZVwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yU29tZXdoYXQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JTb21ld2hhdFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogODg0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JTb21ld2hhdC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuUlZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5SVmFscywgXCJyU29tZXdoYXRcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE3ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE3XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JTb21ld2hhdFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE3ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE3XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JTb21ld2hhdFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiU29tZXdoYXRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfc1NvbWV3aGF0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zU29tZXdoYXRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDg4NFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zU29tZXdoYXQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlNWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuU1ZhbHMsIFwic1NvbWV3aGF0XCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xOFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zU29tZXdoYXRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xOCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xOFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zU29tZXdoYXRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIlNvbWV3aGF0XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JHb29kID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yR29vZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTIwNFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yR29vZC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuUlZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5SVmFscywgXCJyR29vZFwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTlcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckdvb2RcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xOSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xOVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yR29vZFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiR29vZFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9zR29vZCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc0dvb2RcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDEyMDRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc0dvb2Qub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlNWYWxzID0gd2luZG93LmNoYW5nZVNlbCh3aW5kb3cuU1ZhbHMsIFwic0dvb2RcIilcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8yMCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yMFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zR29vZFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIwID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIwXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NHb29kXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJHb29kXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JGbHVlbnQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JGbHVlbnRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDE1MjRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfckZsdWVudC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuUlZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsKHdpbmRvdy5SVmFscywgXCJyRmx1ZW50XCIpXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMjEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjFcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckZsdWVudFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIxID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIxXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JGbHVlbnRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkZsdWVudFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxucmVhZFNwZWFrX0J1dF9zRmx1ZW50ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zRmx1ZW50XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxNTI0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NGbHVlbnQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlNWYWxzID0gd2luZG93LmNoYW5nZVNlbCh3aW5kb3cuU1ZhbHMsIFwic0ZsdWVudFwiKVxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzIyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIyXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NGbHVlbnRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yMlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zRmx1ZW50XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJGbHVlbnRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfTmV4dFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxuXG5cbnJlY3RhbmdsZV8yMyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yM1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjNcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG4iLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcblxud2luZG93LmFCX1NwbGFzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImFCX1NwbGFzaFwiXG5cdHg6IDBcblx0eTogMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE1MzZcblxud2luZG93LnNwbGFzaF9Cb2R5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX0JvZHlcIlxuXHRwYXJlbnQ6IGFCX1NwbGFzaFxuXHR4OiAwXG5cdHk6IDEzOFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblxud2luZG93LmJHID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYkdcIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG53aW5kb3cuc3BsYXNoX2lfTG9nbyA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9pX0xvZ29cIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDg4NFxuXHR5OiAyMlxuXHR3aWR0aDogMjc2XG5cdGhlaWdodDogMjc2XG5cdGltYWdlOiBcImltYWdlcy9TcGxhc2hfaV9Mb2dvLnN2Z1wiXG5cbndpbmRvdy5zcGxhc2hfdF9UaXRsZSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfdF9UaXRsZVwiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNTY0XG5cdHk6IDM0MlxuXHR3aWR0aDogOTE4Ljg1MzYzNzAwODA1NjJcblx0dGV4dDogXCJWaWN0b3JpYSBMZWdhbCBBaWRcIlxuXHRmb250U2l6ZTogNzJcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDcwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfdF9IZWFkaW5nID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInNwbGFzaF90X0hlYWRpbmdcIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDU2NFxuXHR5OiA1MDRcblx0d2lkdGg6IDkxNy44ODY5Mjc3NTkxMDJcblx0dGV4dDogXCJEdXR5IExhd3llciBTZXJ2aWNl4oCoQXBwbGljYXRpb24gZm9yIEFpZFwiXG5cdGZvbnRTaXplOiA3MlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNjAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2luZG93LnNwbGFzaF9CdXRfQmVnaW4gPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfQnV0X0JlZ2luXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA3MjRcblx0eTogODIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA2MDBcblx0aGVpZ2h0OiAyODBcblxud2luZG93LnNwbGFzaF9CdXRfQmVnaW4ub24gRXZlbnRzLlRhcCwgLT5cblx0Zmxvdy5zaG93TmV4dCDGkihcImFCX0xhbmd1YWdlXCIpXG5cblxud2luZG93LnJlY3RhbmdsZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZVwiXG5cdHBhcmVudDogc3BsYXNoX0J1dF9CZWdpblxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDYwMFxuXHRoZWlnaHQ6IDI4MFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbndpbmRvdy5sYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbFwiXG5cdHBhcmVudDogc3BsYXNoX0J1dF9CZWdpblxuXHR4OiAyMDJcblx0eTogODZcblx0dGV4dDogXCJCZWdpblwiXG5cdGZvbnRTaXplOiA3MlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNjAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCIiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSAnaW5wdXQtZnJhbWVyL2lucHV0J1xuXG53aW5kb3cuc3VtRmlsbCA9IC0+XG4gIMaSKFwic3VtbWFyeV90X2RhdGFcIikuaHRtbCA9XG4gICAgXCJcIlwiI3tkYXRhLm5hbWV9PGJyPlxuI3t3aW5kb3cuZGF0YS5Eb2J9PGJyPlxuI3t3aW5kb3cuZGF0YS5oZWxwfTxicj5cbiN7d2luZG93LmRhdGEuaW50ZXJwfTxicj48YnI+XG7igKgje3dpbmRvdy5kYXRhLm1haWx94oCoPGJyPlxuI3t3aW5kb3cuZGF0YS5lbWFpbH08YnI+XG7igKgje3dpbmRvdy5kYXRhLnBob25lfTxicj5cbmF0IGxlYXN0ICQje3dpbmRvdy5kYXRhLmluY29tZX0gcGVyIHdlZWs8YnI+XG4je3dpbmRvdy5kYXRhLmRpc3BTdW19PGJyPlwiXCJcIlxuXG5cblxuXG53aW5kb3cuYUJfU3VtbWFyeSA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX1N1bW1hcnlcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbnN1bW1hcnlfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcInN1bW1hcnlfQm9keVwiXG4gIHBhcmVudDogYUJfU3VtbWFyeVxuICB4OiAwXG4gIHk6IDEzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuc3VtbWFyeV9CRyA9IG5ldyBMYXllclxuICBuYW1lOiBcInN1bW1hcnlfQkdcIlxuICBwYXJlbnQ6IHN1bW1hcnlfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuc3VtbWFyeV90X1RpdGxlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcInN1bW1hcnlfdF9UaXRsZVwiXG4gIHBhcmVudDogc3VtbWFyeV9Cb2R5XG4gIHg6IDU2NFxuICB5OiAzOFxuICB3aWR0aDogOTE4Ljg1MzYzNzAwODA1NjJcbiAgdGV4dDogXCJTdW1tYXJ5XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA3MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5zdW1tYXJ5X3RfSGVhZGluZyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJzdW1tYXJ5X3RfSGVhZGluZ1wiXG4gIHBhcmVudDogc3VtbWFyeV9Cb2R5XG4gIHg6IDQwNFxuICB5OiAyMzJcbiAgd2lkdGg6IDYwMFxuICBodG1sOiBcIlwiXCJOYW1lOjxicj5cbkRhdGUgb2YgQmlydGg6PGJyPlxuSGVscCBGaWxsaW5nIG91dCBGb3JtOjxicj5cbkludGVycHJldGVyOjxicj5cbkNvbnRhY3TigKg8YnI+XG4tTWFpbDrigKg8YnI+XG4tRW1haWw6PGJyPlxu4oCoLVBob25lOjxicj5cbkluY29tZTo8YnI+XG5EaXNhYmlsaXR5KHMpOjxicj5cIlwiXCJcbiAgZm9udFNpemU6IDQ4XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgbGluZUhlaWdodDogMS4zMzMzMzMzMzMzMzMzMzMzXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnN1bW1hcnlfdF9IZWFkaW5nQ29weSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJzdW1tYXJ5X3RfZGF0YVwiXG4gIHBhcmVudDogc3VtbWFyeV9Cb2R5XG4gIHg6IDEwNjRcbiAgeTogMjMyXG4gIHdpZHRoOiA2MDBcbiAgZm9udFNpemU6IDQ4XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgbGluZUhlaWdodDogMS4zMzMzMzMzMzMzMzMzMzMzXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cblxuXG5cbmhvdXJseUluY29tZV9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcIlN1bW1hcnlfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGFCX1N1bW1hcnlcbiAgeDogNDA0XG4gIHk6IDEyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGU3OFwiXG4gIHBhcmVudDogaG91cmx5SW5jb21lX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWw3OFwiXG4gIHBhcmVudDogaG91cmx5SW5jb21lX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuaWZUaGlzSXNDb3JyZWN0ID0gbmV3IFRleHRMYXllclxuICBwYXJlbnQ6IGFCX1N1bW1hcnlcbiAgbmFtZTogXCJpZlRoaXNJc0NvcnJlY3RcIlxuICB4OiA3NDJcbiAgeTogMjc4XG4gIHRleHQ6IFwiSWYgdGhpcyBpcyBjb3JyZWN0LCBUYXAgTmV4dC5cIlxuICBmb250U2l6ZTogNDhcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5cbmhvdXJJbmNvbWVfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJTdW1tYXJ5X0J1dF9OZXh0XCJcbiAgcGFyZW50OiBhQl9TdW1tYXJ5XG4gIHg6IDEzNjRcbiAgeTogMTI0MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8yID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI2NVwiXG4gIHBhcmVudDogaG91ckluY29tZV9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cbmxhYmVsXzIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjY1XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmFCX1N1bW1hcnkub24gXCJjaGFuZ2U6cGFyZW50XCIsIC0+XG4gIHN1bUZpbGwoKVxuICBwcmludCBcImJib21cIlxuXG4iLCJ3aW5kb3cuYUJfV2Vla0luY29tZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX1dlZWtJbmNvbWVcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbndlZWtJbmNvbWVfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfQm9keVwiXG4gIHBhcmVudDogYUJfV2Vla0luY29tZVxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfOCA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzhcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxud2Vla0luY29tZV9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8zNiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zNlwiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM2ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM2XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxud2Vla0luY29tZV90X0luY29tZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX3RfSW5jb21lXCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogMzkzXG4gIHk6IDM0MFxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciB3ZWVrbHkgaW5jb21lIGFmdGVyIHRheD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbndlZWtJbmNvbWVfaV9icmllZmNhc2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX2lfYnJpZWZjYXNlXCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogOTI0XG4gIHk6IDY4XG4gIHdpZHRoOiAyMDBcbiAgaGVpZ2h0OiAxODAuNjkwMjA2ODk2NTUxNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0VtcGxveW1lbnRfaV9CcmVpZmNhc2Uuc3ZnXCJcblxud2Vla0luY29tZV9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfQnV0X05leHRcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICB2aXNpYmxlOiBmYWxzZVxuXG5yZWN0YW5nbGVfMzcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzdcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogMlxuXG5cbmxhYmVsXzM3ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM3XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbiIsIndpbmRvdy5hQl9ZYXNzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfWWFzc1wiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxueWFzc19Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwieWFzc19Cb2R5XCJcbiAgcGFyZW50OiBhQl9ZYXNzXG4gIHg6IDBcbiAgeTogMTM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iRyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXCJcbiAgcGFyZW50OiB5YXNzX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbnlhc3NfaV9Mb2dvID0gbmV3IExheWVyXG4gIG5hbWU6IFwieWFzc19pX0xvZ29cIlxuICBwYXJlbnQ6IHlhc3NfQm9keVxuICB4OiA4ODRcbiAgeTogMjJcbiAgd2lkdGg6IDI3NlxuICBoZWlnaHQ6IDI3NlxuICBpbWFnZTogXCJpbWFnZXMveWFzc19pX0xvZ28uc3ZnXCJcblxueWFzc190X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwieWFzc190X0hlYWRpbmdcIlxuICBwYXJlbnQ6IHlhc3NfQm9keVxuICB4OiA1NjRcbiAgeTogMzc2XG4gIHdpZHRoOiA5MTcuODg2OTI3NzU5MTAyXG4gIHRleHQ6IFwiVGhhbmsgeW91IGdhcyBQbGVhc2UgdGFrZSBhIHNlYXQgYW5kIHdlIHdpbGwgYmUgd2l0aCB5b3Ugc2hvcnRseVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxueWFzc19CdXRfUmV0dXJuID0gbmV3IExheWVyXG4gIG5hbWU6IFwieWFzc19CdXRfUmV0dXJuXCJcbiAgcGFyZW50OiB5YXNzX0JvZHlcbiAgeDogNzI0XG4gIHk6IDkyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG55YXNzX0J1dF9SZXR1cm4ub25UYXAgLT5cbiAgd2luZG93LmRhdGEgPSB7fVxuICBmbG93LnNob3dOZXh0IGFCX1NwbGFzaFxuXG5yZWN0YW5nbGUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVcIlxuICBwYXJlbnQ6IHlhc3NfQnV0X1JldHVyblxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXCJcbiAgcGFyZW50OiB5YXNzX0J1dF9SZXR1cm5cbiAgeDogNjBcbiAgeTogODZcbiAgdGV4dDogXCJSZXR1cm4gdG8gU3RhcnRcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbiIsIl9nZXRIaWVyYXJjaHkgPSAobGF5ZXIpIC0+XG4gIHN0cmluZyA9ICcnXG4gIGZvciBhIGluIGxheWVyLmFuY2VzdG9ycygpXG4gICAgc3RyaW5nID0gYS5uYW1lKyc+JytzdHJpbmdcbiAgcmV0dXJuIHN0cmluZyA9IHN0cmluZytsYXllci5uYW1lXG5cbl9tYXRjaCA9IChoaWVyYXJjaHksIHN0cmluZykgLT5cbiAgIyBwcmVwYXJlIHJlZ2V4IHRva2Vuc1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKj5cXHMqL2csJz4nKSAjIGNsZWFuIHVwIHNwYWNlcyBhcm91bmQgYXJyb3dzXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnKicpLmpvaW4oJ1tePl0qJykgIyBhc3RlcmlrcyBhcyBsYXllciBuYW1lIHdpbGRjYXJkXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnICcpLmpvaW4oJyg/Oi4qKT4nKSAjIHNwYWNlIGFzIHN0cnVjdHVyZSB3aWxkY2FyZFxuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJywnKS5qb2luKCckfCcpICMgYWxsb3cgbXVsdGlwbGUgc2VhcmNoZXMgdXNpbmcgY29tbWFcbiAgcmVnZXhTdHJpbmcgPSBcIihefD4pXCIrc3RyaW5nK1wiJFwiICMgYWx3YXlzIGJvdHRvbSBsYXllciwgbWF5YmUgcGFydCBvZiBoaWVyYXJjaHlcblxuICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ2V4U3RyaW5nKSBcbiAgcmV0dXJuIGhpZXJhcmNoeS5tYXRjaChyZWdFeHApXG5cbl9maW5kQWxsID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+XG4gIGxheWVycyA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzXG5cbiAgaWYgc2VsZWN0b3I/XG4gICAgc3RyaW5nTmVlZHNSZWdleCA9IF8uZmluZCBbJyonLCcgJywnPicsJywnXSwgKGMpIC0+IF8uaW5jbHVkZXMgc2VsZWN0b3IsY1xuICAgIHVubGVzcyBzdHJpbmdOZWVkc1JlZ2V4IG9yIGZyb21MYXllclxuICAgICAgbGF5ZXJzID0gXy5maWx0ZXIgbGF5ZXJzLCAobGF5ZXIpIC0+IFxuICAgICAgICBpZiBsYXllci5uYW1lIGlzIHNlbGVjdG9yIHRoZW4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGxheWVycyA9IF8uZmlsdGVyIGxheWVycywgKGxheWVyKSAtPlxuICAgICAgICAgIGhpZXJhcmNoeSA9IF9nZXRIaWVyYXJjaHkobGF5ZXIpXG4gICAgICAgICAgaWYgZnJvbUxheWVyP1xuICAgICAgICAgICAgX21hdGNoKGhpZXJhcmNoeSwgZnJvbUxheWVyLm5hbWUrJyAnK3NlbGVjdG9yKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9tYXRjaChoaWVyYXJjaHksIHNlbGVjdG9yKVxuICBlbHNlXG4gICAgbGF5ZXJzXG5cblxuIyBHbG9iYWxcbmV4cG9ydHMuRmluZCAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVswXVxuZXhwb3J0cy7GkiAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVswXVxuXG5leHBvcnRzLkZpbmRBbGwgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilcbmV4cG9ydHMuxpLGkiAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpXG5cbiMgTWV0aG9kc1xuTGF5ZXI6OmZpbmQgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVswXVxuTGF5ZXI6OsaSICAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClbMF1cblxuTGF5ZXI6OmZpbmRBbGwgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVxuTGF5ZXI6OsaSxpIgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApIiwiZXhwb3J0cy5rZXlib2FyZExheWVyID0gbmV3IExheWVyXG5cdHg6MCwgeTpTY3JlZW4uaGVpZ2h0LCB3aWR0aDpTY3JlZW4ud2lkdGgsIGhlaWdodDo0MzJcblx0aHRtbDpcIjxpbWcgc3R5bGU9J3dpZHRoOiAxMDAlOycgc3JjPSdtb2R1bGVzL2tleWJvYXJkLnBuZycvPlwiXG5cbiNzY3JlZW4gd2lkdGggdnMuIHNpemUgb2YgaW1hZ2Ugd2lkdGhcbmdyb3d0aFJhdGlvID0gU2NyZWVuLndpZHRoIC8gNzMyXG5pbWFnZUhlaWdodCA9IGdyb3d0aFJhdGlvICogNDMyXG5cbiMgRXh0ZW5kcyB0aGUgTGF5ZXJTdHlsZSBjbGFzcyB3aGljaCBkb2VzIHRoZSBwaXhlbCByYXRpbyBjYWxjdWxhdGlvbnMgaW4gZnJhbWVyXG5faW5wdXRTdHlsZSA9XG5cdE9iamVjdC5hc3NpZ24oe30sIEZyYW1lci5MYXllclN0eWxlLFxuXHRcdGNhbGN1bGF0ZVBpeGVsUmF0aW8gPSAobGF5ZXIsIHZhbHVlKSAtPlxuXHRcdFx0KHZhbHVlICogbGF5ZXIuY29udGV4dC5waXhlbE11bHRpcGxpZXIpICsgXCJweFwiXG5cblx0XHRmb250U2l6ZTogKGxheWVyKSAtPlxuXHRcdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgbGF5ZXIuX3Byb3BlcnRpZXMuZm9udFNpemUpXG5cblx0XHRsaW5lSGVpZ2h0OiAobGF5ZXIpIC0+XG5cdFx0XHQobGF5ZXIuX3Byb3BlcnRpZXMubGluZUhlaWdodCkgKyBcImVtXCJcblxuXHRcdHBhZGRpbmc6IChsYXllcikgLT5cblx0XHRcdHsgcGl4ZWxNdWx0aXBsaWVyIH0gPSBsYXllci5jb250ZXh0XG5cdFx0XHRwYWRkaW5nID0gW11cblx0XHRcdHBhZGRpbmdWYWx1ZSA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmdcblxuXHRcdFx0IyBDaGVjayBpZiB3ZSBoYXZlIGEgc2luZ2xlIG51bWJlciBhcyBpbnRlZ2VyXG5cdFx0XHRpZiBOdW1iZXIuaXNJbnRlZ2VyKHBhZGRpbmdWYWx1ZSlcblx0XHRcdFx0cmV0dXJuIGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIHBhZGRpbmdWYWx1ZSlcblxuXHRcdFx0IyBJZiB3ZSBoYXZlIG11bHRpcGxlIHZhbHVlcyB0aGV5IGNvbWUgYXMgc3RyaW5nIChlLmcuIFwiMSAyIDMgNFwiKVxuXHRcdFx0cGFkZGluZ1ZhbHVlcyA9IGxheWVyLl9wcm9wZXJ0aWVzLnBhZGRpbmcuc3BsaXQoXCIgXCIpXG5cblx0XHRcdHN3aXRjaCBwYWRkaW5nVmFsdWVzLmxlbmd0aFxuXHRcdFx0XHR3aGVuIDRcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1szXSlcblxuXHRcdFx0XHR3aGVuIDNcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzJdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHR3aGVuIDJcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cblx0XHRcdCMgUmV0dXJuIGFzIDQtdmFsdWUgc3RyaW5nIChlLmcgXCIxcHggMnB4IDNweCA0cHhcIilcblx0XHRcdFwiI3twYWRkaW5nLnRvcCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcucmlnaHQgKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLmJvdHRvbSAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcubGVmdCAqIHBpeGVsTXVsdGlwbGllcn1weFwiXG5cdClcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcyA9XG5cdHNob3duOlxuXHRcdHk6IFNjcmVlbi5oZWlnaHQgLSBpbWFnZUhlaWdodFxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzLmFuaW1hdGlvbk9wdGlvbnMgPVxuXHRjdXJ2ZTogXCJzcHJpbmcoNTAwLDUwLDE1KVwiXG5cbmNsYXNzIGV4cG9ydHMuSW5wdXQgZXh0ZW5kcyBMYXllclxuXHRAZGVmaW5lIFwic3R5bGVcIixcblx0XHRnZXQ6IC0+IEBpbnB1dC5zdHlsZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0Xy5leHRlbmQgQGlucHV0LnN0eWxlLCB2YWx1ZVxuXG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnZhbHVlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAaW5wdXQudmFsdWUgPSB2YWx1ZVxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdG9wdGlvbnMuc2V0dXAgPz0gZmFsc2Vcblx0XHRvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuY2xpcCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IDYwXG5cdFx0b3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPz0gaWYgb3B0aW9ucy5zZXR1cCB0aGVuIFwicmdiYSgyNTUsIDYwLCA0NywgLjUpXCIgZWxzZSBcInRyYW5zcGFyZW50XCJcblx0XHRvcHRpb25zLmZvbnRTaXplID89IDMwXG5cdFx0b3B0aW9ucy5saW5lSGVpZ2h0ID89IDFcblx0XHRvcHRpb25zLnBhZGRpbmcgPz0gMTBcblx0XHRvcHRpb25zLnRleHQgPz0gXCJcIlxuXHRcdG9wdGlvbnMucGxhY2Vob2xkZXIgPz0gXCJcIlxuXHRcdG9wdGlvbnMudmlydHVhbEtleWJvYXJkID89IGlmIFV0aWxzLmlzTW9iaWxlKCkgdGhlbiBmYWxzZSBlbHNlIHRydWVcblx0XHRvcHRpb25zLnR5cGUgPz0gXCJ0ZXh0XCJcblx0XHRvcHRpb25zLmdvQnV0dG9uID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvQ29ycmVjdCA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9Db21wbGV0ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9DYXBpdGFsaXplID89IFwib25cIlxuXHRcdG9wdGlvbnMuc3BlbGxDaGVjayA/PSBcIm9uXCJcblx0XHRvcHRpb25zLmF1dG9mb2N1cyA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGV4dENvbG9yID89IFwiIzAwMFwiXG5cdFx0b3B0aW9ucy5mb250RmFtaWx5ID89IFwiLWFwcGxlLXN5c3RlbVwiXG5cdFx0b3B0aW9ucy5mb250V2VpZ2h0ID89IFwiNTAwXCJcblx0XHRvcHRpb25zLnN1Ym1pdCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMudGFiSW5kZXggPz0gMFxuXG5cdFx0c3VwZXIgb3B0aW9uc1xuXG5cdFx0IyBBZGQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG5cdFx0QF9wcm9wZXJ0aWVzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZVxuXHRcdEBfcHJvcGVydGllcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0XG5cdFx0QF9wcm9wZXJ0aWVzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmdcblxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcj9cblx0XHRAaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiaW5wdXRcIlxuXHRcdEBpbnB1dC5pZCA9IFwiaW5wdXQtI3tfLm5vdygpfVwiXG5cblx0XHQjIEFkZCBzdHlsaW5nIHRvIHRoZSBpbnB1dCBlbGVtZW50XG5cdFx0QGlucHV0LnN0eWxlLndpZHRoID0gX2lucHV0U3R5bGVbXCJ3aWR0aFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5oZWlnaHQgPSBfaW5wdXRTdHlsZVtcImhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250U2l6ZSA9IF9pbnB1dFN0eWxlW1wiZm9udFNpemVcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUubGluZUhlaWdodCA9IF9pbnB1dFN0eWxlW1wibGluZUhlaWdodFwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCJcblx0XHRAaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHRAaW5wdXQuc3R5bGUucGFkZGluZyA9IF9pbnB1dFN0eWxlW1wicGFkZGluZ1wiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5XG5cdFx0QGlucHV0LnN0eWxlLmNvbG9yID0gb3B0aW9ucy50ZXh0Q29sb3Jcblx0XHRAaW5wdXQuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodFxuXG5cdFx0QGlucHV0LnZhbHVlID0gb3B0aW9ucy50ZXh0XG5cdFx0QGlucHV0LnR5cGUgPSBvcHRpb25zLnR5cGVcblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBvcHRpb25zLnBsYWNlaG9sZGVyXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInRhYmluZGV4XCIsIG9wdGlvbnMudGFiaW5kZXhcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvcnJlY3RcIiwgb3B0aW9ucy5hdXRvQ29ycmVjdFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29tcGxldGVcIiwgb3B0aW9ucy5hdXRvQ29tcGxldGVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NhcGl0YWxpemVcIiwgb3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZVxuXHRcdGlmIG9wdGlvbnMuYXV0b2ZvY3VzID09IHRydWVcblx0XHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvZm9jdXNcIiwgdHJ1ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJzcGVsbGNoZWNrXCIsIG9wdGlvbnMuc3BlbGxDaGVja1xuXHRcdEBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImZvcm1cIlxuXG5cdFx0aWYgKG9wdGlvbnMuZ29CdXR0b24gJiYgIW9wdGlvbnMuc3VibWl0KSB8fCAhb3B0aW9ucy5zdWJtaXRcblx0XHRcdEBmb3JtLmFjdGlvbiA9IFwiI1wiXG5cdFx0XHRAZm9ybS5hZGRFdmVudExpc3RlbmVyIFwic3VibWl0XCIsIChldmVudCkgLT5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0QGZvcm0uYXBwZW5kQ2hpbGQgQGlucHV0XG5cdFx0QF9lbGVtZW50LmFwcGVuZENoaWxkIEBmb3JtXG5cblx0XHRAYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiXG5cdFx0QHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3Igb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yIGlmIEBwbGFjZWhvbGRlckNvbG9yXG5cblx0XHQjb25seSBzaG93IGhvbm9yIHZpcnR1YWwga2V5Ym9hcmQgb3B0aW9uIHdoZW4gbm90IG9uIG1vYmlsZSxcblx0XHQjb3RoZXJ3aXNlIGlnbm9yZVxuXHRcdGlmICFVdGlscy5pc01vYmlsZSgpICYmIG9wdGlvbnMudmlydHVhbEtleWJvYXJkIGlzIHRydWVcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZUN5Y2xlKClcblx0XHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYW5pbWF0ZShcImRlZmF1bHRcIilcblxuXHR1cGRhdGVQbGFjZWhvbGRlckNvbG9yOiAoY29sb3IpIC0+XG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBjb2xvclxuXHRcdGlmIEBwYWdlU3R5bGU/XG5cdFx0XHRkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkIEBwYWdlU3R5bGVcblx0XHRAcGFnZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcInN0eWxlXCJcblx0XHRAcGFnZVN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCJcblx0XHRjc3MgPSBcIiMje0BpbnB1dC5pZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAcGxhY2Vob2xkZXJDb2xvcn07IH1cIlxuXHRcdEBwYWdlU3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUgY3NzKVxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQgQHBhZ2VTdHlsZVxuXG5cdGZvY3VzOiAoKSAtPlxuXHRcdEBpbnB1dC5mb2N1cygpXG5cblx0b25Gb2N1czogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiZm9jdXNcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG5cblx0b25CbHVyOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuIiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAyLjAuMVxuKGZ1bmN0aW9uKCkge1xuICB2YXIgX2lucHV0U3R5bGUsIGNhbGN1bGF0ZVBpeGVsUmF0aW8sIGdyb3d0aFJhdGlvLCBpbWFnZUhlaWdodDtcblxuICBleHBvcnRzLmtleWJvYXJkTGF5ZXIgPSBuZXcgTGF5ZXIoe1xuICAgIHg6IDAsXG4gICAgeTogU2NyZWVuLmhlaWdodCxcbiAgICB3aWR0aDogU2NyZWVuLndpZHRoLFxuICAgIGhlaWdodDogNDMyLFxuICAgIGh0bWw6IFwiPGltZyBzdHlsZT0nd2lkdGg6IDEwMCU7JyBzcmM9J21vZHVsZXMva2V5Ym9hcmQucG5nJy8+XCJcbiAgfSk7XG5cbiAgLy9zY3JlZW4gd2lkdGggdnMuIHNpemUgb2YgaW1hZ2Ugd2lkdGhcbiAgZ3Jvd3RoUmF0aW8gPSBTY3JlZW4ud2lkdGggLyA3MzI7XG5cbiAgaW1hZ2VIZWlnaHQgPSBncm93dGhSYXRpbyAqIDQzMjtcblxuICAvLyBFeHRlbmRzIHRoZSBMYXllclN0eWxlIGNsYXNzIHdoaWNoIGRvZXMgdGhlIHBpeGVsIHJhdGlvIGNhbGN1bGF0aW9ucyBpbiBmcmFtZXJcbiAgX2lucHV0U3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBGcmFtZXIuTGF5ZXJTdHlsZSwgY2FsY3VsYXRlUGl4ZWxSYXRpbyA9IGZ1bmN0aW9uKGxheWVyLCB2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgKiBsYXllci5jb250ZXh0LnBpeGVsTXVsdGlwbGllcikgKyBcInB4XCI7XG4gIH0sIHtcbiAgICBmb250U2l6ZTogZnVuY3Rpb24obGF5ZXIpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBsYXllci5fcHJvcGVydGllcy5mb250U2l6ZSk7XG4gICAgfSxcbiAgICBsaW5lSGVpZ2h0OiBmdW5jdGlvbihsYXllcikge1xuICAgICAgcmV0dXJuIGxheWVyLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgKyBcImVtXCI7XG4gICAgfSxcbiAgICBwYWRkaW5nOiBmdW5jdGlvbihsYXllcikge1xuICAgICAgdmFyIHBhZGRpbmcsIHBhZGRpbmdWYWx1ZSwgcGFkZGluZ1ZhbHVlcywgcGl4ZWxNdWx0aXBsaWVyO1xuICAgICAgKHtwaXhlbE11bHRpcGxpZXJ9ID0gbGF5ZXIuY29udGV4dCk7XG4gICAgICBwYWRkaW5nID0gW107XG4gICAgICBwYWRkaW5nVmFsdWUgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nO1xuICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIHNpbmdsZSBudW1iZXIgYXMgaW50ZWdlclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIocGFkZGluZ1ZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgcGFkZGluZ1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHdlIGhhdmUgbXVsdGlwbGUgdmFsdWVzIHRoZXkgY29tZSBhcyBzdHJpbmcgKGUuZy4gXCIxIDIgMyA0XCIpXG4gICAgICBwYWRkaW5nVmFsdWVzID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZy5zcGxpdChcIiBcIik7XG4gICAgICBzd2l0Y2ggKHBhZGRpbmdWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1szXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSk7XG4gICAgICAgICAgcGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSk7XG4gICAgICAgICAgcGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgICAgIHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKTtcbiAgICAgICAgICBwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pO1xuICAgICAgfVxuICAgICAgLy8gUmV0dXJuIGFzIDQtdmFsdWUgc3RyaW5nIChlLmcgXCIxcHggMnB4IDNweCA0cHhcIilcbiAgICAgIHJldHVybiBgJHtwYWRkaW5nLnRvcCAqIHBpeGVsTXVsdGlwbGllcn1weCAke3BhZGRpbmcucmlnaHQgKiBwaXhlbE11bHRpcGxpZXJ9cHggJHtwYWRkaW5nLmJvdHRvbSAqIHBpeGVsTXVsdGlwbGllcn1weCAke3BhZGRpbmcubGVmdCAqIHBpeGVsTXVsdGlwbGllcn1weGA7XG4gICAgfVxuICB9KTtcblxuICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzID0ge1xuICAgIHNob3duOiB7XG4gICAgICB5OiBTY3JlZW4uaGVpZ2h0IC0gaW1hZ2VIZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID0ge1xuICAgIGN1cnZlOiBcInNwcmluZyg1MDAsNTAsMTUpXCJcbiAgfTtcblxuICBleHBvcnRzLklucHV0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIElucHV0IGV4dGVuZHMgTGF5ZXIge1xuICAgICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChvcHRpb25zLnNldHVwID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnNldHVwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMud2lkdGggPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMud2lkdGggPSBTY3JlZW4ud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xpcCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5jbGlwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaGVpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmhlaWdodCA9IDYwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmRDb2xvciA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLnNldHVwID8gXCJyZ2JhKDI1NSwgNjAsIDQ3LCAuNSlcIiA6IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5mb250U2l6ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5mb250U2l6ZSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxpbmVIZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMubGluZUhlaWdodCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucGFkZGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYWRkaW5nID0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy50ZXh0ID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5wbGFjZWhvbGRlciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudmlydHVhbEtleWJvYXJkID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA9IFV0aWxzLmlzTW9iaWxlKCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuZ29CdXR0b24gPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuZ29CdXR0b24gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ29ycmVjdCA9PSBudWxsKSB7XG4gICAgICAgICAgb3B0aW9ucy5hdXRvQ29ycmVjdCA9IFwib25cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvQ29tcGxldGUgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b0NvbXBsZXRlID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmF1dG9DYXBpdGFsaXplID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLmF1dG9DYXBpdGFsaXplID0gXCJvblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnNwZWxsQ2hlY2sgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuc3BlbGxDaGVjayA9IFwib25cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5hdXRvZm9jdXMgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuYXV0b2ZvY3VzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMudGV4dENvbG9yID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnRleHRDb2xvciA9IFwiIzAwMFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRGYW1pbHkgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuZm9udEZhbWlseSA9IFwiLWFwcGxlLXN5c3RlbVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmZvbnRXZWlnaHQgPT0gbnVsbCkge1xuICAgICAgICAgIG9wdGlvbnMuZm9udFdlaWdodCA9IFwiNTAwXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3VibWl0ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Ym1pdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnRhYkluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICBvcHRpb25zLnRhYkluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgLy8gQWRkIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLmZvbnRTaXplID0gb3B0aW9ucy5mb250U2l6ZTtcbiAgICAgICAgdGhpcy5fcHJvcGVydGllcy5saW5lSGVpZ2h0ID0gb3B0aW9ucy5saW5lSGVpZ2h0O1xuICAgICAgICB0aGlzLl9wcm9wZXJ0aWVzLnBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJDb2xvciA9IG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmlucHV0LmlkID0gYGlucHV0LSR7Xy5ub3coKX1gO1xuICAgICAgICAvLyBBZGQgc3R5bGluZyB0byB0aGUgaW5wdXQgZWxlbWVudFxuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLndpZHRoID0gX2lucHV0U3R5bGVbXCJ3aWR0aFwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5oZWlnaHQgPSBfaW5wdXRTdHlsZVtcImhlaWdodFwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250U2l6ZSA9IF9pbnB1dFN0eWxlW1wiZm9udFNpemVcIl0odGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUubGluZUhlaWdodCA9IF9pbnB1dFN0eWxlW1wibGluZUhlaWdodFwiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUucGFkZGluZyA9IF9pbnB1dFN0eWxlW1wicGFkZGluZ1wiXSh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250RmFtaWx5ID0gb3B0aW9ucy5mb250RmFtaWx5O1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmNvbG9yID0gb3B0aW9ucy50ZXh0Q29sb3I7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuZm9udFdlaWdodCA9IG9wdGlvbnMuZm9udFdlaWdodDtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IG9wdGlvbnMudGV4dDtcbiAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBvcHRpb25zLnRhYmluZGV4KTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCBvcHRpb25zLmF1dG9Db3JyZWN0KTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgb3B0aW9ucy5hdXRvQ29tcGxldGUpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jYXBpdGFsaXplXCIsIG9wdGlvbnMuYXV0b0NhcGl0YWxpemUpO1xuICAgICAgICBpZiAob3B0aW9ucy5hdXRvZm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIiwgb3B0aW9ucy5zcGVsbENoZWNrKTtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGlmICgob3B0aW9ucy5nb0J1dHRvbiAmJiAhb3B0aW9ucy5zdWJtaXQpIHx8ICFvcHRpb25zLnN1Ym1pdCkge1xuICAgICAgICAgIHRoaXMuZm9ybS5hY3Rpb24gPSBcIiNcIjtcbiAgICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZm9ybSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICBpZiAodGhpcy5wbGFjZWhvbGRlckNvbG9yKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlckNvbG9yKG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVdGlscy5pc01vYmlsZSgpICYmIG9wdGlvbnMudmlydHVhbEtleWJvYXJkID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleHBvcnRzLmtleWJvYXJkTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlQ3ljbGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9ydHMua2V5Ym9hcmRMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVQbGFjZWhvbGRlckNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHZhciBjc3M7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXJDb2xvciA9IGNvbG9yO1xuICAgICAgICBpZiAodGhpcy5wYWdlU3R5bGUgIT0gbnVsbCkge1xuICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQodGhpcy5wYWdlU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICB0aGlzLnBhZ2VTdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBjc3MgPSBgIyR7dGhpcy5pbnB1dC5pZH06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogJHt0aGlzLnBsYWNlaG9sZGVyQ29sb3J9OyB9YDtcbiAgICAgICAgdGhpcy5wYWdlU3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMucGFnZVN0eWxlKTtcbiAgICAgIH1cblxuICAgICAgZm9jdXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIG9uRm9jdXMoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBjYi5hcHBseSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG9uQmx1cihjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gY2IuYXBwbHkodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfTtcblxuICAgIElucHV0LmRlZmluZShcInN0eWxlXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnN0eWxlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKHRoaXMuaW5wdXQuc3R5bGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIElucHV0LmRlZmluZShcInZhbHVlXCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBJbnB1dDtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnB1dC5qcy5tYXBcbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
