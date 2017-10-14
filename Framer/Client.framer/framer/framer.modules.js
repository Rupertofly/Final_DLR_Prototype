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
var bG_6, concession_Body, concession_But_Back, concession_But_No, concession_But_Yes, concession_i_Centrelink, concession_t_Card, label_27, label_28, label_29, rectangle_27, rectangle_28, rectangle_29;

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
  y: 0,
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
  y: 0,
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


},{}],"ab_contact":[function(require,module,exports){
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
var bG_9, hourIncome_Body, hourIncome_But_Next, hourIncome_Txt_Hours, hourIncome_Txt_Rate, hourIncome_i_breifcase, hourlyIncome_But_Back, hourlyIncome_t_Hours, hourlyIncome_t_Rate, hourlyRate, hoursPerWeek, label_38, label_39, rectangle2_2, rectangle2_3, rectangle_38, rectangle_39;

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
  height: 180.69020689655176
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
  borderWidth: 2
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
  y: 12,
  text: "Hourly Rate",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
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

hoursPerWeek = new TextLayer({
  name: "hoursPerWeek",
  parent: hourIncome_Txt_Hours,
  x: 21,
  y: 12,
  text: "Hours per Week",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
});


},{}],"ab_interp":[function(require,module,exports){
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


},{"findModule":"findModule","input-framer/input":"input-framer/input"}],"ab_ndob":[function(require,module,exports){
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
  print(data.ReadAbility);
  print(data.ReadAbility === "rFluent");
  if (name.value !== ("Name" || "") && day.value !== "") {
    data.name = name.value;
    data.Dob = day.value;
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
var i, j, len, ref;

window.aB_Summary_Text = aB_Splash.copy();

window.aB_Summary_Text.name = "aB_Summary_Text";

ref = window.aB_Summary_Text.descendants;
for (j = 0, len = ref.length; j < len; j++) {
  i = ref[j];
  i.destroy();
}

window.bG = new Layer({
  name: "bG",
  parent: aB_Summary_Text,
  x: 0,
  y: 0,
  width: 2048,
  height: 1416,
  backgroundColor: "rgba(250,250,250,1)"
});

window.splash_t_Title = new TextLayer({
  name: "Summary_t_Title",
  parent: aB_Summary_Text,
  x: 564,
  y: 342,
  width: 918.8536370080562,
  text: "Summary",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 700,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});

window.splash_t_Text = new TextLayer({
  name: "Summary_t_Text",
  parent: aB_Summary_Text,
  x: Align.centerX,
  y: 430,
  width: 900,
  text: (JSON.stringify(window.data)) + " o clock",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
});


},{}],"ab_weekinc":[function(require,module,exports){
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
  height: 200
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


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9maW5kTW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfd2Vla2luYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3N1bW1hcnkuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9zcGxhc2guY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9yZWFkc3BlYWsuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9uZG9iLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfbGFuZy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2ludGVycC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2hvdXJpbmMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9oZWxwLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfZW1wbG95LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfY29udGFjdC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2NvbmMuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9WaWV3Q29udHJvbGxlci5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCJleHBvcnRzLmtleWJvYXJkTGF5ZXIgPSBuZXcgTGF5ZXJcblx0eDowLCB5OlNjcmVlbi5oZWlnaHQsIHdpZHRoOlNjcmVlbi53aWR0aCwgaGVpZ2h0OjQzMlxuXHRodG1sOlwiPGltZyBzdHlsZT0nd2lkdGg6IDEwMCU7JyBzcmM9J21vZHVsZXMva2V5Ym9hcmQucG5nJy8+XCJcblxuI3NjcmVlbiB3aWR0aCB2cy4gc2l6ZSBvZiBpbWFnZSB3aWR0aFxuZ3Jvd3RoUmF0aW8gPSBTY3JlZW4ud2lkdGggLyA3MzJcbmltYWdlSGVpZ2h0ID0gZ3Jvd3RoUmF0aW8gKiA0MzJcblxuIyBFeHRlbmRzIHRoZSBMYXllclN0eWxlIGNsYXNzIHdoaWNoIGRvZXMgdGhlIHBpeGVsIHJhdGlvIGNhbGN1bGF0aW9ucyBpbiBmcmFtZXJcbl9pbnB1dFN0eWxlID1cblx0T2JqZWN0LmFzc2lnbih7fSwgRnJhbWVyLkxheWVyU3R5bGUsXG5cdFx0Y2FsY3VsYXRlUGl4ZWxSYXRpbyA9IChsYXllciwgdmFsdWUpIC0+XG5cdFx0XHQodmFsdWUgKiBsYXllci5jb250ZXh0LnBpeGVsTXVsdGlwbGllcikgKyBcInB4XCJcblxuXHRcdGZvbnRTaXplOiAobGF5ZXIpIC0+XG5cdFx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBsYXllci5fcHJvcGVydGllcy5mb250U2l6ZSlcblxuXHRcdGxpbmVIZWlnaHQ6IChsYXllcikgLT5cblx0XHRcdChsYXllci5fcHJvcGVydGllcy5saW5lSGVpZ2h0KSArIFwiZW1cIlxuXG5cdFx0cGFkZGluZzogKGxheWVyKSAtPlxuXHRcdFx0eyBwaXhlbE11bHRpcGxpZXIgfSA9IGxheWVyLmNvbnRleHRcblx0XHRcdHBhZGRpbmcgPSBbXVxuXHRcdFx0cGFkZGluZ1ZhbHVlID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZ1xuXG5cdFx0XHQjIENoZWNrIGlmIHdlIGhhdmUgYSBzaW5nbGUgbnVtYmVyIGFzIGludGVnZXJcblx0XHRcdGlmIE51bWJlci5pc0ludGVnZXIocGFkZGluZ1ZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gY2FsY3VsYXRlUGl4ZWxSYXRpbyhsYXllciwgcGFkZGluZ1ZhbHVlKVxuXG5cdFx0XHQjIElmIHdlIGhhdmUgbXVsdGlwbGUgdmFsdWVzIHRoZXkgY29tZSBhcyBzdHJpbmcgKGUuZy4gXCIxIDIgMyA0XCIpXG5cdFx0XHRwYWRkaW5nVmFsdWVzID0gbGF5ZXIuX3Byb3BlcnRpZXMucGFkZGluZy5zcGxpdChcIiBcIilcblxuXHRcdFx0c3dpdGNoIHBhZGRpbmdWYWx1ZXMubGVuZ3RoXG5cdFx0XHRcdHdoZW4gNFxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzNdKVxuXG5cdFx0XHRcdHdoZW4gM1xuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMl0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdHdoZW4gMlxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzFdKVxuXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRwYWRkaW5nLnRvcCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLnJpZ2h0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcuYm90dG9tID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcubGVmdCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblxuXHRcdFx0IyBSZXR1cm4gYXMgNC12YWx1ZSBzdHJpbmcgKGUuZyBcIjFweCAycHggM3B4IDRweFwiKVxuXHRcdFx0XCIje3BhZGRpbmcudG9wICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5yaWdodCAqIHBpeGVsTXVsdGlwbGllcn1weCAje3BhZGRpbmcuYm90dG9tICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5sZWZ0ICogcGl4ZWxNdWx0aXBsaWVyfXB4XCJcblx0KVxuXG5leHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVzID1cblx0c2hvd246XG5cdFx0eTogU2NyZWVuLmhlaWdodCAtIGltYWdlSGVpZ2h0XG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMuYW5pbWF0aW9uT3B0aW9ucyA9XG5cdGN1cnZlOiBcInNwcmluZyg1MDAsNTAsMTUpXCJcblxuY2xhc3MgZXhwb3J0cy5JbnB1dCBleHRlbmRzIExheWVyXG5cdEBkZWZpbmUgXCJzdHlsZVwiLFxuXHRcdGdldDogLT4gQGlucHV0LnN0eWxlXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRfLmV4dGVuZCBAaW5wdXQuc3R5bGUsIHZhbHVlXG5cblx0QGRlZmluZSBcInZhbHVlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQudmFsdWVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdEBpbnB1dC52YWx1ZSA9IHZhbHVlXG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0b3B0aW9ucy5zZXR1cCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5jbGlwID89IGZhbHNlXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gNjBcblx0XHRvcHRpb25zLmJhY2tncm91bmRDb2xvciA/PSBpZiBvcHRpb25zLnNldHVwIHRoZW4gXCJyZ2JhKDI1NSwgNjAsIDQ3LCAuNSlcIiBlbHNlIFwidHJhbnNwYXJlbnRcIlxuXHRcdG9wdGlvbnMuZm9udFNpemUgPz0gMzBcblx0XHRvcHRpb25zLmxpbmVIZWlnaHQgPz0gMVxuXHRcdG9wdGlvbnMucGFkZGluZyA/PSAxMFxuXHRcdG9wdGlvbnMudGV4dCA/PSBcIlwiXG5cdFx0b3B0aW9ucy5wbGFjZWhvbGRlciA/PSBcIlwiXG5cdFx0b3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgPz0gaWYgVXRpbHMuaXNNb2JpbGUoKSB0aGVuIGZhbHNlIGVsc2UgdHJ1ZVxuXHRcdG9wdGlvbnMudHlwZSA/PSBcInRleHRcIlxuXHRcdG9wdGlvbnMuZ29CdXR0b24gPz0gZmFsc2Vcblx0XHRvcHRpb25zLmF1dG9Db3JyZWN0ID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NvbXBsZXRlID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5zcGVsbENoZWNrID89IFwib25cIlxuXHRcdG9wdGlvbnMuYXV0b2ZvY3VzID89IGZhbHNlXG5cdFx0b3B0aW9ucy50ZXh0Q29sb3IgPz0gXCIjMDAwXCJcblx0XHRvcHRpb25zLmZvbnRGYW1pbHkgPz0gXCItYXBwbGUtc3lzdGVtXCJcblx0XHRvcHRpb25zLmZvbnRXZWlnaHQgPz0gXCI1MDBcIlxuXHRcdG9wdGlvbnMuc3VibWl0ID89IGZhbHNlXG5cdFx0b3B0aW9ucy50YWJJbmRleCA/PSAwXG5cblx0XHRzdXBlciBvcHRpb25zXG5cblx0XHQjIEFkZCBhZGRpdGlvbmFsIHByb3BlcnRpZXNcblx0XHRAX3Byb3BlcnRpZXMuZm9udFNpemUgPSBvcHRpb25zLmZvbnRTaXplXG5cdFx0QF9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHRcblx0XHRAX3Byb3BlcnRpZXMucGFkZGluZyA9IG9wdGlvbnMucGFkZGluZ1xuXG5cdFx0QHBsYWNlaG9sZGVyQ29sb3IgPSBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgb3B0aW9ucy5wbGFjZWhvbGRlckNvbG9yP1xuXHRcdEBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJpbnB1dFwiXG5cdFx0QGlucHV0LmlkID0gXCJpbnB1dC0je18ubm93KCl9XCJcblxuXHRcdCMgQWRkIHN0eWxpbmcgdG8gdGhlIGlucHV0IGVsZW1lbnRcblx0XHRAaW5wdXQuc3R5bGUud2lkdGggPSBfaW5wdXRTdHlsZVtcIndpZHRoXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmhlaWdodCA9IF9pbnB1dFN0eWxlW1wiaGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRTaXplID0gX2lucHV0U3R5bGVbXCJmb250U2l6ZVwiXShAKVxuXHRcdEBpbnB1dC5zdHlsZS5saW5lSGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJsaW5lSGVpZ2h0XCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIlxuXHRcdEBpbnB1dC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5wYWRkaW5nID0gX2lucHV0U3R5bGVbXCJwYWRkaW5nXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRGYW1pbHkgPSBvcHRpb25zLmZvbnRGYW1pbHlcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBvcHRpb25zLnRleHRDb2xvclxuXHRcdEBpbnB1dC5zdHlsZS5mb250V2VpZ2h0ID0gb3B0aW9ucy5mb250V2VpZ2h0XG5cblx0XHRAaW5wdXQudmFsdWUgPSBvcHRpb25zLnRleHRcblx0XHRAaW5wdXQudHlwZSA9IG9wdGlvbnMudHlwZVxuXHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IG9wdGlvbnMucGxhY2Vob2xkZXJcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwidGFiaW5kZXhcIiwgb3B0aW9ucy50YWJpbmRleFxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY29ycmVjdFwiLCBvcHRpb25zLmF1dG9Db3JyZWN0XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jb21wbGV0ZVwiLCBvcHRpb25zLmF1dG9Db21wbGV0ZVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJhdXRvY2FwaXRhbGl6ZVwiLCBvcHRpb25zLmF1dG9DYXBpdGFsaXplXG5cdFx0aWYgb3B0aW9ucy5hdXRvZm9jdXMgPT0gdHJ1ZVxuXHRcdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9mb2N1c1wiLCB0cnVlXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcInNwZWxsY2hlY2tcIiwgb3B0aW9ucy5zcGVsbENoZWNrXG5cdFx0QGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwiZm9ybVwiXG5cblx0XHRpZiAob3B0aW9ucy5nb0J1dHRvbiAmJiAhb3B0aW9ucy5zdWJtaXQpIHx8ICFvcHRpb25zLnN1Ym1pdFxuXHRcdFx0QGZvcm0uYWN0aW9uID0gXCIjXCJcblx0XHRcdEBmb3JtLmFkZEV2ZW50TGlzdGVuZXIgXCJzdWJtaXRcIiwgKGV2ZW50KSAtPlxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRAZm9ybS5hcHBlbmRDaGlsZCBAaW5wdXRcblx0XHRAX2VsZW1lbnQuYXBwZW5kQ2hpbGQgQGZvcm1cblxuXHRcdEBiYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCJcblx0XHRAdXBkYXRlUGxhY2Vob2xkZXJDb2xvciBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3IgaWYgQHBsYWNlaG9sZGVyQ29sb3JcblxuXHRcdCNvbmx5IHNob3cgaG9ub3IgdmlydHVhbCBrZXlib2FyZCBvcHRpb24gd2hlbiBub3Qgb24gbW9iaWxlLFxuXHRcdCNvdGhlcndpc2UgaWdub3JlXG5cdFx0aWYgIVV0aWxzLmlzTW9iaWxlKCkgJiYgb3B0aW9ucy52aXJ0dWFsS2V5Ym9hcmQgaXMgdHJ1ZVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuYnJpbmdUb0Zyb250KClcblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlQ3ljbGUoKVxuXHRcdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJibHVyXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5hbmltYXRlKFwiZGVmYXVsdFwiKVxuXG5cdHVwZGF0ZVBsYWNlaG9sZGVyQ29sb3I6IChjb2xvcikgLT5cblx0XHRAcGxhY2Vob2xkZXJDb2xvciA9IGNvbG9yXG5cdFx0aWYgQHBhZ2VTdHlsZT9cblx0XHRcdGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQgQHBhZ2VTdHlsZVxuXHRcdEBwYWdlU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwic3R5bGVcIlxuXHRcdEBwYWdlU3R5bGUudHlwZSA9IFwidGV4dC9jc3NcIlxuXHRcdGNzcyA9IFwiIyN7QGlucHV0LmlkfTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BwbGFjZWhvbGRlckNvbG9yfTsgfVwiXG5cdFx0QHBhZ2VTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSBjc3MpXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCBAcGFnZVN0eWxlXG5cblx0Zm9jdXM6ICgpIC0+XG5cdFx0QGlucHV0LmZvY3VzKClcblxuXHRvbkZvY3VzOiAoY2IpIC0+XG5cdFx0QGlucHV0LmFkZEV2ZW50TGlzdGVuZXIgXCJmb2N1c1wiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcblxuXHRvbkJsdXI6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdGNiLmFwcGx5KEApXG4iLCJfZ2V0SGllcmFyY2h5ID0gKGxheWVyKSAtPlxuICBzdHJpbmcgPSAnJ1xuICBmb3IgYSBpbiBsYXllci5hbmNlc3RvcnMoKVxuICAgIHN0cmluZyA9IGEubmFtZSsnPicrc3RyaW5nXG4gIHJldHVybiBzdHJpbmcgPSBzdHJpbmcrbGF5ZXIubmFtZVxuXG5fbWF0Y2ggPSAoaGllcmFyY2h5LCBzdHJpbmcpIC0+XG4gICMgcHJlcGFyZSByZWdleCB0b2tlbnNcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccyo+XFxzKi9nLCc+JykgIyBjbGVhbiB1cCBzcGFjZXMgYXJvdW5kIGFycm93c1xuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyonKS5qb2luKCdbXj5dKicpICMgYXN0ZXJpa3MgYXMgbGF5ZXIgbmFtZSB3aWxkY2FyZFxuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJyAnKS5qb2luKCcoPzouKik+JykgIyBzcGFjZSBhcyBzdHJ1Y3R1cmUgd2lsZGNhcmRcbiAgc3RyaW5nID0gc3RyaW5nLnNwbGl0KCcsJykuam9pbignJHwnKSAjIGFsbG93IG11bHRpcGxlIHNlYXJjaGVzIHVzaW5nIGNvbW1hXG4gIHJlZ2V4U3RyaW5nID0gXCIoXnw+KVwiK3N0cmluZytcIiRcIiAjIGFsd2F5cyBib3R0b20gbGF5ZXIsIG1heWJlIHBhcnQgb2YgaGllcmFyY2h5XG5cbiAgcmVnRXhwID0gbmV3IFJlZ0V4cChyZWdleFN0cmluZykgXG4gIHJldHVybiBoaWVyYXJjaHkubWF0Y2gocmVnRXhwKVxuXG5fZmluZEFsbCA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPlxuICBsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXG4gIGlmIHNlbGVjdG9yP1xuICAgIHN0cmluZ05lZWRzUmVnZXggPSBfLmZpbmQgWycqJywnICcsJz4nLCcsJ10sIChjKSAtPiBfLmluY2x1ZGVzIHNlbGVjdG9yLGNcbiAgICB1bmxlc3Mgc3RyaW5nTmVlZHNSZWdleCBvciBmcm9tTGF5ZXJcbiAgICAgIGxheWVycyA9IF8uZmlsdGVyIGxheWVycywgKGxheWVyKSAtPiBcbiAgICAgICAgaWYgbGF5ZXIubmFtZSBpcyBzZWxlY3RvciB0aGVuIHRydWVcbiAgICBlbHNlXG4gICAgICBsYXllcnMgPSBfLmZpbHRlciBsYXllcnMsIChsYXllcikgLT5cbiAgICAgICAgICBoaWVyYXJjaHkgPSBfZ2V0SGllcmFyY2h5KGxheWVyKVxuICAgICAgICAgIGlmIGZyb21MYXllcj9cbiAgICAgICAgICAgIF9tYXRjaChoaWVyYXJjaHksIGZyb21MYXllci5uYW1lKycgJytzZWxlY3RvcilcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBfbWF0Y2goaGllcmFyY2h5LCBzZWxlY3RvcilcbiAgZWxzZVxuICAgIGxheWVyc1xuXG5cbiMgR2xvYmFsXG5leHBvcnRzLkZpbmQgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cbmV4cG9ydHMuxpIgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilbMF1cblxuZXhwb3J0cy5GaW5kQWxsID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpXG5leHBvcnRzLsaSxpIgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVxuXG4jIE1ldGhvZHNcbkxheWVyOjpmaW5kICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClbMF1cbkxheWVyOjrGkiAgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApWzBdXG5cbkxheWVyOjpmaW5kQWxsICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClcbkxheWVyOjrGksaSICAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKSIsIndpbmRvdy5hQl9XZWVrSW5jb21lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfV2Vla0luY29tZVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxud2Vla0luY29tZV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9XZWVrSW5jb21lXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR184ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfOFwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG53ZWVrSW5jb21lX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9CdXRfQmFja1wiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzM2ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM2XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzZcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG53ZWVrSW5jb21lX3RfSW5jb21lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfdF9JbmNvbWVcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiAzOTNcbiAgeTogMzQwXG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIHdlZWtseSBpbmNvbWUgYWZ0ZXIgdGF4P1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2Vla0luY29tZV9pX2JyaWVmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcIndlZWtJbmNvbWVfaV9icmllZmNhc2VcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuICBpbWFnZTogXCJpbWFnZXMvRW1wbG95bWVudF9pX0JyZWlmY2FzZS5zdmdcIlxuXG53ZWVrSW5jb21lX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9CdXRfTmV4dFwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zN1wiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cbmxhYmVsXzM3ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM3XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbiIsIndpbmRvdy5hQl9TdW1tYXJ5X1RleHQgPSBhQl9TcGxhc2guY29weSgpXG53aW5kb3cuYUJfU3VtbWFyeV9UZXh0Lm5hbWUgPSBcImFCX1N1bW1hcnlfVGV4dFwiXG5mb3IgaSBpbiB3aW5kb3cuYUJfU3VtbWFyeV9UZXh0LmRlc2NlbmRhbnRzXG4gIGkuZGVzdHJveSgpXG53aW5kb3cuYkcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR1wiXG4gIHBhcmVudDogYUJfU3VtbWFyeV9UZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxud2luZG93LnNwbGFzaF90X1RpdGxlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIlN1bW1hcnlfdF9UaXRsZVwiXG4gIHBhcmVudDogYUJfU3VtbWFyeV9UZXh0XG4gIHg6IDU2NFxuICB5OiAzNDJcbiAgd2lkdGg6IDkxOC44NTM2MzcwMDgwNTYyXG4gIHRleHQ6IFwiU3VtbWFyeVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNzAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2luZG93LnNwbGFzaF90X1RleHQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiU3VtbWFyeV90X1RleHRcIlxuICBwYXJlbnQ6IGFCX1N1bW1hcnlfVGV4dFxuICB4OiBBbGlnbi5jZW50ZXJYXG4gIHk6IDQzMFxuICB3aWR0aDogOTAwXG4gIHRleHQ6IFwiI3tKU09OLnN0cmluZ2lmeSB3aW5kb3cuZGF0YX0gbyBjbG9ja1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9TcGxhc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJhQl9TcGxhc2hcIlxuXHR4OiAwXG5cdHk6IDBcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNTM2XG5cbndpbmRvdy5zcGxhc2hfQm9keSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9Cb2R5XCJcblx0cGFyZW50OiBhQl9TcGxhc2hcblx0eDogMFxuXHR5OiAxMzhcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cbndpbmRvdy5iRyA9IG5ldyBMYXllclxuXHRuYW1lOiBcImJHXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxud2luZG93LnNwbGFzaF9pX0xvZ28gPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfaV9Mb2dvXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA4ODRcblx0eTogMjJcblx0d2lkdGg6IDI3NlxuXHRoZWlnaHQ6IDI3NlxuXHRpbWFnZTogXCJpbWFnZXMvU3BsYXNoX2lfTG9nby5zdmdcIlxuXG53aW5kb3cuc3BsYXNoX3RfVGl0bGUgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3BsYXNoX3RfVGl0bGVcIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDU2NFxuXHR5OiAzNDJcblx0d2lkdGg6IDkxOC44NTM2MzcwMDgwNTYyXG5cdHRleHQ6IFwiVmljdG9yaWEgTGVnYWwgQWlkXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA3MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53aW5kb3cuc3BsYXNoX3RfSGVhZGluZyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfdF9IZWFkaW5nXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA1NjRcblx0eTogNTA0XG5cdHdpZHRoOiA5MTcuODg2OTI3NzU5MTAyXG5cdHRleHQ6IFwiRHV0eSBMYXd5ZXIgU2VydmljZeKAqEFwcGxpY2F0aW9uIGZvciBBaWRcIlxuXHRmb250U2l6ZTogNzJcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDYwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfQnV0X0JlZ2luID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX0J1dF9CZWdpblwiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNzI0XG5cdHk6IDgyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNjAwXG5cdGhlaWdodDogMjgwXG5cbndpbmRvdy5zcGxhc2hfQnV0X0JlZ2luLm9uIEV2ZW50cy5UYXAsIC0+XG5cdGZsb3cuc2hvd05leHQgxpIoXCJhQl9MYW5ndWFnZVwiKVxuXG5cbndpbmRvdy5yZWN0YW5nbGUgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVcIlxuXHRwYXJlbnQ6IHNwbGFzaF9CdXRfQmVnaW5cblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA2MDBcblx0aGVpZ2h0OiAyODBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG53aW5kb3cubGFiZWwgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxcIlxuXHRwYXJlbnQ6IHNwbGFzaF9CdXRfQmVnaW5cblx0eDogMjAyXG5cdHk6IDg2XG5cdHRleHQ6IFwiQmVnaW5cIlxuXHRmb250U2l6ZTogNzJcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDYwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgXCJpbnB1dC1mcmFtZXIvaW5wdXRcIlxuXG53aW5kb3cuUlZhbHMgPVxuICByTm9uZTogMFxuICByU29tZXdoYXQ6IDBcbiAgckdvb2Q6IDBcbiAgckZsdWVudDogMFxud2luZG93LlNWYWxzID1cbiAgc05vbmU6IDBcbiAgc1NvbWV3aGF0OiAwXG4gIHNHb29kOiAwXG4gIHNGbHVlbnQ6IDBcblxud2luZG93LmFCX1JlYWRTcGVhayA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX1JlYWRTcGVha1wiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxucmVhZFNwZWFrX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQm9keVwiXG4gIHBhcmVudDogYUJfUmVhZFNwZWFrXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR180ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbnJlYWRTcGVha19pX1JlYWQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfaV9SZWFkXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0MDRcbiAgeTogMzcwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMDguMzAzNjk0ODQzOTU2NjZcbiAgaW1hZ2U6IFwiaW1hZ2VzL1JlYWRTcGVha19pX1JlYWQuc3ZnXCJcblxucmVhZFNwZWFrX2lfU3BlYWsgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfaV9TcGVha1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDEwXG4gIHk6IDgzOFxuICB3aWR0aDogMTA3LjY1OTIzNTcxNTExOTU2XG4gIGhlaWdodDogMTIwXG4gIGltYWdlOiBcImltYWdlcy9SZWFkU3BlYWtfaV9TcGVhay5zdmdcIlxuXG5yZWFkU3BlYWtfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzE0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxucmVhZFNwZWFrX3RfUmVhZCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfdF9SZWFkXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0OTZcbiAgeTogMTk4XG4gIHRleHQ6IFwiSG93IHdlbGwgY2FuIHlvdSByZWFkIEVuZ2xpc2g/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfdF9TcGVhayA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfdF9TcGVha1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDc0XG4gIHk6IDY4MFxuICB0ZXh0OiBcIkhvdyB3ZWxsIGNhbiB5b3Ugc3BlYWsgRW5nbGlzaD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfck5vbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JOb25lXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA1NjRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfck5vbmUub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwick5vbmVcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE1ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE1XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JOb25lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTVcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfck5vbmVcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIk5vbmVcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfc05vbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NOb25lXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA1NjRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc05vbmUub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlNWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuU1ZhbHMsIFwic05vbmVcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE2ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE2XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NOb25lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTZcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc05vbmVcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIk5vbmVcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfclNvbWV3aGF0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDg4NFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yU29tZXdoYXQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwiclNvbWV3aGF0XCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xN1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xNyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xN1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yU29tZXdoYXRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIlNvbWV3aGF0XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NTb21ld2hhdCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc1NvbWV3aGF0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA4ODRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc1NvbWV3aGF0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlNWYWxzLCBcInNTb21ld2hhdFwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMThcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc1NvbWV3aGF0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTggPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMThcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc1NvbWV3aGF0XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJTb21ld2hhdFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yR29vZCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfckdvb2RcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDEyMDRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfckdvb2Qub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCB3aW5kb3cuUlZhbHMsIFwickdvb2RcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE5XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JHb29kXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTlcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckdvb2RcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkdvb2RcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfc0dvb2QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NHb29kXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMjA0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NHb29kLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlNWYWxzLCBcInNHb29kXCIpXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMjAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjBcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0dvb2RcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yMFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zR29vZFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiR29vZFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9yRmx1ZW50ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yRmx1ZW50XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxNTI0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JGbHVlbnQub24gRXZlbnRzLlRhcCwgLT5cbiAgd2luZG93LlJWYWxzID0gd2luZG93LmNoYW5nZVNlbCh3aW5kb3cuUlZhbHMsIFwickZsdWVudFwiKVxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzIxID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIxXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JGbHVlbnRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjM5LDIzOSwyMzksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTgzLDE4MywxODMsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yMVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yRmx1ZW50XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJGbHVlbnRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbnJlYWRTcGVha19CdXRfc0ZsdWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfc0ZsdWVudFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTUyNFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zRmx1ZW50Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlNWYWxzLCBcInNGbHVlbnRcIilcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8yMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yMlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zRmx1ZW50XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjJcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0ZsdWVudFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiRmx1ZW50XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X05leHRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cblxuXG5yZWN0YW5nbGVfMjMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjNcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIzXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuIiwiSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG57xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbndpbmRvdy5hQl9ORE9CID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfTkRPQlwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxubkRPQl9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9Cb2R5XCJcbiAgcGFyZW50OiBhQl9ORE9CXG4gIHg6IDBcbiAgeTogMTM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18xMCA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzEwXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbm5ET0JfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfNDAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDBcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MFwiXG4gIHBhcmVudDogbkRPQl9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbm5ET0JfdF9OYW1lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIm5ET0JfdF9OYW1lXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNjgwXG4gIHk6IDE3NFxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciBuYW1lP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubkRPQl90X0RvYiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RfRG9iXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNTY4XG4gIHk6IDY1NFxuICB0ZXh0OiBcIldoYXQgaXMgeW91ciBkYXRlIG9mIGJpcnRoP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubkRPQl9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQnV0X05leHRcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxubkRPQl9CdXRfTmV4dC5vbiBFdmVudHMuVGFwLCAtPlxuICBwcmludCBkYXRhLlJlYWRBYmlsaXR5XG4gIHByaW50IGRhdGEuUmVhZEFiaWxpdHkgaXMgKFwickZsdWVudFwiKVxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgZGF0YS5uYW1lID0gbmFtZS52YWx1ZVxuICAgIGRhdGEuRG9iID0gZGF5LnZhbHVlXG4gICAgaWYgZGF0YS5TcGVha0FiaWxpdHkgPT0gXCJzR29vZFwiIG9yIGRhdGEuU3BlYWtBYmlsaXR5ID09IFwic0ZsdWVudFwiXG4gICAgICBmbG93LnNob3dOZXh0IMaSKFwiYUJfQ29udGFjdFwiKVxuICAgICAgZGF0YS5pbnRlcnAgPSBcIm5vbmVcIlxuICAgIGVsc2VcbiAgICAgIGZsb3cuc2hvd05leHQgxpIoXCJhQl9JbnRlcnByZXRlclwiKVxuXG5yZWN0YW5nbGVfNDEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDFcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MVwiXG4gIHBhcmVudDogbkRPQl9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5uRE9CX2lfUGVuID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9pX1BlblwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAzNDRcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDEyMC4wMDAwMTg3NDk5NjE4NVxuICBpbWFnZTogXCJpbWFnZXMvTkRPQl9pX1Blbi5zdmdcIlxuXG5uRE9CX2lfQ2FsID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9pX0NhbFwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiA4MjJcbiAgd2lkdGg6IDEyMFxuICBoZWlnaHQ6IDEyMS45MDgwNzg3ODMwNTU4NFxuICBpbWFnZTogXCJpbWFnZXMvTkRPQl9pX0NhbC5zdmdcIlxuXG5uRE9CX3RleHRfTmFtZSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfdGV4dF9OYW1lXCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogNTY0XG4gIHk6IDM0MlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzRcIlxuICBwYXJlbnQ6IG5ET0JfdGV4dF9OYW1lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbm5hbWUgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJuYW1lXCJcbiAgcGFyZW50OiBuRE9CX3RleHRfTmFtZVxuICB4OiAyMVxuICB5OiAwXG4gIGhlaWdodDogMTIwXG4gIHZpcnR1YWxLZXlib2FyZDogZmFsc2VcbiAgdGV4dDogXCJOYW1lXCJcbiAgdGV4dENvbG91cjogXCIjQzk4NjM5XCJcbiAgZm9udFNpemU6IFwiNzJcIlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5uYW1lLnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGNvbG9yOiBcIiNDOTg2MzlcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG5cbm5ET0JfQnV0X0RheSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQnV0X0RheVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IEFsaWduLmNlbnRlclxuICB5OiA4MjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDcwMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzVcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0RheVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDcwMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsMjQwLDI0OSwxKVwiXG4gIGJvcmRlclJhZGl1czogMjBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSg1NywxNTEsMTkyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmRheSA9IG5ldyBJbnB1dE1vZHVsZS5JbnB1dFxuICBuYW1lOiBcImRheVwiXG4gIHBhcmVudDogbkRPQl9CdXRfRGF5XG4gIHg6IDE1XG4gIHk6IDEyXG4gIGhlaWdodDogMTAwXG4gIHdpZHRoOiA3MDBcbiAgdGV4dDogXCJET0JcIlxuICB0eXBlOiBcImRhdGVcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxNzEsMjE4LDIzOSwxKVwiXG5kYXkuc3R5bGUgPVxuICBmb250U2l6ZTogXCI3MnB4XCJcbiAgY29sb3I6IFwiIzI1ODJBQlwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbmRheS5pbnB1dC5tYXggPSBcIjIwMTAtMDEtMDFcIlxuZGF5LmlucHV0LnZhbHVlID0gXCIyMDEwLTAxLTAxXCJcbm5ET0JfQnV0X05leHQudmlzaWJsZSA9IGZhbHNlXG5kYXkub24gXCJpbnB1dFwiLCAtPlxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgbkRPQl9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxubmFtZS5vbiBcImlucHV0XCIsIC0+XG4gIGlmIG5hbWUudmFsdWUgaXNudCAoXCJOYW1lXCIgb3IgXCJcIikgYW5kIGRheS52YWx1ZSBpc250IFwiXCJcbiAgICBuRE9CX0J1dF9OZXh0LnZpc2libGUgPSB0cnVlXG5uYW1lLm9uIFwia2V5dXBcIiwgKGV2ZW50KSAtPlxuICBpZiBldmVudC53aGljaCBpcyAxMyB0aGVuIG5hbWUuaW5wdXQuYmx1cigpXG5uYW1lLm9uRm9jdXMgLT5cbiAgaWYgQHZhbHVlIGlzIFwiTmFtZVwiIHRoZW4gQHZhbHVlID0gXCJcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlIFwiaW5wdXQtZnJhbWVyL2lucHV0XCJcbndpbmRvdy5hQl9MYW5ndWFnZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImFCX0xhbmd1YWdlXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG5sYW5ndWFnZV9Cb2R5ID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQm9keVwiXG5cdHBhcmVudDogYUJfTGFuZ3VhZ2Vcblx0eDogMFxuXHR5OiAxMzhcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cbmJHXzIgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR18yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE0MTZcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5sYW5ndWFnZV9CdXRfRW5nbGlzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9FbmdsaXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxubGFuZ3VhZ2VfQnV0X0VuZ2xpc2gub24gRXZlbnRzLlRhcCwgLT5cblx0ZGF0YS5sYW5ndWFnZSA9IFwiRW5nbGlzaFwiXG5cdGZsb3cuc2hvd05leHQgxpIoXCJhQl9IZWxwXCIpLCBzY3JvbGw6IGZhbHNlXG5cbnJlY3RhbmdsZV8yID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzJcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9FbmdsaXNoXG5cdHg6IDEyNVxuXHR5OiA2MlxuXHR0ZXh0OiBcIkVuZ2xpc2hcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9DaGluZXNlID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0NoaW5lc2VcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzNcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9DaGluZXNlXG5cdHg6IDE2NFxuXHR5OiA2MlxuXHR0ZXh0OiBcIuS4reaWh1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1RoYWkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVGhhaVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzQgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfNFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1RoYWlcblx0eDogMTAxXG5cdHk6IDYyXG5cdHRleHQ6IFwi4LmE4LiX4LiiIOKAkyDguYTguJfguKJcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9BcmFiaWMgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfQXJhYmljXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiAzNDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNSA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV81XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQXJhYmljXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF81ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzVcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9BcmFiaWNcblx0eDogMTU4XG5cdHk6IDYyXG5cdHRleHQ6IFwi2LnYsdio2YpcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9TcGFuaXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1NwYW5pc2hcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV82ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF82ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzZcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9TcGFuaXNoXG5cdHg6IDExN1xuXHR5OiA2MlxuXHR0ZXh0OiBcIkVzcGHDsW9sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfR3JlZWsgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfR3JlZWtcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogODA0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV83ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzdcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9HcmVla1xuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF83XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfR3JlZWtcblx0eDogMTAyXG5cdHk6IDYyXG5cdHRleHQ6IFwizpXOu867zrd2zrnOus6sXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVmlldCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9WaWV0XCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzggPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1ZpZXRcblx0eDogMTEwXG5cdHk6IDYyXG5cdHRleHQ6IFwiVmnhu4d0LW5n4buvXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfVHVya2lzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9UdXJraXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogNjIyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzkgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfOVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1R1cmtpc2hcblx0eDogMTM1XG5cdHk6IDYyXG5cdHRleHQ6IFwiVMO8cmvDp2VcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9QZXJzaWFuID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1BlcnNpYW5cIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMTM2NFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMTAgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfMTBcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9QZXJzaWFuXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMCA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8xMFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X1BlcnNpYW5cblx0eDogMTUxXG5cdHk6IDYyXG5cdHRleHQ6IFwi2YHYp9ixINizXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuIiwid2luZG93LmFCX0ludGVycHJldGVyID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSW50ZXJwcmV0ZXJcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmludGVycF9ib2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX2JvZHlcIlxuICBwYXJlbnQ6IGFCX0ludGVycHJldGVyXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR181ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNVwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmludGVycF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9CdXRfQmFja1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMjQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjRcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI0ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI0XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5pbnRlcnBfdF9JbnRlcnByZXRvciA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfdF9JbnRlcnByZXRvclwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogNTU0XG4gIHk6IDM0MFxuICB0ZXh0OiBcIkRvIHlvdSBuZWVkIGFuIGludGVycHJldGVyP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaW50ZXJwX2lfTGFuZ3VhZ2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfaV9MYW5ndWFnZVwiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogOTUwXG4gIHk6IDE0MFxuICB3aWR0aDogMTUwXG4gIGhlaWdodDogMTU1XG4gIGltYWdlOiBcImltYWdlcy9JbnRlcnBfaV9MYW5ndWFnZS5zdmdcIlxuXG5pbnRlcnBfQnV0X25vID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX0J1dF9ub1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMTIwNFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5cbnJlY3RhbmdsZV8yNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNVwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9ub1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNVwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9ub1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICB0ZXh0OiBcIk5vXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcblxuaW50ZXJwX0J1dF95ZXMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfQnV0X3llc1wiXG4gIHBhcmVudDogaW50ZXJwX2JvZHlcbiAgeDogMjQ0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5cbnJlY3RhbmdsZV8yNiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yNlwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF95ZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0NSwyMzAsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTA4LDE3NiwxMDEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNlwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF95ZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIiIsIndpbmRvdy5hQl9Ib3VySW5jb21lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSG91ckluY29tZVwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaG91ckluY29tZV9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Ib3VySW5jb21lXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR185ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfOVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5ob3VybHlJbmNvbWVfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VybHlJbmNvbWVfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8zOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zOFwiXG4gIHBhcmVudDogaG91cmx5SW5jb21lX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzggPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmhvdXJseUluY29tZV90X1JhdGUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX3RfUmF0ZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDQ1OFxuICB5OiAzNjJcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgSG91cmx5IHJhdGUgYWZ0ZXIgdGF4P1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaG91cmx5SW5jb21lX3RfSG91cnMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX3RfSG91cnNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiAzMjRcbiAgeTogNjgyXG4gIHRleHQ6IFwiSG93IG1hbnkgSG91cnMgZG8geW91IHdvcmsgcGVyIHdlZWs/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5ob3VySW5jb21lX2lfYnJlaWZjYXNlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9pX2JyZWlmY2FzZVwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDkyNFxuICB5OiA2OFxuICB3aWR0aDogMjAwXG4gIGhlaWdodDogMTgwLjY5MDIwNjg5NjU1MTc2XG5cbmhvdXJJbmNvbWVfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX0J1dF9OZXh0XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM5XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDJcblxubGFiZWxfMzkgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzlcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxuaG91ckluY29tZV9UeHRfUmF0ZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfVHh0X1JhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0ODRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfMlwiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfUmF0ZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5ob3VybHlSYXRlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseVJhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X1JhdGVcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJIb3VybHkgUmF0ZVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmhvdXJJbmNvbWVfVHh0X0hvdXJzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9UeHRfSG91cnNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0ODRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfM1wiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfSG91cnNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuaG91cnNQZXJXZWVrID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJzUGVyV2Vla1wiXG4gIHBhcmVudDogaG91ckluY29tZV9UeHRfSG91cnNcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJIb3VycyBwZXIgV2Vla1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5cbndpbmRvdy5hQl9IZWxwID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfSGVscFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuaGVscF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9IZWxwXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18zID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfM1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5oZWxwX3RfSGVscCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJoZWxwX3RfSGVscFwiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDMwMFxuICB5OiA0MjBcbiAgdGV4dDogXCJJcyBTb21lb25lIEhlbHBpbmcgeW91IEZpbGwgT3V0IFRoaXMgRm9ybT9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhlbHBfaV9CdW95ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9pX0J1b3lcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA4ODRcbiAgeTogNzhcbiAgd2lkdGg6IDI4MFxuICBoZWlnaHQ6IDI4MFxuICBpbWFnZTogXCJpbWFnZXMvSGVscF9pX0J1b3kuc3ZnXCJcblxuaGVscF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8xMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xMVwiXG4gIHBhcmVudDogaGVscF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsMjQwLDI0OSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMTksMTMxLDEzNiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzExID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzExXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaGVscF9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9Ob1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbmhlbHBfQnV0X05vLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IGZhbHNlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9SZWFkU3BlYWtcIilcblxucmVjdGFuZ2xlXzEyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzEyXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xMlwiXG4gIHBhcmVudDogaGVscF9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmhlbHBfQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQnV0X1llc1wiXG4gIHBhcmVudDogaGVscF9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuaGVscF9CdXRfWWVzLm9uIEV2ZW50cy5UYXAsIC0+XG4gIGRhdGEuaGVscCA9IHRydWVcbiAgZmxvdy5zaG93TmV4dCDGkihcImFCX1JlYWRTcGVha1wiKVxuXG5yZWN0YW5nbGVfMTMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTNcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzEzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzEzXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIiIsIndpbmRvdy5hQl9FbXBsb3ltZW50ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfRW1wbG95bWVudFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuZW1wbG95bWVudF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9FbXBsb3ltZW50XG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR183ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfN1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5lbXBsb3ltZW50X0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfQmFja1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzMwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMwXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzBcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5lbXBsb3ltZW50X3RfSG93RW1wbG95ZWQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF90X0hvd0VtcGxveWVkXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogNjE2XG4gIHk6IDM0MFxuICB0ZXh0OiBcIkhvdyBhcmUgeW91IEVtcGxveWVkP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9pX0JyZWlmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfaV9CcmVpZmNhc2VcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuICBpbWFnZTogXCJpbWFnZXMvRW1wbG95bWVudF9pX0JyZWlmY2FzZS5zdmdcIlxuXG5lbXBsb3ltZW50X0J1dF9VbiA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X1VuXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMzI0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfVW5cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzFcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1VuXG4gIHg6IDUyXG4gIHk6IDYyXG4gIHRleHQ6IFwiVW5lbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfU2VsZiA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X1NlbGZcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA4MDRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMyXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9TZWxmXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMyXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9TZWxmXG4gIHg6IDMyXG4gIHk6IDYyXG4gIHRleHQ6IFwiU2VsZiBFbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfQ2FzdWFsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfQ2FzdWFsXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogMTI4NFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzNcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Nhc3VhbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zM1wiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQ2FzdWFsXG4gIHg6IDBcbiAgeTogMjRcbiAgdGV4dDogXCJDYXN1YWxseSDigKhFbXBsb3llZFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfRnVsbFRpbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9GdWxsVGltZVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDEwNDBcbiAgeTogNzk4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM0XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9GdWxsVGltZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcbiAgeDogMFxuICB5OiAyNFxuICB0ZXh0OiBcIkVtcGxveWVkIEZ1bGwgVGltZVwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuZW1wbG95bWVudF9CdXRfUGFydFRpbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA3OThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1BhcnRUaW1lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM1ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM1XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVxuICB4OiAwXG4gIHk6IDI0XG4gIHRleHQ6IFwiRW1wbG95ZWTigKggUGFydCBUaW1lXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuIiwie8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG5JbnB1dE1vZHVsZSA9IHJlcXVpcmUgJ2lucHV0LWZyYW1lci9pbnB1dCdcblxud2luZG93LmFCX0NvbnRhY3QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9Db250YWN0XCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5jb250YWN0X0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X0JvZHlcIlxuICBwYXJlbnQ6IGFCX0NvbnRhY3RcbiAgeDogMFxuICB5OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzExID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfMTFcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuY29udGFjdF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogMTE2MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV80MiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80MlwiXG4gIHBhcmVudDogY29udGFjdF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzQyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQyXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuY29udGFjdF90X0RldGFpbHMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiY29udGFjdF90X0RldGFpbHNcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA3NTZcbiAgeTogMjE2XG4gIHRleHQ6IFwiQ29udGFjdCBEZXRhaWxzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5jb250YWN0X0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9CdXRfTmV4dFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbmNvbnRhY3RfQnV0X05leHQub25UYXAgLT5cbiAgZGF0YS5tYWlsID0gxpIoXCJpbnBfTWFpbFwiKS52YWx1ZVxuICBkYXRhLmVtYWlsID0gxpIoXCJpbnBfRW1haWxcIikudmFsdWVcbiAgZGF0YS5waG9uZSA9IMaSKFwiaW5wX1Bob25lXCIpLnZhbHVlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9Db25jZXNzaW9uXCIpXG5cbnJlY3RhbmdsZV80MyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV80M1wiXG4gIHBhcmVudDogY29udGFjdF9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cbmxhYmVsXzQzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzQzXCJcbiAgcGFyZW50OiBjb250YWN0X0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmNvbnRhY3RfVHh0X01haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9NYWlsXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNTY0XG4gIHk6IDM2MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfOCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZTJfOFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfTWFpbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbm1haWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiTGFiZWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X01haWxcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJNYWlsXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9UeHRfRW1haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9FbWFpbFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA1MjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzlcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X0VtYWlsXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuZW1haWwgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiTGFiZWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X0VtYWlsXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiRW1haWxcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5jb250YWN0X1R4dF9QaG9uZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfVHh0X1Bob25lXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNTY0XG4gIHk6IDY4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogOTIwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZTJfMTAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzEwXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9QaG9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbnBob25lID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9QaG9uZVxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIlBob25lXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9pX0xldHRlciA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfaV9MZXR0ZXJcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogMzc4XG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiA4NC43MDI3OTMxOTIyNDgyOFxuICBpbWFnZTogXCJpbWFnZXMvQ29udGFjdF9pX0xldHRlci5zdmdcIlxuXG5jb250YWN0X2lfRW1haWwgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfRW1haWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogNTIwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMTkuOTk5MzM0NDQzNDk1MDZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9FbWFpbC5zdmdcIlxuXG5jb250YWN0X2lfUGhvbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfUGhvbmVcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA0MDRcbiAgeTogNjgwXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMTkuNjc5Mjk0NzA0ODIwODJcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9QaG9uZS5zdmdcIiIsIndpbmRvdy5hQl9Db25jZXNzaW9uID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfQ29uY2Vzc2lvblwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuY29uY2Vzc2lvbl9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Db25jZXNzaW9uXG4gIHg6IDBcbiAgeTogMTIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR182ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYkdfNlwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5jb25jZXNzaW9uX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl9CdXRfQmFja1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzI3ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI3XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjdcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5jb25jZXNzaW9uX3RfQ2FyZCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX3RfQ2FyZFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IEFsaWduLmNlbnRlclxuICB5OiAzNDBcbiAgdGV4dDogXCJEbyB5b3UgaGF2ZSBhIGN1cnJlbnQgQ2VudHJlbGluayBiZW5lZml0IGNhcmTigKggb3IgUGVuc2lvbmVyIENvbmNlc3Npb24gQ2FyZFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiAgd2lkdGg6IDE0MDBcblxuY29uY2Vzc2lvbl9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0J1dF9Ob1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxucmVjdGFuZ2xlXzI4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI4XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yOCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yOFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvbmNlc3Npb25fQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X1llc1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjlcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI5XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIlxuXG5jb25jZXNzaW9uX2lfQ2VudHJlbGluayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25faV9DZW50cmVsaW5rXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogOTIzLjk5OTk5OTk5MDAzMTlcbiAgeTogMTAwXG4gIHdpZHRoOiAxOTkuOTk5MzcxNjM5NzIzMDVcbiAgaGVpZ2h0OiAxOTUuMzk5ODY2NTQ4MTU3OTdcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbmNlc3Npb25faV9DZW50cmVsaW5rLnN2Z1wiIiwiY2xhc3MgbW9kdWxlLmV4cG9ydHMgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5jbGlwID89IHRydWVcblx0XHRvcHRpb25zLmluaXRpYWxWaWV3TmFtZSA/PSAnaW5pdGlhbFZpZXcnXG5cdFx0b3B0aW9ucy5iYWNrQnV0dG9uTmFtZSA/PSAnYmFja0J1dHRvbidcblx0XHRvcHRpb25zLmFuaW1hdGlvbk9wdGlvbnMgPz0geyBjdXJ2ZTogXCJjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSlcIiwgdGltZTogLjcgfVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiYmxhY2tcIlxuXHRcdG9wdGlvbnMuc2Nyb2xsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvTGluayA/PSB0cnVlXG5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QGhpc3RvcnkgPSBbXVxuXG5cdFx0QG9uQ2hhbmdlIFwic3ViTGF5ZXJzXCIsIChjaGFuZ2VMaXN0KSA9PlxuXHRcdFx0dmlldyA9IGNoYW5nZUxpc3QuYWRkZWRbMF1cblx0XHRcdGlmIHZpZXc/XG5cdFx0XHRcdCMgZGVmYXVsdCBiZWhhdmlvcnMgZm9yIHZpZXdzXG5cdFx0XHRcdHZpZXcuY2xpcCA9IHRydWVcblx0XHRcdFx0dmlldy5vbiBFdmVudHMuQ2xpY2ssIC0+IHJldHVybiAjIHByZXZlbnQgY2xpY2stdGhyb3VnaC9idWJibGluZ1xuXHRcdFx0XHQjIGFkZCBzY3JvbGxjb21wb25lbnRcblx0XHRcdFx0aWYgQHNjcm9sbFxuXHRcdFx0XHRcdGNoaWxkcmVuID0gdmlldy5jaGlsZHJlblxuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudCA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdFx0XHRcdG5hbWU6IFwic2Nyb2xsQ29tcG9uZW50XCJcblx0XHRcdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdFx0cGFyZW50OiB2aWV3XG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LmNvbnRlbnQuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0XHRcdGlmIHZpZXcud2lkdGggPD0gQHdpZHRoXG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRcdFx0aWYgdmlldy5oZWlnaHQgPD0gQGhlaWdodFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbFZlcnRpY2FsID0gZmFsc2Vcblx0XHRcdFx0XHRmb3IgYyBpbiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0Yy5wYXJlbnQgPSBzY3JvbGxDb21wb25lbnQuY29udGVudFxuXHRcdFx0XHRcdHZpZXcuc2Nyb2xsQ29tcG9uZW50ID0gc2Nyb2xsQ29tcG9uZW50ICMgbWFrZSBpdCBhY2Nlc3NpYmxlIGFzIGEgcHJvcGVydHlcblx0XHRcdFx0XHQjIHJlc2V0IHNpemUgc2luY2UgY29udGVudCBtb3ZlZCB0byBzY3JvbGxDb21wb25lbnQuIHByZXZlbnRzIHNjcm9sbCBidWcgd2hlbiBkcmFnZ2luZyBvdXRzaWRlLlxuXHRcdFx0XHRcdHZpZXcuc2l6ZSA9IHt3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEBoZWlnaHR9XG5cblx0XHR0cmFuc2l0aW9ucyA9XG5cdFx0XHRzd2l0Y2hJbnN0YW50OiB7fVxuXHRcdFx0ZmFkZUluOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHtvcGFjaXR5OiAwfVxuXHRcdFx0XHRcdHRvOiB7b3BhY2l0eTogMX1cblx0XHRcdHpvb21Jbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7c2NhbGU6IDAuOCwgb3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge3NjYWxlOiAxLCBvcGFjaXR5OiAxfVxuXHRcdFx0em9vbU91dDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZUluVXA6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IEBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJblJpZ2h0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0c2xpZGVJbkRvd246XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFk6IDB9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJbkxlZnQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHttYXhYOiBAd2lkdGh9XG5cdFx0XHRtb3ZlSW5VcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IC1AaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdG1vdmVJbkRvd246XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5MZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogLShAd2lkdGgvNSksIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaEluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogLUB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoT3V0UmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHB1c2hPdXRMZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRoLzUsIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRcdHRvOiB7eDogMCwgYnJpZ2h0bmVzczogMTAwfVxuXHRcdFx0c2xpZGVPdXRVcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXREb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cblx0XHQjIHNob3J0Y3V0c1xuXHRcdHRyYW5zaXRpb25zLnNsaWRlSW4gPSB0cmFuc2l0aW9ucy5zbGlkZUluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5zbGlkZU91dCA9IHRyYW5zaXRpb25zLnNsaWRlT3V0UmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoSW4gPSB0cmFuc2l0aW9ucy5wdXNoSW5SaWdodFxuXHRcdHRyYW5zaXRpb25zLnB1c2hPdXQgPSB0cmFuc2l0aW9ucy5wdXNoT3V0UmlnaHRcblxuXHRcdCMgZXZlbnRzXG5cdFx0RXZlbnRzLlZpZXdXaWxsU3dpdGNoID0gXCJ2aWV3V2lsbFN3aXRjaFwiXG5cdFx0RXZlbnRzLlZpZXdEaWRTd2l0Y2ggPSBcInZpZXdEaWRTd2l0Y2hcIlxuXHRcdExheWVyOjpvblZpZXdXaWxsU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBjYilcblx0XHRMYXllcjo6b25WaWV3RGlkU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIGNiKVx0XHRcblxuXHRcdF8uZWFjaCB0cmFuc2l0aW9ucywgKGFuaW1Qcm9wcywgbmFtZSkgPT5cblxuXHRcdFx0aWYgb3B0aW9ucy5hdXRvTGlua1xuXHRcdFx0XHRsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXHRcdFx0XHRmb3IgYnRuIGluIGxheWVyc1xuXHRcdFx0XHRcdGlmIF8uaW5jbHVkZXMgYnRuLm5hbWUsIG5hbWVcblx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyID0gQFxuXHRcdFx0XHRcdFx0YnRuLm9uQ2xpY2sgLT5cblx0XHRcdFx0XHRcdFx0YW5pbSA9IEBuYW1lLnNwbGl0KCdfJylbMF1cblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBAbmFtZS5yZXBsYWNlKGFuaW0rJ18nLCcnKVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IGxpbmtOYW1lLnJlcGxhY2UoL1xcZCsvZywgJycpICMgcmVtb3ZlIG51bWJlcnNcblx0XHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXJbYW5pbV0gXy5maW5kKGxheWVycywgKGwpIC0+IGwubmFtZSBpcyBsaW5rTmFtZSlcblxuXHRcdFx0QFtuYW1lXSA9IChuZXdWaWV3LCBhbmltYXRpb25PcHRpb25zID0gQGFuaW1hdGlvbk9wdGlvbnMpID0+XG5cblx0XHRcdFx0cmV0dXJuIGlmIG5ld1ZpZXcgaXMgQGN1cnJlbnRWaWV3XG5cblxuXG5cdFx0XHRcdCMgbWFrZSBzdXJlIHRoZSBuZXcgbGF5ZXIgaXMgaW5zaWRlIHRoZSB2aWV3Y29udHJvbGxlclxuXHRcdFx0XHRuZXdWaWV3LnBhcmVudCA9IEBcblx0XHRcdFx0bmV3Vmlldy5zZW5kVG9CYWNrKClcblxuXHRcdFx0XHQjIHJlc2V0IHByb3BzIGluIGNhc2UgdGhleSB3ZXJlIGNoYW5nZWQgYnkgYSBwcmV2IGFuaW1hdGlvblxuXHRcdFx0XHRuZXdWaWV3LnBvaW50ID0ge3g6MCwgeTogMH1cblx0XHRcdFx0bmV3Vmlldy5vcGFjaXR5ID0gMVxuXHRcdFx0XHRuZXdWaWV3LnNjYWxlID0gMVxuXHRcdFx0XHRuZXdWaWV3LmJyaWdodG5lc3MgPSAxMDBcblx0XHRcdFx0XG5cdFx0XHRcdCMgb2xkVmlld1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnBvaW50ID0ge3g6IDAsIHk6IDB9ICMgZml4ZXMgb2Zmc2V0IGlzc3VlIHdoZW4gbW92aW5nIHRvbyBmYXN0IGJldHdlZW4gc2NyZWVuc1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnByb3BzID0gYW5pbVByb3BzLm9sZFZpZXc/LmZyb21cblx0XHRcdFx0YW5pbU9iaiA9IF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMub2xkVmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdF8uZGVmYXVsdHMoYW5pbU9iaiwgeyBwcm9wZXJ0aWVzOiB7fSB9KVxuXHRcdFx0XHRvdXRnb2luZyA9IEBjdXJyZW50Vmlldz8uYW5pbWF0ZSBhbmltT2JqXG5cblx0XHRcdFx0IyBuZXdWaWV3XG5cdFx0XHRcdG5ld1ZpZXcucHJvcHMgPSBhbmltUHJvcHMubmV3Vmlldz8uZnJvbVxuXHRcdFx0XHRpbmNvbWluZyA9IG5ld1ZpZXcuYW5pbWF0ZSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm5ld1ZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRcblx0XHRcdFx0IyBsYXllciBvcmRlclxuXHRcdFx0XHRpZiBfLmluY2x1ZGVzIG5hbWUsICdPdXQnXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlaGluZChAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0b3V0Z29pbmcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT4gQGN1cnJlbnRWaWV3LmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVmb3JlKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRcblx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBAY3VycmVudFZpZXcsIG5ld1ZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGNoYW5nZSBDdXJyZW50VmlldyBiZWZvcmUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCBzbyBvbmUgY291bGQgZ28gYmFjayBpbiBoaXN0b3J5XG5cdFx0XHRcdCMgd2l0aG91dCBoYXZpbmcgdG8gd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZmluaXNoXG5cdFx0XHRcdEBzYXZlQ3VycmVudFZpZXdUb0hpc3RvcnkgbmFtZSwgb3V0Z29pbmcsIGluY29taW5nXG5cdFx0XHRcdEBjdXJyZW50VmlldyA9IG5ld1ZpZXdcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6cHJldmlvdXNWaWV3XCIsIEBwcmV2aW91c1ZpZXcpXG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOmN1cnJlbnRWaWV3XCIsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGluY29taW5nLmlzQW5pbWF0aW5nXG5cdFx0XHRcdFx0aG9vayA9IGluY29taW5nIFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aG9vayA9IG91dGdvaW5nXG5cdFx0XHRcdGhvb2s/Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIEBwcmV2aW91c1ZpZXcsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3TmFtZT9cblx0XHRcdGF1dG9Jbml0aWFsID0gXy5maW5kIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lXG5cdFx0XHRpZiBhdXRvSW5pdGlhbD8gdGhlbiBAc3dpdGNoSW5zdGFudCBhdXRvSW5pdGlhbFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlldz9cblx0XHRcdEBzd2l0Y2hJbnN0YW50IG9wdGlvbnMuaW5pdGlhbFZpZXdcblxuXHRcdGlmIG9wdGlvbnMuYmFja0J1dHRvbk5hbWU/XG5cdFx0XHRiYWNrQnV0dG9ucyA9IF8uZmlsdGVyIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gXy5pbmNsdWRlcyBsLm5hbWUsIG9wdGlvbnMuYmFja0J1dHRvbk5hbWVcblx0XHRcdGZvciBidG4gaW4gYmFja0J1dHRvbnNcblx0XHRcdFx0YnRuLm9uQ2xpY2sgPT4gQGJhY2soKVxuXG5cdEBkZWZpbmUgXCJwcmV2aW91c1ZpZXdcIixcblx0XHRcdGdldDogLT4gQGhpc3RvcnlbMF0udmlld1xuXG5cdHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeTogKG5hbWUsb3V0Z29pbmdBbmltYXRpb24saW5jb21pbmdBbmltYXRpb24pIC0+XG5cdFx0QGhpc3RvcnkudW5zaGlmdFxuXHRcdFx0dmlldzogQGN1cnJlbnRWaWV3XG5cdFx0XHRhbmltYXRpb25OYW1lOiBuYW1lXG5cdFx0XHRpbmNvbWluZ0FuaW1hdGlvbjogaW5jb21pbmdBbmltYXRpb25cblx0XHRcdG91dGdvaW5nQW5pbWF0aW9uOiBvdXRnb2luZ0FuaW1hdGlvblxuXG5cdGJhY2s6IC0+XG5cdFx0cHJldmlvdXMgPSBAaGlzdG9yeVswXVxuXHRcdGlmIHByZXZpb3VzLnZpZXc/XG5cblx0XHRcdGlmIF8uaW5jbHVkZXMgcHJldmlvdXMuYW5pbWF0aW9uTmFtZSwgJ091dCdcblx0XHRcdFx0cHJldmlvdXMudmlldy5icmluZ1RvRnJvbnQoKVxuXG5cdFx0XHRiYWNrSW4gPSBwcmV2aW91cy5vdXRnb2luZ0FuaW1hdGlvbi5yZXZlcnNlKClcblx0XHRcdG1vdmVPdXQgPSBwcmV2aW91cy5pbmNvbWluZ0FuaW1hdGlvbi5yZXZlcnNlKClcblxuXHRcdFx0YmFja0luLnN0YXJ0KClcblx0XHRcdG1vdmVPdXQuc3RhcnQoKVxuXG5cdFx0XHRAY3VycmVudFZpZXcgPSBwcmV2aW91cy52aWV3XG5cdFx0XHRAaGlzdG9yeS5zaGlmdCgpXG5cdFx0XHRtb3ZlT3V0Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFnQkFBO0FEQUEsSUFBQTs7O0FBQU0sTUFBTSxDQUFDOzs7RUFFQyxpQkFBQyxPQUFEO0FBQ1osUUFBQTs7TUFEYSxVQUFROzs7TUFDckIsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDOzs7TUFDeEIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOzs7TUFDekIsT0FBTyxDQUFDLE9BQVE7OztNQUNoQixPQUFPLENBQUMsa0JBQW1COzs7TUFDM0IsT0FBTyxDQUFDLGlCQUFrQjs7O01BQzFCLE9BQU8sQ0FBQyxtQkFBb0I7UUFBRSxLQUFBLEVBQU8sZ0NBQVQ7UUFBMkMsSUFBQSxFQUFNLEVBQWpEOzs7O01BQzVCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsU0FBVTs7O01BQ2xCLE9BQU8sQ0FBQyxXQUFZOztJQUVwQix5Q0FBTSxPQUFOO0lBQ0EsSUFBQyxDQUFBLE9BQUQsR0FB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QUREO09BM0JEO01BOEJBLFFBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFDLElBQUMsQ0FBQSxNQUFOO1dBQUo7U0FERDtRQUVBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsTUFBTDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BL0JEO01Bb0NBLFdBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLElBQUEsRUFBTSxDQUFQO1dBQUo7U0FERDtRQUVBLE9BQUEsRUFDQztVQUFBLElBQUEsRUFBTTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBTDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BckNEO01BMENBLFVBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsTUFBTDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxDQUFBLEVBQUcsQ0FBQyxJQUFDLENBQUEsTUFBTjtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BM0NEO01BZ0RBLFVBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxJQUFDLENBQUEsS0FBTDtXQUFKO1NBREQ7UUFFQSxPQUFBLEVBQ0M7VUFBQSxJQUFBLEVBQU07WUFBQyxJQUFBLEVBQU0sQ0FBUDtXQUFOO1VBQ0EsRUFBQSxFQUFJO1lBQUMsQ0FBQSxFQUFHLENBQUo7V0FESjtTQUhEO09BakREO01Bc0RBLFdBQUEsRUFDQztRQUFBLE9BQUEsRUFDQztVQUFBLEVBQUEsRUFBSTtZQUFDLENBQUEsRUFBRyxDQUFDLENBQUMsSUFBQyxDQUFBLEtBQUQsR0FBTyxD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
