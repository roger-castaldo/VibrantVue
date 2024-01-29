import { computed as y, defineComponent as k, openBlock as i, createBlock as z, Transition as Eo, withCtx as I, renderSlot as N, createElementBlock as p, normalizeClass as F, inject as P, ref as O, watch as W, createVNode as A, createCommentVNode as T, toDisplayString as J, mergeProps as K, unref as S, onMounted as re, Fragment as C, renderList as G, resolveDynamicComponent as me, normalizeProps as ce, guardReactiveProps as ye, withDirectives as R, createElementVNode as g, vModelText as _e, createTextVNode as Q, vShow as le, toRefs as zo, reactive as nt, resolveComponent as lt, vModelCheckbox as Le, normalizeStyle as Ve, readonly as we, withAsyncContext as Io, onUnmounted as Lo, vModelSelect as Vo, vModelDynamic as Wo, provide as Te, createSlots as Co, markRaw as Ro } from "vue";
import "jquery";
const xe = (e) => new Promise((n) => {
  let a = [], t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, l) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let o = document.createElement("link"), c = new Promise((u) => {
        o.onload = function() {
          u(s);
        };
      });
      a[l] = c, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", s), o.setAttribute("href", s);
    } else
      a[l] = Promise.resolve(s);
  }), Promise.all(a).then((s) => {
    n(s);
  });
}), ue = [], We = (e, n) => new Promise((a) => {
  let t = ue.find((s) => s.path === e);
  if (t != null)
    if (t.result === void 0 && n !== void 0 || t.result === null && n === void 0) {
      let s = setTimeout(() => {
        let l = ue.find((r) => r.path === e);
        l == null ? (clearTimeout(s), a(void 0)) : (l.result !== void 0 && n !== void 0 || l.result === void 0 && n === void 0) && (clearTimeout(s), a(l.result));
      }, 500);
    } else
      a(t.result);
  else {
    ue.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let s = document.createElement("script");
    s.onload = () => {
      let r = ue.findIndex((o) => o.path === e);
      if (n === void 0)
        ue[r].result = void 0;
      else {
        let o = {};
        n.forEach((c) => {
          o[c] = window[c];
        }), ue[r].result = o;
      }
      a(ue[r].result);
    }, s.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
  }
}), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  loadNonEs6Module: We
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), de = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(de || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), ot = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ot || {}), Ce = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ce || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), rt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(dt || {}), Je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Je || {}), ct = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(mt || {}), Fe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Fe || {}), bt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(bt || {}), Re = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(je || {});
const jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: de,
  AnimationTypes: Be,
  BadgePositiions: Re,
  BorderTypes: Je,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: rt,
  ChartLegendPositions: Ce,
  ChartTypes: ot,
  ColorTypes: q,
  ColumnContainerModifiers: it,
  ColumnOffsetSizes: dt,
  ColumnSizes: ut,
  DropZoneQuadrants: ee,
  FixedMenuPositions: bt,
  FixedNavBarPositions: Fe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: X,
  TabAlignments: ct,
  TabStyles: pt,
  TileSizes: ht,
  TileTypes: mt,
  ToolTipPositions: Ue,
  ToolTipTextAlignments: je
}, Symbol.toStringTag, { value: "Module" })), Y = (e) => {
  const n = e("Language", "en");
  return y(() => n);
}, Ho = (e) => {
  const n = e("IconSet", "solid");
  return y(() => n);
}, Go = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), qo = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), Yo = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Ko = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), Qo = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), ft = /* @__PURE__ */ k({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: de.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = Yo(P);
    xe(`${n}animate.min.css`);
    const a = e, t = (h) => {
      switch (h) {
        case de.slower:
          return 3e3;
        case de.fast:
          return 800;
        case de.faster:
          return 500;
        default:
          return 2e3;
      }
    }, s = (h) => h === void 0 ? "" : `animate__${h}`, l = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, r = y(() => ({
      enter: t(a.speedIn ?? a.speed),
      leave: t(a.speedOut ?? a.speed)
    })), o = y(() => [
      "animate__animated",
      s(a.incoming ?? a.inout),
      l(a.speedIn ?? a.speed)
    ].join(" ")), c = y(() => [
      "animate__animated",
      s(a.outgoing ?? a.inout),
      l(a.speedOut ?? a.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      s(a.repeating),
      l(a.speed ?? "")
    ].join(" "));
    return (h, d) => a.repeating ? (i(), p("div", {
      key: 1,
      class: F(u.value)
    }, [
      N(h.$slots, "default")
    ], 2)) : (i(), z(Eo, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": c.value,
      duration: r.value
    }, {
      default: I(() => [
        N(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), Xo = "brands.min.css", Zo = "all.min.css", Xe = "icon_styles", er = /\.fa-([^: ]+):before/g, tr = /url\(([^)]+)\)/g, ve = O([]), Ne = O(!1), Ze = async (e, n) => {
  if (!Ne.value) {
    Ne.value = !0;
    let a;
    ve.value.length === 0 ? (a = document.createElement("style"), a.setAttribute("id", Xe), document.head.appendChild(a), a.setAttribute("type", "text/css")) : a = document.getElementById(Xe), ve.value = [" "];
    let t = await Promise.all([
      fetch(`${e}${Xo}`),
      fetch(`${e}${Zo}`),
      fetch(`${e}${n}.min.css`)
    ]), s = await t[0].text();
    [...s.matchAll(er)].forEach((l) => {
      ve.value.push(l[1]);
    }), s = `${await t[1].text()}
    ${await t[2].text()}
    ${s}`, [...s.matchAll(tr)].forEach((l) => {
      s = s.replace(l[0], `url(${new URL(l[1], e)})`);
    }), a.innerText = s, ve.value.splice(0, 1), Ne.value = !1;
  }
}, H = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = qo(P), a = Ho(P);
    ve.value.length === 0 ? Ze(n, a.value) : W(a, () => Ze(n, a.value));
    const t = e, s = y(() => {
      let l = [];
      return t.icon !== void 0 && t.icon !== null && (ve.value.indexOf(t.icon) >= 0 ? l.push("fa-brands") : (l.push("fa-ico"), l.push(`fa-${a.value}`)), l.push((t.icon.indexOf("fa-") == -1 ? " fa-" : " ") + t.icon)), t.size !== void 0 && t.size !== null && t.size !== oe.normal && l.push(`fa-${t.size}`), l;
    });
    return (l, r) => (i(), p("i", {
      class: F(s.value)
    }, null, 2));
  }
});
const ar = ["disabled"], sr = {
  key: 0,
  class: "icon is-small"
}, nr = { key: 1 }, Z = /* @__PURE__ */ k({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: q.primary },
    size: { default: X.small },
    title: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = y(() => {
      let l = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && l.push("disabled"), a.addonclass && l.push(a.addonclass), a.hidemobile && l.push("is-hidden-mobile"), a.hidetablet && l.push("is-hidden-tablet-only"), a.hidedesktop && l.push("is-hidden-desktop is-hidden-widescreen"), l;
    });
    return (l, r) => (i(), p("button", {
      class: F(s.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (i(), p("span", sr, [
        A(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      a.title != null ? (i(), p("span", nr, J(a.title), 1)) : T("", !0)
    ], 10, ar));
  }
}), gt = {
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
}, vt = {
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
}, yt = {
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
}, _t = {}, kt = {}, $t = {}, St = {
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
}, Mt = {
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
}, Dt = {
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
}, wt = {}, Bt = {
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
}, Ot = {
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
}, Ft = {}, xt = {
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
}, Jt = {
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
}, At = {
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
}, Tt = {
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
}, Nt = {
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
}, Pt = {
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
}, Et = {
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
}, zt = {
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
}, It = {
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
}, Lt = {
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
}, Vt = {
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
}, Wt = {}, Ct = {}, Rt = {}, Ut = {}, jt = {}, Ht = {}, Gt = {
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
}, qt = {}, Yt = {
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
}, Kt = {
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
}, Qt = {}, Xt = {}, Zt = {}, ea = {
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
}, ta = {}, aa = {}, sa = {
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
}, na = {
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
}, la = {}, oa = {}, lr = {
  en: gt,
  ar: vt,
  az: yt,
  bg: _t,
  bn: kt,
  ca: $t,
  cs: St,
  da: Mt,
  de: Dt,
  el: wt,
  eo: Bt,
  es: Ot,
  et: Ft,
  fa: xt,
  fi: Jt,
  fr: At,
  ga: Tt,
  he: Nt,
  hi: Pt,
  hu: Et,
  id: zt,
  it: It,
  ja: Lt,
  ko: Vt,
  lt: Wt,
  lv: Ct,
  ms: Rt,
  nb: Ut,
  nl: jt,
  pl: Ht,
  pt: Gt,
  ro: qt,
  ru: Yt,
  sk: Kt,
  sl: Qt,
  sq: Xt,
  sr: Zt,
  sv: ea,
  th: ta,
  tl: aa,
  tr: sa,
  uk: na,
  zh: la,
  zt: oa
}, or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: vt,
  az: yt,
  bg: _t,
  bn: kt,
  ca: $t,
  cs: St,
  da: Mt,
  de: Dt,
  default: lr,
  el: wt,
  en: gt,
  eo: Bt,
  es: Ot,
  et: Ft,
  fa: xt,
  fi: Jt,
  fr: At,
  ga: Tt,
  he: Nt,
  hi: Pt,
  hu: Et,
  id: zt,
  it: It,
  ja: Lt,
  ko: Vt,
  lt: Wt,
  lv: Ct,
  ms: Rt,
  nb: Ut,
  nl: jt,
  pl: Ht,
  pt: Gt,
  ro: qt,
  ru: Yt,
  sk: Kt,
  sl: Qt,
  sq: Xt,
  sr: Zt,
  sv: ea,
  th: ta,
  tl: aa,
  tr: sa,
  uk: na,
  zh: la,
  zt: oa
}, Symbol.toStringTag, { value: "Module" })), ra = {
  Filter: "Filter"
}, ia = {
  Filter: "فيلم"
}, ua = {
  Filter: "Qeydiyyat"
}, da = {}, ca = {}, pa = {}, ha = {
  Filter: "Čeština"
}, ma = {
  Filter: "Filter"
}, ba = {
  Filter: "Filter"
}, fa = {}, ga = {
  Filter: "Filtero"
}, va = {
  Filter: "Filtro"
}, ya = {}, _a = {
  Filter: "فیلتر"
}, ka = {
  Filter: "Filter"
}, $a = {
  Filter: "Filtre"
}, Sa = {
  Filter: "Scagaire"
}, Ma = {
  Filter: "Filter"
}, Da = {
  Filter: "फिल्टर"
}, wa = {
  Filter: "Szűrő"
}, Ba = {
  Filter: "Login"
}, Oa = {
  Filter: "Filtro"
}, Fa = {
  Filter: "フィルター"
}, xa = {
  Filter: "제품정보"
}, Ja = {}, Aa = {}, Ta = {}, Na = {}, Pa = {}, Ea = {}, za = {
  Filter: "Filtro"
}, Ia = {}, La = {
  Filter: "Фильтр"
}, Va = {
  Filter: "Filter"
}, Wa = {}, Ca = {}, Ra = {}, Ua = {
  Filter: "Filter"
}, ja = {}, Ha = {}, Ga = {
  Filter: "Filtre"
}, qa = {
  Filter: "Фільтри"
}, Ya = {}, Ka = {}, rr = {
  en: ra,
  ar: ia,
  az: ua,
  bg: da,
  bn: ca,
  ca: pa,
  cs: ha,
  da: ma,
  de: ba,
  el: fa,
  eo: ga,
  es: va,
  et: ya,
  fa: _a,
  fi: ka,
  fr: $a,
  ga: Sa,
  he: Ma,
  hi: Da,
  hu: wa,
  id: Ba,
  it: Oa,
  ja: Fa,
  ko: xa,
  lt: Ja,
  lv: Aa,
  ms: Ta,
  nb: Na,
  nl: Pa,
  pl: Ea,
  pt: za,
  ro: Ia,
  ru: La,
  sk: Va,
  sl: Wa,
  sq: Ca,
  sr: Ra,
  sv: Ua,
  th: ja,
  tl: Ha,
  tr: Ga,
  uk: qa,
  zh: Ya,
  zt: Ka
}, ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ia,
  az: ua,
  bg: da,
  bn: ca,
  ca: pa,
  cs: ha,
  da: ma,
  de: ba,
  default: rr,
  el: fa,
  en: ra,
  eo: ga,
  es: va,
  et: ya,
  fa: _a,
  fi: ka,
  fr: $a,
  ga: Sa,
  he: Ma,
  hi: Da,
  hu: wa,
  id: Ba,
  it: Oa,
  ja: Fa,
  ko: xa,
  lt: Ja,
  lv: Aa,
  ms: Ta,
  nb: Na,
  nl: Pa,
  pl: Ea,
  pt: za,
  ro: Ia,
  ru: La,
  sk: Va,
  sl: Wa,
  sq: Ca,
  sr: Ra,
  sv: Ua,
  th: ja,
  tl: Ha,
  tr: Ga,
  uk: qa,
  zh: Ya,
  zt: Ka
}, Symbol.toStringTag, { value: "Module" })), Qa = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Go To Page"
}, Xa = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer",
  GoToPage: "الذهاب إلى الصفحة"
}, Za = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə",
  GoToPage: " Page"
}, es = {}, ts = {}, as = {}, ss = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština",
  GoToPage: "Přejít na stránku"
}, ns = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer",
  GoToPage: "Gå til siden"
}, ls = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit",
  GoToPage: "Zur Seite"
}, os = {}, rs = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli",
  GoToPage: "Iru al paĝo"
}, is = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Ir a la página"
}, us = {}, ds = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer",
  GoToPage: "به صفحه بروید"
}, cs = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa",
  GoToPage: "Siirry sivulle"
}, ps = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Aller à la page"
}, hs = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh",
  GoToPage: "Téigh go dtí an Leathanach"
}, ms = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש",
  GoToPage: "ללכת לדף"
}, bs = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया",
  GoToPage: "पृष्ठ पर जाएं"
}, fs = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb",
  GoToPage: "Menj az oldalra"
}, gs = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login",
  GoToPage: "Sitemap"
}, vs = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo",
  GoToPage: "Vai alla pagina"
}, ys = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース",
  GoToPage: "サイトマップ"
}, _s = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더",
  GoToPage: "바로가기"
}, ks = {}, $s = {}, Ss = {}, Ms = {}, Ds = {}, ws = {}, Bs = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais",
  GoToPage: "Ir para a página"
}, Os = {}, Fs = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer",
  GoToPage: "Перейти на страницу"
}, xs = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka",
  GoToPage: "Prejsť na stránku"
}, Js = {}, As = {}, Ts = {}, Ns = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare",
  GoToPage: "Gå till Page"
}, Ps = {}, Es = {}, zs = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer",
  GoToPage: "Go To Page"
}, Is = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова",
  GoToPage: "Перейти на сторінку"
}, Ls = {}, Vs = {}, ur = {
  en: Qa,
  ar: Xa,
  az: Za,
  bg: es,
  bn: ts,
  ca: as,
  cs: ss,
  da: ns,
  de: ls,
  el: os,
  eo: rs,
  es: is,
  et: us,
  fa: ds,
  fi: cs,
  fr: ps,
  ga: hs,
  he: ms,
  hi: bs,
  hu: fs,
  id: gs,
  it: vs,
  ja: ys,
  ko: _s,
  lt: ks,
  lv: $s,
  ms: Ss,
  nb: Ms,
  nl: Ds,
  pl: ws,
  pt: Bs,
  ro: Os,
  ru: Fs,
  sk: xs,
  sl: Js,
  sq: As,
  sr: Ts,
  sv: Ns,
  th: Ps,
  tl: Es,
  tr: zs,
  uk: Is,
  zh: Ls,
  zt: Vs
}, dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Xa,
  az: Za,
  bg: es,
  bn: ts,
  ca: as,
  cs: ss,
  da: ns,
  de: ls,
  default: ur,
  el: os,
  en: Qa,
  eo: rs,
  es: is,
  et: us,
  fa: ds,
  fi: cs,
  fr: ps,
  ga: hs,
  he: ms,
  hi: bs,
  hu: fs,
  id: gs,
  it: vs,
  ja: ys,
  ko: _s,
  lt: ks,
  lv: $s,
  ms: Ss,
  nb: Ms,
  nl: Ds,
  pl: ws,
  pt: Bs,
  ro: Os,
  ru: Fs,
  sk: xs,
  sl: Js,
  sq: As,
  sr: Ts,
  sv: Ns,
  th: Ps,
  tl: Es,
  tr: zs,
  uk: Is,
  zh: Ls,
  zt: Vs
}, Symbol.toStringTag, { value: "Module" })), Ws = {
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
}, Cs = {
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
}, Rs = {
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
}, Us = {
  Weekdays: {},
  Months: {}
}, js = {
  Weekdays: {},
  Months: {}
}, Hs = {
  Weekdays: {},
  Months: {}
}, Gs = {
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
}, qs = {
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
}, Ys = {
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
}, Ks = {
  Weekdays: {},
  Months: {}
}, Qs = {
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
}, Xs = {
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
}, Zs = {
  Weekdays: {},
  Months: {}
}, en = {
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
}, tn = {
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
}, an = {
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
}, sn = {
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
}, nn = {
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
}, ln = {
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
}, on = {
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
}, rn = {
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
}, un = {
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
}, dn = {
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
}, cn = {
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
}, pn = {
  Weekdays: {},
  Months: {}
}, hn = {
  Weekdays: {},
  Months: {}
}, mn = {
  Weekdays: {},
  Months: {}
}, bn = {
  Weekdays: {},
  Months: {}
}, fn = {
  Weekdays: {},
  Months: {}
}, gn = {
  Weekdays: {},
  Months: {}
}, vn = {
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
}, yn = {
  Weekdays: {},
  Months: {}
}, _n = {
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
}, kn = {
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
}, $n = {
  Weekdays: {},
  Months: {}
}, Sn = {
  Weekdays: {},
  Months: {}
}, Mn = {
  Weekdays: {},
  Months: {}
}, Dn = {
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
}, wn = {
  Weekdays: {},
  Months: {}
}, Bn = {
  Weekdays: {},
  Months: {}
}, On = {
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
}, Fn = {
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
}, xn = {
  Weekdays: {},
  Months: {}
}, Jn = {
  Weekdays: {},
  Months: {}
}, cr = {
  en: Ws,
  ar: Cs,
  az: Rs,
  bg: Us,
  bn: js,
  ca: Hs,
  cs: Gs,
  da: qs,
  de: Ys,
  el: Ks,
  eo: Qs,
  es: Xs,
  et: Zs,
  fa: en,
  fi: tn,
  fr: an,
  ga: sn,
  he: nn,
  hi: ln,
  hu: on,
  id: rn,
  it: un,
  ja: dn,
  ko: cn,
  lt: pn,
  lv: hn,
  ms: mn,
  nb: bn,
  nl: fn,
  pl: gn,
  pt: vn,
  ro: yn,
  ru: _n,
  sk: kn,
  sl: $n,
  sq: Sn,
  sr: Mn,
  sv: Dn,
  th: wn,
  tl: Bn,
  tr: On,
  uk: Fn,
  zh: xn,
  zt: Jn
}, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Cs,
  az: Rs,
  bg: Us,
  bn: js,
  ca: Hs,
  cs: Gs,
  da: qs,
  de: Ys,
  default: cr,
  el: Ks,
  en: Ws,
  eo: Qs,
  es: Xs,
  et: Zs,
  fa: en,
  fi: tn,
  fr: an,
  ga: sn,
  he: nn,
  hi: ln,
  hu: on,
  id: rn,
  it: un,
  ja: dn,
  ko: cn,
  lt: pn,
  lv: hn,
  ms: mn,
  nb: bn,
  nl: fn,
  pl: gn,
  pt: vn,
  ro: yn,
  ru: _n,
  sk: kn,
  sl: $n,
  sq: Sn,
  sr: Mn,
  sv: Dn,
  th: wn,
  tl: Bn,
  tr: On,
  uk: Fn,
  zh: xn,
  zt: Jn
}, Symbol.toStringTag, { value: "Module" })), An = {
  Error: "Error"
}, Tn = {
  Error: "خطأ"
}, Nn = {
  Error: "Qeydiyyat"
}, Pn = {}, En = {}, zn = {}, In = {
  Error: "Čeština"
}, Ln = {
  Error: "Fejl"
}, Vn = {
  Error: "Fehler"
}, Wn = {}, Cn = {
  Error: "Eraro"
}, Rn = {
  Error: "Error"
}, Un = {}, jn = {
  Error: "خطای"
}, Hn = {
  Error: "Virheitä"
}, Gn = {
  Error: "Erreur"
}, qn = {
  Error: "Inis"
}, Yn = {
  Error: "טעות"
}, Kn = {
  Error: "त्रुटि"
}, Qn = {
  Error: "Hiba"
}, Xn = {
  Error: "Login"
}, Zn = {
  Error: "Errore"
}, el = {
  Error: "エラー"
}, tl = {
  Error: "계정"
}, al = {}, sl = {}, nl = {}, ll = {}, ol = {}, rl = {}, il = {
  Error: "Erro"
}, ul = {}, dl = {
  Error: "Ошибка"
}, cl = {
  Error: "Chyba"
}, pl = {}, hl = {}, ml = {}, bl = {
  Error: "Fel"
}, fl = {}, gl = {}, vl = {
  Error: "Hata"
}, yl = {
  Error: "Про"
}, _l = {}, kl = {}, hr = {
  en: An,
  ar: Tn,
  az: Nn,
  bg: Pn,
  bn: En,
  ca: zn,
  cs: In,
  da: Ln,
  de: Vn,
  el: Wn,
  eo: Cn,
  es: Rn,
  et: Un,
  fa: jn,
  fi: Hn,
  fr: Gn,
  ga: qn,
  he: Yn,
  hi: Kn,
  hu: Qn,
  id: Xn,
  it: Zn,
  ja: el,
  ko: tl,
  lt: al,
  lv: sl,
  ms: nl,
  nb: ll,
  nl: ol,
  pl: rl,
  pt: il,
  ro: ul,
  ru: dl,
  sk: cl,
  sl: pl,
  sq: hl,
  sr: ml,
  sv: bl,
  th: fl,
  tl: gl,
  tr: vl,
  uk: yl,
  zh: _l,
  zt: kl
}, mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Tn,
  az: Nn,
  bg: Pn,
  bn: En,
  ca: zn,
  cs: In,
  da: Ln,
  de: Vn,
  default: hr,
  el: Wn,
  en: An,
  eo: Cn,
  es: Rn,
  et: Un,
  fa: jn,
  fi: Hn,
  fr: Gn,
  ga: qn,
  he: Yn,
  hi: Kn,
  hu: Qn,
  id: Xn,
  it: Zn,
  ja: el,
  ko: tl,
  lt: al,
  lv: sl,
  ms: nl,
  nb: ll,
  nl: ol,
  pl: rl,
  pt: il,
  ro: ul,
  ru: dl,
  sk: cl,
  sl: pl,
  sq: hl,
  sr: ml,
  sv: bl,
  th: fl,
  tl: gl,
  tr: vl,
  uk: yl,
  zh: _l,
  zt: kl
}, Symbol.toStringTag, { value: "Module" })), $l = {
  Done: "Done"
}, Sl = {
  Done: "تم"
}, Ml = {
  Done: "Qeydiyyat"
}, Dl = {}, wl = {}, Bl = {}, Ol = {
  Done: "Čeština"
}, Fl = {
  Done: "Done"
}, xl = {
  Done: "KAPITEL"
}, Jl = {}, Al = {
  Done: "Done"
}, Tl = {
  Done: "Hecho"
}, Nl = {}, Pl = {
  Done: "انجام"
}, El = {
  Done: "Tehty"
}, zl = {
  Done: "Done"
}, Il = {
  Done: "Arna"
}, Ll = {
  Done: "נעשה"
}, Vl = {
  Done: "दान"
}, Wl = {
  Done: "A"
}, Cl = {
  Done: "Login"
}, Rl = {
  Done: "Fatto"
}, Ul = {
  Done: "ログイン"
}, jl = {
  Done: "한국어"
}, Hl = {}, Gl = {}, ql = {}, Yl = {}, Kl = {}, Ql = {}, Xl = {
  Done: "Feito"
}, Zl = {}, eo = {
  Done: "Дон"
}, to = {
  Done: "Hotovo"
}, ao = {}, so = {}, no = {}, lo = {
  Done: "Done"
}, oo = {}, ro = {}, io = {
  Done: "Done"
}, uo = {
  Done: "Сонце"
}, co = {}, po = {}, br = {
  en: $l,
  ar: Sl,
  az: Ml,
  bg: Dl,
  bn: wl,
  ca: Bl,
  cs: Ol,
  da: Fl,
  de: xl,
  el: Jl,
  eo: Al,
  es: Tl,
  et: Nl,
  fa: Pl,
  fi: El,
  fr: zl,
  ga: Il,
  he: Ll,
  hi: Vl,
  hu: Wl,
  id: Cl,
  it: Rl,
  ja: Ul,
  ko: jl,
  lt: Hl,
  lv: Gl,
  ms: ql,
  nb: Yl,
  nl: Kl,
  pl: Ql,
  pt: Xl,
  ro: Zl,
  ru: eo,
  sk: to,
  sl: ao,
  sq: so,
  sr: no,
  sv: lo,
  th: oo,
  tl: ro,
  tr: io,
  uk: uo,
  zh: co,
  zt: po
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Sl,
  az: Ml,
  bg: Dl,
  bn: wl,
  ca: Bl,
  cs: Ol,
  da: Fl,
  de: xl,
  default: br,
  el: Jl,
  en: $l,
  eo: Al,
  es: Tl,
  et: Nl,
  fa: Pl,
  fi: El,
  fr: zl,
  ga: Il,
  he: Ll,
  hi: Vl,
  hu: Wl,
  id: Cl,
  it: Rl,
  ja: Ul,
  ko: jl,
  lt: Hl,
  lv: Gl,
  ms: ql,
  nb: Yl,
  nl: Kl,
  pl: Ql,
  pt: Xl,
  ro: Zl,
  ru: eo,
  sk: to,
  sl: ao,
  sq: so,
  sr: no,
  sv: lo,
  th: oo,
  tl: ro,
  tr: io,
  uk: uo,
  zh: co,
  zt: po
}, Symbol.toStringTag, { value: "Module" })), gr = {
  Button: or,
  Filter: ir,
  Pagination: dr,
  Date: pr,
  Form: mr,
  Wizard: fr
}, L = (e, n) => {
  let a = gr[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[n.value] === void 0 ? a = a.en : a = a[n.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, vr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Add", s),
      icon: "plus",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), ho = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Cancel", s),
      icon: "window-close",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), yr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Delete", s),
      icon: "trash-alt",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), _r = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Disable", s),
      icon: "times-circle",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), kr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Download", s),
      icon: "download",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), $r = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Edit", s),
      icon: "edit",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Sr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Enable", s),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), mo = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Okay", s),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Mr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Print", s),
      icon: "print",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), bo = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Refresh", s),
      icon: "sync",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Dr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Save", s),
      icon: "save",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), wr = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = Y(P), l = y(() => ({
      title: L("Button.Upload", s),
      icon: "upload",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), z(Z, K(l.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Br = /* @__PURE__ */ k({
  __name: "check-mark",
  setup(e) {
    return (n, a) => (i(), z(H, {
      icon: "check",
      size: S(oe).small
    }, null, 8, ["size"]));
  }
}), et = async (e, n, a) => {
  let t = await import(e);
  const s = Object.keys(t);
  return n && s.sort(n), s.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, Or = /* @__PURE__ */ k({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = O(null), a = e, t = y(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return W([a.url, a.filter], async () => {
      n.value = await et(a.url, a.sortMethod, t);
    }), re(async () => {
      n.value = await et(a.url, a.sortMethod, t);
    }), (s, l) => (i(!0), p(C, null, G(n.value, (r) => (i(), z(me(r), ce(ye(a.props)), null, 16))), 256));
  }
}), Fr = { class: "control has-icons-left" }, xr = ["placeholder"], Jr = { class: "icon is-small is-left" }, Ar = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = Y(P), l = y(() => L("Filter.Filter", s)), r = O(null);
    W([r], (c) => {
      c[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (c) => {
      c.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return re(() => {
      a.default_value && (r.value = a.default_value);
    }), (c, u) => (i(), p("div", Fr, [
      R(g("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        onKeypress: o
      }, null, 40, xr), [
        [_e, r.value]
      ]),
      g("span", Jr, [
        A(H, { icon: "filter" })
      ])
    ]));
  }
}), Tr = {
  key: 0,
  class: "message-header"
}, Nr = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Pr = { class: "message-body" }, Er = /* @__PURE__ */ k({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  setup(e) {
    const n = e, a = y(() => n.size === X.normal ? null : `is-${n.size}`), t = y(() => `is-${n.type}`);
    return (s, l) => (i(), p("article", {
      class: F(["message", a.value, t.value])
    }, [
      n.title ? (i(), p("div", Tr, [
        g("p", null, J(n.title), 1),
        n.hasDelete ? (i(), p("button", Nr)) : T("", !0)
      ])) : T("", !0),
      g("div", Pr, [
        N(s.$slots, "default", {}, () => [
          Q(J(n.message), 1)
        ])
      ])
    ], 2));
  }
}), pe = /* @__PURE__ */ k({
  __name: "notification",
  props: {
    type: { default: te.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("div", {
      class: F(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      N(a.$slots, "default", {}, () => [
        Q(J(n.message), 1)
      ])
    ], 2));
  }
}), zr = {
  key: 0,
  class: "modal-background"
}, Ir = {
  key: 0,
  class: "title"
}, Lr = { class: "block" }, Vr = /* @__PURE__ */ k({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: te.info },
    message: {},
    header: {},
    blockUser: { type: Boolean },
    hasClose: { type: Boolean },
    isLight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = y(() => {
      switch (a.type) {
        case te.info:
          return "circle-info";
        case te.success:
          return "circle-check";
        case te.danger:
          return "bug";
        case te.warning:
          return "circle-exclamation";
      }
    }), l = y(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (i(), p("div", {
      class: F({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (i(), p("div", zr)) : T("", !0),
      A(ft, {
        incoming: S(Be).fadeIn,
        outgoing: S(Be).fadeOut,
        speed: S(de).slower
      }, {
        default: I(() => [
          a.visible ? (i(), p("div", {
            key: 0,
            class: F(l.value)
          }, [
            A(H, {
              icon: s.value,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (i(), p("h1", Ir, J(a.header), 1)) : T("", !0),
            g("div", Lr, J(a.message), 1),
            a.hasClose ? (i(), z(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (c) => t("close")),
              size: S(oe).large
            }, null, 8, ["size"])) : T("", !0)
          ], 2)) : T("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Wr = ["title", "disabled"], Cr = ["title", "disabled"], Rr = {
  key: 0,
  class: "pagination-list"
}, Ur = {
  key: 0,
  class: "pagination-ellipsis"
}, jr = ["aria-label", "onOnclick"], Hr = /* @__PURE__ */ k({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: !0 },
    hasprevious: { type: Boolean, default: !0 },
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    buttontype: {},
    totalpages: {},
    currentpage: { default: 1 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = Y(P), l = y(() => L(a.usenext ? "Pagination.Previous" : "Pagination.Older", s)), r = y(() => L(a.usenext ? "Pagination.Next" : "Pagination.Newer", s)), o = y(() => a.buttontype ? `has-background-${a.buttontype}` : ""), c = y(() => L("Pagination.GoToPage", s)), u = y(() => a.hasprevious ?? !0), h = y(() => a.hasmore ?? !0), d = y(() => {
      if (a.totalpages === void 0)
        return [];
      if (a.totalpages > 5) {
        let m = a.currentpage === void 0 ? Math.floor(a.totalpages / 2) : a.currentpage;
        return [
          1,
          -1,
          m - 1,
          m,
          m + 1,
          -1,
          a.totalpages
        ];
      } else {
        let m = [];
        for (let E = 1; E <= a.totalpages; E++)
          m.push(E);
        return m;
      }
    }), b = function() {
      u || t("moveBack");
    }, M = function() {
      h || t("moveForward");
    }, B = function(m) {
      t("goToPage", m);
    };
    return (m, E) => R((i(), p("nav", {
      class: F(["pagination", "is-centered", o.value, `is-${a.size}`, a.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: F(["pagination-previous", o.value]),
        title: l.value,
        onClick: b,
        disabled: u.value
      }, [
        A(H, {
          icon: "backward",
          size: S(oe).small
        }, null, 8, ["size"]),
        Q(" " + J(l.value), 1)
      ], 10, Wr),
      g("a", {
        class: F(["pagination-next", o.value]),
        title: r.value,
        onClick: M,
        disabled: h.value
      }, [
        Q(J(r.value) + " ", 1),
        A(H, {
          icon: "forward",
          size: S(oe).small
        }, null, 8, ["size"])
      ], 10, Cr),
      a.totalpages !== void 0 ? (i(), p("ul", Rr, [
        (i(!0), p(C, null, G(d.value, (_) => (i(), p("li", null, [
          _ === -1 ? (i(), p("span", Ur, "…")) : (i(), p("a", {
            key: 1,
            class: F(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === a.currentpage ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${c.value} ${_}`,
            onOnclick: (v) => B(_)
          }, J(_ === -1 ? "" : _), 43, jr))
        ]))), 256))
      ])) : T("", !0)
    ], 2)), [
      [le, a.hasmore || a.hasprevious]
    ]);
  }
});
function be(e) {
  return typeof e == "function" ? e() : S(e);
}
function Gr(e, n = 200) {
  const a = O(!1), t = O(!1), s = y(() => !a.value && !t.value), l = O(!1), r = O(), o = O(), c = y(() => {
    if (e != null) {
      let h = be(e);
      return h instanceof Promise ? h : new Promise((d) => d(h));
    }
    return null;
  });
  let u;
  return W(
    () => be(c),
    (h) => {
      if (a.value = !1, t.value = !1, r.value = null, !h) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const d = Number(be(n)) || 0;
      d > 0 ? (l.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        l.value = !0;
      }, d)) : l.value = !0, h.then((b) => {
        h === be(c) && (o.value = be(b), t.value = !0);
      }).catch((b) => {
        h === be(c) && (r.value = b, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: s, isRejected: a, isResolved: t, isDelayElapsed: l, error: r, data: o };
}
const he = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, a = Y(P), t = y(() => L("Form.Error", a)), s = zo(n), l = nt(Gr(s.promise, s.pendingDelay));
    return (r, o) => (i(), p(C, null, [
      l.isDelayElapsed && !l.isRejected && !l.isResolved ? N(r.$slots, "pending", {
        key: 0,
        response: l.data
      }, () => [
        A(S(ie), {
          size: S(X).small
        }, null, 8, ["size"])
      ]) : T("", !0),
      l.isRejected ? N(r.$slots, "rejected", ce(K({ key: 1 }, l.error)), () => [
        A(S(pe), {
          message: `${t.value}:${l.error.message ?? l.error.toString()}`,
          type: S(te).danger
        }, null, 8, ["message", "type"])
      ]) : T("", !0),
      l.isResolved ? N(r.$slots, "default", {
        key: 2,
        response: l.data
      }) : T("", !0)
    ], 64));
  }
}), qr = ["value", "max"], ie = /* @__PURE__ */ k({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, a = y(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (t, s) => (i(), p("progress", {
      class: F(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, J(a.value ? `${a.value}%` : null), 11, qr));
  }
}), Yr = ["href"], Kr = {
  key: 0,
  class: "icon-text"
}, Qr = { class: "icon" }, Xr = { key: 1 }, Zr = {
  key: 2,
  class: "navbar-dropdown"
}, tt = /* @__PURE__ */ k({
  __name: "navbar-item",
  props: {
    childItems: {},
    title: {},
    active: { type: Boolean, default: !1 },
    icon: {},
    href: {},
    onClick: {}
  },
  emits: ["itemClicked"],
  setup(e, { emit: n }) {
    const a = e, t = () => {
      s("itemClicked"), a.onClick !== void 0 && a.onClick();
    }, s = n;
    return (l, r) => {
      const o = lt("navbar-item", !0);
      return i(), p("a", {
        class: F(["navbar-item", a.active ? "is-active" : "", a.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: a.href,
        onClick: t
      }, [
        a.icon !== void 0 && a.icon !== null ? (i(), p("span", Kr, [
          g("span", Qr, [
            A(H, {
              icon: a.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, J(a.title), 1)
        ])) : (i(), p("span", Xr, J(a.title), 1)),
        a.childItems !== void 0 ? (i(), p("div", Zr, [
          (i(!0), p(C, null, G(a.childItems, (c) => (i(), z(o, K(c, {
            onItemClicked: r[0] || (r[0] = (u) => s("itemClicked"))
          }), null, 16))), 256))
        ])) : T("", !0)
      ], 10, Yr);
    };
  }
}), ei = ["aria-label"], ti = { class: "navbar-brand" }, ai = ["aria-expanded"], si = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), ni = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), li = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), oi = [
  si,
  ni,
  li
], ri = {
  key: 0,
  class: "navbar-start"
}, ii = { style: { width: "100px" } }, ui = {
  key: 1,
  class: "navbar-end"
}, di = { style: { width: "100px" } }, ci = /* @__PURE__ */ k({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const n = e, a = O(!1);
    return re(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case Fe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Fe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (t, s) => (i(), p("nav", {
      class: F(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      g("div", ti, [
        N(t.$slots, "brand"),
        g("a", {
          role: "button",
          class: F(["navbar-burger", a.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": a.value ? "true" : "false",
          onClick: s[0] || (s[0] = (l) => a.value = !a.value)
        }, oi, 10, ai)
      ]),
      g("div", {
        class: F(["navbar-menu", a.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (i(), p("div", ri, [
          A(he, {
            promise: n.startItems
          }, {
            default: I(({ response: l }) => [
              (i(!0), p(C, null, G(l, (r) => (i(), z(tt, K(r, {
                onItemClicked: s[1] || (s[1] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              g("div", ii, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0),
        n.endItems !== void 0 ? (i(), p("div", ui, [
          A(he, {
            promise: n.endItems
          }, {
            default: I(({ response: l }) => [
              (i(!0), p(C, null, G(l, (r) => (i(), z(tt, K(r, {
                onItemClicked: s[2] || (s[2] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              g("div", di, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0)
      ], 2)
    ], 10, ei));
  }
}), pi = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("aside", {
      class: F(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), hi = { class: "menu-label" }, mi = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("p", hi, [
      Q(J(n.message) + " ", 1),
      N(a.$slots, "default")
    ]));
  }
}), bi = ["href"], fi = {
  key: 0,
  class: "icon-text"
}, gi = { class: "icon" }, vi = { key: 1 }, fo = /* @__PURE__ */ k({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const n = e, a = () => {
      n.onClick !== void 0 && n.onClick();
    };
    return (t, s) => (i(), p("li", null, [
      g("a", {
        href: n.href,
        onClick: s[0] || (s[0] = (l) => a()),
        class: F(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (i(), p("span", fi, [
          g("span", gi, [
            A(H, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, J(n.title), 1)
        ])) : (i(), p("span", vi, J(n.title), 1)),
        N(t.$slots, "default")
      ], 10, bi),
      N(t.$slots, "children")
    ]));
  }
}), yi = { class: "menu-list" }, _i = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => {
      const s = lt("menu-list", !0);
      return i(), p("ul", yi, [
        n.items !== null ? (i(), z(he, {
          key: 0,
          promise: n.items
        }, {
          default: I(({ response: l }) => [
            (i(!0), p(C, null, G(l, (r) => (i(), p("li", null, [
              A(fo, ce(ye(r)), null, 16),
              r.childItems !== void 0 ? (i(), z(s, {
                key: 0,
                items: r.childItems
              }, null, 8, ["items"])) : T("", !0)
            ]))), 256))
          ]),
          pending: I(() => [
            g("li", null, [
              A(ie, {
                size: S(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : T("", !0),
        N(a.$slots, "default")
      ]);
    };
  }
}), ki = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Re.topRight },
    text: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("span", {
      class: F(["badge", `is-${n.position}`])
    }, [
      Q(J(n.text) + " ", 1),
      N(a.$slots, "default")
    ], 2));
  }
}), $i = /* @__PURE__ */ k({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    hasArrow: { type: Boolean, default: !1 },
    position: { default: Ue.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    alwaysActive: { type: Boolean, default: !1 },
    textAlign: { default: je.left }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), z(me(a.is), {
      class: F([
        n.hasArrow ? "has-tooltop-arrow" : "",
        n.position ? `has-tooltip-${n.position}` : "",
        n.multiline ? "has-tooltip-multiline" : "",
        n.type ? `has-tooltip-${n.type}` : "",
        n.textAlign ? `has-tooltip-text-${n.text}` : "",
        n.alwaysActive ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": a.text
    }, {
      default: I(() => [
        N(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Si = /* @__PURE__ */ k({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: X.normal },
    isDelete: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, a = y(() => {
      let t = ["tag", `is-${n.type}`, `is-${n.size}`];
      return n.light && t.push("is-light"), n.rounded && t.push("is-rounded"), n.isDelete && t.push("is-delete"), t;
    });
    return (t, s) => (i(), p("span", {
      class: F(a.value)
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Mi = /* @__PURE__ */ k({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("span", {
      class: F(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), Di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ft,
  Badge: ki,
  Button: Z,
  ButtonAdd: vr,
  ButtonCancel: ho,
  ButtonDelete: yr,
  ButtonDisable: _r,
  ButtonDownload: kr,
  ButtonEdit: $r,
  ButtonEnable: Sr,
  ButtonOkay: mo,
  ButtonPrint: Mr,
  ButtonRefresh: bo,
  ButtonSave: Dr,
  ButtonUpload: wr,
  CheckMark: Br,
  DynamicSlot: Or,
  Filter: Ar,
  Icon: H,
  Menu: pi,
  MenuEntry: fo,
  MenuLabel: mi,
  MenuList: _i,
  Message: Er,
  NavBar: ci,
  Notification: pe,
  PageNotification: Vr,
  Pagination: Hr,
  Progress: ie,
  Promised: he,
  Tag: Si,
  Tags: Mi,
  ToolTip: $i
}, Symbol.toStringTag, { value: "Module" })), wi = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const a = n, t = e, s = O(!1), l = O(!1), r = O(null), o = y(() => (t.disabled ?? !1) || l.value && t.handlesearch !== null), c = y(() => {
      let d = [];
      return o || d.push("has-cursor"), s.value ? d.push("is-move") : d.push("is-grab"), d;
    }), u = (d) => o.value ? (d.preventDefault(), !1) : (d.stopPropagation(), d.dataTransfer.setData("value", JSON.stringify(t.CopyData)), s.value = !0, a("started"), !0), h = () => {
      s.value = !1, l.value = !0, a("stopped");
    };
    return re(() => {
      if (t.handlesearch) {
        let d = $(r.value).find(t.handlesearch);
        d.length > 0 && (l.value = !0, d.on("mousedown", () => l.value = !1), d.on("mouseup", () => l.value = !0));
      }
    }), (d, b) => (i(), z(me(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: F(c.value)
    }, {
      default: I(() => [
        N(d.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Bi = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = O(!1), l = O(null), r = O(null);
    y(() => a.tag ?? "div");
    const o = (b) => {
      const M = r.value.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let m = ee.center;
      return b.x < B.x ? b.y < B.y ? m = ee.topLeft : m = ee.bottomLeft : b.y < B.y ? m = ee.topRight : m = ee.bottomRight, l.value = m, l.value;
    }, c = (b) => {
      b.preventDefault(), s.value = !0, t("itemEntered", o(b));
    }, u = (b) => {
      s.value = !0, t("itemExited", o(b));
    }, h = (b) => {
      b.preventDefault(), t("itemMoved", o(b));
    }, d = (b) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(b.dataTransfer.getData("value"))))
        return !1;
      b.stopPropagation(), b.preventDefault(), t("itemAdded", JSON.parse(b.dataTransfer.getData("value")), l.value), s.value = !1;
    };
    return (b, M) => (i(), z(me(a.tag), {
      ref_key: "handle",
      ref: r,
      class: F({ "is-bordered": s.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: d,
      onDragover: h
    }, {
      default: I(() => [
        N(b.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), go = /* @__PURE__ */ k({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const n = e, a = y(() => {
      var t = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && t.push("is-small"), n.outlined && t.push("is-outlined"), n.highlighted && t.push("is-highlighted"), t;
    });
    return (t, s) => (i(), z(me(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: F(a.value)
    }, {
      default: I(() => [
        N(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), De = /* @__PURE__ */ k({
  __name: "list-item",
  props: {
    type: {},
    outlined: { type: Boolean },
    highlighted: { type: Boolean },
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = y(() => {
      var l = [];
      return a.type && l.push("is-" + a.type), a.outlined && l.push("is-outlined"), a.highlighted && l.push("is-highlighted"), a.icon && l.push("has-icon"), l;
    });
    return (l, r) => (i(), p("li", {
      class: F(s.value)
    }, [
      a.icon ? (i(), p("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        A(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      N(l.$slots, "default")
    ], 2));
  }
}), Oi = /* @__PURE__ */ k({
  __name: "sortable",
  props: {
    Items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = O([]), l = O(-1), r = O(-1), o = O(null);
    W(a.Items, (b, M) => {
      s.value = [...M];
    }), re(() => {
      a.Items !== null && (s.value = [...a.Items]);
    });
    const c = (b) => {
      var M = b.target.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let m = ee.center;
      return b.y < B.y ? m = ee.top : m = ee.bottom, m;
    }, u = (b, M) => {
      M.stopPropagation(), l.value = b, M.dataTransfer.setData("value", null);
    }, h = (b, M) => {
      l.value && (M.stopPropagation(), b != l.value ? (r.value = b, o.value = c(M)) : (r.value = -1, o.value = null));
    }, d = (b) => {
      if (l.value) {
        b.stopPropagation();
        var M = r.value + (o.value == ee.top ? 0 : 1), B = s.value.splice(M, 1)[0];
        M >= l.value && M--, s.value.splice(M, 0, B), r.value = -1, o.value = null, l.value = -1, t("sorted", s.value);
      }
    };
    return (b, M) => (i(), z(go, {
      type: b.type,
      compact: b.compact,
      outlined: b.outlined,
      highlighted: b.highlighted,
      onDrop: d
    }, {
      default: I(() => [
        (i(!0), p(C, null, G(s.value, (B, m) => (i(), p(C, null, [
          R(A(De, null, {
            default: I(() => [
              A(pe, { light: !0 }, {
                default: I(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === m && l.value !== m && o.value === S(ee).top]
          ]),
          A(De, {
            draggable: "true",
            onDragstart: (E) => u(m, E),
            onDragend: M[0] || (M[0] = (E) => l.value = null),
            onDragover: (E) => h(m, E),
            class: F({ "has-cursor": !0, "is-move": r.value == m, "is-grab": r.value != m })
          }, {
            default: I(() => [
              N(b.$slots, "item", {
                item: B,
                index: m
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          R(A(De, null, {
            default: I(() => [
              A(pe, { light: !0 }, {
                default: I(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === m && l.value !== m && o.value === S(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: wi,
  DropZone: Bi,
  Sortable: Oi
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ge = "DisabledFields", xi = (e) => e, ne = (e, n) => {
  const a = n("Translate", xi);
  return y(() => e.translate ?? a);
};
function qe(e, n) {
  const a = n(He), t = n(Ge), s = y(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), l = y(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: s, disabledValues: l };
}
const vo = (e) => {
  let n = [], a = [], t = 0;
  return e.forEach((s) => {
    let l = s.form_columns ?? 12;
    t + l > 12 && (n.push(a), a = [], t = 0), a.push(s), t += l, t === 12 && (n.push(a), a = [], t = 0);
  }), a.length > 0 && n.push(a), n;
};
async function Ye(e) {
  let n = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? n = a : n = Promise.resolve(a);
  let t = await n, s = [];
  return t.value !== void 0 ? s = t.value : s = t, s;
}
const Ji = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Ai = { class: "control" }, Ti = { class: "tags has-addons" }, Ni = { class: "tag is-link" }, Pi = ["onClick"], Ei = { key: 0 }, zi = ["placeholder"], Ii = { class: "dropdown-menu" }, Li = { class: "dropdown-content" }, Vi = ["onClick"], Wi = {
  key: 1,
  class: "dropdown-item"
}, yo = /* @__PURE__ */ k({
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
  setup(e, { expose: n, emit: a }) {
    const t = a, s = e, l = ne(s, P), r = O([]), o = O(null), c = O(null), u = O(null), h = O(null);
    W(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (s.values != null && s.values != null) {
            let V = [];
            for (let f = 0; f < s.values.length && ((s.values[f].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || s.values[f].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && V.push(s.values[f]), V.length != 10); f++)
              ;
            c.value = V;
          } else {
            let f = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            f.length > 10 && f.splice(10, f.length - 10), c.value = f;
          }
      } else
        c.value = null, $(h.value).empty();
    });
    const d = () => {
      if (r.value.length == 0)
        return null;
      const w = r.value.slice();
      return s.limit != null && s.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, b = async (w) => {
      if (w == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const V = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (f) => {
            if (f.id !== void 0 && f.name !== void 0)
              return f;
            {
              let D = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${f.id === void 0 ? "q=" + encodeURIComponent(f) : "id=" + encodeURIComponent(f.id)}`)).json();
              return D.length > 0 ? (s.disabled && (D[0].readonly = !0), D[0]) : null;
            }
          })
        );
        r.value = V.filter((f) => f !== null), t("value_changed", { name: s.name, value: d() });
      }
    }, M = (w) => {
      w.preventDefault(), o.value = w.clipboardData.getData("text/plain");
    }, B = (w) => {
      switch (w.key) {
        case "Backspace":
          o.value != null && o.value.length > 0 && (o.value = o.value.substring(0, o.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          w.key.length == 1 && (o.value = (o.value == null ? "" : o.value) + w.key);
          break;
      }
    }, m = () => {
      o.value = null;
    }, E = () => {
      h.value.focus();
    }, _ = (w) => {
      r.value.push(w), m(), t("value_changed", { name: s.name, value: d() });
    }, v = (w) => {
      r.value.splice(w, 1), E(), t("value_changed", { name: s.name, value: d() });
    };
    return n({ getValue: d, setValue: b }), (w, V) => (i(), p("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: E
    }, [
      g("div", Ji, [
        (i(!0), p(C, null, G(r.value, (f, ae) => (i(), p("div", Ai, [
          g("div", Ti, [
            g("a", Ni, J(S(l)(f.name)), 1),
            f.readonly ? T("", !0) : (i(), p("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (D) => v(ae)
            }, null, 8, Pi))
          ])
        ]))), 256)),
        s.disabled ? T("", !0) : (i(), p("div", Ei, [
          R(g("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: S(l)(s.title ?? ""),
            contenteditable: "",
            class: F(u.value),
            onFocus: V[0] || (V[0] = (f) => {
              u.value = "is-focused";
            }),
            onBlur: V[1] || (V[1] = (f) => {
              u.value = null;
            }),
            onKeydown: B,
            onPaste: M
          }, null, 42, zi), [
            [le, r.value.length < s.limit || s.limit == null]
          ])
        ]))
      ]),
      g("div", {
        class: F(["dropdown", { "is-active": c.value != null && o.value != null && o.value != "" }])
      }, [
        g("div", Ii, [
          g("div", Li, [
            c.value != null && c.value.length > 0 ? (i(!0), p(C, { key: 0 }, G(c.value, (f) => (i(), p("a", {
              class: "dropdown-item",
              onClick: (ae) => _(f)
            }, J(S(l)(f.name)), 9, Vi))), 256)) : (i(), p("a", Wi, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Ee = /* @__PURE__ */ k({
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
  setup(e, { emit: n }) {
    const a = e, t = n, s = ne(a, P);
    return (l, r) => (i(), z(Z, {
      type: l.sstyle,
      icon: a.icon ? a.icon : null,
      title: S(s)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Ci = { class: "checkbox is-block" }, Ri = ["value", "disabled"], _o = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = Y(P), l = y(() => L("Form.Error", s)), r = a, o = ne(t, P), c = O([]), u = O(!1), h = y(async () => {
      if (t.values == null)
        return [];
      {
        let m = await Ye(t.values), E = m.filter((_) => _.selected).map((_) => _.value);
        return c.value === null || c.value.length == 0 ? c.value = E.length > 0 ? [...E] : [] : (E = c.value, m = m.map((_) => ({
          label: _.label,
          value: _.value,
          selected: E.some((v) => v === _.value)
        }))), m;
      }
    });
    W(c, (m) => {
      r("value_changed", { name: t.name, value: d() });
    });
    const d = () => c.value.length == 0 ? null : c.value, b = (m) => {
      u.value = !0, c.value.splice(0), m !== null && (c.value = [...m]), u.value = !1, r("value_changed", { name: t.name, value: d() });
    }, { hiddenValues: M, disabledValues: B } = qe(t.name, P);
    return n({ getValue: d, setValue: b }), (m, E) => (i(), p("div", null, [
      A(he, { promise: h.value }, {
        default: I(({ response: _ }) => [
          _ !== null ? (i(!0), p(C, { key: 0 }, G(_, (v) => R((i(), p("label", Ci, [
            R(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": E[0] || (E[0] = (w) => c.value = w),
              disabled: t.disabled || S(B).some((w) => w === v.value.toString())
            }, null, 8, Ri), [
              [Le, c.value]
            ]),
            Q(" " + J(S(o)(v.label)), 1)
          ], 512)), [
            [le, !S(M).some((w) => w === v.value.toString())]
          ])), 256)) : T("", !0)
        ]),
        pending: I(() => [
          A(S(ie))
        ]),
        rejected: I(() => [
          A(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Ui = { class: "checkbox" }, ji = ["name", "disabled"], Hi = {
  key: 0,
  class: "help is-danger"
}, ko = /* @__PURE__ */ k({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = ne(t, P), r = y(() => l.value(t.label)), o = O(!1);
    return W(o, (h) => s("value_changed", { name: t.name, value: h })), n({ getValue: () => o.value, setValue: (h) => {
      o.value = h;
    } }), (h, d) => (i(), p("label", Ui, [
      R(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (b) => o.value = b)
      }, null, 8, ji), [
        [Le, o.value]
      ]),
      Q(" " + J(r.value) + " ", 1),
      t.required ? (i(), p("span", Hi, "*")) : T("", !0)
    ]));
  }
}), Pe = (e, n) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + n), a;
}, j = (e, n, a) => {
  let t = e;
  for (; t.length < a; )
    t = n + t;
  return t;
}, $e = (e, n, a) => {
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
      t += `${L("Date.Weekdays." + (e.length > 3 ? l : l.substring(0, 3)), n)}`;
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
      let r = a.getTimezoneOffset() * -1, o = parseInt((r / 60).toFixed(0)), c = r - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${o < 0 ? "-" : "+"}${j(Math.abs(o).toString(), "0", 2) + ":" + j(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          t += `${o < 0 ? "-" : "+"}${j(Math.abs(o).toString(), "0", e.length)}`;
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
      let u = "";
      switch (a.getMonth()) {
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
      t += `${L("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), n)}`;
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
      for (var s = a.getFullYear().toString(); s.length > 2; )
        s = s.substring(1);
      t += `${j(s.toString(), "0", e.length)}`;
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
}, fe = (e, n, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", s = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        s != "" && (t += $e(s, n, e), s = ""), t += a.charAt(l + 1), l++;
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
        s != "" && s.charAt(0) != a.charAt(l) ? (t += $e(s, n, e), s = "") : s += a.charAt(l);
        break;
      default:
        s != "" && (t += $e(s, n, e), s = ""), t += a.charAt(l);
        break;
    }
  return s != "" && (t += $e(s, n, e), s = ""), t;
}, Gi = { class: "control" }, qi = ["name", "id", "disabled"], at = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ke = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = O(null), r = y(() => {
      if (l.value == null || l.value == "")
        return null;
      var u = Number(l.value.substring(3, 5)), h = Number(l.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return W(l, (u) => {
      s("value_changed", { name: t.name, value: u });
    }), n({ getValue: () => l.value, setValue: (u) => {
      if (u != null && at.test(u)) {
        var h = at.exec(u);
        u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      l.value = u;
    } }), (u, h) => (i(), p("div", Gi, [
      R(g("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (d) => l.value = d),
        disabled: t.disabled,
        style: Ve(r.value)
      }, null, 12, qi), [
        [_e, l.value]
      ])
    ]));
  }
});
const Yi = { class: "control has-icons-left has-icons-right" }, Ki = ["name", "id", "placeholder", "disabled"], Qi = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), Xi = { class: "modal-content" }, Zi = { class: "panel is-primary is-dateselect" }, eu = { class: "panel-heading" }, tu = { class: "columns card-header-title" }, au = { class: "column" }, su = { class: "column has-text-centered" }, nu = { class: "column has-text-right" }, lu = { class: "panel-block" }, ou = { class: "table is-striped has-text-centered" }, ru = ["onClick"], iu = { key: 0 }, uu = {
  colspan: "100%",
  class: "has-text-centered"
}, du = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), $o = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = O(null), s = e, l = a, r = O(!1), o = O(null), c = O(null), u = nt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = Y(P), d = we({
      Sun: y(() => L("Date.Weekdays.Sun", h)),
      Mon: y(() => L("Date.Weekdays.Mon", h)),
      Tue: y(() => L("Date.Weekdays.Tue", h)),
      Wed: y(() => L("Date.Weekdays.Wed", h)),
      Thu: y(() => L("Date.Weekdays.Thu", h)),
      Fri: y(() => L("Date.Weekdays.Fri", h)),
      Sat: y(() => L("Date.Weekdays.Sat", h))
    }), b = y(() => o.value !== null && (s.includeTime ? Se : ke).test(o.value)), M = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!Se.test(o.value) && s.includeTime)
          return null;
        if (!s.includeTime && !ke.test(o.value))
          return null;
        if (ke.test(o.value) && s.includeTime)
          return null;
        let D = s.includeTime ? Se.exec(o.value) : ke.exec(o.value);
        return new Date(
          parseInt(D[3]),
          parseInt(D[2]) - 1,
          parseInt(D[1]),
          s.includeTime ? parseInt(D[4]) : 0,
          s.includeTime ? parseInt(D[5]) : 0,
          0,
          0
        );
      }
    };
    W(o, (D) => {
      if (D == null)
        l("value_changed", { name: s.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(D) && !Se.test(D)) {
        D = D.replaceAll(/[^0-9]/g, "");
        for (var x = [], U = 0; U < D.length; U += 2)
          U == 4 ? (x.push(D.substring(U, Math.min(D.length - U, 4) + U)), U += 2) : x.push(D.substring(U, Math.min(D.length - U, 2) + U));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), D = x.join(""), !s.includeTime && D.length > 8 && (D = D.substring(0, 8)), D.length >= 2 && (D = D.substring(0, 2) + "-" + (D.length > 2 ? D.substring(2) : "")), D.length >= 5 && (D = D.substring(0, 5) + "-" + (D.length > 5 ? D.substring(5) : "")), D.length >= 9 && s.includeTime && (D = D.substring(0, 9) + " " + (D.length > 9 ? D.substring(9) : "")), D.length >= 11 && (D = D.substring(0, 11) + ":" + (D.length > 11 ? D.substring(11) : "")), o.value = D;
      } else {
        var se = M();
        b && l("value_changed", { name: s.name, value: se }), u.Month = se.getMonth(), u.Year = se.getFullYear();
      }
    });
    const B = y(() => fe(new Date(u.Year, u.Month, 1), h, "MMMM")), m = y(() => {
      var D = [], x = new Date(u.Year, u.Month, 1);
      x = Pe(x, x.getDay() * -1);
      for (var U = M(), se = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); x.getMonth() != se; ) {
        for (var Ae = [], Qe = 0; Qe < 7; Qe++)
          Ae.push({
            Number: x.getDate(),
            Disabled: x.getMonth() != u.Month,
            isToday: fe(x, h, "yyyy-MM-dd") == fe(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: U != null && fe(x, h, "yyyy-MM-dd") == fe(U, h, "yyyy-MM-dd")
          }), x = Pe(x, 1);
        D.push(Ae);
      }
      return D;
    });
    n({ getValue: M, setValue: function(D) {
      D == null ? o.value = null : o.value = fe(D, h, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
    } });
    const _ = (D) => {
      D.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + D.value : o.value = `${j((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year} ${D.value}`;
    }, v = (D) => {
      if (!D.Disabled && !D.isSelected)
        if (o.value === null)
          o.value = `${j(D.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (s.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var x = o.value.split(" ");
          x[0] = `${j(D.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}`, o.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      o.value = c.value, r.value = !1;
    }, V = () => {
      s.disabled || (c.value = o.value, r.value = !0);
    }, f = () => {
      s.disabled || (o.value = null);
    }, ae = (D) => {
      u.Month + D == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + D == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += D;
    };
    return (D, x) => (i(), p("div", null, [
      g("div", Yi, [
        R(g("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (U) => o.value = U),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, Ki), [
          [_e, o.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: V
        }, [
          A(S(H), { icon: "calendar-alt" })
        ]),
        g("span", {
          class: "icon is-small is-right is-clickable",
          onClick: f
        }, [
          A(S(H), { icon: "window-close" })
        ])
      ]),
      g("div", {
        class: F(["modal", { "is-active": r.value }])
      }, [
        Qi,
        g("div", Xi, [
          g("div", Zi, [
            g("div", eu, [
              g("div", tu, [
                g("div", au, [
                  A(S(H), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (U) => ae(-1))
                  })
                ]),
                g("div", su, J(B.value) + " " + J(u.Year), 1),
                g("div", nu, [
                  A(S(H), {
                    icon: "arrow-circle-right",
                    onClick: x[2] || (x[2] = (U) => ae(1))
                  })
                ])
              ])
            ]),
            g("div", lu, [
              g("table", ou, [
                g("thead", null, [
                  g("tr", null, [
                    g("th", null, J(S(d).Sun), 1),
                    g("th", null, J(S(d).Mon), 1),
                    g("th", null, J(S(d).Tue), 1),
                    g("th", null, J(S(d).Wed), 1),
                    g("th", null, J(S(d).Thu), 1),
                    g("th", null, J(S(d).Fri), 1),
                    g("th", null, J(S(d).Sat), 1)
                  ])
                ]),
                g("tbody", null, [
                  (i(!0), p(C, null, G(m.value, (U) => (i(), p("tr", null, [
                    (i(!0), p(C, null, G(U, (se) => (i(), p("td", {
                      class: F(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ae) => v(se)
                    }, J(se.Number), 11, ru))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (i(), p("tfoot", iu, [
                  g("tr", null, [
                    g("td", uu, [
                      A(Ke, {
                        ref: t.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValue_changed: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : T("", !0)
              ])
            ]),
            g("div", du, [
              A(S(mo), {
                addonclass: "card-footer-item",
                disabled: !b.value,
                onClick: x[3] || (x[3] = (U) => r.value = !1)
              }, null, 8, ["disabled"]),
              A(S(ho), {
                addonclass: "card-footer-item",
                onClick: w
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
});
const So = /* @__PURE__ */ k({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: a }) {
    let t, s;
    const l = Go(P);
    xe([`${l}summernote-lite.min.css`]), [t, s] = Io(() => import(`${l}summernote`)), await t, s();
    const r = O(null), o = e, c = a;
    return W([o.disabled], (d) => {
      r.value != null && $(r.value).summernote(d ? "disable" : "enable");
    }), n({ getValue: () => $(r.value).summernote("code"), setValue: (d) => {
      $(r.value).summernote("code", d);
    } }), re(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(d) {
            c("value_changed", { name: o.name, value: d });
          }
        }
      }), (o.disabled ?? !1) && $(r.value).summernote("disable");
    }), Lo(() => {
      $(r.value).summernote("destroy");
    }), (d, b) => (i(), p("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
    }, null, 512));
  }
}), ze = /* @__PURE__ */ k({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, P);
    return (t, s) => (i(), z(me(n.subtype), null, {
      default: I(() => [
        Q(J(S(a)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), cu = ["name"], Mo = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = O(null);
    return W(l, (c) => s("value_changed", { name: t.name, value: c })), n({ getValue: () => l.value, setValue: (c) => {
      l.value = c;
    } }), (c, u) => R((i(), p("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h)
    }, null, 8, cu)), [
      [_e, l.value]
    ]);
  }
}), pu = ["name", "disabled", "min", "max", "step"], Do = /* @__PURE__ */ k({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = O(null), r = () => {
      if (l.value === "")
        return null;
      let c = parseInt(l.value);
      return t.min !== void 0 && c < t.min * 1 || t.max !== void 0 && c > t.max * 1 ? null : c;
    }, o = (c) => {
      l.value = c === null ? "" : c.toString();
    };
    return W([l], (c) => s("value_changed", { name: t.name, value: r() })), n({ getValue: r, setValue: o }), (c, u) => R((i(), p("input", {
      type: "number",
      class: "input",
      name: c.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h),
      disabled: c.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, pu)), [
      [_e, l.value]
    ]);
  }
}), hu = ["id"], Ie = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, P);
    return (t, s) => (i(), p("p", {
      id: n.name
    }, J(S(a)(n.label)), 9, hu));
  }
}), mu = { class: "radio" }, bu = ["name", "value", "disabled"], fu = /* @__PURE__ */ g("br", null, null, -1), wo = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = Y(P), l = y(() => L("Form.Error", s)), r = a, o = ne(t, P), c = O(null), u = function() {
      return c.value;
    };
    W(c, (B) => {
      r("value_changed", { name: t.name, value: u() });
    });
    const h = y(async () => {
      if (t.values == null)
        return [];
      {
        let B = await Ye(t.values);
        return c.value === null && B.some((m) => m.selected) && (c.value = B.find((m) => m.selected).value), B.map((m) => ({
          label: m.label,
          value: m.value,
          selected: c.value === m.value
        }));
      }
    }), d = (B) => {
      c.value = B;
    }, { hiddenValues: b, disabledValues: M } = qe(t.name, P);
    return n({ getValue: u, setValue: d }), (B, m) => (i(), p("div", null, [
      A(he, { promise: h.value }, {
        default: I(({ response: E }) => [
          B.values != null ? (i(!0), p(C, { key: 0 }, G(E, (_) => (i(), p(C, null, [
            R(g("label", mu, [
              g("input", {
                type: "radio",
                name: t.name,
                value: _.value,
                class: "radio",
                disabled: t.disabled || S(M).some((v) => v === _.value.toString())
              }, null, 8, bu),
              Q(" " + J(S(o)(_.label)), 1)
            ], 512), [
              [le, !S(b).some((v) => v === _.value.toString())]
            ]),
            fu
          ], 64))), 256)) : T("", !0)
        ]),
        pending: I(() => [
          A(S(ie))
        ]),
        rejected: I(() => [
          A(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), gu = { class: "select" }, vu = ["id", "name", "multiple", "disabled"], yu = ["value", "selected", "disabled"], _u = ["label"], ku = ["value", "selected", "disabled"], Bo = (e, n, a) => {
  let t = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, s = a.length;
  return a.push(t), n.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = Bo(t.label, l, a);
  }), a[s].values.length == 0 && a.splice(s, 1), a;
}, Oo = /* @__PURE__ */ k({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = Y(P), l = y(() => L("Form.Error", s)), r = a, o = ne(t, P), c = O(null), u = O(!1), h = y(async () => {
      if (t.values == null)
        return [];
      {
        let m = await Ye(t.values), E = m.filter((v) => v.selected).map((v) => v.value);
        m.some((v) => v.values !== void 0) && m.filter((v) => v.values !== void 0).forEach((v) => {
          E = E.concat(
            v.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (m = m.map((v) => {
          let w = v;
          return w.values !== void 0 && (w.values = w.values.map((V) => (V.selected = c.value.some((f) => f === V.value), V))), w;
        }), c.value.forEach((v) => {
          m.some((w) => w.value !== void 0 && w.value === v || w.values !== void 0 && w.values.some((V) => V.value === v)) || m.push({
            label: v,
            value: v
          });
        }));
        let _ = [];
        return m.forEach((v) => {
          v.values === void 0 ? _.push(v) : _ = Bo(v.label, v, _);
        }), _;
      }
    }), d = () => c.value == null || c.value.length == 0 ? null : t.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    W(c, () => {
      u.value || r("value_changed", { name: t.name, value: d() });
    }), W(u, (m) => {
      m || r("value_changed", { name: t.name, value: d() });
    });
    const b = (m) => {
      u.value = !0, m != null ? t.multiple ? c.value = Array.isArray(m) ? m : [m] : c.value = m : t.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: M, disabledValues: B } = qe(t.name, P);
    return n({ getValue: d, setValue: b }), (m, E) => (i(), p("div", gu, [
      h.value != null ? (i(), z(he, {
        key: 0,
        promise: h.value
      }, {
        default: I(({ response: _ }) => [
          R(g("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: F([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": E[0] || (E[0] = (v) => c.value = v),
            disabled: t.disabled
          }, [
            _ != null ? (i(!0), p(C, { key: 0 }, G(_, (v) => (i(), p(C, null, [
              v.values == null ? R((i(), p("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: S(B).some((w) => w === v.value.toString())
              }, J(S(o)(v.label)), 9, yu)), [
                [le, !S(M).some((w) => w === v.value.toString())]
              ]) : T("", !0),
              v.values != null ? (i(), p("optgroup", {
                key: 1,
                label: S(o)(v.label)
              }, [
                (i(!0), p(C, null, G(v.values, (w) => R((i(), p("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: S(B).some((V) => V === w.value.toString())
                }, J(S(o)(w.label)), 9, ku)), [
                  [le, !S(M).some((V) => V === w.value.toString())]
                ])), 256))
              ], 8, _u)) : T("", !0)
            ], 64))), 256)) : T("", !0)
          ], 10, vu), [
            [Vo, c.value]
          ])
        ]),
        pending: I(() => [
          A(S(ie))
        ]),
        rejected: I(() => [
          A(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : T("", !0)
    ]));
  }
}), $u = { class: "field" }, Su = ["id", "name", "disabled"], Mu = ["for"], Du = {
  key: 0,
  class: "help is-danger"
}, Fo = /* @__PURE__ */ k({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = ne(t, P), r = O(!1);
    return W(r, (u) => s("value_changed", { name: t.name, value: u })), n({ getValue: () => r.value, setValue: (u) => {
      r.value = u;
    } }), (u, h) => (i(), p("div", $u, [
      R(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": h[0] || (h[0] = (d) => r.value = d),
        disabled: t.disabled
      }, null, 8, Su), [
        [Le, r.value]
      ]),
      g("label", { for: u.name }, [
        Q(J(S(l)(t.label)) + " ", 1),
        t.required ? (i(), p("span", Du, "*")) : T("", !0)
      ], 8, Mu)
    ]));
  }
}), wu = ["type", "name", "disabled", "maxlength"], xo = /* @__PURE__ */ k({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = O(null);
    return W(l, (c) => s("value_changed", { name: t.name, value: c })), n({ getValue: () => l.value, setValue: (c) => {
      l.value = c;
    } }), (c, u) => R((i(), p("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h)
    }, null, 8, wu)), [
      [Wo, l.value]
    ]);
  }
}), Bu = ["name", "rows", "cols", "maxlength", "disabled"], Jo = 9, ge = String.fromCharCode(Jo), Me = String.fromCharCode(10), Ao = /* @__PURE__ */ k({
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
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = O(null);
    W(l, (u) => {
      s("value_changed", { name: t.name, value: u });
    });
    const r = () => l.value, o = (u) => {
      l.value = u;
    };
    n({ getValue: r, setValue: o });
    const c = (u) => {
      if (t.supportsTab) {
        let h = r();
        switch (u.keyCode) {
          case Jo:
            let d = u.target.selectionStart, b = u.target.selectionEnd, M = h.substring(0, d), B = h.length > b ? h.substring(b) : "", m = d == b ? "" : h.substring(d, b);
            if (m.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? m.startsWith(ge) ? (m = m.substring(1), d--) : M.endsWith(ge) && (M = M.substring(0, M.length - 1), d--) : m = ge + m;
            else {
              let E = !1;
              m.endsWith(Me) && (E = !0, m = m.substring(0, m.length - 1));
              let _ = m.split(Me);
              m = "", u.shiftKey && M.endsWith(ge) && (M = M.substring(0, M.length - 1), d--), _.forEach((v, w) => {
                u.shiftKey && v.startsWith(ge) ? v = v.substring(1) : u.shiftKey || (v = ge + v), m += v + (w === _.length - 1 ? "" : Me);
              }), E && (m += Me);
            }
            return h = M + m + B, d += m.length == 1 ? 1 : 0, b = d + (m.length == 1 ? 0 : m.length), o(h), u.target.selectionStart = d, u.target.selectionEnd = b, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, h) => R((i(), p("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: c,
      "onUpdate:modelValue": h[0] || (h[0] = (d) => l.value = d)
    }, null, 40, Bu)), [
      [_e, l.value]
    ]);
  }
}), Ou = { class: "columns" }, To = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = P(He), r = P(Ge);
    n({ setValue: (d) => {
      h.forEach((b) => {
        switch (b.type) {
          case "subform":
            b.setValue(d);
            break;
          default:
            b.setValue !== void 0 && (d === null ? b.setValue(null) : Object.keys(d).some((M) => M === b.fieldName) ? b.setValue(d[b.fieldName]) : Object.keys(d).some((M) => M === b.altFieldName) && b.setValue(d[b.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var d = {};
      return h.forEach((b) => {
        if (b.getValue != null)
          switch (b.type) {
            case "subform":
              d = $.extend(d, b.getValue());
              break;
            default:
              d[b.fieldName] = b.getValue();
              break;
          }
      }), d;
    }, isValid: () => !h.some((d) => !(d.isValid === void 0 || d.isValid())) });
    const h = t.inputs.map((d) => O(null));
    return (d, b) => (i(), p("div", Ou, [
      (i(!0), p(C, null, G(t.inputs, (M, B) => (i(), z(No, {
        ref_for: !0,
        ref: (m) => S(h)[B] = m,
        input: M,
        onValue_changed: b[0] || (b[0] = (m) => s("value_changed", m)),
        onButton_clicked: b[1] || (b[1] = (m) => s("button_clicked", m)),
        disabled: t.disabled || S(r).some((m) => m === M.name),
        hidden: S(l).some((m) => m === M.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Fu = ["id", "name"], xu = /* @__PURE__ */ k({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a;
    let l = [];
    O(!1);
    const r = y(() => {
      let h = vo(t.fields);
      return l = h.map((d) => O(null)), h;
    });
    return n({ isValid: () => !l.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => l.forEach((d) => d.setValue(h)), getValue: () => {
      var h = {};
      return l.forEach((d) => {
        h = $.extend(h, d.getValue());
      }), h;
    } }), (h, d) => R((i(), p("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (i(!0), p(C, null, G(r.value, (b, M) => (i(), z(To, {
        ref_for: !0,
        ref: (B) => S(l)[M] = B,
        inputs: b,
        disabled: t.disabled,
        onValue_changed: d[0] || (d[0] = (B) => s("value_changed", B)),
        onButton_clicked: d[1] || (d[1] = (B) => s("button_clicked", B))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Fu)), [
      [le, !t.hidden]
    ]);
  }
}), Ju = ["for"], Au = {
  key: 0,
  class: "help is-danger"
}, Tu = { class: "control" }, Nu = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Pu = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], No = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = O(null), s = a, l = e, r = ne(l, P), o = we(O(l.input.type)), c = y(() => {
      let f = null;
      switch (l.input.type) {
        case "autocomplete":
          f = yo;
          break;
        case "button":
          f = Ee;
          break;
        case "checkbox-group":
          f = _o;
          break;
        case "checkbox":
          f = ko;
          break;
        case "date":
          f = $o;
          break;
        case "full-editor":
          f = So;
          break;
        case "header":
          f = ze;
          break;
        case "hidden":
          f = Mo;
          break;
        case "number":
          f = Do;
          break;
        case "paragraph":
          f = Ie;
          break;
        case "radio-group":
          f = wo;
          break;
        case "select":
          f = Oo;
          break;
        case "Switch":
          f = Fo;
          break;
        case "text":
          f = xo;
          break;
        case "textarea":
          f = Ao;
          break;
        case "time":
          f = Ke;
          break;
        case "subform":
          f = xu;
          break;
      }
      return f;
    }), u = function(f) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(f);
    };
    re(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && u(l.input.value);
    });
    const h = y(() => l.input.disabled ?? l.disabled ?? !1), d = y(() => `is-${l.input.form_columns ?? 12}`), b = y(() => l.input.name), M = y(() => l.input.processVariable ?? l.input.name), B = y(() => Nu.some((f) => f === l.input.type) && l.input.label !== void 0 && l.input.label !== null), m = y(() => {
      let f = $.extend({}, l.input);
      return delete f.type, f.className != null && delete f.className, f.form_columns != null && delete f.form_columns, Pu.some((ae) => ae === l.input.type) && (f.translate = l.translate), f.disabled = l.disabled, f;
    }), E = (f) => {
      if (f.value !== void 0 && f.value !== null && Array.isArray(f.value)) {
        let ae = [...f.value];
        f.value = ae;
      }
      s("value_changed", f);
    }, _ = (f) => {
      s("button_clicked", f);
    }, v = () => {
      if (t.value != null && t.value.getValue != null) {
        let f = t.value.getValue();
        return f != null && Array.isArray(f) ? [...f] : f;
      }
      return null;
    };
    return n({ setValue: u, fieldName: b, type: o, altFieldName: M, getValue: v, isValid: () => {
      if (l.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (l.input.required ?? !1) {
        let f = v();
        return f != null && (Array.isArray(f) ? f.length > 0 : !0) && f.toString() !== "";
      }
      return !0;
    }, setValues: (f) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.setValues(f);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (f, ae) => R((i(), p("div", {
      class: F(["field column", [d.value]])
    }, [
      l.input.type == "header" ? (i(), z(ze, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (i(), z(Ie, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (i(), z(Ee, {
        key: 2,
        name: l.input.name,
        sstyle: l.input.style,
        className: l.input.className,
        icon: l.input.icon,
        label: l.input.label,
        disabled: h.value,
        onButton_clicked: _,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (i(), p(C, { key: 3 }, [
        B.value ? (i(), p("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          Q(J(S(r)(l.input.label)) + " ", 1),
          l.input.required ? (i(), p("span", Au, "*")) : T("", !0)
        ], 8, Ju)) : T("", !0),
        g("div", Tu, [
          (i(), z(me(c.value), K(m.value, {
            onValue_changed: E,
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
const Eu = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, zu = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = ne(t, P);
    Te("Translate", (_) => l.value(_));
    let r = [];
    const o = y(() => {
      if (t.elements != null) {
        let _ = vo(t.elements);
        return r = _.map((v) => O(null)), _;
      } else
        return null;
    }), c = () => {
      let _ = {};
      return r.forEach((v) => {
        _ = $.extend(_, v.getValue());
      }), _;
    }, u = (_) => {
      r.forEach((v) => v.setValue(_));
    }, h = () => !r.some((_) => !(_.isValid === void 0 || _.isValid())), d = O([]);
    Te(He, we(d));
    const b = (_) => {
      Array.isArray(_) ? d.value = [...d.value, ..._] : d.value.push(_);
    }, M = (_) => {
      Array.isArray(_) ? d.value = d.value.filter((v) => _.indexOf(v) >= 0) : d.value = d.value.filter((v) => v !== _);
    }, B = O([]);
    return Te(Ge, we(B)), n({ getValues: c, setValues: u, isValid: h, hideField: b, showField: M, disableField: (_) => {
      Array.isArray(_) ? B.value = [...B.value, ..._] : B.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? B.value = B.value.filter((v) => _.indexOf(v) >= 0) : B.value = B.value.filter((v) => v !== _);
    } }), (_, v) => (i(), p("form", Eu, [
      o.value != null ? (i(!0), p(C, { key: 0 }, G(o.value, (w, V) => (i(), z(To, {
        ref_for: !0,
        ref: (f) => S(r)[V] = f,
        inputs: w,
        transte: t.translate,
        key: V,
        onValue_changed: v[0] || (v[0] = (f) => s("value_changed", f)),
        onButton_clicked: v[1] || (v[1] = (f) => s("button_clicked", f)),
        disabled: _.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : T("", !0)
    ]));
  }
}), Iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: yo,
  Button: Ee,
  Checkbox: ko,
  CheckboxGroup: _o,
  ComponentForm: zu,
  DateField: $o,
  FormComponent: No,
  FullEditor: So,
  Header: ze,
  Hidden: Mo,
  NumberField: Do,
  Paragraph: Ie,
  RadioGroup: wo,
  Select: Oo,
  Switch: Fo,
  Text: xo,
  TextArea: Ao,
  Time: Ke
}, Symbol.toStringTag, { value: "Module" })), Lu = { class: "hero-body" }, Vu = { class: "title" }, Wu = {
  key: 0,
  class: "subtitle"
}, Cu = /* @__PURE__ */ k({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("section", {
      class: F(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + n.type])
    }, [
      g("div", Lu, [
        g("p", Vu, J(n.title), 1),
        n.subtitle ? (i(), p("p", Wu, J(n.subtitle), 1)) : T("", !0)
      ])
    ], 2));
  }
}), Ru = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of n)
    a[t] = s;
  return a;
}, Uu = {}, ju = { class: "box" };
function Hu(e, n) {
  return i(), p("div", ju, [
    N(e.$slots, "default")
  ]);
}
const Gu = /* @__PURE__ */ Ru(Uu, [["render", Hu]]), qu = {
  key: 0,
  class: "icon is-clickable"
}, Yu = /* @__PURE__ */ k({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (s, l) => (i(), p("li", {
      class: F({ "is-active": a.active })
    }, [
      g("a", {
        onClick: l[0] || (l[0] = (r) => t("click"))
      }, [
        a.icon ? (i(), p("span", qu, [
          A(S(H), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        Q(" " + J(a.title), 1)
      ])
    ], 2));
  }
}), Ku = /* @__PURE__ */ k({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Oe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, a = y(() => {
      let t = ["breadcrumb"];
      return n.alignment && n.alignment !== Oe.left && t.push(`is-${n.alignment}`), n.size && n.size !== X.normal && t.push(`is-${n.size}`), n.seperator && t.push(`has-${n.seperator}-seperator`), t;
    });
    return (t, s) => (i(), p("nav", {
      class: F(a.value),
      "aria-label": "breadcrumbs"
    }, [
      g("ul", null, [
        N(t.$slots, "default")
      ])
    ], 2));
  }
}), Qu = {
  key: 0,
  class: "card-icon"
}, Xu = { class: "card-icon-wrapper" }, Zu = { class: "card-header" }, ed = { class: "card-content" }, td = { class: "card-footer" }, Po = /* @__PURE__ */ k({
  __name: "card",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    fullHeight: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const n = e, a = {
      addonclass: "card-footer-item"
    }, t = {
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (s, l) => (i(), p("div", {
      class: F(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (i(), p("div", Qu, [
        g("div", Xu, [
          A(H, {
            icon: n.icon,
            size: S(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : T("", !0),
      g("div", Zu, [
        N(s.$slots, "header", ce(ye(t)))
      ]),
      g("div", ed, [
        N(s.$slots, "content")
      ]),
      g("div", td, [
        N(s.$slots, "footer", ce(ye(a)))
      ])
    ], 2));
  }
}), ad = /* @__PURE__ */ k({
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
    const n = e;
    return (a, t) => (i(), p("div", {
      class: F(["columns", [
        {
          "is-mobile": n.mobile,
          "is-desktop": n.desktop,
          "is-tablet": n.tablet,
          "is-gapless": n.gapless,
          "is-multiline": n.multiline,
          "is-centered": n.centered,
          "is-vcentered": n.verticalCentered,
          "is-bordered-left": n.borderleft,
          "is-bordered-right": n.borderright,
          "is-bordered-top": n.bordertop,
          "is-bordered-bottom": n.borderbottom,
          "is-fullwidth": n.fullWidth,
          "is-fullheight": n.fullHeight
        },
        n.addonclass
      ]])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), sd = /* @__PURE__ */ k({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const n = e, a = y(() => {
      var t = [];
      return n.size && t.push(`is-${n.size}`), n.offset && t.push(`is-offset-${n.offset}`), n.border && (n.border.some((s) => s === Je.all) ? t.push("is-bordered") : n.border.forEach((s) => t.push(`is-bordered-${s}`))), n.addonclass && t.push(n.addonclass), t;
    });
    return (t, s) => (i(), p("div", {
      class: F(["column", a.value])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), nd = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), ld = { class: "modal-content" }, od = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, rd = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("div", {
      class: F({ modal: !0, "is-active": n.display }),
      style: Ve(`z-index:${n.zIndex}`)
    }, [
      nd,
      g("div", ld, [
        N(a.$slots, "default")
      ]),
      n.hasClose ? (i(), p("button", od)) : T("", !0)
    ], 6));
  }
}), id = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), ud = {
  key: 0,
  class: "card-icon"
}, dd = { class: "card-icon-wrapper" }, cd = { class: "modal-card-head" }, pd = { class: "modal-card-body" }, hd = { class: "modal-card-foot" }, md = /* @__PURE__ */ k({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    hasClose: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    maxWidth: { type: Boolean },
    maxHeight: { type: Boolean },
    icon: { default: null }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = {
      addonclass: "card-footer-item"
    }, l = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, r = y(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, c) => (i(), p("div", {
      class: F(["modal", { "is-active": a.show }])
    }, [
      id,
      g("div", {
        class: F(["modal-card", r.value])
      }, [
        a.icon !== null ? (i(), p("div", ud, [
          g("div", dd, [
            A(H, {
              icon: a.icon,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : T("", !0),
        g("div", cd, [
          N(o.$slots, "header", ce(ye(l))),
          o.hasClose ? (i(), p("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: c[0] || (c[0] = (u) => t("close"))
          })) : T("", !0)
        ]),
        g("div", pd, [
          N(o.$slots, "content")
        ]),
        g("div", hd, [
          N(o.$slots, "footer", ce(ye(s)))
        ])
      ], 2)
    ], 2));
  }
}), bd = {
  key: 0,
  class: "panel-heading"
}, fd = {
  key: 1,
  class: "panel-tabs"
}, gd = { class: "panel-block" }, vd = /* @__PURE__ */ k({
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
    const n = e, a = y(() => n.blockNames ?? ["default"]), t = y(() => {
      let s = [];
      return n.type && s.push(`is-${n.type}`), n.fullWidth && s.push("is-fullwidth"), n.fullHeight && s.push("is-fullheight"), s;
    });
    return (s, l) => (i(), p("div", {
      class: F(["panel", t.value])
    }, [
      n.hasHeader ? (i(), p("div", bd, [
        N(s.$slots, "header")
      ])) : T("", !0),
      n.hasTabs ? (i(), p("div", fd, [
        N(s.$slots, "tabs")
      ])) : T("", !0),
      (i(!0), p(C, null, G(a.value, (r) => (i(), p("div", gd, [
        N(s.$slots, r)
      ]))), 256))
    ], 2));
  }
}), yd = /* @__PURE__ */ k({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, a = y(() => {
      let s = [];
      return n.scrollable && s.push("table-container"), n.fixedHeader && n.scrollable && s.push("is-fixed"), s;
    }), t = y(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return n.fixedHeader && !n.scrollable && s.push("is-fixed"), n.fullWidth && s.push("is-fullwidth"), n.narrow && s.push("is-narrow"), s;
    });
    return (s, l) => (i(), p("div", {
      class: F(a.value)
    }, [
      g("table", {
        class: F(t.value)
      }, [
        g("thead", null, [
          N(s.$slots, "thead")
        ]),
        g("tbody", null, [
          N(s.$slots, "tbody")
        ]),
        g("tfoot", null, [
          N(s.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), _d = ["href"], kd = {
  key: 0,
  class: "icon is-small"
}, $d = /* @__PURE__ */ k({
  __name: "tabs-tab",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {},
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = n, t = e, s = (l) => {
      (t.href === null || t.href === void 0) && (l.preventDefault(), a("click"));
    };
    return (l, r) => (i(), p("li", {
      class: F({ "is-active": t.active })
    }, [
      g("a", {
        href: l.href,
        onClick: s
      }, [
        t.icon ? (i(), p("span", kd, [
          A(S(H), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        g("span", null, J(t.title), 1)
      ], 8, _d)
    ], 2));
  }
}), Sd = /* @__PURE__ */ k({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const n = e, a = y(() => {
      let t = ["tabs"];
      return n.alignment ? t.push(`is-${n.alignment}`) : t.push("is-left"), n.type && t.push(`is-${n.type}`), n.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, s) => (i(), p("div", {
      class: F(a.value)
    }, [
      g("ul", null, [
        N(t.$slots, "default")
      ])
    ], 2));
  }
}), Md = /* @__PURE__ */ k({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const n = e, a = y(() => {
      let t = ["tile", `is-${n.type}`];
      return n.size && t.push(`is-${n.size}`), n.borders && (n.borders.some((s) => s === Je.all) ? t.push("is-bordered") : n.borders.forEach((s) => t.push(`is-bordered-${s}`))), n.vertical && t.push("is-vertical"), t;
    });
    return (t, s) => (i(), p("div", {
      class: F(a.value)
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Cu,
  Box: Gu,
  Breadcrumbs: Ku,
  BreadcrumbsItem: Yu,
  Card: Po,
  Column: sd,
  ColumnContainer: ad,
  List: go,
  ListItem: De,
  Modal: rd,
  ModalCard: md,
  Panel: vd,
  Table: yd,
  Tabs: Sd,
  TabsTab: $d,
  Tile: Md
}, Symbol.toStringTag, { value: "Module" }));
const st = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
xe(`${st.substring(0, st.lastIndexOf("/"))}/style.css`);
const wd = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function Bd(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: wd,
  setSkin: Bd
}, Symbol.toStringTag, { value: "Module" })), Fd = /* @__PURE__ */ k({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: Ce.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: n }) {
    const a = `${Ko(P)}chart.umd.min.js`, t = O(null), s = e, l = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, c = y(() => {
      var u = "";
      return s.width && (u = `width:${s.width}px;`), s.height && (u += `height:${s.height}px;`), u;
    });
    return W([s.type], (u) => {
      r != null && (r.type = u ?? "line");
    }), W(
      [s.labels],
      (u) => {
        r != null && (r.data.labels = u, (s.showRefresh == null || !s.showRefresh) && o());
      },
      { deep: !0 }
    ), W(
      [s.datasets],
      (u) => {
        r != null && (r.data.datasets = u, (s.showRefresh == null || !s.showRefresh) && o());
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
            position: `${s.legendPosition}`,
            labels: {
              filter: (d, b) => d.text != null
            },
            onClick: function(d, b) {
              l("legendItemClick", r, b);
            }
          }
        }
      };
      s.scales != null && s.scales != null && (u.scales = s.scales), s.tooltips != null && s.tooltips != null && (u.tooltips = s.tooltips);
      const { Chart: h } = await We(a, ["Chart"]);
      r = new h(t.value.getContext("2d"), {
        type: s.type == null ? "line" : s.type,
        data: {
          datasets: s.datasets,
          labels: s.labels
        },
        options: u
      }), r.update();
    }), (u, h) => (i(), z(Po, null, Co({
      content: I(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: t,
          style: Ve(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: I((d) => [
          g("h3", {
            class: F(d.headerClass)
          }, J(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.showRefresh != null && s.showRefresh != null && s.showRefresh ? {
        name: "footer",
        fn: I((d) => [
          A(bo, K(d, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), xd = /* @__PURE__ */ k({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = `${Qo(P)}src-noconflict/ace.js`, s = e, l = a, r = O(null), o = O(null), c = function() {
      return o.getValue() == "" ? null : o.getValue();
    }, u = function(d) {
      o.setValue(d ?? "");
    };
    W([s.readonly], (d) => {
      o.setReadOnly(d == null || d == null ? !1 : d);
    }), W([s.value], (d) => {
      u(d);
    }), W([s.language], (d) => {
      o.getSession().setMode(d);
    });
    const h = y(() => {
      let d = Number.MAX_SAFE_INTEGER;
      if (s.autocompletes != null && s.autocompletes != null) {
        for (let b = 0; b < s.autocompletes.length; b++)
          s.autocompletes[b].Method.indexOf(".") >= 0 ? d = Math.min(d, s.autocompletes[b].Method.indexOf(".")) : d = Math.min(d, s.autocompletes[b].Method.length);
        if (d > 3 && s.autocompletes.length > 0) {
          let b = !0, M = s.autocompletes[0].Method.substring(0, 3);
          for (let B = 0; B < s.autocompletes.length; B++)
            if (s.autocompletes[B].Method.substring(0, 3) != M) {
              b = !1;
              break;
            }
          b && (d = 3);
        }
      }
      return d;
    });
    return n({ getValue: c, setValue: u }), re(async () => {
      const { ace: d } = await We(t, ["ace"]);
      o.value = Ro(d.edit(r.value.$el, {
        mode: s.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), o.value.setReadOnly(s.readonly === void 0 || s.readonly === null ? !1 : s.readonly), s.value !== null && s.value !== void 0 && o.value.setValue(s.value), o.on("change", () => l("value_changed", c())), s.autocompletes !== null && s.autocompletes !== void 0 && (o.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), o.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(b, M, B, m, E) {
          var _ = [];
          if (m = m.toUpperCase(), m.length >= h && (_ = s.autocompletes.filter((v) => v.Method.toUpperCase().startsWith(m) && v.Method.length > m.legend).map((v) => ({
            caption: v.Method + (v.Description === null || v.Description === void 0 ? "" : "->" + v.Description),
            value: v.Method,
            meta: "autos"
          }))), _.length === 0) {
            E(null, []);
            return;
          }
          E(null, _.map(function(v) {
            return v;
          }));
        }
      }]);
    }), (d, b) => (i(), p("div", {
      class: "editor",
      ref_key: "container",
      ref: r
    }, null, 512));
  }
}), Jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Fd,
  CodeWriter: xd
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Nd,
  Button: Pd,
  ButtonAdd: Ed,
  ButtonCancel: zd,
  ButtonDelete: Id,
  ButtonDisable: Ld,
  ButtonDownload: Vd,
  ButtonEdit: Wd,
  ButtonEnable: Cd,
  ButtonOkay: Rd,
  ButtonPrint: Ud,
  ButtonRefresh: jd,
  ButtonSave: Hd,
  ButtonUpload: Gd,
  CheckMark: qd,
  DynamicSlot: Yd,
  Filter: Kd,
  Icon: Qd,
  Message: Xd,
  Notification: Zd,
  PageNotification: ec,
  Pagination: tc,
  Promised: ac,
  Progress: sc,
  NavBar: nc,
  Menu: lc,
  MenuLabel: oc,
  MenuList: rc,
  MenuEntry: ic,
  ToolTip: uc,
  Badge: dc,
  Tag: cc,
  Tags: pc
} = Di, { DraggableItem: hc, DropZone: mc, Sortable: bc } = Fi, {
  AutoComplete: fc,
  CheckboxGroup: gc,
  Checkbox: vc,
  DateField: yc,
  ComponentForm: _c,
  FullEditor: kc,
  Header: $c,
  Hidden: Sc,
  NumberField: Mc,
  Paragraph: Dc,
  RadioGroup: wc,
  Select: Bc,
  Switch: Oc,
  Text: Fc,
  TextArea: xc,
  Time: Jc,
  FormComponent: Ac
} = Iu, {
  Banner: Tc,
  Box: Nc,
  BreadcrumbsItem: Pc,
  Breadcrumbs: Ec,
  Card: zc,
  Column: Ic,
  ColumnContainer: Lc,
  List: Vc,
  ListItem: Wc,
  ModalCard: Cc,
  Panel: Rc,
  Table: Uc,
  Tabs: jc,
  TabsTab: Hc,
  Tile: Gc,
  Modal: qc
} = Dd, { AVAIABLE_SKINS: Yc, setSkin: Kc } = Od, {
  ColorTypes: Qc,
  NoticeTypes: Xc,
  Sizes: Zc,
  AnimationSpeeds: ep,
  AnimationTypes: tp,
  IconSizes: ap,
  ChartLegendPositions: sp,
  ChartTypes: np,
  DropZoneQuadrants: lp,
  BreadCrumbAlignments: op,
  BreadCrumbSeperators: rp,
  ColumnContainerModifiers: ip,
  ColumnSizes: up,
  ColumnOffsetSizes: dp,
  BorderTypes: cp,
  TabAlignments: pp,
  TabStyles: hp,
  TileSizes: mp,
  TileTypes: bp,
  FixedNavBarPositions: fp,
  FixedMenuPositions: gp,
  BadgePositiions: vp,
  ToolTipPositions: yp,
  ToolTipTextAlignments: _p
} = jo, { loadNonEs6Module: kp } = Uo, { Chart: $p, CodeWriter: Sp } = Jd;
export {
  Yc as AVAIABLE_SKINS,
  Nd as Animation,
  ep as AnimationSpeeds,
  tp as AnimationTypes,
  fc as AutoComplete,
  dc as Badge,
  vp as BadgePositiions,
  Tc as Banner,
  cp as BorderTypes,
  Nc as Box,
  op as BreadCrumbAlignments,
  rp as BreadCrumbSeperators,
  Ec as Breadcrumbs,
  Pc as BreadcrumbsItem,
  Pd as Button,
  Ed as ButtonAdd,
  zd as ButtonCancel,
  Id as ButtonDelete,
  Ld as ButtonDisable,
  Vd as ButtonDownload,
  Wd as ButtonEdit,
  Cd as ButtonEnable,
  Rd as ButtonOkay,
  Ud as ButtonPrint,
  jd as ButtonRefresh,
  Hd as ButtonSave,
  Gd as ButtonUpload,
  zc as Card,
  $p as Chart,
  sp as ChartLegendPositions,
  np as ChartTypes,
  qd as CheckMark,
  vc as Checkbox,
  gc as CheckboxGroup,
  Sp as CodeWriter,
  Qc as ColorTypes,
  Ic as Column,
  Lc as ColumnContainer,
  ip as ColumnContainerModifiers,
  dp as ColumnOffsetSizes,
  up as ColumnSizes,
  _c as ComponentForm,
  yc as DateField,
  hc as DraggableItem,
  mc as DropZone,
  lp as DropZoneQuadrants,
  Yd as DynamicSlot,
  Kd as Filter,
  gp as FixedMenuPositions,
  fp as FixedNavBarPositions,
  Ac as FormComponent,
  kc as FullEditor,
  $c as Header,
  Sc as Hidden,
  Qd as Icon,
  ap as IconSizes,
  Vc as List,
  Wc as ListItem,
  lc as Menu,
  ic as MenuEntry,
  oc as MenuLabel,
  rc as MenuList,
  Xd as Message,
  qc as Modal,
  Cc as ModalCard,
  nc as NavBar,
  Xc as NoticeTypes,
  Zd as Notification,
  Mc as NumberField,
  ec as PageNotification,
  tc as Pagination,
  Rc as Panel,
  Dc as Paragraph,
  sc as Progress,
  ac as Promised,
  wc as RadioGroup,
  Bc as Select,
  Zc as Sizes,
  bc as Sortable,
  Oc as Switch,
  pp as TabAlignments,
  hp as TabStyles,
  Uc as Table,
  jc as Tabs,
  Hc as TabsTab,
  cc as Tag,
  pc as Tags,
  Fc as Text,
  xc as TextArea,
  Gc as Tile,
  mp as TileSizes,
  bp as TileTypes,
  Jc as Time,
  uc as ToolTip,
  yp as ToolTipPositions,
  _p as ToolTipTextAlignments,
  kp as loadNonEs6Module,
  Kc as setSkin
};
//# sourceMappingURL=components.esm.js.map
