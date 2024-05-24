import { computed as k, defineComponent as D, openBlock as r, createBlock as E, Transition as qt, withCtx as L, renderSlot as P, createElementBlock as d, normalizeClass as F, inject as T, ref as J, watch as R, createVNode as C, createCommentVNode as x, toDisplayString as N, mergeProps as Q, toValue as ae, createElementVNode as v, unref as y, Fragment as I, renderList as z, resolveDynamicComponent as ce, createTextVNode as Y, onMounted as pe, normalizeProps as oe, guardReactiveProps as ie, withDirectives as U, vModelText as ke, vShow as te, toRefs as Kt, reactive as rt, resolveComponent as it, vModelCheckbox as Ve, normalizeStyle as ze, readonly as xe, withAsyncContext as Qt, onUnmounted as Xt, vModelSelect as Zt, vModelDynamic as ea, provide as Ce, useSlots as $e, createSlots as ut, markRaw as ta } from "vue";
import "jquery";
const Ne = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let u = document.createElement("link"), p = new Promise((i) => {
        u.onload = function() {
          i(l);
        };
      });
      t[s] = p, a.appendChild(u), u.setAttribute("rel", "stylesheet"), u.setAttribute("type", "text/css"), u.setAttribute("server_path", l), u.setAttribute("href", l);
    } else
      t[s] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    n(l);
  });
}), fe = [], We = (e, n) => new Promise((t) => {
  let a = fe.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && n !== void 0 || a.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = fe.find((o) => o.path === e);
        s == null ? (clearTimeout(l), t(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), t(s.result));
      }, 500);
    } else
      t(a.result);
  else {
    fe.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let o = fe.findIndex((u) => u.path === e);
      if (n === void 0)
        fe[o].result = void 0;
      else {
        let u = {};
        n.forEach((p) => {
          u[p] = window[p];
        }), fe[o].result = u;
      }
      t(fe[o].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), dt = () => {
  var t;
  let e, n = "";
  return typeof self.crypto < "u" && (e = self.crypto, n = (t = e.randomUUID) == null ? void 0 : t.call(e)), n || "";
}, aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Ne,
  generateUUID: dt,
  loadNonEs6Module: We
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), le = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(le || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), be = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(be || {}), Fe = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Fe || {}), ct = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ct || {}), Re = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Re || {}), ue = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(ue || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), pt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(mt || {}), ft = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(ft || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Ue || {}), bt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(gt || {}), _t = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(_t || {}), Je = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Je || {}), yt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(yt || {}), je = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(je || {}), Ge = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ge || {}), He = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(He || {}), kt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(kt || {}), Ye = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(Ye || {});
const la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: be,
  AnimationTypes: Fe,
  BadgePositions: je,
  BorderTypes: Ue,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: pt,
  ButtonAlignments: kt,
  ChartLegendPositions: Re,
  ChartTypes: ct,
  ColorTypes: q,
  ColumnContainerModifiers: ht,
  ColumnOffsetSizes: ft,
  ColumnSizes: mt,
  DropZoneQuadrants: ee,
  FixedMenuPositions: yt,
  FixedNavBarPositions: Je,
  IconSizes: ue,
  NoticeTypes: le,
  Sizes: X,
  SkinTypes: Ye,
  TabAlignments: bt,
  TabStyles: vt,
  TileSizes: gt,
  TileTypes: _t,
  ToolTipPositions: Ge,
  ToolTipTextAlignments: He
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const n = e("Language", "en");
  return k(() => n);
}, na = (e) => {
  const n = e("IconSet", "solid");
  return k(() => n);
}, sa = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), oa = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), ra = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ia = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ua = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), $t = /* @__PURE__ */ D({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: be.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = ra(T);
    Ne(`${n}animate.min.css`);
    const t = e, a = (h) => {
      switch (h) {
        case be.slower:
          return 3e3;
        case be.fast:
          return 800;
        case be.faster:
          return 500;
        default:
          return 2e3;
      }
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, s = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, o = k(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), u = k(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), p = k(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), i = k(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed)
    ].join(" "));
    return (h, c) => t.repeating ? (r(), d("div", {
      key: 1,
      class: F(i.value)
    }, [
      P(h.$slots, "default")
    ], 2)) : (r(), E(qt, {
      key: 0,
      "enter-active-class": u.value,
      "leave-active-class": p.value,
      duration: o.value
    }, {
      default: L(() => [
        P(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), da = "brands.min.css", ca = "all.min.css", tt = "icon_styles", pa = /\.fa-([^: ]+):before/g, ha = /url\(([^)]+)\)/g, ye = J([]), Pe = J(!1), at = async (e, n) => {
  if (!Pe.value) {
    Pe.value = !0;
    let t;
    ye.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", tt), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(tt), ye.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${da}`),
      fetch(`${e}${ca}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(pa)].forEach((s) => {
      ye.value.push(s[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(ha)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), t.innerText = l, ye.value.splice(0, 1), Pe.value = !1;
  }
}, j = /* @__PURE__ */ D({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = oa(T), t = na(T);
    ye.value.length === 0 ? at(n, t.value) : R(t, () => at(n, t.value));
    const a = e, l = k(() => {
      let s = [];
      return a.icon !== void 0 && a.icon !== null && (ye.value.indexOf(a.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${t.value}`)), s.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== ue.normal && s.push(`fa-${a.size}`), s;
    });
    return (s, o) => (r(), d("i", {
      class: F(l.value)
    }, null, 2));
  }
});
const ma = ["disabled"], fa = {
  key: 0,
  class: "icon is-small"
}, ba = { key: 1 }, Z = /* @__PURE__ */ D({
  __name: "button",
  props: {
    icon: {},
    type: { default: q.primary },
    title: {},
    disabled: { type: Boolean },
    size: { default: X.normal },
    hide_mobile: { type: Boolean },
    hide_tablet: { type: Boolean },
    hide_desktop: { type: Boolean },
    is_rounded: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = k(() => {
      let s = ["button", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && s.push("disabled"), t.is_rounded && s.push("is-rounded"), t.hide_mobile && s.push("is-hidden-mobile"), t.hide_tablet && s.push("is-hidden-tablet-only"), t.hide_desktop && s.push("is-hidden-desktop is-hidden-widescreen"), s.join(" ");
    });
    return (s, o) => (r(), d("button", {
      class: F(l.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (u) => a("click"))
    }, [
      t.icon != null ? (r(), d("span", fa, [
        C(j, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : x("", !0),
      t.title != null ? (r(), d("span", ba, N(t.title), 1)) : x("", !0)
    ], 10, ma));
  }
}), va = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, ga = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', _a = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', ya = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, ka = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', $a = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', Sa = {
  Button: JSON.parse(va),
  Filter: JSON.parse(ga),
  Pagination: JSON.parse(_a),
  Date: JSON.parse(ya),
  Form: JSON.parse(ka),
  Wizard: JSON.parse($a)
}, V = (e, n) => {
  let t = e.split("."), a = Sa[t[0]];
  if (a !== void 0) {
    a[n.value] === void 0 ? a = a.en : a = a[n.value];
    let l = 1;
    for (; a !== void 0 && l < t.length; )
      a = a[t[l]], l++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Ma = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), St = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Fa = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Mt = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Dt = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Ja = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ D({
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
    const t = n, a = K(T), l = k(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (s, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Aa = /* @__PURE__ */ D({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("div", {
      class: F(["buttons", n.size ? `are-${n.size}` : "", n.alignment ? `is-${n.alignment}` : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Ca = /* @__PURE__ */ D({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: ue.normal }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), E(j, {
      icon: `square-${n.checked ? "check" : "xmark"}`,
      size: n.size
    }, null, 8, ["icon", "size"]));
  }
}), Pa = { class: "dropdown-trigger" }, Ea = ["aria-controls"], Ta = /* @__PURE__ */ v("span", { class: "icon is-small" }, [
  /* @__PURE__ */ v("i", {
    class: "fas fa-angle-down",
    "aria-hidden": "true"
  })
], -1), La = ["id"], Ia = { class: "dropdown-content" }, Va = {
  key: 0,
  class: "dropdown-divider"
}, za = { key: 0 }, Wa = /* @__PURE__ */ D({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const n = dt(), t = e, a = J(!1), l = k(() => {
      let i = ["dropdown"];
      return t.is_hoverable && i.push("is-hoverable"), t.is_right_align && i.push("is-right"), t.drops_up && i.push("is-up"), a.value && i.push("is-active"), i;
    }), s = k(() => {
      let i = ae(t.items);
      return Array.isArray(i) && i.length > 0 && i[0].children === void 0 ? [{
        children: i
      }] : Array.isArray(i) ? i : [i];
    }), o = (i) => {
      let h = ["dropdown-item"];
      return i instanceof String || i.active && h.push("is-active"), h;
    }, u = (i) => {
      if (!(i instanceof String))
        return i.href;
    }, p = (i) => {
      if (!(i instanceof String)) {
        a.value = !1;
        let h = i;
        h.onClick && h.onClick();
      }
    };
    return (i, h) => (r(), d("div", {
      class: F(l.value)
    }, [
      v("div", Pa, [
        v("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": y(n),
          onClick: h[0] || (h[0] = (c) => a.value = !a.value)
        }, [
          v("span", null, N(t.title), 1),
          Ta
        ], 8, Ea)
      ]),
      v("div", {
        class: "dropdown-menu",
        id: y(n),
        role: "menu"
      }, [
        (r(!0), d(I, null, z(s.value, (c, f) => (r(), d("div", Ia, [
          f > 0 ? (r(), d("hr", Va)) : x("", !0),
          (r(!0), d(I, null, z(c.children, (g) => (r(), E(ce(g instanceof String ? "div" : "a"), {
            class: F(o(g)),
            href: u(g),
            onClick: (S) => p(g)
          }, {
            default: L(() => [
              g instanceof String ? (r(), d("p", za, N(g), 1)) : x("", !0),
              Y(" " + N(g instanceof String ? null : g.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, La)
    ], 2));
  }
}), lt = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value.test(s)).map((s) => a[s]);
}, Ra = /* @__PURE__ */ D({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = J(null), t = e, a = k(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return R(() => [t.url, t.filter], async () => {
      n.value = await lt(t.url, t.sortMethod, a);
    }), pe(async () => {
      n.value = await lt(t.url, t.sortMethod, a);
    }), (l, s) => (r(!0), d(I, null, z(n.value, (o) => (r(), E(ce(o), oe(ie(t.props)), null, 16))), 256));
  }
}), Ua = { class: "control has-icons-left" }, ja = ["placeholder"], Ga = { class: "icon is-small is-left" }, wt = /* @__PURE__ */ D({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(T), s = k(() => V("Filter.Filter", l)), o = J(null);
    R([o], (p) => {
      p[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const u = (p) => {
      p.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return pe(() => {
      t.default_value && (o.value = t.default_value);
    }), (p, i) => (r(), d("div", Ua, [
      U(v("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": i[0] || (i[0] = (h) => o.value = h),
        onKeypress: u
      }, null, 40, ja), [
        [ke, o.value]
      ]),
      v("span", Ga, [
        C(j, { icon: "filter" })
      ])
    ]));
  }
}), Ha = {
  key: 0,
  class: "message-header"
}, Ya = { class: "message-body" }, qa = /* @__PURE__ */ D({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = k(() => t.size === X.normal ? null : `is-${t.size}`), s = k(() => `is-${t.type}`);
    return (o, u) => (r(), d("article", {
      class: F(["message", l.value, s.value])
    }, [
      t.title ? (r(), d("div", Ha, [
        v("p", null, N(t.title), 1),
        t.has_delete ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: u[0] || (u[0] = (p) => a("close"))
        })) : x("", !0)
      ])) : x("", !0),
      v("div", Ya, [
        P(o.$slots, "default", {}, () => [
          Y(N(t.message), 1)
        ])
      ])
    ], 2));
  }
}), he = /* @__PURE__ */ D({
  __name: "notification",
  props: {
    type: { default: le.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("div", {
      class: F(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      P(t.$slots, "default", {}, () => [
        Y(N(n.message), 1)
      ])
    ], 2));
  }
}), Ka = {
  key: 0,
  class: "modal-background"
}, Qa = {
  key: 0,
  class: "title"
}, Xa = { class: "block" }, Za = /* @__PURE__ */ D({
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
    const t = e, a = n, l = k(() => {
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
    }), s = k(() => {
      var o = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && o.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || o.push("has-no-close"), o;
    });
    return (o, u) => (r(), d("div", {
      class: F({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (r(), d("div", Ka)) : x("", !0),
      C($t, {
        incoming: y(Fe).fadeIn,
        outgoing: y(Fe).fadeOut,
        speed: y(be).slower
      }, {
        default: L(() => [
          t.visible ? (r(), d("div", {
            key: 0,
            class: F(s.value)
          }, [
            C(j, {
              icon: l.value,
              size: y(ue).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), d("h1", Qa, N(t.header), 1)) : x("", !0),
            v("div", Xa, N(t.message), 1),
            t.has_close ? (r(), E(j, {
              key: 1,
              icon: "circle-xmark",
              onClick: u[0] || (u[0] = (p) => a("close")),
              size: y(ue).large
            }, null, 8, ["size"])) : x("", !0)
          ], 2)) : x("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), el = ["title", "disabled"], tl = ["title", "disabled"], al = {
  key: 0,
  class: "pagination-list"
}, ll = {
  key: 0,
  class: "pagination-ellipsis"
}, nl = ["aria-label", "onOnclick"], Bt = /* @__PURE__ */ D({
  __name: "pagination",
  props: {
    use_next: { type: Boolean },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean, default: !0 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(T), s = k(() => V(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = k(() => V(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), u = k(() => t.button_type ? `has-background-${t.button_type}` : ""), p = k(() => V("Pagination.GoToPage", l)), i = k(() => t.current_page === void 0 ? 0 : ae(t.current_page) + (t.zero_page_index ? 1 : 0)), h = k(() => (t.has_previous ?? !1) || i.value > 0), c = k(() => (t.has_more ?? !1) || i.value < (t.total_pages === void 0 ? 0 : ae(t.total_pages))), f = k(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (ae(t.total_pages) > 5) {
        let O = Math.max(t.current_page === void 0 ? Math.floor(ae(t.total_pages) / 2) : i.value, 3);
        return ae(t.total_pages) - i.value === 0 ? O -= 2 : ae(t.total_pages) - i.value === 1 && O--, console.log(O), [
          1,
          -1,
          O - 1,
          O,
          O + 1,
          -1,
          ae(t.total_pages)
        ];
      } else {
        let O = [];
        for (let M = 1; M <= ae(t.total_pages); M++)
          O.push(M);
        return O;
      }
    }), g = function() {
      h && (t.current_page !== null ? a("goToPage", ae(t.current_page) - 1) : a("moveBack"));
    }, S = function() {
      c && (t.current_page !== null ? a("goToPage", ae(t.current_page) + 1) : a("moveForward"));
    }, m = function(O) {
      a("goToPage", t.zero_page_index ? O - 1 : O);
    };
    return (O, M) => U((r(), d("nav", {
      class: F(["pagination", "is-centered", u.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      v("a", {
        class: F(["pagination-previous", u.value]),
        title: s.value,
        onClick: g,
        disabled: h.value ? null : "disabled"
      }, [
        C(j, {
          icon: "backward",
          class: "mr-1",
          size: y(ue).small
        }, null, 8, ["size"]),
        Y(" " + N(s.value), 1)
      ], 10, el),
      v("a", {
        class: F(["pagination-next", u.value]),
        title: o.value,
        onClick: S,
        disabled: c.value ? null : "disabled"
      }, [
        Y(N(o.value) + " ", 1),
        C(j, {
          icon: "forward",
          class: "ml-1",
          size: y(ue).small
        }, null, 8, ["size"])
      ], 10, tl),
      t.total_pages !== void 0 ? (r(), d("ul", al, [
        (r(!0), d(I, null, z(f.value, (b) => (r(), d("li", null, [
          b === -1 ? (r(), d("span", ll, "…")) : (r(), d("a", {
            key: 1,
            class: F(b === -1 ? ["pagination-ellipsis"] : ["pagination-link", b === i.value ? "is-current" : ""]),
            "aria-label": b === -1 ? "" : `${p.value} ${b}`,
            onOnclick: (B) => m(b)
          }, N(b === -1 ? "" : b), 43, nl))
        ]))), 256))
      ])) : x("", !0)
    ], 2)), [
      [te, h.value || c.value]
    ]);
  }
});
function ve(e) {
  return typeof e == "function" ? e() : y(e);
}
function sl(e, n = 200) {
  const t = J(!1), a = J(!1), l = k(() => !t.value && !a.value), s = J(!1), o = J(), u = J(), p = k(() => {
    if (e != null) {
      let h = ve(e);
      return h instanceof Promise ? h : new Promise((c) => c(h));
    }
    return null;
  });
  let i;
  return R(
    () => ve(p),
    (h) => {
      if (t.value = !1, a.value = !1, o.value = null, !h) {
        u.value = null, i && clearTimeout(i), i = null;
        return;
      }
      const c = Number(ve(n)) || 0;
      c > 0 ? (s.value = !1, i && clearTimeout(i), i = setTimeout(() => {
        s.value = !0;
      }, c)) : s.value = !0, h.then((f) => {
        h === ve(p) && (u.value = ve(f), a.value = !0);
      }).catch((f) => {
        h === ve(p) && (o.value = f, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: s, error: o, data: u };
}
const me = /* @__PURE__ */ D({
  __name: "Promised",
  props: {
    promise: {},
    pending_delay: { default: 200 }
  },
  setup(e) {
    const n = e, t = K(T), a = k(() => V("Form.Error", t)), l = Kt(n), s = rt(sl(l.promise, l.pending_delay));
    return (o, u) => (r(), d(I, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? P(o.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        C(y(de), {
          size: y(X).small
        }, null, 8, ["size"])
      ]) : x("", !0),
      s.isRejected ? P(o.$slots, "rejected", oe(Q({ key: 1 }, s.error)), () => [
        C(y(he), {
          message: `${a}:${s.error.message ?? s.error.toString()}`,
          type: y(le).danger
        }, null, 8, ["message", "type"])
      ]) : x("", !0),
      s.isResolved ? P(o.$slots, "default", {
        key: 2,
        response: s.data
      }) : x("", !0)
    ], 64));
  }
}), ol = ["value", "max"], de = /* @__PURE__ */ D({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, t = k(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (a, l) => (r(), d("progress", {
      class: F(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, N(t.value ? `${t.value}%` : null), 11, ol));
  }
}), rl = {
  key: 0,
  class: "navbar-link"
}, il = {
  key: 0,
  class: "icon-text"
}, ul = { class: "icon" }, dl = { key: 1 }, cl = {
  key: 0,
  class: "icon-text"
}, pl = { class: "icon" }, hl = { key: 1 }, ml = {
  key: 2,
  class: "navbar-dropdown"
}, nt = /* @__PURE__ */ D({
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
    return (s, o) => {
      const u = it("navbar-item", !0);
      return r(), E(ce(t.childItems !== void 0 ? "div" : "a"), {
        class: F(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: L(() => [
          t.childItems !== void 0 ? (r(), d("a", rl, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", il, [
              v("span", ul, [
                C(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", dl, N(t.title), 1))
          ])) : (r(), d(I, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", cl, [
              v("span", pl, [
                C(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", hl, N(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), d("div", ml, [
            (r(!0), d(I, null, z(t.childItems, (p) => (r(), E(u, Q(p, {
              onItemClicked: o[0] || (o[0] = (i) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : x("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), fl = ["aria-label"], bl = { class: "navbar-brand" }, vl = ["aria-expanded"], gl = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), _l = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), yl = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), kl = [
  gl,
  _l,
  yl
], $l = {
  key: 0,
  class: "navbar-start"
}, Sl = { style: { width: "100px" } }, Ml = {
  key: 1,
  class: "navbar-end"
}, Dl = { style: { width: "100px" } }, wl = /* @__PURE__ */ D({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    yeah: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const n = e, t = J(!1);
    return pe(() => {
      if (n.fixed_position)
        switch (n.fixed_position) {
          case Je.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Je.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (r(), d("nav", {
      class: F(["navbar", n.fixed_position, n.color !== void 0 && n.color !== null ? `is-${n.color}` : ""]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      v("div", bl, [
        P(a.$slots, "brand"),
        v("a", {
          role: "button",
          class: F(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, kl, 10, vl)
      ]),
      v("div", {
        class: F(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.start_items !== void 0 ? (r(), d("div", $l, [
          C(me, {
            promise: n.start_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), d(I, null, z(s, (o) => (r(), E(nt, Q(o, {
                onItemClicked: l[1] || (l[1] = (u) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              v("div", Sl, [
                C(de, {
                  size: y(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : x("", !0),
        n.end_items !== void 0 ? (r(), d("div", Ml, [
          C(me, {
            promise: n.end_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), d(I, null, z(s, (o) => (r(), E(nt, Q(o, {
                onItemClicked: l[2] || (l[2] = (u) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              v("div", Dl, [
                C(de, {
                  size: y(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : x("", !0)
      ], 2)
    ], 10, fl));
  }
}), Bl = /* @__PURE__ */ D({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("aside", {
      class: F(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), xl = { class: "menu-label" }, Fl = /* @__PURE__ */ D({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("p", xl, [
      Y(N(n.message) + " ", 1),
      P(t.$slots, "default")
    ]));
  }
}), Ol = ["href"], Jl = {
  key: 0,
  class: "icon-text"
}, Nl = { class: "icon" }, Al = { key: 1 }, xt = /* @__PURE__ */ D({
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
    return (a, l) => (r(), d("li", null, [
      v("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: F(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (r(), d("span", Jl, [
          v("span", Nl, [
            C(j, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          v("span", null, N(n.title), 1)
        ])) : (r(), d("span", Al, N(n.title), 1)),
        P(a.$slots, "default")
      ], 10, Ol),
      P(a.$slots, "children")
    ]));
  }
}), Cl = { class: "menu-list" }, Pl = /* @__PURE__ */ D({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = it("menu-list", !0);
      return r(), d("ul", Cl, [
        n.items !== null ? (r(), E(me, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (r(!0), d(I, null, z(s, (o) => (r(), d("li", null, [
              C(xt, oe(ie(o)), null, 16),
              o.childItems !== void 0 ? (r(), E(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : x("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            v("li", null, [
              C(de, {
                size: y(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : x("", !0),
        P(t.$slots, "default")
      ]);
    };
  }
}), El = /* @__PURE__ */ D({
  __name: "badge",
  props: {
    position: { default: je.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("span", {
      class: F(["badge", `is-${n.position}`, n.type === void 0 ? "" : `is-${n.type}`])
    }, [
      Y(N(n.text) + " ", 1),
      P(t.$slots, "default")
    ], 2));
  }
}), Tl = /* @__PURE__ */ D({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    has_arrow: { type: Boolean, default: !1 },
    position: { default: Ge.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    always_active: { type: Boolean, default: !1 },
    text_align: { default: He.left }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), E(ce(t.is), {
      class: F([
        n.has_arrow ? "has-tooltop-arrow" : "",
        n.position ? `has-tooltip-${n.position}` : "",
        n.multiline ? "has-tooltip-multiline" : "",
        n.type ? `has-tooltip-${n.type}` : "",
        n.text_align ? `has-tooltip-text-${n.text}` : "",
        n.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: L(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Ll = /* @__PURE__ */ D({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: X.normal },
    is_delete: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const n = e, t = k(() => {
      let a = ["tag", `is-${n.type}`, `is-${n.size}`];
      return n.light && a.push("is-light"), n.rounded && a.push("is-rounded"), n.is_delete && a.push("is-delete"), a;
    });
    return (a, l) => (r(), d("span", {
      class: F(t.value)
    }, [
      P(a.$slots, "default", {}, () => [
        Y(N(n.text), 1)
      ])
    ], 2));
  }
}), Il = /* @__PURE__ */ D({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("span", {
      class: F(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: $t,
  Badge: El,
  Button: Z,
  ButtonAdd: Ma,
  ButtonCancel: St,
  ButtonDelete: Da,
  ButtonDisable: wa,
  ButtonDownload: Ba,
  ButtonEdit: xa,
  ButtonEnable: Fa,
  ButtonOkay: Mt,
  ButtonPrint: Oa,
  ButtonRefresh: Dt,
  ButtonSave: Ja,
  ButtonUpload: Na,
  ButtonsContainer: Aa,
  CheckMark: Ca,
  DropDown: Wa,
  DynamicSlot: Ra,
  Filter: wt,
  Icon: j,
  Menu: Bl,
  MenuEntry: xt,
  MenuLabel: Fl,
  MenuList: Pl,
  Message: qa,
  NavBar: wl,
  Notification: he,
  PageNotification: Za,
  Pagination: Bt,
  Progress: de,
  Promised: me,
  Tag: Ll,
  Tags: Il,
  ToolTip: Tl
}, Symbol.toStringTag, { value: "Module" })), zl = /* @__PURE__ */ D({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = J(!1), s = J(!1), o = J(null), u = k(() => (a.disabled ?? !1) || s.value && a.handle_search !== null), p = k(() => {
      let c = [];
      return u || c.push("has-cursor"), l.value ? c.push("is-move") : c.push("is-grab"), c;
    }), i = (c) => u.value ? (c.preventDefault(), !1) : (c.stopPropagation(), c.dataTransfer.setData("value", JSON.stringify(a.copy_data)), l.value = !0, t("started"), !0), h = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return pe(() => {
      if (a.handle_search) {
        let c = $(o.value).find(a.handle_search);
        c.length > 0 && (s.value = !0, c.on("mousedown", () => s.value = !1), c.on("mouseup", () => s.value = !0));
      }
    }), (c, f) => (r(), E(ce(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: i,
      onDragend: h,
      class: F(p.value)
    }, {
      default: L(() => [
        P(c.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Wl = /* @__PURE__ */ D({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = J(!1), s = J(null), o = J(null);
    k(() => t.tag ?? "div");
    const u = (f) => {
      const g = o.value.getBoundingClientRect(), S = {
        x: g.x + g.width / 2,
        y: g.y + g.height / 2
      };
      let m = ee.center;
      return f.x < S.x ? f.y < S.y ? m = ee.topLeft : m = ee.bottomLeft : f.y < S.y ? m = ee.topRight : m = ee.bottomRight, s.value = m, s.value;
    }, p = (f) => {
      f.preventDefault(), l.value = !0, a("itemEntered", u(f));
    }, i = (f) => {
      l.value = !0, a("itemExited", u(f));
    }, h = (f) => {
      f.preventDefault(), a("itemMoved", u(f));
    }, c = (f) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(f.dataTransfer.getData("value"))))
        return !1;
      f.stopPropagation(), f.preventDefault(), a("itemAdded", JSON.parse(f.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (f, g) => (r(), E(ce(t.tag), {
      ref_key: "handle",
      ref: o,
      class: F({ "is-bordered": l.value }),
      onDragenter: p,
      onDragleave: i,
      onDrop: c,
      onDragover: h
    }, {
      default: L(() => [
        P(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Ft = /* @__PURE__ */ D({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const n = e, t = k(() => {
      var a = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && a.push("is-small"), n.outlined && a.push("is-outlined"), n.highlighted && a.push("is-highlighted"), a;
    });
    return (a, l) => (r(), E(ce(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: F(t.value)
    }, {
      default: L(() => [
        P(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Be = /* @__PURE__ */ D({
  __name: "list-item",
  props: {
    type: {},
    outlined: { type: Boolean },
    highlighted: { type: Boolean },
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = k(() => {
      var s = [];
      return t.type && s.push("is-" + t.type), t.outlined && s.push("is-outlined"), t.highlighted && s.push("is-highlighted"), t.icon && s.push("has-icon"), s;
    });
    return (s, o) => (r(), d("li", {
      class: F(l.value)
    }, [
      t.icon ? (r(), d("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: o[0] || (o[0] = (u) => a("click"))
      }, [
        C(j, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : x("", !0),
      P(s.$slots, "default")
    ], 2));
  }
}), Rl = /* @__PURE__ */ D({
  __name: "sortable",
  props: {
    items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = J([]), s = J(-1), o = J(-1), u = J(null);
    R(t.items, (f, g) => {
      l.value = [...g];
    }), pe(() => {
      t.items !== null && (l.value = [...t.items]);
    });
    const p = (f) => {
      var g = f.target.getBoundingClientRect(), S = {
        x: g.x + g.width / 2,
        y: g.y + g.height / 2
      };
      let m = ee.center;
      return f.y < S.y ? m = ee.top : m = ee.bottom, m;
    }, i = (f, g) => {
      g.stopPropagation(), s.value = f, g.dataTransfer.setData("value", null);
    }, h = (f, g) => {
      s.value && (g.stopPropagation(), f != s.value ? (o.value = f, u.value = p(g)) : (o.value = -1, u.value = null));
    }, c = (f) => {
      if (s.value) {
        f.stopPropagation();
        var g = o.value + (u.value == ee.top ? 0 : 1), S = l.value.splice(g, 1)[0];
        g >= s.value && g--, l.value.splice(g, 0, S), o.value = -1, u.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (f, g) => (r(), E(Ft, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: c
    }, {
      default: L(() => [
        (r(!0), d(I, null, z(l.value, (S, m) => (r(), d(I, null, [
          U(C(Be, null, {
            default: L(() => [
              C(he, { light: !0 }, {
                default: L(() => [
                  Y(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [te, o.value === m && s.value !== m && u.value === y(ee).top]
          ]),
          C(Be, {
            draggable: "true",
            onDragstart: (O) => i(m, O),
            onDragend: g[0] || (g[0] = (O) => s.value = null),
            onDragover: (O) => h(m, O),
            class: F({ "has-cursor": !0, "is-move": o.value == m, "is-grab": o.value != m })
          }, {
            default: L(() => [
              P(f.$slots, "item", {
                item: S,
                index: m
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          U(C(Be, null, {
            default: L(() => [
              C(he, { light: !0 }, {
                default: L(() => [
                  Y(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [te, o.value === m && s.value !== m && u.value === y(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: zl,
  DropZone: Wl,
  Sortable: Rl
}, Symbol.toStringTag, { value: "Module" })), qe = "HiddenFields", Ke = "DisabledFields", jl = (e) => e, re = (e, n) => {
  const t = n("Translate", jl);
  return k(() => e.translate ?? t);
};
function Qe(e, n) {
  const t = n(qe), a = n(Ke), l = k(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), s = k(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const Ot = (e) => {
  let n = [], t = [], a = 0;
  return e.forEach((l) => {
    let s = l.form_columns ?? 12;
    a + s > 12 && (n.push(t), t = [], a = 0), t.push(l), a += s, a === 12 && (n.push(t), t = [], a = 0);
  }), t.length > 0 && n.push(t), n;
};
async function Xe(e) {
  let n = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? n = t : n = Promise.resolve(t);
  let a = await n, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Gl = { class: "control" }, Hl = { class: "tags has-addons" }, Yl = { class: "tag is-link" }, ql = ["onClick"], Kl = { key: 0 }, Ql = ["placeholder"], Xl = { class: "dropdown-menu" }, Zl = { class: "dropdown-content" }, en = ["onClick"], tn = {
  key: 1,
  class: "dropdown-item"
}, Jt = /* @__PURE__ */ D({
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
    const a = t, l = e, s = re(l, T), o = J([]), u = J(null), p = J(null), i = J(null), h = J(null);
    R(u, async (B) => {
      if (B != null) {
        if (B.length >= 2)
          if (l.values != null && l.values != null) {
            let W = [];
            for (let _ = 0; _ < l.values.length && ((l.values[_].name.toUpperCase().indexOf(B.toUpperCase()) >= 0 || l.values[_].id.toUpperCase().indexOf(B.toUpperCase()) >= 0) && W.push(l.values[_]), W.length != 10); _++)
              ;
            p.value = W;
          } else {
            let _ = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(B)}`)).json();
            _.length > 10 && _.splice(10, _.length - 10), p.value = _;
          }
      } else
        p.value = null, $(h.value).empty();
    });
    const c = () => {
      if (o.value.length == 0)
        return null;
      const B = o.value.slice();
      return l.limit != null && l.limit == 1 ? B.length > 0 ? B[0] : null : B;
    }, f = async (B) => {
      if (B == null)
        o.value.length > 0 && o.value.splice(0, o.value.length), u.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(B) ? B : [B]).map(async (_) => {
            if (_.id !== void 0 && _.name !== void 0)
              return _;
            {
              let w = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${_.id === void 0 ? "q=" + encodeURIComponent(_) : "id=" + encodeURIComponent(_.id)}`)).json();
              return w.length > 0 ? (l.disabled && (w[0].readonly = !0), w[0]) : null;
            }
          })
        );
        o.value = W.filter((_) => _ !== null), a("valueChanged", { name: l.name, value: c() });
      }
    }, g = (B) => {
      B.preventDefault(), u.value = B.clipboardData.getData("text/plain");
    }, S = (B) => {
      switch (B.key) {
        case "Backspace":
          u.value != null && u.value.length > 0 && (u.value = u.value.substring(0, u.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          B.key.length == 1 && (u.value = (u.value == null ? "" : u.value) + B.key);
          break;
      }
    }, m = () => {
      u.value = null;
    }, O = () => {
      h.value.focus();
    }, M = (B) => {
      o.value.push(B), m(), a("valueChanged", { name: l.name, value: c() });
    }, b = (B) => {
      o.value.splice(B, 1), O(), a("valueChanged", { name: l.name, value: c() });
    };
    return n({ getValue: c, setValue: f }), (B, W) => (r(), d("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: O
    }, [
      v("div", {
        class: F(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", l.disabled ? "is-disabled" : ""])
      }, [
        (r(!0), d(I, null, z(o.value, (_, ne) => (r(), d("div", Gl, [
          v("div", Hl, [
            v("a", Yl, N(y(s)(_.name)), 1),
            !_.readonly && !l.disabled ? (r(), d("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (w) => b(ne)
            }, null, 8, ql)) : x("", !0)
          ])
        ]))), 256)),
        l.disabled ? x("", !0) : (r(), d("div", Kl, [
          U(v("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: y(s)(l.title ?? ""),
            contenteditable: "",
            class: F(i.value),
            onFocus: W[0] || (W[0] = (_) => {
              i.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (_) => {
              i.value = null;
            }),
            onKeydown: S,
            onPaste: g
          }, null, 42, Ql), [
            [te, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ], 2),
      l.disabled ? x("", !0) : (r(), d("div", {
        key: 0,
        class: F(["dropdown", { "is-active": p.value != null && u.value != null && u.value != "" }])
      }, [
        v("div", Xl, [
          v("div", Zl, [
            p.value != null && p.value.length > 0 ? (r(!0), d(I, { key: 0 }, z(p.value, (_) => (r(), d("a", {
              class: "dropdown-item",
              onClick: (ne) => M(_)
            }, N(y(s)(_.name)), 9, en))), 256)) : (r(), d("a", tn, "No Results"))
          ])
        ])
      ], 2))
    ], 32));
  }
}), Te = /* @__PURE__ */ D({
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
    const t = e, a = n, l = re(t, T);
    return (s, o) => (r(), E(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: y(l)(t.label),
      onClick: o[0] || (o[0] = (u) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), an = { class: "checkbox is-block" }, ln = ["value", "disabled"], Nt = /* @__PURE__ */ D({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(T), s = k(() => V("Form.Error", l)), o = t, u = re(a, T), p = J([]), i = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Xe(a.values), O = m.filter((M) => M.selected).map((M) => M.value);
        return p.value === null || p.value.length == 0 ? p.value = O.length > 0 ? [...O] : [] : (O = p.value, m = m.map((M) => ({
          label: M.label,
          value: M.value,
          selected: O.some((b) => b === M.value)
        }))), m;
      }
    });
    R(p, (m) => {
      o("valueChanged", { name: a.name, value: c() });
    });
    const c = () => p.value.length == 0 ? null : p.value, f = (m) => {
      i.value = !0, p.value.splice(0), m !== null && (p.value = [...m]), i.value = !1, o("valueChanged", { name: a.name, value: c() });
    }, { hiddenValues: g, disabledValues: S } = Qe(a.name, T);
    return n({ getValue: c, setValue: f }), (m, O) => (r(), d("div", null, [
      C(me, { promise: h.value }, {
        default: L(({ response: M }) => [
          M !== null ? (r(!0), d(I, { key: 0 }, z(M, (b) => U((r(), d("label", an, [
            U(v("input", {
              type: "checkbox",
              class: "checkbox",
              value: b.value,
              "onUpdate:modelValue": O[0] || (O[0] = (B) => p.value = B),
              disabled: a.disabled || y(S).some((B) => B === b.value.toString())
            }, null, 8, ln), [
              [Ve, p.value]
            ]),
            Y(" " + N(y(u)(b.label)), 1)
          ], 512)), [
            [te, !y(g).some((B) => B === b.value.toString())]
          ])), 256)) : x("", !0)
        ]),
        pending: L(() => [
          C(y(de))
        ]),
        rejected: L(() => [
          C(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), nn = { class: "checkbox" }, sn = ["name", "disabled"], on = {
  key: 0,
  class: "help is-danger"
}, At = /* @__PURE__ */ D({
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
    const a = e, l = t, s = re(a, T), o = k(() => s.value(a.label)), u = J(!1);
    return R(u, (h) => l("valueChanged", { name: a.name, value: h })), n({ getValue: () => u.value, setValue: (h) => {
      u.value = h;
    } }), (h, c) => (r(), d("label", nn, [
      U(v("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (f) => u.value = f)
      }, null, 8, sn), [
        [Ve, u.value]
      ]),
      Y(" " + N(o.value) + " ", 1),
      a.required ? (r(), d("span", on, "*")) : x("", !0)
    ]));
  }
}), Ee = (e, n) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + n), t;
}, H = (e, n, t) => {
  let a = e;
  for (; a.length < t; )
    a = n + a;
  return a;
}, Me = (e, n, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${H(t.getDate().toString(), "0", e.length)}`;
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
      a += `${H(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : H(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${H((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${H(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let o = t.getTimezoneOffset() * -1, u = parseInt((o / 60).toFixed(0)), p = o - Math.abs(u) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${u < 0 ? "-" : "+"}${H(Math.abs(u).toString(), "0", 2) + ":" + H(Math.abs(p).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${u < 0 ? "-" : "+"}${H(Math.abs(u).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${H(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${H((t.getMonth() + 1).toString(), "0", e.length)}`;
      break;
    case "MMM":
    case "MMMM":
      let i = "";
      switch (t.getMonth()) {
        case 0:
          i = "January";
          break;
        case 1:
          i = "February";
          break;
        case 2:
          i = "March";
          break;
        case 3:
          i = "April";
          break;
        case 4:
          i = "May";
          break;
        case 5:
          i = "June";
          break;
        case 6:
          i = "July";
          break;
        case 7:
          i = "August";
          break;
        case 8:
          i = "September";
          break;
        case 9:
          i = "October";
          break;
        case 10:
          i = "November";
          break;
        case 11:
          i = "December";
          break;
      }
      a += `${V("Date.Months." + (e.length > 3 ? i : i.substring(0, 3)), n)}`;
      break;
    case "s":
    case "ss":
      a += `${H(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var l = t.getFullYear().toString(); l.length > 2; )
        l = l.substring(1);
      a += `${H(l.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${H(t.getFullYear().toString(), "0", e.length)}`;
      break;
    default:
      a += `[UNKOWN FORMAT ${e}]`;
      break;
  }
  return a;
}, ge = (e, n, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let a = "", l = "";
  for (var s = 0; s < t.length; s++)
    switch (t.charAt(s)) {
      case "\\":
        l != "" && (a += Me(l, n, e), l = ""), a += t.charAt(s + 1), s++;
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
        l != "" && l.charAt(0) != t.charAt(s) ? (a += Me(l, n, e), l = "") : l += t.charAt(s);
        break;
      default:
        l != "" && (a += Me(l, n, e), l = ""), a += t.charAt(s);
        break;
    }
  return l != "" && (a += Me(l, n, e), l = ""), a;
}, rn = { class: "control" }, un = ["name", "id", "disabled"], st = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ze = /* @__PURE__ */ D({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = J(null), o = k(() => {
      if (s.value == null || s.value == "")
        return null;
      var i = Number(s.value.substring(3, 5)), h = Number(s.value.substring(0, 2)) % 12 + i / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * i / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return R(s, (i) => {
      l("valueChanged", { name: a.name, value: i });
    }), n({ getValue: () => s.value, setValue: (i) => {
      if (i != null && st.test(i)) {
        var h = st.exec(i);
        i = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = i;
    } }), (i, h) => (r(), d("div", rn, [
      U(v("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (c) => s.value = c),
        disabled: a.disabled,
        style: ze(o.value)
      }, null, 12, un), [
        [ke, s.value]
      ])
    ]));
  }
});
const dn = { class: "control has-icons-left has-icons-right" }, cn = ["name", "id", "placeholder", "disabled"], pn = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), hn = { class: "modal-content" }, mn = { class: "panel is-primary is-dateselect" }, fn = { class: "panel-heading" }, bn = { class: "columns card-header-title" }, vn = { class: "column" }, gn = { class: "column has-text-centered" }, _n = { class: "column has-text-right" }, yn = { class: "panel-block" }, kn = { class: "table is-striped has-text-centered" }, $n = ["onClick"], Sn = { key: 0 }, Mn = {
  colspan: "100%",
  class: "has-text-centered"
}, Dn = { class: "panel-block" }, Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), De = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Ct = /* @__PURE__ */ D({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = J(null), l = e, s = t, o = J(!1), u = J(null), p = J(null), i = rt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(T), c = xe({
      Sun: k(() => V("Date.Weekdays.Sun", h)),
      Mon: k(() => V("Date.Weekdays.Mon", h)),
      Tue: k(() => V("Date.Weekdays.Tue", h)),
      Wed: k(() => V("Date.Weekdays.Wed", h)),
      Thu: k(() => V("Date.Weekdays.Thu", h)),
      Fri: k(() => V("Date.Weekdays.Fri", h)),
      Sat: k(() => V("Date.Weekdays.Sat", h))
    }), f = k(() => u.value !== null && (l.includeTime ? De : Se).test(u.value)), g = () => {
      if (u.value == null || u.value == "")
        return null;
      {
        if (!De.test(u.value) && l.includeTime)
          return null;
        if (!l.includeTime && !Se.test(u.value))
          return null;
        if (Se.test(u.value) && l.includeTime)
          return null;
        let w = l.includeTime ? De.exec(u.value) : Se.exec(u.value);
        return new Date(
          parseInt(w[3]),
          parseInt(w[2]) - 1,
          parseInt(w[1]),
          l.includeTime ? parseInt(w[4]) : 0,
          l.includeTime ? parseInt(w[5]) : 0,
          0,
          0
        );
      }
    };
    R(u, (w) => {
      if (w == null)
        s("valueChanged", { name: l.name, value: null }), i.Month = (/* @__PURE__ */ new Date()).getMonth(), i.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!Se.test(w) && !De.test(w)) {
        w = w.replaceAll(/[^0-9]/g, "");
        for (var A = [], G = 0; G < w.length; G += 2)
          G == 4 ? (A.push(w.substring(G, Math.min(w.length - G, 4) + G)), G += 2) : A.push(w.substring(G, Math.min(w.length - G, 2) + G));
        A.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(A[0]) || A.splice(0), A.length > 1 && (/^[0-3]/.test(A[1]) ? /^(01|03|05|07|08|10|12)$/.test(A[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(A[1]) || A.splice(1) : /^(02|04|06|09|11)$/.test(A[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(A[1]) || A.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(A[1]) || A.splice(1) : A.splice(1)), A.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(A[3]) || A.splice(3)), A.length > 4 && (/^[0-5][0-9]?$/.test(A[4]) || A.splice(4))), w = A.join(""), !l.includeTime && w.length > 8 && (w = w.substring(0, 8)), w.length >= 2 && (w = w.substring(0, 2) + "-" + (w.length > 2 ? w.substring(2) : "")), w.length >= 5 && (w = w.substring(0, 5) + "-" + (w.length > 5 ? w.substring(5) : "")), w.length >= 9 && l.includeTime && (w = w.substring(0, 9) + " " + (w.length > 9 ? w.substring(9) : "")), w.length >= 11 && (w = w.substring(0, 11) + ":" + (w.length > 11 ? w.substring(11) : "")), u.value = w;
      } else {
        var se = g();
        f && s("valueChanged", { name: l.name, value: se }), i.Month = se.getMonth(), i.Year = se.getFullYear();
      }
    });
    const S = k(() => ge(new Date(i.Year, i.Month, 1), h, "MMMM")), m = k(() => {
      var w = [], A = new Date(i.Year, i.Month, 1);
      A = Ee(A, A.getDay() * -1);
      for (var G = g(), se = Ee(new Date(i.Year, i.Month, 1), 32).getMonth(); A.getMonth() != se; ) {
        for (var Ae = [], et = 0; et < 7; et++)
          Ae.push({
            Number: A.getDate(),
            Disabled: A.getMonth() != i.Month,
            isToday: ge(A, h, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: G != null && ge(A, h, "yyyy-MM-dd") == ge(G, h, "yyyy-MM-dd")
          }), A = Ee(A, 1);
        w.push(Ae);
      }
      return w;
    });
    n({ getValue: g, setValue: function(w) {
      w == null ? u.value = null : u.value = ge(w, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const M = (w) => {
      w.value == null ? u.value != null && (u.value = u.value.split(" ")[0]) : u.value != null ? u.value = u.value.split(" ")[0] + " " + w.value : u.value = `${H((i.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year} ${w.value}`;
    }, b = (w) => {
      if (!w.Disabled && !w.isSelected)
        if (u.value === null)
          u.value = `${H(w.Number.toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var A = u.value.split(" ");
          A[0] = `${H(w.Number.toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year}`, u.value = `${A[0]}${A.length > 1 ? " " + A[1] : ""}`;
        }
    }, B = () => {
      u.value = p.value, o.value = !1;
    }, W = () => {
      l.disabled || (p.value = u.value, o.value = !0);
    }, _ = () => {
      l.disabled || (u.value = null);
    }, ne = (w) => {
      i.Month + w == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + w == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += w;
    };
    return (w, A) => (r(), d("div", null, [
      v("div", dn, [
        U(v("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": A[0] || (A[0] = (G) => u.value = G),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, cn), [
          [ke, u.value]
        ]),
        v("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          C(y(j), { icon: "calendar-alt" })
        ]),
        v("span", {
          class: "icon is-small is-right is-clickable",
          onClick: _
        }, [
          C(y(j), { icon: "window-close" })
        ])
      ]),
      v("div", {
        class: F(["modal", { "is-active": o.value }])
      }, [
        pn,
        v("div", hn, [
          v("div", mn, [
            v("div", fn, [
              v("div", bn, [
                v("div", vn, [
                  C(y(j), {
                    icon: "arrow-circle-left",
                    onClick: A[1] || (A[1] = (G) => ne(-1))
                  })
                ]),
                v("div", gn, N(S.value) + " " + N(i.Year), 1),
                v("div", _n, [
                  C(y(j), {
                    icon: "arrow-circle-right",
                    onClick: A[2] || (A[2] = (G) => ne(1))
                  })
                ])
              ])
            ]),
            v("div", yn, [
              v("table", kn, [
                v("thead", null, [
                  v("tr", null, [
                    v("th", null, N(y(c).Sun), 1),
                    v("th", null, N(y(c).Mon), 1),
                    v("th", null, N(y(c).Tue), 1),
                    v("th", null, N(y(c).Wed), 1),
                    v("th", null, N(y(c).Thu), 1),
                    v("th", null, N(y(c).Fri), 1),
                    v("th", null, N(y(c).Sat), 1)
                  ])
                ]),
                v("tbody", null, [
                  (r(!0), d(I, null, z(m.value, (G) => (r(), d("tr", null, [
                    (r(!0), d(I, null, z(G, (se) => (r(), d("td", {
                      class: F(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ae) => b(se)
                    }, N(se.Number), 11, $n))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (r(), d("tfoot", Sn, [
                  v("tr", null, [
                    v("td", Mn, [
                      C(Ze, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValueChanged: M
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : x("", !0)
              ])
            ]),
            v("div", Dn, [
              C(y(Mt), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: A[3] || (A[3] = (G) => o.value = !1)
              }, null, 8, ["disabled"]),
              C(y(St), {
                addonclass: "card-footer-item",
                onClick: B
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
});
const Pt = /* @__PURE__ */ D({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = sa(T);
    Ne([`${s}summernote-lite.min.css`]), [a, l] = Qt(() => import(`${s}summernote`)), await a, l();
    const o = J(null), u = e, p = t;
    return R(() => u.disabled, (c) => {
      o.value != null && $(o.value).summernote(c ? "disable" : "enable");
    }), n({ getValue: () => $(o.value).summernote("code"), setValue: (c) => {
      $(o.value).summernote("code", c);
    } }), pe(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(c) {
            p("valueChanged", { name: u.name, value: c });
          }
        }
      }), (u.disabled ?? !1) && $(o.value).summernote("disable");
    }), Xt(() => {
      $(o.value).summernote("destroy");
    }), (c, f) => (r(), d("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Le = /* @__PURE__ */ D({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const n = e, t = re(n, T);
    return (a, l) => (r(), E(ce(n.subtype), null, {
      default: L(() => [
        Y(N(y(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), wn = ["name"], Et = /* @__PURE__ */ D({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = J(null);
    return R(s, (p) => l("valueChanged", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, i) => U((r(), d("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h)
    }, null, 8, wn)), [
      [ke, s.value]
    ]);
  }
}), Bn = ["name", "disabled", "min", "max", "step"], Tt = /* @__PURE__ */ D({
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
    const a = e, l = t, s = J(null), o = () => {
      if (s.value === "")
        return null;
      let p = parseInt(s.value);
      return a.min !== void 0 && p < a.min * 1 || a.max !== void 0 && p > a.max * 1 ? null : p;
    }, u = (p) => {
      s.value = p === null ? "" : p.toString();
    };
    return R([s], (p) => l("valueChanged", { name: a.name, value: o() })), n({ getValue: o, setValue: u }), (p, i) => U((r(), d("input", {
      type: "number",
      class: "input",
      name: p.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h),
      disabled: p.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, Bn)), [
      [ke, s.value]
    ]);
  }
}), xn = ["id"], Ie = /* @__PURE__ */ D({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const n = e, t = re(n, T);
    return (a, l) => (r(), d("p", {
      id: n.name
    }, N(y(t)(n.label)), 9, xn));
  }
}), Fn = { class: "radio" }, On = ["name", "value", "disabled"], Jn = /* @__PURE__ */ v("br", null, null, -1), Lt = /* @__PURE__ */ D({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(T), s = k(() => V("Form.Error", l)), o = t, u = re(a, T), p = J(null), i = function() {
      return p.value;
    };
    R(p, (S) => {
      o("valueChanged", { name: a.name, value: i() });
    });
    const h = k(async () => {
      if (a.values == null)
        return [];
      {
        let S = await Xe(a.values);
        return p.value === null && S.some((m) => m.selected) && (p.value = S.find((m) => m.selected).value), S.map((m) => ({
          label: m.label,
          value: m.value,
          selected: p.value === m.value
        }));
      }
    }), c = (S) => {
      p.value = S;
    }, { hiddenValues: f, disabledValues: g } = Qe(a.name, T);
    return n({ getValue: i, setValue: c }), (S, m) => (r(), d("div", null, [
      C(me, { promise: h.value }, {
        default: L(({ response: O }) => [
          S.values != null ? (r(!0), d(I, { key: 0 }, z(O, (M) => (r(), d(I, null, [
            U(v("label", Fn, [
              v("input", {
                type: "radio",
                name: a.name,
                value: M.value,
                class: "radio",
                disabled: a.disabled || y(g).some((b) => b === M.value.toString())
              }, null, 8, On),
              Y(" " + N(y(u)(M.label)), 1)
            ], 512), [
              [te, !y(f).some((b) => b === M.value.toString())]
            ]),
            Jn
          ], 64))), 256)) : x("", !0)
        ]),
        pending: L(() => [
          C(y(de))
        ]),
        rejected: L(() => [
          C(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Nn = { class: "select" }, An = ["id", "name", "multiple", "disabled"], Cn = ["value", "selected", "disabled"], Pn = ["label"], En = ["value", "selected", "disabled"], It = (e, n, t) => {
  let a = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = t.length;
  return t.push(a), n.values.forEach((s) => {
    s.values === void 0 ? a.values.push(s) : t = It(a.label, s, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, Vt = /* @__PURE__ */ D({
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
    const a = e, l = K(T), s = k(() => V("Form.Error", l)), o = t, u = re(a, T), p = J(null), i = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Xe(a.values), O = m.filter((b) => b.selected).map((b) => b.value);
        m.some((b) => b.values !== void 0) && m.filter((b) => b.values !== void 0).forEach((b) => {
          O = O.concat(
            b.values.filter((B) => B.selected).map((B) => B.value)
          );
        }), p.value === null || p.value.length === 0 ? p.value = null : (m = m.map((b) => {
          let B = b;
          return B.values !== void 0 && (B.values = B.values.map((W) => (W.selected = p.value.some((_) => _ === W.value), W))), B;
        }), p.value.forEach((b) => {
          m.some((B) => B.value !== void 0 && B.value === b || B.values !== void 0 && B.values.some((W) => W.value === b)) || m.push({
            label: b,
            value: b
          });
        }));
        let M = [];
        return m.forEach((b) => {
          b.values === void 0 ? M.push(b) : M = It(b.label, b, M);
        }), M;
      }
    }), c = () => p.value == null || p.value.length == 0 ? null : a.multiple ? p.value.slice() : Array.isArray(p.value) ? p.value[0] : p.value;
    R(p, () => {
      i.value || o("valueChanged", { name: a.name, value: c() });
    }), R(i, (m) => {
      m || o("valueChanged", { name: a.name, value: c() });
    });
    const f = (m) => {
      i.value = !0, m != null ? a.multiple ? p.value = Array.isArray(m) ? m : [m] : p.value = m : a.multiple ? p.value = [] : p.value = null, i.value = !1;
    }, { hiddenValues: g, disabledValues: S } = Qe(a.name, T);
    return n({ getValue: c, setValue: f }), (m, O) => (r(), d("div", Nn, [
      h.value != null ? (r(), E(me, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: M }) => [
          U(v("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: F([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": O[0] || (O[0] = (b) => p.value = b),
            disabled: a.disabled
          }, [
            M != null ? (r(!0), d(I, { key: 0 }, z(M, (b) => (r(), d(I, null, [
              b.values == null ? U((r(), d("option", {
                key: 0,
                value: b.value,
                selected: b.selected,
                disabled: y(S).some((B) => B === b.value.toString())
              }, N(y(u)(b.label)), 9, Cn)), [
                [te, !y(g).some((B) => B === b.value.toString())]
              ]) : x("", !0),
              b.values != null ? (r(), d("optgroup", {
                key: 1,
                label: y(u)(b.label)
              }, [
                (r(!0), d(I, null, z(b.values, (B) => U((r(), d("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: y(S).some((W) => W === B.value.toString())
                }, N(y(u)(B.label)), 9, En)), [
                  [te, !y(g).some((W) => W === B.value.toString())]
                ])), 256))
              ], 8, Pn)) : x("", !0)
            ], 64))), 256)) : x("", !0)
          ], 10, An), [
            [Zt, p.value]
          ])
        ]),
        pending: L(() => [
          C(y(de))
        ]),
        rejected: L(() => [
          C(y(he), {
            type: y(le).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : x("", !0)
    ]));
  }
}), Tn = { class: "field" }, Ln = ["id", "name", "disabled"], In = ["for"], Vn = {
  key: 0,
  class: "help is-danger"
}, zt = /* @__PURE__ */ D({
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
    const a = e, l = t, s = re(a, T), o = J(!1);
    return R(o, (i) => l("valueChanged", { name: a.name, value: i })), n({ getValue: () => o.value, setValue: (i) => {
      o.value = i;
    } }), (i, h) => (r(), d("div", Tn, [
      U(v("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (c) => o.value = c),
        disabled: a.disabled
      }, null, 8, Ln), [
        [Ve, o.value]
      ]),
      v("label", { for: i.name }, [
        Y(N(y(s)(a.label)) + " ", 1),
        a.required ? (r(), d("span", Vn, "*")) : x("", !0)
      ], 8, In)
    ]));
  }
}), zn = ["type", "name", "disabled", "maxlength"], Wt = /* @__PURE__ */ D({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = J(null);
    return R(s, (p) => l("valueChanged", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, i) => U((r(), d("input", {
      type: p.subtype,
      class: "input",
      name: p.name,
      disabled: p.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h)
    }, null, 8, zn)), [
      [ea, s.value]
    ]);
  }
}), Wn = ["name", "rows", "cols", "maxlength", "disabled"], Rt = 9, _e = String.fromCharCode(Rt), we = String.fromCharCode(10), Ut = /* @__PURE__ */ D({
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
    const a = e, l = t, s = J(null);
    R(s, (i) => {
      l("valueChanged", { name: a.name, value: i });
    });
    const o = () => s.value, u = (i) => {
      s.value = i;
    };
    n({ getValue: o, setValue: u });
    const p = (i) => {
      if (a.supportsTab) {
        let h = o();
        switch (i.keyCode) {
          case Rt:
            let c = i.target.selectionStart, f = i.target.selectionEnd, g = h.substring(0, c), S = h.length > f ? h.substring(f) : "", m = c == f ? "" : h.substring(c, f);
            if (m.indexOf(String.fromCharCode(10)) < 0)
              i.shiftKey ? m.startsWith(_e) ? (m = m.substring(1), c--) : g.endsWith(_e) && (g = g.substring(0, g.length - 1), c--) : m = _e + m;
            else {
              let O = !1;
              m.endsWith(we) && (O = !0, m = m.substring(0, m.length - 1));
              let M = m.split(we);
              m = "", i.shiftKey && g.endsWith(_e) && (g = g.substring(0, g.length - 1), c--), M.forEach((b, B) => {
                i.shiftKey && b.startsWith(_e) ? b = b.substring(1) : i.shiftKey || (b = _e + b), m += b + (B === M.length - 1 ? "" : we);
              }), O && (m += we);
            }
            return h = g + m + S, c += m.length == 1 ? 1 : 0, f = c + (m.length == 1 ? 0 : m.length), u(h), i.target.selectionStart = c, i.target.selectionEnd = f, i.target.focus(), i.preventDefault != null && i.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (i, h) => U((r(), d("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: p,
      "onUpdate:modelValue": h[0] || (h[0] = (c) => s.value = c)
    }, null, 40, Wn)), [
      [ke, s.value]
    ]);
  }
}), Rn = { class: "columns" }, jt = /* @__PURE__ */ D({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = a.inputs.map((c) => J(null)), o = T(qe), u = T(Ke);
    return n({ setValue: (c) => {
      s.forEach((f, g) => {
        switch (a.inputs[g].type) {
          case "subform":
            f.value.setValue(c);
            break;
          default:
            f.value.setValue !== void 0 && (c === null ? f.value.setValue(null) : Object.keys(c).some((S) => S === f.value.fieldName) ? f.value.setValue(c[f.value.fieldName]) : Object.keys(c).some((S) => S === f.value.altFieldName) && f.value.setValue(c[f.value.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var c = {};
      return s.forEach((f) => {
        if (f.value.getValue != null)
          switch (f.value.type) {
            case "subform":
              c = $.extend(c, f.value.getValue());
              break;
            default:
              c[f.value.fieldName] = f.value.getValue();
              break;
          }
      }), c;
    }, isValid: () => !s.some((c) => !(c.value.isValid === void 0 || c.value.isValid())) }), (c, f) => (r(), d("div", Rn, [
      (r(!0), d(I, null, z(a.inputs, (g, S) => (r(), E(Gt, {
        ref_for: !0,
        ref: (m) => y(s)[S].value = m,
        input: g,
        onValueChanged: f[0] || (f[0] = (m) => l("valueChanged", m)),
        onButtonClicked: f[1] || (f[1] = (m) => l("buttonClicked", m)),
        disabled: a.disabled || y(u).some((m) => m === g.name),
        hidden: y(o).some((m) => m === g.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Un = ["id", "name"], jn = /* @__PURE__ */ D({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t;
    let s = [];
    J(!1);
    const o = k(() => {
      let h = Ot(a.fields);
      return s = h.map((c) => J(null)), h;
    });
    return n({ isValid: () => !s.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => s.forEach((c) => c.setValue(h)), getValue: () => {
      var h = {};
      return s.forEach((c) => {
        h = $.extend(h, c.getValue());
      }), h;
    } }), (h, c) => U((r(), d("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (r(!0), d(I, null, z(o.value, (f, g) => (r(), E(jt, {
        ref_for: !0,
        ref: (S) => y(s)[g] = S,
        inputs: f,
        disabled: a.disabled,
        onValueChanged: c[0] || (c[0] = (S) => l("valueChanged", S)),
        onButtonClicked: c[1] || (c[1] = (S) => l("buttonClicked", S))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Un)), [
      [te, !a.hidden]
    ]);
  }
}), Gn = ["for"], Hn = {
  key: 0,
  class: "help is-danger"
}, Yn = { class: "control" }, qn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Kn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Gt = /* @__PURE__ */ D({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = J(null), l = t, s = e, o = re(s, T), u = xe(J(s.input.type)), p = k(() => {
      let _ = null;
      switch (s.input.type) {
        case "autocomplete":
          _ = Jt;
          break;
        case "button":
          _ = Te;
          break;
        case "checkbox-group":
          _ = Nt;
          break;
        case "checkbox":
          _ = At;
          break;
        case "date":
          _ = Ct;
          break;
        case "full-editor":
          _ = Pt;
          break;
        case "header":
          _ = Le;
          break;
        case "hidden":
          _ = Et;
          break;
        case "number":
          _ = Tt;
          break;
        case "paragraph":
          _ = Ie;
          break;
        case "radio-group":
          _ = Lt;
          break;
        case "select":
          _ = Vt;
          break;
        case "switch":
          _ = zt;
          break;
        case "text":
          _ = Wt;
          break;
        case "textarea":
          _ = Ut;
          break;
        case "time":
          _ = Ze;
          break;
        case "subform":
          _ = jn;
          break;
      }
      return _;
    }), i = function(_) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(_);
    };
    pe(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && i(s.input.value);
    });
    const h = k(() => s.input.disabled ?? s.disabled ?? !1), c = k(() => `is-${s.input.form_columns ?? 12}`), f = k(() => s.input.name), g = k(() => s.input.processVariable ?? s.input.name), S = k(() => qn.some((_) => _ === s.input.type) && s.input.label !== void 0 && s.input.label !== null), m = k(() => {
      let _ = $.extend({}, s.input);
      return delete _.type, _.className != null && delete _.className, _.form_columns != null && delete _.form_columns, Kn.some((ne) => ne === s.input.type) && (_.translate = s.translate), _.disabled = s.disabled, _;
    }), O = (_) => {
      if (_.value !== void 0 && _.value !== null && Array.isArray(_.value)) {
        let ne = [..._.value];
        _.value = ne;
      }
      l("valueChanged", _);
    }, M = (_) => {
      l("buttonClicked", _);
    }, b = () => {
      if (a.value != null && a.value.getValue != null) {
        let _ = a.value.getValue();
        return _ != null && Array.isArray(_) ? [..._] : _;
      }
      return null;
    };
    return n({ setValue: i, fieldName: f, type: u, altFieldName: g, getValue: b, isValid: () => {
      if (s.input.type === "subform" && a.value !== null)
        return a.value.isValid();
      if (s.input.required ?? !1) {
        let _ = b();
        return _ != null && (Array.isArray(_) ? _.length > 0 : !0) && _.toString() !== "";
      }
      return !0;
    }, setValues: (_) => {
      if (s.input.type === "subform" && a.value !== null)
        a.value.setValues(_);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (_, ne) => U((r(), d("div", {
      class: F(["field column", [c.value]])
    }, [
      s.input.type == "header" ? (r(), E(Le, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (r(), E(Ie, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (r(), E(Te, {
        key: 2,
        name: s.input.name,
        sstyle: s.input.style,
        className: s.input.className,
        icon: s.input.icon,
        label: s.input.label,
        disabled: h.value,
        onButtonClicked: M,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (r(), d(I, { key: 3 }, [
        S.value ? (r(), d("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Y(N(y(o)(s.input.label)) + " ", 1),
          s.input.required ? (r(), d("span", Hn, "*")) : x("", !0)
        ], 8, Gn)) : x("", !0),
        v("div", Yn, [
          (r(), E(ce(p.value), Q(m.value, {
            onValueChanged: O,
            ref_key: "inp",
            ref: a
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [te, !s.hidden]
    ]);
  }
});
const Qn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Xn = /* @__PURE__ */ D({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = re(a, T);
    Ce("Translate", (M) => s.value(M));
    let o = [];
    const u = k(() => {
      if (a.elements != null) {
        let M = Ot(a.elements);
        return o = M.map((b) => J(null)), M;
      } else
        return null;
    }), p = () => {
      let M = {};
      return o.forEach((b) => {
        M = $.extend(M, b.getValue());
      }), M;
    }, i = (M) => {
      o.forEach((b) => b.setValue(M));
    }, h = () => !o.some((M) => !(M.isValid === void 0 || M.isValid())), c = J([]);
    Ce(qe, xe(c));
    const f = (M) => {
      Array.isArray(M) ? c.value = [...c.value, ...M] : c.value.push(M);
    }, g = (M) => {
      Array.isArray(M) ? c.value = c.value.filter((b) => M.indexOf(b) >= 0) : c.value = c.value.filter((b) => b !== M);
    }, S = J([]);
    return Ce(Ke, xe(S)), n({ getValues: p, setValues: i, isValid: h, hideField: f, showField: g, disableField: (M) => {
      Array.isArray(M) ? S.value = [...S.value, ...M] : S.value.push(M);
    }, enableField: (M) => {
      Array.isArray(M) ? S.value = S.value.filter((b) => M.indexOf(b) >= 0) : S.value = S.value.filter((b) => b !== M);
    } }), (M, b) => (r(), d("form", Qn, [
      u.value != null ? (r(!0), d(I, { key: 0 }, z(u.value, (B, W) => (r(), E(jt, {
        ref_for: !0,
        ref: (_) => y(o)[W] = _,
        inputs: B,
        key: W,
        onValueChanged: b[0] || (b[0] = (_) => l("valueChanged", _)),
        onButtonClicked: b[1] || (b[1] = (_) => l("buttonClicked", _)),
        disabled: M.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : x("", !0)
    ]));
  }
}), Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Jt,
  Button: Te,
  Checkbox: At,
  CheckboxGroup: Nt,
  ComponentForm: Xn,
  DateField: Ct,
  FormComponent: Gt,
  FullEditor: Pt,
  Header: Le,
  Hidden: Et,
  NumberField: Tt,
  Paragraph: Ie,
  RadioGroup: Lt,
  Select: Vt,
  Switch: zt,
  Text: Wt,
  TextArea: Ut,
  Time: Ze
}, Symbol.toStringTag, { value: "Module" })), es = { class: "hero-body" }, ts = { class: "title" }, as = {
  key: 0,
  class: "subtitle"
}, ls = /* @__PURE__ */ D({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("section", {
      class: F(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + n.type])
    }, [
      v("div", es, [
        v("p", ts, N(n.title), 1),
        n.subtitle ? (r(), d("p", as, N(n.subtitle), 1)) : x("", !0)
      ])
    ], 2));
  }
}), ns = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, ss = {}, os = { class: "box" };
function rs(e, n) {
  return r(), d("div", os, [
    P(e.$slots, "default")
  ]);
}
const is = /* @__PURE__ */ ns(ss, [["render", rs]]), us = { key: 0 }, ds = ["onClick"], cs = /* @__PURE__ */ D({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Oe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, t = k(() => {
      let l = ["breadcrumb"];
      return n.alignment && n.alignment !== Oe.left && l.push(`is-${n.alignment}`), n.size && n.size !== X.normal && l.push(`is-${n.size}`), n.seperator && l.push(`has-${n.seperator}-seperator`), l;
    }), a = (l) => {
      l !== void 0 && l();
    };
    return (l, s) => (r(), d("nav", {
      class: F(t.value),
      "aria-label": "breadcrumbs"
    }, [
      n.breadCrumbs !== null ? (r(), d("ul", us, [
        (r(!0), d(I, null, z(n.breadCrumbs, (o) => (r(), d("li", {
          class: F({ "is-active": o.active })
        }, [
          v("a", {
            onClick: (u) => a(o.onClick)
          }, [
            o.icon ? (r(), d("span", {
              key: 0,
              class: F(["icon", o.onClick ? "is-clickable" : ""])
            }, [
              C(y(j), {
                icon: o.icon
              }, null, 8, ["icon"])
            ], 2)) : x("", !0),
            Y(" " + N(o.title), 1)
          ], 8, ds)
        ], 2))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), ps = {
  key: 0,
  class: "card-icon"
}, hs = { class: "card-icon-wrapper" }, ms = {
  key: 1,
  class: "card-header"
}, fs = {
  key: 2,
  class: "card-content"
}, bs = {
  key: 3,
  class: "card-footer"
}, Ht = /* @__PURE__ */ D({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const n = $e(), t = e, a = {
      addon_class: "card-footer-item"
    }, l = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (s, o) => (r(), d("div", {
      class: F(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon !== null ? (r(), d("div", ps, [
        v("div", hs, [
          C(j, {
            icon: t.icon,
            size: y(ue).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : x("", !0),
      y(n).header ? (r(), d("div", ms, [
        P(s.$slots, "header", oe(ie(l)))
      ])) : x("", !0),
      y(n).content ? (r(), d("div", fs, [
        P(s.$slots, "content")
      ])) : x("", !0),
      y(n).footer ? (r(), d("div", bs, [
        P(s.$slots, "footer", oe(ie(a)))
      ])) : x("", !0)
    ], 2));
  }
}), vs = /* @__PURE__ */ D({
  __name: "column-container",
  props: {
    modifiers: {}
  },
  setup(e) {
    const n = e, t = k(() => {
      let a = ["columns"];
      return n.modifiers !== void 0 && n.modifiers !== null && (a = a.concat(n.modifiers.map((l) => `is-${l}`))), a;
    });
    return (a, l) => (r(), d("div", {
      class: F(t.value)
    }, [
      P(a.$slots, "default")
    ], 2));
  }
}), gs = /* @__PURE__ */ D({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {}
  },
  setup(e) {
    const n = e, t = k(() => {
      var a = [];
      return n.size && a.push(`is-${n.size}`), n.offset && a.push(`is-offset-${n.offset}`), n.border && (n.border.some((l) => l === Ue.all) ? a.push("is-bordered") : n.border.forEach((l) => a.push(`is-bordered-${l}`))), a;
    });
    return (a, l) => (r(), d("div", {
      class: F(["column", t.value])
    }, [
      P(a.$slots, "default")
    ], 2));
  }
}), _s = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), ys = { class: "modal-content" }, ks = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, $s = /* @__PURE__ */ D({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("div", {
      class: F({ modal: !0, "is-active": n.display }),
      style: ze(`z-index:${n.z_index}`)
    }, [
      _s,
      v("div", ys, [
        P(t.$slots, "default")
      ]),
      n.has_close ? (r(), d("button", ks)) : x("", !0)
    ], 6));
  }
}), Ss = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), Ms = {
  key: 0,
  class: "card-icon"
}, Ds = { class: "card-icon-wrapper" }, ws = {
  key: 1,
  class: "modal-card-head"
}, Bs = {
  key: 2,
  class: "modal-card-body"
}, xs = {
  key: 3,
  class: "modal-card-foot"
}, Fs = /* @__PURE__ */ D({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean },
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    max_width: { type: Boolean },
    max_height: { type: Boolean },
    icon: { default: null }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = $e(), a = e, l = n, s = {
      addon_class: "card-footer-item"
    }, o = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-footer-item"
    }, u = k(() => {
      var p = [];
      return a.full_width && p.push("is-fullwidth"), a.full_height && p.push("is-fullheight"), a.max_width && p.push("is-maxwidth"), a.max_height && p.push("is-maxheight"), p;
    });
    return (p, i) => (r(), d("div", {
      class: F(["modal", { "is-active": a.show }])
    }, [
      Ss,
      v("div", {
        class: F(["modal-card", u.value])
      }, [
        a.icon !== null ? (r(), d("div", Ms, [
          v("div", Ds, [
            C(j, {
              icon: a.icon,
              size: y(ue).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : x("", !0),
        y(t).header ? (r(), d("div", ws, [
          P(p.$slots, "header", oe(ie(o))),
          p.has_close ? (r(), d("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: i[0] || (i[0] = (h) => l("close"))
          })) : x("", !0)
        ])) : x("", !0),
        y(t).content ? (r(), d("div", Bs, [
          P(p.$slots, "content")
        ])) : x("", !0),
        y(t).footer ? (r(), d("div", xs, [
          P(p.$slots, "footer", oe(ie(s)))
        ])) : x("", !0)
      ], 2)
    ], 2));
  }
}), Os = {
  key: 0,
  class: "panel-heading"
}, Js = {
  key: 1,
  class: "panel-tabs"
}, Ns = {
  key: 0,
  class: "panel-block"
}, As = /* @__PURE__ */ D({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    hidden_sections: {}
  },
  setup(e) {
    const n = $e(), t = e, a = k(() => t.block_names ?? ["default"]), l = k(() => {
      let s = [];
      return t.type && s.push(`is-${t.type}`), t.full_width && s.push("is-fullwidth"), t.full_height && s.push("is-fullheight"), s;
    });
    return (s, o) => (r(), d("div", {
      class: F(["panel", l.value])
    }, [
      y(n).header ? U((r(), d("div", Os, [
        P(s.$slots, "header")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("header")]
      ]) : x("", !0),
      y(n).tabs ? U((r(), d("div", Js, [
        P(s.$slots, "tabs")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : x("", !0),
      (r(!0), d(I, null, z(a.value, (u) => (r(), d(I, null, [
        y(n)[u] ? U((r(), d("div", Ns, [
          P(s.$slots, u)
        ], 512)), [
          [te, !(t.hidden_sections ?? []).includes(u)]
        ]) : x("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Cs = { key: 0 }, Ps = { key: 1 }, Es = { key: 2 }, Yt = /* @__PURE__ */ D({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = $e(), t = e, a = k(() => {
      let s = [];
      return t.scrollable && s.push("table-container"), t.fixed_header && t.scrollable && s.push("is-fixed"), s;
    }), l = k(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return t.fixed_header && !t.scrollable && s.push("is-fixed"), t.full_width && s.push("is-fullwidth"), t.narrow && s.push("is-narrow"), s;
    });
    return (s, o) => (r(), d("div", {
      class: F(a.value)
    }, [
      v("table", {
        class: F(l.value)
      }, [
        y(n).thead ? (r(), d("thead", Cs, [
          P(s.$slots, "thead")
        ])) : x("", !0),
        y(n).tbody ? (r(), d("tbody", Ps, [
          P(s.$slots, "tbody")
        ])) : x("", !0),
        y(n).tfoot ? (r(), d("tfoot", Es, [
          P(s.$slots, "tfoot")
        ])) : x("", !0)
      ], 2)
    ], 2));
  }
}), Ts = ["href", "onClick"], Ls = {
  key: 0,
  class: "icon is-small"
}, Is = { style: { width: "100px" } }, Vs = /* @__PURE__ */ D({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: {},
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const n = e, t = k(() => {
      let l = ["tabs"];
      return n.alignment ? l.push(`is-${n.alignment}`) : l.push("is-left"), n.type && l.push(`is-${n.type}`), n.full_width && l.push("is-fullwidth"), l;
    }), a = (l, s) => {
      (s.href === null || s.href === void 0) && s.onClick !== void 0 && (l.preventDefault(), s.onClick());
    };
    return (l, s) => (r(), d("div", {
      class: F(t.value)
    }, [
      v("ul", null, [
        C(y(me), {
          promise: n.tabs
        }, {
          default: L(({ response: o }) => [
            (r(!0), d(I, null, z(o, (u) => (r(), d("li", {
              class: F({ "is-active": u.active })
            }, [
              v("a", {
                href: u.href,
                onClick: (p) => a(p, u)
              }, [
                u.icon ? (r(), d("span", Ls, [
                  C(y(j), {
                    icon: u.icon
                  }, null, 8, ["icon"])
                ])) : x("", !0),
                v("span", null, N(u.title), 1)
              ], 8, Ts)
            ], 2))), 256))
          ]),
          pending: L(() => [
            v("li", Is, [
              C(y(de), {
                size: y(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ])
    ], 2));
  }
}), zs = { class: "slideout-content" }, Ws = {
  key: 1,
  class: "slideout-head"
}, Rs = { class: "slideout-body" }, Us = {
  key: 2,
  class: "slideout-foot"
}, js = /* @__PURE__ */ D({
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
    const t = $e(), a = {
      addon_class: ""
    }, l = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, s = e, o = n, u = k(() => {
      let p = ["slideout"];
      return s.show && p.push("is-active"), s.type !== void 0 && s.type !== null && p.push(`is-${s.type}`), s.full_width && p.push("is-fullwidth"), s.not_animated && p.push("no-animation"), p;
    });
    return (p, i) => (r(), d("div", {
      class: F(u.value)
    }, [
      v("div", {
        class: "slideout-background",
        onClick: i[0] || (i[0] = (h) => o("close"))
      }),
      v("div", zs, [
        p.has_close ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: i[1] || (i[1] = (h) => o("close"))
        })) : x("", !0),
        y(t).header ? (r(), d("div", Ws, [
          P(p.$slots, "header", oe(ie(l)))
        ])) : x("", !0),
        v("div", Rs, [
          P(p.$slots, "content"),
          P(p.$slots, "default")
        ]),
        y(t).footer ? (r(), d("div", Us, [
          P(p.$slots, "footer", oe(ie(a)))
        ])) : x("", !0)
      ])
    ], 2));
  }
}), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ls,
  Box: is,
  Breadcrumbs: cs,
  Card: Ht,
  Column: gs,
  ColumnContainer: vs,
  List: Ft,
  ListItem: Be,
  Modal: $s,
  ModalCard: Fs,
  Panel: As,
  SlideOut: js,
  Table: Yt,
  Tabs: Vs
}, Symbol.toStringTag, { value: "Module" }));
const ot = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Ne(`${ot.substring(0, ot.lastIndexOf("/"))}/style.css`);
const Hs = Object.values(Ye).filter((e, n, t) => t.indexOf(e) === n), Ys = (e) => {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", `${e || ""}`);
}, qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Hs,
  setSkin: Ys
}, Symbol.toStringTag, { value: "Module" })), Ks = /* @__PURE__ */ D({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    show_refresh: { type: Boolean },
    width: {},
    height: {},
    legend_position: { default: Re.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: n }) {
    const t = `${ia(T)}chart.umd.min.js`, a = J(null), l = e, s = n;
    let o = null;
    const u = () => {
      o != null && o.update();
    }, p = k(() => {
      var i = "";
      return l.width && (i = `width:${l.width}px;`), l.height && (i += `height:${l.height}px;`), i;
    });
    return R(() => l.type, (i) => {
      o != null && (o.type = i ?? "line");
    }), R(
      () => l.labels,
      (i) => {
        o != null && (o.data.labels = i, (l.show_refresh == null || !l.show_refresh) && u());
      },
      { deep: !0 }
    ), R(
      () => l.datasets,
      (i) => {
        o != null && (o.data.datasets = i, (l.show_refresh == null || !l.show_refresh) && u());
      },
      { deep: !0 }
    ), pe(async () => {
      let i = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legend_position}`,
            labels: {
              filter: (c, f) => c.text != null
            },
            onClick: function(c, f) {
              s("legendItemClick", o, f);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (i.scales = l.scales), l.tooltips != null && l.tooltips != null && (i.tooltips = l.tooltips);
      const { Chart: h } = await We(t, ["Chart"]);
      o = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: i
      }), o.update();
    }), (i, h) => (r(), E(Ht, null, ut({
      content: L(() => [
        v("canvas", {
          ref_key: "canvas",
          ref: a,
          style: ze(p.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: L((c) => [
          v("h3", {
            class: F(c.header_class)
          }, N(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.show_refresh != null && l.show_refresh != null && l.show_refresh ? {
        name: "footer",
        fn: L((c) => [
          C(Dt, {
            class: F(c.addon_class),
            onClick: u
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Qs = /* @__PURE__ */ D({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = `${ua(T)}src-noconflict/ace.js`, l = e, s = t, o = J(null), u = J(null), p = function() {
      return u.value.getValue() == "" ? null : u.value.getValue();
    }, i = function(c) {
      u.value.setValue(c ?? "");
    };
    R(() => l.readonly, (c) => {
      u.value.setReadOnly(c == null || c == null ? !1 : c);
    }), R(() => l.value, (c) => {
      i(c);
    }), R(() => l.language, (c) => {
      u.value.getSession().setMode(c);
    });
    const h = k(() => {
      let c = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let f = 0; f < l.autocompletes.length; f++)
          l.autocompletes[f].method.indexOf(".") >= 0 ? c = Math.min(c, l.autocompletes[f].method.indexOf(".")) : c = Math.min(c, l.autocompletes[f].method.length);
        if (c > 3 && l.autocompletes.length > 0) {
          let f = !0, g = l.autocompletes[0].method.substring(0, 3);
          for (let S = 0; S < l.autocompletes.length; S++)
            if (l.autocompletes[S].method.substring(0, 3) != g) {
              f = !1;
              break;
            }
          f && (c = 3);
        }
      }
      return c;
    });
    return n({ getValue: p, setValue: i }), pe(async () => {
      const { ace: c } = await We(a, ["ace"]);
      u.value = ta(c.edit(o.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), u.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && u.value.setValue(l.value), u.value.on("change", () => s("valueChanged", p())), l.autocompletes !== null && l.autocompletes !== void 0 && (u.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), u.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(f, g, S, m, O) {
          var M = [];
          if (m = m.toUpperCase(), m.length >= h && (M = l.autocompletes.filter((b) => b.method.toUpperCase().startsWith(m) && b.method.length > m.legend).map((b) => ({
            caption: b.method + (b.description === null || b.description === void 0 ? "" : "->" + b.description),
            value: b.method,
            meta: "autos"
          }))), M.length === 0) {
            O(null, []);
            return;
          }
          O(null, M.map(function(b) {
            return b;
          }));
        }
      }]);
    }), (c, f) => (r(), d("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), Xs = { key: 0 }, Zs = { colspan: "100%" }, eo = ["colspan", "rowspan"], to = ["onClick"], ao = { class: "icon" }, lo = { key: 0 }, no = { colspan: "100%" }, so = ["colspan", "rowspan", "onClick"], oo = { key: 0 }, ro = { colspan: "100%" }, io = /* @__PURE__ */ D({
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
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {},
    zero_page_index: { type: Boolean }
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: n }) {
    const t = $e(), a = e, l = n, s = {
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
    }, u = k(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && ae(a.total_pages) > 1)), p = k(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((f) => f.map((g) => a.columns.filter((S) => S.some((m) => m.id === g))[0].find((S) => S.id === g)))), i = (f) => {
      a.current_sort !== void 0 && a.current_sort !== null && a.current_sort.column === f ? l("sort", {
        column: f,
        ascending: !a.current_sort.ascending
      }) : l("sort", {
        column: f,
        ascending: !0
      });
    }, h = (f, g) => {
      if (a.getRowColor) {
        let S = a.getRowColor(f, g);
        if (S)
          return `is-${S}`;
      }
      return null;
    }, c = (f, g, S, m) => {
      let O = "";
      if ((g.cellClass || g.getCellColor) && (g.cellClass && (O += `${g.cellClass}`), g.getCellColor)) {
        let M = g.getCellColor(f, S, m);
        M && (O += ` is-${M}`);
      }
      return O === "" ? null : O;
    };
    return (f, g) => (r(), E(Yt, oe(ie(s)), ut({
      thead: L(() => [
        a.has_filter ?? !1 ? (r(), d("tr", Xs, [
          v("th", Zs, [
            C(wt, {
              onFilter: g[0] || (g[0] = (S) => l("filter", S))
            })
          ])
        ])) : x("", !0),
        (r(!0), d(I, null, z(a.columns, (S) => (r(), d("tr", null, [
          (r(!0), d(I, null, z(S, (m) => (r(), d("th", {
            colspan: m.headerColspan,
            rowspan: m.headerRowspan,
            class: F(m.headerClass)
          }, [
            P(f.$slots, `head-${m.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (m.canSort ?? !1) && m.id === a.current_sort.column ? (r(), d("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (O) => i(m.id)
              }, [
                v("span", ao, [
                  C(j, { icon: "arrow-down" })
                ]),
                v("span", null, N(m.title), 1)
              ], 8, to)) : (r(), d(I, { key: 1 }, [
                Y(N(m.title), 1)
              ], 64))
            ])
          ], 10, eo))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        a.data === null || a.data.length === 0 ? (r(), d("tr", lo, [
          v("td", no, [
            a.data === null ? (r(), E(de, { key: 0 })) : (r(), E(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), d(I, { key: 1 }, z(a.data, (S, m) => (r(), d(I, null, [
          (r(!0), d(I, null, z(p.value.filter((O) => O.some((M) => !(M.headerOnly ?? !1))), (O, M) => (r(), d("tr", {
            key: `row-${m}-${M}`,
            class: F(h(m, S))
          }, [
            (r(!0), d(I, null, z(O.filter((b) => !(b.headerOnly ?? !1)), (b) => (r(), d("td", {
              key: `data-${m}-${M}`,
              colspan: b.dataColspan,
              rowspan: b.dataRowspan,
              class: F(c(m, b, S, b.propertyName ? S[b.propertyName] : void 0)),
              onClick: (B) => l("cellClicked", { rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })
            }, [
              P(f.$slots, `body-${b.id}`, oe(ie({ rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })), () => [
                Y(N(b.propertyName ? S[b.propertyName] : null), 1)
              ])
            ], 10, so))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      u.value || y(t).tfoot_head || y(t).tfoot_bottom ? {
        name: "tfoot",
        fn: L(() => [
          P(f.$slots, "tfoot_head"),
          u.value ? (r(), d("tr", oo, [
            v("td", ro, [
              C(Bt, Q(o, {
                onMoveForward: g[1] || (g[1] = (S) => l("moveForward")),
                onMoveBack: g[2] || (g[2] = (S) => l("moveBack")),
                onGoToPage: g[3] || (g[3] = (S) => l("goToPage", S))
              }), null, 16)
            ])
          ])) : x("", !0),
          P(f.$slots, "tfoot_bottom")
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Ks,
  CodeWriter: Qs,
  Grid: io
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: ho,
  Button: mo,
  ButtonsContainer: fo,
  ButtonAdd: bo,
  ButtonCancel: vo,
  ButtonDelete: go,
  ButtonDisable: _o,
  ButtonDownload: yo,
  ButtonEdit: ko,
  ButtonEnable: $o,
  ButtonOkay: So,
  ButtonPrint: Mo,
  ButtonRefresh: Do,
  ButtonSave: wo,
  ButtonUpload: Bo,
  CheckMark: xo,
  DropDown: Fo,
  DynamicSlot: Oo,
  Filter: Jo,
  Icon: No,
  Message: Ao,
  Notification: Co,
  PageNotification: Po,
  Pagination: Eo,
  Promised: To,
  Progress: Lo,
  NavBar: Io,
  Menu: Vo,
  MenuLabel: zo,
  MenuList: Wo,
  MenuEntry: Ro,
  ToolTip: Uo,
  Badge: jo,
  Tag: Go,
  Tags: Ho
} = Vl, { DraggableItem: Yo, DropZone: qo, Sortable: Ko } = Ul, {
  AutoComplete: Qo,
  CheckboxGroup: Xo,
  Checkbox: Zo,
  DateField: er,
  ComponentForm: tr,
  FullEditor: ar,
  Header: lr,
  Hidden: nr,
  NumberField: sr,
  Paragraph: or,
  RadioGroup: rr,
  Select: ir,
  Switch: ur,
  Text: dr,
  TextArea: cr,
  Time: pr,
  FormComponent: hr
} = Zn, {
  Banner: mr,
  Box: fr,
  Breadcrumbs: br,
  Card: vr,
  Column: gr,
  ColumnContainer: _r,
  List: yr,
  ListItem: kr,
  ModalCard: $r,
  Panel: Sr,
  Table: Mr,
  Tabs: Dr,
  Modal: wr,
  SlideOut: Br
} = Gs, { AVAIABLE_SKINS: xr, setSkin: Fr } = qs, {
  ColorTypes: Or,
  NoticeTypes: Jr,
  Sizes: Nr,
  AnimationSpeeds: Ar,
  AnimationTypes: Cr,
  IconSizes: Pr,
  ChartLegendPositions: Er,
  ChartTypes: Tr,
  DropZoneQuadrants: Lr,
  BreadCrumbAlignments: Ir,
  BreadCrumbSeperators: Vr,
  ColumnContainerModifiers: zr,
  ColumnSizes: Wr,
  ColumnOffsetSizes: Rr,
  BorderTypes: Ur,
  TabAlignments: jr,
  TabStyles: Gr,
  TileSizes: Hr,
  TileTypes: Yr,
  FixedNavBarPositions: qr,
  FixedMenuPositions: Kr,
  BadgePositions: Qr,
  ToolTipPositions: Xr,
  ToolTipTextAlignments: Zr,
  ButtonAlignments: ei
} = la, { loadNonEs6Module: ti } = aa, { Chart: ai, CodeWriter: li, Grid: ni } = uo;
export {
  xr as AVAIABLE_SKINS,
  ho as Animation,
  Ar as AnimationSpeeds,
  Cr as AnimationTypes,
  Qo as AutoComplete,
  jo as Badge,
  Qr as BadgePositions,
  mr as Banner,
  Ur as BorderTypes,
  fr as Box,
  Ir as BreadCrumbAlignments,
  Vr as BreadCrumbSeperators,
  br as Breadcrumbs,
  mo as Button,
  bo as ButtonAdd,
  ei as ButtonAlignments,
  vo as ButtonCancel,
  go as ButtonDelete,
  _o as ButtonDisable,
  yo as ButtonDownload,
  ko as ButtonEdit,
  $o as ButtonEnable,
  So as ButtonOkay,
  Mo as ButtonPrint,
  Do as ButtonRefresh,
  wo as ButtonSave,
  Bo as ButtonUpload,
  fo as ButtonsContainer,
  vr as Card,
  ai as Chart,
  Er as ChartLegendPositions,
  Tr as ChartTypes,
  xo as CheckMark,
  Zo as Checkbox,
  Xo as CheckboxGroup,
  li as CodeWriter,
  Or as ColorTypes,
  gr as Column,
  _r as ColumnContainer,
  zr as ColumnContainerModifiers,
  Rr as ColumnOffsetSizes,
  Wr as ColumnSizes,
  tr as ComponentForm,
  er as DateField,
  Yo as DraggableItem,
  Fo as DropDown,
  qo as DropZone,
  Lr as DropZoneQuadrants,
  Oo as DynamicSlot,
  Jo as Filter,
  Kr as FixedMenuPositions,
  qr as FixedNavBarPositions,
  hr as FormComponent,
  ar as FullEditor,
  ni as Grid,
  lr as Header,
  nr as Hidden,
  No as Icon,
  Pr as IconSizes,
  yr as List,
  kr as ListItem,
  Vo as Menu,
  Ro as MenuEntry,
  zo as MenuLabel,
  Wo as MenuList,
  Ao as Message,
  wr as Modal,
  $r as ModalCard,
  Io as NavBar,
  Jr as NoticeTypes,
  Co as Notification,
  sr as NumberField,
  Po as PageNotification,
  Eo as Pagination,
  Sr as Panel,
  or as Paragraph,
  Lo as Progress,
  To as Promised,
  rr as RadioGroup,
  ir as Select,
  Nr as Sizes,
  Br as SlideOut,
  Ko as Sortable,
  ur as Switch,
  jr as TabAlignments,
  Gr as TabStyles,
  Mr as Table,
  Dr as Tabs,
  Go as Tag,
  Ho as Tags,
  dr as Text,
  cr as TextArea,
  Hr as TileSizes,
  Yr as TileTypes,
  pr as Time,
  Uo as ToolTip,
  Xr as ToolTipPositions,
  Zr as ToolTipTextAlignments,
  ti as loadNonEs6Module,
  Fr as setSkin
};
//# sourceMappingURL=components.esm.js.map
