import { computed as g, defineComponent as S, openBlock as d, createBlock as E, Transition as Pl, withCtx as L, renderSlot as I, createElementBlock as h, normalizeClass as x, inject as J, ref as B, watch as C, createVNode as A, createCommentVNode as N, toDisplayString as T, mergeProps as G, createElementVNode as v, normalizeProps as me, guardReactiveProps as _e, onMounted as re, createSlots as Ll, normalizeStyle as Le, unref as _, Fragment as V, renderList as Y, resolveDynamicComponent as ve, withDirectives as U, vModelText as ge, createTextVNode as Z, vShow as le, toRefs as zl, reactive as Ze, vModelCheckbox as ze, readonly as we, withAsyncContext as Wl, onUnmounted as Vl, vModelSelect as Cl, vModelDynamic as Ul, provide as Ne } from "vue";
import "jquery";
const We = (e) => new Promise((n) => {
  let a = [];
  var t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, l) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let o = document.createElement("link"), u = new Promise((i) => {
        o.onload = function() {
          i(s);
        };
      });
      a[l] = u, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", s), o.setAttribute("href", s);
    } else
      a[l] = Promise.resolve(s);
  }), Promise.all(a).then((s) => {
    n(s);
  });
});
var q = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(q || {}), ee = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(ee || {}), te = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(te || {}), ie = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ie || {}), Be = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(Be || {}), et = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(et || {}), Ve = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ve || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), X = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(X || {}), Oe = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Oe || {}), tt = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(tt || {}), at = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(at || {}), st = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(st || {}), nt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(nt || {}), xe = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(xe || {}), lt = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(lt || {}), ot = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(ot || {}), rt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(it || {}), Fe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Fe || {});
const Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ie,
  AnimationTypes: Be,
  BorderTypes: xe,
  BreadCrumbAlignments: Oe,
  BreadCrumbSeperators: tt,
  ChartLegendPositions: Ve,
  ChartTypes: et,
  ColorTypes: q,
  ColumnContainerModifiers: at,
  ColumnOffsetSizes: nt,
  ColumnSizes: st,
  DropZoneQuadrants: X,
  FixedNavBarPositions: Fe,
  IconSizes: oe,
  NoticeTypes: ee,
  Sizes: te,
  TabAlignments: lt,
  TabStyles: ot,
  TileSizes: rt,
  TileTypes: it
}, Symbol.toStringTag, { value: "Module" })), H = (e) => {
  const n = e("Language", "en");
  return g(() => n);
}, jl = (e) => {
  const n = e("IconSet", "solid");
  return g(() => n);
}, Hl = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), Yl = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), ql = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Kl = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ut = /* @__PURE__ */ S({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ie.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = ql(J);
    We(`${n}animate.min.css`);
    const a = e, t = (p) => {
      switch (p) {
        case ie.slower:
          return 3e3;
        case ie.fast:
          return 800;
        case ie.faster:
          return 500;
        default:
          return 2e3;
      }
    }, s = (p) => p === void 0 ? "" : `animate__${p}`, l = (p) => p === void 0 ? "animate__slow" : `animate__${p}`, r = g(() => ({
      enter: t(a.speedIn ?? a.speed),
      leave: t(a.speedOut ?? a.speed)
    })), o = g(() => [
      "animate__animated",
      s(a.incoming ?? a.inout),
      l(a.speedIn ?? a.speed)
    ].join(" ")), u = g(() => [
      "animate__animated",
      s(a.outgoing ?? a.inout),
      l(a.speedOut ?? a.speed)
    ].join(" ")), i = g(() => [
      "animate__animated",
      "animate__infinite",
      s(a.repeating),
      l(a.speed ?? "")
    ].join(" "));
    return (p, c) => a.repeating ? (d(), h("div", {
      key: 1,
      class: x(i.value)
    }, [
      I(p.$slots, "default")
    ], 2)) : (d(), E(Pl, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": u.value,
      duration: r.value
    }, {
      default: L(() => [
        I(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), Gl = "brands.min.css", Ql = "all.min.css", qe = "icon_styles", Xl = /\.fa-([^: ]+):before/g, Zl = /url\(([^)]+)\)/g, be = B([]), Ae = B(!1), Ke = async (e, n) => {
  if (!Ae.value) {
    Ae.value = !0;
    let a;
    be.value.length === 0 ? (a = document.createElement("style"), a.setAttribute("id", qe), document.head.appendChild(a), a.setAttribute("type", "text/css")) : a = document.getElementById(qe), be.value = [" "];
    let t = await Promise.all([
      fetch(`${e}${Gl}`),
      fetch(`${e}${Ql}`),
      fetch(`${e}${n}.min.css`)
    ]), s = await t[0].text();
    [...s.matchAll(Xl)].forEach((l) => {
      be.value.push(l[1]);
    }), s = `${await t[1].text()}
    ${await t[2].text()}
    ${s}`, [...s.matchAll(Zl)].forEach((l) => {
      s = s.replace(l[0], `url(${new URL(l[1], e)})`);
    }), a.innerText = s, be.value.splice(0, 1), Ae.value = !1;
  }
}, K = /* @__PURE__ */ S({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = Yl(J), a = jl(J);
    be.value.length === 0 ? Ke(n, a.value) : C(a, () => Ke(n, a.value));
    const t = e, s = g(() => {
      let l = [];
      return t.icon !== void 0 && t.icon !== null && (be.value.indexOf(t.icon) >= 0 ? l.push("fa-brands") : (l.push("fa-ico"), l.push(`fa-${a.value}`)), l.push((t.icon.indexOf("fa-") == -1 ? " fa-" : " ") + t.icon)), t.size !== void 0 && t.size !== null && t.size !== oe.normal && l.push(`fa-${t.size}`), l;
    });
    return (l, r) => (d(), h("i", {
      class: x(s.value)
    }, null, 2));
  }
});
const eo = ["disabled"], to = {
  key: 0,
  class: "icon is-small"
}, ao = { key: 1 }, Q = /* @__PURE__ */ S({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: q.primary },
    size: { default: te.small },
    title: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = g(() => {
      let l = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && l.push("disabled"), a.addonclass && l.push(a.addonclass), a.hidemobile && l.push("is-hidden-mobile"), a.hidetablet && l.push("is-hidden-tablet-only"), a.hidedesktop && l.push("is-hidden-desktop is-hidden-widescreen"), l;
    });
    return (l, r) => (d(), h("button", {
      class: x(s.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (d(), h("span", to, [
        A(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      a.title != null ? (d(), h("span", ao, T(a.title), 1)) : N("", !0)
    ], 10, eo));
  }
}), dt = {
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
}, ct = {
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
}, pt = {
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
}, ht = {}, bt = {}, mt = {}, ft = {
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
}, vt = {
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
}, gt = {
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
}, yt = {}, _t = {
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
}, kt = {
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
}, $t = {}, St = {
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
}, Dt = {
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
}, Mt = {
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
}, wt = {
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
}, Bt = {
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
}, Ot = {
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
}, Ft = {
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
}, xt = {
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
}, Jt = {
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
}, Nt = {
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
}, At = {
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
}, Tt = {}, Et = {}, It = {}, Pt = {}, Lt = {}, zt = {}, Wt = {
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
}, Vt = {}, Ct = {
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
}, Ut = {
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
}, Rt = {}, jt = {}, Ht = {}, Yt = {
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
}, qt = {}, Kt = {}, Gt = {
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
}, Qt = {
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
}, Xt = {}, Zt = {}, so = {
  en: dt,
  ar: ct,
  az: pt,
  bg: ht,
  bn: bt,
  ca: mt,
  cs: ft,
  da: vt,
  de: gt,
  el: yt,
  eo: _t,
  es: kt,
  et: $t,
  fa: St,
  fi: Dt,
  fr: Mt,
  ga: wt,
  he: Bt,
  hi: Ot,
  hu: Ft,
  id: xt,
  it: Jt,
  ja: Nt,
  ko: At,
  lt: Tt,
  lv: Et,
  ms: It,
  nb: Pt,
  nl: Lt,
  pl: zt,
  pt: Wt,
  ro: Vt,
  ru: Ct,
  sk: Ut,
  sl: Rt,
  sq: jt,
  sr: Ht,
  sv: Yt,
  th: qt,
  tl: Kt,
  tr: Gt,
  uk: Qt,
  zh: Xt,
  zt: Zt
}, no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ct,
  az: pt,
  bg: ht,
  bn: bt,
  ca: mt,
  cs: ft,
  da: vt,
  de: gt,
  default: so,
  el: yt,
  en: dt,
  eo: _t,
  es: kt,
  et: $t,
  fa: St,
  fi: Dt,
  fr: Mt,
  ga: wt,
  he: Bt,
  hi: Ot,
  hu: Ft,
  id: xt,
  it: Jt,
  ja: Nt,
  ko: At,
  lt: Tt,
  lv: Et,
  ms: It,
  nb: Pt,
  nl: Lt,
  pl: zt,
  pt: Wt,
  ro: Vt,
  ru: Ct,
  sk: Ut,
  sl: Rt,
  sq: jt,
  sr: Ht,
  sv: Yt,
  th: qt,
  tl: Kt,
  tr: Gt,
  uk: Qt,
  zh: Xt,
  zt: Zt
}, Symbol.toStringTag, { value: "Module" })), ea = {
  Filter: "Filter"
}, ta = {
  Filter: "فيلم"
}, aa = {
  Filter: "Qeydiyyat"
}, sa = {}, na = {}, la = {}, oa = {
  Filter: "Čeština"
}, ra = {
  Filter: "Filter"
}, ia = {
  Filter: "Filter"
}, ua = {}, da = {
  Filter: "Filtero"
}, ca = {
  Filter: "Filtro"
}, pa = {}, ha = {
  Filter: "فیلتر"
}, ba = {
  Filter: "Filter"
}, ma = {
  Filter: "Filtre"
}, fa = {
  Filter: "Scagaire"
}, va = {
  Filter: "Filter"
}, ga = {
  Filter: "फिल्टर"
}, ya = {
  Filter: "Szűrő"
}, _a = {
  Filter: "Login"
}, ka = {
  Filter: "Filtro"
}, $a = {
  Filter: "フィルター"
}, Sa = {
  Filter: "제품정보"
}, Da = {}, Ma = {}, wa = {}, Ba = {}, Oa = {}, Fa = {}, xa = {
  Filter: "Filtro"
}, Ja = {}, Na = {
  Filter: "Фильтр"
}, Aa = {
  Filter: "Filter"
}, Ta = {}, Ea = {}, Ia = {}, Pa = {
  Filter: "Filter"
}, La = {}, za = {}, Wa = {
  Filter: "Filtre"
}, Va = {
  Filter: "Фільтри"
}, Ca = {}, Ua = {}, lo = {
  en: ea,
  ar: ta,
  az: aa,
  bg: sa,
  bn: na,
  ca: la,
  cs: oa,
  da: ra,
  de: ia,
  el: ua,
  eo: da,
  es: ca,
  et: pa,
  fa: ha,
  fi: ba,
  fr: ma,
  ga: fa,
  he: va,
  hi: ga,
  hu: ya,
  id: _a,
  it: ka,
  ja: $a,
  ko: Sa,
  lt: Da,
  lv: Ma,
  ms: wa,
  nb: Ba,
  nl: Oa,
  pl: Fa,
  pt: xa,
  ro: Ja,
  ru: Na,
  sk: Aa,
  sl: Ta,
  sq: Ea,
  sr: Ia,
  sv: Pa,
  th: La,
  tl: za,
  tr: Wa,
  uk: Va,
  zh: Ca,
  zt: Ua
}, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ta,
  az: aa,
  bg: sa,
  bn: na,
  ca: la,
  cs: oa,
  da: ra,
  de: ia,
  default: lo,
  el: ua,
  en: ea,
  eo: da,
  es: ca,
  et: pa,
  fa: ha,
  fi: ba,
  fr: ma,
  ga: fa,
  he: va,
  hi: ga,
  hu: ya,
  id: _a,
  it: ka,
  ja: $a,
  ko: Sa,
  lt: Da,
  lv: Ma,
  ms: wa,
  nb: Ba,
  nl: Oa,
  pl: Fa,
  pt: xa,
  ro: Ja,
  ru: Na,
  sk: Aa,
  sl: Ta,
  sq: Ea,
  sr: Ia,
  sv: Pa,
  th: La,
  tl: za,
  tr: Wa,
  uk: Va,
  zh: Ca,
  zt: Ua
}, Symbol.toStringTag, { value: "Module" })), Ra = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer"
}, ja = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer"
}, Ha = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə"
}, Ya = {}, qa = {}, Ka = {}, Ga = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština"
}, Qa = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer"
}, Xa = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit"
}, Za = {}, es = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli"
}, ts = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer"
}, as = {}, ss = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer"
}, ns = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa"
}, ls = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer"
}, os = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh"
}, rs = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש"
}, is = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया"
}, us = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb"
}, ds = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login"
}, cs = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo"
}, ps = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース"
}, hs = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더"
}, bs = {}, ms = {}, fs = {}, vs = {}, gs = {}, ys = {}, _s = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais"
}, ks = {}, $s = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer"
}, Ss = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka"
}, Ds = {}, Ms = {}, ws = {}, Bs = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare"
}, Os = {}, Fs = {}, xs = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer"
}, Js = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова"
}, Ns = {}, As = {}, ro = {
  en: Ra,
  ar: ja,
  az: Ha,
  bg: Ya,
  bn: qa,
  ca: Ka,
  cs: Ga,
  da: Qa,
  de: Xa,
  el: Za,
  eo: es,
  es: ts,
  et: as,
  fa: ss,
  fi: ns,
  fr: ls,
  ga: os,
  he: rs,
  hi: is,
  hu: us,
  id: ds,
  it: cs,
  ja: ps,
  ko: hs,
  lt: bs,
  lv: ms,
  ms: fs,
  nb: vs,
  nl: gs,
  pl: ys,
  pt: _s,
  ro: ks,
  ru: $s,
  sk: Ss,
  sl: Ds,
  sq: Ms,
  sr: ws,
  sv: Bs,
  th: Os,
  tl: Fs,
  tr: xs,
  uk: Js,
  zh: Ns,
  zt: As
}, io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ja,
  az: Ha,
  bg: Ya,
  bn: qa,
  ca: Ka,
  cs: Ga,
  da: Qa,
  de: Xa,
  default: ro,
  el: Za,
  en: Ra,
  eo: es,
  es: ts,
  et: as,
  fa: ss,
  fi: ns,
  fr: ls,
  ga: os,
  he: rs,
  hi: is,
  hu: us,
  id: ds,
  it: cs,
  ja: ps,
  ko: hs,
  lt: bs,
  lv: ms,
  ms: fs,
  nb: vs,
  nl: gs,
  pl: ys,
  pt: _s,
  ro: ks,
  ru: $s,
  sk: Ss,
  sl: Ds,
  sq: Ms,
  sr: ws,
  sv: Bs,
  th: Os,
  tl: Fs,
  tr: xs,
  uk: Js,
  zh: Ns,
  zt: As
}, Symbol.toStringTag, { value: "Module" })), Ts = {
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
}, Es = {
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
}, Is = {
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
}, Ps = {
  Weekdays: {},
  Months: {}
}, Ls = {
  Weekdays: {},
  Months: {}
}, zs = {
  Weekdays: {},
  Months: {}
}, Ws = {
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
}, Vs = {
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
}, Cs = {
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
}, Us = {
  Weekdays: {},
  Months: {}
}, Rs = {
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
}, js = {
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
}, Hs = {
  Weekdays: {},
  Months: {}
}, Ys = {
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
}, qs = {
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
}, Ks = {
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
}, Gs = {
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
}, Qs = {
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
}, Xs = {
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
}, Zs = {
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
}, en = {
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
}, tn = {
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
}, an = {
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
}, sn = {
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
}, nn = {
  Weekdays: {},
  Months: {}
}, ln = {
  Weekdays: {},
  Months: {}
}, on = {
  Weekdays: {},
  Months: {}
}, rn = {
  Weekdays: {},
  Months: {}
}, un = {
  Weekdays: {},
  Months: {}
}, dn = {
  Weekdays: {},
  Months: {}
}, cn = {
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
}, pn = {
  Weekdays: {},
  Months: {}
}, hn = {
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
}, bn = {
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
}, mn = {
  Weekdays: {},
  Months: {}
}, fn = {
  Weekdays: {},
  Months: {}
}, vn = {
  Weekdays: {},
  Months: {}
}, gn = {
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
}, yn = {
  Weekdays: {},
  Months: {}
}, _n = {
  Weekdays: {},
  Months: {}
}, kn = {
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
}, $n = {
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
}, Sn = {
  Weekdays: {},
  Months: {}
}, Dn = {
  Weekdays: {},
  Months: {}
}, uo = {
  en: Ts,
  ar: Es,
  az: Is,
  bg: Ps,
  bn: Ls,
  ca: zs,
  cs: Ws,
  da: Vs,
  de: Cs,
  el: Us,
  eo: Rs,
  es: js,
  et: Hs,
  fa: Ys,
  fi: qs,
  fr: Ks,
  ga: Gs,
  he: Qs,
  hi: Xs,
  hu: Zs,
  id: en,
  it: tn,
  ja: an,
  ko: sn,
  lt: nn,
  lv: ln,
  ms: on,
  nb: rn,
  nl: un,
  pl: dn,
  pt: cn,
  ro: pn,
  ru: hn,
  sk: bn,
  sl: mn,
  sq: fn,
  sr: vn,
  sv: gn,
  th: yn,
  tl: _n,
  tr: kn,
  uk: $n,
  zh: Sn,
  zt: Dn
}, co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Es,
  az: Is,
  bg: Ps,
  bn: Ls,
  ca: zs,
  cs: Ws,
  da: Vs,
  de: Cs,
  default: uo,
  el: Us,
  en: Ts,
  eo: Rs,
  es: js,
  et: Hs,
  fa: Ys,
  fi: qs,
  fr: Ks,
  ga: Gs,
  he: Qs,
  hi: Xs,
  hu: Zs,
  id: en,
  it: tn,
  ja: an,
  ko: sn,
  lt: nn,
  lv: ln,
  ms: on,
  nb: rn,
  nl: un,
  pl: dn,
  pt: cn,
  ro: pn,
  ru: hn,
  sk: bn,
  sl: mn,
  sq: fn,
  sr: vn,
  sv: gn,
  th: yn,
  tl: _n,
  tr: kn,
  uk: $n,
  zh: Sn,
  zt: Dn
}, Symbol.toStringTag, { value: "Module" })), Mn = {
  Error: "Error"
}, wn = {
  Error: "خطأ"
}, Bn = {
  Error: "Qeydiyyat"
}, On = {}, Fn = {}, xn = {}, Jn = {
  Error: "Čeština"
}, Nn = {
  Error: "Fejl"
}, An = {
  Error: "Fehler"
}, Tn = {}, En = {
  Error: "Eraro"
}, In = {
  Error: "Error"
}, Pn = {}, Ln = {
  Error: "خطای"
}, zn = {
  Error: "Virheitä"
}, Wn = {
  Error: "Erreur"
}, Vn = {
  Error: "Inis"
}, Cn = {
  Error: "טעות"
}, Un = {
  Error: "त्रुटि"
}, Rn = {
  Error: "Hiba"
}, jn = {
  Error: "Login"
}, Hn = {
  Error: "Errore"
}, Yn = {
  Error: "エラー"
}, qn = {
  Error: "계정"
}, Kn = {}, Gn = {}, Qn = {}, Xn = {}, Zn = {}, el = {}, tl = {
  Error: "Erro"
}, al = {}, sl = {
  Error: "Ошибка"
}, nl = {
  Error: "Chyba"
}, ll = {}, ol = {}, rl = {}, il = {
  Error: "Fel"
}, ul = {}, dl = {}, cl = {
  Error: "Hata"
}, pl = {
  Error: "Про"
}, hl = {}, bl = {}, po = {
  en: Mn,
  ar: wn,
  az: Bn,
  bg: On,
  bn: Fn,
  ca: xn,
  cs: Jn,
  da: Nn,
  de: An,
  el: Tn,
  eo: En,
  es: In,
  et: Pn,
  fa: Ln,
  fi: zn,
  fr: Wn,
  ga: Vn,
  he: Cn,
  hi: Un,
  hu: Rn,
  id: jn,
  it: Hn,
  ja: Yn,
  ko: qn,
  lt: Kn,
  lv: Gn,
  ms: Qn,
  nb: Xn,
  nl: Zn,
  pl: el,
  pt: tl,
  ro: al,
  ru: sl,
  sk: nl,
  sl: ll,
  sq: ol,
  sr: rl,
  sv: il,
  th: ul,
  tl: dl,
  tr: cl,
  uk: pl,
  zh: hl,
  zt: bl
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: wn,
  az: Bn,
  bg: On,
  bn: Fn,
  ca: xn,
  cs: Jn,
  da: Nn,
  de: An,
  default: po,
  el: Tn,
  en: Mn,
  eo: En,
  es: In,
  et: Pn,
  fa: Ln,
  fi: zn,
  fr: Wn,
  ga: Vn,
  he: Cn,
  hi: Un,
  hu: Rn,
  id: jn,
  it: Hn,
  ja: Yn,
  ko: qn,
  lt: Kn,
  lv: Gn,
  ms: Qn,
  nb: Xn,
  nl: Zn,
  pl: el,
  pt: tl,
  ro: al,
  ru: sl,
  sk: nl,
  sl: ll,
  sq: ol,
  sr: rl,
  sv: il,
  th: ul,
  tl: dl,
  tr: cl,
  uk: pl,
  zh: hl,
  zt: bl
}, Symbol.toStringTag, { value: "Module" })), bo = {
  Button: no,
  Filter: oo,
  Pagination: io,
  Date: co,
  Form: ho
}, z = (e, n) => {
  let a = bo[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[n.value] === void 0 ? a = a.en : a = a[n.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, mo = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Add", s),
      icon: "plus",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), ml = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Cancel", s),
      icon: "window-close",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), fo = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Delete", s),
      icon: "trash-alt",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), vo = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Disable", s),
      icon: "times-circle",
      type: q.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), go = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Download", s),
      icon: "download",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), yo = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Edit", s),
      icon: "edit",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), _o = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Enable", s),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), fl = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Okay", s),
      icon: "check",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), ko = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Print", s),
      icon: "print",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), vl = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Refresh", s),
      icon: "sync",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), $o = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Save", s),
      icon: "save",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), So = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = n, t = e, s = H(J), l = g(() => ({
      Title: z("Button.Upload", s),
      icon: "upload",
      type: q.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), E(Q, G(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), Do = { class: "card-header" }, Mo = { class: "card-content" }, wo = { class: "card-footer" }, gl = /* @__PURE__ */ S({
  __name: "card",
  props: {
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean }
  },
  setup(e) {
    const n = e, a = {
      addonclass: "card-footer-item"
    }, t = {
      headerClass: "card-header-title is-centered",
      addonclass: "card-header-icon"
    };
    return (s, l) => (d(), h("div", {
      class: x(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      v("div", Do, [
        I(s.$slots, "header", me(_e(t)))
      ]),
      v("div", Mo, [
        I(s.$slots, "content")
      ]),
      v("div", wo, [
        I(s.$slots, "footer", me(_e(a)))
      ])
    ], 2));
  }
}), Bo = /* @__PURE__ */ S({
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
  setup(e, { emit: n }) {
    const a = `${Kl(J)}chart.umd.js`, t = B(null), s = e, l = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, u = g(() => {
      var i = "";
      return s.width && (i = `width:${s.width}px;`), s.height && (i += `height:${s.height}px;`), i;
    });
    return C([s.type], (i) => {
      r != null && (r.type = i ?? "line");
    }), C(
      [s.labels],
      (i) => {
        r != null && (r.data.labels = i, (s.showRefresh == null || !s.showRefresh) && o());
      },
      { deep: !0 }
    ), C(
      [s.datasets],
      (i) => {
        r != null && (r.data.datasets = i, (s.showRefresh == null || !s.showRefresh) && o());
      },
      { deep: !0 }
    ), re(async () => {
      let i = {
        responsive: !0,
        animation: {
          duration: 100
        },
        plugins: {
          legend: {
            position: `${s.legendPosition}`,
            labels: {
              filter: (c, m) => c.text != null
            },
            onClick: function(c, m) {
              l("legendItemClick", r, m);
            }
          }
        }
      };
      s.scales != null && s.scales != null && (i.scales = s.scales), s.tooltips != null && s.tooltips != null && (i.tooltips = s.tooltips);
      const p = await import(a);
      r = new p(t.val.getContext("2d"), {
        type: s.type == null ? "line" : s.type,
        data: {
          datasets: s.datasets,
          labels: s.labels
        },
        options: i
      }), r.update();
    }), (i, p) => (d(), E(gl, null, Ll({
      content: L(() => [
        v("canvas", {
          ref_key: "canvas",
          ref: t,
          style: Le(u.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: L((c) => [
          v("h3", {
            class: x(c.headerClass)
          }, T(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.showRefresh != null && s.showRefresh != null && s.showRefresh ? {
        name: "footer",
        fn: L((c) => [
          A(vl, G(c, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Oo = /* @__PURE__ */ S({
  __name: "check-mark",
  setup(e) {
    return (n, a) => (d(), E(K, {
      icon: "check",
      size: _(oe).small
    }, null, 8, ["size"]));
  }
}), Ge = async (e, n, a) => {
  let t = await import(e);
  const s = Object.keys(t);
  return n && s.sort(n), s.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, Fo = /* @__PURE__ */ S({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = B(null), a = e, t = g(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return C([a.url, a.filter], async () => {
      n.value = await Ge(a.url, a.sortMethod, t);
    }), re(async () => {
      n.value = await Ge(a.url, a.sortMethod, t);
    }), (s, l) => (d(!0), h(V, null, Y(n.value, (r) => (d(), E(ve(r), me(_e(a.props)), null, 16))), 256));
  }
}), xo = { class: "control has-icons-left" }, Jo = ["placeholder"], No = { class: "icon is-small is-left" }, Ao = /* @__PURE__ */ S({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = H(J), l = g(() => z("Filter.Filter", s)), r = B(null);
    C([r], (u) => {
      u[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (u) => {
      u.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return re(() => {
      a.default_value && (r.value = a.default_value);
    }), (u, i) => (d(), h("div", xo, [
      U(v("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => r.value = p),
        onKeypress: o
      }, null, 40, Jo), [
        [ge, r.value]
      ]),
      v("span", No, [
        A(K, { icon: "filter" })
      ])
    ]));
  }
}), To = {
  key: 0,
  class: "message-header"
}, Eo = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Io = { class: "message-body" }, Po = /* @__PURE__ */ S({
  __name: "message",
  props: {
    type: { default: q.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: te.normal }
  },
  setup(e) {
    const n = e, a = g(() => n.size === te.normal ? null : `is-${n.size}`), t = g(() => `is-${n.type}`);
    return (s, l) => (d(), h("article", {
      class: x(["message", a.value, t.value])
    }, [
      n.title ? (d(), h("div", To, [
        v("p", null, T(n.title), 1),
        n.hasDelete ? (d(), h("button", Eo)) : N("", !0)
      ])) : N("", !0),
      v("div", Io, [
        I(s.$slots, "default", {}, () => [
          Z(T(n.message), 1)
        ])
      ])
    ], 2));
  }
}), ue = /* @__PURE__ */ S({
  __name: "notification",
  props: {
    type: { default: ee.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), h("div", {
      class: x(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      I(a.$slots, "default", {}, () => [
        Z(T(n.message), 1)
      ])
    ], 2));
  }
}), Lo = {
  key: 0,
  class: "modal-background"
}, zo = {
  key: 0,
  class: "title"
}, Wo = { class: "block" }, Vo = /* @__PURE__ */ S({
  __name: "page-notification",
  props: {
    visible: { type: Boolean, default: !1 },
    type: { default: ee.info },
    message: {},
    header: {},
    blockUser: { type: Boolean },
    hasClose: { type: Boolean },
    isLight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = g(() => {
      switch (a.type) {
        case ee.info:
          return "circle-info";
        case ee.success:
          return "circle-check";
        case ee.danger:
          return "bug";
        case ee.warning:
          return "circle-exclamation";
      }
    }), l = g(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (d(), h("div", {
      class: x({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (d(), h("div", Lo)) : N("", !0),
      A(ut, {
        incoming: _(Be).fadeIn,
        outgoing: _(Be).fadeOut,
        speed: _(ie).slower
      }, {
        default: L(() => [
          a.visible ? (d(), h("div", {
            key: 0,
            class: x(l.value)
          }, [
            A(K, {
              icon: s.value,
              size: _(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (d(), h("h1", zo, T(a.header), 1)) : N("", !0),
            v("div", Wo, T(a.message), 1),
            a.hasClose ? (d(), E(K, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (u) => t("close")),
              size: _(oe).large
            }, null, 8, ["size"])) : N("", !0)
          ], 2)) : N("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Co = ["title", "disabled"], Uo = ["title", "disabled"], Ro = /* @__PURE__ */ S({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: !0 },
    hasprevious: { type: Boolean, default: !0 },
    size: { default: te.small },
    rounded: { type: Boolean, default: !1 },
    buttonType: {}
  },
  emits: ["moveForward", "moveBack"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = H(J), l = g(() => z(a.usenext ? "Pagination.Previous" : "Pagination.Older", s)), r = g(() => z(a.usenext ? "Pagination.Next" : "Pagination.Newer", s)), o = g(() => a.buttonType ? `has-background-${a.buttonType}` : ""), u = g(() => a.hasprevious ?? !0), i = g(() => a.hasmore ?? !0), p = function() {
      u || t("moveBack");
    }, c = function() {
      i || t("moveForward");
    };
    return (m, D) => U((d(), h("nav", {
      class: x(["pagination", o.value]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      v("a", {
        class: x(["pagination-previous", o.value]),
        title: l.value,
        onClick: p,
        disabled: u.value
      }, [
        A(K, {
          icon: "backward",
          size: _(oe).small
        }, null, 8, ["size"]),
        Z(" " + T(l.value), 1)
      ], 10, Co),
      v("a", {
        class: x(["pagination-next", o.value]),
        title: r.value,
        onClick: c,
        disabled: i.value
      }, [
        Z(T(r.value) + " ", 1),
        A(K, {
          icon: "forward",
          size: _(oe).small
        }, null, 8, ["size"])
      ], 10, Uo)
    ], 2)), [
      [le, a.hasmore || a.hasprevious]
    ]);
  }
});
function ce(e) {
  return typeof e == "function" ? e() : _(e);
}
function jo(e, n = 200) {
  const a = B(!1), t = B(!1), s = g(() => !a.value && !t.value), l = B(!1), r = B(), o = B(), u = g(() => {
    if (e != null) {
      let p = ce(e);
      return p instanceof Promise ? p : new Promise((c) => c(p));
    }
    return null;
  });
  let i;
  return C(
    () => ce(u),
    (p) => {
      if (a.value = !1, t.value = !1, r.value = null, !p) {
        o.value = null, i && clearTimeout(i), i = null;
        return;
      }
      const c = Number(ce(n)) || 0;
      c > 0 ? (l.value = !1, i && clearTimeout(i), i = setTimeout(() => {
        l.value = !0;
      }, c)) : l.value = !0, p.then((m) => {
        p === ce(u) && (o.value = ce(m), t.value = !0);
      }).catch((m) => {
        p === ce(u) && (r.value = m, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: s, isRejected: a, isResolved: t, isDelayElapsed: l, error: r, data: o };
}
const fe = /* @__PURE__ */ S({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, a = H(J), t = g(() => z("Form.Error", a)), s = zl(n), l = Ze(jo(s.promise, s.pendingDelay));
    return (r, o) => (d(), h(V, null, [
      l.isDelayElapsed && !l.isRejected && !l.isResolved ? I(r.$slots, "pending", {
        key: 0,
        response: l.data
      }, () => [
        A(_(de), {
          size: _(te).small
        }, null, 8, ["size"])
      ]) : N("", !0),
      l.isRejected ? I(r.$slots, "rejected", me(G({ key: 1 }, l.error)), () => [
        A(_(ue), {
          message: `${t.value}:${l.error.message ?? l.error.toString()}`,
          type: _(ee).danger
        }, null, 8, ["message", "type"])
      ]) : N("", !0),
      l.isResolved ? I(r.$slots, "default", {
        key: 2,
        response: l.data
      }) : N("", !0)
    ], 64));
  }
}), Ho = ["value", "max"], de = /* @__PURE__ */ S({
  __name: "progress",
  props: {
    type: { default: q.primary },
    size: { default: te.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, a = g(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (t, s) => (d(), h("progress", {
      class: x(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, T(a.value ? `${a.value}%` : null), 11, Ho));
  }
}), Yo = ["href"], qo = {
  key: 0,
  class: "icon is-small"
}, Ko = {
  key: 1,
  class: "navbar-dropdown"
}, ke = /* @__PURE__ */ S({
  __name: "navbar-item",
  props: {
    title: {},
    active: { type: Boolean, default: !1 },
    icon: {},
    hasDropDown: { type: Boolean, default: !1 },
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (s, l) => (d(), h("a", {
      class: x(["navbar-item", a.active ? "is-active" : "", a.hasDropDown ? "has-dropdown is-hoverable" : ""]),
      href: a.href,
      onClick: l[0] || (l[0] = (r) => t("click"))
    }, [
      a.icon !== void 0 && a.icon !== null ? (d(), h("span", qo, [
        A(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      v("span", null, T(a.title), 1),
      a.hasDropDown ? (d(), h("div", Ko, [
        I(s.$slots, "default")
      ])) : N("", !0)
    ], 10, Yo));
  }
}), Go = ["aria-label"], Qo = { class: "navbar-brand" }, Xo = ["aria-expanded"], Zo = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), er = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), tr = /* @__PURE__ */ v("span", { "aria-hidden": "true" }, null, -1), ar = [
  Zo,
  er,
  tr
], sr = {
  key: 0,
  class: "navbar-start"
}, nr = { style: { width: "100px" } }, lr = {
  key: 1,
  class: "navbar-end"
}, or = { style: { width: "100px" } }, rr = /* @__PURE__ */ S({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const n = e, a = B(!1), t = (s) => {
      a.value = !1, s !== void 0 && s();
    };
    return re(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case Fe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Fe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (s, l) => (d(), h("nav", {
      class: x(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      v("div", Qo, [
        I(s.$slots, "brand"),
        v("a", {
          role: "button",
          class: x(["navbar-burger", a.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": a.value ? "true" : "false"
        }, ar, 10, Xo)
      ]),
      v("div", {
        class: x(["navbar-menu", a.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (d(), h("div", sr, [
          A(fe, {
            promise: n.startItems
          }, {
            default: L(({ response: r }) => [
              (d(!0), h(V, null, Y(r, (o) => (d(), E(ke, {
                active: o.active,
                hasDropDown: o.childItems !== void 0 && o.childItems.length > 0,
                title: o.title,
                icon: o.icon,
                href: o.href,
                onClick: (u) => t(o.onClick)
              }, {
                default: L(() => [
                  o.childItems !== void 0 && o.childItems.length > 0 ? (d(!0), h(V, { key: 0 }, Y(o.childItems, (u) => (d(), E(ke, {
                    active: u.active,
                    hasDropDown: !1,
                    title: u.title,
                    icon: u.icon,
                    href: u.href,
                    onClick: (i) => t(u.onClick)
                  }, null, 8, ["active", "title", "icon", "href", "onClick"]))), 256)) : N("", !0)
                ]),
                _: 2
              }, 1032, ["active", "hasDropDown", "title", "icon", "href", "onClick"]))), 256))
            ]),
            pending: L(() => [
              v("div", nr, [
                A(de, {
                  size: _(te).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0),
        n.endItems !== void 0 ? (d(), h("div", lr, [
          A(fe, {
            promise: n.endItems
          }, {
            default: L(({ response: r }) => [
              (d(!0), h(V, null, Y(r, (o) => (d(), E(ke, {
                active: o.active,
                hasDropDown: o.childItems !== void 0 && o.childItems.length > 0,
                title: o.title,
                icon: o.icon,
                href: o.href,
                onClick: (u) => t(o.onClick)
              }, {
                default: L(() => [
                  o.childItems !== void 0 && o.childItems.length > 0 ? (d(!0), h(V, { key: 0 }, Y(o.childItems, (u) => (d(), E(ke, {
                    active: u.active,
                    hasDropDown: !1,
                    title: u.title,
                    icon: u.icon,
                    href: u.href,
                    onClick: (i) => t(u.onClick)
                  }, null, 8, ["active", "title", "icon", "href", "onClick"]))), 256)) : N("", !0)
                ]),
                _: 2
              }, 1032, ["active", "hasDropDown", "title", "icon", "href", "onClick"]))), 256))
            ]),
            pending: L(() => [
              v("div", or, [
                A(de, {
                  size: _(te).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0)
      ], 2)
    ], 10, Go));
  }
}), ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ut,
  Button: Q,
  ButtonAdd: mo,
  ButtonCancel: ml,
  ButtonDelete: fo,
  ButtonDisable: vo,
  ButtonDownload: go,
  ButtonEdit: yo,
  ButtonEnable: _o,
  ButtonOkay: fl,
  ButtonPrint: ko,
  ButtonRefresh: vl,
  ButtonSave: $o,
  ButtonUpload: So,
  Chart: Bo,
  CheckMark: Oo,
  DynamicSlot: Fo,
  Filter: Ao,
  Icon: K,
  Message: Po,
  NavBar: rr,
  Notification: ue,
  PageNotification: Vo,
  Pagination: Ro,
  Progress: de,
  Promised: fe
}, Symbol.toStringTag, { value: "Module" })), ur = /* @__PURE__ */ S({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const a = n, t = e, s = B(!1), l = B(!1), r = B(null), o = g(() => (t.disabled ?? !1) || l.value && t.handlesearch !== null), u = g(() => {
      let c = [];
      return o || c.push("has-cursor"), s.value ? c.push("is-move") : c.push("is-grab"), c;
    }), i = (c) => o.value ? (c.preventDefault(), !1) : (c.stopPropagation(), c.dataTransfer.setData("value", JSON.stringify(t.CopyData)), s.value = !0, a("started"), !0), p = () => {
      s.value = !1, l.value = !0, a("stopped");
    };
    return re(() => {
      if (t.handlesearch) {
        let c = $(r.value).find(t.handlesearch);
        c.length > 0 && (l.value = !0, c.on("mousedown", () => l.value = !1), c.on("mouseup", () => l.value = !0));
      }
    }), (c, m) => (d(), E(ve(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: i,
      onDragend: p,
      class: x(u.value)
    }, {
      default: L(() => [
        I(c.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), dr = /* @__PURE__ */ S({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = B(!1), l = B(null), r = B(null);
    g(() => a.tag ?? "div");
    const o = (m) => {
      const D = r.value.getBoundingClientRect(), O = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = X.center;
      return m.x < O.x ? m.y < O.y ? b = X.topLeft : b = X.bottomLeft : m.y < O.y ? b = X.topRight : b = X.bottomRight, l.value = b, l.value;
    }, u = (m) => {
      m.preventDefault(), s.value = !0, t("itemEntered", o(m));
    }, i = (m) => {
      s.value = !0, t("itemExited", o(m));
    }, p = (m) => {
      m.preventDefault(), t("itemMoved", o(m));
    }, c = (m) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(m.dataTransfer.getData("value"))))
        return !1;
      m.stopPropagation(), m.preventDefault(), t("itemAdded", JSON.parse(m.dataTransfer.getData("value")), l.value), s.value = !1;
    };
    return (m, D) => (d(), E(ve(a.tag), {
      ref_key: "handle",
      ref: r,
      class: x({ "is-bordered": s.value }),
      onDragenter: u,
      onDragleave: i,
      onDrop: c,
      onDragover: p
    }, {
      default: L(() => [
        I(m.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), yl = /* @__PURE__ */ S({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const n = e, a = g(() => {
      var t = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && t.push("is-small"), n.outlined && t.push("is-outlined"), n.highlighted && t.push("is-highlighted"), t;
    });
    return (t, s) => (d(), E(ve(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: x(a.value)
    }, {
      default: L(() => [
        I(t.$slots, "default")
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
    const a = e, t = n, s = g(() => {
      var l = [];
      return a.type && l.push("is-" + a.type), a.outlined && l.push("is-outlined"), a.highlighted && l.push("is-highlighted"), a.icon && l.push("has-icon"), l;
    });
    return (l, r) => (d(), h("li", {
      class: x(s.value)
    }, [
      a.icon ? (d(), h("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        A(K, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      I(l.$slots, "default")
    ], 2));
  }
}), cr = /* @__PURE__ */ S({
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
    const a = e, t = n, s = B([]), l = B(-1), r = B(-1), o = B(null);
    C(a.Items, (m, D) => {
      s.value = [...D];
    }), re(() => {
      a.Items !== null && (s.value = [...a.Items]);
    });
    const u = (m) => {
      var D = m.target.getBoundingClientRect(), O = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = X.center;
      return m.y < O.y ? b = X.top : b = X.bottom, b;
    }, i = (m, D) => {
      D.stopPropagation(), l.value = m, D.dataTransfer.setData("value", null);
    }, p = (m, D) => {
      l.value && (D.stopPropagation(), m != l.value ? (r.value = m, o.value = u(D)) : (r.value = -1, o.value = null));
    }, c = (m) => {
      if (l.value) {
        m.stopPropagation();
        var D = r.value + (o.value == X.top ? 0 : 1), O = s.value.splice(D, 1)[0];
        D >= l.value && D--, s.value.splice(D, 0, O), r.value = -1, o.value = null, l.value = -1, t("sorted", s.value);
      }
    };
    return (m, D) => (d(), E(yl, {
      type: m.type,
      compact: m.compact,
      outlined: m.outlined,
      highlighted: m.highlighted,
      onDrop: c
    }, {
      default: L(() => [
        (d(!0), h(V, null, Y(s.value, (O, b) => (d(), h(V, null, [
          U(A(Me, null, {
            default: L(() => [
              A(ue, { light: !0 }, {
                default: L(() => [
                  Z(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === _(X).top]
          ]),
          A(Me, {
            draggable: "true",
            onDragstart: (P) => i(b, P),
            onDragend: D[0] || (D[0] = (P) => l.value = null),
            onDragover: (P) => p(b, P),
            class: x({ "has-cursor": !0, "is-move": r.value == b, "is-grab": r.value != b })
          }, {
            default: L(() => [
              I(m.$slots, "item", {
                item: O,
                index: b
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          U(A(Me, null, {
            default: L(() => [
              A(ue, { light: !0 }, {
                default: L(() => [
                  Z(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === _(X).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: ur,
  DropZone: dr,
  Sortable: cr
}, Symbol.toStringTag, { value: "Module" })), Ce = "HiddenFields", Ue = "DisabledFields", hr = (e) => e, ne = (e, n) => {
  const a = n("Translate", hr);
  return g(() => e.translate ?? a);
};
function Re(e, n) {
  const a = n(Ce), t = n(Ue), s = g(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), l = g(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: s, disabledValues: l };
}
const _l = (e) => {
  let n = [], a = [], t = 0;
  return e.forEach((s) => {
    let l = s.form_columns ?? 12;
    t + l > 12 && (n.push(a), a = [], t = 0), a.push(s), t += l, t === 12 && (n.push(a), a = [], t = 0);
  }), a.length > 0 && n.push(a), n;
};
async function je(e) {
  let n = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? n = a : n = Promise.resolve(a);
  let t = await n, s = [];
  return t.value !== void 0 ? s = t.value : s = t, s;
}
const br = { class: "tagsfield field input is-grouped is-grouped-multiline" }, mr = { class: "control" }, fr = { class: "tags has-addons" }, vr = { class: "tag is-link" }, gr = ["onClick"], yr = { key: 0 }, _r = ["placeholder"], kr = { class: "dropdown-menu" }, $r = { class: "dropdown-content" }, Sr = ["onClick"], Dr = {
  key: 1,
  class: "dropdown-item"
}, kl = /* @__PURE__ */ S({
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
    const t = a, s = e, l = ne(s, J), r = B([]), o = B(null), u = B(null), i = B(null), p = B(null);
    C(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (s.values != null && s.values != null) {
            let W = [];
            for (let f = 0; f < s.values.length && ((s.values[f].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || s.values[f].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && W.push(s.values[f]), W.length != 10); f++)
              ;
            u.value = W;
          } else {
            let f = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            f.length > 10 && f.splice(10, f.length - 10), u.value = f;
          }
      } else
        u.value = null, $(p.value).empty();
    });
    const c = () => {
      if (r.value.length == 0)
        return null;
      const w = r.value.slice();
      return s.limit != null && s.limit == 1 ? w.length > 0 ? w[0] : null : w;
    }, m = async (w) => {
      if (w == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (f) => {
            if (f.id !== void 0 && f.name !== void 0)
              return f;
            {
              let k = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${f.id === void 0 ? "q=" + encodeURIComponent(f) : "id=" + encodeURIComponent(f.id)}`)).json();
              return k.length > 0 ? (s.disabled && (k[0].readonly = !0), k[0]) : null;
            }
          })
        );
        r.value = W.filter((f) => f !== null), t("value_changed", { name: s.name, value: c() });
      }
    }, D = (w) => {
      w.preventDefault(), o.value = w.clipboardData.getData("text/plain");
    }, O = (w) => {
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
    }, P = () => {
      p.value.focus();
    }, M = (w) => {
      r.value.push(w), b(), t("value_changed", { name: s.name, value: c() });
    }, y = (w) => {
      r.value.splice(w, 1), P(), t("value_changed", { name: s.name, value: c() });
    };
    return n({ getValue: c, setValue: m }), (w, W) => (d(), h("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: P
    }, [
      v("div", br, [
        (d(!0), h(V, null, Y(r.value, (f, ae) => (d(), h("div", mr, [
          v("div", fr, [
            v("a", vr, T(_(l)(f.name)), 1),
            f.readonly ? N("", !0) : (d(), h("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (k) => y(ae)
            }, null, 8, gr))
          ])
        ]))), 256)),
        s.disabled ? N("", !0) : (d(), h("div", yr, [
          U(v("span", {
            ref_key: "contentSpan",
            ref: p,
            placeholder: _(l)(s.title),
            contenteditable: "",
            class: x(i.value),
            onFocus: W[0] || (W[0] = (f) => {
              i.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (f) => {
              i.value = null;
            }),
            onKeydown: O,
            onPaste: D
          }, null, 42, _r), [
            [le, r.value.length < s.limit || s.limit == null]
          ])
        ]))
      ]),
      v("div", {
        class: x(["dropdown", { "is-active": u.value != null && o.value != null && o.value != "" }])
      }, [
        v("div", kr, [
          v("div", $r, [
            u.value != null && u.value.length > 0 ? (d(!0), h(V, { key: 0 }, Y(u.value, (f) => (d(), h("a", {
              class: "dropdown-item",
              onClick: (ae) => M(f)
            }, T(_(l)(f.name)), 9, Sr))), 256)) : (d(), h("a", Dr, "No Results"))
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
    const a = e, t = n, s = ne(a, J);
    return (l, r) => (d(), E(Q, {
      type: l.sstyle,
      icon: a.icon ? a.icon : null,
      title: _(s)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Mr = { class: "checkbox is-block" }, wr = ["value", "disabled"], $l = /* @__PURE__ */ S({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = H(J), l = g(() => z("Form.Error", s)), r = a, o = ne(t, J), u = B([]), i = B(!1), p = g(async () => {
      if (t.values == null)
        return [];
      {
        let b = await je(t.values), P = b.filter((M) => M.selected).map((M) => M.value);
        return u.value === null || u.value.length == 0 ? u.value = P.length > 0 ? [...P] : [] : (P = u.value, b = b.map((M) => ({
          label: M.label,
          value: M.value,
          selected: P.some((y) => y === M.value)
        }))), b;
      }
    });
    C(u, (b) => {
      r("value_changed", { name: t.name, value: c() });
    });
    const c = () => u.value.length == 0 ? null : u.value, m = (b) => {
      i.value = !0, u.value.splice(0), b !== null && (u.value = [...b]), i.value = !1, r("value_changed", { name: t.name, value: c() });
    }, { hiddenValues: D, disabledValues: O } = Re(t.name, J);
    return n({ getValue: c, setValue: m }), (b, P) => (d(), h("div", null, [
      A(fe, { promise: p.value }, {
        default: L(({ response: M }) => [
          M !== null ? (d(!0), h(V, { key: 0 }, Y(M, (y) => U((d(), h("label", Mr, [
            U(v("input", {
              type: "checkbox",
              class: "checkbox",
              value: y.value,
              "onUpdate:modelValue": P[0] || (P[0] = (w) => u.value = w),
              disabled: t.disabled || _(O).some((w) => w === y.value.toString())
            }, null, 8, wr), [
              [ze, u.value]
            ]),
            Z(" " + T(_(o)(y.label)), 1)
          ], 512)), [
            [le, !_(D).some((w) => w === y.value.toString())]
          ])), 256)) : N("", !0)
        ]),
        pending: L(() => [
          A(_(de))
        ]),
        rejected: L(() => [
          A(_(ue), {
            type: _(ee).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Br = { class: "checkbox" }, Or = ["name", "disabled"], Fr = {
  key: 0,
  class: "help is-danger"
}, Sl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = ne(t, J), r = g(() => l.value(t.label)), o = B(!1);
    return C(o, (p) => s("value_changed", { name: t.name, value: p })), n({ getValue: () => o.value, setValue: (p) => {
      o.value = p;
    } }), (p, c) => (d(), h("label", Br, [
      U(v("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => o.value = m)
      }, null, 8, Or), [
        [ze, o.value]
      ]),
      Z(" " + T(r.value) + " ", 1),
      t.required ? (d(), h("span", Fr, "*")) : N("", !0)
    ]));
  }
}), Te = (e, n) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + n), a;
}, j = (e, n, a) => {
  let t = e;
  for (; t.length < a; )
    t = n + t;
  return t;
}, $e = (e, n, a) => {
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
      t += `${z("Date.Weekdays." + (e.length > 3 ? l : l.substring(0, 3)), n)}`;
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
      let r = a.getTimezoneOffset() * -1, o = parseInt((r / 60).toFixed(0)), u = r - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${o < 0 ? "-" : "+"}${j(Math.abs(o).toString(), "0", 2) + ":" + j(Math.abs(u).toString(), "0", 2)}`;
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
      let i = "";
      switch (a.getMonth()) {
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
      t += `${z("Date.Months." + (e.length > 3 ? i : i.substring(0, 3)), n)}`;
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
      for (var s = a.getFullYear().toString(); s.length > 2; )
        s = s.substring(1);
      t += `${j(s.toString(), "0", e.length)}`;
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
}, pe = (e, n, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", s = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        s != "" && (t += $e(s, n, e), s = ""), t += a.charAt(l + 1), l++;
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
        s != "" && s.charAt(0) != a.charAt(l) ? (t += $e(s, n, e), s = "") : s += a.charAt(l);
        break;
      default:
        s != "" && (t += $e(s, n, e), s = ""), t += a.charAt(l);
        break;
    }
  return s != "" && (t += $e(s, n, e), s = ""), t;
}, xr = { class: "control" }, Jr = ["name", "id", "disabled"], Qe = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), He = /* @__PURE__ */ S({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null), r = g(() => {
      if (l.value == null || l.value == "")
        return null;
      var i = Number(l.value.substring(3, 5)), p = Number(l.value.substring(0, 2)) % 12 + i / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * i / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * p / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return C(l, (i) => {
      s("value_changed", { name: t.name, value: i });
    }), n({ getValue: () => l.value, setValue: (i) => {
      if (i != null && Qe.test(i)) {
        var p = Qe.exec(i);
        i = (p[3] == "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)) + ":" + p[2] + ":00";
      }
      l.value = i;
    } }), (i, p) => (d(), h("div", xr, [
      U(v("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c),
        disabled: t.disabled,
        style: Le(r.value)
      }, null, 12, Jr), [
        [ge, l.value]
      ])
    ]));
  }
});
const Nr = { class: "control has-icons-left has-icons-right" }, Ar = ["name", "id", "placeholder", "disabled"], Tr = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), Er = { class: "modal-content" }, Ir = { class: "panel is-primary is-dateselect" }, Pr = { class: "panel-heading" }, Lr = { class: "columns card-header-title" }, zr = { class: "column" }, Wr = { class: "column has-text-centered" }, Vr = { class: "column has-text-right" }, Cr = { class: "panel-block" }, Ur = { class: "table is-striped has-text-centered" }, Rr = ["onClick"], jr = { key: 0 }, Hr = {
  colspan: "100%",
  class: "has-text-centered"
}, Yr = { class: "panel-block" }, ye = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), Se = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), Dl = /* @__PURE__ */ S({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = e, l = a, r = B(!1), o = B(null), u = B(null), i = Ze({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = H(J), c = we({
      Sun: g(() => z("Date.Weekdays.Sun", p)),
      Mon: g(() => z("Date.Weekdays.Mon", p)),
      Tue: g(() => z("Date.Weekdays.Tue", p)),
      Wed: g(() => z("Date.Weekdays.Wed", p)),
      Thu: g(() => z("Date.Weekdays.Thu", p)),
      Fri: g(() => z("Date.Weekdays.Fri", p)),
      Sat: g(() => z("Date.Weekdays.Sat", p))
    }), m = g(() => o.value !== null && (s.includeTime ? Se : ye).test(o.value)), D = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!Se.test(o.value) && s.includeTime)
          return null;
        if (!s.includeTime && !ye.test(o.value))
          return null;
        if (ye.test(o.value) && s.includeTime)
          return null;
        let k = s.includeTime ? Se.exec(o.value) : ye.exec(o.value);
        return new Date(
          parseInt(k[3]),
          parseInt(k[2]) - 1,
          parseInt(k[1]),
          s.includeTime ? parseInt(k[4]) : 0,
          s.includeTime ? parseInt(k[5]) : 0,
          0,
          0
        );
      }
    };
    C(o, (k) => {
      if (k == null)
        l("value_changed", { name: s.name, value: null }), i.Month = (/* @__PURE__ */ new Date()).getMonth(), i.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ye.test(k) && !Se.test(k)) {
        k = k.replaceAll(/[^0-9]/g, "");
        for (var F = [], R = 0; R < k.length; R += 2)
          R == 4 ? (F.push(k.substring(R, Math.min(k.length - R, 4) + R)), R += 2) : F.push(k.substring(R, Math.min(k.length - R, 2) + R));
        F.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(F[0]) || F.splice(0), F.length > 1 && (/^[0-3]/.test(F[1]) ? /^(01|03|05|07|08|10|12)$/.test(F[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(F[1]) || F.splice(1) : /^(02|04|06|09|11)$/.test(F[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(F[1]) || F.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(F[1]) || F.splice(1) : F.splice(1)), F.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(F[3]) || F.splice(3)), F.length > 4 && (/^[0-5][0-9]?$/.test(F[4]) || F.splice(4))), k = F.join(""), !s.includeTime && k.length > 8 && (k = k.substring(0, 8)), k.length >= 2 && (k = k.substring(0, 2) + "-" + (k.length > 2 ? k.substring(2) : "")), k.length >= 5 && (k = k.substring(0, 5) + "-" + (k.length > 5 ? k.substring(5) : "")), k.length >= 9 && s.includeTime && (k = k.substring(0, 9) + " " + (k.length > 9 ? k.substring(9) : "")), k.length >= 11 && (k = k.substring(0, 11) + ":" + (k.length > 11 ? k.substring(11) : "")), o.value = k;
      } else {
        var se = D();
        m && l("value_changed", { name: s.name, value: se }), i.Month = se.getMonth(), i.Year = se.getFullYear();
      }
    });
    const O = g(() => pe(new Date(i.Year, i.Month, 1), p, "MMMM")), b = g(() => {
      var k = [], F = new Date(i.Year, i.Month, 1);
      F = Te(F, F.getDay() * -1);
      for (var R = D(), se = Te(new Date(i.Year, i.Month, 1), 32).getMonth(); F.getMonth() != se; ) {
        for (var Je = [], Ye = 0; Ye < 7; Ye++)
          Je.push({
            Number: F.getDate(),
            Disabled: F.getMonth() != i.Month,
            isToday: pe(F, p, "yyyy-MM-dd") == pe(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: R != null && pe(F, p, "yyyy-MM-dd") == pe(R, p, "yyyy-MM-dd")
          }), F = Te(F, 1);
        k.push(Je);
      }
      return k;
    });
    n({ getValue: D, setValue: function(k) {
      k == null ? o.value = null : o.value = pe(k, p, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
    } });
    const M = (k) => {
      k.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + k.value : o.value = `${j((i.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year} ${k.value}`;
    }, y = (k) => {
      if (!k.Disabled && !k.isSelected)
        if (o.value === null)
          o.value = `${j(k.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}` + (s.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var F = o.value.split(" ");
          F[0] = `${j(k.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}`, o.value = `${F[0]}${F.length > 1 ? " " + F[1] : ""}`;
        }
    }, w = () => {
      o.value = u.value, r.value = !1;
    }, W = () => {
      s.disabled || (u.value = o.value, r.value = !0);
    }, f = () => {
      s.disabled || (o.value = null);
    }, ae = (k) => {
      i.Month + k == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + k == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += k;
    };
    return (k, F) => (d(), h("div", null, [
      v("div", Nr, [
        U(v("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": F[0] || (F[0] = (R) => o.value = R),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, Ar), [
          [ge, o.value]
        ]),
        v("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          A(_(K), { icon: "calendar-alt" })
        ]),
        v("span", {
          class: "icon is-small is-right is-clickable",
          onClick: f
        }, [
          A(_(K), { icon: "window-close" })
        ])
      ]),
      v("div", {
        class: x(["modal", { "is-active": r.value }])
      }, [
        Tr,
        v("div", Er, [
          v("div", Ir, [
            v("div", Pr, [
              v("div", Lr, [
                v("div", zr, [
                  A(_(K), {
                    icon: "arrow-circle-left",
                    onClick: F[1] || (F[1] = (R) => ae(-1))
                  })
                ]),
                v("div", Wr, T(O.value) + " " + T(i.Year), 1),
                v("div", Vr, [
                  A(_(K), {
                    icon: "arrow-circle-right",
                    onClick: F[2] || (F[2] = (R) => ae(1))
                  })
                ])
              ])
            ]),
            v("div", Cr, [
              v("table", Ur, [
                v("thead", null, [
                  v("tr", null, [
                    v("th", null, T(_(c).Sun), 1),
                    v("th", null, T(_(c).Mon), 1),
                    v("th", null, T(_(c).Tue), 1),
                    v("th", null, T(_(c).Wed), 1),
                    v("th", null, T(_(c).Thu), 1),
                    v("th", null, T(_(c).Fri), 1),
                    v("th", null, T(_(c).Sat), 1)
                  ])
                ]),
                v("tbody", null, [
                  (d(!0), h(V, null, Y(b.value, (R) => (d(), h("tr", null, [
                    (d(!0), h(V, null, Y(R, (se) => (d(), h("td", {
                      class: x(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Je) => y(se)
                    }, T(se.Number), 11, Rr))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (d(), h("tfoot", jr, [
                  v("tr", null, [
                    v("td", Hr, [
                      A(He, {
                        ref: t.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValue_changed: M
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : N("", !0)
              ])
            ]),
            v("div", Yr, [
              A(_(fl), {
                addonclass: "card-footer-item",
                disabled: !m.value,
                onClick: F[3] || (F[3] = (R) => r.value = !1)
              }, null, 8, ["disabled"]),
              A(_(ml), {
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
const Ml = /* @__PURE__ */ S({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: a }) {
    let t, s;
    const l = Hl(J);
    We([`${l}summernote-lite.min.css`]), [t, s] = Wl(() => import(`${l}summernote`)), await t, s();
    const r = B(null), o = e, u = a;
    return C([o.disabled], (c) => {
      r.value != null && $(r.value).summernote(c ? "disable" : "enable");
    }), n({ getValue: () => $(r.value).summernote("code"), setValue: (c) => {
      $(r.value).summernote("code", c);
    } }), re(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(c) {
            u("value_changed", { name: o.name, value: c });
          }
        }
      }), (o.disabled ?? !1) && $(r.value).summernote("disable");
    }), Vl(() => {
      $(r.value).summernote("destroy");
    }), (c, m) => (d(), h("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
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
    const n = e, a = ne(n, J);
    return (t, s) => (d(), E(ve(n.subtype), null, {
      default: L(() => [
        Z(T(_(a)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), qr = ["name"], wl = /* @__PURE__ */ S({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null);
    return C(l, (u) => s("value_changed", { name: t.name, value: u })), n({ getValue: () => l.value, setValue: (u) => {
      l.value = u;
    } }), (u, i) => U((d(), h("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p)
    }, null, 8, qr)), [
      [ge, l.value]
    ]);
  }
}), Kr = ["name", "disabled", "min", "max", "step"], Bl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = B(null), r = () => {
      if (l.value === "")
        return null;
      let u = parseInt(l.value);
      return t.min !== void 0 && u < t.min * 1 || t.max !== void 0 && u > t.max * 1 ? null : u;
    }, o = (u) => {
      l.value = u === null ? "" : u.toString();
    };
    return C([l], (u) => s("value_changed", { name: t.name, value: r() })), n({ getValue: r, setValue: o }), (u, i) => U((d(), h("input", {
      type: "number",
      class: "input",
      name: u.name,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p),
      disabled: u.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, Kr)), [
      [ge, l.value]
    ]);
  }
}), Gr = ["id"], Pe = /* @__PURE__ */ S({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, J);
    return (t, s) => (d(), h("p", {
      id: n.name
    }, T(_(a)(n.label)), 9, Gr));
  }
}), Qr = { class: "radio" }, Xr = ["name", "value", "disabled"], Zr = /* @__PURE__ */ v("br", null, null, -1), Ol = /* @__PURE__ */ S({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = H(J), l = g(() => z("Form.Error", s)), r = a, o = ne(t, J), u = B(null), i = function() {
      return u.value;
    };
    C(u, (O) => {
      r("value_changed", { name: t.name, value: i() });
    });
    const p = g(async () => {
      if (t.values == null)
        return [];
      {
        let O = await je(t.values);
        return u.value === null && O.some((b) => b.selected) && (u.value = O.find((b) => b.selected).value), O.map((b) => ({
          label: b.label,
          value: b.value,
          selected: u.value === b.value
        }));
      }
    }), c = (O) => {
      u.value = O;
    }, { hiddenValues: m, disabledValues: D } = Re(t.name, J);
    return n({ getValue: i, setValue: c }), (O, b) => (d(), h("div", null, [
      A(fe, { promise: p.value }, {
        default: L(({ response: P }) => [
          O.values != null ? (d(!0), h(V, { key: 0 }, Y(P, (M) => (d(), h(V, null, [
            U(v("label", Qr, [
              v("input", {
                type: "radio",
                name: t.name,
                value: M.value,
                class: "radio",
                disabled: t.disabled || _(D).some((y) => y === M.value.toString())
              }, null, 8, Xr),
              Z(" " + T(_(o)(M.label)), 1)
            ], 512), [
              [le, !_(m).some((y) => y === M.value.toString())]
            ]),
            Zr
          ], 64))), 256)) : N("", !0)
        ]),
        pending: L(() => [
          A(_(de))
        ]),
        rejected: L(() => [
          A(_(ue), {
            type: _(ee).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), ei = { class: "select" }, ti = ["id", "name", "multiple", "disabled"], ai = ["value", "selected", "disabled"], si = ["label"], ni = ["value", "selected", "disabled"], Fl = (e, n, a) => {
  let t = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, s = a.length;
  return a.push(t), n.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = Fl(t.label, l, a);
  }), a[s].values.length == 0 && a.splice(s, 1), a;
}, xl = /* @__PURE__ */ S({
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
    const t = e, s = H(J), l = g(() => z("Form.Error", s)), r = a, o = ne(t, J), u = B(null), i = B(!1), p = g(async () => {
      if (t.values == null)
        return [];
      {
        let b = await je(t.values), P = b.filter((y) => y.selected).map((y) => y.value);
        b.some((y) => y.values !== void 0) && b.filter((y) => y.values !== void 0).forEach((y) => {
          P = P.concat(
            y.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), u.value === null || u.value.length === 0 ? u.value = null : (b = b.map((y) => {
          let w = y;
          return w.values !== void 0 && (w.values = w.values.map((W) => (W.selected = u.value.some((f) => f === W.value), W))), w;
        }), u.value.forEach((y) => {
          b.some((w) => w.value !== void 0 && w.value === y || w.values !== void 0 && w.values.some((W) => W.value === y)) || b.push({
            label: y,
            value: y
          });
        }));
        let M = [];
        return b.forEach((y) => {
          y.values === void 0 ? M.push(y) : M = Fl(y.label, y, M);
        }), M;
      }
    }), c = () => u.value == null || u.value.length == 0 ? null : t.multiple ? u.value.slice() : Array.isArray(u.value) ? u.value[0] : u.value;
    C(u, () => {
      i.value || r("value_changed", { name: t.name, value: c() });
    }), C(i, (b) => {
      b || r("value_changed", { name: t.name, value: c() });
    });
    const m = (b) => {
      i.value = !0, b != null ? t.multiple ? u.value = Array.isArray(b) ? b : [b] : u.value = b : t.multiple ? u.value = [] : u.value = null, i.value = !1;
    }, { hiddenValues: D, disabledValues: O } = Re(t.name, J);
    return n({ getValue: c, setValue: m }), (b, P) => (d(), h("div", ei, [
      p.value != null ? (d(), E(fe, {
        key: 0,
        promise: p.value
      }, {
        default: L(({ response: M }) => [
          U(v("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: x([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": P[0] || (P[0] = (y) => u.value = y),
            disabled: t.disabled
          }, [
            M != null ? (d(!0), h(V, { key: 0 }, Y(M, (y) => (d(), h(V, null, [
              y.values == null ? U((d(), h("option", {
                key: 0,
                value: y.value,
                selected: y.selected,
                disabled: _(O).some((w) => w === y.value.toString())
              }, T(_(o)(y.label)), 9, ai)), [
                [le, !_(D).some((w) => w === y.value.toString())]
              ]) : N("", !0),
              y.values != null ? (d(), h("optgroup", {
                key: 1,
                label: _(o)(y.label)
              }, [
                (d(!0), h(V, null, Y(y.values, (w) => U((d(), h("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: _(O).some((W) => W === w.value.toString())
                }, T(_(o)(w.label)), 9, ni)), [
                  [le, !_(D).some((W) => W === w.value.toString())]
                ])), 256))
              ], 8, si)) : N("", !0)
            ], 64))), 256)) : N("", !0)
          ], 10, ti), [
            [Cl, u.value]
          ])
        ]),
        pending: L(() => [
          A(_(de))
        ]),
        rejected: L(() => [
          A(_(ue), {
            type: _(ee).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : N("", !0)
    ]));
  }
}), li = { class: "field" }, oi = ["id", "name", "disabled"], ri = ["for"], ii = {
  key: 0,
  class: "help is-danger"
}, Jl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = ne(t, J), r = B(!1);
    return C(r, (i) => s("value_changed", { name: t.name, value: i })), n({ getValue: () => r.value, setValue: (i) => {
      r.value = i;
    } }), (i, p) => (d(), h("div", li, [
      U(v("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": p[0] || (p[0] = (c) => r.value = c),
        disabled: t.disabled
      }, null, 8, oi), [
        [ze, r.value]
      ]),
      v("label", { for: i.name }, [
        Z(T(_(l)(t.label)) + " ", 1),
        t.required ? (d(), h("span", ii, "*")) : N("", !0)
      ], 8, ri)
    ]));
  }
}), ui = ["type", "name", "disabled", "maxlength"], Nl = /* @__PURE__ */ S({
  __name: "text",
  props: {
    subtype: {},
    maxlength: {},
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null);
    return C(l, (u) => s("value_changed", { name: t.name, value: u })), n({ getValue: () => l.value, setValue: (u) => {
      l.value = u;
    } }), (u, i) => U((d(), h("input", {
      type: u.subtype,
      class: "input",
      name: u.name,
      disabled: u.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p)
    }, null, 8, ui)), [
      [Ul, l.value]
    ]);
  }
}), di = ["name", "rows", "cols", "maxlength", "disabled"], Al = 9, he = String.fromCharCode(Al), De = String.fromCharCode(10), Tl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = B(null);
    C(l, (i) => {
      s("value_changed", { name: t.name, value: i });
    });
    const r = () => l.value, o = (i) => {
      l.value = i;
    };
    n({ getValue: r, setValue: o });
    const u = (i) => {
      if (t.supportsTab) {
        let p = r();
        switch (i.keyCode) {
          case Al:
            let c = i.target.selectionStart, m = i.target.selectionEnd, D = p.substring(0, c), O = p.length > m ? p.substring(m) : "", b = c == m ? "" : p.substring(c, m);
            if (b.indexOf(String.fromCharCode(10)) < 0)
              i.shiftKey ? b.startsWith(he) ? (b = b.substring(1), c--) : D.endsWith(he) && (D = D.substring(0, D.length - 1), c--) : b = he + b;
            else {
              let P = !1;
              b.endsWith(De) && (P = !0, b = b.substring(0, b.length - 1));
              let M = b.split(De);
              b = "", i.shiftKey && D.endsWith(he) && (D = D.substring(0, D.length - 1), c--), M.forEach((y, w) => {
                i.shiftKey && y.startsWith(he) ? y = y.substring(1) : i.shiftKey || (y = he + y), b += y + (w === M.length - 1 ? "" : De);
              }), P && (b += De);
            }
            return p = D + b + O, c += b.length == 1 ? 1 : 0, m = c + (b.length == 1 ? 0 : b.length), o(p), i.target.selectionStart = c, i.target.selectionEnd = m, i.target.focus(), i.preventDefault != null && i.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (i, p) => U((d(), h("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: u,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c)
    }, null, 40, di)), [
      [ge, l.value]
    ]);
  }
}), ci = { class: "columns" }, El = /* @__PURE__ */ S({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = J(Ce), r = J(Ue);
    n({ setValue: (c) => {
      p.forEach((m) => {
        switch (m.type) {
          case "subform":
            m.setValue(c);
            break;
          default:
            m.setValue !== void 0 && (c === null ? m.setValue(null) : Object.keys(c).some((D) => D === m.fieldName) ? m.setValue(c[m.fieldName]) : Object.keys(c).some((D) => D === m.altFieldName) && m.setValue(c[m.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var c = {};
      return p.forEach((m) => {
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
    }, isValid: () => !p.some((c) => !(c.isValid === void 0 || c.isValid())) });
    const p = t.inputs.map((c) => B(null));
    return (c, m) => (d(), h("div", ci, [
      (d(!0), h(V, null, Y(t.inputs, (D, O) => (d(), E(Il, {
        ref_for: !0,
        ref: (b) => _(p)[O] = b,
        input: D,
        onValue_changed: m[0] || (m[0] = (b) => s("value_changed", b)),
        onButton_clicked: m[1] || (m[1] = (b) => s("button_clicked", b)),
        disabled: t.disabled || _(r).some((b) => b === D.name),
        hidden: _(l).some((b) => b === D.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), pi = ["id", "name"], hi = /* @__PURE__ */ S({
  __name: "subform",
  props: {
    fields: {},
    hidden: { type: Boolean, default: !1 },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a;
    let l = [];
    B(!1);
    const r = g(() => {
      let p = _l(t.fields);
      return l = p.map((c) => B(null)), p;
    });
    return n({ isValid: () => !l.some((p) => !(p.isValid === void 0 || p.isValid())), setValue: (p) => l.forEach((c) => c.setValue(p)), getValue: () => {
      var p = {};
      return l.forEach((c) => {
        p = $.extend(p, c.getValue());
      }), p;
    } }), (p, c) => U((d(), h("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (d(!0), h(V, null, Y(r.value, (m, D) => (d(), E(El, {
        ref_for: !0,
        ref: (O) => _(l)[D] = O,
        inputs: m,
        disabled: t.disabled,
        onValue_changed: c[0] || (c[0] = (O) => s("value_changed", O)),
        onButton_clicked: c[1] || (c[1] = (O) => s("button_clicked", O))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, pi)), [
      [le, !t.hidden]
    ]);
  }
}), bi = ["for"], mi = {
  key: 0,
  class: "help is-danger"
}, fi = { class: "control" }, vi = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], gi = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Il = /* @__PURE__ */ S({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = a, l = e, r = ne(l, J), o = we(B(l.input.type)), u = g(() => {
      let f = null;
      switch (l.input.type) {
        case "autocomplete":
          f = kl;
          break;
        case "button":
          f = Ee;
          break;
        case "checkbox-group":
          f = $l;
          break;
        case "checkbox":
          f = Sl;
          break;
        case "date":
          f = Dl;
          break;
        case "full-editor":
          f = Ml;
          break;
        case "header":
          f = Ie;
          break;
        case "hidden":
          f = wl;
          break;
        case "number":
          f = Bl;
          break;
        case "paragraph":
          f = Pe;
          break;
        case "radio-group":
          f = Ol;
          break;
        case "select":
          f = xl;
          break;
        case "Switch":
          f = Jl;
          break;
        case "text":
          f = Nl;
          break;
        case "textarea":
          f = Tl;
          break;
        case "time":
          f = He;
          break;
        case "subform":
          f = hi;
          break;
      }
      return f;
    }), i = function(f) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(f);
    };
    re(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && i(l.input.value);
    });
    const p = g(() => l.input.disabled ?? l.disabled ?? !1), c = g(() => `is-${l.input.form_columns ?? 12}`), m = g(() => l.input.name), D = g(() => l.input.processVariable ?? l.input.name), O = g(() => vi.some((f) => f === l.input.type) && l.input.label !== void 0 && l.input.label !== null), b = g(() => {
      let f = $.extend({}, l.input);
      return delete f.type, f.className != null && delete f.className, f.form_columns != null && delete f.form_columns, gi.some((ae) => ae === l.input.type) && (f.translate = l.translate), f.disabled = l.disabled, f;
    }), P = (f) => {
      if (f.value !== void 0 && f.value !== null && Array.isArray(f.value)) {
        let ae = [...f.value];
        f.value = ae;
      }
      s("value_changed", f);
    }, M = (f) => {
      s("button_clicked", f);
    }, y = () => {
      if (t.value != null && t.value.getValue != null) {
        let f = t.value.getValue();
        return f != null && Array.isArray(f) ? [...f] : f;
      }
      return null;
    };
    return n({ setValue: i, fieldName: m, type: o, altFieldName: D, getValue: y, isValid: () => {
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
    } }), (f, ae) => U((d(), h("div", {
      class: x(["field column", [c.value]])
    }, [
      l.input.type == "header" ? (d(), E(Ie, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (d(), E(Pe, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (d(), E(Ee, {
        key: 2,
        name: l.input.name,
        sstyle: l.input.style,
        className: l.input.className,
        icon: l.input.icon,
        label: l.input.label,
        disabled: p.value,
        onButton_clicked: M,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (d(), h(V, { key: 3 }, [
        O.value ? (d(), h("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          Z(T(_(r)(l.input.label)) + " ", 1),
          l.input.required ? (d(), h("span", mi, "*")) : N("", !0)
        ], 8, bi)) : N("", !0),
        v("div", fi, [
          (d(), E(ve(u.value), G(b.value, {
            onValue_changed: P,
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
const yi = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, _i = /* @__PURE__ */ S({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = ne(t, J);
    Ne("Translate", (M) => l.value(M));
    let r = [];
    const o = g(() => {
      if (t.elements != null) {
        let M = _l(t.elements);
        return r = M.map((y) => B(null)), M;
      } else
        return null;
    }), u = () => {
      let M = {};
      return r.forEach((y) => {
        M = $.extend(M, y.getValue());
      }), M;
    }, i = (M) => {
      r.forEach((y) => y.setValue(M));
    }, p = () => !r.some((M) => !(M.isValid === void 0 || M.isValid())), c = B([]);
    Ne(Ce, we(c));
    const m = (M) => {
      Array.isArray(M) ? c.value = [...c.value, ...M] : c.value.push(M);
    }, D = (M) => {
      Array.isArray(M) ? c.value = c.value.filter((y) => M.indexOf(y) >= 0) : c.value = c.value.filter((y) => y !== M);
    }, O = B([]);
    return Ne(Ue, we(O)), n({ getValues: u, setValues: i, isValid: p, hideField: m, showField: D, disableField: (M) => {
      Array.isArray(M) ? O.value = [...O.value, ...M] : O.value.push(M);
    }, enableField: (M) => {
      Array.isArray(M) ? O.value = O.value.filter((y) => M.indexOf(y) >= 0) : O.value = O.value.filter((y) => y !== M);
    } }), (M, y) => (d(), h("form", yi, [
      o.value != null ? (d(!0), h(V, { key: 0 }, Y(o.value, (w, W) => (d(), E(El, {
        ref_for: !0,
        ref: (f) => _(r)[W] = f,
        inputs: w,
        transte: t.translate,
        key: W,
        onValue_changed: y[0] || (y[0] = (f) => s("value_changed", f)),
        onButton_clicked: y[1] || (y[1] = (f) => s("button_clicked", f)),
        disabled: M.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : N("", !0)
    ]));
  }
}), ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: kl,
  Button: Ee,
  Checkbox: Sl,
  CheckboxGroup: $l,
  ComponentForm: _i,
  Date: Dl,
  FormComponent: Il,
  FullEditor: Ml,
  Header: Ie,
  Hidden: wl,
  Number: Bl,
  Paragraph: Pe,
  RadioGroup: Ol,
  Select: xl,
  Switch: Jl,
  Text: Nl,
  TextArea: Tl,
  Time: He
}, Symbol.toStringTag, { value: "Module" })), $i = { class: "hero-body" }, Si = { class: "title" }, Di = {
  key: 0,
  class: "subtitle"
}, Mi = /* @__PURE__ */ S({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), h("section", {
      class: x(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + n.type])
    }, [
      v("div", $i, [
        v("p", Si, T(n.title), 1),
        n.subtitle ? (d(), h("p", Di, T(n.subtitle), 1)) : N("", !0)
      ])
    ], 2));
  }
}), wi = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of n)
    a[t] = s;
  return a;
}, Bi = {}, Oi = { class: "box" };
function Fi(e, n) {
  return d(), h("div", Oi, [
    I(e.$slots, "default")
  ]);
}
const xi = /* @__PURE__ */ wi(Bi, [["render", Fi]]), Ji = {
  key: 0,
  class: "icon is-clickable"
}, Ni = /* @__PURE__ */ S({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (s, l) => (d(), h("li", {
      class: x({ "is-active": a.active })
    }, [
      v("a", {
        onClick: l[0] || (l[0] = (r) => t("click"))
      }, [
        a.icon ? (d(), h("span", Ji, [
          A(_(K), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        Z(" " + T(a.title), 1)
      ])
    ], 2));
  }
}), Ai = /* @__PURE__ */ S({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Oe.left },
    size: { default: te.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, a = g(() => {
      let t = ["breadcrumb"];
      return n.alignment && n.alignment !== Oe.left && t.push(`is-${n.alignment}`), n.size && n.size !== te.normal && t.push(`is-${n.size}`), n.seperator && t.push(`has-${n.seperator}-seperator`), t;
    });
    return (t, s) => (d(), h("nav", {
      class: x(a.value),
      "aria-label": "breadcrumbs"
    }, [
      v("ul", null, [
        I(t.$slots, "default")
      ])
    ], 2));
  }
}), Ti = /* @__PURE__ */ S({
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
    return (a, t) => (d(), h("div", {
      class: x(["columns", [
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
      I(a.$slots, "default")
    ], 2));
  }
}), Ei = /* @__PURE__ */ S({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const n = e, a = g(() => {
      var t = [];
      return n.size && t.push(`is-${n.size}`), n.offset && t.push(`is-offset-${n.offset}`), n.border && (n.border.some((s) => s === xe.all) ? t.push("is-bordered") : n.border.forEach((s) => t.push(`is-bordered-${s}`))), n.addonclass && t.push(n.addonclass), t;
    });
    return (t, s) => (d(), h("div", {
      class: x(["column", a.value])
    }, [
      I(t.$slots, "default")
    ], 2));
  }
}), Ii = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), Pi = { class: "modal-content" }, Li = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, zi = /* @__PURE__ */ S({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), h("div", {
      class: x({ modal: !0, "is-active": n.display }),
      style: Le(`z-index:${n.zIndex}`)
    }, [
      Ii,
      v("div", Pi, [
        I(a.$slots, "default")
      ]),
      n.hasClose ? (d(), h("button", Li)) : N("", !0)
    ], 6));
  }
}), Wi = /* @__PURE__ */ v("div", { class: "modal-background" }, null, -1), Vi = { class: "modal-card-head" }, Ci = { class: "modal-card-body" }, Ui = { class: "modal-card-foot" }, Ri = /* @__PURE__ */ S({
  __name: "modal-card",
  props: {
    show: { type: Boolean },
    hasClose: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    maxWidth: { type: Boolean },
    maxHeight: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = {
      addonclass: "card-footer-item"
    }, l = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, r = g(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, u) => (d(), h("div", {
      class: x(["modal", { "is-active": a.show }])
    }, [
      Wi,
      v("div", {
        class: x(["modal-card", r.value])
      }, [
        v("div", Vi, [
          I(o.$slots, "header", me(_e(l))),
          o.hasClose ? (d(), h("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (i) => t("close"))
          })) : N("", !0)
        ]),
        v("div", Ci, [
          I(o.$slots, "content")
        ]),
        v("div", Ui, [
          I(o.$slots, "footer", me(_e(s)))
        ])
      ], 2)
    ], 2));
  }
}), ji = {
  key: 0,
  class: "panel-heading"
}, Hi = {
  key: 1,
  class: "panel-tabs"
}, Yi = { class: "panel-block" }, qi = /* @__PURE__ */ S({
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
    const n = e, a = g(() => n.blockNames ?? ["default"]), t = g(() => {
      let s = [];
      return n.type && s.push(`is-${n.type}`), n.fullWidth && s.push("is-fullwidth"), n.fullHeight && s.push("is-fullheight"), s;
    });
    return (s, l) => (d(), h("div", {
      class: x(["panel", t.value])
    }, [
      n.hasHeader ? (d(), h("div", ji, [
        I(s.$slots, "header")
      ])) : N("", !0),
      n.hasTabs ? (d(), h("div", Hi, [
        I(s.$slots, "tabs")
      ])) : N("", !0),
      (d(!0), h(V, null, Y(a.value, (r) => (d(), h("div", Yi, [
        I(s.$slots, r)
      ]))), 256))
    ], 2));
  }
}), Ki = /* @__PURE__ */ S({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, a = g(() => {
      let s = [];
      return n.scrollable && s.push("table-container"), n.fixedHeader && n.scrollable && s.push("is-fixed"), s;
    }), t = g(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return n.fixedHeader && !n.scrollable && s.push("is-fixed"), n.fullWidth && s.push("is-fullwidth"), n.narrow && s.push("is-narrow"), s;
    });
    return (s, l) => (d(), h("div", {
      class: x(a.value)
    }, [
      v("table", {
        class: x(t.value)
      }, [
        v("thead", null, [
          I(s.$slots, "thead")
        ]),
        v("tbody", null, [
          I(s.$slots, "tbody")
        ]),
        v("tfoot", null, [
          I(s.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), Gi = ["href"], Qi = {
  key: 0,
  class: "icon is-small"
}, Xi = /* @__PURE__ */ S({
  __name: "tabs-tab",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {},
    href: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = n, t = e, s = (l) => {
      (t.href === null || t.href === void 0) && (l.preventDefault(), a("click"));
    };
    return (l, r) => (d(), h("li", {
      class: x({ "is-active": t.active })
    }, [
      v("a", {
        href: l.href,
        onClick: s
      }, [
        t.icon ? (d(), h("span", Qi, [
          A(_(K), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        v("span", null, T(t.title), 1)
      ], 8, Gi)
    ], 2));
  }
}), Zi = /* @__PURE__ */ S({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const n = e, a = g(() => {
      let t = ["tabs"];
      return n.alignment ? t.push(`is-${n.alignment}`) : t.push("is-left"), n.type && t.push(`is-${n.type}`), n.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, s) => (d(), h("div", {
      class: x(a.value)
    }, [
      v("ul", null, [
        I(t.$slots, "default")
      ])
    ], 2));
  }
}), eu = /* @__PURE__ */ S({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const n = e, a = g(() => {
      let t = ["tile", `is-${n.type}`];
      return n.size && t.push(`is-${n.size}`), n.borders && (n.borders.some((s) => s === xe.all) ? t.push("is-bordered") : n.borders.forEach((s) => t.push(`is-bordered-${s}`))), n.vertical && t.push("is-vertical"), t;
    });
    return (t, s) => (d(), h("div", {
      class: x(a.value)
    }, [
      I(t.$slots, "default")
    ], 2));
  }
}), tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Mi,
  Box: xi,
  Breadcrumbs: Ai,
  BreadcrumbsItem: Ni,
  Card: gl,
  Column: Ei,
  ColumnContainer: Ti,
  List: yl,
  ListItem: Me,
  Modal: zi,
  ModalCard: Ri,
  Panel: qi,
  Table: Ki,
  Tabs: Zi,
  TabsTab: Xi,
  Tile: eu
}, Symbol.toStringTag, { value: "Module" }));
const Xe = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
We(`${Xe.substring(0, Xe.lastIndexOf("/"))}/style.css`);
const au = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function su(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: au,
  setSkin: su
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: ru,
  Button: iu,
  ButtonAdd: uu,
  ButtonCancel: du,
  ButtonDelete: cu,
  ButtonDisable: pu,
  ButtonDownload: hu,
  ButtonEdit: bu,
  ButtonEnable: mu,
  ButtonOkay: fu,
  ButtonPrint: vu,
  ButtonRefresh: gu,
  ButtonSave: yu,
  ButtonUpload: _u,
  Chart: ku,
  CheckMark: $u,
  DynamicSlot: Su,
  Filter: Du,
  Icon: Mu,
  Message: wu,
  Notification: Bu,
  PageNotification: Ou,
  Pagination: Fu,
  Promised: xu,
  Progress: Ju,
  NavBar: Nu,
  NavBarItem: Au
} = ir, { DraggableItem: Tu, DropZone: Eu, Sortable: Iu } = pr, {
  AutoComplete: Pu,
  CheckboxGroup: Lu,
  Checkbox: zu,
  Date: Wu,
  ComponentForm: Vu,
  FullEditor: Cu,
  Header: Uu,
  Hidden: Ru,
  Number: ju,
  Paragraph: Hu,
  RadioGroup: Yu,
  Select: qu,
  Switch: Ku,
  Text: Gu,
  TextArea: Qu,
  Time: Xu,
  FormComponent: Zu
} = ki, {
  Banner: ed,
  Box: td,
  BreadcrumbsItem: ad,
  Breadcrumbs: sd,
  Card: nd,
  Column: ld,
  ColumnContainer: od,
  List: rd,
  ListItem: id,
  ModalCard: ud,
  Panel: dd,
  Table: cd,
  Tabs: pd,
  TabsTab: hd,
  Tile: bd,
  Modal: md
} = tu, { AVAIABLE_SKINS: fd, setSkin: vd } = nu, {
  ColorTypes: gd,
  NoticeTypes: yd,
  Sizes: _d,
  AnimationSpeeds: kd,
  AnimationTypes: $d,
  IconSizes: Sd,
  ChartLegendPositions: Dd,
  ChartTypes: Md,
  DropZoneQuadrants: wd,
  BreadCrumbAlignments: Bd,
  BreadCrumbSeperators: Od,
  ColumnContainerModifiers: Fd,
  ColumnSizes: xd,
  ColumnOffsetSizes: Jd,
  BorderTypes: Nd,
  TabAlignments: Ad,
  TabStyles: Td,
  TileSizes: Ed,
  TileTypes: Id,
  FixedNavBarPositions: Pd
} = Rl;
export {
  fd as AVAIABLE_SKINS,
  ru as Animation,
  kd as AnimationSpeeds,
  $d as AnimationTypes,
  Pu as AutoComplete,
  ed as Banner,
  Nd as BorderTypes,
  td as Box,
  Bd as BreadCrumbAlignments,
  Od as BreadCrumbSeperators,
  sd as Breadcrumbs,
  ad as BreadcrumbsItem,
  iu as Button,
  uu as ButtonAdd,
  du as ButtonCancel,
  cu as ButtonDelete,
  pu as ButtonDisable,
  hu as ButtonDownload,
  bu as ButtonEdit,
  mu as ButtonEnable,
  fu as ButtonOkay,
  vu as ButtonPrint,
  gu as ButtonRefresh,
  yu as ButtonSave,
  _u as ButtonUpload,
  nd as Card,
  ku as Chart,
  Dd as ChartLegendPositions,
  Md as ChartTypes,
  $u as CheckMark,
  zu as Checkbox,
  Lu as CheckboxGroup,
  gd as ColorTypes,
  ld as Column,
  od as ColumnContainer,
  Fd as ColumnContainerModifiers,
  Jd as ColumnOffsetSizes,
  xd as ColumnSizes,
  Vu as ComponentForm,
  Wu as Date,
  Tu as DraggableItem,
  Eu as DropZone,
  wd as DropZoneQuadrants,
  Su as DynamicSlot,
  Du as Filter,
  Pd as FixedNavBarPositions,
  Zu as FormComponent,
  Cu as FullEditor,
  Uu as Header,
  Ru as Hidden,
  Mu as Icon,
  Sd as IconSizes,
  rd as List,
  id as ListItem,
  wu as Message,
  md as Modal,
  ud as ModalCard,
  Nu as NavBar,
  Au as NavBarItem,
  yd as NoticeTypes,
  Bu as Notification,
  ju as Number,
  Ou as PageNotification,
  Fu as Pagination,
  dd as Panel,
  Hu as Paragraph,
  Ju as Progress,
  xu as Promised,
  Yu as RadioGroup,
  qu as Select,
  _d as Sizes,
  Iu as Sortable,
  Ku as Switch,
  Ad as TabAlignments,
  Td as TabStyles,
  cd as Table,
  pd as Tabs,
  hd as TabsTab,
  Gu as Text,
  Qu as TextArea,
  bd as Tile,
  Ed as TileSizes,
  Id as TileTypes,
  Xu as Time,
  vd as setSkin
};
//# sourceMappingURL=components.esm.js.map
