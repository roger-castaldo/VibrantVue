import { defineComponent as w, computed as g, openBlock as d, createBlock as E, Transition as Hs, withCtx as A, renderSlot as z, createElementBlock as m, normalizeClass as x, onMounted as re, inject as J, createVNode as L, createCommentVNode as I, toDisplayString as N, mergeProps as X, createElementVNode as y, normalizeProps as me, guardReactiveProps as fe, ref as F, watch as U, createSlots as Ts, normalizeStyle as Ce, unref as S, Fragment as T, renderList as G, resolveDynamicComponent as he, withDirectives as R, vModelText as pe, createTextVNode as ee, vShow as ne, toRefs as Ys, reactive as Ge, warn as qs, vModelCheckbox as Le, readonly as Se, withAsyncContext as Ks, onUnmounted as Cs, vModelSelect as Gs, vModelDynamic as Xs, provide as xe } from "vue";
import "jquery";
const ge = (e) => new Promise((l) => {
  let a = [];
  var t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, n) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let o = document.createElement("link"), u = new Promise((r) => {
        o.onload = function() {
          r(s);
        };
      });
      a[n] = u, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", s), o.setAttribute("href", s);
    } else
      a[n] = Promise.resolve(s);
  }), Promise.all(a).then((s) => {
    l(s);
  });
});
var Y = /* @__PURE__ */ ((e) => (e[e.white = 0] = "white", e[e.black = 1] = "black", e[e.light = 2] = "light", e[e.dark = 3] = "dark", e[e.primary = 4] = "primary", e[e.link = 5] = "link", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.warning = 8] = "warning", e[e.danger = 9] = "danger", e))(Y || {}), le = /* @__PURE__ */ ((e) => (e[e.info = 0] = "info", e[e.success = 1] = "success", e[e.warning = 2] = "warning", e[e.danger = 3] = "danger", e))(le || {}), oe = /* @__PURE__ */ ((e) => (e[e.small = 0] = "small", e[e.normal = 1] = "normal", e[e.medium = 2] = "medium", e[e.large = 3] = "large", e))(oe || {}), ue = /* @__PURE__ */ ((e) => (e[e.slower = 0] = "slower", e[e.slow = 1] = "slow", e[e.fast = 2] = "fast", e[e.faster = 3] = "faster", e))(ue || {}), Me = /* @__PURE__ */ ((e) => (e[e.bounce = 0] = "bounce", e[e.flash = 1] = "flash", e[e.pulse = 2] = "pulse", e[e.rubberBand = 3] = "rubberBand", e[e.shakeX = 4] = "shakeX", e[e.shakeY = 5] = "shakeY", e[e.headShake = 6] = "headShake", e[e.swing = 7] = "swing", e[e.tada = 8] = "tada", e[e.wobble = 9] = "wobble", e[e.jello = 10] = "jello", e[e.heartBeat = 11] = "heartBeat", e[e.backOutDown = 12] = "backOutDown", e[e.backOutLeft = 13] = "backOutLeft", e[e.backOutRight = 14] = "backOutRight", e[e.backOutUp = 15] = "backOutUp", e[e.bounceIn = 16] = "bounceIn", e[e.bounceInDown = 17] = "bounceInDown", e[e.bounceInLeft = 18] = "bounceInLeft", e[e.bounceInRight = 19] = "bounceInRight", e[e.bounceInUp = 20] = "bounceInUp", e[e.bounceOut = 21] = "bounceOut", e[e.boundOutDown = 22] = "boundOutDown", e[e.bounceOutLeft = 23] = "bounceOutLeft", e[e.boundOutRight = 24] = "boundOutRight", e[e.bounceOutUp = 25] = "bounceOutUp", e[e.fadeIn = 26] = "fadeIn", e[e.fadeInDown = 27] = "fadeInDown", e[e.fadeInDownBig = 28] = "fadeInDownBig", e[e.fadeInLeft = 29] = "fadeInLeft", e[e.fadeInLeftBig = 30] = "fadeInLeftBig", e[e.fadeInRight = 31] = "fadeInRight", e[e.fadeInRightBig = 32] = "fadeInRightBig", e[e.fadeInUp = 33] = "fadeInUp", e[e.fadeInUpBig = 34] = "fadeInUpBig", e[e.fadeInTopLeft = 35] = "fadeInTopLeft", e[e.fadeInTopRight = 36] = "fadeInTopRight", e[e.fadeInBottomLeft = 37] = "fadeInBottomLeft", e[e.fadeInBottomRight = 38] = "fadeInBottomRight", e[e.fadeOut = 39] = "fadeOut", e[e.fadeOutDown = 40] = "fadeOutDown", e[e.fadeOutDownBig = 41] = "fadeOutDownBig", e[e.fadeOutLeft = 42] = "fadeOutLeft", e[e.fadeOutLeftBig = 43] = "fadeOutLeftBig", e[e.fadeOutRight = 44] = "fadeOutRight", e[e.fadeOutRightBig = 45] = "fadeOutRightBig", e[e.fadeOutUp = 46] = "fadeOutUp", e[e.fadeOutUpBig = 47] = "fadeOutUpBig", e[e.fadeOutTopLeft = 48] = "fadeOutTopLeft", e[e.fadeOutTopRight = 49] = "fadeOutTopRight", e[e.fadeOutBottomRight = 50] = "fadeOutBottomRight", e[e.fadeOutBottomLeft = 51] = "fadeOutBottomLeft", e[e.flip = 52] = "flip", e[e.flipInX = 53] = "flipInX", e[e.flipInY = 54] = "flipInY", e[e.flipOutX = 55] = "flipOutX", e[e.flipOutY = 56] = "flipOutY", e[e.lightSpeedInRight = 57] = "lightSpeedInRight", e[e.lightSpeedInLeft = 58] = "lightSpeedInLeft", e[e.lightSpeedOutRight = 59] = "lightSpeedOutRight", e[e.lightSpeedOutLeft = 60] = "lightSpeedOutLeft", e[e.rotateIn = 61] = "rotateIn", e[e.rotateInDownLeft = 62] = "rotateInDownLeft", e[e.rotateInDownRight = 63] = "rotateInDownRight", e[e.rotateInUpLeft = 64] = "rotateInUpLeft", e[e.rotateInUpRight = 65] = "rotateInUpRight", e[e.rotateOut = 66] = "rotateOut", e[e.rotateOutDownLeft = 67] = "rotateOutDownLeft", e[e.rotateOutDownRight = 68] = "rotateOutDownRight", e[e.rotateOutUpLeft = 69] = "rotateOutUpLeft", e[e.rotateOutUpRight = 70] = "rotateOutUpRight", e[e.hinge = 71] = "hinge", e[e.jackInTheBox = 72] = "jackInTheBox", e[e.rollIn = 73] = "rollIn", e[e.rollOut = 74] = "rollOut", e[e.zoomIn = 75] = "zoomIn", e[e.zoomInDown = 76] = "zoomInDown", e[e.zoomInLeft = 77] = "zoomInLeft", e[e.zoomInRight = 78] = "zoomInRight", e[e.zoomInUp = 79] = "zoomInUp", e[e.zoomOut = 80] = "zoomOut", e[e.zoomOutDown = 81] = "zoomOutDown", e[e.zoomOutLeft = 82] = "zoomOutLeft", e[e.zoomOutRight = 83] = "zoomOutRight", e[e.zoomOutUp = 84] = "zoomOutUp", e[e.slideInDown = 85] = "slideInDown", e[e.slideInLeft = 86] = "slideInLeft", e[e.slideInRight = 87] = "slideInRight", e[e.slideInUp = 88] = "slideInUp", e[e.slideOutDown = 89] = "slideOutDown", e[e.slideOutLeft = 90] = "slideOutLeft", e[e.slideOutRight = 91] = "slideOutRight", e[e.slideOutUp = 92] = "slideOutUp", e))(Me || {}), Xe = /* @__PURE__ */ ((e) => (e[e.area = 0] = "area", e[e.bar = 1] = "bar", e[e.bubble = 2] = "bubble", e[e.doughnut = 3] = "doughnut", e[e.pie = 4] = "pie", e[e.line = 5] = "line", e[e.polarArea = 6] = "polarArea", e[e.radar = 7] = "radar", e[e.scatter = 8] = "scatter", e))(Xe || {}), Ie = /* @__PURE__ */ ((e) => (e[e.top = 0] = "top", e[e.left = 1] = "left", e[e.bottom = 2] = "bottom", e[e.right = 3] = "right", e[e.chartArea = 4] = "chartArea", e))(Ie || {}), C = /* @__PURE__ */ ((e) => (e[e.xxsmall = 0] = "xxsmall", e[e.xsmall = 1] = "xsmall", e[e.small = 2] = "small", e[e.normal = 3] = "normal", e[e.large = 4] = "large", e[e.xlarge = 5] = "xlarge", e[e.xxlarge = 6] = "xxlarge", e))(C || {}), Z = /* @__PURE__ */ ((e) => (e[e.center = 0] = "center", e[e.topLeft = 1] = "topLeft", e[e.bottomLeft = 2] = "bottomLeft", e[e.topRight = 3] = "topRight", e[e.bottomRight = 4] = "bottomRight", e[e.top = 5] = "top", e[e.bottom = 6] = "bottom", e))(Z || {}), De = /* @__PURE__ */ ((e) => (e[e.centered = 0] = "centered", e[e.right = 1] = "right", e[e.left = 2] = "left", e))(De || {}), Qe = /* @__PURE__ */ ((e) => (e[e.arrow = 0] = "arrow", e[e.button = 1] = "button", e[e.dot = 2] = "dot", e[e.succeeds = 3] = "succeeds", e))(Qe || {}), Ze = /* @__PURE__ */ ((e) => (e[e.mobile = 0] = "mobile", e[e.desktop = 1] = "desktop", e[e.gapless = 2] = "gapless", e[e.multiline = 3] = "multiline", e[e.centered = 4] = "centered", e[e.borderleft = 5] = "borderleft", e[e.borderright = 6] = "borderright", e[e.borderbottom = 7] = "borderbottom", e[e.bordertop = 8] = "bordertop", e[e.fullWidth = 9] = "fullWidth", e[e.fullHeight = 10] = "fullHeight", e))(Ze || {}), et = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(et || {}), tt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(tt || {}), we = /* @__PURE__ */ ((e) => (e[e.left = 0] = "left", e[e.right = 1] = "right", e[e.bottom = 2] = "bottom", e[e.top = 3] = "top", e[e.all = 4] = "all", e))(we || {}), at = /* @__PURE__ */ ((e) => (e[e.centered = 0] = "centered", e[e.right = 1] = "right", e[e.left = 2] = "left", e))(at || {}), lt = /* @__PURE__ */ ((e) => (e[e.boxed = 0] = "boxed", e[e.toggled = 1] = "toggled", e[e.roundToggle = 2] = "roundToggle", e))(lt || {}), st = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(st || {}), nt = /* @__PURE__ */ ((e) => (e[e.parent = 0] = "parent", e[e.child = 1] = "child", e[e.ancestor = 2] = "ancestor", e))(nt || {});
const Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ue,
  AnimationTypes: Me,
  BorderTypes: we,
  BreadCrumbAlignments: De,
  BreadCrumbSeperators: Qe,
  ChartLegendPositions: Ie,
  ChartTypes: Xe,
  ColorTypes: Y,
  ColumnContainerModifiers: Ze,
  ColumnOffsetSizes: tt,
  ColumnSizes: et,
  DropZoneQuadrants: Z,
  IconSizes: C,
  NoticeTypes: le,
  Sizes: oe,
  TabAlignments: at,
  TabStyles: lt,
  TileSizes: st,
  TileTypes: nt
}, Symbol.toStringTag, { value: "Module" })), ot = /* @__PURE__ */ w({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ue.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    ge("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
    const l = e, a = (r) => {
      switch (r) {
        case ue.slower:
          return 3e3;
        case ue.fast:
          return 800;
        case ue.faster:
          return 500;
        default:
          return 2e3;
      }
    }, t = (r) => r === void 0 ? "" : `animate__${r}`, s = (r) => r === void 0 ? "animate__slow" : `animate__${r}`, n = g(() => ({
      enter: a(l.speedIn ?? l.speed),
      leave: a(l.speedOut ?? l.speed)
    })), i = g(() => [
      "animate__animated",
      t(l.incoming ?? l.inout),
      s(l.speedIn ?? l.speed)
    ].join(" ")), o = g(() => [
      "animate__animated",
      t(l.outgoing ?? l.inout),
      s(l.speedOut ?? l.speed)
    ].join(" ")), u = g(() => [
      "animate__animated",
      "animate__infinite",
      t(l.repeating),
      s(l.speed ?? "")
    ].join(" "));
    return (r, c) => l.repeating ? (d(), m("div", {
      key: 1,
      class: x(u.value)
    }, [
      z(r.$slots, "default")
    ], 2)) : (d(), E(Hs, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": o.value,
      duration: n.value
    }, {
      default: A(() => [
        z(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), q = (e) => {
  const l = e("Language", "en");
  return g(() => l);
}, Zs = (e) => {
  const l = e("IconSet", "solid");
  return g(() => l);
}, We = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/", He = `${We}brands.min.css`, Te = "brands_style_sheet";
ge([
  `${We}all.min.css`
]);
const en = /\.fa-([^: ]+):before/g, rt = [];
if (!document.getElementById(Te)) {
  let e = document.createElement("style");
  e.setAttribute("type", "text/css"), e.setAttribute("server_path", He), e.setAttribute("id", Te), document.head.appendChild(e), fetch(He).then((l) => {
    l.ok && l.text().then((a) => {
      [...a.matchAll(en)].forEach((t) => {
        rt.push(t[1]);
      }), e.innerText = a;
    });
  });
}
const K = /* @__PURE__ */ w({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const l = e, a = Zs(J), t = g(() => {
      let s = [];
      if (l.icon !== void 0 && l.icon !== null && (rt.indexOf(l.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${a.value}`))), l.icon !== void 0 && l.icon !== null && s.push((l.icon.indexOf("fa-") == -1 ? " fa-" : " ") + l.icon), l.size !== void 0 && l.size !== null && l.size !== C.normal)
        switch (l.size) {
          case C.xxsmall:
            s.push("fa-2xs");
            break;
          case C.xsmall:
            s.push("fa-xs");
            break;
          case C.small:
            s.push("fa-sm");
            break;
          case C.large:
            s.push("fa-lg");
            break;
          case C.xlarge:
            s.push("fa-xl");
            break;
          case C.xxlarge:
            s.push("fa-2xl");
            break;
        }
      return s;
    });
    return re(() => ge(`${We}${a.value}.min.css`)), (s, n) => (d(), m("i", {
      class: x(t.value)
    }, null, 2));
  }
});
const tn = ["disabled"], an = {
  key: 0,
  class: "icon is-small"
}, ln = { key: 1 }, Q = /* @__PURE__ */ w({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: Y.primary },
    size: { default: oe.small },
    title: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = g(() => {
      let n = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && n.push("disabled"), a.addonclass && n.push(a.addonclass), a.hidemobile && n.push("is-hidden-mobile"), a.hidetablet && n.push("is-hidden-tablet-only"), a.hidedesktop && n.push("is-hidden-desktop is-hidden-widescreen"), n;
    });
    return (n, i) => (d(), m("button", {
      class: x(s.value),
      disabled: a.disabled,
      onClick: i[0] || (i[0] = (o) => t("click"))
    }, [
      a.icon != null ? (d(), m("span", an, [
        L(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : I("", !0),
      a.title != null ? (d(), m("span", ln, N(a.title), 1)) : I("", !0)
    ], 10, tn));
  }
}), ut = {
  Add: "Add",
  Cancel: "Cancel",
  Delete: "Delete",
  Disable: "Disable",
  Download: "Download",
  Edit: "Edit",
  Enable: "Enable",
  Okay: "Okay",
  Print: "Print",
  Save: "Save",
  Submit: "Submit",
  Upload: "Upload"
}, it = {
  Add: "مضافا",
  Cancel: "إلغاء",
  Delete: "تحذف",
  Disable: "العجز",
  Download: "تحميل",
  Edit: "Edit",
  Enable: "التمكين",
  Okay: "حسنا",
  Print: "الطباعة",
  Save: "أنقذ",
  Submit: "Submit",
  Upload: "تحميل"
}, dt = {
  Add: "Axtarış",
  Cancel: "Tarix",
  Delete: "Delete",
  Disable: "Qeydiyyat",
  Download: "Pulsuz",
  Edit: "Tarix",
  Enable: "Qeydiyyat",
  Okay: "Qeydiyyat",
  Print: "Çap",
  Save: "Daxil",
  Submit: "Daxil",
  Upload: "Tarix"
}, ct = {}, ht = {}, pt = {}, bt = {
  Add: "Čeština",
  Cancel: "Hledat",
  Delete: "Čeština",
  Disable: "Zakázat",
  Download: "Čeština",
  Edit: "Editace",
  Enable: "Podpora",
  Okay: "Čeština",
  Print: "Čeština",
  Save: "Čeština",
  Submit: "Odeslat",
  Upload: "Čeština"
}, mt = {
  Add: "Tilføj",
  Cancel: "Annuller",
  Delete: "Slet",
  Disable: "Deaktiverbare",
  Download: "Download",
  Edit: "Rediger",
  Enable: "Aktivér",
  Okay: "Okay",
  Print: "Udskriv",
  Save: "Gem",
  Submit: "Indsend",
  Upload: "Upload"
}, ft = {
  Add: "Hinzufügen",
  Cancel: "Abbrechen",
  Delete: "Löschen",
  Disable: "Nicht",
  Download: "Downloads",
  Edit: "Bearbeiten",
  Enable: "Ermöglichen",
  Okay: "Okay",
  Print: "Drucken",
  Save: "Speichern",
  Submit: "Einreichung",
  Upload: "Hochladen"
}, gt = {}, vt = {
  Add: "Aldonu",
  Cancel: "Cancel",
  Delete: "Delete",
  Disable: "Distingebla",
  Download: "Elŝutu",
  Edit: "Edit",
  Enable: "Enable",
  Okay: "Bone",
  Print: "Presaĵo",
  Save: "Savi",
  Submit: "Submit",
  Upload: "Ĝis"
}, yt = {
  Add: "Añadir",
  Cancel: "Cancelar",
  Delete: "Suprimir",
  Disable: "Discapacidad",
  Download: "Descargar",
  Edit: "Editar",
  Enable: "Habilitación",
  Okay: "Está",
  Print: "Imprimir",
  Save: "Guardar",
  Submit: "Submit",
  Upload: "Subir"
}, _t = {}, kt = {
  Add: "Add",
  Cancel: "لغو",
  Delete: "حذف",
  Disable: "Disable",
  Download: "Download",
  Edit: "Edit",
  Enable: "گزینه",
  Okay: "خوب",
  Print: "Print",
  Save: "Save",
  Submit: "ارسال",
  Upload: "آپلود"
}, $t = {
  Add: "Lisää",
  Cancel: "Peruu",
  Delete: "Delete",
  Disable: "Vammainen",
  Download: "Download",
  Edit: "Edit",
  Enable: "Mahdollistaa",
  Okay: "Okei",
  Print: "Printti",
  Save: "Säästäminen",
  Submit: "Lähetys",
  Upload: "Lataa"
}, St = {
  Add: "Add",
  Cancel: "Annuler",
  Delete: "Supprimer",
  Disable: "Désactive",
  Download: "Télécharger",
  Edit: "Edit",
  Enable: "Active",
  Okay: "D'accord",
  Print: "Imprimer",
  Save: "Save",
  Submit: "Soumettre",
  Upload: "Charge"
}, Mt = {
  Add: "Déan",
  Cancel: "Cealaigh",
  Delete: "Scriosta",
  Disable: "Díroghnaigh",
  Download: "Íoslódáil",
  Edit: "Inis",
  Enable: "Cumasaigh",
  Okay: "Riachtanais",
  Print: "Priontáil",
  Save: "Sábháil",
  Submit: "Cuir",
  Upload: "Uaslódáil"
}, Dt = {
  Add: "הוסף",
  Cancel: "ביטול",
  Delete: "Delete",
  Disable: "אכזבה",
  Download: "הורד",
  Edit: "Editעריכה",
  Enable: "אפשרות",
  Okay: "בסדר",
  Print: "הדפסה",
  Save: "להציל",
  Submit: "הגשת",
  Upload: "Upload"
}, wt = {
  Add: "जोड़ें",
  Cancel: "रद्द",
  Delete: "डिलीट",
  Disable: "अक्षम",
  Download: "डाउनलोड",
  Edit: "संपादित",
  Enable: "सक्षम",
  Okay: "ओके",
  Print: "छाप",
  Save: "सहेजें",
  Submit: "जमा",
  Upload: "अपलोड"
}, Ot = {
  Add: "Hozzáadás",
  Cancel: "Törlés",
  Delete: "Törlés",
  Disable: "Letiltás",
  Download: "Letöltés",
  Edit: "Edit",
  Enable: "Képesség",
  Okay: "Okéy",
  Print: "Nyomtatás",
  Save: "Mentés",
  Submit: "Bejelentkezés",
  Upload: "Feltöltés"
}, Ft = {
  Add: "Login",
  Cancel: "Login",
  Delete: "Login",
  Disable: "Sitemap",
  Download: "Login",
  Edit: "Login",
  Enable: "Sitemap",
  Okay: "Login",
  Print: "Login",
  Save: "Sitemap",
  Submit: "Sitemap",
  Upload: "Sitemap"
}, Bt = {
  Add: "Aggiungi",
  Cancel: "Annulla",
  Delete: "Cancella",
  Disable: "Disattivare",
  Download: "Scarica",
  Edit: "Modifica",
  Enable: "Abilitare",
  Okay: "Ok",
  Print: "Stampa",
  Save: "Salva",
  Submit: "Inserisci",
  Upload: "Caricamento"
}, xt = {
  Add: "追加する",
  Cancel: "キャンセル",
  Delete: "削除",
  Disable: "免責事項",
  Download: "ダウンロード",
  Edit: "編集",
  Enable: "アクセス",
  Okay: "お問い合わせ",
  Print: "プリント",
  Save: "保存する",
  Submit: "送信する",
  Upload: "アップロード"
}, Jt = {
  Add: "기타",
  Cancel: "이름",
  Delete: "기타",
  Disable: "기타",
  Download: "다운로드",
  Edit: "제품정보",
  Enable: "이름",
  Okay: "이름",
  Print: "제품정보",
  Save: "제품",
  Submit: "제출하기",
  Upload: "제품정보"
}, Nt = {}, Pt = {}, Et = {}, Lt = {}, It = {}, Wt = {}, Vt = {
  Add: "Adicionar",
  Cancel: "Cancelar",
  Delete: "Excluir",
  Disable: "Deficiência",
  Download: "Baixar",
  Edit: "Editar",
  Enable: "Habilitar",
  Okay: "Está",
  Print: "Impressão",
  Save: "Salvar",
  Submit: "Submeter-me",
  Upload: "Carregar"
}, zt = {}, At = {
  Add: "Добавить",
  Cancel: "Отмена",
  Delete: "Удалить",
  Disable: "Отключить",
  Download: "Скачать",
  Edit: "Изменить",
  Enable: "Включить",
  Okay: "Хорошо",
  Print: "Печать",
  Save: "Сохранить",
  Submit: "Submit",
  Upload: "Загрузка"
}, Ut = {
  Add: "Pridať",
  Cancel: "Zrušiť",
  Delete: "Zmazať",
  Disable: "Prenos",
  Download: "Na",
  Edit: "Upraviť",
  Enable: "Povoliť",
  Okay: "Dobre",
  Print: "Vytlačiť",
  Save: "Uložiť",
  Submit: "Odoslať",
  Upload: "Nahrať"
}, Rt = {}, jt = {}, Ht = {}, Tt = {
  Add: "Lägg",
  Cancel: "Avbokning",
  Delete: "Delete",
  Disable: "Inaktivera",
  Download: "Ladda",
  Edit: "Edit",
  Enable: "Aktivera",
  Okay: "Okej",
  Print: "Print",
  Save: "Spara",
  Submit: "Inlämning",
  Upload: "Upload"
}, Yt = {}, qt = {}, Kt = {
  Add: "Add",
  Cancel: "Cancel",
  Delete: "Delete",
  Disable: "Engelli",
  Download: "Download",
  Edit: "Edit",
  Enable: "Enable",
  Okay: "Tamam",
  Print: "Baskı",
  Save: "Kaydet",
  Submit: "Gönder",
  Upload: "Download"
}, Ct = {
  Add: "Додати",
  Cancel: "Зареєструватися",
  Delete: "Делет",
  Disable: "Вимкнути",
  Download: "Завантажити",
  Edit: "Редагування",
  Enable: "Увімкнути",
  Okay: "Проксимус",
  Print: "Друк",
  Save: "Зберегти",
  Submit: "Подати",
  Upload: "Завантажити"
}, Gt = {}, Xt = {}, sn = {
  en: ut,
  ar: it,
  az: dt,
  bg: ct,
  bn: ht,
  ca: pt,
  cs: bt,
  da: mt,
  de: ft,
  el: gt,
  eo: vt,
  es: yt,
  et: _t,
  fa: kt,
  fi: $t,
  fr: St,
  ga: Mt,
  he: Dt,
  hi: wt,
  hu: Ot,
  id: Ft,
  it: Bt,
  ja: xt,
  ko: Jt,
  lt: Nt,
  lv: Pt,
  ms: Et,
  nb: Lt,
  nl: It,
  pl: Wt,
  pt: Vt,
  ro: zt,
  ru: At,
  sk: Ut,
  sl: Rt,
  sq: jt,
  sr: Ht,
  sv: Tt,
  th: Yt,
  tl: qt,
  tr: Kt,
  uk: Ct,
  zh: Gt,
  zt: Xt
}, nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: it,
  az: dt,
  bg: ct,
  bn: ht,
  ca: pt,
  cs: bt,
  da: mt,
  de: ft,
  default: sn,
  el: gt,
  en: ut,
  eo: vt,
  es: yt,
  et: _t,
  fa: kt,
  fi: $t,
  fr: St,
  ga: Mt,
  he: Dt,
  hi: wt,
  hu: Ot,
  id: Ft,
  it: Bt,
  ja: xt,
  ko: Jt,
  lt: Nt,
  lv: Pt,
  ms: Et,
  nb: Lt,
  nl: It,
  pl: Wt,
  pt: Vt,
  ro: zt,
  ru: At,
  sk: Ut,
  sl: Rt,
  sq: jt,
  sr: Ht,
  sv: Tt,
  th: Yt,
  tl: qt,
  tr: Kt,
  uk: Ct,
  zh: Gt,
  zt: Xt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  Filter: "Filter"
}, Zt = {
  Filter: "فيلم"
}, ea = {
  Filter: "Qeydiyyat"
}, ta = {}, aa = {}, la = {}, sa = {
  Filter: "Čeština"
}, na = {
  Filter: "Filter"
}, oa = {
  Filter: "Filter"
}, ra = {}, ua = {
  Filter: "Filtero"
}, ia = {
  Filter: "Filtro"
}, da = {}, ca = {
  Filter: "فیلتر"
}, ha = {
  Filter: "Filter"
}, pa = {
  Filter: "Filtre"
}, ba = {
  Filter: "Scagaire"
}, ma = {
  Filter: "Filter"
}, fa = {
  Filter: "फिल्टर"
}, ga = {
  Filter: "Szűrő"
}, va = {
  Filter: "Login"
}, ya = {
  Filter: "Filtro"
}, _a = {
  Filter: "フィルター"
}, ka = {
  Filter: "제품정보"
}, $a = {}, Sa = {}, Ma = {}, Da = {}, wa = {}, Oa = {}, Fa = {
  Filter: "Filtro"
}, Ba = {}, xa = {
  Filter: "Фильтр"
}, Ja = {
  Filter: "Filter"
}, Na = {}, Pa = {}, Ea = {}, La = {
  Filter: "Filter"
}, Ia = {}, Wa = {}, Va = {
  Filter: "Filtre"
}, za = {
  Filter: "Фільтри"
}, Aa = {}, Ua = {}, on = {
  en: Qt,
  ar: Zt,
  az: ea,
  bg: ta,
  bn: aa,
  ca: la,
  cs: sa,
  da: na,
  de: oa,
  el: ra,
  eo: ua,
  es: ia,
  et: da,
  fa: ca,
  fi: ha,
  fr: pa,
  ga: ba,
  he: ma,
  hi: fa,
  hu: ga,
  id: va,
  it: ya,
  ja: _a,
  ko: ka,
  lt: $a,
  lv: Sa,
  ms: Ma,
  nb: Da,
  nl: wa,
  pl: Oa,
  pt: Fa,
  ro: Ba,
  ru: xa,
  sk: Ja,
  sl: Na,
  sq: Pa,
  sr: Ea,
  sv: La,
  th: Ia,
  tl: Wa,
  tr: Va,
  uk: za,
  zh: Aa,
  zt: Ua
}, rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Zt,
  az: ea,
  bg: ta,
  bn: aa,
  ca: la,
  cs: sa,
  da: na,
  de: oa,
  default: on,
  el: ra,
  en: Qt,
  eo: ua,
  es: ia,
  et: da,
  fa: ca,
  fi: ha,
  fr: pa,
  ga: ba,
  he: ma,
  hi: fa,
  hu: ga,
  id: va,
  it: ya,
  ja: _a,
  ko: ka,
  lt: $a,
  lv: Sa,
  ms: Ma,
  nb: Da,
  nl: wa,
  pl: Oa,
  pt: Fa,
  ro: Ba,
  ru: xa,
  sk: Ja,
  sl: Na,
  sq: Pa,
  sr: Ea,
  sv: La,
  th: Ia,
  tl: Wa,
  tr: Va,
  uk: za,
  zh: Aa,
  zt: Ua
}, Symbol.toStringTag, { value: "Module" })), Ra = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer"
}, ja = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer"
}, Ha = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə"
}, Ta = {}, Ya = {}, qa = {}, Ka = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština"
}, Ca = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer"
}, Ga = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit"
}, Xa = {}, Qa = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli"
}, Za = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer"
}, el = {}, tl = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer"
}, al = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa"
}, ll = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer"
}, sl = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh"
}, nl = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש"
}, ol = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया"
}, rl = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb"
}, ul = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login"
}, il = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo"
}, dl = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース"
}, cl = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더"
}, hl = {}, pl = {}, bl = {}, ml = {}, fl = {}, gl = {}, vl = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais"
}, yl = {}, _l = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer"
}, kl = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka"
}, $l = {}, Sl = {}, Ml = {}, Dl = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare"
}, wl = {}, Ol = {}, Fl = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer"
}, Bl = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова"
}, xl = {}, Jl = {}, un = {
  en: Ra,
  ar: ja,
  az: Ha,
  bg: Ta,
  bn: Ya,
  ca: qa,
  cs: Ka,
  da: Ca,
  de: Ga,
  el: Xa,
  eo: Qa,
  es: Za,
  et: el,
  fa: tl,
  fi: al,
  fr: ll,
  ga: sl,
  he: nl,
  hi: ol,
  hu: rl,
  id: ul,
  it: il,
  ja: dl,
  ko: cl,
  lt: hl,
  lv: pl,
  ms: bl,
  nb: ml,
  nl: fl,
  pl: gl,
  pt: vl,
  ro: yl,
  ru: _l,
  sk: kl,
  sl: $l,
  sq: Sl,
  sr: Ml,
  sv: Dl,
  th: wl,
  tl: Ol,
  tr: Fl,
  uk: Bl,
  zh: xl,
  zt: Jl
}, dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ja,
  az: Ha,
  bg: Ta,
  bn: Ya,
  ca: qa,
  cs: Ka,
  da: Ca,
  de: Ga,
  default: un,
  el: Xa,
  en: Ra,
  eo: Qa,
  es: Za,
  et: el,
  fa: tl,
  fi: al,
  fr: ll,
  ga: sl,
  he: nl,
  hi: ol,
  hu: rl,
  id: ul,
  it: il,
  ja: dl,
  ko: cl,
  lt: hl,
  lv: pl,
  ms: bl,
  nb: ml,
  nl: fl,
  pl: gl,
  pt: vl,
  ro: yl,
  ru: _l,
  sk: kl,
  sl: $l,
  sq: Sl,
  sr: Ml,
  sv: Dl,
  th: wl,
  tl: Ol,
  tr: Fl,
  uk: Bl,
  zh: xl,
  zt: Jl
}, Symbol.toStringTag, { value: "Module" })), Nl = {
  Weekdays: {
    Sun: "Sun",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "May",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "January",
    Febuary: "Febuary",
    March: "March",
    April: "April",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December"
  },
  Today: "Today"
}, Pl = {
  Weekdays: {
    Sun: "الشمس",
    Mon: "مون",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "فري",
    Sat: "Sat",
    Sunday: "الأحد",
    Monday: "الاثنين",
    Tuesday: "الثلاثاء",
    Wednesday: "الأربعاء",
    Thursday: "الخميس",
    Friday: "الجمعة",
    Saturday: "السبت"
  },
  Months: {
    Jan: "جان",
    Feb: "شباط/فبراير",
    Mar: "Mar",
    Apr: "Apr",
    May: "أيار/مايو",
    Jun: "جون",
    Jul: "(جول)",
    Aug: "آب/أغسطس",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "كانون",
    January: "كانون",
    Febuary: "Febuary",
    March: "آذار/مارس",
    April: "نيسان/أبريل",
    June: "حزيران/يونيه",
    July: "تموز/يوليه",
    August: "آب/أغسطس",
    September: "أيلول/سبتمبر",
    October: "تشرين",
    November: "تشرين",
    December: "كانون"
  },
  Today: "اليوم"
}, El = {
  Weekdays: {
    Sun: "Qeydiyyat",
    Mon: "Bakı",
    Tue: "Qeydiyyat",
    Wed: "Biznes",
    Thu: "Qeydiyyat",
    Fri: "Bakı",
    Sat: "Bakı",
    Sunday: "Bakı",
    Monday: "Bakı",
    Tuesday: "Bakı",
    Wednesday: "Bakı",
    Thursday: "Bakı",
    Friday: "Bakı",
    Saturday: "Bakı"
  },
  Months: {
    Jan: "Qeydiyyat",
    Feb: "Bakı",
    Mar: "Bakı",
    Apr: "Bakı",
    May: "İyul",
    Jun: "Bakı",
    Jul: "Bakı",
    Aug: "Axtarış",
    Sep: "Bakı",
    Oct: "Axtarış",
    Nov: "Bakı",
    Dec: "Elan",
    January: "Yanvar",
    Febuary: "Bakı",
    March: "Bakı",
    April: "Bakı",
    June: "İyun",
    July: "İyul",
    August: "Avqust",
    September: "Bakı",
    October: "Oktyabr",
    November: "Bakı",
    December: "Bakı"
  },
  Today: "Bu"
}, Ll = {
  Weekdays: {},
  Months: {}
}, Il = {
  Weekdays: {},
  Months: {}
}, Wl = {
  Weekdays: {},
  Months: {}
}, Vl = {
  Weekdays: {
    Sun: "Čeština",
    Mon: "Čeština",
    Tue: "Čeština",
    Wed: "Čeština",
    Thu: "Čeština",
    Fri: "Čeština",
    Sat: "Čeština",
    Sunday: "Neděle",
    Monday: "Pondělí",
    Tuesday: "Úterý",
    Wednesday: "Čeština",
    Thursday: "Čtvrtek",
    Friday: "Pátek",
    Saturday: "Sobota"
  },
  Months: {
    Jan: "Čeština",
    Feb: "Čeština",
    Mar: "Čeština",
    Apr: "Čeština",
    May: "Čeština",
    Jun: "Čeština",
    Jul: "Čeština",
    Aug: "Čeština",
    Sep: "Září",
    Oct: "Čeština",
    Nov: "Novinky",
    Dec: "Čeština",
    January: "Leden",
    Febuary: "Čeština",
    March: "Březen",
    April: "Duben",
    June: "Června",
    July: "Červenec",
    August: "Srpen",
    September: "Září",
    October: "Říjen",
    November: "Novinky",
    December: "Hledat"
  },
  Today: "Dnes"
}, zl = {
  Weekdays: {
    Sun: "Solens",
    Mon: "Mon",
    Tue: "Billeder",
    Wed: "I",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Tillykke",
    Sunday: "Søndag",
    Monday: "Mandag",
    Tuesday: "Tirsdag",
    Wednesday: "Onsdag",
    Thursday: "Torsdag",
    Friday: "Fredag",
    Saturday: "Lørdag"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "Maj",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "Januar",
    Febuary: "Uskyldig",
    March: "Marts",
    April: "April",
    June: "Juni",
    July: "Juli",
    August: "August",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "December"
  },
  Today: "I"
}, Al = {
  Weekdays: {
    Sun: "Sonne",
    Mon: "Mongolei",
    Tue: "Tue",
    Wed: "Weide",
    Thu: "Thunfisch",
    Sat: "Saat",
    Sunday: "Sonntag",
    Monday: "Montag",
    Tuesday: "Dienstag",
    Wednesday: "Mittwoch",
    Thursday: "Donnerstag",
    Friday: "Freitag",
    Saturday: "Samstag"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Marsch",
    Apr: "Apr",
    May: "Mai",
    Jun: "Juni",
    Jul: "Juli",
    Aug: "Aug",
    Sep: "September",
    Oct: "Ok",
    Nov: "Nov",
    Dec: "Deko",
    January: "Januar",
    Febuary: "Februar",
    March: "März",
    April: "April",
    June: "Juni",
    July: "Juli",
    August: "August",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "Dezember"
  },
  Today: "Heute"
}, Ul = {
  Weekdays: {},
  Months: {}
}, Rl = {
  Weekdays: {
    Sun: "Suno",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Ni",
    Thu: "Tumulto",
    Fri: "Frio",
    Sat: "Sidanta",
    Sunday: "Dimanĉo",
    Monday: "Lundon",
    Tuesday: "Marŝi",
    Wednesday: "Merkredo",
    Thursday: "Ĵaŭdon",
    Friday: "Vendrede",
    Saturday: "Sabato"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Marŝa",
    Apr: "Apr",
    May: "Majo",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aŭgusto",
    Sep: "Sep",
    Oct: "Oktobro",
    Nov: "Nov",
    Dec: "Dec",
    January: "Januaro",
    Febuary: "Febuary",
    March: "Marto",
    April: "April",
    June: "Junio",
    July: "Julio",
    August: "Aŭgusto",
    September: "Septembro",
    October: "Oktobro",
    November: "Novembro",
    December: "Decembro"
  },
  Today: "Hodiaŭ"
}, jl = {
  Weekdays: {
    Sun: "Sol",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sunday: "Domingo",
    Monday: "Lunes",
    Tuesday: "Martes",
    Wednesday: "Miércoles",
    Thursday: "Jueves",
    Friday: "Viernes",
    Saturday: "Sábado"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "Mayo",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "Enero",
    Febuary: "Febuary",
    March: "Marzo",
    April: "Abril",
    June: "Junio",
    July: "Julio",
    August: "Agosto",
    September: "Septiembre",
    October: "Octubre",
    November: "Noviembre",
    December: "Diciembre"
  },
  Today: "Hoy"
}, Hl = {
  Weekdays: {},
  Months: {}
}, Tl = {
  Weekdays: {
    Sun: "خورشید",
    Mon: "مون",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "تو",
    Fri: "Fri",
    Sat: "Sat",
    Sunday: "یکشنبه",
    Monday: "دوشنبه",
    Tuesday: "سه",
    Wednesday: "چهارشنبه",
    Thursday: "پنجشنبه",
    Friday: "جمعه",
    Saturday: "شنبه"
  },
  Months: {
    Jan: "ژانویه",
    Feb: "فوریه",
    Mar: "Mar",
    Apr: "آوریل",
    May: "ممکن",
    Jun: "Jun",
    Jul: "جول",
    Aug: "آگوست",
    Sep: "سپتامبر",
    Oct: "اکتبر",
    Nov: "نوامبر",
    Dec: "دسامبر",
    January: "ژانویه",
    Febuary: "فوریه",
    March: "مارس",
    April: "آوریل",
    June: "ژوئن",
    July: "جولای",
    August: "آگوست",
    September: "سپتامبر",
    October: "اکتبر",
    November: "نوامبر",
    December: "دسامبر"
  },
  Today: "امروز"
}, Yl = {
  Weekdays: {
    Sun: "Aurinko",
    Mon: "Mon",
    Tue: "Tu",
    Wed: "Häät",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sattumaa",
    Sunday: "Sunnuntai",
    Monday: "Maanantaina",
    Tuesday: "Tiistaina",
    Wednesday: "Keskiviikko",
    Thursday: "Torstaina",
    Friday: "Perjantaina",
    Saturday: "Lauantaina"
  },
  Months: {
    Jan: "Ja",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Ap",
    May: "May",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "Tammikuu",
    Febuary: "Feby",
    March: "Maaliskuu",
    April: "Huhtikuu",
    June: "Kesäkuuta",
    July: "Heinäkuu",
    August: "Elokuu",
    September: "Syyskuu",
    October: "Lokakuu",
    November: "Marraskuu",
    December: "Joulukuuta"
  },
  Today: "Tänään"
}, ql = {
  Weekdays: {
    Sun: "Sun",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sunday: "Dimanche",
    Monday: "Lundi",
    Tuesday: "Mardi",
    Wednesday: "Mercredi",
    Thursday: "Jeudi",
    Friday: "Vendredi",
    Saturday: "Samedi"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "Mai",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "Janvier",
    Febuary: "Febuary",
    March: "Mars",
    April: "Avril",
    June: "Juin",
    July: "Juillet",
    August: "Août",
    September: "Septembre",
    October: "Octobre",
    November: "Novembre",
    December: "Décembre"
  },
  Today: "Aujourd'hui"
}, Kl = {
  Weekdays: {
    Sun: "Ghrian",
    Mon: "Uisce",
    Tue: "Inis",
    Wed: "Táimid",
    Thu: "Thuama",
    Fri: "Múirín",
    Sat: "Sábháil",
    Sunday: "Domhnach",
    Monday: "Inis",
    Tuesday: "Dé",
    Wednesday: "Dé",
    Thursday: "Déardaoin",
    Friday: "Dé",
    Saturday: "Dé"
  },
  Months: {
    Jan: "Inis",
    Feb: "Is",
    Mar: "Mar",
    Apr: "Aibreán",
    May: "Bealtaine",
    Jun: "Amharc",
    Jul: "Jul",
    Aug: "Lúnasa",
    Sep: "Meán",
    Oct: "Deireadh",
    Nov: "Cineál",
    Dec: "Déan",
    January: "Inis",
    Febuary: "Amharc",
    March: "Márta",
    April: "Aibreán",
    June: "Meitheamh",
    July: "Irl",
    August: "Amharc",
    September: "Meán",
    October: "Deireadh",
    November: "Samhain",
    December: "Irl"
  },
  Today: "Sa"
}, Cl = {
  Weekdays: {
    Sun: "השמש",
    Mon: "מונמון",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "תור",
    Fri: "פרי",
    Sat: "Sat",
    Sunday: "יום",
    Monday: "יום",
    Tuesday: "יום",
    Wednesday: "יום",
    Thursday: "יום",
    Friday: "יום",
    Saturday: "שבת"
  },
  Months: {
    Jan: "יאן",
    Feb: "פברואר",
    Mar: "Mar",
    Apr: "אנגלית",
    May: "במאי",
    Jun: "ג'ון",
    Jul: "יולי",
    Aug: "אוגוסט",
    Sep: "ספרד",
    Oct: "באוקטובר",
    Nov: "נובמבר",
    Dec: "דצמבר",
    January: "ינואר",
    Febuary: "פברואר",
    March: "מרץ",
    April: "אפריל",
    June: "יוני",
    July: "יולי",
    August: "אוגוסט",
    September: "ספטמבר",
    October: "אוקטובר",
    November: "נובמבר",
    December: "דצמבר"
  },
  Today: "היום"
}, Gl = {
  Weekdays: {
    Sun: "सूर्य",
    Mon: "सोम",
    Tue: "मंगल",
    Wed: "Wed",
    Thu: "गुरु",
    Fri: "शुक्र",
    Sat: "सत",
    Sunday: "रविवार",
    Monday: "सोमवार",
    Tuesday: "मंगलवार",
    Wednesday: "बुधवार",
    Thursday: "गुरुवार",
    Friday: "शुक्रवार",
    Saturday: "शनिवार"
  },
  Months: {
    Jan: "जनवरी",
    Feb: "फ़रवरी",
    Mar: "मार्च",
    Apr: "अप्रैल",
    May: "मई",
    Jun: "जून",
    Jul: "जुलाई",
    Aug: "अगस्त",
    Sep: "सितंबर",
    Oct: "अक्टूबर",
    Nov: "नवम्बर",
    Dec: "दिसम्बर",
    January: "जनवरी",
    Febuary: "फ़रवरी",
    March: "मार्च",
    April: "अप्रैल",
    June: "जून",
    July: "जुलाई",
    August: "अगस्त",
    September: "सितंबर",
    October: "अक्टूबर",
    November: "नवंबर",
    December: "दिसम्बर"
  },
  Today: "आज"
}, Xl = {
  Weekdays: {
    Sun: "Nap",
    Mon: "Mondja",
    Tue: "Utolsó",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Friss",
    Sat: "Sátán",
    Sunday: "Vasárnap",
    Monday: "Hétfő",
    Tuesday: "Kedd",
    Wednesday: "Szerda",
    Thursday: "Csütörtök",
    Friday: "Péntek",
    Saturday: "Szombat"
  },
  Months: {
    Jan: "Jan",
    Feb: "Február",
    Mar: "Mária",
    Apr: "Apr",
    May: "Május",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Oct",
    Nov: "Nov",
    Dec: "Dec",
    January: "Január",
    Febuary: "Február",
    March: "Március",
    April: "Április",
    June: "Június",
    July: "Július",
    August: "Augusztus",
    September: "Szeptember",
    October: "Október",
    November: "November",
    December: "December"
  },
  Today: "Ma"
}, Ql = {
  Weekdays: {
    Sun: "Login",
    Mon: "Login",
    Tue: "Login",
    Wed: "Login",
    Thu: "Login",
    Fri: "Login",
    Sat: "Login",
    Sunday: "Login",
    Monday: "Sitemap",
    Tuesday: "Sitemap",
    Wednesday: "Sitemap",
    Thursday: "Sitemap",
    Friday: "Sitemap",
    Saturday: "Login"
  },
  Months: {
    Jan: "Login",
    Feb: "Login",
    Mar: "Login",
    Apr: "Login",
    May: "Sitemap",
    Jun: "Login",
    Jul: "Login",
    Aug: "Login",
    Sep: "Login",
    Oct: "Login",
    Nov: "Login",
    Dec: "Login",
    January: "Login",
    Febuary: "Login",
    March: "Login",
    April: "Login",
    June: "Juni",
    July: "Login",
    August: "Sitemap",
    September: "Login",
    October: "Oktober",
    November: "Sitemap",
    December: "Login"
  },
  Today: "Sitemap"
}, Zl = {
  Weekdays: {
    Sun: "Sole",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Gio",
    Fri: "Fri",
    Sat: "Rasoio",
    Sunday: "Domenica",
    Monday: "Lunedì",
    Tuesday: "Martedì",
    Wednesday: "Mercoledì",
    Thursday: "Giovedì",
    Friday: "Venerdì",
    Saturday: "Sabato"
  },
  Months: {
    Jan: "Jan",
    Feb: "Febbraio",
    Mar: "Mar",
    Apr: "Aprile",
    May: "Maggio",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Agosto",
    Sep: "Articolo",
    Oct: "Ottobre",
    Nov: "No",
    Dec: "Dec",
    January: "Gennaio",
    Febuary: "Feburio",
    March: "Marzo",
    April: "Aprile",
    June: "Giugno",
    July: "Luglio",
    August: "Agosto",
    September: "Settembre",
    October: "Ottobre",
    November: "Novembre",
    December: "Dicembre"
  },
  Today: "Oggi"
}, es = {
  Weekdays: {
    Sun: "日曜日",
    Mon: "モンテネグロ",
    Tue: "火曜日",
    Wed: "お問い合わせ",
    Thu: "日",
    Fri: "フリガナ",
    Sat: "スタッフ",
    Sunday: "日曜日",
    Monday: "月曜日",
    Tuesday: "火曜日",
    Wednesday: "水曜日",
    Thursday: "木曜日",
    Friday: "金曜日",
    Saturday: "土曜日"
  },
  Months: {
    Jan: "1月1日",
    Feb: "1月2日",
    Mar: "マーキー",
    Apr: "4月4日",
    May: "5月5日",
    Jun: "ジュンジュン",
    Jul: "7月7日",
    Aug: "8月8日",
    Sep: "9月9日",
    Oct: "10月10日",
    Nov: "11月11日",
    Dec: "12月12日",
    January: "1月1日",
    Febuary: "2月1日",
    March: "3月3日",
    April: "4月4日",
    June: "6月6日",
    July: "7月7日",
    August: "8月8日",
    September: "9月9日",
    October: "10月10日",
    November: "11月11日",
    December: "12月12日"
  },
  Today: "今日更新"
}, ts = {
  Weekdays: {
    Sun: "(주)",
    Mon: "담당자",
    Tue: " ",
    Wed: "사이트맵",
    Thu: "₢",
    Fri: "·",
    Sat: "·",
    Sunday: "주",
    Monday: "월요일,",
    Tuesday: "*",
    Wednesday: "-",
    Thursday: "주",
    Friday: "월~금",
    Saturday: "·"
  },
  Months: {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "주",
    Jul: "7",
    Aug: "8",
    Sep: "9월",
    Oct: "10월",
    Nov: "11월",
    Dec: "12월",
    January: "1월",
    Febuary: "주",
    March: "3",
    April: "4",
    June: "6월",
    July: "7",
    August: "8",
    September: "9",
    October: "10월",
    November: "11",
    December: "12"
  },
  Today: "으로"
}, as = {
  Weekdays: {},
  Months: {}
}, ls = {
  Weekdays: {},
  Months: {}
}, ss = {
  Weekdays: {},
  Months: {}
}, ns = {
  Weekdays: {},
  Months: {}
}, os = {
  Weekdays: {},
  Months: {}
}, rs = {
  Weekdays: {},
  Months: {}
}, us = {
  Weekdays: {
    Sun: "Sol",
    Mon: "Monsenhor",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Tu",
    Fri: "Frio",
    Sat: "Satisfeito",
    Sunday: "Domingo",
    Monday: "Segunda-feira",
    Tuesday: "Terça-feira",
    Wednesday: "Quarta-feira",
    Thursday: "Quinta-feira",
    Friday: "Sexta-feira",
    Saturday: "Sábado"
  },
  Months: {
    Jan: "Jan",
    Feb: "Fev",
    Mar: "Mar",
    Apr: "Abr",
    May: "Maio",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Au",
    Sep: "Sep",
    Oct: "O",
    Nov: "Não",
    Dec: "Dez",
    January: "Janeiro",
    Febuary: "Fevereiro",
    March: "Março",
    April: "Abril",
    June: "Junho",
    July: "Julho",
    August: "Agosto",
    September: "Setembro",
    October: "Outubro",
    November: "Novembro",
    December: "Dezembro"
  },
  Today: "Hoje"
}, is = {
  Weekdays: {},
  Months: {}
}, ds = {
  Weekdays: {
    Sun: "Солнце",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Фу",
    Fri: "Фри",
    Sat: "Sat",
    Sunday: "Воскресенье",
    Monday: "Понедельник",
    Tuesday: "Вторник",
    Wednesday: "Среда",
    Thursday: "Четверг",
    Friday: "Пятница",
    Saturday: "Суббота"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "Май",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Октябрь",
    Nov: "Nov",
    Dec: "Дек",
    January: "Январь",
    Febuary: "Febuary",
    March: "Марта",
    April: "Апрель",
    June: "Июнь",
    July: "Июль",
    August: "Август",
    September: "Сентябрь",
    October: "Октябрь",
    November: "Ноябрь",
    December: "Декабрь"
  },
  Today: "Сегодня"
}, cs = {
  Weekdays: {
    Sun: "Slnko",
    Mon: "Slovenčina",
    Tue: "Tu",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Aktuality",
    Sat: "Aktuality",
    Sunday: "Nedeľa",
    Monday: "Pondelok",
    Tuesday: "Utorok",
    Wednesday: "Aktuality",
    Thursday: "Štvrtok",
    Friday: "Piatok",
    Saturday: "Sobota"
  },
  Months: {
    Jan: "Slovenčina",
    Feb: "Všeobecný",
    Mar: "Slovenčina",
    Apr: "Aktuality",
    May: "Máj",
    Jun: "Jún",
    Jul: "Júl",
    Aug: "Aktuality",
    Sep: "Seps",
    Oct: "Aktuality",
    Nov: "Novinka",
    Dec: "Aktuality",
    January: "Aktuality",
    Febuary: "Rezorty",
    March: "Marec",
    April: "Apríl",
    June: "Jún",
    July: "Júl",
    August: "Aktuality",
    September: "Septembra",
    October: "Október",
    November: "Novembra",
    December: "Decembra"
  },
  Today: "Dnes"
}, hs = {
  Weekdays: {},
  Months: {}
}, ps = {
  Weekdays: {},
  Months: {}
}, bs = {
  Weekdays: {},
  Months: {}
}, ms = {
  Weekdays: {
    Sun: "Sol",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sattar",
    Sunday: "Söndag",
    Monday: "Måndag",
    Tuesday: "Tisdag",
    Wednesday: "Onsdag",
    Thursday: "Torsdag",
    Friday: "Fredag",
    Saturday: "Lördag"
  },
  Months: {
    Jan: "Jan",
    Feb: "Feb",
    Mar: "Mar",
    Apr: "Apr",
    May: "Maj",
    Jun: "Jun",
    Jul: "Jul",
    Aug: "Aug",
    Sep: "Sep",
    Oct: "Okt",
    Nov: "Nov",
    Dec: "Dec",
    January: "Januari",
    Febuary: "Febuary",
    March: "Mars",
    April: "April",
    June: "Juni",
    July: "Juli",
    August: "Augusti",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "December"
  },
  Today: "Idag"
}, fs = {
  Weekdays: {},
  Months: {}
}, gs = {
  Weekdays: {},
  Months: {}
}, vs = {
  Weekdays: {
    Sun: "Güneş",
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sunday: "Pazar",
    Monday: "Pazartesi",
    Tuesday: "Salı",
    Wednesday: "Çarşamba",
    Thursday: "Perşembe",
    Friday: "Cuma",
    Saturday: "Cumartesi"
  },
  Months: {
    Jan: "Jan",
    Feb: "Şubat",
    Mar: "Mar",
    Apr: "Apr",
    May: "Mayıs",
    Jun: "Jun",
    Jul: "Temmuz",
    Aug: "Ağu",
    Sep: "Eylül",
    Oct: "Ekim",
    Nov: "Kasım",
    Dec: "Aralık",
    January: "Ocak",
    Febuary: "Şubat",
    March: "Mart",
    April: "Nisan",
    June: "Haziran",
    July: "Temmuz",
    August: "Ağustos",
    September: "Eylül",
    October: "Ekim",
    November: "Kasım",
    December: "Aralık"
  },
  Today: "Bugün"
}, ys = {
  Weekdays: {
    Sun: "Сонце",
    Mon: "Навігація",
    Tue: "Твитнуть",
    Wed: "Смоктати",
    Thu: "Чорти",
    Fri: "П'ятниця",
    Sat: "Сонце",
    Sunday: "Неділя",
    Monday: "Понеділок",
    Tuesday: "Вівторок",
    Wednesday: "Середа",
    Thursday: "Четвер",
    Friday: "П'ятниця",
    Saturday: "Субота"
  },
  Months: {
    Jan: "Мар",
    Feb: "Мар",
    Mar: "Мар",
    Apr: "Мар",
    May: "Травень",
    Jun: "Мар",
    Jul: "Мар",
    Aug: "Мар",
    Sep: "Мар",
    Oct: "Мар",
    Nov: "Мар",
    Dec: "Мар",
    January: "Січень",
    Febuary: "Маргарія",
    March: "Березень",
    April: "Квітень",
    June: "Червень",
    July: "Липень",
    August: "Серпень",
    September: "Вересень",
    October: "Жовтень",
    November: "Листопад",
    December: "Грудень"
  },
  Today: "Сьогодні"
}, _s = {
  Weekdays: {},
  Months: {}
}, ks = {
  Weekdays: {},
  Months: {}
}, cn = {
  en: Nl,
  ar: Pl,
  az: El,
  bg: Ll,
  bn: Il,
  ca: Wl,
  cs: Vl,
  da: zl,
  de: Al,
  el: Ul,
  eo: Rl,
  es: jl,
  et: Hl,
  fa: Tl,
  fi: Yl,
  fr: ql,
  ga: Kl,
  he: Cl,
  hi: Gl,
  hu: Xl,
  id: Ql,
  it: Zl,
  ja: es,
  ko: ts,
  lt: as,
  lv: ls,
  ms: ss,
  nb: ns,
  nl: os,
  pl: rs,
  pt: us,
  ro: is,
  ru: ds,
  sk: cs,
  sl: hs,
  sq: ps,
  sr: bs,
  sv: ms,
  th: fs,
  tl: gs,
  tr: vs,
  uk: ys,
  zh: _s,
  zt: ks
}, hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Pl,
  az: El,
  bg: Ll,
  bn: Il,
  ca: Wl,
  cs: Vl,
  da: zl,
  de: Al,
  default: cn,
  el: Ul,
  en: Nl,
  eo: Rl,
  es: jl,
  et: Hl,
  fa: Tl,
  fi: Yl,
  fr: ql,
  ga: Kl,
  he: Cl,
  hi: Gl,
  hu: Xl,
  id: Ql,
  it: Zl,
  ja: es,
  ko: ts,
  lt: as,
  lv: ls,
  ms: ss,
  nb: ns,
  nl: os,
  pl: rs,
  pt: us,
  ro: is,
  ru: ds,
  sk: cs,
  sl: hs,
  sq: ps,
  sr: bs,
  sv: ms,
  th: fs,
  tl: gs,
  tr: vs,
  uk: ys,
  zh: _s,
  zt: ks
}, Symbol.toStringTag, { value: "Module" })), pn = {
  Button: nn,
  Filter: rn,
  Pagination: dn,
  Date: hn
}, V = (e, l) => {
  let a = pn[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[l.value] === void 0 ? a = a.en : a = a[l.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, bn = /* @__PURE__ */ w({
  __name: "button-add",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Add", s),
      icon: "plus",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), $s = /* @__PURE__ */ w({
  __name: "button-cancel",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Cancel", s),
      icon: "window-close",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), mn = /* @__PURE__ */ w({
  __name: "button-delete",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Delete", s),
      icon: "trash-alt",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), fn = /* @__PURE__ */ w({
  __name: "button-disable",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Disable", s),
      icon: "times-circle",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), gn = /* @__PURE__ */ w({
  __name: "button-download",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Download", s),
      icon: "download",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), vn = /* @__PURE__ */ w({
  __name: "button-edit",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Edit", s),
      icon: "edit",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), yn = /* @__PURE__ */ w({
  __name: "button-enable",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Enable", s),
      icon: "check",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), Ss = /* @__PURE__ */ w({
  __name: "button-okay",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Okay", s),
      icon: "check",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), _n = /* @__PURE__ */ w({
  __name: "button-print",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Print", s),
      icon: "print",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), Ms = /* @__PURE__ */ w({
  __name: "button-refresh",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Refresh", s),
      icon: "sync",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), kn = /* @__PURE__ */ w({
  __name: "button-save",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Save", s),
      icon: "save",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), $n = /* @__PURE__ */ w({
  __name: "button-upload",
  props: {
    disabled: { type: Boolean },
    size: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = q(J), n = g(() => ({
      Title: V("Button.Upload", s),
      icon: "upload",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (i, o) => (d(), E(Q, X(n.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), Sn = { class: "card-header" }, Mn = { class: "card-content" }, Dn = { class: "card-footer" }, Ds = /* @__PURE__ */ w({
  __name: "card",
  props: {
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean }
  },
  setup(e) {
    const l = e, a = {
      addonclass: "card-footer-item"
    }, t = {
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (s, n) => (d(), m("div", {
      class: x(["card", { "is-fullwidth": l.fullWidth, "is-fullheight": l.fullHeight }])
    }, [
      y("div", Sn, [
        z(s.$slots, "header", me(fe(t)))
      ]),
      y("div", Mn, [
        z(s.$slots, "content")
      ]),
      y("div", Dn, [
        z(s.$slots, "footer", me(fe(a)))
      ])
    ], 2));
  }
}), wn = /* @__PURE__ */ w({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: Ie.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: l }) {
    const a = F(null), t = e, s = l;
    let n = null;
    const i = () => {
      n != null && n.update();
    }, o = g(() => {
      var u = "";
      return t.width && (u = `width:${t.width}px;`), t.height && (u += `height:${t.height}px;`), u;
    });
    return U([t.type], (u) => {
      n != null && (n.type = u ?? "line");
    }), U(
      [t.labels],
      (u) => {
        n != null && (n.data.labels = u, (t.showRefresh == null || !t.showRefresh) && i());
      },
      { deep: !0 }
    ), U(
      [t.datasets],
      (u) => {
        n != null && (n.data.datasets = u, (t.showRefresh == null || !t.showRefresh) && i());
      },
      { deep: !0 }
    ), re(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${t.legendPosition}`,
            labels: {
              filter: (c, h) => c.text != null
            },
            onClick: function(c, h) {
              s("legendItemClick", n, h);
            }
          }
        }
      };
      t.scales != null && t.scales != null && (u.scales = t.scales), t.tooltips != null && t.tooltips != null && (u.tooltips = t.tooltips);
      const r = await import("chart");
      n = new r(a.val.getContext("2d"), {
        type: t.type == null ? "line" : t.type,
        data: {
          datasets: t.datasets,
          labels: t.labels
        },
        options: u
      }), n.update();
    }), (u, r) => (d(), E(Ds, null, Ts({
      content: A(() => [
        y("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ce(o.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      t.title ? {
        name: "header",
        fn: A((c) => [
          y("h3", {
            class: x(c.headerClass)
          }, N(t.title), 3)
        ]),
        key: "0"
      } : void 0,
      t.showRefresh != null && t.showRefresh != null && t.showRefresh ? {
        name: "footer",
        fn: A((c) => [
          L(Ms, X(c, { onClick: i }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), On = /* @__PURE__ */ w({
  __name: "check-mark",
  setup(e) {
    return (l, a) => (d(), E(K, {
      icon: "check",
      size: S(C).small
    }, null, 8, ["size"]));
  }
}), Ye = async (e, l, a) => {
  let t = await import(e);
  const s = Object.keys(t);
  return l && s.sort(l), s.filter((n) => a === void 0 || a.value.test(n)).map((n) => t[n]);
}, Fn = /* @__PURE__ */ w({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const l = F(null), a = e, t = g(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return U([a.url, a.filter], async () => {
      l.value = await Ye(a.url, a.sortMethod, t);
    }), re(async () => {
      l.value = await Ye(a.url, a.sortMethod, t);
    }), (s, n) => (d(!0), m(T, null, G(l.value, (i) => (d(), E(he(i), me(fe(a.props)), null, 16))), 256));
  }
}), Bn = { class: "control has-icons-left" }, xn = ["placeholder"], Jn = { class: "icon is-small is-left" }, Nn = /* @__PURE__ */ w({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = q(J), n = g(() => V("Filter.Filter", s)), i = F(null);
    U([i], (u) => {
      u[0] === "" && a.default_value && (i.value = a.default_value, t("filter", i.value == "" ? null : i.value));
    });
    const o = (u) => {
      u.keyCode == 13 && t("filter", i.value == "" ? null : i.value);
    };
    return re(() => {
      a.default_value && (i.value = a.default_value);
    }), (u, r) => (d(), m("div", Bn, [
      R(y("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: n.value,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => i.value = c),
        onKeypress: o
      }, null, 40, xn), [
        [pe, i.value]
      ]),
      y("span", Jn, [
        L(K, { icon: "filter" })
      ])
    ]));
  }
}), Pn = {
  key: 0,
  class: "message-header"
}, En = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Ln = { class: "message-body" }, In = /* @__PURE__ */ w({
  __name: "message",
  props: {
    type: { default: Y.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: oe.normal }
  },
  setup(e) {
    const l = e, a = g(() => l.size === oe.normal ? null : `is-${l.size}`), t = g(() => `is-${l.type}`);
    return (s, n) => (d(), m("article", {
      class: x(["message", a.value, t.value])
    }, [
      l.title ? (d(), m("div", Pn, [
        y("p", null, N(l.title), 1),
        l.hasDelete ? (d(), m("button", En)) : I("", !0)
      ])) : I("", !0),
      y("div", Ln, [
        ee(N(l.message) + " ", 1),
        z(s.$slots, "default")
      ])
    ], 2));
  }
}), ce = /* @__PURE__ */ w({
  __name: "notification",
  props: {
    type: { default: le.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, t) => (d(), m("div", {
      class: x(["notification", "is-" + l.type, l.light ? "is-light" : ""])
    }, [
      ee(N(l.message) + " ", 1),
      z(a.$slots, "default")
    ], 2));
  }
}), Wn = {
  key: 0,
  class: "modal-background"
}, Vn = {
  key: 0,
  class: "title"
}, zn = { class: "block" }, An = /* @__PURE__ */ w({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: le.info },
    message: {},
    header: {},
    blockUser: { type: Boolean },
    hasClose: { type: Boolean },
    isLight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = g(() => {
      switch (a.type) {
        case le.info:
          return "circle-info";
        case le.success:
          return "circle-check";
        case le.danger:
          return "bug";
        case le.warning:
          return "circle-exclamation";
      }
    }), n = g(() => {
      var i = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && i.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || i.push("has-no-close"), i;
    });
    return (i, o) => (d(), m("div", {
      class: x({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (d(), m("div", Wn)) : I("", !0),
      L(ot, {
        incoming: S(Me).fadeIn,
        outgoing: S(Me).fadeOut,
        speed: S(ue).slower
      }, {
        default: A(() => [
          a.visible ? (d(), m("div", {
            key: 0,
            class: x(n.value)
          }, [
            L(K, {
              icon: s.value,
              size: S(C).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (d(), m("h1", Vn, N(a.header), 1)) : I("", !0),
            y("div", zn, N(a.message), 1),
            a.hasClose ? (d(), E(K, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (u) => t("close")),
              size: S(C).large
            }, null, 8, ["size"])) : I("", !0)
          ], 2)) : I("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Un = ["title", "disabled"], Rn = ["title", "disabled"], jn = /* @__PURE__ */ w({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: !0 },
    hasprevious: { type: Boolean, default: !0 },
    size: { default: oe.small },
    rounded: { type: Boolean, default: !1 },
    buttonType: {}
  },
  emits: ["moveForward", "moveBack"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = q(J), n = g(() => V(a.usenext ? "Pagination.Previous" : "Pagination.Older", s)), i = g(() => V(a.usenext ? "Pagination.Next" : "Pagination.Newer", s)), o = g(() => a.buttonType ? `has-background-${a.buttonType}` : ""), u = g(() => a.hasprevious ?? !0), r = g(() => a.hasmore ?? !0), c = function() {
      u || t("moveBack");
    }, h = function() {
      r || t("moveForward");
    };
    return (f, k) => R((d(), m("nav", {
      class: x(["pagination", o.value]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      y("a", {
        class: x(["pagination-previous", o.value]),
        title: n.value,
        onClick: c,
        disabled: u.value
      }, [
        L(K, {
          icon: "backward",
          size: S(C).small
        }, null, 8, ["size"]),
        ee(" " + N(n.value), 1)
      ], 10, Un),
      y("a", {
        class: x(["pagination-next", o.value]),
        title: i.value,
        onClick: h,
        disabled: r.value
      }, [
        ee(N(i.value) + " ", 1),
        L(K, {
          icon: "forward",
          size: S(C).small
        }, null, 8, ["size"])
      ], 10, Rn)
    ], 2)), [
      [ne, a.hasmore || a.hasprevious]
    ]);
  }
});
function ve(e) {
  return typeof e == "function" ? e() : S(e);
}
function Hn(e, l = 200) {
  const a = F(!1), t = F(!1), s = g(() => !a.value && !t.value), n = F(!1), i = F(), o = F();
  let u;
  return U(
    () => ve(e),
    (r) => {
      if (a.value = !1, t.value = !1, i.value = null, !r) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const c = Number(ve(l)) || 0;
      c > 0 ? (n.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        n.value = !0;
      }, c)) : n.value = !0, r.then((h) => {
        r === ve(e) && (o.value = h, t.value = !0);
      }).catch((h) => {
        r === ve(e) && (i.value = h, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: s, isRejected: a, isResolved: t, isDelayElapsed: n, error: i, data: o };
}
const Tn = /* @__PURE__ */ w({
  name: "Promised",
  props: {
    promise: {},
    // validator: p =>
    //   p && typeof (p as any).then === 'function' && typeof (p as any).catch === 'function',
    pendingDelay: {
      type: [Number, String],
      default: 200
    }
  },
  setup(e, { slots: l }) {
    const a = Ys(e), t = Ge(
      Hn(a.promise, a.pendingDelay)
    );
    return () => {
      if ("combined" in l)
        return l.combined(t);
      const [s, n] = t.isRejected ? ["rejected", t.error] : t.isPending ? t.isDelayElapsed ? ["pending", t.data] : [null] : ["default", t.data];
      return s && !l[s] ? (qs(
        `(vue-promised) Missing slot "${s}" in Promised component. Pass an empty "${s}" slot or use the "combined" slot to remove this warning. This will fail in production.`
      ), null) : s && l[s](n);
    };
  }
}), Oe = Tn, Yn = ["value", "max"], Fe = /* @__PURE__ */ w({
  __name: "progress",
  props: {
    type: { default: Y.primary },
    size: { default: oe.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const l = e;
    return g(() => l.maximum === void 0 ? null : (l.value ?? 0) / l.maximum), (a, t) => (d(), m("progress", {
      class: x(`progress is-${l.size} is-${l.type}`),
      value: l.value,
      max: l.maximum
    }, "{percentage ? `${percentage}%` : null}", 10, Yn));
  }
}), qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ot,
  Button: Q,
  ButtonAdd: bn,
  ButtonCancel: $s,
  ButtonDelete: mn,
  ButtonDisable: fn,
  ButtonDownload: gn,
  ButtonEdit: vn,
  ButtonEnable: yn,
  ButtonOkay: Ss,
  ButtonPrint: _n,
  ButtonRefresh: Ms,
  ButtonSave: kn,
  ButtonUpload: $n,
  Chart: wn,
  CheckMark: On,
  DynamicSlot: Fn,
  Filter: Nn,
  Icon: K,
  Message: In,
  Notification: ce,
  PageNotification: An,
  Pagination: jn,
  Progress: Fe,
  Promised: Oe
}, Symbol.toStringTag, { value: "Module" })), Kn = /* @__PURE__ */ w({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = F(!1), n = F(!1), i = F(null), o = g(() => (t.disabled ?? !1) || n.value && t.handlesearch !== null), u = g(() => {
      let h = [];
      return o || h.push("has-cursor"), s.value ? h.push("is-move") : h.push("is-grab"), h;
    }), r = (h) => o.value ? (h.preventDefault(), !1) : (h.stopPropagation(), h.dataTransfer.setData("value", JSON.stringify(t.CopyData)), s.value = !0, a("started"), !0), c = () => {
      s.value = !1, n.value = !0, a("stopped");
    };
    return re(() => {
      if (t.handlesearch) {
        let h = $(i.value).find(t.handlesearch);
        h.length > 0 && (n.value = !0, h.on("mousedown", () => n.value = !1), h.on("mouseup", () => n.value = !0));
      }
    }), (h, f) => (d(), E(he(t.tag), {
      ref_key: "handle",
      ref: i,
      draggable: !0,
      onDragstart: r,
      onDragend: c,
      class: x(u.value)
    }, {
      default: A(() => [
        z(h.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Cn = /* @__PURE__ */ w({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = F(!1), n = F(null), i = F(null);
    g(() => a.tag ?? "div");
    const o = (f) => {
      const k = i.value.getBoundingClientRect(), B = {
        x: k.x + k.width / 2,
        y: k.y + k.height / 2
      };
      let p = Z.center;
      return f.x < B.x ? f.y < B.y ? p = Z.topLeft : p = Z.bottomLeft : f.y < B.y ? p = Z.topRight : p = Z.bottomRight, n.value = p, n.value;
    }, u = (f) => {
      f.preventDefault(), s.value = !0, t("itemEntered", o(f));
    }, r = (f) => {
      s.value = !0, t("itemExited", o(f));
    }, c = (f) => {
      f.preventDefault(), t("itemMoved", o(f));
    }, h = (f) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(f.dataTransfer.getData("value"))))
        return !1;
      f.stopPropagation(), f.preventDefault(), t("itemAdded", JSON.parse(f.dataTransfer.getData("value")), n.value), s.value = !1;
    };
    return (f, k) => (d(), E(he(a.tag), {
      ref_key: "handle",
      ref: i,
      class: x({ "is-bordered": s.value }),
      onDragenter: u,
      onDragleave: r,
      onDrop: h,
      onDragover: c
    }, {
      default: A(() => [
        z(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), ws = /* @__PURE__ */ w({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const l = e, a = g(() => {
      var t = ["block-list", "has-radius", `is-${l.type ?? "primary"}`];
      return l.compact && t.push("is-small"), l.outlined && t.push("is-outlined"), l.highlighted && t.push("is-highlighted"), t;
    });
    return (t, s) => (d(), E(he(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: x(a.value)
    }, {
      default: A(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $e = /* @__PURE__ */ w({
  __name: "list-item",
  props: {
    type: {},
    outlined: { type: Boolean },
    highlighted: { type: Boolean },
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = g(() => {
      var n = [];
      return a.type && n.push("is-" + a.type), a.outlined && n.push("is-outlined"), a.highlighted && n.push("is-highlighted"), a.icon && n.push("has-icon"), n;
    });
    return (n, i) => (d(), m("li", {
      class: x(s.value)
    }, [
      a.icon ? (d(), m("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: i[0] || (i[0] = (o) => t("click"))
      }, [
        L(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : I("", !0),
      z(n.$slots, "default")
    ], 2));
  }
}), Gn = /* @__PURE__ */ w({
  __name: "sortable",
  props: {
    Items: {},
    type: { default: Y.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = F([]), n = F(-1), i = F(-1), o = F(null);
    U(a.Items, (f, k) => {
      s.value = [...k];
    }), re(() => {
      a.Items !== null && (s.value = [...a.Items]);
    });
    const u = (f) => {
      var k = f.target.getBoundingClientRect(), B = {
        x: k.x + k.width / 2,
        y: k.y + k.height / 2
      };
      let p = Z.center;
      return f.y < B.y ? p = Z.top : p = Z.bottom, p;
    }, r = (f, k) => {
      k.stopPropagation(), n.value = f, k.dataTransfer.setData("value", null);
    }, c = (f, k) => {
      n.value && (k.stopPropagation(), f != n.value ? (i.value = f, o.value = u(k)) : (i.value = -1, o.value = null));
    }, h = (f) => {
      if (n.value) {
        f.stopPropagation();
        var k = i.value + (o.value == Z.top ? 0 : 1), B = s.value.splice(k, 1)[0];
        k >= n.value && k--, s.value.splice(k, 0, B), i.value = -1, o.value = null, n.value = -1, t("sorted", s.value);
      }
    };
    return (f, k) => (d(), E(ws, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: h
    }, {
      default: A(() => [
        (d(!0), m(T, null, G(s.value, (B, p) => (d(), m(T, null, [
          R(L($e, null, {
            default: A(() => [
              L(ce, { light: !0 }, {
                default: A(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [ne, i.value === p && n.value !== p && o.value === S(Z).top]
          ]),
          L($e, {
            draggable: "true",
            onDragstart: (P) => r(p, P),
            onDragend: k[0] || (k[0] = (P) => n.value = null),
            onDragover: (P) => c(p, P),
            class: x({ "has-cursor": !0, "is-move": i.value == p, "is-grab": i.value != p })
          }, {
            default: A(() => [
              z(f.$slots, "item", {
                item: B,
                index: p
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          R(L($e, null, {
            default: A(() => [
              L(ce, { light: !0 }, {
                default: A(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [ne, i.value === p && n.value !== p && o.value === S(Z).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Kn,
  DropZone: Cn,
  Sortable: Gn
}, Symbol.toStringTag, { value: "Module" })), Ve = "HiddenFields", ze = "DisabledFields", Qn = (e) => e, se = (e, l) => {
  const a = l("Translate", Qn);
  return g(() => e.translate ?? a);
};
function Ae(e, l) {
  const a = l(Ve), t = l(ze), s = g(() => a.filter((i) => i.indexOf(`${e}.`) === 0).map((i) => i.split(".")[1])), n = g(() => t.filter((i) => i.indexOf(`${e}.`) === 0).map((i) => i.split(".")[1]));
  return { hiddenValues: s, disabledValues: n };
}
const Os = (e) => {
  let l = [], a = [], t = 0;
  return e.forEach((s) => {
    let n = s.form_columns ?? 12;
    t + n > 12 && (l.push(a), a = [], t = 0), a.push(s), t += n, t === 12 && (l.push(a), a = [], t = 0);
  }), a.length > 0 && l.push(a), l;
};
async function Ue(e) {
  let l = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? l = a : l = Promise.resolve(a);
  let t = await l, s = [];
  return t.value !== void 0 ? s = t.value : s = t, s;
}
const Zn = { class: "tagsfield field input is-grouped is-grouped-multiline" }, eo = { class: "control" }, to = { class: "tags has-addons" }, ao = { class: "tag is-link" }, lo = ["onClick"], so = { key: 0 }, no = ["placeholder"], oo = { class: "dropdown-menu" }, ro = { class: "dropdown-content" }, uo = ["onClick"], io = {
  key: 1,
  class: "dropdown-item"
}, Fs = /* @__PURE__ */ w({
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
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = a, s = e, n = se(s, J), i = F([]), o = F(null), u = F(null), r = F(null), c = F(null);
    U(o, async (D) => {
      if (D != null) {
        if (D.length >= 2)
          if (s.values != null && s.values != null) {
            let W = [];
            for (let b = 0; b < s.values.length && ((s.values[b].name.toUpperCase().indexOf(D.toUpperCase()) >= 0 || s.values[b].id.toUpperCase().indexOf(D.toUpperCase()) >= 0) && W.push(s.values[b]), W.length != 10); b++)
              ;
            u.value = W;
          } else {
            let b = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(D)}`)).json();
            b.length > 10 && b.splice(10, b.length - 10), u.value = b;
          }
      } else
        u.value = null, $(c.value).empty();
    });
    const h = () => {
      if (i.value.length == 0)
        return null;
      const D = i.value.slice();
      return s.limit != null && s.limit == 1 ? D.length > 0 ? D[0] : null : D;
    }, f = async (D) => {
      if (D == null)
        i.value.length > 0 && i.value.splice(0, i.value.length), o.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(D) ? D : [D]).map(async (b) => {
            if (b.id !== void 0 && b.name !== void 0)
              return b;
            {
              let _ = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${b.id === void 0 ? "q=" + encodeURIComponent(b) : "id=" + encodeURIComponent(b.id)}`)).json();
              return _.length > 0 ? (s.disabled && (_[0].readonly = !0), _[0]) : null;
            }
          })
        );
        i.value = W.filter((b) => b !== null), t("value_changed", { name: s.name, value: h() });
      }
    }, k = (D) => {
      D.preventDefault(), o.value = D.clipboardData.getData("text/plain");
    }, B = (D) => {
      switch (D.key) {
        case "Backspace":
          o.value != null && o.value.length > 0 && (o.value = o.value.substring(0, o.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          D.key.length == 1 && (o.value = (o.value == null ? "" : o.value) + D.key);
          break;
      }
    }, p = () => {
      o.value = null;
    }, P = () => {
      c.value.focus();
    }, M = (D) => {
      i.value.push(D), p(), t("value_changed", { name: s.name, value: h() });
    }, v = (D) => {
      i.value.splice(D, 1), P(), t("value_changed", { name: s.name, value: h() });
    };
    return l({ getValue: h, setValue: f }), (D, W) => (d(), m("div", {
      class: "control autocomplete",
      onBlur: p,
      onClick: P
    }, [
      y("div", Zn, [
        (d(!0), m(T, null, G(i.value, (b, te) => (d(), m("div", eo, [
          y("div", to, [
            y("a", ao, N(S(n)(b.name)), 1),
            b.readonly ? I("", !0) : (d(), m("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (_) => v(te)
            }, null, 8, lo))
          ])
        ]))), 256)),
        s.disabled ? I("", !0) : (d(), m("div", so, [
          R(y("span", {
            ref_key: "contentSpan",
            ref: c,
            placeholder: S(n)(s.title),
            contenteditable: "",
            class: x(r.value),
            onFocus: W[0] || (W[0] = (b) => {
              r.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (b) => {
              r.value = null;
            }),
            onKeydown: B,
            onPaste: k
          }, null, 42, no), [
            [ne, i.value.length < s.limit || s.limit == null]
          ])
        ]))
      ]),
      y("div", {
        class: x(["dropdown", { "is-active": u.value != null && o.value != null && o.value != "" }])
      }, [
        y("div", oo, [
          y("div", ro, [
            u.value != null && u.value.length > 0 ? (d(!0), m(T, { key: 0 }, G(u.value, (b) => (d(), m("a", {
              class: "dropdown-item",
              onClick: (te) => M(b)
            }, N(S(n)(b.name)), 9, uo))), 256)) : (d(), m("a", io, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Ne = /* @__PURE__ */ w({
  __name: "button",
  props: {
    label: {},
    sstyle: {},
    icon: {},
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["button_clicked"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = se(a, J);
    return (n, i) => (d(), E(Q, {
      type: n.sstyle,
      icon: a.icon ? a.icon : null,
      title: S(s)(a.label),
      onClick: i[0] || (i[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), co = { class: "checkbox is-block" }, ho = ["value", "disabled"], Bs = /* @__PURE__ */ w({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = q(J), n = g(() => V("Form.Error", s)), i = a, o = se(t, J), u = F([]), r = F(!1), c = g(async () => {
      if (t.values == null)
        return [];
      {
        let p = await Ue(t.values), P = p.filter((M) => M.selected).map((M) => M.value);
        return u.value === null || u.value.length == 0 ? u.value = P.length > 0 ? [...P] : [] : (P = u.value, p = p.map((M) => ({
          label: M.label,
          value: M.value,
          selected: P.some((v) => v === M.value)
        }))), p;
      }
    });
    U(u, (p) => {
      i("value_changed", { name: t.name, value: h() });
    });
    const h = () => u.value.length == 0 ? null : u.value, f = (p) => {
      r.value = !0, u.value.splice(0), p !== null && (u.value = [...p]), r.value = !1, i("value_changed", { name: t.name, value: h() });
    }, { hiddenValues: k, disabledValues: B } = Ae(t.name, J);
    return l({ getValue: h, setValue: f }), (p, P) => (d(), m("div", null, [
      L(S(Oe), { promise: c.value }, {
        default: A((M) => [
          (d(!0), m(T, null, G(M, (v) => R((d(), m("label", co, [
            R(y("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": P[0] || (P[0] = (D) => u.value = D),
              disabled: t.disabled || S(B).some((D) => D === v.value.toString())
            }, null, 8, ho), [
              [Le, u.value]
            ]),
            ee(" " + N(S(o)(v.label)), 1)
          ], 512)), [
            [ne, !S(k).some((D) => D === v.value.toString())]
          ])), 256))
        ]),
        pending: A(() => [
          L(S(Fe))
        ]),
        rejected: A(() => [
          L(S(ce), {
            type: S(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), po = { class: "checkbox" }, bo = ["name", "disabled"], mo = {
  key: 0,
  class: "help is-danger"
}, xs = /* @__PURE__ */ w({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = se(t, J), i = g(() => n.value(t.label)), o = F(!1);
    return U(o, (c) => s("value_changed", { name: t.name, value: c })), l({ getValue: () => o.value, setValue: (c) => {
      o.value = c;
    } }), (c, h) => (d(), m("label", po, [
      R(y("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": h[0] || (h[0] = (f) => o.value = f)
      }, null, 8, bo), [
        [Le, o.value]
      ]),
      ee(" " + N(i.value) + " ", 1),
      t.required ? (d(), m("span", mo, "*")) : I("", !0)
    ]));
  }
}), Je = (e, l) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + l), a;
}, H = (e, l, a) => {
  let t = e;
  for (; t.length < a; )
    t = l + t;
  return t;
}, ye = (e, l, a) => {
  let t = "";
  switch (e) {
    case "d":
    case "dd":
      t += `${H(a.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let n = "";
      switch (a.getDay()) {
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
      t += `${V("Date.Weekdays." + (e.length > 3 ? n : n.substring(0, 3)), l)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      t += `${H(a.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      t += `${a.getMilliseconds() == 0 ? "" : H(a.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      t += "A.D.";
      break;
    case "h":
    case "hh":
      t += `${H((a.getHours() > 12 ? a.getHours() - 12 : a.getHours() == 0 ? 12 : a.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      t += `${H(a.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let i = a.getTimezoneOffset() * -1, o = parseInt((i / 60).toFixed(0)), u = i - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${o < 0 ? "-" : "+"}${H(Math.abs(o).toString(), "0", 2) + ":" + H(Math.abs(u).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          t += `${o < 0 ? "-" : "+"}${H(Math.abs(o).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      t += `${H(a.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      t += `${H((a.getMonth() + 1).toString(), "0", e.length)}`;
      break;
    case "MMM":
    case "MMMM":
      let r = "";
      switch (a.getMonth()) {
        case 0:
          r = "January";
          break;
        case 1:
          r = "February";
          break;
        case 2:
          r = "March";
          break;
        case 3:
          r = "April";
          break;
        case 4:
          r = "May";
          break;
        case 5:
          r = "June";
          break;
        case 6:
          r = "July";
          break;
        case 7:
          r = "August";
          break;
        case 8:
          r = "September";
          break;
        case 9:
          r = "October";
          break;
        case 10:
          r = "November";
          break;
        case 11:
          r = "December";
          break;
      }
      t += `${V("Date.Months." + (e.length > 3 ? r : r.substring(0, 3)), l)}`;
      break;
    case "s":
    case "ss":
      t += `${H(a.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      a.getHours() >= 12 ? t += `${e.length == 1 ? "P" : "PM"}` : t += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var s = a.getFullYear().toString(); s.length > 2; )
        s = s.substring(1);
      t += `${H(s.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      t += `${H(a.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      t += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return t;
}, ie = (e, l, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", s = "";
  for (var n = 0; n < a.length; n++)
    switch (a.charAt(n)) {
      case "\\":
        s != "" && (t += ye(s, l, e), s = ""), t += a.charAt(n + 1), n++;
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
        s != "" && s.charAt(0) != a.charAt(n) ? (t += ye(s, l, e), s = "") : s += a.charAt(n);
        break;
      default:
        s != "" && (t += ye(s, l, e), s = ""), t += a.charAt(n);
        break;
    }
  return s != "" && (t += ye(s, l, e), s = ""), t;
}, fo = { class: "control" }, go = ["name", "id", "disabled"], qe = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Re = /* @__PURE__ */ w({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = F(null), i = g(() => {
      if (n.value == null || n.value == "")
        return null;
      var r = Number(n.value.substring(3, 5)), c = Number(n.value.substring(0, 2)) % 12 + r / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * r / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * c / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return U(n, (r) => {
      s("value_changed", { name: t.name, value: r });
    }), l({ getValue: () => n.value, setValue: (r) => {
      if (r != null && qe.test(r)) {
        var c = qe.exec(r);
        r = (c[3] == "AM" ? c[1] : (parseInt(c[1]) + 12).toFixed(0)) + ":" + c[2] + ":00";
      }
      n.value = r;
    } }), (r, c) => (d(), m("div", fo, [
      R(y("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": c[0] || (c[0] = (h) => n.value = h),
        disabled: t.disabled,
        style: Ce(i.value)
      }, null, 12, go), [
        [pe, n.value]
      ])
    ]));
  }
});
const vo = { class: "control has-icons-left has-icons-right" }, yo = ["name", "id", "placeholder", "disabled"], _o = /* @__PURE__ */ y("div", { class: "modal-background" }, null, -1), ko = { class: "modal-content" }, $o = { class: "panel is-primary is-dateselect" }, So = { class: "panel-heading" }, Mo = { class: "columns card-header-title" }, Do = { class: "column" }, wo = { class: "column has-text-centered" }, Oo = { class: "column has-text-right" }, Fo = { class: "panel-block" }, Bo = { class: "table is-striped has-text-centered" }, xo = ["onClick"], Jo = { key: 0 }, No = {
  colspan: "100%",
  class: "has-text-centered"
}, Po = { class: "panel-block" }, be = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), _e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Js = /* @__PURE__ */ w({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = F(null), s = e, n = a, i = F(!1), o = F(null), u = F(null), r = Ge({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), c = q(J), h = Se({
      Sun: g(() => V("Date.Weekdays.Sun", c)),
      Mon: g(() => V("Date.Weekdays.Mon", c)),
      Tue: g(() => V("Date.Weekdays.Tue", c)),
      Wed: g(() => V("Date.Weekdays.Wed", c)),
      Thu: g(() => V("Date.Weekdays.Thu", c)),
      Fri: g(() => V("Date.Weekdays.Fri", c)),
      Sat: g(() => V("Date.Weekdays.Sat", c))
    }), f = g(() => o.value !== null && (s.includeTime ? _e : be).test(o.value)), k = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!_e.test(o.value) && s.includeTime)
          return null;
        if (!s.includeTime && !be.test(o.value))
          return null;
        if (be.test(o.value) && s.includeTime)
          return null;
        let _ = s.includeTime ? _e.exec(o.value) : be.exec(o.value);
        return new Date(
          parseInt(_[3]),
          parseInt(_[2]) - 1,
          parseInt(_[1]),
          s.includeTime ? parseInt(_[4]) : 0,
          s.includeTime ? parseInt(_[5]) : 0,
          0,
          0
        );
      }
    };
    U(o, (_) => {
      if (_ == null)
        n("value_changed", { name: s.name, value: null }), r.Month = (/* @__PURE__ */ new Date()).getMonth(), r.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!be.test(_) && !_e.test(_)) {
        _ = _.replaceAll(/[^0-9]/g, "");
        for (var O = [], j = 0; j < _.length; j += 2)
          j == 4 ? (O.push(_.substring(j, Math.min(_.length - j, 4) + j)), j += 2) : O.push(_.substring(j, Math.min(_.length - j, 2) + j));
        O.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(O[0]) || O.splice(0), O.length > 1 && (/^[0-3]/.test(O[1]) ? /^(01|03|05|07|08|10|12)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(O[1]) || O.splice(1) : /^(02|04|06|09|11)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(O[1]) || O.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(O[1]) || O.splice(1) : O.splice(1)), O.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(O[3]) || O.splice(3)), O.length > 4 && (/^[0-5][0-9]?$/.test(O[4]) || O.splice(4))), _ = O.join(""), !s.includeTime && _.length > 8 && (_ = _.substring(0, 8)), _.length >= 2 && (_ = _.substring(0, 2) + "-" + (_.length > 2 ? _.substring(2) : "")), _.length >= 5 && (_ = _.substring(0, 5) + "-" + (_.length > 5 ? _.substring(5) : "")), _.length >= 9 && s.includeTime && (_ = _.substring(0, 9) + " " + (_.length > 9 ? _.substring(9) : "")), _.length >= 11 && (_ = _.substring(0, 11) + ":" + (_.length > 11 ? _.substring(11) : "")), o.value = _;
      } else {
        var ae = k();
        f && n("value_changed", { name: s.name, value: ae }), r.Month = ae.getMonth(), r.Year = ae.getFullYear();
      }
    });
    const B = g(() => ie(new Date(r.Year, r.Month, 1), c, "MMMM")), p = g(() => {
      var _ = [], O = new Date(r.Year, r.Month, 1);
      O = Je(O, O.getDay() * -1);
      for (var j = k(), ae = Je(new Date(r.Year, r.Month, 1), 32).getMonth(); O.getMonth() != ae; ) {
        for (var Be = [], je = 0; je < 7; je++)
          Be.push({
            Number: O.getDate(),
            Disabled: O.getMonth() != r.Month,
            isToday: ie(O, c, "yyyy-MM-dd") == ie(/* @__PURE__ */ new Date(), c, "yyyy-MM-dd"),
            isSelected: j != null && ie(O, c, "yyyy-MM-dd") == ie(j, c, "yyyy-MM-dd")
          }), O = Je(O, 1);
        _.push(Be);
      }
      return _;
    });
    l({ getValue: k, setValue: function(_) {
      _ == null ? o.value = null : o.value = ie(_, c, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
    } });
    const M = (_) => {
      _.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + _.value : o.value = `${H((r.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((r.Month + 1).toString(), "0", 2)}-${r.Year} ${_.value}`;
    }, v = (_) => {
      if (!_.Disabled && !_.isSelected)
        if (o.value === null)
          o.value = `${H(_.Number.toString(), "0", 2)}-${H((r.Month + 1).toString(), "0", 2)}-${r.Year}` + (s.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var O = o.value.split(" ");
          O[0] = `${H(_.Number.toString(), "0", 2)}-${H((r.Month + 1).toString(), "0", 2)}-${r.Year}`, o.value = `${O[0]}${O.length > 1 ? " " + O[1] : ""}`;
        }
    }, D = () => {
      o.value = u.value, i.value = !1;
    }, W = () => {
      s.disabled || (u.value = o.value, i.value = !0);
    }, b = () => {
      s.disabled || (o.value = null);
    }, te = (_) => {
      r.Month + _ == -1 ? (r.Year = r.Year - 1, r.Month = 11) : r.Month + _ == 12 ? (r.Year = r.Year + 1, r.Month = 0) : r.Month += _;
    };
    return (_, O) => (d(), m("div", null, [
      y("div", vo, [
        R(y("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": O[0] || (O[0] = (j) => o.value = j),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, yo), [
          [pe, o.value]
        ]),
        y("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          L(S(K), { icon: "calendar-alt" })
        ]),
        y("span", {
          class: "icon is-small is-right is-clickable",
          onClick: b
        }, [
          L(S(K), { icon: "window-close" })
        ])
      ]),
      y("div", {
        class: x(["modal", { "is-active": i.value }])
      }, [
        _o,
        y("div", ko, [
          y("div", $o, [
            y("div", So, [
              y("div", Mo, [
                y("div", Do, [
                  L(S(K), {
                    icon: "arrow-circle-left",
                    onClick: O[1] || (O[1] = (j) => te(-1))
                  })
                ]),
                y("div", wo, N(B.value) + " " + N(r.Year), 1),
                y("div", Oo, [
                  L(S(K), {
                    icon: "arrow-circle-right",
                    onClick: O[2] || (O[2] = (j) => te(1))
                  })
                ])
              ])
            ]),
            y("div", Fo, [
              y("table", Bo, [
                y("thead", null, [
                  y("tr", null, [
                    y("th", null, N(S(h).Sun), 1),
                    y("th", null, N(S(h).Mon), 1),
                    y("th", null, N(S(h).Tue), 1),
                    y("th", null, N(S(h).Wed), 1),
                    y("th", null, N(S(h).Thu), 1),
                    y("th", null, N(S(h).Fri), 1),
                    y("th", null, N(S(h).Sat), 1)
                  ])
                ]),
                y("tbody", null, [
                  (d(!0), m(T, null, G(p.value, (j) => (d(), m("tr", null, [
                    (d(!0), m(T, null, G(j, (ae) => (d(), m("td", {
                      class: x(["is-unselectable", ae.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", ae.isToday ? "has-background-primary-dark" : "", ae.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Be) => v(ae)
                    }, N(ae.Number), 11, xo))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (d(), m("tfoot", Jo, [
                  y("tr", null, [
                    y("td", No, [
                      L(Re, {
                        ref: t.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValue_changed: M
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : I("", !0)
              ])
            ]),
            y("div", Po, [
              L(S(Ss), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: O[3] || (O[3] = (j) => i.value = !1)
              }, null, 8, ["disabled"]),
              L(S($s), {
                addonclass: "card-footer-item",
                onClick: D
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
});
ge(["https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css"]);
const Ns = /* @__PURE__ */ w({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: l, emit: a }) {
    let t, s;
    [t, s] = Ks(() => import("summernote")), await t, s();
    const n = F(null), i = e, o = a;
    return U([i.disabled], (c) => {
      n.value != null && $(n.value).summernote(c ? "disable" : "enable");
    }), l({ getValue: () => $(n.value).summernote("code"), setValue: (c) => {
      $(n.value).summernote("code", c);
    } }), re(() => {
      $(n.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(c) {
            o("value_changed", { name: i.name, value: c });
          }
        }
      }), (i.disabled ?? !1) && $(n.value).summernote("disable");
    }), Cs(() => {
      $(n.value).summernote("destroy");
    }), (c, h) => (d(), m("div", {
      class: "summernote",
      ref_key: "snote",
      ref: n
    }, null, 512));
  }
}), Pe = /* @__PURE__ */ w({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const l = e, a = se(l, J);
    return (t, s) => (d(), E(he(l.subtype), null, {
      default: A(() => [
        ee(N(S(a)(l.label)), 1)
      ]),
      _: 1
    }));
  }
}), Eo = ["name"], Ps = /* @__PURE__ */ w({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = F(null);
    return U(n, (u) => s("value_changed", { name: t.name, value: u })), l({ getValue: () => n.value, setValue: (u) => {
      n.value = u;
    } }), (u, r) => R((d(), m("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c)
    }, null, 8, Eo)), [
      [pe, n.value]
    ]);
  }
}), Lo = ["name", "disabled", "min", "max", "step"], Es = /* @__PURE__ */ w({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = F(null), i = () => {
      if (n.value === "")
        return null;
      let u = parseInt(n.value);
      return t.min !== void 0 && u < t.min * 1 || t.max !== void 0 && u > t.max * 1 ? null : u;
    }, o = (u) => {
      n.value = u === null ? "" : u.toString();
    };
    return U([n], (u) => s("value_changed", { name: t.name, value: i() })), l({ getValue: i, setValue: o }), (u, r) => R((d(), m("input", {
      type: "number",
      class: "input",
      name: u.name,
      "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c),
      disabled: u.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, Lo)), [
      [pe, n.value]
    ]);
  }
}), Io = ["id"], Ee = /* @__PURE__ */ w({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: { type: Function }
  },
  setup(e) {
    const l = e, a = se(l, J);
    return (t, s) => (d(), m("p", {
      id: l.name
    }, N(S(a)(l.label)), 9, Io));
  }
}), Wo = { class: "radio" }, Vo = ["name", "value", "disabled"], zo = /* @__PURE__ */ y("br", null, null, -1), Ls = /* @__PURE__ */ w({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = q(J), n = g(() => V("Form.Error", s)), i = a, o = se(t, J), u = F(null), r = function() {
      return u.value;
    };
    U(u, (B) => {
      i("value_changed", { name: t.name, value: r() });
    });
    const c = g(async () => {
      if (t.values == null)
        return [];
      {
        let B = await Ue(t.values);
        return u.value === null && B.some((p) => p.selected) && (u.value = B.find((p) => p.selected).value), B.map((p) => ({
          label: p.label,
          value: p.value,
          selected: u.value === p.value
        }));
      }
    }), h = (B) => {
      u.value = B;
    }, { hiddenValues: f, disabledValues: k } = Ae(t.name, J);
    return l({ getValue: r, setValue: h }), (B, p) => (d(), m("div", null, [
      L(S(Oe), { promise: c.value }, {
        default: A((P) => [
          P != null ? (d(!0), m(T, { key: 0 }, G(P, (M) => (d(), m(T, null, [
            R(y("label", Wo, [
              y("input", {
                type: "radio",
                name: t.name,
                value: M.value,
                class: "radio",
                disabled: t.disabled || S(k).some((v) => v === M.value.toString())
              }, null, 8, Vo),
              ee(" " + N(S(o)(M.label)), 1)
            ], 512), [
              [ne, !S(f).some((v) => v === M.value.toString())]
            ]),
            zo
          ], 64))), 256)) : I("", !0)
        ]),
        pending: A(() => [
          L(S(Fe))
        ]),
        rejected: A(() => [
          L(S(ce), {
            type: S(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Ao = { class: "select" }, Uo = ["id", "name", "multiple", "disabled"], Ro = ["value", "selected", "disabled"], jo = ["label"], Ho = ["value", "selected", "disabled"], Is = (e, l, a) => {
  let t = {
    label: e === null ? l.label : `${e}->${l.label}`,
    values: []
  }, s = a.length;
  return a.push(t), l.values.forEach((n) => {
    n.values === void 0 ? t.values.push(n) : a = Is(t.label, n, a);
  }), a[s].values.length == 0 && a.splice(s, 1), a;
}, Ws = /* @__PURE__ */ w({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = q(J), n = g(() => V("Form.Error", s)), i = a, o = se(t, J), u = F(null), r = F(!1), c = g(async () => {
      if (t.values == null)
        return [];
      {
        let p = await Ue(t.values), P = p.filter((v) => v.selected).map((v) => v.value);
        p.some((v) => v.values !== void 0) && p.filter((v) => v.values !== void 0).forEach((v) => {
          P = P.concat(
            v.values.filter((D) => D.selected).map((D) => D.value)
          );
        }), u.value === null || u.value.length === 0 ? u.value = null : (p = p.map((v) => {
          let D = v;
          return D.values !== void 0 && (D.values = D.values.map((W) => (W.selected = u.value.some((b) => b === W.value), W))), D;
        }), u.value.forEach((v) => {
          p.some((D) => D.value !== void 0 && D.value === v || D.values !== void 0 && D.values.some((W) => W.value === v)) || p.push({
            label: v,
            value: v
          });
        }));
        let M = [];
        return p.forEach((v) => {
          v.values === void 0 ? M.push(v) : M = Is(v.label, v, M);
        }), M;
      }
    }), h = () => u.value == null || u.value.length == 0 ? null : t.multiple ? u.value.slice() : Array.isArray(u.value) ? u.value[0] : u.value;
    U(u, () => {
      r.value || i("value_changed", { name: t.name, value: h() });
    }), U(r, (p) => {
      p || i("value_changed", { name: t.name, value: h() });
    });
    const f = (p) => {
      r.value = !0, p != null ? t.multiple ? u.value = Array.isArray(p) ? p : [p] : u.value = p : t.multiple ? u.value = [] : u.value = null, r.value = !1;
    }, { hiddenValues: k, disabledValues: B } = Ae(t.name, J);
    return l({ getValue: h, setValue: f }), (p, P) => (d(), m("div", Ao, [
      c.value != null ? (d(), E(S(Oe), {
        key: 0,
        promise: c.value
      }, {
        default: A(({ value: M }) => [
          R(y("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: x([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": P[0] || (P[0] = (v) => u.value = v),
            disabled: t.disabled
          }, [
            M != null ? (d(!0), m(T, { key: 0 }, G(M, (v) => (d(), m(T, null, [
              v.values == null ? R((d(), m("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: S(B).some((D) => D === v.value.toString())
              }, N(S(o)(v.label)), 9, Ro)), [
                [ne, !S(k).some((D) => D === v.value.toString())]
              ]) : I("", !0),
              v.values != null ? (d(), m("optgroup", {
                key: 1,
                label: S(o)(v.label)
              }, [
                (d(!0), m(T, null, G(v.values, (D) => R((d(), m("option", {
                  value: D.value,
                  selected: D.selected,
                  disabled: S(B).some((W) => W === D.value.toString())
                }, N(S(o)(D.label)), 9, Ho)), [
                  [ne, !S(k).some((W) => W === D.value.toString())]
                ])), 256))
              ], 8, jo)) : I("", !0)
            ], 64))), 256)) : I("", !0)
          ], 10, Uo), [
            [Gs, u.value]
          ])
        ]),
        pending: A(() => [
          L(S(Fe))
        ]),
        rejected: A(() => [
          L(S(ce), {
            type: S(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : I("", !0)
    ]));
  }
}), To = { class: "field" }, Yo = ["id", "name", "disabled"], qo = ["for"], Ko = {
  key: 0,
  class: "help is-danger"
}, Vs = /* @__PURE__ */ w({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = se(t, J), i = F(!1);
    return U(i, (r) => s("value_changed", { name: t.name, value: r })), l({ getValue: () => i.value, setValue: (r) => {
      i.value = r;
    } }), (r, c) => (d(), m("div", To, [
      R(y("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": c[0] || (c[0] = (h) => i.value = h),
        disabled: t.disabled
      }, null, 8, Yo), [
        [Le, i.value]
      ]),
      y("label", { for: r.name }, [
        ee(N(S(n)(t.label)) + " ", 1),
        t.required ? (d(), m("span", Ko, "*")) : I("", !0)
      ], 8, qo)
    ]));
  }
}), Co = ["type", "name", "disabled", "maxlength"], zs = /* @__PURE__ */ w({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = F(null);
    return U(n, (u) => s("value_changed", { name: t.name, value: u })), l({ getValue: () => n.value, setValue: (u) => {
      n.value = u;
    } }), (u, r) => R((d(), m("input", {
      type: u.subtype,
      class: "input",
      name: u.name,
      disabled: u.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": r[0] || (r[0] = (c) => n.value = c)
    }, null, 8, Co)), [
      [Xs, n.value]
    ]);
  }
}), Go = ["name", "rows", "cols", "maxlength", "disabled"], As = 9, de = String.fromCharCode(As), ke = String.fromCharCode(10), Us = /* @__PURE__ */ w({
  __name: "textarea",
  props: {
    maxlength: {},
    rows: {},
    cols: {},
    supportsTab: { type: Boolean },
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = F(null);
    U(n, (r) => {
      s("value_changed", { name: t.name, value: r });
    });
    const i = () => n.value, o = (r) => {
      n.value = r;
    };
    l({ getValue: i, setValue: o });
    const u = (r) => {
      if (t.supportsTab) {
        let c = i();
        switch (r.keyCode) {
          case As:
            let h = r.target.selectionStart, f = r.target.selectionEnd, k = c.substring(0, h), B = c.length > f ? c.substring(f) : "", p = h == f ? "" : c.substring(h, f);
            if (p.indexOf(String.fromCharCode(10)) < 0)
              r.shiftKey ? p.startsWith(de) ? (p = p.substring(1), h--) : k.endsWith(de) && (k = k.substring(0, k.length - 1), h--) : p = de + p;
            else {
              let P = !1;
              p.endsWith(ke) && (P = !0, p = p.substring(0, p.length - 1));
              let M = p.split(ke);
              p = "", r.shiftKey && k.endsWith(de) && (k = k.substring(0, k.length - 1), h--), M.forEach((v, D) => {
                r.shiftKey && v.startsWith(de) ? v = v.substring(1) : r.shiftKey || (v = de + v), p += v + (D === M.length - 1 ? "" : ke);
              }), P && (p += ke);
            }
            return c = k + p + B, h += p.length == 1 ? 1 : 0, f = h + (p.length == 1 ? 0 : p.length), o(c), r.target.selectionStart = h, r.target.selectionEnd = f, r.target.focus(), r.preventDefault != null && r.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (r, c) => R((d(), m("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: u,
      "onUpdate:modelValue": c[0] || (c[0] = (h) => n.value = h)
    }, null, 40, Go)), [
      [pe, n.value]
    ]);
  }
}), Xo = { class: "columns" }, Rs = /* @__PURE__ */ w({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = J(Ve), i = J(ze);
    l({ setValue: (h) => {
      c.forEach((f) => {
        switch (f.type) {
          case "subform":
            f.setValue(h);
            break;
          default:
            f.setValue !== void 0 && (h === null ? f.setValue(null) : Object.keys(h).some((k) => k === f.fieldName) ? f.setValue(h[f.fieldName]) : Object.keys(h).some((k) => k === f.altFieldName) && f.setValue(h[f.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var h = {};
      return c.forEach((f) => {
        if (f.getValue != null)
          switch (f.type) {
            case "subform":
              h = $.extend(h, f.getValue());
              break;
            default:
              h[f.fieldName] = f.getValue();
              break;
          }
      }), h;
    }, isValid: () => !c.some((h) => !(h.isValid === void 0 || h.isValid())) });
    const c = t.inputs.map((h) => F(null));
    return (h, f) => (d(), m("div", Xo, [
      (d(!0), m(T, null, G(t.inputs, (k, B) => (d(), E(js, {
        ref_for: !0,
        ref: (p) => S(c)[B] = p,
        input: k,
        onValue_changed: f[0] || (f[0] = (p) => s("value_changed", p)),
        onButton_clicked: f[1] || (f[1] = (p) => s("button_clicked", p)),
        disabled: t.disabled || S(i).some((p) => p === k.name),
        hidden: S(n).some((p) => p === k.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Qo = ["id", "name"], Zo = /* @__PURE__ */ w({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a;
    let n = [];
    F(!1);
    const i = g(() => {
      let c = Os(t.fields);
      return n = c.map((h) => F(null)), c;
    });
    return l({ isValid: () => !n.some((c) => !(c.isValid === void 0 || c.isValid())), setValue: (c) => n.forEach((h) => h.setValue(c)), getValue: () => {
      var c = {};
      return n.forEach((h) => {
        c = $.extend(c, h.getValue());
      }), c;
    } }), (c, h) => R((d(), m("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (d(!0), m(T, null, G(i.value, (f, k) => (d(), E(Rs, {
        ref_for: !0,
        ref: (B) => S(n)[k] = B,
        inputs: f,
        disabled: t.disabled,
        onValue_changed: h[0] || (h[0] = (B) => s("value_changed", B)),
        onButton_clicked: h[1] || (h[1] = (B) => s("button_clicked", B))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Qo)), [
      [ne, !t.hidden]
    ]);
  }
}), er = ["for"], tr = {
  key: 0,
  class: "help is-danger"
}, ar = { class: "control" }, lr = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], sr = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], js = /* @__PURE__ */ w({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: l, emit: a }) {
    const t = F(null), s = a, n = e, i = se(n, J), o = Se(F(n.input.type)), u = g(() => {
      let b = null;
      switch (n.input.type) {
        case "autocomplete":
          b = Fs;
          break;
        case "button":
          b = Ne;
          break;
        case "checkbox-group":
          b = Bs;
          break;
        case "checkbox":
          b = xs;
          break;
        case "date":
          b = Js;
          break;
        case "full-editor":
          b = Ns;
          break;
        case "header":
          b = Pe;
          break;
        case "hidden":
          b = Ps;
          break;
        case "number":
          b = Es;
          break;
        case "paragraph":
          b = Ee;
          break;
        case "radio-group":
          b = Ls;
          break;
        case "select":
          b = Ws;
          break;
        case "Switch":
          b = Vs;
          break;
        case "text":
          b = zs;
          break;
        case "textarea":
          b = Us;
          break;
        case "time":
          b = Re;
          break;
        case "subform":
          b = Zo;
          break;
      }
      return b;
    }), r = function(b) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(b);
    };
    re(() => {
      t.value !== null && n.input.value !== void 0 && n.input.value !== null && r(n.input.value);
    });
    const c = g(() => n.input.disabled ?? n.disabled ?? !1), h = g(() => `is-${n.input.form_columns ?? 12}`), f = g(() => n.input.name), k = g(() => n.input.processVariable ?? n.input.name), B = g(() => lr.some((b) => b === n.input.type) && n.input.label !== void 0 && n.input.label !== null), p = g(() => {
      let b = $.extend({}, n.input);
      return delete b.type, b.className != null && delete b.className, b.form_columns != null && delete b.form_columns, sr.some((te) => te === n.input.type) && (b.translate = n.translate), b.disabled = n.disabled, b;
    }), P = (b) => {
      if (b.value !== void 0 && b.value !== null && Array.isArray(b.value)) {
        let te = [...b.value];
        b.value = te;
      }
      s("value_changed", b);
    }, M = (b) => {
      s("button_clicked", b);
    }, v = () => {
      if (t.value != null && t.value.getValue != null) {
        let b = t.value.getValue();
        return b != null && Array.isArray(b) ? [...b] : b;
      }
      return null;
    };
    return l({ setValue: r, fieldName: f, type: o, altFieldName: k, getValue: v, isValid: () => {
      if (n.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (n.input.required ?? !1) {
        let b = v();
        return b != null && (Array.isArray(b) ? b.length > 0 : !0) && b.toString() !== "";
      }
      return !0;
    }, setValues: (b) => {
      if (n.input.type === "subform" && t.value !== null)
        t.value.setValues(b);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (b, te) => R((d(), m("div", {
      class: x(["field column", [h.value]])
    }, [
      n.input.type == "header" ? (d(), E(Pe, {
        key: 0,
        subtype: n.input.subtype,
        label: n.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : n.input.type == "paragraph" ? (d(), E(Ee, {
        key: 1,
        name: n.input.name,
        label: n.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : n.input.type == "button" ? (d(), E(Ne, {
        key: 2,
        name: n.input.name,
        sstyle: n.input.style,
        className: n.input.className,
        icon: n.input.icon,
        label: n.input.label,
        disabled: c.value,
        onButton_clicked: M,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (d(), m(T, { key: 3 }, [
        B.value ? (d(), m("label", {
          key: 0,
          class: "label",
          for: n.input.name
        }, [
          ee(N(S(i)(n.input.label)) + " ", 1),
          n.input.required ? (d(), m("span", tr, "*")) : I("", !0)
        ], 8, er)) : I("", !0),
        y("div", ar, [
          (d(), E(he(u.value), X(p.value, {
            onValue_changed: P,
            ref_key: "inp",
            ref: t
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [ne, !n.hidden]
    ]);
  }
});
const nr = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, or = /* @__PURE__ */ w({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: l, emit: a }) {
    const t = e, s = a, n = se(t, J);
    xe("Translate", (M) => n.value(M));
    let i = [];
    const o = g(() => {
      if (t.elements != null) {
        let M = Os(t.elements);
        return i = M.map((v) => F(null)), M;
      } else
        return null;
    }), u = () => {
      let M = {};
      return i.forEach((v) => {
        M = $.extend(M, v.getValue());
      }), M;
    }, r = (M) => {
      i.forEach((v) => v.setValue(M));
    }, c = () => !i.some((M) => !(M.isValid === void 0 || M.isValid())), h = F([]);
    xe(Ve, Se(h));
    const f = (M) => {
      Array.isArray(M) ? h.value = [...h.value, ...M] : h.value.push(M);
    }, k = (M) => {
      Array.isArray(M) ? h.value = h.value.filter((v) => M.indexOf(v) >= 0) : h.value = h.value.filter((v) => v !== M);
    }, B = F([]);
    return xe(ze, Se(B)), l({ getValues: u, setValues: r, isValid: c, hideField: f, showField: k, disableField: (M) => {
      Array.isArray(M) ? B.value = [...B.value, ...M] : B.value.push(M);
    }, enableField: (M) => {
      Array.isArray(M) ? B.value = B.value.filter((v) => M.indexOf(v) >= 0) : B.value = B.value.filter((v) => v !== M);
    } }), (M, v) => (d(), m("form", nr, [
      o.value != null ? (d(!0), m(T, { key: 0 }, G(o.value, (D, W) => (d(), E(Rs, {
        ref_for: !0,
        ref: (b) => S(i)[W] = b,
        inputs: D,
        transte: t.translate,
        key: W,
        onValue_changed: v[0] || (v[0] = (b) => s("value_changed", b)),
        onButton_clicked: v[1] || (v[1] = (b) => s("button_clicked", b)),
        disabled: M.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : I("", !0)
    ]));
  }
}), rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Fs,
  Button: Ne,
  Checkbox: xs,
  CheckboxGroup: Bs,
  ComponentForm: or,
  Date: Js,
  FormComponent: js,
  FullEditor: Ns,
  Header: Pe,
  Hidden: Ps,
  Number: Es,
  Paragraph: Ee,
  RadioGroup: Ls,
  Select: Ws,
  Switch: Vs,
  Text: zs,
  TextArea: Us,
  Time: Re
}, Symbol.toStringTag, { value: "Module" })), ur = { class: "hero-body" }, ir = { class: "title" }, dr = {
  key: 0,
  class: "subtitle"
}, cr = /* @__PURE__ */ w({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const l = e;
    return (a, t) => (d(), m("section", {
      class: x(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + l.type])
    }, [
      y("div", ur, [
        y("p", ir, N(l.title), 1),
        l.subtitle ? (d(), m("p", dr, N(l.subtitle), 1)) : I("", !0)
      ])
    ], 2));
  }
}), hr = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of l)
    a[t] = s;
  return a;
}, pr = {}, br = { class: "box" };
function mr(e, l) {
  return d(), m("div", br, [
    z(e.$slots, "default")
  ]);
}
const fr = /* @__PURE__ */ hr(pr, [["render", mr]]), gr = {
  key: 0,
  class: "icon is-clickable"
}, vr = /* @__PURE__ */ w({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, t = l;
    return (s, n) => (d(), m("li", {
      class: x({ "is-active": a.active })
    }, [
      y("a", {
        onClick: n[0] || (n[0] = (i) => t("click"))
      }, [
        a.icon ? (d(), m("span", gr, [
          L(S(K), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : I("", !0),
        ee(" " + N(a.title), 1)
      ])
    ], 2));
  }
}), yr = /* @__PURE__ */ w({
  __name: "breadcrumbs",
  props: {
    alignment: { default: De.left },
    size: { default: oe.normal },
    seperator: {}
  },
  setup(e) {
    const l = e, a = g(() => {
      let t = ["breadcrumb"];
      return l.alignment && l.alignment !== De.left && t.push(`is-${l.alignment}`), l.size && l.size !== oe.normal && t.push(`is-${l.size}`), l.seperator && t.push(`has-${l.seperator}-seperator`), t;
    });
    return (t, s) => (d(), m("nav", {
      class: x(a.value),
      "aria-label": "breadcrumbs"
    }, [
      y("ul", null, [
        z(t.$slots, "default")
      ])
    ], 2));
  }
}), _r = /* @__PURE__ */ w({
  __name: "column-container",
  props: {
    mobile: { type: Boolean },
    desktop: { type: Boolean },
    tablet: { type: Boolean },
    gapless: { type: Boolean },
    multiline: { type: Boolean },
    centered: { type: Boolean },
    verticalCentered: { type: Boolean },
    borderleft: { type: Boolean },
    borderright: { type: Boolean },
    borderbottom: { type: Boolean },
    bordertop: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    addonclass: {}
  },
  setup(e) {
    const l = e;
    return (a, t) => (d(), m("div", {
      class: x(["columns", [
        {
          "is-mobile": l.mobile,
          "is-desktop": l.desktop,
          "is-tablet": l.tablet,
          "is-gapless": l.gapless,
          "is-multiline": l.multiline,
          "is-centered": l.centered,
          "is-vcentered": l.verticalCentered,
          "is-bordered-left": l.borderleft,
          "is-bordered-right": l.borderright,
          "is-bordered-top": l.bordertop,
          "is-bordered-bottom": l.borderbottom,
          "is-fullwidth": l.fullWidth,
          "is-fullheight": l.fullHeight
        },
        l.addonclass
      ]])
    }, [
      z(a.$slots, "default")
    ], 2));
  }
}), kr = /* @__PURE__ */ w({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const l = e, a = g(() => {
      var t = [`is-${l.size ?? "12"}`];
      return l.offset && t.push(`is-offset-${l.offset}`), l.border && (l.border.some((s) => s === we.all) ? t.push("is-bordered") : l.border.forEach((s) => t.push(`is-bordered-${s}`))), l.addonclass && t.push(l.addonclass), t;
    });
    return (t, s) => (d(), m("div", {
      class: x(["column", a.value])
    }, [
      z(t.$slots, "default")
    ], 2));
  }
}), $r = /* @__PURE__ */ y("div", { class: "modal-background" }, null, -1), Sr = { class: "modal-card-head" }, Mr = { class: "modal-card-body" }, Dr = { class: "modal-card-foot" }, wr = /* @__PURE__ */ w({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    hasClose: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    maxWidth: { type: Boolean },
    maxHeight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const a = e, t = l, s = {
      addonclass: "card-footer-item"
    }, n = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, i = g(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, u) => (d(), m("div", {
      class: x(["modal", { "is-active": a.show }])
    }, [
      $r,
      y("div", {
        class: x(["modal-card", i.value])
      }, [
        y("div", Sr, [
          z(o.$slots, "header", me(fe(n))),
          o.hasClose ? (d(), m("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (r) => t("close"))
          })) : I("", !0)
        ]),
        y("div", Mr, [
          z(o.$slots, "content")
        ]),
        y("div", Dr, [
          z(o.$slots, "footer", me(fe(s)))
        ])
      ], 2)
    ], 2));
  }
}), Or = {
  key: 0,
  class: "panel-heading"
}, Fr = {
  key: 1,
  class: "panel-tabs"
}, Br = { class: "panel-block" }, xr = /* @__PURE__ */ w({
  __name: "panel",
  props: {
    type: {},
    blockNames: {},
    hasTabs: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    hasHeader: { type: Boolean }
  },
  setup(e) {
    const l = e, a = g(() => l.blockNames ?? ["default"]), t = g(() => {
      let s = [];
      return l.type && s.push(`is-${l.type}`), l.fullWidth && s.push("is-fullwidth"), l.fullHeight && s.push("is-fullheight"), s;
    });
    return (s, n) => (d(), m("div", {
      class: x(["panel", t.value])
    }, [
      l.hasHeader ? (d(), m("div", Or, [
        z(s.$slots, "header")
      ])) : I("", !0),
      l.hasTabs ? (d(), m("div", Fr, [
        z(s.$slots, "tabs")
      ])) : I("", !0),
      (d(!0), m(T, null, G(a.value, (i) => (d(), m("div", Br, [
        z(s.$slots, i)
      ]))), 256))
    ], 2));
  }
}), Jr = /* @__PURE__ */ w({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const l = e, a = g(() => {
      let s = [];
      return l.scrollable && s.push("table-container"), l.fixedHeader && l.scrollable && s.push("is-fixed"), s;
    }), t = g(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return l.fixedHeader && !l.scrollable && s.push("is-fixed"), l.fullWidth && s.push("is-fullwidth"), l.narrow && s.push("is-narrow"), s;
    });
    return (s, n) => (d(), m("div", {
      class: x(a.value)
    }, [
      y("table", {
        class: x(t.value)
      }, [
        y("thead", null, [
          z(s.$slots, "thead")
        ]),
        y("tbody", null, [
          z(s.$slots, "tbody")
        ]),
        y("tfoot", null, [
          z(s.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), Nr = ["href"], Pr = {
  key: 0,
  class: "icon is-small"
}, Er = /* @__PURE__ */ w({
  __name: "tabs-tab",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {},
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = l, t = e, s = (n) => {
      (t.href === null || t.href === void 0) && (n.preventDefault(), a("click"));
    };
    return (n, i) => (d(), m("li", {
      class: x({ "is-active": t.active })
    }, [
      y("a", {
        href: n.href,
        onClick: s
      }, [
        t.icon ? (d(), m("span", Pr, [
          L(S(K), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : I("", !0),
        y("span", null, N(t.title), 1)
      ], 8, Nr)
    ], 2));
  }
}), Lr = /* @__PURE__ */ w({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const l = e, a = g(() => {
      let t = ["tabs"];
      return l.alignment ? t.push(`is-${l.alignment}`) : t.push("is-left"), l.type && t.push(`is-${l.type}`), l.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, s) => (d(), m("div", {
      class: x(a.value)
    }, [
      y("ul", null, [
        z(t.$slots, "default")
      ])
    ], 2));
  }
}), Ir = /* @__PURE__ */ w({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const l = e, a = g(() => {
      let t = ["tile", `is-${l.type}`];
      return l.size && t.push(`is-${l.size}`), l.borders && (l.borders.some((s) => s === we.all) ? t.push("is-bordered") : l.borders.forEach((s) => t.push(`is-bordered-${s}`))), l.vertical && t.push("is-vertical"), t;
    });
    return (t, s) => (d(), m("div", {
      class: x(a.value)
    }, [
      z(t.$slots, "default")
    ], 2));
  }
}), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: cr,
  Box: fr,
  Breadcrumbs: yr,
  BreadcrumbsItem: vr,
  Card: Ds,
  Column: kr,
  ColumnContainer: _r,
  List: ws,
  ListItem: $e,
  ModalCard: wr,
  Panel: xr,
  Table: Jr,
  Tabs: Lr,
  TabsTab: Er,
  Tile: Ir
}, Symbol.toStringTag, { value: "Module" }));
const Ke = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
ge(`${Ke.substring(0, Ke.lastIndexOf("/"))}/style.css`);
const Vr = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function zr(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Vr,
  setSkin: zr
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: jr,
  Button: Hr,
  ButtonAdd: Tr,
  ButtonCancel: Yr,
  ButtonDelete: qr,
  ButtonDisable: Kr,
  ButtonDownload: Cr,
  ButtonEdit: Gr,
  ButtonEnable: Xr,
  ButtonOkay: Qr,
  ButtonPrint: Zr,
  ButtonRefresh: eu,
  ButtonSave: tu,
  ButtonUpload: au,
  Chart: lu,
  CheckMark: su,
  DynamicSlot: nu,
  Filter: ou,
  Icon: ru,
  Message: uu,
  Notification: iu,
  PageNotification: du,
  Pagination: cu,
  Promised: hu
} = qn, { DraggableItem: pu, DropZone: bu, Sortable: mu } = Xn, {
  AutoComplete: fu,
  CheckboxGroup: gu,
  Checkbox: vu,
  Date: yu,
  ComponentForm: _u,
  FullEditor: ku,
  Header: $u,
  Hidden: Su,
  Number: Mu,
  Paragraph: Du,
  RadioGroup: wu,
  Select: Ou,
  Switch: Fu,
  Text: Bu,
  TextArea: xu,
  Time: Ju,
  FormComponent: Nu
} = rr, {
  Banner: Pu,
  Box: Eu,
  BreadcrumbsItem: Lu,
  Breadcrumbs: Iu,
  Card: Wu,
  Column: Vu,
  ColumnContainer: zu,
  List: Au,
  ListItem: Uu,
  ModalCard: Ru,
  Panel: ju,
  Table: Hu,
  Tabs: Tu,
  TabsTab: Yu,
  Tile: qu
} = Wr, { AVAIABLE_SKINS: Ku, setSkin: Cu } = Ar, { ColorTypes: Gu, Sizes: Xu, AnimationSpeeds: Qu, AnimationTypes: Zu, IconSizes: ei, ChartLegendPositions: ti, ChartTypes: ai } = Qs;
export {
  Ku as AVAIABLE_SKINS,
  jr as Animation,
  Qu as AnimationSpeeds,
  Zu as AnimationTypes,
  fu as AutoComplete,
  Pu as Banner,
  Eu as Box,
  Iu as Breadcrumbs,
  Lu as BreadcrumbsItem,
  Hr as Button,
  Tr as ButtonAdd,
  Yr as ButtonCancel,
  qr as ButtonDelete,
  Kr as ButtonDisable,
  Cr as ButtonDownload,
  Gr as ButtonEdit,
  Xr as ButtonEnable,
  Qr as ButtonOkay,
  Zr as ButtonPrint,
  eu as ButtonRefresh,
  tu as ButtonSave,
  au as ButtonUpload,
  Wu as Card,
  lu as Chart,
  ti as ChartLegendPositions,
  ai as ChartTypes,
  su as CheckMark,
  vu as Checkbox,
  gu as CheckboxGroup,
  Gu as ColorTypes,
  Vu as Column,
  zu as ColumnContainer,
  _u as ComponentForm,
  yu as Date,
  pu as DraggableItem,
  bu as DropZone,
  nu as DynamicSlot,
  ou as Filter,
  Nu as FormComponent,
  ku as FullEditor,
  $u as Header,
  Su as Hidden,
  ru as Icon,
  ei as IconSizes,
  Au as List,
  Uu as ListItem,
  uu as Message,
  Ru as ModalCard,
  iu as Notification,
  Mu as Number,
  du as PageNotification,
  cu as Pagination,
  ju as Panel,
  Du as Paragraph,
  hu as Promised,
  wu as RadioGroup,
  Ou as Select,
  Xu as Sizes,
  mu as Sortable,
  Fu as Switch,
  Hu as Table,
  Tu as Tabs,
  Yu as TabsTab,
  Bu as Text,
  xu as TextArea,
  qu as Tile,
  Ju as Time,
  Cu as setSkin
};
//# sourceMappingURL=components.esm.js.map
