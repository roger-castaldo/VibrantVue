import { computed as y, defineComponent as k, openBlock as i, createBlock as I, Transition as Wt, withCtx as L, renderSlot as T, createElementBlock as p, normalizeClass as O, inject as P, ref as F, watch as C, createVNode as A, createCommentVNode as N, toDisplayString as J, mergeProps as K, unref as S, onMounted as re, Fragment as z, renderList as G, resolveDynamicComponent as me, normalizeProps as ce, guardReactiveProps as ye, withDirectives as R, createElementVNode as g, vModelText as _e, createTextVNode as Q, vShow as se, toRefs as Ct, reactive as nt, resolveComponent as st, vModelCheckbox as Ve, normalizeStyle as We, readonly as we, withAsyncContext as zt, onUnmounted as Rt, vModelSelect as Ut, vModelDynamic as jt, provide as Ne, createSlots as Ht, markRaw as Gt } from "vue";
import "jquery";
const xe = (e) => new Promise((n) => {
  let a = [], t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((l, s) => {
    if (l.toLowerCase().endsWith(".css") || (l += ".css"), document.querySelectorAll('link[server_path="' + l + '"]').length == 0) {
      let o = document.createElement("link"), c = new Promise((u) => {
        o.onload = function() {
          u(l);
        };
      });
      a[s] = c, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", l), o.setAttribute("href", l);
    } else
      a[s] = Promise.resolve(l);
  }), Promise.all(a).then((l) => {
    n(l);
  });
}), ue = [], Ce = (e, n) => new Promise((a) => {
  let t = ue.find((l) => l.path === e);
  if (t != null)
    if (t.result === void 0 && n !== void 0 || t.result === null && n === void 0) {
      let l = setTimeout(() => {
        let s = ue.find((r) => r.path === e);
        s == null ? (clearTimeout(l), a(void 0)) : (s.result !== void 0 && n !== void 0 || s.result === void 0 && n === void 0) && (clearTimeout(l), a(s.result));
      }, 500);
    } else
      a(t.result);
  else {
    ue.push({
      path: e,
      result: n === void 0 ? null : void 0
    });
    let l = document.createElement("script");
    l.onload = () => {
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
    }, l.setAttribute("src", e), (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
  }
}), Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  css: xe,
  loadNonEs6Module: Ce
}, Symbol.toStringTag, { value: "Module" }));
var Y = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(Y || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), X = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(X || {}), de = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(de || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), ot = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(ot || {}), ze = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(ze || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), ee = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(ee || {}), Fe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Fe || {}), rt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(ut || {}), dt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(dt || {}), Je = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Je || {}), ct = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ct || {}), pt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(pt || {}), ht = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(ht || {}), mt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(mt || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), bt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(bt || {}), Re = /* @__PURE__ */ ((e) => (e.topLeft = "top-left", e.top = "top", e.topRight = "top-right", e.right = "right", e.bottomRight = "bottom-right", e.bottom = "bottom", e.bottomLeft = "bottom-left", e.left = "left", e))(Re || {}), Ue = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e))(Ue || {}), je = /* @__PURE__ */ ((e) => (e.left = "left", e.centered = "centered", e.right = "right", e))(je || {});
const qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: de,
  AnimationTypes: Be,
  BadgePositiions: Re,
  BorderTypes: Je,
  BreadCrumbAlignments: Fe,
  BreadCrumbSeperators: rt,
  ChartLegendPositions: ze,
  ChartTypes: ot,
  ColorTypes: Y,
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
}, Symbol.toStringTag, { value: "Module" })), q = (e) => {
  const n = e("Language", "en");
  return y(() => n);
}, Kt = (e) => {
  const n = e("IconSet", "solid");
  return y(() => n);
}, Qt = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), Xt = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), Zt = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), ea = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ta = (e) => e("AceJSCDN", "https://cdn.jsdelivr.net/npm/ace-builds@1.32.3/"), ft = /* @__PURE__ */ k({
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
    const n = Zt(P);
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
    }, l = (h) => h === void 0 ? "" : `animate__${h}`, s = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, r = y(() => ({
      enter: t(a.speedIn ?? a.speed),
      leave: t(a.speedOut ?? a.speed)
    })), o = y(() => [
      "animate__animated",
      l(a.incoming ?? a.inout),
      s(a.speedIn ?? a.speed)
    ].join(" ")), c = y(() => [
      "animate__animated",
      l(a.outgoing ?? a.inout),
      s(a.speedOut ?? a.speed)
    ].join(" ")), u = y(() => [
      "animate__animated",
      "animate__infinite",
      l(a.repeating),
      s(a.speed ?? "")
    ].join(" "));
    return (h, d) => a.repeating ? (i(), p("div", {
      key: 1,
      class: O(u.value)
    }, [
      T(h.$slots, "default")
    ], 2)) : (i(), I(Wt, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": c.value,
      duration: r.value
    }, {
      default: L(() => [
        T(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), aa = "brands.min.css", la = "all.min.css", Xe = "icon_styles", na = /\.fa-([^: ]+):before/g, sa = /url\(([^)]+)\)/g, ve = F([]), Te = F(!1), Ze = async (e, n) => {
  if (!Te.value) {
    Te.value = !0;
    let a;
    ve.value.length === 0 ? (a = document.createElement("style"), a.setAttribute("id", Xe), document.head.appendChild(a), a.setAttribute("type", "text/css")) : a = document.getElementById(Xe), ve.value = [" "];
    let t = await Promise.all([
      fetch(`${e}${aa}`),
      fetch(`${e}${la}`),
      fetch(`${e}${n}.min.css`)
    ]), l = await t[0].text();
    [...l.matchAll(na)].forEach((s) => {
      ve.value.push(s[1]);
    }), l = `${await t[1].text()}
    ${await t[2].text()}
    ${l}`, [...l.matchAll(sa)].forEach((s) => {
      l = l.replace(s[0], `url(${new URL(s[1], e)})`);
    }), a.innerText = l, ve.value.splice(0, 1), Te.value = !1;
  }
}, H = /* @__PURE__ */ k({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = Xt(P), a = Kt(P);
    ve.value.length === 0 ? Ze(n, a.value) : C(a, () => Ze(n, a.value));
    const t = e, l = y(() => {
      let s = [];
      return t.icon !== void 0 && t.icon !== null && (ve.value.indexOf(t.icon) >= 0 ? s.push("fa-brands") : (s.push("fa-ico"), s.push(`fa-${a.value}`)), s.push((t.icon.indexOf("fa-") == -1 ? " fa-" : " ") + t.icon)), t.size !== void 0 && t.size !== null && t.size !== oe.normal && s.push(`fa-${t.size}`), s;
    });
    return (s, r) => (i(), p("i", {
      class: O(l.value)
    }, null, 2));
  }
});
const oa = ["disabled"], ra = {
  key: 0,
  class: "icon is-small"
}, ia = { key: 1 }, Z = /* @__PURE__ */ k({
  __name: "button",
  props: {
    icon: {},
    type: { default: Y.primary },
    title: {},
    disabled: { type: Boolean },
    size: { default: X.small },
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n, l = y(() => {
      let s = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && s.push("disabled"), a.hidemobile && s.push("is-hidden-mobile"), a.hidetablet && s.push("is-hidden-tablet-only"), a.hidedesktop && s.push("is-hidden-desktop is-hidden-widescreen"), s.join(" ");
    });
    return (s, r) => (i(), p("button", {
      class: O(l.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (i(), p("span", ra, [
        A(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      a.title != null ? (i(), p("span", ia, J(a.title), 1)) : N("", !0)
    ], 10, oa));
  }
}), ua = `{"en":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Okay","Print":"Print","Save":"Save","Submit":"Submit","Upload":"Upload"},"ar":{"Add":"مضافا","Cancel":"إلغاء","Delete":"تحذف","Disable":"العجز","Download":"تحميل","Edit":"Edit","Enable":"التمكين","Okay":"حسنا","Print":"الطباعة","Save":"أنقذ","Submit":"Submit","Upload":"تحميل"},"az":{"Add":"Axtarış","Cancel":"Tarix","Delete":"Delete","Disable":"Qeydiyyat","Download":"Pulsuz","Edit":"Tarix","Enable":"Qeydiyyat","Okay":"Qeydiyyat","Print":"Çap","Save":"Daxil","Submit":"Daxil","Upload":"Tarix"},"bg":{},"bn":{},"ca":{},"cs":{"Add":"Čeština","Cancel":"Hledat","Delete":"Čeština","Disable":"Zakázat","Download":"Čeština","Edit":"Editace","Enable":"Podpora","Okay":"Čeština","Print":"Čeština","Save":"Čeština","Submit":"Odeslat","Upload":"Čeština"},"da":{"Add":"Tilføj","Cancel":"Annuller","Delete":"Slet","Disable":"Deaktiverbare","Download":"Download","Edit":"Rediger","Enable":"Aktivér","Okay":"Okay","Print":"Udskriv","Save":"Gem","Submit":"Indsend","Upload":"Upload"},"de":{"Add":"Hinzufügen","Cancel":"Abbrechen","Delete":"Löschen","Disable":"Nicht","Download":"Downloads","Edit":"Bearbeiten","Enable":"Ermöglichen","Okay":"Okay","Print":"Drucken","Save":"Speichern","Submit":"Einreichung","Upload":"Hochladen"},"el":{},"eo":{"Add":"Aldonu","Cancel":"Cancel","Delete":"Delete","Disable":"Distingebla","Download":"Elŝutu","Edit":"Edit","Enable":"Enable","Okay":"Bone","Print":"Presaĵo","Save":"Savi","Submit":"Submit","Upload":"Ĝis"},"es":{"Add":"Añadir","Cancel":"Cancelar","Delete":"Suprimir","Disable":"Discapacidad","Download":"Descargar","Edit":"Editar","Enable":"Habilitación","Okay":"Está","Print":"Imprimir","Save":"Guardar","Submit":"Submit","Upload":"Subir"},"et":{},"fa":{"Add":"Add","Cancel":"لغو","Delete":"حذف","Disable":"Disable","Download":"Download","Edit":"Edit","Enable":"گزینه","Okay":"خوب","Print":"Print","Save":"Save","Submit":"ارسال","Upload":"آپلود"},"fi":{"Add":"Lisää","Cancel":"Peruu","Delete":"Delete","Disable":"Vammainen","Download":"Download","Edit":"Edit","Enable":"Mahdollistaa","Okay":"Okei","Print":"Printti","Save":"Säästäminen","Submit":"Lähetys","Upload":"Lataa"},"fr":{"Add":"Add","Cancel":"Annuler","Delete":"Supprimer","Disable":"Désactive","Download":"Télécharger","Edit":"Edit","Enable":"Active","Okay":"D'accord","Print":"Imprimer","Save":"Save","Submit":"Soumettre","Upload":"Charge"},"ga":{"Add":"Déan","Cancel":"Cealaigh","Delete":"Scriosta","Disable":"Díroghnaigh","Download":"Íoslódáil","Edit":"Inis","Enable":"Cumasaigh","Okay":"Riachtanais","Print":"Priontáil","Save":"Sábháil","Submit":"Cuir","Upload":"Uaslódáil"},"he":{"Add":"הוסף","Cancel":"ביטול","Delete":"Delete","Disable":"אכזבה","Download":"הורד","Edit":"Editעריכה","Enable":"אפשרות","Okay":"בסדר","Print":"הדפסה","Save":"להציל","Submit":"הגשת","Upload":"Upload"},"hi":{"Add":"जोड़ें","Cancel":"रद्द","Delete":"डिलीट","Disable":"अक्षम","Download":"डाउनलोड","Edit":"संपादित","Enable":"सक्षम","Okay":"ओके","Print":"छाप","Save":"सहेजें","Submit":"जमा","Upload":"अपलोड"},"hu":{"Add":"Hozzáadás","Cancel":"Törlés","Delete":"Törlés","Disable":"Letiltás","Download":"Letöltés","Edit":"Edit","Enable":"Képesség","Okay":"Okéy","Print":"Nyomtatás","Save":"Mentés","Submit":"Bejelentkezés","Upload":"Feltöltés"},"id":{"Add":"Login","Cancel":"Login","Delete":"Login","Disable":"Sitemap","Download":"Login","Edit":"Login","Enable":"Sitemap","Okay":"Login","Print":"Login","Save":"Sitemap","Submit":"Sitemap","Upload":"Sitemap"},"it":{"Add":"Aggiungi","Cancel":"Annulla","Delete":"Cancella","Disable":"Disattivare","Download":"Scarica","Edit":"Modifica","Enable":"Abilitare","Okay":"Ok","Print":"Stampa","Save":"Salva","Submit":"Inserisci","Upload":"Caricamento"},"ja":{"Add":"追加する","Cancel":"キャンセル","Delete":"削除","Disable":"免責事項","Download":"ダウンロード","Edit":"編集","Enable":"アクセス","Okay":"お問い合わせ","Print":"プリント","Save":"保存する","Submit":"送信する","Upload":"アップロード"},"ko":{"Add":"기타","Cancel":"이름","Delete":"기타","Disable":"기타","Download":"다운로드","Edit":"제품정보","Enable":"이름","Okay":"이름","Print":"제품정보","Save":"제품","Submit":"제출하기","Upload":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Add":"Adicionar","Cancel":"Cancelar","Delete":"Excluir","Disable":"Deficiência","Download":"Baixar","Edit":"Editar","Enable":"Habilitar","Okay":"Está","Print":"Impressão","Save":"Salvar","Submit":"Submeter-me","Upload":"Carregar"},"ro":{},"ru":{"Add":"Добавить","Cancel":"Отмена","Delete":"Удалить","Disable":"Отключить","Download":"Скачать","Edit":"Изменить","Enable":"Включить","Okay":"Хорошо","Print":"Печать","Save":"Сохранить","Submit":"Submit","Upload":"Загрузка"},"sk":{"Add":"Pridať","Cancel":"Zrušiť","Delete":"Zmazať","Disable":"Prenos","Download":"Na","Edit":"Upraviť","Enable":"Povoliť","Okay":"Dobre","Print":"Vytlačiť","Save":"Uložiť","Submit":"Odoslať","Upload":"Nahrať"},"sl":{},"sq":{},"sr":{},"sv":{"Add":"Lägg","Cancel":"Avbokning","Delete":"Delete","Disable":"Inaktivera","Download":"Ladda","Edit":"Edit","Enable":"Aktivera","Okay":"Okej","Print":"Print","Save":"Spara","Submit":"Inlämning","Upload":"Upload"},"th":{},"tl":{},"tr":{"Add":"Add","Cancel":"Cancel","Delete":"Delete","Disable":"Engelli","Download":"Download","Edit":"Edit","Enable":"Enable","Okay":"Tamam","Print":"Baskı","Save":"Kaydet","Submit":"Gönder","Upload":"Download"},"uk":{"Add":"Додати","Cancel":"Зареєструватися","Delete":"Делет","Disable":"Вимкнути","Download":"Завантажити","Edit":"Редагування","Enable":"Увімкнути","Okay":"Проксимус","Print":"Друк","Save":"Зберегти","Submit":"Подати","Upload":"Завантажити"},"zh":{},"zt":{}}`, da = '{"en":{"Filter":"Filter"},"ar":{"Filter":"فيلم"},"az":{"Filter":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Filter":"Čeština"},"da":{"Filter":"Filter"},"de":{"Filter":"Filter"},"el":{},"eo":{"Filter":"Filtero"},"es":{"Filter":"Filtro"},"et":{},"fa":{"Filter":"فیلتر"},"fi":{"Filter":"Filter"},"fr":{"Filter":"Filtre"},"ga":{"Filter":"Scagaire"},"he":{"Filter":"Filter"},"hi":{"Filter":"फिल्टर"},"hu":{"Filter":"Szűrő"},"id":{"Filter":"Login"},"it":{"Filter":"Filtro"},"ja":{"Filter":"フィルター"},"ko":{"Filter":"제품정보"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Filter":"Filtro"},"ro":{},"ru":{"Filter":"Фильтр"},"sk":{"Filter":"Filter"},"sl":{},"sq":{},"sr":{},"sv":{"Filter":"Filter"},"th":{},"tl":{},"tr":{"Filter":"Filtre"},"uk":{"Filter":"Фільтри"},"zh":{},"zt":{}}', ca = '{"en":{"Previous":"Previous","Next":"Next","Older":"Older","Newer":"Newer","GoToPage":"Go To Page"},"ar":{"Previous":"سابقا","Next":"التالي","Older":"كبار","Newer":"Newer","GoToPage":"الذهاب إلى الصفحة"},"az":{"Previous":" Previous","Next":"Next","Older":"Yaşlı","Newer":"Yeniyetmə","GoToPage":" Page"},"bg":{},"bn":{},"ca":{},"cs":{"Previous":"Předchozí","Next":"Čeština","Older":"Starší","Newer":"Čeština","GoToPage":"Přejít na stránku"},"da":{"Previous":"Forrige","Next":"Næste","Older":"Ældre","Newer":"Nyer","GoToPage":"Gå til siden"},"de":{"Previous":"Vorherige","Next":"Nächste","Older":"Alter","Newer":"Neuheit","GoToPage":"Zur Seite"},"el":{},"eo":{"Previous":"Antaŭa","Next":"La","Older":"Pli","Newer":"Pli","GoToPage":"Iru al paĝo"},"es":{"Previous":"Anterior","Next":"Siguiente","Older":"Older","Newer":"Newer","GoToPage":"Ir a la página"},"et":{},"fa":{"Previous":"Previous","Next":"بعدی","Older":"مسن","Newer":"Newer","GoToPage":"به صفحه بروید"},"fi":{"Previous":"Edellinen","Next":"Seuraava","Older":"Vanhempi","Newer":"Uudempaa","GoToPage":"Siirry sivulle"},"fr":{"Previous":"Précédent","Next":"Suivant","Older":"Older","Newer":"Newer","GoToPage":"Aller à la page"},"ga":{"Previous":"Roimhe","Next":"Ar","Older":"Sean","Newer":"Nuashonraigh","GoToPage":"Téigh go dtí an Leathanach"},"he":{"Previous":"הקודם","Next":"הבא","Older":"מבוגר","Newer":"חדש","GoToPage":"ללכת לדף"},"hi":{"Previous":"पिछला","Next":"अगला","Older":"पुराना","Newer":"नया","GoToPage":"पृष्ठ पर जाएं"},"hu":{"Previous":"Előző","Next":"Kezdőlap","Older":"Idősebb","Newer":"Újabb","GoToPage":"Menj az oldalra"},"id":{"Previous":"Sitemap","Next":"Sitemap","Older":"Login","Newer":"Login","GoToPage":"Sitemap"},"it":{"Previous":"Precedente","Next":"Il","Older":"Vecchio","Newer":"Nuovo","GoToPage":"Vai alla pagina"},"ja":{"Previous":"新着情報","Next":"次へ","Older":"古い投稿","Newer":"ニュース","GoToPage":"サイトマップ"},"ko":{"Previous":"이름","Next":"이름","Older":"인기있는","Newer":"더","GoToPage":"바로가기"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Previous":"Anterior","Next":"Próximo","Older":"O","Newer":"Mais","GoToPage":"Ir para a página"},"ro":{},"ru":{"Previous":"Предыдущий","Next":"Следующий","Older":"Пожилой","Newer":"Newer","GoToPage":"Перейти на страницу"},"sk":{"Previous":"Predchádzajúci","Next":"Ďalšie","Older":"Staršie","Newer":"Novinka","GoToPage":"Prejsť na stránku"},"sl":{},"sq":{},"sr":{},"sv":{"Previous":"Föregående","Next":"Nästa","Older":"Äldre","Newer":"Nyare","GoToPage":"Gå till Page"},"th":{},"tl":{},"tr":{"Previous":"Önceki","Next":"Sonraki","Older":"Yaşlı","Newer":"Newer","GoToPage":"Go To Page"},"uk":{"Previous":"Попереднє","Next":"Про","Older":"Старші","Newer":"Нова","GoToPage":"Перейти на сторінку"},"zh":{},"zt":{}}', pa = `{"en":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thursday":"Thursday","Friday":"Friday","Saturday":"Saturday"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"January","Febuary":"Febuary","March":"March","April":"April","June":"June","July":"July","August":"August","September":"September","October":"October","November":"November","December":"December"},"Today":"Today"},"ar":{"Weekdays":{"Sun":"الشمس","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"فري","Sat":"Sat","Sunday":"الأحد","Monday":"الاثنين","Tuesday":"الثلاثاء","Wednesday":"الأربعاء","Thursday":"الخميس","Friday":"الجمعة","Saturday":"السبت"},"Months":{"Jan":"جان","Feb":"شباط/فبراير","Mar":"Mar","Apr":"Apr","May":"أيار/مايو","Jun":"جون","Jul":"(جول)","Aug":"آب/أغسطس","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"كانون","January":"كانون","Febuary":"Febuary","March":"آذار/مارس","April":"نيسان/أبريل","June":"حزيران/يونيه","July":"تموز/يوليه","August":"آب/أغسطس","September":"أيلول/سبتمبر","October":"تشرين","November":"تشرين","December":"كانون"},"Today":"اليوم"},"az":{"Weekdays":{"Sun":"Qeydiyyat","Mon":"Bakı","Tue":"Qeydiyyat","Wed":"Biznes","Thu":"Qeydiyyat","Fri":"Bakı","Sat":"Bakı","Sunday":"Bakı","Monday":"Bakı","Tuesday":"Bakı","Wednesday":"Bakı","Thursday":"Bakı","Friday":"Bakı","Saturday":"Bakı"},"Months":{"Jan":"Qeydiyyat","Feb":"Bakı","Mar":"Bakı","Apr":"Bakı","May":"İyul","Jun":"Bakı","Jul":"Bakı","Aug":"Axtarış","Sep":"Bakı","Oct":"Axtarış","Nov":"Bakı","Dec":"Elan","January":"Yanvar","Febuary":"Bakı","March":"Bakı","April":"Bakı","June":"İyun","July":"İyul","August":"Avqust","September":"Bakı","October":"Oktyabr","November":"Bakı","December":"Bakı"},"Today":"Bu"},"bg":{"Weekdays":{},"Months":{}},"bn":{"Weekdays":{},"Months":{}},"ca":{"Weekdays":{},"Months":{}},"cs":{"Weekdays":{"Sun":"Čeština","Mon":"Čeština","Tue":"Čeština","Wed":"Čeština","Thu":"Čeština","Fri":"Čeština","Sat":"Čeština","Sunday":"Neděle","Monday":"Pondělí","Tuesday":"Úterý","Wednesday":"Čeština","Thursday":"Čtvrtek","Friday":"Pátek","Saturday":"Sobota"},"Months":{"Jan":"Čeština","Feb":"Čeština","Mar":"Čeština","Apr":"Čeština","May":"Čeština","Jun":"Čeština","Jul":"Čeština","Aug":"Čeština","Sep":"Září","Oct":"Čeština","Nov":"Novinky","Dec":"Čeština","January":"Leden","Febuary":"Čeština","March":"Březen","April":"Duben","June":"Června","July":"Červenec","August":"Srpen","September":"Září","October":"Říjen","November":"Novinky","December":"Hledat"},"Today":"Dnes"},"da":{"Weekdays":{"Sun":"Solens","Mon":"Mon","Tue":"Billeder","Wed":"I","Thu":"Thu","Fri":"Fri","Sat":"Tillykke","Sunday":"Søndag","Monday":"Mandag","Tuesday":"Tirsdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lørdag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Januar","Febuary":"Uskyldig","March":"Marts","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"I"},"de":{"Weekdays":{"Sun":"Sonne","Mon":"Mongolei","Tue":"Tue","Wed":"Weide","Thu":"Thunfisch","Sat":"Saat","Sunday":"Sonntag","Monday":"Montag","Tuesday":"Dienstag","Wednesday":"Mittwoch","Thursday":"Donnerstag","Friday":"Freitag","Saturday":"Samstag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marsch","Apr":"Apr","May":"Mai","Jun":"Juni","Jul":"Juli","Aug":"Aug","Sep":"September","Oct":"Ok","Nov":"Nov","Dec":"Deko","January":"Januar","Febuary":"Februar","March":"März","April":"April","June":"Juni","July":"Juli","August":"August","September":"September","October":"Oktober","November":"November","December":"Dezember"},"Today":"Heute"},"el":{"Weekdays":{},"Months":{}},"eo":{"Weekdays":{"Sun":"Suno","Mon":"Mon","Tue":"Tue","Wed":"Ni","Thu":"Tumulto","Fri":"Frio","Sat":"Sidanta","Sunday":"Dimanĉo","Monday":"Lundon","Tuesday":"Marŝi","Wednesday":"Merkredo","Thursday":"Ĵaŭdon","Friday":"Vendrede","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Marŝa","Apr":"Apr","May":"Majo","Jun":"Jun","Jul":"Jul","Aug":"Aŭgusto","Sep":"Sep","Oct":"Oktobro","Nov":"Nov","Dec":"Dec","January":"Januaro","Febuary":"Febuary","March":"Marto","April":"April","June":"Junio","July":"Julio","August":"Aŭgusto","September":"Septembro","October":"Oktobro","November":"Novembro","December":"Decembro"},"Today":"Hodiaŭ"},"es":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Domingo","Monday":"Lunes","Tuesday":"Martes","Wednesday":"Miércoles","Thursday":"Jueves","Friday":"Viernes","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mayo","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Enero","Febuary":"Febuary","March":"Marzo","April":"Abril","June":"Junio","July":"Julio","August":"Agosto","September":"Septiembre","October":"Octubre","November":"Noviembre","December":"Diciembre"},"Today":"Hoy"},"et":{"Weekdays":{},"Months":{}},"fa":{"Weekdays":{"Sun":"خورشید","Mon":"مون","Tue":"Tue","Wed":"Wed","Thu":"تو","Fri":"Fri","Sat":"Sat","Sunday":"یکشنبه","Monday":"دوشنبه","Tuesday":"سه","Wednesday":"چهارشنبه","Thursday":"پنجشنبه","Friday":"جمعه","Saturday":"شنبه"},"Months":{"Jan":"ژانویه","Feb":"فوریه","Mar":"Mar","Apr":"آوریل","May":"ممکن","Jun":"Jun","Jul":"جول","Aug":"آگوست","Sep":"سپتامبر","Oct":"اکتبر","Nov":"نوامبر","Dec":"دسامبر","January":"ژانویه","Febuary":"فوریه","March":"مارس","April":"آوریل","June":"ژوئن","July":"جولای","August":"آگوست","September":"سپتامبر","October":"اکتبر","November":"نوامبر","December":"دسامبر"},"Today":"امروز"},"fi":{"Weekdays":{"Sun":"Aurinko","Mon":"Mon","Tue":"Tu","Wed":"Häät","Thu":"Thu","Fri":"Fri","Sat":"Sattumaa","Sunday":"Sunnuntai","Monday":"Maanantaina","Tuesday":"Tiistaina","Wednesday":"Keskiviikko","Thursday":"Torstaina","Friday":"Perjantaina","Saturday":"Lauantaina"},"Months":{"Jan":"Ja","Feb":"Feb","Mar":"Mar","Apr":"Ap","May":"May","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Tammikuu","Febuary":"Feby","March":"Maaliskuu","April":"Huhtikuu","June":"Kesäkuuta","July":"Heinäkuu","August":"Elokuu","September":"Syyskuu","October":"Lokakuu","November":"Marraskuu","December":"Joulukuuta"},"Today":"Tänään"},"fr":{"Weekdays":{"Sun":"Sun","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Mai","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Janvier","Febuary":"Febuary","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Août","September":"Septembre","October":"Octobre","November":"Novembre","December":"Décembre"},"Today":"Aujourd'hui"},"ga":{"Weekdays":{"Sun":"Ghrian","Mon":"Uisce","Tue":"Inis","Wed":"Táimid","Thu":"Thuama","Fri":"Múirín","Sat":"Sábháil","Sunday":"Domhnach","Monday":"Inis","Tuesday":"Dé","Wednesday":"Dé","Thursday":"Déardaoin","Friday":"Dé","Saturday":"Dé"},"Months":{"Jan":"Inis","Feb":"Is","Mar":"Mar","Apr":"Aibreán","May":"Bealtaine","Jun":"Amharc","Jul":"Jul","Aug":"Lúnasa","Sep":"Meán","Oct":"Deireadh","Nov":"Cineál","Dec":"Déan","January":"Inis","Febuary":"Amharc","March":"Márta","April":"Aibreán","June":"Meitheamh","July":"Irl","August":"Amharc","September":"Meán","October":"Deireadh","November":"Samhain","December":"Irl"},"Today":"Sa"},"he":{"Weekdays":{"Sun":"השמש","Mon":"מונמון","Tue":"Tue","Wed":"Wed","Thu":"תור","Fri":"פרי","Sat":"Sat","Sunday":"יום","Monday":"יום","Tuesday":"יום","Wednesday":"יום","Thursday":"יום","Friday":"יום","Saturday":"שבת"},"Months":{"Jan":"יאן","Feb":"פברואר","Mar":"Mar","Apr":"אנגלית","May":"במאי","Jun":"ג'ון","Jul":"יולי","Aug":"אוגוסט","Sep":"ספרד","Oct":"באוקטובר","Nov":"נובמבר","Dec":"דצמבר","January":"ינואר","Febuary":"פברואר","March":"מרץ","April":"אפריל","June":"יוני","July":"יולי","August":"אוגוסט","September":"ספטמבר","October":"אוקטובר","November":"נובמבר","December":"דצמבר"},"Today":"היום"},"hi":{"Weekdays":{"Sun":"सूर्य","Mon":"सोम","Tue":"मंगल","Wed":"Wed","Thu":"गुरु","Fri":"शुक्र","Sat":"सत","Sunday":"रविवार","Monday":"सोमवार","Tuesday":"मंगलवार","Wednesday":"बुधवार","Thursday":"गुरुवार","Friday":"शुक्रवार","Saturday":"शनिवार"},"Months":{"Jan":"जनवरी","Feb":"फ़रवरी","Mar":"मार्च","Apr":"अप्रैल","May":"मई","Jun":"जून","Jul":"जुलाई","Aug":"अगस्त","Sep":"सितंबर","Oct":"अक्टूबर","Nov":"नवम्बर","Dec":"दिसम्बर","January":"जनवरी","Febuary":"फ़रवरी","March":"मार्च","April":"अप्रैल","June":"जून","July":"जुलाई","August":"अगस्त","September":"सितंबर","October":"अक्टूबर","November":"नवंबर","December":"दिसम्बर"},"Today":"आज"},"hu":{"Weekdays":{"Sun":"Nap","Mon":"Mondja","Tue":"Utolsó","Wed":"Wed","Thu":"Thu","Fri":"Friss","Sat":"Sátán","Sunday":"Vasárnap","Monday":"Hétfő","Tuesday":"Kedd","Wednesday":"Szerda","Thursday":"Csütörtök","Friday":"Péntek","Saturday":"Szombat"},"Months":{"Jan":"Jan","Feb":"Február","Mar":"Mária","Apr":"Apr","May":"Május","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Oct","Nov":"Nov","Dec":"Dec","January":"Január","Febuary":"Február","March":"Március","April":"Április","June":"Június","July":"Július","August":"Augusztus","September":"Szeptember","October":"Október","November":"November","December":"December"},"Today":"Ma"},"id":{"Weekdays":{"Sun":"Login","Mon":"Login","Tue":"Login","Wed":"Login","Thu":"Login","Fri":"Login","Sat":"Login","Sunday":"Login","Monday":"Sitemap","Tuesday":"Sitemap","Wednesday":"Sitemap","Thursday":"Sitemap","Friday":"Sitemap","Saturday":"Login"},"Months":{"Jan":"Login","Feb":"Login","Mar":"Login","Apr":"Login","May":"Sitemap","Jun":"Login","Jul":"Login","Aug":"Login","Sep":"Login","Oct":"Login","Nov":"Login","Dec":"Login","January":"Login","Febuary":"Login","March":"Login","April":"Login","June":"Juni","July":"Login","August":"Sitemap","September":"Login","October":"Oktober","November":"Sitemap","December":"Login"},"Today":"Sitemap"},"it":{"Weekdays":{"Sun":"Sole","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Gio","Fri":"Fri","Sat":"Rasoio","Sunday":"Domenica","Monday":"Lunedì","Tuesday":"Martedì","Wednesday":"Mercoledì","Thursday":"Giovedì","Friday":"Venerdì","Saturday":"Sabato"},"Months":{"Jan":"Jan","Feb":"Febbraio","Mar":"Mar","Apr":"Aprile","May":"Maggio","Jun":"Jun","Jul":"Jul","Aug":"Agosto","Sep":"Articolo","Oct":"Ottobre","Nov":"No","Dec":"Dec","January":"Gennaio","Febuary":"Feburio","March":"Marzo","April":"Aprile","June":"Giugno","July":"Luglio","August":"Agosto","September":"Settembre","October":"Ottobre","November":"Novembre","December":"Dicembre"},"Today":"Oggi"},"ja":{"Weekdays":{"Sun":"日曜日","Mon":"モンテネグロ","Tue":"火曜日","Wed":"お問い合わせ","Thu":"日","Fri":"フリガナ","Sat":"スタッフ","Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thursday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"Months":{"Jan":"1月1日","Feb":"1月2日","Mar":"マーキー","Apr":"4月4日","May":"5月5日","Jun":"ジュンジュン","Jul":"7月7日","Aug":"8月8日","Sep":"9月9日","Oct":"10月10日","Nov":"11月11日","Dec":"12月12日","January":"1月1日","Febuary":"2月1日","March":"3月3日","April":"4月4日","June":"6月6日","July":"7月7日","August":"8月8日","September":"9月9日","October":"10月10日","November":"11月11日","December":"12月12日"},"Today":"今日更新"},"ko":{"Weekdays":{"Sun":"(주)","Mon":"담당자","Tue":" ","Wed":"사이트맵","Thu":"₢","Fri":"·","Sat":"·","Sunday":"주","Monday":"월요일,","Tuesday":"*","Wednesday":"-","Thursday":"주","Friday":"월~금","Saturday":"·"},"Months":{"Jan":"1","Feb":"2","Mar":"3","Apr":"4","May":"5","Jun":"주","Jul":"7","Aug":"8","Sep":"9월","Oct":"10월","Nov":"11월","Dec":"12월","January":"1월","Febuary":"주","March":"3","April":"4","June":"6월","July":"7","August":"8","September":"9","October":"10월","November":"11","December":"12"},"Today":"으로"},"lt":{"Weekdays":{},"Months":{}},"lv":{"Weekdays":{},"Months":{}},"ms":{"Weekdays":{},"Months":{}},"nb":{"Weekdays":{},"Months":{}},"nl":{"Weekdays":{},"Months":{}},"pl":{"Weekdays":{},"Months":{}},"pt":{"Weekdays":{"Sun":"Sol","Mon":"Monsenhor","Tue":"Tue","Wed":"Wed","Thu":"Tu","Fri":"Frio","Sat":"Satisfeito","Sunday":"Domingo","Monday":"Segunda-feira","Tuesday":"Terça-feira","Wednesday":"Quarta-feira","Thursday":"Quinta-feira","Friday":"Sexta-feira","Saturday":"Sábado"},"Months":{"Jan":"Jan","Feb":"Fev","Mar":"Mar","Apr":"Abr","May":"Maio","Jun":"Jun","Jul":"Jul","Aug":"Au","Sep":"Sep","Oct":"O","Nov":"Não","Dec":"Dez","January":"Janeiro","Febuary":"Fevereiro","March":"Março","April":"Abril","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro"},"Today":"Hoje"},"ro":{"Weekdays":{},"Months":{}},"ru":{"Weekdays":{"Sun":"Солнце","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Фу","Fri":"Фри","Sat":"Sat","Sunday":"Воскресенье","Monday":"Понедельник","Tuesday":"Вторник","Wednesday":"Среда","Thursday":"Четверг","Friday":"Пятница","Saturday":"Суббота"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Май","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Октябрь","Nov":"Nov","Dec":"Дек","January":"Январь","Febuary":"Febuary","March":"Марта","April":"Апрель","June":"Июнь","July":"Июль","August":"Август","September":"Сентябрь","October":"Октябрь","November":"Ноябрь","December":"Декабрь"},"Today":"Сегодня"},"sk":{"Weekdays":{"Sun":"Slnko","Mon":"Slovenčina","Tue":"Tu","Wed":"Wed","Thu":"Thu","Fri":"Aktuality","Sat":"Aktuality","Sunday":"Nedeľa","Monday":"Pondelok","Tuesday":"Utorok","Wednesday":"Aktuality","Thursday":"Štvrtok","Friday":"Piatok","Saturday":"Sobota"},"Months":{"Jan":"Slovenčina","Feb":"Všeobecný","Mar":"Slovenčina","Apr":"Aktuality","May":"Máj","Jun":"Jún","Jul":"Júl","Aug":"Aktuality","Sep":"Seps","Oct":"Aktuality","Nov":"Novinka","Dec":"Aktuality","January":"Aktuality","Febuary":"Rezorty","March":"Marec","April":"Apríl","June":"Jún","July":"Júl","August":"Aktuality","September":"Septembra","October":"Október","November":"Novembra","December":"Decembra"},"Today":"Dnes"},"sl":{"Weekdays":{},"Months":{}},"sq":{"Weekdays":{},"Months":{}},"sr":{"Weekdays":{},"Months":{}},"sv":{"Weekdays":{"Sun":"Sol","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sattar","Sunday":"Söndag","Monday":"Måndag","Tuesday":"Tisdag","Wednesday":"Onsdag","Thursday":"Torsdag","Friday":"Fredag","Saturday":"Lördag"},"Months":{"Jan":"Jan","Feb":"Feb","Mar":"Mar","Apr":"Apr","May":"Maj","Jun":"Jun","Jul":"Jul","Aug":"Aug","Sep":"Sep","Oct":"Okt","Nov":"Nov","Dec":"Dec","January":"Januari","Febuary":"Febuary","March":"Mars","April":"April","June":"Juni","July":"Juli","August":"Augusti","September":"September","October":"Oktober","November":"November","December":"December"},"Today":"Idag"},"th":{"Weekdays":{},"Months":{}},"tl":{"Weekdays":{},"Months":{}},"tr":{"Weekdays":{"Sun":"Güneş","Mon":"Mon","Tue":"Tue","Wed":"Wed","Thu":"Thu","Fri":"Fri","Sat":"Sat","Sunday":"Pazar","Monday":"Pazartesi","Tuesday":"Salı","Wednesday":"Çarşamba","Thursday":"Perşembe","Friday":"Cuma","Saturday":"Cumartesi"},"Months":{"Jan":"Jan","Feb":"Şubat","Mar":"Mar","Apr":"Apr","May":"Mayıs","Jun":"Jun","Jul":"Temmuz","Aug":"Ağu","Sep":"Eylül","Oct":"Ekim","Nov":"Kasım","Dec":"Aralık","January":"Ocak","Febuary":"Şubat","March":"Mart","April":"Nisan","June":"Haziran","July":"Temmuz","August":"Ağustos","September":"Eylül","October":"Ekim","November":"Kasım","December":"Aralık"},"Today":"Bugün"},"uk":{"Weekdays":{"Sun":"Сонце","Mon":"Навігація","Tue":"Твитнуть","Wed":"Смоктати","Thu":"Чорти","Fri":"П'ятниця","Sat":"Сонце","Sunday":"Неділя","Monday":"Понеділок","Tuesday":"Вівторок","Wednesday":"Середа","Thursday":"Четвер","Friday":"П'ятниця","Saturday":"Субота"},"Months":{"Jan":"Мар","Feb":"Мар","Mar":"Мар","Apr":"Мар","May":"Травень","Jun":"Мар","Jul":"Мар","Aug":"Мар","Sep":"Мар","Oct":"Мар","Nov":"Мар","Dec":"Мар","January":"Січень","Febuary":"Маргарія","March":"Березень","April":"Квітень","June":"Червень","July":"Липень","August":"Серпень","September":"Вересень","October":"Жовтень","November":"Листопад","December":"Грудень"},"Today":"Сьогодні"},"zh":{"Weekdays":{},"Months":{}},"zt":{"Weekdays":{},"Months":{}}}`, ha = '{"en":{"Error":"Error"},"ar":{"Error":"خطأ"},"az":{"Error":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Error":"Čeština"},"da":{"Error":"Fejl"},"de":{"Error":"Fehler"},"el":{},"eo":{"Error":"Eraro"},"es":{"Error":"Error"},"et":{},"fa":{"Error":"خطای"},"fi":{"Error":"Virheitä"},"fr":{"Error":"Erreur"},"ga":{"Error":"Inis"},"he":{"Error":"טעות"},"hi":{"Error":"त्रुटि"},"hu":{"Error":"Hiba"},"id":{"Error":"Login"},"it":{"Error":"Errore"},"ja":{"Error":"エラー"},"ko":{"Error":"계정"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Error":"Erro"},"ro":{},"ru":{"Error":"Ошибка"},"sk":{"Error":"Chyba"},"sl":{},"sq":{},"sr":{},"sv":{"Error":"Fel"},"th":{},"tl":{},"tr":{"Error":"Hata"},"uk":{"Error":"Про"},"zh":{},"zt":{}}', ma = '{"en":{"Done":"Done"},"ar":{"Done":"تم"},"az":{"Done":"Qeydiyyat"},"bg":{},"bn":{},"ca":{},"cs":{"Done":"Čeština"},"da":{"Done":"Done"},"de":{"Done":"KAPITEL"},"el":{},"eo":{"Done":"Done"},"es":{"Done":"Hecho"},"et":{},"fa":{"Done":"انجام"},"fi":{"Done":"Tehty"},"fr":{"Done":"Done"},"ga":{"Done":"Arna"},"he":{"Done":"נעשה"},"hi":{"Done":"दान"},"hu":{"Done":"A"},"id":{"Done":"Login"},"it":{"Done":"Fatto"},"ja":{"Done":"ログイン"},"ko":{"Done":"한국어"},"lt":{},"lv":{},"ms":{},"nb":{},"nl":{},"pl":{},"pt":{"Done":"Feito"},"ro":{},"ru":{"Done":"Дон"},"sk":{"Done":"Hotovo"},"sl":{},"sq":{},"sr":{},"sv":{"Done":"Done"},"th":{},"tl":{},"tr":{"Done":"Done"},"uk":{"Done":"Сонце"},"zh":{},"zt":{}}', ba = {
  Button: JSON.parse(ua),
  Filter: JSON.parse(da),
  Pagination: JSON.parse(ca),
  Date: JSON.parse(pa),
  Form: JSON.parse(ha),
  Wizard: JSON.parse(ma)
}, V = (e, n) => {
  let a = e.split("."), t = ba[a[0]];
  if (t !== void 0) {
    t[n.value] === void 0 ? t = t.en : t = t[n.value];
    let l = 1;
    for (; t !== void 0 && l < a.length; )
      t = t[a[l]], l++;
  }
  if (t === void 0)
    throw `unable to locate message ${e}`;
  return t;
}, fa = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Add", l),
      icon: "plus",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Cancel", l),
      icon: "window-close",
      type: Y.danger
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), ga = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Delete", l),
      icon: "trash-alt",
      type: Y.danger
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), va = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Disable", l),
      icon: "times-circle",
      type: Y.danger
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), ya = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Download", l),
      icon: "download",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), _a = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Edit", l),
      icon: "edit",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), ka = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Enable", l),
      icon: "check",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Okay", l),
      icon: "check",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Sa = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Print", l),
      icon: "print",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Refresh", l),
      icon: "sync",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), $a = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Save", l),
      icon: "save",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Ma = /* @__PURE__ */ k({
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
    const a = n, t = e, l = q(P), s = y(() => t || {
      title: V("Button.Upload", l),
      icon: "upload",
      type: Y.primary
    });
    return (r, o) => (i(), I(Z, K(s.value, {
      onClick: o[0] || (o[0] = (c) => a("click"))
    }), null, 16));
  }
}), Da = /* @__PURE__ */ k({
  __name: "check-mark",
  setup(e) {
    return (n, a) => (i(), I(H, {
      icon: "check",
      size: S(oe).small
    }, null, 8, ["size"]));
  }
}), et = async (e, n, a) => {
  let t = await import(e);
  const l = Object.keys(t);
  return n && l.sort(n), l.filter((s) => a === void 0 || a.value.test(s)).map((s) => t[s]);
}, wa = /* @__PURE__ */ k({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = F(null), a = e, t = y(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return C(() => [a.url, a.filter], async () => {
      n.value = await et(a.url, a.sortMethod, t);
    }), re(async () => {
      n.value = await et(a.url, a.sortMethod, t);
    }), (l, s) => (i(!0), p(z, null, G(n.value, (r) => (i(), I(me(r), ce(ye(a.props)), null, 16))), 256));
  }
}), Ba = { class: "control has-icons-left" }, Fa = ["placeholder"], Oa = { class: "icon is-small is-left" }, xa = /* @__PURE__ */ k({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const a = e, t = n, l = q(P), s = y(() => V("Filter.Filter", l)), r = F(null);
    C([r], (c) => {
      c[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (c) => {
      c.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return re(() => {
      a.default_value && (r.value = a.default_value);
    }), (c, u) => (i(), p("div", Ba, [
      R(g("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: s.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        onKeypress: o
      }, null, 40, Fa), [
        [_e, r.value]
      ]),
      g("span", Oa, [
        A(H, { icon: "filter" })
      ])
    ]));
  }
}), Ja = {
  key: 0,
  class: "message-header"
}, Aa = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Na = { class: "message-body" }, Ta = /* @__PURE__ */ k({
  __name: "message",
  props: {
    type: { default: Y.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: X.normal }
  },
  setup(e) {
    const n = e, a = y(() => n.size === X.normal ? null : `is-${n.size}`), t = y(() => `is-${n.type}`);
    return (l, s) => (i(), p("article", {
      class: O(["message", a.value, t.value])
    }, [
      n.title ? (i(), p("div", Ja, [
        g("p", null, J(n.title), 1),
        n.hasDelete ? (i(), p("button", Aa)) : N("", !0)
      ])) : N("", !0),
      g("div", Na, [
        T(l.$slots, "default", {}, () => [
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
      class: O(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      T(a.$slots, "default", {}, () => [
        Q(J(n.message), 1)
      ])
    ], 2));
  }
}), Pa = {
  key: 0,
  class: "modal-background"
}, Ea = {
  key: 0,
  class: "title"
}, Ia = { class: "block" }, La = /* @__PURE__ */ k({
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
    const a = e, t = n, l = y(() => {
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
    }), s = y(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (i(), p("div", {
      class: O({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (i(), p("div", Pa)) : N("", !0),
      A(ft, {
        incoming: S(Be).fadeIn,
        outgoing: S(Be).fadeOut,
        speed: S(de).slower
      }, {
        default: L(() => [
          a.visible ? (i(), p("div", {
            key: 0,
            class: O(s.value)
          }, [
            A(H, {
              icon: l.value,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (i(), p("h1", Ea, J(a.header), 1)) : N("", !0),
            g("div", Ia, J(a.message), 1),
            a.hasClose ? (i(), I(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (c) => t("close")),
              size: S(oe).large
            }, null, 8, ["size"])) : N("", !0)
          ], 2)) : N("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Va = ["title", "disabled"], Wa = ["title", "disabled"], Ca = {
  key: 0,
  class: "pagination-list"
}, za = {
  key: 0,
  class: "pagination-ellipsis"
}, Ra = ["aria-label", "onOnclick"], Ua = /* @__PURE__ */ k({
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
    const a = e, t = n, l = q(P), s = y(() => V(a.usenext ? "Pagination.Previous" : "Pagination.Older", l)), r = y(() => V(a.usenext ? "Pagination.Next" : "Pagination.Newer", l)), o = y(() => a.buttontype ? `has-background-${a.buttontype}` : ""), c = y(() => V("Pagination.GoToPage", l)), u = y(() => a.hasprevious ?? !0), h = y(() => a.hasmore ?? !0), d = y(() => {
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
      class: O(["pagination", "is-centered", o.value, `is-${a.size}`, a.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: O(["pagination-previous", o.value]),
        title: s.value,
        onClick: b,
        disabled: u.value
      }, [
        A(H, {
          icon: "backward",
          size: S(oe).small
        }, null, 8, ["size"]),
        Q(" " + J(s.value), 1)
      ], 10, Va),
      g("a", {
        class: O(["pagination-next", o.value]),
        title: r.value,
        onClick: M,
        disabled: h.value
      }, [
        Q(J(r.value) + " ", 1),
        A(H, {
          icon: "forward",
          size: S(oe).small
        }, null, 8, ["size"])
      ], 10, Wa),
      a.totalpages !== void 0 ? (i(), p("ul", Ca, [
        (i(!0), p(z, null, G(d.value, (_) => (i(), p("li", null, [
          _ === -1 ? (i(), p("span", za, "…")) : (i(), p("a", {
            key: 1,
            class: O(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === a.currentpage ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${c.value} ${_}`,
            onOnclick: (v) => B(_)
          }, J(_ === -1 ? "" : _), 43, Ra))
        ]))), 256))
      ])) : N("", !0)
    ], 2)), [
      [se, a.hasmore || a.hasprevious]
    ]);
  }
});
function be(e) {
  return typeof e == "function" ? e() : S(e);
}
function ja(e, n = 200) {
  const a = F(!1), t = F(!1), l = y(() => !a.value && !t.value), s = F(!1), r = F(), o = F(), c = y(() => {
    if (e != null) {
      let h = be(e);
      return h instanceof Promise ? h : new Promise((d) => d(h));
    }
    return null;
  });
  let u;
  return C(
    () => be(c),
    (h) => {
      if (a.value = !1, t.value = !1, r.value = null, !h) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const d = Number(be(n)) || 0;
      d > 0 ? (s.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        s.value = !0;
      }, d)) : s.value = !0, h.then((b) => {
        h === be(c) && (o.value = be(b), t.value = !0);
      }).catch((b) => {
        h === be(c) && (r.value = b, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: l, isRejected: a, isResolved: t, isDelayElapsed: s, error: r, data: o };
}
const he = /* @__PURE__ */ k({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, a = q(P), t = y(() => V("Form.Error", a)), l = Ct(n), s = nt(ja(l.promise, l.pendingDelay));
    return (r, o) => (i(), p(z, null, [
      s.isDelayElapsed && !s.isRejected && !s.isResolved ? T(r.$slots, "pending", {
        key: 0,
        response: s.data
      }, () => [
        A(S(ie), {
          size: S(X).small
        }, null, 8, ["size"])
      ]) : N("", !0),
      s.isRejected ? T(r.$slots, "rejected", ce(K({ key: 1 }, s.error)), () => [
        A(S(pe), {
          message: `${t.value}:${s.error.message ?? s.error.toString()}`,
          type: S(te).danger
        }, null, 8, ["message", "type"])
      ]) : N("", !0),
      s.isResolved ? T(r.$slots, "default", {
        key: 2,
        response: s.data
      }) : N("", !0)
    ], 64));
  }
}), Ha = ["value", "max"], ie = /* @__PURE__ */ k({
  __name: "progress",
  props: {
    type: { default: Y.primary },
    size: { default: X.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, a = y(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (t, l) => (i(), p("progress", {
      class: O(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, J(a.value ? `${a.value}%` : null), 11, Ha));
  }
}), Ga = ["href"], Ya = {
  key: 0,
  class: "icon-text"
}, qa = { class: "icon" }, Ka = { key: 1 }, Qa = {
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
      l("itemClicked"), a.onClick !== void 0 && a.onClick();
    }, l = n;
    return (s, r) => {
      const o = st("navbar-item", !0);
      return i(), p("a", {
        class: O(["navbar-item", a.active ? "is-active" : "", a.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: a.href,
        onClick: t
      }, [
        a.icon !== void 0 && a.icon !== null ? (i(), p("span", Ya, [
          g("span", qa, [
            A(H, {
              icon: a.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, J(a.title), 1)
        ])) : (i(), p("span", Ka, J(a.title), 1)),
        a.childItems !== void 0 ? (i(), p("div", Qa, [
          (i(!0), p(z, null, G(a.childItems, (c) => (i(), I(o, K(c, {
            onItemClicked: r[0] || (r[0] = (u) => l("itemClicked"))
          }), null, 16))), 256))
        ])) : N("", !0)
      ], 10, Ga);
    };
  }
}), Xa = ["aria-label"], Za = { class: "navbar-brand" }, el = ["aria-expanded"], tl = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), al = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), ll = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), nl = [
  tl,
  al,
  ll
], sl = {
  key: 0,
  class: "navbar-start"
}, ol = { style: { width: "100px" } }, rl = {
  key: 1,
  class: "navbar-end"
}, il = { style: { width: "100px" } }, ul = /* @__PURE__ */ k({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const n = e, a = F(!1);
    return re(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case Oe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Oe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (t, l) => (i(), p("nav", {
      class: O(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      g("div", Za, [
        T(t.$slots, "brand"),
        g("a", {
          role: "button",
          class: O(["navbar-burger", a.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": a.value ? "true" : "false",
          onClick: l[0] || (l[0] = (s) => a.value = !a.value)
        }, nl, 10, el)
      ]),
      g("div", {
        class: O(["navbar-menu", a.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (i(), p("div", sl, [
          A(he, {
            promise: n.startItems
          }, {
            default: L(({ response: s }) => [
              (i(!0), p(z, null, G(s, (r) => (i(), I(tt, K(r, {
                onItemClicked: l[1] || (l[1] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              g("div", ol, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0),
        n.endItems !== void 0 ? (i(), p("div", rl, [
          A(he, {
            promise: n.endItems
          }, {
            default: L(({ response: s }) => [
              (i(!0), p(z, null, G(s, (r) => (i(), I(tt, K(r, {
                onItemClicked: l[2] || (l[2] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              g("div", il, [
                A(ie, {
                  size: S(X).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0)
      ], 2)
    ], 10, Xa));
  }
}), dl = /* @__PURE__ */ k({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("aside", {
      class: O(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), cl = { class: "menu-label" }, pl = /* @__PURE__ */ k({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("p", cl, [
      Q(J(n.message) + " ", 1),
      T(a.$slots, "default")
    ]));
  }
}), hl = ["href"], ml = {
  key: 0,
  class: "icon-text"
}, bl = { class: "icon" }, fl = { key: 1 }, _t = /* @__PURE__ */ k({
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
    return (t, l) => (i(), p("li", null, [
      g("a", {
        href: n.href,
        onClick: l[0] || (l[0] = (s) => a()),
        class: O(n.active ? "is-active" : "")
      }, [
        n.icon !== void 0 && n.icon !== null ? (i(), p("span", ml, [
          g("span", bl, [
            A(H, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, J(n.title), 1)
        ])) : (i(), p("span", fl, J(n.title), 1)),
        T(t.$slots, "default")
      ], 10, hl),
      T(t.$slots, "children")
    ]));
  }
}), gl = { class: "menu-list" }, vl = /* @__PURE__ */ k({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => {
      const l = st("menu-list", !0);
      return i(), p("ul", gl, [
        n.items !== null ? (i(), I(he, {
          key: 0,
          promise: n.items
        }, {
          default: L(({ response: s }) => [
            (i(!0), p(z, null, G(s, (r) => (i(), p("li", null, [
              A(_t, ce(ye(r)), null, 16),
              r.childItems !== void 0 ? (i(), I(l, {
                key: 0,
                items: r.childItems
              }, null, 8, ["items"])) : N("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            g("li", null, [
              A(ie, {
                size: S(X).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])) : N("", !0),
        T(a.$slots, "default")
      ]);
    };
  }
}), yl = /* @__PURE__ */ k({
  __name: "badge",
  props: {
    position: { default: Re.topRight },
    text: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("span", {
      class: O(["badge", `is-${n.position}`])
    }, [
      Q(J(n.text) + " ", 1),
      T(a.$slots, "default")
    ], 2));
  }
}), _l = /* @__PURE__ */ k({
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
    return (a, t) => (i(), I(me(a.is), {
      class: O([
        n.hasArrow ? "has-tooltop-arrow" : "",
        n.position ? `has-tooltip-${n.position}` : "",
        n.multiline ? "has-tooltip-multiline" : "",
        n.type ? `has-tooltip-${n.type}` : "",
        n.textAlign ? `has-tooltip-text-${n.text}` : "",
        n.alwaysActive ? "has-tooltip-active" : ""
      ]),
      "data-tooltip": a.text
    }, {
      default: L(() => [
        T(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "data-tooltip"]));
  }
}), kl = /* @__PURE__ */ k({
  __name: "tag",
  props: {
    type: { default: Y.primary },
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
    return (t, l) => (i(), p("span", {
      class: O(a.value)
    }, [
      T(t.$slots, "default")
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
    return (a, t) => (i(), p("span", {
      class: O(["tags", n.size === null ? "" : "are-" + n.size, n.addons ? "has-addons" : ""])
    }, [
      T(a.$slots, "default")
    ], 2));
  }
}), $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ft,
  Badge: yl,
  Button: Z,
  ButtonAdd: fa,
  ButtonCancel: gt,
  ButtonDelete: ga,
  ButtonDisable: va,
  ButtonDownload: ya,
  ButtonEdit: _a,
  ButtonEnable: ka,
  ButtonOkay: vt,
  ButtonPrint: Sa,
  ButtonRefresh: yt,
  ButtonSave: $a,
  ButtonUpload: Ma,
  CheckMark: Da,
  DynamicSlot: wa,
  Filter: xa,
  Icon: H,
  Menu: dl,
  MenuEntry: _t,
  MenuLabel: pl,
  MenuList: vl,
  Message: Ta,
  NavBar: ul,
  Notification: pe,
  PageNotification: La,
  Pagination: Ua,
  Progress: ie,
  Promised: he,
  Tag: kl,
  Tags: Sl,
  ToolTip: _l
}, Symbol.toStringTag, { value: "Module" })), Ml = /* @__PURE__ */ k({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const a = n, t = e, l = F(!1), s = F(!1), r = F(null), o = y(() => (t.disabled ?? !1) || s.value && t.handlesearch !== null), c = y(() => {
      let d = [];
      return o || d.push("has-cursor"), l.value ? d.push("is-move") : d.push("is-grab"), d;
    }), u = (d) => o.value ? (d.preventDefault(), !1) : (d.stopPropagation(), d.dataTransfer.setData("value", JSON.stringify(t.CopyData)), l.value = !0, a("started"), !0), h = () => {
      l.value = !1, s.value = !0, a("stopped");
    };
    return re(() => {
      if (t.handlesearch) {
        let d = $(r.value).find(t.handlesearch);
        d.length > 0 && (s.value = !0, d.on("mousedown", () => s.value = !1), d.on("mouseup", () => s.value = !0));
      }
    }), (d, b) => (i(), I(me(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: u,
      onDragend: h,
      class: O(c.value)
    }, {
      default: L(() => [
        T(d.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Dl = /* @__PURE__ */ k({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const a = e, t = n, l = F(!1), s = F(null), r = F(null);
    y(() => a.tag ?? "div");
    const o = (b) => {
      const M = r.value.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let m = ee.center;
      return b.x < B.x ? b.y < B.y ? m = ee.topLeft : m = ee.bottomLeft : b.y < B.y ? m = ee.topRight : m = ee.bottomRight, s.value = m, s.value;
    }, c = (b) => {
      b.preventDefault(), l.value = !0, t("itemEntered", o(b));
    }, u = (b) => {
      l.value = !0, t("itemExited", o(b));
    }, h = (b) => {
      b.preventDefault(), t("itemMoved", o(b));
    }, d = (b) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(b.dataTransfer.getData("value"))))
        return !1;
      b.stopPropagation(), b.preventDefault(), t("itemAdded", JSON.parse(b.dataTransfer.getData("value")), s.value), l.value = !1;
    };
    return (b, M) => (i(), I(me(a.tag), {
      ref_key: "handle",
      ref: r,
      class: O({ "is-bordered": l.value }),
      onDragenter: c,
      onDragleave: u,
      onDrop: d,
      onDragover: h
    }, {
      default: L(() => [
        T(b.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), kt = /* @__PURE__ */ k({
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
    return (t, l) => (i(), I(me(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: O(a.value)
    }, {
      default: L(() => [
        T(t.$slots, "default")
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
    const a = e, t = n, l = y(() => {
      var s = [];
      return a.type && s.push("is-" + a.type), a.outlined && s.push("is-outlined"), a.highlighted && s.push("is-highlighted"), a.icon && s.push("has-icon"), s;
    });
    return (s, r) => (i(), p("li", {
      class: O(l.value)
    }, [
      a.icon ? (i(), p("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        A(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      T(s.$slots, "default")
    ], 2));
  }
}), wl = /* @__PURE__ */ k({
  __name: "sortable",
  props: {
    Items: {},
    type: { default: Y.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const a = e, t = n, l = F([]), s = F(-1), r = F(-1), o = F(null);
    C(a.Items, (b, M) => {
      l.value = [...M];
    }), re(() => {
      a.Items !== null && (l.value = [...a.Items]);
    });
    const c = (b) => {
      var M = b.target.getBoundingClientRect(), B = {
        x: M.x + M.width / 2,
        y: M.y + M.height / 2
      };
      let m = ee.center;
      return b.y < B.y ? m = ee.top : m = ee.bottom, m;
    }, u = (b, M) => {
      M.stopPropagation(), s.value = b, M.dataTransfer.setData("value", null);
    }, h = (b, M) => {
      s.value && (M.stopPropagation(), b != s.value ? (r.value = b, o.value = c(M)) : (r.value = -1, o.value = null));
    }, d = (b) => {
      if (s.value) {
        b.stopPropagation();
        var M = r.value + (o.value == ee.top ? 0 : 1), B = l.value.splice(M, 1)[0];
        M >= s.value && M--, l.value.splice(M, 0, B), r.value = -1, o.value = null, s.value = -1, t("sorted", l.value);
      }
    };
    return (b, M) => (i(), I(kt, {
      type: b.type,
      compact: b.compact,
      outlined: b.outlined,
      highlighted: b.highlighted,
      onDrop: d
    }, {
      default: L(() => [
        (i(!0), p(z, null, G(l.value, (B, m) => (i(), p(z, null, [
          R(A(De, null, {
            default: L(() => [
              A(pe, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, r.value === m && s.value !== m && o.value === S(ee).top]
          ]),
          A(De, {
            draggable: "true",
            onDragstart: (E) => u(m, E),
            onDragend: M[0] || (M[0] = (E) => s.value = null),
            onDragover: (E) => h(m, E),
            class: O({ "has-cursor": !0, "is-move": r.value == m, "is-grab": r.value != m })
          }, {
            default: L(() => [
              T(b.$slots, "item", {
                item: B,
                index: m
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          R(A(De, null, {
            default: L(() => [
              A(pe, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [se, r.value === m && s.value !== m && o.value === S(ee).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Ml,
  DropZone: Dl,
  Sortable: wl
}, Symbol.toStringTag, { value: "Module" })), He = "HiddenFields", Ge = "DisabledFields", Fl = (e) => e, ne = (e, n) => {
  const a = n("Translate", Fl);
  return y(() => e.translate ?? a);
};
function Ye(e, n) {
  const a = n(He), t = n(Ge), l = y(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), s = y(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: l, disabledValues: s };
}
const St = (e) => {
  let n = [], a = [], t = 0;
  return e.forEach((l) => {
    let s = l.form_columns ?? 12;
    t + s > 12 && (n.push(a), a = [], t = 0), a.push(l), t += s, t === 12 && (n.push(a), a = [], t = 0);
  }), a.length > 0 && n.push(a), n;
};
async function qe(e) {
  let n = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? n = a : n = Promise.resolve(a);
  let t = await n, l = [];
  return t.value !== void 0 ? l = t.value : l = t, l;
}
const Ol = { class: "tagsfield field input is-grouped is-grouped-multiline" }, xl = { class: "control" }, Jl = { class: "tags has-addons" }, Al = { class: "tag is-link" }, Nl = ["onClick"], Tl = { key: 0 }, Pl = ["placeholder"], El = { class: "dropdown-menu" }, Il = { class: "dropdown-content" }, Ll = ["onClick"], Vl = {
  key: 1,
  class: "dropdown-item"
}, $t = /* @__PURE__ */ k({
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
    const t = a, l = e, s = ne(l, P), r = F([]), o = F(null), c = F(null), u = F(null), h = F(null);
    C(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (l.values != null && l.values != null) {
            let W = [];
            for (let f = 0; f < l.values.length && ((l.values[f].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || l.values[f].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && W.push(l.values[f]), W.length != 10); f++)
              ;
            c.value = W;
          } else {
            let f = await (await (l.fetch ?? fetch)(`${l.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            f.length > 10 && f.splice(10, f.length - 10), c.value = f;
          }
      } else
        c.value = null, $(h.value).empty();
    });
    const d = () => {
      if (r.value.length == 0)
        return null;
      const w = r.value.slice();
      return l.limit != null && l.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, b = async (w) => {
      if (w == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (f) => {
            if (f.id !== void 0 && f.name !== void 0)
              return f;
            {
              let D = await (await (l.fetch ?? fetch)(`${l.callbackurl}?${f.id === void 0 ? "q=" + encodeURIComponent(f) : "id=" + encodeURIComponent(f.id)}`)).json();
              return D.length > 0 ? (l.disabled && (D[0].readonly = !0), D[0]) : null;
            }
          })
        );
        r.value = W.filter((f) => f !== null), t("value_changed", { name: l.name, value: d() });
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
      r.value.push(w), m(), t("value_changed", { name: l.name, value: d() });
    }, v = (w) => {
      r.value.splice(w, 1), E(), t("value_changed", { name: l.name, value: d() });
    };
    return n({ getValue: d, setValue: b }), (w, W) => (i(), p("div", {
      class: "control autocomplete",
      onBlur: m,
      onClick: E
    }, [
      g("div", Ol, [
        (i(!0), p(z, null, G(r.value, (f, ae) => (i(), p("div", xl, [
          g("div", Jl, [
            g("a", Al, J(S(s)(f.name)), 1),
            f.readonly ? N("", !0) : (i(), p("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (D) => v(ae)
            }, null, 8, Nl))
          ])
        ]))), 256)),
        l.disabled ? N("", !0) : (i(), p("div", Tl, [
          R(g("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: S(s)(l.title ?? ""),
            contenteditable: "",
            class: O(u.value),
            onFocus: W[0] || (W[0] = (f) => {
              u.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (f) => {
              u.value = null;
            }),
            onKeydown: B,
            onPaste: M
          }, null, 42, Pl), [
            [se, r.value.length < l.limit || l.limit == null]
          ])
        ]))
      ]),
      g("div", {
        class: O(["dropdown", { "is-active": c.value != null && o.value != null && o.value != "" }])
      }, [
        g("div", El, [
          g("div", Il, [
            c.value != null && c.value.length > 0 ? (i(!0), p(z, { key: 0 }, G(c.value, (f) => (i(), p("a", {
              class: "dropdown-item",
              onClick: (ae) => _(f)
            }, J(S(s)(f.name)), 9, Ll))), 256)) : (i(), p("a", Vl, "No Results"))
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
    const a = e, t = n, l = ne(a, P);
    return (s, r) => (i(), I(Z, {
      type: s.sstyle,
      icon: a.icon ? a.icon : null,
      title: S(l)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Wl = { class: "checkbox is-block" }, Cl = ["value", "disabled"], Mt = /* @__PURE__ */ k({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = q(P), s = y(() => V("Form.Error", l)), r = a, o = ne(t, P), c = F([]), u = F(!1), h = y(async () => {
      if (t.values == null)
        return [];
      {
        let m = await qe(t.values), E = m.filter((_) => _.selected).map((_) => _.value);
        return c.value === null || c.value.length == 0 ? c.value = E.length > 0 ? [...E] : [] : (E = c.value, m = m.map((_) => ({
          label: _.label,
          value: _.value,
          selected: E.some((v) => v === _.value)
        }))), m;
      }
    });
    C(c, (m) => {
      r("value_changed", { name: t.name, value: d() });
    });
    const d = () => c.value.length == 0 ? null : c.value, b = (m) => {
      u.value = !0, c.value.splice(0), m !== null && (c.value = [...m]), u.value = !1, r("value_changed", { name: t.name, value: d() });
    }, { hiddenValues: M, disabledValues: B } = Ye(t.name, P);
    return n({ getValue: d, setValue: b }), (m, E) => (i(), p("div", null, [
      A(he, { promise: h.value }, {
        default: L(({ response: _ }) => [
          _ !== null ? (i(!0), p(z, { key: 0 }, G(_, (v) => R((i(), p("label", Wl, [
            R(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": E[0] || (E[0] = (w) => c.value = w),
              disabled: t.disabled || S(B).some((w) => w === v.value.toString())
            }, null, 8, Cl), [
              [Ve, c.value]
            ]),
            Q(" " + J(S(o)(v.label)), 1)
          ], 512)), [
            [se, !S(M).some((w) => w === v.value.toString())]
          ])), 256)) : N("", !0)
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(pe), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), zl = { class: "checkbox" }, Rl = ["name", "disabled"], Ul = {
  key: 0,
  class: "help is-danger"
}, Dt = /* @__PURE__ */ k({
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
    const t = e, l = a, s = ne(t, P), r = y(() => s.value(t.label)), o = F(!1);
    return C(o, (h) => l("value_changed", { name: t.name, value: h })), n({ getValue: () => o.value, setValue: (h) => {
      o.value = h;
    } }), (h, d) => (i(), p("label", zl, [
      R(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (b) => o.value = b)
      }, null, 8, Rl), [
        [Ve, o.value]
      ]),
      Q(" " + J(r.value) + " ", 1),
      t.required ? (i(), p("span", Ul, "*")) : N("", !0)
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
}, Se = (e, n, a) => {
  let t = "";
  switch (e) {
    case "d":
    case "dd":
      t += `${j(a.getDate().toString(), "0", e.length)}`;
      break;
    case "ddd":
    case "dddd":
      let s = "";
      switch (a.getDay()) {
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
      t += `${V("Date.Weekdays." + (e.length > 3 ? s : s.substring(0, 3)), n)}`;
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
      t += `${V("Date.Months." + (e.length > 3 ? u : u.substring(0, 3)), n)}`;
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
      for (var l = a.getFullYear().toString(); l.length > 2; )
        l = l.substring(1);
      t += `${j(l.toString(), "0", e.length)}`;
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
  let t = "", l = "";
  for (var s = 0; s < a.length; s++)
    switch (a.charAt(s)) {
      case "\\":
        l != "" && (t += Se(l, n, e), l = ""), t += a.charAt(s + 1), s++;
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
        l != "" && l.charAt(0) != a.charAt(s) ? (t += Se(l, n, e), l = "") : l += a.charAt(s);
        break;
      default:
        l != "" && (t += Se(l, n, e), l = ""), t += a.charAt(s);
        break;
    }
  return l != "" && (t += Se(l, n, e), l = ""), t;
}, jl = { class: "control" }, Hl = ["name", "id", "disabled"], at = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ke = /* @__PURE__ */ k({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a, s = F(null), r = y(() => {
      if (s.value == null || s.value == "")
        return null;
      var u = Number(s.value.substring(3, 5)), h = Number(s.value.substring(0, 2)) % 12 + u / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * u / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return C(s, (u) => {
      l("value_changed", { name: t.name, value: u });
    }), n({ getValue: () => s.value, setValue: (u) => {
      if (u != null && at.test(u)) {
        var h = at.exec(u);
        u = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      s.value = u;
    } }), (u, h) => (i(), p("div", jl, [
      R(g("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d),
        disabled: t.disabled,
        style: We(r.value)
      }, null, 12, Hl), [
        [_e, s.value]
      ])
    ]));
  }
});
const Gl = { class: "control has-icons-left has-icons-right" }, Yl = ["name", "id", "placeholder", "disabled"], ql = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), Kl = { class: "modal-content" }, Ql = { class: "panel is-primary is-dateselect" }, Xl = { class: "panel-heading" }, Zl = { class: "columns card-header-title" }, en = { class: "column" }, tn = { class: "column has-text-centered" }, an = { class: "column has-text-right" }, ln = { class: "panel-block" }, nn = { class: "table is-striped has-text-centered" }, sn = ["onClick"], on = { key: 0 }, rn = {
  colspan: "100%",
  class: "has-text-centered"
}, un = { class: "panel-block" }, ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), $e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), wt = /* @__PURE__ */ k({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = F(null), l = e, s = a, r = F(!1), o = F(null), c = F(null), u = nt({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = q(P), d = we({
      Sun: y(() => V("Date.Weekdays.Sun", h)),
      Mon: y(() => V("Date.Weekdays.Mon", h)),
      Tue: y(() => V("Date.Weekdays.Tue", h)),
      Wed: y(() => V("Date.Weekdays.Wed", h)),
      Thu: y(() => V("Date.Weekdays.Thu", h)),
      Fri: y(() => V("Date.Weekdays.Fri", h)),
      Sat: y(() => V("Date.Weekdays.Sat", h))
    }), b = y(() => o.value !== null && (l.includeTime ? $e : ke).test(o.value)), M = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!$e.test(o.value) && l.includeTime)
          return null;
        if (!l.includeTime && !ke.test(o.value))
          return null;
        if (ke.test(o.value) && l.includeTime)
          return null;
        let D = l.includeTime ? $e.exec(o.value) : ke.exec(o.value);
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
    C(o, (D) => {
      if (D == null)
        s("value_changed", { name: l.name, value: null }), u.Month = (/* @__PURE__ */ new Date()).getMonth(), u.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ke.test(D) && !$e.test(D)) {
        D = D.replaceAll(/[^0-9]/g, "");
        for (var x = [], U = 0; U < D.length; U += 2)
          U == 4 ? (x.push(D.substring(U, Math.min(D.length - U, 4) + U)), U += 2) : x.push(D.substring(U, Math.min(D.length - U, 2) + U));
        x.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(x[0]) || x.splice(0), x.length > 1 && (/^[0-3]/.test(x[1]) ? /^(01|03|05|07|08|10|12)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(x[1]) || x.splice(1) : /^(02|04|06|09|11)$/.test(x[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(x[1]) || x.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(x[1]) || x.splice(1) : x.splice(1)), x.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(x[3]) || x.splice(3)), x.length > 4 && (/^[0-5][0-9]?$/.test(x[4]) || x.splice(4))), D = x.join(""), !l.includeTime && D.length > 8 && (D = D.substring(0, 8)), D.length >= 2 && (D = D.substring(0, 2) + "-" + (D.length > 2 ? D.substring(2) : "")), D.length >= 5 && (D = D.substring(0, 5) + "-" + (D.length > 5 ? D.substring(5) : "")), D.length >= 9 && l.includeTime && (D = D.substring(0, 9) + " " + (D.length > 9 ? D.substring(9) : "")), D.length >= 11 && (D = D.substring(0, 11) + ":" + (D.length > 11 ? D.substring(11) : "")), o.value = D;
      } else {
        var le = M();
        b && s("value_changed", { name: l.name, value: le }), u.Month = le.getMonth(), u.Year = le.getFullYear();
      }
    });
    const B = y(() => fe(new Date(u.Year, u.Month, 1), h, "MMMM")), m = y(() => {
      var D = [], x = new Date(u.Year, u.Month, 1);
      x = Pe(x, x.getDay() * -1);
      for (var U = M(), le = Pe(new Date(u.Year, u.Month, 1), 32).getMonth(); x.getMonth() != le; ) {
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
      D == null ? o.value = null : o.value = fe(D, h, "dd-MM-yyyy" + (l.includeTime ? " HH:mm" : ""));
    } });
    const _ = (D) => {
      D.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + D.value : o.value = `${j((u.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year} ${D.value}`;
    }, v = (D) => {
      if (!D.Disabled && !D.isSelected)
        if (o.value === null)
          o.value = `${j(D.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}` + (l.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var x = o.value.split(" ");
          x[0] = `${j(D.Number.toString(), "0", 2)}-${j((u.Month + 1).toString(), "0", 2)}-${u.Year}`, o.value = `${x[0]}${x.length > 1 ? " " + x[1] : ""}`;
        }
    }, w = () => {
      o.value = c.value, r.value = !1;
    }, W = () => {
      l.disabled || (c.value = o.value, r.value = !0);
    }, f = () => {
      l.disabled || (o.value = null);
    }, ae = (D) => {
      u.Month + D == -1 ? (u.Year = u.Year - 1, u.Month = 11) : u.Month + D == 12 ? (u.Year = u.Year + 1, u.Month = 0) : u.Month += D;
    };
    return (D, x) => (i(), p("div", null, [
      g("div", Gl, [
        R(g("input", {
          class: "input is-expanded",
          name: l.name,
          id: l.name,
          type: "text",
          "onUpdate:modelValue": x[0] || (x[0] = (U) => o.value = U),
          placeholder: "DD-MM-YYYY" + (l.includeTime ? " HH:mm" : ""),
          disabled: l.disabled
        }, null, 8, Yl), [
          [_e, o.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
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
        class: O(["modal", { "is-active": r.value }])
      }, [
        ql,
        g("div", Kl, [
          g("div", Ql, [
            g("div", Xl, [
              g("div", Zl, [
                g("div", en, [
                  A(S(H), {
                    icon: "arrow-circle-left",
                    onClick: x[1] || (x[1] = (U) => ae(-1))
                  })
                ]),
                g("div", tn, J(B.value) + " " + J(u.Year), 1),
                g("div", an, [
                  A(S(H), {
                    icon: "arrow-circle-right",
                    onClick: x[2] || (x[2] = (U) => ae(1))
                  })
                ])
              ])
            ]),
            g("div", ln, [
              g("table", nn, [
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
                  (i(!0), p(z, null, G(m.value, (U) => (i(), p("tr", null, [
                    (i(!0), p(z, null, G(U, (le) => (i(), p("td", {
                      class: O(["is-unselectable", le.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", le.isToday ? "has-background-primary-dark" : "", le.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Ae) => v(le)
                    }, J(le.Number), 11, sn))), 256))
                  ]))), 256))
                ]),
                l.includeTime ? (i(), p("tfoot", on, [
                  g("tr", null, [
                    g("td", rn, [
                      A(Ke, {
                        ref: t.value,
                        name: `${l.name}-time`,
                        disabled: l.disabled,
                        onValue_changed: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : N("", !0)
              ])
            ]),
            g("div", un, [
              A(S(vt), {
                addonclass: "card-footer-item",
                disabled: !b.value,
                onClick: x[3] || (x[3] = (U) => r.value = !1)
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
const Bt = /* @__PURE__ */ k({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: a }) {
    let t, l;
    const s = Qt(P);
    xe([`${s}summernote-lite.min.css`]), [t, l] = zt(() => import(`${s}summernote`)), await t, l();
    const r = F(null), o = e, c = a;
    return C(() => o.disabled, (d) => {
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
    }), Rt(() => {
      $(r.value).summernote("destroy");
    }), (d, b) => (i(), p("div", {
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
    const n = e, a = ne(n, P);
    return (t, l) => (i(), I(me(n.subtype), null, {
      default: L(() => [
        Q(J(S(a)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), dn = ["name"], Ft = /* @__PURE__ */ k({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a, s = F(null);
    return C(s, (c) => l("value_changed", { name: t.name, value: c })), n({ getValue: () => s.value, setValue: (c) => {
      s.value = c;
    } }), (c, u) => R((i(), p("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, dn)), [
      [_e, s.value]
    ]);
  }
}), cn = ["name", "disabled", "min", "max", "step"], Ot = /* @__PURE__ */ k({
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
    const t = e, l = a, s = F(null), r = () => {
      if (s.value === "")
        return null;
      let c = parseInt(s.value);
      return t.min !== void 0 && c < t.min * 1 || t.max !== void 0 && c > t.max * 1 ? null : c;
    }, o = (c) => {
      s.value = c === null ? "" : c.toString();
    };
    return C([s], (c) => l("value_changed", { name: t.name, value: r() })), n({ getValue: r, setValue: o }), (c, u) => R((i(), p("input", {
      type: "number",
      class: "input",
      name: c.name,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
      disabled: c.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, cn)), [
      [_e, s.value]
    ]);
  }
}), pn = ["id"], Le = /* @__PURE__ */ k({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, P);
    return (t, l) => (i(), p("p", {
      id: n.name
    }, J(S(a)(n.label)), 9, pn));
  }
}), hn = { class: "radio" }, mn = ["name", "value", "disabled"], bn = /* @__PURE__ */ g("br", null, null, -1), xt = /* @__PURE__ */ k({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = q(P), s = y(() => V("Form.Error", l)), r = a, o = ne(t, P), c = F(null), u = function() {
      return c.value;
    };
    C(c, (B) => {
      r("value_changed", { name: t.name, value: u() });
    });
    const h = y(async () => {
      if (t.values == null)
        return [];
      {
        let B = await qe(t.values);
        return c.value === null && B.some((m) => m.selected) && (c.value = B.find((m) => m.selected).value), B.map((m) => ({
          label: m.label,
          value: m.value,
          selected: c.value === m.value
        }));
      }
    }), d = (B) => {
      c.value = B;
    }, { hiddenValues: b, disabledValues: M } = Ye(t.name, P);
    return n({ getValue: u, setValue: d }), (B, m) => (i(), p("div", null, [
      A(he, { promise: h.value }, {
        default: L(({ response: E }) => [
          B.values != null ? (i(!0), p(z, { key: 0 }, G(E, (_) => (i(), p(z, null, [
            R(g("label", hn, [
              g("input", {
                type: "radio",
                name: t.name,
                value: _.value,
                class: "radio",
                disabled: t.disabled || S(M).some((v) => v === _.value.toString())
              }, null, 8, mn),
              Q(" " + J(S(o)(_.label)), 1)
            ], 512), [
              [se, !S(b).some((v) => v === _.value.toString())]
            ]),
            bn
          ], 64))), 256)) : N("", !0)
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(pe), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), fn = { class: "select" }, gn = ["id", "name", "multiple", "disabled"], vn = ["value", "selected", "disabled"], yn = ["label"], _n = ["value", "selected", "disabled"], Jt = (e, n, a) => {
  let t = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, l = a.length;
  return a.push(t), n.values.forEach((s) => {
    s.values === void 0 ? t.values.push(s) : a = Jt(t.label, s, a);
  }), a[l].values.length == 0 && a.splice(l, 1), a;
}, At = /* @__PURE__ */ k({
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
    const t = e, l = q(P), s = y(() => V("Form.Error", l)), r = a, o = ne(t, P), c = F(null), u = F(!1), h = y(async () => {
      if (t.values == null)
        return [];
      {
        let m = await qe(t.values), E = m.filter((v) => v.selected).map((v) => v.value);
        m.some((v) => v.values !== void 0) && m.filter((v) => v.values !== void 0).forEach((v) => {
          E = E.concat(
            v.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), c.value === null || c.value.length === 0 ? c.value = null : (m = m.map((v) => {
          let w = v;
          return w.values !== void 0 && (w.values = w.values.map((W) => (W.selected = c.value.some((f) => f === W.value), W))), w;
        }), c.value.forEach((v) => {
          m.some((w) => w.value !== void 0 && w.value === v || w.values !== void 0 && w.values.some((W) => W.value === v)) || m.push({
            label: v,
            value: v
          });
        }));
        let _ = [];
        return m.forEach((v) => {
          v.values === void 0 ? _.push(v) : _ = Jt(v.label, v, _);
        }), _;
      }
    }), d = () => c.value == null || c.value.length == 0 ? null : t.multiple ? c.value.slice() : Array.isArray(c.value) ? c.value[0] : c.value;
    C(c, () => {
      u.value || r("value_changed", { name: t.name, value: d() });
    }), C(u, (m) => {
      m || r("value_changed", { name: t.name, value: d() });
    });
    const b = (m) => {
      u.value = !0, m != null ? t.multiple ? c.value = Array.isArray(m) ? m : [m] : c.value = m : t.multiple ? c.value = [] : c.value = null, u.value = !1;
    }, { hiddenValues: M, disabledValues: B } = Ye(t.name, P);
    return n({ getValue: d, setValue: b }), (m, E) => (i(), p("div", fn, [
      h.value != null ? (i(), I(he, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: _ }) => [
          R(g("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: O([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": E[0] || (E[0] = (v) => c.value = v),
            disabled: t.disabled
          }, [
            _ != null ? (i(!0), p(z, { key: 0 }, G(_, (v) => (i(), p(z, null, [
              v.values == null ? R((i(), p("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: S(B).some((w) => w === v.value.toString())
              }, J(S(o)(v.label)), 9, vn)), [
                [se, !S(M).some((w) => w === v.value.toString())]
              ]) : N("", !0),
              v.values != null ? (i(), p("optgroup", {
                key: 1,
                label: S(o)(v.label)
              }, [
                (i(!0), p(z, null, G(v.values, (w) => R((i(), p("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: S(B).some((W) => W === w.value.toString())
                }, J(S(o)(w.label)), 9, _n)), [
                  [se, !S(M).some((W) => W === w.value.toString())]
                ])), 256))
              ], 8, yn)) : N("", !0)
            ], 64))), 256)) : N("", !0)
          ], 10, gn), [
            [Ut, c.value]
          ])
        ]),
        pending: L(() => [
          A(S(ie))
        ]),
        rejected: L(() => [
          A(S(pe), {
            type: S(te).danger,
            message: s.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : N("", !0)
    ]));
  }
}), kn = { class: "field" }, Sn = ["id", "name", "disabled"], $n = ["for"], Mn = {
  key: 0,
  class: "help is-danger"
}, Nt = /* @__PURE__ */ k({
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
    const t = e, l = a, s = ne(t, P), r = F(!1);
    return C(r, (u) => l("value_changed", { name: t.name, value: u })), n({ getValue: () => r.value, setValue: (u) => {
      r.value = u;
    } }), (u, h) => (i(), p("div", kn, [
      R(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": h[0] || (h[0] = (d) => r.value = d),
        disabled: t.disabled
      }, null, 8, Sn), [
        [Ve, r.value]
      ]),
      g("label", { for: u.name }, [
        Q(J(S(s)(t.label)) + " ", 1),
        t.required ? (i(), p("span", Mn, "*")) : N("", !0)
      ], 8, $n)
    ]));
  }
}), Dn = ["type", "name", "disabled", "maxlength"], Tt = /* @__PURE__ */ k({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a, s = F(null);
    return C(s, (c) => l("value_changed", { name: t.name, value: c })), n({ getValue: () => s.value, setValue: (c) => {
      s.value = c;
    } }), (c, u) => R((i(), p("input", {
      type: c.subtype,
      class: "input",
      name: c.name,
      disabled: c.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h)
    }, null, 8, Dn)), [
      [jt, s.value]
    ]);
  }
}), wn = ["name", "rows", "cols", "maxlength", "disabled"], Pt = 9, ge = String.fromCharCode(Pt), Me = String.fromCharCode(10), Et = /* @__PURE__ */ k({
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
    const t = e, l = a, s = F(null);
    C(s, (u) => {
      l("value_changed", { name: t.name, value: u });
    });
    const r = () => s.value, o = (u) => {
      s.value = u;
    };
    n({ getValue: r, setValue: o });
    const c = (u) => {
      if (t.supportsTab) {
        let h = r();
        switch (u.keyCode) {
          case Pt:
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
      "onUpdate:modelValue": h[0] || (h[0] = (d) => s.value = d)
    }, null, 40, wn)), [
      [_e, s.value]
    ]);
  }
}), Bn = { class: "columns" }, It = /* @__PURE__ */ k({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a, s = P(He), r = P(Ge);
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
    const h = t.inputs.map((d) => F(null));
    return (d, b) => (i(), p("div", Bn, [
      (i(!0), p(z, null, G(t.inputs, (M, B) => (i(), I(Lt, {
        ref_for: !0,
        ref: (m) => S(h)[B] = m,
        input: M,
        onValue_changed: b[0] || (b[0] = (m) => l("value_changed", m)),
        onButton_clicked: b[1] || (b[1] = (m) => l("button_clicked", m)),
        disabled: t.disabled || S(r).some((m) => m === M.name),
        hidden: S(s).some((m) => m === M.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Fn = ["id", "name"], On = /* @__PURE__ */ k({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a;
    let s = [];
    F(!1);
    const r = y(() => {
      let h = St(t.fields);
      return s = h.map((d) => F(null)), h;
    });
    return n({ isValid: () => !s.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => s.forEach((d) => d.setValue(h)), getValue: () => {
      var h = {};
      return s.forEach((d) => {
        h = $.extend(h, d.getValue());
      }), h;
    } }), (h, d) => R((i(), p("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (i(!0), p(z, null, G(r.value, (b, M) => (i(), I(It, {
        ref_for: !0,
        ref: (B) => S(s)[M] = B,
        inputs: b,
        disabled: t.disabled,
        onValue_changed: d[0] || (d[0] = (B) => l("value_changed", B)),
        onButton_clicked: d[1] || (d[1] = (B) => l("button_clicked", B))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Fn)), [
      [se, !t.hidden]
    ]);
  }
}), xn = ["for"], Jn = {
  key: 0,
  class: "help is-danger"
}, An = { class: "control" }, Nn = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Tn = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Lt = /* @__PURE__ */ k({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = F(null), l = a, s = e, r = ne(s, P), o = we(F(s.input.type)), c = y(() => {
      let f = null;
      switch (s.input.type) {
        case "autocomplete":
          f = $t;
          break;
        case "button":
          f = Ee;
          break;
        case "checkbox-group":
          f = Mt;
          break;
        case "checkbox":
          f = Dt;
          break;
        case "date":
          f = wt;
          break;
        case "full-editor":
          f = Bt;
          break;
        case "header":
          f = Ie;
          break;
        case "hidden":
          f = Ft;
          break;
        case "number":
          f = Ot;
          break;
        case "paragraph":
          f = Le;
          break;
        case "radio-group":
          f = xt;
          break;
        case "select":
          f = At;
          break;
        case "switch":
          f = Nt;
          break;
        case "text":
          f = Tt;
          break;
        case "textarea":
          f = Et;
          break;
        case "time":
          f = Ke;
          break;
        case "subform":
          f = On;
          break;
      }
      return f;
    }), u = function(f) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(f);
    };
    re(() => {
      t.value !== null && s.input.value !== void 0 && s.input.value !== null && u(s.input.value);
    });
    const h = y(() => s.input.disabled ?? s.disabled ?? !1), d = y(() => `is-${s.input.form_columns ?? 12}`), b = y(() => s.input.name), M = y(() => s.input.processVariable ?? s.input.name), B = y(() => Nn.some((f) => f === s.input.type) && s.input.label !== void 0 && s.input.label !== null), m = y(() => {
      let f = $.extend({}, s.input);
      return delete f.type, f.className != null && delete f.className, f.form_columns != null && delete f.form_columns, Tn.some((ae) => ae === s.input.type) && (f.translate = s.translate), f.disabled = s.disabled, f;
    }), E = (f) => {
      if (f.value !== void 0 && f.value !== null && Array.isArray(f.value)) {
        let ae = [...f.value];
        f.value = ae;
      }
      l("value_changed", f);
    }, _ = (f) => {
      l("button_clicked", f);
    }, v = () => {
      if (t.value != null && t.value.getValue != null) {
        let f = t.value.getValue();
        return f != null && Array.isArray(f) ? [...f] : f;
      }
      return null;
    };
    return n({ setValue: u, fieldName: b, type: o, altFieldName: M, getValue: v, isValid: () => {
      if (s.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (s.input.required ?? !1) {
        let f = v();
        return f != null && (Array.isArray(f) ? f.length > 0 : !0) && f.toString() !== "";
      }
      return !0;
    }, setValues: (f) => {
      if (s.input.type === "subform" && t.value !== null)
        t.value.setValues(f);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (f, ae) => R((i(), p("div", {
      class: O(["field column", [d.value]])
    }, [
      s.input.type == "header" ? (i(), I(Ie, {
        key: 0,
        subtype: s.input.subtype,
        label: s.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : s.input.type == "paragraph" ? (i(), I(Le, {
        key: 1,
        name: s.input.name,
        label: s.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : s.input.type == "button" ? (i(), I(Ee, {
        key: 2,
        name: s.input.name,
        sstyle: s.input.style,
        className: s.input.className,
        icon: s.input.icon,
        label: s.input.label,
        disabled: h.value,
        onButton_clicked: _,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (i(), p(z, { key: 3 }, [
        B.value ? (i(), p("label", {
          key: 0,
          class: "label",
          for: s.input.name
        }, [
          Q(J(S(r)(s.input.label)) + " ", 1),
          s.input.required ? (i(), p("span", Jn, "*")) : N("", !0)
        ], 8, xn)) : N("", !0),
        g("div", An, [
          (i(), I(me(c.value), K(m.value, {
            onValue_changed: E,
            ref_key: "inp",
            ref: t
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [se, !s.hidden]
    ]);
  }
});
const Pn = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, En = /* @__PURE__ */ k({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, l = a, s = ne(t, P);
    Ne("Translate", (_) => s.value(_));
    let r = [];
    const o = y(() => {
      if (t.elements != null) {
        let _ = St(t.elements);
        return r = _.map((v) => F(null)), _;
      } else
        return null;
    }), c = () => {
      let _ = {};
      return r.forEach((v) => {
        _ = $.extend(_, v.getValue());
      }), _;
    }, u = (_) => {
      r.forEach((v) => v.setValue(_));
    }, h = () => !r.some((_) => !(_.isValid === void 0 || _.isValid())), d = F([]);
    Ne(He, we(d));
    const b = (_) => {
      Array.isArray(_) ? d.value = [...d.value, ..._] : d.value.push(_);
    }, M = (_) => {
      Array.isArray(_) ? d.value = d.value.filter((v) => _.indexOf(v) >= 0) : d.value = d.value.filter((v) => v !== _);
    }, B = F([]);
    return Ne(Ge, we(B)), n({ getValues: c, setValues: u, isValid: h, hideField: b, showField: M, disableField: (_) => {
      Array.isArray(_) ? B.value = [...B.value, ..._] : B.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? B.value = B.value.filter((v) => _.indexOf(v) >= 0) : B.value = B.value.filter((v) => v !== _);
    } }), (_, v) => (i(), p("form", Pn, [
      o.value != null ? (i(!0), p(z, { key: 0 }, G(o.value, (w, W) => (i(), I(It, {
        ref_for: !0,
        ref: (f) => S(r)[W] = f,
        inputs: w,
        key: W,
        onValue_changed: v[0] || (v[0] = (f) => l("value_changed", f)),
        onButton_clicked: v[1] || (v[1] = (f) => l("button_clicked", f)),
        disabled: _.disabled
      }, null, 8, ["inputs", "disabled"]))), 128)) : N("", !0)
    ]));
  }
}), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: $t,
  Button: Ee,
  Checkbox: Dt,
  CheckboxGroup: Mt,
  ComponentForm: En,
  DateField: wt,
  FormComponent: Lt,
  FullEditor: Bt,
  Header: Ie,
  Hidden: Ft,
  NumberField: Ot,
  Paragraph: Le,
  RadioGroup: xt,
  Select: At,
  Switch: Nt,
  Text: Tt,
  TextArea: Et,
  Time: Ke
}, Symbol.toStringTag, { value: "Module" })), Ln = { class: "hero-body" }, Vn = { class: "title" }, Wn = {
  key: 0,
  class: "subtitle"
}, Cn = /* @__PURE__ */ k({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("section", {
      class: O(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + n.type])
    }, [
      g("div", Ln, [
        g("p", Vn, J(n.title), 1),
        n.subtitle ? (i(), p("p", Wn, J(n.subtitle), 1)) : N("", !0)
      ])
    ], 2));
  }
}), zn = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, l] of n)
    a[t] = l;
  return a;
}, Rn = {}, Un = { class: "box" };
function jn(e, n) {
  return i(), p("div", Un, [
    T(e.$slots, "default")
  ]);
}
const Hn = /* @__PURE__ */ zn(Rn, [["render", jn]]), Gn = {
  key: 0,
  class: "icon is-clickable"
}, Yn = /* @__PURE__ */ k({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (l, s) => (i(), p("li", {
      class: O({ "is-active": a.active })
    }, [
      g("a", {
        onClick: s[0] || (s[0] = (r) => t("click"))
      }, [
        a.icon ? (i(), p("span", Gn, [
          A(S(H), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        Q(" " + J(a.title), 1)
      ])
    ], 2));
  }
}), qn = /* @__PURE__ */ k({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Fe.left },
    size: { default: X.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, a = y(() => {
      let t = ["breadcrumb"];
      return n.alignment && n.alignment !== Fe.left && t.push(`is-${n.alignment}`), n.size && n.size !== X.normal && t.push(`is-${n.size}`), n.seperator && t.push(`has-${n.seperator}-seperator`), t;
    });
    return (t, l) => (i(), p("nav", {
      class: O(a.value),
      "aria-label": "breadcrumbs"
    }, [
      g("ul", null, [
        T(t.$slots, "default")
      ])
    ], 2));
  }
}), Kn = {
  key: 0,
  class: "card-icon"
}, Qn = { class: "card-icon-wrapper" }, Xn = { class: "card-header" }, Zn = { class: "card-content" }, es = { class: "card-footer" }, Vt = /* @__PURE__ */ k({
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
    return (l, s) => (i(), p("div", {
      class: O(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (i(), p("div", Kn, [
        g("div", Qn, [
          A(H, {
            icon: n.icon,
            size: S(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : N("", !0),
      g("div", Xn, [
        T(l.$slots, "header", ce(ye(t)))
      ]),
      g("div", Zn, [
        T(l.$slots, "content")
      ]),
      g("div", es, [
        T(l.$slots, "footer", ce(ye(a)))
      ])
    ], 2));
  }
}), ts = /* @__PURE__ */ k({
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
      T(a.$slots, "default")
    ], 2));
  }
}), as = /* @__PURE__ */ k({
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
      return n.size && t.push(`is-${n.size}`), n.offset && t.push(`is-offset-${n.offset}`), n.border && (n.border.some((l) => l === Je.all) ? t.push("is-bordered") : n.border.forEach((l) => t.push(`is-bordered-${l}`))), n.addonclass && t.push(n.addonclass), t;
    });
    return (t, l) => (i(), p("div", {
      class: O(["column", a.value])
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), ls = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), ns = { class: "modal-content" }, ss = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, os = /* @__PURE__ */ k({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (i(), p("div", {
      class: O({ modal: !0, "is-active": n.display }),
      style: We(`z-index:${n.zIndex}`)
    }, [
      ls,
      g("div", ns, [
        T(a.$slots, "default")
      ]),
      n.hasClose ? (i(), p("button", ss)) : N("", !0)
    ], 6));
  }
}), rs = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), is = {
  key: 0,
  class: "card-icon"
}, us = { class: "card-icon-wrapper" }, ds = { class: "modal-card-head" }, cs = { class: "modal-card-body" }, ps = { class: "modal-card-foot" }, hs = /* @__PURE__ */ k({
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
    const a = e, t = n, l = {
      addonclass: "card-footer-item"
    }, s = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, r = y(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, c) => (i(), p("div", {
      class: O(["modal", { "is-active": a.show }])
    }, [
      rs,
      g("div", {
        class: O(["modal-card", r.value])
      }, [
        a.icon !== null ? (i(), p("div", is, [
          g("div", us, [
            A(H, {
              icon: a.icon,
              size: S(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : N("", !0),
        g("div", ds, [
          T(o.$slots, "header", ce(ye(s))),
          o.hasClose ? (i(), p("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: c[0] || (c[0] = (u) => t("close"))
          })) : N("", !0)
        ]),
        g("div", cs, [
          T(o.$slots, "content")
        ]),
        g("div", ps, [
          T(o.$slots, "footer", ce(ye(l)))
        ])
      ], 2)
    ], 2));
  }
}), ms = {
  key: 0,
  class: "panel-heading"
}, bs = {
  key: 1,
  class: "panel-tabs"
}, fs = { class: "panel-block" }, gs = /* @__PURE__ */ k({
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
      let l = [];
      return n.type && l.push(`is-${n.type}`), n.fullWidth && l.push("is-fullwidth"), n.fullHeight && l.push("is-fullheight"), l;
    });
    return (l, s) => (i(), p("div", {
      class: O(["panel", t.value])
    }, [
      n.hasHeader ? (i(), p("div", ms, [
        T(l.$slots, "header")
      ])) : N("", !0),
      n.hasTabs ? (i(), p("div", bs, [
        T(l.$slots, "tabs")
      ])) : N("", !0),
      (i(!0), p(z, null, G(a.value, (r) => (i(), p("div", fs, [
        T(l.$slots, r)
      ]))), 256))
    ], 2));
  }
}), vs = /* @__PURE__ */ k({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, a = y(() => {
      let l = [];
      return n.scrollable && l.push("table-container"), n.fixedHeader && n.scrollable && l.push("is-fixed"), l;
    }), t = y(() => {
      let l = ["table", "is-striped", "is-hoverable"];
      return n.fixedHeader && !n.scrollable && l.push("is-fixed"), n.fullWidth && l.push("is-fullwidth"), n.narrow && l.push("is-narrow"), l;
    });
    return (l, s) => (i(), p("div", {
      class: O(a.value)
    }, [
      g("table", {
        class: O(t.value)
      }, [
        g("thead", null, [
          T(l.$slots, "thead")
        ]),
        g("tbody", null, [
          T(l.$slots, "tbody")
        ]),
        g("tfoot", null, [
          T(l.$slots, "tfoot")
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
    const a = n, t = e, l = (s) => {
      (t.href === null || t.href === void 0) && (s.preventDefault(), a("click"));
    };
    return (s, r) => (i(), p("li", {
      class: O({ "is-active": t.active })
    }, [
      g("a", {
        href: s.href,
        onClick: l
      }, [
        t.icon ? (i(), p("span", _s, [
          A(S(H), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        g("span", null, J(t.title), 1)
      ], 8, ys)
    ], 2));
  }
}), Ss = /* @__PURE__ */ k({
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
    return (t, l) => (i(), p("div", {
      class: O(a.value)
    }, [
      g("ul", null, [
        T(t.$slots, "default")
      ])
    ], 2));
  }
}), $s = /* @__PURE__ */ k({
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
      return n.size && t.push(`is-${n.size}`), n.borders && (n.borders.some((l) => l === Je.all) ? t.push("is-bordered") : n.borders.forEach((l) => t.push(`is-bordered-${l}`))), n.vertical && t.push("is-vertical"), t;
    });
    return (t, l) => (i(), p("div", {
      class: O(a.value)
    }, [
      T(t.$slots, "default")
    ], 2));
  }
}), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Cn,
  Box: Hn,
  Breadcrumbs: qn,
  BreadcrumbsItem: Yn,
  Card: Vt,
  Column: as,
  ColumnContainer: ts,
  List: kt,
  ListItem: De,
  Modal: os,
  ModalCard: hs,
  Panel: gs,
  Table: vs,
  Tabs: Ss,
  TabsTab: ks,
  Tile: $s
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
    const a = `${ea(P)}chart.umd.min.js`, t = F(null), l = e, s = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, c = y(() => {
      var u = "";
      return l.width && (u = `width:${l.width}px;`), l.height && (u += `height:${l.height}px;`), u;
    });
    return C(() => l.type, (u) => {
      r != null && (r.type = u ?? "line");
    }), C(
      () => l.labels,
      (u) => {
        r != null && (r.data.labels = u, (l.showRefresh == null || !l.showRefresh) && o());
      },
      { deep: !0 }
    ), C(
      () => l.datasets,
      (u) => {
        r != null && (r.data.datasets = u, (l.showRefresh == null || !l.showRefresh) && o());
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
            position: `${l.legendPosition}`,
            labels: {
              filter: (d, b) => d.text != null
            },
            onClick: function(d, b) {
              s("legendItemClick", r, b);
            }
          }
        }
      };
      l.scales != null && l.scales != null && (u.scales = l.scales), l.tooltips != null && l.tooltips != null && (u.tooltips = l.tooltips);
      const { Chart: h } = await Ce(a, ["Chart"]);
      r = new h(t.value.getContext("2d"), {
        type: l.type == null ? "line" : l.type,
        data: {
          datasets: l.datasets,
          labels: l.labels
        },
        options: u
      }), r.update();
    }), (u, h) => (i(), I(Vt, null, Ht({
      content: L(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: t,
          style: We(c.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      l.title ? {
        name: "header",
        fn: L((d) => [
          g("h3", {
            class: O(d.headerClass)
          }, J(l.title), 3)
        ]),
        key: "0"
      } : void 0,
      l.showRefresh != null && l.showRefresh != null && l.showRefresh ? {
        name: "footer",
        fn: L((d) => [
          A(yt, K(d, { onClick: o }), null, 16)
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
  setup(e, { expose: n, emit: a }) {
    const t = `${ta(P)}src-noconflict/ace.js`, l = e, s = a, r = F(null), o = F(null), c = function() {
      return o.getValue() == "" ? null : o.getValue();
    }, u = function(d) {
      o.setValue(d ?? "");
    };
    C(() => l.readonly, (d) => {
      o.setReadOnly(d == null || d == null ? !1 : d);
    }), C(() => l.value, (d) => {
      u(d);
    }), C(() => l.language, (d) => {
      o.getSession().setMode(d);
    });
    const h = y(() => {
      let d = Number.MAX_SAFE_INTEGER;
      if (l.autocompletes != null && l.autocompletes != null) {
        for (let b = 0; b < l.autocompletes.length; b++)
          l.autocompletes[b].Method.indexOf(".") >= 0 ? d = Math.min(d, l.autocompletes[b].Method.indexOf(".")) : d = Math.min(d, l.autocompletes[b].Method.length);
        if (d > 3 && l.autocompletes.length > 0) {
          let b = !0, M = l.autocompletes[0].Method.substring(0, 3);
          for (let B = 0; B < l.autocompletes.length; B++)
            if (l.autocompletes[B].Method.substring(0, 3) != M) {
              b = !1;
              break;
            }
          b && (d = 3);
        }
      }
      return d;
    });
    return n({ getValue: c, setValue: u }), re(async () => {
      const { ace: d } = await Ce(t, ["ace"]);
      o.value = Gt(d.edit(r.value.$el, {
        mode: l.language,
        selectionStyle: "text",
        minLines: 20,
        maxLines: 50,
        enableBasicAutocompletion: !0
      })), o.value.setReadOnly(l.readonly === void 0 || l.readonly === null ? !1 : l.readonly), l.value !== null && l.value !== void 0 && o.value.setValue(l.value), o.on("change", () => s("value_changed", c())), l.autocompletes !== null && l.autocompletes !== void 0 && (o.value.setOptions({
        enableBasicAutocompletion: !0,
        enableLiveAutocompletion: !0
      }), o.value.completers = [{
        identifierRegexps: [/[a-zA-Z0-9_\.]+/],
        getCompletions: function(b, M, B, m, E) {
          var _ = [];
          if (m = m.toUpperCase(), m.length >= h && (_ = l.autocompletes.filter((v) => v.Method.toUpperCase().startsWith(m) && v.Method.length > m.legend).map((v) => ({
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
}), xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chart: Fs,
  CodeWriter: Os
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Ns,
  Button: Ts,
  ButtonAdd: Ps,
  ButtonCancel: Es,
  ButtonDelete: Is,
  ButtonDisable: Ls,
  ButtonDownload: Vs,
  ButtonEdit: Ws,
  ButtonEnable: Cs,
  ButtonOkay: zs,
  ButtonPrint: Rs,
  ButtonRefresh: Us,
  ButtonSave: js,
  ButtonUpload: Hs,
  CheckMark: Gs,
  DynamicSlot: Ys,
  Filter: qs,
  Icon: Ks,
  Message: Qs,
  Notification: Xs,
  PageNotification: Zs,
  Pagination: eo,
  Promised: to,
  Progress: ao,
  NavBar: lo,
  Menu: no,
  MenuLabel: so,
  MenuList: oo,
  MenuEntry: ro,
  ToolTip: io,
  Badge: uo,
  Tag: co,
  Tags: po
} = $l, { DraggableItem: ho, DropZone: mo, Sortable: bo } = Bl, {
  AutoComplete: fo,
  CheckboxGroup: go,
  Checkbox: vo,
  DateField: yo,
  ComponentForm: _o,
  FullEditor: ko,
  Header: So,
  Hidden: $o,
  NumberField: Mo,
  Paragraph: Do,
  RadioGroup: wo,
  Select: Bo,
  Switch: Fo,
  Text: Oo,
  TextArea: xo,
  Time: Jo,
  FormComponent: Ao
} = In, {
  Banner: No,
  Box: To,
  BreadcrumbsItem: Po,
  Breadcrumbs: Eo,
  Card: Io,
  Column: Lo,
  ColumnContainer: Vo,
  List: Wo,
  ListItem: Co,
  ModalCard: zo,
  Panel: Ro,
  Table: Uo,
  Tabs: jo,
  TabsTab: Ho,
  Tile: Go,
  Modal: Yo
} = Ms, { AVAIABLE_SKINS: qo, setSkin: Ko } = Bs, {
  ColorTypes: Qo,
  NoticeTypes: Xo,
  Sizes: Zo,
  AnimationSpeeds: er,
  AnimationTypes: tr,
  IconSizes: ar,
  ChartLegendPositions: lr,
  ChartTypes: nr,
  DropZoneQuadrants: sr,
  BreadCrumbAlignments: or,
  BreadCrumbSeperators: rr,
  ColumnContainerModifiers: ir,
  ColumnSizes: ur,
  ColumnOffsetSizes: dr,
  BorderTypes: cr,
  TabAlignments: pr,
  TabStyles: hr,
  TileSizes: mr,
  TileTypes: br,
  FixedNavBarPositions: fr,
  FixedMenuPositions: gr,
  BadgePositiions: vr,
  ToolTipPositions: yr,
  ToolTipTextAlignments: _r
} = qt, { loadNonEs6Module: kr } = Yt, { Chart: Sr, CodeWriter: $r } = xs;
export {
  qo as AVAIABLE_SKINS,
  Ns as Animation,
  er as AnimationSpeeds,
  tr as AnimationTypes,
  fo as AutoComplete,
  uo as Badge,
  vr as BadgePositiions,
  No as Banner,
  cr as BorderTypes,
  To as Box,
  or as BreadCrumbAlignments,
  rr as BreadCrumbSeperators,
  Eo as Breadcrumbs,
  Po as BreadcrumbsItem,
  Ts as Button,
  Ps as ButtonAdd,
  Es as ButtonCancel,
  Is as ButtonDelete,
  Ls as ButtonDisable,
  Vs as ButtonDownload,
  Ws as ButtonEdit,
  Cs as ButtonEnable,
  zs as ButtonOkay,
  Rs as ButtonPrint,
  Us as ButtonRefresh,
  js as ButtonSave,
  Hs as ButtonUpload,
  Io as Card,
  Sr as Chart,
  lr as ChartLegendPositions,
  nr as ChartTypes,
  Gs as CheckMark,
  vo as Checkbox,
  go as CheckboxGroup,
  $r as CodeWriter,
  Qo as ColorTypes,
  Lo as Column,
  Vo as ColumnContainer,
  ir as ColumnContainerModifiers,
  dr as ColumnOffsetSizes,
  ur as ColumnSizes,
  _o as ComponentForm,
  yo as DateField,
  ho as DraggableItem,
  mo as DropZone,
  sr as DropZoneQuadrants,
  Ys as DynamicSlot,
  qs as Filter,
  gr as FixedMenuPositions,
  fr as FixedNavBarPositions,
  Ao as FormComponent,
  ko as FullEditor,
  So as Header,
  $o as Hidden,
  Ks as Icon,
  ar as IconSizes,
  Wo as List,
  Co as ListItem,
  no as Menu,
  ro as MenuEntry,
  so as MenuLabel,
  oo as MenuList,
  Qs as Message,
  Yo as Modal,
  zo as ModalCard,
  lo as NavBar,
  Xo as NoticeTypes,
  Xs as Notification,
  Mo as NumberField,
  Zs as PageNotification,
  eo as Pagination,
  Ro as Panel,
  Do as Paragraph,
  ao as Progress,
  to as Promised,
  wo as RadioGroup,
  Bo as Select,
  Zo as Sizes,
  bo as Sortable,
  Fo as Switch,
  pr as TabAlignments,
  hr as TabStyles,
  Uo as Table,
  jo as Tabs,
  Ho as TabsTab,
  co as Tag,
  po as Tags,
  Oo as Text,
  xo as TextArea,
  Go as Tile,
  mr as TileSizes,
  br as TileTypes,
  Jo as Time,
  io as ToolTip,
  yr as ToolTipPositions,
  _r as ToolTipTextAlignments,
  kr as loadNonEs6Module,
  Ko as setSkin
};
//# sourceMappingURL=components.esm.js.map
