import { computed as k, defineComponent as D, openBlock as r, createBlock as E, Transition as Yt, withCtx as I, renderSlot as C, createElementBlock as d, normalizeClass as F, inject as T, ref as J, watch as R, createVNode as P, createCommentVNode as x, toDisplayString as N, mergeProps as Q, toValue as ae, createElementVNode as v, unref as _, Fragment as L, renderList as V, resolveDynamicComponent as ce, createTextVNode as Y, onMounted as pe, normalizeProps as oe, guardReactiveProps as ie, withDirectives as U, vModelText as $e, vShow as te, toRefs as qt, reactive as ot, resolveComponent as rt, vModelCheckbox as Ie, normalizeStyle as Ve, readonly as Be, withAsyncContext as Kt, onUnmounted as Qt, vModelSelect as Xt, vModelDynamic as Zt, provide as Ae, useSlots as ve, createSlots as it, markRaw as ea } from "vue";
import "jquery";
const Je = (e) => new Promise((s) => {
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
    s(l);
  });
}), fe = [], ze = (e, s) => new Promise((t) => {
  let a = fe.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && s !== void 0 || a.result === null && s === void 0) {
      let l = setTimeout(() => {
        let n = fe.find((o) => o.path === e);
        n == null ? (clearTimeout(l), t(void 0)) : (n.result !== void 0 && s !== void 0 || n.result === void 0 && s === void 0) && (clearTimeout(l), t(n.result));
      }, 500);
    } else
      t(a.result);
  else {
    fe.push({
      path: e,
      result: s === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let o = fe.findIndex((i) => i.path === e);
      if (s === void 0)
        fe[o].result = void 0;
      else {
        let i = {};
        s.forEach((c) => {
          i[c] = window[c];
        }), fe[o].result = i;
      }
      t(fe[o].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), ut = () => {
  var t;
  let e, s = "";
  return typeof self.crypto < "u" && (e = self.crypto, s = (t = e.randomUUID) == null ? void 0 : t.call(e)), s || "";
}, ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Je,
  generateUUID: ut,
  loadNonEs6Module: ze
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), le = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(le || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), be = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(be || {}), xe = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(xe || {}), dt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(dt || {}), We = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(We || {}), ue = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(ue || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), ct = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(mt || {}), Re = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Re || {}), ft = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ft || {}), bt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(gt || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), _t = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(_t || {}), Ue = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(je || {}), Ge = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Ge || {}), yt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(yt || {}), He = /* @__PURE__ */ ((e) => (e.cerulean = "cerulean", e.cosmo = "cosmo", e.cyborg = "cyborg", e.dark = "dark", e.darkly = "darkly", e.default = "default", e.flatly = "flatly", e.journal = "journal", e.light = "light", e.litera = "litera", e.lumen = "lumen", e.lux = "lux", e.materia = "materia", e.minty = "minty", e.morph = "morph", e.pulse = "pulse", e.quartz = "quartz", e.sandstone = "sandstone", e.simplex = "simplex", e.sketchy = "sketchy", e.slate = "slate", e.solar = "solar", e.spacelab = "spacelab", e.superhero = "superhero", e.united = "united", e.vapor = "vapor", e.yeti = "yeti", e.zephyr = "zephyr", e))(He || {});
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: be,
  AnimationTypes: xe,
  BadgePositions: Ue,
  BorderTypes: Re,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: ct,
  ButtonAlignments: yt,
  ChartLegendPositions: We,
  ChartTypes: dt,
  ColorTypes: q,
  ColumnContainerModifiers: pt,
  ColumnOffsetSizes: mt,
  ColumnSizes: ht,
  DropZoneQuadrants: ee,
  FixedMenuPositions: _t,
  FixedNavBarPositions: Oe,
  IconSizes: ue,
  NoticeTypes: le,
  Sizes: X,
  SkinTypes: He,
  TabAlignments: ft,
  TabStyles: bt,
  TileSizes: vt,
  TileTypes: gt,
  ToolTipPositions: je,
  ToolTipTextAlignments: Ge
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const s = e("Language", "en");
  return k(() => s);
}, la = (e) => {
  const s = e("IconSet", "solid");
  return k(() => s);
}, na = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), sa = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), oa = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ra = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ia = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), kt = /* @__PURE__ */ D({
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
    const s = oa(T);
    Je(`${s}animate.min.css`);
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
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, n = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, o = k(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = k(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      n(t.speedIn ?? t.speed)
    ].join(" ")), c = k(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      n(t.speedOut ?? t.speed)
    ].join(" ")), u = k(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      n(t.speed)
    ].join(" "));
    return (h, p) => t.repeating ? (r(), d("div", {
      key: 1,
      class: F(u.value)
    }, [
      C(h.$slots, "default")
    ], 2)) : (r(), E(Yt, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": c.value,
      duration: o.value
    }, {
      default: I(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ua = "brands.min.css", da = "all.min.css", et = "icon_styles", ca = /\.fa-([^: ]+):before/g, pa = /url\(([^)]+)\)/g, ke = J([]), Ce = J(!1), tt = async (e, s) => {
  if (!Ce.value) {
    Ce.value = !0;
    let t;
    ke.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", et), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(et), ke.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ua}`),
      fetch(`${e}${da}`),
      fetch(`${e}${s}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(ca)].forEach((n) => {
      ke.value.push(n[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(pa)].forEach((n) => {
      l = l.replace(n[0], `url(${new URL(n[1], e)})`);
    }), t.innerText = l, ke.value.splice(0, 1), Ce.value = !1;
  }
}, j = /* @__PURE__ */ D({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const s = sa(T), t = la(T);
    ke.value.length === 0 ? tt(s, t.value) : R(t, () => tt(s, t.value));
    const a = e, l = k(() => {
      let n = [];
      return a.icon !== void 0 && a.icon !== null && (ke.value.indexOf(a.icon) >= 0 ? n.push("fa-brands") : (n.push("fa-ico"), n.push(`fa-${t.value}`)), n.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== ue.normal && n.push(`fa-${a.size}`), n;
    });
    return (n, o) => (r(), d("i", {
      class: F(l.value)
    }, null, 2));
  }
});
const ha = ["disabled"], ma = {
  key: 0,
  class: "icon is-small"
}, fa = { key: 1 }, Z = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = e, a = s, l = k(() => {
      let n = ["button", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && n.push("disabled"), t.is_rounded && n.push("is-rounded"), t.hide_mobile && n.push("is-hidden-mobile"), t.hide_tablet && n.push("is-hidden-tablet-only"), t.hide_desktop && n.push("is-hidden-desktop is-hidden-widescreen"), n.join(" ");
    });
    return (n, o) => (r(), d("button", {
      class: F(l.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (i) => a("click"))
    }, [
      t.icon != null ? (r(), d("span", ma, [
        P(j, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : x("", !0),
      t.title != null ? (r(), d("span", fa, N(t.title), 1)) : x("", !0)
    ], 10, ha));
  }
}), ba = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, va = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', ga = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', _a = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, ya = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', ka = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', $a = {
  Button: JSON.parse(ba),
  Filter: JSON.parse(va),
  Pagination: JSON.parse(ga),
  Date: JSON.parse(_a),
  Form: JSON.parse(ya),
  Wizard: JSON.parse(ka)
}, z = (e, s) => {
  let t = e.split("."), a = $a[t[0]];
  if (a !== void 0) {
    a[s.value] === void 0 ? a = a.en : a = a[s.value];
    let l = 1;
    for (; a !== void 0 && l < t.length; )
      a = a[t[l]], l++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, Sa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), $t = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ma = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), xa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), St = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Fa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Mt = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Oa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ja = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = s, a = K(T), l = k(() => ({
      title: z("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (n, o) => (r(), E(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ D({
  __name: "buttons-container",
  props: {
    size: {},
    alignment: {}
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("div", {
      class: F(["buttons", s.size ? `are-${s.size}` : "", s.alignment ? `is-${s.alignment}` : ""])
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}), Aa = /* @__PURE__ */ D({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: ue.normal }
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), E(j, {
      icon: `square-${s.checked ? "check" : "xmark"}`,
      size: s.size
    }, null, 8, ["icon", "size"]));
  }
}), Ca = { class: "dropdown-trigger" }, Pa = ["aria-controls"], Ea = /* @__PURE__ */ v("span", { class: "icon is-small" }, [
  /* @__PURE__ */ v("i", {
    class: "fas fa-angle-down",
    "aria-hidden": "true"
  })
], -1), Ta = ["id"], La = { class: "dropdown-content" }, Ia = {
  key: 0,
  class: "dropdown-divider"
}, Va = { key: 0 }, za = /* @__PURE__ */ D({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const s = ut(), t = e, a = J(!1), l = k(() => {
      let u = ["dropdown"];
      return t.is_hoverable && u.push("is-hoverable"), t.is_right_align && u.push("is-right"), t.drops_up && u.push("is-up"), a.value && u.push("is-active"), u;
    }), n = k(() => {
      let u = ae(t.items);
      return Array.isArray(u) && u.length > 0 && u[0].children === void 0 ? [{
        children: u
      }] : Array.isArray(u) ? u : [u];
    }), o = (u) => {
      let h = ["dropdown-item"];
      return u instanceof String || u.active && h.push("is-active"), h;
    }, i = (u) => {
      if (!(u instanceof String))
        return u.href;
    }, c = (u) => {
      if (!(u instanceof String)) {
        a.value = !1;
        let h = u;
        h.onClick && h.onClick();
      }
    };
    return (u, h) => (r(), d("div", {
      class: F(l.value)
    }, [
      v("div", Ca, [
        v("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": _(s),
          onClick: h[0] || (h[0] = (p) => a.value = !a.value)
        }, [
          v("span", null, N(t.title), 1),
          Ea
        ], 8, Pa)
      ]),
      v("div", {
        class: "dropdown-menu",
        id: _(s),
        role: "menu"
      }, [
        (r(!0), d(L, null, V(n.value, (p, f) => (r(), d("div", La, [
          f > 0 ? (r(), d("hr", Ia)) : x("", !0),
          (r(!0), d(L, null, V(p.children, (g) => (r(), E(ce(g instanceof String ? "div" : "a"), {
            class: F(o(g)),
            href: i(g),
            onClick: (S) => c(g)
          }, {
            default: I(() => [
              g instanceof String ? (r(), d("p", Va, N(g), 1)) : x("", !0),
              Y(" " + N(g instanceof String ? null : g.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Ta)
    ], 2));
  }
}), at = async (e, s, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return s && l.sort(s), l.filter((n) => t === void 0 || t.value.test(n)).map((n) => a[n]);
}, Wa = /* @__PURE__ */ D({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const s = J(null), t = e, a = k(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return R(() => [t.url, t.filter], async () => {
      s.value = await at(t.url, t.sortMethod, a);
    }), pe(async () => {
      s.value = await at(t.url, t.sortMethod, a);
    }), (l, n) => (r(!0), d(L, null, V(s.value, (o) => (r(), E(ce(o), oe(ie(t.props)), null, 16))), 256));
  }
}), Ra = { class: "control has-icons-left" }, Ua = ["placeholder"], ja = { class: "icon is-small is-left" }, Dt = /* @__PURE__ */ D({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: s }) {
    const t = e, a = s, l = K(T), n = k(() => z("Filter.Filter", l)), o = J(null);
    R([o], (c) => {
      c[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const i = (c) => {
      c.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return pe(() => {
      t.default_value && (o.value = t.default_value);
    }), (c, u) => (r(), d("div", Ra, [
      U(v("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => o.value = h),
        onKeypress: i
      }, null, 40, Ua), [
        [$e, o.value]
      ]),
      v("span", ja, [
        P(j, { icon: "filter" })
      ])
    ]));
  }
}), Ga = {
  key: 0,
  class: "message-header"
}, Ha = { class: "message-body" }, Ya = /* @__PURE__ */ D({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    has_delete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const t = e, a = s, l = k(() => t.size === X.normal ? null : `is-${t.size}`), n = k(() => `is-${t.type}`);
    return (o, i) => (r(), d("article", {
      class: F(["message", l.value, n.value])
    }, [
      t.title ? (r(), d("div", Ga, [
        v("p", null, N(t.title), 1),
        t.has_delete ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: i[0] || (i[0] = (c) => a("close"))
        })) : x("", !0)
      ])) : x("", !0),
      v("div", Ha, [
        C(o.$slots, "default", {}, () => [
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
    const s = e;
    return (t, a) => (r(), d("div", {
      class: F(["notification", "is-" + s.type, s.light ? "is-light" : ""])
    }, [
      C(t.$slots, "default", {}, () => [
        Y(N(s.message), 1)
      ])
    ], 2));
  }
}), qa = {
  key: 0,
  class: "modal-background"
}, Ka = {
  key: 0,
  class: "title"
}, Qa = { class: "block" }, Xa = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = e, a = s, l = k(() => {
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
    }), n = k(() => {
      var o = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && o.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || o.push("has-no-close"), o;
    });
    return (o, i) => (r(), d("div", {
      class: F({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (r(), d("div", qa)) : x("", !0),
      P(kt, {
        incoming: _(xe).fadeIn,
        outgoing: _(xe).fadeOut,
        speed: _(be).slower
      }, {
        default: I(() => [
          t.visible ? (r(), d("div", {
            key: 0,
            class: F(n.value)
          }, [
            P(j, {
              icon: l.value,
              size: _(ue).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), d("h1", Ka, N(t.header), 1)) : x("", !0),
            v("div", Qa, N(t.message), 1),
            t.has_close ? (r(), E(j, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (c) => a("close")),
              size: _(ue).large
            }, null, 8, ["size"])) : x("", !0)
          ], 2)) : x("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Za = ["title", "disabled"], el = ["title", "disabled"], tl = {
  key: 0,
  class: "pagination-list"
}, al = {
  key: 0,
  class: "pagination-ellipsis"
}, ll = ["aria-label", "onOnclick"], wt = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = e, a = s, l = K(T), n = k(() => z(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = k(() => z(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), i = k(() => t.button_type ? `has-background-${t.button_type}` : ""), c = k(() => z("Pagination.GoToPage", l)), u = k(() => t.current_page === void 0 ? 0 : ae(t.current_page) + (t.zero_page_index ? 1 : 0)), h = k(() => (t.has_previous ?? !1) || u.value > 0), p = k(() => (t.has_more ?? !1) || u.value < (t.total_pages === void 0 ? 0 : ae(t.total_pages))), f = k(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (ae(t.total_pages) > 5) {
        let O = Math.max(t.current_page === void 0 ? Math.floor(ae(t.total_pages) / 2) : u.value, 3);
        return ae(t.total_pages) - u.value === 0 ? O -= 2 : ae(t.total_pages) - u.value === 1 && O--, console.log(O), [
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
      p && (t.current_page !== null ? a("goToPage", ae(t.current_page) + 1) : a("moveForward"));
    }, m = function(O) {
      a("goToPage", t.zero_page_index ? O - 1 : O);
    };
    return (O, M) => U((r(), d("nav", {
      class: F(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      v("a", {
        class: F(["pagination-previous", i.value]),
        title: n.value,
        onClick: g,
        disabled: h.value ? null : "disabled"
      }, [
        P(j, {
          icon: "backward",
          class: "mr-1",
          size: _(ue).small
        }, null, 8, ["size"]),
        Y(" " + N(n.value), 1)
      ], 10, Za),
      v("a", {
        class: F(["pagination-next", i.value]),
        title: o.value,
        onClick: S,
        disabled: p.value ? null : "disabled"
      }, [
        Y(N(o.value) + " ", 1),
        P(j, {
          icon: "forward",
          class: "ml-1",
          size: _(ue).small
        }, null, 8, ["size"])
      ], 10, el),
      t.total_pages !== void 0 ? (r(), d("ul", tl, [
        (r(!0), d(L, null, V(f.value, (b) => (r(), d("li", null, [
          b === -1 ? (r(), d("span", al, "…")) : (r(), d("a", {
            key: 1,
            class: F(b === -1 ? ["pagination-ellipsis"] : ["pagination-link", b === u.value ? "is-current" : ""]),
            "aria-label": b === -1 ? "" : `${c.value} ${b}`,
            onOnclick: (B) => m(b)
          }, N(b === -1 ? "" : b), 43, ll))
        ]))), 256))
      ])) : x("", !0)
    ], 2)), [
      [te, h.value || p.value]
    ]);
  }
});
function ge(e) {
  return typeof e == "function" ? e() : _(e);
}
function nl(e, s = 200) {
  const t = J(!1), a = J(!1), l = k(() => !t.value && !a.value), n = J(!1), o = J(), i = J(), c = k(() => {
    if (e != null) {
      let h = ge(e);
      return h instanceof Promise ? h : new Promise((p) => p(h));
    }
    return null;
  });
  let u;
  return R(
    () => ge(c),
    (h) => {
      if (t.value = !1, a.value = !1, o.value = null, !h) {
        i.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const p = Number(ge(s)) || 0;
      p > 0 ? (n.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        n.value = !0;
      }, p)) : n.value = !0, h.then((f) => {
        h === ge(c) && (i.value = ge(f), a.value = !0);
      }).catch((f) => {
        h === ge(c) && (o.value = f, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: n, error: o, data: i };
}
const me = /* @__PURE__ */ D({
  __name: "Promised",
  props: {
    promise: {},
    pending_delay: { default: 200 }
  },
  setup(e) {
    const s = e, t = K(T), a = k(() => z("Form.Error", t)), l = qt(s), n = ot(nl(l.promise, l.pending_delay));
    return (o, i) => (r(), d(L, null, [
      n.isDelayElapsed && !n.isRejected && !n.isResolved ? C(o.$slots, "pending", {
        key: 0,
        response: n.data
      }, () => [
        P(_(de), {
          size: _(X).small
        }, null, 8, ["size"])
      ]) : x("", !0),
      n.isRejected ? C(o.$slots, "rejected", oe(Q({ key: 1 }, n.error)), () => [
        P(_(he), {
          message: `${a}:${n.error.message ?? n.error.toString()}`,
          type: _(le).danger
        }, null, 8, ["message", "type"])
      ]) : x("", !0),
      n.isResolved ? C(o.$slots, "default", {
        key: 2,
        response: n.data
      }) : x("", !0)
    ], 64));
  }
}), sl = ["value", "max"], de = /* @__PURE__ */ D({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const s = e, t = k(() => s.maximum === void 0 ? null : (s.value ?? 0) / s.maximum);
    return (a, l) => (r(), d("progress", {
      class: F(`progress is-${s.size} is-${s.type}`),
      value: s.value,
      max: s.maximum
    }, N(t.value ? `${t.value}%` : null), 11, sl));
  }
}), ol = {
  key: 0,
  class: "navbar-link"
}, rl = {
  key: 0,
  class: "icon-text"
}, il = { class: "icon" }, ul = { key: 1 }, dl = {
  key: 0,
  class: "icon-text"
}, cl = { class: "icon" }, pl = { key: 1 }, hl = {
  key: 2,
  class: "navbar-dropdown"
}, lt = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = e, a = () => {
      l("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, l = s;
    return (n, o) => {
      const i = rt("navbar-item", !0);
      return r(), E(ce(t.childItems !== void 0 ? "div" : "a"), {
        class: F(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: I(() => [
          t.childItems !== void 0 ? (r(), d("a", ol, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", rl, [
              v("span", il, [
                P(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", ul, N(t.title), 1))
          ])) : (r(), d(L, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", dl, [
              v("span", cl, [
                P(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", pl, N(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), d("div", hl, [
            (r(!0), d(L, null, V(t.childItems, (c) => (r(), E(i, Q(c, {
              onItemClicked: o[0] || (o[0] = (u) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : x("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), ml = ["aria-label"], fl = { class: "navbar-brand" }, bl = ["aria-expanded"], vl = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), gl = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), _l = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), yl = [
  vl,
  gl,
  _l
], kl = {
  key: 0,
  class: "navbar-start"
}, $l = { style: { width: "100px" } }, Sl = {
  key: 1,
  class: "navbar-end"
}, Ml = { style: { width: "100px" } }, Dl = /* @__PURE__ */ D({
  __name: "navbar",
  props: {
    start_items: {},
    end_items: {},
    fixed_position: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const s = e, t = J(!1);
    return pe(() => {
      if (s.fixed_position)
        switch (s.fixed_position) {
          case Oe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Oe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (r(), d("nav", {
      class: F(["navbar", s.fixed_position, s.color !== void 0 && s.color !== null ? `is-${s.color}` : ""]),
      role: "navigation",
      "aria-label": s.ariaLabel
    }, [
      v("div", fl, [
        C(a.$slots, "brand"),
        v("a", {
          role: "button",
          class: F(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (n) => t.value = !t.value)
        }, yl, 10, bl)
      ]),
      v("div", {
        class: F(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        s.start_items !== void 0 ? (r(), d("div", kl, [
          P(me, {
            promise: s.start_items
          }, {
            default: I(({ response: n }) => [
              (r(!0), d(L, null, V(n, (o) => (r(), E(lt, Q(o, {
                onItemClicked: l[1] || (l[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              v("div", $l, [
                P(de, {
                  size: _(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : x("", !0),
        s.end_items !== void 0 ? (r(), d("div", Sl, [
          P(me, {
            promise: s.end_items
          }, {
            default: I(({ response: n }) => [
              (r(!0), d(L, null, V(n, (o) => (r(), E(lt, Q(o, {
                onItemClicked: l[2] || (l[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: I(() => [
              v("div", Ml, [
                P(de, {
                  size: _(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : x("", !0)
      ], 2)
    ], 10, ml));
  }
}), wl = /* @__PURE__ */ D({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("aside", {
      class: F(["menu", s.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${s.fixedPosition}` : ""])
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}), Bl = { class: "menu-label" }, xl = /* @__PURE__ */ D({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("p", Bl, [
      Y(N(s.message) + " ", 1),
      C(t.$slots, "default")
    ]));
  }
}), Fl = ["href"], Ol = {
  key: 0,
  class: "icon-text"
}, Jl = { class: "icon" }, Nl = { key: 1 }, Bt = /* @__PURE__ */ D({
  __name: "menu-entry",
  props: {
    title: {},
    active: { type: Boolean },
    icon: {},
    href: {},
    onClick: { type: Function }
  },
  setup(e) {
    const s = e, t = () => {
      s.onClick !== void 0 && s.onClick();
    };
    return (a, l) => (r(), d("li", null, [
      v("a", {
        href: s.href,
        onClick: l[0] || (l[0] = (n) => t()),
        class: F(s.active ? "is-active" : "")
      }, [
        s.icon !== void 0 && s.icon !== null ? (r(), d("span", Ol, [
          v("span", Jl, [
            P(j, {
              icon: s.icon
            }, null, 8, ["icon"])
          ]),
          v("span", null, N(s.title), 1)
        ])) : (r(), d("span", Nl, N(s.title), 1)),
        C(a.$slots, "default")
      ], 10, Fl),
      C(a.$slots, "children")
    ]));
  }
}), Al = { class: "menu-list" }, Cl = /* @__PURE__ */ D({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const s = e;
    return (t, a) => {
      const l = rt("menu-list", !0);
      return r(), d("ul", Al, [
        s.items !== null ? (r(), E(me, {
          key: 0,
          promise: s.items
        }, {
          default: I(({ response: n }) => [
            (r(!0), d(L, null, V(n, (o) => (r(), d("li", null, [
              P(Bt, oe(ie(o)), null, 16),
              o.childItems !== void 0 ? (r(), E(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : x("", !0)
            ]))), 256))
          ]),
          pending: I(() => [
            v("li", null, [
              P(de, {
                size: _(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : x("", !0),
        C(t.$slots, "default")
      ]);
    };
  }
}), Pl = /* @__PURE__ */ D({
  __name: "badge",
  props: {
    position: { default: Ue.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("span", {
      class: F(["badge", `is-${s.position}`, s.type === void 0 ? "" : `is-${s.type}`])
    }, [
      Y(N(s.text) + " ", 1),
      C(t.$slots, "default")
    ], 2));
  }
}), El = /* @__PURE__ */ D({
  __name: "tooltip",
  props: {
    text: {},
    is: {},
    has_arrow: { type: Boolean, default: !1 },
    position: { default: je.left },
    multiline: { type: Boolean, default: !1 },
    type: {},
    always_active: { type: Boolean, default: !1 },
    text_align: { default: Ge.left }
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), E(ce(s.is), {
      class: F([
        s.has_arrow ? "has-tooltop-arrow" : "",
        s.position ? `has-tooltip-${s.position}` : "",
        s.multiline ? "has-tooltip-multiline" : "",
        s.type ? `has-tooltip-${s.type}` : "",
        s.text_align ? `has-tooltip-text-${s.text}` : "",
        s.always_active ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: I(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Tl = /* @__PURE__ */ D({
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
    const s = e, t = k(() => {
      let a = ["tag", `is-${s.type}`, `is-${s.size}`];
      return s.light && a.push("is-light"), s.rounded && a.push("is-rounded"), s.is_delete && a.push("is-delete"), a;
    });
    return (a, l) => (r(), d("span", {
      class: F(t.value)
    }, [
      C(a.$slots, "default", {}, () => [
        Y(N(s.text), 1)
      ])
    ], 2));
  }
}), Ll = /* @__PURE__ */ D({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("span", {
      class: F(["tags", s.size === null ? "" : "are-" + s.size, s.addons ? "has-addons" : ""])
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: kt,
  Badge: Pl,
  Button: Z,
  ButtonAdd: Sa,
  ButtonCancel: $t,
  ButtonDelete: Ma,
  ButtonDisable: Da,
  ButtonDownload: wa,
  ButtonEdit: Ba,
  ButtonEnable: xa,
  ButtonOkay: St,
  ButtonPrint: Fa,
  ButtonRefresh: Mt,
  ButtonSave: Oa,
  ButtonUpload: Ja,
  ButtonsContainer: Na,
  CheckMark: Aa,
  DropDown: za,
  DynamicSlot: Wa,
  Filter: Dt,
  Icon: j,
  Menu: wl,
  MenuEntry: Bt,
  MenuLabel: xl,
  MenuList: Cl,
  Message: Ya,
  NavBar: Dl,
  Notification: he,
  PageNotification: Xa,
  Pagination: wt,
  Progress: de,
  Promised: me,
  Tag: Tl,
  Tags: Ll,
  ToolTip: El
}, Symbol.toStringTag, { value: "Module" })), Vl = /* @__PURE__ */ D({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: s }) {
    const t = s, a = e, l = J(!1), n = J(!1), o = J(null), i = k(() => (a.disabled ?? !1) || n.value && a.handle_search !== null), c = k(() => {
      let p = [];
      return i || p.push("has-cursor"), l.value ? p.push("is-move") : p.push("is-grab"), p;
    }), u = (p) => i.value ? (p.preventDefault(), !1) : (p.stopPropagation(), p.dataTransfer.setData("value", JSON.stringify(a.copy_data)), l.value = !0, t("started"), !0), h = () => {
      l.value = !1, n.value = !0, t("stopped");
    };
    return pe(() => {
      if (a.handle_search) {
        let p = $(o.value).find(a.handle_search);
        p.length > 0 && (n.value = !0, p.on("mousedown", () => n.value = !1), p.on("mouseup", () => n.value = !0));
      }
    }), (p, f) => (r(), E(ce(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: F(c.value)
    }, {
      default: I(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), zl = /* @__PURE__ */ D({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: s }) {
    const t = e, a = s, l = J(!1), n = J(null), o = J(null);
    k(() => t.tag ?? "div");
    const i = (f) => {
      const g = o.value.getBoundingClientRect(), S = {
        x: g.x + g.width / 2,
        y: g.y + g.height / 2
      };
      let m = ee.center;
      return f.x < S.x ? f.y < S.y ? m = ee.topLeft : m = ee.bottomLeft : f.y < S.y ? m = ee.topRight : m = ee.bottomRight, n.value = m, n.value;
    }, c = (f) => {
      f.preventDefault(), l.value = !0, a("itemEntered", i(f));
    }, u = (f) => {
      l.value = !0, a("itemExited", i(f));
    }, h = (f) => {
      f.preventDefault(), a("itemMoved", i(f));
    }, p = (f) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(f.dataTransfer.getData("value"))))
        return !1;
      f.stopPropagation(), f.preventDefault(), a("itemAdded", JSON.parse(f.dataTransfer.getData("value")), n.value), l.value = !1;
    };
    return (f, g) => (r(), E(ce(t.tag), {
      ref_key: "handle",
      ref: o,
      class: F({ "is-bordered": l.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: p,
      onDragover: h
    }, {
      default: I(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Wl = ["onClick"], xt = /* @__PURE__ */ D({
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
    const s = e, t = k(() => {
      var n = ["block-list", "has-radius", `is-${s.type ?? "primary"}`];
      return s.compact && n.push("is-small"), s.outlined && n.push("is-outlined"), s.highlighted && n.push("is-highlighted"), n;
    }), a = k(() => s.items ? s.items.map((n, o) => {
      let i = [];
      return n.type && i.push(`is-${n.type}`), n.outlined && i.push("is-outlined"), n.highlighted && i.push("has-icon"), n.icon && i.push("has-icon"), {
        name: n.name ?? `item-${o}`,
        classes: i,
        onClick: n.onClick,
        icon: n.icon
      };
    }) : null), l = (n) => {
      n.onClick && n.onClick();
    };
    return (n, o) => (r(), E(ce(n.numbered == null || n.numbered == null || !n.numbered ? "ul" : "ol"), {
      class: F(t.value)
    }, {
      default: I(() => [
        a.value === null ? C(n.$slots, "default", { key: 0 }) : (r(!0), d(L, { key: 1 }, V(a.value, (i) => (r(), d("li", {
          class: F(i.classes)
        }, [
          i.icon ? (r(), d("span", {
            key: 0,
            class: "icon is-clickable",
            onClick: (c) => l(i)
          }, [
            P(j, {
              icon: i.icon
            }, null, 8, ["icon"])
          ], 8, Wl)) : x("", !0),
          C(n.$slots, i.name)
        ], 2))), 256))
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rl = ["onDragstart", "onDragover"], Ul = /* @__PURE__ */ D({
  __name: "sortable",
  props: {
    items: {},
    type: { default: q.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: s }) {
    const t = e, a = s, l = J([]), n = J(-1), o = J(-1), i = J(null);
    R(t.items, (f, g) => {
      l.value = [...g];
    }), pe(() => {
      t.items !== null && (l.value = [...t.items]);
    });
    const c = (f) => {
      var g = f.target.getBoundingClientRect(), S = {
        x: g.x + g.width / 2,
        y: g.y + g.height / 2
      };
      let m = ee.center;
      return f.y < S.y ? m = ee.top : m = ee.bottom, m;
    }, u = (f, g) => {
      g.stopPropagation(), n.value = f, g.dataTransfer.setData("value", null);
    }, h = (f, g) => {
      n.value && (g.stopPropagation(), f != n.value ? (o.value = f, i.value = c(g)) : (o.value = -1, i.value = null));
    }, p = (f) => {
      if (n.value) {
        f.stopPropagation();
        var g = o.value + (i.value == ee.top ? 0 : 1), S = l.value.splice(g, 1)[0];
        g >= n.value && g--, l.value.splice(g, 0, S), o.value = -1, i.value = null, n.value = -1, a("sorted", l.value);
      }
    };
    return (f, g) => (r(), E(xt, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: p
    }, {
      default: I(() => [
        (r(!0), d(L, null, V(l.value, (S, m) => (r(), d(L, null, [
          U(v("li", null, [
            P(he, { light: !0 }, {
              default: I(() => [
                Y(" ")
              ]),
              _: 1
            })
          ], 512), [
            [te, o.value === m && n.value !== m && i.value === _(ee).top]
          ]),
          v("li", {
            draggable: "true",
            onDragstart: (O) => u(m, O),
            onDragend: g[0] || (g[0] = (O) => n.value = null),
            onDragover: (O) => h(m, O),
            class: F({ "has-cursor": !0, "is-move": o.value == m, "is-grab": o.value != m })
          }, [
            C(f.$slots, "item", {
              item: S,
              index: m
            })
          ], 42, Rl),
          U(v("li", null, [
            P(he, { light: !0 }, {
              default: I(() => [
                Y(" ")
              ]),
              _: 1
            })
          ], 512), [
            [te, o.value === m && n.value !== m && i.value === _(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Vl,
  DropZone: zl,
  Sortable: Ul
}, Symbol.toStringTag, { value: "Module" })), Ye = "HiddenFields", qe = "DisabledFields", Gl = (e) => e, re = (e, s) => {
  const t = s("Translate", Gl);
  return k(() => e.translate ?? t);
};
function Ke(e, s) {
  const t = s(Ye), a = s(qe), l = k(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), n = k(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: l, disabledValues: n };
}
const Ft = (e) => {
  let s = [], t = [], a = 0;
  return e.forEach((l) => {
    let n = l.form_columns ?? 12;
    a + n > 12 && (s.push(t), t = [], a = 0), t.push(l), a += n, a === 12 && (s.push(t), t = [], a = 0);
  }), t.length > 0 && s.push(t), s;
};
async function Qe(e) {
  let s = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? s = t : s = Promise.resolve(t);
  let a = await s, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Hl = { class: "control" }, Yl = { class: "tags has-addons" }, ql = { class: "tag is-link" }, Kl = ["onClick"], Ql = { key: 0 }, Xl = ["placeholder"], Zl = { class: "dropdown-menu" }, en = { class: "dropdown-content" }, tn = ["onClick"], an = {
  key: 1,
  class: "dropdown-item"
}, Ot = /* @__PURE__ */ D({
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
  setup(e, { expose: s, emit: t }) {
    const a = t, l = e, n = re(l, T), o = J([]), i = J(null), c = J(null), u = J(null), h = J(null);
    R(i, async (B) => {
      if (B != null) {
        if (B.length >= 2)
          if (l.values != null && l.values != null) {
            let W = [];
            for (let y = 0; y < l.values.length && ((l.values[y].name.toUpperCase().indexOf(B.toUpperCase()) >= 0 || l.values[y].id.toUpperCase().indexOf(B.toUpperCase()) >= 0) && W.push(l.values[y]), W.length != 10); y++)
              ;
            c.value = W;
          } else {
            let y = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(B)}`)).json();
            y.length > 10 && y.splice(10, y.length - 10), c.value = y;
          }
      } else
        c.value = null, $(h.value).empty();
    });
    const p = () => {
      if (o.value.length == 0)
        return null;
      const B = o.value.slice();
      return l.limit != null && l.limit == 1 ? B.length > 0 ? B[0] : null : B;
    }, f = async (B) => {
      if (B == null)
        o.value.length > 0 && o.value.splice(0, o.value.length), i.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(B) ? B : [B]).map(async (y) => {
            if (y.id !== void 0 && y.name !== void 0)
              return y;
            {
              let w = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${y.id === void 0 ? "q=" + encodeURIComponent(y) : "id=" + encodeURIComponent(y.id)}`)).json();
              return w.length > 0 ? (l.disabled && (w[0].readonly = !0), w[0]) : null;
            }
          })
        );
        o.value = W.filter((y) => y !== null), a("valueChanged", { name: l.name, value: p() });
      }
    }, g = (B) => {
      B.preventDefault(), i.value = B.clipboardData.getData("text/plain");
    }, S = (B) => {
      switch (B.key) {
        case "Backspace":
          i.value != null && i.value.length > 0 && (i.value = i.value.substring(0, i.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          B.key.length == 1 && (i.value = (i.value == null ? "" : i.value) + B.key);
          break;
      }
    }, m = () => {
      i.value = null;
    }, O = () => {
      h.value.focus();
    }, M = (B) => {
      o.value.push(B), m(), a("valueChanged", { name: l.name, value: p() });
    }, b = (B) => {
      o.value.splice(B, 1), O(), a("valueChanged", { name: l.name, value: p() });
    };
    return s({
      /**
       * Gets the current value 
       */
      getValue: p,
      /**
       * Sets the current value
       * 
       * @param value AutoCompleteItem|AutoCompleteItem[]|string[]|null
       * @returns Promise<void>
       */
      setValue: f
    }), (B, W) => (r(), d("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: O
    }, [
      v("div", {
        class: F(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", l.disabled ? "is-disabled" : ""])
      }, [
        (r(!0), d(L, null, V(o.value, (y, ne) => (r(), d("div", Hl, [
          v("div", Yl, [
            v("a", ql, N(_(n)(y.name)), 1),
            !y.readonly && !l.disabled ? (r(), d("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (w) => b(ne)
            }, null, 8, Kl)) : x("", !0)
          ])
        ]))), 256)),
        l.disabled ? x("", !0) : (r(), d("div", Ql, [
          U(v("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: _(n)(l.title ?? ""),
            contenteditable: "",
            class: F(u.value),
            onFocus: W[0] || (W[0] = (y) => {
              u.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (y) => {
              u.value = null;
            }),
            onKeydown: S,
            onPaste: g
          }, null, 42, Xl), [
            [te, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ], 2),
      l.disabled ? x("", !0) : (r(), d("div", {
        key: 0,
        class: F(["dropdown", { "is-active": c.value != null && i.value != null && i.value != "" }])
      }, [
        v("div", Zl, [
          v("div", en, [
            c.value != null && c.value.length > 0 ? (r(!0), d(L, { key: 0 }, V(c.value, (y) => (r(), d("a", {
              class: "dropdown-item",
              onClick: (ne) => M(y)
            }, N(_(n)(y.name)), 9, tn))), 256)) : (r(), d("a", an, "No Results"))
          ])
        ])
      ], 2))
    ], 32));
  }
}), Ee = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = e, a = s, l = re(t, T);
    return (n, o) => (r(), E(Z, {
      type: n.sstyle,
      icon: t.icon ? t.icon : null,
      title: _(l)(t.label),
      onClick: o[0] || (o[0] = (i) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), ln = { class: "checkbox is-block" }, nn = ["value", "disabled"], Jt = /* @__PURE__ */ D({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = K(T), n = k(() => z("Form.Error", l)), o = t, i = re(a, T), c = J([]), u = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Qe(a.values), O = m.filter((M) => M.selected).map((M) => M.value);
        return c.value === null || c.value.length == 0 ? c.value = O.length > 0 ? [...O] : [] : (O = c.value, m = m.map((M) => ({
          label: M.label,
          value: M.value,
          selected: O.some((b) => b === M.value)
        }))), m;
      }
    });
    R(c, (m) => {
      o("valueChanged", { name: a.name, value: p() });
    });
    const p = () => c.value.length == 0 ? null : c.value, f = (m) => {
      u.value = !0, c.value.splice(0), m !== null && (c.value = [...m]), u.value = !1, o("valueChanged", { name: a.name, value: p() });
    }, { hiddenValues: g, disabledValues: S } = Ke(a.name, T);
    return s({
      /**
       * Gets the current value 
       */
      getValue: p,
      /**
       * Sets the current value
       * 
       * @param value any[]|null
       * @returns void
       */
      setValue: f
    }), (m, O) => (r(), d("div", null, [
      P(me, { promise: h.value }, {
        default: I(({ response: M }) => [
          M !== null ? (r(!0), d(L, { key: 0 }, V(M, (b) => U((r(), d("label", ln, [
            U(v("input", {
              type: "checkbox",
              class: "checkbox",
              value: b.value,
              "onUpdate:modelValue": O[0] || (O[0] = (B) => c.value = B),
              disabled: a.disabled || _(S).some((B) => B === b.value.toString())
            }, null, 8, nn), [
              [Ie, c.value]
            ]),
            Y(" " + N(_(i)(b.label)), 1)
          ], 512)), [
            [te, !_(g).some((B) => B === b.value.toString())]
          ])), 256)) : x("", !0)
        ]),
        pending: I(() => [
          P(_(de))
        ]),
        rejected: I(() => [
          P(_(he), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), sn = { class: "checkbox" }, on = ["name", "disabled"], rn = {
  key: 0,
  class: "help is-danger"
}, Nt = /* @__PURE__ */ D({
  __name: "checkbox",
  props: {
    label: {},
    required: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = re(a, T), o = k(() => n.value(a.label)), i = J(!1);
    return R(i, (h) => l("valueChanged", { name: a.name, value: h })), s({
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
      setValue: (h) => {
        i.value = h;
      }
    }), (h, p) => (r(), d("label", sn, [
      U(v("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": p[0] || (p[0] = (f) => i.value = f)
      }, null, 8, on), [
        [Ie, i.value]
      ]),
      Y(" " + N(o.value) + " ", 1),
      a.required ? (r(), d("span", rn, "*")) : x("", !0)
    ]));
  }
}), Pe = (e, s) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + s), t;
}, H = (e, s, t) => {
  let a = e;
  for (; a.length < t; )
    a = s + a;
  return a;
}, Me = (e, s, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${H(t.getDate().toString(), "0", e.length)}`;
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
      a += `${z("Date.Weekdays." + (e.length > 3 ? n : n.substring(0, 3)), s)}`;
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
      let o = t.getTimezoneOffset() * -1, i = parseInt((o / 60).toFixed(0)), c = o - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${H(Math.abs(i).toString(), "0", 2) + ":" + H(Math.abs(c).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${i < 0 ? "-" : "+"}${H(Math.abs(i).toString(), "0", e.length)}`;
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
      a += `${z("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), s)}`;
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
}, _e = (e, s, t) => {
  t = t ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let a = "", l = "";
  for (var n = 0; n < t.length; n++)
    switch (t.charAt(n)) {
      case "\\":
        l != "" && (a += Me(l, s, e), l = ""), a += t.charAt(n + 1), n++;
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
        l != "" && l.charAt(0) != t.charAt(n) ? (a += Me(l, s, e), l = "") : l += t.charAt(n);
        break;
      default:
        l != "" && (a += Me(l, s, e), l = ""), a += t.charAt(n);
        break;
    }
  return l != "" && (a += Me(l, s, e), l = ""), a;
}, un = { class: "control" }, dn = ["name", "id", "disabled"], nt = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Xe = /* @__PURE__ */ D({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = J(null), o = k(() => {
      if (n.value == null || n.value == "")
        return null;
      var u = Number(n.value.substring(3, 5)), h = Number(n.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return R(n, (u) => {
      l("valueChanged", { name: a.name, value: u });
    }), s({
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
        if (u != null && nt.test(u)) {
          var h = nt.exec(u);
          u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
        }
        n.value = u;
      }
    }), (u, h) => (r(), d("div", un, [
      U(v("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (p) => n.value = p),
        disabled: a.disabled,
        style: Ve(o.value)
      }, null, 12, dn), [
        [$e, n.value]
      ])
    ]));
  }
});
const cn = { class: "control has-icons-left has-icons-right" }, pn = ["name", "id", "placeholder", "disabled"], hn = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), mn = { class: "modal-content" }, fn = { class: "panel is-primary is-dateselect" }, bn = { class: "panel-heading" }, vn = { class: "columns card-header-title" }, gn = { class: "column" }, _n = { class: "column has-text-centered" }, yn = { class: "column has-text-right" }, kn = { class: "panel-block" }, $n = { class: "table is-striped has-text-centered" }, Sn = ["onClick"], Mn = { key: 0 }, Dn = {
  colspan: "100%",
  class: "has-text-centered"
}, wn = { class: "panel-block" }, Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), De = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), At = /* @__PURE__ */ D({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = J(null), l = e, n = t, o = J(!1), i = J(null), c = J(null), u = ot({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(T), p = Be({
      Sun: k(() => z("Date.Weekdays.Sun", h)),
      Mon: k(() => z("Date.Weekdays.Mon", h)),
      Tue: k(() => z("Date.Weekdays.Tue", h)),
      Wed: k(() => z("Date.Weekdays.Wed", h)),
      Thu: k(() => z("Date.Weekdays.Thu", h)),
      Fri: k(() => z("Date.Weekdays.Fri", h)),
      Sat: k(() => z("Date.Weekdays.Sat", h))
    }), f = k(() => i.value !== null && (l.includeTime ? De : Se).test(i.value)), g = () => {
      if (i.value == null || i.value == "")
        return null;
      {
        if (!De.test(i.value) && l.includeTime)
          return null;
        if (!l.includeTime && !Se.test(i.value))
          return null;
        if (Se.test(i.value) && l.includeTime)
          return null;
        let w = l.includeTime ? De.exec(i.value) : Se.exec(i.value);
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
    R(i, (w) => {
      if (w == null)
        n("valueChanged", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!Se.test(w) && !De.test(w)) {
        w = w.replaceAll(/[^0-9]/g, "");
        for (var A = [], G = 0; G < w.length; G += 2)
          G == 4 ? (A.push(w.substring(G, Math.min(w.length - G, 4) + G)), G += 2) : A.push(w.substring(G, Math.min(w.length - G, 2) + G));
        A.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(A[0]) || A.splice(0), A.length > 1 && (/^[0-3]/.test(A[1]) ? /^(01|03|05|07|08|10|12)$/.test(A[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(A[1]) || A.splice(1) : /^(02|04|06|09|11)$/.test(A[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(A[1]) || A.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(A[1]) || A.splice(1) : A.splice(1)), A.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(A[3]) || A.splice(3)), A.length > 4 && (/^[0-5][0-9]?$/.test(A[4]) || A.splice(4))), w = A.join(""), !l.includeTime && w.length > 8 && (w = w.substring(0, 8)), w.length >= 2 && (w = w.substring(0, 2) + "-" + (w.length > 2 ? w.substring(2) : "")), w.length >= 5 && (w = w.substring(0, 5) + "-" + (w.length > 5 ? w.substring(5) : "")), w.length >= 9 && l.includeTime && (w = w.substring(0, 9) + " " + (w.length > 9 ? w.substring(9) : "")), w.length >= 11 && (w = w.substring(0, 11) + ":" + (w.length > 11 ? w.substring(11) : "")), i.value = w;
      } else {
        var se = g();
        f && n("valueChanged", { name: l.name, value: se }), u.Month = se.getMonth(), u.Year = se.getFullYear();
      }
    });
    const S = k(() => _e(new Date(u.Year, u.Month, 1), h, "MMMM")), m = k(() => {
      var w = [], A = new Date(u.Year, u.Month, 1);
      A = Pe(A, A.getDay() * -1);
      for (var G = g(), se = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); A.getMonth() != se; ) {
        for (var Ne = [], Ze = 0; Ze < 7; Ze++)
          Ne.push({
            Number: A.getDate(),
            Disabled: A.getMonth() != u.Month,
            isToday: _e(A, h, "yyyy-MM-dd") == _e(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: G != null && _e(A, h, "yyyy-MM-dd") == _e(G, h, "yyyy-MM-dd")
          }), A = Pe(A, 1);
        w.push(Ne);
      }
      return w;
    });
    s({
      /**
       * Gets the current value 
       */
      getValue: g,
      /**
       * Sets the current value
       * 
       * @param value Date|null
       * @returns void
       */
      setValue: function(w) {
        w == null ? i.value = null : i.value = _e(w, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
      }
    });
    const M = (w) => {
      w.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + w.value : i.value = `${H((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year} ${w.value}`;
    }, b = (w) => {
      if (!w.Disabled && !w.isSelected)
        if (i.value === null)
          i.value = `${H(w.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var A = i.value.split(" ");
          A[0] = `${H(w.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}`, i.value = `${A[0]}${A.length > 1 ? " " + A[1] : ""}`;
        }
    }, B = () => {
      i.value = c.value, o.value = !1;
    }, W = () => {
      l.disabled || (c.value = i.value, o.value = !0);
    }, y = () => {
      l.disabled || (i.value = null);
    }, ne = (w) => {
      u.Month + w == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + w == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += w;
    };
    return (w, A) => (r(), d("div", null, [
      v("div", cn, [
        U(v("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": A[0] || (A[0] = (G) => i.value = G),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, pn), [
          [$e, i.value]
        ]),
        v("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          P(_(j), { icon: "calendar-alt" })
        ]),
        v("span", {
          class: "icon is-small is-right is-clickable",
          onClick: y
        }, [
          P(_(j), { icon: "window-close" })
        ])
      ]),
      v("div", {
        class: F(["modal", { "is-active": o.value }])
      }, [
        hn,
        v("div", mn, [
          v("div", fn, [
            v("div", bn, [
              v("div", vn, [
                v("div", gn, [
                  P(_(j), {
                    icon: "arrow-circle-left",
                    onClick: A[1] || (A[1] = (G) => ne(-1))
                  })
                ]),
                v("div", _n, N(S.value) + " " + N(u.Year), 1),
                v("div", yn, [
                  P(_(j), {
                    icon: "arrow-circle-right",
                    onClick: A[2] || (A[2] = (G) => ne(1))
                  })
                ])
              ])
            ]),
            v("div", kn, [
              v("table", $n, [
                v("thead", null, [
                  v("tr", null, [
                    v("th", null, N(_(p).Sun), 1),
                    v("th", null, N(_(p).Mon), 1),
                    v("th", null, N(_(p).Tue), 1),
                    v("th", null, N(_(p).Wed), 1),
                    v("th", null, N(_(p).Thu), 1),
                    v("th", null, N(_(p).Fri), 1),
                    v("th", null, N(_(p).Sat), 1)
                  ])
                ]),
                v("tbody", null, [
                  (r(!0), d(L, null, V(m.value, (G) => (r(), d("tr", null, [
                    (r(!0), d(L, null, V(G, (se) => (r(), d("td", {
                      class: F(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ne) => b(se)
                    }, N(se.Number), 11, Sn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (r(), d("tfoot", Mn, [
                  v("tr", null, [
                    v("td", Dn, [
                      P(Xe, {
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
            v("div", wn, [
              P(_(St), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: A[3] || (A[3] = (G) => o.value = !1)
              }, null, 8, ["disabled"]),
              P(_($t), {
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
const Ct = /* @__PURE__ */ D({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: s, emit: t }) {
    let a, l;
    const n = na(T);
    Je([`${n}summernote-lite.min.css`]), [a, l] = Kt(() => import(`${n}summernote`)), await a, l();
    const o = J(null), i = e, c = t;
    return R(() => i.disabled, (p) => {
      o.value != null && $(o.value).summernote(p ? "disable" : "enable");
    }), s({
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
      setValue: (p) => {
        $(o.value).summernote("code", p);
      }
    }), pe(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(p) {
            c("valueChanged", { name: i.name, value: p });
          }
        }
      }), (i.disabled ?? !1) && $(o.value).summernote("disable");
    }), Qt(() => {
      $(o.value).summernote("destroy");
    }), (p, f) => (r(), d("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Te = /* @__PURE__ */ D({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const s = e, t = re(s, T);
    return (a, l) => (r(), E(ce(s.subtype), null, {
      default: I(() => [
        Y(N(_(t)(s.label)), 1)
      ]),
      _: 1
    }));
  }
}), Bn = ["name"], Pt = /* @__PURE__ */ D({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = J(null);
    return R(n, (c) => l("valueChanged", { name: a.name, value: c })), s({
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
    }), (c, u) => U((r(), d("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => n.value = h)
    }, null, 8, Bn)), [
      [$e, n.value]
    ]);
  }
}), xn = ["name", "disabled", "min", "max", "step"], Et = /* @__PURE__ */ D({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = J(null), o = () => {
      if (n.value === "")
        return null;
      let c = parseInt(n.value);
      return a.min !== void 0 && c < a.min * 1 || a.max !== void 0 && c > a.max * 1 ? null : c;
    }, i = (c) => {
      n.value = c === null ? "" : c.toString();
    };
    return R([n], (c) => l("valueChanged", { name: a.name, value: o() })), s({
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
      setValue: i
    }), (c, u) => U((r(), d("input", {
      type: "number",
      class: "input",
      name: c.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => n.value = h),
      disabled: c.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, xn)), [
      [$e, n.value]
    ]);
  }
}), Fn = ["id"], Le = /* @__PURE__ */ D({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const s = e, t = re(s, T);
    return (a, l) => (r(), d("p", {
      id: s.name
    }, N(_(t)(s.label)), 9, Fn));
  }
}), On = { class: "radio" }, Jn = ["name", "value", "disabled"], Nn = /* @__PURE__ */ v("br", null, null, -1), Tt = /* @__PURE__ */ D({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = K(T), n = k(() => z("Form.Error", l)), o = t, i = re(a, T), c = J(null), u = function() {
      return c.value;
    };
    R(c, (S) => {
      o("valueChanged", { name: a.name, value: u() });
    });
    const h = k(async () => {
      if (a.values == null)
        return [];
      {
        let S = await Qe(a.values);
        return c.value === null && S.some((m) => m.selected) && (c.value = S.find((m) => m.selected).value), S.map((m) => ({
          label: m.label,
          value: m.value,
          selected: c.value === m.value
        }));
      }
    }), p = (S) => {
      c.value = S;
    }, { hiddenValues: f, disabledValues: g } = Ke(a.name, T);
    return s({
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
      setValue: p
    }), (S, m) => (r(), d("div", null, [
      P(me, { promise: h.value }, {
        default: I(({ response: O }) => [
          S.values != null ? (r(!0), d(L, { key: 0 }, V(O, (M) => (r(), d(L, null, [
            U(v("label", On, [
              v("input", {
                type: "radio",
                name: a.name,
                value: M.value,
                class: "radio",
                disabled: a.disabled || _(g).some((b) => b === M.value.toString())
              }, null, 8, Jn),
              Y(" " + N(_(i)(M.label)), 1)
            ], 512), [
              [te, !_(f).some((b) => b === M.value.toString())]
            ]),
            Nn
          ], 64))), 256)) : x("", !0)
        ]),
        pending: I(() => [
          P(_(de))
        ]),
        rejected: I(() => [
          P(_(he), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), An = { class: "select" }, Cn = ["id", "name", "multiple", "disabled"], Pn = ["value", "selected", "disabled"], En = ["label"], Tn = ["value", "selected", "disabled"], Lt = (e, s, t) => {
  let a = {
    label: e === null ? s.label : `${e}->${s.label}`,
    values: []
  }, l = t.length;
  return t.push(a), s.values.forEach((n) => {
    n.values === void 0 ? a.values.push(n) : t = Lt(a.label, n, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, It = /* @__PURE__ */ D({
  __name: "select",
  props: {
    values: {},
    multiple: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean },
    translate: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = K(T), n = k(() => z("Form.Error", l)), o = t, i = re(a, T), c = J(null), u = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Qe(a.values), O = m.filter((b) => b.selected).map((b) => b.value);
        m.some((b) => b.values !== void 0) && m.filter((b) => b.values !== void 0).forEach((b) => {
          O = O.concat(
            b.values.filter((B) => B.selected).map((B) => B.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (m = m.map((b) => {
          let B = b;
          return B.values !== void 0 && (B.values = B.values.map((W) => (W.selected = c.value.some((y) => y === W.value), W))), B;
        }), c.value.forEach((b) => {
          m.some((B) => B.value !== void 0 && B.value === b || B.values !== void 0 && B.values.some((W) => W.value === b)) || m.push({
            label: b,
            value: b
          });
        }));
        let M = [];
        return m.forEach((b) => {
          b.values === void 0 ? M.push(b) : M = Lt(b.label, b, M);
        }), M;
      }
    }), p = () => c.value == null || c.value.length == 0 ? null : a.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    R(c, () => {
      u.value || o("valueChanged", { name: a.name, value: p() });
    }), R(u, (m) => {
      m || o("valueChanged", { name: a.name, value: p() });
    });
    const f = (m) => {
      u.value = !0, m != null ? a.multiple ? c.value = Array.isArray(m) ? m : [m] : c.value = m : a.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: g, disabledValues: S } = Ke(a.name, T);
    return s({
      /**
       * Gets the current value 
       */
      getValue: p,
      /**
       * Sets the current value
       * 
       * @param value any|any[]|null
       * @returns void
       */
      setValue: f
    }), (m, O) => (r(), d("div", An, [
      h.value != null ? (r(), E(me, {
        key: 0,
        promise: h.value
      }, {
        default: I(({ response: M }) => [
          U(v("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: F([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": O[0] || (O[0] = (b) => c.value = b),
            disabled: a.disabled
          }, [
            M != null ? (r(!0), d(L, { key: 0 }, V(M, (b) => (r(), d(L, null, [
              b.values == null ? U((r(), d("option", {
                key: 0,
                value: b.value,
                selected: b.selected,
                disabled: _(S).some((B) => B === b.value.toString())
              }, N(_(i)(b.label)), 9, Pn)), [
                [te, !_(g).some((B) => B === b.value.toString())]
              ]) : x("", !0),
              b.values != null ? (r(), d("optgroup", {
                key: 1,
                label: _(i)(b.label)
              }, [
                (r(!0), d(L, null, V(b.values, (B) => U((r(), d("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: _(S).some((W) => W === B.value.toString())
                }, N(_(i)(B.label)), 9, Tn)), [
                  [te, !_(g).some((W) => W === B.value.toString())]
                ])), 256))
              ], 8, En)) : x("", !0)
            ], 64))), 256)) : x("", !0)
          ], 10, Cn), [
            [Xt, c.value]
          ])
        ]),
        pending: I(() => [
          P(_(de))
        ]),
        rejected: I(() => [
          P(_(he), {
            type: _(le).danger,
            message: n.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : x("", !0)
    ]));
  }
}), Ln = { class: "field" }, In = ["id", "name", "disabled"], Vn = ["for"], zn = {
  key: 0,
  class: "help is-danger"
}, Vt = /* @__PURE__ */ D({
  __name: "switch",
  props: {
    label: {},
    required: { type: Boolean },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = re(a, T), o = J(!1);
    return R(o, (u) => l("valueChanged", { name: a.name, value: u })), s({
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
    }), (u, h) => (r(), d("div", Ln, [
      U(v("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (p) => o.value = p),
        disabled: a.disabled
      }, null, 8, In), [
        [Ie, o.value]
      ]),
      v("label", { for: u.name }, [
        Y(N(_(n)(a.label)) + " ", 1),
        a.required ? (r(), d("span", zn, "*")) : x("", !0)
      ], 8, Vn)
    ]));
  }
}), Wn = ["type", "name", "disabled", "maxlength"], zt = /* @__PURE__ */ D({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = J(null);
    return R(n, (c) => l("valueChanged", { name: a.name, value: c })), s({
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
    }), (c, u) => U((r(), d("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => n.value = h)
    }, null, 8, Wn)), [
      [Zt, n.value]
    ]);
  }
}), Rn = ["name", "rows", "cols", "maxlength", "disabled"], Wt = 9, ye = String.fromCharCode(Wt), we = String.fromCharCode(10), Rt = /* @__PURE__ */ D({
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
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = J(null);
    R(n, (u) => {
      l("valueChanged", { name: a.name, value: u });
    });
    const o = () => n.value, i = (u) => {
      n.value = u;
    };
    s({
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
      setValue: i
    });
    const c = (u) => {
      if (a.supportsTab) {
        let h = o();
        switch (u.keyCode) {
          case Wt:
            let p = u.target.selectionStart, f = u.target.selectionEnd, g = h.substring(0, p), S = h.length > f ? h.substring(f) : "", m = p == f ? "" : h.substring(p, f);
            if (m.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? m.startsWith(ye) ? (m = m.substring(1), p--) : g.endsWith(ye) && (g = g.substring(0, g.length - 1), p--) : m = ye + m;
            else {
              let O = !1;
              m.endsWith(we) && (O = !0, m = m.substring(0, m.length - 1));
              let M = m.split(we);
              m = "", u.shiftKey && g.endsWith(ye) && (g = g.substring(0, g.length - 1), p--), M.forEach((b, B) => {
                u.shiftKey && b.startsWith(ye) ? b = b.substring(1) : u.shiftKey || (b = ye + b), m += b + (B === M.length - 1 ? "" : we);
              }), O && (m += we);
            }
            return h = g + m + S, p += m.length == 1 ? 1 : 0, f = p + (m.length == 1 ? 0 : m.length), i(h), u.target.selectionStart = p, u.target.selectionEnd = f, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, h) => U((r(), d("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: c,
      "onUpdate:modelValue": h[0] || (h[0] = (p) => n.value = p)
    }, null, 40, Rn)), [
      [$e, n.value]
    ]);
  }
}), Un = { class: "columns" }, Ut = /* @__PURE__ */ D({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = a.inputs.map((p) => J(null)), o = T(Ye), i = T(qe);
    return s({
      /**
       * Called to set the value for a component in the row
       * 
       * @param value any
       */
      setValue: (p) => {
        n.forEach((f, g) => {
          switch (a.inputs[g].type) {
            case "subform":
              f.value.setValue(p);
              break;
            default:
              f.value.setValue !== void 0 && (p === null ? f.value.setValue(null) : Object.keys(p).some((S) => S === f.value.fieldName) ? f.value.setValue(p[f.value.fieldName]) : Object.keys(p).some((S) => S === f.value.altFieldName) && f.value.setValue(p[f.value.altFieldName]));
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
        return n.forEach((f) => {
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
      isValid: () => !n.some((p) => !(p.value.isValid === void 0 || p.value.isValid()))
    }), (p, f) => (r(), d("div", Un, [
      (r(!0), d(L, null, V(a.inputs, (g, S) => (r(), E(jt, {
        ref_for: !0,
        ref: (m) => _(n)[S].value = m,
        input: g,
        onValueChanged: f[0] || (f[0] = (m) => l("valueChanged", m)),
        onButtonClicked: f[1] || (f[1] = (m) => l("buttonClicked", m)),
        disabled: a.disabled || _(i).some((m) => m === g.name),
        hidden: _(o).some((m) => m === g.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), jn = ["id", "name"], Gn = /* @__PURE__ */ D({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t;
    let n = [];
    J(!1);
    const o = k(() => {
      let h = Ft(a.fields);
      return n = h.map((p) => J(null)), h;
    });
    return s({
      /**
       * Called to set the value of 1 or more copmonents inside this sub form
       * 
       * @param value any
       */
      setValue: (h) => n.forEach((p) => p.setValue(h)),
      /**
       * Called to get the value of this of all the components inside this subform.  
       * Returns an object where each propertyName is the name of the field and it's value is the value.
       */
      getValue: () => {
        var h = {};
        return n.forEach((p) => {
          h = $.extend(h, p.getValue());
        }), h;
      },
      /**
       * Called to see if this sub form is valid.  It returns the result of true if all the components return true from their isValid calls
       */
      isValid: () => !n.some((h) => !(h.isValid === void 0 || h.isValid()))
    }), (h, p) => U((r(), d("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (r(!0), d(L, null, V(o.value, (f, g) => (r(), E(Ut, {
        ref_for: !0,
        ref: (S) => _(n)[g] = S,
        inputs: f,
        disabled: a.disabled,
        onValueChanged: p[0] || (p[0] = (S) => l("valueChanged", S)),
        onButtonClicked: p[1] || (p[1] = (S) => l("buttonClicked", S))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, jn)), [
      [te, !a.hidden]
    ]);
  }
}), Hn = ["for"], Yn = {
  key: 0,
  class: "help is-danger"
}, qn = { class: "control" }, Kn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Qn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], jt = /* @__PURE__ */ D({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: s, emit: t }) {
    const a = J(null), l = t, n = e, o = re(n, T), i = Be(J(n.input.type)), c = k(() => {
      let y = null;
      switch (n.input.type) {
        case "autocomplete":
          y = Ot;
          break;
        case "button":
          y = Ee;
          break;
        case "checkbox-group":
          y = Jt;
          break;
        case "checkbox":
          y = Nt;
          break;
        case "date":
          y = At;
          break;
        case "full-editor":
          y = Ct;
          break;
        case "header":
          y = Te;
          break;
        case "hidden":
          y = Pt;
          break;
        case "number":
          y = Et;
          break;
        case "paragraph":
          y = Le;
          break;
        case "radio-group":
          y = Tt;
          break;
        case "select":
          y = It;
          break;
        case "switch":
          y = Vt;
          break;
        case "text":
          y = zt;
          break;
        case "textarea":
          y = Rt;
          break;
        case "time":
          y = Xe;
          break;
        case "subform":
          y = Gn;
          break;
      }
      return y;
    }), u = function(y) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(y);
    };
    pe(() => {
      a.value !== null && n.input.value !== void 0 && n.input.value !== null && u(n.input.value);
    });
    const h = k(() => n.input.disabled ?? n.disabled ?? !1), p = k(() => `is-${n.input.form_columns ?? 12}`), f = k(() => n.input.name), g = k(() => n.input.processVariable ?? n.input.name), S = k(() => Kn.some((y) => y === n.input.type) && n.input.label !== void 0 && n.input.label !== null), m = k(() => {
      let y = $.extend({}, n.input);
      return delete y.type, y.className != null && delete y.className, y.form_columns != null && delete y.form_columns, Qn.some((ne) => ne === n.input.type) && (y.translate = n.translate), y.disabled = n.disabled, y;
    }), O = (y) => {
      if (y.value !== void 0 && y.value !== null && Array.isArray(y.value)) {
        let ne = [...y.value];
        y.value = ne;
      }
      l("valueChanged", y);
    }, M = (y) => {
      l("buttonClicked", y);
    }, b = () => {
      if (a.value != null && a.value.getValue != null) {
        let y = a.value.getValue();
        return y != null && Array.isArray(y) ? [...y] : y;
      }
      return null;
    };
    return s({
      /**
       * Called to set the value for this given form component
       * 
       * @param value any
       */
      setValue: u,
      /**
       * Property that returns the name of this given component
       */
      fieldName: f,
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
      getValue: b,
      /**
       * Called to see if this component is valid.
       * If this is a basic component, it ensures it has a value if required.
       * If this is a subform it returns the result from the subform isValid call.
       */
      isValid: () => {
        if (n.input.type === "subform" && a.value !== null)
          return a.value.isValid();
        if (n.input.required ?? !1) {
          let y = b();
          return y != null && (Array.isArray(y) ? y.length > 0 : !0) && y.toString() !== "";
        }
        return !0;
      },
      /**
       * Called to set the values of a subform component, this will throw an error if this component is not a subform.
       * 
       * @param values any|null
       */
      setValues: (y) => {
        if (n.input.type === "subform" && a.value !== null)
          a.value.setValues(y);
        else
          throw "unable to call set values on any form element except a subform";
      }
    }), (y, ne) => U((r(), d("div", {
      class: F(["field column", [p.value]])
    }, [
      n.input.type == "header" ? (r(), E(Te, {
        key: 0,
        subtype: n.input.subtype,
        label: n.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : n.input.type == "paragraph" ? (r(), E(Le, {
        key: 1,
        name: n.input.name,
        label: n.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : n.input.type == "button" ? (r(), E(Ee, {
        key: 2,
        name: n.input.name,
        sstyle: n.input.style,
        className: n.input.className,
        icon: n.input.icon,
        label: n.input.label,
        disabled: h.value,
        onButtonClicked: M,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (r(), d(L, { key: 3 }, [
        S.value ? (r(), d("label", {
          key: 0,
          class: "label",
          for: n.input.name
        }, [
          Y(N(_(o)(n.input.label)) + " ", 1),
          n.input.required ? (r(), d("span", Yn, "*")) : x("", !0)
        ], 8, Hn)) : x("", !0),
        v("div", qn, [
          (r(), E(ce(c.value), Q(m.value, {
            onValueChanged: O,
            ref_key: "inp",
            ref: a
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [te, !n.hidden]
    ]);
  }
});
const Xn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Zn = /* @__PURE__ */ D({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: s, emit: t }) {
    const a = e, l = t, n = re(a, T);
    Ae("Translate", (M) => n.value(M));
    let o = [];
    const i = k(() => {
      if (a.elements != null) {
        let M = Ft(a.elements);
        return o = M.map((b) => J(null)), M;
      } else
        return null;
    }), c = () => {
      let M = {};
      return o.forEach((b) => {
        M = $.extend(M, b.getValue());
      }), M;
    }, u = (M) => {
      o.forEach((b) => b.setValue(M));
    }, h = () => !o.some((M) => !(M.isValid === void 0 || M.isValid())), p = J([]);
    Ae(Ye, Be(p));
    const f = (M) => {
      Array.isArray(M) ? p.value = [...p.value, ...M] : p.value.push(M);
    }, g = (M) => {
      Array.isArray(M) ? p.value = p.value.filter((b) => M.indexOf(b) >= 0) : p.value = p.value.filter((b) => b !== M);
    }, S = J([]);
    return Ae(qe, Be(S)), s({
      /**
       * Returns the values of the given form elements as an object where the property name is the name of the form element and the property value is 
       * that elements value
       */
      getValues: c,
      /**
       * Called to set the values on the form elements using an object where the property name is the name of the form element
       * 
       * @param values any
       */
      setValues: u,
      /**
       * Called to see if the form is valid.  Returns a boolean value that is true if all required fields have a value.
       */
      isValid: h,
      /**
       * Called to hide 1 or more fields in the form
       * 
       * @param name string|string[]
       */
      hideField: f,
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
      disableField: (M) => {
        Array.isArray(M) ? S.value = [...S.value, ...M] : S.value.push(M);
      },
      /**
       * Called to enable 1 or more disabled fields in the form
       * 
       * @param name string|string[]
       */
      enableField: (M) => {
        Array.isArray(M) ? S.value = S.value.filter((b) => M.indexOf(b) >= 0) : S.value = S.value.filter((b) => b !== M);
      }
    }), (M, b) => (r(), d("form", Xn, [
      i.value != null ? (r(!0), d(L, { key: 0 }, V(i.value, (B, W) => (r(), E(Ut, {
        ref_for: !0,
        ref: (y) => _(o)[W] = y,
        inputs: B,
        key: W,
        onValueChanged: b[0] || (b[0] = (y) => l("valueChanged", y)),
        onButtonClicked: b[1] || (b[1] = (y) => l("buttonClicked", y)),
        disabled: M.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : x("", !0)
    ]));
  }
}), es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Ot,
  Button: Ee,
  Checkbox: Nt,
  CheckboxGroup: Jt,
  ComponentForm: Zn,
  DateField: At,
  FormComponent: jt,
  FullEditor: Ct,
  Header: Te,
  Hidden: Pt,
  NumberField: Et,
  Paragraph: Le,
  RadioGroup: Tt,
  Select: It,
  Switch: Vt,
  Text: zt,
  TextArea: Rt,
  Time: Xe
}, Symbol.toStringTag, { value: "Module" })), ts = { class: "hero-body" }, as = { class: "title" }, ls = {
  key: 0,
  class: "subtitle"
}, ns = /* @__PURE__ */ D({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const s = e;
    return (t, a) => (r(), d("section", {
      class: F(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + s.type])
    }, [
      v("div", ts, [
        v("p", as, N(s.title), 1),
        s.subtitle ? (r(), d("p", ls, N(s.subtitle), 1)) : x("", !0)
      ])
    ], 2));
  }
}), ss = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of s)
    t[a] = l;
  return t;
}, os = {}, rs = { class: "box" };
function is(e, s) {
  return r(), d("div", rs, [
    C(e.$slots, "default")
  ]);
}
const us = /* @__PURE__ */ ss(os, [["render", is]]), ds = { key: 0 }, cs = ["onClick"], ps = /* @__PURE__ */ D({
  __name: "breadcrumbs",
  props: {
    breadCrumbs: {},
    alignment: { default: Fe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const s = e, t = k(() => {
      let l = ["breadcrumb"];
      return s.alignment && s.alignment !== Fe.left && l.push(`is-${s.alignment}`), s.size && s.size !== X.normal && l.push(`is-${s.size}`), s.seperator && l.push(`has-${s.seperator}-seperator`), l;
    }), a = (l) => {
      l !== void 0 && l();
    };
    return (l, n) => (r(), d("nav", {
      class: F(t.value),
      "aria-label": "breadcrumbs"
    }, [
      s.breadCrumbs !== null ? (r(), d("ul", ds, [
        (r(!0), d(L, null, V(s.breadCrumbs, (o) => (r(), d("li", {
          class: F({ "is-active": o.active })
        }, [
          v("a", {
            onClick: (i) => a(o.onClick)
          }, [
            o.icon ? (r(), d("span", {
              key: 0,
              class: F(["icon", o.onClick ? "is-clickable" : ""])
            }, [
              P(_(j), {
                icon: o.icon
              }, null, 8, ["icon"])
            ], 2)) : x("", !0),
            Y(" " + N(o.title), 1)
          ], 8, cs)
        ], 2))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), hs = {
  key: 0,
  class: "card-icon"
}, ms = { class: "card-icon-wrapper" }, fs = {
  key: 1,
  class: "card-header"
}, bs = {
  key: 2,
  class: "card-content"
}, vs = {
  key: 3,
  class: "card-footer"
}, Gt = /* @__PURE__ */ D({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const s = ve(), t = e, a = {
      addon_class: "card-footer-item"
    }, l = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (n, o) => (r(), d("div", {
      class: F(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon !== null ? (r(), d("div", hs, [
        v("div", ms, [
          P(j, {
            icon: t.icon,
            size: _(ue).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : x("", !0),
      _(s).header ? (r(), d("div", fs, [
        C(n.$slots, "header", oe(ie(l)))
      ])) : x("", !0),
      _(s).content ? (r(), d("div", bs, [
        C(n.$slots, "content")
      ])) : x("", !0),
      _(s).footer ? (r(), d("div", vs, [
        C(n.$slots, "footer", oe(ie(a)))
      ])) : x("", !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ D({
  __name: "column-container",
  props: {
    modifiers: {},
    columns: {}
  },
  setup(e) {
    const s = ve(), t = e, a = k(() => {
      let n = ["columns"];
      return t.modifiers !== void 0 && t.modifiers !== null && (n = n.concat(t.modifiers.map((o) => `is-${o}`))), n;
    }), l = k(() => t.columns.map((n, o) => {
      let i = ["column"];
      return n.size && i.push(`is-${n.size}`), n.offset && i.push(`is-offset-${n.offset}`), n.border && (n.border.some((c) => c === Re.all) ? i.push("is-bordered") : n.border.forEach((c) => i.push(`is-bordered-${c}`))), {
        name: n.name ?? `col-${o}`,
        class: i
      };
    }));
    return (n, o) => (r(), d("div", {
      class: F(a.value)
    }, [
      (r(!0), d(L, null, V(l.value, (i, c) => (r(), d("div", {
        class: F(i.class)
      }, [
        _(s)[i.name] ? C(n.$slots, i.name, { key: 0 }) : x("", !0)
      ], 2))), 256))
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
  emits: ["close"],
  setup(e, { emit: s }) {
    const t = e;
    return (a, l) => (r(), d("div", {
      class: F({ modal: !0, "is-active": t.display }),
      style: Ve(`z-index:${t.z_index}`)
    }, [
      _s,
      v("div", ys, [
        C(a.$slots, "default")
      ]),
      t.has_close ? (r(), d("button", ks)) : x("", !0)
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
    max_width: { type: Boolean },
    max_height: { type: Boolean },
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    icon: { default: null }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const t = ve(), a = e, l = s, n = {
      addon_class: "card-footer-item"
    }, o = {
      header_class: "modal-card-title has-text-centered",
      addon_class: "card-footer-item"
    }, i = k(() => {
      var c = [];
      return a.full_width && c.push("is-fullwidth"), a.full_height && c.push("is-fullheight"), a.max_width && c.push("is-maxwidth"), a.max_height && c.push("is-maxheight"), c;
    });
    return (c, u) => (r(), d("div", {
      class: F(["modal", { "is-active": a.show }])
    }, [
      Ss,
      v("div", {
        class: F(["modal-card", i.value])
      }, [
        a.icon !== null ? (r(), d("div", Ms, [
          v("div", Ds, [
            P(j, {
              icon: a.icon,
              size: _(ue).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : x("", !0),
        _(t).header ? (r(), d("div", ws, [
          C(c.$slots, "header", oe(ie(o))),
          c.has_close ? (r(), d("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (h) => l("close"))
          })) : x("", !0)
        ])) : x("", !0),
        _(t).content ? (r(), d("div", Bs, [
          C(c.$slots, "content")
        ])) : x("", !0),
        _(t).footer ? (r(), d("div", xs, [
          C(c.$slots, "footer", oe(ie(n)))
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
    const s = ve(), t = e, a = k(() => t.block_names ?? ["default"]), l = k(() => {
      let n = [];
      return t.type && n.push(`is-${t.type}`), t.full_width && n.push("is-fullwidth"), t.full_height && n.push("is-fullheight"), n;
    });
    return (n, o) => (r(), d("div", {
      class: F(["panel", l.value])
    }, [
      _(s).header ? U((r(), d("div", Os, [
        C(n.$slots, "header")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("header")]
      ]) : x("", !0),
      _(s).tabs ? U((r(), d("div", Js, [
        C(n.$slots, "tabs")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : x("", !0),
      (r(!0), d(L, null, V(a.value, (i) => (r(), d(L, null, [
        _(s)[i] ? U((r(), d("div", Ns, [
          C(n.$slots, i)
        ], 512)), [
          [te, !(t.hidden_sections ?? []).includes(i)]
        ]) : x("", !0)
      ], 64))), 256))
    ], 2));
  }
}), Cs = { key: 0 }, Ps = { key: 1 }, Es = { key: 2 }, Ht = /* @__PURE__ */ D({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const s = ve(), t = e, a = k(() => {
      let n = [];
      return t.scrollable && n.push("table-container"), t.fixed_header && t.scrollable && n.push("is-fixed"), n;
    }), l = k(() => {
      let n = ["table", "is-striped", "is-hoverable"];
      return t.fixed_header && !t.scrollable && n.push("is-fixed"), t.full_width && n.push("is-fullwidth"), t.narrow && n.push("is-narrow"), n;
    });
    return (n, o) => (r(), d("div", {
      class: F(a.value)
    }, [
      v("table", {
        class: F(l.value)
      }, [
        _(s).thead ? (r(), d("thead", Cs, [
          C(n.$slots, "thead")
        ])) : x("", !0),
        _(s).tbody ? (r(), d("tbody", Ps, [
          C(n.$slots, "tbody")
        ])) : x("", !0),
        _(s).tfoot ? (r(), d("tfoot", Es, [
          C(n.$slots, "tfoot")
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
    const s = e, t = k(() => {
      let l = ["tabs"];
      return s.alignment ? l.push(`is-${s.alignment}`) : l.push("is-left"), s.type && l.push(`is-${s.type}`), s.full_width && l.push("is-fullwidth"), l;
    }), a = (l, n) => {
      (n.href === null || n.href === void 0) && n.onClick !== void 0 && (l.preventDefault(), n.onClick());
    };
    return (l, n) => (r(), d("div", {
      class: F(t.value)
    }, [
      v("ul", null, [
        P(_(me), {
          promise: s.tabs
        }, {
          default: I(({ response: o }) => [
            (r(!0), d(L, null, V(o, (i) => (r(), d("li", {
              class: F({ "is-active": i.active })
            }, [
              v("a", {
                href: i.href,
                onClick: (c) => a(c, i)
              }, [
                i.icon ? (r(), d("span", Ls, [
                  P(_(j), {
                    icon: i.icon
                  }, null, 8, ["icon"])
                ])) : x("", !0),
                v("span", null, N(i.title), 1)
              ], 8, Ts)
            ], 2))), 256))
          ]),
          pending: I(() => [
            v("li", Is, [
              P(_(de), {
                size: _(X).small
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
  setup(e, { emit: s }) {
    const t = ve(), a = {
      addon_class: ""
    }, l = {
      header_class: "slideout-title has-text-centered",
      addon_class: ""
    }, n = e, o = s, i = k(() => {
      let c = ["slideout"];
      return n.show && c.push("is-active"), n.type !== void 0 && n.type !== null && c.push(`is-${n.type}`), n.full_width && c.push("is-fullwidth"), n.not_animated && c.push("no-animation"), c;
    });
    return (c, u) => (r(), d("div", {
      class: F(i.value)
    }, [
      v("div", {
        class: "slideout-background",
        onClick: u[0] || (u[0] = (h) => o("close"))
      }),
      v("div", zs, [
        c.has_close ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: u[1] || (u[1] = (h) => o("close"))
        })) : x("", !0),
        _(t).header ? (r(), d("div", Ws, [
          C(c.$slots, "header", oe(ie(l)))
        ])) : x("", !0),
        v("div", Rs, [
          _(t).content ? C(c.$slots, "content", { key: 0 }) : x("", !0),
          C(c.$slots, "default")
        ]),
        _(t).footer ? (r(), d("div", Us, [
          C(c.$slots, "footer", oe(ie(a)))
        ])) : x("", !0)
      ])
    ], 2));
  }
}), Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ns,
  Box: us,
  Breadcrumbs: ps,
  Card: Gt,
  ColumnContainer: gs,
  List: xt,
  Modal: $s,
  ModalCard: Fs,
  Panel: As,
  SlideOut: js,
  Table: Ht,
  Tabs: Vs
}, Symbol.toStringTag, { value: "Module" }));
const st = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Je(`${st.substring(0, st.lastIndexOf("/"))}/style.css`);
const Hs = Object.values(He).filter((e, s, t) => t.indexOf(e) === s), Ys = (e) => {
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
    legend_position: { default: We.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: s }) {
    const t = `${ra(T)}chart.umd.min.js`, a = J(null), l = e, n = s;
    let o = null;
    const i = () => {
      o != null && o.update();
    }, c = k(() => {
      var u = "";
      return l.width && (u = `width:${l.width}px;`), l.height && (u += `height:${l.height}px;`), u;
    });
    return R(() => l.type, (u) => {
      o != null && (o.type = u ?? "line");
    }), R(
      () => l.labels,
      (u) => {
        o != null && (o.data.labels = u, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), R(
      () => l.datasets,
      (u) => {
        o != null && (o.data.datasets = u, (l.show_refresh == null || !l.show_refresh) && i());
      },
      { deep: !0 }
    ), pe(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legend_position}`,
            labels: {
              filter: (p, f) => p.text != null
            },
            onClick: function(p, f) {
              n("legendItemClick", o, f);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: h } = await ze(t, ["Chart"]);
      o = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), o.update();
    }), (u, h) => (r(), E(Gt, null, it({
      content: I(() => [
        v("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ve(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: I((p) => [
          v("h3", {
            class: F(p.header_class)
          }, N(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.show_refresh != null && l.show_refresh != null && l.show_refresh ? {
        name: "footer",
        fn: I((p) => [
          P(Mt, {
            class: F(p.addon_class),
            onClick: i
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
    value: { default: "" }
  },
  emits: ["valueChanged"],
  setup(e, { expose: s, emit: t }) {
    const a = `${ia(T)}src-noconflict/ace.js`, l = e, n = t, o = J(null), i = J(null), c = function() {
      return i.value.getValue() == "" ? null : i.value.getValue();
    }, u = function(p) {
      i.value.setValue(p ?? "");
    };
    R(() => l.readonly, (p) => {
      i.value.setReadOnly(p == null || p == null ? !1 : p);
    }), R(() => l.value, (p) => {
      u(p);
    }), R(() => l.language, (p) => {
      i.value.getSession().setMode(p);
    });
    const h = k(() => {
      let p = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let f = 0; f < l.autocompletes.length; f++)
          l.autocompletes[f].method.indexOf(".") >= 0 ? p = Math.min(p, l.autocompletes[f].method.indexOf(".")) : p = Math.min(p, l.autocompletes[f].method.length);
        if (p > 3 && l.autocompletes.length > 0) {
          let f = !0, g = l.autocompletes[0].method.substring(0, 3);
          for (let S = 0; S < l.autocompletes.length; S++)
            if (l.autocompletes[S].method.substring(0, 3) != g) {
              f = !1;
              break;
            }
          f && (p = 3);
        }
      }
      return p;
    });
    return s({
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
    }), pe(async () => {
      const { ace: p } = await ze(a, ["ace"]);
      i.value = ea(p.edit(o.value.$el, {
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
    }), (p, f) => (r(), d("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), Xs = { key: 0 }, Zs = { colspan: "100%" }, eo = ["colspan", "rowspan"], to = ["onClick"], ao = { class: "icon" }, lo = { key: 0 }, no = { colspan: "100%" }, so = ["colspan", "rowspan", "onClick"], oo = { key: 1 }, ro = { colspan: "100%" }, io = /* @__PURE__ */ D({
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
  setup(e, { emit: s }) {
    const t = ve(), a = e, l = s, n = {
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
    }, i = k(() => !!(a.has_previous || a.has_more || a.current_page !== void 0 && a.total_pages !== void 0 && ae(a.total_pages) > 1)), c = k(() => a.column_rows === void 0 || a.column_rows.length === 0 ? a.columns : a.column_rows.map((f) => f.map((g) => a.columns.filter((S) => S.some((m) => m.id === g))[0].find((S) => S.id === g)))), u = (f) => {
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
    }, p = (f, g, S, m) => {
      let O = "";
      if ((g.cellClass || g.getCellColor) && (g.cellClass && (O += `${g.cellClass}`), g.getCellColor)) {
        let M = g.getCellColor(f, S, m);
        M && (O += ` is-${M}`);
      }
      return O === "" ? null : O;
    };
    return (f, g) => (r(), E(Ht, oe(ie(n)), it({
      thead: I(() => [
        a.has_filter ?? !1 ? (r(), d("tr", Xs, [
          v("th", Zs, [
            P(Dt, {
              onFilter: g[0] || (g[0] = (S) => l("filter", S))
            })
          ])
        ])) : x("", !0),
        (r(!0), d(L, null, V(a.columns, (S) => (r(), d("tr", null, [
          (r(!0), d(L, null, V(S, (m) => (r(), d("th", {
            colspan: m.headerColspan,
            rowspan: m.headerRowspan,
            class: F(m.headerClass)
          }, [
            C(f.$slots, `head-${m.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (m.canSort ?? !1) && m.id === a.current_sort.column ? (r(), d("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (O) => u(m.id)
              }, [
                v("span", ao, [
                  P(j, { icon: "arrow-down" })
                ]),
                v("span", null, N(m.title), 1)
              ], 8, to)) : (r(), d(L, { key: 1 }, [
                Y(N(m.title), 1)
              ], 64))
            ])
          ], 10, eo))), 256))
        ]))), 256))
      ]),
      tbody: I(() => [
        a.data === null || a.data.length === 0 ? (r(), d("tr", lo, [
          v("td", no, [
            a.data === null ? (r(), E(de, { key: 0 })) : (r(), E(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), d(L, { key: 1 }, V(a.data, (S, m) => (r(), d(L, null, [
          (r(!0), d(L, null, V(c.value.filter((O) => O.some((M) => !(M.headerOnly ?? !1))), (O, M) => (r(), d("tr", {
            key: `row-${m}-${M}`,
            class: F(h(m, S))
          }, [
            (r(!0), d(L, null, V(O.filter((b) => !(b.headerOnly ?? !1)), (b) => (r(), d("td", {
              key: `data-${m}-${M}`,
              colspan: b.dataColspan,
              rowspan: b.dataRowspan,
              class: F(p(m, b, S, b.propertyName ? S[b.propertyName] : void 0)),
              onClick: (B) => l("cellClicked", { rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })
            }, [
              C(f.$slots, `body-${b.id}`, oe(ie({ rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })), () => [
                Y(N(b.propertyName ? S[b.propertyName] : null), 1)
              ])
            ], 10, so))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      i.value || _(t).tfoot_head || _(t).tfoot_bottom ? {
        name: "tfoot",
        fn: I(() => [
          _(t).tfoot_head ? C(f.$slots, "tfoot_head", { key: 0 }) : x("", !0),
          i.value ? (r(), d("tr", oo, [
            v("td", ro, [
              P(wt, Q(o, {
                onMoveForward: g[1] || (g[1] = (S) => l("moveForward")),
                onMoveBack: g[2] || (g[2] = (S) => l("moveBack")),
                onGoToPage: g[3] || (g[3] = (S) => l("goToPage", S))
              }), null, 16)
            ])
          ])) : x("", !0),
          _(t).tfoot_bottom ? C(f.$slots, "tfoot_bottom", { key: 2 }) : x("", !0)
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
} = Il, { DraggableItem: Yo, DropZone: qo, Sortable: Ko } = jl, {
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
} = es, {
  Banner: mr,
  Box: fr,
  Breadcrumbs: br,
  Card: vr,
  ColumnContainer: gr,
  List: _r,
  ModalCard: yr,
  Panel: kr,
  Table: $r,
  Tabs: Sr,
  Modal: Mr,
  SlideOut: Dr
} = Gs, { AVAIABLE_SKINS: wr, setSkin: Br } = qs, {
  ColorTypes: xr,
  NoticeTypes: Fr,
  Sizes: Or,
  AnimationSpeeds: Jr,
  AnimationTypes: Nr,
  IconSizes: Ar,
  ChartLegendPositions: Cr,
  ChartTypes: Pr,
  DropZoneQuadrants: Er,
  BreadCrumbAlignments: Tr,
  BreadCrumbSeperators: Lr,
  ColumnContainerModifiers: Ir,
  ColumnSizes: Vr,
  ColumnOffsetSizes: zr,
  BorderTypes: Wr,
  TabAlignments: Rr,
  TabStyles: Ur,
  TileSizes: jr,
  TileTypes: Gr,
  FixedNavBarPositions: Hr,
  FixedMenuPositions: Yr,
  BadgePositions: qr,
  ToolTipPositions: Kr,
  ToolTipTextAlignments: Qr,
  ButtonAlignments: Xr
} = aa, { loadNonEs6Module: Zr } = ta, { Chart: ei, CodeWriter: ti, Grid: ai } = uo;
export {
  wr as AVAIABLE_SKINS,
  ho as Animation,
  Jr as AnimationSpeeds,
  Nr as AnimationTypes,
  Qo as AutoComplete,
  jo as Badge,
  qr as BadgePositions,
  mr as Banner,
  Wr as BorderTypes,
  fr as Box,
  Tr as BreadCrumbAlignments,
  Lr as BreadCrumbSeperators,
  br as Breadcrumbs,
  mo as Button,
  bo as ButtonAdd,
  Xr as ButtonAlignments,
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
  ei as Chart,
  Cr as ChartLegendPositions,
  Pr as ChartTypes,
  xo as CheckMark,
  Zo as Checkbox,
  Xo as CheckboxGroup,
  ti as CodeWriter,
  xr as ColorTypes,
  gr as ColumnContainer,
  Ir as ColumnContainerModifiers,
  zr as ColumnOffsetSizes,
  Vr as ColumnSizes,
  tr as ComponentForm,
  er as DateField,
  Yo as DraggableItem,
  Fo as DropDown,
  qo as DropZone,
  Er as DropZoneQuadrants,
  Oo as DynamicSlot,
  Jo as Filter,
  Yr as FixedMenuPositions,
  Hr as FixedNavBarPositions,
  hr as FormComponent,
  ar as FullEditor,
  ai as Grid,
  lr as Header,
  nr as Hidden,
  No as Icon,
  Ar as IconSizes,
  _r as List,
  Vo as Menu,
  Ro as MenuEntry,
  zo as MenuLabel,
  Wo as MenuList,
  Ao as Message,
  Mr as Modal,
  yr as ModalCard,
  Io as NavBar,
  Fr as NoticeTypes,
  Co as Notification,
  sr as NumberField,
  Po as PageNotification,
  Eo as Pagination,
  kr as Panel,
  or as Paragraph,
  Lo as Progress,
  To as Promised,
  rr as RadioGroup,
  ir as Select,
  Or as Sizes,
  Dr as SlideOut,
  Ko as Sortable,
  ur as Switch,
  Rr as TabAlignments,
  Ur as TabStyles,
  $r as Table,
  Sr as Tabs,
  Go as Tag,
  Ho as Tags,
  dr as Text,
  cr as TextArea,
  jr as TileSizes,
  Gr as TileTypes,
  pr as Time,
  Uo as ToolTip,
  Kr as ToolTipPositions,
  Qr as ToolTipTextAlignments,
  Zr as loadNonEs6Module,
  Br as setSkin
};
//# sourceMappingURL=components.esm.js.map
