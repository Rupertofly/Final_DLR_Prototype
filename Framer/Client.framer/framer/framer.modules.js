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
  x: 269,
  y: 340,
  text: "Do you have a current Centrelink benefit card\u2028Or Pensioner Concession Card",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 600,
  textAlign: "center",
  color: "rgba(74,74,74,1)"
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
  return flow.showNext(ƒ("aB_Employment"));
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


},{"findModule":"findModule"}],"ab_weekinc":[function(require,module,exports){
var bG_8, label_36, label_37, rectangle2, rectangle_36, rectangle_37, weekIncome_Body, weekIncome_But_Back, weekIncome_But_Next, weekIncome_Txt_Income, weekIncome_i_briefcase, weekIncome_t_Income, weeklyIncome;

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
  height: 180.69020689655176
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

weekIncome_Txt_Income = new Layer({
  name: "weekIncome_Txt_Income",
  parent: weekIncome_Body,
  x: 484,
  y: 586,
  backgroundColor: "transparent",
  width: 1080,
  height: 120
});

rectangle2 = new Layer({
  name: "rectangle2",
  parent: weekIncome_Txt_Income,
  x: 0,
  y: 0,
  width: 1080,
  height: 120,
  backgroundColor: "rgba(253,245,228,1)",
  borderRadius: 10,
  borderColor: "rgba(245,190,85,1)",
  borderWidth: 10
});

weeklyIncome = new TextLayer({
  name: "weeklyIncome",
  parent: weekIncome_Txt_Income,
  x: 21,
  y: 12,
  text: "Weekly Income",
  fontSize: 72,
  fontFamily: "Avenir Next",
  fontWeight: 400,
  textAlign: "left",
  color: "rgba(247,203,119,1)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9pbnB1dC1mcmFtZXIvaW5wdXQuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9maW5kTW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfd2Vla2luYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3NwbGFzaC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX3JlYWRzcGVhay5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX25kb2IuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9sYW5nLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaW50ZXJwLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfaG91cmluYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL2FiX2hlbHAuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9lbXBsb3kuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvcnVwZXJ0L0dvb2dsZSBEcml2ZS8yMDE3X1NlbWVzdGVyXzIvU3R1ZGlvL0ZpbmFsX0RMUl9Qcm90b3R5cGUvRnJhbWVyL0NsaWVudC5mcmFtZXIvbW9kdWxlcy9hYl9jb250YWN0LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3J1cGVydC9Hb29nbGUgRHJpdmUvMjAxN19TZW1lc3Rlcl8yL1N0dWRpby9GaW5hbF9ETFJfUHJvdG90eXBlL0ZyYW1lci9DbGllbnQuZnJhbWVyL21vZHVsZXMvYWJfY29uYy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9ydXBlcnQvR29vZ2xlIERyaXZlLzIwMTdfU2VtZXN0ZXJfMi9TdHVkaW8vRmluYWxfRExSX1Byb3RvdHlwZS9GcmFtZXIvQ2xpZW50LmZyYW1lci9tb2R1bGVzL1ZpZXdDb250cm9sbGVyLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsImV4cG9ydHMua2V5Ym9hcmRMYXllciA9IG5ldyBMYXllclxuXHR4OjAsIHk6U2NyZWVuLmhlaWdodCwgd2lkdGg6U2NyZWVuLndpZHRoLCBoZWlnaHQ6NDMyXG5cdGh0bWw6XCI8aW1nIHN0eWxlPSd3aWR0aDogMTAwJTsnIHNyYz0nbW9kdWxlcy9rZXlib2FyZC5wbmcnLz5cIlxuXG4jc2NyZWVuIHdpZHRoIHZzLiBzaXplIG9mIGltYWdlIHdpZHRoXG5ncm93dGhSYXRpbyA9IFNjcmVlbi53aWR0aCAvIDczMlxuaW1hZ2VIZWlnaHQgPSBncm93dGhSYXRpbyAqIDQzMlxuXG4jIEV4dGVuZHMgdGhlIExheWVyU3R5bGUgY2xhc3Mgd2hpY2ggZG9lcyB0aGUgcGl4ZWwgcmF0aW8gY2FsY3VsYXRpb25zIGluIGZyYW1lclxuX2lucHV0U3R5bGUgPVxuXHRPYmplY3QuYXNzaWduKHt9LCBGcmFtZXIuTGF5ZXJTdHlsZSxcblx0XHRjYWxjdWxhdGVQaXhlbFJhdGlvID0gKGxheWVyLCB2YWx1ZSkgLT5cblx0XHRcdCh2YWx1ZSAqIGxheWVyLmNvbnRleHQucGl4ZWxNdWx0aXBsaWVyKSArIFwicHhcIlxuXG5cdFx0Zm9udFNpemU6IChsYXllcikgLT5cblx0XHRcdGNhbGN1bGF0ZVBpeGVsUmF0aW8obGF5ZXIsIGxheWVyLl9wcm9wZXJ0aWVzLmZvbnRTaXplKVxuXG5cdFx0bGluZUhlaWdodDogKGxheWVyKSAtPlxuXHRcdFx0KGxheWVyLl9wcm9wZXJ0aWVzLmxpbmVIZWlnaHQpICsgXCJlbVwiXG5cblx0XHRwYWRkaW5nOiAobGF5ZXIpIC0+XG5cdFx0XHR7IHBpeGVsTXVsdGlwbGllciB9ID0gbGF5ZXIuY29udGV4dFxuXHRcdFx0cGFkZGluZyA9IFtdXG5cdFx0XHRwYWRkaW5nVmFsdWUgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nXG5cblx0XHRcdCMgQ2hlY2sgaWYgd2UgaGF2ZSBhIHNpbmdsZSBudW1iZXIgYXMgaW50ZWdlclxuXHRcdFx0aWYgTnVtYmVyLmlzSW50ZWdlcihwYWRkaW5nVmFsdWUpXG5cdFx0XHRcdHJldHVybiBjYWxjdWxhdGVQaXhlbFJhdGlvKGxheWVyLCBwYWRkaW5nVmFsdWUpXG5cblx0XHRcdCMgSWYgd2UgaGF2ZSBtdWx0aXBsZSB2YWx1ZXMgdGhleSBjb21lIGFzIHN0cmluZyAoZS5nLiBcIjEgMiAzIDRcIilcblx0XHRcdHBhZGRpbmdWYWx1ZXMgPSBsYXllci5fcHJvcGVydGllcy5wYWRkaW5nLnNwbGl0KFwiIFwiKVxuXG5cdFx0XHRzd2l0Y2ggcGFkZGluZ1ZhbHVlcy5sZW5ndGhcblx0XHRcdFx0d2hlbiA0XG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbM10pXG5cblx0XHRcdFx0d2hlbiAzXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1syXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cblx0XHRcdFx0d2hlbiAyXG5cdFx0XHRcdFx0cGFkZGluZy50b3AgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5yaWdodCA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1sxXSlcblx0XHRcdFx0XHRwYWRkaW5nLmJvdHRvbSA9IHBhcnNlRmxvYXQocGFkZGluZ1ZhbHVlc1swXSlcblx0XHRcdFx0XHRwYWRkaW5nLmxlZnQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMV0pXG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHBhZGRpbmcudG9wID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXHRcdFx0XHRcdHBhZGRpbmcucmlnaHQgPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5ib3R0b20gPSBwYXJzZUZsb2F0KHBhZGRpbmdWYWx1ZXNbMF0pXG5cdFx0XHRcdFx0cGFkZGluZy5sZWZ0ID0gcGFyc2VGbG9hdChwYWRkaW5nVmFsdWVzWzBdKVxuXG5cdFx0XHQjIFJldHVybiBhcyA0LXZhbHVlIHN0cmluZyAoZS5nIFwiMXB4IDJweCAzcHggNHB4XCIpXG5cdFx0XHRcIiN7cGFkZGluZy50b3AgKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLnJpZ2h0ICogcGl4ZWxNdWx0aXBsaWVyfXB4ICN7cGFkZGluZy5ib3R0b20gKiBwaXhlbE11bHRpcGxpZXJ9cHggI3twYWRkaW5nLmxlZnQgKiBwaXhlbE11bHRpcGxpZXJ9cHhcIlxuXHQpXG5cbmV4cG9ydHMua2V5Ym9hcmRMYXllci5zdGF0ZXMgPVxuXHRzaG93bjpcblx0XHR5OiBTY3JlZW4uaGVpZ2h0IC0gaW1hZ2VIZWlnaHRcblxuZXhwb3J0cy5rZXlib2FyZExheWVyLnN0YXRlcy5hbmltYXRpb25PcHRpb25zID1cblx0Y3VydmU6IFwic3ByaW5nKDUwMCw1MCwxNSlcIlxuXG5jbGFzcyBleHBvcnRzLklucHV0IGV4dGVuZHMgTGF5ZXJcblx0QGRlZmluZSBcInN0eWxlXCIsXG5cdFx0Z2V0OiAtPiBAaW5wdXQuc3R5bGVcblx0XHRzZXQ6ICh2YWx1ZSkgLT5cblx0XHRcdF8uZXh0ZW5kIEBpbnB1dC5zdHlsZSwgdmFsdWVcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IEBpbnB1dC52YWx1ZVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QGlucHV0LnZhbHVlID0gdmFsdWVcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRvcHRpb25zLnNldHVwID89IGZhbHNlXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmNsaXAgPz0gZmFsc2Vcblx0XHRvcHRpb25zLmhlaWdodCA/PSA2MFxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IGlmIG9wdGlvbnMuc2V0dXAgdGhlbiBcInJnYmEoMjU1LCA2MCwgNDcsIC41KVwiIGVsc2UgXCJ0cmFuc3BhcmVudFwiXG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAzMFxuXHRcdG9wdGlvbnMubGluZUhlaWdodCA/PSAxXG5cdFx0b3B0aW9ucy5wYWRkaW5nID89IDEwXG5cdFx0b3B0aW9ucy50ZXh0ID89IFwiXCJcblx0XHRvcHRpb25zLnBsYWNlaG9sZGVyID89IFwiXCJcblx0XHRvcHRpb25zLnZpcnR1YWxLZXlib2FyZCA/PSBpZiBVdGlscy5pc01vYmlsZSgpIHRoZW4gZmFsc2UgZWxzZSB0cnVlXG5cdFx0b3B0aW9ucy50eXBlID89IFwidGV4dFwiXG5cdFx0b3B0aW9ucy5nb0J1dHRvbiA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuYXV0b0NvcnJlY3QgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ29tcGxldGUgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvQ2FwaXRhbGl6ZSA/PSBcIm9uXCJcblx0XHRvcHRpb25zLnNwZWxsQ2hlY2sgPz0gXCJvblwiXG5cdFx0b3B0aW9ucy5hdXRvZm9jdXMgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRleHRDb2xvciA/PSBcIiMwMDBcIlxuXHRcdG9wdGlvbnMuZm9udEZhbWlseSA/PSBcIi1hcHBsZS1zeXN0ZW1cIlxuXHRcdG9wdGlvbnMuZm9udFdlaWdodCA/PSBcIjUwMFwiXG5cdFx0b3B0aW9ucy5zdWJtaXQgPz0gZmFsc2Vcblx0XHRvcHRpb25zLnRhYkluZGV4ID89IDBcblxuXHRcdHN1cGVyIG9wdGlvbnNcblxuXHRcdCMgQWRkIGFkZGl0aW9uYWwgcHJvcGVydGllc1xuXHRcdEBfcHJvcGVydGllcy5mb250U2l6ZSA9IG9wdGlvbnMuZm9udFNpemVcblx0XHRAX3Byb3BlcnRpZXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodFxuXHRcdEBfcHJvcGVydGllcy5wYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nXG5cblx0XHRAcGxhY2Vob2xkZXJDb2xvciA9IG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciBpZiBvcHRpb25zLnBsYWNlaG9sZGVyQ29sb3I/XG5cdFx0QGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImlucHV0XCJcblx0XHRAaW5wdXQuaWQgPSBcImlucHV0LSN7Xy5ub3coKX1cIlxuXG5cdFx0IyBBZGQgc3R5bGluZyB0byB0aGUgaW5wdXQgZWxlbWVudFxuXHRcdEBpbnB1dC5zdHlsZS53aWR0aCA9IF9pbnB1dFN0eWxlW1wid2lkdGhcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuaGVpZ2h0ID0gX2lucHV0U3R5bGVbXCJoZWlnaHRcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuZm9udFNpemUgPSBfaW5wdXRTdHlsZVtcImZvbnRTaXplXCJdKEApXG5cdFx0QGlucHV0LnN0eWxlLmxpbmVIZWlnaHQgPSBfaW5wdXRTdHlsZVtcImxpbmVIZWlnaHRcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiXG5cdFx0QGlucHV0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiXG5cdFx0QGlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yXG5cdFx0QGlucHV0LnN0eWxlLnBhZGRpbmcgPSBfaW5wdXRTdHlsZVtcInBhZGRpbmdcIl0oQClcblx0XHRAaW5wdXQuc3R5bGUuZm9udEZhbWlseSA9IG9wdGlvbnMuZm9udEZhbWlseVxuXHRcdEBpbnB1dC5zdHlsZS5jb2xvciA9IG9wdGlvbnMudGV4dENvbG9yXG5cdFx0QGlucHV0LnN0eWxlLmZvbnRXZWlnaHQgPSBvcHRpb25zLmZvbnRXZWlnaHRcblxuXHRcdEBpbnB1dC52YWx1ZSA9IG9wdGlvbnMudGV4dFxuXHRcdEBpbnB1dC50eXBlID0gb3B0aW9ucy50eXBlXG5cdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gb3B0aW9ucy5wbGFjZWhvbGRlclxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUgXCJ0YWJpbmRleFwiLCBvcHRpb25zLnRhYmluZGV4XG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jb3JyZWN0XCIsIG9wdGlvbnMuYXV0b0NvcnJlY3Rcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2NvbXBsZXRlXCIsIG9wdGlvbnMuYXV0b0NvbXBsZXRlXG5cdFx0QGlucHV0LnNldEF0dHJpYnV0ZSBcImF1dG9jYXBpdGFsaXplXCIsIG9wdGlvbnMuYXV0b0NhcGl0YWxpemVcblx0XHRpZiBvcHRpb25zLmF1dG9mb2N1cyA9PSB0cnVlXG5cdFx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwiYXV0b2ZvY3VzXCIsIHRydWVcblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlIFwic3BlbGxjaGVja1wiLCBvcHRpb25zLnNwZWxsQ2hlY2tcblx0XHRAZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJmb3JtXCJcblxuXHRcdGlmIChvcHRpb25zLmdvQnV0dG9uICYmICFvcHRpb25zLnN1Ym1pdCkgfHwgIW9wdGlvbnMuc3VibWl0XG5cdFx0XHRAZm9ybS5hY3Rpb24gPSBcIiNcIlxuXHRcdFx0QGZvcm0uYWRkRXZlbnRMaXN0ZW5lciBcInN1Ym1pdFwiLCAoZXZlbnQpIC0+XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdEBmb3JtLmFwcGVuZENoaWxkIEBpbnB1dFxuXHRcdEBfZWxlbWVudC5hcHBlbmRDaGlsZCBAZm9ybVxuXG5cdFx0QGJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIlxuXHRcdEB1cGRhdGVQbGFjZWhvbGRlckNvbG9yIG9wdGlvbnMucGxhY2Vob2xkZXJDb2xvciBpZiBAcGxhY2Vob2xkZXJDb2xvclxuXG5cdFx0I29ubHkgc2hvdyBob25vciB2aXJ0dWFsIGtleWJvYXJkIG9wdGlvbiB3aGVuIG5vdCBvbiBtb2JpbGUsXG5cdFx0I290aGVyd2lzZSBpZ25vcmVcblx0XHRpZiAhVXRpbHMuaXNNb2JpbGUoKSAmJiBvcHRpb25zLnZpcnR1YWxLZXlib2FyZCBpcyB0cnVlXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRcdGV4cG9ydHMua2V5Ym9hcmRMYXllci5icmluZ1RvRnJvbnQoKVxuXHRcdFx0XHRleHBvcnRzLmtleWJvYXJkTGF5ZXIuc3RhdGVDeWNsZSgpXG5cdFx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImJsdXJcIiwgLT5cblx0XHRcdFx0ZXhwb3J0cy5rZXlib2FyZExheWVyLmFuaW1hdGUoXCJkZWZhdWx0XCIpXG5cblx0dXBkYXRlUGxhY2Vob2xkZXJDb2xvcjogKGNvbG9yKSAtPlxuXHRcdEBwbGFjZWhvbGRlckNvbG9yID0gY29sb3Jcblx0XHRpZiBAcGFnZVN0eWxlP1xuXHRcdFx0ZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCBAcGFnZVN0eWxlXG5cdFx0QHBhZ2VTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgXCJzdHlsZVwiXG5cdFx0QHBhZ2VTdHlsZS50eXBlID0gXCJ0ZXh0L2Nzc1wiXG5cdFx0Y3NzID0gXCIjI3tAaW5wdXQuaWR9Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICN7QHBsYWNlaG9sZGVyQ29sb3J9OyB9XCJcblx0XHRAcGFnZVN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIGNzcylcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkIEBwYWdlU3R5bGVcblxuXHRmb2N1czogKCkgLT5cblx0XHRAaW5wdXQuZm9jdXMoKVxuXG5cdG9uRm9jdXM6IChjYikgLT5cblx0XHRAaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciBcImZvY3VzXCIsIC0+XG5cdFx0XHRjYi5hcHBseShAKVxuXG5cdG9uQmx1cjogKGNiKSAtPlxuXHRcdEBpbnB1dC5hZGRFdmVudExpc3RlbmVyIFwiYmx1clwiLCAtPlxuXHRcdFx0Y2IuYXBwbHkoQClcbiIsIl9nZXRIaWVyYXJjaHkgPSAobGF5ZXIpIC0+XG4gIHN0cmluZyA9ICcnXG4gIGZvciBhIGluIGxheWVyLmFuY2VzdG9ycygpXG4gICAgc3RyaW5nID0gYS5uYW1lKyc+JytzdHJpbmdcbiAgcmV0dXJuIHN0cmluZyA9IHN0cmluZytsYXllci5uYW1lXG5cbl9tYXRjaCA9IChoaWVyYXJjaHksIHN0cmluZykgLT5cbiAgIyBwcmVwYXJlIHJlZ2V4IHRva2Vuc1xuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxzKj5cXHMqL2csJz4nKSAjIGNsZWFuIHVwIHNwYWNlcyBhcm91bmQgYXJyb3dzXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnKicpLmpvaW4oJ1tePl0qJykgIyBhc3RlcmlrcyBhcyBsYXllciBuYW1lIHdpbGRjYXJkXG4gIHN0cmluZyA9IHN0cmluZy5zcGxpdCgnICcpLmpvaW4oJyg/Oi4qKT4nKSAjIHNwYWNlIGFzIHN0cnVjdHVyZSB3aWxkY2FyZFxuICBzdHJpbmcgPSBzdHJpbmcuc3BsaXQoJywnKS5qb2luKCckfCcpICMgYWxsb3cgbXVsdGlwbGUgc2VhcmNoZXMgdXNpbmcgY29tbWFcbiAgcmVnZXhTdHJpbmcgPSBcIihefD4pXCIrc3RyaW5nK1wiJFwiICMgYWx3YXlzIGJvdHRvbSBsYXllciwgbWF5YmUgcGFydCBvZiBoaWVyYXJjaHlcblxuICByZWdFeHAgPSBuZXcgUmVnRXhwKHJlZ2V4U3RyaW5nKSBcbiAgcmV0dXJuIGhpZXJhcmNoeS5tYXRjaChyZWdFeHApXG5cbl9maW5kQWxsID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+XG4gIGxheWVycyA9IEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzXG5cbiAgaWYgc2VsZWN0b3I/XG4gICAgc3RyaW5nTmVlZHNSZWdleCA9IF8uZmluZCBbJyonLCcgJywnPicsJywnXSwgKGMpIC0+IF8uaW5jbHVkZXMgc2VsZWN0b3IsY1xuICAgIHVubGVzcyBzdHJpbmdOZWVkc1JlZ2V4IG9yIGZyb21MYXllclxuICAgICAgbGF5ZXJzID0gXy5maWx0ZXIgbGF5ZXJzLCAobGF5ZXIpIC0+IFxuICAgICAgICBpZiBsYXllci5uYW1lIGlzIHNlbGVjdG9yIHRoZW4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgIGxheWVycyA9IF8uZmlsdGVyIGxheWVycywgKGxheWVyKSAtPlxuICAgICAgICAgIGhpZXJhcmNoeSA9IF9nZXRIaWVyYXJjaHkobGF5ZXIpXG4gICAgICAgICAgaWYgZnJvbUxheWVyP1xuICAgICAgICAgICAgX21hdGNoKGhpZXJhcmNoeSwgZnJvbUxheWVyLm5hbWUrJyAnK3NlbGVjdG9yKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9tYXRjaChoaWVyYXJjaHksIHNlbGVjdG9yKVxuICBlbHNlXG4gICAgbGF5ZXJzXG5cblxuIyBHbG9iYWxcbmV4cG9ydHMuRmluZCAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVswXVxuZXhwb3J0cy7GkiAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgZnJvbUxheWVyKVswXVxuXG5leHBvcnRzLkZpbmRBbGwgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIGZyb21MYXllcilcbmV4cG9ydHMuxpLGkiAgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBmcm9tTGF5ZXIpXG5cbiMgTWV0aG9kc1xuTGF5ZXI6OmZpbmQgICAgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVswXVxuTGF5ZXI6OsaSICAgICAgICA9IChzZWxlY3RvciwgZnJvbUxheWVyKSAtPiBfZmluZEFsbChzZWxlY3RvciwgQClbMF1cblxuTGF5ZXI6OmZpbmRBbGwgID0gKHNlbGVjdG9yLCBmcm9tTGF5ZXIpIC0+IF9maW5kQWxsKHNlbGVjdG9yLCBAKVxuTGF5ZXI6OsaSxpIgICAgICAgPSAoc2VsZWN0b3IsIGZyb21MYXllcikgLT4gX2ZpbmRBbGwoc2VsZWN0b3IsIEApIiwid2luZG93LmFCX1dlZWtJbmNvbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9XZWVrSW5jb21lXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG53ZWVrSW5jb21lX0JvZHkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0JvZHlcIlxuICBwYXJlbnQ6IGFCX1dlZWtJbmNvbWVcbiAgeDogMFxuICB5OiAxMjJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG5cbmJHXzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR184XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbndlZWtJbmNvbWVfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0J1dF9CYWNrXCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMzYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzZcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNlwiXG4gIHBhcmVudDogd2Vla0luY29tZV9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbndlZWtJbmNvbWVfdF9JbmNvbWUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV90X0luY29tZVwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDM5M1xuICB5OiAzNDBcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgd2Vla2x5IGluY29tZSBhZnRlciB0YXg/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53ZWVrSW5jb21lX2lfYnJpZWZjYXNlID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9pX2JyaWVmY2FzZVwiXG4gIHBhcmVudDogd2Vla0luY29tZV9Cb2R5XG4gIHg6IDkyNFxuICB5OiA2OFxuICB3aWR0aDogMjAwXG4gIGhlaWdodDogMTgwLjY5MDIwNjg5NjU1MTc2XG5cbndlZWtJbmNvbWVfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJ3ZWVrSW5jb21lX0J1dF9OZXh0XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM3ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM3XCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDJcblxubGFiZWxfMzcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzdcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxud2Vla0luY29tZV9UeHRfSW5jb21lID0gbmV3IExheWVyXG4gIG5hbWU6IFwid2Vla0luY29tZV9UeHRfSW5jb21lXCJcbiAgcGFyZW50OiB3ZWVrSW5jb21lX0JvZHlcbiAgeDogNDg0XG4gIHk6IDU4NlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMlwiXG4gIHBhcmVudDogd2Vla0luY29tZV9UeHRfSW5jb21lXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbndlZWtseUluY29tZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJ3ZWVrbHlJbmNvbWVcIlxuICBwYXJlbnQ6IHdlZWtJbmNvbWVfVHh0X0luY29tZVxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIldlZWtseSBJbmNvbWVcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfU3BsYXNoID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYUJfU3BsYXNoXCJcblx0eDogMFxuXHR5OiAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTUzNlxuXG53aW5kb3cuc3BsYXNoX0JvZHkgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJzcGxhc2hfQm9keVwiXG5cdHBhcmVudDogYUJfU3BsYXNoXG5cdHg6IDBcblx0eTogMTM4XG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXG53aW5kb3cuYkcgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJiR1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbndpbmRvdy5zcGxhc2hfaV9Mb2dvID0gbmV3IExheWVyXG5cdG5hbWU6IFwic3BsYXNoX2lfTG9nb1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogODg0XG5cdHk6IDIyXG5cdHdpZHRoOiAyNzZcblx0aGVpZ2h0OiAyNzZcblx0aW1hZ2U6IFwiaW1hZ2VzL1NwbGFzaF9pX0xvZ28uc3ZnXCJcblxud2luZG93LnNwbGFzaF90X1RpdGxlID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcInNwbGFzaF90X1RpdGxlXCJcblx0cGFyZW50OiBzcGxhc2hfQm9keVxuXHR4OiA1NjRcblx0eTogMzQyXG5cdHdpZHRoOiA5MTguODUzNjM3MDA4MDU2MlxuXHR0ZXh0OiBcIlZpY3RvcmlhIExlZ2FsIEFpZFwiXG5cdGZvbnRTaXplOiA3MlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNzAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxud2luZG93LnNwbGFzaF90X0hlYWRpbmcgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwic3BsYXNoX3RfSGVhZGluZ1wiXG5cdHBhcmVudDogc3BsYXNoX0JvZHlcblx0eDogNTY0XG5cdHk6IDUwNFxuXHR3aWR0aDogOTE3Ljg4NjkyNzc1OTEwMlxuXHR0ZXh0OiBcIkR1dHkgTGF3eWVyIFNlcnZpY2XigKhBcHBsaWNhdGlvbiBmb3IgQWlkXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInNwbGFzaF9CdXRfQmVnaW5cIlxuXHRwYXJlbnQ6IHNwbGFzaF9Cb2R5XG5cdHg6IDcyNFxuXHR5OiA4MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDYwMFxuXHRoZWlnaHQ6IDI4MFxuXG53aW5kb3cuc3BsYXNoX0J1dF9CZWdpbi5vbiBFdmVudHMuVGFwLCAtPlxuXHRmbG93LnNob3dOZXh0IMaSKFwiYUJfTGFuZ3VhZ2VcIilcblxuXG53aW5kb3cucmVjdGFuZ2xlID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNjAwXG5cdGhlaWdodDogMjgwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxud2luZG93LmxhYmVsID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXCJcblx0cGFyZW50OiBzcGxhc2hfQnV0X0JlZ2luXG5cdHg6IDIwMlxuXHR5OiA4NlxuXHR0ZXh0OiBcIkJlZ2luXCJcblx0Zm9udFNpemU6IDcyXG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA2MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlIFwiaW5wdXQtZnJhbWVyL2lucHV0XCJcblxud2luZG93LlJWYWxzID1cbiAgck5vbmU6IDBcbiAgclNvbWV3aGF0OiAwXG4gIHJHb29kOiAwXG4gIHJGbHVlbnQ6IDBcbndpbmRvdy5TVmFscyA9XG4gIHNOb25lOiAwXG4gIHNTb21ld2hhdDogMFxuICBzR29vZDogMFxuICBzRmx1ZW50OiAwXG5cbndpbmRvdy5hQl9SZWFkU3BlYWsgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJhQl9SZWFkU3BlYWtcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbnJlYWRTcGVha19Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0JvZHlcIlxuICBwYXJlbnQ6IGFCX1JlYWRTcGVha1xuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNCA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5yZWFkU3BlYWtfaV9SZWFkID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX2lfUmVhZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDA0XG4gIHk6IDM3MFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTA4LjMwMzY5NDg0Mzk1NjY2XG4gIGltYWdlOiBcImltYWdlcy9SZWFkU3BlYWtfaV9SZWFkLnN2Z1wiXG5cbnJlYWRTcGVha19pX1NwZWFrID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX2lfU3BlYWtcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQxMFxuICB5OiA4MzhcbiAgd2lkdGg6IDEwNy42NTkyMzU3MTUxMTk1NlxuICBoZWlnaHQ6IDEyMFxuICBpbWFnZTogXCJpbWFnZXMvUmVhZFNwZWFrX2lfU3BlYWsuc3ZnXCJcblxucmVhZFNwZWFrX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9CYWNrXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8xNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbnJlYWRTcGVha190X1JlYWQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX3RfUmVhZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNDk2XG4gIHk6IDE5OFxuICB0ZXh0OiBcIkhvdyB3ZWxsIGNhbiB5b3UgcmVhZCBFbmdsaXNoP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX3RfU3BlYWsgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX3RfU3BlYWtcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDQ3NFxuICB5OiA2ODBcbiAgdGV4dDogXCJIb3cgd2VsbCBjYW4geW91IHNwZWFrIEVuZ2xpc2g/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JOb25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9yTm9uZVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNTY0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JOb25lLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJOb25lXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yTm9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE1ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE1XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JOb25lXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJOb25lXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NOb25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zTm9uZVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogNTY0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NOb25lLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5TVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlNWYWxzLCBcInNOb25lXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xNiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xNlwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9zTm9uZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE2ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE2XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NOb25lXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJOb25lXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3JTb21ld2hhdCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfclNvbWV3aGF0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiA4ODRcbiAgeTogMzU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfclNvbWV3aGF0Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJTb21ld2hhdFwiXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMTcgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTdcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfclNvbWV3aGF0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTcgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTdcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfclNvbWV3aGF0XG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJTb21ld2hhdFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9zU29tZXdoYXQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NTb21ld2hhdFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogODg0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3NTb21ld2hhdC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsIHdpbmRvdy5TVmFscywgXCJzU29tZXdoYXRcIlxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzE4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzE4XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NTb21ld2hhdFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE4ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE4XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NTb21ld2hhdFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiU29tZXdoYXRcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfckdvb2QgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3JHb29kXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMjA0XG4gIHk6IDM1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG5yZWFkU3BlYWtfQnV0X3JHb29kLm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwgd2luZG93LlJWYWxzLCBcInJHb29kXCJcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8xOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xOVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yR29vZFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzE5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzE5XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3JHb29kXG4gIHg6IDE2XG4gIHk6IDI4XG4gIHdpZHRoOiAyNTBcbiAgdGV4dDogXCJHb29kXCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NHb29kID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9zR29vZFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTIwNFxuICB5OiA4MzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9zR29vZC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsKHdpbmRvdy5TVmFscywgXCJzR29vZFwiKVxuICB3aW5kb3cudXBkYXRlU2VsKClcblxucmVjdGFuZ2xlXzIwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIwXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NHb29kXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjBcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0dvb2RcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkdvb2RcIlxuICBmb250U2l6ZTogNDRcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbnJlYWRTcGVha19CdXRfckZsdWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlYWRTcGVha19CdXRfckZsdWVudFwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0JvZHlcbiAgeDogMTUyNFxuICB5OiAzNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxucmVhZFNwZWFrX0J1dF9yRmx1ZW50Lm9uIEV2ZW50cy5UYXAsIC0+XG4gIHdpbmRvdy5SVmFscyA9IHdpbmRvdy5jaGFuZ2VTZWwod2luZG93LlJWYWxzLCBcInJGbHVlbnRcIilcbiAgd2luZG93LnVwZGF0ZVNlbCgpXG5cbnJlY3RhbmdsZV8yMSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yMVwiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9yRmx1ZW50XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjgyXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzOSwyMzksMjM5LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE4MywxODMsMTgzLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjFcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfckZsdWVudFxuICB4OiAxNlxuICB5OiAyOFxuICB3aWR0aDogMjUwXG4gIHRleHQ6IFwiRmx1ZW50XCJcbiAgZm9udFNpemU6IDQ0XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5yZWFkU3BlYWtfQnV0X3NGbHVlbnQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWFkU3BlYWtfQnV0X3NGbHVlbnRcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19Cb2R5XG4gIHg6IDE1MjRcbiAgeTogODM4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyODJcbiAgaGVpZ2h0OiAxMjBcbnJlYWRTcGVha19CdXRfc0ZsdWVudC5vbiBFdmVudHMuVGFwLCAtPlxuICB3aW5kb3cuU1ZhbHMgPSB3aW5kb3cuY2hhbmdlU2VsKHdpbmRvdy5TVmFscywgXCJzRmx1ZW50XCIpXG4gIHdpbmRvdy51cGRhdGVTZWwoKVxuXG5yZWN0YW5nbGVfMjIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjJcIlxuICBwYXJlbnQ6IHJlYWRTcGVha19CdXRfc0ZsdWVudFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDI4MlxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzksMjM5LDIzOSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxODMsMTgzLDE4MywxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzIyID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzIyXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X3NGbHVlbnRcbiAgeDogMTZcbiAgeTogMjhcbiAgd2lkdGg6IDI1MFxuICB0ZXh0OiBcIkZsdWVudFwiXG4gIGZvbnRTaXplOiA0NFxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxucmVhZFNwZWFrX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVhZFNwZWFrX0J1dF9OZXh0XCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5cblxucmVjdGFuZ2xlXzIzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzIzXCJcbiAgcGFyZW50OiByZWFkU3BlYWtfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yM1wiXG4gIHBhcmVudDogcmVhZFNwZWFrX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbiIsIklucHV0TW9kdWxlID0gcmVxdWlyZSAnaW5wdXQtZnJhbWVyL2lucHV0J1xue8aSLCDGksaSfSA9IHJlcXVpcmUgJ2ZpbmRNb2R1bGUnXG53aW5kb3cuYUJfTkRPQiA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX05ET0JcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbm5ET0JfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfQm9keVwiXG4gIHBhcmVudDogYUJfTkRPQlxuICB4OiAwXG4gIHk6IDEzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfMTAgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJiR18xMFwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5uRE9CX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwibkRPQl9CdXRfQmFja1wiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDQwNFxuICB5OiAxMTQyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzQwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQwXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9CYWNrXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIxOSwyMzEsMjM2LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE2OSwxODEsMTg2LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfNDAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDBcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5uRE9CX3RfTmFtZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RfTmFtZVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDY4MFxuICB5OiAxNzRcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgbmFtZT9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5ET0JfdF9Eb2IgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibkRPQl90X0RvYlwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDU2OFxuICB5OiA2NTRcbiAgdGV4dDogXCJXaGF0IGlzIHlvdXIgZGF0ZSBvZiBiaXJ0aD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbm5ET0JfQnV0X05leHQgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9OZXh0XCJcbiAgcGFyZW50OiBuRE9CX0JvZHlcbiAgeDogMTM2NFxuICB5OiAxMTAyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbm5ET0JfQnV0X05leHQub24gRXZlbnRzLlRhcCwgLT5cbiAgcHJpbnQgZGF0YS5SZWFkQWJpbGl0eVxuICBwcmludCBkYXRhLlJlYWRBYmlsaXR5IGlzIChcInJGbHVlbnRcIilcbiAgaWYgbmFtZS52YWx1ZSBpc250IChcIk5hbWVcIiBvciBcIlwiKSBhbmQgZGF5LnZhbHVlIGlzbnQgXCJcIlxuICAgIGRhdGEubmFtZSA9IG5hbWUudmFsdWVcbiAgICBkYXRhLkRvYiA9IGRheS52YWx1ZVxuICAgIGlmIGRhdGEuU3BlYWtBYmlsaXR5ID09IFwic0dvb2RcIiBvciBkYXRhLlNwZWFrQWJpbGl0eSA9PSBcInNGbHVlbnRcIlxuICAgICAgZmxvdy5zaG93TmV4dCDGkihcImFCX0NvbnRhY3RcIilcbiAgICAgIGRhdGEuaW50ZXJwID0gXCJub25lXCJcbiAgICBlbHNlXG4gICAgICBmbG93LnNob3dOZXh0IMaSKFwiYUJfSW50ZXJwcmV0ZXJcIilcblxucmVjdGFuZ2xlXzQxID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzQxXCJcbiAgcGFyZW50OiBuRE9CX0J1dF9OZXh0XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNDIsMjMyLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE1MSwxNTEsMTUxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfNDEgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfNDFcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X05leHRcbiAgeDogMTU5XG4gIHk6IDYyXG4gIHRleHQ6IFwiTmV4dFwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDcxLDcxLDcxLDEpXCJcblxubkRPQl9pX1BlbiA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfaV9QZW5cIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA0MDRcbiAgeTogMzQ0XG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMjAuMDAwMDE4NzQ5OTYxODVcbiAgaW1hZ2U6IFwiaW1hZ2VzL05ET0JfaV9QZW4uc3ZnXCJcblxubkRPQl9pX0NhbCA9IG5ldyBMYXllclxuICBuYW1lOiBcIm5ET0JfaV9DYWxcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiA0MDRcbiAgeTogODIyXG4gIHdpZHRoOiAxMjBcbiAgaGVpZ2h0OiAxMjEuOTA4MDc4NzgzMDU1ODRcbiAgaW1hZ2U6IFwiaW1hZ2VzL05ET0JfaV9DYWwuc3ZnXCJcblxubkRPQl90ZXh0X05hbWUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX3RleHRfTmFtZVwiXG4gIHBhcmVudDogbkRPQl9Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNDJcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl80ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl80XCJcbiAgcGFyZW50OiBuRE9CX3RleHRfTmFtZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDEwODBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5uYW1lID0gbmV3IElucHV0TW9kdWxlLklucHV0XG4gIG5hbWU6IFwibmFtZVwiXG4gIHBhcmVudDogbkRPQl90ZXh0X05hbWVcbiAgeDogMjFcbiAgeTogMFxuICBoZWlnaHQ6IDEyMFxuICB2aXJ0dWFsS2V5Ym9hcmQ6IGZhbHNlXG4gIHRleHQ6IFwiTmFtZVwiXG4gIHRleHRDb2xvdXI6IFwiI0M5ODYzOVwiXG4gIGZvbnRTaXplOiBcIjcyXCJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IFwiNDAwXCJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxubmFtZS5zdHlsZSA9XG4gIGZvbnRTaXplOiBcIjcycHhcIlxuICBjb2xvcjogXCIjQzk4NjM5XCJcbiAgZm9udFdlaWdodDogXCI0MDBcIlxuXG5uRE9CX0J1dF9EYXkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJuRE9CX0J1dF9EYXlcIlxuICBwYXJlbnQ6IG5ET0JfQm9keVxuICB4OiBBbGlnbi5jZW50ZXJcbiAgeTogODIyXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA3MDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl81ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl81XCJcbiAgcGFyZW50OiBuRE9CX0J1dF9EYXlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA3MDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLDI0MCwyNDksMSlcIlxuICBib3JkZXJSYWRpdXM6IDIwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoNTcsMTUxLDE5MiwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5kYXkgPSBuZXcgSW5wdXRNb2R1bGUuSW5wdXRcbiAgbmFtZTogXCJkYXlcIlxuICBwYXJlbnQ6IG5ET0JfQnV0X0RheVxuICB4OiAxNVxuICB5OiAxMlxuICBoZWlnaHQ6IDEwMFxuICB3aWR0aDogNzAwXG4gIHRleHQ6IFwiRE9CXCJcbiAgdHlwZTogXCJkYXRlXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoMTcxLDIxOCwyMzksMSlcIlxuZGF5LnN0eWxlID1cbiAgZm9udFNpemU6IFwiNzJweFwiXG4gIGNvbG9yOiBcIiMyNTgyQUJcIlxuICBmb250V2VpZ2h0OiBcIjQwMFwiXG5kYXkuaW5wdXQubWF4ID0gXCIyMDEwLTAxLTAxXCJcbmRheS5pbnB1dC52YWx1ZSA9IFwiMjAxMC0wMS0wMVwiXG5uRE9CX0J1dF9OZXh0LnZpc2libGUgPSBmYWxzZVxuZGF5Lm9uIFwiaW5wdXRcIiwgLT5cbiAgaWYgbmFtZS52YWx1ZSBpc250IChcIk5hbWVcIiBvciBcIlwiKSBhbmQgZGF5LnZhbHVlIGlzbnQgXCJcIlxuICAgIG5ET0JfQnV0X05leHQudmlzaWJsZSA9IHRydWVcbm5hbWUub24gXCJpbnB1dFwiLCAtPlxuICBpZiBuYW1lLnZhbHVlIGlzbnQgKFwiTmFtZVwiIG9yIFwiXCIpIGFuZCBkYXkudmFsdWUgaXNudCBcIlwiXG4gICAgbkRPQl9CdXRfTmV4dC52aXNpYmxlID0gdHJ1ZVxubmFtZS5vbiBcImtleXVwXCIsIChldmVudCkgLT5cbiAgaWYgZXZlbnQud2hpY2ggaXMgMTMgdGhlbiBuYW1lLmlucHV0LmJsdXIoKVxubmFtZS5vbkZvY3VzIC0+XG4gIGlmIEB2YWx1ZSBpcyBcIk5hbWVcIiB0aGVuIEB2YWx1ZSA9IFwiXCIiLCJ7xpIsIMaSxpJ9ID0gcmVxdWlyZSAnZmluZE1vZHVsZSdcbklucHV0TW9kdWxlID0gcmVxdWlyZSBcImlucHV0LWZyYW1lci9pbnB1dFwiXG53aW5kb3cuYUJfTGFuZ3VhZ2UgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJhQl9MYW5ndWFnZVwiXG5cdHg6IDBcblx0eTogMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogMjA0OFxuXHRoZWlnaHQ6IDE1MzZcblxubGFuZ3VhZ2VfQm9keSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0JvZHlcIlxuXHRwYXJlbnQ6IGFCX0xhbmd1YWdlXG5cdHg6IDBcblx0eTogMTM4XG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiAyMDQ4XG5cdGhlaWdodDogMTQxNlxuXG5iR18yID0gbmV3IExheWVyXG5cdG5hbWU6IFwiYkdfMlwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDIwNDhcblx0aGVpZ2h0OiAxNDE2XG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxubGFuZ3VhZ2VfQnV0X0VuZ2xpc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfRW5nbGlzaFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAyNDRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcbmxhbmd1YWdlX0J1dF9FbmdsaXNoLm9uIEV2ZW50cy5UYXAsIC0+XG5cdGRhdGEubGFuZ3VhZ2UgPSBcIkVuZ2xpc2hcIlxuXHRmbG93LnNob3dOZXh0IMaSKFwiYUJfSGVscFwiKSwgc2Nyb2xsOiBmYWxzZVxuXG5yZWN0YW5nbGVfMiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV8yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfRW5nbGlzaFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8yXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfRW5nbGlzaFxuXHR4OiAxMjVcblx0eTogNjJcblx0dGV4dDogXCJFbmdsaXNoXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfQ2hpbmVzZSA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9DaGluZXNlXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDI0NFxuXHR5OiA2MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMyA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV8zXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQ2hpbmVzZVxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMyA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF8zXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQ2hpbmVzZVxuXHR4OiAxNjRcblx0eTogNjJcblx0dGV4dDogXCLkuK3mlodcIlxuXHRmb250U2l6ZTogNTZcblx0Zm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG5cdGZvbnRXZWlnaHQ6IDUwMFxuXHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcblx0Y29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmxhbmd1YWdlX0J1dF9UaGFpID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X1RoYWlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0JvZHlcblx0eDogMjQ0XG5cdHk6IDkwMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV80ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzRcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UaGFpXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzRcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UaGFpXG5cdHg6IDEwMVxuXHR5OiA2MlxuXHR0ZXh0OiBcIuC5hOC4l+C4oiDigJMg4LmE4LiX4LiiXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfQXJhYmljID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0FyYWJpY1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiA4MDRcblx0eTogMzQyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzUgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJyZWN0YW5nbGVfNVwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0FyYWJpY1xuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNSA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF81XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfQXJhYmljXG5cdHg6IDE1OFxuXHR5OiA2MlxuXHR0ZXh0OiBcIti52LHYqNmKXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfU3BhbmlzaCA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9TcGFuaXNoXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiA2MjJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNiA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV82XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfU3BhbmlzaFxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfNiA9IG5ldyBUZXh0TGF5ZXJcblx0bmFtZTogXCJsYWJlbF82XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfU3BhbmlzaFxuXHR4OiAxMTdcblx0eTogNjJcblx0dGV4dDogXCJFc3Bhw7FvbFwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X0dyZWVrID0gbmV3IExheWVyXG5cdG5hbWU6IFwibGFuZ3VhZ2VfQnV0X0dyZWVrXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDgwNFxuXHR5OiA5MDJcblx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfNyA9IG5ldyBMYXllclxuXHRuYW1lOiBcInJlY3RhbmdsZV83XCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfR3JlZWtcblx0eDogMFxuXHR5OiAwXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuXHRib3JkZXJSYWRpdXM6IDQwXG5cdGJvcmRlckNvbG9yOiBcInJnYmEoMjE4LDExNSw3NSwxKVwiXG5cdGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzcgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfN1wiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQnV0X0dyZWVrXG5cdHg6IDEwMlxuXHR5OiA2MlxuXHR0ZXh0OiBcIs6VzrvOu863ds65zrrOrFwiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1ZpZXQgPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVmlldFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAxMzY0XG5cdHk6IDM0MlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV84ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzhcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9WaWV0XG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF84ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzhcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9WaWV0XG5cdHg6IDExMFxuXHR5OiA2MlxuXHR0ZXh0OiBcIlZp4buHdC1uZ+G7r1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxubGFuZ3VhZ2VfQnV0X1R1cmtpc2ggPSBuZXcgTGF5ZXJcblx0bmFtZTogXCJsYW5ndWFnZV9CdXRfVHVya2lzaFwiXG5cdHBhcmVudDogbGFuZ3VhZ2VfQm9keVxuXHR4OiAxMzY0XG5cdHk6IDYyMlxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV85ID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UdXJraXNoXG5cdHg6IDBcblx0eTogMFxuXHR3aWR0aDogNDQwXG5cdGhlaWdodDogMjAwXG5cdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcblx0Ym9yZGVyUmFkaXVzOiA0MFxuXHRib3JkZXJDb2xvcjogXCJyZ2JhKDIxOCwxMTUsNzUsMSlcIlxuXHRib3JkZXJXaWR0aDogNlxuXG5sYWJlbF85ID0gbmV3IFRleHRMYXllclxuXHRuYW1lOiBcImxhYmVsXzlcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9UdXJraXNoXG5cdHg6IDEzNVxuXHR5OiA2MlxuXHR0ZXh0OiBcIlTDvHJrw6dlXCJcblx0Zm9udFNpemU6IDU2XG5cdGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuXHRmb250V2VpZ2h0OiA1MDBcblx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5sYW5ndWFnZV9CdXRfUGVyc2lhbiA9IG5ldyBMYXllclxuXHRuYW1lOiBcImxhbmd1YWdlX0J1dF9QZXJzaWFuXCJcblx0cGFyZW50OiBsYW5ndWFnZV9Cb2R5XG5cdHg6IDEzNjRcblx0eTogOTAyXG5cdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG5cdHdpZHRoOiA0NDBcblx0aGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzEwID0gbmV3IExheWVyXG5cdG5hbWU6IFwicmVjdGFuZ2xlXzEwXCJcblx0cGFyZW50OiBsYW5ndWFnZV9CdXRfUGVyc2lhblxuXHR4OiAwXG5cdHk6IDBcblx0d2lkdGg6IDQ0MFxuXHRoZWlnaHQ6IDIwMFxuXHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG5cdGJvcmRlclJhZGl1czogNDBcblx0Ym9yZGVyQ29sb3I6IFwicmdiYSgyMTgsMTE1LDc1LDEpXCJcblx0Ym9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTAgPSBuZXcgVGV4dExheWVyXG5cdG5hbWU6IFwibGFiZWxfMTBcIlxuXHRwYXJlbnQ6IGxhbmd1YWdlX0J1dF9QZXJzaWFuXG5cdHg6IDE1MVxuXHR5OiA2MlxuXHR0ZXh0OiBcItmB2KfYsSDYs1wiXG5cdGZvbnRTaXplOiA1NlxuXHRmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcblx0Zm9udFdlaWdodDogNTAwXG5cdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiIsIndpbmRvdy5hQl9JbnRlcnByZXRlciA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0ludGVycHJldGVyXCJcbiAgeDogMFxuICB5OiAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTUzNlxuXG5pbnRlcnBfYm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9ib2R5XCJcbiAgcGFyZW50OiBhQl9JbnRlcnByZXRlclxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzVcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI1MCwyNTAsMSlcIlxuXG5pbnRlcnBfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJpbnRlcnBfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDQwNFxuICB5OiAxMTU4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlXzI0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI0XCJcbiAgcGFyZW50OiBpbnRlcnBfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yNCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yNFwiXG4gIHBhcmVudDogaW50ZXJwX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuaW50ZXJwX3RfSW50ZXJwcmV0b3IgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX3RfSW50ZXJwcmV0b3JcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDU1NFxuICB5OiAzNDBcbiAgdGV4dDogXCJEbyB5b3UgbmVlZCBhbiBpbnRlcnByZXRlcj9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmludGVycF9pX0xhbmd1YWdlID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX2lfTGFuZ3VhZ2VcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDk1MFxuICB5OiAxNDBcbiAgd2lkdGg6IDE1MFxuICBoZWlnaHQ6IDE1NVxuICBpbWFnZTogXCJpbWFnZXMvSW50ZXJwX2lfTGFuZ3VhZ2Uuc3ZnXCJcblxuaW50ZXJwX0J1dF9ubyA9IG5ldyBMYXllclxuICBuYW1lOiBcImludGVycF9CdXRfbm9cIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxuXG5yZWN0YW5nbGVfMjUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjVcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfbm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDIyNSwyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjUgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjVcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfbm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmludGVycF9CdXRfeWVzID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaW50ZXJwX0J1dF95ZXNcIlxuICBwYXJlbnQ6IGludGVycF9ib2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjZcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfeWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIzMiwyNDUsMjMwLDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDEwOCwxNzYsMTAxLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMjYgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMjZcIlxuICBwYXJlbnQ6IGludGVycF9CdXRfeWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiWWVzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoODcsMTU1LDgxLDEpXCIiLCJ3aW5kb3cuYUJfSG91ckluY29tZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0hvdXJJbmNvbWVcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmhvdXJJbmNvbWVfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfQm9keVwiXG4gIHBhcmVudDogYUJfSG91ckluY29tZVxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfOSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzlcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuaG91cmx5SW5jb21lX0J1dF9CYWNrID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91cmx5SW5jb21lX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzhcIlxuICBwYXJlbnQ6IGhvdXJseUluY29tZV9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzM4ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM4XCJcbiAgcGFyZW50OiBob3VybHlJbmNvbWVfQnV0X0JhY2tcbiAgeDogMTU4XG4gIHk6IDI4XG4gIHdpZHRoOiAxMjRcbiAgdGV4dDogXCJCYWNrXCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNjgsODAsODYsMSlcIlxuXG5ob3VybHlJbmNvbWVfdF9SYXRlID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseUluY29tZV90X1JhdGVcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA0NThcbiAgeTogMzYyXG4gIHRleHQ6IFwiV2hhdCBpcyB5b3VyIEhvdXJseSByYXRlIGFmdGVyIHRheD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhvdXJseUluY29tZV90X0hvdXJzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImhvdXJseUluY29tZV90X0hvdXJzXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogMzI0XG4gIHk6IDY4MlxuICB0ZXh0OiBcIkhvdyBtYW55IEhvdXJzIGRvIHlvdSB3b3JrIHBlciB3ZWVrP1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuaG91ckluY29tZV9pX2JyZWlmY2FzZSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfaV9icmVpZmNhc2VcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfQm9keVxuICB4OiA5MjRcbiAgeTogNjhcbiAgd2lkdGg6IDIwMFxuICBoZWlnaHQ6IDE4MC42OTAyMDY4OTY1NTE3NlxuXG5ob3VySW5jb21lX0J1dF9OZXh0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaG91ckluY29tZV9CdXRfTmV4dFwiXG4gIHBhcmVudDogaG91ckluY29tZV9Cb2R5XG4gIHg6IDEzNjRcbiAgeTogMTExOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zOSA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zOVwiXG4gIHBhcmVudDogaG91ckluY29tZV9CdXRfTmV4dFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjQyLDIzMiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNTEsMTUxLDE1MSwxKVwiXG4gIGJvcmRlcldpZHRoOiAyXG5cbmxhYmVsXzM5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzM5XCJcbiAgcGFyZW50OiBob3VySW5jb21lX0J1dF9OZXh0XG4gIHg6IDE1OVxuICB5OiA2MlxuICB0ZXh0OiBcIk5leHRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3MSw3MSw3MSwxKVwiXG5cbmhvdXJJbmNvbWVfVHh0X1JhdGUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJob3VySW5jb21lX1R4dF9SYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDg0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzJcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X1JhdGVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAxMDgwXG4gIGhlaWdodDogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MywyNDUsMjI4LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiAxMFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDI0NSwxOTAsODUsMSlcIlxuICBib3JkZXJXaWR0aDogMTBcblxuaG91cmx5UmF0ZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJob3VybHlSYXRlXCJcbiAgcGFyZW50OiBob3VySW5jb21lX1R4dF9SYXRlXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiSG91cmx5IFJhdGVcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIlxuXG5ob3VySW5jb21lX1R4dF9Ib3VycyA9IG5ldyBMYXllclxuICBuYW1lOiBcImhvdXJJbmNvbWVfVHh0X0hvdXJzXCJcbiAgcGFyZW50OiBob3VySW5jb21lX0JvZHlcbiAgeDogNDg0XG4gIHk6IDgzOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzNcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X0hvdXJzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogMTA4MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmhvdXJzUGVyV2VlayA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJob3Vyc1BlcldlZWtcIlxuICBwYXJlbnQ6IGhvdXJJbmNvbWVfVHh0X0hvdXJzXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiSG91cnMgcGVyIFdlZWtcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDQwMFxuICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gIGNvbG9yOiBcInJnYmEoMjQ3LDIwMywxMTksMSlcIiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuXG53aW5kb3cuYUJfSGVscCA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0hlbHBcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmhlbHBfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfQm9keVwiXG4gIHBhcmVudDogYUJfSGVscFxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfMyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzNcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuaGVscF90X0hlbHAgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiaGVscF90X0hlbHBcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAzMDBcbiAgeTogNDIwXG4gIHRleHQ6IFwiSXMgU29tZW9uZSBIZWxwaW5nIHlvdSBGaWxsIE91dCBUaGlzIEZvcm0/XCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzQsNzQsNzQsMSlcIlxuXG5oZWxwX2lfQnVveSA9IG5ldyBMYXllclxuICBuYW1lOiBcImhlbHBfaV9CdW95XCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogODg0XG4gIHk6IDc4XG4gIHdpZHRoOiAyODBcbiAgaGVpZ2h0OiAyODBcbiAgaW1hZ2U6IFwiaW1hZ2VzL0hlbHBfaV9CdW95LnN2Z1wiXG5cbmhlbHBfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9CYWNrXCJcbiAgcGFyZW50OiBoZWxwX0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfMTEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMTFcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLDI0MCwyNDksMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTE5LDEzMSwxMzYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xMVwiXG4gIHBhcmVudDogaGVscF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmhlbHBfQnV0X05vID0gbmV3IExheWVyXG4gIG5hbWU6IFwiaGVscF9CdXRfTm9cIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAxMjA0XG4gIHk6IDY3OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNjAwXG4gIGhlaWdodDogMjgwXG5oZWxwX0J1dF9Oby5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmhlbHAgPSBmYWxzZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfUmVhZFNwZWFrXCIpXG5cbnJlY3RhbmdsZV8xMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8xMlwiXG4gIHBhcmVudDogaGVscF9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDIyNSwyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk0LDU1LDUyLDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMTIgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMTJcIlxuICBwYXJlbnQ6IGhlbHBfQnV0X05vXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiTm9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuXG5oZWxwX0J1dF9ZZXMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJoZWxwX0J1dF9ZZXNcIlxuICBwYXJlbnQ6IGhlbHBfQm9keVxuICB4OiAyNDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbmhlbHBfQnV0X1llcy5vbiBFdmVudHMuVGFwLCAtPlxuICBkYXRhLmhlbHAgPSB0cnVlXG4gIGZsb3cuc2hvd05leHQgxpIoXCJhQl9SZWFkU3BlYWtcIilcblxucmVjdGFuZ2xlXzEzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzEzXCJcbiAgcGFyZW50OiBoZWxwX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjMyLDI0NSwyMzAsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTA4LDE3NiwxMDEsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8xMyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8xM1wiXG4gIHBhcmVudDogaGVscF9CdXRfWWVzXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNjAwXG4gIHRleHQ6IFwiWWVzXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA2MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoODcsMTU1LDgxLDEpXCIiLCJ3aW5kb3cuYUJfRW1wbG95bWVudCA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0VtcGxveW1lbnRcIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmVtcGxveW1lbnRfQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQm9keVwiXG4gIHBhcmVudDogYUJfRW1wbG95bWVudFxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNyA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzdcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuZW1wbG95bWVudF9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8zMCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMwID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMwXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuZW1wbG95bWVudF90X0hvd0VtcGxveWVkID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfdF9Ib3dFbXBsb3llZFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDYxNlxuICB5OiAzNDBcbiAgdGV4dDogXCJIb3cgYXJlIHlvdSBFbXBsb3llZD9cIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfaV9CcmVpZmNhc2UgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X2lfQnJlaWZjYXNlXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogOTI0XG4gIHk6IDY4XG4gIHdpZHRoOiAyMDBcbiAgaGVpZ2h0OiAxODAuNjkwMjA2ODk2NTUxNzZcbiAgaW1hZ2U6IFwiaW1hZ2VzL0VtcGxveW1lbnRfaV9CcmVpZmNhc2Uuc3ZnXCJcblxuZW1wbG95bWVudF9CdXRfVW4gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9VblwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDMyNFxuICB5OiA1MThcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5yZWN0YW5nbGVfMzEgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMzFcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X1VuXG4gIHg6IDBcbiAgeTogMFxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NCwyMzMsMjI1LDEpXCJcbiAgYm9yZGVyUmFkaXVzOiA0MFxuICBib3JkZXJDb2xvcjogXCJyZ2JhKDE5OCw5NCw1NCwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzMxID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzMxXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9VblxuICB4OiA1MlxuICB5OiA2MlxuICB0ZXh0OiBcIlVuZW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X1NlbGYgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJlbXBsb3ltZW50X0J1dF9TZWxmXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0JvZHlcbiAgeDogODA0XG4gIHk6IDUxOFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zMiA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zMlwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfU2VsZlxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zMiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zMlwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfU2VsZlxuICB4OiAzMlxuICB5OiA2MlxuICB0ZXh0OiBcIlNlbGYgRW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X0Nhc3VhbCA9IG5ldyBMYXllclxuICBuYW1lOiBcImVtcGxveW1lbnRfQnV0X0Nhc3VhbFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9Cb2R5XG4gIHg6IDEyODRcbiAgeTogNTE4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzMzID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzMzXCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9DYXN1YWxcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzMgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzNcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Nhc3VhbFxuICB4OiAwXG4gIHk6IDI0XG4gIHRleHQ6IFwiQ2FzdWFsbHkg4oCoRW1wbG95ZWRcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiAxMDQwXG4gIHk6IDc5OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMjAwXG5cbnJlY3RhbmdsZV8zNCA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8zNFwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfRnVsbFRpbWVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU0LDIzMywyMjUsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTk4LDk0LDU0LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDZcblxubGFiZWxfMzQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwibGFiZWxfMzRcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQnV0X0Z1bGxUaW1lXG4gIHg6IDBcbiAgeTogMjRcbiAgdGV4dDogXCJFbXBsb3llZCBGdWxsIFRpbWVcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg3NCw3NCw3NCwxKVwiXG5cbmVtcGxveW1lbnRfQnV0X1BhcnRUaW1lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiZW1wbG95bWVudF9CdXRfUGFydFRpbWVcIlxuICBwYXJlbnQ6IGVtcGxveW1lbnRfQm9keVxuICB4OiA1NjRcbiAgeTogNzk4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcblxucmVjdGFuZ2xlXzM1ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzM1XCJcbiAgcGFyZW50OiBlbXBsb3ltZW50X0J1dF9QYXJ0VGltZVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTQsMjMzLDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTgsOTQsNTQsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8zNSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8zNVwiXG4gIHBhcmVudDogZW1wbG95bWVudF9CdXRfUGFydFRpbWVcbiAgeDogMFxuICB5OiAyNFxuICB0ZXh0OiBcIkVtcGxveWVk4oCoIFBhcnQgVGltZVwiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcbiIsInvGkiwgxpLGkn0gPSByZXF1aXJlICdmaW5kTW9kdWxlJ1xuSW5wdXRNb2R1bGUgPSByZXF1aXJlICdpbnB1dC1mcmFtZXIvaW5wdXQnXG5cbndpbmRvdy5hQl9Db250YWN0ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiYUJfQ29udGFjdFwiXG4gIHg6IDBcbiAgeTogMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE1MzZcblxuY29udGFjdF9Cb2R5ID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9Cb2R5XCJcbiAgcGFyZW50OiBhQl9Db250YWN0XG4gIHg6IDBcbiAgeTogMTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuXG5iR18xMSA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzExXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiAyMDQ4XG4gIGhlaWdodDogMTQxNlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTAsMjUwLDI1MCwxKVwiXG5cbmNvbnRhY3RfQnV0X0JhY2sgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X0J1dF9CYWNrXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDExNjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGVfNDIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDJcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X0JhY2tcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjE5LDIzMSwyMzYsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTY5LDE4MSwxODYsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF80MiA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80MlwiXG4gIHBhcmVudDogY29udGFjdF9CdXRfQmFja1xuICB4OiAxNThcbiAgeTogMjhcbiAgd2lkdGg6IDEyNFxuICB0ZXh0OiBcIkJhY2tcIlxuICBmb250U2l6ZTogNTZcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDUwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg2OCw4MCw4NiwxKVwiXG5cbmNvbnRhY3RfdF9EZXRhaWxzID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImNvbnRhY3RfdF9EZXRhaWxzXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNzU2XG4gIHk6IDIxNlxuICB0ZXh0OiBcIkNvbnRhY3QgRGV0YWlsc1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuY29udGFjdF9CdXRfTmV4dCA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbnRhY3RfQnV0X05leHRcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiAxMzY0XG4gIHk6IDExMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDIwMFxuXG5jb250YWN0X0J1dF9OZXh0Lm9uVGFwIC0+XG4gIGRhdGEubWFpbCA9IMaSKFwiaW5wX01haWxcIikudmFsdWVcbiAgZGF0YS5lbWFpbCA9IMaSKFwiaW5wX0VtYWlsXCIpLnZhbHVlXG4gIGRhdGEucGhvbmUgPSDGkihcImlucF9QaG9uZVwiKS52YWx1ZVxuICBmbG93LnNob3dOZXh0IMaSKFwiYUJfRW1wbG95bWVudFwiKVxuXG5yZWN0YW5nbGVfNDMgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfNDNcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQnV0X05leHRcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA0NDBcbiAgaGVpZ2h0OiAyMDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUwLDI0MiwyMzIsMSlcIlxuICBib3JkZXJSYWRpdXM6IDQwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMTUxLDE1MSwxNTEsMSlcIlxuICBib3JkZXJXaWR0aDogMlxuXG5sYWJlbF80MyA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF80M1wiXG4gIHBhcmVudDogY29udGFjdF9CdXRfTmV4dFxuICB4OiAxNTlcbiAgeTogNjJcbiAgdGV4dDogXCJOZXh0XCJcbiAgZm9udFNpemU6IDU2XG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA1MDBcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIGNvbG9yOiBcInJnYmEoNzEsNzEsNzEsMSlcIlxuXG5jb250YWN0X1R4dF9NYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9UeHRfTWFpbFwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiAzNjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzggPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGUyXzhcIlxuICBwYXJlbnQ6IGNvbnRhY3RfVHh0X01haWxcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5tYWlsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9NYWlsXG4gIHg6IDIxXG4gIHk6IDEyXG4gIHRleHQ6IFwiTWFpbFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmNvbnRhY3RfVHh0X0VtYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9UeHRfRW1haWxcIlxuICBwYXJlbnQ6IGNvbnRhY3RfQm9keVxuICB4OiA1NjRcbiAgeTogNTIwXG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcblxucmVjdGFuZ2xlMl85ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl85XCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9FbWFpbFxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjQ1LDIyOCwxKVwiXG4gIGJvcmRlclJhZGl1czogMTBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgyNDUsMTkwLDg1LDEpXCJcbiAgYm9yZGVyV2lkdGg6IDEwXG5cbmVtYWlsID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcIkxhYmVsXCJcbiAgcGFyZW50OiBjb250YWN0X1R4dF9FbWFpbFxuICB4OiAyMVxuICB5OiAxMlxuICB0ZXh0OiBcIkVtYWlsXCJcbiAgZm9udFNpemU6IDcyXG4gIGZvbnRGYW1pbHk6IFwiQXZlbmlyIE5leHRcIlxuICBmb250V2VpZ2h0OiA0MDBcbiAgdGV4dEFsaWduOiBcImxlZnRcIlxuICBjb2xvcjogXCJyZ2JhKDI0NywyMDMsMTE5LDEpXCJcblxuY29udGFjdF9UeHRfUGhvbmUgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X1R4dF9QaG9uZVwiXG4gIHBhcmVudDogY29udGFjdF9Cb2R5XG4gIHg6IDU2NFxuICB5OiA2ODBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDkyMFxuICBoZWlnaHQ6IDEyMFxuXG5yZWN0YW5nbGUyXzEwID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlMl8xMFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfUGhvbmVcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA5MjBcbiAgaGVpZ2h0OiAxMjBcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjUzLDI0NSwyMjgsMSlcIlxuICBib3JkZXJSYWRpdXM6IDEwXG4gIGJvcmRlckNvbG9yOiBcInJnYmEoMjQ1LDE5MCw4NSwxKVwiXG4gIGJvcmRlcldpZHRoOiAxMFxuXG5waG9uZSA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJMYWJlbFwiXG4gIHBhcmVudDogY29udGFjdF9UeHRfUGhvbmVcbiAgeDogMjFcbiAgeTogMTJcbiAgdGV4dDogXCJQaG9uZVwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNDAwXG4gIHRleHRBbGlnbjogXCJsZWZ0XCJcbiAgY29sb3I6IFwicmdiYSgyNDcsMjAzLDExOSwxKVwiXG5cbmNvbnRhY3RfaV9MZXR0ZXIgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb250YWN0X2lfTGV0dGVyXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDM3OFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogODQuNzAyNzkzMTkyMjQ4MjhcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbnRhY3RfaV9MZXR0ZXIuc3ZnXCJcblxuY29udGFjdF9pX0VtYWlsID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9pX0VtYWlsXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDUyMFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTE5Ljk5OTMzNDQ0MzQ5NTA2XG4gIGltYWdlOiBcImltYWdlcy9Db250YWN0X2lfRW1haWwuc3ZnXCJcblxuY29udGFjdF9pX1Bob25lID0gbmV3IExheWVyXG4gIG5hbWU6IFwiY29udGFjdF9pX1Bob25lXCJcbiAgcGFyZW50OiBjb250YWN0X0JvZHlcbiAgeDogNDA0XG4gIHk6IDY4MFxuICB3aWR0aDogMTIwXG4gIGhlaWdodDogMTE5LjY3OTI5NDcwNDgyMDgyXG4gIGltYWdlOiBcImltYWdlcy9Db250YWN0X2lfUGhvbmUuc3ZnXCIiLCJ3aW5kb3cuYUJfQ29uY2Vzc2lvbiA9IG5ldyBMYXllclxuICBuYW1lOiBcImFCX0NvbmNlc3Npb25cIlxuICB4OiAwXG4gIHk6IDBcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNTM2XG5cbmNvbmNlc3Npb25fQm9keSA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQm9keVwiXG4gIHBhcmVudDogYUJfQ29uY2Vzc2lvblxuICB4OiAwXG4gIHk6IDEyMlxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogMjA0OFxuICBoZWlnaHQ6IDE0MTZcblxuYkdfNiA9IG5ldyBMYXllclxuICBuYW1lOiBcImJHXzZcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDIwNDhcbiAgaGVpZ2h0OiAxNDE2XG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MCwyNTAsMjUwLDEpXCJcblxuY29uY2Vzc2lvbl9CdXRfQmFjayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X0JhY2tcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiA0MDRcbiAgeTogMTE1OFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxuICB3aWR0aDogNDQwXG4gIGhlaWdodDogMTIwXG5cbnJlY3RhbmdsZV8yNyA9IG5ldyBMYXllclxuICBuYW1lOiBcInJlY3RhbmdsZV8yN1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfQmFja1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDQ0MFxuICBoZWlnaHQ6IDEyMFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMTksMjMxLDIzNiwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxNjksMTgxLDE4NiwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI3ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI3XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9CYWNrXG4gIHg6IDE1OFxuICB5OiAyOFxuICB3aWR0aDogMTI0XG4gIHRleHQ6IFwiQmFja1wiXG4gIGZvbnRTaXplOiA1NlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNTAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDY4LDgwLDg2LDEpXCJcblxuY29uY2Vzc2lvbl90X0NhcmQgPSBuZXcgVGV4dExheWVyXG4gIG5hbWU6IFwiY29uY2Vzc2lvbl90X0NhcmRcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQm9keVxuICB4OiAyNjlcbiAgeTogMzQwXG4gIHRleHQ6IFwiRG8geW91IGhhdmUgYSBjdXJyZW50IENlbnRyZWxpbmsgYmVuZWZpdCBjYXJk4oCoT3IgUGVuc2lvbmVyIENvbmNlc3Npb24gQ2FyZFwiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDc0LDc0LDc0LDEpXCJcblxuY29uY2Vzc2lvbl9CdXRfTm8gPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJjb25jZXNzaW9uX0J1dF9Ob1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDEyMDRcbiAgeTogNjc4XG4gIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiXG4gIHdpZHRoOiA2MDBcbiAgaGVpZ2h0OiAyODBcblxucmVjdGFuZ2xlXzI4ID0gbmV3IExheWVyXG4gIG5hbWU6IFwicmVjdGFuZ2xlXzI4XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9Ob1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTMsMjI1LDIyNSwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxOTQsNTUsNTIsMSlcIlxuICBib3JkZXJXaWR0aDogNlxuXG5sYWJlbF8yOCA9IG5ldyBUZXh0TGF5ZXJcbiAgbmFtZTogXCJsYWJlbF8yOFwiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9CdXRfTm9cbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJOb1wiXG4gIGZvbnRTaXplOiA3MlxuICBmb250RmFtaWx5OiBcIkF2ZW5pciBOZXh0XCJcbiAgZm9udFdlaWdodDogNjAwXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICBjb2xvcjogXCJyZ2JhKDE5NCw1NSw1MiwxKVwiXG5cbmNvbmNlc3Npb25fQnV0X1llcyA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25fQnV0X1llc1wiXG4gIHBhcmVudDogY29uY2Vzc2lvbl9Cb2R5XG4gIHg6IDI0NFxuICB5OiA2NzhcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuXG5yZWN0YW5nbGVfMjkgPSBuZXcgTGF5ZXJcbiAgbmFtZTogXCJyZWN0YW5nbGVfMjlcIlxuICBwYXJlbnQ6IGNvbmNlc3Npb25fQnV0X1llc1xuICB4OiAwXG4gIHk6IDBcbiAgd2lkdGg6IDYwMFxuICBoZWlnaHQ6IDI4MFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMzIsMjQ1LDIzMCwxKVwiXG4gIGJvcmRlclJhZGl1czogNDBcbiAgYm9yZGVyQ29sb3I6IFwicmdiYSgxMDgsMTc2LDEwMSwxKVwiXG4gIGJvcmRlcldpZHRoOiA2XG5cbmxhYmVsXzI5ID0gbmV3IFRleHRMYXllclxuICBuYW1lOiBcImxhYmVsXzI5XCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0J1dF9ZZXNcbiAgeDogMFxuICB5OiAwXG4gIHdpZHRoOiA2MDBcbiAgdGV4dDogXCJZZXNcIlxuICBmb250U2l6ZTogNzJcbiAgZm9udEZhbWlseTogXCJBdmVuaXIgTmV4dFwiXG4gIGZvbnRXZWlnaHQ6IDYwMFxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgY29sb3I6IFwicmdiYSg4NywxNTUsODEsMSlcIlxuXG5jb25jZXNzaW9uX2lfQ2VudHJlbGluayA9IG5ldyBMYXllclxuICBuYW1lOiBcImNvbmNlc3Npb25faV9DZW50cmVsaW5rXCJcbiAgcGFyZW50OiBjb25jZXNzaW9uX0JvZHlcbiAgeDogOTIzLjk5OTk5OTk5MDAzMTlcbiAgeTogMTAwXG4gIHdpZHRoOiAxOTkuOTk5MzcxNjM5NzIzMDVcbiAgaGVpZ2h0OiAxOTUuMzk5ODY2NTQ4MTU3OTdcbiAgaW1hZ2U6IFwiaW1hZ2VzL0NvbmNlc3Npb25faV9DZW50cmVsaW5rLnN2Z1wiIiwiY2xhc3MgbW9kdWxlLmV4cG9ydHMgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5jbGlwID89IHRydWVcblx0XHRvcHRpb25zLmluaXRpYWxWaWV3TmFtZSA/PSAnaW5pdGlhbFZpZXcnXG5cdFx0b3B0aW9ucy5iYWNrQnV0dG9uTmFtZSA/PSAnYmFja0J1dHRvbidcblx0XHRvcHRpb25zLmFuaW1hdGlvbk9wdGlvbnMgPz0geyBjdXJ2ZTogXCJjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSlcIiwgdGltZTogLjcgfVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiYmxhY2tcIlxuXHRcdG9wdGlvbnMuc2Nyb2xsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvTGluayA/PSB0cnVlXG5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QGhpc3RvcnkgPSBbXVxuXG5cdFx0QG9uQ2hhbmdlIFwic3ViTGF5ZXJzXCIsIChjaGFuZ2VMaXN0KSA9PlxuXHRcdFx0dmlldyA9IGNoYW5nZUxpc3QuYWRkZWRbMF1cblx0XHRcdGlmIHZpZXc/XG5cdFx0XHRcdCMgZGVmYXVsdCBiZWhhdmlvcnMgZm9yIHZpZXdzXG5cdFx0XHRcdHZpZXcuY2xpcCA9IHRydWVcblx0XHRcdFx0dmlldy5vbiBFdmVudHMuQ2xpY2ssIC0+IHJldHVybiAjIHByZXZlbnQgY2xpY2stdGhyb3VnaC9idWJibGluZ1xuXHRcdFx0XHQjIGFkZCBzY3JvbGxjb21wb25lbnRcblx0XHRcdFx0aWYgQHNjcm9sbFxuXHRcdFx0XHRcdGNoaWxkcmVuID0gdmlldy5jaGlsZHJlblxuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudCA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdFx0XHRcdG5hbWU6IFwic2Nyb2xsQ29tcG9uZW50XCJcblx0XHRcdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdFx0cGFyZW50OiB2aWV3XG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LmNvbnRlbnQuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0XHRcdGlmIHZpZXcud2lkdGggPD0gQHdpZHRoXG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRcdFx0aWYgdmlldy5oZWlnaHQgPD0gQGhlaWdodFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbFZlcnRpY2FsID0gZmFsc2Vcblx0XHRcdFx0XHRmb3IgYyBpbiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0Yy5wYXJlbnQgPSBzY3JvbGxDb21wb25lbnQuY29udGVudFxuXHRcdFx0XHRcdHZpZXcuc2Nyb2xsQ29tcG9uZW50ID0gc2Nyb2xsQ29tcG9uZW50ICMgbWFrZSBpdCBhY2Nlc3NpYmxlIGFzIGEgcHJvcGVydHlcblx0XHRcdFx0XHQjIHJlc2V0IHNpemUgc2luY2UgY29udGVudCBtb3ZlZCB0byBzY3JvbGxDb21wb25lbnQuIHByZXZlbnRzIHNjcm9sbCBidWcgd2hlbiBkcmFnZ2luZyBvdXRzaWRlLlxuXHRcdFx0XHRcdHZpZXcuc2l6ZSA9IHt3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEBoZWlnaHR9XG5cblx0XHR0cmFuc2l0aW9ucyA9XG5cdFx0XHRzd2l0Y2hJbnN0YW50OiB7fVxuXHRcdFx0ZmFkZUluOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHtvcGFjaXR5OiAwfVxuXHRcdFx0XHRcdHRvOiB7b3BhY2l0eTogMX1cblx0XHRcdHpvb21Jbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7c2NhbGU6IDAuOCwgb3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge3NjYWxlOiAxLCBvcGFjaXR5OiAxfVxuXHRcdFx0em9vbU91dDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZUluVXA6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3k6IEBoZWlnaHR9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJblJpZ2h0OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0c2xpZGVJbkRvd246XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFk6IDB9XG5cdFx0XHRcdFx0dG86IHt5OiAwfVxuXHRcdFx0c2xpZGVJbkxlZnQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHttYXhYOiBAd2lkdGh9XG5cdFx0XHRtb3ZlSW5VcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IC1AaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdG1vdmVJbkRvd246XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiAtQGhlaWdodH1cblx0XHRcdFx0XHR0bzoge3k6IDB9XG5cdFx0XHRtb3ZlSW5MZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhYOiAwfVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogLShAd2lkdGgvNSksIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiBAd2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaEluTGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogLUB3aWR0aH1cblx0XHRcdFx0XHR0bzoge3g6IDB9XG5cdFx0XHRwdXNoT3V0UmlnaHQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHB1c2hPdXRMZWZ0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRoLzUsIGJyaWdodG5lc3M6IDcwfVxuXHRcdFx0XHRcdHRvOiB7eDogMCwgYnJpZ2h0bmVzczogMTAwfVxuXHRcdFx0c2xpZGVPdXRVcDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFk6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXREb3duOlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eTogQGhlaWdodH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cblx0XHQjIHNob3J0Y3V0c1xuXHRcdHRyYW5zaXRpb25zLnNsaWRlSW4gPSB0cmFuc2l0aW9ucy5zbGlkZUluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5zbGlkZU91dCA9IHRyYW5zaXRpb25zLnNsaWRlT3V0UmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoSW4gPSB0cmFuc2l0aW9ucy5wdXNoSW5SaWdodFxuXHRcdHRyYW5zaXRpb25zLnB1c2hPdXQgPSB0cmFuc2l0aW9ucy5wdXNoT3V0UmlnaHRcblxuXHRcdCMgZXZlbnRzXG5cdFx0RXZlbnRzLlZpZXdXaWxsU3dpdGNoID0gXCJ2aWV3V2lsbFN3aXRjaFwiXG5cdFx0RXZlbnRzLlZpZXdEaWRTd2l0Y2ggPSBcInZpZXdEaWRTd2l0Y2hcIlxuXHRcdExheWVyOjpvblZpZXdXaWxsU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBjYilcblx0XHRMYXllcjo6b25WaWV3RGlkU3dpdGNoID0gKGNiKSAtPiBAb24oRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIGNiKVx0XHRcblxuXHRcdF8uZWFjaCB0cmFuc2l0aW9ucywgKGFuaW1Qcm9wcywgbmFtZSkgPT5cblxuXHRcdFx0aWYgb3B0aW9ucy5hdXRvTGlua1xuXHRcdFx0XHRsYXllcnMgPSBGcmFtZXIuQ3VycmVudENvbnRleHQuX2xheWVyc1xuXHRcdFx0XHRmb3IgYnRuIGluIGxheWVyc1xuXHRcdFx0XHRcdGlmIF8uaW5jbHVkZXMgYnRuLm5hbWUsIG5hbWVcblx0XHRcdFx0XHRcdHZpZXdDb250cm9sbGVyID0gQFxuXHRcdFx0XHRcdFx0YnRuLm9uQ2xpY2sgLT5cblx0XHRcdFx0XHRcdFx0YW5pbSA9IEBuYW1lLnNwbGl0KCdfJylbMF1cblx0XHRcdFx0XHRcdFx0bGlua05hbWUgPSBAbmFtZS5yZXBsYWNlKGFuaW0rJ18nLCcnKVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IGxpbmtOYW1lLnJlcGxhY2UoL1xcZCsvZywgJycpICMgcmVtb3ZlIG51bWJlcnNcblx0XHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXJbYW5pbV0gXy5maW5kKGxheWVycywgKGwpIC0+IGwubmFtZSBpcyBsaW5rTmFtZSlcblxuXHRcdFx0QFtuYW1lXSA9IChuZXdWaWV3LCBhbmltYXRpb25PcHRpb25zID0gQGFuaW1hdGlvbk9wdGlvbnMpID0+XG5cblx0XHRcdFx0cmV0dXJuIGlmIG5ld1ZpZXcgaXMgQGN1cnJlbnRWaWV3XG5cblxuXG5cdFx0XHRcdCMgbWFrZSBzdXJlIHRoZSBuZXcgbGF5ZXIgaXMgaW5zaWRlIHRoZSB2aWV3Y29udHJvbGxlclxuXHRcdFx0XHRuZXdWaWV3LnBhcmVudCA9IEBcblx0XHRcdFx0bmV3Vmlldy5zZW5kVG9CYWNrKClcblxuXHRcdFx0XHQjIHJlc2V0IHByb3BzIGluIGNhc2UgdGhleSB3ZXJlIGNoYW5nZWQgYnkgYSBwcmV2IGFuaW1hdGlvblxuXHRcdFx0XHRuZXdWaWV3LnBvaW50ID0ge3g6MCwgeTogMH1cblx0XHRcdFx0bmV3Vmlldy5vcGFjaXR5ID0gMVxuXHRcdFx0XHRuZXdWaWV3LnNjYWxlID0gMVxuXHRcdFx0XHRuZXdWaWV3LmJyaWdodG5lc3MgPSAxMDBcblx0XHRcdFx0XG5cdFx0XHRcdCMgb2xkVmlld1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnBvaW50ID0ge3g6IDAsIHk6IDB9ICMgZml4ZXMgb2Zmc2V0IGlzc3VlIHdoZW4gbW92aW5nIHRvbyBmYXN0IGJldHdlZW4gc2NyZWVuc1xuXHRcdFx0XHRAY3VycmVudFZpZXc/LnByb3BzID0gYW5pbVByb3BzLm9sZFZpZXc/LmZyb21cblx0XHRcdFx0YW5pbU9iaiA9IF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMub2xkVmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdF8uZGVmYXVsdHMoYW5pbU9iaiwgeyBwcm9wZXJ0aWVzOiB7fSB9KVxuXHRcdFx0XHRvdXRnb2luZyA9IEBjdXJyZW50Vmlldz8uYW5pbWF0ZSBhbmltT2JqXG5cblx0XHRcdFx0IyBuZXdWaWV3XG5cdFx0XHRcdG5ld1ZpZXcucHJvcHMgPSBhbmltUHJvcHMubmV3Vmlldz8uZnJvbVxuXHRcdFx0XHRpbmNvbWluZyA9IG5ld1ZpZXcuYW5pbWF0ZSBfLmV4dGVuZCB7cHJvcGVydGllczogYW5pbVByb3BzLm5ld1ZpZXc/LnRvfSwgYW5pbWF0aW9uT3B0aW9uc1xuXHRcdFx0XHRcblx0XHRcdFx0IyBsYXllciBvcmRlclxuXHRcdFx0XHRpZiBfLmluY2x1ZGVzIG5hbWUsICdPdXQnXG5cdFx0XHRcdFx0bmV3Vmlldy5wbGFjZUJlaGluZChAY3VycmVudFZpZXcpXG5cdFx0XHRcdFx0b3V0Z29pbmcub24gRXZlbnRzLkFuaW1hdGlvbkVuZCwgPT4gQGN1cnJlbnRWaWV3LmJyaW5nVG9Gcm9udCgpXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVmb3JlKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRcblx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdXaWxsU3dpdGNoLCBAY3VycmVudFZpZXcsIG5ld1ZpZXcpXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGNoYW5nZSBDdXJyZW50VmlldyBiZWZvcmUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZCBzbyBvbmUgY291bGQgZ28gYmFjayBpbiBoaXN0b3J5XG5cdFx0XHRcdCMgd2l0aG91dCBoYXZpbmcgdG8gd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gZmluaXNoXG5cdFx0XHRcdEBzYXZlQ3VycmVudFZpZXdUb0hpc3RvcnkgbmFtZSwgb3V0Z29pbmcsIGluY29taW5nXG5cdFx0XHRcdEBjdXJyZW50VmlldyA9IG5ld1ZpZXdcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6cHJldmlvdXNWaWV3XCIsIEBwcmV2aW91c1ZpZXcpXG5cdFx0XHRcdEBlbWl0KFwiY2hhbmdlOmN1cnJlbnRWaWV3XCIsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdGlmIGluY29taW5nLmlzQW5pbWF0aW5nXG5cdFx0XHRcdFx0aG9vayA9IGluY29taW5nIFxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aG9vayA9IG91dGdvaW5nXG5cdFx0XHRcdGhvb2s/Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZpZXdEaWRTd2l0Y2gsIEBwcmV2aW91c1ZpZXcsIEBjdXJyZW50Vmlldylcblx0XHRcdFx0XG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3TmFtZT9cblx0XHRcdGF1dG9Jbml0aWFsID0gXy5maW5kIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIG9wdGlvbnMuaW5pdGlhbFZpZXdOYW1lXG5cdFx0XHRpZiBhdXRvSW5pdGlhbD8gdGhlbiBAc3dpdGNoSW5zdGFudCBhdXRvSW5pdGlhbFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlldz9cblx0XHRcdEBzd2l0Y2hJbnN0YW50IG9wdGlvbnMuaW5pdGlhbFZpZXdcblxuXHRcdGlmIG9wdGlvbnMuYmFja0J1dHRvbk5hbWU/XG5cdFx0XHRiYWNrQnV0dG9ucyA9IF8uZmlsdGVyIEZyYW1lci5DdXJyZW50Q29udGV4dC5fbGF5ZXJzLCAobCkgLT4gXy5pbmNsdWRlcyBsLm5hbWUsIG9wdGlvbnMuYmFja0J1dHRvbk5hbWVcblx0XHRcdGZvciBidG4gaW4gYmFja0J1dHRvbnNcblx0XHRcdFx0YnRuLm9uQ2xpY2sgPT4gQGJhY2soKVxuXG5cdEBkZWZpbmUgXCJwcmV2aW91c1ZpZXdcIixcblx0XHRcdGdldDogLT4gQGhpc3RvcnlbMF0udmlld1xuXG5cdHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeTogKG5hbWUsb3V0Z29pbmdBbmltYXRpb24saW5jb21pbmdBbmltYXRpb24pIC0+XG5cdFx0QGhpc3RvcnkudW5zaGlmdFxuXHRcdFx0dmlldzogQGN1cnJlbnRWaWV3XG5cdFx0XHRhbmltYXRpb25OYW1lOiBuYW1lXG5cdFx0XHRpbmNvbWluZ0FuaW1hdGlvbjogaW5jb21pbmdBbmltYXRpb25cblx0XHRcdG91dGdvaW5nQW5pbWF0aW9uOiBvdXRnb2luZ0FuaW1hdGlvblxuXG5cdGJhY2s6IC0+XG5cdFx0cHJldmlvdXMgPSBAaGlzdG9yeVswXVxuXHRcdGlmIHByZXZpb3VzLnZpZXc/XG5cblx0XHRcdGlmIF8uaW5jbHVkZXMgcHJldmlvdXMuYW5pbWF0aW9uTmFtZSwgJ091dCdcblx0XHRcdFx0cHJldmlvdXMudmlldy5icmluZ1RvRnJvbnQoKVxuXG5cdFx0XHRiYWNrSW4gPSBwcmV2aW91cy5vdXRnb2luZ0FuaW1hdGlvbi5yZXZlcnNlKClcblx0XHRcdG1vdmVPdXQgPSBwcmV2aW91cy5pbmNvbWluZ0FuaW1hdGlvbi5yZXZlcnNlKClcblxuXHRcdFx0YmFja0luLnN0YXJ0KClcblx0XHRcdG1vdmVPdXQuc3RhcnQoKVxuXG5cdFx0XHRAY3VycmVudFZpZXcgPSBwcmV2aW91cy52aWV3XG5cdFx0XHRAaGlzdG9yeS5zaGlmdCgpXG5cdFx0XHRtb3ZlT3V0Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFlQUE7QURBQSxJQUFBOzs7QUFBTSxNQUFNLENBQUM7OztFQUVDLGlCQUFDLE9BQUQ7QUFDWixRQUFBOztNQURhLFVBQVE7OztNQUNyQixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsU0FBVSxNQUFNLENBQUM7OztNQUN6QixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsaUJBQWtCOzs7TUFDMUIsT0FBTyxDQUFDLG1CQUFvQjtRQUFFLEtBQUEsRUFBTyxnQ0FBVDtRQUEyQyxJQUFBLEVBQU0sRUFBakQ7Ozs7TUFDNUIsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLFdBQVk7O0lBRXBCLHlDQUFNLE9BQU47SUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBRVgsSUFBQyxDQUFBLFFBQUQsQ0FBVSxXQUFWLEVBQXVCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxVQUFEO0FBQ3RCLFlBQUE7UUFBQSxJQUFBLEdBQU8sVUFBVSxDQUFDLEtBQU0sQ0FBQSxDQUFBO1FBQ3hCLElBQUcsWUFBSDtVQUVDLElBQUksQ0FBQyxJQUFMLEdBQVk7VUFDWixJQUFJLENBQUMsRUFBTCxDQUFRLE1BQU0sQ0FBQyxLQUFmLEVBQXNCLFNBQUEsR0FBQSxDQUF0QjtVQUVBLElBQUcsS0FBQyxDQUFBLE1BQUo7WUFDQyxRQUFBLEdBQVcsSUFBSSxDQUFDO1lBQ2hCLGVBQUEsR0FBc0IsSUFBQSxlQUFBLENBQ3JCO2NBQUEsSUFBQSxFQUFNLGlCQUFOO2NBQ0EsS0FBQSxFQUFPLEtBQUMsQ0FBQSxLQURSO2NBRUEsTUFBQSxFQUFRLEtBQUMsQ0FBQSxNQUZUO2NBR0EsTUFBQSxFQUFRLElBSFI7YUFEcUI7WUFLdEIsZUFBZSxDQUFDLE9B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
