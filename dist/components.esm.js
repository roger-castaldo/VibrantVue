import { computed as y, defineComponent as k, openBlock as i, createBlock as E, Transition as zt, withCtx as L, renderSlot as N, createElementBlock as p, normalizeClass as O, inject as P, ref as F, watch as z, createVNode as A, createCommentVNode as T, toDisplayString as J, mergeProps as Y, unref as S, onMounted as ue, Fragment as W, renderList as R, resolveDynamicComponent as be, normalizeProps as re, guardReactiveProps as de, withDirectives as U, createElementVNode as f, vModelText as _e, createTextVNode as Q, vShow as se, toRefs as Rt, reactive as nt, resolveComponent as st, vModelCheckbox as We, normalizeStyle as Ve, readonly as we, withAsyncContext as Ut, onUnmounted as jt, vModelSelect as Ht, vModelDynamic as Gt, provide as Ne, createSlots as Yt, markRaw as qt } from "vue";
import "jquery";
const xe = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let o = document.createElement("link"), d = new Promise((u) => {
        o.onload = function() {
          u(l);
        };
      });
      t[s] = d, a.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", l), o.setAttribute("href", l);
    } else
      t[s] = Promise.resolve(l);
  }), Promise.all(t).then((l) => {
    n(l);
  });
}), pe = [], Ce = (e, n) => new Promise((t) => {
  let a = pe.find((l) => l.path === e);
  if (a != null)
    if (a.result === void 0 && n !== void 0 || a.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = pe.find((r) => r.path === e);
        s == null ? (clearTimeout(l), t(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), t(s.result));
      }, 500);
    } else
      t(a.result);
  else {
    pe.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
      let r = pe.findIndex((o) => o.path === e);
      if (n === void 0)
        pe[r].result = void 0;
      else {
        let o = {};
        n.forEach((d) => {
          o[d] = window[d];
        }), pe[r].result = o;
      }
      t(pe[r].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  loadNonEs6Module: Ce
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), he = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(he || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), ot = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ot || {}), ze = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(ze || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), rt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(dt || {}), Je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Je || {}), ct = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(mt || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), bt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(bt || {}), Re = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(je || {});
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: he,
  AnimationTypes: Be,
  BadgePositiions: Re,
  BorderTypes: Je,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: rt,
  ChartLegendPositions: ze,
  ChartTypes: ot,
  ColorTypes: q,
  ColumnContainerModifiers: it,
  ColumnOffsetSizes: dt,
  ColumnSizes: ut,
  DropZoneQuadrants: ee,
  FixedMenuPositions: bt,
  FixedNavBarPositions: Oe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: X,
  TabAlignments: ct,
  TabStyles: pt,
  TileSizes: ht,
  TileTypes: mt,
  ToolTipPositions: Ue,
  ToolTipTextAlignments: je
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const n = e("Language", "en");
  return y(() => n);
}, Xt = (e) => {
  const n = e("IconSet", "solid");
  return y(() => n);
}, Zt = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), ea = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), ta = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), aa = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), la = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), ft = /* @__PURE__ */ k({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: he.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = ta(P);
    xe(`${n}animate.min.css`);
    const t = e, a = (h) => {
      switch (h) {
        case he.slower:
          return 3e3;
        case he.fast:
          return 800;
        case he.faster:
          return 500;
        default:
          return 2e3;
      }
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, s = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, r = y(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), o = y(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), d = y(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed ?? "")
    ].join(" "));
    return (h, c) => t.repeating ? (i(), p("div", {
      key: 1,
      class: O(u.value)
    }, [
      N(h.$slots, "default")
    ], 2)) : (i(), E(zt, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": d.value,
      duration: r.value
    }, {
      default: L(() => [
        N(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), na = "brands.min.css", sa = "all.min.css", Xe = "icon_styles", oa = /\.fa-([^: ]+):before/g, ra = /url\(([^)]+)\)/g, ye = F([]), Te = F(!1), Ze = async (e, n) => {
  if (!Te.value) {
    Te.value = !0;
    let t;
    ye.value.length === 0 ? (t = document.createElement("style"), t.setAttribute("id", Xe), document.head.appendChild(t), t.setAttribute("type", "text/css")) : t = document.getElementById(Xe), ye.value = [" "];
    let a = await Promise.all([
      fetch(`${e}${na}`),
      fetch(`${e}${sa}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await a[0].text();
    [...l.matchAll(oa)].forEach((s) => {
      ye.value.push(s[1]);
    }), l = `${await a[1].text()}
    ${await a[2].text()}
    ${l}`, [...l.matchAll(ra)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), t.innerText = l, ye.value.splice(0, 1), Te.value = !1;
  }
}, G = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = ea(P), t = Xt(P);
    ye.value.length === 0 ? Ze(n, t.value) : z(t, () => Ze(n, t.value));
    const a = e, l = y(() => {
      let s = [];
      return a.icon !== void 0 && a.icon !== null && (ye.value.indexOf(a.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${t.value}`)), s.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon)), a.size !== void 0 && a.size !== null && a.size !== oe.normal && s.push(`fa-${a.size}`), s;
    });
    return (s, r) => (i(), p("i", {
      class: O(l.value)
    }, null, 2));
  }
});
const ia = ["disabled"], ua = {
  key: 0,
  class: "icon is-small"
}, da = { key: 1 }, Z = /* @__PURE__ */ k({
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
    return (s, r) => (i(), p("button", {
      class: O(l.value),
      disabled: t.disabled,
      onClick: r[0] || (r[0] = (o) => a("click"))
    }, [
      t.icon != null ? (i(), p("span", ua, [
        A(G, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      t.title != null ? (i(), p("span", da, J(t.title), 1)) : T("", !0)
    ], 10, ia));
  }
}), ca = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, pa = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', ha = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', ma = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, ba = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', fa = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', ga = {
  Button: JSON.parse(ca),
  Filter: JSON.parse(pa),
  Pagination: JSON.parse(ha),
  Date: JSON.parse(ma),
  Form: JSON.parse(ba),
  Wizard: JSON.parse(fa)
}, V = (e, n) => {
  let t = e.split("."), a = ga[t[0]];
  if (a !== void 0) {
    a[n.value] === void 0 ? a = a.en : a = a[n.value];
    let l = 1;
    for (; a !== void 0 && l < t.length; )
      a = a[t[l]], l++;
  }
  if (a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, va = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Add", l),
      icon: "plus",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), gt = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Cancel", l),
      icon: "window-close",
      type: q.danger
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), ya = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Delete", l),
      icon: "trash-alt",
      type: q.danger
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), _a = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Disable", l),
      icon: "times-circle",
      type: q.danger
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), ka = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Download", l),
      icon: "download",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), $a = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Edit", l),
      icon: "edit",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Sa = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Enable", l),
      icon: "check",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), vt = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Okay", l),
      icon: "check",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ma = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Print", l),
      icon: "print",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), yt = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Refresh", l),
      icon: "sync",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Save", l),
      icon: "save",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ k({
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
    const t = n, a = e, l = K(P), s = y(() => a || {
      title: V("Button.Upload", l),
      icon: "upload",
      type: q.primary
    });
    return (r, o) => (i(), E(Z, Y(s.value, {
      onClick: o[0] || (o[0] = (d) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ k({
  __name: "check-mark",
  setup(e) {
    return (n, t) => (i(), E(G, {
      icon: "check",
      size: S(oe).small
    }, null, 8, ["size"]));
  }
}), et = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value.test(s)).map((s) => a[s]);
}, Fa = /* @__PURE__ */ k({
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
    }), (l, s) => (i(!0), p(W, null, R(n.value, (r) => (i(), E(be(r), re(de(t.props)), null, 16))), 256));
  }
}), Oa = { class: "control has-icons-left" }, xa = ["placeholder"], Ja = { class: "icon is-small is-left" }, Aa = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(P), s = y(() => V("Filter.Filter", l)), r = F(null);
    z([r], (d) => {
      d[0] === "" && t.default_value && (r.value = t.default_value, a("filter", r.value == "" ? null : r.value));
    });
    const o = (d) => {
      d.keyCode == 13 && a("filter", r.value == "" ? null : r.value);
    };
    return ue(() => {
      t.default_value && (r.value = t.default_value);
    }), (d, u) => (i(), p("div", Oa, [
      U(f("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        onKeypress: o
      }, null, 40, xa), [
        [_e, r.value]
      ]),
      f("span", Ja, [
        A(G, { icon: "filter" })
      ])
    ]));
  }
}), Na = {
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
    return (l, s) => (i(), p("article", {
      class: O(["message", t.value, a.value])
    }, [
      n.title ? (i(), p("div", Na, [
        f("p", null, J(n.title), 1),
        n.hasDelete ? (i(), p("button", Ta)) : T("", !0)
      ])) : T("", !0),
      f("div", Pa, [
        N(l.$slots, "default", {}, () => [
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
    return (t, a) => (i(), p("div", {
      class: O(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      N(t.$slots, "default", {}, () => [
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
}, Wa = { class: "block" }, Va = /* @__PURE__ */ k({
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
      var r = ["is-page-notification-container", `is-${t.type}`];
      return t.isLight && r.push("is-light-mode"), t.hasClose === void 0 || t.hasClose === null || t.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (i(), p("div", {
      class: O({ modal: t.blockUser && t.visible, "is-active": t.blockUser && t.visible })
    }, [
      t.blockUser && t.visible ? (i(), p("div", Ia)) : T("", !0),
      A(ft, {
        incoming: S(Be).fadeIn,
        outgoing: S(Be).fadeOut,
        speed: S(he).slower
      }, {
        default: L(() => [
          t.visible ? (i(), p("div", {
            key: 0,
            class: O(s.value)
          }, [
            A(G, {
              icon: l.value,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (i(), p("h1", La, J(t.header), 1)) : T("", !0),
            f("div", Wa, J(t.message), 1),
            t.hasClose ? (i(), E(G, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (d) => a("close")),
              size: S(oe).large
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
}, ja = ["aria-label", "onOnclick"], _t = /* @__PURE__ */ k({
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
    const t = e, a = n, l = K(P), s = y(() => V(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), r = y(() => V(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), o = y(() => t.buttontype ? `has-background-${t.buttontype}` : ""), d = y(() => V("Pagination.GoToPage", l)), u = y(() => (t.hasprevious ?? !1) || (t.currentpage ?? 0) > 0), h = y(() => (t.hasmore ?? !1) || (t.currentpage ?? 0) < (t.totalpages ?? 0 - 1)), c = y(() => {
      if (t.totalpages === void 0 || t.currentpage === void 0)
        return [];
      if (t.totalpages > 5) {
        let b = t.currentpage === void 0 ? Math.floor(t.totalpages / 2) : t.currentpage;
        return [
          1,
          -1,
          b - 1,
          b,
          b + 1,
          -1,
          t.totalpages
        ];
      } else {
        let b = [];
        for (let I = 1; I <= t.totalpages; I++)
          b.push(I);
        return b;
      }
    }), m = function() {
      u && a("moveBack");
    }, M = function() {
      h && a("moveForward");
    }, B = function(b) {
      a("goToPage", b);
    };
    return (b, I) => U((i(), p("nav", {
      class: O(["pagination", "is-centered", o.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      f("a", {
        class: O(["pagination-previous", o.value]),
        title: s.value,
        onClick: m,
        disabled: u.value ? null : "disabled"
      }, [
        A(G, {
          icon: "backward",
          class: "mr-1",
          size: S(oe).small
        }, null, 8, ["size"]),
        Q(" " + J(s.value), 1)
      ], 10, Ca),
      f("a", {
        class: O(["pagination-next", o.value]),
        title: r.value,
        onClick: M,
        disabled: h.value ? null : "disabled"
      }, [
        Q(J(r.value) + " ", 1),
        A(G, {
          icon: "forward",
          class: "ml-1",
          size: S(oe).small
        }, null, 8, ["size"])
      ], 10, za),
      t.totalpages !== void 0 ? (i(), p("ul", Ra, [
        (i(!0), p(W, null, R(c.value, (_) => (i(), p("li", null, [
          _ === -1 ? (i(), p("span", Ua, "…")) : (i(), p("a", {
            key: 1,
            class: O(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === t.currentpage ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${d.value} ${_}`,
            onOnclick: (v) => B(_)
          }, J(_ === -1 ? "" : _), 43, ja))
        ]))), 256))
      ])) : T("", !0)
    ], 2)), [
      [se, u.value || h.value]
    ]);
  }
});
function fe(e) {
  return typeof e == "function" ? e() : S(e);
}
function Ha(e, n = 200) {
  const t = F(!1), a = F(!1), l = y(() => !t.value && !a.value), s = F(!1), r = F(), o = F(), d = y(() => {
    if (e != null) {
      let h = fe(e);
      return h instanceof Promise ? h : new Promise((c) => c(h));
    }
    return null;
  });
  let u;
  return z(
    () => fe(d),
    (h) => {
      if (t.value = !1, a.value = !1, r.value = null, !h) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const c = Number(fe(n)) || 0;
      c > 0 ? (s.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        s.value = !0;
      }, c)) : s.value = !0, h.then((m) => {
        h === fe(d) && (o.value = fe(m), a.value = !0);
      }).catch((m) => {
        h === fe(d) && (r.value = m, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: s, error: r, data: o };
}
const me = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, t = K(P), a = y(() => V("Form.Error", t)), l = Rt(n), s = nt(Ha(l.promise, l.pendingDelay));
    return (r, o) => (i(), p(W, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? N(r.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        A(S(ie), {
          size: S(X).small
        }, null, 8, ["size"])
      ]) : T("", !0),
      s.isRejected ? N(r.$slots, "rejected", re(Y({ key: 1 }, s.error)), () => [
        A(S(ce), {
          message: `${a.value}:${s.error.message ?? s.error.toString()}`,
          type: S(te).danger
        }, null, 8, ["message", "type"])
      ]) : T("", !0),
      s.isResolved ? N(r.$slots, "default", {
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
    return (a, l) => (i(), p("progress", {
      class: O(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, J(t.value ? `${t.value}%` : null), 11, Ga));
  }
}), Ya = ["href"], qa = {
  key: 0,
  class: "icon-text"
}, Ka = { class: "icon" }, Qa = { key: 1 }, Xa = {
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
    return (s, r) => {
      const o = st("navbar-item", !0);
      return i(), p("a", {
        class: O(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, [
        t.icon !== void 0 && t.icon !== null ? (i(), p("span", qa, [
          f("span", Ka, [
            A(G, {
              icon: t.icon
            }, null, 8, ["icon"])
          ]),
          f("span", null, J(t.title), 1)
        ])) : (i(), p("span", Qa, J(t.title), 1)),
        t.childItems !== void 0 ? (i(), p("div", Xa, [
          (i(!0), p(W, null, R(t.childItems, (d) => (i(), E(o, Y(d, {
            onItemClicked: r[0] || (r[0] = (u) => l("itemClicked"))
          }), null, 16))), 256))
        ])) : T("", !0)
      ], 10, Ya);
    };
  }
}), Za = ["aria-label"], el = { class: "navbar-brand" }, tl = ["aria-expanded"], al = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), ll = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), nl = /* @__PURE__ */ f("span", { "aria-hidden": "true" }, null, -1), sl = [
  al,
  ll,
  nl
], ol = {
  key: 0,
  class: "navbar-start"
}, rl = { style: { width: "100px" } }, il = {
  key: 1,
  class: "navbar-end"
}, ul = { style: { width: "100px" } }, dl = /* @__PURE__ */ k({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const n = e, t = F(!1);
    return ue(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case Oe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Oe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (a, l) => (i(), p("nav", {
      class: O(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      f("div", el, [
        N(a.$slots, "brand"),
        f("a", {
          role: "button",
          class: O(["navbar-burger", t.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": t.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => t.value = !t.value)
        }, sl, 10, tl)
      ]),
      f("div", {
        class: O(["navbar-menu", t.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (i(), p("div", ol, [
          A(me, {
            promise: n.startItems
          }, {
            default: L(({ response: s }) => [
              (i(!0), p(W, null, R(s, (r) => (i(), E(tt, Y(r, {
                onItemClicked: l[1] || (l[1] = (o) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", rl, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0),
        n.endItems !== void 0 ? (i(), p("div", il, [
          A(me, {
            promise: n.endItems
          }, {
            default: L(({ response: s }) => [
              (i(!0), p(W, null, R(s, (r) => (i(), E(tt, Y(r, {
                onItemClicked: l[2] || (l[2] = (o) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", ul, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0)
      ], 2)
    ], 10, Za));
  }
}), cl = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("aside", {
      class: O(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), pl = { class: "menu-label" }, hl = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("p", pl, [
      Q(J(n.message) + " ", 1),
      N(t.$slots, "default")
    ]));
  }
}), ml = ["href"], bl = {
  key: 0,
  class: "icon-text"
}, fl = { class: "icon" }, gl = { key: 1 }, kt = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("li", null, [
      f("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: O(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (i(), p("span", bl, [
          f("span", fl, [
            A(G, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          f("span", null, J(n.title), 1)
        ])) : (i(), p("span", gl, J(n.title), 1)),
        N(a.$slots, "default")
      ], 10, ml),
      N(a.$slots, "children")
    ]));
  }
}), vl = { class: "menu-list" }, yl = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = st("menu-list", !0);
      return i(), p("ul", vl, [
        n.items !== null ? (i(), E(me, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (i(!0), p(W, null, R(s, (r) => (i(), p("li", null, [
              A(kt, re(de(r)), null, 16),
              r.childItems !== void 0 ? (i(), E(l, {
                key: 0,
                items: r.childItems
              }, null, 8, ["items"])) : T("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            f("li", null, [
              A(ie, {
                size: S(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : T("", !0),
        N(t.$slots, "default")
      ]);
    };
  }
}), _l = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Re.topRight },
    text: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("span", {
      class: O(["badge", `is-${n.position}`])
    }, [
      Q(J(n.text) + " ", 1),
      N(t.$slots, "default")
    ], 2));
  }
}), kl = /* @__PURE__ */ k({
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
    return (t, a) => (i(), E(be(t.is), {
      class: O([
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
        N(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), $l = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("span", {
      class: O(t.value)
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), Sl = /* @__PURE__ */ k({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("span", {
      class: O(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      N(t.$slots, "default")
    ], 2));
  }
}), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ft,
  Badge: _l,
  Button: Z,
  ButtonAdd: va,
  ButtonCancel: gt,
  ButtonDelete: ya,
  ButtonDisable: _a,
  ButtonDownload: ka,
  ButtonEdit: $a,
  ButtonEnable: Sa,
  ButtonOkay: vt,
  ButtonPrint: Ma,
  ButtonRefresh: yt,
  ButtonSave: Da,
  ButtonUpload: wa,
  CheckMark: Ba,
  DynamicSlot: Fa,
  Filter: Aa,
  Icon: G,
  Menu: cl,
  MenuEntry: kt,
  MenuLabel: hl,
  MenuList: yl,
  Message: Ea,
  NavBar: dl,
  Notification: ce,
  PageNotification: Va,
  Pagination: _t,
  Progress: ie,
  Promised: me,
  Tag: $l,
  Tags: Sl,
  ToolTip: kl
}, Symbol.toStringTag, { value: "Module" })), Dl = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = F(!1), s = F(!1), r = F(null), o = y(() => (a.disabled ?? !1) || s.value && a.handlesearch !== null), d = y(() => {
      let c = [];
      return o || c.push("has-cursor"), l.value ? c.push("is-move") : c.push("is-grab"), c;
    }), u = (c) => o.value ? (c.preventDefault(), !1) : (c.stopPropagation(), c.dataTransfer.setData("value", JSON.stringify(a.CopyData)), l.value = !0, t("started"), !0), h = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return ue(() => {
      if (a.handlesearch) {
        let c = $(r.value).find(a.handlesearch);
        c.length > 0 && (s.value = !0, c.on("mousedown", () => s.value = !1), c.on("mouseup", () => s.value = !0));
      }
    }), (c, m) => (i(), E(be(a.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: O(d.value)
    }, {
      default: L(() => [
        N(c.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), wl = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = F(!1), s = F(null), r = F(null);
    y(() => t.tag ?? "div");
    const o = (m) => {
      const M = r.value.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let b = ee.center;
      return m.x < B.x ? m.y < B.y ? b = ee.topLeft : b = ee.bottomLeft : m.y < B.y ? b = ee.topRight : b = ee.bottomRight, s.value = b, s.value;
    }, d = (m) => {
      m.preventDefault(), l.value = !0, a("itemEntered", o(m));
    }, u = (m) => {
      l.value = !0, a("itemExited", o(m));
    }, h = (m) => {
      m.preventDefault(), a("itemMoved", o(m));
    }, c = (m) => {
      if (t.isValidChild && !t.isValidChild(JSON.parse(m.dataTransfer.getData("value"))))
        return !1;
      m.stopPropagation(), m.preventDefault(), a("itemAdded", JSON.parse(m.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (m, M) => (i(), E(be(t.tag), {
      ref_key: "handle",
      ref: r,
      class: O({ "is-bordered": l.value }),
      onDragenter: d,
      onDragleave: u,
      onDrop: c,
      onDragover: h
    }, {
      default: L(() => [
        N(m.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), $t = /* @__PURE__ */ k({
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
    return (a, l) => (i(), E(be(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: O(t.value)
    }, {
      default: L(() => [
        N(a.$slots, "default")
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
    return (s, r) => (i(), p("li", {
      class: O(l.value)
    }, [
      t.icon ? (i(), p("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => a("click"))
      }, [
        A(G, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      N(s.$slots, "default")
    ], 2));
  }
}), Bl = /* @__PURE__ */ k({
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
    const t = e, a = n, l = F([]), s = F(-1), r = F(-1), o = F(null);
    z(t.Items, (m, M) => {
      l.value = [...M];
    }), ue(() => {
      t.Items !== null && (l.value = [...t.Items]);
    });
    const d = (m) => {
      var M = m.target.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let b = ee.center;
      return m.y < B.y ? b = ee.top : b = ee.bottom, b;
    }, u = (m, M) => {
      M.stopPropagation(), s.value = m, M.dataTransfer.setData("value", null);
    }, h = (m, M) => {
      s.value && (M.stopPropagation(), m != s.value ? (r.value = m, o.value = d(M)) : (r.value = -1, o.value = null));
    }, c = (m) => {
      if (s.value) {
        m.stopPropagation();
        var M = r.value + (o.value == ee.top ? 0 : 1), B = l.value.splice(M, 1)[0];
        M >= s.value && M--, l.value.splice(M, 0, B), r.value = -1, o.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (m, M) => (i(), E($t, {
      type: m.type,
      compact: m.compact,
      outlined: m.outlined,
      highlighted: m.highlighted,
      onDrop: c
    }, {
      default: L(() => [
        (i(!0), p(W, null, R(l.value, (B, b) => (i(), p(W, null, [
          U(A(De, null, {
            default: L(() => [
              A(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, r.value === b && s.value !== b && o.value === S(ee).top]
          ]),
          A(De, {
            draggable: "true",
            onDragstart: (I) => u(b, I),
            onDragend: M[0] || (M[0] = (I) => s.value = null),
            onDragover: (I) => h(b, I),
            class: O({ "has-cursor": !0, "is-move": r.value == b, "is-grab": r.value != b })
          }, {
            default: L(() => [
              N(m.$slots, "item", {
                item: B,
                index: b
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          U(A(De, null, {
            default: L(() => [
              A(ce, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, r.value === b && s.value !== b && o.value === S(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Dl,
  DropZone: wl,
  Sortable: Bl
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ge = "DisabledFields", Ol = (e) => e, ne = (e, n) => {
  const t = n("Translate", Ol);
  return y(() => e.translate ?? t);
};
function Ye(e, n) {
  const t = n(He), a = n(Ge), l = y(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), s = y(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const St = (e) => {
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
const xl = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Jl = { class: "control" }, Al = { class: "tags has-addons" }, Nl = { class: "tag is-link" }, Tl = ["onClick"], Pl = { key: 0 }, El = ["placeholder"], Il = { class: "dropdown-menu" }, Ll = { class: "dropdown-content" }, Wl = ["onClick"], Vl = {
  key: 1,
  class: "dropdown-item"
}, Mt = /* @__PURE__ */ k({
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
    const a = t, l = e, s = ne(l, P), r = F([]), o = F(null), d = F(null), u = F(null), h = F(null);
    z(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (l.values != null && l.values != null) {
            let C = [];
            for (let g = 0; g < l.values.length && ((l.values[g].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || l.values[g].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && C.push(l.values[g]), C.length != 10); g++)
              ;
            d.value = C;
          } else {
            let g = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            g.length > 10 && g.splice(10, g.length - 10), d.value = g;
          }
      } else
        d.value = null, $(h.value).empty();
    });
    const c = () => {
      if (r.value.length == 0)
        return null;
      const w = r.value.slice();
      return l.limit != null && l.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, m = async (w) => {
      if (w == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const C = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (g) => {
            if (g.id !== void 0 && g.name !== void 0)
              return g;
            {
              let D = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${g.id === void 0 ? "q=" + encodeURIComponent(g) : "id=" + encodeURIComponent(g.id)}`)).json();
              return D.length > 0 ? (l.disabled && (D[0].readonly = !0), D[0]) : null;
            }
          })
        );
        r.value = C.filter((g) => g !== null), a("value_changed", { name: l.name, value: c() });
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
    }, b = () => {
      o.value = null;
    }, I = () => {
      h.value.focus();
    }, _ = (w) => {
      r.value.push(w), b(), a("value_changed", { name: l.name, value: c() });
    }, v = (w) => {
      r.value.splice(w, 1), I(), a("value_changed", { name: l.name, value: c() });
    };
    return n({ getValue: c, setValue: m }), (w, C) => (i(), p("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: I
    }, [
      f("div", xl, [
        (i(!0), p(W, null, R(r.value, (g, ae) => (i(), p("div", Jl, [
          f("div", Al, [
            f("a", Nl, J(S(s)(g.name)), 1),
            g.readonly ? T("", !0) : (i(), p("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (D) => v(ae)
            }, null, 8, Tl))
          ])
        ]))), 256)),
        l.disabled ? T("", !0) : (i(), p("div", Pl, [
          U(f("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: S(s)(l.title ?? ""),
            contenteditable: "",
            class: O(u.value),
            onFocus: C[0] || (C[0] = (g) => {
              u.value = "is-focused";
            }),
            onBlur: C[1] || (C[1] = (g) => {
              u.value = null;
            }),
            onKeydown: B,
            onPaste: M
          }, null, 42, El), [
            [se, r.value.length < l.limit || l.limit == null]
          ])
        ]))
      ]),
      f("div", {
        class: O(["dropdown", { "is-active": d.value != null && o.value != null && o.value != "" }])
      }, [
        f("div", Il, [
          f("div", Ll, [
            d.value != null && d.value.length > 0 ? (i(!0), p(W, { key: 0 }, R(d.value, (g) => (i(), p("a", {
              class: "dropdown-item",
              onClick: (ae) => _(g)
            }, J(S(s)(g.name)), 9, Wl))), 256)) : (i(), p("a", Vl, "No Results"))
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
    const t = e, a = n, l = ne(t, P);
    return (s, r) => (i(), E(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: S(l)(t.label),
      onClick: r[0] || (r[0] = (o) => a("button_clicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Cl = { class: "checkbox is-block" }, zl = ["value", "disabled"], Dt = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), r = t, o = ne(a, P), d = F([]), u = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let b = await qe(a.values), I = b.filter((_) => _.selected).map((_) => _.value);
        return d.value === null || d.value.length == 0 ? d.value = I.length > 0 ? [...I] : [] : (I = d.value, b = b.map((_) => ({
          label: _.label,
          value: _.value,
          selected: I.some((v) => v === _.value)
        }))), b;
      }
    });
    z(d, (b) => {
      r("value_changed", { name: a.name, value: c() });
    });
    const c = () => d.value.length == 0 ? null : d.value, m = (b) => {
      u.value = !0, d.value.splice(0), b !== null && (d.value = [...b]), u.value = !1, r("value_changed", { name: a.name, value: c() });
    }, { hiddenValues: M, disabledValues: B } = Ye(a.name, P);
    return n({ getValue: c, setValue: m }), (b, I) => (i(), p("div", null, [
      A(me, { promise: h.value }, {
        default: L(({ response: _ }) => [
          _ !== null ? (i(!0), p(W, { key: 0 }, R(_, (v) => U((i(), p("label", Cl, [
            U(f("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": I[0] || (I[0] = (w) => d.value = w),
              disabled: a.disabled || S(B).some((w) => w === v.value.toString())
            }, null, 8, zl), [
              [We, d.value]
            ]),
            Q(" " + J(S(o)(v.label)), 1)
          ], 512)), [
            [se, !S(M).some((w) => w === v.value.toString())]
          ])), 256)) : T("", !0)
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(ce), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Rl = { class: "checkbox" }, Ul = ["name", "disabled"], jl = {
  key: 0,
  class: "help is-danger"
}, wt = /* @__PURE__ */ k({
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
    const a = e, l = t, s = ne(a, P), r = y(() => s.value(a.label)), o = F(!1);
    return z(o, (h) => l("value_changed", { name: a.name, value: h })), n({ getValue: () => o.value, setValue: (h) => {
      o.value = h;
    } }), (h, c) => (i(), p("label", Rl, [
      U(f("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => o.value = m)
      }, null, 8, Ul), [
        [We, o.value]
      ]),
      Q(" " + J(r.value) + " ", 1),
      a.required ? (i(), p("span", jl, "*")) : T("", !0)
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
      let r = t.getTimezoneOffset() * -1, o = parseInt((r / 60).toFixed(0)), d = r - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${o < 0 ? "-" : "+"}${H(Math.abs(o).toString(), "0", 2) + ":" + H(Math.abs(d).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${o < 0 ? "-" : "+"}${H(Math.abs(o).toString(), "0", e.length)}`;
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
}, Hl = { class: "control" }, Gl = ["name", "id", "disabled"], at = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ke = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null), r = y(() => {
      if (s.value == null || s.value == "")
        return null;
      var u = Number(s.value.substring(3, 5)), h = Number(s.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return z(s, (u) => {
      l("value_changed", { name: a.name, value: u });
    }), n({ getValue: () => s.value, setValue: (u) => {
      if (u != null && at.test(u)) {
        var h = at.exec(u);
        u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = u;
    } }), (u, h) => (i(), p("div", Hl, [
      U(f("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (c) => s.value = c),
        disabled: a.disabled,
        style: Ve(r.value)
      }, null, 12, Gl), [
        [_e, s.value]
      ])
    ]));
  }
});
const Yl = { class: "control has-icons-left has-icons-right" }, ql = ["name", "id", "placeholder", "disabled"], Kl = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), Ql = { class: "modal-content" }, Xl = { class: "panel is-primary is-dateselect" }, Zl = { class: "panel-heading" }, en = { class: "columns card-header-title" }, tn = { class: "column" }, an = { class: "column has-text-centered" }, ln = { class: "column has-text-right" }, nn = { class: "panel-block" }, sn = { class: "table is-striped has-text-centered" }, on = ["onClick"], rn = { key: 0 }, un = {
  colspan: "100%",
  class: "has-text-centered"
}, dn = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Bt = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = e, s = t, r = F(!1), o = F(null), d = F(null), u = nt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(P), c = we({
      Sun: y(() => V("Date.Weekdays.Sun", h)),
      Mon: y(() => V("Date.Weekdays.Mon", h)),
      Tue: y(() => V("Date.Weekdays.Tue", h)),
      Wed: y(() => V("Date.Weekdays.Wed", h)),
      Thu: y(() => V("Date.Weekdays.Thu", h)),
      Fri: y(() => V("Date.Weekdays.Fri", h)),
      Sat: y(() => V("Date.Weekdays.Sat", h))
    }), m = y(() => o.value !== null && (l.includeTime ? Se : ke).test(o.value)), M = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!Se.test(o.value) && l.includeTime)
          return null;
        if (!l.includeTime && !ke.test(o.value))
          return null;
        if (ke.test(o.value) && l.includeTime)
          return null;
        let D = l.includeTime ? Se.exec(o.value) : ke.exec(o.value);
        return new Date(
          parseInt(D[3]),
          parseInt(D[2]) - 1,
          parseInt(D[1]),
          l.includeTime ? parseInt(D[4]) : 0,
          l.includeTime ? parseInt(D[5]) : 0,
          0,
          0
        );
      }
    };
    z(o, (D) => {
      if (D == null)
        s("value_changed", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(D) && !Se.test(D)) {
        D = D.replaceAll(/[^0-9]/g, "");
        for (var x = [], j = 0; j < D.length; j += 2)
          j == 4 ? (x.push(D.substring(j, Math.min(D.length - j, 4) + j)), j += 2) : x.push(D.substring(j, Math.min(D.length - j, 2) + j));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), D = x.join(""), !l.includeTime && D.length > 8 && (D = D.substring(0, 8)), D.length >= 2 && (D = D.substring(0, 2) + "-" + (D.length > 2 ? D.substring(2) : "")), D.length >= 5 && (D = D.substring(0, 5) + "-" + (D.length > 5 ? D.substring(5) : "")), D.length >= 9 && l.includeTime && (D = D.substring(0, 9) + " " + (D.length > 9 ? D.substring(9) : "")), D.length >= 11 && (D = D.substring(0, 11) + ":" + (D.length > 11 ? D.substring(11) : "")), o.value = D;
      } else {
        var le = M();
        m && s("value_changed", { name: l.name, value: le }), u.Month = le.getMonth(), u.Year = le.getFullYear();
      }
    });
    const B = y(() => ge(new Date(u.Year, u.Month, 1), h, "MMMM")), b = y(() => {
      var D = [], x = new Date(u.Year, u.Month, 1);
      x = Pe(x, x.getDay() * -1);
      for (var j = M(), le = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); x.getMonth() != le; ) {
        for (var Ae = [], Qe = 0; Qe < 7; Qe++)
          Ae.push({
            Number: x.getDate(),
            Disabled: x.getMonth() != u.Month,
            isToday: ge(x, h, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: j != null && ge(x, h, "yyyy-MM-dd") == ge(j, h, "yyyy-MM-dd")
          }), x = Pe(x, 1);
        D.push(Ae);
      }
      return D;
    });
    n({ getValue: M, setValue: function(D) {
      D == null ? o.value = null : o.value = ge(D, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const _ = (D) => {
      D.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + D.value : o.value = `${H((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year} ${D.value}`;
    }, v = (D) => {
      if (!D.Disabled && !D.isSelected)
        if (o.value === null)
          o.value = `${H(D.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var x = o.value.split(" ");
          x[0] = `${H(D.Number.toString(), "0", 2)}-${H((u.Month + 1).toString(), "0", 2)}-${u.Year}`, o.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      o.value = d.value, r.value = !1;
    }, C = () => {
      l.disabled || (d.value = o.value, r.value = !0);
    }, g = () => {
      l.disabled || (o.value = null);
    }, ae = (D) => {
      u.Month + D == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + D == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += D;
    };
    return (D, x) => (i(), p("div", null, [
      f("div", Yl, [
        U(f("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (j) => o.value = j),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, ql), [
          [_e, o.value]
        ]),
        f("span", {
          class: "icon is-small is-left is-clickable",
          onClick: C
        }, [
          A(S(G), { icon: "calendar-alt" })
        ]),
        f("span", {
          class: "icon is-small is-right is-clickable",
          onClick: g
        }, [
          A(S(G), { icon: "window-close" })
        ])
      ]),
      f("div", {
        class: O(["modal", { "is-active": r.value }])
      }, [
        Kl,
        f("div", Ql, [
          f("div", Xl, [
            f("div", Zl, [
              f("div", en, [
                f("div", tn, [
                  A(S(G), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (j) => ae(-1))
                  })
                ]),
                f("div", an, J(B.value) + " " + J(u.Year), 1),
                f("div", ln, [
                  A(S(G), {
                    icon: "arrow-circle-right",
                    onClick: x[2] || (x[2] = (j) => ae(1))
                  })
                ])
              ])
            ]),
            f("div", nn, [
              f("table", sn, [
                f("thead", null, [
                  f("tr", null, [
                    f("th", null, J(S(c).Sun), 1),
                    f("th", null, J(S(c).Mon), 1),
                    f("th", null, J(S(c).Tue), 1),
                    f("th", null, J(S(c).Wed), 1),
                    f("th", null, J(S(c).Thu), 1),
                    f("th", null, J(S(c).Fri), 1),
                    f("th", null, J(S(c).Sat), 1)
                  ])
                ]),
                f("tbody", null, [
                  (i(!0), p(W, null, R(b.value, (j) => (i(), p("tr", null, [
                    (i(!0), p(W, null, R(j, (le) => (i(), p("td", {
                      class: O(["is-unselectable", le.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", le.isToday ? "has-background-primary-dark" : "", le.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ae) => v(le)
                    }, J(le.Number), 11, on))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (i(), p("tfoot", rn, [
                  f("tr", null, [
                    f("td", un, [
                      A(Ke, {
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
            f("div", dn, [
              A(S(vt), {
                addonclass: "card-footer-item",
                disabled: !m.value,
                onClick: x[3] || (x[3] = (j) => r.value = !1)
              }, null, 8, ["disabled"]),
              A(S(gt), {
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
const Ft = /* @__PURE__ */ k({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = Zt(P);
    xe([`${s}summernote-lite.min.css`]), [a, l] = Ut(() => import(`${s}summernote`)), await a, l();
    const r = F(null), o = e, d = t;
    return z(() => o.disabled, (c) => {
      r.value != null && $(r.value).summernote(c ? "disable" : "enable");
    }), n({ getValue: () => $(r.value).summernote("code"), setValue: (c) => {
      $(r.value).summernote("code", c);
    } }), ue(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(c) {
            d("value_changed", { name: o.name, value: c });
          }
        }
      }), (o.disabled ?? !1) && $(r.value).summernote("disable");
    }), jt(() => {
      $(r.value).summernote("destroy");
    }), (c, m) => (i(), p("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
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
    const n = e, t = ne(n, P);
    return (a, l) => (i(), E(be(n.subtype), null, {
      default: L(() => [
        Q(J(S(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), cn = ["name"], Ot = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return z(s, (d) => l("value_changed", { name: a.name, value: d })), n({ getValue: () => s.value, setValue: (d) => {
      s.value = d;
    } }), (d, u) => U((i(), p("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, cn)), [
      [_e, s.value]
    ]);
  }
}), pn = ["name", "disabled", "min", "max", "step"], xt = /* @__PURE__ */ k({
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
    const a = e, l = t, s = F(null), r = () => {
      if (s.value === "")
        return null;
      let d = parseInt(s.value);
      return a.min !== void 0 && d < a.min * 1 || a.max !== void 0 && d > a.max * 1 ? null : d;
    }, o = (d) => {
      s.value = d === null ? "" : d.toString();
    };
    return z([s], (d) => l("value_changed", { name: a.name, value: r() })), n({ getValue: r, setValue: o }), (d, u) => U((i(), p("input", {
      type: "number",
      class: "input",
      name: d.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
      disabled: d.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, pn)), [
      [_e, s.value]
    ]);
  }
}), hn = ["id"], Le = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, P);
    return (a, l) => (i(), p("p", {
      id: n.name
    }, J(S(t)(n.label)), 9, hn));
  }
}), mn = { class: "radio" }, bn = ["name", "value", "disabled"], fn = /* @__PURE__ */ f("br", null, null, -1), Jt = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), r = t, o = ne(a, P), d = F(null), u = function() {
      return d.value;
    };
    z(d, (B) => {
      r("value_changed", { name: a.name, value: u() });
    });
    const h = y(async () => {
      if (a.values == null)
        return [];
      {
        let B = await qe(a.values);
        return d.value === null && B.some((b) => b.selected) && (d.value = B.find((b) => b.selected).value), B.map((b) => ({
          label: b.label,
          value: b.value,
          selected: d.value === b.value
        }));
      }
    }), c = (B) => {
      d.value = B;
    }, { hiddenValues: m, disabledValues: M } = Ye(a.name, P);
    return n({ getValue: u, setValue: c }), (B, b) => (i(), p("div", null, [
      A(me, { promise: h.value }, {
        default: L(({ response: I }) => [
          B.values != null ? (i(!0), p(W, { key: 0 }, R(I, (_) => (i(), p(W, null, [
            U(f("label", mn, [
              f("input", {
                type: "radio",
                name: a.name,
                value: _.value,
                class: "radio",
                disabled: a.disabled || S(M).some((v) => v === _.value.toString())
              }, null, 8, bn),
              Q(" " + J(S(o)(_.label)), 1)
            ], 512), [
              [se, !S(m).some((v) => v === _.value.toString())]
            ]),
            fn
          ], 64))), 256)) : T("", !0)
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(ce), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), gn = { class: "select" }, vn = ["id", "name", "multiple", "disabled"], yn = ["value", "selected", "disabled"], _n = ["label"], kn = ["value", "selected", "disabled"], At = (e, n, t) => {
  let a = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = t.length;
  return t.push(a), n.values.forEach((s) => {
    s.values === void 0 ? a.values.push(s) : t = At(a.label, s, t);
  }), t[l].values.length == 0 && t.splice(l, 1), t;
}, Nt = /* @__PURE__ */ k({
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
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), r = t, o = ne(a, P), d = F(null), u = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let b = await qe(a.values), I = b.filter((v) => v.selected).map((v) => v.value);
        b.some((v) => v.values !== void 0) && b.filter((v) => v.values !== void 0).forEach((v) => {
          I = I.concat(
            v.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), d.value === null || d.value.length === 0 ? d.value = null : (b = b.map((v) => {
          let w = v;
          return w.values !== void 0 && (w.values = w.values.map((C) => (C.selected = d.value.some((g) => g === C.value), C))), w;
        }), d.value.forEach((v) => {
          b.some((w) => w.value !== void 0 && w.value === v || w.values !== void 0 && w.values.some((C) => C.value === v)) || b.push({
            label: v,
            value: v
          });
        }));
        let _ = [];
        return b.forEach((v) => {
          v.values === void 0 ? _.push(v) : _ = At(v.label, v, _);
        }), _;
      }
    }), c = () => d.value == null || d.value.length == 0 ? null : a.multiple ? d.value.slice() : Array.isArray(d.value) ? d.value[0] : d.value;
    z(d, () => {
      u.value || r("value_changed", { name: a.name, value: c() });
    }), z(u, (b) => {
      b || r("value_changed", { name: a.name, value: c() });
    });
    const m = (b) => {
      u.value = !0, b != null ? a.multiple ? d.value = Array.isArray(b) ? b : [b] : d.value = b : a.multiple ? d.value = [] : d.value = null, u.value = !1;
    }, { hiddenValues: M, disabledValues: B } = Ye(a.name, P);
    return n({ getValue: c, setValue: m }), (b, I) => (i(), p("div", gn, [
      h.value != null ? (i(), E(me, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: _ }) => [
          U(f("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: O([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": I[0] || (I[0] = (v) => d.value = v),
            disabled: a.disabled
          }, [
            _ != null ? (i(!0), p(W, { key: 0 }, R(_, (v) => (i(), p(W, null, [
              v.values == null ? U((i(), p("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: S(B).some((w) => w === v.value.toString())
              }, J(S(o)(v.label)), 9, yn)), [
                [se, !S(M).some((w) => w === v.value.toString())]
              ]) : T("", !0),
              v.values != null ? (i(), p("optgroup", {
                key: 1,
                label: S(o)(v.label)
              }, [
                (i(!0), p(W, null, R(v.values, (w) => U((i(), p("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: S(B).some((C) => C === w.value.toString())
                }, J(S(o)(w.label)), 9, kn)), [
                  [se, !S(M).some((C) => C === w.value.toString())]
                ])), 256))
              ], 8, _n)) : T("", !0)
            ], 64))), 256)) : T("", !0)
          ], 10, vn), [
            [Ht, d.value]
          ])
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(ce), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : T("", !0)
    ]));
  }
}), $n = { class: "field" }, Sn = ["id", "name", "disabled"], Mn = ["for"], Dn = {
  key: 0,
  class: "help is-danger"
}, Tt = /* @__PURE__ */ k({
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
    const a = e, l = t, s = ne(a, P), r = F(!1);
    return z(r, (u) => l("value_changed", { name: a.name, value: u })), n({ getValue: () => r.value, setValue: (u) => {
      r.value = u;
    } }), (u, h) => (i(), p("div", $n, [
      U(f("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (c) => r.value = c),
        disabled: a.disabled
      }, null, 8, Sn), [
        [We, r.value]
      ]),
      f("label", { for: u.name }, [
        Q(J(S(s)(a.label)) + " ", 1),
        a.required ? (i(), p("span", Dn, "*")) : T("", !0)
      ], 8, Mn)
    ]));
  }
}), wn = ["type", "name", "disabled", "maxlength"], Pt = /* @__PURE__ */ k({
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
    return z(s, (d) => l("value_changed", { name: a.name, value: d })), n({ getValue: () => s.value, setValue: (d) => {
      s.value = d;
    } }), (d, u) => U((i(), p("input", {
      type: d.subtype,
      class: "input",
      name: d.name,
      disabled: d.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, wn)), [
      [Gt, s.value]
    ]);
  }
}), Bn = ["name", "rows", "cols", "maxlength", "disabled"], Et = 9, ve = String.fromCharCode(Et), Me = String.fromCharCode(10), It = /* @__PURE__ */ k({
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
    const r = () => s.value, o = (u) => {
      s.value = u;
    };
    n({ getValue: r, setValue: o });
    const d = (u) => {
      if (a.supportsTab) {
        let h = r();
        switch (u.keyCode) {
          case Et:
            let c = u.target.selectionStart, m = u.target.selectionEnd, M = h.substring(0, c), B = h.length > m ? h.substring(m) : "", b = c == m ? "" : h.substring(c, m);
            if (b.indexOf(String.fromCharCode(10)) < 0)
              u.shiftKey ? b.startsWith(ve) ? (b = b.substring(1), c--) : M.endsWith(ve) && (M = M.substring(0, M.length - 1), c--) : b = ve + b;
            else {
              let I = !1;
              b.endsWith(Me) && (I = !0, b = b.substring(0, b.length - 1));
              let _ = b.split(Me);
              b = "", u.shiftKey && M.endsWith(ve) && (M = M.substring(0, M.length - 1), c--), _.forEach((v, w) => {
                u.shiftKey && v.startsWith(ve) ? v = v.substring(1) : u.shiftKey || (v = ve + v), b += v + (w === _.length - 1 ? "" : Me);
              }), I && (b += Me);
            }
            return h = M + b + B, c += b.length == 1 ? 1 : 0, m = c + (b.length == 1 ? 0 : b.length), o(h), u.target.selectionStart = c, u.target.selectionEnd = m, u.target.focus(), u.preventDefault != null && u.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (u, h) => U((i(), p("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: d,
      "onUpdate:modelValue": h[0] || (h[0] = (c) => s.value = c)
    }, null, 40, Bn)), [
      [_e, s.value]
    ]);
  }
}), Fn = { class: "columns" }, Lt = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = P(He), r = P(Ge);
    n({ setValue: (c) => {
      h.forEach((m) => {
        switch (m.type) {
          case "subform":
            m.setValue(c);
            break;
          default:
            m.setValue !== void 0 && (c === null ? m.setValue(null) : Object.keys(c).some((M) => M === m.fieldName) ? m.setValue(c[m.fieldName]) : Object.keys(c).some((M) => M === m.altFieldName) && m.setValue(c[m.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var c = {};
      return h.forEach((m) => {
        if (m.getValue != null)
          switch (m.type) {
            case "subform":
              c = $.extend(c, m.getValue());
              break;
            default:
              c[m.fieldName] = m.getValue();
              break;
          }
      }), c;
    }, isValid: () => !h.some((c) => !(c.isValid === void 0 || c.isValid())) });
    const h = a.inputs.map((c) => F(null));
    return (c, m) => (i(), p("div", Fn, [
      (i(!0), p(W, null, R(a.inputs, (M, B) => (i(), E(Wt, {
        ref_for: !0,
        ref: (b) => S(h)[B] = b,
        input: M,
        onValue_changed: m[0] || (m[0] = (b) => l("value_changed", b)),
        onButton_clicked: m[1] || (m[1] = (b) => l("button_clicked", b)),
        disabled: a.disabled || S(r).some((b) => b === M.name),
        hidden: S(s).some((b) => b === M.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), On = ["id", "name"], xn = /* @__PURE__ */ k({
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
    const r = y(() => {
      let h = St(a.fields);
      return s = h.map((c) => F(null)), h;
    });
    return n({ isValid: () => !s.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => s.forEach((c) => c.setValue(h)), getValue: () => {
      var h = {};
      return s.forEach((c) => {
        h = $.extend(h, c.getValue());
      }), h;
    } }), (h, c) => U((i(), p("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (i(!0), p(W, null, R(r.value, (m, M) => (i(), E(Lt, {
        ref_for: !0,
        ref: (B) => S(s)[M] = B,
        inputs: m,
        disabled: a.disabled,
        onValue_changed: c[0] || (c[0] = (B) => l("value_changed", B)),
        onButton_clicked: c[1] || (c[1] = (B) => l("button_clicked", B))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, On)), [
      [se, !a.hidden]
    ]);
  }
}), Jn = ["for"], An = {
  key: 0,
  class: "help is-danger"
}, Nn = { class: "control" }, Tn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Pn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Wt = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = t, s = e, r = ne(s, P), o = we(F(s.input.type)), d = y(() => {
      let g = null;
      switch (s.input.type) {
        case "autocomplete":
          g = Mt;
          break;
        case "button":
          g = Ee;
          break;
        case "checkbox-group":
          g = Dt;
          break;
        case "checkbox":
          g = wt;
          break;
        case "date":
          g = Bt;
          break;
        case "full-editor":
          g = Ft;
          break;
        case "header":
          g = Ie;
          break;
        case "hidden":
          g = Ot;
          break;
        case "number":
          g = xt;
          break;
        case "paragraph":
          g = Le;
          break;
        case "radio-group":
          g = Jt;
          break;
        case "select":
          g = Nt;
          break;
        case "switch":
          g = Tt;
          break;
        case "text":
          g = Pt;
          break;
        case "textarea":
          g = It;
          break;
        case "time":
          g = Ke;
          break;
        case "subform":
          g = xn;
          break;
      }
      return g;
    }), u = function(g) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(g);
    };
    ue(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && u(s.input.value);
    });
    const h = y(() => s.input.disabled ?? s.disabled ?? !1), c = y(() => `is-${s.input.form_columns ?? 12}`), m = y(() => s.input.name), M = y(() => s.input.processVariable ?? s.input.name), B = y(() => Tn.some((g) => g === s.input.type) && s.input.label !== void 0 && s.input.label !== null), b = y(() => {
      let g = $.extend({}, s.input);
      return delete g.type, g.className != null && delete g.className, g.form_columns != null && delete g.form_columns, Pn.some((ae) => ae === s.input.type) && (g.translate = s.translate), g.disabled = s.disabled, g;
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
    return n({ setValue: u, fieldName: m, type: o, altFieldName: M, getValue: v, isValid: () => {
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
    } }), (g, ae) => U((i(), p("div", {
      class: O(["field column", [c.value]])
    }, [
      s.input.type == "header" ? (i(), E(Ie, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (i(), E(Le, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (i(), E(Ee, {
        key: 2,
        name: s.input.name,
        sstyle: s.input.style,
        className: s.input.className,
        icon: s.input.icon,
        label: s.input.label,
        disabled: h.value,
        onButton_clicked: _,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (i(), p(W, { key: 3 }, [
        B.value ? (i(), p("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Q(J(S(r)(s.input.label)) + " ", 1),
          s.input.required ? (i(), p("span", An, "*")) : T("", !0)
        ], 8, Jn)) : T("", !0),
        f("div", Nn, [
          (i(), E(be(d.value), Y(b.value, {
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
const En = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, In = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, P);
    Ne("Translate", (_) => s.value(_));
    let r = [];
    const o = y(() => {
      if (a.elements != null) {
        let _ = St(a.elements);
        return r = _.map((v) => F(null)), _;
      } else
        return null;
    }), d = () => {
      let _ = {};
      return r.forEach((v) => {
        _ = $.extend(_, v.getValue());
      }), _;
    }, u = (_) => {
      r.forEach((v) => v.setValue(_));
    }, h = () => !r.some((_) => !(_.isValid === void 0 || _.isValid())), c = F([]);
    Ne(He, we(c));
    const m = (_) => {
      Array.isArray(_) ? c.value = [...c.value, ..._] : c.value.push(_);
    }, M = (_) => {
      Array.isArray(_) ? c.value = c.value.filter((v) => _.indexOf(v) >= 0) : c.value = c.value.filter((v) => v !== _);
    }, B = F([]);
    return Ne(Ge, we(B)), n({ getValues: d, setValues: u, isValid: h, hideField: m, showField: M, disableField: (_) => {
      Array.isArray(_) ? B.value = [...B.value, ..._] : B.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? B.value = B.value.filter((v) => _.indexOf(v) >= 0) : B.value = B.value.filter((v) => v !== _);
    } }), (_, v) => (i(), p("form", En, [
      o.value != null ? (i(!0), p(W, { key: 0 }, R(o.value, (w, C) => (i(), E(Lt, {
        ref_for: !0,
        ref: (g) => S(r)[C] = g,
        inputs: w,
        key: C,
        onValue_changed: v[0] || (v[0] = (g) => l("value_changed", g)),
        onButton_clicked: v[1] || (v[1] = (g) => l("button_clicked", g)),
        disabled: _.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : T("", !0)
    ]));
  }
}), Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Mt,
  Button: Ee,
  Checkbox: wt,
  CheckboxGroup: Dt,
  ComponentForm: In,
  DateField: Bt,
  FormComponent: Wt,
  FullEditor: Ft,
  Header: Ie,
  Hidden: Ot,
  NumberField: xt,
  Paragraph: Le,
  RadioGroup: Jt,
  Select: Nt,
  Switch: Tt,
  Text: Pt,
  TextArea: It,
  Time: Ke
}, Symbol.toStringTag, { value: "Module" })), Wn = { class: "hero-body" }, Vn = { class: "title" }, Cn = {
  key: 0,
  class: "subtitle"
}, zn = /* @__PURE__ */ k({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("section", {
      class: O(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + n.type])
    }, [
      f("div", Wn, [
        f("p", Vn, J(n.title), 1),
        n.subtitle ? (i(), p("p", Cn, J(n.subtitle), 1)) : T("", !0)
      ])
    ], 2));
  }
}), Rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of n)
    t[a] = l;
  return t;
}, Un = {}, jn = { class: "box" };
function Hn(e, n) {
  return i(), p("div", jn, [
    N(e.$slots, "default")
  ]);
}
const Gn = /* @__PURE__ */ Rn(Un, [["render", Hn]]), Yn = {
  key: 0,
  class: "icon is-clickable"
}, qn = /* @__PURE__ */ k({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n;
    return (l, s) => (i(), p("li", {
      class: O({ "is-active": t.active })
    }, [
      f("a", {
        onClick: s[0] || (s[0] = (r) => a("click"))
      }, [
        t.icon ? (i(), p("span", Yn, [
          A(S(G), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        Q(" " + J(t.title), 1)
      ])
    ], 2));
  }
}), Kn = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("nav", {
      class: O(t.value),
      "aria-label": "breadcrumbs"
    }, [
      f("ul", null, [
        N(a.$slots, "default")
      ])
    ], 2));
  }
}), Qn = {
  key: 0,
  class: "card-icon"
}, Xn = { class: "card-icon-wrapper" }, Zn = { class: "card-header" }, es = { class: "card-content" }, ts = { class: "card-footer" }, Vt = /* @__PURE__ */ k({
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
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (l, s) => (i(), p("div", {
      class: O(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (i(), p("div", Qn, [
        f("div", Xn, [
          A(G, {
            icon: n.icon,
            size: S(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : T("", !0),
      f("div", Zn, [
        N(l.$slots, "header", re(de(a)))
      ]),
      f("div", es, [
        N(l.$slots, "content")
      ]),
      f("div", ts, [
        N(l.$slots, "footer", re(de(t)))
      ])
    ], 2));
  }
}), as = /* @__PURE__ */ k({
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
    return (t, a) => (i(), p("div", {
      class: O(["columns", [
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
      N(t.$slots, "default")
    ], 2));
  }
}), ls = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("div", {
      class: O(["column", t.value])
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), ns = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), ss = { class: "modal-content" }, os = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, rs = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (i(), p("div", {
      class: O({ modal: !0, "is-active": n.display }),
      style: Ve(`z-index:${n.zIndex}`)
    }, [
      ns,
      f("div", ss, [
        N(t.$slots, "default")
      ]),
      n.hasClose ? (i(), p("button", os)) : T("", !0)
    ], 6));
  }
}), is = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), us = {
  key: 0,
  class: "card-icon"
}, ds = { class: "card-icon-wrapper" }, cs = { class: "modal-card-head" }, ps = { class: "modal-card-body" }, hs = { class: "modal-card-foot" }, ms = /* @__PURE__ */ k({
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
    }, r = y(() => {
      var o = [];
      return t.fullWidth && o.push("is-fullwidth"), t.fullHeight && o.push("is-fullheight"), t.maxWidth && o.push("is-maxwidth"), t.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, d) => (i(), p("div", {
      class: O(["modal", { "is-active": t.show }])
    }, [
      is,
      f("div", {
        class: O(["modal-card", r.value])
      }, [
        t.icon !== null ? (i(), p("div", us, [
          f("div", ds, [
            A(G, {
              icon: t.icon,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : T("", !0),
        f("div", cs, [
          N(o.$slots, "header", re(de(s))),
          o.hasClose ? (i(), p("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: d[0] || (d[0] = (u) => a("close"))
          })) : T("", !0)
        ]),
        f("div", ps, [
          N(o.$slots, "content")
        ]),
        f("div", hs, [
          N(o.$slots, "footer", re(de(l)))
        ])
      ], 2)
    ], 2));
  }
}), bs = {
  key: 0,
  class: "panel-heading"
}, fs = {
  key: 1,
  class: "panel-tabs"
}, gs = { class: "panel-block" }, vs = /* @__PURE__ */ k({
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
    return (l, s) => (i(), p("div", {
      class: O(["panel", a.value])
    }, [
      n.hasHeader ? (i(), p("div", bs, [
        N(l.$slots, "header")
      ])) : T("", !0),
      n.hasTabs ? (i(), p("div", fs, [
        N(l.$slots, "tabs")
      ])) : T("", !0),
      (i(!0), p(W, null, R(t.value, (r) => (i(), p("div", gs, [
        N(l.$slots, r)
      ]))), 256))
    ], 2));
  }
}), Ct = /* @__PURE__ */ k({
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
    return (l, s) => (i(), p("div", {
      class: O(t.value)
    }, [
      f("table", {
        class: O(a.value)
      }, [
        f("thead", null, [
          N(l.$slots, "thead")
        ]),
        f("tbody", null, [
          N(l.$slots, "tbody")
        ]),
        f("tfoot", null, [
          N(l.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), ys = ["href"], _s = {
  key: 0,
  class: "icon is-small"
}, ks = /* @__PURE__ */ k({
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
    return (s, r) => (i(), p("li", {
      class: O({ "is-active": a.active })
    }, [
      f("a", {
        href: s.href,
        onClick: l
      }, [
        a.icon ? (i(), p("span", _s, [
          A(S(G), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        f("span", null, J(a.title), 1)
      ], 8, ys)
    ], 2));
  }
}), $s = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("div", {
      class: O(t.value)
    }, [
      f("ul", null, [
        N(a.$slots, "default")
      ])
    ], 2));
  }
}), Ss = /* @__PURE__ */ k({
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
    return (a, l) => (i(), p("div", {
      class: O(t.value)
    }, [
      N(a.$slots, "default")
    ], 2));
  }
}), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: zn,
  Box: Gn,
  Breadcrumbs: Kn,
  BreadcrumbsItem: qn,
  Card: Vt,
  Column: ls,
  ColumnContainer: as,
  List: $t,
  ListItem: De,
  Modal: rs,
  ModalCard: ms,
  Panel: vs,
  Table: Ct,
  Tabs: $s,
  TabsTab: ks,
  Tile: Ss
}, Symbol.toStringTag, { value: "Module" }));
const lt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
xe(`${lt.substring(0, lt.lastIndexOf("/"))}/style.css`);
const Ds = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function ws(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Ds,
  setSkin: ws
}, Symbol.toStringTag, { value: "Module" })), Fs = /* @__PURE__ */ k({
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
    const t = `${aa(P)}chart.umd.min.js`, a = F(null), l = e, s = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, d = y(() => {
      var u = "";
      return l.width && (u = `width:${l.width}px;`), l.height && (u += `height:${l.height}px;`), u;
    });
    return z(() => l.type, (u) => {
      r != null && (r.type = u ?? "line");
    }), z(
      () => l.labels,
      (u) => {
        r != null && (r.data.labels = u, (l.showRefresh == null || !l.showRefresh) && o());
      },
      { deep: !0 }
    ), z(
      () => l.datasets,
      (u) => {
        r != null && (r.data.datasets = u, (l.showRefresh == null || !l.showRefresh) && o());
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
              filter: (c, m) => c.text != null
            },
            onClick: function(c, m) {
              s("legendItemClick", r, m);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: h } = await Ce(t, ["Chart"]);
      r = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), r.update();
    }), (u, h) => (i(), E(Vt, null, Yt({
      content: L(() => [
        f("canvas", {
          ref_key: "canvas",
          ref: a,
          style: Ve(d.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: L((c) => [
          f("h3", {
            class: O(c.headerClass)
          }, J(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.showRefresh != null && l.showRefresh != null && l.showRefresh ? {
        name: "footer",
        fn: L((c) => [
          A(yt, Y(c, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Os = /* @__PURE__ */ k({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = `${la(P)}src-noconflict/ace.js`, l = e, s = t, r = F(null), o = F(null), d = function() {
      return o.getValue() == "" ? null : o.getValue();
    }, u = function(c) {
      o.setValue(c ?? "");
    };
    z(() => l.readonly, (c) => {
      o.setReadOnly(c == null || c == null ? !1 : c);
    }), z(() => l.value, (c) => {
      u(c);
    }), z(() => l.language, (c) => {
      o.getSession().setMode(c);
    });
    const h = y(() => {
      let c = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let m = 0; m < l.autocompletes.length; m++)
          l.autocompletes[m].Method.indexOf(".") >= 0 ? c = Math.min(c, l.autocompletes[m].Method.indexOf(".")) : c = Math.min(c, l.autocompletes[m].Method.length);
        if (c > 3 && l.autocompletes.length > 0) {
          let m = !0, M = l.autocompletes[0].Method.substring(0, 3);
          for (let B = 0; B < l.autocompletes.length; B++)
            if (l.autocompletes[B].Method.substring(0, 3) != M) {
              m = !1;
              break;
            }
          m && (c = 3);
        }
      }
      return c;
    });
    return n({ getValue: d, setValue: u }), ue(async () => {
      const { ace: c } = await Ce(a, ["ace"]);
      o.value = qt(c.edit(r.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), o.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && o.value.setValue(l.value), o.on("change", () => s("value_changed", d())), l.autocompletes !== null && l.autocompletes !== void 0 && (o.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), o.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(m, M, B, b, I) {
          var _ = [];
          if (b = b.toUpperCase(), b.length >= h && (_ = l.autocompletes.filter((v) => v.Method.toUpperCase().startsWith(b) && v.Method.length > b.legend).map((v) => ({
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
    }), (c, m) => (i(), p("div", {
      class: "editor",
      ref_key: "container",
      ref: r
    }, null, 512));
  }
}), xs = ["colspan", "rowspan"], Js = { key: 0 }, As = { colspan: "100%" }, Ns = ["colspan", "rowspan", "onClick"], Ts = { colspan: "100%" }, Ps = /* @__PURE__ */ k({
  __name: "grid",
  props: {
    Columns: {},
    Data: {},
    EmptyMessage: {},
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
  emits: ["moveForward", "moveBack", "goToPage", "cellClicked"],
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
    }));
    return (r, o) => (i(), E(Ct, re(de(l.value)), {
      thead: L(() => [
        (i(!0), p(W, null, R(t.Columns, (d) => (i(), p("tr", null, [
          (i(!0), p(W, null, R(d, (u) => (i(), p("th", {
            colspan: u.Colspan ?? 1,
            rowspan: u.Rowspan ?? 1
          }, [
            N(r.$slots, `head-${u.ID}`),
            Q(" " + J(u.Title), 1)
          ], 8, xs))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        t.Data === null || t.Data.length === 0 ? (i(), p("tr", Js, [
          f("td", As, [
            t.Data === null ? (i(), E(ie, { key: 0 })) : (i(), E(ce, {
              key: 1,
              message: t.EmptyMessage ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (i(!0), p(W, { key: 1 }, R(t.Data, (d, u) => (i(), p(W, null, [
          (i(!0), p(W, null, R(t.Columns, (h, c) => (i(), p("tr", {
            key: `row-${u}-${c}`
          }, [
            (i(!0), p(W, null, R(h, (m) => (i(), p("td", {
              key: `data-${u}-${c}`,
              colspan: m.Colspan ?? 1,
              rowspan: m.Rowspan ?? 1,
              onClick: (M) => a("cellClicked", { RowIndex: u, Data: m.PropertyName ? d[m.PropertyName] : null, Row: d })
            }, [
              N(r.$slots, `body-${m.ID}`, re(de({ RowIndex: u, Data: m.PropertyName ? d[m.PropertyName] : null, Row: d })))
            ], 8, Ns))), 128))
          ]))), 128))
        ], 64))), 256))
      ]),
      tfoot: L(() => [
        f("tr", null, [
          f("td", Ts, [
            A(_t, Y(s.value, {
              onMoveForward: o[0] || (o[0] = (d) => a("moveForward")),
              onMoveBack: o[1] || (o[1] = (d) => a("moveBack")),
              onGoToPage: o[2] || (o[2] = (d) => a("goToPage", d))
            }), null, 16)
          ])
        ])
      ]),
      _: 3
    }, 16));
  }
}), Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Fs,
  CodeWriter: Os,
  Grid: Ps
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Ws,
  Button: Vs,
  ButtonAdd: Cs,
  ButtonCancel: zs,
  ButtonDelete: Rs,
  ButtonDisable: Us,
  ButtonDownload: js,
  ButtonEdit: Hs,
  ButtonEnable: Gs,
  ButtonOkay: Ys,
  ButtonPrint: qs,
  ButtonRefresh: Ks,
  ButtonSave: Qs,
  ButtonUpload: Xs,
  CheckMark: Zs,
  DynamicSlot: eo,
  Filter: to,
  Icon: ao,
  Message: lo,
  Notification: no,
  PageNotification: so,
  Pagination: oo,
  Promised: ro,
  Progress: io,
  NavBar: uo,
  Menu: co,
  MenuLabel: po,
  MenuList: ho,
  MenuEntry: mo,
  ToolTip: bo,
  Badge: fo,
  Tag: go,
  Tags: vo
} = Ml, { DraggableItem: yo, DropZone: _o, Sortable: ko } = Fl, {
  AutoComplete: $o,
  CheckboxGroup: So,
  Checkbox: Mo,
  DateField: Do,
  ComponentForm: wo,
  FullEditor: Bo,
  Header: Fo,
  Hidden: Oo,
  NumberField: xo,
  Paragraph: Jo,
  RadioGroup: Ao,
  Select: No,
  Switch: To,
  Text: Po,
  TextArea: Eo,
  Time: Io,
  FormComponent: Lo
} = Ln, {
  Banner: Wo,
  Box: Vo,
  BreadcrumbsItem: Co,
  Breadcrumbs: zo,
  Card: Ro,
  Column: Uo,
  ColumnContainer: jo,
  List: Ho,
  ListItem: Go,
  ModalCard: Yo,
  Panel: qo,
  Table: Ko,
  Tabs: Qo,
  TabsTab: Xo,
  Tile: Zo,
  Modal: er
} = Ms, { AVAIABLE_SKINS: tr, setSkin: ar } = Bs, {
  ColorTypes: lr,
  NoticeTypes: nr,
  Sizes: sr,
  AnimationSpeeds: or,
  AnimationTypes: rr,
  IconSizes: ir,
  ChartLegendPositions: ur,
  ChartTypes: dr,
  DropZoneQuadrants: cr,
  BreadCrumbAlignments: pr,
  BreadCrumbSeperators: hr,
  ColumnContainerModifiers: mr,
  ColumnSizes: br,
  ColumnOffsetSizes: fr,
  BorderTypes: gr,
  TabAlignments: vr,
  TabStyles: yr,
  TileSizes: _r,
  TileTypes: kr,
  FixedNavBarPositions: $r,
  FixedMenuPositions: Sr,
  BadgePositiions: Mr,
  ToolTipPositions: Dr,
  ToolTipTextAlignments: wr
} = Qt, { loadNonEs6Module: Br } = Kt, { Chart: Fr, CodeWriter: Or, Grid: xr } = Es;
export {
  tr as AVAIABLE_SKINS,
  Ws as Animation,
  or as AnimationSpeeds,
  rr as AnimationTypes,
  $o as AutoComplete,
  fo as Badge,
  Mr as BadgePositiions,
  Wo as Banner,
  gr as BorderTypes,
  Vo as Box,
  pr as BreadCrumbAlignments,
  hr as BreadCrumbSeperators,
  zo as Breadcrumbs,
  Co as BreadcrumbsItem,
  Vs as Button,
  Cs as ButtonAdd,
  zs as ButtonCancel,
  Rs as ButtonDelete,
  Us as ButtonDisable,
  js as ButtonDownload,
  Hs as ButtonEdit,
  Gs as ButtonEnable,
  Ys as ButtonOkay,
  qs as ButtonPrint,
  Ks as ButtonRefresh,
  Qs as ButtonSave,
  Xs as ButtonUpload,
  Ro as Card,
  Fr as Chart,
  ur as ChartLegendPositions,
  dr as ChartTypes,
  Zs as CheckMark,
  Mo as Checkbox,
  So as CheckboxGroup,
  Or as CodeWriter,
  lr as ColorTypes,
  Uo as Column,
  jo as ColumnContainer,
  mr as ColumnContainerModifiers,
  fr as ColumnOffsetSizes,
  br as ColumnSizes,
  wo as ComponentForm,
  Do as DateField,
  yo as DraggableItem,
  _o as DropZone,
  cr as DropZoneQuadrants,
  eo as DynamicSlot,
  to as Filter,
  Sr as FixedMenuPositions,
  $r as FixedNavBarPositions,
  Lo as FormComponent,
  Bo as FullEditor,
  xr as Grid,
  Fo as Header,
  Oo as Hidden,
  ao as Icon,
  ir as IconSizes,
  Ho as List,
  Go as ListItem,
  co as Menu,
  mo as MenuEntry,
  po as MenuLabel,
  ho as MenuList,
  lo as Message,
  er as Modal,
  Yo as ModalCard,
  uo as NavBar,
  nr as NoticeTypes,
  no as Notification,
  xo as NumberField,
  so as PageNotification,
  oo as Pagination,
  qo as Panel,
  Jo as Paragraph,
  io as Progress,
  ro as Promised,
  Ao as RadioGroup,
  No as Select,
  sr as Sizes,
  ko as Sortable,
  To as Switch,
  vr as TabAlignments,
  yr as TabStyles,
  Ko as Table,
  Qo as Tabs,
  Xo as TabsTab,
  go as Tag,
  vo as Tags,
  Po as Text,
  Eo as TextArea,
  Zo as Tile,
  _r as TileSizes,
  kr as TileTypes,
  Io as Time,
  bo as ToolTip,
  Dr as ToolTipPositions,
  wr as ToolTipTextAlignments,
  Br as loadNonEs6Module,
  ar as setSkin
};
//# sourceMappingURL=components.esm.js.map
