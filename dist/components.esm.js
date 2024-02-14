import { computed as y, defineComponent as S, openBlock as u, createBlock as E, Transition as Rt, withCtx as L, renderSlot as A, createElementBlock as c, normalizeClass as O, inject as P, ref as F, watch as z, createVNode as N, createCommentVNode as T, toDisplayString as J, mergeProps as Y, unref as D, onMounted as ue, Fragment as W, renderList as R, resolveDynamicComponent as be, normalizeProps as re, guardReactiveProps as de, withDirectives as U, createElementVNode as f, vModelText as _e, createTextVNode as Q, vShow as se, toRefs as Ut, reactive as nt, resolveComponent as st, vModelCheckbox as We, normalizeStyle as Ve, readonly as we, withAsyncContext as jt, onUnmounted as Ht, vModelSelect as Gt, vModelDynamic as Yt, provide as Ae, createSlots as ot, markRaw as qt } from "vue";
import "jquery";
const xe = (e) => new Promise((n) => {
  let t = [], a = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let r = document.createElement("link"), p = new Promise((i) => {
        r.onload = function() {
          i(l);
        };
      });
      t[s] = p, a.appendChild(r), r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("server_path", l), r.setAttribute("href", l);
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
        let s = pe.find((o) => o.path === e);
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
      let o = pe.findIndex((r) => r.path === e);
      if (n === void 0)
        pe[o].result = void 0;
      else {
        let r = {};
        n.forEach((p) => {
          r[p] = window[p];
        }), pe[o].result = r;
      }
      t(pe[o].result);
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  loadNonEs6Module: Ce
}, Symbol.toStringTag, { value: "Module" }));
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), he = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(he || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), rt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(rt || {}), ze = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(ze || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), it = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(dt || {}), ct = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(ct || {}), Je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Je || {}), pt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(mt || {}), bt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(bt || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), ft = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(ft || {}), Re = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(je || {});
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: he,
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
  FixedNavBarPositions: Oe,
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
}, Xt = (e) => {
  const n = e("IconSet", "solid");
  return y(() => n);
}, Zt = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), ea = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), ta = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), aa = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), la = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), gt = /* @__PURE__ */ S({
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
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, s = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, o = y(() => ({
      enter: a(t.speedIn ?? t.speed),
      leave: a(t.speedOut ?? t.speed)
    })), r = y(() => [
      "animate__animated",
      l(t.incoming ?? t.inout),
      s(t.speedIn ?? t.speed)
    ].join(" ")), p = y(() => [
      "animate__animated",
      l(t.outgoing ?? t.inout),
      s(t.speedOut ?? t.speed)
    ].join(" ")), i = y(() => [
      "animate__animated",
      "animate__infinite",
      l(t.repeating),
      s(t.speed ?? "")
    ].join(" "));
    return (h, d) => t.repeating ? (u(), c("div", {
      key: 1,
      class: O(i.value)
    }, [
      A(h.$slots, "default")
    ], 2)) : (u(), E(Rt, {
      key: 0,
      "enter-active-class": r.value,
      "leave-active-class": p.value,
      duration: o.value
    }, {
      default: L(() => [
        A(h.$slots, "default")
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
}, G = /* @__PURE__ */ S({
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
    return (s, o) => (u(), c("i", {
      class: O(l.value)
    }, null, 2));
  }
});
const ia = ["disabled"], ua = {
  key: 0,
  class: "icon is-small"
}, da = { key: 1 }, Z = /* @__PURE__ */ S({
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
    return (s, o) => (u(), c("button", {
      class: O(l.value),
      disabled: t.disabled,
      onClick: o[0] || (o[0] = (r) => a("click"))
    }, [
      t.icon != null ? (u(), c("span", ua, [
        N(G, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      t.title != null ? (u(), c("span", da, J(t.title), 1)) : T("", !0)
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
}, va = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Add", a),
      icon: "plus",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), vt = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Cancel", a),
      icon: "window-close",
      type: q.danger
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), ya = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Delete", a),
      icon: "trash-alt",
      type: q.danger
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), _a = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Disable", a),
      icon: "times-circle",
      type: q.danger
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), ka = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Download", a),
      icon: "download",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), $a = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Edit", a),
      icon: "edit",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), Sa = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Enable", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), yt = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Okay", a),
      icon: "check",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Print", a),
      icon: "print",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), _t = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Refresh", a),
      icon: "sync",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), Ma = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Save", a),
      icon: "save",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), wa = /* @__PURE__ */ S({
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
    const t = n, a = K(P), l = y(() => ({
      title: V("Button.Upload", a),
      icon: "upload",
      type: q.primary
    }));
    return (s, o) => (u(), E(Z, Y(l.value, {
      onClick: o[0] || (o[0] = (r) => t("click"))
    }), null, 16));
  }
}), Ba = /* @__PURE__ */ S({
  __name: "check-mark",
  setup(e) {
    return (n, t) => (u(), E(G, {
      icon: "check",
      size: D(oe).small
    }, null, 8, ["size"]));
  }
}), et = async (e, n, t) => {
  let a = await import(e);
  const l = Object.keys(a);
  return n && l.sort(n), l.filter((s) => t === void 0 || t.value.test(s)).map((s) => a[s]);
}, Fa = /* @__PURE__ */ S({
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
    }), (l, s) => (u(!0), c(W, null, R(n.value, (o) => (u(), E(be(o), re(de(t.props)), null, 16))), 256));
  }
}), Oa = { class: "control has-icons-left" }, xa = ["placeholder"], Ja = { class: "icon is-small is-left" }, Na = /* @__PURE__ */ S({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = K(P), s = y(() => V("Filter.Filter", l)), o = F(null);
    z([o], (p) => {
      p[0] === "" && t.default_value && (o.value = t.default_value, a("filter", o.value == "" ? null : o.value));
    });
    const r = (p) => {
      p.keyCode == 13 && a("filter", o.value == "" ? null : o.value);
    };
    return ue(() => {
      t.default_value && (o.value = t.default_value);
    }), (p, i) => (u(), c("div", Oa, [
      U(f("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": i[0] || (i[0] = (h) => o.value = h),
        onKeypress: r
      }, null, 40, xa), [
        [_e, o.value]
      ]),
      f("span", Ja, [
        N(G, { icon: "filter" })
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
}, Pa = { class: "message-body" }, Ea = /* @__PURE__ */ S({
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
    return (l, s) => (u(), c("article", {
      class: O(["message", t.value, a.value])
    }, [
      n.title ? (u(), c("div", Aa, [
        f("p", null, J(n.title), 1),
        n.hasDelete ? (u(), c("button", Ta)) : T("", !0)
      ])) : T("", !0),
      f("div", Pa, [
        A(l.$slots, "default", {}, () => [
          Q(J(n.message), 1)
        ])
      ])
    ], 2));
  }
}), ce = /* @__PURE__ */ S({
  __name: "notification",
  props: {
    type: { default: te.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("div", {
      class: O(["notification", "is-" + n.type, n.light ? "is-light" : ""])
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
}, Wa = { class: "block" }, Va = /* @__PURE__ */ S({
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
    return (o, r) => (u(), c("div", {
      class: O({ modal: t.blockUser && t.visible, "is-active": t.blockUser && t.visible })
    }, [
      t.blockUser && t.visible ? (u(), c("div", Ia)) : T("", !0),
      N(gt, {
        incoming: D(Be).fadeIn,
        outgoing: D(Be).fadeOut,
        speed: D(he).slower
      }, {
        default: L(() => [
          t.visible ? (u(), c("div", {
            key: 0,
            class: O(s.value)
          }, [
            N(G, {
              icon: l.value,
              size: D(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            t.header !== null && t.header !== void 0 ? (u(), c("h1", La, J(t.header), 1)) : T("", !0),
            f("div", Wa, J(t.message), 1),
            t.hasClose ? (u(), E(G, {
              key: 1,
              icon: "circle-xmark",
              onClick: r[0] || (r[0] = (p) => a("close")),
              size: D(oe).large
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
}, ja = ["aria-label", "onOnclick"], kt = /* @__PURE__ */ S({
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
    const t = e, a = n, l = K(P), s = y(() => V(t.usenext ? "Pagination.Previous" : "Pagination.Older", l)), o = y(() => V(t.usenext ? "Pagination.Next" : "Pagination.Newer", l)), r = y(() => t.buttontype ? `has-background-${t.buttontype}` : ""), p = y(() => V("Pagination.GoToPage", l)), i = y(() => (t.hasprevious ?? !1) || (t.currentpage ?? 0) > 0), h = y(() => (t.hasmore ?? !1) || (t.currentpage ?? 0) < (t.totalpages ?? 0 - 1)), d = y(() => {
      if (t.totalpages === void 0 || t.currentpage === void 0)
        return [];
      if (t.totalpages > 5) {
        let b = Math.max(t.currentpage === void 0 ? Math.floor(t.totalpages / 2) : t.currentpage, 3);
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
      i && (t.currentpage !== null ? a("goToPage", t.currentpage - 1) : a("moveBack"));
    }, _ = function() {
      h && (t.currentpage !== null ? a("goToPage", t.currentpage + 1) : a("moveForward"));
    }, B = function(b) {
      a("goToPage", b);
    };
    return (b, I) => U((u(), c("nav", {
      class: O(["pagination", "is-centered", r.value, `is-${t.size}`, t.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      f("a", {
        class: O(["pagination-previous", r.value]),
        title: s.value,
        onClick: m,
        disabled: i.value ? null : "disabled"
      }, [
        N(G, {
          icon: "backward",
          class: "mr-1",
          size: D(oe).small
        }, null, 8, ["size"]),
        Q(" " + J(s.value), 1)
      ], 10, Ca),
      f("a", {
        class: O(["pagination-next", r.value]),
        title: o.value,
        onClick: _,
        disabled: h.value ? null : "disabled"
      }, [
        Q(J(o.value) + " ", 1),
        N(G, {
          icon: "forward",
          class: "ml-1",
          size: D(oe).small
        }, null, 8, ["size"])
      ], 10, za),
      t.totalpages !== void 0 ? (u(), c("ul", Ra, [
        (u(!0), c(W, null, R(d.value, (k) => (u(), c("li", null, [
          k === -1 ? (u(), c("span", Ua, "…")) : (u(), c("a", {
            key: 1,
            class: O(k === -1 ? ["pagination-ellipsis"] : ["pagination-link", k === t.currentpage + 1 ? "is-current" : ""]),
            "aria-label": k === -1 ? "" : `${p.value} ${k}`,
            onOnclick: (v) => B(k)
          }, J(k === -1 ? "" : k), 43, ja))
        ]))), 256))
      ])) : T("", !0)
    ], 2)), [
      [se, i.value || h.value]
    ]);
  }
});
function fe(e) {
  return typeof e == "function" ? e() : D(e);
}
function Ha(e, n = 200) {
  const t = F(!1), a = F(!1), l = y(() => !t.value && !a.value), s = F(!1), o = F(), r = F(), p = y(() => {
    if (e != null) {
      let h = fe(e);
      return h instanceof Promise ? h : new Promise((d) => d(h));
    }
    return null;
  });
  let i;
  return z(
    () => fe(p),
    (h) => {
      if (t.value = !1, a.value = !1, o.value = null, !h) {
        r.value = null, i && clearTimeout(i), i = null;
        return;
      }
      const d = Number(fe(n)) || 0;
      d > 0 ? (s.value = !1, i && clearTimeout(i), i = setTimeout(() => {
        s.value = !0;
      }, d)) : s.value = !0, h.then((m) => {
        h === fe(p) && (r.value = fe(m), a.value = !0);
      }).catch((m) => {
        h === fe(p) && (o.value = m, t.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: t, isResolved: a, isDelayElapsed: s, error: o, data: r };
}
const me = /* @__PURE__ */ S({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, t = K(P), a = y(() => V("Form.Error", t)), l = Ut(n), s = nt(Ha(l.promise, l.pendingDelay));
    return (o, r) => (u(), c(W, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? A(o.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        N(D(ie), {
          size: D(X).small
        }, null, 8, ["size"])
      ]) : T("", !0),
      s.isRejected ? A(o.$slots, "rejected", re(Y({ key: 1 }, s.error)), () => [
        N(D(ce), {
          message: `${a.value}:${s.error.message ?? s.error.toString()}`,
          type: D(te).danger
        }, null, 8, ["message", "type"])
      ]) : T("", !0),
      s.isResolved ? A(o.$slots, "default", {
        key: 2,
        response: s.data
      }) : T("", !0)
    ], 64));
  }
}), Ga = ["value", "max"], ie = /* @__PURE__ */ S({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, t = y(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (a, l) => (u(), c("progress", {
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
}, tt = /* @__PURE__ */ S({
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
      const r = st("navbar-item", !0);
      return u(), c("a", {
        class: O(["navbar-item", t.active ? "is-active" : "", t.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: t.href,
        onClick: a
      }, [
        t.icon !== void 0 && t.icon !== null ? (u(), c("span", qa, [
          f("span", Ka, [
            N(G, {
              icon: t.icon
            }, null, 8, ["icon"])
          ]),
          f("span", null, J(t.title), 1)
        ])) : (u(), c("span", Qa, J(t.title), 1)),
        t.childItems !== void 0 ? (u(), c("div", Xa, [
          (u(!0), c(W, null, R(t.childItems, (p) => (u(), E(r, Y(p, {
            onItemClicked: o[0] || (o[0] = (i) => l("itemClicked"))
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
}, ul = { style: { width: "100px" } }, dl = /* @__PURE__ */ S({
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
    }), (a, l) => (u(), c("nav", {
      class: O(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      f("div", el, [
        A(a.$slots, "brand"),
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
        n.startItems !== void 0 ? (u(), c("div", ol, [
          N(me, {
            promise: n.startItems
          }, {
            default: L(({ response: s }) => [
              (u(!0), c(W, null, R(s, (o) => (u(), E(tt, Y(o, {
                onItemClicked: l[1] || (l[1] = (r) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", rl, [
                N(ie, {
                  size: D(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0),
        n.endItems !== void 0 ? (u(), c("div", il, [
          N(me, {
            promise: n.endItems
          }, {
            default: L(({ response: s }) => [
              (u(!0), c(W, null, R(s, (o) => (u(), E(tt, Y(o, {
                onItemClicked: l[2] || (l[2] = (r) => t.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              f("div", ul, [
                N(ie, {
                  size: D(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : T("", !0)
      ], 2)
    ], 10, Za));
  }
}), cl = /* @__PURE__ */ S({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("aside", {
      class: O(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      A(t.$slots, "default")
    ], 2));
  }
}), pl = { class: "menu-label" }, hl = /* @__PURE__ */ S({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("p", pl, [
      Q(J(n.message) + " ", 1),
      A(t.$slots, "default")
    ]));
  }
}), ml = ["href"], bl = {
  key: 0,
  class: "icon-text"
}, fl = { class: "icon" }, gl = { key: 1 }, $t = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("li", null, [
      f("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => t()),
        class: O(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (u(), c("span", bl, [
          f("span", fl, [
            N(G, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          f("span", null, J(n.title), 1)
        ])) : (u(), c("span", gl, J(n.title), 1)),
        A(a.$slots, "default")
      ], 10, ml),
      A(a.$slots, "children")
    ]));
  }
}), vl = { class: "menu-list" }, yl = /* @__PURE__ */ S({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => {
      const l = st("menu-list", !0);
      return u(), c("ul", vl, [
        n.items !== null ? (u(), E(me, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (u(!0), c(W, null, R(s, (o) => (u(), c("li", null, [
              N($t, re(de(o)), null, 16),
              o.childItems !== void 0 ? (u(), E(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : T("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            f("li", null, [
              N(ie, {
                size: D(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : T("", !0),
        A(t.$slots, "default")
      ]);
    };
  }
}), _l = /* @__PURE__ */ S({
  __name: "badge",
  props: {
    position: { default: Re.topRight },
    text: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("span", {
      class: O(["badge", `is-${n.position}`])
    }, [
      Q(J(n.text) + " ", 1),
      A(t.$slots, "default")
    ], 2));
  }
}), kl = /* @__PURE__ */ S({
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
    return (t, a) => (u(), E(be(t.is), {
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
        A(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), $l = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("span", {
      class: O(t.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), Sl = /* @__PURE__ */ S({
  __name: "tags",
  props: {
    size: {},
    addons: { type: Boolean }
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("span", {
      class: O(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      A(t.$slots, "default")
    ], 2));
  }
}), Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: gt,
  Badge: _l,
  Button: Z,
  ButtonAdd: va,
  ButtonCancel: vt,
  ButtonDelete: ya,
  ButtonDisable: _a,
  ButtonDownload: ka,
  ButtonEdit: $a,
  ButtonEnable: Sa,
  ButtonOkay: yt,
  ButtonPrint: Da,
  ButtonRefresh: _t,
  ButtonSave: Ma,
  ButtonUpload: wa,
  CheckMark: Ba,
  DynamicSlot: Fa,
  Filter: Na,
  Icon: G,
  Menu: cl,
  MenuEntry: $t,
  MenuLabel: hl,
  MenuList: yl,
  Message: Ea,
  NavBar: dl,
  Notification: ce,
  PageNotification: Va,
  Pagination: kt,
  Progress: ie,
  Promised: me,
  Tag: $l,
  Tags: Sl,
  ToolTip: kl
}, Symbol.toStringTag, { value: "Module" })), Ml = /* @__PURE__ */ S({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const t = n, a = e, l = F(!1), s = F(!1), o = F(null), r = y(() => (a.disabled ?? !1) || s.value && a.handlesearch !== null), p = y(() => {
      let d = [];
      return r || d.push("has-cursor"), l.value ? d.push("is-move") : d.push("is-grab"), d;
    }), i = (d) => r.value ? (d.preventDefault(), !1) : (d.stopPropagation(), d.dataTransfer.setData("value", JSON.stringify(a.CopyData)), l.value = !0, t("started"), !0), h = () => {
      l.value = !1, s.value = !0, t("stopped");
    };
    return ue(() => {
      if (a.handlesearch) {
        let d = $(o.value).find(a.handlesearch);
        d.length > 0 && (s.value = !0, d.on("mousedown", () => s.value = !1), d.on("mouseup", () => s.value = !0));
      }
    }), (d, m) => (u(), E(be(a.tag), {
      ref_key: "handle",
      ref: o,
      draggable: !0,
      onDragstart: i,
      onDragend: h,
      class: O(p.value)
    }, {
      default: L(() => [
        A(d.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), wl = /* @__PURE__ */ S({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const t = e, a = n, l = F(!1), s = F(null), o = F(null);
    y(() => t.tag ?? "div");
    const r = (m) => {
      const _ = o.value.getBoundingClientRect(), B = {
        x: _.x + _.width / 2,
        y: _.y + _.height / 2
      };
      let b = ee.center;
      return m.x < B.x ? m.y < B.y ? b = ee.topLeft : b = ee.bottomLeft : m.y < B.y ? b = ee.topRight : b = ee.bottomRight, s.value = b, s.value;
    }, p = (m) => {
      m.preventDefault(), l.value = !0, a("itemEntered", r(m));
    }, i = (m) => {
      l.value = !0, a("itemExited", r(m));
    }, h = (m) => {
      m.preventDefault(), a("itemMoved", r(m));
    }, d = (m) => {
      if (t.isValidChild && !t.isValidChild(JSON.parse(m.dataTransfer.getData("value"))))
        return !1;
      m.stopPropagation(), m.preventDefault(), a("itemAdded", JSON.parse(m.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (m, _) => (u(), E(be(t.tag), {
      ref_key: "handle",
      ref: o,
      class: O({ "is-bordered": l.value }),
      onDragenter: p,
      onDragleave: i,
      onDrop: d,
      onDragover: h
    }, {
      default: L(() => [
        A(m.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), St = /* @__PURE__ */ S({
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
    return (a, l) => (u(), E(be(a.numbered == null || a.numbered == null || !a.numbered ? "ul" : "ol"), {
      class: O(t.value)
    }, {
      default: L(() => [
        A(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Me = /* @__PURE__ */ S({
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
    return (s, o) => (u(), c("li", {
      class: O(l.value)
    }, [
      t.icon ? (u(), c("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: o[0] || (o[0] = (r) => a("click"))
      }, [
        N(G, {
          icon: t.icon
        }, null, 8, ["icon"])
      ])) : T("", !0),
      A(s.$slots, "default")
    ], 2));
  }
}), Bl = /* @__PURE__ */ S({
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
    const t = e, a = n, l = F([]), s = F(-1), o = F(-1), r = F(null);
    z(t.Items, (m, _) => {
      l.value = [..._];
    }), ue(() => {
      t.Items !== null && (l.value = [...t.Items]);
    });
    const p = (m) => {
      var _ = m.target.getBoundingClientRect(), B = {
        x: _.x + _.width / 2,
        y: _.y + _.height / 2
      };
      let b = ee.center;
      return m.y < B.y ? b = ee.top : b = ee.bottom, b;
    }, i = (m, _) => {
      _.stopPropagation(), s.value = m, _.dataTransfer.setData("value", null);
    }, h = (m, _) => {
      s.value && (_.stopPropagation(), m != s.value ? (o.value = m, r.value = p(_)) : (o.value = -1, r.value = null));
    }, d = (m) => {
      if (s.value) {
        m.stopPropagation();
        var _ = o.value + (r.value == ee.top ? 0 : 1), B = l.value.splice(_, 1)[0];
        _ >= s.value && _--, l.value.splice(_, 0, B), o.value = -1, r.value = null, s.value = -1, a("sorted", l.value);
      }
    };
    return (m, _) => (u(), E(St, {
      type: m.type,
      compact: m.compact,
      outlined: m.outlined,
      highlighted: m.highlighted,
      onDrop: d
    }, {
      default: L(() => [
        (u(!0), c(W, null, R(l.value, (B, b) => (u(), c(W, null, [
          U(N(Me, null, {
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
            [se, o.value === b && s.value !== b && r.value === D(ee).top]
          ]),
          N(Me, {
            draggable: "true",
            onDragstart: (I) => i(b, I),
            onDragend: _[0] || (_[0] = (I) => s.value = null),
            onDragover: (I) => h(b, I),
            class: O({ "has-cursor": !0, "is-move": o.value == b, "is-grab": o.value != b })
          }, {
            default: L(() => [
              A(m.$slots, "item", {
                item: B,
                index: b
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          U(N(Me, null, {
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
            [se, o.value === b && s.value !== b && r.value === D(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Ml,
  DropZone: wl,
  Sortable: Bl
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ge = "DisabledFields", Ol = (e) => e, ne = (e, n) => {
  const t = n("Translate", Ol);
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
const xl = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Jl = { class: "control" }, Nl = { class: "tags has-addons" }, Al = { class: "tag is-link" }, Tl = ["onClick"], Pl = { key: 0 }, El = ["placeholder"], Il = { class: "dropdown-menu" }, Ll = { class: "dropdown-content" }, Wl = ["onClick"], Vl = {
  key: 1,
  class: "dropdown-item"
}, Mt = /* @__PURE__ */ S({
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
    const a = t, l = e, s = ne(l, P), o = F([]), r = F(null), p = F(null), i = F(null), h = F(null);
    z(r, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (l.values != null && l.values != null) {
            let C = [];
            for (let g = 0; g < l.values.length && ((l.values[g].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || l.values[g].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && C.push(l.values[g]), C.length != 10); g++)
              ;
            p.value = C;
          } else {
            let g = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            g.length > 10 && g.splice(10, g.length - 10), p.value = g;
          }
      } else
        p.value = null, $(h.value).empty();
    });
    const d = () => {
      if (o.value.length == 0)
        return null;
      const w = o.value.slice();
      return l.limit != null && l.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, m = async (w) => {
      if (w == null)
        o.value.length > 0 && o.value.splice(0, o.value.length), r.value = null;
      else {
        const C = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (g) => {
            if (g.id !== void 0 && g.name !== void 0)
              return g;
            {
              let M = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${g.id === void 0 ? "q=" + encodeURIComponent(g) : "id=" + encodeURIComponent(g.id)}`)).json();
              return M.length > 0 ? (l.disabled && (M[0].readonly = !0), M[0]) : null;
            }
          })
        );
        o.value = C.filter((g) => g !== null), a("value_changed", { name: l.name, value: d() });
      }
    }, _ = (w) => {
      w.preventDefault(), r.value = w.clipboardData.getData("text/plain");
    }, B = (w) => {
      switch (w.key) {
        case "Backspace":
          r.value != null && r.value.length > 0 && (r.value = r.value.substring(0, r.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          w.key.length == 1 && (r.value = (r.value == null ? "" : r.value) + w.key);
          break;
      }
    }, b = () => {
      r.value = null;
    }, I = () => {
      h.value.focus();
    }, k = (w) => {
      o.value.push(w), b(), a("value_changed", { name: l.name, value: d() });
    }, v = (w) => {
      o.value.splice(w, 1), I(), a("value_changed", { name: l.name, value: d() });
    };
    return n({ getValue: d, setValue: m }), (w, C) => (u(), c("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: I
    }, [
      f("div", xl, [
        (u(!0), c(W, null, R(o.value, (g, ae) => (u(), c("div", Jl, [
          f("div", Nl, [
            f("a", Al, J(D(s)(g.name)), 1),
            g.readonly ? T("", !0) : (u(), c("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (M) => v(ae)
            }, null, 8, Tl))
          ])
        ]))), 256)),
        l.disabled ? T("", !0) : (u(), c("div", Pl, [
          U(f("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: D(s)(l.title ?? ""),
            contenteditable: "",
            class: O(i.value),
            onFocus: C[0] || (C[0] = (g) => {
              i.value = "is-focused";
            }),
            onBlur: C[1] || (C[1] = (g) => {
              i.value = null;
            }),
            onKeydown: B,
            onPaste: _
          }, null, 42, El), [
            [se, o.value.length < l.limit || l.limit == null]
          ])
        ]))
      ]),
      f("div", {
        class: O(["dropdown", { "is-active": p.value != null && r.value != null && r.value != "" }])
      }, [
        f("div", Il, [
          f("div", Ll, [
            p.value != null && p.value.length > 0 ? (u(!0), c(W, { key: 0 }, R(p.value, (g) => (u(), c("a", {
              class: "dropdown-item",
              onClick: (ae) => k(g)
            }, J(D(s)(g.name)), 9, Wl))), 256)) : (u(), c("a", Vl, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Ee = /* @__PURE__ */ S({
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
    return (s, o) => (u(), E(Z, {
      type: s.sstyle,
      icon: t.icon ? t.icon : null,
      title: D(l)(t.label),
      onClick: o[0] || (o[0] = (r) => a("button_clicked", t.name)),
      disabled: t.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Cl = { class: "checkbox is-block" }, zl = ["value", "disabled"], wt = /* @__PURE__ */ S({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), o = t, r = ne(a, P), p = F([]), i = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let b = await qe(a.values), I = b.filter((k) => k.selected).map((k) => k.value);
        return p.value === null || p.value.length == 0 ? p.value = I.length > 0 ? [...I] : [] : (I = p.value, b = b.map((k) => ({
          label: k.label,
          value: k.value,
          selected: I.some((v) => v === k.value)
        }))), b;
      }
    });
    z(p, (b) => {
      o("value_changed", { name: a.name, value: d() });
    });
    const d = () => p.value.length == 0 ? null : p.value, m = (b) => {
      i.value = !0, p.value.splice(0), b !== null && (p.value = [...b]), i.value = !1, o("value_changed", { name: a.name, value: d() });
    }, { hiddenValues: _, disabledValues: B } = Ye(a.name, P);
    return n({ getValue: d, setValue: m }), (b, I) => (u(), c("div", null, [
      N(me, { promise: h.value }, {
        default: L(({ response: k }) => [
          k !== null ? (u(!0), c(W, { key: 0 }, R(k, (v) => U((u(), c("label", Cl, [
            U(f("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": I[0] || (I[0] = (w) => p.value = w),
              disabled: a.disabled || D(B).some((w) => w === v.value.toString())
            }, null, 8, zl), [
              [We, p.value]
            ]),
            Q(" " + J(D(r)(v.label)), 1)
          ], 512)), [
            [se, !D(_).some((w) => w === v.value.toString())]
          ])), 256)) : T("", !0)
        ]),
        pending: L(() => [
          N(D(ie))
        ]),
        rejected: L(() => [
          N(D(ce), {
            type: D(te).danger,
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
}, Bt = /* @__PURE__ */ S({
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
    const a = e, l = t, s = ne(a, P), o = y(() => s.value(a.label)), r = F(!1);
    return z(r, (h) => l("value_changed", { name: a.name, value: h })), n({ getValue: () => r.value, setValue: (h) => {
      r.value = h;
    } }), (h, d) => (u(), c("label", Rl, [
      U(f("input", {
        type: "checkbox",
        class: "checkbox",
        name: a.name,
        disabled: a.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => r.value = m)
      }, null, 8, Ul), [
        [We, r.value]
      ]),
      Q(" " + J(o.value) + " ", 1),
      a.required ? (u(), c("span", jl, "*")) : T("", !0)
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
      let o = t.getTimezoneOffset() * -1, r = parseInt((o / 60).toFixed(0)), p = o - Math.abs(r) * 60;
      switch (e) {
        case "K":
        case "zzz":
          a += `${r < 0 ? "-" : "+"}${H(Math.abs(r).toString(), "0", 2) + ":" + H(Math.abs(p).toString(), "0", 2)}`;
          break;
        case "z":
        case "zz":
          a += `${r < 0 ? "-" : "+"}${H(Math.abs(r).toString(), "0", e.length)}`;
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
}, Hl = { class: "control" }, Gl = ["name", "id", "disabled"], at = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ke = /* @__PURE__ */ S({
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
      var i = Number(s.value.substring(3, 5)), h = Number(s.value.substring(0, 2)) % 12 + i / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * i / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return z(s, (i) => {
      l("value_changed", { name: a.name, value: i });
    }), n({ getValue: () => s.value, setValue: (i) => {
      if (i != null && at.test(i)) {
        var h = at.exec(i);
        i = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = i;
    } }), (i, h) => (u(), c("div", Hl, [
      U(f("input", {
        class: "input is-time",
        name: a.name,
        id: a.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d),
        disabled: a.disabled,
        style: Ve(o.value)
      }, null, 12, Gl), [
        [_e, s.value]
      ])
    ]));
  }
});
const Yl = { class: "control has-icons-left has-icons-right" }, ql = ["name", "id", "placeholder", "disabled"], Kl = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), Ql = { class: "modal-content" }, Xl = { class: "panel is-primary is-dateselect" }, Zl = { class: "panel-heading" }, en = { class: "columns card-header-title" }, tn = { class: "column" }, an = { class: "column has-text-centered" }, ln = { class: "column has-text-right" }, nn = { class: "panel-block" }, sn = { class: "table is-striped has-text-centered" }, on = ["onClick"], rn = { key: 0 }, un = {
  colspan: "100%",
  class: "has-text-centered"
}, dn = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Ft = /* @__PURE__ */ S({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = e, s = t, o = F(!1), r = F(null), p = F(null), i = nt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = K(P), d = we({
      Sun: y(() => V("Date.Weekdays.Sun", h)),
      Mon: y(() => V("Date.Weekdays.Mon", h)),
      Tue: y(() => V("Date.Weekdays.Tue", h)),
      Wed: y(() => V("Date.Weekdays.Wed", h)),
      Thu: y(() => V("Date.Weekdays.Thu", h)),
      Fri: y(() => V("Date.Weekdays.Fri", h)),
      Sat: y(() => V("Date.Weekdays.Sat", h))
    }), m = y(() => r.value !== null && (l.includeTime ? Se : ke).test(r.value)), _ = () => {
      if (r.value == null || r.value == "")
        return null;
      {
        if (!Se.test(r.value) && l.includeTime)
          return null;
        if (!l.includeTime && !ke.test(r.value))
          return null;
        if (ke.test(r.value) && l.includeTime)
          return null;
        let M = l.includeTime ? Se.exec(r.value) : ke.exec(r.value);
        return new Date(
          parseInt(M[3]),
          parseInt(M[2]) - 1,
          parseInt(M[1]),
          l.includeTime ? parseInt(M[4]) : 0,
          l.includeTime ? parseInt(M[5]) : 0,
          0,
          0
        );
      }
    };
    z(r, (M) => {
      if (M == null)
        s("value_changed", { name: l.name, value: null }), i.Month = (/* @__PURE__ */ new Date()).getMonth(), i.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(M) && !Se.test(M)) {
        M = M.replaceAll(/[^0-9]/g, "");
        for (var x = [], j = 0; j < M.length; j += 2)
          j == 4 ? (x.push(M.substring(j, Math.min(M.length - j, 4) + j)), j += 2) : x.push(M.substring(j, Math.min(M.length - j, 2) + j));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), M = x.join(""), !l.includeTime && M.length > 8 && (M = M.substring(0, 8)), M.length >= 2 && (M = M.substring(0, 2) + "-" + (M.length > 2 ? M.substring(2) : "")), M.length >= 5 && (M = M.substring(0, 5) + "-" + (M.length > 5 ? M.substring(5) : "")), M.length >= 9 && l.includeTime && (M = M.substring(0, 9) + " " + (M.length > 9 ? M.substring(9) : "")), M.length >= 11 && (M = M.substring(0, 11) + ":" + (M.length > 11 ? M.substring(11) : "")), r.value = M;
      } else {
        var le = _();
        m && s("value_changed", { name: l.name, value: le }), i.Month = le.getMonth(), i.Year = le.getFullYear();
      }
    });
    const B = y(() => ge(new Date(i.Year, i.Month, 1), h, "MMMM")), b = y(() => {
      var M = [], x = new Date(i.Year, i.Month, 1);
      x = Pe(x, x.getDay() * -1);
      for (var j = _(), le = Pe(new Date(i.Year, i.Month, 1), 32).getMonth(); x.getMonth() != le; ) {
        for (var Ne = [], Qe = 0; Qe < 7; Qe++)
          Ne.push({
            Number: x.getDate(),
            Disabled: x.getMonth() != i.Month,
            isToday: ge(x, h, "yyyy-MM-dd") == ge(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: j != null && ge(x, h, "yyyy-MM-dd") == ge(j, h, "yyyy-MM-dd")
          }), x = Pe(x, 1);
        M.push(Ne);
      }
      return M;
    });
    n({ getValue: _, setValue: function(M) {
      M == null ? r.value = null : r.value = ge(M, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const k = (M) => {
      M.value == null ? r.value != null && (r.value = r.value.split(" ")[0]) : r.value != null ? r.value = r.value.split(" ")[0] + " " + M.value : r.value = `${H((i.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year} ${M.value}`;
    }, v = (M) => {
      if (!M.Disabled && !M.isSelected)
        if (r.value === null)
          r.value = `${H(M.Number.toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year}` + (l.includeTime ? a.value.getValue() == null ? "" : " " + a.value.getValue() : "");
        else {
          var x = r.value.split(" ");
          x[0] = `${H(M.Number.toString(), "0", 2)}-${H((i.Month + 1).toString(), "0", 2)}-${i.Year}`, r.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      r.value = p.value, o.value = !1;
    }, C = () => {
      l.disabled || (p.value = r.value, o.value = !0);
    }, g = () => {
      l.disabled || (r.value = null);
    }, ae = (M) => {
      i.Month + M == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + M == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += M;
    };
    return (M, x) => (u(), c("div", null, [
      f("div", Yl, [
        U(f("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (j) => r.value = j),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, ql), [
          [_e, r.value]
        ]),
        f("span", {
          class: "icon is-small is-left is-clickable",
          onClick: C
        }, [
          N(D(G), { icon: "calendar-alt" })
        ]),
        f("span", {
          class: "icon is-small is-right is-clickable",
          onClick: g
        }, [
          N(D(G), { icon: "window-close" })
        ])
      ]),
      f("div", {
        class: O(["modal", { "is-active": o.value }])
      }, [
        Kl,
        f("div", Ql, [
          f("div", Xl, [
            f("div", Zl, [
              f("div", en, [
                f("div", tn, [
                  N(D(G), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (j) => ae(-1))
                  })
                ]),
                f("div", an, J(B.value) + " " + J(i.Year), 1),
                f("div", ln, [
                  N(D(G), {
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
                    f("th", null, J(D(d).Sun), 1),
                    f("th", null, J(D(d).Mon), 1),
                    f("th", null, J(D(d).Tue), 1),
                    f("th", null, J(D(d).Wed), 1),
                    f("th", null, J(D(d).Thu), 1),
                    f("th", null, J(D(d).Fri), 1),
                    f("th", null, J(D(d).Sat), 1)
                  ])
                ]),
                f("tbody", null, [
                  (u(!0), c(W, null, R(b.value, (j) => (u(), c("tr", null, [
                    (u(!0), c(W, null, R(j, (le) => (u(), c("td", {
                      class: O(["is-unselectable", le.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", le.isToday ? "has-background-primary-dark" : "", le.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ne) => v(le)
                    }, J(le.Number), 11, on))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (u(), c("tfoot", rn, [
                  f("tr", null, [
                    f("td", un, [
                      N(Ke, {
                        ref: a.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValue_changed: k
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : T("", !0)
              ])
            ]),
            f("div", dn, [
              N(D(yt), {
                addonclass: "card-footer-item",
                disabled: !m.value,
                onClick: x[3] || (x[3] = (j) => o.value = !1)
              }, null, 8, ["disabled"]),
              N(D(vt), {
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
const Ot = /* @__PURE__ */ S({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: t }) {
    let a, l;
    const s = Zt(P);
    xe([`${s}summernote-lite.min.css`]), [a, l] = jt(() => import(`${s}summernote`)), await a, l();
    const o = F(null), r = e, p = t;
    return z(() => r.disabled, (d) => {
      o.value != null && $(o.value).summernote(d ? "disable" : "enable");
    }), n({ getValue: () => $(o.value).summernote("code"), setValue: (d) => {
      $(o.value).summernote("code", d);
    } }), ue(() => {
      $(o.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(d) {
            p("value_changed", { name: r.name, value: d });
          }
        }
      }), (r.disabled ?? !1) && $(o.value).summernote("disable");
    }), Ht(() => {
      $(o.value).summernote("destroy");
    }), (d, m) => (u(), c("div", {
      class: "summernote",
      ref_key: "snote",
      ref: o
    }, null, 512));
  }
}), Ie = /* @__PURE__ */ S({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, P);
    return (a, l) => (u(), E(be(n.subtype), null, {
      default: L(() => [
        Q(J(D(t)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), cn = ["name"], xt = /* @__PURE__ */ S({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = F(null);
    return z(s, (p) => l("value_changed", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, i) => U((u(), c("input", {
      type: "hidden",
      class: "input",
      name: a.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h)
    }, null, 8, cn)), [
      [_e, s.value]
    ]);
  }
}), pn = ["name", "disabled", "min", "max", "step"], Jt = /* @__PURE__ */ S({
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
      let p = parseInt(s.value);
      return a.min !== void 0 && p < a.min * 1 || a.max !== void 0 && p > a.max * 1 ? null : p;
    }, r = (p) => {
      s.value = p === null ? "" : p.toString();
    };
    return z([s], (p) => l("value_changed", { name: a.name, value: o() })), n({ getValue: o, setValue: r }), (p, i) => U((u(), c("input", {
      type: "number",
      class: "input",
      name: p.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h),
      disabled: p.disabled,
      min: a.min,
      max: a.max,
      step: a.step
    }, null, 8, pn)), [
      [_e, s.value]
    ]);
  }
}), hn = ["id"], Le = /* @__PURE__ */ S({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, t = ne(n, P);
    return (a, l) => (u(), c("p", {
      id: n.name
    }, J(D(t)(n.label)), 9, hn));
  }
}), mn = { class: "radio" }, bn = ["name", "value", "disabled"], fn = /* @__PURE__ */ f("br", null, null, -1), Nt = /* @__PURE__ */ S({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), o = t, r = ne(a, P), p = F(null), i = function() {
      return p.value;
    };
    z(p, (B) => {
      o("value_changed", { name: a.name, value: i() });
    });
    const h = y(async () => {
      if (a.values == null)
        return [];
      {
        let B = await qe(a.values);
        return p.value === null && B.some((b) => b.selected) && (p.value = B.find((b) => b.selected).value), B.map((b) => ({
          label: b.label,
          value: b.value,
          selected: p.value === b.value
        }));
      }
    }), d = (B) => {
      p.value = B;
    }, { hiddenValues: m, disabledValues: _ } = Ye(a.name, P);
    return n({ getValue: i, setValue: d }), (B, b) => (u(), c("div", null, [
      N(me, { promise: h.value }, {
        default: L(({ response: I }) => [
          B.values != null ? (u(!0), c(W, { key: 0 }, R(I, (k) => (u(), c(W, null, [
            U(f("label", mn, [
              f("input", {
                type: "radio",
                name: a.name,
                value: k.value,
                class: "radio",
                disabled: a.disabled || D(_).some((v) => v === k.value.toString())
              }, null, 8, bn),
              Q(" " + J(D(r)(k.label)), 1)
            ], 512), [
              [se, !D(m).some((v) => v === k.value.toString())]
            ]),
            fn
          ], 64))), 256)) : T("", !0)
        ]),
        pending: L(() => [
          N(D(ie))
        ]),
        rejected: L(() => [
          N(D(ce), {
            type: D(te).danger,
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
}, Tt = /* @__PURE__ */ S({
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
    const a = e, l = K(P), s = y(() => V("Form.Error", l)), o = t, r = ne(a, P), p = F(null), i = F(!1), h = y(async () => {
      if (a.values == null)
        return [];
      {
        let b = await qe(a.values), I = b.filter((v) => v.selected).map((v) => v.value);
        b.some((v) => v.values !== void 0) && b.filter((v) => v.values !== void 0).forEach((v) => {
          I = I.concat(
            v.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), p.value === null || p.value.length === 0 ? p.value = null : (b = b.map((v) => {
          let w = v;
          return w.values !== void 0 && (w.values = w.values.map((C) => (C.selected = p.value.some((g) => g === C.value), C))), w;
        }), p.value.forEach((v) => {
          b.some((w) => w.value !== void 0 && w.value === v || w.values !== void 0 && w.values.some((C) => C.value === v)) || b.push({
            label: v,
            value: v
          });
        }));
        let k = [];
        return b.forEach((v) => {
          v.values === void 0 ? k.push(v) : k = At(v.label, v, k);
        }), k;
      }
    }), d = () => p.value == null || p.value.length == 0 ? null : a.multiple ? p.value.slice() : Array.isArray(p.value) ? p.value[0] : p.value;
    z(p, () => {
      i.value || o("value_changed", { name: a.name, value: d() });
    }), z(i, (b) => {
      b || o("value_changed", { name: a.name, value: d() });
    });
    const m = (b) => {
      i.value = !0, b != null ? a.multiple ? p.value = Array.isArray(b) ? b : [b] : p.value = b : a.multiple ? p.value = [] : p.value = null, i.value = !1;
    }, { hiddenValues: _, disabledValues: B } = Ye(a.name, P);
    return n({ getValue: d, setValue: m }), (b, I) => (u(), c("div", gn, [
      h.value != null ? (u(), E(me, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: k }) => [
          U(f("select", {
            id: a.name,
            name: a.name,
            multiple: a.multiple,
            class: O([a.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": I[0] || (I[0] = (v) => p.value = v),
            disabled: a.disabled
          }, [
            k != null ? (u(!0), c(W, { key: 0 }, R(k, (v) => (u(), c(W, null, [
              v.values == null ? U((u(), c("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: D(B).some((w) => w === v.value.toString())
              }, J(D(r)(v.label)), 9, yn)), [
                [se, !D(_).some((w) => w === v.value.toString())]
              ]) : T("", !0),
              v.values != null ? (u(), c("optgroup", {
                key: 1,
                label: D(r)(v.label)
              }, [
                (u(!0), c(W, null, R(v.values, (w) => U((u(), c("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: D(B).some((C) => C === w.value.toString())
                }, J(D(r)(w.label)), 9, kn)), [
                  [se, !D(_).some((C) => C === w.value.toString())]
                ])), 256))
              ], 8, _n)) : T("", !0)
            ], 64))), 256)) : T("", !0)
          ], 10, vn), [
            [Gt, p.value]
          ])
        ]),
        pending: L(() => [
          N(D(ie))
        ]),
        rejected: L(() => [
          N(D(ce), {
            type: D(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : T("", !0)
    ]));
  }
}), $n = { class: "field" }, Sn = ["id", "name", "disabled"], Dn = ["for"], Mn = {
  key: 0,
  class: "help is-danger"
}, Pt = /* @__PURE__ */ S({
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
    const a = e, l = t, s = ne(a, P), o = F(!1);
    return z(o, (i) => l("value_changed", { name: a.name, value: i })), n({ getValue: () => o.value, setValue: (i) => {
      o.value = i;
    } }), (i, h) => (u(), c("div", $n, [
      U(f("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: a.name,
        name: a.name,
        "onUpdate:modelValue": h[0] || (h[0] = (d) => o.value = d),
        disabled: a.disabled
      }, null, 8, Sn), [
        [We, o.value]
      ]),
      f("label", { for: i.name }, [
        Q(J(D(s)(a.label)) + " ", 1),
        a.required ? (u(), c("span", Mn, "*")) : T("", !0)
      ], 8, Dn)
    ]));
  }
}), wn = ["type", "name", "disabled", "maxlength"], Et = /* @__PURE__ */ S({
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
    return z(s, (p) => l("value_changed", { name: a.name, value: p })), n({ getValue: () => s.value, setValue: (p) => {
      s.value = p;
    } }), (p, i) => U((u(), c("input", {
      type: p.subtype,
      class: "input",
      name: p.name,
      disabled: p.disabled,
      maxlength: a.maxlength,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => s.value = h)
    }, null, 8, wn)), [
      [Yt, s.value]
    ]);
  }
}), Bn = ["name", "rows", "cols", "maxlength", "disabled"], It = 9, ve = String.fromCharCode(It), De = String.fromCharCode(10), Lt = /* @__PURE__ */ S({
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
    z(s, (i) => {
      l("value_changed", { name: a.name, value: i });
    });
    const o = () => s.value, r = (i) => {
      s.value = i;
    };
    n({ getValue: o, setValue: r });
    const p = (i) => {
      if (a.supportsTab) {
        let h = o();
        switch (i.keyCode) {
          case It:
            let d = i.target.selectionStart, m = i.target.selectionEnd, _ = h.substring(0, d), B = h.length > m ? h.substring(m) : "", b = d == m ? "" : h.substring(d, m);
            if (b.indexOf(String.fromCharCode(10)) < 0)
              i.shiftKey ? b.startsWith(ve) ? (b = b.substring(1), d--) : _.endsWith(ve) && (_ = _.substring(0, _.length - 1), d--) : b = ve + b;
            else {
              let I = !1;
              b.endsWith(De) && (I = !0, b = b.substring(0, b.length - 1));
              let k = b.split(De);
              b = "", i.shiftKey && _.endsWith(ve) && (_ = _.substring(0, _.length - 1), d--), k.forEach((v, w) => {
                i.shiftKey && v.startsWith(ve) ? v = v.substring(1) : i.shiftKey || (v = ve + v), b += v + (w === k.length - 1 ? "" : De);
              }), I && (b += De);
            }
            return h = _ + b + B, d += b.length == 1 ? 1 : 0, m = d + (b.length == 1 ? 0 : b.length), r(h), i.target.selectionStart = d, i.target.selectionEnd = m, i.target.focus(), i.preventDefault != null && i.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (i, h) => U((u(), c("textarea", {
      class: "textarea",
      name: a.name,
      rows: a.rows,
      cols: a.cols,
      maxlength: a.maxlength,
      disabled: a.disabled,
      onKeydown: p,
      "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d)
    }, null, 40, Bn)), [
      [_e, s.value]
    ]);
  }
}), Fn = { class: "columns" }, Wt = /* @__PURE__ */ S({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = P(He), o = P(Ge);
    n({ setValue: (d) => {
      h.forEach((m) => {
        switch (m.type) {
          case "subform":
            m.setValue(d);
            break;
          default:
            m.setValue !== void 0 && (d === null ? m.setValue(null) : Object.keys(d).some((_) => _ === m.fieldName) ? m.setValue(d[m.fieldName]) : Object.keys(d).some((_) => _ === m.altFieldName) && m.setValue(d[m.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var d = {};
      return h.forEach((m) => {
        if (m.getValue != null)
          switch (m.type) {
            case "subform":
              d = $.extend(d, m.getValue());
              break;
            default:
              d[m.fieldName] = m.getValue();
              break;
          }
      }), d;
    }, isValid: () => !h.some((d) => !(d.isValid === void 0 || d.isValid())) });
    const h = a.inputs.map((d) => F(null));
    return (d, m) => (u(), c("div", Fn, [
      (u(!0), c(W, null, R(a.inputs, (_, B) => (u(), E(Vt, {
        ref_for: !0,
        ref: (b) => D(h)[B] = b,
        input: _,
        onValue_changed: m[0] || (m[0] = (b) => l("value_changed", b)),
        onButton_clicked: m[1] || (m[1] = (b) => l("button_clicked", b)),
        disabled: a.disabled || D(o).some((b) => b === _.name),
        hidden: D(s).some((b) => b === _.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), On = ["id", "name"], xn = /* @__PURE__ */ S({
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
      let h = Dt(a.fields);
      return s = h.map((d) => F(null)), h;
    });
    return n({ isValid: () => !s.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => s.forEach((d) => d.setValue(h)), getValue: () => {
      var h = {};
      return s.forEach((d) => {
        h = $.extend(h, d.getValue());
      }), h;
    } }), (h, d) => U((u(), c("div", {
      class: "box",
      id: a.name,
      name: a.name
    }, [
      (u(!0), c(W, null, R(o.value, (m, _) => (u(), E(Wt, {
        ref_for: !0,
        ref: (B) => D(s)[_] = B,
        inputs: m,
        disabled: a.disabled,
        onValue_changed: d[0] || (d[0] = (B) => l("value_changed", B)),
        onButton_clicked: d[1] || (d[1] = (B) => l("button_clicked", B))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, On)), [
      [se, !a.hidden]
    ]);
  }
}), Jn = ["for"], Nn = {
  key: 0,
  class: "help is-danger"
}, An = { class: "control" }, Tn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Pn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Vt = /* @__PURE__ */ S({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = F(null), l = t, s = e, o = ne(s, P), r = we(F(s.input.type)), p = y(() => {
      let g = null;
      switch (s.input.type) {
        case "autocomplete":
          g = Mt;
          break;
        case "button":
          g = Ee;
          break;
        case "checkbox-group":
          g = wt;
          break;
        case "checkbox":
          g = Bt;
          break;
        case "date":
          g = Ft;
          break;
        case "full-editor":
          g = Ot;
          break;
        case "header":
          g = Ie;
          break;
        case "hidden":
          g = xt;
          break;
        case "number":
          g = Jt;
          break;
        case "paragraph":
          g = Le;
          break;
        case "radio-group":
          g = Nt;
          break;
        case "select":
          g = Tt;
          break;
        case "switch":
          g = Pt;
          break;
        case "text":
          g = Et;
          break;
        case "textarea":
          g = Lt;
          break;
        case "time":
          g = Ke;
          break;
        case "subform":
          g = xn;
          break;
      }
      return g;
    }), i = function(g) {
      a.value !== null && a.value.setValue !== void 0 && a.value.setValue(g);
    };
    ue(() => {
      a.value !== null && s.input.value !== void 0 && s.input.value !== null && i(s.input.value);
    });
    const h = y(() => s.input.disabled ?? s.disabled ?? !1), d = y(() => `is-${s.input.form_columns ?? 12}`), m = y(() => s.input.name), _ = y(() => s.input.processVariable ?? s.input.name), B = y(() => Tn.some((g) => g === s.input.type) && s.input.label !== void 0 && s.input.label !== null), b = y(() => {
      let g = $.extend({}, s.input);
      return delete g.type, g.className != null && delete g.className, g.form_columns != null && delete g.form_columns, Pn.some((ae) => ae === s.input.type) && (g.translate = s.translate), g.disabled = s.disabled, g;
    }), I = (g) => {
      if (g.value !== void 0 && g.value !== null && Array.isArray(g.value)) {
        let ae = [...g.value];
        g.value = ae;
      }
      l("value_changed", g);
    }, k = (g) => {
      l("button_clicked", g);
    }, v = () => {
      if (a.value != null && a.value.getValue != null) {
        let g = a.value.getValue();
        return g != null && Array.isArray(g) ? [...g] : g;
      }
      return null;
    };
    return n({ setValue: i, fieldName: m, type: r, altFieldName: _, getValue: v, isValid: () => {
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
    } }), (g, ae) => U((u(), c("div", {
      class: O(["field column", [d.value]])
    }, [
      s.input.type == "header" ? (u(), E(Ie, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (u(), E(Le, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (u(), E(Ee, {
        key: 2,
        name: s.input.name,
        sstyle: s.input.style,
        className: s.input.className,
        icon: s.input.icon,
        label: s.input.label,
        disabled: h.value,
        onButton_clicked: k,
        ref_key: "inp",
        ref: a
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (u(), c(W, { key: 3 }, [
        B.value ? (u(), c("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Q(J(D(o)(s.input.label)) + " ", 1),
          s.input.required ? (u(), c("span", Nn, "*")) : T("", !0)
        ], 8, Jn)) : T("", !0),
        f("div", An, [
          (u(), E(be(p.value), Y(b.value, {
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
}, In = /* @__PURE__ */ S({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: t }) {
    const a = e, l = t, s = ne(a, P);
    Ae("Translate", (k) => s.value(k));
    let o = [];
    const r = y(() => {
      if (a.elements != null) {
        let k = Dt(a.elements);
        return o = k.map((v) => F(null)), k;
      } else
        return null;
    }), p = () => {
      let k = {};
      return o.forEach((v) => {
        k = $.extend(k, v.getValue());
      }), k;
    }, i = (k) => {
      o.forEach((v) => v.setValue(k));
    }, h = () => !o.some((k) => !(k.isValid === void 0 || k.isValid())), d = F([]);
    Ae(He, we(d));
    const m = (k) => {
      Array.isArray(k) ? d.value = [...d.value, ...k] : d.value.push(k);
    }, _ = (k) => {
      Array.isArray(k) ? d.value = d.value.filter((v) => k.indexOf(v) >= 0) : d.value = d.value.filter((v) => v !== k);
    }, B = F([]);
    return Ae(Ge, we(B)), n({ getValues: p, setValues: i, isValid: h, hideField: m, showField: _, disableField: (k) => {
      Array.isArray(k) ? B.value = [...B.value, ...k] : B.value.push(k);
    }, enableField: (k) => {
      Array.isArray(k) ? B.value = B.value.filter((v) => k.indexOf(v) >= 0) : B.value = B.value.filter((v) => v !== k);
    } }), (k, v) => (u(), c("form", En, [
      r.value != null ? (u(!0), c(W, { key: 0 }, R(r.value, (w, C) => (u(), E(Wt, {
        ref_for: !0,
        ref: (g) => D(o)[C] = g,
        inputs: w,
        key: C,
        onValue_changed: v[0] || (v[0] = (g) => l("value_changed", g)),
        onButton_clicked: v[1] || (v[1] = (g) => l("button_clicked", g)),
        disabled: k.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : T("", !0)
    ]));
  }
}), Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Mt,
  Button: Ee,
  Checkbox: Bt,
  CheckboxGroup: wt,
  ComponentForm: In,
  DateField: Ft,
  FormComponent: Vt,
  FullEditor: Ot,
  Header: Ie,
  Hidden: xt,
  NumberField: Jt,
  Paragraph: Le,
  RadioGroup: Nt,
  Select: Tt,
  Switch: Pt,
  Text: Et,
  TextArea: Lt,
  Time: Ke
}, Symbol.toStringTag, { value: "Module" })), Wn = { class: "hero-body" }, Vn = { class: "title" }, Cn = {
  key: 0,
  class: "subtitle"
}, zn = /* @__PURE__ */ S({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("section", {
      class: O(["hero", "is-small", "has-text-centered", t.type == null ? "" : "is-" + n.type])
    }, [
      f("div", Wn, [
        f("p", Vn, J(n.title), 1),
        n.subtitle ? (u(), c("p", Cn, J(n.subtitle), 1)) : T("", !0)
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
  return u(), c("div", jn, [
    A(e.$slots, "default")
  ]);
}
const Gn = /* @__PURE__ */ Rn(Un, [["render", Hn]]), Yn = {
  key: 0,
  class: "icon is-clickable"
}, qn = /* @__PURE__ */ S({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, a = n;
    return (l, s) => (u(), c("li", {
      class: O({ "is-active": t.active })
    }, [
      f("a", {
        onClick: s[0] || (s[0] = (o) => a("click"))
      }, [
        t.icon ? (u(), c("span", Yn, [
          N(D(G), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        Q(" " + J(t.title), 1)
      ])
    ], 2));
  }
}), Kn = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("nav", {
      class: O(t.value),
      "aria-label": "breadcrumbs"
    }, [
      f("ul", null, [
        A(a.$slots, "default")
      ])
    ], 2));
  }
}), Qn = {
  key: 0,
  class: "card-icon"
}, Xn = { class: "card-icon-wrapper" }, Zn = { class: "card-header" }, es = { class: "card-content" }, ts = { class: "card-footer" }, Ct = /* @__PURE__ */ S({
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
    return (l, s) => (u(), c("div", {
      class: O(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (u(), c("div", Qn, [
        f("div", Xn, [
          N(G, {
            icon: n.icon,
            size: D(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : T("", !0),
      f("div", Zn, [
        A(l.$slots, "header", re(de(a)))
      ]),
      f("div", es, [
        A(l.$slots, "content")
      ]),
      f("div", ts, [
        A(l.$slots, "footer", re(de(t)))
      ])
    ], 2));
  }
}), as = /* @__PURE__ */ S({
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
    return (t, a) => (u(), c("div", {
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
      A(t.$slots, "default")
    ], 2));
  }
}), ls = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("div", {
      class: O(["column", t.value])
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), ns = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), ss = { class: "modal-content" }, os = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, rs = /* @__PURE__ */ S({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (t, a) => (u(), c("div", {
      class: O({ modal: !0, "is-active": n.display }),
      style: Ve(`z-index:${n.zIndex}`)
    }, [
      ns,
      f("div", ss, [
        A(t.$slots, "default")
      ]),
      n.hasClose ? (u(), c("button", os)) : T("", !0)
    ], 6));
  }
}), is = /* @__PURE__ */ f("div", { class: "modal-background" }, null, -1), us = {
  key: 0,
  class: "card-icon"
}, ds = { class: "card-icon-wrapper" }, cs = { class: "modal-card-head" }, ps = { class: "modal-card-body" }, hs = { class: "modal-card-foot" }, ms = /* @__PURE__ */ S({
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
      var r = [];
      return t.fullWidth && r.push("is-fullwidth"), t.fullHeight && r.push("is-fullheight"), t.maxWidth && r.push("is-maxwidth"), t.maxHeight && r.push("is-maxheight"), r;
    });
    return (r, p) => (u(), c("div", {
      class: O(["modal", { "is-active": t.show }])
    }, [
      is,
      f("div", {
        class: O(["modal-card", o.value])
      }, [
        t.icon !== null ? (u(), c("div", us, [
          f("div", ds, [
            N(G, {
              icon: t.icon,
              size: D(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : T("", !0),
        f("div", cs, [
          A(r.$slots, "header", re(de(s))),
          r.hasClose ? (u(), c("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: p[0] || (p[0] = (i) => a("close"))
          })) : T("", !0)
        ]),
        f("div", ps, [
          A(r.$slots, "content")
        ]),
        f("div", hs, [
          A(r.$slots, "footer", re(de(l)))
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
}, gs = { class: "panel-block" }, vs = /* @__PURE__ */ S({
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
    return (l, s) => (u(), c("div", {
      class: O(["panel", a.value])
    }, [
      n.hasHeader ? (u(), c("div", bs, [
        A(l.$slots, "header")
      ])) : T("", !0),
      n.hasTabs ? (u(), c("div", fs, [
        A(l.$slots, "tabs")
      ])) : T("", !0),
      (u(!0), c(W, null, R(t.value, (o) => (u(), c("div", gs, [
        A(l.$slots, o)
      ]))), 256))
    ], 2));
  }
}), zt = /* @__PURE__ */ S({
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
    return (l, s) => (u(), c("div", {
      class: O(t.value)
    }, [
      f("table", {
        class: O(a.value)
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
}), ys = ["href"], _s = {
  key: 0,
  class: "icon is-small"
}, ks = /* @__PURE__ */ S({
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
    return (s, o) => (u(), c("li", {
      class: O({ "is-active": a.active })
    }, [
      f("a", {
        href: s.href,
        onClick: l
      }, [
        a.icon ? (u(), c("span", _s, [
          N(D(G), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : T("", !0),
        f("span", null, J(a.title), 1)
      ], 8, ys)
    ], 2));
  }
}), $s = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("div", {
      class: O(t.value)
    }, [
      f("ul", null, [
        A(a.$slots, "default")
      ])
    ], 2));
  }
}), Ss = /* @__PURE__ */ S({
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
    return (a, l) => (u(), c("div", {
      class: O(t.value)
    }, [
      A(a.$slots, "default")
    ], 2));
  }
}), Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: zn,
  Box: Gn,
  Breadcrumbs: Kn,
  BreadcrumbsItem: qn,
  Card: Ct,
  Column: ls,
  ColumnContainer: as,
  List: St,
  ListItem: Me,
  Modal: rs,
  ModalCard: ms,
  Panel: vs,
  Table: zt,
  Tabs: $s,
  TabsTab: ks,
  Tile: Ss
}, Symbol.toStringTag, { value: "Module" }));
const lt = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
xe(`${lt.substring(0, lt.lastIndexOf("/"))}/style.css`);
const Ms = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function ws(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Ms,
  setSkin: ws
}, Symbol.toStringTag, { value: "Module" })), Fs = /* @__PURE__ */ S({
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
    let o = null;
    const r = () => {
      o != null && o.update();
    }, p = y(() => {
      var i = "";
      return l.width && (i = `width:${l.width}px;`), l.height && (i += `height:${l.height}px;`), i;
    });
    return z(() => l.type, (i) => {
      o != null && (o.type = i ?? "line");
    }), z(
      () => l.labels,
      (i) => {
        o != null && (o.data.labels = i, (l.showRefresh == null || !l.showRefresh) && r());
      },
      { deep: !0 }
    ), z(
      () => l.datasets,
      (i) => {
        o != null && (o.data.datasets = i, (l.showRefresh == null || !l.showRefresh) && r());
      },
      { deep: !0 }
    ), ue(async () => {
      let i = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${l.legendPosition}`,
            labels: {
              filter: (d, m) => d.text != null
            },
            onClick: function(d, m) {
              s("legendItemClick", o, m);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (i.scales = l.scales), l.tooltips != null && l.tooltips != null && (i.tooltips = l.tooltips);
      const { Chart: h } = await Ce(t, ["Chart"]);
      o = new h(a.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: i
      }), o.update();
    }), (i, h) => (u(), E(Ct, null, ot({
      content: L(() => [
        f("canvas", {
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
          f("h3", {
            class: O(d.headerClass)
          }, J(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.showRefresh != null && l.showRefresh != null && l.showRefresh ? {
        name: "footer",
        fn: L((d) => [
          N(_t, Y(d, { onClick: r }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Os = /* @__PURE__ */ S({
  __name: "code-writer",
  props: {
    language: {},
    autocompletes: {},
    readonly: { type: Boolean, default: !1 },
    value: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: t }) {
    const a = `${la(P)}src-noconflict/ace.js`, l = e, s = t, o = F(null), r = F(null), p = function() {
      return r.getValue() == "" ? null : r.getValue();
    }, i = function(d) {
      r.setValue(d ?? "");
    };
    z(() => l.readonly, (d) => {
      r.setReadOnly(d == null || d == null ? !1 : d);
    }), z(() => l.value, (d) => {
      i(d);
    }), z(() => l.language, (d) => {
      r.getSession().setMode(d);
    });
    const h = y(() => {
      let d = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let m = 0; m < l.autocompletes.length; m++)
          l.autocompletes[m].Method.indexOf(".") >= 0 ? d = Math.min(d, l.autocompletes[m].Method.indexOf(".")) : d = Math.min(d, l.autocompletes[m].Method.length);
        if (d > 3 && l.autocompletes.length > 0) {
          let m = !0, _ = l.autocompletes[0].Method.substring(0, 3);
          for (let B = 0; B < l.autocompletes.length; B++)
            if (l.autocompletes[B].Method.substring(0, 3) != _) {
              m = !1;
              break;
            }
          m && (d = 3);
        }
      }
      return d;
    });
    return n({ getValue: p, setValue: i }), ue(async () => {
      const { ace: d } = await Ce(a, ["ace"]);
      r.value = qt(d.edit(o.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), r.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && r.value.setValue(l.value), r.on("change", () => s("value_changed", p())), l.autocompletes !== null && l.autocompletes !== void 0 && (r.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), r.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(m, _, B, b, I) {
          var k = [];
          if (b = b.toUpperCase(), b.length >= h && (k = l.autocompletes.filter((v) => v.Method.toUpperCase().startsWith(b) && v.Method.length > b.legend).map((v) => ({
            caption: v.Method + (v.Description === null || v.Description === void 0 ? "" : "->" + v.Description),
            value: v.Method,
            meta: "autos"
          }))), k.length === 0) {
            I(null, []);
            return;
          }
          I(null, k.map(function(v) {
            return v;
          }));
        }
      }]);
    }), (d, m) => (u(), c("div", {
      class: "editor",
      ref_key: "container",
      ref: o
    }, null, 512));
  }
}), xs = ["colspan", "rowspan"], Js = { key: 0 }, Ns = { colspan: "100%" }, As = ["colspan", "rowspan", "onClick"], Ts = { colspan: "100%" }, Ps = /* @__PURE__ */ S({
  __name: "grid",
  props: {
    Columns: {},
    Data: {},
    EmptyMessage: {},
    ColumnRows: {},
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
    })), o = y(() => t.ColumnRows === void 0 || t.ColumnRows.length === 0 ? t.Columns : t.ColumnRows.map((r) => r.map((p) => t.Columns.filter((i) => i.some((h) => h.ID === p))[0].find((i) => i.ID === p))));
    return (r, p) => (u(), E(zt, re(de(l.value)), ot({
      thead: L(() => [
        (u(!0), c(W, null, R(t.Columns, (i) => (u(), c("tr", null, [
          (u(!0), c(W, null, R(i, (h) => (u(), c("th", {
            colspan: h.HeaderColspan,
            rowspan: h.HeaderRowspan
          }, [
            A(r.$slots, `head-${h.ID}`),
            Q(" " + J(h.Title), 1)
          ], 8, xs))), 256))
        ]))), 256))
      ]),
      tbody: L(() => [
        t.Data === null || t.Data.length === 0 ? (u(), c("tr", Js, [
          f("td", Ns, [
            t.Data === null ? (u(), E(ie, { key: 0 })) : (u(), E(ce, {
              key: 1,
              message: t.EmptyMessage ?? "No data available"
            }, null, 8, ["message"]))
          ])
        ])) : (u(!0), c(W, { key: 1 }, R(t.Data, (i, h) => (u(), c(W, null, [
          (u(!0), c(W, null, R(o.value.filter((d) => d.some((m) => !(m.HeaderOnly ?? !1))), (d, m) => (u(), c("tr", {
            key: `row-${h}-${m}`
          }, [
            (u(!0), c(W, null, R(d.filter((_) => !(_.HeaderOnly ?? !1)), (_) => (u(), c("td", {
              key: `data-${h}-${m}`,
              colspan: _.DataColspan,
              rowspan: _.DataRowspan,
              onClick: (B) => a("cellClicked", { RowIndex: h, Data: _.PropertyName ? i[_.PropertyName] : null, Row: i })
            }, [
              A(r.$slots, `body-${_.ID}`, re(de({ RowIndex: h, Data: _.PropertyName ? i[_.PropertyName] : null, Row: i })), () => [
                Q(J(_.PropertyName ? i[_.PropertyName] : null), 1)
              ])
            ], 8, As))), 128))
          ]))), 128))
        ], 64))), 256))
      ]),
      _: 2
    }, [
      (t.hasprevious ?? !1) || (t.currentpage ?? 0) > 0 || (t.hasmore ?? !1) || (t.currentpage ?? 0) < (t.totalpages ?? 0 - 1) ? {
        name: "tfoot",
        fn: L(() => [
          f("tr", null, [
            f("td", Ts, [
              N(kt, Y(s.value, {
                onMoveForward: p[0] || (p[0] = (i) => a("moveForward")),
                onMoveBack: p[1] || (p[1] = (i) => a("moveBack")),
                onGoToPage: p[2] || (p[2] = (i) => a("goToPage", i))
              }), null, 16)
            ])
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
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
} = Dl, { DraggableItem: yo, DropZone: _o, Sortable: ko } = Fl, {
  AutoComplete: $o,
  CheckboxGroup: So,
  Checkbox: Do,
  DateField: Mo,
  ComponentForm: wo,
  FullEditor: Bo,
  Header: Fo,
  Hidden: Oo,
  NumberField: xo,
  Paragraph: Jo,
  RadioGroup: No,
  Select: Ao,
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
} = Ds, { AVAIABLE_SKINS: tr, setSkin: ar } = Bs, {
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
  BadgePositiions: Dr,
  ToolTipPositions: Mr,
  ToolTipTextAlignments: wr
} = Qt, { loadNonEs6Module: Br } = Kt, { Chart: Fr, CodeWriter: Or, Grid: xr } = Es;
export {
  tr as AVAIABLE_SKINS,
  Ws as Animation,
  or as AnimationSpeeds,
  rr as AnimationTypes,
  $o as AutoComplete,
  fo as Badge,
  Dr as BadgePositiions,
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
  Do as Checkbox,
  So as CheckboxGroup,
  Or as CodeWriter,
  lr as ColorTypes,
  Uo as Column,
  jo as ColumnContainer,
  mr as ColumnContainerModifiers,
  fr as ColumnOffsetSizes,
  br as ColumnSizes,
  wo as ComponentForm,
  Mo as DateField,
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
  No as RadioGroup,
  Ao as Select,
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
  Mr as ToolTipPositions,
  wr as ToolTipTextAlignments,
  Br as loadNonEs6Module,
  ar as setSkin
};
//# sourceMappingURL=components.esm.js.map
