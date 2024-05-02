import { computed as y, defineComponent as k, openBlock as r, createBlock as P, Transition as Ut, withCtx as L, renderSlot as T, createElementBlock as c, normalizeClass as x, inject as E, ref as F, watch as R, createVNode as J, createCommentVNode as A, toDisplayString as N, mergeProps as Y, onMounted as ue, Fragment as I, renderList as z, resolveDynamicComponent as he, normalizeProps as re, guardReactiveProps as de, withDirectives as j, createElementVNode as b, vModelText as _e, createTextVNode as Q, unref as D, vShow as se, toRefs as jt, reactive as st, resolveComponent as Le, vModelCheckbox as Ie, normalizeStyle as Ve, readonly as we, withAsyncContext as Gt, onUnmounted as Ht, vModelSelect as Yt, vModelDynamic as qt, provide as Ne, createSlots as ot, markRaw as Kt } from "vue";
import "jquery";
const Oe = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let i = document.createElement("link"), p = new Promise((u) => {
        i.onload = function() {
          u(l);
        };
      });
      t[s] = p, a.appendChild(i), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("server_path", l), i.setAttribute("href", l);
    } else
      t[s] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    n(l);
  });
}), me = [], We = (e, n) => new Promise((t) => {
  let a = me.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && n !== void 0 || a.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = me.find((o) => o.path === e);
        s == null ? (clearTimeout(l), t(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), t(s.result));
      }, 500);
    } else
      t(a.result);
  else {
    me.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let o = me.findIndex((i) => i.path === e);
      if (n === void 0)
        me[o].result = void 0;
      else {
        let i = {};
        n.forEach((p) => {
          i[p] = window[p];
        }), me[o].result = i;
      }
      t(me[o].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Oe,
  loadNonEs6Module: We
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), fe = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(fe || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), rt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(rt || {}), ze = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(ze || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), it = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(dt || {}), ct = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(ct || {}), Re = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Re || {}), pt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(mt || {}), ft = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(ft || {}), xe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(xe || {}), bt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(bt || {}), Ue = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(je || {}), Ge = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(Ge || {});
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: fe,
  AnimationTypes: Be,
  BadgePositiions: Ue,
  BorderTypes: Re,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: it,
  ChartLegendPositions: ze,
  ChartTypes: rt,
  ColorTypes: q,
  ColumnContainerModifiers: ut,
  ColumnOffsetSizes: ct,
  ColumnSizes: dt,
  DropZoneQuadrants: ee,
  FixedMenuPositions: bt,
  FixedNavBarPositions: xe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: X,
  TabAlignments: pt,
  TabStyles: ht,
  TileSizes: mt,
  TileTypes: ft,
  ToolTipPositions: je,
  ToolTipTextAlignments: Ge
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const n = e("Language", "en");
  return y(() => n);
}, Zt = (e) => {
  const n = e("IconSet", "solid");
  return y(() => n);
}, ea = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), ta = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), aa = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), la = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), na = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), gt = /* @__PURE__ */ k({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: fe.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = aa(E);
    Oe(`${n}animate.min.css`);
    const t = e, a = (h) => {
      switch (h) {
        case fe.slower:
          return 3e3;
        case fe.fast:
          return 800;
        case fe.faster:
          return 500;
        default:
          return 2e3;
      }
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, s = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, o = y(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = y(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), p = y(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed)
    ].join(" "));
    return (h, d) => t.repeating ? (r(), c("div", {
      key: 1,
      class: x(u.value)
    }, [
      T(h.$slots, "default")
    ], 2)) : (r(), P(Ut, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": p.value,
      duration: o.value
    }, {
      default: L(() => [
        T(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), sa = "brands.min.css", oa = "all.min.css", Ze = "icon_styles", ra = /\.fa-([^: ]+):before/g, ia = /url\(([^)]+)\)/g, ye = F([]), Ae = F(!1), et = async (e, n) => {
  if (!Ae.value) {
    Ae.value = !0;
    let t;
    ye.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", Ze), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(Ze), ye.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${sa}`),
      fetch(`${e}${oa}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(ra)].forEach((s) => {
      ye.value.push(s[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(ia)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), t.innerText = l, ye.value.splice(0, 1), Ae.value = !1;
  }
}, U = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = ta(E), t = Zt(E);
    ye.value.length === 0 ? et(n, t.value) : R(t, () => et(n, t.value));
    const a = e, l = y(() => {
      let s = [];
      return a.icon !== void 0 && a.icon !== null && (ye.value.indexOf(a.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${t.value}`)), s.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== oe.normal && s.push(`fa-${a.size}`), s;
    });
    return (s, o) => (r(), c("i", {
      class: x(l.value)
    }, null, 2));
  }
});
const ua = ["disabled"], da = {
  key: 0,
  class: "icon is-small"
}, ca = { key: 1 }, Z = /* @__PURE__ */ k({
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
    const t = e, a = n, l = y(() => {
      let s = ["button", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && s.push("disabled"), t.is_rounded && s.push("is-rounded"), t.hide_mobile && s.push("is-hidden-mobile"), t.hide_tablet && s.push("is-hidden-tablet-only"), t.hide_desktop && s.push("is-hidden-desktop is-hidden-widescreen"), s.join(" ");
    });
    return (s, o) => (r(), c("button", {
      class: x(l.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (i) => a("click"))
    }, [
      t.icon != null ? (r(), c("span", da, [
        J(U, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      t.title != null ? (r(), c("span", ca, N(t.title), 1)) : A("", !0)
    ], 10, ua));
  }
}), pa = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, ha = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', ma = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', fa = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, ba = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', ga = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', va = {
  Button: JSON.parse(pa),
  Filter: JSON.parse(ha),
  Pagination: JSON.parse(ma),
  Date: JSON.parse(fa),
  Form: JSON.parse(ba),
  Wizard: JSON.parse(ga)
}, V = (e, n) => {
  let t = e.split("."), a = va[t[0]];
  if (a !== void 0) {
    a[n.value] === void 0 ? a = a.en : a = a[n.value];
    let l = 1;
    for (; a !== void 0 && l < t.length; )
      a = a[t[l]], l++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, ya = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), vt = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), _a = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), ka = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), $a = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Sa = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ma = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), yt = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), _t = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ k({
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
    const t = n, a = K(E), l = y(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (s, o) => (r(), P(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (i) => t("click"))
    }), null, 16));
  }
}), Fa = /* @__PURE__ */ k({
  __name: "check-mark",
  props: {
    checked: { type: Boolean, default: !0 },
    size: { default: oe.normal }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), P(U, {
      icon: `square-${n.checked ? "check" : "xmark"}`,
      size: n.size
    }, null, 8, ["icon", "size"]));
  }
}), tt = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value.test(s)).map((s) => a[s]);
}, xa = /* @__PURE__ */ k({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = F(null), t = e, a = y(() => t.filter == null || t.filter == null ? null : new RegExp("^" + t.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return R(() => [t.url, t.filter], async () => {
      n.value = await tt(t.url, t.sortMethod, a);
    }), ue(async () => {
      n.value = await tt(t.url, t.sortMethod, a);
    }), (l, s) => (r(!0), c(I, null, z(n.value, (o) => (r(), P(he(o), re(de(t.props)), null, 16))), 256));
  }
}), Oa = { class: "control has-icons-left" }, Ja = ["placeholder"], Na = { class: "icon is-small is-left" }, kt = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = y(() => V("Filter.Filter", l)), o = F(null);
    R([o], (p) => {
      p[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const i = (p) => {
      p.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return ue(() => {
      t.default_value && (o.value = t.default_value);
    }), (p, u) => (r(), c("div", Oa, [
      j(b("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => o.value = h),
        onKeypress: i
      }, null, 40, Ja), [
        [_e, o.value]
      ]),
      b("span", Na, [
        J(U, { icon: "filter" })
      ])
    ]));
  }
}), Aa = {
  key: 0,
  class: "message-header"
}, Ta = { class: "message-body" }, Pa = /* @__PURE__ */ k({
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
    const t = e, a = n, l = y(() => t.size === X.normal ? null : `is-${t.size}`), s = y(() => `is-${t.type}`);
    return (o, i) => (r(), c("article", {
      class: x(["message", l.value, s.value])
    }, [
      t.title ? (r(), c("div", Aa, [
        b("p", null, N(t.title), 1),
        t.has_delete ? (r(), c("button", {
          key: 0,
          class: "delete",
          "aria-label": "delete",
          onClick: i[0] || (i[0] = (p) => a("close"))
        })) : A("", !0)
      ])) : A("", !0),
      b("div", Ta, [
        T(o.$slots, "default", {}, () => [
          Q(N(t.message), 1)
        ])
      ])
    ], 2));
  }
}), ce = /* @__PURE__ */ k({
  __name: "notification",
  props: {
    type: { default: te.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("div", {
      class: x(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      T(t.$slots, "default", {}, () => [
        Q(N(n.message), 1)
      ])
    ], 2));
  }
}), Ea = {
  key: 0,
  class: "modal-background"
}, Ca = {
  key: 0,
  class: "title"
}, La = { class: "block" }, Ia = /* @__PURE__ */ k({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: te.info },
    message: {},
    header: {},
    block_user: { type: Boolean },
    has_close: { type: Boolean },
    is_light: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = y(() => {
      switch (t.type) {
        case te.info:
          return "circle-info";
        case te.success:
          return "circle-check";
        case te.danger:
          return "bug";
        case te.warning:
          return "circle-exclamation";
      }
    }), s = y(() => {
      var o = ["is-page-notification-container", `is-${t.type}`];
      return t.is_light && o.push("is-light-mode"), t.has_close === void 0 || t.has_close === null || t.has_close || o.push("has-no-close"), o;
    });
    return (o, i) => (r(), c("div", {
      class: x({ modal: t.block_user && t.visible, "is-active": t.block_user && t.visible })
    }, [
      t.block_user && t.visible ? (r(), c("div", Ea)) : A("", !0),
      J(gt, {
        incoming: D(Be).fadeIn,
        outgoing: D(Be).fadeOut,
        speed: D(fe).slower
      }, {
        default: L(() => [
          t.visible ? (r(), c("div", {
            key: 0,
            class: x(s.value)
          }, [
            J(U, {
              icon: l.value,
              size: D(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), c("h1", Ca, N(t.header), 1)) : A("", !0),
            b("div", La, N(t.message), 1),
            t.has_close ? (r(), P(U, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (p) => a("close")),
              size: D(oe).large
            }, null, 8, ["size"])) : A("", !0)
          ], 2)) : A("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Va = ["title", "disabled"], Wa = ["title", "disabled"], za = {
  key: 0,
  class: "pagination-list"
}, Ra = {
  key: 0,
  class: "pagination-ellipsis"
}, Ua = ["aria-label", "onOnclick"], $t = /* @__PURE__ */ k({
  __name: "pagination",
  props: {
    use_next: { type: Boolean },
    has_more: { type: Boolean, default: void 0 },
    has_previous: { type: Boolean, default: void 0 },
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    button_type: {},
    total_pages: {},
    current_page: {}
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = y(() => V(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = y(() => V(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), i = y(() => t.button_type ? `has-background-${t.button_type}` : ""), p = y(() => V("Pagination.GoToPage", l)), u = y(() => (t.has_previous ?? !1) || (t.current_page ?? 0) > 0), h = y(() => (t.has_more ?? !1) || (t.current_page ?? 0) < (t.total_pages ?? 0) - 1), d = y(() => {
      if (t.total_pages === void 0 || t.current_page === void 0)
        return [];
      if (t.total_pages > 5) {
        let m = Math.max(t.current_page === void 0 ? Math.floor(t.total_pages / 2) : t.current_page, 3);
        return t.total_pages - t.current_page < 1 && m--, [
          1,
          -1,
          m - 1,
          m,
          m + 1,
          -1,
          t.total_pages
        ];
      } else {
        let m = [];
        for (let C = 1; C <= t.total_pages; C++)
          m.push(C);
        return m;
      }
    }), f = function() {
      u && (t.current_page !== null ? a("goToPage", t.current_page - 1) : a("moveBack"));
    }, S = function() {
      h && (t.current_page !== null ? a("goToPage", t.current_page + 1) : a("moveForward"));
    }, M = function(m) {
      a("goToPage", m);
    };
    return (m, C) => j((r(), c("nav", {
      class: x(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      b("a", {
        class: x(["pagination-previous", i.value]),
        title: s.value,
        onClick: f,
        disabled: u.value ? null : "disabled"
      }, [
        J(U, {
          icon: "backward",
          class: "mr-1",
          size: D(oe).small
        }, null, 8, ["size"]),
        Q(" " + N(s.value), 1)
      ], 10, Va),
      b("a", {
        class: x(["pagination-next", i.value]),
        title: o.value,
        onClick: S,
        disabled: h.value ? null : "disabled"
      }, [
        Q(N(o.value) + " ", 1),
        J(U, {
          icon: "forward",
          class: "ml-1",
          size: D(oe).small
        }, null, 8, ["size"])
      ], 10, Wa),
      t.total_pages !== void 0 ? (r(), c("ul", za, [
        (r(!0), c(I, null, z(d.value, (_) => (r(), c("li", null, [
          _ === -1 ? (r(), c("span", Ra, "…")) : (r(), c("a", {
            key: 1,
            class: x(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === t.current_page + 1 ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${p.value} ${_}`,
            onOnclick: (v) => M(_)
          }, N(_ === -1 ? "" : _), 43, Ua))
        ]))), 256))
      ])) : A("", !0)
    ], 2)), [
      [se, u.value || h.value]
    ]);
  }
});
function be(e) {
  return typeof e == "function" ? e() : D(e);
}
function ja(e, n = 200) {
  const t = F(!1), a = F(!1), l = y(() => !t.value && !a.value), s = F(!1), o = F(), i = F(), p = y(() => {
    if (e != null) {
      let h = be(e);
      return h instanceof Promise ? h : new Promise((d) => d(h));
    }
    return null;
  });
  let u;
  return R(
    () => be(p),
    (h) => {
      if (t.value = !1, a.value = !1, o.value = null, !h) {
        i.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const d = Number(be(n)) || 0;
      d > 0 ? (s.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        s.value = !0;
      }, d)) : s.value = !0, h.then((f) => {
        h === be(p) && (i.value = be(f), a.value = !0);
      }).catch((f) => {
        h === be(p) && (o.value = f, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: s, error: o, data: i };
}
const pe = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pending_delay: { default: 200 }
  },
  setup(e) {
    const n = e, t = K(E), a = y(() => V("Form.Error", t)), l = jt(n), s = st(ja(l.promise, l.pending_delay));
    return (o, i) => (r(), c(I, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? T(o.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        J(D(ie), {
          size: D(X).small
        }, null, 8, ["size"])
      ]) : A("", !0),
      s.isRejected ? T(o.$slots, "rejected", re(Y({ key: 1 }, s.error)), () => [
        J(D(ce), {
          message: `${a}:${s.error.message ?? s.error.toString()}`,
          type: D(te).danger
        }, null, 8, ["message", "type"])
      ]) : A("", !0),
      s.isResolved ? T(o.$slots, "default", {
        key: 2,
        response: s.data
      }) : A("", !0)
    ], 64));
  }
}), Ga = ["value", "max"], ie = /* @__PURE__ */ k({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, t = y(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (a, l) => (r(), c("progress", {
      class: x(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, N(t.value ? `${t.value}%` : null), 11, Ga));
  }
}), Ha = {
  key: 0,
  class: "navbar-link"
}, Ya = {
  key: 0,
  class: "icon-text"
}, qa = { class: "icon" }, Ka = { key: 1 }, Qa = {
  key: 0,
  class: "icon-text"
}, Xa = { class: "icon" }, Za = { key: 1 }, el = {
  key: 2,
  class: "navbar-dropdown"
}, at = /* @__PURE__ */ k({
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
      const i = Le("navbar-item", !0);
      return r(), P(he(t.childItems !== void 0 ? "div" : "a"), {
        class: x(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: L(() => [
          t.childItems !== void 0 ? (r(), c("a", Ha, [
            t.icon !== void 0 && t.icon !== null ? (r(), c("span", Ya, [
              b("span", qa, [
                J(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              b("span", null, N(t.title), 1)
            ])) : (r(), c("span", Ka, N(t.title), 1))
          ])) : (r(), c(I, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), c("span", Qa, [
              b("span", Xa, [
                J(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              b("span", null, N(t.title), 1)
            ])) : (r(), c("span", Za, N(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), c("div", el, [
            (r(!0), c(I, null, z(t.childItems, (p) => (r(), P(i, Y(p, {
              onItemClicked: o[0] || (o[0] = (u) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : A("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), tl = ["aria-label"], al = { class: "navbar-brand" }, ll = ["aria-expanded"], nl = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, null, -1), sl = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, null, -1), ol = /* @__PURE__ */ b("span", { "aria-hidden": "true" }, null, -1), rl = [
  nl,
  sl,
  ol
], il = {
  key: 0,
  class: "navbar-start"
}, ul = { style: { width: "100px" } }, dl = {
  key: 1,
  class: "navbar-end"
}, cl = { style: { width: "100px" } }, pl = /* @__PURE__ */ k({
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
    const n = e, t = F(!1);
    return ue(() => {
      if (n.fixed_position)
        switch (n.fixed_position) {
          case xe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case xe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (r(), c("nav", {
      class: x(["navbar", n.fixed_position, n.color !== void 0 && n.color !== null ? `is-${n.color}` : ""]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      b("div", al, [
        T(a.$slots, "brand"),
        b("a", {
          role: "button",
          class: x(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, rl, 10, ll)
      ]),
      b("div", {
        class: x(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.start_items !== void 0 ? (r(), c("div", il, [
          J(pe, {
            promise: n.start_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), c(I, null, z(s, (o) => (r(), P(at, Y(o, {
                onItemClicked: l[1] || (l[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              b("div", ul, [
                J(ie, {
                  size: D(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0),
        n.end_items !== void 0 ? (r(), c("div", dl, [
          J(pe, {
            promise: n.end_items
          }, {
            default: L(({ response: s }) => [
              (r(!0), c(I, null, z(s, (o) => (r(), P(at, Y(o, {
                onItemClicked: l[2] || (l[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              b("div", cl, [
                J(ie, {
                  size: D(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : A("", !0)
      ], 2)
    ], 10, tl));
  }
}), hl = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("aside", {
      class: x(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), ml = { class: "menu-label" }, fl = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("p", ml, [
      Q(N(n.message) + " ", 1),
      T(t.$slots, "default")
    ]));
  }
}), bl = ["href"], gl = {
  key: 0,
  class: "icon-text"
}, vl = { class: "icon" }, yl = { key: 1 }, St = /* @__PURE__ */ k({
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
    return (a, l) => (r(), c("li", null, [
      b("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: x(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (r(), c("span", gl, [
          b("span", vl, [
            J(U, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          b("span", null, N(n.title), 1)
        ])) : (r(), c("span", yl, N(n.title), 1)),
        T(a.$slots, "default")
      ], 10, bl),
      T(a.$slots, "children")
    ]));
  }
}), _l = { class: "menu-list" }, kl = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = Le("menu-list", !0);
      return r(), c("ul", _l, [
        n.items !== null ? (r(), P(pe, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (r(!0), c(I, null, z(s, (o) => (r(), c("li", null, [
              J(St, re(de(o)), null, 16),
              o.childItems !== void 0 ? (r(), P(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : A("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            b("li", null, [
              J(ie, {
                size: D(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : A("", !0),
        T(t.$slots, "default")
      ]);
    };
  }
}), $l = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Ue.topRight },
    text: {},
    type: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("span", {
      class: x(["badge", `is-${n.position}`, n.type === void 0 ? "" : `is-${n.type}`])
    }, [
      Q(N(n.text) + " ", 1),
      T(t.$slots, "default")
    ], 2));
  }
}), Sl = /* @__PURE__ */ k({
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
    const n = e;
    return (t, a) => (r(), P(he(t.is), {
      class: x([
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
}), Ml = /* @__PURE__ */ k({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: X.normal },
    is_delete: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["tag", `is-${n.type}`, `is-${n.size}`];
      return n.light && a.push("is-light"), n.rounded && a.push("is-rounded"), n.is_delete && a.push("is-delete"), a;
    });
    return (a, l) => (r(), c("span", {
      class: x(t.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), Dl = /* @__PURE__ */ k({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("span", {
      class: x(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: gt,
  Badge: $l,
  Button: Z,
  ButtonAdd: ya,
  ButtonCancel: vt,
  ButtonDelete: _a,
  ButtonDisable: ka,
  ButtonDownload: $a,
  ButtonEdit: Sa,
  ButtonEnable: Ma,
  ButtonOkay: yt,
  ButtonPrint: Da,
  ButtonRefresh: _t,
  ButtonSave: wa,
  ButtonUpload: Ba,
  CheckMark: Fa,
  DynamicSlot: xa,
  Filter: kt,
  Icon: U,
  Menu: hl,
  MenuEntry: St,
  MenuLabel: fl,
  MenuList: kl,
  Message: Pa,
  NavBar: pl,
  Notification: ce,
  PageNotification: Ia,
  Pagination: $t,
  Progress: ie,
  Promised: pe,
  Tag: Ml,
  Tags: Dl,
  ToolTip: Sl
}, Symbol.toStringTag, { value: "Module" })), Bl = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    copy_data: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handle_search: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = F(!1), s = F(!1), o = F(null), i = y(() => (a.disabled ?? !1) || s.value && a.handle_search !== null), p = y(() => {
      let d = [];
      return i || d.push("has-cursor"), l.value ? d.push("is-move") : d.push("is-grab"), d;
    }), u = (d) => i.value ? (d.preventDefault(), !1) : (d.stopPropagation(), d.dataTransfer.setData("value", JSON.stringify(a.copy_data)), l.value = !0, t("started"), !0), h = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return ue(() => {
      if (a.handle_search) {
        let d = $(o.value).find(a.handle_search);
        d.length > 0 && (s.value = !0, d.on("mousedown", () => s.value = !1), d.on("mouseup", () => s.value = !0));
      }
    }), (d, f) => (r(), P(he(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: x(p.value)
    }, {
      default: L(() => [
        T(d.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Fl = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    is_valid_child: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = F(!1), s = F(null), o = F(null);
    y(() => t.tag ?? "div");
    const i = (f) => {
      const S = o.value.getBoundingClientRect(), M = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let m = ee.center;
      return f.x < M.x ? f.y < M.y ? m = ee.topLeft : m = ee.bottomLeft : f.y < M.y ? m = ee.topRight : m = ee.bottomRight, s.value = m, s.value;
    }, p = (f) => {
      f.preventDefault(), l.value = !0, a("itemEntered", i(f));
    }, u = (f) => {
      l.value = !0, a("itemExited", i(f));
    }, h = (f) => {
      f.preventDefault(), a("itemMoved", i(f));
    }, d = (f) => {
      if (t.is_valid_child && !t.is_valid_child(JSON.parse(f.dataTransfer.getData("value"))))
        return !1;
      f.stopPropagation(), f.preventDefault(), a("itemAdded", JSON.parse(f.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (f, S) => (r(), P(he(t.tag), {
      ref_key: "handle",
      ref: o,
      class: x({ "is-bordered": l.value }),
      onDragenter: p,
      onDragleave: u,
      onDrop: d,
      onDragover: h
    }, {
      default: L(() => [
        T(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Mt = /* @__PURE__ */ k({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      var a = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && a.push("is-small"), n.outlined && a.push("is-outlined"), n.highlighted && a.push("is-highlighted"), a;
    });
    return (a, l) => (r(), P(he(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: x(t.value)
    }, {
      default: L(() => [
        T(a.$slots, "default")
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
    const t = e, a = n, l = y(() => {
      var s = [];
      return t.type && s.push("is-" + t.type), t.outlined && s.push("is-outlined"), t.highlighted && s.push("is-highlighted"), t.icon && s.push("has-icon"), s;
    });
    return (s, o) => (r(), c("li", {
      class: x(l.value)
    }, [
      t.icon ? (r(), c("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: o[0] || (o[0] = (i) => a("click"))
      }, [
        J(U, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      T(s.$slots, "default")
    ], 2));
  }
}), xl = /* @__PURE__ */ k({
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
    const t = e, a = n, l = F([]), s = F(-1), o = F(-1), i = F(null);
    R(t.items, (f, S) => {
      l.value = [...S];
    }), ue(() => {
      t.items !== null && (l.value = [...t.items]);
    });
    const p = (f) => {
      var S = f.target.getBoundingClientRect(), M = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let m = ee.center;
      return f.y < M.y ? m = ee.top : m = ee.bottom, m;
    }, u = (f, S) => {
      S.stopPropagation(), s.value = f, S.dataTransfer.setData("value", null);
    }, h = (f, S) => {
      s.value && (S.stopPropagation(), f != s.value ? (o.value = f, i.value = p(S)) : (o.value = -1, i.value = null));
    }, d = (f) => {
      if (s.value) {
        f.stopPropagation();
        var S = o.value + (i.value == ee.top ? 0 : 1), M = l.value.splice(S, 1)[0];
        S >= s.value && S--, l.value.splice(S, 0, M), o.value = -1, i.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (f, S) => (r(), P(Mt, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: d
    }, {
      default: L(() => [
        (r(!0), c(I, null, z(l.value, (M, m) => (r(), c(I, null, [
          j(J(De, null, {
            default: L(() => [
              J(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, o.value === m && s.value !== m && i.value === D(ee).top]
          ]),
          J(De, {
            draggable: "true",
            onDragstart: (C) => u(m, C),
            onDragend: S[0] || (S[0] = (C) => s.value = null),
            onDragover: (C) => h(m, C),
            class: x({ "has-cursor": !0, "is-move": o.value == m, "is-grab": o.value != m })
          }, {
            default: L(() => [
              T(f.$slots, "item", {
                item: M,
                index: m
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          j(J(De, null, {
            default: L(() => [
              J(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, o.value === m && s.value !== m && i.value === D(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Bl,
  DropZone: Fl,
  Sortable: xl
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ye = "DisabledFields", Jl = (e) => e, ne = (e, n) => {
  const t = n("Translate", Jl);
  return y(() => e.translate ?? t);
};
function qe(e, n) {
  const t = n(He), a = n(Ye), l = y(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), s = y(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const Dt = (e) => {
  let n = [], t = [], a = 0;
  return e.forEach((l) => {
    let s = l.form_columns ?? 12;
    a + s > 12 && (n.push(t), t = [], a = 0), t.push(l), a += s, a === 12 && (n.push(t), t = [], a = 0);
  }), t.length > 0 && n.push(t), n;
};
async function Ke(e) {
  let n = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? n = t : n = Promise.resolve(t);
  let a = await n, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Nl = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Al = { class: "control" }, Tl = { class: "tags has-addons" }, Pl = { class: "tag is-link" }, El = ["onClick"], Cl = { key: 0 }, Ll = ["placeholder"], Il = { class: "dropdown-menu" }, Vl = { class: "dropdown-content" }, Wl = ["onClick"], zl = {
  key: 1,
  class: "dropdown-item"
}, wt = /* @__PURE__ */ k({
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
    const a = t, l = e, s = ne(l, E), o = F([]), i = F(null), p = F(null), u = F(null), h = F(null);
    R(i, async (B) => {
      if (B != null) {
        if (B.length >= 2)
          if (l.values != null && l.values != null) {
            let W = [];
            for (let g = 0; g < l.values.length && ((l.values[g].name.toUpperCase().indexOf(B.toUpperCase()) >= 0 || l.values[g].id.toUpperCase().indexOf(B.toUpperCase()) >= 0) && W.push(l.values[g]), W.length != 10); g++)
              ;
            p.value = W;
          } else {
            let g = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(B)}`)).json();
            g.length > 10 && g.splice(10, g.length - 10), p.value = g;
          }
      } else
        p.value = null, $(h.value).empty();
    });
    const d = () => {
      if (o.value.length == 0)
        return null;
      const B = o.value.slice();
      return l.limit != null && l.limit == 1 ? B.length > 0 ? B[0] : null : B;
    }, f = async (B) => {
      if (B == null)
        o.value.length > 0 && o.value.splice(0, o.value.length), i.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(B) ? B : [B]).map(async (g) => {
            if (g.id !== void 0 && g.name !== void 0)
              return g;
            {
              let w = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${g.id === void 0 ? "q=" + encodeURIComponent(g) : "id=" + encodeURIComponent(g.id)}`)).json();
              return w.length > 0 ? (l.disabled && (w[0].readonly = !0), w[0]) : null;
            }
          })
        );
        o.value = W.filter((g) => g !== null), a("valueChanged", { name: l.name, value: d() });
      }
    }, S = (B) => {
      B.preventDefault(), i.value = B.clipboardData.getData("text/plain");
    }, M = (B) => {
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
    }, C = () => {
      h.value.focus();
    }, _ = (B) => {
      o.value.push(B), m(), a("valueChanged", { name: l.name, value: d() });
    }, v = (B) => {
      o.value.splice(B, 1), C(), a("valueChanged", { name: l.name, value: d() });
    };
    return n({ getValue: d, setValue: f }), (B, W) => (r(), c("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: C
    }, [
      b("div", Nl, [
        (r(!0), c(I, null, z(o.value, (g, ae) => (r(), c("div", Al, [
          b("div", Tl, [
            b("a", Pl, N(D(s)(g.name)), 1),
            g.readonly ? A("", !0) : (r(), c("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (w) => v(ae)
            }, null, 8, El))
          ])
        ]))), 256)),
        l.disabled ? A("", !0) : (r(), c("div", Cl, [
          j(b("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: D(s)(l.title ?? ""),
            contenteditable: "",
            class: x(u.value),
            onFocus: W[0] || (W[0] = (g) => {
              u.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (g) => {
              u.value = null;
            }),
            onKeydown: M,
            onPaste: S
          }, null, 42, Ll), [
            [se, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ]),
      b("div", {
        class: x(["dropdown", { "is-active": p.value != null && i.value != null && i.value != "" }])
      }, [
        b("div", Il, [
          b("div", Vl, [
            p.value != null && p.value.length > 0 ? (r(!0), c(I, { key: 0 }, z(p.value, (g) => (r(), c("a", {
              class: "dropdown-item",
              onClick: (ae) => _(g)
            }, N(D(s)(g.name)), 9, Wl))), 256)) : (r(), c("a", zl, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Pe = /* @__PURE__ */ k({
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
    const t = e, a = n, l = ne(t, E);
    return (s, o) => (r(), P(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: D(l)(t.label),
      onClick: o[0] || (o[0] = (i) => a("buttonClicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Rl = { class: "checkbox is-block" }, Ul = ["value", "disabled"], Bt = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = y(() => V("Form.Error", l)), o = t, i = ne(a, E), p = F([]), u = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Ke(a.values), C = m.filter((_) => _.selected).map((_) => _.value);
        return p.value === null || p.value.length == 0 ? p.value = C.length > 0 ? [...C] : [] : (C = p.value, m = m.map((_) => ({
          label: _.label,
          value: _.value,
          selected: C.some((v) => v === _.value)
        }))), m;
      }
    });
    R(p, (m) => {
      o("valueChanged", { name: a.name, value: d() });
    });
    const d = () => p.value.length == 0 ? null : p.value, f = (m) => {
      u.value = !0, p.value.splice(0), m !== null && (p.value = [...m]), u.value = !1, o("valueChanged", { name: a.name, value: d() });
    }, { hiddenValues: S, disabledValues: M } = qe(a.name, E);
    return n({ getValue: d, setValue: f }), (m, C) => (r(), c("div", null, [
      J(pe, { promise: h.value }, {
        default: L(({ response: _ }) => [
          _ !== null ? (r(!0), c(I, { key: 0 }, z(_, (v) => j((r(), c("label", Rl, [
            j(b("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": C[0] || (C[0] = (B) => p.value = B),
              disabled: a.disabled || D(M).some((B) => B === v.value.toString())
            }, null, 8, Ul), [
              [Ie, p.value]
            ]),
            Q(" " + N(D(i)(v.label)), 1)
          ], 512)), [
            [se, !D(S).some((B) => B === v.value.toString())]
          ])), 256)) : A("", !0)
        ]),
        pending: L(() => [
          J(D(ie))
        ]),
        rejected: L(() => [
          J(D(ce), {
            type: D(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), jl = { class: "checkbox" }, Gl = ["name", "disabled"], Hl = {
  key: 0,
  class: "help is-danger"
}, Ft = /* @__PURE__ */ k({
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
    const a = e, l = t, s = ne(a, E), o = y(() => s.value(a.label)), i = F(!1);
    return R(i, (h) => l("valueChanged", { name: a.name, value: h })), n({ getValue: () => i.value, setValue: (h) => {
      i.value = h;
    } }), (h, d) => (r(), c("label", jl, [
      j(b("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f)
      }, null, 8, Gl), [
        [Ie, i.value]
      ]),
      Q(" " + N(o.value) + " ", 1),
      a.required ? (r(), c("span", Hl, "*")) : A("", !0)
    ]));
  }
}), Te = (e, n) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + n), t;
}, H = (e, n, t) => {
  let a = e;
  for (; a.length < t; )
    a = n + a;
  return a;
}, $e = (e, n, t) => {
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
      let o = t.getTimezoneOffset() * -1, i = parseInt((o / 60).toFixed(0)), p = o - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${H(Math.abs(i).toString(), "0", 2) + ":" + H(Math.abs(p).toString(), "0", 2)}`;
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
      a += `${V("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), n)}`;
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
}, Yl = { class: "control" }, ql = ["name", "id", "disabled"], lt = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Qe = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null), o = y(() => {
      if (s.value == null || s.value == "")
        return null;
      var u = Number(s.value.substring(3, 5)), h = Number(s.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return R(s, (u) => {
      l("valueChanged", { name: a.name, value: u });
    }), n({ getValue: () => s.value, setValue: (u) => {
      if (u != null && lt.test(u)) {
        var h = lt.exec(u);
        u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = u;
    } }), (u, h) => (r(), c("div", Yl, [
      j(b("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d),
        disabled: a.disabled,
        style: Ve(o.value)
      }, null, 12, ql), [
        [_e, s.value]
      ])
    ]));
  }
});
const Kl = { class: "control has-icons-left has-icons-right" }, Ql = ["name", "id", "placeholder", "disabled"], Xl = /* @__PURE__ */ b("div", { class: "modal-background" }, null, -1), Zl = { class: "modal-content" }, en = { class: "panel is-primary is-dateselect" }, tn = { class: "panel-heading" }, an = { class: "columns card-header-title" }, ln = { class: "column" }, nn = { class: "column has-text-centered" }, sn = { class: "column has-text-right" }, on = { class: "panel-block" }, rn = { class: "table is-striped has-text-centered" }, un = ["onClick"], dn = { key: 0 }, cn = {
  colspan: "100%",
  class: "has-text-centered"
}, pn = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), xt = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = e, s = t, o = F(!1), i = F(null), p = F(null), u = st({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(E), d = we({
      Sun: y(() => V("Date.Weekdays.Sun", h)),
      Mon: y(() => V("Date.Weekdays.Mon", h)),
      Tue: y(() => V("Date.Weekdays.Tue", h)),
      Wed: y(() => V("Date.Weekdays.Wed", h)),
      Thu: y(() => V("Date.Weekdays.Thu", h)),
      Fri: y(() => V("Date.Weekdays.Fri", h)),
      Sat: y(() => V("Date.Weekdays.Sat", h))
    }), f = y(() => i.value !== null && (l.includeTime ? Se : ke).test(i.value)), S = () => {
      if (i.value == null || i.value == "")
        return null;
      {
        if (!Se.test(i.value) && l.includeTime)
          return null;
        if (!l.includeTime && !ke.test(i.value))
          return null;
        if (ke.test(i.value) && l.includeTime)
          return null;
        let w = l.includeTime ? Se.exec(i.value) : ke.exec(i.value);
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
        s("valueChanged", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(w) && !Se.test(w)) {
        w = w.replaceAll(/[^0-9]/g, "");
        for (var O = [], G = 0; G < w.length; G += 2)
          G == 4 ? (O.push(w.substring(G, Math.min(w.length - G, 4) + G)), G += 2) : O.push(w.substring(G, Math.min(w.length - G, 2) + G));
        O.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(O[0]) || O.splice(0), O.length > 1 && (/^[0-3]/.test(O[1]) ? /^(01|03|05|07|08|10|12)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(O[1]) || O.splice(1) : /^(02|04|06|09|11)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(O[1]) || O.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(O[1]) || O.splice(1) : O.splice(1)), O.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(O[3]) || O.splice(3)), O.length > 4 && (/^[0-5][0-9]?$/.test(O[4]) || O.splice(4))), w = O.join(""), !l.includeTime && w.length > 8 && (w = w.substring(0, 8)), w.length >= 2 && (w = w.substring(0, 2) + "-" + (w.length > 2 ? w.substring(2) : "")), w.length >= 5 && (w = w.substring(0, 5) + "-" + (w.length > 5 ? w.substring(5) : "")), w.length >= 9 && l.includeTime && (w = w.substring(0, 9) + " " + (w.length > 9 ? w.substring(9) : "")), w.length >= 11 && (w = w.substring(0, 11) + ":" + (w.length > 11 ? w.substring(11) : "")), i.value = w;
      } else {
        var le = S();
        f && s("valueChanged", { name: l.name, value: le }), u.Month = le.getMonth(), u.Year = le.getFullYear();
      }
    });
    const M = y(() => ge(new Date(u.Year, u.Month, 1), h, "MMMM")), m = y(() => {
      var w = [], O = new Date(u.Year, u.Month, 1);
      O = Te(O, O.getDay() * -1);
      for (var G = S(), le = Te(new Date(u.Year, u.Month, 1), 32).getMonth(); O.getMonth() != le; ) {
        for (var Je = [], Xe = 0; Xe < 7; Xe++)
          Je.push({
            Number: O.getDate(),
            Disabled: O.getMonth() != u.Month,
            isToday: ge(O, h, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: G != null && ge(O, h, "yyyy-MM-dd") == ge(G, h, "yyyy-MM-dd")
          }), O = Te(O, 1);
        w.push(Je);
      }
      return w;
    });
    n({ getValue: S, setValue: function(w) {
      w == null ? i.value = null : i.value = ge(w, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const _ = (w) => {
      w.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + w.value : i.value = `${H((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year} ${w.value}`;
    }, v = (w) => {
      if (!w.Disabled && !w.isSelected)
        if (i.value === null)
          i.value = `${H(w.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var O = i.value.split(" ");
          O[0] = `${H(w.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}`, i.value = `${O[0]}${O.length > 1 ? " " + O[1] : ""}`;
        }
    }, B = () => {
      i.value = p.value, o.value = !1;
    }, W = () => {
      l.disabled || (p.value = i.value, o.value = !0);
    }, g = () => {
      l.disabled || (i.value = null);
    }, ae = (w) => {
      u.Month + w == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + w == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += w;
    };
    return (w, O) => (r(), c("div", null, [
      b("div", Kl, [
        j(b("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": O[0] || (O[0] = (G) => i.value = G),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, Ql), [
          [_e, i.value]
        ]),
        b("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          J(D(U), { icon: "calendar-alt" })
        ]),
        b("span", {
          class: "icon is-small is-right is-clickable",
          onClick: g
        }, [
          J(D(U), { icon: "window-close" })
        ])
      ]),
      b("div", {
        class: x(["modal", { "is-active": o.value }])
      }, [
        Xl,
        b("div", Zl, [
          b("div", en, [
            b("div", tn, [
              b("div", an, [
                b("div", ln, [
                  J(D(U), {
                    icon: "arrow-circle-left",
                    onClick: O[1] || (O[1] = (G) => ae(-1))
                  })
                ]),
                b("div", nn, N(M.value) + " " + N(u.Year), 1),
                b("div", sn, [
                  J(D(U), {
                    icon: "arrow-circle-right",
                    onClick: O[2] || (O[2] = (G) => ae(1))
                  })
                ])
              ])
            ]),
            b("div", on, [
              b("table", rn, [
                b("thead", null, [
                  b("tr", null, [
                    b("th", null, N(D(d).Sun), 1),
                    b("th", null, N(D(d).Mon), 1),
                    b("th", null, N(D(d).Tue), 1),
                    b("th", null, N(D(d).Wed), 1),
                    b("th", null, N(D(d).Thu), 1),
                    b("th", null, N(D(d).Fri), 1),
                    b("th", null, N(D(d).Sat), 1)
                  ])
                ]),
                b("tbody", null, [
                  (r(!0), c(I, null, z(m.value, (G) => (r(), c("tr", null, [
                    (r(!0), c(I, null, z(G, (le) => (r(), c("td", {
                      class: x(["is-unselectable", le.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", le.isToday ? "has-background-primary-dark" : "", le.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Je) => v(le)
                    }, N(le.Number), 11, un))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (r(), c("tfoot", dn, [
                  b("tr", null, [
                    b("td", cn, [
                      J(Qe, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValueChanged: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : A("", !0)
              ])
            ]),
            b("div", pn, [
              J(D(yt), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: O[3] || (O[3] = (G) => o.value = !1)
              }, null, 8, ["disabled"]),
              J(D(vt), {
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
const Ot = /* @__PURE__ */ k({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = ea(E);
    Oe([`${s}summernote-lite.min.css`]), [a, l] = Gt(() => import(`${s}summernote`)), await a, l();
    const o = F(null), i = e, p = t;
    return R(() => i.disabled, (d) => {
      o.value != null && $(o.value).summernote(d ? "disable" : "enable");
    }), n({ getValue: () => $(o.value).summernote("code"), setValue: (d) => {
      $(o.value).summernote("code", d);
    } }), ue(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(d) {
            p("valueChanged", { name: i.name, value: d });
          }
        }
      }), (i.disabled ?? !1) && $(o.value).summernote("disable");
    }), Ht(() => {
      $(o.value).summernote("destroy");
    }), (d, f) => (r(), c("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Ee = /* @__PURE__ */ k({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, E);
    return (a, l) => (r(), P(he(n.subtype), null, {
      default: L(() => [
        Q(N(D(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), hn = ["name"], Jt = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return R(s, (p) => l("valueChanged", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, u) => j((r(), c("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, hn)), [
      [_e, s.value]
    ]);
  }
}), mn = ["name", "disabled", "min", "max", "step"], Nt = /* @__PURE__ */ k({
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
    const a = e, l = t, s = F(null), o = () => {
      if (s.value === "")
        return null;
      let p = parseInt(s.value);
      return a.min !== void 0 && p < a.min * 1 || a.max !== void 0 && p > a.max * 1 ? null : p;
    }, i = (p) => {
      s.value = p === null ? "" : p.toString();
    };
    return R([s], (p) => l("valueChanged", { name: a.name, value: o() })), n({ getValue: o, setValue: i }), (p, u) => j((r(), c("input", {
      type: "number",
      class: "input",
      name: p.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
      disabled: p.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, mn)), [
      [_e, s.value]
    ]);
  }
}), fn = ["id"], Ce = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    translate: { type: Function }
  },
  setup(e) {
    const n = e, t = ne(n, E);
    return (a, l) => (r(), c("p", {
      id: n.name
    }, N(D(t)(n.label)), 9, fn));
  }
}), bn = { class: "radio" }, gn = ["name", "value", "disabled"], vn = /* @__PURE__ */ b("br", null, null, -1), At = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = y(() => V("Form.Error", l)), o = t, i = ne(a, E), p = F(null), u = function() {
      return p.value;
    };
    R(p, (M) => {
      o("valueChanged", { name: a.name, value: u() });
    });
    const h = y(async () => {
      if (a.values == null)
        return [];
      {
        let M = await Ke(a.values);
        return p.value === null && M.some((m) => m.selected) && (p.value = M.find((m) => m.selected).value), M.map((m) => ({
          label: m.label,
          value: m.value,
          selected: p.value === m.value
        }));
      }
    }), d = (M) => {
      p.value = M;
    }, { hiddenValues: f, disabledValues: S } = qe(a.name, E);
    return n({ getValue: u, setValue: d }), (M, m) => (r(), c("div", null, [
      J(pe, { promise: h.value }, {
        default: L(({ response: C }) => [
          M.values != null ? (r(!0), c(I, { key: 0 }, z(C, (_) => (r(), c(I, null, [
            j(b("label", bn, [
              b("input", {
                type: "radio",
                name: a.name,
                value: _.value,
                class: "radio",
                disabled: a.disabled || D(S).some((v) => v === _.value.toString())
              }, null, 8, gn),
              Q(" " + N(D(i)(_.label)), 1)
            ], 512), [
              [se, !D(f).some((v) => v === _.value.toString())]
            ]),
            vn
          ], 64))), 256)) : A("", !0)
        ]),
        pending: L(() => [
          J(D(ie))
        ]),
        rejected: L(() => [
          J(D(ce), {
            type: D(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), yn = { class: "select" }, _n = ["id", "name", "multiple", "disabled"], kn = ["value", "selected", "disabled"], $n = ["label"], Sn = ["value", "selected", "disabled"], Tt = (e, n, t) => {
  let a = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = t.length;
  return t.push(a), n.values.forEach((s) => {
    s.values === void 0 ? a.values.push(s) : t = Tt(a.label, s, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, Pt = /* @__PURE__ */ k({
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
    const a = e, l = K(E), s = y(() => V("Form.Error", l)), o = t, i = ne(a, E), p = F(null), u = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let m = await Ke(a.values), C = m.filter((v) => v.selected).map((v) => v.value);
        m.some((v) => v.values !== void 0) && m.filter((v) => v.values !== void 0).forEach((v) => {
          C = C.concat(
            v.values.filter((B) => B.selected).map((B) => B.value)
          );
        }), p.value === null || p.value.length === 0 ? p.value = null : (m = m.map((v) => {
          let B = v;
          return B.values !== void 0 && (B.values = B.values.map((W) => (W.selected = p.value.some((g) => g === W.value), W))), B;
        }), p.value.forEach((v) => {
          m.some((B) => B.value !== void 0 && B.value === v || B.values !== void 0 && B.values.some((W) => W.value === v)) || m.push({
            label: v,
            value: v
          });
        }));
        let _ = [];
        return m.forEach((v) => {
          v.values === void 0 ? _.push(v) : _ = Tt(v.label, v, _);
        }), _;
      }
    }), d = () => p.value == null || p.value.length == 0 ? null : a.multiple ? p.value.slice() : Array.isArray(p.value) ? p.value[0] : p.value;
    R(p, () => {
      u.value || o("valueChanged", { name: a.name, value: d() });
    }), R(u, (m) => {
      m || o("valueChanged", { name: a.name, value: d() });
    });
    const f = (m) => {
      u.value = !0, m != null ? a.multiple ? p.value = Array.isArray(m) ? m : [m] : p.value = m : a.multiple ? p.value = [] : p.value = null, u.value = !1;
    }, { hiddenValues: S, disabledValues: M } = qe(a.name, E);
    return n({ getValue: d, setValue: f }), (m, C) => (r(), c("div", yn, [
      h.value != null ? (r(), P(pe, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: _ }) => [
          j(b("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: x([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": C[0] || (C[0] = (v) => p.value = v),
            disabled: a.disabled
          }, [
            _ != null ? (r(!0), c(I, { key: 0 }, z(_, (v) => (r(), c(I, null, [
              v.values == null ? j((r(), c("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: D(M).some((B) => B === v.value.toString())
              }, N(D(i)(v.label)), 9, kn)), [
                [se, !D(S).some((B) => B === v.value.toString())]
              ]) : A("", !0),
              v.values != null ? (r(), c("optgroup", {
                key: 1,
                label: D(i)(v.label)
              }, [
                (r(!0), c(I, null, z(v.values, (B) => j((r(), c("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: D(M).some((W) => W === B.value.toString())
                }, N(D(i)(B.label)), 9, Sn)), [
                  [se, !D(S).some((W) => W === B.value.toString())]
                ])), 256))
              ], 8, $n)) : A("", !0)
            ], 64))), 256)) : A("", !0)
          ], 10, _n), [
            [Yt, p.value]
          ])
        ]),
        pending: L(() => [
          J(D(ie))
        ]),
        rejected: L(() => [
          J(D(ce), {
            type: D(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : A("", !0)
    ]));
  }
}), Mn = { class: "field" }, Dn = ["id", "name", "disabled"], wn = ["for"], Bn = {
  key: 0,
  class: "help is-danger"
}, Et = /* @__PURE__ */ k({
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
    const a = e, l = t, s = ne(a, E), o = F(!1);
    return R(o, (u) => l("valueChanged", { name: a.name, value: u })), n({ getValue: () => o.value, setValue: (u) => {
      o.value = u;
    } }), (u, h) => (r(), c("div", Mn, [
      j(b("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (d) => o.value = d),
        disabled: a.disabled
      }, null, 8, Dn), [
        [Ie, o.value]
      ]),
      b("label", { for: u.name }, [
        Q(N(D(s)(a.label)) + " ", 1),
        a.required ? (r(), c("span", Bn, "*")) : A("", !0)
      ], 8, wn)
    ]));
  }
}), Fn = ["type", "name", "disabled", "maxlength"], Ct = /* @__PURE__ */ k({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return R(s, (p) => l("valueChanged", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, u) => j((r(), c("input", {
      type: p.subtype,
      class: "input",
      name: p.name,
      disabled: p.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, Fn)), [
      [qt, s.value]
    ]);
  }
}), xn = ["name", "rows", "cols", "maxlength", "disabled"], Lt = 9, ve = String.fromCharCode(Lt), Me = String.fromCharCode(10), It = /* @__PURE__ */ k({
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
    const a = e, l = t, s = F(null);
    R(s, (u) => {
      l("valueChanged", { name: a.name, value: u });
    });
    const o = () => s.value, i = (u) => {
      s.value = u;
    };
    n({ getValue: o, setValue: i });
    const p = (u) => {
      if (a.supportsTab) {
        let h = o();
        switch (u.keyCode) {
          case Lt:
            let d = u.target.selectionStart, f = u.target.selectionEnd, S = h.substring(0, d), M = h.length > f ? h.substring(f) : "", m = d == f ? "" : h.substring(d, f);
            if (m.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? m.startsWith(ve) ? (m = m.substring(1), d--) : S.endsWith(ve) && (S = S.substring(0, S.length - 1), d--) : m = ve + m;
            else {
              let C = !1;
              m.endsWith(Me) && (C = !0, m = m.substring(0, m.length - 1));
              let _ = m.split(Me);
              m = "", u.shiftKey && S.endsWith(ve) && (S = S.substring(0, S.length - 1), d--), _.forEach((v, B) => {
                u.shiftKey && v.startsWith(ve) ? v = v.substring(1) : u.shiftKey || (v = ve + v), m += v + (B === _.length - 1 ? "" : Me);
              }), C && (m += Me);
            }
            return h = S + m + M, d += m.length == 1 ? 1 : 0, f = d + (m.length == 1 ? 0 : m.length), i(h), u.target.selectionStart = d, u.target.selectionEnd = f, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, h) => j((r(), c("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: p,
      "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d)
    }, null, 40, xn)), [
      [_e, s.value]
    ]);
  }
}), On = { class: "columns" }, Vt = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = a.inputs.map((d) => F(null)), o = E(He), i = E(Ye);
    return n({ setValue: (d) => {
      s.forEach((f, S) => {
        switch (a.inputs[S].type) {
          case "subform":
            f.value.setValue(d);
            break;
          default:
            f.value.setValue !== void 0 && (d === null ? f.value.setValue(null) : Object.keys(d).some((M) => M === f.value.fieldName) ? f.value.setValue(d[f.value.fieldName]) : Object.keys(d).some((M) => M === f.value.altFieldName) && f.value.setValue(d[f.value.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var d = {};
      return s.forEach((f) => {
        if (f.value.getValue != null)
          switch (f.value.type) {
            case "subform":
              d = $.extend(d, f.value.getValue());
              break;
            default:
              d[f.value.fieldName] = f.value.getValue();
              break;
          }
      }), d;
    }, isValid: () => !s.some((d) => !(d.value.isValid === void 0 || d.value.isValid())) }), (d, f) => (r(), c("div", On, [
      (r(!0), c(I, null, z(a.inputs, (S, M) => (r(), P(Wt, {
        ref_for: !0,
        ref: (m) => D(s)[M].value = m,
        input: S,
        onValueChanged: f[0] || (f[0] = (m) => l("valueChanged", m)),
        onButtonClicked: f[1] || (f[1] = (m) => l("buttonClicked", m)),
        disabled: a.disabled || D(i).some((m) => m === S.name),
        hidden: D(o).some((m) => m === S.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Jn = ["id", "name"], Nn = /* @__PURE__ */ k({
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
    F(!1);
    const o = y(() => {
      let h = Dt(a.fields);
      return s = h.map((d) => F(null)), h;
    });
    return n({ isValid: () => !s.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => s.forEach((d) => d.setValue(h)), getValue: () => {
      var h = {};
      return s.forEach((d) => {
        h = $.extend(h, d.getValue());
      }), h;
    } }), (h, d) => j((r(), c("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (r(!0), c(I, null, z(o.value, (f, S) => (r(), P(Vt, {
        ref_for: !0,
        ref: (M) => D(s)[S] = M,
        inputs: f,
        disabled: a.disabled,
        onValueChanged: d[0] || (d[0] = (M) => l("valueChanged", M)),
        onButtonClicked: d[1] || (d[1] = (M) => l("buttonClicked", M))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Jn)), [
      [se, !a.hidden]
    ]);
  }
}), An = ["for"], Tn = {
  key: 0,
  class: "help is-danger"
}, Pn = { class: "control" }, En = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Cn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Wt = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = t, s = e, o = ne(s, E), i = we(F(s.input.type)), p = y(() => {
      let g = null;
      switch (s.input.type) {
        case "autocomplete":
          g = wt;
          break;
        case "button":
          g = Pe;
          break;
        case "checkbox-group":
          g = Bt;
          break;
        case "checkbox":
          g = Ft;
          break;
        case "date":
          g = xt;
          break;
        case "full-editor":
          g = Ot;
          break;
        case "header":
          g = Ee;
          break;
        case "hidden":
          g = Jt;
          break;
        case "number":
          g = Nt;
          break;
        case "paragraph":
          g = Ce;
          break;
        case "radio-group":
          g = At;
          break;
        case "select":
          g = Pt;
          break;
        case "switch":
          g = Et;
          break;
        case "text":
          g = Ct;
          break;
        case "textarea":
          g = It;
          break;
        case "time":
          g = Qe;
          break;
        case "subform":
          g = Nn;
          break;
      }
      return g;
    }), u = function(g) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(g);
    };
    ue(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && u(s.input.value);
    });
    const h = y(() => s.input.disabled ?? s.disabled ?? !1), d = y(() => `is-${s.input.form_columns ?? 12}`), f = y(() => s.input.name), S = y(() => s.input.processVariable ?? s.input.name), M = y(() => En.some((g) => g === s.input.type) && s.input.label !== void 0 && s.input.label !== null), m = y(() => {
      let g = $.extend({}, s.input);
      return delete g.type, g.className != null && delete g.className, g.form_columns != null && delete g.form_columns, Cn.some((ae) => ae === s.input.type) && (g.translate = s.translate), g.disabled = s.disabled, g;
    }), C = (g) => {
      if (g.value !== void 0 && g.value !== null && Array.isArray(g.value)) {
        let ae = [...g.value];
        g.value = ae;
      }
      l("valueChanged", g);
    }, _ = (g) => {
      l("buttonClicked", g);
    }, v = () => {
      if (a.value != null && a.value.getValue != null) {
        let g = a.value.getValue();
        return g != null && Array.isArray(g) ? [...g] : g;
      }
      return null;
    };
    return n({ setValue: u, fieldName: f, type: i, altFieldName: S, getValue: v, isValid: () => {
      if (s.input.type === "subform" && a.value !== null)
        return a.value.isValid();
      if (s.input.required ?? !1) {
        let g = v();
        return g != null && (Array.isArray(g) ? g.length > 0 : !0) && g.toString() !== "";
      }
      return !0;
    }, setValues: (g) => {
      if (s.input.type === "subform" && a.value !== null)
        a.value.setValues(g);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (g, ae) => j((r(), c("div", {
      class: x(["field column", [d.value]])
    }, [
      s.input.type == "header" ? (r(), P(Ee, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (r(), P(Ce, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (r(), P(Pe, {
        key: 2,
        name: s.input.name,
        sstyle: s.input.style,
        className: s.input.className,
        icon: s.input.icon,
        label: s.input.label,
        disabled: h.value,
        onButtonClicked: _,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (r(), c(I, { key: 3 }, [
        M.value ? (r(), c("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Q(N(D(o)(s.input.label)) + " ", 1),
          s.input.required ? (r(), c("span", Tn, "*")) : A("", !0)
        ], 8, An)) : A("", !0),
        b("div", Pn, [
          (r(), P(he(p.value), Y(m.value, {
            onValueChanged: C,
            ref_key: "inp",
            ref: a
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [se, !s.hidden]
    ]);
  }
});
const Ln = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, In = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["valueChanged", "buttonClicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, E);
    Ne("Translate", (_) => s.value(_));
    let o = [];
    const i = y(() => {
      if (a.elements != null) {
        let _ = Dt(a.elements);
        return o = _.map((v) => F(null)), _;
      } else
        return null;
    }), p = () => {
      let _ = {};
      return o.forEach((v) => {
        _ = $.extend(_, v.getValue());
      }), _;
    }, u = (_) => {
      o.forEach((v) => v.setValue(_));
    }, h = () => !o.some((_) => !(_.isValid === void 0 || _.isValid())), d = F([]);
    Ne(He, we(d));
    const f = (_) => {
      Array.isArray(_) ? d.value = [...d.value, ..._] : d.value.push(_);
    }, S = (_) => {
      Array.isArray(_) ? d.value = d.value.filter((v) => _.indexOf(v) >= 0) : d.value = d.value.filter((v) => v !== _);
    }, M = F([]);
    return Ne(Ye, we(M)), n({ getValues: p, setValues: u, isValid: h, hideField: f, showField: S, disableField: (_) => {
      Array.isArray(_) ? M.value = [...M.value, ..._] : M.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? M.value = M.value.filter((v) => _.indexOf(v) >= 0) : M.value = M.value.filter((v) => v !== _);
    } }), (_, v) => (r(), c("form", Ln, [
      i.value != null ? (r(!0), c(I, { key: 0 }, z(i.value, (B, W) => (r(), P(Vt, {
        ref_for: !0,
        ref: (g) => D(o)[W] = g,
        inputs: B,
        key: W,
        onValueChanged: v[0] || (v[0] = (g) => l("valueChanged", g)),
        onButtonClicked: v[1] || (v[1] = (g) => l("buttonClicked", g)),
        disabled: _.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : A("", !0)
    ]));
  }
}), Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: wt,
  Button: Pe,
  Checkbox: Ft,
  CheckboxGroup: Bt,
  ComponentForm: In,
  DateField: xt,
  FormComponent: Wt,
  FullEditor: Ot,
  Header: Ee,
  Hidden: Jt,
  NumberField: Nt,
  Paragraph: Ce,
  RadioGroup: At,
  Select: Pt,
  Switch: Et,
  Text: Ct,
  TextArea: It,
  Time: Qe
}, Symbol.toStringTag, { value: "Module" })), Wn = { class: "hero-body" }, zn = { class: "title" }, Rn = {
  key: 0,
  class: "subtitle"
}, Un = /* @__PURE__ */ k({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("section", {
      class: x(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + n.type])
    }, [
      b("div", Wn, [
        b("p", zn, N(n.title), 1),
        n.subtitle ? (r(), c("p", Rn, N(n.subtitle), 1)) : A("", !0)
      ])
    ], 2));
  }
}), jn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, Gn = {}, Hn = { class: "box" };
function Yn(e, n) {
  return r(), c("div", Hn, [
    T(e.$slots, "default")
  ]);
}
const qn = /* @__PURE__ */ jn(Gn, [["render", Yn]]), Kn = {
  key: 0,
  class: "icon is-clickable"
}, Qn = /* @__PURE__ */ k({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n;
    return (l, s) => (r(), c("li", {
      class: x({ "is-active": t.active })
    }, [
      b("a", {
        onClick: s[0] || (s[0] = (o) => a("click"))
      }, [
        t.icon ? (r(), c("span", Kn, [
          J(D(U), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : A("", !0),
        Q(" " + N(t.title), 1)
      ])
    ], 2));
  }
}), Xn = /* @__PURE__ */ k({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Fe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["breadcrumb"];
      return n.alignment && n.alignment !== Fe.left && a.push(`is-${n.alignment}`), n.size && n.size !== X.normal && a.push(`is-${n.size}`), n.seperator && a.push(`has-${n.seperator}-seperator`), a;
    });
    return (a, l) => (r(), c("nav", {
      class: x(t.value),
      "aria-label": "breadcrumbs"
    }, [
      b("ul", null, [
        T(a.$slots, "default")
      ])
    ], 2));
  }
}), Zn = {
  key: 0,
  class: "card-icon"
}, es = { class: "card-icon-wrapper" }, ts = { class: "card-header" }, as = { class: "card-content" }, ls = { class: "card-footer" }, zt = /* @__PURE__ */ k({
  __name: "card",
  props: {
    full_width: { type: Boolean, default: !1 },
    full_height: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const n = e, t = {
      addon_class: "card-footer-item"
    }, a = {
      header_class: "card-header-title is-centered",
      addon_class: "card-header-icon"
    };
    return (l, s) => (r(), c("div", {
      class: x(["card", { "is-fullwidth": n.full_width, "is-fullheight": n.full_height }])
    }, [
      n.icon !== null ? (r(), c("div", Zn, [
        b("div", es, [
          J(U, {
            icon: n.icon,
            size: D(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : A("", !0),
      b("div", ts, [
        T(l.$slots, "header", re(de(a)))
      ]),
      b("div", as, [
        T(l.$slots, "content")
      ]),
      b("div", ls, [
        T(l.$slots, "footer", re(de(t)))
      ])
    ], 2));
  }
}), ns = /* @__PURE__ */ k({
  __name: "column-container",
  props: {
    modifiers: {}
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["columns"];
      return n.modifiers !== void 0 && n.modifiers !== null && (a = a.concat(n.modifiers.map((l) => `is-${l}`))), a;
    });
    return (a, l) => (r(), c("div", {
      class: x(t.value)
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), ss = /* @__PURE__ */ k({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {}
  },
  setup(e) {
    const n = e, t = y(() => {
      var a = [];
      return n.size && a.push(`is-${n.size}`), n.offset && a.push(`is-offset-${n.offset}`), n.border && (n.border.some((l) => l === Re.all) ? a.push("is-bordered") : n.border.forEach((l) => a.push(`is-bordered-${l}`))), a;
    });
    return (a, l) => (r(), c("div", {
      class: x(["column", t.value])
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), os = /* @__PURE__ */ b("div", { class: "modal-background" }, null, -1), rs = { class: "modal-content" }, is = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, us = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    has_close: { type: Boolean, default: !1 },
    z_index: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("div", {
      class: x({ modal: !0, "is-active": n.display }),
      style: Ve(`z-index:${n.z_index}`)
    }, [
      os,
      b("div", rs, [
        T(t.$slots, "default")
      ]),
      n.has_close ? (r(), c("button", is)) : A("", !0)
    ], 6));
  }
}), ds = /* @__PURE__ */ b("div", { class: "modal-background" }, null, -1), cs = {
  key: 0,
  class: "card-icon"
}, ps = { class: "card-icon-wrapper" }, hs = { class: "modal-card-head" }, ms = { class: "modal-card-body" }, fs = { class: "modal-card-foot" }, bs = /* @__PURE__ */ k({
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
    const t = e, a = n, l = {
      addon_class: "card-footer-item"
    }, s = {
      header_class: "modal-card-title is-centered",
      addon_class: "card-footer-item"
    }, o = y(() => {
      var i = [];
      return t.full_width && i.push("is-fullwidth"), t.full_height && i.push("is-fullheight"), t.max_width && i.push("is-maxwidth"), t.max_height && i.push("is-maxheight"), i;
    });
    return (i, p) => (r(), c("div", {
      class: x(["modal", { "is-active": t.show }])
    }, [
      ds,
      b("div", {
        class: x(["modal-card", o.value])
      }, [
        t.icon !== null ? (r(), c("div", cs, [
          b("div", ps, [
            J(U, {
              icon: t.icon,
              size: D(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : A("", !0),
        b("div", hs, [
          T(i.$slots, "header", re(de(s))),
          i.has_close ? (r(), c("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: p[0] || (p[0] = (u) => a("close"))
          })) : A("", !0)
        ]),
        b("div", ms, [
          T(i.$slots, "content")
        ]),
        b("div", fs, [
          T(i.$slots, "footer", re(de(l)))
        ])
      ], 2)
    ], 2));
  }
}), gs = {
  key: 0,
  class: "panel-heading"
}, vs = {
  key: 1,
  class: "panel-tabs"
}, ys = { class: "panel-block" }, _s = /* @__PURE__ */ k({
  __name: "panel",
  props: {
    type: {},
    block_names: {},
    has_tabs: { type: Boolean },
    full_width: { type: Boolean },
    full_height: { type: Boolean },
    has_header: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => n.block_names ?? ["default"]), a = y(() => {
      let l = [];
      return n.type && l.push(`is-${n.type}`), n.full_width && l.push("is-fullwidth"), n.full_height && l.push("is-fullheight"), l;
    });
    return (l, s) => (r(), c("div", {
      class: x(["panel", a.value])
    }, [
      n.has_header ? (r(), c("div", gs, [
        T(l.$slots, "header")
      ])) : A("", !0),
      n.has_tabs ? (r(), c("div", vs, [
        T(l.$slots, "tabs")
      ])) : A("", !0),
      (r(!0), c(I, null, z(t.value, (o) => (r(), c("div", ys, [
        T(l.$slots, o)
      ]))), 256))
    ], 2));
  }
}), Rt = /* @__PURE__ */ k({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixed_header: { type: Boolean },
    full_width: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      let l = [];
      return n.scrollable && l.push("table-container"), n.fixed_header && n.scrollable && l.push("is-fixed"), l;
    }), a = y(() => {
      let l = ["table", "is-striped", "is-hoverable"];
      return n.fixed_header && !n.scrollable && l.push("is-fixed"), n.full_width && l.push("is-fullwidth"), n.narrow && l.push("is-narrow"), l;
    });
    return (l, s) => (r(), c("div", {
      class: x(t.value)
    }, [
      b("table", {
        class: x(a.value)
      }, [
        b("thead", null, [
          T(l.$slots, "thead")
        ]),
        b("tbody", null, [
          T(l.$slots, "tbody")
        ]),
        b("tfoot", null, [
          T(l.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), ks = ["href", "onClick"], $s = {
  key: 0,
  class: "icon is-small"
}, Ss = { style: { width: "100px" } }, Ms = /* @__PURE__ */ k({
  __name: "tabs",
  props: {
    tabs: {},
    alignment: {},
    type: {},
    full_width: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      let l = ["tabs"];
      return n.alignment ? l.push(`is-${n.alignment}`) : l.push("is-left"), n.type && l.push(`is-${n.type}`), n.full_width && l.push("is-fullwidth"), l;
    }), a = (l, s) => {
      (s.href === null || s.href === void 0) && s.onClick !== void 0 && (l.preventDefault(), s.onClick());
    };
    return (l, s) => {
      const o = Le("Progress");
      return r(), c("div", {
        class: x(t.value)
      }, [
        b("ul", null, [
          J(D(pe), {
            promise: n.tabs
          }, {
            default: L(({ response: i }) => [
              (r(!0), c(I, null, z(i, (p) => (r(), c("li", {
                class: x({ "is-active": p.active })
              }, [
                b("a", {
                  href: p.href,
                  onClick: (u) => a(u, p)
                }, [
                  p.icon ? (r(), c("span", $s, [
                    J(D(U), {
                      icon: p.icon
                    }, null, 8, ["icon"])
                  ])) : A("", !0),
                  b("span", null, N(p.title), 1)
                ], 8, ks)
              ], 2))), 256))
            ]),
            pending: L(() => [
              b("li", Ss, [
                J(o, {
                  size: D(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])
      ], 2);
    };
  }
}), Ds = { class: "slideout-content" }, ws = /* @__PURE__ */ k({
  __name: "slideout",
  props: {
    show: { type: Boolean },
    has_close: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = e, a = n;
    return (l, s) => (r(), c("div", {
      class: x(["slideout", { "is-active": t.show }])
    }, [
      b("div", {
        class: "slideout-background",
        onClick: s[0] || (s[0] = (o) => a("close"))
      }),
      b("div", Ds, [
        T(l.$slots, "default")
      ]),
      l.has_close ? (r(), c("button", {
        key: 0,
        class: "delete",
        "aria-label": "close",
        onClick: s[1] || (s[1] = (o) => a("close"))
      })) : A("", !0)
    ], 2));
  }
}), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Un,
  Box: qn,
  Breadcrumbs: Xn,
  BreadcrumbsItem: Qn,
  Card: zt,
  Column: ss,
  ColumnContainer: ns,
  List: Mt,
  ListItem: De,
  Modal: us,
  ModalCard: bs,
  Panel: _s,
  SlideOut: ws,
  Table: Rt,
  Tabs: Ms
}, Symbol.toStringTag, { value: "Module" }));
const nt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Oe(`${nt.substring(0, nt.lastIndexOf("/"))}/style.css`);
const Fs = ["cerulean", "cosmo", "cyborg", "dark", "darkly", "default", "flatly", "journal", "light", "litera", "lumen", "lux", "materia", "minty", "morph", "pulse", "quartz", "sandstone", "simplex", "sketchy", "slate", "solar", "spacelab", "superhero", "united", "vapor", "yeti", "zephyr"];
function xs(e) {
  document.getElementsByTagName("html")[0].setAttribute("data-theme", e ?? "");
}
const Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Fs,
  setSkin: xs
}, Symbol.toStringTag, { value: "Module" })), Js = /* @__PURE__ */ k({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    show_refresh: { type: Boolean },
    width: {},
    height: {},
    legend_position: { default: ze.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: n }) {
    const t = `${la(E)}chart.umd.min.js`, a = F(null), l = e, s = n;
    let o = null;
    const i = () => {
      o != null && o.update();
    }, p = y(() => {
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
    ), ue(async () => {
      let u = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legend_position}`,
            labels: {
              filter: (d, f) => d.text != null
            },
            onClick: function(d, f) {
              s("legendItemClick", o, f);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: h } = await We(t, ["Chart"]);
      o = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), o.update();
    }), (u, h) => (r(), P(zt, null, ot({
      content: L(() => [
        b("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ve(p.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: L((d) => [
          b("h3", {
            class: x(d.headerClass)
          }, N(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.show_refresh != null && l.show_refresh != null && l.show_refresh ? {
        name: "footer",
        fn: L((d) => [
          J(_t, Y(d, { onClick: i }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Ns = /* @__PURE__ */ k({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["valueChanged"],
  setup(e, { expose: n, emit: t }) {
    const a = `${na(E)}src-noconflict/ace.js`, l = e, s = t, o = F(null), i = F(null), p = function() {
      return i.value.getValue() == "" ? null : i.value.getValue();
    }, u = function(d) {
      i.value.setValue(d ?? "");
    };
    R(() => l.readonly, (d) => {
      i.value.setReadOnly(d == null || d == null ? !1 : d);
    }), R(() => l.value, (d) => {
      u(d);
    }), R(() => l.language, (d) => {
      i.value.getSession().setMode(d);
    });
    const h = y(() => {
      let d = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let f = 0; f < l.autocompletes.length; f++)
          l.autocompletes[f].method.indexOf(".") >= 0 ? d = Math.min(d, l.autocompletes[f].method.indexOf(".")) : d = Math.min(d, l.autocompletes[f].method.length);
        if (d > 3 && l.autocompletes.length > 0) {
          let f = !0, S = l.autocompletes[0].method.substring(0, 3);
          for (let M = 0; M < l.autocompletes.length; M++)
            if (l.autocompletes[M].method.substring(0, 3) != S) {
              f = !1;
              break;
            }
          f && (d = 3);
        }
      }
      return d;
    });
    return n({ getValue: p, setValue: u }), ue(async () => {
      const { ace: d } = await We(a, ["ace"]);
      i.value = Kt(d.edit(o.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), i.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && i.value.setValue(l.value), i.value.on("change", () => s("valueChanged", p())), l.autocompletes !== null && l.autocompletes !== void 0 && (i.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), i.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(f, S, M, m, C) {
          var _ = [];
          if (m = m.toUpperCase(), m.length >= h && (_ = l.autocompletes.filter((v) => v.method.toUpperCase().startsWith(m) && v.method.length > m.legend).map((v) => ({
            caption: v.method + (v.description === null || v.description === void 0 ? "" : "->" + v.description),
            value: v.method,
            meta: "autos"
          }))), _.length === 0) {
            C(null, []);
            return;
          }
          C(null, _.map(function(v) {
            return v;
          }));
        }
      }]);
    }), (d, f) => (r(), c("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), As = { key: 0 }, Ts = { colspan: "100%" }, Ps = ["colspan", "rowspan"], Es = ["onClick"], Cs = { class: "icon" }, Ls = { key: 0 }, Is = { colspan: "100%" }, Vs = ["colspan", "rowspan", "onClick"], Ws = { colspan: "100%" }, zs = /* @__PURE__ */ k({
  __name: "grid",
  props: {
    columns: {},
    data: {},
    empty_message: {},
    column_rows: {},
    has_filter: { type: Boolean },
    current_sort: {},
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
    current_page: {}
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = y(() => ({
      scrollable: t.scrollable,
      fixed_header: t.fixed_header,
      full_width: t.full_width,
      narrow: t.narrow
    })), s = y(() => ({
      use_next: t.use_next,
      has_more: t.has_more,
      has_previous: t.has_previous,
      size: t.size,
      rounded: t.rounded,
      button_type: t.button_type,
      total_pages: t.total_pages,
      current_page: t.current_page
    })), o = y(() => t.column_rows === void 0 || t.column_rows.length === 0 ? t.columns : t.column_rows.map((p) => p.map((u) => t.columns.filter((h) => h.some((d) => d.id === u))[0].find((h) => h.id === u)))), i = (p) => {
      t.current_sort !== void 0 && t.current_sort !== null && t.current_sort.column === p ? a("sort", {
        column: p,
        ascending: !t.current_sort.ascending
      }) : a("sort", {
        column: p,
        ascending: !0
      });
    };
    return (p, u) => (r(), P(Rt, re(de(l.value)), ot({
      thead: L(() => [
        t.has_filter ?? !1 ? (r(), c("tr", As, [
          b("th", Ts, [
            J(kt, {
              onFilter: u[0] || (u[0] = (h) => a("filter", h))
            })
          ])
        ])) : A("", !0),
        (r(!0), c(I, null, z(t.columns, (h) => (r(), c("tr", null, [
          (r(!0), c(I, null, z(h, (d) => (r(), c("th", {
            colspan: d.headerColspan,
            rowspan: d.headerRowspan
          }, [
            T(p.$slots, `head-${d.id}`, {}, () => [
              t.current_sort !== void 0 && t.current_sort !== null && (d.canSort ?? !1) && d.id === t.current_sort.column ? (r(), c("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (f) => i(d.id)
              }, [
                b("span", Cs, [
                  J(U, { icon: "arrow-down" })
                ]),
                b("span", null, N(d.title), 1)
              ], 8, Es)) : (r(), c(I, { key: 1 }, [
                Q(N(d.title), 1)
              ], 64))
            ])
          ], 8, Ps))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        t.data === null || t.data.length === 0 ? (r(), c("tr", Ls, [
          b("td", Is, [
            t.data === null ? (r(), P(ie, { key: 0 })) : (r(), P(ce, {
              key: 1,
              message: t.empty_message ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), c(I, { key: 1 }, z(t.data, (h, d) => (r(), c(I, null, [
          (r(!0), c(I, null, z(o.value.filter((f) => f.some((S) => !(S.headerOnly ?? !1))), (f, S) => (r(), c("tr", {
            key: `row-${d}-${S}`
          }, [
            (r(!0), c(I, null, z(f.filter((M) => !(M.headerOnly ?? !1)), (M) => (r(), c("td", {
              key: `data-${d}-${S}`,
              colspan: M.dataColspan,
              rowspan: M.dataRowspan,
              onClick: (m) => a("cellClicked", { rowIndex: d, data: M.propertyName ? h[M.propertyName] : null, row: h })
            }, [
              T(p.$slots, `body-${M.id}`, re(de({ rowIndex: d, data: M.propertyName ? h[M.propertyName] : null, row: h })), () => [
                Q(N(M.propertyName ? h[M.propertyName] : null), 1)
              ])
            ], 8, Vs))), 128))
          ]))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      (t.has_previous ?? !1) || (t.current_page ?? 0) > 0 || (t.has_more ?? !1) || (t.current_page ?? 0) < (t.total_pages ?? 0 - 1) ? {
        name: "tfoot",
        fn: L(() => [
          b("tr", null, [
            b("td", Ws, [
              J($t, Y(s.value, {
                onMoveForward: u[1] || (u[1] = (h) => a("moveForward")),
                onMoveBack: u[2] || (u[2] = (h) => a("moveBack")),
                onGoToPage: u[3] || (u[3] = (h) => a("goToPage", h))
              }), null, 16)
            ])
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Js,
  CodeWriter: Ns,
  Grid: zs
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Gs,
  Button: Hs,
  ButtonAdd: Ys,
  ButtonCancel: qs,
  ButtonDelete: Ks,
  ButtonDisable: Qs,
  ButtonDownload: Xs,
  ButtonEdit: Zs,
  ButtonEnable: eo,
  ButtonOkay: to,
  ButtonPrint: ao,
  ButtonRefresh: lo,
  ButtonSave: no,
  ButtonUpload: so,
  CheckMark: oo,
  DynamicSlot: ro,
  Filter: io,
  Icon: uo,
  Message: co,
  Notification: po,
  PageNotification: ho,
  Pagination: mo,
  Promised: fo,
  Progress: bo,
  NavBar: go,
  Menu: vo,
  MenuLabel: yo,
  MenuList: _o,
  MenuEntry: ko,
  ToolTip: $o,
  Badge: So,
  Tag: Mo,
  Tags: Do
} = wl, { DraggableItem: wo, DropZone: Bo, Sortable: Fo } = Ol, {
  AutoComplete: xo,
  CheckboxGroup: Oo,
  Checkbox: Jo,
  DateField: No,
  ComponentForm: Ao,
  FullEditor: To,
  Header: Po,
  Hidden: Eo,
  NumberField: Co,
  Paragraph: Lo,
  RadioGroup: Io,
  Select: Vo,
  Switch: Wo,
  Text: zo,
  TextArea: Ro,
  Time: Uo,
  FormComponent: jo
} = Vn, {
  Banner: Go,
  Box: Ho,
  BreadcrumbsItem: Yo,
  Breadcrumbs: qo,
  Card: Ko,
  Column: Qo,
  ColumnContainer: Xo,
  List: Zo,
  ListItem: er,
  ModalCard: tr,
  Panel: ar,
  Table: lr,
  Tabs: nr,
  Modal: sr,
  SlideOut: or
} = Bs, { AVAIABLE_SKINS: rr, setSkin: ir } = Os, {
  ColorTypes: ur,
  NoticeTypes: dr,
  Sizes: cr,
  AnimationSpeeds: pr,
  AnimationTypes: hr,
  IconSizes: mr,
  ChartLegendPositions: fr,
  ChartTypes: br,
  DropZoneQuadrants: gr,
  BreadCrumbAlignments: vr,
  BreadCrumbSeperators: yr,
  ColumnContainerModifiers: _r,
  ColumnSizes: kr,
  ColumnOffsetSizes: $r,
  BorderTypes: Sr,
  TabAlignments: Mr,
  TabStyles: Dr,
  TileSizes: wr,
  TileTypes: Br,
  FixedNavBarPositions: Fr,
  FixedMenuPositions: xr,
  BadgePositiions: Or,
  ToolTipPositions: Jr,
  ToolTipTextAlignments: Nr
} = Xt, { loadNonEs6Module: Ar } = Qt, { Chart: Tr, CodeWriter: Pr, Grid: Er } = Rs;
export {
  rr as AVAIABLE_SKINS,
  Gs as Animation,
  pr as AnimationSpeeds,
  hr as AnimationTypes,
  xo as AutoComplete,
  So as Badge,
  Or as BadgePositiions,
  Go as Banner,
  Sr as BorderTypes,
  Ho as Box,
  vr as BreadCrumbAlignments,
  yr as BreadCrumbSeperators,
  qo as Breadcrumbs,
  Yo as BreadcrumbsItem,
  Hs as Button,
  Ys as ButtonAdd,
  qs as ButtonCancel,
  Ks as ButtonDelete,
  Qs as ButtonDisable,
  Xs as ButtonDownload,
  Zs as ButtonEdit,
  eo as ButtonEnable,
  to as ButtonOkay,
  ao as ButtonPrint,
  lo as ButtonRefresh,
  no as ButtonSave,
  so as ButtonUpload,
  Ko as Card,
  Tr as Chart,
  fr as ChartLegendPositions,
  br as ChartTypes,
  oo as CheckMark,
  Jo as Checkbox,
  Oo as CheckboxGroup,
  Pr as CodeWriter,
  ur as ColorTypes,
  Qo as Column,
  Xo as ColumnContainer,
  _r as ColumnContainerModifiers,
  $r as ColumnOffsetSizes,
  kr as ColumnSizes,
  Ao as ComponentForm,
  No as DateField,
  wo as DraggableItem,
  Bo as DropZone,
  gr as DropZoneQuadrants,
  ro as DynamicSlot,
  io as Filter,
  xr as FixedMenuPositions,
  Fr as FixedNavBarPositions,
  jo as FormComponent,
  To as FullEditor,
  Er as Grid,
  Po as Header,
  Eo as Hidden,
  uo as Icon,
  mr as IconSizes,
  Zo as List,
  er as ListItem,
  vo as Menu,
  ko as MenuEntry,
  yo as MenuLabel,
  _o as MenuList,
  co as Message,
  sr as Modal,
  tr as ModalCard,
  go as NavBar,
  dr as NoticeTypes,
  po as Notification,
  Co as NumberField,
  ho as PageNotification,
  mo as Pagination,
  ar as Panel,
  Lo as Paragraph,
  bo as Progress,
  fo as Promised,
  Io as RadioGroup,
  Vo as Select,
  cr as Sizes,
  or as SlideOut,
  Fo as Sortable,
  Wo as Switch,
  Mr as TabAlignments,
  Dr as TabStyles,
  lr as Table,
  nr as Tabs,
  Mo as Tag,
  Do as Tags,
  zo as Text,
  Ro as TextArea,
  wr as TileSizes,
  Br as TileTypes,
  Uo as Time,
  $o as ToolTip,
  Jr as ToolTipPositions,
  Nr as ToolTipTextAlignments,
  Ar as loadNonEs6Module,
  ir as setSkin
};
//# sourceMappingURL=components.esm.js.map
