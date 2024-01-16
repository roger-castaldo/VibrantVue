import { computed as g, defineComponent as w, openBlock as d, createBlock as T, Transition as En, withCtx as V, renderSlot as P, createElementBlock as m, normalizeClass as J, inject as x, ref as B, onMounted as re, createVNode as E, createCommentVNode as A, toDisplayString as N, mergeProps as K, createElementVNode as y, normalizeProps as pe, guardReactiveProps as fe, watch as z, createSlots as Tn, normalizeStyle as Te, unref as k, Fragment as C, renderList as Q, resolveDynamicComponent as he, withDirectives as U, vModelText as be, createTextVNode as ee, vShow as ne, toRefs as Pn, reactive as Ge, vModelCheckbox as Pe, readonly as Me, withAsyncContext as Ln, onUnmounted as In, vModelSelect as Wn, vModelDynamic as Vn, provide as xe } from "vue";
import "jquery";
const ge = (e) => new Promise((n) => {
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
var Y = /* @__PURE__ */ ((e) => (e.white = "white", e.black = "black", e.light = "light", e.dark = "dark", e.primary = "primary", e.link = "link", e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(Y || {}), te = /* @__PURE__ */ ((e) => (e.info = "info", e.success = "success", e.warning = "warning", e.danger = "danger", e))(te || {}), oe = /* @__PURE__ */ ((e) => (e.small = "small", e.normal = "normal", e.medium = "medium", e.large = "large", e))(oe || {}), ie = /* @__PURE__ */ ((e) => (e.slower = "slower", e.slow = "slow", e.fast = "fast", e.faster = "faster", e))(ie || {}), De = /* @__PURE__ */ ((e) => (e.bounce = "bounce", e.flash = "flash", e.pulse = "pulse", e.rubberBand = "rubberBand", e.shakeX = "shakeX", e.shakeY = "shakeY", e.headShake = "headShake", e.swing = "swing", e.tada = "tada", e.wobble = "wobble", e.jello = "jello", e.heartBeat = "heartBeat", e.backOutDown = "backOutDown", e.backOutLeft = "backOutLeft", e.backOutRight = "backOutRight", e.backOutUp = "backOutUp", e.bounceIn = "bounceIn", e.bounceInDown = "bounceInDown", e.bounceInLeft = "bounceInLeft", e.bounceInRight = "bounceInRight", e.bounceInUp = "bounceInUp", e.bounceOut = "bounceOut", e.boundOutDown = "boundOutDown", e.bounceOutLeft = "bounceOutLeft", e.boundOutRight = "boundOutRight", e.bounceOutUp = "bounceOutUp", e.fadeIn = "fadeIn", e.fadeInDown = "fadeInDown", e.fadeInDownBig = "fadeInDownBig", e.fadeInLeft = "fadeInLeft", e.fadeInLeftBig = "fadeInLeftBig", e.fadeInRight = "fadeInRight", e.fadeInRightBig = "fadeInRightBig", e.fadeInUp = "fadeInUp", e.fadeInUpBig = "fadeInUpBig", e.fadeInTopLeft = "fadeInTopLeft", e.fadeInTopRight = "fadeInTopRight", e.fadeInBottomLeft = "fadeInBottomLeft", e.fadeInBottomRight = "fadeInBottomRight", e.fadeOut = "fadeOut", e.fadeOutDown = "fadeOutDown", e.fadeOutDownBig = "fadeOutDownBig", e.fadeOutLeft = "fadeOutLeft", e.fadeOutLeftBig = "fadeOutLeftBig", e.fadeOutRight = "fadeOutRight", e.fadeOutRightBig = "fadeOutRightBig", e.fadeOutUp = "fadeOutUp", e.fadeOutUpBig = "fadeOutUpBig", e.fadeOutTopLeft = "fadeOutTopLeft", e.fadeOutTopRight = "fadeOutTopRight", e.fadeOutBottomRight = "fadeOutBottomRight", e.fadeOutBottomLeft = "fadeOutBottomLeft", e.flip = "flip", e.flipInX = "flipInX", e.flipInY = "flipInY", e.flipOutX = "flipOutX", e.flipOutY = "flipOutY", e.lightSpeedInRight = "lightSpeedInRight", e.lightSpeedInLeft = "lightSpeedInLeft", e.lightSpeedOutRight = "lightSpeedOutRight", e.lightSpeedOutLeft = "lightSpeedOutLeft", e.rotateIn = "rotateIn", e.rotateInDownLeft = "rotateInDownLeft", e.rotateInDownRight = "rotateInDownRight", e.rotateInUpLeft = "rotateInUpLeft", e.rotateInUpRight = "rotateInUpRight", e.rotateOut = "rotateOut", e.rotateOutDownLeft = "rotateOutDownLeft", e.rotateOutDownRight = "rotateOutDownRight", e.rotateOutUpLeft = "rotateOutUpLeft", e.rotateOutUpRight = "rotateOutUpRight", e.hinge = "hinge", e.jackInTheBox = "jackInTheBox", e.rollIn = "rollIn", e.rollOut = "rollOut", e.zoomIn = "zoomIn", e.zoomInDown = "zoomInDown", e.zoomInLeft = "zoomInLeft", e.zoomInRight = "zoomInRight", e.zoomInUp = "zoomInUp", e.zoomOut = "zoomOut", e.zoomOutDown = "zoomOutDown", e.zoomOutLeft = "zoomOutLeft", e.zoomOutRight = "zoomOutRight", e.zoomOutUp = "zoomOutUp", e.slideInDown = "slideInDown", e.slideInLeft = "slideInLeft", e.slideInRight = "slideInRight", e.slideInUp = "slideInUp", e.slideOutDown = "slideOutDown", e.slideOutLeft = "slideOutLeft", e.slideOutRight = "slideOutRight", e.slideOutUp = "slideOutUp", e))(De || {}), Qe = /* @__PURE__ */ ((e) => (e.area = "area", e.bar = "bar", e.bubble = "bubble", e.doughnut = "doughnut", e.pie = "pie", e.line = "line", e.polarArea = "polarArea", e.radar = "radar", e.scatter = "scatter", e))(Qe || {}), Le = /* @__PURE__ */ ((e) => (e.top = "top", e.left = "left", e.bottom = "bottom", e.right = "right", e.chartArea = "chartArea", e))(Le || {}), G = /* @__PURE__ */ ((e) => (e.xxsmall = "xxsmall", e.xsmall = "xsmall", e.small = "small", e.normal = "normal", e.large = "large", e.xlarge = "xlarge", e.xxlarge = "xxlarge", e))(G || {}), Z = /* @__PURE__ */ ((e) => (e.center = "center", e.topLeft = "topLeft", e.bottomLeft = "bottomLeft", e.topRight = "topRight", e.bottomRight = "bottomRight", e.top = "top", e.bottom = "bottom", e))(Z || {}), we = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(we || {}), Xe = /* @__PURE__ */ ((e) => (e.arrow = "arrow", e.button = "button", e.dot = "dot", e.succeeds = "succeeds", e))(Xe || {}), Ze = /* @__PURE__ */ ((e) => (e.mobile = "mobile", e.desktop = "desktop", e.gapless = "gapless", e.multiline = "multiline", e.centered = " centered", e.borderleft = " borderleft", e.borderright = "borderright", e.borderbottom = "borderbottom", e.bordertop = "bordertop", e.fullWidth = "fullWidth", e.fullHeight = "fullHeight", e))(Ze || {}), et = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.full = "full", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e.narrow = "narrow", e.wide = "wide", e))(et || {}), tt = /* @__PURE__ */ ((e) => (e.three_quarters = "three-quarters", e.two_thirds = "two-thirds", e.half = "half", e.one_third = "one-third", e.one_quarter = "one-quarter", e.one_fifth = "one-fifth", e.two_fifths = "two-fifths", e.three_fifths = "three-fifths", e.four_fifths = "four-fifths", e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e))(tt || {}), Be = /* @__PURE__ */ ((e) => (e.left = "left", e.right = "right", e.bottom = "bottom", e.top = "top", e.all = "all", e))(Be || {}), at = /* @__PURE__ */ ((e) => (e.centered = "centered", e.right = "right", e.left = "left", e))(at || {}), st = /* @__PURE__ */ ((e) => (e.boxed = "boxed", e.toggled = "toggled", e.roundToggle = "roundToggle", e))(st || {}), lt = /* @__PURE__ */ ((e) => (e.one = "1", e.two = "2", e.three = "3", e.four = "4", e.five = "5", e.six = "6", e.seven = "7", e.eight = "8", e.nine = "9", e.ten = "10", e.eleven = "11", e.twelve = "12", e))(lt || {}), nt = /* @__PURE__ */ ((e) => (e.parent = "parent", e.child = "child", e.ancestor = "ancestor", e))(nt || {});
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationSpeeds: ie,
  AnimationTypes: De,
  BorderTypes: Be,
  BreadCrumbAlignments: we,
  BreadCrumbSeperators: Xe,
  ChartLegendPositions: Le,
  ChartTypes: Qe,
  ColorTypes: Y,
  ColumnContainerModifiers: Ze,
  ColumnOffsetSizes: tt,
  ColumnSizes: et,
  DropZoneQuadrants: Z,
  IconSizes: G,
  NoticeTypes: te,
  Sizes: oe,
  TabAlignments: at,
  TabStyles: st,
  TileSizes: lt,
  TileTypes: nt
}, Symbol.toStringTag, { value: "Module" })), H = (e) => {
  const n = e("Language", "en");
  return g(() => n);
}, Un = (e) => {
  const n = e("IconSet", "solid");
  return g(() => n);
}, Rn = (e) => e("SummerNoteCDN", "https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/"), jn = (e) => e("FontAwesomeCDN", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/"), Cn = (e) => e("AnimateCDN", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/"), Hn = (e) => e("ChartJSCDN", "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/"), ot = /* @__PURE__ */ w({
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
    const n = Cn(x);
    ge(`${n}animate.min.css`);
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
    return (p, c) => a.repeating ? (d(), m("div", {
      key: 1,
      class: J(i.value)
    }, [
      P(p.$slots, "default")
    ], 2)) : (d(), T(En, {
      key: 0,
      "enter-active-class": o.value,
      "leave-active-class": u.value,
      duration: r.value
    }, {
      default: V(() => [
        P(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["enter-active-class", "leave-active-class", "duration"]));
  }
}), je = "brands.min.css", Ce = "brands_style_sheet", Yn = /\.fa-([^: ]+):before/g, He = B([]), qn = /url\(([^)]+)\)/g, q = /* @__PURE__ */ w({
  __name: "icon",
  props: {
    icon: {},
    size: {}
  },
  setup(e) {
    const n = jn(x);
    if (ge([
      `${n}all.min.css`
    ]), !document.getElementById(Ce)) {
      let l = document.createElement("style");
      l.setAttribute("id", Ce), document.head.appendChild(l), l.setAttribute("type", "text/css"), l.setAttribute("server_path", `${n}${je}`), fetch(`${n}${je}`).then((r) => {
        r.ok && r.text().then((o) => {
          [...o.matchAll(Yn)].forEach((u) => {
            He.value.push(u[1]);
          }), [...o.matchAll(qn)].forEach((u) => {
            o = o.replace(u[0], `url(${new URL(u[1], n)})`);
          }), l.innerText = o;
        });
      });
    }
    const a = e, t = Un(x), s = g(() => {
      let l = [];
      if (a.icon !== void 0 && a.icon !== null && (He.value.indexOf(a.icon) >= 0 ? l.push("fa-brands") : (l.push("fa-ico"), l.push(`fa-${t.value}`))), a.icon !== void 0 && a.icon !== null && l.push((a.icon.indexOf("fa-") == -1 ? " fa-" : " ") + a.icon), a.size !== void 0 && a.size !== null && a.size !== G.normal)
        switch (a.size) {
          case G.xxsmall:
            l.push("fa-2xs");
            break;
          case G.xsmall:
            l.push("fa-xs");
            break;
          case G.small:
            l.push("fa-sm");
            break;
          case G.large:
            l.push("fa-lg");
            break;
          case G.xlarge:
            l.push("fa-xl");
            break;
          case G.xxlarge:
            l.push("fa-2xl");
            break;
        }
      return l;
    });
    return re(() => ge(`${n}${t.value}.min.css`)), (l, r) => (d(), m("i", {
      class: J(s.value)
    }, null, 2));
  }
});
const Kn = ["disabled"], Gn = {
  key: 0,
  class: "icon is-small"
}, Qn = { key: 1 }, X = /* @__PURE__ */ w({
  __name: "button",
  props: {
    icon: {},
    disabled: { type: Boolean },
    type: { default: Y.primary },
    size: { default: oe.small },
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
    return (l, r) => (d(), m("button", {
      class: J(s.value),
      disabled: a.disabled,
      onClick: r[0] || (r[0] = (o) => t("click"))
    }, [
      a.icon != null ? (d(), m("span", Gn, [
        E(q, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      a.title != null ? (d(), m("span", Qn, N(a.title), 1)) : A("", !0)
    ], 10, Kn));
  }
}), rt = {
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
}, it = {
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
}, ut = {
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
}, dt = {}, ct = {}, pt = {}, ht = {
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
}, bt = {
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
}, mt = {
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
}, ft = {}, gt = {
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
}, vt = {
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
}, yt = {}, _t = {
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
}, kt = {
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
}, $t = {
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
}, St = {
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
}, Mt = {
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
}, Dt = {
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
}, wt = {
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
}, Bt = {
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
}, Ft = {
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
}, Ot = {
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
}, xt = {
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
}, Jt = {}, Nt = {}, At = {}, Et = {}, Tt = {}, Pt = {}, Lt = {
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
}, It = {}, Wt = {
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
}, Vt = {
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
}, zt = {}, Ut = {}, Rt = {}, jt = {
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
}, Ct = {}, Ht = {}, Yt = {
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
}, qt = {
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
}, Kt = {}, Gt = {}, Xn = {
  en: rt,
  ar: it,
  az: ut,
  bg: dt,
  bn: ct,
  ca: pt,
  cs: ht,
  da: bt,
  de: mt,
  el: ft,
  eo: gt,
  es: vt,
  et: yt,
  fa: _t,
  fi: kt,
  fr: $t,
  ga: St,
  he: Mt,
  hi: Dt,
  hu: wt,
  id: Bt,
  it: Ft,
  ja: Ot,
  ko: xt,
  lt: Jt,
  lv: Nt,
  ms: At,
  nb: Et,
  nl: Tt,
  pl: Pt,
  pt: Lt,
  ro: It,
  ru: Wt,
  sk: Vt,
  sl: zt,
  sq: Ut,
  sr: Rt,
  sv: jt,
  th: Ct,
  tl: Ht,
  tr: Yt,
  uk: qt,
  zh: Kt,
  zt: Gt
}, Zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: it,
  az: ut,
  bg: dt,
  bn: ct,
  ca: pt,
  cs: ht,
  da: bt,
  de: mt,
  default: Xn,
  el: ft,
  en: rt,
  eo: gt,
  es: vt,
  et: yt,
  fa: _t,
  fi: kt,
  fr: $t,
  ga: St,
  he: Mt,
  hi: Dt,
  hu: wt,
  id: Bt,
  it: Ft,
  ja: Ot,
  ko: xt,
  lt: Jt,
  lv: Nt,
  ms: At,
  nb: Et,
  nl: Tt,
  pl: Pt,
  pt: Lt,
  ro: It,
  ru: Wt,
  sk: Vt,
  sl: zt,
  sq: Ut,
  sr: Rt,
  sv: jt,
  th: Ct,
  tl: Ht,
  tr: Yt,
  uk: qt,
  zh: Kt,
  zt: Gt
}, Symbol.toStringTag, { value: "Module" })), Qt = {
  Filter: "Filter"
}, Xt = {
  Filter: "فيلم"
}, Zt = {
  Filter: "Qeydiyyat"
}, ea = {}, ta = {}, aa = {}, sa = {
  Filter: "Čeština"
}, la = {
  Filter: "Filter"
}, na = {
  Filter: "Filter"
}, oa = {}, ra = {
  Filter: "Filtero"
}, ia = {
  Filter: "Filtro"
}, ua = {}, da = {
  Filter: "فیلتر"
}, ca = {
  Filter: "Filter"
}, pa = {
  Filter: "Filtre"
}, ha = {
  Filter: "Scagaire"
}, ba = {
  Filter: "Filter"
}, ma = {
  Filter: "फिल्टर"
}, fa = {
  Filter: "Szűrő"
}, ga = {
  Filter: "Login"
}, va = {
  Filter: "Filtro"
}, ya = {
  Filter: "フィルター"
}, _a = {
  Filter: "제품정보"
}, ka = {}, $a = {}, Sa = {}, Ma = {}, Da = {}, wa = {}, Ba = {
  Filter: "Filtro"
}, Fa = {}, Oa = {
  Filter: "Фильтр"
}, xa = {
  Filter: "Filter"
}, Ja = {}, Na = {}, Aa = {}, Ea = {
  Filter: "Filter"
}, Ta = {}, Pa = {}, La = {
  Filter: "Filtre"
}, Ia = {
  Filter: "Фільтри"
}, Wa = {}, Va = {}, eo = {
  en: Qt,
  ar: Xt,
  az: Zt,
  bg: ea,
  bn: ta,
  ca: aa,
  cs: sa,
  da: la,
  de: na,
  el: oa,
  eo: ra,
  es: ia,
  et: ua,
  fa: da,
  fi: ca,
  fr: pa,
  ga: ha,
  he: ba,
  hi: ma,
  hu: fa,
  id: ga,
  it: va,
  ja: ya,
  ko: _a,
  lt: ka,
  lv: $a,
  ms: Sa,
  nb: Ma,
  nl: Da,
  pl: wa,
  pt: Ba,
  ro: Fa,
  ru: Oa,
  sk: xa,
  sl: Ja,
  sq: Na,
  sr: Aa,
  sv: Ea,
  th: Ta,
  tl: Pa,
  tr: La,
  uk: Ia,
  zh: Wa,
  zt: Va
}, to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Xt,
  az: Zt,
  bg: ea,
  bn: ta,
  ca: aa,
  cs: sa,
  da: la,
  de: na,
  default: eo,
  el: oa,
  en: Qt,
  eo: ra,
  es: ia,
  et: ua,
  fa: da,
  fi: ca,
  fr: pa,
  ga: ha,
  he: ba,
  hi: ma,
  hu: fa,
  id: ga,
  it: va,
  ja: ya,
  ko: _a,
  lt: ka,
  lv: $a,
  ms: Sa,
  nb: Ma,
  nl: Da,
  pl: wa,
  pt: Ba,
  ro: Fa,
  ru: Oa,
  sk: xa,
  sl: Ja,
  sq: Na,
  sr: Aa,
  sv: Ea,
  th: Ta,
  tl: Pa,
  tr: La,
  uk: Ia,
  zh: Wa,
  zt: Va
}, Symbol.toStringTag, { value: "Module" })), za = {
  Previous: "Previous",
  Next: "Next",
  Older: "Older",
  Newer: "Newer"
}, Ua = {
  Previous: "سابقا",
  Next: "التالي",
  Older: "كبار",
  Newer: "Newer"
}, Ra = {
  Previous: " Previous",
  Next: "Next",
  Older: "Yaşlı",
  Newer: "Yeniyetmə"
}, ja = {}, Ca = {}, Ha = {}, Ya = {
  Previous: "Předchozí",
  Next: "Čeština",
  Older: "Starší",
  Newer: "Čeština"
}, qa = {
  Previous: "Forrige",
  Next: "Næste",
  Older: "Ældre",
  Newer: "Nyer"
}, Ka = {
  Previous: "Vorherige",
  Next: "Nächste",
  Older: "Alter",
  Newer: "Neuheit"
}, Ga = {}, Qa = {
  Previous: "Antaŭa",
  Next: "La",
  Older: "Pli",
  Newer: "Pli"
}, Xa = {
  Previous: "Anterior",
  Next: "Siguiente",
  Older: "Older",
  Newer: "Newer"
}, Za = {}, es = {
  Previous: "Previous",
  Next: "بعدی",
  Older: "مسن",
  Newer: "Newer"
}, ts = {
  Previous: "Edellinen",
  Next: "Seuraava",
  Older: "Vanhempi",
  Newer: "Uudempaa"
}, as = {
  Previous: "Précédent",
  Next: "Suivant",
  Older: "Older",
  Newer: "Newer"
}, ss = {
  Previous: "Roimhe",
  Next: "Ar",
  Older: "Sean",
  Newer: "Nuashonraigh"
}, ls = {
  Previous: "הקודם",
  Next: "הבא",
  Older: "מבוגר",
  Newer: "חדש"
}, ns = {
  Previous: "पिछला",
  Next: "अगला",
  Older: "पुराना",
  Newer: "नया"
}, os = {
  Previous: "Előző",
  Next: "Kezdőlap",
  Older: "Idősebb",
  Newer: "Újabb"
}, rs = {
  Previous: "Sitemap",
  Next: "Sitemap",
  Older: "Login",
  Newer: "Login"
}, is = {
  Previous: "Precedente",
  Next: "Il",
  Older: "Vecchio",
  Newer: "Nuovo"
}, us = {
  Previous: "新着情報",
  Next: "次へ",
  Older: "古い投稿",
  Newer: "ニュース"
}, ds = {
  Previous: "이름",
  Next: "이름",
  Older: "인기있는",
  Newer: "더"
}, cs = {}, ps = {}, hs = {}, bs = {}, ms = {}, fs = {}, gs = {
  Previous: "Anterior",
  Next: "Próximo",
  Older: "O",
  Newer: "Mais"
}, vs = {}, ys = {
  Previous: "Предыдущий",
  Next: "Следующий",
  Older: "Пожилой",
  Newer: "Newer"
}, _s = {
  Previous: "Predchádzajúci",
  Next: "Ďalšie",
  Older: "Staršie",
  Newer: "Novinka"
}, ks = {}, $s = {}, Ss = {}, Ms = {
  Previous: "Föregående",
  Next: "Nästa",
  Older: "Äldre",
  Newer: "Nyare"
}, Ds = {}, ws = {}, Bs = {
  Previous: "Önceki",
  Next: "Sonraki",
  Older: "Yaşlı",
  Newer: "Newer"
}, Fs = {
  Previous: "Попереднє",
  Next: "Про",
  Older: "Старші",
  Newer: "Нова"
}, Os = {}, xs = {}, ao = {
  en: za,
  ar: Ua,
  az: Ra,
  bg: ja,
  bn: Ca,
  ca: Ha,
  cs: Ya,
  da: qa,
  de: Ka,
  el: Ga,
  eo: Qa,
  es: Xa,
  et: Za,
  fa: es,
  fi: ts,
  fr: as,
  ga: ss,
  he: ls,
  hi: ns,
  hu: os,
  id: rs,
  it: is,
  ja: us,
  ko: ds,
  lt: cs,
  lv: ps,
  ms: hs,
  nb: bs,
  nl: ms,
  pl: fs,
  pt: gs,
  ro: vs,
  ru: ys,
  sk: _s,
  sl: ks,
  sq: $s,
  sr: Ss,
  sv: Ms,
  th: Ds,
  tl: ws,
  tr: Bs,
  uk: Fs,
  zh: Os,
  zt: xs
}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Ua,
  az: Ra,
  bg: ja,
  bn: Ca,
  ca: Ha,
  cs: Ya,
  da: qa,
  de: Ka,
  default: ao,
  el: Ga,
  en: za,
  eo: Qa,
  es: Xa,
  et: Za,
  fa: es,
  fi: ts,
  fr: as,
  ga: ss,
  he: ls,
  hi: ns,
  hu: os,
  id: rs,
  it: is,
  ja: us,
  ko: ds,
  lt: cs,
  lv: ps,
  ms: hs,
  nb: bs,
  nl: ms,
  pl: fs,
  pt: gs,
  ro: vs,
  ru: ys,
  sk: _s,
  sl: ks,
  sq: $s,
  sr: Ss,
  sv: Ms,
  th: Ds,
  tl: ws,
  tr: Bs,
  uk: Fs,
  zh: Os,
  zt: xs
}, Symbol.toStringTag, { value: "Module" })), Js = {
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
}, Ns = {
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
}, As = {
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
}, Es = {
  Weekdays: {},
  Months: {}
}, Ts = {
  Weekdays: {},
  Months: {}
}, Ps = {
  Weekdays: {},
  Months: {}
}, Ls = {
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
}, Is = {
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
}, Ws = {
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
}, Vs = {
  Weekdays: {},
  Months: {}
}, zs = {
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
}, Us = {
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
}, Rs = {
  Weekdays: {},
  Months: {}
}, js = {
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
}, Cs = {
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
}, Hs = {
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
}, Ys = {
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
}, qs = {
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
}, Ks = {
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
}, Gs = {
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
}, Qs = {
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
}, Xs = {
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
}, Zs = {
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
}, el = {
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
}, tl = {
  Weekdays: {},
  Months: {}
}, al = {
  Weekdays: {},
  Months: {}
}, sl = {
  Weekdays: {},
  Months: {}
}, ll = {
  Weekdays: {},
  Months: {}
}, nl = {
  Weekdays: {},
  Months: {}
}, ol = {
  Weekdays: {},
  Months: {}
}, rl = {
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
}, il = {
  Weekdays: {},
  Months: {}
}, ul = {
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
}, dl = {
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
}, cl = {
  Weekdays: {},
  Months: {}
}, pl = {
  Weekdays: {},
  Months: {}
}, hl = {
  Weekdays: {},
  Months: {}
}, bl = {
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
}, ml = {
  Weekdays: {},
  Months: {}
}, fl = {
  Weekdays: {},
  Months: {}
}, gl = {
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
}, vl = {
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
}, yl = {
  Weekdays: {},
  Months: {}
}, _l = {
  Weekdays: {},
  Months: {}
}, lo = {
  en: Js,
  ar: Ns,
  az: As,
  bg: Es,
  bn: Ts,
  ca: Ps,
  cs: Ls,
  da: Is,
  de: Ws,
  el: Vs,
  eo: zs,
  es: Us,
  et: Rs,
  fa: js,
  fi: Cs,
  fr: Hs,
  ga: Ys,
  he: qs,
  hi: Ks,
  hu: Gs,
  id: Qs,
  it: Xs,
  ja: Zs,
  ko: el,
  lt: tl,
  lv: al,
  ms: sl,
  nb: ll,
  nl,
  pl: ol,
  pt: rl,
  ro: il,
  ru: ul,
  sk: dl,
  sl: cl,
  sq: pl,
  sr: hl,
  sv: bl,
  th: ml,
  tl: fl,
  tr: gl,
  uk: vl,
  zh: yl,
  zt: _l
}, no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: Ns,
  az: As,
  bg: Es,
  bn: Ts,
  ca: Ps,
  cs: Ls,
  da: Is,
  de: Ws,
  default: lo,
  el: Vs,
  en: Js,
  eo: zs,
  es: Us,
  et: Rs,
  fa: js,
  fi: Cs,
  fr: Hs,
  ga: Ys,
  he: qs,
  hi: Ks,
  hu: Gs,
  id: Qs,
  it: Xs,
  ja: Zs,
  ko: el,
  lt: tl,
  lv: al,
  ms: sl,
  nb: ll,
  nl,
  pl: ol,
  pt: rl,
  ro: il,
  ru: ul,
  sk: dl,
  sl: cl,
  sq: pl,
  sr: hl,
  sv: bl,
  th: ml,
  tl: fl,
  tr: gl,
  uk: vl,
  zh: yl,
  zt: _l
}, Symbol.toStringTag, { value: "Module" })), kl = {
  Error: "Error"
}, $l = {
  Error: "خطأ"
}, Sl = {
  Error: "Qeydiyyat"
}, Ml = {}, Dl = {}, wl = {}, Bl = {
  Error: "Čeština"
}, Fl = {
  Error: "Fejl"
}, Ol = {
  Error: "Fehler"
}, xl = {}, Jl = {
  Error: "Eraro"
}, Nl = {
  Error: "Error"
}, Al = {}, El = {
  Error: "خطای"
}, Tl = {
  Error: "Virheitä"
}, Pl = {
  Error: "Erreur"
}, Ll = {
  Error: "Inis"
}, Il = {
  Error: "טעות"
}, Wl = {
  Error: "त्रुटि"
}, Vl = {
  Error: "Hiba"
}, zl = {
  Error: "Login"
}, Ul = {
  Error: "Errore"
}, Rl = {
  Error: "エラー"
}, jl = {
  Error: "계정"
}, Cl = {}, Hl = {}, Yl = {}, ql = {}, Kl = {}, Gl = {}, Ql = {
  Error: "Erro"
}, Xl = {}, Zl = {
  Error: "Ошибка"
}, en = {
  Error: "Chyba"
}, tn = {}, an = {}, sn = {}, ln = {
  Error: "Fel"
}, nn = {}, on = {}, rn = {
  Error: "Hata"
}, un = {
  Error: "Про"
}, dn = {}, cn = {}, oo = {
  en: kl,
  ar: $l,
  az: Sl,
  bg: Ml,
  bn: Dl,
  ca: wl,
  cs: Bl,
  da: Fl,
  de: Ol,
  el: xl,
  eo: Jl,
  es: Nl,
  et: Al,
  fa: El,
  fi: Tl,
  fr: Pl,
  ga: Ll,
  he: Il,
  hi: Wl,
  hu: Vl,
  id: zl,
  it: Ul,
  ja: Rl,
  ko: jl,
  lt: Cl,
  lv: Hl,
  ms: Yl,
  nb: ql,
  nl: Kl,
  pl: Gl,
  pt: Ql,
  ro: Xl,
  ru: Zl,
  sk: en,
  sl: tn,
  sq: an,
  sr: sn,
  sv: ln,
  th: nn,
  tl: on,
  tr: rn,
  uk: un,
  zh: dn,
  zt: cn
}, ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: $l,
  az: Sl,
  bg: Ml,
  bn: Dl,
  ca: wl,
  cs: Bl,
  da: Fl,
  de: Ol,
  default: oo,
  el: xl,
  en: kl,
  eo: Jl,
  es: Nl,
  et: Al,
  fa: El,
  fi: Tl,
  fr: Pl,
  ga: Ll,
  he: Il,
  hi: Wl,
  hu: Vl,
  id: zl,
  it: Ul,
  ja: Rl,
  ko: jl,
  lt: Cl,
  lv: Hl,
  ms: Yl,
  nb: ql,
  nl: Kl,
  pl: Gl,
  pt: Ql,
  ro: Xl,
  ru: Zl,
  sk: en,
  sl: tn,
  sq: an,
  sr: sn,
  sv: ln,
  th: nn,
  tl: on,
  tr: rn,
  uk: un,
  zh: dn,
  zt: cn
}, Symbol.toStringTag, { value: "Module" })), io = {
  Button: Zn,
  Filter: to,
  Pagination: so,
  Date: no,
  Form: ro
}, I = (e, n) => {
  let a = io[e.substring(0, e.indexOf("."))];
  if (a !== void 0 && (a[n.value] === void 0 ? a = a.en : a = a[n.value], a = a[e.substring(e.indexOf(".") + 1)]), a === void 0)
    throw `unable to locate message ${e}`;
  return a;
}, uo = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Add", s),
      icon: "plus",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), pn = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Cancel", s),
      icon: "window-close",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), co = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Delete", s),
      icon: "trash-alt",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), po = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Disable", s),
      icon: "times-circle",
      type: Y.danger,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), ho = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Download", s),
      icon: "download",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), bo = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Edit", s),
      icon: "edit",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), mo = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Enable", s),
      icon: "check",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), hn = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Okay", s),
      icon: "check",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), fo = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Print", s),
      icon: "print",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), bn = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Refresh", s),
      icon: "sync",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), go = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Save", s),
      icon: "save",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), vo = /* @__PURE__ */ w({
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
    const a = n, t = e, s = H(x), l = g(() => ({
      Title: I("Button.Upload", s),
      icon: "upload",
      type: Y.primary,
      disabled: t.disabled,
      addonclass: t.addonclass,
      hidemobile: t.hidemobile,
      hidetablet: t.hidetablet,
      hidedesktop: t.hidedesktop,
      size: t.size
    }));
    return (r, o) => (d(), T(X, K(l.value, {
      onClick: o[0] || (o[0] = (u) => a("click"))
    }), null, 16));
  }
}), yo = { class: "card-header" }, _o = { class: "card-content" }, ko = { class: "card-footer" }, mn = /* @__PURE__ */ w({
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
    return (s, l) => (d(), m("div", {
      class: J(["card", { "is-fullwidth": n.fullWidth, "is-fullheight": n.fullHeight }])
    }, [
      y("div", yo, [
        P(s.$slots, "header", pe(fe(t)))
      ]),
      y("div", _o, [
        P(s.$slots, "content")
      ]),
      y("div", ko, [
        P(s.$slots, "footer", pe(fe(a)))
      ])
    ], 2));
  }
}), $o = /* @__PURE__ */ w({
  __name: "chart",
  props: {
    labels: {},
    datasets: {},
    type: {},
    title: {},
    showRefresh: { type: Boolean },
    width: {},
    height: {},
    legendPosition: { default: Le.right },
    scales: {},
    tooltips: {}
  },
  emits: ["legendItemClick"],
  setup(e, { emit: n }) {
    const a = `${Hn(x)}chart.umd.js`, t = B(null), s = e, l = n;
    let r = null;
    const o = () => {
      r != null && r.update();
    }, u = g(() => {
      var i = "";
      return s.width && (i = `width:${s.width}px;`), s.height && (i += `height:${s.height}px;`), i;
    });
    return z([s.type], (i) => {
      r != null && (r.type = i ?? "line");
    }), z(
      [s.labels],
      (i) => {
        r != null && (r.data.labels = i, (s.showRefresh == null || !s.showRefresh) && o());
      },
      { deep: !0 }
    ), z(
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
              filter: (c, f) => c.text != null
            },
            onClick: function(c, f) {
              l("legendItemClick", r, f);
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
    }), (i, p) => (d(), T(mn, null, Tn({
      content: V(() => [
        y("canvas", {
          ref_key: "canvas",
          ref: t,
          style: Te(u.value)
        }, null, 4)
      ]),
      _: 2
    }, [
      s.title ? {
        name: "header",
        fn: V((c) => [
          y("h3", {
            class: J(c.headerClass)
          }, N(s.title), 3)
        ]),
        key: "0"
      } : void 0,
      s.showRefresh != null && s.showRefresh != null && s.showRefresh ? {
        name: "footer",
        fn: V((c) => [
          E(bn, K(c, { onClick: o }), null, 16)
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), So = /* @__PURE__ */ w({
  __name: "check-mark",
  setup(e) {
    return (n, a) => (d(), T(q, {
      icon: "check",
      size: k(G).small
    }, null, 8, ["size"]));
  }
}), Ye = async (e, n, a) => {
  let t = await import(e);
  const s = Object.keys(t);
  return n && s.sort(n), s.filter((l) => a === void 0 || a.value.test(l)).map((l) => t[l]);
}, Mo = /* @__PURE__ */ w({
  __name: "dynamic-slot",
  props: {
    props: {},
    url: {},
    filter: {},
    sortMethod: { type: Function }
  },
  setup(e) {
    const n = B(null), a = e, t = g(() => a.filter == null || a.filter == null ? null : new RegExp("^" + a.filter.replaceAll(".", "\\.").replaceAll("*", ".+") + "$"));
    return z([a.url, a.filter], async () => {
      n.value = await Ye(a.url, a.sortMethod, t);
    }), re(async () => {
      n.value = await Ye(a.url, a.sortMethod, t);
    }), (s, l) => (d(!0), m(C, null, Q(n.value, (r) => (d(), T(he(r), pe(fe(a.props)), null, 16))), 256));
  }
}), Do = { class: "control has-icons-left" }, wo = ["placeholder"], Bo = { class: "icon is-small is-left" }, Fo = /* @__PURE__ */ w({
  __name: "filter",
  props: {
    default_value: {}
  },
  emits: ["filter"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = H(x), l = g(() => I("Filter.Filter", s)), r = B(null);
    z([r], (u) => {
      u[0] === "" && a.default_value && (r.value = a.default_value, t("filter", r.value == "" ? null : r.value));
    });
    const o = (u) => {
      u.keyCode == 13 && t("filter", r.value == "" ? null : r.value);
    };
    return re(() => {
      a.default_value && (r.value = a.default_value);
    }), (u, i) => (d(), m("div", Do, [
      U(y("input", {
        type: "text",
        class: "input is-expanded is-rounded",
        placeholder: l.value,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => r.value = p),
        onKeypress: o
      }, null, 40, wo), [
        [be, r.value]
      ]),
      y("span", Bo, [
        E(q, { icon: "filter" })
      ])
    ]));
  }
}), Oo = {
  key: 0,
  class: "message-header"
}, xo = {
  key: 0,
  class: "delete",
  "aria-label": "delete"
}, Jo = { class: "message-body" }, No = /* @__PURE__ */ w({
  __name: "message",
  props: {
    type: { default: Y.primary },
    message: { default: null },
    hasDelete: { type: Boolean, default: !1 },
    title: { default: null },
    size: { default: oe.normal }
  },
  setup(e) {
    const n = e, a = g(() => n.size === oe.normal ? null : `is-${n.size}`), t = g(() => `is-${n.type}`);
    return (s, l) => (d(), m("article", {
      class: J(["message", a.value, t.value])
    }, [
      n.title ? (d(), m("div", Oo, [
        y("p", null, N(n.title), 1),
        n.hasDelete ? (d(), m("button", xo)) : A("", !0)
      ])) : A("", !0),
      y("div", Jo, [
        P(s.$slots, "default", {}, () => [
          ee(N(n.message), 1)
        ])
      ])
    ], 2));
  }
}), ue = /* @__PURE__ */ w({
  __name: "notification",
  props: {
    type: { default: te.info },
    message: { default: null },
    light: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), m("div", {
      class: J(["notification", "is-" + n.type, n.light ? "is-light" : ""])
    }, [
      P(a.$slots, "default", {}, () => [
        ee(N(n.message), 1)
      ])
    ], 2));
  }
}), Ao = {
  key: 0,
  class: "modal-background"
}, Eo = {
  key: 0,
  class: "title"
}, To = { class: "block" }, Po = /* @__PURE__ */ w({
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
    const a = e, t = n, s = g(() => {
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
    }), l = g(() => {
      var r = ["is-page-notification-container", `is-${a.type}`];
      return a.isLight && r.push("is-light-mode"), a.hasClose === void 0 || a.hasClose === null || a.hasClose || r.push("has-no-close"), r;
    });
    return (r, o) => (d(), m("div", {
      class: J({ modal: a.blockUser && a.visible, "is-active": a.blockUser && a.visible })
    }, [
      a.blockUser && a.visible ? (d(), m("div", Ao)) : A("", !0),
      E(ot, {
        incoming: k(De).fadeIn,
        outgoing: k(De).fadeOut,
        speed: k(ie).slower
      }, {
        default: V(() => [
          a.visible ? (d(), m("div", {
            key: 0,
            class: J(l.value)
          }, [
            E(q, {
              icon: s.value,
              size: k(G).xxlarge
            }, null, 8, ["icon", "size"]),
            a.header !== null && a.header !== void 0 ? (d(), m("h1", Eo, N(a.header), 1)) : A("", !0),
            y("div", To, N(a.message), 1),
            a.hasClose ? (d(), T(q, {
              key: 1,
              icon: "circle-xmark",
              onClick: o[0] || (o[0] = (u) => t("close")),
              size: k(G).large
            }, null, 8, ["size"])) : A("", !0)
          ], 2)) : A("", !0)
        ]),
        _: 1
      }, 8, ["incoming", "outgoing", "speed"])
    ], 2));
  }
}), Lo = ["title", "disabled"], Io = ["title", "disabled"], Wo = /* @__PURE__ */ w({
  __name: "pagination",
  props: {
    usenext: { type: Boolean, default: !0 },
    hasmore: { type: Boolean, default: !0 },
    hasprevious: { type: Boolean, default: !0 },
    size: { default: oe.small },
    rounded: { type: Boolean, default: !1 },
    buttonType: {}
  },
  emits: ["moveForward", "moveBack"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = H(x), l = g(() => I(a.usenext ? "Pagination.Previous" : "Pagination.Older", s)), r = g(() => I(a.usenext ? "Pagination.Next" : "Pagination.Newer", s)), o = g(() => a.buttonType ? `has-background-${a.buttonType}` : ""), u = g(() => a.hasprevious ?? !0), i = g(() => a.hasmore ?? !0), p = function() {
      u || t("moveBack");
    }, c = function() {
      i || t("moveForward");
    };
    return (f, S) => U((d(), m("nav", {
      class: J(["pagination", o.value]),
      role: "navigation",
      "aria-label": "pagination"
    }, [
      y("a", {
        class: J(["pagination-previous", o.value]),
        title: l.value,
        onClick: p,
        disabled: u.value
      }, [
        E(q, {
          icon: "backward",
          size: k(G).small
        }, null, 8, ["size"]),
        ee(" " + N(l.value), 1)
      ], 10, Lo),
      y("a", {
        class: J(["pagination-next", o.value]),
        title: r.value,
        onClick: c,
        disabled: i.value
      }, [
        ee(N(r.value) + " ", 1),
        E(q, {
          icon: "forward",
          size: k(G).small
        }, null, 8, ["size"])
      ], 10, Io)
    ], 2)), [
      [ne, a.hasmore || a.hasprevious]
    ]);
  }
});
function ye(e) {
  return typeof e == "function" ? e() : k(e);
}
function Vo(e, n = 200) {
  const a = B(!1), t = B(!1), s = g(() => !a.value && !t.value), l = B(!1), r = B(), o = B();
  let u;
  return z(
    () => ye(e),
    (i) => {
      if (a.value = !1, t.value = !1, r.value = null, !i) {
        o.value = null, u && clearTimeout(u), u = null;
        return;
      }
      const p = Number(ye(n)) || 0;
      p > 0 ? (l.value = !1, u && clearTimeout(u), u = setTimeout(() => {
        l.value = !0;
      }, p)) : l.value = !0, i.then((c) => {
        i === ye(e) && (o.value = c, t.value = !0);
      }).catch((c) => {
        i === ye(e) && (r.value = c, a.value = !0);
      });
    },
    { immediate: !0 }
  ), { isPending: s, isRejected: a, isResolved: t, isDelayElapsed: l, error: r, data: o };
}
const Fe = /* @__PURE__ */ w({
  __name: "Promised",
  props: {
    promise: {},
    pendingDelay: { default: 200 }
  },
  setup(e) {
    const n = e, a = H(x), t = g(() => I("Form.Error", a)), s = Pn(n), l = Ge(Vo(s.promise, s.pendingDelay));
    return (r, o) => (d(), m(C, null, [
      l.isDelayElapsed && !l.isRejected && !l.isResolved ? P(r.$slots, "pending", {
        key: 0,
        response: l.data
      }, () => [
        E(k(ve), {
          size: k(oe).small
        }, null, 8, ["size"])
      ]) : A("", !0),
      l.isRejected ? P(r.$slots, "rejected", pe(K({ key: 1 }, l.error)), () => [
        E(k(ue), {
          message: `${t.value}:${l.error.message ?? l.error.toString()}`,
          type: k(te).danger
        }, null, 8, ["message", "type"])
      ]) : A("", !0),
      l.isResolved ? P(r.$slots, "default", {
        key: 2,
        response: l.data
      }) : A("", !0)
    ], 64));
  }
}), zo = ["value", "max"], ve = /* @__PURE__ */ w({
  __name: "progress",
  props: {
    type: { default: Y.primary },
    size: { default: oe.normal },
    value: {},
    maximum: {}
  },
  setup(e) {
    const n = e, a = g(() => n.maximum === void 0 ? null : (n.value ?? 0) / n.maximum);
    return (t, s) => (d(), m("progress", {
      class: J(`progress is-${n.size} is-${n.type}`),
      value: n.value,
      max: n.maximum
    }, N(a.value ? `${a.value}%` : null), 11, zo));
  }
}), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Animation: ot,
  Button: X,
  ButtonAdd: uo,
  ButtonCancel: pn,
  ButtonDelete: co,
  ButtonDisable: po,
  ButtonDownload: ho,
  ButtonEdit: bo,
  ButtonEnable: mo,
  ButtonOkay: hn,
  ButtonPrint: fo,
  ButtonRefresh: bn,
  ButtonSave: go,
  ButtonUpload: vo,
  Chart: $o,
  CheckMark: So,
  DynamicSlot: Mo,
  Filter: Fo,
  Icon: q,
  Message: No,
  Notification: ue,
  PageNotification: Po,
  Pagination: Wo,
  Progress: ve,
  Promised: Fe
}, Symbol.toStringTag, { value: "Module" })), Ro = /* @__PURE__ */ w({
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
    }), (c, f) => (d(), T(he(t.tag), {
      ref_key: "handle",
      ref: r,
      draggable: !0,
      onDragstart: i,
      onDragend: p,
      class: J(u.value)
    }, {
      default: V(() => [
        P(c.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), jo = /* @__PURE__ */ w({
  __name: "dropzone",
  props: {
    isValidChild: { type: Function, default: (e) => !0 },
    tag: { default: "div" }
  },
  emits: ["itemAdded", "itemEntered", "itemExited", "itemMoved"],
  setup(e, { emit: n }) {
    const a = e, t = n, s = B(!1), l = B(null), r = B(null);
    g(() => a.tag ?? "div");
    const o = (f) => {
      const S = r.value.getBoundingClientRect(), F = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let h = Z.center;
      return f.x < F.x ? f.y < F.y ? h = Z.topLeft : h = Z.bottomLeft : f.y < F.y ? h = Z.topRight : h = Z.bottomRight, l.value = h, l.value;
    }, u = (f) => {
      f.preventDefault(), s.value = !0, t("itemEntered", o(f));
    }, i = (f) => {
      s.value = !0, t("itemExited", o(f));
    }, p = (f) => {
      f.preventDefault(), t("itemMoved", o(f));
    }, c = (f) => {
      if (a.isValidChild && !a.isValidChild(JSON.parse(f.dataTransfer.getData("value"))))
        return !1;
      f.stopPropagation(), f.preventDefault(), t("itemAdded", JSON.parse(f.dataTransfer.getData("value")), l.value), s.value = !1;
    };
    return (f, S) => (d(), T(he(a.tag), {
      ref_key: "handle",
      ref: r,
      class: J({ "is-bordered": s.value }),
      onDragenter: u,
      onDragleave: i,
      onDrop: c,
      onDragover: p
    }, {
      default: V(() => [
        P(f.$slots, "default")
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), fn = /* @__PURE__ */ w({
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
    return (t, s) => (d(), T(he(t.numbered == null || t.numbered == null || !t.numbered ? "ul" : "ol"), {
      class: J(a.value)
    }, {
      default: V(() => [
        P(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Se = /* @__PURE__ */ w({
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
    return (l, r) => (d(), m("li", {
      class: J(s.value)
    }, [
      a.icon ? (d(), m("span", {
        key: 0,
        class: "icon is-clickable",
        onClick: r[0] || (r[0] = (o) => t("click"))
      }, [
        E(q, {
          icon: a.icon
        }, null, 8, ["icon"])
      ])) : A("", !0),
      P(l.$slots, "default")
    ], 2));
  }
}), Co = /* @__PURE__ */ w({
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
    const a = e, t = n, s = B([]), l = B(-1), r = B(-1), o = B(null);
    z(a.Items, (f, S) => {
      s.value = [...S];
    }), re(() => {
      a.Items !== null && (s.value = [...a.Items]);
    });
    const u = (f) => {
      var S = f.target.getBoundingClientRect(), F = {
        x: S.x + S.width / 2,
        y: S.y + S.height / 2
      };
      let h = Z.center;
      return f.y < F.y ? h = Z.top : h = Z.bottom, h;
    }, i = (f, S) => {
      S.stopPropagation(), l.value = f, S.dataTransfer.setData("value", null);
    }, p = (f, S) => {
      l.value && (S.stopPropagation(), f != l.value ? (r.value = f, o.value = u(S)) : (r.value = -1, o.value = null));
    }, c = (f) => {
      if (l.value) {
        f.stopPropagation();
        var S = r.value + (o.value == Z.top ? 0 : 1), F = s.value.splice(S, 1)[0];
        S >= l.value && S--, s.value.splice(S, 0, F), r.value = -1, o.value = null, l.value = -1, t("sorted", s.value);
      }
    };
    return (f, S) => (d(), T(fn, {
      type: f.type,
      compact: f.compact,
      outlined: f.outlined,
      highlighted: f.highlighted,
      onDrop: c
    }, {
      default: V(() => [
        (d(!0), m(C, null, Q(s.value, (F, h) => (d(), m(C, null, [
          U(E(Se, null, {
            default: V(() => [
              E(ue, { light: !0 }, {
                default: V(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [ne, r.value === h && l.value !== h && o.value === k(Z).top]
          ]),
          E(Se, {
            draggable: "true",
            onDragstart: (L) => i(h, L),
            onDragend: S[0] || (S[0] = (L) => l.value = null),
            onDragover: (L) => p(h, L),
            class: J({ "has-cursor": !0, "is-move": r.value == h, "is-grab": r.value != h })
          }, {
            default: V(() => [
              P(f.$slots, "item", {
                item: F,
                index: h
              })
            ]),
            _: 2
          }, 1032, ["onDragstart", "onDragover", "class"]),
          U(E(Se, null, {
            default: V(() => [
              E(ue, { light: !0 }, {
                default: V(() => [
                  ee(" ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1536), [
            [ne, r.value === h && l.value !== h && o.value === k(Z).bottom]
          ])
        ], 64))), 256))
      ]),
      _: 3
    }, 8, ["type", "compact", "outlined", "highlighted"]));
  }
}), Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DraggableItem: Ro,
  DropZone: jo,
  Sortable: Co
}, Symbol.toStringTag, { value: "Module" })), Ie = "HiddenFields", We = "DisabledFields", Yo = (e) => e, le = (e, n) => {
  const a = n("Translate", Yo);
  return g(() => e.translate ?? a);
};
function Ve(e, n) {
  const a = n(Ie), t = n(We), s = g(() => a.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1])), l = g(() => t.value.filter((r) => r.indexOf(`${e}.`) === 0).map((r) => r.split(".")[1]));
  return { hiddenValues: s, disabledValues: l };
}
const gn = (e) => {
  let n = [], a = [], t = 0;
  return e.forEach((s) => {
    let l = s.form_columns ?? 12;
    t + l > 12 && (n.push(a), a = [], t = 0), a.push(s), t += l, t === 12 && (n.push(a), a = [], t = 0);
  }), a.length > 0 && n.push(a), n;
};
async function ze(e) {
  let n = null, a = e;
  e instanceof Function && (a = e()), a instanceof Promise ? n = a : n = Promise.resolve(a);
  let t = await n, s = [];
  return t.value !== void 0 ? s = t.value : s = t, s;
}
const qo = { class: "tagsfield field input is-grouped is-grouped-multiline" }, Ko = { class: "control" }, Go = { class: "tags has-addons" }, Qo = { class: "tag is-link" }, Xo = ["onClick"], Zo = { key: 0 }, er = ["placeholder"], tr = { class: "dropdown-menu" }, ar = { class: "dropdown-content" }, sr = ["onClick"], lr = {
  key: 1,
  class: "dropdown-item"
}, vn = /* @__PURE__ */ w({
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
    const t = a, s = e, l = le(s, x), r = B([]), o = B(null), u = B(null), i = B(null), p = B(null);
    z(o, async (D) => {
      if (D != null) {
        if (D.length >= 2)
          if (s.values != null && s.values != null) {
            let W = [];
            for (let b = 0; b < s.values.length && ((s.values[b].name.toUpperCase().indexOf(D.toUpperCase()) >= 0 || s.values[b].id.toUpperCase().indexOf(D.toUpperCase()) >= 0) && W.push(s.values[b]), W.length != 10); b++)
              ;
            u.value = W;
          } else {
            let b = await (await (s.fetch ?? fetch)(`${s.callbackurl}?q=${encodeURIComponent(D)}`)).json();
            b.length > 10 && b.splice(10, b.length - 10), u.value = b;
          }
      } else
        u.value = null, $(p.value).empty();
    });
    const c = () => {
      if (r.value.length == 0)
        return null;
      const D = r.value.slice();
      return s.limit != null && s.limit == 1 ? D.length > 0 ? D[0] : null : D;
    }, f = async (D) => {
      if (D == null)
        r.value.length > 0 && r.value.splice(0, r.value.length), o.value = null;
      else {
        const W = await Promise.all(
          (Array.isArray(D) ? D : [D]).map(async (b) => {
            if (b.id !== void 0 && b.name !== void 0)
              return b;
            {
              let _ = await (await (s.fetch ?? fetch)(`${s.callbackurl}?${b.id === void 0 ? "q=" + encodeURIComponent(b) : "id=" + encodeURIComponent(b.id)}`)).json();
              return _.length > 0 ? (s.disabled && (_[0].readonly = !0), _[0]) : null;
            }
          })
        );
        r.value = W.filter((b) => b !== null), t("value_changed", { name: s.name, value: c() });
      }
    }, S = (D) => {
      D.preventDefault(), o.value = D.clipboardData.getData("text/plain");
    }, F = (D) => {
      switch (D.key) {
        case "Backspace":
          o.value != null && o.value.length > 0 && (o.value = o.value.substring(0, o.value.length - 1));
          break;
        case "Enter":
        case "Shift":
          break;
        default:
          D.key.length == 1 && (o.value = (o.value == null ? "" : o.value) + D.key);
          break;
      }
    }, h = () => {
      o.value = null;
    }, L = () => {
      p.value.focus();
    }, M = (D) => {
      r.value.push(D), h(), t("value_changed", { name: s.name, value: c() });
    }, v = (D) => {
      r.value.splice(D, 1), L(), t("value_changed", { name: s.name, value: c() });
    };
    return n({ getValue: c, setValue: f }), (D, W) => (d(), m("div", {
      class: "control autocomplete",
      onBlur: h,
      onClick: L
    }, [
      y("div", qo, [
        (d(!0), m(C, null, Q(r.value, (b, ae) => (d(), m("div", Ko, [
          y("div", Go, [
            y("a", Qo, N(k(l)(b.name)), 1),
            b.readonly ? A("", !0) : (d(), m("a", {
              key: 0,
              class: "tag is-delete",
              onClick: (_) => v(ae)
            }, null, 8, Xo))
          ])
        ]))), 256)),
        s.disabled ? A("", !0) : (d(), m("div", Zo, [
          U(y("span", {
            ref_key: "contentSpan",
            ref: p,
            placeholder: k(l)(s.title),
            contenteditable: "",
            class: J(i.value),
            onFocus: W[0] || (W[0] = (b) => {
              i.value = "is-focused";
            }),
            onBlur: W[1] || (W[1] = (b) => {
              i.value = null;
            }),
            onKeydown: F,
            onPaste: S
          }, null, 42, er), [
            [ne, r.value.length < s.limit || s.limit == null]
          ])
        ]))
      ]),
      y("div", {
        class: J(["dropdown", { "is-active": u.value != null && o.value != null && o.value != "" }])
      }, [
        y("div", tr, [
          y("div", ar, [
            u.value != null && u.value.length > 0 ? (d(!0), m(C, { key: 0 }, Q(u.value, (b) => (d(), m("a", {
              class: "dropdown-item",
              onClick: (ae) => M(b)
            }, N(k(l)(b.name)), 9, sr))), 256)) : (d(), m("a", lr, "No Results"))
          ])
        ])
      ], 2)
    ], 32));
  }
}), Ne = /* @__PURE__ */ w({
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
    const a = e, t = n, s = le(a, x);
    return (l, r) => (d(), T(X, {
      type: l.sstyle,
      icon: a.icon ? a.icon : null,
      title: k(s)(a.label),
      onClick: r[0] || (r[0] = (o) => t("button_clicked", a.name)),
      disabled: a.disabled
    }, null, 8, ["type", "icon", "title", "disabled"]));
  }
}), nr = { class: "checkbox is-block" }, or = ["value", "disabled"], yn = /* @__PURE__ */ w({
  __name: "checkbox-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = H(x), l = g(() => I("Form.Error", s)), r = a, o = le(t, x), u = B([]), i = B(!1), p = g(async () => {
      if (t.values == null)
        return [];
      {
        let h = await ze(t.values), L = h.filter((M) => M.selected).map((M) => M.value);
        return u.value === null || u.value.length == 0 ? u.value = L.length > 0 ? [...L] : [] : (L = u.value, h = h.map((M) => ({
          label: M.label,
          value: M.value,
          selected: L.some((v) => v === M.value)
        }))), h;
      }
    });
    z(u, (h) => {
      r("value_changed", { name: t.name, value: c() });
    });
    const c = () => u.value.length == 0 ? null : u.value, f = (h) => {
      i.value = !0, u.value.splice(0), h !== null && (u.value = [...h]), i.value = !1, r("value_changed", { name: t.name, value: c() });
    }, { hiddenValues: S, disabledValues: F } = Ve(t.name, x);
    return n({ getValue: c, setValue: f }), (h, L) => (d(), m("div", null, [
      E(Fe, { promise: p.value }, {
        default: V(({ response: M }) => [
          M !== null ? (d(!0), m(C, { key: 0 }, Q(M, (v) => U((d(), m("label", nr, [
            U(y("input", {
              type: "checkbox",
              class: "checkbox",
              value: v.value,
              "onUpdate:modelValue": L[0] || (L[0] = (D) => u.value = D),
              disabled: t.disabled || k(F).some((D) => D === v.value.toString())
            }, null, 8, or), [
              [Pe, u.value]
            ]),
            ee(" " + N(k(o)(v.label)), 1)
          ], 512)), [
            [ne, !k(S).some((D) => D === v.value.toString())]
          ])), 256)) : A("", !0)
        ]),
        pending: V(() => [
          E(k(ve))
        ]),
        rejected: V(() => [
          E(k(ue), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), rr = { class: "checkbox" }, ir = ["name", "disabled"], ur = {
  key: 0,
  class: "help is-danger"
}, _n = /* @__PURE__ */ w({
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
    const t = e, s = a, l = le(t, x), r = g(() => l.value(t.label)), o = B(!1);
    return z(o, (p) => s("value_changed", { name: t.name, value: p })), n({ getValue: () => o.value, setValue: (p) => {
      o.value = p;
    } }), (p, c) => (d(), m("label", rr, [
      U(y("input", {
        type: "checkbox",
        class: "checkbox",
        name: t.name,
        disabled: t.disabled,
        "onUpdate:modelValue": c[0] || (c[0] = (f) => o.value = f)
      }, null, 8, ir), [
        [Pe, o.value]
      ]),
      ee(" " + N(r.value) + " ", 1),
      t.required ? (d(), m("span", ur, "*")) : A("", !0)
    ]));
  }
}), Je = (e, n) => {
  let a = new Date(e);
  return a.setDate(e.getDate() + n), a;
}, j = (e, n, a) => {
  let t = e;
  for (; t.length < a; )
    t = n + t;
  return t;
}, _e = (e, n, a) => {
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
      t += `${I("Date.Weekdays." + (e.length > 3 ? l : l.substring(0, 3)), n)}`;
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
      t += `${I("Date.Months." + (e.length > 3 ? i : i.substring(0, 3)), n)}`;
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
}, de = (e, n, a) => {
  a = a ?? "ddd MMM dd yyyy HH:mm:ss G\\MTzz00";
  let t = "", s = "";
  for (var l = 0; l < a.length; l++)
    switch (a.charAt(l)) {
      case "\\":
        s != "" && (t += _e(s, n, e), s = ""), t += a.charAt(l + 1), l++;
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
        s != "" && s.charAt(0) != a.charAt(l) ? (t += _e(s, n, e), s = "") : s += a.charAt(l);
        break;
      default:
        s != "" && (t += _e(s, n, e), s = ""), t += a.charAt(l);
        break;
    }
  return s != "" && (t += _e(s, n, e), s = ""), t;
}, dr = { class: "control" }, cr = ["name", "id", "disabled"], qe = RegExp("^(\\d{2}):(\\d{2}) (AM|PM)$"), Ue = /* @__PURE__ */ w({
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
    return z(l, (i) => {
      s("value_changed", { name: t.name, value: i });
    }), n({ getValue: () => l.value, setValue: (i) => {
      if (i != null && qe.test(i)) {
        var p = qe.exec(i);
        i = (p[3] == "AM" ? p[1] : (parseInt(p[1]) + 12).toFixed(0)) + ":" + p[2] + ":00";
      }
      l.value = i;
    } }), (i, p) => (d(), m("div", dr, [
      U(y("input", {
        class: "input is-time",
        name: t.name,
        id: t.name,
        type: "time",
        "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c),
        disabled: t.disabled,
        style: Te(r.value)
      }, null, 12, cr), [
        [be, l.value]
      ])
    ]));
  }
});
const pr = { class: "control has-icons-left has-icons-right" }, hr = ["name", "id", "placeholder", "disabled"], br = /* @__PURE__ */ y("div", { class: "modal-background" }, null, -1), mr = { class: "modal-content" }, fr = { class: "panel is-primary is-dateselect" }, gr = { class: "panel-heading" }, vr = { class: "columns card-header-title" }, yr = { class: "column" }, _r = { class: "column has-text-centered" }, kr = { class: "column has-text-right" }, $r = { class: "panel-block" }, Sr = { class: "table is-striped has-text-centered" }, Mr = ["onClick"], Dr = { key: 0 }, wr = {
  colspan: "100%",
  class: "has-text-centered"
}, Br = { class: "panel-block" }, me = RegExp("^(\\d{2})-(\\d{2})-(\\d{4})$"), ke = RegExp("^(\\d{2})-(\\d{2})-(\\d{4}) (\\d{2}):(\\d{2})$"), kn = /* @__PURE__ */ w({
  __name: "date",
  props: {
    label: {},
    includeTime: { type: Boolean },
    name: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = e, l = a, r = B(!1), o = B(null), u = B(null), i = Ge({
      Month: (/* @__PURE__ */ new Date()).getMonth(),
      Year: (/* @__PURE__ */ new Date()).getFullYear(),
      Today: (/* @__PURE__ */ new Date()).getDay()
    }), p = H(x), c = Me({
      Sun: g(() => I("Date.Weekdays.Sun", p)),
      Mon: g(() => I("Date.Weekdays.Mon", p)),
      Tue: g(() => I("Date.Weekdays.Tue", p)),
      Wed: g(() => I("Date.Weekdays.Wed", p)),
      Thu: g(() => I("Date.Weekdays.Thu", p)),
      Fri: g(() => I("Date.Weekdays.Fri", p)),
      Sat: g(() => I("Date.Weekdays.Sat", p))
    }), f = g(() => o.value !== null && (s.includeTime ? ke : me).test(o.value)), S = () => {
      if (o.value == null || o.value == "")
        return null;
      {
        if (!ke.test(o.value) && s.includeTime)
          return null;
        if (!s.includeTime && !me.test(o.value))
          return null;
        if (me.test(o.value) && s.includeTime)
          return null;
        let _ = s.includeTime ? ke.exec(o.value) : me.exec(o.value);
        return new Date(
          parseInt(_[3]),
          parseInt(_[2]) - 1,
          parseInt(_[1]),
          s.includeTime ? parseInt(_[4]) : 0,
          s.includeTime ? parseInt(_[5]) : 0,
          0,
          0
        );
      }
    };
    z(o, (_) => {
      if (_ == null)
        l("value_changed", { name: s.name, value: null }), i.Month = (/* @__PURE__ */ new Date()).getMonth(), i.Year = (/* @__PURE__ */ new Date()).getFullYear();
      else if (!me.test(_) && !ke.test(_)) {
        _ = _.replaceAll(/[^0-9]/g, "");
        for (var O = [], R = 0; R < _.length; R += 2)
          R == 4 ? (O.push(_.substring(R, Math.min(_.length - R, 4) + R)), R += 2) : O.push(_.substring(R, Math.min(_.length - R, 2) + R));
        O.length > 0 && (/^([0-1]|(0[1-9])|(1[0-2]))$/.test(O[0]) || O.splice(0), O.length > 1 && (/^[0-3]/.test(O[1]) ? /^(01|03|05|07|08|10|12)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(O[1]) || O.splice(1) : /^(02|04|06|09|11)$/.test(O[0]) ? /^([0-3]|(0[1-9])|([1-2][0-9])|(30))$/.test(O[1]) || O.splice(1) : /^([0-2]|(0[1-9])|([1-2][0-9]))$/.test(O[1]) || O.splice(1) : O.splice(1)), O.length > 3 && (/^([0-2]|([0-1][0-9])|(2[0-3]))$/.test(O[3]) || O.splice(3)), O.length > 4 && (/^[0-5][0-9]?$/.test(O[4]) || O.splice(4))), _ = O.join(""), !s.includeTime && _.length > 8 && (_ = _.substring(0, 8)), _.length >= 2 && (_ = _.substring(0, 2) + "-" + (_.length > 2 ? _.substring(2) : "")), _.length >= 5 && (_ = _.substring(0, 5) + "-" + (_.length > 5 ? _.substring(5) : "")), _.length >= 9 && s.includeTime && (_ = _.substring(0, 9) + " " + (_.length > 9 ? _.substring(9) : "")), _.length >= 11 && (_ = _.substring(0, 11) + ":" + (_.length > 11 ? _.substring(11) : "")), o.value = _;
      } else {
        var se = S();
        f && l("value_changed", { name: s.name, value: se }), i.Month = se.getMonth(), i.Year = se.getFullYear();
      }
    });
    const F = g(() => de(new Date(i.Year, i.Month, 1), p, "MMMM")), h = g(() => {
      var _ = [], O = new Date(i.Year, i.Month, 1);
      O = Je(O, O.getDay() * -1);
      for (var R = S(), se = Je(new Date(i.Year, i.Month, 1), 32).getMonth(); O.getMonth() != se; ) {
        for (var Oe = [], Re = 0; Re < 7; Re++)
          Oe.push({
            Number: O.getDate(),
            Disabled: O.getMonth() != i.Month,
            isToday: de(O, p, "yyyy-MM-dd") == de(/* @__PURE__ */ new Date(), p, "yyyy-MM-dd"),
            isSelected: R != null && de(O, p, "yyyy-MM-dd") == de(R, p, "yyyy-MM-dd")
          }), O = Je(O, 1);
        _.push(Oe);
      }
      return _;
    });
    n({ getValue: S, setValue: function(_) {
      _ == null ? o.value = null : o.value = de(_, p, "dd-MM-yyyy" + (s.includeTime ? " HH:mm" : ""));
    } });
    const M = (_) => {
      _.value == null ? o.value != null && (o.value = o.value.split(" ")[0]) : o.value != null ? o.value = o.value.split(" ")[0] + " " + _.value : o.value = `${j((i.Month == (/* @__PURE__ */ new Date()).getMonth() ? (/* @__PURE__ */ new Date()).getDate() : 1).toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year} ${_.value}`;
    }, v = (_) => {
      if (!_.Disabled && !_.isSelected)
        if (o.value === null)
          o.value = `${j(_.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}` + (s.includeTime ? t.value.getValue() == null ? "" : " " + t.value.getValue() : "");
        else {
          var O = o.value.split(" ");
          O[0] = `${j(_.Number.toString(), "0", 2)}-${j((i.Month + 1).toString(), "0", 2)}-${i.Year}`, o.value = `${O[0]}${O.length > 1 ? " " + O[1] : ""}`;
        }
    }, D = () => {
      o.value = u.value, r.value = !1;
    }, W = () => {
      s.disabled || (u.value = o.value, r.value = !0);
    }, b = () => {
      s.disabled || (o.value = null);
    }, ae = (_) => {
      i.Month + _ == -1 ? (i.Year = i.Year - 1, i.Month = 11) : i.Month + _ == 12 ? (i.Year = i.Year + 1, i.Month = 0) : i.Month += _;
    };
    return (_, O) => (d(), m("div", null, [
      y("div", pr, [
        U(y("input", {
          class: "input is-expanded",
          name: s.name,
          id: s.name,
          type: "text",
          "onUpdate:modelValue": O[0] || (O[0] = (R) => o.value = R),
          placeholder: "DD-MM-YYYY" + (s.includeTime ? " HH:mm" : ""),
          disabled: s.disabled
        }, null, 8, hr), [
          [be, o.value]
        ]),
        y("span", {
          class: "icon is-small is-left is-clickable",
          onClick: W
        }, [
          E(k(q), { icon: "calendar-alt" })
        ]),
        y("span", {
          class: "icon is-small is-right is-clickable",
          onClick: b
        }, [
          E(k(q), { icon: "window-close" })
        ])
      ]),
      y("div", {
        class: J(["modal", { "is-active": r.value }])
      }, [
        br,
        y("div", mr, [
          y("div", fr, [
            y("div", gr, [
              y("div", vr, [
                y("div", yr, [
                  E(k(q), {
                    icon: "arrow-circle-left",
                    onClick: O[1] || (O[1] = (R) => ae(-1))
                  })
                ]),
                y("div", _r, N(F.value) + " " + N(i.Year), 1),
                y("div", kr, [
                  E(k(q), {
                    icon: "arrow-circle-right",
                    onClick: O[2] || (O[2] = (R) => ae(1))
                  })
                ])
              ])
            ]),
            y("div", $r, [
              y("table", Sr, [
                y("thead", null, [
                  y("tr", null, [
                    y("th", null, N(k(c).Sun), 1),
                    y("th", null, N(k(c).Mon), 1),
                    y("th", null, N(k(c).Tue), 1),
                    y("th", null, N(k(c).Wed), 1),
                    y("th", null, N(k(c).Thu), 1),
                    y("th", null, N(k(c).Fri), 1),
                    y("th", null, N(k(c).Sat), 1)
                  ])
                ]),
                y("tbody", null, [
                  (d(!0), m(C, null, Q(h.value, (R) => (d(), m("tr", null, [
                    (d(!0), m(C, null, Q(R, (se) => (d(), m("td", {
                      class: J(["is-unselectable", se.Disabled ? "has-text-primary-dark has-background-primary-light" : "is-clickable", se.isToday ? "has-background-primary-dark" : "", se.isSelected ? "has-background-success-dark" : ""]),
                      onClick: (Oe) => v(se)
                    }, N(se.Number), 11, Mr))), 256))
                  ]))), 256))
                ]),
                s.includeTime ? (d(), m("tfoot", Dr, [
                  y("tr", null, [
                    y("td", wr, [
                      E(Ue, {
                        ref: t.value,
                        name: `${s.name}-time`,
                        disabled: s.disabled,
                        onValue_changed: M
                      }, null, 8, ["name", "disabled"])
                    ])
                  ])
                ])) : A("", !0)
              ])
            ]),
            y("div", Br, [
              E(k(hn), {
                addonclass: "card-footer-item",
                disabled: !f.value,
                onClick: O[3] || (O[3] = (R) => r.value = !1)
              }, null, 8, ["disabled"]),
              E(k(pn), {
                addonclass: "card-footer-item",
                onClick: D
              })
            ])
          ])
        ])
      ], 2)
    ]));
  }
});
const $n = /* @__PURE__ */ w({
  __name: "full-editor",
  props: {
    name: {},
    disabled: { type: Boolean }
  },
  emits: ["value_changed"],
  async setup(e, { expose: n, emit: a }) {
    let t, s;
    const l = Rn(x);
    ge([`${l}summernote-lite.min.css`]), [t, s] = Ln(() => import(`${l}summernote`)), await t, s();
    const r = B(null), o = e, u = a;
    return z([o.disabled], (c) => {
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
    }), In(() => {
      $(r.value).summernote("destroy");
    }), (c, f) => (d(), m("div", {
      class: "summernote",
      ref_key: "snote",
      ref: r
    }, null, 512));
  }
}), Ae = /* @__PURE__ */ w({
  __name: "header",
  props: {
    label: {},
    subtype: { default: "h1" },
    Translate: {}
  },
  setup(e) {
    const n = e, a = le(n, x);
    return (t, s) => (d(), T(he(n.subtype), null, {
      default: V(() => [
        ee(N(k(a)(n.label)), 1)
      ]),
      _: 1
    }));
  }
}), Fr = ["name"], Sn = /* @__PURE__ */ w({
  __name: "hidden",
  props: {
    name: {}
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = B(null);
    return z(l, (u) => s("value_changed", { name: t.name, value: u })), n({ getValue: () => l.value, setValue: (u) => {
      l.value = u;
    } }), (u, i) => U((d(), m("input", {
      type: "hidden",
      class: "input",
      name: t.name,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p)
    }, null, 8, Fr)), [
      [be, l.value]
    ]);
  }
}), Or = ["name", "disabled", "min", "max", "step"], Mn = /* @__PURE__ */ w({
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
    return z([l], (u) => s("value_changed", { name: t.name, value: r() })), n({ getValue: r, setValue: o }), (u, i) => U((d(), m("input", {
      type: "number",
      class: "input",
      name: u.name,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p),
      disabled: u.disabled,
      min: t.min,
      max: t.max,
      step: t.step
    }, null, 8, Or)), [
      [be, l.value]
    ]);
  }
}), xr = ["id"], Ee = /* @__PURE__ */ w({
  __name: "paragraph",
  props: {
    label: {},
    name: {},
    Translate: { type: Function }
  },
  setup(e) {
    const n = e, a = le(n, x);
    return (t, s) => (d(), m("p", {
      id: n.name
    }, N(k(a)(n.label)), 9, xr));
  }
}), Jr = { class: "radio" }, Nr = ["name", "value", "disabled"], Ar = /* @__PURE__ */ y("br", null, null, -1), Dn = /* @__PURE__ */ w({
  __name: "radio-group",
  props: {
    values: { type: [Array, Promise, Function] },
    name: {},
    disabled: { type: Boolean },
    translate: { type: Function }
  },
  emits: ["value_changed"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = H(x), l = g(() => I("Form.Error", s)), r = a, o = le(t, x), u = B(null), i = function() {
      return u.value;
    };
    z(u, (F) => {
      r("value_changed", { name: t.name, value: i() });
    });
    const p = g(async () => {
      if (t.values == null)
        return [];
      {
        let F = await ze(t.values);
        return u.value === null && F.some((h) => h.selected) && (u.value = F.find((h) => h.selected).value), F.map((h) => ({
          label: h.label,
          value: h.value,
          selected: u.value === h.value
        }));
      }
    }), c = (F) => {
      u.value = F;
    }, { hiddenValues: f, disabledValues: S } = Ve(t.name, x);
    return n({ getValue: i, setValue: c }), (F, h) => (d(), m("div", null, [
      E(Fe, { promise: p.value }, {
        default: V(({ response: L }) => [
          F.values != null ? (d(!0), m(C, { key: 0 }, Q(L, (M) => (d(), m(C, null, [
            U(y("label", Jr, [
              y("input", {
                type: "radio",
                name: t.name,
                value: M.value,
                class: "radio",
                disabled: t.disabled || k(S).some((v) => v === M.value.toString())
              }, null, 8, Nr),
              ee(" " + N(k(o)(M.label)), 1)
            ], 512), [
              [ne, !k(f).some((v) => v === M.value.toString())]
            ]),
            Ar
          ], 64))), 256)) : A("", !0)
        ]),
        pending: V(() => [
          E(k(ve))
        ]),
        rejected: V(() => [
          E(k(ue), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])
    ]));
  }
}), Er = { class: "select" }, Tr = ["id", "name", "multiple", "disabled"], Pr = ["value", "selected", "disabled"], Lr = ["label"], Ir = ["value", "selected", "disabled"], wn = (e, n, a) => {
  let t = {
    label: e === null ? n.label : `${e}->${n.label}`,
    values: []
  }, s = a.length;
  return a.push(t), n.values.forEach((l) => {
    l.values === void 0 ? t.values.push(l) : a = wn(t.label, l, a);
  }), a[s].values.length == 0 && a.splice(s, 1), a;
}, Bn = /* @__PURE__ */ w({
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
    const t = e, s = H(x), l = g(() => I("Form.Error", s)), r = a, o = le(t, x), u = B(null), i = B(!1), p = g(async () => {
      if (t.values == null)
        return [];
      {
        let h = await ze(t.values), L = h.filter((v) => v.selected).map((v) => v.value);
        h.some((v) => v.values !== void 0) && h.filter((v) => v.values !== void 0).forEach((v) => {
          L = L.concat(
            v.values.filter((D) => D.selected).map((D) => D.value)
          );
        }), u.value === null || u.value.length === 0 ? u.value = null : (h = h.map((v) => {
          let D = v;
          return D.values !== void 0 && (D.values = D.values.map((W) => (W.selected = u.value.some((b) => b === W.value), W))), D;
        }), u.value.forEach((v) => {
          h.some((D) => D.value !== void 0 && D.value === v || D.values !== void 0 && D.values.some((W) => W.value === v)) || h.push({
            label: v,
            value: v
          });
        }));
        let M = [];
        return h.forEach((v) => {
          v.values === void 0 ? M.push(v) : M = wn(v.label, v, M);
        }), M;
      }
    }), c = () => u.value == null || u.value.length == 0 ? null : t.multiple ? u.value.slice() : Array.isArray(u.value) ? u.value[0] : u.value;
    z(u, () => {
      i.value || r("value_changed", { name: t.name, value: c() });
    }), z(i, (h) => {
      h || r("value_changed", { name: t.name, value: c() });
    });
    const f = (h) => {
      i.value = !0, h != null ? t.multiple ? u.value = Array.isArray(h) ? h : [h] : u.value = h : t.multiple ? u.value = [] : u.value = null, i.value = !1;
    }, { hiddenValues: S, disabledValues: F } = Ve(t.name, x);
    return n({ getValue: c, setValue: f }), (h, L) => (d(), m("div", Er, [
      p.value != null ? (d(), T(Fe, {
        key: 0,
        promise: p.value
      }, {
        default: V(({ response: M }) => [
          U(y("select", {
            id: t.name,
            name: t.name,
            multiple: t.multiple,
            class: J([t.multiple ? "is-multiple" : ""]),
            "onUpdate:modelValue": L[0] || (L[0] = (v) => u.value = v),
            disabled: t.disabled
          }, [
            M != null ? (d(!0), m(C, { key: 0 }, Q(M, (v) => (d(), m(C, null, [
              v.values == null ? U((d(), m("option", {
                key: 0,
                value: v.value,
                selected: v.selected,
                disabled: k(F).some((D) => D === v.value.toString())
              }, N(k(o)(v.label)), 9, Pr)), [
                [ne, !k(S).some((D) => D === v.value.toString())]
              ]) : A("", !0),
              v.values != null ? (d(), m("optgroup", {
                key: 1,
                label: k(o)(v.label)
              }, [
                (d(!0), m(C, null, Q(v.values, (D) => U((d(), m("option", {
                  value: D.value,
                  selected: D.selected,
                  disabled: k(F).some((W) => W === D.value.toString())
                }, N(k(o)(D.label)), 9, Ir)), [
                  [ne, !k(S).some((W) => W === D.value.toString())]
                ])), 256))
              ], 8, Lr)) : A("", !0)
            ], 64))), 256)) : A("", !0)
          ], 10, Tr), [
            [Wn, u.value]
          ])
        ]),
        pending: V(() => [
          E(k(ve))
        ]),
        rejected: V(() => [
          E(k(ue), {
            type: k(te).danger,
            message: l.value
          }, null, 8, ["type", "message"])
        ]),
        _: 1
      }, 8, ["promise"])) : A("", !0)
    ]));
  }
}), Wr = { class: "field" }, Vr = ["id", "name", "disabled"], zr = ["for"], Ur = {
  key: 0,
  class: "help is-danger"
}, Fn = /* @__PURE__ */ w({
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
    const t = e, s = a, l = le(t, x), r = B(!1);
    return z(r, (i) => s("value_changed", { name: t.name, value: i })), n({ getValue: () => r.value, setValue: (i) => {
      r.value = i;
    } }), (i, p) => (d(), m("div", Wr, [
      U(y("input", {
        type: "checkbox",
        class: "switch is-rounded",
        id: t.name,
        name: t.name,
        "onUpdate:modelValue": p[0] || (p[0] = (c) => r.value = c),
        disabled: t.disabled
      }, null, 8, Vr), [
        [Pe, r.value]
      ]),
      y("label", { for: i.name }, [
        ee(N(k(l)(t.label)) + " ", 1),
        t.required ? (d(), m("span", Ur, "*")) : A("", !0)
      ], 8, zr)
    ]));
  }
}), Rr = ["type", "name", "disabled", "maxlength"], On = /* @__PURE__ */ w({
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
    return z(l, (u) => s("value_changed", { name: t.name, value: u })), n({ getValue: () => l.value, setValue: (u) => {
      l.value = u;
    } }), (u, i) => U((d(), m("input", {
      type: u.subtype,
      class: "input",
      name: u.name,
      disabled: u.disabled,
      maxlength: t.maxlength,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p)
    }, null, 8, Rr)), [
      [Vn, l.value]
    ]);
  }
}), jr = ["name", "rows", "cols", "maxlength", "disabled"], xn = 9, ce = String.fromCharCode(xn), $e = String.fromCharCode(10), Jn = /* @__PURE__ */ w({
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
    z(l, (i) => {
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
          case xn:
            let c = i.target.selectionStart, f = i.target.selectionEnd, S = p.substring(0, c), F = p.length > f ? p.substring(f) : "", h = c == f ? "" : p.substring(c, f);
            if (h.indexOf(String.fromCharCode(10)) < 0)
              i.shiftKey ? h.startsWith(ce) ? (h = h.substring(1), c--) : S.endsWith(ce) && (S = S.substring(0, S.length - 1), c--) : h = ce + h;
            else {
              let L = !1;
              h.endsWith($e) && (L = !0, h = h.substring(0, h.length - 1));
              let M = h.split($e);
              h = "", i.shiftKey && S.endsWith(ce) && (S = S.substring(0, S.length - 1), c--), M.forEach((v, D) => {
                i.shiftKey && v.startsWith(ce) ? v = v.substring(1) : i.shiftKey || (v = ce + v), h += v + (D === M.length - 1 ? "" : $e);
              }), L && (h += $e);
            }
            return p = S + h + F, c += h.length == 1 ? 1 : 0, f = c + (h.length == 1 ? 0 : h.length), o(p), i.target.selectionStart = c, i.target.selectionEnd = f, i.target.focus(), i.preventDefault != null && i.preventDefault(), !1;
          default:
            return !0;
        }
      }
      return !0;
    };
    return (i, p) => U((d(), m("textarea", {
      class: "textarea",
      name: t.name,
      rows: t.rows,
      cols: t.cols,
      maxlength: t.maxlength,
      disabled: t.disabled,
      onKeydown: u,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c)
    }, null, 40, jr)), [
      [be, l.value]
    ]);
  }
}), Cr = { class: "columns" }, Nn = /* @__PURE__ */ w({
  __name: "row",
  props: {
    inputs: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = x(Ie), r = x(We);
    n({ setValue: (c) => {
      p.forEach((f) => {
        switch (f.type) {
          case "subform":
            f.setValue(c);
            break;
          default:
            f.setValue !== void 0 && (c === null ? f.setValue(null) : Object.keys(c).some((S) => S === f.fieldName) ? f.setValue(c[f.fieldName]) : Object.keys(c).some((S) => S === f.altFieldName) && f.setValue(c[f.altFieldName]));
            break;
        }
      });
    }, getValue: () => {
      var c = {};
      return p.forEach((f) => {
        if (f.getValue != null)
          switch (f.type) {
            case "subform":
              c = $.extend(c, f.getValue());
              break;
            default:
              c[f.fieldName] = f.getValue();
              break;
          }
      }), c;
    }, isValid: () => !p.some((c) => !(c.isValid === void 0 || c.isValid())) });
    const p = t.inputs.map((c) => B(null));
    return (c, f) => (d(), m("div", Cr, [
      (d(!0), m(C, null, Q(t.inputs, (S, F) => (d(), T(An, {
        ref_for: !0,
        ref: (h) => k(p)[F] = h,
        input: S,
        onValue_changed: f[0] || (f[0] = (h) => s("value_changed", h)),
        onButton_clicked: f[1] || (f[1] = (h) => s("button_clicked", h)),
        disabled: t.disabled || k(r).some((h) => h === S.name),
        hidden: k(l).some((h) => h === S.name)
      }, null, 8, ["input", "disabled", "hidden"]))), 256))
    ]));
  }
}), Hr = ["id", "name"], Yr = /* @__PURE__ */ w({
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
      let p = gn(t.fields);
      return l = p.map((c) => B(null)), p;
    });
    return n({ isValid: () => !l.some((p) => !(p.isValid === void 0 || p.isValid())), setValue: (p) => l.forEach((c) => c.setValue(p)), getValue: () => {
      var p = {};
      return l.forEach((c) => {
        p = $.extend(p, c.getValue());
      }), p;
    } }), (p, c) => U((d(), m("div", {
      class: "box",
      id: t.name,
      name: t.name
    }, [
      (d(!0), m(C, null, Q(r.value, (f, S) => (d(), T(Nn, {
        ref_for: !0,
        ref: (F) => k(l)[S] = F,
        inputs: f,
        disabled: t.disabled,
        onValue_changed: c[0] || (c[0] = (F) => s("value_changed", F)),
        onButton_clicked: c[1] || (c[1] = (F) => s("button_clicked", F))
      }, null, 8, ["inputs", "disabled"]))), 256))
    ], 8, Hr)), [
      [ne, !t.hidden]
    ]);
  }
}), qr = ["for"], Kr = {
  key: 0,
  class: "help is-danger"
}, Gr = { class: "control" }, Qr = ["autocomplete", "checkbox-group", "date", "number", "radio-group", "select", "text", "textarea", "time", "file_download", "subform", "textarea-code"], Xr = ["subform", "switch", "select", "radio-group", "paragraph", "header", "checkbox-group", "checkbox", "button", "autocomplete"], An = /* @__PURE__ */ w({
  __name: "form-component",
  props: {
    input: {},
    disabled: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = B(null), s = a, l = e, r = le(l, x), o = Me(B(l.input.type)), u = g(() => {
      let b = null;
      switch (l.input.type) {
        case "autocomplete":
          b = vn;
          break;
        case "button":
          b = Ne;
          break;
        case "checkbox-group":
          b = yn;
          break;
        case "checkbox":
          b = _n;
          break;
        case "date":
          b = kn;
          break;
        case "full-editor":
          b = $n;
          break;
        case "header":
          b = Ae;
          break;
        case "hidden":
          b = Sn;
          break;
        case "number":
          b = Mn;
          break;
        case "paragraph":
          b = Ee;
          break;
        case "radio-group":
          b = Dn;
          break;
        case "select":
          b = Bn;
          break;
        case "Switch":
          b = Fn;
          break;
        case "text":
          b = On;
          break;
        case "textarea":
          b = Jn;
          break;
        case "time":
          b = Ue;
          break;
        case "subform":
          b = Yr;
          break;
      }
      return b;
    }), i = function(b) {
      t.value !== null && t.value.setValue !== void 0 && t.value.setValue(b);
    };
    re(() => {
      t.value !== null && l.input.value !== void 0 && l.input.value !== null && i(l.input.value);
    });
    const p = g(() => l.input.disabled ?? l.disabled ?? !1), c = g(() => `is-${l.input.form_columns ?? 12}`), f = g(() => l.input.name), S = g(() => l.input.processVariable ?? l.input.name), F = g(() => Qr.some((b) => b === l.input.type) && l.input.label !== void 0 && l.input.label !== null), h = g(() => {
      let b = $.extend({}, l.input);
      return delete b.type, b.className != null && delete b.className, b.form_columns != null && delete b.form_columns, Xr.some((ae) => ae === l.input.type) && (b.translate = l.translate), b.disabled = l.disabled, b;
    }), L = (b) => {
      if (b.value !== void 0 && b.value !== null && Array.isArray(b.value)) {
        let ae = [...b.value];
        b.value = ae;
      }
      s("value_changed", b);
    }, M = (b) => {
      s("button_clicked", b);
    }, v = () => {
      if (t.value != null && t.value.getValue != null) {
        let b = t.value.getValue();
        return b != null && Array.isArray(b) ? [...b] : b;
      }
      return null;
    };
    return n({ setValue: i, fieldName: f, type: o, altFieldName: S, getValue: v, isValid: () => {
      if (l.input.type === "subform" && t.value !== null)
        return t.value.isValid();
      if (l.input.required ?? !1) {
        let b = v();
        return b != null && (Array.isArray(b) ? b.length > 0 : !0) && b.toString() !== "";
      }
      return !0;
    }, setValues: (b) => {
      if (l.input.type === "subform" && t.value !== null)
        t.value.setValues(b);
      else
        throw "unable to call set values on any form element except a subform";
    } }), (b, ae) => U((d(), m("div", {
      class: J(["field column", [c.value]])
    }, [
      l.input.type == "header" ? (d(), T(Ae, {
        key: 0,
        subtype: l.input.subtype,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["subtype", "label"])) : l.input.type == "paragraph" ? (d(), T(Ee, {
        key: 1,
        name: l.input.name,
        label: l.input.label,
        ref_key: "inp",
        ref: t
      }, null, 8, ["name", "label"])) : l.input.type == "button" ? (d(), T(Ne, {
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
      }, null, 8, ["name", "sstyle", "className", "icon", "label", "disabled"])) : (d(), m(C, { key: 3 }, [
        F.value ? (d(), m("label", {
          key: 0,
          class: "label",
          for: l.input.name
        }, [
          ee(N(k(r)(l.input.label)) + " ", 1),
          l.input.required ? (d(), m("span", Kr, "*")) : A("", !0)
        ], 8, qr)) : A("", !0),
        y("div", Gr, [
          (d(), T(he(u.value), K(h.value, {
            onValue_changed: L,
            ref_key: "inp",
            ref: t
          }), null, 16))
        ])
      ], 64))
    ], 2)), [
      [ne, !l.hidden]
    ]);
  }
});
const Zr = {
  onsubmit: "return false;",
  class: "container is-fullhd"
}, ei = /* @__PURE__ */ w({
  __name: "component-form",
  props: {
    elements: {},
    disabled: { type: Boolean, default: !1 },
    translate: {}
  },
  emits: ["value_changed", "button_clicked"],
  setup(e, { expose: n, emit: a }) {
    const t = e, s = a, l = le(t, x);
    xe("Translate", (M) => l.value(M));
    let r = [];
    const o = g(() => {
      if (t.elements != null) {
        let M = gn(t.elements);
        return r = M.map((v) => B(null)), M;
      } else
        return null;
    }), u = () => {
      let M = {};
      return r.forEach((v) => {
        M = $.extend(M, v.getValue());
      }), M;
    }, i = (M) => {
      r.forEach((v) => v.setValue(M));
    }, p = () => !r.some((M) => !(M.isValid === void 0 || M.isValid())), c = B([]);
    xe(Ie, Me(c));
    const f = (M) => {
      Array.isArray(M) ? c.value = [...c.value, ...M] : c.value.push(M);
    }, S = (M) => {
      Array.isArray(M) ? c.value = c.value.filter((v) => M.indexOf(v) >= 0) : c.value = c.value.filter((v) => v !== M);
    }, F = B([]);
    return xe(We, Me(F)), n({ getValues: u, setValues: i, isValid: p, hideField: f, showField: S, disableField: (M) => {
      Array.isArray(M) ? F.value = [...F.value, ...M] : F.value.push(M);
    }, enableField: (M) => {
      Array.isArray(M) ? F.value = F.value.filter((v) => M.indexOf(v) >= 0) : F.value = F.value.filter((v) => v !== M);
    } }), (M, v) => (d(), m("form", Zr, [
      o.value != null ? (d(!0), m(C, { key: 0 }, Q(o.value, (D, W) => (d(), T(Nn, {
        ref_for: !0,
        ref: (b) => k(r)[W] = b,
        inputs: D,
        transte: t.translate,
        key: W,
        onValue_changed: v[0] || (v[0] = (b) => s("value_changed", b)),
        onButton_clicked: v[1] || (v[1] = (b) => s("button_clicked", b)),
        disabled: M.disabled
      }, null, 8, ["inputs", "transte", "disabled"]))), 128)) : A("", !0)
    ]));
  }
}), ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoComplete: vn,
  Button: Ne,
  Checkbox: _n,
  CheckboxGroup: yn,
  ComponentForm: ei,
  Date: kn,
  FormComponent: An,
  FullEditor: $n,
  Header: Ae,
  Hidden: Sn,
  Number: Mn,
  Paragraph: Ee,
  RadioGroup: Dn,
  Select: Bn,
  Switch: Fn,
  Text: On,
  TextArea: Jn,
  Time: Ue
}, Symbol.toStringTag, { value: "Module" })), ai = { class: "hero-body" }, si = { class: "title" }, li = {
  key: 0,
  class: "subtitle"
}, ni = /* @__PURE__ */ w({
  __name: "banner",
  props: {
    type: {},
    title: {},
    subtitle: {}
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), m("section", {
      class: J(["hero", "is-small", "has-text-centered", a.type == null ? "" : "is-" + n.type])
    }, [
      y("div", ai, [
        y("p", si, N(n.title), 1),
        n.subtitle ? (d(), m("p", li, N(n.subtitle), 1)) : A("", !0)
      ])
    ], 2));
  }
}), oi = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, s] of n)
    a[t] = s;
  return a;
}, ri = {}, ii = { class: "box" };
function ui(e, n) {
  return d(), m("div", ii, [
    P(e.$slots, "default")
  ]);
}
const di = /* @__PURE__ */ oi(ri, [["render", ui]]), ci = {
  key: 0,
  class: "icon is-clickable"
}, pi = /* @__PURE__ */ w({
  __name: "breadcrumbs-item",
  props: {
    active: { type: Boolean },
    title: {},
    icon: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const a = e, t = n;
    return (s, l) => (d(), m("li", {
      class: J({ "is-active": a.active })
    }, [
      y("a", {
        onClick: l[0] || (l[0] = (r) => t("click"))
      }, [
        a.icon ? (d(), m("span", ci, [
          E(k(q), {
            icon: a.icon
          }, null, 8, ["icon"])
        ])) : A("", !0),
        ee(" " + N(a.title), 1)
      ])
    ], 2));
  }
}), hi = /* @__PURE__ */ w({
  __name: "breadcrumbs",
  props: {
    alignment: { default: we.left },
    size: { default: oe.normal },
    seperator: {}
  },
  setup(e) {
    const n = e, a = g(() => {
      let t = ["breadcrumb"];
      return n.alignment && n.alignment !== we.left && t.push(`is-${n.alignment}`), n.size && n.size !== oe.normal && t.push(`is-${n.size}`), n.seperator && t.push(`has-${n.seperator}-seperator`), t;
    });
    return (t, s) => (d(), m("nav", {
      class: J(a.value),
      "aria-label": "breadcrumbs"
    }, [
      y("ul", null, [
        P(t.$slots, "default")
      ])
    ], 2));
  }
}), bi = /* @__PURE__ */ w({
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
    return (a, t) => (d(), m("div", {
      class: J(["columns", [
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
      P(a.$slots, "default")
    ], 2));
  }
}), mi = /* @__PURE__ */ w({
  __name: "column",
  props: {
    size: {},
    offset: {},
    border: {},
    addonclass: {}
  },
  setup(e) {
    const n = e, a = g(() => {
      var t = [`is-${n.size ?? "12"}`];
      return n.offset && t.push(`is-offset-${n.offset}`), n.border && (n.border.some((s) => s === Be.all) ? t.push("is-bordered") : n.border.forEach((s) => t.push(`is-bordered-${s}`))), n.addonclass && t.push(n.addonclass), t;
    });
    return (t, s) => (d(), m("div", {
      class: J(["column", a.value])
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), fi = /* @__PURE__ */ y("div", { class: "modal-background" }, null, -1), gi = { class: "modal-content" }, vi = {
  key: 0,
  class: "modal-close is-large",
  "aria-label": "close"
}, yi = /* @__PURE__ */ w({
  __name: "modal",
  props: {
    display: { type: Boolean, default: !0 },
    hasClose: { type: Boolean, default: !1 },
    zIndex: { default: 99 }
  },
  setup(e) {
    const n = e;
    return (a, t) => (d(), m("div", {
      class: J({ modal: !0, "is-active": n.display }),
      style: Te(`z-index:${n.zIndex}`)
    }, [
      fi,
      y("div", gi, [
        P(a.$slots, "default")
      ]),
      n.hasClose ? (d(), m("button", vi)) : A("", !0)
    ], 6));
  }
}), _i = /* @__PURE__ */ y("div", { class: "modal-background" }, null, -1), ki = { class: "modal-card-head" }, $i = { class: "modal-card-body" }, Si = { class: "modal-card-foot" }, Mi = /* @__PURE__ */ w({
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
    return (o, u) => (d(), m("div", {
      class: J(["modal", { "is-active": a.show }])
    }, [
      _i,
      y("div", {
        class: J(["modal-card", r.value])
      }, [
        y("div", ki, [
          P(o.$slots, "header", pe(fe(l))),
          o.hasClose ? (d(), m("button", {
            key: 0,
            class: "delete",
            "aria-label": "close",
            onClick: u[0] || (u[0] = (i) => t("close"))
          })) : A("", !0)
        ]),
        y("div", $i, [
          P(o.$slots, "content")
        ]),
        y("div", Si, [
          P(o.$slots, "footer", pe(fe(s)))
        ])
      ], 2)
    ], 2));
  }
}), Di = {
  key: 0,
  class: "panel-heading"
}, wi = {
  key: 1,
  class: "panel-tabs"
}, Bi = { class: "panel-block" }, Fi = /* @__PURE__ */ w({
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
    return (s, l) => (d(), m("div", {
      class: J(["panel", t.value])
    }, [
      n.hasHeader ? (d(), m("div", Di, [
        P(s.$slots, "header")
      ])) : A("", !0),
      n.hasTabs ? (d(), m("div", wi, [
        P(s.$slots, "tabs")
      ])) : A("", !0),
      (d(!0), m(C, null, Q(a.value, (r) => (d(), m("div", Bi, [
        P(s.$slots, r)
      ]))), 256))
    ], 2));
  }
}), Oi = /* @__PURE__ */ w({
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
    return (s, l) => (d(), m("div", {
      class: J(a.value)
    }, [
      y("table", {
        class: J(t.value)
      }, [
        y("thead", null, [
          P(s.$slots, "thead")
        ]),
        y("tbody", null, [
          P(s.$slots, "tbody")
        ]),
        y("tfoot", null, [
          P(s.$slots, "tfoot")
        ])
      ], 2)
    ], 2));
  }
}), xi = ["href"], Ji = {
  key: 0,
  class: "icon is-small"
}, Ni = /* @__PURE__ */ w({
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
    return (l, r) => (d(), m("li", {
      class: J({ "is-active": t.active })
    }, [
      y("a", {
        href: l.href,
        onClick: s
      }, [
        t.icon ? (d(), m("span", Ji, [
          E(k(q), {
            icon: t.icon
          }, null, 8, ["icon"])
        ])) : A("", !0),
        y("span", null, N(t.title), 1)
      ], 8, xi)
    ], 2));
  }
}), Ai = /* @__PURE__ */ w({
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
    return (t, s) => (d(), m("div", {
      class: J(a.value)
    }, [
      y("ul", null, [
        P(t.$slots, "default")
      ])
    ], 2));
  }
}), Ei = /* @__PURE__ */ w({
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
      return n.size && t.push(`is-${n.size}`), n.borders && (n.borders.some((s) => s === Be.all) ? t.push("is-bordered") : n.borders.forEach((s) => t.push(`is-bordered-${s}`))), n.vertical && t.push("is-vertical"), t;
    });
    return (t, s) => (d(), m("div", {
      class: J(a.value)
    }, [
      P(t.$slots, "default")
    ], 2));
  }
}), Ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ni,
  Box: di,
  Breadcrumbs: hi,
  BreadcrumbsItem: pi,
  Card: mn,
  Column: mi,
  ColumnContainer: bi,
  List: fn,
  ListItem: Se,
  Modal: yi,
  ModalCard: Mi,
  Panel: Fi,
  Table: Oi,
  Tabs: Ai,
  TabsTab: Ni,
  Tile: Ei
}, Symbol.toStringTag, { value: "Module" }));
const Ke = document.currentScript === null || document.currentScript === void 0 ? import.meta.url : document.currentScript.src;
ge(`${Ke.substring(0, Ke.lastIndexOf("/"))}/style.css`);
const Pi = ["cerulean", "cosmo", "cyborg", "darkly", "default", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "nuclear", "pulse", "sandstone", "simplex", "slate", "solar", "spacelab", "superhero", "united", "yeti"];
function Li(e) {
  document.getElementsByTagName("body")[0].setAttribute("data-skin", e ?? "");
}
const Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AVAIABLE_SKINS: Pi,
  setSkin: Li
}, Symbol.toStringTag, { value: "Module" })), {
  Animation: zi,
  Button: Ui,
  ButtonAdd: Ri,
  ButtonCancel: ji,
  ButtonDelete: Ci,
  ButtonDisable: Hi,
  ButtonDownload: Yi,
  ButtonEdit: qi,
  ButtonEnable: Ki,
  ButtonOkay: Gi,
  ButtonPrint: Qi,
  ButtonRefresh: Xi,
  ButtonSave: Zi,
  ButtonUpload: eu,
  Chart: tu,
  CheckMark: au,
  DynamicSlot: su,
  Filter: lu,
  Icon: nu,
  Message: ou,
  Notification: ru,
  PageNotification: iu,
  Pagination: uu,
  Promised: du,
  Progress: cu
} = Uo, { DraggableItem: pu, DropZone: hu, Sortable: bu } = Ho, {
  AutoComplete: mu,
  CheckboxGroup: fu,
  Checkbox: gu,
  Date: vu,
  ComponentForm: yu,
  FullEditor: _u,
  Header: ku,
  Hidden: $u,
  Number: Su,
  Paragraph: Mu,
  RadioGroup: Du,
  Select: wu,
  Switch: Bu,
  Text: Fu,
  TextArea: Ou,
  Time: xu,
  FormComponent: Ju
} = ti, {
  Banner: Nu,
  Box: Au,
  BreadcrumbsItem: Eu,
  Breadcrumbs: Tu,
  Card: Pu,
  Column: Lu,
  ColumnContainer: Iu,
  List: Wu,
  ListItem: Vu,
  ModalCard: zu,
  Panel: Uu,
  Table: Ru,
  Tabs: ju,
  TabsTab: Cu,
  Tile: Hu,
  Modal: Yu
} = Ti, { AVAIABLE_SKINS: qu, setSkin: Ku } = Ii, { ColorTypes: Gu, Sizes: Qu, AnimationSpeeds: Xu, AnimationTypes: Zu, IconSizes: ed, ChartLegendPositions: td, ChartTypes: ad } = zn;
export {
  qu as AVAIABLE_SKINS,
  zi as Animation,
  Xu as AnimationSpeeds,
  Zu as AnimationTypes,
  mu as AutoComplete,
  Nu as Banner,
  Au as Box,
  Tu as Breadcrumbs,
  Eu as BreadcrumbsItem,
  Ui as Button,
  Ri as ButtonAdd,
  ji as ButtonCancel,
  Ci as ButtonDelete,
  Hi as ButtonDisable,
  Yi as ButtonDownload,
  qi as ButtonEdit,
  Ki as ButtonEnable,
  Gi as ButtonOkay,
  Qi as ButtonPrint,
  Xi as ButtonRefresh,
  Zi as ButtonSave,
  eu as ButtonUpload,
  Pu as Card,
  tu as Chart,
  td as ChartLegendPositions,
  ad as ChartTypes,
  au as CheckMark,
  gu as Checkbox,
  fu as CheckboxGroup,
  Gu as ColorTypes,
  Lu as Column,
  Iu as ColumnContainer,
  yu as ComponentForm,
  vu as Date,
  pu as DraggableItem,
  hu as DropZone,
  su as DynamicSlot,
  lu as Filter,
  Ju as FormComponent,
  _u as FullEditor,
  ku as Header,
  $u as Hidden,
  nu as Icon,
  ed as IconSizes,
  Wu as List,
  Vu as ListItem,
  ou as Message,
  Yu as Modal,
  zu as ModalCard,
  ru as Notification,
  Su as Number,
  iu as PageNotification,
  uu as Pagination,
  Uu as Panel,
  Mu as Paragraph,
  cu as Progress,
  du as Promised,
  Du as RadioGroup,
  wu as Select,
  Qu as Sizes,
  bu as Sortable,
  Bu as Switch,
  Ru as Table,
  ju as Tabs,
  Cu as TabsTab,
  Fu as Text,
  Ou as TextArea,
  Hu as Tile,
  xu as Time,
  Ku as setSkin
};
//# sourceMappingURL=components.esm.js.map
