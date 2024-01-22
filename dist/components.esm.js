import { computed as v, defineComponent as S, openBlock as u, createBlock as E, Transition as zl, withCtx as L, renderSlot as I, createElementBlock as p, normalizeClass as x, inject as A, ref as B, watch as C, createVNode as J, createCommentVNode as N, toDisplayString as T, mergeProps as q, createElementVNode as g, unref as k, normalizeProps as fe, guardReactiveProps as _e, onMounted as ie, createSlots as Vl, normalizeStyle as Ie, Fragment as W, renderList as G, resolveDynamicComponent as ge, withDirectives as U, vModelText as ve, createTextVNode as Q, vShow as le, toRefs as Wl, reactive as Ze, resolveComponent as et, vModelCheckbox as Le, readonly as De, withAsyncContext as Cl, onUnmounted as Ul, vModelSelect as Rl, vModelDynamic as jl, provide as Je } from "vue";
import "jquery";
const ze = (e) => new Promise((n) => {
  let a = [];
  var t = document.head || document.getElementsByTagName("head")[0];
  (Array.isArray(e) ? e : [e]).forEach((s, l) => {
    if (s.toLowerCase().endsWith(".css") || (s += ".css"), document.querySelectorAll('link[server_path="' + s + '"]').length == 0) {
      let o = document.createElement("link"), d = new Promise((i) => {
        o.onload = function() {
          i(s);
        };
      });
      a[l] = d, t.appendChild(o), o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("server_path", s), o.setAttribute("href", s);
    } else
      a[l] = Promise.resolve(s);
  }), Promise.all(a).then((s) => {
    n(s);
  });
});
var K = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(K || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), ee = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(ee || {}), ue = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ue || {}), we = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(we || {}), tt = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(tt || {}), Ve = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Ve || {}), oe = /* @__PURE__ */ ((e) => (e.xxsmall = "2xs", e.xsmall = "xs", e.small = "sm", e.normal = "", e.large = "lg", e.xlarge = "xl", e.xxlarge = "2xl", e))(oe || {}), Z = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(Z || {}), Be = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(Be || {}), at = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(at || {}), st = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(st || {}), nt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(nt || {}), lt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(lt || {}), Fe = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Fe || {}), ot = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(ot || {}), rt = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(rt || {}), it = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(it || {}), ut = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(ut || {}), Oe = /* @__PURE__ */ ((e) => (e.top = "is-fixed-top", e.bottom = "is-fixed-bottom", e))(Oe || {}), dt = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e))(dt || {});
const Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ue,
  AnimationTypes: we,
  BorderTypes: Fe,
  BreadCrumbAlignments: Be,
  BreadCrumbSeperators: at,
  ChartLegendPositions: Ve,
  ChartTypes: tt,
  ColorTypes: K,
  ColumnContainerModifiers: st,
  ColumnOffsetSizes: lt,
  ColumnSizes: nt,
  DropZoneQuadrants: Z,
  FixedMenuPositions: dt,
  FixedNavBarPositions: Oe,
  IconSizes: oe,
  NoticeTypes: te,
  Sizes: ee,
  TabAlignments: ot,
  TabStyles: rt,
  TileSizes: it,
  TileTypes: ut
}, Symbol.toStringTag, { value: "Module" })), Y = (e) => {
  const n = e("Language", "en");
  return v(() => n);
}, Gl = (e) => {
  const n = e("IconSet", "solid");
  return v(() => n);
}, Yl = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), ql = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), Kl = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Ql = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ct = /* @__PURE__ */ S({
  __name: "animation",
  props: {
    incoming: {},
    outgoing: {},
    inout: {},
    speed: { default: ue.slow },
    speedIn: {},
    speedOut: {},
    repeating: {}
  },
  setup(e) {
    const n = Kl(A);
    ze(`${n}animate.min.css`);
    const a = e, t = (h) => {
      switch (h) {
        case ue.slower:
          return 3e3;
        case ue.fast:
          return 800;
        case ue.faster:
          return 500;
        default:
          return 2e3;
      }
    }, s = (h) => h === void 0 ? "" : `animate__${h}`, l = (h) => h === void 0 ? "animate__slow" : `animate__${h}`, r = v(() => ({
      enter: t(a.speedIn ?? a.speed),
      leave: t(a.speedOut ?? a.speed)
    })), o = v(() => [
      "animate__animated",
      s(a.incoming ?? a.inout),
      l(a.speedIn ?? a.speed)
    ].join(" ")), d = v(() => [
      "animate__animated",
      s(a.outgoing ?? a.inout),
      l(a.speedOut ?? a.speed)
    ].join(" ")), i = v(() => [
      "animate__animated",
      "animate__infinite",
      s(a.repeating),
      l(a.speed ?? "")
    ].join(" "));
    return (h, c) => a.repeating ? (u(), p("div", {
      key: 1,
      class: x(i.value)
    }, [
      I(h.$slots, "default")
    ], 2)) : (u(), E(zl, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": d.value,
      duration: r.value
    }, {
      default: L(() => [
        I(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), Xl = "brands.min.css", Zl = "all.min.css", Ge = "icon_styles", eo = /\.fa-([^: ]+):before/g, to = /url\(([^)]+)\)/g, me = B([]), Te = B(!1), Ye = async (e, n) => {
  if (!Te.value) {
    Te.value = !0;
    let a;
    me.value.length === 0 ? (a = document.createElement("style"), a.setAttribute("id", Ge), document.head.appendChild(a), a.setAttribute("type", "text/css")) : a = document.getElementById(Ge), me.value = [" "];
    let t = await Promise.all([
      fetch(`${e}${Xl}`),
      fetch(`${e}${Zl}`),
      fetch(`${e}${n}.min.css`)
    ]), s = await t[0].text();
    [...s.matchAll(eo)].forEach((l) => {
      me.value.push(l[1]);
    }), s = `${await t[1].text()}
    ${await t[2].text()}
    ${s}`, [...s.matchAll(to)].forEach((l) => {
      s = s.replace(l[0], `url(${new URL(l[1], e)})`);
    }), a.innerText = s, me.value.splice(0, 1), Te.value = !1;
  }
}, H = /* @__PURE__ */ S({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = ql(A), a = Gl(A);
    me.value.length === 0 ? Ye(n, a.value) : C(a, () => Ye(n, a.value));
    const t = e, s = v(() => {
      let l = [];
      return t.icon !== void 0 && t.icon !== null && (me.value.indexOf(t.icon) >= 0 ? l.push("fa-brands") : (l.push("fa-ico"), l.push(`fa-${a.value}`)), l.push((t.icon.indexOf("fa-") == -1 ? " fa-" : " ") + t.icon)), t.size !== void 0 && t.size !== null && t.size !== oe.normal && l.push(`fa-${t.size}`), l;
    });
    return (l, r) => (u(), p("i", {
      class: x(s.value)
    }, null, 2));
  }
});
const ao = ["disabled"], so = {
  key: 0,
  class: "icon is-small"
}, no = { key: 1 }, X = /* @__PURE__ */ S({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: K.primary },
    size: { default: ee.small },
    title: {},
    addonclass: {},
    hidemobile: { type: Boolean },
    hidetablet: { type: Boolean },
    hidedesktop: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = v(() => {
      let l = ["button", "is-rounded", `is-${a.size}`, `is-${a.type}`];
      return a.disabled && l.push("disabled"), a.addonclass && l.push(a.addonclass), a.hidemobile && l.push("is-hidden-mobile"), a.hidetablet && l.push("is-hidden-tablet-only"), a.hidedesktop && l.push("is-hidden-desktop is-hidden-widescreen"), l;
    });
    return (l, r) => (u(), p("button", {
      class: x(s.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (u(), p("span", so, [
        J(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      a.title != null ? (u(), p("span", no, T(a.title), 1)) : N("", !0)
    ], 10, ao));
  }
}), pt = {
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
}, ht = {
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
}, bt = {
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
}, mt = {}, ft = {}, gt = {}, vt = {
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
}, yt = {
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
}, _t = {
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
}, kt = {}, $t = {
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
}, St = {
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
}, Mt = {}, Dt = {
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
}, wt = {
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
}, Bt = {
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
}, Ot = {
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
}, Ft = {
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
}, xt = {
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
}, Jt = {
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
}, Tt = {
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
}, Nt = {
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
}, At = {
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
}, Pt = {
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
}, Et = {}, It = {}, Lt = {}, zt = {}, Vt = {}, Wt = {}, Ct = {
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
}, Ut = {}, Rt = {
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
}, jt = {
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
}, Ht = {}, Gt = {}, Yt = {}, qt = {
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
}, Kt = {}, Qt = {}, Xt = {
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
}, Zt = {
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
}, ea = {}, ta = {}, lo = {
  en: pt,
  ar: ht,
  az: bt,
  bg: mt,
  bn: ft,
  ca: gt,
  cs: vt,
  da: yt,
  de: _t,
  el: kt,
  eo: $t,
  es: St,
  et: Mt,
  fa: Dt,
  fi: wt,
  fr: Bt,
  ga: Ot,
  he: Ft,
  hi: xt,
  hu: Jt,
  id: Tt,
  it: Nt,
  ja: At,
  ko: Pt,
  lt: Et,
  lv: It,
  ms: Lt,
  nb: zt,
  nl: Vt,
  pl: Wt,
  pt: Ct,
  ro: Ut,
  ru: Rt,
  sk: jt,
  sl: Ht,
  sq: Gt,
  sr: Yt,
  sv: qt,
  th: Kt,
  tl: Qt,
  tr: Xt,
  uk: Zt,
  zh: ea,
  zt: ta
}, oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: ht,
  az: bt,
  bg: mt,
  bn: ft,
  ca: gt,
  cs: vt,
  da: yt,
  de: _t,
  default: lo,
  el: kt,
  en: pt,
  eo: $t,
  es: St,
  et: Mt,
  fa: Dt,
  fi: wt,
  fr: Bt,
  ga: Ot,
  he: Ft,
  hi: xt,
  hu: Jt,
  id: Tt,
  it: Nt,
  ja: At,
  ko: Pt,
  lt: Et,
  lv: It,
  ms: Lt,
  nb: zt,
  nl: Vt,
  pl: Wt,
  pt: Ct,
  ro: Ut,
  ru: Rt,
  sk: jt,
  sl: Ht,
  sq: Gt,
  sr: Yt,
  sv: qt,
  th: Kt,
  tl: Qt,
  tr: Xt,
  uk: Zt,
  zh: ea,
  zt: ta
}, Symbol.toStringTag, { value: "Module" })), aa = {
  Filter: "Filter"
}, sa = {
  Filter: "فيلم"
}, na = {
  Filter: "Qeydiyyat"
}, la = {}, oa = {}, ra = {}, ia = {
  Filter: "Čeština"
}, ua = {
  Filter: "Filter"
}, da = {
  Filter: "Filter"
}, ca = {}, pa = {
  Filter: "Filtero"
}, ha = {
  Filter: "Filtro"
}, ba = {}, ma = {
  Filter: "فیلتر"
}, fa = {
  Filter: "Filter"
}, ga = {
  Filter: "Filtre"
}, va = {
  Filter: "Scagaire"
}, ya = {
  Filter: "Filter"
}, _a = {
  Filter: "फिल्टर"
}, ka = {
  Filter: "Szűrő"
}, $a = {
  Filter: "Login"
}, Sa = {
  Filter: "Filtro"
}, Ma = {
  Filter: "フィルター"
}, Da = {
  Filter: "제품정보"
}, wa = {}, Ba = {}, Oa = {}, Fa = {}, xa = {}, Ja = {}, Ta = {
  Filter: "Filtro"
}, Na = {}, Aa = {
  Filter: "Фильтр"
}, Pa = {
  Filter: "Filter"
}, Ea = {}, Ia = {}, La = {}, za = {
  Filter: "Filter"
}, Va = {}, Wa = {}, Ca = {
  Filter: "Filtre"
}, Ua = {
  Filter: "Фільтри"
}, Ra = {}, ja = {}, ro = {
  en: aa,
  ar: sa,
  az: na,
  bg: la,
  bn: oa,
  ca: ra,
  cs: ia,
  da: ua,
  de: da,
  el: ca,
  eo: pa,
  es: ha,
  et: ba,
  fa: ma,
  fi: fa,
  fr: ga,
  ga: va,
  he: ya,
  hi: _a,
  hu: ka,
  id: $a,
  it: Sa,
  ja: Ma,
  ko: Da,
  lt: wa,
  lv: Ba,
  ms: Oa,
  nb: Fa,
  nl: xa,
  pl: Ja,
  pt: Ta,
  ro: Na,
  ru: Aa,
  sk: Pa,
  sl: Ea,
  sq: Ia,
  sr: La,
  sv: za,
  th: Va,
  tl: Wa,
  tr: Ca,
  uk: Ua,
  zh: Ra,
  zt: ja
}, io = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: sa,
  az: na,
  bg: la,
  bn: oa,
  ca: ra,
  cs: ia,
  da: ua,
  de: da,
  default: ro,
  el: ca,
  en: aa,
  eo: pa,
  es: ha,
  et: ba,
  fa: ma,
  fi: fa,
  fr: ga,
  ga: va,
  he: ya,
  hi: _a,
  hu: ka,
  id: $a,
  it: Sa,
  ja: Ma,
  ko: Da,
  lt: wa,
  lv: Ba,
  ms: Oa,
  nb: Fa,
  nl: xa,
  pl: Ja,
  pt: Ta,
  ro: Na,
  ru: Aa,
  sk: Pa,
  sl: Ea,
  sq: Ia,
  sr: La,
  sv: za,
  th: Va,
  tl: Wa,
  tr: Ca,
  uk: Ua,
  zh: Ra,
  zt: ja
}, Symbol.toStringTag, { value: "Module" })), Ha = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Go To Page"
}, Ga = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer",
  GoToPage: "الذهاب إلى الصفحة"
}, Ya = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə",
  GoToPage: " Page"
}, qa = {}, Ka = {}, Qa = {}, Xa = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština",
  GoToPage: "Přejít na stránku"
}, Za = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer",
  GoToPage: "Gå til siden"
}, es = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit",
  GoToPage: "Zur Seite"
}, ts = {}, as = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli",
  GoToPage: "Iru al paĝo"
}, ss = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Ir a la página"
}, ns = {}, ls = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer",
  GoToPage: "به صفحه بروید"
}, os = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa",
  GoToPage: "Siirry sivulle"
}, rs = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer",
  GoToPage: "Aller à la page"
}, is = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh",
  GoToPage: "Téigh go dtí an Leathanach"
}, us = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש",
  GoToPage: "ללכת לדף"
}, ds = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया",
  GoToPage: "पृष्ठ पर जाएं"
}, cs = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb",
  GoToPage: "Menj az oldalra"
}, ps = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login",
  GoToPage: "Sitemap"
}, hs = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo",
  GoToPage: "Vai alla pagina"
}, bs = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース",
  GoToPage: "サイトマップ"
}, ms = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더",
  GoToPage: "바로가기"
}, fs = {}, gs = {}, vs = {}, ys = {}, _s = {}, ks = {}, $s = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais",
  GoToPage: "Ir para a página"
}, Ss = {}, Ms = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer",
  GoToPage: "Перейти на страницу"
}, Ds = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka",
  GoToPage: "Prejsť na stránku"
}, ws = {}, Bs = {}, Os = {}, Fs = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare",
  GoToPage: "Gå till Page"
}, xs = {}, Js = {}, Ts = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer",
  GoToPage: "Go To Page"
}, Ns = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова",
  GoToPage: "Перейти на сторінку"
}, As = {}, Ps = {}, uo = {
  en: Ha,
  ar: Ga,
  az: Ya,
  bg: qa,
  bn: Ka,
  ca: Qa,
  cs: Xa,
  da: Za,
  de: es,
  el: ts,
  eo: as,
  es: ss,
  et: ns,
  fa: ls,
  fi: os,
  fr: rs,
  ga: is,
  he: us,
  hi: ds,
  hu: cs,
  id: ps,
  it: hs,
  ja: bs,
  ko: ms,
  lt: fs,
  lv: gs,
  ms: vs,
  nb: ys,
  nl: _s,
  pl: ks,
  pt: $s,
  ro: Ss,
  ru: Ms,
  sk: Ds,
  sl: ws,
  sq: Bs,
  sr: Os,
  sv: Fs,
  th: xs,
  tl: Js,
  tr: Ts,
  uk: Ns,
  zh: As,
  zt: Ps
}, co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Ga,
  az: Ya,
  bg: qa,
  bn: Ka,
  ca: Qa,
  cs: Xa,
  da: Za,
  de: es,
  default: uo,
  el: ts,
  en: Ha,
  eo: as,
  es: ss,
  et: ns,
  fa: ls,
  fi: os,
  fr: rs,
  ga: is,
  he: us,
  hi: ds,
  hu: cs,
  id: ps,
  it: hs,
  ja: bs,
  ko: ms,
  lt: fs,
  lv: gs,
  ms: vs,
  nb: ys,
  nl: _s,
  pl: ks,
  pt: $s,
  ro: Ss,
  ru: Ms,
  sk: Ds,
  sl: ws,
  sq: Bs,
  sr: Os,
  sv: Fs,
  th: xs,
  tl: Js,
  tr: Ts,
  uk: Ns,
  zh: As,
  zt: Ps
}, Symbol.toStringTag, { value: "Module" })), Es = {
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
}, Is = {
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
}, Ls = {
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
}, zs = {
  Weekdays: {},
  Months: {}
}, Vs = {
  Weekdays: {},
  Months: {}
}, Ws = {
  Weekdays: {},
  Months: {}
}, Cs = {
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
}, Us = {
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
}, Rs = {
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
}, js = {
  Weekdays: {},
  Months: {}
}, Hs = {
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
}, Gs = {
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
}, Ys = {
  Weekdays: {},
  Months: {}
}, qs = {
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
}, Ks = {
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
}, Qs = {
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
}, Xs = {
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
}, Zs = {
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
}, en = {
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
}, tn = {
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
}, an = {
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
}, sn = {
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
}, nn = {
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
}, ln = {
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
  Weekdays: {},
  Months: {}
}, pn = {
  Weekdays: {},
  Months: {}
}, hn = {
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
}, bn = {
  Weekdays: {},
  Months: {}
}, mn = {
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
}, fn = {
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
}, gn = {
  Weekdays: {},
  Months: {}
}, vn = {
  Weekdays: {},
  Months: {}
}, yn = {
  Weekdays: {},
  Months: {}
}, _n = {
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
}, kn = {
  Weekdays: {},
  Months: {}
}, $n = {
  Weekdays: {},
  Months: {}
}, Sn = {
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
}, Mn = {
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
}, Dn = {
  Weekdays: {},
  Months: {}
}, wn = {
  Weekdays: {},
  Months: {}
}, po = {
  en: Es,
  ar: Is,
  az: Ls,
  bg: zs,
  bn: Vs,
  ca: Ws,
  cs: Cs,
  da: Us,
  de: Rs,
  el: js,
  eo: Hs,
  es: Gs,
  et: Ys,
  fa: qs,
  fi: Ks,
  fr: Qs,
  ga: Xs,
  he: Zs,
  hi: en,
  hu: tn,
  id: an,
  it: sn,
  ja: nn,
  ko: ln,
  lt: on,
  lv: rn,
  ms: un,
  nb: dn,
  nl: cn,
  pl: pn,
  pt: hn,
  ro: bn,
  ru: mn,
  sk: fn,
  sl: gn,
  sq: vn,
  sr: yn,
  sv: _n,
  th: kn,
  tl: $n,
  tr: Sn,
  uk: Mn,
  zh: Dn,
  zt: wn
}, ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Is,
  az: Ls,
  bg: zs,
  bn: Vs,
  ca: Ws,
  cs: Cs,
  da: Us,
  de: Rs,
  default: po,
  el: js,
  en: Es,
  eo: Hs,
  es: Gs,
  et: Ys,
  fa: qs,
  fi: Ks,
  fr: Qs,
  ga: Xs,
  he: Zs,
  hi: en,
  hu: tn,
  id: an,
  it: sn,
  ja: nn,
  ko: ln,
  lt: on,
  lv: rn,
  ms: un,
  nb: dn,
  nl: cn,
  pl: pn,
  pt: hn,
  ro: bn,
  ru: mn,
  sk: fn,
  sl: gn,
  sq: vn,
  sr: yn,
  sv: _n,
  th: kn,
  tl: $n,
  tr: Sn,
  uk: Mn,
  zh: Dn,
  zt: wn
}, Symbol.toStringTag, { value: "Module" })), Bn = {
  Error: "Error"
}, On = {
  Error: "خطأ"
}, Fn = {
  Error: "Qeydiyyat"
}, xn = {}, Jn = {}, Tn = {}, Nn = {
  Error: "Čeština"
}, An = {
  Error: "Fejl"
}, Pn = {
  Error: "Fehler"
}, En = {}, In = {
  Error: "Eraro"
}, Ln = {
  Error: "Error"
}, zn = {}, Vn = {
  Error: "خطای"
}, Wn = {
  Error: "Virheitä"
}, Cn = {
  Error: "Erreur"
}, Un = {
  Error: "Inis"
}, Rn = {
  Error: "טעות"
}, jn = {
  Error: "त्रुटि"
}, Hn = {
  Error: "Hiba"
}, Gn = {
  Error: "Login"
}, Yn = {
  Error: "Errore"
}, qn = {
  Error: "エラー"
}, Kn = {
  Error: "계정"
}, Qn = {}, Xn = {}, Zn = {}, el = {}, tl = {}, al = {}, sl = {
  Error: "Erro"
}, nl = {}, ll = {
  Error: "Ошибка"
}, ol = {
  Error: "Chyba"
}, rl = {}, il = {}, ul = {}, dl = {
  Error: "Fel"
}, cl = {}, pl = {}, hl = {
  Error: "Hata"
}, bl = {
  Error: "Про"
}, ml = {}, fl = {}, bo = {
  en: Bn,
  ar: On,
  az: Fn,
  bg: xn,
  bn: Jn,
  ca: Tn,
  cs: Nn,
  da: An,
  de: Pn,
  el: En,
  eo: In,
  es: Ln,
  et: zn,
  fa: Vn,
  fi: Wn,
  fr: Cn,
  ga: Un,
  he: Rn,
  hi: jn,
  hu: Hn,
  id: Gn,
  it: Yn,
  ja: qn,
  ko: Kn,
  lt: Qn,
  lv: Xn,
  ms: Zn,
  nb: el,
  nl: tl,
  pl: al,
  pt: sl,
  ro: nl,
  ru: ll,
  sk: ol,
  sl: rl,
  sq: il,
  sr: ul,
  sv: dl,
  th: cl,
  tl: pl,
  tr: hl,
  uk: bl,
  zh: ml,
  zt: fl
}, mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: On,
  az: Fn,
  bg: xn,
  bn: Jn,
  ca: Tn,
  cs: Nn,
  da: An,
  de: Pn,
  default: bo,
  el: En,
  en: Bn,
  eo: In,
  es: Ln,
  et: zn,
  fa: Vn,
  fi: Wn,
  fr: Cn,
  ga: Un,
  he: Rn,
  hi: jn,
  hu: Hn,
  id: Gn,
  it: Yn,
  ja: qn,
  ko: Kn,
  lt: Qn,
  lv: Xn,
  ms: Zn,
  nb: el,
  nl: tl,
  pl: al,
  pt: sl,
  ro: nl,
  ru: ll,
  sk: ol,
  sl: rl,
  sq: il,
  sr: ul,
  sv: dl,
  th: cl,
  tl: pl,
  tr: hl,
  uk: bl,
  zh: ml,
  zt: fl
}, Symbol.toStringTag, { value: "Module" })), fo = {
  Button: oo,
  Filter: io,
  Pagination: co,
  Date: ho,
  Form: mo
}, z = (e, n) => {
  let a = fo[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[n.value] === void 0 ? a = a.en : a = a[n.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, go = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Add", s),
      icon: "plus",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), gl = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Cancel", s),
      icon: "window-close",
      type: K.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), vo = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Delete", s),
      icon: "trash-alt",
      type: K.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), yo = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Disable", s),
      icon: "times-circle",
      type: K.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), _o = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Download", s),
      icon: "download",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), ko = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Edit", s),
      icon: "edit",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), $o = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Enable", s),
      icon: "check",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), vl = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Okay", s),
      icon: "check",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), So = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Print", s),
      icon: "print",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), yl = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Refresh", s),
      icon: "sync",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), Mo = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Save", s),
      icon: "save",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), Do = /* @__PURE__ */ S({
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
    const a = n, t = e, s = Y(A), l = v(() => ({
      Title: z("Button.Upload", s),
      icon: "upload",
      type: K.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (u(), E(X, q(l.value, {
      onClick: o[0] || (o[0] = (d) => a("click"))
    }), null, 16));
  }
}), wo = {
  key: 0,
  class: "card-icon"
}, Bo = { class: "card-icon-wrapper" }, Oo = { class: "card-header" }, Fo = { class: "card-content" }, xo = { class: "card-footer" }, _l = /* @__PURE__ */ S({
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
    return (s, l) => (u(), p("div", {
      class: x(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      n.icon !== null ? (u(), p("div", wo, [
        g("div", Bo, [
          J(H, {
            icon: n.icon,
            size: k(oe).xxlarge
          }, null, 8, ["icon", "size"])
        ])
      ])) : N("", !0),
      g("div", Oo, [
        I(s.$slots, "header", fe(_e(t)))
      ]),
      g("div", Fo, [
        I(s.$slots, "content")
      ]),
      g("div", xo, [
        I(s.$slots, "footer", fe(_e(a)))
      ])
    ], 2));
  }
}), Jo = /* @__PURE__ */ S({
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
    const a = `${Ql(A)}chart.umd.js`, t = B(null), s = e, l = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, d = v(() => {
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
    ), ie(async () => {
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
      const h = await import(a);
      r = new h(t.val.getContext("2d"), {
        type: s.type == null ? "line" : s.type,
        data: {
          datasets: s.datasets,
          labels: s.labels
        },
        options: i
      }), r.update();
    }), (i, h) => (u(), E(_l, null, Vl({
      content: L(() => [
        g("canvas", {
          ref_key: "canvas",
          ref: t,
          style: Ie(d.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: L((c) => [
          g("h3", {
            class: x(c.headerClass)
          }, T(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.showRefresh != null && s.showRefresh != null && s.showRefresh ? {
        name: "footer",
        fn: L((c) => [
          J(yl, q(c, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), To = /* @__PURE__ */ S({
  __name: "check-mark",
  setup(e) {
    return (n, a) => (u(), E(H, {
      icon: "check",
      size: k(oe).small
    }, null, 8, ["size"]));
  }
}), qe = async (e, n, a) => {
  let t = await import(e);
  const s = Object.keys(t);
  return n && s.sort(n), s.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, No = /* @__PURE__ */ S({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = B(null), a = e, t = v(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return C([a.url, a.filter], async () => {
      n.value = await qe(a.url, a.sortMethod, t);
    }), ie(async () => {
      n.value = await qe(a.url, a.sortMethod, t);
    }), (s, l) => (u(!0), p(W, null, G(n.value, (r) => (u(), E(ge(r), fe(_e(a.props)), null, 16))), 256));
  }
}), Ao = { class: "control has-icons-left" }, Po = ["placeholder"], Eo = { class: "icon is-small is-left" }, Io = /* @__PURE__ */ S({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = Y(A), l = v(() => z("Filter.Filter", s)), r = B(null);
    C([r], (d) => {
      d[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (d) => {
      d.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return ie(() => {
      a.default_value && (r.value = a.default_value);
    }), (d, i) => (u(), p("div", Ao, [
      U(g("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (h) => r.value = h),
        onKeypress: o
      }, null, 40, Po), [
        [ve, r.value]
      ]),
      g("span", Eo, [
        J(H, { icon: "filter" })
      ])
    ]));
  }
}), Lo = {
  key: 0,
  class: "message-header"
}, zo = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Vo = { class: "message-body" }, Wo = /* @__PURE__ */ S({
  __name: "message",
  props: {
    type: { default: K.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: ee.normal }
  },
  setup(e) {
    const n = e, a = v(() => n.size === ee.normal ? null : `is-${n.size}`), t = v(() => `is-${n.type}`);
    return (s, l) => (u(), p("article", {
      class: x(["message", a.value, t.value])
    }, [
      n.title ? (u(), p("div", Lo, [
        g("p", null, T(n.title), 1),
        n.hasDelete ? (u(), p("button", zo)) : N("", !0)
      ])) : N("", !0),
      g("div", Vo, [
        I(s.$slots, "default", {}, () => [
          Q(T(n.message), 1)
        ])
      ])
    ], 2));
  }
}), de = /* @__PURE__ */ S({
  __name: "notification",
  props: {
    type: { default: te.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (u(), p("div", {
      class: x(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      I(a.$slots, "default", {}, () => [
        Q(T(n.message), 1)
      ])
    ], 2));
  }
}), Co = {
  key: 0,
  class: "modal-background"
}, Uo = {
  key: 0,
  class: "title"
}, Ro = { class: "block" }, jo = /* @__PURE__ */ S({
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
    const a = e, t = n, s = v(() => {
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
    }), l = v(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (u(), p("div", {
      class: x({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (u(), p("div", Co)) : N("", !0),
      J(ct, {
        incoming: k(we).fadeIn,
        outgoing: k(we).fadeOut,
        speed: k(ue).slower
      }, {
        default: L(() => [
          a.visible ? (u(), p("div", {
            key: 0,
            class: x(l.value)
          }, [
            J(H, {
              icon: s.value,
              size: k(oe).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (u(), p("h1", Uo, T(a.header), 1)) : N("", !0),
            g("div", Ro, T(a.message), 1),
            a.hasClose ? (u(), E(H, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (d) => t("close")),
              size: k(oe).large
            }, null, 8, ["size"])) : N("", !0)
          ], 2)) : N("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Ho = ["title", "disabled"], Go = ["title", "disabled"], Yo = {
  key: 0,
  class: "pagination-list"
}, qo = {
  key: 0,
  class: "pagination-ellipsis"
}, Ko = ["aria-label", "onOnclick"], Qo = /* @__PURE__ */ S({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: !0 },
    hasprevious: { type: Boolean, default: !0 },
    size: { default: ee.small },
    rounded: { type: Boolean, default: !1 },
    buttontype: {},
    totalpages: {},
    currentpage: { default: 1 }
  },
  emits: ["moveForward", "moveBack", "goToPage"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = Y(A), l = v(() => z(a.usenext ? "Pagination.Previous" : "Pagination.Older", s)), r = v(() => z(a.usenext ? "Pagination.Next" : "Pagination.Newer", s)), o = v(() => a.buttontype ? `has-background-${a.buttontype}` : ""), d = v(() => z("Pagination.GoToPage", s)), i = v(() => a.hasprevious ?? !0), h = v(() => a.hasmore ?? !0), c = v(() => {
      if (a.totalpages === void 0)
        return [];
      if (a.totalpages > 5) {
        let b = a.currentpage === void 0 ? Math.floor(a.totalpages / 2) : a.currentpage;
        return [
          1,
          -1,
          b - 1,
          b,
          b + 1,
          -1,
          a.totalpages
        ];
      } else {
        let b = [];
        for (let P = 1; P <= a.totalpages; P++)
          b.push(P);
        return b;
      }
    }), m = function() {
      i || t("moveBack");
    }, D = function() {
      h || t("moveForward");
    }, O = function(b) {
      t("goToPage", b);
    };
    return (b, P) => U((u(), p("nav", {
      class: x(["pagination", "is-centered", o.value, `is-${a.size}`, a.rounded ? "is-rounded" : ""]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      g("a", {
        class: x(["pagination-previous", o.value]),
        title: l.value,
        onClick: m,
        disabled: i.value
      }, [
        J(H, {
          icon: "backward",
          size: k(oe).small
        }, null, 8, ["size"]),
        Q(" " + T(l.value), 1)
      ], 10, Ho),
      g("a", {
        class: x(["pagination-next", o.value]),
        title: r.value,
        onClick: D,
        disabled: h.value
      }, [
        Q(T(r.value) + " ", 1),
        J(H, {
          icon: "forward",
          size: k(oe).small
        }, null, 8, ["size"])
      ], 10, Go),
      a.totalpages !== void 0 ? (u(), p("ul", Yo, [
        (u(!0), p(W, null, G(c.value, (_) => (u(), p("li", null, [
          _ === -1 ? (u(), p("span", qo, "…")) : (u(), p("a", {
            key: 1,
            class: x(_ === -1 ? ["pagination-ellipsis"] : ["pagination-link", _ === a.currentpage ? "is-current" : ""]),
            "aria-label": _ === -1 ? "" : `${d.value} ${_}`,
            onOnclick: (y) => O(_)
          }, T(_ === -1 ? "" : _), 43, Ko))
        ]))), 256))
      ])) : N("", !0)
    ], 2)), [
      [le, a.hasmore || a.hasprevious]
    ]);
  }
});
function pe(e) {
  return typeof e == "function" ? e() : k(e);
}
function Xo(e, n = 200) {
  const a = B(!1), t = B(!1), s = v(() => !a.value && !t.value), l = B(!1), r = B(), o = B(), d = v(() => {
    if (e != null) {
      let h = pe(e);
      return h instanceof Promise ? h : new Promise((c) => c(h));
    }
    return null;
  });
  let i;
  return C(
    () => pe(d),
    (h) => {
      if (a.value = !1, t.value = !1, r.value = null, !h) {
        o.value = null, i && clearTimeout(i), i = null;
        return;
      }
      const c = Number(pe(n)) || 0;
      c > 0 ? (l.value = !1, i && clearTimeout(i), i = setTimeout(() => {
        l.value = !0;
      }, c)) : l.value = !0, h.then((m) => {
        h === pe(d) && (o.value = pe(m), t.value = !0);
      }).catch((m) => {
        h === pe(d) && (r.value = m, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: s, isRejected: a, isResolved: t, isDelayElapsed: l, error: r, data: o };
}
const ce = /* @__PURE__ */ S({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, a = Y(A), t = v(() => z("Form.Error", a)), s = Wl(n), l = Ze(Xo(s.promise, s.pendingDelay));
    return (r, o) => (u(), p(W, null, [
      l.isDelayElapsed && !l.isRejected && !l.isResolved ? I(r.$slots, "pending", {
        key: 0,
        response: l.data
      }, () => [
        J(k(re), {
          size: k(ee).small
        }, null, 8, ["size"])
      ]) : N("", !0),
      l.isRejected ? I(r.$slots, "rejected", fe(q({ key: 1 }, l.error)), () => [
        J(k(de), {
          message: `${t.value}:${l.error.message ?? l.error.toString()}`,
          type: k(te).danger
        }, null, 8, ["message", "type"])
      ]) : N("", !0),
      l.isResolved ? I(r.$slots, "default", {
        key: 2,
        response: l.data
      }) : N("", !0)
    ], 64));
  }
}), Zo = ["value", "max"], re = /* @__PURE__ */ S({
  __name: "progress",
  props: {
    type: { default: K.primary },
    size: { default: ee.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, a = v(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (t, s) => (u(), p("progress", {
      class: x(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, T(a.value ? `${a.value}%` : null), 11, Zo));
  }
}), er = ["href"], tr = {
  key: 0,
  class: "icon-text"
}, ar = { class: "icon" }, sr = { key: 1 }, nr = {
  key: 2,
  class: "navbar-dropdown"
}, Ke = /* @__PURE__ */ S({
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
      s("itemClicked"), a.onClick !== void 0 && a.onClick();
    }, s = n;
    return (l, r) => {
      const o = et("navbar-item", !0);
      return u(), p("a", {
        class: x(["navbar-item", a.active ? "is-active" : "", a.childItems !== void 0 ? "has-dropdown is-hoverable" : ""]),
        href: a.href,
        onClick: t
      }, [
        a.icon !== void 0 && a.icon !== null ? (u(), p("span", tr, [
          g("span", ar, [
            J(H, {
              icon: a.icon
            }, null, 8, ["icon"])
          ]),
          g("span", null, T(a.title), 1)
        ])) : (u(), p("span", sr, T(a.title), 1)),
        a.childItems !== void 0 ? (u(), p("div", nr, [
          (u(!0), p(W, null, G(a.childItems, (d) => (u(), E(o, q(d, {
            onItemClicked: r[0] || (r[0] = (i) => s("itemClicked"))
          }), null, 16))), 256))
        ])) : N("", !0)
      ], 10, er);
    };
  }
}), lr = ["aria-label"], or = { class: "navbar-brand" }, rr = ["aria-expanded"], ir = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), ur = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), dr = /* @__PURE__ */ g("span", { "aria-hidden": "true" }, null, -1), cr = [
  ir,
  ur,
  dr
], pr = {
  key: 0,
  class: "navbar-start"
}, hr = { style: { width: "100px" } }, br = {
  key: 1,
  class: "navbar-end"
}, mr = { style: { width: "100px" } }, fr = /* @__PURE__ */ S({
  __name: "navbar",
  props: {
    startItems: {},
    endItems: {},
    fixedPosition: { default: null },
    ariaLabel: { default: "navigation" }
  },
  setup(e) {
    const n = e, a = B(!1);
    return ie(() => {
      if (n.fixedPosition)
        switch (n.fixedPosition) {
          case Oe.top:
            $(document.body).hasClass("has-navbar-fixed-top") || $(document.body).addClass("has-navbar-fixed-top");
            break;
          case Oe.bottom:
            $(document.body).hasClass("has-navbar-fixed-bottom") || $(document.body).addClass("has-navbar-fixed-bottom");
            break;
        }
    }), (t, s) => (u(), p("nav", {
      class: x(["navbar", n.fixedPosition]),
      role: "navigation",
      "aria-label": n.ariaLabel
    }, [
      g("div", or, [
        I(t.$slots, "brand"),
        g("a", {
          role: "button",
          class: x(["navbar-burger", a.value ? "is-active" : ""]),
          "aria-label": "menu",
          "aria-expanded": a.value ? "true" : "false"
        }, cr, 10, rr)
      ]),
      g("div", {
        class: x(["navbar-menu", a.value ? "is-active" : ""])
      }, [
        n.startItems !== void 0 ? (u(), p("div", pr, [
          J(ce, {
            promise: n.startItems
          }, {
            default: L(({ response: l }) => [
              (u(!0), p(W, null, G(l, (r) => (u(), E(Ke, q(r, {
                onItemClicked: s[0] || (s[0] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              g("div", hr, [
                J(re, {
                  size: k(ee).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0),
        n.endItems !== void 0 ? (u(), p("div", br, [
          J(ce, {
            promise: n.endItems
          }, {
            default: L(({ response: l }) => [
              (u(!0), p(W, null, G(l, (r) => (u(), E(Ke, q(r, {
                onItemClicked: s[1] || (s[1] = (o) => a.value = !1)
              }), null, 16))), 256))
            ]),
            pending: L(() => [
              g("div", mr, [
                J(re, {
                  size: k(ee).small
                }, null, 8, ["size"])
              ])
            ]),
            _: 1
          }, 8, ["promise"])
        ])) : N("", !0)
      ], 2)
    ], 10, lr));
  }
}), gr = /* @__PURE__ */ S({
  __name: "menu",
  props: {
    fixedPosition: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (u(), p("aside", {
      class: x(["menu", n.fixedPosition !== void 0 ? `is-fixed-menu is-fixed-menu-${n.fixedPosition}` : ""])
    }, [
      I(a.$slots, "default")
    ], 2));
  }
}), vr = { class: "menu-label" }, yr = /* @__PURE__ */ S({
  __name: "menu-label",
  props: {
    message: { default: "" }
  },
  setup(e) {
    const n = e;
    return (a, t) => (u(), p("p", vr, [
      Q(T(n.message) + " ", 1),
      I(a.$slots, "default")
    ]));
  }
}), _r = { class: "menu-list" }, kr = ["href", "onClick"], $r = {
  key: 0,
  class: "icon-text"
}, Sr = { class: "icon" }, Mr = { key: 1 }, Dr = /* @__PURE__ */ S({
  __name: "menu-list",
  props: {
    items: {}
  },
  setup(e) {
    const n = e, a = (t) => {
      t.onClick !== void 0 && t.onClick();
    };
    return (t, s) => {
      const l = et("menu-list", !0);
      return u(), p("ul", _r, [
        J(ce, {
          promise: n.items
        }, {
          default: L(({ response: r }) => [
            (u(!0), p(W, null, G(r, (o) => (u(), p("li", null, [
              g("a", {
                href: o.href,
                onClick: (d) => a(o),
                class: x(o.active ? "is-active" : "")
              }, [
                o.icon !== void 0 && o.icon !== null ? (u(), p("span", $r, [
                  g("span", Sr, [
                    J(H, {
                      icon: o.icon
                    }, null, 8, ["icon"])
                  ]),
                  g("span", null, T(o.title), 1)
                ])) : (u(), p("span", Mr, T(o.title), 1))
              ], 10, kr),
              o.childItems !== void 0 ? (u(), E(l, {
                key: 0,
                items: o.childItems
              }, null, 8, ["items"])) : N("", !0)
            ]))), 256))
          ]),
          pending: L(() => [
            g("li", null, [
              J(re, {
                size: k(ee).small
              }, null, 8, ["size"])
            ])
          ]),
          _: 1
        }, 8, ["promise"])
      ]);
    };
  }
}), wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ct,
  Button: X,
  ButtonAdd: go,
  ButtonCancel: gl,
  ButtonDelete: vo,
  ButtonDisable: yo,
  ButtonDownload: _o,
  ButtonEdit: ko,
  ButtonEnable: $o,
  ButtonOkay: vl,
  ButtonPrint: So,
  ButtonRefresh: yl,
  ButtonSave: Mo,
  ButtonUpload: Do,
  Chart: Jo,
  CheckMark: To,
  DynamicSlot: No,
  Filter: Io,
  Icon: H,
  Menu: gr,
  MenuLabel: yr,
  MenuList: Dr,
  Message: Wo,
  NavBar: fr,
  Notification: de,
  PageNotification: jo,
  Pagination: Qo,
  Progress: re,
  Promised: ce
}, Symbol.toStringTag, { value: "Module" })), Br = /* @__PURE__ */ S({
  __name: "draggable-item",
  props: {
    CopyData: { default: null },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "div" },
    handlesearch: {}
  },
  emits: ["started", "stopped"],
  setup(e, { emit: n }) {
    const a = n, t = e, s = B(!1), l = B(!1), r = B(null), o = v(() => (t.disabled ?? !1) || l.value && t.handlesearch !== null), d = v(() => {
      let c = [];
      return o || c.push("has-cursor"), s.value ? c.push("is-move") : c.push("is-grab"), c;
    }), i = (c) => o.value ? (c.preventDefault(), !1) : (c.stopPropagation(), c.dataTransfer.setData("value", JSON.stringify(t.CopyData)), s.value = !0, a("started"), !0), h = () => {
      s.value = !1, l.value = !0, a("stopped");
    };
    return ie(() => {
      if (t.handlesearch) {
        let c = $(r.value).find(t.handlesearch);
        c.length > 0 && (l.value = !0, c.on("mousedown", () => l.value = !1), c.on("mouseup", () => l.value = !0));
      }
    }), (c, m) => (u(), E(ge(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: i,
      onDragend: h,
      class: x(d.value)
    }, {
      default: L(() => [
        I(c.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), Or = /* @__PURE__ */ S({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = B(!1), l = B(null), r = B(null);
    v(() => a.tag ?? "div");
    const o = (m) => {
      const D = r.value.getBoundingClientRect(), O = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = Z.center;
      return m.x < O.x ? m.y < O.y ? b = Z.topLeft : b = Z.bottomLeft : m.y < O.y ? b = Z.topRight : b = Z.bottomRight, l.value = b, l.value;
    }, d = (m) => {
      m.preventDefault(), s.value = !0, t("itemEntered", o(m));
    }, i = (m) => {
      s.value = !0, t("itemExited", o(m));
    }, h = (m) => {
      m.preventDefault(), t("itemMoved", o(m));
    }, c = (m) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(m.dataTransfer.getData("value"))))
        return !1;
      m.stopPropagation(), m.preventDefault(), t("itemAdded", JSON.parse(m.dataTransfer.getData("value")), l.value), s.value = !1;
    };
    return (m, D) => (u(), E(ge(a.tag), {
      ref_key: "handle",
      ref: r,
      class: x({ "is-bordered": s.value }),
      onDragenter: d,
      onDragleave: i,
      onDrop: c,
      onDragover: h
    }, {
      default: L(() => [
        I(m.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), kl = /* @__PURE__ */ S({
  __name: "list",
  props: {
    type: {},
    numbered: { type: Boolean },
    compact: { type: Boolean },
    outlined: { type: Boolean },
    highlighted: { type: Boolean }
  },
  setup(e) {
    const n = e, a = v(() => {
      var t = ["block-list", "has-radius", `is-${n.type ?? "primary"}`];
      return n.compact && t.push("is-small"), n.outlined && t.push("is-outlined"), n.highlighted && t.push("is-highlighted"), t;
    });
    return (t, s) => (u(), E(ge(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
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
    const a = e, t = n, s = v(() => {
      var l = [];
      return a.type && l.push("is-" + a.type), a.outlined && l.push("is-outlined"), a.highlighted && l.push("is-highlighted"), a.icon && l.push("has-icon"), l;
    });
    return (l, r) => (u(), p("li", {
      class: x(s.value)
    }, [
      a.icon ? (u(), p("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        J(H, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : N("", !0),
      I(l.$slots, "default")
    ], 2));
  }
}), Fr = /* @__PURE__ */ S({
  __name: "sortable",
  props: {
    Items: {},
    type: { default: K.primary },
    compact: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    highlighted: { type: Boolean, default: !1 }
  },
  emits: ["sorted"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = B([]), l = B(-1), r = B(-1), o = B(null);
    C(a.Items, (m, D) => {
      s.value = [...D];
    }), ie(() => {
      a.Items !== null && (s.value = [...a.Items]);
    });
    const d = (m) => {
      var D = m.target.getBoundingClientRect(), O = {
        x: D.x + D.width / 2,
        y: D.y + D.height / 2
      };
      let b = Z.center;
      return m.y < O.y ? b = Z.top : b = Z.bottom, b;
    }, i = (m, D) => {
      D.stopPropagation(), l.value = m, D.dataTransfer.setData("value", null);
    }, h = (m, D) => {
      l.value && (D.stopPropagation(), m != l.value ? (r.value = m, o.value = d(D)) : (r.value = -1, o.value = null));
    }, c = (m) => {
      if (l.value) {
        m.stopPropagation();
        var D = r.value + (o.value == Z.top ? 0 : 1), O = s.value.splice(D, 1)[0];
        D >= l.value && D--, s.value.splice(D, 0, O), r.value = -1, o.value = null, l.value = -1, t("sorted", s.value);
      }
    };
    return (m, D) => (u(), E(kl, {
      type: m.type,
      compact: m.compact,
      outlined: m.outlined,
      highlighted: m.highlighted,
      onDrop: c
    }, {
      default: L(() => [
        (u(!0), p(W, null, G(s.value, (O, b) => (u(), p(W, null, [
          U(J(Me, null, {
            default: L(() => [
              J(de, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === k(Z).top]
          ]),
          J(Me, {
            draggable: "true",
            onDragstart: (P) => i(b, P),
            onDragend: D[0] || (D[0] = (P) => l.value = null),
            onDragover: (P) => h(b, P),
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
          U(J(Me, null, {
            default: L(() => [
              J(de, { light: !0 }, {
                default: L(() => [
                  Q(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [le, r.value === b && l.value !== b && o.value === k(Z).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Br,
  DropZone: Or,
  Sortable: Fr
}, Symbol.toStringTag, { value: "Module" })), We = "HiddenFields", Ce = "DisabledFields", Jr = (e) => e, ne = (e, n) => {
  const a = n("Translate", Jr);
  return v(() => e.translate ?? a);
};
function Ue(e, n) {
  const a = n(We), t = n(Ce), s = v(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), l = v(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: s, disabledValues: l };
}
const $l = (e) => {
  let n = [], a = [], t = 0;
  return e.forEach((s) => {
    let l = s.form_columns ?? 12;
    t + l > 12 && (n.push(a), a = [], t = 0), a.push(s), t += l, t === 12 && (n.push(a), a = [], t = 0);
  }), a.length > 0 && n.push(a), n;
};
async function Re(e) {
  let n = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? n = a : n = Promise.resolve(a);
  let t = await n, s = [];
  return t.value !== void 0 ? s = t.value : s = t, s;
}
const Tr = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Nr = { class: "control" }, Ar = { class: "tags has-addons" }, Pr = { class: "tag is-link" }, Er = ["onClick"], Ir = { key: 0 }, Lr = ["placeholder"], zr = { class: "dropdown-menu" }, Vr = { class: "dropdown-content" }, Wr = ["onClick"], Cr = {
  key: 1,
  class: "dropdown-item"
}, Sl = /* @__PURE__ */ S({
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
    const t = a, s = e, l = ne(s, A), r = B([]), o = B(null), d = B(null), i = B(null), h = B(null);
    C(o, async (w) => {
      if (w != null) {
        if (w.length >= 2)
          if (s.values != null && s.values != null) {
            let V = [];
            for (let f = 0; f < s.values.length && ((s.values[f].name.toUpperCase().indexOf(w.toUpperCase()) >= 0 || s.values[f].id.toUpperCase().indexOf(w.toUpperCase()) >= 0) && V.push(s.values[f]), V.length != 10); f++)
              ;
            d.value = V;
          } else {
            let f = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(w)}`)).json();
            f.length > 10 && f.splice(10, f.length - 10), d.value = f;
          }
      } else
        d.value = null, $(h.value).empty();
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
        const V = await Promise.all(
          (Array.isArray(w) ? w : [w]).map(async (f) => {
            if (f.id !== void 0 && f.name !== void 0)
              return f;
            {
              let M = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${f.id === void 0 ? "q=" + encodeURIComponent(f) : "id=" + encodeURIComponent(f.id)}`)).json();
              return M.length > 0 ? (s.disabled && (M[0].readonly = !0), M[0]) : null;
            }
          })
        );
        r.value = V.filter((f) => f !== null), t("value_changed", { name: s.name, value: c() });
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
      h.value.focus();
    }, _ = (w) => {
      r.value.push(w), b(), t("value_changed", { name: s.name, value: c() });
    }, y = (w) => {
      r.value.splice(w, 1), P(), t("value_changed", { name: s.name, value: c() });
    };
    return n({ getValue: c, setValue: m }), (w, V) => (u(), p("div", {
      class: "control autocomplete",
      onBlur: b,
      onClick: P
    }, [
      g("div", Tr, [
        (u(!0), p(W, null, G(r.value, (f, ae) => (u(), p("div", Nr, [
          g("div", Ar, [
            g("a", Pr, T(k(l)(f.name)), 1),
            f.readonly ? N("", !0) : (u(), p("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (M) => y(ae)
            }, null, 8, Er))
          ])
        ]))), 256)),
        s.disabled ? N("", !0) : (u(), p("div", Ir, [
          U(g("span", {
            ref_key: "contentSpan",
            ref: h,
            placeholder: k(l)(s.title),
            contenteditable: "",
            class: x(i.value),
            onFocus: V[0] || (V[0] = (f) => {
              i.value = "is-focused";
            }),
            onBlur: V[1] || (V[1] = (f) => {
              i.value = null;
            }),
            onKeydown: O,
            onPaste: D
          }, null, 42, Lr), [
            [le, r.value.length < s.limit || s.limit == null]
          ])
        ]))
      ]),
      g("div", {
        class: x(["dropdown", { "is-active": d.value != null && o.value != null && o.value != "" }])
      }, [
        g("div", zr, [
          g("div", Vr, [
            d.value != null && d.value.length > 0 ? (u(!0), p(W, { key: 0 }, G(d.value, (f) => (u(), p("a", {
              class: "dropdown-item",
              onClick: (ae) => _(f)
            }, T(k(l)(f.name)), 9, Wr))), 256)) : (u(), p("a", Cr, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Ae = /* @__PURE__ */ S({
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
    const a = e, t = n, s = ne(a, A);
    return (l, r) => (u(), E(X, {
      type: l.sstyle,
      icon: a.icon ? a.icon : null,
      title: k(s)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), Ur = { class: "checkbox is-block" }, Rr = ["value", "disabled"], Ml = /* @__PURE__ */ S({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = Y(A), l = v(() => z("Form.Error", s)), r = a, o = ne(t, A), d = B([]), i = B(!1), h = v(async () => {
      if (t.values == null)
        return [];
      {
        let b = await Re(t.values), P = b.filter((_) => _.selected).map((_) => _.value);
        return d.value === null || d.value.length == 0 ? d.value = P.length > 0 ? [...P] : [] : (P = d.value, b = b.map((_) => ({
          label: _.label,
          value: _.value,
          selected: P.some((y) => y === _.value)
        }))), b;
      }
    });
    C(d, (b) => {
      r("value_changed", { name: t.name, value: c() });
    });
    const c = () => d.value.length == 0 ? null : d.value, m = (b) => {
      i.value = !0, d.value.splice(0), b !== null && (d.value = [...b]), i.value = !1, r("value_changed", { name: t.name, value: c() });
    }, { hiddenValues: D, disabledValues: O } = Ue(t.name, A);
    return n({ getValue: c, setValue: m }), (b, P) => (u(), p("div", null, [
      J(ce, { promise: h.value }, {
        default: L(({ response: _ }) => [
          _ !== null ? (u(!0), p(W, { key: 0 }, G(_, (y) => U((u(), p("label", Ur, [
            U(g("input", {
              type: "checkbox",
              class: "checkbox",
              value: y.value,
              "onUpdate:modelValue": P[0] || (P[0] = (w) => d.value = w),
              disabled: t.disabled || k(O).some((w) => w === y.value.toString())
            }, null, 8, Rr), [
              [Le, d.value]
            ]),
            Q(" " + T(k(o)(y.label)), 1)
          ], 512)), [
            [le, !k(D).some((w) => w === y.value.toString())]
          ])), 256)) : N("", !0)
        ]),
        pending: L(() => [
          J(k(re))
        ]),
        rejected: L(() => [
          J(k(de), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), jr = { class: "checkbox" }, Hr = ["name", "disabled"], Gr = {
  key: 0,
  class: "help is-danger"
}, Dl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = ne(t, A), r = v(() => l.value(t.label)), o = B(!1);
    return C(o, (h) => s("value_changed", { name: t.name, value: h })), n({ getValue: () => o.value, setValue: (h) => {
      o.value = h;
    } }), (h, c) => (u(), p("label", jr, [
      U(g("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => o.value = m)
      }, null, 8, Hr), [
        [Le, o.value]
      ]),
      Q(" " + T(r.value) + " ", 1),
      t.required ? (u(), p("span", Gr, "*")) : N("", !0)
    ]));
  }
}), Ne = (e, n) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + n), a;
}, j = (e, n, a) => {
  let t = e;
  for (; t.length < a; )
    t = n + t;
  return t;
}, ke = (e, n, a) => {
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
      let r = a.getTimezoneOffset() * -1, o = parseInt((r / 60).toFixed(0)), d = r - Math.abs(o) * 60;
      switch (e) {
        case "K":
        case "zzz":
          t += `${o < 0 ? "-" : "+"}${j(Math.abs(o).toString(), "0", 2) + ":" + j(Math.abs(d).toString(), "0", 2)}`;
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
}, he = (e, n, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", s = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        s != "" && (t += ke(s, n, e), s = ""), t += a.charAt(l + 1), l++;
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
        s != "" && s.charAt(0) != a.charAt(l) ? (t += ke(s, n, e), s = "") : s += a.charAt(l);
        break;
      default:
        s != "" && (t += ke(s, n, e), s = ""), t += a.charAt(l);
        break;
    }
  return s != "" && (t += ke(s, n, e), s = ""), t;
}, Yr = { class: "control" }, qr = ["name", "id", "disabled"], Qe = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), je = /* @__PURE__ */ S({
  __name: "time",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null), r = v(() => {
      if (l.value == null || l.value == "")
        return null;
      var i = Number(l.value.substring(3, 5)), h = Number(l.value.substring(0, 2)) % 12 + i / 60;
      return {
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='18.5' fill='none' stroke='%23222' stroke-width='3' /><path d='M20,4 20,8 M4,20 8,20 M36,20 32,20 M20,36 20,32' stroke='%23bbb' stroke-width='1' /><circle cx='20' cy='20' r='2' fill='%23222' stroke='%23222' stroke-width='2' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,4 20.5,4 21.5,24.5 Z' fill='%23222' style='transform:rotate(${360 * i / 60}deg); transform-origin: 50% 50%;' /></svg>"), url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M18.5,24.5 19.5,8.5 20.5,8.5 21.5,24.5 Z' style='transform:rotate(${360 * h / 12}deg); transform-origin: 50% 50%;' /></svg>")`
      };
    });
    return C(l, (i) => {
      s("value_changed", { name: t.name, value: i });
    }), n({ getValue: () => l.value, setValue: (i) => {
      if (i != null && Qe.test(i)) {
        var h = Qe.exec(i);
        i = (h[3] == "AM" ? h[1] : (parseInt(h[1]) + 12).toFixed(0)) + ":" + h[2] + ":00";
      }
      l.value = i;
    } }), (i, h) => (u(), p("div", Yr, [
      U(g("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": h[0] || (h[0] = (c) => l.value = c),
        disabled: t.disabled,
        style: Ie(r.value)
      }, null, 12, qr), [
        [ve, l.value]
      ])
    ]));
  }
});
const Kr = { class: "control has-icons-left has-icons-right" }, Qr = ["name", "id", "placeholder", "disabled"], Xr = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), Zr = { class: "modal-content" }, ei = { class: "panel is-primary is-dateselect" }, ti = { class: "panel-heading" }, ai = { class: "columns card-header-title" }, si = { class: "column" }, ni = { class: "column has-text-centered" }, li = { class: "column has-text-right" }, oi = { class: "panel-block" }, ri = { class: "table is-striped has-text-centered" }, ii = ["onClick"], ui = { key: 0 }, di = {
  colspan: "100%",
  class: "has-text-centered"
}, ci = { class: "panel-block" }, ye = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), $e = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), wl = /* @__PURE__ */ S({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = e, l = a, r = B(!1), o = B(null), d = B(null), i = Ze({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), h = Y(A), c = De({
      Sun: v(() => z("Date.Weekdays.Sun", h)),
      Mon: v(() => z("Date.Weekdays.Mon", h)),
      Tue: v(() => z("Date.Weekdays.Tue", h)),
      Wed: v(() => z("Date.Weekdays.Wed", h)),
      Thu: v(() => z("Date.Weekdays.Thu", h)),
      Fri: v(() => z("Date.Weekdays.Fri", h)),
      Sat: v(() => z("Date.Weekdays.Sat", h))
    }), m = v(() => o.value !== null && (s.includeTime ? $e : ye).test(o.value)), D = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!$e.test(o.value) && s.includeTime)
          return null;
        if (!s.includeTime && !ye.test(o.value))
          return null;
        if (ye.test(o.value) && s.includeTime)
          return null;
        let M = s.includeTime ? $e.exec(o.value) : ye.exec(o.value);
        return new Date(
          parseInt(M[3]),
          parseInt(M[2]) - 1,
          parseInt(M[1]),
          s.includeTime ? parseInt(M[4]) : 0,
          s.includeTime ? parseInt(M[5]) : 0,
          0,
          0
        );
      }
    };
    C(o, (M) => {
      if (M == null)
        l("value_changed", { name: s.name, value: null }), i.Month = (/* @__PURE__ */ new Date()).getMonth(), i.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!ye.test(M) && !$e.test(M)) {
        M = M.replaceAll(/[^0-9]/g, "");
        for (var F = [], R = 0; R < M.length; R += 2)
          R == 4 ? (F.push(M.substring(R, Math.min(M.length - R, 4) + R)), R += 2) : F.push(M.substring(R, Math.min(M.length - R, 2) + R));
        F.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(F[0]) || F.splice(0), F.length > 1 && (/^[0-3]/.test(F[1]) ? /^(01|03|05|07|08|10|12)$/.test(F[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(F[1]) || F.splice(1) : /^(02|04|06|09|11)$/.test(F[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(F[1]) || F.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(F[1]) || F.splice(1) : F.splice(1)), F.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(F[3]) || F.splice(3)), F.length > 4 && (/^[0-5][0-9]?$/.test(F[4]) || F.splice(4))), M = F.join(""), !s.includeTime && M.length > 8 && (M = M.substring(0, 8)), M.length >= 2 && (M = M.substring(0, 2) + "-" + (M.length > 2 ? M.substring(2) : "")), M.length >= 5 && (M = M.substring(0, 5) + "-" + (M.length > 5 ? M.substring(5) : "")), M.length >= 9 && s.includeTime && (M = M.substring(0, 9) + " " + (M.length > 9 ? M.substring(9) : "")), M.length >= 11 && (M = M.substring(0, 11) + ":" + (M.length > 11 ? M.substring(11) : "")), o.value = M;
      } else {
        var se = D();
        m && l("value_changed", { name: s.name, value: se }), i.Month = se.getMonth(), i.Year = se.getFullYear();
      }
    });
    const O = v(() => he(new Date(i.Year, i.Month, 1), h, "MMMM")), b = v(() => {
      var M = [], F = new Date(i.Year, i.Month, 1);
      F = Ne(F, F.getDay() * -1);
      for (var R = D(), se = Ne(new Date(i.Year, i.Month, 1), 32).getMonth(); F.getMonth() != se; ) {
        for (var xe = [], He = 0; He < 7; He++)
          xe.push({
            Number: F.getDate(),
            Disabled: F.getMonth() != i.Month,
            isToday: he(F, h, "yyyy-MM-dd") == he(/* @__PURE__ */ new Date(), h, "yyyy-MM-dd"),
            isSelected: R != null && he(F, h, "yyyy-MM-dd") == he(R, h, "yyyy-MM-dd")
          }), F = Ne(F, 1);
        M.push(xe);
      }
      return M;
    });
    n({ getValue: D, setValue: function(M) {
      M == null ? o.value = null : o.value = he(M, h, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
    } });
    const _ = (M) => {
      M.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + M.value : o.value = `${j((i.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year} ${M.value}`;
    }, y = (M) => {
      if (!M.Disabled && !M.isSelected)
        if (o.value === null)
          o.value = `${j(M.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}` + (s.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var F = o.value.split(" ");
          F[0] = `${j(M.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}`, o.value = `${F[0]}${F.length > 1 ? " " + F[1] : ""}`;
        }
    }, w = () => {
      o.value = d.value, r.value = !1;
    }, V = () => {
      s.disabled || (d.value = o.value, r.value = !0);
    }, f = () => {
      s.disabled || (o.value = null);
    }, ae = (M) => {
      i.Month + M == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + M == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += M;
    };
    return (M, F) => (u(), p("div", null, [
      g("div", Kr, [
        U(g("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": F[0] || (F[0] = (R) => o.value = R),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, Qr), [
          [ve, o.value]
        ]),
        g("span", {
          class: "icon is-small is-left is-clickable",
          onClick: V
        }, [
          J(k(H), { icon: "calendar-alt" })
        ]),
        g("span", {
          class: "icon is-small is-right is-clickable",
          onClick: f
        }, [
          J(k(H), { icon: "window-close" })
        ])
      ]),
      g("div", {
        class: x(["modal", { "is-active": r.value }])
      }, [
        Xr,
        g("div", Zr, [
          g("div", ei, [
            g("div", ti, [
              g("div", ai, [
                g("div", si, [
                  J(k(H), {
                    icon: "arrow-circle-left",
                    onClick: F[1] || (F[1] = (R) => ae(-1))
                  })
                ]),
                g("div", ni, T(O.value) + " " + T(i.Year), 1),
                g("div", li, [
                  J(k(H), {
                    icon: "arrow-circle-right",
                    onClick: F[2] || (F[2] = (R) => ae(1))
                  })
                ])
              ])
            ]),
            g("div", oi, [
              g("table", ri, [
                g("thead", null, [
                  g("tr", null, [
                    g("th", null, T(k(c).Sun), 1),
                    g("th", null, T(k(c).Mon), 1),
                    g("th", null, T(k(c).Tue), 1),
                    g("th", null, T(k(c).Wed), 1),
                    g("th", null, T(k(c).Thu), 1),
                    g("th", null, T(k(c).Fri), 1),
                    g("th", null, T(k(c).Sat), 1)
                  ])
                ]),
                g("tbody", null, [
                  (u(!0), p(W, null, G(b.value, (R) => (u(), p("tr", null, [
                    (u(!0), p(W, null, G(R, (se) => (u(), p("td", {
                      class: x(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (xe) => y(se)
                    }, T(se.Number), 11, ii))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (u(), p("tfoot", ui, [
                  g("tr", null, [
                    g("td", di, [
                      J(je, {
                        ref: t.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValue_changed: _
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : N("", !0)
              ])
            ]),
            g("div", ci, [
              J(k(vl), {
                addonclass: "card-footer-item",
                disabled: !m.value,
                onClick: F[3] || (F[3] = (R) => r.value = !1)
              }, null, 8, ["disabled"]),
              J(k(gl), {
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
const Bl = /* @__PURE__ */ S({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: a }) {
    let t, s;
    const l = Yl(A);
    ze([`${l}summernote-lite.min.css`]), [t, s] = Cl(() => import(`${l}summernote`)), await t, s();
    const r = B(null), o = e, d = a;
    return C([o.disabled], (c) => {
      r.value != null && $(r.value).summernote(c ? "disable" : "enable");
    }), n({ getValue: () => $(r.value).summernote("code"), setValue: (c) => {
      $(r.value).summernote("code", c);
    } }), ie(() => {
      $(r.value).summernote({
        height: 400,
        callbacks: {
          onChange: function(c) {
            d("value_changed", { name: o.name, value: c });
          }
        }
      }), (o.disabled ?? !1) && $(r.value).summernote("disable");
    }), Ul(() => {
      $(r.value).summernote("destroy");
    }), (c, m) => (u(), p("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
    }, null, 512));
  }
}), Pe = /* @__PURE__ */ S({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, A);
    return (t, s) => (u(), E(ge(n.subtype), null, {
      default: L(() => [
        Q(T(k(a)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), pi = ["name"], Ol = /* @__PURE__ */ S({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null);
    return C(l, (d) => s("value_changed", { name: t.name, value: d })), n({ getValue: () => l.value, setValue: (d) => {
      l.value = d;
    } }), (d, i) => U((u(), p("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => l.value = h)
    }, null, 8, pi)), [
      [ve, l.value]
    ]);
  }
}), hi = ["name", "disabled", "min", "max", "step"], Fl = /* @__PURE__ */ S({
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
      let d = parseInt(l.value);
      return t.min !== void 0 && d < t.min * 1 || t.max !== void 0 && d > t.max * 1 ? null : d;
    }, o = (d) => {
      l.value = d === null ? "" : d.toString();
    };
    return C([l], (d) => s("value_changed", { name: t.name, value: r() })), n({ getValue: r, setValue: o }), (d, i) => U((u(), p("input", {
      type: "number",
      class: "input",
      name: d.name,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => l.value = h),
      disabled: d.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, hi)), [
      [ve, l.value]
    ]);
  }
}), bi = ["id"], Ee = /* @__PURE__ */ S({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: {}
  },
  setup(e) {
    const n = e, a = ne(n, A);
    return (t, s) => (u(), p("p", {
      id: n.name
    }, T(k(a)(n.label)), 9, bi));
  }
}), mi = { class: "radio" }, fi = ["name", "value", "disabled"], gi = /* @__PURE__ */ g("br", null, null, -1), xl = /* @__PURE__ */ S({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = Y(A), l = v(() => z("Form.Error", s)), r = a, o = ne(t, A), d = B(null), i = function() {
      return d.value;
    };
    C(d, (O) => {
      r("value_changed", { name: t.name, value: i() });
    });
    const h = v(async () => {
      if (t.values == null)
        return [];
      {
        let O = await Re(t.values);
        return d.value === null && O.some((b) => b.selected) && (d.value = O.find((b) => b.selected).value), O.map((b) => ({
          label: b.label,
          value: b.value,
          selected: d.value === b.value
        }));
      }
    }), c = (O) => {
      d.value = O;
    }, { hiddenValues: m, disabledValues: D } = Ue(t.name, A);
    return n({ getValue: i, setValue: c }), (O, b) => (u(), p("div", null, [
      J(ce, { promise: h.value }, {
        default: L(({ response: P }) => [
          O.values != null ? (u(!0), p(W, { key: 0 }, G(P, (_) => (u(), p(W, null, [
            U(g("label", mi, [
              g("input", {
                type: "radio",
                name: t.name,
                value: _.value,
                class: "radio",
                disabled: t.disabled || k(D).some((y) => y === _.value.toString())
              }, null, 8, fi),
              Q(" " + T(k(o)(_.label)), 1)
            ], 512), [
              [le, !k(m).some((y) => y === _.value.toString())]
            ]),
            gi
          ], 64))), 256)) : N("", !0)
        ]),
        pending: L(() => [
          J(k(re))
        ]),
        rejected: L(() => [
          J(k(de), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), vi = { class: "select" }, yi = ["id", "name", "multiple", "disabled"], _i = ["value", "selected", "disabled"], ki = ["label"], $i = ["value", "selected", "disabled"], Jl = (e, n, a) => {
  let t = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, s = a.length;
  return a.push(t), n.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = Jl(t.label, l, a);
  }), a[s].values.length == 0 && a.splice(s, 1), a;
}, Tl = /* @__PURE__ */ S({
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
    const t = e, s = Y(A), l = v(() => z("Form.Error", s)), r = a, o = ne(t, A), d = B(null), i = B(!1), h = v(async () => {
      if (t.values == null)
        return [];
      {
        let b = await Re(t.values), P = b.filter((y) => y.selected).map((y) => y.value);
        b.some((y) => y.values !== void 0) && b.filter((y) => y.values !== void 0).forEach((y) => {
          P = P.concat(
            y.values.filter((w) => w.selected).map((w) => w.value)
          );
        }), d.value === null || d.value.length === 0 ? d.value = null : (b = b.map((y) => {
          let w = y;
          return w.values !== void 0 && (w.values = w.values.map((V) => (V.selected = d.value.some((f) => f === V.value), V))), w;
        }), d.value.forEach((y) => {
          b.some((w) => w.value !== void 0 && w.value === y || w.values !== void 0 && w.values.some((V) => V.value === y)) || b.push({
            label: y,
            value: y
          });
        }));
        let _ = [];
        return b.forEach((y) => {
          y.values === void 0 ? _.push(y) : _ = Jl(y.label, y, _);
        }), _;
      }
    }), c = () => d.value == null || d.value.length == 0 ? null : t.multiple ? d.value.slice() : Array.isArray(d.value) ? d.value[0] : d.value;
    C(d, () => {
      i.value || r("value_changed", { name: t.name, value: c() });
    }), C(i, (b) => {
      b || r("value_changed", { name: t.name, value: c() });
    });
    const m = (b) => {
      i.value = !0, b != null ? t.multiple ? d.value = Array.isArray(b) ? b : [b] : d.value = b : t.multiple ? d.value = [] : d.value = null, i.value = !1;
    }, { hiddenValues: D, disabledValues: O } = Ue(t.name, A);
    return n({ getValue: c, setValue: m }), (b, P) => (u(), p("div", vi, [
      h.value != null ? (u(), E(ce, {
        key: 0,
        promise: h.value
      }, {
        default: L(({ response: _ }) => [
          U(g("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: x([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": P[0] || (P[0] = (y) => d.value = y),
            disabled: t.disabled
          }, [
            _ != null ? (u(!0), p(W, { key: 0 }, G(_, (y) => (u(), p(W, null, [
              y.values == null ? U((u(), p("option", {
                key: 0,
                value: y.value,
                selected: y.selected,
                disabled: k(O).some((w) => w === y.value.toString())
              }, T(k(o)(y.label)), 9, _i)), [
                [le, !k(D).some((w) => w === y.value.toString())]
              ]) : N("", !0),
              y.values != null ? (u(), p("optgroup", {
                key: 1,
                label: k(o)(y.label)
              }, [
                (u(!0), p(W, null, G(y.values, (w) => U((u(), p("option", {
                  value: w.value,
                  selected: w.selected,
                  disabled: k(O).some((V) => V === w.value.toString())
                }, T(k(o)(w.label)), 9, $i)), [
                  [le, !k(D).some((V) => V === w.value.toString())]
                ])), 256))
              ], 8, ki)) : N("", !0)
            ], 64))), 256)) : N("", !0)
          ], 10, yi), [
            [Rl, d.value]
          ])
        ]),
        pending: L(() => [
          J(k(re))
        ]),
        rejected: L(() => [
          J(k(de), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : N("", !0)
    ]));
  }
}), Si = { class: "field" }, Mi = ["id", "name", "disabled"], Di = ["for"], wi = {
  key: 0,
  class: "help is-danger"
}, Nl = /* @__PURE__ */ S({
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
    const t = e, s = a, l = ne(t, A), r = B(!1);
    return C(r, (i) => s("value_changed", { name: t.name, value: i })), n({ getValue: () => r.value, setValue: (i) => {
      r.value = i;
    } }), (i, h) => (u(), p("div", Si, [
      U(g("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": h[0] || (h[0] = (c) => r.value = c),
        disabled: t.disabled
      }, null, 8, Mi), [
        [Le, r.value]
      ]),
      g("label", { for: i.name }, [
        Q(T(k(l)(t.label)) + " ", 1),
        t.required ? (u(), p("span", wi, "*")) : N("", !0)
      ], 8, Di)
    ]));
  }
}), Bi = ["type", "name", "disabled", "maxlength"], Al = /* @__PURE__ */ S({
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
    return C(l, (d) => s("value_changed", { name: t.name, value: d })), n({ getValue: () => l.value, setValue: (d) => {
      l.value = d;
    } }), (d, i) => U((u(), p("input", {
      type: d.subtype,
      class: "input",
      name: d.name,
      disabled: d.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": i[0] || (i[0] = (h) => l.value = h)
    }, null, 8, Bi)), [
      [jl, l.value]
    ]);
  }
}), Oi = ["name", "rows", "cols", "maxlength", "disabled"], Pl = 9, be = String.fromCharCode(Pl), Se = String.fromCharCode(10), El = /* @__PURE__ */ S({
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
    const d = (i) => {
      if (t.supportsTab) {
        let h = r();
        switch (i.keyCode) {
          case Pl:
            let c = i.target.selectionStart, m = i.target.selectionEnd, D = h.substring(0, c), O = h.length > m ? h.substring(m) : "", b = c == m ? "" : h.substring(c, m);
            if (b.indexOf(String.fromCharCode(10)) < 0)
              i.shiftKey ? b.startsWith(be) ? (b = b.substring(1), c--) : D.endsWith(be) && (D = D.substring(0, D.length - 1), c--) : b = be + b;
            else {
              let P = !1;
              b.endsWith(Se) && (P = !0, b = b.substring(0, b.length - 1));
              let _ = b.split(Se);
              b = "", i.shiftKey && D.endsWith(be) && (D = D.substring(0, D.length - 1), c--), _.forEach((y, w) => {
                i.shiftKey && y.startsWith(be) ? y = y.substring(1) : i.shiftKey || (y = be + y), b += y + (w === _.length - 1 ? "" : Se);
              }), P && (b += Se);
            }
            return h = D + b + O, c += b.length == 1 ? 1 : 0, m = c + (b.length == 1 ? 0 : b.length), o(h), i.target.selectionStart = c, i.target.selectionEnd = m, i.target.focus(), i.preventDefault != null && i.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (i, h) => U((u(), p("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: d,
      "onUpdate:modelValue": h[0] || (h[0] = (c) => l.value = c)
    }, null, 40, Oi)), [
      [ve, l.value]
    ]);
  }
}), Fi = { class: "columns" }, Il = /* @__PURE__ */ S({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = A(We), r = A(Ce);
    n({ setValue: (c) => {
      h.forEach((m) => {
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
    const h = t.inputs.map((c) => B(null));
    return (c, m) => (u(), p("div", Fi, [
      (u(!0), p(W, null, G(t.inputs, (D, O) => (u(), E(Ll, {
        ref_for: !0,
        ref: (b) => k(h)[O] = b,
        input: D,
        onValue_changed: m[0] || (m[0] = (b) => s("value_changed", b)),
        onButton_clicked: m[1] || (m[1] = (b) => s("button_clicked", b)),
        disabled: t.disabled || k(r).some((b) => b === D.name),
        hidden: k(l).some((b) => b === D.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), xi = ["id", "name"], Ji = /* @__PURE__ */ S({
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
    const r = v(() => {
      let h = $l(t.fields);
      return l = h.map((c) => B(null)), h;
    });
    return n({ isValid: () => !l.some((h) => !(h.isValid === void 0 || h.isValid())), setValue: (h) => l.forEach((c) => c.setValue(h)), getValue: () => {
      var h = {};
      return l.forEach((c) => {
        h = $.extend(h, c.getValue());
      }), h;
    } }), (h, c) => U((u(), p("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (u(!0), p(W, null, G(r.value, (m, D) => (u(), E(Il, {
        ref_for: !0,
        ref: (O) => k(l)[D] = O,
        inputs: m,
        disabled: t.disabled,
        onValue_changed: c[0] || (c[0] = (O) => s("value_changed", O)),
        onButton_clicked: c[1] || (c[1] = (O) => s("button_clicked", O))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, xi)), [
      [le, !t.hidden]
    ]);
  }
}), Ti = ["for"], Ni = {
  key: 0,
  class: "help is-danger"
}, Ai = { class: "control" }, Pi = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Ei = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], Ll = /* @__PURE__ */ S({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = a, l = e, r = ne(l, A), o = De(B(l.input.type)), d = v(() => {
      let f = null;
      switch (l.input.type) {
        case "autocomplete":
          f = Sl;
          break;
        case "button":
          f = Ae;
          break;
        case "checkbox-group":
          f = Ml;
          break;
        case "checkbox":
          f = Dl;
          break;
        case "date":
          f = wl;
          break;
        case "full-editor":
          f = Bl;
          break;
        case "header":
          f = Pe;
          break;
        case "hidden":
          f = Ol;
          break;
        case "number":
          f = Fl;
          break;
        case "paragraph":
          f = Ee;
          break;
        case "radio-group":
          f = xl;
          break;
        case "select":
          f = Tl;
          break;
        case "Switch":
          f = Nl;
          break;
        case "text":
          f = Al;
          break;
        case "textarea":
          f = El;
          break;
        case "time":
          f = je;
          break;
        case "subform":
          f = Ji;
          break;
      }
      return f;
    }), i = function(f) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(f);
    };
    ie(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && i(l.input.value);
    });
    const h = v(() => l.input.disabled ?? l.disabled ?? !1), c = v(() => `is-${l.input.form_columns ?? 12}`), m = v(() => l.input.name), D = v(() => l.input.processVariable ?? l.input.name), O = v(() => Pi.some((f) => f === l.input.type) && l.input.label !== void 0 && l.input.label !== null), b = v(() => {
      let f = $.extend({}, l.input);
      return delete f.type, f.className != null && delete f.className, f.form_columns != null && delete f.form_columns, Ei.some((ae) => ae === l.input.type) && (f.translate = l.translate), f.disabled = l.disabled, f;
    }), P = (f) => {
      if (f.value !== void 0 && f.value !== null && Array.isArray(f.value)) {
        let ae = [...f.value];
        f.value = ae;
      }
      s("value_changed", f);
    }, _ = (f) => {
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
    } }), (f, ae) => U((u(), p("div", {
      class: x(["field column", [c.value]])
    }, [
      l.input.type == "header" ? (u(), E(Pe, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (u(), E(Ee, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (u(), E(Ae, {
        key: 2,
        name: l.input.name,
        sstyle: l.input.style,
        className: l.input.className,
        icon: l.input.icon,
        label: l.input.label,
        disabled: h.value,
        onButton_clicked: _,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (u(), p(W, { key: 3 }, [
        O.value ? (u(), p("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          Q(T(k(r)(l.input.label)) + " ", 1),
          l.input.required ? (u(), p("span", Ni, "*")) : N("", !0)
        ], 8, Ti)) : N("", !0),
        g("div", Ai, [
          (u(), E(ge(d.value), q(b.value, {
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
const Ii = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, Li = /* @__PURE__ */ S({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = ne(t, A);
    Je("Translate", (_) => l.value(_));
    let r = [];
    const o = v(() => {
      if (t.elements != null) {
        let _ = $l(t.elements);
        return r = _.map((y) => B(null)), _;
      } else
        return null;
    }), d = () => {
      let _ = {};
      return r.forEach((y) => {
        _ = $.extend(_, y.getValue());
      }), _;
    }, i = (_) => {
      r.forEach((y) => y.setValue(_));
    }, h = () => !r.some((_) => !(_.isValid === void 0 || _.isValid())), c = B([]);
    Je(We, De(c));
    const m = (_) => {
      Array.isArray(_) ? c.value = [...c.value, ..._] : c.value.push(_);
    }, D = (_) => {
      Array.isArray(_) ? c.value = c.value.filter((y) => _.indexOf(y) >= 0) : c.value = c.value.filter((y) => y !== _);
    }, O = B([]);
    return Je(Ce, De(O)), n({ getValues: d, setValues: i, isValid: h, hideField: m, showField: D, disableField: (_) => {
      Array.isArray(_) ? O.value = [...O.value, ..._] : O.value.push(_);
    }, enableField: (_) => {
      Array.isArray(_) ? O.value = O.value.filter((y) => _.indexOf(y) >= 0) : O.value = O.value.filter((y) => y !== _);
    } }), (_, y) => (u(), p("form", Ii, [
      o.value != null ? (u(!0), p(W, { key: 0 }, G(o.value, (w, V) => (u(), E(Il, {
        ref_for: !0,
        ref: (f) => k(r)[V] = f,
        inputs: w,
        transte: t.translate,
        key: V,
        onValue_changed: y[0] || (y[0] = (f) => s("value_changed", f)),
        onButton_clicked: y[1] || (y[1] = (f) => s("button_clicked", f)),
        disabled: _.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : N("", !0)
    ]));
  }
}), zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: Sl,
  Button: Ae,
  Checkbox: Dl,
  CheckboxGroup: Ml,
  ComponentForm: Li,
  Date: wl,
  FormComponent: Ll,
  FullEditor: Bl,
  Header: Pe,
  Hidden: Ol,
  Number: Fl,
  Paragraph: Ee,
  RadioGroup: xl,
  Select: Tl,
  Switch: Nl,
  Text: Al,
  TextArea: El,
  Time: je
}, Symbol.toStringTag, { value: "Module" })), Vi = { class: "hero-body" }, Wi = { class: "title" }, Ci = {
  key: 0,
  class: "subtitle"
}, Ui = /* @__PURE__ */ S({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (u(), p("section", {
      class: x(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + n.type])
    }, [
      g("div", Vi, [
        g("p", Wi, T(n.title), 1),
        n.subtitle ? (u(), p("p", Ci, T(n.subtitle), 1)) : N("", !0)
      ])
    ], 2));
  }
}), Ri = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of n)
    a[t] = s;
  return a;
}, ji = {}, Hi = { class: "box" };
function Gi(e, n) {
  return u(), p("div", Hi, [
    I(e.$slots, "default")
  ]);
}
const Yi = /* @__PURE__ */ Ri(ji, [["render", Gi]]), qi = {
  key: 0,
  class: "icon is-clickable"
}, Ki = /* @__PURE__ */ S({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (s, l) => (u(), p("li", {
      class: x({ "is-active": a.active })
    }, [
      g("a", {
        onClick: l[0] || (l[0] = (r) => t("click"))
      }, [
        a.icon ? (u(), p("span", qi, [
          J(k(H), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        Q(" " + T(a.title), 1)
      ])
    ], 2));
  }
}), Qi = /* @__PURE__ */ S({
  __name: "breadcrumbs",
  props: {
    alignment: { default: Be.left },
    size: { default: ee.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, a = v(() => {
      let t = ["breadcrumb"];
      return n.alignment && n.alignment !== Be.left && t.push(`is-${n.alignment}`), n.size && n.size !== ee.normal && t.push(`is-${n.size}`), n.seperator && t.push(`has-${n.seperator}-seperator`), t;
    });
    return (t, s) => (u(), p("nav", {
      class: x(a.value),
      "aria-label": "breadcrumbs"
    }, [
      g("ul", null, [
        I(t.$slots, "default")
      ])
    ], 2));
  }
}), Xi = /* @__PURE__ */ S({
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
    return (a, t) => (u(), p("div", {
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
}), Zi = /* @__PURE__ */ S({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const n = e, a = v(() => {
      var t = [];
      return n.size && t.push(`is-${n.size}`), n.offset && t.push(`is-offset-${n.offset}`), n.border && (n.border.some((s) => s === Fe.all) ? t.push("is-bordered") : n.border.forEach((s) => t.push(`is-bordered-${s}`))), n.addonclass && t.push(n.addonclass), t;
    });
    return (t, s) => (u(), p("div", {
      class: x(["column", a.value])
    }, [
      I(t.$slots, "default")
    ], 2));
  }
}), eu = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), tu = { class: "modal-content" }, au = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, su = /* @__PURE__ */ S({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (u(), p("div", {
      class: x({ modal: !0, "is-active": n.display }),
      style: Ie(`z-index:${n.zIndex}`)
    }, [
      eu,
      g("div", tu, [
        I(a.$slots, "default")
      ]),
      n.hasClose ? (u(), p("button", au)) : N("", !0)
    ], 6));
  }
}), nu = /* @__PURE__ */ g("div", { class: "modal-background" }, null, -1), lu = {
  key: 0,
  class: "card-icon"
}, ou = { class: "card-icon-wrapper" }, ru = { class: "modal-card-head" }, iu = { class: "modal-card-body" }, uu = { class: "modal-card-foot" }, du = /* @__PURE__ */ S({
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
    const a = e, t = n, s = {
      addonclass: "card-footer-item"
    }, l = {
      headerClass: "modal-card-title is-centered",
      addonclass: "card-footer-item"
    }, r = v(() => {
      var o = [];
      return a.fullWidth && o.push("is-fullwidth"), a.fullHeight && o.push("is-fullheight"), a.maxWidth && o.push("is-maxwidth"), a.maxHeight && o.push("is-maxheight"), o;
    });
    return (o, d) => (u(), p("div", {
      class: x(["modal", { "is-active": a.show }])
    }, [
      nu,
      g("div", {
        class: x(["modal-card", r.value])
      }, [
        a.icon !== null ? (u(), p("div", lu, [
          g("div", ou, [
            J(H, {
              icon: a.icon,
              size: k(oe).xxlarge
            }, null, 8, ["icon", "size"])
          ])
        ])) : N("", !0),
        g("div", ru, [
          I(o.$slots, "header", fe(_e(l))),
          o.hasClose ? (u(), p("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: d[0] || (d[0] = (i) => t("close"))
          })) : N("", !0)
        ]),
        g("div", iu, [
          I(o.$slots, "content")
        ]),
        g("div", uu, [
          I(o.$slots, "footer", fe(_e(s)))
        ])
      ], 2)
    ], 2));
  }
}), cu = {
  key: 0,
  class: "panel-heading"
}, pu = {
  key: 1,
  class: "panel-tabs"
}, hu = { class: "panel-block" }, bu = /* @__PURE__ */ S({
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
    const n = e, a = v(() => n.blockNames ?? ["default"]), t = v(() => {
      let s = [];
      return n.type && s.push(`is-${n.type}`), n.fullWidth && s.push("is-fullwidth"), n.fullHeight && s.push("is-fullheight"), s;
    });
    return (s, l) => (u(), p("div", {
      class: x(["panel", t.value])
    }, [
      n.hasHeader ? (u(), p("div", cu, [
        I(s.$slots, "header")
      ])) : N("", !0),
      n.hasTabs ? (u(), p("div", pu, [
        I(s.$slots, "tabs")
      ])) : N("", !0),
      (u(!0), p(W, null, G(a.value, (r) => (u(), p("div", hu, [
        I(s.$slots, r)
      ]))), 256))
    ], 2));
  }
}), mu = /* @__PURE__ */ S({
  __name: "table",
  props: {
    scrollable: { type: Boolean },
    fixedHeader: { type: Boolean },
    fullWidth: { type: Boolean },
    narrow: { type: Boolean }
  },
  setup(e) {
    const n = e, a = v(() => {
      let s = [];
      return n.scrollable && s.push("table-container"), n.fixedHeader && n.scrollable && s.push("is-fixed"), s;
    }), t = v(() => {
      let s = ["table", "is-striped", "is-hoverable"];
      return n.fixedHeader && !n.scrollable && s.push("is-fixed"), n.fullWidth && s.push("is-fullwidth"), n.narrow && s.push("is-narrow"), s;
    });
    return (s, l) => (u(), p("div", {
      class: x(a.value)
    }, [
      g("table", {
        class: x(t.value)
      }, [
        g("thead", null, [
          I(s.$slots, "thead")
        ]),
        g("tbody", null, [
          I(s.$slots, "tbody")
        ]),
        g("tfoot", null, [
          I(s.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), fu = ["href"], gu = {
  key: 0,
  class: "icon is-small"
}, vu = /* @__PURE__ */ S({
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
    return (l, r) => (u(), p("li", {
      class: x({ "is-active": t.active })
    }, [
      g("a", {
        href: l.href,
        onClick: s
      }, [
        t.icon ? (u(), p("span", gu, [
          J(k(H), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : N("", !0),
        g("span", null, T(t.title), 1)
      ], 8, fu)
    ], 2));
  }
}), yu = /* @__PURE__ */ S({
  __name: "tabs",
  props: {
    alignment: {},
    type: {},
    fullWidth: { type: Boolean }
  },
  setup(e) {
    const n = e, a = v(() => {
      let t = ["tabs"];
      return n.alignment ? t.push(`is-${n.alignment}`) : t.push("is-left"), n.type && t.push(`is-${n.type}`), n.fullWidth && t.push("is-fullwidth"), t;
    });
    return (t, s) => (u(), p("div", {
      class: x(a.value)
    }, [
      g("ul", null, [
        I(t.$slots, "default")
      ])
    ], 2));
  }
}), _u = /* @__PURE__ */ S({
  __name: "tile",
  props: {
    type: {},
    size: {},
    borders: {},
    vertical: { type: Boolean }
  },
  setup(e) {
    const n = e, a = v(() => {
      let t = ["tile", `is-${n.type}`];
      return n.size && t.push(`is-${n.size}`), n.borders && (n.borders.some((s) => s === Fe.all) ? t.push("is-bordered") : n.borders.forEach((s) => t.push(`is-bordered-${s}`))), n.vertical && t.push("is-vertical"), t;
    });
    return (t, s) => (u(), p("div", {
      class: x(a.value)
    }, [
      I(t.$slots, "default")
    ], 2));
  }
}), ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Ui,
  Box: Yi,
  Breadcrumbs: Qi,
  BreadcrumbsItem: Ki,
  Card: _l,
  Column: Zi,
  ColumnContainer: Xi,
  List: kl,
  ListItem: Me,
  Modal: su,
  ModalCard: du,
  Panel: bu,
  Table: mu,
  Tabs: yu,
  TabsTab: vu,
  Tile: _u
}, Symbol.toStringTag, { value: "Module" }));
const Xe = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
ze(`${Xe.substring(0, Xe.lastIndexOf("/"))}/style.css`);
const $u = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function Su(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: $u,
  setSkin: Su
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: Bu,
  Button: Ou,
  ButtonAdd: Fu,
  ButtonCancel: xu,
  ButtonDelete: Ju,
  ButtonDisable: Tu,
  ButtonDownload: Nu,
  ButtonEdit: Au,
  ButtonEnable: Pu,
  ButtonOkay: Eu,
  ButtonPrint: Iu,
  ButtonRefresh: Lu,
  ButtonSave: zu,
  ButtonUpload: Vu,
  Chart: Wu,
  CheckMark: Cu,
  DynamicSlot: Uu,
  Filter: Ru,
  Icon: ju,
  Message: Hu,
  Notification: Gu,
  PageNotification: Yu,
  Pagination: qu,
  Promised: Ku,
  Progress: Qu,
  NavBar: Xu,
  Menu: Zu,
  MenuLabel: ed,
  MenuList: td
} = wr, { DraggableItem: ad, DropZone: sd, Sortable: nd } = xr, {
  AutoComplete: ld,
  CheckboxGroup: od,
  Checkbox: rd,
  Date: id,
  ComponentForm: ud,
  FullEditor: dd,
  Header: cd,
  Hidden: pd,
  Number: hd,
  Paragraph: bd,
  RadioGroup: md,
  Select: fd,
  Switch: gd,
  Text: vd,
  TextArea: yd,
  Time: _d,
  FormComponent: kd
} = zi, {
  Banner: $d,
  Box: Sd,
  BreadcrumbsItem: Md,
  Breadcrumbs: Dd,
  Card: wd,
  Column: Bd,
  ColumnContainer: Od,
  List: Fd,
  ListItem: xd,
  ModalCard: Jd,
  Panel: Td,
  Table: Nd,
  Tabs: Ad,
  TabsTab: Pd,
  Tile: Ed,
  Modal: Id
} = ku, { AVAIABLE_SKINS: Ld, setSkin: zd } = Mu, {
  ColorTypes: Vd,
  NoticeTypes: Wd,
  Sizes: Cd,
  AnimationSpeeds: Ud,
  AnimationTypes: Rd,
  IconSizes: jd,
  ChartLegendPositions: Hd,
  ChartTypes: Gd,
  DropZoneQuadrants: Yd,
  BreadCrumbAlignments: qd,
  BreadCrumbSeperators: Kd,
  ColumnContainerModifiers: Qd,
  ColumnSizes: Xd,
  ColumnOffsetSizes: Zd,
  BorderTypes: ec,
  TabAlignments: tc,
  TabStyles: ac,
  TileSizes: sc,
  TileTypes: nc,
  FixedNavBarPositions: lc,
  FixedMenuPositions: oc
} = Hl;
export {
  Ld as AVAIABLE_SKINS,
  Bu as Animation,
  Ud as AnimationSpeeds,
  Rd as AnimationTypes,
  ld as AutoComplete,
  $d as Banner,
  ec as BorderTypes,
  Sd as Box,
  qd as BreadCrumbAlignments,
  Kd as BreadCrumbSeperators,
  Dd as Breadcrumbs,
  Md as BreadcrumbsItem,
  Ou as Button,
  Fu as ButtonAdd,
  xu as ButtonCancel,
  Ju as ButtonDelete,
  Tu as ButtonDisable,
  Nu as ButtonDownload,
  Au as ButtonEdit,
  Pu as ButtonEnable,
  Eu as ButtonOkay,
  Iu as ButtonPrint,
  Lu as ButtonRefresh,
  zu as ButtonSave,
  Vu as ButtonUpload,
  wd as Card,
  Wu as Chart,
  Hd as ChartLegendPositions,
  Gd as ChartTypes,
  Cu as CheckMark,
  rd as Checkbox,
  od as CheckboxGroup,
  Vd as ColorTypes,
  Bd as Column,
  Od as ColumnContainer,
  Qd as ColumnContainerModifiers,
  Zd as ColumnOffsetSizes,
  Xd as ColumnSizes,
  ud as ComponentForm,
  id as Date,
  ad as DraggableItem,
  sd as DropZone,
  Yd as DropZoneQuadrants,
  Uu as DynamicSlot,
  Ru as Filter,
  oc as FixedMenuPositions,
  lc as FixedNavBarPositions,
  kd as FormComponent,
  dd as FullEditor,
  cd as Header,
  pd as Hidden,
  ju as Icon,
  jd as IconSizes,
  Fd as List,
  xd as ListItem,
  Zu as Menu,
  ed as MenuLabel,
  td as MenuList,
  Hu as Message,
  Id as Modal,
  Jd as ModalCard,
  Xu as NavBar,
  Wd as NoticeTypes,
  Gu as Notification,
  hd as Number,
  Yu as PageNotification,
  qu as Pagination,
  Td as Panel,
  bd as Paragraph,
  Qu as Progress,
  Ku as Promised,
  md as RadioGroup,
  fd as Select,
  Cd as Sizes,
  nd as Sortable,
  gd as Switch,
  tc as TabAlignments,
  ac as TabStyles,
  Nd as Table,
  Ad as Tabs,
  Pd as TabsTab,
  vd as Text,
  yd as TextArea,
  Ed as Tile,
  sc as TileSizes,
  nc as TileTypes,
  _d as Time,
  zd as setSkin
};
//# sourceMappingURL=components.esm.js.map
