import { computed as k, defineComponent as D, openBlock as r, createBlock as P, Transition as Yt, withCtx as L, renderSlot as T, createElementBlock as d, normalizeClass as F, inject as E, ref as J, watch as R, createVNode as C, createCommentVNode as x, toDisplayString as N, mergeProps as Q, toValue as ae, createElementVNode as v, unref as y, Fragment as I, renderList as W, resolveDynamicComponent as ce, createTextVNode as Y, onMounted as pe, normalizeProps as oe, guardReactiveProps as ie, withDirectives as U, vModelText as ke, vShow as te, toRefs as qt, reactive as ot, resolveComponent as rt, vModelCheckbox as Ve, normalizeStyle as We, readonly as xe, withAsyncContext as Kt, onUnmounted as Qt, vModelSelect as Xt, vModelDynamic as Zt, provide as Ce, useSlots as $e, createSlots as it, markRaw as ea } from "vue";
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
}), fe = [], ze = (e, n) => new Promise((t) => {
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
}), ut = () => {
  var t;
  let e, n = "";
  return typeof self.crypto < "u" && (e = self.crypto, n = (t = e.randomUUID) == null ? void 0 : t.call(e)), n || "";
}, ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Ne,
  generateUUID: ut,
  loadNonEs6Module: ze
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), le = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(le || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), be = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(be || {}), Fe = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Fe || {}), dt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(dt || {}), Re = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Re || {}), ue = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(ue || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), ct = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(mt || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Ue || {}), ft = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ft || {}), bt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(bt || {}), vt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(vt || {}), gt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(gt || {}), Je = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Je || {}), _t = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(_t || {}), je = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(je || {}), Ge = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ge || {}), He = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(He || {}), yt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(yt || {});
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: be,
  AnimationTypes: Fe,
  BadgePositiions: je,
  BorderTypes: Ue,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: ct,
  ButtonAlignments: yt,
  ChartLegendPositions: Re,
  ChartTypes: dt,
  ColorTypes: q,
  ColumnContainerModifiers: pt,
  ColumnOffsetSizes: mt,
  ColumnSizes: ht,
  DropZoneQuadrants: ee,
  FixedMenuPositions: _t,
  FixedNavBarPositions: Je,
  IconSizes: ue,
  NoticeTypes: le,
  Sizes: X,
  TabAlignments: ft,
  TabStyles: bt,
  TileSizes: vt,
  TileTypes: gt,
  ToolTipPositions: Ge,
  ToolTipTextAlignments: He
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const n = e("Language", "en");
  return k(() => n);
}, la = (e) => {
  const n = e("IconSet", "solid");
  return k(() => n);
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
    const n = oa(E);
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
      T(h.$slots, "default")
    ], 2)) : (r(), P(Yt, {
      key: 0,
      "enter-active-class": u.value,
      "leave-active-class": p.value,
      duration: o.value
    }, {
      default: L(() => [
        T(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), ua = "brands.min.css", da = "all.min.css", et = "icon_styles", ca = /\.fa-([^: ]+):before/g, pa = /url\(([^)]+)\)/g, ye = J([]), Te = J(!1), tt = async (e, n) => {
  if (!Te.value) {
    Te.value = !0;
    let t;
    ye.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", et), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(et), ye.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${ua}`),
      fetch(`${e}${da}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(ca)].forEach((s) => {
      ye.value.push(s[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(pa)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), t.innerText = l, ye.value.splice(0, 1), Te.value = !1;
  }
}, j = /* @__PURE__ */ D({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = sa(E), t = la(E);
    ye.value.length === 0 ? tt(n, t.value) : R(t, () => tt(n, t.value));
    const a = e, l = k(() => {
      let s = [];
      return a.icon !== void 0 && a.icon !== null && (ye.value.indexOf(a.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${t.value}`)), s.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== ue.normal && s.push(`fa-${a.size}`), s;
    });
    return (s, o) => (r(), d("i", {
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
      t.icon != null ? (r(), d("span", ma, [
        C(j, {
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
}, V = (e, n) => {
  let t = e.split("."), a = $a[t[0]];
  if (a !== void 0) {
    a[n.value] === void 0 ? a = a.en : a = a[n.value];
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
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
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = k(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Q(l.value, {
      onClick: o[0] || (o[0] = (u) => t("click"))
    }), null, 16));
  }
}), Na = /* @__PURE__ */ D({
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
      T(t.$slots, "default")
    ], 2));
  }
}), Aa = /* @__PURE__ */ D({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: ue.normal }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), P(j, {
      icon: `square-${n.checked ? "check" : "xmark"}`,
      size: n.size
    }, null, 8, ["icon", "size"]));
  }
}), Ca = { class: "dropdown-trigger" }, Ta = ["aria-controls"], Pa = /* @__PURE__ */ v("span", { class: "icon is-small" }, [
  /* @__PURE__ */ v("i", {
    class: "fas fa-angle-down",
    "aria-hidden": "true"
  })
], -1), Ea = ["id"], La = { class: "dropdown-content" }, Ia = {
  key: 0,
  class: "dropdown-divider"
}, Va = { key: 0 }, Wa = /* @__PURE__ */ D({
  __name: "dropdown",
  props: {
    title: {},
    items: {},
    is_hoverable: { type: Boolean },
    is_right_align: { type: Boolean },
    drops_up: { type: Boolean }
  },
  setup(e) {
    const n = ut(), t = e, a = J(!1), l = k(() => {
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
      v("div", Ca, [
        v("button", {
          class: "button",
          "aria-haspopup": "true",
          "aria-controls": y(n),
          onClick: h[0] || (h[0] = (c) => a.value = !a.value)
        }, [
          v("span", null, N(t.title), 1),
          Pa
        ], 8, Ta)
      ]),
      v("div", {
        class: "dropdown-menu",
        id: y(n),
        role: "menu"
      }, [
        (r(!0), d(I, null, W(s.value, (c, f) => (r(), d("div", La, [
          f > 0 ? (r(), d("hr", Ia)) : x("", !0),
          (r(!0), d(I, null, W(c.children, (g) => (r(), P(ce(g instanceof String ? "div" : "a"), {
            class: F(o(g)),
            href: u(g),
            onClick: (S) => p(g)
          }, {
            default: L(() => [
              g instanceof String ? (r(), d("p", Va, N(g), 1)) : x("", !0),
              Y(" " + N(g instanceof String ? null : g.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href", "onClick"]))), 256))
        ]))), 256))
      ], 8, Ea)
    ], 2));
  }
}), at = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value.test(s)).map((s) => a[s]);
}, za = /* @__PURE__ */ D({
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
      n.value = await at(t.url, t.sortMethod, a);
    }), pe(async () => {
      n.value = await at(t.url, t.sortMethod, a);
    }), (l, s) => (r(!0), d(I, null, W(n.value, (o) => (r(), P(ce(o), oe(ie(t.props)), null, 16))), 256));
  }
}), Ra = { class: "control has-icons-left" }, Ua = ["placeholder"], ja = { class: "icon is-small is-left" }, Dt = /* @__PURE__ */ D({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = k(() => V("Filter.Filter", l)), o = J(null);
    R([o], (p) => {
      p[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const u = (p) => {
      p.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return pe(() => {
      t.default_value && (o.value = t.default_value);
    }), (p, i) => (r(), d("div", Ra, [
      U(v("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": i[0] || (i[0] = (h) => o.value = h),
        onKeypress: u
      }, null, 40, Ua), [
        [ke, o.value]
      ]),
      v("span", ja, [
        C(j, { icon: "filter" })
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = k(() => t.size === X.normal ? null : `is-${t.size}`), s = k(() => `is-${t.type}`);
    return (o, u) => (r(), d("article", {
      class: F(["message", l.value, s.value])
    }, [
      t.title ? (r(), d("div", Ga, [
        v("p", null, N(t.title), 1),
        t.has_delete ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: u[0] || (u[0] = (p) => a("close"))
        })) : x("", !0)
      ])) : x("", !0),
      v("div", Ha, [
        T(o.$slots, "default", {}, () => [
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
      T(t.$slots, "default", {}, () => [
        Y(N(n.message), 1)
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
      t.block_user && t.visible ? (r(), d("div", qa)) : x("", !0),
      C(kt, {
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
            t.header !== null && t.header !== void 0 ? (r(), d("h1", Ka, N(t.header), 1)) : x("", !0),
            v("div", Qa, N(t.message), 1),
            t.has_close ? (r(), P(j, {
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = k(() => V(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = k(() => V(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), u = k(() => t.button_type ? `has-background-${t.button_type}` : ""), p = k(() => V("Pagination.GoToPage", l)), i = k(() => t.current_page === void 0 ? 0 : ae(t.current_page) + (t.zero_page_index ? 1 : 0)), h = k(() => (t.has_previous ?? !1) || i.value > 0), c = k(() => (t.has_more ?? !1) || i.value < (t.total_pages === void 0 ? 0 : ae(t.total_pages))), f = k(() => {
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
      ], 10, Za),
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
      ], 10, el),
      t.total_pages !== void 0 ? (r(), d("ul", tl, [
        (r(!0), d(I, null, W(f.value, (b) => (r(), d("li", null, [
          b === -1 ? (r(), d("span", al, "…")) : (r(), d("a", {
            key: 1,
            class: F(b === -1 ? ["pagination-ellipsis"] : ["pagination-link", b === i.value ? "is-current" : ""]),
            "aria-label": b === -1 ? "" : `${p.value} ${b}`,
            onOnclick: (B) => m(b)
          }, N(b === -1 ? "" : b), 43, ll))
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
function nl(e, n = 200) {
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
    const n = e, t = K(E), a = k(() => V("Form.Error", t)), l = qt(n), s = ot(nl(l.promise, l.pending_delay));
    return (o, u) => (r(), d(I, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? T(o.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        C(y(de), {
          size: y(X).small
        }, null, 8, ["size"])
      ]) : x("", !0),
      s.isRejected ? T(o.$slots, "rejected", oe(Q({ key: 1 }, s.error)), () => [
        C(y(he), {
          message: `${a}:${s.error.message ?? s.error.toString()}`,
          type: y(le).danger
        }, null, 8, ["message", "type"])
      ]) : x("", !0),
      s.isResolved ? T(o.$slots, "default", {
        key: 2,
        response: s.data
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
    const n = e, t = k(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (a, l) => (r(), d("progress", {
      class: F(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
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
    childItems: {},
    title: {},
    active: { type: Boolean, default: !1 },
    icon: {},
    href: {},
    onClick: {}
  },
  emits: ["itemClicked"],
  setup(e, { emit: n }) {
    const t = e, a = () => {
      l("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, l = n;
    return (s, o) => {
      const u = rt("navbar-item", !0);
      return r(), P(ce(t.childItems !== void 0 ? "div" : "a"), {
        class: F(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: L(() => [
          t.childItems !== void 0 ? (r(), d("a", ol, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", rl, [
              v("span", il, [
                C(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", ul, N(t.title), 1))
          ])) : (r(), d(I, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), d("span", dl, [
              v("span", cl, [
                C(j, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              v("span", null, N(t.title), 1)
            ])) : (r(), d("span", pl, N(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), d("div", hl, [
            (r(!0), d(I, null, W(t.childItems, (p) => (r(), P(u, Q(p, {
              onItemClicked: o[0] || (o[0] = (i) => l("itemClicked"))
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
      v("div", fl, [
        T(a.$slots, "brand"),
        v("a", {
          role: "button",
          class: F(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, yl, 10, bl)
      ]),
      v("div", {
        class: F(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.start_items !== void 0 ? (r(), d("div", kl, [
          C(me, {
            promise: n.start_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), d(I, null, W(s, (o) => (r(), P(lt, Q(o, {
                onItemClicked: l[1] || (l[1] = (u) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              v("div", $l, [
                C(de, {
                  size: y(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : x("", !0),
        n.end_items !== void 0 ? (r(), d("div", Sl, [
          C(me, {
            promise: n.end_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), d(I, null, W(s, (o) => (r(), P(lt, Q(o, {
                onItemClicked: l[2] || (l[2] = (u) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              v("div", Ml, [
                C(de, {
                  size: y(X).small
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
    const n = e;
    return (t, a) => (r(), d("aside", {
      class: F(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Bl = { class: "menu-label" }, xl = /* @__PURE__ */ D({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), d("p", Bl, [
      Y(N(n.message) + " ", 1),
      T(t.$slots, "default")
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
    const n = e, t = () => {
      n.onClick !== void 0 && n.onClick();
    };
    return (a, l) => (r(), d("li", null, [
      v("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: F(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (r(), d("span", Ol, [
          v("span", Jl, [
            C(j, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          v("span", null, N(n.title), 1)
        ])) : (r(), d("span", Nl, N(n.title), 1)),
        T(a.$slots, "default")
      ], 10, Fl),
      T(a.$slots, "children")
    ]));
  }
}), Al = { class: "menu-list" }, Cl = /* @__PURE__ */ D({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = rt("menu-list", !0);
      return r(), d("ul", Al, [
        n.items !== null ? (r(), P(me, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (r(!0), d(I, null, W(s, (o) => (r(), d("li", null, [
              C(Bt, oe(ie(o)), null, 16),
              o.childItems !== void 0 ? (r(), P(l, {
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
        T(t.$slots, "default")
      ]);
    };
  }
}), Tl = /* @__PURE__ */ D({
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
      T(t.$slots, "default")
    ], 2));
  }
}), Pl = /* @__PURE__ */ D({
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
    return (t, a) => (r(), P(ce(t.is), {
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
        T(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), El = /* @__PURE__ */ D({
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
      T(a.$slots, "default", {}, () => [
        Y(N(n.text), 1)
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
    const n = e;
    return (t, a) => (r(), d("span", {
      class: F(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: kt,
  Badge: Tl,
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
  DropDown: Wa,
  DynamicSlot: za,
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
  Tag: El,
  Tags: Ll,
  ToolTip: Pl
}, Symbol.toStringTag, { value: "Module" })), Vl = /* @__PURE__ */ D({
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
    }), (c, f) => (r(), P(ce(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: i,
      onDragend: h,
      class: F(p.value)
    }, {
      default: L(() => [
        T(c.$slots, "default")
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
    return (f, g) => (r(), P(ce(t.tag), {
      ref_key: "handle",
      ref: o,
      class: F({ "is-bordered": l.value }),
      onDragenter: p,
      onDragleave: i,
      onDrop: c,
      onDragover: h
    }, {
      default: L(() => [
        T(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), xt = /* @__PURE__ */ D({
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
    return (a, l) => (r(), P(ce(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: F(t.value)
    }, {
      default: L(() => [
        T(a.$slots, "default")
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
      T(s.$slots, "default")
    ], 2));
  }
}), zl = /* @__PURE__ */ D({
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
    return (f, g) => (r(), P(xt, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: c
    }, {
      default: L(() => [
        (r(!0), d(I, null, W(l.value, (S, m) => (r(), d(I, null, [
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
              T(f.$slots, "item", {
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
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Vl,
  DropZone: Wl,
  Sortable: zl
}, Symbol.toStringTag, { value: "Module" })), Ye = "HiddenFields", qe = "DisabledFields", Ul = (e) => e, re = (e, n) => {
  const t = n("Translate", Ul);
  return k(() => e.translate ?? t);
};
function Ke(e, n) {
  const t = n(Ye), a = n(qe), l = k(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), s = k(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const Ft = (e) => {
  let n = [], t = [], a = 0;
  return e.forEach((l) => {
    let s = l.form_columns ?? 12;
    a + s > 12 && (n.push(t), t = [], a = 0), t.push(l), a += s, a === 12 && (n.push(t), t = [], a = 0);
  }), t.length > 0 && n.push(t), n;
};
async function Qe(e) {
  let n = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? n = t : n = Promise.resolve(t);
  let a = await n, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const jl = { class: "control" }, Gl = { class: "tags has-addons" }, Hl = { class: "tag is-link" }, Yl = ["onClick"], ql = { key: 0 }, Kl = ["placeholder"], Ql = { class: "dropdown-menu" }, Xl = { class: "dropdown-content" }, Zl = ["onClick"], en = {
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
  setup(e, { expose: n, emit: t }) {
    const a = t, l = e, s = re(l, E), o = J([]), u = J(null), p = J(null), i = J(null), h = J(null);
    R(u, async (B) => {
      if (B != null) {
        if (B.length >= 2)
          if (l.values != null && l.values != null) {
            let z = [];
            for (let _ = 0; _ < l.values.length && ((l.values[_].name.toUpperCase().indexOf(B.toUpperCase()) >= 0 || l.values[_].id.toUpperCase().indexOf(B.toUpperCase()) >= 0) && z.push(l.values[_]), z.length != 10); _++)
              ;
            p.value = z;
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
        const z = await Promise.all(
          (Array.isArray(B) ? B : [B]).map(async (_) => {
            if (_.id !== void 0 && _.name !== void 0)
              return _;
            {
              let w = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${_.id === void 0 ? "q=" + encodeURIComponent(_) : "id=" + encodeURIComponent(_.id)}`)).json();
              return w.length > 0 ? (l.disabled && (w[0].readonly = !0), w[0]) : null;
            }
          })
        );
        o.value = z.filter((_) => _ !== null), a("valueChanged", { name: l.name, value: c() });
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
    return n({ getValue: c, setValue: f }), (B, z) => (r(), d("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: O
    }, [
      v("div", {
        class: F(["tagsfield", "field", "input", "is-grouped", "is-grouped-multiline", l.disabled ? "is-disabled" : ""])
      }, [
        (r(!0), d(I, null, W(o.value, (_, ne) => (r(), d("div", jl, [
          v("div", Gl, [
            v("a", Hl, N(y(s)(_.name)), 1),
            !_.readonly && !l.disabled ? (r(), d("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (w) => b(ne)
            }, null, 8, Yl)) : x("", !0)
          ])
        ]))), 256)),
        l.disabled ? x("", !0) : (r(), d("div", ql, [
          U(v("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: y(s)(l.title ?? ""),
            contenteditable: "",
            class: F(i.value),
            onFocus: z[0] || (z[0] = (_) => {
              i.value = "is-focused";
            }),
            onBlur: z[1] || (z[1] = (_) => {
              i.value = null;
            }),
            onKeydown: S,
            onPaste: g
          }, null, 42, Kl), [
            [te, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ], 2),
      l.disabled ? x("", !0) : (r(), d("div", {
        key: 0,
        class: F(["dropdown", { "is-active": p.value != null && u.value != null && u.value != "" }])
      }, [
        v("div", Ql, [
          v("div", Xl, [
            p.value != null && p.value.length > 0 ? (r(!0), d(I, { key: 0 }, W(p.value, (_) => (r(), d("a", {
              class: "dropdown-item",
              onClick: (ne) => M(_)
            }, N(y(s)(_.name)), 9, Zl))), 256)) : (r(), d("a", en, "No Results"))
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
  setup(e, { emit: n }) {
    const t = e, a = n, l = re(t, E);
    return (s, o) => (r(), P(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: y(l)(t.label),
      onClick: o[0] || (o[0] = (u) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), tn = { class: "checkbox is-block" }, an = ["value", "disabled"], Jt = /* @__PURE__ */ D({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = k(() => V("Form.Error", l)), o = t, u = re(a, E), p = J([]), i = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Qe(a.values), O = m.filter((M) => M.selected).map((M) => M.value);
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
    }, { hiddenValues: g, disabledValues: S } = Ke(a.name, E);
    return n({ getValue: c, setValue: f }), (m, O) => (r(), d("div", null, [
      C(me, { promise: h.value }, {
        default: L(({ response: M }) => [
          M !== null ? (r(!0), d(I, { key: 0 }, W(M, (b) => U((r(), d("label", tn, [
            U(v("input", {
              type: "checkbox",
              class: "checkbox",
              value: b.value,
              "onUpdate:modelValue": O[0] || (O[0] = (B) => p.value = B),
              disabled: a.disabled || y(S).some((B) => B === b.value.toString())
            }, null, 8, an), [
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
}), ln = { class: "checkbox" }, nn = ["name", "disabled"], sn = {
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = re(a, E), o = k(() => s.value(a.label)), u = J(!1);
    return R(u, (h) => l("valueChanged", { name: a.name, value: h })), n({ getValue: () => u.value, setValue: (h) => {
      u.value = h;
    } }), (h, c) => (r(), d("label", ln, [
      U(v("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (f) => u.value = f)
      }, null, 8, nn), [
        [Ve, u.value]
      ]),
      Y(" " + N(o.value) + " ", 1),
      a.required ? (r(), d("span", sn, "*")) : x("", !0)
    ]));
  }
}), Pe = (e, n) => {
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
}, on = { class: "control" }, rn = ["name", "id", "disabled"], nt = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Xe = /* @__PURE__ */ D({
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
      if (i != null && nt.test(i)) {
        var h = nt.exec(i);
        i = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = i;
    } }), (i, h) => (r(), d("div", on, [
      U(v("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (c) => s.value = c),
        disabled: a.disabled,
        style: We(o.value)
      }, null, 12, rn), [
        [ke, s.value]
      ])
    ]));
  }
});
const un = { class: "control has-icons-left has-icons-right" }, dn = ["name", "id", "placeholder", "disabled"], cn = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), pn = { class: "modal-content" }, hn = { class: "panel is-primary is-dateselect" }, mn = { class: "panel-heading" }, fn = { class: "columns card-header-title" }, bn = { class: "column" }, vn = { class: "column has-text-centered" }, gn = { class: "column has-text-right" }, _n = { class: "panel-block" }, yn = { class: "table is-striped has-text-centered" }, kn = ["onClick"], $n = { key: 0 }, Sn = {
  colspan: "100%",
  class: "has-text-centered"
}, Mn = { class: "panel-block" }, Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), De = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), At = /* @__PURE__ */ D({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = J(null), l = e, s = t, o = J(!1), u = J(null), p = J(null), i = ot({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(E), c = xe({
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
      A = Pe(A, A.getDay() * -1);
      for (var G = g(), se = Pe(new Date(i.Year, i.Month, 1), 32).getMonth(); A.getMonth() != se; ) {
        for (var Ae = [], Ze = 0; Ze < 7; Ze++)
          Ae.push({
            Number: A.getDate(),
            Disabled: A.getMonth() != i.Month,
            isToday: ge(A, h, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: G != null && ge(A, h, "yyyy-MM-dd") == ge(G, h, "yyyy-MM-dd")
          }), A = Pe(A, 1);
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
    }, z = () => {
      l.disabled || (p.value = u.value, o.value = !0);
    }, _ = () => {
      l.disabled || (u.value = null);
    }, ne = (w) => {
      i.Month + w == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + w == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += w;
    };
    return (w, A) => (r(), d("div", null, [
      v("div", un, [
        U(v("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": A[0] || (A[0] = (G) => u.value = G),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, dn), [
          [ke, u.value]
        ]),
        v("span", {
          class: "icon is-small is-left is-clickable",
          onClick: z
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
        cn,
        v("div", pn, [
          v("div", hn, [
            v("div", mn, [
              v("div", fn, [
                v("div", bn, [
                  C(y(j), {
                    icon: "arrow-circle-left",
                    onClick: A[1] || (A[1] = (G) => ne(-1))
                  })
                ]),
                v("div", vn, N(S.value) + " " + N(i.Year), 1),
                v("div", gn, [
                  C(y(j), {
                    icon: "arrow-circle-right",
                    onClick: A[2] || (A[2] = (G) => ne(1))
                  })
                ])
              ])
            ]),
            v("div", _n, [
              v("table", yn, [
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
                  (r(!0), d(I, null, W(m.value, (G) => (r(), d("tr", null, [
                    (r(!0), d(I, null, W(G, (se) => (r(), d("td", {
                      class: F(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ae) => b(se)
                    }, N(se.Number), 11, kn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (r(), d("tfoot", $n, [
                  v("tr", null, [
                    v("td", Sn, [
                      C(Xe, {
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
            v("div", Mn, [
              C(y(St), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: A[3] || (A[3] = (G) => o.value = !1)
              }, null, 8, ["disabled"]),
              C(y($t), {
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
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = na(E);
    Ne([`${s}summernote-lite.min.css`]), [a, l] = Kt(() => import(`${s}summernote`)), await a, l();
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
    }), Qt(() => {
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
    const n = e, t = re(n, E);
    return (a, l) => (r(), P(ce(n.subtype), null, {
      default: L(() => [
        Y(N(y(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), Dn = ["name"], Tt = /* @__PURE__ */ D({
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
    }, null, 8, Dn)), [
      [ke, s.value]
    ]);
  }
}), wn = ["name", "disabled", "min", "max", "step"], Pt = /* @__PURE__ */ D({
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
    }, null, 8, wn)), [
      [ke, s.value]
    ]);
  }
}), Bn = ["id"], Ie = /* @__PURE__ */ D({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const n = e, t = re(n, E);
    return (a, l) => (r(), d("p", {
      id: n.name
    }, N(y(t)(n.label)), 9, Bn));
  }
}), xn = { class: "radio" }, Fn = ["name", "value", "disabled"], On = /* @__PURE__ */ v("br", null, null, -1), Et = /* @__PURE__ */ D({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = k(() => V("Form.Error", l)), o = t, u = re(a, E), p = J(null), i = function() {
      return p.value;
    };
    R(p, (S) => {
      o("valueChanged", { name: a.name, value: i() });
    });
    const h = k(async () => {
      if (a.values == null)
        return [];
      {
        let S = await Qe(a.values);
        return p.value === null && S.some((m) => m.selected) && (p.value = S.find((m) => m.selected).value), S.map((m) => ({
          label: m.label,
          value: m.value,
          selected: p.value === m.value
        }));
      }
    }), c = (S) => {
      p.value = S;
    }, { hiddenValues: f, disabledValues: g } = Ke(a.name, E);
    return n({ getValue: i, setValue: c }), (S, m) => (r(), d("div", null, [
      C(me, { promise: h.value }, {
        default: L(({ response: O }) => [
          S.values != null ? (r(!0), d(I, { key: 0 }, W(O, (M) => (r(), d(I, null, [
            U(v("label", xn, [
              v("input", {
                type: "radio",
                name: a.name,
                value: M.value,
                class: "radio",
                disabled: a.disabled || y(g).some((b) => b === M.value.toString())
              }, null, 8, Fn),
              Y(" " + N(y(u)(M.label)), 1)
            ], 512), [
              [te, !y(f).some((b) => b === M.value.toString())]
            ]),
            On
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
}), Jn = { class: "select" }, Nn = ["id", "name", "multiple", "disabled"], An = ["value", "selected", "disabled"], Cn = ["label"], Tn = ["value", "selected", "disabled"], Lt = (e, n, t) => {
  let a = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = t.length;
  return t.push(a), n.values.forEach((s) => {
    s.values === void 0 ? a.values.push(s) : t = Lt(a.label, s, t);
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = k(() => V("Form.Error", l)), o = t, u = re(a, E), p = J(null), i = J(!1), h = k(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Qe(a.values), O = m.filter((b) => b.selected).map((b) => b.value);
        m.some((b) => b.values !== void 0) && m.filter((b) => b.values !== void 0).forEach((b) => {
          O = O.concat(
            b.values.filter((B) => B.selected).map((B) => B.value)
          );
        }), p.value === null || p.value.length === 0 ? p.value = null : (m = m.map((b) => {
          let B = b;
          return B.values !== void 0 && (B.values = B.values.map((z) => (z.selected = p.value.some((_) => _ === z.value), z))), B;
        }), p.value.forEach((b) => {
          m.some((B) => B.value !== void 0 && B.value === b || B.values !== void 0 && B.values.some((z) => z.value === b)) || m.push({
            label: b,
            value: b
          });
        }));
        let M = [];
        return m.forEach((b) => {
          b.values === void 0 ? M.push(b) : M = Lt(b.label, b, M);
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
    }, { hiddenValues: g, disabledValues: S } = Ke(a.name, E);
    return n({ getValue: c, setValue: f }), (m, O) => (r(), d("div", Jn, [
      h.value != null ? (r(), P(me, {
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
            M != null ? (r(!0), d(I, { key: 0 }, W(M, (b) => (r(), d(I, null, [
              b.values == null ? U((r(), d("option", {
                key: 0,
                value: b.value,
                selected: b.selected,
                disabled: y(S).some((B) => B === b.value.toString())
              }, N(y(u)(b.label)), 9, An)), [
                [te, !y(g).some((B) => B === b.value.toString())]
              ]) : x("", !0),
              b.values != null ? (r(), d("optgroup", {
                key: 1,
                label: y(u)(b.label)
              }, [
                (r(!0), d(I, null, W(b.values, (B) => U((r(), d("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: y(S).some((z) => z === B.value.toString())
                }, N(y(u)(B.label)), 9, Tn)), [
                  [te, !y(g).some((z) => z === B.value.toString())]
                ])), 256))
              ], 8, Cn)) : x("", !0)
            ], 64))), 256)) : x("", !0)
          ], 10, Nn), [
            [Xt, p.value]
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
}), Pn = { class: "field" }, En = ["id", "name", "disabled"], Ln = ["for"], In = {
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = re(a, E), o = J(!1);
    return R(o, (i) => l("valueChanged", { name: a.name, value: i })), n({ getValue: () => o.value, setValue: (i) => {
      o.value = i;
    } }), (i, h) => (r(), d("div", Pn, [
      U(v("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (c) => o.value = c),
        disabled: a.disabled
      }, null, 8, En), [
        [Ve, o.value]
      ]),
      v("label", { for: i.name }, [
        Y(N(y(s)(a.label)) + " ", 1),
        a.required ? (r(), d("span", In, "*")) : x("", !0)
      ], 8, Ln)
    ]));
  }
}), Vn = ["type", "name", "disabled", "maxlength"], Wt = /* @__PURE__ */ D({
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
    }, null, 8, Vn)), [
      [Zt, s.value]
    ]);
  }
}), Wn = ["name", "rows", "cols", "maxlength", "disabled"], zt = 9, _e = String.fromCharCode(zt), we = String.fromCharCode(10), Rt = /* @__PURE__ */ D({
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
          case zt:
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
}), zn = { class: "columns" }, Ut = /* @__PURE__ */ D({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = a.inputs.map((c) => J(null)), o = E(Ye), u = E(qe);
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
    }, isValid: () => !s.some((c) => !(c.value.isValid === void 0 || c.value.isValid())) }), (c, f) => (r(), d("div", zn, [
      (r(!0), d(I, null, W(a.inputs, (g, S) => (r(), P(jt, {
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
}), Rn = ["id", "name"], Un = /* @__PURE__ */ D({
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
      let h = Ft(a.fields);
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
      (r(!0), d(I, null, W(o.value, (f, g) => (r(), P(Ut, {
        ref_for: !0,
        ref: (S) => y(s)[g] = S,
        inputs: f,
        disabled: a.disabled,
        onValueChanged: c[0] || (c[0] = (S) => l("valueChanged", S)),
        onButtonClicked: c[1] || (c[1] = (S) => l("buttonClicked", S))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Rn)), [
      [te, !a.hidden]
    ]);
  }
}), jn = ["for"], Gn = {
  key: 0,
  class: "help is-danger"
}, Hn = { class: "control" }, Yn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], qn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], jt = /* @__PURE__ */ D({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = J(null), l = t, s = e, o = re(s, E), u = xe(J(s.input.type)), p = k(() => {
      let _ = null;
      switch (s.input.type) {
        case "autocomplete":
          _ = Ot;
          break;
        case "button":
          _ = Ee;
          break;
        case "checkbox-group":
          _ = Jt;
          break;
        case "checkbox":
          _ = Nt;
          break;
        case "date":
          _ = At;
          break;
        case "full-editor":
          _ = Ct;
          break;
        case "header":
          _ = Le;
          break;
        case "hidden":
          _ = Tt;
          break;
        case "number":
          _ = Pt;
          break;
        case "paragraph":
          _ = Ie;
          break;
        case "radio-group":
          _ = Et;
          break;
        case "select":
          _ = It;
          break;
        case "switch":
          _ = Vt;
          break;
        case "text":
          _ = Wt;
          break;
        case "textarea":
          _ = Rt;
          break;
        case "time":
          _ = Xe;
          break;
        case "subform":
          _ = Un;
          break;
      }
      return _;
    }), i = function(_) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(_);
    };
    pe(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && i(s.input.value);
    });
    const h = k(() => s.input.disabled ?? s.disabled ?? !1), c = k(() => `is-${s.input.form_columns ?? 12}`), f = k(() => s.input.name), g = k(() => s.input.processVariable ?? s.input.name), S = k(() => Yn.some((_) => _ === s.input.type) && s.input.label !== void 0 && s.input.label !== null), m = k(() => {
      let _ = $.extend({}, s.input);
      return delete _.type, _.className != null && delete _.className, _.form_columns != null && delete _.form_columns, qn.some((ne) => ne === s.input.type) && (_.translate = s.translate), _.disabled = s.disabled, _;
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
      s.input.type == "header" ? (r(), P(Le, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (r(), P(Ie, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (r(), P(Ee, {
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
          s.input.required ? (r(), d("span", Gn, "*")) : x("", !0)
        ], 8, jn)) : x("", !0),
        v("div", Hn, [
          (r(), P(ce(p.value), Q(m.value, {
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
const Kn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Qn = /* @__PURE__ */ D({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = re(a, E);
    Ce("Translate", (M) => s.value(M));
    let o = [];
    const u = k(() => {
      if (a.elements != null) {
        let M = Ft(a.elements);
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
    Ce(Ye, xe(c));
    const f = (M) => {
      Array.isArray(M) ? c.value = [...c.value, ...M] : c.value.push(M);
    }, g = (M) => {
      Array.isArray(M) ? c.value = c.value.filter((b) => M.indexOf(b) >= 0) : c.value = c.value.filter((b) => b !== M);
    }, S = J([]);
    return Ce(qe, xe(S)), n({ getValues: p, setValues: i, isValid: h, hideField: f, showField: g, disableField: (M) => {
      Array.isArray(M) ? S.value = [...S.value, ...M] : S.value.push(M);
    }, enableField: (M) => {
      Array.isArray(M) ? S.value = S.value.filter((b) => M.indexOf(b) >= 0) : S.value = S.value.filter((b) => b !== M);
    } }), (M, b) => (r(), d("form", Kn, [
      u.value != null ? (r(!0), d(I, { key: 0 }, W(u.value, (B, z) => (r(), P(Ut, {
        ref_for: !0,
        ref: (_) => y(o)[z] = _,
        inputs: B,
        key: z,
        onValueChanged: b[0] || (b[0] = (_) => l("valueChanged", _)),
        onButtonClicked: b[1] || (b[1] = (_) => l("buttonClicked", _)),
        disabled: M.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : x("", !0)
    ]));
  }
}), Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Ot,
  Button: Ee,
  Checkbox: Nt,
  CheckboxGroup: Jt,
  ComponentForm: Qn,
  DateField: At,
  FormComponent: jt,
  FullEditor: Ct,
  Header: Le,
  Hidden: Tt,
  NumberField: Pt,
  Paragraph: Ie,
  RadioGroup: Et,
  Select: It,
  Switch: Vt,
  Text: Wt,
  TextArea: Rt,
  Time: Xe
}, Symbol.toStringTag, { value: "Module" })), Zn = { class: "hero-body" }, es = { class: "title" }, ts = {
  key: 0,
  class: "subtitle"
}, as = /* @__PURE__ */ D({
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
      v("div", Zn, [
        v("p", es, N(n.title), 1),
        n.subtitle ? (r(), d("p", ts, N(n.subtitle), 1)) : x("", !0)
      ])
    ], 2));
  }
}), ls = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, ns = {}, ss = { class: "box" };
function os(e, n) {
  return r(), d("div", ss, [
    T(e.$slots, "default")
  ]);
}
const rs = /* @__PURE__ */ ls(ns, [["render", os]]), is = { key: 0 }, us = ["onClick"], ds = /* @__PURE__ */ D({
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
      n.breadCrumbs !== null ? (r(), d("ul", is, [
        (r(!0), d(I, null, W(n.breadCrumbs, (o) => (r(), d("li", {
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
          ], 8, us)
        ], 2))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), cs = {
  key: 0,
  class: "card-icon"
}, ps = { class: "card-icon-wrapper" }, hs = {
  key: 1,
  class: "card-header"
}, ms = {
  key: 2,
  class: "card-content"
}, fs = {
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
    const n = $e(), t = e, a = {
      addon_class: "card-footer-item"
    }, l = {
      header_class: "card-header-title has-text-centered",
      addon_class: "card-header-icon"
    };
    return (s, o) => (r(), d("div", {
      class: F(["card", { "is-fullwidth": t.full_width, "is-fullheight": t.full_height }])
    }, [
      t.icon !== null ? (r(), d("div", cs, [
        v("div", ps, [
          C(j, {
            icon: t.icon,
            size: y(ue).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : x("", !0),
      y(n).header ? (r(), d("div", hs, [
        T(s.$slots, "header", oe(ie(l)))
      ])) : x("", !0),
      y(n).content ? (r(), d("div", ms, [
        T(s.$slots, "content")
      ])) : x("", !0),
      y(n).footer ? (r(), d("div", fs, [
        T(s.$slots, "footer", oe(ie(a)))
      ])) : x("", !0)
    ], 2));
  }
}), bs = /* @__PURE__ */ D({
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
      T(a.$slots, "default")
    ], 2));
  }
}), vs = /* @__PURE__ */ D({
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
      T(a.$slots, "default")
    ], 2));
  }
}), gs = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), _s = { class: "modal-content" }, ys = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, ks = /* @__PURE__ */ D({
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
      style: We(`z-index:${n.z_index}`)
    }, [
      gs,
      v("div", _s, [
        T(t.$slots, "default")
      ]),
      n.has_close ? (r(), d("button", ys)) : x("", !0)
    ], 6));
  }
}), $s = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), Ss = {
  key: 0,
  class: "card-icon"
}, Ms = { class: "card-icon-wrapper" }, Ds = {
  key: 1,
  class: "modal-card-head"
}, ws = {
  key: 2,
  class: "modal-card-body"
}, Bs = {
  key: 3,
  class: "modal-card-foot"
}, xs = /* @__PURE__ */ D({
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
      $s,
      v("div", {
        class: F(["modal-card", u.value])
      }, [
        a.icon !== null ? (r(), d("div", Ss, [
          v("div", Ms, [
            C(j, {
              icon: a.icon,
              size: y(ue).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : x("", !0),
        y(t).header ? (r(), d("div", Ds, [
          T(p.$slots, "header", oe(ie(o))),
          p.has_close ? (r(), d("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: i[0] || (i[0] = (h) => l("close"))
          })) : x("", !0)
        ])) : x("", !0),
        y(t).content ? (r(), d("div", ws, [
          T(p.$slots, "content")
        ])) : x("", !0),
        y(t).footer ? (r(), d("div", Bs, [
          T(p.$slots, "footer", oe(ie(s)))
        ])) : x("", !0)
      ], 2)
    ], 2));
  }
}), Fs = {
  key: 0,
  class: "panel-heading"
}, Os = {
  key: 1,
  class: "panel-tabs"
}, Js = {
  key: 0,
  class: "panel-block"
}, Ns = /* @__PURE__ */ D({
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
      y(n).header ? U((r(), d("div", Fs, [
        T(s.$slots, "header")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("header")]
      ]) : x("", !0),
      y(n).tabs ? U((r(), d("div", Os, [
        T(s.$slots, "tabs")
      ], 512)), [
        [te, !(t.hidden_sections ?? []).includes("tabs")]
      ]) : x("", !0),
      (r(!0), d(I, null, W(a.value, (u) => (r(), d(I, null, [
        y(n)[u] ? U((r(), d("div", Js, [
          T(s.$slots, u)
        ], 512)), [
          [te, !(t.hidden_sections ?? []).includes(u)]
        ]) : x("", !0)
      ], 64))), 256))
    ], 2));
  }
}), As = { key: 0 }, Cs = { key: 1 }, Ts = { key: 2 }, Ht = /* @__PURE__ */ D({
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
        y(n).thead ? (r(), d("thead", As, [
          T(s.$slots, "thead")
        ])) : x("", !0),
        y(n).tbody ? (r(), d("tbody", Cs, [
          T(s.$slots, "tbody")
        ])) : x("", !0),
        y(n).tfoot ? (r(), d("tfoot", Ts, [
          T(s.$slots, "tfoot")
        ])) : x("", !0)
      ], 2)
    ], 2));
  }
}), Ps = ["href", "onClick"], Es = {
  key: 0,
  class: "icon is-small"
}, Ls = { style: { width: "100px" } }, Is = /* @__PURE__ */ D({
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
            (r(!0), d(I, null, W(o, (u) => (r(), d("li", {
              class: F({ "is-active": u.active })
            }, [
              v("a", {
                href: u.href,
                onClick: (p) => a(p, u)
              }, [
                u.icon ? (r(), d("span", Es, [
                  C(y(j), {
                    icon: u.icon
                  }, null, 8, ["icon"])
                ])) : x("", !0),
                v("span", null, N(u.title), 1)
              ], 8, Ps)
            ], 2))), 256))
          ]),
          pending: L(() => [
            v("li", Ls, [
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
}), Vs = { class: "slideout-content" }, Ws = {
  key: 1,
  class: "slideout-head"
}, zs = { class: "slideout-body" }, Rs = {
  key: 2,
  class: "slideout-foot"
}, Us = /* @__PURE__ */ D({
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
      v("div", Vs, [
        p.has_close ? (r(), d("button", {
          key: 0,
          class: "delete",
          "aria-label": "close",
          onClick: i[1] || (i[1] = (h) => o("close"))
        })) : x("", !0),
        y(t).header ? (r(), d("div", Ws, [
          T(p.$slots, "header", oe(ie(l)))
        ])) : x("", !0),
        v("div", zs, [
          T(p.$slots, "content"),
          T(p.$slots, "default")
        ]),
        y(t).footer ? (r(), d("div", Rs, [
          T(p.$slots, "footer", oe(ie(a)))
        ])) : x("", !0)
      ])
    ], 2));
  }
}), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: as,
  Box: rs,
  Breadcrumbs: ds,
  Card: Gt,
  Column: vs,
  ColumnContainer: bs,
  List: xt,
  ListItem: Be,
  Modal: ks,
  ModalCard: xs,
  Panel: Ns,
  SlideOut: Us,
  Table: Ht,
  Tabs: Is
}, Symbol.toStringTag, { value: "Module" }));
const st = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Ne(`${st.substring(0, st.lastIndexOf("/"))}/style.css`);
const Gs = ["cerulean", "cosmo", "cyborg", "dark", "darkly", "default", "flatly", "journal", "light", "litera", "lumen", "lux", "materia", "minty", "morph", "pulse", "quartz", "sandstone", "simplex", "sketchy", "slate", "solar", "spacelab", "superhero", "united", "vapor", "yeti", "zephyr"];
function Hs(e) {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", e ?? "");
}
const Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Gs,
  setSkin: Hs
}, Symbol.toStringTag, { value: "Module" })), qs = /* @__PURE__ */ D({
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
    const t = `${ra(E)}chart.umd.min.js`, a = J(null), l = e, s = n;
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
      const { Chart: h } = await ze(t, ["Chart"]);
      o = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: i
      }), o.update();
    }), (i, h) => (r(), P(Gt, null, it({
      content: L(() => [
        v("canvas", {
          ref_key: "canvas",
          ref: a,
          style: We(p.value)
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
          C(Mt, {
            class: F(c.addon_class),
            onClick: u
          }, null, 8, ["class"])
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Ks = /* @__PURE__ */ D({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = `${ia(E)}src-noconflict/ace.js`, l = e, s = t, o = J(null), u = J(null), p = function() {
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
      const { ace: c } = await ze(a, ["ace"]);
      u.value = ea(c.edit(o.value.$el, {
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
}), Qs = { key: 0 }, Xs = { colspan: "100%" }, Zs = ["colspan", "rowspan"], eo = ["onClick"], to = { class: "icon" }, ao = { key: 0 }, lo = { colspan: "100%" }, no = ["colspan", "rowspan", "onClick"], so = { key: 0 }, oo = { colspan: "100%" }, ro = /* @__PURE__ */ D({
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
    return (f, g) => (r(), P(Ht, oe(ie(s)), it({
      thead: L(() => [
        a.has_filter ?? !1 ? (r(), d("tr", Qs, [
          v("th", Xs, [
            C(Dt, {
              onFilter: g[0] || (g[0] = (S) => l("filter", S))
            })
          ])
        ])) : x("", !0),
        (r(!0), d(I, null, W(a.columns, (S) => (r(), d("tr", null, [
          (r(!0), d(I, null, W(S, (m) => (r(), d("th", {
            colspan: m.headerColspan,
            rowspan: m.headerRowspan,
            class: F(m.headerClass)
          }, [
            T(f.$slots, `head-${m.id}`, {}, () => [
              a.current_sort !== void 0 && a.current_sort !== null && (m.canSort ?? !1) && m.id === a.current_sort.column ? (r(), d("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (O) => i(m.id)
              }, [
                v("span", to, [
                  C(j, { icon: "arrow-down" })
                ]),
                v("span", null, N(m.title), 1)
              ], 8, eo)) : (r(), d(I, { key: 1 }, [
                Y(N(m.title), 1)
              ], 64))
            ])
          ], 10, Zs))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        a.data === null || a.data.length === 0 ? (r(), d("tr", ao, [
          v("td", lo, [
            a.data === null ? (r(), P(de, { key: 0 })) : (r(), P(he, {
              key: 1,
              message: a.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), d(I, { key: 1 }, W(a.data, (S, m) => (r(), d(I, null, [
          (r(!0), d(I, null, W(p.value.filter((O) => O.some((M) => !(M.headerOnly ?? !1))), (O, M) => (r(), d("tr", {
            key: `row-${m}-${M}`,
            class: F(h(m, S))
          }, [
            (r(!0), d(I, null, W(O.filter((b) => !(b.headerOnly ?? !1)), (b) => (r(), d("td", {
              key: `data-${m}-${M}`,
              colspan: b.dataColspan,
              rowspan: b.dataRowspan,
              class: F(c(m, b, S, b.propertyName ? S[b.propertyName] : void 0)),
              onClick: (B) => l("cellClicked", { rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })
            }, [
              T(f.$slots, `body-${b.id}`, oe(ie({ rowIndex: m, data: b.propertyName ? S[b.propertyName] : null, row: S })), () => [
                Y(N(b.propertyName ? S[b.propertyName] : null), 1)
              ])
            ], 10, no))), 128))
          ], 2))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      u.value || y(t).tfoot_head || y(t).tfoot_bottom ? {
        name: "tfoot",
        fn: L(() => [
          T(f.$slots, "tfoot_head"),
          u.value ? (r(), d("tr", so, [
            v("td", oo, [
              C(wt, Q(o, {
                onMoveForward: g[1] || (g[1] = (S) => l("moveForward")),
                onMoveBack: g[2] || (g[2] = (S) => l("moveBack")),
                onGoToPage: g[3] || (g[3] = (S) => l("goToPage", S))
              }), null, 16)
            ])
          ])) : x("", !0),
          T(f.$slots, "tfoot_bottom")
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: qs,
  CodeWriter: Ks,
  Grid: ro
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: po,
  Button: ho,
  ButtonsContainer: mo,
  ButtonAdd: fo,
  ButtonCancel: bo,
  ButtonDelete: vo,
  ButtonDisable: go,
  ButtonDownload: _o,
  ButtonEdit: yo,
  ButtonEnable: ko,
  ButtonOkay: $o,
  ButtonPrint: So,
  ButtonRefresh: Mo,
  ButtonSave: Do,
  ButtonUpload: wo,
  CheckMark: Bo,
  DropDown: xo,
  DynamicSlot: Fo,
  Filter: Oo,
  Icon: Jo,
  Message: No,
  Notification: Ao,
  PageNotification: Co,
  Pagination: To,
  Promised: Po,
  Progress: Eo,
  NavBar: Lo,
  Menu: Io,
  MenuLabel: Vo,
  MenuList: Wo,
  MenuEntry: zo,
  ToolTip: Ro,
  Badge: Uo,
  Tag: jo,
  Tags: Go
} = Il, { DraggableItem: Ho, DropZone: Yo, Sortable: qo } = Rl, {
  AutoComplete: Ko,
  CheckboxGroup: Qo,
  Checkbox: Xo,
  DateField: Zo,
  ComponentForm: er,
  FullEditor: tr,
  Header: ar,
  Hidden: lr,
  NumberField: nr,
  Paragraph: sr,
  RadioGroup: or,
  Select: rr,
  Switch: ir,
  Text: ur,
  TextArea: dr,
  Time: cr,
  FormComponent: pr
} = Xn, {
  Banner: hr,
  Box: mr,
  Breadcrumbs: fr,
  Card: br,
  Column: vr,
  ColumnContainer: gr,
  List: _r,
  ListItem: yr,
  ModalCard: kr,
  Panel: $r,
  Table: Sr,
  Tabs: Mr,
  Modal: Dr,
  SlideOut: wr
} = js, { AVAIABLE_SKINS: Br, setSkin: xr } = Ys, {
  ColorTypes: Fr,
  NoticeTypes: Or,
  Sizes: Jr,
  AnimationSpeeds: Nr,
  AnimationTypes: Ar,
  IconSizes: Cr,
  ChartLegendPositions: Tr,
  ChartTypes: Pr,
  DropZoneQuadrants: Er,
  BreadCrumbAlignments: Lr,
  BreadCrumbSeperators: Ir,
  ColumnContainerModifiers: Vr,
  ColumnSizes: Wr,
  ColumnOffsetSizes: zr,
  BorderTypes: Rr,
  TabAlignments: Ur,
  TabStyles: jr,
  TileSizes: Gr,
  TileTypes: Hr,
  FixedNavBarPositions: Yr,
  FixedMenuPositions: qr,
  BadgePositiions: Kr,
  ToolTipPositions: Qr,
  ToolTipTextAlignments: Xr,
  ButtonAlignments: Zr
} = aa, { loadNonEs6Module: ei } = ta, { Chart: ti, CodeWriter: ai, Grid: li } = io;
export {
  Br as AVAIABLE_SKINS,
  po as Animation,
  Nr as AnimationSpeeds,
  Ar as AnimationTypes,
  Ko as AutoComplete,
  Uo as Badge,
  Kr as BadgePositiions,
  hr as Banner,
  Rr as BorderTypes,
  mr as Box,
  Lr as BreadCrumbAlignments,
  Ir as BreadCrumbSeperators,
  fr as Breadcrumbs,
  ho as Button,
  fo as ButtonAdd,
  Zr as ButtonAlignments,
  bo as ButtonCancel,
  vo as ButtonDelete,
  go as ButtonDisable,
  _o as ButtonDownload,
  yo as ButtonEdit,
  ko as ButtonEnable,
  $o as ButtonOkay,
  So as ButtonPrint,
  Mo as ButtonRefresh,
  Do as ButtonSave,
  wo as ButtonUpload,
  mo as ButtonsContainer,
  br as Card,
  ti as Chart,
  Tr as ChartLegendPositions,
  Pr as ChartTypes,
  Bo as CheckMark,
  Xo as Checkbox,
  Qo as CheckboxGroup,
  ai as CodeWriter,
  Fr as ColorTypes,
  vr as Column,
  gr as ColumnContainer,
  Vr as ColumnContainerModifiers,
  zr as ColumnOffsetSizes,
  Wr as ColumnSizes,
  er as ComponentForm,
  Zo as DateField,
  Ho as DraggableItem,
  xo as DropDown,
  Yo as DropZone,
  Er as DropZoneQuadrants,
  Fo as DynamicSlot,
  Oo as Filter,
  qr as FixedMenuPositions,
  Yr as FixedNavBarPositions,
  pr as FormComponent,
  tr as FullEditor,
  li as Grid,
  ar as Header,
  lr as Hidden,
  Jo as Icon,
  Cr as IconSizes,
  _r as List,
  yr as ListItem,
  Io as Menu,
  zo as MenuEntry,
  Vo as MenuLabel,
  Wo as MenuList,
  No as Message,
  Dr as Modal,
  kr as ModalCard,
  Lo as NavBar,
  Or as NoticeTypes,
  Ao as Notification,
  nr as NumberField,
  Co as PageNotification,
  To as Pagination,
  $r as Panel,
  sr as Paragraph,
  Eo as Progress,
  Po as Promised,
  or as RadioGroup,
  rr as Select,
  Jr as Sizes,
  wr as SlideOut,
  qo as Sortable,
  ir as Switch,
  Ur as TabAlignments,
  jr as TabStyles,
  Sr as Table,
  Mr as Tabs,
  jo as Tag,
  Go as Tags,
  ur as Text,
  dr as TextArea,
  Gr as TileSizes,
  Hr as TileTypes,
  cr as Time,
  Ro as ToolTip,
  Qr as ToolTipPositions,
  Xr as ToolTipTextAlignments,
  ei as loadNonEs6Module,
  xr as setSkin
};
//# sourceMappingURL=components.esm.js.map
