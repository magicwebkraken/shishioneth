(self.webpackChunk = self.webpackChunk || []).push([
  ["400"],
  {
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        a = {},
        n = [],
        i = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, n) {
            if (!n.__wf_intro)
              (n.__wf_intro = !0), t(n).triggerHandler(a.types.INTRO);
          },
          outro: function (e, n) {
            if (!!n.__wf_intro)
              (n.__wf_intro = null), t(n).triggerHandler(a.types.OUTRO);
          },
        };
      (a.triggers = {}),
        (a.types = {
          INTRO: "w-ix-intro" + i,
          OUTRO: "w-ix-outro" + i,
        }),
        (a.init = function () {
          for (var e = n.length, i = 0; i < e; i++) {
            var o = n[i];
            o[0](0, o[1]);
          }
          (n = []), t.extend(a.triggers, r);
        }),
        (a.async = function () {
          for (var e in r) {
            var t = r[e];
            if (!!r.hasOwnProperty(e))
              a.triggers[e] = function (e, a) {
                n.push([t, a]);
              };
          }
        }),
        a.async(),
        (e.exports = a);
    },
    5134: function (e, t, a) {
      "use strict";
      var n = a(7199);

      function i(e, t) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a);
      }
      var r = window.jQuery,
        o = {},
        c = ".w-ix";
      (o.triggers = {}),
        (o.types = {
          INTRO: "w-ix-intro" + c,
          OUTRO: "w-ix-outro" + c,
        }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            n.triggers.reset(e, t);
          },
          intro: function (e, t) {
            n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, a) {
      "use strict";
      var n = a(3949),
        i = a(6011);
      i.setEnv(n.env),
        n.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3946: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        actionListPlaybackChanged: function () {
          return B;
        },
        animationFrameChanged: function () {
          return U;
        },
        clearRequested: function () {
          return F;
        },
        elementStateChanged: function () {
          return X;
        },
        eventListenerAdded: function () {
          return V;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return w;
        },
        instanceRemoved: function () {
          return Y;
        },
        instanceStarted: function () {
          return k;
        },
        mediaQueriesDefined: function () {
          return j;
        },
        parameterChanged: function () {
          return x;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return N;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return v;
        },
        stopRequested: function () {
          return h;
        },
        testFrameRendered: function () {
          return G;
        },
        viewportWidthChanged: function () {
          return H;
        },
      });
      let n = a(7087),
        i = a(9468),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: l,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: d,
          IX2_STOP_REQUESTED: s,
          IX2_CLEAR_REQUESTED: f,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: I,
          IX2_ANIMATION_FRAME_CHANGED: T,
          IX2_PARAMETER_CHANGED: p,
          IX2_INSTANCE_ADDED: y,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: O,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: m,
          IX2_VIEWPORT_WIDTH_CHANGED: R,
          IX2_MEDIA_QUERIES_DEFINED: A,
        } = n.IX2EngineActionTypes,
        { reifyState: S } = i.IX2VanillaUtils,
        L = (e) => ({
          type: r,
          payload: {
            ...S(e),
          },
        }),
        N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: o,
          payload: {
            hasBoundaryNodes: e,
            reducedMotion: t,
          },
        }),
        C = () => ({
          type: c,
        }),
        v = () => ({
          type: l,
        }),
        P = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: {
            defer: t,
            rawData: e,
          },
        }),
        M = ({
          actionTypeId: e = n.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: a,
          eventId: i,
          allowEvents: r,
          immediate: o,
          testManual: c,
          verbose: l,
          rawData: u,
        }) => ({
          type: d,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: a,
            testManual: c,
            eventId: i,
            allowEvents: r,
            immediate: o,
            verbose: l,
            rawData: u,
          },
        }),
        h = (e) => ({
          type: s,
          payload: {
            actionListId: e,
          },
        }),
        F = () => ({
          type: f,
        }),
        V = (e, t) => ({
          type: E,
          payload: {
            target: e,
            listenerParams: t,
          },
        }),
        G = (e = 1) => ({
          type: g,
          payload: {
            step: e,
          },
        }),
        D = (e, t) => ({
          type: I,
          payload: {
            stateKey: e,
            newState: t,
          },
        }),
        U = (e, t) => ({
          type: T,
          payload: {
            now: e,
            parameters: t,
          },
        }),
        x = (e, t) => ({
          type: p,
          payload: {
            key: e,
            value: t,
          },
        }),
        w = (e) => ({
          type: y,
          payload: {
            ...e,
          },
        }),
        k = (e, t) => ({
          type: b,
          payload: {
            instanceId: e,
            time: t,
          },
        }),
        Y = (e) => ({
          type: O,
          payload: {
            instanceId: e,
          },
        }),
        X = (e, t, a, n) => ({
          type: _,
          payload: {
            elementId: e,
            actionTypeId: t,
            current: a,
            actionItem: n,
          },
        }),
        B = ({ actionListId: e, isPlaying: t }) => ({
          type: m,
          payload: {
            actionListId: e,
            isPlaying: t,
          },
        }),
        H = ({ width: e, mediaQueries: t }) => ({
          type: R,
          payload: {
            width: e,
            mediaQueries: t,
          },
        }),
        j = () => ({
          type: A,
        });
    },
    6011: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        actions: function () {
          return o;
        },
        destroy: function () {
          return s;
        },
        init: function () {
          return d;
        },
        setEnv: function () {
          return u;
        },
        store: function () {
          return l;
        },
      });
      let n = a(9516),
        i = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(a(7243)),
        r = a(1970),
        o = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var a = c(t);
          if (a && a.has(e)) return a.get(e);
          var n = {
              __proto__: null,
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(3946));

      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (c = function (e) {
          return e ? a : t;
        })(e);
      }
      let l = (0, n.createStore)(i.default);

      function u(e) {
        e() && (0, r.observeRequests)(l);
      }

      function d(e) {
        s(),
          (0, r.startEngine)({
            store: l,
            rawData: e,
            allowEvents: !0,
          });
      }

      function s() {
        (0, r.stopEngine)(l);
      }
    },
    5012: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        elementContains: function () {
          return p;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return f;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return m;
        },
        getSiblingElements: function () {
          return O;
        },
        getStyle: function () {
          return s;
        },
        getValidDocument: function () {
          return I;
        },
        isSiblingNode: function () {
          return y;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return T;
        },
        setStyle: function () {
          return d;
        },
      });
      let n = a(9468),
        i = a(7087),
        { ELEMENT_MATCHES: r } = n.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: o,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: l,
          WF_PAGE: u,
        } = i.IX2EngineConstants;

      function d(e, t, a) {
        e.style[t] = a;
      }

      function s(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }

      function f(e, t) {
        return e[t];
      }

      function E(e) {
        return (t) => t[r](e);
      }

      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(o)) {
            let a = e.split(o),
              n = a[0];
            if (((t = a[1]), n !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }

      function I(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }

      function T(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }

      function p(e, t) {
        return e.contains(t);
      }

      function y(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }

      function b(e) {
        let t = [];
        for (let a = 0, { length: n } = e || []; a < n; a++) {
          let { children: n } = e[a],
            { length: i } = n;
          if (!!i) for (let e = 0; e < i; e++) t.push(n[e]);
        }
        return t;
      }

      function O(e = []) {
        let t = [],
          a = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
          let { parentNode: i } = e[n];
          if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i))
            continue;
          a.push(i);
          let r = i.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let a = e;
            do {
              if (a[r] && a[r](t)) return a;
              a = a.parentNode;
            } while (null != a);
            return null;
          };

      function m(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : l
          : null;
      }
    },
    1970: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return ef;
        },
        startEngine: function () {
          return et;
        },
        stopActionGroup: function () {
          return es;
        },
        stopAllActionGroups: function () {
          return ed;
        },
        stopEngine: function () {
          return ea;
        },
      });
      let n = T(a(9777)),
        i = T(a(4738)),
        r = T(a(4659)),
        o = T(a(3452)),
        c = T(a(6633)),
        l = T(a(3729)),
        u = T(a(2397)),
        d = T(a(5082)),
        s = a(7087),
        f = a(9468),
        E = a(3946),
        g = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var a = p(t);
          if (a && a.has(e)) return a.get(e);
          var n = {
              __proto__: null,
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(n, r, o)
                : (n[r] = e[r]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(5012)),
        I = T(a(8955));

      function T(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }

      function p(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (p = function (e) {
          return e ? a : t;
        })(e);
      }
      let y = Object.keys(s.QuickEffectIds),
        b = (e) => y.includes(e),
        {
          COLON_DELIMITER: O,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: m,
          RENDER_GENERAL: R,
          W_MOD_IX: A,
        } = s.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: L,
          getDestinationValues: N,
          observeStore: C,
          getInstanceId: v,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: h,
          getComputedStyle: F,
          getInstanceOrigin: V,
          reduceListToGroup: G,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: U,
          shouldAllowMediaQuery: x,
          cleanupHTMLElement: w,
          clearObjectCache: k,
          stringifyTarget: Y,
          mediaQueriesEqual: X,
          shallowEqual: B,
        } = f.IX2VanillaUtils,
        {
          isPluginType: H,
          createPluginInstance: j,
          getPluginDuration: W,
        } = f.IX2VanillaPlugins,
        z = navigator.userAgent,
        Q = z.match(/iPad/i) || z.match(/iPhone/);

      function K(e) {
        C({
          store: e,
          select: ({ ixRequest: e }) => e.preview,
          onChange: $,
        }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: Z,
          }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.stop,
            onChange: J,
          }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.clear,
            onChange: ee,
          });
      }

      function $({ rawData: e, defer: t }, a) {
        let n = () => {
          et({
            store: a,
            rawData: e,
            allowEvents: !0,
          }),
            q();
        };
        t ? setTimeout(n, 0) : n();
      }

      function q() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }

      function Z(e, t) {
        let {
            actionTypeId: a,
            actionListId: n,
            actionItemId: i,
            eventId: r,
            allowEvents: o,
            immediate: c,
            testManual: l,
            verbose: u = !0,
          } = e,
          { rawData: d } = e;
        if (n && i && d && c) {
          let e = d.actionLists[n];
          e &&
            (d = G({
              actionList: e,
              actionItemId: i,
              rawData: d,
            }));
        }
        if (
          (et({
            store: t,
            rawData: d,
            allowEvents: o,
            testManual: l,
          }),
          (n && a === s.ActionTypeConsts.GENERAL_START_ACTION) || b(a))
        ) {
          es({
            store: t,
            actionListId: n,
          }),
            eu({
              store: t,
              actionListId: n,
              eventId: r,
            });
          let e = ef({
            store: t,
            eventId: r,
            actionListId: n,
            immediate: c,
            verbose: u,
          });
          u &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: n,
                isPlaying: !c,
              })
            );
        }
      }

      function J({ actionListId: e }, t) {
        e
          ? es({
              store: t,
              actionListId: e,
            })
          : ed({
              store: t,
            }),
          ea(t);
      }

      function ee(e, t) {
        ea(t),
          M({
            store: t,
            elementApi: g,
          });
      }

      function et({ store: e, rawData: t, allowEvents: a, testManual: o }) {
        let { ixSession: c } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !c.active)) {
          if (
            (e.dispatch(
              (0, E.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(_),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            a &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: a } = t;
                er(e),
                  (0, u.default)(a, (t, a) => {
                    let o = I.default[a];
                    if (!o) {
                      console.warn(`IX2 event type not configured: ${a}`);
                      return;
                    }
                    (function ({ logic: e, store: t, events: a }) {
                      (function (e) {
                        if (!Q) return;
                        let t = {},
                          a = "";
                        for (let n in e) {
                          let { eventTypeId: i, target: r } = e[n],
                            o = g.getQuerySelector(r);
                          if (!t[o])
                            (i === s.EventTypeConsts.MOUSE_CLICK ||
                              i === s.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[o] = !0),
                              (a +=
                                o +
                                "{cursor: pointer;touch-action: manipulation;}"));
                        }
                        if (a) {
                          let e = document.createElement("style");
                          (e.textContent = a), document.body.appendChild(e);
                        }
                      })(a);
                      let { types: o, handler: c } = e,
                        { ixData: l } = t.getState(),
                        { actionLists: f } = l,
                        I = eo(a, el);
                      if (!(0, r.default)(I)) return;
                      (0, u.default)(I, (e, r) => {
                        let o = a[r],
                          {
                            action: c,
                            id: u,
                            mediaQueries: d = l.mediaQueryKeys,
                          } = o,
                          { actionListId: I } = c.config;
                        !X(d, l.mediaQueryKeys) &&
                          t.dispatch((0, E.mediaQueriesDefined)()),
                          c.actionTypeId ===
                            s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(o.config)
                              ? o.config
                              : [o.config]
                            ).forEach((a) => {
                              let { continuousParameterGroupId: r } = a,
                                o = (0, i.default)(
                                  f,
                                  `${I}.continuousParameterGroups`,
                                  []
                                ),
                                c = (0, n.default)(o, ({ id: e }) => e === r),
                                l = (a.smoothing || 0) / 100,
                                d = (a.restingState || 0) / 100;
                              if (!!c)
                                e.forEach((e, n) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: a,
                                    eventId: n,
                                    eventConfig: r,
                                    actionListId: o,
                                    parameterGroup: c,
                                    smoothing: l,
                                    restingValue: u,
                                  }) {
                                    let { ixData: d, ixSession: f } =
                                        e.getState(),
                                      { events: E } = d,
                                      I = E[n],
                                      { eventTypeId: T } = I,
                                      p = {},
                                      y = {},
                                      b = [],
                                      { continuousActionGroups: m } = c,
                                      { id: R } = c;
                                    D(T, r) && (R = U(t, R));
                                    let A =
                                      f.hasBoundaryNodes && a
                                        ? g.getClosestElement(a, _)
                                        : null;
                                    m.forEach((e) => {
                                      let { keyframe: t, actionItems: n } = e;
                                      n.forEach((e) => {
                                        let { actionTypeId: n } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let r = i.boundaryMode ? A : null,
                                          o = Y(i) + O + n;
                                        if (
                                          ((y[o] = (function (e = [], t, a) {
                                            let n;
                                            let i = [...e];
                                            return (
                                              i.some(
                                                (e, a) =>
                                                  e.keyframe === t &&
                                                  ((n = a), !0)
                                              ),
                                              null == n &&
                                                ((n = i.length),
                                                i.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              i[n].actionItems.push(a),
                                              i
                                            );
                                          })(y[o], t, e)),
                                          !p[o])
                                        ) {
                                          p[o] = !0;
                                          let { config: t } = e;
                                          S({
                                            config: t,
                                            event: I,
                                            eventTarget: a,
                                            elementRoot: r,
                                            elementApi: g,
                                          }).forEach((e) => {
                                            b.push({
                                              element: e,
                                              key: o,
                                            });
                                          });
                                        }
                                      });
                                    }),
                                      b.forEach(({ element: t, key: a }) => {
                                        let r = y[a],
                                          c = (0, i.default)(
                                            r,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: d } = c,
                                          f = (
                                            d === s.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  c.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : H(d)
                                          )
                                            ? j(d)?.(t, c)
                                            : null,
                                          E = N(
                                            {
                                              element: t,
                                              actionItem: c,
                                              elementApi: g,
                                            },
                                            f
                                          );
                                        eE({
                                          store: e,
                                          element: t,
                                          eventId: n,
                                          actionListId: o,
                                          actionItem: c,
                                          destination: E,
                                          continuous: !0,
                                          parameterId: R,
                                          actionGroups: r,
                                          smoothing: l,
                                          restingValue: u,
                                          pluginInstance: f,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: u + O + n,
                                    eventTarget: e,
                                    eventId: u,
                                    eventConfig: a,
                                    actionListId: I,
                                    parameterGroup: c,
                                    smoothing: l,
                                    restingValue: d,
                                  });
                                });
                            }),
                          (c.actionTypeId ===
                            s.ActionTypeConsts.GENERAL_START_ACTION ||
                            b(c.actionTypeId)) &&
                            eu({
                              store: t,
                              actionListId: I,
                              eventId: u,
                            });
                      });
                      let T = (e) => {
                          let { ixSession: n } = t.getState();
                          ec(I, (i, r, o) => {
                            let u = a[r],
                              d = n.eventState[o],
                              {
                                action: f,
                                mediaQueries: g = l.mediaQueryKeys,
                              } = u;
                            if (!x(g, n.mediaQueryKey)) return;
                            let I = (a = {}) => {
                              let n = c(
                                {
                                  store: t,
                                  element: i,
                                  event: u,
                                  eventConfig: a,
                                  nativeEvent: e,
                                  eventStateKey: o,
                                },
                                d
                              );
                              !B(n, d) &&
                                t.dispatch((0, E.eventStateChanged)(o, n));
                            };
                            f.actionTypeId ===
                            s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(u.config)
                                  ? u.config
                                  : [u.config]
                                ).forEach(I)
                              : I();
                          });
                        },
                        p = (0, d.default)(T, 12),
                        y = ({
                          target: e = document,
                          types: a,
                          throttle: n,
                        }) => {
                          a.split(" ")
                            .filter(Boolean)
                            .forEach((a) => {
                              let i = n ? p : T;
                              e.addEventListener(a, i),
                                t.dispatch(
                                  (0, E.eventListenerAdded)(e, [a, i])
                                );
                            });
                        };
                      Array.isArray(o)
                        ? o.forEach(y)
                        : "string" == typeof o && y(e);
                    })({
                      logic: o,
                      store: e,
                      events: t,
                    });
                  });
                let { ixSession: o } = e.getState();
                o.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      er(e);
                    };
                    ei.forEach((a) => {
                      window.addEventListener(a, t),
                        e.dispatch((0, E.eventListenerAdded)(window, [a, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(A) && (e.className += ` ${A}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries))
          ) {
            var l;
            C({
              store: (l = e),
              select: ({ ixSession: e }) => e.mediaQueryKey,
              onChange: () => {
                ea(l),
                  M({
                    store: l,
                    elementApi: g,
                  }),
                  et({
                    store: l,
                    allowEvents: !0,
                  }),
                  q();
              },
            });
          }
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let a = (n) => {
                let { ixSession: i, ixParameters: r } = e.getState();
                i.active &&
                  (e.dispatch((0, E.animationFrameChanged)(n, r)),
                  t
                    ? !(function (e, t) {
                        let a = C({
                          store: e,
                          select: ({ ixSession: e }) => e.tick,
                          onChange: (e) => {
                            t(e), a();
                          },
                        });
                      })(e, a)
                    : requestAnimationFrame(a));
              };
              a(window.performance.now());
            })(e, o);
        }
      }

      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: a } = t;
          a.forEach(en), k(), e.dispatch((0, E.sessionStopped)());
        }
      }

      function en({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let ei = ["resize", "orientationchange"];

      function er(e) {
        let { ixSession: t, ixData: a } = e.getState(),
          n = window.innerWidth;
        if (n !== t.viewportWidth) {
          let { mediaQueries: t } = a;
          e.dispatch(
            (0, E.viewportWidthChanged)({
              width: n,
              mediaQueries: t,
            })
          );
        }
      }
      let eo = (e, t) => (0, o.default)((0, l.default)(e, t), c.default),
        ec = (e, t) => {
          (0, u.default)(e, (e, a) => {
            e.forEach((e, n) => {
              t(e, a, a + O + n);
            });
          });
        },
        el = (e) =>
          S({
            config: {
              target: e.target,
              targets: e.targets,
            },
            elementApi: g,
          });

      function eu({ store: e, actionListId: t, eventId: a }) {
        let { ixData: n, ixSession: r } = e.getState(),
          { actionLists: o, events: c } = n,
          l = c[a],
          u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
          let o = (0, i.default)(u, "actionItemGroups[0].actionItems", []);
          if (
            !x(
              (0, i.default)(l, "mediaQueries", n.mediaQueryKeys),
              r.mediaQueryKey
            )
          )
            return;
          o.forEach((n) => {
            let { config: i, actionTypeId: r } = n,
              o = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? {
                        target: l.target,
                        targets: l.targets,
                      }
                    : i,
                event: l,
                elementApi: g,
              }),
              c = H(r);
            o.forEach((i) => {
              let o = c ? j(r)?.(i, n) : null;
              eE({
                destination: N(
                  {
                    element: i,
                    actionItem: n,
                    elementApi: g,
                  },
                  o
                ),
                immediate: !0,
                store: e,
                element: i,
                eventId: a,
                actionItem: n,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }

      function ed({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: a, verbose: n } = t;
            eg(t, e),
              n &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }

      function es({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: r,
      }) {
        let { ixInstances: o, ixSession: c } = e.getState(),
          l = c.hasBoundaryNodes && a ? g.getClosestElement(a, _) : null;
        (0, u.default)(o, (a) => {
          let o = (0, i.default)(a, "actionItem.config.target.boundaryMode"),
            c = !n || a.eventStateKey === n;
          if (a.actionListId === r && a.eventId === t && c) {
            if (l && o && !g.elementContains(l, a.element)) return;
            eg(a, e),
              a.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: r,
                    isPlaying: !1,
                  })
                );
          }
        });
      }

      function ef({
        store: e,
        eventId: t,
        eventTarget: a,
        eventStateKey: n,
        actionListId: r,
        groupIndex: o = 0,
        immediate: c,
        verbose: l,
      }) {
        let { ixData: u, ixSession: d } = e.getState(),
          { events: s } = u,
          f = s[t] || {},
          { mediaQueries: E = u.mediaQueryKeys } = f,
          { actionItemGroups: I, useFirstGroupAsInitialState: T } = (0,
          i.default)(u, `actionLists.${r}`, {});
        if (!I || !I.length) return !1;
        o >= I.length && (0, i.default)(f, "config.loop") && (o = 0),
          0 === o && T && o++;
        let p =
            (0 === o || (1 === o && T)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, i.default)(I, [o, "actionItems"], []);
        if (!y.length || !x(E, d.mediaQueryKey)) return !1;
        let O = d.hasBoundaryNodes && a ? g.getClosestElement(a, _) : null,
          m = h(y),
          R = !1;
        return (
          y.forEach((i, u) => {
            let { config: d, actionTypeId: s } = i,
              E = H(s),
              { target: I } = d;
            if (!!I)
              S({
                config: d,
                event: f,
                eventTarget: a,
                elementRoot: I.boundaryMode ? O : null,
                elementApi: g,
              }).forEach((d, f) => {
                let I = E ? j(s)?.(d, i) : null,
                  T = E ? W(s)(d, i) : null;
                R = !0;
                let y = F({
                    element: d,
                    actionItem: i,
                  }),
                  b = N(
                    {
                      element: d,
                      actionItem: i,
                      elementApi: g,
                    },
                    I
                  );
                eE({
                  store: e,
                  element: d,
                  actionItem: i,
                  eventId: t,
                  eventTarget: a,
                  eventStateKey: n,
                  actionListId: r,
                  groupIndex: o,
                  isCarrier: m === u && 0 === f,
                  computedStyle: y,
                  destination: b,
                  immediate: c,
                  verbose: l,
                  pluginInstance: I,
                  pluginDuration: T,
                  instanceDelay: p,
                });
              });
          }),
          R
        );
      }

      function eE(e) {
        let t;
        let { store: a, computedStyle: n, ...i } = e,
          {
            element: r,
            actionItem: o,
            immediate: c,
            pluginInstance: l,
            continuous: u,
            restingValue: d,
            eventId: f,
          } = i,
          I = v(),
          { ixElements: T, ixSession: p, ixData: y } = a.getState(),
          b = L(T, r),
          { refState: O } = T[b] || {},
          _ = g.getRefType(r),
          m = p.reducedMotion && s.ReducedMotionTypes[o.actionTypeId];
        if (m && u)
          switch (y.events[f]?.eventTypeId) {
            case s.EventTypeConsts.MOUSE_MOVE:
            case s.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = d;
              break;
            default:
              t = 0.5;
          }
        let R = V(r, O, n, o, g, l);
        if (
          (a.dispatch(
            (0, E.instanceAdded)({
              instanceId: I,
              elementId: b,
              origin: R,
              refType: _,
              skipMotion: m,
              skipToValue: t,
              ...i,
            })
          ),
          eI(document.body, "ix2-animation-started", I),
          c)
        ) {
          (function (e, t) {
            let { ixParameters: a } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), a));
            let { ixInstances: n } = e.getState();
            eT(n[t], e);
          })(a, I);
          return;
        }
        C({
          store: a,
          select: ({ ixInstances: e }) => e[I],
          onChange: eT,
        }),
          !u && a.dispatch((0, E.instanceStarted)(I, p.tick));
      }

      function eg(e, t) {
        eI(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: a, actionItem: n } = e,
          { ixElements: i } = t.getState(),
          { ref: r, refType: o } = i[a] || {};
        o === m && w(r, n, g), t.dispatch((0, E.instanceRemoved)(e.id));
      }

      function eI(e, t, a) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n);
      }

      function eT(e, t) {
        let {
            active: a,
            continuous: n,
            complete: i,
            elementId: r,
            actionItem: o,
            actionTypeId: c,
            renderType: l,
            current: u,
            groupIndex: d,
            eventId: s,
            eventTarget: f,
            eventStateKey: I,
            actionListId: T,
            isCarrier: p,
            styleProp: y,
            verbose: b,
            pluginInstance: O,
          } = e,
          { ixData: _, ixSession: A } = t.getState(),
          { events: S } = _,
          { mediaQueries: L = _.mediaQueryKeys } = S && S[s] ? S[s] : {};
        if (!!x(L, A.mediaQueryKey)) {
          if (n || a || i) {
            if (u || (l === R && i)) {
              t.dispatch((0, E.elementStateChanged)(r, c, u, o));
              let { ixElements: e } = t.getState(),
                { ref: a, refType: n, refState: i } = e[r] || {},
                d = i && i[c];
              (n === m || H(c)) && P(a, i, d, s, o, y, g, l, O);
            }
            if (i) {
              if (p) {
                let e = ef({
                  store: t,
                  eventId: s,
                  eventTarget: f,
                  eventStateKey: I,
                  actionListId: T,
                  groupIndex: d + 1,
                  verbose: b,
                });
                b &&
                  !e &&
                  t.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: T,
                      isPlaying: !1,
                    })
                  );
              }
              eg(e, t);
            }
          }
        }
      }
    },
    8955: function (e, t, a) {
      "use strict";
      let n, i, r;
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eI;
          },
        });
      let o = E(a(5801)),
        c = E(a(4738)),
        l = E(a(3789)),
        u = a(7087),
        d = a(1970),
        s = a(3946),
        f = a(9468);

      function E(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      let {
          MOUSE_CLICK: g,
          MOUSE_SECOND_CLICK: I,
          MOUSE_DOWN: T,
          MOUSE_UP: p,
          MOUSE_OVER: y,
          MOUSE_OUT: b,
          DROPDOWN_CLOSE: O,
          DROPDOWN_OPEN: _,
          SLIDER_ACTIVE: m,
          SLIDER_INACTIVE: R,
          TAB_ACTIVE: A,
          TAB_INACTIVE: S,
          NAVBAR_CLOSE: L,
          NAVBAR_OPEN: N,
          MOUSE_MOVE: C,
          PAGE_SCROLL_DOWN: v,
          SCROLL_INTO_VIEW: P,
          SCROLL_OUT_OF_VIEW: M,
          PAGE_SCROLL_UP: h,
          SCROLLING_IN_VIEW: F,
          PAGE_FINISH: V,
          ECOMMERCE_CART_CLOSE: G,
          ECOMMERCE_CART_OPEN: D,
          PAGE_START: U,
          PAGE_SCROLL: x,
        } = u.EventTypeConsts,
        w = "COMPONENT_ACTIVE",
        k = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: Y } = u.IX2EngineConstants,
        { getNamespacedParameterId: X } = f.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        H = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, o.default)([H, j]),
        z = (e, t) => {
          if (t) {
            let { ixData: a } = e.getState(),
              { events: n } = a,
              i = n[t];
            if (i && !ea[i.eventTypeId]) return i;
          }
          return null;
        },
        Q = ({ store: e, event: t }) => {
          let { action: a } = t,
            { autoStopEventId: n } = a.config;
          return !!z(e, n);
        },
        K = ({ store: e, event: t, element: a, eventStateKey: n }, i) => {
          let { action: r, id: o } = t,
            { actionListId: l, autoStopEventId: u } = r.config,
            s = z(e, u);
          return (
            s &&
              (0, d.stopActionGroup)({
                store: e,
                eventId: u,
                eventTarget: a,
                eventStateKey: u + Y + n.split(Y)[1],
                actionListId: (0, c.default)(s, "action.config.actionListId"),
              }),
            (0, d.stopActionGroup)({
              store: e,
              eventId: o,
              eventTarget: a,
              eventStateKey: n,
              actionListId: l,
            }),
            (0, d.startActionGroup)({
              store: e,
              eventId: o,
              eventTarget: a,
              eventStateKey: n,
              actionListId: l,
            }),
            i
          );
        },
        $ = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n,
        q = {
          handler: $(W, K),
        },
        Z = {
          ...q,
          types: [w, k].join(" "),
        },
        J = [
          {
            target: window,
            types: "resize orientationchange",
            throttle: !0,
          },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        ee = "mouseover mouseout",
        et = {
          types: J,
        },
        ea = {
          PAGE_START: U,
          PAGE_FINISH: V,
        },
        en = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, l.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        er = ({ element: e, nativeEvent: t }) => {
          let { type: a, target: n, relatedTarget: i } = t,
            r = e.contains(n);
          if ("mouseover" === a && r) return !0;
          let o = e.contains(i);
          return ("mouseout" === a && !!r && !!o) || !1;
        },
        eo = (e) => {
          let {
              element: t,
              event: { config: a },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            r = a.scrollOffsetValue,
            o = a.scrollOffsetUnit,
            c = "PX" === o ? r : (i * (r || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: n,
            bottom: i - c,
          });
        },
        ec = (e) => (t, a) => {
          let { type: n } = t.nativeEvent,
            i = -1 !== [w, k].indexOf(n) ? n === w : a.isActive,
            r = {
              ...a,
              isActive: i,
            };
          return a && r.isActive === a.isActive ? r : e(t, r) || r;
        },
        el = (e) => (t, a) => {
          let n = {
            elementHovered: er(t),
          };
          return (
            ((a ? n.elementHovered !== a.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        },
        eu =
          (e) =>
          (t, a = {}) => {
            let n, i;
            let { stiffScrollTop: r, scrollHeight: o, innerHeight: c } = en(),
              {
                event: { config: l, eventTypeId: u },
              } = t,
              { scrollOffsetValue: d, scrollOffsetUnit: s } = l,
              f = o - c,
              E = Number((r / f).toFixed(2));
            if (a && a.percentTop === E) return a;
            let g = ("PX" === s ? d : (c * (d || 0)) / 100) / f,
              I = 0;
            a &&
              ((n = E > a.percentTop),
              (I = (i = a.scrollingDown !== n) ? E : a.anchorTop));
            let T = u === v ? E >= I + g : E <= I - g,
              p = {
                ...a,
                percentTop: E,
                inBounds: T,
                anchorTop: I,
                scrollingDown: n,
              };
            return (a && T && (i || p.inBounds !== a.inBounds) && e(t, p)) || p;
          },
        ed = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (
            t,
            a = {
              clickCount: 0,
            }
          ) => {
            let n = {
              clickCount: (a.clickCount % 2) + 1,
            };
            return (n.clickCount !== a.clickCount && e(t, n)) || n;
          },
        ef = (e = !0) => ({
          ...Z,
          handler: $(
            e ? W : H,
            ec((e, t) => (t.isActive ? q.handler(e, t) : t))
          ),
        }),
        eE = (e = !0) => ({
          ...Z,
          handler: $(
            e ? W : H,
            ec((e, t) => (t.isActive ? t : q.handler(e, t)))
          ),
        });
      let eg = {
        ...et,
        handler:
          ((n = (e, t) => {
            let { elementVisible: a } = t,
              { event: n, store: i } = e,
              { ixData: r } = i.getState(),
              { events: o } = r;
            return !o[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === P) === a
              ? (K(e),
                {
                  ...t,
                  triggered: !0,
                })
              : t;
          }),
          (e, t) => {
            let a = {
              ...t,
              elementVisible: eo(e),
            };
            return (
              ((t ? a.elementVisible !== t.elementVisible : a.elementVisible) &&
                n(e, a)) ||
              a
            );
          }),
      };
      let eI = {
        [m]: ef(),
        [R]: eE(),
        [_]: ef(),
        [O]: eE(),
        [N]: ef(!1),
        [L]: eE(!1),
        [A]: ef(),
        [S]: eE(),
        [D]: {
          types: "ecommerce-cart-open",
          handler: $(W, K),
        },
        [G]: {
          types: "ecommerce-cart-close",
          handler: $(W, K),
        },
        [g]: {
          types: "click",
          handler: $(
            W,
            es((e, { clickCount: t }) => {
              Q(e) ? 1 === t && K(e) : K(e);
            })
          ),
        },
        [I]: {
          types: "click",
          handler: $(
            W,
            es((e, { clickCount: t }) => {
              2 === t && K(e);
            })
          ),
        },
        [T]: {
          ...q,
          types: "mousedown",
        },
        [p]: {
          ...q,
          types: "mouseup",
        },
        [y]: {
          types: ee,
          handler: $(
            W,
            el((e, t) => {
              t.elementHovered && K(e);
            })
          ),
        },
        [b]: {
          types: ee,
          handler: $(
            W,
            el((e, t) => {
              !t.elementHovered && K(e);
            })
          ),
        },
        [C]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: a,
              nativeEvent: n,
              eventStateKey: i,
            },
            r = {
              clientX: 0,
              clientY: 0,
              pageX: 0,
              pageY: 0,
            }
          ) => {
            let {
                basedOn: o,
                selectedAxis: c,
                continuousParameterGroupId: l,
                reverse: d,
                restingState: f = 0,
              } = a,
              {
                clientX: E = r.clientX,
                clientY: g = r.clientY,
                pageX: I = r.pageX,
                pageY: T = r.pageY,
              } = n,
              p = "X_AXIS" === c,
              y = "mouseout" === n.type,
              b = f / 100,
              O = l,
              _ = !1;
            switch (o) {
              case u.EventBasedOn.VIEWPORT:
                b = p
                  ? Math.min(E, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case u.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: a,
                  scrollHeight: n,
                } = en();
                b = p ? Math.min(e + I, a) / a : Math.min(t + T, n) / n;
                break;
              }
              case u.EventBasedOn.ELEMENT:
              default: {
                O = X(i, l);
                let e = 0 === n.type.indexOf("mouse");
                if (
                  e &&
                  !0 !==
                    W({
                      element: t,
                      nativeEvent: n,
                    })
                )
                  break;
                let a = t.getBoundingClientRect(),
                  { left: r, top: o, width: c, height: u } = a;
                if (
                  !e &&
                  !ed(
                    {
                      left: E,
                      top: g,
                    },
                    a
                  )
                )
                  break;
                (_ = !0), (b = p ? (E - r) / c : (g - o) / u);
              }
            }
            return (
              y && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
              (o !== u.EventBasedOn.ELEMENT || _ || _ !== r.elementHovered) &&
                ((b = d ? 1 - b : b),
                e.dispatch((0, s.parameterChanged)(O, b))),
              {
                elementHovered: _,
                clientX: E,
                clientY: g,
                pageX: I,
                pageY: T,
              }
            );
          },
        },
        [x]: {
          types: J,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: a, reverse: n } = t,
              { scrollTop: i, scrollHeight: r, clientHeight: o } = en(),
              c = i / (r - o);
            (c = n ? 1 - c : c), e.dispatch((0, s.parameterChanged)(a, c));
          },
        },
        [F]: {
          types: J,
          handler: (
            { element: e, store: t, eventConfig: a, eventStateKey: n },
            i = {
              scrollPercent: 0,
            }
          ) => {
            let {
                scrollLeft: r,
                scrollTop: o,
                scrollWidth: c,
                scrollHeight: l,
                clientHeight: d,
              } = en(),
              {
                basedOn: f,
                selectedAxis: E,
                continuousParameterGroupId: g,
                startsEntering: I,
                startsExiting: T,
                addEndOffset: p,
                addStartOffset: y,
                addOffsetValue: b = 0,
                endOffsetValue: O = 0,
              } = a;
            if (f === u.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === E ? r / c : o / l;
              return (
                e !== i.scrollPercent &&
                  t.dispatch((0, s.parameterChanged)(g, e)),
                {
                  scrollPercent: e,
                }
              );
            }
            {
              let a = X(n, g),
                r = e.getBoundingClientRect(),
                o = (y ? b : 0) / 100,
                c = (p ? O : 0) / 100;
              (o = I ? o : 1 - o), (c = T ? c : 1 - c);
              let u = r.top + Math.min(r.height * o, d),
                f = r.top + r.height * c,
                E = Math.min(d + (f - u), l),
                _ = Math.min(Math.max(0, d - u), E) / E;
              return (
                _ !== i.scrollPercent &&
                  t.dispatch((0, s.parameterChanged)(a, _)),
                {
                  scrollPercent: _,
                }
              );
            }
          },
        },
        [P]: eg,
        [M]: eg,
        [v]: {
          ...et,
          handler: eu((e, t) => {
            t.scrollingDown && K(e);
          }),
        },
        [h]: {
          ...et,
          handler: eu((e, t) => {
            !t.scrollingDown && K(e);
          }),
        },
        [V]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: $(
            H,
            ((i = K),
            (e, t) => {
              let a = {
                finished: "complete" === document.readyState,
              };
              return a.finished && !(t && t.finshed) && i(e), a;
            })
          ),
        },
        [U]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: $(
            H,
            ((r = K),
            (e, t) => (
              t || r(e),
              {
                started: !0,
              }
            ))
          ),
        },
      };
    },
    4609: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: n } = a(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) => {
          if (t.type === n) return t.payload.ixData || Object.freeze({});
          return e;
        };
    },
    7718: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = a(7087),
        i = a(9468),
        r = a(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: l,
          IX2_INSTANCE_STARTED: u,
          IX2_INSTANCE_REMOVED: d,
          IX2_ANIMATION_FRAME_CHANGED: s,
        } = n.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: E,
          createBezierEasing: g,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = n.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: p,
          getStyleProp: y,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let a, n, i, o;
          let {
              position: c,
              parameterId: l,
              actionGroups: u,
              destinationKeys: d,
              smoothing: s,
              restingValue: g,
              actionTypeId: I,
              customEasingFn: p,
              skipMotion: y,
              skipToValue: b,
            } = e,
            { parameters: O } = t.payload,
            _ = Math.max(1 - s, 0.01),
            m = O[l];
          null == m && ((_ = 1), (m = g));
          let R = f((Math.max(m, 0) || 0) - c),
            A = y ? b : f(c + R * _),
            S = 100 * A;
          if (A === c && e.current) return e;
          for (let e = 0, { length: t } = u; e < t; e++) {
            let { keyframe: t, actionItems: r } = u[e];
            if ((0 === e && (a = r[0]), S >= t)) {
              a = r[0];
              let c = u[e + 1],
                l = c && S !== t;
              (n = l ? c.actionItems[0] : null),
                l && ((i = t / 100), (o = (c.keyframe - t) / 100));
            }
          }
          let L = {};
          if (a && !n)
            for (let e = 0, { length: t } = d; e < t; e++) {
              let t = d[e];
              L[t] = T(I, t, a.config);
            }
          else if (a && n && void 0 !== i && void 0 !== o) {
            let e = (A - i) / o,
              t = E(a.config.easing, e, p);
            for (let e = 0, { length: i } = d; e < i; e++) {
              let i = d[e],
                r = T(I, i, a.config),
                o = (T(I, i, n.config) - r) * t + r;
              L[i] = o;
            }
          }
          return (0, r.merge)(e, {
            position: A,
            current: L,
          });
        },
        O = (e, t) => {
          let {
              active: a,
              origin: n,
              start: i,
              immediate: o,
              renderType: c,
              verbose: l,
              actionItem: u,
              destination: d,
              destinationKeys: s,
              pluginDuration: g,
              instanceDelay: T,
              customEasingFn: p,
              skipMotion: y,
            } = e,
            b = u.config.easing,
            { duration: O, delay: _ } = u.config;
          null != g && (O = g),
            (_ = null != T ? T : _),
            c === I ? (O = 0) : (o || y) && (O = _ = 0);
          let { now: m } = t.payload;
          if (a && n) {
            let t = m - (i + _);
            if (l) {
              let t = O + _,
                a = f(Math.min(Math.max(0, (m - i) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * a);
            }
            if (t < 0) return e;
            let a = f(Math.min(Math.max(0, t / O), 1)),
              o = E(b, a, p),
              c = {},
              u = null;
            return (
              s.length &&
                (u = s.reduce((e, t) => {
                  let a = d[t],
                    i = parseFloat(n[t]) || 0,
                    r = parseFloat(a) - i;
                  return (e[t] = r * o + i), e;
                }, {})),
              (c.current = u),
              (c.position = a),
              1 === a && ((c.active = !1), (c.complete = !0)),
              (0, r.merge)(e, c)
            );
          }
          return e;
        },
        _ = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case l: {
              let {
                  instanceId: a,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: c,
                  eventStateKey: l,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: s,
                  origin: f,
                  destination: E,
                  immediate: I,
                  verbose: T,
                  continuous: b,
                  parameterId: O,
                  actionGroups: _,
                  smoothing: m,
                  restingValue: R,
                  pluginInstance: A,
                  pluginDuration: S,
                  instanceDelay: L,
                  skipMotion: N,
                  skipToValue: C,
                } = t.payload,
                { actionTypeId: v } = i,
                P = p(v),
                M = y(P, v),
                h = Object.keys(E).filter(
                  (e) => null != E[e] && "string" != typeof E[e]
                ),
                { easing: F } = i.config;
              return (0, r.set)(e, a, {
                id: a,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: E,
                destinationKeys: h,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: v,
                eventId: o,
                eventTarget: c,
                eventStateKey: l,
                actionListId: u,
                groupIndex: d,
                renderType: P,
                isCarrier: s,
                styleProp: M,
                continuous: b,
                parameterId: O,
                actionGroups: _,
                smoothing: m,
                restingValue: R,
                pluginInstance: A,
                pluginDuration: S,
                instanceDelay: L,
                skipMotion: N,
                skipToValue: C,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? g(F) : void 0,
              });
            }
            case u: {
              let { instanceId: a, time: n } = t.payload;
              return (0, r.mergeIn)(e, [a], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case d: {
              let { instanceId: a } = t.payload;
              if (!e[a]) return e;
              let n = {},
                i = Object.keys(e),
                { length: r } = i;
              for (let t = 0; t < r; t++) {
                let r = i[t];
                r !== a && (n[r] = e[r]);
              }
              return n;
            }
            case s: {
              let a = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let i = n[o],
                  c = e[i],
                  l = c.continuous ? b : O;
                a = (0, r.set)(a, i, l(c, t));
              }
              return a;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: n,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: r,
        } = a(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case n:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case r: {
              let { key: a, value: n } = t.payload;
              return (e[a] = n), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = a(9516),
        i = a(4609),
        r = a(628),
        o = a(5862),
        c = a(9468),
        l = a(7718),
        u = a(1540),
        { ixElements: d } = c.IX2ElementsReducer,
        s = (0, n.combineReducers)({
          ixData: i.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: d,
          ixInstances: l.ixInstances,
          ixParameters: u.ixParameters,
        });
    },
    628: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: l,
        } = n.IX2EngineActionTypes,
        u = {
          preview: {},
          playback: {},
          stop: {},
          clear: {},
        },
        d = Object.create(null, {
          [r]: {
            value: "preview",
          },
          [o]: {
            value: "playback",
          },
          [c]: {
            value: "stop",
          },
          [l]: {
            value: "clear",
          },
        }),
        s = (e = u, t) => {
          if (t.type in d) {
            let a = [d[t.type]];
            return (0, i.setIn)(e, [a], {
              ...t.payload,
            });
          }
          return e;
        };
    },
    5862: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        });
      let n = a(7087),
        i = a(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: l,
          IX2_EVENT_LISTENER_ADDED: u,
          IX2_EVENT_STATE_CHANGED: d,
          IX2_ANIMATION_FRAME_CHANGED: s,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: E,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = n.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = I, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: a, reducedMotion: n } = t.payload;
              return (0, i.merge)(e, {
                hasBoundaryNodes: a,
                reducedMotion: n,
              });
            }
            case o:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: a = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + a);
            }
            case l:
              return I;
            case s: {
              let {
                payload: { now: a },
              } = t;
              return (0, i.set)(e, "tick", a);
            }
            case u: {
              let a = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", a);
            }
            case d: {
              let { stateKey: a, newState: n } = t.payload;
              return (0, i.setIn)(e, ["eventState", a], n);
            }
            case f: {
              let { actionListId: a, isPlaying: n } = t.payload;
              return (0, i.setIn)(e, ["playbackState", a], n);
            }
            case E: {
              let { width: a, mediaQueries: n } = t.payload,
                r = n.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: i, max: r } = n[e];
                if (a >= i && a <= r) {
                  o = t;
                  break;
                }
              }
              return (0, i.merge)(e, {
                viewportWidth: a,
                mediaQueryKey: o,
              });
            }
            case g:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        clearPlugin: function () {
          return l;
        },
        createPluginInstance: function () {
          return o;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return r;
        },
        getPluginDuration: function () {
          return n;
        },
        getPluginOrigin: function () {
          return i;
        },
        renderPlugin: function () {
          return c;
        },
      });
      let a = (e) => e.value,
        n = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let a = parseFloat(e.getAttribute("data-duration"));
          return a > 0
            ? 1e3 * a
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        i = (e) =>
          e || {
            value: 0,
          },
        r = (e) => ({
          value: e.value,
        }),
        o = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let a = t.createInstance(e);
          return a.stop(), a.setSubframe(!0), a;
        },
        c = (e, t, a) => {
          if (!e) return;
          let n = t[a.actionTypeId].value / 100;
          e.goToFrame(e.frames * n);
        },
        l = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let a = "--wf-rive-fit",
        n = "--wf-rive-alignment",
        i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("rive"),
        o = (e, t) => e.value.inputs[t],
        c = () => null,
        l = (e, t) => {
          if (e) return e;
          let a = {},
            { inputs: n = {} } = t.config.value;
          for (let e in n) null == n[e] && (a[e] = 0);
          return a;
        },
        u = (e) => e.value.inputs ?? {},
        d = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let a = t?.config?.target?.pluginElement;
          return a ? i(a) : null;
        },
        s = (e, { PLUGIN_RIVE: t }, i) => {
          let o = r();
          if (!o) return;
          let c = o.getInstance(e),
            l = o.rive.StateMachineInputType,
            { name: u, inputs: d = {} } = i.config.value || {};

          function s(e) {
            if (e.loaded) i();
            else {
              let t = () => {
                i(), e?.off("load", t);
              };
              e?.on("load", t);
            }

            function i() {
              let i = e.stateMachineInputs(u);
              if (null != i) {
                if ((!e.isPlaying && e.play(u, !1), a in d || n in d)) {
                  let t = e.layout,
                    i = d[a] ?? t.fit,
                    r = d[n] ?? t.alignment;
                  (i !== t.fit || r !== t.alignment) &&
                    (e.layout = t.copyWith({
                      fit: i,
                      alignment: r,
                    }));
                }
                for (let e in d) {
                  if (e === a || e === n) continue;
                  let r = i.find((t) => t.name === e);
                  if (null != r)
                    switch (r.type) {
                      case l.Boolean:
                        if (null != d[e]) {
                          let t = !!d[e];
                          r.value = t;
                        }
                        break;
                      case l.Number: {
                        let a = t[e];
                        null != a && (r.value = a);
                        break;
                      }
                      case l.Trigger:
                        d[e] && r.fire();
                    }
                }
              }
            }
          }
          c?.rive ? s(c.rive) : o.setLoadHandler(e, s);
        },
        f = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        n = () => window.Webflow.require("spline"),
        i = (e, t) => e.filter((e) => !t.includes(e)),
        r = (e, t) => e.value[t],
        o = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        l = (e, t) => {
          let a = Object.keys(t.config.value);
          if (e) {
            let t = i(a, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return a.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        u = (e) => e.value,
        d = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        s = (e, t, a) => {
          let i = n();
          if (!i) return;
          let r = i.getInstance(e),
            o = a.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let a = o && e.findObjectById(o);
              if (!a) return;
              let { PLUGIN_SPLINE: n } = t;
              null != n.positionX && (a.position.x = n.positionX),
                null != n.positionY && (a.position.y = n.positionY),
                null != n.positionZ && (a.position.z = n.positionZ),
                null != n.rotationX && (a.rotation.x = n.rotationX),
                null != n.rotationY && (a.rotation.y = n.rotationY),
                null != n.rotationZ && (a.rotation.z = n.rotationZ),
                null != n.scaleX && (a.scale.x = n.scaleX),
                null != n.scaleY && (a.scale.y = n.scaleY),
                null != n.scaleZ && (a.scale.z = n.scaleZ);
            };
          r ? c(r.spline) : i.setLoadHandler(e, c);
        },
        f = () => null;
    },
    1407: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return d;
        },
      });
      let n = a(380),
        i = (e, t) => e.value[t],
        r = () => null,
        o = (e, t) => {
          if (e) return e;
          let a = t.config.value,
            i = t.config.target.objectId,
            r = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != a.size
            ? {
                size: parseInt(r, 10),
              }
            : "%" === a.unit || "-" === a.unit
            ? {
                size: parseFloat(r),
              }
            : null != a.red && null != a.green && null != a.blue
            ? (0, n.normalizeColor)(r)
            : void 0;
        },
        c = (e) => e.value,
        l = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: a, alpha: n }) =>
              [e, t, a, n].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: a, alpha: n }) =>
              `rgba(${e}, ${t}, ${a}, ${n})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => {
              if ("-" === t) return e;
              return `${e}${t}`;
            },
          },
        },
        d = (e, t, a) => {
          let {
              target: { objectId: n },
              value: { unit: i },
            } = a.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(u).find((e) => e.match(r, i));
          o && document.documentElement.style.setProperty(n, o.getValue(r, i));
        },
        s = (e, t) => {
          let a = t.config.target.objectId;
          document.documentElement.style.removeProperty(a);
        };
    },
    3690: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = a(7087),
        i = u(a(7377)),
        r = u(a(2866)),
        o = u(a(2570)),
        c = u(a(1407));

      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (l = function (e) {
          return e ? a : t;
        })(e);
      }

      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var a = l(t);
        if (a && a.has(e)) return a.get(e);
        var n = {
            __proto__: null,
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, r, o)
              : (n[r] = e[r]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
      let d = new Map([
        [
          n.ActionTypeConsts.PLUGIN_LOTTIE,
          {
            ...i,
          },
        ],
        [
          n.ActionTypeConsts.PLUGIN_SPLINE,
          {
            ...r,
          },
        ],
        [
          n.ActionTypeConsts.PLUGIN_RIVE,
          {
            ...o,
          },
        ],
        [
          n.ActionTypeConsts.PLUGIN_VARIABLE,
          {
            ...c,
          },
        ],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return y;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return f;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return d;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return s;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return T;
        },
        IX2_INSTANCE_STARTED: function () {
          return I;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return O;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return o;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return n;
        },
        IX2_SESSION_STARTED: function () {
          return i;
        },
        IX2_SESSION_STOPPED: function () {
          return r;
        },
        IX2_STOP_REQUESTED: function () {
          return l;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      });
      let a = "IX2_RAW_DATA_IMPORTED",
        n = "IX2_SESSION_INITIALIZED",
        i = "IX2_SESSION_STARTED",
        r = "IX2_SESSION_STOPPED",
        o = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        l = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        d = "IX2_EVENT_LISTENER_ADDED",
        s = "IX2_EVENT_STATE_CHANGED",
        f = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        I = "IX2_INSTANCE_STARTED",
        T = "IX2_INSTANCE_REMOVED",
        p = "IX2_ELEMENT_STATE_CHANGED",
        y = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        O = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        ABSTRACT_NODE: function () {
          return J;
        },
        AUTO: function () {
          return X;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return G;
        },
        BAR_DELIMITER: function () {
          return j;
        },
        BORDER_COLOR: function () {
          return U;
        },
        BOUNDARY_SELECTOR: function () {
          return o;
        },
        CHILDREN: function () {
          return W;
        },
        COLON_DELIMITER: function () {
          return H;
        },
        COLOR: function () {
          return x;
        },
        COMMA_DELIMITER: function () {
          return B;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return d;
        },
        CONFIG_X_UNIT: function () {
          return s;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return f;
        },
        CONFIG_Y_VALUE: function () {
          return l;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return w;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return k;
        },
        FONT_VARIATION_SETTINGS: function () {
          return h;
        },
        HEIGHT: function () {
          return V;
        },
        HTML_ELEMENT: function () {
          return q;
        },
        IMMEDIATE_CHILDREN: function () {
          return z;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return Z;
        },
        PRESERVE_3D: function () {
          return $;
        },
        RENDER_GENERAL: function () {
          return et;
        },
        RENDER_PLUGIN: function () {
          return en;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return ee;
        },
        ROTATE_X: function () {
          return A;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return R;
        },
        SCALE_X: function () {
          return O;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return m;
        },
        SIBLINGS: function () {
          return Q;
        },
        SKEW: function () {
          return N;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return v;
        },
        TRANSFORM: function () {
          return I;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return T;
        },
        TRANSLATE_Y: function () {
          return p;
        },
        TRANSLATE_Z: function () {
          return y;
        },
        WF_PAGE: function () {
          return n;
        },
        WIDTH: function () {
          return F;
        },
        WILL_CHANGE: function () {
          return Y;
        },
        W_MOD_IX: function () {
          return r;
        },
        W_MOD_JS: function () {
          return i;
        },
      });
      let a = "|",
        n = "data-wf-page",
        i = "w-mod-js",
        r = "w-mod-ix",
        o = ".w-dyn-item",
        c = "xValue",
        l = "yValue",
        u = "zValue",
        d = "value",
        s = "xUnit",
        f = "yUnit",
        E = "zUnit",
        g = "unit",
        I = "transform",
        T = "translateX",
        p = "translateY",
        y = "translateZ",
        b = "translate3d",
        O = "scaleX",
        _ = "scaleY",
        m = "scaleZ",
        R = "scale3d",
        A = "rotateX",
        S = "rotateY",
        L = "rotateZ",
        N = "skew",
        C = "skewX",
        v = "skewY",
        P = "opacity",
        M = "filter",
        h = "font-variation-settings",
        F = "width",
        V = "height",
        G = "backgroundColor",
        D = "background",
        U = "borderColor",
        x = "color",
        w = "display",
        k = "flex",
        Y = "willChange",
        X = "AUTO",
        B = ",",
        H = ":",
        j = "|",
        W = "CHILDREN",
        z = "IMMEDIATE_CHILDREN",
        Q = "SIBLINGS",
        K = "PARENT",
        $ = "preserve-3d",
        q = "HTML_ELEMENT",
        Z = "PLAIN_OBJECT",
        J = "ABSTRACT_NODE",
        ee = "RENDER_TRANSFORM",
        et = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        en = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        ActionAppliesTo: function () {
          return n;
        },
        ActionTypeConsts: function () {
          return a;
        },
      });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        n = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        ActionTypeConsts: function () {
          return i.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return r;
        },
        IX2EngineConstants: function () {
          return o;
        },
        QuickEffectIds: function () {
          return n.QuickEffectIds;
        },
      });
      let n = c(a(1833), t),
        i = c(a(262), t);
      c(a(8704), t), c(a(3213), t);
      let r = u(a(8023)),
        o = u(a(2686));

      function c(e, t) {
        return (
          Object.keys(e).forEach(function (a) {
            "default" !== a &&
              !Object.prototype.hasOwnProperty.call(t, a) &&
              Object.defineProperty(t, a, {
                enumerable: !0,
                get: function () {
                  return e[a];
                },
              });
          }),
          e
        );
      }

      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (l = function (e) {
          return e ? a : t;
        })(e);
      }

      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var a = l(t);
        if (a && a.has(e)) return a.get(e);
        var n = {
            __proto__: null,
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, r, o)
              : (n[r] = e[r]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    3213: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let {
          TRANSFORM_MOVE: n,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: c,
          STYLE_FILTER: l,
          STYLE_FONT_VARIATION: u,
        } = a(262).ActionTypeConsts,
        d = {
          [n]: !0,
          [i]: !0,
          [r]: !0,
          [o]: !0,
          [c]: !0,
          [l]: !0,
          [u]: !0,
        };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        EventAppliesTo: function () {
          return n;
        },
        EventBasedOn: function () {
          return i;
        },
        EventContinuousMouseAxes: function () {
          return r;
        },
        EventLimitAffectedElements: function () {
          return o;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return l;
        },
        QuickEffectIds: function () {
          return c;
        },
      });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        n = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE",
        },
        i = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT",
        },
        r = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS",
        },
        o = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        l = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let a = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };

      function n(e) {
        let t, n, i;
        let r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof a[o] ? a[o].toLowerCase() : null) || o;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (n = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (n = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (n = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e, a, o;
          let l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            u = parseFloat(l[0]),
            d = parseFloat(l[1].replace("%", "")) / 100,
            s = parseFloat(l[2].replace("%", "")) / 100;
          r = parseFloat(l[3]);
          let f = (1 - Math.abs(2 * s - 1)) * d,
            E = f * (1 - Math.abs(((u / 60) % 2) - 1)),
            g = s - f / 2;
          u >= 0 && u < 60
            ? ((e = f), (a = E), (o = 0))
            : u >= 60 && u < 120
            ? ((e = E), (a = f), (o = 0))
            : u >= 120 && u < 180
            ? ((e = 0), (a = f), (o = E))
            : u >= 180 && u < 240
            ? ((e = 0), (a = E), (o = f))
            : u >= 240 && u < 300
            ? ((e = E), (a = 0), (o = f))
            : ((e = f), (a = 0), (o = E)),
            (t = Math.round((e + g) * 255)),
            (n = Math.round((a + g) * 255)),
            (i = Math.round((o + g) * 255));
        } else if (c.startsWith("hsl")) {
          let e, a, r;
          let o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            l = parseFloat(o[0]),
            u = parseFloat(o[1].replace("%", "")) / 100,
            d = parseFloat(o[2].replace("%", "")) / 100,
            s = (1 - Math.abs(2 * d - 1)) * u,
            f = s * (1 - Math.abs(((l / 60) % 2) - 1)),
            E = d - s / 2;
          l >= 0 && l < 60
            ? ((e = s), (a = f), (r = 0))
            : l >= 60 && l < 120
            ? ((e = f), (a = s), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (a = s), (r = f))
            : l >= 180 && l < 240
            ? ((e = 0), (a = f), (r = s))
            : l >= 240 && l < 300
            ? ((e = f), (a = 0), (r = s))
            : ((e = s), (a = 0), (r = f)),
            (t = Math.round((e + E) * 255)),
            (n = Math.round((a + E) * 255)),
            (i = Math.round((r + E) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return {
          red: t,
          green: n,
          blue: i,
          alpha: r,
        };
      }
    },
    9468: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        IX2BrowserSupport: function () {
          return n;
        },
        IX2EasingUtils: function () {
          return r;
        },
        IX2Easings: function () {
          return i;
        },
        IX2ElementsReducer: function () {
          return o;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return l;
        },
      });
      let n = d(a(2662)),
        i = d(a(8686)),
        r = d(a(3767)),
        o = d(a(5861)),
        c = d(a(1799)),
        l = d(a(4124));

      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (u = function (e) {
          return e ? a : t;
        })(e);
      }

      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return {
            default: e,
          };
        var a = u(t);
        if (a && a.has(e)) return a.get(e);
        var n = {
            __proto__: null,
          },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(n, r, o)
              : (n[r] = e[r]);
          }
        return (n.default = e), a && a.set(e, n), n;
      }
    },
    2662: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        ELEMENT_MATCHES: function () {
          return o;
        },
        FLEX_PREFIXED: function () {
          return c;
        },
        IS_BROWSER_ENV: function () {
          return i;
        },
        TRANSFORM_PREFIXED: function () {
          return l;
        },
        TRANSFORM_STYLE_PREFIXED: function () {
          return d;
        },
        withBrowser: function () {
          return r;
        },
      });
      let n = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(a(9777)),
        i = "undefined" != typeof window,
        r = (e, t) => (i ? e() : t),
        o = r(() =>
          (0, n.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        c = r(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n];
              if (((e.style.display = a), e.style.display === a)) return a;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        l = r(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: a } = t;
            for (let n = 0; n < a; n++) {
              let a = t[n] + "Transform";
              if (void 0 !== e.style[a]) return a;
            }
          }
          return "transform";
        }, "transform"),
        u = l.split("transform")[0],
        d = u ? u + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        applyEasing: function () {
          return l;
        },
        createBezierEasing: function () {
          return c;
        },
        optimizeFloat: function () {
          return o;
        },
      });
      let n = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return {
              default: e,
            };
          var a = r(t);
          if (a && a.has(e)) return a.get(e);
          var n = {
              __proto__: null,
            },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var c = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(n, o, c)
                : (n[o] = e[o]);
            }
          return (n.default = e), a && a.set(e, n), n;
        })(a(8686)),
        i = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(a(1361));

      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          a = new WeakMap();
        return (r = function (e) {
          return e ? a : t;
        })(e);
      }

      function o(e, t = 5, a = 10) {
        let n = Math.pow(a, t),
          i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
      }

      function c(e) {
        return (0, i.default)(...e);
      }

      function l(e, t, a) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : a
          ? o(t > 0 ? a(t) : t)
          : o(t > 0 && e && n[e] ? n[e](t) : t);
      }
    },
    8686: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        bounce: function () {
          return w;
        },
        bouncePast: function () {
          return k;
        },
        ease: function () {
          return i;
        },
        easeIn: function () {
          return r;
        },
        easeInOut: function () {
          return c;
        },
        easeOut: function () {
          return o;
        },
        inBack: function () {
          return P;
        },
        inCirc: function () {
          return L;
        },
        inCubic: function () {
          return s;
        },
        inElastic: function () {
          return F;
        },
        inExpo: function () {
          return R;
        },
        inOutBack: function () {
          return h;
        },
        inOutCirc: function () {
          return C;
        },
        inOutCubic: function () {
          return E;
        },
        inOutElastic: function () {
          return G;
        },
        inOutExpo: function () {
          return S;
        },
        inOutQuad: function () {
          return d;
        },
        inOutQuart: function () {
          return T;
        },
        inOutQuint: function () {
          return b;
        },
        inOutSine: function () {
          return m;
        },
        inQuad: function () {
          return l;
        },
        inQuart: function () {
          return g;
        },
        inQuint: function () {
          return p;
        },
        inSine: function () {
          return O;
        },
        outBack: function () {
          return M;
        },
        outBounce: function () {
          return v;
        },
        outCirc: function () {
          return N;
        },
        outCubic: function () {
          return f;
        },
        outElastic: function () {
          return V;
        },
        outExpo: function () {
          return A;
        },
        outQuad: function () {
          return u;
        },
        outQuart: function () {
          return I;
        },
        outQuint: function () {
          return y;
        },
        outSine: function () {
          return _;
        },
        swingFrom: function () {
          return U;
        },
        swingFromTo: function () {
          return D;
        },
        swingTo: function () {
          return x;
        },
      });
      let n = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(a(1361)),
        i = (0, n.default)(0.25, 0.1, 0.25, 1),
        r = (0, n.default)(0.42, 0, 1, 1),
        o = (0, n.default)(0, 0, 0.58, 1),
        c = (0, n.default)(0.42, 0, 0.58, 1);

      function l(e) {
        return Math.pow(e, 2);
      }

      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }

      function d(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }

      function s(e) {
        return Math.pow(e, 3);
      }

      function f(e) {
        return Math.pow(e - 1, 3) + 1;
      }

      function E(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }

      function g(e) {
        return Math.pow(e, 4);
      }

      function I(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }

      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }

      function p(e) {
        return Math.pow(e, 5);
      }

      function y(e) {
        return Math.pow(e - 1, 5) + 1;
      }

      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }

      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }

      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }

      function m(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }

      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }

      function A(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }

      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }

      function L(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }

      function N(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }

      function C(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }

      function v(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }

      function P(e) {
        return e * e * (2.70158 * e - 1.70158);
      }

      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }

      function h(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }

      function F(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            -(
              n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a)
            ));
      }

      function V(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!a && (a = 0.3),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            n * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / a) +
              1);
      }

      function G(e) {
        let t = 1.70158,
          a = 0,
          n = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (!a && (a = 0.3 * 1.5),
            n < 1
              ? ((n = 1), (t = a / 4))
              : (t = (a / (2 * Math.PI)) * Math.asin(1 / n)),
            e < 1)
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / a) *
              0.5 +
            1;
      }

      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }

      function U(e) {
        return e * e * (2.70158 * e - 1.70158);
      }

      function x(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }

      function w(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }

      function k(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
        if (e < 2.5 / 2.75)
          return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
        else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return l;
        },
        isPluginType: function () {
          return r;
        },
        renderPlugin: function () {
          return f;
        },
      });
      let n = a(2662),
        i = a(3690);

      function r(e) {
        return i.pluginMethodMap.has(e);
      }
      let o = (e) => (t) => {
          if (!n.IS_BROWSER_ENV) return () => null;
          let a = i.pluginMethodMap.get(t);
          if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
          let r = a[e];
          if (!r) throw Error(`IX2 invalid plugin method: ${e}`);
          return r;
        },
        c = o("getPluginConfig"),
        l = o("getPluginOrigin"),
        u = o("getPluginDuration"),
        d = o("getPluginDestination"),
        s = o("createPluginInstance"),
        f = o("renderPlugin"),
        E = o("clearPlugin");
    },
    4124: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        cleanupHTMLElement: function () {
          return eB;
        },
        clearAllStyles: function () {
          return ek;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return ez;
        },
        getAffectedElements: function () {
          return ey;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return es;
        },
        getInstanceOrigin: function () {
          return eR;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eW;
        },
        getNamespacedParameterId: function () {
          return e$;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ev;
        },
        mediaQueriesEqual: function () {
          return eZ;
        },
        observeStore: function () {
          return eT;
        },
        reduceListToGroup: function () {
          return eQ;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return l.default;
        },
        shouldAllowMediaQuery: function () {
          return eq;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return eJ;
        },
      });
      let n = E(a(4075)),
        i = E(a(1455)),
        r = E(a(5720)),
        o = a(1185),
        c = a(7087),
        l = E(a(7164)),
        u = a(3767),
        d = a(380),
        s = a(1799),
        f = a(2662);

      function E(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: I,
          TRANSLATE_3D: T,
          SCALE_3D: p,
          ROTATE_X: y,
          ROTATE_Y: b,
          ROTATE_Z: O,
          SKEW: _,
          PRESERVE_3D: m,
          FLEX: R,
          OPACITY: A,
          FILTER: S,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: N,
          HEIGHT: C,
          BACKGROUND_COLOR: v,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: h,
          IMMEDIATE_CHILDREN: F,
          SIBLINGS: V,
          PARENT: G,
          DISPLAY: D,
          WILL_CHANGE: U,
          AUTO: x,
          COMMA_DELIMITER: w,
          COLON_DELIMITER: k,
          BAR_DELIMITER: Y,
          RENDER_TRANSFORM: X,
          RENDER_GENERAL: B,
          RENDER_STYLE: H,
          RENDER_PLUGIN: j,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: W,
          TRANSFORM_SCALE: z,
          TRANSFORM_ROTATE: Q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: $,
          STYLE_FILTER: q,
          STYLE_FONT_VARIATION: Z,
          STYLE_SIZE: J,
          STYLE_BACKGROUND_COLOR: ee,
          STYLE_BORDER: et,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: en,
          OBJECT_VALUE: ei,
        } = c.ActionTypeConsts,
        er = (e) => e.trim(),
        eo = Object.freeze({
          [ee]: v,
          [et]: P,
          [ea]: M,
        }),
        ec = Object.freeze({
          [f.TRANSFORM_PREFIXED]: I,
          [v]: g,
          [A]: A,
          [S]: S,
          [N]: N,
          [C]: C,
          [L]: L,
        }),
        el = new Map();

      function eu() {
        el.clear();
      }
      let ed = 1;

      function es() {
        return "i" + ed++;
      }
      let ef = 1;

      function eE(e, t) {
        for (let a in e) {
          let n = e[a];
          if (n && n.ref === t) return n.id;
        }
        return "e" + ef++;
      }

      function eg({ events: e, actionLists: t, site: a } = {}) {
        let n = (0, i.default)(
            e,
            (e, t) => {
              let { eventTypeId: a } = t;
              return !e[a] && (e[a] = {}), (e[a][t.id] = t), e;
            },
            {}
          ),
          r = a && a.mediaQueries,
          o = [];
        return (
          r
            ? (o = r.map((e) => e.key))
            : ((r = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: r,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eI = (e, t) => e === t;

      function eT({ store: e, select: t, onChange: a, comparator: n = eI }) {
        let { getState: i, subscribe: r } = e,
          o = r(function () {
            let r = t(i());
            if (null == r) {
              o();
              return;
            }
            !n(r, c) && a((c = r), e);
          }),
          c = t(i());
        return o;
      }

      function ep(e) {
        let t = typeof e;
        if ("string" === t)
          return {
            id: e,
          };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: a,
            selector: n,
            selectorGuids: i,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }

      function ey({
        config: e,
        event: t,
        eventTarget: a,
        elementRoot: n,
        elementApi: i,
      }) {
        let r, o, l;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: u } = e;
        if (Array.isArray(u) && u.length > 0)
          return u.reduce(
            (e, r) =>
              e.concat(
                ey({
                  config: {
                    target: r,
                  },
                  event: t,
                  eventTarget: a,
                  elementRoot: n,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: d,
            getQuerySelector: s,
            queryDocument: E,
            getChildElements: g,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: p,
            isSiblingNode: y,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: O,
          objectId: _,
          selector: m,
          selectorGuids: R,
          appliesTo: A,
          useEventTarget: S,
        } = ep(b);
        if (_) return [el.has(_) ? el.get(_) : el.set(_, {}).get(_)];
        if (A === c.EventAppliesTo.PAGE) {
          let e = d(O);
          return e ? [e] : [];
        }
        let L = (t?.action?.config?.affectedElements ?? {})[O || m] || {},
          N = !!(L.id || L.selector),
          C = t && s(ep(t.target));
        if (
          (N
            ? ((r = L.limitAffectedElements), (o = C), (l = s(L)))
            : (o = l =
                s({
                  id: O,
                  selector: m,
                  selectorGuids: R,
                })),
          t && S)
        ) {
          let e = a && (l || !0 === S) ? [a] : E(C);
          if (l) {
            if (S === G) return E(l).filter((t) => e.some((e) => p(t, e)));
            if (S === h) return E(l).filter((t) => e.some((e) => p(e, t)));
            if (S === V) return E(l).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        if (null == o || null == l) return [];
        if (f.IS_BROWSER_ENV && n) return E(l).filter((e) => n.contains(e));
        if (r === h) return E(o, l);
        if (r === F) return g(E(o)).filter(T(l));
        if (r === V) return I(E(o)).filter(T(l));
        else return E(l);
      }

      function eb({ element: e, actionItem: t }) {
        if (!f.IS_BROWSER_ENV) return {};
        let { actionTypeId: a } = t;
        switch (a) {
          case J:
          case ee:
          case et:
          case ea:
          case en:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let eO = /px/,
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eh[t.type]), e),
            e || {}
          ),
        em = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eF[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );

      function eR(e, t = {}, a = {}, i, r) {
        let { getStyle: o } = r,
          { actionTypeId: c } = i;
        if ((0, s.isPluginType)(c)) return (0, s.getPluginOrigin)(c)(t[c], i);
        switch (i.actionTypeId) {
          case W:
          case z:
          case Q:
          case K:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case q:
            return e_(t[i.actionTypeId], i.config.filters);
          case Z:
            return em(t[i.actionTypeId], i.config.fontVariations);
          case $:
            return {
              value: (0, n.default)(parseFloat(o(e, A)), 1),
            };
          case J: {
            let t, r;
            let c = o(e, N),
              l = o(e, C);
            return (
              (t =
                i.config.widthUnit === x
                  ? eO.test(c)
                    ? parseFloat(c)
                    : parseFloat(a.width)
                  : (0, n.default)(parseFloat(c), parseFloat(a.width))),
              {
                widthValue: t,
                heightValue: (r =
                  i.config.heightUnit === x
                    ? eO.test(l)
                      ? parseFloat(l)
                      : parseFloat(a.height)
                    : (0, n.default)(parseFloat(l), parseFloat(a.height))),
              }
            );
          }
          case ee:
          case et:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: a,
              getStyle: i,
            }) {
              let r = eo[t],
                o = i(e, r),
                c = (function (e, t) {
                  let a = e.exec(t);
                  return a ? a[1] : "";
                })(eU, eD.test(o) ? o : a[r]).split(w);
              return {
                rValue: (0, n.default)(parseInt(c[0], 10), 255),
                gValue: (0, n.default)(parseInt(c[1], 10), 255),
                bValue: (0, n.default)(parseInt(c[2], 10), 255),
                aValue: (0, n.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: a,
              getStyle: o,
            });
          case en:
            return {
              value: (0, n.default)(o(e, D), a.display),
            };
          case ei:
            return (
              t[i.actionTypeId] || {
                value: 0,
              }
            );
          default:
            return;
        }
      }
      let eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, a) => {
          if ((0, s.isPluginType)(e)) return (0, s.getPluginConfig)(e)(a, t);
          switch (e) {
            case q: {
              let e = (0, r.default)(a.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case Z: {
              let e = (0, r.default)(
                a.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return a[t];
          }
        };

      function eN({ element: e, actionItem: t, elementApi: a }) {
        if ((0, s.isPluginType)(t.actionTypeId))
          return (0, s.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case W:
          case z:
          case Q:
          case K: {
            let { xValue: e, yValue: a, zValue: n } = t.config;
            return {
              xValue: e,
              yValue: a,
              zValue: n,
            };
          }
          case J: {
            let { getStyle: n, setStyle: i, getProperty: r } = a,
              { widthUnit: o, heightUnit: c } = t.config,
              { widthValue: l, heightValue: u } = t.config;
            if (!f.IS_BROWSER_ENV)
              return {
                widthValue: l,
                heightValue: u,
              };
            if (o === x) {
              let t = n(e, N);
              i(e, N, ""), (l = r(e, "offsetWidth")), i(e, N, t);
            }
            if (c === x) {
              let t = n(e, C);
              i(e, C, ""), (u = r(e, "offsetHeight")), i(e, C, t);
            }
            return {
              widthValue: l,
              heightValue: u,
            };
          }
          case ee:
          case et:
          case ea: {
            let {
              rValue: n,
              gValue: i,
              bValue: r,
              aValue: o,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = a,
                n = t(e, c),
                i = (0, d.normalizeColor)(n);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return {
              rValue: n,
              gValue: i,
              bValue: r,
              aValue: o,
            };
          }
          case q:
            return t.config.filters.reduce(eA, {});
          case Z:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return {
              value: e,
            };
          }
        }
      }

      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? X
          : /^STYLE_/.test(e)
          ? H
          : /^GENERAL_/.test(e)
          ? B
          : /^PLUGIN_/.test(e)
          ? j
          : void 0;
      }

      function ev(e, t) {
        return e === H ? t.replace("STYLE_", "").toLowerCase() : null;
      }

      function eP(e, t, a, n, r, o, c, l, u) {
        switch (l) {
          case X:
            return (function (e, t, a, n, i) {
              let r = eG
                  .map((e) => {
                    let a = eM[e],
                      {
                        xValue: n = a.xValue,
                        yValue: i = a.yValue,
                        zValue: r = a.zValue,
                        xUnit: o = "",
                        yUnit: c = "",
                        zUnit: l = "",
                      } = t[e] || {};
                    switch (e) {
                      case W:
                        return `${T}(${n}${o}, ${i}${c}, ${r}${l})`;
                      case z:
                        return `${p}(${n}${o}, ${i}${c}, ${r}${l})`;
                      case Q:
                        return `${y}(${n}${o}) ${b}(${i}${c}) ${O}(${r}${l})`;
                      case K:
                        return `${_}(${n}${o}, ${i}${c})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: o } = i;
              ex(e, f.TRANSFORM_PREFIXED, i),
                o(e, f.TRANSFORM_PREFIXED, r),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: a, zValue: n }
                ) {
                  return (
                    (e === W && void 0 !== n) ||
                    (e === z && void 0 !== n) ||
                    (e === Q && (void 0 !== t || void 0 !== a))
                  );
                })(n, a) && o(e, f.TRANSFORM_STYLE_PREFIXED, m);
            })(e, t, a, r, c);
          case H:
            return (function (e, t, a, n, r, o) {
              let { setStyle: c } = o;
              switch (n.actionTypeId) {
                case J: {
                  let { widthUnit: t = "", heightUnit: i = "" } = n.config,
                    { widthValue: r, heightValue: l } = a;
                  void 0 !== r &&
                    (t === x && (t = "px"), ex(e, N, o), c(e, N, r + t)),
                    void 0 !== l &&
                      (i === x && (i = "px"), ex(e, C, o), c(e, C, l + i));
                  break;
                }
                case q:
                  !(function (e, t, a, n) {
                    let r = (0, i.default)(
                        t,
                        (e, t, n) => `${e} ${n}(${t}${eV(n, a)})`,
                        ""
                      ),
                      { setStyle: o } = n;
                    ex(e, S, n), o(e, S, r);
                  })(e, a, n.config, o);
                  break;
                case Z:
                  !(function (e, t, a, n) {
                    let r = (0, i.default)(
                        t,
                        (e, t, a) => (e.push(`"${a}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: o } = n;
                    ex(e, L, n), o(e, L, r);
                  })(e, a, n.config, o);
                  break;
                case ee:
                case et:
                case ea: {
                  let t = eo[n.actionTypeId],
                    i = Math.round(a.rValue),
                    r = Math.round(a.gValue),
                    l = Math.round(a.bValue),
                    u = a.aValue;
                  ex(e, t, o),
                    c(
                      e,
                      t,
                      u >= 1
                        ? `rgb(${i},${r},${l})`
                        : `rgba(${i},${r},${l},${u})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = n.config;
                  ex(e, r, o), c(e, r, a.value + t);
                }
              }
            })(e, t, a, r, o, c);
          case B:
            return (function (e, t, a) {
              let { setStyle: n } = a;
              if (t.actionTypeId === en) {
                let { value: a } = t.config;
                n(e, D, a === R && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : a);
                return;
              }
            })(e, r, c);
          case j: {
            let { actionTypeId: e } = r;
            if ((0, s.isPluginType)(e)) return (0, s.renderPlugin)(e)(u, t, r);
          }
        }
      }
      let eM = {
          [W]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0,
          }),
          [z]: Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1,
          }),
          [Q]: Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0,
          }),
          [K]: Object.freeze({
            xValue: 0,
            yValue: 0,
          }),
        },
        eh = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eF = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0,
        }),
        eV = (e, t) => {
          let a = (0, r.default)(t.filters, ({ type: t }) => t === e);
          if (a && a.unit) return a.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eG = Object.keys(eM),
        eD = /^rgb/,
        eU = RegExp("rgba?\\(([^)]+)\\)");

      function ex(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = ec[t];
        if (!n) return;
        let { getStyle: i, setStyle: r } = a,
          o = i(e, U);
        if (!o) {
          r(e, U, n);
          return;
        }
        let c = o.split(w).map(er);
        -1 === c.indexOf(n) && r(e, U, c.concat(n).join(w));
      }

      function ew(e, t, a) {
        if (!f.IS_BROWSER_ENV) return;
        let n = ec[t];
        if (!n) return;
        let { getStyle: i, setStyle: r } = a,
          o = i(e, U);
        if (!!o && -1 !== o.indexOf(n))
          r(
            e,
            U,
            o
              .split(w)
              .map(er)
              .filter((e) => e !== n)
              .join(w)
          );
      }

      function ek({ store: e, elementApi: t }) {
        let { ixData: a } = e.getState(),
          { events: n = {}, actionLists: i = {} } = a;
        Object.keys(n).forEach((e) => {
          let a = n[e],
            { config: r } = a.action,
            { actionListId: o } = r,
            c = i[o];
          c &&
            eY({
              actionList: c,
              event: a,
              elementApi: t,
            });
        }),
          Object.keys(i).forEach((e) => {
            eY({
              actionList: i[e],
              elementApi: t,
            });
          });
      }

      function eY({ actionList: e = {}, event: t, elementApi: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
          n.forEach((e) => {
            eX({
              actionGroup: e,
              event: t,
              elementApi: a,
            });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: n } = e;
              n.forEach((e) => {
                eX({
                  actionGroup: e,
                  event: t,
                  elementApi: a,
                });
              });
            });
      }

      function eX({ actionGroup: e, event: t, elementApi: a }) {
        let { actionItems: n } = e;
        n.forEach((e) => {
          let n;
          let { actionTypeId: i, config: r } = e;
          (n = (0, s.isPluginType)(i)
            ? (t) => (0, s.clearPlugin)(i)(t, e)
            : eH({
                effect: ej,
                actionTypeId: i,
                elementApi: a,
              })),
            ey({
              config: r,
              event: t,
              elementApi: a,
            }).forEach(n);
        });
      }

      function eB(e, t, a) {
        let { setStyle: n, getStyle: i } = a,
          { actionTypeId: r } = t;
        if (r === J) {
          let { config: a } = t;
          a.widthUnit === x && n(e, N, ""), a.heightUnit === x && n(e, C, "");
        }
        i(e, U) &&
          eH({
            effect: ew,
            actionTypeId: r,
            elementApi: a,
          })(e);
      }
      let eH =
        ({ effect: e, actionTypeId: t, elementApi: a }) =>
        (n) => {
          switch (t) {
            case W:
            case z:
            case Q:
            case K:
              e(n, f.TRANSFORM_PREFIXED, a);
              break;
            case q:
              e(n, S, a);
              break;
            case Z:
              e(n, L, a);
              break;
            case $:
              e(n, A, a);
              break;
            case J:
              e(n, N, a), e(n, C, a);
              break;
            case ee:
            case et:
            case ea:
              e(n, eo[t], a);
              break;
            case en:
              e(n, D, a);
          }
        };

      function ej(e, t, a) {
        let { setStyle: n } = a;
        ew(e, t, a),
          n(e, t, ""),
          t === f.TRANSFORM_PREFIXED && n(e, f.TRANSFORM_STYLE_PREFIXED, "");
      }

      function eW(e) {
        let t = 0,
          a = 0;
        return (
          e.forEach((e, n) => {
            let { config: i } = e,
              r = i.delay + i.duration;
            r >= t && ((t = r), (a = n));
          }),
          a
        );
      }

      function ez(e, t) {
        let { actionItemGroups: a, useFirstGroupAsInitialState: n } = e,
          { actionItem: i, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          c = 0;
        return (
          a.forEach((e, t) => {
            if (n && 0 === t) return;
            let { actionItems: a } = e,
              l = a[eW(a)],
              { config: u, actionTypeId: d } = l;
            i.id === l.id && (c = o + r);
            let s = eC(d) === B ? 0 : u.duration;
            o += u.delay + s;
          }),
          o > 0 ? (0, u.optimizeFloat)(c / o) : 0
        );
      }

      function eQ({ actionList: e, actionItemId: t, rawData: a }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
          r = [],
          c = (e) => (
            r.push(
              (0, o.mergeIn)(e, ["config"], {
                delay: 0,
                duration: 0,
              })
            ),
            e.id === t
          );
        return (
          n && n.some(({ actionItems: e }) => e.some(c)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(c));
            }),
          (0, o.setIn)(a, ["actionLists"], {
            [e.id]: {
              id: e.id,
              actionItemGroups: [
                {
                  actionItems: r,
                },
              ],
            },
          })
        );
      }

      function eK(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }

      function e$(e, t) {
        return e + k + t;
      }

      function eq(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }

      function eZ(e, t) {
        return (0, l.default)(e && e.sort(), t && t.sort());
      }

      function eJ(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Y + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: a = "", useEventTarget: n = "" } = e;
        return t + Y + a + Y + n;
      }
    },
    7164: function (e, t) {
      "use strict";

      function a(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function (e, t) {
        if (a(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let n = Object.keys(e),
          i = Object.keys(t);
        if (n.length !== i.length) return !1;
        for (let i = 0; i < n.length; i++)
          if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      !(function (e, t) {
        for (var a in t)
          Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a],
          });
      })(t, {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return O;
        },
        mergeActionState: function () {
          return m;
        },
      });
      let n = a(1185),
        i = a(7087),
        {
          HTML_ELEMENT: r,
          PLAIN_OBJECT: o,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: l,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: d,
          CONFIG_VALUE: s,
          CONFIG_X_UNIT: f,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: I,
        } = i.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: T,
          IX2_INSTANCE_ADDED: p,
          IX2_ELEMENT_STATE_CHANGED: y,
        } = i.IX2EngineActionTypes,
        b = {},
        O = (e = b, t = {}) => {
          switch (t.type) {
            case T:
              return b;
            case p: {
              let {
                  elementId: a,
                  element: i,
                  origin: r,
                  actionItem: o,
                  refType: c,
                } = t.payload,
                { actionTypeId: l } = o,
                u = e;
              return (
                (0, n.getIn)(u, [a, i]) !== i && (u = _(u, i, c, a, o)),
                m(u, a, l, r, o)
              );
            }
            case y: {
              let {
                elementId: a,
                actionTypeId: n,
                current: i,
                actionItem: r,
              } = t.payload;
              return m(e, a, n, i, r);
            }
            default:
              return e;
          }
        };

      function _(e, t, a, i, r) {
        let c =
          a === o ? (0, n.getIn)(r, ["config", "target", "objectId"]) : null;
        return (0, n.mergeIn)(e, [i], {
          id: i,
          ref: t,
          refId: c,
          refType: a,
        });
      }

      function m(e, t, a, i, r) {
        let o = (function (e) {
          let { config: t } = e;
          return R.reduce((e, a) => {
            let n = a[0],
              i = a[1],
              r = t[n],
              o = t[i];
            return null != r && null != o && (e[i] = o), e;
          }, {});
        })(r);
        return (0, n.mergeIn)(e, [t, "refState", a], i, o);
      }
      let R = [
        [l, f],
        [u, E],
        [d, g],
        [s, I],
      ];
    },
    3970: function () {
      Webflow.require("ix2").init({
        events: {
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192bdca0652,
          },
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-8",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|36bf408c-99c4-59f1-d390-03c4dfd8e2ac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|36bf408c-99c4-59f1-d390-03c4dfd8e2ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cb685ffeb,
          },
          "e-8": {
            id: "e-8",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-7",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|36bf408c-99c4-59f1-d390-03c4dfd8e2ac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|36bf408c-99c4-59f1-d390-03c4dfd8e2ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18cb685ffec,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|2e0a27dd-37c6-b1a5-6bf8-74f6de61e0bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|2e0a27dd-37c6-b1a5-6bf8-74f6de61e0bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18b686c9760,
          },
          "e-10": {
            id: "e-10",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-9",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|2e0a27dd-37c6-b1a5-6bf8-74f6de61e0bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|2e0a27dd-37c6-b1a5-6bf8-74f6de61e0bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18b686c9760,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".quote_decor-icons",
              originalId:
                "6718c8afa78e156621f3a2ee|7fc02f28-4375-5c5b-b523-6ebfa8da2aa0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".quote_decor-icons",
                originalId:
                  "6718c8afa78e156621f3a2ee|7fc02f28-4375-5c5b-b523-6ebfa8da2aa0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192bee909fa,
          },
          "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-11",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".quote_decor-icons",
              originalId:
                "6718c8afa78e156621f3a2ee|7fc02f28-4375-5c5b-b523-6ebfa8da2aa0",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".quote_decor-icons",
                originalId:
                  "6718c8afa78e156621f3a2ee|7fc02f28-4375-5c5b-b523-6ebfa8da2aa0",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192bee909fb,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-11",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 75,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c0363e9a,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-12",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-15",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 75,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c0363e9b,
          },
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|3e9155fa-b7aa-ca6d-6793-39e599b26da6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 92,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192c2643281,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6718c8afa78e156621f3a2ee|10530ea8-5593-31fb-6267-47cb1f033620",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|10530ea8-5593-31fb-6267-47cb1f033620",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                smoothing: 94,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !0,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1858caf19e1,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-trigger-footer",
              originalId:
                "6718c8afa78e156621f3a2ee|319235ff-2819-e015-280e-c45729e36e6b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-trigger-footer",
                originalId:
                  "6718c8afa78e156621f3a2ee|319235ff-2819-e015-280e-c45729e36e6b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 95,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c3b126b9,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-16",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".nav-trigger-footer",
              originalId:
                "6718c8afa78e156621f3a2ee|319235ff-2819-e015-280e-c45729e36e6b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav-trigger-footer",
                originalId:
                  "6718c8afa78e156621f3a2ee|319235ff-2819-e015-280e-c45729e36e6b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 95,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c3b126b9,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 99,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c3bda48b,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 99,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192c3bda48b,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|7e083124-8c71-f9dc-e9ec-0cbb1adb657d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|7e083124-8c71-f9dc-e9ec-0cbb1adb657d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192de28978e,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|7e083124-8c71-f9dc-e9ec-0cbb1adb657d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|7e083124-8c71-f9dc-e9ec-0cbb1adb657d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192de28978f,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-30",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".link-08",
              originalId:
                "6718c8afa78e156621f3a2ee|02b395bf-7814-4bc2-aab8-1e7cf51414ef",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|02b395bf-7814-4bc2-aab8-1e7cf51414ef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1848b11438c,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".link-08",
              originalId:
                "6718c8afa78e156621f3a2ee|02b395bf-7814-4bc2-aab8-1e7cf51414ef",
              appliesTo: "CLASS",
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|02b395bf-7814-4bc2-aab8-1e7cf51414ef",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1848b11438c,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hover_line-trigger",
              originalId:
                "6718c8afa78e156621f3a2ee|85293b94-9fed-aab5-0b8c-2e7af52d48ae",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hover_line-trigger",
                originalId:
                  "6718c8afa78e156621f3a2ee|85293b94-9fed-aab5-0b8c-2e7af52d48ae",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192f25f6310,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".hover_line-trigger",
              originalId:
                "6718c8afa78e156621f3a2ee|85293b94-9fed-aab5-0b8c-2e7af52d48ae",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hover_line-trigger",
                originalId:
                  "6718c8afa78e156621f3a2ee|85293b94-9fed-aab5-0b8c-2e7af52d48ae",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192f25f6311,
          },
          "e-33": {
            id: "e-33",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-34",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".tabs__link",
              originalId:
                "6718c8afa78e156621f3a2ee|12336934-bbab-8363-0db6-69f9043a1206",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".tabs__link",
                originalId:
                  "6718c8afa78e156621f3a2ee|12336934-bbab-8363-0db6-69f9043a1206",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17b6581d3fb,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "TAB_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-33",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".tabs__link",
              originalId:
                "6718c8afa78e156621f3a2ee|12336934-bbab-8363-0db6-69f9043a1206",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".tabs__link",
                originalId:
                  "6718c8afa78e156621f3a2ee|12336934-bbab-8363-0db6-69f9043a1206",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17b6581d3fb,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1933ee0d791,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1933ee0d792,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|e6a3310c-4360-93e6-0109-0d92c4c486f7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1933ee7d5f2,
          },
          "e-63": {
            id: "e-63",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-64",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1934138fdc5,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|92f5581f-5ed4-b99b-af6b-84595f99c42a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1934138fdc6,
          },
          "e-65": {
            id: "e-65",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-66",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19382a0f902,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19382a0f902,
          },
          "e-67": {
            id: "e-67",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|6e02e256-251a-7737-2637-6af237029238",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|6e02e256-251a-7737-2637-6af237029238",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-38-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 94,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-38-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 94,
                restingState: 50,
              },
            ],
            createdOn: 0x194752d6c85,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-69",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|0391bb24-04d0-89e9-f52b-935d8bb23810",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|0391bb24-04d0-89e9-f52b-935d8bb23810",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194795dd756,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2ee|0391bb24-04d0-89e9-f52b-935d8bb23810",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|0391bb24-04d0-89e9-f52b-935d8bb23810",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194795dd757,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c337940fe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c337940fe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19483ce138e,
          },
          "e-91": {
            id: "e-91",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-90",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c337940fe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c337940fe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19483ce138f,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-42",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c33794109",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2f1|a7bba4c9-d36a-7962-ffc0-3d4c33794109",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-42-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 94,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-42-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 94,
                restingState: 50,
              },
            ],
            createdOn: 0x19488282c94,
          },
          "e-93": {
            id: "e-93",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-94",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".emoji-button",
              originalId:
                "6718c8afa78e156621f3a2ee|2b6b2b2f-cb60-56bf-ccd1-6db05251954b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".emoji-button",
                originalId:
                  "6718c8afa78e156621f3a2ee|2b6b2b2f-cb60-56bf-ccd1-6db05251954b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180cf82760f,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-44",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".emoji-button",
              originalId:
                "6718c8afa78e156621f3a2ee|2b6b2b2f-cb60-56bf-ccd1-6db05251954b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".emoji-button",
                originalId:
                  "6718c8afa78e156621f3a2ee|2b6b2b2f-cb60-56bf-ccd1-6db05251954b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180cf827610,
          },
          "e-95": {
            id: "e-95",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-96",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6718c8afa78e156621f3a2ee|4c08c81f-a183-b498-1443-b1573f0e27ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|4c08c81f-a183-b498-1443-b1573f0e27ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19493c8123f,
          },
          "e-97": {
            id: "e-97",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-98",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6718c8afa78e156621f3a2ee|7816a4b9-b4c1-90cc-2c1a-8adc79753451",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|7816a4b9-b4c1-90cc-2c1a-8adc79753451",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19493ca79ef,
          },
          "e-99": {
            id: "e-99",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-100",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6718c8afa78e156621f3a2ee|494e0fd4-4b2b-ff49-6cdb-4a2ab3a74ae4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|494e0fd4-4b2b-ff49-6cdb-4a2ab3a74ae4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19493d1cbc5,
          },
          "e-101": {
            id: "e-101",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-102",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6718c8afa78e156621f3a2ee|8d05ada1-28a0-0b92-022f-1d0218025a71",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6718c8afa78e156621f3a2ee|8d05ada1-28a0-0b92-022f-1d0218025a71",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19493d6a3f1,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "preloader",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|0e67ac3b-849c-b48a-13aa-a2fc80e5f0c5",
                      },
                      value: "flex",
                    },
                  },
                  {
                    id: "a-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e590527f-1bd8-447f-2096-2044b971f6eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|cf47daa5-3590-3ecc-e508-ffe93c56a98a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e27a6bed-493f-3f1d-2952-500695da5d26",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e419d449-09cc-7845-7e47-a3fc3991b345",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|dd195682-5ca2-62f8-0b41-d0d76fb0dd7b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8bae1168-a24e-9587-49b4-25768835f32b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8c13d805-95d1-0741-d181-33df2073d970",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|3c13986a-087e-7c16-db17-59c77bfcfca0",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|66372baa-4fbc-4d33-ad26-f4af04f9cdee",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|7a5530dd-2718-ea68-ae81-6771db9ef942",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e590527f-1bd8-447f-2096-2044b971f6eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e590527f-1bd8-447f-2096-2044b971f6eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|cf47daa5-3590-3ecc-e508-ffe93c56a98a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|cf47daa5-3590-3ecc-e508-ffe93c56a98a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e27a6bed-493f-3f1d-2952-500695da5d26",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e27a6bed-493f-3f1d-2952-500695da5d26",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e419d449-09cc-7845-7e47-a3fc3991b345",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e419d449-09cc-7845-7e47-a3fc3991b345",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-22",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|dd195682-5ca2-62f8-0b41-d0d76fb0dd7b",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|dd195682-5ca2-62f8-0b41-d0d76fb0dd7b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8bae1168-a24e-9587-49b4-25768835f32b",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-25",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8bae1168-a24e-9587-49b4-25768835f32b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-26",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8c13d805-95d1-0741-d181-33df2073d970",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-27",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8c13d805-95d1-0741-d181-33df2073d970",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|3c13986a-087e-7c16-db17-59c77bfcfca0",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-29",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|3c13986a-087e-7c16-db17-59c77bfcfca0",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-30",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|66372baa-4fbc-4d33-ad26-f4af04f9cdee",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-31",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|66372baa-4fbc-4d33-ad26-f4af04f9cdee",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-32",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|7a5530dd-2718-ea68-ae81-6771db9ef942",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-33",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|7a5530dd-2718-ea68-ae81-6771db9ef942",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-34",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e590527f-1bd8-447f-2096-2044b971f6eb",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-35",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e590527f-1bd8-447f-2096-2044b971f6eb",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-36",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|cf47daa5-3590-3ecc-e508-ffe93c56a98a",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|cf47daa5-3590-3ecc-e508-ffe93c56a98a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-38",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e27a6bed-493f-3f1d-2952-500695da5d26",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-39",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e27a6bed-493f-3f1d-2952-500695da5d26",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-40",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e419d449-09cc-7845-7e47-a3fc3991b345",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-41",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e419d449-09cc-7845-7e47-a3fc3991b345",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-42",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|dd195682-5ca2-62f8-0b41-d0d76fb0dd7b",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-43",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|dd195682-5ca2-62f8-0b41-d0d76fb0dd7b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-44",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8bae1168-a24e-9587-49b4-25768835f32b",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-45",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8bae1168-a24e-9587-49b4-25768835f32b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-46",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8c13d805-95d1-0741-d181-33df2073d970",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-47",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|8c13d805-95d1-0741-d181-33df2073d970",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-48",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|3c13986a-087e-7c16-db17-59c77bfcfca0",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-49",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|3c13986a-087e-7c16-db17-59c77bfcfca0",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-50",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|66372baa-4fbc-4d33-ad26-f4af04f9cdee",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-51",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|66372baa-4fbc-4d33-ad26-f4af04f9cdee",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-52",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|7a5530dd-2718-ea68-ae81-6771db9ef942",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-n-53",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outElastic",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|7a5530dd-2718-ea68-ae81-6771db9ef942",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 250,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|0e67ac3b-849c-b48a-13aa-a2fc80e5f0c5",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|0e67ac3b-849c-b48a-13aa-a2fc80e5f0c5",
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192bdca18d5,
          },
          "a-3": {
            id: "a-3",
            title: "LW Card Hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.25, 0.75, 0.75],
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lw-card-faders",
                        selectorGuids: ["d428775e-3bb5-35c9-e1a4-ea101a7c26f7"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18cb6837d65,
          },
          "a-4": {
            id: "a-4",
            title: "LW Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".lw-card-faders",
                        selectorGuids: ["d428775e-3bb5-35c9-e1a4-ea101a7c26f7"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18cb6837d65,
          },
          "a-5": {
            id: "a-5",
            title: "About Us text",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.2,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b67f",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 200,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b684",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 400,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b687",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 600,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b68c",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 800,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b68f",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-5-n-7",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 1e3,
                      easing: "easeIn",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        id: "671a514677ce85377f80e653|0eb7065e-7830-3571-7b58-76e4fa48b692",
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1807b2cea2f,
          },
          "a-6": {
            id: "a-6",
            title: "About Text Scroll out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 100,
                      target: {},
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 0.2,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1807b44ae6b,
          },
          "a-7": {
            id: "a-7",
            title: "decor-lin [ in ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-horizontal",
                        selectorGuids: ["a3302aee-6e68-3fae-0439-57fe8cffffd6"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-horizontal",
                        selectorGuids: ["a3302aee-6e68-3fae-0439-57fe8cffffd6"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-7-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-7-n-6",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 500,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-7-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 500,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192bee95340,
          },
          "a-10": {
            id: "a-10",
            title: "decor-lin [ out ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n-6",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".border-horizontal",
                        selectorGuids: ["a3302aee-6e68-3fae-0439-57fe8cffffd6"],
                      },
                      widthValue: 0,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-10-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-10-n-7",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-1",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "dbc42f50-26cf-773b-15aa-896d42a15997",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-10-n-10",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-10-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon_star.is-2",
                        selectorGuids: [
                          "a0dd3056-a753-9a31-8924-3d93d65efa9f",
                          "3fc0a4d8-1a11-c831-0d7a-6a94496fa925",
                        ],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192bee95340,
          },
          "a-11": {
            id: "a-11",
            title: "monroe [ in view ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-11-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".change-bg",
                        selectorGuids: ["fb795e24-d7d4-3b06-0c83-c161200dc5bb"],
                      },
                      globalSwatchId: "--black",
                      rValue: 3,
                      bValue: 3,
                      gValue: 3,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-11-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        selector: ".change-bg",
                        selectorGuids: ["fb795e24-d7d4-3b06-0c83-c161200dc5bb"],
                      },
                      globalSwatchId: "--beige-100",
                      rValue: 255,
                      bValue: 213,
                      gValue: 229,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192c0367302,
          },
          "a-12": {
            id: "a-12",
            title: "monroe [ out view ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-12-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: [0.55, 0.085, 0.68, 0.53],
                      duration: 500,
                      target: {
                        selector: ".change-bg",
                        selectorGuids: ["fb795e24-d7d4-3b06-0c83-c161200dc5bb"],
                      },
                      globalSwatchId: "--black",
                      rValue: 3,
                      bValue: 3,
                      gValue: 3,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192c0367302,
          },
          "a-13": {
            id: "a-13",
            title: "monroe - while scrolling",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".monroe_heading-left",
                            selectorGuids: [
                              "ea952cc3-47dd-e30a-c3d6-33c2b2c96090",
                            ],
                          },
                          xValue: -50,
                          yValue: -50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-13-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".monroe_heading-right",
                            selectorGuids: [
                              "7fabbc74-5b7c-a93d-1216-7d0044b08c86",
                            ],
                          },
                          xValue: 50,
                          yValue: 50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-13-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".monroe_heading-left",
                            selectorGuids: [
                              "ea952cc3-47dd-e30a-c3d6-33c2b2c96090",
                            ],
                          },
                          xValue: -10,
                          yValue: -50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-13-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".monroe_heading-right",
                            selectorGuids: [
                              "7fabbc74-5b7c-a93d-1216-7d0044b08c86",
                            ],
                          },
                          xValue: 10,
                          yValue: 50,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192c264534d,
          },
          "a-14": {
            id: "a-14",
            title: "Waves",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-14-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            selector: ".divider---half",
                            selectorGuids: [
                              "8b524cda-9879-0be6-e72c-8d2233ef8a25",
                            ],
                          },
                          heightValue: 0,
                          widthUnit: "PX",
                          heightUnit: "rem",
                          locked: !1,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-14-n-2",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "ease",
                          duration: 500,
                          target: {
                            selector: ".divider---half",
                            selectorGuids: [
                              "8b524cda-9879-0be6-e72c-8d2233ef8a25",
                            ],
                          },
                          heightValue: 4,
                          widthUnit: "PX",
                          heightUnit: "rem",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1858caf5a70,
          },
          "a-15": {
            id: "a-15",
            title: "navbar-footer [ show ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192c3b17e13,
          },
          "a-16": {
            id: "a-16",
            title: "navbar-footer [ hide ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-16-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.55, 0.085, 0.68, 0.53],
                      duration: 250,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192c3b17e13,
          },
          "a-17": {
            id: "a-17",
            title: "navbar-hero [ show ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192c3b17e13,
          },
          "a-18": {
            id: "a-18",
            title: "navbar-hero [ hide ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: [0.55, 0.085, 0.68, 0.53],
                      duration: 250,
                      target: {
                        selector: ".nav_fixed",
                        selectorGuids: ["6f91a67f-793d-3c49-b9fd-ccca32f22e4a"],
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192c3b17e13,
          },
          "a-19": {
            id: "a-19",
            title: "Cube Roll [ in view ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cube-wrapper",
                        selectorGuids: ["6222e69c-885a-dde8-b17b-c1583ab9707e"],
                      },
                      zValue: -10,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "vw",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 6e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cube-wrapper",
                        selectorGuids: ["6222e69c-885a-dde8-b17b-c1583ab9707e"],
                      },
                      xValue: 360,
                      yValue: null,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cube-wrapper",
                        selectorGuids: ["6222e69c-885a-dde8-b17b-c1583ab9707e"],
                      },
                      xValue: 0,
                      yValue: null,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17fe0fca11e,
          },
          "a-41": {
            id: "a-41",
            title: "Cube Roll [ out view ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cube-wrapper",
                        selectorGuids: ["6222e69c-885a-dde8-b17b-c1583ab9707e"],
                      },
                      zValue: -10,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "vw",
                    },
                  },
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".cube-wrapper",
                        selectorGuids: ["6222e69c-885a-dde8-b17b-c1583ab9707e"],
                      },
                      xValue: 0,
                      yValue: null,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17fe0fca11e,
          },
          "a-20": {
            id: "a-20",
            title: "hover text [ line in ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-currentcolor",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11a",
                        ],
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-white",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11b",
                        ],
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-currentcolor",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11a",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 250,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-white",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11b",
                        ],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1848ba68acd,
          },
          "a-21": {
            id: "a-21",
            title: "hover text [ line out ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-white",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11b",
                        ],
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 250,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-08_underline.is-currentcolor",
                        selectorGuids: [
                          "55718588-1663-7b0a-09b0-34087e57c119",
                          "55718588-1663-7b0a-09b0-34087e57c11a",
                        ],
                      },
                      xValue: 0,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1848ba68acd,
          },
          "a-22": {
            id: "a-22",
            title: "Tabs Link In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tabs_check-point",
                        selectorGuids: ["19879697-8694-8220-e04b-6615c84573ef"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-22-n-5",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.25, 0.46, 0.45, 0.94],
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tabs_check-point",
                        selectorGuids: ["19879697-8694-8220-e04b-6615c84573ef"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17b6582366c,
          },
          "a-23": {
            id: "a-23",
            title: "Tabs Link Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.55, 0.085, 0.68, 0.53],
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tabs_check-point",
                        selectorGuids: ["19879697-8694-8220-e04b-6615c84573ef"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17b6582366c,
          },
          "a-33": {
            id: "a-33",
            title: "hero button hover - [ in ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube",
                        selectorGuids: ["7080116b-6f79-ea40-8448-72500e16a92f"],
                      },
                      value: 50,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1933ee12cc4,
          },
          "a-34": {
            id: "a-34",
            title: "hero button hover - [ out ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-34-n",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 750,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube",
                        selectorGuids: ["7080116b-6f79-ea40-8448-72500e16a92f"],
                      },
                      value: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1933ee12cc4,
          },
          "a-35": {
            id: "a-35",
            title: "hero button click",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube.is-click",
                        selectorGuids: [
                          "7080116b-6f79-ea40-8448-72500e16a92f",
                          "30ac84f9-c823-dd90-79f7-a11364f9760c",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube.is-click",
                        selectorGuids: [
                          "7080116b-6f79-ea40-8448-72500e16a92f",
                          "30ac84f9-c823-dd90-79f7-a11364f9760c",
                        ],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-35-n-3",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube.is-click",
                        selectorGuids: [
                          "7080116b-6f79-ea40-8448-72500e16a92f",
                          "30ac84f9-c823-dd90-79f7-a11364f9760c",
                        ],
                      },
                      value: 50,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "PLUGIN_LOTTIE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube.is-click",
                        selectorGuids: [
                          "7080116b-6f79-ea40-8448-72500e16a92f",
                          "30ac84f9-c823-dd90-79f7-a11364f9760c",
                        ],
                      },
                      value: 100,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 2e3,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-tube.is-click",
                        selectorGuids: [
                          "7080116b-6f79-ea40-8448-72500e16a92f",
                          "30ac84f9-c823-dd90-79f7-a11364f9760c",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1933ee8016a,
          },
          "a-36": {
            id: "a-36",
            title: "navbar - [ open ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
                      },
                      globalSwatchId: "--color",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-36-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-1",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "908dc360-9461-5be5-c6e1-25bbcebc3c5f",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-2",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "75933379-5e9b-2bcb-7920-5cf43aab19f4",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-3",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "d178f509-e76b-8282-a6f9-1c95691834e6",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-4",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "72592ec6-3c36-3cdd-0b61-9a0a2e0dddab",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-5",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "c653f318-f8da-256e-6dea-42ea416d9b80",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-6",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "2935ee3c-e7a9-af47-112a-e10932ad7f0d",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-36-n-2",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
                      },
                      globalSwatchId: "--black",
                      rValue: 3,
                      bValue: 3,
                      gValue: 3,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-36-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-1",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "908dc360-9461-5be5-c6e1-25bbcebc3c5f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 80,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-2",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "75933379-5e9b-2bcb-7920-5cf43aab19f4",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 150,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-3",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "d178f509-e76b-8282-a6f9-1c95691834e6",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 220,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-4",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "72592ec6-3c36-3cdd-0b61-9a0a2e0dddab",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-5",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "c653f318-f8da-256e-6dea-42ea416d9b80",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-36-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 380,
                      easing: "outExpo",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-6",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "2935ee3c-e7a9-af47-112a-e10932ad7f0d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19382a131ae,
          },
          "a-45": {
            id: "a-45",
            title: "navbar - [ close ]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: !0,
                        id: "6718c8afa78e156621f3a2ee|ad43a7dc-e35f-2320-39af-52425e607e28",
                      },
                      globalSwatchId: "--color",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                  {
                    id: "a-45-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-1",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "908dc360-9461-5be5-c6e1-25bbcebc3c5f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-2",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "75933379-5e9b-2bcb-7920-5cf43aab19f4",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-3",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "d178f509-e76b-8282-a6f9-1c95691834e6",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-4",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "72592ec6-3c36-3cdd-0b61-9a0a2e0dddab",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-5",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "c653f318-f8da-256e-6dea-42ea416d9b80",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-6",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "2935ee3c-e7a9-af47-112a-e10932ad7f0d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-45-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-1",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "908dc360-9461-5be5-c6e1-25bbcebc3c5f",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-6",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "2935ee3c-e7a9-af47-112a-e10932ad7f0d",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-5",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "c653f318-f8da-256e-6dea-42ea416d9b80",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-4",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "72592ec6-3c36-3cdd-0b61-9a0a2e0dddab",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-3",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "d178f509-e76b-8282-a6f9-1c95691834e6",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-no-wrap.is-2",
                        selectorGuids: [
                          "eb5eff1d-ff73-2213-e5b9-5934780fec8d",
                          "75933379-5e9b-2bcb-7920-5cf43aab19f4",
                        ],
                      },
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19382a131ae,
          },
          "a-38": {
            id: "a-38",
            title: "Quote - dots mouse move",
            continuousParameterGroups: [
              {
                id: "a-38-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-38-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2ee|0cac3221-0c30-0b1d-4c6a-8c85d4e372c8",
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-38-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2ee|7524a5ed-24e8-1d7a-5912-31d4feb66580",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-38-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2ee|0cac3221-0c30-0b1d-4c6a-8c85d4e372c8",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-38-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2ee|7524a5ed-24e8-1d7a-5912-31d4feb66580",
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-38-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-38-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image",
                            selectorGuids: [
                              "34e12930-6b58-db67-094d-1aae082178ea",
                            ],
                          },
                          yValue: -3,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-38-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image",
                            selectorGuids: [
                              "34e12930-6b58-db67-094d-1aae082178ea",
                            ],
                          },
                          yValue: 3,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x194752d8b73,
          },
          "a-39": {
            id: "a-39",
            title: "tickets-sec - blink+ [scroll in]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red",
                        selectorGuids: ["76448c6a-7534-c055-bfb2-3172505b6892"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1250,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-19",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-22",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-27",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-29",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-30",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 150,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1500,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-39-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1500,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1947941a4d5,
          },
          "a-40": {
            id: "a-40",
            title: "tickets-sec - blink+ [scroll out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-40-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-1",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "b0e949e7-d258-391b-1cfb-802f58f397b9",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-40-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red.is-2",
                        selectorGuids: [
                          "76448c6a-7534-c055-bfb2-3172505b6892",
                          "e0a94a15-b029-7748-b2cb-70df9396e8fb",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-40-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".tickets_plus-shape-red",
                        selectorGuids: ["76448c6a-7534-c055-bfb2-3172505b6892"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1947941a4d5,
          },
          "a-42": {
            id: "a-42",
            title: "404 - rotate on mouseover",
            continuousParameterGroups: [
              {
                id: "a-42-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-42-n",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card_root",
                            selectorGuids: [
                              "4ca4b0bd-2004-39a6-77f2-a1e56db4d530",
                            ],
                          },
                          yValue: -50,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-42-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|10053eac-e4d3-07f9-5388-a05e440dbad3",
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-9",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|c67aa1d6-a19e-4342-92cf-d3608faeee7b",
                          },
                          xValue: 1.15,
                          yValue: 1.15,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-12",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|0d763b93-afd5-643c-825d-0e5711a14044",
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-14",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          xValue: 75,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-42-n-19",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          value: 0.4,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-42-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|10053eac-e4d3-07f9-5388-a05e440dbad3",
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|c67aa1d6-a19e-4342-92cf-d3608faeee7b",
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-11",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|0d763b93-afd5-643c-825d-0e5711a14044",
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-18",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          value: 0.05,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-42-n-20",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          value: 0.4,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-42-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card_root",
                            selectorGuids: [
                              "4ca4b0bd-2004-39a6-77f2-a1e56db4d530",
                            ],
                          },
                          yValue: 50,
                          xUnit: "DEG",
                          yUnit: "deg",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-42-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|10053eac-e4d3-07f9-5388-a05e440dbad3",
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-10",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|c67aa1d6-a19e-4342-92cf-d3608faeee7b",
                          },
                          xValue: 1.15,
                          yValue: 1.15,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-13",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            id: "6718c8afa78e156621f3a2f1|0d763b93-afd5-643c-825d-0e5711a14044",
                          },
                          xValue: 1.1,
                          yValue: 1.1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-42-n-15",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          xValue: -75,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-42-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-42-n-3",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card_root",
                            selectorGuids: [
                              "4ca4b0bd-2004-39a6-77f2-a1e56db4d530",
                            ],
                          },
                          xValue: 25,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-42-n-16",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          yValue: 85,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-42-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".card_root",
                            selectorGuids: [
                              "4ca4b0bd-2004-39a6-77f2-a1e56db4d530",
                            ],
                          },
                          xValue: -25,
                          xUnit: "deg",
                          yUnit: "DEG",
                          zUnit: "DEG",
                        },
                      },
                      {
                        id: "a-42-n-17",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".glow",
                            selectorGuids: [
                              "0a631d7c-463a-cc72-9f01-bf4215470be2",
                            ],
                          },
                          yValue: -85,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19488285d01,
          },
          "a-43": {
            id: "a-43",
            title: "Button hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 350,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180b8f53a02,
          },
          "a-44": {
            id: "a-44",
            title: "Button on hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-44-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 350,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180b8f53a02,
          },
          "a-46": {
            id: "a-46",
            title: "matter book-tickets [open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-46-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e0c324af-aa5a-aafe-bfe7-6fd234131b4f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-46-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "",
                      duration: 150,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e0c324af-aa5a-aafe-bfe7-6fd234131b4f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19493c8dd90,
          },
          "a-47": {
            id: "a-47",
            title: "matter book-tickets [close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 150,
                      easing: "",
                      duration: 150,
                      target: {
                        id: "6718c8afa78e156621f3a2ee|e0c324af-aa5a-aafe-bfe7-6fd234131b4f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19493c8dd90,
          },
        },
        site: {
          mediaQueries: [
            {
              key: "main",
              min: 992,
              max: 1e4,
            },
            {
              key: "medium",
              min: 768,
              max: 991,
            },
            {
              key: "small",
              min: 480,
              max: 767,
            },
            {
              key: "tiny",
              min: 0,
              max: 479,
            },
          ],
        },
      });
    },
  },
]);
