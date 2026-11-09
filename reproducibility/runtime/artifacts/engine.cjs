var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../../studio_src/node_modules/dicom-parser/dist/dicomParser.min.js
var require_dicomParser_min = __commonJS({
  "../../../../studio_src/node_modules/dicom-parser/dist/dicomParser.min.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = t(require("zlib")) : "function" == typeof define && define.amd ? define("dicom-parser", ["zlib"], t) : "object" == typeof exports2 ? exports2["dicom-parser"] = t(require("zlib")) : e.dicomParser = t(e.zlib);
    })(exports2, function(r) {
      return a = [function(e, t) {
        e.exports = r;
      }, function(e, t, s) {
        "use strict";
        s.r(t), s.d(t, "isStringVr", function() {
          return d;
        }), s.d(t, "isPrivateTag", function() {
          return f;
        }), s.d(t, "parsePN", function() {
          return a2;
        }), s.d(t, "parseTM", function() {
          return n2;
        }), s.d(t, "parseDA", function() {
          return o;
        }), s.d(t, "explicitElementToString", function() {
          return l;
        }), s.d(t, "explicitDataSetToJS", function() {
          return u;
        }), s.d(t, "createJPEGBasicOffsetTable", function() {
          return p;
        }), s.d(t, "parseDicomDataSetExplicit", function() {
          return q;
        }), s.d(t, "parseDicomDataSetImplicit", function() {
          return T;
        }), s.d(t, "readFixedString", function() {
          return b;
        }), s.d(t, "alloc", function() {
          return k;
        }), s.d(t, "version", function() {
          return L;
        }), s.d(t, "bigEndianByteArrayParser", function() {
          return N;
        }), s.d(t, "ByteStream", function() {
          return J;
        }), s.d(t, "sharedCopy", function() {
          return j;
        }), s.d(t, "DataSet", function() {
          return w;
        }), s.d(t, "findAndSetUNElementLength", function() {
          return y;
        }), s.d(t, "findEndOfEncapsulatedElement", function() {
          return g;
        }), s.d(t, "findItemDelimitationItemAndSetElementLength", function() {
          return x;
        }), s.d(t, "littleEndianByteArrayParser", function() {
          return M;
        }), s.d(t, "parseDicom", function() {
          return V;
        }), s.d(t, "readDicomElementExplicit", function() {
          return B;
        }), s.d(t, "readDicomElementImplicit", function() {
          return A;
        }), s.d(t, "readEncapsulatedImageFrame", function() {
          return W;
        }), s.d(t, "readEncapsulatedPixelData", function() {
          return K;
        }), s.d(t, "readEncapsulatedPixelDataFromFragments", function() {
          return _;
        }), s.d(t, "readPart10Header", function() {
          return G;
        }), s.d(t, "readSequenceItemsExplicit", function() {
          return I;
        }), s.d(t, "readSequenceItemsImplicit", function() {
          return F;
        }), s.d(t, "readSequenceItem", function() {
          return S;
        }), s.d(t, "readTag", function() {
          return h;
        });
        var r2 = { AE: true, AS: true, AT: false, CS: true, DA: true, DS: true, DT: true, FL: false, FD: false, IS: true, LO: true, LT: true, OB: false, OD: false, OF: false, OW: false, PN: true, SH: true, SL: false, SQ: false, SS: false, ST: true, TM: true, UI: true, UL: false, UN: void 0, UR: true, US: false, UT: true }, d = function(e2) {
          return r2[e2];
        }, f = function(e2) {
          e2 = parseInt(e2[4], 16);
          if (isNaN(e2)) throw "dicomParser.isPrivateTag: cannot parse last character of group";
          return e2 % 2 == 1;
        }, a2 = function(e2) {
          if (void 0 !== e2) {
            e2 = e2.split("^");
            return { familyName: e2[0], givenName: e2[1], middleName: e2[2], prefix: e2[3], suffix: e2[4] };
          }
        };
        function n2(e2, t2) {
          if (2 <= e2.length) {
            var r3 = parseInt(e2.substring(0, 2), 10), a3 = 4 <= e2.length ? parseInt(e2.substring(2, 4), 10) : void 0, n3 = 6 <= e2.length ? parseInt(e2.substring(4, 6), 10) : void 0, i3 = 8 <= e2.length ? e2.substring(7, 13) : void 0, i3 = i3 ? parseInt(i3, 10) * Math.pow(10, 6 - i3.length) : void 0;
            if (t2 && (isNaN(r3) || void 0 !== a3 && isNaN(a3) || void 0 !== n3 && isNaN(n3) || void 0 !== i3 && isNaN(i3) || r3 < 0 || 23 < r3 || a3 && (a3 < 0 || 59 < a3) || n3 && (n3 < 0 || 59 < n3) || i3 && (i3 < 0 || 999999 < i3))) throw "invalid TM '".concat(e2, "'");
            return { hours: r3, minutes: a3, seconds: n3, fractionalSeconds: i3 };
          }
          if (t2) throw "invalid TM '".concat(e2, "'");
        }
        function i2(e2, t2, r3) {
          return !isNaN(r3) && (0 < t2 && t2 <= 12 && 0 < e2 && e2 <= (function(e3, t3) {
            switch (e3) {
              case 2:
                return t3 % 4 == 0 && t3 % 100 || t3 % 400 == 0 ? 29 : 28;
              case 9:
              case 4:
              case 6:
              case 11:
                return 30;
              default:
                return 31;
            }
          })(t2, r3));
        }
        function o(e2, t2) {
          if (e2 && 8 === e2.length) {
            var r3 = parseInt(e2.substring(0, 4), 10), a3 = parseInt(e2.substring(4, 6), 10), n3 = parseInt(e2.substring(6, 8), 10);
            if (t2 && true !== i2(n3, a3, r3)) throw "invalid DA '".concat(e2, "'");
            return { year: r3, month: a3, day: n3 };
          }
          if (t2) throw "invalid DA '".concat(e2, "'");
        }
        function l(n3, e2) {
          if (void 0 === n3 || void 0 === e2) throw "dicomParser.explicitElementToString: missing required parameters";
          if (void 0 === e2.vr) throw "dicomParser.explicitElementToString: cannot convert implicit element to string";
          var t2, r3 = e2.vr, i3 = e2.tag;
          function a3(e3, t3) {
            for (var r4 = "", a4 = 0; a4 < e3; a4++) 0 !== a4 && (r4 += "/"), r4 += t3.call(n3, i3, a4).toString();
            return r4;
          }
          if (true === d(r3)) t2 = n3.string(i3);
          else {
            if ("AT" === r3) {
              var o2 = n3.uint32(i3);
              return void 0 === o2 ? void 0 : "x".concat((o2 = o2 < 0 ? 4294967295 + o2 + 1 : o2).toString(16).toUpperCase());
            }
            "US" === r3 ? t2 = a3(e2.length / 2, n3.uint16) : "SS" === r3 ? t2 = a3(e2.length / 2, n3.int16) : "UL" === r3 ? t2 = a3(e2.length / 4, n3.uint32) : "SL" === r3 ? t2 = a3(e2.length / 4, n3.int32) : "FD" === r3 ? t2 = a3(e2.length / 8, n3.double) : "FL" === r3 && (t2 = a3(e2.length / 4, n3.float));
          }
          return t2;
        }
        function u(e2, t2) {
          if (void 0 === e2) throw "dicomParser.explicitDataSetToJS: missing required parameter dataSet";
          t2 = t2 || { omitPrivateAttibutes: true, maxElementLength: 128 };
          var r3, a3 = {};
          for (r3 in e2.elements) {
            var n3 = e2.elements[r3];
            if (true !== t2.omitPrivateAttibutes || !f(r3)) if (n3.items) {
              for (var i3 = [], o2 = 0; o2 < n3.items.length; o2++) i3.push(u(n3.items[o2].dataSet, t2));
              a3[r3] = i3;
            } else {
              var s2 = void 0;
              n3.length < t2.maxElementLength && (s2 = l(e2, n3)), a3[r3] = void 0 !== s2 ? s2 : { dataOffset: n3.dataOffset, length: n3.length };
            }
          }
          return a3;
        }
        function c(e2, t2) {
          return 255 === e2.byteArray[t2] && 217 === e2.byteArray[t2 + 1];
        }
        function m(e2, t2, r3) {
          for (var a3, n3, i3 = r3; i3 < t2.fragments.length; i3++) if (a3 = e2, n3 = i3, n3 = t2.fragments[n3], !(!c(a3, n3.position + n3.length - 2) && !c(a3, n3.position + n3.length - 3))) return i3;
        }
        function p(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.createJPEGBasicOffsetTable: missing required parameter dataSet";
          if (void 0 === t2) throw "dicomParser.createJPEGBasicOffsetTable: missing required parameter pixelDataElement";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010'";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (t2.fragments.length <= 0) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 && r3.length <= 0) throw "dicomParser.createJPEGBasicOffsetTable: parameter 'fragments' must not be zero length";
          r3 = r3 || t2.fragments;
          for (var a3 = [], n3 = 0; ; ) {
            a3.push(t2.fragments[n3].offset);
            var i3 = m(e2, t2, n3);
            if (void 0 === i3 || i3 === t2.fragments.length - 1) return a3;
            n3 = i3 + 1;
          }
        }
        function h(e2) {
          if (void 0 === e2) throw "dicomParser.readTag: missing required parameter 'byteStream'";
          var t2 = 256 * e2.readUint16() * 256, e2 = e2.readUint16();
          return "x".concat("00000000".concat((t2 + e2).toString(16)).substr(-8));
        }
        function g(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.findEndOfEncapsulatedElement: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.findEndOfEncapsulatedElement: missing required parameter 'element'";
          if (t2.encapsulatedPixelData = true, t2.basicOffsetTable = [], t2.fragments = [], "xfffee000" !== h(e2)) throw "dicomParser.findEndOfEncapsulatedElement: basic offset table not found";
          for (var a3 = e2.readUint32() / 4, n3 = 0; n3 < a3; n3++) {
            var i3 = e2.readUint32();
            t2.basicOffsetTable.push(i3);
          }
          for (var o2 = e2.position; e2.position < e2.byteArray.length; ) {
            var s2 = h(e2), d2 = e2.readUint32();
            if ("xfffee0dd" === s2) return e2.seek(d2), void (t2.length = e2.position - t2.dataOffset);
            if ("xfffee000" !== s2) return r3 && r3.push("unexpected tag ".concat(s2, " while searching for end of pixel data element with undefined length")), d2 > e2.byteArray.length - e2.position && (d2 = e2.byteArray.length - e2.position), t2.fragments.push({ offset: e2.position - o2 - 8, position: e2.position, length: d2 }), e2.seek(d2), void (t2.length = e2.position - t2.dataOffset);
            t2.fragments.push({ offset: e2.position - o2 - 8, position: e2.position, length: d2 }), e2.seek(d2);
          }
          r3 && r3.push("pixel data element ".concat(t2.tag, " missing sequence delimiter tag xfffee0dd"));
        }
        function y(e2, t2) {
          if (void 0 === e2) throw "dicomParser.findAndSetUNElementLength: missing required parameter 'byteStream'";
          for (var r3 = e2.byteArray.length - 8; e2.position <= r3; ) if (65534 === e2.readUint16()) {
            var a3 = e2.readUint16();
            if (57565 === a3) return 0 !== e2.readUint32() && e2.warnings("encountered non zero length following item delimiter at position ".concat(e2.position - 4, " while reading element of undefined length with tag ").concat(t2.tag)), void (t2.length = e2.position - t2.dataOffset);
          }
          t2.length = e2.byteArray.length - t2.dataOffset, e2.seek(e2.byteArray.length - e2.position);
        }
        function b(e2, t2, r3) {
          if (r3 < 0) throw "dicomParser.readFixedString - length cannot be less than 0";
          if (t2 + r3 > e2.length) throw "dicomParser.readFixedString: attempt to read past end of buffer";
          for (var a3, n3 = "", i3 = 0; i3 < r3; i3++) {
            if (0 === (a3 = e2[t2 + i3])) return t2 += r3, n3;
            n3 += String.fromCharCode(a3);
          }
          return n3;
        }
        function v(e2, t2) {
          for (var r3 = 0; r3 < t2.length; r3++) {
            var a3 = t2[r3];
            a3.enumerable = a3.enumerable || false, a3.configurable = true, "value" in a3 && (a3.writable = true), Object.defineProperty(e2, a3.key, a3);
          }
        }
        function P(e2, t2) {
          return void 0 !== e2.parser ? e2.parser : t2;
        }
        var w = (function() {
          function a3(e3, t3, r4) {
            !(function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, a3), this.byteArrayParser = e3, this.byteArray = t3, this.elements = r4;
          }
          var e2, t2, r3;
          return e2 = a3, (t2 = [{ key: "uint16", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readUint16(this.byteArray, e3.dataOffset + 2 * t3);
          } }, { key: "int16", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readInt16(this.byteArray, e3.dataOffset + 2 * t3);
          } }, { key: "uint32", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readUint32(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "int32", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readInt32(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "float", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readFloat(this.byteArray, e3.dataOffset + 4 * t3);
          } }, { key: "double", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (t3 = void 0 !== t3 ? t3 : 0, e3 && 0 !== e3.length) return P(e3, this.byteArrayParser).readDouble(this.byteArray, e3.dataOffset + 8 * t3);
          } }, { key: "numStringValues", value: function(e3) {
            e3 = this.elements[e3];
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length).match(/\\/g);
              return null === e3 ? 1 : e3.length + 1;
            }
          } }, { key: "string", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (e3 && e3.Value) return e3.Value;
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length);
              return 0 <= t3 ? e3.split("\\")[t3].trim() : e3.trim();
            }
          } }, { key: "text", value: function(e3, t3) {
            e3 = this.elements[e3];
            if (e3 && 0 < e3.length) {
              e3 = b(this.byteArray, e3.dataOffset, e3.length);
              return 0 <= t3 ? e3.split("\\")[t3].replace(/ +$/, "") : e3.replace(/ +$/, "");
            }
          } }, { key: "floatString", value: function(e3, t3) {
            var r4 = this.elements[e3];
            if (r4 && 0 < r4.length) {
              t3 = this.string(e3, t3 = void 0 !== t3 ? t3 : 0);
              if (void 0 !== t3) return parseFloat(t3);
            }
          } }, { key: "intString", value: function(e3, t3) {
            var r4 = this.elements[e3];
            if (r4 && 0 < r4.length) {
              t3 = this.string(e3, t3 = void 0 !== t3 ? t3 : 0);
              if (void 0 !== t3) return parseInt(t3);
            }
          } }, { key: "attributeTag", value: function(e3) {
            var t3 = this.elements[e3];
            if (t3 && 4 === t3.length) {
              var r4 = P(t3, this.byteArrayParser).readUint16, e3 = this.byteArray, t3 = t3.dataOffset;
              return "x".concat("00000000".concat((256 * r4(e3, t3) * 256 + r4(e3, t3 + 2)).toString(16)).substr(-8));
            }
          } }]) && v(e2.prototype, t2), r3 && v(e2, r3), Object.defineProperty(e2, "prototype", { writable: false }), a3;
        })();
        function x(e2, t2) {
          if (void 0 === e2) throw "dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";
          for (var r3 = e2.byteArray.length - 8; e2.position <= r3; ) if (65534 === e2.readUint16()) {
            var a3 = e2.readUint16();
            if (57357 === a3) return 0 !== e2.readUint32() && e2.warnings("encountered non zero length following item delimiter at position ".concat(e2.position - 4, " while reading element of undefined length with tag ").concat(t2.tag)), void (t2.length = e2.position - t2.dataOffset);
          }
          t2.length = e2.byteArray.length - t2.dataOffset, e2.seek(e2.byteArray.length - e2.position);
        }
        var E = function(e2, t2) {
          if (void 0 !== e2.vr) return "SQ" === e2.vr;
          if (t2.position + 4 <= t2.byteArray.length) {
            e2 = h(t2);
            return t2.seek(-4), "xfffee000" === e2 || "xfffee0dd" === e2;
          }
          return t2.warnings.push("eof encountered before finding sequence item tag or sequence delimiter tag in peeking to determine VR"), false;
        };
        function A(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";
          var a3 = h(e2), a3 = { tag: a3, vr: void 0 !== r3 ? r3(a3) : void 0, length: e2.readUint32(), dataOffset: e2.position };
          return 4294967295 === a3.length && (a3.hadUndefinedLength = true), a3.tag === t2 || (!E(a3, e2) || f(a3.tag) && !a3.hadUndefinedLength ? a3.hadUndefinedLength ? x(e2, a3) : e2.seek(a3.length) : (F(e2, a3, r3), f(a3.tag) && (a3.items = void 0))), a3;
        }
        function S(e2) {
          if (void 0 === e2) throw "dicomParser.readSequenceItem: missing required parameter 'byteStream'";
          var t2 = { tag: h(e2), length: e2.readUint32(), dataOffset: e2.position };
          if ("xfffee000" !== t2.tag) throw "dicomParser.readSequenceItem: item tag (FFFE,E000) not found at offset ".concat(e2.position);
          return t2;
        }
        function D(e2, t2) {
          var r3 = S(e2);
          return 4294967295 === r3.length ? (r3.hadUndefinedLength = true, r3.dataSet = (function(e3, t3) {
            for (var r4 = {}; e3.position < e3.byteArray.length; ) {
              var a3 = A(e3, void 0, t3);
              if ("xfffee00d" === (r4[a3.tag] = a3).tag) return new w(e3.byteArrayParser, e3.byteArray, r4);
            }
            return e3.warnings.push("eof encountered before finding sequence item delimiter in sequence item of undefined length"), new w(e3.byteArrayParser, e3.byteArray, r4);
          })(e2, t2), r3.length = e2.position - r3.dataOffset) : (r3.dataSet = new w(e2.byteArrayParser, e2.byteArray, {}), T(r3.dataSet, e2, e2.position + r3.length, { vrCallback: t2 })), r3;
        }
        function F(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readSequenceItemsImplicit: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.readSequenceItemsImplicit: missing required parameter 'element'";
          t2.items = [], (4294967295 === t2.length ? function(e3, t3, r4) {
            for (; e3.position + 4 <= e3.byteArray.length; ) {
              var a3 = h(e3);
              if (e3.seek(-4), "xfffee0dd" === a3) return t3.length = e3.position - t3.dataOffset, e3.seek(8);
              a3 = D(e3, r4);
              t3.items.push(a3);
            }
            e3.warnings.push("eof encountered before finding sequence delimiter in sequence of undefined length"), t3.length = e3.byteArray.length - t3.dataOffset;
          } : function(e3, t3, r4) {
            for (var a3 = t3.dataOffset + t3.length; e3.position < a3; ) {
              var n3 = D(e3, r4);
              t3.items.push(n3);
            }
          })(e2, t2, r3);
        }
        function O(e2, t2) {
          var r3 = S(e2);
          return 4294967295 === r3.length ? (r3.hadUndefinedLength = true, r3.dataSet = (function(e3, t3) {
            for (var r4 = {}; e3.position < e3.byteArray.length; ) {
              var a3 = B(e3, t3);
              if ("xfffee00d" === (r4[a3.tag] = a3).tag) return new w(e3.byteArrayParser, e3.byteArray, r4);
            }
            return t3.push("eof encountered before finding item delimiter tag while reading sequence item of undefined length"), new w(e3.byteArrayParser, e3.byteArray, r4);
          })(e2, t2), r3.length = e2.position - r3.dataOffset) : (r3.dataSet = new w(e2.byteArrayParser, e2.byteArray, {}), q(r3.dataSet, e2, e2.position + r3.length)), r3;
        }
        function I(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readSequenceItemsExplicit: missing required parameter 'byteStream'";
          if (void 0 === t2) throw "dicomParser.readSequenceItemsExplicit: missing required parameter 'element'";
          t2.items = [], (4294967295 === t2.length ? function(e3, t3, r4) {
            for (; e3.position + 4 <= e3.byteArray.length; ) {
              var a3 = h(e3);
              if (e3.seek(-4), "xfffee0dd" === a3) return t3.length = e3.position - t3.dataOffset, e3.seek(8);
              a3 = O(e3, r4);
              t3.items.push(a3);
            }
            r4.push("eof encountered before finding sequence delimitation tag while reading sequence of undefined length"), t3.length = e3.position - t3.dataOffset;
          } : function(e3, t3, r4) {
            for (var a3 = t3.dataOffset + t3.length; e3.position < a3; ) {
              var n3 = O(e3, r4);
              t3.items.push(n3);
            }
          })(e2, t2, r3);
        }
        var U = function(e2) {
          return "OB" === e2 || "OD" === e2 || "OL" === e2 || "OW" === e2 || "SQ" === e2 || "OF" === e2 || "UC" === e2 || "UR" === e2 || "UT" === e2 || "UN" === e2 ? 4 : 2;
        };
        function B(e2, t2, r3) {
          if (void 0 === e2) throw "dicomParser.readDicomElementExplicit: missing required parameter 'byteStream'";
          var a3 = { tag: h(e2), vr: e2.readFixedString(2) };
          return 2 === U(a3.vr) ? a3.length = e2.readUint16() : (e2.seek(2), a3.length = e2.readUint32()), a3.dataOffset = e2.position, 4294967295 === a3.length && (a3.hadUndefinedLength = true), a3.tag === r3 || ("SQ" === a3.vr ? I(e2, a3, t2) : 4294967295 === a3.length ? "x7fe00010" === a3.tag ? g(e2, a3, t2) : ("UN" === a3.vr ? F : x)(e2, a3) : e2.seek(a3.length)), a3;
        }
        function q(e2, t2, r3) {
          var a3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          if (r3 = void 0 === r3 ? t2.byteArray.length : r3, void 0 === t2) throw "dicomParser.parseDicomDataSetExplicit: missing required parameter 'byteStream'";
          if (r3 < t2.position || r3 > t2.byteArray.length) throw "dicomParser.parseDicomDataSetExplicit: invalid value for parameter 'maxP osition'";
          for (var n3 = e2.elements; t2.position < r3; ) {
            var i3 = B(t2, e2.warnings, a3.untilTag);
            if ((n3[i3.tag] = i3).tag === a3.untilTag) return;
          }
          if (t2.position > r3) throw "dicomParser:parseDicomDataSetExplicit: buffer overrun";
        }
        function T(e2, t2, r3) {
          var a3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
          if (r3 = void 0 === r3 ? e2.byteArray.length : r3, void 0 === t2) throw "dicomParser.parseDicomDataSetImplicit: missing required parameter 'byteStream'";
          if (r3 < t2.position || r3 > t2.byteArray.length) throw "dicomParser.parseDicomDataSetImplicit: invalid value for parameter 'maxPosition'";
          for (var n3 = e2.elements; t2.position < r3; ) {
            var i3 = A(t2, a3.untilTag, a3.vrCallback);
            if ((n3[i3.tag] = i3).tag === a3.untilTag) return;
          }
        }
        function k(e2, t2) {
          if ("undefined" != typeof Buffer && e2 instanceof Buffer) return Buffer.alloc(t2);
          if (e2 instanceof Uint8Array) return new Uint8Array(t2);
          throw "dicomParser.alloc: unknown type for byteArray";
        }
        var L = "1.8.12", N = { readUint16: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readUint16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "bigEndianByteArrayParser.readUint16: attempt to read past end of buffer";
          return (e2[t2] << 8) + e2[t2 + 1];
        }, readInt16: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readInt16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "bigEndianByteArrayParser.readInt16: attempt to read past end of buffer";
          t2 = (e2[t2] << 8) + e2[t2 + 1];
          return t2 = 32768 & t2 ? t2 - 65535 - 1 : t2;
        }, readUint32: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readUint32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readUint32: attempt to read past end of buffer";
          return 256 * (256 * (256 * e2[t2] + e2[t2 + 1]) + e2[t2 + 2]) + e2[t2 + 3];
        }, readInt32: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readInt32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readInt32: attempt to read past end of buffer";
          return (e2[t2] << 24) + (e2[t2 + 1] << 16) + (e2[t2 + 2] << 8) + e2[t2 + 3];
        }, readFloat: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readFloat: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "bigEndianByteArrayParser.readFloat: attempt to read past end of buffer";
          var r3 = new Uint8Array(4);
          return r3[3] = e2[t2], r3[2] = e2[t2 + 1], r3[1] = e2[t2 + 2], r3[0] = e2[t2 + 3], new Float32Array(r3.buffer)[0];
        }, readDouble: function(e2, t2) {
          if (t2 < 0) throw "bigEndianByteArrayParser.readDouble: position cannot be less than 0";
          if (t2 + 8 > e2.length) throw "bigEndianByteArrayParser.readDouble: attempt to read past end of buffer";
          var r3 = new Uint8Array(8);
          return r3[7] = e2[t2], r3[6] = e2[t2 + 1], r3[5] = e2[t2 + 2], r3[4] = e2[t2 + 3], r3[3] = e2[t2 + 4], r3[2] = e2[t2 + 5], r3[1] = e2[t2 + 6], r3[0] = e2[t2 + 7], new Float64Array(r3.buffer)[0];
        } };
        function j(e2, t2, r3) {
          if ("undefined" != typeof Buffer && e2 instanceof Buffer) return e2.slice(t2, t2 + r3);
          if (e2 instanceof Uint8Array) return new Uint8Array(e2.buffer, e2.byteOffset + t2, r3);
          throw "dicomParser.from: unknown type for byteArray";
        }
        function C(e2, t2) {
          for (var r3 = 0; r3 < t2.length; r3++) {
            var a3 = t2[r3];
            a3.enumerable = a3.enumerable || false, a3.configurable = true, "value" in a3 && (a3.writable = true), Object.defineProperty(e2, a3.key, a3);
          }
        }
        var J = (function() {
          function a3(e3, t3, r4) {
            if (!(function(e4, t4) {
              if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
            })(this, a3), void 0 === e3) throw "dicomParser.ByteStream: missing required parameter 'byteArrayParser'";
            if (void 0 === t3) throw "dicomParser.ByteStream: missing required parameter 'byteArray'";
            if (t3 instanceof Uint8Array == false && ("undefined" == typeof Buffer || t3 instanceof Buffer == false)) throw "dicomParser.ByteStream: parameter byteArray is not of type Uint8Array or Buffer";
            if (r4 < 0) throw "dicomParser.ByteStream: parameter 'position' cannot be less than 0";
            if (r4 >= t3.length) throw "dicomParser.ByteStream: parameter 'position' cannot be greater than or equal to 'byteArray' length";
            this.byteArrayParser = e3, this.byteArray = t3, this.position = r4 || 0, this.warnings = [];
          }
          var e2, t2, r3;
          return e2 = a3, (t2 = [{ key: "seek", value: function(e3) {
            if (this.position + e3 < 0) throw "dicomParser.ByteStream.prototype.seek: cannot seek to position < 0";
            this.position += e3;
          } }, { key: "readByteStream", value: function(e3) {
            if (this.position + e3 > this.byteArray.length) throw "dicomParser.ByteStream.prototype.readByteStream: readByteStream - buffer overread";
            var t3 = j(this.byteArray, this.position, e3);
            return this.position += e3, new a3(this.byteArrayParser, t3);
          } }, { key: "getSize", value: function() {
            return this.byteArray.length;
          } }, { key: "readUint16", value: function() {
            var e3 = this.byteArrayParser.readUint16(this.byteArray, this.position);
            return this.position += 2, e3;
          } }, { key: "readUint32", value: function() {
            var e3 = this.byteArrayParser.readUint32(this.byteArray, this.position);
            return this.position += 4, e3;
          } }, { key: "readFixedString", value: function(e3) {
            var t3 = b(this.byteArray, this.position, e3);
            return this.position += e3, t3;
          } }]) && C(e2.prototype, t2), r3 && C(e2, r3), Object.defineProperty(e2, "prototype", { writable: false }), a3;
        })(), M = { readUint16: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readUint16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "littleEndianByteArrayParser.readUint16: attempt to read past end of buffer";
          return e2[t2] + 256 * e2[t2 + 1];
        }, readInt16: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readInt16: position cannot be less than 0";
          if (t2 + 2 > e2.length) throw "littleEndianByteArrayParser.readInt16: attempt to read past end of buffer";
          t2 = e2[t2] + (e2[t2 + 1] << 8);
          return t2 = 32768 & t2 ? t2 - 65535 - 1 : t2;
        }, readUint32: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readUint32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readUint32: attempt to read past end of buffer";
          return e2[t2] + 256 * e2[t2 + 1] + 256 * e2[t2 + 2] * 256 + 256 * e2[t2 + 3] * 256 * 256;
        }, readInt32: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readInt32: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readInt32: attempt to read past end of buffer";
          return e2[t2] + (e2[t2 + 1] << 8) + (e2[t2 + 2] << 16) + (e2[t2 + 3] << 24);
        }, readFloat: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readFloat: position cannot be less than 0";
          if (t2 + 4 > e2.length) throw "littleEndianByteArrayParser.readFloat: attempt to read past end of buffer";
          var r3 = new Uint8Array(4);
          return r3[0] = e2[t2], r3[1] = e2[t2 + 1], r3[2] = e2[t2 + 2], r3[3] = e2[t2 + 3], new Float32Array(r3.buffer)[0];
        }, readDouble: function(e2, t2) {
          if (t2 < 0) throw "littleEndianByteArrayParser.readDouble: position cannot be less than 0";
          if (t2 + 8 > e2.length) throw "littleEndianByteArrayParser.readDouble: attempt to read past end of buffer";
          var r3 = new Uint8Array(8);
          return r3[0] = e2[t2], r3[1] = e2[t2 + 1], r3[2] = e2[t2 + 2], r3[3] = e2[t2 + 3], r3[4] = e2[t2 + 4], r3[5] = e2[t2 + 5], r3[6] = e2[t2 + 6], r3[7] = e2[t2 + 7], new Float64Array(r3.buffer)[0];
        } };
        function G(e2) {
          var i3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 === e2) throw "dicomParser.readPart10Header: missing required parameter 'byteArray'";
          var o2 = i3.TransferSyntaxUID, s2 = new J(M, e2);
          return (function() {
            var e3 = (function() {
              if (s2.getSize() <= 132 && o2) return false;
              if (s2.seek(128), "DICM" === s2.readFixedString(4)) return true;
              if (!(i3 || {}).TransferSyntaxUID) throw "dicomParser.readPart10Header: DICM prefix not found at location 132 - this is not a valid DICOM P10 file.";
              return s2.seek(0), false;
            })(), t2 = [], r3 = {};
            if (!e3) return s2.position = 0, { elements: { x00020010: { tag: "x00020010", vr: "UI", Value: o2 } }, warnings: t2 };
            for (; s2.position < s2.byteArray.length; ) {
              var a3 = s2.position, n3 = B(s2, t2);
              if ("x0002ffff" < n3.tag) {
                s2.position = a3;
                break;
              }
              n3.parser = M, r3[n3.tag] = n3;
            }
            return (e3 = new w(s2.byteArrayParser, s2.byteArray, r3)).warnings = s2.warnings, e3.position = s2.position, e3;
          })();
        }
        var z = "1.2.840.10008.1.2.2";
        function V(i3) {
          var o2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (void 0 === i3) throw new Error("dicomParser.parseDicom: missing required parameter 'byteArray'");
          var e2, a3 = function(e3) {
            if (void 0 === e3.elements.x00020010) throw new Error("dicomParser.parseDicom: missing required meta header attribute 0002,0010");
            e3 = e3.elements.x00020010;
            return e3 && e3.Value || b(i3, e3.dataOffset, e3.length);
          };
          function t2(t3) {
            var e3 = a3(t3), r3 = "1.2.840.10008.1.2" !== e3, e3 = (function(e4, t4) {
              var r4 = "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0);
              if ("1.2.840.10008.1.2.1.99" !== e4) return new J(e4 === z ? N : M, i3, t4);
              if (o2 && o2.inflater) {
                e4 = o2.inflater(i3, t4);
                return new J(M, e4, 0);
              }
              if (true == r4) {
                var a4 = s(0), n3 = j(i3, t4, i3.length - t4), a4 = a4.inflateRawSync(n3), n3 = k(i3, a4.length + t4);
                return i3.copy(n3, 0, 0, t4), a4.copy(n3, t4), new J(M, n3, 0);
              }
              if ("undefined" == typeof pako) throw "dicomParser.parseDicom: no inflater available to handle deflate transfer syntax";
              return a4 = i3.slice(t4), n3 = pako.inflateRaw(a4), (a4 = k(i3, n3.length + t4)).set(i3.slice(0, t4), 0), a4.set(n3, t4), new J(M, a4, 0);
            })(e3, t3.position), t3 = new w(e3.byteArrayParser, e3.byteArray, {});
            t3.warnings = e3.warnings;
            try {
              (r3 ? q : T)(t3, e3, e3.byteArray.length, o2);
            } catch (e4) {
              throw { exception: e4, dataSet: t3 };
            }
            return t3;
          }
          return (function(e3, t3) {
            for (var r3 in e3.elements) e3.elements.hasOwnProperty(r3) && (t3.elements[r3] = e3.elements[r3]);
            return void 0 !== e3.warnings && (t3.warnings = e3.warnings.concat(t3.warnings)), t3;
          })(e2 = G(i3, o2), t2(e2));
        }
        var R = function(e2, t2, r3) {
          for (var a3 = 0, n3 = t2; n3 < t2 + r3; n3++) a3 += e2[n3].length;
          return a3;
        };
        function _(e2, t2, r3, a3, n3) {
          if (n3 = n3 || t2.fragments, void 0 === e2) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'pixelDataElement'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'startFragmentIndex'";
          if (void 0 === (a3 = a3 || 1)) throw "dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'numFragments'";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (t2.fragments.length <= 0) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 < 0) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be >= 0";
          if (r3 >= t2.fragments.length) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be < number of fragments";
          if (a3 < 1) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'numFragments' must be > 0";
          if (r3 + a3 > t2.fragments.length) throw "dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragment' + 'numFragments' < number of fragments";
          var i3 = new J(e2.byteArrayParser, e2.byteArray, t2.dataOffset), t2 = S(i3);
          if ("xfffee000" !== t2.tag) throw "dicomParser.readEncapsulatedPixelData: missing basic offset table xfffee000";
          i3.seek(t2.length);
          var o2 = i3.position;
          if (1 === a3) return j(i3.byteArray, o2 + n3[r3].offset + 8, n3[r3].length);
          for (var t2 = R(n3, r3, a3), s2 = k(i3.byteArray, t2), d2 = 0, f2 = r3; f2 < r3 + a3; f2++) for (var l2 = o2 + n3[f2].offset + 8, u2 = 0; u2 < n3[f2].length; u2++) s2[d2++] = i3.byteArray[l2++];
          return s2;
        }
        var H = function(e2, t2) {
          for (var r3 = 0; r3 < e2.length; r3++) if (e2[r3].offset === t2) return r3;
        }, Q = function(e2, t2, r3, a3) {
          if (e2 === t2.length - 1) return r3.length - a3;
          for (var n3 = t2[e2 + 1], i3 = a3 + 1; i3 < r3.length; i3++) if (r3[i3].offset === n3) return i3 - a3;
          throw "dicomParser.calculateNumberOfFragmentsForFrame: could not find fragment with offset matching basic offset table";
        };
        function W(e2, t2, r3, a3, n3) {
          if (a3 = a3 || t2.basicOffsetTable, n3 = n3 || t2.fragments, void 0 === e2) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'pixelDataElement'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedImageFrame: missing required parameter 'frameIndex'";
          if (void 0 === a3) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' does not have basicOffsetTable";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010)";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have undefined length";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have fragments";
          if (0 === a3.length) throw "dicomParser.readEncapsulatedImageFrame: basicOffsetTable has zero entries";
          if (r3 < 0) throw "dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be >= 0";
          if (r3 >= a3.length) throw "dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be < basicOffsetTable.length";
          var i3 = a3[r3], i3 = H(n3, i3);
          if (void 0 === i3) throw "dicomParser.readEncapsulatedImageFrame: unable to find fragment that matches basic offset table entry";
          return _(e2, t2, i3, Q(r3, a3, n3, i3), n3);
        }
        var $ = false;
        function K(e2, t2, r3) {
          if ($ || ($ = true, console && console.log && console.log("WARNING: dicomParser.readEncapsulatedPixelData() has been deprecated")), void 0 === e2) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'dataSet'";
          if (void 0 === t2) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'element'";
          if (void 0 === r3) throw "dicomParser.readEncapsulatedPixelData: missing required parameter 'frame'";
          if ("x7fe00010" !== t2.tag) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to non pixel data tag (expected tag = x7fe00010)";
          if (true !== t2.encapsulatedPixelData) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (true !== t2.hadUndefinedLength) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.basicOffsetTable) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (void 0 === t2.fragments) throw "dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";
          if (r3 < 0) throw "dicomParser.readEncapsulatedPixelData: parameter 'frame' must be >= 0";
          return 0 !== t2.basicOffsetTable.length ? W(e2, t2, r3) : _(e2, t2, 0, t2.fragments.length);
        }
        t.default = { isStringVr: d, isPrivateTag: f, parsePN: a2, parseTM: n2, parseDA: o, explicitElementToString: l, explicitDataSetToJS: u, createJPEGBasicOffsetTable: p, parseDicomDataSetExplicit: q, parseDicomDataSetImplicit: T, readFixedString: b, alloc: k, version: L, bigEndianByteArrayParser: N, ByteStream: J, sharedCopy: j, DataSet: w, findAndSetUNElementLength: y, findEndOfEncapsulatedElement: g, findItemDelimitationItemAndSetElementLength: x, littleEndianByteArrayParser: M, parseDicom: V, readDicomElementExplicit: B, readDicomElementImplicit: A, readEncapsulatedImageFrame: W, readEncapsulatedPixelData: K, readEncapsulatedPixelDataFromFragments: _, readPart10Header: G, readSequenceItemsExplicit: I, readSequenceItemsImplicit: F, readSequenceItem: S, readTag: h, LEI: "1.2.840.10008.1.2", LEE: "1.2.840.10008.1.2.1" };
      }], i = {}, n.m = a, n.c = i, n.d = function(e, t, r2) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: r2 });
      }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
      }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r2 = /* @__PURE__ */ Object.create(null);
        if (n.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t) for (var a2 in t) n.d(r2, a2, function(e2) {
          return t[e2];
        }.bind(null, a2));
        return r2;
      }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return n.d(t, "a", t), t;
      }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, n.p = "", n(n.s = 1);
      function n(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = { i: e, l: false, exports: {} };
        return a[e].call(t.exports, t, t.exports, n), t.l = true, t.exports;
      }
      var a, i;
    });
  }
});

// portable/src/engine.js
var engine_exports = {};
__export(engine_exports, {
  K_RANGE_MESSAGE: () => K_RANGE_MESSAGE,
  LABELS: () => LABELS,
  MRC_REQUIRED_MESSAGE: () => MRC_REQUIRED_MESSAGE,
  NO_NEGATIVE_MESSAGE: () => NO_NEGATIVE_MESSAGE,
  applyIntersection: () => applyIntersection,
  compatible: () => compatible,
  createImages: () => createImages,
  createImagesGiven: () => createImagesGiven,
  createImagesPpiMrc: () => createImagesPpiMrc,
  createImagesPpiPei: () => createImagesPpiPei,
  decodePixels: () => decodePixels,
  dicomHeader: () => dicomHeader,
  dot: () => dot,
  idx: () => idx,
  intersectContours: () => intersectContours,
  loadDicom: () => loadDicom,
  loadNifti: () => loadNifti,
  localize: () => localize,
  niftiBytes: () => niftiBytes,
  norm: () => norm,
  otsu: () => otsu,
  polygon: () => polygon,
  quantify: () => quantify,
  renderOblique: () => renderOblique,
  renderOrtho: () => renderOrtho,
  renderPixels: () => renderPixels,
  sample: () => sample,
  segment: () => segment,
  sha256: () => sha256,
  spacing: () => spacing,
  strFromU8: () => strFromU8,
  strToU8: () => strToU8,
  undoEdit: () => undoEdit,
  unzipSync: () => unzipSync,
  validK: () => validK,
  windows: () => windows,
  world: () => world,
  zipSync: () => zipSync
});
module.exports = __toCommonJS(engine_exports);
var import_dicom_parser = __toESM(require_dicomParser_min());

// portable/src/jpeg-lossless.js
function decodeLossless(bytes) {
  let p = 2, width = 0, height = 0, precision = 0, restart = 0, table = null, predictor = 0, point = 0;
  const tables = /* @__PURE__ */ new Map();
  const u162 = (i) => bytes[i] << 8 | bytes[i + 1];
  if (bytes[0] !== 255 || bytes[1] !== 216) throw Error("JPEG SOI\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
  while (p < bytes.length) {
    if (bytes[p++] !== 255) throw Error("JPEG\u30DE\u30FC\u30AB\u30FC\u304C\u4E0D\u6B63\u3067\u3059\u3002");
    while (bytes[p] === 255) p++;
    const marker = bytes[p++];
    if (marker === 217) throw Error("JPEG\u306E\u753B\u50CF\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
    const length = u162(p), start = p + 2, end = p + length;
    if (length < 2 || end > bytes.length) throw Error("JPEG\u30BB\u30B0\u30E1\u30F3\u30C8\u304C\u9014\u4E2D\u3067\u5207\u308C\u3066\u3044\u307E\u3059\u3002");
    if (marker === 195) {
      precision = bytes[start];
      height = u162(start + 1);
      width = u162(start + 3);
      if (bytes[start + 5] !== 1 || bytes[start + 7] !== 17 || precision < 2 || precision > 16) throw Error("\u5358\u4E00\u6210\u5206\u30FB16bit\u4EE5\u4E0B\u306EJPEG Lossless\u306E\u307F\u5BFE\u5FDC\u3057\u307E\u3059\u3002");
    } else if (marker === 196) {
      let q = start;
      while (q < end) {
        const id = bytes[q++], counts = Array.from(bytes.subarray(q, q + 16));
        q += 16;
        const count = counts.reduce((a, b) => a + b, 0);
        if (q + count > end) throw Error("JPEG Huffman\u8868\u304C\u4E0D\u6B63\u3067\u3059\u3002");
        const values = Array.from(bytes.subarray(q, q + count));
        q += count;
        let code = 0, k = 0;
        const codes = Array.from({ length: 17 }, () => /* @__PURE__ */ new Map());
        for (let bits3 = 1; bits3 <= 16; bits3++) {
          for (let n = 0; n < counts[bits3 - 1]; n++) codes[bits3].set(code++, values[k++]);
          code <<= 1;
        }
        tables.set(id, codes);
      }
    } else if (marker === 221) {
      restart = u162(start);
    } else if (marker === 218) {
      if (bytes[start] !== 1) throw Error("JPEG\u306E\u8907\u6570\u6210\u5206\u30B9\u30AD\u30E3\u30F3\u306F\u672A\u5BFE\u5FDC\u3067\u3059\u3002");
      table = tables.get(bytes[start + 2] >> 4);
      predictor = bytes[start + 3];
      point = bytes[start + 5] & 15;
      p = end;
      break;
    } else if (marker >= 192 && marker <= 207 && ![196, 200, 204].includes(marker)) throw Error("SOF3\u4EE5\u5916\u306EJPEG\u306B\u306F\u672A\u5BFE\u5FDC\u3067\u3059\u3002");
    p = end;
  }
  if (!table || !width || !height || predictor < 1 || predictor > 7 || point >= precision || width * height > 4e7) throw Error("JPEG Lossless\u30D8\u30C3\u30C0\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  let bits2 = 0, value = 0;
  const bit = () => {
    if (!bits2) {
      if (p >= bytes.length) throw Error("JPEG\u753B\u7D20\u30C7\u30FC\u30BF\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002");
      value = bytes[p++];
      if (value === 255) {
        if (bytes[p++] !== 0) throw Error("JPEG\u753B\u7D20\u30C7\u30FC\u30BF\u306B\u4E88\u671F\u3057\u306A\u3044\u30DE\u30FC\u30AB\u30FC\u304C\u3042\u308A\u307E\u3059\u3002");
      }
      bits2 = 8;
    }
    return value >> --bits2 & 1;
  };
  const category = () => {
    let code = 0;
    for (let b = 1; b <= 16; b++) {
      code = code << 1 | bit();
      if (table[b].has(code)) return table[b].get(code);
    }
    throw Error("JPEG Huffman\u30B3\u30FC\u30C9\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  };
  const effective = precision - point, mask = (1 << effective) - 1, initial = 1 << effective - 1, raw = new Uint16Array(width * height);
  let restartNumber = 0;
  for (let n = 0; n < raw.length; n++) {
    const reset = n === 0 || restart > 0 && n % restart === 0;
    if (reset && n > 0) {
      bits2 = 0;
      if (bytes[p++] !== 255) throw Error("JPEG restart\u30DE\u30FC\u30AB\u30FC\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
      while (bytes[p] === 255) p++;
      if (bytes[p++] !== 208 + restartNumber++ % 8) throw Error("JPEG restart\u756A\u53F7\u304C\u4E0D\u6B63\u3067\u3059\u3002");
    }
    let pred = initial;
    if (!reset) {
      const x = n % width, y = Math.floor(n / width), a = x ? raw[n - 1] : 0, b = y ? raw[n - width] : 0, c = x && y ? raw[n - width - 1] : 0;
      if (!y) pred = a;
      else if (!x) pred = b;
      else pred = [0, a, b, c, a + b - c, a + (b - c >> 1), b + (a - c >> 1), a + b >> 1][predictor];
    }
    const size = category();
    if (size > 16) throw Error("JPEG\u5DEE\u5206\u306E\u30D3\u30C3\u30C8\u9577\u304C\u4E0D\u6B63\u3067\u3059\u3002");
    let diff = 0;
    if (size === 16) diff = -32768;
    else if (size) {
      for (let b = 0; b < size; b++) diff = diff << 1 | bit();
      if (diff < 1 << size - 1) diff -= (1 << size) - 1;
    }
    raw[n] = pred + diff & mask;
  }
  while (bytes[p] === 255 && bytes[p + 1] === 255) p++;
  if (bytes[p] !== 255 || bytes[p + 1] !== 217) throw Error("JPEG EOI\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4F59\u5206\u306A\u753B\u50CF\u30C7\u30FC\u30BF\u307E\u305F\u306F\u4E0D\u5B8C\u5168\u306A\u30D5\u30A1\u30A4\u30EB\u3067\u3059\u3002");
  if (point) for (let i = 0; i < raw.length; i++) raw[i] <<= point;
  return { data: raw, width, height };
}

// ../../../../studio_src/node_modules/fflate/esm/index.mjs
var import_module = require("module");
var require2 = (0, import_module.createRequire)("/");
var _a;
var Worker;
var isMarkedAsUntransferable;
try {
  _a = require2("worker_threads"), Worker = _a.Worker, isMarkedAsUntransferable = _a.isMarkedAsUntransferable;
} catch (e) {
}
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ (function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
})();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr2 = c;
      for (var i = 0; i < d.length; ++i)
        cr2 = crct[cr2 & 255 ^ d[i]] ^ cr2 >>> 8;
      c = cr2;
    },
    d: function() {
      return ~c;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
var gzs = function(d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8)
    err(6, "invalid gzip data");
  var flg = d[3];
  var st = 10;
  if (flg & 4)
    st += (d[10] | d[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function gunzipSync(data, opts) {
  var st = gzs(data);
  if (st + 8 > data.length)
    err(6, "invalid gzip data");
  return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k, op = o;
    if (Array.isArray(val))
      op = mrg(o, val[1]), val = val[0];
    if (ArrayBuffer.isView(val))
      t[n] = [val, op];
    else {
      t[n += "/"] = [new u8(0), op];
      fltn(val, n, t, o);
    }
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = b4(data, e - 20) == 117853008;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// portable/src/lumen/sampling.js
var inv3 = (a) => {
  const [[a0, a1, a2], [b0, b1, b22], [c0, c1, c2]] = [a[0], a[1], a[2]].map((r) => r.slice(0, 3));
  const A = b1 * c2 - b22 * c1, B = -(b0 * c2 - b22 * c0), C = b0 * c1 - b1 * c0;
  const det = a0 * A + a1 * B + a2 * C;
  return [[A, -(a1 * c2 - a2 * c1), a1 * b22 - a2 * b1], [B, a0 * c2 - a2 * c0, -(a0 * b22 - a2 * b0)], [C, -(a0 * c1 - a1 * c0), a0 * b1 - a1 * b0]].map((r) => r.map((v) => v / det));
};
var cr = (t, w) => {
  const t2 = t * t, t3 = t2 * t;
  w[0] = -0.5 * t3 + t2 - 0.5 * t;
  w[1] = 1.5 * t3 - 2.5 * t2 + 1;
  w[2] = -1.5 * t3 + 2 * t2 + 0.5 * t;
  w[3] = 0.5 * t3 - 0.5 * t2;
};
function makeSampler(data, shape, affine) {
  const [nx, ny, nz] = shape, m = inv3(affine), t = [affine[0][3], affine[1][3], affine[2][3]];
  const toVox = (p, i, o) => {
    const x = p[i] - t[0], y = p[i + 1] - t[1], z = p[i + 2] - t[2];
    o[0] = m[0][0] * x + m[0][1] * y + m[0][2] * z;
    o[1] = m[1][0] * x + m[1][1] * y + m[1][2] * z;
    o[2] = m[2][0] * x + m[2][1] * y + m[2][2] * z;
  };
  const cl = (v2, n) => v2 < 0 ? 0 : v2 > n - 1 ? n - 1 : v2;
  const wx = new Float64Array(4), wy = new Float64Array(4), wz = new Float64Array(4), v = [0, 0, 0];
  const ix = new Int32Array(4), iy = new Int32Array(4);
  return {
    sample(points) {
      const out = new Float32Array(points.length / 3);
      for (let k = 0; k < out.length; k++) {
        toVox(points, 3 * k, v);
        const x = Math.min(Math.max(v[0], 0), nx - 1), y = Math.min(Math.max(v[1], 0), ny - 1), z = Math.min(Math.max(v[2], 0), nz - 1);
        const x0 = Math.floor(x), y0 = Math.floor(y), z0 = Math.floor(z);
        cr(x - x0, wx);
        cr(y - y0, wy);
        cr(z - z0, wz);
        for (let a = 0; a < 4; a++) {
          ix[a] = cl(x0 - 1 + a, nx);
          iy[a] = cl(y0 - 1 + a, ny) * nx;
        }
        let s = 0;
        for (let c = 0; c < 4; c++) {
          const zo = cl(z0 - 1 + c, nz) * nx * ny;
          let sy = 0;
          for (let b = 0; b < 4; b++) {
            const yo = zo + iy[b];
            let sx = 0;
            for (let a = 0; a < 4; a++) sx += wx[a] * data[yo + ix[a]];
            sy += wy[b] * sx;
          }
          s += wz[c] * sy;
        }
        out[k] = s;
      }
      return out;
    },
    nearest(points) {
      const out = new Float32Array(points.length / 3);
      for (let k = 0; k < out.length; k++) {
        toVox(points, 3 * k, v);
        const x = Math.round(v[0]), y = Math.round(v[1]), z = Math.round(v[2]);
        out[k] = x < 0 || y < 0 || z < 0 || x >= nx || y >= ny || z >= nz ? 0 : data[x + nx * (y + ny * z)];
      }
      return out;
    }
  };
}

// portable/src/engine.js
var LABELS = { 1: "\u53F3\u8778\u725B", 2: "\u53F3\u524D\u5EAD", 3: "\u5DE6\u8778\u725B", 4: "\u5DE6\u524D\u5EAD" };
var MAX_VOXELS = 4e7;
var dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
var cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var norm = (a) => Math.hypot(...a);
var idx = (x, y, z, s) => x + s[0] * (y + s[1] * z);
var spacing = (v) => [0, 1, 2].map((i) => Math.hypot(v.affine[0][i], v.affine[1][i], v.affine[2][i]));
var world = (v, p) => [0, 1, 2].map((i) => dot(v.affine[i].slice(0, 3), p) + v.affine[i][3]);
async function sha256(data) {
  return [...new Uint8Array(await crypto.subtle.digest("SHA-256", data))].map((v) => v.toString(16).padStart(2, "0")).join("");
}
var close = (a, b, tol = 0.01) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) <= tol);
function finite(data) {
  for (const x of data) if (!Number.isFinite(x)) throw Error("\u753B\u50CF\u306BNaN\u30FBInf\u304C\u542B\u307E\u308C\u307E\u3059\u3002");
}
function canonical(v) {
  const n = v.shape.reduce((a, b) => a * b, 1);
  if (n > MAX_VOXELS || v.shape.some((x) => x < 1)) throw Error("4,000\u4E07\u30DC\u30AF\u30BB\u30EB\u4EE5\u4E0B\u306E3D\u753B\u50CF\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  const axes = [0, 1, 2].map((j) => [0, 1, 2].map((i) => v.affine[i][j]));
  const sp = axes.map(norm);
  if (sp.some((x) => !Number.isFinite(x) || x <= 0)) throw Error("\u753B\u7D20\u9593\u9694\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  const directions = axes.map((a, j) => a.map((x) => x / sp[j]));
  if (Math.abs(dot(directions[0], directions[1])) > 1e-4 || Math.abs(dot(directions[0], directions[2])) > 1e-4 || Math.abs(dot(directions[1], directions[2])) > 1e-4) throw Error("\u305B\u3093\u65AD\u3092\u542B\u3080\u753B\u50CF\u306B\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002");
  const mapping = [0, 1, 2].map((i) => directions.map((a) => Math.abs(a[i])).indexOf(Math.max(...directions.map((a) => Math.abs(a[i])))));
  if (new Set(mapping).size !== 3) throw Error("\u753B\u50CF\u306E\u65B9\u5411\u3092\u4E00\u610F\u306B\u5224\u65AD\u3067\u304D\u307E\u305B\u3093\u3002");
  const signs = mapping.map((j, i) => Math.sign(v.affine[i][j]));
  const shape = mapping.map((j) => v.shape[j]);
  const affine = Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_2, j) => i === j ? 1 : 0));
  for (let i = 0; i < 3; i++) {
    affine[i][3] = v.affine[i][3];
    for (let a = 0; a < 3; a++) {
      affine[i][a] = v.affine[i][mapping[a]] * signs[a];
      if (signs[a] < 0) affine[i][3] += v.affine[i][mapping[a]] * (v.shape[mapping[a]] - 1);
    }
  }
  if (mapping.every((j, i) => j === i) && signs.every((s) => s > 0)) return { ...v, affine };
  const data = new Float32Array(n);
  for (let z = 0; z < shape[2]; z++) for (let y = 0; y < shape[1]; y++) for (let x = 0; x < shape[0]; x++) {
    const p = [x, y, z], q = [0, 0, 0];
    for (let a = 0; a < 3; a++) q[mapping[a]] = signs[a] > 0 ? p[a] : shape[a] - 1 - p[a];
    data[idx(x, y, z, shape)] = v.data[idx(...q, v.shape)];
  }
  return { ...v, data, shape, affine };
}
function dicomHeader(bytes, headerOnly = false) {
  const ds = import_dicom_parser.default.parseDicom(bytes, headerOnly ? { untilTag: "x7fe00010" } : {});
  const nums = (tag) => (ds.string(tag) || "").split("\\").map(Number);
  const text = (tag) => (ds.string(tag) || "").trim();
  return {
    ds,
    uid: text("x0020000e"),
    study: text("x0020000d"),
    patient: text("x00100020"),
    frame: text("x00200052"),
    description: text("x0008103e"),
    series_number: Number(text("x00200011")) || 0,
    tr: Number(text("x00180080")) || null,
    te: Number(text("x00180081")) || null,
    ti: Number(text("x00180082")) || 0,
    orientation: nums("x00200037"),
    position: nums("x00200032"),
    pixelSpacing: nums("x00280030"),
    rows: ds.uint16("x00280010"),
    cols: ds.uint16("x00280011"),
    bits: ds.uint16("x00280100"),
    stored: ds.uint16("x00280101"),
    high: ds.uint16("x00280102"),
    signed: ds.uint16("x00280103") === 1,
    transfer: text("x00020010"),
    frames: Number(text("x00280008") || 1),
    slope: Number(text("x00281053") || 1),
    intercept: Number(text("x00281052") || 0),
    hasIntercept: text("x00281052") !== "",
    modality: text("x00080060"),
    photo: text("x00280004"),
    samples: ds.uint16("x00280002"),
    thickness: Number(text("x00180088") || text("x00180050"))
  };
}
function decodePixels(h) {
  if (h.frames !== 1 || h.ds.elements.x52009230) throw Error("Enhanced / multi-frame DICOM\u306F\u672A\u5BFE\u5FDC\u3067\u3059\u3002\u5358\u4E00\u30D5\u30EC\u30FC\u30E0\u306E\u30B7\u30EA\u30FC\u30BA\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  if (h.modality !== "MR" || h.photo !== "MONOCHROME2" || h.samples !== 1) throw Error("MONOCHROME2\u306EMR\u753B\u50CF\u306E\u307F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002");
  if (h.bits !== 16 || h.high !== h.stored - 1 || h.stored < 1 || h.stored > 16) throw Error("16bit\u6574\u6570\u306EDICOM\u753B\u50CF\u306E\u307F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002");
  if (h.ds.elements.x00409096 || h.ds.elements.x00283000) throw Error("\u7279\u6B8A\u306A\u4FE1\u53F7\u5024\u5909\u63DB\u3092\u542B\u3080DICOM\u306F\u672A\u5BFE\u5FDC\u3067\u3059\u3002");
  if (!Number.isFinite(h.slope) || h.slope <= 0 || !Number.isFinite(h.intercept)) throw Error("\u4FE1\u53F7\u5024\u306ERescaleSlope/Intercept\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  const element = h.ds.elements.x7fe00010;
  if (!element) throw Error("DICOM\u306B\u753B\u7D20\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
  let view, little = true;
  if (["1.2.840.10008.1.2.4.57", "1.2.840.10008.1.2.4.70"].includes(h.transfer)) {
    const jpeg = import_dicom_parser.default.readEncapsulatedImageFrame(h.ds, element, 0);
    const decoded = decodeLossless(jpeg);
    if (decoded.width !== h.cols || decoded.height !== h.rows) throw Error("JPEG\u3068DICOM\u306E\u753B\u50CF\u30B5\u30A4\u30BA\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002");
    view = new DataView(decoded.data.buffer);
  } else if (["1.2.840.10008.1.2", "1.2.840.10008.1.2.1", "1.2.840.10008.1.2.2"].includes(h.transfer)) {
    view = new DataView(h.ds.byteArray.buffer, h.ds.byteArray.byteOffset + element.dataOffset, element.length);
    little = h.transfer !== "1.2.840.10008.1.2.2";
  } else throw Error(`\u3053\u306EDICOM\u5727\u7E2E\u65B9\u5F0F\u306B\u306F\u672A\u5BFE\u5FDC\u3067\u3059\uFF08${h.transfer}\uFF09\u3002\u975E\u5727\u7E2E\u307E\u305F\u306FJPEG Lossless\u3067\u66F8\u304D\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002`);
  const n = h.rows * h.cols;
  if (view.byteLength < n * 2) throw Error("DICOM\u753B\u7D20\u30C7\u30FC\u30BF\u304C\u9014\u4E2D\u3067\u5207\u308C\u3066\u3044\u307E\u3059\u3002");
  const out = new Float32Array(n), mask = (1 << h.stored) - 1, sign = 1 << h.stored - 1;
  for (let i = 0; i < n; i++) {
    let value = view.getUint16(i * 2, little) & mask;
    if (h.signed && value & sign) value -= 1 << h.stored;
    out[i] = value * h.slope + h.intercept;
  }
  return out;
}
async function loadDicom(files, progress = () => {
}) {
  const headers = [];
  for (let i = 0; i < files.length; i++) {
    const bytes = new Uint8Array(await files[i].arrayBuffer());
    const h = dicomHeader(bytes);
    h.pixels = decodePixels(h);
    delete h.ds;
    headers.push(h);
    if (i % 20 === 0) progress(`DICOM\u3092\u5C55\u958B\u4E2D ${i + 1}/${files.length}`);
  }
  if (!headers.length) throw Error("DICOM\u753B\u50CF\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
  const first = headers[0];
  if (!first.uid || !first.study || !first.frame || first.orientation.length !== 6 || first.position.length !== 3 || first.pixelSpacing.length !== 2) throw Error("DICOM\u306E\u4F4D\u7F6E\u60C5\u5831\u30FB\u8B58\u5225\u60C5\u5831\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002");
  const normal = cross(first.orientation.slice(0, 3), first.orientation.slice(3));
  headers.sort((a, b) => dot(a.position, normal) - dot(b.position, normal));
  for (const h of headers) {
    if (h.uid !== first.uid || h.study !== first.study || h.frame !== first.frame || h.patient !== first.patient) throw Error("\u30B7\u30EA\u30FC\u30BA\u30FB\u691C\u67FB\u30FB\u60A3\u8005\u304C\u6DF7\u5728\u3057\u3066\u3044\u307E\u3059\u3002");
    if (h.rows !== first.rows || h.cols !== first.cols || !close(h.orientation, first.orientation, 1e-5) || !close(h.pixelSpacing, first.pixelSpacing, 1e-5)) throw Error("DICOM\u30B9\u30E9\u30A4\u30B9\u9593\u3067\u5F62\u72B6\u307E\u305F\u306F\u65B9\u5411\u304C\u7570\u306A\u308A\u307E\u3059\u3002");
  }
  let dz = first.thickness;
  if (headers.length > 1) {
    dz = dot(headers[1].position.map((v, i) => v - headers[0].position[i]), normal);
    for (let i = 1; i < headers.length; i++) if (!close(headers[i].position.map((v, j) => v - headers[i - 1].position[j]), normal.map((v) => v * dz))) throw Error("DICOM\u306E\u30B9\u30E9\u30A4\u30B9\u306B\u91CD\u8907\u30FB\u6B20\u640D\u30FB\u4E0D\u7B49\u9593\u9694\u304C\u3042\u308A\u307E\u3059\u3002");
  }
  if (!Number.isFinite(dz) || dz <= 0 || first.pixelSpacing.some((x) => x <= 0)) throw Error("DICOM\u306E\u753B\u7D20\u30FB\u30B9\u30E9\u30A4\u30B9\u9593\u9694\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  const shape = [first.cols, first.rows, headers.length], n = shape.reduce((a, b) => a * b, 1);
  if (n > MAX_VOXELS) throw Error("\u6700\u59274,000\u4E07\u30DC\u30AF\u30BB\u30EB\u3067\u3059\u3002");
  const data = new Float32Array(n);
  headers.forEach((h, z) => data.set(h.pixels, z * first.cols * first.rows));
  const affine = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]];
  for (let i = 0; i < 3; i++) {
    const sign = i < 2 ? -1 : 1;
    affine[i] = [first.orientation[i] * first.pixelSpacing[1] * sign, first.orientation[i + 3] * first.pixelSpacing[0] * sign, normal[i] * dz * sign, headers[0].position[i] * sign];
  }
  const result = canonical({ data, shape, affine, meta: { format: "DICOM", ti: first.ti, description: first.description, series_number: first.series_number, tr: first.tr, te: first.te, rescale_intercept: headers.every((h) => h.hasIntercept && h.intercept === first.intercept) ? first.intercept : null, identity: { study: first.study, frame: first.frame, patient: first.patient } } });
  finite(result.data);
  return result;
}
function loadNifti(raw) {
  const bytes = raw[0] === 31 && raw[1] === 139 ? gunzipSync(raw) : raw;
  if (bytes.byteLength > 512 * 1024 ** 2) throw Error("\u5C55\u958B\u5F8C\u306E\u30D5\u30A1\u30A4\u30EB\u4E0A\u9650\u306F512MB\u3067\u3059\u3002");
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), le = dv.getInt32(0, true) === 348;
  if (dv.getInt32(0, le) !== 348 || dv.getInt16(40, le) !== 3) throw Error("3D NIfTI-1\u306E\u307F\u5BFE\u5FDC\u3057\u307E\u3059\u3002");
  const shape = [0, 1, 2].map((i) => dv.getInt16(42 + i * 2, le));
  const count = shape.reduce((a, b) => a * b, 1);
  if (shape.some((x) => x < 1) || count > MAX_VOXELS) throw Error("NIfTI\u753B\u50CF\u30B5\u30A4\u30BA\u304C\u4E0A\u9650\u3092\u8D85\u3048\u307E\u3059\u3002");
  if ((dv.getUint8(123) & 7) !== 2) throw Error("NIfTI\u306E\u7A7A\u9593\u5358\u4F4D\u306Fmm\u304C\u5FC5\u8981\u3067\u3059\u3002");
  if (dv.getInt16(254, le) <= 0) throw Error("\u30D6\u30E9\u30A6\u30B6\u7248\u306Fsform\u4ED8\u304DNIfTI\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002sform\u3092\u8A2D\u5B9A\u3057\u3066\u66F8\u304D\u51FA\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  const affine = Array.from({ length: 3 }, (_, i) => Array.from({ length: 4 }, (_2, j) => dv.getFloat32(280 + i * 16 + j * 4, le)));
  affine.push([0, 0, 0, 1]);
  if (dv.getInt16(252, le) > 0) {
    let b = dv.getFloat32(256, le), c = dv.getFloat32(260, le), d = dv.getFloat32(264, le), a2 = 1 - b * b - c * c - d * d;
    if (a2 < -1e-4) throw Error("NIfTI qform\u306E\u56DE\u8EE2\u60C5\u5831\u304C\u4E0D\u6B63\u3067\u3059\u3002");
    if (a2 < 0) {
      const length = Math.hypot(b, c, d);
      b /= length;
      c /= length;
      d /= length;
      a2 = 0;
    }
    const a = Math.sqrt(a2), rotation2 = [[a * a + b * b - c * c - d * d, 2 * (b * c - a * d), 2 * (b * d + a * c)], [2 * (b * c + a * d), a * a + c * c - b * b - d * d, 2 * (c * d - a * b)], [2 * (b * d - a * c), 2 * (c * d + a * b), a * a + d * d - c * c - b * b]];
    const sp = [0, 1, 2].map((i) => dv.getFloat32(80 + i * 4, le));
    sp[2] *= dv.getFloat32(76, le) < 0 ? -1 : 1;
    const q = rotation2.map((row, i) => [...row.map((v, j) => v * sp[j]), dv.getFloat32(268 + i * 4, le)]);
    q.push([0, 0, 0, 1]);
    if (!close(q.flat(), affine.flat(), 0.01)) throw Error("NIfTI\u306Esform\u3068qform\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002");
  }
  const offset = Math.round(dv.getFloat32(108, le)), dtype = dv.getInt16(70, le), slope = dv.getFloat32(112, le) || 1, intercept = dv.getFloat32(112, le) ? dv.getFloat32(116, le) : 0;
  const formats = { 2: [1, "getUint8"], 4: [2, "getInt16"], 8: [4, "getInt32"], 16: [4, "getFloat32"], 64: [8, "getFloat64"], 256: [1, "getInt8"], 512: [2, "getUint16"], 768: [4, "getUint32"] };
  if (!formats[dtype]) throw Error("\u672A\u5BFE\u5FDC\u306ENIfTI\u30C7\u30FC\u30BF\u578B\u3067\u3059\u3002");
  const [size, get] = formats[dtype];
  if (offset < 352 || offset + count * size > bytes.byteLength) throw Error("NIfTI\u753B\u7D20\u30C7\u30FC\u30BF\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002");
  const data = new Float32Array(count);
  for (let i = 0; i < count; i++) data[i] = dv[get](offset + i * size, le) * slope + intercept;
  finite(data);
  finite(affine.flat());
  return canonical({ data, shape, affine, meta: { format: "NIfTI" } });
}
function niftiBytes(data, shape, affine, mask = false) {
  const bytes = new Uint8Array(352 + data.length * (mask ? 1 : 4)), dv = new DataView(bytes.buffer);
  dv.setInt32(0, 348, true);
  dv.setInt16(40, 3, true);
  shape.forEach((x, i) => dv.setInt16(42 + i * 2, x, true));
  dv.setInt16(70, mask ? 2 : 16, true);
  dv.setInt16(72, mask ? 8 : 32, true);
  dv.setFloat32(76, 1, true);
  spacing({ affine }).forEach((x, i) => dv.setFloat32(80 + i * 4, x, true));
  dv.setFloat32(108, 352, true);
  dv.setFloat32(112, 1, true);
  dv.setUint8(123, 2);
  dv.setInt16(254, 1, true);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) dv.setFloat32(280 + i * 16 + j * 4, affine[i][j], true);
  bytes.set([110, 43, 49, 0], 344);
  if (mask) bytes.set(data, 352);
  else new Float32Array(bytes.buffer, 352).set(data);
  return bytes;
}
function compatible(a, b) {
  if (!close(a.shape, b.shape, 0) || !close(a.affine.flat(), b.affine.flat(), 0.01)) throw Error("\u753B\u50CF\u306E\u5F62\u72B6\u30FB\u4F4D\u7F6E\u30FB\u65B9\u5411\u30FB\u753B\u7D20\u9593\u9694\u304C\u4E00\u81F4\u3057\u307E\u305B\u3093\u3002\u4E8B\u524D\u306B\u4F4D\u7F6E\u5408\u308F\u305B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  if (a.meta?.identity && b.meta?.identity) {
    for (const k of ["study", "frame", "patient"]) if (a.meta.identity[k] !== b.meta.identity[k]) throw Error("\u7570\u306A\u308B\u691C\u67FB\u30FB\u60A3\u8005\u30FB\u5EA7\u6A19\u7CFB\u306EDICOM\u3092\u7D44\u307F\u5408\u308F\u305B\u3067\u304D\u307E\u305B\u3093\u3002");
  }
}
function createImagesPpiPei(ppi, pei, mrc) {
  compatible(ppi, pei);
  if (mrc) compatible(ppi, mrc);
  const h = new Float32Array(ppi.data.length), mi2 = mrc ? new Float32Array(h.length) : null;
  let changed = false;
  for (let i = 0; i < h.length; i++) {
    h[i] = ppi.data[i] - pei.data[i];
    if (h[i] !== 0) changed = true;
    if (mrc) {
      if (mrc.data[i] < 0) throw Error("MRC\u304C\u8CA0\u306E\u5024\u3092\u542B\u307F\u307E\u3059\u3002Mi2\u306E\u7B26\u53F7\u53CD\u8EE2\u3092\u9632\u3050\u305F\u3081\u51E6\u7406\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002");
      mi2[i] = h[i] * mrc.data[i];
    }
    if (!Number.isFinite(h[i]) || mi2 && !Number.isFinite(mi2[i])) throw Error("\u753B\u50CF\u6F14\u7B97\u306E\u6570\u5024\u7BC4\u56F2\u3092\u8D85\u3048\u307E\u3057\u305F\u3002");
  }
  if (!changed) throw Error("PPI\u3068PEI\u306E\u753B\u7D20\u304C\u540C\u4E00\u3067\u3059\u3002\u5165\u529B\u30B7\u30EA\u30FC\u30BA\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  return { ppi: ppi.data, pei: pei.data, hydrops: h, ...mrc ? { mrc: mrc.data, mi2 } : {} };
}
var createImages = createImagesPpiPei;
var MRC_REQUIRED_MESSAGE = "\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F MRC \u304C\u5FC5\u8981\u3067\u3059\u3002";
var K_RANGE_MESSAGE = "k \u306F 0.010\u301C0.100 \u306E\u7BC4\u56F2\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
var NO_NEGATIVE_MESSAGE = "\u8CA0\u306E\u753B\u7D20\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u7B26\u53F7\u3064\u304D\u306E\u753B\u50CF\uFF08\u8CA0 = \u5185\u30EA\u30F3\u30D1\uFF09\u3092\u9078\u3076\u304B\u3001\u7B26\u53F7\u306E\u53CD\u8EE2\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002";
var validK = (k) => typeof k === "number" && Number.isFinite(k) && k >= 0.01 - 1e-12 && k <= 0.1 + 1e-12;
function createImagesPpiMrc(ppi, mrc, k) {
  if (!mrc) throw Error(MRC_REQUIRED_MESSAGE);
  if (!validK(k)) throw Error(K_RANGE_MESSAGE);
  compatible(ppi, mrc);
  const n = ppi.data.length, h = new Float32Array(n), mi2 = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const m = mrc.data[i];
    if (m < 0) throw Error("MRC\u304C\u8CA0\u306E\u5024\u3092\u542B\u307F\u307E\u3059\u3002Mi2\u306E\u7B26\u53F7\u53CD\u8EE2\u3092\u9632\u3050\u305F\u3081\u51E6\u7406\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002");
    h[i] = ppi.data[i] - k * m;
    mi2[i] = h[i] * m;
    if (!Number.isFinite(h[i]) || !Number.isFinite(mi2[i])) throw Error("\u753B\u50CF\u6F14\u7B97\u306E\u6570\u5024\u7BC4\u56F2\u3092\u8D85\u3048\u307E\u3057\u305F\u3002");
  }
  return { ppi: ppi.data, mrc: mrc.data, hydrops: h, mi2 };
}
function createImagesGiven(given, mrc, flip) {
  if (!mrc) throw Error(MRC_REQUIRED_MESSAGE);
  compatible(given, mrc);
  const n = given.data.length, h = new Float32Array(n), mi2 = new Float32Array(n);
  let negative = false;
  for (let i = 0; i < n; i++) {
    const m = mrc.data[i];
    if (m < 0) throw Error("MRC\u304C\u8CA0\u306E\u5024\u3092\u542B\u307F\u307E\u3059\u3002Mi2\u306E\u7B26\u53F7\u53CD\u8EE2\u3092\u9632\u3050\u305F\u3081\u51E6\u7406\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002");
    h[i] = flip ? 0 - given.data[i] : given.data[i];
    if (h[i] < 0) negative = true;
    mi2[i] = h[i] * m;
    if (!Number.isFinite(h[i]) || !Number.isFinite(mi2[i])) throw Error("\u753B\u50CF\u6F14\u7B97\u306E\u6570\u5024\u7BC4\u56F2\u3092\u8D85\u3048\u307E\u3057\u305F\u3002");
  }
  if (!negative) throw Error(NO_NEGATIVE_MESSAGE);
  return { mrc: mrc.data, hydrops: h, mi2 };
}
function sample(data, s, x, y, z) {
  if (x < 0 || y < 0 || z < 0 || x >= s[0] - 1 || y >= s[1] - 1 || z >= s[2] - 1) return 0;
  const a = Math.floor(x), b = Math.floor(y), c = Math.floor(z), dx = x - a, dy = y - b, dz = z - c, p = idx(a, b, c, s), sy = s[0], sz = s[0] * s[1];
  return ((data[p] * (1 - dx) + data[p + 1] * dx) * (1 - dy) + (data[p + sy] * (1 - dx) + data[p + sy + 1] * dx) * dy) * (1 - dz) + ((data[p + sz] * (1 - dx) + data[p + sz + 1] * dx) * (1 - dy) + (data[p + sz + sy] * (1 - dx) + data[p + sz + sy + 1] * dx) * dy) * dz;
}
function scoreAt(vol, center, template) {
  const { offsets, values, energy } = template, s = vol.shape, d = vol.data;
  let sum = 0, sq = 0, num = 0;
  for (let i = 0; i < values.length; i++) {
    const off = offsets[i];
    const v = sample(d, s, center[0] + off[0], center[1] + off[1], center[2] + off[2]);
    sum += v;
    sq += v * v;
    num += values[i] * v;
  }
  return num / Math.sqrt(Math.max(1e-9, (sq - sum * sum / values.length) * energy));
}
function rotation(p) {
  const [a, b, c] = p.slice(3).map((v) => v * Math.PI / 180), ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b), cc = Math.cos(c), sc = Math.sin(c);
  return [[cc * cb, cc * sb * sa - sc * ca, cc * sb * ca + sc * sa], [sc * cb, sc * sb * sa + cc * ca, sc * sb * ca - cc * sa], [-sb, cb * sa, cb * ca]];
}
var rotate = (r, p) => r.map((row) => dot(row, p));
function globalRegistration(vol, source) {
  const sp = spacing(vol), center = vol.shape.map((v) => (v - 1) / 2), mean = source.global.values.reduce((a, b) => a + b, 0) / source.global.values.length;
  const values = source.global.values.map((v) => v - mean), energy = values.reduce((s, v) => s + v * v, 0);
  const evaluate = (p) => {
    const r = rotation(p), offsets = source.global.offsets.map((v) => rotate(r, v).map((v2, i) => v2 / sp[i]));
    return scoreAt(vol, center.map((v, i) => v + p[i] / sp[i]), { values, energy, offsets });
  };
  let params = [0, 0, 0, 0, 0, 0], score = evaluate(params);
  for (const step of [8, 4, 2, 1, 0.5]) for (let pass = 0; pass < 5; pass++) {
    let improved = false;
    for (let axis = 0; axis < 6; axis++) {
      let best = score, bestParams = params;
      for (const sign of [-1, 1]) {
        const p = params.slice();
        p[axis] += step * sign;
        if (Math.abs(p[axis]) > (axis < 3 ? 30 : 20)) continue;
        const value = evaluate(p);
        if (value > best) {
          best = value;
          bestParams = p;
        }
      }
      if (best > score + 1e-6) {
        params = bestParams;
        score = best;
        improved = true;
      }
    }
    if (!improved) break;
  }
  return { params, score, rotation: rotation(params) };
}
async function localize(vol, atlases, progress = () => {
}) {
  const fp = await sha256(vol.data.buffer), sources = atlases.filter((a) => a.fingerprint !== fp), sp = spacing(vol);
  if (!sources.length) throw Error("\u5BFE\u8C61\u81EA\u8EAB\u3092\u9664\u304F\u53C2\u7167\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u3042\u308A\u307E\u305B\u3093\u3002");
  const estimates = { R: [], L: [] };
  for (let a = 0; a < sources.length; a++) {
    progress(`\u81EA\u52D5\u5C40\u5728 ${a + 1}/${sources.length}\uFF1A\u982D\u90E8\u5F62\u72B6\u3092\u4F4D\u7F6E\u5408\u308F\u305B`);
    const registration = globalRegistration(vol, sources[a]);
    for (const ear of sources[a].ears) {
      progress(`\u81EA\u52D5\u5C40\u5728 ${a + 1}/${sources.length}\uFF1A${ear.side === "R" ? "\u53F3" : "\u5DE6"}\u5185\u8033\u3092\u691C\u7D22`);
      const mean = ear.values.reduce((a2, b) => a2 + b, 0) / ear.values.length, values = ear.values.map((v) => v - mean);
      const template = { offsets: ear.offsets.map((p) => rotate(registration.rotation, p).map((v, i) => v / sp[i])), values, energy: values.reduce((s, v) => s + v * v, 0) };
      let best = { score: -Infinity, center: null };
      const transformed = rotate(registration.rotation, ear.center_offset), origin = vol.shape.map((v, i) => (v - 1) / 2 + (transformed[i] + registration.params[i]) / sp[i]);
      for (let z = -6; z <= 6; z += 2) for (let y = -6; y <= 6; y += 2) for (let x = -6; x <= 6; x += 2) {
        const c = origin.map((v, i) => v + [x, y, z][i] / sp[i]), score = scoreAt(vol, c, template);
        if (score > best.score) best = { score, center: c };
      }
      for (const [radius, step] of [[3, 1], [1, 0.5]]) {
        const base = best.center.slice();
        for (let z = -radius; z <= radius; z += step) for (let y = -radius; y <= radius; y += step) for (let x = -radius; x <= radius; x += step) {
          const c = base.map((v, i) => v + [x, y, z][i] / sp[i]), score = scoreAt(vol, c, template);
          if (score > best.score) best = { score, center: c };
        }
      }
      estimates[ear.side].push({ ...best, correction_mm: best.center.map((v, i) => (v - origin[i]) * sp[i]), seed_offsets: Object.fromEntries(Object.entries(ear.seed_offsets).map(([k, p]) => [k, rotate(registration.rotation, p)])), source: sources[a].fingerprint, global_correlation: registration.score });
    }
    const r = estimates.R.at(-1), l = estimates.L.at(-1), disagreement = norm(r.correction_mm.map((v, i) => v - l.correction_mm[i]));
    r.pair_disagreement_mm = disagreement;
    l.pair_disagreement_mm = disagreement;
  }
  const seeds = {}, sourcesInfo = [];
  let dispersion = 0;
  const warnings = ["\u81EA\u52D5\u62BD\u51FA\u306F\u672A\u691C\u8A3C\u3067\u3059\u3002IAC\u30FB\u8133\u810A\u9AC4\u6DB2\u30FB\u534A\u898F\u7BA1\u306E\u6DF7\u5165\u3092\u753B\u50CF\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"];
  for (const side of ["R", "L"]) {
    const all = estimates[side].sort((a, b) => b.score - 0.025 * b.pair_disagreement_mm - (a.score - 0.025 * a.pair_disagreement_mm)), best = all[0];
    if (best.score < 0.15) throw Error("\u5185\u8033\u306E\u4F4D\u7F6E\u3092\u5341\u5206\u306A\u985E\u4F3C\u5EA6\u3067\u691C\u51FA\u3067\u304D\u307E\u305B\u3093\u3002\u4E2D\u5FC3\u70B9\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
    const selected = all.filter((e) => norm(e.center.map((v, i) => (v - best.center[i]) * sp[i])) < 6), weight = selected.reduce((s, e) => s + Math.max(e.score, 0.01), 0);
    for (const key of side === "R" ? [1, 2] : [3, 4]) {
      seeds[key] = [0, 1, 2].map((i) => selected.reduce((s, e) => s + (e.center[i] + e.seed_offsets[key][i] / sp[i]) * Math.max(e.score, 0.01), 0) / weight);
      for (const e of all) dispersion = Math.max(dispersion, norm(seeds[key].map((v, i) => (v - e.center[i]) * sp[i] - e.seed_offsets[key][i])));
    }
    for (const e of all) sourcesInfo.push({ side, template_sha256: e.source, local_correlation: e.score, global_correlation: e.global_correlation, center_voxel: e.center, pair_disagreement_mm: e.pair_disagreement_mm });
    if (best.score < 0.45) warnings.push(`${side === "R" ? "\u53F3" : "\u5DE6"}\u5185\u8033\uFF1A\u53C2\u7167\u3068\u306E\u985E\u4F3C\u5EA6\u304C\u4F4E\u304F\u3001\u4F4D\u7F6E\u306E\u78BA\u8A8D\u304C\u5FC5\u8981\u3067\u3059\u3002`);
  }
  if (dispersion > 3) warnings.push(`\u53C2\u7167\u9593\u306E\u4F4D\u7F6E\u306E\u3070\u3089\u3064\u304D ${dispersion.toFixed(1)} mm\u3002\u4E2D\u5FC3\u70B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002`);
  if (world(vol, seeds[1])[0] <= world(vol, seeds[3])[0]) throw Error("\u5DE6\u53F3\u306E\u81EA\u52D5\u5C40\u5728\u306B\u4E0D\u6574\u5408\u304C\u3042\u308A\u307E\u3059\u3002");
  return { seeds, info: { method: "browser_sparse_3d_template_ncc_v1", target_excluded: true, sources: sourcesInfo, dispersion_mm: dispersion, warnings } };
}
function otsu(values) {
  let min = Infinity, max2 = -Infinity;
  for (const v of values) {
    min = Math.min(min, v);
    max2 = Math.max(max2, v);
  }
  if (max2 <= min) return min;
  const hist = new Uint32Array(256);
  for (const v of values) hist[Math.min(255, Math.floor((v - min) / (max2 - min) * 256))]++;
  let total = 0;
  for (let i = 0; i < 256; i++) total += i * hist[i];
  let sum = 0, n = 0, best = -1, bin = 0;
  for (let i = 0; i < 255; i++) {
    n += hist[i];
    sum += hist[i] * i;
    if (!n || n === values.length) continue;
    const delta = sum / n - (total - sum) / (values.length - n), score = n * (values.length - n) * delta * delta;
    if (score > best) {
      best = score;
      bin = i;
    }
  }
  return min + (bin + 0.5) * (max2 - min) / 256;
}
function grow(vol, seed, radius) {
  const sp = spacing(vol), s = vol.shape, r = sp.map((v) => Math.ceil(radius / v)), lo = seed.map((v, i) => Math.max(0, v - r[i])), hi = seed.map((v, i) => Math.min(s[i] - 1, v + r[i]));
  const points = [], values = [];
  for (let z = lo[2]; z <= hi[2]; z++) for (let y = lo[1]; y <= hi[1]; y++) for (let x = lo[0]; x <= hi[0]; x++) if (((x - seed[0]) * sp[0]) ** 2 + ((y - seed[1]) * sp[1]) ** 2 + ((z - seed[2]) * sp[2]) ** 2 <= radius * radius) {
    const p = idx(x, y, z, s);
    points.push(p);
    values.push(vol.data[p]);
  }
  const threshold = otsu(values), allowed = new Set(points.filter((p, i) => values[i] > threshold));
  let start = idx(...seed, s);
  if (!allowed.has(start)) {
    let dist = Infinity;
    for (const p of allowed) {
      const z = Math.floor(p / (s[0] * s[1])), y = Math.floor(p / s[0]) % s[1], x = p % s[0], d = ((x - seed[0]) * sp[0]) ** 2 + ((y - seed[1]) * sp[1]) ** 2 + ((z - seed[2]) * sp[2]) ** 2;
      if (d < dist) {
        dist = d;
        start = p;
      }
    }
  }
  const found = /* @__PURE__ */ new Set(), queue = [];
  if (allowed.has(start)) {
    found.add(start);
    queue.push(start);
  }
  const delta = [-1, 1, -s[0], s[0], -s[0] * s[1], s[0] * s[1]];
  for (let q = 0; q < queue.length; q++) for (let j = 0; j < delta.length; j++) {
    const current = queue[q], axis = j >> 1, coordinate = axis === 0 ? current % s[0] : axis === 1 ? Math.floor(current / s[0]) % s[1] : Math.floor(current / (s[0] * s[1]));
    if (j % 2 === 0 ? coordinate === 0 : coordinate === s[axis] - 1) continue;
    const p = current + delta[j];
    if (allowed.has(p) && !found.has(p)) {
      found.add(p);
      queue.push(p);
    }
  }
  return { points: found, threshold };
}
var Heap = class {
  constructor() {
    this.a = [];
  }
  push(item) {
    const a = this.a;
    a.push(item);
    let i = a.length - 1;
    while (i > 0) {
      const p = i - 1 >> 1;
      if (a[p][0] <= item[0]) break;
      a[i] = a[p];
      i = p;
    }
    a[i] = item;
  }
  pop() {
    const a = this.a, top = a[0], last = a.pop();
    if (a.length) {
      let i = 0;
      while (i * 2 + 1 < a.length) {
        let j = i * 2 + 1;
        if (j + 1 < a.length && a[j + 1][0] < a[j][0]) j++;
        if (a[j][0] >= last[0]) break;
        a[i] = a[j];
        i = j;
      }
      a[i] = last;
    }
    return top;
  }
};
function segment(vol, inputSeeds) {
  const s = vol.shape, sp = spacing(vol), seeds = {}, masks = {}, stats = {};
  for (const key of [1, 2, 3, 4]) {
    if (!inputSeeds[key] || inputSeeds[key].some((v, i) => !Number.isFinite(v) || v < 0 || v >= s[i])) throw Error("4\u90E8\u4F4D\u306E\u4E2D\u5FC3\u70B9\u3092\u753B\u50CF\u5185\u306B\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
    const c = inputSeeds[key].map(Math.round);
    let best = -Infinity, p = c.slice();
    const r = sp.map((v) => Math.max(1, Math.floor(1 / v)));
    for (let z = Math.max(0, c[2] - r[2]); z <= Math.min(s[2] - 1, c[2] + r[2]); z++) for (let y = Math.max(0, c[1] - r[1]); y <= Math.min(s[1] - 1, c[1] + r[1]); y++) for (let x = Math.max(0, c[0] - r[0]); x <= Math.min(s[0] - 1, c[0] + r[0]); x++) {
      const value = vol.data[idx(x, y, z, s)];
      if (value > best) {
        best = value;
        p = [x, y, z];
      }
    }
    seeds[key] = p;
    const grown = grow(vol, p, key % 2 ? 6.5 : 5.5);
    masks[key] = grown.points;
    stats[key] = { mrc_otsu_threshold: grown.threshold, radius_mm: key % 2 ? 6.5 : 5.5 };
  }
  const labels = new Uint8Array(vol.data.length), middle = [1, 2, 3, 4].reduce((sum, k) => sum + world(vol, seeds[k])[0], 0) / 4;
  const xyz = (p) => [p % s[0], Math.floor(p / s[0]) % s[1], Math.floor(p / (s[0] * s[1]))];
  const neighbors = [];
  for (let z = -1; z <= 1; z++) for (let y = -1; y <= 1; y++) for (let x = -1; x <= 1; x++) if (x || y || z) neighbors.push([x, y, z, norm([x * sp[0], y * sp[1], z * sp[2]])]);
  for (const pair of [[1, 2], [3, 4]]) {
    const union = /* @__PURE__ */ new Set([...masks[pair[0]], ...masks[pair[1]]]), dist = /* @__PURE__ */ new Map(), heap = new Heap();
    for (const key of pair) {
      let p = idx(...seeds[key], s);
      if (!union.has(p)) {
        let best = Infinity;
        for (const q of union) {
          const d = norm(xyz(q).map((v, i) => (v - seeds[key][i]) * sp[i]));
          if (d < best) {
            best = d;
            p = q;
          }
        }
      }
      if (union.has(p)) {
        dist.set(p, 0);
        labels[p] = key;
        heap.push([0, p, key]);
      }
    }
    while (heap.a.length) {
      const [d, p, key] = heap.pop();
      if (d > dist.get(p)) continue;
      const [x, y, z] = xyz(p);
      for (const [a, b, c, w] of neighbors) {
        if (x + a < 0 || x + a >= s[0] || y + b < 0 || y + b >= s[1] || z + c < 0 || z + c >= s[2]) continue;
        const q = idx(x + a, y + b, z + c, s);
        if (union.has(q) && (dist.get(q) ?? Infinity) > d + w) {
          dist.set(q, d + w);
          labels[q] = key;
          heap.push([d + w, q, key]);
        }
      }
    }
    const coch = pair[0], sx = world(vol, seeds[coch])[0], sign = middle >= sx ? 1 : -1;
    for (const p of union) if (labels[p] === coch && (world(vol, xyz(p))[0] - sx) * sign > 4) labels[p] = 0;
  }
  return { labels, seeds, stats };
}
function quantify(c) {
  const s = c.shape, sp = c.spacing, voxel = sp[0] * sp[1] * sp[2], area = sp[0] * sp[1], sliceSize = s[0] * s[1], rows = [];
  for (const image of ["hydrops", "mi2"]) {
    if (!c.images[image]) continue;
    const data = c.images[image], counts = Array.from({ length: 5 }, () => Array.from({ length: s[2] }, () => [0, 0, 0, 0]));
    for (let p = 0; p < c.labels.length; p++) {
      const k = c.labels[p];
      if (!k) continue;
      const z = Math.floor(p / sliceSize), v = counts[k][z];
      v[0]++;
      if (data[p] < 0) v[1]++;
      if (z > 0 && data[p - sliceSize] < 0) v[2]++;
      if (z < s[2] - 1 && data[p + sliceSize] < 0) v[3]++;
    }
    for (const key of [1, 2, 3, 4]) {
      const slices = counts[key].map((v, z) => ({ slice: z, v })).filter((x) => x.v[0]), totals = [0, 0, 0, 0];
      slices.forEach((x) => x.v.forEach((v, i) => totals[i] += v));
      const [n, e, a, b] = totals;
      const flags = [];
      if (!n) flags.push("ROI_EMPTY");
      else if (!e) flags.push("NO_NEGATIVE_VOXELS");
      if (n && e / n > 0.75) flags.push("HIGH_NEGATIVE_RATIO_CHECK_CSF");
      rows.push({
        label: key,
        region: LABELS[key],
        image,
        fluid_voxels: n,
        negative_voxels: e,
        fluid_mm3: n * voxel,
        negative_mm3: e * voxel,
        ratio_percent: n ? 100 * e / n : null,
        z_minus1_percent: n && slices[0].slice > 0 ? 100 * a / n : null,
        z_plus1_percent: n && slices.at(-1).slice < s[2] - 1 ? 100 * b / n : null,
        slices_with_roi: slices.length,
        flags,
        per_slice: slices.map(({ slice, v }) => ({ slice, fluid_mm2: v[0] * area, negative_mm2: v[1] * area, ratio_percent: 100 * v[1] / v[0] }))
      });
    }
  }
  return rows.sort((a, b) => a.label - b.label || a.image.localeCompare(b.image));
}
function windows(images) {
  const out = {};
  for (const [k, data] of Object.entries(images)) {
    const values = [];
    for (let i = 0; i < data.length; i += 47) values.push(["mi2", "hydrops"].includes(k) ? Math.abs(data[i]) : data[i]);
    values.sort((a, b) => a - b);
    const max2 = Math.max(1, values[Math.floor(values.length * 0.995)] || 1);
    out[k] = ["mi2", "hydrops"].includes(k) ? [-max2, max2] : [0, max2];
  }
  return out;
}
function renderPixels(c, kind, z, overlay = true, contrast = 1, roiOpacity = 0.42) {
  const [w, h] = c.shape, data = c.images[kind], bounds = c.windows[kind], center = (bounds[0] + bounds[1]) / 2, width = (bounds[1] - bounds[0]) / contrast;
  const pixels = new Uint8ClampedArray(w * h * 4), base = z * w * h;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = base + idx(w - 1 - x, h - 1 - y, 0, c.shape), o = (x + y * w) * 4, g = Math.max(0, Math.min(255, (data[p] - center + width / 2) / width * 255));
    let color = [g, g, g];
    const label = c.labels[p];
    if (overlay && label) {
      const a = Number.isFinite(roiOpacity) ? Math.max(0, Math.min(1, roiOpacity)) : 0.42;
      const roi = c.images.hydrops[p] < 0 ? [255, 76, 104] : label % 2 ? [68, 155, 255] : [73, 212, 157];
      color = color.map((v, i) => v * (1 - a) + roi[i] * a);
    }
    pixels.set([...color, 255], o);
  }
  return pixels;
}
function renderOblique(c, payload) {
  const bad = () => {
    throw Error("oblique \u306E\u5165\u529B\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  };
  if (!payload || typeof payload !== "object") bad();
  const { kind, center, u, v, w, size_mm: size, step_mm: step, mode, label, roiOpacity } = payload;
  const vec3 = (a) => Array.isArray(a) && a.length === 3 && a.every(Number.isFinite);
  if (!vec3(center) || !vec3(u) || !vec3(v) || !vec3(w)) bad();
  if (!Number.isFinite(step) || !(step > 0) || !(step >= 0.05) || !Number.isFinite(size) || !(size > 0) || !(size <= 40)) bad();
  if (mode !== "plane" && mode !== "slab") bad();
  if (typeof kind !== "string" || !Object.prototype.hasOwnProperty.call(c.images, kind) || !ArrayBuffer.isView(c.images[kind])) bad();
  if (![1, 2, 3, 4].includes(label)) bad();
  let depths;
  if (mode === "plane") {
    if (!Number.isFinite(payload.depth_mm)) bad();
    depths = [payload.depth_mm];
  } else {
    const s = payload.slab;
    if (!s || typeof s !== "object") bad();
    const { from_mm: from, to_mm: to, step_mm: ds } = s;
    if (![from, to, ds].every(Number.isFinite) || !(ds > 0) || !(to >= from)) bad();
    const m = Math.floor((to - from) / ds + 1e-9) + 1;
    if (!(m <= 200)) bad();
    depths = Array.from({ length: m }, (_, i) => from + i * ds);
  }
  const n = Math.round(size / step) + 1, nn = n * n, [nx, ny, nz] = c.shape, M = inv3(c.affine), T = [c.affine[0][3], c.affine[1][3], c.affine[2][3]];
  const image = makeSampler(c.images[kind], c.shape, c.affine), hydrops = kind === "hydrops" ? image : makeSampler(c.images.hydrops, c.shape, c.affine), labels = makeSampler(c.labels, c.shape, c.affine);
  const points = new Float64Array(3 * nn), inside = new Uint8Array(nn);
  const plane = (h) => {
    for (let y = 0; y < n; y++) {
      const b = size / 2 - y * step;
      for (let x = 0; x < n; x++) {
        const a = -size / 2 + x * step, o = x + y * n, q = 3 * o;
        for (let d = 0; d < 3; d++) points[q + d] = center[d] + a * u[d] + b * v[d] + h * w[d];
        const px = points[q] - T[0], py = points[q + 1] - T[1], pz = points[q + 2] - T[2];
        const i = M[0][0] * px + M[0][1] * py + M[0][2] * pz, j = M[1][0] * px + M[1][1] * py + M[1][2] * pz, k = M[2][0] * px + M[2][1] * py + M[2][2] * pz;
        inside[o] = i >= 0 && i <= nx - 1 && j >= 0 && j <= ny - 1 && k >= 0 && k <= nz - 1 ? 1 : 0;
      }
    }
    const values = image.sample(points);
    return { values, hyd: hydrops === image ? values : hydrops.sample(points), lab: labels.nearest(points) };
  };
  const bounds = c.windows[kind], wc = (bounds[0] + bounds[1]) / 2, width = bounds[1] - bounds[0];
  const grey = (val) => Math.max(0, Math.min(255, (val - wc + width / 2) / width * 255));
  const alpha = Number.isFinite(roiOpacity) ? Math.max(0, Math.min(1, roiOpacity)) : 0.42;
  const RED = [255, 76, 104], tint = (l) => l % 2 ? [68, 155, 255] : [73, 212, 157];
  const pixels = new Uint8ClampedArray(4 * nn);
  const paint = (o, g, roi) => {
    const p = 4 * o;
    for (let d = 0; d < 3; d++) pixels[p + d] = roi ? g * (1 - alpha) + roi[d] * alpha : g;
    pixels[p + 3] = 255;
  };
  if (mode === "plane") {
    const { values, hyd, lab } = plane(depths[0]);
    for (let o = 0; o < nn; o++) {
      if (!inside[o]) {
        pixels[4 * o + 3] = 255;
        continue;
      }
      const l = lab[o];
      paint(o, grey(values[o]), l ? hyd[o] < 0 ? RED : tint(l) : null);
    }
  } else {
    const max2 = kind === "mrc", acc = new Float64Array(nn), hit = new Uint8Array(nn), has = new Uint8Array(nn), neg = new Uint8Array(nn);
    for (const h of depths) {
      const { values, hyd, lab } = plane(h);
      for (let o = 0; o < nn; o++) {
        if (!inside[o]) continue;
        const val = values[o];
        if (!hit[o]) {
          acc[o] = val;
          hit[o] = 1;
        } else if (max2 ? val > acc[o] : val < acc[o]) acc[o] = val;
        if (lab[o] === label) {
          has[o] = 1;
          if (hyd[o] < 0) neg[o] = 1;
        }
      }
    }
    for (let o = 0; o < nn; o++) {
      if (!hit[o]) {
        pixels[4 * o + 3] = 255;
        continue;
      }
      paint(o, grey(acc[o]), has[o] ? neg[o] ? RED : tint(label) : null);
    }
  }
  return { pixels, width: n, height: n };
}
function polygon(c, { label, z, points, erase }) {
  const [w, h, d] = c.shape;
  if (z < 0 || z >= d || ![1, 2, 3, 4].includes(label) || points.length < 3 || points.some((p) => p.length !== 2 || p.some((v, i) => !Number.isFinite(v) || v < 0 || v >= c.shape[i]))) throw Error("\u8F2A\u90ED\u306E\u5EA7\u6A19\u304C\u7BC4\u56F2\u5916\u3067\u3059\u3002");
  c.undo.push({ z, plane: c.labels.slice(z * w * h, (z + 1) * w * h) });
  c.undo = c.undo.slice(-20);
  const minY = Math.max(0, Math.floor(Math.min(...points.map((p) => p[1])))), maxY = Math.min(h - 1, Math.ceil(Math.max(...points.map((p) => p[1]))));
  for (let y = minY; y <= maxY; y++) for (let x = Math.max(0, Math.floor(Math.min(...points.map((p) => p[0])))); x <= Math.min(w - 1, Math.ceil(Math.max(...points.map((p) => p[0])))); x++) {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const a = points[i], b = points[j];
      if (a[1] > y !== b[1] > y && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
    }
    const p = idx(x, y, z, c.shape);
    if (inside && (!erase || c.labels[p] === label)) c.labels[p] = erase ? 0 : label;
  }
  c.reviewed = false;
  c.revision++;
  c.manual_roi_edit = true;
  c.rows = quantify(c);
}
function rasterContour(points, width, height) {
  if (!Array.isArray(points) || points.length < 3 || points.length > 1e3 || points.some((p) => !Array.isArray(p) || p.length !== 2 || p.some((v, i) => !Number.isFinite(v) || v < 0 || v >= [width, height][i]))) throw Error("\u4E21\u65B9\u5411\u306B3\u70B9\u4EE5\u4E0A\u306E\u8F2A\u90ED\u3092\u753B\u50CF\u5185\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    area += a[0] * b[1] - b[0] * a[1];
  }
  if (Math.abs(area) < 1e-6) throw Error("\u9762\u7A4D\u306E\u3042\u308B\u8F2A\u90ED\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  const orient = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  for (let i = 0; i < points.length; i++) for (let j = i + 2; j < points.length; j++) {
    if (i === 0 && j === points.length - 1) continue;
    const a = points[i], b = points[(i + 1) % points.length], d = points[j], e = points[(j + 1) % points.length];
    if (orient(a, b, d) * orient(a, b, e) < 0 && orient(d, e, a) * orient(d, e, b) < 0) throw Error("\u8F2A\u90ED\u304C\u4EA4\u5DEE\u3057\u3066\u3044\u307E\u3059\u3002\u4EA4\u5DEE\u3057\u306A\u3044\u3088\u3046\u306B\u56F2\u307F\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  }
  const mask = new Uint8Array(width * height);
  for (let y = Math.ceil(Math.min(...points.map((p) => p[1]))); y <= Math.floor(Math.max(...points.map((p) => p[1]))); y++) for (let x = Math.ceil(Math.min(...points.map((p) => p[0]))); x <= Math.floor(Math.max(...points.map((p) => p[0]))); x++) {
    let inside = false, boundary = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const a = points[j], b = points[i];
      if (Math.abs(orient(a, b, [x, y])) < 1e-7 && x >= Math.min(a[0], b[0]) && x <= Math.max(a[0], b[0]) && y >= Math.min(a[1], b[1]) && y <= Math.max(a[1], b[1])) boundary = true;
      if (a[1] > y !== b[1] > y && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
    }
    if (inside || boundary) mask[x + y * width] = 1;
  }
  return mask;
}
function intersectContours(c, { label, axial, coronal }) {
  if (![1, 2, 3, 4].includes(label)) throw Error("\u524A\u9664\u3059\u308B\u90E8\u4F4D\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  const [w, h, d] = c.shape, a = rasterContour(axial, w, h), b = rasterContour(coronal, w, d), indices = [];
  const slicesZ = /* @__PURE__ */ new Set(), slicesY = /* @__PURE__ */ new Set();
  for (let z = 0; z < d; z++) for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = idx(x, y, z, c.shape);
    if (c.labels[p] === label && a[x + y * w] && b[x + z * w]) {
      indices.push(p);
      slicesZ.add(z);
      slicesY.add(y);
    }
  }
  return { indices: Uint32Array.from(indices), count: indices.length, mm3: indices.length * c.spacing.reduce((a2, b3) => a2 * b3, 1), axial_slices: [...slicesZ].sort((a2, b3) => a2 - b3), coronal_slices: [...slicesY].sort((a2, b3) => a2 - b3) };
}
function applyIntersection(c, preview) {
  if (preview.revision !== c.revision) throw Error("ROI\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u524A\u9664\u7BC4\u56F2\u3092\u518D\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  if (!preview.indices.length) throw Error("\u524A\u9664\u5BFE\u8C61\u306EROI\u306F\u3042\u308A\u307E\u305B\u3093\u3002");
  if (preview.indices.some((p) => c.labels[p] !== preview.label)) throw Error("\u524A\u9664\u5BFE\u8C61\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u518D\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  c.undo.push({ indices: preview.indices.slice(), values: Uint8Array.from(preview.indices, (p) => c.labels[p]), editsLength: (c.two_plane_edits || []).length });
  c.undo = c.undo.slice(-20);
  for (const p of preview.indices) c.labels[p] = 0;
  c.two_plane_edits ??= [];
  c.two_plane_edits.push({ method: "axial_xy_AND_coronal_xz", label: preview.label, axial: preview.axial, coronal: preview.coronal, drawn_at: preview.drawn_at, count: preview.count, mm3: preview.mm3, created: (/* @__PURE__ */ new Date()).toISOString() });
  c.reviewed = false;
  c.revision++;
  c.manual_roi_edit = true;
  c.rows = quantify(c);
}
function undoEdit(c) {
  const prev = c.undo.pop();
  if (!prev) return false;
  if (prev.indices) {
    prev.indices.forEach((p, i) => {
      c.labels[p] = prev.values[i];
    });
    c.two_plane_edits = (c.two_plane_edits || []).slice(0, prev.editsLength);
  } else c.labels.set(prev.plane, prev.z * c.shape[0] * c.shape[1]);
  c.reviewed = false;
  c.revision++;
  c.rows = quantify(c);
  return true;
}
function renderOrtho(c, plane, slice, previewMask = null, roiOpacity = 0.42) {
  if (!c.images.mrc) throw Error("2\u65B9\u5411\u306E\u7DE8\u96C6\u306B\u306FMRC\u304C\u5FC5\u8981\u3067\u3059\u3002");
  if (!["axial", "coronal"].includes(plane)) throw Error("\u8868\u793A\u65B9\u5411\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  const [w, h, d] = c.shape, height = plane === "axial" ? h : d, limit = plane === "axial" ? d : h;
  if (!Number.isInteger(slice) || slice < 0 || slice >= limit) throw Error("\u65AD\u9762\u304C\u7BC4\u56F2\u5916\u3067\u3059\u3002");
  const pixels = new Uint8ClampedArray(w * height * 4), [low, high] = c.windows.mrc;
  for (let v = 0; v < height; v++) for (let u = 0; u < w; u++) {
    const x = w - 1 - u, y = plane === "axial" ? h - 1 - v : slice, z = plane === "axial" ? slice : d - 1 - v, p = idx(x, y, z, c.shape);
    const g = Math.max(0, Math.min(255, 255 * (c.images.mrc[p] - low) / Math.max(high - low, 1e-9)));
    let rgb = [g, g, g];
    if (c.labels[p]) {
      const color = c.labels[p] % 2 ? [68, 155, 255] : [73, 212, 157];
      const a = Number.isFinite(roiOpacity) ? Math.max(0, Math.min(1, roiOpacity)) : 0.42;
      rgb = rgb.map((v2, i) => v2 * (1 - a) + color[i] * a);
    }
    if (previewMask?.[p]) rgb = rgb.map((v2, i) => v2 * 0.15 + [255, 177, 40][i] * 0.85);
    pixels.set([...rgb, 255], 4 * (u + v * w));
  }
  return { pixels, width: w, height, pixelSpacing: [c.spacing[0], c.spacing[plane === "axial" ? 1 : 2]] };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  K_RANGE_MESSAGE,
  LABELS,
  MRC_REQUIRED_MESSAGE,
  NO_NEGATIVE_MESSAGE,
  applyIntersection,
  compatible,
  createImages,
  createImagesGiven,
  createImagesPpiMrc,
  createImagesPpiPei,
  decodePixels,
  dicomHeader,
  dot,
  idx,
  intersectContours,
  loadDicom,
  loadNifti,
  localize,
  niftiBytes,
  norm,
  otsu,
  polygon,
  quantify,
  renderOblique,
  renderOrtho,
  renderPixels,
  sample,
  segment,
  sha256,
  spacing,
  strFromU8,
  strToU8,
  undoEdit,
  unzipSync,
  validK,
  windows,
  world,
  zipSync
});
/*! Bundled license information:

dicom-parser/dist/dicomParser.min.js:
  (*! dicom-parser - 1.8.12 - 2023-02-20 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/dicomParser *)
*/
