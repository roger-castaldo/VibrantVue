import { computed as k, defineComponent as A, openBlock as r, createBlock as E, Transition as Zt, withCtx as I, renderSlot as T, createElementBlock as i, normalizeClass as N, inject as B, ref as P, watch as U, createVNode as C, createCommentVNode as D, toDisplayString as O, mergeProps as K, toValue as se, createElementVNode as y, unref as g, Fragment as x, renderList as L, resolveDynamicComponent as me, createTextVNode as Z, onMounted as ce, withDirectives as H, vModelText as De, vShow as oe, normalizeProps as he, resolveComponent as ct, useSlots as ie, readonly as fe, vModelCheckbox as Ue, normalizeStyle as Ae, reactive as Qt, withAsyncContext as Xt, onUnmounted as ea, vModelSelect as ta, vModelDynamic as aa, createSlots as je, provide as ze, guardReactiveProps as _e, markRaw as la } from "vue";
const xe = (e) => new Promise((l) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, n) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let d = document.createElement("link"), c = new Promise((u) => {
        d.onload = function() {
          u(s);
        };
      });
      t[n] = c, a.appendChild(d), d.setAttribute("rel", "stylesheet"), d.setAttribute("type", "text/css"), d.setAttribute("server_path", s), d.setAttribute("href", s);
    } else
      t[n] = Promise.resolve(s);
  }), Promise.all(t).then((s) => {
    l(s);
  });
}), ge = [], Ge = (e, l) => new Promise((t) => {
  let a = ge.find((s) => s.path === e);
  if (a != null)
    if (a.result === void 0 && l !== void 0 || a.result === null && l === void 0) {
      let s = setTimeout(() => {
        let n = ge.find((o) => o.path === e);
        n == null ? (clearTimeout(s), t(void 0)) : (n.result !== void 0 && l !== void 0 || n.result === void 0 && l === void 0) && (clearTimeout(s), t(n.result));
      }, 500);
    } else
      t(a.result);
  else {
    ge.push({
      path: e,
      result: l === void 0 ? null : void 0
    });
    let s = document.createElement("script");
    s.onload = () => {
      let o = ge.findIndex((d) => d.path === e);
      if (l === void 0)
        ge[o].result = void 0;
      else {
        let d = {};
        l.forEach((c) => {
          d[c] = window[c];
        }), ge[o].result = d;
      }
      t(ge[o].result);
    }, s.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
  }
}), pt = () => {
  var t;
  let e, l = "";
  return typeof self.crypto < "u" && (e = self.crypto, l = (t = e.randomUUID) == null ? void 0 : t.call(e)), l || "";
}, sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  generateUUID: pt,
  loadNonEs6Module: Ge
}, Symbol.toStringTag, { value: "Module" }));
var Q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(Q || {}), ne = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(ne || {}), Y = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(Y || {}), ye = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ye || {}), we = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(we || {}), mt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(mt || {}), He = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(He || {}), ue = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(ue || {}), le = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(le || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), ht = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(ht || {}), Ke = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = "centered", e.borderleft = "borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(Ke || {}), te = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(te || {}), bt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(bt || {}), Ye = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Ye || {}), qe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(qe || {}), vt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(gt || {}), yt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(yt || {}), Te = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Te || {}), ft = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(ft || {}), Ze = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ze || {}), Ce = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ce || {}), Qe = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Qe || {}), _t = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(_t || {}), Xe = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(Xe || {}), kt = /* @__PURE__ */ ((e) => (e.medium = "medium", e.large = "large", e))(kt || {}), Pe = /* @__PURE__ */ ((e) => (e.default = "default", e.verticalRight = "is-vertical-right", e.verticalLeft = "is-vertical-left", e))(Pe || {});
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ye,
  AnimationTypes: we,
  BadgePositions: Ze,
  BorderTypes: Ye,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: ht,
  ButtonAlignments: _t,
  ChartLegendPositions: He,
  ChartTypes: mt,
  ColorTypes: Q,
  ColumnContainerModifiers: Ke,
  ColumnOffsetSizes: bt,
  ColumnSizes: te,
  DropZoneQuadrants: le,
  FixedMenuPositions: ft,
  FixedNavBarPositions: Te,
  IconSizes: ue,
  NoticeTypes: ne,
  SectionSizes: kt,
  Sizes: Y,
  SkinTypes: Xe,
  StepWizardOrientations: Pe,
  TabAlignments: qe,
  TabStyles: vt,
  TileSizes: gt,
  TileTypes: yt,
  ToolTipPositions: Ce,
  ToolTipTextAlignments: Qe
}, Symbol.toStringTag, { value: "Module" })), q = (e) => {
  const l = e("Language", "en");
  return k(() => l);
}, oa = (e) => {
  const l = e("IconSet", "solid");
  return k(() => l);
}, ra = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.0/"), ua = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/"), ia = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), da = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.7/"), ca = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.37.3/"), St = /* @__PURE__ */ A({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ye.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const l = ia(B);
    xe(`${l}animate.min.css`);
    const t = e, a = (p) => {
      switch (p) {
        case ye.slower:
          return 3e3;
        case ye.fast:
          return 800;
        case ye.faster:
          return 500;
        default:
          return 2e3;
      }
    }, s = (p) => p === void 0 ? "" : `animate__${p}`, n = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, o = k(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), d = k(() => [
      "animate__animated",
      s(t.incoming ?? t.inout),
      n(t.speedIn ?? t.speed)
    ].join(" ")), c = k(() => [
      "animate__animated",
      s(t.outgoing ?? t.inout),
      n(t.speedOut ?? t.speed)
    ].join(" ")), u = k(() => [
      "animate__animated",
      "animate__infinite",
      s(t.repeating),
      n(t.speed)
    ].join(" "));
    return (p, h) => t.repeating ? (r(), i("div", {
      key: 1,
      class: N(u.value)
    }, [
      T(p.$slots, "default")
    ], 2)) : (r(), E(Zt, {
      key: 0,
      "enter-active-class": d.value,
      "leave-active-class": c.value,
      duration: o.value
    }, {
      default: I(() => [
        T(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), pa = "brands.min.css", ma = "all.min.css", nt = "icon_styles", ha = /\.fa-([^: ]+):before/g, ba = /url\(([^)]+)\)/g, Me = P([]), Re = P(!1), ot = async (e, l) => {
  if (!Re.value) {
    Re.value = !0;
    let t;
    Me.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", nt), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(nt), Me.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${pa}`),
      fetch(`${e}${ma}`),
      fetch(`${e}${l}.min.css`)
    ]), s = await a[0].text();
    [...s.matchAll(ha)].forEach((n) => {
      Me.value.push(n[1]);
    }), s = `${await a[1].text()}
    ${await a[2].text()}
    ${s}`, [...s.matchAll(ba)].forEach((n) => {
      s = s.replace(n[0], `url(${new URL(n[1], e)})`);
    }), t.innerText = s, Me.value.splice(0, 1), Re.value = !1;
  }
}, G = /* @__PURE__ */ A({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const l = ua(B), t = oa(B);
    Me.value.length === 0 ? ot(l, t.value) : U(t, () => ot(l, t.value));
    const a = e, s = k(() => {
      let n = [];
      return a.icon !== void 0 && a.icon !== null && (Me.value.indexOf(a.icon) >= 0 ? n.push("fa-brands") : (n.push("fa-ico"), n.push(`fa-${t.value}`)), n.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== ue.normal && n.push(`fa-${a.size}`), n;
    });
    return (n, o) => (r(), i("i", {
      class: N(s.value)
    }, null, 2));
  }
}), va = ["disabled"], ga = {
  key: 0,
  class: "icon is-small"
}, ya = { key: 1 }, ee = /* @__PURE__ */ A({
  __name: "button",
  props: {
    icon: {},
    type: { default: Q.primary },
    title: {},
    disabled: { type: Boolean },
    size: { default: Y.normal },
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = k(() => [
      "button",
      `is-${t.size ?? Y.normal}`,
      `is-${t.type ?? Q.primary}`,
      t.disabled ? "disabled" : "",
      t.is_rounded ? "is-rounded" : "",
      t.hide_mobile ? "is-hidden-mobile" : "",
      t.hide_tablet ? "is-hidden-tablet-only" : "",
      t.hide_desktop ? "is-hidden-desktop is-hidden-widescreen" : ""
    ]);
    return (n, o) => (r(), i("button", {
      class: N(s.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (d) => a("click"))
    }, [
      t.icon ? (r(), i("span", ga, [
        C(G, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : D("", !0),
      t.title ? (r(), i("span", ya, O(t.title), 1)) : D("", !0)
    ], 10, va));
  }
}), fa = '{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Refresh":"Refresh","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسناً","Print":"الطباعة","Refresh":"التجديد","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Qeydiyyat","Edit":"Tarix","Enable":"Qeydiyyat","Okay":" Okay","Print":"Çap","Refresh":"Axtarış","Save":"Yadda","Submit":"Qeydiyyat","Upload":"Tarix"},"bg":{"Add":"Добавяне","Cancel":"Отмяна","Delete":"Изтриване","Disable":"Изключване","Download":"Изтегляне","Edit":"Редактиране","Enable":"Включване","Okay":"Добре","Print":"Печат","Refresh":"Обновяване","Save":"Запис","Submit":"Подаване","Upload":"Качване"},"bn":{"Add":"যোগ","Cancel":"বাতিল","Delete":"মুছে","Disable":"নিষ্ক্রিয়","Download":"ডাউনলোড","Edit":"সম্পাদনা","Enable":"সক্রিয়","Okay":"ঠিক","Print":"প্রিন্ট","Refresh":"নতুন","Save":"সংরক্ষণ","Submit":"জমা","Upload":"আপলোড"},"ca":{"Add":"Afegeix","Cancel":"Cancel·","Delete":"Esborra","Disable":"Deshabilita","Download":"Descarrega","Edit":"Edita","Enable":"Habilita","Okay":"Bé","Print":"Imprimeix","Refresh":"Refresca","Save":"Desa","Submit":"Envia","Upload":"Puja"},"cs":{"Add":"Přidat","Cancel":"Zrušit","Delete":"Smazat","Disable":"Zakázat","Download":"Stáhnout","Edit":"Upravit","Enable":"Povolit","Okay":"Dobře","Print":"Tisk","Refresh":"Obnovit","Save":"Uložit","Submit":"Odeslat","Upload":"Načíst"},"da":{"Add":"Tilføj","Cancel":"Annullér","Delete":"Slet","Disable":"Deaktivér","Download":"Download","Edit":"Redigér","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Refresh":"Genopfrisk","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Deaktivieren","Download":"Herunterladen","Edit":"Bearbeiten","Enable":"Aktivieren","Okay":"Okay","Print":"Drucken","Refresh":"Aktualisieren","Save":"Speichern","Submit":"Senden","Upload":"Hochladen"},"el":{"Add":"Προσθήκη","Cancel":"Ακύρωση","Delete":"Διαγραφή","Disable":"Απενεργοποίηση","Download":"Λήψη","Edit":"Επεξεργασία","Enable":"Ενεργοποίηση","Okay":"Εντάξει","Print":"Εκτύπωση","Refresh":"Ανανέωση","Save":"Αποθήκευση","Submit":"Υποβολή","Upload":"Αποστολή"},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Refresh":"Refresh","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Inhabilitación","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Refresh":"Refresh","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{"Add":"Lisa","Cancel":"Tühistage","Delete":"Kustuta","Disable":"Keela","Download":"Laadi","Edit":"Edit","Enable":"Luba","Okay":"Olgu","Print":"Printi","Refresh":"Värskenda","Save":"Päästa","Submit":"Esita","Upload":"Laadi"},"eu":{"Add":"Gehitu","Cancel":"Utzi","Delete":"Ezabatu","Disable":"Desgaitu","Download":"Deskargatu","Edit":"Editatu","Enable":"Gaitu","Okay":"Ados","Print":"Inprimatu","Refresh":"Freskatu","Save":"Gorde","Submit":"Bidali","Upload":"Igo"},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"ویرایش","Enable":"گزینه","Okay":"خوب","Print":"Print","Refresh":"بازسازی","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruuta","Delete":"Poista","Disable":"Poista","Download":"Lataa","Edit":"Muuta","Enable":"Käytä","Okay":"Selvä","Print":"Tulosta","Refresh":"Päivitä","Save":"Tallenna","Submit":"Lähetä","Upload":"Lähetä"},"fr":{"Add":"Ajouter","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactiver","Download":"Télécharger","Edit":"Modifier","Enable":"Activer","Okay":"Très","Print":"Imprimer","Refresh":"Actualiser","Save":"Enregistrer","Submit":"Soumettre","Upload":"Envoi"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Toir","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Refresh":"Athraigh","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"gl":{"Add":"Add","Cancel":"Cancelar","Delete":"Eliminar","Disable":"Disable","Download":"Baixar","Edit":"Edit","Enable":"Habilitar","Okay":"Ok","Print":"Imprimir","Refresh":"Refresco","Save":"Save","Submit":"Presentación","Upload":"Upload"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Refresh":"מרעננים","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Refresh":"रिफ्रेश","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Kikapcsolás","Download":"Letöltés","Edit":"Szerkesztés","Enable":"Beállítás","Okay":"Oké","Print":"Nyomtatás","Refresh":"Frissítés","Save":"Mentés","Submit":"Küldés","Upload":"Feltöltés"},"id":{"Add":"Tambah","Cancel":"Batal","Delete":"Hapus","Disable":"Matikan","Download":"Unduh","Edit":"Sunting","Enable":"Aktifkan","Okay":"Oke","Print":"Cetak","Refresh":"Segarkan","Save":"Simpan","Submit":"Kirim","Upload":"Unggah"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Refresh":"Rifiuti","Save":"Salva","Submit":"Inviare","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Refresh":"リフレッシュ","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Refresh":"지원하다","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{"Add":"Pridėti","Cancel":"Atsisakyti","Delete":"Trinti","Disable":"Išjungti","Download":"Atsisiųsti","Edit":"Keisti","Enable":"Įjungti","Okay":"Gerai","Print":"Spausdinti","Refresh":"Atnaujinti","Save":"Įrašyti","Submit":"Siųsti","Upload":"Siųsti"},"lv":{"Add":"Pievienot","Cancel":"Atcelt","Delete":"Dzēst","Disable":"Atslēgt","Download":"Lejupielādēt","Edit":"Rediģēt","Enable":"Ieslēgt","Okay":"Labi","Print":"Drukāt","Refresh":"Atsvaidzināt","Save":"Saglabāt","Submit":"Nosūtīt","Upload":"Augšupielāde"},"ms":{"Add":"Tambah","Cancel":"Batal","Delete":"Dihapus","Disable":"Matikan","Download":"Muaturun","Edit":"Edit","Enable":"Hidupkan","Okay":"Oke","Print":"Cetakan","Refresh":"Segarkan","Save":"Simpan","Submit":"Diserahkan","Upload":"Unggah"},"nb":{"Add":"Legg","Cancel":"Avbryt","Delete":"Slett","Disable":"Slå","Download":"Last","Edit":"Rediger","Enable":"Slå","Okay":"Ok","Print":"Skriv","Refresh":"Oppdater","Save":"Lagre","Submit":"Send","Upload":"Last"},"nl":{"Add":"Voeg","Cancel":"Annuleren","Delete":"Verwijderen","Disable":"Uitschakelen","Download":"Downloaden","Edit":"Bewerken","Enable":"Inschakelen","Okay":"Oké","Print":"Afdrukken","Refresh":"Verversen","Save":"Opslaan","Submit":"Verzenden","Upload":"Uploaden"},"pl":{"Add":"Dodaj","Cancel":"Anuluj","Delete":"Usuń","Disable":"Wyłącz","Download":"Pobierz","Edit":"Edycja","Enable":"Włącz","Okay":"Dobrze","Print":"Drukuj","Refresh":"Odśwież","Save":"Zapisz","Submit":"Prześlij","Upload":"Wyślij"},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Refresh":"Atualizar","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{"Add":"Adaugă","Cancel":"Renunță","Delete":"Șterge","Disable":"Dezactivează","Download":"Descărcare","Edit":"Editare","Enable":"Activează","Okay":"Bine","Print":"Tipărește","Refresh":"Reîmprospătează","Save":"Salvează","Submit":"Trimite","Upload":"Încarcă"},"ru":{"Add":"Добавить","Cancel":"Отменить","Delete":"Исключить","Disable":"Инвалид","Download":"Скачать","Edit":"Редактировать","Enable":"Допускать","Okay":"Хорошо","Print":"Печать","Refresh":"Освежить","Save":"Спасти","Submit":"Представить","Upload":"Загрузить"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Odstrániť","Disable":"Zakázať","Download":"Stiahnuť","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Tlač","Refresh":"Obnoviť","Save":"Uložiť","Submit":"Predložiť","Upload":"Odoslať"},"sl":{"Add":"Dodaj","Cancel":"Prekliči","Delete":"Zbriši","Disable":"Onemogoči","Download":"Prenesi","Edit":"Uredi","Enable":"Omogoči","Okay":"V","Print":"Natisni","Refresh":"Osveži","Save":"Shrani","Submit":"Pošlji","Upload":"Pošlji"},"sq":{"Add":"_Shto","Cancel":"Anullo","Delete":"Elemino","Disable":"Jo","Download":"Shkarkimi","Edit":"Ndrysho","Enable":"Aktivo","Okay":"Mirë","Print":"Printo","Refresh":"Rifresko","Save":"Ruaj","Submit":"Dërgo","Upload":"Ngarko"},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Refresh":"Refresh","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{"Add":"เพิ่ม","Cancel":"ยกเลิก","Delete":"ลบ","Disable":"ปิดการใช้งาน","Download":"ดาวน์โหลด","Edit":"แก้ไข","Enable":"เปิด","Okay":"โอเค","Print":"พิมพ์","Refresh":"ปรับปรุงใหม่","Save":"บันทึก","Submit":"ส่ง","Upload":"อัปโหลด"},"tl":{"Add":"Magdagdag","Cancel":"Huwag","Delete":"Ibagsak","Disable":"Hindi","Download":"Ibaba","Edit":"Baguhin","Enable":"Kaibig","Okay":"Okay","Print":"Nakalimbag","Refresh":"Nakapagpapasigla","Save":"Mag","Submit":"Pagpapasakop","Upload":"Itaas"},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelliler","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Refresh":"Yenileme","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Refresh":"Реверс","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"ur":{"Add":"_شامل","Cancel":"منسوخ","Delete":"حذف","Disable":"منسوخ","Download":"اوپر","Edit":"مرتب","Enable":"فعال","Okay":"ٹھیک","Print":"پرنٹ","Refresh":"خوشی","Save":"محفوظ","Submit":"غیر","Upload":"اپ"},"zh":{"Add":"添加","Cancel":"取消","Delete":"删除","Disable":"禁用","Download":"下载","Edit":"编辑","Enable":"启用","Okay":"还好","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上传"},"zt":{"Add":"添加","Cancel":"取消","Delete":"刪除","Disable":"禁用","Download":"下載","Edit":"編輯","Enable":"開啟","Okay":"好吧","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上傳"}}', _a = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":" Filter"},"bg":{"Filter":"Филтър"},"bn":{"Filter":"ফিল্টার"},"ca":{"Filter":"Filtre"},"cs":{"Filter":"Filtr"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{"Filter":"Φίλτρο"},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{"Filter":"Filter"},"eu":{"Filter":"Iragazkia"},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Suodatin"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"gl":{"Filter":"Filtrar"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Filter"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{"Filter":"Filtras"},"lv":{"Filter":"Filtrs"},"ms":{"Filter":"Penapis"},"nb":{"Filter":"Filtrer"},"nl":{"Filter":"Filter"},"pl":{"Filter":"Filtr"},"pt":{"Filter":"Filtro"},"ro":{"Filter":"Filtru"},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{"Filter":"Filter"},"sq":{"Filter":"Filtra"},"sv":{"Filter":"Filter"},"th":{"Filter":"กรอง"},"tl":{"Filter":"Pansala"},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"ur":{"Filter":"فائلز"},"zh":{"Filter":"过滤器"},"zt":{"Filter":"分頁"}}', ka = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":" Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":"Qeydiyyat"},"bg":{"Previous":"Предишен","Next":"Следващият","Older":"По-","Newer":"По-","GoToPage":"Отиване на страница"},"bn":{"Previous":"পূর্ববর্তী","Next":"পরবর্তী","Older":"বয়স্ক","Newer":"নিউকার","GoToPage":"চিহ্নিত স্থানে চলুন"},"ca":{"Previous":"Anterior","Next":"Següent","Older":"Vella","Newer":"Més","GoToPage":"Vés a la pàgina"},"cs":{"Previous":"Předchozí","Next":"Další","Older":"Starší","Newer":"Novější","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyere","GoToPage":"Gå til side"},"de":{"Previous":"Vorherige","Next":"Nach","Older":"Ältere","Newer":"Neuer","GoToPage":"Zur Seite gehen"},"el":{"Previous":"Προηγούμενο","Next":"Επόμενο","Older":"Μεγαλύτερος","Newer":"Νεότερα","GoToPage":"Μετάβαση στη σελίδα"},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{"Previous":"Eelmine","Next":"Järgmine","Older":"Vanem","Newer":"Uuem","GoToPage":"Mine lehele"},"eu":{"Previous":"Aurrekoa","Next":"Hurrengoa","Older":"Zaharragoa","Newer":"Newer","GoToPage":"Joan orrira"},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uusi","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Plus","Newer":"Plus","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go Leathanach"},"gl":{"Previous":"Anterior","Next":"Seguinte","Older":"Idade","Newer":"Newer","GoToPage":"Ir á páxina"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Következő","Older":"Idősebb","Newer":"Újabb","GoToPage":"Ugrás az oldalra"},"id":{"Previous":"Sebelumnya","Next":"Berikutnya","Older":"Lebih","Newer":"Baru","GoToPage":"Ke Halaman"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"본문 바로가기"},"lt":{"Previous":"Ankstesnis","Next":"Sekantis","Older":"Senesni","Newer":"Naujokas","GoToPage":"Pereiti į puslapį"},"lv":{"Previous":"Iepriekšējais","Next":"Nākamais","Older":"Vecāki","Newer":"Jaunāks","GoToPage":"Iet uz lapu"},"ms":{"Previous":"Sebelumnya","Next":"Next","Older":"♪","Newer":"Perancis","GoToPage":"Pergi Ke Halaman"},"nb":{"Previous":"Forrige","Next":"Neste","Older":"Eldre","Newer":"Nyere","GoToPage":"Gå til siden"},"nl":{"Previous":"Vorige","Next":"Volgende","Older":"Ouder","Newer":"Nieuwer","GoToPage":"Ga naar pagina"},"pl":{"Previous":"Poprzedni","Next":"Następny","Older":"Starszy","Newer":"Nowsza","GoToPage":"Przejdź do strony"},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{"Previous":"Precedent","Next":"Înainte","Older":"Mai","Newer":"Mai","GoToPage":"Du-te la pagina"},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Старше","Newer":"Новый","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúca","Next":"Nasledujúci","Older":"Staršie","Newer":"Novšie","GoToPage":"Prejsť na stránku"},"sl":{"Previous":"Prejšnja","Next":"Naprej","Older":"Starejši","Newer":"Novejši","GoToPage":"Pojdi na stran"},"sq":{"Previous":"Paraardhëse","Next":"Në","Older":"Më","Newer":"Ri","GoToPage":"Shko tek faqja"},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{"Previous":"ก่อนหน้า","Next":"ต่อไป","Older":"อายุ","Newer":"สร้างใหม่","GoToPage":"ไปยังหน้า"},"tl":{"Previous":"Bago","Next":"Susunod","Older":"Mas","Newer":"Mas","GoToPage":"Pumunta sa Pahina"},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"ur":{"Previous":"پہلے","Next":"اگلا","Older":"عمررسیدہ","Newer":"نیا","GoToPage":"صفحہ ۲۴ پر جائیں"},"zh":{"Previous":"上一个","Next":"下一个","Older":"老年人","Newer":"更新","GoToPage":"转到页面"},"zt":{"Previous":"前一個","Next":"下一頁","Older":"老了","Newer":"更新","GoToPage":"跳至頁面"}}', Sa = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"يان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qalereya","Mon":"Bakı","Tue":"Qalereya","Wed":"Biznes","Thu":"Qalereya","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Axtarış","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Bakı","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{"Sun":"Слънце","Mon":"Мон","Tue":"Туе","Wed":"Сватба","Thu":"Thu","Fri":"Fri","Sat":"Сат","Sunday":"Неделя","Monday":"Понеделник","Tuesday":"Вторник","Wednesday":"Сряда","Thursday":"Четвъртък","Friday":"Петък","Saturday":"Събота"},"Months":{"Jan":"Ян","Feb":"Февруари","Mar":"Мар","Apr":"Apr","May":"Май","Jun":"Джун","Jul":"Юли","Aug":"Aug","Sep":"Сеп","Oct":"Окт","Nov":"Nov","Dec":"Дек","January":"Януари","Febuary":"Февруари","March":"Март","April":"Април","June":"Юни","July":"Юли","August":"Август","September":"Септември","October":"Октомври","November":"Ноември","December":"Декември"},"Today":"Днес"},"bn":{"Weekdays":{"Sun":"রবি","Mon":"মন","Tue":"মঙ্গল","Wed":"অস্বীকৃত","Thu":"বৃহঃ","Fri":"ফ্রিসেল","Sat":"শনি","Sunday":"রবিবার","Monday":"সোমবার","Tuesday":"মঙ্গলবার","Wednesday":"বুধবার","Thursday":"বৃহস্পতিবার","Friday":"শুক্রবার","Saturday":"শনিবার"},"Months":{"Jan":"জানুয়ারী","Feb":"ফেব্রুয়ারীMarch","Mar":"মার্চApril","Apr":"এপ্রিল","May":"মে","Jun":"জুনিউ","Jul":"জুমি","Aug":"আগস্ট","Sep":"সেপ্টেম্বরOctober","Oct":"অক্টোবর","Nov":"নভেম্বর","Dec":"ডিসেম্বর","January":"জানুয়ারী","Febuary":"ফেব্রুয়ারীof","March":"মার্চ","April":"এপ্রিল","June":"জুন","July":"জুলাই","August":"আগস্ট","September":"সেপ্টেম্বর","October":"অক্টোবর","November":"নভেম্বর","December":"সদস্য"},"Today":"আজ"},"ca":{"Weekdays":{"Sun":"Sol","Mon":"Dl","Tue":"Dt","Wed":"Dc","Thu":"Dj","Fri":"DvSaturday","Sat":"DsSunday","Sunday":"Diumenge","Monday":"Dilluns","Tuesday":"Dimarts","Wednesday":"Dimecres","Thursday":"Dijous","Friday":"Divendres","Saturday":"Dissabte"},"Months":{"Jan":"Mare","Feb":"FebMarch","Mar":"Mar","Apr":"AbrMay","May":"Maig","Jun":"JunJuly","Jul":"JulAugust","Aug":"AgoSeptember","Sep":"Set","Oct":"Oct","Nov":"Nov","Dec":"Des","January":"Gener","Febuary":"FebuaryCity","March":"Març","April":"Abril","June":"Juny","July":"Juliol","August":"Agost","September":"Setembre","October":"Octubre","November":"Novembre","December":"Desembre"},"Today":"Avui"},"cs":{"Weekdays":{"Sun":"Slunce","Mon":"Po","Tue":"Tue","Wed":"St","Thu":"Thu","Fri":"Fri","Sat":"Sad","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Únor","Mar":"Březen","Apr":"Duben","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Srpen","Sep":"Září","Oct":"Říjen","Nov":"Listopad","Dec":"Prosinec","January":"Leden","Febuary":"Únor","March":"Březen","April":"Duben","June":"Červen","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Listopad","December":"Prosinec"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tir","Wed":"On","Thu":"Thu","Fri":"Fri","Sat":"Lø","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Fejl","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mo","Tue":"Di","Wed":"Mi","Thu":"Do","Fri":"Fri","Sat":"Sa","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mär","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Juli","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dez","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{"Sun":"Ήλιος","Mon":"Δευ","Tue":"Τεύχος","Wed":"Τετ","Thu":"Θου","Fri":"Παρ","Sat":"Σάβ","Sunday":"Κυριακή","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο"},"Months":{"Jan":"Ιαν","Feb":"Φεβ","Mar":"Μαρ","Apr":"Απρ","May":"Μάιος","Jun":"Ιουν","Jul":"Ιουλ","Aug":"Αυγ","Sep":"Σεπ","Oct":"Οκτ","Nov":"Νοε","Dec":"Δεκ","January":"Ιανουάριος","Febuary":"Φεβουάριο","March":"Μάρτιος","April":"Απρίλιος","June":"Ιούνιος","July":"Ιούλιος","August":"Αύγουστος","September":"Σεπτέμβριος","October":"Οκτώβριος","November":"Νοέμβριος","December":"Δεκέμβριος"},"Today":"Σήμερα"},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundo","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov-Zelando","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{"Sun":"Päike","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattus","Sunday":"Pühapäev","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäeval","Friday":"Reede","Saturday":"Laupäev"},"Months":{"Jan":"Jan","Feb":"Veebruar","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oktoober","Nov":"Nov","Dec":"Dec","January":"Jaanuar","Febuary":"Febuary","March":"Märts","April":"Aprill","June":"Juuni","July":"Juuli","August":"August","September":"September","October":"Oktoober","November":"November","December":"Detsember"},"Today":"Täna"},"eu":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Apustua","Thu":"Og","Fri":"Fri","Sat":"Sat","Sunday":"Igandea","Monday":"Astelehena","Tuesday":"Asteartea","Wednesday":"Asteazkena","Thursday":"Osteguna","Friday":"Ostirala","Saturday":"Larunbata"},"Months":{"Jan":"Jan","Feb":"Ots","Mar":"Marmar","Apr":"Apr","May":"Maiatza","Jun":"Jun","Jul":"Jul","Aug":"Abusua","Sep":"Ira","Oct":"Oct","Nov":"Aza","Dec":"Abendua","January":"Urtarrila","Febuary":"Feburoa","March":"Martxoa","April":"Apirila","June":"Ekaina","July":"Uztaila","August":"Abuztua","September":"Iraila","October":"Urria","November":"Azaroa","December":"Abendua"},"Today":"Gaur"},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Su","Mon":"Ma","Tue":"Ti","Wed":"Ke","Thu":"To","Fri":"Pe","Sat":"La","Sunday":"Sunnuntai","Monday":"Maanantai","Tuesday":"Tiistai","Wednesday":"Keskiviikko","Thursday":"Torstai","Friday":"Perjantai","Saturday":"Lauantai"},"Months":{"Jan":"Tammi","Feb":"Helmi","Mar":"Maalis","Apr":"Huhti","May":"Toukokuu","Jun":"Kesä","Jul":"Heinä","Aug":"Elo","Sep":"Syys","Oct":"Loka","Nov":"Marras","Dec":"Joulu","January":"Tammikuu","Febuary":"Helmikuu","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuu","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuu"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Soleil","Mon":"Mon","Tue":"Tu","Wed":"Mariage","Thu":"Jeu","Fri":"Ven","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Janvier","Feb":"Fév","Mar":"Mars","Apr":"Avr","May":"Mai","Jun":"Juin","Jul":"Juillet","Aug":"Août","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Déc","January":"Janvier","Febuary":"Février","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Déan","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Dé","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"An","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Irl","Febuary":"Amharc","March":"Márta","April":"Amharc","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Nollaig"},"Today":"Sa"},"gl":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Apostamos","Thu":"Tu","Fri":"Frio","Sat":"Sat","Sunday":"Domingo","Monday":"Luns","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Xoves","Friday":"Venres","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Febreiro","Mar":"Mar","Apr":"Abril","May":"Maio","Jun":"Jun","Jul":"Xullo","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Novidade","Dec":"Dec","January":"Xaneiro","Febuary":"Febreiro","March":"Marzo","April":"Abril","June":"Xuño","July":"Xullo","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Decembro"},"Today":"Hoxe"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"יום"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"H","Tue":"Sze","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sz","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Matahari","Mon":"Mon","Tue":"Tue","Wed":"Busana","Thu":"Thu","Fri":"Fri","Sat":"Sab","Sunday":"Minggu","Monday":"Senin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Kamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Maret","April":"April","June":"Juni","July":"Juli","August":"Agustus","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"Hari"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンド","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日～金曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"₢","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2월","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{"Sun":"Saulė","Mon":"Mon","Tue":"Tue","Wed":"WEd","Thu":"Thu","Fri":"FrNAME","Sat":"Sat","Sunday":"Sekmadienis","Monday":"Pirmadienis","Tuesday":"Antradienis","Wednesday":"Trečiadienis","Thursday":"Ketvirtadienis","Friday":"Penktadienis","Saturday":"Šeštadienis"},"Months":{"Jan":"Sau","Feb":"Vas","Mar":"Mar","Apr":"Bal","May":"Gegužės","Jun":"Bir","Jul":"Lie","Aug":"Rgp","Sep":"Rp","Oct":"Spalis","Nov":"Nr","Dec":"Gruodis","January":"Sausis","Febuary":"Piešinys","March":"Kovas","April":"Balandis","June":"Birželis","July":"Liepa","August":"Rugpjūtis","September":"Rugsėjis","October":"Spalis","November":"Lapkritis","December":"Gruodis"},"Today":"Šiandien"},"lv":{"Weekdays":{"Sun":"Saule","Mon":"N","Tue":"Otr","Wed":"Tre","Thu":"Cet","Fri":"Pie","Sat":"Ses","Sunday":"Svētdiena","Monday":"Pirmdiena","Tuesday":"Otrdiena","Wednesday":"Trešdiena","Thursday":"Ceturtdiena","Friday":"Piektdiena","Saturday":"Sestdiena"},"Months":{"Jan":"Janvāris","Feb":"Febr","Mar":"Mar","Apr":"Apr","May":"Maijs","Jun":"Jūn","Jul":"Jūl","Aug":"Aug","Sep":"Sept","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Janvāris","Febuary":"Febuāris","March":"Marts","April":"Aprīlis","June":"Jūnijs","July":"Jūlijs","August":"Augusts","September":"Septembris","October":"Oktobris","November":"Novembris","December":"Decembris"},"Today":"Šodien"},"ms":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Perancis","Wed":"♪","Thu":"Khaw","Fri":"Perancis","Sat":"♪","Sunday":"Ahad","Monday":"Isnin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Khamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Perancis","Mar":"Perancis","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"♪","Aug":"Aug","Sep":"Perancis","Oct":"Takh","Nov":"Nov","Dec":"Amerika","January":"Januari","Febuary":"Febuary","March":"2010,","April":"April","June":"Juni","July":"Juli","August":"Ogos","September":"Perancis","October":"Oktober","November":"November","December":"Amerika"},"Today":"Hari"},"nb":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Februar","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"I"},"nl":{"Weekdays":{"Sun":"Zon","Mon":"Ma","Tue":"Di","Wed":"Wo","Thu":"Do","Fri":"Vr","Sat":"Zat","Sunday":"Zondag","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"February","March":"Maart","April":"April","June":"Juni","July":"Juli","August":"Augustus","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Vandaag"},"pl":{"Weekdays":{"Sun":"Słońce","Mon":"Mon","Tue":"Wtyczka","Wed":"Środ","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Niedziela","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Luty","Mar":"Mar","Apr":"Kwiecień","May":"Maj","Jun":"Czerwiec","Jul":"Lipiec","Aug":"Sierpień","Sep":"Wrzesień","Oct":"Październik","Nov":"Nov","Dec":"Grudzień","January":"Styczeń","Febuary":"Luty","March":"Marzec","April":"Kwiecień","June":"Czerwiec","July":"Lipiec","August":"Sierpień","September":"Wrzesień","October":"Październik","November":"Listopad","December":"Grudzień"},"Today":"Dzisiaj"},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"A","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{"Sun":"Soare","Mon":"Luni","Tue":"Tue","Wed":"Căsătorie","Thu":"Thu","Fri":"Vine","Sat":"Sat","Sunday":"Duminică","Monday":"Luni","Tuesday":"Marţi","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă"},"Months":{"Jan":"Jan","Feb":"Februarie","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Ianuarie","Febuary":"Febur","March":"Martie","April":"Aprilie","June":"Iunie","July":"Iulie","August":"August","September":"Septembrie","October":"Octombrie","November":"Noiembrie","December":"Decembrie"},"Today":"Astăzi"},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Мон","Tue":"Туи","Wed":"Свадьба","Thu":"Ту","Fri":"Фри","Sat":"Сидеть","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Ян","Feb":"Февраль","Mar":"Мар","Apr":"Апр","May":"Май","Jun":"Джун","Jul":"Джул","Aug":"Ауг","Sep":"Сеп","Oct":"Октября","Nov":"Ноябрь","Dec":"Декларация","January":"Январь","Febuary":"Февраль","March":"Март","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октября","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Po","Tue":"Ut","Wed":"Str","Thu":"Št","Fri":"Pi","Sat":"So","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Streda","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apríl","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"August","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Febuár","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"August","September":"September","October":"Október","November":"November","December":"December"},"Today":"Dnes"},"sl":{"Weekdays":{"Sun":"Sonce","Mon":"Naslednji","Tue":"Tor","Wed":"Sre","Thu":"Čet","Fri":"Fri","Sat":"Sob","Sunday":"Nedelja","Monday":"Ponedeljek","Tuesday":"Torek","Wednesday":"Sreda","Thursday":"Četrtek","Friday":"Petek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Avg","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Febuary","March":"Marec","April":"April","June":"Junij","July":"Julij","August":"Avgust","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Danes"},"sq":{"Weekdays":{"Sun":"Dielli","Mon":"Mon","Tue":"Tue","Wed":"Mer","Thu":"Tsu","Fri":"Pre","Sat":"Sat","Sunday":"E","Monday":"E","Tuesday":"E","Wednesday":"E","Thursday":"E","Friday":"E","Saturday":"E"},"Months":{"Jan":"Jan","Feb":"Fb","Mar":"Meri","Apr":"Për","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Tetor","Nov":"Nov","Dec":"Dhjetor","January":"Janar","Febuary":"Febuary","March":"Mars","April":"Prill","June":"Qershor","July":"Korrik","August":"Gusht","September":"Shtator","October":"Tetor","November":"Nëntor","December":"Dhjetor"},"Today":"Sot"},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{"Sun":"อาทิตย์","Mon":"นิ้ว","Tue":"Tue","Wed":"เว็บ","Thu":"ทู","Fri":"เนื้อ","Sat":"ที่นั่ง","Sunday":"อาทิตย์","Monday":"จันทร์","Tuesday":"อังคาร","Wednesday":"วันพุธ","Thursday":"พฤหัสบดี","Friday":"ศุกร์","Saturday":"เสาร์"},"Months":{"Jan":"ไม่นะ","Feb":"ก.","Mar":"ขนาด","Apr":"ขนาด","May":"พฤษภาคม","Jun":"จุน","Jul":"ก.","Aug":"อัก","Sep":"เซพ","Oct":"ตลับหมึก","Nov":"นอฟ","Dec":"ธ.","January":"มกราคม","Febuary":"อภิสิทธิ์","March":"มีนาคม","April":"เมษายน","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม"},"Today":"วันนี้"},"tl":{"Weekdays":{"Sun":"Araw","Mon":"Buwan","Tue":"Tue","Wed":"Damo","Thu":"Thu","Fri":"Kaibigan","Sat":"Sat","Sunday":"Linggo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miyerkules","Thursday":"Huwebes","Friday":"Biyernes","Saturday":"Sabado"},"Months":{"Jan":"Jan","Feb":"Sanggol","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Juul","Aug":"Ug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Pagpapasiya","January":"Enero","Febuary":"Febuary","March":"Marso","April":"Abril","June":"Hunyo","July":"Hulyo","August":"Agosto","September":"Setyembre","October":"Oktubre","November":"Nobyembre","December":"Disyembre"},"Today":"Ngayon"},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Febuary","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Про","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"П'ятниця","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарита","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"ur":{"Weekdays":{"Sun":"سورج","Mon":"مون","Tue":"ٹو","Wed":"وے","Thu":"چو","Fri":"فری","Sat":"شطرنج","Sunday":"اتوار","Monday":"منگل","Tuesday":"منگل","Wednesday":"بدھ","Thursday":"جمعرات","Friday":"جمعہ","Saturday":"سبت"},"Months":{"Jan":"یان","Feb":"فیب","Mar":"مار","Apr":"پرنٹ","May":"مئی","Jun":"جون","Jul":"یول","Aug":"آغ","Sep":"سیپ","Oct":"پرنٹ","Nov":"ن","Dec":"سوال","January":"جنوری","Febuary":"افریقہ","March":"مارچ","April":"اپریل","June":"جون","July":"جولائی","August":"اگست","September":"ستمبر","October":"اکتوبر","November":"نومبر","December":"دسمبر"},"Today":"آج"},"zh":{"Weekdays":{"Sun":"太阳","Mon":"月号","Tue":"图","Wed":"结婚","Thu":"图","Fri":"弗里语Name","Sat":"座位","Sunday":"礼拜","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六(上午)"},"Months":{"Jan":"扬","Feb":"二月","Mar":"马来","Apr":"农历四月","May":"5月","Jun":"军","Jul":"朱尔","Aug":"奥格","Sep":"九月","Oct":"十月(简体)","Nov":"页:1","Dec":"12月(中文)","January":"页:1","Febuary":"二级","March":"3月(半天会议)","April":"4月(半天会议)","June":"6月份","July":"7月(半天会议)","August":"8月(半天)","September":"9月(半天会议)","October":"10月(半天会议)","November":"11月(半天会议)","December":"12月(半天)"},"Today":"现在"},"zt":{"Weekdays":{"Sun":"太阳","Mon":"月","Tue":"二等分","Wed":"有婚","Thu":"三月","Fri":"弗里","Sat":"有","Sunday":"星期天","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六"},"Months":{"Jan":"1月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"三月","Jul":"二月","Aug":"8月","Sep":"九月","Oct":"十月","Nov":"11月","Dec":"二月","January":"1月","Febuary":"二月","March":"三月","April":"4月","June":"6月","July":"7月","August":"8月","September":"9月","October":"10月","November":"11月","December":"12月"},"Today":"今天"}}`, Ma = '{"en":{"Error":"Error","AutoComplete":{"NoResults":"No Results"}},"ar":{"Error":"الرعب","AutoComplete":{"NoResults":"لا نتائج"}},"az":{"Error":"Qeyd","AutoComplete":{"NoResults":"Qeydlər"}},"bg":{"Error":"Грешка","AutoComplete":{"NoResults":"Няма резултати"}},"bn":{"Error":"ত্রুটি","AutoComplete":{"NoResults":"কোনো ফলাফল পাওয়া যায়নি"}},"ca":{"Error":"Error","AutoComplete":{"NoResults":"Sense resultats"}},"cs":{"Error":"Chyba","AutoComplete":{"NoResults":"Žádné výsledky"}},"da":{"Error":"Fejl","AutoComplete":{"NoResults":"Ingen resultater"}},"de":{"Error":"Fehler","AutoComplete":{"NoResults":"Keine Ergebnisse"}},"el":{"Error":"Σφάλμα","AutoComplete":{"NoResults":"Χωρίς αποτελέσματα"}},"eo":{"Error":"Eraro","AutoComplete":{"NoResults":"Neniuj rezultoj"}},"es":{"Error":"Error","AutoComplete":{"NoResults":"No hay resultados"}},"et":{"Error":"Viga","AutoComplete":{"NoResults":"Tulemused puuduvad"}},"eu":{"Error":"Errorea","AutoComplete":{"NoResults":"Emaitzarik ez"}},"fa":{"Error":"خطای","AutoComplete":{"NoResults":"نتایج"}},"fi":{"Error":"Virhe","AutoComplete":{"NoResults":"Ei tuloksia"}},"fr":{"Error":"Erreur","AutoComplete":{"NoResults":"Aucun résultat"}},"ga":{"Error":"Amharc","AutoComplete":{"NoResults":"Gan a bheith ráite"}},"gl":{"Error":"Erro","AutoComplete":{"NoResults":"Sen resultados"}},"he":{"Error":"טעות","AutoComplete":{"NoResults":"לא תוצאות"}},"hi":{"Error":"त्रुटि","AutoComplete":{"NoResults":"परिणाम"}},"hu":{"Error":"Hiba","AutoComplete":{"NoResults":"Nincs eredmény"}},"id":{"Error":"Galat","AutoComplete":{"NoResults":"Tidak ada hasil"}},"it":{"Error":"Errore","AutoComplete":{"NoResults":"Nessun risultato"}},"ja":{"Error":"エラー","AutoComplete":{"NoResults":"結果なし"}},"ko":{"Error":"계정","AutoComplete":{"NoResults":"결과 없음"}},"lt":{"Error":"Klaida","AutoComplete":{"NoResults":"Nr rezultatai"}},"lv":{"Error":"Kļūda","AutoComplete":{"NoResults":"Nav rezultātu"}},"ms":{"Error":"Error","AutoComplete":{"NoResults":"Hasil No"}},"nb":{"Error":"Feil","AutoComplete":{"NoResults":"Ingen resultater"}},"nl":{"Error":"Fout","AutoComplete":{"NoResults":"Geen resultaten"}},"pl":{"Error":"Błąd","AutoComplete":{"NoResults":"Brak wyników"}},"pt":{"Error":"Erro","AutoComplete":{"NoResults":"Sem resultados"}},"ro":{"Error":"Eroare","AutoComplete":{"NoResults":"Niciun rezultat"}},"ru":{"Error":"Ошибка","AutoComplete":{"NoResults":"Нет результатов"}},"sk":{"Error":"Chyba","AutoComplete":{"NoResults":"Žiadne výsledky"}},"sl":{"Error":"Napaka","AutoComplete":{"NoResults":"Brez rezultatov"}},"sq":{"Error":"Gabim","AutoComplete":{"NoResults":"Asnjë rezultat"}},"sv":{"Error":"Fel","AutoComplete":{"NoResults":"Inga resultat"}},"th":{"Error":"ผิดพลาด","AutoComplete":{"NoResults":"ไม่มีผลลัพธ์"}},"tl":{"Error":"Pagkakamali","AutoComplete":{"NoResults":"Walang Resulta"}},"tr":{"Error":"Hata","AutoComplete":{"NoResults":"Sonuçlar yok"}},"uk":{"Error":"Помилка","AutoComplete":{"NoResults":"Немає результатів"}},"ur":{"Error":"خامی","AutoComplete":{"NoResults":"کوئی نتیجہ"}},"zh":{"Error":"错误","AutoComplete":{"NoResults":"无结果"}},"zt":{"Error":"錯誤","AutoComplete":{"NoResults":"沒有結果"}}}', Da = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":" Don"},"bg":{"Done":"Готово"},"ca":{"Done":"Fet"},"cs":{"Done":"Hotovo"},"da":{"Done":"Færdig"},"de":{"Done":"Fertig"},"el":{"Done":"Έγινε"},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{"Done":"Tehtud"},"eu":{"Done":"Eginda"},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Fait"},"ga":{"Done":"Arna"},"gl":{"Done":"Feito"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"Kész"},"id":{"Done":"Selesai"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{"Done":"@"},"lv":{"Done":"Pabeigts"},"ms":{"Done":"Selesai"},"nb":{"Done":"Ferdig"},"nl":{"Done":"Klaar"},"pl":{"Done":"Gotowe"},"pt":{"Done":"Feito"},"ro":{"Done":"Gata"},"ru":{"Done":"Сделано"},"sk":{"Done":"Hotovo"},"sl":{"Done":"Končano"},"sq":{"Done":"U"},"sv":{"Done":"Done"},"th":{"Done":"เสร็จแล้ว"},"tl":{"Done":"Tapos"},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"ur":{"Done":"بند"},"zh":{"Done":"完成"},"zt":{"Done":"完成"}}', $a = {
  Button: JSON.parse(fa),
  Filter: JSON.parse(_a),
  Pagination: JSON.parse(ka),
  Date: JSON.parse(Sa),
  Form: JSON.parse(Ma),
  Wizard: JSON.parse(Da)
}, V = (e, l) => {
  let t = e.split("."), a = $a[t[0]];
  const s = (l == null || l == null ? null : l.value) ?? "en";
  if (a !== void 0) {
    a[s] === void 0 ? a = a.en : a = a[s];
    let n = 1;
    for (; a !== void 0 && n < t.length; )
      a = a[t[n]], n++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Aa = /* @__PURE__ */ A({
  __name: "button-add",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Mt = /* @__PURE__ */ A({
  __name: "button-cancel",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: Q.danger
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ja = /* @__PURE__ */ A({
  __name: "button-delete",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: Q.danger
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Fa = /* @__PURE__ */ A({
  __name: "button-disable",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: Q.danger
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ A({
  __name: "button-download",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ A({
  __name: "button-edit",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ A({
  __name: "button-enable",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Dt = /* @__PURE__ */ A({
  __name: "button-okay",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ta = /* @__PURE__ */ A({
  __name: "button-print",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), $t = /* @__PURE__ */ A({
  __name: "button-refresh",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Pa = /* @__PURE__ */ A({
  __name: "button-save",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ A({
  __name: "button-upload",
  props: {
    disabled: { type: Boolean },
    size: {},
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = l, a = q(B), s = k(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: Q.primary
    }));
    return (n, o) => (r(), E(ee, K(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ca = /* @__PURE__ */ A({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("div", {
      class: N(["buttons", l.size ? `are-${l.size}` : "", l.alignment ? `is-${l.alignment}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Ba = /* @__PURE__ */ A({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: ue.normal }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), E(G, {
      icon: `square-${l.checked ? "check" : "xmark"}`,
      size: l.size
    }, null, 8, ["icon", "size"]));
  }
}), Ea = { class: "dropdown-trigger" }, za = ["aria-controls"], Ra = { class: "icon is-small" }, Wa = ["id"], Ia = { class: "dropdown-content" }, La = {
  key: 0,
  class: "dropdown-divider"
}, Va = { key: 0 }, Ua = /* @__PURE__ */ A({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const l = pt(), t = e, a = P(!1), s = k(() => {
      let u = ["dropdown"];
      return t.is_hoverable && u.push("is-hoverable"), t.is_right_align && u.push("is-right"), t.drops_up && u.push("is-up"), a.value && u.push("is-active"), u;
    }), n = k(() => {
      let u = se(t.items);
      return Array.isArray(u) && (u = u.map((p) => Array.isArray(p) ? { children: p } : { children: [p] })), Array.isArray(u) ? u : [u];
    }), o = (u) => {
      let p = ["dropdown-item"];
      return typeof u != "string" && u.active && p.push("is-active"), p;
    }, d = (u) => {
      if (typeof u != "string")
        return u.href;
    }, c = (u) => {
      if (typeof u != "string") {
        a.value = !1;
        let p = u;
        p.onClick && p.onClick();
      }
    };
    return (u, p) => (r(), i("div", {
      class: N(s.value)
    }, [
      y("div", Ea, [
        y("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": g(l),
          onClick: p[0] || (p[0] = (h) => a.value = !a.value)
        }, [
          y("span", null, O(t.title), 1),
          y("span", Ra, [
            C(G, {
              icon: "angle-down",
              "aria-hidden": "true"
            })
          ])
        ], 8, za)
      ]),
      y("div", {
        class: "dropdown-menu",
        id: g(l),
        role: "menu"
      }, [
        (r(!0), i(x, null, L(n.value, (h, v) => (r(), i("div", Ia, [
          v > 0 ? (r(), i("hr", La)) : D("", !0),
          (r(!0), i(x, null, L(h.children, (m) => (r(), E(me(typeof m == "string" ? "div" : "a"), {
            class: N(o(m)),
            href: d(m),
            onClick: (f) => c(m)
          }, {
            default: I(() => [
              typeof m == "string" ? (r(), i("p", Va, O(m), 1)) : D("", !0),
              Z(" " + O(typeof m == "string" ? null : m.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Wa)
    ], 2));
  }
}), rt = async (e, l, t) => {
  let a = await import(e);
  const s = Object.keys(a);
  return l && s.sort(l), s.filter((n) => t === void 0 || t.value === null || t.value.test(n)).map((n) => a[n]);
}, ja = /* @__PURE__ */ A({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const l = P(null), t = e, a = k(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return U(() => [t.url, t.filter], async () => {
      l.value = await rt(t.url, t.sortMethod, a);
    }), ce(async () => {
      l.value = await rt(t.url, t.sortMethod, a);
    }), (s, n) => (r(!0), i(x, null, L(l.value, (o) => (r(), E(me(o), K({ ref_for: !0 }, t.props), null, 16))), 256));
  }
}), Ga = { class: "control has-icons-left" }, Ha = ["placeholder"], Ka = { class: "is-left" }, At = /* @__PURE__ */ A({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = q(B), n = k(() => V("Filter.Filter", s)), o = P(null);
    U([o], (c) => {
      c[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const d = (c) => {
      c.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return ce(() => {
      t.default_value && (o.value = t.default_value);
    }), (c, u) => (r(), i("div", Ga, [
      H(y("input", {
        role: "searchbox",
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (p) => o.value = p),
        onKeypress: d
      }, null, 40, Ha), [
        [De, o.value]
      ]),
      y("span", Ka, [
        C(G, {
          icon: "filter",
          size: g(ue).small
        }, null, 8, ["size"])
      ])
    ]));
  }
}), Ya = {
  key: 0,
  class: "message-header"
}, qa = { class: "message-body" }, Za = /* @__PURE__ */ A({
  __name: "message",
  props: {
    type: { default: Q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: Y.normal }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = k(() => t.size === Y.normal ? null : `is-${t.size}`), n = k(() => `is-${t.type}`);
    return (o, d) => (r(), i("article", {
      class: N(["message", s.value, n.value])
    }, [
      t.title ? (r(), i("div", Ya, [
        y("p", null, O(t.title), 1),
        t.has_delete ? (r(), i("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: d[0] || (d[0] = (c) => a("close"))
        })) : D("", !0)
      ])) : D("", !0),
      y("div", qa, [
        T(o.$slots, "default", {}, () => [
          Z(O(t.message), 1)
        ])
      ])
    ], 2));
  }
}), be = /* @__PURE__ */ A({
  __name: "notification",
  props: {
    type: { default: ne.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("div", {
      class: N(["notification", "is-" + l.type, l.light ? "is-light" : ""])
    }, [
      T(t.$slots, "default", {}, () => [
        Z(O(l.message), 1)
      ])
    ], 2));
  }
}), Qa = {
  key: 0,
  class: "modal-background"
}, Xa = ["aria-label"], el = {
  key: 0,
  class: "title"
}, tl = { class: "block" }, al = /* @__PURE__ */ A({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: ne.info },
    message: {},
    header: {},
    block_user: { type: Boolean },
    has_close: { type: Boolean },
    is_light: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = k(() => {
      switch (t.type) {
        case ne.info:
          return "circle-info";
        case ne.success:
          return "circle-check";
        case ne.danger:
          return "bug";
        case ne.warning:
          return "circle-exclamation";
      }
    }), n = k(() => {
      var o = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && o.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || o.push("has-no-close"), o;
    });
    return (o, d) => (r(), i("div", {
      class: N({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (r(), i("div", Qa)) : D("", !0),
      C(St, {
        incoming: g(we).fadeIn,
        outgoing: g(we).fadeOut,
        speed: g(ye).slower
      }, {
        default: I(() => [
          t.visible ? (r(), i("div", {
            key: 0,
            class: N(n.value),
            role: "dialog",
            "aria-label": t.header ?? "Page Notification"
          }, [
            C(G, {
              icon: s.value,
              size: g(ue).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), i("h1", el, O(t.header), 1)) : D("", !0),
            y("div", tl, O(t.message), 1),
            t.has_close ? (r(), E(G, {
              key: 1,
              icon: "circle-xmark",
              onClick: d[0] || (d[0] = (c) => a("close")),
              size: g(ue).large,
              role: "button",
              "aria-label": "close"
            }, null, 8, ["size"])) : D("", !0)
          ], 10, Xa)) : D("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), ll = ["title", "disabled"], sl = ["title", "disabled"], nl = {
  key: 0,
  class: "pagination-list"
}, ol = {
  key: 0,
  class: "pagination-ellipsis"
}, rl = ["aria-label", "onOnclick"], Jt = /* @__PURE__ */ A({
  __name: "pagination",
  props: {
    use_next: { type: Boolean, default: !0 },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: Y.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean, default: !0 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = q(B), n = k(() => V(t.use_next ? "Pagination.Previous" : "Pagination.Older", s)), o = k(() => V(t.use_next ? "Pagination.Next" : "Pagination.Newer", s)), d = k(() => t.button_type ? `has-background-${t.button_type}` : ""), c = k(() => V("Pagination.GoToPage", s)), u = k(() => t.current_page === void 0 ? 0 : se(t.current_page) + (t.zero_page_index ? 1 : 0)), p = k(() => (t.has_previous ?? !1) || u.value > 0), h = k(() => (t.has_more ?? !1) || u.value < (t.total_pages === void 0 ? 0 : se(t.total_pages))), v = k(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (se(t.total_pages) > 5) {
        let S = Math.max(t.current_page === void 0 ? Math.floor(se(t.total_pages) / 2) : u.value, 3);
        return se(t.total_pages) - u.value === 0 ? S -= 2 : se(t.total_pages) - u.value === 1 && S--, [
          1,
          -1,
          S - 1,
          S,
          S + 1,
          -1,
          se(t.total_pages)
        ];
      } else {
        let S = [];
        for (let J = 1; J <= se(t.total_pages); J++)
          S.push(J);
        return S;
      }
    }), m = function() {
      p && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", se(t.current_page) - 1) : a("moveBack"));
    }, f = function() {
      h && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", se(t.current_page) + 1) : a("moveForward"));
    }, b = function(S) {
      a("goToPage", t.zero_page_index ? S - 1 : S);
    };
    return (S, J) => H((r(), i("nav", {
      class: N(["pagination", "is-centered", d.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      y("a", {
        class: N(["pagination-previous", d.value]),
        title: n.value,
        onClick: m,
        disabled: p.value ? null : "disabled"
      }, [
        C(G, {
          icon: "backward",
          class: "mr-1",
          size: g(ue).small
        }, null, 8, ["size"]),
        Z(" " + O(n.value), 1)
      ], 10, ll),
      y("a", {
        class: N(["pagination-next", d.value]),
        title: o.value,
        onClick: f,
        disabled: h.value ? null : "disabled"
      }, [
        Z(O(o.value) + " ", 1),
        C(G, {
          icon: "forward",
          class: "ml-1",
          size: g(ue).small
        }, null, 8, ["size"])
      ], 10, sl),
      t.total_pages !== void 0 ? (r(), i("ul", nl, [
        (r(!0), i(x, null, L(v.value, (_) => (r(), i("li", null, [
          _ === -1 ? (r(), i("span", ol, "…")) : (r(), i("a", {
            key: 1,
            class: N(["pagination-link", _ === u.value ? "is-current" : ""]),
            "aria-label": `${c.value} ${_}`,
            onOnclick: (R) => b(_)
          }, O(_), 43, rl))
        ]))), 256))
      ])) : D("", !0)
    ], 2)), [
      [oe, p.value || h.value]
    ]);
  }
}), ve = /* @__PURE__ */ A({
  __name: "Promised",
  props: {
    promise: {}
  },
  setup(e) {
    const l = e, t = P(null), a = q(B), s = k(() => `${V("Form.Error", a)}: ${t.value.message ?? t.value.toString()}`), n = P(!1), o = P(!1), d = k(() => !n.value && !o.value), c = P(null);
    async function u(p) {
      if (n.value = !1, o.value = !1, t.value = null, p == null)
        c.value = null;
      else {
        let h = g(p);
        Object.prototype.toString.call(h) !== "[object Promise]" && (h = Promise.resolve(h));
        try {
          c.value = await h, o.value = !0;
        } catch (v) {
          t.value = v, n.value = !0;
        }
      }
    }
    return U(
      () => l.promise,
      () => {
        u(l.promise);
      }
    ), ce(() => {
      u(l.promise);
    }), (p, h) => (r(), i(x, null, [
      d.value ? T(p.$slots, "pending", { key: 0 }, () => [
        C(g(pe), {
          size: g(Y).small
        }, null, 8, ["size"])
      ]) : D("", !0),
      n.value ? T(p.$slots, "rejected", he(K({ key: 1 }, t.value)), () => [
        C(g(be), {
          message: s.value,
          type: g(ne).danger
        }, null, 8, ["message", "type"])
      ]) : D("", !0),
      o.value ? T(p.$slots, "default", {
        key: 2,
        response: c.value
      }) : D("", !0)
    ], 64));
  }
}), ul = ["value", "max"], pe = /* @__PURE__ */ A({
  __name: "progress",
  props: {
    type: { default: Q.primary },
    size: { default: Y.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const l = e, t = k(() => l.maximum === void 0 ? null : (l.value ?? 0) / l.maximum * 100);
    return (a, s) => (r(), i("progress", {
      class: N(`progress is-${l.size} is-${l.type}`),
      value: l.value,
      max: l.maximum
    }, O(t.value ? `${t.value.toFixed(2)}%` : null), 11, ul));
  }
}), il = {
  key: 0,
  class: "navbar-link"
}, dl = {
  key: 0,
  class: "icon-text"
}, cl = { class: "icon" }, pl = { key: 1 }, ml = {
  key: 0,
  class: "icon-text"
}, hl = { class: "icon" }, bl = { key: 1 }, vl = {
  key: 2,
  class: "navbar-dropdown"
}, ut = /* @__PURE__ */ A({
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
      s("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, s = l;
    return (n, o) => {
      const d = ct("navbar-item", !0);
      return r(), E(me(t.childItems !== void 0 ? "div" : "a"), {
        class: N(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: I(() => [
          t.childItems !== void 0 ? (r(), i("a", il, [
            t.icon !== void 0 && t.icon !== null ? (r(), i("span", dl, [
              y("span", cl, [
                C(G, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              y("span", null, O(t.title), 1)
            ])) : (r(), i("span", pl, O(t.title), 1))
          ])) : (r(), i(x, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), i("span", ml, [
              y("span", hl, [
                C(G, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              y("span", null, O(t.title), 1)
            ])) : (r(), i("span", bl, O(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), i("div", vl, [
            (r(!0), i(x, null, L(t.childItems, (c) => (r(), E(d, K({ ref_for: !0 }, c, {
              onItemClicked: o[0] || (o[0] = (u) => s("itemClicked"))
            }), null, 16))), 256))
          ])) : D("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), gl = ["aria-label"], yl = { class: "navbar-brand" }, fl = ["aria-expanded"], _l = {
  key: 0,
  class: "navbar-start"
}, kl = { style: { width: "100px" } }, Sl = {
  key: 1,
  class: "navbar-end"
}, Ml = { style: { width: "100px" } }, Dl = /* @__PURE__ */ A({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const l = e, t = P(!1);
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
    }), (a, s) => (r(), i("nav", {
      class: N(["navbar", l.fixed_position, l.color !== void 0 && l.color !== null ? `is-${l.color}` : ""]),
      role: "navigation",
      "aria-label": l.ariaLabel
    }, [
      y("div", yl, [
        T(a.$slots, "brand"),
        y("a", {
          role: "button",
          class: N(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: s[0] || (s[0] = (n) => t.value = !t.value)
        }, s[3] || (s[3] = [
          y("span", { "aria-hidden": "true" }, null, -1),
          y("span", { "aria-hidden": "true" }, null, -1),
          y("span", { "aria-hidden": "true" }, null, -1)
        ]), 10, fl)
      ]),
      y("div", {
        class: N(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        l.start_items !== void 0 ? (r(), i("div", _l, [
          C(ve, {
            promise: l.start_items
          }, {
            default: I(({ response: n }) => [
              (r(!0), i(x, null, L(n, (o) => (r(), E(ut, K({ ref_for: !0 }, o, {
                onItemClicked: s[1] || (s[1] = (d) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              y("div", kl, [
                C(pe, {
                  size: g(Y).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : D("", !0),
        l.end_items !== void 0 ? (r(), i("div", Sl, [
          C(ve, {
            promise: l.end_items
          }, {
            default: I(({ response: n }) => [
              (r(!0), i(x, null, L(n, (o) => (r(), E(ut, K({ ref_for: !0 }, o, {
                onItemClicked: s[2] || (s[2] = (d) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              y("div", Ml, [
                C(pe, {
                  size: g(Y).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : D("", !0)
      ], 2)
    ], 10, gl));
  }
}), $l = /* @__PURE__ */ A({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("aside", {
      class: N(["menu", l.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${l.fixedPosition}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Al = { class: "menu-label" }, Jl = /* @__PURE__ */ A({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("p", Al, [
      Z(O(l.message) + " ", 1),
      T(t.$slots, "default")
    ]));
  }
}), Fl = ["href"], Nl = {
  key: 0,
  class: "icon-text"
}, wl = { class: "icon" }, Ol = { key: 1 }, Ft = /* @__PURE__ */ A({
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
    return (a, s) => (r(), i("li", null, [
      y("a", {
        href: l.href,
        onClick: s[0] || (s[0] = (n) => t()),
        class: N(l.active ? "is-active" : "")
      }, [
        l.icon !== void 0 && l.icon !== null ? (r(), i("span", Nl, [
          y("span", wl, [
            C(G, {
              icon: l.icon
            }, null, 8, ["icon"])
          ]),
          y("span", null, O(l.title), 1)
        ])) : (r(), i("span", Ol, O(l.title), 1)),
        T(a.$slots, "default")
      ], 10, Fl),
      T(a.$slots, "children")
    ]));
  }
}), Tl = { class: "menu-list" }, Pl = /* @__PURE__ */ A({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => {
      const s = ct("menu-list", !0);
      return r(), i("ul", Tl, [
        l.items !== null ? (r(), E(ve, {
          key: 0,
          promise: l.items
        }, {
          default: I(({ response: n }) => [
            (r(!0), i(x, null, L(n, (o) => (r(), i("li", null, [
              C(Ft, K({ ref_for: !0 }, o), null, 16),
              o.childItems !== void 0 ? (r(), E(s, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : D("", !0)
            ]))), 256))
          ]),
          pending: I(() => [
            y("li", null, [
              C(pe, {
                size: g(Y).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : D("", !0),
        T(t.$slots, "default")
      ]);
    };
  }
}), xl = /* @__PURE__ */ A({
  __name: "badge",
  props: {
    position: { default: Ze.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("span", {
      class: N(["badge", `is-${l.position}`, l.type === void 0 ? "" : `is-${l.type}`])
    }, [
      Z(O(l.text) + " ", 1),
      T(t.$slots, "default")
    ], 2));
  }
}), Nt = /* @__PURE__ */ A({
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
    return (t, a) => (r(), E(me(l.is), {
      class: N([
        l.has_arrow ? "has-tooltop-arrow" : "",
        l.position ? `has-tooltip-${l.position}` : "",
        l.multiline ? "has-tooltip-multiline" : "",
        l.type ? `has-tooltip-${l.type}` : "",
        l.text_align ? `has-tooltip-text-${l.text_align}` : "",
        l.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: I(() => [
        T(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Cl = /* @__PURE__ */ A({
  __name: "tag",
  props: {
    type: { default: Q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: Y.normal },
    is_delete: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let a = ["tag", `is-${l.type}`, `is-${l.size}`];
      return l.light && a.push("is-light"), l.rounded && a.push("is-rounded"), l.is_delete && a.push("is-delete"), a;
    });
    return (a, s) => (r(), i("span", {
      class: N(t.value)
    }, [
      T(a.$slots, "default", {}, () => [
        Z(O(l.text), 1)
      ])
    ], 2));
  }
}), Bl = /* @__PURE__ */ A({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("span", {
      class: N(["tags", l.size === null ? "" : "are-" + l.size, l.addons ? "has-addons" : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: St,
  Badge: xl,
  Button: ee,
  ButtonAdd: Aa,
  ButtonCancel: Mt,
  ButtonDelete: Ja,
  ButtonDisable: Fa,
  ButtonDownload: Na,
  ButtonEdit: wa,
  ButtonEnable: Oa,
  ButtonOkay: Dt,
  ButtonPrint: Ta,
  ButtonRefresh: $t,
  ButtonSave: Pa,
  ButtonUpload: xa,
  ButtonsContainer: Ca,
  CheckMark: Ba,
  DropDown: Ua,
  DynamicSlot: ja,
  Filter: At,
  Icon: G,
  Menu: $l,
  MenuEntry: Ft,
  MenuLabel: Jl,
  MenuList: Pl,
  Message: Za,
  NavBar: Dl,
  Notification: be,
  PageNotification: al,
  Pagination: Jt,
  Progress: pe,
  Promised: ve,
  Tag: Cl,
  Tags: Bl,
  ToolTip: Nt
}, Symbol.toStringTag, { value: "Module" })), zl = /* @__PURE__ */ A({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: l }) {
    const t = l, a = e, s = P(!1), n = P(!1), o = P(null), d = k(() => (a.disabled ?? !1) || n.value && a.handle_search !== null), c = k(() => {
      let h = [];
      return d || h.push("has-cursor"), s.value ? h.push("is-move") : h.push("is-grab"), h;
    }), u = (h) => d.value ? (h.preventDefault(), !1) : (h.stopPropagation(), h.dataTransfer.setData("value", JSON.stringify(a.copy_data)), s.value = !0, t("started"), !0), p = () => {
      s.value = !1, n.value = !0, t("stopped");
    };
    return ce(() => {
      if (a.handle_search) {
        let h = o.value.querySelector(a.handle_search);
        h !== null && (n.value = !0, h.addEventListener("mousedown", () => n.value = !1), h.addEventListener("mouseup", () => n.value = !0));
      }
    }), (h, v) => (r(), E(me(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: u,
      onDragend: p,
      class: N(c.value)
    }, {
      default: I(() => [
        T(h.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Rl = /* @__PURE__ */ A({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = P(!1), n = P(null), o = P(null);
    k(() => t.tag ?? "div");
    const d = (v) => {
      const m = o.value.getBoundingClientRect(), f = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let b = le.center;
      return v.x < f.x ? v.y < f.y ? b = le.topLeft : b = le.bottomLeft : v.y < f.y ? b = le.topRight : b = le.bottomRight, n.value = b, n.value;
    }, c = (v) => {
      v.preventDefault(), s.value = !0, a("itemEntered", d(v));
    }, u = (v) => {
      s.value = !0, a("itemExited", d(v));
    }, p = (v) => {
      v.preventDefault(), a("itemMoved", d(v));
    }, h = (v) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(v.dataTransfer.getData("value"))))
        return !1;
      v.stopPropagation(), v.preventDefault(), a("itemAdded", JSON.parse(v.dataTransfer.getData("value")), n.value), s.value = !1;
    };
    return (v, m) => (r(), E(me(t.tag), {
      ref_key: "handle",
      ref: o,
      class: N({ "is-bordered": s.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: h,
      onDragover: p
    }, {
      default: I(() => [
        T(v.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Wl = ["onClick"], Il = {
  key: 0,
  class: "icon"
}, wt = /* @__PURE__ */ A({
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
    const l = e, t = ie(), a = k(() => {
      var o = ["block-list", "has-radius", `is-${l.type ?? "primary"}`];
      return l.compact && o.push("is-small"), l.outlined && o.push("is-outlined"), l.highlighted && o.push("is-highlighted"), o;
    }), s = k(() => l.items ? l.items.map((o, d) => ({
      name: o.name ?? `item-${d}`,
      classes: [
        o.type ? `is-${o.type}` : "",
        o.outlined ? "is-outlined" : "",
        o.highlighted ? "is-highlighted" : "",
        o.icon ? "has-icon" : "",
        o.onClick ? "is-clickable" : ""
      ],
      onClick: o.onClick,
      icon: o.icon
    })) : null), n = (o) => {
      o.onClick && o.onClick();
    };
    return (o, d) => (r(), E(me(o.numbered == null || o.numbered == null || !o.numbered ? "ul" : "ol"), {
      class: N(a.value)
    }, {
      default: I(() => [
        s.value === null ? T(o.$slots, "default", { key: 0 }) : (r(!0), i(x, { key: 1 }, L(s.value, (c) => (r(), i(x, null, [
          g(t)[c.name] !== void 0 || g(t)[c.name] !== null || c.icon !== void 0 ? (r(), i("li", {
            key: 0,
            class: N(c.classes),
            onClick: (u) => n(c)
          }, [
            c.icon ? (r(), i("span", Il, [
              C(G, {
                icon: c.icon
              }, null, 8, ["icon"])
            ])) : D("", !0),
            T(o.$slots, c.name)
          ], 10, Wl)) : D("", !0)
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ll = ["onDragstart", "onDragover"], Vl = /* @__PURE__ */ A({
  __name: "sortable",
  props: {
    items: {},
    type: { default: Q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = P([]), n = P(-1), o = P(-1), d = P(null);
    U(t.items, (v, m) => {
      s.value = [...m];
    }), ce(() => {
      t.items !== null && (s.value = [...t.items]);
    });
    const c = (v) => {
      var m = v.target.getBoundingClientRect(), f = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let b = le.center;
      return v.y < f.y ? b = le.top : b = le.bottom, b;
    }, u = (v, m) => {
      m.stopPropagation(), n.value = v, m.dataTransfer.setData("value", null);
    }, p = (v, m) => {
      n.value && (m.stopPropagation(), v != n.value ? (o.value = v, d.value = c(m)) : (o.value = -1, d.value = null));
    }, h = (v) => {
      if (n.value) {
        v.stopPropagation();
        var m = o.value + (d.value == le.top ? 0 : 1), f = s.value.splice(m, 1)[0];
        m >= n.value && m--, s.value.splice(m, 0, f), o.value = -1, d.value = null, n.value = -1, a("sorted", s.value);
      }
    };
    return (v, m) => (r(), E(wt, {
      type: v.type,
      compact: v.compact,
      outlined: v.outlined,
      highlighted: v.highlighted,
      onDrop: h
    }, {
      default: I(() => [
        (r(!0), i(x, null, L(s.value, (f, b) => (r(), i(x, null, [
          H(y("li", null, [
            C(be, { light: !0 }, {
              default: I(() => m[1] || (m[1] = [
                Z(" ")
              ])),
              _: 1
            })
          ], 512), [
            [oe, o.value === b && n.value !== b && d.value === g(le).top]
          ]),
          y("li", {
            draggable: "true",
            onDragstart: (S) => u(b, S),
            onDragend: m[0] || (m[0] = (S) => n.value = null),
            onDragover: (S) => p(b, S),
            class: N({ "has-cursor": !0, "is-move": o.value == b, "is-grab": o.value != b })
          }, [
            T(v.$slots, "item", {
              item: f,
              index: b
            })
          ], 42, Ll),
          H(y("li", null, [
            C(be, { light: !0 }, {
              default: I(() => m[2] || (m[2] = [
                Z(" ")
              ])),
              _: 1
            })
          ], 512), [
            [oe, o.value === b && n.value !== b && d.value === g(le).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: zl,
  DropZone: Rl,
  Sortable: Vl
}, Symbol.toStringTag, { value: "Module" })), Be = "HiddenFields", et = "DisabledFields", jl = (e) => e, de = (e, l) => {
  const t = l("Translate", jl);
  return k(() => e.translate ?? t);
};
function tt(e, l) {
  const t = l(Be, fe(P([]))), a = l(et, fe(P([]))), s = k(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), n = k(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: s, disabledValues: n };
}
async function at(e) {
  let l = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? l = t : l = Promise.resolve(t);
  let a = await l, s = [];
  return a.value !== void 0 ? s = a.value : s = a, s;
}
const Gl = { class: "tags has-addons" }, Hl = { class: "tag is-link" }, Kl = ["onClick"], Yl = { key: 0 }, ql = ["placeholder"], Zl = { class: "dropdown-menu" }, Ql = { class: "dropdown-content" }, Xl = ["onClick"], es = {
  key: 1,
  class: "dropdown-item"
}, Ot = /* @__PURE__ */ A({
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
    const a = q(B), s = k(() => V("Form.AutoComplete.NoResults", a)), n = t, o = e, d = de(o, B), c = P([]), u = P(null), p = P(null), h = P(null), v = P(null);
    U(u, async (W) => {
      if (W != null) {
        if (W.length >= 2)
          if (o.values != null && o.values != null) {
            let ae = [];
            for (let M = 0; M < o.values.length && ((o.values[M].name.toUpperCase().indexOf(W.toUpperCase()) >= 0 || o.values[M].id.toUpperCase().indexOf(W.toUpperCase()) >= 0) && ae.push(o.values[M]), ae.length != 10); M++)
              ;
            p.value = ae;
          } else {
            let M = await (await (o.fetch ?? fetch)(`${o.callbackurl}?q=${encodeURIComponent(W)}`)).json();
            M.length > 10 && M.splice(10, M.length - 10), p.value = M;
          }
      } else
        p.value = null, v.value.innerHTML = "";
    });
    const m = () => {
      if (c.value.length == 0)
        return null;
      const W = c.value.slice();
      return o.limit != null && o.limit == 1 ? W.length > 0 ? W[0] : null : W;
    }, f = async (W) => {
      if (W == null)
        c.value.length > 0 && c.value.splice(0, c.value.length), u.value = null;
      else {
        const ae = await Promise.all(
          (Array.isArray(W) ? W : [W]).map(async (M) => {
            if (M.id !== void 0 && M.name !== void 0)
              return M;
            if (o.values != null && o.values != null)
              return M.id !== void 0 ? o.values.find((w) => w.id === M.id) : o.values.find((w) => w.name.toUpperCase() === M.toUpperCase() || w.id.toUpperCase() === M);
            {
              let j = await (await (o.fetch ?? fetch)(`${o.callbackurl}?${M.id === void 0 ? "q=" + encodeURIComponent(M) : "id=" + encodeURIComponent(M.id)}`)).json();
              return j.length > 0 ? (o.disabled && (j[0].readonly = !0), j[0]) : null;
            }
          })
        );
        c.value = ae.filter((M) => M !== null), o.limit !== void 0 && o.limit !== null && c.value.length > o.limit && c.value.splice(o.limit), n("valueChanged", { name: o.name, value: m() });
      }
    }, b = (W) => {
      W.preventDefault(), u.value = W.clipboardData.getData("text/plain");
    }, S = (W) => {
      switch (W.key) {
        case "Backspace":
          u.value != null && u.value.length > 0 && (u.value = u.value.substring(0, u.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          W.key.length == 1 && (u.value = (u.value == null ? "" : u.value) + W.key);
          break;
      }
    }, J = () => {
      u.value = null;
    }, _ = () => {
      v.value.focus();
    }, R = (W) => {
      c.value.push(W), J(), n("valueChanged", { name: o.name, value: m() });
    }, F = (W) => {
      c.value.splice(W, 1), _(), n("valueChanged", { name: o.name, value: m() });
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
      setValue: f
    }), (W, ae) => (r(), i("div", {
      class: "control autocomplete",
      onBlur: J,
      onClick: _
    }, [
      y("div", {
        class: N(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", o.disabled ? "is-disabled" : ""])
      }, [
        (r(!0), i(x, null, L(c.value, (M, w) => (r(), i("div", {
          class: "control",
          key: w
        }, [
          y("div", Gl, [
            y("a", Hl, O(g(d)(M.name)), 1),
            !M.readonly && !o.disabled ? (r(), i("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (j) => F(w)
            }, null, 8, Kl)) : D("", !0)
          ])
        ]))), 128)),
        o.disabled ? D("", !0) : (r(), i("div", Yl, [
          H(y("span", {
            ref_key: "contentSpan",
            ref: v,
            placeholder: g(d)(o.title ?? ""),
            contenteditable: "",
            class: N(h.value),
            onFocus: ae[0] || (ae[0] = (M) => {
              h.value = "is-focused";
            }),
            onBlur: ae[1] || (ae[1] = (M) => {
              h.value = null;
            }),
            onKeydown: S,
            onPaste: b
          }, null, 42, ql), [
            [oe, o.limit === void 0 || o.limit === null || c.value.length < o.limit]
          ])
        ]))
      ], 2),
      o.disabled ? D("", !0) : (r(), i("div", {
        key: 0,
        class: N(["dropdown", { "is-active": p.value != null && u.value != null && u.value != "" }])
      }, [
        y("div", Zl, [
          y("div", Ql, [
            p.value != null && p.value.length > 0 ? (r(!0), i(x, { key: 0 }, L(p.value, (M) => (r(), i("a", {
              class: "dropdown-item",
              onClick: (w) => R(M)
            }, O(g(d)(M.name)), 9, Xl))), 256)) : (r(), i("a", es, O(s.value), 1))
          ])
        ])
      ], 2))
    ], 32));
  }
}), Ie = /* @__PURE__ */ A({
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
    const t = e, a = l, s = de(t, B);
    return (n, o) => (r(), E(ee, {
      type: t.sstyle,
      icon: t.icon,
      title: g(s)(t.label ?? ""),
      onClick: o[0] || (o[0] = (d) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), ts = { class: "checkbox is-block" }, as = ["value", "disabled"], Tt = /* @__PURE__ */ A({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function, null] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = q(B), n = k(() => V("Form.Error", s)), o = t, d = de(a, B), c = P([]), u = P(!1), p = k(async () => {
      if (a.values === null)
        return [];
      {
        let b = await at(a.values), S = b.filter((J) => J.selected).map((J) => J.value);
        return c.value === null || c.value.length == 0 ? c.value = S.length > 0 ? [...S] : [] : (S = c.value, b = b.map((J) => ({
          label: J.label,
          value: J.value,
          selected: S.some((_) => _ === J.value)
        }))), b;
      }
    });
    U(c, (b) => {
      o("valueChanged", { name: a.name, value: h() });
    });
    const h = () => c.value.length == 0 ? null : c.value, v = (b) => {
      u.value = !0, c.value.splice(0), b !== null && (c.value = [...b]), u.value = !1, o("valueChanged", { name: a.name, value: h() });
    }, { hiddenValues: m, disabledValues: f } = tt(a.name, B);
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
      setValue: v
    }), (b, S) => (r(), i("div", null, [
      C(ve, { promise: p.value }, {
        default: I(({ response: J }) => [
          J !== null ? (r(!0), i(x, { key: 0 }, L(J, (_) => H((r(), i("label", ts, [
            H(y("input", {
              type: "checkbox",
              class: "checkbox",
              value: _.value,
              "onUpdate:modelValue": S[0] || (S[0] = (R) => c.value = R),
              disabled: a.disabled || g(f).some((R) => R === _.value.toString())
            }, null, 8, as), [
              [Ue, c.value]
            ]),
            Z(" " + O(g(d)(_.label)), 1)
          ], 512)), [
            [oe, !g(m).some((R) => R === _.value.toString())]
          ])), 256)) : D("", !0)
        ]),
        rejected: I(() => [
          C(g(be), {
            type: g(ne).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), ls = { class: "checkbox" }, ss = ["name", "disabled"], ns = {
  key: 0,
  class: "help is-danger"
}, Pt = /* @__PURE__ */ A({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = de(a, B), o = k(() => n.value(a.label)), d = P(!1);
    return U(d, (p) => s("valueChanged", { name: a.name, value: p })), l({
      /**
       * Gets the current value 
       */
      getValue: () => d.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (p) => {
        d.value = p;
      }
    }), (p, h) => (r(), i("label", ls, [
      H(y("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": h[0] || (h[0] = (v) => d.value = v)
      }, null, 8, ss), [
        [Ue, d.value]
      ]),
      Z(" " + O(o.value) + " ", 1),
      a.required ? (r(), i("span", ns, "*")) : D("", !0)
    ]));
  }
}), We = (e, l) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + l), t;
}, X = (e, l, t) => {
  let a = e;
  for (; a.length < t; )
    a = l + a;
  return a;
}, Je = (e, l, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${X(t.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let n = "";
      switch (t.getDay()) {
        case 0:
          n = "Sunday";
          break;
        case 1:
          n = "Monday";
          break;
        case 2:
          n = "Tuesday";
          break;
        case 3:
          n = "Wednesday";
          break;
        case 4:
          n = "Thursday";
          break;
        case 5:
          n = "Friday";
          break;
        case 6:
          n = "Saturday";
          break;
      }
      a += `${V("Date.Weekdays." + (e.length > 3 ? n : n.substring(0, 3)), l)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      a += `${X(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : X(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${X((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${X(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let o = t.getTimezoneOffset() * -1, d = parseInt((o / 60).toFixed(0)), c = o - Math.abs(d) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${d < 0 ? "-" : "+"}${X(Math.abs(d).toString(), "0", 2) + ":" + X(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${d < 0 ? "-" : "+"}${X(Math.abs(d).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${X(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${X((t.getMonth() + 1).toString(), "0", e.length)}`;
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
      a += `${V("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), l)}`;
      break;
    case "s":
    case "ss":
      a += `${X(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var s = t.getFullYear().toString(); s.length > 2; )
        s = s.substring(1);
      a += `${X(s.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${X(t.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      a += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return a;
}, ke = (e, l, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let a = "", s = "";
  for (var n = 0; n < t.length; n++)
    switch (t.charAt(n)) {
      case "\\":
        s != "" && (a += Je(s, l, e), s = ""), a += t.charAt(n + 1), n++;
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
        s != "" && s.charAt(0) != t.charAt(n) ? (a += Je(s, l, e), s = "") : s += t.charAt(n);
        break;
      default:
        s != "" && (a += Je(s, l, e), s = ""), a += t.charAt(n);
        break;
    }
  return s != "" && (a += Je(s, l, e), s = ""), a;
}, os = { class: "control" }, rs = ["name", "id", "disabled"], it = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), lt = /* @__PURE__ */ A({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null), o = k(() => {
      if (n.value == null || n.value == "")
        return null;
      var u = Number(n.value.substring(3, 5)), p = Number(n.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return U(n, (u) => {
      s("valueChanged", { name: a.name, value: u });
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => n.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (u) => {
        if (u != null && it.test(u)) {
          var p = it.exec(u);
          u = (p[3] == "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)) + ":" + p[2] + ":00";
        }
        n.value = u;
      }
    }), (u, p) => (r(), i("div", os, [
      H(y("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h),
        disabled: a.disabled,
        style: Ae(o.value)
      }, null, 12, rs), [
        [De, n.value]
      ])
    ]));
  }
}), us = { class: "control has-icons-left has-icons-right" }, is = ["name", "id", "placeholder", "disabled"], ds = { class: "modal-content" }, cs = { class: "panel is-primary is-dateselect" }, ps = { class: "panel-heading" }, ms = { class: "columns card-header-title" }, hs = { class: "column" }, bs = { class: "column has-text-centered" }, vs = { class: "column has-text-right" }, gs = { class: "panel-block" }, ys = { class: "table is-striped has-text-centered" }, fs = ["onClick"], _s = { key: 0 }, ks = {
  colspan: "100%",
  class: "has-text-centered"
}, Ss = { class: "panel-block" }, $e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Fe = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), xt = /* @__PURE__ */ A({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = P(null), s = e, n = t, o = P(!1), d = P(null), c = P(null), u = Qt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = q(B), h = fe({
      Sun: k(() => V("Date.Weekdays.Sun", p)),
      Mon: k(() => V("Date.Weekdays.Mon", p)),
      Tue: k(() => V("Date.Weekdays.Tue", p)),
      Wed: k(() => V("Date.Weekdays.Wed", p)),
      Thu: k(() => V("Date.Weekdays.Thu", p)),
      Fri: k(() => V("Date.Weekdays.Fri", p)),
      Sat: k(() => V("Date.Weekdays.Sat", p))
    }), v = k(() => d.value !== null && (s.includeTime ? Fe : $e).test(d.value)), m = () => {
      if (d.value == null || d.value == "")
        return null;
      {
        if (!Fe.test(d.value) && s.includeTime)
          return null;
        if (!s.includeTime && !$e.test(d.value))
          return null;
        if ($e.test(d.value) && s.includeTime)
          return null;
        let M = s.includeTime ? Fe.exec(d.value) : $e.exec(d.value);
        return new Date(
          parseInt(M[3]),
          parseInt(M[2]) - 1,
          parseInt(M[1]),
          s.includeTime ? parseInt(M[4]) : 0,
          s.includeTime ? parseInt(M[5]) : 0,
          0,
          0
        );
      }
    };
    U(d, (M) => {
      if (M == null)
        n("valueChanged", { name: s.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!$e.test(M) && !Fe.test(M)) {
        M = M.replaceAll(/[^0-9]/g, "");
        for (var w = [], j = 0; j < M.length; j += 2)
          j == 4 ? (w.push(M.substring(j, Math.min(M.length - j, 4) + j)), j += 2) : w.push(M.substring(j, Math.min(M.length - j, 2) + j));
        w.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(w[0]) || w.splice(0), w.length > 1 && (/^[0-3]/.test(w[1]) ? /^(01|03|05|07|08|10|12)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(w[1]) || w.splice(1) : /^(02|04|06|09|11)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(w[1]) || w.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(w[1]) || w.splice(1) : w.splice(1)), w.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(w[3]) || w.splice(3)), w.length > 4 && (/^[0-5][0-9]?$/.test(w[4]) || w.splice(4))), M = w.join(""), !s.includeTime && M.length > 8 && (M = M.substring(0, 8)), M.length >= 2 && (M = M.substring(0, 2) + "-" + (M.length > 2 ? M.substring(2) : "")), M.length >= 5 && (M = M.substring(0, 5) + "-" + (M.length > 5 ? M.substring(5) : "")), M.length >= 9 && s.includeTime && (M = M.substring(0, 9) + " " + (M.length > 9 ? M.substring(9) : "")), M.length >= 11 && (M = M.substring(0, 11) + ":" + (M.length > 11 ? M.substring(11) : "")), d.value = M;
      } else {
        var re = m();
        v && n("valueChanged", { name: s.name, value: re }), u.Month = re.getMonth(), u.Year = re.getFullYear();
      }
    });
    const f = k(() => ke(new Date(u.Year, u.Month, 1), p, "MMMM")), b = k(() => {
      var M = [], w = new Date(u.Year, u.Month, 1);
      w = We(w, w.getDay() * -1);
      for (var j = m(), re = We(new Date(u.Year, u.Month, 1), 32).getMonth(); w.getMonth() != re; ) {
        for (var Ee = [], st = 0; st < 7; st++)
          Ee.push({
            Number: w.getDate(),
            Disabled: w.getMonth() != u.Month,
            isToday: ke(w, p, "yyyy-MM-dd") == ke(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: j != null && ke(w, p, "yyyy-MM-dd") == ke(j, p, "yyyy-MM-dd")
          }), w = We(w, 1);
        M.push(Ee);
      }
      return M;
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
      setValue: function(M) {
        M == null ? d.value = null : d.value = ke(M, p, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
      }
    });
    const J = (M) => {
      M.value == null ? d.value != null && (d.value = d.value.split(" ")[0]) : d.value != null ? d.value = d.value.split(" ")[0] + " " + M.value : d.value = `${X((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year} ${M.value}`;
    }, _ = (M) => {
      if (!M.Disabled && !M.isSelected)
        if (d.value === null)
          d.value = `${X(M.Number.toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (s.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var w = d.value.split(" ");
          w[0] = `${X(M.Number.toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year}`, d.value = `${w[0]}${w.length > 1 ? " " + w[1] : ""}`;
        }
    }, R = () => {
      d.value = c.value, o.value = !1;
    }, F = () => {
      s.disabled || (c.value = d.value, o.value = !0);
    }, W = () => {
      s.disabled || (d.value = null);
    }, ae = (M) => {
      u.Month + M == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + M == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += M;
    };
    return (M, w) => (r(), i("div", null, [
      y("div", us, [
        H(y("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": w[0] || (w[0] = (j) => d.value = j),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, is), [
          [De, d.value]
        ]),
        y("span", {
          class: "icon is-small is-left is-clickable",
          onClick: F
        }, [
          C(g(G), { icon: "calendar-alt" })
        ]),
        y("span", {
          class: "icon is-small is-right is-clickable",
          onClick: W
        }, [
          C(g(G), { icon: "window-close" })
        ])
      ]),
      y("div", {
        class: N(["modal", { "is-active": o.value }])
      }, [
        w[4] || (w[4] = y("div", { class: "modal-background" }, null, -1)),
        y("div", ds, [
          y("div", cs, [
            y("div", ps, [
              y("div", ms, [
                y("div", hs, [
                  C(g(G), {
                    icon: "arrow-circle-left",
                    onClick: w[1] || (w[1] = (j) => ae(-1))
                  })
                ]),
                y("div", bs, O(f.value) + " " + O(u.Year), 1),
                y("div", vs, [
                  C(g(G), {
                    icon: "arrow-circle-right",
                    onClick: w[2] || (w[2] = (j) => ae(1))
                  })
                ])
              ])
            ]),
            y("div", gs, [
              y("table", ys, [
                y("thead", null, [
                  y("tr", null, [
                    y("th", null, O(g(h).Sun), 1),
                    y("th", null, O(g(h).Mon), 1),
                    y("th", null, O(g(h).Tue), 1),
                    y("th", null, O(g(h).Wed), 1),
                    y("th", null, O(g(h).Thu), 1),
                    y("th", null, O(g(h).Fri), 1),
                    y("th", null, O(g(h).Sat), 1)
                  ])
                ]),
                y("tbody", null, [
                  (r(!0), i(x, null, L(b.value, (j) => (r(), i("tr", null, [
                    (r(!0), i(x, null, L(j, (re) => (r(), i("td", {
                      class: N(["is-unselectable", re.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", re.isToday ? "has-background-primary-dark" : "", re.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ee) => _(re)
                    }, O(re.Number), 11, fs))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (r(), i("tfoot", _s, [
                  y("tr", null, [
                    y("td", ks, [
                      C(lt, {
                        ref: a.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValueChanged: J
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : D("", !0)
              ])
            ]),
            y("div", Ss, [
              C(g(Dt), {
                addonclass: "card-footer-item",
                disabled: !v.value,
                onClick: w[3] || (w[3] = (j) => o.value = !1)
              }, null, 8, ["disabled"]),
              C(g(Mt), {
                addonclass: "card-footer-item",
                onClick: R
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
}), Ct = /* @__PURE__ */ A({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: l, emit: t }) {
    let a, s;
    const n = ra(B);
    xe([`${n}summernote-lite.min.css`]), [a, s] = Xt(() => import(`${n}summernote`)), await a, s();
    const o = P(null), d = e, c = t;
    return U(() => d.disabled, (h) => {
      o.value != null && $(o.value).summernote(h ? "disable" : "enable");
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => $(o.value).summernote("code"),
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (h) => {
        $(o.value).summernote("code", h);
      }
    }), ce(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(h) {
            c("valueChanged", { name: d.name, value: h });
          }
        }
      }), (d.disabled ?? !1) && $(o.value).summernote("disable");
    }), ea(() => {
      $(o.value).summernote("destroy");
    }), (h, v) => (r(), i("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Le = /* @__PURE__ */ A({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const l = e, t = de(l, B);
    return (a, s) => (r(), E(me(l.subtype), null, {
      default: I(() => [
        Z(O(g(t)(l.label ?? "")), 1)
      ]),
      _: 1
    }));
  }
}), Ms = ["name"], Bt = /* @__PURE__ */ A({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null);
    return U(n, (c) => s("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => n.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (c) => {
        n.value = c;
      }
    }), (c, u) => H((r(), i("input", {
      type: "hidden",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p)
    }, null, 8, Ms)), [
      [De, n.value]
    ]);
  }
}), Ds = ["id", "name", "disabled", "min", "max", "step"], Et = /* @__PURE__ */ A({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null), o = () => {
      if (n.value === "" || n.value === null)
        return null;
      let c = parseInt(n.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, d = (c) => {
      n.value = c === null ? "" : c.toString();
    };
    return U([n], (c) => s("valueChanged", { name: a.name, value: o() })), l({
      /**
       * Gets the current value 
       */
      getValue: o,
      /**
       * Sets the current value
       * 
       * @param value number|string|null
       * @returns void
       */
      setValue: d
    }), (c, u) => H((r(), i("input", {
      type: "number",
      class: "input",
      id: a.name,
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p),
      disabled: a.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, Ds)), [
      [De, n.value]
    ]);
  }
}), $s = ["id"], Ve = /* @__PURE__ */ A({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const l = e, t = de(l, B);
    return (a, s) => (r(), i("p", {
      id: l.name
    }, O(g(t)(l.label ?? "")), 9, $s));
  }
}), As = { class: "radio" }, Js = ["name", "value", "disabled"], zt = /* @__PURE__ */ A({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = q(B), n = k(() => V("Form.Error", s)), o = t, d = de(a, B), c = P(null), u = function() {
      return c.value;
    };
    U(c, (f) => {
      o("valueChanged", { name: a.name, value: u() });
    });
    const p = k(async () => {
      if (a.values == null)
        return [];
      {
        let f = await at(a.values);
        return c.value === null && f.some((b) => b.selected) && (c.value = f.find((b) => b.selected).value), f.map((b) => ({
          label: b.label,
          value: b.value,
          selected: c.value === b.value
        }));
      }
    }), h = (f) => {
      c.value = f;
    }, { hiddenValues: v, disabledValues: m } = tt(a.name, B);
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
    }), (f, b) => (r(), i("div", null, [
      C(ve, { promise: p.value }, {
        default: I(({ response: S }) => [
          f.values != null ? (r(!0), i(x, { key: 0 }, L(S, (J) => (r(), i(x, null, [
            H(y("label", As, [
              y("input", {
                type: "radio",
                name: a.name,
                value: J.value,
                class: "radio",
                disabled: a.disabled || g(m).some((_) => _ === J.value.toString())
              }, null, 8, Js),
              Z(" " + O(g(d)(J.label)), 1)
            ], 512), [
              [oe, !g(v).some((_) => _ === J.value.toString())]
            ]),
            b[0] || (b[0] = y("br", null, null, -1))
          ], 64))), 256)) : D("", !0)
        ]),
        pending: I(() => [
          C(g(pe))
        ]),
        rejected: I(() => [
          C(g(be), {
            type: g(ne).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Fs = { class: "select" }, Ns = ["id", "name", "multiple", "disabled"], ws = ["value", "selected", "disabled"], Os = ["label"], Ts = ["value", "selected", "disabled"], Rt = (e, l, t) => {
  let a = {
    label: e === null ? l.label : `${e}->${l.label}`,
    values: []
  }, s = t.length;
  return t.push(a), l.values.forEach((n) => {
    n.values === void 0 ? a.values.push(n) : t = Rt(a.label, n, t);
  }), t[s].values.length == 0 && t.splice(s, 1), t;
}, Wt = /* @__PURE__ */ A({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = q(B), n = k(() => V("Form.Error", s)), o = t, d = de(a, B), c = P(null), u = P(!1), p = k(async () => {
      if (a.values == null)
        return [];
      {
        let b = await at(a.values), S = b.filter((_) => _.selected).map((_) => _.value);
        b.some((_) => _.values !== void 0) && b.filter((_) => _.values !== void 0).forEach((_) => {
          S = S.concat(
            _.values.filter((R) => R.selected).map((R) => R.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (b = b.map((_) => {
          let R = _;
          return R.values !== void 0 && (R.values = R.values.map((F) => (F.selected = c.value.some((W) => W === F.value), F))), R;
        }), c.value.forEach((_) => {
          b.some((R) => R.value !== void 0 && R.value === _ || R.values !== void 0 && R.values.some((F) => F.value === _)) || b.push({
            label: _,
            value: _
          });
        }));
        let J = [];
        return b.forEach((_) => {
          _.values === void 0 ? J.push(_) : J = Rt(_.label, _, J);
        }), J;
      }
    }), h = () => c.value == null || c.value.length == 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    U(c, () => {
      u.value || o("valueChanged", { name: a.name, value: h() });
    }), U(u, (b) => {
      b || o("valueChanged", { name: a.name, value: h() });
    });
    const v = (b) => {
      u.value = !0, b != null ? a.multiple ? c.value = Array.isArray(b) ? b : [b] : c.value = b : a.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: m, disabledValues: f } = tt(a.name, B);
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
      setValue: v
    }), (b, S) => (r(), i("div", Fs, [
      p.value != null ? (r(), E(ve, {
        key: 0,
        promise: p.value
      }, {
        default: I(({ response: J }) => [
          H(y("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: N([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": S[0] || (S[0] = (_) => c.value = _),
            disabled: a.disabled
          }, [
            J != null ? (r(!0), i(x, { key: 0 }, L(J, (_) => (r(), i(x, null, [
              _.values == null ? H((r(), i("option", {
                key: 0,
                value: _.value,
                selected: _.selected,
                disabled: g(f).some((R) => R === _.value.toString())
              }, O(g(d)(_.label)), 9, ws)), [
                [oe, !g(m).some((R) => R === _.value.toString())]
              ]) : D("", !0),
              _.values != null ? (r(), i("optgroup", {
                key: 1,
                label: g(d)(_.label)
              }, [
                (r(!0), i(x, null, L(_.values, (R) => H((r(), i("option", {
                  value: R.value,
                  selected: R.selected,
                  disabled: g(f).some((F) => F === R.value.toString())
                }, O(g(d)(R.label)), 9, Ts)), [
                  [oe, !g(m).some((F) => F === R.value.toString())]
                ])), 256))
              ], 8, Os)) : D("", !0)
            ], 64))), 256)) : D("", !0)
          ], 10, Ns), [
            [ta, c.value]
          ])
        ]),
        pending: I(() => [
          C(g(pe))
        ]),
        rejected: I(() => [
          C(g(be), {
            type: g(ne).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : D("", !0)
    ]));
  }
}), Ps = { class: "field" }, xs = ["id", "name", "disabled"], Cs = ["for"], Bs = {
  key: 0,
  class: "help is-danger"
}, It = /* @__PURE__ */ A({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = de(a, B), o = P(!1);
    return U(o, (u) => s("valueChanged", { name: a.name, value: u })), l({
      /**
       * Gets the current value 
       */
      getValue: () => o.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (u) => {
        o.value = u;
      }
    }), (u, p) => (r(), i("div", Ps, [
      H(y("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => o.value = h),
        disabled: a.disabled
      }, null, 8, xs), [
        [Ue, o.value]
      ]),
      y("label", { for: u.name }, [
        Z(O(g(n)(a.label)) + " ", 1),
        a.required ? (r(), i("span", Bs, "*")) : D("", !0)
      ], 8, Cs)
    ]));
  }
}), Es = ["type", "name", "disabled", "maxlength"], Lt = /* @__PURE__ */ A({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null);
    return U(n, (c) => s("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => n.value,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: (c) => {
        n.value = c;
      }
    }), (c, u) => H((r(), i("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p)
    }, null, 8, Es)), [
      [aa, n.value]
    ]);
  }
}), zs = ["id", "name", "rows", "cols", "maxlength", "disabled"], Vt = 9, Se = String.fromCharCode(Vt), Ne = `
`, Ut = /* @__PURE__ */ A({
  __name: "textarea",
  props: {
    maxlength: {},
    rows: {},
    cols: {},
    supportsTab: { type: Boolean },
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null);
    U(n, (u) => {
      s("valueChanged", { name: a.name, value: u });
    });
    const o = () => n.value, d = (u) => {
      n.value = u;
    };
    l({
      /**
       * Gets the current value 
       */
      getValue: o,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: d
    });
    const c = (u) => {
      if (a.supportsTab) {
        let p = o();
        switch (u.keyCode) {
          case Vt:
            let h = u.target.selectionStart, v = u.target.selectionEnd, m = p.substring(0, h), f = p.length > v ? p.substring(v) : "", b = h == v ? "" : p.substring(h, v);
            if (b.indexOf(`
`) < 0)
              u.shiftKey ? b.startsWith(Se) ? (b = b.substring(1), h--) : m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--) : b = Se + b;
            else {
              let S = !1;
              b.endsWith(Ne) && (S = !0, b = b.substring(0, b.length - 1));
              let J = b.split(Ne);
              b = "", u.shiftKey && m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--), J.forEach((_, R) => {
                u.shiftKey && _.startsWith(Se) ? _ = _.substring(1) : u.shiftKey || (_ = Se + _), b += _ + (R === J.length - 1 ? "" : Ne);
              }), S && (b += Ne);
            }
            return p = m + b + f, h += b.length == 1 ? 1 : 0, v = h + (b.length == 1 ? 0 : b.length), d(p), u.target.selectionStart = h, u.target.selectionEnd = v, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, p) => H((r(), i("textarea", {
      class: "textarea",
      id: a.name,
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h)
    }, null, 40, zs)), [
      [De, n.value]
    ]);
  }
}), jt = /* @__PURE__ */ A({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const l = ie(), t = e, a = k(() => {
      let n = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (n = n.concat(t.modifiers.map((o) => `is-${o}`))), n;
    }), s = k(() => t.columns.map((n, o) => {
      let d = [
        "column",
        n.class ?? "",
        n.size ? `is-${n.size}` : "",
        n.offset ? `is-offset-${n.offset}` : ""
      ];
      return n.border && (n.border.some((c) => c === Ye.all) ? d.push("is-bordered") : n.border.forEach((c) => d.push(`is-bordered-${c}`))), {
        name: n.name ?? `col-${o}`,
        class: d
      };
    }));
    return (n, o) => (r(), i("div", {
      class: N(a.value)
    }, [
      (r(!0), i(x, null, L(s.value, (d) => (r(), i(x, null, [
        g(l)[d.name] ? (r(), i("div", {
          key: 0,
          class: N(d.class)
        }, [
          T(n.$slots, d.name)
        ], 2)) : D("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Rs = (e) => {
  let l = te.twelve;
  if (e !== void 0)
    switch (e) {
      case 1:
        l = te.one;
        break;
      case 2:
        l = te.two;
        break;
      case 3:
        l = te.three;
        break;
      case 4:
        l = te.four;
        break;
      case 5:
        l = te.five;
        break;
      case 6:
        l = te.six;
        break;
      case 7:
        l = te.seven;
        break;
      case 8:
        l = te.eight;
        break;
      case 9:
        l = te.nine;
        break;
      case 10:
        l = te.ten;
        break;
      case 11:
        l = te.eleven;
        break;
      default:
        l = te.twelve;
        break;
    }
  return l;
}, Gt = /* @__PURE__ */ A({
  __name: "inputs-collection",
  props: {
    fields: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = (m) => ({
      size: Rs(m.form_columns),
      class: "field"
    }), s = e, n = t;
    let o = [];
    const d = k(() => {
      let m = [], f = [], b = 0;
      return o = s.fields.map((S, J) => P(null)), s.fields.forEach((S, J) => {
        let _ = S.form_columns ?? 12;
        b + _ > 12 && (m.push(f), f = [], b = 0), f.push({ ...S, refIndex: J }), b += _, b === 12 && (m.push(f), f = [], b = 0);
      }), f.length > 0 && m.push(f), m;
    }), c = B(Be), u = B(et);
    return l({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (m) => {
        o.forEach((f, b) => {
          switch (s.fields[b].type) {
            case "subform":
              f.value.setValue(m);
              break;
            default:
              f.value.setValue !== void 0 && (m === null ? f.value.setValue(null) : Object.keys(m).some((S) => S === f.value.fieldName) ? f.value.setValue(m[f.value.fieldName]) : Object.keys(m).some((S) => S === f.value.altFieldName) && f.value.setValue(m[f.value.altFieldName]));
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
        return o.forEach((f) => {
          if (f.value.getValue != null)
            switch (f.value.type) {
              case "subform":
                m = Object.assign(m, f.value.getValue());
                break;
              default:
                m[f.value.fieldName] = f.value.getValue();
                break;
            }
        }), m;
      },
      /**
       * Called to see if all the copmonents in this row are valid.
       */
      isValid: () => !o.some((m) => !(m.value.isValid === void 0 || m.value.isValid()))
    }), (m, f) => (r(), i("section", null, [
      (r(!0), i(x, null, L(d.value, (b) => (r(), E(jt, {
        modifiers: [g(Ke).gapless],
        columns: b.map((S) => a(S))
      }, je({ _: 2 }, [
        L(b.map((S, J) => ({ input: S, index: J })).filter((S) => !g(c).some((J) => J === S.input.name)), (S) => ({
          name: `col-${S.index}`,
          fn: I(() => [
            C(Kt, {
              ref_for: !0,
              ref: (J) => g(o)[S.input.refIndex].value = J,
              input: S.input,
              onValueChanged: f[0] || (f[0] = (J) => n("valueChanged", J)),
              onButtonClicked: f[1] || (f[1] = (J) => n("buttonClicked", J)),
              disabled: (s.disabled ?? !1) || g(u).some((J) => J === S.input.name)
            }, null, 8, ["input", "disabled"])
          ])
        }))
      ]), 1032, ["modifiers", "columns"]))), 256))
    ]));
  }
}), Ws = { class: "box" }, Ht = /* @__PURE__ */ A({
  __name: "box",
  setup(e) {
    return (l, t) => (r(), i("div", Ws, [
      T(l.$slots, "default")
    ]));
  }
}), Is = /* @__PURE__ */ A({
  __name: "subform",
  props: {
    fields: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = P(null), o = B(Be, fe(P([]))), d = k(() => o ? o.value.some((h) => h === a.name) : !1);
    return l({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (h) => {
        n.value !== null && n.value.setValue(h);
      },
      /**
       * Called to get the value of this of all the components inside this subform.  
       * Returns an object where each propertyName is the name of the field and it's value is the value.
       */
      getValue: () => n.value === null ? null : n.value.getValue(),
      /**
       * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
       */
      isValid: () => n.value === null ? !1 : n.value.isValid()
    }), (h, v) => H((r(), E(Ht, {
      id: a.name,
      name: a.name
    }, {
      default: I(() => [
        C(Gt, {
          fields: a.fields,
          ref_key: "inputs",
          ref: n,
          disabled: a.disabled,
          onValueChanged: v[0] || (v[0] = (m) => s("valueChanged", m)),
          onButtonClicked: v[1] || (v[1] = (m) => s("buttonClicked", m))
        }, null, 8, ["fields", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "name"])), [
      [oe, !d.value]
    ]);
  }
});
var z = /* @__PURE__ */ ((e) => (e.autocomplete = "autocomplete", e.button = "button", e.checkbox_group = "checkbox-group", e.checkbox = "checkbox", e.date = "date", e.full_editor = "full-editor", e.header = "header", e.hidden = "hidden", e.number = "number", e.paragraph = "paragraph", e.radio_group = "radio-group", e.select = "select", e.subform = "subform", e.switch = "switch", e.text = "text", e.textarea = "textarea", e.time = "time", e))(z || {});
const Ls = ["for"], Vs = {
  key: 0,
  class: "help is-danger"
}, Us = { class: "control" }, js = [z.autocomplete, z.checkbox_group, z.date, z.number, z.radio_group, z.select, z.text, z.textarea, z.time, z.subform], Gs = [z.subform, z.switch, z.select, z.radio_group, z.paragraph, z.header, z.checkbox_group, z.checkbox, z.button, z.autocomplete], Kt = /* @__PURE__ */ A({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = P(null), s = t, n = e, o = de(n, B), d = fe(P(n.input.type)), c = k(() => {
      let F = null;
      switch (n.input.type) {
        case z.autocomplete:
          F = Ot;
          break;
        case z.button:
          F = Ie;
          break;
        case z.checkbox_group:
          F = Tt;
          break;
        case z.checkbox:
          F = Pt;
          break;
        case z.date:
          F = xt;
          break;
        case z.full_editor:
          F = Ct;
          break;
        case z.header:
          F = Le;
          break;
        case z.hidden:
          F = Bt;
          break;
        case z.number:
          F = Et;
          break;
        case z.paragraph:
          F = Ve;
          break;
        case z.radio_group:
          F = zt;
          break;
        case z.select:
          F = Wt;
          break;
        case z.switch:
          F = It;
          break;
        case z.text:
          F = Lt;
          break;
        case z.textarea:
          F = Ut;
          break;
        case z.time:
          F = lt;
          break;
        case z.subform:
          F = Is;
          break;
      }
      return F;
    }), u = function(F) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(F);
    };
    ce(() => {
      a.value !== null && n.input.value !== void 0 && n.input.value !== null && u(n.input.value);
    });
    const p = k(() => n.input.disabled ?? n.disabled ?? !1), h = k(() => n.input.name), v = k(() => n.input.name), m = k(() => js.some((F) => F === n.input.type) && n.input.label !== void 0 && n.input.label !== null), f = k(() => {
      let F = Object.assign({}, n.input ?? {});
      if (delete F.type, m.value && delete F.label, F.className != null && delete F.className, F.form_columns != null && delete F.form_columns, Gs.some((W) => W === n.input.type) && (F.translate = n.translate), F.disabled = n.disabled, F.additional !== void 0) {
        for (const W in F.additional)
          F[W] = F.additional[W];
        delete F.additional;
      }
      return F;
    }), b = (F) => {
      if (F.value !== void 0 && F.value !== null && Array.isArray(F.value)) {
        let W = [...F.value];
        F.value = W;
      }
      s("valueChanged", F);
    }, S = (F) => {
      s("buttonClicked", F);
    }, J = () => {
      if (a.value != null && a.value.getValue != null) {
        let F = a.value.getValue();
        return F != null && Array.isArray(F) ? [...F] : F;
      }
      return null;
    };
    return l({
      /**
       * Called to set the value for this given form component
       * 
       * @param value any
       */
      setValue: u,
      /**
       * Property that returns the name of this given component
       */
      fieldName: h,
      /**
       * Property that returns the type of form component this is
       */
      type: d,
      /**
       * Property that returns the alternative field name for this component
       */
      altFieldName: v,
      /**
       * Called to get the value of this component.
       * If this is a basic component, it returns that value.
       * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
       */
      getValue: J,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (n.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (n.input.required ?? !1) {
          let F = J();
          return F != null && (Array.isArray(F) ? F.length > 0 : !0) && F.toString() !== "";
        }
        return !0;
      },
      /**
       * Called to set the values of a subform component, this will throw an error if this component is not a subform.
       * 
       * @param values any|null
       */
      setValues: (F) => {
        if (n.input.type === "subform" && a.value !== null)
          a.value.setValues(F);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (F, W) => n.input.type === g(z).header ? (r(), E(Le, {
      key: 0,
      subtype: n.input.subtype,
      label: n.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["subtype", "label"])) : n.input.type === g(z).paragraph ? (r(), E(Ve, {
      key: 1,
      name: n.input.name,
      label: n.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "label"])) : n.input.type === g(z).button ? (r(), E(Ie, K({ key: 2 }, f.value, {
      disabled: p.value,
      onButtonClicked: S,
      ref_key: "inp",
      ref: a
    }), null, 16, ["disabled"])) : (r(), i(x, { key: 3 }, [
      m.value ? (r(), i("label", {
        key: 0,
        class: "label",
        for: n.input.name
      }, [
        Z(O(g(o)(n.input.label ?? "")) + " ", 1),
        n.input.required ? (r(), i("span", Vs, "*")) : D("", !0)
      ], 8, Ls)) : D("", !0),
      y("div", Us, [
        (r(), E(me(c.value), K(f.value, {
          onValueChanged: b,
          ref_key: "inp",
          ref: a
        }), null, 16))
      ])
    ], 64));
  }
}), Hs = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Ks = /* @__PURE__ */ A({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, n = de(a, B);
    ze("Translate", (S) => n.value(S));
    const o = P(null), d = () => o.value !== null ? o.value.getValue() : null, c = (S) => {
      o.value !== null && o.value.setValue(S);
    }, u = () => o.value !== null ? o.value.isValid() : !1, p = P([]);
    ze(Be, fe(p));
    const h = (S) => {
      Array.isArray(S) ? p.value = [...p.value, ...S] : p.value.push(S);
    }, v = (S) => {
      Array.isArray(S) ? p.value = p.value.filter((J) => S.indexOf(J) >= 0) : p.value = p.value.filter((J) => J !== S);
    }, m = P([]);
    return ze(et, fe(m)), l({
      /**
       * Returns the values of the given form elements as an object where the property name is the name of the form element and the property value is 
       * that elements value
       */
      getValues: d,
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
      showField: v,
      /**
       * Called to disable 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      disableField: (S) => {
        Array.isArray(S) ? m.value = [...m.value, ...S] : m.value.push(S);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (S) => {
        Array.isArray(S) ? m.value = m.value.filter((J) => S.indexOf(J) >= 0) : m.value = m.value.filter((J) => J !== S);
      }
    }), (S, J) => (r(), i("form", Hs, [
      C(Gt, {
        fields: a.elements,
        ref_key: "inputs",
        ref: o,
        disabled: a.disabled,
        onValueChanged: J[0] || (J[0] = (_) => s("valueChanged", _)),
        onButtonClicked: J[1] || (J[1] = (_) => s("buttonClicked", _))
      }, null, 8, ["fields", "disabled"])
    ]));
  }
}), Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Ot,
  Button: Ie,
  Checkbox: Pt,
  CheckboxGroup: Tt,
  ComponentForm: Ks,
  DateField: xt,
  FormComponent: Kt,
  FullEditor: Ct,
  Header: Le,
  Hidden: Bt,
  NumberField: Et,
  Paragraph: Ve,
  RadioGroup: zt,
  Select: Wt,
  Switch: It,
  Text: Lt,
  TextArea: Ut,
  Time: lt
}, Symbol.toStringTag, { value: "Module" })), qs = { class: "hero-body" }, Zs = { class: "title" }, Qs = {
  key: 0,
  class: "subtitle"
}, Xs = /* @__PURE__ */ A({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("section", {
      class: N(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + l.type])
    }, [
      y("div", qs, [
        y("p", Zs, O(l.title), 1),
        l.subtitle ? (r(), i("p", Qs, O(l.subtitle), 1)) : D("", !0)
      ])
    ], 2));
  }
}), en = { key: 0 }, tn = ["onClick"], an = /* @__PURE__ */ A({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Oe.left },
    size: { default: Y.normal },
    seperator: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let s = ["breadcrumb"];
      return l.alignment && l.alignment !== Oe.left && s.push(`is-${l.alignment}`), l.size && l.size !== Y.normal && s.push(`is-${l.size}`), l.seperator && s.push(`has-${l.seperator}-seperator`), s;
    }), a = (s) => {
      s !== void 0 && s();
    };
    return (s, n) => (r(), i("nav", {
      class: N(t.value),
      "aria-label": "breadcrumbs"
    }, [
      l.breadCrumbs !== null ? (r(), i("ul", en, [
        (r(!0), i(x, null, L(l.breadCrumbs, (o) => (r(), i("li", {
          class: N({ "is-active": o.active })
        }, [
          y("a", {
            onClick: (d) => a(o.onClick)
          }, [
            o.icon ? (r(), i("span", {
              key: 0,
              class: N(["icon", o.onClick ? "is-clickable" : ""])
            }, [
              C(g(G), {
                icon: o.icon
              }, null, 8, ["icon"])
            ], 2)) : D("", !0),
            Z(" " + O(o.title), 1)
          ], 8, tn)
        ], 2))), 256))
      ])) : D("", !0)
    ], 2));
  }
}), ln = {
  key: 0,
  class: "card-icon"
}, sn = { class: "card-icon-wrapper" }, nn = {
  key: 1,
  class: "card-header"
}, on = {
  key: 2,
  class: "card-content"
}, rn = {
  key: 3,
  class: "card-footer"
}, Yt = /* @__PURE__ */ A({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(e) {
    const l = ie(), t = e, a = {
      addon_class: "card-footer-item"
    }, s = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (n, o) => (r(), i("div", {
      class: N(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon ? (r(), i("div", ln, [
        y("div", sn, [
          C(G, {
            icon: t.icon,
            size: g(ue).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : D("", !0),
      g(l).header ? (r(), i("div", nn, [
        T(n.$slots, "header", he(_e(s)))
      ])) : D("", !0),
      g(l).content ? (r(), i("div", on, [
        T(n.$slots, "content")
      ])) : D("", !0),
      g(l).footer ? (r(), i("div", rn, [
        T(n.$slots, "footer", he(_e(a)))
      ])) : D("", !0)
    ], 2));
  }
}), un = { class: "footer" }, dn = /* @__PURE__ */ A({
  __name: "footer",
  setup(e) {
    return (l, t) => (r(), i("footer", un, [
      T(l.$slots, "default")
    ]));
  }
}), cn = { class: "level" }, pn = {
  key: 0,
  class: "level-left"
}, mn = {
  key: 0,
  class: "level-item"
}, hn = {
  key: 0,
  class: "level-item"
}, bn = {
  key: 2,
  class: "level-right"
}, vn = {
  key: 0,
  class: "level-item"
}, gn = /* @__PURE__ */ A({
  __name: "level",
  props: {
    left_slots: {},
    right_slots: {},
    slots: {}
  },
  setup(e) {
    const l = e, t = ie();
    return (a, s) => (r(), i("nav", cn, [
      l.left_slots ? (r(), i("div", pn, [
        (r(!0), i(x, null, L(l.left_slots, (n) => (r(), i(x, null, [
          g(t)[n] ? (r(), i("div", mn, [
            T(a.$slots, n)
          ])) : D("", !0)
        ], 64))), 256))
      ])) : D("", !0),
      l.slots ? (r(!0), i(x, { key: 1 }, L(l.slots, (n) => (r(), i(x, null, [
        g(t)[n] ? (r(), i("div", hn, [
          T(a.$slots, n)
        ])) : D("", !0)
      ], 64))), 256)) : D("", !0),
      l.right_slots ? (r(), i("div", bn, [
        (r(!0), i(x, null, L(l.right_slots, (n) => (r(), i(x, null, [
          g(t)[n] ? (r(), i("div", vn, [
            T(a.$slots, n)
          ])) : D("", !0)
        ], 64))), 256))
      ])) : D("", !0)
    ]));
  }
}), yn = { class: "media" }, fn = {
  key: 0,
  class: "media-left"
}, _n = { class: "media-content" }, kn = {
  key: 1,
  class: "media-right"
}, Sn = /* @__PURE__ */ A({
  __name: "media",
  setup(e) {
    const l = ie();
    return (t, a) => (r(), i("article", yn, [
      g(l).left_figure ? (r(), i("figure", fn, [
        T(t.$slots, "left_figure")
      ])) : D("", !0),
      y("div", _n, [
        T(t.$slots, "content")
      ]),
      g(l).right_section ? (r(), i("div", kn, [
        T(t.$slots, "right_section")
      ])) : D("", !0)
    ]));
  }
}), Mn = { class: "modal-content" }, Dn = /* @__PURE__ */ A({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l;
    return (s, n) => (r(), i("div", {
      class: N({ modal: !0, "is-active": t.display }),
      style: Ae(`z-index:${t.z_index}`)
    }, [
      n[1] || (n[1] = y("div", { class: "modal-background" }, null, -1)),
      y("div", Mn, [
        T(s.$slots, "default")
      ]),
      t.has_close ? (r(), i("button", {
        key: 0,
        class: "modal-close is-large",
        "aria-label": "close",
        onClick: n[0] || (n[0] = (o) => a("close"))
      })) : D("", !0)
    ], 6));
  }
}), $n = {
  key: 0,
  class: "card-icon"
}, An = { class: "card-icon-wrapper" }, Jn = {
  key: 1,
  class: "modal-card-head"
}, Fn = {
  key: 2,
  class: "modal-card-body"
}, Nn = {
  key: 3,
  class: "modal-card-foot"
}, wn = /* @__PURE__ */ A({
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
    const t = ie(), a = e, s = l, n = {
      addon_class: "card-footer-item"
    }, o = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-header-icon"
    }, d = k(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, u) => (r(), i("div", {
      class: N(["modal", { "is-active": a.show }])
    }, [
      u[1] || (u[1] = y("div", { class: "modal-background" }, null, -1)),
      y("div", {
        class: N(["modal-card", d.value])
      }, [
        a.icon ? (r(), i("div", $n, [
          y("div", An, [
            C(G, {
              icon: a.icon,
              size: g(ue).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : D("", !0),
        g(t).header ? (r(), i("div", Jn, [
          T(c.$slots, "header", he(_e(o))),
          a.has_close ? (r(), i("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (p) => s("close"))
          })) : D("", !0)
        ])) : D("", !0),
        g(t).content ? (r(), i("div", Fn, [
          T(c.$slots, "content")
        ])) : D("", !0),
        g(t).footer ? (r(), i("div", Nn, [
          T(c.$slots, "footer", he(_e(n)))
        ])) : D("", !0)
      ], 2)
    ], 2));
  }
}), On = {
  key: 0,
  class: "panel-heading"
}, Tn = {
  key: 1,
  class: "panel-tabs"
}, Pn = {
  key: 0,
  class: "panel-block"
}, xn = /* @__PURE__ */ A({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    hidden_sections: {}
  },
  setup(e) {
    const l = ie(), t = e, a = k(() => t.block_names ?? ["default"]), s = k(() => [
      t.type ? `is-${t.type}` : "",
      t.full_width ? "is-fullwidth" : "",
      t.full_height ? "is-fullheight" : ""
    ]);
    return (n, o) => (r(), i("div", {
      class: N(["panel", s.value])
    }, [
      g(l).header ? H((r(), i("div", On, [
        T(n.$slots, "header")
      ], 512)), [
        [oe, !(t.hidden_sections ?? []).includes("header")]
      ]) : D("", !0),
      g(l).tabs ? H((r(), i("div", Tn, [
        T(n.$slots, "tabs")
      ], 512)), [
        [oe, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : D("", !0),
      (r(!0), i(x, null, L(a.value, (d) => (r(), i(x, null, [
        g(l)[d] ? H((r(), i("div", Pn, [
          T(n.$slots, d)
        ], 512)), [
          [oe, !(t.hidden_sections ?? []).includes(d)]
        ]) : D("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Cn = /* @__PURE__ */ A({
  __name: "section",
  props: {
    size: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (r(), i("section", {
      class: N(["section", l.size ? `is-${l.size}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Bn = { key: 0 }, En = { key: 1 }, zn = { key: 2 }, qt = /* @__PURE__ */ A({
  __name: "table",
  props: {
    scrollable: { type: Boolean, default: !1 },
    fixed_header: { type: Boolean, default: !1 },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const l = ie(), t = e, a = k(() => [
      t.scrollable ? "table-container" : "",
      t.fixed_header && !t.scrollable ? "is-fixed" : ""
    ]), s = k(() => [
      "table",
      "is-striped",
      "is-hoverable",
      t.fixed_header && !t.scrollable ? "is-fixed" : "",
      t.full_width ? "is-fullwidth" : "",
      t.narrow ? "is-narrow" : ""
    ]);
    return (n, o) => (r(), i("div", {
      class: N(a.value)
    }, [
      y("table", {
        class: N(s.value)
      }, [
        g(l).thead ? (r(), i("thead", Bn, [
          T(n.$slots, "thead")
        ])) : D("", !0),
        g(l).tbody ? (r(), i("tbody", En, [
          T(n.$slots, "tbody")
        ])) : D("", !0),
        g(l).tfoot ? (r(), i("tfoot", zn, [
          T(n.$slots, "tfoot")
        ])) : D("", !0)
      ], 2)
    ], 2));
  }
}), Rn = ["href", "onClick"], Wn = {
  key: 0,
  class: "icon is-small"
}, In = { style: { width: "100px" } }, Ln = /* @__PURE__ */ A({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: { default: qe.left },
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const l = e, t = k(() => [
      "tabs",
      `is-${l.alignment}`,
      l.type ? `is-${l.type}` : "",
      l.full_width ? "is-fullwidth" : ""
    ]), a = (s, n) => {
      (n.href === null || n.href === void 0) && n.onClick !== void 0 && (s.preventDefault(), n.onClick());
    };
    return (s, n) => (r(), i("div", {
      class: N(t.value)
    }, [
      y("ul", null, [
        C(g(ve), {
          promise: l.tabs
        }, {
          default: I(({ response: o }) => [
            (r(!0), i(x, null, L(o, (d) => (r(), i("li", {
              class: N({ "is-active": d.active })
            }, [
              y("a", {
                href: d.href,
                onClick: (c) => a(c, d)
              }, [
                d.icon ? (r(), i("span", Wn, [
                  C(g(G), {
                    icon: d.icon
                  }, null, 8, ["icon"])
                ])) : D("", !0),
                y("span", null, O(d.title), 1)
              ], 8, Rn)
            ], 2))), 256))
          ]),
          pending: I(() => [
            y("li", In, [
              C(g(pe), {
                size: g(Y).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), Vn = { class: "slideout-content" }, Un = {
  key: 1,
  class: "slideout-head"
}, jn = { class: "slideout-body" }, Gn = {
  key: 2,
  class: "slideout-foot"
}, Hn = /* @__PURE__ */ A({
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
    const t = ie(), a = {
      addon_class: ""
    }, s = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, n = e, o = l, d = k(() => [
      "slideout",
      n.show ? "is-active" : "",
      n.type !== void 0 && n.type !== null ? `is-${n.type}` : "",
      n.full_width ? "is-fullwidth" : "",
      n.not_animated ? "no-animation" : ""
    ]);
    return (c, u) => (r(), i("div", {
      class: N(d.value)
    }, [
      y("div", {
        class: "slideout-background",
        onClick: u[0] || (u[0] = (p) => o("close"))
      }),
      y("div", Vn, [
        n.has_close ? (r(), i("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: u[1] || (u[1] = (p) => o("close"))
        })) : D("", !0),
        g(t).header ? (r(), i("div", Un, [
          T(c.$slots, "header", he(_e(s)))
        ])) : D("", !0),
        y("div", jn, [
          g(t).content ? T(c.$slots, "content", { key: 0 }) : D("", !0),
          T(c.$slots, "default")
        ]),
        g(t).footer ? (r(), i("div", Gn, [
          T(c.$slots, "footer", he(_e(a)))
        ])) : D("", !0)
      ])
    ], 2));
  }
}), Kn = ["onClick"], Yn = { key: 1 }, qn = {
  key: 0,
  class: "step-details"
}, Zn = { class: "step-title" }, Qn = { key: 0 }, Xn = { class: "steps-content" }, eo = { class: "steps-actions" }, to = { class: "steps-action" }, ao = {
  key: 0,
  class: "steps-action"
}, lo = {
  key: 1,
  class: "steps-action"
}, so = /* @__PURE__ */ A({
  __name: "step-wizard",
  props: {
    steps: {},
    use_previous_next: { type: Boolean, default: !0 },
    size: { default: Y.normal },
    starting_index: {},
    orientation: { default: Pe.default }
  },
  emits: ["done", "changedStep"],
  setup(e, { expose: l, emit: t }) {
    const a = ie(), s = q(B), n = k(() => V("Pagination.Previous", s)), o = k(() => V("Pagination.Next", s)), d = k(() => V("Wizard.Done", s)), c = e, u = t, p = P(c.starting_index ?? 0);
    return U(p, (h, v) => {
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
    }), (h, v) => (r(), i("div", {
      class: N(["steps-container", c.orientation === g(Pe).default ? "" : `${c.orientation}`])
    }, [
      y("ul", {
        class: N(["steps", c.size === g(Y).normal ? "" : `is-${c.size}`])
      }, [
        (r(!0), i(x, null, L(c.steps, (m, f) => (r(), i("li", {
          class: N(["step-item", f < p.value ? "is-completed" : "", f === p.value ? "is-active" : "", m.type ? `is-${m.type}` : ""])
        }, [
          y("div", {
            class: "step-marker is-clickable",
            onClick: (b) => u("changedStep", f)
          }, [
            m.icon ? (r(), E(G, {
              key: 0,
              icon: m.icon
            }, null, 8, ["icon"])) : (r(), i("span", Yn, O(f + 1), 1))
          ], 8, Kn),
          m.title !== "" ? (r(), i("div", qn, [
            y("p", Zn, O(m.title), 1),
            m.description ? (r(), i("p", Qn, O(m.description), 1)) : D("", !0)
          ])) : D("", !0)
        ], 2))), 256))
      ], 2),
      y("div", Xn, [
        (r(!0), i(x, null, L(c.steps, (m, f) => (r(), i(x, null, [
          g(a)[m.name] ? (r(), i("div", {
            key: 0,
            class: N(["step-content", f === p.value ? "is-active" : ""])
          }, [
            T(h.$slots, m.name)
          ], 2)) : D("", !0)
        ], 64))), 256))
      ]),
      y("div", eo, [
        c.use_previous_next ? (r(), i(x, { key: 0 }, [
          y("div", to, [
            C(ee, {
              title: n.value,
              disabled: p.value === 0,
              onClick: v[0] || (v[0] = () => {
                p.value--;
              })
            }, null, 8, ["title", "disabled"])
          ]),
          p.value + 1 < c.steps.length ? (r(), i("div", ao, [
            C(ee, {
              title: o.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: v[1] || (v[1] = () => {
                p.value++;
              })
            }, null, 8, ["title", "disabled"])
          ])) : D("", !0),
          p.value + 1 === c.steps.length ? (r(), i("div", lo, [
            C(ee, {
              title: d.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: v[2] || (v[2] = () => {
                u("done");
              })
            }, null, 8, ["title", "disabled"])
          ])) : D("", !0)
        ], 64)) : (r(), i(x, { key: 1 }, [
          g(a).actions ? T(h.$slots, "actions", { key: 0 }) : D("", !0),
          (r(!0), i(x, null, L(c.steps, (m, f) => (r(), i(x, null, [
            g(a)[`actions-${m.name}`] && f === p.value ? T(h.$slots, `actions-${m.name}`, { key: 0 }) : D("", !0)
          ], 64))), 256))
        ], 64))
      ])
    ], 2));
  }
}), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Xs,
  Box: Ht,
  Breadcrumbs: an,
  Card: Yt,
  ColumnContainer: jt,
  Footer: dn,
  Level: gn,
  List: wt,
  Media: Sn,
  Modal: Dn,
  ModalCard: wn,
  Panel: xn,
  Section: Cn,
  Slideout: Hn,
  StepWizard: so,
  Table: qt,
  Tabs: Ln
}, Symbol.toStringTag, { value: "Module" })), dt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
xe(`${dt.substring(0, dt.lastIndexOf("/"))}/vibrantvue.min.css`);
const oo = Object.values(Xe).filter((e, l, t) => t.indexOf(e) === l), ro = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: oo,
  setSkin: ro
}, Symbol.toStringTag, { value: "Module" })), io = /* @__PURE__ */ A({
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
    const t = `${da(B)}chart.umd.min.js`, a = P(null), s = e, n = l;
    let o = null;
    const d = () => {
      o != null && o.update();
    }, c = k(() => {
      var u = "";
      return s.width && (u = `width:${s.width}px;`), s.height && (u += `height:${s.height}px;`), u;
    });
    return U(() => s.type, (u) => {
      o != null && (o.type = u ?? "line");
    }), U(
      () => s.labels,
      (u) => {
        o != null && (o.data.labels = u, (s.show_refresh == null || !s.show_refresh) && d());
      },
      { deep: !0 }
    ), U(
      () => s.datasets,
      (u) => {
        o != null && (o.data.datasets = u, (s.show_refresh == null || !s.show_refresh) && d());
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
            position: `${s.legend_position}`,
            labels: {
              filter: (h, v) => h.text != null
            },
            onClick: function(h, v) {
              n("legendItemClick", o, v);
            }
          }
        }
      };
      s.scales != null && s.scales != null && (u.scales = s.scales), s.tooltips != null && s.tooltips != null && (u.tooltips = s.tooltips);
      const { Chart: p } = await Ge(t, ["Chart"]);
      o = new p(a.value.getContext("2d"), {
        type: s.type == null ? "line" : s.type,
        data: {
          datasets: s.datasets,
          labels: s.labels
        },
        options: u
      }), o.update();
    }), (u, p) => (r(), E(Yt, null, je({
      content: I(() => [
        y("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ae(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: I((h) => [
          y("h3", {
            class: N(h.header_class)
          }, O(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.show_refresh != null && s.show_refresh != null && s.show_refresh ? {
        name: "footer",
        fn: I((h) => [
          C($t, {
            class: N(h.addon_class),
            onClick: d
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), co = /* @__PURE__ */ A({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = `${ca(B)}src-noconflict/ace.js`, s = e, n = t, o = P(null), d = P(null), c = function() {
      return d.value.getValue() == "" ? null : d.value.getValue();
    }, u = function(h) {
      d.value.setValue(h ?? "");
    };
    U(() => s.readonly, (h) => {
      d.value.setReadOnly(h == null || h == null ? !1 : h);
    }), U(() => s.value, (h) => {
      u(h);
    }), U(() => s.language, (h) => {
      d.value.getSession().setMode(h);
    });
    const p = k(() => {
      let h = Number.MAX_SAFE_INTEGER;
      if (s.autocompletes != null && s.autocompletes != null) {
        for (let v = 0; v < s.autocompletes.length; v++)
          s.autocompletes[v].method.indexOf(".") >= 0 ? h = Math.min(h, s.autocompletes[v].method.indexOf(".")) : h = Math.min(h, s.autocompletes[v].method.length);
        if (h > 3 && s.autocompletes.length > 0) {
          let v = !0, m = s.autocompletes[0].method.substring(0, 3);
          for (let f = 0; f < s.autocompletes.length; f++)
            if (s.autocompletes[f].method.substring(0, 3) != m) {
              v = !1;
              break;
            }
          v && (h = 3);
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
      d.value = la(h.edit(o.value.$el, {
        mode: s.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), d.value.setReadOnly(s.readonly === void 0 || s.readonly === null ? !1 : s.readonly), s.value !== null && s.value !== void 0 && d.value.setValue(s.value), d.value.on("change", () => n("valueChanged", c())), s.autocompletes !== null && s.autocompletes !== void 0 && (d.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), d.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(v, m, f, b, S) {
          var J = [];
          if (b = b.toUpperCase(), b.length >= p && (J = s.autocompletes.filter((_) => _.method.toUpperCase().startsWith(b) && _.method.length > b.legend).map((_) => ({
            caption: _.method + (_.description === null || _.description === void 0 ? "" : "->" + _.description),
            value: _.method,
            meta: "autos"
          }))), J.length === 0) {
            S(null, []);
            return;
          }
          S(null, J.map(function(_) {
            return _;
          }));
        }
      }]);
    }), (h, v) => (r(), i("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), po = { key: 0 }, mo = { colspan: "100%" }, ho = ["colspan", "rowspan"], bo = ["onClick"], vo = { class: "icon" }, go = { key: 0 }, yo = { colspan: "100%" }, fo = ["colspan", "rowspan", "onClick"], _o = { key: 1 }, ko = { colspan: "100%" }, So = /* @__PURE__ */ A({
  __name: "grid",
  props: {
    columns: {},
    data: {},
    empty_message: {},
    column_rows: {},
    has_filter: { type: Boolean },
    current_sort: {},
    getRowColor: {},
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean },
    use_next: { type: Boolean, default: !0 },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: Y.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean }
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: l }) {
    const t = ie(), a = e, s = l, n = {
      scrollable: a.scrollable,
      fixed_header: a.fixed_header,
      full_width: a.full_width,
      narrow: a.narrow
    }, o = {
      use_next: a.use_next,
      has_more: a.has_more,
      has_previous: a.has_previous,
      size: a.size,
      rounded: a.rounded,
      button_type: a.button_type,
      total_pages: a.total_pages,
      current_page: a.current_page
    }, d = k(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && se(a.total_pages) > 1)), c = k(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((v) => v.map((m) => a.columns.filter((f) => f.some((b) => b.id === m))[0].find((f) => f.id === m)))), u = (v) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === v ? s("sort", {
        column: v,
        ascending: !a.current_sort.ascending
      }) : s("sort", {
        column: v,
        ascending: !0
      });
    }, p = (v, m) => {
      if (a.getRowColor) {
        let f = a.getRowColor(v, m);
        if (f)
          return `is-${f}`;
      }
      return null;
    }, h = (v, m, f, b) => {
      let S = "";
      if ((m.cellClass || m.getCellColor) && (m.cellClass && (S += `${m.cellClass}`), m.getCellColor)) {
        let J = m.getCellColor(v, f, b);
        J && (S += ` is-${J}`);
      }
      return S === "" ? null : S;
    };
    return (v, m) => (r(), E(qt, he(_e(n)), je({
      thead: I(() => [
        a.has_filter ?? !1 ? (r(), i("tr", po, [
          y("th", mo, [
            C(At, {
              onFilter: m[0] || (m[0] = (f) => s("filter", f))
            })
          ])
        ])) : D("", !0),
        (r(!0), i(x, null, L(a.columns, (f) => (r(), i("tr", null, [
          (r(!0), i(x, null, L(f, (b) => (r(), i("th", {
            colspan: b.headerColspan,
            rowspan: b.headerRowspan,
            class: N(b.headerClass)
          }, [
            T(v.$slots, `head-${b.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (b.canSort ?? !1) && b.id === a.current_sort.column ? (r(), i("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (S) => u(b.id)
              }, [
                y("span", vo, [
                  C(G, { icon: "arrow-down" })
                ]),
                y("span", null, O(b.title), 1)
              ], 8, bo)) : (r(), i(x, { key: 1 }, [
                Z(O(b.title), 1)
              ], 64))
            ])
          ], 10, ho))), 256))
        ]))), 256))
      ]),
      tbody: I(() => [
        a.data === null || a.data.length === 0 ? (r(), i("tr", go, [
          y("td", yo, [
            a.data === null ? (r(), E(pe, { key: 0 })) : (r(), E(be, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), i(x, { key: 1 }, L(a.data, (f, b) => (r(), i(x, null, [
          (r(!0), i(x, null, L(c.value.filter((S) => S.some((J) => !(J.headerOnly ?? !1))), (S, J) => (r(), i("tr", {
            key: `row-${b}-${J}`,
            class: N(p(b, f))
          }, [
            (r(!0), i(x, null, L(S.filter((_) => !(_.headerOnly ?? !1)), (_) => (r(), i("td", {
              key: `data-${b}-${J}`,
              colspan: _.dataColspan,
              rowspan: _.dataRowspan,
              class: N(h(b, _, f, _.propertyName ? f[_.propertyName] : void 0)),
              onClick: (R) => s("cellClicked", { rowIndex: b, data: _.propertyName ? f[_.propertyName] : null, row: f })
            }, [
              T(v.$slots, `body-${_.id}`, K({ ref_for: !0 }, { rowIndex: b, data: _.propertyName ? f[_.propertyName] : null, row: f }), () => [
                Z(O(_.propertyName ? f[_.propertyName] : null), 1)
              ])
            ], 10, fo))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      d.value || g(t).tfoot_head || g(t).tfoot_bottom ? {
        name: "tfoot",
        fn: I(() => [
          g(t).tfoot_head ? T(v.$slots, "tfoot_head", { key: 0 }) : D("", !0),
          d.value ? (r(), i("tr", _o, [
            y("td", ko, [
              C(Jt, K(o, {
                onMoveForward: m[1] || (m[1] = (f) => s("moveForward")),
                onMoveBack: m[2] || (m[2] = (f) => s("moveBack")),
                onGoToPage: m[3] || (m[3] = (f) => s("goToPage", f))
              }), null, 16)
            ])
          ])) : D("", !0),
          g(t).tfoot_bottom ? T(v.$slots, "tfoot_bottom", { key: 2 }) : D("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Mo = { class: "progress-group" }, Do = /* @__PURE__ */ A({
  __name: "progress-group",
  props: {
    size: {},
    values: {},
    max: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let n = 0;
      for (let o = 0; o < l.values.length; o++)
        n += l.values[o].value;
      return n;
    }), a = k(() => l.values.map((n) => ({
      size: l.size ?? Y.normal,
      type: n.type,
      percentage: n.value / (l.max ?? t.value) * 100,
      caption: n.caption ?? `${n.value}`,
      onClick: n.onClick
    }))), s = k(() => l.max !== void 0 ? {
      size: l.size ?? Y.normal,
      type: null,
      percentage: (l.max - t.value) / l.max * 100,
      caption: null
    } : null);
    return (n, o) => (r(), i("div", Mo, [
      (r(!0), i(x, null, L(a.value, (d, c) => (r(), E(g(Nt), {
        is: "progress",
        class: N(`progress is-${d.size} is-${d.type} ${d.onClick !== void 0 ? "is-clickable" : ""}`),
        key: c,
        text: d.caption ?? "",
        position: g(Ce).bottom,
        style: Ae({ width: `${d.percentage}%` }),
        value: "100",
        max: "100",
        onClick: () => {
          d.onClick !== void 0 && d.onClick();
        }
      }, {
        default: I(() => [
          Z(O(`${d.percentage}%`), 1)
        ]),
        _: 2
      }, 1032, ["class", "text", "position", "style", "onClick"]))), 128)),
      s.value != null ? (r(), i("progress", {
        key: 0,
        class: N(`progress is-${s.value.size} is-${s.value.type}`),
        style: Ae({ width: `${s.value.percentage}%` }),
        value: "100",
        max: "100"
      }, O(`${s.value.percentage}%`), 7)) : D("", !0)
    ]));
  }
}), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: io,
  CodeWriter: co,
  Grid: So,
  ProgressGroup: Do
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Jo,
  Button: Fo,
  ButtonsContainer: No,
  ButtonAdd: wo,
  ButtonCancel: Oo,
  ButtonDelete: To,
  ButtonDisable: Po,
  ButtonDownload: xo,
  ButtonEdit: Co,
  ButtonEnable: Bo,
  ButtonOkay: Eo,
  ButtonPrint: zo,
  ButtonRefresh: Ro,
  ButtonSave: Wo,
  ButtonUpload: Io,
  CheckMark: Lo,
  DropDown: Vo,
  DynamicSlot: Uo,
  Filter: jo,
  Icon: Go,
  Message: Ho,
  Notification: Ko,
  PageNotification: Yo,
  Pagination: qo,
  Promised: Zo,
  Progress: Qo,
  NavBar: Xo,
  Menu: er,
  MenuLabel: tr,
  MenuList: ar,
  MenuEntry: lr,
  ToolTip: sr,
  Badge: nr,
  Tag: or,
  Tags: rr
} = El, { DraggableItem: ur, DropZone: ir, Sortable: dr } = Ul, {
  AutoComplete: cr,
  CheckboxGroup: pr,
  Checkbox: mr,
  DateField: hr,
  ComponentForm: br,
  FullEditor: vr,
  Header: gr,
  Hidden: yr,
  NumberField: fr,
  Paragraph: _r,
  RadioGroup: kr,
  Select: Sr,
  Switch: Mr,
  Text: Dr,
  TextArea: $r,
  Time: Ar,
  FormComponent: Jr
} = Ys, {
  Banner: Fr,
  Box: Nr,
  Breadcrumbs: wr,
  Card: Or,
  ColumnContainer: Tr,
  Footer: Pr,
  Level: xr,
  List: Cr,
  Media: Br,
  Modal: Er,
  ModalCard: zr,
  Panel: Rr,
  Section: Wr,
  Table: Ir,
  Tabs: Lr,
  Slideout: Vr,
  StepWizard: Ur
} = no, { AVAIABLE_SKINS: jr, setSkin: Gr } = uo, {
  ColorTypes: Hr,
  NoticeTypes: Kr,
  Sizes: Yr,
  AnimationSpeeds: qr,
  AnimationTypes: Zr,
  IconSizes: Qr,
  ChartLegendPositions: Xr,
  ChartTypes: eu,
  DropZoneQuadrants: tu,
  BreadCrumbAlignments: au,
  BreadCrumbSeperators: lu,
  ColumnContainerModifiers: su,
  ColumnSizes: nu,
  ColumnOffsetSizes: ou,
  BorderTypes: ru,
  TabAlignments: uu,
  TabStyles: iu,
  TileSizes: du,
  TileTypes: cu,
  FixedNavBarPositions: pu,
  FixedMenuPositions: mu,
  BadgePositions: hu,
  ToolTipPositions: bu,
  ToolTipTextAlignments: vu,
  ButtonAlignments: gu,
  SectionSizes: yu
} = na, { loadNonEs6Module: fu } = sa, { Chart: _u, CodeWriter: ku, Grid: Su, ProgressGroup: Mu } = $o;
export {
  jr as AVAIABLE_SKINS,
  Jo as Animation,
  qr as AnimationSpeeds,
  Zr as AnimationTypes,
  cr as AutoComplete,
  nr as Badge,
  hu as BadgePositions,
  Fr as Banner,
  ru as BorderTypes,
  Nr as Box,
  au as BreadCrumbAlignments,
  lu as BreadCrumbSeperators,
  wr as Breadcrumbs,
  Fo as Button,
  wo as ButtonAdd,
  gu as ButtonAlignments,
  Oo as ButtonCancel,
  To as ButtonDelete,
  Po as ButtonDisable,
  xo as ButtonDownload,
  Co as ButtonEdit,
  Bo as ButtonEnable,
  Eo as ButtonOkay,
  zo as ButtonPrint,
  Ro as ButtonRefresh,
  Wo as ButtonSave,
  Io as ButtonUpload,
  No as ButtonsContainer,
  Or as Card,
  _u as Chart,
  Xr as ChartLegendPositions,
  eu as ChartTypes,
  Lo as CheckMark,
  mr as Checkbox,
  pr as CheckboxGroup,
  ku as CodeWriter,
  Hr as ColorTypes,
  Tr as ColumnContainer,
  su as ColumnContainerModifiers,
  ou as ColumnOffsetSizes,
  nu as ColumnSizes,
  br as ComponentForm,
  hr as DateField,
  ur as DraggableItem,
  Vo as DropDown,
  ir as DropZone,
  tu as DropZoneQuadrants,
  Uo as DynamicSlot,
  jo as Filter,
  mu as FixedMenuPositions,
  pu as FixedNavBarPositions,
  Pr as Footer,
  Jr as FormComponent,
  vr as FullEditor,
  Su as Grid,
  gr as Header,
  yr as Hidden,
  Go as Icon,
  Qr as IconSizes,
  xr as Level,
  Cr as List,
  Br as Media,
  er as Menu,
  lr as MenuEntry,
  tr as MenuLabel,
  ar as MenuList,
  Ho as Message,
  Er as Modal,
  zr as ModalCard,
  Xo as NavBar,
  Kr as NoticeTypes,
  Ko as Notification,
  fr as NumberField,
  Yo as PageNotification,
  qo as Pagination,
  Rr as Panel,
  _r as Paragraph,
  Qo as Progress,
  Mu as ProgressGroup,
  Zo as Promised,
  kr as RadioGroup,
  Wr as Section,
  yu as SectionSizes,
  Sr as Select,
  Yr as Sizes,
  Vr as Slideout,
  dr as Sortable,
  Ur as StepWizard,
  Mr as Switch,
  uu as TabAlignments,
  iu as TabStyles,
  Ir as Table,
  Lr as Tabs,
  or as Tag,
  rr as Tags,
  Dr as Text,
  $r as TextArea,
  du as TileSizes,
  cu as TileTypes,
  Ar as Time,
  sr as ToolTip,
  bu as ToolTipPositions,
  vu as ToolTipTextAlignments,
  fu as loadNonEs6Module,
  Gr as setSkin
};
//# sourceMappingURL=vibrantvue.esm.js.map
