import { computed as _, defineComponent as M, openBlock as o, createBlock as C, Transition as qt, withCtx as z, renderSlot as N, createElementBlock as u, normalizeClass as w, inject as L, ref as x, watch as R, createVNode as B, createCommentVNode as A, toDisplayString as T, mergeProps as G, toValue as ae, createElementVNode as g, unref as y, Fragment as P, renderList as W, resolveDynamicComponent as ce, createTextVNode as K, onMounted as de, withDirectives as j, vModelText as Se, vShow as ne, normalizeProps as pe, resolveComponent as it, useSlots as oe, vModelCheckbox as Re, normalizeStyle as Me, reactive as Zt, readonly as Je, withAsyncContext as Qt, onUnmounted as Xt, vModelSelect as ea, vModelDynamic as ta, createSlots as Ue, provide as Ce, guardReactiveProps as ge, markRaw as aa } from "vue";
import "jquery";
const Pe = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let i = document.createElement("link"), c = new Promise((d) => {
        i.onload = function() {
          d(l);
        };
      });
      t[s] = c, a.appendChild(i), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("server_path", l), i.setAttribute("href", l);
    } else
      t[s] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    n(l);
  });
}), be = [], je = (e, n) => new Promise((t) => {
  let a = be.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && n !== void 0 || a.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = be.find((r) => r.path === e);
        s == null ? (clearTimeout(l), t(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), t(s.result));
      }, 500);
    } else
      t(a.result);
  else {
    be.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let r = be.findIndex((i) => i.path === e);
      if (n === void 0)
        be[r].result = void 0;
      else {
        let i = {};
        n.forEach((c) => {
          i[c] = window[c];
        }), be[r].result = i;
      }
      t(be[r].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), ut = () => {
  var t;
  let e, n = "";
  return typeof self.crypto < "u" && (e = self.crypto, n = (t = e.randomUUID) == null ? void 0 : t.call(e)), n || "";
}, la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Pe,
  generateUUID: ut,
  loadNonEs6Module: je
}, Symbol.toStringTag, { value: "Module" }));
var Q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(Q || {}), le = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(le || {}), Y = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(Y || {}), ve = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ve || {}), we = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(we || {}), dt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(dt || {}), Ge = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ge || {}), re = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(re || {}), te = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(te || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), ct = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = "centered", e.borderleft = "borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(pt || {}), ee = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ee || {}), ht = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(ht || {}), He = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(He || {}), mt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(mt || {}), bt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(gt || {}), Ne = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Ne || {}), yt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(yt || {}), Ke = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ke || {}), xe = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(xe || {}), Ye = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Ye || {}), ft = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ft || {}), qe = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(qe || {}), _t = /* @__PURE__ */ ((e) => (e.medium = "medium", e.large = "large", e))(_t || {}), Te = /* @__PURE__ */ ((e) => (e.default = "default", e.verticalRight = "is-vertical-right", e.verticalLeft = "is-vertical-left", e))(Te || {});
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ve,
  AnimationTypes: we,
  BadgePositions: Ke,
  BorderTypes: He,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: ct,
  ButtonAlignments: ft,
  ChartLegendPositions: Ge,
  ChartTypes: dt,
  ColorTypes: Q,
  ColumnContainerModifiers: pt,
  ColumnOffsetSizes: ht,
  ColumnSizes: ee,
  DropZoneQuadrants: te,
  FixedMenuPositions: yt,
  FixedNavBarPositions: Ne,
  IconSizes: re,
  NoticeTypes: le,
  SectionSizes: _t,
  Sizes: Y,
  SkinTypes: qe,
  StepWizardOrientations: Te,
  TabAlignments: mt,
  TabStyles: bt,
  TileSizes: vt,
  TileTypes: gt,
  ToolTipPositions: xe,
  ToolTipTextAlignments: Ye
}, Symbol.toStringTag, { value: "Module" })), q = (e) => {
  const n = e("Language", "en");
  return _(() => n);
}, sa = (e) => {
  const n = e("IconSet", "solid");
  return _(() => n);
}, ra = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), oa = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), ia = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ua = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), da = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), kt = /* @__PURE__ */ M({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ve.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = ia(L);
    Pe(`${n}animate.min.css`);
    const t = e, a = (m) => {
      switch (m) {
        case ve.slower:
          return 3e3;
        case ve.fast:
          return 800;
        case ve.faster:
          return 500;
        default:
          return 2e3;
      }
    }, l = (m) => m === void 0 ? "" : `animate__${m}`, s = (m) => m === void 0 ? "animate__slow" : `animate__${m}`, r = _(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = _(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), c = _(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), d = _(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed)
    ].join(" "));
    return (m, h) => t.repeating ? (o(), u("div", {
      key: 1,
      class: w(d.value)
    }, [
      N(m.$slots, "default")
    ], 2)) : (o(), C(qt, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": c.value,
      duration: r.value
    }, {
      default: z(() => [
        N(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ca = "brands.min.css", pa = "all.min.css", at = "icon_styles", ha = /\.fa-([^: ]+):before/g, ma = /url\(([^)]+)\)/g, ke = x([]), Le = x(!1), lt = async (e, n) => {
  if (!Le.value) {
    Le.value = !0;
    let t;
    ke.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", at), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(at), ke.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ca}`),
      fetch(`${e}${pa}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(ha)].forEach((s) => {
      ke.value.push(s[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(ma)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), t.innerText = l, ke.value.splice(0, 1), Le.value = !1;
  }
}, U = /* @__PURE__ */ M({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = oa(L), t = sa(L);
    ke.value.length === 0 ? lt(n, t.value) : R(t, () => lt(n, t.value));
    const a = e, l = _(() => {
      let s = [];
      return a.icon !== void 0 && a.icon !== null && (ke.value.indexOf(a.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${t.value}`)), s.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== re.normal && s.push(`fa-${a.size}`), s;
    });
    return (s, r) => (o(), u("i", {
      class: w(l.value)
    }, null, 2));
  }
}), ba = ["disabled"], va = {
  key: 0,
  class: "icon is-small"
}, ga = { key: 1 }, X = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = _(() => {
      let s = ["button", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && s.push("disabled"), t.is_rounded && s.push("is-rounded"), t.hide_mobile && s.push("is-hidden-mobile"), t.hide_tablet && s.push("is-hidden-tablet-only"), t.hide_desktop && s.push("is-hidden-desktop is-hidden-widescreen"), s;
    });
    return (s, r) => (o(), u("button", {
      class: w(l.value),
      disabled: t.disabled,
      onClick: r[0] || (r[0] = (i) => a("click"))
    }, [
      t.icon != null ? (o(), u("span", va, [
        B(U, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      t.title != null ? (o(), u("span", ga, T(t.title), 1)) : A("", !0)
    ], 10, ba));
  }
}), ya = '{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Refresh":"Refresh","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسناً","Print":"الطباعة","Refresh":"التجديد","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Qeydiyyat","Edit":"Tarix","Enable":"Qeydiyyat","Okay":" Okay","Print":"Çap","Refresh":"Axtarış","Save":"Yadda","Submit":"Qeydiyyat","Upload":"Tarix"},"bg":{"Add":"Добавяне","Cancel":"Отмяна","Delete":"Изтриване","Disable":"Изключване","Download":"Изтегляне","Edit":"Редактиране","Enable":"Включване","Okay":"Добре","Print":"Печат","Refresh":"Обновяване","Save":"Запис","Submit":"Подаване","Upload":"Качване"},"bn":{"Add":"যোগ","Cancel":"বাতিল","Delete":"মুছে","Disable":"নিষ্ক্রিয়","Download":"ডাউনলোড","Edit":"সম্পাদনা","Enable":"সক্রিয়","Okay":"ঠিক","Print":"প্রিন্ট","Refresh":"নতুন","Save":"সংরক্ষণ","Submit":"জমা","Upload":"আপলোড"},"ca":{"Add":"Afegeix","Cancel":"Cancel·","Delete":"Esborra","Disable":"Deshabilita","Download":"Descarrega","Edit":"Edita","Enable":"Habilita","Okay":"Bé","Print":"Imprimeix","Refresh":"Refresca","Save":"Desa","Submit":"Envia","Upload":"Puja"},"cs":{"Add":"Přidat","Cancel":"Zrušit","Delete":"Smazat","Disable":"Zakázat","Download":"Stáhnout","Edit":"Upravit","Enable":"Povolit","Okay":"Dobře","Print":"Tisk","Refresh":"Obnovit","Save":"Uložit","Submit":"Odevzdat","Upload":"Nahrát"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Refresh":"Opdater","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Refresh":"Refreshing","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{"Add":"Προσθήκη","Cancel":"Ακύρωση","Delete":"Διαγραφή","Disable":"Απενεργοποίηση","Download":"Λήψη","Edit":"Επεξεργασία","Enable":"Ενεργοποίηση","Okay":"Εντάξει","Print":"Εκτύπωση","Refresh":"Ανανέωση","Save":"Αποθήκευση","Submit":"Υποβολή","Upload":"Αποστολή"},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Refresh":"Refresh","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Inhabilitación","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Refresh":"Refresh","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{"Add":"Lisa","Cancel":"Tühistage","Delete":"Kustuta","Disable":"Keela","Download":"Laadi","Edit":"Edit","Enable":"Luba","Okay":"Olgu","Print":"Printi","Refresh":"Värskenda","Save":"Päästa","Submit":"Esita","Upload":"Laadi"},"eu":{"Add":"Gehitu","Cancel":"Utzi","Delete":"Ezabatu","Disable":"Desgaitu","Download":"Deskargatu","Edit":"Editatu","Enable":"Gaitu","Okay":"Ados","Print":"Inprimatu","Refresh":"Freskatu","Save":"Gorde","Submit":"Bidali","Upload":"Igo"},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"ویرایش","Enable":"گزینه","Okay":"خوب","Print":"Print","Refresh":"بازسازی","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruutukset","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Refresh":"Virkistää","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Ajouter","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactiver","Download":"Télécharger","Edit":"Modifier","Enable":"Activer","Okay":"Très","Print":"Imprimer","Refresh":"Actualiser","Save":"Enregistrer","Submit":"Soumettre","Upload":"Envoi"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Toir","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Refresh":"Athraigh","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"gl":{"Add":"Add","Cancel":"Cancelar","Delete":"Eliminar","Disable":"Disable","Download":"Baixar","Edit":"Edit","Enable":"Habilitar","Okay":"Ok","Print":"Imprimir","Refresh":"Refresco","Save":"Save","Submit":"Presentación","Upload":"Upload"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Refresh":"מרעננים","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Refresh":"रिफ्रेश","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Refresh":"Frissítés","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Refresh":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Refresh":"Rifiuti","Save":"Salva","Submit":"Inviare","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Refresh":"リフレッシュ","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Refresh":"지원하다","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{"Add":"Pridėti","Cancel":"Atsisakyti","Delete":"Trinti","Disable":"Išjungti","Download":"Atsisiųsti","Edit":"Keisti","Enable":"Įjungti","Okay":"Gerai","Print":"Spausdinti","Refresh":"Atnaujinti","Save":"Įrašyti","Submit":"Siųsti","Upload":"Siųsti"},"lv":{"Add":"Pievienot","Cancel":"Atcelt","Delete":"Dzēst","Disable":"Atslēgt","Download":"Lejupielādēt","Edit":"Rediģēt","Enable":"Ieslēgt","Okay":"Labi","Print":"Drukāt","Refresh":"Atsvaidzināt","Save":"Saglabāt","Submit":"Nosūtīt","Upload":"Augšupielāde"},"ms":{"Add":"Tambah","Cancel":"Batal","Delete":"Dihapus","Disable":"Matikan","Download":"Muaturun","Edit":"Edit","Enable":"Hidupkan","Okay":"Oke","Print":"Cetakan","Refresh":"Segarkan","Save":"Simpan","Submit":"Diserahkan","Upload":"Unggah"},"nb":{"Add":"Legg","Cancel":"Avbryt","Delete":"Slett","Disable":"Slå","Download":"Last","Edit":"Rediger","Enable":"Slå","Okay":"Ok","Print":"Skriv","Refresh":"Oppdater","Save":"Lagre","Submit":"Send","Upload":"Last"},"nl":{"Add":"Voeg","Cancel":"Annuleren","Delete":"Verwijderen","Disable":"Uitschakelen","Download":"Downloaden","Edit":"Bewerken","Enable":"Inschakelen","Okay":"Oké","Print":"Afdrukken","Refresh":"Verversen","Save":"Opslaan","Submit":"Verzenden","Upload":"Uploaden"},"pl":{"Add":"Dodaj","Cancel":"Anuluj","Delete":"Usuń","Disable":"Wyłącz","Download":"Pobierz","Edit":"Edycja","Enable":"Włącz","Okay":"Dobrze","Print":"Drukuj","Refresh":"Odśwież","Save":"Zapisz","Submit":"Prześlij","Upload":"Wyślij"},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Refresh":"Atualizar","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{"Add":"Adaugă","Cancel":"Renunță","Delete":"Șterge","Disable":"Dezactivează","Download":"Descărcare","Edit":"Editare","Enable":"Activează","Okay":"Bine","Print":"Tipărește","Refresh":"Reîmprospătează","Save":"Salvează","Submit":"Trimite","Upload":"Încarcă"},"ru":{"Add":"Добавить","Cancel":"Отменить","Delete":"Исключить","Disable":"Инвалид","Download":"Скачать","Edit":"Редактировать","Enable":"Допускать","Okay":"Хорошо","Print":"Печать","Refresh":"Освежить","Save":"Спасти","Submit":"Представить","Upload":"Загрузить"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Refresh":"Obnoviť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{"Add":"Dodaj","Cancel":"Prekliči","Delete":"Zbriši","Disable":"Onemogoči","Download":"Prenesi","Edit":"Uredi","Enable":"Omogoči","Okay":"V","Print":"Natisni","Refresh":"Osveži","Save":"Shrani","Submit":"Pošlji","Upload":"Pošlji"},"sq":{"Add":"_Shto","Cancel":"Anullo","Delete":"Elemino","Disable":"Jo","Download":"Shkarkimi","Edit":"Ndrysho","Enable":"Aktivo","Okay":"Mirë","Print":"Printo","Refresh":"Rifresko","Save":"Ruaj","Submit":"Dërgo","Upload":"Ngarko"},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Refresh":"Refresh","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{"Add":"เพิ่ม","Cancel":"ยกเลิก","Delete":"ลบ","Disable":"ปิดการใช้งาน","Download":"ดาวน์โหลด","Edit":"แก้ไข","Enable":"เปิด","Okay":"โอเค","Print":"พิมพ์","Refresh":"ปรับปรุงใหม่","Save":"บันทึก","Submit":"ส่ง","Upload":"อัปโหลด"},"tl":{"Add":"Magdagdag","Cancel":"Huwag","Delete":"Ibagsak","Disable":"Hindi","Download":"Ibaba","Edit":"Baguhin","Enable":"Kaibig","Okay":"Okay","Print":"Nakalimbag","Refresh":"Nakapagpapasigla","Save":"Mag","Submit":"Pagpapasakop","Upload":"Itaas"},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelliler","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Refresh":"Yenileme","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Refresh":"Реверс","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"ur":{"Add":"_شامل","Cancel":"منسوخ","Delete":"حذف","Disable":"منسوخ","Download":"اوپر","Edit":"مرتب","Enable":"فعال","Okay":"ٹھیک","Print":"پرنٹ","Refresh":"خوشی","Save":"محفوظ","Submit":"غیر","Upload":"اپ"},"zh":{"Add":"添加","Cancel":"取消","Delete":"删除","Disable":"禁用","Download":"下载","Edit":"编辑","Enable":"启用","Okay":"还好","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上传"},"zt":{"Add":"添加","Cancel":"取消","Delete":"刪除","Disable":"禁用","Download":"下載","Edit":"編輯","Enable":"開啟","Okay":"好吧","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上傳"}}', fa = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":" Filter"},"bg":{"Filter":"Филтър"},"bn":{"Filter":"ফিল্টার"},"cs":{"Filter":"Filtr"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{"Filter":"Φίλτρο"},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{"Filter":"Filter"},"eu":{"Filter":"Iragazkia"},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"gl":{"Filter":"Filtrar"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{"Filter":"Filtras"},"lv":{"Filter":"Filtrs"},"ms":{"Filter":"Penapis"},"nb":{"Filter":"Filtrer"},"nl":{"Filter":"Filter"},"pl":{"Filter":"Filtr"},"pt":{"Filter":"Filtro"},"ro":{"Filter":"Filtru"},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{"Filter":"Filter"},"sq":{"Filter":"Filtra"},"sv":{"Filter":"Filter"},"th":{"Filter":"กรอง"},"tl":{"Filter":"Pansala"},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"ur":{"Filter":"فائلز"},"zh":{"Filter":"过滤器"},"zt":{"Filter":"分頁"}}', _a = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":" Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":"Qeydiyyat"},"bg":{"Previous":"Предишен","Next":"Следващият","Older":"По-","Newer":"По-","GoToPage":"Отиване на страница"},"bn":{"Previous":"পূর্ববর্তী","Next":"পরবর্তী","Older":"বয়স্ক","Newer":"নিউকার","GoToPage":"চিহ্নিত স্থানে চলুন"},"ca":{"Previous":"Anterior","Next":"Següent","Older":"Vella","Newer":"Més","GoToPage":"Vés a la pàgina"},"cs":{"Previous":"Předchozí","Next":"Další","Older":"Starší","Newer":"Nejnovější","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{"Previous":"Προηγούμενο","Next":"Επόμενο","Older":"Μεγαλύτερος","Newer":"Νεότερα","GoToPage":"Μετάβαση στη σελίδα"},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{"Previous":"Eelmine","Next":"Järgmine","Older":"Vanem","Newer":"Uuem","GoToPage":"Mine lehele"},"eu":{"Previous":"Aurrekoa","Next":"Hurrengoa","Older":"Zaharragoa","Newer":"Newer","GoToPage":"Joan orrira"},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Plus","Newer":"Plus","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go Leathanach"},"gl":{"Previous":"Anterior","Next":"Seguinte","Older":"Idade","Newer":"Newer","GoToPage":"Ir á páxina"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"본문 바로가기"},"lt":{"Previous":"Ankstesnis","Next":"Sekantis","Older":"Senesni","Newer":"Naujokas","GoToPage":"Pereiti į puslapį"},"lv":{"Previous":"Iepriekšējais","Next":"Nākamais","Older":"Vecāki","Newer":"Jaunāks","GoToPage":"Iet uz lapu"},"ms":{"Previous":"Sebelumnya","Next":"Next","Older":"♪","Newer":"Perancis","GoToPage":"Pergi Ke Halaman"},"nb":{"Previous":"Forrige","Next":"Neste","Older":"Eldre","Newer":"Nyere","GoToPage":"Gå til siden"},"nl":{"Previous":"Vorige","Next":"Volgende","Older":"Ouder","Newer":"Nieuwer","GoToPage":"Ga naar pagina"},"pl":{"Previous":"Poprzedni","Next":"Następny","Older":"Starszy","Newer":"Nowsza","GoToPage":"Przejdź do strony"},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{"Previous":"Precedent","Next":"Înainte","Older":"Mai","Newer":"Mai","GoToPage":"Du-te la pagina"},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Старше","Newer":"Новый","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{"Previous":"Prejšnja","Next":"Naprej","Older":"Starejši","Newer":"Novejši","GoToPage":"Pojdi na stran"},"sq":{"Previous":"Paraardhëse","Next":"Në","Older":"Më","Newer":"Ri","GoToPage":"Shko tek faqja"},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{"Previous":"ก่อนหน้า","Next":"ต่อไป","Older":"อายุ","Newer":"สร้างใหม่","GoToPage":"ไปยังหน้า"},"tl":{"Previous":"Bago","Next":"Susunod","Older":"Mas","Newer":"Mas","GoToPage":"Pumunta sa Pahina"},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"ur":{"Previous":"پہلے","Next":"اگلا","Older":"عمررسیدہ","Newer":"نیا","GoToPage":"صفحہ ۲۴ پر جائیں"},"zh":{"Previous":"上一个","Next":"下一个","Older":"老年人","Newer":"更新","GoToPage":"转到页面"},"zt":{"Previous":"前一個","Next":"下一頁","Older":"老了","Newer":"更新","GoToPage":"跳至頁面"}}', ka = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"يان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qalereya","Mon":"Bakı","Tue":"Qalereya","Wed":"Biznes","Thu":"Qalereya","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Axtarış","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Bakı","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{"Sun":"Слънце","Mon":"Мон","Tue":"Туе","Wed":"Сватба","Thu":"Thu","Fri":"Fri","Sat":"Сат","Sunday":"Неделя","Monday":"Понеделник","Tuesday":"Вторник","Wednesday":"Сряда","Thursday":"Четвъртък","Friday":"Петък","Saturday":"Събота"},"Months":{"Jan":"Ян","Feb":"Февруари","Mar":"Мар","Apr":"Apr","May":"Май","Jun":"Джун","Jul":"Юли","Aug":"Aug","Sep":"Сеп","Oct":"Окт","Nov":"Nov","Dec":"Дек","January":"Януари","Febuary":"Февруари","March":"Март","April":"Април","June":"Юни","July":"Юли","August":"Август","September":"Септември","October":"Октомври","November":"Ноември","December":"Декември"},"Today":"Днес"},"bn":{"Weekdays":{"Sun":"রবি","Mon":"মন","Tue":"মঙ্গল","Wed":"অস্বীকৃত","Thu":"বৃহঃ","Fri":"ফ্রিসেল","Sat":"শনি","Sunday":"রবিবার","Monday":"সোমবার","Tuesday":"মঙ্গলবার","Wednesday":"বুধবার","Thursday":"বৃহস্পতিবার","Friday":"শুক্রবার","Saturday":"শনিবার"},"Months":{"Jan":"জানুয়ারী","Feb":"ফেব্রুয়ারীMarch","Mar":"মার্চApril","Apr":"এপ্রিল","May":"মে","Jun":"জুনিউ","Jul":"জুমি","Aug":"আগস্ট","Sep":"সেপ্টেম্বরOctober","Oct":"অক্টোবর","Nov":"নভেম্বর","Dec":"ডিসেম্বর","January":"জানুয়ারী","Febuary":"ফেব্রুয়ারীof","March":"মার্চ","April":"এপ্রিল","June":"জুন","July":"জুলাই","August":"আগস্ট","September":"সেপ্টেম্বর","October":"অক্টোবর","November":"নভেম্বর","December":"সদস্য"},"Today":"আজ"},"ca":{"Weekdays":{"Sun":"Sol","Mon":"Dl","Tue":"Dt","Wed":"Dc","Thu":"Dj","Fri":"DvSaturday","Sat":"DsSunday","Sunday":"Diumenge","Monday":"Dilluns","Tuesday":"Dimarts","Wednesday":"Dimecres","Thursday":"Dijous","Friday":"Divendres","Saturday":"Dissabte"},"Months":{"Jan":"Mare","Feb":"FebMarch","Mar":"Mar","Apr":"AbrMay","May":"Maig","Jun":"JunJuly","Jul":"JulAugust","Aug":"AgoSeptember","Sep":"Set","Oct":"Oct","Nov":"Nov","Dec":"Des","January":"Gener","Febuary":"FebuaryCity","March":"Març","April":"Abril","June":"Juny","July":"Juliol","August":"Agost","September":"Setembre","October":"Octubre","November":"Novembre","December":"Desembre"},"Today":"Avui"},"cs":{"Weekdays":{"Sun":"Slunce","Mon":"Po","Tue":"Út","Wed":"St","Thu":"Čt","Fri":"Pá","Sat":"Sat","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Únor","Mar":"Mar","Apr":"Dub","May":"Květen","Jun":"Červen","Jul":"Červenec","Aug":"Srpen","Sep":"Září","Oct":"Říjen","Nov":"Listopad","Dec":"Pro","January":"Leden","Febuary":"Febuary","March":"Březen","April":"Duben","June":"Červen","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Listopad","December":"Prosinec"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Fri":"Friseur","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"Sept","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{"Sun":"Ήλιος","Mon":"Δευ","Tue":"Τεύχος","Wed":"Τετ","Thu":"Θου","Fri":"Παρ","Sat":"Σάβ","Sunday":"Κυριακή","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο"},"Months":{"Jan":"Ιαν","Feb":"Φεβ","Mar":"Μαρ","Apr":"Απρ","May":"Μάιος","Jun":"Ιουν","Jul":"Ιουλ","Aug":"Αυγ","Sep":"Σεπ","Oct":"Οκτ","Nov":"Νοε","Dec":"Δεκ","January":"Ιανουάριος","Febuary":"Φεβουάριο","March":"Μάρτιος","April":"Απρίλιος","June":"Ιούνιος","July":"Ιούλιος","August":"Αύγουστος","September":"Σεπτέμβριος","October":"Οκτώβριος","November":"Νοέμβριος","December":"Δεκέμβριος"},"Today":"Σήμερα"},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundo","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov-Zelando","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{"Sun":"Päike","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattus","Sunday":"Pühapäev","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäeval","Friday":"Reede","Saturday":"Laupäev"},"Months":{"Jan":"Jan","Feb":"Veebruar","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oktoober","Nov":"Nov","Dec":"Dec","January":"Jaanuar","Febuary":"Febuary","March":"Märts","April":"Aprill","June":"Juuni","July":"Juuli","August":"August","September":"September","October":"Oktoober","November":"November","December":"Detsember"},"Today":"Täna"},"eu":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Apustua","Thu":"Og","Fri":"Fri","Sat":"Sat","Sunday":"Igandea","Monday":"Astelehena","Tuesday":"Asteartea","Wednesday":"Asteazkena","Thursday":"Osteguna","Friday":"Ostirala","Saturday":"Larunbata"},"Months":{"Jan":"Jan","Feb":"Ots","Mar":"Marmar","Apr":"Apr","May":"Maiatza","Jun":"Jun","Jul":"Jul","Aug":"Abusua","Sep":"Ira","Oct":"Oct","Nov":"Aza","Dec":"Abendua","January":"Urtarrila","Febuary":"Feburoa","March":"Martxoa","April":"Apirila","June":"Ekaina","July":"Uztaila","August":"Abuztua","September":"Iraila","October":"Urria","November":"Azaroa","December":"Abendua"},"Today":"Gaur"},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Auringon","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Soleil","Mon":"Mon","Tue":"Tu","Wed":"Mariage","Thu":"Jeu","Fri":"Ven","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Janvier","Feb":"Fév","Mar":"Mars","Apr":"Avr","May":"Mai","Jun":"Juin","Jul":"Juillet","Aug":"Août","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Déc","January":"Janvier","Febuary":"Février","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Déan","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Dé","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"An","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Irl","Febuary":"Amharc","March":"Márta","April":"Amharc","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Nollaig"},"Today":"Sa"},"gl":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Apostamos","Thu":"Tu","Fri":"Frio","Sat":"Sat","Sunday":"Domingo","Monday":"Luns","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Xoves","Friday":"Venres","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Febreiro","Mar":"Mar","Apr":"Abril","May":"Maio","Jun":"Jun","Jul":"Xullo","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Novidade","Dec":"Dec","January":"Xaneiro","Febuary":"Febreiro","March":"Marzo","April":"Abril","June":"Xuño","July":"Xullo","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Decembro"},"Today":"Hoxe"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"יום"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utána","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Manapság"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Sitemap","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンド","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日～金曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"₢","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2월","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{"Sun":"Saulė","Mon":"Mon","Tue":"Tue","Wed":"WEd","Thu":"Thu","Fri":"FrNAME","Sat":"Sat","Sunday":"Sekmadienis","Monday":"Pirmadienis","Tuesday":"Antradienis","Wednesday":"Trečiadienis","Thursday":"Ketvirtadienis","Friday":"Penktadienis","Saturday":"Šeštadienis"},"Months":{"Jan":"Sau","Feb":"Vas","Mar":"Mar","Apr":"Bal","May":"Gegužės","Jun":"Bir","Jul":"Lie","Aug":"Rgp","Sep":"Rp","Oct":"Spalis","Nov":"Nr","Dec":"Gruodis","January":"Sausis","Febuary":"Piešinys","March":"Kovas","April":"Balandis","June":"Birželis","July":"Liepa","August":"Rugpjūtis","September":"Rugsėjis","October":"Spalis","November":"Lapkritis","December":"Gruodis"},"Today":"Šiandien"},"lv":{"Weekdays":{"Sun":"Saule","Mon":"N","Tue":"Otr","Wed":"Tre","Thu":"Cet","Fri":"Pie","Sat":"Ses","Sunday":"Svētdiena","Monday":"Pirmdiena","Tuesday":"Otrdiena","Wednesday":"Trešdiena","Thursday":"Ceturtdiena","Friday":"Piektdiena","Saturday":"Sestdiena"},"Months":{"Jan":"Janvāris","Feb":"Febr","Mar":"Mar","Apr":"Apr","May":"Maijs","Jun":"Jūn","Jul":"Jūl","Aug":"Aug","Sep":"Sept","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Janvāris","Febuary":"Febuāris","March":"Marts","April":"Aprīlis","June":"Jūnijs","July":"Jūlijs","August":"Augusts","September":"Septembris","October":"Oktobris","November":"Novembris","December":"Decembris"},"Today":"Šodien"},"ms":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Perancis","Wed":"♪","Thu":"Khaw","Fri":"Perancis","Sat":"♪","Sunday":"Ahad","Monday":"Isnin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Khamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Perancis","Mar":"Perancis","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"♪","Aug":"Aug","Sep":"Perancis","Oct":"Takh","Nov":"Nov","Dec":"Amerika","January":"Januari","Febuary":"Febuary","March":"2010,","April":"April","June":"Juni","July":"Juli","August":"Ogos","September":"Perancis","October":"Oktober","November":"November","December":"Amerika"},"Today":"Hari"},"nb":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Februar","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"I"},"nl":{"Weekdays":{"Sun":"Zon","Mon":"Ma","Tue":"Di","Wed":"Wo","Thu":"Do","Fri":"Vr","Sat":"Zat","Sunday":"Zondag","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"February","March":"Maart","April":"April","June":"Juni","July":"Juli","August":"Augustus","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Vandaag"},"pl":{"Weekdays":{"Sun":"Słońce","Mon":"Mon","Tue":"Wtyczka","Wed":"Środ","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Niedziela","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Luty","Mar":"Mar","Apr":"Kwiecień","May":"Maj","Jun":"Czerwiec","Jul":"Lipiec","Aug":"Sierpień","Sep":"Wrzesień","Oct":"Październik","Nov":"Nov","Dec":"Grudzień","January":"Styczeń","Febuary":"Luty","March":"Marzec","April":"Kwiecień","June":"Czerwiec","July":"Lipiec","August":"Sierpień","September":"Wrzesień","October":"Październik","November":"Listopad","December":"Grudzień"},"Today":"Dzisiaj"},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"A","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{"Sun":"Soare","Mon":"Luni","Tue":"Tue","Wed":"Căsătorie","Thu":"Thu","Fri":"Vine","Sat":"Sat","Sunday":"Duminică","Monday":"Luni","Tuesday":"Marţi","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă"},"Months":{"Jan":"Jan","Feb":"Februarie","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Ianuarie","Febuary":"Febur","March":"Martie","April":"Aprilie","June":"Iunie","July":"Iulie","August":"August","September":"Septembrie","October":"Octombrie","November":"Noiembrie","December":"Decembrie"},"Today":"Astăzi"},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Мон","Tue":"Туи","Wed":"Свадьба","Thu":"Ту","Fri":"Фри","Sat":"Сидеть","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Ян","Feb":"Февраль","Mar":"Мар","Apr":"Апр","May":"Май","Jun":"Джун","Jul":"Джул","Aug":"Ауг","Sep":"Сеп","Oct":"Октября","Nov":"Ноябрь","Dec":"Декларация","January":"Январь","Febuary":"Февраль","March":"Март","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октября","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"NAŠE","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Slúcha","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{"Sun":"Sonce","Mon":"Naslednji","Tue":"Tor","Wed":"Sre","Thu":"Čet","Fri":"Fri","Sat":"Sob","Sunday":"Nedelja","Monday":"Ponedeljek","Tuesday":"Torek","Wednesday":"Sreda","Thursday":"Četrtek","Friday":"Petek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Avg","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Febuary","March":"Marec","April":"April","June":"Junij","July":"Julij","August":"Avgust","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Danes"},"sq":{"Weekdays":{"Sun":"Dielli","Mon":"Mon","Tue":"Tue","Wed":"Mer","Thu":"Tsu","Fri":"Pre","Sat":"Sat","Sunday":"E","Monday":"E","Tuesday":"E","Wednesday":"E","Thursday":"E","Friday":"E","Saturday":"E"},"Months":{"Jan":"Jan","Feb":"Fb","Mar":"Meri","Apr":"Për","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Tetor","Nov":"Nov","Dec":"Dhjetor","January":"Janar","Febuary":"Febuary","March":"Mars","April":"Prill","June":"Qershor","July":"Korrik","August":"Gusht","September":"Shtator","October":"Tetor","November":"Nëntor","December":"Dhjetor"},"Today":"Sot"},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{"Sun":"อาทิตย์","Mon":"นิ้ว","Tue":"Tue","Wed":"เว็บ","Thu":"ทู","Fri":"เนื้อ","Sat":"ที่นั่ง","Sunday":"อาทิตย์","Monday":"จันทร์","Tuesday":"อังคาร","Wednesday":"วันพุธ","Thursday":"พฤหัสบดี","Friday":"ศุกร์","Saturday":"เสาร์"},"Months":{"Jan":"ไม่นะ","Feb":"ก.","Mar":"ขนาด","Apr":"ขนาด","May":"พฤษภาคม","Jun":"จุน","Jul":"ก.","Aug":"อัก","Sep":"เซพ","Oct":"ตลับหมึก","Nov":"นอฟ","Dec":"ธ.","January":"มกราคม","Febuary":"อภิสิทธิ์","March":"มีนาคม","April":"เมษายน","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม"},"Today":"วันนี้"},"tl":{"Weekdays":{"Sun":"Araw","Mon":"Buwan","Tue":"Tue","Wed":"Damo","Thu":"Thu","Fri":"Kaibigan","Sat":"Sat","Sunday":"Linggo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miyerkules","Thursday":"Huwebes","Friday":"Biyernes","Saturday":"Sabado"},"Months":{"Jan":"Jan","Feb":"Sanggol","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Juul","Aug":"Ug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Pagpapasiya","January":"Enero","Febuary":"Febuary","March":"Marso","April":"Abril","June":"Hunyo","July":"Hulyo","August":"Agosto","September":"Setyembre","October":"Oktubre","November":"Nobyembre","December":"Disyembre"},"Today":"Ngayon"},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Febuary","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Про","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"П'ятниця","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарита","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"ur":{"Weekdays":{"Sun":"سورج","Mon":"مون","Tue":"ٹو","Wed":"وے","Thu":"چو","Fri":"فری","Sat":"شطرنج","Sunday":"اتوار","Monday":"منگل","Tuesday":"منگل","Wednesday":"بدھ","Thursday":"جمعرات","Friday":"جمعہ","Saturday":"سبت"},"Months":{"Jan":"یان","Feb":"فیب","Mar":"مار","Apr":"پرنٹ","May":"مئی","Jun":"جون","Jul":"یول","Aug":"آغ","Sep":"سیپ","Oct":"پرنٹ","Nov":"ن","Dec":"سوال","January":"جنوری","Febuary":"افریقہ","March":"مارچ","April":"اپریل","June":"جون","July":"جولائی","August":"اگست","September":"ستمبر","October":"اکتوبر","November":"نومبر","December":"دسمبر"},"Today":"آج"},"zh":{"Weekdays":{"Sun":"太阳","Mon":"月号","Tue":"图","Wed":"结婚","Thu":"图","Fri":"弗里语Name","Sat":"座位","Sunday":"礼拜","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六(上午)"},"Months":{"Jan":"扬","Feb":"二月","Mar":"马来","Apr":"农历四月","May":"5月","Jun":"军","Jul":"朱尔","Aug":"奥格","Sep":"九月","Oct":"十月(简体)","Nov":"页:1","Dec":"12月(中文)","January":"页:1","Febuary":"二级","March":"3月(半天会议)","April":"4月(半天会议)","June":"6月份","July":"7月(半天会议)","August":"8月(半天)","September":"9月(半天会议)","October":"10月(半天会议)","November":"11月(半天会议)","December":"12月(半天)"},"Today":"现在"},"zt":{"Weekdays":{"Sun":"太阳","Mon":"月","Tue":"二等分","Wed":"有婚","Thu":"三月","Fri":"弗里","Sat":"有","Sunday":"星期天","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六"},"Months":{"Jan":"1月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"三月","Jul":"二月","Aug":"8月","Sep":"九月","Oct":"十月","Nov":"11月","Dec":"二月","January":"1月","Febuary":"二月","March":"三月","April":"4月","June":"6月","July":"7月","August":"8月","September":"9月","October":"10月","November":"11月","December":"12月"},"Today":"今天"}}`, Sa = '{"en":{"Error":"Error"},"ar":{"Error":"الرعب"},"az":{"Error":"Qeyd"},"bg":{"Error":"Грешка"},"bn":{"Error":"ত্রুটি"},"ca":{"Error":"Error"},"cs":{"Error":"Chyba"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{"Error":"Σφάλμα"},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{"Error":"Viga"},"eu":{"Error":"Errorea"},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Amharc"},"gl":{"Error":"Erro"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{"Error":"Klaida"},"lv":{"Error":"Kļūda"},"ms":{"Error":"Error"},"nb":{"Error":"Feil"},"nl":{"Error":"Fout"},"pl":{"Error":"Błąd"},"pt":{"Error":"Erro"},"ro":{"Error":"Eroare"},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{"Error":"Napaka"},"sq":{"Error":"Gabim"},"sv":{"Error":"Fel"},"th":{"Error":"ผิดพลาด"},"tl":{"Error":"Pagkakamali"},"tr":{"Error":"Hata"},"uk":{"Error":"Помилка"},"ur":{"Error":"خامی"},"zh":{"Error":"错误"},"zt":{"Error":"錯誤"}}', Da = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":" Don"},"bg":{"Done":"Готово"},"bn":{"Done":"সম্পন্ন"},"ca":{"Done":"Fet"},"cs":{"Done":"Hotovo"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{"Done":"Έγινε"},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{"Done":"Tehtud"},"eu":{"Done":"Eginda"},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Fait"},"ga":{"Done":"Arna"},"gl":{"Done":"Feito"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{"Done":"@"},"lv":{"Done":"Pabeigts"},"ms":{"Done":"Selesai"},"nb":{"Done":"Ferdig"},"nl":{"Done":"Klaar"},"pl":{"Done":"Gotowe"},"pt":{"Done":"Feito"},"ro":{"Done":"Gata"},"ru":{"Done":"Сделано"},"sk":{"Done":"Hotovo"},"sl":{"Done":"Končano"},"sq":{"Done":"U"},"sv":{"Done":"Done"},"th":{"Done":"เสร็จแล้ว"},"tl":{"Done":"Tapos"},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"ur":{"Done":"بند"},"zh":{"Done":"完成"},"zt":{"Done":"完成"}}', Ma = {
  Button: JSON.parse(ya),
  Filter: JSON.parse(fa),
  Pagination: JSON.parse(_a),
  Date: JSON.parse(ka),
  Form: JSON.parse(Sa),
  Wizard: JSON.parse(Da)
}, V = (e, n) => {
  let t = e.split("."), a = Ma[t[0]];
  const l = (n == null || n == null ? null : n.value) ?? "en";
  if (a !== void 0) {
    a[l] === void 0 ? a = a.en : a = a[l];
    let s = 1;
    for (; a !== void 0 && s < t.length; )
      a = a[t[s]], s++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, $a = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), St = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: Q.danger
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Fa = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: Q.danger
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Aa = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: Q.danger
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ja = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Dt = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Mt = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ta = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), Pa = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = n, a = q(L), l = _(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: Q.primary
    }));
    return (s, r) => (o(), C(X, G(l.value, {
      onClick: r[0] || (r[0] = (i) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ M({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("div", {
      class: w(["buttons", n.size ? `are-${n.size}` : "", n.alignment ? `is-${n.alignment}` : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Ba = /* @__PURE__ */ M({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: re.normal }
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), C(U, {
      icon: `square-${n.checked ? "check" : "xmark"}`,
      size: n.size
    }, null, 8, ["icon", "size"]));
  }
}), Ea = { class: "dropdown-trigger" }, Ca = ["aria-controls"], La = { class: "icon is-small" }, za = ["id"], Ia = { class: "dropdown-content" }, Wa = {
  key: 0,
  class: "dropdown-divider"
}, Va = { key: 0 }, Ra = /* @__PURE__ */ M({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const n = ut(), t = e, a = x(!1), l = _(() => {
      let d = ["dropdown"];
      return t.is_hoverable && d.push("is-hoverable"), t.is_right_align && d.push("is-right"), t.drops_up && d.push("is-up"), a.value && d.push("is-active"), d;
    }), s = _(() => {
      let d = ae(t.items);
      return Array.isArray(d) && (d = d.map((m) => Array.isArray(m) ? { children: m } : { children: [m] })), Array.isArray(d) ? d : [d];
    }), r = (d) => {
      let m = ["dropdown-item"];
      return typeof d != "string" && d.active && m.push("is-active"), m;
    }, i = (d) => {
      if (typeof d != "string")
        return d.href;
    }, c = (d) => {
      if (typeof d != "string") {
        a.value = !1;
        let m = d;
        m.onClick && m.onClick();
      }
    };
    return (d, m) => (o(), u("div", {
      class: w(l.value)
    }, [
      g("div", Ea, [
        g("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": y(n),
          onClick: m[0] || (m[0] = (h) => a.value = !a.value)
        }, [
          g("span", null, T(t.title), 1),
          g("span", La, [
            B(U, {
              icon: "angle-down",
              "aria-hidden": "true"
            })
          ])
        ], 8, Ca)
      ]),
      g("div", {
        class: "dropdown-menu",
        id: y(n),
        role: "menu"
      }, [
        (o(!0), u(P, null, W(s.value, (h, v) => (o(), u("div", Ia, [
          v > 0 ? (o(), u("hr", Wa)) : A("", !0),
          (o(!0), u(P, null, W(h.children, (p) => (o(), C(ce(typeof p == "string" ? "div" : "a"), {
            class: w(r(p)),
            href: i(p),
            onClick: (f) => c(p)
          }, {
            default: z(() => [
              typeof p == "string" ? (o(), u("p", Va, T(p), 1)) : A("", !0),
              K(" " + T(typeof p == "string" ? null : p.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, za)
    ], 2));
  }
}), nt = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value === null || t.value.test(s)).map((s) => a[s]);
}, Ua = /* @__PURE__ */ M({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = x(null), t = e, a = _(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return R(() => [t.url, t.filter], async () => {
      n.value = await nt(t.url, t.sortMethod, a);
    }), de(async () => {
      n.value = await nt(t.url, t.sortMethod, a);
    }), (l, s) => (o(!0), u(P, null, W(n.value, (r) => (o(), C(ce(r), G({ ref_for: !0 }, t.props), null, 16))), 256));
  }
}), ja = { class: "control has-icons-left" }, Ga = ["placeholder"], Ha = { class: "is-left" }, $t = /* @__PURE__ */ M({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = q(L), s = _(() => V("Filter.Filter", l)), r = x(null);
    R([r], (c) => {
      c[0] === "" && t.default_value && (r.value = t.default_value, a("filter", r.value == "" ? null : r.value));
    });
    const i = (c) => {
      c.keyCode == 13 && a("filter", r.value == "" ? null : r.value);
    };
    return de(() => {
      t.default_value && (r.value = t.default_value);
    }), (c, d) => (o(), u("div", ja, [
      j(g("input", {
        role: "searchbox",
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => r.value = m),
        onKeypress: i
      }, null, 40, Ga), [
        [Se, r.value]
      ]),
      g("span", Ha, [
        B(U, {
          icon: "filter",
          size: y(re).small
        }, null, 8, ["size"])
      ])
    ]));
  }
}), Ka = {
  key: 0,
  class: "message-header"
}, Ya = { class: "message-body" }, qa = /* @__PURE__ */ M({
  __name: "message",
  props: {
    type: { default: Q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: Y.normal }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = _(() => t.size === Y.normal ? null : `is-${t.size}`), s = _(() => `is-${t.type}`);
    return (r, i) => (o(), u("article", {
      class: w(["message", l.value, s.value])
    }, [
      t.title ? (o(), u("div", Ka, [
        g("p", null, T(t.title), 1),
        t.has_delete ? (o(), u("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: i[0] || (i[0] = (c) => a("close"))
        })) : A("", !0)
      ])) : A("", !0),
      g("div", Ya, [
        N(r.$slots, "default", {}, () => [
          K(T(t.message), 1)
        ])
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ M({
  __name: "notification",
  props: {
    type: { default: le.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("div", {
      class: w(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      N(t.$slots, "default", {}, () => [
        K(T(n.message), 1)
      ])
    ], 2));
  }
}), Za = {
  key: 0,
  class: "modal-background"
}, Qa = ["aria-label"], Xa = {
  key: 0,
  class: "title"
}, el = { class: "block" }, tl = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = _(() => {
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
    }), s = _(() => {
      var r = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && r.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || r.push("has-no-close"), r;
    });
    return (r, i) => (o(), u("div", {
      class: w({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (o(), u("div", Za)) : A("", !0),
      B(kt, {
        incoming: y(we).fadeIn,
        outgoing: y(we).fadeOut,
        speed: y(ve).slower
      }, {
        default: z(() => [
          t.visible ? (o(), u("div", {
            key: 0,
            class: w(s.value),
            role: "dialog",
            "aria-label": t.header ?? "Page Notification"
          }, [
            B(U, {
              icon: l.value,
              size: y(re).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (o(), u("h1", Xa, T(t.header), 1)) : A("", !0),
            g("div", el, T(t.message), 1),
            t.has_close ? (o(), C(U, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (c) => a("close")),
              size: y(re).large,
              role: "button",
              "aria-label": "close"
            }, null, 8, ["size"])) : A("", !0)
          ], 10, Qa)) : A("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), al = ["title", "disabled"], ll = ["title", "disabled"], nl = {
  key: 0,
  class: "pagination-list"
}, sl = {
  key: 0,
  class: "pagination-ellipsis"
}, rl = ["aria-label", "onOnclick"], Ft = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = q(L), s = _(() => V(t.use_next ? "Pagination.Previous" : "Pagination.Older", l)), r = _(() => V(t.use_next ? "Pagination.Next" : "Pagination.Newer", l)), i = _(() => t.button_type ? `has-background-${t.button_type}` : ""), c = _(() => V("Pagination.GoToPage", l)), d = _(() => t.current_page === void 0 ? 0 : ae(t.current_page) + (t.zero_page_index ? 1 : 0)), m = _(() => (t.has_previous ?? !1) || d.value > 0), h = _(() => (t.has_more ?? !1) || d.value < (t.total_pages === void 0 ? 0 : ae(t.total_pages))), v = _(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (ae(t.total_pages) > 5) {
        let k = Math.max(t.current_page === void 0 ? Math.floor(ae(t.total_pages) / 2) : d.value, 3);
        return ae(t.total_pages) - d.value === 0 ? k -= 2 : ae(t.total_pages) - d.value === 1 && k--, [
          1,
          -1,
          k - 1,
          k,
          k + 1,
          -1,
          ae(t.total_pages)
        ];
      } else {
        let k = [];
        for (let F = 1; F <= ae(t.total_pages); F++)
          k.push(F);
        return k;
      }
    }), p = function() {
      m && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", ae(t.current_page) - 1) : a("moveBack"));
    }, f = function() {
      h && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", ae(t.current_page) + 1) : a("moveForward"));
    }, b = function(k) {
      a("goToPage", t.zero_page_index ? k - 1 : k);
    };
    return (k, F) => j((o(), u("nav", {
      class: w(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: w(["pagination-previous", i.value]),
        title: s.value,
        onClick: p,
        disabled: m.value ? null : "disabled"
      }, [
        B(U, {
          icon: "backward",
          class: "mr-1",
          size: y(re).small
        }, null, 8, ["size"]),
        K(" " + T(s.value), 1)
      ], 10, al),
      g("a", {
        class: w(["pagination-next", i.value]),
        title: r.value,
        onClick: f,
        disabled: h.value ? null : "disabled"
      }, [
        K(T(r.value) + " ", 1),
        B(U, {
          icon: "forward",
          class: "ml-1",
          size: y(re).small
        }, null, 8, ["size"])
      ], 10, ll),
      t.total_pages !== void 0 ? (o(), u("ul", nl, [
        (o(!0), u(P, null, W(v.value, (S) => (o(), u("li", null, [
          S === -1 ? (o(), u("span", sl, "…")) : (o(), u("a", {
            key: 1,
            class: w(["pagination-link", S === d.value ? "is-current" : ""]),
            "aria-label": `${c.value} ${S}`,
            onOnclick: (O) => b(S)
          }, T(S), 43, rl))
        ]))), 256))
      ])) : A("", !0)
    ], 2)), [
      [ne, m.value || h.value]
    ]);
  }
});
function ol(e) {
  return typeof e == "function" ? e() : y(e);
}
const me = /* @__PURE__ */ M({
  __name: "Promised",
  props: {
    promise: {}
  },
  setup(e) {
    const n = e, t = x(null), a = q(L), l = _(() => `${V("Form.Error", a)}: ${t.value.message ?? t.value.toString()}`), s = x(!1), r = x(!1), i = _(() => !s.value && !r.value), c = x(null), d = _(() => {
      if (n.promise !== void 0 && n.promise !== null) {
        let h = ol(n.promise);
        return h instanceof Promise ? h : Promise.resolve(h);
      }
      return null;
    });
    async function m(h) {
      if (s.value = !1, r.value = !1, t.value = null, !h)
        c.value = null;
      else
        try {
          c.value = await h, r.value = !0;
        } catch (v) {
          t.value = v, s.value = !0;
        }
    }
    return R(
      () => d,
      async (h) => {
        await m(h.value);
      }
    ), de(async () => {
      await m(d.value);
    }), (h, v) => (o(), u(P, null, [
      i.value ? N(h.$slots, "pending", { key: 0 }, () => [
        B(y(ue), {
          size: y(Y).small
        }, null, 8, ["size"])
      ]) : A("", !0),
      s.value ? N(h.$slots, "rejected", pe(G({ key: 1 }, t.value)), () => [
        B(y(he), {
          message: l.value,
          type: y(le).danger
        }, null, 8, ["message", "type"])
      ]) : A("", !0),
      r.value ? N(h.$slots, "default", {
        key: 2,
        response: c.value
      }) : A("", !0)
    ], 64));
  }
}), il = ["value", "max"], ue = /* @__PURE__ */ M({
  __name: "progress",
  props: {
    type: { default: Q.primary },
    size: { default: Y.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, t = _(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum * 100);
    return (a, l) => (o(), u("progress", {
      class: w(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, T(t.value ? `${t.value.toFixed(2)}%` : null), 11, il));
  }
}), ul = {
  key: 0,
  class: "navbar-link"
}, dl = {
  key: 0,
  class: "icon-text"
}, cl = { class: "icon" }, pl = { key: 1 }, hl = {
  key: 0,
  class: "icon-text"
}, ml = { class: "icon" }, bl = { key: 1 }, vl = {
  key: 2,
  class: "navbar-dropdown"
}, st = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = e, a = () => {
      l("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, l = n;
    return (s, r) => {
      const i = it("navbar-item", !0);
      return o(), C(ce(t.childItems !== void 0 ? "div" : "a"), {
        class: w(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: z(() => [
          t.childItems !== void 0 ? (o(), u("a", ul, [
            t.icon !== void 0 && t.icon !== null ? (o(), u("span", dl, [
              g("span", cl, [
                B(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              g("span", null, T(t.title), 1)
            ])) : (o(), u("span", pl, T(t.title), 1))
          ])) : (o(), u(P, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (o(), u("span", hl, [
              g("span", ml, [
                B(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              g("span", null, T(t.title), 1)
            ])) : (o(), u("span", bl, T(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (o(), u("div", vl, [
            (o(!0), u(P, null, W(t.childItems, (c) => (o(), C(i, G({ ref_for: !0 }, c, {
              onItemClicked: r[0] || (r[0] = (d) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : A("", !0)
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
}, Dl = { style: { width: "100px" } }, Ml = /* @__PURE__ */ M({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const n = e, t = x(!1);
    return de(() => {
      if (n.fixed_position) {
        let a = "";
        switch (n.fixed_position) {
          case Ne.top:
            a = "has-navbar-fixed-top";
            break;
          case Ne.bottom:
            a = "has-navbar-fixed-bottom";
            break;
        }
        a !== "" && (document.body.classList.contains(a) || document.body.classList.add(a));
      }
    }), (a, l) => (o(), u("nav", {
      class: w(["navbar", n.fixed_position, n.color !== void 0 && n.color !== null ? `is-${n.color}` : ""]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      g("div", yl, [
        N(a.$slots, "brand"),
        g("a", {
          role: "button",
          class: w(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, l[3] || (l[3] = [
          g("span", { "aria-hidden": "true" }, null, -1),
          g("span", { "aria-hidden": "true" }, null, -1),
          g("span", { "aria-hidden": "true" }, null, -1)
        ]), 10, fl)
      ]),
      g("div", {
        class: w(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.start_items !== void 0 ? (o(), u("div", _l, [
          B(me, {
            promise: n.start_items
          }, {
            default: z(({ response: s }) => [
              (o(!0), u(P, null, W(s, (r) => (o(), C(st, G({ ref_for: !0 }, r, {
                onItemClicked: l[1] || (l[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              g("div", kl, [
                B(ue, {
                  size: y(Y).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0),
        n.end_items !== void 0 ? (o(), u("div", Sl, [
          B(me, {
            promise: n.end_items
          }, {
            default: z(({ response: s }) => [
              (o(!0), u(P, null, W(s, (r) => (o(), C(st, G({ ref_for: !0 }, r, {
                onItemClicked: l[2] || (l[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              g("div", Dl, [
                B(ue, {
                  size: y(Y).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0)
      ], 2)
    ], 10, gl));
  }
}), $l = /* @__PURE__ */ M({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("aside", {
      class: w(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Fl = { class: "menu-label" }, Al = /* @__PURE__ */ M({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("p", Fl, [
      K(T(n.message) + " ", 1),
      N(t.$slots, "default")
    ]));
  }
}), Jl = ["href"], wl = {
  key: 0,
  class: "icon-text"
}, Ol = { class: "icon" }, Nl = { key: 1 }, At = /* @__PURE__ */ M({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const n = e, t = () => {
      n.onClick !== void 0 && n.onClick();
    };
    return (a, l) => (o(), u("li", null, [
      g("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: w(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (o(), u("span", wl, [
          g("span", Ol, [
            B(U, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, T(n.title), 1)
        ])) : (o(), u("span", Nl, T(n.title), 1)),
        N(a.$slots, "default")
      ], 10, Jl),
      N(a.$slots, "children")
    ]));
  }
}), Tl = { class: "menu-list" }, Pl = /* @__PURE__ */ M({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = it("menu-list", !0);
      return o(), u("ul", Tl, [
        n.items !== null ? (o(), C(me, {
          key: 0,
          promise: n.items
        }, {
          default: z(({ response: s }) => [
            (o(!0), u(P, null, W(s, (r) => (o(), u("li", null, [
              B(At, G({ ref_for: !0 }, r), null, 16),
              r.childItems !== void 0 ? (o(), C(l, {
                key: 0,
                items: r.childItems
              }, null, 8, ["items"])) : A("", !0)
            ]))), 256))
          ]),
          pending: z(() => [
            g("li", null, [
              B(ue, {
                size: y(Y).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : A("", !0),
        N(t.$slots, "default")
      ]);
    };
  }
}), xl = /* @__PURE__ */ M({
  __name: "badge",
  props: {
    position: { default: Ke.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("span", {
      class: w(["badge", `is-${n.position}`, n.type === void 0 ? "" : `is-${n.type}`])
    }, [
      K(T(n.text) + " ", 1),
      N(t.$slots, "default")
    ], 2));
  }
}), Jt = /* @__PURE__ */ M({
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
    const n = e;
    return (t, a) => (o(), C(ce(n.is), {
      class: w([
        n.has_arrow ? "has-tooltop-arrow" : "",
        n.position ? `has-tooltip-${n.position}` : "",
        n.multiline ? "has-tooltip-multiline" : "",
        n.type ? `has-tooltip-${n.type}` : "",
        n.text_align ? `has-tooltip-text-${n.text_align}` : "",
        n.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: z(() => [
        N(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Bl = /* @__PURE__ */ M({
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
    const n = e, t = _(() => {
      let a = ["tag", `is-${n.type}`, `is-${n.size}`];
      return n.light && a.push("is-light"), n.rounded && a.push("is-rounded"), n.is_delete && a.push("is-delete"), a;
    });
    return (a, l) => (o(), u("span", {
      class: w(t.value)
    }, [
      N(a.$slots, "default", {}, () => [
        K(T(n.text), 1)
      ])
    ], 2));
  }
}), El = /* @__PURE__ */ M({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("span", {
      class: w(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: kt,
  Badge: xl,
  Button: X,
  ButtonAdd: $a,
  ButtonCancel: St,
  ButtonDelete: Fa,
  ButtonDisable: Aa,
  ButtonDownload: Ja,
  ButtonEdit: wa,
  ButtonEnable: Oa,
  ButtonOkay: Dt,
  ButtonPrint: Na,
  ButtonRefresh: Mt,
  ButtonSave: Ta,
  ButtonUpload: Pa,
  ButtonsContainer: xa,
  CheckMark: Ba,
  DropDown: Ra,
  DynamicSlot: Ua,
  Filter: $t,
  Icon: U,
  Menu: $l,
  MenuEntry: At,
  MenuLabel: Al,
  MenuList: Pl,
  Message: qa,
  NavBar: Ml,
  Notification: he,
  PageNotification: tl,
  Pagination: Ft,
  Progress: ue,
  Promised: me,
  Tag: Bl,
  Tags: El,
  ToolTip: Jt
}, Symbol.toStringTag, { value: "Module" })), Ll = /* @__PURE__ */ M({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = x(!1), s = x(!1), r = x(null), i = _(() => (a.disabled ?? !1) || s.value && a.handle_search !== null), c = _(() => {
      let h = [];
      return i || h.push("has-cursor"), l.value ? h.push("is-move") : h.push("is-grab"), h;
    }), d = (h) => i.value ? (h.preventDefault(), !1) : (h.stopPropagation(), h.dataTransfer.setData("value", JSON.stringify(a.copy_data)), l.value = !0, t("started"), !0), m = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return de(() => {
      if (a.handle_search) {
        let h = $(r.value).find(a.handle_search);
        h.length > 0 && (s.value = !0, h.on("mousedown", () => s.value = !1), h.on("mouseup", () => s.value = !0));
      }
    }), (h, v) => (o(), C(ce(a.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: d,
      onDragend: m,
      class: w(c.value)
    }, {
      default: z(() => [
        N(h.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), zl = /* @__PURE__ */ M({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = x(!1), s = x(null), r = x(null);
    _(() => t.tag ?? "div");
    const i = (v) => {
      const p = r.value.getBoundingClientRect(), f = {
        x: p.x + p.width / 2,
        y: p.y + p.height / 2
      };
      let b = te.center;
      return v.x < f.x ? v.y < f.y ? b = te.topLeft : b = te.bottomLeft : v.y < f.y ? b = te.topRight : b = te.bottomRight, s.value = b, s.value;
    }, c = (v) => {
      v.preventDefault(), l.value = !0, a("itemEntered", i(v));
    }, d = (v) => {
      l.value = !0, a("itemExited", i(v));
    }, m = (v) => {
      v.preventDefault(), a("itemMoved", i(v));
    }, h = (v) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(v.dataTransfer.getData("value"))))
        return !1;
      v.stopPropagation(), v.preventDefault(), a("itemAdded", JSON.parse(v.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (v, p) => (o(), C(ce(t.tag), {
      ref_key: "handle",
      ref: r,
      class: w({ "is-bordered": l.value }),
      onDragenter: c,
      onDragleave: d,
      onDrop: h,
      onDragover: m
    }, {
      default: z(() => [
        N(v.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Il = ["onClick"], Wl = {
  key: 0,
  class: "icon"
}, wt = /* @__PURE__ */ M({
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
    const n = e, t = oe(), a = _(() => {
      var r = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && r.push("is-small"), n.outlined && r.push("is-outlined"), n.highlighted && r.push("is-highlighted"), r;
    }), l = _(() => n.items ? n.items.map((r, i) => ({
      name: r.name ?? `item-${i}`,
      classes: [
        r.type ? `is-${r.type}` : "",
        r.outlined ? "is-outlined" : "",
        r.highlighted ? "is-highlighted" : "",
        r.icon ? "has-icon" : "",
        r.onClick ? "is-clickable" : ""
      ],
      onClick: r.onClick,
      icon: r.icon
    })) : null), s = (r) => {
      r.onClick && r.onClick();
    };
    return (r, i) => (o(), C(ce(r.numbered == null || r.numbered == null || !r.numbered ? "ul" : "ol"), {
      class: w(a.value)
    }, {
      default: z(() => [
        l.value === null ? N(r.$slots, "default", { key: 0 }) : (o(!0), u(P, { key: 1 }, W(l.value, (c) => (o(), u(P, null, [
          y(t)[c.name] !== void 0 || y(t)[c.name] !== null || c.icon !== void 0 ? (o(), u("li", {
            key: 0,
            class: w(c.classes),
            onClick: (d) => s(c)
          }, [
            c.icon ? (o(), u("span", Wl, [
              B(U, {
                icon: c.icon
              }, null, 8, ["icon"])
            ])) : A("", !0),
            N(r.$slots, c.name)
          ], 10, Il)) : A("", !0)
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vl = ["onDragstart", "onDragover"], Rl = /* @__PURE__ */ M({
  __name: "sortable",
  props: {
    items: {},
    type: { default: Q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = x([]), s = x(-1), r = x(-1), i = x(null);
    R(t.items, (v, p) => {
      l.value = [...p];
    }), de(() => {
      t.items !== null && (l.value = [...t.items]);
    });
    const c = (v) => {
      var p = v.target.getBoundingClientRect(), f = {
        x: p.x + p.width / 2,
        y: p.y + p.height / 2
      };
      let b = te.center;
      return v.y < f.y ? b = te.top : b = te.bottom, b;
    }, d = (v, p) => {
      p.stopPropagation(), s.value = v, p.dataTransfer.setData("value", null);
    }, m = (v, p) => {
      s.value && (p.stopPropagation(), v != s.value ? (r.value = v, i.value = c(p)) : (r.value = -1, i.value = null));
    }, h = (v) => {
      if (s.value) {
        v.stopPropagation();
        var p = r.value + (i.value == te.top ? 0 : 1), f = l.value.splice(p, 1)[0];
        p >= s.value && p--, l.value.splice(p, 0, f), r.value = -1, i.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (v, p) => (o(), C(wt, {
      type: v.type,
      compact: v.compact,
      outlined: v.outlined,
      highlighted: v.highlighted,
      onDrop: h
    }, {
      default: z(() => [
        (o(!0), u(P, null, W(l.value, (f, b) => (o(), u(P, null, [
          j(g("li", null, [
            B(he, { light: !0 }, {
              default: z(() => p[1] || (p[1] = [
                K(" ")
              ])),
              _: 1
            })
          ], 512), [
            [ne, r.value === b && s.value !== b && i.value === y(te).top]
          ]),
          g("li", {
            draggable: "true",
            onDragstart: (k) => d(b, k),
            onDragend: p[0] || (p[0] = (k) => s.value = null),
            onDragover: (k) => m(b, k),
            class: w({ "has-cursor": !0, "is-move": r.value == b, "is-grab": r.value != b })
          }, [
            N(v.$slots, "item", {
              item: f,
              index: b
            })
          ], 42, Vl),
          j(g("li", null, [
            B(he, { light: !0 }, {
              default: z(() => p[2] || (p[2] = [
                K(" ")
              ])),
              _: 1
            })
          ], 512), [
            [ne, r.value === b && s.value !== b && i.value === y(te).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Ll,
  DropZone: zl,
  Sortable: Rl
}, Symbol.toStringTag, { value: "Module" })), Be = "HiddenFields", Ze = "DisabledFields", jl = (e) => e, ie = (e, n) => {
  const t = n("Translate", jl);
  return _(() => e.translate ?? t);
};
function Qe(e, n) {
  const t = n(Be), a = n(Ze), l = _(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), s = _(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
async function Xe(e) {
  let n = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? n = t : n = Promise.resolve(t);
  let a = await n, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Gl = { class: "control" }, Hl = { class: "tags has-addons" }, Kl = { class: "tag is-link" }, Yl = ["onClick"], ql = { key: 0 }, Zl = ["placeholder"], Ql = { class: "dropdown-menu" }, Xl = { class: "dropdown-content" }, en = ["onClick"], tn = {
  key: 1,
  class: "dropdown-item"
}, Ot = /* @__PURE__ */ M({
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
  setup(e, { expose: n, emit: t }) {
    const a = t, l = e, s = ie(l, L), r = x([]), i = x(null), c = x(null), d = x(null), m = x(null);
    R(i, async (O) => {
      if (O != null) {
        if (O.length >= 2)
          if (l.values != null && l.values != null) {
            let D = [];
            for (let I = 0; I < l.values.length && ((l.values[I].name.toUpperCase().indexOf(O.toUpperCase()) >= 0 || l.values[I].id.toUpperCase().indexOf(O.toUpperCase()) >= 0) && D.push(l.values[I]), D.length != 10); I++)
              ;
            c.value = D;
          } else {
            let I = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(O)}`)).json();
            I.length > 10 && I.splice(10, I.length - 10), c.value = I;
          }
      } else
        c.value = null, $(m.value).empty();
    });
    const h = () => {
      if (r.value.length == 0)
        return null;
      const O = r.value.slice();
      return l.limit != null && l.limit == 1 ? O.length > 0 ? O[0] : null : O;
    }, v = async (O) => {
      if (O == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), i.value = null;
      else {
        const D = await Promise.all(
          (Array.isArray(O) ? O : [O]).map(async (I) => {
            if (I.id !== void 0 && I.name !== void 0)
              return I;
            {
              let J = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${I.id === void 0 ? "q=" + encodeURIComponent(I) : "id=" + encodeURIComponent(I.id)}`)).json();
              return J.length > 0 ? (l.disabled && (J[0].readonly = !0), J[0]) : null;
            }
          })
        );
        r.value = D.filter((I) => I !== null), a("valueChanged", { name: l.name, value: h() });
      }
    }, p = (O) => {
      O.preventDefault(), i.value = O.clipboardData.getData("text/plain");
    }, f = (O) => {
      switch (O.key) {
        case "Backspace":
          i.value != null && i.value.length > 0 && (i.value = i.value.substring(0, i.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          O.key.length == 1 && (i.value = (i.value == null ? "" : i.value) + O.key);
          break;
      }
    }, b = () => {
      i.value = null;
    }, k = () => {
      m.value.focus();
    }, F = (O) => {
      r.value.push(O), b(), a("valueChanged", { name: l.name, value: h() });
    }, S = (O) => {
      r.value.splice(O, 1), k(), a("valueChanged", { name: l.name, value: h() });
    };
    return n({
      /**
       * Gets the current value 
       */
      getValue: h,
      /**
       * Sets the current value
       * 
       * @param value AutoCompleteItem|AutoCompleteItem[]|string[]|null
       * @returns Promise<void>
       */
      setValue: v
    }), (O, D) => (o(), u("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: k
    }, [
      g("div", {
        class: w(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", l.disabled ? "is-disabled" : ""])
      }, [
        (o(!0), u(P, null, W(r.value, (I, ye) => (o(), u("div", Gl, [
          g("div", Hl, [
            g("a", Kl, T(y(s)(I.name)), 1),
            !I.readonly && !l.disabled ? (o(), u("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (J) => S(ye)
            }, null, 8, Yl)) : A("", !0)
          ])
        ]))), 256)),
        l.disabled ? A("", !0) : (o(), u("div", ql, [
          j(g("span", {
            ref_key: "contentSpan",
            ref: m,
            placeholder: y(s)(l.title ?? ""),
            contenteditable: "",
            class: w(d.value),
            onFocus: D[0] || (D[0] = (I) => {
              d.value = "is-focused";
            }),
            onBlur: D[1] || (D[1] = (I) => {
              d.value = null;
            }),
            onKeydown: f,
            onPaste: p
          }, null, 42, Zl), [
            [ne, r.value.length < l.limit || l.limit == null]
          ])
        ]))
      ], 2),
      l.disabled ? A("", !0) : (o(), u("div", {
        key: 0,
        class: w(["dropdown", { "is-active": c.value != null && i.value != null && i.value != "" }])
      }, [
        g("div", Ql, [
          g("div", Xl, [
            c.value != null && c.value.length > 0 ? (o(!0), u(P, { key: 0 }, W(c.value, (I) => (o(), u("a", {
              class: "dropdown-item",
              onClick: (ye) => F(I)
            }, T(y(s)(I.name)), 9, en))), 256)) : (o(), u("a", tn, "No Results"))
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = ie(t, L);
    return (s, r) => (o(), C(X, {
      class: "button",
      type: t.sstyle,
      icon: t.icon ? t.icon : null,
      title: y(l)(t.label),
      onClick: r[0] || (r[0] = (i) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), an = { class: "checkbox is-block" }, ln = ["value", "disabled"], Nt = /* @__PURE__ */ M({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = q(L), s = _(() => V("Form.Error", l)), r = t, i = ie(a, L), c = x([]), d = x(!1), m = _(async () => {
      if (a.values == null)
        return [];
      {
        let b = await Xe(a.values), k = b.filter((F) => F.selected).map((F) => F.value);
        return c.value === null || c.value.length == 0 ? c.value = k.length > 0 ? [...k] : [] : (k = c.value, b = b.map((F) => ({
          label: F.label,
          value: F.value,
          selected: k.some((S) => S === F.value)
        }))), b;
      }
    });
    R(c, (b) => {
      r("valueChanged", { name: a.name, value: h() });
    });
    const h = () => c.value.length == 0 ? null : c.value, v = (b) => {
      d.value = !0, c.value.splice(0), b !== null && (c.value = [...b]), d.value = !1, r("valueChanged", { name: a.name, value: h() });
    }, { hiddenValues: p, disabledValues: f } = Qe(a.name, L);
    return n({
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
    }), (b, k) => (o(), u("div", null, [
      B(me, { promise: m.value }, {
        default: z(({ response: F }) => [
          F !== null ? (o(!0), u(P, { key: 0 }, W(F, (S) => j((o(), u("label", an, [
            j(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: S.value,
              "onUpdate:modelValue": k[0] || (k[0] = (O) => c.value = O),
              disabled: a.disabled || y(f).some((O) => O === S.value.toString())
            }, null, 8, ln), [
              [Re, c.value]
            ]),
            K(" " + T(y(i)(S.label)), 1)
          ], 512)), [
            [ne, !y(p).some((O) => O === S.value.toString())]
          ])), 256)) : A("", !0)
        ]),
        pending: z(() => [
          B(y(ue))
        ]),
        rejected: z(() => [
          B(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), nn = { class: "checkbox" }, sn = ["name", "disabled"], rn = {
  key: 0,
  class: "help is-danger"
}, Tt = /* @__PURE__ */ M({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ie(a, L), r = _(() => s.value(a.label)), i = x(!1);
    return R(i, (m) => l("valueChanged", { name: a.name, value: m })), n({
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
      setValue: (m) => {
        i.value = m;
      }
    }), (m, h) => (o(), u("label", nn, [
      j(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": h[0] || (h[0] = (v) => i.value = v)
      }, null, 8, sn), [
        [Re, i.value]
      ]),
      K(" " + T(r.value) + " ", 1),
      a.required ? (o(), u("span", rn, "*")) : A("", !0)
    ]));
  }
}), ze = (e, n) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + n), t;
}, Z = (e, n, t) => {
  let a = e;
  for (; a.length < t; )
    a = n + a;
  return a;
}, $e = (e, n, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${Z(t.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let s = "";
      switch (t.getDay()) {
        case 0:
          s = "Sunday";
          break;
        case 1:
          s = "Monday";
          break;
        case 2:
          s = "Tuesday";
          break;
        case 3:
          s = "Wednesday";
          break;
        case 4:
          s = "Thursday";
          break;
        case 5:
          s = "Friday";
          break;
        case 6:
          s = "Saturday";
          break;
      }
      a += `${V("Date.Weekdays." + (e.length > 3 ? s : s.substring(0, 3)), n)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      a += `${Z(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : Z(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${Z((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${Z(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let r = t.getTimezoneOffset() * -1, i = parseInt((r / 60).toFixed(0)), c = r - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${Z(Math.abs(i).toString(), "0", 2) + ":" + Z(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${i < 0 ? "-" : "+"}${Z(Math.abs(i).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${Z(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${Z((t.getMonth() + 1).toString(), "0", e.length)}`;
      break;
    case "MMM":
    case "MMMM":
      let d = "";
      switch (t.getMonth()) {
        case 0:
          d = "January";
          break;
        case 1:
          d = "February";
          break;
        case 2:
          d = "March";
          break;
        case 3:
          d = "April";
          break;
        case 4:
          d = "May";
          break;
        case 5:
          d = "June";
          break;
        case 6:
          d = "July";
          break;
        case 7:
          d = "August";
          break;
        case 8:
          d = "September";
          break;
        case 9:
          d = "October";
          break;
        case 10:
          d = "November";
          break;
        case 11:
          d = "December";
          break;
      }
      a += `${V("Date.Months." + (e.length > 3 ? d : d.substring(0, 3)), n)}`;
      break;
    case "s":
    case "ss":
      a += `${Z(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var l = t.getFullYear().toString(); l.length > 2; )
        l = l.substring(1);
      a += `${Z(l.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${Z(t.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      a += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return a;
}, fe = (e, n, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let a = "", l = "";
  for (var s = 0; s < t.length; s++)
    switch (t.charAt(s)) {
      case "\\":
        l != "" && (a += $e(l, n, e), l = ""), a += t.charAt(s + 1), s++;
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
        l != "" && l.charAt(0) != t.charAt(s) ? (a += $e(l, n, e), l = "") : l += t.charAt(s);
        break;
      default:
        l != "" && (a += $e(l, n, e), l = ""), a += t.charAt(s);
        break;
    }
  return l != "" && (a += $e(l, n, e), l = ""), a;
}, on = { class: "control" }, un = ["name", "id", "disabled"], rt = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), et = /* @__PURE__ */ M({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null), r = _(() => {
      if (s.value == null || s.value == "")
        return null;
      var d = Number(s.value.substring(3, 5)), m = Number(s.value.substring(0, 2)) % 12 + d / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * d / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * m / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return R(s, (d) => {
      l("valueChanged", { name: a.name, value: d });
    }), n({
      /**
       * Gets the current value 
       */
      getValue: () => s.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (d) => {
        if (d != null && rt.test(d)) {
          var m = rt.exec(d);
          d = (m[3] == "AM" ? m[1] : (parseInt(m[1]) + 12).toFixed(0)) + ":" + m[2] + ":00";
        }
        s.value = d;
      }
    }), (d, m) => (o(), u("div", on, [
      j(g("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": m[0] || (m[0] = (h) => s.value = h),
        disabled: a.disabled,
        style: Me(r.value)
      }, null, 12, un), [
        [Se, s.value]
      ])
    ]));
  }
}), dn = { class: "control has-icons-left has-icons-right" }, cn = ["name", "id", "placeholder", "disabled"], pn = { class: "modal-content" }, hn = { class: "panel is-primary is-dateselect" }, mn = { class: "panel-heading" }, bn = { class: "columns card-header-title" }, vn = { class: "column" }, gn = { class: "column has-text-centered" }, yn = { class: "column has-text-right" }, fn = { class: "panel-block" }, _n = { class: "table is-striped has-text-centered" }, kn = ["onClick"], Sn = { key: 0 }, Dn = {
  colspan: "100%",
  class: "has-text-centered"
}, Mn = { class: "panel-block" }, De = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Fe = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Pt = /* @__PURE__ */ M({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = x(null), l = e, s = t, r = x(!1), i = x(null), c = x(null), d = Zt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), m = q(L), h = Je({
      Sun: _(() => V("Date.Weekdays.Sun", m)),
      Mon: _(() => V("Date.Weekdays.Mon", m)),
      Tue: _(() => V("Date.Weekdays.Tue", m)),
      Wed: _(() => V("Date.Weekdays.Wed", m)),
      Thu: _(() => V("Date.Weekdays.Thu", m)),
      Fri: _(() => V("Date.Weekdays.Fri", m)),
      Sat: _(() => V("Date.Weekdays.Sat", m))
    }), v = _(() => i.value !== null && (l.includeTime ? Fe : De).test(i.value)), p = () => {
      if (i.value == null || i.value == "")
        return null;
      {
        if (!Fe.test(i.value) && l.includeTime)
          return null;
        if (!l.includeTime && !De.test(i.value))
          return null;
        if (De.test(i.value) && l.includeTime)
          return null;
        let J = l.includeTime ? Fe.exec(i.value) : De.exec(i.value);
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
    R(i, (J) => {
      if (J == null)
        s("valueChanged", { name: l.name, value: null }), d.Month = (/* @__PURE__ */ new Date()).getMonth(), d.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!De.test(J) && !Fe.test(J)) {
        J = J.replaceAll(/[^0-9]/g, "");
        for (var E = [], H = 0; H < J.length; H += 2)
          H == 4 ? (E.push(J.substring(H, Math.min(J.length - H, 4) + H)), H += 2) : E.push(J.substring(H, Math.min(J.length - H, 2) + H));
        E.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(E[0]) || E.splice(0), E.length > 1 && (/^[0-3]/.test(E[1]) ? /^(01|03|05|07|08|10|12)$/.test(E[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(E[1]) || E.splice(1) : /^(02|04|06|09|11)$/.test(E[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(E[1]) || E.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(E[1]) || E.splice(1) : E.splice(1)), E.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(E[3]) || E.splice(3)), E.length > 4 && (/^[0-5][0-9]?$/.test(E[4]) || E.splice(4))), J = E.join(""), !l.includeTime && J.length > 8 && (J = J.substring(0, 8)), J.length >= 2 && (J = J.substring(0, 2) + "-" + (J.length > 2 ? J.substring(2) : "")), J.length >= 5 && (J = J.substring(0, 5) + "-" + (J.length > 5 ? J.substring(5) : "")), J.length >= 9 && l.includeTime && (J = J.substring(0, 9) + " " + (J.length > 9 ? J.substring(9) : "")), J.length >= 11 && (J = J.substring(0, 11) + ":" + (J.length > 11 ? J.substring(11) : "")), i.value = J;
      } else {
        var se = p();
        v && s("valueChanged", { name: l.name, value: se }), d.Month = se.getMonth(), d.Year = se.getFullYear();
      }
    });
    const f = _(() => fe(new Date(d.Year, d.Month, 1), m, "MMMM")), b = _(() => {
      var J = [], E = new Date(d.Year, d.Month, 1);
      E = ze(E, E.getDay() * -1);
      for (var H = p(), se = ze(new Date(d.Year, d.Month, 1), 32).getMonth(); E.getMonth() != se; ) {
        for (var Ee = [], tt = 0; tt < 7; tt++)
          Ee.push({
            Number: E.getDate(),
            Disabled: E.getMonth() != d.Month,
            isToday: fe(E, m, "yyyy-MM-dd") == fe(/* @__PURE__ */ new Date(), m, "yyyy-MM-dd"),
            isSelected: H != null && fe(E, m, "yyyy-MM-dd") == fe(H, m, "yyyy-MM-dd")
          }), E = ze(E, 1);
        J.push(Ee);
      }
      return J;
    });
    n({
      /**
       * Gets the current value 
       */
      getValue: p,
      /**
       * Sets the current value
       * 
       * @param value Date|null
       * @returns void
       */
      setValue: function(J) {
        J == null ? i.value = null : i.value = fe(J, m, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
      }
    });
    const F = (J) => {
      J.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + J.value : i.value = `${Z((d.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${Z((d.Month + 1).toString(), "0", 2)}-${d.Year} ${J.value}`;
    }, S = (J) => {
      if (!J.Disabled && !J.isSelected)
        if (i.value === null)
          i.value = `${Z(J.Number.toString(), "0", 2)}-${Z((d.Month + 1).toString(), "0", 2)}-${d.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var E = i.value.split(" ");
          E[0] = `${Z(J.Number.toString(), "0", 2)}-${Z((d.Month + 1).toString(), "0", 2)}-${d.Year}`, i.value = `${E[0]}${E.length > 1 ? " " + E[1] : ""}`;
        }
    }, O = () => {
      i.value = c.value, r.value = !1;
    }, D = () => {
      l.disabled || (c.value = i.value, r.value = !0);
    }, I = () => {
      l.disabled || (i.value = null);
    }, ye = (J) => {
      d.Month + J == -1 ? (d.Year = d.Year - 1, d.Month = 11) : d.Month + J == 12 ? (d.Year = d.Year + 1, d.Month = 0) : d.Month += J;
    };
    return (J, E) => (o(), u("div", null, [
      g("div", dn, [
        j(g("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": E[0] || (E[0] = (H) => i.value = H),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, cn), [
          [Se, i.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: D
        }, [
          B(y(U), { icon: "calendar-alt" })
        ]),
        g("span", {
          class: "icon is-small is-right is-clickable",
          onClick: I
        }, [
          B(y(U), { icon: "window-close" })
        ])
      ]),
      g("div", {
        class: w(["modal", { "is-active": r.value }])
      }, [
        E[4] || (E[4] = g("div", { class: "modal-background" }, null, -1)),
        g("div", pn, [
          g("div", hn, [
            g("div", mn, [
              g("div", bn, [
                g("div", vn, [
                  B(y(U), {
                    icon: "arrow-circle-left",
                    onClick: E[1] || (E[1] = (H) => ye(-1))
                  })
                ]),
                g("div", gn, T(f.value) + " " + T(d.Year), 1),
                g("div", yn, [
                  B(y(U), {
                    icon: "arrow-circle-right",
                    onClick: E[2] || (E[2] = (H) => ye(1))
                  })
                ])
              ])
            ]),
            g("div", fn, [
              g("table", _n, [
                g("thead", null, [
                  g("tr", null, [
                    g("th", null, T(y(h).Sun), 1),
                    g("th", null, T(y(h).Mon), 1),
                    g("th", null, T(y(h).Tue), 1),
                    g("th", null, T(y(h).Wed), 1),
                    g("th", null, T(y(h).Thu), 1),
                    g("th", null, T(y(h).Fri), 1),
                    g("th", null, T(y(h).Sat), 1)
                  ])
                ]),
                g("tbody", null, [
                  (o(!0), u(P, null, W(b.value, (H) => (o(), u("tr", null, [
                    (o(!0), u(P, null, W(H, (se) => (o(), u("td", {
                      class: w(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ee) => S(se)
                    }, T(se.Number), 11, kn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (o(), u("tfoot", Sn, [
                  g("tr", null, [
                    g("td", Dn, [
                      B(et, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValueChanged: F
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : A("", !0)
              ])
            ]),
            g("div", Mn, [
              B(y(Dt), {
                addonclass: "card-footer-item",
                disabled: !v.value,
                onClick: E[3] || (E[3] = (H) => r.value = !1)
              }, null, 8, ["disabled"]),
              B(y(St), {
                addonclass: "card-footer-item",
                onClick: O
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
}), xt = /* @__PURE__ */ M({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = ra(L);
    Pe([`${s}summernote-lite.min.css`]), [a, l] = Qt(() => import(`${s}summernote`)), await a, l();
    const r = x(null), i = e, c = t;
    return R(() => i.disabled, (h) => {
      r.value != null && $(r.value).summernote(h ? "disable" : "enable");
    }), n({
      /**
       * Gets the current value 
       */
      getValue: () => $(r.value).summernote("code"),
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (h) => {
        $(r.value).summernote("code", h);
      }
    }), de(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(h) {
            c("valueChanged", { name: i.name, value: h });
          }
        }
      }), (i.disabled ?? !1) && $(r.value).summernote("disable");
    }), Xt(() => {
      $(r.value).summernote("destroy");
    }), (h, v) => (o(), u("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
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
    const n = e, t = ie(n, L);
    return (a, l) => (o(), C(ce(n.subtype), null, {
      default: z(() => [
        K(T(y(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), $n = ["name"], Bt = /* @__PURE__ */ M({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null);
    return R(s, (c) => l("valueChanged", { name: a.name, value: c })), n({
      /**
       * Gets the current value 
       */
      getValue: () => s.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (c) => {
        s.value = c;
      }
    }), (c, d) => j((o(), u("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": d[0] || (d[0] = (m) => s.value = m)
    }, null, 8, $n)), [
      [Se, s.value]
    ]);
  }
}), Fn = ["name", "disabled", "min", "max", "step"], Et = /* @__PURE__ */ M({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null), r = () => {
      if (s.value === "")
        return null;
      let c = parseInt(s.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, i = (c) => {
      s.value = c === null ? "" : c.toString();
    };
    return R([s], (c) => l("valueChanged", { name: a.name, value: r() })), n({
      /**
       * Gets the current value 
       */
      getValue: r,
      /**
       * Sets the current value
       * 
       * @param value number|string|null
       * @returns void
       */
      setValue: i
    }), (c, d) => j((o(), u("input", {
      type: "number",
      class: "input",
      name: c.name,
      "onUpdate:modelValue": d[0] || (d[0] = (m) => s.value = m),
      disabled: c.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, Fn)), [
      [Se, s.value]
    ]);
  }
}), An = ["id"], Ve = /* @__PURE__ */ M({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const n = e, t = ie(n, L);
    return (a, l) => (o(), u("p", {
      id: n.name
    }, T(y(t)(n.label)), 9, An));
  }
}), Jn = { class: "radio" }, wn = ["name", "value", "disabled"], Ct = /* @__PURE__ */ M({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = q(L), s = _(() => V("Form.Error", l)), r = t, i = ie(a, L), c = x(null), d = function() {
      return c.value;
    };
    R(c, (f) => {
      r("valueChanged", { name: a.name, value: d() });
    });
    const m = _(async () => {
      if (a.values == null)
        return [];
      {
        let f = await Xe(a.values);
        return c.value === null && f.some((b) => b.selected) && (c.value = f.find((b) => b.selected).value), f.map((b) => ({
          label: b.label,
          value: b.value,
          selected: c.value === b.value
        }));
      }
    }), h = (f) => {
      c.value = f;
    }, { hiddenValues: v, disabledValues: p } = Qe(a.name, L);
    return n({
      /**
       * Gets the current value 
       */
      getValue: d,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: h
    }), (f, b) => (o(), u("div", null, [
      B(me, { promise: m.value }, {
        default: z(({ response: k }) => [
          f.values != null ? (o(!0), u(P, { key: 0 }, W(k, (F) => (o(), u(P, null, [
            j(g("label", Jn, [
              g("input", {
                type: "radio",
                name: a.name,
                value: F.value,
                class: "radio",
                disabled: a.disabled || y(p).some((S) => S === F.value.toString())
              }, null, 8, wn),
              K(" " + T(y(i)(F.label)), 1)
            ], 512), [
              [ne, !y(v).some((S) => S === F.value.toString())]
            ]),
            b[0] || (b[0] = g("br", null, null, -1))
          ], 64))), 256)) : A("", !0)
        ]),
        pending: z(() => [
          B(y(ue))
        ]),
        rejected: z(() => [
          B(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), On = { class: "select" }, Nn = ["id", "name", "multiple", "disabled"], Tn = ["value", "selected", "disabled"], Pn = ["label"], xn = ["value", "selected", "disabled"], Lt = (e, n, t) => {
  let a = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = t.length;
  return t.push(a), n.values.forEach((s) => {
    s.values === void 0 ? a.values.push(s) : t = Lt(a.label, s, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, zt = /* @__PURE__ */ M({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = q(L), s = _(() => V("Form.Error", l)), r = t, i = ie(a, L), c = x(null), d = x(!1), m = _(async () => {
      if (a.values == null)
        return [];
      {
        let b = await Xe(a.values), k = b.filter((S) => S.selected).map((S) => S.value);
        b.some((S) => S.values !== void 0) && b.filter((S) => S.values !== void 0).forEach((S) => {
          k = k.concat(
            S.values.filter((O) => O.selected).map((O) => O.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (b = b.map((S) => {
          let O = S;
          return O.values !== void 0 && (O.values = O.values.map((D) => (D.selected = c.value.some((I) => I === D.value), D))), O;
        }), c.value.forEach((S) => {
          b.some((O) => O.value !== void 0 && O.value === S || O.values !== void 0 && O.values.some((D) => D.value === S)) || b.push({
            label: S,
            value: S
          });
        }));
        let F = [];
        return b.forEach((S) => {
          S.values === void 0 ? F.push(S) : F = Lt(S.label, S, F);
        }), F;
      }
    }), h = () => c.value == null || c.value.length == 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    R(c, () => {
      d.value || r("valueChanged", { name: a.name, value: h() });
    }), R(d, (b) => {
      b || r("valueChanged", { name: a.name, value: h() });
    });
    const v = (b) => {
      d.value = !0, b != null ? a.multiple ? c.value = Array.isArray(b) ? b : [b] : c.value = b : a.multiple ? c.value = [] : c.value = null, d.value = !1;
    }, { hiddenValues: p, disabledValues: f } = Qe(a.name, L);
    return n({
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
    }), (b, k) => (o(), u("div", On, [
      m.value != null ? (o(), C(me, {
        key: 0,
        promise: m.value
      }, {
        default: z(({ response: F }) => [
          j(g("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: w([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": k[0] || (k[0] = (S) => c.value = S),
            disabled: a.disabled
          }, [
            F != null ? (o(!0), u(P, { key: 0 }, W(F, (S) => (o(), u(P, null, [
              S.values == null ? j((o(), u("option", {
                key: 0,
                value: S.value,
                selected: S.selected,
                disabled: y(f).some((O) => O === S.value.toString())
              }, T(y(i)(S.label)), 9, Tn)), [
                [ne, !y(p).some((O) => O === S.value.toString())]
              ]) : A("", !0),
              S.values != null ? (o(), u("optgroup", {
                key: 1,
                label: y(i)(S.label)
              }, [
                (o(!0), u(P, null, W(S.values, (O) => j((o(), u("option", {
                  value: O.value,
                  selected: O.selected,
                  disabled: y(f).some((D) => D === O.value.toString())
                }, T(y(i)(O.label)), 9, xn)), [
                  [ne, !y(p).some((D) => D === O.value.toString())]
                ])), 256))
              ], 8, Pn)) : A("", !0)
            ], 64))), 256)) : A("", !0)
          ], 10, Nn), [
            [ea, c.value]
          ])
        ]),
        pending: z(() => [
          B(y(ue))
        ]),
        rejected: z(() => [
          B(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : A("", !0)
    ]));
  }
}), Bn = { class: "field" }, En = ["id", "name", "disabled"], Cn = ["for"], Ln = {
  key: 0,
  class: "help is-danger"
}, It = /* @__PURE__ */ M({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ie(a, L), r = x(!1);
    return R(r, (d) => l("valueChanged", { name: a.name, value: d })), n({
      /**
       * Gets the current value 
       */
      getValue: () => r.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (d) => {
        r.value = d;
      }
    }), (d, m) => (o(), u("div", Bn, [
      j(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": m[0] || (m[0] = (h) => r.value = h),
        disabled: a.disabled
      }, null, 8, En), [
        [Re, r.value]
      ]),
      g("label", { for: d.name }, [
        K(T(y(s)(a.label)) + " ", 1),
        a.required ? (o(), u("span", Ln, "*")) : A("", !0)
      ], 8, Cn)
    ]));
  }
}), zn = ["type", "name", "disabled", "maxlength"], Wt = /* @__PURE__ */ M({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null);
    return R(s, (c) => l("valueChanged", { name: a.name, value: c })), n({
      /**
       * Gets the current value 
       */
      getValue: () => s.value,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: (c) => {
        s.value = c;
      }
    }), (c, d) => j((o(), u("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": d[0] || (d[0] = (m) => s.value = m)
    }, null, 8, zn)), [
      [ta, s.value]
    ]);
  }
}), In = ["name", "rows", "cols", "maxlength", "disabled"], Vt = 9, _e = String.fromCharCode(Vt), Ae = `
`, Rt = /* @__PURE__ */ M({
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null);
    R(s, (d) => {
      l("valueChanged", { name: a.name, value: d });
    });
    const r = () => s.value, i = (d) => {
      s.value = d;
    };
    n({
      /**
       * Gets the current value 
       */
      getValue: r,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: i
    });
    const c = (d) => {
      if (a.supportsTab) {
        let m = r();
        switch (d.keyCode) {
          case Vt:
            let h = d.target.selectionStart, v = d.target.selectionEnd, p = m.substring(0, h), f = m.length > v ? m.substring(v) : "", b = h == v ? "" : m.substring(h, v);
            if (b.indexOf(`
`) < 0)
              d.shiftKey ? b.startsWith(_e) ? (b = b.substring(1), h--) : p.endsWith(_e) && (p = p.substring(0, p.length - 1), h--) : b = _e + b;
            else {
              let k = !1;
              b.endsWith(Ae) && (k = !0, b = b.substring(0, b.length - 1));
              let F = b.split(Ae);
              b = "", d.shiftKey && p.endsWith(_e) && (p = p.substring(0, p.length - 1), h--), F.forEach((S, O) => {
                d.shiftKey && S.startsWith(_e) ? S = S.substring(1) : d.shiftKey || (S = _e + S), b += S + (O === F.length - 1 ? "" : Ae);
              }), k && (b += Ae);
            }
            return m = p + b + f, h += b.length == 1 ? 1 : 0, v = h + (b.length == 1 ? 0 : b.length), i(m), d.target.selectionStart = h, d.target.selectionEnd = v, d.target.focus(), d.preventDefault != null && d.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (d, m) => j((o(), u("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": m[0] || (m[0] = (h) => s.value = h)
    }, null, 40, In)), [
      [Se, s.value]
    ]);
  }
}), Ut = /* @__PURE__ */ M({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const n = oe(), t = e, a = _(() => {
      let s = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (s = s.concat(t.modifiers.map((r) => `is-${r}`))), s;
    }), l = _(() => t.columns.map((s, r) => {
      let i = [
        "column",
        s.class ?? "",
        s.size ? `is-${s.size}` : "",
        s.offset ? `is-offset-${s.offset}` : ""
      ];
      return s.border && (s.border.some((c) => c === He.all) ? i.push("is-bordered") : s.border.forEach((c) => i.push(`is-bordered-${c}`))), {
        name: s.name ?? `col-${r}`,
        class: i
      };
    }));
    return (s, r) => (o(), u("div", {
      class: w(a.value)
    }, [
      (o(!0), u(P, null, W(l.value, (i) => (o(), u(P, null, [
        y(n)[i.name] ? (o(), u("div", {
          key: 0,
          class: w(i.class)
        }, [
          N(s.$slots, i.name)
        ], 2)) : A("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Wn = (e) => {
  let n = ee.twelve;
  if (e !== void 0)
    switch (e) {
      case 1:
        n = ee.one;
        break;
      case 2:
        n = ee.two;
        break;
      case 3:
        n = ee.three;
        break;
      case 4:
        n = ee.four;
        break;
      case 5:
        n = ee.five;
        break;
      case 6:
        n = ee.six;
        break;
      case 7:
        n = ee.seven;
        break;
      case 8:
        n = ee.eight;
        break;
      case 9:
        n = ee.nine;
        break;
      case 10:
        n = ee.ten;
        break;
      case 11:
        n = ee.eleven;
        break;
      default:
        n = ee.twelve;
        break;
    }
  return n;
}, jt = /* @__PURE__ */ M({
  __name: "inputs-collection",
  props: {
    fields: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = (p) => ({
      size: Wn(p.form_columns),
      class: "field"
    }), l = e, s = t;
    let r = [];
    const i = _(() => {
      let p = [], f = [], b = 0;
      return r = l.fields.map((k, F) => x(null)), l.fields.forEach((k, F) => {
        let S = k.form_columns ?? 12;
        b + S > 12 && (p.push(f), f = [], b = 0), f.push({ ...k, refIndex: F }), b += S, b === 12 && (p.push(f), f = [], b = 0);
      }), f.length > 0 && p.push(f), p;
    }), c = L(Be), d = L(Ze);
    return n({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (p) => {
        r.forEach((f, b) => {
          switch (l.fields[b].type) {
            case "subform":
              f.value.setValue(p);
              break;
            default:
              f.value.setValue !== void 0 && (p === null ? f.value.setValue(null) : Object.keys(p).some((k) => k === f.value.fieldName) ? f.value.setValue(p[f.value.fieldName]) : Object.keys(p).some((k) => k === f.value.altFieldName) && f.value.setValue(p[f.value.altFieldName]));
              break;
          }
        });
      },
      /**
       * Called to get the value of the components in this row.
       * Returns an object where the propertyName are the names of the fields in the subform.
       */
      getValue: () => {
        var p = {};
        return r.forEach((f) => {
          if (f.value.getValue != null)
            switch (f.value.type) {
              case "subform":
                p = $.extend(p, f.value.getValue());
                break;
              default:
                p[f.value.fieldName] = f.value.getValue();
                break;
            }
        }), p;
      },
      /**
       * Called to see if all the copmonents in this row are valid.
       */
      isValid: () => !r.some((p) => !(p.value.isValid === void 0 || p.value.isValid()))
    }), (p, f) => (o(), u("section", null, [
      (o(!0), u(P, null, W(i.value, (b) => (o(), C(Ut, {
        columns: b.map((k) => a(k))
      }, Ue({ _: 2 }, [
        W(b.map((k, F) => ({ input: k, index: F })).filter((k) => !y(c).some((F) => F === k.input.name)), (k) => ({
          name: `col-${k.index}`,
          fn: z(() => [
            B(Ht, {
              ref_for: !0,
              ref: (F) => y(r)[k.input.refIndex].value = F,
              input: k.input,
              onValueChanged: f[0] || (f[0] = (F) => s("valueChanged", F)),
              onButtonClicked: f[1] || (f[1] = (F) => s("buttonClicked", F)),
              disabled: (l.disabled ?? !1) || y(d).some((F) => F === k.input.name)
            }, null, 8, ["input", "disabled"])
          ])
        }))
      ]), 1032, ["columns"]))), 256))
    ]));
  }
}), Vn = { class: "box" }, Gt = /* @__PURE__ */ M({
  __name: "box",
  setup(e) {
    return (n, t) => (o(), u("div", Vn, [
      N(n.$slots, "default")
    ]));
  }
}), Rn = /* @__PURE__ */ M({
  __name: "subform",
  props: {
    fields: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = x(null), r = L(Be), i = _(() => r ? r.some((h) => h === a.name) : !1);
    return n({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (h) => {
        s.value !== null && s.value.setValue(h);
      },
      /**
       * Called to get the value of this of all the components inside this subform.  
       * Returns an object where each propertyName is the name of the field and it's value is the value.
       */
      getValue: () => s.value === null ? null : s.value.getValue(),
      /**
       * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
       */
      isValid: () => s.value === null ? !1 : s.value.isValid()
    }), (h, v) => j((o(), C(Gt, {
      id: a.name,
      name: a.name
    }, {
      default: z(() => [
        B(jt, {
          fields: a.fields,
          ref_key: "inputs",
          ref: s,
          disabled: a.disabled,
          onValueChanged: v[0] || (v[0] = (p) => l("valueChanged", p)),
          onButtonClicked: v[1] || (v[1] = (p) => l("buttonClicked", p))
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
}, Gn = { class: "control" }, Hn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Kn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Ht = /* @__PURE__ */ M({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = x(null), l = t, s = e, r = ie(s, L), i = Je(x(s.input.type)), c = _(() => {
      let D = null;
      switch (s.input.type) {
        case "autocomplete":
          D = Ot;
          break;
        case "button":
          D = Ie;
          break;
        case "checkbox-group":
          D = Nt;
          break;
        case "checkbox":
          D = Tt;
          break;
        case "date":
          D = Pt;
          break;
        case "full-editor":
          D = xt;
          break;
        case "header":
          D = We;
          break;
        case "hidden":
          D = Bt;
          break;
        case "number":
          D = Et;
          break;
        case "paragraph":
          D = Ve;
          break;
        case "radio-group":
          D = Ct;
          break;
        case "select":
          D = zt;
          break;
        case "switch":
          D = It;
          break;
        case "text":
          D = Wt;
          break;
        case "textarea":
          D = Rt;
          break;
        case "time":
          D = et;
          break;
        case "subform":
          D = Rn;
          break;
      }
      return D;
    }), d = function(D) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(D);
    };
    de(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && d(s.input.value);
    });
    const m = _(() => s.input.disabled ?? s.disabled ?? !1);
    _(() => `is-${s.input.form_columns ?? 12}`);
    const h = _(() => s.input.name), v = _(() => s.input.name), p = _(() => Hn.some((D) => D === s.input.type) && s.input.label !== void 0 && s.input.label !== null), f = _(() => {
      let D = $.extend({}, s.input);
      return delete D.type, p.value && delete D.label, D.className != null && delete D.className, D.form_columns != null && delete D.form_columns, Kn.some((I) => I === s.input.type) && (D.translate = s.translate), D.disabled = s.disabled, D;
    }), b = (D) => {
      if (D.value !== void 0 && D.value !== null && Array.isArray(D.value)) {
        let I = [...D.value];
        D.value = I;
      }
      l("valueChanged", D);
    }, k = (D) => {
      l("buttonClicked", D);
    }, F = () => {
      if (a.value != null && a.value.getValue != null) {
        let D = a.value.getValue();
        return D != null && Array.isArray(D) ? [...D] : D;
      }
      return null;
    };
    return n({
      /**
       * Called to set the value for this given form component
       * 
       * @param value any
       */
      setValue: d,
      /**
       * Property that returns the name of this given component
       */
      fieldName: h,
      /**
       * Property that returns the type of form component this is
       */
      type: i,
      /**
       * Property that returns the alternative field name for this component
       */
      altFieldName: v,
      /**
       * Called to get the value of this component.
       * If this is a basic component, it returns that value.
       * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
       */
      getValue: F,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (s.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (s.input.required ?? !1) {
          let D = F();
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
        if (s.input.type === "subform" && a.value !== null)
          a.value.setValues(D);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (D, I) => s.input.type === "header" ? (o(), C(We, {
      key: 0,
      subtype: s.input.subtype,
      label: s.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (o(), C(Ve, {
      key: 1,
      name: s.input.name,
      label: s.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "label"])) : s.input.type == "button" ? (o(), C(Ie, {
      key: 2,
      name: s.input.name,
      sstyle: s.input.style,
      className: s.input.className,
      icon: s.input.icon,
      label: s.input.label,
      disabled: m.value,
      onButtonClicked: k,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (o(), u(P, { key: 3 }, [
      p.value ? (o(), u("label", {
        key: 0,
        class: "label",
        for: s.input.name
      }, [
        K(T(y(r)(s.input.label)) + " ", 1),
        s.input.required ? (o(), u("span", jn, "*")) : A("", !0)
      ], 8, Un)) : A("", !0),
      g("div", Gn, [
        (o(), C(ce(c.value), G(f.value, {
          onValueChanged: b,
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ie(a, L);
    Ce("Translate", (k) => s.value(k));
    const r = x(null), i = () => r.value !== null ? r.value.getValue() : null, c = (k) => {
      r.value !== null && r.value.setValue(k);
    }, d = () => r.value !== null ? r.value.isValid() : !1, m = x([]);
    Ce(Be, Je(m));
    const h = (k) => {
      Array.isArray(k) ? m.value = [...m.value, ...k] : m.value.push(k);
    }, v = (k) => {
      Array.isArray(k) ? m.value = m.value.filter((F) => k.indexOf(F) >= 0) : m.value = m.value.filter((F) => F !== k);
    }, p = x([]);
    return Ce(Ze, Je(p)), n({
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
      isValid: d,
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
      disableField: (k) => {
        Array.isArray(k) ? p.value = [...p.value, ...k] : p.value.push(k);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (k) => {
        Array.isArray(k) ? p.value = p.value.filter((F) => k.indexOf(F) >= 0) : p.value = p.value.filter((F) => F !== k);
      }
    }), (k, F) => (o(), u("form", Yn, [
      B(jt, {
        fields: a.elements,
        ref_key: "inputs",
        ref: r,
        disabled: a.disabled,
        onValueChanged: F[0] || (F[0] = (S) => l("valueChanged", S)),
        onButtonClicked: F[1] || (F[1] = (S) => l("buttonClicked", S))
      }, null, 8, ["fields", "disabled"])
    ]));
  }
}), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Ot,
  Button: Ie,
  Checkbox: Tt,
  CheckboxGroup: Nt,
  ComponentForm: qn,
  DateField: Pt,
  FormComponent: Ht,
  FullEditor: xt,
  Header: We,
  Hidden: Bt,
  NumberField: Et,
  Paragraph: Ve,
  RadioGroup: Ct,
  Select: zt,
  Switch: It,
  Text: Wt,
  TextArea: Rt,
  Time: et
}, Symbol.toStringTag, { value: "Module" })), Qn = { class: "hero-body" }, Xn = { class: "title" }, es = {
  key: 0,
  class: "subtitle"
}, ts = /* @__PURE__ */ M({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("section", {
      class: w(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + n.type])
    }, [
      g("div", Qn, [
        g("p", Xn, T(n.title), 1),
        n.subtitle ? (o(), u("p", es, T(n.subtitle), 1)) : A("", !0)
      ])
    ], 2));
  }
}), as = { key: 0 }, ls = ["onClick"], ns = /* @__PURE__ */ M({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Oe.left },
    size: { default: Y.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, t = _(() => {
      let l = ["breadcrumb"];
      return n.alignment && n.alignment !== Oe.left && l.push(`is-${n.alignment}`), n.size && n.size !== Y.normal && l.push(`is-${n.size}`), n.seperator && l.push(`has-${n.seperator}-seperator`), l;
    }), a = (l) => {
      l !== void 0 && l();
    };
    return (l, s) => (o(), u("nav", {
      class: w(t.value),
      "aria-label": "breadcrumbs"
    }, [
      n.breadCrumbs !== null ? (o(), u("ul", as, [
        (o(!0), u(P, null, W(n.breadCrumbs, (r) => (o(), u("li", {
          class: w({ "is-active": r.active })
        }, [
          g("a", {
            onClick: (i) => a(r.onClick)
          }, [
            r.icon ? (o(), u("span", {
              key: 0,
              class: w(["icon", r.onClick ? "is-clickable" : ""])
            }, [
              B(y(U), {
                icon: r.icon
              }, null, 8, ["icon"])
            ], 2)) : A("", !0),
            K(" " + T(r.title), 1)
          ], 8, ls)
        ], 2))), 256))
      ])) : A("", !0)
    ], 2));
  }
}), ss = {
  key: 0,
  class: "card-icon"
}, rs = { class: "card-icon-wrapper" }, os = {
  key: 1,
  class: "card-header"
}, is = {
  key: 2,
  class: "card-content"
}, us = {
  key: 3,
  class: "card-footer"
}, Kt = /* @__PURE__ */ M({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: {}
  },
  setup(e) {
    const n = oe(), t = e, a = {
      addon_class: "card-footer-item"
    }, l = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (s, r) => (o(), u("div", {
      class: w(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon ? (o(), u("div", ss, [
        g("div", rs, [
          B(U, {
            icon: t.icon,
            size: y(re).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : A("", !0),
      y(n).header ? (o(), u("div", os, [
        N(s.$slots, "header", pe(ge(l)))
      ])) : A("", !0),
      y(n).content ? (o(), u("div", is, [
        N(s.$slots, "content")
      ])) : A("", !0),
      y(n).footer ? (o(), u("div", us, [
        N(s.$slots, "footer", pe(ge(a)))
      ])) : A("", !0)
    ], 2));
  }
}), ds = { class: "footer" }, cs = /* @__PURE__ */ M({
  __name: "footer",
  setup(e) {
    return (n, t) => (o(), u("footer", ds, [
      N(n.$slots, "default")
    ]));
  }
}), ps = { class: "level" }, hs = {
  key: 0,
  class: "level-left"
}, ms = {
  key: 0,
  class: "level-item"
}, bs = {
  key: 0,
  class: "level-item"
}, vs = {
  key: 2,
  class: "level-right"
}, gs = {
  key: 0,
  class: "level-item"
}, ys = /* @__PURE__ */ M({
  __name: "level",
  props: {
    left_slots: {},
    right_slots: {},
    slots: {}
  },
  setup(e) {
    const n = e, t = oe();
    return (a, l) => (o(), u("nav", ps, [
      n.left_slots ? (o(), u("div", hs, [
        (o(!0), u(P, null, W(n.left_slots, (s) => (o(), u(P, null, [
          y(t)[s] ? (o(), u("div", ms, [
            N(a.$slots, s)
          ])) : A("", !0)
        ], 64))), 256))
      ])) : A("", !0),
      n.slots ? (o(!0), u(P, { key: 1 }, W(n.slots, (s) => (o(), u(P, null, [
        y(t)[s] ? (o(), u("div", bs, [
          N(a.$slots, s)
        ])) : A("", !0)
      ], 64))), 256)) : A("", !0),
      n.right_slots ? (o(), u("div", vs, [
        (o(!0), u(P, null, W(n.right_slots, (s) => (o(), u(P, null, [
          y(t)[s] ? (o(), u("div", gs, [
            N(a.$slots, s)
          ])) : A("", !0)
        ], 64))), 256))
      ])) : A("", !0)
    ]));
  }
}), fs = { class: "media" }, _s = {
  key: 0,
  class: "media-left"
}, ks = { class: "media-content" }, Ss = {
  key: 1,
  class: "media-right"
}, Ds = /* @__PURE__ */ M({
  __name: "media",
  setup(e) {
    const n = oe();
    return (t, a) => (o(), u("article", fs, [
      y(n).left_figure ? (o(), u("figure", _s, [
        N(t.$slots, "left_figure")
      ])) : A("", !0),
      g("div", ks, [
        N(t.$slots, "content")
      ]),
      y(n).right_section ? (o(), u("div", Ss, [
        N(t.$slots, "right_section")
      ])) : A("", !0)
    ]));
  }
}), Ms = { class: "modal-content" }, $s = /* @__PURE__ */ M({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, a = n;
    return (l, s) => (o(), u("div", {
      class: w({ modal: !0, "is-active": t.display }),
      style: Me(`z-index:${t.z_index}`)
    }, [
      s[1] || (s[1] = g("div", { class: "modal-background" }, null, -1)),
      g("div", Ms, [
        N(l.$slots, "default")
      ]),
      t.has_close ? (o(), u("button", {
        key: 0,
        class: "modal-close is-large",
        "aria-label": "close",
        onClick: s[0] || (s[0] = (r) => a("close"))
      })) : A("", !0)
    ], 6));
  }
}), Fs = {
  key: 0,
  class: "card-icon"
}, As = { class: "card-icon-wrapper" }, Js = {
  key: 1,
  class: "modal-card-head"
}, ws = {
  key: 2,
  class: "modal-card-body"
}, Os = {
  key: 3,
  class: "modal-card-foot"
}, Ns = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = oe(), a = e, l = n, s = {
      addon_class: "card-footer-item"
    }, r = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-header-icon"
    }, i = _(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, d) => (o(), u("div", {
      class: w(["modal", { "is-active": a.show }])
    }, [
      d[1] || (d[1] = g("div", { class: "modal-background" }, null, -1)),
      g("div", {
        class: w(["modal-card", i.value])
      }, [
        a.icon ? (o(), u("div", Fs, [
          g("div", As, [
            B(U, {
              icon: a.icon,
              size: y(re).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : A("", !0),
        y(t).header ? (o(), u("div", Js, [
          N(c.$slots, "header", pe(ge(r))),
          a.has_close ? (o(), u("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: d[0] || (d[0] = (m) => l("close"))
          })) : A("", !0)
        ])) : A("", !0),
        y(t).content ? (o(), u("div", ws, [
          N(c.$slots, "content")
        ])) : A("", !0),
        y(t).footer ? (o(), u("div", Os, [
          N(c.$slots, "footer", pe(ge(s)))
        ])) : A("", !0)
      ], 2)
    ], 2));
  }
}), Ts = {
  key: 0,
  class: "panel-heading"
}, Ps = {
  key: 1,
  class: "panel-tabs"
}, xs = {
  key: 0,
  class: "panel-block"
}, Bs = /* @__PURE__ */ M({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    hidden_sections: {}
  },
  setup(e) {
    const n = oe(), t = e, a = _(() => t.block_names ?? ["default"]), l = _(() => [
      t.type ? `is-${t.type}` : "",
      t.full_width ? "is-fullwidth" : "",
      t.full_height ? "is-fullheight" : ""
    ]);
    return (s, r) => (o(), u("div", {
      class: w(["panel", l.value])
    }, [
      y(n).header ? j((o(), u("div", Ts, [
        N(s.$slots, "header")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("header")]
      ]) : A("", !0),
      y(n).tabs ? j((o(), u("div", Ps, [
        N(s.$slots, "tabs")
      ], 512)), [
        [ne, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : A("", !0),
      (o(!0), u(P, null, W(a.value, (i) => (o(), u(P, null, [
        y(n)[i] ? j((o(), u("div", xs, [
          N(s.$slots, i)
        ], 512)), [
          [ne, !(t.hidden_sections ?? []).includes(i)]
        ]) : A("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Es = /* @__PURE__ */ M({
  __name: "section",
  props: {
    size: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (o(), u("section", {
      class: w(["section", n.size ? `is-${n.size}` : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Cs = { key: 0 }, Ls = { key: 1 }, zs = { key: 2 }, Yt = /* @__PURE__ */ M({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = oe(), t = e, a = _(() => {
      let s = [];
      return t.scrollable && s.push("table-container"), t.fixed_header && t.scrollable && s.push("is-fixed"), s;
    }), l = _(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return t.fixed_header && !t.scrollable && s.push("is-fixed"), t.full_width && s.push("is-fullwidth"), t.narrow && s.push("is-narrow"), s;
    });
    return (s, r) => (o(), u("div", {
      class: w(a.value)
    }, [
      g("table", {
        class: w(l.value)
      }, [
        y(n).thead ? (o(), u("thead", Cs, [
          N(s.$slots, "thead")
        ])) : A("", !0),
        y(n).tbody ? (o(), u("tbody", Ls, [
          N(s.$slots, "tbody")
        ])) : A("", !0),
        y(n).tfoot ? (o(), u("tfoot", zs, [
          N(s.$slots, "tfoot")
        ])) : A("", !0)
      ], 2)
    ], 2));
  }
}), Is = ["href", "onClick"], Ws = {
  key: 0,
  class: "icon is-small"
}, Vs = { style: { width: "100px" } }, Rs = /* @__PURE__ */ M({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: {},
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const n = e, t = _(() => {
      let l = ["tabs"];
      return n.alignment ? l.push(`is-${n.alignment}`) : l.push("is-left"), n.type && l.push(`is-${n.type}`), n.full_width && l.push("is-fullwidth"), l;
    }), a = (l, s) => {
      (s.href === null || s.href === void 0) && s.onClick !== void 0 && (l.preventDefault(), s.onClick());
    };
    return (l, s) => (o(), u("div", {
      class: w(t.value)
    }, [
      g("ul", null, [
        B(y(me), {
          promise: n.tabs
        }, {
          default: z(({ response: r }) => [
            (o(!0), u(P, null, W(r, (i) => (o(), u("li", {
              class: w({ "is-active": i.active })
            }, [
              g("a", {
                href: i.href,
                onClick: (c) => a(c, i)
              }, [
                i.icon ? (o(), u("span", Ws, [
                  B(y(U), {
                    icon: i.icon
                  }, null, 8, ["icon"])
                ])) : A("", !0),
                g("span", null, T(i.title), 1)
              ], 8, Is)
            ], 2))), 256))
          ]),
          pending: z(() => [
            g("li", Vs, [
              B(y(ue), {
                size: y(Y).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), Us = { class: "slideout-content" }, js = {
  key: 1,
  class: "slideout-head"
}, Gs = { class: "slideout-body" }, Hs = {
  key: 2,
  class: "slideout-foot"
}, Ks = /* @__PURE__ */ M({
  __name: "slideout",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    full_width: { type: Boolean },
    type: {},
    not_animated: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = oe(), a = {
      addon_class: ""
    }, l = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, s = e, r = n, i = _(() => [
      "slideout",
      s.show ? "is-active" : "",
      s.type !== void 0 && s.type !== null ? `is-${s.type}` : "",
      s.full_width ? "is-fullwidth" : "",
      s.not_animated ? "no-animation" : ""
    ]);
    return (c, d) => (o(), u("div", {
      class: w(i.value)
    }, [
      g("div", {
        class: "slideout-background",
        onClick: d[0] || (d[0] = (m) => r("close"))
      }),
      g("div", Us, [
        s.has_close ? (o(), u("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: d[1] || (d[1] = (m) => r("close"))
        })) : A("", !0),
        y(t).header ? (o(), u("div", js, [
          N(c.$slots, "header", pe(ge(l)))
        ])) : A("", !0),
        g("div", Gs, [
          y(t).content ? N(c.$slots, "content", { key: 0 }) : A("", !0),
          N(c.$slots, "default")
        ]),
        y(t).footer ? (o(), u("div", Hs, [
          N(c.$slots, "footer", pe(ge(a)))
        ])) : A("", !0)
      ])
    ], 2));
  }
}), Ys = ["onClick"], qs = { key: 1 }, Zs = { class: "step-details" }, Qs = { class: "step-title" }, Xs = { key: 0 }, er = { class: "steps-content" }, tr = { class: "steps-actions" }, ar = { class: "steps-action" }, lr = { class: "steps-action" }, nr = {
  key: 0,
  class: "steps-action"
}, sr = /* @__PURE__ */ M({
  __name: "step-wizard",
  props: {
    steps: {},
    use_previous_next: { type: Boolean, default: !0 },
    size: { default: Y.normal },
    starting_index: {},
    orientation: { default: Te.default }
  },
  emits: ["done", "changedStep"],
  setup(e, { expose: n, emit: t }) {
    const a = oe(), l = q(L), s = _(() => V("Pagination.Previous", l)), r = _(() => V("Pagination.Next", l)), i = _(() => V("Wizard.Done", l)), c = e, d = t, m = x(c.starting_index ?? 0);
    return R(m, (h, v) => {
      d("changedStep", h);
    }), n({
      /**
       * Used to move to a given step in the wizard
       * 
       * @param index the step index to move to
       */
      moveToStep: (h) => {
        m.value = h;
      }
    }), (h, v) => (o(), u("div", {
      class: w(["steps-container", c.orientation === y(Te).default ? "" : `${c.orientation}`])
    }, [
      g("ul", {
        class: w(["steps", c.size === y(Y).normal ? "" : `is-${c.size}`])
      }, [
        (o(!0), u(P, null, W(c.steps, (p, f) => (o(), u("li", {
          class: w(["step-item", f < m.value ? "is-completed" : "", f === m.value ? "is-active" : "", p.type ? `is-${p.type}` : ""])
        }, [
          g("div", {
            class: "step-marker is-clickable",
            onClick: (b) => d("changedStep", f)
          }, [
            p.icon ? (o(), C(U, {
              key: 0,
              icon: p.icon
            }, null, 8, ["icon"])) : (o(), u("span", qs, T(f + 1), 1))
          ], 8, Ys),
          g("div", Zs, [
            g("p", Qs, T(p.title), 1),
            p.description ? (o(), u("p", Xs, T(p.description), 1)) : A("", !0)
          ])
        ], 2))), 256))
      ], 2),
      g("div", er, [
        (o(!0), u(P, null, W(h.steps, (p, f) => (o(), u(P, null, [
          y(a)[p.name] ? (o(), u("div", {
            key: 0,
            class: w(["step-content", f === m.value ? "is-active" : ""])
          }, [
            N(h.$slots, p.name)
          ], 2)) : A("", !0)
        ], 64))), 256))
      ]),
      g("div", tr, [
        c.use_previous_next ? (o(), u(P, { key: 0 }, [
          g("div", ar, [
            B(X, {
              title: s.value,
              disabled: m.value === 0,
              onClick: v[0] || (v[0] = () => {
                m.value--;
              })
            }, null, 8, ["title", "disabled"])
          ]),
          g("div", lr, [
            B(X, {
              title: r.value,
              disabled: c.steps[m.value].is_valid ?? !0,
              onClick: v[1] || (v[1] = () => {
                m.value++;
              })
            }, null, 8, ["title", "disabled"])
          ]),
          m.value + 1 < c.steps.length ? (o(), u("div", nr, [
            B(X, {
              title: i.value,
              disabled: c.steps[m.value].is_valid ?? !0,
              onClick: v[2] || (v[2] = () => {
                d("done");
              })
            }, null, 8, ["title", "disabled"])
          ])) : A("", !0)
        ], 64)) : (o(), u(P, { key: 1 }, [
          y(a).actions ? N(h.$slots, "actions", { key: 0 }) : A("", !0),
          (o(!0), u(P, null, W(h.steps, (p, f) => (o(), u(P, null, [
            y(a)[`actions-${p.name}`] && f === m.value ? N(h.$slots, `actions-${p.name}`, { key: 0 }) : A("", !0)
          ], 64))), 256))
        ], 64))
      ])
    ], 2));
  }
}), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ts,
  Box: Gt,
  Breadcrumbs: ns,
  Card: Kt,
  ColumnContainer: Ut,
  Footer: cs,
  Level: ys,
  List: wt,
  Media: Ds,
  Modal: $s,
  ModalCard: Ns,
  Panel: Bs,
  Section: Es,
  Slideout: Ks,
  StepWizard: sr,
  Table: Yt,
  Tabs: Rs
}, Symbol.toStringTag, { value: "Module" })), ot = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Pe(`${ot.substring(0, ot.lastIndexOf("/"))}/vibrantvue.css`);
const or = Object.values(qe).filter((e, n, t) => t.indexOf(e) === n), ir = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: or,
  setSkin: ir
}, Symbol.toStringTag, { value: "Module" })), dr = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = `${ua(L)}chart.umd.min.js`, a = x(null), l = e, s = n;
    let r = null;
    const i = () => {
      r != null && r.update();
    }, c = _(() => {
      var d = "";
      return l.width && (d = `width:${l.width}px;`), l.height && (d += `height:${l.height}px;`), d;
    });
    return R(() => l.type, (d) => {
      r != null && (r.type = d ?? "line");
    }), R(
      () => l.labels,
      (d) => {
        r != null && (r.data.labels = d, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), R(
      () => l.datasets,
      (d) => {
        r != null && (r.data.datasets = d, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), de(async () => {
      let d = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legend_position}`,
            labels: {
              filter: (h, v) => h.text != null
            },
            onClick: function(h, v) {
              s("legendItemClick", r, v);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (d.scales = l.scales), l.tooltips != null && l.tooltips != null && (d.tooltips = l.tooltips);
      const { Chart: m } = await je(t, ["Chart"]);
      r = new m(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: d
      }), r.update();
    }), (d, m) => (o(), C(Kt, null, Ue({
      content: z(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Me(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: z((h) => [
          g("h3", {
            class: w(h.header_class)
          }, T(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.show_refresh != null && l.show_refresh != null && l.show_refresh ? {
        name: "footer",
        fn: z((h) => [
          B(Mt, {
            class: w(h.addon_class),
            onClick: i
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), cr = /* @__PURE__ */ M({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = `${da(L)}src-noconflict/ace.js`, l = e, s = t, r = x(null), i = x(null), c = function() {
      return i.value.getValue() == "" ? null : i.value.getValue();
    }, d = function(h) {
      i.value.setValue(h ?? "");
    };
    R(() => l.readonly, (h) => {
      i.value.setReadOnly(h == null || h == null ? !1 : h);
    }), R(() => l.value, (h) => {
      d(h);
    }), R(() => l.language, (h) => {
      i.value.getSession().setMode(h);
    });
    const m = _(() => {
      let h = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let v = 0; v < l.autocompletes.length; v++)
          l.autocompletes[v].method.indexOf(".") >= 0 ? h = Math.min(h, l.autocompletes[v].method.indexOf(".")) : h = Math.min(h, l.autocompletes[v].method.length);
        if (h > 3 && l.autocompletes.length > 0) {
          let v = !0, p = l.autocompletes[0].method.substring(0, 3);
          for (let f = 0; f < l.autocompletes.length; f++)
            if (l.autocompletes[f].method.substring(0, 3) != p) {
              v = !1;
              break;
            }
          v && (h = 3);
        }
      }
      return h;
    });
    return n({
      /**
       * Gets the current value 
       */
      getValue: c,
      /**
       * Sets the current value
       * 
       * @param value string|null
       */
      setValue: d
    }), de(async () => {
      const { ace: h } = await je(a, ["ace"]);
      i.value = aa(h.edit(r.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), i.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && i.value.setValue(l.value), i.value.on("change", () => s("valueChanged", c())), l.autocompletes !== null && l.autocompletes !== void 0 && (i.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), i.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(v, p, f, b, k) {
          var F = [];
          if (b = b.toUpperCase(), b.length >= m && (F = l.autocompletes.filter((S) => S.method.toUpperCase().startsWith(b) && S.method.length > b.legend).map((S) => ({
            caption: S.method + (S.description === null || S.description === void 0 ? "" : "->" + S.description),
            value: S.method,
            meta: "autos"
          }))), F.length === 0) {
            k(null, []);
            return;
          }
          k(null, F.map(function(S) {
            return S;
          }));
        }
      }]);
    }), (h, v) => (o(), u("div", {
      class: "editor",
      ref_key: "container",
      ref: r
    }, null, 512));
  }
}), pr = { key: 0 }, hr = { colspan: "100%" }, mr = ["colspan", "rowspan"], br = ["onClick"], vr = { class: "icon" }, gr = { key: 0 }, yr = { colspan: "100%" }, fr = ["colspan", "rowspan", "onClick"], _r = { key: 1 }, kr = { colspan: "100%" }, Sr = /* @__PURE__ */ M({
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
  setup(e, { emit: n }) {
    const t = oe(), a = e, l = n, s = {
      scrollable: a.scrollable,
      fixed_header: a.fixed_header,
      full_width: a.full_width,
      narrow: a.narrow
    }, r = {
      use_next: a.use_next,
      has_more: a.has_more,
      has_previous: a.has_previous,
      size: a.size,
      rounded: a.rounded,
      button_type: a.button_type,
      total_pages: a.total_pages,
      current_page: a.current_page
    }, i = _(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && ae(a.total_pages) > 1)), c = _(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((v) => v.map((p) => a.columns.filter((f) => f.some((b) => b.id === p))[0].find((f) => f.id === p)))), d = (v) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === v ? l("sort", {
        column: v,
        ascending: !a.current_sort.ascending
      }) : l("sort", {
        column: v,
        ascending: !0
      });
    }, m = (v, p) => {
      if (a.getRowColor) {
        let f = a.getRowColor(v, p);
        if (f)
          return `is-${f}`;
      }
      return null;
    }, h = (v, p, f, b) => {
      let k = "";
      if ((p.cellClass || p.getCellColor) && (p.cellClass && (k += `${p.cellClass}`), p.getCellColor)) {
        let F = p.getCellColor(v, f, b);
        F && (k += ` is-${F}`);
      }
      return k === "" ? null : k;
    };
    return (v, p) => (o(), C(Yt, pe(ge(s)), Ue({
      thead: z(() => [
        a.has_filter ?? !1 ? (o(), u("tr", pr, [
          g("th", hr, [
            B($t, {
              onFilter: p[0] || (p[0] = (f) => l("filter", f))
            })
          ])
        ])) : A("", !0),
        (o(!0), u(P, null, W(a.columns, (f) => (o(), u("tr", null, [
          (o(!0), u(P, null, W(f, (b) => (o(), u("th", {
            colspan: b.headerColspan,
            rowspan: b.headerRowspan,
            class: w(b.headerClass)
          }, [
            N(v.$slots, `head-${b.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (b.canSort ?? !1) && b.id === a.current_sort.column ? (o(), u("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (k) => d(b.id)
              }, [
                g("span", vr, [
                  B(U, { icon: "arrow-down" })
                ]),
                g("span", null, T(b.title), 1)
              ], 8, br)) : (o(), u(P, { key: 1 }, [
                K(T(b.title), 1)
              ], 64))
            ])
          ], 10, mr))), 256))
        ]))), 256))
      ]),
      tbody: z(() => [
        a.data === null || a.data.length === 0 ? (o(), u("tr", gr, [
          g("td", yr, [
            a.data === null ? (o(), C(ue, { key: 0 })) : (o(), C(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (o(!0), u(P, { key: 1 }, W(a.data, (f, b) => (o(), u(P, null, [
          (o(!0), u(P, null, W(c.value.filter((k) => k.some((F) => !(F.headerOnly ?? !1))), (k, F) => (o(), u("tr", {
            key: `row-${b}-${F}`,
            class: w(m(b, f))
          }, [
            (o(!0), u(P, null, W(k.filter((S) => !(S.headerOnly ?? !1)), (S) => (o(), u("td", {
              key: `data-${b}-${F}`,
              colspan: S.dataColspan,
              rowspan: S.dataRowspan,
              class: w(h(b, S, f, S.propertyName ? f[S.propertyName] : void 0)),
              onClick: (O) => l("cellClicked", { rowIndex: b, data: S.propertyName ? f[S.propertyName] : null, row: f })
            }, [
              N(v.$slots, `body-${S.id}`, G({ ref_for: !0 }, { rowIndex: b, data: S.propertyName ? f[S.propertyName] : null, row: f }), () => [
                K(T(S.propertyName ? f[S.propertyName] : null), 1)
              ])
            ], 10, fr))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      i.value || y(t).tfoot_head || y(t).tfoot_bottom ? {
        name: "tfoot",
        fn: z(() => [
          y(t).tfoot_head ? N(v.$slots, "tfoot_head", { key: 0 }) : A("", !0),
          i.value ? (o(), u("tr", _r, [
            g("td", kr, [
              B(Ft, G(r, {
                onMoveForward: p[1] || (p[1] = (f) => l("moveForward")),
                onMoveBack: p[2] || (p[2] = (f) => l("moveBack")),
                onGoToPage: p[3] || (p[3] = (f) => l("goToPage", f))
              }), null, 16)
            ])
          ])) : A("", !0),
          y(t).tfoot_bottom ? N(v.$slots, "tfoot_bottom", { key: 2 }) : A("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Dr = { class: "progress-group" }, Mr = /* @__PURE__ */ M({
  __name: "progress-group",
  props: {
    size: {},
    values: {},
    max: {}
  },
  setup(e) {
    const n = e, t = _(() => {
      let s = 0;
      for (let r = 0; r < n.values.length; r++)
        s += n.values[r].value;
      return s;
    }), a = _(() => n.values.map((s) => ({
      size: n.size ?? Y.normal,
      type: s.type,
      percentage: s.value / (n.max ?? t.value) * 100,
      caption: s.caption ?? `${s.value}`,
      onClick: s.onClick
    }))), l = _(() => n.max !== void 0 ? {
      size: n.size ?? Y.normal,
      type: null,
      percentage: (n.max - t.value) / n.max * 100,
      caption: null
    } : null);
    return (s, r) => (o(), u("div", Dr, [
      (o(!0), u(P, null, W(a.value, (i, c) => (o(), C(y(Jt), {
        is: "progress",
        class: w(`progress is-${i.size} is-${i.type} ${i.onClick !== void 0 ? "is-clickable" : ""}`),
        key: c,
        text: i.caption ?? "",
        position: y(xe).top,
        style: Me({ width: `${i.percentage}%` }),
        value: "100",
        maximum: "100",
        onClick: () => {
          i.onClick !== void 0 && i.onClick();
        }
      }, {
        default: z(() => [
          K(T(`${i.percentage}%`), 1)
        ]),
        _: 2
      }, 1032, ["class", "text", "position", "style", "onClick"]))), 128)),
      l.value != null ? (o(), u("progress", {
        key: 0,
        class: w(`progress is-${l.value.size} is-${l.value.type}`),
        style: Me({ width: `${l.value.percentage}%` }),
        value: "100",
        maximum: "100"
      }, T(`${l.value.percentage}%`) + "> ", 7)) : A("", !0)
    ]));
  }
}), $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: dr,
  CodeWriter: cr,
  Grid: Sr,
  ProgressGroup: Mr
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Jr,
  Button: wr,
  ButtonsContainer: Or,
  ButtonAdd: Nr,
  ButtonCancel: Tr,
  ButtonDelete: Pr,
  ButtonDisable: xr,
  ButtonDownload: Br,
  ButtonEdit: Er,
  ButtonEnable: Cr,
  ButtonOkay: Lr,
  ButtonPrint: zr,
  ButtonRefresh: Ir,
  ButtonSave: Wr,
  ButtonUpload: Vr,
  CheckMark: Rr,
  DropDown: Ur,
  DynamicSlot: jr,
  Filter: Gr,
  Icon: Hr,
  Message: Kr,
  Notification: Yr,
  PageNotification: qr,
  Pagination: Zr,
  Promised: Qr,
  Progress: Xr,
  NavBar: eo,
  Menu: to,
  MenuLabel: ao,
  MenuList: lo,
  MenuEntry: no,
  ToolTip: so,
  Badge: ro,
  Tag: oo,
  Tags: io
} = Cl, { DraggableItem: uo, DropZone: co, Sortable: po } = Ul, {
  AutoComplete: ho,
  CheckboxGroup: mo,
  Checkbox: bo,
  DateField: vo,
  ComponentForm: go,
  FullEditor: yo,
  Header: fo,
  Hidden: _o,
  NumberField: ko,
  Paragraph: So,
  RadioGroup: Do,
  Select: Mo,
  Switch: $o,
  Text: Fo,
  TextArea: Ao,
  Time: Jo,
  FormComponent: wo
} = Zn, {
  Banner: Oo,
  Box: No,
  Breadcrumbs: To,
  Card: Po,
  ColumnContainer: xo,
  Footer: Bo,
  Level: Eo,
  List: Co,
  Media: Lo,
  Modal: zo,
  ModalCard: Io,
  Panel: Wo,
  Section: Vo,
  Table: Ro,
  Tabs: Uo,
  Slideout: jo,
  StepWizard: Go
} = rr, { AVAIABLE_SKINS: Ho, setSkin: Ko } = ur, {
  ColorTypes: Yo,
  NoticeTypes: qo,
  Sizes: Zo,
  AnimationSpeeds: Qo,
  AnimationTypes: Xo,
  IconSizes: ei,
  ChartLegendPositions: ti,
  ChartTypes: ai,
  DropZoneQuadrants: li,
  BreadCrumbAlignments: ni,
  BreadCrumbSeperators: si,
  ColumnContainerModifiers: ri,
  ColumnSizes: oi,
  ColumnOffsetSizes: ii,
  BorderTypes: ui,
  TabAlignments: di,
  TabStyles: ci,
  TileSizes: pi,
  TileTypes: hi,
  FixedNavBarPositions: mi,
  FixedMenuPositions: bi,
  BadgePositions: vi,
  ToolTipPositions: gi,
  ToolTipTextAlignments: yi,
  ButtonAlignments: fi,
  SectionSizes: _i
} = na, { loadNonEs6Module: ki } = la, { Chart: Si, CodeWriter: Di, Grid: Mi, ProgressGroup: $i } = $r;
export {
  Ho as AVAIABLE_SKINS,
  Jr as Animation,
  Qo as AnimationSpeeds,
  Xo as AnimationTypes,
  ho as AutoComplete,
  ro as Badge,
  vi as BadgePositions,
  Oo as Banner,
  ui as BorderTypes,
  No as Box,
  ni as BreadCrumbAlignments,
  si as BreadCrumbSeperators,
  To as Breadcrumbs,
  wr as Button,
  Nr as ButtonAdd,
  fi as ButtonAlignments,
  Tr as ButtonCancel,
  Pr as ButtonDelete,
  xr as ButtonDisable,
  Br as ButtonDownload,
  Er as ButtonEdit,
  Cr as ButtonEnable,
  Lr as ButtonOkay,
  zr as ButtonPrint,
  Ir as ButtonRefresh,
  Wr as ButtonSave,
  Vr as ButtonUpload,
  Or as ButtonsContainer,
  Po as Card,
  Si as Chart,
  ti as ChartLegendPositions,
  ai as ChartTypes,
  Rr as CheckMark,
  bo as Checkbox,
  mo as CheckboxGroup,
  Di as CodeWriter,
  Yo as ColorTypes,
  xo as ColumnContainer,
  ri as ColumnContainerModifiers,
  ii as ColumnOffsetSizes,
  oi as ColumnSizes,
  go as ComponentForm,
  vo as DateField,
  uo as DraggableItem,
  Ur as DropDown,
  co as DropZone,
  li as DropZoneQuadrants,
  jr as DynamicSlot,
  Gr as Filter,
  bi as FixedMenuPositions,
  mi as FixedNavBarPositions,
  Bo as Footer,
  wo as FormComponent,
  yo as FullEditor,
  Mi as Grid,
  fo as Header,
  _o as Hidden,
  Hr as Icon,
  ei as IconSizes,
  Eo as Level,
  Co as List,
  Lo as Media,
  to as Menu,
  no as MenuEntry,
  ao as MenuLabel,
  lo as MenuList,
  Kr as Message,
  zo as Modal,
  Io as ModalCard,
  eo as NavBar,
  qo as NoticeTypes,
  Yr as Notification,
  ko as NumberField,
  qr as PageNotification,
  Zr as Pagination,
  Wo as Panel,
  So as Paragraph,
  Xr as Progress,
  $i as ProgressGroup,
  Qr as Promised,
  Do as RadioGroup,
  Vo as Section,
  _i as SectionSizes,
  Mo as Select,
  Zo as Sizes,
  jo as Slideout,
  po as Sortable,
  Go as StepWizard,
  $o as Switch,
  di as TabAlignments,
  ci as TabStyles,
  Ro as Table,
  Uo as Tabs,
  oo as Tag,
  io as Tags,
  Fo as Text,
  Ao as TextArea,
  pi as TileSizes,
  hi as TileTypes,
  Jo as Time,
  so as ToolTip,
  gi as ToolTipPositions,
  yi as ToolTipTextAlignments,
  ki as loadNonEs6Module,
  Ko as setSkin
};
//# sourceMappingURL=vibrantvue.esm.js.map
