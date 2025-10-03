import { computed as f, defineComponent as A, inject as E, createBlock as R, createElementBlock as d, openBlock as r, Transition as sa, withCtx as z, renderSlot as T, normalizeClass as F, ref as x, watch as j, createCommentVNode as J, unref as v, createVNode as P, toDisplayString as O, mergeProps as K, toValue as re, createElementVNode as M, Fragment as C, renderList as W, resolveDynamicComponent as pe, createTextVNode as Q, onMounted as ce, withDirectives as U, vModelText as De, vShow as ne, normalizeProps as me, resolveComponent as mt, useSlots as ue, readonly as ye, vModelCheckbox as Ue, normalizeStyle as Ae, guardReactiveProps as fe, reactive as oa, createSlots as Be, withAsyncContext as ra, onUnmounted as ia, vModelSelect as ua, vModelDynamic as da, useId as ca, provide as Re, markRaw as pa } from "vue";
const Pe = (e) => new Promise((l) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((n, o) => {
    if (n.toLowerCase().endsWith(".css") || (n += ".css"), document.querySelectorAll('link[server_path="' + n + '"]').length == 0) {
      let i = document.createElement("link"), c = new Promise((u) => {
        i.onload = function() {
          u(n);
        };
      });
      t[o] = c, a.appendChild(i), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("server_path", n), i.setAttribute("href", n);
    } else
      t[o] = Promise.resolve(n);
  }), Promise.all(t).then((n) => {
    l(n);
  });
}), ve = [], Ge = (e, l) => new Promise((t) => {
  let a = ve.find((n) => n.path === e);
  if (a != null)
    if (a.result === void 0 && l !== void 0 || a.result === null && l === void 0) {
      let n = setTimeout(() => {
        let o = ve.find((s) => s.path === e);
        o == null ? (clearTimeout(n), t(void 0)) : (o.result !== void 0 && l !== void 0 || o.result === void 0 && l === void 0) && (clearTimeout(n), t(o.result));
      }, 500);
    } else
      t(a.result);
  else {
    ve.push({
      path: e,
      result: l === void 0 ? null : void 0
    });
    let n = document.createElement("script");
    n.onload = () => {
      let s = ve.findIndex((i) => i.path === e);
      if (l === void 0)
        ve[s].result = void 0;
      else {
        let i = {};
        l.forEach((c) => {
          i[c] = window[c];
        }), ve[s].result = i;
      }
      t(ve[s].result);
    }, n.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(n);
  }
}), ht = () => {
  let e, l = "";
  return typeof self.crypto < "u" && (e = self.crypto, l = e.randomUUID?.()), l || "";
}, ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Pe,
  generateUUID: ht,
  loadNonEs6Module: Ge
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), ie = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(ie || {}), G = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(G || {}), ge = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ge || {}), we = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(we || {}), bt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(bt || {}), He = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(He || {}), se = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(se || {}), le = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(le || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), vt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(vt || {}), Ke = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = "centered", e.borderleft = "borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(Ke || {}), ae = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ae || {}), gt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(gt || {}), Ye = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Ye || {}), qe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(qe || {}), yt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(yt || {}), ft = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ft || {}), _t = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(_t || {}), Te = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Te || {}), kt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(kt || {}), Ze = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ze || {}), Ce = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ce || {}), Qe = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Qe || {}), St = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(St || {}), Xe = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(Xe || {}), Mt = /* @__PURE__ */ ((e) => (e.medium = "medium", e.large = "large", e))(Mt || {}), xe = /* @__PURE__ */ ((e) => (e.default = "default", e.verticalRight = "is-vertical-right", e.verticalLeft = "is-vertical-left", e))(xe || {});
const ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ge,
  AnimationTypes: we,
  BadgePositions: Ze,
  BorderTypes: Ye,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: vt,
  ButtonAlignments: St,
  ChartLegendPositions: He,
  ChartTypes: bt,
  ColorTypes: q,
  ColumnContainerModifiers: Ke,
  ColumnOffsetSizes: gt,
  ColumnSizes: ae,
  DropZoneQuadrants: le,
  FixedMenuPositions: kt,
  FixedNavBarPositions: Te,
  IconSizes: se,
  NoticeTypes: ie,
  SectionSizes: Mt,
  Sizes: G,
  SkinTypes: Xe,
  StepWizardOrientations: xe,
  TabAlignments: qe,
  TabStyles: yt,
  TileSizes: ft,
  TileTypes: _t,
  ToolTipPositions: Ce,
  ToolTipTextAlignments: Qe
}, Symbol.toStringTag, { value: "Module" })), Dt = "Language", Do = (e, l) => l(Dt, e), Z = (e) => {
  const l = e(Dt, "en");
  return f(() => l);
}, $t = "IconSet", $o = (e, l) => l($t, e), ba = (e) => {
  const l = e($t, "solid");
  return f(() => l);
}, At = "SummerNoteCDN", Ao = (e, l) => l(At, e), va = (e) => e(At, "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.0/"), Jt = "FontAwesomeCDN", Jo = (e, l) => l(Jt, e), ga = (e) => e(Jt, "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/"), Nt = "AnimateCDN", No = (e, l) => l(Nt, e), ya = (e) => e(Nt, "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Ft = "ChartJSCDN", Fo = (e, l) => l(Ft, e), fa = (e) => e(Ft, "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.7/"), wt = "AceJSCDN", wo = (e, l) => l(wt, e), _a = (e) => e(wt, "https://cdn.jsdelivr.net/npm/ace-builds@1.37.3/"), Ot = /* @__PURE__ */ A({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ge.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const l = ya(E);
    Pe(`${l}animate.min.css`);
    const t = e, a = (p) => {
      switch (p) {
        case ge.slower:
          return 3e3;
        case ge.fast:
          return 800;
        case ge.faster:
          return 500;
        default:
          return 2e3;
      }
    }, n = (p) => p === void 0 ? "" : `animate__${p}`, o = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, s = f(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = f(() => [
      "animate__animated",
      n(t.incoming ?? t.inout),
      o(t.speedIn ?? t.speed)
    ].join(" ")), c = f(() => [
      "animate__animated",
      n(t.outgoing ?? t.inout),
      o(t.speedOut ?? t.speed)
    ].join(" ")), u = f(() => [
      "animate__animated",
      "animate__infinite",
      n(t.repeating),
      o(t.speed)
    ].join(" "));
    return (p, h) => t.repeating ? (r(), d("div", {
      key: 1,
      class: F(u.value)
    }, [
      T(p.$slots, "default")
    ], 2)) : (r(), R(sa, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": c.value,
      duration: s.value
    }, {
      default: z(() => [
        T(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ka = "brands.min.css", Sa = "all.min.css", rt = "icon_styles", Ma = /\.fa-([^: ]+):before/g, Da = /url\(([^)]+)\)/g, Me = x([]), Ie = x(!1), it = async (e, l) => {
  if (!Ie.value) {
    Ie.value = !0;
    let t;
    Me.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", rt), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(rt), Me.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ka}`),
      fetch(`${e}${Sa}`),
      fetch(`${e}${l}.min.css`)
    ]), n = await a[0].text();
    [...n.matchAll(Ma)].forEach((o) => {
      Me.value.push(o[1]);
    }), n = `${await a[1].text()}
    ${await a[2].text()}
    ${n}`, [...n.matchAll(Da)].forEach((o) => {
      n = n.replace(o[0], `url(${new URL(o[1], e)})`);
    }), t.innerText = n, Me.value.splice(0, 1), Ie.value = !1;
  }
}, H = /* @__PURE__ */ A({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const l = ga(E), t = ba(E);
    Me.value.length === 0 ? it(l, t.value) : j(t, () => it(l, t.value));
    const a = e, n = f(() => {
      let o = [];
      return a.icon !== void 0 && a.icon !== null && (Me.value.indexOf(a.icon) >= 0 ? o.push("fa-brands") : (o.push("fa-ico"), o.push(`fa-${t.value}`)), o.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== se.normal && o.push(`fa-${a.size}`), o;
    });
    return (o, s) => (r(), d("i", {
      class: F(n.value)
    }, null, 2));
  }
}), $a = ["disabled"], Aa = { key: 1 }, te = /* @__PURE__ */ A({
  __name: "button",
  props: {
    icon: {},
    type: { default: q.primary },
    title: {},
    disabled: { type: Boolean, default: !1 },
    size: { default: G.normal },
    hide_mobile: { type: Boolean, default: !1 },
    hide_tablet: { type: Boolean, default: !1 },
    hide_desktop: { type: Boolean, default: !1 },
    is_rounded: { type: Boolean, default: !1 },
    is_outlined: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = f(() => [
      "button",
      `is-${t.size ?? G.normal}`,
      `is-${t.type ?? q.primary}`,
      t.disabled ? "disabled" : "",
      t.is_rounded ? "is-rounded" : "",
      t.hide_mobile ? "is-hidden-mobile" : "",
      t.hide_tablet ? "is-hidden-tablet-only" : "",
      t.hide_desktop ? "is-hidden-desktop is-hidden-widescreen" : "",
      t.is_outlined ? "is-outlined" : ""
    ]);
    return (o, s) => (r(), d("button", {
      class: F(n.value),
      disabled: t.disabled,
      onClick: s[0] || (s[0] = (i) => a("click"))
    }, [
      t.icon ? (r(), d("span", {
        key: 0,
        class: F([
          "icon",
          t.size === v(G).small ? "is-small" : "",
          t.size === v(G).large ? "is-medium" : ""
        ])
      }, [
        P(H, {
          icon: t.icon
        }, null, 8, ["icon"])
      ], 2)) : J("", !0),
      t.title ? (r(), d("span", Aa, O(t.title), 1)) : J("", !0)
    ], 10, $a));
  }
}), Ja = '{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Refresh":"Refresh","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسناً","Print":"الطباعة","Refresh":"التجديد","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Qeydiyyat","Edit":"Tarix","Enable":"Qeydiyyat","Okay":" Okay","Print":"Çap","Refresh":"Axtarış","Save":"Yadda","Submit":"Qeydiyyat","Upload":"Tarix"},"bg":{"Add":"Добавяне","Cancel":"Отмяна","Delete":"Изтриване","Disable":"Изключване","Download":"Изтегляне","Edit":"Редактиране","Enable":"Включване","Okay":"Добре","Print":"Печат","Refresh":"Обновяване","Save":"Запис","Submit":"Подаване","Upload":"Качване"},"bn":{"Add":"যোগ","Cancel":"বাতিল","Delete":"মুছে","Disable":"নিষ্ক্রিয়","Download":"ডাউনলোড","Edit":"সম্পাদনা","Enable":"সক্রিয়","Okay":"ঠিক","Print":"প্রিন্ট","Refresh":"নতুন","Save":"সংরক্ষণ","Submit":"জমা","Upload":"আপলোড"},"ca":{"Add":"Afegeix","Cancel":"Cancel·","Delete":"Esborra","Disable":"Deshabilita","Download":"Descarrega","Edit":"Edita","Enable":"Habilita","Okay":"Bé","Print":"Imprimeix","Refresh":"Refresca","Save":"Desa","Submit":"Envia","Upload":"Puja"},"cs":{"Add":"Přidat","Cancel":"Zrušit","Delete":"Smazat","Disable":"Zakázat","Download":"Stáhnout","Edit":"Upravit","Enable":"Povolit","Okay":"Dobře","Print":"Tisk","Refresh":"Obnovit","Save":"Uložit","Submit":"Odeslat","Upload":"Načíst"},"da":{"Add":"Tilføj","Cancel":"Annullér","Delete":"Slet","Disable":"Deaktivér","Download":"Download","Edit":"Redigér","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Refresh":"Genopfrisk","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Deaktivieren","Download":"Herunterladen","Edit":"Bearbeiten","Enable":"Aktivieren","Okay":"Okay","Print":"Drucken","Refresh":"Aktualisieren","Save":"Speichern","Submit":"Senden","Upload":"Hochladen"},"el":{"Add":"Προσθήκη","Cancel":"Ακύρωση","Delete":"Διαγραφή","Disable":"Απενεργοποίηση","Download":"Λήψη","Edit":"Επεξεργασία","Enable":"Ενεργοποίηση","Okay":"Εντάξει","Print":"Εκτύπωση","Refresh":"Ανανέωση","Save":"Αποθήκευση","Submit":"Υποβολή","Upload":"Αποστολή"},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Refresh":"Refresh","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Inhabilitación","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Refresh":"Refresh","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{"Add":"Lisa","Cancel":"Tühistage","Delete":"Kustuta","Disable":"Keela","Download":"Laadi","Edit":"Edit","Enable":"Luba","Okay":"Olgu","Print":"Printi","Refresh":"Värskenda","Save":"Päästa","Submit":"Esita","Upload":"Laadi"},"eu":{"Add":"Gehitu","Cancel":"Utzi","Delete":"Ezabatu","Disable":"Desgaitu","Download":"Deskargatu","Edit":"Editatu","Enable":"Gaitu","Okay":"Ados","Print":"Inprimatu","Refresh":"Freskatu","Save":"Gorde","Submit":"Bidali","Upload":"Igo"},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"ویرایش","Enable":"گزینه","Okay":"خوب","Print":"Print","Refresh":"بازسازی","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruuta","Delete":"Poista","Disable":"Poista","Download":"Lataa","Edit":"Muuta","Enable":"Käytä","Okay":"Selvä","Print":"Tulosta","Refresh":"Päivitä","Save":"Tallenna","Submit":"Lähetä","Upload":"Lähetä"},"fr":{"Add":"Ajouter","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactiver","Download":"Télécharger","Edit":"Modifier","Enable":"Activer","Okay":"Très","Print":"Imprimer","Refresh":"Actualiser","Save":"Enregistrer","Submit":"Soumettre","Upload":"Envoi"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Toir","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Refresh":"Athraigh","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"gl":{"Add":"Add","Cancel":"Cancelar","Delete":"Eliminar","Disable":"Disable","Download":"Baixar","Edit":"Edit","Enable":"Habilitar","Okay":"Ok","Print":"Imprimir","Refresh":"Refresco","Save":"Save","Submit":"Presentación","Upload":"Upload"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Refresh":"מרעננים","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Refresh":"रिफ्रेश","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Kikapcsolás","Download":"Letöltés","Edit":"Szerkesztés","Enable":"Beállítás","Okay":"Oké","Print":"Nyomtatás","Refresh":"Frissítés","Save":"Mentés","Submit":"Küldés","Upload":"Feltöltés"},"id":{"Add":"Tambah","Cancel":"Batal","Delete":"Hapus","Disable":"Matikan","Download":"Unduh","Edit":"Sunting","Enable":"Aktifkan","Okay":"Oke","Print":"Cetak","Refresh":"Segarkan","Save":"Simpan","Submit":"Kirim","Upload":"Unggah"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Refresh":"Rifiuti","Save":"Salva","Submit":"Inviare","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Refresh":"リフレッシュ","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Refresh":"지원하다","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{"Add":"Pridėti","Cancel":"Atsisakyti","Delete":"Trinti","Disable":"Išjungti","Download":"Atsisiųsti","Edit":"Keisti","Enable":"Įjungti","Okay":"Gerai","Print":"Spausdinti","Refresh":"Atnaujinti","Save":"Įrašyti","Submit":"Siųsti","Upload":"Siųsti"},"lv":{"Add":"Pievienot","Cancel":"Atcelt","Delete":"Dzēst","Disable":"Atslēgt","Download":"Lejupielādēt","Edit":"Rediģēt","Enable":"Ieslēgt","Okay":"Labi","Print":"Drukāt","Refresh":"Atsvaidzināt","Save":"Saglabāt","Submit":"Nosūtīt","Upload":"Augšupielāde"},"ms":{"Add":"Tambah","Cancel":"Batal","Delete":"Dihapus","Disable":"Matikan","Download":"Muaturun","Edit":"Edit","Enable":"Hidupkan","Okay":"Oke","Print":"Cetakan","Refresh":"Segarkan","Save":"Simpan","Submit":"Diserahkan","Upload":"Unggah"},"nb":{"Add":"Legg","Cancel":"Avbryt","Delete":"Slett","Disable":"Slå","Download":"Last","Edit":"Rediger","Enable":"Slå","Okay":"Ok","Print":"Skriv","Refresh":"Oppdater","Save":"Lagre","Submit":"Send","Upload":"Last"},"nl":{"Add":"Voeg","Cancel":"Annuleren","Delete":"Verwijderen","Disable":"Uitschakelen","Download":"Downloaden","Edit":"Bewerken","Enable":"Inschakelen","Okay":"Oké","Print":"Afdrukken","Refresh":"Verversen","Save":"Opslaan","Submit":"Verzenden","Upload":"Uploaden"},"pl":{"Add":"Dodaj","Cancel":"Anuluj","Delete":"Usuń","Disable":"Wyłącz","Download":"Pobierz","Edit":"Edycja","Enable":"Włącz","Okay":"Dobrze","Print":"Drukuj","Refresh":"Odśwież","Save":"Zapisz","Submit":"Prześlij","Upload":"Wyślij"},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Refresh":"Atualizar","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{"Add":"Adaugă","Cancel":"Renunță","Delete":"Șterge","Disable":"Dezactivează","Download":"Descărcare","Edit":"Editare","Enable":"Activează","Okay":"Bine","Print":"Tipărește","Refresh":"Reîmprospătează","Save":"Salvează","Submit":"Trimite","Upload":"Încarcă"},"ru":{"Add":"Добавить","Cancel":"Отменить","Delete":"Исключить","Disable":"Инвалид","Download":"Скачать","Edit":"Редактировать","Enable":"Допускать","Okay":"Хорошо","Print":"Печать","Refresh":"Освежить","Save":"Спасти","Submit":"Представить","Upload":"Загрузить"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Odstrániť","Disable":"Zakázať","Download":"Stiahnuť","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Tlač","Refresh":"Obnoviť","Save":"Uložiť","Submit":"Predložiť","Upload":"Odoslať"},"sl":{"Add":"Dodaj","Cancel":"Prekliči","Delete":"Zbriši","Disable":"Onemogoči","Download":"Prenesi","Edit":"Uredi","Enable":"Omogoči","Okay":"V","Print":"Natisni","Refresh":"Osveži","Save":"Shrani","Submit":"Pošlji","Upload":"Pošlji"},"sq":{"Add":"_Shto","Cancel":"Anullo","Delete":"Elemino","Disable":"Jo","Download":"Shkarkimi","Edit":"Ndrysho","Enable":"Aktivo","Okay":"Mirë","Print":"Printo","Refresh":"Rifresko","Save":"Ruaj","Submit":"Dërgo","Upload":"Ngarko"},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Refresh":"Refresh","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{"Add":"เพิ่ม","Cancel":"ยกเลิก","Delete":"ลบ","Disable":"ปิดการใช้งาน","Download":"ดาวน์โหลด","Edit":"แก้ไข","Enable":"เปิด","Okay":"โอเค","Print":"พิมพ์","Refresh":"ปรับปรุงใหม่","Save":"บันทึก","Submit":"ส่ง","Upload":"อัปโหลด"},"tl":{"Add":"Magdagdag","Cancel":"Huwag","Delete":"Ibagsak","Disable":"Hindi","Download":"Ibaba","Edit":"Baguhin","Enable":"Kaibig","Okay":"Okay","Print":"Nakalimbag","Refresh":"Nakapagpapasigla","Save":"Mag","Submit":"Pagpapasakop","Upload":"Itaas"},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelliler","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Refresh":"Yenileme","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Refresh":"Реверс","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"ur":{"Add":"_شامل","Cancel":"منسوخ","Delete":"حذف","Disable":"منسوخ","Download":"اوپر","Edit":"مرتب","Enable":"فعال","Okay":"ٹھیک","Print":"پرنٹ","Refresh":"خوشی","Save":"محفوظ","Submit":"غیر","Upload":"اپ"},"zh":{"Add":"添加","Cancel":"取消","Delete":"删除","Disable":"禁用","Download":"下载","Edit":"编辑","Enable":"启用","Okay":"还好","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上传"},"zt":{"Add":"添加","Cancel":"取消","Delete":"刪除","Disable":"禁用","Download":"下載","Edit":"編輯","Enable":"開啟","Okay":"好吧","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上傳"}}', Na = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":" Filter"},"bg":{"Filter":"Филтър"},"bn":{"Filter":"ফিল্টার"},"ca":{"Filter":"Filtre"},"cs":{"Filter":"Filtr"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{"Filter":"Φίλτρο"},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{"Filter":"Filter"},"eu":{"Filter":"Iragazkia"},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Suodatin"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"gl":{"Filter":"Filtrar"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Filter"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{"Filter":"Filtras"},"lv":{"Filter":"Filtrs"},"ms":{"Filter":"Penapis"},"nb":{"Filter":"Filtrer"},"nl":{"Filter":"Filter"},"pl":{"Filter":"Filtr"},"pt":{"Filter":"Filtro"},"ro":{"Filter":"Filtru"},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{"Filter":"Filter"},"sq":{"Filter":"Filtra"},"sv":{"Filter":"Filter"},"th":{"Filter":"กรอง"},"tl":{"Filter":"Pansala"},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"ur":{"Filter":"فائلز"},"zh":{"Filter":"过滤器"},"zt":{"Filter":"分頁"}}', Fa = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":" Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":"Qeydiyyat"},"bg":{"Previous":"Предишен","Next":"Следващият","Older":"По-","Newer":"По-","GoToPage":"Отиване на страница"},"bn":{"Previous":"পূর্ববর্তী","Next":"পরবর্তী","Older":"বয়স্ক","Newer":"নিউকার","GoToPage":"চিহ্নিত স্থানে চলুন"},"ca":{"Previous":"Anterior","Next":"Següent","Older":"Vella","Newer":"Més","GoToPage":"Vés a la pàgina"},"cs":{"Previous":"Předchozí","Next":"Další","Older":"Starší","Newer":"Novější","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyere","GoToPage":"Gå til side"},"de":{"Previous":"Vorherige","Next":"Nach","Older":"Ältere","Newer":"Neuer","GoToPage":"Zur Seite gehen"},"el":{"Previous":"Προηγούμενο","Next":"Επόμενο","Older":"Μεγαλύτερος","Newer":"Νεότερα","GoToPage":"Μετάβαση στη σελίδα"},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{"Previous":"Eelmine","Next":"Järgmine","Older":"Vanem","Newer":"Uuem","GoToPage":"Mine lehele"},"eu":{"Previous":"Aurrekoa","Next":"Hurrengoa","Older":"Zaharragoa","Newer":"Newer","GoToPage":"Joan orrira"},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uusi","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Plus","Newer":"Plus","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go Leathanach"},"gl":{"Previous":"Anterior","Next":"Seguinte","Older":"Idade","Newer":"Newer","GoToPage":"Ir á páxina"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Következő","Older":"Idősebb","Newer":"Újabb","GoToPage":"Ugrás az oldalra"},"id":{"Previous":"Sebelumnya","Next":"Berikutnya","Older":"Lebih","Newer":"Baru","GoToPage":"Ke Halaman"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"본문 바로가기"},"lt":{"Previous":"Ankstesnis","Next":"Sekantis","Older":"Senesni","Newer":"Naujokas","GoToPage":"Pereiti į puslapį"},"lv":{"Previous":"Iepriekšējais","Next":"Nākamais","Older":"Vecāki","Newer":"Jaunāks","GoToPage":"Iet uz lapu"},"ms":{"Previous":"Sebelumnya","Next":"Next","Older":"♪","Newer":"Perancis","GoToPage":"Pergi Ke Halaman"},"nb":{"Previous":"Forrige","Next":"Neste","Older":"Eldre","Newer":"Nyere","GoToPage":"Gå til siden"},"nl":{"Previous":"Vorige","Next":"Volgende","Older":"Ouder","Newer":"Nieuwer","GoToPage":"Ga naar pagina"},"pl":{"Previous":"Poprzedni","Next":"Następny","Older":"Starszy","Newer":"Nowsza","GoToPage":"Przejdź do strony"},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{"Previous":"Precedent","Next":"Înainte","Older":"Mai","Newer":"Mai","GoToPage":"Du-te la pagina"},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Старше","Newer":"Новый","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúca","Next":"Nasledujúci","Older":"Staršie","Newer":"Novšie","GoToPage":"Prejsť na stránku"},"sl":{"Previous":"Prejšnja","Next":"Naprej","Older":"Starejši","Newer":"Novejši","GoToPage":"Pojdi na stran"},"sq":{"Previous":"Paraardhëse","Next":"Në","Older":"Më","Newer":"Ri","GoToPage":"Shko tek faqja"},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{"Previous":"ก่อนหน้า","Next":"ต่อไป","Older":"อายุ","Newer":"สร้างใหม่","GoToPage":"ไปยังหน้า"},"tl":{"Previous":"Bago","Next":"Susunod","Older":"Mas","Newer":"Mas","GoToPage":"Pumunta sa Pahina"},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"ur":{"Previous":"پہلے","Next":"اگلا","Older":"عمررسیدہ","Newer":"نیا","GoToPage":"صفحہ ۲۴ پر جائیں"},"zh":{"Previous":"上一个","Next":"下一个","Older":"老年人","Newer":"更新","GoToPage":"转到页面"},"zt":{"Previous":"前一個","Next":"下一頁","Older":"老了","Newer":"更新","GoToPage":"跳至頁面"}}', wa = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","February":"February","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"يان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"كانون","February":"شباط/فبراير","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qalereya","Mon":"Bakı","Tue":"Qalereya","Wed":"Biznes","Thu":"Qalereya","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Axtarış","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","February":"Fevral","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Bakı","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{"Sun":"Слънце","Mon":"Мон","Tue":"Туе","Wed":"Сватба","Thu":"Thu","Fri":"Fri","Sat":"Сат","Sunday":"Неделя","Monday":"Понеделник","Tuesday":"Вторник","Wednesday":"Сряда","Thursday":"Четвъртък","Friday":"Петък","Saturday":"Събота"},"Months":{"Jan":"Ян","Feb":"Февруари","Mar":"Мар","Apr":"Apr","May":"Май","Jun":"Джун","Jul":"Юли","Aug":"Aug","Sep":"Сеп","Oct":"Окт","Nov":"Nov","Dec":"Дек","January":"Януари","February":"Февруари","March":"Март","April":"Април","June":"Юни","July":"Юли","August":"Август","September":"Септември","October":"Октомври","November":"Ноември","December":"Декември"},"Today":"Днес"},"bn":{"Weekdays":{"Sun":"রবি","Mon":"মন","Tue":"মঙ্গল","Wed":"অস্বীকৃত","Thu":"বৃহঃ","Fri":"ফ্রিসেল","Sat":"শনি","Sunday":"রবিবার","Monday":"সোমবার","Tuesday":"মঙ্গলবার","Wednesday":"বুধবার","Thursday":"বৃহস্পতিবার","Friday":"শুক্রবার","Saturday":"শনিবার"},"Months":{"Jan":"জানুয়ারী","Feb":"ফেব্রুয়ারীMarch","Mar":"মার্চApril","Apr":"এপ্রিল","May":"মে","Jun":"জুনিউ","Jul":"জুমি","Aug":"আগস্ট","Sep":"সেপ্টেম্বরOctober","Oct":"অক্টোবর","Nov":"নভেম্বর","Dec":"ডিসেম্বর","January":"জানুয়ারী","February":"ফেব্রুয়ারী","March":"মার্চ","April":"এপ্রিল","June":"জুন","July":"জুলাই","August":"আগস্ট","September":"সেপ্টেম্বর","October":"অক্টোবর","November":"নভেম্বর","December":"সদস্য"},"Today":"আজ"},"ca":{"Weekdays":{"Sun":"Sol","Mon":"Dl","Tue":"Dt","Wed":"Dc","Thu":"Dj","Fri":"DvSaturday","Sat":"DsSunday","Sunday":"Diumenge","Monday":"Dilluns","Tuesday":"Dimarts","Wednesday":"Dimecres","Thursday":"Dijous","Friday":"Divendres","Saturday":"Dissabte"},"Months":{"Jan":"Mare","Feb":"FebMarch","Mar":"Mar","Apr":"AbrMay","May":"Maig","Jun":"JunJuly","Jul":"JulAugust","Aug":"AgoSeptember","Sep":"Set","Oct":"Oct","Nov":"Nov","Dec":"Des","January":"Gener","February":"Febrer","March":"Març","April":"Abril","June":"Juny","July":"Juliol","August":"Agost","September":"Setembre","October":"Octubre","November":"Novembre","December":"Desembre"},"Today":"Avui"},"cs":{"Weekdays":{"Sun":"Slunce","Mon":"Po","Tue":"Tue","Wed":"St","Thu":"Thu","Fri":"Fri","Sat":"Sad","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Únor","Mar":"Březen","Apr":"Duben","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Srpen","Sep":"Září","Oct":"Říjen","Nov":"Listopad","Dec":"Prosinec","January":"Leden","February":"Únor","March":"Březen","April":"Duben","June":"Červen","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Listopad","December":"Prosinec"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tir","Wed":"On","Thu":"Thu","Fri":"Fri","Sat":"Lø","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mo","Tue":"Di","Wed":"Mi","Thu":"Do","Fri":"Fri","Sat":"Sa","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mär","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Juli","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dez","January":"Januar","February":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{"Sun":"Ήλιος","Mon":"Δευ","Tue":"Τεύχος","Wed":"Τετ","Thu":"Θου","Fri":"Παρ","Sat":"Σάβ","Sunday":"Κυριακή","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο"},"Months":{"Jan":"Ιαν","Feb":"Φεβ","Mar":"Μαρ","Apr":"Απρ","May":"Μάιος","Jun":"Ιουν","Jul":"Ιουλ","Aug":"Αυγ","Sep":"Σεπ","Oct":"Οκτ","Nov":"Νοε","Dec":"Δεκ","January":"Ιανουάριος","February":"Φεβρουάριος","March":"Μάρτιος","April":"Απρίλιος","June":"Ιούνιος","July":"Ιούλιος","August":"Αύγουστος","September":"Σεπτέμβριος","October":"Οκτώβριος","November":"Νοέμβριος","December":"Δεκέμβριος"},"Today":"Σήμερα"},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundo","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov-Zelando","Dec":"Dec","January":"Januaro","February":"Februaro","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{"Sun":"Päike","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattus","Sunday":"Pühapäev","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäeval","Friday":"Reede","Saturday":"Laupäev"},"Months":{"Jan":"Jan","Feb":"Veebruar","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oktoober","Nov":"Nov","Dec":"Dec","January":"Jaanuar","February":"Veebruar","March":"Märts","April":"Aprill","June":"Juuni","July":"Juuli","August":"August","September":"September","October":"Oktoober","November":"November","December":"Detsember"},"Today":"Täna"},"eu":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Apustua","Thu":"Og","Fri":"Fri","Sat":"Sat","Sunday":"Igandea","Monday":"Astelehena","Tuesday":"Asteartea","Wednesday":"Asteazkena","Thursday":"Osteguna","Friday":"Ostirala","Saturday":"Larunbata"},"Months":{"Jan":"Jan","Feb":"Ots","Mar":"Marmar","Apr":"Apr","May":"Maiatza","Jun":"Jun","Jul":"Jul","Aug":"Abusua","Sep":"Ira","Oct":"Oct","Nov":"Aza","Dec":"Abendua","January":"Urtarrila","February":"Otsaila","March":"Martxoa","April":"Apirila","June":"Ekaina","July":"Uztaila","August":"Abuztua","September":"Iraila","October":"Urria","November":"Azaroa","December":"Abendua"},"Today":"Gaur"},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","February":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Su","Mon":"Ma","Tue":"Ti","Wed":"Ke","Thu":"To","Fri":"Pe","Sat":"La","Sunday":"Sunnuntai","Monday":"Maanantai","Tuesday":"Tiistai","Wednesday":"Keskiviikko","Thursday":"Torstai","Friday":"Perjantai","Saturday":"Lauantai"},"Months":{"Jan":"Tammi","Feb":"Helmi","Mar":"Maalis","Apr":"Huhti","May":"Toukokuu","Jun":"Kesä","Jul":"Heinä","Aug":"Elo","Sep":"Syys","Oct":"Loka","Nov":"Marras","Dec":"Joulu","January":"Tammikuu","February":"Helmikuu","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuu","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuu"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Soleil","Mon":"Mon","Tue":"Tu","Wed":"Mariage","Thu":"Jeu","Fri":"Ven","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Janvier","Feb":"Fév","Mar":"Mars","Apr":"Avr","May":"Mai","Jun":"Juin","Jul":"Juillet","Aug":"Août","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Déc","January":"Janvier","February":"Février","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Déan","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Dé","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"An","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Irl","February":"Amharc","March":"Márta","April":"Amharc","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Nollaig"},"Today":"Sa"},"gl":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Apostamos","Thu":"Tu","Fri":"Frio","Sat":"Sat","Sunday":"Domingo","Monday":"Luns","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Xoves","Friday":"Venres","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Febreiro","Mar":"Mar","Apr":"Abril","May":"Maio","Jun":"Jun","Jul":"Xullo","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Novidade","Dec":"Dec","January":"Xaneiro","February":"Febreiro","March":"Marzo","April":"Abril","June":"Xuño","July":"Xullo","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Decembro"},"Today":"Hoxe"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"יום"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","February":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","February":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"H","Tue":"Sze","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sz","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","February":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Matahari","Mon":"Mon","Tue":"Tue","Wed":"Busana","Thu":"Thu","Fri":"Fri","Sat":"Sab","Sunday":"Minggu","Monday":"Senin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Kamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Maret","April":"April","June":"Juni","July":"Juli","August":"Agustus","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"Hari"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","February":"Febbraio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンド","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日～金曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","February":"2月2日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"₢","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2월","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","February":"2","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{"Sun":"Saulė","Mon":"Mon","Tue":"Tue","Wed":"WEd","Thu":"Thu","Fri":"FrNAME","Sat":"Sat","Sunday":"Sekmadienis","Monday":"Pirmadienis","Tuesday":"Antradienis","Wednesday":"Trečiadienis","Thursday":"Ketvirtadienis","Friday":"Penktadienis","Saturday":"Šeštadienis"},"Months":{"Jan":"Sau","Feb":"Vas","Mar":"Mar","Apr":"Bal","May":"Gegužės","Jun":"Bir","Jul":"Lie","Aug":"Rgp","Sep":"Rp","Oct":"Spalis","Nov":"Nr","Dec":"Gruodis","January":"Sausis","February":"Vasaris","March":"Kovas","April":"Balandis","June":"Birželis","July":"Liepa","August":"Rugpjūtis","September":"Rugsėjis","October":"Spalis","November":"Lapkritis","December":"Gruodis"},"Today":"Šiandien"},"lv":{"Weekdays":{"Sun":"Saule","Mon":"N","Tue":"Otr","Wed":"Tre","Thu":"Cet","Fri":"Pie","Sat":"Ses","Sunday":"Svētdiena","Monday":"Pirmdiena","Tuesday":"Otrdiena","Wednesday":"Trešdiena","Thursday":"Ceturtdiena","Friday":"Piektdiena","Saturday":"Sestdiena"},"Months":{"Jan":"Janvāris","Feb":"Febr","Mar":"Mar","Apr":"Apr","May":"Maijs","Jun":"Jūn","Jul":"Jūl","Aug":"Aug","Sep":"Sept","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Janvāris","February":"Februāris","March":"Marts","April":"Aprīlis","June":"Jūnijs","July":"Jūlijs","August":"Augusts","September":"Septembris","October":"Oktobris","November":"Novembris","December":"Decembris"},"Today":"Šodien"},"ms":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Perancis","Wed":"♪","Thu":"Khaw","Fri":"Perancis","Sat":"♪","Sunday":"Ahad","Monday":"Isnin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Khamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Perancis","Mar":"Perancis","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"♪","Aug":"Aug","Sep":"Perancis","Oct":"Takh","Nov":"Nov","Dec":"Amerika","January":"Januari","February":"2010,","March":"2010,","April":"April","June":"Juni","July":"Juli","August":"Ogos","September":"Perancis","October":"Oktober","November":"November","December":"Amerika"},"Today":"Hari"},"nb":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"I"},"nl":{"Weekdays":{"Sun":"Zon","Mon":"Ma","Tue":"Di","Wed":"Wo","Thu":"Do","Fri":"Vr","Sat":"Zat","Sunday":"Zondag","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Maart","April":"April","June":"Juni","July":"Juli","August":"Augustus","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Vandaag"},"pl":{"Weekdays":{"Sun":"Słońce","Mon":"Mon","Tue":"Wtyczka","Wed":"Środ","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Niedziela","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Luty","Mar":"Mar","Apr":"Kwiecień","May":"Maj","Jun":"Czerwiec","Jul":"Lipiec","Aug":"Sierpień","Sep":"Wrzesień","Oct":"Październik","Nov":"Nov","Dec":"Grudzień","January":"Styczeń","February":"Luty","March":"Marzec","April":"Kwiecień","June":"Czerwiec","July":"Lipiec","August":"Sierpień","September":"Wrzesień","October":"Październik","November":"Listopad","December":"Grudzień"},"Today":"Dzisiaj"},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"A","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","February":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{"Sun":"Soare","Mon":"Luni","Tue":"Tue","Wed":"Căsătorie","Thu":"Thu","Fri":"Vine","Sat":"Sat","Sunday":"Duminică","Monday":"Luni","Tuesday":"Marţi","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă"},"Months":{"Jan":"Jan","Feb":"Februarie","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Ianuarie","February":"Februarie","March":"Martie","April":"Aprilie","June":"Iunie","July":"Iulie","August":"August","September":"Septembrie","October":"Octombrie","November":"Noiembrie","December":"Decembrie"},"Today":"Astăzi"},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Мон","Tue":"Туи","Wed":"Свадьба","Thu":"Ту","Fri":"Фри","Sat":"Сидеть","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Ян","Feb":"Февраль","Mar":"Мар","Apr":"Апр","May":"Май","Jun":"Джун","Jul":"Джул","Aug":"Ауг","Sep":"Сеп","Oct":"Октября","Nov":"Ноябрь","Dec":"Декларация","January":"Январь","February":"Февраль","March":"Март","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октября","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Po","Tue":"Ut","Wed":"Str","Thu":"Št","Fri":"Pi","Sat":"So","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Streda","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apríl","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"August","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","February":"Február","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"August","September":"September","October":"Október","November":"November","December":"December"},"Today":"Dnes"},"sl":{"Weekdays":{"Sun":"Sonce","Mon":"Naslednji","Tue":"Tor","Wed":"Sre","Thu":"Čet","Fri":"Fri","Sat":"Sob","Sunday":"Nedelja","Monday":"Ponedeljek","Tuesday":"Torek","Wednesday":"Sreda","Thursday":"Četrtek","Friday":"Petek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Avg","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Marec","April":"April","June":"Junij","July":"Julij","August":"Avgust","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Danes"},"sq":{"Weekdays":{"Sun":"Dielli","Mon":"Mon","Tue":"Tue","Wed":"Mer","Thu":"Tsu","Fri":"Pre","Sat":"Sat","Sunday":"E","Monday":"E","Tuesday":"E","Wednesday":"E","Thursday":"E","Friday":"E","Saturday":"E"},"Months":{"Jan":"Jan","Feb":"Fb","Mar":"Meri","Apr":"Për","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Tetor","Nov":"Nov","Dec":"Dhjetor","January":"Janar","February":"Shkurt","March":"Mars","April":"Prill","June":"Qershor","July":"Korrik","August":"Gusht","September":"Shtator","October":"Tetor","November":"Nëntor","December":"Dhjetor"},"Today":"Sot"},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{"Sun":"อาทิตย์","Mon":"นิ้ว","Tue":"Tue","Wed":"เว็บ","Thu":"ทู","Fri":"เนื้อ","Sat":"ที่นั่ง","Sunday":"อาทิตย์","Monday":"จันทร์","Tuesday":"อังคาร","Wednesday":"วันพุธ","Thursday":"พฤหัสบดี","Friday":"ศุกร์","Saturday":"เสาร์"},"Months":{"Jan":"ไม่นะ","Feb":"ก.","Mar":"ขนาด","Apr":"ขนาด","May":"พฤษภาคม","Jun":"จุน","Jul":"ก.","Aug":"อัก","Sep":"เซพ","Oct":"ตลับหมึก","Nov":"นอฟ","Dec":"ธ.","January":"มกราคม","February":"กุมภาพันธ์","March":"มีนาคม","April":"เมษายน","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม"},"Today":"วันนี้"},"tl":{"Weekdays":{"Sun":"Araw","Mon":"Buwan","Tue":"Tue","Wed":"Damo","Thu":"Thu","Fri":"Kaibigan","Sat":"Sat","Sunday":"Linggo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miyerkules","Thursday":"Huwebes","Friday":"Biyernes","Saturday":"Sabado"},"Months":{"Jan":"Jan","Feb":"Sanggol","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Juul","Aug":"Ug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Pagpapasiya","January":"Enero","February":"Pebrero","March":"Marso","April":"Abril","June":"Hunyo","July":"Hulyo","August":"Agosto","September":"Setyembre","October":"Oktubre","November":"Nobyembre","December":"Disyembre"},"Today":"Ngayon"},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","February":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Про","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"П'ятниця","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","February":"Лютий","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"ur":{"Weekdays":{"Sun":"سورج","Mon":"مون","Tue":"ٹو","Wed":"وے","Thu":"چو","Fri":"فری","Sat":"شطرنج","Sunday":"اتوار","Monday":"منگل","Tuesday":"منگل","Wednesday":"بدھ","Thursday":"جمعرات","Friday":"جمعہ","Saturday":"سبت"},"Months":{"Jan":"یان","Feb":"فیب","Mar":"مار","Apr":"پرنٹ","May":"مئی","Jun":"جون","Jul":"یول","Aug":"آغ","Sep":"سیپ","Oct":"پرنٹ","Nov":"ن","Dec":"سوال","January":"جنوری","February":"فروری","March":"مارچ","April":"اپریل","June":"جون","July":"جولائی","August":"اگست","September":"ستمبر","October":"اکتوبر","November":"نومبر","December":"دسمبر"},"Today":"آج"},"zh":{"Weekdays":{"Sun":"太阳","Mon":"月号","Tue":"图","Wed":"结婚","Thu":"图","Fri":"弗里语Name","Sat":"座位","Sunday":"礼拜","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六(上午)"},"Months":{"Jan":"扬","Feb":"二月","Mar":"马来","Apr":"农历四月","May":"5月","Jun":"军","Jul":"朱尔","Aug":"奥格","Sep":"九月","Oct":"十月(简体)","Nov":"页:1","Dec":"12月(中文)","January":"页:1","February":"2月(半天会议)","March":"3月(半天会议)","April":"4月(半天会议)","June":"6月份","July":"7月(半天会议)","August":"8月(半天)","September":"9月(半天会议)","October":"10月(半天会议)","November":"11月(半天会议)","December":"12月(半天)"},"Today":"现在"},"zt":{"Weekdays":{"Sun":"太阳","Mon":"月","Tue":"二等分","Wed":"有婚","Thu":"三月","Fri":"弗里","Sat":"有","Sunday":"星期天","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六"},"Months":{"Jan":"1月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"三月","Jul":"二月","Aug":"8月","Sep":"九月","Oct":"十月","Nov":"11月","Dec":"二月","January":"1月","February":"二月","March":"三月","April":"4月","June":"6月","July":"7月","August":"8月","September":"9月","October":"10月","November":"11月","December":"12月"},"Today":"今天"}}`, Oa = '{"en":{"Error":"Error","AutoComplete":{"NoResults":"No Results"}},"ar":{"Error":"الرعب","AutoComplete":{"NoResults":"لا نتائج"}},"az":{"Error":"Qeyd","AutoComplete":{"NoResults":"Qeydlər"}},"bg":{"Error":"Грешка","AutoComplete":{"NoResults":"Няма резултати"}},"bn":{"Error":"ত্রুটি","AutoComplete":{"NoResults":"কোনো ফলাফল পাওয়া যায়নি"}},"ca":{"Error":"Error","AutoComplete":{"NoResults":"Sense resultats"}},"cs":{"Error":"Chyba","AutoComplete":{"NoResults":"Žádné výsledky"}},"da":{"Error":"Fejl","AutoComplete":{"NoResults":"Ingen resultater"}},"de":{"Error":"Fehler","AutoComplete":{"NoResults":"Keine Ergebnisse"}},"el":{"Error":"Σφάλμα","AutoComplete":{"NoResults":"Χωρίς αποτελέσματα"}},"eo":{"Error":"Eraro","AutoComplete":{"NoResults":"Neniuj rezultoj"}},"es":{"Error":"Error","AutoComplete":{"NoResults":"No hay resultados"}},"et":{"Error":"Viga","AutoComplete":{"NoResults":"Tulemused puuduvad"}},"eu":{"Error":"Errorea","AutoComplete":{"NoResults":"Emaitzarik ez"}},"fa":{"Error":"خطای","AutoComplete":{"NoResults":"نتایج"}},"fi":{"Error":"Virhe","AutoComplete":{"NoResults":"Ei tuloksia"}},"fr":{"Error":"Erreur","AutoComplete":{"NoResults":"Aucun résultat"}},"ga":{"Error":"Amharc","AutoComplete":{"NoResults":"Gan a bheith ráite"}},"gl":{"Error":"Erro","AutoComplete":{"NoResults":"Sen resultados"}},"he":{"Error":"טעות","AutoComplete":{"NoResults":"לא תוצאות"}},"hi":{"Error":"त्रुटि","AutoComplete":{"NoResults":"परिणाम"}},"hu":{"Error":"Hiba","AutoComplete":{"NoResults":"Nincs eredmény"}},"id":{"Error":"Galat","AutoComplete":{"NoResults":"Tidak ada hasil"}},"it":{"Error":"Errore","AutoComplete":{"NoResults":"Nessun risultato"}},"ja":{"Error":"エラー","AutoComplete":{"NoResults":"結果なし"}},"ko":{"Error":"계정","AutoComplete":{"NoResults":"결과 없음"}},"lt":{"Error":"Klaida","AutoComplete":{"NoResults":"Nr rezultatai"}},"lv":{"Error":"Kļūda","AutoComplete":{"NoResults":"Nav rezultātu"}},"ms":{"Error":"Error","AutoComplete":{"NoResults":"Hasil No"}},"nb":{"Error":"Feil","AutoComplete":{"NoResults":"Ingen resultater"}},"nl":{"Error":"Fout","AutoComplete":{"NoResults":"Geen resultaten"}},"pl":{"Error":"Błąd","AutoComplete":{"NoResults":"Brak wyników"}},"pt":{"Error":"Erro","AutoComplete":{"NoResults":"Sem resultados"}},"ro":{"Error":"Eroare","AutoComplete":{"NoResults":"Niciun rezultat"}},"ru":{"Error":"Ошибка","AutoComplete":{"NoResults":"Нет результатов"}},"sk":{"Error":"Chyba","AutoComplete":{"NoResults":"Žiadne výsledky"}},"sl":{"Error":"Napaka","AutoComplete":{"NoResults":"Brez rezultatov"}},"sq":{"Error":"Gabim","AutoComplete":{"NoResults":"Asnjë rezultat"}},"sv":{"Error":"Fel","AutoComplete":{"NoResults":"Inga resultat"}},"th":{"Error":"ผิดพลาด","AutoComplete":{"NoResults":"ไม่มีผลลัพธ์"}},"tl":{"Error":"Pagkakamali","AutoComplete":{"NoResults":"Walang Resulta"}},"tr":{"Error":"Hata","AutoComplete":{"NoResults":"Sonuçlar yok"}},"uk":{"Error":"Помилка","AutoComplete":{"NoResults":"Немає результатів"}},"ur":{"Error":"خامی","AutoComplete":{"NoResults":"کوئی نتیجہ"}},"zh":{"Error":"错误","AutoComplete":{"NoResults":"无结果"}},"zt":{"Error":"錯誤","AutoComplete":{"NoResults":"沒有結果"}}}', Ta = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":" Don"},"bg":{"Done":"Готово"},"bn":{"Done":"সম্পন্ন"},"ca":{"Done":"Fet"},"cs":{"Done":"Hotovo"},"da":{"Done":"Færdig"},"de":{"Done":"Fertig"},"el":{"Done":"Έγινε"},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{"Done":"Tehtud"},"eu":{"Done":"Eginda"},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Fait"},"ga":{"Done":"Arna"},"gl":{"Done":"Feito"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"Kész"},"id":{"Done":"Selesai"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{"Done":"@"},"lv":{"Done":"Pabeigts"},"ms":{"Done":"Selesai"},"nb":{"Done":"Ferdig"},"nl":{"Done":"Klaar"},"pl":{"Done":"Gotowe"},"pt":{"Done":"Feito"},"ro":{"Done":"Gata"},"ru":{"Done":"Сделано"},"sk":{"Done":"Hotovo"},"sl":{"Done":"Končano"},"sq":{"Done":"U"},"sv":{"Done":"Done"},"th":{"Done":"เสร็จแล้ว"},"tl":{"Done":"Tapos"},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"ur":{"Done":"بند"},"zh":{"Done":"完成"},"zt":{"Done":"完成"}}', xa = {
  Button: JSON.parse(Ja),
  Filter: JSON.parse(Na),
  Pagination: JSON.parse(Fa),
  Date: JSON.parse(wa),
  Form: JSON.parse(Oa),
  Wizard: JSON.parse(Ta)
}, L = (e, l) => {
  let t = e.split("."), a = xa[t[0]];
  const n = (l == null || l == null ? null : l.value) ?? "en";
  if (a !== void 0) {
    a[n] === void 0 ? a = a.en : a = a[n];
    let o = 1;
    for (; a !== void 0 && o < t.length; )
      a = a[t[o]], o++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Ba = /* @__PURE__ */ A({
  __name: "button-add",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Add", n),
      icon: "plus",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Tt = /* @__PURE__ */ A({
  __name: "button-cancel",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Cancel", n),
      icon: "window-close",
      type: q.danger
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Pa = /* @__PURE__ */ A({
  __name: "button-delete",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Delete", n),
      icon: "trash-alt",
      type: q.danger
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Ca = /* @__PURE__ */ A({
  __name: "button-disable",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Disable", n),
      icon: "times-circle",
      type: q.danger
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Ea = /* @__PURE__ */ A({
  __name: "button-download",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Download", n),
      icon: "download",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), za = /* @__PURE__ */ A({
  __name: "button-edit",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Edit", n),
      icon: "edit",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Ra = /* @__PURE__ */ A({
  __name: "button-enable",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Enable", n),
      icon: "check",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), xt = /* @__PURE__ */ A({
  __name: "button-okay",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Okay", n),
      icon: "check",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Ia = /* @__PURE__ */ A({
  __name: "button-print",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Print", n),
      icon: "print",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Bt = /* @__PURE__ */ A({
  __name: "button-refresh",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Refresh", n),
      icon: "sync",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Wa = /* @__PURE__ */ A({
  __name: "button-save",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Save", n),
      icon: "save",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), La = /* @__PURE__ */ A({
  __name: "button-submit",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Submit", n),
      icon: "envelope-open-text",
      type: q.success
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), Va = /* @__PURE__ */ A({
  __name: "button-upload",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean },
    is_outlined: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = Z(E), o = f(() => Object.assign({}, a, {
      title: L("Button.Upload", n),
      icon: "upload",
      type: q.primary
    }));
    return (s, i) => (r(), R(te, K(o.value, {
      onClick: i[0] || (i[0] = (c) => t("click"))
    }), null, 16));
  }
}), ja = /* @__PURE__ */ A({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("div", {
      class: F(["buttons", l.size ? `are-${l.size}` : "", l.alignment ? `is-${l.alignment}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Ua = /* @__PURE__ */ A({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: se.normal }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), R(H, {
      icon: `square-${l.checked ? "check" : "xmark"}`,
      size: l.size
    }, null, 8, ["icon", "size"]));
  }
}), Ga = { class: "dropdown-trigger" }, Ha = ["aria-controls"], Ka = { class: "icon is-small" }, Ya = ["id"], qa = { class: "dropdown-content" }, Za = {
  key: 0,
  class: "dropdown-divider"
}, Qa = { key: 0 }, Xa = /* @__PURE__ */ A({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const l = ht(), t = e, a = x(!1), n = f(() => {
      let u = ["dropdown"];
      return t.is_hoverable && u.push("is-hoverable"), t.is_right_align && u.push("is-right"), t.drops_up && u.push("is-up"), a.value && u.push("is-active"), u;
    }), o = f(() => {
      let u = re(t.items);
      return Array.isArray(u) && (u = u.map((p) => Array.isArray(p) ? { children: p } : { children: [p] })), Array.isArray(u) ? u : [u];
    }), s = (u) => {
      let p = ["dropdown-item"];
      return typeof u != "string" && u.active && p.push("is-active"), p;
    }, i = (u) => {
      if (typeof u != "string")
        return u.href;
    }, c = (u) => {
      if (typeof u != "string") {
        a.value = !1;
        let p = u;
        p.onClick && p.onClick();
      }
    };
    return (u, p) => (r(), d("div", {
      class: F(n.value)
    }, [
      M("div", Ga, [
        M("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": v(l),
          onClick: p[0] || (p[0] = (h) => a.value = !a.value)
        }, [
          M("span", null, O(t.title), 1),
          M("span", Ka, [
            P(H, {
              icon: "angle-down",
              "aria-hidden": "true"
            })
          ])
        ], 8, Ha)
      ]),
      M("div", {
        class: "dropdown-menu",
        id: v(l),
        role: "menu"
      }, [
        (r(!0), d(C, null, W(o.value, (h, _) => (r(), d("div", qa, [
          _ > 0 ? (r(), d("hr", Za)) : J("", !0),
          (r(!0), d(C, null, W(h.children, (m) => (r(), R(pe(typeof m == "string" ? "div" : "a"), {
            class: F(s(m)),
            href: i(m),
            onClick: (y) => c(m)
          }, {
            default: z(() => [
              typeof m == "string" ? (r(), d("p", Qa, O(m), 1)) : J("", !0),
              Q(" " + O(typeof m == "string" ? null : m.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Ya)
    ], 2));
  }
}), ut = async (e, l, t) => {
  let a = await import(e);
  const n = Object.keys(a);
  return l && n.sort(l), n.filter((o) => t === void 0 || t.value === null || t.value.test(o)).map((o) => a[o]);
}, el = /* @__PURE__ */ A({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const l = x(null), t = e, a = f(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return j(() => [t.url, t.filter], async () => {
      l.value = await ut(t.url, t.sortMethod, a);
    }), ce(async () => {
      l.value = await ut(t.url, t.sortMethod, a);
    }), (n, o) => (r(!0), d(C, null, W(l.value, (s) => (r(), R(pe(s), K({ ref_for: !0 }, t.props), null, 16))), 256));
  }
}), tl = { class: "field" }, al = { class: "control has-icons-left" }, ll = ["placeholder"], nl = { class: "icon is-small is-left" }, Pt = /* @__PURE__ */ A({
  __name: "filter",
  props: {
    default_value: {},
    min_length: {}
  },
  emits: ["filter"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = Z(E), o = f(() => L("Filter.Filter", n)), s = x(null);
    j([s], (c) => {
      c[0] === "" && t.default_value && (s.value = t.default_value, a("filter", s.value == "" ? null : s.value));
    });
    const i = (c) => {
      c.keyCode === 13 ? a("filter", s.value === "" ? null : s.value) : t.min_length !== void 0 && t.min_length !== null && (s.value === "" ? a("filter", null) : s.value !== null && s.value.length >= t.min_length && a("filter", s.value.trimEnd()));
    };
    return ce(() => {
      t.default_value && (s.value = t.default_value);
    }), (c, u) => (r(), d("div", tl, [
      M("p", al, [
        U(M("input", {
          role: "searchbox",
          type: "text",
          class: "input is-expanded is-rounded",
          placeholder: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p),
          onKeyup: i
        }, null, 40, ll), [
          [De, s.value]
        ]),
        M("span", nl, [
          P(H, {
            icon: "filter",
            size: v(se).small
          }, null, 8, ["size"])
        ])
      ])
    ]));
  }
}), sl = {
  key: 0,
  class: "message-header"
}, ol = { class: "message-body" }, rl = /* @__PURE__ */ A({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: G.normal }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = f(() => t.size === G.normal ? null : `is-${t.size}`), o = f(() => `is-${t.type}`);
    return (s, i) => (r(), d("article", {
      class: F(["message", n.value, o.value])
    }, [
      t.title ? (r(), d("div", sl, [
        M("p", null, O(t.title), 1),
        t.has_delete ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: i[0] || (i[0] = (c) => a("close"))
        })) : J("", !0)
      ])) : J("", !0),
      M("div", ol, [
        T(s.$slots, "default", {}, () => [
          Q(O(t.message), 1)
        ])
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ A({
  __name: "notification",
  props: {
    type: { default: ie.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("div", {
      class: F(["notification", "is-" + l.type, l.light ? "is-light" : ""])
    }, [
      T(t.$slots, "default", {}, () => [
        Q(O(l.message), 1)
      ])
    ], 2));
  }
}), il = {
  key: 0,
  class: "modal-background"
}, ul = ["aria-label"], dl = {
  key: 0,
  class: "title"
}, cl = { class: "block" }, pl = /* @__PURE__ */ A({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: ie.info },
    message: {},
    header: {},
    block_user: { type: Boolean },
    has_close: { type: Boolean },
    is_light: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = f(() => {
      switch (t.type) {
        case ie.info:
          return "circle-info";
        case ie.success:
          return "circle-check";
        case ie.danger:
          return "bug";
        case ie.warning:
          return "circle-exclamation";
      }
    }), o = f(() => {
      var s = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && s.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || s.push("has-no-close"), s;
    });
    return (s, i) => (r(), d("div", {
      class: F({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (r(), d("div", il)) : J("", !0),
      P(Ot, {
        incoming: v(we).fadeIn,
        outgoing: v(we).fadeOut,
        speed: v(ge).slower
      }, {
        default: z(() => [
          t.visible ? (r(), d("div", {
            key: 0,
            class: F(o.value),
            role: "dialog",
            "aria-label": t.header ?? "Page Notification"
          }, [
            P(H, {
              icon: n.value,
              size: v(se).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), d("h1", dl, O(t.header), 1)) : J("", !0),
            M("div", cl, O(t.message), 1),
            t.has_close ? (r(), R(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (c) => a("close")),
              size: v(se).large,
              role: "button",
              "aria-label": "close"
            }, null, 8, ["size"])) : J("", !0)
          ], 10, ul)) : J("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), ml = ["title", "disabled"], hl = ["title", "disabled"], bl = {
  key: 0,
  class: "pagination-list"
}, vl = {
  key: 0,
  class: "pagination-ellipsis"
}, gl = ["aria-label", "onOnclick"], Ct = /* @__PURE__ */ A({
  __name: "pagination",
  props: {
    use_next: { type: Boolean, default: !0 },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: G.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean, default: !0 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = Z(E), o = f(() => L(t.use_next ? "Pagination.Previous" : "Pagination.Older", n)), s = f(() => L(t.use_next ? "Pagination.Next" : "Pagination.Newer", n)), i = f(() => t.button_type ? `has-background-${t.button_type}` : ""), c = f(() => L("Pagination.GoToPage", n)), u = f(() => t.current_page === void 0 ? 0 : re(t.current_page) + (t.zero_page_index ? 1 : 0)), p = f(() => (t.has_previous ?? !1) || u.value > 0), h = f(() => (t.has_more ?? !1) || u.value < (t.total_pages === void 0 ? 0 : re(t.total_pages))), _ = f(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (re(t.total_pages) > 5) {
        let g = Math.max(t.current_page === void 0 ? Math.floor(re(t.total_pages) / 2) : u.value, 3);
        return re(t.total_pages) - u.value === 0 ? g -= 2 : re(t.total_pages) - u.value === 1 && g--, [
          1,
          -1,
          g - 1,
          g,
          g + 1,
          -1,
          re(t.total_pages)
        ];
      } else {
        let g = [];
        for (let N = 1; N <= re(t.total_pages); N++)
          g.push(N);
        return g;
      }
    }), m = function() {
      p && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", re(t.current_page) - 1) : a("moveBack"));
    }, y = function() {
      h && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", re(t.current_page) + 1) : a("moveForward"));
    }, b = function(g) {
      a("goToPage", t.zero_page_index ? g - 1 : g);
    };
    return (g, N) => U((r(), d("nav", {
      class: F(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      M("a", {
        class: F(["pagination-previous", i.value]),
        title: o.value,
        onClick: m,
        disabled: p.value ? null : "disabled"
      }, [
        P(H, {
          icon: "backward",
          class: "mr-1",
          size: v(se).small
        }, null, 8, ["size"]),
        Q(" " + O(o.value), 1)
      ], 10, ml),
      M("a", {
        class: F(["pagination-next", i.value]),
        title: s.value,
        onClick: y,
        disabled: h.value ? null : "disabled"
      }, [
        Q(O(s.value) + " ", 1),
        P(H, {
          icon: "forward",
          class: "ml-1",
          size: v(se).small
        }, null, 8, ["size"])
      ], 10, hl),
      t.total_pages !== void 0 ? (r(), d("ul", bl, [
        (r(!0), d(C, null, W(_.value, (D) => (r(), d("li", null, [
          D === -1 ? (r(), d("span", vl, "…")) : (r(), d("a", {
            key: 1,
            class: F(["pagination-link", D === u.value ? "is-current" : ""]),
            "aria-label": `${c.value} ${D}`,
            onOnclick: (B) => b(D)
          }, O(D), 43, gl))
        ]))), 256))
      ])) : J("", !0)
    ], 2)), [
      [ne, p.value || h.value]
    ]);
  }
}), be = /* @__PURE__ */ A({
  __name: "Promised",
  props: {
    promise: {}
  },
  setup(e) {
    const l = e, t = x(null), a = Z(E), n = f(() => `${L("Form.Error", a)}: ${t.value.message ?? t.value.toString()}`), o = x(!1), s = x(!1), i = f(() => !o.value && !s.value), c = x(null);
    async function u(p) {
      if (o.value = !1, s.value = !1, t.value = null, p == null)
        c.value = null;
      else {
        let h = v(p);
        Object.prototype.toString.call(h) !== "[object Promise]" && (h = Promise.resolve(h));
        try {
          c.value = await h, s.value = !0;
        } catch (_) {
          t.value = _, o.value = !0;
        }
      }
    }
    return j(
      () => l.promise,
      () => {
        u(l.promise);
      }
    ), ce(() => {
      u(l.promise);
    }), (p, h) => (r(), d(C, null, [
      i.value ? T(p.$slots, "pending", { key: 0 }, () => [
        P(v(_e), {
          size: v(G).small
        }, null, 8, ["size"])
      ]) : J("", !0),
      o.value ? T(p.$slots, "rejected", me(K({ key: 1 }, t.value)), () => [
        P(v(he), {
          message: n.value,
          type: v(ie).danger
        }, null, 8, ["message", "type"])
      ]) : J("", !0),
      s.value ? T(p.$slots, "default", {
        key: 2,
        response: c.value
      }) : J("", !0)
    ], 64));
  }
}), yl = ["value", "max"], _e = /* @__PURE__ */ A({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: G.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const l = e, t = f(() => l.maximum === void 0 ? null : (l.value ?? 0) / l.maximum * 100);
    return (a, n) => (r(), d("progress", {
      class: F(`progress is-${l.size} is-${l.type}`),
      value: l.value,
      max: l.maximum
    }, O(t.value ? `${t.value.toFixed(2)}%` : null), 11, yl));
  }
}), fl = {
  key: 0,
  class: "navbar-link"
}, _l = {
  key: 0,
  class: "icon-text"
}, kl = { class: "icon" }, Sl = { key: 1 }, Ml = {
  key: 0,
  class: "icon-text"
}, Dl = { class: "icon" }, $l = { key: 1 }, Al = {
  key: 2,
  class: "navbar-dropdown"
}, dt = /* @__PURE__ */ A({
  __name: "navbar-item",
  props: {
    title: {},
    active: { type: Boolean, default: !1 },
    icon: {},
    href: {},
    onClick: {},
    childItems: {}
  },
  emits: ["itemClicked"],
  setup(e, { emit: l }) {
    const t = e, a = () => {
      n("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, n = l;
    return (o, s) => {
      const i = mt("navbar-item", !0);
      return r(), R(pe(t.childItems !== void 0 ? "div" : "a"), {
        class: F(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a,
        tabIndex: t.href === void 0 || t.href === "" ? 0 : null
      }, {
        default: z(() => [
          t.childItems !== void 0 ? (r(), d("a", fl, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", _l, [
              M("span", kl, [
                P(H, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              M("span", null, O(t.title), 1)
            ])) : (r(), d("span", Sl, O(t.title), 1))
          ])) : (r(), d(C, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", Ml, [
              M("span", Dl, [
                P(H, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              M("span", null, O(t.title), 1)
            ])) : (r(), d("span", $l, O(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), d("div", Al, [
            (r(!0), d(C, null, W(t.childItems, (c) => (r(), R(i, K({ ref_for: !0 }, c, {
              onItemClicked: s[0] || (s[0] = (u) => n("itemClicked"))
            }), null, 16))), 256))
          ])) : J("", !0)
        ]),
        _: 1
      }, 8, ["class", "href", "tabIndex"]);
    };
  }
}), Jl = ["aria-label"], Nl = { class: "navbar-brand" }, Fl = ["aria-expanded"], wl = {
  key: 0,
  class: "navbar-start"
}, Ol = { style: { width: "100px" } }, Tl = {
  key: 1,
  class: "navbar-end"
}, xl = { style: { width: "100px" } }, Bl = /* @__PURE__ */ A({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const l = e, t = x(!1);
    return ce(() => {
      if (l.fixed_position) {
        let a = "";
        switch (l.fixed_position) {
          case Te.top:
            a = "has-navbar-fixed-top";
            break;
          case Te.bottom:
            a = "has-navbar-fixed-bottom";
            break;
        }
        a !== "" && (document.body.classList.contains(a) || document.body.classList.add(a));
      }
    }), (a, n) => (r(), d("nav", {
      class: F(["navbar", l.fixed_position, l.color !== void 0 && l.color !== null ? `is-${l.color}` : ""]),
      role: "navigation",
      "aria-label": l.ariaLabel
    }, [
      M("div", Nl, [
        T(a.$slots, "brand"),
        M("a", {
          role: "button",
          class: F(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: n[0] || (n[0] = (o) => t.value = !t.value)
        }, [...n[3] || (n[3] = [
          M("span", { "aria-hidden": "true" }, null, -1),
          M("span", { "aria-hidden": "true" }, null, -1),
          M("span", { "aria-hidden": "true" }, null, -1)
        ])], 10, Fl)
      ]),
      M("div", {
        class: F(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        l.start_items !== void 0 ? (r(), d("div", wl, [
          P(be, {
            promise: l.start_items
          }, {
            default: z(({ response: o }) => [
              (r(!0), d(C, null, W(o, (s) => (r(), R(dt, K({ ref_for: !0 }, s, {
                onItemClicked: n[1] || (n[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              M("div", Ol, [
                P(_e, {
                  size: v(G).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : J("", !0),
        l.end_items !== void 0 ? (r(), d("div", Tl, [
          P(be, {
            promise: l.end_items
          }, {
            default: z(({ response: o }) => [
              (r(!0), d(C, null, W(o, (s) => (r(), R(dt, K({ ref_for: !0 }, s, {
                onItemClicked: n[2] || (n[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              M("div", xl, [
                P(_e, {
                  size: v(G).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : J("", !0)
      ], 2)
    ], 10, Jl));
  }
}), Pl = /* @__PURE__ */ A({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("aside", {
      class: F(["menu", l.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${l.fixedPosition}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Cl = { class: "menu-label" }, El = /* @__PURE__ */ A({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("p", Cl, [
      Q(O(l.message) + " ", 1),
      T(t.$slots, "default")
    ]));
  }
}), zl = ["href"], Rl = {
  key: 0,
  class: "icon-text"
}, Il = { class: "icon" }, Wl = { key: 1 }, Et = /* @__PURE__ */ A({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const l = e, t = () => {
      l.onClick !== void 0 && l.onClick();
    };
    return (a, n) => (r(), d("li", null, [
      M("a", {
        href: l.href,
        onClick: n[0] || (n[0] = (o) => t()),
        class: F(l.active ? "is-active" : "")
      }, [
        l.icon !== void 0 && l.icon !== null ? (r(), d("span", Rl, [
          M("span", Il, [
            P(H, {
              icon: l.icon
            }, null, 8, ["icon"])
          ]),
          M("span", null, O(l.title), 1)
        ])) : (r(), d("span", Wl, O(l.title), 1)),
        T(a.$slots, "default")
      ], 10, zl),
      T(a.$slots, "children")
    ]));
  }
}), Ll = { class: "menu-list" }, Vl = /* @__PURE__ */ A({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => {
      const n = mt("menu-list", !0);
      return r(), d("ul", Ll, [
        l.items !== null ? (r(), R(be, {
          key: 0,
          promise: l.items
        }, {
          default: z(({ response: o }) => [
            (r(!0), d(C, null, W(o, (s) => (r(), d("li", null, [
              P(Et, K({ ref_for: !0 }, s), null, 16),
              s.childItems !== void 0 ? (r(), R(n, {
                key: 0,
                items: s.childItems
              }, null, 8, ["items"])) : J("", !0)
            ]))), 256))
          ]),
          pending: z(() => [
            M("li", null, [
              P(_e, {
                size: v(G).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : J("", !0),
        T(t.$slots, "default")
      ]);
    };
  }
}), jl = /* @__PURE__ */ A({
  __name: "badge",
  props: {
    position: { default: Ze.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("span", {
      class: F(["badge", `is-${l.position}`, l.type === void 0 ? "" : `is-${l.type}`])
    }, [
      Q(O(l.text) + " ", 1),
      T(t.$slots, "default")
    ], 2));
  }
}), zt = /* @__PURE__ */ A({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    has_arrow: { type: Boolean, default: !1 },
    position: { default: Ce.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    always_active: { type: Boolean, default: !1 },
    text_align: { default: Qe.left }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), R(pe(l.is), {
      class: F([
        l.has_arrow ? "has-tooltop-arrow" : "",
        l.position ? `has-tooltip-${l.position}` : "",
        l.multiline ? "has-tooltip-multiline" : "",
        l.type ? `has-tooltip-${l.type}` : "",
        l.text_align ? `has-tooltip-text-${l.text_align}` : "",
        l.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": e.text
    }, {
      default: z(() => [
        T(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Ul = /* @__PURE__ */ A({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: G.normal },
    is_delete: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const l = e, t = f(() => {
      let a = ["tag", `is-${l.type}`, `is-${l.size}`];
      return l.light && a.push("is-light"), l.rounded && a.push("is-rounded"), l.is_delete && a.push("is-delete"), a;
    });
    return (a, n) => (r(), d("span", {
      class: F(t.value)
    }, [
      T(a.$slots, "default", {}, () => [
        Q(O(l.text), 1)
      ])
    ], 2));
  }
}), Gl = /* @__PURE__ */ A({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("span", {
      class: F(["tags", l.size === null ? "" : "are-" + l.size, l.addons ? "has-addons" : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: Ot,
  Badge: jl,
  Button: te,
  ButtonAdd: Ba,
  ButtonCancel: Tt,
  ButtonDelete: Pa,
  ButtonDisable: Ca,
  ButtonDownload: Ea,
  ButtonEdit: za,
  ButtonEnable: Ra,
  ButtonOkay: xt,
  ButtonPrint: Ia,
  ButtonRefresh: Bt,
  ButtonSave: Wa,
  ButtonSubmit: La,
  ButtonUpload: Va,
  ButtonsContainer: ja,
  CheckMark: Ua,
  DropDown: Xa,
  DynamicSlot: el,
  Filter: Pt,
  Icon: H,
  Menu: Pl,
  MenuEntry: Et,
  MenuLabel: El,
  MenuList: Vl,
  Message: rl,
  NavBar: Bl,
  Notification: he,
  PageNotification: pl,
  Pagination: Ct,
  Progress: _e,
  Promised: be,
  Tag: Ul,
  Tags: Gl,
  ToolTip: zt
}, Symbol.toStringTag, { value: "Module" })), Kl = /* @__PURE__ */ A({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: l }) {
    const t = l, a = e, n = x(!1), o = x(!1), s = x(null), i = f(() => (a.disabled ?? !1) || o.value && a.handle_search !== null), c = f(() => {
      let h = [];
      return i || h.push("has-cursor"), n.value ? h.push("is-move") : h.push("is-grab"), h;
    }), u = (h) => i.value ? (h.preventDefault(), !1) : (h.stopPropagation(), h.dataTransfer.setData("value", JSON.stringify(a.copy_data)), n.value = !0, t("started"), !0), p = () => {
      n.value = !1, o.value = !0, t("stopped");
    };
    return ce(() => {
      if (a.handle_search) {
        let h = s.value.querySelector(a.handle_search);
        h !== null && (o.value = !0, h.addEventListener("mousedown", () => o.value = !1), h.addEventListener("mouseup", () => o.value = !0));
      }
    }), (h, _) => (r(), R(pe(a.tag), {
      ref_key: "handle",
      ref: s,
      draggable: !0,
      onDragstart: u,
      onDragend: p,
      class: F(c.value)
    }, {
      default: z(() => [
        T(h.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Yl = /* @__PURE__ */ A({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = x(!1), o = x(null), s = x(null);
    f(() => t.tag ?? "div");
    const i = (_) => {
      const m = s.value.getBoundingClientRect(), y = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let b = le.center;
      return _.x < y.x ? _.y < y.y ? b = le.topLeft : b = le.bottomLeft : _.y < y.y ? b = le.topRight : b = le.bottomRight, o.value = b, o.value;
    }, c = (_) => {
      _.preventDefault(), n.value = !0, a("itemEntered", i(_));
    }, u = (_) => {
      n.value = !0, a("itemExited", i(_));
    }, p = (_) => {
      _.preventDefault(), a("itemMoved", i(_));
    }, h = (_) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(_.dataTransfer.getData("value"))))
        return !1;
      _.stopPropagation(), _.preventDefault(), a("itemAdded", JSON.parse(_.dataTransfer.getData("value")), o.value), n.value = !1;
    };
    return (_, m) => (r(), R(pe(t.tag), {
      ref_key: "handle",
      ref: s,
      class: F({ "is-bordered": n.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: h,
      onDragover: p
    }, {
      default: z(() => [
        T(_.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), ql = ["onClick"], Zl = {
  key: 0,
  class: "icon"
}, Rt = /* @__PURE__ */ A({
  __name: "list",
  props: {
    numbered: { type: Boolean },
    items: {},
    type: {},
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const l = e, t = ue(), a = f(() => {
      var s = ["block-list", "has-radius", `is-${l.type ?? "primary"}`];
      return l.compact && s.push("is-small"), l.outlined && s.push("is-outlined"), l.highlighted && s.push("is-highlighted"), s;
    }), n = f(() => l.items ? l.items.map((s, i) => ({
      name: s.name ?? `item-${i}`,
      classes: [
        s.type ? `is-${s.type}` : "",
        s.outlined ? "is-outlined" : "",
        s.highlighted ? "is-highlighted" : "",
        s.icon ? "has-icon" : "",
        s.onClick ? "is-clickable" : ""
      ],
      onClick: s.onClick,
      icon: s.icon
    })) : null), o = (s) => {
      s.onClick && s.onClick();
    };
    return (s, i) => (r(), R(pe(e.numbered == null || e.numbered == null || !e.numbered ? "ul" : "ol"), {
      class: F(a.value)
    }, {
      default: z(() => [
        n.value === null ? T(s.$slots, "default", { key: 0 }) : (r(!0), d(C, { key: 1 }, W(n.value, (c) => (r(), d(C, null, [
          v(t)[c.name] !== void 0 || v(t)[c.name] !== null || c.icon !== void 0 ? (r(), d("li", {
            key: 0,
            class: F(c.classes),
            onClick: (u) => o(c)
          }, [
            c.icon ? (r(), d("span", Zl, [
              P(H, {
                icon: c.icon
              }, null, 8, ["icon"])
            ])) : J("", !0),
            T(s.$slots, c.name)
          ], 10, ql)) : J("", !0)
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ql = ["onDragstart", "onDragover"], Xl = /* @__PURE__ */ A({
  __name: "sortable",
  props: {
    items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = x([]), o = x(-1), s = x(-1), i = x(null);
    j(t.items, (_, m) => {
      n.value = [...m];
    }), ce(() => {
      t.items !== null && (n.value = [...t.items]);
    });
    const c = (_) => {
      var m = _.target.getBoundingClientRect(), y = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let b = le.center;
      return _.y < y.y ? b = le.top : b = le.bottom, b;
    }, u = (_, m) => {
      m.stopPropagation(), o.value = _, m.dataTransfer.setData("value", null);
    }, p = (_, m) => {
      o.value && (m.stopPropagation(), _ != o.value ? (s.value = _, i.value = c(m)) : (s.value = -1, i.value = null));
    }, h = (_) => {
      if (o.value) {
        _.stopPropagation();
        var m = s.value + (i.value == le.top ? 0 : 1), y = n.value.splice(m, 1)[0];
        m >= o.value && m--, n.value.splice(m, 0, y), s.value = -1, i.value = null, o.value = -1, a("sorted", n.value);
      }
    };
    return (_, m) => (r(), R(Rt, {
      type: e.type,
      compact: e.compact,
      outlined: e.outlined,
      highlighted: e.highlighted,
      onDrop: h
    }, {
      default: z(() => [
        (r(!0), d(C, null, W(n.value, (y, b) => (r(), d(C, null, [
          U(M("li", null, [
            P(he, { light: !0 }, {
              default: z(() => [...m[1] || (m[1] = [
                Q(" ", -1)
              ])]),
              _: 1
            })
          ], 512), [
            [ne, s.value === b && o.value !== b && i.value === v(le).top]
          ]),
          M("li", {
            draggable: "true",
            onDragstart: (g) => u(b, g),
            onDragend: m[0] || (m[0] = (g) => o.value = null),
            onDragover: (g) => p(b, g),
            class: F({ "has-cursor": !0, "is-move": s.value == b, "is-grab": s.value != b })
          }, [
            T(_.$slots, "item", {
              item: y,
              index: b
            })
          ], 42, Ql),
          U(M("li", null, [
            P(he, { light: !0 }, {
              default: z(() => [...m[2] || (m[2] = [
                Q(" ", -1)
              ])]),
              _: 1
            })
          ], 512), [
            [ne, s.value === b && o.value !== b && i.value === v(le).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Kl,
  DropZone: Yl,
  Sortable: Xl
}, Symbol.toStringTag, { value: "Module" })), Ee = "HiddenFields", et = "DisabledFields", tn = (e) => e, de = (e, l) => {
  const t = l("Translate", tn);
  return f(() => e.translate ?? t);
};
function tt(e, l) {
  const t = l(Ee, ye(x([]))), a = l(et, ye(x([]))), n = f(() => t.value.filter((s) => s.indexOf(`${e}.`) === 0).map((s) => s.split(".")[1])), o = f(() => a.value.filter((s) => s.indexOf(`${e}.`) === 0).map((s) => s.split(".")[1]));
  return { hiddenValues: n, disabledValues: o };
}
async function at(e) {
  let l = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? l = t : l = Promise.resolve(t);
  let a = await l, n = [];
  return a.value !== void 0 ? n = a.value : n = a, n;
}
const an = { class: "tags has-addons" }, ln = { class: "tag is-link" }, nn = ["onClick"], sn = { key: 0 }, on = ["placeholder"], rn = { class: "dropdown-menu" }, un = { class: "dropdown-content" }, dn = ["onClick"], cn = {
  key: 1,
  class: "dropdown-item"
}, It = /* @__PURE__ */ A({
  __name: "autocomplete",
  props: {
    title: {},
    limit: {},
    callbackurl: {},
    values: {},
    fetch: { type: Function },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = Z(E), n = f(() => L("Form.AutoComplete.NoResults", a)), o = t, s = e, i = de(s, E), c = x([]), u = x(null), p = x(null), h = x(null), _ = x(null);
    j(u, async (k) => {
      if (k != null) {
        if (k.length >= 2)
          if (s.values != null && s.values != null) {
            let Y = [];
            for (let S = 0; S < s.values.length && ((s.values[S].name.toUpperCase().indexOf(k.toUpperCase()) >= 0 || s.values[S].id.toUpperCase().indexOf(k.toUpperCase()) >= 0) && Y.push(s.values[S]), Y.length != 10); S++)
              ;
            p.value = Y;
          } else {
            let S = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(k)}`)).json();
            S.length > 10 && S.splice(10, S.length - 10), p.value = S;
          }
      } else
        p.value = null, _.value.innerHTML = "";
    });
    const m = () => {
      if (c.value.length == 0)
        return null;
      const k = c.value.slice();
      return s.limit != null && s.limit == 1 ? k.length > 0 ? k[0] : null : k;
    }, y = async (k) => {
      if (k == null)
        c.value.length > 0 && c.value.splice(0, c.value.length), u.value = null;
      else {
        const Y = await Promise.all(
          (Array.isArray(k) ? k : [k]).map(async (S) => {
            if (S.id !== void 0 && S.name !== void 0)
              return S;
            if (s.values != null && s.values != null)
              return S.id !== void 0 ? s.values.find((w) => w.id === S.id) : s.values.find((w) => w.name.toUpperCase() === S.toUpperCase() || w.id.toUpperCase() === S);
            {
              let V = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${S.id === void 0 ? "q=" + encodeURIComponent(S) : "id=" + encodeURIComponent(S.id)}`)).json();
              return V.length > 0 ? (s.disabled && (V[0].readonly = !0), V[0]) : null;
            }
          })
        );
        c.value = Y.filter((S) => S !== null), s.limit !== void 0 && s.limit !== null && c.value.length > s.limit && c.value.splice(s.limit), o("valueChanged", { name: s.name, value: m() });
      }
    }, b = (k) => {
      k.preventDefault(), u.value = k.clipboardData.getData("text/plain");
    }, g = (k) => {
      switch (k.key) {
        case "Backspace":
          u.value != null && u.value.length > 0 && (u.value = u.value.substring(0, u.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          k.key.length == 1 && (u.value = (u.value == null ? "" : u.value) + k.key);
          break;
      }
    }, N = () => {
      u.value = null;
    }, D = () => {
      _.value.focus();
    }, B = (k) => {
      c.value.push(k), N(), o("valueChanged", { name: s.name, value: m() });
    }, X = (k) => {
      c.value.splice(k, 1), D(), o("valueChanged", { name: s.name, value: m() });
    };
    return l({
      /**
       * Gets the current value 
       */
      getValue: m,
      /**
       * Sets the current value
       * 
       * @param value AutoCompleteItem|AutoCompleteItem[]|string[]|null
       * @returns Promise<void>
       */
      setValue: y
    }), (k, Y) => (r(), d("div", {
      class: "control autocomplete",
      onBlur: N,
      onClick: D
    }, [
      M("div", {
        class: F(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", s.disabled ? "is-disabled" : ""])
      }, [
        (r(!0), d(C, null, W(c.value, (S, w) => (r(), d("div", {
          class: "control",
          key: w
        }, [
          M("div", an, [
            M("a", ln, O(v(i)(S.name)), 1),
            !S.readonly && !s.disabled ? (r(), d("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (V) => X(w)
            }, null, 8, nn)) : J("", !0)
          ])
        ]))), 128)),
        s.disabled ? J("", !0) : (r(), d("div", sn, [
          U(M("span", {
            ref_key: "contentSpan",
            ref: _,
            placeholder: v(i)(s.title ?? ""),
            contenteditable: "",
            class: F(h.value),
            onFocus: Y[0] || (Y[0] = (S) => {
              h.value = "is-focused";
            }),
            onBlur: Y[1] || (Y[1] = (S) => {
              h.value = null;
            }),
            onKeydown: g,
            onPaste: b
          }, null, 42, on), [
            [ne, s.limit === void 0 || s.limit === null || c.value.length < s.limit]
          ])
        ]))
      ], 2),
      s.disabled ? J("", !0) : (r(), d("div", {
        key: 0,
        class: F(["dropdown", { "is-active": p.value != null && u.value != null && u.value != "" }])
      }, [
        M("div", rn, [
          M("div", un, [
            p.value != null && p.value.length > 0 ? (r(!0), d(C, { key: 0 }, W(p.value, (S) => (r(), d("a", {
              class: "dropdown-item",
              onClick: (w) => B(S)
            }, O(v(i)(S.name)), 9, dn))), 256)) : (r(), d("a", cn, O(n.value), 1))
          ])
        ])
      ], 2))
    ], 32));
  }
}), Le = /* @__PURE__ */ A({
  __name: "button",
  props: {
    label: {},
    sstyle: {},
    icon: {},
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["buttonClicked"],
  setup(e, { emit: l }) {
    const t = e, a = l, n = de(t, E);
    return (o, s) => (r(), R(te, {
      type: t.sstyle,
      icon: t.icon,
      title: v(n)(t.label ?? ""),
      onClick: s[0] || (s[0] = (i) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), pn = ["for"], mn = ["value", "disabled", "id"], Wt = /* @__PURE__ */ A({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function, null] },
    inputId: {},
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = Z(E), o = f(() => L("Form.Error", n)), s = t, i = de(a, E), c = x([]), u = x(!1), p = f(async () => {
      if (a.values === null)
        return [];
      {
        let b = await at(a.values), g = b.filter((N) => N.selected).map((N) => N.value);
        return c.value === null || c.value.length == 0 ? c.value = g.length > 0 ? [...g] : [] : (g = c.value, b = b.map((N) => ({
          label: N.label,
          value: N.value,
          selected: g.some((D) => D === N.value)
        }))), b;
      }
    });
    j(c, (b) => {
      s("valueChanged", { name: a.name, value: h() });
    });
    const h = () => c.value.length == 0 ? null : c.value, _ = (b) => {
      u.value = !0, c.value.splice(0), b !== null && (c.value = [...b]), u.value = !1, s("valueChanged", { name: a.name, value: h() });
    }, { hiddenValues: m, disabledValues: y } = tt(a.name, E);
    return l({
      /**
       * Gets the current value 
       */
      getValue: h,
      /**
       * Sets the current value
       * 
       * @param value any[]|null
       * @returns void
       */
      setValue: _
    }), (b, g) => (r(), d("div", null, [
      P(be, { promise: p.value }, {
        default: z(({ response: N }) => [
          N !== null ? (r(!0), d(C, { key: 0 }, W(N, (D, B) => U((r(), d("label", {
            class: "checkbox is-block",
            for: `${a.inputId}-${B}`
          }, [
            U(M("input", {
              type: "checkbox",
              class: "checkbox",
              value: D.value,
              "onUpdate:modelValue": g[0] || (g[0] = (X) => c.value = X),
              disabled: a.disabled || v(y).some((X) => X === D.value.toString()),
              id: `${a.inputId}-${B}`
            }, null, 8, mn), [
              [Ue, c.value]
            ]),
            Q(" " + O(v(i)(D.label)), 1)
          ], 8, pn)), [
            [ne, !v(m).some((X) => X === D.value.toString())]
          ])), 256)) : J("", !0)
        ]),
        rejected: z(() => [
          P(v(he), {
            type: v(ie).danger,
            message: o.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), hn = ["for"], bn = ["name", "disabled", "id"], vn = {
  key: 0,
  class: "help is-danger"
}, Lt = /* @__PURE__ */ A({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    inputId: {},
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = de(a, E), s = f(() => o.value(a.label)), i = x(!1);
    return j(i, (p) => n("valueChanged", { name: a.name, value: p })), l({
      /**
       * Gets the current value 
       */
      getValue: () => i.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (p) => {
        i.value = p;
      }
    }), (p, h) => (r(), d("label", {
      class: "checkbox",
      for: a.inputId
    }, [
      U(M("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": h[0] || (h[0] = (_) => i.value = _),
        id: a.inputId
      }, null, 8, bn), [
        [Ue, i.value]
      ]),
      Q(" " + O(s.value) + " ", 1),
      a.required ? (r(), d("span", vn, "*")) : J("", !0)
    ], 8, hn));
  }
}), We = (e, l) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + l), t;
}, ee = (e, l, t) => {
  let a = e;
  for (; a.length < t; )
    a = l + a;
  return a;
}, Je = (e, l, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${ee(t.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let o = "";
      switch (t.getDay()) {
        case 0:
          o = "Sunday";
          break;
        case 1:
          o = "Monday";
          break;
        case 2:
          o = "Tuesday";
          break;
        case 3:
          o = "Wednesday";
          break;
        case 4:
          o = "Thursday";
          break;
        case 5:
          o = "Friday";
          break;
        case 6:
          o = "Saturday";
          break;
      }
      a += `${L("Date.Weekdays." + (e.length > 3 ? o : o.substring(0, 3)), l)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      a += `${ee(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : ee(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${ee((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${ee(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let s = t.getTimezoneOffset() * -1, i = parseInt((s / 60).toFixed(0)), c = s - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${ee(Math.abs(i).toString(), "0", 2) + ":" + ee(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${i < 0 ? "-" : "+"}${ee(Math.abs(i).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${ee(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${ee((t.getMonth() + 1).toString(), "0", e.length)}`;
      break;
    case "MMM":
    case "MMMM":
      let u = "";
      switch (t.getMonth()) {
        case 0:
          u = "January";
          break;
        case 1:
          u = "February";
          break;
        case 2:
          u = "March";
          break;
        case 3:
          u = "April";
          break;
        case 4:
          u = "May";
          break;
        case 5:
          u = "June";
          break;
        case 6:
          u = "July";
          break;
        case 7:
          u = "August";
          break;
        case 8:
          u = "September";
          break;
        case 9:
          u = "October";
          break;
        case 10:
          u = "November";
          break;
        case 11:
          u = "December";
          break;
      }
      a += `${L("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), l)}`;
      break;
    case "s":
    case "ss":
      a += `${ee(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var n = t.getFullYear().toString(); n.length > 2; )
        n = n.substring(1);
      a += `${ee(n.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${ee(t.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      a += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return a;
}, ke = (e, l, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00", l = l ?? f(() => "en");
  let a = "", n = "";
  for (var o = 0; o < t.length; o++)
    switch (t.charAt(o)) {
      case "\\":
        n != "" && (a += Je(n, l, e), n = ""), a += t.charAt(o + 1), o++;
        break;
      case "d":
      case "f":
      case "F":
      case "g":
      case "h":
      case "H":
      case "K":
      case "m":
      case "M":
      case "s":
      case "t":
      case "y":
      case "z":
        n != "" && n.charAt(0) != t.charAt(o) ? (a += Je(n, l, e), n = "") : n += t.charAt(o);
        break;
      default:
        n != "" && (a += Je(n, l, e), n = ""), a += t.charAt(o);
        break;
    }
  return n != "" && (a += Je(n, l, e), n = ""), a;
}, gn = { class: "control" }, yn = ["id", "name", "disabled"], ct = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), lt = /* @__PURE__ */ A({
  __name: "time",
  props: {
    inputId: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null), s = f(() => {
      if (o.value === null || o.value === "")
        return null;
      var u = Number(o.value.substring(3, 5)), p = Number(o.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return j(o, (u) => {
      n("valueChanged", { name: a.name, value: u });
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => o.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (u) => {
        if (u === "")
          u = null;
        else if (u !== null && ct.test(u)) {
          var p = ct.exec(u);
          u = `${p[3] === "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)}:${p[2]}:00`;
        }
        o.value = u;
      }
    }), (u, p) => (r(), d("div", gn, [
      U(M("input", {
        class: "input is-time",
        id: a.inputId,
        name: a.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (h) => o.value = h),
        disabled: a.disabled,
        style: Ae(s.value)
      }, null, 12, yn), [
        [De, o.value]
      ])
    ]));
  }
}), fn = { class: "hero-body" }, _n = { class: "title" }, kn = {
  key: 0,
  class: "subtitle"
}, Sn = /* @__PURE__ */ A({
  __name: "banner",
  props: {
    type: { default: q.primary },
    title: {},
    subtitle: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("section", {
      class: F(["hero", "is-small", "has-text-centered", e.type === void 0 ? "" : "is-" + l.type])
    }, [
      M("div", fn, [
        M("p", _n, O(l.title), 1),
        l.subtitle ? (r(), d("p", kn, O(l.subtitle), 1)) : J("", !0)
      ])
    ], 2));
  }
}), Mn = { class: "box" }, Vt = /* @__PURE__ */ A({
  __name: "box",
  setup(e) {
    return (l, t) => (r(), d("div", Mn, [
      T(l.$slots, "default")
    ]));
  }
}), Dn = { key: 0 }, $n = ["onClick"], An = /* @__PURE__ */ A({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Oe.left },
    size: { default: G.normal },
    seperator: {}
  },
  setup(e) {
    const l = e, t = f(() => {
      let n = ["breadcrumb"];
      return l.alignment && l.alignment !== Oe.left && n.push(`is-${l.alignment}`), l.size && l.size !== G.normal && n.push(`is-${l.size}`), l.seperator && n.push(`has-${l.seperator}-seperator`), n;
    }), a = (n) => {
      n !== void 0 && n();
    };
    return (n, o) => (r(), d("nav", {
      class: F(t.value),
      "aria-label": "breadcrumbs"
    }, [
      l.breadCrumbs !== null ? (r(), d("ul", Dn, [
        (r(!0), d(C, null, W(l.breadCrumbs, (s) => (r(), d("li", {
          class: F({ "is-active": s.active })
        }, [
          M("a", {
            onClick: (i) => a(s.onClick)
          }, [
            s.icon ? (r(), d("span", {
              key: 0,
              class: F(["icon", s.onClick ? "is-clickable" : ""])
            }, [
              P(v(H), {
                icon: s.icon
              }, null, 8, ["icon"])
            ], 2)) : J("", !0),
            Q(" " + O(s.title), 1)
          ], 8, $n)
        ], 2))), 256))
      ])) : J("", !0)
    ], 2));
  }
}), Jn = {
  key: 0,
  class: "card-icon"
}, Nn = { class: "card-icon-wrapper" }, Fn = {
  key: 1,
  class: "card-header"
}, wn = {
  key: 2,
  class: "card-content"
}, On = {
  key: 3,
  class: "card-footer"
}, jt = /* @__PURE__ */ A({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(e) {
    const l = ue(), t = e, a = {
      addon_class: "card-footer-item"
    }, n = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (o, s) => (r(), d("div", {
      class: F(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon ? (r(), d("div", Jn, [
        M("div", Nn, [
          P(H, {
            icon: t.icon,
            size: v(se).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : J("", !0),
      v(l).header ? (r(), d("div", Fn, [
        T(o.$slots, "header", me(fe(n)))
      ])) : J("", !0),
      v(l).content ? (r(), d("div", wn, [
        T(o.$slots, "content")
      ])) : J("", !0),
      v(l).footer ? (r(), d("div", On, [
        T(o.$slots, "footer", me(fe(a)))
      ])) : J("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ A({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const l = ue(), t = e, a = f(() => {
      let o = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (o = o.concat(t.modifiers.map((s) => `is-${s}`))), o;
    }), n = f(() => t.columns.map((o, s) => {
      let i = [
        "column",
        o.class ?? "",
        o.size ? `is-${o.size}` : "",
        o.offset ? `is-offset-${o.offset}` : ""
      ];
      return o.border && (o.border.some((c) => c === Ye.all) ? i.push("is-bordered") : o.border.forEach((c) => i.push(`is-bordered-${c}`))), {
        name: o.name ?? `col-${s}`,
        class: i
      };
    }));
    return (o, s) => (r(), d("div", {
      class: F(a.value)
    }, [
      (r(!0), d(C, null, W(n.value, (i) => (r(), d(C, null, [
        v(l)[i.name] ? (r(), d("div", {
          key: 0,
          class: F(i.class)
        }, [
          T(o.$slots, i.name)
        ], 2)) : J("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Tn = ["aria-label"], xn = /* @__PURE__ */ A({
  __name: "footer",
  props: {
    aria_label: { default: "footer" }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("footer", {
      class: "footer",
      "aria-label": l.aria_label
    }, [
      T(t.$slots, "default")
    ], 8, Tn));
  }
}), Bn = ["aria-label"], Pn = {
  key: 0,
  class: "level-left"
}, Cn = {
  key: 0,
  class: "level-item"
}, En = {
  key: 0,
  class: "level-item"
}, zn = {
  key: 2,
  class: "level-right"
}, Rn = {
  key: 0,
  class: "level-item"
}, In = /* @__PURE__ */ A({
  __name: "level",
  props: {
    aria_label: {},
    left_slots: {},
    right_slots: {},
    slots: {}
  },
  setup(e) {
    const l = e, t = ue();
    return (a, n) => (r(), d("nav", {
      class: "level",
      "aria-label": l.aria_label
    }, [
      l.left_slots ? (r(), d("div", Pn, [
        (r(!0), d(C, null, W(l.left_slots, (o) => (r(), d(C, null, [
          v(t)[o] ? (r(), d("div", Cn, [
            T(a.$slots, o)
          ])) : J("", !0)
        ], 64))), 256))
      ])) : J("", !0),
      l.slots ? (r(!0), d(C, { key: 1 }, W(l.slots, (o) => (r(), d(C, null, [
        v(t)[o] ? (r(), d("div", En, [
          T(a.$slots, o)
        ])) : J("", !0)
      ], 64))), 256)) : J("", !0),
      l.right_slots ? (r(), d("div", zn, [
        (r(!0), d(C, null, W(l.right_slots, (o) => (r(), d(C, null, [
          v(t)[o] ? (r(), d("div", Rn, [
            T(a.$slots, o)
          ])) : J("", !0)
        ], 64))), 256))
      ])) : J("", !0)
    ], 8, Bn));
  }
}), Wn = { class: "media" }, Ln = {
  key: 0,
  class: "media-left"
}, Vn = { class: "media-content" }, jn = {
  key: 1,
  class: "media-right"
}, Un = /* @__PURE__ */ A({
  __name: "media",
  setup(e) {
    const l = ue();
    return (t, a) => (r(), d("article", Wn, [
      v(l).left_figure ? (r(), d("figure", Ln, [
        T(t.$slots, "left_figure")
      ])) : J("", !0),
      M("div", Vn, [
        T(t.$slots, "content")
      ]),
      v(l).right_section ? (r(), d("div", jn, [
        T(t.$slots, "right_section")
      ])) : J("", !0)
    ]));
  }
}), Gn = { class: "modal-content" }, Hn = /* @__PURE__ */ A({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l;
    return (n, o) => (r(), d("div", {
      class: F({ modal: !0, "is-active": t.display }),
      style: Ae(`z-index:${t.z_index}`)
    }, [
      o[1] || (o[1] = M("div", { class: "modal-background" }, null, -1)),
      M("div", Gn, [
        T(n.$slots, "default")
      ]),
      t.has_close ? (r(), d("button", {
        key: 0,
        class: "modal-close is-large",
        "aria-label": "close",
        onClick: o[0] || (o[0] = (s) => a("close"))
      })) : J("", !0)
    ], 6));
  }
}), Kn = {
  key: 0,
  class: "card-icon"
}, Yn = { class: "card-icon-wrapper" }, qn = {
  key: 1,
  class: "modal-card-head"
}, Zn = {
  key: 2,
  class: "modal-card-body"
}, Qn = {
  key: 3,
  class: "modal-card-foot"
}, Ut = /* @__PURE__ */ A({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    max_width: { type: Boolean },
    max_height: { type: Boolean },
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    icon: {}
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = ue(), a = e, n = l, o = {
      addon_class: "card-footer-item"
    }, s = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-header-icon"
    }, i = f(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, u) => (r(), d("div", {
      class: F(["modal", { "is-active": a.show }])
    }, [
      u[1] || (u[1] = M("div", { class: "modal-background" }, null, -1)),
      M("div", {
        class: F(["modal-card", i.value])
      }, [
        a.icon ? (r(), d("div", Kn, [
          M("div", Yn, [
            P(H, {
              icon: a.icon,
              size: v(se).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : J("", !0),
        v(t).header ? (r(), d("div", qn, [
          T(c.$slots, "header", me(fe(s))),
          a.has_close ? (r(), d("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (p) => n("close"))
          })) : J("", !0)
        ])) : J("", !0),
        v(t).content ? (r(), d("div", Zn, [
          T(c.$slots, "content")
        ])) : J("", !0),
        v(t).footer ? (r(), d("div", Qn, [
          T(c.$slots, "footer", me(fe(o)))
        ])) : J("", !0)
      ], 2)
    ], 2));
  }
}), Xn = {
  key: 0,
  class: "panel-heading"
}, es = {
  key: 1,
  class: "panel-tabs"
}, ts = {
  key: 0,
  class: "panel-block"
}, as = /* @__PURE__ */ A({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    hidden_sections: {}
  },
  setup(e) {
    const l = ue(), t = e, a = f(() => t.block_names ?? ["default"]), n = f(() => [
      t.type ? `is-${t.type}` : "",
      t.full_width ? "is-fullwidth" : "",
      t.full_height ? "is-fullheight" : ""
    ]);
    return (o, s) => (r(), d("div", {
      class: F(["panel", n.value])
    }, [
      v(l).header ? U((r(), d("div", Xn, [
        T(o.$slots, "header")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("header")]
      ]) : J("", !0),
      v(l).tabs ? U((r(), d("div", es, [
        T(o.$slots, "tabs")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : J("", !0),
      (r(!0), d(C, null, W(a.value, (i) => (r(), d(C, null, [
        v(l)[i] ? U((r(), d("div", ts, [
          T(o.$slots, i)
        ], 512)), [
          [ne, !(t.hidden_sections ?? []).includes(i)]
        ]) : J("", !0)
      ], 64))), 256))
    ], 2));
  }
}), ls = /* @__PURE__ */ A({
  __name: "section",
  props: {
    size: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), d("section", {
      class: F(["section", l.size ? `is-${l.size}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), ns = { key: 0 }, ss = { key: 1 }, os = { key: 2 }, st = /* @__PURE__ */ A({
  __name: "table",
  props: {
    scrollable: { type: Boolean, default: !1 },
    fixed_header: { type: Boolean, default: !1 },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const l = ue(), t = e, a = f(() => [
      t.scrollable ? "table-container" : "",
      t.fixed_header && !t.scrollable ? "is-fixed" : ""
    ]), n = f(() => [
      "table",
      "is-striped",
      "is-hoverable",
      t.fixed_header && !t.scrollable ? "is-fixed" : "",
      t.full_width ? "is-fullwidth" : "",
      t.narrow ? "is-narrow" : ""
    ]);
    return (o, s) => (r(), d("div", {
      class: F(a.value)
    }, [
      M("table", {
        class: F(n.value)
      }, [
        v(l).thead ? (r(), d("thead", ns, [
          T(o.$slots, "thead")
        ])) : J("", !0),
        v(l).tbody ? (r(), d("tbody", ss, [
          T(o.$slots, "tbody")
        ])) : J("", !0),
        v(l).tfoot ? (r(), d("tfoot", os, [
          T(o.$slots, "tfoot")
        ])) : J("", !0)
      ], 2)
    ], 2));
  }
}), rs = ["href", "onClick"], is = {
  key: 0,
  class: "icon is-small"
}, us = { style: { width: "100px" } }, ds = /* @__PURE__ */ A({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: { default: qe.left },
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const l = e, t = f(() => [
      "tabs",
      `is-${l.alignment}`,
      l.type ? `is-${l.type}` : "",
      l.full_width ? "is-fullwidth" : ""
    ]), a = (n, o) => {
      (o.href === null || o.href === void 0) && o.onClick !== void 0 && (n.preventDefault(), o.onClick());
    };
    return (n, o) => (r(), d("div", {
      class: F(t.value)
    }, [
      M("ul", null, [
        P(v(be), {
          promise: l.tabs
        }, {
          default: z(({ response: s }) => [
            (r(!0), d(C, null, W(s, (i) => (r(), d("li", {
              class: F({ "is-active": i.active })
            }, [
              M("a", {
                href: i.href,
                onClick: (c) => a(c, i)
              }, [
                i.icon ? (r(), d("span", is, [
                  P(v(H), {
                    icon: i.icon
                  }, null, 8, ["icon"])
                ])) : J("", !0),
                M("span", null, O(i.title), 1)
              ], 8, rs)
            ], 2))), 256))
          ]),
          pending: z(() => [
            M("li", us, [
              P(v(_e), {
                size: v(G).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), cs = { class: "slideout-content" }, ps = {
  key: 1,
  class: "slideout-head"
}, ms = { class: "slideout-body" }, hs = {
  key: 2,
  class: "slideout-foot"
}, bs = /* @__PURE__ */ A({
  __name: "slideout",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    full_width: { type: Boolean },
    type: {},
    not_animated: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = ue(), a = {
      addon_class: ""
    }, n = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, o = e, s = l, i = f(() => [
      "slideout",
      o.show ? "is-active" : "",
      o.type !== void 0 && o.type !== null ? `is-${o.type}` : "",
      o.full_width ? "is-fullwidth" : "",
      o.not_animated ? "no-animation" : ""
    ]);
    return (c, u) => (r(), d("div", {
      class: F(i.value)
    }, [
      M("div", {
        class: "slideout-background",
        onClick: u[0] || (u[0] = (p) => s("close"))
      }),
      M("div", cs, [
        o.has_close ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: u[1] || (u[1] = (p) => s("close"))
        })) : J("", !0),
        v(t).header ? (r(), d("div", ps, [
          T(c.$slots, "header", me(fe(n)))
        ])) : J("", !0),
        M("div", ms, [
          v(t).content ? T(c.$slots, "content", { key: 0 }) : J("", !0),
          T(c.$slots, "default")
        ]),
        v(t).footer ? (r(), d("div", hs, [
          T(c.$slots, "footer", me(fe(a)))
        ])) : J("", !0)
      ])
    ], 2));
  }
}), vs = ["onClick"], gs = { key: 1 }, ys = {
  key: 0,
  class: "step-details"
}, fs = { class: "step-title" }, _s = { key: 0 }, ks = { class: "steps-content" }, Ss = { class: "steps-actions" }, Ms = { class: "steps-action" }, Ds = {
  key: 0,
  class: "steps-action"
}, $s = {
  key: 1,
  class: "steps-action"
}, As = /* @__PURE__ */ A({
  __name: "step-wizard",
  props: {
    steps: {},
    use_previous_next: { type: Boolean, default: !0 },
    size: { default: G.normal },
    starting_index: {},
    orientation: { default: xe.default }
  },
  emits: ["done", "changedStep"],
  setup(e, { expose: l, emit: t }) {
    const a = ue(), n = Z(E), o = f(() => L("Pagination.Previous", n)), s = f(() => L("Pagination.Next", n)), i = f(() => L("Wizard.Done", n)), c = e, u = t, p = x(c.starting_index ?? 0);
    return j(p, (h, _) => {
      u("changedStep", h);
    }), l({
      /**
       * Used to move to a given step in the wizard
       * 
       * @param index the step index to move to
       */
      moveToStep: (h) => {
        p.value = h;
      }
    }), (h, _) => (r(), d("div", {
      class: F(["steps-container", c.orientation === v(xe).default ? "" : `${c.orientation}`])
    }, [
      M("ul", {
        class: F(["steps", c.size === v(G).normal ? "" : `is-${c.size}`])
      }, [
        (r(!0), d(C, null, W(c.steps, (m, y) => (r(), d("li", {
          class: F(["step-item", y < p.value ? "is-completed" : "", y === p.value ? "is-active" : "", m.type ? `is-${m.type}` : ""])
        }, [
          M("div", {
            class: "step-marker is-clickable",
            onClick: (b) => u("changedStep", y)
          }, [
            m.icon ? (r(), R(H, {
              key: 0,
              icon: m.icon
            }, null, 8, ["icon"])) : (r(), d("span", gs, O(y + 1), 1))
          ], 8, vs),
          m.title !== "" ? (r(), d("div", ys, [
            M("p", fs, O(m.title), 1),
            m.description ? (r(), d("p", _s, O(m.description), 1)) : J("", !0)
          ])) : J("", !0)
        ], 2))), 256))
      ], 2),
      M("div", ks, [
        (r(!0), d(C, null, W(c.steps, (m, y) => (r(), d(C, null, [
          v(a)[m.name] ? (r(), d("div", {
            key: 0,
            class: F(["step-content", y === p.value ? "is-active" : ""])
          }, [
            T(h.$slots, m.name)
          ], 2)) : J("", !0)
        ], 64))), 256))
      ]),
      M("div", Ss, [
        c.use_previous_next ? (r(), d(C, { key: 0 }, [
          M("div", Ms, [
            P(te, {
              title: o.value,
              disabled: p.value === 0,
              onClick: _[0] || (_[0] = () => {
                p.value--;
              })
            }, null, 8, ["title", "disabled"])
          ]),
          p.value + 1 < c.steps.length ? (r(), d("div", Ds, [
            P(te, {
              title: s.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: _[1] || (_[1] = () => {
                p.value++;
              })
            }, null, 8, ["title", "disabled"])
          ])) : J("", !0),
          p.value + 1 === c.steps.length ? (r(), d("div", $s, [
            P(te, {
              title: i.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: _[2] || (_[2] = () => {
                u("done");
              })
            }, null, 8, ["title", "disabled"])
          ])) : J("", !0)
        ], 64)) : (r(), d(C, { key: 1 }, [
          v(a).actions ? T(h.$slots, "actions", { key: 0 }) : J("", !0),
          (r(!0), d(C, null, W(c.steps, (m, y) => (r(), d(C, null, [
            v(a)[`actions-${m.name}`] && y === p.value ? T(h.$slots, `actions-${m.name}`, { key: 0 }) : J("", !0)
          ], 64))), 256))
        ], 64))
      ])
    ], 2));
  }
}), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Sn,
  Box: Vt,
  Breadcrumbs: An,
  Card: jt,
  ColumnContainer: nt,
  Footer: xn,
  Level: In,
  List: Rt,
  Media: Un,
  Modal: Hn,
  ModalCard: Ut,
  Panel: as,
  Section: ls,
  Slideout: bs,
  StepWizard: As,
  Table: st,
  Tabs: ds
}, Symbol.toStringTag, { value: "Module" })), Ns = { class: "control has-icons-left has-icons-right" }, Fs = ["name", "id", "placeholder", "disabled"], ws = ["onClick"], Os = {
  colspan: "100%",
  class: "has-text-centered"
}, $e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Ne = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Gt = /* @__PURE__ */ A({
  __name: "date",
  props: {
    includeTime: { type: Boolean },
    inputId: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = x(), n = e, o = t, s = x(!1), i = x(null), c = x(null), u = oa({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDate()
    }), p = Z(E), h = ye({
      Sun: f(() => L("Date.Weekdays.Sun", p)),
      Mon: f(() => L("Date.Weekdays.Mon", p)),
      Tue: f(() => L("Date.Weekdays.Tue", p)),
      Wed: f(() => L("Date.Weekdays.Wed", p)),
      Thu: f(() => L("Date.Weekdays.Thu", p)),
      Fri: f(() => L("Date.Weekdays.Fri", p)),
      Sat: f(() => L("Date.Weekdays.Sat", p))
    }), _ = f(() => i.value !== null && (n.includeTime ? Ne : $e).test(i.value)), m = () => {
      if (i.value === null || i.value === "")
        return null;
      {
        if (!Ne.test(i.value) && n.includeTime)
          return null;
        if (!n.includeTime && !$e.test(i.value))
          return null;
        if ($e.test(i.value) && n.includeTime)
          return null;
        let S = n.includeTime ? Ne.exec(i.value) : $e.exec(i.value);
        return new Date(
          parseInt(S[3]),
          parseInt(S[2]) - 1,
          parseInt(S[1]),
          n.includeTime ? parseInt(S[4]) : 0,
          n.includeTime ? parseInt(S[5]) : 0,
          0,
          0
        );
      }
    };
    j(i, (S) => {
      if (S === null)
        o("valueChanged", { name: n.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!$e.test(S) && !Ne.test(S)) {
        S = S.replaceAll(/[^0-9]/g, "");
        for (var w = [], V = 0; V < S.length; V += 2)
          V == 4 ? (w.push(S.substring(V, Math.min(S.length - V, 4) + V)), V += 2) : w.push(S.substring(V, Math.min(S.length - V, 2) + V));
        w.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(w[0]) || w.splice(0), w.length > 1 && (/^[0-3]/.test(w[1]) ? /^(01|03|05|07|08|10|12)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(w[1]) || w.splice(1) : /^(02|04|06|09|11)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(w[1]) || w.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(w[1]) || w.splice(1) : w.splice(1)), w.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(w[3]) || w.splice(3)), w.length > 4 && (/^[0-5][0-9]?$/.test(w[4]) || w.splice(4))), S = w.join(""), !n.includeTime && S.length > 8 && (S = S.substring(0, 8)), S.length >= 2 && (S = S.substring(0, 2) + "-" + (S.length > 2 ? S.substring(2) : "")), S.length >= 5 && (S = S.substring(0, 5) + "-" + (S.length > 5 ? S.substring(5) : "")), S.length >= 9 && n.includeTime && (S = S.substring(0, 9) + " " + (S.length > 9 ? S.substring(9) : "")), S.length >= 11 && (S = S.substring(0, 11) + ":" + (S.length > 11 ? S.substring(11) : "")), i.value = S;
      } else {
        var oe = m();
        _ && o("valueChanged", { name: n.name, value: oe }), u.Month = oe?.getMonth() ?? (/* @__PURE__ */ new Date()).getMonth(), u.Year = oe?.getFullYear() ?? (/* @__PURE__ */ new Date()).getFullYear();
      }
    });
    const y = f(() => ke(new Date(u.Year, u.Month, 1), p, "MMMM")), b = f(() => {
      var S = [], w = new Date(u.Year, u.Month, 1);
      w = We(w, w.getDay() * -1);
      for (var V = m(), oe = We(new Date(u.Year, u.Month, 1), 32).getMonth(); w.getMonth() != oe; ) {
        for (var ze = [], ot = 0; ot < 7; ot++)
          ze.push({
            Number: w.getDate(),
            Disabled: w.getMonth() != u.Month,
            isToday: ke(w, p, "yyyy-MM-dd") == ke(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: V != null && ke(w, p, "yyyy-MM-dd") == ke(V, p, "yyyy-MM-dd")
          }), w = We(w, 1);
        S.push(ze);
      }
      return S;
    });
    l({
      /**
       * Gets the current value 
       */
      getValue: m,
      /**
       * Sets the current value
       * 
       * @param value Date|null
       * @returns void
       */
      setValue: function(S) {
        S === null ? i.value = null : i.value = ke(S, p, `dd-MM-yyyy${n.includeTime ? " HH:mm" : ""}`);
      }
    });
    const N = (S) => {
      S.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + S.value : i.value = `${ee((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${ee((u.Month + 1).toString(), "0", 2)}-${u.Year} ${S.value}`;
    }, D = (S) => {
      if (!S.Disabled && !S.isSelected)
        if (i.value === null)
          i.value = `${ee(S.Number.toString(), "0", 2)}-${ee((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (n.includeTime ? a.value?.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var w = i.value.split(" ");
          w[0] = `${ee(S.Number.toString(), "0", 2)}-${ee((u.Month + 1).toString(), "0", 2)}-${u.Year}`, i.value = `${w[0]}${w.length > 1 ? " " + w[1] : ""}`;
        }
    }, B = () => {
      i.value = c.value, s.value = !1;
    }, X = () => {
      n.disabled || (c.value = i.value, s.value = !0);
    }, k = () => {
      n.disabled || (i.value = null);
    }, Y = (S) => {
      u.Month + S == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + S == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += S;
    };
    return (S, w) => (r(), d("div", null, [
      M("div", Ns, [
        U(M("input", {
          class: "input is-expanded",
          name: n.name,
          id: n.inputId,
          type: "text",
          "onUpdate:modelValue": w[0] || (w[0] = (V) => i.value = V),
          placeholder: "DD-MM-YYYY" + (n.includeTime ? " HH:mm" : ""),
          disabled: n.disabled
        }, null, 8, Fs), [
          [De, i.value]
        ]),
        M("span", {
          class: "icon is-small is-left is-clickable",
          onClick: X
        }, [
          P(v(H), {
            icon: "calendar-alt",
            size: v(se).xlarge
          }, null, 8, ["size"])
        ]),
        M("span", {
          class: "icon is-small is-right is-clickable",
          onClick: k
        }, [
          P(v(H), {
            icon: "window-close",
            size: v(se).xlarge
          }, null, 8, ["size"])
        ])
      ]),
      P(v(Ut), {
        show: s.value,
        icon: "calendar-alt"
      }, {
        header: z(() => [
          P(v(nt), {
            class: "card-header-title",
            columns: [{ name: "left" }, { name: "title", class: "has-text-centered" }, { name: "right", class: "has-text-right" }]
          }, {
            left: z(() => [
              P(v(H), {
                class: "is-clickable",
                icon: "arrow-circle-left",
                onClick: w[1] || (w[1] = (V) => Y(-1))
              })
            ]),
            title: z(() => [
              Q(O(y.value) + " " + O(u.Year), 1)
            ]),
            right: z(() => [
              P(v(H), {
                class: "is-clickable",
                icon: "arrow-circle-right",
                onClick: w[2] || (w[2] = (V) => Y(1))
              })
            ]),
            _: 1
          })
        ]),
        content: z(() => [
          P(v(st), { full_width: !0 }, Be({
            thead: z(() => [
              M("tr", null, [
                M("th", null, O(v(h).Sun), 1),
                M("th", null, O(v(h).Mon), 1),
                M("th", null, O(v(h).Tue), 1),
                M("th", null, O(v(h).Wed), 1),
                M("th", null, O(v(h).Thu), 1),
                M("th", null, O(v(h).Fri), 1),
                M("th", null, O(v(h).Sat), 1)
              ])
            ]),
            tbody: z(() => [
              (r(!0), d(C, null, W(b.value, (V) => (r(), d("tr", null, [
                (r(!0), d(C, null, W(V, (oe) => (r(), d("td", {
                  class: F(["is-unselectable has-text-centered", oe.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", oe.isToday ? "has-background-primary-dark has-text-primary-light" : "", oe.isSelected ? "has-background-success-dark has-text-success-light" : ""]),
                  onClick: (ze) => D(oe)
                }, O(oe.Number), 11, ws))), 256))
              ]))), 256))
            ]),
            _: 2
          }, [
            n.includeTime ? {
              name: "tfoot",
              fn: z(() => [
                M("tr", null, [
                  M("td", Os, [
                    P(lt, {
                      ref: a.value,
                      name: `${n.name}-time`,
                      disabled: n.disabled,
                      onValueChanged: N
                    }, null, 8, ["name", "disabled"])
                  ])
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        footer: z(({ addon_class: V }) => [
          P(v(xt), {
            class: F(V),
            disabled: !_.value,
            onClick: w[3] || (w[3] = (oe) => s.value = !1)
          }, null, 8, ["class", "disabled"]),
          P(v(Tt), {
            class: F(V),
            onClick: B
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Ht = /* @__PURE__ */ A({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: l, emit: t }) {
    let a, n;
    const o = va(E);
    Pe([`${o}summernote-lite.min.css`]), [a, n] = ra(() => import(`${o}summernote`)), await a, n();
    const s = x(null), i = e, c = t;
    return j(() => i.disabled, (h) => {
      s.value != null && $(s.value).summernote(h ? "disable" : "enable");
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => $(s.value).summernote("code"),
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (h) => {
        $(s.value).summernote("code", h);
      }
    }), ce(() => {
      $(s.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(h) {
            c("valueChanged", { name: i.name, value: h });
          }
        }
      }), (i.disabled ?? !1) && $(s.value).summernote("disable");
    }), ia(() => {
      $(s.value).summernote("destroy");
    }), (h, _) => (r(), d("div", {
      class: "summernote",
      ref_key: "snote",
      ref: s
    }, null, 512));
  }
}), Ve = /* @__PURE__ */ A({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const l = e, t = de(l, E);
    return (a, n) => (r(), R(pe(l.subtype), { class: "title" }, {
      default: z(() => [
        Q(O(v(t)(l.label ?? "")), 1)
      ]),
      _: 1
    }));
  }
}), Ts = ["name"], Kt = /* @__PURE__ */ A({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null);
    return j(o, (c) => n("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => o.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (c) => {
        o.value = c;
      }
    }), (c, u) => U((r(), d("input", {
      type: "hidden",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => o.value = p)
    }, null, 8, Ts)), [
      [De, o.value]
    ]);
  }
}), xs = ["id", "name", "disabled", "min", "max", "step"], Yt = /* @__PURE__ */ A({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    inputId: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null), s = () => {
      if (o.value === "" || o.value === null)
        return null;
      let c = parseInt(o.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, i = (c) => {
      o.value = c === null ? "" : c.toString();
    };
    return j([o], (c) => n("valueChanged", { name: a.name, value: s() })), l({
      /**
       * Gets the current value 
       */
      getValue: s,
      /**
       * Sets the current value
       * 
       * @param value number|string|null
       * @returns void
       */
      setValue: i
    }), (c, u) => U((r(), d("input", {
      type: "number",
      class: "input",
      id: a.inputId,
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => o.value = p),
      disabled: a.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, xs)), [
      [De, o.value]
    ]);
  }
}), Bs = ["id"], je = /* @__PURE__ */ A({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    inputId: {},
    translate: { type: Function }
  },
  setup(e) {
    const l = e, t = de(l, E);
    return (a, n) => (r(), d("p", {
      class: "is-form-paragraph",
      id: l.inputId
    }, O(v(t)(l.label ?? "")), 9, Bs));
  }
}), Ps = ["for"], Cs = ["name", "value", "disabled", "id"], qt = /* @__PURE__ */ A({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function, null] },
    inputId: {},
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = Z(E), o = f(() => L("Form.Error", n)), s = t, i = de(a, E), c = x(null), u = () => c.value;
    j(c, (y) => {
      s("valueChanged", { name: a.name, value: u() });
    });
    const p = f(async () => {
      if (a.values == null)
        return [];
      {
        let y = await at(a.values);
        return c.value === null && y.some((b) => b.selected) && (c.value = y.find((b) => b.selected)?.value), y.map((b) => ({
          label: b.label,
          value: b.value,
          selected: c.value === b.value
        }));
      }
    }), h = (y) => {
      c.value = y;
    }, { hiddenValues: _, disabledValues: m } = tt(a.name, E);
    return l({
      /**
       * Gets the current value 
       */
      getValue: u,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: h
    }), (y, b) => (r(), d("div", null, [
      P(be, { promise: p.value }, {
        default: z(({ response: g }) => [
          e.values != null ? (r(!0), d(C, { key: 0 }, W(g, (N, D) => U((r(), d("label", {
            class: "radio is-block",
            for: `${a.inputId}-${D}`
          }, [
            M("input", {
              type: "radio",
              name: a.name,
              value: N.value,
              class: "radio",
              disabled: a.disabled || v(m).some((B) => B === N.value.toString()),
              id: `${a.inputId}-${D}`
            }, null, 8, Cs),
            Q(" " + O(v(i)(N.label)), 1)
          ], 8, Ps)), [
            [ne, !v(_).some((B) => B === N.value.toString())]
          ])), 256)) : J("", !0)
        ]),
        rejected: z(() => [
          P(v(he), {
            type: v(ie).danger,
            message: o.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Es = ["id", "name", "multiple", "disabled"], zs = ["value", "selected", "disabled"], Rs = ["label", "disabled"], Is = ["value", "selected", "disabled"], Zt = (e, l, t) => {
  let a = {
    label: e === null ? l.label : `${e}->${l.label}`,
    values: [],
    value: l.value
  }, n = t.length;
  return t.push(a), l.values.forEach((o) => {
    o.values === void 0 ? a.values.push(o) : t = Zt(a.label, o, t);
  }), t[n].values.length == 0 && t.splice(n, 1), t;
}, Qt = /* @__PURE__ */ A({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    inputId: {},
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = Z(E), o = f(() => L("Form.Error", n)), s = t, i = de(a, E), c = x(a.multiple ? [] : null), u = x(!1), p = f(async () => {
      if (a.values == null)
        return [];
      {
        let b = await at(a.values), g = b.filter((D) => D.selected).map((D) => D.value);
        b.some((D) => D.values !== void 0) && b.filter((D) => D.values !== void 0).forEach((D) => {
          g = g.concat(
            D.values?.filter((B) => B.selected).map((B) => B.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = a.multiple ? [] : null : (b = b.map((D) => {
          let B = D;
          return B.values !== void 0 && (B.values = B.values.map((X) => (X.selected = c.value?.some((k) => k === X.value), X))), B;
        }), c.value !== null && Array.isArray(c.value) && (c.value = c.value.filter((D) => b.some((B) => B.value === D))));
        let N = [];
        return b.forEach((D) => {
          D.values === void 0 ? N.push(D) : N = Zt(null, D, N);
        }), N;
      }
    }), h = () => c.value === null || c.value.length === 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    j(c, () => {
      u.value || s("valueChanged", { name: a.name, value: h() });
    }), j(u, (b) => {
      b || s("valueChanged", { name: a.name, value: h() });
    });
    const _ = (b) => {
      u.value = !0, b != null ? c.value = Array.isArray(b) ? b : [b] : a.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: m, disabledValues: y } = tt(a.name, E);
    return l({
      /**
       * Gets the current value 
       */
      getValue: h,
      /**
       * Sets the current value
       * 
       * @param value any|any[]|null
       * @returns void
       */
      setValue: _
    }), (b, g) => (r(), d("div", {
      class: F({ select: !0, "is-multiple": a.multiple })
    }, [
      p.value != null ? (r(), R(be, {
        key: 0,
        promise: p.value
      }, {
        default: z(({ response: N }) => [
          U(M("select", {
            id: a.inputId,
            name: a.name,
            multiple: a.multiple,
            class: F(a.multiple ? "is-multiple" : ""),
            "onUpdate:modelValue": g[0] || (g[0] = (D) => c.value = D),
            disabled: a.disabled
          }, [
            N != null ? (r(!0), d(C, { key: 0 }, W(N, (D) => (r(), d(C, null, [
              D.values === void 0 ? U((r(), d("option", {
                key: 0,
                value: D.value,
                selected: D.selected,
                disabled: v(y).some((B) => B === D.value.toString())
              }, O(v(i)(D.label)), 9, zs)), [
                [ne, !v(m).some((B) => B === D.value.toString())]
              ]) : J("", !0),
              D.values !== void 0 ? U((r(), d("optgroup", {
                key: 1,
                label: v(i)(D.label),
                disabled: v(y).some((B) => B === D.value.toString())
              }, [
                (r(!0), d(C, null, W(D.values, (B) => U((r(), d("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: v(y).some((X) => X === B.value.toString())
                }, O(v(i)(B.label)), 9, Is)), [
                  [ne, !v(m).some((X) => X === B.value.toString())]
                ])), 256))
              ], 8, Rs)), [
                [ne, !v(m).some((B) => B === D.value.toString())]
              ]) : J("", !0)
            ], 64))), 256)) : J("", !0)
          ], 10, Es), [
            [ua, c.value]
          ])
        ]),
        rejected: z(() => [
          P(v(he), {
            type: v(ie).danger,
            message: o.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : J("", !0)
    ], 2));
  }
}), Ws = { class: "field" }, Ls = ["id", "name", "disabled"], Vs = ["for"], js = {
  key: 0,
  class: "help is-danger"
}, Xt = /* @__PURE__ */ A({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    inputId: {},
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = de(a, E), s = x(!1);
    return j(s, (u) => n("valueChanged", { name: a.name, value: u })), l({
      /**
       * Gets the current value 
       */
      getValue: () => s.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (u) => {
        s.value = u;
      }
    }), (u, p) => (r(), d("div", Ws, [
      U(M("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.inputId,
        name: a.name,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => s.value = h),
        disabled: a.disabled
      }, null, 8, Ls), [
        [Ue, s.value]
      ]),
      M("label", {
        class: "label",
        for: u.$props.inputId
      }, [
        Q(O(v(o)(a.label)) + " ", 1),
        a.required ? (r(), d("span", js, "*")) : J("", !0)
      ], 8, Vs)
    ]));
  }
}), Us = ["id", "type", "name", "disabled", "maxlength"], ea = /* @__PURE__ */ A({
  __name: "text",
  props: {
    subtype: { default: "text" },
    maxlength: {},
    inputId: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null);
    return j(o, (c) => n("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => o.value,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: (c) => {
        o.value = c;
      }
    }), (c, u) => U((r(), d("input", {
      id: a.inputId,
      type: e.subtype,
      class: "input",
      name: e.name,
      disabled: e.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => o.value = p)
    }, null, 8, Us)), [
      [da, o.value]
    ]);
  }
}), Gs = ["id", "name", "rows", "cols", "maxlength", "disabled"], ta = 9, Se = String.fromCharCode(ta), Fe = `
`, aa = /* @__PURE__ */ A({
  __name: "textarea",
  props: {
    maxlength: {},
    rows: {},
    cols: {},
    supportsTab: { type: Boolean },
    inputId: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null);
    j(o, (u) => {
      n("valueChanged", { name: a.name, value: u });
    });
    const s = () => o.value, i = (u) => {
      o.value = u;
    };
    l({
      /**
       * Gets the current value 
       */
      getValue: s,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: i
    });
    const c = (u) => {
      if (a.supportsTab) {
        let p = s();
        if (p !== null)
          switch (u.keyCode) {
            case ta:
              let h = u.selectionStart ?? u.target.selectionStart, _ = u.selectionEnd ?? u.target.selectionEnd, m = p.substring(0, h), y = p.length > _ ? p.substring(_) : "", b = h === _ ? "" : p.substring(h, _);
              if (b.indexOf(`
`) < 0)
                u.shiftKey ? b.startsWith(Se) ? (b = b.substring(1), h--) : m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--) : b = Se + b;
              else {
                let g = !1;
                b.endsWith(Fe) && (g = !0, b = b.substring(0, b.length - 1));
                let N = b.split(Fe);
                b = "", u.shiftKey && m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--), N.forEach((D, B) => {
                  u.shiftKey && D.startsWith(Se) ? D = D.substring(1) : u.shiftKey || (D = Se + D), b += D + (B === N.length - 1 ? "" : Fe);
                }), g && (b += Fe);
              }
              return p = m + b + y, h += b.length == 1 ? 1 : 0, _ = h + (b.length == 1 ? 0 : b.length), i(p), u.target.selectionStart = h, u.target.selectionEnd = _, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
            default:
              return !0;
          }
      }
      return !0;
    };
    return (u, p) => U((r(), d("textarea", {
      class: "textarea",
      id: a.inputId,
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": p[0] || (p[0] = (h) => o.value = h)
    }, null, 40, Gs)), [
      [De, o.value]
    ]);
  }
}), Hs = (e) => {
  let l = ae.twelve;
  if (e !== void 0)
    switch (e) {
      case 1:
        l = ae.one;
        break;
      case 2:
        l = ae.two;
        break;
      case 3:
        l = ae.three;
        break;
      case 4:
        l = ae.four;
        break;
      case 5:
        l = ae.five;
        break;
      case 6:
        l = ae.six;
        break;
      case 7:
        l = ae.seven;
        break;
      case 8:
        l = ae.eight;
        break;
      case 9:
        l = ae.nine;
        break;
      case 10:
        l = ae.ten;
        break;
      case 11:
        l = ae.eleven;
        break;
      default:
        l = ae.twelve;
        break;
    }
  return l;
}, la = /* @__PURE__ */ A({
  __name: "inputs-collection",
  props: {
    fields: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = (m) => ({
      size: Hs(m.form_columns),
      class: "field"
    }), n = e, o = t;
    let s = [];
    const i = f(() => {
      let m = [], y = [], b = 0;
      return s = n.fields.map((g, N) => x(null)), n.fields.forEach((g, N) => {
        let D = g.form_columns ?? 12;
        b + D > 12 && (m.push(y), y = [], b = 0), y.push({ ...g, refIndex: N }), b += D, b === 12 && (m.push(y), y = [], b = 0);
      }), y.length > 0 && m.push(y), m;
    }), c = E(Ee), u = E(et);
    return l({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (m) => {
        s.forEach((y, b) => {
          switch (n.fields[b].type) {
            case "subform":
              y.value.setValue(m);
              break;
            default:
              y.value.setValue !== void 0 && (m === null ? y.value.setValue(null) : Object.keys(m).some((g) => g === y.value.fieldName) ? y.value.setValue(m[y.value.fieldName]) : Object.keys(m).some((g) => g === y.value.altFieldName) && y.value.setValue(m[y.value.altFieldName]));
              break;
          }
        });
      },
      /**
       * Called to get the value of the components in this row.
       * Returns an object where the propertyName are the names of the fields in the subform.
       */
      getValue: () => {
        var m = {};
        return s.forEach((y) => {
          if (y.value.getValue != null)
            switch (y.value.type) {
              case "subform":
                m = Object.assign(m, y.value.getValue());
                break;
              default:
                m[y.value.fieldName] = y.value.getValue();
                break;
            }
        }), m;
      },
      /**
       * Called to see if all the copmonents in this row are valid.
       */
      isValid: () => !s.some((m) => !(m.value.isValid === void 0 || m.value.isValid()))
    }), (m, y) => (r(), d("section", null, [
      (r(!0), d(C, null, W(i.value, (b) => (r(), R(nt, {
        modifiers: [v(Ke).gapless],
        columns: b.map((g) => a(g))
      }, Be({ _: 2 }, [
        W(b.map((g, N) => ({ input: g, index: N })).filter((g) => !v(c).some((N) => N === g.input.name)), (g) => ({
          name: `col-${g.index}`,
          fn: z(() => [
            P(na, {
              ref_for: !0,
              ref: (N) => v(s)[g.input.refIndex].value = N,
              input: g.input,
              onValueChanged: y[0] || (y[0] = (N) => o("valueChanged", N)),
              onButtonClicked: y[1] || (y[1] = (N) => o("buttonClicked", N)),
              disabled: (n.disabled ?? !1) || v(u).some((N) => N === g.input.name)
            }, null, 8, ["input", "disabled"])
          ])
        }))
      ]), 1032, ["modifiers", "columns"]))), 256))
    ]));
  }
}), Ks = /* @__PURE__ */ A({
  __name: "subform",
  props: {
    fields: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = x(null), s = E(Ee, ye(x([]))), i = f(() => s ? s.value.some((h) => h === a.name) : !1);
    return l({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (h) => {
        o.value !== null && o.value.setValue(h);
      },
      /**
       * Called to get the value of this of all the components inside this subform.  
       * Returns an object where each propertyName is the name of the field and it's value is the value.
       */
      getValue: () => o.value === null ? null : o.value.getValue(),
      /**
       * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
       */
      isValid: () => o.value === null ? !1 : o.value.isValid()
    }), (h, _) => U((r(), R(Vt, {
      id: a.name,
      name: a.name
    }, {
      default: z(() => [
        P(la, {
          fields: a.fields,
          ref_key: "inputs",
          ref: o,
          disabled: a.disabled,
          onValueChanged: _[0] || (_[0] = (m) => n("valueChanged", m)),
          onButtonClicked: _[1] || (_[1] = (m) => n("buttonClicked", m))
        }, null, 8, ["fields", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "name"])), [
      [ne, !i.value]
    ]);
  }
});
var I = /* @__PURE__ */ ((e) => (e.autocomplete = "autocomplete", e.button = "button", e.checkbox_group = "checkbox-group", e.checkbox = "checkbox", e.date = "date", e.full_editor = "full-editor", e.header = "header", e.hidden = "hidden", e.number = "number", e.paragraph = "paragraph", e.radio_group = "radio-group", e.select = "select", e.subform = "subform", e.switch = "switch", e.text = "text", e.textarea = "textarea", e.time = "time", e))(I || {});
const Ys = ["for"], qs = {
  key: 0,
  class: "is-required-marker"
}, Zs = { class: "control" }, Qs = [I.autocomplete, I.checkbox_group, I.date, I.number, I.radio_group, I.select, I.text, I.textarea, I.time, I.subform], Xs = [I.subform, I.switch, I.select, I.radio_group, I.paragraph, I.header, I.checkbox_group, I.checkbox, I.button, I.autocomplete], na = /* @__PURE__ */ A({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = x(null), n = ca(), o = t, s = e, i = de(s, E), c = ye(x(s.input.type)), u = f(() => {
      let k = null;
      switch (s.input.type) {
        case I.autocomplete:
          k = It;
          break;
        case I.button:
          k = Le;
          break;
        case I.checkbox_group:
          k = Wt;
          break;
        case I.checkbox:
          k = Lt;
          break;
        case I.date:
          k = Gt;
          break;
        case I.full_editor:
          k = Ht;
          break;
        case I.header:
          k = Ve;
          break;
        case I.hidden:
          k = Kt;
          break;
        case I.number:
          k = Yt;
          break;
        case I.paragraph:
          k = je;
          break;
        case I.radio_group:
          k = qt;
          break;
        case I.select:
          k = Qt;
          break;
        case I.switch:
          k = Xt;
          break;
        case I.text:
          k = ea;
          break;
        case I.textarea:
          k = aa;
          break;
        case I.time:
          k = lt;
          break;
        case I.subform:
          k = Ks;
          break;
      }
      return k;
    }), p = function(k) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(k);
    };
    ce(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && p(s.input.value);
    });
    const h = f(() => s.input.disabled ?? s.disabled ?? !1), _ = f(() => s.input.name), m = f(() => s.input.name), y = f(() => Qs.some((k) => k === s.input.type) && s.input.label !== void 0 && s.input.label !== null), b = f(() => {
      let k = Object.assign({}, s.input ?? {});
      if (delete k.type, y.value && delete k.label, k.className != null && delete k.className, k.form_columns != null && delete k.form_columns, Xs.some((Y) => Y === s.input.type) && (k.translate = s.translate), k.disabled = s.disabled, k.additional !== void 0) {
        for (const Y in k.additional)
          k[Y] = k.additional[Y];
        delete k.additional;
      }
      return k.inputId = n, k;
    }), g = (k) => {
      if (k.value !== void 0 && k.value !== null && Array.isArray(k.value)) {
        let Y = [...k.value];
        k.value = Y;
      }
      o("valueChanged", k);
    }, N = (k) => {
      o("buttonClicked", k);
    }, D = () => {
      if (a.value != null && a.value.getValue != null) {
        let k = a.value.getValue();
        return k != null && Array.isArray(k) ? [...k] : k;
      }
      return null;
    };
    return l({
      /**
       * Called to set the value for this given form component
       * 
       * @param value any
       */
      setValue: p,
      /**
       * Property that returns the name of this given component
       */
      fieldName: _,
      /**
       * Property that returns the type of form component this is
       */
      type: c,
      /**
       * Property that returns the alternative field name for this component
       */
      altFieldName: m,
      /**
       * Called to get the value of this component.
       * If this is a basic component, it returns that value.
       * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
       */
      getValue: D,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (s.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (s.input.required ?? !1) {
          let k = D();
          return k != null && (Array.isArray(k) ? k.length > 0 : !0) && k.toString() !== "";
        }
        return !0;
      },
      /**
       * Called to set the values of a subform component, this will throw an error if this component is not a subform.
       * 
       * @param values any|null
       */
      setValues: (k) => {
        if (s.input.type === "subform" && a.value !== null)
          a.value.setValues(k);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (k, Y) => s.input.type === v(I).header ? (r(), R(Ve, {
      key: 0,
      subtype: s.input.subtype,
      label: s.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["subtype", "label"])) : s.input.type === v(I).paragraph ? (r(), R(je, {
      key: 1,
      name: s.input.name,
      label: s.input.label,
      "input-id": v(n),
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "label", "input-id"])) : s.input.type === v(I).button ? (r(), R(Le, K({ key: 2 }, b.value, {
      disabled: h.value,
      onButtonClicked: N,
      ref_key: "inp",
      ref: a
    }), null, 16, ["disabled"])) : (r(), d(C, { key: 3 }, [
      y.value ? (r(), d("label", {
        key: 0,
        class: "label",
        for: v(n)
      }, [
        Q(O(v(i)(s.input.label ?? "")) + " ", 1),
        s.input.required ? (r(), d("span", qs, "*")) : J("", !0)
      ], 8, Ys)) : J("", !0),
      M("div", Zs, [
        (r(), R(pe(u.value), K(b.value, {
          onValueChanged: g,
          ref_key: "inp",
          ref: a
        }), null, 16))
      ])
    ], 64));
  }
}), eo = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, to = /* @__PURE__ */ A({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, n = t, o = de(a, E);
    Re("Translate", (g) => o.value(g));
    const s = x(null), i = () => s.value !== null ? s.value.getValue() : null, c = (g) => {
      s.value !== null && s.value.setValue(g);
    }, u = () => s.value !== null ? s.value.isValid() : !1, p = x([]);
    Re(Ee, ye(p));
    const h = (g) => {
      Array.isArray(g) ? p.value = [...p.value, ...g] : p.value.push(g);
    }, _ = (g) => {
      Array.isArray(g) ? p.value = p.value.filter((N) => g.indexOf(N) >= 0) : p.value = p.value.filter((N) => N !== g);
    }, m = x([]);
    return Re(et, ye(m)), l({
      /**
       * Returns the values of the given form elements as an object where the property name is the name of the form element and the property value is 
       * that elements value
       */
      getValues: i,
      /**
       * Called to set the values on the form elements using an object where the property name is the name of the form element
       * 
       * @param values any
       */
      setValues: c,
      /**
       * Called to see if the form is valid.  Returns a boolean value that is true if all required fields have a value.
       */
      isValid: u,
      /**
       * Called to hide 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      hideField: h,
      /**
       * Called to show 1 or more hidden fields in the form
       * 
       * @param name string|string[]
       */
      showField: _,
      /**
       * Called to disable 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      disableField: (g) => {
        Array.isArray(g) ? m.value = [...m.value, ...g] : m.value.push(g);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (g) => {
        Array.isArray(g) ? m.value = m.value.filter((N) => g.indexOf(N) >= 0) : m.value = m.value.filter((N) => N !== g);
      }
    }), (g, N) => (r(), d("form", eo, [
      P(la, {
        fields: a.elements,
        ref_key: "inputs",
        ref: s,
        disabled: a.disabled,
        onValueChanged: N[0] || (N[0] = (D) => n("valueChanged", D)),
        onButtonClicked: N[1] || (N[1] = (D) => n("buttonClicked", D))
      }, null, 8, ["fields", "disabled"])
    ]));
  }
}), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: It,
  Button: Le,
  Checkbox: Lt,
  CheckboxGroup: Wt,
  ComponentForm: to,
  DateField: Gt,
  FormComponent: na,
  FullEditor: Ht,
  Header: Ve,
  Hidden: Kt,
  NumberField: Yt,
  Paragraph: je,
  RadioGroup: qt,
  Select: Qt,
  Switch: Xt,
  Text: ea,
  TextArea: aa,
  Time: lt
}, Symbol.toStringTag, { value: "Module" })), pt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Pe(`${pt.substring(0, pt.lastIndexOf("/"))}/vibrantvue.min.css`);
const lo = Object.values(Xe).filter((e, l, t) => t.indexOf(e) === l), no = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: lo,
  setSkin: no
}, Symbol.toStringTag, { value: "Module" })), oo = /* @__PURE__ */ A({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    show_refresh: { type: Boolean },
    width: {},
    height: {},
    legend_position: { default: He.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: l }) {
    const t = `${fa(E)}chart.umd.min.js`, a = x(null), n = e, o = l;
    let s = null;
    const i = () => {
      s?.update();
    }, c = f(() => {
      var u = "";
      return n.width && (u = `width:${n.width}px;`), n.height && (u += `height:${n.height}px;`), u;
    });
    return j(() => n.type, (u) => {
      s != null && (s.type = u ?? "line");
    }), j(
      () => n.labels,
      (u) => {
        s != null && (s.data.labels = u, (n.show_refresh == null || !n.show_refresh) && i());
      },
      { deep: !0 }
    ), j(
      () => n.datasets,
      (u) => {
        s != null && (s.data.datasets = u, (n.show_refresh == null || !n.show_refresh) && i());
      },
      { deep: !0 }
    ), ce(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${n.legend_position}`,
            labels: {
              filter: (h, _) => h.text != null
            },
            onClick: function(h, _) {
              o("legendItemClick", s, _);
            }
          }
        }
      };
      n.scales != null && n.scales != null && (u.scales = n.scales), n.tooltips != null && n.tooltips != null && (u.tooltips = n.tooltips);
      const { Chart: p } = await Ge(t, ["Chart"]);
      s = new p(a.value.getContext("2d"), {
        type: n.type == null ? "line" : n.type,
        data: {
          datasets: n.datasets,
          labels: n.labels
        },
        options: u
      }), s.update();
    }), (u, p) => (r(), R(jt, null, Be({
      content: z(() => [
        M("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ae(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      n.title ? {
        name: "header",
        fn: z((h) => [
          M("h3", {
            class: F(h.header_class)
          }, O(n.title), 3)
        ]),
        key: "0"
      } : void 0,
      n.show_refresh != null && n.show_refresh != null && n.show_refresh ? {
        name: "footer",
        fn: z((h) => [
          P(Bt, {
            class: F(h.addon_class),
            onClick: i
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), ro = /* @__PURE__ */ A({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = `${_a(E)}src-noconflict/ace.js`, n = e, o = t, s = x(null), i = x(null), c = function() {
      return i.value.getValue() == "" ? null : i.value.getValue();
    }, u = function(h) {
      i.value.setValue(h ?? "");
    };
    j(() => n.readonly, (h) => {
      i.value.setReadOnly(h == null || h == null ? !1 : h);
    }), j(() => n.value, (h) => {
      u(h);
    }), j(() => n.language, (h) => {
      i.value.getSession().setMode(h);
    });
    const p = f(() => {
      let h = Number.MAX_SAFE_INTEGER;
      if (n.autocompletes != null && n.autocompletes != null) {
        for (let _ = 0; _ < n.autocompletes.length; _++)
          n.autocompletes[_].method.indexOf(".") >= 0 ? h = Math.min(h, n.autocompletes[_].method.indexOf(".")) : h = Math.min(h, n.autocompletes[_].method.length);
        if (h > 3 && n.autocompletes.length > 0) {
          let _ = !0, m = n.autocompletes[0].method.substring(0, 3);
          for (let y = 0; y < n.autocompletes.length; y++)
            if (n.autocompletes[y].method.substring(0, 3) != m) {
              _ = !1;
              break;
            }
          _ && (h = 3);
        }
      }
      return h;
    });
    return l({
      /**
       * Gets the current value 
       */
      getValue: c,
      /**
       * Sets the current value
       * 
       * @param value string|null
       */
      setValue: u
    }), ce(async () => {
      const { ace: h } = await Ge(a, ["ace"]);
      i.value = pa(h.edit(s.value.$el, {
        mode: n.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), i.value.setReadOnly(n.readonly === void 0 || n.readonly === null ? !1 : n.readonly), n.value !== null && n.value !== void 0 && i.value.setValue(n.value), i.value.on("change", () => o("valueChanged", c())), n.autocompletes !== null && n.autocompletes !== void 0 && (i.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), i.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(_, m, y, b, g) {
          var N = [];
          if (b = b.toUpperCase(), b.length >= p && (N = n.autocompletes.filter((D) => D.method.toUpperCase().startsWith(b) && D.method.length > b.legend).map((D) => ({
            caption: D.method + (D.description === null || D.description === void 0 ? "" : "->" + D.description),
            value: D.method,
            meta: "autos"
          }))), N.length === 0) {
            g(null, []);
            return;
          }
          g(null, N.map(function(D) {
            return D;
          }));
        }
      }]);
    }), (h, _) => (r(), d("div", {
      class: "editor",
      ref_key: "container",
      ref: s
    }, null, 512));
  }
}), io = { key: 0 }, uo = { colspan: "100%" }, co = ["colspan", "rowspan"], po = ["onClick"], mo = { class: "icon" }, ho = { key: 0 }, bo = { colspan: "100%" }, vo = ["colspan", "rowspan", "onClick"], go = { key: 1 }, yo = { colspan: "100%" }, fo = /* @__PURE__ */ A({
  __name: "grid",
  props: {
    columns: {},
    data: {},
    empty_message: {},
    column_rows: {},
    has_filter: { type: Boolean },
    filter_min_length: {},
    current_sort: {},
    is_loading: {},
    getRowColor: {},
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean },
    use_next: { type: Boolean, default: !0 },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: G.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean }
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: l }) {
    const t = ue(), a = e, n = l, o = {
      scrollable: a.scrollable,
      fixed_header: a.fixed_header,
      full_width: a.full_width,
      narrow: a.narrow
    }, s = {
      use_next: a.use_next,
      has_more: a.has_more,
      has_previous: a.has_previous,
      size: a.size,
      rounded: a.rounded,
      button_type: a.button_type,
      total_pages: a.total_pages,
      current_page: a.current_page
    }, i = f(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && re(a.total_pages) > 1)), c = f(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((m) => m.map((y) => a.columns.filter((b) => b.some((g) => g.id === y))[0].find((b) => b.id === y)))), u = f(
      () => c.value.filter((m) => m.some((y) => !(y.headerOnly ?? !1)))
    ), p = (m) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === m ? n("sort", {
        column: m,
        ascending: !a.current_sort.ascending
      }) : n("sort", {
        column: m,
        ascending: !0
      });
    }, h = (m, y) => {
      if (a.getRowColor) {
        let b = a.getRowColor(m, y);
        if (b)
          return `is-${b}`;
      }
      return null;
    }, _ = (m, y, b, g) => {
      let N = [];
      if ((y.cellClass || y.getCellColor) && (y.cellClass && N.push(`${y.cellClass}`), y.getCellColor)) {
        let D = y.getCellColor(m, b, g);
        D && N.push(`is-${D}`);
      }
      return N;
    };
    return (m, y) => (r(), R(st, me(fe(o)), Be({
      thead: z(() => [
        a.has_filter ?? !1 ? (r(), d("tr", io, [
          M("th", uo, [
            P(Pt, {
              min_length: a.filter_min_length,
              onFilter: y[0] || (y[0] = (b) => n("filter", b))
            }, null, 8, ["min_length"])
          ])
        ])) : J("", !0),
        (r(!0), d(C, null, W(a.columns, (b) => (r(), d("tr", null, [
          (r(!0), d(C, null, W(b, (g) => (r(), d("th", {
            colspan: g.headerColspan,
            rowspan: g.headerRowspan,
            class: F(g.headerClass)
          }, [
            T(m.$slots, `head-${g.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (g.canSort ?? !1) && g.id === a.current_sort.column ? (r(), d("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (N) => p(g.id)
              }, [
                M("span", mo, [
                  P(H, {
                    icon: a.current_sort.ascending ? "arrow-up" : "arrow-down"
                  }, null, 8, ["icon"])
                ]),
                M("span", null, O(g.title), 1)
              ], 8, po)) : (r(), d(C, { key: 1 }, [
                Q(O(g.title), 1)
              ], 64))
            ])
          ], 10, co))), 256))
        ]))), 256))
      ]),
      tbody: z(() => [
        a.data === null || a.is_loading || a.data.length === 0 ? (r(), d("tr", ho, [
          M("td", bo, [
            a.data === null || a.is_loading ? (r(), R(_e, { key: 0 })) : (r(), R(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), d(C, { key: 1 }, W(a.data, (b, g) => (r(), d(C, null, [
          (r(!0), d(C, null, W(u.value, (N, D) => (r(), d("tr", {
            key: `row-${g}-${D}`,
            class: F(h(g, b))
          }, [
            (r(!0), d(C, null, W(N.filter((B) => !(B.headerOnly ?? !1)), (B) => (r(), d("td", {
              key: `data-${g}-${D}`,
              colspan: B.dataColspan,
              rowspan: B.dataRowspan,
              class: F(_(g, B, b, B.propertyName ? b[B.propertyName] : void 0)),
              onClick: (X) => n("cellClicked", { rowIndex: g, data: B.propertyName ? b[B.propertyName] : null, row: b })
            }, [
              T(m.$slots, `body-${B.id}`, K({ ref_for: !0 }, { rowIndex: g, data: B.propertyName ? b[B.propertyName] : null, row: b }), () => [
                Q(O(B.propertyName ? b[B.propertyName] : null), 1)
              ])
            ], 10, vo))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      i.value || v(t).tfoot_head || v(t).tfoot_bottom ? {
        name: "tfoot",
        fn: z(() => [
          v(t).tfoot_head ? T(m.$slots, "tfoot_head", { key: 0 }) : J("", !0),
          i.value ? (r(), d("tr", go, [
            M("td", yo, [
              P(Ct, K(s, {
                onMoveForward: y[1] || (y[1] = (b) => n("moveForward")),
                onMoveBack: y[2] || (y[2] = (b) => n("moveBack")),
                onGoToPage: y[3] || (y[3] = (b) => n("goToPage", b))
              }), null, 16)
            ])
          ])) : J("", !0),
          v(t).tfoot_bottom ? T(m.$slots, "tfoot_bottom", { key: 2 }) : J("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), _o = { class: "progress-group" }, ko = /* @__PURE__ */ A({
  __name: "progress-group",
  props: {
    size: {},
    values: {},
    max: {}
  },
  setup(e) {
    const l = e, t = f(() => {
      let o = 0;
      for (let s = 0; s < l.values.length; s++)
        o += l.values[s].value;
      return o;
    }), a = f(() => l.values.map((o) => ({
      size: l.size ?? G.normal,
      type: o.type,
      percentage: o.value / (l.max ?? t.value) * 100,
      caption: o.caption ?? `${o.value}`,
      onClick: o.onClick
    }))), n = f(() => l.max !== void 0 ? {
      size: l.size ?? G.normal,
      type: null,
      percentage: (l.max - t.value) / l.max * 100,
      caption: null
    } : null);
    return (o, s) => (r(), d("div", _o, [
      (r(!0), d(C, null, W(a.value, (i, c) => (r(), R(v(zt), {
        is: "progress",
        class: F(`progress is-${i.size} is-${i.type} ${i.onClick !== void 0 ? "is-clickable" : ""}`),
        key: c,
        text: i.caption ?? "",
        position: v(Ce).bottom,
        style: Ae({ width: `${i.percentage}%` }),
        value: "100",
        max: "100",
        onClick: () => {
          i.onClick !== void 0 && i.onClick();
        }
      }, {
        default: z(() => [
          Q(O(`${i.percentage}%`), 1)
        ]),
        _: 2
      }, 1032, ["class", "text", "position", "style", "onClick"]))), 128)),
      n.value != null ? (r(), d("progress", {
        key: 0,
        class: F(`progress is-${n.value.size} is-${n.value.type}`),
        style: Ae({ width: `${n.value.percentage}%` }),
        value: "100",
        max: "100"
      }, O(`${n.value.percentage}%`), 7)) : J("", !0)
    ]));
  }
}), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: oo,
  CodeWriter: ro,
  Grid: fo,
  ProgressGroup: ko
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Oo,
  Button: To,
  ButtonsContainer: xo,
  ButtonAdd: Bo,
  ButtonCancel: Po,
  ButtonDelete: Co,
  ButtonDisable: Eo,
  ButtonDownload: zo,
  ButtonEdit: Ro,
  ButtonEnable: Io,
  ButtonOkay: Wo,
  ButtonPrint: Lo,
  ButtonRefresh: Vo,
  ButtonSave: jo,
  ButtonSubmit: Uo,
  ButtonUpload: Go,
  CheckMark: Ho,
  DropDown: Ko,
  DynamicSlot: Yo,
  Filter: qo,
  Icon: Zo,
  Message: Qo,
  Notification: Xo,
  PageNotification: er,
  Pagination: tr,
  Promised: ar,
  Progress: lr,
  NavBar: nr,
  Menu: sr,
  MenuLabel: or,
  MenuList: rr,
  MenuEntry: ir,
  ToolTip: ur,
  Badge: dr,
  Tag: cr,
  Tags: pr
} = Hl, { DraggableItem: mr, DropZone: hr, Sortable: br } = en, {
  AutoComplete: vr,
  CheckboxGroup: gr,
  Checkbox: yr,
  DateField: fr,
  ComponentForm: _r,
  FullEditor: kr,
  Header: Sr,
  Hidden: Mr,
  NumberField: Dr,
  Paragraph: $r,
  RadioGroup: Ar,
  Select: Jr,
  Switch: Nr,
  Text: Fr,
  TextArea: wr,
  Time: Or,
  FormComponent: Tr
} = ao, {
  Banner: xr,
  Box: Br,
  Breadcrumbs: Pr,
  Card: Cr,
  ColumnContainer: Er,
  Footer: zr,
  Level: Rr,
  List: Ir,
  Media: Wr,
  Modal: Lr,
  ModalCard: Vr,
  Panel: jr,
  Section: Ur,
  Table: Gr,
  Tabs: Hr,
  Slideout: Kr,
  StepWizard: Yr
} = Js, { AVAIABLE_SKINS: qr, setSkin: Zr } = so, {
  ColorTypes: Qr,
  NoticeTypes: Xr,
  Sizes: ei,
  AnimationSpeeds: ti,
  AnimationTypes: ai,
  IconSizes: li,
  ChartLegendPositions: ni,
  ChartTypes: si,
  DropZoneQuadrants: oi,
  BreadCrumbAlignments: ri,
  BreadCrumbSeperators: ii,
  ColumnContainerModifiers: ui,
  ColumnSizes: di,
  ColumnOffsetSizes: ci,
  BorderTypes: pi,
  TabAlignments: mi,
  TabStyles: hi,
  TileSizes: bi,
  TileTypes: vi,
  FixedNavBarPositions: gi,
  FixedMenuPositions: yi,
  BadgePositions: fi,
  ToolTipPositions: _i,
  ToolTipTextAlignments: ki,
  ButtonAlignments: Si,
  SectionSizes: Mi
} = ha, { loadNonEs6Module: Di } = ma, { Chart: $i, CodeWriter: Ai, Grid: Ji, ProgressGroup: Ni } = So;
export {
  qr as AVAIABLE_SKINS,
  Oo as Animation,
  ti as AnimationSpeeds,
  ai as AnimationTypes,
  vr as AutoComplete,
  dr as Badge,
  fi as BadgePositions,
  xr as Banner,
  pi as BorderTypes,
  Br as Box,
  ri as BreadCrumbAlignments,
  ii as BreadCrumbSeperators,
  Pr as Breadcrumbs,
  To as Button,
  Bo as ButtonAdd,
  Si as ButtonAlignments,
  Po as ButtonCancel,
  Co as ButtonDelete,
  Eo as ButtonDisable,
  zo as ButtonDownload,
  Ro as ButtonEdit,
  Io as ButtonEnable,
  Wo as ButtonOkay,
  Lo as ButtonPrint,
  Vo as ButtonRefresh,
  jo as ButtonSave,
  Uo as ButtonSubmit,
  Go as ButtonUpload,
  xo as ButtonsContainer,
  Cr as Card,
  $i as Chart,
  ni as ChartLegendPositions,
  si as ChartTypes,
  Ho as CheckMark,
  yr as Checkbox,
  gr as CheckboxGroup,
  Ai as CodeWriter,
  Qr as ColorTypes,
  Er as ColumnContainer,
  ui as ColumnContainerModifiers,
  ci as ColumnOffsetSizes,
  di as ColumnSizes,
  _r as ComponentForm,
  fr as DateField,
  mr as DraggableItem,
  Ko as DropDown,
  hr as DropZone,
  oi as DropZoneQuadrants,
  Yo as DynamicSlot,
  qo as Filter,
  yi as FixedMenuPositions,
  gi as FixedNavBarPositions,
  zr as Footer,
  Tr as FormComponent,
  kr as FullEditor,
  Ji as Grid,
  Sr as Header,
  Mr as Hidden,
  Zo as Icon,
  li as IconSizes,
  Rr as Level,
  Ir as List,
  Wr as Media,
  sr as Menu,
  ir as MenuEntry,
  or as MenuLabel,
  rr as MenuList,
  Qo as Message,
  Lr as Modal,
  Vr as ModalCard,
  nr as NavBar,
  Xr as NoticeTypes,
  Xo as Notification,
  Dr as NumberField,
  er as PageNotification,
  tr as Pagination,
  jr as Panel,
  $r as Paragraph,
  lr as Progress,
  Ni as ProgressGroup,
  ar as Promised,
  Ar as RadioGroup,
  Ur as Section,
  Mi as SectionSizes,
  Jr as Select,
  ei as Sizes,
  Kr as Slideout,
  br as Sortable,
  Yr as StepWizard,
  Nr as Switch,
  mi as TabAlignments,
  hi as TabStyles,
  Gr as Table,
  Hr as Tabs,
  cr as Tag,
  pr as Tags,
  Fr as Text,
  wr as TextArea,
  bi as TileSizes,
  vi as TileTypes,
  Or as Time,
  ur as ToolTip,
  _i as ToolTipPositions,
  ki as ToolTipTextAlignments,
  Di as loadNonEs6Module,
  wo as provideAceJS,
  No as provideAnimation,
  Fo as provideChatJS,
  Jo as provideFontAwesome,
  $o as provideIconSet,
  Do as provideLanguage,
  Ao as provideSummerNote,
  Zr as setSkin,
  Z as useLanguage
};
//# sourceMappingURL=vibrantvue.esm.js.map
