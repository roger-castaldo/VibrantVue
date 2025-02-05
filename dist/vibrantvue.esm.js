import { computed as k, defineComponent as A, openBlock as o, createBlock as W, Transition as Qt, withCtx as z, renderSlot as T, createElementBlock as i, normalizeClass as F, inject as R, ref as P, watch as j, createVNode as x, createCommentVNode as J, toDisplayString as O, mergeProps as K, toValue as oe, createElementVNode as S, unref as b, Fragment as C, renderList as L, resolveDynamicComponent as pe, createTextVNode as Y, onMounted as ce, withDirectives as G, vModelText as De, vShow as re, normalizeProps as me, resolveComponent as mt, useSlots as ie, readonly as ye, vModelCheckbox as je, normalizeStyle as Ae, guardReactiveProps as fe, reactive as Xt, createSlots as xe, withAsyncContext as ea, onUnmounted as ta, vModelSelect as aa, vModelDynamic as la, provide as Re, markRaw as sa } from "vue";
const Ce = (e) => new Promise((l) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, r) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let d = document.createElement("link"), c = new Promise((u) => {
        d.onload = function() {
          u(s);
        };
      });
      t[r] = c, a.appendChild(d), d.setAttribute("rel", "stylesheet"), d.setAttribute("type", "text/css"), d.setAttribute("server_path", s), d.setAttribute("href", s);
    } else
      t[r] = Promise.resolve(s);
  }), Promise.all(t).then((s) => {
    l(s);
  });
}), ve = [], Ge = (e, l) => new Promise((t) => {
  let a = ve.find((s) => s.path === e);
  if (a != null)
    if (a.result === void 0 && l !== void 0 || a.result === null && l === void 0) {
      let s = setTimeout(() => {
        let r = ve.find((n) => n.path === e);
        r == null ? (clearTimeout(s), t(void 0)) : (r.result !== void 0 && l !== void 0 || r.result === void 0 && l === void 0) && (clearTimeout(s), t(r.result));
      }, 500);
    } else
      t(a.result);
  else {
    ve.push({
      path: e,
      result: l === void 0 ? null : void 0
    });
    let s = document.createElement("script");
    s.onload = () => {
      let n = ve.findIndex((d) => d.path === e);
      if (l === void 0)
        ve[n].result = void 0;
      else {
        let d = {};
        l.forEach((c) => {
          d[c] = window[c];
        }), ve[n].result = d;
      }
      t(ve[n].result);
    }, s.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(s);
  }
}), ht = () => {
  var t;
  let e, l = "";
  return typeof self.crypto < "u" && (e = self.crypto, l = (t = e.randomUUID) == null ? void 0 : t.call(e)), l || "";
}, ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Ce,
  generateUUID: ht,
  loadNonEs6Module: Ge
}, Symbol.toStringTag, { value: "Module" }));
var Q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(Q || {}), ue = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(ue || {}), q = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(q || {}), ge = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ge || {}), we = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(we || {}), bt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(bt || {}), He = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(He || {}), ne = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(ne || {}), se = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(se || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), vt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(vt || {}), Ke = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = "centered", e.borderleft = "borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(Ke || {}), le = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(le || {}), gt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(gt || {}), Ye = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Ye || {}), qe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(qe || {}), yt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(yt || {}), ft = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ft || {}), _t = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(_t || {}), Te = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Te || {}), kt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(kt || {}), Ze = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ze || {}), Be = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Be || {}), Qe = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Qe || {}), St = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(St || {}), Xe = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(Xe || {}), Mt = /* @__PURE__ */ ((e) => (e.medium = "medium", e.large = "large", e))(Mt || {}), Pe = /* @__PURE__ */ ((e) => (e.default = "default", e.verticalRight = "is-vertical-right", e.verticalLeft = "is-vertical-left", e))(Pe || {});
const na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  ColorTypes: Q,
  ColumnContainerModifiers: Ke,
  ColumnOffsetSizes: gt,
  ColumnSizes: le,
  DropZoneQuadrants: se,
  FixedMenuPositions: kt,
  FixedNavBarPositions: Te,
  IconSizes: ne,
  NoticeTypes: ue,
  SectionSizes: Mt,
  Sizes: q,
  SkinTypes: Xe,
  StepWizardOrientations: Pe,
  TabAlignments: qe,
  TabStyles: yt,
  TileSizes: ft,
  TileTypes: _t,
  ToolTipPositions: Be,
  ToolTipTextAlignments: Qe
}, Symbol.toStringTag, { value: "Module" })), Z = (e) => {
  const l = e("Language", "en");
  return k(() => l);
}, oa = (e) => {
  const l = e("IconSet", "solid");
  return k(() => l);
}, ua = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.9.0/"), ia = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/"), da = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ca = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.7/"), pa = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.37.3/"), Dt = /* @__PURE__ */ A({
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
    const l = da(R);
    Ce(`${l}animate.min.css`);
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
    }, s = (p) => p === void 0 ? "" : `animate__${p}`, r = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, n = k(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), d = k(() => [
      "animate__animated",
      s(t.incoming ?? t.inout),
      r(t.speedIn ?? t.speed)
    ].join(" ")), c = k(() => [
      "animate__animated",
      s(t.outgoing ?? t.inout),
      r(t.speedOut ?? t.speed)
    ].join(" ")), u = k(() => [
      "animate__animated",
      "animate__infinite",
      s(t.repeating),
      r(t.speed)
    ].join(" "));
    return (p, h) => t.repeating ? (o(), i("div", {
      key: 1,
      class: F(u.value)
    }, [
      T(p.$slots, "default")
    ], 2)) : (o(), W(Qt, {
      key: 0,
      "enter-active-class": d.value,
      "leave-active-class": c.value,
      duration: n.value
    }, {
      default: z(() => [
        T(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ma = "brands.min.css", ha = "all.min.css", ot = "icon_styles", ba = /\.fa-([^: ]+):before/g, va = /url\(([^)]+)\)/g, Me = P([]), We = P(!1), ut = async (e, l) => {
  if (!We.value) {
    We.value = !0;
    let t;
    Me.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", ot), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(ot), Me.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ma}`),
      fetch(`${e}${ha}`),
      fetch(`${e}${l}.min.css`)
    ]), s = await a[0].text();
    [...s.matchAll(ba)].forEach((r) => {
      Me.value.push(r[1]);
    }), s = `${await a[1].text()}
    ${await a[2].text()}
    ${s}`, [...s.matchAll(va)].forEach((r) => {
      s = s.replace(r[0], `url(${new URL(r[1], e)})`);
    }), t.innerText = s, Me.value.splice(0, 1), We.value = !1;
  }
}, H = /* @__PURE__ */ A({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const l = ia(R), t = oa(R);
    Me.value.length === 0 ? ut(l, t.value) : j(t, () => ut(l, t.value));
    const a = e, s = k(() => {
      let r = [];
      return a.icon !== void 0 && a.icon !== null && (Me.value.indexOf(a.icon) >= 0 ? r.push("fa-brands") : (r.push("fa-ico"), r.push(`fa-${t.value}`)), r.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== ne.normal && r.push(`fa-${a.size}`), r;
    });
    return (r, n) => (o(), i("i", {
      class: F(s.value)
    }, null, 2));
  }
}), ga = ["disabled"], ya = {
  key: 0,
  class: "icon is-small"
}, fa = { key: 1 }, te = /* @__PURE__ */ A({
  __name: "button",
  props: {
    icon: {},
    type: { default: Q.primary },
    title: {},
    disabled: { type: Boolean },
    size: { default: q.normal },
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = k(() => [
      "button",
      `is-${t.size ?? q.normal}`,
      `is-${t.type ?? Q.primary}`,
      t.disabled ? "disabled" : "",
      t.is_rounded ? "is-rounded" : "",
      t.hide_mobile ? "is-hidden-mobile" : "",
      t.hide_tablet ? "is-hidden-tablet-only" : "",
      t.hide_desktop ? "is-hidden-desktop is-hidden-widescreen" : ""
    ]);
    return (r, n) => (o(), i("button", {
      class: F(s.value),
      disabled: t.disabled,
      onClick: n[0] || (n[0] = (d) => a("click"))
    }, [
      t.icon ? (o(), i("span", ya, [
        x(H, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : J("", !0),
      t.title ? (o(), i("span", fa, O(t.title), 1)) : J("", !0)
    ], 10, ga));
  }
}), _a = '{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Refresh":"Refresh","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسناً","Print":"الطباعة","Refresh":"التجديد","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Qeydiyyat","Edit":"Tarix","Enable":"Qeydiyyat","Okay":" Okay","Print":"Çap","Refresh":"Axtarış","Save":"Yadda","Submit":"Qeydiyyat","Upload":"Tarix"},"bg":{"Add":"Добавяне","Cancel":"Отмяна","Delete":"Изтриване","Disable":"Изключване","Download":"Изтегляне","Edit":"Редактиране","Enable":"Включване","Okay":"Добре","Print":"Печат","Refresh":"Обновяване","Save":"Запис","Submit":"Подаване","Upload":"Качване"},"bn":{"Add":"যোগ","Cancel":"বাতিল","Delete":"মুছে","Disable":"নিষ্ক্রিয়","Download":"ডাউনলোড","Edit":"সম্পাদনা","Enable":"সক্রিয়","Okay":"ঠিক","Print":"প্রিন্ট","Refresh":"নতুন","Save":"সংরক্ষণ","Submit":"জমা","Upload":"আপলোড"},"ca":{"Add":"Afegeix","Cancel":"Cancel·","Delete":"Esborra","Disable":"Deshabilita","Download":"Descarrega","Edit":"Edita","Enable":"Habilita","Okay":"Bé","Print":"Imprimeix","Refresh":"Refresca","Save":"Desa","Submit":"Envia","Upload":"Puja"},"cs":{"Add":"Přidat","Cancel":"Zrušit","Delete":"Smazat","Disable":"Zakázat","Download":"Stáhnout","Edit":"Upravit","Enable":"Povolit","Okay":"Dobře","Print":"Tisk","Refresh":"Obnovit","Save":"Uložit","Submit":"Odeslat","Upload":"Načíst"},"da":{"Add":"Tilføj","Cancel":"Annullér","Delete":"Slet","Disable":"Deaktivér","Download":"Download","Edit":"Redigér","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Refresh":"Genopfrisk","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Deaktivieren","Download":"Herunterladen","Edit":"Bearbeiten","Enable":"Aktivieren","Okay":"Okay","Print":"Drucken","Refresh":"Aktualisieren","Save":"Speichern","Submit":"Senden","Upload":"Hochladen"},"el":{"Add":"Προσθήκη","Cancel":"Ακύρωση","Delete":"Διαγραφή","Disable":"Απενεργοποίηση","Download":"Λήψη","Edit":"Επεξεργασία","Enable":"Ενεργοποίηση","Okay":"Εντάξει","Print":"Εκτύπωση","Refresh":"Ανανέωση","Save":"Αποθήκευση","Submit":"Υποβολή","Upload":"Αποστολή"},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Refresh":"Refresh","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Inhabilitación","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Refresh":"Refresh","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{"Add":"Lisa","Cancel":"Tühistage","Delete":"Kustuta","Disable":"Keela","Download":"Laadi","Edit":"Edit","Enable":"Luba","Okay":"Olgu","Print":"Printi","Refresh":"Värskenda","Save":"Päästa","Submit":"Esita","Upload":"Laadi"},"eu":{"Add":"Gehitu","Cancel":"Utzi","Delete":"Ezabatu","Disable":"Desgaitu","Download":"Deskargatu","Edit":"Editatu","Enable":"Gaitu","Okay":"Ados","Print":"Inprimatu","Refresh":"Freskatu","Save":"Gorde","Submit":"Bidali","Upload":"Igo"},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"ویرایش","Enable":"گزینه","Okay":"خوب","Print":"Print","Refresh":"بازسازی","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruuta","Delete":"Poista","Disable":"Poista","Download":"Lataa","Edit":"Muuta","Enable":"Käytä","Okay":"Selvä","Print":"Tulosta","Refresh":"Päivitä","Save":"Tallenna","Submit":"Lähetä","Upload":"Lähetä"},"fr":{"Add":"Ajouter","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactiver","Download":"Télécharger","Edit":"Modifier","Enable":"Activer","Okay":"Très","Print":"Imprimer","Refresh":"Actualiser","Save":"Enregistrer","Submit":"Soumettre","Upload":"Envoi"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Toir","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Refresh":"Athraigh","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"gl":{"Add":"Add","Cancel":"Cancelar","Delete":"Eliminar","Disable":"Disable","Download":"Baixar","Edit":"Edit","Enable":"Habilitar","Okay":"Ok","Print":"Imprimir","Refresh":"Refresco","Save":"Save","Submit":"Presentación","Upload":"Upload"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Refresh":"מרעננים","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Refresh":"रिफ्रेश","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Kikapcsolás","Download":"Letöltés","Edit":"Szerkesztés","Enable":"Beállítás","Okay":"Oké","Print":"Nyomtatás","Refresh":"Frissítés","Save":"Mentés","Submit":"Küldés","Upload":"Feltöltés"},"id":{"Add":"Tambah","Cancel":"Batal","Delete":"Hapus","Disable":"Matikan","Download":"Unduh","Edit":"Sunting","Enable":"Aktifkan","Okay":"Oke","Print":"Cetak","Refresh":"Segarkan","Save":"Simpan","Submit":"Kirim","Upload":"Unggah"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Refresh":"Rifiuti","Save":"Salva","Submit":"Inviare","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Refresh":"リフレッシュ","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Refresh":"지원하다","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{"Add":"Pridėti","Cancel":"Atsisakyti","Delete":"Trinti","Disable":"Išjungti","Download":"Atsisiųsti","Edit":"Keisti","Enable":"Įjungti","Okay":"Gerai","Print":"Spausdinti","Refresh":"Atnaujinti","Save":"Įrašyti","Submit":"Siųsti","Upload":"Siųsti"},"lv":{"Add":"Pievienot","Cancel":"Atcelt","Delete":"Dzēst","Disable":"Atslēgt","Download":"Lejupielādēt","Edit":"Rediģēt","Enable":"Ieslēgt","Okay":"Labi","Print":"Drukāt","Refresh":"Atsvaidzināt","Save":"Saglabāt","Submit":"Nosūtīt","Upload":"Augšupielāde"},"ms":{"Add":"Tambah","Cancel":"Batal","Delete":"Dihapus","Disable":"Matikan","Download":"Muaturun","Edit":"Edit","Enable":"Hidupkan","Okay":"Oke","Print":"Cetakan","Refresh":"Segarkan","Save":"Simpan","Submit":"Diserahkan","Upload":"Unggah"},"nb":{"Add":"Legg","Cancel":"Avbryt","Delete":"Slett","Disable":"Slå","Download":"Last","Edit":"Rediger","Enable":"Slå","Okay":"Ok","Print":"Skriv","Refresh":"Oppdater","Save":"Lagre","Submit":"Send","Upload":"Last"},"nl":{"Add":"Voeg","Cancel":"Annuleren","Delete":"Verwijderen","Disable":"Uitschakelen","Download":"Downloaden","Edit":"Bewerken","Enable":"Inschakelen","Okay":"Oké","Print":"Afdrukken","Refresh":"Verversen","Save":"Opslaan","Submit":"Verzenden","Upload":"Uploaden"},"pl":{"Add":"Dodaj","Cancel":"Anuluj","Delete":"Usuń","Disable":"Wyłącz","Download":"Pobierz","Edit":"Edycja","Enable":"Włącz","Okay":"Dobrze","Print":"Drukuj","Refresh":"Odśwież","Save":"Zapisz","Submit":"Prześlij","Upload":"Wyślij"},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Refresh":"Atualizar","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{"Add":"Adaugă","Cancel":"Renunță","Delete":"Șterge","Disable":"Dezactivează","Download":"Descărcare","Edit":"Editare","Enable":"Activează","Okay":"Bine","Print":"Tipărește","Refresh":"Reîmprospătează","Save":"Salvează","Submit":"Trimite","Upload":"Încarcă"},"ru":{"Add":"Добавить","Cancel":"Отменить","Delete":"Исключить","Disable":"Инвалид","Download":"Скачать","Edit":"Редактировать","Enable":"Допускать","Okay":"Хорошо","Print":"Печать","Refresh":"Освежить","Save":"Спасти","Submit":"Представить","Upload":"Загрузить"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Odstrániť","Disable":"Zakázať","Download":"Stiahnuť","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Tlač","Refresh":"Obnoviť","Save":"Uložiť","Submit":"Predložiť","Upload":"Odoslať"},"sl":{"Add":"Dodaj","Cancel":"Prekliči","Delete":"Zbriši","Disable":"Onemogoči","Download":"Prenesi","Edit":"Uredi","Enable":"Omogoči","Okay":"V","Print":"Natisni","Refresh":"Osveži","Save":"Shrani","Submit":"Pošlji","Upload":"Pošlji"},"sq":{"Add":"_Shto","Cancel":"Anullo","Delete":"Elemino","Disable":"Jo","Download":"Shkarkimi","Edit":"Ndrysho","Enable":"Aktivo","Okay":"Mirë","Print":"Printo","Refresh":"Rifresko","Save":"Ruaj","Submit":"Dërgo","Upload":"Ngarko"},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Refresh":"Refresh","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{"Add":"เพิ่ม","Cancel":"ยกเลิก","Delete":"ลบ","Disable":"ปิดการใช้งาน","Download":"ดาวน์โหลด","Edit":"แก้ไข","Enable":"เปิด","Okay":"โอเค","Print":"พิมพ์","Refresh":"ปรับปรุงใหม่","Save":"บันทึก","Submit":"ส่ง","Upload":"อัปโหลด"},"tl":{"Add":"Magdagdag","Cancel":"Huwag","Delete":"Ibagsak","Disable":"Hindi","Download":"Ibaba","Edit":"Baguhin","Enable":"Kaibig","Okay":"Okay","Print":"Nakalimbag","Refresh":"Nakapagpapasigla","Save":"Mag","Submit":"Pagpapasakop","Upload":"Itaas"},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelliler","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Refresh":"Yenileme","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Refresh":"Реверс","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"ur":{"Add":"_شامل","Cancel":"منسوخ","Delete":"حذف","Disable":"منسوخ","Download":"اوپر","Edit":"مرتب","Enable":"فعال","Okay":"ٹھیک","Print":"پرنٹ","Refresh":"خوشی","Save":"محفوظ","Submit":"غیر","Upload":"اپ"},"zh":{"Add":"添加","Cancel":"取消","Delete":"删除","Disable":"禁用","Download":"下载","Edit":"编辑","Enable":"启用","Okay":"还好","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上传"},"zt":{"Add":"添加","Cancel":"取消","Delete":"刪除","Disable":"禁用","Download":"下載","Edit":"編輯","Enable":"開啟","Okay":"好吧","Print":"打印","Refresh":"刷新","Save":"保存","Submit":"提交","Upload":"上傳"}}', ka = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":" Filter"},"bg":{"Filter":"Филтър"},"bn":{"Filter":"ফিল্টার"},"ca":{"Filter":"Filtre"},"cs":{"Filter":"Filtr"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{"Filter":"Φίλτρο"},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{"Filter":"Filter"},"eu":{"Filter":"Iragazkia"},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Suodatin"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"gl":{"Filter":"Filtrar"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Filter"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{"Filter":"Filtras"},"lv":{"Filter":"Filtrs"},"ms":{"Filter":"Penapis"},"nb":{"Filter":"Filtrer"},"nl":{"Filter":"Filter"},"pl":{"Filter":"Filtr"},"pt":{"Filter":"Filtro"},"ro":{"Filter":"Filtru"},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{"Filter":"Filter"},"sq":{"Filter":"Filtra"},"sv":{"Filter":"Filter"},"th":{"Filter":"กรอง"},"tl":{"Filter":"Pansala"},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"ur":{"Filter":"فائلز"},"zh":{"Filter":"过滤器"},"zt":{"Filter":"分頁"}}', Sa = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":" Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":"Qeydiyyat"},"bg":{"Previous":"Предишен","Next":"Следващият","Older":"По-","Newer":"По-","GoToPage":"Отиване на страница"},"bn":{"Previous":"পূর্ববর্তী","Next":"পরবর্তী","Older":"বয়স্ক","Newer":"নিউকার","GoToPage":"চিহ্নিত স্থানে চলুন"},"ca":{"Previous":"Anterior","Next":"Següent","Older":"Vella","Newer":"Més","GoToPage":"Vés a la pàgina"},"cs":{"Previous":"Předchozí","Next":"Další","Older":"Starší","Newer":"Novější","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyere","GoToPage":"Gå til side"},"de":{"Previous":"Vorherige","Next":"Nach","Older":"Ältere","Newer":"Neuer","GoToPage":"Zur Seite gehen"},"el":{"Previous":"Προηγούμενο","Next":"Επόμενο","Older":"Μεγαλύτερος","Newer":"Νεότερα","GoToPage":"Μετάβαση στη σελίδα"},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{"Previous":"Eelmine","Next":"Järgmine","Older":"Vanem","Newer":"Uuem","GoToPage":"Mine lehele"},"eu":{"Previous":"Aurrekoa","Next":"Hurrengoa","Older":"Zaharragoa","Newer":"Newer","GoToPage":"Joan orrira"},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uusi","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Plus","Newer":"Plus","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go Leathanach"},"gl":{"Previous":"Anterior","Next":"Seguinte","Older":"Idade","Newer":"Newer","GoToPage":"Ir á páxina"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Következő","Older":"Idősebb","Newer":"Újabb","GoToPage":"Ugrás az oldalra"},"id":{"Previous":"Sebelumnya","Next":"Berikutnya","Older":"Lebih","Newer":"Baru","GoToPage":"Ke Halaman"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"본문 바로가기"},"lt":{"Previous":"Ankstesnis","Next":"Sekantis","Older":"Senesni","Newer":"Naujokas","GoToPage":"Pereiti į puslapį"},"lv":{"Previous":"Iepriekšējais","Next":"Nākamais","Older":"Vecāki","Newer":"Jaunāks","GoToPage":"Iet uz lapu"},"ms":{"Previous":"Sebelumnya","Next":"Next","Older":"♪","Newer":"Perancis","GoToPage":"Pergi Ke Halaman"},"nb":{"Previous":"Forrige","Next":"Neste","Older":"Eldre","Newer":"Nyere","GoToPage":"Gå til siden"},"nl":{"Previous":"Vorige","Next":"Volgende","Older":"Ouder","Newer":"Nieuwer","GoToPage":"Ga naar pagina"},"pl":{"Previous":"Poprzedni","Next":"Następny","Older":"Starszy","Newer":"Nowsza","GoToPage":"Przejdź do strony"},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{"Previous":"Precedent","Next":"Înainte","Older":"Mai","Newer":"Mai","GoToPage":"Du-te la pagina"},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Старше","Newer":"Новый","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúca","Next":"Nasledujúci","Older":"Staršie","Newer":"Novšie","GoToPage":"Prejsť na stránku"},"sl":{"Previous":"Prejšnja","Next":"Naprej","Older":"Starejši","Newer":"Novejši","GoToPage":"Pojdi na stran"},"sq":{"Previous":"Paraardhëse","Next":"Në","Older":"Më","Newer":"Ri","GoToPage":"Shko tek faqja"},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{"Previous":"ก่อนหน้า","Next":"ต่อไป","Older":"อายุ","Newer":"สร้างใหม่","GoToPage":"ไปยังหน้า"},"tl":{"Previous":"Bago","Next":"Susunod","Older":"Mas","Newer":"Mas","GoToPage":"Pumunta sa Pahina"},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"ur":{"Previous":"پہلے","Next":"اگلا","Older":"عمررسیدہ","Newer":"نیا","GoToPage":"صفحہ ۲۴ پر جائیں"},"zh":{"Previous":"上一个","Next":"下一个","Older":"老年人","Newer":"更新","GoToPage":"转到页面"},"zt":{"Previous":"前一個","Next":"下一頁","Older":"老了","Newer":"更新","GoToPage":"跳至頁面"}}', Ma = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","February":"February","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"يان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"كانون","February":"شباط/فبراير","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qalereya","Mon":"Bakı","Tue":"Qalereya","Wed":"Biznes","Thu":"Qalereya","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Axtarış","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","February":"Fevral","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Bakı","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{"Sun":"Слънце","Mon":"Мон","Tue":"Туе","Wed":"Сватба","Thu":"Thu","Fri":"Fri","Sat":"Сат","Sunday":"Неделя","Monday":"Понеделник","Tuesday":"Вторник","Wednesday":"Сряда","Thursday":"Четвъртък","Friday":"Петък","Saturday":"Събота"},"Months":{"Jan":"Ян","Feb":"Февруари","Mar":"Мар","Apr":"Apr","May":"Май","Jun":"Джун","Jul":"Юли","Aug":"Aug","Sep":"Сеп","Oct":"Окт","Nov":"Nov","Dec":"Дек","January":"Януари","February":"Февруари","March":"Март","April":"Април","June":"Юни","July":"Юли","August":"Август","September":"Септември","October":"Октомври","November":"Ноември","December":"Декември"},"Today":"Днес"},"bn":{"Weekdays":{"Sun":"রবি","Mon":"মন","Tue":"মঙ্গল","Wed":"অস্বীকৃত","Thu":"বৃহঃ","Fri":"ফ্রিসেল","Sat":"শনি","Sunday":"রবিবার","Monday":"সোমবার","Tuesday":"মঙ্গলবার","Wednesday":"বুধবার","Thursday":"বৃহস্পতিবার","Friday":"শুক্রবার","Saturday":"শনিবার"},"Months":{"Jan":"জানুয়ারী","Feb":"ফেব্রুয়ারীMarch","Mar":"মার্চApril","Apr":"এপ্রিল","May":"মে","Jun":"জুনিউ","Jul":"জুমি","Aug":"আগস্ট","Sep":"সেপ্টেম্বরOctober","Oct":"অক্টোবর","Nov":"নভেম্বর","Dec":"ডিসেম্বর","January":"জানুয়ারী","February":"ফেব্রুয়ারী","March":"মার্চ","April":"এপ্রিল","June":"জুন","July":"জুলাই","August":"আগস্ট","September":"সেপ্টেম্বর","October":"অক্টোবর","November":"নভেম্বর","December":"সদস্য"},"Today":"আজ"},"ca":{"Weekdays":{"Sun":"Sol","Mon":"Dl","Tue":"Dt","Wed":"Dc","Thu":"Dj","Fri":"DvSaturday","Sat":"DsSunday","Sunday":"Diumenge","Monday":"Dilluns","Tuesday":"Dimarts","Wednesday":"Dimecres","Thursday":"Dijous","Friday":"Divendres","Saturday":"Dissabte"},"Months":{"Jan":"Mare","Feb":"FebMarch","Mar":"Mar","Apr":"AbrMay","May":"Maig","Jun":"JunJuly","Jul":"JulAugust","Aug":"AgoSeptember","Sep":"Set","Oct":"Oct","Nov":"Nov","Dec":"Des","January":"Gener","February":"Febrer","March":"Març","April":"Abril","June":"Juny","July":"Juliol","August":"Agost","September":"Setembre","October":"Octubre","November":"Novembre","December":"Desembre"},"Today":"Avui"},"cs":{"Weekdays":{"Sun":"Slunce","Mon":"Po","Tue":"Tue","Wed":"St","Thu":"Thu","Fri":"Fri","Sat":"Sad","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Středa","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Únor","Mar":"Březen","Apr":"Duben","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Srpen","Sep":"Září","Oct":"Říjen","Nov":"Listopad","Dec":"Prosinec","January":"Leden","February":"Únor","March":"Březen","April":"Duben","June":"Červen","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Listopad","December":"Prosinec"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tir","Wed":"On","Thu":"Thu","Fri":"Fri","Sat":"Lø","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mo","Tue":"Di","Wed":"Mi","Thu":"Do","Fri":"Fri","Sat":"Sa","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mär","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Juli","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dez","January":"Januar","February":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{"Sun":"Ήλιος","Mon":"Δευ","Tue":"Τεύχος","Wed":"Τετ","Thu":"Θου","Fri":"Παρ","Sat":"Σάβ","Sunday":"Κυριακή","Monday":"Δευτέρα","Tuesday":"Τρίτη","Wednesday":"Τετάρτη","Thursday":"Πέμπτη","Friday":"Παρασκευή","Saturday":"Σάββατο"},"Months":{"Jan":"Ιαν","Feb":"Φεβ","Mar":"Μαρ","Apr":"Απρ","May":"Μάιος","Jun":"Ιουν","Jul":"Ιουλ","Aug":"Αυγ","Sep":"Σεπ","Oct":"Οκτ","Nov":"Νοε","Dec":"Δεκ","January":"Ιανουάριος","February":"Φεβρουάριος","March":"Μάρτιος","April":"Απρίλιος","June":"Ιούνιος","July":"Ιούλιος","August":"Αύγουστος","September":"Σεπτέμβριος","October":"Οκτώβριος","November":"Νοέμβριος","December":"Δεκέμβριος"},"Today":"Σήμερα"},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundo","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov-Zelando","Dec":"Dec","January":"Januaro","February":"Februaro","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","February":"Febrero","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{"Sun":"Päike","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattus","Sunday":"Pühapäev","Monday":"Esmaspäev","Tuesday":"Teisipäev","Wednesday":"Kolmapäev","Thursday":"Neljapäeval","Friday":"Reede","Saturday":"Laupäev"},"Months":{"Jan":"Jan","Feb":"Veebruar","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oktoober","Nov":"Nov","Dec":"Dec","January":"Jaanuar","February":"Veebruar","March":"Märts","April":"Aprill","June":"Juuni","July":"Juuli","August":"August","September":"September","October":"Oktoober","November":"November","December":"Detsember"},"Today":"Täna"},"eu":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Apustua","Thu":"Og","Fri":"Fri","Sat":"Sat","Sunday":"Igandea","Monday":"Astelehena","Tuesday":"Asteartea","Wednesday":"Asteazkena","Thursday":"Osteguna","Friday":"Ostirala","Saturday":"Larunbata"},"Months":{"Jan":"Jan","Feb":"Ots","Mar":"Marmar","Apr":"Apr","May":"Maiatza","Jun":"Jun","Jul":"Jul","Aug":"Abusua","Sep":"Ira","Oct":"Oct","Nov":"Aza","Dec":"Abendua","January":"Urtarrila","February":"Otsaila","March":"Martxoa","April":"Apirila","June":"Ekaina","July":"Uztaila","August":"Abuztua","September":"Iraila","October":"Urria","November":"Azaroa","December":"Abendua"},"Today":"Gaur"},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","February":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Su","Mon":"Ma","Tue":"Ti","Wed":"Ke","Thu":"To","Fri":"Pe","Sat":"La","Sunday":"Sunnuntai","Monday":"Maanantai","Tuesday":"Tiistai","Wednesday":"Keskiviikko","Thursday":"Torstai","Friday":"Perjantai","Saturday":"Lauantai"},"Months":{"Jan":"Tammi","Feb":"Helmi","Mar":"Maalis","Apr":"Huhti","May":"Toukokuu","Jun":"Kesä","Jul":"Heinä","Aug":"Elo","Sep":"Syys","Oct":"Loka","Nov":"Marras","Dec":"Joulu","January":"Tammikuu","February":"Helmikuu","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuu","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuu"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Soleil","Mon":"Mon","Tue":"Tu","Wed":"Mariage","Thu":"Jeu","Fri":"Ven","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Janvier","Feb":"Fév","Mar":"Mars","Apr":"Avr","May":"Mai","Jun":"Juin","Jul":"Juillet","Aug":"Août","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Déc","January":"Janvier","February":"Février","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Déan","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Dé","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"An","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Irl","February":"Amharc","March":"Márta","April":"Amharc","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Nollaig"},"Today":"Sa"},"gl":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Apostamos","Thu":"Tu","Fri":"Frio","Sat":"Sat","Sunday":"Domingo","Monday":"Luns","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Xoves","Friday":"Venres","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Febreiro","Mar":"Mar","Apr":"Abril","May":"Maio","Jun":"Jun","Jul":"Xullo","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Novidade","Dec":"Dec","January":"Xaneiro","February":"Febreiro","March":"Marzo","April":"Abril","June":"Xuño","July":"Xullo","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Decembro"},"Today":"Hoxe"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"יום"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","February":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","February":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"H","Tue":"Sze","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sz","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","February":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Matahari","Mon":"Mon","Tue":"Tue","Wed":"Busana","Thu":"Thu","Fri":"Fri","Sat":"Sab","Sunday":"Minggu","Monday":"Senin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Kamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Maret","April":"April","June":"Juni","July":"Juli","August":"Agustus","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"Hari"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","February":"Febbraio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンド","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日～金曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","February":"2月2日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"₢","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2월","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","February":"2","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{"Sun":"Saulė","Mon":"Mon","Tue":"Tue","Wed":"WEd","Thu":"Thu","Fri":"FrNAME","Sat":"Sat","Sunday":"Sekmadienis","Monday":"Pirmadienis","Tuesday":"Antradienis","Wednesday":"Trečiadienis","Thursday":"Ketvirtadienis","Friday":"Penktadienis","Saturday":"Šeštadienis"},"Months":{"Jan":"Sau","Feb":"Vas","Mar":"Mar","Apr":"Bal","May":"Gegužės","Jun":"Bir","Jul":"Lie","Aug":"Rgp","Sep":"Rp","Oct":"Spalis","Nov":"Nr","Dec":"Gruodis","January":"Sausis","February":"Vasaris","March":"Kovas","April":"Balandis","June":"Birželis","July":"Liepa","August":"Rugpjūtis","September":"Rugsėjis","October":"Spalis","November":"Lapkritis","December":"Gruodis"},"Today":"Šiandien"},"lv":{"Weekdays":{"Sun":"Saule","Mon":"N","Tue":"Otr","Wed":"Tre","Thu":"Cet","Fri":"Pie","Sat":"Ses","Sunday":"Svētdiena","Monday":"Pirmdiena","Tuesday":"Otrdiena","Wednesday":"Trešdiena","Thursday":"Ceturtdiena","Friday":"Piektdiena","Saturday":"Sestdiena"},"Months":{"Jan":"Janvāris","Feb":"Febr","Mar":"Mar","Apr":"Apr","May":"Maijs","Jun":"Jūn","Jul":"Jūl","Aug":"Aug","Sep":"Sept","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Janvāris","February":"Februāris","March":"Marts","April":"Aprīlis","June":"Jūnijs","July":"Jūlijs","August":"Augusts","September":"Septembris","October":"Oktobris","November":"Novembris","December":"Decembris"},"Today":"Šodien"},"ms":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Perancis","Wed":"♪","Thu":"Khaw","Fri":"Perancis","Sat":"♪","Sunday":"Ahad","Monday":"Isnin","Tuesday":"Selasa","Wednesday":"Rabu","Thursday":"Khamis","Friday":"Jumat","Saturday":"Sabtu"},"Months":{"Jan":"Jan","Feb":"Perancis","Mar":"Perancis","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"♪","Aug":"Aug","Sep":"Perancis","Oct":"Takh","Nov":"Nov","Dec":"Amerika","January":"Januari","February":"2010,","March":"2010,","April":"April","June":"Juni","July":"Juli","August":"Ogos","September":"Perancis","October":"Oktober","November":"November","December":"Amerika"},"Today":"Hari"},"nb":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Desember"},"Today":"I"},"nl":{"Weekdays":{"Sun":"Zon","Mon":"Ma","Tue":"Di","Wed":"Wo","Thu":"Do","Fri":"Vr","Sat":"Zat","Sunday":"Zondag","Monday":"Maandag","Tuesday":"Dinsdag","Wednesday":"Woensdag","Thursday":"Donderdag","Friday":"Vrijdag","Saturday":"Zaterdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mei","Jun":"Juni","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Maart","April":"April","June":"Juni","July":"Juli","August":"Augustus","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Vandaag"},"pl":{"Weekdays":{"Sun":"Słońce","Mon":"Mon","Tue":"Wtyczka","Wed":"Środ","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Niedziela","Monday":"Poniedziałek","Tuesday":"Wtorek","Wednesday":"Środa","Thursday":"Czwartek","Friday":"Piątek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Luty","Mar":"Mar","Apr":"Kwiecień","May":"Maj","Jun":"Czerwiec","Jul":"Lipiec","Aug":"Sierpień","Sep":"Wrzesień","Oct":"Październik","Nov":"Nov","Dec":"Grudzień","January":"Styczeń","February":"Luty","March":"Marzec","April":"Kwiecień","June":"Czerwiec","July":"Lipiec","August":"Sierpień","September":"Wrzesień","October":"Październik","November":"Listopad","December":"Grudzień"},"Today":"Dzisiaj"},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"A","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","February":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{"Sun":"Soare","Mon":"Luni","Tue":"Tue","Wed":"Căsătorie","Thu":"Thu","Fri":"Vine","Sat":"Sat","Sunday":"Duminică","Monday":"Luni","Tuesday":"Marţi","Wednesday":"Miercuri","Thursday":"Joi","Friday":"Vineri","Saturday":"Sâmbătă"},"Months":{"Jan":"Jan","Feb":"Februarie","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Ianuarie","February":"Februarie","March":"Martie","April":"Aprilie","June":"Iunie","July":"Iulie","August":"August","September":"Septembrie","October":"Octombrie","November":"Noiembrie","December":"Decembrie"},"Today":"Astăzi"},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Мон","Tue":"Туи","Wed":"Свадьба","Thu":"Ту","Fri":"Фри","Sat":"Сидеть","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Ян","Feb":"Февраль","Mar":"Мар","Apr":"Апр","May":"Май","Jun":"Джун","Jul":"Джул","Aug":"Ауг","Sep":"Сеп","Oct":"Октября","Nov":"Ноябрь","Dec":"Декларация","January":"Январь","February":"Февраль","March":"Март","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октября","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Po","Tue":"Ut","Wed":"Str","Thu":"Št","Fri":"Pi","Sat":"So","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Streda","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apríl","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"August","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Január","February":"Február","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"August","September":"September","October":"Október","November":"November","December":"December"},"Today":"Dnes"},"sl":{"Weekdays":{"Sun":"Sonce","Mon":"Naslednji","Tue":"Tor","Wed":"Sre","Thu":"Čet","Fri":"Fri","Sat":"Sob","Sunday":"Nedelja","Monday":"Ponedeljek","Tuesday":"Torek","Wednesday":"Sreda","Thursday":"Četrtek","Friday":"Petek","Saturday":"Sobota"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Avg","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januar","February":"Februar","March":"Marec","April":"April","June":"Junij","July":"Julij","August":"Avgust","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Danes"},"sq":{"Weekdays":{"Sun":"Dielli","Mon":"Mon","Tue":"Tue","Wed":"Mer","Thu":"Tsu","Fri":"Pre","Sat":"Sat","Sunday":"E","Monday":"E","Tuesday":"E","Wednesday":"E","Thursday":"E","Friday":"E","Saturday":"E"},"Months":{"Jan":"Jan","Feb":"Fb","Mar":"Meri","Apr":"Për","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Tetor","Nov":"Nov","Dec":"Dhjetor","January":"Janar","February":"Shkurt","March":"Mars","April":"Prill","June":"Qershor","July":"Korrik","August":"Gusht","September":"Shtator","October":"Tetor","November":"Nëntor","December":"Dhjetor"},"Today":"Sot"},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","February":"Februari","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{"Sun":"อาทิตย์","Mon":"นิ้ว","Tue":"Tue","Wed":"เว็บ","Thu":"ทู","Fri":"เนื้อ","Sat":"ที่นั่ง","Sunday":"อาทิตย์","Monday":"จันทร์","Tuesday":"อังคาร","Wednesday":"วันพุธ","Thursday":"พฤหัสบดี","Friday":"ศุกร์","Saturday":"เสาร์"},"Months":{"Jan":"ไม่นะ","Feb":"ก.","Mar":"ขนาด","Apr":"ขนาด","May":"พฤษภาคม","Jun":"จุน","Jul":"ก.","Aug":"อัก","Sep":"เซพ","Oct":"ตลับหมึก","Nov":"นอฟ","Dec":"ธ.","January":"มกราคม","February":"กุมภาพันธ์","March":"มีนาคม","April":"เมษายน","June":"มิถุนายน","July":"กรกฎาคม","August":"สิงหาคม","September":"กันยายน","October":"ตุลาคม","November":"พฤศจิกายน","December":"ธันวาคม"},"Today":"วันนี้"},"tl":{"Weekdays":{"Sun":"Araw","Mon":"Buwan","Tue":"Tue","Wed":"Damo","Thu":"Thu","Fri":"Kaibigan","Sat":"Sat","Sunday":"Linggo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miyerkules","Thursday":"Huwebes","Friday":"Biyernes","Saturday":"Sabado"},"Months":{"Jan":"Jan","Feb":"Sanggol","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Juul","Aug":"Ug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Pagpapasiya","January":"Enero","February":"Pebrero","March":"Marso","April":"Abril","June":"Hunyo","July":"Hulyo","August":"Agosto","September":"Setyembre","October":"Oktubre","November":"Nobyembre","December":"Disyembre"},"Today":"Ngayon"},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","February":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Про","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"П'ятниця","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","February":"Лютий","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"ur":{"Weekdays":{"Sun":"سورج","Mon":"مون","Tue":"ٹو","Wed":"وے","Thu":"چو","Fri":"فری","Sat":"شطرنج","Sunday":"اتوار","Monday":"منگل","Tuesday":"منگل","Wednesday":"بدھ","Thursday":"جمعرات","Friday":"جمعہ","Saturday":"سبت"},"Months":{"Jan":"یان","Feb":"فیب","Mar":"مار","Apr":"پرنٹ","May":"مئی","Jun":"جون","Jul":"یول","Aug":"آغ","Sep":"سیپ","Oct":"پرنٹ","Nov":"ن","Dec":"سوال","January":"جنوری","February":"فروری","March":"مارچ","April":"اپریل","June":"جون","July":"جولائی","August":"اگست","September":"ستمبر","October":"اکتوبر","November":"نومبر","December":"دسمبر"},"Today":"آج"},"zh":{"Weekdays":{"Sun":"太阳","Mon":"月号","Tue":"图","Wed":"结婚","Thu":"图","Fri":"弗里语Name","Sat":"座位","Sunday":"礼拜","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六(上午)"},"Months":{"Jan":"扬","Feb":"二月","Mar":"马来","Apr":"农历四月","May":"5月","Jun":"军","Jul":"朱尔","Aug":"奥格","Sep":"九月","Oct":"十月(简体)","Nov":"页:1","Dec":"12月(中文)","January":"页:1","February":"2月(半天会议)","March":"3月(半天会议)","April":"4月(半天会议)","June":"6月份","July":"7月(半天会议)","August":"8月(半天)","September":"9月(半天会议)","October":"10月(半天会议)","November":"11月(半天会议)","December":"12月(半天)"},"Today":"现在"},"zt":{"Weekdays":{"Sun":"太阳","Mon":"月","Tue":"二等分","Wed":"有婚","Thu":"三月","Fri":"弗里","Sat":"有","Sunday":"星期天","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期四","Friday":"星期五","Saturday":"星期六"},"Months":{"Jan":"1月","Feb":"二月","Mar":"三月","Apr":"四月","May":"五月","Jun":"三月","Jul":"二月","Aug":"8月","Sep":"九月","Oct":"十月","Nov":"11月","Dec":"二月","January":"1月","February":"二月","March":"三月","April":"4月","June":"6月","July":"7月","August":"8月","September":"9月","October":"10月","November":"11月","December":"12月"},"Today":"今天"}}`, Da = '{"en":{"Error":"Error","AutoComplete":{"NoResults":"No Results"}},"ar":{"Error":"الرعب","AutoComplete":{"NoResults":"لا نتائج"}},"az":{"Error":"Qeyd","AutoComplete":{"NoResults":"Qeydlər"}},"bg":{"Error":"Грешка","AutoComplete":{"NoResults":"Няма резултати"}},"bn":{"Error":"ত্রুটি","AutoComplete":{"NoResults":"কোনো ফলাফল পাওয়া যায়নি"}},"ca":{"Error":"Error","AutoComplete":{"NoResults":"Sense resultats"}},"cs":{"Error":"Chyba","AutoComplete":{"NoResults":"Žádné výsledky"}},"da":{"Error":"Fejl","AutoComplete":{"NoResults":"Ingen resultater"}},"de":{"Error":"Fehler","AutoComplete":{"NoResults":"Keine Ergebnisse"}},"el":{"Error":"Σφάλμα","AutoComplete":{"NoResults":"Χωρίς αποτελέσματα"}},"eo":{"Error":"Eraro","AutoComplete":{"NoResults":"Neniuj rezultoj"}},"es":{"Error":"Error","AutoComplete":{"NoResults":"No hay resultados"}},"et":{"Error":"Viga","AutoComplete":{"NoResults":"Tulemused puuduvad"}},"eu":{"Error":"Errorea","AutoComplete":{"NoResults":"Emaitzarik ez"}},"fa":{"Error":"خطای","AutoComplete":{"NoResults":"نتایج"}},"fi":{"Error":"Virhe","AutoComplete":{"NoResults":"Ei tuloksia"}},"fr":{"Error":"Erreur","AutoComplete":{"NoResults":"Aucun résultat"}},"ga":{"Error":"Amharc","AutoComplete":{"NoResults":"Gan a bheith ráite"}},"gl":{"Error":"Erro","AutoComplete":{"NoResults":"Sen resultados"}},"he":{"Error":"טעות","AutoComplete":{"NoResults":"לא תוצאות"}},"hi":{"Error":"त्रुटि","AutoComplete":{"NoResults":"परिणाम"}},"hu":{"Error":"Hiba","AutoComplete":{"NoResults":"Nincs eredmény"}},"id":{"Error":"Galat","AutoComplete":{"NoResults":"Tidak ada hasil"}},"it":{"Error":"Errore","AutoComplete":{"NoResults":"Nessun risultato"}},"ja":{"Error":"エラー","AutoComplete":{"NoResults":"結果なし"}},"ko":{"Error":"계정","AutoComplete":{"NoResults":"결과 없음"}},"lt":{"Error":"Klaida","AutoComplete":{"NoResults":"Nr rezultatai"}},"lv":{"Error":"Kļūda","AutoComplete":{"NoResults":"Nav rezultātu"}},"ms":{"Error":"Error","AutoComplete":{"NoResults":"Hasil No"}},"nb":{"Error":"Feil","AutoComplete":{"NoResults":"Ingen resultater"}},"nl":{"Error":"Fout","AutoComplete":{"NoResults":"Geen resultaten"}},"pl":{"Error":"Błąd","AutoComplete":{"NoResults":"Brak wyników"}},"pt":{"Error":"Erro","AutoComplete":{"NoResults":"Sem resultados"}},"ro":{"Error":"Eroare","AutoComplete":{"NoResults":"Niciun rezultat"}},"ru":{"Error":"Ошибка","AutoComplete":{"NoResults":"Нет результатов"}},"sk":{"Error":"Chyba","AutoComplete":{"NoResults":"Žiadne výsledky"}},"sl":{"Error":"Napaka","AutoComplete":{"NoResults":"Brez rezultatov"}},"sq":{"Error":"Gabim","AutoComplete":{"NoResults":"Asnjë rezultat"}},"sv":{"Error":"Fel","AutoComplete":{"NoResults":"Inga resultat"}},"th":{"Error":"ผิดพลาด","AutoComplete":{"NoResults":"ไม่มีผลลัพธ์"}},"tl":{"Error":"Pagkakamali","AutoComplete":{"NoResults":"Walang Resulta"}},"tr":{"Error":"Hata","AutoComplete":{"NoResults":"Sonuçlar yok"}},"uk":{"Error":"Помилка","AutoComplete":{"NoResults":"Немає результатів"}},"ur":{"Error":"خامی","AutoComplete":{"NoResults":"کوئی نتیجہ"}},"zh":{"Error":"错误","AutoComplete":{"NoResults":"无结果"}},"zt":{"Error":"錯誤","AutoComplete":{"NoResults":"沒有結果"}}}', $a = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":" Don"},"bg":{"Done":"Готово"},"bn":{"Done":"সম্পন্ন"},"ca":{"Done":"Fet"},"cs":{"Done":"Hotovo"},"da":{"Done":"Færdig"},"de":{"Done":"Fertig"},"el":{"Done":"Έγινε"},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{"Done":"Tehtud"},"eu":{"Done":"Eginda"},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Fait"},"ga":{"Done":"Arna"},"gl":{"Done":"Feito"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"Kész"},"id":{"Done":"Selesai"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{"Done":"@"},"lv":{"Done":"Pabeigts"},"ms":{"Done":"Selesai"},"nb":{"Done":"Ferdig"},"nl":{"Done":"Klaar"},"pl":{"Done":"Gotowe"},"pt":{"Done":"Feito"},"ro":{"Done":"Gata"},"ru":{"Done":"Сделано"},"sk":{"Done":"Hotovo"},"sl":{"Done":"Končano"},"sq":{"Done":"U"},"sv":{"Done":"Done"},"th":{"Done":"เสร็จแล้ว"},"tl":{"Done":"Tapos"},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"ur":{"Done":"بند"},"zh":{"Done":"完成"},"zt":{"Done":"完成"}}', Aa = {
  Button: JSON.parse(_a),
  Filter: JSON.parse(ka),
  Pagination: JSON.parse(Sa),
  Date: JSON.parse(Ma),
  Form: JSON.parse(Da),
  Wizard: JSON.parse($a)
}, V = (e, l) => {
  let t = e.split("."), a = Aa[t[0]];
  const s = (l == null || l == null ? null : l.value) ?? "en";
  if (a !== void 0) {
    a[s] === void 0 ? a = a.en : a = a[s];
    let r = 1;
    for (; a !== void 0 && r < t.length; )
      a = a[t[r]], r++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Ja = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), $t = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: Q.danger
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: Q.danger
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: Q.danger
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ta = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), At = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Pa = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Jt = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ca = /* @__PURE__ */ A({
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
    const t = l, a = Z(R), s = k(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: Q.primary
    }));
    return (r, n) => (o(), W(te, K(s.value, {
      onClick: n[0] || (n[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ A({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("div", {
      class: F(["buttons", l.size ? `are-${l.size}` : "", l.alignment ? `is-${l.alignment}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Ea = /* @__PURE__ */ A({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: ne.normal }
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), W(H, {
      icon: `square-${l.checked ? "check" : "xmark"}`,
      size: l.size
    }, null, 8, ["icon", "size"]));
  }
}), za = { class: "dropdown-trigger" }, Ra = ["aria-controls"], Wa = { class: "icon is-small" }, Ia = ["id"], La = { class: "dropdown-content" }, Va = {
  key: 0,
  class: "dropdown-divider"
}, Ua = { key: 0 }, ja = /* @__PURE__ */ A({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const l = ht(), t = e, a = P(!1), s = k(() => {
      let u = ["dropdown"];
      return t.is_hoverable && u.push("is-hoverable"), t.is_right_align && u.push("is-right"), t.drops_up && u.push("is-up"), a.value && u.push("is-active"), u;
    }), r = k(() => {
      let u = oe(t.items);
      return Array.isArray(u) && (u = u.map((p) => Array.isArray(p) ? { children: p } : { children: [p] })), Array.isArray(u) ? u : [u];
    }), n = (u) => {
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
    return (u, p) => (o(), i("div", {
      class: F(s.value)
    }, [
      S("div", za, [
        S("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": b(l),
          onClick: p[0] || (p[0] = (h) => a.value = !a.value)
        }, [
          S("span", null, O(t.title), 1),
          S("span", Wa, [
            x(H, {
              icon: "angle-down",
              "aria-hidden": "true"
            })
          ])
        ], 8, Ra)
      ]),
      S("div", {
        class: "dropdown-menu",
        id: b(l),
        role: "menu"
      }, [
        (o(!0), i(C, null, L(r.value, (h, g) => (o(), i("div", La, [
          g > 0 ? (o(), i("hr", Va)) : J("", !0),
          (o(!0), i(C, null, L(h.children, (m) => (o(), W(pe(typeof m == "string" ? "div" : "a"), {
            class: F(n(m)),
            href: d(m),
            onClick: (f) => c(m)
          }, {
            default: z(() => [
              typeof m == "string" ? (o(), i("p", Ua, O(m), 1)) : J("", !0),
              Y(" " + O(typeof m == "string" ? null : m.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Ia)
    ], 2));
  }
}), it = async (e, l, t) => {
  let a = await import(e);
  const s = Object.keys(a);
  return l && s.sort(l), s.filter((r) => t === void 0 || t.value === null || t.value.test(r)).map((r) => a[r]);
}, Ga = /* @__PURE__ */ A({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const l = P(null), t = e, a = k(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return j(() => [t.url, t.filter], async () => {
      l.value = await it(t.url, t.sortMethod, a);
    }), ce(async () => {
      l.value = await it(t.url, t.sortMethod, a);
    }), (s, r) => (o(!0), i(C, null, L(l.value, (n) => (o(), W(pe(n), K({ ref_for: !0 }, t.props), null, 16))), 256));
  }
}), Ha = { class: "control has-icons-left" }, Ka = ["placeholder"], Ya = { class: "is-left" }, Nt = /* @__PURE__ */ A({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = Z(R), r = k(() => V("Filter.Filter", s)), n = P(null);
    j([n], (c) => {
      c[0] === "" && t.default_value && (n.value = t.default_value, a("filter", n.value == "" ? null : n.value));
    });
    const d = (c) => {
      c.keyCode == 13 && a("filter", n.value == "" ? null : n.value);
    };
    return ce(() => {
      t.default_value && (n.value = t.default_value);
    }), (c, u) => (o(), i("div", Ha, [
      G(S("input", {
        role: "searchbox",
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (p) => n.value = p),
        onKeypress: d
      }, null, 40, Ka), [
        [De, n.value]
      ]),
      S("span", Ya, [
        x(H, {
          icon: "filter",
          size: b(ne).small
        }, null, 8, ["size"])
      ])
    ]));
  }
}), qa = {
  key: 0,
  class: "message-header"
}, Za = { class: "message-body" }, Qa = /* @__PURE__ */ A({
  __name: "message",
  props: {
    type: { default: Q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: q.normal }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = k(() => t.size === q.normal ? null : `is-${t.size}`), r = k(() => `is-${t.type}`);
    return (n, d) => (o(), i("article", {
      class: F(["message", s.value, r.value])
    }, [
      t.title ? (o(), i("div", qa, [
        S("p", null, O(t.title), 1),
        t.has_delete ? (o(), i("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: d[0] || (d[0] = (c) => a("close"))
        })) : J("", !0)
      ])) : J("", !0),
      S("div", Za, [
        T(n.$slots, "default", {}, () => [
          Y(O(t.message), 1)
        ])
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ A({
  __name: "notification",
  props: {
    type: { default: ue.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("div", {
      class: F(["notification", "is-" + l.type, l.light ? "is-light" : ""])
    }, [
      T(t.$slots, "default", {}, () => [
        Y(O(l.message), 1)
      ])
    ], 2));
  }
}), Xa = {
  key: 0,
  class: "modal-background"
}, el = ["aria-label"], tl = {
  key: 0,
  class: "title"
}, al = { class: "block" }, ll = /* @__PURE__ */ A({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: ue.info },
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
        case ue.info:
          return "circle-info";
        case ue.success:
          return "circle-check";
        case ue.danger:
          return "bug";
        case ue.warning:
          return "circle-exclamation";
      }
    }), r = k(() => {
      var n = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && n.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || n.push("has-no-close"), n;
    });
    return (n, d) => (o(), i("div", {
      class: F({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (o(), i("div", Xa)) : J("", !0),
      x(Dt, {
        incoming: b(we).fadeIn,
        outgoing: b(we).fadeOut,
        speed: b(ge).slower
      }, {
        default: z(() => [
          t.visible ? (o(), i("div", {
            key: 0,
            class: F(r.value),
            role: "dialog",
            "aria-label": t.header ?? "Page Notification"
          }, [
            x(H, {
              icon: s.value,
              size: b(ne).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (o(), i("h1", tl, O(t.header), 1)) : J("", !0),
            S("div", al, O(t.message), 1),
            t.has_close ? (o(), W(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: d[0] || (d[0] = (c) => a("close")),
              size: b(ne).large,
              role: "button",
              "aria-label": "close"
            }, null, 8, ["size"])) : J("", !0)
          ], 10, el)) : J("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), sl = ["title", "disabled"], rl = ["title", "disabled"], nl = {
  key: 0,
  class: "pagination-list"
}, ol = {
  key: 0,
  class: "pagination-ellipsis"
}, ul = ["aria-label", "onOnclick"], Ft = /* @__PURE__ */ A({
  __name: "pagination",
  props: {
    use_next: { type: Boolean, default: !0 },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: q.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean, default: !0 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = Z(R), r = k(() => V(t.use_next ? "Pagination.Previous" : "Pagination.Older", s)), n = k(() => V(t.use_next ? "Pagination.Next" : "Pagination.Newer", s)), d = k(() => t.button_type ? `has-background-${t.button_type}` : ""), c = k(() => V("Pagination.GoToPage", s)), u = k(() => t.current_page === void 0 ? 0 : oe(t.current_page) + (t.zero_page_index ? 1 : 0)), p = k(() => (t.has_previous ?? !1) || u.value > 0), h = k(() => (t.has_more ?? !1) || u.value < (t.total_pages === void 0 ? 0 : oe(t.total_pages))), g = k(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (oe(t.total_pages) > 5) {
        let y = Math.max(t.current_page === void 0 ? Math.floor(oe(t.total_pages) / 2) : u.value, 3);
        return oe(t.total_pages) - u.value === 0 ? y -= 2 : oe(t.total_pages) - u.value === 1 && y--, [
          1,
          -1,
          y - 1,
          y,
          y + 1,
          -1,
          oe(t.total_pages)
        ];
      } else {
        let y = [];
        for (let N = 1; N <= oe(t.total_pages); N++)
          y.push(N);
        return y;
      }
    }), m = function() {
      p && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", oe(t.current_page) - 1) : a("moveBack"));
    }, f = function() {
      h && (t.current_page !== void 0 && t.current_page !== null ? a("goToPage", oe(t.current_page) + 1) : a("moveForward"));
    }, v = function(y) {
      a("goToPage", t.zero_page_index ? y - 1 : y);
    };
    return (y, N) => G((o(), i("nav", {
      class: F(["pagination", "is-centered", d.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      S("a", {
        class: F(["pagination-previous", d.value]),
        title: r.value,
        onClick: m,
        disabled: p.value ? null : "disabled"
      }, [
        x(H, {
          icon: "backward",
          class: "mr-1",
          size: b(ne).small
        }, null, 8, ["size"]),
        Y(" " + O(r.value), 1)
      ], 10, sl),
      S("a", {
        class: F(["pagination-next", d.value]),
        title: n.value,
        onClick: f,
        disabled: h.value ? null : "disabled"
      }, [
        Y(O(n.value) + " ", 1),
        x(H, {
          icon: "forward",
          class: "ml-1",
          size: b(ne).small
        }, null, 8, ["size"])
      ], 10, rl),
      t.total_pages !== void 0 ? (o(), i("ul", nl, [
        (o(!0), i(C, null, L(g.value, (D) => (o(), i("li", null, [
          D === -1 ? (o(), i("span", ol, "…")) : (o(), i("a", {
            key: 1,
            class: F(["pagination-link", D === u.value ? "is-current" : ""]),
            "aria-label": `${c.value} ${D}`,
            onOnclick: (B) => v(D)
          }, O(D), 43, ul))
        ]))), 256))
      ])) : J("", !0)
    ], 2)), [
      [re, p.value || h.value]
    ]);
  }
}), be = /* @__PURE__ */ A({
  __name: "Promised",
  props: {
    promise: {}
  },
  setup(e) {
    const l = e, t = P(null), a = Z(R), s = k(() => `${V("Form.Error", a)}: ${t.value.message ?? t.value.toString()}`), r = P(!1), n = P(!1), d = k(() => !r.value && !n.value), c = P(null);
    async function u(p) {
      if (r.value = !1, n.value = !1, t.value = null, p == null)
        c.value = null;
      else {
        let h = b(p);
        Object.prototype.toString.call(h) !== "[object Promise]" && (h = Promise.resolve(h));
        try {
          c.value = await h, n.value = !0;
        } catch (g) {
          t.value = g, r.value = !0;
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
    }), (p, h) => (o(), i(C, null, [
      d.value ? T(p.$slots, "pending", { key: 0 }, () => [
        x(b(_e), {
          size: b(q).small
        }, null, 8, ["size"])
      ]) : J("", !0),
      r.value ? T(p.$slots, "rejected", me(K({ key: 1 }, t.value)), () => [
        x(b(he), {
          message: s.value,
          type: b(ue).danger
        }, null, 8, ["message", "type"])
      ]) : J("", !0),
      n.value ? T(p.$slots, "default", {
        key: 2,
        response: c.value
      }) : J("", !0)
    ], 64));
  }
}), il = ["value", "max"], _e = /* @__PURE__ */ A({
  __name: "progress",
  props: {
    type: { default: Q.primary },
    size: { default: q.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const l = e, t = k(() => l.maximum === void 0 ? null : (l.value ?? 0) / l.maximum * 100);
    return (a, s) => (o(), i("progress", {
      class: F(`progress is-${l.size} is-${l.type}`),
      value: l.value,
      max: l.maximum
    }, O(t.value ? `${t.value.toFixed(2)}%` : null), 11, il));
  }
}), dl = {
  key: 0,
  class: "navbar-link"
}, cl = {
  key: 0,
  class: "icon-text"
}, pl = { class: "icon" }, ml = { key: 1 }, hl = {
  key: 0,
  class: "icon-text"
}, bl = { class: "icon" }, vl = { key: 1 }, gl = {
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
      s("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, s = l;
    return (r, n) => {
      const d = mt("navbar-item", !0);
      return o(), W(pe(t.childItems !== void 0 ? "div" : "a"), {
        class: F(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: z(() => [
          t.childItems !== void 0 ? (o(), i("a", dl, [
            t.icon !== void 0 && t.icon !== null ? (o(), i("span", cl, [
              S("span", pl, [
                x(H, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              S("span", null, O(t.title), 1)
            ])) : (o(), i("span", ml, O(t.title), 1))
          ])) : (o(), i(C, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (o(), i("span", hl, [
              S("span", bl, [
                x(H, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              S("span", null, O(t.title), 1)
            ])) : (o(), i("span", vl, O(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (o(), i("div", gl, [
            (o(!0), i(C, null, L(t.childItems, (c) => (o(), W(d, K({ ref_for: !0 }, c, {
              onItemClicked: n[0] || (n[0] = (u) => s("itemClicked"))
            }), null, 16))), 256))
          ])) : J("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), yl = ["aria-label"], fl = { class: "navbar-brand" }, _l = ["aria-expanded"], kl = {
  key: 0,
  class: "navbar-start"
}, Sl = { style: { width: "100px" } }, Ml = {
  key: 1,
  class: "navbar-end"
}, Dl = { style: { width: "100px" } }, $l = /* @__PURE__ */ A({
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
    }), (a, s) => (o(), i("nav", {
      class: F(["navbar", l.fixed_position, l.color !== void 0 && l.color !== null ? `is-${l.color}` : ""]),
      role: "navigation",
      "aria-label": l.ariaLabel
    }, [
      S("div", fl, [
        T(a.$slots, "brand"),
        S("a", {
          role: "button",
          class: F(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: s[0] || (s[0] = (r) => t.value = !t.value)
        }, s[3] || (s[3] = [
          S("span", { "aria-hidden": "true" }, null, -1),
          S("span", { "aria-hidden": "true" }, null, -1),
          S("span", { "aria-hidden": "true" }, null, -1)
        ]), 10, _l)
      ]),
      S("div", {
        class: F(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        l.start_items !== void 0 ? (o(), i("div", kl, [
          x(be, {
            promise: l.start_items
          }, {
            default: z(({ response: r }) => [
              (o(!0), i(C, null, L(r, (n) => (o(), W(dt, K({ ref_for: !0 }, n, {
                onItemClicked: s[1] || (s[1] = (d) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              S("div", Sl, [
                x(_e, {
                  size: b(q).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : J("", !0),
        l.end_items !== void 0 ? (o(), i("div", Ml, [
          x(be, {
            promise: l.end_items
          }, {
            default: z(({ response: r }) => [
              (o(!0), i(C, null, L(r, (n) => (o(), W(dt, K({ ref_for: !0 }, n, {
                onItemClicked: s[2] || (s[2] = (d) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: z(() => [
              S("div", Dl, [
                x(_e, {
                  size: b(q).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : J("", !0)
      ], 2)
    ], 10, yl));
  }
}), Al = /* @__PURE__ */ A({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("aside", {
      class: F(["menu", l.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${l.fixedPosition}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Jl = { class: "menu-label" }, Nl = /* @__PURE__ */ A({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("p", Jl, [
      Y(O(l.message) + " ", 1),
      T(t.$slots, "default")
    ]));
  }
}), Fl = ["href"], wl = {
  key: 0,
  class: "icon-text"
}, Ol = { class: "icon" }, Tl = { key: 1 }, wt = /* @__PURE__ */ A({
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
    return (a, s) => (o(), i("li", null, [
      S("a", {
        href: l.href,
        onClick: s[0] || (s[0] = (r) => t()),
        class: F(l.active ? "is-active" : "")
      }, [
        l.icon !== void 0 && l.icon !== null ? (o(), i("span", wl, [
          S("span", Ol, [
            x(H, {
              icon: l.icon
            }, null, 8, ["icon"])
          ]),
          S("span", null, O(l.title), 1)
        ])) : (o(), i("span", Tl, O(l.title), 1)),
        T(a.$slots, "default")
      ], 10, Fl),
      T(a.$slots, "children")
    ]));
  }
}), Pl = { class: "menu-list" }, xl = /* @__PURE__ */ A({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => {
      const s = mt("menu-list", !0);
      return o(), i("ul", Pl, [
        l.items !== null ? (o(), W(be, {
          key: 0,
          promise: l.items
        }, {
          default: z(({ response: r }) => [
            (o(!0), i(C, null, L(r, (n) => (o(), i("li", null, [
              x(wt, K({ ref_for: !0 }, n), null, 16),
              n.childItems !== void 0 ? (o(), W(s, {
                key: 0,
                items: n.childItems
              }, null, 8, ["items"])) : J("", !0)
            ]))), 256))
          ]),
          pending: z(() => [
            S("li", null, [
              x(_e, {
                size: b(q).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : J("", !0),
        T(t.$slots, "default")
      ]);
    };
  }
}), Cl = /* @__PURE__ */ A({
  __name: "badge",
  props: {
    position: { default: Ze.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("span", {
      class: F(["badge", `is-${l.position}`, l.type === void 0 ? "" : `is-${l.type}`])
    }, [
      Y(O(l.text) + " ", 1),
      T(t.$slots, "default")
    ], 2));
  }
}), Ot = /* @__PURE__ */ A({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    has_arrow: { type: Boolean, default: !1 },
    position: { default: Be.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    always_active: { type: Boolean, default: !1 },
    text_align: { default: Qe.left }
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), W(pe(l.is), {
      class: F([
        l.has_arrow ? "has-tooltop-arrow" : "",
        l.position ? `has-tooltip-${l.position}` : "",
        l.multiline ? "has-tooltip-multiline" : "",
        l.type ? `has-tooltip-${l.type}` : "",
        l.text_align ? `has-tooltip-text-${l.text_align}` : "",
        l.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: z(() => [
        T(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Bl = /* @__PURE__ */ A({
  __name: "tag",
  props: {
    type: { default: Q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: q.normal },
    is_delete: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let a = ["tag", `is-${l.type}`, `is-${l.size}`];
      return l.light && a.push("is-light"), l.rounded && a.push("is-rounded"), l.is_delete && a.push("is-delete"), a;
    });
    return (a, s) => (o(), i("span", {
      class: F(t.value)
    }, [
      T(a.$slots, "default", {}, () => [
        Y(O(l.text), 1)
      ])
    ], 2));
  }
}), El = /* @__PURE__ */ A({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("span", {
      class: F(["tags", l.size === null ? "" : "are-" + l.size, l.addons ? "has-addons" : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: Dt,
  Badge: Cl,
  Button: te,
  ButtonAdd: Ja,
  ButtonCancel: $t,
  ButtonDelete: Na,
  ButtonDisable: Fa,
  ButtonDownload: wa,
  ButtonEdit: Oa,
  ButtonEnable: Ta,
  ButtonOkay: At,
  ButtonPrint: Pa,
  ButtonRefresh: Jt,
  ButtonSave: xa,
  ButtonUpload: Ca,
  ButtonsContainer: Ba,
  CheckMark: Ea,
  DropDown: ja,
  DynamicSlot: Ga,
  Filter: Nt,
  Icon: H,
  Menu: Al,
  MenuEntry: wt,
  MenuLabel: Nl,
  MenuList: xl,
  Message: Qa,
  NavBar: $l,
  Notification: he,
  PageNotification: ll,
  Pagination: Ft,
  Progress: _e,
  Promised: be,
  Tag: Bl,
  Tags: El,
  ToolTip: Ot
}, Symbol.toStringTag, { value: "Module" })), Rl = /* @__PURE__ */ A({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: l }) {
    const t = l, a = e, s = P(!1), r = P(!1), n = P(null), d = k(() => (a.disabled ?? !1) || r.value && a.handle_search !== null), c = k(() => {
      let h = [];
      return d || h.push("has-cursor"), s.value ? h.push("is-move") : h.push("is-grab"), h;
    }), u = (h) => d.value ? (h.preventDefault(), !1) : (h.stopPropagation(), h.dataTransfer.setData("value", JSON.stringify(a.copy_data)), s.value = !0, t("started"), !0), p = () => {
      s.value = !1, r.value = !0, t("stopped");
    };
    return ce(() => {
      if (a.handle_search) {
        let h = n.value.querySelector(a.handle_search);
        h !== null && (r.value = !0, h.addEventListener("mousedown", () => r.value = !1), h.addEventListener("mouseup", () => r.value = !0));
      }
    }), (h, g) => (o(), W(pe(a.tag), {
      ref_key: "handle",
      ref: n,
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
}), Wl = /* @__PURE__ */ A({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: l }) {
    const t = e, a = l, s = P(!1), r = P(null), n = P(null);
    k(() => t.tag ?? "div");
    const d = (g) => {
      const m = n.value.getBoundingClientRect(), f = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let v = se.center;
      return g.x < f.x ? g.y < f.y ? v = se.topLeft : v = se.bottomLeft : g.y < f.y ? v = se.topRight : v = se.bottomRight, r.value = v, r.value;
    }, c = (g) => {
      g.preventDefault(), s.value = !0, a("itemEntered", d(g));
    }, u = (g) => {
      s.value = !0, a("itemExited", d(g));
    }, p = (g) => {
      g.preventDefault(), a("itemMoved", d(g));
    }, h = (g) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(g.dataTransfer.getData("value"))))
        return !1;
      g.stopPropagation(), g.preventDefault(), a("itemAdded", JSON.parse(g.dataTransfer.getData("value")), r.value), s.value = !1;
    };
    return (g, m) => (o(), W(pe(t.tag), {
      ref_key: "handle",
      ref: n,
      class: F({ "is-bordered": s.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: h,
      onDragover: p
    }, {
      default: z(() => [
        T(g.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Il = ["onClick"], Ll = {
  key: 0,
  class: "icon"
}, Tt = /* @__PURE__ */ A({
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
      var n = ["block-list", "has-radius", `is-${l.type ?? "primary"}`];
      return l.compact && n.push("is-small"), l.outlined && n.push("is-outlined"), l.highlighted && n.push("is-highlighted"), n;
    }), s = k(() => l.items ? l.items.map((n, d) => ({
      name: n.name ?? `item-${d}`,
      classes: [
        n.type ? `is-${n.type}` : "",
        n.outlined ? "is-outlined" : "",
        n.highlighted ? "is-highlighted" : "",
        n.icon ? "has-icon" : "",
        n.onClick ? "is-clickable" : ""
      ],
      onClick: n.onClick,
      icon: n.icon
    })) : null), r = (n) => {
      n.onClick && n.onClick();
    };
    return (n, d) => (o(), W(pe(n.numbered == null || n.numbered == null || !n.numbered ? "ul" : "ol"), {
      class: F(a.value)
    }, {
      default: z(() => [
        s.value === null ? T(n.$slots, "default", { key: 0 }) : (o(!0), i(C, { key: 1 }, L(s.value, (c) => (o(), i(C, null, [
          b(t)[c.name] !== void 0 || b(t)[c.name] !== null || c.icon !== void 0 ? (o(), i("li", {
            key: 0,
            class: F(c.classes),
            onClick: (u) => r(c)
          }, [
            c.icon ? (o(), i("span", Ll, [
              x(H, {
                icon: c.icon
              }, null, 8, ["icon"])
            ])) : J("", !0),
            T(n.$slots, c.name)
          ], 10, Il)) : J("", !0)
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vl = ["onDragstart", "onDragover"], Ul = /* @__PURE__ */ A({
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
    const t = e, a = l, s = P([]), r = P(-1), n = P(-1), d = P(null);
    j(t.items, (g, m) => {
      s.value = [...m];
    }), ce(() => {
      t.items !== null && (s.value = [...t.items]);
    });
    const c = (g) => {
      var m = g.target.getBoundingClientRect(), f = {
        x: m.x + m.width / 2,
        y: m.y + m.height / 2
      };
      let v = se.center;
      return g.y < f.y ? v = se.top : v = se.bottom, v;
    }, u = (g, m) => {
      m.stopPropagation(), r.value = g, m.dataTransfer.setData("value", null);
    }, p = (g, m) => {
      r.value && (m.stopPropagation(), g != r.value ? (n.value = g, d.value = c(m)) : (n.value = -1, d.value = null));
    }, h = (g) => {
      if (r.value) {
        g.stopPropagation();
        var m = n.value + (d.value == se.top ? 0 : 1), f = s.value.splice(m, 1)[0];
        m >= r.value && m--, s.value.splice(m, 0, f), n.value = -1, d.value = null, r.value = -1, a("sorted", s.value);
      }
    };
    return (g, m) => (o(), W(Tt, {
      type: g.type,
      compact: g.compact,
      outlined: g.outlined,
      highlighted: g.highlighted,
      onDrop: h
    }, {
      default: z(() => [
        (o(!0), i(C, null, L(s.value, (f, v) => (o(), i(C, null, [
          G(S("li", null, [
            x(he, { light: !0 }, {
              default: z(() => m[1] || (m[1] = [
                Y(" ")
              ])),
              _: 1
            })
          ], 512), [
            [re, n.value === v && r.value !== v && d.value === b(se).top]
          ]),
          S("li", {
            draggable: "true",
            onDragstart: (y) => u(v, y),
            onDragend: m[0] || (m[0] = (y) => r.value = null),
            onDragover: (y) => p(v, y),
            class: F({ "has-cursor": !0, "is-move": n.value == v, "is-grab": n.value != v })
          }, [
            T(g.$slots, "item", {
              item: f,
              index: v
            })
          ], 42, Vl),
          G(S("li", null, [
            x(he, { light: !0 }, {
              default: z(() => m[2] || (m[2] = [
                Y(" ")
              ])),
              _: 1
            })
          ], 512), [
            [re, n.value === v && r.value !== v && d.value === b(se).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Rl,
  DropZone: Wl,
  Sortable: Ul
}, Symbol.toStringTag, { value: "Module" })), Ee = "HiddenFields", et = "DisabledFields", Gl = (e) => e, de = (e, l) => {
  const t = l("Translate", Gl);
  return k(() => e.translate ?? t);
};
function tt(e, l) {
  const t = l(Ee, ye(P([]))), a = l(et, ye(P([]))), s = k(() => t.value.filter((n) => n.indexOf(`${e}.`) === 0).map((n) => n.split(".")[1])), r = k(() => a.value.filter((n) => n.indexOf(`${e}.`) === 0).map((n) => n.split(".")[1]));
  return { hiddenValues: s, disabledValues: r };
}
async function at(e) {
  let l = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? l = t : l = Promise.resolve(t);
  let a = await l, s = [];
  return a.value !== void 0 ? s = a.value : s = a, s;
}
const Hl = { class: "tags has-addons" }, Kl = { class: "tag is-link" }, Yl = ["onClick"], ql = { key: 0 }, Zl = ["placeholder"], Ql = { class: "dropdown-menu" }, Xl = { class: "dropdown-content" }, es = ["onClick"], ts = {
  key: 1,
  class: "dropdown-item"
}, Pt = /* @__PURE__ */ A({
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
    const a = Z(R), s = k(() => V("Form.AutoComplete.NoResults", a)), r = t, n = e, d = de(n, R), c = P([]), u = P(null), p = P(null), h = P(null), g = P(null);
    j(u, async (E) => {
      if (E != null) {
        if (E.length >= 2)
          if (n.values != null && n.values != null) {
            let ee = [];
            for (let _ = 0; _ < n.values.length && ((n.values[_].name.toUpperCase().indexOf(E.toUpperCase()) >= 0 || n.values[_].id.toUpperCase().indexOf(E.toUpperCase()) >= 0) && ee.push(n.values[_]), ee.length != 10); _++)
              ;
            p.value = ee;
          } else {
            let _ = await (await (n.fetch ?? fetch)(`${n.callbackurl}?q=${encodeURIComponent(E)}`)).json();
            _.length > 10 && _.splice(10, _.length - 10), p.value = _;
          }
      } else
        p.value = null, g.value.innerHTML = "";
    });
    const m = () => {
      if (c.value.length == 0)
        return null;
      const E = c.value.slice();
      return n.limit != null && n.limit == 1 ? E.length > 0 ? E[0] : null : E;
    }, f = async (E) => {
      if (E == null)
        c.value.length > 0 && c.value.splice(0, c.value.length), u.value = null;
      else {
        const ee = await Promise.all(
          (Array.isArray(E) ? E : [E]).map(async (_) => {
            if (_.id !== void 0 && _.name !== void 0)
              return _;
            if (n.values != null && n.values != null)
              return _.id !== void 0 ? n.values.find((w) => w.id === _.id) : n.values.find((w) => w.name.toUpperCase() === _.toUpperCase() || w.id.toUpperCase() === _);
            {
              let U = await (await (n.fetch ?? fetch)(`${n.callbackurl}?${_.id === void 0 ? "q=" + encodeURIComponent(_) : "id=" + encodeURIComponent(_.id)}`)).json();
              return U.length > 0 ? (n.disabled && (U[0].readonly = !0), U[0]) : null;
            }
          })
        );
        c.value = ee.filter((_) => _ !== null), n.limit !== void 0 && n.limit !== null && c.value.length > n.limit && c.value.splice(n.limit), r("valueChanged", { name: n.name, value: m() });
      }
    }, v = (E) => {
      E.preventDefault(), u.value = E.clipboardData.getData("text/plain");
    }, y = (E) => {
      switch (E.key) {
        case "Backspace":
          u.value != null && u.value.length > 0 && (u.value = u.value.substring(0, u.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          E.key.length == 1 && (u.value = (u.value == null ? "" : u.value) + E.key);
          break;
      }
    }, N = () => {
      u.value = null;
    }, D = () => {
      g.value.focus();
    }, B = (E) => {
      c.value.push(E), N(), r("valueChanged", { name: n.name, value: m() });
    }, M = (E) => {
      c.value.splice(E, 1), D(), r("valueChanged", { name: n.name, value: m() });
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
    }), (E, ee) => (o(), i("div", {
      class: "control autocomplete",
      onBlur: N,
      onClick: D
    }, [
      S("div", {
        class: F(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", n.disabled ? "is-disabled" : ""])
      }, [
        (o(!0), i(C, null, L(c.value, (_, w) => (o(), i("div", {
          class: "control",
          key: w
        }, [
          S("div", Hl, [
            S("a", Kl, O(b(d)(_.name)), 1),
            !_.readonly && !n.disabled ? (o(), i("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (U) => M(w)
            }, null, 8, Yl)) : J("", !0)
          ])
        ]))), 128)),
        n.disabled ? J("", !0) : (o(), i("div", ql, [
          G(S("span", {
            ref_key: "contentSpan",
            ref: g,
            placeholder: b(d)(n.title ?? ""),
            contenteditable: "",
            class: F(h.value),
            onFocus: ee[0] || (ee[0] = (_) => {
              h.value = "is-focused";
            }),
            onBlur: ee[1] || (ee[1] = (_) => {
              h.value = null;
            }),
            onKeydown: y,
            onPaste: v
          }, null, 42, Zl), [
            [re, n.limit === void 0 || n.limit === null || c.value.length < n.limit]
          ])
        ]))
      ], 2),
      n.disabled ? J("", !0) : (o(), i("div", {
        key: 0,
        class: F(["dropdown", { "is-active": p.value != null && u.value != null && u.value != "" }])
      }, [
        S("div", Ql, [
          S("div", Xl, [
            p.value != null && p.value.length > 0 ? (o(!0), i(C, { key: 0 }, L(p.value, (_) => (o(), i("a", {
              class: "dropdown-item",
              onClick: (w) => B(_)
            }, O(b(d)(_.name)), 9, es))), 256)) : (o(), i("a", ts, O(s.value), 1))
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
    const t = e, a = l, s = de(t, R);
    return (r, n) => (o(), W(te, {
      type: t.sstyle,
      icon: t.icon,
      title: b(s)(t.label ?? ""),
      onClick: n[0] || (n[0] = (d) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), as = { class: "checkbox is-block" }, ls = ["value", "disabled"], xt = /* @__PURE__ */ A({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function, null] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = Z(R), r = k(() => V("Form.Error", s)), n = t, d = de(a, R), c = P([]), u = P(!1), p = k(async () => {
      if (a.values === null)
        return [];
      {
        let v = await at(a.values), y = v.filter((N) => N.selected).map((N) => N.value);
        return c.value === null || c.value.length == 0 ? c.value = y.length > 0 ? [...y] : [] : (y = c.value, v = v.map((N) => ({
          label: N.label,
          value: N.value,
          selected: y.some((D) => D === N.value)
        }))), v;
      }
    });
    j(c, (v) => {
      n("valueChanged", { name: a.name, value: h() });
    });
    const h = () => c.value.length == 0 ? null : c.value, g = (v) => {
      u.value = !0, c.value.splice(0), v !== null && (c.value = [...v]), u.value = !1, n("valueChanged", { name: a.name, value: h() });
    }, { hiddenValues: m, disabledValues: f } = tt(a.name, R);
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
      setValue: g
    }), (v, y) => (o(), i("div", null, [
      x(be, { promise: p.value }, {
        default: z(({ response: N }) => [
          N !== null ? (o(!0), i(C, { key: 0 }, L(N, (D) => G((o(), i("label", as, [
            G(S("input", {
              type: "checkbox",
              class: "checkbox",
              value: D.value,
              "onUpdate:modelValue": y[0] || (y[0] = (B) => c.value = B),
              disabled: a.disabled || b(f).some((B) => B === D.value.toString())
            }, null, 8, ls), [
              [je, c.value]
            ]),
            Y(" " + O(b(d)(D.label)), 1)
          ], 512)), [
            [re, !b(m).some((B) => B === D.value.toString())]
          ])), 256)) : J("", !0)
        ]),
        rejected: z(() => [
          x(b(he), {
            type: b(ue).danger,
            message: r.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), ss = { class: "checkbox" }, rs = ["name", "disabled"], ns = {
  key: 0,
  class: "help is-danger"
}, Ct = /* @__PURE__ */ A({
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
    const a = e, s = t, r = de(a, R), n = k(() => r.value(a.label)), d = P(!1);
    return j(d, (p) => s("valueChanged", { name: a.name, value: p })), l({
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
    }), (p, h) => (o(), i("label", ss, [
      G(S("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => d.value = g)
      }, null, 8, rs), [
        [je, d.value]
      ]),
      Y(" " + O(n.value) + " ", 1),
      a.required ? (o(), i("span", ns, "*")) : J("", !0)
    ]));
  }
}), Ie = (e, l) => {
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
      let r = "";
      switch (t.getDay()) {
        case 0:
          r = "Sunday";
          break;
        case 1:
          r = "Monday";
          break;
        case 2:
          r = "Tuesday";
          break;
        case 3:
          r = "Wednesday";
          break;
        case 4:
          r = "Thursday";
          break;
        case 5:
          r = "Friday";
          break;
        case 6:
          r = "Saturday";
          break;
      }
      a += `${V("Date.Weekdays." + (e.length > 3 ? r : r.substring(0, 3)), l)}`;
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
      let n = t.getTimezoneOffset() * -1, d = parseInt((n / 60).toFixed(0)), c = n - Math.abs(d) * 60;
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
  for (var r = 0; r < t.length; r++)
    switch (t.charAt(r)) {
      case "\\":
        s != "" && (a += Je(s, l, e), s = ""), a += t.charAt(r + 1), r++;
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
        s != "" && s.charAt(0) != t.charAt(r) ? (a += Je(s, l, e), s = "") : s += t.charAt(r);
        break;
      default:
        s != "" && (a += Je(s, l, e), s = ""), a += t.charAt(r);
        break;
    }
  return s != "" && (a += Je(s, l, e), s = ""), a;
}, os = { class: "control" }, us = ["name", "id", "disabled"], ct = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), lt = /* @__PURE__ */ A({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, r = P(null), n = k(() => {
      if (r.value === null || r.value === "")
        return null;
      var u = Number(r.value.substring(3, 5)), p = Number(r.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return j(r, (u) => {
      s("valueChanged", { name: a.name, value: u });
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => r.value,
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
        r.value = u;
      }
    }), (u, p) => (o(), i("div", os, [
      G(S("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (h) => r.value = h),
        disabled: a.disabled,
        style: Ae(n.value)
      }, null, 12, us), [
        [De, r.value]
      ])
    ]));
  }
}), is = { class: "hero-body" }, ds = { class: "title" }, cs = {
  key: 0,
  class: "subtitle"
}, ps = /* @__PURE__ */ A({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("section", {
      class: F(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + l.type])
    }, [
      S("div", is, [
        S("p", ds, O(l.title), 1),
        l.subtitle ? (o(), i("p", cs, O(l.subtitle), 1)) : J("", !0)
      ])
    ], 2));
  }
}), ms = { class: "box" }, Bt = /* @__PURE__ */ A({
  __name: "box",
  setup(e) {
    return (l, t) => (o(), i("div", ms, [
      T(l.$slots, "default")
    ]));
  }
}), hs = { key: 0 }, bs = ["onClick"], vs = /* @__PURE__ */ A({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Oe.left },
    size: { default: q.normal },
    seperator: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let s = ["breadcrumb"];
      return l.alignment && l.alignment !== Oe.left && s.push(`is-${l.alignment}`), l.size && l.size !== q.normal && s.push(`is-${l.size}`), l.seperator && s.push(`has-${l.seperator}-seperator`), s;
    }), a = (s) => {
      s !== void 0 && s();
    };
    return (s, r) => (o(), i("nav", {
      class: F(t.value),
      "aria-label": "breadcrumbs"
    }, [
      l.breadCrumbs !== null ? (o(), i("ul", hs, [
        (o(!0), i(C, null, L(l.breadCrumbs, (n) => (o(), i("li", {
          class: F({ "is-active": n.active })
        }, [
          S("a", {
            onClick: (d) => a(n.onClick)
          }, [
            n.icon ? (o(), i("span", {
              key: 0,
              class: F(["icon", n.onClick ? "is-clickable" : ""])
            }, [
              x(b(H), {
                icon: n.icon
              }, null, 8, ["icon"])
            ], 2)) : J("", !0),
            Y(" " + O(n.title), 1)
          ], 8, bs)
        ], 2))), 256))
      ])) : J("", !0)
    ], 2));
  }
}), gs = {
  key: 0,
  class: "card-icon"
}, ys = { class: "card-icon-wrapper" }, fs = {
  key: 1,
  class: "card-header"
}, _s = {
  key: 2,
  class: "card-content"
}, ks = {
  key: 3,
  class: "card-footer"
}, Et = /* @__PURE__ */ A({
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
    return (r, n) => (o(), i("div", {
      class: F(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon ? (o(), i("div", gs, [
        S("div", ys, [
          x(H, {
            icon: t.icon,
            size: b(ne).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : J("", !0),
      b(l).header ? (o(), i("div", fs, [
        T(r.$slots, "header", me(fe(s)))
      ])) : J("", !0),
      b(l).content ? (o(), i("div", _s, [
        T(r.$slots, "content")
      ])) : J("", !0),
      b(l).footer ? (o(), i("div", ks, [
        T(r.$slots, "footer", me(fe(a)))
      ])) : J("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ A({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const l = ie(), t = e, a = k(() => {
      let r = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (r = r.concat(t.modifiers.map((n) => `is-${n}`))), r;
    }), s = k(() => t.columns.map((r, n) => {
      let d = [
        "column",
        r.class ?? "",
        r.size ? `is-${r.size}` : "",
        r.offset ? `is-offset-${r.offset}` : ""
      ];
      return r.border && (r.border.some((c) => c === Ye.all) ? d.push("is-bordered") : r.border.forEach((c) => d.push(`is-bordered-${c}`))), {
        name: r.name ?? `col-${n}`,
        class: d
      };
    }));
    return (r, n) => (o(), i("div", {
      class: F(a.value)
    }, [
      (o(!0), i(C, null, L(s.value, (d) => (o(), i(C, null, [
        b(l)[d.name] ? (o(), i("div", {
          key: 0,
          class: F(d.class)
        }, [
          T(r.$slots, d.name)
        ], 2)) : J("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Ss = { class: "footer" }, Ms = /* @__PURE__ */ A({
  __name: "footer",
  setup(e) {
    return (l, t) => (o(), i("footer", Ss, [
      T(l.$slots, "default")
    ]));
  }
}), Ds = { class: "level" }, $s = {
  key: 0,
  class: "level-left"
}, As = {
  key: 0,
  class: "level-item"
}, Js = {
  key: 0,
  class: "level-item"
}, Ns = {
  key: 2,
  class: "level-right"
}, Fs = {
  key: 0,
  class: "level-item"
}, ws = /* @__PURE__ */ A({
  __name: "level",
  props: {
    left_slots: {},
    right_slots: {},
    slots: {}
  },
  setup(e) {
    const l = e, t = ie();
    return (a, s) => (o(), i("nav", Ds, [
      l.left_slots ? (o(), i("div", $s, [
        (o(!0), i(C, null, L(l.left_slots, (r) => (o(), i(C, null, [
          b(t)[r] ? (o(), i("div", As, [
            T(a.$slots, r)
          ])) : J("", !0)
        ], 64))), 256))
      ])) : J("", !0),
      l.slots ? (o(!0), i(C, { key: 1 }, L(l.slots, (r) => (o(), i(C, null, [
        b(t)[r] ? (o(), i("div", Js, [
          T(a.$slots, r)
        ])) : J("", !0)
      ], 64))), 256)) : J("", !0),
      l.right_slots ? (o(), i("div", Ns, [
        (o(!0), i(C, null, L(l.right_slots, (r) => (o(), i(C, null, [
          b(t)[r] ? (o(), i("div", Fs, [
            T(a.$slots, r)
          ])) : J("", !0)
        ], 64))), 256))
      ])) : J("", !0)
    ]));
  }
}), Os = { class: "media" }, Ts = {
  key: 0,
  class: "media-left"
}, Ps = { class: "media-content" }, xs = {
  key: 1,
  class: "media-right"
}, Cs = /* @__PURE__ */ A({
  __name: "media",
  setup(e) {
    const l = ie();
    return (t, a) => (o(), i("article", Os, [
      b(l).left_figure ? (o(), i("figure", Ts, [
        T(t.$slots, "left_figure")
      ])) : J("", !0),
      S("div", Ps, [
        T(t.$slots, "content")
      ]),
      b(l).right_section ? (o(), i("div", xs, [
        T(t.$slots, "right_section")
      ])) : J("", !0)
    ]));
  }
}), Bs = { class: "modal-content" }, Es = /* @__PURE__ */ A({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const t = e, a = l;
    return (s, r) => (o(), i("div", {
      class: F({ modal: !0, "is-active": t.display }),
      style: Ae(`z-index:${t.z_index}`)
    }, [
      r[1] || (r[1] = S("div", { class: "modal-background" }, null, -1)),
      S("div", Bs, [
        T(s.$slots, "default")
      ]),
      t.has_close ? (o(), i("button", {
        key: 0,
        class: "modal-close is-large",
        "aria-label": "close",
        onClick: r[0] || (r[0] = (n) => a("close"))
      })) : J("", !0)
    ], 6));
  }
}), zs = {
  key: 0,
  class: "card-icon"
}, Rs = { class: "card-icon-wrapper" }, Ws = {
  key: 1,
  class: "modal-card-head"
}, Is = {
  key: 2,
  class: "modal-card-body"
}, Ls = {
  key: 3,
  class: "modal-card-foot"
}, zt = /* @__PURE__ */ A({
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
    const t = ie(), a = e, s = l, r = {
      addon_class: "card-footer-item"
    }, n = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-header-icon"
    }, d = k(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, u) => (o(), i("div", {
      class: F(["modal", { "is-active": a.show }])
    }, [
      u[1] || (u[1] = S("div", { class: "modal-background" }, null, -1)),
      S("div", {
        class: F(["modal-card", d.value])
      }, [
        a.icon ? (o(), i("div", zs, [
          S("div", Rs, [
            x(H, {
              icon: a.icon,
              size: b(ne).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : J("", !0),
        b(t).header ? (o(), i("div", Ws, [
          T(c.$slots, "header", me(fe(n))),
          a.has_close ? (o(), i("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (p) => s("close"))
          })) : J("", !0)
        ])) : J("", !0),
        b(t).content ? (o(), i("div", Is, [
          T(c.$slots, "content")
        ])) : J("", !0),
        b(t).footer ? (o(), i("div", Ls, [
          T(c.$slots, "footer", me(fe(r)))
        ])) : J("", !0)
      ], 2)
    ], 2));
  }
}), Vs = {
  key: 0,
  class: "panel-heading"
}, Us = {
  key: 1,
  class: "panel-tabs"
}, js = {
  key: 0,
  class: "panel-block"
}, Gs = /* @__PURE__ */ A({
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
    return (r, n) => (o(), i("div", {
      class: F(["panel", s.value])
    }, [
      b(l).header ? G((o(), i("div", Vs, [
        T(r.$slots, "header")
      ], 512)), [
        [re, !(t.hidden_sections ?? []).includes("header")]
      ]) : J("", !0),
      b(l).tabs ? G((o(), i("div", Us, [
        T(r.$slots, "tabs")
      ], 512)), [
        [re, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : J("", !0),
      (o(!0), i(C, null, L(a.value, (d) => (o(), i(C, null, [
        b(l)[d] ? G((o(), i("div", js, [
          T(r.$slots, d)
        ], 512)), [
          [re, !(t.hidden_sections ?? []).includes(d)]
        ]) : J("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Hs = /* @__PURE__ */ A({
  __name: "section",
  props: {
    size: {}
  },
  setup(e) {
    const l = e;
    return (t, a) => (o(), i("section", {
      class: F(["section", l.size ? `is-${l.size}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Ks = { key: 0 }, Ys = { key: 1 }, qs = { key: 2 }, rt = /* @__PURE__ */ A({
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
    return (r, n) => (o(), i("div", {
      class: F(a.value)
    }, [
      S("table", {
        class: F(s.value)
      }, [
        b(l).thead ? (o(), i("thead", Ks, [
          T(r.$slots, "thead")
        ])) : J("", !0),
        b(l).tbody ? (o(), i("tbody", Ys, [
          T(r.$slots, "tbody")
        ])) : J("", !0),
        b(l).tfoot ? (o(), i("tfoot", qs, [
          T(r.$slots, "tfoot")
        ])) : J("", !0)
      ], 2)
    ], 2));
  }
}), Zs = ["href", "onClick"], Qs = {
  key: 0,
  class: "icon is-small"
}, Xs = { style: { width: "100px" } }, er = /* @__PURE__ */ A({
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
    ]), a = (s, r) => {
      (r.href === null || r.href === void 0) && r.onClick !== void 0 && (s.preventDefault(), r.onClick());
    };
    return (s, r) => (o(), i("div", {
      class: F(t.value)
    }, [
      S("ul", null, [
        x(b(be), {
          promise: l.tabs
        }, {
          default: z(({ response: n }) => [
            (o(!0), i(C, null, L(n, (d) => (o(), i("li", {
              class: F({ "is-active": d.active })
            }, [
              S("a", {
                href: d.href,
                onClick: (c) => a(c, d)
              }, [
                d.icon ? (o(), i("span", Qs, [
                  x(b(H), {
                    icon: d.icon
                  }, null, 8, ["icon"])
                ])) : J("", !0),
                S("span", null, O(d.title), 1)
              ], 8, Zs)
            ], 2))), 256))
          ]),
          pending: z(() => [
            S("li", Xs, [
              x(b(_e), {
                size: b(q).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), tr = { class: "slideout-content" }, ar = {
  key: 1,
  class: "slideout-head"
}, lr = { class: "slideout-body" }, sr = {
  key: 2,
  class: "slideout-foot"
}, rr = /* @__PURE__ */ A({
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
    }, r = e, n = l, d = k(() => [
      "slideout",
      r.show ? "is-active" : "",
      r.type !== void 0 && r.type !== null ? `is-${r.type}` : "",
      r.full_width ? "is-fullwidth" : "",
      r.not_animated ? "no-animation" : ""
    ]);
    return (c, u) => (o(), i("div", {
      class: F(d.value)
    }, [
      S("div", {
        class: "slideout-background",
        onClick: u[0] || (u[0] = (p) => n("close"))
      }),
      S("div", tr, [
        r.has_close ? (o(), i("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: u[1] || (u[1] = (p) => n("close"))
        })) : J("", !0),
        b(t).header ? (o(), i("div", ar, [
          T(c.$slots, "header", me(fe(s)))
        ])) : J("", !0),
        S("div", lr, [
          b(t).content ? T(c.$slots, "content", { key: 0 }) : J("", !0),
          T(c.$slots, "default")
        ]),
        b(t).footer ? (o(), i("div", sr, [
          T(c.$slots, "footer", me(fe(a)))
        ])) : J("", !0)
      ])
    ], 2));
  }
}), nr = ["onClick"], or = { key: 1 }, ur = {
  key: 0,
  class: "step-details"
}, ir = { class: "step-title" }, dr = { key: 0 }, cr = { class: "steps-content" }, pr = { class: "steps-actions" }, mr = { class: "steps-action" }, hr = {
  key: 0,
  class: "steps-action"
}, br = {
  key: 1,
  class: "steps-action"
}, vr = /* @__PURE__ */ A({
  __name: "step-wizard",
  props: {
    steps: {},
    use_previous_next: { type: Boolean, default: !0 },
    size: { default: q.normal },
    starting_index: {},
    orientation: { default: Pe.default }
  },
  emits: ["done", "changedStep"],
  setup(e, { expose: l, emit: t }) {
    const a = ie(), s = Z(R), r = k(() => V("Pagination.Previous", s)), n = k(() => V("Pagination.Next", s)), d = k(() => V("Wizard.Done", s)), c = e, u = t, p = P(c.starting_index ?? 0);
    return j(p, (h, g) => {
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
    }), (h, g) => (o(), i("div", {
      class: F(["steps-container", c.orientation === b(Pe).default ? "" : `${c.orientation}`])
    }, [
      S("ul", {
        class: F(["steps", c.size === b(q).normal ? "" : `is-${c.size}`])
      }, [
        (o(!0), i(C, null, L(c.steps, (m, f) => (o(), i("li", {
          class: F(["step-item", f < p.value ? "is-completed" : "", f === p.value ? "is-active" : "", m.type ? `is-${m.type}` : ""])
        }, [
          S("div", {
            class: "step-marker is-clickable",
            onClick: (v) => u("changedStep", f)
          }, [
            m.icon ? (o(), W(H, {
              key: 0,
              icon: m.icon
            }, null, 8, ["icon"])) : (o(), i("span", or, O(f + 1), 1))
          ], 8, nr),
          m.title !== "" ? (o(), i("div", ur, [
            S("p", ir, O(m.title), 1),
            m.description ? (o(), i("p", dr, O(m.description), 1)) : J("", !0)
          ])) : J("", !0)
        ], 2))), 256))
      ], 2),
      S("div", cr, [
        (o(!0), i(C, null, L(c.steps, (m, f) => (o(), i(C, null, [
          b(a)[m.name] ? (o(), i("div", {
            key: 0,
            class: F(["step-content", f === p.value ? "is-active" : ""])
          }, [
            T(h.$slots, m.name)
          ], 2)) : J("", !0)
        ], 64))), 256))
      ]),
      S("div", pr, [
        c.use_previous_next ? (o(), i(C, { key: 0 }, [
          S("div", mr, [
            x(te, {
              title: r.value,
              disabled: p.value === 0,
              onClick: g[0] || (g[0] = () => {
                p.value--;
              })
            }, null, 8, ["title", "disabled"])
          ]),
          p.value + 1 < c.steps.length ? (o(), i("div", hr, [
            x(te, {
              title: n.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: g[1] || (g[1] = () => {
                p.value++;
              })
            }, null, 8, ["title", "disabled"])
          ])) : J("", !0),
          p.value + 1 === c.steps.length ? (o(), i("div", br, [
            x(te, {
              title: d.value,
              disabled: !(c.steps[p.value].is_valid === void 0 || c.steps[p.value].is_valid),
              onClick: g[2] || (g[2] = () => {
                u("done");
              })
            }, null, 8, ["title", "disabled"])
          ])) : J("", !0)
        ], 64)) : (o(), i(C, { key: 1 }, [
          b(a).actions ? T(h.$slots, "actions", { key: 0 }) : J("", !0),
          (o(!0), i(C, null, L(c.steps, (m, f) => (o(), i(C, null, [
            b(a)[`actions-${m.name}`] && f === p.value ? T(h.$slots, `actions-${m.name}`, { key: 0 }) : J("", !0)
          ], 64))), 256))
        ], 64))
      ])
    ], 2));
  }
}), gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ps,
  Box: Bt,
  Breadcrumbs: vs,
  Card: Et,
  ColumnContainer: st,
  Footer: Ms,
  Level: ws,
  List: Tt,
  Media: Cs,
  Modal: Es,
  ModalCard: zt,
  Panel: Gs,
  Section: Hs,
  Slideout: rr,
  StepWizard: vr,
  Table: rt,
  Tabs: er
}, Symbol.toStringTag, { value: "Module" })), yr = { class: "control has-icons-left has-icons-right" }, fr = ["name", "id", "placeholder", "disabled"], _r = ["onClick"], kr = {
  colspan: "100%",
  class: "has-text-centered"
}, $e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Ne = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Rt = /* @__PURE__ */ A({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = P(), s = e, r = t, n = P(!1), d = P(null), c = P(null), u = Xt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = Z(R), h = ye({
      Sun: k(() => V("Date.Weekdays.Sun", p)),
      Mon: k(() => V("Date.Weekdays.Mon", p)),
      Tue: k(() => V("Date.Weekdays.Tue", p)),
      Wed: k(() => V("Date.Weekdays.Wed", p)),
      Thu: k(() => V("Date.Weekdays.Thu", p)),
      Fri: k(() => V("Date.Weekdays.Fri", p)),
      Sat: k(() => V("Date.Weekdays.Sat", p))
    }), g = k(() => d.value !== null && (s.includeTime ? Ne : $e).test(d.value)), m = () => {
      if (d.value === null || d.value === "")
        return null;
      {
        if (!Ne.test(d.value) && s.includeTime)
          return null;
        if (!s.includeTime && !$e.test(d.value))
          return null;
        if ($e.test(d.value) && s.includeTime)
          return null;
        let _ = s.includeTime ? Ne.exec(d.value) : $e.exec(d.value);
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
    j(d, (_) => {
      if (_ === null)
        r("valueChanged", { name: s.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!$e.test(_) && !Ne.test(_)) {
        _ = _.replaceAll(/[^0-9]/g, "");
        for (var w = [], U = 0; U < _.length; U += 2)
          U == 4 ? (w.push(_.substring(U, Math.min(_.length - U, 4) + U)), U += 2) : w.push(_.substring(U, Math.min(_.length - U, 2) + U));
        w.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(w[0]) || w.splice(0), w.length > 1 && (/^[0-3]/.test(w[1]) ? /^(01|03|05|07|08|10|12)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(w[1]) || w.splice(1) : /^(02|04|06|09|11)$/.test(w[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(w[1]) || w.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(w[1]) || w.splice(1) : w.splice(1)), w.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(w[3]) || w.splice(3)), w.length > 4 && (/^[0-5][0-9]?$/.test(w[4]) || w.splice(4))), _ = w.join(""), !s.includeTime && _.length > 8 && (_ = _.substring(0, 8)), _.length >= 2 && (_ = _.substring(0, 2) + "-" + (_.length > 2 ? _.substring(2) : "")), _.length >= 5 && (_ = _.substring(0, 5) + "-" + (_.length > 5 ? _.substring(5) : "")), _.length >= 9 && s.includeTime && (_ = _.substring(0, 9) + " " + (_.length > 9 ? _.substring(9) : "")), _.length >= 11 && (_ = _.substring(0, 11) + ":" + (_.length > 11 ? _.substring(11) : "")), d.value = _;
      } else {
        var ae = m();
        g && r("valueChanged", { name: s.name, value: ae }), u.Month = (ae == null ? void 0 : ae.getMonth()) ?? (/* @__PURE__ */ new Date()).getMonth(), u.Year = (ae == null ? void 0 : ae.getFullYear()) ?? (/* @__PURE__ */ new Date()).getFullYear();
      }
    });
    const f = k(() => ke(new Date(u.Year, u.Month, 1), p, "MMMM")), v = k(() => {
      var _ = [], w = new Date(u.Year, u.Month, 1);
      w = Ie(w, w.getDay() * -1);
      for (var U = m(), ae = Ie(new Date(u.Year, u.Month, 1), 32).getMonth(); w.getMonth() != ae; ) {
        for (var ze = [], nt = 0; nt < 7; nt++)
          ze.push({
            Number: w.getDate(),
            Disabled: w.getMonth() != u.Month,
            isToday: ke(w, p, "yyyy-MM-dd") == ke(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: U != null && ke(w, p, "yyyy-MM-dd") == ke(U, p, "yyyy-MM-dd")
          }), w = Ie(w, 1);
        _.push(ze);
      }
      return _;
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
      setValue: function(_) {
        _ === null ? d.value = null : d.value = ke(_, p, `dd-MM-yyyy${s.includeTime ? " HH:mm" : ""}`);
      }
    });
    const N = (_) => {
      _.value == null ? d.value != null && (d.value = d.value.split(" ")[0]) : d.value != null ? d.value = d.value.split(" ")[0] + " " + _.value : d.value = `${X((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year} ${_.value}`;
    }, D = (_) => {
      var U;
      if (!_.Disabled && !_.isSelected)
        if (d.value === null)
          d.value = `${X(_.Number.toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (s.includeTime ? ((U = a.value) == null ? void 0 : U.getValue()) == null ? "" : " " + a.value.getValue() : "");
        else {
          var w = d.value.split(" ");
          w[0] = `${X(_.Number.toString(), "0", 2)}-${X((u.Month + 1).toString(), "0", 2)}-${u.Year}`, d.value = `${w[0]}${w.length > 1 ? " " + w[1] : ""}`;
        }
    }, B = () => {
      d.value = c.value, n.value = !1;
    }, M = () => {
      s.disabled || (c.value = d.value, n.value = !0);
    }, E = () => {
      s.disabled || (d.value = null);
    }, ee = (_) => {
      u.Month + _ == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + _ == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += _;
    };
    return (_, w) => (o(), i("div", null, [
      S("div", yr, [
        G(S("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": w[0] || (w[0] = (U) => d.value = U),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, fr), [
          [De, d.value]
        ]),
        S("span", {
          class: "icon is-small is-left is-clickable",
          onClick: M
        }, [
          x(b(H), {
            icon: "calendar-alt",
            size: b(ne).xlarge
          }, null, 8, ["size"])
        ]),
        S("span", {
          class: "icon is-small is-right is-clickable",
          onClick: E
        }, [
          x(b(H), {
            icon: "window-close",
            size: b(ne).xlarge
          }, null, 8, ["size"])
        ])
      ]),
      x(b(zt), {
        show: n.value,
        icon: "calendar-alt"
      }, {
        header: z(() => [
          x(b(st), {
            class: "card-header-title",
            columns: [{ name: "left" }, { name: "title", class: "has-text-centered" }, { name: "right", class: "has-text-right" }]
          }, {
            left: z(() => [
              x(b(H), {
                class: "is-clickable",
                icon: "arrow-circle-left",
                onClick: w[1] || (w[1] = (U) => ee(-1))
              })
            ]),
            title: z(() => [
              Y(O(f.value) + " " + O(u.Year), 1)
            ]),
            right: z(() => [
              x(b(H), {
                class: "is-clickable",
                icon: "arrow-circle-right",
                onClick: w[2] || (w[2] = (U) => ee(1))
              })
            ]),
            _: 1
          })
        ]),
        content: z(() => [
          x(b(rt), { full_width: !0 }, xe({
            thead: z(() => [
              S("tr", null, [
                S("th", null, O(b(h).Sun), 1),
                S("th", null, O(b(h).Mon), 1),
                S("th", null, O(b(h).Tue), 1),
                S("th", null, O(b(h).Wed), 1),
                S("th", null, O(b(h).Thu), 1),
                S("th", null, O(b(h).Fri), 1),
                S("th", null, O(b(h).Sat), 1)
              ])
            ]),
            tbody: z(() => [
              (o(!0), i(C, null, L(v.value, (U) => (o(), i("tr", null, [
                (o(!0), i(C, null, L(U, (ae) => (o(), i("td", {
                  class: F(["is-unselectable has-text-centered", ae.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", ae.isToday ? "has-background-primary-dark has-text-primary-light" : "", ae.isSelected ? "has-background-success-dark has-text-success-light" : ""]),
                  onClick: (ze) => D(ae)
                }, O(ae.Number), 11, _r))), 256))
              ]))), 256))
            ]),
            _: 2
          }, [
            s.includeTime ? {
              name: "tfoot",
              fn: z(() => [
                S("tr", null, [
                  S("td", kr, [
                    x(lt, {
                      ref: a.value,
                      name: `${s.name}-time`,
                      disabled: s.disabled,
                      onValueChanged: N
                    }, null, 8, ["name", "disabled"])
                  ])
                ])
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        footer: z(({ addon_class: U }) => [
          x(b(At), {
            class: F(U),
            disabled: !g.value,
            onClick: w[3] || (w[3] = (ae) => n.value = !1)
          }, null, 8, ["class", "disabled"]),
          x(b($t), {
            class: F(U),
            onClick: B
          }, null, 8, ["class"])
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Wt = /* @__PURE__ */ A({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: l, emit: t }) {
    let a, s;
    const r = ua(R);
    Ce([`${r}summernote-lite.min.css`]), [a, s] = ea(() => import(`${r}summernote`)), await a, s();
    const n = P(null), d = e, c = t;
    return j(() => d.disabled, (h) => {
      n.value != null && $(n.value).summernote(h ? "disable" : "enable");
    }), l({
      /**
       * Gets the current value 
       */
      getValue: () => $(n.value).summernote("code"),
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (h) => {
        $(n.value).summernote("code", h);
      }
    }), ce(() => {
      $(n.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(h) {
            c("valueChanged", { name: d.name, value: h });
          }
        }
      }), (d.disabled ?? !1) && $(n.value).summernote("disable");
    }), ta(() => {
      $(n.value).summernote("destroy");
    }), (h, g) => (o(), i("div", {
      class: "summernote",
      ref_key: "snote",
      ref: n
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
    const l = e, t = de(l, R);
    return (a, s) => (o(), W(pe(l.subtype), null, {
      default: z(() => [
        Y(O(b(t)(l.label ?? "")), 1)
      ]),
      _: 1
    }));
  }
}), Sr = ["name"], It = /* @__PURE__ */ A({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, r = P(null);
    return j(r, (c) => s("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => r.value,
      /**
       * Sets the current value
       * 
       * @param value string|null
       * @returns void
       */
      setValue: (c) => {
        r.value = c;
      }
    }), (c, u) => G((o(), i("input", {
      type: "hidden",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => r.value = p)
    }, null, 8, Sr)), [
      [De, r.value]
    ]);
  }
}), Mr = ["id", "name", "disabled", "min", "max", "step"], Lt = /* @__PURE__ */ A({
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
    const a = e, s = t, r = P(null), n = () => {
      if (r.value === "" || r.value === null)
        return null;
      let c = parseInt(r.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, d = (c) => {
      r.value = c === null ? "" : c.toString();
    };
    return j([r], (c) => s("valueChanged", { name: a.name, value: n() })), l({
      /**
       * Gets the current value 
       */
      getValue: n,
      /**
       * Sets the current value
       * 
       * @param value number|string|null
       * @returns void
       */
      setValue: d
    }), (c, u) => G((o(), i("input", {
      type: "number",
      class: "input",
      id: a.name,
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => r.value = p),
      disabled: a.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, Mr)), [
      [De, r.value]
    ]);
  }
}), Dr = ["id"], Ue = /* @__PURE__ */ A({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const l = e, t = de(l, R);
    return (a, s) => (o(), i("p", {
      id: l.name
    }, O(b(t)(l.label ?? "")), 9, Dr));
  }
}), $r = { class: "radio is-block" }, Ar = ["name", "value", "disabled"], Vt = /* @__PURE__ */ A({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function, null] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = Z(R), r = k(() => V("Form.Error", s)), n = t, d = de(a, R), c = P(null), u = () => c.value;
    j(c, (f) => {
      n("valueChanged", { name: a.name, value: u() });
    });
    const p = k(async () => {
      var f;
      if (a.values == null)
        return [];
      {
        let v = await at(a.values);
        return c.value === null && v.some((y) => y.selected) && (c.value = (f = v.find((y) => y.selected)) == null ? void 0 : f.value), v.map((y) => ({
          label: y.label,
          value: y.value,
          selected: c.value === y.value
        }));
      }
    }), h = (f) => {
      c.value = f;
    }, { hiddenValues: g, disabledValues: m } = tt(a.name, R);
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
    }), (f, v) => (o(), i("div", null, [
      x(be, { promise: p.value }, {
        default: z(({ response: y }) => [
          f.values != null ? (o(!0), i(C, { key: 0 }, L(y, (N) => G((o(), i("label", $r, [
            S("input", {
              type: "radio",
              name: a.name,
              value: N.value,
              class: "radio",
              disabled: a.disabled || b(m).some((D) => D === N.value.toString())
            }, null, 8, Ar),
            Y(" " + O(b(d)(N.label)), 1)
          ], 512)), [
            [re, !b(g).some((D) => D === N.value.toString())]
          ])), 256)) : J("", !0)
        ]),
        rejected: z(() => [
          x(b(he), {
            type: b(ue).danger,
            message: r.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Jr = { class: "select" }, Nr = ["id", "name", "multiple", "disabled"], Fr = ["value", "selected", "disabled"], wr = ["label", "disabled"], Or = ["value", "selected", "disabled"], Ut = (e, l, t) => {
  let a = {
    label: e === null ? l.label : `${e}->${l.label}`,
    values: [],
    value: l.value
  }, s = t.length;
  return t.push(a), l.values.forEach((r) => {
    r.values === void 0 ? a.values.push(r) : t = Ut(a.label, r, t);
  }), t[s].values.length == 0 && t.splice(s, 1), t;
}, jt = /* @__PURE__ */ A({
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
    const a = e, s = Z(R), r = k(() => V("Form.Error", s)), n = t, d = de(a, R), c = P(null), u = P(!1), p = k(async () => {
      var v;
      if (a.values == null)
        return [];
      {
        let y = await at(a.values), N = y.filter((B) => B.selected).map((B) => B.value);
        y.some((B) => B.values !== void 0) && y.filter((B) => B.values !== void 0).forEach((B) => {
          var M;
          N = N.concat(
            (M = B.values) == null ? void 0 : M.filter((E) => E.selected).map((E) => E.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (y = y.map((B) => {
          let M = B;
          return M.values !== void 0 && (M.values = M.values.map((E) => {
            var ee;
            return E.selected = (ee = c.value) == null ? void 0 : ee.some((_) => _ === E.value), E;
          })), M;
        }), (v = c.value) == null || v.forEach((B) => {
          y.some((M) => M.value !== void 0 && M.value === B || M.values !== void 0 && M.values.some((E) => E.value === B)) || y.push({
            label: B,
            value: B
          });
        }));
        let D = [];
        return y.forEach((B) => {
          B.values === void 0 ? D.push(B) : D = Ut(null, B, D);
        }), D;
      }
    }), h = () => c.value == null || c.value.length == 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    j(c, () => {
      u.value || n("valueChanged", { name: a.name, value: h() });
    }), j(u, (v) => {
      v || n("valueChanged", { name: a.name, value: h() });
    });
    const g = (v) => {
      u.value = !0, v != null ? c.value = Array.isArray(v) ? v : [v] : a.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: m, disabledValues: f } = tt(a.name, R);
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
      setValue: g
    }), (v, y) => (o(), i("div", Jr, [
      p.value != null ? (o(), W(be, {
        key: 0,
        promise: p.value
      }, {
        default: z(({ response: N }) => [
          G(S("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: F(a.multiple ? "is-multiple" : ""),
            "onUpdate:modelValue": y[0] || (y[0] = (D) => c.value = D),
            disabled: a.disabled
          }, [
            N != null ? (o(!0), i(C, { key: 0 }, L(N, (D) => (o(), i(C, null, [
              D.values === void 0 ? G((o(), i("option", {
                key: 0,
                value: D.value,
                selected: D.selected,
                disabled: b(f).some((B) => B === D.value.toString())
              }, O(b(d)(D.label)), 9, Fr)), [
                [re, !b(m).some((B) => B === D.value.toString())]
              ]) : J("", !0),
              D.values !== void 0 ? G((o(), i("optgroup", {
                key: 1,
                label: b(d)(D.label),
                disabled: b(f).some((B) => B === D.value.toString())
              }, [
                (o(!0), i(C, null, L(D.values, (B) => G((o(), i("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: b(f).some((M) => M === B.value.toString())
                }, O(b(d)(B.label)), 9, Or)), [
                  [re, !b(m).some((M) => M === B.value.toString())]
                ])), 256))
              ], 8, wr)), [
                [re, !b(m).some((B) => B === D.value.toString())]
              ]) : J("", !0)
            ], 64))), 256)) : J("", !0)
          ], 10, Nr), [
            [aa, c.value]
          ])
        ]),
        rejected: z(() => [
          x(b(he), {
            type: b(ue).danger,
            message: r.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : J("", !0)
    ]));
  }
}), Tr = { class: "field" }, Pr = ["id", "name", "disabled"], xr = ["for"], Cr = {
  key: 0,
  class: "help is-danger"
}, Gt = /* @__PURE__ */ A({
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
    const a = e, s = t, r = de(a, R), n = P(!1);
    return j(n, (u) => s("valueChanged", { name: a.name, value: u })), l({
      /**
       * Gets the current value 
       */
      getValue: () => n.value,
      /**
       * Sets the current value
       * 
       * @param value boolean
       * @returns void
       */
      setValue: (u) => {
        n.value = u;
      }
    }), (u, p) => (o(), i("div", Tr, [
      G(S("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => n.value = h),
        disabled: a.disabled
      }, null, 8, Pr), [
        [je, n.value]
      ]),
      S("label", { for: u.name }, [
        Y(O(b(r)(a.label)) + " ", 1),
        a.required ? (o(), i("span", Cr, "*")) : J("", !0)
      ], 8, xr)
    ]));
  }
}), Br = ["type", "name", "disabled", "maxlength"], Ht = /* @__PURE__ */ A({
  __name: "text",
  props: {
    subtype: { default: "text" },
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, r = P(null);
    return j(r, (c) => s("valueChanged", { name: a.name, value: c })), l({
      /**
       * Gets the current value 
       */
      getValue: () => r.value,
      /**
       * Sets the current value
       * 
       * @param value any|null
       * @returns void
       */
      setValue: (c) => {
        r.value = c;
      }
    }), (c, u) => G((o(), i("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => r.value = p)
    }, null, 8, Br)), [
      [la, r.value]
    ]);
  }
}), Er = ["id", "name", "rows", "cols", "maxlength", "disabled"], Kt = 9, Se = String.fromCharCode(Kt), Fe = `
`, Yt = /* @__PURE__ */ A({
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
    const a = e, s = t, r = P(null);
    j(r, (u) => {
      s("valueChanged", { name: a.name, value: u });
    });
    const n = () => r.value, d = (u) => {
      r.value = u;
    };
    l({
      /**
       * Gets the current value 
       */
      getValue: n,
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
        let p = n();
        if (p !== null)
          switch (u.keyCode) {
            case Kt:
              let h = u.selectionStart ?? u.target.selectionStart, g = u.selectionEnd ?? u.target.selectionEnd, m = p.substring(0, h), f = p.length > g ? p.substring(g) : "", v = h === g ? "" : p.substring(h, g);
              if (v.indexOf(`
`) < 0)
                u.shiftKey ? v.startsWith(Se) ? (v = v.substring(1), h--) : m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--) : v = Se + v;
              else {
                let y = !1;
                v.endsWith(Fe) && (y = !0, v = v.substring(0, v.length - 1));
                let N = v.split(Fe);
                v = "", u.shiftKey && m.endsWith(Se) && (m = m.substring(0, m.length - 1), h--), N.forEach((D, B) => {
                  u.shiftKey && D.startsWith(Se) ? D = D.substring(1) : u.shiftKey || (D = Se + D), v += D + (B === N.length - 1 ? "" : Fe);
                }), y && (v += Fe);
              }
              return p = m + v + f, h += v.length == 1 ? 1 : 0, g = h + (v.length == 1 ? 0 : v.length), d(p), u.target.selectionStart = h, u.target.selectionEnd = g, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
            default:
              return !0;
          }
      }
      return !0;
    };
    return (u, p) => G((o(), i("textarea", {
      class: "textarea",
      id: a.name,
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": p[0] || (p[0] = (h) => r.value = h)
    }, null, 40, Er)), [
      [De, r.value]
    ]);
  }
}), zr = (e) => {
  let l = le.twelve;
  if (e !== void 0)
    switch (e) {
      case 1:
        l = le.one;
        break;
      case 2:
        l = le.two;
        break;
      case 3:
        l = le.three;
        break;
      case 4:
        l = le.four;
        break;
      case 5:
        l = le.five;
        break;
      case 6:
        l = le.six;
        break;
      case 7:
        l = le.seven;
        break;
      case 8:
        l = le.eight;
        break;
      case 9:
        l = le.nine;
        break;
      case 10:
        l = le.ten;
        break;
      case 11:
        l = le.eleven;
        break;
      default:
        l = le.twelve;
        break;
    }
  return l;
}, qt = /* @__PURE__ */ A({
  __name: "inputs-collection",
  props: {
    fields: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = (m) => ({
      size: zr(m.form_columns),
      class: "field"
    }), s = e, r = t;
    let n = [];
    const d = k(() => {
      let m = [], f = [], v = 0;
      return n = s.fields.map((y, N) => P(null)), s.fields.forEach((y, N) => {
        let D = y.form_columns ?? 12;
        v + D > 12 && (m.push(f), f = [], v = 0), f.push({ ...y, refIndex: N }), v += D, v === 12 && (m.push(f), f = [], v = 0);
      }), f.length > 0 && m.push(f), m;
    }), c = R(Ee), u = R(et);
    return l({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (m) => {
        n.forEach((f, v) => {
          switch (s.fields[v].type) {
            case "subform":
              f.value.setValue(m);
              break;
            default:
              f.value.setValue !== void 0 && (m === null ? f.value.setValue(null) : Object.keys(m).some((y) => y === f.value.fieldName) ? f.value.setValue(m[f.value.fieldName]) : Object.keys(m).some((y) => y === f.value.altFieldName) && f.value.setValue(m[f.value.altFieldName]));
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
        return n.forEach((f) => {
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
      isValid: () => !n.some((m) => !(m.value.isValid === void 0 || m.value.isValid()))
    }), (m, f) => (o(), i("section", null, [
      (o(!0), i(C, null, L(d.value, (v) => (o(), W(st, {
        modifiers: [b(Ke).gapless],
        columns: v.map((y) => a(y))
      }, xe({ _: 2 }, [
        L(v.map((y, N) => ({ input: y, index: N })).filter((y) => !b(c).some((N) => N === y.input.name)), (y) => ({
          name: `col-${y.index}`,
          fn: z(() => [
            x(Zt, {
              ref_for: !0,
              ref: (N) => b(n)[y.input.refIndex].value = N,
              input: y.input,
              onValueChanged: f[0] || (f[0] = (N) => r("valueChanged", N)),
              onButtonClicked: f[1] || (f[1] = (N) => r("buttonClicked", N)),
              disabled: (s.disabled ?? !1) || b(u).some((N) => N === y.input.name)
            }, null, 8, ["input", "disabled"])
          ])
        }))
      ]), 1032, ["modifiers", "columns"]))), 256))
    ]));
  }
}), Rr = /* @__PURE__ */ A({
  __name: "subform",
  props: {
    fields: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, r = P(null), n = R(Ee, ye(P([]))), d = k(() => n ? n.value.some((h) => h === a.name) : !1);
    return l({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (h) => {
        r.value !== null && r.value.setValue(h);
      },
      /**
       * Called to get the value of this of all the components inside this subform.  
       * Returns an object where each propertyName is the name of the field and it's value is the value.
       */
      getValue: () => r.value === null ? null : r.value.getValue(),
      /**
       * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
       */
      isValid: () => r.value === null ? !1 : r.value.isValid()
    }), (h, g) => G((o(), W(Bt, {
      id: a.name,
      name: a.name
    }, {
      default: z(() => [
        x(qt, {
          fields: a.fields,
          ref_key: "inputs",
          ref: r,
          disabled: a.disabled,
          onValueChanged: g[0] || (g[0] = (m) => s("valueChanged", m)),
          onButtonClicked: g[1] || (g[1] = (m) => s("buttonClicked", m))
        }, null, 8, ["fields", "disabled"])
      ]),
      _: 1
    }, 8, ["id", "name"])), [
      [re, !d.value]
    ]);
  }
});
var I = /* @__PURE__ */ ((e) => (e.autocomplete = "autocomplete", e.button = "button", e.checkbox_group = "checkbox-group", e.checkbox = "checkbox", e.date = "date", e.full_editor = "full-editor", e.header = "header", e.hidden = "hidden", e.number = "number", e.paragraph = "paragraph", e.radio_group = "radio-group", e.select = "select", e.subform = "subform", e.switch = "switch", e.text = "text", e.textarea = "textarea", e.time = "time", e))(I || {});
const Wr = ["for"], Ir = {
  key: 0,
  class: "help is-danger"
}, Lr = { class: "control" }, Vr = [I.autocomplete, I.checkbox_group, I.date, I.number, I.radio_group, I.select, I.text, I.textarea, I.time, I.subform], Ur = [I.subform, I.switch, I.select, I.radio_group, I.paragraph, I.header, I.checkbox_group, I.checkbox, I.button, I.autocomplete], Zt = /* @__PURE__ */ A({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = P(null), s = t, r = e, n = de(r, R), d = ye(P(r.input.type)), c = k(() => {
      let M = null;
      switch (r.input.type) {
        case I.autocomplete:
          M = Pt;
          break;
        case I.button:
          M = Le;
          break;
        case I.checkbox_group:
          M = xt;
          break;
        case I.checkbox:
          M = Ct;
          break;
        case I.date:
          M = Rt;
          break;
        case I.full_editor:
          M = Wt;
          break;
        case I.header:
          M = Ve;
          break;
        case I.hidden:
          M = It;
          break;
        case I.number:
          M = Lt;
          break;
        case I.paragraph:
          M = Ue;
          break;
        case I.radio_group:
          M = Vt;
          break;
        case I.select:
          M = jt;
          break;
        case I.switch:
          M = Gt;
          break;
        case I.text:
          M = Ht;
          break;
        case I.textarea:
          M = Yt;
          break;
        case I.time:
          M = lt;
          break;
        case I.subform:
          M = Rr;
          break;
      }
      return M;
    }), u = function(M) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(M);
    };
    ce(() => {
      a.value !== null && r.input.value !== void 0 && r.input.value !== null && u(r.input.value);
    });
    const p = k(() => r.input.disabled ?? r.disabled ?? !1), h = k(() => r.input.name), g = k(() => r.input.name), m = k(() => Vr.some((M) => M === r.input.type) && r.input.label !== void 0 && r.input.label !== null), f = k(() => {
      let M = Object.assign({}, r.input ?? {});
      if (delete M.type, m.value && delete M.label, M.className != null && delete M.className, M.form_columns != null && delete M.form_columns, Ur.some((E) => E === r.input.type) && (M.translate = r.translate), M.disabled = r.disabled, M.additional !== void 0) {
        for (const E in M.additional)
          M[E] = M.additional[E];
        delete M.additional;
      }
      return M;
    }), v = (M) => {
      if (M.value !== void 0 && M.value !== null && Array.isArray(M.value)) {
        let E = [...M.value];
        M.value = E;
      }
      s("valueChanged", M);
    }, y = (M) => {
      s("buttonClicked", M);
    }, N = () => {
      if (a.value != null && a.value.getValue != null) {
        let M = a.value.getValue();
        return M != null && Array.isArray(M) ? [...M] : M;
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
      altFieldName: g,
      /**
       * Called to get the value of this component.
       * If this is a basic component, it returns that value.
       * If this is a subform it will return an object where the propertyName are the names of the fields in the subform.
       */
      getValue: N,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (r.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (r.input.required ?? !1) {
          let M = N();
          return M != null && (Array.isArray(M) ? M.length > 0 : !0) && M.toString() !== "";
        }
        return !0;
      },
      /**
       * Called to set the values of a subform component, this will throw an error if this component is not a subform.
       * 
       * @param values any|null
       */
      setValues: (M) => {
        if (r.input.type === "subform" && a.value !== null)
          a.value.setValues(M);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (M, E) => r.input.type === b(I).header ? (o(), W(Ve, {
      key: 0,
      subtype: r.input.subtype,
      label: r.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["subtype", "label"])) : r.input.type === b(I).paragraph ? (o(), W(Ue, {
      key: 1,
      name: r.input.name,
      label: r.input.label,
      ref_key: "inp",
      ref: a
    }, null, 8, ["name", "label"])) : r.input.type === b(I).button ? (o(), W(Le, K({ key: 2 }, f.value, {
      disabled: p.value,
      onButtonClicked: y,
      ref_key: "inp",
      ref: a
    }), null, 16, ["disabled"])) : (o(), i(C, { key: 3 }, [
      m.value ? (o(), i("label", {
        key: 0,
        class: "label",
        for: r.input.name
      }, [
        Y(O(b(n)(r.input.label ?? "")) + " ", 1),
        r.input.required ? (o(), i("span", Ir, "*")) : J("", !0)
      ], 8, Wr)) : J("", !0),
      S("div", Lr, [
        (o(), W(pe(c.value), K(f.value, {
          onValueChanged: v,
          ref_key: "inp",
          ref: a
        }), null, 16))
      ])
    ], 64));
  }
}), jr = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Gr = /* @__PURE__ */ A({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: l, emit: t }) {
    const a = e, s = t, r = de(a, R);
    Re("Translate", (y) => r.value(y));
    const n = P(null), d = () => n.value !== null ? n.value.getValue() : null, c = (y) => {
      n.value !== null && n.value.setValue(y);
    }, u = () => n.value !== null ? n.value.isValid() : !1, p = P([]);
    Re(Ee, ye(p));
    const h = (y) => {
      Array.isArray(y) ? p.value = [...p.value, ...y] : p.value.push(y);
    }, g = (y) => {
      Array.isArray(y) ? p.value = p.value.filter((N) => y.indexOf(N) >= 0) : p.value = p.value.filter((N) => N !== y);
    }, m = P([]);
    return Re(et, ye(m)), l({
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
      showField: g,
      /**
       * Called to disable 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      disableField: (y) => {
        Array.isArray(y) ? m.value = [...m.value, ...y] : m.value.push(y);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (y) => {
        Array.isArray(y) ? m.value = m.value.filter((N) => y.indexOf(N) >= 0) : m.value = m.value.filter((N) => N !== y);
      }
    }), (y, N) => (o(), i("form", jr, [
      x(qt, {
        fields: a.elements,
        ref_key: "inputs",
        ref: n,
        disabled: a.disabled,
        onValueChanged: N[0] || (N[0] = (D) => s("valueChanged", D)),
        onButtonClicked: N[1] || (N[1] = (D) => s("buttonClicked", D))
      }, null, 8, ["fields", "disabled"])
    ]));
  }
}), Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Pt,
  Button: Le,
  Checkbox: Ct,
  CheckboxGroup: xt,
  ComponentForm: Gr,
  DateField: Rt,
  FormComponent: Zt,
  FullEditor: Wt,
  Header: Ve,
  Hidden: It,
  NumberField: Lt,
  Paragraph: Ue,
  RadioGroup: Vt,
  Select: jt,
  Switch: Gt,
  Text: Ht,
  TextArea: Yt,
  Time: lt
}, Symbol.toStringTag, { value: "Module" })), pt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Ce(`${pt.substring(0, pt.lastIndexOf("/"))}/vibrantvue.min.css`);
const Kr = Object.values(Xe).filter((e, l, t) => t.indexOf(e) === l), Yr = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Kr,
  setSkin: Yr
}, Symbol.toStringTag, { value: "Module" })), Zr = /* @__PURE__ */ A({
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
    const t = `${ca(R)}chart.umd.min.js`, a = P(null), s = e, r = l;
    let n = null;
    const d = () => {
      n != null && n.update();
    }, c = k(() => {
      var u = "";
      return s.width && (u = `width:${s.width}px;`), s.height && (u += `height:${s.height}px;`), u;
    });
    return j(() => s.type, (u) => {
      n != null && (n.type = u ?? "line");
    }), j(
      () => s.labels,
      (u) => {
        n != null && (n.data.labels = u, (s.show_refresh == null || !s.show_refresh) && d());
      },
      { deep: !0 }
    ), j(
      () => s.datasets,
      (u) => {
        n != null && (n.data.datasets = u, (s.show_refresh == null || !s.show_refresh) && d());
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
              filter: (h, g) => h.text != null
            },
            onClick: function(h, g) {
              r("legendItemClick", n, g);
            }
          }
        }
      };
      s.scales != null && s.scales != null && (u.scales = s.scales), s.tooltips != null && s.tooltips != null && (u.tooltips = s.tooltips);
      const { Chart: p } = await Ge(t, ["Chart"]);
      n = new p(a.value.getContext("2d"), {
        type: s.type == null ? "line" : s.type,
        data: {
          datasets: s.datasets,
          labels: s.labels
        },
        options: u
      }), n.update();
    }), (u, p) => (o(), W(Et, null, xe({
      content: z(() => [
        S("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ae(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: z((h) => [
          S("h3", {
            class: F(h.header_class)
          }, O(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.show_refresh != null && s.show_refresh != null && s.show_refresh ? {
        name: "footer",
        fn: z((h) => [
          x(Jt, {
            class: F(h.addon_class),
            onClick: d
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Qr = /* @__PURE__ */ A({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: l, emit: t }) {
    const a = `${pa(R)}src-noconflict/ace.js`, s = e, r = t, n = P(null), d = P(null), c = function() {
      return d.value.getValue() == "" ? null : d.value.getValue();
    }, u = function(h) {
      d.value.setValue(h ?? "");
    };
    j(() => s.readonly, (h) => {
      d.value.setReadOnly(h == null || h == null ? !1 : h);
    }), j(() => s.value, (h) => {
      u(h);
    }), j(() => s.language, (h) => {
      d.value.getSession().setMode(h);
    });
    const p = k(() => {
      let h = Number.MAX_SAFE_INTEGER;
      if (s.autocompletes != null && s.autocompletes != null) {
        for (let g = 0; g < s.autocompletes.length; g++)
          s.autocompletes[g].method.indexOf(".") >= 0 ? h = Math.min(h, s.autocompletes[g].method.indexOf(".")) : h = Math.min(h, s.autocompletes[g].method.length);
        if (h > 3 && s.autocompletes.length > 0) {
          let g = !0, m = s.autocompletes[0].method.substring(0, 3);
          for (let f = 0; f < s.autocompletes.length; f++)
            if (s.autocompletes[f].method.substring(0, 3) != m) {
              g = !1;
              break;
            }
          g && (h = 3);
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
      d.value = sa(h.edit(n.value.$el, {
        mode: s.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), d.value.setReadOnly(s.readonly === void 0 || s.readonly === null ? !1 : s.readonly), s.value !== null && s.value !== void 0 && d.value.setValue(s.value), d.value.on("change", () => r("valueChanged", c())), s.autocompletes !== null && s.autocompletes !== void 0 && (d.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), d.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(g, m, f, v, y) {
          var N = [];
          if (v = v.toUpperCase(), v.length >= p && (N = s.autocompletes.filter((D) => D.method.toUpperCase().startsWith(v) && D.method.length > v.legend).map((D) => ({
            caption: D.method + (D.description === null || D.description === void 0 ? "" : "->" + D.description),
            value: D.method,
            meta: "autos"
          }))), N.length === 0) {
            y(null, []);
            return;
          }
          y(null, N.map(function(D) {
            return D;
          }));
        }
      }]);
    }), (h, g) => (o(), i("div", {
      class: "editor",
      ref_key: "container",
      ref: n
    }, null, 512));
  }
}), Xr = { key: 0 }, en = { colspan: "100%" }, tn = ["colspan", "rowspan"], an = ["onClick"], ln = { class: "icon" }, sn = { key: 0 }, rn = { colspan: "100%" }, nn = ["colspan", "rowspan", "onClick"], on = { key: 1 }, un = { colspan: "100%" }, dn = /* @__PURE__ */ A({
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
    size: { default: q.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean }
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: l }) {
    const t = ie(), a = e, s = l, r = {
      scrollable: a.scrollable,
      fixed_header: a.fixed_header,
      full_width: a.full_width,
      narrow: a.narrow
    }, n = {
      use_next: a.use_next,
      has_more: a.has_more,
      has_previous: a.has_previous,
      size: a.size,
      rounded: a.rounded,
      button_type: a.button_type,
      total_pages: a.total_pages,
      current_page: a.current_page
    }, d = k(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && oe(a.total_pages) > 1)), c = k(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((g) => g.map((m) => a.columns.filter((f) => f.some((v) => v.id === m))[0].find((f) => f.id === m)))), u = (g) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === g ? s("sort", {
        column: g,
        ascending: !a.current_sort.ascending
      }) : s("sort", {
        column: g,
        ascending: !0
      });
    }, p = (g, m) => {
      if (a.getRowColor) {
        let f = a.getRowColor(g, m);
        if (f)
          return `is-${f}`;
      }
      return null;
    }, h = (g, m, f, v) => {
      let y = "";
      if ((m.cellClass || m.getCellColor) && (m.cellClass && (y += `${m.cellClass}`), m.getCellColor)) {
        let N = m.getCellColor(g, f, v);
        N && (y += ` is-${N}`);
      }
      return y === "" ? null : y;
    };
    return (g, m) => (o(), W(rt, me(fe(r)), xe({
      thead: z(() => [
        a.has_filter ?? !1 ? (o(), i("tr", Xr, [
          S("th", en, [
            x(Nt, {
              onFilter: m[0] || (m[0] = (f) => s("filter", f))
            })
          ])
        ])) : J("", !0),
        (o(!0), i(C, null, L(a.columns, (f) => (o(), i("tr", null, [
          (o(!0), i(C, null, L(f, (v) => (o(), i("th", {
            colspan: v.headerColspan,
            rowspan: v.headerRowspan,
            class: F(v.headerClass)
          }, [
            T(g.$slots, `head-${v.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (v.canSort ?? !1) && v.id === a.current_sort.column ? (o(), i("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (y) => u(v.id)
              }, [
                S("span", ln, [
                  x(H, { icon: "arrow-down" })
                ]),
                S("span", null, O(v.title), 1)
              ], 8, an)) : (o(), i(C, { key: 1 }, [
                Y(O(v.title), 1)
              ], 64))
            ])
          ], 10, tn))), 256))
        ]))), 256))
      ]),
      tbody: z(() => [
        a.data === null || a.data.length === 0 ? (o(), i("tr", sn, [
          S("td", rn, [
            a.data === null ? (o(), W(_e, { key: 0 })) : (o(), W(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (o(!0), i(C, { key: 1 }, L(a.data, (f, v) => (o(), i(C, null, [
          (o(!0), i(C, null, L(c.value.filter((y) => y.some((N) => !(N.headerOnly ?? !1))), (y, N) => (o(), i("tr", {
            key: `row-${v}-${N}`,
            class: F(p(v, f))
          }, [
            (o(!0), i(C, null, L(y.filter((D) => !(D.headerOnly ?? !1)), (D) => (o(), i("td", {
              key: `data-${v}-${N}`,
              colspan: D.dataColspan,
              rowspan: D.dataRowspan,
              class: F(h(v, D, f, D.propertyName ? f[D.propertyName] : void 0)),
              onClick: (B) => s("cellClicked", { rowIndex: v, data: D.propertyName ? f[D.propertyName] : null, row: f })
            }, [
              T(g.$slots, `body-${D.id}`, K({ ref_for: !0 }, { rowIndex: v, data: D.propertyName ? f[D.propertyName] : null, row: f }), () => [
                Y(O(D.propertyName ? f[D.propertyName] : null), 1)
              ])
            ], 10, nn))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      d.value || b(t).tfoot_head || b(t).tfoot_bottom ? {
        name: "tfoot",
        fn: z(() => [
          b(t).tfoot_head ? T(g.$slots, "tfoot_head", { key: 0 }) : J("", !0),
          d.value ? (o(), i("tr", on, [
            S("td", un, [
              x(Ft, K(n, {
                onMoveForward: m[1] || (m[1] = (f) => s("moveForward")),
                onMoveBack: m[2] || (m[2] = (f) => s("moveBack")),
                onGoToPage: m[3] || (m[3] = (f) => s("goToPage", f))
              }), null, 16)
            ])
          ])) : J("", !0),
          b(t).tfoot_bottom ? T(g.$slots, "tfoot_bottom", { key: 2 }) : J("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), cn = { class: "progress-group" }, pn = /* @__PURE__ */ A({
  __name: "progress-group",
  props: {
    size: {},
    values: {},
    max: {}
  },
  setup(e) {
    const l = e, t = k(() => {
      let r = 0;
      for (let n = 0; n < l.values.length; n++)
        r += l.values[n].value;
      return r;
    }), a = k(() => l.values.map((r) => ({
      size: l.size ?? q.normal,
      type: r.type,
      percentage: r.value / (l.max ?? t.value) * 100,
      caption: r.caption ?? `${r.value}`,
      onClick: r.onClick
    }))), s = k(() => l.max !== void 0 ? {
      size: l.size ?? q.normal,
      type: null,
      percentage: (l.max - t.value) / l.max * 100,
      caption: null
    } : null);
    return (r, n) => (o(), i("div", cn, [
      (o(!0), i(C, null, L(a.value, (d, c) => (o(), W(b(Ot), {
        is: "progress",
        class: F(`progress is-${d.size} is-${d.type} ${d.onClick !== void 0 ? "is-clickable" : ""}`),
        key: c,
        text: d.caption ?? "",
        position: b(Be).bottom,
        style: Ae({ width: `${d.percentage}%` }),
        value: "100",
        max: "100",
        onClick: () => {
          d.onClick !== void 0 && d.onClick();
        }
      }, {
        default: z(() => [
          Y(O(`${d.percentage}%`), 1)
        ]),
        _: 2
      }, 1032, ["class", "text", "position", "style", "onClick"]))), 128)),
      s.value != null ? (o(), i("progress", {
        key: 0,
        class: F(`progress is-${s.value.size} is-${s.value.type}`),
        style: Ae({ width: `${s.value.percentage}%` }),
        value: "100",
        max: "100"
      }, O(`${s.value.percentage}%`), 7)) : J("", !0)
    ]));
  }
}), mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Zr,
  CodeWriter: Qr,
  Grid: dn,
  ProgressGroup: pn
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: bn,
  Button: vn,
  ButtonsContainer: gn,
  ButtonAdd: yn,
  ButtonCancel: fn,
  ButtonDelete: _n,
  ButtonDisable: kn,
  ButtonDownload: Sn,
  ButtonEdit: Mn,
  ButtonEnable: Dn,
  ButtonOkay: $n,
  ButtonPrint: An,
  ButtonRefresh: Jn,
  ButtonSave: Nn,
  ButtonUpload: Fn,
  CheckMark: wn,
  DropDown: On,
  DynamicSlot: Tn,
  Filter: Pn,
  Icon: xn,
  Message: Cn,
  Notification: Bn,
  PageNotification: En,
  Pagination: zn,
  Promised: Rn,
  Progress: Wn,
  NavBar: In,
  Menu: Ln,
  MenuLabel: Vn,
  MenuList: Un,
  MenuEntry: jn,
  ToolTip: Gn,
  Badge: Hn,
  Tag: Kn,
  Tags: Yn
} = zl, { DraggableItem: qn, DropZone: Zn, Sortable: Qn } = jl, {
  AutoComplete: Xn,
  CheckboxGroup: eo,
  Checkbox: to,
  DateField: ao,
  ComponentForm: lo,
  FullEditor: so,
  Header: ro,
  Hidden: no,
  NumberField: oo,
  Paragraph: uo,
  RadioGroup: io,
  Select: co,
  Switch: po,
  Text: mo,
  TextArea: ho,
  Time: bo,
  FormComponent: vo
} = Hr, {
  Banner: go,
  Box: yo,
  Breadcrumbs: fo,
  Card: _o,
  ColumnContainer: ko,
  Footer: So,
  Level: Mo,
  List: Do,
  Media: $o,
  Modal: Ao,
  ModalCard: Jo,
  Panel: No,
  Section: Fo,
  Table: wo,
  Tabs: Oo,
  Slideout: To,
  StepWizard: Po
} = gr, { AVAIABLE_SKINS: xo, setSkin: Co } = qr, {
  ColorTypes: Bo,
  NoticeTypes: Eo,
  Sizes: zo,
  AnimationSpeeds: Ro,
  AnimationTypes: Wo,
  IconSizes: Io,
  ChartLegendPositions: Lo,
  ChartTypes: Vo,
  DropZoneQuadrants: Uo,
  BreadCrumbAlignments: jo,
  BreadCrumbSeperators: Go,
  ColumnContainerModifiers: Ho,
  ColumnSizes: Ko,
  ColumnOffsetSizes: Yo,
  BorderTypes: qo,
  TabAlignments: Zo,
  TabStyles: Qo,
  TileSizes: Xo,
  TileTypes: eu,
  FixedNavBarPositions: tu,
  FixedMenuPositions: au,
  BadgePositions: lu,
  ToolTipPositions: su,
  ToolTipTextAlignments: ru,
  ButtonAlignments: nu,
  SectionSizes: ou
} = na, { loadNonEs6Module: uu } = ra, { Chart: iu, CodeWriter: du, Grid: cu, ProgressGroup: pu } = mn;
export {
  xo as AVAIABLE_SKINS,
  bn as Animation,
  Ro as AnimationSpeeds,
  Wo as AnimationTypes,
  Xn as AutoComplete,
  Hn as Badge,
  lu as BadgePositions,
  go as Banner,
  qo as BorderTypes,
  yo as Box,
  jo as BreadCrumbAlignments,
  Go as BreadCrumbSeperators,
  fo as Breadcrumbs,
  vn as Button,
  yn as ButtonAdd,
  nu as ButtonAlignments,
  fn as ButtonCancel,
  _n as ButtonDelete,
  kn as ButtonDisable,
  Sn as ButtonDownload,
  Mn as ButtonEdit,
  Dn as ButtonEnable,
  $n as ButtonOkay,
  An as ButtonPrint,
  Jn as ButtonRefresh,
  Nn as ButtonSave,
  Fn as ButtonUpload,
  gn as ButtonsContainer,
  _o as Card,
  iu as Chart,
  Lo as ChartLegendPositions,
  Vo as ChartTypes,
  wn as CheckMark,
  to as Checkbox,
  eo as CheckboxGroup,
  du as CodeWriter,
  Bo as ColorTypes,
  ko as ColumnContainer,
  Ho as ColumnContainerModifiers,
  Yo as ColumnOffsetSizes,
  Ko as ColumnSizes,
  lo as ComponentForm,
  ao as DateField,
  qn as DraggableItem,
  On as DropDown,
  Zn as DropZone,
  Uo as DropZoneQuadrants,
  Tn as DynamicSlot,
  Pn as Filter,
  au as FixedMenuPositions,
  tu as FixedNavBarPositions,
  So as Footer,
  vo as FormComponent,
  so as FullEditor,
  cu as Grid,
  ro as Header,
  no as Hidden,
  xn as Icon,
  Io as IconSizes,
  Mo as Level,
  Do as List,
  $o as Media,
  Ln as Menu,
  jn as MenuEntry,
  Vn as MenuLabel,
  Un as MenuList,
  Cn as Message,
  Ao as Modal,
  Jo as ModalCard,
  In as NavBar,
  Eo as NoticeTypes,
  Bn as Notification,
  oo as NumberField,
  En as PageNotification,
  zn as Pagination,
  No as Panel,
  uo as Paragraph,
  Wn as Progress,
  pu as ProgressGroup,
  Rn as Promised,
  io as RadioGroup,
  Fo as Section,
  ou as SectionSizes,
  co as Select,
  zo as Sizes,
  To as Slideout,
  Qn as Sortable,
  Po as StepWizard,
  po as Switch,
  Zo as TabAlignments,
  Qo as TabStyles,
  wo as Table,
  Oo as Tabs,
  Kn as Tag,
  Yn as Tags,
  mo as Text,
  ho as TextArea,
  Xo as TileSizes,
  eu as TileTypes,
  bo as Time,
  Gn as ToolTip,
  su as ToolTipPositions,
  ru as ToolTipTextAlignments,
  uu as loadNonEs6Module,
  Co as setSkin
};
//# sourceMappingURL=vibrantvue.esm.js.map
