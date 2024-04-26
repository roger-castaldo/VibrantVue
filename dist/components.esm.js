import { computed as y, defineComponent as k, openBlock as r, createBlock as P, Transition as Ut, withCtx as L, renderSlot as A, createElementBlock as c, normalizeClass as x, inject as E, ref as F, watch as z, createVNode as N, createCommentVNode as T, toDisplayString as J, mergeProps as Y, unref as M, onMounted as ue, Fragment as V, renderList as R, resolveDynamicComponent as pe, normalizeProps as re, guardReactiveProps as de, withDirectives as j, createElementVNode as f, vModelText as _e, createTextVNode as Q, vShow as se, toRefs as jt, reactive as nt, resolveComponent as st, vModelCheckbox as Ve, normalizeStyle as We, readonly as we, withAsyncContext as Ht, onUnmounted as Gt, vModelSelect as Yt, vModelDynamic as qt, provide as Ae, createSlots as ot, markRaw as Kt } from "vue";
import "jquery";
const Oe = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let i = document.createElement("link"), h = new Promise((u) => {
        i.onload = function() {
          u(l);
        };
      });
      t[s] = h, a.appendChild(i), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), i.setAttribute("server_path", l), i.setAttribute("href", l);
    } else
      t[s] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    n(l);
  });
}), he = [], Ce = (e, n) => new Promise((t) => {
  let a = he.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && n !== void 0 || a.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = he.find((o) => o.path === e);
        s == null ? (clearTimeout(l), t(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), t(s.result));
      }, 500);
    } else
      t(a.result);
  else {
    he.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let o = he.findIndex((i) => i.path === e);
      if (n === void 0)
        he[o].result = void 0;
      else {
        let i = {};
        n.forEach((h) => {
          i[h] = window[h];
        }), he[o].result = i;
      }
      t(he[o].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: Oe,
  loadNonEs6Module: Ce
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), me = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(me || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), rt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(rt || {}), ze = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(ze || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), it = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullwidth", e.fullHeight = "fullheight", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(dt || {}), ct = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(ct || {}), Je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Je || {}), pt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(mt || {}), bt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(bt || {}), xe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(xe || {}), ft = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(ft || {}), Re = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(je || {});
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: me,
  AnimationTypes: Be,
  BadgePositiions: Re,
  BorderTypes: Je,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: it,
  ChartLegendPositions: ze,
  ChartTypes: rt,
  ColorTypes: q,
  ColumnContainerModifiers: ut,
  ColumnOffsetSizes: ct,
  ColumnSizes: dt,
  DropZoneQuadrants: ee,
  FixedMenuPositions: ft,
  FixedNavBarPositions: xe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: X,
  TabAlignments: pt,
  TabStyles: ht,
  TileSizes: mt,
  TileTypes: bt,
  ToolTipPositions: Ue,
  ToolTipTextAlignments: je
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
    speed: { default: me.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = aa(E);
    Oe(`${n}animate.min.css`);
    const t = e, a = (p) => {
      switch (p) {
        case me.slower:
          return 3e3;
        case me.fast:
          return 800;
        case me.faster:
          return 500;
        default:
          return 2e3;
      }
    }, l = (p) => p === void 0 ? "" : `animate__${p}`, s = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, o = y(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), i = y(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), h = y(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed ?? "")
    ].join(" "));
    return (p, d) => t.repeating ? (r(), c("div", {
      key: 1,
      class: x(u.value)
    }, [
      A(p.$slots, "default")
    ], 2)) : (r(), P(Ut, {
      key: 0,
      "enter-active-class": i.value,
      "leave-active-class": h.value,
      duration: o.value
    }, {
      default: L(() => [
        A(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), sa = "brands.min.css", oa = "all.min.css", Xe = "icon_styles", ra = /\.fa-([^: ]+):before/g, ia = /url\(([^)]+)\)/g, ye = F([]), Te = F(!1), Ze = async (e, n) => {
  if (!Te.value) {
    Te.value = !0;
    let t;
    ye.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", Xe), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(Xe), ye.value = [" "];
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
    }), t.innerText = l, ye.value.splice(0, 1), Te.value = !1;
  }
}, U = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = ta(E), t = Zt(E);
    ye.value.length === 0 ? Ze(n, t.value) : z(t, () => Ze(n, t.value));
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
    size: { default: X.small },
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = y(() => {
      let s = ["button", "is-rounded", `is-${t.size}`, `is-${t.type}`];
      return t.disabled && s.push("disabled"), t.hidemobile && s.push("is-hidden-mobile"), t.hidetablet && s.push("is-hidden-tablet-only"), t.hidedesktop && s.push("is-hidden-desktop is-hidden-widescreen"), s.join(" ");
    });
    return (s, o) => (r(), c("button", {
      class: x(l.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (i) => a("click"))
    }, [
      t.icon != null ? (r(), c("span", da, [
        N(U, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      t.title != null ? (r(), c("span", ca, J(t.title), 1)) : T("", !0)
    ], 10, ua));
  }
}), pa = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, ha = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', ma = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', ba = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, fa = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', ga = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', va = {
  Button: JSON.parse(pa),
  Filter: JSON.parse(ha),
  Pagination: JSON.parse(ma),
  Date: JSON.parse(ba),
  Form: JSON.parse(fa),
  Wizard: JSON.parse(ga)
}, W = (e, n) => {
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Add", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Cancel", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Delete", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Disable", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Download", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Edit", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Enable", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Okay", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Print", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Refresh", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Save", a),
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
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = K(E), l = y(() => ({
      title: W("Button.Upload", a),
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
    checked: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), P(U, {
      icon: `square-${n.checked ? "check" : "xmark"}`,
      size: M(oe).normal
    }, null, 8, ["icon", "size"]));
  }
}), et = async (e, n, t) => {
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
    return z(() => [t.url, t.filter], async () => {
      n.value = await et(t.url, t.sortMethod, a);
    }), ue(async () => {
      n.value = await et(t.url, t.sortMethod, a);
    }), (l, s) => (r(!0), c(V, null, R(n.value, (o) => (r(), P(pe(o), re(de(t.props)), null, 16))), 256));
  }
}), Oa = { class: "control has-icons-left" }, Ja = ["placeholder"], Na = { class: "icon is-small is-left" }, kt = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = y(() => W("Filter.Filter", l)), o = F(null);
    z([o], (h) => {
      h[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const i = (h) => {
      h.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return ue(() => {
      t.default_value && (o.value = t.default_value);
    }), (h, u) => (r(), c("div", Oa, [
      j(f("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": u[0] || (u[0] = (p) => o.value = p),
        onKeypress: i
      }, null, 40, Ja), [
        [_e, o.value]
      ]),
      f("span", Na, [
        N(U, { icon: "filter" })
      ])
    ]));
  }
}), Aa = {
  key: 0,
  class: "message-header"
}, Ta = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Pa = { class: "message-body" }, Ea = /* @__PURE__ */ k({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  setup(e) {
    const n = e, t = y(() => n.size === X.normal ? null : `is-${n.size}`), a = y(() => `is-${n.type}`);
    return (l, s) => (r(), c("article", {
      class: x(["message", t.value, a.value])
    }, [
      n.title ? (r(), c("div", Aa, [
        f("p", null, J(n.title), 1),
        n.hasDelete ? (r(), c("button", Ta)) : T("", !0)
      ])) : T("", !0),
      f("div", Pa, [
        A(l.$slots, "default", {}, () => [
          Q(J(n.message), 1)
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
      A(t.$slots, "default", {}, () => [
        Q(J(n.message), 1)
      ])
    ], 2));
  }
}), Ia = {
  key: 0,
  class: "modal-background"
}, La = {
  key: 0,
  class: "title"
}, Va = { class: "block" }, Wa = /* @__PURE__ */ k({
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
      return t.isLight && o.push("is-light-mode"), t.hasClose === void 0 || t.hasClose === null || t.hasClose || o.push("has-no-close"), o;
    });
    return (o, i) => (r(), c("div", {
      class: x({ modal: t.blockUser && t.visible, "is-active": t.blockUser && t.visible })
    }, [
      t.blockUser && t.visible ? (r(), c("div", Ia)) : T("", !0),
      N(gt, {
        incoming: M(Be).fadeIn,
        outgoing: M(Be).fadeOut,
        speed: M(me).slower
      }, {
        default: L(() => [
          t.visible ? (r(), c("div", {
            key: 0,
            class: x(s.value)
          }, [
            N(U, {
              icon: l.value,
              size: M(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (r(), c("h1", La, J(t.header), 1)) : T("", !0),
            f("div", Va, J(t.message), 1),
            t.hasClose ? (r(), P(U, {
              key: 1,
              icon: "circle-xmark",
              onClick: i[0] || (i[0] = (h) => a("close")),
              size: M(oe).large
            }, null, 8, ["size"])) : T("", !0)
          ], 2)) : T("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Ca = ["title", "disabled"], za = ["title", "disabled"], Ra = {
  key: 0,
  class: "pagination-list"
}, Ua = {
  key: 0,
  class: "pagination-ellipsis"
}, ja = ["aria-label", "onOnclick"], $t = /* @__PURE__ */ k({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: void 0 },
    hasprevious: { type: Boolean, default: void 0 },
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    buttontype: {},
    totalpages: {},
    currentpage: {}
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(E), s = y(() => W(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = y(() => W(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), i = y(() => t.buttontype ? `has-background-${t.buttontype}` : ""), h = y(() => W("Pagination.GoToPage", l)), u = y(() => (t.hasprevious ?? !1) || (t.currentpage ?? 0) > 0), p = y(() => (t.hasmore ?? !1) || (t.currentpage ?? 0) < (t.totalpages ?? 0) - 1), d = y(() => {
      if (t.totalpages === void 0 || t.currentpage === void 0)
        return [];
      if (t.totalpages > 5) {
        let m = Math.max(t.currentpage === void 0 ? Math.floor(t.totalpages / 2) : t.currentpage, 3);
        return t.totalpages - t.currentpage < 1 && m--, [
          1,
          -1,
          m - 1,
          m,
          m + 1,
          -1,
          t.totalpages
        ];
      } else {
        let m = [];
        for (let I = 1; I <= t.totalpages; I++)
          m.push(I);
        return m;
      }
    }), b = function() {
      u && (t.currentpage !== null ? a("goToPage", t.currentpage - 1) : a("moveBack"));
    }, S = function() {
      p && (t.currentpage !== null ? a("goToPage", t.currentpage + 1) : a("moveForward"));
    }, D = function(m) {
      a("goToPage", m);
    };
    return (m, I) => j((r(), c("nav", {
      class: x(["pagination", "is-centered", i.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      f("a", {
        class: x(["pagination-previous", i.value]),
        title: s.value,
        onClick: b,
        disabled: u.value ? null : "disabled"
      }, [
        N(U, {
          icon: "backward",
          class: "mr-1",
          size: M(oe).small
        }, null, 8, ["size"]),
        Q(" " + J(s.value), 1)
      ], 10, Ca),
      f("a", {
        class: x(["pagination-next", i.value]),
        title: o.value,
        onClick: S,
        disabled: p.value ? null : "disabled"
      }, [
        Q(J(o.value) + " ", 1),
        N(U, {
          icon: "forward",
          class: "ml-1",
          size: M(oe).small
        }, null, 8, ["size"])
      ], 10, za),
      t.totalpages !== void 0 ? (r(), c("ul", Ra, [
        (r(!0), c(V, null, R(d.value, (_) => (r(), c("li", null, [
          _ === -1 ? (r(), c("span", Ua, "…")) : (r(), c("a", {
            key: 1,
            class: x(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === t.currentpage + 1 ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${h.value} ${_}`,
            onOnclick: (v) => D(_)
          }, J(_ === -1 ? "" : _), 43, ja))
        ]))), 256))
      ])) : T("", !0)
    ], 2)), [
      [se, u.value || p.value]
    ]);
  }
});
function fe(e) {
  return typeof e == "function" ? e() : M(e);
}
function Ha(e, n = 200) {
  const t = F(!1), a = F(!1), l = y(() => !t.value && !a.value), s = F(!1), o = F(), i = F(), h = y(() => {
    if (e != null) {
      let p = fe(e);
      return p instanceof Promise ? p : new Promise((d) => d(p));
    }
    return null;
  });
  let u;
  return z(
    () => fe(h),
    (p) => {
      if (t.value = !1, a.value = !1, o.value = null, !p) {
        i.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const d = Number(fe(n)) || 0;
      d > 0 ? (s.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        s.value = !0;
      }, d)) : s.value = !0, p.then((b) => {
        p === fe(h) && (i.value = fe(b), a.value = !0);
      }).catch((b) => {
        p === fe(h) && (o.value = b, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: s, error: o, data: i };
}
const be = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, t = K(E), a = y(() => W("Form.Error", t)), l = jt(n), s = nt(Ha(l.promise, l.pendingDelay));
    return (o, i) => (r(), c(V, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? A(o.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        N(M(ie), {
          size: M(X).small
        }, null, 8, ["size"])
      ]) : T("", !0),
      s.isRejected ? A(o.$slots, "rejected", re(Y({ key: 1 }, s.error)), () => [
        N(M(ce), {
          message: `${a}:${s.error.message ?? s.error.toString()}`,
          type: M(te).danger
        }, null, 8, ["message", "type"])
      ]) : T("", !0),
      s.isResolved ? A(o.$slots, "default", {
        key: 2,
        response: s.data
      }) : T("", !0)
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
    }, J(t.value ? `${t.value}%` : null), 11, Ga));
  }
}), Ya = {
  key: 0,
  class: "navbar-link"
}, qa = {
  key: 0,
  class: "icon-text"
}, Ka = { class: "icon" }, Qa = { key: 1 }, Xa = {
  key: 0,
  class: "icon-text"
}, Za = { class: "icon" }, el = { key: 1 }, tl = {
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
    const t = e, a = () => {
      l("itemClicked"), t.onClick !== void 0 && t.onClick();
    }, l = n;
    return (s, o) => {
      const i = st("navbar-item", !0);
      return r(), P(pe(t.childItems !== void 0 ? "div" : "a"), {
        class: x(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, {
        default: L(() => [
          t.childItems !== void 0 ? (r(), c("a", Ya, [
            t.icon !== void 0 && t.icon !== null ? (r(), c("span", qa, [
              f("span", Ka, [
                N(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              f("span", null, J(t.title), 1)
            ])) : (r(), c("span", Qa, J(t.title), 1))
          ])) : (r(), c(V, { key: 1 }, [
            t.icon !== void 0 && t.icon !== null ? (r(), c("span", Xa, [
              f("span", Za, [
                N(U, {
                  icon: t.icon
                }, null, 8, ["icon"])
              ]),
              f("span", null, J(t.title), 1)
            ])) : (r(), c("span", el, J(t.title), 1))
          ], 64)),
          t.childItems !== void 0 ? (r(), c("div", tl, [
            (r(!0), c(V, null, R(t.childItems, (h) => (r(), P(i, Y(h, {
              onItemClicked: o[0] || (o[0] = (u) => l("itemClicked"))
            }), null, 16))), 256))
          ])) : T("", !0)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
}), al = ["aria-label"], ll = { class: "navbar-brand" }, nl = ["aria-expanded"], sl = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), ol = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), rl = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), il = [
  sl,
  ol,
  rl
], ul = {
  key: 0,
  class: "navbar-start"
}, dl = { style: { width: "100px" } }, cl = {
  key: 1,
  class: "navbar-end"
}, pl = { style: { width: "100px" } }, hl = /* @__PURE__ */ k({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    yeah: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" },
    color: {}
  },
  setup(e) {
    const n = e, t = F(!1);
    return ue(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case xe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case xe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (r(), c("nav", {
      class: x(["navbar", n.fixedPosition, n.color !== void 0 && n.color !== null ? `is-${n.color}` : ""]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      f("div", ll, [
        A(a.$slots, "brand"),
        f("a", {
          role: "button",
          class: x(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, il, 10, nl)
      ]),
      f("div", {
        class: x(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (r(), c("div", ul, [
          N(be, {
            promise: n.startItems
          }, {
            default: L(({ response: s }) => [
              (r(!0), c(V, null, R(s, (o) => (r(), P(tt, Y(o, {
                onItemClicked: l[1] || (l[1] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", dl, [
                N(ie, {
                  size: M(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0),
        n.endItems !== void 0 ? (r(), c("div", cl, [
          N(be, {
            promise: n.endItems
          }, {
            default: L(({ response: s }) => [
              (r(!0), c(V, null, R(s, (o) => (r(), P(tt, Y(o, {
                onItemClicked: l[2] || (l[2] = (i) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", pl, [
                N(ie, {
                  size: M(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0)
      ], 2)
    ], 10, al));
  }
}), ml = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("aside", {
      class: x(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      A(t.$slots, "default")
    ], 2));
  }
}), bl = { class: "menu-label" }, fl = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("p", bl, [
      Q(J(n.message) + " ", 1),
      A(t.$slots, "default")
    ]));
  }
}), gl = ["href"], vl = {
  key: 0,
  class: "icon-text"
}, yl = { class: "icon" }, _l = { key: 1 }, St = /* @__PURE__ */ k({
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
      f("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: x(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (r(), c("span", vl, [
          f("span", yl, [
            N(U, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          f("span", null, J(n.title), 1)
        ])) : (r(), c("span", _l, J(n.title), 1)),
        A(a.$slots, "default")
      ], 10, gl),
      A(a.$slots, "children")
    ]));
  }
}), kl = { class: "menu-list" }, $l = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = st("menu-list", !0);
      return r(), c("ul", kl, [
        n.items !== null ? (r(), P(be, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (r(!0), c(V, null, R(s, (o) => (r(), c("li", null, [
              N(St, re(de(o)), null, 16),
              o.childItems !== void 0 ? (r(), P(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : T("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            f("li", null, [
              N(ie, {
                size: M(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : T("", !0),
        A(t.$slots, "default")
      ]);
    };
  }
}), Sl = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Re.topRight },
    text: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("span", {
      class: x(["badge", `is-${n.position}`])
    }, [
      Q(J(n.text) + " ", 1),
      A(t.$slots, "default")
    ], 2));
  }
}), Ml = /* @__PURE__ */ k({
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
    return (t, a) => (r(), P(pe(t.is), {
      class: x([
        n.hasArrow ? "has-tooltop-arrow" : "",
        n.position ? `has-tooltip-${n.position}` : "",
        n.multiline ? "has-tooltip-multiline" : "",
        n.type ? `has-tooltip-${n.type}` : "",
        n.textAlign ? `has-tooltip-text-${n.text}` : "",
        n.alwaysActive ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": t.text
    }, {
      default: L(() => [
        A(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), Dl = /* @__PURE__ */ k({
  __name: "tag",
  props: {
    type: { default: q.primary },
    light: { type: Boolean, default: !1 },
    rounded: { type: Boolean, default: !1 },
    size: { default: X.normal },
    isDelete: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["tag", `is-${n.type}`, `is-${n.size}`];
      return n.light && a.push("is-light"), n.rounded && a.push("is-rounded"), n.isDelete && a.push("is-delete"), a;
    });
    return (a, l) => (r(), c("span", {
      class: x(t.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), wl = /* @__PURE__ */ k({
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
      A(t.$slots, "default")
    ], 2));
  }
}), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: gt,
  Badge: Sl,
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
  Menu: ml,
  MenuEntry: St,
  MenuLabel: fl,
  MenuList: $l,
  Message: Ea,
  NavBar: hl,
  Notification: ce,
  PageNotification: Wa,
  Pagination: $t,
  Progress: ie,
  Promised: be,
  Tag: Dl,
  Tags: wl,
  ToolTip: Ml
}, Symbol.toStringTag, { value: "Module" })), Fl = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = F(!1), s = F(!1), o = F(null), i = y(() => (a.disabled ?? !1) || s.value && a.handlesearch !== null), h = y(() => {
      let d = [];
      return i || d.push("has-cursor"), l.value ? d.push("is-move") : d.push("is-grab"), d;
    }), u = (d) => i.value ? (d.preventDefault(), !1) : (d.stopPropagation(), d.dataTransfer.setData("value", JSON.stringify(a.CopyData)), l.value = !0, t("started"), !0), p = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return ue(() => {
      if (a.handlesearch) {
        let d = $(o.value).find(a.handlesearch);
        d.length > 0 && (s.value = !0, d.on("mousedown", () => s.value = !1), d.on("mouseup", () => s.value = !0));
      }
    }), (d, b) => (r(), P(pe(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: u,
      onDragend: p,
      class: x(h.value)
    }, {
      default: L(() => [
        A(d.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), xl = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = F(!1), s = F(null), o = F(null);
    y(() => t.tag ?? "div");
    const i = (b) => {
      const S = o.value.getBoundingClientRect(), D = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let m = ee.center;
      return b.x < D.x ? b.y < D.y ? m = ee.topLeft : m = ee.bottomLeft : b.y < D.y ? m = ee.topRight : m = ee.bottomRight, s.value = m, s.value;
    }, h = (b) => {
      b.preventDefault(), l.value = !0, a("itemEntered", i(b));
    }, u = (b) => {
      l.value = !0, a("itemExited", i(b));
    }, p = (b) => {
      b.preventDefault(), a("itemMoved", i(b));
    }, d = (b) => {
      if (t.isValidChild && !t.isValidChild(JSON.parse(b.dataTransfer.getData("value"))))
        return !1;
      b.stopPropagation(), b.preventDefault(), a("itemAdded", JSON.parse(b.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (b, S) => (r(), P(pe(t.tag), {
      ref_key: "handle",
      ref: o,
      class: x({ "is-bordered": l.value }),
      onDragenter: h,
      onDragleave: u,
      onDrop: d,
      onDragover: p
    }, {
      default: L(() => [
        A(b.$slots, "default")
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
    return (a, l) => (r(), P(pe(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: x(t.value)
    }, {
      default: L(() => [
        A(a.$slots, "default")
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
        N(U, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      A(s.$slots, "default")
    ], 2));
  }
}), Ol = /* @__PURE__ */ k({
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
    const t = e, a = n, l = F([]), s = F(-1), o = F(-1), i = F(null);
    z(t.Items, (b, S) => {
      l.value = [...S];
    }), ue(() => {
      t.Items !== null && (l.value = [...t.Items]);
    });
    const h = (b) => {
      var S = b.target.getBoundingClientRect(), D = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let m = ee.center;
      return b.y < D.y ? m = ee.top : m = ee.bottom, m;
    }, u = (b, S) => {
      S.stopPropagation(), s.value = b, S.dataTransfer.setData("value", null);
    }, p = (b, S) => {
      s.value && (S.stopPropagation(), b != s.value ? (o.value = b, i.value = h(S)) : (o.value = -1, i.value = null));
    }, d = (b) => {
      if (s.value) {
        b.stopPropagation();
        var S = o.value + (i.value == ee.top ? 0 : 1), D = l.value.splice(S, 1)[0];
        S >= s.value && S--, l.value.splice(S, 0, D), o.value = -1, i.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (b, S) => (r(), P(Mt, {
      type: b.type,
      compact: b.compact,
      outlined: b.outlined,
      highlighted: b.highlighted,
      onDrop: d
    }, {
      default: L(() => [
        (r(!0), c(V, null, R(l.value, (D, m) => (r(), c(V, null, [
          j(N(De, null, {
            default: L(() => [
              N(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, o.value === m && s.value !== m && i.value === M(ee).top]
          ]),
          N(De, {
            draggable: "true",
            onDragstart: (I) => u(m, I),
            onDragend: S[0] || (S[0] = (I) => s.value = null),
            onDragover: (I) => p(m, I),
            class: x({ "has-cursor": !0, "is-move": o.value == m, "is-grab": o.value != m })
          }, {
            default: L(() => [
              A(b.$slots, "item", {
                item: D,
                index: m
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          j(N(De, null, {
            default: L(() => [
              N(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, o.value === m && s.value !== m && i.value === M(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Fl,
  DropZone: xl,
  Sortable: Ol
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ge = "DisabledFields", Nl = (e) => e, ne = (e, n) => {
  const t = n("Translate", Nl);
  return y(() => e.translate ?? t);
};
function Ye(e, n) {
  const t = n(He), a = n(Ge), l = y(() => t.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1])), s = y(() => a.value.filter((o) => o.indexOf(`${e}.`) === 0).map((o) => o.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const Dt = (e) => {
  let n = [], t = [], a = 0;
  return e.forEach((l) => {
    let s = l.form_columns ?? 12;
    a + s > 12 && (n.push(t), t = [], a = 0), t.push(l), a += s, a === 12 && (n.push(t), t = [], a = 0);
  }), t.length > 0 && n.push(t), n;
};
async function qe(e) {
  let n = null, t = e;
  e instanceof Function && (t = e()), t instanceof Promise ? n = t : n = Promise.resolve(t);
  let a = await n, l = [];
  return a.value !== void 0 ? l = a.value : l = a, l;
}
const Al = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Tl = { class: "control" }, Pl = { class: "tags has-addons" }, El = { class: "tag is-link" }, Il = ["onClick"], Ll = { key: 0 }, Vl = ["placeholder"], Wl = { class: "dropdown-menu" }, Cl = { class: "dropdown-content" }, zl = ["onClick"], Rl = {
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
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = t, l = e, s = ne(l, E), o = F([]), i = F(null), h = F(null), u = F(null), p = F(null);
    z(i, async (B) => {
      if (B != null) {
        if (B.length >= 2)
          if (l.values != null && l.values != null) {
            let C = [];
            for (let g = 0; g < l.values.length && ((l.values[g].name.toUpperCase().indexOf(B.toUpperCase()) >= 0 || l.values[g].id.toUpperCase().indexOf(B.toUpperCase()) >= 0) && C.push(l.values[g]), C.length != 10); g++)
              ;
            h.value = C;
          } else {
            let g = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(B)}`)).json();
            g.length > 10 && g.splice(10, g.length - 10), h.value = g;
          }
      } else
        h.value = null, $(p.value).empty();
    });
    const d = () => {
      if (o.value.length == 0)
        return null;
      const B = o.value.slice();
      return l.limit != null && l.limit == 1 ? B.length > 0 ? B[0] : null : B;
    }, b = async (B) => {
      if (B == null)
        o.value.length > 0 && o.value.splice(0, o.value.length), i.value = null;
      else {
        const C = await Promise.all(
          (Array.isArray(B) ? B : [B]).map(async (g) => {
            if (g.id !== void 0 && g.name !== void 0)
              return g;
            {
              let w = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${g.id === void 0 ? "q=" + encodeURIComponent(g) : "id=" + encodeURIComponent(g.id)}`)).json();
              return w.length > 0 ? (l.disabled && (w[0].readonly = !0), w[0]) : null;
            }
          })
        );
        o.value = C.filter((g) => g !== null), a("value_changed", { name: l.name, value: d() });
      }
    }, S = (B) => {
      B.preventDefault(), i.value = B.clipboardData.getData("text/plain");
    }, D = (B) => {
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
    }, I = () => {
      p.value.focus();
    }, _ = (B) => {
      o.value.push(B), m(), a("value_changed", { name: l.name, value: d() });
    }, v = (B) => {
      o.value.splice(B, 1), I(), a("value_changed", { name: l.name, value: d() });
    };
    return n({ getValue: d, setValue: b }), (B, C) => (r(), c("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: I
    }, [
      f("div", Al, [
        (r(!0), c(V, null, R(o.value, (g, ae) => (r(), c("div", Tl, [
          f("div", Pl, [
            f("a", El, J(M(s)(g.name)), 1),
            g.readonly ? T("", !0) : (r(), c("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (w) => v(ae)
            }, null, 8, Il))
          ])
        ]))), 256)),
        l.disabled ? T("", !0) : (r(), c("div", Ll, [
          j(f("span", {
            ref_key: "contentSpan",
            ref: p,
            placeholder: M(s)(l.title ?? ""),
            contenteditable: "",
            class: x(u.value),
            onFocus: C[0] || (C[0] = (g) => {
              u.value = "is-focused";
            }),
            onBlur: C[1] || (C[1] = (g) => {
              u.value = null;
            }),
            onKeydown: D,
            onPaste: S
          }, null, 42, Vl), [
            [se, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ]),
      f("div", {
        class: x(["dropdown", { "is-active": h.value != null && i.value != null && i.value != "" }])
      }, [
        f("div", Wl, [
          f("div", Cl, [
            h.value != null && h.value.length > 0 ? (r(!0), c(V, { key: 0 }, R(h.value, (g) => (r(), c("a", {
              class: "dropdown-item",
              onClick: (ae) => _(g)
            }, J(M(s)(g.name)), 9, zl))), 256)) : (r(), c("a", Rl, "No Results"))
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
    const t = e, a = n, l = ne(t, E);
    return (s, o) => (r(), P(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: M(l)(t.label),
      onClick: o[0] || (o[0] = (i) => a("button_clicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Ul = { class: "checkbox is-block" }, jl = ["value", "disabled"], Bt = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = y(() => W("Form.Error", l)), o = t, i = ne(a, E), h = F([]), u = F(!1), p = y(async () => {
      if (a.values == null)
        return [];
      {
        let m = await qe(a.values), I = m.filter((_) => _.selected).map((_) => _.value);
        return h.value === null || h.value.length == 0 ? h.value = I.length > 0 ? [...I] : [] : (I = h.value, m = m.map((_) => ({
          label: _.label,
          value: _.value,
          selected: I.some((v) => v === _.value)
        }))), m;
      }
    });
    z(h, (m) => {
      o("value_changed", { name: a.name, value: d() });
    });
    const d = () => h.value.length == 0 ? null : h.value, b = (m) => {
      u.value = !0, h.value.splice(0), m !== null && (h.value = [...m]), u.value = !1, o("value_changed", { name: a.name, value: d() });
    }, { hiddenValues: S, disabledValues: D } = Ye(a.name, E);
    return n({ getValue: d, setValue: b }), (m, I) => (r(), c("div", null, [
      N(be, { promise: p.value }, {
        default: L(({ response: _ }) => [
          _ !== null ? (r(!0), c(V, { key: 0 }, R(_, (v) => j((r(), c("label", Ul, [
            j(f("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": I[0] || (I[0] = (B) => h.value = B),
              disabled: a.disabled || M(D).some((B) => B === v.value.toString())
            }, null, 8, jl), [
              [Ve, h.value]
            ]),
            Q(" " + J(M(i)(v.label)), 1)
          ], 512)), [
            [se, !M(S).some((B) => B === v.value.toString())]
          ])), 256)) : T("", !0)
        ]),
        pending: L(() => [
          N(M(ie))
        ]),
        rejected: L(() => [
          N(M(ce), {
            type: M(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Hl = { class: "checkbox" }, Gl = ["name", "disabled"], Yl = {
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
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, E), o = y(() => s.value(a.label)), i = F(!1);
    return z(i, (p) => l("value_changed", { name: a.name, value: p })), n({ getValue: () => i.value, setValue: (p) => {
      i.value = p;
    } }), (p, d) => (r(), c("label", Hl, [
      j(f("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (b) => i.value = b)
      }, null, 8, Gl), [
        [Ve, i.value]
      ]),
      Q(" " + J(o.value) + " ", 1),
      a.required ? (r(), c("span", Yl, "*")) : T("", !0)
    ]));
  }
}), Pe = (e, n) => {
  let t = new Date(e);
  return t.setDate(e.getDate() + n), t;
}, G = (e, n, t) => {
  let a = e;
  for (; a.length < t; )
    a = n + a;
  return a;
}, $e = (e, n, t) => {
  let a = "";
  switch (e) {
    case "d":
    case "dd":
      a += `${G(t.getDate().toString(), "0", e.length)}`;
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
      a += `${W("Date.Weekdays." + (e.length > 3 ? s : s.substring(0, 3)), n)}`;
      break;
    case "f":
    case "ff":
    case "fff":
      a += `${G(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "F":
    case "FF":
    case "FFF":
      a += `${t.getMilliseconds() == 0 ? "" : G(t.getMilliseconds().toString(), "0", e.length)}`;
      break;
    case "g":
    case "gg":
      a += "A.D.";
      break;
    case "h":
    case "hh":
      a += `${G((t.getHours() > 12 ? t.getHours() - 12 : t.getHours() == 0 ? 12 : t.getHours()).toString(), "0", e.length)}`;
      break;
    case "H":
    case "HH":
      a += `${G(t.getHours().toString(), "0", e.length)}`;
      break;
    case "K":
    case "z":
    case "zz":
    case "zzz":
      let o = t.getTimezoneOffset() * -1, i = parseInt((o / 60).toFixed(0)), h = o - Math.abs(i) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${i < 0 ? "-" : "+"}${G(Math.abs(i).toString(), "0", 2) + ":" + G(Math.abs(h).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${i < 0 ? "-" : "+"}${G(Math.abs(i).toString(), "0", e.length)}`;
          break;
      }
      break;
    case "m":
    case "mm":
      a += `${G(t.getMinutes().toString(), "0", e.length)}`;
      break;
    case "M":
    case "MM":
      a += `${G((t.getMonth() + 1).toString(), "0", e.length)}`;
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
      a += `${W("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), n)}`;
      break;
    case "s":
    case "ss":
      a += `${G(t.getSeconds().toString(), "0", e.length)}`;
      break;
    case "t":
    case "tt":
      t.getHours() >= 12 ? a += `${e.length == 1 ? "P" : "PM"}` : a += `${e.length == 1 ? "A" : "AM"}`;
      break;
    case "y":
    case "yy":
      for (var l = t.getFullYear().toString(); l.length > 2; )
        l = l.substring(1);
      a += `${G(l.toString(), "0", e.length)}`;
      break;
    case "yyy":
    case "yyyy":
    case "yyyyy":
      a += `${G(t.getFullYear().toString(), "0", e.length)}`;
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
}, ql = { class: "control" }, Kl = ["name", "id", "disabled"], at = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ke = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null), o = y(() => {
      if (s.value == null || s.value == "")
        return null;
      var u = Number(s.value.substring(3, 5)), p = Number(s.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return z(s, (u) => {
      l("value_changed", { name: a.name, value: u });
    }), n({ getValue: () => s.value, setValue: (u) => {
      if (u != null && at.test(u)) {
        var p = at.exec(u);
        u = (p[3] == "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)) + ":" + p[2] + ":00";
      }
      s.value = u;
    } }), (u, p) => (r(), c("div", ql, [
      j(f("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (d) => s.value = d),
        disabled: a.disabled,
        style: We(o.value)
      }, null, 12, Kl), [
        [_e, s.value]
      ])
    ]));
  }
});
const Ql = { class: "control has-icons-left has-icons-right" }, Xl = ["name", "id", "placeholder", "disabled"], Zl = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), en = { class: "modal-content" }, tn = { class: "panel is-primary is-dateselect" }, an = { class: "panel-heading" }, ln = { class: "columns card-header-title" }, nn = { class: "column" }, sn = { class: "column has-text-centered" }, on = { class: "column has-text-right" }, rn = { class: "panel-block" }, un = { class: "table is-striped has-text-centered" }, dn = ["onClick"], cn = { key: 0 }, pn = {
  colspan: "100%",
  class: "has-text-centered"
}, hn = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), xt = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = e, s = t, o = F(!1), i = F(null), h = F(null), u = nt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = K(E), d = we({
      Sun: y(() => W("Date.Weekdays.Sun", p)),
      Mon: y(() => W("Date.Weekdays.Mon", p)),
      Tue: y(() => W("Date.Weekdays.Tue", p)),
      Wed: y(() => W("Date.Weekdays.Wed", p)),
      Thu: y(() => W("Date.Weekdays.Thu", p)),
      Fri: y(() => W("Date.Weekdays.Fri", p)),
      Sat: y(() => W("Date.Weekdays.Sat", p))
    }), b = y(() => i.value !== null && (l.includeTime ? Se : ke).test(i.value)), S = () => {
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
    z(i, (w) => {
      if (w == null)
        s("value_changed", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(w) && !Se.test(w)) {
        w = w.replaceAll(/[^0-9]/g, "");
        for (var O = [], H = 0; H < w.length; H += 2)
          H == 4 ? (O.push(w.substring(H, Math.min(w.length - H, 4) + H)), H += 2) : O.push(w.substring(H, Math.min(w.length - H, 2) + H));
        O.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(O[0]) || O.splice(0), O.length > 1 && (/^[0-3]/.test(O[1]) ? /^(01|03|05|07|08|10|12)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(O[1]) || O.splice(1) : /^(02|04|06|09|11)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(O[1]) || O.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(O[1]) || O.splice(1) : O.splice(1)), O.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(O[3]) || O.splice(3)), O.length > 4 && (/^[0-5][0-9]?$/.test(O[4]) || O.splice(4))), w = O.join(""), !l.includeTime && w.length > 8 && (w = w.substring(0, 8)), w.length >= 2 && (w = w.substring(0, 2) + "-" + (w.length > 2 ? w.substring(2) : "")), w.length >= 5 && (w = w.substring(0, 5) + "-" + (w.length > 5 ? w.substring(5) : "")), w.length >= 9 && l.includeTime && (w = w.substring(0, 9) + " " + (w.length > 9 ? w.substring(9) : "")), w.length >= 11 && (w = w.substring(0, 11) + ":" + (w.length > 11 ? w.substring(11) : "")), i.value = w;
      } else {
        var le = S();
        b && s("value_changed", { name: l.name, value: le }), u.Month = le.getMonth(), u.Year = le.getFullYear();
      }
    });
    const D = y(() => ge(new Date(u.Year, u.Month, 1), p, "MMMM")), m = y(() => {
      var w = [], O = new Date(u.Year, u.Month, 1);
      O = Pe(O, O.getDay() * -1);
      for (var H = S(), le = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); O.getMonth() != le; ) {
        for (var Ne = [], Qe = 0; Qe < 7; Qe++)
          Ne.push({
            Number: O.getDate(),
            Disabled: O.getMonth() != u.Month,
            isToday: ge(O, p, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: H != null && ge(O, p, "yyyy-MM-dd") == ge(H, p, "yyyy-MM-dd")
          }), O = Pe(O, 1);
        w.push(Ne);
      }
      return w;
    });
    n({ getValue: S, setValue: function(w) {
      w == null ? i.value = null : i.value = ge(w, p, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const _ = (w) => {
      w.value == null ? i.value != null && (i.value = i.value.split(" ")[0]) : i.value != null ? i.value = i.value.split(" ")[0] + " " + w.value : i.value = `${G((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${G((u.Month + 1).toString(), "0", 2)}-${u.Year} ${w.value}`;
    }, v = (w) => {
      if (!w.Disabled && !w.isSelected)
        if (i.value === null)
          i.value = `${G(w.Number.toString(), "0", 2)}-${G((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var O = i.value.split(" ");
          O[0] = `${G(w.Number.toString(), "0", 2)}-${G((u.Month + 1).toString(), "0", 2)}-${u.Year}`, i.value = `${O[0]}${O.length > 1 ? " " + O[1] : ""}`;
        }
    }, B = () => {
      i.value = h.value, o.value = !1;
    }, C = () => {
      l.disabled || (h.value = i.value, o.value = !0);
    }, g = () => {
      l.disabled || (i.value = null);
    }, ae = (w) => {
      u.Month + w == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + w == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += w;
    };
    return (w, O) => (r(), c("div", null, [
      f("div", Ql, [
        j(f("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": O[0] || (O[0] = (H) => i.value = H),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, Xl), [
          [_e, i.value]
        ]),
        f("span", {
          class: "icon is-small is-left is-clickable",
          onClick: C
        }, [
          N(M(U), { icon: "calendar-alt" })
        ]),
        f("span", {
          class: "icon is-small is-right is-clickable",
          onClick: g
        }, [
          N(M(U), { icon: "window-close" })
        ])
      ]),
      f("div", {
        class: x(["modal", { "is-active": o.value }])
      }, [
        Zl,
        f("div", en, [
          f("div", tn, [
            f("div", an, [
              f("div", ln, [
                f("div", nn, [
                  N(M(U), {
                    icon: "arrow-circle-left",
                    onClick: O[1] || (O[1] = (H) => ae(-1))
                  })
                ]),
                f("div", sn, J(D.value) + " " + J(u.Year), 1),
                f("div", on, [
                  N(M(U), {
                    icon: "arrow-circle-right",
                    onClick: O[2] || (O[2] = (H) => ae(1))
                  })
                ])
              ])
            ]),
            f("div", rn, [
              f("table", un, [
                f("thead", null, [
                  f("tr", null, [
                    f("th", null, J(M(d).Sun), 1),
                    f("th", null, J(M(d).Mon), 1),
                    f("th", null, J(M(d).Tue), 1),
                    f("th", null, J(M(d).Wed), 1),
                    f("th", null, J(M(d).Thu), 1),
                    f("th", null, J(M(d).Fri), 1),
                    f("th", null, J(M(d).Sat), 1)
                  ])
                ]),
                f("tbody", null, [
                  (r(!0), c(V, null, R(m.value, (H) => (r(), c("tr", null, [
                    (r(!0), c(V, null, R(H, (le) => (r(), c("td", {
                      class: x(["is-unselectable", le.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", le.isToday ? "has-background-primary-dark" : "", le.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ne) => v(le)
                    }, J(le.Number), 11, dn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (r(), c("tfoot", cn, [
                  f("tr", null, [
                    f("td", pn, [
                      N(Ke, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValue_changed: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : T("", !0)
              ])
            ]),
            f("div", hn, [
              N(M(yt), {
                addonclass: "card-footer-item",
                disabled: !b.value,
                onClick: O[3] || (O[3] = (H) => o.value = !1)
              }, null, 8, ["disabled"]),
              N(M(vt), {
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
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = ea(E);
    Oe([`${s}summernote-lite.min.css`]), [a, l] = Ht(() => import(`${s}summernote`)), await a, l();
    const o = F(null), i = e, h = t;
    return z(() => i.disabled, (d) => {
      o.value != null && $(o.value).summernote(d ? "disable" : "enable");
    }), n({ getValue: () => $(o.value).summernote("code"), setValue: (d) => {
      $(o.value).summernote("code", d);
    } }), ue(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(d) {
            h("value_changed", { name: i.name, value: d });
          }
        }
      }), (i.disabled ?? !1) && $(o.value).summernote("disable");
    }), Gt(() => {
      $(o.value).summernote("destroy");
    }), (d, b) => (r(), c("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Ie = /* @__PURE__ */ k({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, E);
    return (a, l) => (r(), P(pe(n.subtype), null, {
      default: L(() => [
        Q(J(M(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), mn = ["name"], Jt = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return z(s, (h) => l("value_changed", { name: a.name, value: h })), n({ getValue: () => s.value, setValue: (h) => {
      s.value = h;
    } }), (h, u) => j((r(), c("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p)
    }, null, 8, mn)), [
      [_e, s.value]
    ]);
  }
}), bn = ["name", "disabled", "min", "max", "step"], Nt = /* @__PURE__ */ k({
  __name: "number",
  props: {
    min: {},
    max: {},
    step: {},
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null), o = () => {
      if (s.value === "")
        return null;
      let h = parseInt(s.value);
      return a.min !== void 0 && h < a.min * 1 || a.max !== void 0 && h > a.max * 1 ? null : h;
    }, i = (h) => {
      s.value = h === null ? "" : h.toString();
    };
    return z([s], (h) => l("value_changed", { name: a.name, value: o() })), n({ getValue: o, setValue: i }), (h, u) => j((r(), c("input", {
      type: "number",
      class: "input",
      name: h.name,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p),
      disabled: h.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, bn)), [
      [_e, s.value]
    ]);
  }
}), fn = ["id"], Le = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, E);
    return (a, l) => (r(), c("p", {
      id: n.name
    }, J(M(t)(n.label)), 9, fn));
  }
}), gn = { class: "radio" }, vn = ["name", "value", "disabled"], yn = /* @__PURE__ */ f("br", null, null, -1), At = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = y(() => W("Form.Error", l)), o = t, i = ne(a, E), h = F(null), u = function() {
      return h.value;
    };
    z(h, (D) => {
      o("value_changed", { name: a.name, value: u() });
    });
    const p = y(async () => {
      if (a.values == null)
        return [];
      {
        let D = await qe(a.values);
        return h.value === null && D.some((m) => m.selected) && (h.value = D.find((m) => m.selected).value), D.map((m) => ({
          label: m.label,
          value: m.value,
          selected: h.value === m.value
        }));
      }
    }), d = (D) => {
      h.value = D;
    }, { hiddenValues: b, disabledValues: S } = Ye(a.name, E);
    return n({ getValue: u, setValue: d }), (D, m) => (r(), c("div", null, [
      N(be, { promise: p.value }, {
        default: L(({ response: I }) => [
          D.values != null ? (r(!0), c(V, { key: 0 }, R(I, (_) => (r(), c(V, null, [
            j(f("label", gn, [
              f("input", {
                type: "radio",
                name: a.name,
                value: _.value,
                class: "radio",
                disabled: a.disabled || M(S).some((v) => v === _.value.toString())
              }, null, 8, vn),
              Q(" " + J(M(i)(_.label)), 1)
            ], 512), [
              [se, !M(b).some((v) => v === _.value.toString())]
            ]),
            yn
          ], 64))), 256)) : T("", !0)
        ]),
        pending: L(() => [
          N(M(ie))
        ]),
        rejected: L(() => [
          N(M(ce), {
            type: M(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), _n = { class: "select" }, kn = ["id", "name", "multiple", "disabled"], $n = ["value", "selected", "disabled"], Sn = ["label"], Mn = ["value", "selected", "disabled"], Tt = (e, n, t) => {
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
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(E), s = y(() => W("Form.Error", l)), o = t, i = ne(a, E), h = F(null), u = F(!1), p = y(async () => {
      if (a.values == null)
        return [];
      {
        let m = await qe(a.values), I = m.filter((v) => v.selected).map((v) => v.value);
        m.some((v) => v.values !== void 0) && m.filter((v) => v.values !== void 0).forEach((v) => {
          I = I.concat(
            v.values.filter((B) => B.selected).map((B) => B.value)
          );
        }), h.value === null || h.value.length === 0 ? h.value = null : (m = m.map((v) => {
          let B = v;
          return B.values !== void 0 && (B.values = B.values.map((C) => (C.selected = h.value.some((g) => g === C.value), C))), B;
        }), h.value.forEach((v) => {
          m.some((B) => B.value !== void 0 && B.value === v || B.values !== void 0 && B.values.some((C) => C.value === v)) || m.push({
            label: v,
            value: v
          });
        }));
        let _ = [];
        return m.forEach((v) => {
          v.values === void 0 ? _.push(v) : _ = Tt(v.label, v, _);
        }), _;
      }
    }), d = () => h.value == null || h.value.length == 0 ? null : a.multiple ? h.value.slice() : Array.isArray(h.value) ? h.value[0] : h.value;
    z(h, () => {
      u.value || o("value_changed", { name: a.name, value: d() });
    }), z(u, (m) => {
      m || o("value_changed", { name: a.name, value: d() });
    });
    const b = (m) => {
      u.value = !0, m != null ? a.multiple ? h.value = Array.isArray(m) ? m : [m] : h.value = m : a.multiple ? h.value = [] : h.value = null, u.value = !1;
    }, { hiddenValues: S, disabledValues: D } = Ye(a.name, E);
    return n({ getValue: d, setValue: b }), (m, I) => (r(), c("div", _n, [
      p.value != null ? (r(), P(be, {
        key: 0,
        promise: p.value
      }, {
        default: L(({ response: _ }) => [
          j(f("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: x([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": I[0] || (I[0] = (v) => h.value = v),
            disabled: a.disabled
          }, [
            _ != null ? (r(!0), c(V, { key: 0 }, R(_, (v) => (r(), c(V, null, [
              v.values == null ? j((r(), c("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: M(D).some((B) => B === v.value.toString())
              }, J(M(i)(v.label)), 9, $n)), [
                [se, !M(S).some((B) => B === v.value.toString())]
              ]) : T("", !0),
              v.values != null ? (r(), c("optgroup", {
                key: 1,
                label: M(i)(v.label)
              }, [
                (r(!0), c(V, null, R(v.values, (B) => j((r(), c("option", {
                  value: B.value,
                  selected: B.selected,
                  disabled: M(D).some((C) => C === B.value.toString())
                }, J(M(i)(B.label)), 9, Mn)), [
                  [se, !M(S).some((C) => C === B.value.toString())]
                ])), 256))
              ], 8, Sn)) : T("", !0)
            ], 64))), 256)) : T("", !0)
          ], 10, kn), [
            [Yt, h.value]
          ])
        ]),
        pending: L(() => [
          N(M(ie))
        ]),
        rejected: L(() => [
          N(M(ce), {
            type: M(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : T("", !0)
    ]));
  }
}), Dn = { class: "field" }, wn = ["id", "name", "disabled"], Bn = ["for"], Fn = {
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
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, E), o = F(!1);
    return z(o, (u) => l("value_changed", { name: a.name, value: u })), n({ getValue: () => o.value, setValue: (u) => {
      o.value = u;
    } }), (u, p) => (r(), c("div", Dn, [
      j(f("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": p[0] || (p[0] = (d) => o.value = d),
        disabled: a.disabled
      }, null, 8, wn), [
        [Ve, o.value]
      ]),
      f("label", { for: u.name }, [
        Q(J(M(s)(a.label)) + " ", 1),
        a.required ? (r(), c("span", Fn, "*")) : T("", !0)
      ], 8, Bn)
    ]));
  }
}), xn = ["type", "name", "disabled", "maxlength"], It = /* @__PURE__ */ k({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return z(s, (h) => l("value_changed", { name: a.name, value: h })), n({ getValue: () => s.value, setValue: (h) => {
      s.value = h;
    } }), (h, u) => j((r(), c("input", {
      type: h.subtype,
      class: "input",
      name: h.name,
      disabled: h.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => s.value = p)
    }, null, 8, xn)), [
      [qt, s.value]
    ]);
  }
}), On = ["name", "rows", "cols", "maxlength", "disabled"], Lt = 9, ve = String.fromCharCode(Lt), Me = String.fromCharCode(10), Vt = /* @__PURE__ */ k({
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
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    z(s, (u) => {
      l("value_changed", { name: a.name, value: u });
    });
    const o = () => s.value, i = (u) => {
      s.value = u;
    };
    n({ getValue: o, setValue: i });
    const h = (u) => {
      if (a.supportsTab) {
        let p = o();
        switch (u.keyCode) {
          case Lt:
            let d = u.target.selectionStart, b = u.target.selectionEnd, S = p.substring(0, d), D = p.length > b ? p.substring(b) : "", m = d == b ? "" : p.substring(d, b);
            if (m.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? m.startsWith(ve) ? (m = m.substring(1), d--) : S.endsWith(ve) && (S = S.substring(0, S.length - 1), d--) : m = ve + m;
            else {
              let I = !1;
              m.endsWith(Me) && (I = !0, m = m.substring(0, m.length - 1));
              let _ = m.split(Me);
              m = "", u.shiftKey && S.endsWith(ve) && (S = S.substring(0, S.length - 1), d--), _.forEach((v, B) => {
                u.shiftKey && v.startsWith(ve) ? v = v.substring(1) : u.shiftKey || (v = ve + v), m += v + (B === _.length - 1 ? "" : Me);
              }), I && (m += Me);
            }
            return p = S + m + D, d += m.length == 1 ? 1 : 0, b = d + (m.length == 1 ? 0 : m.length), i(p), u.target.selectionStart = d, u.target.selectionEnd = b, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, p) => j((r(), c("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: h,
      "onUpdate:modelValue": p[0] || (p[0] = (d) => s.value = d)
    }, null, 40, On)), [
      [_e, s.value]
    ]);
  }
}), Jn = { class: "columns" }, Wt = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = E(He), o = E(Ge);
    n({ setValue: (d) => {
      p.forEach((b) => {
        switch (b.type) {
          case "subform":
            b.setValue(d);
            break;
          default:
            b.setValue !== void 0 && (d === null ? b.setValue(null) : Object.keys(d).some((S) => S === b.fieldName) ? b.setValue(d[b.fieldName]) : Object.keys(d).some((S) => S === b.altFieldName) && b.setValue(d[b.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var d = {};
      return p.forEach((b) => {
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
    }, isValid: () => !p.some((d) => !(d.isValid === void 0 || d.isValid())) });
    const p = a.inputs.map((d) => F(null));
    return (d, b) => (r(), c("div", Jn, [
      (r(!0), c(V, null, R(a.inputs, (S, D) => (r(), P(Ct, {
        ref_for: !0,
        ref: (m) => M(p)[D] = m,
        input: S,
        onValue_changed: b[0] || (b[0] = (m) => l("value_changed", m)),
        onButton_clicked: b[1] || (b[1] = (m) => l("button_clicked", m)),
        disabled: a.disabled || M(o).some((m) => m === S.name),
        hidden: M(s).some((m) => m === S.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Nn = ["id", "name"], An = /* @__PURE__ */ k({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t;
    let s = [];
    F(!1);
    const o = y(() => {
      let p = Dt(a.fields);
      return s = p.map((d) => F(null)), p;
    });
    return n({ isValid: () => !s.some((p) => !(p.isValid === void 0 || p.isValid())), setValue: (p) => s.forEach((d) => d.setValue(p)), getValue: () => {
      var p = {};
      return s.forEach((d) => {
        p = $.extend(p, d.getValue());
      }), p;
    } }), (p, d) => j((r(), c("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (r(!0), c(V, null, R(o.value, (b, S) => (r(), P(Wt, {
        ref_for: !0,
        ref: (D) => M(s)[S] = D,
        inputs: b,
        disabled: a.disabled,
        onValue_changed: d[0] || (d[0] = (D) => l("value_changed", D)),
        onButton_clicked: d[1] || (d[1] = (D) => l("button_clicked", D))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Nn)), [
      [se, !a.hidden]
    ]);
  }
}), Tn = ["for"], Pn = {
  key: 0,
  class: "help is-danger"
}, En = { class: "control" }, In = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Ln = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Ct = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = t, s = e, o = ne(s, E), i = we(F(s.input.type)), h = y(() => {
      let g = null;
      switch (s.input.type) {
        case "autocomplete":
          g = wt;
          break;
        case "button":
          g = Ee;
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
          g = Ie;
          break;
        case "hidden":
          g = Jt;
          break;
        case "number":
          g = Nt;
          break;
        case "paragraph":
          g = Le;
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
          g = It;
          break;
        case "textarea":
          g = Vt;
          break;
        case "time":
          g = Ke;
          break;
        case "subform":
          g = An;
          break;
      }
      return g;
    }), u = function(g) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(g);
    };
    ue(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && u(s.input.value);
    });
    const p = y(() => s.input.disabled ?? s.disabled ?? !1), d = y(() => `is-${s.input.form_columns ?? 12}`), b = y(() => s.input.name), S = y(() => s.input.processVariable ?? s.input.name), D = y(() => In.some((g) => g === s.input.type) && s.input.label !== void 0 && s.input.label !== null), m = y(() => {
      let g = $.extend({}, s.input);
      return delete g.type, g.className != null && delete g.className, g.form_columns != null && delete g.form_columns, Ln.some((ae) => ae === s.input.type) && (g.translate = s.translate), g.disabled = s.disabled, g;
    }), I = (g) => {
      if (g.value !== void 0 && g.value !== null && Array.isArray(g.value)) {
        let ae = [...g.value];
        g.value = ae;
      }
      l("value_changed", g);
    }, _ = (g) => {
      l("button_clicked", g);
    }, v = () => {
      if (a.value != null && a.value.getValue != null) {
        let g = a.value.getValue();
        return g != null && Array.isArray(g) ? [...g] : g;
      }
      return null;
    };
    return n({ setValue: u, fieldName: b, type: i, altFieldName: S, getValue: v, isValid: () => {
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
      s.input.type == "header" ? (r(), P(Ie, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (r(), P(Le, {
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
        disabled: p.value,
        onButton_clicked: _,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (r(), c(V, { key: 3 }, [
        D.value ? (r(), c("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Q(J(M(o)(s.input.label)) + " ", 1),
          s.input.required ? (r(), c("span", Pn, "*")) : T("", !0)
        ], 8, Tn)) : T("", !0),
        f("div", En, [
          (r(), P(pe(h.value), Y(m.value, {
            onValue_changed: I,
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
const Vn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Wn = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, E);
    Ae("Translate", (_) => s.value(_));
    let o = [];
    const i = y(() => {
      if (a.elements != null) {
        let _ = Dt(a.elements);
        return o = _.map((v) => F(null)), _;
      } else
        return null;
    }), h = () => {
      let _ = {};
      return o.forEach((v) => {
        _ = $.extend(_, v.getValue());
      }), _;
    }, u = (_) => {
      o.forEach((v) => v.setValue(_));
    }, p = () => !o.some((_) => !(_.isValid === void 0 || _.isValid())), d = F([]);
    Ae(He, we(d));
    const b = (_) => {
      Array.isArray(_) ? d.value = [...d.value, ..._] : d.value.push(_);
    }, S = (_) => {
      Array.isArray(_) ? d.value = d.value.filter((v) => _.indexOf(v) >= 0) : d.value = d.value.filter((v) => v !== _);
    }, D = F([]);
    return Ae(Ge, we(D)), n({ getValues: h, setValues: u, isValid: p, hideField: b, showField: S, disableField: (_) => {
      Array.isArray(_) ? D.value = [...D.value, ..._] : D.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? D.value = D.value.filter((v) => _.indexOf(v) >= 0) : D.value = D.value.filter((v) => v !== _);
    } }), (_, v) => (r(), c("form", Vn, [
      i.value != null ? (r(!0), c(V, { key: 0 }, R(i.value, (B, C) => (r(), P(Wt, {
        ref_for: !0,
        ref: (g) => M(o)[C] = g,
        inputs: B,
        key: C,
        onValue_changed: v[0] || (v[0] = (g) => l("value_changed", g)),
        onButton_clicked: v[1] || (v[1] = (g) => l("button_clicked", g)),
        disabled: _.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : T("", !0)
    ]));
  }
}), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: wt,
  Button: Ee,
  Checkbox: Ft,
  CheckboxGroup: Bt,
  ComponentForm: Wn,
  DateField: xt,
  FormComponent: Ct,
  FullEditor: Ot,
  Header: Ie,
  Hidden: Jt,
  NumberField: Nt,
  Paragraph: Le,
  RadioGroup: At,
  Select: Pt,
  Switch: Et,
  Text: It,
  TextArea: Vt,
  Time: Ke
}, Symbol.toStringTag, { value: "Module" })), zn = { class: "hero-body" }, Rn = { class: "title" }, Un = {
  key: 0,
  class: "subtitle"
}, jn = /* @__PURE__ */ k({
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
      f("div", zn, [
        f("p", Rn, J(n.title), 1),
        n.subtitle ? (r(), c("p", Un, J(n.subtitle), 1)) : T("", !0)
      ])
    ], 2));
  }
}), Hn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, Gn = {}, Yn = { class: "box" };
function qn(e, n) {
  return r(), c("div", Yn, [
    A(e.$slots, "default")
  ]);
}
const Kn = /* @__PURE__ */ Hn(Gn, [["render", qn]]), Qn = {
  key: 0,
  class: "icon is-clickable"
}, Xn = /* @__PURE__ */ k({
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
      f("a", {
        onClick: s[0] || (s[0] = (o) => a("click"))
      }, [
        t.icon ? (r(), c("span", Qn, [
          N(M(U), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        Q(" " + J(t.title), 1)
      ])
    ], 2));
  }
}), Zn = /* @__PURE__ */ k({
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
      f("ul", null, [
        A(a.$slots, "default")
      ])
    ], 2));
  }
}), es = {
  key: 0,
  class: "card-icon"
}, ts = { class: "card-icon-wrapper" }, as = { class: "card-header" }, ls = { class: "card-content" }, ns = { class: "card-footer" }, zt = /* @__PURE__ */ k({
  __name: "card",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    fullHeight: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  setup(e) {
    const n = e, t = {
      addonclass: "card-footer-item"
    }, a = {
      headerclass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (l, s) => (r(), c("div", {
      class: x(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (r(), c("div", es, [
        f("div", ts, [
          N(U, {
            icon: n.icon,
            size: M(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : T("", !0),
      f("div", as, [
        A(l.$slots, "header", re(de(a)))
      ]),
      f("div", ls, [
        A(l.$slots, "content")
      ]),
      f("div", ns, [
        A(l.$slots, "footer", re(de(t)))
      ])
    ], 2));
  }
}), ss = /* @__PURE__ */ k({
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
      class: x(["columns", t.value])
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), os = /* @__PURE__ */ k({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const n = e, t = y(() => {
      var a = [];
      return n.size && a.push(`is-${n.size}`), n.offset && a.push(`is-offset-${n.offset}`), n.border && (n.border.some((l) => l === Je.all) ? a.push("is-bordered") : n.border.forEach((l) => a.push(`is-bordered-${l}`))), n.addonclass && a.push(n.addonclass), a;
    });
    return (a, l) => (r(), c("div", {
      class: x(["column", t.value])
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), rs = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), is = { class: "modal-content" }, us = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, ds = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (r(), c("div", {
      class: x({ modal: !0, "is-active": n.display }),
      style: We(`z-index:${n.zIndex}`)
    }, [
      rs,
      f("div", is, [
        A(t.$slots, "default")
      ]),
      n.hasClose ? (r(), c("button", us)) : T("", !0)
    ], 6));
  }
}), cs = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), ps = {
  key: 0,
  class: "card-icon"
}, hs = { class: "card-icon-wrapper" }, ms = { class: "modal-card-head" }, bs = { class: "modal-card-body" }, fs = { class: "modal-card-foot" }, gs = /* @__PURE__ */ k({
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
    const t = e, a = n, l = {
      addonclass: "card-footer-item"
    }, s = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, o = y(() => {
      var i = [];
      return t.fullWidth && i.push("is-fullwidth"), t.fullHeight && i.push("is-fullheight"), t.maxWidth && i.push("is-maxwidth"), t.maxHeight && i.push("is-maxheight"), i;
    });
    return (i, h) => (r(), c("div", {
      class: x(["modal", { "is-active": t.show }])
    }, [
      cs,
      f("div", {
        class: x(["modal-card", o.value])
      }, [
        t.icon !== null ? (r(), c("div", ps, [
          f("div", hs, [
            N(U, {
              icon: t.icon,
              size: M(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : T("", !0),
        f("div", ms, [
          A(i.$slots, "header", re(de(s))),
          i.hasClose ? (r(), c("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: h[0] || (h[0] = (u) => a("close"))
          })) : T("", !0)
        ]),
        f("div", bs, [
          A(i.$slots, "content")
        ]),
        f("div", fs, [
          A(i.$slots, "footer", re(de(l)))
        ])
      ], 2)
    ], 2));
  }
}), vs = {
  key: 0,
  class: "panel-heading"
}, ys = {
  key: 1,
  class: "panel-tabs"
}, _s = { class: "panel-block" }, ks = /* @__PURE__ */ k({
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
    const n = e, t = y(() => n.blockNames ?? ["default"]), a = y(() => {
      let l = [];
      return n.type && l.push(`is-${n.type}`), n.fullWidth && l.push("is-fullwidth"), n.fullHeight && l.push("is-fullheight"), l;
    });
    return (l, s) => (r(), c("div", {
      class: x(["panel", a.value])
    }, [
      n.hasHeader ? (r(), c("div", vs, [
        A(l.$slots, "header")
      ])) : T("", !0),
      n.hasTabs ? (r(), c("div", ys, [
        A(l.$slots, "tabs")
      ])) : T("", !0),
      (r(!0), c(V, null, R(t.value, (o) => (r(), c("div", _s, [
        A(l.$slots, o)
      ]))), 256))
    ], 2));
  }
}), Rt = /* @__PURE__ */ k({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      let l = [];
      return n.scrollable && l.push("table-container"), n.fixedHeader && n.scrollable && l.push("is-fixed"), l;
    }), a = y(() => {
      let l = ["table", "is-striped", "is-hoverable"];
      return n.fixedHeader && !n.scrollable && l.push("is-fixed"), n.fullWidth && l.push("is-fullwidth"), n.narrow && l.push("is-narrow"), l;
    });
    return (l, s) => (r(), c("div", {
      class: x(t.value)
    }, [
      f("table", {
        class: x(a.value)
      }, [
        f("thead", null, [
          A(l.$slots, "thead")
        ]),
        f("tbody", null, [
          A(l.$slots, "tbody")
        ]),
        f("tfoot", null, [
          A(l.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), $s = ["href"], Ss = {
  key: 0,
  class: "icon is-small"
}, Ms = /* @__PURE__ */ k({
  __name: "tabs-tab",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {},
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = (s) => {
      (a.href === null || a.href === void 0) && (s.preventDefault(), t("click"));
    };
    return (s, o) => (r(), c("li", {
      class: x({ "is-active": a.active })
    }, [
      f("a", {
        href: s.href,
        onClick: l
      }, [
        a.icon ? (r(), c("span", Ss, [
          N(M(U), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        f("span", null, J(a.title), 1)
      ], 8, $s)
    ], 2));
  }
}), Ds = /* @__PURE__ */ k({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["tabs"];
      return n.alignment ? a.push(`is-${n.alignment}`) : a.push("is-left"), n.type && a.push(`is-${n.type}`), n.fullWidth && a.push("is-fullwidth"), a;
    });
    return (a, l) => (r(), c("div", {
      class: x(t.value)
    }, [
      f("ul", null, [
        A(a.$slots, "default")
      ])
    ], 2));
  }
}), ws = /* @__PURE__ */ k({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const n = e, t = y(() => {
      let a = ["tile", `is-${n.type}`];
      return n.size && a.push(`is-${n.size}`), n.borders && (n.borders.some((l) => l === Je.all) ? a.push("is-bordered") : n.borders.forEach((l) => a.push(`is-bordered-${l}`))), n.vertical && a.push("is-vertical"), a;
    });
    return (a, l) => (r(), c("div", {
      class: x(t.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: jn,
  Box: Kn,
  Breadcrumbs: Zn,
  BreadcrumbsItem: Xn,
  Card: zt,
  Column: os,
  ColumnContainer: ss,
  List: Mt,
  ListItem: De,
  Modal: ds,
  ModalCard: gs,
  Panel: ks,
  Table: Rt,
  Tabs: Ds,
  TabsTab: Ms,
  Tile: ws
}, Symbol.toStringTag, { value: "Module" }));
const lt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
Oe(`${lt.substring(0, lt.lastIndexOf("/"))}/style.css`);
const Fs = ["cerulean", "cosmo", "cyborg", "dark", "darkly", "default", "flatly", "journal", "light", "litera", "lumen", "lux", "materia", "minty", "morph", "pulse", "quartz", "sandstone", "simplex", "sketchy", "slate", "solar", "spacelab", "superhero", "united", "vapor", "yeti", "zephyr"];
function xs(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
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
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: ze.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: n }) {
    const t = `${la(E)}chart.umd.min.js`, a = F(null), l = e, s = n;
    let o = null;
    const i = () => {
      o != null && o.update();
    }, h = y(() => {
      var u = "";
      return l.width && (u = `width:${l.width}px;`), l.height && (u += `height:${l.height}px;`), u;
    });
    return z(() => l.type, (u) => {
      o != null && (o.type = u ?? "line");
    }), z(
      () => l.labels,
      (u) => {
        o != null && (o.data.labels = u, (l.showRefresh == null || !l.showRefresh) && i());
      },
      { deep: !0 }
    ), z(
      () => l.datasets,
      (u) => {
        o != null && (o.data.datasets = u, (l.showRefresh == null || !l.showRefresh) && i());
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
            position: `${l.legendPosition}`,
            labels: {
              filter: (d, b) => d.text != null
            },
            onClick: function(d, b) {
              s("legendItemClick", o, b);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: p } = await Ce(t, ["Chart"]);
      o = new p(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), o.update();
    }), (u, p) => (r(), P(zt, null, ot({
      content: L(() => [
        f("canvas", {
          ref_key: "canvas",
          ref: a,
          style: We(h.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: L((d) => [
          f("h3", {
            class: x(d.headerClass)
          }, J(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.showRefresh != null && l.showRefresh != null && l.showRefresh ? {
        name: "footer",
        fn: L((d) => [
          N(_t, Y(d, { onClick: i }), null, 16)
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
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = `${na(E)}src-noconflict/ace.js`, l = e, s = t, o = F(null), i = F(null), h = function() {
      return i.getValue() == "" ? null : i.getValue();
    }, u = function(d) {
      i.setValue(d ?? "");
    };
    z(() => l.readonly, (d) => {
      i.setReadOnly(d == null || d == null ? !1 : d);
    }), z(() => l.value, (d) => {
      u(d);
    }), z(() => l.language, (d) => {
      i.getSession().setMode(d);
    });
    const p = y(() => {
      let d = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let b = 0; b < l.autocompletes.length; b++)
          l.autocompletes[b].Method.indexOf(".") >= 0 ? d = Math.min(d, l.autocompletes[b].Method.indexOf(".")) : d = Math.min(d, l.autocompletes[b].Method.length);
        if (d > 3 && l.autocompletes.length > 0) {
          let b = !0, S = l.autocompletes[0].Method.substring(0, 3);
          for (let D = 0; D < l.autocompletes.length; D++)
            if (l.autocompletes[D].Method.substring(0, 3) != S) {
              b = !1;
              break;
            }
          b && (d = 3);
        }
      }
      return d;
    });
    return n({ getValue: h, setValue: u }), ue(async () => {
      const { ace: d } = await Ce(a, ["ace"]);
      i.value = Kt(d.edit(o.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), i.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && i.value.setValue(l.value), i.on("change", () => s("value_changed", h())), l.autocompletes !== null && l.autocompletes !== void 0 && (i.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), i.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(b, S, D, m, I) {
          var _ = [];
          if (m = m.toUpperCase(), m.length >= p && (_ = l.autocompletes.filter((v) => v.Method.toUpperCase().startsWith(m) && v.Method.length > m.legend).map((v) => ({
            caption: v.Method + (v.Description === null || v.Description === void 0 ? "" : "->" + v.Description),
            value: v.Method,
            meta: "autos"
          }))), _.length === 0) {
            I(null, []);
            return;
          }
          I(null, _.map(function(v) {
            return v;
          }));
        }
      }]);
    }), (d, b) => (r(), c("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), As = { key: 0 }, Ts = { colspan: "100%" }, Ps = ["colspan", "rowspan"], Es = ["onClick"], Is = { class: "icon" }, Ls = { key: 0 }, Vs = { colspan: "100%" }, Ws = ["colspan", "rowspan", "onClick"], Cs = { colspan: "100%" }, zs = /* @__PURE__ */ k({
  __name: "grid",
  props: {
    columns: {},
    data: {},
    emptyMessage: {},
    columnRows: {},
    hasFilter: { type: Boolean },
    currentSort: {},
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean },
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: void 0 },
    hasprevious: { type: Boolean, default: void 0 },
    size: { default: X.small },
    rounded: { type: Boolean, default: !1 },
    buttontype: {},
    totalpages: {},
    currentpage: {}
  },
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked", "sort", "filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = y(() => ({
      scrollable: t.scrollable,
      fixedHeader: t.fixedHeader,
      fullWidth: t.fullWidth,
      narrow: t.narrow
    })), s = y(() => ({
      usenext: t.usenext,
      hasmore: t.hasmore,
      hasprevious: t.hasprevious,
      size: t.size,
      rounded: t.rounded,
      buttontype: t.buttontype,
      totalpages: t.totalpages,
      currentpage: t.currentpage
    })), o = y(() => t.columnRows === void 0 || t.columnRows.length === 0 ? t.columns : t.columnRows.map((h) => h.map((u) => t.columns.filter((p) => p.some((d) => d.id === u))[0].find((p) => p.id === u)))), i = (h) => {
      t.currentSort !== void 0 && t.currentSort !== null && t.currentSort.column === h ? a("sort", {
        column: h,
        ascending: !t.currentSort.ascending
      }) : a("sort", {
        column: h,
        ascending: !0
      });
    };
    return (h, u) => (r(), P(Rt, re(de(l.value)), ot({
      thead: L(() => [
        t.hasFilter ?? !1 ? (r(), c("tr", As, [
          f("th", Ts, [
            N(kt, {
              onFilter: u[0] || (u[0] = (p) => a("filter", p))
            })
          ])
        ])) : T("", !0),
        (r(!0), c(V, null, R(t.columns, (p) => (r(), c("tr", null, [
          (r(!0), c(V, null, R(p, (d) => (r(), c("th", {
            colspan: d.headerColspan,
            rowspan: d.headerRowspan
          }, [
            A(h.$slots, `head-${d.id}`, {}, () => [
              t.currentSort !== void 0 && t.currentSort !== null && (d.canSort ?? !1) && d.id === t.currentSort.column ? (r(), c("span", {
                key: 0,
                class: "icon-text is-clickable",
                onClick: (b) => i(d.id)
              }, [
                f("span", Is, [
                  N(U, { icon: "arrow-down" })
                ]),
                f("span", null, J(d.title), 1)
              ], 8, Es)) : (r(), c(V, { key: 1 }, [
                Q(J(d.title), 1)
              ], 64))
            ])
          ], 8, Ps))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        t.data === null || t.data.length === 0 ? (r(), c("tr", Ls, [
          f("td", Vs, [
            t.data === null ? (r(), P(ie, { key: 0 })) : (r(), P(ce, {
              key: 1,
              message: t.emptyMessage ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (r(!0), c(V, { key: 1 }, R(t.data, (p, d) => (r(), c(V, null, [
          (r(!0), c(V, null, R(o.value.filter((b) => b.some((S) => !(S.headerOnly ?? !1))), (b, S) => (r(), c("tr", {
            key: `row-${d}-${S}`
          }, [
            (r(!0), c(V, null, R(b.filter((D) => !(D.headerOnly ?? !1)), (D) => (r(), c("td", {
              key: `data-${d}-${S}`,
              colspan: D.dataColspan,
              rowspan: D.dataRowspan,
              onClick: (m) => a("cellClicked", { rowIndex: d, data: D.propertyName ? p[D.propertyName] : null, row: p })
            }, [
              A(h.$slots, `body-${D.id}`, re(de({ rowIndex: d, data: D.propertyName ? p[D.propertyName] : null, row: p })), () => [
                Q(J(D.propertyName ? p[D.propertyName] : null), 1)
              ])
            ], 8, Ws))), 128))
          ]))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      (t.hasprevious ?? !1) || (t.currentpage ?? 0) > 0 || (t.hasmore ?? !1) || (t.currentpage ?? 0) < (t.totalpages ?? 0 - 1) ? {
        name: "tfoot",
        fn: L(() => [
          f("tr", null, [
            f("td", Cs, [
              N($t, Y(s.value, {
                onMoveForward: u[1] || (u[1] = (p) => a("moveForward")),
                onMoveBack: u[2] || (u[2] = (p) => a("moveBack")),
                onGoToPage: u[3] || (u[3] = (p) => a("goToPage", p))
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
  Animation: Hs,
  Button: Gs,
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
  Promised: bo,
  Progress: fo,
  NavBar: go,
  Menu: vo,
  MenuLabel: yo,
  MenuList: _o,
  MenuEntry: ko,
  ToolTip: $o,
  Badge: So,
  Tag: Mo,
  Tags: Do
} = Bl, { DraggableItem: wo, DropZone: Bo, Sortable: Fo } = Jl, {
  AutoComplete: xo,
  CheckboxGroup: Oo,
  Checkbox: Jo,
  DateField: No,
  ComponentForm: Ao,
  FullEditor: To,
  Header: Po,
  Hidden: Eo,
  NumberField: Io,
  Paragraph: Lo,
  RadioGroup: Vo,
  Select: Wo,
  Switch: Co,
  Text: zo,
  TextArea: Ro,
  Time: Uo,
  FormComponent: jo
} = Cn, {
  Banner: Ho,
  Box: Go,
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
  TabsTab: sr,
  Tile: or,
  Modal: rr
} = Bs, { AVAIABLE_SKINS: ir, setSkin: ur } = Os, {
  ColorTypes: dr,
  NoticeTypes: cr,
  Sizes: pr,
  AnimationSpeeds: hr,
  AnimationTypes: mr,
  IconSizes: br,
  ChartLegendPositions: fr,
  ChartTypes: gr,
  DropZoneQuadrants: vr,
  BreadCrumbAlignments: yr,
  BreadCrumbSeperators: _r,
  ColumnContainerModifiers: kr,
  ColumnSizes: $r,
  ColumnOffsetSizes: Sr,
  BorderTypes: Mr,
  TabAlignments: Dr,
  TabStyles: wr,
  TileSizes: Br,
  TileTypes: Fr,
  FixedNavBarPositions: xr,
  FixedMenuPositions: Or,
  BadgePositiions: Jr,
  ToolTipPositions: Nr,
  ToolTipTextAlignments: Ar
} = Xt, { loadNonEs6Module: Tr } = Qt, { Chart: Pr, CodeWriter: Er, Grid: Ir } = Rs;
export {
  ir as AVAIABLE_SKINS,
  Hs as Animation,
  hr as AnimationSpeeds,
  mr as AnimationTypes,
  xo as AutoComplete,
  So as Badge,
  Jr as BadgePositiions,
  Ho as Banner,
  Mr as BorderTypes,
  Go as Box,
  yr as BreadCrumbAlignments,
  _r as BreadCrumbSeperators,
  qo as Breadcrumbs,
  Yo as BreadcrumbsItem,
  Gs as Button,
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
  Pr as Chart,
  fr as ChartLegendPositions,
  gr as ChartTypes,
  oo as CheckMark,
  Jo as Checkbox,
  Oo as CheckboxGroup,
  Er as CodeWriter,
  dr as ColorTypes,
  Qo as Column,
  Xo as ColumnContainer,
  kr as ColumnContainerModifiers,
  Sr as ColumnOffsetSizes,
  $r as ColumnSizes,
  Ao as ComponentForm,
  No as DateField,
  wo as DraggableItem,
  Bo as DropZone,
  vr as DropZoneQuadrants,
  ro as DynamicSlot,
  io as Filter,
  Or as FixedMenuPositions,
  xr as FixedNavBarPositions,
  jo as FormComponent,
  To as FullEditor,
  Ir as Grid,
  Po as Header,
  Eo as Hidden,
  uo as Icon,
  br as IconSizes,
  Zo as List,
  er as ListItem,
  vo as Menu,
  ko as MenuEntry,
  yo as MenuLabel,
  _o as MenuList,
  co as Message,
  rr as Modal,
  tr as ModalCard,
  go as NavBar,
  cr as NoticeTypes,
  po as Notification,
  Io as NumberField,
  ho as PageNotification,
  mo as Pagination,
  ar as Panel,
  Lo as Paragraph,
  fo as Progress,
  bo as Promised,
  Vo as RadioGroup,
  Wo as Select,
  pr as Sizes,
  Fo as Sortable,
  Co as Switch,
  Dr as TabAlignments,
  wr as TabStyles,
  lr as Table,
  nr as Tabs,
  sr as TabsTab,
  Mo as Tag,
  Do as Tags,
  zo as Text,
  Ro as TextArea,
  or as Tile,
  Br as TileSizes,
  Fr as TileTypes,
  Uo as Time,
  $o as ToolTip,
  Nr as ToolTipPositions,
  Ar as ToolTipTextAlignments,
  Tr as loadNonEs6Module,
  ur as setSkin
};
//# sourceMappingURL=components.esm.js.map
