import { defineComponent as M, computed as y, openBlock as c, createBlock as P, Transition as zs, withCtx as H, renderSlot as W, createElementBlock as b, normalizeClass as V, inject as T, onMounted as re, createVNode as I, createCommentVNode as L, toDisplayString as E, mergeProps as G, createElementVNode as g, normalizeProps as pe, guardReactiveProps as fe, ref as B, watch as U, createSlots as As, normalizeStyle as He, unref as w, Fragment as Y, renderList as C, resolveDynamicComponent as ce, withDirectives as R, vModelText as he, createTextVNode as ee, vShow as le, toRefs as Us, reactive as Ye, warn as Rs, vModelCheckbox as Ee, readonly as qe, withAsyncContext as js, onUnmounted as Ts, vModelSelect as Hs, vModelDynamic as Ys, provide as qs } from "vue";
import "jquery";
const ve = (e) => new Promise((s) => {
  let a = [];
  var t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((n, l) => {
    if (n.toLowerCase().endsWith(".css") || (n += ".css"), document.querySelectorAll('link[server_path="' + n + '"]').length == 0) {
      let r = document.createElement("link"), u = new Promise((d) => {
        r.onload = function() {
          d(n);
        };
      });
      a[l] = u, t.appendChild(r), r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("server_path", n), r.setAttribute("href", n);
    } else
      a[l] = Promise.resolve(n);
  }), Promise.all(a).then((n) => {
    s(n);
  });
});
var q = /* @__PURE__ */ ((e) => (e[e.white = 0] = "white", e[e.black = 1] = "black", e[e.light = 2] = "light", e[e.dark = 3] = "dark", e[e.primary = 4] = "primary", e[e.link = 5] = "link", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.warning = 8] = "warning", e[e.danger = 9] = "danger", e))(q || {}), ne = /* @__PURE__ */ ((e) => (e[e.info = 0] = "info", e[e.success = 1] = "success", e[e.warning = 2] = "warning", e[e.danger = 3] = "danger", e))(ne || {}), oe = /* @__PURE__ */ ((e) => (e[e.small = 0] = "small", e[e.normal = 1] = "normal", e[e.medium = 2] = "medium", e[e.large = 3] = "large", e))(oe || {}), ue = /* @__PURE__ */ ((e) => (e[e.slower = 0] = "slower", e[e.slow = 1] = "slow", e[e.fast = 2] = "fast", e[e.faster = 3] = "faster", e))(ue || {}), Me = /* @__PURE__ */ ((e) => (e[e.bounce = 0] = "bounce", e[e.flash = 1] = "flash", e[e.pulse = 2] = "pulse", e[e.rubberBand = 3] = "rubberBand", e[e.shakeX = 4] = "shakeX", e[e.shakeY = 5] = "shakeY", e[e.headShake = 6] = "headShake", e[e.swing = 7] = "swing", e[e.tada = 8] = "tada", e[e.wobble = 9] = "wobble", e[e.jello = 10] = "jello", e[e.heartBeat = 11] = "heartBeat", e[e.backOutDown = 12] = "backOutDown", e[e.backOutLeft = 13] = "backOutLeft", e[e.backOutRight = 14] = "backOutRight", e[e.backOutUp = 15] = "backOutUp", e[e.bounceIn = 16] = "bounceIn", e[e.bounceInDown = 17] = "bounceInDown", e[e.bounceInLeft = 18] = "bounceInLeft", e[e.bounceInRight = 19] = "bounceInRight", e[e.bounceInUp = 20] = "bounceInUp", e[e.bounceOut = 21] = "bounceOut", e[e.boundOutDown = 22] = "boundOutDown", e[e.bounceOutLeft = 23] = "bounceOutLeft", e[e.boundOutRight = 24] = "boundOutRight", e[e.bounceOutUp = 25] = "bounceOutUp", e[e.fadeIn = 26] = "fadeIn", e[e.fadeInDown = 27] = "fadeInDown", e[e.fadeInDownBig = 28] = "fadeInDownBig", e[e.fadeInLeft = 29] = "fadeInLeft", e[e.fadeInLeftBig = 30] = "fadeInLeftBig", e[e.fadeInRight = 31] = "fadeInRight", e[e.fadeInRightBig = 32] = "fadeInRightBig", e[e.fadeInUp = 33] = "fadeInUp", e[e.fadeInUpBig = 34] = "fadeInUpBig", e[e.fadeInTopLeft = 35] = "fadeInTopLeft", e[e.fadeInTopRight = 36] = "fadeInTopRight", e[e.fadeInBottomLeft = 37] = "fadeInBottomLeft", e[e.fadeInBottomRight = 38] = "fadeInBottomRight", e[e.fadeOut = 39] = "fadeOut", e[e.fadeOutDown = 40] = "fadeOutDown", e[e.fadeOutDownBig = 41] = "fadeOutDownBig", e[e.fadeOutLeft = 42] = "fadeOutLeft", e[e.fadeOutLeftBig = 43] = "fadeOutLeftBig", e[e.fadeOutRight = 44] = "fadeOutRight", e[e.fadeOutRightBig = 45] = "fadeOutRightBig", e[e.fadeOutUp = 46] = "fadeOutUp", e[e.fadeOutUpBig = 47] = "fadeOutUpBig", e[e.fadeOutTopLeft = 48] = "fadeOutTopLeft", e[e.fadeOutTopRight = 49] = "fadeOutTopRight", e[e.fadeOutBottomRight = 50] = "fadeOutBottomRight", e[e.fadeOutBottomLeft = 51] = "fadeOutBottomLeft", e[e.flip = 52] = "flip", e[e.flipInX = 53] = "flipInX", e[e.flipInY = 54] = "flipInY", e[e.flipOutX = 55] = "flipOutX", e[e.flipOutY = 56] = "flipOutY", e[e.lightSpeedInRight = 57] = "lightSpeedInRight", e[e.lightSpeedInLeft = 58] = "lightSpeedInLeft", e[e.lightSpeedOutRight = 59] = "lightSpeedOutRight", e[e.lightSpeedOutLeft = 60] = "lightSpeedOutLeft", e[e.rotateIn = 61] = "rotateIn", e[e.rotateInDownLeft = 62] = "rotateInDownLeft", e[e.rotateInDownRight = 63] = "rotateInDownRight", e[e.rotateInUpLeft = 64] = "rotateInUpLeft", e[e.rotateInUpRight = 65] = "rotateInUpRight", e[e.rotateOut = 66] = "rotateOut", e[e.rotateOutDownLeft = 67] = "rotateOutDownLeft", e[e.rotateOutDownRight = 68] = "rotateOutDownRight", e[e.rotateOutUpLeft = 69] = "rotateOutUpLeft", e[e.rotateOutUpRight = 70] = "rotateOutUpRight", e[e.hinge = 71] = "hinge", e[e.jackInTheBox = 72] = "jackInTheBox", e[e.rollIn = 73] = "rollIn", e[e.rollOut = 74] = "rollOut", e[e.zoomIn = 75] = "zoomIn", e[e.zoomInDown = 76] = "zoomInDown", e[e.zoomInLeft = 77] = "zoomInLeft", e[e.zoomInRight = 78] = "zoomInRight", e[e.zoomInUp = 79] = "zoomInUp", e[e.zoomOut = 80] = "zoomOut", e[e.zoomOutDown = 81] = "zoomOutDown", e[e.zoomOutLeft = 82] = "zoomOutLeft", e[e.zoomOutRight = 83] = "zoomOutRight", e[e.zoomOutUp = 84] = "zoomOutUp", e[e.slideInDown = 85] = "slideInDown", e[e.slideInLeft = 86] = "slideInLeft", e[e.slideInRight = 87] = "slideInRight", e[e.slideInUp = 88] = "slideInUp", e[e.slideOutDown = 89] = "slideOutDown", e[e.slideOutLeft = 90] = "slideOutLeft", e[e.slideOutRight = 91] = "slideOutRight", e[e.slideOutUp = 92] = "slideOutUp", e))(Me || {}), Ke = /* @__PURE__ */ ((e) => (e[e.area = 0] = "area", e[e.bar = 1] = "bar", e[e.bubble = 2] = "bubble", e[e.doughnut = 3] = "doughnut", e[e.pie = 4] = "pie", e[e.line = 5] = "line", e[e.polarArea = 6] = "polarArea", e[e.radar = 7] = "radar", e[e.scatter = 8] = "scatter", e))(Ke || {}), Pe = /* @__PURE__ */ ((e) => (e[e.top = 0] = "top", e[e.left = 1] = "left", e[e.bottom = 2] = "bottom", e[e.right = 3] = "right", e[e.chartArea = 4] = "chartArea", e))(Pe || {}), Q = /* @__PURE__ */ ((e) => (e[e.xxsmall = 0] = "xxsmall", e[e.xsmall = 1] = "xsmall", e[e.small = 2] = "small", e[e.normal = 3] = "normal", e[e.large = 4] = "large", e[e.xlarge = 5] = "xlarge", e[e.xxlarge = 6] = "xxlarge", e))(Q || {}), Z = /* @__PURE__ */ ((e) => (e[e.center = 0] = "center", e[e.topLeft = 1] = "topLeft", e[e.bottomLeft = 2] = "bottomLeft", e[e.topRight = 3] = "topRight", e[e.bottomRight = 4] = "bottomRight", e[e.top = 5] = "top", e[e.bottom = 6] = "bottom", e))(Z || {}), De = /* @__PURE__ */ ((e) => (e[e.centered = 0] = "centered", e[e.right = 1] = "right", e[e.left = 2] = "left", e))(De || {}), Ce = /* @__PURE__ */ ((e) => (e[e.arrow = 0] = "arrow", e[e.button = 1] = "button", e[e.dot = 2] = "dot", e[e.succeeds = 3] = "succeeds", e))(Ce || {}), Ge = /* @__PURE__ */ ((e) => (e[e.mobile = 0] = "mobile", e[e.desktop = 1] = "desktop", e[e.gapless = 2] = "gapless", e[e.multiline = 3] = "multiline", e[e.centered = 4] = "centered", e[e.borderleft = 5] = "borderleft", e[e.borderright = 6] = "borderright", e[e.borderbottom = 7] = "borderbottom", e[e.bordertop = 8] = "bordertop", e[e.fullWidth = 9] = "fullWidth", e[e.fullHeight = 10] = "fullHeight", e))(Ge || {}), Xe = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(Xe || {}), Qe = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(Qe || {}), we = /* @__PURE__ */ ((e) => (e[e.left = 0] = "left", e[e.right = 1] = "right", e[e.bottom = 2] = "bottom", e[e.top = 3] = "top", e[e.all = 4] = "all", e))(we || {}), Ze = /* @__PURE__ */ ((e) => (e[e.centered = 0] = "centered", e[e.right = 1] = "right", e[e.left = 2] = "left", e))(Ze || {}), et = /* @__PURE__ */ ((e) => (e[e.boxed = 0] = "boxed", e[e.toggled = 1] = "toggled", e[e.roundToggle = 2] = "roundToggle", e))(et || {}), tt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(tt || {}), at = /* @__PURE__ */ ((e) => (e[e.parent = 0] = "parent", e[e.child = 1] = "child", e[e.ancestor = 2] = "ancestor", e))(at || {});
const Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ue,
  AnimationTypes: Me,
  BorderTypes: we,
  BreadCrumbAlignments: De,
  BreadCrumbSeperators: Ce,
  ChartLegendPositions: Pe,
  ChartTypes: Ke,
  ColorTypes: q,
  ColumnContainerModifiers: Ge,
  ColumnOffsetSizes: Qe,
  ColumnSizes: Xe,
  DropZoneQuadrants: Z,
  IconSizes: Q,
  NoticeTypes: ne,
  Sizes: oe,
  TabAlignments: Ze,
  TabStyles: et,
  TileSizes: tt,
  TileTypes: at
}, Symbol.toStringTag, { value: "Module" })), lt = /* @__PURE__ */ M({
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
    ve("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
    const s = e, a = (d) => {
      switch (d) {
        case ue.slower:
          return 3e3;
        case ue.fast:
          return 800;
        case ue.faster:
          return 500;
        default:
          return 2e3;
      }
    }, t = (d) => d === void 0 ? "" : `animate__${d}`, n = (d) => d === void 0 ? "animate__slow" : `animate__${d}`, l = y(() => ({
      enter: a(s.speedIn ?? s.speed),
      leave: a(s.speedOut ?? s.speed)
    })), o = y(() => [
      "animate__animated",
      t(s.incoming ?? s.inout),
      n(s.speedIn ?? s.speed)
    ].join(" ")), r = y(() => [
      "animate__animated",
      t(s.outgoing ?? s.inout),
      n(s.speedOut ?? s.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      t(s.repeating),
      n(s.speed ?? "")
    ].join(" "));
    return (d, _) => s.repeating ? (c(), b("div", {
      key: 1,
      class: V(u.value)
    }, [
      W(d.$slots, "default")
    ], 2)) : (c(), P(zs, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": r.value,
      duration: l.value
    }, {
      default: H(() => [
        W(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), Le = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/", Ae = `${Le}brands.min.css`, Ue = "brands_style_sheet";
ve([
  `${Le}all.min.css`
]);
const Cs = /\.fa-([^: ]+):before/g, st = [];
if (!document.getElementById(Ue)) {
  let e = document.createElement("style");
  e.setAttribute("type", "text/css"), e.setAttribute("server_path", Ae), e.setAttribute("id", Ue), document.head.appendChild(e), fetch(Ae).then((s) => {
    s.ok && s.text().then((a) => {
      [...a.matchAll(Cs)].forEach((t) => {
        st.push(t[1]);
      }), e.innerText = a;
    });
  });
}
const K = /* @__PURE__ */ M({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const s = e, a = T("IconSet"), t = y(() => {
      let n = [];
      if (s.icon !== void 0 && s.icon !== null && (st.indexOf(s.icon) >= 0 ? n.push("fa-brands") : (n.push("fa-ico"), a !== void 0 && a != null ? n.push("fa-" + a) : n.push("fa-solid"))), s.icon !== void 0 && s.icon !== null && n.push((s.icon.indexOf("fa-") == -1 ? " fa-" : " ") + s.icon), s.size !== void 0 && s.size !== null && s.size !== Q.normal)
        switch (s.size) {
          case Q.xxsmall:
            n.push("fa-2xs");
            break;
          case Q.xsmall:
            n.push("fa-xs");
            break;
          case Q.small:
            n.push("fa-sm");
            break;
          case Q.large:
            n.push("fa-lg");
            break;
          case Q.xlarge:
            n.push("fa-xl");
            break;
          case Q.xxlarge:
            n.push("fa-2xl");
            break;
        }
      return n;
    });
    return re(() => ve(`${Le}${a ?? "solid"}.min.css`)), (n, l) => (c(), b("i", {
      class: V(t.value)
    }, null, 2));
  }
});
const Gs = ["disabled"], Xs = {
  key: 0,
  class: "icon is-small"
}, Qs = { key: 1 }, X = /* @__PURE__ */ M({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: q.primary },
    size: { default: oe.small },
    title: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = y(() => {
      let l = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && l.push("disabled"), a.addonclass && l.push(a.addonclass), a.hidemobile && l.push("is-hidden-mobile"), a.hidetablet && l.push("is-hidden-tablet-only"), a.hidedesktop && l.push("is-hidden-desktop is-hidden-widescreen"), l;
    });
    return (l, o) => (c(), b("button", {
      class: V(n.value),
      disabled: a.disabled,
      onClick: o[0] || (o[0] = (r) => t("click"))
    }, [
      a.icon != null ? (c(), b("span", Xs, [
        I(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : L("", !0),
      a.title != null ? (c(), b("span", Qs, E(a.title), 1)) : L("", !0)
    ], 10, Gs));
  }
}), nt = {
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
}, ot = {
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
}, rt = {
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
}, ut = {}, it = {}, dt = {}, ct = {
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
}, ht = {
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
}, bt = {
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
}, pt = {}, ft = {
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
}, vt = {
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
}, mt = {}, gt = {
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
}, yt = {
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
}, _t = {
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
}, kt = {
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
}, $t = {
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
}, St = {
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
}, Mt = {
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
}, Dt = {
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
}, wt = {
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
}, Ft = {
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
}, Ot = {
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
}, Bt = {}, xt = {}, Jt = {}, Nt = {}, Vt = {}, Et = {}, Pt = {
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
}, Lt = {}, Wt = {
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
}, It = {
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
}, zt = {}, At = {}, Ut = {}, Rt = {
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
}, jt = {}, Tt = {}, Ht = {
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
}, Yt = {
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
}, qt = {}, Kt = {}, Zs = {
  en: nt,
  ar: ot,
  az: rt,
  bg: ut,
  bn: it,
  ca: dt,
  cs: ct,
  da: ht,
  de: bt,
  el: pt,
  eo: ft,
  es: vt,
  et: mt,
  fa: gt,
  fi: yt,
  fr: _t,
  ga: kt,
  he: $t,
  hi: St,
  hu: Mt,
  id: Dt,
  it: wt,
  ja: Ft,
  ko: Ot,
  lt: Bt,
  lv: xt,
  ms: Jt,
  nb: Nt,
  nl: Vt,
  pl: Et,
  pt: Pt,
  ro: Lt,
  ru: Wt,
  sk: It,
  sl: zt,
  sq: At,
  sr: Ut,
  sv: Rt,
  th: jt,
  tl: Tt,
  tr: Ht,
  uk: Yt,
  zh: qt,
  zt: Kt
}, en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ot,
  az: rt,
  bg: ut,
  bn: it,
  ca: dt,
  cs: ct,
  da: ht,
  de: bt,
  default: Zs,
  el: pt,
  en: nt,
  eo: ft,
  es: vt,
  et: mt,
  fa: gt,
  fi: yt,
  fr: _t,
  ga: kt,
  he: $t,
  hi: St,
  hu: Mt,
  id: Dt,
  it: wt,
  ja: Ft,
  ko: Ot,
  lt: Bt,
  lv: xt,
  ms: Jt,
  nb: Nt,
  nl: Vt,
  pl: Et,
  pt: Pt,
  ro: Lt,
  ru: Wt,
  sk: It,
  sl: zt,
  sq: At,
  sr: Ut,
  sv: Rt,
  th: jt,
  tl: Tt,
  tr: Ht,
  uk: Yt,
  zh: qt,
  zt: Kt
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  Filter: "Filter"
}, Gt = {
  Filter: "فيلم"
}, Xt = {
  Filter: "Qeydiyyat"
}, Qt = {}, Zt = {}, ea = {}, ta = {
  Filter: "Čeština"
}, aa = {
  Filter: "Filter"
}, la = {
  Filter: "Filter"
}, sa = {}, na = {
  Filter: "Filtero"
}, oa = {
  Filter: "Filtro"
}, ra = {}, ua = {
  Filter: "فیلتر"
}, ia = {
  Filter: "Filter"
}, da = {
  Filter: "Filtre"
}, ca = {
  Filter: "Scagaire"
}, ha = {
  Filter: "Filter"
}, ba = {
  Filter: "फिल्टर"
}, pa = {
  Filter: "Szűrő"
}, fa = {
  Filter: "Login"
}, va = {
  Filter: "Filtro"
}, ma = {
  Filter: "フィルター"
}, ga = {
  Filter: "제품정보"
}, ya = {}, _a = {}, ka = {}, $a = {}, Sa = {}, Ma = {}, Da = {
  Filter: "Filtro"
}, wa = {}, Fa = {
  Filter: "Фильтр"
}, Oa = {
  Filter: "Filter"
}, Ba = {}, xa = {}, Ja = {}, Na = {
  Filter: "Filter"
}, Va = {}, Ea = {}, Pa = {
  Filter: "Filtre"
}, La = {
  Filter: "Фільтри"
}, Wa = {}, Ia = {}, tn = {
  en: Ct,
  ar: Gt,
  az: Xt,
  bg: Qt,
  bn: Zt,
  ca: ea,
  cs: ta,
  da: aa,
  de: la,
  el: sa,
  eo: na,
  es: oa,
  et: ra,
  fa: ua,
  fi: ia,
  fr: da,
  ga: ca,
  he: ha,
  hi: ba,
  hu: pa,
  id: fa,
  it: va,
  ja: ma,
  ko: ga,
  lt: ya,
  lv: _a,
  ms: ka,
  nb: $a,
  nl: Sa,
  pl: Ma,
  pt: Da,
  ro: wa,
  ru: Fa,
  sk: Oa,
  sl: Ba,
  sq: xa,
  sr: Ja,
  sv: Na,
  th: Va,
  tl: Ea,
  tr: Pa,
  uk: La,
  zh: Wa,
  zt: Ia
}, an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Gt,
  az: Xt,
  bg: Qt,
  bn: Zt,
  ca: ea,
  cs: ta,
  da: aa,
  de: la,
  default: tn,
  el: sa,
  en: Ct,
  eo: na,
  es: oa,
  et: ra,
  fa: ua,
  fi: ia,
  fr: da,
  ga: ca,
  he: ha,
  hi: ba,
  hu: pa,
  id: fa,
  it: va,
  ja: ma,
  ko: ga,
  lt: ya,
  lv: _a,
  ms: ka,
  nb: $a,
  nl: Sa,
  pl: Ma,
  pt: Da,
  ro: wa,
  ru: Fa,
  sk: Oa,
  sl: Ba,
  sq: xa,
  sr: Ja,
  sv: Na,
  th: Va,
  tl: Ea,
  tr: Pa,
  uk: La,
  zh: Wa,
  zt: Ia
}, Symbol.toStringTag, { value: "Module" })), za = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer"
}, Aa = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer"
}, Ua = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə"
}, Ra = {}, ja = {}, Ta = {}, Ha = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština"
}, Ya = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer"
}, qa = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit"
}, Ka = {}, Ca = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli"
}, Ga = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer"
}, Xa = {}, Qa = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer"
}, Za = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa"
}, el = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer"
}, tl = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh"
}, al = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש"
}, ll = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया"
}, sl = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb"
}, nl = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login"
}, ol = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo"
}, rl = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース"
}, ul = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더"
}, il = {}, dl = {}, cl = {}, hl = {}, bl = {}, pl = {}, fl = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais"
}, vl = {}, ml = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer"
}, gl = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka"
}, yl = {}, _l = {}, kl = {}, $l = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare"
}, Sl = {}, Ml = {}, Dl = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer"
}, wl = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова"
}, Fl = {}, Ol = {}, ln = {
  en: za,
  ar: Aa,
  az: Ua,
  bg: Ra,
  bn: ja,
  ca: Ta,
  cs: Ha,
  da: Ya,
  de: qa,
  el: Ka,
  eo: Ca,
  es: Ga,
  et: Xa,
  fa: Qa,
  fi: Za,
  fr: el,
  ga: tl,
  he: al,
  hi: ll,
  hu: sl,
  id: nl,
  it: ol,
  ja: rl,
  ko: ul,
  lt: il,
  lv: dl,
  ms: cl,
  nb: hl,
  nl: bl,
  pl,
  pt: fl,
  ro: vl,
  ru: ml,
  sk: gl,
  sl: yl,
  sq: _l,
  sr: kl,
  sv: $l,
  th: Sl,
  tl: Ml,
  tr: Dl,
  uk: wl,
  zh: Fl,
  zt: Ol
}, sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Aa,
  az: Ua,
  bg: Ra,
  bn: ja,
  ca: Ta,
  cs: Ha,
  da: Ya,
  de: qa,
  default: ln,
  el: Ka,
  en: za,
  eo: Ca,
  es: Ga,
  et: Xa,
  fa: Qa,
  fi: Za,
  fr: el,
  ga: tl,
  he: al,
  hi: ll,
  hu: sl,
  id: nl,
  it: ol,
  ja: rl,
  ko: ul,
  lt: il,
  lv: dl,
  ms: cl,
  nb: hl,
  nl: bl,
  pl,
  pt: fl,
  ro: vl,
  ru: ml,
  sk: gl,
  sl: yl,
  sq: _l,
  sr: kl,
  sv: $l,
  th: Sl,
  tl: Ml,
  tr: Dl,
  uk: wl,
  zh: Fl,
  zt: Ol
}, Symbol.toStringTag, { value: "Module" })), Bl = {
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
}, xl = {
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
}, Jl = {
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
}, Nl = {
  Weekdays: {},
  Months: {}
}, Vl = {
  Weekdays: {},
  Months: {}
}, El = {
  Weekdays: {},
  Months: {}
}, Pl = {
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
}, Ll = {
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
}, Wl = {
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
}, Il = {
  Weekdays: {},
  Months: {}
}, zl = {
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
}, Al = {
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
}, Ul = {
  Weekdays: {},
  Months: {}
}, Rl = {
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
}, jl = {
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
}, Tl = {
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
}, Hl = {
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
}, Yl = {
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
}, ql = {
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
}, Kl = {
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
}, Cl = {
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
}, Gl = {
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
}, Xl = {
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
}, Ql = {
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
}, Zl = {
  Weekdays: {},
  Months: {}
}, es = {
  Weekdays: {},
  Months: {}
}, ts = {
  Weekdays: {},
  Months: {}
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
}, os = {
  Weekdays: {},
  Months: {}
}, rs = {
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
}, us = {
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
}, is = {
  Weekdays: {},
  Months: {}
}, ds = {
  Weekdays: {},
  Months: {}
}, cs = {
  Weekdays: {},
  Months: {}
}, hs = {
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
}, bs = {
  Weekdays: {},
  Months: {}
}, ps = {
  Weekdays: {},
  Months: {}
}, fs = {
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
}, vs = {
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
}, ms = {
  Weekdays: {},
  Months: {}
}, gs = {
  Weekdays: {},
  Months: {}
}, nn = {
  en: Bl,
  ar: xl,
  az: Jl,
  bg: Nl,
  bn: Vl,
  ca: El,
  cs: Pl,
  da: Ll,
  de: Wl,
  el: Il,
  eo: zl,
  es: Al,
  et: Ul,
  fa: Rl,
  fi: jl,
  fr: Tl,
  ga: Hl,
  he: Yl,
  hi: ql,
  hu: Kl,
  id: Cl,
  it: Gl,
  ja: Xl,
  ko: Ql,
  lt: Zl,
  lv: es,
  ms: ts,
  nb: as,
  nl: ls,
  pl: ss,
  pt: ns,
  ro: os,
  ru: rs,
  sk: us,
  sl: is,
  sq: ds,
  sr: cs,
  sv: hs,
  th: bs,
  tl: ps,
  tr: fs,
  uk: vs,
  zh: ms,
  zt: gs
}, on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: xl,
  az: Jl,
  bg: Nl,
  bn: Vl,
  ca: El,
  cs: Pl,
  da: Ll,
  de: Wl,
  default: nn,
  el: Il,
  en: Bl,
  eo: zl,
  es: Al,
  et: Ul,
  fa: Rl,
  fi: jl,
  fr: Tl,
  ga: Hl,
  he: Yl,
  hi: ql,
  hu: Kl,
  id: Cl,
  it: Gl,
  ja: Xl,
  ko: Ql,
  lt: Zl,
  lv: es,
  ms: ts,
  nb: as,
  nl: ls,
  pl: ss,
  pt: ns,
  ro: os,
  ru: rs,
  sk: us,
  sl: is,
  sq: ds,
  sr: cs,
  sv: hs,
  th: bs,
  tl: ps,
  tr: fs,
  uk: vs,
  zh: ms,
  zt: gs
}, Symbol.toStringTag, { value: "Module" })), rn = {
  Button: en,
  Filter: an,
  Pagination: sn,
  Date: on
}, z = (e, s) => {
  s == null && (s = "en");
  let a = rn[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[s] === void 0 ? a = a.en : a = a[s], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, un = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Add", n),
      icon: "plus",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), ys = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Cancel", n),
      icon: "window-close",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), dn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Delete", n),
      icon: "trash-alt",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), cn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Disable", n),
      icon: "times-circle",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), hn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Download", n),
      icon: "download",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), bn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Edit", n),
      icon: "edit",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), pn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Enable", n),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), _s = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Okay", n),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), fn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Print", n),
      icon: "print",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), ks = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Refresh", n),
      icon: "sync",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), vn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Save", n),
      icon: "save",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), mn = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = T("Language"), l = y(() => ({
      Title: z("Button.Upload", n),
      icon: "upload",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (o, r) => (c(), P(X, G(l.value, {
      onClick: r[0] || (r[0] = (u) => a("click"))
    }), null, 16));
  }
}), gn = { class: "card-header" }, yn = { class: "card-content" }, _n = { class: "card-footer" }, $s = /* @__PURE__ */ M({
  __name: "card",
  props: {
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean }
  },
  setup(e) {
    const s = e, a = {
      addonclass: "card-footer-item"
    }, t = {
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (n, l) => (c(), b("div", {
      class: V(["card", { "is-fullwidth": s.fullWidth, "is-fullheight": s.fullHeight }])
    }, [
      g("div", gn, [
        W(n.$slots, "header", pe(fe(t)))
      ]),
      g("div", yn, [
        W(n.$slots, "content")
      ]),
      g("div", _n, [
        W(n.$slots, "footer", pe(fe(a)))
      ])
    ], 2));
  }
}), kn = /* @__PURE__ */ M({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: Pe.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: s }) {
    const a = B(null), t = e, n = s;
    let l = null;
    const o = () => {
      l != null && l.update();
    }, r = y(() => {
      var u = "";
      return t.width && (u = `width:${t.width}px;`), t.height && (u += `height:${t.height}px;`), u;
    });
    return U([t.type], (u) => {
      l != null && (l.type = u ?? "line");
    }), U(
      [t.labels],
      (u) => {
        l != null && (l.data.labels = u, (t.showRefresh == null || !t.showRefresh) && o());
      },
      { deep: !0 }
    ), U(
      [t.datasets],
      (u) => {
        l != null && (l.data.datasets = u, (t.showRefresh == null || !t.showRefresh) && o());
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
              filter: (_, F) => _.text != null
            },
            onClick: function(_, F) {
              n("legendItemClick", l, F);
            }
          }
        }
      };
      t.scales != null && t.scales != null && (u.scales = t.scales), t.tooltips != null && t.tooltips != null && (u.tooltips = t.tooltips);
      const d = await import("chart");
      l = new d(a.val.getContext("2d"), {
        type: t.type == null ? "line" : t.type,
        data: {
          datasets: t.datasets,
          labels: t.labels
        },
        options: u
      }), l.update();
    }), (u, d) => (c(), P($s, null, As({
      content: H(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: a,
          style: He(r.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      t.title ? {
        name: "header",
        fn: H((_) => [
          g("h3", {
            class: V(_.headerClass)
          }, E(t.title), 3)
        ]),
        key: "0"
      } : void 0,
      t.showRefresh != null && t.showRefresh != null && t.showRefresh ? {
        name: "footer",
        fn: H((_) => [
          I(ks, G(_, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), $n = /* @__PURE__ */ M({
  __name: "check-mark",
  setup(e) {
    const s = T("IconSet");
    return (a, t) => (c(), P(K, {
      icon: "check",
      size: "sm",
      IconSet: w(s)
    }, null, 8, ["IconSet"]));
  }
}), Re = async (e, s, a) => {
  let t = await import(e);
  const n = Object.keys(t);
  return s && n.sort(s), n.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, Sn = /* @__PURE__ */ M({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const s = B(null), a = e, t = y(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return U([a.url, a.filter], async () => {
      s.value = await Re(a.url, a.sortMethod, t);
    }), re(async () => {
      s.value = await Re(a.url, a.sortMethod, t);
    }), (n, l) => (c(!0), b(Y, null, C(s.value, (o) => (c(), P(ce(o), pe(fe(a.props)), null, 16))), 256));
  }
}), Mn = { class: "control has-icons-left" }, Dn = ["placeholder"], wn = { class: "icon is-small is-left" }, Fn = /* @__PURE__ */ M({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = T("Language"), l = y(() => z("Filter.Filter", n)), o = B(null);
    U([o], (u) => {
      u[0] === "" && a.default_value && (o.value = a.default_value, t("filter", o.value == "" ? null : o.value));
    });
    const r = (u) => {
      u.keyCode == 13 && t("filter", o.value == "" ? null : o.value);
    };
    return re(() => {
      a.default_value && (o.value = a.default_value);
    }), (u, d) => (c(), b("div", Mn, [
      R(g("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": d[0] || (d[0] = (_) => o.value = _),
        onKeypress: r
      }, null, 40, Dn), [
        [he, o.value]
      ]),
      g("span", wn, [
        I(K, { icon: "filter" })
      ])
    ]));
  }
}), On = {
  key: 0,
  class: "message-header"
}, Bn = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, xn = { class: "message-body" }, Jn = /* @__PURE__ */ M({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: oe.normal }
  },
  setup(e) {
    const s = e, a = y(() => s.size === oe.normal ? null : `is-${s.size}`), t = y(() => `is-${s.type}`);
    return (n, l) => (c(), b("article", {
      class: V(["message", a.value, t.value])
    }, [
      s.title ? (c(), b("div", On, [
        g("p", null, E(s.title), 1),
        s.hasDelete ? (c(), b("button", Bn)) : L("", !0)
      ])) : L("", !0),
      g("div", xn, [
        ee(E(s.message) + " ", 1),
        W(n.$slots, "default")
      ])
    ], 2));
  }
}), xe = /* @__PURE__ */ M({
  __name: "notification",
  props: {
    type: { default: ne.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e;
    return (a, t) => (c(), b("div", {
      class: V(["notification", "is-" + s.type, s.light ? "is-light" : ""])
    }, [
      ee(E(s.message) + " ", 1),
      W(a.$slots, "default")
    ], 2));
  }
}), Nn = {
  key: 0,
  class: "modal-background"
}, Vn = {
  key: 0,
  class: "title"
}, En = { class: "block" }, Pn = /* @__PURE__ */ M({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: ne.info },
    message: {},
    header: {},
    blockUser: { type: Boolean },
    hasClose: { type: Boolean },
    isLight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = y(() => {
      switch (a.type) {
        case ne.info:
          return "circle-info";
        case ne.success:
          return "circle-check";
        case ne.danger:
          return "bug";
        case ne.warning:
          return "circle-exclamation";
      }
    }), l = y(() => {
      var o = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && o.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || o.push("has-no-close"), o;
    });
    return (o, r) => (c(), b("div", {
      class: V({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (c(), b("div", Nn)) : L("", !0),
      I(lt, {
        incoming: w(Me).fadeIn,
        outgoing: w(Me).fadeOut,
        speed: w(ue).slower
      }, {
        default: H(() => [
          a.visible ? (c(), b("div", {
            key: 0,
            class: V(l.value)
          }, [
            I(K, {
              icon: n.value,
              size: w(Q).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (c(), b("h1", Vn, E(a.header), 1)) : L("", !0),
            g("div", En, E(a.message), 1),
            a.hasClose ? (c(), P(K, {
              key: 1,
              icon: "circle-xmark",
              onClick: r[0] || (r[0] = (u) => t("close")),
              size: w(Q).large
            }, null, 8, ["size"])) : L("", !0)
          ], 2)) : L("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Ln = ["title", "disabled"], Wn = ["title", "disabled"], In = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = T("Language"), l = y(() => z(a.usenext ? "Pagination.Previous" : "Pagination.Older", n)), o = y(() => z(a.usenext ? "Pagination.Next" : "Pagination.Newer", n)), r = y(() => a.buttonType ? `has-background-${a.buttonType}` : ""), u = y(() => a.hasprevious ?? !0), d = y(() => a.hasmore ?? !0), _ = function() {
      u || t("moveBack");
    }, F = function() {
      d || t("moveForward");
    };
    return (S, v) => R((c(), b("nav", {
      class: V(["pagination", r.value]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: V(["pagination-previous", r.value]),
        title: l.value,
        onClick: _,
        disabled: u.value
      }, [
        I(K, {
          type: "backward",
          size: w(Q).small
        }, null, 8, ["size"]),
        ee(" " + E(l.value), 1)
      ], 10, Ln),
      g("a", {
        class: V(["pagination-next", r.value]),
        title: o.value,
        onClick: F,
        disabled: d.value
      }, [
        ee(E(o.value) + " ", 1),
        I(K, {
          type: "forward",
          size: w(Q).small
        }, null, 8, ["size"])
      ], 10, Wn)
    ], 2)), [
      [le, a.hasmore || a.hasprevious]
    ]);
  }
});
function ye(e) {
  return typeof e == "function" ? e() : w(e);
}
function zn(e, s = 200) {
  const a = B(!1), t = B(!1), n = y(() => !a.value && !t.value), l = B(!1), o = B(), r = B();
  let u;
  return U(
    () => ye(e),
    (d) => {
      if (a.value = !1, t.value = !1, o.value = null, !d) {
        r.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const _ = Number(ye(s)) || 0;
      _ > 0 ? (l.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        l.value = !0;
      }, _)) : l.value = !0, d.then((F) => {
        d === ye(e) && (r.value = F, t.value = !0);
      }).catch((F) => {
        d === ye(e) && (o.value = F, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: n, isRejected: a, isResolved: t, isDelayElapsed: l, error: o, data: r };
}
const An = /* @__PURE__ */ M({
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
  setup(e, { slots: s }) {
    const a = Us(e), t = Ye(
      zn(a.promise, a.pendingDelay)
    );
    return () => {
      if ("combined" in s)
        return s.combined(t);
      const [n, l] = t.isRejected ? ["rejected", t.error] : t.isPending ? t.isDelayElapsed ? ["pending", t.data] : [null] : ["default", t.data];
      return n && !s[n] ? (Rs(
        `(vue-promised) Missing slot "${n}" in Promised component. Pass an empty "${n}" slot or use the "combined" slot to remove this warning. This will fail in production.`
      ), null) : n && s[n](l);
    };
  }
}), Fe = An, Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: lt,
  Button: X,
  ButtonAdd: un,
  ButtonCancel: ys,
  ButtonDelete: dn,
  ButtonDisable: cn,
  ButtonDownload: hn,
  ButtonEdit: bn,
  ButtonEnable: pn,
  ButtonOkay: _s,
  ButtonPrint: fn,
  ButtonRefresh: ks,
  ButtonSave: vn,
  ButtonUpload: mn,
  Chart: kn,
  CheckMark: $n,
  DynamicSlot: Sn,
  Filter: Fn,
  Icon: K,
  Message: Jn,
  Notification: xe,
  PageNotification: Pn,
  Pagination: In,
  Promised: Fe
}, Symbol.toStringTag, { value: "Module" })), Rn = /* @__PURE__ */ M({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: s }) {
    const a = s, t = e, n = B(!1), l = B(!1), o = B(null), r = y(() => (t.disabled ?? !1) || l.value && t.handlesearch !== null), u = y(() => {
      let F = [];
      return r || F.push("has-cursor"), n.value ? F.push("is-move") : F.push("is-grab"), F;
    }), d = (F) => r.value ? (F.preventDefault(), !1) : (F.stopPropagation(), F.dataTransfer.setData("value", JSON.stringify(t.CopyData)), n.value = !0, a("started"), !0), _ = () => {
      n.value = !1, l.value = !0, a("stopped");
    };
    return re(() => {
      if (t.handlesearch) {
        let F = $(o.value).find(t.handlesearch);
        F.length > 0 && (l.value = !0, F.on("mousedown", () => l.value = !1), F.on("mouseup", () => l.value = !0));
      }
    }), (F, S) => (c(), P(ce(t.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: d,
      onDragend: _,
      class: V(u.value)
    }, {
      default: H(() => [
        W(F.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), jn = /* @__PURE__ */ M({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = B(!1), l = B(null), o = B(null);
    y(() => a.tag ?? "div");
    const r = (S) => {
      const v = o.value.getBoundingClientRect(), i = {
        x: v.x + v.width / 2,
        y: v.y + v.height / 2
      };
      let h = Z.center;
      return S.x < i.x ? S.y < i.y ? h = Z.topLeft : h = Z.bottomLeft : S.y < i.y ? h = Z.topRight : h = Z.bottomRight, l.value = h, l.value;
    }, u = (S) => {
      S.preventDefault(), n.value = !0, t("itemEntered", r(S));
    }, d = (S) => {
      n.value = !0, t("itemExited", r(S));
    }, _ = (S) => {
      S.preventDefault(), t("itemMoved", r(S));
    }, F = (S) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(S.dataTransfer.getData("value"))))
        return !1;
      S.stopPropagation(), S.preventDefault(), t("itemAdded", JSON.parse(S.dataTransfer.getData("value")), l.value), n.value = !1;
    };
    return (S, v) => (c(), P(ce(a.tag), {
      ref_key: "handle",
      ref: o,
      class: V({ "is-bordered": n.value }),
      onDragenter: u,
      onDragleave: d,
      onDrop: F,
      onDragover: _
    }, {
      default: H(() => [
        W(S.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Ss = /* @__PURE__ */ M({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const s = e, a = y(() => {
      var t = ["block-list", "has-radius", `is-${s.type ?? "primary"}`];
      return s.compact && t.push("is-small"), s.outlined && t.push("is-outlined"), s.highlighted && t.push("is-highlighted"), t;
    });
    return (t, n) => (c(), P(ce(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: V(a.value)
    }, {
      default: H(() => [
        W(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Se = /* @__PURE__ */ M({
  __name: "list-item",
  props: {
    type: {},
    outlined: { type: Boolean },
    highlighted: { type: Boolean },
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = y(() => {
      var l = [];
      return a.type && l.push("is-" + a.type), a.outlined && l.push("is-outlined"), a.highlighted && l.push("is-highlighted"), a.icon && l.push("has-icon"), l;
    });
    return (l, o) => (c(), b("li", {
      class: V(n.value)
    }, [
      a.icon ? (c(), b("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: o[0] || (o[0] = (r) => t("click"))
      }, [
        I(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : L("", !0),
      W(l.$slots, "default")
    ], 2));
  }
}), Tn = /* @__PURE__ */ M({
  __name: "sortable",
  props: {
    Items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = B([]), l = B(-1), o = B(-1), r = B(null);
    U(a.Items, (S, v) => {
      n.value = [...v];
    }), re(() => {
      a.Items !== null && (n.value = [...a.Items]);
    });
    const u = (S) => {
      var v = S.target.getBoundingClientRect(), i = {
        x: v.x + v.width / 2,
        y: v.y + v.height / 2
      };
      let h = Z.center;
      return S.y < i.y ? h = Z.top : h = Z.bottom, h;
    }, d = (S, v) => {
      v.stopPropagation(), l.value = S, v.dataTransfer.setData("value", null);
    }, _ = (S, v) => {
      l.value && (v.stopPropagation(), S != l.value ? (o.value = S, r.value = u(v)) : (o.value = -1, r.value = null));
    }, F = (S) => {
      if (l.value) {
        S.stopPropagation();
        var v = o.value + (r.value == Z.top ? 0 : 1), i = n.value.splice(v, 1)[0];
        v >= l.value && v--, n.value.splice(v, 0, i), o.value = -1, r.value = null, l.value = -1, t("sorted", n.value);
      }
    };
    return (S, v) => (c(), P(Ss, {
      type: S.type,
      compact: S.compact,
      outlined: S.outlined,
      highlighted: S.highlighted,
      onDrop: F
    }, {
      default: H(() => [
        (c(!0), b(Y, null, C(n.value, (i, h) => (c(), b(Y, null, [
          R(I(Se, null, {
            default: H(() => [
              I(xe, { light: !0 }, {
                default: H(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, o.value === h && l.value !== h && r.value === w(Z).top]
          ]),
          I(Se, {
            draggable: "true",
            onDragstart: (k) => d(h, k),
            onDragend: v[0] || (v[0] = (k) => l.value = null),
            onDragover: (k) => _(h, k),
            class: V({ "has-cursor": !0, "is-move": o.value == h, "is-grab": o.value != h })
          }, {
            default: H(() => [
              W(S.$slots, "item", {
                item: i,
                index: h
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          R(I(Se, null, {
            default: H(() => [
              I(xe, { light: !0 }, {
                default: H(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, o.value === h && l.value !== h && r.value === w(Z).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Rn,
  DropZone: jn,
  Sortable: Tn
}, Symbol.toStringTag, { value: "Module" })), se = (e) => {
  const s = T("Translate");
  return y(() => e.Translate ?? s ?? function(t) {
    return t;
  });
}, Yn = () => defineEmits(), te = () => defineEmits(), We = () => defineEmits();
function Ie() {
  const e = B([]), s = B([]);
  return { hiddenValues: e, disabledValues: s, hideValue: (o) => {
    e.value.some((r) => r === o) || e.value.push(o);
  }, showValue: (o) => {
    e.value = e.value.filter((r) => r !== o);
  }, disableValue: (o) => {
    s.value.some((r) => o === r) || s.value.push(o);
  }, enableValue: (o) => {
    s.value = s.value.filter((r) => r !== o);
  } };
}
const qn = (e) => {
  let s = [], a = [], t = 0;
  return e.forEach((n) => {
    let l = n.form_columns ?? 12;
    t + l > 12 && (s.push(a), a = [], t = 0), a.push(n), t += l, t === 12 && (s.push(a), a = [], t = 0);
  }), a.length > 0 && s.push(a), s;
}, Kn = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Cn = { class: "control" }, Gn = { class: "tags has-addons" }, Xn = { class: "tag is-link" }, Qn = ["onClick"], Zn = { key: 0 }, eo = ["placeholder"], to = { class: "dropdown-menu" }, ao = { class: "dropdown-content" }, lo = ["onClick"], so = {
  key: 1,
  class: "dropdown-item"
}, Ms = /* @__PURE__ */ M({
  __name: "autocomplete",
  props: {
    title: {},
    limit: {},
    callbackurl: {},
    values: {},
    fetch: { type: Function },
    Translate: { type: Function },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = te(), t = e, n = se(t), l = B([]), o = B(null), r = B(null), u = B(null), d = B(null);
    U(o, async (f) => {
      if (f != null) {
        if (f.length >= 2)
          if (t.values != null && t.values != null) {
            let J = [];
            for (let D = 0; D < t.values.length && ((t.values[D].name.toUpperCase().indexOf(f.toUpperCase()) >= 0 || t.values[D].id.toUpperCase().indexOf(f.toUpperCase()) >= 0) && J.push(t.values[D]), J.length != 10); D++)
              ;
            r.value = J;
          } else {
            let D = await (await (t.fetch ?? fetch)(`${t.callbackurl}?q=${encodeURIComponent(f)}`)).json();
            D.length > 10 && D.splice(10, D.length - 10), r.value = D;
          }
      } else
        r.value = null, $(d.value).empty();
    });
    const _ = () => {
      if (l.value.length == 0)
        return null;
      const f = l.value.slice();
      return t.limit != null && t.limit == 1 ? f.length > 0 ? f[0] : null : f;
    }, F = async (f) => {
      if (f == null)
        l.value.length > 0 && l.value.splice(0, l.value.length), o.value = null;
      else {
        const J = await Promise.all(
          (Array.isArray(f) ? f : [f]).map(async (D) => {
            if (D.id !== void 0 && D.name !== void 0)
              return D;
            {
              let p = await (await (t.fetch ?? fetch)(`${t.callbackurl}?${D.id === void 0 ? "q=" + encodeURIComponent(D) : "id=" + encodeURIComponent(D.id)}`)).json();
              return p.length > 0 ? (t.disabled && (p[0].readonly = !0), p[0]) : null;
            }
          })
        );
        l.value = J.filter((D) => D !== null), a("value_changed", { name: t.name, value: _() });
      }
    }, S = (f) => {
      f.preventDefault(), o.value = f.clipboardData.getData("text/plain");
    }, v = (f) => {
      switch (f.key) {
        case "Backspace":
          o.value != null && o.value.length > 0 && (o.value = o.value.substring(0, o.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          f.key.length == 1 && (o.value = (o.value == null ? "" : o.value) + f.key);
          break;
      }
    }, i = () => {
      o.value = null;
    }, h = () => {
      d.value.focus();
    }, k = (f) => {
      l.value.push(f), i(), a("value_changed", { name: t.name, value: _() });
    }, x = (f) => {
      l.value.splice(f, 1), h(), a("value_changed", { name: t.name, value: _() });
    };
    return s({ getValue: _, setValue: F }), (f, J) => (c(), b("div", {
      class: "control autocomplete",
      onBlur: i,
      onClick: h
    }, [
      g("div", Kn, [
        (c(!0), b(Y, null, C(l.value, (D, N) => (c(), b("div", Cn, [
          g("div", Gn, [
            g("a", Xn, E(w(n)(D.name)), 1),
            D.readonly ? L("", !0) : (c(), b("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (p) => x(N)
            }, null, 8, Qn))
          ])
        ]))), 256)),
        t.disabled ? L("", !0) : (c(), b("div", Zn, [
          R(g("span", {
            ref_key: "contentSpan",
            ref: d,
            placeholder: w(n)(t.title),
            contenteditable: "",
            class: V(u.value),
            onFocus: J[0] || (J[0] = (D) => {
              u.value = "is-focused";
            }),
            onBlur: J[1] || (J[1] = (D) => {
              u.value = null;
            }),
            onKeydown: v,
            onPaste: S
          }, null, 42, eo), [
            [le, l.value.length < t.limit || t.limit == null]
          ])
        ]))
      ]),
      g("div", {
        class: V(["dropdown", { "is-active": r.value != null && o.value != null && o.value != "" }])
      }, [
        g("div", to, [
          g("div", ao, [
            r.value != null && r.value.length > 0 ? (c(!0), b(Y, { key: 0 }, C(r.value, (D) => (c(), b("a", {
              class: "dropdown-item",
              onClick: (N) => k(D)
            }, E(w(n)(D.name)), 9, lo))), 256)) : (c(), b("a", so, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Je = /* @__PURE__ */ M({
  __name: "button",
  props: {
    label: {},
    sstyle: {},
    icon: {},
    Translate: { type: Function },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const s = e, a = Yn(), t = se(s);
    return (n, l) => (c(), P(X, {
      type: n.sstyle,
      icon: s.icon ? s.icon : null,
      title: w(t)(s.label),
      onClick: l[0] || (l[0] = (o) => w(a)("button_clicked", s.name)),
      disabled: s.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), no = { class: "checkbox is-block" }, oo = ["value", "disabled"], Ds = /* @__PURE__ */ M({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    Translate: { type: Function },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = se(a), l = B([]), o = B(!1), r = y(async () => {
      if (a.values == null)
        return [];
      {
        let k = null, x = a.values;
        a.values instanceof Function && (x = a.values()), x instanceof Promise ? k = x : k = Promise.resolve(x);
        let f = await k, J = f.filter((D) => D.selected).map((D) => D.value);
        return l.value === null || l.value.length == 0 ? l.value = J.length > 0 ? [...J] : [] : (J = l.value, f = f.map((D) => ({
          label: D.label,
          value: D.value,
          selected: J.some((N) => N === D.value)
        }))), f;
      }
    });
    U(l, (k) => {
      t("value_changed", { name: a.name, value: u() });
    });
    const u = () => l.value.length == 0 ? null : l.value, d = (k) => {
      o.value = !0, l.value.splice(0), k !== null && (l.value = [...k]), o.value = !1, t("value_changed", { name: a.name, value: u() });
    }, { hiddenValues: _, disabledValues: F, hideValue: S, showValue: v, disableValue: i, enableValue: h } = Ie();
    return s({ getValue: u, setValue: d, hideValue: S, showValue: v, disableValue: i, enableValue: h }), (k, x) => (c(), b("div", null, [
      I(w(Fe), { promise: r.value }, {
        default: H((f) => [
          (c(!0), b(Y, null, C(f, (J) => R((c(), b("label", no, [
            R(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: J.value,
              "onUpdate:modelValue": x[0] || (x[0] = (D) => l.value = D),
              disabled: a.disabled || w(F).some((D) => D === J.value)
            }, null, 8, oo), [
              [Ee, l.value]
            ]),
            ee(" " + E(w(n)(J.label)), 1)
          ], 512)), [
            [le, !w(_).some((D) => D === J.value)]
          ])), 256))
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), ro = { class: "checkbox" }, uo = ["name", "disabled"], io = {
  key: 0,
  class: "help is-danger"
}, ws = /* @__PURE__ */ M({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    Translate: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = se(a), l = y(() => n.value(a.label)), o = B(!1);
    return U(o, (d) => t("value_changed", { name: a.name, value: d })), s({ getValue: () => o.value, setValue: (d) => {
      o.value = d;
    } }), (d, _) => (c(), b("label", ro, [
      R(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": _[0] || (_[0] = (F) => o.value = F)
      }, null, 8, uo), [
        [Ee, o.value]
      ]),
      ee(" " + E(l.value) + " ", 1),
      a.required ? (c(), b("span", io, "*")) : L("", !0)
    ]));
  }
}), Be = (e, s) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + s), a;
}, j = (e, s, a) => {
  let t = e;
  for (; t.length < a; )
    t = s + t;
  return t;
}, _e = (e, s, a) => {
  let t = "";
  switch (e) {
    case "d":
    case "dd":
      t += `${j(a.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let l = "";
      switch (a.getDay()) {
        case 0:
          l = "Sunday";
          break;
        case 1:
          l = "Monday";
          break;
        case 2:
          l = "Tuesday";
          break;
        case 3:
          l = "Wednesday";
          break;
        case 4:
          l = "Thursday";
          break;
        case 5:
          l = "Friday";
          break;
        case 6:
          l = "Saturday";
          break;
      }
      t += `${z("Date.Weekdays." + (e.length > 3 ? l : l.substring(0, 3)), s)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      t += `${j(a.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      t += `${a.getMilliseconds() == 0 ? "" : j(a.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      t += "A.D.";
      break;
    case "h":
    case "hh":
      t += `${j((a.getHours() > 12 ? a.getHours() - 12 : a.getHours() == 0 ? 12 : a.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      t += `${j(a.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let o = a.getTimezoneOffset() * -1, r = parseInt((o / 60).toFixed(0)), u = o - Math.abs(r) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${r < 0 ? "-" : "+"}${j(Math.abs(r).toString(), "0", 2) + ":" + j(Math.abs(u).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          t += `${r < 0 ? "-" : "+"}${j(Math.abs(r).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      t += `${j(a.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      t += `${j((a.getMonth() + 1).toString(), "0", e.length)}`;
      break;
    case "MMM":
    case "MMMM":
      let d = "";
      switch (a.getMonth()) {
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
      t += `${z("Date.Months." + (e.length > 3 ? d : d.substring(0, 3)), s)}`;
      break;
    case "s":
    case "ss":
      t += `${j(a.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      a.getHours() >= 12 ? t += `${e.length == 1 ? "P" : "PM"}` : t += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var n = a.getFullYear().toString(); n.length > 2; )
        n = n.substring(1);
      t += `${j(n.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      t += `${j(a.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      t += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return t;
}, ie = (e, s, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", n = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        n != "" && (t += _e(n, s, e), n = ""), t += a.charAt(l + 1), l++;
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
        n != "" && n.charAt(0) != a.charAt(l) ? (t += _e(n, s, e), n = "") : n += a.charAt(l);
        break;
      default:
        n != "" && (t += _e(n, s, e), n = ""), t += a.charAt(l);
        break;
    }
  return n != "" && (t += _e(n, s, e), n = ""), t;
}, co = { class: "control" }, ho = ["name", "id", "disabled"], je = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), ze = /* @__PURE__ */ M({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = B(null), l = y(() => {
      if (n.value == null || n.value == "")
        return null;
      var u = Number(n.value.substring(3, 5)), d = Number(n.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * d / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return U(n, (u) => {
      t("value_changed", { name: a.name, value: u });
    }), s({ getValue: () => n.value, setValue: (u) => {
      if (u != null && je.test(u)) {
        var d = je.exec(u);
        u = (d[3] == "AM" ? d[1] : (parseInt(d[1]) + 12).toFixed(0)) + ":" + d[2] + ":00";
      }
      n.value = u;
    } }), (u, d) => (c(), b("div", co, [
      R(g("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": d[0] || (d[0] = (_) => n.value = _),
        disabled: a.disabled,
        style: He(l.value)
      }, null, 12, ho), [
        [he, n.value]
      ])
    ]));
  }
});
const bo = { class: "control has-icons-left has-icons-right" }, po = ["name", "id", "placeholder", "disabled"], fo = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), vo = { class: "modal-content" }, mo = { class: "panel is-primary is-dateselect" }, go = { class: "panel-heading" }, yo = { class: "columns card-header-title" }, _o = { class: "column" }, ko = { class: "column has-text-centered" }, $o = { class: "column has-text-right" }, So = { class: "panel-block" }, Mo = { class: "table is-striped has-text-centered" }, Do = ["onClick"], wo = { key: 0 }, Fo = {
  colspan: "100%",
  class: "has-text-centered"
}, Oo = { class: "panel-block" }, be = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Fs = /* @__PURE__ */ M({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: s }) {
    const a = B(null), t = e, n = te(), l = B(!1), o = B(null), r = B(null), u = Ye({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), d = T("Language", "en"), _ = qe({
      Sun: y(() => z("Date.Weekdays.Sun", d)),
      Mon: y(() => z("Date.Weekdays.Mon", d)),
      Tue: y(() => z("Date.Weekdays.Tue", d)),
      Wed: y(() => z("Date.Weekdays.Wed", d)),
      Thu: y(() => z("Date.Weekdays.Thu", d)),
      Fri: y(() => z("Date.Weekdays.Fri", d)),
      Sat: y(() => z("Date.Weekdays.Sat", d))
    }), F = y(() => o.value !== null && (t.includeTime ? ke : be).test(o.value)), S = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!ke.test(o.value) && t.includeTime)
          return null;
        if (!t.includeTime && !be.test(o.value))
          return null;
        if (be.test(o.value) && t.includeTime)
          return null;
        let p = t.includeTime ? ke.exec(o.value) : be.exec(o.value);
        return new Date(
          parseInt(p[3]),
          parseInt(p[2]) - 1,
          parseInt(p[1]),
          t.includeTime ? parseInt(p[4]) : 0,
          t.includeTime ? parseInt(p[5]) : 0,
          0,
          0
        );
      }
    };
    U(o, (p) => {
      if (p == null)
        n("value_changed", { name: t.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!be.test(p) && !ke.test(p)) {
        p = p.replaceAll(/[^0-9]/g, "");
        for (var O = [], A = 0; A < p.length; A += 2)
          A == 4 ? (O.push(p.substring(A, Math.min(p.length - A, 4) + A)), A += 2) : O.push(p.substring(A, Math.min(p.length - A, 2) + A));
        O.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(O[0]) || O.splice(0), O.length > 1 && (/^[0-3]/.test(O[1]) ? /^(01|03|05|07|08|10|12)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(O[1]) || O.splice(1) : /^(02|04|06|09|11)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(O[1]) || O.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(O[1]) || O.splice(1) : O.splice(1)), O.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(O[3]) || O.splice(3)), O.length > 4 && (/^[0-5][0-9]?$/.test(O[4]) || O.splice(4))), p = O.join(""), !t.includeTime && p.length > 8 && (p = p.substring(0, 8)), p.length >= 2 && (p = p.substring(0, 2) + "-" + (p.length > 2 ? p.substring(2) : "")), p.length >= 5 && (p = p.substring(0, 5) + "-" + (p.length > 5 ? p.substring(5) : "")), p.length >= 9 && t.includeTime && (p = p.substring(0, 9) + " " + (p.length > 9 ? p.substring(9) : "")), p.length >= 11 && (p = p.substring(0, 11) + ":" + (p.length > 11 ? p.substring(11) : "")), o.value = p;
      } else {
        var ae = S();
        F && n("value_changed", { name: t.name, value: ae }), u.Month = ae.getMonth(), u.Year = ae.getFullYear();
      }
    });
    const v = y(() => ie(new Date(u.Year, u.Month, 1), d, "MMMM")), i = y(() => {
      var p = [], O = new Date(u.Year, u.Month, 1);
      O = Be(O, O.getDay() * -1);
      for (var A = S(), ae = Be(new Date(u.Year, u.Month, 1), 32).getMonth(); O.getMonth() != ae; ) {
        for (var me = [], Oe = 0; Oe < 7; Oe++)
          me.push({
            Number: O.getDate(),
            Disabled: O.getMonth() != u.Month,
            isToday: ie(O, d, "yyyy-MM-dd") == ie(/* @__PURE__ */ new Date(), d, "yyyy-MM-dd"),
            isSelected: A != null && ie(O, d, "yyyy-MM-dd") == ie(A, d, "yyyy-MM-dd")
          }), O = Be(O, 1);
        p.push(me);
      }
      return p;
    });
    s({ getValue: S, setValue: function(p) {
      p == null ? o.value = null : o.value = ie(p, d, "dd-MM-yyyy" + (t.includeTime ? " HH:mm" : ""));
    } });
    const k = (p) => {
      p.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + p.value : o.value = `${j((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year} ${p.value}`;
    }, x = (p) => {
      if (!p.Disabled && !p.isSelected)
        if (o.value === null)
          o.value = `${j(p.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (t.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var O = o.value.split(" ");
          O[0] = `${j(p.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}`, o.value = `${O[0]}${O.length > 1 ? " " + O[1] : ""}`;
        }
    }, f = () => {
      o.value = r.value, l.value = !1;
    }, J = () => {
      t.disabled || (r.value = o.value, l.value = !0);
    }, D = () => {
      t.disabled || (o.value = null);
    }, N = (p) => {
      u.Month + p == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + p == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += p;
    };
    return (p, O) => (c(), b("div", null, [
      g("div", bo, [
        R(g("input", {
          class: "input is-expanded",
          name: t.name,
          id: t.name,
          type: "text",
          "onUpdate:modelValue": O[0] || (O[0] = (A) => o.value = A),
          placeholder: "DD-MM-YYYY" + (t.includeTime ? " HH:mm" : ""),
          disabled: t.disabled
        }, null, 8, po), [
          [he, o.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: J
        }, [
          I(w(K), { icon: "calendar-alt" })
        ]),
        g("span", {
          class: "icon is-small is-right is-clickable",
          onClick: D
        }, [
          I(w(K), { icon: "window-close" })
        ])
      ]),
      g("div", {
        class: V(["modal", { "is-active": l.value }])
      }, [
        fo,
        g("div", vo, [
          g("div", mo, [
            g("div", go, [
              g("div", yo, [
                g("div", _o, [
                  I(w(K), {
                    icon: "arrow-circle-left",
                    onClick: O[1] || (O[1] = (A) => N(-1))
                  })
                ]),
                g("div", ko, E(v.value) + " " + E(u.Year), 1),
                g("div", $o, [
                  I(w(K), {
                    icon: "arrow-circle-right",
                    onClick: O[2] || (O[2] = (A) => N(1))
                  })
                ])
              ])
            ]),
            g("div", So, [
              g("table", Mo, [
                g("thead", null, [
                  g("tr", null, [
                    g("th", null, E(w(_).Sun), 1),
                    g("th", null, E(w(_).Mon), 1),
                    g("th", null, E(w(_).Tue), 1),
                    g("th", null, E(w(_).Wed), 1),
                    g("th", null, E(w(_).Thu), 1),
                    g("th", null, E(w(_).Fri), 1),
                    g("th", null, E(w(_).Sat), 1)
                  ])
                ]),
                g("tbody", null, [
                  (c(!0), b(Y, null, C(i.value, (A) => (c(), b("tr", null, [
                    (c(!0), b(Y, null, C(A, (ae) => (c(), b("td", {
                      class: V(["is-unselectable", ae.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", ae.isToday ? "has-background-primary-dark" : "", ae.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (me) => x(ae)
                    }, E(ae.Number), 11, Do))), 256))
                  ]))), 256))
                ]),
                t.includeTime ? (c(), b("tfoot", wo, [
                  g("tr", null, [
                    g("td", Fo, [
                      I(ze, {
                        ref_key: "time",
                        ref: a,
                        onValue_changed: k
                      }, null, 512)
                    ])
                  ])
                ])) : L("", !0)
              ])
            ]),
            g("div", Oo, [
              I(w(_s), {
                addonclass: "card-footer-item",
                disabled: !F.value,
                onClick: O[3] || (O[3] = (A) => l.value = !1)
              }, null, 8, ["disabled"]),
              I(w(ys), {
                addonclass: "card-footer-item",
                onClick: f
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
});
ve(["https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.css"]);
const Os = /* @__PURE__ */ M({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  async setup(e, { expose: s }) {
    let a, t;
    [a, t] = js(() => import("summernote")), await a, t();
    const n = B(null), l = e, o = te();
    return U([l.disabled], (d) => {
      n.value != null && $(n.value).summernote(d ? "disable" : "enable");
    }), s({ getValue: () => $(n.value).summernote("code"), setValue: (d) => {
      $(n.value).summernote("code", d);
    } }), re(() => {
      $(n.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(d) {
            o("value_changed", { name: l.name, value: d });
          }
        }
      }), (l.disabled ?? !1) && $(n.value).summernote("disable");
    }), Ts(() => {
      $(n.value).summernote("destroy");
    }), (d, _) => (c(), b("div", {
      class: "summernote",
      ref_key: "snote",
      ref: n
    }, null, 512));
  }
}), Ne = /* @__PURE__ */ M({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const s = e, a = se(s);
    return (t, n) => (c(), P(ce(s.subtype), null, {
      default: H(() => [
        ee(E(w(a)(s.label)), 1)
      ]),
      _: 1
    }));
  }
}), Bo = ["name"], Bs = /* @__PURE__ */ M({
  __name: "hidden",
  props: {
    name: {}
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = B(null);
    return U(n, (r) => t("value_changed", { name: a.name, value: r })), s({ getValue: () => n.value, setValue: (r) => {
      n.value = r;
    } }), (r, u) => R((c(), b("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d)
    }, null, 8, Bo)), [
      [he, n.value]
    ]);
  }
}), xo = ["name", "disabled", "min", "max", "step"], xs = /* @__PURE__ */ M({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = B(null), l = () => {
      if (n.value === "")
        return null;
      let r = parseInt(n.value);
      return a.min !== void 0 && r < a.min * 1 || a.max !== void 0 && r > a.max * 1 ? null : r;
    }, o = (r) => {
      n.value = r === null ? "" : r.toString();
    };
    return U([n], (r) => t("value_changed", { name: a.name, value: l() })), s({ getValue: l, setValue: o }), (r, u) => R((c(), b("input", {
      type: "number",
      class: "input",
      name: r.name,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      disabled: r.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, xo)), [
      [he, n.value]
    ]);
  }
}), Jo = ["id"], Ve = /* @__PURE__ */ M({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: { type: Function }
  },
  setup(e) {
    const s = e, a = se(s);
    return (t, n) => (c(), b("p", {
      id: s.name
    }, E(w(a)(s.label)), 9, Jo));
  }
}), No = { class: "radio" }, Vo = ["name", "value", "disabled"], Eo = /* @__PURE__ */ g("br", null, null, -1), Js = /* @__PURE__ */ M({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    Translate: { type: Function },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = se(a), l = B(null), o = function() {
      return l.value;
    };
    U(l, (h) => {
      t("value_changed", { name: a.name, value: o() });
    });
    const r = y(async () => {
      if (a.values == null)
        return [];
      {
        let h = null, k = a.values;
        a.values instanceof Function && (k = a.values()), k instanceof Promise ? h = k : h = Promise.resolve(k);
        let x = await h;
        return l.value === null && x.some((f) => f.selected) && (l.value = x.find((f) => f.selected).value), x.map((f) => ({
          label: f.label,
          value: f.value,
          selected: l.value === f.value
        }));
      }
    }), u = (h) => {
      l.value = h;
    }, { hiddenValues: d, disabledValues: _, hideValue: F, showValue: S, disableValue: v, enableValue: i } = Ie();
    return s({ getValue: o, setValue: u, hideValue: F, showValue: S, disableValue: v, enableValue: i }), (h, k) => (c(), b("div", null, [
      I(w(Fe), { promise: r.value }, {
        resolved: H((x) => [
          x != null ? (c(!0), b(Y, { key: 0 }, C(x, (f) => (c(), b(Y, null, [
            R(g("label", No, [
              g("input", {
                type: "radio",
                name: a.name,
                value: f.value,
                class: "radio",
                disabled: a.disabled || w(_).some((J) => J === f.value)
              }, null, 8, Vo),
              ee(" " + E(w(n)(f.label)), 1)
            ], 512), [
              [le, !w(d).some((J) => J === f.value)]
            ]),
            Eo
          ], 64))), 256)) : L("", !0)
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Po = { class: "select" }, Lo = ["id", "name", "multiple", "disabled"], Wo = ["value", "selected", "disabled"], Io = ["label"], zo = ["value", "selected", "disabled"], Ns = (e, s, a) => {
  let t = {
    label: e === null ? s.label : `${e}->${s.label}`,
    values: []
  }, n = a.length;
  return a.push(t), s.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = Ns(t.label, l, a);
  }), a[n].values.length == 0 && a.splice(n, 1), a;
}, Vs = /* @__PURE__ */ M({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    Translate: {},
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = se(a), l = B(null), o = B(!1), r = y(async () => {
      if (a.values == null)
        return [];
      {
        let k = null, x = a.values;
        a.values instanceof Function && (x = a.values()), x instanceof Promise ? k = x : k = Promise.resolve(x);
        let f = await k, J = f.filter((N) => N.selected).map((N) => N.value);
        f.some((N) => N.values !== void 0) && f.filter((N) => N.values !== void 0).forEach((N) => {
          J = J.concat(
            N.values.filter((p) => p.selected).map((p) => p.value)
          );
        }), l.value === null || l.value.length === 0 ? l.value = x.length === 0 ? null : x : (f = f.map((N) => {
          let p = N;
          return p.values !== void 0 && (p.values = p.values.map((O) => (O.selected = l.value.some((A) => A === O.value), O))), p;
        }), l.value.forEach((N) => {
          f.some((p) => p.value !== void 0 && p.value === N || p.values !== void 0 && p.values.some((O) => O.value === N)) || f.push({
            label: N,
            value: N
          });
        }));
        let D = [];
        return f.forEach((N) => {
          N.values === void 0 ? D.push(N) : D = Ns(N.label, N, D);
        }), D;
      }
    }), u = () => l.value == null || l.value.length == 0 ? null : a.multiple ? l.value.slice() : Array.isArray(l.value) ? l.value[0] : l.value;
    U(l, () => {
      o.value || t("value_changed", { name: a.name, value: u() });
    }), U(o, (k) => {
      k || t("value_changed", { name: a.name, value: u() });
    });
    const d = (k) => {
      o.value = !0, k != null ? a.multiple ? l.value = Array.isArray(k) ? k : [k] : l.value = k : a.multiple ? l.value = [] : l.value = null, o.value = !1;
    }, { hiddenValues: _, disabledValues: F, hideValue: S, showValue: v, disableValue: i, enableValue: h } = Ie();
    return s({ getValue: u, setValue: d, hideValue: S, showValue: v, disableValue: i, enableValue: h }), (k, x) => (c(), b("div", Po, [
      R(g("select", {
        id: a.name,
        name: a.name,
        multiple: a.multiple,
        class: V([a.multiple ? "is-multiple" : ""]),
        "onUpdate:modelValue": x[0] || (x[0] = (f) => l.value = f),
        disabled: a.disabled
      }, [
        r.value != null ? (c(), P(w(Fe), {
          key: 0,
          promise: r.value
        }, {
          resolved: H(({ value: f }) => [
            f != null ? (c(!0), b(Y, { key: 0 }, C(f, (J) => (c(), b(Y, null, [
              J.values == null ? R((c(), b("option", {
                key: 0,
                value: J.value,
                selected: J.selected,
                disabled: w(F).some((D) => D === J.value)
              }, E(k.Translate(J.label)), 9, Wo)), [
                [le, !w(_).some((D) => D === J.value)]
              ]) : L("", !0),
              J.values != null ? (c(), b("optgroup", {
                key: 1,
                label: w(n)(J.label)
              }, [
                (c(!0), b(Y, null, C(J.values, (D) => R((c(), b("option", {
                  value: D.value,
                  selected: D.selected,
                  disabled: w(F).some((N) => N === N.value)
                }, E(w(n)(D.label)), 9, zo)), [
                  [le, !w(_).some((N) => N === N.value)]
                ])), 256))
              ], 8, Io)) : L("", !0)
            ], 64))), 256)) : L("", !0)
          ]),
          _: 1
        }, 8, ["promise"])) : L("", !0)
      ], 10, Lo), [
        [Hs, l.value]
      ])
    ]));
  }
}), Ao = { class: "field" }, Uo = ["id", "name", "disabled"], Ro = ["for"], jo = {
  key: 0,
  class: "help is-danger"
}, Es = /* @__PURE__ */ M({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    Translate: { type: Function },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = se(a), l = B(!1);
    return U(l, (u) => t("value_changed", { name: a.name, value: u })), s({ getValue: () => l.value, setValue: (u) => {
      l.value = u;
    } }), (u, d) => (c(), b("div", Ao, [
      R(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": d[0] || (d[0] = (_) => l.value = _),
        disabled: a.disabled
      }, null, 8, Uo), [
        [Ee, l.value]
      ]),
      g("label", { for: u.name }, [
        ee(E(w(n)(a.label)) + " ", 1),
        a.required ? (c(), b("span", jo, "*")) : L("", !0)
      ], 8, Ro)
    ]));
  }
}), To = ["type", "name", "disabled", "maxlength"], Ps = /* @__PURE__ */ M({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = B(null);
    return U(n, (r) => t("value_changed", { name: a.name, value: r })), s({ getValue: () => n.value, setValue: (r) => {
      n.value = r;
    } }), (r, u) => R((c(), b("input", {
      type: r.subtype,
      class: "input",
      name: r.name,
      disabled: r.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d)
    }, null, 8, To)), [
      [Ys, n.value]
    ]);
  }
}), Ho = ["name", "rows", "cols", "maxlength", "disabled"], Ls = 9, de = String.fromCharCode(Ls), $e = String.fromCharCode(10), Ws = /* @__PURE__ */ M({
  __name: "textarea",
  props: {
    maxlength: {},
    rows: {},
    cols: {},
    supportsTab: { type: Boolean },
    name: {},
    disabled: { type: Boolean }
  },
  setup(e, { expose: s }) {
    const a = e, t = te(), n = B(null);
    U(n, (u) => {
      t("value_changed", { name: a.name, value: u });
    });
    const l = () => n.value, o = (u) => {
      n.value = u;
    };
    s({ getValue: l, setValue: o });
    const r = (u) => {
      if (a.supportsTab) {
        let d = l();
        switch (u.keyCode) {
          case Ls:
            let _ = u.target.selectionStart, F = u.target.selectionEnd, S = d.substring(0, _), v = d.length > F ? d.substring(F) : "", i = _ == F ? "" : d.substring(_, F);
            if (i.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? i.startsWith(de) ? (i = i.substring(1), _--) : S.endsWith(de) && (S = S.substring(0, S.length - 1), _--) : i = de + i;
            else {
              let h = !1;
              i.endsWith($e) && (h = !0, i = i.substring(0, i.length - 1));
              let k = i.split($e);
              i = "", u.shiftKey && S.endsWith(de) && (S = S.substring(0, S.length - 1), _--), k.forEach((x, f) => {
                u.shiftKey && x.startsWith(de) ? x = x.substring(1) : u.shiftKey || (x = de + x), i += x + (f === k.length - 1 ? "" : $e);
              }), h && (i += $e);
            }
            return d = S + i + v, _ += i.length == 1 ? 1 : 0, F = _ + (i.length == 1 ? 0 : i.length), o(d), u.target.selectionStart = _, u.target.selectionEnd = F, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, d) => R((c(), b("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: r,
      "onUpdate:modelValue": d[0] || (d[0] = (_) => n.value = _)
    }, null, 40, Ho)), [
      [he, n.value]
    ]);
  }
}), Yo = ["id", "name"], qo = /* @__PURE__ */ M({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: s }) {
    const a = e, t = We();
    let n = [];
    const l = B(!1), o = y(() => {
      let i = qn(a.fields);
      for (let h = 0; h < i.length; h++)
        n[h] = B(null);
      return i;
    });
    return s({ disableField: (i) => n.forEach((h) => h.value.disableField(i)), enableField: (i) => n.forEach((h) => h.value.enableField(i)), isValid: () => !n.some((i) => !(i.value.isValid === void 0 || i.value.isValid())), setValues: (i) => n.forEach((h) => h.value.setValues(i)), getValue: () => {
      var i = {};
      return n.forEach((h) => {
        i = $.extend(i, h.value.getValue());
      }), i;
    }, hideField: (i) => {
      a.name === i ? l.value = !0 : n.forEach((h) => h.value.hideField(i));
    }, showField: (i) => {
      a.name === i && (l.value = !1), n.forEach((h) => h.value.showField(i));
    } }), (i, h) => R((c(), b("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (c(!0), b(Y, null, C(o.value, (k, x) => (c(), P(Is, {
        inputs: k,
        disabled: a.disabled,
        onValue_changed: h[0] || (h[0] = (f) => w(t)("value_changed", f)),
        onButton_clicked: h[1] || (h[1] = (f) => w(t)("button_clicked", f)),
        ref_for: !0,
        ref: w(n)[x]
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Yo)), [
      [le, !a.hidden]
    ]);
  }
}), Ko = ["for"], Co = {
  key: 0,
  class: "help is-danger"
}, Go = { class: "control" }, Xo = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Qo = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Zo = /* @__PURE__ */ M({
  __name: "component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: s, emit: a }) {
    const t = B(null), n = a, l = e, o = T("Translate"), r = y(() => o ?? function(m) {
      return m;
    }), u = qe(B(l.input.type)), d = y(() => {
      let m = null;
      switch (l.input.type) {
        case "autocomplete":
          m = Ms;
          break;
        case "button":
          m = Je;
          break;
        case "checkbox-group":
          m = Ds;
          break;
        case "checkbox":
          m = ws;
          break;
        case "date":
          m = Fs;
          break;
        case "full-editor":
          m = Os;
          break;
        case "header":
          m = Ne;
          break;
        case "hidden":
          m = Bs;
          break;
        case "number":
          m = xs;
          break;
        case "paragraph":
          m = Ve;
          break;
        case "radio-group":
          m = Js;
          break;
        case "select":
          m = Vs;
          break;
        case "Switch":
          m = Es;
          break;
        case "text":
          m = Ps;
          break;
        case "textarea":
          m = Ws;
          break;
        case "time":
          m = ze;
          break;
        case "subform":
          m = qo;
          break;
      }
      return m;
    }), _ = function(m) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(m);
    };
    re(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && _(l.input.value);
    });
    const F = y(() => l.input.disabled ?? l.disabled ?? !1), S = y(() => `is-${l.input.form_columns ?? 12}`), v = y(() => l.input.name), i = y(() => l.input.processVariable ?? l.input.name), h = y(() => Xo.some((m) => m === l.input.type) && l.input.label !== void 0 && l.input.label !== null), k = y(() => {
      let m = $.extend({}, l.input);
      return delete m.type, m.className != null && delete m.className, m.form_columns != null && delete m.form_columns, m.disabled = l.disabled, Qo.some((ge) => ge === l.input.type) && (m.Translate = o), m;
    }), x = (m) => {
      if (m.value !== void 0 && m.value !== null && Array.isArray(m.value)) {
        let ge = [...m.value];
        m.value = ge;
      }
      n("value_changed", m);
    }, f = (m) => {
      n("button_clicked", m);
    }, J = () => {
      if (t.value != null && t.value.getValue != null) {
        let m = t.value.getValue();
        return m != null && Array.isArray(m) ? [...m] : m;
      }
      return null;
    };
    return s({ setValue: _, fieldName: v, type: u, altFieldName: i, getValue: J, isValid: () => {
      if (l.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (l.input.required ?? !1) {
        let m = J();
        return m != null && (Array.isArray(m) ? m.length > 0 : !0) && m.toString() !== "";
      }
      return !0;
    }, setValues: (m) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.setValues(m);
      else
        throw "unable to call set values on any form element except a subform";
    }, enableField: (m) => {
      if (l.input.type === "subform" && t.value != null)
        t.value.enableField(m);
      else
        throw "unable to call enable field on any form element except a subform";
    }, disableField: (m) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.disableField(m);
      else
        throw "unable to call disable field on any form element except a subform";
    }, showField: (m) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.showField(m);
      else
        throw "unable to call show field on any form element except a subform";
    }, hideField: (m) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.hideField(m);
      else
        throw "unable to call hide field on any form element except a subform";
    }, hideValue: (m) => {
      if (t.value != null)
        switch (l.input.type) {
          case "checkbox-group":
          case "radio-group":
          case "select":
            t.value.hideValue(m);
            break;
          default:
            throw "unable to call hideValue on a non-multi-valued element";
        }
    }, showValue: (m) => {
      if (t.value != null)
        switch (l.input.type) {
          case "checkbox-group":
          case "radio-group":
          case "select":
            t.value.showValue(m);
            break;
          default:
            throw "unable to call showValue on a non-multi-valued element";
        }
    }, disableValue: (m) => {
      if (t.value != null)
        switch (l.input.type) {
          case "checkbox-group":
          case "radio-group":
          case "select":
            t.value.disableValue(m);
            break;
          default:
            throw "unable to call disableValue on a non-multi-valued element";
        }
    }, enableValue: (m) => {
      if (t.value != null)
        switch (l.input.type) {
          case "checkbox-group":
          case "radio-group":
          case "select":
            t.value.enableValue(m);
            break;
          default:
            throw "unable to call enableValue on a non-multi-valued element";
        }
    } }), (m, ge) => R((c(), b("div", {
      class: V(["field column", [S.value]])
    }, [
      l.input.type == "header" ? (c(), P(Ne, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (c(), P(Ve, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (c(), P(Je, {
        key: 2,
        name: l.input.name,
        sstyle: l.input.style,
        className: l.input.className,
        icon: l.input.icon,
        label: l.input.label,
        disabled: F.value,
        onButton_clicked: f,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (c(), b(Y, { key: 3 }, [
        h.value ? (c(), b("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          ee(E(r.value(l.input.label)) + " ", 1),
          l.input.required ? (c(), b("span", Co, "*")) : L("", !0)
        ], 8, Ko)) : L("", !0),
        g("div", Go, [
          (c(), P(ce(d.value), G(k.value, {
            onValue_changed: x,
            ref_key: "inp",
            ref: t
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [le, !l.hidden]
    ]);
  }
});
const er = { class: "columns" }, Is = /* @__PURE__ */ M({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e, { expose: s }) {
    const a = e, t = We(), n = [], l = B([]), o = B([]);
    if (s({ setValues: (i) => {
      n.forEach((h) => {
        switch (h.value.type) {
          case "subform":
            h.value.setValues(i);
            break;
          default:
            h.value.setValue !== void 0 && (i === null ? h.value.setValue(null) : Object.keys(i).some((k) => k === h.value.fieldName) ? h.value.setValue(i[h.value.fieldName]) : Object.keys(i).some((k) => k === h.value.altFieldName) && h.value.setValue(i[h.value.altFieldName]));
            break;
        }
      });
    }, getValues: () => {
      var i = {};
      return n.forEach((h) => {
        if (h.value.getValue != null)
          switch (h.value.type) {
            case "subform":
              i = $.extend(i, h.value.getValue());
              break;
            default:
              i[h.value.fieldName] = h.value.getValue();
              break;
          }
      }), i;
    }, isValid: () => !n.some((i) => !(i.value.isValid === void 0 || i.value.isValid())), hideField: (i) => {
      n.forEach((h) => {
        if (h.value.fieldName === i)
          l.value.some((k) => k === i) || l.value.push(i);
        else
          switch (h.value.type) {
            case "subform":
              h.value.hideField(i);
              break;
            case "checkbox-group":
            case "radio-group":
            case "select":
              i.startsWith(h.value.fieldName + ".") && h.value.hideValue(i.split(".")[1]);
              break;
          }
      });
    }, showField: (i) => {
      n.forEach((h) => {
        if (h.value.fieldName === i)
          l.value = l.value.filter((k) => k !== i);
        else
          switch (h.value.type) {
            case "subform":
              h.value.showField(i);
              break;
            case "checkbox-group":
            case "radio-group":
            case "select":
              i.startsWith(h.value.fieldName + ".") && h.value.showValue(i.split(".")[1]);
              break;
          }
      });
    }, disableField: (i) => {
      n.forEach((h) => {
        if (h.value.fieldName == i)
          o.value.some((k) => k === i) || o.value.push(i);
        else
          switch (h.value.type) {
            case "subform":
              h.value.disableField(i);
              break;
            case "checkbox-group":
            case "radio-group":
            case "select":
              i.startsWith(h.value.fieldName + ".") && h.value.disableValue(i.split(".")[1]);
              break;
          }
      });
    }, enableField: (i) => {
      n.forEach((h) => {
        if (h.value.fieldName === i)
          o.value = o.value.filter((k) => k !== i);
        else
          switch (h.type) {
            case "subform":
              h.value.enableField(i);
              break;
            case "checkbox-group":
            case "radio-group":
            case "select":
              i.startsWith(h.valuefieldName + ".") && h.value.enableValue(i.split(".")[1]);
              break;
          }
      });
    } }), a.inputs !== null)
      for (let i = 0; i < a.inputs.length; i++)
        n[i] = B(null);
    return (i, h) => (c(), b("div", er, [
      (c(!0), b(Y, null, C(a.inputs, (k, x) => (c(), P(Zo, {
        input: k,
        onValue_changed: h[0] || (h[0] = (f) => w(t)("value_changed", f)),
        onButton_clicked: h[1] || (h[1] = (f) => w(t)("button_clicked", f)),
        ref_for: !0,
        ref: n[x],
        disabled: a.disabled || o.value.some((f) => f === k.name),
        hidden: l.value.some((f) => f === k.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), tr = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, ar = /* @__PURE__ */ M({
  __name: "form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    Translate: {}
  },
  setup(e, { expose: s }) {
    const a = e, t = We();
    qs("Translate", a.Translate === void 0 ? null : a.Translate);
    let n = [];
    const l = y(() => {
      if (a.elements != null) {
        let v = [], i = [], h = 0;
        return a.elements.forEach((k) => {
          let x = k.form_columns ?? 12;
          h + x > 12 && i.length > 0 && (v.push(i), i = [], h = 0), i.push(k), h += x, h === 12 && (v.push(i), i = [], h = 0);
        }), i.length > 0 && v.push(i), n = i.map((k) => B(null)), v;
      } else
        return null;
    }), o = () => {
      let v = {};
      return n.forEach((i) => {
        v = $.extend(v, i.value.getValues());
      }), v;
    }, r = (v) => {
      n.forEach((i) => i.value.setValues(v));
    }, u = () => !n.some((v) => !(v.value.isValid === void 0 || v.value.isValid())), d = (v) => {
      Array.isArray(v) ? v.forEach((i) => d(i)) : n.forEach((i) => i.value.hideField(v));
    }, _ = (v) => {
      Array.isArray(v) ? v.forEach((i) => _(i)) : n.forEach((i) => i.value.showField(v));
    }, F = (v) => {
      Array.isArray(v) ? v.forEach((i) => F(i)) : n.forEach((i) => i.value.disableField(v));
    }, S = (v) => {
      Array.isArray(v) ? v.forEach((i) => S(i)) : n.forEach((i) => i.value.enableField(v));
    };
    return s({ getValues: o, setValues: r, isValid: u, hideField: d, showField: _, disableField: F, enableField: S }), (v, i) => (c(), b("form", tr, [
      l.value != null ? (c(!0), b(Y, { key: 0 }, C(l.value, (h, k) => (c(), P(Is, {
        inputs: h,
        key: k,
        onValue_changed: i[0] || (i[0] = (x) => w(t)("value_changed", x)),
        onButton_clicked: i[1] || (i[1] = (x) => w(t)("button_clicked", x)),
        ref_for: !0,
        ref: w(n)[k],
        disabled: v.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : L("", !0)
    ]));
  }
}), lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Ms,
  Button: Je,
  Checkbox: ws,
  CheckboxGroup: Ds,
  Date: Fs,
  Form: ar,
  FullEditor: Os,
  Header: Ne,
  Hidden: Bs,
  Number: xs,
  Paragraph: Ve,
  RadioGroup: Js,
  Select: Vs,
  Switch: Es,
  Text: Ps,
  TextArea: Ws,
  Time: ze
}, Symbol.toStringTag, { value: "Module" })), sr = { class: "hero-body" }, nr = { class: "title" }, or = {
  key: 0,
  class: "subtitle"
}, rr = /* @__PURE__ */ M({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const s = e;
    return (a, t) => (c(), b("section", {
      class: V(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + s.type])
    }, [
      g("div", sr, [
        g("p", nr, E(s.title), 1),
        s.subtitle ? (c(), b("p", or, E(s.subtitle), 1)) : L("", !0)
      ])
    ], 2));
  }
}), ur = (e, s) => {
  const a = e.__vccOpts || e;
  for (const [t, n] of s)
    a[t] = n;
  return a;
}, ir = {}, dr = { class: "box" };
function cr(e, s) {
  return c(), b("div", dr, [
    W(e.$slots, "default")
  ]);
}
const hr = /* @__PURE__ */ ur(ir, [["render", cr]]), br = {
  key: 0,
  class: "icon is-clickable"
}, pr = /* @__PURE__ */ M({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const a = e, t = s;
    return (n, l) => (c(), b("li", {
      class: V({ "is-active": a.active })
    }, [
      g("a", {
        onClick: l[0] || (l[0] = (o) => t("click"))
      }, [
        a.icon ? (c(), b("span", br, [
          I(w(K), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : L("", !0),
        ee(" " + E(a.title), 1)
      ])
    ], 2));
  }
}), fr = /* @__PURE__ */ M({
  __name: "breadcrumbs",
  props: {
    alignment: { default: De.left },
    size: { default: oe.normal },
    seperator: {}
  },
  setup(e) {
    const s = e, a = y(() => {
      let t = ["breadcrumb"];
      return s.alignment && s.alignment !== De.left && t.push(`is-${s.alignment}`), s.size && s.size !== oe.normal && t.push(`is-${s.size}`), s.seperator && t.push(`has-${s.seperator}-seperator`), t;
    });
    return (t, n) => (c(), b("nav", {
      class: V(a.value),
      "aria-label": "breadcrumbs"
    }, [
      g("ul", null, [
        W(t.$slots, "default")
      ])
    ], 2));
  }
}), vr = /* @__PURE__ */ M({
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
    const s = e;
    return (a, t) => (c(), b("div", {
      class: V(["columns", [
        {
          "is-mobile": s.mobile,
          "is-desktop": s.desktop,
          "is-tablet": s.tablet,
          "is-gapless": s.gapless,
          "is-multiline": s.multiline,
          "is-centered": s.centered,
          "is-vcentered": s.verticalCentered,
          "is-bordered-left": s.borderleft,
          "is-bordered-right": s.borderright,
          "is-bordered-top": s.bordertop,
          "is-bordered-bottom": s.borderbottom,
          "is-fullwidth": s.fullWidth,
          "is-fullheight": s.fullHeight
        },
        s.addonclass
      ]])
    }, [
      W(a.$slots, "default")
    ], 2));
  }
}), mr = /* @__PURE__ */ M({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const s = e, a = y(() => {
      var t = [`is-${s.size ?? "12"}`];
      return s.offset && t.push(`is-offset-${s.offset}`), s.border && (s.border.some((n) => n === we.all) ? t.push("is-bordered") : s.border.forEach((n) => t.push(`is-bordered-${n}`))), s.addonclass && t.push(s.addonclass), t;
    });
    return (t, n) => (c(), b("div", {
      class: V(["column", a.value])
    }, [
      W(t.$slots, "default")
    ], 2));
  }
}), gr = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), yr = { class: "modal-card-head" }, _r = { class: "modal-card-body" }, kr = { class: "modal-card-foot" }, $r = /* @__PURE__ */ M({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = {
      addonclass: "card-footer-item"
    }, l = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, o = y(() => {
      var r = [];
      return a.fullWidth && r.push("is-fullwidth"), a.fullHeight && r.push("is-fullheight"), a.maxWidth && r.push("is-maxwidth"), a.maxHeight && r.push("is-maxheight"), r;
    });
    return (r, u) => (c(), b("div", {
      class: V(["modal", { "is-active": a.show }])
    }, [
      gr,
      g("div", {
        class: V(["modal-card", o.value])
      }, [
        g("div", yr, [
          W(r.$slots, "header", pe(fe(l))),
          r.hasClose ? (c(), b("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (d) => t("close"))
          })) : L("", !0)
        ]),
        g("div", _r, [
          W(r.$slots, "content")
        ]),
        g("div", kr, [
          W(r.$slots, "footer", pe(fe(n)))
        ])
      ], 2)
    ], 2));
  }
}), Sr = {
  key: 0,
  class: "panel-heading"
}, Mr = {
  key: 1,
  class: "panel-tabs"
}, Dr = { class: "panel-block" }, wr = /* @__PURE__ */ M({
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
    const s = e, a = y(() => s.blockNames ?? ["default"]), t = y(() => {
      let n = [];
      return s.type && n.push(`is-${s.type}`), s.fullWidth && n.push("is-fullwidth"), s.fullHeight && n.push("is-fullheight"), n;
    });
    return (n, l) => (c(), b("div", {
      class: V(["panel", t.value])
    }, [
      s.hasHeader ? (c(), b("div", Sr, [
        W(n.$slots, "header")
      ])) : L("", !0),
      s.hasTabs ? (c(), b("div", Mr, [
        W(n.$slots, "tabs")
      ])) : L("", !0),
      (c(!0), b(Y, null, C(a.value, (o) => (c(), b("div", Dr, [
        W(n.$slots, o)
      ]))), 256))
    ], 2));
  }
}), Fr = /* @__PURE__ */ M({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const s = e, a = y(() => {
      let n = [];
      return s.scrollable && n.push("table-container"), s.fixedHeader && s.scrollable && n.push("is-fixed"), n;
    }), t = y(() => {
      let n = ["table", "is-striped", "is-hoverable"];
      return s.fixedHeader && !s.scrollable && n.push("is-fixed"), s.fullWidth && n.push("is-fullwidth"), s.narrow && n.push("is-narrow"), n;
    });
    return (n, l) => (c(), b("div", {
      class: V(a.value)
    }, [
      g("table", {
        class: V(t.value)
      }, [
        g("thead", null, [
          W(n.$slots, "thead")
        ]),
        g("tbody", null, [
          W(n.$slots, "tbody")
        ]),
        g("tfoot", null, [
          W(n.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), Or = ["href"], Br = {
  key: 0,
  class: "icon is-small"
}, xr = /* @__PURE__ */ M({
  __name: "tabs-tab",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {},
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const a = s, t = e, n = (l) => {
      (t.href === null || t.href === void 0) && (l.preventDefault(), a("click"));
    };
    return (l, o) => (c(), b("li", {
      class: V({ "is-active": t.active })
    }, [
      g("a", {
        href: l.href,
        onClick: n
      }, [
        t.icon ? (c(), b("span", Br, [
          I(w(K), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : L("", !0),
        g("span", null, E(t.title), 1)
      ], 8, Or)
    ], 2));
  }
}), Jr = /* @__PURE__ */ M({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const s = e, a = y(() => {
      let t = ["tabs"];
      return s.alignment ? t.push(`is-${s.alignment}`) : t.push("is-left"), s.type && t.push(`is-${s.type}`), s.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, n) => (c(), b("div", {
      class: V(a.value)
    }, [
      g("ul", null, [
        W(t.$slots, "default")
      ])
    ], 2));
  }
}), Nr = /* @__PURE__ */ M({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const s = e, a = y(() => {
      let t = ["tile", `is-${s.type}`];
      return s.size && t.push(`is-${s.size}`), s.borders && (s.borders.some((n) => n === we.all) ? t.push("is-bordered") : s.borders.forEach((n) => t.push(`is-bordered-${n}`))), s.vertical && t.push("is-vertical"), t;
    });
    return (t, n) => (c(), b("div", {
      class: V(a.value)
    }, [
      W(t.$slots, "default")
    ], 2));
  }
}), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: rr,
  Box: hr,
  Breadcrumbs: fr,
  BreadcrumbsItem: pr,
  Card: $s,
  Column: mr,
  ColumnContainer: vr,
  List: Ss,
  ListItem: Se,
  ModalCard: $r,
  Panel: wr,
  Table: Fr,
  Tabs: Jr,
  TabsTab: xr,
  Tile: Nr
}, Symbol.toStringTag, { value: "Module" }));
const Te = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
ve(`${Te.substring(0, Te.lastIndexOf("/"))}/style.css`);
const Er = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function Pr(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Er,
  setSkin: Pr
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Ur,
  Button: Rr,
  ButtonAdd: jr,
  ButtonCancel: Tr,
  ButtonDelete: Hr,
  ButtonDisable: Yr,
  ButtonDownload: qr,
  ButtonEdit: Kr,
  ButtonEnable: Cr,
  ButtonOkay: Gr,
  ButtonPrint: Xr,
  ButtonRefresh: Qr,
  ButtonSave: Zr,
  ButtonUpload: eu,
  Chart: tu,
  CheckMark: au,
  DynamicSlot: lu,
  Filter: su,
  Icon: nu,
  Message: ou,
  Notification: ru,
  PageNotification: uu,
  Pagination: iu,
  VPromise: du
} = Un, { DraggableItem: cu, DropZone: hu, Sortable: bu } = Hn, {
  AutoComplete: pu,
  CheckboxGroup: fu,
  Checkbox: vu,
  Date: mu,
  Form: gu,
  FullEditor: yu,
  Header: _u,
  Hidden: ku,
  Number: $u,
  Paragraph: Su,
  RadioGroup: Mu,
  Select: Du,
  Switch: wu,
  Text: Fu,
  TextArea: Ou,
  Time: Bu
} = lr, {
  Banner: xu,
  Box: Ju,
  BreadcrumbsItem: Nu,
  Breadcrumbs: Vu,
  Card: Eu,
  Column: Pu,
  ColumnContainer: Lu,
  List: Wu,
  ListItem: Iu,
  ModalCard: zu,
  Panel: Au,
  Table: Uu,
  Tabs: Ru,
  TabsTab: ju,
  Tile: Tu
} = Vr, { AVAIABLE_SKINS: Hu, setSkin: Yu } = Lr, { ColorTypes: qu, Sizes: Ku, AnimationSpeeds: Cu, AnimationTypes: Gu, IconSizes: Xu, ChartLegendPositions: Qu, ChartTypes: Zu } = Ks;
export {
  Hu as AVAIABLE_SKINS,
  Ur as Animation,
  Cu as AnimationSpeeds,
  Gu as AnimationTypes,
  pu as AutoComplete,
  xu as Banner,
  Ju as Box,
  Vu as Breadcrumbs,
  Nu as BreadcrumbsItem,
  Rr as Button,
  jr as ButtonAdd,
  Tr as ButtonCancel,
  Hr as ButtonDelete,
  Yr as ButtonDisable,
  qr as ButtonDownload,
  Kr as ButtonEdit,
  Cr as ButtonEnable,
  Gr as ButtonOkay,
  Xr as ButtonPrint,
  Qr as ButtonRefresh,
  Zr as ButtonSave,
  eu as ButtonUpload,
  Eu as Card,
  tu as Chart,
  Qu as ChartLegendPositions,
  Zu as ChartTypes,
  au as CheckMark,
  vu as Checkbox,
  fu as CheckboxGroup,
  qu as ColorTypes,
  Pu as Column,
  Lu as ColumnContainer,
  mu as Date,
  cu as DraggableItem,
  hu as DropZone,
  lu as DynamicSlot,
  su as Filter,
  gu as Form,
  yu as FullEditor,
  _u as Header,
  ku as Hidden,
  nu as Icon,
  Xu as IconSizes,
  Wu as List,
  Iu as ListItem,
  ou as Message,
  zu as ModalCard,
  ru as Notification,
  $u as Number,
  uu as PageNotification,
  iu as Pagination,
  Au as Panel,
  Su as Paragraph,
  Mu as RadioGroup,
  Du as Select,
  Ku as Sizes,
  bu as Sortable,
  wu as Switch,
  Uu as Table,
  Ru as Tabs,
  ju as TabsTab,
  Fu as Text,
  Ou as TextArea,
  Tu as Tile,
  Bu as Time,
  du as VPromise,
  Yu as setSkin
};
