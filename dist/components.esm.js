import { computed as v, defineComponent as k, openBlock as i, createBlock as E, Transition as Eo, withCtx as I, renderSlot as N, createElementBlock as c, normalizeClass as O, inject as P, ref as B, watch as C, createVNode as J, createCommentVNode as A, toDisplayString as T, mergeProps as K, createElementVNode as g, unref as S, normalizeProps as ce, guardReactiveProps as ye, onMounted as ie, createSlots as zo, normalizeStyle as Le, Fragment as V, renderList as G, resolveDynamicComponent as be, withDirectives as R, vModelText as _e, createTextVNode as Q, vShow as le, toRefs as Io, reactive as st, resolveComponent as nt, vModelCheckbox as We, readonly as we, withAsyncContext as Lo, onUnmounted as Wo, vModelSelect as Vo, vModelDynamic as Co, provide as Ae } from "vue";
import "jquery";
const xe = (e) => new Promise((s) => {
  let a = [], t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((n, l) => {
    if (n.toLowerCase().endsWith(".css") || (n += ".css"), document.querySelectorAll('link[server_path="' + n + '"]').length == 0) {
      let o = document.createElement("link"), d = new Promise((u) => {
        o.onload = function() {
          u(n);
        };
      });
      a[l] = d, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", n), o.setAttribute("href", n);
    } else
      a[l] = Promise.resolve(n);
  }), Promise.all(a).then((n) => {
    s(n);
  });
}), ue = [], lt = (e, s) => new Promise((a) => {
  let t = ue.find((n) => n.path === e);
  if (t != null)
    if (t.result === void 0 && s !== void 0 || t.result === null && s === void 0) {
      let n = setTimeout(() => {
        let l = ue.find((r) => r.path === e);
        l == null ? (clearTimeout(n), a(void 0)) : (l.result !== void 0 && s !== void 0 || l.result === void 0 && s === void 0) && (clearTimeout(n), a(l.result));
      }, 500);
    } else
      a(t.result);
  else {
    ue.push({
      path: e,
      result: s === void 0 ? null : void 0
    });
    let n = document.createElement("script");
    n.onload = () => {
      let r = ue.findIndex((o) => o.path === e);
      if (s === void 0)
        ue[r].result = void 0;
      else {
        let o = {};
        s.forEach((d) => {
          o[d] = window[d];
        }), ue[r].result = o;
      }
      a(ue[r].result);
    }, n.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(n);
  }
}), Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  loadNonEs6Module: lt
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), de = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(de || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), ot = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ot || {}), Ve = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ve || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), rt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(dt || {}), Te = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Te || {}), ct = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ht || {}), bt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(bt || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), mt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(mt || {}), Ce = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ce || {}), Re = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Ue || {});
const Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: de,
  AnimationTypes: Be,
  BadgePositiions: Ce,
  BorderTypes: Te,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: rt,
  ChartLegendPositions: Ve,
  ChartTypes: ot,
  ColorTypes: q,
  ColumnContainerModifiers: it,
  ColumnOffsetSizes: dt,
  ColumnSizes: ut,
  DropZoneQuadrants: ee,
  FixedMenuPositions: mt,
  FixedNavBarPositions: Oe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: X,
  TabAlignments: ct,
  TabStyles: pt,
  TileSizes: ht,
  TileTypes: bt,
  ToolTipPositions: Re,
  ToolTipTextAlignments: Ue
}, Symbol.toStringTag, { value: "Module" })), Y = (e) => {
  const s = e("Language", "en");
  return v(() => s);
}, jo = (e) => {
  const s = e("IconSet", "solid");
  return v(() => s);
}, Ho = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), Go = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), qo = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Yo = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ft = /* @__PURE__ */ k({
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
    const s = qo(P);
    xe(`${s}animate.min.css`);
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
    }, n = (h) => h === void 0 ? "" : `animate__${h}`, l = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, r = v(() => ({
      enter: t(a.speedIn ?? a.speed),
      leave: t(a.speedOut ?? a.speed)
    })), o = v(() => [
      "animate__animated",
      n(a.incoming ?? a.inout),
      l(a.speedIn ?? a.speed)
    ].join(" ")), d = v(() => [
      "animate__animated",
      n(a.outgoing ?? a.inout),
      l(a.speedOut ?? a.speed)
    ].join(" ")), u = v(() => [
      "animate__animated",
      "animate__infinite",
      n(a.repeating),
      l(a.speed ?? "")
    ].join(" "));
    return (h, p) => a.repeating ? (i(), c("div", {
      key: 1,
      class: O(u.value)
    }, [
      N(h.$slots, "default")
    ], 2)) : (i(), E(Eo, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": d.value,
      duration: r.value
    }, {
      default: I(() => [
        N(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), Ko = "brands.min.css", Qo = "all.min.css", Qe = "icon_styles", Xo = /\.fa-([^: ]+):before/g, Zo = /url\(([^)]+)\)/g, ve = B([]), Ne = B(!1), Xe = async (e, s) => {
  if (!Ne.value) {
    Ne.value = !0;
    let a;
    ve.value.length === 0 ? (a = document.createElement("style"), a.setAttribute("id", Qe), document.head.appendChild(a), a.setAttribute("type", "text/css")) : a = document.getElementById(Qe), ve.value = [" "];
    let t = await Promise.all([
      fetch(`${e}${Ko}`),
      fetch(`${e}${Qo}`),
      fetch(`${e}${s}.min.css`)
    ]), n = await t[0].text();
    [...n.matchAll(Xo)].forEach((l) => {
      ve.value.push(l[1]);
    }), n = `${await t[1].text()}
    ${await t[2].text()}
    ${n}`, [...n.matchAll(Zo)].forEach((l) => {
      n = n.replace(l[0], `url(${new URL(l[1], e)})`);
    }), a.innerText = n, ve.value.splice(0, 1), Ne.value = !1;
  }
}, H = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const s = Go(P), a = jo(P);
    ve.value.length === 0 ? Xe(s, a.value) : C(a, () => Xe(s, a.value));
    const t = e, n = v(() => {
      let l = [];
      return t.icon !== void 0 && t.icon !== null && (ve.value.indexOf(t.icon) >= 0 ? l.push("fa-brands") : (l.push("fa-ico"), l.push(`fa-${a.value}`)), l.push((t.icon.indexOf("fa-") == -1 ? " fa-" : " ") + t.icon)), t.size !== void 0 && t.size !== null && t.size !== oe.normal && l.push(`fa-${t.size}`), l;
    });
    return (l, r) => (i(), c("i", {
      class: O(n.value)
    }, null, 2));
  }
});
const er = ["disabled"], tr = {
  key: 0,
  class: "icon is-small"
}, ar = { key: 1 }, Z = /* @__PURE__ */ k({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = v(() => {
      let l = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && l.push("disabled"), a.addonclass && l.push(a.addonclass), a.hidemobile && l.push("is-hidden-mobile"), a.hidetablet && l.push("is-hidden-tablet-only"), a.hidedesktop && l.push("is-hidden-desktop is-hidden-widescreen"), l;
    });
    return (l, r) => (i(), c("button", {
      class: O(n.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (i(), c("span", tr, [
        J(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      a.title != null ? (i(), c("span", ar, T(a.title), 1)) : A("", !0)
    ], 10, er));
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
}, Ft = {
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
}, Ot = {}, xt = {
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
}, Tt = {
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
}, Jt = {
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
}, At = {
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
}, Wt = {
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
}, Vt = {}, Ct = {}, Rt = {}, Ut = {}, jt = {}, Ht = {}, Gt = {
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
}, la = {}, oa = {}, sr = {
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
  es: Ft,
  et: Ot,
  fa: xt,
  fi: Tt,
  fr: Jt,
  ga: At,
  he: Nt,
  hi: Pt,
  hu: Et,
  id: zt,
  it: It,
  ja: Lt,
  ko: Wt,
  lt: Vt,
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
}, nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: vt,
  az: yt,
  bg: _t,
  bn: kt,
  ca: $t,
  cs: St,
  da: Mt,
  de: Dt,
  default: sr,
  el: wt,
  en: gt,
  eo: Bt,
  es: Ft,
  et: Ot,
  fa: xt,
  fi: Tt,
  fr: Jt,
  ga: At,
  he: Nt,
  hi: Pt,
  hu: Et,
  id: zt,
  it: It,
  ja: Lt,
  ko: Wt,
  lt: Vt,
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
}, ba = {
  Filter: "Filter"
}, ma = {
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
}, Fa = {
  Filter: "Filtro"
}, Oa = {
  Filter: "フィルター"
}, xa = {
  Filter: "제품정보"
}, Ta = {}, Ja = {}, Aa = {}, Na = {}, Pa = {}, Ea = {}, za = {
  Filter: "Filtro"
}, Ia = {}, La = {
  Filter: "Фильтр"
}, Wa = {
  Filter: "Filter"
}, Va = {}, Ca = {}, Ra = {}, Ua = {
  Filter: "Filter"
}, ja = {}, Ha = {}, Ga = {
  Filter: "Filtre"
}, qa = {
  Filter: "Фільтри"
}, Ya = {}, Ka = {}, lr = {
  en: ra,
  ar: ia,
  az: ua,
  bg: da,
  bn: ca,
  ca: pa,
  cs: ha,
  da: ba,
  de: ma,
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
  it: Fa,
  ja: Oa,
  ko: xa,
  lt: Ta,
  lv: Ja,
  ms: Aa,
  nb: Na,
  nl: Pa,
  pl: Ea,
  pt: za,
  ro: Ia,
  ru: La,
  sk: Wa,
  sl: Va,
  sq: Ca,
  sr: Ra,
  sv: Ua,
  th: ja,
  tl: Ha,
  tr: Ga,
  uk: qa,
  zh: Ya,
  zt: Ka
}, or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ia,
  az: ua,
  bg: da,
  bn: ca,
  ca: pa,
  cs: ha,
  da: ba,
  de: ma,
  default: lr,
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
  it: Fa,
  ja: Oa,
  ko: xa,
  lt: Ta,
  lv: Ja,
  ms: Aa,
  nb: Na,
  nl: Pa,
  pl: Ea,
  pt: za,
  ro: Ia,
  ru: La,
  sk: Wa,
  sl: Va,
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
}, bs = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש",
  GoToPage: "ללכת לדף"
}, ms = {
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
}, Fs = {}, Os = {
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
}, Ts = {}, Js = {}, As = {}, Ns = {
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
}, Ls = {}, Ws = {}, rr = {
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
  he: bs,
  hi: ms,
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
  ro: Fs,
  ru: Os,
  sk: xs,
  sl: Ts,
  sq: Js,
  sr: As,
  sv: Ns,
  th: Ps,
  tl: Es,
  tr: zs,
  uk: Is,
  zh: Ls,
  zt: Ws
}, ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Xa,
  az: Za,
  bg: es,
  bn: ts,
  ca: as,
  cs: ss,
  da: ns,
  de: ls,
  default: rr,
  el: os,
  en: Qa,
  eo: rs,
  es: is,
  et: us,
  fa: ds,
  fi: cs,
  fr: ps,
  ga: hs,
  he: bs,
  hi: ms,
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
  ro: Fs,
  ru: Os,
  sk: xs,
  sl: Ts,
  sq: Js,
  sr: As,
  sv: Ns,
  th: Ps,
  tl: Es,
  tr: zs,
  uk: Is,
  zh: Ls,
  zt: Ws
}, Symbol.toStringTag, { value: "Module" })), Vs = {
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
}, bn = {
  Weekdays: {},
  Months: {}
}, mn = {
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
}, Fn = {
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
}, On = {
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
}, Tn = {
  Weekdays: {},
  Months: {}
}, ur = {
  en: Vs,
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
  ms: bn,
  nb: mn,
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
  tr: Fn,
  uk: On,
  zh: xn,
  zt: Tn
}, dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Cs,
  az: Rs,
  bg: Us,
  bn: js,
  ca: Hs,
  cs: Gs,
  da: qs,
  de: Ys,
  default: ur,
  el: Ks,
  en: Vs,
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
  ms: bn,
  nb: mn,
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
  tr: Fn,
  uk: On,
  zh: xn,
  zt: Tn
}, Symbol.toStringTag, { value: "Module" })), Jn = {
  Error: "Error"
}, An = {
  Error: "خطأ"
}, Nn = {
  Error: "Qeydiyyat"
}, Pn = {}, En = {}, zn = {}, In = {
  Error: "Čeština"
}, Ln = {
  Error: "Fejl"
}, Wn = {
  Error: "Fehler"
}, Vn = {}, Cn = {
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
}, pl = {}, hl = {}, bl = {}, ml = {
  Error: "Fel"
}, fl = {}, gl = {}, vl = {
  Error: "Hata"
}, yl = {
  Error: "Про"
}, _l = {}, kl = {}, cr = {
  en: Jn,
  ar: An,
  az: Nn,
  bg: Pn,
  bn: En,
  ca: zn,
  cs: In,
  da: Ln,
  de: Wn,
  el: Vn,
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
  sr: bl,
  sv: ml,
  th: fl,
  tl: gl,
  tr: vl,
  uk: yl,
  zh: _l,
  zt: kl
}, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: An,
  az: Nn,
  bg: Pn,
  bn: En,
  ca: zn,
  cs: In,
  da: Ln,
  de: Wn,
  default: cr,
  el: Vn,
  en: Jn,
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
  sr: bl,
  sv: ml,
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
}, Dl = {}, wl = {}, Bl = {}, Fl = {
  Done: "Čeština"
}, Ol = {
  Done: "Done"
}, xl = {
  Done: "KAPITEL"
}, Tl = {}, Jl = {
  Done: "Done"
}, Al = {
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
}, Wl = {
  Done: "दान"
}, Vl = {
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
}, co = {}, po = {}, hr = {
  en: $l,
  ar: Sl,
  az: Ml,
  bg: Dl,
  bn: wl,
  ca: Bl,
  cs: Fl,
  da: Ol,
  de: xl,
  el: Tl,
  eo: Jl,
  es: Al,
  et: Nl,
  fa: Pl,
  fi: El,
  fr: zl,
  ga: Il,
  he: Ll,
  hi: Wl,
  hu: Vl,
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
}, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Sl,
  az: Ml,
  bg: Dl,
  bn: wl,
  ca: Bl,
  cs: Fl,
  da: Ol,
  de: xl,
  default: hr,
  el: Tl,
  en: $l,
  eo: Jl,
  es: Al,
  et: Nl,
  fa: Pl,
  fi: El,
  fr: zl,
  ga: Il,
  he: Ll,
  hi: Wl,
  hu: Vl,
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
}, Symbol.toStringTag, { value: "Module" })), mr = {
  Button: nr,
  Filter: or,
  Pagination: ir,
  Date: dr,
  Form: pr,
  Wizard: br
}, L = (e, s) => {
  let a = mr[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[s.value] === void 0 ? a = a.en : a = a[s.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, fr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Add", n),
      icon: "plus",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
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
  setup(e, { emit: s }) {
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Cancel", n),
      icon: "window-close",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), gr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Delete", n),
      icon: "trash-alt",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), vr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Disable", n),
      icon: "times-circle",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), yr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Download", n),
      icon: "download",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), _r = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Edit", n),
      icon: "edit",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), kr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Enable", n),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), bo = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Okay", n),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), $r = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Print", n),
      icon: "print",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), mo = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Refresh", n),
      icon: "sync",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), Sr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Save", n),
      icon: "save",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), Mr = /* @__PURE__ */ k({
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
    const a = s, t = e, n = Y(P), l = v(() => ({
      Title: L("Button.Upload", n),
      icon: "upload",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (i(), E(Z, K(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), Dr = {
  key: 0,
  class: "card-icon"
}, wr = { class: "card-icon-wrapper" }, Br = { class: "card-header" }, Fr = { class: "card-content" }, Or = { class: "card-footer" }, fo = /* @__PURE__ */ k({
  __name: "card",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    fullHeight: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const s = e, a = {
      addonclass: "card-footer-item"
    }, t = {
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (n, l) => (i(), c("div", {
      class: O(["card", { "is-fullwidth": s.fullWidth, "is-fullheight": s.fullHeight }])
    }, [
      s.icon !== null ? (i(), c("div", Dr, [
        g("div", wr, [
          J(H, {
            icon: s.icon,
            size: S(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : A("", !0),
      g("div", Br, [
        N(n.$slots, "header", ce(ye(t)))
      ]),
      g("div", Fr, [
        N(n.$slots, "content")
      ]),
      g("div", Or, [
        N(n.$slots, "footer", ce(ye(a)))
      ])
    ], 2));
  }
}), xr = /* @__PURE__ */ k({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: Ve.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: s }) {
    const a = `${Yo(P)}chart.umd.min.js`, t = B(null), n = e, l = s;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, d = v(() => {
      var u = "";
      return n.width && (u = `width:${n.width}px;`), n.height && (u += `height:${n.height}px;`), u;
    });
    return C([n.type], (u) => {
      r != null && (r.type = u ?? "line");
    }), C(
      [n.labels],
      (u) => {
        r != null && (r.data.labels = u, (n.showRefresh == null || !n.showRefresh) && o());
      },
      { deep: !0 }
    ), C(
      [n.datasets],
      (u) => {
        r != null && (r.data.datasets = u, (n.showRefresh == null || !n.showRefresh) && o());
      },
      { deep: !0 }
    ), ie(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${n.legendPosition}`,
            labels: {
              filter: (p, m) => p.text != null
            },
            onClick: function(p, m) {
              l("legendItemClick", r, m);
            }
          }
        }
      };
      n.scales != null && n.scales != null && (u.scales = n.scales), n.tooltips != null && n.tooltips != null && (u.tooltips = n.tooltips);
      const { Chart: h } = await lt(a, ["Chart"]);
      r = new h(t.value.getContext("2d"), {
        type: n.type == null ? "line" : n.type,
        data: {
          datasets: n.datasets,
          labels: n.labels
        },
        options: u
      }), r.update();
    }), (u, h) => (i(), E(fo, null, zo({
      content: I(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: t,
          style: Le(d.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      n.title ? {
        name: "header",
        fn: I((p) => [
          g("h3", {
            class: O(p.headerClass)
          }, T(n.title), 3)
        ]),
        key: "0"
      } : void 0,
      n.showRefresh != null && n.showRefresh != null && n.showRefresh ? {
        name: "footer",
        fn: I((p) => [
          J(mo, K(p, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Tr = /* @__PURE__ */ k({
  __name: "check-mark",
  setup(e) {
    return (s, a) => (i(), E(H, {
      icon: "check",
      size: S(oe).small
    }, null, 8, ["size"]));
  }
}), Ze = async (e, s, a) => {
  let t = await import(e);
  const n = Object.keys(t);
  return s && n.sort(s), n.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, Jr = /* @__PURE__ */ k({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const s = B(null), a = e, t = v(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return C([a.url, a.filter], async () => {
      s.value = await Ze(a.url, a.sortMethod, t);
    }), ie(async () => {
      s.value = await Ze(a.url, a.sortMethod, t);
    }), (n, l) => (i(!0), c(V, null, G(s.value, (r) => (i(), E(be(r), ce(ye(a.props)), null, 16))), 256));
  }
}), Ar = { class: "control has-icons-left" }, Nr = ["placeholder"], Pr = { class: "icon is-small is-left" }, Er = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = Y(P), l = v(() => L("Filter.Filter", n)), r = B(null);
    C([r], (d) => {
      d[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (d) => {
      d.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return ie(() => {
      a.default_value && (r.value = a.default_value);
    }), (d, u) => (i(), c("div", Ar, [
      R(g("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        onKeypress: o
      }, null, 40, Nr), [
        [_e, r.value]
      ]),
      g("span", Pr, [
        J(H, { icon: "filter" })
      ])
    ]));
  }
}), zr = {
  key: 0,
  class: "message-header"
}, Ir = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Lr = { class: "message-body" }, Wr = /* @__PURE__ */ k({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  setup(e) {
    const s = e, a = v(() => s.size === X.normal ? null : `is-${s.size}`), t = v(() => `is-${s.type}`);
    return (n, l) => (i(), c("article", {
      class: O(["message", a.value, t.value])
    }, [
      s.title ? (i(), c("div", zr, [
        g("p", null, T(s.title), 1),
        s.hasDelete ? (i(), c("button", Ir)) : A("", !0)
      ])) : A("", !0),
      g("div", Lr, [
        N(n.$slots, "default", {}, () => [
          Q(T(s.message), 1)
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
    const s = e;
    return (a, t) => (i(), c("div", {
      class: O(["notification", "is-" + s.type, s.light ? "is-light" : ""])
    }, [
      N(a.$slots, "default", {}, () => [
        Q(T(s.message), 1)
      ])
    ], 2));
  }
}), Vr = {
  key: 0,
  class: "modal-background"
}, Cr = {
  key: 0,
  class: "title"
}, Rr = { class: "block" }, Ur = /* @__PURE__ */ k({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = v(() => {
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
    }), l = v(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (i(), c("div", {
      class: O({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (i(), c("div", Vr)) : A("", !0),
      J(ft, {
        incoming: S(Be).fadeIn,
        outgoing: S(Be).fadeOut,
        speed: S(de).slower
      }, {
        default: I(() => [
          a.visible ? (i(), c("div", {
            key: 0,
            class: O(l.value)
          }, [
            J(H, {
              icon: n.value,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (i(), c("h1", Cr, T(a.header), 1)) : A("", !0),
            g("div", Rr, T(a.message), 1),
            a.hasClose ? (i(), E(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (d) => t("close")),
              size: S(oe).large
            }, null, 8, ["size"])) : A("", !0)
          ], 2)) : A("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), jr = ["title", "disabled"], Hr = ["title", "disabled"], Gr = {
  key: 0,
  class: "pagination-list"
}, qr = {
  key: 0,
  class: "pagination-ellipsis"
}, Yr = ["aria-label", "onOnclick"], Kr = /* @__PURE__ */ k({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = Y(P), l = v(() => L(a.usenext ? "Pagination.Previous" : "Pagination.Older", n)), r = v(() => L(a.usenext ? "Pagination.Next" : "Pagination.Newer", n)), o = v(() => a.buttontype ? `has-background-${a.buttontype}` : ""), d = v(() => L("Pagination.GoToPage", n)), u = v(() => a.hasprevious ?? !0), h = v(() => a.hasmore ?? !0), p = v(() => {
      if (a.totalpages === void 0)
        return [];
      if (a.totalpages > 5) {
        let b = a.currentpage === void 0 ? Math.floor(a.totalpages / 2) : a.currentpage;
        return [
          1,
          -1,
          b - 1,
          b,
          b + 1,
          -1,
          a.totalpages
        ];
      } else {
        let b = [];
        for (let z = 1; z <= a.totalpages; z++)
          b.push(z);
        return b;
      }
    }), m = function() {
      u || t("moveBack");
    }, D = function() {
      h || t("moveForward");
    }, F = function(b) {
      t("goToPage", b);
    };
    return (b, z) => R((i(), c("nav", {
      class: O(["pagination", "is-centered", o.value, `is-${a.size}`, a.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: O(["pagination-previous", o.value]),
        title: l.value,
        onClick: m,
        disabled: u.value
      }, [
        J(H, {
          icon: "backward",
          size: S(oe).small
        }, null, 8, ["size"]),
        Q(" " + T(l.value), 1)
      ], 10, jr),
      g("a", {
        class: O(["pagination-next", o.value]),
        title: r.value,
        onClick: D,
        disabled: h.value
      }, [
        Q(T(r.value) + " ", 1),
        J(H, {
          icon: "forward",
          size: S(oe).small
        }, null, 8, ["size"])
      ], 10, Hr),
      a.totalpages !== void 0 ? (i(), c("ul", Gr, [
        (i(!0), c(V, null, G(p.value, (_) => (i(), c("li", null, [
          _ === -1 ? (i(), c("span", qr, "…")) : (i(), c("a", {
            key: 1,
            class: O(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === a.currentpage ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${d.value} ${_}`,
            onOnclick: (y) => F(_)
          }, T(_ === -1 ? "" : _), 43, Yr))
        ]))), 256))
      ])) : A("", !0)
    ], 2)), [
      [le, a.hasmore || a.hasprevious]
    ]);
  }
});
function me(e) {
  return typeof e == "function" ? e() : S(e);
}
function Qr(e, s = 200) {
  const a = B(!1), t = B(!1), n = v(() => !a.value && !t.value), l = B(!1), r = B(), o = B(), d = v(() => {
    if (e != null) {
      let h = me(e);
      return h instanceof Promise ? h : new Promise((p) => p(h));
    }
    return null;
  });
  let u;
  return C(
    () => me(d),
    (h) => {
      if (a.value = !1, t.value = !1, r.value = null, !h) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const p = Number(me(s)) || 0;
      p > 0 ? (l.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        l.value = !0;
      }, p)) : l.value = !0, h.then((m) => {
        h === me(d) && (o.value = me(m), t.value = !0);
      }).catch((m) => {
        h === me(d) && (r.value = m, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: n, isRejected: a, isResolved: t, isDelayElapsed: l, error: r, data: o };
}
const he = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const s = e, a = Y(P), t = v(() => L("Form.Error", a)), n = Io(s), l = st(Qr(n.promise, n.pendingDelay));
    return (r, o) => (i(), c(V, null, [
      l.isDelayElapsed && !l.isRejected && !l.isResolved ? N(r.$slots, "pending", {
        key: 0,
        response: l.data
      }, () => [
        J(S(re), {
          size: S(X).small
        }, null, 8, ["size"])
      ]) : A("", !0),
      l.isRejected ? N(r.$slots, "rejected", ce(K({ key: 1 }, l.error)), () => [
        J(S(pe), {
          message: `${t.value}:${l.error.message ?? l.error.toString()}`,
          type: S(te).danger
        }, null, 8, ["message", "type"])
      ]) : A("", !0),
      l.isResolved ? N(r.$slots, "default", {
        key: 2,
        response: l.data
      }) : A("", !0)
    ], 64));
  }
}), Xr = ["value", "max"], re = /* @__PURE__ */ k({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const s = e, a = v(() => s.maximum === void 0 ? null : (s.value ?? 0) / s.maximum);
    return (t, n) => (i(), c("progress", {
      class: O(`progress is-${s.size} is-${s.type}`),
      value: s.value,
      max: s.maximum
    }, T(a.value ? `${a.value}%` : null), 11, Xr));
  }
}), Zr = ["href"], ei = {
  key: 0,
  class: "icon-text"
}, ti = { class: "icon" }, ai = { key: 1 }, si = {
  key: 2,
  class: "navbar-dropdown"
}, et = /* @__PURE__ */ k({
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
  setup(e, { emit: s }) {
    const a = e, t = () => {
      n("itemClicked"), a.onClick !== void 0 && a.onClick();
    }, n = s;
    return (l, r) => {
      const o = nt("navbar-item", !0);
      return i(), c("a", {
        class: O(["navbar-item", a.active ? "is-active" : "", a.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: a.href,
        onClick: t
      }, [
        a.icon !== void 0 && a.icon !== null ? (i(), c("span", ei, [
          g("span", ti, [
            J(H, {
              icon: a.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, T(a.title), 1)
        ])) : (i(), c("span", ai, T(a.title), 1)),
        a.childItems !== void 0 ? (i(), c("div", si, [
          (i(!0), c(V, null, G(a.childItems, (d) => (i(), E(o, K(d, {
            onItemClicked: r[0] || (r[0] = (u) => n("itemClicked"))
          }), null, 16))), 256))
        ])) : A("", !0)
      ], 10, Zr);
    };
  }
}), ni = ["aria-label"], li = { class: "navbar-brand" }, oi = ["aria-expanded"], ri = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), ii = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), ui = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), di = [
  ri,
  ii,
  ui
], ci = {
  key: 0,
  class: "navbar-start"
}, pi = { style: { width: "100px" } }, hi = {
  key: 1,
  class: "navbar-end"
}, bi = { style: { width: "100px" } }, mi = /* @__PURE__ */ k({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const s = e, a = B(!1);
    return ie(() => {
      if (s.fixedPosition)
        switch (s.fixedPosition) {
          case Oe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Oe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (t, n) => (i(), c("nav", {
      class: O(["navbar", s.fixedPosition]),
      role: "navigation",
      "aria-label": s.ariaLabel
    }, [
      g("div", li, [
        N(t.$slots, "brand"),
        g("a", {
          role: "button",
          class: O(["navbar-burger", a.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": a.value ? "true" : "false",
          onClick: n[0] || (n[0] = (l) => a.value = !a.value)
        }, di, 10, oi)
      ]),
      g("div", {
        class: O(["navbar-menu", a.value ? "is-active" : ""])
      }, [
        s.startItems !== void 0 ? (i(), c("div", ci, [
          J(he, {
            promise: s.startItems
          }, {
            default: I(({ response: l }) => [
              (i(!0), c(V, null, G(l, (r) => (i(), E(et, K(r, {
                onItemClicked: n[1] || (n[1] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              g("div", pi, [
                J(re, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0),
        s.endItems !== void 0 ? (i(), c("div", hi, [
          J(he, {
            promise: s.endItems
          }, {
            default: I(({ response: l }) => [
              (i(!0), c(V, null, G(l, (r) => (i(), E(et, K(r, {
                onItemClicked: n[2] || (n[2] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              g("div", bi, [
                J(re, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0)
      ], 2)
    ], 10, ni));
  }
}), fi = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("aside", {
      class: O(["menu", s.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${s.fixedPosition}` : ""])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), gi = { class: "menu-label" }, vi = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("p", gi, [
      Q(T(s.message) + " ", 1),
      N(a.$slots, "default")
    ]));
  }
}), yi = ["href"], _i = {
  key: 0,
  class: "icon-text"
}, ki = { class: "icon" }, $i = { key: 1 }, go = /* @__PURE__ */ k({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const s = e, a = () => {
      s.onClick !== void 0 && s.onClick();
    };
    return (t, n) => (i(), c("li", null, [
      g("a", {
        href: s.href,
        onClick: n[0] || (n[0] = (l) => a()),
        class: O(s.active ? "is-active" : "")
      }, [
        s.icon !== void 0 && s.icon !== null ? (i(), c("span", _i, [
          g("span", ki, [
            J(H, {
              icon: s.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, T(s.title), 1)
        ])) : (i(), c("span", $i, T(s.title), 1)),
        N(t.$slots, "default")
      ], 10, yi),
      N(t.$slots, "children")
    ]));
  }
}), Si = { class: "menu-list" }, Mi = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const s = e;
    return (a, t) => {
      const n = nt("menu-list", !0);
      return i(), c("ul", Si, [
        s.items !== null ? (i(), E(he, {
          key: 0,
          promise: s.items
        }, {
          default: I(({ response: l }) => [
            (i(!0), c(V, null, G(l, (r) => (i(), c("li", null, [
              J(go, ce(ye(r)), null, 16),
              r.childItems !== void 0 ? (i(), E(n, {
                key: 0,
                items: r.childItems
              }, null, 8, ["items"])) : A("", !0)
            ]))), 256))
          ]),
          pending: I(() => [
            g("li", null, [
              J(re, {
                size: S(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : A("", !0),
        N(a.$slots, "default")
      ]);
    };
  }
}), Di = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Ce.topRight },
    text: {}
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("span", {
      class: O(["badge", `is-${s.position}`])
    }, [
      Q(T(s.text) + " ", 1),
      N(a.$slots, "default")
    ], 2));
  }
}), wi = /* @__PURE__ */ k({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    hasArrow: { type: Boolean, default: !1 },
    position: { default: Re.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    alwaysActive: { type: Boolean, default: !1 },
    textAlign: { default: Ue.left }
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), E(be(a.is), {
      class: O([
        s.hasArrow ? "has-tooltop-arrow" : "",
        s.position ? `has-tooltip-${s.position}` : "",
        s.multiline ? "has-tooltip-multiline" : "",
        s.type ? `has-tooltip-${s.type}` : "",
        s.textAlign ? `has-tooltip-text-${s.text}` : "",
        s.alwaysActive ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": a.text
    }, {
      default: I(() => [
        N(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Bi = /* @__PURE__ */ k({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: X.normal },
    isDelete: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, a = v(() => {
      let t = ["tag", `is-${s.type}`, `is-${s.size}`];
      return s.light && t.push("is-light"), s.rounded && t.push("is-rounded"), s.isDelete && t.push("is-delete"), t;
    });
    return (t, n) => (i(), c("span", {
      class: O(a.value)
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Fi = /* @__PURE__ */ k({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("span", {
      class: O(["tags", s.size === null ? "" : "are-" + s.size, s.addons ? "has-addons" : ""])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ft,
  Badge: Di,
  Button: Z,
  ButtonAdd: fr,
  ButtonCancel: ho,
  ButtonDelete: gr,
  ButtonDisable: vr,
  ButtonDownload: yr,
  ButtonEdit: _r,
  ButtonEnable: kr,
  ButtonOkay: bo,
  ButtonPrint: $r,
  ButtonRefresh: mo,
  ButtonSave: Sr,
  ButtonUpload: Mr,
  Chart: xr,
  CheckMark: Tr,
  DynamicSlot: Jr,
  Filter: Er,
  Icon: H,
  Menu: fi,
  MenuEntry: go,
  MenuLabel: vi,
  MenuList: Mi,
  Message: Wr,
  NavBar: mi,
  Notification: pe,
  PageNotification: Ur,
  Pagination: Kr,
  Progress: re,
  Promised: he,
  Tag: Bi,
  Tags: Fi,
  ToolTip: wi
}, Symbol.toStringTag, { value: "Module" })), xi = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: s }) {
    const a = s, t = e, n = B(!1), l = B(!1), r = B(null), o = v(() => (t.disabled ?? !1) || l.value && t.handlesearch !== null), d = v(() => {
      let p = [];
      return o || p.push("has-cursor"), n.value ? p.push("is-move") : p.push("is-grab"), p;
    }), u = (p) => o.value ? (p.preventDefault(), !1) : (p.stopPropagation(), p.dataTransfer.setData("value", JSON.stringify(t.CopyData)), n.value = !0, a("started"), !0), h = () => {
      n.value = !1, l.value = !0, a("stopped");
    };
    return ie(() => {
      if (t.handlesearch) {
        let p = $(r.value).find(t.handlesearch);
        p.length > 0 && (l.value = !0, p.on("mousedown", () => l.value = !1), p.on("mouseup", () => l.value = !0));
      }
    }), (p, m) => (i(), E(be(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: O(d.value)
    }, {
      default: I(() => [
        N(p.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Ti = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: s }) {
    const a = e, t = s, n = B(!1), l = B(null), r = B(null);
    v(() => a.tag ?? "div");
    const o = (m) => {
      const D = r.value.getBoundingClientRect(), F = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = ee.center;
      return m.x < F.x ? m.y < F.y ? b = ee.topLeft : b = ee.bottomLeft : m.y < F.y ? b = ee.topRight : b = ee.bottomRight, l.value = b, l.value;
    }, d = (m) => {
      m.preventDefault(), n.value = !0, t("itemEntered", o(m));
    }, u = (m) => {
      n.value = !0, t("itemExited", o(m));
    }, h = (m) => {
      m.preventDefault(), t("itemMoved", o(m));
    }, p = (m) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(m.dataTransfer.getData("value"))))
        return !1;
      m.stopPropagation(), m.preventDefault(), t("itemAdded", JSON.parse(m.dataTransfer.getData("value")), l.value), n.value = !1;
    };
    return (m, D) => (i(), E(be(a.tag), {
      ref_key: "handle",
      ref: r,
      class: O({ "is-bordered": n.value }),
      onDragenter: d,
      onDragleave: u,
      onDrop: p,
      onDragover: h
    }, {
      default: I(() => [
        N(m.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), vo = /* @__PURE__ */ k({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const s = e, a = v(() => {
      var t = ["block-list", "has-radius", `is-${s.type ?? "primary"}`];
      return s.compact && t.push("is-small"), s.outlined && t.push("is-outlined"), s.highlighted && t.push("is-highlighted"), t;
    });
    return (t, n) => (i(), E(be(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: O(a.value)
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = v(() => {
      var l = [];
      return a.type && l.push("is-" + a.type), a.outlined && l.push("is-outlined"), a.highlighted && l.push("is-highlighted"), a.icon && l.push("has-icon"), l;
    });
    return (l, r) => (i(), c("li", {
      class: O(n.value)
    }, [
      a.icon ? (i(), c("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        J(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      N(l.$slots, "default")
    ], 2));
  }
}), Ji = /* @__PURE__ */ k({
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
    const a = e, t = s, n = B([]), l = B(-1), r = B(-1), o = B(null);
    C(a.Items, (m, D) => {
      n.value = [...D];
    }), ie(() => {
      a.Items !== null && (n.value = [...a.Items]);
    });
    const d = (m) => {
      var D = m.target.getBoundingClientRect(), F = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = ee.center;
      return m.y < F.y ? b = ee.top : b = ee.bottom, b;
    }, u = (m, D) => {
      D.stopPropagation(), l.value = m, D.dataTransfer.setData("value", null);
    }, h = (m, D) => {
      l.value && (D.stopPropagation(), m != l.value ? (r.value = m, o.value = d(D)) : (r.value = -1, o.value = null));
    }, p = (m) => {
      if (l.value) {
        m.stopPropagation();
        var D = r.value + (o.value == ee.top ? 0 : 1), F = n.value.splice(D, 1)[0];
        D >= l.value && D--, n.value.splice(D, 0, F), r.value = -1, o.value = null, l.value = -1, t("sorted", n.value);
      }
    };
    return (m, D) => (i(), E(vo, {
      type: m.type,
      compact: m.compact,
      outlined: m.outlined,
      highlighted: m.highlighted,
      onDrop: p
    }, {
      default: I(() => [
        (i(!0), c(V, null, G(n.value, (F, b) => (i(), c(V, null, [
          R(J(De, null, {
            default: I(() => [
              J(pe, { light: !0 }, {
                default: I(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === S(ee).top]
          ]),
          J(De, {
            draggable: "true",
            onDragstart: (z) => u(b, z),
            onDragend: D[0] || (D[0] = (z) => l.value = null),
            onDragover: (z) => h(b, z),
            class: O({ "has-cursor": !0, "is-move": r.value == b, "is-grab": r.value != b })
          }, {
            default: I(() => [
              N(m.$slots, "item", {
                item: F,
                index: b
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          R(J(De, null, {
            default: I(() => [
              J(pe, { light: !0 }, {
                default: I(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === S(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: xi,
  DropZone: Ti,
  Sortable: Ji
}, Symbol.toStringTag, { value: "Module" })), je = "HiddenFields", He = "DisabledFields", Ni = (e) => e, ne = (e, s) => {
  const a = s("Translate", Ni);
  return v(() => e.translate ?? a);
};
function Ge(e, s) {
  const a = s(je), t = s(He), n = v(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), l = v(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: n, disabledValues: l };
}
const yo = (e) => {
  let s = [], a = [], t = 0;
  return e.forEach((n) => {
    let l = n.form_columns ?? 12;
    t + l > 12 && (s.push(a), a = [], t = 0), a.push(n), t += l, t === 12 && (s.push(a), a = [], t = 0);
  }), a.length > 0 && s.push(a), s;
};
async function qe(e) {
  let s = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? s = a : s = Promise.resolve(a);
  let t = await s, n = [];
  return t.value !== void 0 ? n = t.value : n = t, n;
}
const Pi = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Ei = { class: "control" }, zi = { class: "tags has-addons" }, Ii = { class: "tag is-link" }, Li = ["onClick"], Wi = { key: 0 }, Vi = ["placeholder"], Ci = { class: "dropdown-menu" }, Ri = { class: "dropdown-content" }, Ui = ["onClick"], ji = {
  key: 1,
  class: "dropdown-item"
}, _o = /* @__PURE__ */ k({
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
  setup(e, { expose: s, emit: a }) {
    const t = a, n = e, l = ne(n, P), r = B([]), o = B(null), d = B(null), u = B(null), h = B(null);
    C(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (n.values != null && n.values != null) {
            let W = [];
            for (let f = 0; f < n.values.length && ((n.values[f].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || n.values[f].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && W.push(n.values[f]), W.length != 10); f++)
              ;
            d.value = W;
          } else {
            let f = await (await (n.fetch ?? fetch)(`${n.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            f.length > 10 && f.splice(10, f.length - 10), d.value = f;
          }
      } else
        d.value = null, $(h.value).empty();
    });
    const p = () => {
      if (r.value.length == 0)
        return null;
      const w = r.value.slice();
      return n.limit != null && n.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, m = async (w) => {
      if (w == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (f) => {
            if (f.id !== void 0 && f.name !== void 0)
              return f;
            {
              let M = await (await (n.fetch ?? fetch)(`${n.callbackurl}?${f.id === void 0 ? "q=" + encodeURIComponent(f) : "id=" + encodeURIComponent(f.id)}`)).json();
              return M.length > 0 ? (n.disabled && (M[0].readonly = !0), M[0]) : null;
            }
          })
        );
        r.value = W.filter((f) => f !== null), t("value_changed", { name: n.name, value: p() });
      }
    }, D = (w) => {
      w.preventDefault(), o.value = w.clipboardData.getData("text/plain");
    }, F = (w) => {
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
    }, b = () => {
      o.value = null;
    }, z = () => {
      h.value.focus();
    }, _ = (w) => {
      r.value.push(w), b(), t("value_changed", { name: n.name, value: p() });
    }, y = (w) => {
      r.value.splice(w, 1), z(), t("value_changed", { name: n.name, value: p() });
    };
    return s({ getValue: p, setValue: m }), (w, W) => (i(), c("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: z
    }, [
      g("div", Pi, [
        (i(!0), c(V, null, G(r.value, (f, ae) => (i(), c("div", Ei, [
          g("div", zi, [
            g("a", Ii, T(S(l)(f.name)), 1),
            f.readonly ? A("", !0) : (i(), c("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (M) => y(ae)
            }, null, 8, Li))
          ])
        ]))), 256)),
        n.disabled ? A("", !0) : (i(), c("div", Wi, [
          R(g("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: S(l)(n.title),
            contenteditable: "",
            class: O(u.value),
            onFocus: W[0] || (W[0] = (f) => {
              u.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (f) => {
              u.value = null;
            }),
            onKeydown: F,
            onPaste: D
          }, null, 42, Vi), [
            [le, r.value.length < n.limit || n.limit == null]
          ])
        ]))
      ]),
      g("div", {
        class: O(["dropdown", { "is-active": d.value != null && o.value != null && o.value != "" }])
      }, [
        g("div", Ci, [
          g("div", Ri, [
            d.value != null && d.value.length > 0 ? (i(!0), c(V, { key: 0 }, G(d.value, (f) => (i(), c("a", {
              class: "dropdown-item",
              onClick: (ae) => _(f)
            }, T(S(l)(f.name)), 9, Ui))), 256)) : (i(), c("a", ji, "No Results"))
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = ne(a, P);
    return (l, r) => (i(), E(Z, {
      type: l.sstyle,
      icon: a.icon ? a.icon : null,
      title: S(n)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Hi = { class: "checkbox is-block" }, Gi = ["value", "disabled"], ko = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = Y(P), l = v(() => L("Form.Error", n)), r = a, o = ne(t, P), d = B([]), u = B(!1), h = v(async () => {
      if (t.values == null)
        return [];
      {
        let b = await qe(t.values), z = b.filter((_) => _.selected).map((_) => _.value);
        return d.value === null || d.value.length == 0 ? d.value = z.length > 0 ? [...z] : [] : (z = d.value, b = b.map((_) => ({
          label: _.label,
          value: _.value,
          selected: z.some((y) => y === _.value)
        }))), b;
      }
    });
    C(d, (b) => {
      r("value_changed", { name: t.name, value: p() });
    });
    const p = () => d.value.length == 0 ? null : d.value, m = (b) => {
      u.value = !0, d.value.splice(0), b !== null && (d.value = [...b]), u.value = !1, r("value_changed", { name: t.name, value: p() });
    }, { hiddenValues: D, disabledValues: F } = Ge(t.name, P);
    return s({ getValue: p, setValue: m }), (b, z) => (i(), c("div", null, [
      J(he, { promise: h.value }, {
        default: I(({ response: _ }) => [
          _ !== null ? (i(!0), c(V, { key: 0 }, G(_, (y) => R((i(), c("label", Hi, [
            R(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: y.value,
              "onUpdate:modelValue": z[0] || (z[0] = (w) => d.value = w),
              disabled: t.disabled || S(F).some((w) => w === y.value.toString())
            }, null, 8, Gi), [
              [We, d.value]
            ]),
            Q(" " + T(S(o)(y.label)), 1)
          ], 512)), [
            [le, !S(D).some((w) => w === y.value.toString())]
          ])), 256)) : A("", !0)
        ]),
        pending: I(() => [
          J(S(re))
        ]),
        rejected: I(() => [
          J(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), qi = { class: "checkbox" }, Yi = ["name", "disabled"], Ki = {
  key: 0,
  class: "help is-danger"
}, $o = /* @__PURE__ */ k({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = ne(t, P), r = v(() => l.value(t.label)), o = B(!1);
    return C(o, (h) => n("value_changed", { name: t.name, value: h })), s({ getValue: () => o.value, setValue: (h) => {
      o.value = h;
    } }), (h, p) => (i(), c("label", qi, [
      R(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": p[0] || (p[0] = (m) => o.value = m)
      }, null, 8, Yi), [
        [We, o.value]
      ]),
      Q(" " + T(r.value) + " ", 1),
      t.required ? (i(), c("span", Ki, "*")) : A("", !0)
    ]));
  }
}), Pe = (e, s) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + s), a;
}, j = (e, s, a) => {
  let t = e;
  for (; t.length < a; )
    t = s + t;
  return t;
}, $e = (e, s, a) => {
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
      t += `${L("Date.Weekdays." + (e.length > 3 ? l : l.substring(0, 3)), s)}`;
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
      let r = a.getTimezoneOffset() * -1, o = parseInt((r / 60).toFixed(0)), d = r - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${o < 0 ? "-" : "+"}${j(Math.abs(o).toString(), "0", 2) + ":" + j(Math.abs(d).toString(), "0", 2)}`;
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
      t += `${L("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), s)}`;
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
}, fe = (e, s, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", n = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        n != "" && (t += $e(n, s, e), n = ""), t += a.charAt(l + 1), l++;
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
        n != "" && n.charAt(0) != a.charAt(l) ? (t += $e(n, s, e), n = "") : n += a.charAt(l);
        break;
      default:
        n != "" && (t += $e(n, s, e), n = ""), t += a.charAt(l);
        break;
    }
  return n != "" && (t += $e(n, s, e), n = ""), t;
}, Qi = { class: "control" }, Xi = ["name", "id", "disabled"], tt = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ye = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = B(null), r = v(() => {
      if (l.value == null || l.value == "")
        return null;
      var u = Number(l.value.substring(3, 5)), h = Number(l.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return C(l, (u) => {
      n("value_changed", { name: t.name, value: u });
    }), s({ getValue: () => l.value, setValue: (u) => {
      if (u != null && tt.test(u)) {
        var h = tt.exec(u);
        u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      l.value = u;
    } }), (u, h) => (i(), c("div", Qi, [
      R(g("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p),
        disabled: t.disabled,
        style: Le(r.value)
      }, null, 12, Xi), [
        [_e, l.value]
      ])
    ]));
  }
});
const Zi = { class: "control has-icons-left has-icons-right" }, eu = ["name", "id", "placeholder", "disabled"], tu = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), au = { class: "modal-content" }, su = { class: "panel is-primary is-dateselect" }, nu = { class: "panel-heading" }, lu = { class: "columns card-header-title" }, ou = { class: "column" }, ru = { class: "column has-text-centered" }, iu = { class: "column has-text-right" }, uu = { class: "panel-block" }, du = { class: "table is-striped has-text-centered" }, cu = ["onClick"], pu = { key: 0 }, hu = {
  colspan: "100%",
  class: "has-text-centered"
}, bu = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), So = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = B(null), n = e, l = a, r = B(!1), o = B(null), d = B(null), u = st({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = Y(P), p = we({
      Sun: v(() => L("Date.Weekdays.Sun", h)),
      Mon: v(() => L("Date.Weekdays.Mon", h)),
      Tue: v(() => L("Date.Weekdays.Tue", h)),
      Wed: v(() => L("Date.Weekdays.Wed", h)),
      Thu: v(() => L("Date.Weekdays.Thu", h)),
      Fri: v(() => L("Date.Weekdays.Fri", h)),
      Sat: v(() => L("Date.Weekdays.Sat", h))
    }), m = v(() => o.value !== null && (n.includeTime ? Se : ke).test(o.value)), D = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!Se.test(o.value) && n.includeTime)
          return null;
        if (!n.includeTime && !ke.test(o.value))
          return null;
        if (ke.test(o.value) && n.includeTime)
          return null;
        let M = n.includeTime ? Se.exec(o.value) : ke.exec(o.value);
        return new Date(
          parseInt(M[3]),
          parseInt(M[2]) - 1,
          parseInt(M[1]),
          n.includeTime ? parseInt(M[4]) : 0,
          n.includeTime ? parseInt(M[5]) : 0,
          0,
          0
        );
      }
    };
    C(o, (M) => {
      if (M == null)
        l("value_changed", { name: n.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(M) && !Se.test(M)) {
        M = M.replaceAll(/[^0-9]/g, "");
        for (var x = [], U = 0; U < M.length; U += 2)
          U == 4 ? (x.push(M.substring(U, Math.min(M.length - U, 4) + U)), U += 2) : x.push(M.substring(U, Math.min(M.length - U, 2) + U));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), M = x.join(""), !n.includeTime && M.length > 8 && (M = M.substring(0, 8)), M.length >= 2 && (M = M.substring(0, 2) + "-" + (M.length > 2 ? M.substring(2) : "")), M.length >= 5 && (M = M.substring(0, 5) + "-" + (M.length > 5 ? M.substring(5) : "")), M.length >= 9 && n.includeTime && (M = M.substring(0, 9) + " " + (M.length > 9 ? M.substring(9) : "")), M.length >= 11 && (M = M.substring(0, 11) + ":" + (M.length > 11 ? M.substring(11) : "")), o.value = M;
      } else {
        var se = D();
        m && l("value_changed", { name: n.name, value: se }), u.Month = se.getMonth(), u.Year = se.getFullYear();
      }
    });
    const F = v(() => fe(new Date(u.Year, u.Month, 1), h, "MMMM")), b = v(() => {
      var M = [], x = new Date(u.Year, u.Month, 1);
      x = Pe(x, x.getDay() * -1);
      for (var U = D(), se = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); x.getMonth() != se; ) {
        for (var Je = [], Ke = 0; Ke < 7; Ke++)
          Je.push({
            Number: x.getDate(),
            Disabled: x.getMonth() != u.Month,
            isToday: fe(x, h, "yyyy-MM-dd") == fe(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: U != null && fe(x, h, "yyyy-MM-dd") == fe(U, h, "yyyy-MM-dd")
          }), x = Pe(x, 1);
        M.push(Je);
      }
      return M;
    });
    s({ getValue: D, setValue: function(M) {
      M == null ? o.value = null : o.value = fe(M, h, "dd-MM-yyyy" + (n.includeTime ? " HH:mm" : ""));
    } });
    const _ = (M) => {
      M.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + M.value : o.value = `${j((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year} ${M.value}`;
    }, y = (M) => {
      if (!M.Disabled && !M.isSelected)
        if (o.value === null)
          o.value = `${j(M.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (n.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var x = o.value.split(" ");
          x[0] = `${j(M.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}`, o.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      o.value = d.value, r.value = !1;
    }, W = () => {
      n.disabled || (d.value = o.value, r.value = !0);
    }, f = () => {
      n.disabled || (o.value = null);
    }, ae = (M) => {
      u.Month + M == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + M == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += M;
    };
    return (M, x) => (i(), c("div", null, [
      g("div", Zi, [
        R(g("input", {
          class: "input is-expanded",
          name: n.name,
          id: n.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (U) => o.value = U),
          placeholder: "DD-MM-YYYY" + (n.includeTime ? " HH:mm" : ""),
          disabled: n.disabled
        }, null, 8, eu), [
          [_e, o.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          J(S(H), { icon: "calendar-alt" })
        ]),
        g("span", {
          class: "icon is-small is-right is-clickable",
          onClick: f
        }, [
          J(S(H), { icon: "window-close" })
        ])
      ]),
      g("div", {
        class: O(["modal", { "is-active": r.value }])
      }, [
        tu,
        g("div", au, [
          g("div", su, [
            g("div", nu, [
              g("div", lu, [
                g("div", ou, [
                  J(S(H), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (U) => ae(-1))
                  })
                ]),
                g("div", ru, T(F.value) + " " + T(u.Year), 1),
                g("div", iu, [
                  J(S(H), {
                    icon: "arrow-circle-right",
                    onClick: x[2] || (x[2] = (U) => ae(1))
                  })
                ])
              ])
            ]),
            g("div", uu, [
              g("table", du, [
                g("thead", null, [
                  g("tr", null, [
                    g("th", null, T(S(p).Sun), 1),
                    g("th", null, T(S(p).Mon), 1),
                    g("th", null, T(S(p).Tue), 1),
                    g("th", null, T(S(p).Wed), 1),
                    g("th", null, T(S(p).Thu), 1),
                    g("th", null, T(S(p).Fri), 1),
                    g("th", null, T(S(p).Sat), 1)
                  ])
                ]),
                g("tbody", null, [
                  (i(!0), c(V, null, G(b.value, (U) => (i(), c("tr", null, [
                    (i(!0), c(V, null, G(U, (se) => (i(), c("td", {
                      class: O(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Je) => y(se)
                    }, T(se.Number), 11, cu))), 256))
                  ]))), 256))
                ]),
                n.includeTime ? (i(), c("tfoot", pu, [
                  g("tr", null, [
                    g("td", hu, [
                      J(Ye, {
                        ref: t.value,
                        name: `${n.name}-time`,
                        disabled: n.disabled,
                        onValue_changed: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : A("", !0)
              ])
            ]),
            g("div", bu, [
              J(S(bo), {
                addonclass: "card-footer-item",
                disabled: !m.value,
                onClick: x[3] || (x[3] = (U) => r.value = !1)
              }, null, 8, ["disabled"]),
              J(S(ho), {
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
const Mo = /* @__PURE__ */ k({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: s, emit: a }) {
    let t, n;
    const l = Ho(P);
    xe([`${l}summernote-lite.min.css`]), [t, n] = Lo(() => import(`${l}summernote`)), await t, n();
    const r = B(null), o = e, d = a;
    return C([o.disabled], (p) => {
      r.value != null && $(r.value).summernote(p ? "disable" : "enable");
    }), s({ getValue: () => $(r.value).summernote("code"), setValue: (p) => {
      $(r.value).summernote("code", p);
    } }), ie(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(p) {
            d("value_changed", { name: o.name, value: p });
          }
        }
      }), (o.disabled ?? !1) && $(r.value).summernote("disable");
    }), Wo(() => {
      $(r.value).summernote("destroy");
    }), (p, m) => (i(), c("div", {
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
    const s = e, a = ne(s, P);
    return (t, n) => (i(), E(be(s.subtype), null, {
      default: I(() => [
        Q(T(S(a)(s.label)), 1)
      ]),
      _: 1
    }));
  }
}), mu = ["name"], Do = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = B(null);
    return C(l, (d) => n("value_changed", { name: t.name, value: d })), s({ getValue: () => l.value, setValue: (d) => {
      l.value = d;
    } }), (d, u) => R((i(), c("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h)
    }, null, 8, mu)), [
      [_e, l.value]
    ]);
  }
}), fu = ["name", "disabled", "min", "max", "step"], wo = /* @__PURE__ */ k({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = B(null), r = () => {
      if (l.value === "")
        return null;
      let d = parseInt(l.value);
      return t.min !== void 0 && d < t.min * 1 || t.max !== void 0 && d > t.max * 1 ? null : d;
    }, o = (d) => {
      l.value = d === null ? "" : d.toString();
    };
    return C([l], (d) => n("value_changed", { name: t.name, value: r() })), s({ getValue: r, setValue: o }), (d, u) => R((i(), c("input", {
      type: "number",
      class: "input",
      name: d.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h),
      disabled: d.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, fu)), [
      [_e, l.value]
    ]);
  }
}), gu = ["id"], Ie = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const s = e, a = ne(s, P);
    return (t, n) => (i(), c("p", {
      id: s.name
    }, T(S(a)(s.label)), 9, gu));
  }
}), vu = { class: "radio" }, yu = ["name", "value", "disabled"], _u = /* @__PURE__ */ g("br", null, null, -1), Bo = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = Y(P), l = v(() => L("Form.Error", n)), r = a, o = ne(t, P), d = B(null), u = function() {
      return d.value;
    };
    C(d, (F) => {
      r("value_changed", { name: t.name, value: u() });
    });
    const h = v(async () => {
      if (t.values == null)
        return [];
      {
        let F = await qe(t.values);
        return d.value === null && F.some((b) => b.selected) && (d.value = F.find((b) => b.selected).value), F.map((b) => ({
          label: b.label,
          value: b.value,
          selected: d.value === b.value
        }));
      }
    }), p = (F) => {
      d.value = F;
    }, { hiddenValues: m, disabledValues: D } = Ge(t.name, P);
    return s({ getValue: u, setValue: p }), (F, b) => (i(), c("div", null, [
      J(he, { promise: h.value }, {
        default: I(({ response: z }) => [
          F.values != null ? (i(!0), c(V, { key: 0 }, G(z, (_) => (i(), c(V, null, [
            R(g("label", vu, [
              g("input", {
                type: "radio",
                name: t.name,
                value: _.value,
                class: "radio",
                disabled: t.disabled || S(D).some((y) => y === _.value.toString())
              }, null, 8, yu),
              Q(" " + T(S(o)(_.label)), 1)
            ], 512), [
              [le, !S(m).some((y) => y === _.value.toString())]
            ]),
            _u
          ], 64))), 256)) : A("", !0)
        ]),
        pending: I(() => [
          J(S(re))
        ]),
        rejected: I(() => [
          J(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), ku = { class: "select" }, $u = ["id", "name", "multiple", "disabled"], Su = ["value", "selected", "disabled"], Mu = ["label"], Du = ["value", "selected", "disabled"], Fo = (e, s, a) => {
  let t = {
    label: e === null ? s.label : `${e}->${s.label}`,
    values: []
  }, n = a.length;
  return a.push(t), s.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = Fo(t.label, l, a);
  }), a[n].values.length == 0 && a.splice(n, 1), a;
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
  setup(e, { expose: s, emit: a }) {
    const t = e, n = Y(P), l = v(() => L("Form.Error", n)), r = a, o = ne(t, P), d = B(null), u = B(!1), h = v(async () => {
      if (t.values == null)
        return [];
      {
        let b = await qe(t.values), z = b.filter((y) => y.selected).map((y) => y.value);
        b.some((y) => y.values !== void 0) && b.filter((y) => y.values !== void 0).forEach((y) => {
          z = z.concat(
            y.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), d.value === null || d.value.length === 0 ? d.value = null : (b = b.map((y) => {
          let w = y;
          return w.values !== void 0 && (w.values = w.values.map((W) => (W.selected = d.value.some((f) => f === W.value), W))), w;
        }), d.value.forEach((y) => {
          b.some((w) => w.value !== void 0 && w.value === y || w.values !== void 0 && w.values.some((W) => W.value === y)) || b.push({
            label: y,
            value: y
          });
        }));
        let _ = [];
        return b.forEach((y) => {
          y.values === void 0 ? _.push(y) : _ = Fo(y.label, y, _);
        }), _;
      }
    }), p = () => d.value == null || d.value.length == 0 ? null : t.multiple ? d.value.slice() : Array.isArray(d.value) ? d.value[0] : d.value;
    C(d, () => {
      u.value || r("value_changed", { name: t.name, value: p() });
    }), C(u, (b) => {
      b || r("value_changed", { name: t.name, value: p() });
    });
    const m = (b) => {
      u.value = !0, b != null ? t.multiple ? d.value = Array.isArray(b) ? b : [b] : d.value = b : t.multiple ? d.value = [] : d.value = null, u.value = !1;
    }, { hiddenValues: D, disabledValues: F } = Ge(t.name, P);
    return s({ getValue: p, setValue: m }), (b, z) => (i(), c("div", ku, [
      h.value != null ? (i(), E(he, {
        key: 0,
        promise: h.value
      }, {
        default: I(({ response: _ }) => [
          R(g("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: O([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": z[0] || (z[0] = (y) => d.value = y),
            disabled: t.disabled
          }, [
            _ != null ? (i(!0), c(V, { key: 0 }, G(_, (y) => (i(), c(V, null, [
              y.values == null ? R((i(), c("option", {
                key: 0,
                value: y.value,
                selected: y.selected,
                disabled: S(F).some((w) => w === y.value.toString())
              }, T(S(o)(y.label)), 9, Su)), [
                [le, !S(D).some((w) => w === y.value.toString())]
              ]) : A("", !0),
              y.values != null ? (i(), c("optgroup", {
                key: 1,
                label: S(o)(y.label)
              }, [
                (i(!0), c(V, null, G(y.values, (w) => R((i(), c("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: S(F).some((W) => W === w.value.toString())
                }, T(S(o)(w.label)), 9, Du)), [
                  [le, !S(D).some((W) => W === w.value.toString())]
                ])), 256))
              ], 8, Mu)) : A("", !0)
            ], 64))), 256)) : A("", !0)
          ], 10, $u), [
            [Vo, d.value]
          ])
        ]),
        pending: I(() => [
          J(S(re))
        ]),
        rejected: I(() => [
          J(S(pe), {
            type: S(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : A("", !0)
    ]));
  }
}), wu = { class: "field" }, Bu = ["id", "name", "disabled"], Fu = ["for"], Ou = {
  key: 0,
  class: "help is-danger"
}, xo = /* @__PURE__ */ k({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = ne(t, P), r = B(!1);
    return C(r, (u) => n("value_changed", { name: t.name, value: u })), s({ getValue: () => r.value, setValue: (u) => {
      r.value = u;
    } }), (u, h) => (i(), c("div", wu, [
      R(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => r.value = p),
        disabled: t.disabled
      }, null, 8, Bu), [
        [We, r.value]
      ]),
      g("label", { for: u.name }, [
        Q(T(S(l)(t.label)) + " ", 1),
        t.required ? (i(), c("span", Ou, "*")) : A("", !0)
      ], 8, Fu)
    ]));
  }
}), xu = ["type", "name", "disabled", "maxlength"], To = /* @__PURE__ */ k({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = B(null);
    return C(l, (d) => n("value_changed", { name: t.name, value: d })), s({ getValue: () => l.value, setValue: (d) => {
      l.value = d;
    } }), (d, u) => R((i(), c("input", {
      type: d.subtype,
      class: "input",
      name: d.name,
      disabled: d.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => l.value = h)
    }, null, 8, xu)), [
      [Co, l.value]
    ]);
  }
}), Tu = ["name", "rows", "cols", "maxlength", "disabled"], Jo = 9, ge = String.fromCharCode(Jo), Me = String.fromCharCode(10), Ao = /* @__PURE__ */ k({
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
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = B(null);
    C(l, (u) => {
      n("value_changed", { name: t.name, value: u });
    });
    const r = () => l.value, o = (u) => {
      l.value = u;
    };
    s({ getValue: r, setValue: o });
    const d = (u) => {
      if (t.supportsTab) {
        let h = r();
        switch (u.keyCode) {
          case Jo:
            let p = u.target.selectionStart, m = u.target.selectionEnd, D = h.substring(0, p), F = h.length > m ? h.substring(m) : "", b = p == m ? "" : h.substring(p, m);
            if (b.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? b.startsWith(ge) ? (b = b.substring(1), p--) : D.endsWith(ge) && (D = D.substring(0, D.length - 1), p--) : b = ge + b;
            else {
              let z = !1;
              b.endsWith(Me) && (z = !0, b = b.substring(0, b.length - 1));
              let _ = b.split(Me);
              b = "", u.shiftKey && D.endsWith(ge) && (D = D.substring(0, D.length - 1), p--), _.forEach((y, w) => {
                u.shiftKey && y.startsWith(ge) ? y = y.substring(1) : u.shiftKey || (y = ge + y), b += y + (w === _.length - 1 ? "" : Me);
              }), z && (b += Me);
            }
            return h = D + b + F, p += b.length == 1 ? 1 : 0, m = p + (b.length == 1 ? 0 : b.length), o(h), u.target.selectionStart = p, u.target.selectionEnd = m, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, h) => R((i(), c("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: d,
      "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p)
    }, null, 40, Tu)), [
      [_e, l.value]
    ]);
  }
}), Ju = { class: "columns" }, No = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = P(je), r = P(He);
    s({ setValue: (p) => {
      h.forEach((m) => {
        switch (m.type) {
          case "subform":
            m.setValue(p);
            break;
          default:
            m.setValue !== void 0 && (p === null ? m.setValue(null) : Object.keys(p).some((D) => D === m.fieldName) ? m.setValue(p[m.fieldName]) : Object.keys(p).some((D) => D === m.altFieldName) && m.setValue(p[m.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var p = {};
      return h.forEach((m) => {
        if (m.getValue != null)
          switch (m.type) {
            case "subform":
              p = $.extend(p, m.getValue());
              break;
            default:
              p[m.fieldName] = m.getValue();
              break;
          }
      }), p;
    }, isValid: () => !h.some((p) => !(p.isValid === void 0 || p.isValid())) });
    const h = t.inputs.map((p) => B(null));
    return (p, m) => (i(), c("div", Ju, [
      (i(!0), c(V, null, G(t.inputs, (D, F) => (i(), E(Po, {
        ref_for: !0,
        ref: (b) => S(h)[F] = b,
        input: D,
        onValue_changed: m[0] || (m[0] = (b) => n("value_changed", b)),
        onButton_clicked: m[1] || (m[1] = (b) => n("button_clicked", b)),
        disabled: t.disabled || S(r).some((b) => b === D.name),
        hidden: S(l).some((b) => b === D.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Au = ["id", "name"], Nu = /* @__PURE__ */ k({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a;
    let l = [];
    B(!1);
    const r = v(() => {
      let h = yo(t.fields);
      return l = h.map((p) => B(null)), h;
    });
    return s({ isValid: () => !l.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => l.forEach((p) => p.setValue(h)), getValue: () => {
      var h = {};
      return l.forEach((p) => {
        h = $.extend(h, p.getValue());
      }), h;
    } }), (h, p) => R((i(), c("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (i(!0), c(V, null, G(r.value, (m, D) => (i(), E(No, {
        ref_for: !0,
        ref: (F) => S(l)[D] = F,
        inputs: m,
        disabled: t.disabled,
        onValue_changed: p[0] || (p[0] = (F) => n("value_changed", F)),
        onButton_clicked: p[1] || (p[1] = (F) => n("button_clicked", F))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Au)), [
      [le, !t.hidden]
    ]);
  }
}), Pu = ["for"], Eu = {
  key: 0,
  class: "help is-danger"
}, zu = { class: "control" }, Iu = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Lu = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Po = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: s, emit: a }) {
    const t = B(null), n = a, l = e, r = ne(l, P), o = we(B(l.input.type)), d = v(() => {
      let f = null;
      switch (l.input.type) {
        case "autocomplete":
          f = _o;
          break;
        case "button":
          f = Ee;
          break;
        case "checkbox-group":
          f = ko;
          break;
        case "checkbox":
          f = $o;
          break;
        case "date":
          f = So;
          break;
        case "full-editor":
          f = Mo;
          break;
        case "header":
          f = ze;
          break;
        case "hidden":
          f = Do;
          break;
        case "number":
          f = wo;
          break;
        case "paragraph":
          f = Ie;
          break;
        case "radio-group":
          f = Bo;
          break;
        case "select":
          f = Oo;
          break;
        case "Switch":
          f = xo;
          break;
        case "text":
          f = To;
          break;
        case "textarea":
          f = Ao;
          break;
        case "time":
          f = Ye;
          break;
        case "subform":
          f = Nu;
          break;
      }
      return f;
    }), u = function(f) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(f);
    };
    ie(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && u(l.input.value);
    });
    const h = v(() => l.input.disabled ?? l.disabled ?? !1), p = v(() => `is-${l.input.form_columns ?? 12}`), m = v(() => l.input.name), D = v(() => l.input.processVariable ?? l.input.name), F = v(() => Iu.some((f) => f === l.input.type) && l.input.label !== void 0 && l.input.label !== null), b = v(() => {
      let f = $.extend({}, l.input);
      return delete f.type, f.className != null && delete f.className, f.form_columns != null && delete f.form_columns, Lu.some((ae) => ae === l.input.type) && (f.translate = l.translate), f.disabled = l.disabled, f;
    }), z = (f) => {
      if (f.value !== void 0 && f.value !== null && Array.isArray(f.value)) {
        let ae = [...f.value];
        f.value = ae;
      }
      n("value_changed", f);
    }, _ = (f) => {
      n("button_clicked", f);
    }, y = () => {
      if (t.value != null && t.value.getValue != null) {
        let f = t.value.getValue();
        return f != null && Array.isArray(f) ? [...f] : f;
      }
      return null;
    };
    return s({ setValue: u, fieldName: m, type: o, altFieldName: D, getValue: y, isValid: () => {
      if (l.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (l.input.required ?? !1) {
        let f = y();
        return f != null && (Array.isArray(f) ? f.length > 0 : !0) && f.toString() !== "";
      }
      return !0;
    }, setValues: (f) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.setValues(f);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (f, ae) => R((i(), c("div", {
      class: O(["field column", [p.value]])
    }, [
      l.input.type == "header" ? (i(), E(ze, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (i(), E(Ie, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (i(), E(Ee, {
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
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (i(), c(V, { key: 3 }, [
        F.value ? (i(), c("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          Q(T(S(r)(l.input.label)) + " ", 1),
          l.input.required ? (i(), c("span", Eu, "*")) : A("", !0)
        ], 8, Pu)) : A("", !0),
        g("div", zu, [
          (i(), E(be(d.value), K(b.value, {
            onValue_changed: z,
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
const Wu = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Vu = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: s, emit: a }) {
    const t = e, n = a, l = ne(t, P);
    Ae("Translate", (_) => l.value(_));
    let r = [];
    const o = v(() => {
      if (t.elements != null) {
        let _ = yo(t.elements);
        return r = _.map((y) => B(null)), _;
      } else
        return null;
    }), d = () => {
      let _ = {};
      return r.forEach((y) => {
        _ = $.extend(_, y.getValue());
      }), _;
    }, u = (_) => {
      r.forEach((y) => y.setValue(_));
    }, h = () => !r.some((_) => !(_.isValid === void 0 || _.isValid())), p = B([]);
    Ae(je, we(p));
    const m = (_) => {
      Array.isArray(_) ? p.value = [...p.value, ..._] : p.value.push(_);
    }, D = (_) => {
      Array.isArray(_) ? p.value = p.value.filter((y) => _.indexOf(y) >= 0) : p.value = p.value.filter((y) => y !== _);
    }, F = B([]);
    return Ae(He, we(F)), s({ getValues: d, setValues: u, isValid: h, hideField: m, showField: D, disableField: (_) => {
      Array.isArray(_) ? F.value = [...F.value, ..._] : F.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? F.value = F.value.filter((y) => _.indexOf(y) >= 0) : F.value = F.value.filter((y) => y !== _);
    } }), (_, y) => (i(), c("form", Wu, [
      o.value != null ? (i(!0), c(V, { key: 0 }, G(o.value, (w, W) => (i(), E(No, {
        ref_for: !0,
        ref: (f) => S(r)[W] = f,
        inputs: w,
        transte: t.translate,
        key: W,
        onValue_changed: y[0] || (y[0] = (f) => n("value_changed", f)),
        onButton_clicked: y[1] || (y[1] = (f) => n("button_clicked", f)),
        disabled: _.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : A("", !0)
    ]));
  }
}), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: _o,
  Button: Ee,
  Checkbox: $o,
  CheckboxGroup: ko,
  ComponentForm: Vu,
  DateField: So,
  FormComponent: Po,
  FullEditor: Mo,
  Header: ze,
  Hidden: Do,
  NumberField: wo,
  Paragraph: Ie,
  RadioGroup: Bo,
  Select: Oo,
  Switch: xo,
  Text: To,
  TextArea: Ao,
  Time: Ye
}, Symbol.toStringTag, { value: "Module" })), Ru = { class: "hero-body" }, Uu = { class: "title" }, ju = {
  key: 0,
  class: "subtitle"
}, Hu = /* @__PURE__ */ k({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("section", {
      class: O(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + s.type])
    }, [
      g("div", Ru, [
        g("p", Uu, T(s.title), 1),
        s.subtitle ? (i(), c("p", ju, T(s.subtitle), 1)) : A("", !0)
      ])
    ], 2));
  }
}), Gu = (e, s) => {
  const a = e.__vccOpts || e;
  for (const [t, n] of s)
    a[t] = n;
  return a;
}, qu = {}, Yu = { class: "box" };
function Ku(e, s) {
  return i(), c("div", Yu, [
    N(e.$slots, "default")
  ]);
}
const Qu = /* @__PURE__ */ Gu(qu, [["render", Ku]]), Xu = {
  key: 0,
  class: "icon is-clickable"
}, Zu = /* @__PURE__ */ k({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const a = e, t = s;
    return (n, l) => (i(), c("li", {
      class: O({ "is-active": a.active })
    }, [
      g("a", {
        onClick: l[0] || (l[0] = (r) => t("click"))
      }, [
        a.icon ? (i(), c("span", Xu, [
          J(S(H), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : A("", !0),
        Q(" " + T(a.title), 1)
      ])
    ], 2));
  }
}), ed = /* @__PURE__ */ k({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Fe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const s = e, a = v(() => {
      let t = ["breadcrumb"];
      return s.alignment && s.alignment !== Fe.left && t.push(`is-${s.alignment}`), s.size && s.size !== X.normal && t.push(`is-${s.size}`), s.seperator && t.push(`has-${s.seperator}-seperator`), t;
    });
    return (t, n) => (i(), c("nav", {
      class: O(a.value),
      "aria-label": "breadcrumbs"
    }, [
      g("ul", null, [
        N(t.$slots, "default")
      ])
    ], 2));
  }
}), td = /* @__PURE__ */ k({
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
    return (a, t) => (i(), c("div", {
      class: O(["columns", [
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
      N(a.$slots, "default")
    ], 2));
  }
}), ad = /* @__PURE__ */ k({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const s = e, a = v(() => {
      var t = [];
      return s.size && t.push(`is-${s.size}`), s.offset && t.push(`is-offset-${s.offset}`), s.border && (s.border.some((n) => n === Te.all) ? t.push("is-bordered") : s.border.forEach((n) => t.push(`is-bordered-${n}`))), s.addonclass && t.push(s.addonclass), t;
    });
    return (t, n) => (i(), c("div", {
      class: O(["column", a.value])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), sd = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), nd = { class: "modal-content" }, ld = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, od = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const s = e;
    return (a, t) => (i(), c("div", {
      class: O({ modal: !0, "is-active": s.display }),
      style: Le(`z-index:${s.zIndex}`)
    }, [
      sd,
      g("div", nd, [
        N(a.$slots, "default")
      ]),
      s.hasClose ? (i(), c("button", ld)) : A("", !0)
    ], 6));
  }
}), rd = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), id = {
  key: 0,
  class: "card-icon"
}, ud = { class: "card-icon-wrapper" }, dd = { class: "modal-card-head" }, cd = { class: "modal-card-body" }, pd = { class: "modal-card-foot" }, hd = /* @__PURE__ */ k({
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
  setup(e, { emit: s }) {
    const a = e, t = s, n = {
      addonclass: "card-footer-item"
    }, l = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, r = v(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, d) => (i(), c("div", {
      class: O(["modal", { "is-active": a.show }])
    }, [
      rd,
      g("div", {
        class: O(["modal-card", r.value])
      }, [
        a.icon !== null ? (i(), c("div", id, [
          g("div", ud, [
            J(H, {
              icon: a.icon,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : A("", !0),
        g("div", dd, [
          N(o.$slots, "header", ce(ye(l))),
          o.hasClose ? (i(), c("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: d[0] || (d[0] = (u) => t("close"))
          })) : A("", !0)
        ]),
        g("div", cd, [
          N(o.$slots, "content")
        ]),
        g("div", pd, [
          N(o.$slots, "footer", ce(ye(n)))
        ])
      ], 2)
    ], 2));
  }
}), bd = {
  key: 0,
  class: "panel-heading"
}, md = {
  key: 1,
  class: "panel-tabs"
}, fd = { class: "panel-block" }, gd = /* @__PURE__ */ k({
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
    const s = e, a = v(() => s.blockNames ?? ["default"]), t = v(() => {
      let n = [];
      return s.type && n.push(`is-${s.type}`), s.fullWidth && n.push("is-fullwidth"), s.fullHeight && n.push("is-fullheight"), n;
    });
    return (n, l) => (i(), c("div", {
      class: O(["panel", t.value])
    }, [
      s.hasHeader ? (i(), c("div", bd, [
        N(n.$slots, "header")
      ])) : A("", !0),
      s.hasTabs ? (i(), c("div", md, [
        N(n.$slots, "tabs")
      ])) : A("", !0),
      (i(!0), c(V, null, G(a.value, (r) => (i(), c("div", fd, [
        N(n.$slots, r)
      ]))), 256))
    ], 2));
  }
}), vd = /* @__PURE__ */ k({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const s = e, a = v(() => {
      let n = [];
      return s.scrollable && n.push("table-container"), s.fixedHeader && s.scrollable && n.push("is-fixed"), n;
    }), t = v(() => {
      let n = ["table", "is-striped", "is-hoverable"];
      return s.fixedHeader && !s.scrollable && n.push("is-fixed"), s.fullWidth && n.push("is-fullwidth"), s.narrow && n.push("is-narrow"), n;
    });
    return (n, l) => (i(), c("div", {
      class: O(a.value)
    }, [
      g("table", {
        class: O(t.value)
      }, [
        g("thead", null, [
          N(n.$slots, "thead")
        ]),
        g("tbody", null, [
          N(n.$slots, "tbody")
        ]),
        g("tfoot", null, [
          N(n.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), yd = ["href"], _d = {
  key: 0,
  class: "icon is-small"
}, kd = /* @__PURE__ */ k({
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
    return (l, r) => (i(), c("li", {
      class: O({ "is-active": t.active })
    }, [
      g("a", {
        href: l.href,
        onClick: n
      }, [
        t.icon ? (i(), c("span", _d, [
          J(S(H), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : A("", !0),
        g("span", null, T(t.title), 1)
      ], 8, yd)
    ], 2));
  }
}), $d = /* @__PURE__ */ k({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const s = e, a = v(() => {
      let t = ["tabs"];
      return s.alignment ? t.push(`is-${s.alignment}`) : t.push("is-left"), s.type && t.push(`is-${s.type}`), s.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, n) => (i(), c("div", {
      class: O(a.value)
    }, [
      g("ul", null, [
        N(t.$slots, "default")
      ])
    ], 2));
  }
}), Sd = /* @__PURE__ */ k({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const s = e, a = v(() => {
      let t = ["tile", `is-${s.type}`];
      return s.size && t.push(`is-${s.size}`), s.borders && (s.borders.some((n) => n === Te.all) ? t.push("is-bordered") : s.borders.forEach((n) => t.push(`is-bordered-${n}`))), s.vertical && t.push("is-vertical"), t;
    });
    return (t, n) => (i(), c("div", {
      class: O(a.value)
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Hu,
  Box: Qu,
  Breadcrumbs: ed,
  BreadcrumbsItem: Zu,
  Card: fo,
  Column: ad,
  ColumnContainer: td,
  List: vo,
  ListItem: De,
  Modal: od,
  ModalCard: hd,
  Panel: gd,
  Table: vd,
  Tabs: $d,
  TabsTab: kd,
  Tile: Sd
}, Symbol.toStringTag, { value: "Module" }));
const at = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
xe(`${at.substring(0, at.lastIndexOf("/"))}/style.css`);
const Dd = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function wd(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Dd,
  setSkin: wd
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: xd,
  Button: Td,
  ButtonAdd: Jd,
  ButtonCancel: Ad,
  ButtonDelete: Nd,
  ButtonDisable: Pd,
  ButtonDownload: Ed,
  ButtonEdit: zd,
  ButtonEnable: Id,
  ButtonOkay: Ld,
  ButtonPrint: Wd,
  ButtonRefresh: Vd,
  ButtonSave: Cd,
  ButtonUpload: Rd,
  Chart: Ud,
  CheckMark: jd,
  DynamicSlot: Hd,
  Filter: Gd,
  Icon: qd,
  Message: Yd,
  Notification: Kd,
  PageNotification: Qd,
  Pagination: Xd,
  Promised: Zd,
  Progress: ec,
  NavBar: tc,
  Menu: ac,
  MenuLabel: sc,
  MenuList: nc,
  MenuEntry: lc,
  ToolTip: oc,
  Badge: rc,
  Tag: ic,
  Tags: uc
} = Oi, { DraggableItem: dc, DropZone: cc, Sortable: pc } = Ai, {
  AutoComplete: hc,
  CheckboxGroup: bc,
  Checkbox: mc,
  DateField: fc,
  ComponentForm: gc,
  FullEditor: vc,
  Header: yc,
  Hidden: _c,
  NumberField: kc,
  Paragraph: $c,
  RadioGroup: Sc,
  Select: Mc,
  Switch: Dc,
  Text: wc,
  TextArea: Bc,
  Time: Fc,
  FormComponent: Oc
} = Cu, {
  Banner: xc,
  Box: Tc,
  BreadcrumbsItem: Jc,
  Breadcrumbs: Ac,
  Card: Nc,
  Column: Pc,
  ColumnContainer: Ec,
  List: zc,
  ListItem: Ic,
  ModalCard: Lc,
  Panel: Wc,
  Table: Vc,
  Tabs: Cc,
  TabsTab: Rc,
  Tile: Uc,
  Modal: jc
} = Md, { AVAIABLE_SKINS: Hc, setSkin: Gc } = Bd, {
  ColorTypes: qc,
  NoticeTypes: Yc,
  Sizes: Kc,
  AnimationSpeeds: Qc,
  AnimationTypes: Xc,
  IconSizes: Zc,
  ChartLegendPositions: ep,
  ChartTypes: tp,
  DropZoneQuadrants: ap,
  BreadCrumbAlignments: sp,
  BreadCrumbSeperators: np,
  ColumnContainerModifiers: lp,
  ColumnSizes: op,
  ColumnOffsetSizes: rp,
  BorderTypes: ip,
  TabAlignments: up,
  TabStyles: dp,
  TileSizes: cp,
  TileTypes: pp,
  FixedNavBarPositions: hp,
  FixedMenuPositions: bp,
  BadgePositiions: mp,
  ToolTipPositions: fp,
  ToolTipTextAlignments: gp
} = Uo, { loadNonEs6Module: vp } = Ro;
export {
  Hc as AVAIABLE_SKINS,
  xd as Animation,
  Qc as AnimationSpeeds,
  Xc as AnimationTypes,
  hc as AutoComplete,
  rc as Badge,
  mp as BadgePositiions,
  xc as Banner,
  ip as BorderTypes,
  Tc as Box,
  sp as BreadCrumbAlignments,
  np as BreadCrumbSeperators,
  Ac as Breadcrumbs,
  Jc as BreadcrumbsItem,
  Td as Button,
  Jd as ButtonAdd,
  Ad as ButtonCancel,
  Nd as ButtonDelete,
  Pd as ButtonDisable,
  Ed as ButtonDownload,
  zd as ButtonEdit,
  Id as ButtonEnable,
  Ld as ButtonOkay,
  Wd as ButtonPrint,
  Vd as ButtonRefresh,
  Cd as ButtonSave,
  Rd as ButtonUpload,
  Nc as Card,
  Ud as Chart,
  ep as ChartLegendPositions,
  tp as ChartTypes,
  jd as CheckMark,
  mc as Checkbox,
  bc as CheckboxGroup,
  qc as ColorTypes,
  Pc as Column,
  Ec as ColumnContainer,
  lp as ColumnContainerModifiers,
  rp as ColumnOffsetSizes,
  op as ColumnSizes,
  gc as ComponentForm,
  fc as DateField,
  dc as DraggableItem,
  cc as DropZone,
  ap as DropZoneQuadrants,
  Hd as DynamicSlot,
  Gd as Filter,
  bp as FixedMenuPositions,
  hp as FixedNavBarPositions,
  Oc as FormComponent,
  vc as FullEditor,
  yc as Header,
  _c as Hidden,
  qd as Icon,
  Zc as IconSizes,
  zc as List,
  Ic as ListItem,
  ac as Menu,
  lc as MenuEntry,
  sc as MenuLabel,
  nc as MenuList,
  Yd as Message,
  jc as Modal,
  Lc as ModalCard,
  tc as NavBar,
  Yc as NoticeTypes,
  Kd as Notification,
  kc as NumberField,
  Qd as PageNotification,
  Xd as Pagination,
  Wc as Panel,
  $c as Paragraph,
  ec as Progress,
  Zd as Promised,
  Sc as RadioGroup,
  Mc as Select,
  Kc as Sizes,
  pc as Sortable,
  Dc as Switch,
  up as TabAlignments,
  dp as TabStyles,
  Vc as Table,
  Cc as Tabs,
  Rc as TabsTab,
  ic as Tag,
  uc as Tags,
  wc as Text,
  Bc as TextArea,
  Uc as Tile,
  cp as TileSizes,
  pp as TileTypes,
  Fc as Time,
  oc as ToolTip,
  fp as ToolTipPositions,
  gp as ToolTipTextAlignments,
  vp as loadNonEs6Module,
  Gc as setSkin
};
//# sourceMappingURL=components.esm.js.map
