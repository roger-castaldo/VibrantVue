import { computed as S, defineComponent as M, openBlock as o, createBlock as E, Transition as Qt, withCtx as z, renderSlot as P, createElementBlock as d, normalizeClass as O, inject as C, ref as T, watch as V, createVNode as B, createCommentVNode as F, toDisplayString as N, mergeProps as G, toValue as ae, createElementVNode as v, unref as _, Fragment as L, renderList as W, resolveDynamicComponent as ue, createTextVNode as K, onMounted as de, withDirectives as U, vModelText as De, vShow as ne, toRefs as Xt, reactive as it, normalizeProps as ce, resolveComponent as ut, vModelCheckbox as Ve, normalizeStyle as $e, readonly as we, withAsyncContext as ea, onUnmounted as ta, vModelSelect as aa, vModelDynamic as la, useSlots as me, createSlots as Ue, provide as Ce, guardReactiveProps as ve, markRaw as na } from "vue";
import "jquery";
const Pe = (e) => new Promise((r) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, n) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let i = document.createElement("link"), c = new Promise((u) => {
        i.onload = function() {
          u(l);
        };
      });
      t[n] = c, a.appendChild(i), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("server_path", l), i.setAttribute("href", l);
    } else
      t[n] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    r(l);
  });
}), be = [], je = (e, r) => new Promise((t) => {
  let a = be.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && r !== void 0 || a.result === null && r === void 0) {
      let l = setTimeout(() => {
        let n = be.find((s) => s.path === e);
        n == null ? (clearTimeout(l), t(void 0)) : (n.result !== void 0 && r !== void 0 || n.result === void 0 && r === void 0) && (clearTimeout(l), t(n.result));
      }, 500);
    } else
      t(a.result);
  else {
    be.push({
      path: e,
      result: r === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let s = be.findIndex((i) => i.path === e);
      if (r === void 0)
        be[s].result = void 0;
      else {
        let i = {};
        r.forEach((c) => {
          i[c] = window[c];
        }), be[s].result = i;
      }
      t(be[s].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), dt = () => {
  var t;
  let e, r = "";
  return typeof self.crypto < "u" && (e = self.crypto, r = (t = e.randomUUID) == null ? void 0 : t.call(e)), r || "";
}, ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Pe,
  generateUUID: dt,
  loadNonEs6Module: je
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), le = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(le || {}), Q = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(Q || {}), ge = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ge || {}), Oe = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Oe || {}), ct = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ct || {}), Ge = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ge || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), te = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(te || {}), Ne = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Ne || {}), pt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(ht || {}), X = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(X || {}), mt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(mt || {}), He = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(He || {}), bt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(bt || {}), gt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(gt || {}), vt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(vt || {}), yt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(yt || {}), Te = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Te || {}), ft = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(ft || {}), Ke = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ke || {}), xe = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(xe || {}), Ye = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Ye || {}), _t = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(_t || {}), qe = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(qe || {}), kt = /* @__PURE__ */ ((e) => (e.medium = "medium", e.large = "large", e))(kt || {}), St = /* @__PURE__ */ ((e) => (e.default = "default", e.verticalRight = "is-vertical-right", e.verticalLeft = "is-vertical-left", e))(St || {});
const sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ge,
  AnimationTypes: Oe,
  BadgePositions: Ke,
  BorderTypes: He,
  BreadCrumbAlignments: Ne,
  BreadCrumbSeperators: pt,
  ButtonAlignments: _t,
  ChartLegendPositions: Ge,
  ChartTypes: ct,
  ColorTypes: q,
  ColumnContainerModifiers: ht,
  ColumnOffsetSizes: mt,
  ColumnSizes: X,
  DropZoneQuadrants: te,
  FixedMenuPositions: ft,
  FixedNavBarPositions: Te,
  IconSizes: oe,
  NoticeTypes: le,
  SectionSizes: kt,
  Sizes: Q,
  SkinTypes: qe,
  StepWizardOrientations: St,
  TabAlignments: bt,
  TabStyles: gt,
  TileSizes: vt,
  TileTypes: yt,
  ToolTipPositions: xe,
  ToolTipTextAlignments: Ye
}, Symbol.toStringTag, { value: "Module" })), Z = (e) => {
  const r = e("Language", "en");
  return S(() => r);
}, oa = (e) => {
  const r = e("IconSet", "solid");
  return S(() => r);
}, ia = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), ua = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), da = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ca = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), pa = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), Dt = /* @__PURE__ */ M({
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
    const r = da(C);
    Pe(`${r}animate.min.css`);
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
    }, l = (p) => p === void 0 ? "" : `animate__${p}`, n = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, s = S(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = S(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      n(t.speedIn ?? t.speed)
    ].join(" ")), c = S(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      n(t.speedOut ?? t.speed)
    ].join(" ")), u = S(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      n(t.speed)
    ].join(" "));
    return (p, b) => t.repeating ? (o(), d("div", {
      key: 1,
      class: O(u.value)
    }, [
      P(p.$slots, "default")
    ], 2)) : (o(), E(Qt, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": c.value,
      duration: s.value
    }, {
      default: z(() => [
        P(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ha = "brands.min.css", ma = "all.min.css", at = "icon_styles", ba = /\.fa-([^: ]+):before/g, ga = /url\(([^)]+)\)/g, Se = T([]), Le = T(!1), lt = async (e, r) => {
  if (!Le.value) {
    Le.value = !0;
    let t;
    Se.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", at), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(at), Se.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ha}`),
      fetch(`${e}${ma}`),
      fetch(`${e}${r}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(ba)].forEach((n) => {
      Se.value.push(n[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(ga)].forEach((n) => {
      l = l.replace(n[0], `url(${new URL(n[1], e)})`);
    }), t.innerText = l, Se.value.splice(0, 1), Le.value = !1;
  }
}, j = /* @__PURE__ */ M({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const r = ua(C), t = oa(C);
    Se.value.length === 0 ? lt(r, t.value) : V(t, () => lt(r, t.value));
    const a = e, l = S(() => {
      let n = [];
      return a.icon !== void 0 && a.icon !== null && (Se.value.indexOf(a.icon) >= 0 ? n.push("fa-brands") : (n.push("fa-ico"), n.push(`fa-${t.value}`)), n.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== oe.normal && n.push(`fa-${a.size}`), n;
    });
    return (n, s) => (o(), d("i", {
      class: O(l.value)
    }, null, 2));
  }
}), va = ["disabled"], ya = {
  key: 0,
  class: "icon is-small"
}, fa = { key: 1 }, ee = /* @__PURE__ */ M({
  __name: "button",
  props: {
    icon: {},
    type: { default: q.primary },
    title: {},
    disabled: { type: Boolean },
    size: { default: Q.normal },
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = S(() => {
      let n = ["button", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && n.push("disabled"), t.is_rounded && n.push("is-rounded"), t.hide_mobile && n.push("is-hidden-mobile"), t.hide_tablet && n.push("is-hidden-tablet-only"), t.hide_desktop && n.push("is-hidden-desktop is-hidden-widescreen"), n;
    });
    return (n, s) => (o(), d("button", {
      class: O(l.value),
      disabled: t.disabled,
      onClick: s[0] || (s[0] = (i) => a("click"))
    }, [
      t.icon != null ? (o(), d("span", ya, [
        B(j, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : F("", !0),
      t.title != null ? (o(), d("span", fa, N(t.title), 1)) : F("", !0)
    ], 10, va));
  }
}), _a = '{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Refresh":"Refresh","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسناً","Print":"الطباعة","Refresh":"التجديد","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Qeydiyyat","Edit":"Tarix","Enable":"Qeydiyyat","Okay":" Okay","Print":"Çap","Refresh":"Axtarış","Save":"Yadda","Submit":"Qeydiyyat","Upload":"Tarix"},"bg":{"Add":"Добавяне","Cancel":"Отмяна","Delete":"Изтриване","Disable":"Изключване","Download":"Изтегляне","Edit":"Редактиране","Enable":"Включване","Okay":"Добре","Print":"Печат","Refresh":"Обновяване","Save":"Запис","Submit":"Подаване","Upload":"Качване"},"bn":{"Add":"যোগ","Cancel":"বাতিল","Delete":"মুছে","Disable":"নিষ্ক্রিয়","Download":"ডাউনলোড","Edit":"সম্পাদনা","Enable":"সক্রিয়","Okay":"ঠিক","Print":"প্রিন্ট","Refresh":"নতুন","Save":"সংরক্ষণ","Submit":"জমা","Upload":"আপলোড"},"ca":{"Add":"Afegeix","Cancel":"Cancel·","Delete":"Esborra","Disable":"Deshabilita","Download":"Descarrega","Edit":"Edita","Enable":"Habilita","Okay":"Bé","Print":"Imprimeix","Refresh":"Refresca","Save":"Desa","Submit":"Envia","Upload":"Puja"},"cs":{"Add":"Přidat","Cancel":"Zrušit","Delete":"Smazat","Disable":"Zakázat","Download":"Stáhnout","Edit":"Upravit","Enable":"Povolit","Okay":"Dobře","Print":"Tisk","Refresh":"Obnovit","Save":"Uložit","Submit":"Odevzdat","Upload":"Nahrát"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Refresh":"Opdater","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Refresh":"Refreshing","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{"Add":"Προσθήκη","Cancel":"Ακύρωση","Delete":"Διαγραφή","Disable":"Απενεργοποίηση","Download":"Λήψη","Edit":"Επεξεργασία","Enable":"Ενεργοποίηση","Okay":"Εντάξει","Print":"Εκτύπωση","Refresh":"Ανανέωση","Save":"Αποθήκευση","Submit":"Υποβολή","Upload":"Αποστολή"},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Refresh":"Refresh","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Inhabilitación","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Refresh":"Refresh","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{"Add":"Lisa","Cancel":"Tühistage","Delete":"Kustuta","Disable":"Keela","Download":"Laadi","Edit":"Edit","Enable":"Luba","Okay":"Olgu","Print":"Printi","Refresh":"Värskenda","Save":"Päästa","Submit":"Esita","Upload":"Laadi"},"eu":{"Add":"Gehitu","Cancel":"Utzi","Delete":"Ezabatu","Disable":"Desgaitu","Download":"Deskargatu","Edit":"Editatu","Enable":"Gaitu","Okay":"Ados","Print":"Inprimatu","Refresh":"Freskatu","Save":"Gorde","Submit":"Bidali","Upload":"Igo"},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"ویرایش","Enable":"گزینه","Okay":"خوب","Print":"Print","Refresh":"بازسازی","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruutukset","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Refresh":"Virkistää","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Ajouter","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactiver","Download":"Télécharger","Edit":"Modifier","Enable":"Activer","Okay":"Très","Print":"Imprimer","Refresh":"Actualiser","Save":"Enregistrer","Submit":"Soumettre","Upload":"Envoi"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Toir","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Refresh":"Athraigh","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"gl":{"Add":"Add","Cancel":"Cancelar","Delete":"Eliminar","Disable":"Disable","Download":"Baixar","Edit":"Edit","Enable":"Habilitar","Okay":"Ok","Print":"Imprimir","Refresh":"Refresco","Save":"Save","Submit":"Presentación","Upload":"Upload"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Refresh":"מרעננים","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Refresh":"रिफ्रेश","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Refresh":"Frissítés","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Refresh":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Refresh":"Rifiuti","Save":"Salva","Submit":"Inviare","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Refresh":"リフレッシュ","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Refresh":"지원하다","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{"Add":"Pridėti","Cancel":"Atsisakyti","Delete":"Trinti","Disable":"Išjungti","Download":"Atsisiųsti","Edit":"Keisti","Enable":"Įjungti","Okay":"Gerai","Print":"Spausdinti","Refresh":"Atnaujinti","Save":"Įrašyti","Submit":"Siųsti","Upload":"Siųsti"},"lv":{"Add":"Pievienot","Cancel":"Atcelt","Delete":"Dzēst","Disable":"Atslēgt","Download":"Lejupielādēt","Edit":"Rediģēt","Enable":"Ieslēgt","Okay":"Labi","Print":"Drukāt","Refresh":"Atsvaidzināt","Save":"Saglabāt","Submit":"Nosūtīt","Upload":"Augšupielāde"},"ms":{"Add":"Tambah","Cancel":"Batal","Delete":"Dihapus","Disable":"Matikan","Download":"Muaturun","Edit":"Edit","Enable":"Hidupkan","Okay":"Oke","Print":"Cetakan","Refresh":"Segarkan","Save":"Simpan","Submit":"Diserahkan","Upload":"Unggah"},"nb":{"Add":"Legg","Cancel":"Avbryt","Delete":"Slett","Disable":"Slå","Download":"Last","Edit":"Rediger","Enable":"Slå","Okay":"Ok","Print":"Skriv","Refresh":"Oppdater","Save":"Lagre","Submit":"Send","Upload":"Last"},"nl":{"Add":"Voeg","Cancel":"Annuleren","Delete":"Verwijderen","Disable":"Uitschakelen","Download":"Downloaden","Edit":"Bewerken","Enable":"Inschakelen","Okay":"Oké","Print":"Afdrukken","Refresh":"Verversen","Save":"Opslaan","Submit":"Verzenden","Upload":"Uploaden"},"pl":{"Add":"Dodaj","Cancel":"Anuluj","Delete":"Usuń","Disable":"Wyłącz","Download":"Pobierz","Edit":"Edycja","Enable":"Włącz","Okay":"Dobrze","Print":"Drukuj","Refresh":"Odśwież","Save":"Zapisz","Submit":"Prześlij","Upload":"Wyślij"},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Refresh":"Atualizar","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{"Add":"Adaugă","Cancel":"Renunță","Delete":"Șterge","Disable":"Dezactivează","Download":"Descărcare","Edit":"Editare","Enable":"Activează","Okay":"Bine","Print":"Tipărește","Refresh":"Reîmprospătează","Save":"Salvează","Submit":"Trimite","Upload":"Încarcă"},"ru":{"Add":"Добавить","Cancel":"Отменить","Delete":"Исключить","Disable":"Инвалид","Download":"Скачать","Edit":"Редактировать","Enable":"Допускать","Okay":"Хорошо","Print":"Печать","Refresh":"Освежить","Save":"Спасти","Submit":"Представить","Upload":"Загрузить"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Refresh":"Obnoviť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{"Add":"Dodaj","Cancel":"Prekliči","Delete":"Zbriši","Disable":"Onemogoči","Download":"Prenesi","Edit":"Uredi","Enable":"Omogoči","Okay":"V","Print":"Natisni","Refresh":"Osveži","Save":"Shrani","Submit":"Pošlji","Upload":"Pošlji"},"sq":{"Add":"_Shto","Cancel":"Anullo","Delete":"Elemino","Disable":"Jo","Download":"Shkarkimi","Edit":"Ndrysho","Enable":"Aktivo","Okay":"Mirë","Print":"Printo","Refresh":"Rifresko","Save":"Ruaj","Submit":"Dërgo","Upload":"Ngarko"},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Refresh":"Refresh","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{"Add":"เพิ่ม","Cancel":"ยกเลิก","Delete":"ลบ","Disable":"ปิดการใช้งาน","Download":"ดาวน์โหลด","Edit":"แก้ไข","Enable":"เปิด","Okay":"โอเค","Print":"พิมพ์","Refresh":"ปรับปรุงใหม่","Save":"บันทึก","Submit":"ส่ง","Upload":"อัปโหลด"},"tl":{"Add":"Magdagdag","Cancel":"Huwag","Delete":"Ibagsak","Disable":"Hindi","Download":"Ibaba","Edit":"Baguhin","Enable":"Kaibig","Okay":"Okay","Print":"Nakalimbag","Refresh":"Nakapagpapasigla","Save":"Mag","Submit":"Pagpapasakop","Upload":"Itaas"},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelliler","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Refresh":"Yenileme","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Refresh":"Реверс","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"ur":{"Add":"_شامل","Cancel":"منسوخ","Delete":"حذف","Disable":"منسوخ","Download":"اوپر","Edit":"مرتب","Enable":"فعال","Okay":"ٹھیک","Print":"پرنٹ","Refresh":"خوشی","Save":"محفوظ","Submit":"غیر","Upload":"اپ"},"zh":{"Add":"添加","Cancel":"取消","Delete":"删除","Disable":"禁用","Download":"下载","Edit":"编辑","Enable":"启用","Okay":"还好","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上传"},"zt":{"Add":"添加","Cancel":"取消","Delete":"刪除","Disable":"禁用","Download":"下載","Edit":"編輯","Enable":"開啟","Okay":"好吧","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上傳"}}', ka = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":" Filter"},"bg":{"Filter":"Филтър"},"bn":{"Filter":"ফিল্টার"},"cs":{"Filter":"Filtr"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{"Filter":"Φίλτρο"},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{"Filter":"Filter"},"eu":{"Filter":"Iragazkia"},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"gl":{"Filter":"Filtrar"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{"Filter":"Filtras"},"lv":{"Filter":"Filtrs"},"ms":{"Filter":"Penapis"},"nb":{"Filter":"Filtrer"},"nl":{"Filter":"Filter"},"pl":{"Filter":"Filtr"},"pt":{"Filter":"Filtro"},"ro":{"Filter":"Filtru"},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{"Filter":"Filter"},"sq":{"Filter":"Filtra"},"sv":{"Filter":"Filter"},"th":{"Filter":"กรอง"},"tl":{"Filter":"Pansala"},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"ur":{"Filter":"فائلز"},"zh":{"Filter":"过滤器"},"zt":{"Filter":"分頁"}}', Sa = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":" Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":"Qeydiyyat"},"bg":{"Previous":"Предишен","Next":"Следващият","Older":"По-","Newer":"По-","GoToPage":"Отиване на страница"},"bn":{"Previous":"পূর্ববর্তী","Next":"পরবর্তী","Older":"বয়স্ক","Newer":"নিউকার","GoToPage":"চিহ্নিত স্থানে চলুন"},"ca":{"Previous":"Anterior","Next":"Següent","Older":"Vella","Newer":"Més","GoToPage":"Vés a la pàgina"},"cs":{"Previous":"Předchozí","Next":"Další","Older":"Starší","Newer":"Nejnovější","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{"Previous":"Προηγούμενο","Next":"Επόμενο","Older":"Μεγαλύτερος","Newer":"Νεότερα","GoToPage":"Μετάβαση στη σελίδα"},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{"Previous":"Eelmine","Next":"Järgmine","Older":"Vanem","Newer":"Uuem","GoToPage":"Mine lehele"},"eu":{"Previous":"Aurrekoa","Next":"Hurrengoa","Older":"Zaharragoa","Newer":"Newer","GoToPage":"Joan orrira"},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Plus","Newer":"Plus","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go Leathanach"},"gl":{"Previous":"Anterior","Next":"Seguinte","Older":"Idade","Newer":"Newer","GoToPage":"Ir á páxina"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"본문 바로가기"},"lt":{"Previous":"Ankstesnis","Next":"Sekantis","Older":"Senesni","Newer":"Naujokas","GoToPage":"Pereiti į puslapį"},"lv":{"Previous":"Iepriekšējais","Next":"Nākamais","Older":"Vecāki","Newer":"Jaunāks","GoToPage":"Iet uz lapu"},"ms":{"Previous":"Sebelumnya","Next":"Next","Older":"♪","Newer":"Perancis","GoToPage":"Pergi Ke Halaman"},"nb":{"Previous":"Forrige","Next":"Neste","Older":"Eldre","Newer":"Nyere","GoToPage":"Gå til siden"},"nl":{"Previous":"Vorige","Next":"Volgende","Older":"Ouder","Newer":"Nieuwer","GoToPage":"Ga naar pagina"},"pl":{"Previous":"Poprzedni","Next":"Następny","Older":"Starszy","Newer":"Nowsza","GoToPage":"Przejdź do strony"},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{"Previous":"Precedent","Next":"Înainte","Older":"Mai","Newer":"Mai","GoToPage":"Du-te la pagina"},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Старше","Newer":"Новый","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{"Previous":"Prejšnja","Next":"Naprej","Older":"Starejši","Newer":"Novejši","GoToPage":"Pojdi na stran"},"sq":{"Previous":"Paraardhëse","Next":"Në","Older":"Më","Newer":"Ri","GoToPage":"Shko tek faqja"},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{"Previous":"ก่อนหน้า","Next":"ต่อไป","Older":"อายุ","Newer":"สร้างใหม่","GoToPage":"ไปยังหน้า"},"tl":{"Previous":"Bago","Next":"Susunod","Older":"Mas","Newer":"Mas","GoToPage":"Pumunta sa Pahina"},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"ur":{"Previous":"پہلے","Next":"اگلا","Older":"عمررسیدہ","Newer":"نیا","GoToPage":"صفحہ ۲۴ پر جائیں"},"zh":{"Previous":"上一个","Next":"下一个","Older":"老年人","Newer":"更新","GoToPage":"转到页面"},"zt":{"Previous":"前一個","Next":"下一頁","Older":"老了","Newer":"更新","GoToPage":"跳至頁面"}}', Da = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"يان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qalereya","Mon":"Bakı","Tue":"Qalereya","Wed":"Biznes","Thu":"Qalereya","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Axtarış","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Bakı","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{"Sun":"Слънце","Mon":"Мон","Tue":"Туе","Wed":"Сватба","Thu":"Thu","Fri":"Fri","Sat":"Сат","Sunday":"Неделя","Monday":"Понеделник","Tuesday":"Вторник","Wednesday":"Сряда","Thursday":"Четвъртък","Friday":"Петък","Saturday":"Събота"},"Months":{"Jan":"Ян","Feb":"Февруари","Mar":"Мар","Apr":"Apr","May":"Май","Jun":"Джун","Jul":"Юли","Aug":"Aug","Sep":"Сеп","Oct":"Окт","Nov":"Nov","Dec":"Дек","January":"Януари","Febuary":"Февруари","March":"Март","April":"Април","June":"Юни","July":"Юли","August":"Август","September":"Септември","October":"Октомври","November":"Ноември","December":"Декември"},"Today":"Днес"},"bn":{"Weekdays":{"Sun":"রবি","Mon":"মন","Tue":"মঙ্গল","Wed":"অস্বীকৃত","Thu":"বৃহঃ","Fri":"ফ্রিসেল","Sat":"শনি","Sunday":"রবিবার","Monday":"সোমবার","Tuesday":"মঙ্গলবার","Wednesday":"বুধবার","Thursday":"বৃহস্পতিবার","Friday":"শুক্রবার","Saturday":"শনিবার"},"Months":{"Jan":"জানুয়ারী","Feb":"ফেব্রুয়ারীMarch","Mar":"মার্চApril","Apr":"এপ্রিল","May":"মে","Jun":"জুনিউ","Jul":"জুমি","Aug":"আগস্ট","Sep":"সেপ্টেম্বরOctober","Oct":"অক্টোবর","Nov":"নভেম্বর","Dec":"ডিসেম্বর","January":"জানুয়ারী","Febuary":"ফেব্রুয়ারীof","March":"মার্চ","April":"এপ্রিল","June":"জুন","July":"জুলাই","August":"আগস্ট","September":"সেপ্টেম্বর","October":"অক্টোবর","November":"নভেম্বর","December":"সদস্য"},"Today":"আজ"},"ca":{"Weekdays":{"Sun":"Sol","Mon":"Dl","Tue":"Dt","Wed":"Dc","Thu":"Dj","Fri":"DvSaturday","Sat":"DsSunday","Sunday":"Diumenge","Monday":"Dilluns","Tuesday":"Dimarts","Wednesday":"Dimecres","Thursday":"Dijous","Friday":"Divendres","Saturday":"Dissabte"},"Months":{"Jan":"Mare","Feb":"FebMarch","Mar":"Mar","Apr":"AbrMay","May":"Maig","Jun":"JunJuly","Jul":"JulAugust","Aug":"AgoSeptember","Sep":"Set","Oct":"Oct","Nov":"Nov","Dec":"Des","January":"Gener","Febuary":"FebuaryCity","March":"Març","April":"Abril","June":"Juny","July":"Juliol","August":"Agost","September":"Setembre","October":"Octubre","November":"Novembre","December":"Desembre"},"Today":"Avui"},"cs":{"Weekdays":{"Sun":"Slunce","Mon":"Po","Tue":"Út","Wed":"St","Thu":"Čt","Fri":"Pá","Sat":"Sat","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Únor","Mar":"Mar","Apr":"Dub","May":"Květen","Jun":"Červen","Jul":"Červenec","Aug":"Srpen","Sep":"Září","Oct":"Říjen","Nov":"Listopad","Dec":"Pro","January":"Leden","Febuary":"Febuary","March":"Březen","April":"Duben","June":"Červen","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Listopad","December":"Prosinec"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Fri":"Friseur","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"Sept","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{"Sun":"Ήλιος","Mon":"Δευ","Tue":"Τεύχος","Wed":"Τετ","Thu":"Θου","Fri":"Παρ","Sat":"Σάβ","Sunday":"Κυριακή","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο"},"Months":{"Jan":"Ιαν","Feb":"Φεβ","Mar":"Μαρ","Apr":"Απρ","May":"Μάιος","Jun":"Ιουν","Jul":"Ιουλ","Aug":"Αυγ","Sep":"Σεπ","Oct":"Οκτ","Nov":"Νοε","Dec":"Δεκ","January":"Ιανουάριος","Febuary":"Φεβουάριο","March":"Μάρτιος","April":"Απρίλιος","June":"Ιούνιος","July":"Ιούλιος","August":"Αύγουστος","September":"Σεπτέμβριος","October":"Οκτώβριος","November":"Νοέμβριος","December":"Δεκέμβριος"},"Today":"Σήμερα"},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundo","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov-Zelando","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{"Sun":"Päike","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattus","Sunday":"Pühapäev","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäeval","Friday":"Reede","Saturday":"Laupäev"},"Months":{"Jan":"Jan","Feb":"Veebruar","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oktoober","Nov":"Nov","Dec":"Dec","January":"Jaanuar","Febuary":"Febuary","March":"Märts","April":"Aprill","June":"Juuni","July":"Juuli","August":"August","September":"September","October":"Oktoober","November":"November","December":"Detsember"},"Today":"Täna"},"eu":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Apustua","Thu":"Og","Fri":"Fri","Sat":"Sat","Sunday":"Igandea","Monday":"Astelehena","Tuesday":"Asteartea","Wednesday":"Asteazkena","Thursday":"Osteguna","Friday":"Ostirala","Saturday":"Larunbata"},"Months":{"Jan":"Jan","Feb":"Ots","Mar":"Marmar","Apr":"Apr","May":"Maiatza","Jun":"Jun","Jul":"Jul","Aug":"Abusua","Sep":"Ira","Oct":"Oct","Nov":"Aza","Dec":"Abendua","January":"Urtarrila","Febuary":"Feburoa","March":"Martxoa","April":"Apirila","June":"Ekaina","July":"Uztaila","August":"Abuztua","September":"Iraila","October":"Urria","November":"Azaroa","December":"Abendua"},"Today":"Gaur"},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Auringon","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Soleil","Mon":"Mon","Tue":"Tu","Wed":"Mariage","Thu":"Jeu","Fri":"Ven","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Janvier","Feb":"Fév","Mar":"Mars","Apr":"Avr","May":"Mai","Jun":"Juin","Jul":"Juillet","Aug":"Août","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Déc","January":"Janvier","Febuary":"Février","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Déan","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Dé","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"An","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Irl","Febuary":"Amharc","March":"Márta","April":"Amharc","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Nollaig"},"Today":"Sa"},"gl":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Apostamos","Thu":"Tu","Fri":"Frio","Sat":"Sat","Sunday":"Domingo","Monday":"Luns","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Xoves","Friday":"Venres","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Febreiro","Mar":"Mar","Apr":"Abril","May":"Maio","Jun":"Jun","Jul":"Xullo","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Novidade","Dec":"Dec","January":"Xaneiro","Febuary":"Febreiro","March":"Marzo","April":"Abril","June":"Xuño","July":"Xullo","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Decembro"},"Today":"Hoxe"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"יום"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utána","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Manapság"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Sitemap","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンド","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日～金曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"₢","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2월","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{"Sun":"Saulė","Mon":"Mon","Tue":"Tue","Wed":"WEd","Thu":"Thu","Fri":"FrNAME","Sat":"Sat","Sunday":"Sekmadienis","Monday":"Pirmadienis","Tuesday":"Antradienis","Wednesday":"Trečiadienis","Thursday":"Ketvirtadienis","Friday":"Penktadienis","Saturday":"Šeštadienis"},"Months":{"Jan":"Sau","Feb":"Vas","Mar":"Mar","Apr":"Bal","May":"Gegužės","Jun":"Bir","Jul":"Lie","Aug":"Rgp","Sep":"Rp","Oct":"Spalis","Nov":"Nr","Dec":"Gruodis","January":"Sausis","Febuary":"Piešinys","March":"Kovas","April":"Balandis","June":"Birželis","July":"Liepa","August":"Rugpjūtis","September":"Rugsėjis","October":"Spalis","November":"Lapkritis","December":"Gruodis"},"Today":"Šiandien"},"lv":{"Weekdays":{"Sun":"Saule","Mon":"N","Tue":"Otr","Wed":"Tre","Thu":"Cet","Fri":"Pie","Sat":"Ses","Sunday":"Svētdiena","Monday":"Pirmdiena","Tuesday":"Otrdiena","Wednesday":"Trešdiena","Thursday":"Ceturtdiena","Friday":"Piektdiena","Saturday":"Sestdiena"},"Months":{"Jan":"Janvāris","Feb":"Febr","Mar":"Mar","Apr":"Apr","May":"Maijs","Jun":"Jūn","Jul":"Jūl","Aug":"Aug","Sep":"Sept","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Janvāris","Febuary":"Febuāris","March":"Marts","April":"Aprīlis","June":"Jūnijs","July":"Jūlijs","August":"Augusts","September":"Septembris","October":"Oktobris","November":"Novembris","December":"Decembris"},"Today":"Šodien"},"ms":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Perancis","Wed":"♪","Thu":"Khaw","Fri":"Perancis","Sat":"♪","Sunday":"Ahad","Monday":"Isnin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Khamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Perancis","Mar":"Perancis","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"♪","Aug":"Aug","Sep":"Perancis","Oct":"Takh","Nov":"Nov","Dec":"Amerika","January":"Januari","Febuary":"Febuary","March":"2010,","April":"April","June":"Juni","July":"Juli","August":"Ogos","September":"Perancis","October":"Oktober","November":"November","December":"Amerika"},"Today":"Hari"},"nb":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Februar","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"I"},"nl":{"Weekdays":{"Sun":"Zon","Mon":"Ma","Tue":"Di","Wed":"Wo","Thu":"Do","Fri":"Vr","Sat":"Zat","Sunday":"Zondag","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"February","March":"Maart","April":"April","June":"Juni","July":"Juli","August":"Augustus","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Vandaag"},"pl":{"Weekdays":{"Sun":"Słońce","Mon":"Mon","Tue":"Wtyczka","Wed":"Środ","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Niedziela","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Luty","Mar":"Mar","Apr":"Kwiecień","May":"Maj","Jun":"Czerwiec","Jul":"Lipiec","Aug":"Sierpień","Sep":"Wrzesień","Oct":"Październik","Nov":"Nov","Dec":"Grudzień","January":"Styczeń","Febuary":"Luty","March":"Marzec","April":"Kwiecień","June":"Czerwiec","July":"Lipiec","August":"Sierpień","September":"Wrzesień","October":"Październik","November":"Listopad","December":"Grudzień"},"Today":"Dzisiaj"},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"A","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{"Sun":"Soare","Mon":"Luni","Tue":"Tue","Wed":"Căsătorie","Thu":"Thu","Fri":"Vine","Sat":"Sat","Sunday":"Duminică","Monday":"Luni","Tuesday":"Marţi","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă"},"Months":{"Jan":"Jan","Feb":"Februarie","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Ianuarie","Febuary":"Febur","March":"Martie","April":"Aprilie","June":"Iunie","July":"Iulie","August":"August","September":"Septembrie","October":"Octombrie","November":"Noiembrie","December":"Decembrie"},"Today":"Astăzi"},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Мон","Tue":"Туи","Wed":"Свадьба","Thu":"Ту","Fri":"Фри","Sat":"Сидеть","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Ян","Feb":"Февраль","Mar":"Мар","Apr":"Апр","May":"Май","Jun":"Джун","Jul":"Джул","Aug":"Ауг","Sep":"Сеп","Oct":"Октября","Nov":"Ноябрь","Dec":"Декларация","January":"Январь","Febuary":"Февраль","March":"Март","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октября","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"NAŠE","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Slúcha","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{"Sun":"Sonce","Mon":"Naslednji","Tue":"Tor","Wed":"Sre","Thu":"Čet","Fri":"Fri","Sat":"Sob","Sunday":"Nedelja","Monday":"Ponedeljek","Tuesday":"Torek","Wednesday":"Sreda","Thursday":"Četrtek","Friday":"Petek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Avg","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Febuary","March":"Marec","April":"April","June":"Junij","July":"Julij","August":"Avgust","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Danes"},"sq":{"Weekdays":{"Sun":"Dielli","Mon":"Mon","Tue":"Tue","Wed":"Mer","Thu":"Tsu","Fri":"Pre","Sat":"Sat","Sunday":"E","Monday":"E","Tuesday":"E","Wednesday":"E","Thursday":"E","Friday":"E","Saturday":"E"},"Months":{"Jan":"Jan","Feb":"Fb","Mar":"Meri","Apr":"Për","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Tetor","Nov":"Nov","Dec":"Dhjetor","January":"Janar","Febuary":"Febuary","March":"Mars","April":"Prill","June":"Qershor","July":"Korrik","August":"Gusht","September":"Shtator","October":"Tetor","November":"Nëntor","December":"Dhjetor"},"Today":"Sot"},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{"Sun":"อาทิตย์","Mon":"นิ้ว","Tue":"Tue","Wed":"เว็บ","Thu":"ทู","Fri":"เนื้อ","Sat":"ที่นั่ง","Sunday":"อาทิตย์","Monday":"จันทร์","Tuesday":"อังคาร","Wednesday":"วันพุธ","Thursday":"พฤหัสบดี","Friday":"ศุกร์","Saturday":"เสาร์"},"Months":{"Jan":"ไม่นะ","Feb":"ก.","Mar":"ขนาด","Apr":"ขนาด","May":"พฤษภาคม","Jun":"จุน","Jul":"ก.","Aug":"อัก","Sep":"เซพ","Oct":"ตลับหมึก","Nov":"นอฟ","Dec":"ธ.","January":"มกราคม","Febuary":"อภิสิทธิ์","March":"มีนาคม","April":"เมษายน","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม"},"Today":"วันนี้"},"tl":{"Weekdays":{"Sun":"Araw","Mon":"Buwan","Tue":"Tue","Wed":"Damo","Thu":"Thu","Fri":"Kaibigan","Sat":"Sat","Sunday":"Linggo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miyerkules","Thursday":"Huwebes","Friday":"Biyernes","Saturday":"Sabado"},"Months":{"Jan":"Jan","Feb":"Sanggol","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Juul","Aug":"Ug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Pagpapasiya","January":"Enero","Febuary":"Febuary","March":"Marso","April":"Abril","June":"Hunyo","July":"Hulyo","August":"Agosto","September":"Setyembre","October":"Oktubre","November":"Nobyembre","December":"Disyembre"},"Today":"Ngayon"},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Febuary","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Про","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"П'ятниця","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарита","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"ur":{"Weekdays":{"Sun":"سورج","Mon":"مون","Tue":"ٹو","Wed":"وے","Thu":"چو","Fri":"فری","Sat":"شطرنج","Sunday":"اتوار","Monday":"منگل","Tuesday":"منگل","Wednesday":"بدھ","Thursday":"جمعرات","Friday":"جمعہ","Saturday":"سبت"},"Months":{"Jan":"یان","Feb":"فیب","Mar":"مار","Apr":"پرنٹ","May":"مئی","Jun":"جون","Jul":"یول","Aug":"آغ","Sep":"سیپ","Oct":"پرنٹ","Nov":"ن","Dec":"سوال","January":"جنوری","Febuary":"افریقہ","March":"مارچ","April":"اپریل","June":"جون","July":"جولائی","August":"اگست","September":"ستمبر","October":"اکتوبر","November":"نومبر","December":"دسمبر"},"Today":"آج"},"zh":{"Weekdays":{"Sun":"太阳","Mon":"月号","Tue":"图","Wed":"结婚","Thu":"图","Fri":"弗里语Name","Sat":"座位","Sunday":"礼拜","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六(上午)"},"Months":{"Jan":"扬","Feb":"二月","Mar":"马来","Apr":"农历四月","May":"5月","Jun":"军","Jul":"朱尔","Aug":"奥格","Sep":"九月","Oct":"十月(简体)","Nov":"页:1","Dec":"12月(中文)","January":"页:1","Febuary":"二级","March":"3月(半天会议)","April":"4月(半天会议)","June":"6月份","July":"7月(半天会议)","August":"8月(半天)","September":"9月(半天会议)","October":"10月(半天会议)","November":"11月(半天会议)","December":"12月(半天)"},"Today":"现在"},"zt":{"Weekdays":{"Sun":"太阳","Mon":"月","Tue":"二等分","Wed":"有婚","Thu":"三月","Fri":"弗里","Sat":"有","Sunday":"星期天","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六"},"Months":{"Jan":"1月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"三月","Jul":"二月","Aug":"8月","Sep":"九月","Oct":"十月","Nov":"11月","Dec":"二月","January":"1月","Febuary":"二月","March":"三月","April":"4月","June":"6月","July":"7月","August":"8月","September":"9月","October":"10月","November":"11月","December":"12月"},"Today":"今天"}}`, Ma = '{"en":{"Error":"Error"},"ar":{"Error":"الرعب"},"az":{"Error":"Qeyd"},"bg":{"Error":"Грешка"},"bn":{"Error":"ত্রুটি"},"ca":{"Error":"Error"},"cs":{"Error":"Chyba"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{"Error":"Σφάλμα"},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{"Error":"Viga"},"eu":{"Error":"Errorea"},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Amharc"},"gl":{"Error":"Erro"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{"Error":"Klaida"},"lv":{"Error":"Kļūda"},"ms":{"Error":"Error"},"nb":{"Error":"Feil"},"nl":{"Error":"Fout"},"pl":{"Error":"Błąd"},"pt":{"Error":"Erro"},"ro":{"Error":"Eroare"},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{"Error":"Napaka"},"sq":{"Error":"Gabim"},"sv":{"Error":"Fel"},"th":{"Error":"ผิดพลาด"},"tl":{"Error":"Pagkakamali"},"tr":{"Error":"Hata"},"uk":{"Error":"Помилка"},"ur":{"Error":"خامی"},"zh":{"Error":"错误"},"zt":{"Error":"錯誤"}}', $a = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":" Don"},"bg":{"Done":"Готово"},"bn":{"Done":"সম্পন্ন"},"ca":{"Done":"Fet"},"cs":{"Done":"Hotovo"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{"Done":"Έγινε"},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{"Done":"Tehtud"},"eu":{"Done":"Eginda"},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Fait"},"ga":{"Done":"Arna"},"gl":{"Done":"Feito"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{"Done":"@"},"lv":{"Done":"Pabeigts"},"ms":{"Done":"Selesai"},"nb":{"Done":"Ferdig"},"nl":{"Done":"Klaar"},"pl":{"Done":"Gotowe"},"pt":{"Done":"Feito"},"ro":{"Done":"Gata"},"ru":{"Done":"Сделано"},"sk":{"Done":"Hotovo"},"sl":{"Done":"Končano"},"sq":{"Done":"U"},"sv":{"Done":"Done"},"th":{"Done":"เสร็จแล้ว"},"tl":{"Done":"Tapos"},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"ur":{"Done":"بند"},"zh":{"Done":"完成"},"zt":{"Done":"完成"}}', Aa = {
  Button: JSON.parse(_a),
  Filter: JSON.parse(ka),
  Pagination: JSON.parse(Sa),
  Date: JSON.parse(Da),
  Form: JSON.parse(Ma),
  Wizard: JSON.parse($a)
}, R = (e, r) => {
  let t = e.split("."), a = Aa[t[0]];
  const l = (r == null || r == null ? null : r.value) ?? "en";
  if (a !== void 0) {
    a[l] === void 0 ? a = a.en : a = a[l];
    let n = 1;
    for (; a !== void 0 && n < t.length; )
      a = a[t[n]], n++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Fa = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Mt = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ja = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ta = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), $t = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Pa = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), At = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = r, a = Z(C), l = S(() => ({
      title: R("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (n, s) => (o(), E(ee, G(l.value, {
      onClick: s[0] || (s[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ea = /* @__PURE__ */ M({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("div", {
      class: O(["buttons", r.size ? `are-${r.size}` : "", r.alignment ? `is-${r.alignment}` : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Ca = /* @__PURE__ */ M({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: oe.normal }
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), E(j, {
      icon: `square-${r.checked ? "check" : "xmark"}`,
      size: r.size
    }, null, 8, ["icon", "size"]));
  }
}), La = { class: "dropdown-trigger" }, za = ["aria-controls"], Ia = { class: "icon is-small" }, Wa = ["id"], Ra = { class: "dropdown-content" }, Va = {
  key: 0,
  class: "dropdown-divider"
}, Ua = { key: 0 }, ja = /* @__PURE__ */ M({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const r = dt(), t = e, a = T(!1), l = S(() => {
      let u = ["dropdown"];
      return t.is_hoverable && u.push("is-hoverable"), t.is_right_align && u.push("is-right"), t.drops_up && u.push("is-up"), a.value && u.push("is-active"), u;
    }), n = S(() => {
      let u = ae(t.items);
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
    return (u, p) => (o(), d("div", {
      class: O(l.value)
    }, [
      v("div", La, [
        v("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": _(r),
          onClick: p[0] || (p[0] = (b) => a.value = !a.value)
        }, [
          v("span", null, N(t.title), 1),
          v("span", Ia, [
            B(j, {
              icon: "angle-down",
              "aria-hidden": "true"
            })
          ])
        ], 8, za)
      ]),
      v("div", {
        class: "dropdown-menu",
        id: _(r),
        role: "menu"
      }, [
        (o(!0), d(L, null, W(n.value, (b, g) => (o(), d("div", Ra, [
          g > 0 ? (o(), d("hr", Va)) : F("", !0),
          (o(!0), d(L, null, W(b.children, (h) => (o(), E(ue(typeof h == "string" ? "div" : "a"), {
            class: O(s(h)),
            href: i(h),
            onClick: (k) => c(h)
          }, {
            default: z(() => [
              typeof h == "string" ? (o(), d("p", Ua, N(h), 1)) : F("", !0),
              K(" " + N(typeof h == "string" ? null : h.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Wa)
    ], 2));
  }
}), nt = async (e, r, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return r && l.sort(r), l.filter((n) => t === void 0 || t.value.test(n)).map((n) => a[n]);
}, Ga = /* @__PURE__ */ M({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const r = T(null), t = e, a = S(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return V(() => [t.url, t.filter], async () => {
      r.value = await nt(t.url, t.sortMethod, a);
    }), de(async () => {
      r.value = await nt(t.url, t.sortMethod, a);
    }), (l, n) => (o(!0), d(L, null, W(r.value, (s) => (o(), E(ue(s), G({ ref_for: !0 }, t.props), null, 16))), 256));
  }
}), Ha = { class: "control has-icons-left" }, Ka = ["placeholder"], Ya = { class: "icon is-small is-left" }, Ft = /* @__PURE__ */ M({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = Z(C), n = S(() => R("Filter.Filter", l)), s = T(null);
    V([s], (c) => {
      c[0] === "" && t.default_value && (s.value = t.default_value, a("filter", s.value == "" ? null : s.value));
    });
    const i = (c) => {
      c.keyCode == 13 && a("filter", s.value == "" ? null : s.value);
    };
    return de(() => {
      t.default_value && (s.value = t.default_value);
    }), (c, u) => (o(), d("div", Ha, [
      U(v("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p),
        onKeypress: i
      }, null, 40, Ka), [
        [De, s.value]
      ]),
      v("span", Ya, [
        B(j, { icon: "filter" })
      ])
    ]));
  }
}), qa = {
  key: 0,
  class: "message-header"
}, Za = { class: "message-body" }, Qa = /* @__PURE__ */ M({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: Q.normal }
  },
  emits: ["close"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = S(() => t.size === Q.normal ? null : `is-${t.size}`), n = S(() => `is-${t.type}`);
    return (s, i) => (o(), d("article", {
      class: O(["message", l.value, n.value])
    }, [
      t.title ? (o(), d("div", qa, [
        v("p", null, N(t.title), 1),
        t.has_delete ? (o(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: i[0] || (i[0] = (c) => a("close"))
        })) : F("", !0)
      ])) : F("", !0),
      v("div", Za, [
        P(s.$slots, "default", {}, () => [
          K(N(t.message), 1)
        ])
      ])
    ], 2));
  }
}), pe = /* @__PURE__ */ M({
  __name: "notification",
  props: {
    type: { default: le.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("div", {
      class: O(["notification", "is-" + r.type, r.light ? "is-light" : ""])
    }, [
      P(t.$slots, "default", {}, () => [
        K(N(r.message), 1)
      ])
    ], 2));
  }
}), Xa = {
  key: 0,
  class: "modal-background"
}, el = {
  key: 0,
  class: "title"
}, tl = { class: "block" }, al = /* @__PURE__ */ M({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: le.info },
    message: {},
    header: {},
    block_user: { type: Boolean },
    has_close: { type: Boolean },
    is_light: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = S(() => {
      switch (t.type) {
        case le.info:
          return "circle-info";
        case le.success:
          return "circle-check";
        case le.danger:
          return "bug";
        case le.warning:
          return "circle-exclamation";
      }
    }), n = S(() => {
      var s = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && s.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || s.push("has-no-close"), s;
    });
    return (s, i) => (o(), d("div", {
      class: O({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (o(), d("div", Xa)) : F("", !0),
      B(Dt, {
        incoming: _(Oe).fadeIn,
        outgoing: _(Oe).fadeOut,
        speed: _(ge).slower
      }, {
        default: z(() => [
          t.visible ? (o(), d("div", {
            key: 0,
            class: O(n.value)
          }, [
            B(j, {
              icon: l.value,
              size: _(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (o(), d("h1", el, N(t.header), 1)) : F("", !0),
            v("div", tl, N(t.message), 1),
            t.has_close ? (o(), E(j, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (c) => a("close")),
              size: _(oe).large
            }, null, 8, ["size"])) : F("", !0)
          ], 2)) : F("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), ll = ["title", "disabled"], nl = ["title", "disabled"], rl = {
  key: 0,
  class: "pagination-list"
}, sl = {
  key: 0,
  class: "pagination-ellipsis"
}, ol = ["aria-label", "onOnclick"], Jt = /* @__PURE__ */ M({
  __name: "pagination",
  props: {
    use_next: { type: Boolean },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: Q.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean, default: !0 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = Z(C), n = S(() => R(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), s = S(() => R(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), i = S(() => t.button_type ? `has-background-${t.button_type}` : ""), c = S(() => R("Pagination.GoToPage", l)), u = S(() => t.current_page === void 0 ? 0 : ae(t.current_page) + (t.zero_page_index ? 1 : 0)), p = S(() => (t.has_previous ?? !1) || u.value > 0), b = S(() => (t.has_more ?? !1) || u.value < (t.total_pages === void 0 ? 0 : ae(t.total_pages))), g = S(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (ae(t.total_pages) > 5) {
        let f = Math.max(t.current_page === void 0 ? Math.floor(ae(t.total_pages) / 2) : u.value, 3);
        return ae(t.total_pages) - u.value === 0 ? f -= 2 : ae(t.total_pages) - u.value === 1 && f--, console.log(f), [
          1,
          -1,
          f - 1,
          f,
          f + 1,
          -1,
          ae(t.total_pages)
        ];
      } else {
        let f = [];
        for (let A = 1; A <= ae(t.total_pages); A++)
          f.push(A);
        return f;
      }
    }), h = function() {
      p && (t.current_page !== null ? a("goToPage", ae(t.current_page) - 1) : a("moveBack"));
    }, k = function() {
      b && (t.current_page !== null ? a("goToPage", ae(t.current_page) + 1) : a("moveForward"));
    }, m = function(f) {
      a("goToPage", t.zero_page_index ? f - 1 : f);
    };
    return (f, A) => U((o(), d("nav", {
      class: O(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      v("a", {
        class: O(["pagination-previous", i.value]),
        title: n.value,
        onClick: h,
        disabled: p.value ? null : "disabled"
      }, [
        B(j, {
          icon: "backward",
          class: "mr-1",
          size: _(oe).small
        }, null, 8, ["size"]),
        K(" " + N(n.value), 1)
      ], 10, ll),
      v("a", {
        class: O(["pagination-next", i.value]),
        title: s.value,
        onClick: k,
        disabled: b.value ? null : "disabled"
      }, [
        K(N(s.value) + " ", 1),
        B(j, {
          icon: "forward",
          class: "ml-1",
          size: _(oe).small
        }, null, 8, ["size"])
      ], 10, nl),
      t.total_pages !== void 0 ? (o(), d("ul", rl, [
        (o(!0), d(L, null, W(g.value, (y) => (o(), d("li", null, [
          y === -1 ? (o(), d("span", sl, "…")) : (o(), d("a", {
            key: 1,
            class: O(y === -1 ? ["pagination-ellipsis"] : ["pagination-link", y === u.value ? "is-current" : ""]),
            "aria-label": y === -1 ? "" : `${c.value} ${y}`,
            onOnclick: (w) => m(y)
          }, N(y === -1 ? "" : y), 43, ol))
        ]))), 256))
      ])) : F("", !0)
    ], 2)), [
      [ne, p.value || b.value]
    ]);
  }
});
function fe(e) {
  return typeof e == "function" ? e() : _(e);
}
function il(e, r = 200) {
  const t = T(!1), a = T(!1), l = S(() => !t.value && !a.value), n = T(!1), s = T(), i = T(), c = S(() => {
    if (e != null) {
      let p = fe(e);
      return p instanceof Promise ? p : new Promise((b) => b(p));
    }
    return null;
  });
  let u;
  return V(
    () => fe(c),
    (p) => {
      if (t.value = !1, a.value = !1, s.value = null, !p) {
        i.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const b = Number(fe(r)) || 0;
      b > 0 ? (n.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        n.value = !0;
      }, b)) : n.value = !0, p.then((g) => {
        p === fe(c) && (i.value = fe(g), a.value = !0);
      }).catch((g) => {
        p === fe(c) && (s.value = g, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: n, error: s, data: i };
}
const he = /* @__PURE__ */ M({
  __name: "Promised",
  props: {
    promise: {},
    pending_delay: { default: 200 }
  },
  setup(e) {
    const r = e, t = Z(C), a = S(() => R("Form.Error", t)), l = Xt(r), n = it(il(l.promise, l.pending_delay));
    return (s, i) => (o(), d(L, null, [
      n.isDelayElapsed && !n.isRejected && !n.isResolved ? P(s.$slots, "pending", {
        key: 0,
        response: n.data
      }, () => [
        B(_(ie), {
          size: _(Q).small
        }, null, 8, ["size"])
      ]) : F("", !0),
      n.isRejected ? P(s.$slots, "rejected", ce(G({ key: 1 }, n.error)), () => [
        B(_(pe), {
          message: `${a}:${n.error.message ?? n.error.toString()}`,
          type: _(le).danger
        }, null, 8, ["message", "type"])
      ]) : F("", !0),
      n.isResolved ? P(s.$slots, "default", {
        key: 2,
        response: n.data
      }) : F("", !0)
    ], 64));
  }
}), ul = ["value", "max"], ie = /* @__PURE__ */ M({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: Q.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const r = e, t = S(() => r.maximum === void 0 ? null : (r.value ?? 0) / r.maximum);
    return (a, l) => (o(), d("progress", {
      class: O(`progress is-${r.size} is-${r.type}`),
      value: r.value,
      max: r.maximum
    }, N(t.value ? `${t.value}%` : null), 11, ul));
  }
}), dl = {
  key: 0,
  class: "navbar-link"
}, cl = {
  key: 0,
  class: "icon-text"
}, pl = { class: "icon" }, hl = { key: 1 }, ml = {
  key: 0,
  class: "icon-text"
}, bl = { class: "icon" }, gl = { key: 1 }, vl = {
  key: 2,
  class: "navbar-dropdown"
}, rt = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = e, a = () => {
      l("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, l = r;
    return (n, s) => {
      const i = ut("navbar-item", !0);
      return o(), E(ue(t.childItems !== void 0 ? "div" : "a"), {
        class: O(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: z(() => [
          t.childItems !== void 0 ? (o(), d("a", dl, [
            t.icon !== void 0 && t.icon !== null ? (o(), d("span", cl, [
              v("span", pl, [
                B(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (o(), d("span", hl, N(t.title), 1))
          ])) : (o(), d(L, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (o(), d("span", ml, [
              v("span", bl, [
                B(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (o(), d("span", gl, N(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (o(), d("div", vl, [
            (o(!0), d(L, null, W(t.childItems, (c) => (o(), E(i, G({ ref_for: !0 }, c, {
              onItemClicked: s[0] || (s[0] = (u) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : F("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), yl = ["aria-label"], fl = { class: "navbar-brand" }, _l = ["aria-expanded"], kl = {
  key: 0,
  class: "navbar-start"
}, Sl = { style: { width: "100px" } }, Dl = {
  key: 1,
  class: "navbar-end"
}, Ml = { style: { width: "100px" } }, $l = /* @__PURE__ */ M({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const r = e, t = T(!1);
    return de(() => {
      if (r.fixed_position)
        switch (r.fixed_position) {
          case Te.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Te.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (o(), d("nav", {
      class: O(["navbar", r.fixed_position, r.color !== void 0 && r.color !== null ? `is-${r.color}` : ""]),
      role: "navigation",
      "aria-label": r.ariaLabel
    }, [
      v("div", fl, [
        P(a.$slots, "brand"),
        v("a", {
          role: "button",
          class: O(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (n) => t.value = !t.value)
        }, l[3] || (l[3] = [
          v("span", { "aria-hidden": "true" }, null, -1),
          v("span", { "aria-hidden": "true" }, null, -1),
          v("span", { "aria-hidden": "true" }, null, -1)
        ]), 10, _l)
      ]),
      v("div", {
        class: O(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        r.start_items !== void 0 ? (o(), d("div", kl, [
          B(he, {
            promise: r.start_items
          }, {
            default: z(({ response: n }) => [
              (o(!0), d(L, null, W(n, (s) => (o(), E(rt, G({ ref_for: !0 }, s, {
                onItemClicked: l[1] || (l[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              v("div", Sl, [
                B(ie, {
                  size: _(Q).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : F("", !0),
        r.end_items !== void 0 ? (o(), d("div", Dl, [
          B(he, {
            promise: r.end_items
          }, {
            default: z(({ response: n }) => [
              (o(!0), d(L, null, W(n, (s) => (o(), E(rt, G({ ref_for: !0 }, s, {
                onItemClicked: l[2] || (l[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              v("div", Ml, [
                B(ie, {
                  size: _(Q).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : F("", !0)
      ], 2)
    ], 10, yl));
  }
}), Al = /* @__PURE__ */ M({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("aside", {
      class: O(["menu", r.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${r.fixedPosition}` : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Fl = { class: "menu-label" }, Jl = /* @__PURE__ */ M({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("p", Fl, [
      K(N(r.message) + " ", 1),
      P(t.$slots, "default")
    ]));
  }
}), wl = ["href"], Ol = {
  key: 0,
  class: "icon-text"
}, Nl = { class: "icon" }, Tl = { key: 1 }, wt = /* @__PURE__ */ M({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const r = e, t = () => {
      r.onClick !== void 0 && r.onClick();
    };
    return (a, l) => (o(), d("li", null, [
      v("a", {
        href: r.href,
        onClick: l[0] || (l[0] = (n) => t()),
        class: O(r.active ? "is-active" : "")
      }, [
        r.icon !== void 0 && r.icon !== null ? (o(), d("span", Ol, [
          v("span", Nl, [
            B(j, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          v("span", null, N(r.title), 1)
        ])) : (o(), d("span", Tl, N(r.title), 1)),
        P(a.$slots, "default")
      ], 10, wl),
      P(a.$slots, "children")
    ]));
  }
}), Pl = { class: "menu-list" }, xl = /* @__PURE__ */ M({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => {
      const l = ut("menu-list", !0);
      return o(), d("ul", Pl, [
        r.items !== null ? (o(), E(he, {
          key: 0,
          promise: r.items
        }, {
          default: z(({ response: n }) => [
            (o(!0), d(L, null, W(n, (s) => (o(), d("li", null, [
              B(wt, G({ ref_for: !0 }, s), null, 16),
              s.childItems !== void 0 ? (o(), E(l, {
                key: 0,
                items: s.childItems
              }, null, 8, ["items"])) : F("", !0)
            ]))), 256))
          ]),
          pending: z(() => [
            v("li", null, [
              B(ie, {
                size: _(Q).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : F("", !0),
        P(t.$slots, "default")
      ]);
    };
  }
}), Bl = /* @__PURE__ */ M({
  __name: "badge",
  props: {
    position: { default: Ke.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("span", {
      class: O(["badge", `is-${r.position}`, r.type === void 0 ? "" : `is-${r.type}`])
    }, [
      K(N(r.text) + " ", 1),
      P(t.$slots, "default")
    ], 2));
  }
}), Ot = /* @__PURE__ */ M({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    has_arrow: { type: Boolean, default: !1 },
    position: { default: xe.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    always_active: { type: Boolean, default: !1 },
    text_align: { default: Ye.left }
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), E(ue(r.is), {
      class: O([
        r.has_arrow ? "has-tooltop-arrow" : "",
        r.position ? `has-tooltip-${r.position}` : "",
        r.multiline ? "has-tooltip-multiline" : "",
        r.type ? `has-tooltip-${r.type}` : "",
        r.text_align ? `has-tooltip-text-${r.text_align}` : "",
        r.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: z(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), El = /* @__PURE__ */ M({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: Q.normal },
    is_delete: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const r = e, t = S(() => {
      let a = ["tag", `is-${r.type}`, `is-${r.size}`];
      return r.light && a.push("is-light"), r.rounded && a.push("is-rounded"), r.is_delete && a.push("is-delete"), a;
    });
    return (a, l) => (o(), d("span", {
      class: O(t.value)
    }, [
      P(a.$slots, "default", {}, () => [
        K(N(r.text), 1)
      ])
    ], 2));
  }
}), Cl = /* @__PURE__ */ M({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("span", {
      class: O(["tags", r.size === null ? "" : "are-" + r.size, r.addons ? "has-addons" : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: Dt,
  Badge: Bl,
  Button: ee,
  ButtonAdd: Fa,
  ButtonCancel: Mt,
  ButtonDelete: Ja,
  ButtonDisable: wa,
  ButtonDownload: Oa,
  ButtonEdit: Na,
  ButtonEnable: Ta,
  ButtonOkay: $t,
  ButtonPrint: Pa,
  ButtonRefresh: At,
  ButtonSave: xa,
  ButtonUpload: Ba,
  ButtonsContainer: Ea,
  CheckMark: Ca,
  DropDown: ja,
  DynamicSlot: Ga,
  Filter: Ft,
  Icon: j,
  Menu: Al,
  MenuEntry: wt,
  MenuLabel: Jl,
  MenuList: xl,
  Message: Qa,
  NavBar: $l,
  Notification: pe,
  PageNotification: al,
  Pagination: Jt,
  Progress: ie,
  Promised: he,
  Tag: El,
  Tags: Cl,
  ToolTip: Ot
}, Symbol.toStringTag, { value: "Module" })), zl = /* @__PURE__ */ M({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: r }) {
    const t = r, a = e, l = T(!1), n = T(!1), s = T(null), i = S(() => (a.disabled ?? !1) || n.value && a.handle_search !== null), c = S(() => {
      let b = [];
      return i || b.push("has-cursor"), l.value ? b.push("is-move") : b.push("is-grab"), b;
    }), u = (b) => i.value ? (b.preventDefault(), !1) : (b.stopPropagation(), b.dataTransfer.setData("value", JSON.stringify(a.copy_data)), l.value = !0, t("started"), !0), p = () => {
      l.value = !1, n.value = !0, t("stopped");
    };
    return de(() => {
      if (a.handle_search) {
        let b = $(s.value).find(a.handle_search);
        b.length > 0 && (n.value = !0, b.on("mousedown", () => n.value = !1), b.on("mouseup", () => n.value = !0));
      }
    }), (b, g) => (o(), E(ue(a.tag), {
      ref_key: "handle",
      ref: s,
      draggable: !0,
      onDragstart: u,
      onDragend: p,
      class: O(c.value)
    }, {
      default: z(() => [
        P(b.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Il = /* @__PURE__ */ M({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = T(!1), n = T(null), s = T(null);
    S(() => t.tag ?? "div");
    const i = (g) => {
      const h = s.value.getBoundingClientRect(), k = {
        x: h.x + h.width / 2,
        y: h.y + h.height / 2
      };
      let m = te.center;
      return g.x < k.x ? g.y < k.y ? m = te.topLeft : m = te.bottomLeft : g.y < k.y ? m = te.topRight : m = te.bottomRight, n.value = m, n.value;
    }, c = (g) => {
      g.preventDefault(), l.value = !0, a("itemEntered", i(g));
    }, u = (g) => {
      l.value = !0, a("itemExited", i(g));
    }, p = (g) => {
      g.preventDefault(), a("itemMoved", i(g));
    }, b = (g) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(g.dataTransfer.getData("value"))))
        return !1;
      g.stopPropagation(), g.preventDefault(), a("itemAdded", JSON.parse(g.dataTransfer.getData("value")), n.value), l.value = !1;
    };
    return (g, h) => (o(), E(ue(t.tag), {
      ref_key: "handle",
      ref: s,
      class: O({ "is-bordered": l.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: b,
      onDragover: p
    }, {
      default: z(() => [
        P(g.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Wl = ["onClick"], Nt = /* @__PURE__ */ M({
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
    const r = e, t = S(() => {
      var n = ["block-list", "has-radius", `is-${r.type ?? "primary"}`];
      return r.compact && n.push("is-small"), r.outlined && n.push("is-outlined"), r.highlighted && n.push("is-highlighted"), n;
    }), a = S(() => r.items ? r.items.map((n, s) => {
      let i = [];
      return n.type && i.push(`is-${n.type}`), n.outlined && i.push("is-outlined"), n.highlighted && i.push("has-icon"), n.icon && i.push("has-icon"), {
        name: n.name ?? `item-${s}`,
        classes: i,
        onClick: n.onClick,
        icon: n.icon
      };
    }) : null), l = (n) => {
      n.onClick && n.onClick();
    };
    return (n, s) => (o(), E(ue(n.numbered == null || n.numbered == null || !n.numbered ? "ul" : "ol"), {
      class: O(t.value)
    }, {
      default: z(() => [
        a.value === null ? P(n.$slots, "default", { key: 0 }) : (o(!0), d(L, { key: 1 }, W(a.value, (i) => (o(), d("li", {
          class: O(i.classes)
        }, [
          i.icon ? (o(), d("span", {
            key: 0,
            class: "icon is-clickable",
            onClick: (c) => l(i)
          }, [
            B(j, {
              icon: i.icon
            }, null, 8, ["icon"])
          ], 8, Wl)) : F("", !0),
          P(n.$slots, i.name)
        ], 2))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rl = ["onDragstart", "onDragover"], Vl = /* @__PURE__ */ M({
  __name: "sortable",
  props: {
    items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: r }) {
    const t = e, a = r, l = T([]), n = T(-1), s = T(-1), i = T(null);
    V(t.items, (g, h) => {
      l.value = [...h];
    }), de(() => {
      t.items !== null && (l.value = [...t.items]);
    });
    const c = (g) => {
      var h = g.target.getBoundingClientRect(), k = {
        x: h.x + h.width / 2,
        y: h.y + h.height / 2
      };
      let m = te.center;
      return g.y < k.y ? m = te.top : m = te.bottom, m;
    }, u = (g, h) => {
      h.stopPropagation(), n.value = g, h.dataTransfer.setData("value", null);
    }, p = (g, h) => {
      n.value && (h.stopPropagation(), g != n.value ? (s.value = g, i.value = c(h)) : (s.value = -1, i.value = null));
    }, b = (g) => {
      if (n.value) {
        g.stopPropagation();
        var h = s.value + (i.value == te.top ? 0 : 1), k = l.value.splice(h, 1)[0];
        h >= n.value && h--, l.value.splice(h, 0, k), s.value = -1, i.value = null, n.value = -1, a("sorted", l.value);
      }
    };
    return (g, h) => (o(), E(Nt, {
      type: g.type,
      compact: g.compact,
      outlined: g.outlined,
      highlighted: g.highlighted,
      onDrop: b
    }, {
      default: z(() => [
        (o(!0), d(L, null, W(l.value, (k, m) => (o(), d(L, null, [
          U(v("li", null, [
            B(pe, { light: !0 }, {
              default: z(() => h[1] || (h[1] = [
                K(" ")
              ])),
              _: 1
            })
          ], 512), [
            [ne, s.value === m && n.value !== m && i.value === _(te).top]
          ]),
          v("li", {
            draggable: "true",
            onDragstart: (f) => u(m, f),
            onDragend: h[0] || (h[0] = (f) => n.value = null),
            onDragover: (f) => p(m, f),
            class: O({ "has-cursor": !0, "is-move": s.value == m, "is-grab": s.value != m })
          }, [
            P(g.$slots, "item", {
              item: k,
              index: m
            })
          ], 42, Rl),
          U(v("li", null, [
            B(pe, { light: !0 }, {
              default: z(() => h[2] || (h[2] = [
                K(" ")
              ])),
              _: 1
            })
          ], 512), [
            [ne, s.value === m && n.value !== m && i.value === _(te).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: zl,
  DropZone: Il,
  Sortable: Vl
}, Symbol.toStringTag, { value: "Module" })), Be = "HiddenFields", Ze = "DisabledFields", jl = (e) => e, se = (e, r) => {
  const t = r("Translate", jl);
  return S(() => e.translate ?? t);
};
function Qe(e, r) {
  const t = r(Be), a = r(Ze), l = S(() => t.value.filter((s) => s.indexOf(`${e}.`) === 0).map((s) => s.split(".")[1])), n = S(() => a.value.filter((s) => s.indexOf(`${e}.`) === 0).map((s) => s.split(".")[1]));
  return { hiddenValues: l, disabledValues: n };
}
async function Xe(e) {
  let r = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? r = t : r = Promise.resolve(t);
  let a = await r, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Gl = { class: "control" }, Hl = { class: "tags has-addons" }, Kl = { class: "tag is-link" }, Yl = ["onClick"], ql = { key: 0 }, Zl = ["placeholder"], Ql = { class: "dropdown-menu" }, Xl = { class: "dropdown-content" }, en = ["onClick"], tn = {
  key: 1,
  class: "dropdown-item"
}, Tt = /* @__PURE__ */ M({
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
  setup(e, { expose: r, emit: t }) {
    const a = t, l = e, n = se(l, C), s = T([]), i = T(null), c = T(null), u = T(null), p = T(null);
    V(i, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (l.values != null && l.values != null) {
            let D = [];
            for (let I = 0; I < l.values.length && ((l.values[I].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || l.values[I].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && D.push(l.values[I]), D.length != 10); I++)
              ;
            c.value = D;
          } else {
            let I = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            I.length > 10 && I.splice(10, I.length - 10), c.value = I;
          }
      } else
        c.value = null, $(p.value).empty();
    });
    const b = () => {
      if (s.value.length == 0)
        return null;
      const w = s.value.slice();
      return l.limit != null && l.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, g = async (w) => {
      if (w == null)
        s.value.length > 0 && s.value.splice(0, s.value.length), i.value = null;
      else {
        const D = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (I) => {
            if (I.id !== void 0 && I.name !== void 0)
              return I;
            {
              let J = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${I.id === void 0 ? "q=" + encodeURIComponent(I) : "id=" + encodeURIComponent(I.id)}`)).json();
              return J.length > 0 ? (l.disabled && (J[0].readonly = !0), J[0]) : null;
            }
          })
        );
        s.value = D.filter((I) => I !== null), a("valueChanged", { name: l.name, value: b() });
      }
    }, h = (w) => {
      w.preventDefault(), i.value = w.clipboardData.getData("text/plain");
    }, k = (w) => {
      switch (w.key) {
        case "Backspace":
          i.value != null && i.value.length > 0 && (i.value = i.value.substring(0, i.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          w.key.length == 1 && (i.value = (i.value == null ? "" : i.value) + w.key);
          break;
      }
    }, m = () => {
      i.value = null;
    }, f = () => {
      p.value.focus();
    }, A = (w) => {
      s.value.push(w), m(), a("valueChanged", { name: l.name, value: b() });
    }, y = (w) => {
      s.value.splice(w, 1), f(), a("valueChanged", { name: l.name, value: b() });
    };
    return r({
      /**
       * Gets the current value 
       */
      getValue: b,
      /**
       * Sets the current value
       * 
       * @param value AutoCompleteItem|AutoCompleteItem[]|string[]|null
       * @returns Promise<void>
       */
      setValue: g
    }), (w, D) => (o(), d("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: f
    }, [
      v("div", {
        class: O(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", l.disabled ? "is-disabled" : ""])
      }, [
        (o(!0), d(L, null, W(s.value, (I, ye) => (o(), d("div", Gl, [
          v("div", Hl, [
            v("a", Kl, N(_(n)(I.name)), 1),
            !I.readonly && !l.disabled ? (o(), d("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (J) => y(ye)
            }, null, 8, Yl)) : F("", !0)
          ])
        ]))), 256)),
        l.disabled ? F("", !0) : (o(), d("div", ql, [
          U(v("span", {
            ref_key: "contentSpan",
            ref: p,
            placeholder: _(n)(l.title ?? ""),
            contenteditable: "",
            class: O(u.value),
            onFocus: D[0] || (D[0] = (I) => {
              u.value = "is-focused";
            }),
            onBlur: D[1] || (D[1] = (I) => {
              u.value = null;
            }),
            onKeydown: k,
            onPaste: h
          }, null, 42, Zl), [
            [ne, s.value.length < l.limit || l.limit == null]
          ])
        ]))
      ], 2),
      l.disabled ? F("", !0) : (o(), d("div", {
        key: 0,
        class: O(["dropdown", { "is-active": c.value != null && i.value != null && i.value != "" }])
      }, [
        v("div", Ql, [
          v("div", Xl, [
            c.value != null && c.value.length > 0 ? (o(!0), d(L, { key: 0 }, W(c.value, (I) => (o(), d("a", {
              class: "dropdown-item",
              onClick: (ye) => A(I)
            }, N(_(n)(I.name)), 9, en))), 256)) : (o(), d("a", tn, "No Results"))
          ])
        ])
      ], 2))
    ], 32));
  }
}), Ie = /* @__PURE__ */ M({
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
  setup(e, { emit: r }) {
    const t = e, a = r, l = se(t, C);
    return (n, s) => (o(), E(ee, {
      class: "button",
      type: t.sstyle,
      icon: t.icon ? t.icon : null,
      title: _(l)(t.label),
      onClick: s[0] || (s[0] = (i) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), an = { class: "checkbox is-block" }, ln = ["value", "disabled"], Pt = /* @__PURE__ */ M({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = Z(C), n = S(() => R("Form.Error", l)), s = t, i = se(a, C), c = T([]), u = T(!1), p = S(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Xe(a.values), f = m.filter((A) => A.selected).map((A) => A.value);
        return c.value === null || c.value.length == 0 ? c.value = f.length > 0 ? [...f] : [] : (f = c.value, m = m.map((A) => ({
          label: A.label,
          value: A.value,
          selected: f.some((y) => y === A.value)
        }))), m;
      }
    });
    V(c, (m) => {
      s("valueChanged", { name: a.name, value: b() });
    });
    const b = () => c.value.length == 0 ? null : c.value, g = (m) => {
      u.value = !0, c.value.splice(0), m !== null && (c.value = [...m]), u.value = !1, s("valueChanged", { name: a.name, value: b() });
    }, { hiddenValues: h, disabledValues: k } = Qe(a.name, C);
    return r({
      /**
       * Gets the current value 
       */
      getValue: b,
      /**
       * Sets the current value
       * 
       * @param value any[]|null
       * @returns void
       */
      setValue: g
    }), (m, f) => (o(), d("div", null, [
      B(he, { promise: p.value }, {
        default: z(({ response: A }) => [
          A !== null ? (o(!0), d(L, { key: 0 }, W(A, (y) => U((o(), d("label", an, [
            U(v("input", {
              type: "checkbox",
              class: "checkbox",
              value: y.value,
              "onUpdate:modelValue": f[0] || (f[0] = (w) => c.value = w),
              disabled: a.disabled || _(k).some((w) => w === y.value.toString())
            }, null, 8, ln), [
              [Ve, c.value]
            ]),
            K(" " + N(_(i)(y.label)), 1)
          ], 512)), [
            [ne, !_(h).some((w) => w === y.value.toString())]
          ])), 256)) : F("", !0)
        ]),
        pending: z(() => [
          B(_(ie))
        ]),
        rejected: z(() => [
          B(_(pe), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), nn = { class: "checkbox" }, rn = ["name", "disabled"], sn = {
  key: 0,
  class: "help is-danger"
}, xt = /* @__PURE__ */ M({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = se(a, C), s = S(() => n.value(a.label)), i = T(!1);
    return V(i, (p) => l("valueChanged", { name: a.name, value: p })), r({
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
    }), (p, b) => (o(), d("label", nn, [
      U(v("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": b[0] || (b[0] = (g) => i.value = g)
      }, null, 8, rn), [
        [Ve, i.value]
      ]),
      K(" " + N(s.value) + " ", 1),
      a.required ? (o(), d("span", sn, "*")) : F("", !0)
    ]));
  }
}), ze = (e, r) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + r), t;
}, Y = (e, r, t) => {
  let a = e;
  for (; a.length < t; )
    a = r + a;
  return a;
}, Ae = (e, r, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${Y(t.getDate().toString(), "0", e.length)}`;
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
      a += `${R("Date.Weekdays." + (e.length > 3 ? n : n.substring(0, 3)), r)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      a += `${Y(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : Y(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${Y((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${Y(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let s = t.getTimezoneOffset() * -1, i = parseInt((s / 60).toFixed(0)), c = s - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${Y(Math.abs(i).toString(), "0", 2) + ":" + Y(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${i < 0 ? "-" : "+"}${Y(Math.abs(i).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${Y(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${Y((t.getMonth() + 1).toString(), "0", e.length)}`;
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
      a += `${R("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), r)}`;
      break;
    case "s":
    case "ss":
      a += `${Y(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var l = t.getFullYear().toString(); l.length > 2; )
        l = l.substring(1);
      a += `${Y(l.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${Y(t.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      a += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return a;
}, _e = (e, r, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let a = "", l = "";
  for (var n = 0; n < t.length; n++)
    switch (t.charAt(n)) {
      case "\\":
        l != "" && (a += Ae(l, r, e), l = ""), a += t.charAt(n + 1), n++;
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
        l != "" && l.charAt(0) != t.charAt(n) ? (a += Ae(l, r, e), l = "") : l += t.charAt(n);
        break;
      default:
        l != "" && (a += Ae(l, r, e), l = ""), a += t.charAt(n);
        break;
    }
  return l != "" && (a += Ae(l, r, e), l = ""), a;
}, on = { class: "control" }, un = ["name", "id", "disabled"], st = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), et = /* @__PURE__ */ M({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null), s = S(() => {
      if (n.value == null || n.value == "")
        return null;
      var u = Number(n.value.substring(3, 5)), p = Number(n.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return V(n, (u) => {
      l("valueChanged", { name: a.name, value: u });
    }), r({
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
        if (u != null && st.test(u)) {
          var p = st.exec(u);
          u = (p[3] == "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)) + ":" + p[2] + ":00";
        }
        n.value = u;
      }
    }), (u, p) => (o(), d("div", on, [
      U(v("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b),
        disabled: a.disabled,
        style: $e(s.value)
      }, null, 12, un), [
        [De, n.value]
      ])
    ]));
  }
}), dn = { class: "control has-icons-left has-icons-right" }, cn = ["name", "id", "placeholder", "disabled"], pn = { class: "modal-content" }, hn = { class: "panel is-primary is-dateselect" }, mn = { class: "panel-heading" }, bn = { class: "columns card-header-title" }, gn = { class: "column" }, vn = { class: "column has-text-centered" }, yn = { class: "column has-text-right" }, fn = { class: "panel-block" }, _n = { class: "table is-striped has-text-centered" }, kn = ["onClick"], Sn = { key: 0 }, Dn = {
  colspan: "100%",
  class: "has-text-centered"
}, Mn = { class: "panel-block" }, Me = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Fe = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Bt = /* @__PURE__ */ M({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = T(null), l = e, n = t, s = T(!1), i = T(null), c = T(null), u = it({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = Z(C), b = we({
      Sun: S(() => R("Date.Weekdays.Sun", p)),
      Mon: S(() => R("Date.Weekdays.Mon", p)),
      Tue: S(() => R("Date.Weekdays.Tue", p)),
      Wed: S(() => R("Date.Weekdays.Wed", p)),
      Thu: S(() => R("Date.Weekdays.Thu", p)),
      Fri: S(() => R("Date.Weekdays.Fri", p)),
      Sat: S(() => R("Date.Weekdays.Sat", p))
    }), g = S(() => i.value !== null && (l.includeTime ? Fe : Me).test(i.value)), h = () => {
      if (i.value == null || i.value == "")
        return null;
      {
        if (!Fe.test(i.value) && l.includeTime)
          return null;
        if (!l.includeTime && !Me.test(i.value))
          return null;
        if (Me.test(i.value) && l.includeTime)
          return null;
        let J = l.includeTime ? Fe.exec(i.value) : Me.exec(i.value);
        return new Date(
          parseInt(J[3]),
          parseInt(J[2]) - 1,
          parseInt(J[1]),
          l.includeTime ? parseInt(J[4]) : 0,
          l.includeTime ? parseInt(J[5]) : 0,
          0,
          0
        );
      }
    };
    V(i, (J) => {
      if (J == null)
        n("valueChanged", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!Me.test(J) && !Fe.test(J)) {
        J = J.replaceAll(/[^0-9]/g, "");
        for (var x = [], H = 0; H < J.length; H += 2)
          H == 4 ? (x.push(J.substring(H, Math.min(J.length - H, 4) + H)), H += 2) : x.push(J.substring(H, Math.min(J.length - H, 2) + H));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), J = x.join(""), !l.includeTime && J.length > 8 && (J = J.substring(0, 8)), J.length >= 2 && (J = J.substring(0, 2) + "-" + (J.length > 2 ? J.substring(2) : "")), J.length >= 5 && (J = J.substring(0, 5) + "-" + (J.length > 5 ? J.substring(5) : "")), J.length >= 9 && l.includeTime && (J = J.substring(0, 9) + " " + (J.length > 9 ? J.substring(9) : "")), J.length >= 11 && (J = J.substring(0, 11) + ":" + (J.length > 11 ? J.substring(11) : "")), i.value = J;
      } else {
        var re = h();
        g && n("valueChanged", { name: l.name, value: re }), u.Month = re.getMonth(), u.Year = re.getFullYear();
      }
    });
    const k = S(() => _e(new Date(u.Year, u.Month, 1), p, "MMMM")), m = S(() => {
      var J = [], x = new Date(u.Year, u.Month, 1);
      x = ze(x, x.getDay() * -1);
      for (var H = h(), re = ze(new Date(u.Year, u.Month, 1), 32).getMonth(); x.getMonth() != re; ) {
        for (var Ee = [], tt = 0; tt < 7; tt++)
          Ee.push({
            Number: x.getDate(),
            Disabled: x.getMonth() != u.Month,
            isToday: _e(x, p, "yyyy-MM-dd") == _e(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: H != null && _e(x, p, "yyyy-MM-dd") == _e(H, p, "yyyy-MM-dd")
          }), x = ze(x, 1);
        J.push(Ee);
      }
      return J;
    });
    r({
      /**
       * Gets the current value 
       */
      getValue: h,
      /**
       * Sets the current value
       * 
       * @param value Date|null
       * @returns void
       */
      setValue: function(J) {
        J == null ? i.value = null : i.value = _e(J, p, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
      }
    });
    const A = (J) => {
      J.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + J.value : i.value = `${Y((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${Y((u.Month + 1).toString(), "0", 2)}-${u.Year} ${J.value}`;
    }, y = (J) => {
      if (!J.Disabled && !J.isSelected)
        if (i.value === null)
          i.value = `${Y(J.Number.toString(), "0", 2)}-${Y((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var x = i.value.split(" ");
          x[0] = `${Y(J.Number.toString(), "0", 2)}-${Y((u.Month + 1).toString(), "0", 2)}-${u.Year}`, i.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      i.value = c.value, s.value = !1;
    }, D = () => {
      l.disabled || (c.value = i.value, s.value = !0);
    }, I = () => {
      l.disabled || (i.value = null);
    }, ye = (J) => {
      u.Month + J == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + J == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += J;
    };
    return (J, x) => (o(), d("div", null, [
      v("div", dn, [
        U(v("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (H) => i.value = H),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, cn), [
          [De, i.value]
        ]),
        v("span", {
          class: "icon is-small is-left is-clickable",
          onClick: D
        }, [
          B(_(j), { icon: "calendar-alt" })
        ]),
        v("span", {
          class: "icon is-small is-right is-clickable",
          onClick: I
        }, [
          B(_(j), { icon: "window-close" })
        ])
      ]),
      v("div", {
        class: O(["modal", { "is-active": s.value }])
      }, [
        x[4] || (x[4] = v("div", { class: "modal-background" }, null, -1)),
        v("div", pn, [
          v("div", hn, [
            v("div", mn, [
              v("div", bn, [
                v("div", gn, [
                  B(_(j), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (H) => ye(-1))
                  })
                ]),
                v("div", vn, N(k.value) + " " + N(u.Year), 1),
                v("div", yn, [
                  B(_(j), {
                    icon: "arrow-circle-right",
                    onClick: x[2] || (x[2] = (H) => ye(1))
                  })
                ])
              ])
            ]),
            v("div", fn, [
              v("table", _n, [
                v("thead", null, [
                  v("tr", null, [
                    v("th", null, N(_(b).Sun), 1),
                    v("th", null, N(_(b).Mon), 1),
                    v("th", null, N(_(b).Tue), 1),
                    v("th", null, N(_(b).Wed), 1),
                    v("th", null, N(_(b).Thu), 1),
                    v("th", null, N(_(b).Fri), 1),
                    v("th", null, N(_(b).Sat), 1)
                  ])
                ]),
                v("tbody", null, [
                  (o(!0), d(L, null, W(m.value, (H) => (o(), d("tr", null, [
                    (o(!0), d(L, null, W(H, (re) => (o(), d("td", {
                      class: O(["is-unselectable", re.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", re.isToday ? "has-background-primary-dark" : "", re.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ee) => y(re)
                    }, N(re.Number), 11, kn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (o(), d("tfoot", Sn, [
                  v("tr", null, [
                    v("td", Dn, [
                      B(et, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValueChanged: A
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : F("", !0)
              ])
            ]),
            v("div", Mn, [
              B(_($t), {
                addonclass: "card-footer-item",
                disabled: !g.value,
                onClick: x[3] || (x[3] = (H) => s.value = !1)
              }, null, 8, ["disabled"]),
              B(_(Mt), {
                addonclass: "card-footer-item",
                onClick: w
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
}), Et = /* @__PURE__ */ M({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: r, emit: t }) {
    let a, l;
    const n = ia(C);
    Pe([`${n}summernote-lite.min.css`]), [a, l] = ea(() => import(`${n}summernote`)), await a, l();
    const s = T(null), i = e, c = t;
    return V(() => i.disabled, (b) => {
      s.value != null && $(s.value).summernote(b ? "disable" : "enable");
    }), r({
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
      setValue: (b) => {
        $(s.value).summernote("code", b);
      }
    }), de(() => {
      $(s.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(b) {
            c("valueChanged", { name: i.name, value: b });
          }
        }
      }), (i.disabled ?? !1) && $(s.value).summernote("disable");
    }), ta(() => {
      $(s.value).summernote("destroy");
    }), (b, g) => (o(), d("div", {
      class: "summernote",
      ref_key: "snote",
      ref: s
    }, null, 512));
  }
}), We = /* @__PURE__ */ M({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const r = e, t = se(r, C);
    return (a, l) => (o(), E(ue(r.subtype), null, {
      default: z(() => [
        K(N(_(t)(r.label)), 1)
      ]),
      _: 1
    }));
  }
}), $n = ["name"], Ct = /* @__PURE__ */ M({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null);
    return V(n, (c) => l("valueChanged", { name: a.name, value: c })), r({
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
    }), (c, u) => U((o(), d("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p)
    }, null, 8, $n)), [
      [De, n.value]
    ]);
  }
}), An = ["name", "disabled", "min", "max", "step"], Lt = /* @__PURE__ */ M({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null), s = () => {
      if (n.value === "")
        return null;
      let c = parseInt(n.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, i = (c) => {
      n.value = c === null ? "" : c.toString();
    };
    return V([n], (c) => l("valueChanged", { name: a.name, value: s() })), r({
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
    }), (c, u) => U((o(), d("input", {
      type: "number",
      class: "input",
      name: c.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p),
      disabled: c.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, An)), [
      [De, n.value]
    ]);
  }
}), Fn = ["id"], Re = /* @__PURE__ */ M({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const r = e, t = se(r, C);
    return (a, l) => (o(), d("p", {
      id: r.name
    }, N(_(t)(r.label)), 9, Fn));
  }
}), Jn = { class: "radio" }, wn = ["name", "value", "disabled"], zt = /* @__PURE__ */ M({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = Z(C), n = S(() => R("Form.Error", l)), s = t, i = se(a, C), c = T(null), u = function() {
      return c.value;
    };
    V(c, (k) => {
      s("valueChanged", { name: a.name, value: u() });
    });
    const p = S(async () => {
      if (a.values == null)
        return [];
      {
        let k = await Xe(a.values);
        return c.value === null && k.some((m) => m.selected) && (c.value = k.find((m) => m.selected).value), k.map((m) => ({
          label: m.label,
          value: m.value,
          selected: c.value === m.value
        }));
      }
    }), b = (k) => {
      c.value = k;
    }, { hiddenValues: g, disabledValues: h } = Qe(a.name, C);
    return r({
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
      setValue: b
    }), (k, m) => (o(), d("div", null, [
      B(he, { promise: p.value }, {
        default: z(({ response: f }) => [
          k.values != null ? (o(!0), d(L, { key: 0 }, W(f, (A) => (o(), d(L, null, [
            U(v("label", Jn, [
              v("input", {
                type: "radio",
                name: a.name,
                value: A.value,
                class: "radio",
                disabled: a.disabled || _(h).some((y) => y === A.value.toString())
              }, null, 8, wn),
              K(" " + N(_(i)(A.label)), 1)
            ], 512), [
              [ne, !_(g).some((y) => y === A.value.toString())]
            ]),
            m[0] || (m[0] = v("br", null, null, -1))
          ], 64))), 256)) : F("", !0)
        ]),
        pending: z(() => [
          B(_(ie))
        ]),
        rejected: z(() => [
          B(_(pe), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), On = { class: "select" }, Nn = ["id", "name", "multiple", "disabled"], Tn = ["value", "selected", "disabled"], Pn = ["label"], xn = ["value", "selected", "disabled"], It = (e, r, t) => {
  let a = {
    label: e === null ? r.label : `${e}->${r.label}`,
    values: []
  }, l = t.length;
  return t.push(a), r.values.forEach((n) => {
    n.values === void 0 ? a.values.push(n) : t = It(a.label, n, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, Wt = /* @__PURE__ */ M({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = Z(C), n = S(() => R("Form.Error", l)), s = t, i = se(a, C), c = T(null), u = T(!1), p = S(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Xe(a.values), f = m.filter((y) => y.selected).map((y) => y.value);
        m.some((y) => y.values !== void 0) && m.filter((y) => y.values !== void 0).forEach((y) => {
          f = f.concat(
            y.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (m = m.map((y) => {
          let w = y;
          return w.values !== void 0 && (w.values = w.values.map((D) => (D.selected = c.value.some((I) => I === D.value), D))), w;
        }), c.value.forEach((y) => {
          m.some((w) => w.value !== void 0 && w.value === y || w.values !== void 0 && w.values.some((D) => D.value === y)) || m.push({
            label: y,
            value: y
          });
        }));
        let A = [];
        return m.forEach((y) => {
          y.values === void 0 ? A.push(y) : A = It(y.label, y, A);
        }), A;
      }
    }), b = () => c.value == null || c.value.length == 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    V(c, () => {
      u.value || s("valueChanged", { name: a.name, value: b() });
    }), V(u, (m) => {
      m || s("valueChanged", { name: a.name, value: b() });
    });
    const g = (m) => {
      u.value = !0, m != null ? a.multiple ? c.value = Array.isArray(m) ? m : [m] : c.value = m : a.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: h, disabledValues: k } = Qe(a.name, C);
    return r({
      /**
       * Gets the current value 
       */
      getValue: b,
      /**
       * Sets the current value
       * 
       * @param value any|any[]|null
       * @returns void
       */
      setValue: g
    }), (m, f) => (o(), d("div", On, [
      p.value != null ? (o(), E(he, {
        key: 0,
        promise: p.value
      }, {
        default: z(({ response: A }) => [
          U(v("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: O([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": f[0] || (f[0] = (y) => c.value = y),
            disabled: a.disabled
          }, [
            A != null ? (o(!0), d(L, { key: 0 }, W(A, (y) => (o(), d(L, null, [
              y.values == null ? U((o(), d("option", {
                key: 0,
                value: y.value,
                selected: y.selected,
                disabled: _(k).some((w) => w === y.value.toString())
              }, N(_(i)(y.label)), 9, Tn)), [
                [ne, !_(h).some((w) => w === y.value.toString())]
              ]) : F("", !0),
              y.values != null ? (o(), d("optgroup", {
                key: 1,
                label: _(i)(y.label)
              }, [
                (o(!0), d(L, null, W(y.values, (w) => U((o(), d("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: _(k).some((D) => D === w.value.toString())
                }, N(_(i)(w.label)), 9, xn)), [
                  [ne, !_(h).some((D) => D === w.value.toString())]
                ])), 256))
              ], 8, Pn)) : F("", !0)
            ], 64))), 256)) : F("", !0)
          ], 10, Nn), [
            [aa, c.value]
          ])
        ]),
        pending: z(() => [
          B(_(ie))
        ]),
        rejected: z(() => [
          B(_(pe), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : F("", !0)
    ]));
  }
}), Bn = { class: "field" }, En = ["id", "name", "disabled"], Cn = ["for"], Ln = {
  key: 0,
  class: "help is-danger"
}, Rt = /* @__PURE__ */ M({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = se(a, C), s = T(!1);
    return V(s, (u) => l("valueChanged", { name: a.name, value: u })), r({
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
    }), (u, p) => (o(), d("div", Bn, [
      U(v("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": p[0] || (p[0] = (b) => s.value = b),
        disabled: a.disabled
      }, null, 8, En), [
        [Ve, s.value]
      ]),
      v("label", { for: u.name }, [
        K(N(_(n)(a.label)) + " ", 1),
        a.required ? (o(), d("span", Ln, "*")) : F("", !0)
      ], 8, Cn)
    ]));
  }
}), zn = ["type", "name", "disabled", "maxlength"], Vt = /* @__PURE__ */ M({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null);
    return V(n, (c) => l("valueChanged", { name: a.name, value: c })), r({
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
    }), (c, u) => U((o(), d("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p)
    }, null, 8, zn)), [
      [la, n.value]
    ]);
  }
}), In = ["name", "rows", "cols", "maxlength", "disabled"], Ut = 9, ke = String.fromCharCode(Ut), Je = `
`, jt = /* @__PURE__ */ M({
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
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null);
    V(n, (u) => {
      l("valueChanged", { name: a.name, value: u });
    });
    const s = () => n.value, i = (u) => {
      n.value = u;
    };
    r({
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
        switch (u.keyCode) {
          case Ut:
            let b = u.target.selectionStart, g = u.target.selectionEnd, h = p.substring(0, b), k = p.length > g ? p.substring(g) : "", m = b == g ? "" : p.substring(b, g);
            if (m.indexOf(`
`) < 0)
              u.shiftKey ? m.startsWith(ke) ? (m = m.substring(1), b--) : h.endsWith(ke) && (h = h.substring(0, h.length - 1), b--) : m = ke + m;
            else {
              let f = !1;
              m.endsWith(Je) && (f = !0, m = m.substring(0, m.length - 1));
              let A = m.split(Je);
              m = "", u.shiftKey && h.endsWith(ke) && (h = h.substring(0, h.length - 1), b--), A.forEach((y, w) => {
                u.shiftKey && y.startsWith(ke) ? y = y.substring(1) : u.shiftKey || (y = ke + y), m += y + (w === A.length - 1 ? "" : Je);
              }), f && (m += Je);
            }
            return p = h + m + k, b += m.length == 1 ? 1 : 0, g = b + (m.length == 1 ? 0 : m.length), i(p), u.target.selectionStart = b, u.target.selectionEnd = g, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, p) => U((o(), d("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b)
    }, null, 40, In)), [
      [De, n.value]
    ]);
  }
}), Gt = /* @__PURE__ */ M({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const r = me(), t = e, a = S(() => {
      let n = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (n = n.concat(t.modifiers.map((s) => `is-${s}`))), n;
    }), l = S(() => t.columns.map((n, s) => {
      let i = ["column"];
      return n.size && i.push(`is-${n.size}`), n.offset && i.push(`is-offset-${n.offset}`), n.border && (n.border.some((c) => c === He.all) ? i.push("is-bordered") : n.border.forEach((c) => i.push(`is-bordered-${c}`))), {
        name: n.name ?? `col-${s}`,
        class: i
      };
    }));
    return (n, s) => (o(), d("div", {
      class: O(a.value)
    }, [
      (o(!0), d(L, null, W(l.value, (i, c) => (o(), d("div", {
        class: O(i.class)
      }, [
        _(r)[i.name] ? P(n.$slots, i.name, { key: 0 }) : F("", !0)
      ], 2))), 256))
    ], 2));
  }
}), Wn = (e) => {
  let r = X.twelve;
  if (e !== void 0)
    switch (e) {
      case 1:
        r = X.one;
        break;
      case 2:
        r = X.two;
        break;
      case 3:
        r = X.three;
        break;
      case 4:
        r = X.four;
        break;
      case 5:
        r = X.five;
        break;
      case 6:
        r = X.six;
        break;
      case 7:
        r = X.seven;
        break;
      case 8:
        r = X.eight;
        break;
      case 9:
        r = X.nine;
        break;
      case 10:
        r = X.ten;
        break;
      case 11:
        r = X.eleven;
        break;
      default:
        r = X.twelve;
        break;
    }
  return r;
}, Ht = /* @__PURE__ */ M({
  __name: "inputs-collection",
  props: {
    fields: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: r, emit: t }) {
    const a = (h) => ({
      size: Wn(h.form_columns),
      class: "field"
    }), l = e, n = t;
    let s = [];
    const i = S(() => {
      let h = [], k = [], m = 0;
      return s = l.fields.map((f, A) => T(null)), l.fields.forEach((f, A) => {
        let y = f.form_columns ?? 12;
        m + y > 12 && (h.push(k), k = [], m = 0), k.push({ ...f, refIndex: A }), m += y, m === 12 && (h.push(k), k = [], m = 0);
      }), k.length > 0 && h.push(k), h;
    }), c = C(Be), u = C(Ze);
    return r({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (h) => {
        s.forEach((k, m) => {
          switch (l.fields[m].type) {
            case "subform":
              k.value.setValue(h);
              break;
            default:
              k.value.setValue !== void 0 && (h === null ? k.value.setValue(null) : Object.keys(h).some((f) => f === k.value.fieldName) ? k.value.setValue(h[k.value.fieldName]) : Object.keys(h).some((f) => f === k.value.altFieldName) && k.value.setValue(h[k.value.altFieldName]));
              break;
          }
        });
      },
      /**
       * Called to get the value of the components in this row.
       * Returns an object where the propertyName are the names of the fields in the subform.
       */
      getValue: () => {
        var h = {};
        return s.forEach((k) => {
          if (k.value.getValue != null)
            switch (k.value.type) {
              case "subform":
                h = $.extend(h, k.value.getValue());
                break;
              default:
                h[k.value.fieldName] = k.value.getValue();
                break;
            }
        }), h;
      },
      /**
       * Called to see if all the copmonents in this row are valid.
       */
      isValid: () => !s.some((h) => !(h.value.isValid === void 0 || h.value.isValid()))
    }), (h, k) => (o(), d("section", null, [
      (o(!0), d(L, null, W(i.value, (m) => (o(), E(Gt, {
        columns: m.map((f) => a(f))
      }, Ue({ _: 2 }, [
        W(m.map((f, A) => ({ input: f, index: A })).filter((f) => !_(c).some((A) => A === f.input.name)), (f) => ({
          name: `col-${f.index}`,
          fn: z(() => [
            B(Yt, {
              ref_for: !0,
              ref: (A) => _(s)[f.input.refIndex].value = A,
              input: f.input,
              onValueChanged: k[0] || (k[0] = (A) => n("valueChanged", A)),
              onButtonClicked: k[1] || (k[1] = (A) => n("buttonClicked", A)),
              disabled: (l.disabled ?? !1) || _(u).some((A) => A === f.input.name)
            }, null, 8, ["input", "disabled"])
          ])
        }))
      ]), 1032, ["columns"]))), 256))
    ]));
  }
}), Rn = { class: "box" }, Kt = /* @__PURE__ */ M({
  __name: "box",
  setup(e) {
    return (r, t) => (o(), d("div", Rn, [
      P(r.$slots, "default")
    ]));
  }
}), Vn = /* @__PURE__ */ M({
  __name: "subform",
  props: {
    fields: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = T(null), s = C(Be), i = S(() => s ? s.some((b) => b === a.name) : !1);
    return r({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (b) => {
        n.value !== null && n.value.setValue(b);
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
    }), (b, g) => U((o(), E(Kt, {
      id: a.name,
      name: a.name
    }, {
      default: z(() => [
        B(Ht, {
          fields: a.fields,
          ref_key: "inputs",
          ref: n,
          disabled: a.disabled,
          onValueChanged: g[0] || (g[0] = (h) => l("valueChanged", h)),
          onButtonClicked: g[1] || (g[1] = (h) => l("buttonClicked", h))
        }, null, 8, ["fields", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "name"])), [
      [ne, i.value]
    ]);
  }
}), Un = ["for"], jn = {
  key: 0,
  class: "help is-danger"
}, Gn = { class: "control" }, Hn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Kn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Yt = /* @__PURE__ */ M({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: r, emit: t }) {
    const a = T(null), l = t, n = e, s = se(n, C), i = we(T(n.input.type)), c = S(() => {
      let D = null;
      switch (n.input.type) {
        case "autocomplete":
          D = Tt;
          break;
        case "button":
          D = Ie;
          break;
        case "checkbox-group":
          D = Pt;
          break;
        case "checkbox":
          D = xt;
          break;
        case "date":
          D = Bt;
          break;
        case "full-editor":
          D = Et;
          break;
        case "header":
          D = We;
          break;
        case "hidden":
          D = Ct;
          break;
        case "number":
          D = Lt;
          break;
        case "paragraph":
          D = Re;
          break;
        case "radio-group":
          D = zt;
          break;
        case "select":
          D = Wt;
          break;
        case "switch":
          D = Rt;
          break;
        case "text":
          D = Vt;
          break;
        case "textarea":
          D = jt;
          break;
        case "time":
          D = et;
          break;
        case "subform":
          D = Vn;
          break;
      }
      return D;
    }), u = function(D) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(D);
    };
    de(() => {
      a.value !== null && n.input.value !== void 0 && n.input.value !== null && u(n.input.value);
    });
    const p = S(() => n.input.disabled ?? n.disabled ?? !1);
    S(() => `is-${n.input.form_columns ?? 12}`);
    const b = S(() => n.input.name), g = S(() => n.input.name), h = S(() => Hn.some((D) => D === n.input.type) && n.input.label !== void 0 && n.input.label !== null), k = S(() => {
      let D = $.extend({}, n.input);
      return delete D.type, h.value && delete D.label, D.className != null && delete D.className, D.form_columns != null && delete D.form_columns, Kn.some((I) => I === n.input.type) && (D.translate = n.translate), D.disabled = n.disabled, D;
    }), m = (D) => {
      if (D.value !== void 0 && D.value !== null && Array.isArray(D.value)) {
        let I = [...D.value];
        D.value = I;
      }
      l("valueChanged", D);
    }, f = (D) => {
      l("buttonClicked", D);
    }, A = () => {
      if (a.value != null && a.value.getValue != null) {
        let D = a.value.getValue();
        return D != null && Array.isArray(D) ? [...D] : D;
      }
      return null;
    };
    return r({
      /**
       * Called to set the value for this given form component
       * 
       * @param value any
       */
      setValue: u,
      /**
       * Property that returns the name of this given component
       */
      fieldName: b,
      /**
       * Property that returns the type of form component this is
       */
      type: i,
      /**
       * Property that returns the alternative field name for this component
       */
      altFieldName: g,
      /**
       * Called to get the value of this component.
       * If this is a basic component, it returns that value.
       * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
       */
      getValue: A,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (n.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (n.input.required ?? !1) {
          let D = A();
          return D != null && (Array.isArray(D) ? D.length > 0 : !0) && D.toString() !== "";
        }
        return !0;
      },
      /**
       * Called to set the values of a subform component, this will throw an error if this component is not a subform.
       * 
       * @param values any|null
       */
      setValues: (D) => {
        if (n.input.type === "subform" && a.value !== null)
          a.value.setValues(D);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (D, I) => n.input.type === "header" ? (o(), E(We, {
      key: 0,
      subtype: n.input.subtype,
      label: n.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["subtype", "label"])) : n.input.type == "paragraph" ? (o(), E(Re, {
      key: 1,
      name: n.input.name,
      label: n.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "label"])) : n.input.type == "button" ? (o(), E(Ie, {
      key: 2,
      name: n.input.name,
      sstyle: n.input.style,
      className: n.input.className,
      icon: n.input.icon,
      label: n.input.label,
      disabled: p.value,
      onButtonClicked: f,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (o(), d(L, { key: 3 }, [
      h.value ? (o(), d("label", {
        key: 0,
        class: "label",
        for: n.input.name
      }, [
        K(N(_(s)(n.input.label)) + " ", 1),
        n.input.required ? (o(), d("span", jn, "*")) : F("", !0)
      ], 8, Un)) : F("", !0),
      v("div", Gn, [
        (o(), E(ue(c.value), G(k.value, {
          onValueChanged: m,
          ref_key: "inp",
          ref: a
        }), null, 16))
      ])
    ], 64));
  }
}), Yn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, qn = /* @__PURE__ */ M({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: r, emit: t }) {
    const a = e, l = t, n = se(a, C);
    Ce("Translate", (f) => n.value(f));
    const s = T(null), i = () => s.value !== null ? s.value.getValue() : null, c = (f) => {
      s.value !== null && s.value.setValue(f);
    }, u = () => s.value !== null ? s.value.isValid() : !1, p = T([]);
    Ce(Be, we(p));
    const b = (f) => {
      Array.isArray(f) ? p.value = [...p.value, ...f] : p.value.push(f);
    }, g = (f) => {
      Array.isArray(f) ? p.value = p.value.filter((A) => f.indexOf(A) >= 0) : p.value = p.value.filter((A) => A !== f);
    }, h = T([]);
    return Ce(Ze, we(h)), r({
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
      hideField: b,
      /**
       * Called to show 1 or more hidden fields in the form
       * 
       * @param name string|string[]
       */
      showField: g,
      /**
       * Called to disable 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      disableField: (f) => {
        Array.isArray(f) ? h.value = [...h.value, ...f] : h.value.push(f);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (f) => {
        Array.isArray(f) ? h.value = h.value.filter((A) => f.indexOf(A) >= 0) : h.value = h.value.filter((A) => A !== f);
      }
    }), (f, A) => (o(), d("form", Yn, [
      B(Ht, {
        fields: a.elements,
        ref_key: "inputs",
        ref: s,
        disabled: a.disabled,
        onValueChanged: A[0] || (A[0] = (y) => l("valueChanged", y)),
        onButtonClicked: A[1] || (A[1] = (y) => l("buttonClicked", y))
      }, null, 8, ["fields", "disabled"])
    ]));
  }
}), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Tt,
  Button: Ie,
  Checkbox: xt,
  CheckboxGroup: Pt,
  ComponentForm: qn,
  DateField: Bt,
  FormComponent: Yt,
  FullEditor: Et,
  Header: We,
  Hidden: Ct,
  NumberField: Lt,
  Paragraph: Re,
  RadioGroup: zt,
  Select: Wt,
  Switch: Rt,
  Text: Vt,
  TextArea: jt,
  Time: et
}, Symbol.toStringTag, { value: "Module" })), Qn = { class: "hero-body" }, Xn = { class: "title" }, er = {
  key: 0,
  class: "subtitle"
}, tr = /* @__PURE__ */ M({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("section", {
      class: O(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + r.type])
    }, [
      v("div", Qn, [
        v("p", Xn, N(r.title), 1),
        r.subtitle ? (o(), d("p", er, N(r.subtitle), 1)) : F("", !0)
      ])
    ], 2));
  }
}), ar = { key: 0 }, lr = ["onClick"], nr = /* @__PURE__ */ M({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Ne.left },
    size: { default: Q.normal },
    seperator: {}
  },
  setup(e) {
    const r = e, t = S(() => {
      let l = ["breadcrumb"];
      return r.alignment && r.alignment !== Ne.left && l.push(`is-${r.alignment}`), r.size && r.size !== Q.normal && l.push(`is-${r.size}`), r.seperator && l.push(`has-${r.seperator}-seperator`), l;
    }), a = (l) => {
      l !== void 0 && l();
    };
    return (l, n) => (o(), d("nav", {
      class: O(t.value),
      "aria-label": "breadcrumbs"
    }, [
      r.breadCrumbs !== null ? (o(), d("ul", ar, [
        (o(!0), d(L, null, W(r.breadCrumbs, (s) => (o(), d("li", {
          class: O({ "is-active": s.active })
        }, [
          v("a", {
            onClick: (i) => a(s.onClick)
          }, [
            s.icon ? (o(), d("span", {
              key: 0,
              class: O(["icon", s.onClick ? "is-clickable" : ""])
            }, [
              B(_(j), {
                icon: s.icon
              }, null, 8, ["icon"])
            ], 2)) : F("", !0),
            K(" " + N(s.title), 1)
          ], 8, lr)
        ], 2))), 256))
      ])) : F("", !0)
    ], 2));
  }
}), rr = {
  key: 0,
  class: "card-icon"
}, sr = { class: "card-icon-wrapper" }, or = {
  key: 1,
  class: "card-header"
}, ir = {
  key: 2,
  class: "card-content"
}, ur = {
  key: 3,
  class: "card-footer"
}, qt = /* @__PURE__ */ M({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const r = me(), t = e, a = {
      addon_class: "card-footer-item"
    }, l = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (n, s) => (o(), d("div", {
      class: O(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon !== null ? (o(), d("div", rr, [
        v("div", sr, [
          B(j, {
            icon: t.icon,
            size: _(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : F("", !0),
      _(r).header ? (o(), d("div", or, [
        P(n.$slots, "header", ce(ve(l)))
      ])) : F("", !0),
      _(r).content ? (o(), d("div", ir, [
        P(n.$slots, "content")
      ])) : F("", !0),
      _(r).footer ? (o(), d("div", ur, [
        P(n.$slots, "footer", ce(ve(a)))
      ])) : F("", !0)
    ], 2));
  }
}), dr = { class: "footer" }, cr = /* @__PURE__ */ M({
  __name: "footer",
  setup(e) {
    return (r, t) => (o(), d("footer", dr, [
      P(r.$slots, "default")
    ]));
  }
}), pr = { class: "level" }, hr = {
  key: 0,
  class: "level-left"
}, mr = { class: "level-item" }, br = {
  key: 1,
  class: "level-right"
}, gr = { class: "level-item" }, vr = { class: "level-item" }, yr = /* @__PURE__ */ M({
  __name: "level",
  props: {
    left_slots: {},
    right_slots: {},
    slots: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("nav", pr, [
      r.left_slots ? (o(), d("div", hr, [
        (o(!0), d(L, null, W(r.left_slots, (l) => (o(), d("div", mr, [
          P(t.$slots, l)
        ]))), 256))
      ])) : F("", !0),
      r.right_slots ? (o(), d("div", br, [
        (o(!0), d(L, null, W(r.right_slots, (l) => (o(), d("div", gr, [
          P(t.$slots, l)
        ]))), 256))
      ])) : F("", !0),
      r.slots ? (o(!0), d(L, { key: 2 }, W(r.slots, (l) => (o(), d("div", vr, [
        P(t.$slots, l)
      ]))), 256)) : F("", !0)
    ]));
  }
}), fr = { class: "media" }, _r = {
  key: 0,
  class: "media-left"
}, kr = { class: "media-content" }, Sr = {
  key: 1,
  class: "media-right"
}, Dr = /* @__PURE__ */ M({
  __name: "media",
  setup(e) {
    const r = me();
    return (t, a) => (o(), d("article", fr, [
      _(r).left_figure ? (o(), d("figure", _r, [
        P(t.$slots, "left_figure")
      ])) : F("", !0),
      v("div", kr, [
        P(t.$slots, "content")
      ]),
      _(r).right_section ? (o(), d("div", Sr, [
        P(t.$slots, "right_section")
      ])) : F("", !0)
    ]));
  }
}), Mr = { class: "modal-content" }, $r = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, Ar = /* @__PURE__ */ M({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  emits: ["close"],
  setup(e, { emit: r }) {
    const t = e;
    return (a, l) => (o(), d("div", {
      class: O({ modal: !0, "is-active": t.display }),
      style: $e(`z-index:${t.z_index}`)
    }, [
      l[0] || (l[0] = v("div", { class: "modal-background" }, null, -1)),
      v("div", Mr, [
        P(a.$slots, "default")
      ]),
      t.has_close ? (o(), d("button", $r)) : F("", !0)
    ], 6));
  }
}), Fr = {
  key: 0,
  class: "card-icon"
}, Jr = { class: "card-icon-wrapper" }, wr = {
  key: 1,
  class: "modal-card-head"
}, Or = {
  key: 2,
  class: "modal-card-body"
}, Nr = {
  key: 3,
  class: "modal-card-foot"
}, Tr = /* @__PURE__ */ M({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    max_width: { type: Boolean },
    max_height: { type: Boolean },
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    icon: { default: null }
  },
  emits: ["close"],
  setup(e, { emit: r }) {
    const t = me(), a = e, l = r, n = {
      addon_class: "card-footer-item"
    }, s = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-footer-item"
    }, i = S(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, u) => (o(), d("div", {
      class: O(["modal", { "is-active": a.show }])
    }, [
      u[1] || (u[1] = v("div", { class: "modal-background" }, null, -1)),
      v("div", {
        class: O(["modal-card", i.value])
      }, [
        a.icon !== null ? (o(), d("div", Fr, [
          v("div", Jr, [
            B(j, {
              icon: a.icon,
              size: _(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : F("", !0),
        _(t).header ? (o(), d("div", wr, [
          P(c.$slots, "header", ce(ve(s))),
          c.has_close ? (o(), d("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (p) => l("close"))
          })) : F("", !0)
        ])) : F("", !0),
        _(t).content ? (o(), d("div", Or, [
          P(c.$slots, "content")
        ])) : F("", !0),
        _(t).footer ? (o(), d("div", Nr, [
          P(c.$slots, "footer", ce(ve(n)))
        ])) : F("", !0)
      ], 2)
    ], 2));
  }
}), Pr = {
  key: 0,
  class: "panel-heading"
}, xr = {
  key: 1,
  class: "panel-tabs"
}, Br = {
  key: 0,
  class: "panel-block"
}, Er = /* @__PURE__ */ M({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    hidden_sections: {}
  },
  setup(e) {
    const r = me(), t = e, a = S(() => t.block_names ?? ["default"]), l = S(() => {
      let n = [];
      return t.type && n.push(`is-${t.type}`), t.full_width && n.push("is-fullwidth"), t.full_height && n.push("is-fullheight"), n;
    });
    return (n, s) => (o(), d("div", {
      class: O(["panel", l.value])
    }, [
      _(r).header ? U((o(), d("div", Pr, [
        P(n.$slots, "header")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("header")]
      ]) : F("", !0),
      _(r).tabs ? U((o(), d("div", xr, [
        P(n.$slots, "tabs")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : F("", !0),
      (o(!0), d(L, null, W(a.value, (i) => (o(), d(L, null, [
        _(r)[i] ? U((o(), d("div", Br, [
          P(n.$slots, i)
        ], 512)), [
          [ne, !(t.hidden_sections ?? []).includes(i)]
        ]) : F("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Cr = /* @__PURE__ */ M({
  __name: "section",
  props: {
    size: {}
  },
  setup(e) {
    const r = e;
    return (t, a) => (o(), d("section", {
      class: O(["section", r.size ? `is-${r.size}` : ""])
    }, null, 2));
  }
}), Lr = { key: 0 }, zr = { key: 1 }, Ir = { key: 2 }, Zt = /* @__PURE__ */ M({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const r = me(), t = e, a = S(() => {
      let n = [];
      return t.scrollable && n.push("table-container"), t.fixed_header && t.scrollable && n.push("is-fixed"), n;
    }), l = S(() => {
      let n = ["table", "is-striped", "is-hoverable"];
      return t.fixed_header && !t.scrollable && n.push("is-fixed"), t.full_width && n.push("is-fullwidth"), t.narrow && n.push("is-narrow"), n;
    });
    return (n, s) => (o(), d("div", {
      class: O(a.value)
    }, [
      v("table", {
        class: O(l.value)
      }, [
        _(r).thead ? (o(), d("thead", Lr, [
          P(n.$slots, "thead")
        ])) : F("", !0),
        _(r).tbody ? (o(), d("tbody", zr, [
          P(n.$slots, "tbody")
        ])) : F("", !0),
        _(r).tfoot ? (o(), d("tfoot", Ir, [
          P(n.$slots, "tfoot")
        ])) : F("", !0)
      ], 2)
    ], 2));
  }
}), Wr = ["href", "onClick"], Rr = {
  key: 0,
  class: "icon is-small"
}, Vr = { style: { width: "100px" } }, Ur = /* @__PURE__ */ M({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: {},
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const r = e, t = S(() => {
      let l = ["tabs"];
      return r.alignment ? l.push(`is-${r.alignment}`) : l.push("is-left"), r.type && l.push(`is-${r.type}`), r.full_width && l.push("is-fullwidth"), l;
    }), a = (l, n) => {
      (n.href === null || n.href === void 0) && n.onClick !== void 0 && (l.preventDefault(), n.onClick());
    };
    return (l, n) => (o(), d("div", {
      class: O(t.value)
    }, [
      v("ul", null, [
        B(_(he), {
          promise: r.tabs
        }, {
          default: z(({ response: s }) => [
            (o(!0), d(L, null, W(s, (i) => (o(), d("li", {
              class: O({ "is-active": i.active })
            }, [
              v("a", {
                href: i.href,
                onClick: (c) => a(c, i)
              }, [
                i.icon ? (o(), d("span", Rr, [
                  B(_(j), {
                    icon: i.icon
                  }, null, 8, ["icon"])
                ])) : F("", !0),
                v("span", null, N(i.title), 1)
              ], 8, Wr)
            ], 2))), 256))
          ]),
          pending: z(() => [
            v("li", Vr, [
              B(_(ie), {
                size: _(Q).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), jr = { class: "slideout-content" }, Gr = {
  key: 1,
  class: "slideout-head"
}, Hr = { class: "slideout-body" }, Kr = {
  key: 2,
  class: "slideout-foot"
}, Yr = /* @__PURE__ */ M({
  __name: "slideout",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    full_width: { type: Boolean },
    type: {},
    not_animated: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: r }) {
    const t = me(), a = {
      addon_class: ""
    }, l = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, n = e, s = r, i = S(() => {
      let c = ["slideout"];
      return n.show && c.push("is-active"), n.type !== void 0 && n.type !== null && c.push(`is-${n.type}`), n.full_width && c.push("is-fullwidth"), n.not_animated && c.push("no-animation"), c;
    });
    return (c, u) => (o(), d("div", {
      class: O(i.value)
    }, [
      v("div", {
        class: "slideout-background",
        onClick: u[0] || (u[0] = (p) => s("close"))
      }),
      v("div", jr, [
        c.has_close ? (o(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: u[1] || (u[1] = (p) => s("close"))
        })) : F("", !0),
        _(t).header ? (o(), d("div", Gr, [
          P(c.$slots, "header", ce(ve(l)))
        ])) : F("", !0),
        v("div", Hr, [
          _(t).content ? P(c.$slots, "content", { key: 0 }) : F("", !0),
          P(c.$slots, "default")
        ]),
        _(t).footer ? (o(), d("div", Kr, [
          P(c.$slots, "footer", ce(ve(a)))
        ])) : F("", !0)
      ])
    ], 2));
  }
}), qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: tr,
  Box: Kt,
  Breadcrumbs: nr,
  Card: qt,
  ColumnContainer: Gt,
  Footer: cr,
  Level: yr,
  List: Nt,
  Media: Dr,
  Modal: Ar,
  ModalCard: Tr,
  Panel: Er,
  Section: Cr,
  Slideout: Yr,
  Table: Zt,
  Tabs: Ur
}, Symbol.toStringTag, { value: "Module" })), ot = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Pe(`${ot.substring(0, ot.lastIndexOf("/"))}/vibrantvue.css`);
const Zr = Object.values(qe).filter((e, r, t) => t.indexOf(e) === r), Qr = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Zr,
  setSkin: Qr
}, Symbol.toStringTag, { value: "Module" })), es = /* @__PURE__ */ M({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    show_refresh: { type: Boolean },
    width: {},
    height: {},
    legend_position: { default: Ge.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: r }) {
    const t = `${ca(C)}chart.umd.min.js`, a = T(null), l = e, n = r;
    let s = null;
    const i = () => {
      s != null && s.update();
    }, c = S(() => {
      var u = "";
      return l.width && (u = `width:${l.width}px;`), l.height && (u += `height:${l.height}px;`), u;
    });
    return V(() => l.type, (u) => {
      s != null && (s.type = u ?? "line");
    }), V(
      () => l.labels,
      (u) => {
        s != null && (s.data.labels = u, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), V(
      () => l.datasets,
      (u) => {
        s != null && (s.data.datasets = u, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), de(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legend_position}`,
            labels: {
              filter: (b, g) => b.text != null
            },
            onClick: function(b, g) {
              n("legendItemClick", s, g);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: p } = await je(t, ["Chart"]);
      s = new p(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), s.update();
    }), (u, p) => (o(), E(qt, null, Ue({
      content: z(() => [
        v("canvas", {
          ref_key: "canvas",
          ref: a,
          style: $e(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: z((b) => [
          v("h3", {
            class: O(b.header_class)
          }, N(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.show_refresh != null && l.show_refresh != null && l.show_refresh ? {
        name: "footer",
        fn: z((b) => [
          B(At, {
            class: O(b.addon_class),
            onClick: i
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), ts = /* @__PURE__ */ M({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: r, emit: t }) {
    const a = `${pa(C)}src-noconflict/ace.js`, l = e, n = t, s = T(null), i = T(null), c = function() {
      return i.value.getValue() == "" ? null : i.value.getValue();
    }, u = function(b) {
      i.value.setValue(b ?? "");
    };
    V(() => l.readonly, (b) => {
      i.value.setReadOnly(b == null || b == null ? !1 : b);
    }), V(() => l.value, (b) => {
      u(b);
    }), V(() => l.language, (b) => {
      i.value.getSession().setMode(b);
    });
    const p = S(() => {
      let b = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let g = 0; g < l.autocompletes.length; g++)
          l.autocompletes[g].method.indexOf(".") >= 0 ? b = Math.min(b, l.autocompletes[g].method.indexOf(".")) : b = Math.min(b, l.autocompletes[g].method.length);
        if (b > 3 && l.autocompletes.length > 0) {
          let g = !0, h = l.autocompletes[0].method.substring(0, 3);
          for (let k = 0; k < l.autocompletes.length; k++)
            if (l.autocompletes[k].method.substring(0, 3) != h) {
              g = !1;
              break;
            }
          g && (b = 3);
        }
      }
      return b;
    });
    return r({
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
    }), de(async () => {
      const { ace: b } = await je(a, ["ace"]);
      i.value = na(b.edit(s.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), i.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && i.value.setValue(l.value), i.value.on("change", () => n("valueChanged", c())), l.autocompletes !== null && l.autocompletes !== void 0 && (i.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), i.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(g, h, k, m, f) {
          var A = [];
          if (m = m.toUpperCase(), m.length >= p && (A = l.autocompletes.filter((y) => y.method.toUpperCase().startsWith(m) && y.method.length > m.legend).map((y) => ({
            caption: y.method + (y.description === null || y.description === void 0 ? "" : "->" + y.description),
            value: y.method,
            meta: "autos"
          }))), A.length === 0) {
            f(null, []);
            return;
          }
          f(null, A.map(function(y) {
            return y;
          }));
        }
      }]);
    }), (b, g) => (o(), d("div", {
      class: "editor",
      ref_key: "container",
      ref: s
    }, null, 512));
  }
}), as = { key: 0 }, ls = { colspan: "100%" }, ns = ["colspan", "rowspan"], rs = ["onClick"], ss = { class: "icon" }, os = { key: 0 }, is = { colspan: "100%" }, us = ["colspan", "rowspan", "onClick"], ds = { key: 1 }, cs = { colspan: "100%" }, ps = /* @__PURE__ */ M({
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
    size: { default: Q.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean }
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: r }) {
    const t = me(), a = e, l = r, n = {
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
    }, i = S(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && ae(a.total_pages) > 1)), c = S(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((g) => g.map((h) => a.columns.filter((k) => k.some((m) => m.id === h))[0].find((k) => k.id === h)))), u = (g) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === g ? l("sort", {
        column: g,
        ascending: !a.current_sort.ascending
      }) : l("sort", {
        column: g,
        ascending: !0
      });
    }, p = (g, h) => {
      if (a.getRowColor) {
        let k = a.getRowColor(g, h);
        if (k)
          return `is-${k}`;
      }
      return null;
    }, b = (g, h, k, m) => {
      let f = "";
      if ((h.cellClass || h.getCellColor) && (h.cellClass && (f += `${h.cellClass}`), h.getCellColor)) {
        let A = h.getCellColor(g, k, m);
        A && (f += ` is-${A}`);
      }
      return f === "" ? null : f;
    };
    return (g, h) => (o(), E(Zt, ce(ve(n)), Ue({
      thead: z(() => [
        a.has_filter ?? !1 ? (o(), d("tr", as, [
          v("th", ls, [
            B(Ft, {
              onFilter: h[0] || (h[0] = (k) => l("filter", k))
            })
          ])
        ])) : F("", !0),
        (o(!0), d(L, null, W(a.columns, (k) => (o(), d("tr", null, [
          (o(!0), d(L, null, W(k, (m) => (o(), d("th", {
            colspan: m.headerColspan,
            rowspan: m.headerRowspan,
            class: O(m.headerClass)
          }, [
            P(g.$slots, `head-${m.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (m.canSort ?? !1) && m.id === a.current_sort.column ? (o(), d("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (f) => u(m.id)
              }, [
                v("span", ss, [
                  B(j, { icon: "arrow-down" })
                ]),
                v("span", null, N(m.title), 1)
              ], 8, rs)) : (o(), d(L, { key: 1 }, [
                K(N(m.title), 1)
              ], 64))
            ])
          ], 10, ns))), 256))
        ]))), 256))
      ]),
      tbody: z(() => [
        a.data === null || a.data.length === 0 ? (o(), d("tr", os, [
          v("td", is, [
            a.data === null ? (o(), E(ie, { key: 0 })) : (o(), E(pe, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (o(!0), d(L, { key: 1 }, W(a.data, (k, m) => (o(), d(L, null, [
          (o(!0), d(L, null, W(c.value.filter((f) => f.some((A) => !(A.headerOnly ?? !1))), (f, A) => (o(), d("tr", {
            key: `row-${m}-${A}`,
            class: O(p(m, k))
          }, [
            (o(!0), d(L, null, W(f.filter((y) => !(y.headerOnly ?? !1)), (y) => (o(), d("td", {
              key: `data-${m}-${A}`,
              colspan: y.dataColspan,
              rowspan: y.dataRowspan,
              class: O(b(m, y, k, y.propertyName ? k[y.propertyName] : void 0)),
              onClick: (w) => l("cellClicked", { rowIndex: m, data: y.propertyName ? k[y.propertyName] : null, row: k })
            }, [
              P(g.$slots, `body-${y.id}`, G({ ref_for: !0 }, { rowIndex: m, data: y.propertyName ? k[y.propertyName] : null, row: k }), () => [
                K(N(y.propertyName ? k[y.propertyName] : null), 1)
              ])
            ], 10, us))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      i.value || _(t).tfoot_head || _(t).tfoot_bottom ? {
        name: "tfoot",
        fn: z(() => [
          _(t).tfoot_head ? P(g.$slots, "tfoot_head", { key: 0 }) : F("", !0),
          i.value ? (o(), d("tr", ds, [
            v("td", cs, [
              B(Jt, G(s, {
                onMoveForward: h[1] || (h[1] = (k) => l("moveForward")),
                onMoveBack: h[2] || (h[2] = (k) => l("moveBack")),
                onGoToPage: h[3] || (h[3] = (k) => l("goToPage", k))
              }), null, 16)
            ])
          ])) : F("", !0),
          _(t).tfoot_bottom ? P(g.$slots, "tfoot_bottom", { key: 2 }) : F("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), hs = { class: "progress-group" }, ms = /* @__PURE__ */ M({
  __name: "progress-group",
  props: {
    size: {},
    values: {},
    max: {}
  },
  setup(e) {
    const r = e, t = S(() => {
      let n = 0;
      for (let s = 0; s < r.values.length; s++)
        n += r.values[s].value;
      return n;
    }), a = S(() => r.values.map((n) => ({
      size: r.size ?? Q.normal,
      type: n.type,
      percentage: n.value / (r.max ?? t.value) * 100,
      caption: n.caption ?? `${n.value}`,
      onClick: n.onClick
    }))), l = S(() => r.max !== void 0 ? {
      size: r.size ?? Q.normal,
      type: null,
      percentage: (r.max - t.value) / r.max * 100,
      caption: null
    } : null);
    return (n, s) => (o(), d("div", hs, [
      (o(!0), d(L, null, W(a.value, (i, c) => (o(), E(_(Ot), {
        is: "progress",
        class: O(`progress is-${i.size} is-${i.type} ${i.onClick !== void 0 ? "is-clickable" : ""}`),
        key: c,
        text: i.caption ?? "",
        position: _(xe).top,
        style: $e({ width: `${i.percentage}%` }),
        value: "100",
        maximum: "100",
        onClick: () => {
          i.onClick !== void 0 && i.onClick();
        }
      }, {
        default: z(() => [
          K(N(`${i.percentage}%`), 1)
        ]),
        _: 2
      }, 1032, ["class", "text", "position", "style", "onClick"]))), 128)),
      l.value != null ? (o(), d("progress", {
        key: 0,
        class: O(`progress is-${l.value.size} is-${l.value.type}`),
        style: $e({ width: `${l.value.percentage}%` }),
        value: "100",
        maximum: "100"
      }, N(`${l.value.percentage}%`) + "> ", 7)) : F("", !0)
    ]));
  }
}), bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: es,
  CodeWriter: ts,
  Grid: ps,
  ProgressGroup: ms
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: ys,
  Button: fs,
  ButtonsContainer: _s,
  ButtonAdd: ks,
  ButtonCancel: Ss,
  ButtonDelete: Ds,
  ButtonDisable: Ms,
  ButtonDownload: $s,
  ButtonEdit: As,
  ButtonEnable: Fs,
  ButtonOkay: Js,
  ButtonPrint: ws,
  ButtonRefresh: Os,
  ButtonSave: Ns,
  ButtonUpload: Ts,
  CheckMark: Ps,
  DropDown: xs,
  DynamicSlot: Bs,
  Filter: Es,
  Icon: Cs,
  Message: Ls,
  Notification: zs,
  PageNotification: Is,
  Pagination: Ws,
  Promised: Rs,
  Progress: Vs,
  NavBar: Us,
  Menu: js,
  MenuLabel: Gs,
  MenuList: Hs,
  MenuEntry: Ks,
  ToolTip: Ys,
  Badge: qs,
  Tag: Zs,
  Tags: Qs
} = Ll, { DraggableItem: Xs, DropZone: eo, Sortable: to } = Ul, {
  AutoComplete: ao,
  CheckboxGroup: lo,
  Checkbox: no,
  DateField: ro,
  ComponentForm: so,
  FullEditor: oo,
  Header: io,
  Hidden: uo,
  NumberField: co,
  Paragraph: po,
  RadioGroup: ho,
  Select: mo,
  Switch: bo,
  Text: go,
  TextArea: vo,
  Time: yo,
  FormComponent: fo
} = Zn, {
  Banner: _o,
  Box: ko,
  Breadcrumbs: So,
  Card: Do,
  ColumnContainer: Mo,
  Footer: $o,
  Level: Ao,
  List: Fo,
  Media: Jo,
  Modal: wo,
  ModalCard: Oo,
  Panel: No,
  Section: To,
  Table: Po,
  Tabs: xo,
  Slideout: Bo
} = qr, { AVAIABLE_SKINS: Eo, setSkin: Co } = Xr, {
  ColorTypes: Lo,
  NoticeTypes: zo,
  Sizes: Io,
  AnimationSpeeds: Wo,
  AnimationTypes: Ro,
  IconSizes: Vo,
  ChartLegendPositions: Uo,
  ChartTypes: jo,
  DropZoneQuadrants: Go,
  BreadCrumbAlignments: Ho,
  BreadCrumbSeperators: Ko,
  ColumnContainerModifiers: Yo,
  ColumnSizes: qo,
  ColumnOffsetSizes: Zo,
  BorderTypes: Qo,
  TabAlignments: Xo,
  TabStyles: ei,
  TileSizes: ti,
  TileTypes: ai,
  FixedNavBarPositions: li,
  FixedMenuPositions: ni,
  BadgePositions: ri,
  ToolTipPositions: si,
  ToolTipTextAlignments: oi,
  ButtonAlignments: ii,
  SectionSizes: ui
} = sa, { loadNonEs6Module: di } = ra, { Chart: ci, CodeWriter: pi, Grid: hi, ProgressGroup: mi } = bs;
export {
  Eo as AVAIABLE_SKINS,
  ys as Animation,
  Wo as AnimationSpeeds,
  Ro as AnimationTypes,
  ao as AutoComplete,
  qs as Badge,
  ri as BadgePositions,
  _o as Banner,
  Qo as BorderTypes,
  ko as Box,
  Ho as BreadCrumbAlignments,
  Ko as BreadCrumbSeperators,
  So as Breadcrumbs,
  fs as Button,
  ks as ButtonAdd,
  ii as ButtonAlignments,
  Ss as ButtonCancel,
  Ds as ButtonDelete,
  Ms as ButtonDisable,
  $s as ButtonDownload,
  As as ButtonEdit,
  Fs as ButtonEnable,
  Js as ButtonOkay,
  ws as ButtonPrint,
  Os as ButtonRefresh,
  Ns as ButtonSave,
  Ts as ButtonUpload,
  _s as ButtonsContainer,
  Do as Card,
  ci as Chart,
  Uo as ChartLegendPositions,
  jo as ChartTypes,
  Ps as CheckMark,
  no as Checkbox,
  lo as CheckboxGroup,
  pi as CodeWriter,
  Lo as ColorTypes,
  Mo as ColumnContainer,
  Yo as ColumnContainerModifiers,
  Zo as ColumnOffsetSizes,
  qo as ColumnSizes,
  so as ComponentForm,
  ro as DateField,
  Xs as DraggableItem,
  xs as DropDown,
  eo as DropZone,
  Go as DropZoneQuadrants,
  Bs as DynamicSlot,
  Es as Filter,
  ni as FixedMenuPositions,
  li as FixedNavBarPositions,
  $o as Footer,
  fo as FormComponent,
  oo as FullEditor,
  hi as Grid,
  io as Header,
  uo as Hidden,
  Cs as Icon,
  Vo as IconSizes,
  Ao as Level,
  Fo as List,
  Jo as Media,
  js as Menu,
  Ks as MenuEntry,
  Gs as MenuLabel,
  Hs as MenuList,
  Ls as Message,
  wo as Modal,
  Oo as ModalCard,
  Us as NavBar,
  zo as NoticeTypes,
  zs as Notification,
  co as NumberField,
  Is as PageNotification,
  Ws as Pagination,
  No as Panel,
  po as Paragraph,
  Vs as Progress,
  mi as ProgressGroup,
  Rs as Promised,
  ho as RadioGroup,
  To as Section,
  ui as SectionSizes,
  mo as Select,
  Io as Sizes,
  Bo as Slideout,
  to as Sortable,
  bo as Switch,
  Xo as TabAlignments,
  ei as TabStyles,
  Po as Table,
  xo as Tabs,
  Zs as Tag,
  Qs as Tags,
  go as Text,
  vo as TextArea,
  ti as TileSizes,
  ai as TileTypes,
  yo as Time,
  Ys as ToolTip,
  si as ToolTipPositions,
  oi as ToolTipTextAlignments,
  di as loadNonEs6Module,
  Co as setSkin
};
//# sourceMappingURL=vibrantvue.esm.js.map
