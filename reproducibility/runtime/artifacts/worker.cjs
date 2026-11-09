var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
        function D3(e2, t2) {
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
              a3 = D3(e3, r4);
              t3.items.push(a3);
            }
            e3.warnings.push("eof encountered before finding sequence delimiter in sequence of undefined length"), t3.length = e3.byteArray.length - t3.dataOffset;
          } : function(e3, t3, r4) {
            for (var a3 = t3.dataOffset + t3.length; e3.position < a3; ) {
              var n3 = D3(e3, r4);
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
function isoGrid(center, halfMm, step) {
  const n = Math.floor(2 * halfMm / step + 1e-9) + 1, points = new Float64Array(n * n * n * 3);
  let i = 0;
  for (let z = 0; z < n; z++) for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    points[i++] = center[0] - halfMm + x * step;
    points[i++] = center[1] - halfMm + y * step;
    points[i++] = center[2] - halfMm + z * step;
  }
  return { points, dims: [n, n, n] };
}
function percentile(values, p) {
  const a = Float64Array.from(values).sort();
  if (!a.length) return NaN;
  const h = (a.length - 1) * p / 100, lo = Math.floor(h), hi = Math.min(lo + 1, a.length - 1);
  return a[lo] + (h - lo) * (a[hi] - a[lo]);
}
var nbrs = (i, [nx, ny, nz], f) => {
  const x = i % nx, y = Math.floor(i / nx) % ny, z = Math.floor(i / (nx * ny));
  if (x > 0) f(i - 1);
  if (x < nx - 1) f(i + 1);
  if (y > 0) f(i - nx);
  if (y < ny - 1) f(i + nx);
  if (z > 0) f(i - nx * ny);
  if (z < nz - 1) f(i + nx * ny);
};
function largestComponent(mask, dims) {
  const lab = new Int32Array(mask.length);
  let best = 0, bestN = 0, id = 0;
  const stack = [];
  for (let s = 0; s < mask.length; s++) {
    if (!mask[s] || lab[s]) continue;
    id++;
    let n = 0;
    lab[s] = id;
    stack.push(s);
    while (stack.length) {
      const i = stack.pop();
      n++;
      nbrs(i, dims, (j) => {
        if (mask[j] && !lab[j]) {
          lab[j] = id;
          stack.push(j);
        }
      });
    }
    if (n > bestN) {
      bestN = n;
      best = id;
    }
  }
  const out = new Uint8Array(mask.length);
  if (best) {
    for (let i = 0; i < out.length; i++) if (lab[i] === best) out[i] = 1;
  }
  return out;
}
function dilate(mask, dims, iterations) {
  let cur = Uint8Array.from(mask);
  for (let it = 0; it < iterations; it++) {
    const nxt = Uint8Array.from(cur);
    for (let i = 0; i < cur.length; i++) if (cur[i]) nbrs(i, dims, (j) => {
      nxt[j] = 1;
    });
    cur = nxt;
  }
  return cur;
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

// portable/src/lumen/spiral.js
var D2R = Math.PI / 180;
var A1_MAX = -1e-4;
var PHI_LIMIT = 1100;
var MAX_POINTS = 4e3;
var dot2 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
var cross2 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var unit = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 1];
};
function spiralBasis(axis) {
  const a = unit(axis), ax = Math.abs(a[0]), ay = Math.abs(a[1]), az = Math.abs(a[2]);
  const ref = ax <= ay && ax <= az ? [1, 0, 0] : ay <= az ? [0, 1, 0] : [0, 0, 1], d = dot2(ref, a);
  const u = unit([ref[0] - d * a[0], ref[1] - d * a[1], ref[2] - d * a[2]]);
  return { a, u, v: cross2(a, u) };
}
function spiralCurve(p, stepDeg) {
  const { a, u, v } = spiralBasis(p.axis), n = Math.floor(p.phiMax / stepDeg + 1e-9) + 1;
  const last = (n - 1) * stepDeg < p.phiMax - 1e-9, m = n + (last ? 1 : 0);
  const phi = new Float64Array(m), points = new Float64Array(3 * m);
  for (let i = 0; i < m; i++) {
    const f = i < n ? i * stepDeg : p.phiMax, r = Math.exp(p.a0 + p.a1 * f), h = p.c[0] + p.c[1] * f + p.c[2] * f * f, t = (p.theta0 + p.sigma * f) * D2R;
    const cr2 = r * Math.cos(t), sr = r * Math.sin(t);
    phi[i] = f;
    for (let k = 0; k < 3; k++) points[3 * i + k] = p.center[k] + cr2 * u[k] + sr * v[k] + h * a[k];
  }
  return { phi, points };
}
function solve(A, b) {
  const n = b.length;
  for (let i = 0; i < n; i++) {
    let p = i;
    for (let r = i + 1; r < n; r++) if (Math.abs(A[r][i]) > Math.abs(A[p][i])) p = r;
    [A[i], A[p]] = [A[p], A[i]];
    [b[i], b[p]] = [b[p], b[i]];
    for (let r = i + 1; r < n; r++) {
      const f = A[r][i] / A[i][i];
      for (let c = i; c < n; c++) A[r][c] -= f * A[i][c];
      b[r] -= f * b[i];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = b[i];
    for (let c = i + 1; c < n; c++) s -= A[i][c] * x[c];
    x[i] = s / A[i][i];
  }
  return x;
}
function fitSpiral({ points, weights, start, axis0, center0, score }) {
  const N = points.length / 3, M = Math.min(N, MAX_POINTS);
  if (M < 10) throw new Error("fitSpiral: too few points");
  const P = new Float64Array(3 * M), W = new Float64Array(M);
  for (let i = 0; i < M; i++) {
    const j = M === N ? i : Math.floor(i * N / M);
    P[3 * i] = points[3 * j];
    P[3 * i + 1] = points[3 * j + 1];
    P[3 * i + 2] = points[3 * j + 2];
    W[i] = weights[j];
  }
  let Wsum = 0;
  for (let i = 0; i < M; i++) Wsum += W[i];
  const R = new Float64Array(M), T = new Float64Array(M), H = new Float64Array(M);
  const phi = new Float64Array(M), lnR = new Float64Array(M);
  function polar(center, axis) {
    const { a, u, v } = spiralBasis(axis);
    for (let i = 0; i < M; i++) {
      const x = P[3 * i] - center[0], y = P[3 * i + 1] - center[1], z = P[3 * i + 2] - center[2];
      const hu = x * u[0] + y * u[1] + z * u[2], hv = x * v[0] + y * v[1] + z * v[2];
      H[i] = x * a[0] + y * a[1] + z * a[2];
      R[i] = Math.max(Math.hypot(hu, hv), 0.05);
      T[i] = Math.atan2(hv, hu) / D2R;
      lnR[i] = Math.log(R[i]);
    }
    const s = [start[0] - center[0], start[1] - center[1], start[2] - center[2]];
    return Math.atan2(dot2(s, v), dot2(s, u)) / D2R;
  }
  function init(s) {
    const r97 = percentile(R, 97), h5 = percentile(H, 5), h95 = percentile(H, 95);
    let mr = 0, mh = 0;
    for (let i = 0; i < M; i++) {
      mr += W[i] * R[i];
      mh += W[i] * H[i];
    }
    mr /= Wsum;
    mh /= Wsum;
    let sr = 0, sh = 0, sc = 0;
    for (let i = 0; i < M; i++) {
      const dr = R[i] - mr, dh = H[i] - mh;
      sr += W[i] * dr * dr;
      sh += W[i] * dh * dh;
      sc += W[i] * dr * dh;
    }
    const corr = sr > 0 && sh > 0 ? sc / Math.sqrt(sr * sh) : 0;
    s.a0 = Math.log(0.85 * r97);
    s.a1 = Math.min(A1_MAX, -Math.log(0.85 * r97 / 0.8) / 900);
    s.c1 = -(Math.sign(corr) || 1) * (h95 - h5) / 900;
    s.c0 = mh - 450 * s.c1;
    s.c2 = 0;
  }
  function assign(s) {
    let res = 0;
    for (let i = 0; i < M; i++) {
      let base2 = s.sigma * (T[i] - s.theta0) % 360;
      if (base2 < 0) base2 += 360;
      let bd = Infinity, bp = base2;
      for (let k = 0; k < 3; k++) {
        const f = base2 + 360 * k;
        if (f > PHI_LIMIT) break;
        const r = Math.exp(s.a0 + s.a1 * f), h = s.c0 + s.c1 * f + s.c2 * f * f, d = (R[i] - r) * (R[i] - r) + (H[i] - h) * (H[i] - h);
        if (d < bd) {
          bd = d;
          bp = f;
        }
      }
      phi[i] = bp;
      res += W[i] * Math.sqrt(bd);
    }
    s.residual = res / Wsum;
  }
  function update(s) {
    let S0 = 0, S1 = 0, S2 = 0, S3 = 0, S4 = 0, Y0 = 0, Y1 = 0, G0 = 0, G1 = 0, G2 = 0;
    for (let i = 0; i < M; i++) {
      const w = W[i], x = phi[i] / 900, x2 = x * x;
      S0 += w;
      S1 += w * x;
      S2 += w * x2;
      S3 += w * x2 * x;
      S4 += w * x2 * x2;
      Y0 += w * lnR[i];
      Y1 += w * x * lnR[i];
      G0 += w * H[i];
      G1 += w * x * H[i];
      G2 += w * x2 * H[i];
    }
    const det = S0 * S2 - S1 * S1;
    if (det > 1e-12) {
      let b = (S0 * Y1 - S1 * Y0) / det, a0 = (Y0 - b * S1) / S0;
      if (b / 900 > A1_MAX) {
        b = A1_MAX * 900;
        a0 = (Y0 - b * S1) / S0;
      }
      s.a0 = a0;
      s.a1 = b / 900;
    }
    const ridge = 1e-9 * S0, g = solve([[S0 + ridge, S1, S2], [S1, S2 + ridge, S3], [S2, S3, S4 + ridge]], [G0, G1, G2]);
    if (g.every(Number.isFinite)) {
      s.c0 = g[0];
      s.c1 = g[1] / 900;
      s.c2 = g[2] / 81e4;
    }
  }
  function phiMaxOf() {
    const a = Array.from(phi);
    return percentile(a, 99);
  }
  function iterate(s, n) {
    for (let it = 0; it < n; it++) {
      assign(s);
      update(s);
    }
    assign(s);
    s.phiMax = phiMaxOf();
  }
  function toParams(s) {
    return { center: s.center, axis: s.axis, sigma: s.sigma, theta0: s.theta0, a0: s.a0, a1: s.a1, c: [s.c0, s.c1, s.c2], phiMax: s.phiMax, residual: s.residual };
  }
  const base = spiralBasis(axis0), offs = [], tilts = [-15, 0, 15];
  for (let i = -4; i <= 4; i++) offs.push(i * 0.5);
  let best = null, bestScore = -Infinity;
  for (const tu of tilts) for (const tv of tilts) {
    const tu_ = Math.tan(tu * D2R), tv_ = Math.tan(tv * D2R);
    const axis = unit([base.a[0] + tu_ * base.u[0] + tv_ * base.v[0], base.a[1] + tu_ * base.u[1] + tv_ * base.v[1], base.a[2] + tu_ * base.u[2] + tv_ * base.v[2]]);
    const fr = spiralBasis(axis);
    for (const ou of offs) for (const ov of offs) {
      const center = [center0[0] + ou * fr.u[0] + ov * fr.v[0], center0[1] + ou * fr.u[1] + ov * fr.v[1], center0[2] + ou * fr.u[2] + ov * fr.v[2]];
      const theta0 = polar(center, axis);
      for (const sigma of [1, -1]) {
        const s = { center, axis, sigma, theta0 };
        init(s);
        iterate(s, 12);
        const sc = score(toParams(s));
        if (sc > bestScore) {
          bestScore = sc;
          best = { s: { ...s }, center, axis, theta0 };
        }
      }
    }
  }
  if (!best) throw new Error("\u3089\u305B\u3093\u306E\u5F53\u3066\u306F\u3081\u304C\u3067\u304D\u307E\u305B\u3093\uFF08\u683C\u5B50\u63A2\u7D22\u306E\u3059\u3079\u3066\u306E\u8A55\u4FA1\u5024\u304C NaN\uFF09 (fitSpiral: every grid-search score is NaN)");
  polar(best.center, best.axis);
  iterate(best.s, 40);
  return toParams(best.s);
}

// portable/src/lumen/orientation.js
var WINDING_MIN_DEG = 180;
var AXIS_OFF45_WARN_DEG = 45;
var HEAD_MIN_INTERAURAL_MM = 40;
var HEAD_MIN_POSTERIOR_MM = 1;
var D = 180 / Math.PI;
var dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
var cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var unit2 = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return [a[0] / n, a[1] / n, a[2] / n];
};
var clamp1 = (x) => Math.max(-1, Math.min(1, x));
var isPoint = (p) => Array.isArray(p) && p.length === 3 && p.every(Number.isFinite);
function centerlineWindingDeg(C, axis) {
  const n = Math.floor(C.length / 3), w = unit2(axis);
  let cx = 0, cy = 0, cz = 0;
  for (let k = 0; k < n; k++) {
    cx += C[3 * k];
    cy += C[3 * k + 1];
    cz += C[3 * k + 2];
  }
  const c = [cx / n, cy / n, cz / n], d = [C[0] - c[0], C[1] - c[1], C[2] - c[2]], dw = dot3(d, w), pp = [d[0] - dw * w[0], d[1] - dw * w[1], d[2] - dw * w[2]];
  let u;
  if (Math.hypot(pp[0], pp[1], pp[2]) > 1e-9) u = unit2(pp);
  else {
    let m = 0;
    for (let a = 1; a < 3; a++) if (Math.abs(w[a]) < Math.abs(w[m])) m = a;
    const e = [0, 0, 0];
    e[m] = 1;
    u = unit2(cross3(w, e));
  }
  const v = cross3(w, u);
  let tot = 0, prev = null;
  for (let k = 0; k < n; k++) {
    const q = [C[3 * k] - c[0], C[3 * k + 1] - c[1], C[3 * k + 2] - c[2]], a = Math.atan2(dot3(q, v), dot3(q, u));
    if (prev !== null) {
      let s = a - prev;
      if (s > Math.PI) s -= 2 * Math.PI;
      if (s <= -Math.PI) s += 2 * Math.PI;
      tot += s;
    }
    prev = a;
  }
  return tot * D;
}
var expectedWindingSign = (side) => side === "R" ? 1 : -1;
function headFrame(seedsWorld) {
  const s = seedsWorld || {};
  if (![1, 2, 3, 4].every((k) => isPoint(s[k]))) return null;
  const lr = [s[1][0] - s[3][0], s[1][1] - s[3][1], s[1][2] - s[3][2]];
  if (Math.hypot(lr[0], lr[1], lr[2]) < HEAD_MIN_INTERAURAL_MM) return null;
  const lat = unit2(lr), p = [0, 1, 2].map((i) => (s[2][i] - s[1][i] + (s[4][i] - s[3][i])) / 2), pl = dot3(p, lat), pp = [p[0] - pl * lat[0], p[1] - pl * lat[1], p[2] - pl * lat[2]];
  if (Math.hypot(pp[0], pp[1], pp[2]) < HEAD_MIN_POSTERIOR_MM) return null;
  const post = unit2(pp);
  return { lat, post, sup: cross3(post, lat) };
}
function axisDirection(axis, frame, side) {
  const a = unit2(axis), L = side === "R" ? frame.lat : frame.lat.map((x) => -x), A = frame.post.map((x) => -x), e = unit2([L[0] + A[0], L[1] + A[1], L[2] + A[2]]);
  return { az_deg: Math.atan2(dot3(a, A), dot3(a, L)) * D, el_deg: Math.asin(clamp1(dot3(a, frame.sup))) * D, off45_deg: Math.acos(clamp1(dot3(a, e))) * D };
}
function orientationCheck(C, axis, side, seedsWorld, turnsDeg) {
  const winding_deg = centerlineWindingDeg(C, axis), judged = Math.abs(winding_deg) > WINDING_MIN_DEG && !(Number.isFinite(turnsDeg) && turnsDeg < WINDING_MIN_DEG);
  const winding_ok = judged ? Math.sign(winding_deg) === expectedWindingSign(side) : null;
  const frame = headFrame(seedsWorld), dir = frame ? axisDirection(axis, frame, side) : null, warnings = [];
  if (winding_ok === false) warnings.push("winding_reversed");
  if (dir && dir.off45_deg > AXIS_OFF45_WARN_DEG) warnings.push("axis_direction_atypical");
  return { winding_deg, winding_ok, axis_az_deg: dir ? dir.az_deg : null, axis_el_deg: dir ? dir.el_deg : null, axis_off45_deg: dir ? dir.off45_deg : null, warnings };
}

// portable/src/lumen/skeleton-template.js
var SKELETON_TEMPLATE = { "source": "IE-Map (Ahmadi et al., Sci Rep 11:3293, 2021; doi:10.1038/s41598-021-82716-0), right ear: centerline of the cochlear lumen (scala tympani + scala vestibuli + cupula)", "license": "CC BY 4.0", "side": "R", "step_mm": 0.1, "axis_point": [-0.116, -0.357, -1.442], "points": [3.939, -0, -0.347, 3.916, 0.096, -0.334, 3.893, 0.193, -0.32, 3.867, 0.287, -0.336, 3.84, 0.38, -0.359, 3.812, 0.474, -0.382, 3.788, 0.558, -0.427, 3.766, 0.637, -0.484, 3.745, 0.715, -0.542, 3.723, 0.794, -0.6, 3.701, 0.872, -0.659, 3.68, 0.948, -0.72, 3.658, 1.024, -0.781, 3.637, 1.1, -0.843, 3.615, 1.176, -0.904, 3.57, 1.257, -0.942, 3.524, 1.337, -0.979, 3.478, 1.418, -1.016, 3.422, 1.493, -1.045, 3.346, 1.557, -1.059, 3.27, 1.62, -1.072, 3.194, 1.684, -1.086, 3.111, 1.737, -1.094, 3.024, 1.787, -1.101, 2.938, 1.837, -1.108, 2.851, 1.887, -1.115, 2.762, 1.932, -1.117, 2.673, 1.977, -1.118, 2.584, 2.023, -1.12, 2.493, 2.066, -1.121, 2.402, 2.106, -1.122, 2.311, 2.146, -1.124, 2.218, 2.185, -1.126, 2.124, 2.217, -1.136, 2.03, 2.249, -1.145, 1.936, 2.282, -1.155, 1.841, 2.307, -1.174, 1.747, 2.333, -1.194, 1.652, 2.358, -1.214, 1.557, 2.381, -1.235, 1.462, 2.402, -1.257, 1.366, 2.424, -1.278, 1.269, 2.442, -1.291, 1.171, 2.459, -1.303, 1.073, 2.476, -1.315, 0.974, 2.488, -1.315, 0.875, 2.5, -1.315, 0.775, 2.511, -1.315, 0.676, 2.519, -1.313, 0.576, 2.527, -1.31, 0.476, 2.531, -1.311, 0.376, 2.533, -1.313, 0.276, 2.535, -1.314, 0.177, 2.531, -1.32, 0.077, 2.526, -1.325, -0.023, 2.519, -1.33, -0.122, 2.508, -1.333, -0.221, 2.497, -1.337, -0.32, 2.481, -1.335, -0.419, 2.464, -1.332, -0.517, 2.445, -1.327, -0.614, 2.422, -1.32, -0.711, 2.399, -1.313, -0.806, 2.369, -1.306, -0.9, 2.337, -1.298, -0.993, 2.3, -1.289, -1.082, 2.258, -1.279, -1.172, 2.214, -1.268, -1.257, 2.163, -1.255, -1.341, 2.111, -1.241, -1.424, 2.057, -1.228, -1.505, 2.001, -1.215, -1.587, 1.944, -1.201, -1.666, 1.884, -1.189, -1.745, 1.824, -1.176, -1.821, 1.761, -1.162, -1.897, 1.697, -1.147, -1.969, 1.63, -1.133, -2.036, 1.558, -1.117, -2.103, 1.485, -1.101, -2.16, 1.405, -1.084, -2.217, 1.324, -1.067, -2.267, 1.239, -1.05, -2.313, 1.152, -1.032, -2.357, 1.064, -1.015, -2.394, 0.973, -0.999, -2.431, 0.882, -0.982, -2.462, 0.788, -0.965, -2.493, 0.695, -0.947, -2.521, 0.601, -0.927, -2.547, 0.507, -0.906, -2.572, 0.412, -0.884, -2.595, 0.318, -0.862, -2.618, 0.223, -0.84, -2.637, 0.126, -0.821, -2.656, 0.03, -0.803, -2.67, -0.068, -0.787, -2.68, -0.166, -0.775, -2.687, -0.265, -0.763, -2.684, -0.365, -0.754, -2.68, -0.464, -0.744, -2.668, -0.563, -0.734, -2.656, -0.662, -0.723, -2.64, -0.76, -0.711, -2.623, -0.857, -0.698, -2.601, -0.954, -0.684, -2.573, -1.049, -0.67, -2.543, -1.143, -0.656, -2.504, -1.234, -0.642, -2.466, -1.325, -0.628, -2.42, -1.414, -0.617, -2.375, -1.502, -0.607, -2.323, -1.587, -0.6, -2.27, -1.672, -0.594, -2.211, -1.752, -0.59, -2.149, -1.831, -0.586, -2.083, -1.906, -0.582, -2.013, -1.977, -0.576, -1.942, -2.047, -0.568, -1.866, -2.111, -0.558, -1.79, -2.174, -0.547, -1.709, -2.232, -0.537, -1.628, -2.29, -0.527, -1.543, -2.343, -0.521, -1.458, -2.395, -0.515, -1.371, -2.443, -0.511, -1.282, -2.49, -0.508, -1.19, -2.528, -0.502, -1.096, -2.56, -0.493, -1, -2.585, -0.483, -0.902, -2.601, -0.471, -0.804, -2.615, -0.458, -0.705, -2.622, -0.443, -0.607, -2.629, -0.429, -0.508, -2.631, -0.414, -0.409, -2.632, -0.399, -0.31, -2.626, -0.385, -0.211, -2.62, -0.372, -0.113, -2.607, -0.361, -0.014, -2.593, -0.349, 0.083, -2.572, -0.34, 0.18, -2.55, -0.331, 0.276, -2.522, -0.323, 0.371, -2.492, -0.316, 0.464, -2.457, -0.311, 0.557, -2.419, -0.307, 0.647, -2.376, -0.305, 0.735, -2.329, -0.301, 0.821, -2.277, -0.295, 0.901, -2.219, -0.288, 0.978, -2.156, -0.28, 1.048, -2.085, -0.274, 1.115, -2.011, -0.269, 1.176, -1.932, -0.265, 1.236, -1.851, -0.262, 1.287, -1.766, -0.267, 1.336, -1.679, -0.274, 1.377, -1.589, -0.288, 1.413, -1.497, -0.298, 1.445, -1.402, -0.304, 1.472, -1.306, -0.306, 1.496, -1.209, -0.306, 1.51, -1.11, -0.313, 1.519, -1.011, -0.318, 1.519, -0.911, -0.322, 1.511, -0.811, -0.32, 1.499, -0.712, -0.313, 1.485, -0.614, -0.298, 1.471, -0.518, -0.278, 1.455, -0.422, -0.253, 1.431, -0.331, -0.221, 1.396, -0.242, -0.191, 1.354, -0.156, -0.162, 1.307, -0.071, -0.14, 1.26, 0.016, -0.122, 1.21, 0.101, -0.109, 1.155, 0.184, -0.1, 1.095, 0.264, -0.092, 1.03, 0.338, -0.078, 0.96, 0.409, -0.065, 0.887, 0.476, -0.058, 0.81, 0.54, -0.058, 0.73, 0.599, -0.066, 0.645, 0.648, -0.081, 0.554, 0.689, -0.092, 0.465, 0.73, -0.07, 0.384, 0.774, -0.031, 0.299, 0.817, -5e-3, 0.206, 0.852, 5e-3, 0.11, 0.877, 0.012, 0.013, 0.894, 0.029, -0.083, 0.905, 0.054, -0.18, 0.911, 0.076, -0.279, 0.913, 0.096, -0.377, 0.912, 0.114, -0.474, 0.903, 0.134, -0.57, 0.883, 0.153, -0.663, 0.85, 0.168, -0.752, 0.807, 0.18, -0.838, 0.757, 0.195, -0.914, 0.697, 0.218, -0.977, 0.624, 0.243, -1.025, 0.539, 0.262, -1.063, 0.449, 0.286, -1.097, 0.363, 0.321, -1.133, 0.285, 0.371, -1.17, 0.216, 0.433, -1.201, 0.15, 0.501, -1.229, 0.083, 0.57, -1.255, 0.014, 0.637, -1.281, -0.073, 0.678, -1.298, -0.17, 0.689, -1.311, -0.269, 0.683, -1.328, -0.366, 0.671, -1.35, -0.463, 0.659, -1.367, -0.561, 0.655, -1.37, -0.659, 0.669, -1.357, -0.752, 0.703, -1.327, -0.837, 0.747, -1.285, -0.915, 0.791, -1.233, -0.989, 0.834, -1.175, -1.06, 0.875, -1.111, -1.125, 0.915, -1.036, -1.177, 0.956, -0.96, -1.219, 1.005, -0.884, -1.261, 1.055, -0.806, -1.3, 1.105, -0.725, -1.332, 1.152, -0.641, -1.355, 1.202, -0.56, -1.376, 1.256, -0.477, -1.393, 1.309, -0.387, -1.403, 1.351, -0.29, -1.406, 1.373, -0.191, -1.41, 1.371, -0.093, -1.424, 1.356, 5e-3, -1.437, 1.342, 0.104, -1.427, 1.338, 0.197, -1.393, 1.338, 0.29, -1.359, 1.324, 0.383, -1.337, 1.294, 0.472, -1.302, 1.265, 0.554, -1.247, 1.256, 0.633, -1.186, 1.244, 0.714, -1.133, 1.219, 0.793, -1.08, 1.189, 0.863, -1.019, 1.153, 0.917, -0.941, 1.123, 0.955, -0.852, 1.102, 0.986, -0.757, 1.09, 1.01, -0.661, 1.088, 1.014, -0.562, 1.099, 0.999, -0.467, 1.123, 0.969, -0.379, 1.157, 0.926, -0.296, 1.193, 0.879, -0.212, 1.22, 0.828, -0.129, 1.236, 0.761, -0.055, 1.245, 0.696, 0.02, 1.238, 0.64, 0.102, 1.231, 0.586, 0.185, 1.229, 0.554, 0.268, 1.185, 0.543, 0.344, 1.121, 0.529, 0.416, 1.052, 0.512, 0.486, 0.983, 0.475, 0.554, 0.92, 0.41, 0.619, 0.887, 0.326, 0.671, 0.89, 0.236, 0.711, 0.903, 0.14, 0.737, 0.919, 0.042, 0.747, 0.933, -0.057, 0.75, 0.947, -0.153, 0.76, 0.973, -0.249, 0.768, 0.997, -0.347, 0.765, 1.018, -0.443, 0.745, 1.036, -0.536, 0.711, 1.049, -0.631, 0.686, 1.068, -0.724, 0.669, 1.098, -0.815, 0.643, 1.129, -0.902, 0.602, 1.155, -0.983, 0.547, 1.173, -1.05, 0.474, 1.188, -1.105, 0.394, 1.206, -1.145, 0.305, 1.227, -1.137, 0.208, 1.252, -1.125, 0.113, 1.277, -1.098, 0.019, 1.301, -1.071, -0.074, 1.324, -1.056, -0.168, 1.355, -1.049, -0.261, 1.389, -1.046, -0.358, 1.409, -1.043, -0.458, 1.412, -1.017, -0.553, 1.423, -0.97, -0.639, 1.444, -0.919, -0.72, 1.474, -0.873, -0.803, 1.504, -0.82, -0.885, 1.525, -0.743, -0.944, 1.547, -0.655, -0.981, 1.571, -0.56, -0.997, 1.598, -0.466, -1.007, 1.632, -0.381, -1.033, 1.677, -0.295, -1.062, 1.718, -0.198, -1.061, 1.732, -0.111, -1.018, 1.713, -0.023, -0.972, 1.704, 0.066, -0.973, 1.737, 0.15, -0.998, 1.784, 0.241, -0.971, 1.817, 0.328, -0.936, 1.851, 0.407, -0.877, 1.834, 0.488, -0.82, 1.821, 0.544, -0.738, 1.825, 0.601, -0.658, 1.84, 0.601, -0.561, 1.835, 0.567, -0.467, 1.829, 0.54, -0.373, 1.844], "theta_deg": [0, 1.38, 2.78, 4.15, 5.53, 6.91, 8.16, 9.32, 10.49, 11.66, 12.81, 13.94, 15.07, 16.19, 17.31, 18.61, 19.93, 21.25, 22.57, 23.9, 25.25, 26.63, 27.96, 29.3, 30.67, 32.07, 33.47, 34.9, 36.37, 37.84, 39.34, 40.86, 42.41, 43.94, 45.51, 47.1, 48.67, 50.27, 51.91, 53.55, 55.21, 56.91, 58.64, 60.41, 62.2, 64.01, 65.85, 67.71, 69.58, 71.48, 73.39, 75.31, 77.25, 79.19, 81.15, 83.12, 85.1, 87.09, 89.09, 91.1, 93.11, 95.13, 97.15, 99.17, 101.2, 103.23, 105.26, 107.3, 109.33, 111.37, 113.42, 115.49, 117.56, 119.64, 121.72, 123.81, 125.89, 127.97, 130.06, 132.14, 134.22, 136.3, 138.39, 140.48, 142.58, 144.69, 146.82, 148.95, 151.1, 153.25, 155.41, 157.57, 159.74, 161.92, 164.11, 166.3, 168.5, 170.71, 172.92, 175.14, 177.36, 179.58, 181.8, 184.02, 186.25, 188.47, 190.68, 192.9, 195.13, 197.36, 199.6, 201.84, 204.1, 206.36, 208.62, 210.9, 213.17, 215.45, 217.74, 220.02, 222.32, 224.62, 226.93, 229.26, 231.59, 233.94, 236.29, 238.63, 240.98, 243.32, 245.65, 248.01, 250.38, 252.77, 255.18, 257.62, 260.07, 262.55, 265.04, 267.56, 270.09, 272.65, 275.22, 277.81, 280.41, 283.03, 285.66, 288.3, 290.96, 293.6, 296.27, 298.93, 301.62, 304.33, 307.09, 309.84, 312.64, 315.43, 318.27, 321.16, 324.1, 327.11, 330.11, 333.17, 336.25, 339.36, 342.56, 345.84, 349.19, 352.59, 355.95, 359.31, 362.75, 366.34, 370.12, 374.03, 378.04, 382.12, 386.23, 390.41, 394.7, 399.07, 403.47, 407.88, 412.35, 416.85, 421.12, 425.53, 430.07, 434.61, 439.09, 443.5, 447.89, 452.27, 456.6, 460.86, 465.09, 469.36, 473.64, 477.9, 482.1, 486.26, 490.4, 494.55, 498.69, 502.72, 506.46, 509.94, 513.4, 516.94, 521.28, 525.97, 530.74, 535.41, 539.89, 544.24, 548.51, 552.62, 556.56, 560.49, 564.47, 568.51, 572.62, 576.66, 580.57, 584.59, 588.72, 592.96, 597.19, 601.4, 605.75, 610.42, 615.52, 620.88, 626.17, 631.33, 636.55, 641.77, 647.02, 651.92, 656.84, 661.94, 667.04, 671.87, 676.45, 680.9, 685.46, 690.17, 695, 699.87, 704.67, 709.33, 713.83, 718.34, 723.26, 728.59, 733.98, 739.88, 746.25, 752.67, 758, 761.77, 765.12, 768.28, 771.99, 776.66, 781.71, 786.77, 791.8, 796.84, 801.93, 806.87, 811.75, 816.62, 821.51, 826.45, 831.25, 835.65, 839.95, 844.31, 848.79, 853.31, 857.77, 862.22, 866, 870.01, 873.99, 878.44, 883.57, 889.1, 895.02, 901.17, 907.24, 913.21, 919.24, 925.44, 931.8, 938.05, 944.15, 950.2, 956.62, 963.54, 970.71, 978.27, 985.34, 993.53, 1001.38, 1007.51, 1015.1, 1022.43, 1030.12, 1037.46, 1044.95, 1052.22, 1059.13, 1065.8, 1073.55], "length_mm": 31.54, "turns_deg": 1073.5 };

// portable/src/lumen/skeleton.js
var SKELETON_SCALE_MIN = 0.8;
var SKELETON_SCALE_MAX = 1.2;
var SKELETON_FIT_MIN = 0.6;
var SKELETON_DEV_MM = 2.2;
var SKELETON_OUT_TOTAL_DEG = 90;
var SKELETON_SAME_TURN_DEG = 45;
var SKELETON_UPDOWN_DEG = 90;
var SKELETON_COVER_CAP_MM = 1.5;
var SKELETON_COVER_WEIGHT = 1;
var D2 = 180 / Math.PI;
var R2D = Math.PI / 180;
var dot4 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
var cross4 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var unit3 = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 0];
};
var clamp12 = (x) => Math.max(-1, Math.min(1, x));
var isAxis = (a) => Array.isArray(a) && a.length === 3 && a.every(Number.isFinite) && Math.hypot(a[0], a[1], a[2]) > 1e-9;
function mean3(P) {
  const n = P.length / 3, m = [0, 0, 0];
  for (let k = 0; k < n; k++) for (let q = 0; q < 3; q++) m[q] += P[3 * k + q] / n;
  return m;
}
function perp(a) {
  let m = 0;
  for (let i = 1; i < 3; i++) if (Math.abs(a[i]) < Math.abs(a[m])) m = i;
  const e = [0, 0, 0];
  e[m] = 1;
  return unit3(cross4(a, e));
}
function skeletonTemplate(side, tpl = SKELETON_TEMPLATE) {
  const points = Float64Array.from(tpl.points), th = tpl.theta_deg ?? tpl.theta, ap = tpl.axis_point || [0, 0, 0];
  const mirror = side === "L";
  if (mirror) for (let k = 1; k < points.length; k += 3) points[k] = -points[k];
  return { points, theta: Float64Array.from(th), axis_point: [ap[0], mirror ? -ap[1] : ap[1], ap[2]] };
}
function fluidRestrictedSampler(sample2, grid, fluidIdx) {
  const [nx, ny, nz] = grid.dims, mask = new Uint8Array(nx * ny * nz);
  for (const i of fluidIdx) mask[i] = 1;
  const o = grid.origin, st = grid.step;
  return (pts) => {
    const m = sample2(pts), out = new Float32Array(m.length);
    for (let i = 0; i < m.length; i++) {
      const x = Math.round((pts[3 * i] - o[0]) / st), y = Math.round((pts[3 * i + 1] - o[1]) / st), z = Math.round((pts[3 * i + 2] - o[2]) / st);
      if (x >= 0 && y >= 0 && z >= 0 && x < nx && y < ny && z < nz && mask[x + nx * (y + ny * z)]) out[i] = m[i];
    }
    return out;
  };
}
function rotvec(w) {
  const t = Math.hypot(w[0], w[1], w[2]);
  if (t < 1e-12) return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  const k = [w[0] / t, w[1] / t, w[2] / t], c = Math.cos(t), s = Math.sin(t), v = 1 - c;
  return [[c + k[0] * k[0] * v, k[0] * k[1] * v - k[2] * s, k[0] * k[2] * v + k[1] * s], [k[1] * k[0] * v + k[2] * s, c + k[1] * k[1] * v, k[1] * k[2] * v - k[0] * s], [k[2] * k[0] * v - k[1] * s, k[2] * k[1] * v + k[0] * s, c + k[2] * k[2] * v]];
}
var mul3 = (A, B) => A.map((r) => [0, 1, 2].map((j) => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j]));
var apply3 = (R, p) => [R[0][0] * p[0] + R[0][1] * p[1] + R[0][2] * p[2], R[1][0] * p[0] + R[1][1] * p[1] + R[1][2] * p[2], R[2][0] * p[0] + R[2][1] * p[1] + R[2][2] * p[2]];
function nelderMead(f, x0, step, maxIter) {
  const n = x0.length;
  let S = [x0.slice()];
  for (let i = 0; i < n; i++) {
    const x = x0.slice();
    x[i] += step[i];
    S.push(x);
  }
  let F = S.map(f);
  for (let it = 0; it < maxIter; it++) {
    const ord = F.map((v, i) => i).sort((a, b3) => F[b3] - F[a]);
    S = ord.map((i) => S[i]);
    F = ord.map((i) => F[i]);
    if (F[0] - F[n] < 1e-7) break;
    const c = new Array(n).fill(0);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
    const at = (t) => c.map((cj, j) => cj + t * (S[n][j] - cj)), xr = at(-1), fr = f(xr);
    if (fr > F[0]) {
      const xe = at(-2), fe = f(xe);
      if (fe > fr) {
        S[n] = xe;
        F[n] = fe;
      } else {
        S[n] = xr;
        F[n] = fr;
      }
    } else if (fr > F[n - 1]) {
      S[n] = xr;
      F[n] = fr;
    } else {
      const xc = at(0.5), fc = f(xc);
      if (fc > F[n]) {
        S[n] = xc;
        F[n] = fc;
      } else for (let i = 1; i <= n; i++) {
        S[i] = S[i].map((v, j) => S[0][j] + 0.5 * (v - S[0][j]));
        F[i] = f(S[i]);
      }
    }
  }
  let b = 0;
  for (let i = 1; i <= n; i++) if (F[i] > F[b]) b = i;
  return { x: S[b], f: F[b] };
}
function fitSkeleton({ tpl, sample: sample2, thr, p99, center0, axisCandidates, fluid = null }) {
  const fail = { ok: false, frac_inside: 0, score: 0, s: null, points: null, axis: null, zero: null, axis_point: null };
  const cands = (axisCandidates || []).filter(isAxis).map(unit3);
  if (!cands.length || !(p99 > 0) || !center0 || !center0.every(Number.isFinite)) return fail;
  const tp = tpl.points, n = tp.length / 3, sub = [];
  for (let k = 0; k < n; k += n > 120 ? 2 : 1) sub.push(k);
  const lmin = Math.log(SKELETON_SCALE_MIN), lmax = Math.log(SKELETON_SCALE_MAX);
  const place = (x, R0) => ({ R: mul3(rotvec([x[0], x[1], x[2]]), R0), c: [center0[0] + x[3], center0[1] + x[4], center0[2] + x[5]], s: Math.exp(Math.max(lmin, Math.min(lmax, x[6]))) });
  const world2 = (pl2, idx2) => {
    const out = new Float64Array(3 * idx2.length);
    idx2.forEach((k, i) => {
      const p = apply3(pl2.R, [tp[3 * k], tp[3 * k + 1], tp[3 * k + 2]]);
      for (let q = 0; q < 3; q++) out[3 * i + q] = pl2.c[q] + pl2.s * p[q];
    });
    return out;
  };
  const F = [];
  if (fluid && fluid.length >= 3) {
    const nf = fluid.length / 3, st = Math.max(1, Math.floor(nf / 400));
    for (let i = 0; i < nf; i += st) F.push([fluid[3 * i], fluid[3 * i + 1], fluid[3 * i + 2]]);
  }
  const subC = [];
  for (let k = 0; k < n; k += Math.max(1, Math.floor(n / 80))) subC.push(k);
  const cover = (pl2) => {
    if (!F.length) return 0;
    const W = world2(pl2, subC), m2 = W.length / 3;
    let t = 0;
    for (const f of F) {
      let b = Infinity;
      for (let j = 0; j < m2; j++) {
        const d = (f[0] - W[3 * j]) ** 2 + (f[1] - W[3 * j + 1]) ** 2 + (f[2] - W[3 * j + 2]) ** 2;
        if (d < b) b = d;
      }
      t += Math.min(Math.sqrt(b), SKELETON_COVER_CAP_MM);
    }
    return t / F.length / SKELETON_COVER_CAP_MM;
  };
  const objective = (R0) => (x) => {
    const pl2 = place(x, R0), m2 = sample2(world2(pl2, sub));
    let a = 0;
    for (let i = 0; i < m2.length; i++) a += Math.max(0, Math.min(1, m2[i] / p99));
    const over = Math.max(0, Math.abs(x[6] - (lmin + lmax) / 2) - (lmax - lmin) / 2);
    return a / m2.length - SKELETON_COVER_WEIGHT * cover(pl2) - over;
  };
  const starts = [];
  for (const a of cands) {
    const u0 = perp(a), w0 = cross4(a, u0);
    for (let i = 0; i < 12; i++) {
      const ps = 30 * i * R2D, u = [0, 1, 2].map((q) => Math.cos(ps) * u0[q] + Math.sin(ps) * w0[q]), v = cross4(a, u);
      const R0 = [[u[0], v[0], a[0]], [u[1], v[1], a[1]], [u[2], v[2], a[2]]];
      starts.push({ R0, f: objective(R0)([0, 0, 0, 0, 0, 0, 0]) });
    }
  }
  starts.sort((p, q) => q.f - p.f);
  let best = null;
  for (const st of starts.slice(0, 4)) {
    const r = nelderMead(objective(st.R0), [0, 0, 0, 0, 0, 0, 0], [0.15, 0.15, 0.15, 0.5, 0.5, 0.5, 0.05], 300);
    if (!best || r.f > best.f) best = { ...r, R0: st.R0 };
  }
  const pl = place(best.x, best.R0), all = Array.from({ length: n }, (_, k) => k), points = world2(pl, all), m = sample2(points);
  let inside = 0;
  for (let i = 0; i < n; i++) if (m[i] > thr) inside++;
  const frac = inside / n, ap = tpl.axis_point || [0, 0, 0], apw = apply3(pl.R, ap);
  return {
    ok: frac >= SKELETON_FIT_MIN,
    frac_inside: frac,
    score: best.f,
    s: pl.s,
    points,
    axis: unit3(apply3(pl.R, [0, 0, 1])),
    zero: [points[0], points[1], points[2]],
    axis_point: [pl.c[0] + pl.s * apw[0], pl.c[1] + pl.s * apw[1], pl.c[2] + pl.s * apw[2]]
  };
}
function skeletonDeviation(C, sk, anchor = 0) {
  const n = C.length / 3, S = sk.points, ns = S.length / 3, a = unit3(sk.axis), o = sk.axis_point || mean3(S), x = perp(a), y = cross4(a, x);
  const unwrap = (Q, m) => {
    const out = new Float64Array(m);
    let prev = 0, acc = 0;
    for (let k = 0; k < m; k++) {
      const d = [Q[3 * k] - o[0], Q[3 * k + 1] - o[1], Q[3 * k + 2] - o[2]], v = Math.atan2(dot4(d, y), dot4(d, x));
      if (k === 0) acc = v;
      else {
        let dd = v - prev;
        dd -= 2 * Math.PI * Math.round(dd / (2 * Math.PI));
        acc += dd;
      }
      prev = v;
      out[k] = acc;
    }
    return out;
  };
  const ps = unwrap(S, ns), pc = unwrap(C, n), sg = ps[ns - 1] >= ps[0] ? 1 : -1;
  for (let j = 0; j < ns; j++) ps[j] *= sg;
  for (let k = 0; k < n; k++) pc[k] *= sg;
  const dist2 = (k, j) => (C[3 * k] - S[3 * j]) ** 2 + (C[3 * k + 1] - S[3 * j + 1]) ** 2 + (C[3 * k + 2] - S[3 * j + 2]) ** 2;
  const k0 = Math.max(0, Math.min(n - 1, anchor | 0));
  let j0 = 0, b0 = Infinity;
  for (let j = 0; j < ns; j++) {
    const d = dist2(k0, j);
    if (d < b0) {
      b0 = d;
      j0 = j;
    }
  }
  const shift = 2 * Math.PI * Math.round((ps[j0] - pc[k0]) / (2 * Math.PI));
  for (let k = 0; k < n; k++) pc[k] += shift;
  const W = SKELETON_SAME_TURN_DEG * R2D, dev = new Float64Array(n), phi = new Float64Array(n);
  for (let k = 0; k < n; k++) {
    let bd = Infinity, na = Infinity, nj = 0;
    for (let j = 0; j < ns; j++) {
      const da = Math.abs(ps[j] - pc[k]);
      if (da <= W) {
        const d = dist2(k, j);
        if (d < bd) bd = d;
      }
      if (da < na) {
        na = da;
        nj = j;
      }
    }
    dev[k] = Math.sqrt(bd < Infinity ? bd : dist2(k, nj));
    phi[k] = pc[k] * D2;
  }
  return { dev, phi };
}
function skeletonOutRuns(dev, theta, devMm = SKELETON_DEV_MM, minDeg = 0) {
  const runs = [], n = dev.length;
  let from = -1;
  const close2 = (to) => {
    if (from >= 0 && theta[to] - theta[from] >= minDeg) runs.push({ from_k: from, to_k: to, from_deg: theta[from], to_deg: theta[to] });
    from = -1;
  };
  for (let k = 0; k < n; k++) {
    const off = dev[k] > devMm && theta[k] >= 0;
    if (off && from < 0) from = k;
    if (!off && from >= 0) close2(k - 1);
  }
  if (from >= 0) close2(n - 1);
  return runs;
}
function skeletonCheck({ tpl, sample: sample2, thr, p99, center0, axisCandidates, C, theta, axis, fluid = null }) {
  const values = { skeleton_fit: null, skeleton_dev_max_mm: null, skeleton_out_from_deg: null, skeleton_axis_angle_deg: null };
  let fit;
  try {
    fit = fitSkeleton({ tpl, sample: sample2, thr, p99, center0, axisCandidates, fluid });
  } catch {
    fit = { ok: false };
  }
  if (!fit.ok) return { skeleton: { ok: false }, values, warnings: [] };
  const n = C.length / 3;
  let anchor = 0;
  while (anchor < n - 1 && !(theta[anchor] >= 0)) anchor++;
  const { dev } = skeletonDeviation(C, fit, anchor), all = skeletonOutRuns(dev, theta), out = new Uint8Array(n);
  const total = all.reduce((a, r) => a + (r.to_deg - r.from_deg), 0), runs = total >= SKELETON_OUT_TOTAL_DEG ? all : [];
  for (const r of runs) for (let k = r.from_k; k <= r.to_k; k++) out[k] = 1;
  let devMax = null;
  for (let k = 0; k < n; k++) if (theta[k] >= 0 && Number.isFinite(dev[k]) && (devMax === null || dev[k] > devMax)) devMax = dev[k];
  const angle = isAxis(axis) ? Math.acos(clamp12(dot4(unit3(axis), fit.axis))) * D2 : null, warnings = [];
  if (angle !== null && angle > SKELETON_UPDOWN_DEG) warnings.push("skeleton_updown_reversed");
  if (runs.length) warnings.push("skeleton_deviation");
  return {
    skeleton: {
      ok: true,
      points: Float32Array.from(fit.points),
      axis: fit.axis,
      zero: fit.zero,
      axis_point: fit.axis_point,
      theta: Float32Array.from(tpl.theta),
      half_width_mm: SKELETON_DEV_MM,
      dev: Float32Array.from(dev),
      out
    },
    values: { skeleton_fit: fit.frac_inside, skeleton_dev_max_mm: devMax, skeleton_out_from_deg: runs.length ? runs[0].from_deg : null, skeleton_axis_angle_deg: angle },
    warnings
  };
}

// portable/src/lumen/skeleton-norm.js
var SKELETON_NORM_TUBE_MM = 1.5;
var SKELETON_NORM_BIN_DEG = 10;
var SKELETON_NORM_VIEW_BIN_DEG = 30;
var SKELETON_NORM_TURNS = [["basal", 0, 360], ["middle", 360, 720], ["apical", 720, Infinity]];
var SKELETON_NORM_FIT_LOW = 0.95;
var SKELETON_NORM_IN_MID = 0.8;
var SKELETON_NORM_IN_LOW = 0.75;
var SKELETON_NORM_SCALE_EDGE = 5e-3;
var SCALE_EDGE = SKELETON_NORM_SCALE_EDGE;
var skeletonNormRule = () => ({
  tube_mm: SKELETON_NORM_TUBE_MM,
  fit_low: SKELETON_NORM_FIT_LOW,
  in_mid: SKELETON_NORM_IN_MID,
  in_low: SKELETON_NORM_IN_LOW,
  scale_min: SKELETON_SCALE_MIN,
  scale_max: SKELETON_SCALE_MAX,
  scale_edge: SKELETON_NORM_SCALE_EDGE
});
var DISK_STEP_MM = 0.1;
var STRETCH_STEP_MM = 0.05;
var STRETCH_DEG = 1;
var MIN_SMP = 50;
var nulls = () => ({ ok: false, tube_mm: null, theta_max: null, n_fluid: null, n_in: null, n_out: null, frac_in: null, el_pct: null, turns: null, bins: null, view: null });
var unit4 = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 0];
};
var cross5 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
var pct = (el, n) => n > 0 ? 100 * el / n : null;
function skeletonNormalize({ skeleton, labels, label, hydrops, affine, shape, tubeMm = SKELETON_NORM_TUBE_MM }) {
  if (!skeleton || !skeleton.ok || !skeleton.points || !skeleton.theta) return nulls();
  const P = skeleton.points, th = skeleton.theta, n = P.length / 3, [nx, ny, nz] = shape;
  let nf = 0;
  for (let i = 0; i < labels.length; i++) if (labels[i] === label) nf++;
  if (n < 2 || !nf) return nulls();
  let thMax = -Infinity;
  for (let k = 0; k < n; k++) if (th[k] > thMax) thMax = th[k];
  let w = unit4(skeleton.axis);
  if ((P[3 * (n - 1)] - P[0]) * w[0] + (P[3 * (n - 1) + 1] - P[1]) * w[1] + (P[3 * (n - 1) + 2] - P[2]) * w[2] < 0) w = w.map((v) => -v);
  let ap = skeleton.axis_point;
  if (!ap) {
    ap = [0, 0, 0];
    for (let k = 0; k < n; k++) for (let q = 0; q < 3; q++) ap[q] += P[3 * k + q] / n;
  }
  const radial = (x, y, z) => {
    const dx = x - ap[0], dy = y - ap[1], dz = z - ap[2], h = dx * w[0] + dy * w[1] + dz * w[2];
    return Math.hypot(dx - h * w[0], dy - h * w[1], dz - h * w[2]);
  };
  const radK = new Float64Array(n);
  for (let k = 0; k < n; k++) radK[k] = radial(P[3 * k], P[3 * k + 1], P[3 * k + 2]);
  const nearest = (x, y, z) => {
    let b = Infinity, bk = 0;
    for (let k = 0; k < n; k++) {
      const d = (x - P[3 * k]) ** 2 + (y - P[3 * k + 1]) ** 2 + (z - P[3 * k + 2]) ** 2;
      if (d < b) {
        b = d;
        bk = k;
      }
    }
    return [bk, Math.sqrt(b)];
  };
  const bin10 = (k) => Math.max(0, Math.floor(th[k] / SKELETON_NORM_BIN_DEG)), nb = Math.floor(Math.max(0, thMax) / SKELETON_NORM_BIN_DEG) + 1;
  const bins = { deg: SKELETON_NORM_BIN_DEG, vox_in: new Int32Array(nb), vox_el: new Int32Array(nb), vox_out: new Int32Array(nb), smp_in: new Int32Array(nb), smp_el: new Int32Array(nb) };
  const turns = {};
  for (const [nm] of SKELETON_NORM_TURNS) turns[nm] = { n: 0, n_el: 0, el_pct: null };
  let nIn = 0, nElIn = 0;
  const outList = [];
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] !== label) continue;
    const x = i % nx, y = Math.floor(i / nx) % ny, z = Math.floor(i / (nx * ny));
    const X = affine[0][0] * x + affine[0][1] * y + affine[0][2] * z + affine[0][3], Y = affine[1][0] * x + affine[1][1] * y + affine[1][2] * z + affine[1][3], Z = affine[2][0] * x + affine[2][1] * y + affine[2][2] * z + affine[2][3];
    const [k, d] = nearest(X, Y, Z), b = bin10(k);
    if (d <= tubeMm) {
      const el = hydrops[i] < 0;
      nIn++;
      bins.vox_in[b]++;
      if (el) {
        nElIn++;
        bins.vox_el[b]++;
      }
      for (const [nm, lo, hi] of SKELETON_NORM_TURNS) if (th[k] >= lo && th[k] < hi) {
        turns[nm].n++;
        if (el) turns[nm].n_el++;
        break;
      }
    } else {
      bins.vox_out[b]++;
      outList.push(th[k], radial(X, Y, Z) >= radK[k] ? 1 : -1, d);
    }
  }
  for (const nm in turns) turns[nm].el_pct = pct(turns[nm].n_el, turns[nm].n);
  const nOut = nf - nIn;
  const inv = inv3(affine), t = [affine[0][3], affine[1][3], affine[2][3]];
  const toVox = (X, Y, Z) => {
    const a = X - t[0], b = Y - t[1], c = Z - t[2];
    return [inv[0][0] * a + inv[0][1] * b + inv[0][2] * c, inv[1][0] * a + inv[1][1] * b + inv[1][2] * c, inv[2][0] * a + inv[2][1] * b + inv[2][2] * c];
  };
  const labAt = (v) => {
    const x = Math.round(v[0]), y = Math.round(v[1]), z = Math.round(v[2]);
    return x < 0 || y < 0 || z < 0 || x >= nx || y >= ny || z >= nz ? 0 : labels[x + nx * (y + ny * z)];
  };
  const hydAt = (v) => {
    const x0 = Math.floor(v[0]), y0 = Math.floor(v[1]), z0 = Math.floor(v[2]), fx = v[0] - x0, fy = v[1] - y0, fz = v[2] - z0;
    let s = 0;
    for (let c = 0; c < 2; c++) for (let b = 0; b < 2; b++) for (let a = 0; a < 2; a++) {
      const x = x0 + a, y = y0 + b, z = z0 + c;
      if (x < 0 || y < 0 || z < 0 || x >= nx || y >= ny || z >= nz) continue;
      s += (a ? fx : 1 - fx) * (b ? fy : 1 - fy) * (c ? fz : 1 - fz) * hydrops[x + nx * (y + ny * z)];
    }
    return s;
  };
  const g = [];
  for (let a = -tubeMm; a <= tubeMm + 1e-9; a += DISK_STEP_MM) g.push(a);
  const disk = [];
  for (const a of g) for (const b of g) if (Math.hypot(a, b) <= tubeMm + 1e-9) disk.push([a, b]);
  const nfl = new Float64Array(n), nel = new Float64Array(n);
  for (let k = 0; k < n; k++) {
    const k0 = Math.max(0, k - 1), k1 = Math.min(n - 1, k + 1), tg = unit4([P[3 * k1] - P[3 * k0], P[3 * k1 + 1] - P[3 * k0 + 1], P[3 * k1 + 2] - P[3 * k0 + 2]]);
    const n1 = unit4(cross5(tg, w)), n2 = cross5(tg, n1), px = P[3 * k], py = P[3 * k + 1], pz = P[3 * k + 2];
    for (const [a, b3] of disk) {
      const X = px + a * n1[0] + b3 * n2[0], Y = py + a * n1[1] + b3 * n2[1], Z = pz + a * n1[2] + b3 * n2[2];
      const dk = (X - px) ** 2 + (Y - py) ** 2 + (Z - pz) ** 2;
      let own = true;
      for (let j = 0; j < n && own; j++) {
        if (j === k) continue;
        const d = (X - P[3 * j]) ** 2 + (Y - P[3 * j + 1]) ** 2 + (Z - P[3 * j + 2]) ** 2;
        if (d < dk || d === dk && j < k) own = false;
      }
      if (!own) continue;
      const v = toVox(X, Y, Z);
      if (labAt(v) !== label) continue;
      nfl[k]++;
      if (hydAt(v) < 0) nel[k]++;
    }
    const b = bin10(k);
    bins.smp_in[b] += nfl[k];
    bins.smp_el[b] += nel[k];
  }
  const vb = SKELETON_NORM_VIEW_BIN_DEG, nv = Math.floor(Math.max(0, thMax) / vb) + 1, fl30 = new Float64Array(nv), el30 = new Float64Array(nv);
  for (let k = 0; k < n; k++) {
    const b = Math.max(0, Math.floor(th[k] / vb));
    fl30[b] += nfl[k];
    el30[b] += nel[k];
  }
  const profile30 = new Float64Array(nv);
  for (let b = 0; b < nv; b++) profile30[b] = fl30[b] >= MIN_SMP ? el30[b] / fl30[b] : NaN;
  const height = Math.floor(2 * tubeMm / STRETCH_STEP_MM + 1e-9) + 1, width = Math.max(1, Math.ceil(thMax / STRETCH_DEG)), cls = new Uint8Array(width * height);
  for (let c = 0; c < width; c++) {
    const ang = c * STRETCH_DEG;
    let lo = 0, hi = n - 1;
    while (lo < hi) {
      const m = lo + hi >> 1;
      if (th[m] >= ang) hi = m;
      else lo = m + 1;
    }
    for (let r = 0; r < height; r++) {
      const o = -tubeMm + r * STRETCH_STEP_MM, v = toVox(P[3 * lo] + o * w[0], P[3 * lo + 1] + o * w[1], P[3 * lo + 2] + o * w[2]);
      if (labAt(v) === label) cls[r * width + c] = hydAt(v) < 0 ? 2 : 1;
    }
  }
  return {
    ok: true,
    tube_mm: tubeMm,
    theta_max: thMax,
    n_fluid: nf,
    n_in: nIn,
    n_out: nOut,
    frac_in: nIn / nf,
    el_pct: pct(nElIn, nIn),
    turns,
    bins,
    view: { profile30, stretch: { width, height, cls, deg_per_px: STRETCH_DEG, mm_per_px: STRETCH_STEP_MM }, out: Float32Array.from(outList) }
  };
}
function skeletonNormConfidence({ fit, fracIn, scale, warnings = [] }) {
  let lvl = 0;
  const reasons = [], notes = [], up = (l, r) => {
    reasons.push(r);
    if (l > lvl) lvl = l;
  };
  if (Number.isFinite(fit) && fit < SKELETON_NORM_FIT_LOW) up(2, "fit_low");
  if (Number.isFinite(fracIn)) {
    if (fracIn < SKELETON_NORM_IN_LOW) up(2, "inside_low");
    else if (fracIn < SKELETON_NORM_IN_MID) up(1, "inside_mid");
  }
  if (Number.isFinite(scale) && (scale - SKELETON_SCALE_MIN <= SCALE_EDGE || SKELETON_SCALE_MAX - scale <= SCALE_EDGE)) notes.push("scale_limit");
  if (warnings.includes("skeleton_deviation")) up(2, "skeleton_deviation");
  if (warnings.includes("skeleton_updown_reversed")) up(2, "skeleton_updown_reversed");
  return { level: ["high", "mid", "low"][lvl], reasons, notes };
}
function skeletonScale(skeleton, template) {
  const len = (P) => {
    let t = 0;
    for (let k = 3; k < P.length; k += 3) t += Math.hypot(P[k] - P[k - 3], P[k + 1] - P[k - 2], P[k + 2] - P[k - 1]);
    return t;
  };
  if (!skeleton || !skeleton.ok || !skeleton.points || !template || !template.points) return null;
  const lt = len(template.points);
  return lt > 0 ? len(skeleton.points) / lt : null;
}

// portable/src/lumen/cochlea.js
var ISO_HALF_MM = 7;
var ISO_STEP_MM = 0.2;
var THR_FRAC = 0.35;
var LABEL_DILATE = 2;
var MIN_FLUID = 10;
var SCORE_STEP_DEG = 2;
var TRIM_STEP_DEG = 0.5;
var S_STEP = 0.1;
var REF_ITERS = 10;
var REF_RADIUS = 0.8;
var REF_GRID = 0.1;
var REF_MAX_STEP = 0.25;
var REF_SIGMA_MM = 0.5;
var REF_DRIFT = 0.9;
var V_MIN = -1.6;
var V_STEP = 0.05;
var V_COUNT = 65;
var METRIC_RADIUS = 1.6;
var BASAL_DEG = 360;
var BIN_DEG = 90;
var RADIUS_RULE_PCT = 15;
var HIGH_RESIDUAL_MM = 1.2;
var SHORT_LENGTH_MM = 15;
var LONG_LENGTH_MM = 40;
var IAC_MARGIN_MM = 4;
var UNEXPLAINED_DIST_MM = 1.6;
var UNEXPLAINED_WARN_PCT = 10;
var APEX_DEVIATION_DEG = 30;
var APEX_MAX_DIST_MM = 12;
var APEX_MIN_DIST_MM = 1;
var dot5 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
var unit5 = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 0];
};
var toWorld = (A, i, j, k) => [0, 1, 2].map((r) => A[r][0] * i + A[r][1] * j + A[r][2] * k + A[r][3]);
function eigSym3(m) {
  const a = m.map((r) => r.slice()), V = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  for (let sweep = 0; sweep < 50; sweep++) {
    if (a[0][1] ** 2 + a[0][2] ** 2 + a[1][2] ** 2 < 1e-30) break;
    for (const [p, q] of [[0, 1], [0, 2], [1, 2]]) {
      if (a[p][q] === 0) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]), t = (th >= 0 ? 1 : -1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < 3; k++) {
        const x = a[k][p], y = a[k][q];
        a[k][p] = c * x - s * y;
        a[k][q] = s * x + c * y;
      }
      for (let k = 0; k < 3; k++) {
        const x = a[p][k], y = a[q][k];
        a[p][k] = c * x - s * y;
        a[q][k] = s * x + c * y;
      }
      for (let k = 0; k < 3; k++) {
        const x = V[k][p], y = V[k][q];
        V[k][p] = c * x - s * y;
        V[k][q] = s * x + c * y;
      }
    }
  }
  return { values: [a[0][0], a[1][1], a[2][2]], vectors: [0, 1, 2].map((j) => [V[0][j], V[1][j], V[2][j]]) };
}
function tangents(C) {
  const n = C.length / 3, T = new Float64Array(3 * n);
  for (let i = 0; i < n; i++) {
    const a = i === 0 ? 0 : i - 1, b = i === n - 1 ? n - 1 : i + 1, d = unit5([C[3 * b] - C[3 * a], C[3 * b + 1] - C[3 * a + 1], C[3 * b + 2] - C[3 * a + 2]]);
    T[3 * i] = d[0];
    T[3 * i + 1] = d[1];
    T[3 * i + 2] = d[2];
  }
  return T;
}
function frameAt(T, i, axis, A, N) {
  const t = [T[3 * i], T[3 * i + 1], T[3 * i + 2]], d = dot5(t, axis);
  let a = unit5([axis[0] - d * t[0], axis[1] - d * t[1], axis[2] - d * t[2]]);
  if (!a[0] && !a[1] && !a[2]) a = spiralBasis(t).u;
  A[3 * i] = a[0];
  A[3 * i + 1] = a[1];
  A[3 * i + 2] = a[2];
  N[3 * i] = t[1] * a[2] - t[2] * a[1];
  N[3 * i + 1] = t[2] * a[0] - t[0] * a[2];
  N[3 * i + 2] = t[0] * a[1] - t[1] * a[0];
}
function resample(q, step) {
  const n = q.length / 3, seg = new Float64Array(n);
  for (let i = 1; i < n; i++) seg[i] = seg[i - 1] + Math.hypot(q[3 * i] - q[3 * i - 3], q[3 * i + 1] - q[3 * i - 2], q[3 * i + 2] - q[3 * i - 1]);
  const L = seg[n - 1], m = Math.max(1, Math.ceil(L / step - 1e-9)), C = new Float64Array(3 * m);
  let j = 0;
  for (let k = 0; k < m; k++) {
    const s = k * step;
    while (j < n - 2 && seg[j + 1] < s) j++;
    const span = n > 1 ? seg[j + 1] - seg[j] : 0, t = span > 0 ? Math.min(1, (s - seg[j]) / span) : 0, b = n > 1 ? j + 1 : j;
    for (let c = 0; c < 3; c++) C[3 * k + c] = q[3 * j + c] + t * (q[3 * b + c] - q[3 * j + c]);
  }
  return { C, L };
}
function smooth(C, sigma) {
  const n = C.length / 3, rad = Math.floor(4 * sigma + 0.5), w = new Float64Array(2 * rad + 1);
  let ws = 0;
  for (let x = -rad; x <= rad; x++) {
    w[x + rad] = Math.exp(-0.5 * x * x / (sigma * sigma));
    ws += w[x + rad];
  }
  const out = new Float64Array(3 * n);
  for (let i = 0; i < n; i++) for (let x = -rad; x <= rad; x++) {
    const j = Math.min(n - 1, Math.max(0, i + x)), f = w[x + rad] / ws;
    out[3 * i] += f * C[3 * j];
    out[3 * i + 1] += f * C[3 * j + 1];
    out[3 * i + 2] += f * C[3 * j + 2];
  }
  return out;
}
function refine(C0, axis, sampler, thr) {
  const n = C0.length / 3, du = [], dv = [], h = Math.round(REF_RADIUS / REF_GRID);
  for (let b = -h; b <= h; b++) for (let a = -h; a <= h; a++) {
    const x = a * REF_GRID, y = b * REF_GRID;
    if (x * x + y * y <= REF_RADIUS * REF_RADIUS + 1e-9) {
      du.push(x);
      dv.push(y);
    }
  }
  const nd = du.length, pts = new Float64Array(3 * n * nd), A = new Float64Array(3 * n), N = new Float64Array(3 * n);
  let C = Float64Array.from(C0);
  for (let it = 0; it < REF_ITERS; it++) {
    const T = tangents(C);
    for (let i = 0; i < n; i++) {
      frameAt(T, i, axis, A, N);
      for (let d = 0; d < nd; d++) for (let c = 0; c < 3; c++) pts[3 * (i * nd + d) + c] = C[3 * i + c] + du[d] * N[3 * i + c] + dv[d] * A[3 * i + c];
    }
    const mm = sampler.sample(pts), moved = new Float64Array(3 * n);
    for (let i = 0; i < n; i++) {
      let sw = 1e-9, su = 0, sv = 0;
      for (let d = 0; d < nd; d++) {
        const w = mm[i * nd + d] - thr;
        if (w > 0) {
          sw += w;
          su += w * du[d];
          sv += w * dv[d];
        }
      }
      su /= sw;
      sv /= sw;
      const f = Math.min(1, REF_MAX_STEP / Math.max(Math.hypot(su, sv), 1e-9));
      for (let c = 0; c < 3; c++) moved[3 * i + c] = C[3 * i + c] + f * (su * N[3 * i + c] + sv * A[3 * i + c]);
    }
    C = smooth(moved, REF_SIGMA_MM / S_STEP);
    for (let i = 0; i < n; i++) {
      const d = [C[3 * i] - C0[3 * i], C[3 * i + 1] - C0[3 * i + 1], C[3 * i + 2] - C0[3 * i + 2]], dn = Math.hypot(d[0], d[1], d[2]);
      if (dn > REF_DRIFT) for (let c = 0; c < 3; c++) C[3 * i + c] = C0[3 * i + c] + d[c] * REF_DRIFT / dn;
    }
  }
  return C;
}
function startPoint(fl2, P, mv, dims, gridPts, vestWorld) {
  const nf = fl2.length, [nx, ny, nz] = dims, tg = [];
  for (let i = 0; i < mv.length; i++) {
    if (!mv[i]) continue;
    const x = i % nx, y = Math.floor(i / nx) % ny, z = Math.floor(i / (nx * ny));
    const edge = x === 0 || y === 0 || z === 0 || x === nx - 1 || y === ny - 1 || z === nz - 1 || !mv[i - 1] || !mv[i + 1] || !mv[i - nx] || !mv[i + nx] || !mv[i - nx * ny] || !mv[i + nx * ny];
    if (edge) tg.push(gridPts[3 * i], gridPts[3 * i + 1], gridPts[3 * i + 2]);
  }
  const targets = tg.length ? tg : vestWorld;
  if (!targets.length) return null;
  const d2 = new Float64Array(nf);
  let dmin = Infinity;
  for (let f = 0; f < nf; f++) {
    let b = Infinity;
    if (tg.length && mv[fl2[f]]) b = 0;
    else {
      const x = P[3 * f], y = P[3 * f + 1], z = P[3 * f + 2];
      for (let t = 0; t < targets.length; t += 3) {
        const d = (targets[t] - x) ** 2 + (targets[t + 1] - y) ** 2 + (targets[t + 2] - z) ** 2;
        if (d < b) b = d;
      }
    }
    d2[f] = b;
    if (b < dmin) dmin = b;
  }
  const tied = [], cen = [0, 0, 0];
  for (let f = 0; f < nf; f++) if (d2[f] <= dmin + 1e-6) {
    tied.push(f);
    for (let c = 0; c < 3; c++) cen[c] += P[3 * f + c];
  }
  for (let c = 0; c < 3; c++) cen[c] /= tied.length;
  let best = tied[0], bd = Infinity;
  for (const f of tied) {
    const d = (P[3 * f] - cen[0]) ** 2 + (P[3 * f + 1] - cen[1]) ** 2 + (P[3 * f + 2] - cen[2]) ** 2;
    if (d < bd) {
      bd = d;
      best = f;
    }
  }
  return [P[3 * best], P[3 * best + 1], P[3 * best + 2]];
}
function apexDeviationDeg(axis, center, apexWorld) {
  const d = [apexWorld[0] - center[0], apexWorld[1] - center[1], apexWorld[2] - center[2]], n = Math.hypot(d[0], d[1], d[2]) * Math.hypot(axis[0], axis[1], axis[2]);
  return n ? Math.acos(Math.max(-1, Math.min(1, dot5(axis, d) / n))) * 180 / Math.PI : 0;
}
function lateralSign(c, side, seedWorld) {
  const lc2 = side === "R" ? 1 : 3, lo = side === "R" ? 3 : 1, sv = c.seeds && c.seeds[lc2], so = c.seeds && c.seeds[lo];
  const s = seedWorld || sv && toWorld(c.affine, ...sv);
  const lateral = s && so ? Math.sign(s[0] - toWorld(c.affine, ...so)[0]) : 0;
  return lateral || (side === "R" ? 1 : -1);
}
function basalUpperMetrics(all, basal) {
  const upper = all.map((v, i) => v - basal[i]);
  const pct2 = (t) => t[0] + t[2] ? 100 * (t[1] + t[3]) / (t[0] + t[2]) : null;
  const bp = pct2(basal), up = pct2(upper);
  return {
    basal_counts: basal.slice(),
    upper_counts: upper,
    basal_n_voxels: basal[0] + basal[2],
    upper_n_voxels: upper[0] + upper[2],
    basal_EL_pct: bp,
    upper_EL_pct: up,
    basal_minus_upper_pct: bp !== null && up !== null ? bp - up : null,
    basal_P_SV_over_P_ST: basal[2] - basal[3] ? (basal[0] - basal[1]) / (basal[2] - basal[3]) : null
  };
}
function lumenCochlea(c, side, { flip = false, template, _normFail = false } = {}) {
  if (side !== "R" && side !== "L") throw new Error(`side must be 'R' or 'L' (got ${side})`);
  const lc2 = side === "R" ? 1 : 3, lv = lc2 + 1;
  const { shape, affine, labels } = c, mrc = c.images.mrc, hyd = c.images.hydrops, [nx, ny] = shape, warnings = [];
  const lab = [], vest = [];
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === lc2) lab.push(i);
    else if (labels[i] === lv) vest.push(i);
  }
  if (!lab.length) throw new Error(`\u8778\u725B\u306E\u30E9\u30D9\u30EB\u304C\u3042\u308A\u307E\u305B\u3093 (cochlea label ${lc2} is empty)`);
  const ijk = (i) => [i % nx, Math.floor(i / nx) % ny, Math.floor(i / (nx * ny))];
  const vestWorld = [];
  for (const i of vest) vestWorld.push(...toWorld(affine, ...ijk(i)));
  let seedVox = c.seeds && c.seeds[lc2];
  if (!seedVox) {
    seedVox = [0, 0, 0];
    for (const i of lab) {
      const v2 = ijk(i);
      for (let k = 0; k < 3; k++) seedVox[k] += v2[k] / lab.length;
    }
  }
  const seed = toWorld(affine, ...seedVox);
  const apexVox = c.apex && c.apex[side], apexW = apexVox ? toWorld(affine, ...apexVox) : null;
  if (apexW && Math.hypot(apexW[0] - seed[0], apexW[1] - seed[1], apexW[2] - seed[2]) > APEX_MAX_DIST_MM) throw new Error(`\u8778\u725B\u9802\u304C\u8778\u725B\u304B\u3089\u96E2\u308C\u3059\u304E\u3066\u3044\u307E\u3059 (apex point is more than ${APEX_MAX_DIST_MM} mm from the cochlea seed)`);
  const mrcS = makeSampler(mrc, shape, affine), hydS = makeSampler(hyd, shape, affine), labS = makeSampler(labels, shape, affine);
  const grid = isoGrid(seed, ISO_HALF_MM, ISO_STEP_MM), M = mrcS.sample(grid.points), Lg = labS.nearest(grid.points), ng = M.length;
  const mc = new Uint8Array(ng), mv = new Uint8Array(ng);
  for (let i = 0; i < ng; i++) {
    mc[i] = Lg[i] === lc2 ? 1 : 0;
    mv[i] = Lg[i] === lv ? 1 : 0;
  }
  const dil = dilate(mc, grid.dims, LABEL_DILATE), inDil = [];
  for (let i = 0; i < ng; i++) if (dil[i]) inDil.push(M[i]);
  if (!inDil.length) throw new Error(`\u8778\u725B\u306E\u30E9\u30D9\u30EB\u304C\u683C\u5B50\u306E\u5916\u306B\u3042\u308A\u307E\u3059 (cochlea label ${lc2} is outside the 7 mm grid around the seed)`);
  const thr = THR_FRAC * percentile(inDil, 99), raw = new Uint8Array(ng);
  for (let i = 0; i < ng; i++) raw[i] = dil[i] && M[i] > thr ? 1 : 0;
  const lateral = lateralSign(c, side, seed);
  const fluid = largestComponent(raw, grid.dims), fl2 = [];
  for (let i = 0; i < ng; i++) if (fluid[i] && (grid.points[3 * i] - seed[0]) * lateral >= -IAC_MARGIN_MM) fl2.push(i);
  const nf = fl2.length;
  if (nf < MIN_FLUID) throw new Error(`\u8778\u725B\u306E\u6DB2\u4F53\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (fewer than ${MIN_FLUID} fluid voxels in label ${lc2})`);
  const P = new Float64Array(3 * nf), Mf = new Float64Array(nf);
  for (let f = 0; f < nf; f++) {
    const g = fl2[f];
    P[3 * f] = grid.points[3 * g];
    P[3 * f + 1] = grid.points[3 * g + 1];
    P[3 * f + 2] = grid.points[3 * g + 2];
    Mf[f] = M[g];
  }
  const p99 = percentile(Mf, 99), W = new Float32Array(nf);
  let ws = 0;
  const center0 = [0, 0, 0];
  for (let f = 0; f < nf; f++) {
    W[f] = Math.min(1, Math.max(0.05, Mf[f] / p99));
    ws += W[f];
    for (let k = 0; k < 3; k++) center0[k] += W[f] * P[3 * f + k];
  }
  for (let k = 0; k < 3; k++) center0[k] /= ws;
  const cov = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let f = 0; f < nf; f++) {
    const d = [P[3 * f] - center0[0], P[3 * f + 1] - center0[1], P[3 * f + 2] - center0[2]];
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) cov[a][b] += W[f] * d[a] * d[b] / ws;
  }
  const eg = eigSym3(cov), imin = eg.values.indexOf(Math.min(...eg.values));
  let axis0 = unit5(eg.vectors[imin]);
  if (apexW) {
    const da = [apexW[0] - center0[0], apexW[1] - center0[1], apexW[2] - center0[2]];
    if (Math.hypot(da[0], da[1], da[2]) < APEX_MIN_DIST_MM) throw new Error(`\u8778\u725B\u9802\u304C\u8778\u725B\u306E\u4E2D\u5FC3\u306B\u8FD1\u3059\u304E\u307E\u3059 (apex point is within ${APEX_MIN_DIST_MM.toFixed(1)} mm of the cochlear fluid centroid)`);
    axis0 = unit5(da);
  }
  let start = startPoint(fl2, P, mv, grid.dims, grid.points, vestWorld);
  if (!start) {
    warnings.push("start_without_vestibule");
    let br = -1;
    for (let f = 0; f < nf; f++) {
      const d = [P[3 * f] - center0[0], P[3 * f + 1] - center0[1], P[3 * f + 2] - center0[2]], h = dot5(d, axis0), r = d[0] ** 2 + d[1] ** 2 + d[2] ** 2 - h * h;
      if (r > br) {
        br = r;
        start = [P[3 * f], P[3 * f + 1], P[3 * f + 2]];
      }
    }
  }
  const score = (p) => {
    const mm = mrcS.sample(spiralCurve(p, SCORE_STEP_DEG).points);
    let k = 0;
    for (let i = 0; i < mm.length; i++) if (mm[i] > thr) k++;
    return k / mm.length * Math.min(p.phiMax, 900) / 900 - 0.3 * p.residual;
  };
  const fit = fitSpiral({ points: P, weights: W, start, axis0, center0, score });
  const anatRaw = fit.axis[0] * lateral >= 0 ? 1 : -1;
  const H = new Float64Array(nf), Rr = new Float64Array(nf);
  for (let f = 0; f < nf; f++) {
    const d = [P[3 * f] - fit.center[0], P[3 * f + 1] - fit.center[1], P[3 * f + 2] - fit.center[2]], h = dot5(d, fit.axis);
    H[f] = h;
    Rr[f] = Math.sqrt(Math.max(0, d[0] ** 2 + d[1] ** 2 + d[2] ** 2 - h * h));
  }
  const hLo = percentile(H, RADIUS_RULE_PCT), hHi = percentile(H, 100 - RADIUS_RULE_PCT);
  let rt = 0, nt = 0, rb = 0, nb = 0;
  for (let f = 0; f < nf; f++) {
    if (H[f] >= hHi) {
      rt += Rr[f];
      nt++;
    }
    if (H[f] <= hLo) {
      rb += Rr[f];
      nb++;
    }
  }
  const radRaw = rt / nt < rb / nb ? 1 : -1, conflict = !apexW && anatRaw !== radRaw;
  if (conflict) warnings.push("orientation_conflict");
  const sg = apexW ? dot5(fit.axis, [apexW[0] - fit.center[0], apexW[1] - fit.center[1], apexW[2] - fit.center[2]]) >= 0 ? 1 : -1 : anatRaw * (flip ? -1 : 1), axis = fit.axis.map((v2) => v2 * sg), anatomical = anatRaw * sg, radiusRule = radRaw * sg;
  const apexDev = apexW ? apexDeviationDeg(axis, fit.center, apexW) : null;
  if (apexDev > APEX_DEVIATION_DEG) warnings.push("apex_axis_deviation");
  const cur = spiralCurve(fit, TRIM_STEP_DEG).points, mq = mrcS.sample(cur);
  let last = -1;
  for (let i = 0; i < mq.length; i++) if (mq[i] > thr) last = i;
  if (last < 1) throw new Error("\u8778\u725B\u306E\u4E2D\u5FC3\u7DDA\u304C\u6DB2\u4F53\u306E\u5916\u306B\u3042\u308A\u307E\u3059 (fitted spiral does not pass through the fluid)");
  const C0 = resample(cur.subarray(0, 3 * (last + 1)), S_STEP).C;
  if (C0.length < 6) throw new Error("\u8778\u725B\u306E\u4E2D\u5FC3\u7DDA\u304C\u77ED\u3059\u304E\u307E\u3059 (centerline shorter than 0.2 mm)");
  const ref = resample(refine(C0, axis, mrcS, thr), S_STEP), C = ref.C, n = C.length / 3;
  if (n < 2) throw new Error("\u8778\u725B\u306E\u4E2D\u5FC3\u7DDA\u304C\u77ED\u3059\u304E\u307E\u3059 (centerline shorter than 0.2 mm)");
  const T = tangents(C), A = new Float64Array(3 * n), N = new Float64Array(3 * n), radialDot = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    frameAt(T, i, axis, A, N);
    const d = [C[3 * i] - fit.center[0], C[3 * i + 1] - fit.center[1], C[3 * i + 2] - fit.center[2]], h = dot5(d, axis);
    radialDot[i] = N[3 * i] * (d[0] - h * axis[0]) + N[3 * i + 1] * (d[1] - h * axis[1]) + N[3 * i + 2] * (d[2] - h * axis[2]);
  }
  if (percentile(radialDot, 50) < 0) for (let i = 0; i < 3 * n; i++) N[i] = -N[i];
  const { u, v } = spiralBasis(axis), theta = new Float64Array(n), s = new Float64Array(n);
  let prev = 0, acc = 0, a0 = 0;
  for (let i = 0; i < n; i++) {
    const d = [C[3 * i] - fit.center[0], C[3 * i + 1] - fit.center[1], C[3 * i + 2] - fit.center[2]], ang = Math.atan2(dot5(d, v), dot5(d, u));
    if (i === 0) {
      a0 = ang;
      acc = ang;
    } else {
      let dd = ang - prev;
      dd -= 2 * Math.PI * Math.round(dd / (2 * Math.PI));
      acc += dd;
    }
    prev = ang;
    theta[i] = Math.abs(acc - a0) * 180 / Math.PI;
    s[i] = i * S_STEP;
  }
  const sp = new Float64Array(3 * n * V_COUNT);
  for (let r = 0; r < V_COUNT; r++) {
    const vv = V_MIN + r * V_STEP;
    for (let k = 0; k < n; k++) for (let q = 0; q < 3; q++) sp[3 * (r * n + k) + q] = C[3 * k + q] + vv * A[3 * k + q];
  }
  const stretch = { width: n, height: V_COUNT, vMin: V_MIN, vStep: V_STEP, sStep: S_STEP, thr, mrc: mrcS.sample(sp), hydrops: hydS.sample(sp) };
  const lo3 = [Infinity, Infinity, Infinity], hi3 = [-Infinity, -Infinity, -Infinity];
  for (let k = 0; k < n; k++) for (let q = 0; q < 3; q++) {
    lo3[q] = Math.min(lo3[q], C[3 * k + q] - METRIC_RADIUS);
    hi3[q] = Math.max(hi3[q], C[3 * k + q] + METRIC_RADIUS);
  }
  const r2 = METRIC_RADIUS * METRIC_RADIUS, u2 = UNEXPLAINED_DIST_MM * UNEXPLAINED_DIST_MM;
  let nFluid = 0, nUnexplained = 0;
  const unexpl = [];
  const aK = new Int32Array(lab.length), aO = new Uint8Array(lab.length), aNeg = new Uint8Array(lab.length);
  let na = 0;
  for (const idx2 of lab) {
    if (!(mrc[idx2] > thr)) continue;
    nFluid++;
    const p = toWorld(affine, ...ijk(idx2));
    if (p[0] < lo3[0] || p[1] < lo3[1] || p[2] < lo3[2] || p[0] > hi3[0] || p[1] > hi3[1] || p[2] > hi3[2]) {
      nUnexplained++;
      unexpl.push(idx2);
      continue;
    }
    let bk = -1, bd = Infinity;
    for (let k = 0; k < n; k++) {
      const d = (p[0] - C[3 * k]) ** 2 + (p[1] - C[3 * k + 1]) ** 2 + (p[2] - C[3 * k + 2]) ** 2;
      if (d < bd) {
        bd = d;
        bk = k;
      }
    }
    if (bd > u2) {
      nUnexplained++;
      unexpl.push(idx2);
    }
    if (bd > r2) continue;
    const up = (p[0] - C[3 * bk]) * A[3 * bk] + (p[1] - C[3 * bk + 1]) * A[3 * bk + 1] + (p[2] - C[3 * bk + 2]) * A[3 * bk + 2];
    if (up === 0) continue;
    aK[na] = bk;
    aO[na] = up > 0 ? 0 : 2;
    aNeg[na] = hyd[idx2] < 0 ? 1 : 0;
    na++;
  }
  let theta0 = Infinity;
  for (let a = 0; a < na; a++) if (theta[aK[a]] < theta0) theta0 = theta[aK[a]];
  if (!na) theta0 = 0;
  const thetaP = new Float64Array(n);
  for (let i = 0; i < n; i++) thetaP[i] = theta[i] - theta0;
  const turns = Math.max(...thetaP), nbin = Math.max(1, Math.ceil(turns / BIN_DEG - 1e-9));
  const cnt = { all: [0, 0, 0, 0], basal: [0, 0, 0, 0] }, bins = Array.from({ length: nbin }, () => [0, 0, 0, 0]);
  for (let a = 0; a < na; a++) {
    const t = thetaP[aK[a]], o = aO[a], neg = aNeg[a], b = Math.max(0, Math.min(nbin - 1, Math.floor(t / BIN_DEG)));
    for (const x of t <= BASAL_DEG ? [cnt.all, cnt.basal, bins[b]] : [cnt.all, bins[b]]) {
      x[o]++;
      x[o + 1] += neg;
    }
  }
  const E = (t, o) => t[o] ? t[o + 1] / t[o] : null;
  const derived = basalUpperMetrics(cnt.all, cnt.basal);
  const length_mm = ref.L;
  const metrics = {
    length_mm,
    turns_deg: turns,
    E_SV: E(cnt.all, 0),
    E_ST: E(cnt.all, 2),
    basal_E_SV: E(cnt.basal, 0),
    basal_E_ST: E(cnt.basal, 2),
    bins: bins.map((t, b) => ({ from_deg: b * BIN_DEG, to_deg: (b + 1) * BIN_DEG, E_SV: E(t, 0), E_ST: E(t, 2), n_SV: t[0], n_ST: t[2] })),
    n_voxels: cnt.all[0] + cnt.all[2],
    unexplained_fluid_pct: nFluid ? 100 * nUnexplained / nFluid : null,
    ...derived,
    theta0_deg: theta0
  };
  if (fit.residual > HIGH_RESIDUAL_MM) warnings.push("high_residual");
  if (length_mm < SHORT_LENGTH_MM) warnings.push("short_centerline");
  if (length_mm > LONG_LENGTH_MM) warnings.push("long_centerline");
  if (metrics.unexplained_fluid_pct > UNEXPLAINED_WARN_PCT) warnings.push("unexplained_fluid");
  const seedsWorld = {};
  for (const k of [1, 2, 3, 4]) if (c.seeds && c.seeds[k]) seedsWorld[k] = toWorld(c.affine, ...c.seeds[k]);
  const oc = orientationCheck(C, axis, side, seedsWorld, metrics.turns_deg);
  warnings.push(...oc.warnings);
  const hf = headFrame(seedsWorld), cands = [];
  if (hf) {
    const Lt = side === "R" ? hf.lat : hf.lat.map((x) => -x), An = hf.post.map((x) => -x);
    cands.push(unit5([Lt[0] + An[0], Lt[1] + An[1], Lt[2] + An[2]]));
  }
  cands.push(fit.axis, fit.axis.map((x) => -x), axis0, axis0.map((x) => -x));
  const skTpl = skeletonTemplate(side, template ?? SKELETON_TEMPLATE);
  const sk = skeletonCheck({ tpl: skTpl, sample: fluidRestrictedSampler((p) => mrcS.sample(p), { origin: seed.map((v2) => v2 - ISO_HALF_MM), step: ISO_STEP_MM, dims: grid.dims }, fl2), thr, p99, center0, axisCandidates: cands, C, theta: thetaP, axis, fluid: P });
  warnings.push(...sk.warnings);
  let norm2;
  try {
    if (_normFail) throw new Error("normalization failed (test)");
    norm2 = skeletonNormalize({ skeleton: sk.skeleton, labels, label: lc2, hydrops: hyd, affine, shape });
    if (norm2.ok) {
      norm2.scale = skeletonScale(sk.skeleton, skTpl);
      norm2.confidence = skeletonNormConfidence({ fit: sk.values.skeleton_fit, fracIn: norm2.frac_in, scale: norm2.scale, warnings: sk.warnings });
      norm2.rule = skeletonNormRule();
    }
  } catch (e) {
    norm2 = { ok: false, error: String(e && e.message || e) };
  }
  if (norm2.ok && norm2.confidence.level === "low") warnings.push("skeleton_norm_low_confidence");
  const nv = norm2.ok ? {
    skeleton_norm_el_pct: norm2.el_pct,
    skeleton_norm_basal_el_pct: norm2.turns.basal.el_pct,
    skeleton_norm_middle_el_pct: norm2.turns.middle.el_pct,
    skeleton_norm_apical_el_pct: norm2.turns.apical.el_pct,
    skeleton_norm_out_pct: 100 * norm2.n_out / norm2.n_fluid,
    skeleton_norm_confidence: norm2.confidence.level,
    skeleton_norm_tube_mm: norm2.tube_mm
  } : { skeleton_norm_el_pct: null, skeleton_norm_basal_el_pct: null, skeleton_norm_middle_el_pct: null, skeleton_norm_apical_el_pct: null, skeleton_norm_out_pct: null, skeleton_norm_confidence: null, skeleton_norm_tube_mm: null };
  return {
    side,
    centerline: C,
    theta: thetaP,
    s,
    axis,
    orientation: {
      anatomical,
      radiusRule,
      conflict,
      flipped: !apexW && !!flip,
      source: apexW ? "apex" : "rules",
      apex_deviation_deg: apexDev,
      winding_deg: oc.winding_deg,
      winding_ok: oc.winding_ok,
      axis_az_deg: oc.axis_az_deg,
      axis_el_deg: oc.axis_el_deg,
      axis_off45_deg: oc.axis_off45_deg,
      ...sk.values,
      ...nv
    },
    fit: { residual_mm: fit.residual, score: score(fit) },
    frames: { A, N },
    stretch,
    metrics,
    warnings,
    unexplained_voxels: Int32Array.from(unexpl),
    skeleton: sk.skeleton,
    norm: norm2
  };
}

// portable/src/lumen/vestibule.js
var THR_FRAC2 = 0.35;
var TAU_FRAC = 0.1;
var TAU_PCT = 95;
var LAT0 = -87;
var LAT_STEP = 3;
var N_LAT = 59;
var LON0 = -180;
var N_LON = 121;
var R_STEP = 0.05;
var N_R = 101;
var RIM_OFFSET = 0.025;
var LOSS_MM = 0.3;
var REACH_MM = 0.2;
var MANY_OPENINGS = 0.3;
var MIN_OPENING_AREA_DEG2 = 30;
var D2R2 = Math.PI / 180;
var dot6 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
var unit6 = (a) => {
  const n = Math.hypot(a[0], a[1], a[2]);
  return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 0];
};
var orth = (v, basis) => {
  let w = v.slice();
  for (const b of basis) {
    const d = dot6(w, b);
    w = [w[0] - d * b[0], w[1] - d * b[1], w[2] - d * b[2]];
  }
  return unit6(w);
};
var latWeight = (q) => Math.cos((LAT0 + Math.floor(q / N_LON) * LAT_STEP) * D2R2);
var seam = (q) => q % N_LON === N_LON - 1;
function vestibuleRimStats(rim, opening, latSel) {
  let loss = 0, wNon = 0, wOpen = 0, wAll = 0;
  const keep = [], wk = /* @__PURE__ */ new Map();
  for (let q = 0; q < rim.length; q++) {
    if (seam(q)) continue;
    if (latSel && !latSel(Math.floor(q / N_LON))) continue;
    const w = latWeight(q);
    wAll += w;
    if (opening[q]) wOpen += w;
    else {
      wNon += w;
      keep.push(q);
      wk.set(q, w);
      if (rim[q] < LOSS_MM) loss += w;
    }
  }
  keep.sort((a, b) => rim[a] - rim[b]);
  let median2 = null, cum = 0;
  for (const q of keep) {
    cum += wk.get(q);
    if (cum >= 0.5 * wNon) {
      median2 = rim[q];
      break;
    }
  }
  return { rim_median_mm: median2, rim_loss_area_pct: wNon ? 100 * loss / wNon : null, opening_fraction: wAll ? wOpen / wAll : null };
}
function lumenVestibule(c, side) {
  if (side !== "R" && side !== "L") throw new Error(`side must be 'R' or 'L' (got ${side})`);
  const lv = side === "R" ? 2 : 4, { shape, affine, labels } = c, mrc = c.images.mrc, hyd = c.images.hydrops, [nx, ny] = shape, warnings = [];
  const lab = [], lmask = new Uint8Array(labels.length);
  for (let i = 0; i < labels.length; i++) if (labels[i] === lv) {
    lab.push(i);
    lmask[i] = 1;
  }
  if (!lab.length) throw new Error(`\u524D\u5EAD\u306E\u30E9\u30D9\u30EB\u304C\u3042\u308A\u307E\u305B\u3093 (vestibule label ${lv} is empty)`);
  const toWorld3 = (i) => {
    const x = i % nx, y = Math.floor(i / nx) % ny, z = Math.floor(i / (nx * ny));
    return [0, 1, 2].map((r) => affine[r][0] * x + affine[r][1] * y + affine[r][2] * z + affine[r][3]);
  };
  const mv = lab.map((i) => mrc[i]), thr = THR_FRAC2 * percentile(mv, 99);
  const cen = [0, 0, 0], fw = [];
  let nf = 0;
  for (const i of lab) if (mrc[i] > thr) {
    const w = toWorld3(i);
    fw.push(w[0], w[1], w[2]);
    cen[0] += w[0];
    cen[1] += w[1];
    cen[2] += w[2];
    nf++;
  }
  if (!nf) throw new Error(`\u524D\u5EAD\u306E\u6DB2\u4F53\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (no fluid voxels in vestibule label ${lv})`);
  for (let k = 0; k < 3; k++) cen[k] /= nf;
  const mS = makeSampler(mrc, shape, affine), hS = makeSampler(hyd, shape, affine), rS = makeSampler(dilate(lmask, shape, 1), shape, affine);
  {
    const c0 = Float64Array.from(cen);
    if (!(rS.nearest(c0)[0] > 0.5 && mS.sample(c0)[0] > thr)) {
      let best = 0, bd = Infinity;
      for (let f = 0; f < nf; f++) {
        const d = (fw[3 * f] - cen[0]) ** 2 + (fw[3 * f + 1] - cen[1]) ** 2 + (fw[3 * f + 2] - cen[2]) ** 2;
        if (d < bd) {
          bd = d;
          best = f;
        }
      }
      cen[0] = fw[3 * best];
      cen[1] = fw[3 * best + 1];
      cen[2] = fw[3 * best + 2];
      warnings.push("center_moved");
    }
  }
  const pos = [];
  for (const i of lab) if (hyd[i] > 0) pos.push(hyd[i]);
  let tau = 0;
  if (pos.length) tau = TAU_FRAC * percentile(pos, TAU_PCT);
  else warnings.push("no_positive_hydrops");
  const lateral = lateralSign(c, side), ant = [0, 1, 0], sup = orth([0, 0, 1], [ant]), lat = orth([lateral, 0, 0], [ant, sup]);
  const nd = N_LAT * N_LON, pts = new Float64Array(3 * nd * N_R);
  for (let a = 0; a < N_LAT; a++) {
    const la = (LAT0 + a * LAT_STEP) * D2R2;
    for (let b = 0; b < N_LON; b++) {
      const lo = (LON0 + b * LAT_STEP) * D2R2, cc = Math.cos(la) * Math.cos(lo), cs = Math.cos(la) * Math.sin(lo), ss = Math.sin(la);
      const d = [cc * ant[0] + cs * lat[0] + ss * sup[0], cc * ant[1] + cs * lat[1] + ss * sup[1], cc * ant[2] + cs * lat[2] + ss * sup[2]], o = 3 * (a * N_LON + b) * N_R;
      for (let r = 0; r < N_R; r++) for (let k = 0; k < 3; k++) pts[o + 3 * r + k] = cen[k] + r * R_STEP * d[k];
    }
  }
  const M = mS.sample(pts), H = hS.sample(pts), Rg = rS.nearest(pts);
  const rim = new Float32Array(nd), frac = new Float32Array(nd), opening = new Uint8Array(nd), reach = new Uint8Array(nd);
  const reachN = Math.round(REACH_MM / R_STEP);
  for (let q = 0; q < nd; q++) {
    const o = q * N_R;
    let ex = N_R - 1;
    for (let r = 0; r < N_R; r++) if (!(Rg[o + r] > 0.5 && M[o + r] > thr)) {
      ex = r;
      break;
    }
    const wall = ex * R_STEP;
    opening[q] = M[o + ex] > thr && !(Rg[o + ex] > 0.5) ? 1 : 0;
    let last = -1, n = 0, near = false;
    for (let r = 0; r < ex; r++) if (H[o + r] < -tau) {
      last = r;
      n++;
      if (ex - r <= reachN) near = true;
    }
    rim[q] = Math.max(0, wall - (last >= 0 ? last * R_STEP + RIM_OFFSET : 0));
    frac[q] = n / Math.max(ex, 1);
    if (opening[q] && near) reach[q] = 1;
  }
  const comp = new Int32Array(nd).fill(-1), openings = [], small = [];
  const nb = (q) => {
    const a = Math.floor(q / N_LON), b = q % N_LON, r = [];
    if (a > 0) r.push(q - N_LON);
    if (a < N_LAT - 1) r.push(q + N_LON);
    r.push(b > 0 ? q - 1 : q + N_LON - 2);
    r.push(b < N_LON - 1 ? q + 1 : q - N_LON + 2);
    if (b === 0) r.push(q + N_LON - 1);
    if (b === N_LON - 1) r.push(q - N_LON + 1);
    return r;
  };
  for (let s = 0; s < nd; s++) {
    if (!opening[s] || comp[s] >= 0) continue;
    const id = openings.length + small.length, stack = [s], cells = [];
    comp[s] = id;
    while (stack.length) {
      const q = stack.pop();
      cells.push(q);
      for (const p of nb(q)) if (opening[p] && comp[p] < 0) {
        comp[p] = id;
        stack.push(p);
      }
    }
    let sl = 0, sc = 0, ss = 0, er = false, area = 0, nc = 0;
    for (const q of cells) {
      if (seam(q)) continue;
      area += 9 * latWeight(q);
      sl += LAT0 + Math.floor(q / N_LON) * LAT_STEP;
      const lo = (LON0 + q % N_LON * LAT_STEP) * D2R2;
      sc += Math.cos(lo);
      ss += Math.sin(lo);
      nc++;
      if (reach[q]) er = true;
    }
    if (area < MIN_OPENING_AREA_DEG2) {
      small.push(cells);
      continue;
    }
    openings.push({ lat: sl / nc, lon: Math.atan2(ss, sc) / D2R2, area_deg2: area, endolymph_reaches: er });
  }
  for (const cells of small) for (const q of cells) {
    opening[q] = 0;
    reach[q] = 0;
  }
  const st = vestibuleRimStats(rim, opening);
  if (st.opening_fraction > MANY_OPENINGS) warnings.push("many_openings");
  return {
    side,
    center: cen,
    frame: { anterior: ant, lateral: lat, superior: sup },
    lat: Float32Array.from({ length: N_LAT }, (_, i) => LAT0 + i * LAT_STEP),
    lon: Float32Array.from({ length: N_LON }, (_, i) => LON0 + i * LAT_STEP),
    map: { rim, frac, opening, endoReachesOpening: reach },
    metrics: {
      rim_median_mm: st.rim_median_mm,
      rim_loss_area_pct: st.rim_loss_area_pct,
      n_openings: openings.length,
      openings,
      rim_loss_upper_pct: vestibuleRimStats(rim, opening, (a) => LAT0 + a * LAT_STEP > 0).rim_loss_area_pct,
      rim_loss_lower_pct: vestibuleRimStats(rim, opening, (a) => LAT0 + a * LAT_STEP < 0).rim_loss_area_pct
    },
    warnings
  };
}

// portable/src/lumen/index.js
function computeLumen(c, side, { flip = false } = {}) {
  const run = (f) => {
    try {
      return f();
    } catch (e) {
      return { error: e instanceof Error ? e.message : String(e) };
    }
  };
  return { side, revision: c.revision, flip: !!flip, cochlea: run(() => lumenCochlea(c, side, { flip })), vestibule: run(() => lumenVestibule(c, side)) };
}
var LUMEN_CSV_FIELDS = ["side", "structure", "length_mm", "turns_deg", "E_SV", "E_ST", "basal_E_SV", "basal_E_ST", "unexplained_fluid_pct", "rim_median_mm", "rim_loss_area_pct", "n_openings", "openings_with_endolymph", "orientation_conflict", "flipped", "apex_set", "warnings", "studio_version", "csf_removal", "excluded_reason", "basal_EL_pct", "upper_EL_pct", "basal_minus_upper_pct", "basal_P_SV_over_P_ST", "basal_n_voxels", "upper_n_voxels", "rim_loss_upper_pct", "rim_loss_lower_pct", "theta0_deg", "input_mode", "winding_deg", "axis_az_deg", "axis_el_deg", "axis_off45_deg", "skeleton_fit", "skeleton_dev_max_mm", "skeleton_out_from_deg", "skeleton_axis_angle_deg", "skeleton_norm_el_pct", "skeleton_norm_basal_el_pct", "skeleton_norm_middle_el_pct", "skeleton_norm_apical_el_pct", "skeleton_norm_out_pct", "skeleton_norm_confidence", "skeleton_norm_tube_mm"];
var LUMEN_BINS_CSV_FIELDS = ["side", "from_deg", "to_deg", "vox_in", "vox_el", "vox_out", "smp_in", "smp_el", "tube_mm", "confidence", "studio_version"];
var LUMEN_BIN_KEYS = ["vox_in", "vox_el", "vox_out", "smp_in", "smp_el"];
function lumenEntry(c, side) {
  const e = c.lumen && c.lumen[side];
  if (e && e.revision === c.revision) return { e, restored: false };
  const s = c.lumenSaved && c.lumenSaved[side];
  if (s && s.revision === c.revision) return { e: s, restored: true };
  return null;
}
var LUMEN_EXCLUDE_REASONS = ["implant", "csf_not_removable", "out_of_fov", "other"];
var lumenManualDefaults = () => ({ R: { csf_not_needed: false, excluded: null }, L: { csf_not_needed: false, excluded: null } });
function lumenExcluded(x) {
  if (x === null) return null;
  if (!x || typeof x !== "object" || !LUMEN_EXCLUDE_REASONS.includes(x.reason)) throw Error("\u9664\u5916\u306E\u7406\u7531\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  const note = x.reason === "other" && typeof x.note === "string" ? x.note.trim().replace(/[\r\n]+/g, " ") : "";
  if (note.length > 80) throw Error("\u7406\u7531\u306E\u30E1\u30E2\u306F80\u5B57\u307E\u3067\u3067\u3059\u3002");
  return { reason: x.reason, note };
}
function lumenManualRestore(m) {
  const out = lumenManualDefaults();
  if (!m || typeof m !== "object" || Array.isArray(m)) return out;
  for (const side of ["R", "L"]) {
    const v = m[side];
    if (!v || typeof v !== "object") continue;
    if (v.csf_not_needed === true) out[side].csf_not_needed = true;
    if (v.excluded && typeof v.excluded === "object") {
      try {
        out[side].excluded = lumenExcluded(v.excluded);
      } catch {
      }
    }
  }
  return out;
}
function lumenManualStatus(c) {
  const out = {};
  for (const [side, label] of [["R", 1], ["L", 3]]) {
    const m = c.lumen_manual && c.lumen_manual[side] || { csf_not_needed: false, excluded: null };
    const done = (c.two_plane_edits || []).some((e) => e && e.label === label && e.count >= 1);
    out[side] = { csf: done ? "done" : m.csf_not_needed ? "not_needed" : "none", apex: !!(c.apex && c.apex[side]), excluded: m.excluded };
  }
  return out;
}
var LUMEN_IMAGE_KINDS = { C: "cochlea", V: "vestibule", NORM_SPIRAL: "norm", NORM_STRETCH: "norm", NORM_PROFILE: "norm" };
var LUMEN_IMAGE_FILES = Object.fromEntries(["R", "L"].map((side) => [side, Object.fromEntries(Object.keys(LUMEN_IMAGE_KINDS).map((kind) => [kind, `LUMEN_${kind}_${side}.png`]))]));
function lumenImagePlan(c) {
  const part = (r, key) => {
    if (!r || r.error) return { ok: false, value: null, warnings: r && Array.isArray(r.warnings) ? r.warnings.length : 0 };
    const v = r.metrics && r.metrics[key];
    return { ok: true, value: Number.isFinite(v) ? v : null, warnings: Array.isArray(r.warnings) ? r.warnings.length : 0 };
  };
  const normPart = (r) => {
    const warnings = r && Array.isArray(r.warnings) ? r.warnings.length : 0, no = (state) => ({ ok: false, value: null, level: null, warnings, state });
    if (!r) return no("none");
    if (r.error) return no("error");
    const n = r.norm || r.skeleton_norm;
    if (!n) return no("absent");
    if (n.ok !== true) return no(n.error ? "norm_error" : "failed");
    const level = n.confidence && typeof n.confidence.level === "string" ? n.confidence.level : null;
    const notes = n.confidence && Array.isArray(n.confidence.notes) ? [...n.confidence.notes] : [];
    return { ok: true, value: Number.isFinite(n.el_pct) ? n.el_pct : null, level, scale: Number.isFinite(n.scale) ? n.scale : null, notes, warnings, state: "ok" };
  };
  const out = {};
  for (const side of ["R", "L"]) {
    const none = { source: "none", revision: null, flip: null, cochlea: part(null), vestibule: part(null), norm: normPart(null) };
    if (lumenManualStatus(c)[side].excluded) {
      out[side] = { ...none, source: "excluded" };
      continue;
    }
    const x = lumenEntry(c, side);
    if (!x) {
      out[side] = none;
      continue;
    }
    const e = x.e;
    out[side] = { source: x.restored ? "restored" : "current", revision: e.revision, flip: typeof e.flip === "boolean" ? e.flip : null, cochlea: part(e.cochlea, "basal_EL_pct"), vestibule: part(e.vestibule, "rim_loss_area_pct"), norm: normPart(e.cochlea) };
  }
  return out;
}
function lumenExportRows(c, version = "dev") {
  const rows = [];
  for (const side of ["R", "L"]) {
    const st = lumenManualStatus(c)[side], csf = st.csf === "none" ? "" : st.csf;
    if (st.excluded) {
      for (const structure of ["cochlea", "vestibule"]) {
        const row = { side, structure, warnings: "\u89E3\u6790\u5BFE\u8C61\u5916", excluded_reason: st.excluded.reason, studio_version: version };
        if (structure === "cochlea") {
          row.apex_set = !!(c.apex && c.apex[side]);
          row.csf_removal = csf;
        }
        rows.push(row);
      }
      continue;
    }
    const x = lumenEntry(c, side);
    if (!x) continue;
    const e = x.e, v = x.restored && typeof e.studio_version === "string" ? e.studio_version : version;
    for (const structure of ["cochlea", "vestibule"]) {
      const r = e[structure], row = { side, structure, studio_version: v, excluded_reason: "", csf_removal: structure === "cochlea" ? csf : "" };
      if (!r || r.error) {
        row.warnings = r ? r.error : "";
        if (structure === "cochlea") row.apex_set = !!(c.apex && c.apex[side]);
        rows.push(row);
        continue;
      }
      const m = r.metrics;
      row.warnings = (r.warnings || []).join(";");
      if (structure === "cochlea") {
        for (const k of ["length_mm", "turns_deg", "E_SV", "E_ST", "basal_E_SV", "basal_E_ST", "unexplained_fluid_pct", "basal_EL_pct", "upper_EL_pct", "basal_minus_upper_pct", "basal_P_SV_over_P_ST", "basal_n_voxels", "upper_n_voxels", "theta0_deg"]) row[k] = m[k];
        row.orientation_conflict = r.orientation.conflict;
        row.flipped = r.orientation.flipped;
        row.apex_set = r.orientation.source === "apex";
        for (const k of ["winding_deg", "axis_az_deg", "axis_el_deg", "axis_off45_deg"]) row[k] = r.orientation[k];
        for (const k of ["skeleton_norm_el_pct", "skeleton_norm_basal_el_pct", "skeleton_norm_middle_el_pct", "skeleton_norm_apical_el_pct", "skeleton_norm_out_pct", "skeleton_norm_confidence", "skeleton_norm_tube_mm"]) row[k] = r.orientation[k];
        for (const k of ["skeleton_fit", "skeleton_dev_max_mm", "skeleton_out_from_deg", "skeleton_axis_angle_deg"]) row[k] = r.orientation[k];
      } else {
        row.rim_median_mm = m.rim_median_mm;
        row.rim_loss_area_pct = m.rim_loss_area_pct;
        row.rim_loss_upper_pct = m.rim_loss_upper_pct;
        row.rim_loss_lower_pct = m.rim_loss_lower_pct;
        row.n_openings = m.n_openings;
        row.openings_with_endolymph = m.openings.filter((o) => o.endolymph_reaches).length;
      }
      rows.push(row);
    }
  }
  const mode = typeof c.input_mode === "string" && c.input_mode ? c.input_mode : "ppi_pei";
  for (const row of rows) row.input_mode = mode;
  return rows;
}
function plainNorm(n) {
  if (!n) return void 0;
  if (!n.ok) return { ok: false, error: n.error ?? null };
  const bins = { deg: n.bins.deg };
  for (const k of LUMEN_BIN_KEYS) bins[k] = Array.from(n.bins[k]);
  return {
    ok: true,
    tube_mm: n.tube_mm,
    theta_max: n.theta_max,
    n_fluid: n.n_fluid,
    n_in: n.n_in,
    n_out: n.n_out,
    frac_in: n.frac_in,
    el_pct: n.el_pct,
    turns: n.turns,
    confidence: { level: n.confidence.level, reasons: [...n.confidence.reasons], notes: [...n.confidence.notes || []] },
    scale: n.scale,
    ...n.rule ? { rule: { ...n.rule } } : {},
    bins
  };
}
function lumenBinRows(c, version = "dev") {
  const rows = [];
  for (const side of ["R", "L"]) {
    if (lumenManualStatus(c)[side].excluded) continue;
    const x = lumenEntry(c, side);
    if (!x) continue;
    const r = x.e.cochlea;
    if (!r || r.error) continue;
    const n = x.restored ? r.skeleton_norm : plainNorm(r.norm), b = n && n.ok && n.bins;
    if (!b || !Number.isFinite(b.deg) || !n.confidence || !LUMEN_BIN_KEYS.every((k) => Array.isArray(b[k]) && b[k].length === b.vox_in.length)) continue;
    const v = x.restored && typeof x.e.studio_version === "string" ? x.e.studio_version : version;
    for (let i = 0; i < b.vox_in.length; i++) rows.push({ side, from_deg: i * b.deg, to_deg: (i + 1) * b.deg, ...Object.fromEntries(LUMEN_BIN_KEYS.map((k) => [k, b[k][i]])), tube_mm: n.tube_mm, confidence: n.confidence.level, studio_version: v });
  }
  return rows;
}
function lumenReport(c, version = "dev") {
  const out = {};
  for (const side of ["R", "L"]) {
    const ex = c.lumen_manual && c.lumen_manual[side] && c.lumen_manual[side].excluded;
    if (ex) {
      out[side] = { excluded: { reason: ex.reason, note: ex.note }, revision: c.revision, studio_version: version };
      continue;
    }
    const x = lumenEntry(c, side);
    if (!x) continue;
    if (x.restored) {
      out[side] = { ...x.e, restored: true };
      continue;
    }
    const e = x.e, part = (r, pick) => !r ? null : r.error ? { error: r.error } : pick(r);
    out[side] = {
      revision: e.revision,
      flip: !!e.flip,
      studio_version: version,
      cochlea: part(e.cochlea, (r) => ({ metrics: r.metrics, orientation: r.orientation, fit: r.fit, warnings: r.warnings, skeleton_norm: plainNorm(r.norm) })),
      vestibule: part(e.vestibule, (r) => ({ metrics: r.metrics, warnings: r.warnings }))
    };
  }
  return out;
}
function lumenRestore(lumen) {
  const saved = {}, flip = { R: false, L: false };
  const obj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
  const okPart = (r, cochlea) => r === null || obj(r) && (typeof r.error === "string" || obj(r.metrics) && Array.isArray(r.warnings) && (cochlea ? obj(r.orientation) : Array.isArray(r.metrics.openings)));
  if (!obj(lumen)) return { saved, flip };
  for (const side of ["R", "L"]) {
    const s = lumen[side];
    if (!obj(s) || s.excluded && !s.cochlea && !s.vestibule || !Number.isInteger(s.revision) || !okPart(s.cochlea ?? null, true) || !okPart(s.vestibule ?? null, false)) continue;
    saved[side] = s;
    flip[side] = typeof s.flip === "boolean" ? s.flip : !!(obj(s.cochlea) && obj(s.cochlea.orientation) && s.cochlea.orientation.flipped === true);
  }
  return { saved, flip };
}

// portable/vendor/atlas_vsseg_mean.json
var atlas_vsseg_mean_default = [{ ears: [{ side: "R", center_fraction: [0.5, 0.5, 0.5], center_offset: [35.30310901109297, -7.200136631483645, -11.949076360548027], offsets: [[-10, -10, -8], [-8, -10, -8], [-6, -10, -8], [-4, -10, -8], [-2, -10, -8], [0, -10, -8], [2, -10, -8], [4, -10, -8], [6, -10, -8], [8, -10, -8], [10, -10, -8], [-10, -8, -8], [-8, -8, -8], [-6, -8, -8], [-4, -8, -8], [-2, -8, -8], [0, -8, -8], [2, -8, -8], [4, -8, -8], [6, -8, -8], [8, -8, -8], [10, -8, -8], [-10, -6, -8], [-8, -6, -8], [-6, -6, -8], [-4, -6, -8], [-2, -6, -8], [0, -6, -8], [2, -6, -8], [4, -6, -8], [6, -6, -8], [8, -6, -8], [10, -6, -8], [-10, -4, -8], [-8, -4, -8], [-6, -4, -8], [-4, -4, -8], [-2, -4, -8], [0, -4, -8], [2, -4, -8], [4, -4, -8], [6, -4, -8], [8, -4, -8], [10, -4, -8], [-10, -2, -8], [-8, -2, -8], [-6, -2, -8], [-4, -2, -8], [-2, -2, -8], [0, -2, -8], [2, -2, -8], [4, -2, -8], [6, -2, -8], [8, -2, -8], [10, -2, -8], [-10, 0, -8], [-8, 0, -8], [-6, 0, -8], [-4, 0, -8], [-2, 0, -8], [0, 0, -8], [2, 0, -8], [4, 0, -8], [6, 0, -8], [8, 0, -8], [10, 0, -8], [-10, 2, -8], [-8, 2, -8], [-6, 2, -8], [-4, 2, -8], [-2, 2, -8], [0, 2, -8], [2, 2, -8], [4, 2, -8], [6, 2, -8], [8, 2, -8], [10, 2, -8], [-10, 4, -8], [-8, 4, -8], [-6, 4, -8], [-4, 4, -8], [-2, 4, -8], [0, 4, -8], [2, 4, -8], [4, 4, -8], [6, 4, -8], [8, 4, -8], [10, 4, -8], [-10, 6, -8], [-8, 6, -8], [-6, 6, -8], [-4, 6, -8], [-2, 6, -8], [0, 6, -8], [2, 6, -8], [4, 6, -8], [6, 6, -8], [8, 6, -8], [10, 6, -8], [-10, 8, -8], [-8, 8, -8], [-6, 8, -8], [-4, 8, -8], [-2, 8, -8], [0, 8, -8], [2, 8, -8], [4, 8, -8], [6, 8, -8], [8, 8, -8], [10, 8, -8], [-10, 10, -8], [-8, 10, -8], [-6, 10, -8], [-4, 10, -8], [-2, 10, -8], [0, 10, -8], [2, 10, -8], [4, 10, -8], [6, 10, -8], [8, 10, -8], [10, 10, -8], [-10, -10, -6], [-8, -10, -6], [-6, -10, -6], [-4, -10, -6], [-2, -10, -6], [0, -10, -6], [2, -10, -6], [4, -10, -6], [6, -10, -6], [8, -10, -6], [10, -10, -6], [-10, -8, -6], [-8, -8, -6], [-6, -8, -6], [-4, -8, -6], [-2, -8, -6], [0, -8, -6], [2, -8, -6], [4, -8, -6], [6, -8, -6], [8, -8, -6], [10, -8, -6], [-10, -6, -6], [-8, -6, -6], [-6, -6, -6], [-4, -6, -6], [-2, -6, -6], [0, -6, -6], [2, -6, -6], [4, -6, -6], [6, -6, -6], [8, -6, -6], [10, -6, -6], [-10, -4, -6], [-8, -4, -6], [-6, -4, -6], [-4, -4, -6], [-2, -4, -6], [0, -4, -6], [2, -4, -6], [4, -4, -6], [6, -4, -6], [8, -4, -6], [10, -4, -6], [-10, -2, -6], [-8, -2, -6], [-6, -2, -6], [-4, -2, -6], [-2, -2, -6], [0, -2, -6], [2, -2, -6], [4, -2, -6], [6, -2, -6], [8, -2, -6], [10, -2, -6], [-10, 0, -6], [-8, 0, -6], [-6, 0, -6], [-4, 0, -6], [-2, 0, -6], [0, 0, -6], [2, 0, -6], [4, 0, -6], [6, 0, -6], [8, 0, -6], [10, 0, -6], [-10, 2, -6], [-8, 2, -6], [-6, 2, -6], [-4, 2, -6], [-2, 2, -6], [0, 2, -6], [2, 2, -6], [4, 2, -6], [6, 2, -6], [8, 2, -6], [10, 2, -6], [-10, 4, -6], [-8, 4, -6], [-6, 4, -6], [-4, 4, -6], [-2, 4, -6], [0, 4, -6], [2, 4, -6], [4, 4, -6], [6, 4, -6], [8, 4, -6], [10, 4, -6], [-10, 6, -6], [-8, 6, -6], [-6, 6, -6], [-4, 6, -6], [-2, 6, -6], [0, 6, -6], [2, 6, -6], [4, 6, -6], [6, 6, -6], [8, 6, -6], [10, 6, -6], [-10, 8, -6], [-8, 8, -6], [-6, 8, -6], [-4, 8, -6], [-2, 8, -6], [0, 8, -6], [2, 8, -6], [4, 8, -6], [6, 8, -6], [8, 8, -6], [10, 8, -6], [-10, 10, -6], [-8, 10, -6], [-6, 10, -6], [-4, 10, -6], [-2, 10, -6], [0, 10, -6], [2, 10, -6], [4, 10, -6], [6, 10, -6], [8, 10, -6], [10, 10, -6], [-10, -10, -4], [-8, -10, -4], [-6, -10, -4], [-4, -10, -4], [-2, -10, -4], [0, -10, -4], [2, -10, -4], [4, -10, -4], [6, -10, -4], [8, -10, -4], [10, -10, -4], [-10, -8, -4], [-8, -8, -4], [-6, -8, -4], [-4, -8, -4], [-2, -8, -4], [0, -8, -4], [2, -8, -4], [4, -8, -4], [6, -8, -4], [8, -8, -4], [10, -8, -4], [-10, -6, -4], [-8, -6, -4], [-6, -6, -4], [-4, -6, -4], [-2, -6, -4], [0, -6, -4], [2, -6, -4], [4, -6, -4], [6, -6, -4], [8, -6, -4], [10, -6, -4], [-10, -4, -4], [-8, -4, -4], [-6, -4, -4], [-4, -4, -4], [-2, -4, -4], [0, -4, -4], [2, -4, -4], [4, -4, -4], [6, -4, -4], [8, -4, -4], [10, -4, -4], [-10, -2, -4], [-8, -2, -4], [-6, -2, -4], [-4, -2, -4], [-2, -2, -4], [0, -2, -4], [2, -2, -4], [4, -2, -4], [6, -2, -4], [8, -2, -4], [10, -2, -4], [-10, 0, -4], [-8, 0, -4], [-6, 0, -4], [-4, 0, -4], [-2, 0, -4], [0, 0, -4], [2, 0, -4], [4, 0, -4], [6, 0, -4], [8, 0, -4], [10, 0, -4], [-10, 2, -4], [-8, 2, -4], [-6, 2, -4], [-4, 2, -4], [-2, 2, -4], [0, 2, -4], [2, 2, -4], [4, 2, -4], [6, 2, -4], [8, 2, -4], [10, 2, -4], [-10, 4, -4], [-8, 4, -4], [-6, 4, -4], [-4, 4, -4], [-2, 4, -4], [0, 4, -4], [2, 4, -4], [4, 4, -4], [6, 4, -4], [8, 4, -4], [10, 4, -4], [-10, 6, -4], [-8, 6, -4], [-6, 6, -4], [-4, 6, -4], [-2, 6, -4], [0, 6, -4], [2, 6, -4], [4, 6, -4], [6, 6, -4], [8, 6, -4], [10, 6, -4], [-10, 8, -4], [-8, 8, -4], [-6, 8, -4], [-4, 8, -4], [-2, 8, -4], [0, 8, -4], [2, 8, -4], [4, 8, -4], [6, 8, -4], [8, 8, -4], [10, 8, -4], [-10, 10, -4], [-8, 10, -4], [-6, 10, -4], [-4, 10, -4], [-2, 10, -4], [0, 10, -4], [2, 10, -4], [4, 10, -4], [6, 10, -4], [8, 10, -4], [10, 10, -4], [-10, -10, -2], [-8, -10, -2], [-6, -10, -2], [-4, -10, -2], [-2, -10, -2], [0, -10, -2], [2, -10, -2], [4, -10, -2], [6, -10, -2], [8, -10, -2], [10, -10, -2], [-10, -8, -2], [-8, -8, -2], [-6, -8, -2], [-4, -8, -2], [-2, -8, -2], [0, -8, -2], [2, -8, -2], [4, -8, -2], [6, -8, -2], [8, -8, -2], [10, -8, -2], [-10, -6, -2], [-8, -6, -2], [-6, -6, -2], [-4, -6, -2], [-2, -6, -2], [0, -6, -2], [2, -6, -2], [4, -6, -2], [6, -6, -2], [8, -6, -2], [10, -6, -2], [-10, -4, -2], [-8, -4, -2], [-6, -4, -2], [-4, -4, -2], [-2, -4, -2], [0, -4, -2], [2, -4, -2], [4, -4, -2], [6, -4, -2], [8, -4, -2], [10, -4, -2], [-10, -2, -2], [-8, -2, -2], [-6, -2, -2], [-4, -2, -2], [-2, -2, -2], [0, -2, -2], [2, -2, -2], [4, -2, -2], [6, -2, -2], [8, -2, -2], [10, -2, -2], [-10, 0, -2], [-8, 0, -2], [-6, 0, -2], [-4, 0, -2], [-2, 0, -2], [0, 0, -2], [2, 0, -2], [4, 0, -2], [6, 0, -2], [8, 0, -2], [10, 0, -2], [-10, 2, -2], [-8, 2, -2], [-6, 2, -2], [-4, 2, -2], [-2, 2, -2], [0, 2, -2], [2, 2, -2], [4, 2, -2], [6, 2, -2], [8, 2, -2], [10, 2, -2], [-10, 4, -2], [-8, 4, -2], [-6, 4, -2], [-4, 4, -2], [-2, 4, -2], [0, 4, -2], [2, 4, -2], [4, 4, -2], [6, 4, -2], [8, 4, -2], [10, 4, -2], [-10, 6, -2], [-8, 6, -2], [-6, 6, -2], [-4, 6, -2], [-2, 6, -2], [0, 6, -2], [2, 6, -2], [4, 6, -2], [6, 6, -2], [8, 6, -2], [10, 6, -2], [-10, 8, -2], [-8, 8, -2], [-6, 8, -2], [-4, 8, -2], [-2, 8, -2], [0, 8, -2], [2, 8, -2], [4, 8, -2], [6, 8, -2], [8, 8, -2], [10, 8, -2], [-10, 10, -2], [-8, 10, -2], [-6, 10, -2], [-4, 10, -2], [-2, 10, -2], [0, 10, -2], [2, 10, -2], [4, 10, -2], [6, 10, -2], [8, 10, -2], [10, 10, -2], [-10, -10, 0], [-8, -10, 0], [-6, -10, 0], [-4, -10, 0], [-2, -10, 0], [0, -10, 0], [2, -10, 0], [4, -10, 0], [6, -10, 0], [8, -10, 0], [10, -10, 0], [-10, -8, 0], [-8, -8, 0], [-6, -8, 0], [-4, -8, 0], [-2, -8, 0], [0, -8, 0], [2, -8, 0], [4, -8, 0], [6, -8, 0], [8, -8, 0], [10, -8, 0], [-10, -6, 0], [-8, -6, 0], [-6, -6, 0], [-4, -6, 0], [-2, -6, 0], [0, -6, 0], [2, -6, 0], [4, -6, 0], [6, -6, 0], [8, -6, 0], [10, -6, 0], [-10, -4, 0], [-8, -4, 0], [-6, -4, 0], [-4, -4, 0], [-2, -4, 0], [0, -4, 0], [2, -4, 0], [4, -4, 0], [6, -4, 0], [8, -4, 0], [10, -4, 0], [-10, -2, 0], [-8, -2, 0], [-6, -2, 0], [-4, -2, 0], [-2, -2, 0], [0, -2, 0], [2, -2, 0], [4, -2, 0], [6, -2, 0], [8, -2, 0], [10, -2, 0], [-10, 0, 0], [-8, 0, 0], [-6, 0, 0], [-4, 0, 0], [-2, 0, 0], [0, 0, 0], [2, 0, 0], [4, 0, 0], [6, 0, 0], [8, 0, 0], [10, 0, 0], [-10, 2, 0], [-8, 2, 0], [-6, 2, 0], [-4, 2, 0], [-2, 2, 0], [0, 2, 0], [2, 2, 0], [4, 2, 0], [6, 2, 0], [8, 2, 0], [10, 2, 0], [-10, 4, 0], [-8, 4, 0], [-6, 4, 0], [-4, 4, 0], [-2, 4, 0], [0, 4, 0], [2, 4, 0], [4, 4, 0], [6, 4, 0], [8, 4, 0], [10, 4, 0], [-10, 6, 0], [-8, 6, 0], [-6, 6, 0], [-4, 6, 0], [-2, 6, 0], [0, 6, 0], [2, 6, 0], [4, 6, 0], [6, 6, 0], [8, 6, 0], [10, 6, 0], [-10, 8, 0], [-8, 8, 0], [-6, 8, 0], [-4, 8, 0], [-2, 8, 0], [0, 8, 0], [2, 8, 0], [4, 8, 0], [6, 8, 0], [8, 8, 0], [10, 8, 0], [-10, 10, 0], [-8, 10, 0], [-6, 10, 0], [-4, 10, 0], [-2, 10, 0], [0, 10, 0], [2, 10, 0], [4, 10, 0], [6, 10, 0], [8, 10, 0], [10, 10, 0], [-10, -10, 2], [-8, -10, 2], [-6, -10, 2], [-4, -10, 2], [-2, -10, 2], [0, -10, 2], [2, -10, 2], [4, -10, 2], [6, -10, 2], [8, -10, 2], [10, -10, 2], [-10, -8, 2], [-8, -8, 2], [-6, -8, 2], [-4, -8, 2], [-2, -8, 2], [0, -8, 2], [2, -8, 2], [4, -8, 2], [6, -8, 2], [8, -8, 2], [10, -8, 2], [-10, -6, 2], [-8, -6, 2], [-6, -6, 2], [-4, -6, 2], [-2, -6, 2], [0, -6, 2], [2, -6, 2], [4, -6, 2], [6, -6, 2], [8, -6, 2], [10, -6, 2], [-10, -4, 2], [-8, -4, 2], [-6, -4, 2], [-4, -4, 2], [-2, -4, 2], [0, -4, 2], [2, -4, 2], [4, -4, 2], [6, -4, 2], [8, -4, 2], [10, -4, 2], [-10, -2, 2], [-8, -2, 2], [-6, -2, 2], [-4, -2, 2], [-2, -2, 2], [0, -2, 2], [2, -2, 2], [4, -2, 2], [6, -2, 2], [8, -2, 2], [10, -2, 2], [-10, 0, 2], [-8, 0, 2], [-6, 0, 2], [-4, 0, 2], [-2, 0, 2], [0, 0, 2], [2, 0, 2], [4, 0, 2], [6, 0, 2], [8, 0, 2], [10, 0, 2], [-10, 2, 2], [-8, 2, 2], [-6, 2, 2], [-4, 2, 2], [-2, 2, 2], [0, 2, 2], [2, 2, 2], [4, 2, 2], [6, 2, 2], [8, 2, 2], [10, 2, 2], [-10, 4, 2], [-8, 4, 2], [-6, 4, 2], [-4, 4, 2], [-2, 4, 2], [0, 4, 2], [2, 4, 2], [4, 4, 2], [6, 4, 2], [8, 4, 2], [10, 4, 2], [-10, 6, 2], [-8, 6, 2], [-6, 6, 2], [-4, 6, 2], [-2, 6, 2], [0, 6, 2], [2, 6, 2], [4, 6, 2], [6, 6, 2], [8, 6, 2], [10, 6, 2], [-10, 8, 2], [-8, 8, 2], [-6, 8, 2], [-4, 8, 2], [-2, 8, 2], [0, 8, 2], [2, 8, 2], [4, 8, 2], [6, 8, 2], [8, 8, 2], [10, 8, 2], [-10, 10, 2], [-8, 10, 2], [-6, 10, 2], [-4, 10, 2], [-2, 10, 2], [0, 10, 2], [2, 10, 2], [4, 10, 2], [6, 10, 2], [8, 10, 2], [10, 10, 2], [-10, -10, 4], [-8, -10, 4], [-6, -10, 4], [-4, -10, 4], [-2, -10, 4], [0, -10, 4], [2, -10, 4], [4, -10, 4], [6, -10, 4], [8, -10, 4], [10, -10, 4], [-10, -8, 4], [-8, -8, 4], [-6, -8, 4], [-4, -8, 4], [-2, -8, 4], [0, -8, 4], [2, -8, 4], [4, -8, 4], [6, -8, 4], [8, -8, 4], [10, -8, 4], [-10, -6, 4], [-8, -6, 4], [-6, -6, 4], [-4, -6, 4], [-2, -6, 4], [0, -6, 4], [2, -6, 4], [4, -6, 4], [6, -6, 4], [8, -6, 4], [10, -6, 4], [-10, -4, 4], [-8, -4, 4], [-6, -4, 4], [-4, -4, 4], [-2, -4, 4], [0, -4, 4], [2, -4, 4], [4, -4, 4], [6, -4, 4], [8, -4, 4], [10, -4, 4], [-10, -2, 4], [-8, -2, 4], [-6, -2, 4], [-4, -2, 4], [-2, -2, 4], [0, -2, 4], [2, -2, 4], [4, -2, 4], [6, -2, 4], [8, -2, 4], [10, -2, 4], [-10, 0, 4], [-8, 0, 4], [-6, 0, 4], [-4, 0, 4], [-2, 0, 4], [0, 0, 4], [2, 0, 4], [4, 0, 4], [6, 0, 4], [8, 0, 4], [10, 0, 4], [-10, 2, 4], [-8, 2, 4], [-6, 2, 4], [-4, 2, 4], [-2, 2, 4], [0, 2, 4], [2, 2, 4], [4, 2, 4], [6, 2, 4], [8, 2, 4], [10, 2, 4], [-10, 4, 4], [-8, 4, 4], [-6, 4, 4], [-4, 4, 4], [-2, 4, 4], [0, 4, 4], [2, 4, 4], [4, 4, 4], [6, 4, 4], [8, 4, 4], [10, 4, 4], [-10, 6, 4], [-8, 6, 4], [-6, 6, 4], [-4, 6, 4], [-2, 6, 4], [0, 6, 4], [2, 6, 4], [4, 6, 4], [6, 6, 4], [8, 6, 4], [10, 6, 4], [-10, 8, 4], [-8, 8, 4], [-6, 8, 4], [-4, 8, 4], [-2, 8, 4], [0, 8, 4], [2, 8, 4], [4, 8, 4], [6, 8, 4], [8, 8, 4], [10, 8, 4], [-10, 10, 4], [-8, 10, 4], [-6, 10, 4], [-4, 10, 4], [-2, 10, 4], [0, 10, 4], [2, 10, 4], [4, 10, 4], [6, 10, 4], [8, 10, 4], [10, 10, 4], [-10, -10, 6], [-8, -10, 6], [-6, -10, 6], [-4, -10, 6], [-2, -10, 6], [0, -10, 6], [2, -10, 6], [4, -10, 6], [6, -10, 6], [8, -10, 6], [10, -10, 6], [-10, -8, 6], [-8, -8, 6], [-6, -8, 6], [-4, -8, 6], [-2, -8, 6], [0, -8, 6], [2, -8, 6], [4, -8, 6], [6, -8, 6], [8, -8, 6], [10, -8, 6], [-10, -6, 6], [-8, -6, 6], [-6, -6, 6], [-4, -6, 6], [-2, -6, 6], [0, -6, 6], [2, -6, 6], [4, -6, 6], [6, -6, 6], [8, -6, 6], [10, -6, 6], [-10, -4, 6], [-8, -4, 6], [-6, -4, 6], [-4, -4, 6], [-2, -4, 6], [0, -4, 6], [2, -4, 6], [4, -4, 6], [6, -4, 6], [8, -4, 6], [10, -4, 6], [-10, -2, 6], [-8, -2, 6], [-6, -2, 6], [-4, -2, 6], [-2, -2, 6], [0, -2, 6], [2, -2, 6], [4, -2, 6], [6, -2, 6], [8, -2, 6], [10, -2, 6], [-10, 0, 6], [-8, 0, 6], [-6, 0, 6], [-4, 0, 6], [-2, 0, 6], [0, 0, 6], [2, 0, 6], [4, 0, 6], [6, 0, 6], [8, 0, 6], [10, 0, 6], [-10, 2, 6], [-8, 2, 6], [-6, 2, 6], [-4, 2, 6], [-2, 2, 6], [0, 2, 6], [2, 2, 6], [4, 2, 6], [6, 2, 6], [8, 2, 6], [10, 2, 6], [-10, 4, 6], [-8, 4, 6], [-6, 4, 6], [-4, 4, 6], [-2, 4, 6], [0, 4, 6], [2, 4, 6], [4, 4, 6], [6, 4, 6], [8, 4, 6], [10, 4, 6], [-10, 6, 6], [-8, 6, 6], [-6, 6, 6], [-4, 6, 6], [-2, 6, 6], [0, 6, 6], [2, 6, 6], [4, 6, 6], [6, 6, 6], [8, 6, 6], [10, 6, 6], [-10, 8, 6], [-8, 8, 6], [-6, 8, 6], [-4, 8, 6], [-2, 8, 6], [0, 8, 6], [2, 8, 6], [4, 8, 6], [6, 8, 6], [8, 8, 6], [10, 8, 6], [-10, 10, 6], [-8, 10, 6], [-6, 10, 6], [-4, 10, 6], [-2, 10, 6], [0, 10, 6], [2, 10, 6], [4, 10, 6], [6, 10, 6], [8, 10, 6], [10, 10, 6], [-10, -10, 8], [-8, -10, 8], [-6, -10, 8], [-4, -10, 8], [-2, -10, 8], [0, -10, 8], [2, -10, 8], [4, -10, 8], [6, -10, 8], [8, -10, 8], [10, -10, 8], [-10, -8, 8], [-8, -8, 8], [-6, -8, 8], [-4, -8, 8], [-2, -8, 8], [0, -8, 8], [2, -8, 8], [4, -8, 8], [6, -8, 8], [8, -8, 8], [10, -8, 8], [-10, -6, 8], [-8, -6, 8], [-6, -6, 8], [-4, -6, 8], [-2, -6, 8], [0, -6, 8], [2, -6, 8], [4, -6, 8], [6, -6, 8], [8, -6, 8], [10, -6, 8], [-10, -4, 8], [-8, -4, 8], [-6, -4, 8], [-4, -4, 8], [-2, -4, 8], [0, -4, 8], [2, -4, 8], [4, -4, 8], [6, -4, 8], [8, -4, 8], [10, -4, 8], [-10, -2, 8], [-8, -2, 8], [-6, -2, 8], [-4, -2, 8], [-2, -2, 8], [0, -2, 8], [2, -2, 8], [4, -2, 8], [6, -2, 8], [8, -2, 8], [10, -2, 8], [-10, 0, 8], [-8, 0, 8], [-6, 0, 8], [-4, 0, 8], [-2, 0, 8], [0, 0, 8], [2, 0, 8], [4, 0, 8], [6, 0, 8], [8, 0, 8], [10, 0, 8], [-10, 2, 8], [-8, 2, 8], [-6, 2, 8], [-4, 2, 8], [-2, 2, 8], [0, 2, 8], [2, 2, 8], [4, 2, 8], [6, 2, 8], [8, 2, 8], [10, 2, 8], [-10, 4, 8], [-8, 4, 8], [-6, 4, 8], [-4, 4, 8], [-2, 4, 8], [0, 4, 8], [2, 4, 8], [4, 4, 8], [6, 4, 8], [8, 4, 8], [10, 4, 8], [-10, 6, 8], [-8, 6, 8], [-6, 6, 8], [-4, 6, 8], [-2, 6, 8], [0, 6, 8], [2, 6, 8], [4, 6, 8], [6, 6, 8], [8, 6, 8], [10, 6, 8], [-10, 8, 8], [-8, 8, 8], [-6, 8, 8], [-4, 8, 8], [-2, 8, 8], [0, 8, 8], [2, 8, 8], [4, 8, 8], [6, 8, 8], [8, 8, 8], [10, 8, 8], [-10, 10, 8], [-8, 10, 8], [-6, 10, 8], [-4, 10, 8], [-2, 10, 8], [0, 10, 8], [2, 10, 8], [4, 10, 8], [6, 10, 8], [8, 10, 8], [10, 10, 8]], values: [0.94, 1.11, 0.26, -0.31, -0.36, -0.53, -0.53, -0.38, -0.49, -0.52, -0.63, 0.53, -0.09, 0.06, 0.09, -0.32, -0.29, -0.39, -0.48, -0.14, -0.37, -0.56, 0.45, -0.12, 0.03, -0.07, -0.26, -0.33, -0.29, -0.45, -0.05, -0.23, -0.57, 1.03, -0.18, -0.29, -0.15, -0.33, -0.44, -0.4, -0.47, -0.52, -0.48, -0.55, 0.63, -0.07, -0.5, -0.46, -0.51, -0.47, -0.52, -0.56, -0.53, -0.55, -0.57, -0.05, -0.36, -0.24, -0.35, -0.39, -0.48, -0.56, -0.57, -0.6, -0.57, -0.48, -0.01, -0.16, -0.18, -0.17, -0.43, -0.51, -0.52, -0.48, -0.46, -0.46, -0.47, 0.17, 0.26, 1.67, 2.7, 0, -0.3, -0.2, -0.41, -0.27, -0.42, -0.47, 0.17, 0.39, 2.72, 3.28, 0.55, -0.31, -0.2, -0.1, -0.18, 0.05, -0.06, 0.28, 0.41, 0.97, 1.58, -0.19, -0.22, -0.12, 0.03, -0.09, -0.13, -0.01, 0.06, 0.14, 0.41, 0.02, -0.33, 0.02, -0.32, -0.23, -0.11, 0.28, 0.21, 1.86, 0.74, 0.49, 0.07, -0.39, -0.52, -0.51, -0.58, -0.53, -0.63, -0.66, 0.26, -0.52, -0.52, -0.45, -0.44, -0.38, -0.54, -0.54, -0.28, -0.59, -0.58, -0.23, -0.5, -0.45, -0.37, -0.39, -0.22, -0.45, -0.55, -0.19, -0.45, -0.65, 0.65, -0.12, -0.52, -0.42, -0.45, -0.58, -0.53, -0.52, -0.61, -0.55, -0.59, 0.05, -0.06, -0.56, -0.47, -0.54, -0.49, -0.53, -0.6, -0.62, -0.58, -0.52, -0.21, -0.37, -0.37, -0.58, -0.53, -0.35, -0.59, -0.6, -0.58, -0.6, -0.53, 0.13, 0.17, -0.22, -0.47, -0.24, -0.52, -0.57, -0.53, -0.56, -0.55, -0.55, 0.64, 0.41, 0.33, 0.84, -0.09, -0.44, -0.35, -0.47, -0.45, -0.41, -0.41, 0.75, 0.17, 1.42, 2.41, 0.39, -0.4, -0.39, -0.2, -0.25, -0.34, -0.32, 0.75, 0.7, 1.64, 2.02, 0.21, -0.38, -0.33, -0.01, 0.01, -0.13, -0.07, 0.87, 0.7, 1.27, 0.79, -0.36, -0.33, -0.38, -0.31, -0.15, -0.12, 0.1, 1.7, 1.27, 0.34, 0.07, -0.34, -0.33, -0.52, -0.63, -0.67, -0.65, -0.65, 0.9, -0.31, -0.66, -0.55, -0.54, -0.5, -0.67, -0.12, -0.54, -0.64, -0.68, -0.44, -0.53, -0.58, -0.62, -0.62, -0.64, 0.27, -0.59, -0.33, -0.3, -0.64, 0.62, 0.48, -0.24, -0.55, -0.56, -0.4, -0.52, -0.6, -0.46, -0.58, -0.64, -0.44, -0.46, -0.53, -0.59, -0.6, -0.5, -0.38, -0.65, -0.63, -0.61, -0.63, 0, -0.18, -0.48, -0.49, 0.04, 2.32, 0.07, -0.59, -0.56, -0.6, -0.59, 0.05, 0.06, -0.51, 1.59, 1.26, -0.4, -0.37, -0.59, -0.58, -0.56, -0.57, 0.52, 0.06, -0.25, 0.32, -0.17, -0.45, -0.58, -0.56, -0.54, -0.53, -0.44, 0.45, 0.09, 0.25, 1.08, 0.07, -0.38, -0.38, -0.47, -0.29, -0.4, -0.5, 0.63, 0.58, 1.7, 1.19, 0.05, -0.27, -0.35, -0.37, -0.37, -0.14, -0.18, 0.87, 1.23, 1.57, 0.75, -0.25, -0.32, -0.34, -0.4, -0.12, -0.18, -0.2, 1.97, 1.12, 0.94, 0.03, -0.51, -0.18, -0.55, -0.5, -0.61, -0.65, -0.7, 1.84, 0.2, -0.5, -0.6, -0.59, -0.62, -0.63, 0.5, -0.61, -0.67, -0.69, 0.68, -0.59, -0.63, -0.63, -0.65, -0.62, 0.42, -0.48, -0.59, -0.59, -0.67, -0.33, -0.59, -0.56, -0.68, -0.61, 1.24, 0.05, -0.64, -0.06, -0.46, -0.64, -0.36, -0.38, -0.31, -0.44, -0.54, 0.08, 1.24, -0.6, -0.46, -0.62, -0.66, -0.24, -0.24, 0.08, 0.14, 1.46, 0.39, 0.71, -0.56, -0.58, -0.59, -0.59, 0.27, -0.47, -0.61, 0.89, 0.89, 1.02, -0.5, -0.5, -0.56, -0.59, -0.59, 0.07, -0.44, -0.47, 2.45, 2.35, 1.36, -0.19, -0.59, -0.58, -0.56, -0.55, 0.34, -0.37, -0.16, 0, -0.28, -0.46, -0.16, -0.42, -0.17, -0.45, -0.55, 0.28, 0.06, 0.76, 0.29, -0.24, 0.04, -0.42, -0.33, -0.54, -0.44, -0.44, 0.49, 0.84, 0.83, 0.22, 0.05, -0.19, -0.15, -0.09, -0.33, -0.29, -0.41, 2.46, 1.65, 1.3, 0.6, -0.41, -0.42, -0.55, -0.36, -0.4, -0.65, -0.68, 3.22, 0.95, -0.24, -0.6, -0.66, -0.31, -0.66, -0.63, -0.67, -0.69, -0.69, 2.84, -0.13, -0.62, -0.67, -0.68, -0.5, 0.43, 1.25, 0.37, -0.65, -0.7, 1.22, -0.3, -0.65, -0.68, -0.68, 3.12, 3.11, -0.67, -0.35, -0.3, -0.68, 1.08, 0.7, 1.21, 1.5, 0.35, 1.51, 3.74, -0.16, 0.14, -0.61, -0.64, 0.78, 1.56, 1.72, 2.37, 2.86, 0.19, 0.63, -0.36, -0.63, -0.6, -0.67, -0.3, -0.52, -0.56, -0.53, 0.91, 2.08, -0.59, -0.15, -0.61, -0.59, -0.61, 0.19, -0.55, -0.57, 2.75, 2.04, 0.96, 0.01, -0.55, -0.59, -0.56, -0.65, 0.15, -0.12, -0.31, -0.38, -0.5, -0.22, -0.17, -0.49, -0.49, -0.45, -0.55, 0.03, 0.16, 0.1, 0.3, 0.13, -0.01, -0.25, -0.27, -0.33, -0.26, -0.28, 0.61, 0.89, 0.85, 0.3, 0.2, 0.08, 0.13, 0.23, 0.21, 0.04, 0.3, 2.73, 2.59, 1.98, 0.89, 0.23, -0.6, -0.68, 0.41, -0.64, -0.66, -0.68, 3.5, 1.49, 0.25, -0.42, -0.68, -0.47, 0.06, -0.55, -0.68, -0.66, -0.71, 2.79, 0.92, -0.61, -0.66, -0.67, 1.01, -0.45, -0.38, -0.49, -0.7, -0.7, 1.4, 0.09, -0.57, -0.66, -0.68, -0.02, 0.12, -0.67, -0.66, -0.44, -0.7, 1.88, 1.83, 1.71, 1.83, 0, -0.53, 2.26, 0.31, 0.64, -0.59, -0.68, 2.28, 3.32, 2.66, 2.07, 1.04, 0.68, 0.79, 0.88, -0.57, -0.65, -0.68, -0.42, -0.52, -0.48, -0.58, 0.36, -0.07, -0.55, -0.46, -0.64, -0.61, -0.63, 0.16, -0.36, -0.53, -0.21, 0.01, 0.08, 0.05, -0.46, -0.49, -0.58, -0.56, 0.81, 0.39, -0.35, -0.43, -0.17, 0.37, -0.09, -0.28, -0.29, -0.22, -0.3, 0.42, 0.55, 0.06, 0.29, 0.37, 0.37, 0.19, 0.06, 0.19, 0.17, 0.05, 0.74, 0.45, 0.32, 0.34, 0.25, 0.05, 0.35, 0.6, 0.24, 0.06, 0.19, 2.59, 2.17, 1.85, 1.4, 0.8, -0.6, -0.66, -0.54, -0.67, -0.73, -0.67, 3.55, 2.77, 1.01, -0.14, -0.63, -0.63, -0.05, -0.69, -0.7, -0.69, -0.67, 2.32, 1.25, -0.42, -0.63, -0.69, 1.75, -0.62, -0.4, -0.7, -0.7, -0.74, 0.9, -0.6, -0.65, -0.66, -0.67, -0.56, -0.49, -0.64, -0.69, -0.67, -0.67, 0.36, 0.19, -0.25, -0.52, -0.62, -0.67, -0.57, -0.48, -0.57, -0.68, -0.72, 0.68, 0.57, 0.28, 0.1, -0.36, -0.62, -0.66, 0.79, -0.59, -0.69, -0.63, -0.46, -0.5, -0.53, -0.62, -0.58, -0.48, -0.49, -0.53, -0.52, -0.53, -0.42, 0.1, 0.23, -0.23, -0.44, -0.3, 0.07, -0.26, -0.13, -0.29, -0.27, -0.06, 1.14, 0.73, -0.05, 0.06, 0.32, 0.35, 0.14, 0.13, 0.36, 0.45, 0.02, 0.96, 0.3, 0.22, 0.1, 0.34, 0.35, 0.44, 0.19, 0.49, 0.18, 0.09, 0.83, 0.27, 0.19, 0.1, 0.31, 0.27, 0.37, 0.23, 0.36, 0.12, 0.02, 1.86, 1.82, 1.55, 1.26, 0.57, -0.09, -0.46, -0.61, -0.66, -0.7, -0.65, 2.85, 2.85, 1.62, 0.16, -0.41, -0.64, -0.63, -0.65, -0.67, -0.7, -0.68, 2.82, 1.75, -0.3, -0.47, -0.57, 0.06, -0.67, -0.51, -0.72, -0.74, -0.72, 0.66, -0.55, -0.5, -0.56, -0.59, -0.61, -0.44, -0.62, -0.7, -0.67, -0.73, -0.42, -0.51, -0.56, -0.5, -0.55, -0.6, -0.66, 0.01, -0.65, -0.62, -0.68, -0.49, -0.46, -0.51, -0.45, -0.43, -0.46, -0.53, -0.51, -0.55, -0.58, -0.47, -0.55, -0.44, -0.54, -0.43, -0.21, -0.1, -0.15, -0.18, -0.16, -0.06, 0.17, -0.19, -0.09, -0.22, 0, 0.13, 0.15, 0.31, 0.09, 0.2, 0.24, 0.32, 0.31, 0.06, 0.2, 0.31, 0.29, 0.22, 0.44, 0.43, 0.12, 0.46, 0.07, 0.26, 0.48, 0.29, 0.12, 0.25, 0.24, 0.53, 0.18, 0.22, 0.21, 0.12, 0.53, 0.39, 0.2, 0.16, 0.19, 0.48, 0.32, 0.09, 0.74, 0.22, 0.08, 1.2, 1.54, 1.12, 0.51, 0.36, 0.49, -0.03, -0.3, -0.45, -0.43, -0.4, 2.24, 1.91, 0.54, 0.11, 0.3, -0.36, -0.43, -0.54, -0.58, -0.62, -0.53, 2.91, 1.69, 0.89, 0.08, -0.27, -0.42, -0.61, -0.66, -0.64, -0.62, -0.54, 1.53, 0.29, 0.05, -0.32, -0.01, -0.25, 0.4, -0.59, -0.65, -0.62, -0.46, -0.19, -0.27, -0.15, -0.21, -0.34, -0.31, -0.45, 0.44, -0.52, -0.38, -0.32, -0.31, -0.17, -0.27, -0.19, 0.01, 0.04, -0.16, -0.09, -0.18, -0.05, -0.04, -0.01, 0.05, 0, 0.12, 0.16, 0.05, 0.16, 0.03, 0.33, 0.47, 0.74, 0.01, 0.34, 0.41, 0.29, 0.36, 0.1, 0.42, 0.19, 0.22, 0.43, 0.52, 0.28, 0.41, 0.25, 0.16, 0.33, 0.09, 0.19, 0.27, 0.32, 0.39, 0.32, 0.28, 0.34, 0.31, 0.15, 0.19, 0.12, 0.33, 0.2, 0.26, 0.15, 0.28, 0.39, 0.17, 0.16, 0.03, 0.28, 0.18, 0.1, 0.32, 0.21, 0.1, 0.05], seed_offsets: { "1": [-1.7875304413401045, 2.674356279327611, -0.5073283096297823], "2": [1.5427176836749714, -2.3671404946651995, 0.3196371678602955] } }, { side: "L", center_fraction: [0.5, 0.5, 0.5], center_offset: [-36.77576604078672, -3.278836818449875, -8.816130696777254], offsets: [[-10, -10, -8], [-8, -10, -8], [-6, -10, -8], [-4, -10, -8], [-2, -10, -8], [0, -10, -8], [2, -10, -8], [4, -10, -8], [6, -10, -8], [8, -10, -8], [10, -10, -8], [-10, -8, -8], [-8, -8, -8], [-6, -8, -8], [-4, -8, -8], [-2, -8, -8], [0, -8, -8], [2, -8, -8], [4, -8, -8], [6, -8, -8], [8, -8, -8], [10, -8, -8], [-10, -6, -8], [-8, -6, -8], [-6, -6, -8], [-4, -6, -8], [-2, -6, -8], [0, -6, -8], [2, -6, -8], [4, -6, -8], [6, -6, -8], [8, -6, -8], [10, -6, -8], [-10, -4, -8], [-8, -4, -8], [-6, -4, -8], [-4, -4, -8], [-2, -4, -8], [0, -4, -8], [2, -4, -8], [4, -4, -8], [6, -4, -8], [8, -4, -8], [10, -4, -8], [-10, -2, -8], [-8, -2, -8], [-6, -2, -8], [-4, -2, -8], [-2, -2, -8], [0, -2, -8], [2, -2, -8], [4, -2, -8], [6, -2, -8], [8, -2, -8], [10, -2, -8], [-10, 0, -8], [-8, 0, -8], [-6, 0, -8], [-4, 0, -8], [-2, 0, -8], [0, 0, -8], [2, 0, -8], [4, 0, -8], [6, 0, -8], [8, 0, -8], [10, 0, -8], [-10, 2, -8], [-8, 2, -8], [-6, 2, -8], [-4, 2, -8], [-2, 2, -8], [0, 2, -8], [2, 2, -8], [4, 2, -8], [6, 2, -8], [8, 2, -8], [10, 2, -8], [-10, 4, -8], [-8, 4, -8], [-6, 4, -8], [-4, 4, -8], [-2, 4, -8], [0, 4, -8], [2, 4, -8], [4, 4, -8], [6, 4, -8], [8, 4, -8], [10, 4, -8], [-10, 6, -8], [-8, 6, -8], [-6, 6, -8], [-4, 6, -8], [-2, 6, -8], [0, 6, -8], [2, 6, -8], [4, 6, -8], [6, 6, -8], [8, 6, -8], [10, 6, -8], [-10, 8, -8], [-8, 8, -8], [-6, 8, -8], [-4, 8, -8], [-2, 8, -8], [0, 8, -8], [2, 8, -8], [4, 8, -8], [6, 8, -8], [8, 8, -8], [10, 8, -8], [-10, 10, -8], [-8, 10, -8], [-6, 10, -8], [-4, 10, -8], [-2, 10, -8], [0, 10, -8], [2, 10, -8], [4, 10, -8], [6, 10, -8], [8, 10, -8], [10, 10, -8], [-10, -10, -6], [-8, -10, -6], [-6, -10, -6], [-4, -10, -6], [-2, -10, -6], [0, -10, -6], [2, -10, -6], [4, -10, -6], [6, -10, -6], [8, -10, -6], [10, -10, -6], [-10, -8, -6], [-8, -8, -6], [-6, -8, -6], [-4, -8, -6], [-2, -8, -6], [0, -8, -6], [2, -8, -6], [4, -8, -6], [6, -8, -6], [8, -8, -6], [10, -8, -6], [-10, -6, -6], [-8, -6, -6], [-6, -6, -6], [-4, -6, -6], [-2, -6, -6], [0, -6, -6], [2, -6, -6], [4, -6, -6], [6, -6, -6], [8, -6, -6], [10, -6, -6], [-10, -4, -6], [-8, -4, -6], [-6, -4, -6], [-4, -4, -6], [-2, -4, -6], [0, -4, -6], [2, -4, -6], [4, -4, -6], [6, -4, -6], [8, -4, -6], [10, -4, -6], [-10, -2, -6], [-8, -2, -6], [-6, -2, -6], [-4, -2, -6], [-2, -2, -6], [0, -2, -6], [2, -2, -6], [4, -2, -6], [6, -2, -6], [8, -2, -6], [10, -2, -6], [-10, 0, -6], [-8, 0, -6], [-6, 0, -6], [-4, 0, -6], [-2, 0, -6], [0, 0, -6], [2, 0, -6], [4, 0, -6], [6, 0, -6], [8, 0, -6], [10, 0, -6], [-10, 2, -6], [-8, 2, -6], [-6, 2, -6], [-4, 2, -6], [-2, 2, -6], [0, 2, -6], [2, 2, -6], [4, 2, -6], [6, 2, -6], [8, 2, -6], [10, 2, -6], [-10, 4, -6], [-8, 4, -6], [-6, 4, -6], [-4, 4, -6], [-2, 4, -6], [0, 4, -6], [2, 4, -6], [4, 4, -6], [6, 4, -6], [8, 4, -6], [10, 4, -6], [-10, 6, -6], [-8, 6, -6], [-6, 6, -6], [-4, 6, -6], [-2, 6, -6], [0, 6, -6], [2, 6, -6], [4, 6, -6], [6, 6, -6], [8, 6, -6], [10, 6, -6], [-10, 8, -6], [-8, 8, -6], [-6, 8, -6], [-4, 8, -6], [-2, 8, -6], [0, 8, -6], [2, 8, -6], [4, 8, -6], [6, 8, -6], [8, 8, -6], [10, 8, -6], [-10, 10, -6], [-8, 10, -6], [-6, 10, -6], [-4, 10, -6], [-2, 10, -6], [0, 10, -6], [2, 10, -6], [4, 10, -6], [6, 10, -6], [8, 10, -6], [10, 10, -6], [-10, -10, -4], [-8, -10, -4], [-6, -10, -4], [-4, -10, -4], [-2, -10, -4], [0, -10, -4], [2, -10, -4], [4, -10, -4], [6, -10, -4], [8, -10, -4], [10, -10, -4], [-10, -8, -4], [-8, -8, -4], [-6, -8, -4], [-4, -8, -4], [-2, -8, -4], [0, -8, -4], [2, -8, -4], [4, -8, -4], [6, -8, -4], [8, -8, -4], [10, -8, -4], [-10, -6, -4], [-8, -6, -4], [-6, -6, -4], [-4, -6, -4], [-2, -6, -4], [0, -6, -4], [2, -6, -4], [4, -6, -4], [6, -6, -4], [8, -6, -4], [10, -6, -4], [-10, -4, -4], [-8, -4, -4], [-6, -4, -4], [-4, -4, -4], [-2, -4, -4], [0, -4, -4], [2, -4, -4], [4, -4, -4], [6, -4, -4], [8, -4, -4], [10, -4, -4], [-10, -2, -4], [-8, -2, -4], [-6, -2, -4], [-4, -2, -4], [-2, -2, -4], [0, -2, -4], [2, -2, -4], [4, -2, -4], [6, -2, -4], [8, -2, -4], [10, -2, -4], [-10, 0, -4], [-8, 0, -4], [-6, 0, -4], [-4, 0, -4], [-2, 0, -4], [0, 0, -4], [2, 0, -4], [4, 0, -4], [6, 0, -4], [8, 0, -4], [10, 0, -4], [-10, 2, -4], [-8, 2, -4], [-6, 2, -4], [-4, 2, -4], [-2, 2, -4], [0, 2, -4], [2, 2, -4], [4, 2, -4], [6, 2, -4], [8, 2, -4], [10, 2, -4], [-10, 4, -4], [-8, 4, -4], [-6, 4, -4], [-4, 4, -4], [-2, 4, -4], [0, 4, -4], [2, 4, -4], [4, 4, -4], [6, 4, -4], [8, 4, -4], [10, 4, -4], [-10, 6, -4], [-8, 6, -4], [-6, 6, -4], [-4, 6, -4], [-2, 6, -4], [0, 6, -4], [2, 6, -4], [4, 6, -4], [6, 6, -4], [8, 6, -4], [10, 6, -4], [-10, 8, -4], [-8, 8, -4], [-6, 8, -4], [-4, 8, -4], [-2, 8, -4], [0, 8, -4], [2, 8, -4], [4, 8, -4], [6, 8, -4], [8, 8, -4], [10, 8, -4], [-10, 10, -4], [-8, 10, -4], [-6, 10, -4], [-4, 10, -4], [-2, 10, -4], [0, 10, -4], [2, 10, -4], [4, 10, -4], [6, 10, -4], [8, 10, -4], [10, 10, -4], [-10, -10, -2], [-8, -10, -2], [-6, -10, -2], [-4, -10, -2], [-2, -10, -2], [0, -10, -2], [2, -10, -2], [4, -10, -2], [6, -10, -2], [8, -10, -2], [10, -10, -2], [-10, -8, -2], [-8, -8, -2], [-6, -8, -2], [-4, -8, -2], [-2, -8, -2], [0, -8, -2], [2, -8, -2], [4, -8, -2], [6, -8, -2], [8, -8, -2], [10, -8, -2], [-10, -6, -2], [-8, -6, -2], [-6, -6, -2], [-4, -6, -2], [-2, -6, -2], [0, -6, -2], [2, -6, -2], [4, -6, -2], [6, -6, -2], [8, -6, -2], [10, -6, -2], [-10, -4, -2], [-8, -4, -2], [-6, -4, -2], [-4, -4, -2], [-2, -4, -2], [0, -4, -2], [2, -4, -2], [4, -4, -2], [6, -4, -2], [8, -4, -2], [10, -4, -2], [-10, -2, -2], [-8, -2, -2], [-6, -2, -2], [-4, -2, -2], [-2, -2, -2], [0, -2, -2], [2, -2, -2], [4, -2, -2], [6, -2, -2], [8, -2, -2], [10, -2, -2], [-10, 0, -2], [-8, 0, -2], [-6, 0, -2], [-4, 0, -2], [-2, 0, -2], [0, 0, -2], [2, 0, -2], [4, 0, -2], [6, 0, -2], [8, 0, -2], [10, 0, -2], [-10, 2, -2], [-8, 2, -2], [-6, 2, -2], [-4, 2, -2], [-2, 2, -2], [0, 2, -2], [2, 2, -2], [4, 2, -2], [6, 2, -2], [8, 2, -2], [10, 2, -2], [-10, 4, -2], [-8, 4, -2], [-6, 4, -2], [-4, 4, -2], [-2, 4, -2], [0, 4, -2], [2, 4, -2], [4, 4, -2], [6, 4, -2], [8, 4, -2], [10, 4, -2], [-10, 6, -2], [-8, 6, -2], [-6, 6, -2], [-4, 6, -2], [-2, 6, -2], [0, 6, -2], [2, 6, -2], [4, 6, -2], [6, 6, -2], [8, 6, -2], [10, 6, -2], [-10, 8, -2], [-8, 8, -2], [-6, 8, -2], [-4, 8, -2], [-2, 8, -2], [0, 8, -2], [2, 8, -2], [4, 8, -2], [6, 8, -2], [8, 8, -2], [10, 8, -2], [-10, 10, -2], [-8, 10, -2], [-6, 10, -2], [-4, 10, -2], [-2, 10, -2], [0, 10, -2], [2, 10, -2], [4, 10, -2], [6, 10, -2], [8, 10, -2], [10, 10, -2], [-10, -10, 0], [-8, -10, 0], [-6, -10, 0], [-4, -10, 0], [-2, -10, 0], [0, -10, 0], [2, -10, 0], [4, -10, 0], [6, -10, 0], [8, -10, 0], [10, -10, 0], [-10, -8, 0], [-8, -8, 0], [-6, -8, 0], [-4, -8, 0], [-2, -8, 0], [0, -8, 0], [2, -8, 0], [4, -8, 0], [6, -8, 0], [8, -8, 0], [10, -8, 0], [-10, -6, 0], [-8, -6, 0], [-6, -6, 0], [-4, -6, 0], [-2, -6, 0], [0, -6, 0], [2, -6, 0], [4, -6, 0], [6, -6, 0], [8, -6, 0], [10, -6, 0], [-10, -4, 0], [-8, -4, 0], [-6, -4, 0], [-4, -4, 0], [-2, -4, 0], [0, -4, 0], [2, -4, 0], [4, -4, 0], [6, -4, 0], [8, -4, 0], [10, -4, 0], [-10, -2, 0], [-8, -2, 0], [-6, -2, 0], [-4, -2, 0], [-2, -2, 0], [0, -2, 0], [2, -2, 0], [4, -2, 0], [6, -2, 0], [8, -2, 0], [10, -2, 0], [-10, 0, 0], [-8, 0, 0], [-6, 0, 0], [-4, 0, 0], [-2, 0, 0], [0, 0, 0], [2, 0, 0], [4, 0, 0], [6, 0, 0], [8, 0, 0], [10, 0, 0], [-10, 2, 0], [-8, 2, 0], [-6, 2, 0], [-4, 2, 0], [-2, 2, 0], [0, 2, 0], [2, 2, 0], [4, 2, 0], [6, 2, 0], [8, 2, 0], [10, 2, 0], [-10, 4, 0], [-8, 4, 0], [-6, 4, 0], [-4, 4, 0], [-2, 4, 0], [0, 4, 0], [2, 4, 0], [4, 4, 0], [6, 4, 0], [8, 4, 0], [10, 4, 0], [-10, 6, 0], [-8, 6, 0], [-6, 6, 0], [-4, 6, 0], [-2, 6, 0], [0, 6, 0], [2, 6, 0], [4, 6, 0], [6, 6, 0], [8, 6, 0], [10, 6, 0], [-10, 8, 0], [-8, 8, 0], [-6, 8, 0], [-4, 8, 0], [-2, 8, 0], [0, 8, 0], [2, 8, 0], [4, 8, 0], [6, 8, 0], [8, 8, 0], [10, 8, 0], [-10, 10, 0], [-8, 10, 0], [-6, 10, 0], [-4, 10, 0], [-2, 10, 0], [0, 10, 0], [2, 10, 0], [4, 10, 0], [6, 10, 0], [8, 10, 0], [10, 10, 0], [-10, -10, 2], [-8, -10, 2], [-6, -10, 2], [-4, -10, 2], [-2, -10, 2], [0, -10, 2], [2, -10, 2], [4, -10, 2], [6, -10, 2], [8, -10, 2], [10, -10, 2], [-10, -8, 2], [-8, -8, 2], [-6, -8, 2], [-4, -8, 2], [-2, -8, 2], [0, -8, 2], [2, -8, 2], [4, -8, 2], [6, -8, 2], [8, -8, 2], [10, -8, 2], [-10, -6, 2], [-8, -6, 2], [-6, -6, 2], [-4, -6, 2], [-2, -6, 2], [0, -6, 2], [2, -6, 2], [4, -6, 2], [6, -6, 2], [8, -6, 2], [10, -6, 2], [-10, -4, 2], [-8, -4, 2], [-6, -4, 2], [-4, -4, 2], [-2, -4, 2], [0, -4, 2], [2, -4, 2], [4, -4, 2], [6, -4, 2], [8, -4, 2], [10, -4, 2], [-10, -2, 2], [-8, -2, 2], [-6, -2, 2], [-4, -2, 2], [-2, -2, 2], [0, -2, 2], [2, -2, 2], [4, -2, 2], [6, -2, 2], [8, -2, 2], [10, -2, 2], [-10, 0, 2], [-8, 0, 2], [-6, 0, 2], [-4, 0, 2], [-2, 0, 2], [0, 0, 2], [2, 0, 2], [4, 0, 2], [6, 0, 2], [8, 0, 2], [10, 0, 2], [-10, 2, 2], [-8, 2, 2], [-6, 2, 2], [-4, 2, 2], [-2, 2, 2], [0, 2, 2], [2, 2, 2], [4, 2, 2], [6, 2, 2], [8, 2, 2], [10, 2, 2], [-10, 4, 2], [-8, 4, 2], [-6, 4, 2], [-4, 4, 2], [-2, 4, 2], [0, 4, 2], [2, 4, 2], [4, 4, 2], [6, 4, 2], [8, 4, 2], [10, 4, 2], [-10, 6, 2], [-8, 6, 2], [-6, 6, 2], [-4, 6, 2], [-2, 6, 2], [0, 6, 2], [2, 6, 2], [4, 6, 2], [6, 6, 2], [8, 6, 2], [10, 6, 2], [-10, 8, 2], [-8, 8, 2], [-6, 8, 2], [-4, 8, 2], [-2, 8, 2], [0, 8, 2], [2, 8, 2], [4, 8, 2], [6, 8, 2], [8, 8, 2], [10, 8, 2], [-10, 10, 2], [-8, 10, 2], [-6, 10, 2], [-4, 10, 2], [-2, 10, 2], [0, 10, 2], [2, 10, 2], [4, 10, 2], [6, 10, 2], [8, 10, 2], [10, 10, 2], [-10, -10, 4], [-8, -10, 4], [-6, -10, 4], [-4, -10, 4], [-2, -10, 4], [0, -10, 4], [2, -10, 4], [4, -10, 4], [6, -10, 4], [8, -10, 4], [10, -10, 4], [-10, -8, 4], [-8, -8, 4], [-6, -8, 4], [-4, -8, 4], [-2, -8, 4], [0, -8, 4], [2, -8, 4], [4, -8, 4], [6, -8, 4], [8, -8, 4], [10, -8, 4], [-10, -6, 4], [-8, -6, 4], [-6, -6, 4], [-4, -6, 4], [-2, -6, 4], [0, -6, 4], [2, -6, 4], [4, -6, 4], [6, -6, 4], [8, -6, 4], [10, -6, 4], [-10, -4, 4], [-8, -4, 4], [-6, -4, 4], [-4, -4, 4], [-2, -4, 4], [0, -4, 4], [2, -4, 4], [4, -4, 4], [6, -4, 4], [8, -4, 4], [10, -4, 4], [-10, -2, 4], [-8, -2, 4], [-6, -2, 4], [-4, -2, 4], [-2, -2, 4], [0, -2, 4], [2, -2, 4], [4, -2, 4], [6, -2, 4], [8, -2, 4], [10, -2, 4], [-10, 0, 4], [-8, 0, 4], [-6, 0, 4], [-4, 0, 4], [-2, 0, 4], [0, 0, 4], [2, 0, 4], [4, 0, 4], [6, 0, 4], [8, 0, 4], [10, 0, 4], [-10, 2, 4], [-8, 2, 4], [-6, 2, 4], [-4, 2, 4], [-2, 2, 4], [0, 2, 4], [2, 2, 4], [4, 2, 4], [6, 2, 4], [8, 2, 4], [10, 2, 4], [-10, 4, 4], [-8, 4, 4], [-6, 4, 4], [-4, 4, 4], [-2, 4, 4], [0, 4, 4], [2, 4, 4], [4, 4, 4], [6, 4, 4], [8, 4, 4], [10, 4, 4], [-10, 6, 4], [-8, 6, 4], [-6, 6, 4], [-4, 6, 4], [-2, 6, 4], [0, 6, 4], [2, 6, 4], [4, 6, 4], [6, 6, 4], [8, 6, 4], [10, 6, 4], [-10, 8, 4], [-8, 8, 4], [-6, 8, 4], [-4, 8, 4], [-2, 8, 4], [0, 8, 4], [2, 8, 4], [4, 8, 4], [6, 8, 4], [8, 8, 4], [10, 8, 4], [-10, 10, 4], [-8, 10, 4], [-6, 10, 4], [-4, 10, 4], [-2, 10, 4], [0, 10, 4], [2, 10, 4], [4, 10, 4], [6, 10, 4], [8, 10, 4], [10, 10, 4], [-10, -10, 6], [-8, -10, 6], [-6, -10, 6], [-4, -10, 6], [-2, -10, 6], [0, -10, 6], [2, -10, 6], [4, -10, 6], [6, -10, 6], [8, -10, 6], [10, -10, 6], [-10, -8, 6], [-8, -8, 6], [-6, -8, 6], [-4, -8, 6], [-2, -8, 6], [0, -8, 6], [2, -8, 6], [4, -8, 6], [6, -8, 6], [8, -8, 6], [10, -8, 6], [-10, -6, 6], [-8, -6, 6], [-6, -6, 6], [-4, -6, 6], [-2, -6, 6], [0, -6, 6], [2, -6, 6], [4, -6, 6], [6, -6, 6], [8, -6, 6], [10, -6, 6], [-10, -4, 6], [-8, -4, 6], [-6, -4, 6], [-4, -4, 6], [-2, -4, 6], [0, -4, 6], [2, -4, 6], [4, -4, 6], [6, -4, 6], [8, -4, 6], [10, -4, 6], [-10, -2, 6], [-8, -2, 6], [-6, -2, 6], [-4, -2, 6], [-2, -2, 6], [0, -2, 6], [2, -2, 6], [4, -2, 6], [6, -2, 6], [8, -2, 6], [10, -2, 6], [-10, 0, 6], [-8, 0, 6], [-6, 0, 6], [-4, 0, 6], [-2, 0, 6], [0, 0, 6], [2, 0, 6], [4, 0, 6], [6, 0, 6], [8, 0, 6], [10, 0, 6], [-10, 2, 6], [-8, 2, 6], [-6, 2, 6], [-4, 2, 6], [-2, 2, 6], [0, 2, 6], [2, 2, 6], [4, 2, 6], [6, 2, 6], [8, 2, 6], [10, 2, 6], [-10, 4, 6], [-8, 4, 6], [-6, 4, 6], [-4, 4, 6], [-2, 4, 6], [0, 4, 6], [2, 4, 6], [4, 4, 6], [6, 4, 6], [8, 4, 6], [10, 4, 6], [-10, 6, 6], [-8, 6, 6], [-6, 6, 6], [-4, 6, 6], [-2, 6, 6], [0, 6, 6], [2, 6, 6], [4, 6, 6], [6, 6, 6], [8, 6, 6], [10, 6, 6], [-10, 8, 6], [-8, 8, 6], [-6, 8, 6], [-4, 8, 6], [-2, 8, 6], [0, 8, 6], [2, 8, 6], [4, 8, 6], [6, 8, 6], [8, 8, 6], [10, 8, 6], [-10, 10, 6], [-8, 10, 6], [-6, 10, 6], [-4, 10, 6], [-2, 10, 6], [0, 10, 6], [2, 10, 6], [4, 10, 6], [6, 10, 6], [8, 10, 6], [10, 10, 6], [-10, -10, 8], [-8, -10, 8], [-6, -10, 8], [-4, -10, 8], [-2, -10, 8], [0, -10, 8], [2, -10, 8], [4, -10, 8], [6, -10, 8], [8, -10, 8], [10, -10, 8], [-10, -8, 8], [-8, -8, 8], [-6, -8, 8], [-4, -8, 8], [-2, -8, 8], [0, -8, 8], [2, -8, 8], [4, -8, 8], [6, -8, 8], [8, -8, 8], [10, -8, 8], [-10, -6, 8], [-8, -6, 8], [-6, -6, 8], [-4, -6, 8], [-2, -6, 8], [0, -6, 8], [2, -6, 8], [4, -6, 8], [6, -6, 8], [8, -6, 8], [10, -6, 8], [-10, -4, 8], [-8, -4, 8], [-6, -4, 8], [-4, -4, 8], [-2, -4, 8], [0, -4, 8], [2, -4, 8], [4, -4, 8], [6, -4, 8], [8, -4, 8], [10, -4, 8], [-10, -2, 8], [-8, -2, 8], [-6, -2, 8], [-4, -2, 8], [-2, -2, 8], [0, -2, 8], [2, -2, 8], [4, -2, 8], [6, -2, 8], [8, -2, 8], [10, -2, 8], [-10, 0, 8], [-8, 0, 8], [-6, 0, 8], [-4, 0, 8], [-2, 0, 8], [0, 0, 8], [2, 0, 8], [4, 0, 8], [6, 0, 8], [8, 0, 8], [10, 0, 8], [-10, 2, 8], [-8, 2, 8], [-6, 2, 8], [-4, 2, 8], [-2, 2, 8], [0, 2, 8], [2, 2, 8], [4, 2, 8], [6, 2, 8], [8, 2, 8], [10, 2, 8], [-10, 4, 8], [-8, 4, 8], [-6, 4, 8], [-4, 4, 8], [-2, 4, 8], [0, 4, 8], [2, 4, 8], [4, 4, 8], [6, 4, 8], [8, 4, 8], [10, 4, 8], [-10, 6, 8], [-8, 6, 8], [-6, 6, 8], [-4, 6, 8], [-2, 6, 8], [0, 6, 8], [2, 6, 8], [4, 6, 8], [6, 6, 8], [8, 6, 8], [10, 6, 8], [-10, 8, 8], [-8, 8, 8], [-6, 8, 8], [-4, 8, 8], [-2, 8, 8], [0, 8, 8], [2, 8, 8], [4, 8, 8], [6, 8, 8], [8, 8, 8], [10, 8, 8], [-10, 10, 8], [-8, 10, 8], [-6, 10, 8], [-4, 10, 8], [-2, 10, 8], [0, 10, 8], [2, 10, 8], [4, 10, 8], [6, 10, 8], [8, 10, 8], [10, 10, 8]], values: [-0.56, -0.56, -0.43, -0.44, -0.43, -0.32, -0.41, -0.11, 0.06, 0.44, 0.99, -0.37, -0.22, -0.41, -0.37, -0.34, -0.36, 0.01, 0.17, -0.12, -0.19, 1.39, -0.48, -0.18, -0.26, -0.5, -0.45, -0.23, -0.23, -0.07, -0.19, 0.14, 1.87, -0.52, -0.5, -0.49, -0.22, -0.43, -0.44, -0.26, -0.32, -0.35, 0.32, 1.07, -0.6, -0.55, -0.53, -0.62, -0.53, -0.52, -0.47, -0.42, -0.34, -0.06, -0.03, -0.49, -0.44, -0.54, -0.55, -0.52, -0.51, -0.48, -0.4, -0.02, -0.1, -0.04, -0.5, -0.5, -0.45, -0.51, -0.48, -0.51, -0.39, 0.27, 0.04, 0.07, 0.26, -0.52, -0.32, -0.32, -0.42, -0.24, -0.36, 0.25, 2.97, 1.41, 0.21, 0.5, -0.12, -0.11, -0.13, -0.08, -0.2, -0.32, 0.4, 3.14, 2.48, 0.51, 0.65, -0.06, -0.11, -0.02, 0.06, -0.08, -0.09, -0.36, 1.35, 0.79, 0.77, 0.71, 0.04, 0.24, -0.03, -0.13, -0.18, -0.02, -0.25, -0.18, 0.55, 0.4, 0.47, -0.62, -0.51, -0.54, -0.43, -0.46, -0.46, -0.28, -0.09, 0.01, 0.63, 2.3, -0.54, -0.37, -0.53, -0.62, -0.44, -0.35, -0.36, -0.45, -0.54, -0.45, 1.08, -0.42, -0.19, -0.45, -0.48, -0.39, -0.22, -0.35, -0.45, -0.55, -0.34, 0.87, -0.58, -0.54, -0.53, -0.48, -0.51, -0.52, -0.44, -0.46, 0.16, 0.83, 0.68, -0.49, -0.53, -0.6, -0.64, -0.53, -0.54, -0.56, -0.55, -0.51, -0.28, -0.36, -0.58, -0.55, -0.61, -0.58, -0.56, -0.31, -0.48, -0.45, -0.17, 0.03, -0.19, -0.52, -0.58, -0.63, -0.61, -0.55, -0.47, -0.17, -0.4, -0.34, 0.35, 0.5, -0.45, -0.39, -0.45, -0.45, -0.38, -0.44, -0.07, 0.97, 0.47, 0.42, 0.72, -0.45, -0.39, -0.3, -0.26, -0.42, -0.39, 0.28, 2.46, 1.94, 0.53, 0.44, -0.05, -0.13, -0.14, -0.02, -0.24, -0.34, -0.29, 1.63, 1.77, 0.93, 0.91, 0.02, -0.02, -0.09, -0.05, -0.37, -0.24, -0.33, -0.16, 1.42, 1, 0.98, -0.63, -0.61, -0.63, -0.41, -0.32, -0.39, -0.23, -0.12, 0.18, 0.79, 2.37, -0.66, -0.53, -0.61, -0.63, -0.58, -0.47, -0.57, -0.64, -0.57, -0.2, 1.39, -0.61, -0.33, -0.5, -0.34, -0.56, -0.6, -0.56, -0.59, -0.62, -0.52, -0.27, -0.57, -0.33, -0.42, -0.56, -0.21, -0.56, -0.6, -0.53, -0.01, -0.2, -0.26, -0.68, -0.57, -0.56, -0.58, -0.33, -0.56, -0.63, -0.58, -0.47, -0.48, -0.39, -0.57, -0.58, -0.55, -0.63, 0.56, 2.35, 0.21, -0.48, -0.51, -0.12, 0.1, -0.54, -0.59, -0.63, -0.61, -0.36, -0.4, 0.99, 2.34, -0.57, -0.14, 0.51, -0.49, -0.55, -0.56, -0.53, -0.56, -0.47, -0.11, -0.02, -0.1, -0.28, 0.31, -0.37, -0.42, -0.3, -0.45, -0.45, -0.41, -0.17, 0.77, 0.65, 0.13, 0.3, -0.25, -0.29, -0.28, -0.25, -0.28, -0.29, -0.18, 0.75, 1.33, 1.44, 0.59, -0.1, -0.13, 0.04, -0.42, -0.33, -0.27, -0.14, -0.17, 1.24, 1.35, 1.01, -0.66, -0.64, -0.65, -0.5, -0.16, -0.43, -0.33, 0.09, 0.79, 0.98, 2.43, -0.66, -0.6, 0.11, -0.33, -0.65, -0.58, -0.59, -0.59, -0.46, 0.87, 2.78, -0.64, -0.61, -0.58, -0.21, -0.05, -0.65, -0.64, -0.62, -0.6, -0.55, 0.56, -0.58, -0.1, -0.47, -0.6, 0.83, -0.29, -0.67, -0.66, -0.59, -0.46, -0.14, -0.57, -0.53, -0.43, -0.61, 1.43, -0.34, -0.38, -0.04, 0.13, 0.02, 0.01, -0.59, -0.6, -0.54, -0.55, 1.57, 0.35, 1.84, 0.09, -0.07, -0.11, 0, -0.49, -0.59, -0.54, -0.54, -0.53, 0.75, 1.11, 1.24, -0.59, -0.55, 0.04, -0.64, -0.56, -0.57, -0.57, -0.25, 0.65, 2.74, 1.31, -0.38, -0.34, -0.04, -0.52, -0.48, -0.41, -0.45, -0.34, -0.34, -0.38, -0.22, -0.04, -0.12, 0.32, -0.57, -0.44, -0.45, -0.25, -0.42, -0.1, -0.09, 0.09, 0.63, 0.86, 0.2, -0.46, -0.42, -0.42, -0.3, -0.26, -0.06, 0.16, 0.07, 0.59, 0.87, 0.6, -0.61, -0.65, -0.25, -0.63, -0.38, -0.54, -0.22, 0.61, 1.17, 1.6, 2.67, -0.68, -0.66, 0.01, -0.56, -0.65, -0.53, -0.61, -0.52, -0.21, 1.44, 3.38, -0.68, -0.66, -0.3, 0.17, -0.44, -0.66, -0.67, -0.65, -0.63, 0.23, 2.38, -0.66, -0.32, -0.5, -0.44, 3.52, 0.97, -0.68, -0.68, -0.33, 0.53, 1.41, -0.63, -0.41, -0.2, -0.57, 4.18, 0.6, 1.15, 1.71, 1.5, 1.48, 1.72, -0.63, -0.6, -0.54, -0.28, 1.03, 0.37, 2.5, 2.2, 2.15, 1.22, 0.38, -0.58, -0.64, -0.62, -0.22, -0.62, 0.83, 1.47, -0.28, -0.59, -0.63, -0.39, -0.63, -0.59, -0.58, -0.57, 0, -0.05, 1.57, 2.31, -0.46, -0.37, 0.14, -0.6, -0.62, -0.55, -0.56, -0.39, -0.16, -0.36, -0.43, -0.28, -0.19, 0.14, -0.47, -0.52, -0.33, -0.33, -0.3, 0.01, 0, 0.35, 0.28, 0.42, 0.39, -0.23, -0.13, 0.05, 0.06, 0.14, 0.13, 0.17, 0.14, 0.4, 0.69, 0.81, -0.65, -0.68, -0.37, -0.69, -0.59, -0.47, 0.44, 1.25, 2.1, 3.23, 3.31, -0.69, -0.64, -0.38, -0.09, -0.53, -0.65, -0.69, -0.35, 0.11, 1.47, 3.21, -0.67, -0.69, -0.57, -0.51, 0.15, -0.47, -0.62, -0.62, -0.6, 0.6, 2.32, -0.68, -0.33, -0.58, -0.57, 0.49, -0.23, -0.68, -0.67, -0.44, 0.35, 1.34, -0.7, -0.09, -0.36, -0.49, 2.21, -0.53, 0.23, 1.73, 1.93, 1.96, 2.27, -0.65, -0.65, 0.45, 1.99, 1.91, 0.69, 0.81, 1.68, 2.09, 1.79, 1, -0.67, -0.61, -0.66, -0.46, -0.59, -0.2, 0.53, -0.52, -0.55, -0.53, -0.35, -0.59, -0.62, -0.53, -0.53, 0.02, 0.49, -0.31, -0.28, -0.6, -0.05, 0.64, -0.55, -0.48, -0.48, -0.39, -0.18, 0.14, 0.02, -0.01, -0.24, 0.3, 0.79, -0.17, 0.03, -0.04, 0.05, -0.02, 0.38, 0.52, 0.16, 0.54, 0.27, 0.49, 0.25, 0.11, 0.24, 0.44, 0.49, 0.09, 0.14, 0.38, 0.15, 0.2, 0.46, -0.64, -0.67, -0.69, -0.66, -0.64, -0.28, 1.29, 1.91, 2.38, 2.62, 2.81, -0.7, -0.73, -0.71, -0.17, -0.35, -0.71, -0.68, -0.06, 1.17, 2.39, 3.5, -0.71, -0.69, -0.63, -0.58, -0.37, 0.24, -0.67, -0.63, -0.49, 0.34, 2.24, -0.7, -0.69, -0.69, -0.66, -0.52, -0.55, -0.67, -0.6, -0.63, -0.52, 0.15, -0.69, -0.64, -0.68, -0.62, -0.59, -0.64, -0.62, -0.5, -0.2, -0.03, 0.11, -0.68, -0.71, -0.56, 2.59, -0.49, -0.61, -0.42, -0.3, -0.24, -0.33, -0.25, -0.64, -0.63, -0.61, -0.53, -0.59, -0.43, -0.51, -0.62, -0.55, -0.34, -0.49, -0.48, -0.52, -0.46, -0.35, -0.31, -0.07, -0.18, -0.26, -0.4, 0.32, 0.61, -0.16, -0.15, 0.11, 0.01, 0.12, 0.15, 0.43, 0.28, 0.14, 0.13, 0.54, 0.04, 0.25, 0.42, 0.14, 0.2, 0.44, 0.38, 0.15, 0.17, 0.2, 0.25, 0.01, 0.2, 0.1, 0.37, 0.54, 0.38, 0.5, 0.19, 0.15, 0.34, 0.74, -0.65, -0.65, -0.68, -0.6, -0.35, -0.1, 0.84, 1.36, 1.87, 2.15, 2.22, -0.68, -0.69, -0.67, -0.7, -0.64, -0.54, -0.35, 0.4, 1.81, 3.28, 3.15, -0.7, -0.7, -0.66, -0.47, -0.66, -0.35, -0.57, -0.42, -0.33, 0.64, 2.33, -0.74, -0.68, -0.7, -0.6, -0.41, -0.58, -0.59, -0.55, -0.47, -0.5, -0.18, -0.67, -0.6, -0.68, -0.36, -0.66, -0.58, -0.56, -0.48, -0.48, -0.46, -0.53, -0.68, -0.66, -0.57, 0.46, -0.62, -0.48, -0.48, -0.46, -0.46, -0.52, -0.36, -0.39, -0.49, -0.45, -0.44, -0.37, -0.07, 0.03, -0.24, -0.31, -0.32, -0.36, 0.12, 0.24, -0.04, 0.03, 0.3, 0.23, 0.08, 0.21, 0.08, 0.06, -0.01, 0.01, 0.37, 0.9, 0.24, 0.44, 0.27, 0.22, 0.3, 0.22, 0.41, 0.27, 0.06, 0.19, 0.54, 0.07, 0.41, 0.28, 0.29, 0.16, 0.17, 0.27, 0.61, 0.06, 0.2, 0.19, 0.19, 0.26, 0.3, 0.33, 0.13, 0.13, 0.19, 0.53, -0.39, -0.46, -0.44, -0.38, -0.14, 0.79, 0.34, 0.57, 1.1, 1.64, 1.66, -0.6, -0.63, -0.63, -0.44, -0.45, -0.34, 0.47, 0.14, 0.6, 1.74, 2.37, -0.66, -0.68, -0.64, -0.66, -0.63, -0.45, -0.27, 0.06, 0.93, 1.56, 2.38, -0.62, -0.65, -0.64, -0.7, 0.47, -0.37, -0.02, -0.22, 0.18, 0.25, 0.93, -0.57, -0.61, -0.68, 0.23, -0.53, -0.23, -0.34, -0.22, -0.02, -0.11, -0.11, -0.41, -0.38, -0.45, -0.19, -0.26, -0.07, 0.09, -0.04, -0.12, 0.18, -0.14, 0.16, 0.17, 0.04, 0.09, 0.11, 0.06, 0.24, 0.36, 0.12, 0.41, 0.44, 0.56, 0.7, 0.41, 0.13, 0.34, 0.17, 0.1, 0.26, 0.41, 0.39, 0.2, 0.25, 0.48, 0.34, 0.38, 0.27, 0.16, 0.2, 0.19, 0.16, 0.35, 0.17, 0, 0.22, 0.36, 0.17, 0.41, 0.23, 0.11, 0.24, 0.17, 0.28, 0.27, 0.05, 0.3, 0.14, 0.48, 0.35, 0.15, 0.12, 0.41, 0.08, 0.14, 0.24], seed_offsets: { "3": [2.03654108191094, 2.5334496301826324, -0.6803529271293131], "4": [-1.741654070600068, -2.112040523726262, 0.47462352012879433] } }], global: { offsets: [[-1.36, -1.36, -54.75], [4.64, -1.36, -54.75], [10.64, -1.36, -54.75], [16.64, -1.36, -54.75], [-7.36, 4.64, -54.75], [-1.36, 4.64, -54.75], [4.64, 4.64, -54.75], [10.64, 4.64, -54.75], [16.64, 4.64, -54.75], [22.64, 4.64, -54.75], [28.64, 4.64, -54.75], [34.64, 4.64, -54.75], [-7.36, 10.64, -54.75], [-1.36, 10.64, -54.75], [4.64, 10.64, -54.75], [10.64, 10.64, -54.75], [16.64, 10.64, -54.75], [22.64, 10.64, -54.75], [28.64, 10.64, -54.75], [34.64, 10.64, -54.75], [40.64, 10.64, -54.75], [46.64, 10.64, -54.75], [-13.36, 16.64, -54.75], [-7.36, 16.64, -54.75], [-1.36, 16.64, -54.75], [4.64, 16.64, -54.75], [10.64, 16.64, -54.75], [16.64, 16.64, -54.75], [22.64, 16.64, -54.75], [28.64, 16.64, -54.75], [34.64, 16.64, -54.75], [40.64, 16.64, -54.75], [46.64, 16.64, -54.75], [52.64, 16.64, -54.75], [58.64, 16.64, -54.75], [-13.36, 22.64, -54.75], [-7.36, 22.64, -54.75], [-1.36, 22.64, -54.75], [4.64, 22.64, -54.75], [10.64, 22.64, -54.75], [16.64, 22.64, -54.75], [22.64, 22.64, -54.75], [28.64, 22.64, -54.75], [34.64, 22.64, -54.75], [40.64, 22.64, -54.75], [46.64, 22.64, -54.75], [52.64, 22.64, -54.75], [58.64, 22.64, -54.75], [64.64, 22.64, -54.75], [70.64, 22.64, -54.75], [-19.36, 28.64, -54.75], [-13.36, 28.64, -54.75], [-7.36, 28.64, -54.75], [-1.36, 28.64, -54.75], [4.64, 28.64, -54.75], [10.64, 28.64, -54.75], [16.64, 28.64, -54.75], [22.64, 28.64, -54.75], [28.64, 28.64, -54.75], [34.64, 28.64, -54.75], [40.64, 28.64, -54.75], [46.64, 28.64, -54.75], [52.64, 28.64, -54.75], [58.64, 28.64, -54.75], [64.64, 28.64, -54.75], [70.64, 28.64, -54.75], [76.64, 28.64, -54.75], [82.64, 28.64, -54.75], [88.64, 28.64, -54.75], [100.64, 28.64, -54.75], [-19.36, 34.64, -54.75], [-13.36, 34.64, -54.75], [-7.36, 34.64, -54.75], [-1.36, 34.64, -54.75], [4.64, 34.64, -54.75], [10.64, 34.64, -54.75], [16.64, 34.64, -54.75], [22.64, 34.64, -54.75], [28.64, 34.64, -54.75], [34.64, 34.64, -54.75], [40.64, 34.64, -54.75], [46.64, 34.64, -54.75], [52.64, 34.64, -54.75], [58.64, 34.64, -54.75], [64.64, 34.64, -54.75], [70.64, 34.64, -54.75], [76.64, 34.64, -54.75], [82.64, 34.64, -54.75], [88.64, 34.64, -54.75], [94.64, 34.64, -54.75], [100.64, 34.64, -54.75], [-19.36, 40.64, -54.75], [-13.36, 40.64, -54.75], [-7.36, 40.64, -54.75], [-1.36, 40.64, -54.75], [4.64, 40.64, -54.75], [10.64, 40.64, -54.75], [16.64, 40.64, -54.75], [22.64, 40.64, -54.75], [28.64, 40.64, -54.75], [34.64, 40.64, -54.75], [40.64, 40.64, -54.75], [46.64, 40.64, -54.75], [52.64, 40.64, -54.75], [58.64, 40.64, -54.75], [64.64, 40.64, -54.75], [70.64, 40.64, -54.75], [76.64, 40.64, -54.75], [82.64, 40.64, -54.75], [88.64, 40.64, -54.75], [94.64, 40.64, -54.75], [100.64, 40.64, -54.75], [-25.36, 46.64, -54.75], [-19.36, 46.64, -54.75], [-13.36, 46.64, -54.75], [-7.36, 46.64, -54.75], [-1.36, 46.64, -54.75], [4.64, 46.64, -54.75], [10.64, 46.64, -54.75], [16.64, 46.64, -54.75], [22.64, 46.64, -54.75], [28.64, 46.64, -54.75], [34.64, 46.64, -54.75], [40.64, 46.64, -54.75], [46.64, 46.64, -54.75], [52.64, 46.64, -54.75], [58.64, 46.64, -54.75], [64.64, 46.64, -54.75], [70.64, 46.64, -54.75], [76.64, 46.64, -54.75], [82.64, 46.64, -54.75], [88.64, 46.64, -54.75], [94.64, 46.64, -54.75], [100.64, 46.64, -54.75], [-25.36, 52.64, -54.75], [-19.36, 52.64, -54.75], [-13.36, 52.64, -54.75], [-7.36, 52.64, -54.75], [-1.36, 52.64, -54.75], [4.64, 52.64, -54.75], [10.64, 52.64, -54.75], [16.64, 52.64, -54.75], [22.64, 52.64, -54.75], [28.64, 52.64, -54.75], [34.64, 52.64, -54.75], [40.64, 52.64, -54.75], [46.64, 52.64, -54.75], [52.64, 52.64, -54.75], [58.64, 52.64, -54.75], [64.64, 52.64, -54.75], [70.64, 52.64, -54.75], [76.64, 52.64, -54.75], [82.64, 52.64, -54.75], [88.64, 52.64, -54.75], [94.64, 52.64, -54.75], [100.64, 52.64, -54.75], [-31.36, 58.64, -54.75], [-25.36, 58.64, -54.75], [-19.36, 58.64, -54.75], [-13.36, 58.64, -54.75], [-7.36, 58.64, -54.75], [-1.36, 58.64, -54.75], [4.64, 58.64, -54.75], [10.64, 58.64, -54.75], [16.64, 58.64, -54.75], [22.64, 58.64, -54.75], [28.64, 58.64, -54.75], [34.64, 58.64, -54.75], [40.64, 58.64, -54.75], [46.64, 58.64, -54.75], [52.64, 58.64, -54.75], [58.64, 58.64, -54.75], [64.64, 58.64, -54.75], [70.64, 58.64, -54.75], [76.64, 58.64, -54.75], [82.64, 58.64, -54.75], [88.64, 58.64, -54.75], [94.64, 58.64, -54.75], [100.64, 58.64, -54.75], [-31.36, 64.64, -54.75], [-25.36, 64.64, -54.75], [-19.36, 64.64, -54.75], [-13.36, 64.64, -54.75], [-7.36, 64.64, -54.75], [-1.36, 64.64, -54.75], [4.64, 64.64, -54.75], [10.64, 64.64, -54.75], [16.64, 64.64, -54.75], [22.64, 64.64, -54.75], [28.64, 64.64, -54.75], [34.64, 64.64, -54.75], [40.64, 64.64, -54.75], [46.64, 64.64, -54.75], [52.64, 64.64, -54.75], [58.64, 64.64, -54.75], [64.64, 64.64, -54.75], [70.64, 64.64, -54.75], [76.64, 64.64, -54.75], [82.64, 64.64, -54.75], [88.64, 64.64, -54.75], [94.64, 64.64, -54.75], [100.64, 64.64, -54.75], [-37.36, 70.64, -54.75], [-31.36, 70.64, -54.75], [-25.36, 70.64, -54.75], [-19.36, 70.64, -54.75], [-13.36, 70.64, -54.75], [-7.36, 70.64, -54.75], [-1.36, 70.64, -54.75], [4.64, 70.64, -54.75], [10.64, 70.64, -54.75], [16.64, 70.64, -54.75], [22.64, 70.64, -54.75], [28.64, 70.64, -54.75], [34.64, 70.64, -54.75], [40.64, 70.64, -54.75], [46.64, 70.64, -54.75], [52.64, 70.64, -54.75], [58.64, 70.64, -54.75], [64.64, 70.64, -54.75], [70.64, 70.64, -54.75], [76.64, 70.64, -54.75], [82.64, 70.64, -54.75], [88.64, 70.64, -54.75], [94.64, 70.64, -54.75], [100.64, 70.64, -54.75], [-37.36, 76.64, -54.75], [-31.36, 76.64, -54.75], [-25.36, 76.64, -54.75], [-19.36, 76.64, -54.75], [-13.36, 76.64, -54.75], [-7.36, 76.64, -54.75], [-1.36, 76.64, -54.75], [4.64, 76.64, -54.75], [10.64, 76.64, -54.75], [16.64, 76.64, -54.75], [22.64, 76.64, -54.75], [28.64, 76.64, -54.75], [34.64, 76.64, -54.75], [40.64, 76.64, -54.75], [46.64, 76.64, -54.75], [52.64, 76.64, -54.75], [58.64, 76.64, -54.75], [64.64, 76.64, -54.75], [70.64, 76.64, -54.75], [76.64, 76.64, -54.75], [82.64, 76.64, -54.75], [88.64, 76.64, -54.75], [94.64, 76.64, -54.75], [100.64, 76.64, -54.75], [-37.36, 82.64, -54.75], [-31.36, 82.64, -54.75], [-25.36, 82.64, -54.75], [-19.36, 82.64, -54.75], [-13.36, 82.64, -54.75], [-7.36, 82.64, -54.75], [-1.36, 82.64, -54.75], [4.64, 82.64, -54.75], [10.64, 82.64, -54.75], [16.64, 82.64, -54.75], [22.64, 82.64, -54.75], [28.64, 82.64, -54.75], [34.64, 82.64, -54.75], [40.64, 82.64, -54.75], [46.64, 82.64, -54.75], [52.64, 82.64, -54.75], [58.64, 82.64, -54.75], [64.64, 82.64, -54.75], [70.64, 82.64, -54.75], [76.64, 82.64, -54.75], [82.64, 82.64, -54.75], [88.64, 82.64, -54.75], [-43.36, 88.64, -54.75], [-37.36, 88.64, -54.75], [-31.36, 88.64, -54.75], [-25.36, 88.64, -54.75], [-19.36, 88.64, -54.75], [-13.36, 88.64, -54.75], [-7.36, 88.64, -54.75], [-1.36, 88.64, -54.75], [4.64, 88.64, -54.75], [10.64, 88.64, -54.75], [16.64, 88.64, -54.75], [22.64, 88.64, -54.75], [28.64, 88.64, -54.75], [34.64, 88.64, -54.75], [40.64, 88.64, -54.75], [46.64, 88.64, -54.75], [52.64, 88.64, -54.75], [58.64, 88.64, -54.75], [64.64, 88.64, -54.75], [70.64, 88.64, -54.75], [76.64, 88.64, -54.75], [82.64, 88.64, -54.75], [-43.36, 94.64, -54.75], [-37.36, 94.64, -54.75], [-31.36, 94.64, -54.75], [-25.36, 94.64, -54.75], [-19.36, 94.64, -54.75], [-13.36, 94.64, -54.75], [-7.36, 94.64, -54.75], [-1.36, 94.64, -54.75], [4.64, 94.64, -54.75], [10.64, 94.64, -54.75], [16.64, 94.64, -54.75], [22.64, 94.64, -54.75], [28.64, 94.64, -54.75], [76.64, -73.36, -48.75], [82.64, -73.36, -48.75], [76.64, -67.36, -48.75], [82.64, -67.36, -48.75], [88.64, -67.36, -48.75], [76.64, -61.36, -48.75], [82.64, -61.36, -48.75], [88.64, -61.36, -48.75], [76.64, -55.36, -48.75], [82.64, -55.36, -48.75], [88.64, -55.36, -48.75], [76.64, -49.36, -48.75], [82.64, -49.36, -48.75], [88.64, -49.36, -48.75], [76.64, -43.36, -48.75], [82.64, -43.36, -48.75], [88.64, -43.36, -48.75], [94.64, -43.36, -48.75], [76.64, -37.36, -48.75], [82.64, -37.36, -48.75], [88.64, -37.36, -48.75], [94.64, -37.36, -48.75], [76.64, -31.36, -48.75], [82.64, -31.36, -48.75], [88.64, -31.36, -48.75], [94.64, -31.36, -48.75], [-7.36, -25.36, -48.75], [-1.36, -25.36, -48.75], [4.64, -25.36, -48.75], [10.64, -25.36, -48.75], [16.64, -25.36, -48.75], [22.64, -25.36, -48.75], [28.64, -25.36, -48.75], [34.64, -25.36, -48.75], [40.64, -25.36, -48.75], [46.64, -25.36, -48.75], [52.64, -25.36, -48.75], [58.64, -25.36, -48.75], [64.64, -25.36, -48.75], [70.64, -25.36, -48.75], [76.64, -25.36, -48.75], [82.64, -25.36, -48.75], [88.64, -25.36, -48.75], [94.64, -25.36, -48.75], [-19.36, -19.36, -48.75], [-13.36, -19.36, -48.75], [-7.36, -19.36, -48.75], [-1.36, -19.36, -48.75], [4.64, -19.36, -48.75], [10.64, -19.36, -48.75], [16.64, -19.36, -48.75], [22.64, -19.36, -48.75], [28.64, -19.36, -48.75], [34.64, -19.36, -48.75], [40.64, -19.36, -48.75], [46.64, -19.36, -48.75], [52.64, -19.36, -48.75], [58.64, -19.36, -48.75], [64.64, -19.36, -48.75], [70.64, -19.36, -48.75], [76.64, -19.36, -48.75], [82.64, -19.36, -48.75], [88.64, -19.36, -48.75], [94.64, -19.36, -48.75], [-31.36, -13.36, -48.75], [-25.36, -13.36, -48.75], [-19.36, -13.36, -48.75], [-13.36, -13.36, -48.75], [-7.36, -13.36, -48.75], [-1.36, -13.36, -48.75], [4.64, -13.36, -48.75], [10.64, -13.36, -48.75], [16.64, -13.36, -48.75], [22.64, -13.36, -48.75], [28.64, -13.36, -48.75], [34.64, -13.36, -48.75], [40.64, -13.36, -48.75], [46.64, -13.36, -48.75], [52.64, -13.36, -48.75], [58.64, -13.36, -48.75], [64.64, -13.36, -48.75], [70.64, -13.36, -48.75], [76.64, -13.36, -48.75], [82.64, -13.36, -48.75], [88.64, -13.36, -48.75], [94.64, -13.36, -48.75], [-43.36, -7.36, -48.75], [-37.36, -7.36, -48.75], [-31.36, -7.36, -48.75], [-25.36, -7.36, -48.75], [-19.36, -7.36, -48.75], [-13.36, -7.36, -48.75], [-7.36, -7.36, -48.75], [-1.36, -7.36, -48.75], [4.64, -7.36, -48.75], [10.64, -7.36, -48.75], [16.64, -7.36, -48.75], [22.64, -7.36, -48.75], [28.64, -7.36, -48.75], [34.64, -7.36, -48.75], [40.64, -7.36, -48.75], [46.64, -7.36, -48.75], [52.64, -7.36, -48.75], [58.64, -7.36, -48.75], [64.64, -7.36, -48.75], [70.64, -7.36, -48.75], [76.64, -7.36, -48.75], [82.64, -7.36, -48.75], [88.64, -7.36, -48.75], [94.64, -7.36, -48.75], [-55.36, -1.36, -48.75], [-49.36, -1.36, -48.75], [-43.36, -1.36, -48.75], [-37.36, -1.36, -48.75], [-31.36, -1.36, -48.75], [-25.36, -1.36, -48.75], [-19.36, -1.36, -48.75], [-13.36, -1.36, -48.75], [-7.36, -1.36, -48.75], [-1.36, -1.36, -48.75], [4.64, -1.36, -48.75], [10.64, -1.36, -48.75], [16.64, -1.36, -48.75], [22.64, -1.36, -48.75], [28.64, -1.36, -48.75], [34.64, -1.36, -48.75], [40.64, -1.36, -48.75], [46.64, -1.36, -48.75], [52.64, -1.36, -48.75], [58.64, -1.36, -48.75], [64.64, -1.36, -48.75], [70.64, -1.36, -48.75], [76.64, -1.36, -48.75], [82.64, -1.36, -48.75], [88.64, -1.36, -48.75], [94.64, -1.36, -48.75], [100.64, -1.36, -48.75], [-55.36, 4.64, -48.75], [-49.36, 4.64, -48.75], [-43.36, 4.64, -48.75], [-37.36, 4.64, -48.75], [-31.36, 4.64, -48.75], [-25.36, 4.64, -48.75], [-19.36, 4.64, -48.75], [-13.36, 4.64, -48.75], [-7.36, 4.64, -48.75], [-1.36, 4.64, -48.75], [4.64, 4.64, -48.75], [10.64, 4.64, -48.75], [16.64, 4.64, -48.75], [22.64, 4.64, -48.75], [28.64, 4.64, -48.75], [34.64, 4.64, -48.75], [40.64, 4.64, -48.75], [46.64, 4.64, -48.75], [52.64, 4.64, -48.75], [58.64, 4.64, -48.75], [64.64, 4.64, -48.75], [70.64, 4.64, -48.75], [76.64, 4.64, -48.75], [82.64, 4.64, -48.75], [88.64, 4.64, -48.75], [94.64, 4.64, -48.75], [100.64, 4.64, -48.75], [-61.36, 10.64, -48.75], [-55.36, 10.64, -48.75], [-49.36, 10.64, -48.75], [-43.36, 10.64, -48.75], [-37.36, 10.64, -48.75], [-31.36, 10.64, -48.75], [-25.36, 10.64, -48.75], [-19.36, 10.64, -48.75], [-13.36, 10.64, -48.75], [-7.36, 10.64, -48.75], [-1.36, 10.64, -48.75], [4.64, 10.64, -48.75], [10.64, 10.64, -48.75], [16.64, 10.64, -48.75], [22.64, 10.64, -48.75], [28.64, 10.64, -48.75], [34.64, 10.64, -48.75], [40.64, 10.64, -48.75], [46.64, 10.64, -48.75], [52.64, 10.64, -48.75], [58.64, 10.64, -48.75], [64.64, 10.64, -48.75], [70.64, 10.64, -48.75], [76.64, 10.64, -48.75], [82.64, 10.64, -48.75], [88.64, 10.64, -48.75], [94.64, 10.64, -48.75], [100.64, 10.64, -48.75], [-61.36, 16.64, -48.75], [-55.36, 16.64, -48.75], [-49.36, 16.64, -48.75], [-43.36, 16.64, -48.75], [-37.36, 16.64, -48.75], [-31.36, 16.64, -48.75], [-25.36, 16.64, -48.75], [-19.36, 16.64, -48.75], [-13.36, 16.64, -48.75], [-7.36, 16.64, -48.75], [-1.36, 16.64, -48.75], [4.64, 16.64, -48.75], [10.64, 16.64, -48.75], [16.64, 16.64, -48.75], [22.64, 16.64, -48.75], [28.64, 16.64, -48.75], [34.64, 16.64, -48.75], [40.64, 16.64, -48.75], [46.64, 16.64, -48.75], [52.64, 16.64, -48.75], [58.64, 16.64, -48.75], [64.64, 16.64, -48.75], [70.64, 16.64, -48.75], [76.64, 16.64, -48.75], [82.64, 16.64, -48.75], [88.64, 16.64, -48.75], [94.64, 16.64, -48.75], [100.64, 16.64, -48.75], [-67.36, 22.64, -48.75], [-61.36, 22.64, -48.75], [-55.36, 22.64, -48.75], [-49.36, 22.64, -48.75], [-43.36, 22.64, -48.75], [-37.36, 22.64, -48.75], [-31.36, 22.64, -48.75], [-25.36, 22.64, -48.75], [-19.36, 22.64, -48.75], [-13.36, 22.64, -48.75], [-7.36, 22.64, -48.75], [-1.36, 22.64, -48.75], [4.64, 22.64, -48.75], [10.64, 22.64, -48.75], [16.64, 22.64, -48.75], [22.64, 22.64, -48.75], [28.64, 22.64, -48.75], [34.64, 22.64, -48.75], [40.64, 22.64, -48.75], [46.64, 22.64, -48.75], [52.64, 22.64, -48.75], [58.64, 22.64, -48.75], [64.64, 22.64, -48.75], [70.64, 22.64, -48.75], [76.64, 22.64, -48.75], [82.64, 22.64, -48.75], [88.64, 22.64, -48.75], [94.64, 22.64, -48.75], [100.64, 22.64, -48.75], [-67.36, 28.64, -48.75], [-61.36, 28.64, -48.75], [-55.36, 28.64, -48.75], [-49.36, 28.64, -48.75], [-43.36, 28.64, -48.75], [-37.36, 28.64, -48.75], [-31.36, 28.64, -48.75], [-25.36, 28.64, -48.75], [-19.36, 28.64, -48.75], [-13.36, 28.64, -48.75], [-7.36, 28.64, -48.75], [-1.36, 28.64, -48.75], [4.64, 28.64, -48.75], [10.64, 28.64, -48.75], [16.64, 28.64, -48.75], [22.64, 28.64, -48.75], [28.64, 28.64, -48.75], [34.64, 28.64, -48.75], [40.64, 28.64, -48.75], [46.64, 28.64, -48.75], [52.64, 28.64, -48.75], [58.64, 28.64, -48.75], [64.64, 28.64, -48.75], [70.64, 28.64, -48.75], [76.64, 28.64, -48.75], [82.64, 28.64, -48.75], [88.64, 28.64, -48.75], [94.64, 28.64, -48.75], [100.64, 28.64, -48.75], [-67.36, 34.64, -48.75], [-61.36, 34.64, -48.75], [-55.36, 34.64, -48.75], [-49.36, 34.64, -48.75], [-43.36, 34.64, -48.75], [-37.36, 34.64, -48.75], [-31.36, 34.64, -48.75], [-25.36, 34.64, -48.75], [-19.36, 34.64, -48.75], [-13.36, 34.64, -48.75], [-7.36, 34.64, -48.75], [-1.36, 34.64, -48.75], [4.64, 34.64, -48.75], [10.64, 34.64, -48.75], [16.64, 34.64, -48.75], [22.64, 34.64, -48.75], [28.64, 34.64, -48.75], [34.64, 34.64, -48.75], [40.64, 34.64, -48.75], [46.64, 34.64, -48.75], [52.64, 34.64, -48.75], [58.64, 34.64, -48.75], [64.64, 34.64, -48.75], [70.64, 34.64, -48.75], [76.64, 34.64, -48.75], [82.64, 34.64, -48.75], [88.64, 34.64, -48.75], [94.64, 34.64, -48.75], [100.64, 34.64, -48.75], [-73.36, 40.64, -48.75], [-67.36, 40.64, -48.75], [-61.36, 40.64, -48.75], [-55.36, 40.64, -48.75], [-49.36, 40.64, -48.75], [-43.36, 40.64, -48.75], [-37.36, 40.64, -48.75], [-31.36, 40.64, -48.75], [-25.36, 40.64, -48.75], [-19.36, 40.64, -48.75], [-13.36, 40.64, -48.75], [-7.36, 40.64, -48.75], [-1.36, 40.64, -48.75], [4.64, 40.64, -48.75], [10.64, 40.64, -48.75], [16.64, 40.64, -48.75], [22.64, 40.64, -48.75], [28.64, 40.64, -48.75], [34.64, 40.64, -48.75], [40.64, 40.64, -48.75], [46.64, 40.64, -48.75], [52.64, 40.64, -48.75], [58.64, 40.64, -48.75], [64.64, 40.64, -48.75], [70.64, 40.64, -48.75], [76.64, 40.64, -48.75], [82.64, 40.64, -48.75], [88.64, 40.64, -48.75], [94.64, 40.64, -48.75], [100.64, 40.64, -48.75], [-73.36, 46.64, -48.75], [-67.36, 46.64, -48.75], [-61.36, 46.64, -48.75], [-55.36, 46.64, -48.75], [-49.36, 46.64, -48.75], [-43.36, 46.64, -48.75], [-37.36, 46.64, -48.75], [-31.36, 46.64, -48.75], [-25.36, 46.64, -48.75], [-19.36, 46.64, -48.75], [-13.36, 46.64, -48.75], [-7.36, 46.64, -48.75], [-1.36, 46.64, -48.75], [4.64, 46.64, -48.75], [10.64, 46.64, -48.75], [16.64, 46.64, -48.75], [22.64, 46.64, -48.75], [28.64, 46.64, -48.75], [34.64, 46.64, -48.75], [40.64, 46.64, -48.75], [46.64, 46.64, -48.75], [52.64, 46.64, -48.75], [58.64, 46.64, -48.75], [64.64, 46.64, -48.75], [70.64, 46.64, -48.75], [76.64, 46.64, -48.75], [82.64, 46.64, -48.75], [88.64, 46.64, -48.75], [94.64, 46.64, -48.75], [100.64, 46.64, -48.75], [-79.36, 52.64, -48.75], [-73.36, 52.64, -48.75], [-67.36, 52.64, -48.75], [-61.36, 52.64, -48.75], [-55.36, 52.64, -48.75], [-49.36, 52.64, -48.75], [-43.36, 52.64, -48.75], [-37.36, 52.64, -48.75], [-31.36, 52.64, -48.75], [-25.36, 52.64, -48.75], [-19.36, 52.64, -48.75], [-13.36, 52.64, -48.75], [-7.36, 52.64, -48.75], [-1.36, 52.64, -48.75], [4.64, 52.64, -48.75], [10.64, 52.64, -48.75], [16.64, 52.64, -48.75], [22.64, 52.64, -48.75], [28.64, 52.64, -48.75], [34.64, 52.64, -48.75], [40.64, 52.64, -48.75], [46.64, 52.64, -48.75], [52.64, 52.64, -48.75], [58.64, 52.64, -48.75], [64.64, 52.64, -48.75], [70.64, 52.64, -48.75], [76.64, 52.64, -48.75], [82.64, 52.64, -48.75], [88.64, 52.64, -48.75], [94.64, 52.64, -48.75], [100.64, 52.64, -48.75], [-79.36, 58.64, -48.75], [-73.36, 58.64, -48.75], [-67.36, 58.64, -48.75], [-61.36, 58.64, -48.75], [-55.36, 58.64, -48.75], [-49.36, 58.64, -48.75], [-43.36, 58.64, -48.75], [-37.36, 58.64, -48.75], [-31.36, 58.64, -48.75], [-25.36, 58.64, -48.75], [-19.36, 58.64, -48.75], [-13.36, 58.64, -48.75], [-7.36, 58.64, -48.75], [-1.36, 58.64, -48.75], [4.64, 58.64, -48.75], [10.64, 58.64, -48.75], [16.64, 58.64, -48.75], [22.64, 58.64, -48.75], [28.64, 58.64, -48.75], [34.64, 58.64, -48.75], [40.64, 58.64, -48.75], [46.64, 58.64, -48.75], [52.64, 58.64, -48.75], [58.64, 58.64, -48.75], [64.64, 58.64, -48.75], [70.64, 58.64, -48.75], [76.64, 58.64, -48.75], [82.64, 58.64, -48.75], [88.64, 58.64, -48.75], [94.64, 58.64, -48.75], [100.64, 58.64, -48.75], [-85.36, 64.64, -48.75], [-79.36, 64.64, -48.75], [-73.36, 64.64, -48.75], [-67.36, 64.64, -48.75], [-61.36, 64.64, -48.75], [-55.36, 64.64, -48.75], [-49.36, 64.64, -48.75], [-43.36, 64.64, -48.75], [-37.36, 64.64, -48.75], [-31.36, 64.64, -48.75], [-25.36, 64.64, -48.75], [-19.36, 64.64, -48.75], [-13.36, 64.64, -48.75], [-7.36, 64.64, -48.75], [-1.36, 64.64, -48.75], [4.64, 64.64, -48.75], [10.64, 64.64, -48.75], [16.64, 64.64, -48.75], [22.64, 64.64, -48.75], [28.64, 64.64, -48.75], [34.64, 64.64, -48.75], [40.64, 64.64, -48.75], [46.64, 64.64, -48.75], [52.64, 64.64, -48.75], [58.64, 64.64, -48.75], [64.64, 64.64, -48.75], [70.64, 64.64, -48.75], [76.64, 64.64, -48.75], [82.64, 64.64, -48.75], [88.64, 64.64, -48.75], [94.64, 64.64, -48.75], [100.64, 64.64, -48.75], [-85.36, 70.64, -48.75], [-79.36, 70.64, -48.75], [-73.36, 70.64, -48.75], [-67.36, 70.64, -48.75], [-61.36, 70.64, -48.75], [-55.36, 70.64, -48.75], [-49.36, 70.64, -48.75], [-43.36, 70.64, -48.75], [-37.36, 70.64, -48.75], [-31.36, 70.64, -48.75], [-25.36, 70.64, -48.75], [-19.36, 70.64, -48.75], [-13.36, 70.64, -48.75], [-7.36, 70.64, -48.75], [-1.36, 70.64, -48.75], [4.64, 70.64, -48.75], [10.64, 70.64, -48.75], [16.64, 70.64, -48.75], [22.64, 70.64, -48.75], [28.64, 70.64, -48.75], [34.64, 70.64, -48.75], [40.64, 70.64, -48.75], [46.64, 70.64, -48.75], [52.64, 70.64, -48.75], [58.64, 70.64, -48.75], [64.64, 70.64, -48.75], [70.64, 70.64, -48.75], [76.64, 70.64, -48.75], [82.64, 70.64, -48.75], [88.64, 70.64, -48.75], [94.64, 70.64, -48.75], [100.64, 70.64, -48.75], [-97.36, 76.64, -48.75], [-91.36, 76.64, -48.75], [-85.36, 76.64, -48.75], [-79.36, 76.64, -48.75], [-73.36, 76.64, -48.75], [-67.36, 76.64, -48.75], [-61.36, 76.64, -48.75], [-55.36, 76.64, -48.75], [-49.36, 76.64, -48.75], [-43.36, 76.64, -48.75], [-37.36, 76.64, -48.75], [-31.36, 76.64, -48.75], [-25.36, 76.64, -48.75], [-19.36, 76.64, -48.75], [-13.36, 76.64, -48.75], [-7.36, 76.64, -48.75], [-1.36, 76.64, -48.75], [4.64, 76.64, -48.75], [10.64, 76.64, -48.75], [16.64, 76.64, -48.75], [22.64, 76.64, -48.75], [28.64, 76.64, -48.75], [34.64, 76.64, -48.75], [40.64, 76.64, -48.75], [46.64, 76.64, -48.75], [52.64, 76.64, -48.75], [58.64, 76.64, -48.75], [64.64, 76.64, -48.75], [70.64, 76.64, -48.75], [76.64, 76.64, -48.75], [82.64, 76.64, -48.75], [88.64, 76.64, -48.75], [94.64, 76.64, -48.75], [100.64, 76.64, -48.75], [-97.36, 82.64, -48.75], [-91.36, 82.64, -48.75], [-85.36, 82.64, -48.75], [-79.36, 82.64, -48.75], [-73.36, 82.64, -48.75], [-67.36, 82.64, -48.75], [-61.36, 82.64, -48.75], [-55.36, 82.64, -48.75], [-49.36, 82.64, -48.75], [-43.36, 82.64, -48.75], [-37.36, 82.64, -48.75], [-31.36, 82.64, -48.75], [-25.36, 82.64, -48.75], [-19.36, 82.64, -48.75], [-13.36, 82.64, -48.75], [-7.36, 82.64, -48.75], [-1.36, 82.64, -48.75], [4.64, 82.64, -48.75], [10.64, 82.64, -48.75], [16.64, 82.64, -48.75], [22.64, 82.64, -48.75], [28.64, 82.64, -48.75], [34.64, 82.64, -48.75], [40.64, 82.64, -48.75], [46.64, 82.64, -48.75], [52.64, 82.64, -48.75], [58.64, 82.64, -48.75], [64.64, 82.64, -48.75], [70.64, 82.64, -48.75], [76.64, 82.64, -48.75], [82.64, 82.64, -48.75], [88.64, 82.64, -48.75], [-97.36, 88.64, -48.75], [-91.36, 88.64, -48.75], [-85.36, 88.64, -48.75], [-79.36, 88.64, -48.75], [-73.36, 88.64, -48.75], [-67.36, 88.64, -48.75], [-61.36, 88.64, -48.75], [-55.36, 88.64, -48.75], [-49.36, 88.64, -48.75], [-43.36, 88.64, -48.75], [-37.36, 88.64, -48.75], [-31.36, 88.64, -48.75], [-25.36, 88.64, -48.75], [-19.36, 88.64, -48.75], [-13.36, 88.64, -48.75], [-7.36, 88.64, -48.75], [-1.36, 88.64, -48.75], [4.64, 88.64, -48.75], [10.64, 88.64, -48.75], [16.64, 88.64, -48.75], [22.64, 88.64, -48.75], [28.64, 88.64, -48.75], [34.64, 88.64, -48.75], [40.64, 88.64, -48.75], [46.64, 88.64, -48.75], [52.64, 88.64, -48.75], [58.64, 88.64, -48.75], [64.64, 88.64, -48.75], [70.64, 88.64, -48.75], [76.64, 88.64, -48.75], [82.64, 88.64, -48.75], [88.64, 88.64, -48.75], [-85.36, 94.64, -48.75], [-79.36, 94.64, -48.75], [-73.36, 94.64, -48.75], [-67.36, 94.64, -48.75], [-61.36, 94.64, -48.75], [-55.36, 94.64, -48.75], [-49.36, 94.64, -48.75], [-43.36, 94.64, -48.75], [-37.36, 94.64, -48.75], [-31.36, 94.64, -48.75], [-25.36, 94.64, -48.75], [-19.36, 94.64, -48.75], [-13.36, 94.64, -48.75], [-7.36, 94.64, -48.75], [-1.36, 94.64, -48.75], [4.64, 94.64, -48.75], [10.64, 94.64, -48.75], [16.64, 94.64, -48.75], [22.64, 94.64, -48.75], [28.64, 94.64, -48.75], [34.64, 94.64, -48.75], [-1.36, 100.64, -48.75], [4.64, 100.64, -48.75], [70.64, -97.36, -42.75], [76.64, -97.36, -42.75], [82.64, -97.36, -42.75], [88.64, -97.36, -42.75], [58.64, -91.36, -42.75], [64.64, -91.36, -42.75], [70.64, -91.36, -42.75], [76.64, -91.36, -42.75], [82.64, -91.36, -42.75], [88.64, -91.36, -42.75], [46.64, -85.36, -42.75], [52.64, -85.36, -42.75], [58.64, -85.36, -42.75], [64.64, -85.36, -42.75], [70.64, -85.36, -42.75], [76.64, -85.36, -42.75], [82.64, -85.36, -42.75], [88.64, -85.36, -42.75], [40.64, -79.36, -42.75], [46.64, -79.36, -42.75], [52.64, -79.36, -42.75], [58.64, -79.36, -42.75], [64.64, -79.36, -42.75], [70.64, -79.36, -42.75], [76.64, -79.36, -42.75], [82.64, -79.36, -42.75], [88.64, -79.36, -42.75], [28.64, -73.36, -42.75], [34.64, -73.36, -42.75], [40.64, -73.36, -42.75], [46.64, -73.36, -42.75], [52.64, -73.36, -42.75], [58.64, -73.36, -42.75], [64.64, -73.36, -42.75], [70.64, -73.36, -42.75], [76.64, -73.36, -42.75], [82.64, -73.36, -42.75], [88.64, -73.36, -42.75], [22.64, -67.36, -42.75], [28.64, -67.36, -42.75], [34.64, -67.36, -42.75], [40.64, -67.36, -42.75], [46.64, -67.36, -42.75], [52.64, -67.36, -42.75], [58.64, -67.36, -42.75], [64.64, -67.36, -42.75], [70.64, -67.36, -42.75], [76.64, -67.36, -42.75], [82.64, -67.36, -42.75], [88.64, -67.36, -42.75], [22.64, -61.36, -42.75], [28.64, -61.36, -42.75], [34.64, -61.36, -42.75], [40.64, -61.36, -42.75], [46.64, -61.36, -42.75], [52.64, -61.36, -42.75], [58.64, -61.36, -42.75], [64.64, -61.36, -42.75], [70.64, -61.36, -42.75], [76.64, -61.36, -42.75], [82.64, -61.36, -42.75], [88.64, -61.36, -42.75], [-7.36, -55.36, -42.75], [-1.36, -55.36, -42.75], [4.64, -55.36, -42.75], [10.64, -55.36, -42.75], [16.64, -55.36, -42.75], [22.64, -55.36, -42.75], [28.64, -55.36, -42.75], [34.64, -55.36, -42.75], [40.64, -55.36, -42.75], [46.64, -55.36, -42.75], [52.64, -55.36, -42.75], [58.64, -55.36, -42.75], [64.64, -55.36, -42.75], [70.64, -55.36, -42.75], [76.64, -55.36, -42.75], [82.64, -55.36, -42.75], [88.64, -55.36, -42.75], [94.64, -55.36, -42.75], [-13.36, -49.36, -42.75], [-7.36, -49.36, -42.75], [-1.36, -49.36, -42.75], [4.64, -49.36, -42.75], [10.64, -49.36, -42.75], [16.64, -49.36, -42.75], [22.64, -49.36, -42.75], [28.64, -49.36, -42.75], [34.64, -49.36, -42.75], [40.64, -49.36, -42.75], [46.64, -49.36, -42.75], [52.64, -49.36, -42.75], [58.64, -49.36, -42.75], [64.64, -49.36, -42.75], [70.64, -49.36, -42.75], [76.64, -49.36, -42.75], [82.64, -49.36, -42.75], [88.64, -49.36, -42.75], [94.64, -49.36, -42.75], [-25.36, -43.36, -42.75], [-19.36, -43.36, -42.75], [-13.36, -43.36, -42.75], [-7.36, -43.36, -42.75], [-1.36, -43.36, -42.75], [4.64, -43.36, -42.75], [10.64, -43.36, -42.75], [16.64, -43.36, -42.75], [22.64, -43.36, -42.75], [28.64, -43.36, -42.75], [34.64, -43.36, -42.75], [40.64, -43.36, -42.75], [46.64, -43.36, -42.75], [52.64, -43.36, -42.75], [58.64, -43.36, -42.75], [64.64, -43.36, -42.75], [70.64, -43.36, -42.75], [76.64, -43.36, -42.75], [82.64, -43.36, -42.75], [88.64, -43.36, -42.75], [94.64, -43.36, -42.75], [-37.36, -37.36, -42.75], [-31.36, -37.36, -42.75], [-25.36, -37.36, -42.75], [-19.36, -37.36, -42.75], [-13.36, -37.36, -42.75], [-7.36, -37.36, -42.75], [-1.36, -37.36, -42.75], [4.64, -37.36, -42.75], [10.64, -37.36, -42.75], [16.64, -37.36, -42.75], [22.64, -37.36, -42.75], [28.64, -37.36, -42.75], [34.64, -37.36, -42.75], [40.64, -37.36, -42.75], [46.64, -37.36, -42.75], [52.64, -37.36, -42.75], [58.64, -37.36, -42.75], [64.64, -37.36, -42.75], [70.64, -37.36, -42.75], [76.64, -37.36, -42.75], [82.64, -37.36, -42.75], [88.64, -37.36, -42.75], [94.64, -37.36, -42.75], [-49.36, -31.36, -42.75], [-43.36, -31.36, -42.75], [-37.36, -31.36, -42.75], [-31.36, -31.36, -42.75], [-25.36, -31.36, -42.75], [-19.36, -31.36, -42.75], [-13.36, -31.36, -42.75], [-7.36, -31.36, -42.75], [-1.36, -31.36, -42.75], [4.64, -31.36, -42.75], [10.64, -31.36, -42.75], [16.64, -31.36, -42.75], [22.64, -31.36, -42.75], [28.64, -31.36, -42.75], [34.64, -31.36, -42.75], [40.64, -31.36, -42.75], [46.64, -31.36, -42.75], [52.64, -31.36, -42.75], [58.64, -31.36, -42.75], [64.64, -31.36, -42.75], [70.64, -31.36, -42.75], [76.64, -31.36, -42.75], [82.64, -31.36, -42.75], [88.64, -31.36, -42.75], [94.64, -31.36, -42.75], [-61.36, -25.36, -42.75], [-55.36, -25.36, -42.75], [-49.36, -25.36, -42.75], [-43.36, -25.36, -42.75], [-37.36, -25.36, -42.75], [-31.36, -25.36, -42.75], [-25.36, -25.36, -42.75], [-19.36, -25.36, -42.75], [-13.36, -25.36, -42.75], [-7.36, -25.36, -42.75], [-1.36, -25.36, -42.75], [4.64, -25.36, -42.75], [10.64, -25.36, -42.75], [16.64, -25.36, -42.75], [22.64, -25.36, -42.75], [28.64, -25.36, -42.75], [34.64, -25.36, -42.75], [40.64, -25.36, -42.75], [46.64, -25.36, -42.75], [52.64, -25.36, -42.75], [58.64, -25.36, -42.75], [64.64, -25.36, -42.75], [70.64, -25.36, -42.75], [76.64, -25.36, -42.75], [82.64, -25.36, -42.75], [88.64, -25.36, -42.75], [94.64, -25.36, -42.75], [-73.36, -19.36, -42.75], [-67.36, -19.36, -42.75], [-61.36, -19.36, -42.75], [-55.36, -19.36, -42.75], [-49.36, -19.36, -42.75], [-43.36, -19.36, -42.75], [-37.36, -19.36, -42.75], [-31.36, -19.36, -42.75], [-25.36, -19.36, -42.75], [-19.36, -19.36, -42.75], [-13.36, -19.36, -42.75], [-7.36, -19.36, -42.75], [-1.36, -19.36, -42.75], [4.64, -19.36, -42.75], [10.64, -19.36, -42.75], [16.64, -19.36, -42.75], [22.64, -19.36, -42.75], [28.64, -19.36, -42.75], [34.64, -19.36, -42.75], [40.64, -19.36, -42.75], [46.64, -19.36, -42.75], [52.64, -19.36, -42.75], [58.64, -19.36, -42.75], [64.64, -19.36, -42.75], [70.64, -19.36, -42.75], [76.64, -19.36, -42.75], [82.64, -19.36, -42.75], [88.64, -19.36, -42.75], [94.64, -19.36, -42.75], [-97.36, -13.36, -42.75], [-79.36, -13.36, -42.75], [-73.36, -13.36, -42.75], [-67.36, -13.36, -42.75], [-61.36, -13.36, -42.75], [-55.36, -13.36, -42.75], [-49.36, -13.36, -42.75], [-43.36, -13.36, -42.75], [-37.36, -13.36, -42.75], [-31.36, -13.36, -42.75], [-25.36, -13.36, -42.75], [-19.36, -13.36, -42.75], [-13.36, -13.36, -42.75], [-7.36, -13.36, -42.75], [-1.36, -13.36, -42.75], [4.64, -13.36, -42.75], [10.64, -13.36, -42.75], [16.64, -13.36, -42.75], [22.64, -13.36, -42.75], [28.64, -13.36, -42.75], [34.64, -13.36, -42.75], [40.64, -13.36, -42.75], [46.64, -13.36, -42.75], [52.64, -13.36, -42.75], [58.64, -13.36, -42.75], [64.64, -13.36, -42.75], [70.64, -13.36, -42.75], [76.64, -13.36, -42.75], [82.64, -13.36, -42.75], [88.64, -13.36, -42.75], [94.64, -13.36, -42.75], [-97.36, -7.36, -42.75], [-91.36, -7.36, -42.75], [-85.36, -7.36, -42.75], [-79.36, -7.36, -42.75], [-73.36, -7.36, -42.75], [-67.36, -7.36, -42.75], [-61.36, -7.36, -42.75], [-55.36, -7.36, -42.75], [-49.36, -7.36, -42.75], [-43.36, -7.36, -42.75], [-37.36, -7.36, -42.75], [-31.36, -7.36, -42.75], [-25.36, -7.36, -42.75], [-19.36, -7.36, -42.75], [-13.36, -7.36, -42.75], [-7.36, -7.36, -42.75], [-1.36, -7.36, -42.75], [4.64, -7.36, -42.75], [10.64, -7.36, -42.75], [16.64, -7.36, -42.75], [22.64, -7.36, -42.75], [28.64, -7.36, -42.75], [34.64, -7.36, -42.75], [40.64, -7.36, -42.75], [46.64, -7.36, -42.75], [52.64, -7.36, -42.75], [58.64, -7.36, -42.75], [64.64, -7.36, -42.75], [70.64, -7.36, -42.75], [76.64, -7.36, -42.75], [82.64, -7.36, -42.75], [88.64, -7.36, -42.75], [94.64, -7.36, -42.75], [100.64, -7.36, -42.75], [-103.36, -1.36, -42.75], [-97.36, -1.36, -42.75], [-91.36, -1.36, -42.75], [-85.36, -1.36, -42.75], [-79.36, -1.36, -42.75], [-73.36, -1.36, -42.75], [-67.36, -1.36, -42.75], [-61.36, -1.36, -42.75], [-55.36, -1.36, -42.75], [-49.36, -1.36, -42.75], [-43.36, -1.36, -42.75], [-37.36, -1.36, -42.75], [-31.36, -1.36, -42.75], [-25.36, -1.36, -42.75], [-19.36, -1.36, -42.75], [-13.36, -1.36, -42.75], [-7.36, -1.36, -42.75], [-1.36, -1.36, -42.75], [4.64, -1.36, -42.75], [10.64, -1.36, -42.75], [16.64, -1.36, -42.75], [22.64, -1.36, -42.75], [28.64, -1.36, -42.75], [34.64, -1.36, -42.75], [40.64, -1.36, -42.75], [46.64, -1.36, -42.75], [52.64, -1.36, -42.75], [58.64, -1.36, -42.75], [64.64, -1.36, -42.75], [70.64, -1.36, -42.75], [76.64, -1.36, -42.75], [82.64, -1.36, -42.75], [88.64, -1.36, -42.75], [94.64, -1.36, -42.75], [100.64, -1.36, -42.75], [-103.36, 4.64, -42.75], [-97.36, 4.64, -42.75], [-91.36, 4.64, -42.75], [-85.36, 4.64, -42.75], [-79.36, 4.64, -42.75], [-73.36, 4.64, -42.75], [-67.36, 4.64, -42.75], [-61.36, 4.64, -42.75], [-55.36, 4.64, -42.75], [-49.36, 4.64, -42.75], [-43.36, 4.64, -42.75], [-37.36, 4.64, -42.75], [-31.36, 4.64, -42.75], [-25.36, 4.64, -42.75], [-19.36, 4.64, -42.75], [-13.36, 4.64, -42.75], [-7.36, 4.64, -42.75], [-1.36, 4.64, -42.75], [4.64, 4.64, -42.75], [10.64, 4.64, -42.75], [16.64, 4.64, -42.75], [22.64, 4.64, -42.75], [28.64, 4.64, -42.75], [34.64, 4.64, -42.75], [40.64, 4.64, -42.75], [46.64, 4.64, -42.75], [52.64, 4.64, -42.75], [58.64, 4.64, -42.75], [64.64, 4.64, -42.75], [70.64, 4.64, -42.75], [76.64, 4.64, -42.75], [82.64, 4.64, -42.75], [88.64, 4.64, -42.75], [94.64, 4.64, -42.75], [100.64, 4.64, -42.75], [-103.36, 10.64, -42.75], [-97.36, 10.64, -42.75], [-91.36, 10.64, -42.75], [-85.36, 10.64, -42.75], [-79.36, 10.64, -42.75], [-73.36, 10.64, -42.75], [-67.36, 10.64, -42.75], [-61.36, 10.64, -42.75], [-55.36, 10.64, -42.75], [-49.36, 10.64, -42.75], [-43.36, 10.64, -42.75], [-37.36, 10.64, -42.75], [-31.36, 10.64, -42.75], [-25.36, 10.64, -42.75], [-19.36, 10.64, -42.75], [-13.36, 10.64, -42.75], [-7.36, 10.64, -42.75], [-1.36, 10.64, -42.75], [4.64, 10.64, -42.75], [10.64, 10.64, -42.75], [16.64, 10.64, -42.75], [22.64, 10.64, -42.75], [28.64, 10.64, -42.75], [34.64, 10.64, -42.75], [40.64, 10.64, -42.75], [46.64, 10.64, -42.75], [52.64, 10.64, -42.75], [58.64, 10.64, -42.75], [64.64, 10.64, -42.75], [70.64, 10.64, -42.75], [76.64, 10.64, -42.75], [82.64, 10.64, -42.75], [88.64, 10.64, -42.75], [94.64, 10.64, -42.75], [100.64, 10.64, -42.75], [-103.36, 16.64, -42.75], [-97.36, 16.64, -42.75], [-91.36, 16.64, -42.75], [-85.36, 16.64, -42.75], [-79.36, 16.64, -42.75], [-73.36, 16.64, -42.75], [-67.36, 16.64, -42.75], [-61.36, 16.64, -42.75], [-55.36, 16.64, -42.75], [-49.36, 16.64, -42.75], [-43.36, 16.64, -42.75], [-37.36, 16.64, -42.75], [-31.36, 16.64, -42.75], [-25.36, 16.64, -42.75], [-19.36, 16.64, -42.75], [-13.36, 16.64, -42.75], [-7.36, 16.64, -42.75], [-1.36, 16.64, -42.75], [4.64, 16.64, -42.75], [10.64, 16.64, -42.75], [16.64, 16.64, -42.75], [22.64, 16.64, -42.75], [28.64, 16.64, -42.75], [34.64, 16.64, -42.75], [40.64, 16.64, -42.75], [46.64, 16.64, -42.75], [52.64, 16.64, -42.75], [58.64, 16.64, -42.75], [64.64, 16.64, -42.75], [70.64, 16.64, -42.75], [76.64, 16.64, -42.75], [82.64, 16.64, -42.75], [88.64, 16.64, -42.75], [94.64, 16.64, -42.75], [100.64, 16.64, -42.75], [-103.36, 22.64, -42.75], [-97.36, 22.64, -42.75], [-91.36, 22.64, -42.75], [-85.36, 22.64, -42.75], [-79.36, 22.64, -42.75], [-73.36, 22.64, -42.75], [-67.36, 22.64, -42.75], [-61.36, 22.64, -42.75], [-55.36, 22.64, -42.75], [-49.36, 22.64, -42.75], [-43.36, 22.64, -42.75], [-37.36, 22.64, -42.75], [-31.36, 22.64, -42.75], [-25.36, 22.64, -42.75], [-19.36, 22.64, -42.75], [-13.36, 22.64, -42.75], [-7.36, 22.64, -42.75], [-1.36, 22.64, -42.75], [4.64, 22.64, -42.75], [10.64, 22.64, -42.75], [16.64, 22.64, -42.75], [22.64, 22.64, -42.75], [28.64, 22.64, -42.75], [34.64, 22.64, -42.75], [40.64, 22.64, -42.75], [46.64, 22.64, -42.75], [52.64, 22.64, -42.75], [58.64, 22.64, -42.75], [64.64, 22.64, -42.75], [70.64, 22.64, -42.75], [76.64, 22.64, -42.75], [82.64, 22.64, -42.75], [88.64, 22.64, -42.75], [94.64, 22.64, -42.75], [100.64, 22.64, -42.75], [-103.36, 28.64, -42.75], [-97.36, 28.64, -42.75], [-91.36, 28.64, -42.75], [-85.36, 28.64, -42.75], [-79.36, 28.64, -42.75], [-73.36, 28.64, -42.75], [-67.36, 28.64, -42.75], [-61.36, 28.64, -42.75], [-55.36, 28.64, -42.75], [-49.36, 28.64, -42.75], [-43.36, 28.64, -42.75], [-37.36, 28.64, -42.75], [-31.36, 28.64, -42.75], [-25.36, 28.64, -42.75], [-19.36, 28.64, -42.75], [-13.36, 28.64, -42.75], [-7.36, 28.64, -42.75], [-1.36, 28.64, -42.75], [4.64, 28.64, -42.75], [10.64, 28.64, -42.75], [16.64, 28.64, -42.75], [22.64, 28.64, -42.75], [28.64, 28.64, -42.75], [34.64, 28.64, -42.75], [40.64, 28.64, -42.75], [46.64, 28.64, -42.75], [52.64, 28.64, -42.75], [58.64, 28.64, -42.75], [64.64, 28.64, -42.75], [70.64, 28.64, -42.75], [76.64, 28.64, -42.75], [82.64, 28.64, -42.75], [88.64, 28.64, -42.75], [94.64, 28.64, -42.75], [100.64, 28.64, -42.75], [-97.36, 34.64, -42.75], [-91.36, 34.64, -42.75], [-85.36, 34.64, -42.75], [-79.36, 34.64, -42.75], [-73.36, 34.64, -42.75], [-67.36, 34.64, -42.75], [-61.36, 34.64, -42.75], [-55.36, 34.64, -42.75], [-49.36, 34.64, -42.75], [-43.36, 34.64, -42.75], [-37.36, 34.64, -42.75], [-31.36, 34.64, -42.75], [-25.36, 34.64, -42.75], [-19.36, 34.64, -42.75], [-13.36, 34.64, -42.75], [-7.36, 34.64, -42.75], [-1.36, 34.64, -42.75], [4.64, 34.64, -42.75], [10.64, 34.64, -42.75], [16.64, 34.64, -42.75], [22.64, 34.64, -42.75], [28.64, 34.64, -42.75], [34.64, 34.64, -42.75], [40.64, 34.64, -42.75], [46.64, 34.64, -42.75], [52.64, 34.64, -42.75], [58.64, 34.64, -42.75], [64.64, 34.64, -42.75], [70.64, 34.64, -42.75], [76.64, 34.64, -42.75], [82.64, 34.64, -42.75], [88.64, 34.64, -42.75], [94.64, 34.64, -42.75], [100.64, 34.64, -42.75], [-97.36, 40.64, -42.75], [-91.36, 40.64, -42.75], [-85.36, 40.64, -42.75], [-79.36, 40.64, -42.75], [-73.36, 40.64, -42.75], [-67.36, 40.64, -42.75], [-61.36, 40.64, -42.75], [-55.36, 40.64, -42.75], [-49.36, 40.64, -42.75], [-43.36, 40.64, -42.75], [-37.36, 40.64, -42.75], [-31.36, 40.64, -42.75], [-25.36, 40.64, -42.75], [-19.36, 40.64, -42.75], [-13.36, 40.64, -42.75], [-7.36, 40.64, -42.75], [-1.36, 40.64, -42.75], [4.64, 40.64, -42.75], [10.64, 40.64, -42.75], [16.64, 40.64, -42.75], [22.64, 40.64, -42.75], [28.64, 40.64, -42.75], [34.64, 40.64, -42.75], [40.64, 40.64, -42.75], [46.64, 40.64, -42.75], [52.64, 40.64, -42.75], [58.64, 40.64, -42.75], [64.64, 40.64, -42.75], [70.64, 40.64, -42.75], [76.64, 40.64, -42.75], [82.64, 40.64, -42.75], [88.64, 40.64, -42.75], [94.64, 40.64, -42.75], [100.64, 40.64, -42.75], [-97.36, 46.64, -42.75], [-91.36, 46.64, -42.75], [-85.36, 46.64, -42.75], [-79.36, 46.64, -42.75], [-73.36, 46.64, -42.75], [-67.36, 46.64, -42.75], [-61.36, 46.64, -42.75], [-55.36, 46.64, -42.75], [-49.36, 46.64, -42.75], [-43.36, 46.64, -42.75], [-37.36, 46.64, -42.75], [-31.36, 46.64, -42.75], [-25.36, 46.64, -42.75], [-19.36, 46.64, -42.75], [-13.36, 46.64, -42.75], [-7.36, 46.64, -42.75], [-1.36, 46.64, -42.75], [4.64, 46.64, -42.75], [10.64, 46.64, -42.75], [16.64, 46.64, -42.75], [22.64, 46.64, -42.75], [28.64, 46.64, -42.75], [34.64, 46.64, -42.75], [40.64, 46.64, -42.75], [46.64, 46.64, -42.75], [52.64, 46.64, -42.75], [58.64, 46.64, -42.75], [64.64, 46.64, -42.75], [70.64, 46.64, -42.75], [76.64, 46.64, -42.75], [82.64, 46.64, -42.75], [88.64, 46.64, -42.75], [94.64, 46.64, -42.75], [100.64, 46.64, -42.75], [-97.36, 52.64, -42.75], [-91.36, 52.64, -42.75], [-85.36, 52.64, -42.75], [-79.36, 52.64, -42.75], [-73.36, 52.64, -42.75], [-67.36, 52.64, -42.75], [-61.36, 52.64, -42.75], [-55.36, 52.64, -42.75], [-49.36, 52.64, -42.75], [-43.36, 52.64, -42.75], [-37.36, 52.64, -42.75], [-31.36, 52.64, -42.75], [-25.36, 52.64, -42.75], [-19.36, 52.64, -42.75], [-13.36, 52.64, -42.75], [-7.36, 52.64, -42.75], [-1.36, 52.64, -42.75], [4.64, 52.64, -42.75], [10.64, 52.64, -42.75], [16.64, 52.64, -42.75], [22.64, 52.64, -42.75], [28.64, 52.64, -42.75], [34.64, 52.64, -42.75], [40.64, 52.64, -42.75], [46.64, 52.64, -42.75], [52.64, 52.64, -42.75], [58.64, 52.64, -42.75], [64.64, 52.64, -42.75], [70.64, 52.64, -42.75], [76.64, 52.64, -42.75], [82.64, 52.64, -42.75], [88.64, 52.64, -42.75], [94.64, 52.64, -42.75], [100.64, 52.64, -42.75], [-97.36, 58.64, -42.75], [-91.36, 58.64, -42.75], [-85.36, 58.64, -42.75], [-79.36, 58.64, -42.75], [-73.36, 58.64, -42.75], [-67.36, 58.64, -42.75], [-61.36, 58.64, -42.75], [-55.36, 58.64, -42.75], [-49.36, 58.64, -42.75], [-43.36, 58.64, -42.75], [-37.36, 58.64, -42.75], [-31.36, 58.64, -42.75], [-25.36, 58.64, -42.75], [-19.36, 58.64, -42.75], [-13.36, 58.64, -42.75], [-7.36, 58.64, -42.75], [-1.36, 58.64, -42.75], [4.64, 58.64, -42.75], [10.64, 58.64, -42.75], [16.64, 58.64, -42.75], [22.64, 58.64, -42.75], [28.64, 58.64, -42.75], [34.64, 58.64, -42.75], [40.64, 58.64, -42.75], [46.64, 58.64, -42.75], [52.64, 58.64, -42.75], [58.64, 58.64, -42.75], [64.64, 58.64, -42.75], [70.64, 58.64, -42.75], [76.64, 58.64, -42.75], [82.64, 58.64, -42.75], [88.64, 58.64, -42.75], [94.64, 58.64, -42.75], [100.64, 58.64, -42.75], [-97.36, 64.64, -42.75], [-91.36, 64.64, -42.75], [-85.36, 64.64, -42.75], [-79.36, 64.64, -42.75], [-73.36, 64.64, -42.75], [-67.36, 64.64, -42.75], [-61.36, 64.64, -42.75], [-55.36, 64.64, -42.75], [-49.36, 64.64, -42.75], [-43.36, 64.64, -42.75], [-37.36, 64.64, -42.75], [-31.36, 64.64, -42.75], [-25.36, 64.64, -42.75], [-19.36, 64.64, -42.75], [-13.36, 64.64, -42.75], [-7.36, 64.64, -42.75], [-1.36, 64.64, -42.75], [4.64, 64.64, -42.75], [10.64, 64.64, -42.75], [16.64, 64.64, -42.75], [22.64, 64.64, -42.75], [28.64, 64.64, -42.75], [34.64, 64.64, -42.75], [40.64, 64.64, -42.75], [46.64, 64.64, -42.75], [52.64, 64.64, -42.75], [58.64, 64.64, -42.75], [64.64, 64.64, -42.75], [70.64, 64.64, -42.75], [76.64, 64.64, -42.75], [82.64, 64.64, -42.75], [88.64, 64.64, -42.75], [94.64, 64.64, -42.75], [100.64, 64.64, -42.75], [-97.36, 70.64, -42.75], [-91.36, 70.64, -42.75], [-85.36, 70.64, -42.75], [-79.36, 70.64, -42.75], [-73.36, 70.64, -42.75], [-67.36, 70.64, -42.75], [-61.36, 70.64, -42.75], [-55.36, 70.64, -42.75], [-49.36, 70.64, -42.75], [-43.36, 70.64, -42.75], [-37.36, 70.64, -42.75], [-31.36, 70.64, -42.75], [-25.36, 70.64, -42.75], [-19.36, 70.64, -42.75], [-13.36, 70.64, -42.75], [-7.36, 70.64, -42.75], [-1.36, 70.64, -42.75], [4.64, 70.64, -42.75], [10.64, 70.64, -42.75], [16.64, 70.64, -42.75], [22.64, 70.64, -42.75], [28.64, 70.64, -42.75], [34.64, 70.64, -42.75], [40.64, 70.64, -42.75], [46.64, 70.64, -42.75], [52.64, 70.64, -42.75], [58.64, 70.64, -42.75], [64.64, 70.64, -42.75], [70.64, 70.64, -42.75], [76.64, 70.64, -42.75], [82.64, 70.64, -42.75], [88.64, 70.64, -42.75], [94.64, 70.64, -42.75], [100.64, 70.64, -42.75], [-97.36, 76.64, -42.75], [-91.36, 76.64, -42.75], [-85.36, 76.64, -42.75], [-79.36, 76.64, -42.75], [-73.36, 76.64, -42.75], [-67.36, 76.64, -42.75], [-61.36, 76.64, -42.75], [-55.36, 76.64, -42.75], [-49.36, 76.64, -42.75], [-43.36, 76.64, -42.75], [-37.36, 76.64, -42.75], [-31.36, 76.64, -42.75], [-25.36, 76.64, -42.75], [-19.36, 76.64, -42.75], [-13.36, 76.64, -42.75], [-7.36, 76.64, -42.75], [-1.36, 76.64, -42.75], [4.64, 76.64, -42.75], [10.64, 76.64, -42.75], [16.64, 76.64, -42.75], [22.64, 76.64, -42.75], [28.64, 76.64, -42.75], [34.64, 76.64, -42.75], [40.64, 76.64, -42.75], [46.64, 76.64, -42.75], [52.64, 76.64, -42.75], [58.64, 76.64, -42.75], [64.64, 76.64, -42.75], [70.64, 76.64, -42.75], [76.64, 76.64, -42.75], [82.64, 76.64, -42.75], [88.64, 76.64, -42.75], [94.64, 76.64, -42.75], [100.64, 76.64, -42.75], [-97.36, 82.64, -42.75], [-91.36, 82.64, -42.75], [-85.36, 82.64, -42.75], [-79.36, 82.64, -42.75], [-73.36, 82.64, -42.75], [-67.36, 82.64, -42.75], [-61.36, 82.64, -42.75], [-55.36, 82.64, -42.75], [-49.36, 82.64, -42.75], [-43.36, 82.64, -42.75], [-37.36, 82.64, -42.75], [-31.36, 82.64, -42.75], [-25.36, 82.64, -42.75], [-19.36, 82.64, -42.75], [-13.36, 82.64, -42.75], [-7.36, 82.64, -42.75], [-1.36, 82.64, -42.75], [4.64, 82.64, -42.75], [10.64, 82.64, -42.75], [16.64, 82.64, -42.75], [22.64, 82.64, -42.75], [28.64, 82.64, -42.75], [34.64, 82.64, -42.75], [40.64, 82.64, -42.75], [46.64, 82.64, -42.75], [52.64, 82.64, -42.75], [58.64, 82.64, -42.75], [64.64, 82.64, -42.75], [70.64, 82.64, -42.75], [76.64, 82.64, -42.75], [82.64, 82.64, -42.75], [88.64, 82.64, -42.75], [94.64, 82.64, -42.75], [100.64, 82.64, -42.75], [-97.36, 88.64, -42.75], [-91.36, 88.64, -42.75], [-85.36, 88.64, -42.75], [-79.36, 88.64, -42.75], [-73.36, 88.64, -42.75], [-67.36, 88.64, -42.75], [-61.36, 88.64, -42.75], [-55.36, 88.64, -42.75], [-49.36, 88.64, -42.75], [-43.36, 88.64, -42.75], [-37.36, 88.64, -42.75], [-31.36, 88.64, -42.75], [-25.36, 88.64, -42.75], [-19.36, 88.64, -42.75], [-13.36, 88.64, -42.75], [-7.36, 88.64, -42.75], [-1.36, 88.64, -42.75], [4.64, 88.64, -42.75], [10.64, 88.64, -42.75], [16.64, 88.64, -42.75], [22.64, 88.64, -42.75], [28.64, 88.64, -42.75], [34.64, 88.64, -42.75], [40.64, 88.64, -42.75], [46.64, 88.64, -42.75], [52.64, 88.64, -42.75], [58.64, 88.64, -42.75], [64.64, 88.64, -42.75], [70.64, 88.64, -42.75], [76.64, 88.64, -42.75], [82.64, 88.64, -42.75], [88.64, 88.64, -42.75], [94.64, 88.64, -42.75], [-85.36, 94.64, -42.75], [-79.36, 94.64, -42.75], [-73.36, 94.64, -42.75], [-67.36, 94.64, -42.75], [-61.36, 94.64, -42.75], [-55.36, 94.64, -42.75], [-49.36, 94.64, -42.75], [-43.36, 94.64, -42.75], [-37.36, 94.64, -42.75], [-31.36, 94.64, -42.75], [-25.36, 94.64, -42.75], [-19.36, 94.64, -42.75], [-13.36, 94.64, -42.75], [-7.36, 94.64, -42.75], [-1.36, 94.64, -42.75], [4.64, 94.64, -42.75], [10.64, 94.64, -42.75], [16.64, 94.64, -42.75], [22.64, 94.64, -42.75], [28.64, 94.64, -42.75], [34.64, 94.64, -42.75], [40.64, 94.64, -42.75], [46.64, 94.64, -42.75], [52.64, 94.64, -42.75], [58.64, 94.64, -42.75], [64.64, 94.64, -42.75], [70.64, 94.64, -42.75], [76.64, 94.64, -42.75], [82.64, 94.64, -42.75], [88.64, 94.64, -42.75], [-73.36, 100.64, -42.75], [-67.36, 100.64, -42.75], [-61.36, 100.64, -42.75], [-55.36, 100.64, -42.75], [-49.36, 100.64, -42.75], [-43.36, 100.64, -42.75], [-37.36, 100.64, -42.75], [-7.36, 100.64, -42.75], [-1.36, 100.64, -42.75], [4.64, 100.64, -42.75], [10.64, 100.64, -42.75], [16.64, 100.64, -42.75], [-25.36, -103.36, -36.75], [-19.36, -103.36, -36.75], [-13.36, -103.36, -36.75], [-7.36, -103.36, -36.75], [-1.36, -103.36, -36.75], [4.64, -103.36, -36.75], [10.64, -103.36, -36.75], [16.64, -103.36, -36.75], [22.64, -103.36, -36.75], [28.64, -103.36, -36.75], [34.64, -103.36, -36.75], [40.64, -103.36, -36.75], [46.64, -103.36, -36.75], [52.64, -103.36, -36.75], [58.64, -103.36, -36.75], [64.64, -103.36, -36.75], [70.64, -103.36, -36.75], [76.64, -103.36, -36.75], [82.64, -103.36, -36.75], [88.64, -103.36, -36.75], [-31.36, -97.36, -36.75], [-25.36, -97.36, -36.75], [-19.36, -97.36, -36.75], [-13.36, -97.36, -36.75], [-7.36, -97.36, -36.75], [-1.36, -97.36, -36.75], [4.64, -97.36, -36.75], [10.64, -97.36, -36.75], [16.64, -97.36, -36.75], [22.64, -97.36, -36.75], [28.64, -97.36, -36.75], [34.64, -97.36, -36.75], [40.64, -97.36, -36.75], [46.64, -97.36, -36.75], [52.64, -97.36, -36.75], [58.64, -97.36, -36.75], [64.64, -97.36, -36.75], [70.64, -97.36, -36.75], [76.64, -97.36, -36.75], [82.64, -97.36, -36.75], [88.64, -97.36, -36.75], [-31.36, -91.36, -36.75], [-25.36, -91.36, -36.75], [-19.36, -91.36, -36.75], [-13.36, -91.36, -36.75], [-7.36, -91.36, -36.75], [-1.36, -91.36, -36.75], [4.64, -91.36, -36.75], [10.64, -91.36, -36.75], [16.64, -91.36, -36.75], [22.64, -91.36, -36.75], [28.64, -91.36, -36.75], [34.64, -91.36, -36.75], [40.64, -91.36, -36.75], [46.64, -91.36, -36.75], [52.64, -91.36, -36.75], [58.64, -91.36, -36.75], [64.64, -91.36, -36.75], [70.64, -91.36, -36.75], [76.64, -91.36, -36.75], [82.64, -91.36, -36.75], [88.64, -91.36, -36.75], [-91.36, -85.36, -36.75], [-85.36, -85.36, -36.75], [-79.36, -85.36, -36.75], [-73.36, -85.36, -36.75], [-67.36, -85.36, -36.75], [-61.36, -85.36, -36.75], [-55.36, -85.36, -36.75], [-49.36, -85.36, -36.75], [-43.36, -85.36, -36.75], [-37.36, -85.36, -36.75], [-31.36, -85.36, -36.75], [-25.36, -85.36, -36.75], [-19.36, -85.36, -36.75], [-13.36, -85.36, -36.75], [-7.36, -85.36, -36.75], [-1.36, -85.36, -36.75], [4.64, -85.36, -36.75], [10.64, -85.36, -36.75], [16.64, -85.36, -36.75], [22.64, -85.36, -36.75], [28.64, -85.36, -36.75], [34.64, -85.36, -36.75], [40.64, -85.36, -36.75], [46.64, -85.36, -36.75], [52.64, -85.36, -36.75], [58.64, -85.36, -36.75], [64.64, -85.36, -36.75], [70.64, -85.36, -36.75], [76.64, -85.36, -36.75], [82.64, -85.36, -36.75], [88.64, -85.36, -36.75], [-91.36, -79.36, -36.75], [-85.36, -79.36, -36.75], [-79.36, -79.36, -36.75], [-73.36, -79.36, -36.75], [-67.36, -79.36, -36.75], [-61.36, -79.36, -36.75], [-55.36, -79.36, -36.75], [-49.36, -79.36, -36.75], [-43.36, -79.36, -36.75], [-37.36, -79.36, -36.75], [-31.36, -79.36, -36.75], [-25.36, -79.36, -36.75], [-19.36, -79.36, -36.75], [-13.36, -79.36, -36.75], [-7.36, -79.36, -36.75], [-1.36, -79.36, -36.75], [4.64, -79.36, -36.75], [10.64, -79.36, -36.75], [16.64, -79.36, -36.75], [22.64, -79.36, -36.75], [28.64, -79.36, -36.75], [34.64, -79.36, -36.75], [40.64, -79.36, -36.75], [46.64, -79.36, -36.75], [52.64, -79.36, -36.75], [58.64, -79.36, -36.75], [64.64, -79.36, -36.75], [70.64, -79.36, -36.75], [76.64, -79.36, -36.75], [82.64, -79.36, -36.75], [88.64, -79.36, -36.75], [94.64, -79.36, -36.75], [-103.36, -73.36, -36.75], [-97.36, -73.36, -36.75], [-91.36, -73.36, -36.75], [-85.36, -73.36, -36.75], [-79.36, -73.36, -36.75], [-73.36, -73.36, -36.75], [-67.36, -73.36, -36.75], [-61.36, -73.36, -36.75], [-55.36, -73.36, -36.75], [-49.36, -73.36, -36.75], [-43.36, -73.36, -36.75], [-37.36, -73.36, -36.75], [-31.36, -73.36, -36.75], [-25.36, -73.36, -36.75], [-19.36, -73.36, -36.75], [-13.36, -73.36, -36.75], [-7.36, -73.36, -36.75], [-1.36, -73.36, -36.75], [4.64, -73.36, -36.75], [10.64, -73.36, -36.75], [16.64, -73.36, -36.75], [22.64, -73.36, -36.75], [28.64, -73.36, -36.75], [34.64, -73.36, -36.75], [40.64, -73.36, -36.75], [46.64, -73.36, -36.75], [52.64, -73.36, -36.75], [58.64, -73.36, -36.75], [64.64, -73.36, -36.75], [70.64, -73.36, -36.75], [76.64, -73.36, -36.75], [82.64, -73.36, -36.75], [88.64, -73.36, -36.75], [94.64, -73.36, -36.75], [-103.36, -67.36, -36.75], [-97.36, -67.36, -36.75], [-91.36, -67.36, -36.75], [-85.36, -67.36, -36.75], [-79.36, -67.36, -36.75], [-73.36, -67.36, -36.75], [-67.36, -67.36, -36.75], [-61.36, -67.36, -36.75], [-55.36, -67.36, -36.75], [-49.36, -67.36, -36.75], [-43.36, -67.36, -36.75], [-37.36, -67.36, -36.75], [-31.36, -67.36, -36.75], [-25.36, -67.36, -36.75], [-19.36, -67.36, -36.75], [-13.36, -67.36, -36.75], [-7.36, -67.36, -36.75], [-1.36, -67.36, -36.75], [4.64, -67.36, -36.75], [10.64, -67.36, -36.75], [16.64, -67.36, -36.75], [22.64, -67.36, -36.75], [28.64, -67.36, -36.75], [34.64, -67.36, -36.75], [40.64, -67.36, -36.75], [46.64, -67.36, -36.75], [52.64, -67.36, -36.75], [58.64, -67.36, -36.75], [64.64, -67.36, -36.75], [70.64, -67.36, -36.75], [76.64, -67.36, -36.75], [82.64, -67.36, -36.75], [88.64, -67.36, -36.75], [94.64, -67.36, -36.75], [-103.36, -61.36, -36.75], [-97.36, -61.36, -36.75], [-91.36, -61.36, -36.75], [-85.36, -61.36, -36.75], [-79.36, -61.36, -36.75], [-73.36, -61.36, -36.75], [-67.36, -61.36, -36.75], [-61.36, -61.36, -36.75], [-55.36, -61.36, -36.75], [-49.36, -61.36, -36.75], [-43.36, -61.36, -36.75], [-37.36, -61.36, -36.75], [-31.36, -61.36, -36.75], [-25.36, -61.36, -36.75], [-19.36, -61.36, -36.75], [-13.36, -61.36, -36.75], [-7.36, -61.36, -36.75], [-1.36, -61.36, -36.75], [4.64, -61.36, -36.75], [10.64, -61.36, -36.75], [16.64, -61.36, -36.75], [22.64, -61.36, -36.75], [28.64, -61.36, -36.75], [34.64, -61.36, -36.75], [40.64, -61.36, -36.75], [46.64, -61.36, -36.75], [52.64, -61.36, -36.75], [58.64, -61.36, -36.75], [64.64, -61.36, -36.75], [70.64, -61.36, -36.75], [76.64, -61.36, -36.75], [82.64, -61.36, -36.75], [88.64, -61.36, -36.75], [94.64, -61.36, -36.75], [-103.36, -55.36, -36.75], [-97.36, -55.36, -36.75], [-91.36, -55.36, -36.75], [-85.36, -55.36, -36.75], [-79.36, -55.36, -36.75], [-73.36, -55.36, -36.75], [-67.36, -55.36, -36.75], [-61.36, -55.36, -36.75], [-55.36, -55.36, -36.75], [-49.36, -55.36, -36.75], [-43.36, -55.36, -36.75], [-37.36, -55.36, -36.75], [-31.36, -55.36, -36.75], [-25.36, -55.36, -36.75], [-19.36, -55.36, -36.75], [-13.36, -55.36, -36.75], [-7.36, -55.36, -36.75], [-1.36, -55.36, -36.75], [4.64, -55.36, -36.75], [10.64, -55.36, -36.75], [16.64, -55.36, -36.75], [22.64, -55.36, -36.75], [28.64, -55.36, -36.75], [34.64, -55.36, -36.75], [40.64, -55.36, -36.75], [46.64, -55.36, -36.75], [52.64, -55.36, -36.75], [58.64, -55.36, -36.75], [64.64, -55.36, -36.75], [70.64, -55.36, -36.75], [76.64, -55.36, -36.75], [82.64, -55.36, -36.75], [88.64, -55.36, -36.75], [94.64, -55.36, -36.75], [-103.36, -49.36, -36.75], [-97.36, -49.36, -36.75], [-91.36, -49.36, -36.75], [-85.36, -49.36, -36.75], [-79.36, -49.36, -36.75], [-73.36, -49.36, -36.75], [-67.36, -49.36, -36.75], [-61.36, -49.36, -36.75], [-55.36, -49.36, -36.75], [-49.36, -49.36, -36.75], [-43.36, -49.36, -36.75], [-37.36, -49.36, -36.75], [-31.36, -49.36, -36.75], [-25.36, -49.36, -36.75], [-19.36, -49.36, -36.75], [-13.36, -49.36, -36.75], [-7.36, -49.36, -36.75], [-1.36, -49.36, -36.75], [4.64, -49.36, -36.75], [10.64, -49.36, -36.75], [16.64, -49.36, -36.75], [22.64, -49.36, -36.75], [28.64, -49.36, -36.75], [34.64, -49.36, -36.75], [40.64, -49.36, -36.75], [46.64, -49.36, -36.75], [52.64, -49.36, -36.75], [58.64, -49.36, -36.75], [64.64, -49.36, -36.75], [70.64, -49.36, -36.75], [76.64, -49.36, -36.75], [82.64, -49.36, -36.75], [88.64, -49.36, -36.75], [94.64, -49.36, -36.75], [-103.36, -43.36, -36.75], [-97.36, -43.36, -36.75], [-91.36, -43.36, -36.75], [-85.36, -43.36, -36.75], [-79.36, -43.36, -36.75], [-73.36, -43.36, -36.75], [-67.36, -43.36, -36.75], [-61.36, -43.36, -36.75], [-55.36, -43.36, -36.75], [-49.36, -43.36, -36.75], [-43.36, -43.36, -36.75], [-37.36, -43.36, -36.75], [-31.36, -43.36, -36.75], [-25.36, -43.36, -36.75], [-19.36, -43.36, -36.75], [-13.36, -43.36, -36.75], [-7.36, -43.36, -36.75], [-1.36, -43.36, -36.75], [4.64, -43.36, -36.75], [10.64, -43.36, -36.75], [16.64, -43.36, -36.75], [22.64, -43.36, -36.75], [28.64, -43.36, -36.75], [34.64, -43.36, -36.75], [40.64, -43.36, -36.75], [46.64, -43.36, -36.75], [52.64, -43.36, -36.75], [58.64, -43.36, -36.75], [64.64, -43.36, -36.75], [70.64, -43.36, -36.75], [76.64, -43.36, -36.75], [82.64, -43.36, -36.75], [88.64, -43.36, -36.75], [94.64, -43.36, -36.75], [-103.36, -37.36, -36.75], [-97.36, -37.36, -36.75], [-91.36, -37.36, -36.75], [-85.36, -37.36, -36.75], [-79.36, -37.36, -36.75], [-73.36, -37.36, -36.75], [-67.36, -37.36, -36.75], [-61.36, -37.36, -36.75], [-55.36, -37.36, -36.75], [-49.36, -37.36, -36.75], [-43.36, -37.36, -36.75], [-37.36, -37.36, -36.75], [-31.36, -37.36, -36.75], [-25.36, -37.36, -36.75], [-19.36, -37.36, -36.75], [-13.36, -37.36, -36.75], [-7.36, -37.36, -36.75], [-1.36, -37.36, -36.75], [4.64, -37.36, -36.75], [10.64, -37.36, -36.75], [16.64, -37.36, -36.75], [22.64, -37.36, -36.75], [28.64, -37.36, -36.75], [34.64, -37.36, -36.75], [40.64, -37.36, -36.75], [46.64, -37.36, -36.75], [52.64, -37.36, -36.75], [58.64, -37.36, -36.75], [64.64, -37.36, -36.75], [70.64, -37.36, -36.75], [76.64, -37.36, -36.75], [82.64, -37.36, -36.75], [88.64, -37.36, -36.75], [94.64, -37.36, -36.75], [-103.36, -31.36, -36.75], [-97.36, -31.36, -36.75], [-91.36, -31.36, -36.75], [-85.36, -31.36, -36.75], [-79.36, -31.36, -36.75], [-73.36, -31.36, -36.75], [-67.36, -31.36, -36.75], [-61.36, -31.36, -36.75], [-55.36, -31.36, -36.75], [-49.36, -31.36, -36.75], [-43.36, -31.36, -36.75], [-37.36, -31.36, -36.75], [-31.36, -31.36, -36.75], [-25.36, -31.36, -36.75], [-19.36, -31.36, -36.75], [-13.36, -31.36, -36.75], [-7.36, -31.36, -36.75], [-1.36, -31.36, -36.75], [4.64, -31.36, -36.75], [10.64, -31.36, -36.75], [16.64, -31.36, -36.75], [22.64, -31.36, -36.75], [28.64, -31.36, -36.75], [34.64, -31.36, -36.75], [40.64, -31.36, -36.75], [46.64, -31.36, -36.75], [52.64, -31.36, -36.75], [58.64, -31.36, -36.75], [64.64, -31.36, -36.75], [70.64, -31.36, -36.75], [76.64, -31.36, -36.75], [82.64, -31.36, -36.75], [88.64, -31.36, -36.75], [94.64, -31.36, -36.75], [-103.36, -25.36, -36.75], [-97.36, -25.36, -36.75], [-91.36, -25.36, -36.75], [-85.36, -25.36, -36.75], [-79.36, -25.36, -36.75], [-73.36, -25.36, -36.75], [-67.36, -25.36, -36.75], [-61.36, -25.36, -36.75], [-55.36, -25.36, -36.75], [-49.36, -25.36, -36.75], [-43.36, -25.36, -36.75], [-37.36, -25.36, -36.75], [-31.36, -25.36, -36.75], [-25.36, -25.36, -36.75], [-19.36, -25.36, -36.75], [-13.36, -25.36, -36.75], [-7.36, -25.36, -36.75], [-1.36, -25.36, -36.75], [4.64, -25.36, -36.75], [10.64, -25.36, -36.75], [16.64, -25.36, -36.75], [22.64, -25.36, -36.75], [28.64, -25.36, -36.75], [34.64, -25.36, -36.75], [40.64, -25.36, -36.75], [46.64, -25.36, -36.75], [52.64, -25.36, -36.75], [58.64, -25.36, -36.75], [64.64, -25.36, -36.75], [70.64, -25.36, -36.75], [76.64, -25.36, -36.75], [82.64, -25.36, -36.75], [88.64, -25.36, -36.75], [94.64, -25.36, -36.75], [100.64, -25.36, -36.75], [-103.36, -19.36, -36.75], [-97.36, -19.36, -36.75], [-91.36, -19.36, -36.75], [-85.36, -19.36, -36.75], [-79.36, -19.36, -36.75], [-73.36, -19.36, -36.75], [-67.36, -19.36, -36.75], [-61.36, -19.36, -36.75], [-55.36, -19.36, -36.75], [-49.36, -19.36, -36.75], [-43.36, -19.36, -36.75], [-37.36, -19.36, -36.75], [-31.36, -19.36, -36.75], [-25.36, -19.36, -36.75], [-19.36, -19.36, -36.75], [-13.36, -19.36, -36.75], [-7.36, -19.36, -36.75], [-1.36, -19.36, -36.75], [4.64, -19.36, -36.75], [10.64, -19.36, -36.75], [16.64, -19.36, -36.75], [22.64, -19.36, -36.75], [28.64, -19.36, -36.75], [34.64, -19.36, -36.75], [40.64, -19.36, -36.75], [46.64, -19.36, -36.75], [52.64, -19.36, -36.75], [58.64, -19.36, -36.75], [64.64, -19.36, -36.75], [70.64, -19.36, -36.75], [76.64, -19.36, -36.75], [82.64, -19.36, -36.75], [88.64, -19.36, -36.75], [94.64, -19.36, -36.75], [100.64, -19.36, -36.75], [-103.36, -13.36, -36.75], [-97.36, -13.36, -36.75], [-91.36, -13.36, -36.75], [-85.36, -13.36, -36.75], [-79.36, -13.36, -36.75], [-73.36, -13.36, -36.75], [-67.36, -13.36, -36.75], [-61.36, -13.36, -36.75], [-55.36, -13.36, -36.75], [-49.36, -13.36, -36.75], [-43.36, -13.36, -36.75], [-37.36, -13.36, -36.75], [-31.36, -13.36, -36.75], [-25.36, -13.36, -36.75], [-19.36, -13.36, -36.75], [-13.36, -13.36, -36.75], [-7.36, -13.36, -36.75], [-1.36, -13.36, -36.75], [4.64, -13.36, -36.75], [10.64, -13.36, -36.75], [16.64, -13.36, -36.75], [22.64, -13.36, -36.75], [28.64, -13.36, -36.75], [34.64, -13.36, -36.75], [40.64, -13.36, -36.75], [46.64, -13.36, -36.75], [52.64, -13.36, -36.75], [58.64, -13.36, -36.75], [64.64, -13.36, -36.75], [70.64, -13.36, -36.75], [76.64, -13.36, -36.75], [82.64, -13.36, -36.75], [88.64, -13.36, -36.75], [94.64, -13.36, -36.75], [100.64, -13.36, -36.75], [-103.36, -7.36, -36.75], [-97.36, -7.36, -36.75], [-91.36, -7.36, -36.75], [-85.36, -7.36, -36.75], [-79.36, -7.36, -36.75], [-73.36, -7.36, -36.75], [-67.36, -7.36, -36.75], [-61.36, -7.36, -36.75], [-55.36, -7.36, -36.75], [-49.36, -7.36, -36.75], [-43.36, -7.36, -36.75], [-37.36, -7.36, -36.75], [-31.36, -7.36, -36.75], [-25.36, -7.36, -36.75], [-19.36, -7.36, -36.75], [-13.36, -7.36, -36.75], [-7.36, -7.36, -36.75], [-1.36, -7.36, -36.75], [4.64, -7.36, -36.75], [10.64, -7.36, -36.75], [16.64, -7.36, -36.75], [22.64, -7.36, -36.75], [28.64, -7.36, -36.75], [34.64, -7.36, -36.75], [40.64, -7.36, -36.75], [46.64, -7.36, -36.75], [52.64, -7.36, -36.75], [58.64, -7.36, -36.75], [64.64, -7.36, -36.75], [70.64, -7.36, -36.75], [76.64, -7.36, -36.75], [82.64, -7.36, -36.75], [88.64, -7.36, -36.75], [94.64, -7.36, -36.75], [100.64, -7.36, -36.75], [-103.36, -1.36, -36.75], [-97.36, -1.36, -36.75], [-91.36, -1.36, -36.75], [-85.36, -1.36, -36.75], [-79.36, -1.36, -36.75], [-73.36, -1.36, -36.75], [-67.36, -1.36, -36.75], [-61.36, -1.36, -36.75], [-55.36, -1.36, -36.75], [-49.36, -1.36, -36.75], [-43.36, -1.36, -36.75], [-37.36, -1.36, -36.75], [-31.36, -1.36, -36.75], [-25.36, -1.36, -36.75], [-19.36, -1.36, -36.75], [-13.36, -1.36, -36.75], [-7.36, -1.36, -36.75], [-1.36, -1.36, -36.75], [4.64, -1.36, -36.75], [10.64, -1.36, -36.75], [16.64, -1.36, -36.75], [22.64, -1.36, -36.75], [28.64, -1.36, -36.75], [34.64, -1.36, -36.75], [40.64, -1.36, -36.75], [46.64, -1.36, -36.75], [52.64, -1.36, -36.75], [58.64, -1.36, -36.75], [64.64, -1.36, -36.75], [70.64, -1.36, -36.75], [76.64, -1.36, -36.75], [82.64, -1.36, -36.75], [88.64, -1.36, -36.75], [94.64, -1.36, -36.75], [100.64, -1.36, -36.75], [-103.36, 4.64, -36.75], [-97.36, 4.64, -36.75], [-91.36, 4.64, -36.75], [-85.36, 4.64, -36.75], [-79.36, 4.64, -36.75], [-73.36, 4.64, -36.75], [-67.36, 4.64, -36.75], [-61.36, 4.64, -36.75], [-55.36, 4.64, -36.75], [-49.36, 4.64, -36.75], [-43.36, 4.64, -36.75], [-37.36, 4.64, -36.75], [-31.36, 4.64, -36.75], [-25.36, 4.64, -36.75], [-19.36, 4.64, -36.75], [-13.36, 4.64, -36.75], [-7.36, 4.64, -36.75], [-1.36, 4.64, -36.75], [4.64, 4.64, -36.75], [10.64, 4.64, -36.75], [16.64, 4.64, -36.75], [22.64, 4.64, -36.75], [28.64, 4.64, -36.75], [34.64, 4.64, -36.75], [40.64, 4.64, -36.75], [46.64, 4.64, -36.75], [52.64, 4.64, -36.75], [58.64, 4.64, -36.75], [64.64, 4.64, -36.75], [70.64, 4.64, -36.75], [76.64, 4.64, -36.75], [82.64, 4.64, -36.75], [88.64, 4.64, -36.75], [94.64, 4.64, -36.75], [100.64, 4.64, -36.75], [-103.36, 10.64, -36.75], [-97.36, 10.64, -36.75], [-91.36, 10.64, -36.75], [-85.36, 10.64, -36.75], [-79.36, 10.64, -36.75], [-73.36, 10.64, -36.75], [-67.36, 10.64, -36.75], [-61.36, 10.64, -36.75], [-55.36, 10.64, -36.75], [-49.36, 10.64, -36.75], [-43.36, 10.64, -36.75], [-37.36, 10.64, -36.75], [-31.36, 10.64, -36.75], [-25.36, 10.64, -36.75], [-19.36, 10.64, -36.75], [-13.36, 10.64, -36.75], [-7.36, 10.64, -36.75], [-1.36, 10.64, -36.75], [4.64, 10.64, -36.75], [10.64, 10.64, -36.75], [16.64, 10.64, -36.75], [22.64, 10.64, -36.75], [28.64, 10.64, -36.75], [34.64, 10.64, -36.75], [40.64, 10.64, -36.75], [46.64, 10.64, -36.75], [52.64, 10.64, -36.75], [58.64, 10.64, -36.75], [64.64, 10.64, -36.75], [70.64, 10.64, -36.75], [76.64, 10.64, -36.75], [82.64, 10.64, -36.75], [88.64, 10.64, -36.75], [94.64, 10.64, -36.75], [100.64, 10.64, -36.75], [-103.36, 16.64, -36.75], [-97.36, 16.64, -36.75], [-91.36, 16.64, -36.75], [-85.36, 16.64, -36.75], [-79.36, 16.64, -36.75], [-73.36, 16.64, -36.75], [-67.36, 16.64, -36.75], [-61.36, 16.64, -36.75], [-55.36, 16.64, -36.75], [-49.36, 16.64, -36.75], [-43.36, 16.64, -36.75], [-37.36, 16.64, -36.75], [-31.36, 16.64, -36.75], [-25.36, 16.64, -36.75], [-19.36, 16.64, -36.75], [-13.36, 16.64, -36.75], [-7.36, 16.64, -36.75], [-1.36, 16.64, -36.75], [4.64, 16.64, -36.75], [10.64, 16.64, -36.75], [16.64, 16.64, -36.75], [22.64, 16.64, -36.75], [28.64, 16.64, -36.75], [34.64, 16.64, -36.75], [40.64, 16.64, -36.75], [46.64, 16.64, -36.75], [52.64, 16.64, -36.75], [58.64, 16.64, -36.75], [64.64, 16.64, -36.75], [70.64, 16.64, -36.75], [76.64, 16.64, -36.75], [82.64, 16.64, -36.75], [88.64, 16.64, -36.75], [94.64, 16.64, -36.75], [100.64, 16.64, -36.75], [-103.36, 22.64, -36.75], [-97.36, 22.64, -36.75], [-91.36, 22.64, -36.75], [-85.36, 22.64, -36.75], [-79.36, 22.64, -36.75], [-73.36, 22.64, -36.75], [-67.36, 22.64, -36.75], [-61.36, 22.64, -36.75], [-55.36, 22.64, -36.75], [-49.36, 22.64, -36.75], [-43.36, 22.64, -36.75], [-37.36, 22.64, -36.75], [-31.36, 22.64, -36.75], [-25.36, 22.64, -36.75], [-19.36, 22.64, -36.75], [-13.36, 22.64, -36.75], [-7.36, 22.64, -36.75], [-1.36, 22.64, -36.75], [4.64, 22.64, -36.75], [10.64, 22.64, -36.75], [16.64, 22.64, -36.75], [22.64, 22.64, -36.75], [28.64, 22.64, -36.75], [34.64, 22.64, -36.75], [40.64, 22.64, -36.75], [46.64, 22.64, -36.75], [52.64, 22.64, -36.75], [58.64, 22.64, -36.75], [64.64, 22.64, -36.75], [70.64, 22.64, -36.75], [76.64, 22.64, -36.75], [82.64, 22.64, -36.75], [88.64, 22.64, -36.75], [94.64, 22.64, -36.75], [100.64, 22.64, -36.75], [-103.36, 28.64, -36.75], [-97.36, 28.64, -36.75], [-91.36, 28.64, -36.75], [-85.36, 28.64, -36.75], [-79.36, 28.64, -36.75], [-73.36, 28.64, -36.75], [-67.36, 28.64, -36.75], [-61.36, 28.64, -36.75], [-55.36, 28.64, -36.75], [-49.36, 28.64, -36.75], [-43.36, 28.64, -36.75], [-37.36, 28.64, -36.75], [-31.36, 28.64, -36.75], [-25.36, 28.64, -36.75], [-19.36, 28.64, -36.75], [-13.36, 28.64, -36.75], [-7.36, 28.64, -36.75], [-1.36, 28.64, -36.75], [4.64, 28.64, -36.75], [10.64, 28.64, -36.75], [16.64, 28.64, -36.75], [22.64, 28.64, -36.75], [28.64, 28.64, -36.75], [34.64, 28.64, -36.75], [40.64, 28.64, -36.75], [46.64, 28.64, -36.75], [52.64, 28.64, -36.75], [58.64, 28.64, -36.75], [64.64, 28.64, -36.75], [70.64, 28.64, -36.75], [76.64, 28.64, -36.75], [82.64, 28.64, -36.75], [88.64, 28.64, -36.75], [94.64, 28.64, -36.75], [100.64, 28.64, -36.75], [-97.36, 34.64, -36.75], [-91.36, 34.64, -36.75], [-85.36, 34.64, -36.75], [-79.36, 34.64, -36.75], [-73.36, 34.64, -36.75], [-67.36, 34.64, -36.75], [-61.36, 34.64, -36.75], [-55.36, 34.64, -36.75], [-49.36, 34.64, -36.75], [-43.36, 34.64, -36.75], [-37.36, 34.64, -36.75], [-31.36, 34.64, -36.75], [-25.36, 34.64, -36.75], [-19.36, 34.64, -36.75], [-13.36, 34.64, -36.75], [-7.36, 34.64, -36.75], [-1.36, 34.64, -36.75], [4.64, 34.64, -36.75], [10.64, 34.64, -36.75], [16.64, 34.64, -36.75], [22.64, 34.64, -36.75], [28.64, 34.64, -36.75], [34.64, 34.64, -36.75], [40.64, 34.64, -36.75], [46.64, 34.64, -36.75], [52.64, 34.64, -36.75], [58.64, 34.64, -36.75], [64.64, 34.64, -36.75], [70.64, 34.64, -36.75], [76.64, 34.64, -36.75], [82.64, 34.64, -36.75], [88.64, 34.64, -36.75], [94.64, 34.64, -36.75], [100.64, 34.64, -36.75], [-97.36, 40.64, -36.75], [-91.36, 40.64, -36.75], [-85.36, 40.64, -36.75], [-79.36, 40.64, -36.75], [-73.36, 40.64, -36.75], [-67.36, 40.64, -36.75], [-61.36, 40.64, -36.75], [-55.36, 40.64, -36.75], [-49.36, 40.64, -36.75], [-43.36, 40.64, -36.75], [-37.36, 40.64, -36.75], [-31.36, 40.64, -36.75], [-25.36, 40.64, -36.75], [-19.36, 40.64, -36.75], [-13.36, 40.64, -36.75], [-7.36, 40.64, -36.75], [-1.36, 40.64, -36.75], [4.64, 40.64, -36.75], [10.64, 40.64, -36.75], [16.64, 40.64, -36.75], [22.64, 40.64, -36.75], [28.64, 40.64, -36.75], [34.64, 40.64, -36.75], [40.64, 40.64, -36.75], [46.64, 40.64, -36.75], [52.64, 40.64, -36.75], [58.64, 40.64, -36.75], [64.64, 40.64, -36.75], [70.64, 40.64, -36.75], [76.64, 40.64, -36.75], [82.64, 40.64, -36.75], [88.64, 40.64, -36.75], [94.64, 40.64, -36.75], [100.64, 40.64, -36.75], [-97.36, 46.64, -36.75], [-91.36, 46.64, -36.75], [-85.36, 46.64, -36.75], [-79.36, 46.64, -36.75], [-73.36, 46.64, -36.75], [-67.36, 46.64, -36.75], [-61.36, 46.64, -36.75], [-55.36, 46.64, -36.75], [-49.36, 46.64, -36.75], [-43.36, 46.64, -36.75], [-37.36, 46.64, -36.75], [-31.36, 46.64, -36.75], [-25.36, 46.64, -36.75], [-19.36, 46.64, -36.75], [-13.36, 46.64, -36.75], [-7.36, 46.64, -36.75], [-1.36, 46.64, -36.75], [4.64, 46.64, -36.75], [10.64, 46.64, -36.75], [16.64, 46.64, -36.75], [22.64, 46.64, -36.75], [28.64, 46.64, -36.75], [34.64, 46.64, -36.75], [40.64, 46.64, -36.75], [46.64, 46.64, -36.75], [52.64, 46.64, -36.75], [58.64, 46.64, -36.75], [64.64, 46.64, -36.75], [70.64, 46.64, -36.75], [76.64, 46.64, -36.75], [82.64, 46.64, -36.75], [88.64, 46.64, -36.75], [94.64, 46.64, -36.75], [100.64, 46.64, -36.75], [-97.36, 52.64, -36.75], [-91.36, 52.64, -36.75], [-85.36, 52.64, -36.75], [-79.36, 52.64, -36.75], [-73.36, 52.64, -36.75], [-67.36, 52.64, -36.75], [-61.36, 52.64, -36.75], [-55.36, 52.64, -36.75], [-49.36, 52.64, -36.75], [-43.36, 52.64, -36.75], [-37.36, 52.64, -36.75], [-31.36, 52.64, -36.75], [-25.36, 52.64, -36.75], [-19.36, 52.64, -36.75], [-13.36, 52.64, -36.75], [-7.36, 52.64, -36.75], [-1.36, 52.64, -36.75], [4.64, 52.64, -36.75], [10.64, 52.64, -36.75], [16.64, 52.64, -36.75], [22.64, 52.64, -36.75], [28.64, 52.64, -36.75], [34.64, 52.64, -36.75], [40.64, 52.64, -36.75], [46.64, 52.64, -36.75], [52.64, 52.64, -36.75], [58.64, 52.64, -36.75], [64.64, 52.64, -36.75], [70.64, 52.64, -36.75], [76.64, 52.64, -36.75], [82.64, 52.64, -36.75], [88.64, 52.64, -36.75], [94.64, 52.64, -36.75], [100.64, 52.64, -36.75], [-97.36, 58.64, -36.75], [-91.36, 58.64, -36.75], [-85.36, 58.64, -36.75], [-79.36, 58.64, -36.75], [-73.36, 58.64, -36.75], [-67.36, 58.64, -36.75], [-61.36, 58.64, -36.75], [-55.36, 58.64, -36.75], [-49.36, 58.64, -36.75], [-43.36, 58.64, -36.75], [-37.36, 58.64, -36.75], [-31.36, 58.64, -36.75], [-25.36, 58.64, -36.75], [-19.36, 58.64, -36.75], [-13.36, 58.64, -36.75], [-7.36, 58.64, -36.75], [-1.36, 58.64, -36.75], [4.64, 58.64, -36.75], [10.64, 58.64, -36.75], [16.64, 58.64, -36.75], [22.64, 58.64, -36.75], [28.64, 58.64, -36.75], [34.64, 58.64, -36.75], [40.64, 58.64, -36.75], [46.64, 58.64, -36.75], [52.64, 58.64, -36.75], [58.64, 58.64, -36.75], [64.64, 58.64, -36.75], [70.64, 58.64, -36.75], [76.64, 58.64, -36.75], [82.64, 58.64, -36.75], [88.64, 58.64, -36.75], [94.64, 58.64, -36.75], [100.64, 58.64, -36.75], [-97.36, 64.64, -36.75], [-91.36, 64.64, -36.75], [-85.36, 64.64, -36.75], [-79.36, 64.64, -36.75], [-73.36, 64.64, -36.75], [-67.36, 64.64, -36.75], [-61.36, 64.64, -36.75], [-55.36, 64.64, -36.75], [-49.36, 64.64, -36.75], [-43.36, 64.64, -36.75], [-37.36, 64.64, -36.75], [-31.36, 64.64, -36.75], [-25.36, 64.64, -36.75], [-19.36, 64.64, -36.75], [-13.36, 64.64, -36.75], [-7.36, 64.64, -36.75], [-1.36, 64.64, -36.75], [4.64, 64.64, -36.75], [10.64, 64.64, -36.75], [16.64, 64.64, -36.75], [22.64, 64.64, -36.75], [28.64, 64.64, -36.75], [34.64, 64.64, -36.75], [40.64, 64.64, -36.75], [46.64, 64.64, -36.75], [52.64, 64.64, -36.75], [58.64, 64.64, -36.75], [64.64, 64.64, -36.75], [70.64, 64.64, -36.75], [76.64, 64.64, -36.75], [82.64, 64.64, -36.75], [88.64, 64.64, -36.75], [94.64, 64.64, -36.75], [100.64, 64.64, -36.75], [-97.36, 70.64, -36.75], [-91.36, 70.64, -36.75], [-85.36, 70.64, -36.75], [-79.36, 70.64, -36.75], [-73.36, 70.64, -36.75], [-67.36, 70.64, -36.75], [-61.36, 70.64, -36.75], [-55.36, 70.64, -36.75], [-49.36, 70.64, -36.75], [-43.36, 70.64, -36.75], [-37.36, 70.64, -36.75], [-31.36, 70.64, -36.75], [-25.36, 70.64, -36.75], [-19.36, 70.64, -36.75], [-13.36, 70.64, -36.75], [-7.36, 70.64, -36.75], [-1.36, 70.64, -36.75], [4.64, 70.64, -36.75], [10.64, 70.64, -36.75], [16.64, 70.64, -36.75], [22.64, 70.64, -36.75], [28.64, 70.64, -36.75], [34.64, 70.64, -36.75], [40.64, 70.64, -36.75], [46.64, 70.64, -36.75], [52.64, 70.64, -36.75], [58.64, 70.64, -36.75], [64.64, 70.64, -36.75], [70.64, 70.64, -36.75], [76.64, 70.64, -36.75], [82.64, 70.64, -36.75], [88.64, 70.64, -36.75], [94.64, 70.64, -36.75], [100.64, 70.64, -36.75], [-97.36, 76.64, -36.75], [-91.36, 76.64, -36.75], [-85.36, 76.64, -36.75], [-79.36, 76.64, -36.75], [-73.36, 76.64, -36.75], [-67.36, 76.64, -36.75], [-61.36, 76.64, -36.75], [-55.36, 76.64, -36.75], [-49.36, 76.64, -36.75], [-43.36, 76.64, -36.75], [-37.36, 76.64, -36.75], [-31.36, 76.64, -36.75], [-25.36, 76.64, -36.75], [-19.36, 76.64, -36.75], [-13.36, 76.64, -36.75], [-7.36, 76.64, -36.75], [-1.36, 76.64, -36.75], [4.64, 76.64, -36.75], [10.64, 76.64, -36.75], [16.64, 76.64, -36.75], [22.64, 76.64, -36.75], [28.64, 76.64, -36.75], [34.64, 76.64, -36.75], [40.64, 76.64, -36.75], [46.64, 76.64, -36.75], [52.64, 76.64, -36.75], [58.64, 76.64, -36.75], [64.64, 76.64, -36.75], [70.64, 76.64, -36.75], [76.64, 76.64, -36.75], [82.64, 76.64, -36.75], [88.64, 76.64, -36.75], [94.64, 76.64, -36.75], [100.64, 76.64, -36.75], [-97.36, 82.64, -36.75], [-91.36, 82.64, -36.75], [-85.36, 82.64, -36.75], [-79.36, 82.64, -36.75], [-73.36, 82.64, -36.75], [-67.36, 82.64, -36.75], [-61.36, 82.64, -36.75], [-55.36, 82.64, -36.75], [-49.36, 82.64, -36.75], [-43.36, 82.64, -36.75], [-37.36, 82.64, -36.75], [-31.36, 82.64, -36.75], [-25.36, 82.64, -36.75], [-19.36, 82.64, -36.75], [-13.36, 82.64, -36.75], [-7.36, 82.64, -36.75], [-1.36, 82.64, -36.75], [4.64, 82.64, -36.75], [10.64, 82.64, -36.75], [16.64, 82.64, -36.75], [22.64, 82.64, -36.75], [28.64, 82.64, -36.75], [34.64, 82.64, -36.75], [40.64, 82.64, -36.75], [46.64, 82.64, -36.75], [52.64, 82.64, -36.75], [58.64, 82.64, -36.75], [64.64, 82.64, -36.75], [70.64, 82.64, -36.75], [76.64, 82.64, -36.75], [82.64, 82.64, -36.75], [88.64, 82.64, -36.75], [94.64, 82.64, -36.75], [100.64, 82.64, -36.75], [-97.36, 88.64, -36.75], [-91.36, 88.64, -36.75], [-85.36, 88.64, -36.75], [-79.36, 88.64, -36.75], [-73.36, 88.64, -36.75], [-67.36, 88.64, -36.75], [-61.36, 88.64, -36.75], [-55.36, 88.64, -36.75], [-49.36, 88.64, -36.75], [-43.36, 88.64, -36.75], [-37.36, 88.64, -36.75], [-31.36, 88.64, -36.75], [-25.36, 88.64, -36.75], [-19.36, 88.64, -36.75], [-13.36, 88.64, -36.75], [-7.36, 88.64, -36.75], [-1.36, 88.64, -36.75], [4.64, 88.64, -36.75], [10.64, 88.64, -36.75], [16.64, 88.64, -36.75], [22.64, 88.64, -36.75], [28.64, 88.64, -36.75], [34.64, 88.64, -36.75], [40.64, 88.64, -36.75], [46.64, 88.64, -36.75], [52.64, 88.64, -36.75], [58.64, 88.64, -36.75], [64.64, 88.64, -36.75], [70.64, 88.64, -36.75], [76.64, 88.64, -36.75], [82.64, 88.64, -36.75], [88.64, 88.64, -36.75], [94.64, 88.64, -36.75], [100.64, 88.64, -36.75], [-91.36, 94.64, -36.75], [-85.36, 94.64, -36.75], [-79.36, 94.64, -36.75], [-73.36, 94.64, -36.75], [-67.36, 94.64, -36.75], [-61.36, 94.64, -36.75], [-55.36, 94.64, -36.75], [-49.36, 94.64, -36.75], [-43.36, 94.64, -36.75], [-37.36, 94.64, -36.75], [-31.36, 94.64, -36.75], [-25.36, 94.64, -36.75], [-19.36, 94.64, -36.75], [-13.36, 94.64, -36.75], [-7.36, 94.64, -36.75], [-1.36, 94.64, -36.75], [4.64, 94.64, -36.75], [10.64, 94.64, -36.75], [16.64, 94.64, -36.75], [22.64, 94.64, -36.75], [28.64, 94.64, -36.75], [34.64, 94.64, -36.75], [40.64, 94.64, -36.75], [46.64, 94.64, -36.75], [52.64, 94.64, -36.75], [58.64, 94.64, -36.75], [64.64, 94.64, -36.75], [70.64, 94.64, -36.75], [76.64, 94.64, -36.75], [82.64, 94.64, -36.75], [88.64, 94.64, -36.75], [-85.36, 100.64, -36.75], [-79.36, 100.64, -36.75], [-73.36, 100.64, -36.75], [-67.36, 100.64, -36.75], [-61.36, 100.64, -36.75], [-55.36, 100.64, -36.75], [-49.36, 100.64, -36.75], [-43.36, 100.64, -36.75], [-37.36, 100.64, -36.75], [-31.36, 100.64, -36.75], [-25.36, 100.64, -36.75], [-19.36, 100.64, -36.75], [-13.36, 100.64, -36.75], [-7.36, 100.64, -36.75], [-1.36, 100.64, -36.75], [4.64, 100.64, -36.75], [10.64, 100.64, -36.75], [16.64, 100.64, -36.75], [22.64, 100.64, -36.75], [28.64, 100.64, -36.75], [-37.36, -103.36, -30.75], [-31.36, -103.36, -30.75], [-25.36, -103.36, -30.75], [-19.36, -103.36, -30.75], [-13.36, -103.36, -30.75], [-7.36, -103.36, -30.75], [-1.36, -103.36, -30.75], [4.64, -103.36, -30.75], [10.64, -103.36, -30.75], [16.64, -103.36, -30.75], [22.64, -103.36, -30.75], [28.64, -103.36, -30.75], [34.64, -103.36, -30.75], [40.64, -103.36, -30.75], [46.64, -103.36, -30.75], [52.64, -103.36, -30.75], [58.64, -103.36, -30.75], [64.64, -103.36, -30.75], [70.64, -103.36, -30.75], [76.64, -103.36, -30.75], [82.64, -103.36, -30.75], [88.64, -103.36, -30.75], [-85.36, -97.36, -30.75], [-79.36, -97.36, -30.75], [-73.36, -97.36, -30.75], [-67.36, -97.36, -30.75], [-61.36, -97.36, -30.75], [-55.36, -97.36, -30.75], [-49.36, -97.36, -30.75], [-43.36, -97.36, -30.75], [-37.36, -97.36, -30.75], [-31.36, -97.36, -30.75], [-25.36, -97.36, -30.75], [-19.36, -97.36, -30.75], [-13.36, -97.36, -30.75], [-7.36, -97.36, -30.75], [-1.36, -97.36, -30.75], [4.64, -97.36, -30.75], [10.64, -97.36, -30.75], [16.64, -97.36, -30.75], [22.64, -97.36, -30.75], [28.64, -97.36, -30.75], [34.64, -97.36, -30.75], [40.64, -97.36, -30.75], [46.64, -97.36, -30.75], [52.64, -97.36, -30.75], [58.64, -97.36, -30.75], [64.64, -97.36, -30.75], [70.64, -97.36, -30.75], [76.64, -97.36, -30.75], [82.64, -97.36, -30.75], [88.64, -97.36, -30.75], [-91.36, -91.36, -30.75], [-85.36, -91.36, -30.75], [-79.36, -91.36, -30.75], [-73.36, -91.36, -30.75], [-67.36, -91.36, -30.75], [-61.36, -91.36, -30.75], [-55.36, -91.36, -30.75], [-49.36, -91.36, -30.75], [-43.36, -91.36, -30.75], [-37.36, -91.36, -30.75], [-31.36, -91.36, -30.75], [-25.36, -91.36, -30.75], [-19.36, -91.36, -30.75], [-13.36, -91.36, -30.75], [-7.36, -91.36, -30.75], [-1.36, -91.36, -30.75], [4.64, -91.36, -30.75], [10.64, -91.36, -30.75], [16.64, -91.36, -30.75], [22.64, -91.36, -30.75], [28.64, -91.36, -30.75], [34.64, -91.36, -30.75], [40.64, -91.36, -30.75], [46.64, -91.36, -30.75], [52.64, -91.36, -30.75], [58.64, -91.36, -30.75], [64.64, -91.36, -30.75], [70.64, -91.36, -30.75], [76.64, -91.36, -30.75], [82.64, -91.36, -30.75], [88.64, -91.36, -30.75], [94.64, -91.36, -30.75], [-103.36, -85.36, -30.75], [-97.36, -85.36, -30.75], [-91.36, -85.36, -30.75], [-85.36, -85.36, -30.75], [-79.36, -85.36, -30.75], [-73.36, -85.36, -30.75], [-67.36, -85.36, -30.75], [-61.36, -85.36, -30.75], [-55.36, -85.36, -30.75], [-49.36, -85.36, -30.75], [-43.36, -85.36, -30.75], [-37.36, -85.36, -30.75], [-31.36, -85.36, -30.75], [-25.36, -85.36, -30.75], [-19.36, -85.36, -30.75], [-13.36, -85.36, -30.75], [-7.36, -85.36, -30.75], [-1.36, -85.36, -30.75], [4.64, -85.36, -30.75], [10.64, -85.36, -30.75], [16.64, -85.36, -30.75], [22.64, -85.36, -30.75], [28.64, -85.36, -30.75], [34.64, -85.36, -30.75], [40.64, -85.36, -30.75], [46.64, -85.36, -30.75], [52.64, -85.36, -30.75], [58.64, -85.36, -30.75], [64.64, -85.36, -30.75], [70.64, -85.36, -30.75], [76.64, -85.36, -30.75], [82.64, -85.36, -30.75], [88.64, -85.36, -30.75], [94.64, -85.36, -30.75], [-103.36, -79.36, -30.75], [-97.36, -79.36, -30.75], [-91.36, -79.36, -30.75], [-85.36, -79.36, -30.75], [-79.36, -79.36, -30.75], [-73.36, -79.36, -30.75], [-67.36, -79.36, -30.75], [-61.36, -79.36, -30.75], [-55.36, -79.36, -30.75], [-49.36, -79.36, -30.75], [-43.36, -79.36, -30.75], [-37.36, -79.36, -30.75], [-31.36, -79.36, -30.75], [-25.36, -79.36, -30.75], [-19.36, -79.36, -30.75], [-13.36, -79.36, -30.75], [-7.36, -79.36, -30.75], [-1.36, -79.36, -30.75], [4.64, -79.36, -30.75], [10.64, -79.36, -30.75], [16.64, -79.36, -30.75], [22.64, -79.36, -30.75], [28.64, -79.36, -30.75], [34.64, -79.36, -30.75], [40.64, -79.36, -30.75], [46.64, -79.36, -30.75], [52.64, -79.36, -30.75], [58.64, -79.36, -30.75], [64.64, -79.36, -30.75], [70.64, -79.36, -30.75], [76.64, -79.36, -30.75], [82.64, -79.36, -30.75], [88.64, -79.36, -30.75], [94.64, -79.36, -30.75], [-103.36, -73.36, -30.75], [-97.36, -73.36, -30.75], [-91.36, -73.36, -30.75], [-85.36, -73.36, -30.75], [-79.36, -73.36, -30.75], [-73.36, -73.36, -30.75], [-67.36, -73.36, -30.75], [-61.36, -73.36, -30.75], [-55.36, -73.36, -30.75], [-49.36, -73.36, -30.75], [-43.36, -73.36, -30.75], [-37.36, -73.36, -30.75], [-31.36, -73.36, -30.75], [-25.36, -73.36, -30.75], [-19.36, -73.36, -30.75], [-13.36, -73.36, -30.75], [-7.36, -73.36, -30.75], [-1.36, -73.36, -30.75], [4.64, -73.36, -30.75], [10.64, -73.36, -30.75], [16.64, -73.36, -30.75], [22.64, -73.36, -30.75], [28.64, -73.36, -30.75], [34.64, -73.36, -30.75], [40.64, -73.36, -30.75], [46.64, -73.36, -30.75], [52.64, -73.36, -30.75], [58.64, -73.36, -30.75], [64.64, -73.36, -30.75], [70.64, -73.36, -30.75], [76.64, -73.36, -30.75], [82.64, -73.36, -30.75], [88.64, -73.36, -30.75], [94.64, -73.36, -30.75], [-103.36, -67.36, -30.75], [-97.36, -67.36, -30.75], [-91.36, -67.36, -30.75], [-85.36, -67.36, -30.75], [-79.36, -67.36, -30.75], [-73.36, -67.36, -30.75], [-67.36, -67.36, -30.75], [-61.36, -67.36, -30.75], [-55.36, -67.36, -30.75], [-49.36, -67.36, -30.75], [-43.36, -67.36, -30.75], [-37.36, -67.36, -30.75], [-31.36, -67.36, -30.75], [-25.36, -67.36, -30.75], [-19.36, -67.36, -30.75], [-13.36, -67.36, -30.75], [-7.36, -67.36, -30.75], [-1.36, -67.36, -30.75], [4.64, -67.36, -30.75], [10.64, -67.36, -30.75], [16.64, -67.36, -30.75], [22.64, -67.36, -30.75], [28.64, -67.36, -30.75], [34.64, -67.36, -30.75], [40.64, -67.36, -30.75], [46.64, -67.36, -30.75], [52.64, -67.36, -30.75], [58.64, -67.36, -30.75], [64.64, -67.36, -30.75], [70.64, -67.36, -30.75], [76.64, -67.36, -30.75], [82.64, -67.36, -30.75], [88.64, -67.36, -30.75], [94.64, -67.36, -30.75], [-103.36, -61.36, -30.75], [-97.36, -61.36, -30.75], [-91.36, -61.36, -30.75], [-85.36, -61.36, -30.75], [-79.36, -61.36, -30.75], [-73.36, -61.36, -30.75], [-67.36, -61.36, -30.75], [-61.36, -61.36, -30.75], [-55.36, -61.36, -30.75], [-49.36, -61.36, -30.75], [-43.36, -61.36, -30.75], [-37.36, -61.36, -30.75], [-31.36, -61.36, -30.75], [-25.36, -61.36, -30.75], [-19.36, -61.36, -30.75], [-13.36, -61.36, -30.75], [-7.36, -61.36, -30.75], [-1.36, -61.36, -30.75], [4.64, -61.36, -30.75], [10.64, -61.36, -30.75], [16.64, -61.36, -30.75], [22.64, -61.36, -30.75], [28.64, -61.36, -30.75], [34.64, -61.36, -30.75], [40.64, -61.36, -30.75], [46.64, -61.36, -30.75], [52.64, -61.36, -30.75], [58.64, -61.36, -30.75], [64.64, -61.36, -30.75], [70.64, -61.36, -30.75], [76.64, -61.36, -30.75], [82.64, -61.36, -30.75], [88.64, -61.36, -30.75], [94.64, -61.36, -30.75], [-103.36, -55.36, -30.75], [-97.36, -55.36, -30.75], [-91.36, -55.36, -30.75], [-85.36, -55.36, -30.75], [-79.36, -55.36, -30.75], [-73.36, -55.36, -30.75], [-67.36, -55.36, -30.75], [-61.36, -55.36, -30.75], [-55.36, -55.36, -30.75], [-49.36, -55.36, -30.75], [-43.36, -55.36, -30.75], [-37.36, -55.36, -30.75], [-31.36, -55.36, -30.75], [-25.36, -55.36, -30.75], [-19.36, -55.36, -30.75], [-13.36, -55.36, -30.75], [-7.36, -55.36, -30.75], [-1.36, -55.36, -30.75], [4.64, -55.36, -30.75], [10.64, -55.36, -30.75], [16.64, -55.36, -30.75], [22.64, -55.36, -30.75], [28.64, -55.36, -30.75], [34.64, -55.36, -30.75], [40.64, -55.36, -30.75], [46.64, -55.36, -30.75], [52.64, -55.36, -30.75], [58.64, -55.36, -30.75], [64.64, -55.36, -30.75], [70.64, -55.36, -30.75], [76.64, -55.36, -30.75], [82.64, -55.36, -30.75], [88.64, -55.36, -30.75], [94.64, -55.36, -30.75], [-103.36, -49.36, -30.75], [-97.36, -49.36, -30.75], [-91.36, -49.36, -30.75], [-85.36, -49.36, -30.75], [-79.36, -49.36, -30.75], [-73.36, -49.36, -30.75], [-67.36, -49.36, -30.75], [-61.36, -49.36, -30.75], [-55.36, -49.36, -30.75], [-49.36, -49.36, -30.75], [-43.36, -49.36, -30.75], [-37.36, -49.36, -30.75], [-31.36, -49.36, -30.75], [-25.36, -49.36, -30.75], [-19.36, -49.36, -30.75], [-13.36, -49.36, -30.75], [-7.36, -49.36, -30.75], [-1.36, -49.36, -30.75], [4.64, -49.36, -30.75], [10.64, -49.36, -30.75], [16.64, -49.36, -30.75], [22.64, -49.36, -30.75], [28.64, -49.36, -30.75], [34.64, -49.36, -30.75], [40.64, -49.36, -30.75], [46.64, -49.36, -30.75], [52.64, -49.36, -30.75], [58.64, -49.36, -30.75], [64.64, -49.36, -30.75], [70.64, -49.36, -30.75], [76.64, -49.36, -30.75], [82.64, -49.36, -30.75], [88.64, -49.36, -30.75], [94.64, -49.36, -30.75], [-103.36, -43.36, -30.75], [-97.36, -43.36, -30.75], [-91.36, -43.36, -30.75], [-85.36, -43.36, -30.75], [-79.36, -43.36, -30.75], [-73.36, -43.36, -30.75], [-67.36, -43.36, -30.75], [-61.36, -43.36, -30.75], [-55.36, -43.36, -30.75], [-49.36, -43.36, -30.75], [-43.36, -43.36, -30.75], [-37.36, -43.36, -30.75], [-31.36, -43.36, -30.75], [-25.36, -43.36, -30.75], [-19.36, -43.36, -30.75], [-13.36, -43.36, -30.75], [-7.36, -43.36, -30.75], [-1.36, -43.36, -30.75], [4.64, -43.36, -30.75], [10.64, -43.36, -30.75], [16.64, -43.36, -30.75], [22.64, -43.36, -30.75], [28.64, -43.36, -30.75], [34.64, -43.36, -30.75], [40.64, -43.36, -30.75], [46.64, -43.36, -30.75], [52.64, -43.36, -30.75], [58.64, -43.36, -30.75], [64.64, -43.36, -30.75], [70.64, -43.36, -30.75], [76.64, -43.36, -30.75], [82.64, -43.36, -30.75], [88.64, -43.36, -30.75], [94.64, -43.36, -30.75], [-103.36, -37.36, -30.75], [-97.36, -37.36, -30.75], [-91.36, -37.36, -30.75], [-85.36, -37.36, -30.75], [-79.36, -37.36, -30.75], [-73.36, -37.36, -30.75], [-67.36, -37.36, -30.75], [-61.36, -37.36, -30.75], [-55.36, -37.36, -30.75], [-49.36, -37.36, -30.75], [-43.36, -37.36, -30.75], [-37.36, -37.36, -30.75], [-31.36, -37.36, -30.75], [-25.36, -37.36, -30.75], [-19.36, -37.36, -30.75], [-13.36, -37.36, -30.75], [-7.36, -37.36, -30.75], [-1.36, -37.36, -30.75], [4.64, -37.36, -30.75], [10.64, -37.36, -30.75], [16.64, -37.36, -30.75], [22.64, -37.36, -30.75], [28.64, -37.36, -30.75], [34.64, -37.36, -30.75], [40.64, -37.36, -30.75], [46.64, -37.36, -30.75], [52.64, -37.36, -30.75], [58.64, -37.36, -30.75], [64.64, -37.36, -30.75], [70.64, -37.36, -30.75], [76.64, -37.36, -30.75], [82.64, -37.36, -30.75], [88.64, -37.36, -30.75], [94.64, -37.36, -30.75], [-103.36, -31.36, -30.75], [-97.36, -31.36, -30.75], [-91.36, -31.36, -30.75], [-85.36, -31.36, -30.75], [-79.36, -31.36, -30.75], [-73.36, -31.36, -30.75], [-67.36, -31.36, -30.75], [-61.36, -31.36, -30.75], [-55.36, -31.36, -30.75], [-49.36, -31.36, -30.75], [-43.36, -31.36, -30.75], [-37.36, -31.36, -30.75], [-31.36, -31.36, -30.75], [-25.36, -31.36, -30.75], [-19.36, -31.36, -30.75], [-13.36, -31.36, -30.75], [-7.36, -31.36, -30.75], [-1.36, -31.36, -30.75], [4.64, -31.36, -30.75], [10.64, -31.36, -30.75], [16.64, -31.36, -30.75], [22.64, -31.36, -30.75], [28.64, -31.36, -30.75], [34.64, -31.36, -30.75], [40.64, -31.36, -30.75], [46.64, -31.36, -30.75], [52.64, -31.36, -30.75], [58.64, -31.36, -30.75], [64.64, -31.36, -30.75], [70.64, -31.36, -30.75], [76.64, -31.36, -30.75], [82.64, -31.36, -30.75], [88.64, -31.36, -30.75], [94.64, -31.36, -30.75], [100.64, -31.36, -30.75], [-103.36, -25.36, -30.75], [-97.36, -25.36, -30.75], [-91.36, -25.36, -30.75], [-85.36, -25.36, -30.75], [-79.36, -25.36, -30.75], [-73.36, -25.36, -30.75], [-67.36, -25.36, -30.75], [-61.36, -25.36, -30.75], [-55.36, -25.36, -30.75], [-49.36, -25.36, -30.75], [-43.36, -25.36, -30.75], [-37.36, -25.36, -30.75], [-31.36, -25.36, -30.75], [-25.36, -25.36, -30.75], [-19.36, -25.36, -30.75], [-13.36, -25.36, -30.75], [-7.36, -25.36, -30.75], [-1.36, -25.36, -30.75], [4.64, -25.36, -30.75], [10.64, -25.36, -30.75], [16.64, -25.36, -30.75], [22.64, -25.36, -30.75], [28.64, -25.36, -30.75], [34.64, -25.36, -30.75], [40.64, -25.36, -30.75], [46.64, -25.36, -30.75], [52.64, -25.36, -30.75], [58.64, -25.36, -30.75], [64.64, -25.36, -30.75], [70.64, -25.36, -30.75], [76.64, -25.36, -30.75], [82.64, -25.36, -30.75], [88.64, -25.36, -30.75], [94.64, -25.36, -30.75], [100.64, -25.36, -30.75], [-103.36, -19.36, -30.75], [-97.36, -19.36, -30.75], [-91.36, -19.36, -30.75], [-85.36, -19.36, -30.75], [-79.36, -19.36, -30.75], [-73.36, -19.36, -30.75], [-67.36, -19.36, -30.75], [-61.36, -19.36, -30.75], [-55.36, -19.36, -30.75], [-49.36, -19.36, -30.75], [-43.36, -19.36, -30.75], [-37.36, -19.36, -30.75], [-31.36, -19.36, -30.75], [-25.36, -19.36, -30.75], [-19.36, -19.36, -30.75], [-13.36, -19.36, -30.75], [-7.36, -19.36, -30.75], [-1.36, -19.36, -30.75], [4.64, -19.36, -30.75], [10.64, -19.36, -30.75], [16.64, -19.36, -30.75], [22.64, -19.36, -30.75], [28.64, -19.36, -30.75], [34.64, -19.36, -30.75], [40.64, -19.36, -30.75], [46.64, -19.36, -30.75], [52.64, -19.36, -30.75], [58.64, -19.36, -30.75], [64.64, -19.36, -30.75], [70.64, -19.36, -30.75], [76.64, -19.36, -30.75], [82.64, -19.36, -30.75], [88.64, -19.36, -30.75], [94.64, -19.36, -30.75], [100.64, -19.36, -30.75], [-103.36, -13.36, -30.75], [-97.36, -13.36, -30.75], [-91.36, -13.36, -30.75], [-85.36, -13.36, -30.75], [-79.36, -13.36, -30.75], [-73.36, -13.36, -30.75], [-67.36, -13.36, -30.75], [-61.36, -13.36, -30.75], [-55.36, -13.36, -30.75], [-49.36, -13.36, -30.75], [-43.36, -13.36, -30.75], [-37.36, -13.36, -30.75], [-31.36, -13.36, -30.75], [-25.36, -13.36, -30.75], [-19.36, -13.36, -30.75], [-13.36, -13.36, -30.75], [-7.36, -13.36, -30.75], [-1.36, -13.36, -30.75], [4.64, -13.36, -30.75], [10.64, -13.36, -30.75], [16.64, -13.36, -30.75], [22.64, -13.36, -30.75], [28.64, -13.36, -30.75], [34.64, -13.36, -30.75], [40.64, -13.36, -30.75], [46.64, -13.36, -30.75], [52.64, -13.36, -30.75], [58.64, -13.36, -30.75], [64.64, -13.36, -30.75], [70.64, -13.36, -30.75], [76.64, -13.36, -30.75], [82.64, -13.36, -30.75], [88.64, -13.36, -30.75], [94.64, -13.36, -30.75], [100.64, -13.36, -30.75], [-103.36, -7.36, -30.75], [-97.36, -7.36, -30.75], [-91.36, -7.36, -30.75], [-85.36, -7.36, -30.75], [-79.36, -7.36, -30.75], [-73.36, -7.36, -30.75], [-67.36, -7.36, -30.75], [-61.36, -7.36, -30.75], [-55.36, -7.36, -30.75], [-49.36, -7.36, -30.75], [-43.36, -7.36, -30.75], [-37.36, -7.36, -30.75], [-31.36, -7.36, -30.75], [-25.36, -7.36, -30.75], [-19.36, -7.36, -30.75], [-13.36, -7.36, -30.75], [-7.36, -7.36, -30.75], [-1.36, -7.36, -30.75], [4.64, -7.36, -30.75], [10.64, -7.36, -30.75], [16.64, -7.36, -30.75], [22.64, -7.36, -30.75], [28.64, -7.36, -30.75], [34.64, -7.36, -30.75], [40.64, -7.36, -30.75], [46.64, -7.36, -30.75], [52.64, -7.36, -30.75], [58.64, -7.36, -30.75], [64.64, -7.36, -30.75], [70.64, -7.36, -30.75], [76.64, -7.36, -30.75], [82.64, -7.36, -30.75], [88.64, -7.36, -30.75], [94.64, -7.36, -30.75], [100.64, -7.36, -30.75], [-103.36, -1.36, -30.75], [-97.36, -1.36, -30.75], [-91.36, -1.36, -30.75], [-85.36, -1.36, -30.75], [-79.36, -1.36, -30.75], [-73.36, -1.36, -30.75], [-67.36, -1.36, -30.75], [-61.36, -1.36, -30.75], [-55.36, -1.36, -30.75], [-49.36, -1.36, -30.75], [-43.36, -1.36, -30.75], [-37.36, -1.36, -30.75], [-31.36, -1.36, -30.75], [-25.36, -1.36, -30.75], [-19.36, -1.36, -30.75], [-13.36, -1.36, -30.75], [-7.36, -1.36, -30.75], [-1.36, -1.36, -30.75], [4.64, -1.36, -30.75], [10.64, -1.36, -30.75], [16.64, -1.36, -30.75], [22.64, -1.36, -30.75], [28.64, -1.36, -30.75], [34.64, -1.36, -30.75], [40.64, -1.36, -30.75], [46.64, -1.36, -30.75], [52.64, -1.36, -30.75], [58.64, -1.36, -30.75], [64.64, -1.36, -30.75], [70.64, -1.36, -30.75], [76.64, -1.36, -30.75], [82.64, -1.36, -30.75], [88.64, -1.36, -30.75], [94.64, -1.36, -30.75], [100.64, -1.36, -30.75], [-103.36, 4.64, -30.75], [-97.36, 4.64, -30.75], [-91.36, 4.64, -30.75], [-85.36, 4.64, -30.75], [-79.36, 4.64, -30.75], [-73.36, 4.64, -30.75], [-67.36, 4.64, -30.75], [-61.36, 4.64, -30.75], [-55.36, 4.64, -30.75], [-49.36, 4.64, -30.75], [-43.36, 4.64, -30.75], [-37.36, 4.64, -30.75], [-31.36, 4.64, -30.75], [-25.36, 4.64, -30.75], [-19.36, 4.64, -30.75], [-13.36, 4.64, -30.75], [-7.36, 4.64, -30.75], [-1.36, 4.64, -30.75], [4.64, 4.64, -30.75], [10.64, 4.64, -30.75], [16.64, 4.64, -30.75], [22.64, 4.64, -30.75], [28.64, 4.64, -30.75], [34.64, 4.64, -30.75], [40.64, 4.64, -30.75], [46.64, 4.64, -30.75], [52.64, 4.64, -30.75], [58.64, 4.64, -30.75], [64.64, 4.64, -30.75], [70.64, 4.64, -30.75], [76.64, 4.64, -30.75], [82.64, 4.64, -30.75], [88.64, 4.64, -30.75], [94.64, 4.64, -30.75], [100.64, 4.64, -30.75], [-103.36, 10.64, -30.75], [-97.36, 10.64, -30.75], [-91.36, 10.64, -30.75], [-85.36, 10.64, -30.75], [-79.36, 10.64, -30.75], [-73.36, 10.64, -30.75], [-67.36, 10.64, -30.75], [-61.36, 10.64, -30.75], [-55.36, 10.64, -30.75], [-49.36, 10.64, -30.75], [-43.36, 10.64, -30.75], [-37.36, 10.64, -30.75], [-31.36, 10.64, -30.75], [-25.36, 10.64, -30.75], [-19.36, 10.64, -30.75], [-13.36, 10.64, -30.75], [-7.36, 10.64, -30.75], [-1.36, 10.64, -30.75], [4.64, 10.64, -30.75], [10.64, 10.64, -30.75], [16.64, 10.64, -30.75], [22.64, 10.64, -30.75], [28.64, 10.64, -30.75], [34.64, 10.64, -30.75], [40.64, 10.64, -30.75], [46.64, 10.64, -30.75], [52.64, 10.64, -30.75], [58.64, 10.64, -30.75], [64.64, 10.64, -30.75], [70.64, 10.64, -30.75], [76.64, 10.64, -30.75], [82.64, 10.64, -30.75], [88.64, 10.64, -30.75], [94.64, 10.64, -30.75], [100.64, 10.64, -30.75], [-103.36, 16.64, -30.75], [-97.36, 16.64, -30.75], [-91.36, 16.64, -30.75], [-85.36, 16.64, -30.75], [-79.36, 16.64, -30.75], [-73.36, 16.64, -30.75], [-67.36, 16.64, -30.75], [-61.36, 16.64, -30.75], [-55.36, 16.64, -30.75], [-49.36, 16.64, -30.75], [-43.36, 16.64, -30.75], [-37.36, 16.64, -30.75], [-31.36, 16.64, -30.75], [-25.36, 16.64, -30.75], [-19.36, 16.64, -30.75], [-13.36, 16.64, -30.75], [-7.36, 16.64, -30.75], [-1.36, 16.64, -30.75], [4.64, 16.64, -30.75], [10.64, 16.64, -30.75], [16.64, 16.64, -30.75], [22.64, 16.64, -30.75], [28.64, 16.64, -30.75], [34.64, 16.64, -30.75], [40.64, 16.64, -30.75], [46.64, 16.64, -30.75], [52.64, 16.64, -30.75], [58.64, 16.64, -30.75], [64.64, 16.64, -30.75], [70.64, 16.64, -30.75], [76.64, 16.64, -30.75], [82.64, 16.64, -30.75], [88.64, 16.64, -30.75], [94.64, 16.64, -30.75], [100.64, 16.64, -30.75], [-103.36, 22.64, -30.75], [-97.36, 22.64, -30.75], [-91.36, 22.64, -30.75], [-85.36, 22.64, -30.75], [-79.36, 22.64, -30.75], [-73.36, 22.64, -30.75], [-67.36, 22.64, -30.75], [-61.36, 22.64, -30.75], [-55.36, 22.64, -30.75], [-49.36, 22.64, -30.75], [-43.36, 22.64, -30.75], [-37.36, 22.64, -30.75], [-31.36, 22.64, -30.75], [-25.36, 22.64, -30.75], [-19.36, 22.64, -30.75], [-13.36, 22.64, -30.75], [-7.36, 22.64, -30.75], [-1.36, 22.64, -30.75], [4.64, 22.64, -30.75], [10.64, 22.64, -30.75], [16.64, 22.64, -30.75], [22.64, 22.64, -30.75], [28.64, 22.64, -30.75], [34.64, 22.64, -30.75], [40.64, 22.64, -30.75], [46.64, 22.64, -30.75], [52.64, 22.64, -30.75], [58.64, 22.64, -30.75], [64.64, 22.64, -30.75], [70.64, 22.64, -30.75], [76.64, 22.64, -30.75], [82.64, 22.64, -30.75], [88.64, 22.64, -30.75], [94.64, 22.64, -30.75], [100.64, 22.64, -30.75], [-97.36, 28.64, -30.75], [-91.36, 28.64, -30.75], [-85.36, 28.64, -30.75], [-79.36, 28.64, -30.75], [-73.36, 28.64, -30.75], [-67.36, 28.64, -30.75], [-61.36, 28.64, -30.75], [-55.36, 28.64, -30.75], [-49.36, 28.64, -30.75], [-43.36, 28.64, -30.75], [-37.36, 28.64, -30.75], [-31.36, 28.64, -30.75], [-25.36, 28.64, -30.75], [-19.36, 28.64, -30.75], [-13.36, 28.64, -30.75], [-7.36, 28.64, -30.75], [-1.36, 28.64, -30.75], [4.64, 28.64, -30.75], [10.64, 28.64, -30.75], [16.64, 28.64, -30.75], [22.64, 28.64, -30.75], [28.64, 28.64, -30.75], [34.64, 28.64, -30.75], [40.64, 28.64, -30.75], [46.64, 28.64, -30.75], [52.64, 28.64, -30.75], [58.64, 28.64, -30.75], [64.64, 28.64, -30.75], [70.64, 28.64, -30.75], [76.64, 28.64, -30.75], [82.64, 28.64, -30.75], [88.64, 28.64, -30.75], [94.64, 28.64, -30.75], [100.64, 28.64, -30.75], [-103.36, 34.64, -30.75], [-97.36, 34.64, -30.75], [-91.36, 34.64, -30.75], [-85.36, 34.64, -30.75], [-79.36, 34.64, -30.75], [-73.36, 34.64, -30.75], [-67.36, 34.64, -30.75], [-61.36, 34.64, -30.75], [-55.36, 34.64, -30.75], [-49.36, 34.64, -30.75], [-43.36, 34.64, -30.75], [-37.36, 34.64, -30.75], [-31.36, 34.64, -30.75], [-25.36, 34.64, -30.75], [-19.36, 34.64, -30.75], [-13.36, 34.64, -30.75], [-7.36, 34.64, -30.75], [-1.36, 34.64, -30.75], [4.64, 34.64, -30.75], [10.64, 34.64, -30.75], [16.64, 34.64, -30.75], [22.64, 34.64, -30.75], [28.64, 34.64, -30.75], [34.64, 34.64, -30.75], [40.64, 34.64, -30.75], [46.64, 34.64, -30.75], [52.64, 34.64, -30.75], [58.64, 34.64, -30.75], [64.64, 34.64, -30.75], [70.64, 34.64, -30.75], [76.64, 34.64, -30.75], [82.64, 34.64, -30.75], [88.64, 34.64, -30.75], [94.64, 34.64, -30.75], [100.64, 34.64, -30.75], [-97.36, 40.64, -30.75], [-91.36, 40.64, -30.75], [-85.36, 40.64, -30.75], [-79.36, 40.64, -30.75], [-73.36, 40.64, -30.75], [-67.36, 40.64, -30.75], [-61.36, 40.64, -30.75], [-55.36, 40.64, -30.75], [-49.36, 40.64, -30.75], [-43.36, 40.64, -30.75], [-37.36, 40.64, -30.75], [-31.36, 40.64, -30.75], [-25.36, 40.64, -30.75], [-19.36, 40.64, -30.75], [-13.36, 40.64, -30.75], [-7.36, 40.64, -30.75], [-1.36, 40.64, -30.75], [4.64, 40.64, -30.75], [10.64, 40.64, -30.75], [16.64, 40.64, -30.75], [22.64, 40.64, -30.75], [28.64, 40.64, -30.75], [34.64, 40.64, -30.75], [40.64, 40.64, -30.75], [46.64, 40.64, -30.75], [52.64, 40.64, -30.75], [58.64, 40.64, -30.75], [64.64, 40.64, -30.75], [70.64, 40.64, -30.75], [76.64, 40.64, -30.75], [82.64, 40.64, -30.75], [88.64, 40.64, -30.75], [94.64, 40.64, -30.75], [100.64, 40.64, -30.75], [-97.36, 46.64, -30.75], [-91.36, 46.64, -30.75], [-85.36, 46.64, -30.75], [-79.36, 46.64, -30.75], [-73.36, 46.64, -30.75], [-67.36, 46.64, -30.75], [-61.36, 46.64, -30.75], [-55.36, 46.64, -30.75], [-49.36, 46.64, -30.75], [-43.36, 46.64, -30.75], [-37.36, 46.64, -30.75], [-31.36, 46.64, -30.75], [-25.36, 46.64, -30.75], [-19.36, 46.64, -30.75], [-13.36, 46.64, -30.75], [-7.36, 46.64, -30.75], [-1.36, 46.64, -30.75], [4.64, 46.64, -30.75], [10.64, 46.64, -30.75], [16.64, 46.64, -30.75], [22.64, 46.64, -30.75], [28.64, 46.64, -30.75], [34.64, 46.64, -30.75], [40.64, 46.64, -30.75], [46.64, 46.64, -30.75], [52.64, 46.64, -30.75], [58.64, 46.64, -30.75], [64.64, 46.64, -30.75], [70.64, 46.64, -30.75], [76.64, 46.64, -30.75], [82.64, 46.64, -30.75], [88.64, 46.64, -30.75], [94.64, 46.64, -30.75], [100.64, 46.64, -30.75], [-97.36, 52.64, -30.75], [-91.36, 52.64, -30.75], [-85.36, 52.64, -30.75], [-79.36, 52.64, -30.75], [-73.36, 52.64, -30.75], [-67.36, 52.64, -30.75], [-61.36, 52.64, -30.75], [-55.36, 52.64, -30.75], [-49.36, 52.64, -30.75], [-43.36, 52.64, -30.75], [-37.36, 52.64, -30.75], [-31.36, 52.64, -30.75], [-25.36, 52.64, -30.75], [-19.36, 52.64, -30.75], [-13.36, 52.64, -30.75], [-7.36, 52.64, -30.75], [-1.36, 52.64, -30.75], [4.64, 52.64, -30.75], [10.64, 52.64, -30.75], [16.64, 52.64, -30.75], [22.64, 52.64, -30.75], [28.64, 52.64, -30.75], [34.64, 52.64, -30.75], [40.64, 52.64, -30.75], [46.64, 52.64, -30.75], [52.64, 52.64, -30.75], [58.64, 52.64, -30.75], [64.64, 52.64, -30.75], [70.64, 52.64, -30.75], [76.64, 52.64, -30.75], [82.64, 52.64, -30.75], [88.64, 52.64, -30.75], [94.64, 52.64, -30.75], [100.64, 52.64, -30.75], [-97.36, 58.64, -30.75], [-91.36, 58.64, -30.75], [-85.36, 58.64, -30.75], [-79.36, 58.64, -30.75], [-73.36, 58.64, -30.75], [-67.36, 58.64, -30.75], [-61.36, 58.64, -30.75], [-55.36, 58.64, -30.75], [-49.36, 58.64, -30.75], [-43.36, 58.64, -30.75], [-37.36, 58.64, -30.75], [-31.36, 58.64, -30.75], [-25.36, 58.64, -30.75], [-19.36, 58.64, -30.75], [-13.36, 58.64, -30.75], [-7.36, 58.64, -30.75], [-1.36, 58.64, -30.75], [4.64, 58.64, -30.75], [10.64, 58.64, -30.75], [16.64, 58.64, -30.75], [22.64, 58.64, -30.75], [28.64, 58.64, -30.75], [34.64, 58.64, -30.75], [40.64, 58.64, -30.75], [46.64, 58.64, -30.75], [52.64, 58.64, -30.75], [58.64, 58.64, -30.75], [64.64, 58.64, -30.75], [70.64, 58.64, -30.75], [76.64, 58.64, -30.75], [82.64, 58.64, -30.75], [88.64, 58.64, -30.75], [94.64, 58.64, -30.75], [100.64, 58.64, -30.75], [-97.36, 64.64, -30.75], [-91.36, 64.64, -30.75], [-85.36, 64.64, -30.75], [-79.36, 64.64, -30.75], [-73.36, 64.64, -30.75], [-67.36, 64.64, -30.75], [-61.36, 64.64, -30.75], [-55.36, 64.64, -30.75], [-49.36, 64.64, -30.75], [-43.36, 64.64, -30.75], [-37.36, 64.64, -30.75], [-31.36, 64.64, -30.75], [-25.36, 64.64, -30.75], [-19.36, 64.64, -30.75], [-13.36, 64.64, -30.75], [-7.36, 64.64, -30.75], [-1.36, 64.64, -30.75], [4.64, 64.64, -30.75], [10.64, 64.64, -30.75], [16.64, 64.64, -30.75], [22.64, 64.64, -30.75], [28.64, 64.64, -30.75], [34.64, 64.64, -30.75], [40.64, 64.64, -30.75], [46.64, 64.64, -30.75], [52.64, 64.64, -30.75], [58.64, 64.64, -30.75], [64.64, 64.64, -30.75], [70.64, 64.64, -30.75], [76.64, 64.64, -30.75], [82.64, 64.64, -30.75], [88.64, 64.64, -30.75], [94.64, 64.64, -30.75], [100.64, 64.64, -30.75], [-97.36, 70.64, -30.75], [-91.36, 70.64, -30.75], [-85.36, 70.64, -30.75], [-79.36, 70.64, -30.75], [-73.36, 70.64, -30.75], [-67.36, 70.64, -30.75], [-61.36, 70.64, -30.75], [-55.36, 70.64, -30.75], [-49.36, 70.64, -30.75], [-43.36, 70.64, -30.75], [-37.36, 70.64, -30.75], [-31.36, 70.64, -30.75], [-25.36, 70.64, -30.75], [-19.36, 70.64, -30.75], [-13.36, 70.64, -30.75], [-7.36, 70.64, -30.75], [-1.36, 70.64, -30.75], [4.64, 70.64, -30.75], [10.64, 70.64, -30.75], [16.64, 70.64, -30.75], [22.64, 70.64, -30.75], [28.64, 70.64, -30.75], [34.64, 70.64, -30.75], [40.64, 70.64, -30.75], [46.64, 70.64, -30.75], [52.64, 70.64, -30.75], [58.64, 70.64, -30.75], [64.64, 70.64, -30.75], [70.64, 70.64, -30.75], [76.64, 70.64, -30.75], [82.64, 70.64, -30.75], [88.64, 70.64, -30.75], [94.64, 70.64, -30.75], [100.64, 70.64, -30.75], [-97.36, 76.64, -30.75], [-91.36, 76.64, -30.75], [-85.36, 76.64, -30.75], [-79.36, 76.64, -30.75], [-73.36, 76.64, -30.75], [-67.36, 76.64, -30.75], [-61.36, 76.64, -30.75], [-55.36, 76.64, -30.75], [-49.36, 76.64, -30.75], [-43.36, 76.64, -30.75], [-37.36, 76.64, -30.75], [-31.36, 76.64, -30.75], [-25.36, 76.64, -30.75], [-19.36, 76.64, -30.75], [-13.36, 76.64, -30.75], [-7.36, 76.64, -30.75], [-1.36, 76.64, -30.75], [4.64, 76.64, -30.75], [10.64, 76.64, -30.75], [16.64, 76.64, -30.75], [22.64, 76.64, -30.75], [28.64, 76.64, -30.75], [34.64, 76.64, -30.75], [40.64, 76.64, -30.75], [46.64, 76.64, -30.75], [52.64, 76.64, -30.75], [58.64, 76.64, -30.75], [64.64, 76.64, -30.75], [70.64, 76.64, -30.75], [76.64, 76.64, -30.75], [82.64, 76.64, -30.75], [88.64, 76.64, -30.75], [94.64, 76.64, -30.75], [100.64, 76.64, -30.75], [-97.36, 82.64, -30.75], [-91.36, 82.64, -30.75], [-85.36, 82.64, -30.75], [-79.36, 82.64, -30.75], [-73.36, 82.64, -30.75], [-67.36, 82.64, -30.75], [-61.36, 82.64, -30.75], [-55.36, 82.64, -30.75], [-49.36, 82.64, -30.75], [-43.36, 82.64, -30.75], [-37.36, 82.64, -30.75], [-31.36, 82.64, -30.75], [-25.36, 82.64, -30.75], [-19.36, 82.64, -30.75], [-13.36, 82.64, -30.75], [-7.36, 82.64, -30.75], [-1.36, 82.64, -30.75], [4.64, 82.64, -30.75], [10.64, 82.64, -30.75], [16.64, 82.64, -30.75], [22.64, 82.64, -30.75], [28.64, 82.64, -30.75], [34.64, 82.64, -30.75], [40.64, 82.64, -30.75], [46.64, 82.64, -30.75], [52.64, 82.64, -30.75], [58.64, 82.64, -30.75], [64.64, 82.64, -30.75], [70.64, 82.64, -30.75], [76.64, 82.64, -30.75], [82.64, 82.64, -30.75], [88.64, 82.64, -30.75], [94.64, 82.64, -30.75], [100.64, 82.64, -30.75], [-97.36, 88.64, -30.75], [-91.36, 88.64, -30.75], [-85.36, 88.64, -30.75], [-79.36, 88.64, -30.75], [-73.36, 88.64, -30.75], [-67.36, 88.64, -30.75], [-61.36, 88.64, -30.75], [-55.36, 88.64, -30.75], [-49.36, 88.64, -30.75], [-43.36, 88.64, -30.75], [-37.36, 88.64, -30.75], [-31.36, 88.64, -30.75], [-25.36, 88.64, -30.75], [-19.36, 88.64, -30.75], [-13.36, 88.64, -30.75], [-7.36, 88.64, -30.75], [-1.36, 88.64, -30.75], [4.64, 88.64, -30.75], [10.64, 88.64, -30.75], [16.64, 88.64, -30.75], [22.64, 88.64, -30.75], [28.64, 88.64, -30.75], [34.64, 88.64, -30.75], [40.64, 88.64, -30.75], [46.64, 88.64, -30.75], [52.64, 88.64, -30.75], [58.64, 88.64, -30.75], [64.64, 88.64, -30.75], [70.64, 88.64, -30.75], [76.64, 88.64, -30.75], [82.64, 88.64, -30.75], [88.64, 88.64, -30.75], [94.64, 88.64, -30.75], [100.64, 88.64, -30.75], [-97.36, 94.64, -30.75], [-91.36, 94.64, -30.75], [-85.36, 94.64, -30.75], [-79.36, 94.64, -30.75], [-73.36, 94.64, -30.75], [-67.36, 94.64, -30.75], [-61.36, 94.64, -30.75], [-55.36, 94.64, -30.75], [-49.36, 94.64, -30.75], [-43.36, 94.64, -30.75], [-37.36, 94.64, -30.75], [-31.36, 94.64, -30.75], [-25.36, 94.64, -30.75], [-19.36, 94.64, -30.75], [-13.36, 94.64, -30.75], [-7.36, 94.64, -30.75], [-1.36, 94.64, -30.75], [4.64, 94.64, -30.75], [10.64, 94.64, -30.75], [16.64, 94.64, -30.75], [22.64, 94.64, -30.75], [28.64, 94.64, -30.75], [34.64, 94.64, -30.75], [40.64, 94.64, -30.75], [46.64, 94.64, -30.75], [52.64, 94.64, -30.75], [58.64, 94.64, -30.75], [64.64, 94.64, -30.75], [70.64, 94.64, -30.75], [76.64, 94.64, -30.75], [82.64, 94.64, -30.75], [88.64, 94.64, -30.75], [94.64, 94.64, -30.75], [-85.36, 100.64, -30.75], [-79.36, 100.64, -30.75], [-73.36, 100.64, -30.75], [-67.36, 100.64, -30.75], [-61.36, 100.64, -30.75], [-55.36, 100.64, -30.75], [-49.36, 100.64, -30.75], [-43.36, 100.64, -30.75], [-37.36, 100.64, -30.75], [-31.36, 100.64, -30.75], [-25.36, 100.64, -30.75], [-19.36, 100.64, -30.75], [-13.36, 100.64, -30.75], [-7.36, 100.64, -30.75], [-1.36, 100.64, -30.75], [4.64, 100.64, -30.75], [10.64, 100.64, -30.75], [16.64, 100.64, -30.75], [22.64, 100.64, -30.75], [28.64, 100.64, -30.75], [34.64, 100.64, -30.75], [40.64, 100.64, -30.75], [46.64, 100.64, -30.75], [52.64, 100.64, -30.75], [-67.36, -103.36, -24.75], [-61.36, -103.36, -24.75], [-55.36, -103.36, -24.75], [-49.36, -103.36, -24.75], [-43.36, -103.36, -24.75], [-37.36, -103.36, -24.75], [-31.36, -103.36, -24.75], [-25.36, -103.36, -24.75], [-19.36, -103.36, -24.75], [-13.36, -103.36, -24.75], [-7.36, -103.36, -24.75], [-1.36, -103.36, -24.75], [4.64, -103.36, -24.75], [10.64, -103.36, -24.75], [16.64, -103.36, -24.75], [22.64, -103.36, -24.75], [28.64, -103.36, -24.75], [34.64, -103.36, -24.75], [40.64, -103.36, -24.75], [46.64, -103.36, -24.75], [52.64, -103.36, -24.75], [58.64, -103.36, -24.75], [64.64, -103.36, -24.75], [70.64, -103.36, -24.75], [76.64, -103.36, -24.75], [82.64, -103.36, -24.75], [88.64, -103.36, -24.75], [-91.36, -97.36, -24.75], [-85.36, -97.36, -24.75], [-79.36, -97.36, -24.75], [-73.36, -97.36, -24.75], [-67.36, -97.36, -24.75], [-61.36, -97.36, -24.75], [-55.36, -97.36, -24.75], [-49.36, -97.36, -24.75], [-43.36, -97.36, -24.75], [-37.36, -97.36, -24.75], [-31.36, -97.36, -24.75], [-25.36, -97.36, -24.75], [-19.36, -97.36, -24.75], [-13.36, -97.36, -24.75], [-7.36, -97.36, -24.75], [-1.36, -97.36, -24.75], [4.64, -97.36, -24.75], [10.64, -97.36, -24.75], [16.64, -97.36, -24.75], [22.64, -97.36, -24.75], [28.64, -97.36, -24.75], [34.64, -97.36, -24.75], [40.64, -97.36, -24.75], [46.64, -97.36, -24.75], [52.64, -97.36, -24.75], [58.64, -97.36, -24.75], [64.64, -97.36, -24.75], [70.64, -97.36, -24.75], [76.64, -97.36, -24.75], [82.64, -97.36, -24.75], [88.64, -97.36, -24.75], [94.64, -97.36, -24.75], [-103.36, -91.36, -24.75], [-97.36, -91.36, -24.75], [-91.36, -91.36, -24.75], [-85.36, -91.36, -24.75], [-79.36, -91.36, -24.75], [-73.36, -91.36, -24.75], [-67.36, -91.36, -24.75], [-61.36, -91.36, -24.75], [-55.36, -91.36, -24.75], [-49.36, -91.36, -24.75], [-43.36, -91.36, -24.75], [-37.36, -91.36, -24.75], [-31.36, -91.36, -24.75], [-25.36, -91.36, -24.75], [-19.36, -91.36, -24.75], [-13.36, -91.36, -24.75], [-7.36, -91.36, -24.75], [-1.36, -91.36, -24.75], [4.64, -91.36, -24.75], [10.64, -91.36, -24.75], [16.64, -91.36, -24.75], [22.64, -91.36, -24.75], [28.64, -91.36, -24.75], [34.64, -91.36, -24.75], [40.64, -91.36, -24.75], [46.64, -91.36, -24.75], [52.64, -91.36, -24.75], [58.64, -91.36, -24.75], [64.64, -91.36, -24.75], [70.64, -91.36, -24.75], [76.64, -91.36, -24.75], [82.64, -91.36, -24.75], [88.64, -91.36, -24.75], [94.64, -91.36, -24.75], [-103.36, -85.36, -24.75], [-97.36, -85.36, -24.75], [-91.36, -85.36, -24.75], [-85.36, -85.36, -24.75], [-79.36, -85.36, -24.75], [-73.36, -85.36, -24.75], [-67.36, -85.36, -24.75], [-61.36, -85.36, -24.75], [-55.36, -85.36, -24.75], [-49.36, -85.36, -24.75], [-43.36, -85.36, -24.75], [-37.36, -85.36, -24.75], [-31.36, -85.36, -24.75], [-25.36, -85.36, -24.75], [-19.36, -85.36, -24.75], [-13.36, -85.36, -24.75], [-7.36, -85.36, -24.75], [-1.36, -85.36, -24.75], [4.64, -85.36, -24.75], [10.64, -85.36, -24.75], [16.64, -85.36, -24.75], [22.64, -85.36, -24.75], [28.64, -85.36, -24.75], [34.64, -85.36, -24.75], [40.64, -85.36, -24.75], [46.64, -85.36, -24.75], [52.64, -85.36, -24.75], [58.64, -85.36, -24.75], [64.64, -85.36, -24.75], [70.64, -85.36, -24.75], [76.64, -85.36, -24.75], [82.64, -85.36, -24.75], [88.64, -85.36, -24.75], [94.64, -85.36, -24.75], [-103.36, -79.36, -24.75], [-97.36, -79.36, -24.75], [-91.36, -79.36, -24.75], [-85.36, -79.36, -24.75], [-79.36, -79.36, -24.75], [-73.36, -79.36, -24.75], [-67.36, -79.36, -24.75], [-61.36, -79.36, -24.75], [-55.36, -79.36, -24.75], [-49.36, -79.36, -24.75], [-43.36, -79.36, -24.75], [-37.36, -79.36, -24.75], [-31.36, -79.36, -24.75], [-25.36, -79.36, -24.75], [-19.36, -79.36, -24.75], [-13.36, -79.36, -24.75], [-7.36, -79.36, -24.75], [-1.36, -79.36, -24.75], [4.64, -79.36, -24.75], [10.64, -79.36, -24.75], [16.64, -79.36, -24.75], [22.64, -79.36, -24.75], [28.64, -79.36, -24.75], [34.64, -79.36, -24.75], [40.64, -79.36, -24.75], [46.64, -79.36, -24.75], [52.64, -79.36, -24.75], [58.64, -79.36, -24.75], [64.64, -79.36, -24.75], [70.64, -79.36, -24.75], [76.64, -79.36, -24.75], [82.64, -79.36, -24.75], [88.64, -79.36, -24.75], [94.64, -79.36, -24.75], [100.64, -79.36, -24.75], [-103.36, -73.36, -24.75], [-97.36, -73.36, -24.75], [-91.36, -73.36, -24.75], [-85.36, -73.36, -24.75], [-79.36, -73.36, -24.75], [-73.36, -73.36, -24.75], [-67.36, -73.36, -24.75], [-61.36, -73.36, -24.75], [-55.36, -73.36, -24.75], [-49.36, -73.36, -24.75], [-43.36, -73.36, -24.75], [-37.36, -73.36, -24.75], [-31.36, -73.36, -24.75], [-25.36, -73.36, -24.75], [-19.36, -73.36, -24.75], [-13.36, -73.36, -24.75], [-7.36, -73.36, -24.75], [-1.36, -73.36, -24.75], [4.64, -73.36, -24.75], [10.64, -73.36, -24.75], [16.64, -73.36, -24.75], [22.64, -73.36, -24.75], [28.64, -73.36, -24.75], [34.64, -73.36, -24.75], [40.64, -73.36, -24.75], [46.64, -73.36, -24.75], [52.64, -73.36, -24.75], [58.64, -73.36, -24.75], [64.64, -73.36, -24.75], [70.64, -73.36, -24.75], [76.64, -73.36, -24.75], [82.64, -73.36, -24.75], [88.64, -73.36, -24.75], [94.64, -73.36, -24.75], [100.64, -73.36, -24.75], [-103.36, -67.36, -24.75], [-97.36, -67.36, -24.75], [-91.36, -67.36, -24.75], [-85.36, -67.36, -24.75], [-79.36, -67.36, -24.75], [-73.36, -67.36, -24.75], [-67.36, -67.36, -24.75], [-61.36, -67.36, -24.75], [-55.36, -67.36, -24.75], [-49.36, -67.36, -24.75], [-43.36, -67.36, -24.75], [-37.36, -67.36, -24.75], [-31.36, -67.36, -24.75], [-25.36, -67.36, -24.75], [-19.36, -67.36, -24.75], [-13.36, -67.36, -24.75], [-7.36, -67.36, -24.75], [-1.36, -67.36, -24.75], [4.64, -67.36, -24.75], [10.64, -67.36, -24.75], [16.64, -67.36, -24.75], [22.64, -67.36, -24.75], [28.64, -67.36, -24.75], [34.64, -67.36, -24.75], [40.64, -67.36, -24.75], [46.64, -67.36, -24.75], [52.64, -67.36, -24.75], [58.64, -67.36, -24.75], [64.64, -67.36, -24.75], [70.64, -67.36, -24.75], [76.64, -67.36, -24.75], [82.64, -67.36, -24.75], [88.64, -67.36, -24.75], [94.64, -67.36, -24.75], [100.64, -67.36, -24.75], [-103.36, -61.36, -24.75], [-97.36, -61.36, -24.75], [-91.36, -61.36, -24.75], [-85.36, -61.36, -24.75], [-79.36, -61.36, -24.75], [-73.36, -61.36, -24.75], [-67.36, -61.36, -24.75], [-61.36, -61.36, -24.75], [-55.36, -61.36, -24.75], [-49.36, -61.36, -24.75], [-43.36, -61.36, -24.75], [-37.36, -61.36, -24.75], [-31.36, -61.36, -24.75], [-25.36, -61.36, -24.75], [-19.36, -61.36, -24.75], [-13.36, -61.36, -24.75], [-7.36, -61.36, -24.75], [-1.36, -61.36, -24.75], [4.64, -61.36, -24.75], [10.64, -61.36, -24.75], [16.64, -61.36, -24.75], [22.64, -61.36, -24.75], [28.64, -61.36, -24.75], [34.64, -61.36, -24.75], [40.64, -61.36, -24.75], [46.64, -61.36, -24.75], [52.64, -61.36, -24.75], [58.64, -61.36, -24.75], [64.64, -61.36, -24.75], [70.64, -61.36, -24.75], [76.64, -61.36, -24.75], [82.64, -61.36, -24.75], [88.64, -61.36, -24.75], [94.64, -61.36, -24.75], [100.64, -61.36, -24.75], [-103.36, -55.36, -24.75], [-97.36, -55.36, -24.75], [-91.36, -55.36, -24.75], [-85.36, -55.36, -24.75], [-79.36, -55.36, -24.75], [-73.36, -55.36, -24.75], [-67.36, -55.36, -24.75], [-61.36, -55.36, -24.75], [-55.36, -55.36, -24.75], [-49.36, -55.36, -24.75], [-43.36, -55.36, -24.75], [-37.36, -55.36, -24.75], [-31.36, -55.36, -24.75], [-25.36, -55.36, -24.75], [-19.36, -55.36, -24.75], [-13.36, -55.36, -24.75], [-7.36, -55.36, -24.75], [-1.36, -55.36, -24.75], [4.64, -55.36, -24.75], [10.64, -55.36, -24.75], [16.64, -55.36, -24.75], [22.64, -55.36, -24.75], [28.64, -55.36, -24.75], [34.64, -55.36, -24.75], [40.64, -55.36, -24.75], [46.64, -55.36, -24.75], [52.64, -55.36, -24.75], [58.64, -55.36, -24.75], [64.64, -55.36, -24.75], [70.64, -55.36, -24.75], [76.64, -55.36, -24.75], [82.64, -55.36, -24.75], [88.64, -55.36, -24.75], [94.64, -55.36, -24.75], [100.64, -55.36, -24.75], [-103.36, -49.36, -24.75], [-97.36, -49.36, -24.75], [-91.36, -49.36, -24.75], [-85.36, -49.36, -24.75], [-79.36, -49.36, -24.75], [-73.36, -49.36, -24.75], [-67.36, -49.36, -24.75], [-61.36, -49.36, -24.75], [-55.36, -49.36, -24.75], [-49.36, -49.36, -24.75], [-43.36, -49.36, -24.75], [-37.36, -49.36, -24.75], [-31.36, -49.36, -24.75], [-25.36, -49.36, -24.75], [-19.36, -49.36, -24.75], [-13.36, -49.36, -24.75], [-7.36, -49.36, -24.75], [-1.36, -49.36, -24.75], [4.64, -49.36, -24.75], [10.64, -49.36, -24.75], [16.64, -49.36, -24.75], [22.64, -49.36, -24.75], [28.64, -49.36, -24.75], [34.64, -49.36, -24.75], [40.64, -49.36, -24.75], [46.64, -49.36, -24.75], [52.64, -49.36, -24.75], [58.64, -49.36, -24.75], [64.64, -49.36, -24.75], [70.64, -49.36, -24.75], [76.64, -49.36, -24.75], [82.64, -49.36, -24.75], [88.64, -49.36, -24.75], [94.64, -49.36, -24.75], [100.64, -49.36, -24.75], [-103.36, -43.36, -24.75], [-97.36, -43.36, -24.75], [-91.36, -43.36, -24.75], [-85.36, -43.36, -24.75], [-79.36, -43.36, -24.75], [-73.36, -43.36, -24.75], [-67.36, -43.36, -24.75], [-61.36, -43.36, -24.75], [-55.36, -43.36, -24.75], [-49.36, -43.36, -24.75], [-43.36, -43.36, -24.75], [-37.36, -43.36, -24.75], [-31.36, -43.36, -24.75], [-25.36, -43.36, -24.75], [-19.36, -43.36, -24.75], [-13.36, -43.36, -24.75], [-7.36, -43.36, -24.75], [-1.36, -43.36, -24.75], [4.64, -43.36, -24.75], [10.64, -43.36, -24.75], [16.64, -43.36, -24.75], [22.64, -43.36, -24.75], [28.64, -43.36, -24.75], [34.64, -43.36, -24.75], [40.64, -43.36, -24.75], [46.64, -43.36, -24.75], [52.64, -43.36, -24.75], [58.64, -43.36, -24.75], [64.64, -43.36, -24.75], [70.64, -43.36, -24.75], [76.64, -43.36, -24.75], [82.64, -43.36, -24.75], [88.64, -43.36, -24.75], [94.64, -43.36, -24.75], [100.64, -43.36, -24.75], [-103.36, -37.36, -24.75], [-97.36, -37.36, -24.75], [-91.36, -37.36, -24.75], [-85.36, -37.36, -24.75], [-79.36, -37.36, -24.75], [-73.36, -37.36, -24.75], [-67.36, -37.36, -24.75], [-61.36, -37.36, -24.75], [-55.36, -37.36, -24.75], [-49.36, -37.36, -24.75], [-43.36, -37.36, -24.75], [-37.36, -37.36, -24.75], [-31.36, -37.36, -24.75], [-25.36, -37.36, -24.75], [-19.36, -37.36, -24.75], [-13.36, -37.36, -24.75], [-7.36, -37.36, -24.75], [-1.36, -37.36, -24.75], [4.64, -37.36, -24.75], [10.64, -37.36, -24.75], [16.64, -37.36, -24.75], [22.64, -37.36, -24.75], [28.64, -37.36, -24.75], [34.64, -37.36, -24.75], [40.64, -37.36, -24.75], [46.64, -37.36, -24.75], [52.64, -37.36, -24.75], [58.64, -37.36, -24.75], [64.64, -37.36, -24.75], [70.64, -37.36, -24.75], [76.64, -37.36, -24.75], [82.64, -37.36, -24.75], [88.64, -37.36, -24.75], [94.64, -37.36, -24.75], [100.64, -37.36, -24.75], [-103.36, -31.36, -24.75], [-97.36, -31.36, -24.75], [-91.36, -31.36, -24.75], [-85.36, -31.36, -24.75], [-79.36, -31.36, -24.75], [-73.36, -31.36, -24.75], [-67.36, -31.36, -24.75], [-61.36, -31.36, -24.75], [-55.36, -31.36, -24.75], [-49.36, -31.36, -24.75], [-43.36, -31.36, -24.75], [-37.36, -31.36, -24.75], [-31.36, -31.36, -24.75], [-25.36, -31.36, -24.75], [-19.36, -31.36, -24.75], [-13.36, -31.36, -24.75], [-7.36, -31.36, -24.75], [-1.36, -31.36, -24.75], [4.64, -31.36, -24.75], [10.64, -31.36, -24.75], [16.64, -31.36, -24.75], [22.64, -31.36, -24.75], [28.64, -31.36, -24.75], [34.64, -31.36, -24.75], [40.64, -31.36, -24.75], [46.64, -31.36, -24.75], [52.64, -31.36, -24.75], [58.64, -31.36, -24.75], [64.64, -31.36, -24.75], [70.64, -31.36, -24.75], [76.64, -31.36, -24.75], [82.64, -31.36, -24.75], [88.64, -31.36, -24.75], [94.64, -31.36, -24.75], [100.64, -31.36, -24.75], [-103.36, -25.36, -24.75], [-97.36, -25.36, -24.75], [-91.36, -25.36, -24.75], [-85.36, -25.36, -24.75], [-79.36, -25.36, -24.75], [-73.36, -25.36, -24.75], [-67.36, -25.36, -24.75], [-61.36, -25.36, -24.75], [-55.36, -25.36, -24.75], [-49.36, -25.36, -24.75], [-43.36, -25.36, -24.75], [-37.36, -25.36, -24.75], [-31.36, -25.36, -24.75], [-25.36, -25.36, -24.75], [-19.36, -25.36, -24.75], [-13.36, -25.36, -24.75], [-7.36, -25.36, -24.75], [-1.36, -25.36, -24.75], [4.64, -25.36, -24.75], [10.64, -25.36, -24.75], [16.64, -25.36, -24.75], [22.64, -25.36, -24.75], [28.64, -25.36, -24.75], [34.64, -25.36, -24.75], [40.64, -25.36, -24.75], [46.64, -25.36, -24.75], [52.64, -25.36, -24.75], [58.64, -25.36, -24.75], [64.64, -25.36, -24.75], [70.64, -25.36, -24.75], [76.64, -25.36, -24.75], [82.64, -25.36, -24.75], [88.64, -25.36, -24.75], [94.64, -25.36, -24.75], [100.64, -25.36, -24.75], [-103.36, -19.36, -24.75], [-97.36, -19.36, -24.75], [-91.36, -19.36, -24.75], [-85.36, -19.36, -24.75], [-79.36, -19.36, -24.75], [-73.36, -19.36, -24.75], [-67.36, -19.36, -24.75], [-61.36, -19.36, -24.75], [-55.36, -19.36, -24.75], [-49.36, -19.36, -24.75], [-43.36, -19.36, -24.75], [-37.36, -19.36, -24.75], [-31.36, -19.36, -24.75], [-25.36, -19.36, -24.75], [-19.36, -19.36, -24.75], [-13.36, -19.36, -24.75], [-7.36, -19.36, -24.75], [-1.36, -19.36, -24.75], [4.64, -19.36, -24.75], [10.64, -19.36, -24.75], [16.64, -19.36, -24.75], [22.64, -19.36, -24.75], [28.64, -19.36, -24.75], [34.64, -19.36, -24.75], [40.64, -19.36, -24.75], [46.64, -19.36, -24.75], [52.64, -19.36, -24.75], [58.64, -19.36, -24.75], [64.64, -19.36, -24.75], [70.64, -19.36, -24.75], [76.64, -19.36, -24.75], [82.64, -19.36, -24.75], [88.64, -19.36, -24.75], [94.64, -19.36, -24.75], [100.64, -19.36, -24.75], [-103.36, -13.36, -24.75], [-97.36, -13.36, -24.75], [-91.36, -13.36, -24.75], [-85.36, -13.36, -24.75], [-79.36, -13.36, -24.75], [-73.36, -13.36, -24.75], [-67.36, -13.36, -24.75], [-61.36, -13.36, -24.75], [-55.36, -13.36, -24.75], [-49.36, -13.36, -24.75], [-43.36, -13.36, -24.75], [-37.36, -13.36, -24.75], [-31.36, -13.36, -24.75], [-25.36, -13.36, -24.75], [-19.36, -13.36, -24.75], [-13.36, -13.36, -24.75], [-7.36, -13.36, -24.75], [-1.36, -13.36, -24.75], [4.64, -13.36, -24.75], [10.64, -13.36, -24.75], [16.64, -13.36, -24.75], [22.64, -13.36, -24.75], [28.64, -13.36, -24.75], [34.64, -13.36, -24.75], [40.64, -13.36, -24.75], [46.64, -13.36, -24.75], [52.64, -13.36, -24.75], [58.64, -13.36, -24.75], [64.64, -13.36, -24.75], [70.64, -13.36, -24.75], [76.64, -13.36, -24.75], [82.64, -13.36, -24.75], [88.64, -13.36, -24.75], [94.64, -13.36, -24.75], [100.64, -13.36, -24.75], [-103.36, -7.36, -24.75], [-97.36, -7.36, -24.75], [-91.36, -7.36, -24.75], [-85.36, -7.36, -24.75], [-79.36, -7.36, -24.75], [-73.36, -7.36, -24.75], [-67.36, -7.36, -24.75], [-61.36, -7.36, -24.75], [-55.36, -7.36, -24.75], [-49.36, -7.36, -24.75], [-43.36, -7.36, -24.75], [-37.36, -7.36, -24.75], [-31.36, -7.36, -24.75], [-25.36, -7.36, -24.75], [-19.36, -7.36, -24.75], [-13.36, -7.36, -24.75], [-7.36, -7.36, -24.75], [-1.36, -7.36, -24.75], [4.64, -7.36, -24.75], [10.64, -7.36, -24.75], [16.64, -7.36, -24.75], [22.64, -7.36, -24.75], [28.64, -7.36, -24.75], [34.64, -7.36, -24.75], [40.64, -7.36, -24.75], [46.64, -7.36, -24.75], [52.64, -7.36, -24.75], [58.64, -7.36, -24.75], [64.64, -7.36, -24.75], [70.64, -7.36, -24.75], [76.64, -7.36, -24.75], [82.64, -7.36, -24.75], [88.64, -7.36, -24.75], [94.64, -7.36, -24.75], [100.64, -7.36, -24.75], [-103.36, -1.36, -24.75], [-97.36, -1.36, -24.75], [-91.36, -1.36, -24.75], [-85.36, -1.36, -24.75], [-79.36, -1.36, -24.75], [-73.36, -1.36, -24.75], [-67.36, -1.36, -24.75], [-61.36, -1.36, -24.75], [-55.36, -1.36, -24.75], [-49.36, -1.36, -24.75], [-43.36, -1.36, -24.75], [-37.36, -1.36, -24.75], [-31.36, -1.36, -24.75], [-25.36, -1.36, -24.75], [-19.36, -1.36, -24.75], [-13.36, -1.36, -24.75], [-7.36, -1.36, -24.75], [-1.36, -1.36, -24.75], [4.64, -1.36, -24.75], [10.64, -1.36, -24.75], [16.64, -1.36, -24.75], [22.64, -1.36, -24.75], [28.64, -1.36, -24.75], [34.64, -1.36, -24.75], [40.64, -1.36, -24.75], [46.64, -1.36, -24.75], [52.64, -1.36, -24.75], [58.64, -1.36, -24.75], [64.64, -1.36, -24.75], [70.64, -1.36, -24.75], [76.64, -1.36, -24.75], [82.64, -1.36, -24.75], [88.64, -1.36, -24.75], [94.64, -1.36, -24.75], [100.64, -1.36, -24.75], [-103.36, 4.64, -24.75], [-97.36, 4.64, -24.75], [-91.36, 4.64, -24.75], [-85.36, 4.64, -24.75], [-79.36, 4.64, -24.75], [-73.36, 4.64, -24.75], [-67.36, 4.64, -24.75], [-61.36, 4.64, -24.75], [-55.36, 4.64, -24.75], [-49.36, 4.64, -24.75], [-43.36, 4.64, -24.75], [-37.36, 4.64, -24.75], [-31.36, 4.64, -24.75], [-25.36, 4.64, -24.75], [-19.36, 4.64, -24.75], [-13.36, 4.64, -24.75], [-7.36, 4.64, -24.75], [-1.36, 4.64, -24.75], [4.64, 4.64, -24.75], [10.64, 4.64, -24.75], [16.64, 4.64, -24.75], [22.64, 4.64, -24.75], [28.64, 4.64, -24.75], [34.64, 4.64, -24.75], [40.64, 4.64, -24.75], [46.64, 4.64, -24.75], [52.64, 4.64, -24.75], [58.64, 4.64, -24.75], [64.64, 4.64, -24.75], [70.64, 4.64, -24.75], [76.64, 4.64, -24.75], [82.64, 4.64, -24.75], [88.64, 4.64, -24.75], [94.64, 4.64, -24.75], [100.64, 4.64, -24.75], [-103.36, 10.64, -24.75], [-97.36, 10.64, -24.75], [-91.36, 10.64, -24.75], [-85.36, 10.64, -24.75], [-79.36, 10.64, -24.75], [-73.36, 10.64, -24.75], [-67.36, 10.64, -24.75], [-61.36, 10.64, -24.75], [-55.36, 10.64, -24.75], [-49.36, 10.64, -24.75], [-43.36, 10.64, -24.75], [-37.36, 10.64, -24.75], [-31.36, 10.64, -24.75], [-25.36, 10.64, -24.75], [-19.36, 10.64, -24.75], [-13.36, 10.64, -24.75], [-7.36, 10.64, -24.75], [-1.36, 10.64, -24.75], [4.64, 10.64, -24.75], [10.64, 10.64, -24.75], [16.64, 10.64, -24.75], [22.64, 10.64, -24.75], [28.64, 10.64, -24.75], [34.64, 10.64, -24.75], [40.64, 10.64, -24.75], [46.64, 10.64, -24.75], [52.64, 10.64, -24.75], [58.64, 10.64, -24.75], [64.64, 10.64, -24.75], [70.64, 10.64, -24.75], [76.64, 10.64, -24.75], [82.64, 10.64, -24.75], [88.64, 10.64, -24.75], [94.64, 10.64, -24.75], [100.64, 10.64, -24.75], [-103.36, 16.64, -24.75], [-97.36, 16.64, -24.75], [-91.36, 16.64, -24.75], [-85.36, 16.64, -24.75], [-79.36, 16.64, -24.75], [-73.36, 16.64, -24.75], [-67.36, 16.64, -24.75], [-61.36, 16.64, -24.75], [-55.36, 16.64, -24.75], [-49.36, 16.64, -24.75], [-43.36, 16.64, -24.75], [-37.36, 16.64, -24.75], [-31.36, 16.64, -24.75], [-25.36, 16.64, -24.75], [-19.36, 16.64, -24.75], [-13.36, 16.64, -24.75], [-7.36, 16.64, -24.75], [-1.36, 16.64, -24.75], [4.64, 16.64, -24.75], [10.64, 16.64, -24.75], [16.64, 16.64, -24.75], [22.64, 16.64, -24.75], [28.64, 16.64, -24.75], [34.64, 16.64, -24.75], [40.64, 16.64, -24.75], [46.64, 16.64, -24.75], [52.64, 16.64, -24.75], [58.64, 16.64, -24.75], [64.64, 16.64, -24.75], [70.64, 16.64, -24.75], [76.64, 16.64, -24.75], [82.64, 16.64, -24.75], [88.64, 16.64, -24.75], [94.64, 16.64, -24.75], [100.64, 16.64, -24.75], [-103.36, 22.64, -24.75], [-97.36, 22.64, -24.75], [-91.36, 22.64, -24.75], [-85.36, 22.64, -24.75], [-79.36, 22.64, -24.75], [-73.36, 22.64, -24.75], [-67.36, 22.64, -24.75], [-61.36, 22.64, -24.75], [-55.36, 22.64, -24.75], [-49.36, 22.64, -24.75], [-43.36, 22.64, -24.75], [-37.36, 22.64, -24.75], [-31.36, 22.64, -24.75], [-25.36, 22.64, -24.75], [-19.36, 22.64, -24.75], [-13.36, 22.64, -24.75], [-7.36, 22.64, -24.75], [-1.36, 22.64, -24.75], [4.64, 22.64, -24.75], [10.64, 22.64, -24.75], [16.64, 22.64, -24.75], [22.64, 22.64, -24.75], [28.64, 22.64, -24.75], [34.64, 22.64, -24.75], [40.64, 22.64, -24.75], [46.64, 22.64, -24.75], [52.64, 22.64, -24.75], [58.64, 22.64, -24.75], [64.64, 22.64, -24.75], [70.64, 22.64, -24.75], [76.64, 22.64, -24.75], [82.64, 22.64, -24.75], [88.64, 22.64, -24.75], [94.64, 22.64, -24.75], [100.64, 22.64, -24.75], [-103.36, 28.64, -24.75], [-97.36, 28.64, -24.75], [-91.36, 28.64, -24.75], [-85.36, 28.64, -24.75], [-79.36, 28.64, -24.75], [-73.36, 28.64, -24.75], [-67.36, 28.64, -24.75], [-61.36, 28.64, -24.75], [-55.36, 28.64, -24.75], [-49.36, 28.64, -24.75], [-43.36, 28.64, -24.75], [-37.36, 28.64, -24.75], [-31.36, 28.64, -24.75], [-25.36, 28.64, -24.75], [-19.36, 28.64, -24.75], [-13.36, 28.64, -24.75], [-7.36, 28.64, -24.75], [-1.36, 28.64, -24.75], [4.64, 28.64, -24.75], [10.64, 28.64, -24.75], [16.64, 28.64, -24.75], [22.64, 28.64, -24.75], [28.64, 28.64, -24.75], [34.64, 28.64, -24.75], [40.64, 28.64, -24.75], [46.64, 28.64, -24.75], [52.64, 28.64, -24.75], [58.64, 28.64, -24.75], [64.64, 28.64, -24.75], [70.64, 28.64, -24.75], [76.64, 28.64, -24.75], [82.64, 28.64, -24.75], [88.64, 28.64, -24.75], [94.64, 28.64, -24.75], [100.64, 28.64, -24.75], [-103.36, 34.64, -24.75], [-97.36, 34.64, -24.75], [-91.36, 34.64, -24.75], [-85.36, 34.64, -24.75], [-79.36, 34.64, -24.75], [-73.36, 34.64, -24.75], [-67.36, 34.64, -24.75], [-61.36, 34.64, -24.75], [-55.36, 34.64, -24.75], [-49.36, 34.64, -24.75], [-43.36, 34.64, -24.75], [-37.36, 34.64, -24.75], [-31.36, 34.64, -24.75], [-25.36, 34.64, -24.75], [-19.36, 34.64, -24.75], [-13.36, 34.64, -24.75], [-7.36, 34.64, -24.75], [-1.36, 34.64, -24.75], [4.64, 34.64, -24.75], [10.64, 34.64, -24.75], [16.64, 34.64, -24.75], [22.64, 34.64, -24.75], [28.64, 34.64, -24.75], [34.64, 34.64, -24.75], [40.64, 34.64, -24.75], [46.64, 34.64, -24.75], [52.64, 34.64, -24.75], [58.64, 34.64, -24.75], [64.64, 34.64, -24.75], [70.64, 34.64, -24.75], [76.64, 34.64, -24.75], [82.64, 34.64, -24.75], [88.64, 34.64, -24.75], [94.64, 34.64, -24.75], [100.64, 34.64, -24.75], [-103.36, 40.64, -24.75], [-97.36, 40.64, -24.75], [-91.36, 40.64, -24.75], [-85.36, 40.64, -24.75], [-79.36, 40.64, -24.75], [-73.36, 40.64, -24.75], [-67.36, 40.64, -24.75], [-61.36, 40.64, -24.75], [-55.36, 40.64, -24.75], [-49.36, 40.64, -24.75], [-43.36, 40.64, -24.75], [-37.36, 40.64, -24.75], [-31.36, 40.64, -24.75], [-25.36, 40.64, -24.75], [-19.36, 40.64, -24.75], [-13.36, 40.64, -24.75], [-7.36, 40.64, -24.75], [-1.36, 40.64, -24.75], [4.64, 40.64, -24.75], [10.64, 40.64, -24.75], [16.64, 40.64, -24.75], [22.64, 40.64, -24.75], [28.64, 40.64, -24.75], [34.64, 40.64, -24.75], [40.64, 40.64, -24.75], [46.64, 40.64, -24.75], [52.64, 40.64, -24.75], [58.64, 40.64, -24.75], [64.64, 40.64, -24.75], [70.64, 40.64, -24.75], [76.64, 40.64, -24.75], [82.64, 40.64, -24.75], [88.64, 40.64, -24.75], [94.64, 40.64, -24.75], [100.64, 40.64, -24.75], [-103.36, 46.64, -24.75], [-97.36, 46.64, -24.75], [-91.36, 46.64, -24.75], [-85.36, 46.64, -24.75], [-79.36, 46.64, -24.75], [-73.36, 46.64, -24.75], [-67.36, 46.64, -24.75], [-61.36, 46.64, -24.75], [-55.36, 46.64, -24.75], [-49.36, 46.64, -24.75], [-43.36, 46.64, -24.75], [-37.36, 46.64, -24.75], [-31.36, 46.64, -24.75], [-25.36, 46.64, -24.75], [-19.36, 46.64, -24.75], [-13.36, 46.64, -24.75], [-7.36, 46.64, -24.75], [-1.36, 46.64, -24.75], [4.64, 46.64, -24.75], [10.64, 46.64, -24.75], [16.64, 46.64, -24.75], [22.64, 46.64, -24.75], [28.64, 46.64, -24.75], [34.64, 46.64, -24.75], [40.64, 46.64, -24.75], [46.64, 46.64, -24.75], [52.64, 46.64, -24.75], [58.64, 46.64, -24.75], [64.64, 46.64, -24.75], [70.64, 46.64, -24.75], [76.64, 46.64, -24.75], [82.64, 46.64, -24.75], [88.64, 46.64, -24.75], [94.64, 46.64, -24.75], [100.64, 46.64, -24.75], [-103.36, 52.64, -24.75], [-97.36, 52.64, -24.75], [-91.36, 52.64, -24.75], [-85.36, 52.64, -24.75], [-79.36, 52.64, -24.75], [-73.36, 52.64, -24.75], [-67.36, 52.64, -24.75], [-61.36, 52.64, -24.75], [-55.36, 52.64, -24.75], [-49.36, 52.64, -24.75], [-43.36, 52.64, -24.75], [-37.36, 52.64, -24.75], [-31.36, 52.64, -24.75], [-25.36, 52.64, -24.75], [-19.36, 52.64, -24.75], [-13.36, 52.64, -24.75], [-7.36, 52.64, -24.75], [-1.36, 52.64, -24.75], [4.64, 52.64, -24.75], [10.64, 52.64, -24.75], [16.64, 52.64, -24.75], [22.64, 52.64, -24.75], [28.64, 52.64, -24.75], [34.64, 52.64, -24.75], [40.64, 52.64, -24.75], [46.64, 52.64, -24.75], [52.64, 52.64, -24.75], [58.64, 52.64, -24.75], [64.64, 52.64, -24.75], [70.64, 52.64, -24.75], [76.64, 52.64, -24.75], [82.64, 52.64, -24.75], [88.64, 52.64, -24.75], [94.64, 52.64, -24.75], [100.64, 52.64, -24.75], [-103.36, 58.64, -24.75], [-97.36, 58.64, -24.75], [-91.36, 58.64, -24.75], [-85.36, 58.64, -24.75], [-79.36, 58.64, -24.75], [-73.36, 58.64, -24.75], [-67.36, 58.64, -24.75], [-61.36, 58.64, -24.75], [-55.36, 58.64, -24.75], [-49.36, 58.64, -24.75], [-43.36, 58.64, -24.75], [-37.36, 58.64, -24.75], [-31.36, 58.64, -24.75], [-25.36, 58.64, -24.75], [-19.36, 58.64, -24.75], [-13.36, 58.64, -24.75], [-7.36, 58.64, -24.75], [-1.36, 58.64, -24.75], [4.64, 58.64, -24.75], [10.64, 58.64, -24.75], [16.64, 58.64, -24.75], [22.64, 58.64, -24.75], [28.64, 58.64, -24.75], [34.64, 58.64, -24.75], [40.64, 58.64, -24.75], [46.64, 58.64, -24.75], [52.64, 58.64, -24.75], [58.64, 58.64, -24.75], [64.64, 58.64, -24.75], [70.64, 58.64, -24.75], [76.64, 58.64, -24.75], [82.64, 58.64, -24.75], [88.64, 58.64, -24.75], [94.64, 58.64, -24.75], [100.64, 58.64, -24.75], [-103.36, 64.64, -24.75], [-97.36, 64.64, -24.75], [-91.36, 64.64, -24.75], [-85.36, 64.64, -24.75], [-79.36, 64.64, -24.75], [-73.36, 64.64, -24.75], [-67.36, 64.64, -24.75], [-61.36, 64.64, -24.75], [-55.36, 64.64, -24.75], [-49.36, 64.64, -24.75], [-43.36, 64.64, -24.75], [-37.36, 64.64, -24.75], [-31.36, 64.64, -24.75], [-25.36, 64.64, -24.75], [-19.36, 64.64, -24.75], [-13.36, 64.64, -24.75], [-7.36, 64.64, -24.75], [-1.36, 64.64, -24.75], [4.64, 64.64, -24.75], [10.64, 64.64, -24.75], [16.64, 64.64, -24.75], [22.64, 64.64, -24.75], [28.64, 64.64, -24.75], [34.64, 64.64, -24.75], [40.64, 64.64, -24.75], [46.64, 64.64, -24.75], [52.64, 64.64, -24.75], [58.64, 64.64, -24.75], [64.64, 64.64, -24.75], [70.64, 64.64, -24.75], [76.64, 64.64, -24.75], [82.64, 64.64, -24.75], [88.64, 64.64, -24.75], [94.64, 64.64, -24.75], [100.64, 64.64, -24.75], [-103.36, 70.64, -24.75], [-97.36, 70.64, -24.75], [-91.36, 70.64, -24.75], [-85.36, 70.64, -24.75], [-79.36, 70.64, -24.75], [-73.36, 70.64, -24.75], [-67.36, 70.64, -24.75], [-61.36, 70.64, -24.75], [-55.36, 70.64, -24.75], [-49.36, 70.64, -24.75], [-43.36, 70.64, -24.75], [-37.36, 70.64, -24.75], [-31.36, 70.64, -24.75], [-25.36, 70.64, -24.75], [-19.36, 70.64, -24.75], [-13.36, 70.64, -24.75], [-7.36, 70.64, -24.75], [-1.36, 70.64, -24.75], [4.64, 70.64, -24.75], [10.64, 70.64, -24.75], [16.64, 70.64, -24.75], [22.64, 70.64, -24.75], [28.64, 70.64, -24.75], [34.64, 70.64, -24.75], [40.64, 70.64, -24.75], [46.64, 70.64, -24.75], [52.64, 70.64, -24.75], [58.64, 70.64, -24.75], [64.64, 70.64, -24.75], [70.64, 70.64, -24.75], [76.64, 70.64, -24.75], [82.64, 70.64, -24.75], [88.64, 70.64, -24.75], [94.64, 70.64, -24.75], [100.64, 70.64, -24.75], [-103.36, 76.64, -24.75], [-97.36, 76.64, -24.75], [-91.36, 76.64, -24.75], [-85.36, 76.64, -24.75], [-79.36, 76.64, -24.75], [-73.36, 76.64, -24.75], [-67.36, 76.64, -24.75], [-61.36, 76.64, -24.75], [-55.36, 76.64, -24.75], [-49.36, 76.64, -24.75], [-43.36, 76.64, -24.75], [-37.36, 76.64, -24.75], [-31.36, 76.64, -24.75], [-25.36, 76.64, -24.75], [-19.36, 76.64, -24.75], [-13.36, 76.64, -24.75], [-7.36, 76.64, -24.75], [-1.36, 76.64, -24.75], [4.64, 76.64, -24.75], [10.64, 76.64, -24.75], [16.64, 76.64, -24.75], [22.64, 76.64, -24.75], [28.64, 76.64, -24.75], [34.64, 76.64, -24.75], [40.64, 76.64, -24.75], [46.64, 76.64, -24.75], [52.64, 76.64, -24.75], [58.64, 76.64, -24.75], [64.64, 76.64, -24.75], [70.64, 76.64, -24.75], [76.64, 76.64, -24.75], [82.64, 76.64, -24.75], [88.64, 76.64, -24.75], [94.64, 76.64, -24.75], [100.64, 76.64, -24.75], [-103.36, 82.64, -24.75], [-97.36, 82.64, -24.75], [-91.36, 82.64, -24.75], [-85.36, 82.64, -24.75], [-79.36, 82.64, -24.75], [-73.36, 82.64, -24.75], [-67.36, 82.64, -24.75], [-61.36, 82.64, -24.75], [-55.36, 82.64, -24.75], [-49.36, 82.64, -24.75], [-43.36, 82.64, -24.75], [-37.36, 82.64, -24.75], [-31.36, 82.64, -24.75], [-25.36, 82.64, -24.75], [-19.36, 82.64, -24.75], [-13.36, 82.64, -24.75], [-7.36, 82.64, -24.75], [-1.36, 82.64, -24.75], [4.64, 82.64, -24.75], [10.64, 82.64, -24.75], [16.64, 82.64, -24.75], [22.64, 82.64, -24.75], [28.64, 82.64, -24.75], [34.64, 82.64, -24.75], [40.64, 82.64, -24.75], [46.64, 82.64, -24.75], [52.64, 82.64, -24.75], [58.64, 82.64, -24.75], [64.64, 82.64, -24.75], [70.64, 82.64, -24.75], [76.64, 82.64, -24.75], [82.64, 82.64, -24.75], [88.64, 82.64, -24.75], [94.64, 82.64, -24.75], [100.64, 82.64, -24.75], [-97.36, 88.64, -24.75], [-91.36, 88.64, -24.75], [-85.36, 88.64, -24.75], [-79.36, 88.64, -24.75], [-73.36, 88.64, -24.75], [-67.36, 88.64, -24.75], [-61.36, 88.64, -24.75], [-55.36, 88.64, -24.75], [-49.36, 88.64, -24.75], [-43.36, 88.64, -24.75], [-37.36, 88.64, -24.75], [-31.36, 88.64, -24.75], [-25.36, 88.64, -24.75], [-19.36, 88.64, -24.75], [-13.36, 88.64, -24.75], [-7.36, 88.64, -24.75], [-1.36, 88.64, -24.75], [4.64, 88.64, -24.75], [10.64, 88.64, -24.75], [16.64, 88.64, -24.75], [22.64, 88.64, -24.75], [28.64, 88.64, -24.75], [34.64, 88.64, -24.75], [40.64, 88.64, -24.75], [46.64, 88.64, -24.75], [52.64, 88.64, -24.75], [58.64, 88.64, -24.75], [64.64, 88.64, -24.75], [70.64, 88.64, -24.75], [76.64, 88.64, -24.75], [82.64, 88.64, -24.75], [88.64, 88.64, -24.75], [94.64, 88.64, -24.75], [100.64, 88.64, -24.75], [-97.36, 94.64, -24.75], [-91.36, 94.64, -24.75], [-85.36, 94.64, -24.75], [-79.36, 94.64, -24.75], [-73.36, 94.64, -24.75], [-67.36, 94.64, -24.75], [-61.36, 94.64, -24.75], [-55.36, 94.64, -24.75], [-49.36, 94.64, -24.75], [-43.36, 94.64, -24.75], [-37.36, 94.64, -24.75], [-31.36, 94.64, -24.75], [-25.36, 94.64, -24.75], [-19.36, 94.64, -24.75], [-13.36, 94.64, -24.75], [-7.36, 94.64, -24.75], [-1.36, 94.64, -24.75], [4.64, 94.64, -24.75], [10.64, 94.64, -24.75], [16.64, 94.64, -24.75], [22.64, 94.64, -24.75], [28.64, 94.64, -24.75], [34.64, 94.64, -24.75], [40.64, 94.64, -24.75], [46.64, 94.64, -24.75], [52.64, 94.64, -24.75], [58.64, 94.64, -24.75], [64.64, 94.64, -24.75], [70.64, 94.64, -24.75], [76.64, 94.64, -24.75], [82.64, 94.64, -24.75], [88.64, 94.64, -24.75], [94.64, 94.64, -24.75], [100.64, 94.64, -24.75], [-97.36, 100.64, -24.75], [-91.36, 100.64, -24.75], [-85.36, 100.64, -24.75], [-79.36, 100.64, -24.75], [-73.36, 100.64, -24.75], [-67.36, 100.64, -24.75], [-61.36, 100.64, -24.75], [-55.36, 100.64, -24.75], [-49.36, 100.64, -24.75], [-43.36, 100.64, -24.75], [-37.36, 100.64, -24.75], [-31.36, 100.64, -24.75], [-25.36, 100.64, -24.75], [-19.36, 100.64, -24.75], [-13.36, 100.64, -24.75], [-7.36, 100.64, -24.75], [-1.36, 100.64, -24.75], [4.64, 100.64, -24.75], [10.64, 100.64, -24.75], [16.64, 100.64, -24.75], [22.64, 100.64, -24.75], [28.64, 100.64, -24.75], [34.64, 100.64, -24.75], [40.64, 100.64, -24.75], [46.64, 100.64, -24.75], [52.64, 100.64, -24.75], [58.64, 100.64, -24.75], [64.64, 100.64, -24.75], [-49.36, -103.36, -18.75], [-43.36, -103.36, -18.75], [-37.36, -103.36, -18.75], [-31.36, -103.36, -18.75], [-25.36, -103.36, -18.75], [-19.36, -103.36, -18.75], [-13.36, -103.36, -18.75], [-7.36, -103.36, -18.75], [-1.36, -103.36, -18.75], [4.64, -103.36, -18.75], [10.64, -103.36, -18.75], [16.64, -103.36, -18.75], [22.64, -103.36, -18.75], [28.64, -103.36, -18.75], [34.64, -103.36, -18.75], [40.64, -103.36, -18.75], [46.64, -103.36, -18.75], [52.64, -103.36, -18.75], [58.64, -103.36, -18.75], [64.64, -103.36, -18.75], [70.64, -103.36, -18.75], [76.64, -103.36, -18.75], [82.64, -103.36, -18.75], [88.64, -103.36, -18.75], [-97.36, -97.36, -18.75], [-91.36, -97.36, -18.75], [-85.36, -97.36, -18.75], [-79.36, -97.36, -18.75], [-73.36, -97.36, -18.75], [-67.36, -97.36, -18.75], [-61.36, -97.36, -18.75], [-55.36, -97.36, -18.75], [-49.36, -97.36, -18.75], [-43.36, -97.36, -18.75], [-37.36, -97.36, -18.75], [-31.36, -97.36, -18.75], [-25.36, -97.36, -18.75], [-19.36, -97.36, -18.75], [-13.36, -97.36, -18.75], [-7.36, -97.36, -18.75], [-1.36, -97.36, -18.75], [4.64, -97.36, -18.75], [10.64, -97.36, -18.75], [16.64, -97.36, -18.75], [22.64, -97.36, -18.75], [28.64, -97.36, -18.75], [34.64, -97.36, -18.75], [40.64, -97.36, -18.75], [46.64, -97.36, -18.75], [52.64, -97.36, -18.75], [58.64, -97.36, -18.75], [64.64, -97.36, -18.75], [70.64, -97.36, -18.75], [76.64, -97.36, -18.75], [82.64, -97.36, -18.75], [88.64, -97.36, -18.75], [94.64, -97.36, -18.75], [-103.36, -91.36, -18.75], [-97.36, -91.36, -18.75], [-91.36, -91.36, -18.75], [-85.36, -91.36, -18.75], [-79.36, -91.36, -18.75], [-73.36, -91.36, -18.75], [-67.36, -91.36, -18.75], [-61.36, -91.36, -18.75], [-55.36, -91.36, -18.75], [-49.36, -91.36, -18.75], [-43.36, -91.36, -18.75], [-37.36, -91.36, -18.75], [-31.36, -91.36, -18.75], [-25.36, -91.36, -18.75], [-19.36, -91.36, -18.75], [-13.36, -91.36, -18.75], [-7.36, -91.36, -18.75], [-1.36, -91.36, -18.75], [4.64, -91.36, -18.75], [10.64, -91.36, -18.75], [16.64, -91.36, -18.75], [22.64, -91.36, -18.75], [28.64, -91.36, -18.75], [34.64, -91.36, -18.75], [40.64, -91.36, -18.75], [46.64, -91.36, -18.75], [52.64, -91.36, -18.75], [58.64, -91.36, -18.75], [64.64, -91.36, -18.75], [70.64, -91.36, -18.75], [76.64, -91.36, -18.75], [82.64, -91.36, -18.75], [88.64, -91.36, -18.75], [94.64, -91.36, -18.75], [-103.36, -85.36, -18.75], [-97.36, -85.36, -18.75], [-91.36, -85.36, -18.75], [-85.36, -85.36, -18.75], [-79.36, -85.36, -18.75], [-73.36, -85.36, -18.75], [-67.36, -85.36, -18.75], [-61.36, -85.36, -18.75], [-55.36, -85.36, -18.75], [-49.36, -85.36, -18.75], [-43.36, -85.36, -18.75], [-37.36, -85.36, -18.75], [-31.36, -85.36, -18.75], [-25.36, -85.36, -18.75], [-19.36, -85.36, -18.75], [-13.36, -85.36, -18.75], [-7.36, -85.36, -18.75], [-1.36, -85.36, -18.75], [4.64, -85.36, -18.75], [10.64, -85.36, -18.75], [16.64, -85.36, -18.75], [22.64, -85.36, -18.75], [28.64, -85.36, -18.75], [34.64, -85.36, -18.75], [40.64, -85.36, -18.75], [46.64, -85.36, -18.75], [52.64, -85.36, -18.75], [58.64, -85.36, -18.75], [64.64, -85.36, -18.75], [70.64, -85.36, -18.75], [76.64, -85.36, -18.75], [82.64, -85.36, -18.75], [88.64, -85.36, -18.75], [94.64, -85.36, -18.75], [-103.36, -79.36, -18.75], [-97.36, -79.36, -18.75], [-91.36, -79.36, -18.75], [-85.36, -79.36, -18.75], [-79.36, -79.36, -18.75], [-73.36, -79.36, -18.75], [-67.36, -79.36, -18.75], [-61.36, -79.36, -18.75], [-55.36, -79.36, -18.75], [-49.36, -79.36, -18.75], [-43.36, -79.36, -18.75], [-37.36, -79.36, -18.75], [-31.36, -79.36, -18.75], [-25.36, -79.36, -18.75], [-19.36, -79.36, -18.75], [-13.36, -79.36, -18.75], [-7.36, -79.36, -18.75], [-1.36, -79.36, -18.75], [4.64, -79.36, -18.75], [10.64, -79.36, -18.75], [16.64, -79.36, -18.75], [22.64, -79.36, -18.75], [28.64, -79.36, -18.75], [34.64, -79.36, -18.75], [40.64, -79.36, -18.75], [46.64, -79.36, -18.75], [52.64, -79.36, -18.75], [58.64, -79.36, -18.75], [64.64, -79.36, -18.75], [70.64, -79.36, -18.75], [76.64, -79.36, -18.75], [82.64, -79.36, -18.75], [88.64, -79.36, -18.75], [94.64, -79.36, -18.75], [100.64, -79.36, -18.75], [-103.36, -73.36, -18.75], [-97.36, -73.36, -18.75], [-91.36, -73.36, -18.75], [-85.36, -73.36, -18.75], [-79.36, -73.36, -18.75], [-73.36, -73.36, -18.75], [-67.36, -73.36, -18.75], [-61.36, -73.36, -18.75], [-55.36, -73.36, -18.75], [-49.36, -73.36, -18.75], [-43.36, -73.36, -18.75], [-37.36, -73.36, -18.75], [-31.36, -73.36, -18.75], [-25.36, -73.36, -18.75], [-19.36, -73.36, -18.75], [-13.36, -73.36, -18.75], [-7.36, -73.36, -18.75], [-1.36, -73.36, -18.75], [4.64, -73.36, -18.75], [10.64, -73.36, -18.75], [16.64, -73.36, -18.75], [22.64, -73.36, -18.75], [28.64, -73.36, -18.75], [34.64, -73.36, -18.75], [40.64, -73.36, -18.75], [46.64, -73.36, -18.75], [52.64, -73.36, -18.75], [58.64, -73.36, -18.75], [64.64, -73.36, -18.75], [70.64, -73.36, -18.75], [76.64, -73.36, -18.75], [82.64, -73.36, -18.75], [88.64, -73.36, -18.75], [94.64, -73.36, -18.75], [100.64, -73.36, -18.75], [-103.36, -67.36, -18.75], [-97.36, -67.36, -18.75], [-91.36, -67.36, -18.75], [-85.36, -67.36, -18.75], [-79.36, -67.36, -18.75], [-73.36, -67.36, -18.75], [-67.36, -67.36, -18.75], [-61.36, -67.36, -18.75], [-55.36, -67.36, -18.75], [-49.36, -67.36, -18.75], [-43.36, -67.36, -18.75], [-37.36, -67.36, -18.75], [-31.36, -67.36, -18.75], [-25.36, -67.36, -18.75], [-19.36, -67.36, -18.75], [-13.36, -67.36, -18.75], [-7.36, -67.36, -18.75], [-1.36, -67.36, -18.75], [4.64, -67.36, -18.75], [10.64, -67.36, -18.75], [16.64, -67.36, -18.75], [22.64, -67.36, -18.75], [28.64, -67.36, -18.75], [34.64, -67.36, -18.75], [40.64, -67.36, -18.75], [46.64, -67.36, -18.75], [52.64, -67.36, -18.75], [58.64, -67.36, -18.75], [64.64, -67.36, -18.75], [70.64, -67.36, -18.75], [76.64, -67.36, -18.75], [82.64, -67.36, -18.75], [88.64, -67.36, -18.75], [94.64, -67.36, -18.75], [100.64, -67.36, -18.75], [-103.36, -61.36, -18.75], [-97.36, -61.36, -18.75], [-91.36, -61.36, -18.75], [-85.36, -61.36, -18.75], [-79.36, -61.36, -18.75], [-73.36, -61.36, -18.75], [-67.36, -61.36, -18.75], [-61.36, -61.36, -18.75], [-55.36, -61.36, -18.75], [-49.36, -61.36, -18.75], [-43.36, -61.36, -18.75], [-37.36, -61.36, -18.75], [-31.36, -61.36, -18.75], [-25.36, -61.36, -18.75], [-19.36, -61.36, -18.75], [-13.36, -61.36, -18.75], [-7.36, -61.36, -18.75], [-1.36, -61.36, -18.75], [4.64, -61.36, -18.75], [10.64, -61.36, -18.75], [16.64, -61.36, -18.75], [22.64, -61.36, -18.75], [28.64, -61.36, -18.75], [34.64, -61.36, -18.75], [40.64, -61.36, -18.75], [46.64, -61.36, -18.75], [52.64, -61.36, -18.75], [58.64, -61.36, -18.75], [64.64, -61.36, -18.75], [70.64, -61.36, -18.75], [76.64, -61.36, -18.75], [82.64, -61.36, -18.75], [88.64, -61.36, -18.75], [94.64, -61.36, -18.75], [100.64, -61.36, -18.75], [-103.36, -55.36, -18.75], [-97.36, -55.36, -18.75], [-91.36, -55.36, -18.75], [-85.36, -55.36, -18.75], [-79.36, -55.36, -18.75], [-73.36, -55.36, -18.75], [-67.36, -55.36, -18.75], [-61.36, -55.36, -18.75], [-55.36, -55.36, -18.75], [-49.36, -55.36, -18.75], [-43.36, -55.36, -18.75], [-37.36, -55.36, -18.75], [-31.36, -55.36, -18.75], [-25.36, -55.36, -18.75], [-19.36, -55.36, -18.75], [-13.36, -55.36, -18.75], [-7.36, -55.36, -18.75], [-1.36, -55.36, -18.75], [4.64, -55.36, -18.75], [10.64, -55.36, -18.75], [16.64, -55.36, -18.75], [22.64, -55.36, -18.75], [28.64, -55.36, -18.75], [34.64, -55.36, -18.75], [40.64, -55.36, -18.75], [46.64, -55.36, -18.75], [52.64, -55.36, -18.75], [58.64, -55.36, -18.75], [64.64, -55.36, -18.75], [70.64, -55.36, -18.75], [76.64, -55.36, -18.75], [82.64, -55.36, -18.75], [88.64, -55.36, -18.75], [94.64, -55.36, -18.75], [100.64, -55.36, -18.75], [-103.36, -49.36, -18.75], [-97.36, -49.36, -18.75], [-91.36, -49.36, -18.75], [-85.36, -49.36, -18.75], [-79.36, -49.36, -18.75], [-73.36, -49.36, -18.75], [-67.36, -49.36, -18.75], [-61.36, -49.36, -18.75], [-55.36, -49.36, -18.75], [-49.36, -49.36, -18.75], [-43.36, -49.36, -18.75], [-37.36, -49.36, -18.75], [-31.36, -49.36, -18.75], [-25.36, -49.36, -18.75], [-19.36, -49.36, -18.75], [-13.36, -49.36, -18.75], [-7.36, -49.36, -18.75], [-1.36, -49.36, -18.75], [4.64, -49.36, -18.75], [10.64, -49.36, -18.75], [16.64, -49.36, -18.75], [22.64, -49.36, -18.75], [28.64, -49.36, -18.75], [34.64, -49.36, -18.75], [40.64, -49.36, -18.75], [46.64, -49.36, -18.75], [52.64, -49.36, -18.75], [58.64, -49.36, -18.75], [64.64, -49.36, -18.75], [70.64, -49.36, -18.75], [76.64, -49.36, -18.75], [82.64, -49.36, -18.75], [88.64, -49.36, -18.75], [94.64, -49.36, -18.75], [100.64, -49.36, -18.75], [-103.36, -43.36, -18.75], [-97.36, -43.36, -18.75], [-91.36, -43.36, -18.75], [-85.36, -43.36, -18.75], [-79.36, -43.36, -18.75], [-73.36, -43.36, -18.75], [-67.36, -43.36, -18.75], [-61.36, -43.36, -18.75], [-55.36, -43.36, -18.75], [-49.36, -43.36, -18.75], [-43.36, -43.36, -18.75], [-37.36, -43.36, -18.75], [-31.36, -43.36, -18.75], [-25.36, -43.36, -18.75], [-19.36, -43.36, -18.75], [-13.36, -43.36, -18.75], [-7.36, -43.36, -18.75], [-1.36, -43.36, -18.75], [4.64, -43.36, -18.75], [10.64, -43.36, -18.75], [16.64, -43.36, -18.75], [22.64, -43.36, -18.75], [28.64, -43.36, -18.75], [34.64, -43.36, -18.75], [40.64, -43.36, -18.75], [46.64, -43.36, -18.75], [52.64, -43.36, -18.75], [58.64, -43.36, -18.75], [64.64, -43.36, -18.75], [70.64, -43.36, -18.75], [76.64, -43.36, -18.75], [82.64, -43.36, -18.75], [88.64, -43.36, -18.75], [94.64, -43.36, -18.75], [100.64, -43.36, -18.75], [-103.36, -37.36, -18.75], [-97.36, -37.36, -18.75], [-91.36, -37.36, -18.75], [-85.36, -37.36, -18.75], [-79.36, -37.36, -18.75], [-73.36, -37.36, -18.75], [-67.36, -37.36, -18.75], [-61.36, -37.36, -18.75], [-55.36, -37.36, -18.75], [-49.36, -37.36, -18.75], [-43.36, -37.36, -18.75], [-37.36, -37.36, -18.75], [-31.36, -37.36, -18.75], [-25.36, -37.36, -18.75], [-19.36, -37.36, -18.75], [-13.36, -37.36, -18.75], [-7.36, -37.36, -18.75], [-1.36, -37.36, -18.75], [4.64, -37.36, -18.75], [10.64, -37.36, -18.75], [16.64, -37.36, -18.75], [22.64, -37.36, -18.75], [28.64, -37.36, -18.75], [34.64, -37.36, -18.75], [40.64, -37.36, -18.75], [46.64, -37.36, -18.75], [52.64, -37.36, -18.75], [58.64, -37.36, -18.75], [64.64, -37.36, -18.75], [70.64, -37.36, -18.75], [76.64, -37.36, -18.75], [82.64, -37.36, -18.75], [88.64, -37.36, -18.75], [94.64, -37.36, -18.75], [100.64, -37.36, -18.75], [-103.36, -31.36, -18.75], [-97.36, -31.36, -18.75], [-91.36, -31.36, -18.75], [-85.36, -31.36, -18.75], [-79.36, -31.36, -18.75], [-73.36, -31.36, -18.75], [-67.36, -31.36, -18.75], [-61.36, -31.36, -18.75], [-55.36, -31.36, -18.75], [-49.36, -31.36, -18.75], [-43.36, -31.36, -18.75], [-37.36, -31.36, -18.75], [-31.36, -31.36, -18.75], [-25.36, -31.36, -18.75], [-19.36, -31.36, -18.75], [-13.36, -31.36, -18.75], [-7.36, -31.36, -18.75], [-1.36, -31.36, -18.75], [4.64, -31.36, -18.75], [10.64, -31.36, -18.75], [16.64, -31.36, -18.75], [22.64, -31.36, -18.75], [28.64, -31.36, -18.75], [34.64, -31.36, -18.75], [40.64, -31.36, -18.75], [46.64, -31.36, -18.75], [52.64, -31.36, -18.75], [58.64, -31.36, -18.75], [64.64, -31.36, -18.75], [70.64, -31.36, -18.75], [76.64, -31.36, -18.75], [82.64, -31.36, -18.75], [88.64, -31.36, -18.75], [94.64, -31.36, -18.75], [100.64, -31.36, -18.75], [-103.36, -25.36, -18.75], [-97.36, -25.36, -18.75], [-91.36, -25.36, -18.75], [-85.36, -25.36, -18.75], [-79.36, -25.36, -18.75], [-73.36, -25.36, -18.75], [-67.36, -25.36, -18.75], [-61.36, -25.36, -18.75], [-55.36, -25.36, -18.75], [-49.36, -25.36, -18.75], [-43.36, -25.36, -18.75], [-37.36, -25.36, -18.75], [-31.36, -25.36, -18.75], [-25.36, -25.36, -18.75], [-19.36, -25.36, -18.75], [-13.36, -25.36, -18.75], [-7.36, -25.36, -18.75], [-1.36, -25.36, -18.75], [4.64, -25.36, -18.75], [10.64, -25.36, -18.75], [16.64, -25.36, -18.75], [22.64, -25.36, -18.75], [28.64, -25.36, -18.75], [34.64, -25.36, -18.75], [40.64, -25.36, -18.75], [46.64, -25.36, -18.75], [52.64, -25.36, -18.75], [58.64, -25.36, -18.75], [64.64, -25.36, -18.75], [70.64, -25.36, -18.75], [76.64, -25.36, -18.75], [82.64, -25.36, -18.75], [88.64, -25.36, -18.75], [94.64, -25.36, -18.75], [100.64, -25.36, -18.75], [-103.36, -19.36, -18.75], [-97.36, -19.36, -18.75], [-91.36, -19.36, -18.75], [-85.36, -19.36, -18.75], [-79.36, -19.36, -18.75], [-73.36, -19.36, -18.75], [-67.36, -19.36, -18.75], [-61.36, -19.36, -18.75], [-55.36, -19.36, -18.75], [-49.36, -19.36, -18.75], [-43.36, -19.36, -18.75], [-37.36, -19.36, -18.75], [-31.36, -19.36, -18.75], [-25.36, -19.36, -18.75], [-19.36, -19.36, -18.75], [-13.36, -19.36, -18.75], [-7.36, -19.36, -18.75], [-1.36, -19.36, -18.75], [4.64, -19.36, -18.75], [10.64, -19.36, -18.75], [16.64, -19.36, -18.75], [22.64, -19.36, -18.75], [28.64, -19.36, -18.75], [34.64, -19.36, -18.75], [40.64, -19.36, -18.75], [46.64, -19.36, -18.75], [52.64, -19.36, -18.75], [58.64, -19.36, -18.75], [64.64, -19.36, -18.75], [70.64, -19.36, -18.75], [76.64, -19.36, -18.75], [82.64, -19.36, -18.75], [88.64, -19.36, -18.75], [94.64, -19.36, -18.75], [100.64, -19.36, -18.75], [-103.36, -13.36, -18.75], [-97.36, -13.36, -18.75], [-91.36, -13.36, -18.75], [-85.36, -13.36, -18.75], [-79.36, -13.36, -18.75], [-73.36, -13.36, -18.75], [-67.36, -13.36, -18.75], [-61.36, -13.36, -18.75], [-55.36, -13.36, -18.75], [-49.36, -13.36, -18.75], [-43.36, -13.36, -18.75], [-37.36, -13.36, -18.75], [-31.36, -13.36, -18.75], [-25.36, -13.36, -18.75], [-19.36, -13.36, -18.75], [-13.36, -13.36, -18.75], [-7.36, -13.36, -18.75], [-1.36, -13.36, -18.75], [4.64, -13.36, -18.75], [10.64, -13.36, -18.75], [16.64, -13.36, -18.75], [22.64, -13.36, -18.75], [28.64, -13.36, -18.75], [34.64, -13.36, -18.75], [40.64, -13.36, -18.75], [46.64, -13.36, -18.75], [52.64, -13.36, -18.75], [58.64, -13.36, -18.75], [64.64, -13.36, -18.75], [70.64, -13.36, -18.75], [76.64, -13.36, -18.75], [82.64, -13.36, -18.75], [88.64, -13.36, -18.75], [94.64, -13.36, -18.75], [100.64, -13.36, -18.75], [-103.36, -7.36, -18.75], [-97.36, -7.36, -18.75], [-91.36, -7.36, -18.75], [-85.36, -7.36, -18.75], [-79.36, -7.36, -18.75], [-73.36, -7.36, -18.75], [-67.36, -7.36, -18.75], [-61.36, -7.36, -18.75], [-55.36, -7.36, -18.75], [-49.36, -7.36, -18.75], [-43.36, -7.36, -18.75], [-37.36, -7.36, -18.75], [-31.36, -7.36, -18.75], [-25.36, -7.36, -18.75], [-19.36, -7.36, -18.75], [-13.36, -7.36, -18.75], [-7.36, -7.36, -18.75], [-1.36, -7.36, -18.75], [4.64, -7.36, -18.75], [10.64, -7.36, -18.75], [16.64, -7.36, -18.75], [22.64, -7.36, -18.75], [28.64, -7.36, -18.75], [34.64, -7.36, -18.75], [40.64, -7.36, -18.75], [46.64, -7.36, -18.75], [52.64, -7.36, -18.75], [58.64, -7.36, -18.75], [64.64, -7.36, -18.75], [70.64, -7.36, -18.75], [76.64, -7.36, -18.75], [82.64, -7.36, -18.75], [88.64, -7.36, -18.75], [94.64, -7.36, -18.75], [100.64, -7.36, -18.75], [-103.36, -1.36, -18.75], [-97.36, -1.36, -18.75], [-91.36, -1.36, -18.75], [-85.36, -1.36, -18.75], [-79.36, -1.36, -18.75], [-73.36, -1.36, -18.75], [-67.36, -1.36, -18.75], [-61.36, -1.36, -18.75], [-55.36, -1.36, -18.75], [-49.36, -1.36, -18.75], [-43.36, -1.36, -18.75], [-37.36, -1.36, -18.75], [-31.36, -1.36, -18.75], [-25.36, -1.36, -18.75], [-19.36, -1.36, -18.75], [-13.36, -1.36, -18.75], [-7.36, -1.36, -18.75], [-1.36, -1.36, -18.75], [4.64, -1.36, -18.75], [10.64, -1.36, -18.75], [16.64, -1.36, -18.75], [22.64, -1.36, -18.75], [28.64, -1.36, -18.75], [34.64, -1.36, -18.75], [40.64, -1.36, -18.75], [46.64, -1.36, -18.75], [52.64, -1.36, -18.75], [58.64, -1.36, -18.75], [64.64, -1.36, -18.75], [70.64, -1.36, -18.75], [76.64, -1.36, -18.75], [82.64, -1.36, -18.75], [88.64, -1.36, -18.75], [94.64, -1.36, -18.75], [100.64, -1.36, -18.75], [-103.36, 4.64, -18.75], [-97.36, 4.64, -18.75], [-91.36, 4.64, -18.75], [-85.36, 4.64, -18.75], [-79.36, 4.64, -18.75], [-73.36, 4.64, -18.75], [-67.36, 4.64, -18.75], [-61.36, 4.64, -18.75], [-55.36, 4.64, -18.75], [-49.36, 4.64, -18.75], [-43.36, 4.64, -18.75], [-37.36, 4.64, -18.75], [-31.36, 4.64, -18.75], [-25.36, 4.64, -18.75], [-19.36, 4.64, -18.75], [-13.36, 4.64, -18.75], [-7.36, 4.64, -18.75], [-1.36, 4.64, -18.75], [4.64, 4.64, -18.75], [10.64, 4.64, -18.75], [16.64, 4.64, -18.75], [22.64, 4.64, -18.75], [28.64, 4.64, -18.75], [34.64, 4.64, -18.75], [40.64, 4.64, -18.75], [46.64, 4.64, -18.75], [52.64, 4.64, -18.75], [58.64, 4.64, -18.75], [64.64, 4.64, -18.75], [70.64, 4.64, -18.75], [76.64, 4.64, -18.75], [82.64, 4.64, -18.75], [88.64, 4.64, -18.75], [94.64, 4.64, -18.75], [100.64, 4.64, -18.75], [-103.36, 10.64, -18.75], [-97.36, 10.64, -18.75], [-91.36, 10.64, -18.75], [-85.36, 10.64, -18.75], [-79.36, 10.64, -18.75], [-73.36, 10.64, -18.75], [-67.36, 10.64, -18.75], [-61.36, 10.64, -18.75], [-55.36, 10.64, -18.75], [-49.36, 10.64, -18.75], [-43.36, 10.64, -18.75], [-37.36, 10.64, -18.75], [-31.36, 10.64, -18.75], [-25.36, 10.64, -18.75], [-19.36, 10.64, -18.75], [-13.36, 10.64, -18.75], [-7.36, 10.64, -18.75], [-1.36, 10.64, -18.75], [4.64, 10.64, -18.75], [10.64, 10.64, -18.75], [16.64, 10.64, -18.75], [22.64, 10.64, -18.75], [28.64, 10.64, -18.75], [34.64, 10.64, -18.75], [40.64, 10.64, -18.75], [46.64, 10.64, -18.75], [52.64, 10.64, -18.75], [58.64, 10.64, -18.75], [64.64, 10.64, -18.75], [70.64, 10.64, -18.75], [76.64, 10.64, -18.75], [82.64, 10.64, -18.75], [88.64, 10.64, -18.75], [94.64, 10.64, -18.75], [100.64, 10.64, -18.75], [-103.36, 16.64, -18.75], [-97.36, 16.64, -18.75], [-91.36, 16.64, -18.75], [-85.36, 16.64, -18.75], [-79.36, 16.64, -18.75], [-73.36, 16.64, -18.75], [-67.36, 16.64, -18.75], [-61.36, 16.64, -18.75], [-55.36, 16.64, -18.75], [-49.36, 16.64, -18.75], [-43.36, 16.64, -18.75], [-37.36, 16.64, -18.75], [-31.36, 16.64, -18.75], [-25.36, 16.64, -18.75], [-19.36, 16.64, -18.75], [-13.36, 16.64, -18.75], [-7.36, 16.64, -18.75], [-1.36, 16.64, -18.75], [4.64, 16.64, -18.75], [10.64, 16.64, -18.75], [16.64, 16.64, -18.75], [22.64, 16.64, -18.75], [28.64, 16.64, -18.75], [34.64, 16.64, -18.75], [40.64, 16.64, -18.75], [46.64, 16.64, -18.75], [52.64, 16.64, -18.75], [58.64, 16.64, -18.75], [64.64, 16.64, -18.75], [70.64, 16.64, -18.75], [76.64, 16.64, -18.75], [82.64, 16.64, -18.75], [88.64, 16.64, -18.75], [94.64, 16.64, -18.75], [100.64, 16.64, -18.75], [-103.36, 22.64, -18.75], [-97.36, 22.64, -18.75], [-91.36, 22.64, -18.75], [-85.36, 22.64, -18.75], [-79.36, 22.64, -18.75], [-73.36, 22.64, -18.75], [-67.36, 22.64, -18.75], [-61.36, 22.64, -18.75], [-55.36, 22.64, -18.75], [-49.36, 22.64, -18.75], [-43.36, 22.64, -18.75], [-37.36, 22.64, -18.75], [-31.36, 22.64, -18.75], [-25.36, 22.64, -18.75], [-19.36, 22.64, -18.75], [-13.36, 22.64, -18.75], [-7.36, 22.64, -18.75], [-1.36, 22.64, -18.75], [4.64, 22.64, -18.75], [10.64, 22.64, -18.75], [16.64, 22.64, -18.75], [22.64, 22.64, -18.75], [28.64, 22.64, -18.75], [34.64, 22.64, -18.75], [40.64, 22.64, -18.75], [46.64, 22.64, -18.75], [52.64, 22.64, -18.75], [58.64, 22.64, -18.75], [64.64, 22.64, -18.75], [70.64, 22.64, -18.75], [76.64, 22.64, -18.75], [82.64, 22.64, -18.75], [88.64, 22.64, -18.75], [94.64, 22.64, -18.75], [100.64, 22.64, -18.75], [-103.36, 28.64, -18.75], [-97.36, 28.64, -18.75], [-91.36, 28.64, -18.75], [-85.36, 28.64, -18.75], [-79.36, 28.64, -18.75], [-73.36, 28.64, -18.75], [-67.36, 28.64, -18.75], [-61.36, 28.64, -18.75], [-55.36, 28.64, -18.75], [-49.36, 28.64, -18.75], [-43.36, 28.64, -18.75], [-37.36, 28.64, -18.75], [-31.36, 28.64, -18.75], [-25.36, 28.64, -18.75], [-19.36, 28.64, -18.75], [-13.36, 28.64, -18.75], [-7.36, 28.64, -18.75], [-1.36, 28.64, -18.75], [4.64, 28.64, -18.75], [10.64, 28.64, -18.75], [16.64, 28.64, -18.75], [22.64, 28.64, -18.75], [28.64, 28.64, -18.75], [34.64, 28.64, -18.75], [40.64, 28.64, -18.75], [46.64, 28.64, -18.75], [52.64, 28.64, -18.75], [58.64, 28.64, -18.75], [64.64, 28.64, -18.75], [70.64, 28.64, -18.75], [76.64, 28.64, -18.75], [82.64, 28.64, -18.75], [88.64, 28.64, -18.75], [94.64, 28.64, -18.75], [100.64, 28.64, -18.75], [-103.36, 34.64, -18.75], [-97.36, 34.64, -18.75], [-91.36, 34.64, -18.75], [-85.36, 34.64, -18.75], [-79.36, 34.64, -18.75], [-73.36, 34.64, -18.75], [-67.36, 34.64, -18.75], [-61.36, 34.64, -18.75], [-55.36, 34.64, -18.75], [-49.36, 34.64, -18.75], [-43.36, 34.64, -18.75], [-37.36, 34.64, -18.75], [-31.36, 34.64, -18.75], [-25.36, 34.64, -18.75], [-19.36, 34.64, -18.75], [-13.36, 34.64, -18.75], [-7.36, 34.64, -18.75], [-1.36, 34.64, -18.75], [4.64, 34.64, -18.75], [10.64, 34.64, -18.75], [16.64, 34.64, -18.75], [22.64, 34.64, -18.75], [28.64, 34.64, -18.75], [34.64, 34.64, -18.75], [40.64, 34.64, -18.75], [46.64, 34.64, -18.75], [52.64, 34.64, -18.75], [58.64, 34.64, -18.75], [64.64, 34.64, -18.75], [70.64, 34.64, -18.75], [76.64, 34.64, -18.75], [82.64, 34.64, -18.75], [88.64, 34.64, -18.75], [94.64, 34.64, -18.75], [100.64, 34.64, -18.75], [-103.36, 40.64, -18.75], [-97.36, 40.64, -18.75], [-91.36, 40.64, -18.75], [-85.36, 40.64, -18.75], [-79.36, 40.64, -18.75], [-73.36, 40.64, -18.75], [-67.36, 40.64, -18.75], [-61.36, 40.64, -18.75], [-55.36, 40.64, -18.75], [-49.36, 40.64, -18.75], [-43.36, 40.64, -18.75], [-37.36, 40.64, -18.75], [-31.36, 40.64, -18.75], [-25.36, 40.64, -18.75], [-19.36, 40.64, -18.75], [-13.36, 40.64, -18.75], [-7.36, 40.64, -18.75], [-1.36, 40.64, -18.75], [4.64, 40.64, -18.75], [10.64, 40.64, -18.75], [16.64, 40.64, -18.75], [22.64, 40.64, -18.75], [28.64, 40.64, -18.75], [34.64, 40.64, -18.75], [40.64, 40.64, -18.75], [46.64, 40.64, -18.75], [52.64, 40.64, -18.75], [58.64, 40.64, -18.75], [64.64, 40.64, -18.75], [70.64, 40.64, -18.75], [76.64, 40.64, -18.75], [82.64, 40.64, -18.75], [88.64, 40.64, -18.75], [94.64, 40.64, -18.75], [100.64, 40.64, -18.75], [-103.36, 46.64, -18.75], [-97.36, 46.64, -18.75], [-91.36, 46.64, -18.75], [-85.36, 46.64, -18.75], [-79.36, 46.64, -18.75], [-73.36, 46.64, -18.75], [-67.36, 46.64, -18.75], [-61.36, 46.64, -18.75], [-55.36, 46.64, -18.75], [-49.36, 46.64, -18.75], [-43.36, 46.64, -18.75], [-37.36, 46.64, -18.75], [-31.36, 46.64, -18.75], [-25.36, 46.64, -18.75], [-19.36, 46.64, -18.75], [-13.36, 46.64, -18.75], [-7.36, 46.64, -18.75], [-1.36, 46.64, -18.75], [4.64, 46.64, -18.75], [10.64, 46.64, -18.75], [16.64, 46.64, -18.75], [22.64, 46.64, -18.75], [28.64, 46.64, -18.75], [34.64, 46.64, -18.75], [40.64, 46.64, -18.75], [46.64, 46.64, -18.75], [52.64, 46.64, -18.75], [58.64, 46.64, -18.75], [64.64, 46.64, -18.75], [70.64, 46.64, -18.75], [76.64, 46.64, -18.75], [82.64, 46.64, -18.75], [88.64, 46.64, -18.75], [94.64, 46.64, -18.75], [100.64, 46.64, -18.75], [-103.36, 52.64, -18.75], [-97.36, 52.64, -18.75], [-91.36, 52.64, -18.75], [-85.36, 52.64, -18.75], [-79.36, 52.64, -18.75], [-73.36, 52.64, -18.75], [-67.36, 52.64, -18.75], [-61.36, 52.64, -18.75], [-55.36, 52.64, -18.75], [-49.36, 52.64, -18.75], [-43.36, 52.64, -18.75], [-37.36, 52.64, -18.75], [-31.36, 52.64, -18.75], [-25.36, 52.64, -18.75], [-19.36, 52.64, -18.75], [-13.36, 52.64, -18.75], [-7.36, 52.64, -18.75], [-1.36, 52.64, -18.75], [4.64, 52.64, -18.75], [10.64, 52.64, -18.75], [16.64, 52.64, -18.75], [22.64, 52.64, -18.75], [28.64, 52.64, -18.75], [34.64, 52.64, -18.75], [40.64, 52.64, -18.75], [46.64, 52.64, -18.75], [52.64, 52.64, -18.75], [58.64, 52.64, -18.75], [64.64, 52.64, -18.75], [70.64, 52.64, -18.75], [76.64, 52.64, -18.75], [82.64, 52.64, -18.75], [88.64, 52.64, -18.75], [94.64, 52.64, -18.75], [100.64, 52.64, -18.75], [-103.36, 58.64, -18.75], [-97.36, 58.64, -18.75], [-91.36, 58.64, -18.75], [-85.36, 58.64, -18.75], [-79.36, 58.64, -18.75], [-73.36, 58.64, -18.75], [-67.36, 58.64, -18.75], [-61.36, 58.64, -18.75], [-55.36, 58.64, -18.75], [-49.36, 58.64, -18.75], [-43.36, 58.64, -18.75], [-37.36, 58.64, -18.75], [-31.36, 58.64, -18.75], [-25.36, 58.64, -18.75], [-19.36, 58.64, -18.75], [-13.36, 58.64, -18.75], [-7.36, 58.64, -18.75], [-1.36, 58.64, -18.75], [4.64, 58.64, -18.75], [10.64, 58.64, -18.75], [16.64, 58.64, -18.75], [22.64, 58.64, -18.75], [28.64, 58.64, -18.75], [34.64, 58.64, -18.75], [40.64, 58.64, -18.75], [46.64, 58.64, -18.75], [52.64, 58.64, -18.75], [58.64, 58.64, -18.75], [64.64, 58.64, -18.75], [70.64, 58.64, -18.75], [76.64, 58.64, -18.75], [82.64, 58.64, -18.75], [88.64, 58.64, -18.75], [94.64, 58.64, -18.75], [100.64, 58.64, -18.75], [-103.36, 64.64, -18.75], [-97.36, 64.64, -18.75], [-91.36, 64.64, -18.75], [-85.36, 64.64, -18.75], [-79.36, 64.64, -18.75], [-73.36, 64.64, -18.75], [-67.36, 64.64, -18.75], [-61.36, 64.64, -18.75], [-55.36, 64.64, -18.75], [-49.36, 64.64, -18.75], [-43.36, 64.64, -18.75], [-37.36, 64.64, -18.75], [-31.36, 64.64, -18.75], [-25.36, 64.64, -18.75], [-19.36, 64.64, -18.75], [-13.36, 64.64, -18.75], [-7.36, 64.64, -18.75], [-1.36, 64.64, -18.75], [4.64, 64.64, -18.75], [10.64, 64.64, -18.75], [16.64, 64.64, -18.75], [22.64, 64.64, -18.75], [28.64, 64.64, -18.75], [34.64, 64.64, -18.75], [40.64, 64.64, -18.75], [46.64, 64.64, -18.75], [52.64, 64.64, -18.75], [58.64, 64.64, -18.75], [64.64, 64.64, -18.75], [70.64, 64.64, -18.75], [76.64, 64.64, -18.75], [82.64, 64.64, -18.75], [88.64, 64.64, -18.75], [94.64, 64.64, -18.75], [100.64, 64.64, -18.75], [-103.36, 70.64, -18.75], [-97.36, 70.64, -18.75], [-91.36, 70.64, -18.75], [-85.36, 70.64, -18.75], [-79.36, 70.64, -18.75], [-73.36, 70.64, -18.75], [-67.36, 70.64, -18.75], [-61.36, 70.64, -18.75], [-55.36, 70.64, -18.75], [-49.36, 70.64, -18.75], [-43.36, 70.64, -18.75], [-37.36, 70.64, -18.75], [-31.36, 70.64, -18.75], [-25.36, 70.64, -18.75], [-19.36, 70.64, -18.75], [-13.36, 70.64, -18.75], [-7.36, 70.64, -18.75], [-1.36, 70.64, -18.75], [4.64, 70.64, -18.75], [10.64, 70.64, -18.75], [16.64, 70.64, -18.75], [22.64, 70.64, -18.75], [28.64, 70.64, -18.75], [34.64, 70.64, -18.75], [40.64, 70.64, -18.75], [46.64, 70.64, -18.75], [52.64, 70.64, -18.75], [58.64, 70.64, -18.75], [64.64, 70.64, -18.75], [70.64, 70.64, -18.75], [76.64, 70.64, -18.75], [82.64, 70.64, -18.75], [88.64, 70.64, -18.75], [94.64, 70.64, -18.75], [100.64, 70.64, -18.75], [-103.36, 76.64, -18.75], [-97.36, 76.64, -18.75], [-91.36, 76.64, -18.75], [-85.36, 76.64, -18.75], [-79.36, 76.64, -18.75], [-73.36, 76.64, -18.75], [-67.36, 76.64, -18.75], [-61.36, 76.64, -18.75], [-55.36, 76.64, -18.75], [-49.36, 76.64, -18.75], [-43.36, 76.64, -18.75], [-37.36, 76.64, -18.75], [-31.36, 76.64, -18.75], [-25.36, 76.64, -18.75], [-19.36, 76.64, -18.75], [-13.36, 76.64, -18.75], [-7.36, 76.64, -18.75], [-1.36, 76.64, -18.75], [4.64, 76.64, -18.75], [10.64, 76.64, -18.75], [16.64, 76.64, -18.75], [22.64, 76.64, -18.75], [28.64, 76.64, -18.75], [34.64, 76.64, -18.75], [40.64, 76.64, -18.75], [46.64, 76.64, -18.75], [52.64, 76.64, -18.75], [58.64, 76.64, -18.75], [64.64, 76.64, -18.75], [70.64, 76.64, -18.75], [76.64, 76.64, -18.75], [82.64, 76.64, -18.75], [88.64, 76.64, -18.75], [94.64, 76.64, -18.75], [100.64, 76.64, -18.75], [-103.36, 82.64, -18.75], [-97.36, 82.64, -18.75], [-91.36, 82.64, -18.75], [-85.36, 82.64, -18.75], [-79.36, 82.64, -18.75], [-73.36, 82.64, -18.75], [-67.36, 82.64, -18.75], [-61.36, 82.64, -18.75], [-55.36, 82.64, -18.75], [-49.36, 82.64, -18.75], [-43.36, 82.64, -18.75], [-37.36, 82.64, -18.75], [-31.36, 82.64, -18.75], [-25.36, 82.64, -18.75], [-19.36, 82.64, -18.75], [-13.36, 82.64, -18.75], [-7.36, 82.64, -18.75], [-1.36, 82.64, -18.75], [4.64, 82.64, -18.75], [10.64, 82.64, -18.75], [16.64, 82.64, -18.75], [22.64, 82.64, -18.75], [28.64, 82.64, -18.75], [34.64, 82.64, -18.75], [40.64, 82.64, -18.75], [46.64, 82.64, -18.75], [52.64, 82.64, -18.75], [58.64, 82.64, -18.75], [64.64, 82.64, -18.75], [70.64, 82.64, -18.75], [76.64, 82.64, -18.75], [82.64, 82.64, -18.75], [88.64, 82.64, -18.75], [94.64, 82.64, -18.75], [100.64, 82.64, -18.75], [-97.36, 88.64, -18.75], [-91.36, 88.64, -18.75], [-85.36, 88.64, -18.75], [-79.36, 88.64, -18.75], [-73.36, 88.64, -18.75], [-67.36, 88.64, -18.75], [-61.36, 88.64, -18.75], [-55.36, 88.64, -18.75], [-49.36, 88.64, -18.75], [-43.36, 88.64, -18.75], [-37.36, 88.64, -18.75], [-31.36, 88.64, -18.75], [-25.36, 88.64, -18.75], [-19.36, 88.64, -18.75], [-13.36, 88.64, -18.75], [-7.36, 88.64, -18.75], [-1.36, 88.64, -18.75], [4.64, 88.64, -18.75], [10.64, 88.64, -18.75], [16.64, 88.64, -18.75], [22.64, 88.64, -18.75], [28.64, 88.64, -18.75], [34.64, 88.64, -18.75], [40.64, 88.64, -18.75], [46.64, 88.64, -18.75], [52.64, 88.64, -18.75], [58.64, 88.64, -18.75], [64.64, 88.64, -18.75], [70.64, 88.64, -18.75], [76.64, 88.64, -18.75], [82.64, 88.64, -18.75], [88.64, 88.64, -18.75], [94.64, 88.64, -18.75], [100.64, 88.64, -18.75], [-97.36, 94.64, -18.75], [-91.36, 94.64, -18.75], [-85.36, 94.64, -18.75], [-79.36, 94.64, -18.75], [-73.36, 94.64, -18.75], [-67.36, 94.64, -18.75], [-61.36, 94.64, -18.75], [-55.36, 94.64, -18.75], [-49.36, 94.64, -18.75], [-43.36, 94.64, -18.75], [-37.36, 94.64, -18.75], [-31.36, 94.64, -18.75], [-25.36, 94.64, -18.75], [-19.36, 94.64, -18.75], [-13.36, 94.64, -18.75], [-7.36, 94.64, -18.75], [-1.36, 94.64, -18.75], [4.64, 94.64, -18.75], [10.64, 94.64, -18.75], [16.64, 94.64, -18.75], [22.64, 94.64, -18.75], [28.64, 94.64, -18.75], [34.64, 94.64, -18.75], [40.64, 94.64, -18.75], [46.64, 94.64, -18.75], [52.64, 94.64, -18.75], [58.64, 94.64, -18.75], [64.64, 94.64, -18.75], [70.64, 94.64, -18.75], [76.64, 94.64, -18.75], [82.64, 94.64, -18.75], [88.64, 94.64, -18.75], [94.64, 94.64, -18.75], [100.64, 94.64, -18.75], [-97.36, 100.64, -18.75], [-91.36, 100.64, -18.75], [-85.36, 100.64, -18.75], [-79.36, 100.64, -18.75], [-73.36, 100.64, -18.75], [-67.36, 100.64, -18.75], [-61.36, 100.64, -18.75], [-55.36, 100.64, -18.75], [-49.36, 100.64, -18.75], [-43.36, 100.64, -18.75], [-37.36, 100.64, -18.75], [-31.36, 100.64, -18.75], [-25.36, 100.64, -18.75], [-19.36, 100.64, -18.75], [-13.36, 100.64, -18.75], [-7.36, 100.64, -18.75], [-1.36, 100.64, -18.75], [4.64, 100.64, -18.75], [10.64, 100.64, -18.75], [16.64, 100.64, -18.75], [22.64, 100.64, -18.75], [28.64, 100.64, -18.75], [34.64, 100.64, -18.75], [40.64, 100.64, -18.75], [46.64, 100.64, -18.75], [52.64, 100.64, -18.75], [58.64, 100.64, -18.75], [64.64, 100.64, -18.75], [-37.36, -103.36, -12.75], [-31.36, -103.36, -12.75], [-25.36, -103.36, -12.75], [-19.36, -103.36, -12.75], [-13.36, -103.36, -12.75], [-7.36, -103.36, -12.75], [-1.36, -103.36, -12.75], [4.64, -103.36, -12.75], [10.64, -103.36, -12.75], [16.64, -103.36, -12.75], [22.64, -103.36, -12.75], [28.64, -103.36, -12.75], [34.64, -103.36, -12.75], [40.64, -103.36, -12.75], [46.64, -103.36, -12.75], [52.64, -103.36, -12.75], [58.64, -103.36, -12.75], [64.64, -103.36, -12.75], [70.64, -103.36, -12.75], [76.64, -103.36, -12.75], [82.64, -103.36, -12.75], [88.64, -103.36, -12.75], [-97.36, -97.36, -12.75], [-91.36, -97.36, -12.75], [-85.36, -97.36, -12.75], [-79.36, -97.36, -12.75], [-73.36, -97.36, -12.75], [-67.36, -97.36, -12.75], [-61.36, -97.36, -12.75], [-55.36, -97.36, -12.75], [-49.36, -97.36, -12.75], [-43.36, -97.36, -12.75], [-37.36, -97.36, -12.75], [-31.36, -97.36, -12.75], [-25.36, -97.36, -12.75], [-19.36, -97.36, -12.75], [-13.36, -97.36, -12.75], [-7.36, -97.36, -12.75], [-1.36, -97.36, -12.75], [4.64, -97.36, -12.75], [10.64, -97.36, -12.75], [16.64, -97.36, -12.75], [22.64, -97.36, -12.75], [28.64, -97.36, -12.75], [34.64, -97.36, -12.75], [40.64, -97.36, -12.75], [46.64, -97.36, -12.75], [52.64, -97.36, -12.75], [58.64, -97.36, -12.75], [64.64, -97.36, -12.75], [70.64, -97.36, -12.75], [76.64, -97.36, -12.75], [82.64, -97.36, -12.75], [88.64, -97.36, -12.75], [94.64, -97.36, -12.75], [-103.36, -91.36, -12.75], [-97.36, -91.36, -12.75], [-91.36, -91.36, -12.75], [-85.36, -91.36, -12.75], [-79.36, -91.36, -12.75], [-73.36, -91.36, -12.75], [-67.36, -91.36, -12.75], [-61.36, -91.36, -12.75], [-55.36, -91.36, -12.75], [-49.36, -91.36, -12.75], [-43.36, -91.36, -12.75], [-37.36, -91.36, -12.75], [-31.36, -91.36, -12.75], [-25.36, -91.36, -12.75], [-19.36, -91.36, -12.75], [-13.36, -91.36, -12.75], [-7.36, -91.36, -12.75], [-1.36, -91.36, -12.75], [4.64, -91.36, -12.75], [10.64, -91.36, -12.75], [16.64, -91.36, -12.75], [22.64, -91.36, -12.75], [28.64, -91.36, -12.75], [34.64, -91.36, -12.75], [40.64, -91.36, -12.75], [46.64, -91.36, -12.75], [52.64, -91.36, -12.75], [58.64, -91.36, -12.75], [64.64, -91.36, -12.75], [70.64, -91.36, -12.75], [76.64, -91.36, -12.75], [82.64, -91.36, -12.75], [88.64, -91.36, -12.75], [94.64, -91.36, -12.75], [-103.36, -85.36, -12.75], [-97.36, -85.36, -12.75], [-91.36, -85.36, -12.75], [-85.36, -85.36, -12.75], [-79.36, -85.36, -12.75], [-73.36, -85.36, -12.75], [-67.36, -85.36, -12.75], [-61.36, -85.36, -12.75], [-55.36, -85.36, -12.75], [-49.36, -85.36, -12.75], [-43.36, -85.36, -12.75], [-37.36, -85.36, -12.75], [-31.36, -85.36, -12.75], [-25.36, -85.36, -12.75], [-19.36, -85.36, -12.75], [-13.36, -85.36, -12.75], [-7.36, -85.36, -12.75], [-1.36, -85.36, -12.75], [4.64, -85.36, -12.75], [10.64, -85.36, -12.75], [16.64, -85.36, -12.75], [22.64, -85.36, -12.75], [28.64, -85.36, -12.75], [34.64, -85.36, -12.75], [40.64, -85.36, -12.75], [46.64, -85.36, -12.75], [52.64, -85.36, -12.75], [58.64, -85.36, -12.75], [64.64, -85.36, -12.75], [70.64, -85.36, -12.75], [76.64, -85.36, -12.75], [82.64, -85.36, -12.75], [88.64, -85.36, -12.75], [94.64, -85.36, -12.75], [-103.36, -79.36, -12.75], [-97.36, -79.36, -12.75], [-91.36, -79.36, -12.75], [-85.36, -79.36, -12.75], [-79.36, -79.36, -12.75], [-73.36, -79.36, -12.75], [-67.36, -79.36, -12.75], [-61.36, -79.36, -12.75], [-55.36, -79.36, -12.75], [-49.36, -79.36, -12.75], [-43.36, -79.36, -12.75], [-37.36, -79.36, -12.75], [-31.36, -79.36, -12.75], [-25.36, -79.36, -12.75], [-19.36, -79.36, -12.75], [-13.36, -79.36, -12.75], [-7.36, -79.36, -12.75], [-1.36, -79.36, -12.75], [4.64, -79.36, -12.75], [10.64, -79.36, -12.75], [16.64, -79.36, -12.75], [22.64, -79.36, -12.75], [28.64, -79.36, -12.75], [34.64, -79.36, -12.75], [40.64, -79.36, -12.75], [46.64, -79.36, -12.75], [52.64, -79.36, -12.75], [58.64, -79.36, -12.75], [64.64, -79.36, -12.75], [70.64, -79.36, -12.75], [76.64, -79.36, -12.75], [82.64, -79.36, -12.75], [88.64, -79.36, -12.75], [94.64, -79.36, -12.75], [100.64, -79.36, -12.75], [-103.36, -73.36, -12.75], [-97.36, -73.36, -12.75], [-91.36, -73.36, -12.75], [-85.36, -73.36, -12.75], [-79.36, -73.36, -12.75], [-73.36, -73.36, -12.75], [-67.36, -73.36, -12.75], [-61.36, -73.36, -12.75], [-55.36, -73.36, -12.75], [-49.36, -73.36, -12.75], [-43.36, -73.36, -12.75], [-37.36, -73.36, -12.75], [-31.36, -73.36, -12.75], [-25.36, -73.36, -12.75], [-19.36, -73.36, -12.75], [-13.36, -73.36, -12.75], [-7.36, -73.36, -12.75], [-1.36, -73.36, -12.75], [4.64, -73.36, -12.75], [10.64, -73.36, -12.75], [16.64, -73.36, -12.75], [22.64, -73.36, -12.75], [28.64, -73.36, -12.75], [34.64, -73.36, -12.75], [40.64, -73.36, -12.75], [46.64, -73.36, -12.75], [52.64, -73.36, -12.75], [58.64, -73.36, -12.75], [64.64, -73.36, -12.75], [70.64, -73.36, -12.75], [76.64, -73.36, -12.75], [82.64, -73.36, -12.75], [88.64, -73.36, -12.75], [94.64, -73.36, -12.75], [100.64, -73.36, -12.75], [-103.36, -67.36, -12.75], [-97.36, -67.36, -12.75], [-91.36, -67.36, -12.75], [-85.36, -67.36, -12.75], [-79.36, -67.36, -12.75], [-73.36, -67.36, -12.75], [-67.36, -67.36, -12.75], [-61.36, -67.36, -12.75], [-55.36, -67.36, -12.75], [-49.36, -67.36, -12.75], [-43.36, -67.36, -12.75], [-37.36, -67.36, -12.75], [-31.36, -67.36, -12.75], [-25.36, -67.36, -12.75], [-19.36, -67.36, -12.75], [-13.36, -67.36, -12.75], [-7.36, -67.36, -12.75], [-1.36, -67.36, -12.75], [4.64, -67.36, -12.75], [10.64, -67.36, -12.75], [16.64, -67.36, -12.75], [22.64, -67.36, -12.75], [28.64, -67.36, -12.75], [34.64, -67.36, -12.75], [40.64, -67.36, -12.75], [46.64, -67.36, -12.75], [52.64, -67.36, -12.75], [58.64, -67.36, -12.75], [64.64, -67.36, -12.75], [70.64, -67.36, -12.75], [76.64, -67.36, -12.75], [82.64, -67.36, -12.75], [88.64, -67.36, -12.75], [94.64, -67.36, -12.75], [100.64, -67.36, -12.75], [-103.36, -61.36, -12.75], [-97.36, -61.36, -12.75], [-91.36, -61.36, -12.75], [-85.36, -61.36, -12.75], [-79.36, -61.36, -12.75], [-73.36, -61.36, -12.75], [-67.36, -61.36, -12.75], [-61.36, -61.36, -12.75], [-55.36, -61.36, -12.75], [-49.36, -61.36, -12.75], [-43.36, -61.36, -12.75], [-37.36, -61.36, -12.75], [-31.36, -61.36, -12.75], [-25.36, -61.36, -12.75], [-19.36, -61.36, -12.75], [-13.36, -61.36, -12.75], [-7.36, -61.36, -12.75], [-1.36, -61.36, -12.75], [4.64, -61.36, -12.75], [10.64, -61.36, -12.75], [16.64, -61.36, -12.75], [22.64, -61.36, -12.75], [28.64, -61.36, -12.75], [34.64, -61.36, -12.75], [40.64, -61.36, -12.75], [46.64, -61.36, -12.75], [52.64, -61.36, -12.75], [58.64, -61.36, -12.75], [64.64, -61.36, -12.75], [70.64, -61.36, -12.75], [76.64, -61.36, -12.75], [82.64, -61.36, -12.75], [88.64, -61.36, -12.75], [94.64, -61.36, -12.75], [100.64, -61.36, -12.75], [-103.36, -55.36, -12.75], [-97.36, -55.36, -12.75], [-91.36, -55.36, -12.75], [-85.36, -55.36, -12.75], [-79.36, -55.36, -12.75], [-73.36, -55.36, -12.75], [-67.36, -55.36, -12.75], [-61.36, -55.36, -12.75], [-55.36, -55.36, -12.75], [-49.36, -55.36, -12.75], [-43.36, -55.36, -12.75], [-37.36, -55.36, -12.75], [-31.36, -55.36, -12.75], [-25.36, -55.36, -12.75], [-19.36, -55.36, -12.75], [-13.36, -55.36, -12.75], [-7.36, -55.36, -12.75], [-1.36, -55.36, -12.75], [4.64, -55.36, -12.75], [10.64, -55.36, -12.75], [16.64, -55.36, -12.75], [22.64, -55.36, -12.75], [28.64, -55.36, -12.75], [34.64, -55.36, -12.75], [40.64, -55.36, -12.75], [46.64, -55.36, -12.75], [52.64, -55.36, -12.75], [58.64, -55.36, -12.75], [64.64, -55.36, -12.75], [70.64, -55.36, -12.75], [76.64, -55.36, -12.75], [82.64, -55.36, -12.75], [88.64, -55.36, -12.75], [94.64, -55.36, -12.75], [100.64, -55.36, -12.75], [-103.36, -49.36, -12.75], [-97.36, -49.36, -12.75], [-91.36, -49.36, -12.75], [-85.36, -49.36, -12.75], [-79.36, -49.36, -12.75], [-73.36, -49.36, -12.75], [-67.36, -49.36, -12.75], [-61.36, -49.36, -12.75], [-55.36, -49.36, -12.75], [-49.36, -49.36, -12.75], [-43.36, -49.36, -12.75], [-37.36, -49.36, -12.75], [-31.36, -49.36, -12.75], [-25.36, -49.36, -12.75], [-19.36, -49.36, -12.75], [-13.36, -49.36, -12.75], [-7.36, -49.36, -12.75], [-1.36, -49.36, -12.75], [4.64, -49.36, -12.75], [10.64, -49.36, -12.75], [16.64, -49.36, -12.75], [22.64, -49.36, -12.75], [28.64, -49.36, -12.75], [34.64, -49.36, -12.75], [40.64, -49.36, -12.75], [46.64, -49.36, -12.75], [52.64, -49.36, -12.75], [58.64, -49.36, -12.75], [64.64, -49.36, -12.75], [70.64, -49.36, -12.75], [76.64, -49.36, -12.75], [82.64, -49.36, -12.75], [88.64, -49.36, -12.75], [94.64, -49.36, -12.75], [100.64, -49.36, -12.75], [-103.36, -43.36, -12.75], [-97.36, -43.36, -12.75], [-91.36, -43.36, -12.75], [-85.36, -43.36, -12.75], [-79.36, -43.36, -12.75], [-73.36, -43.36, -12.75], [-67.36, -43.36, -12.75], [-61.36, -43.36, -12.75], [-55.36, -43.36, -12.75], [-49.36, -43.36, -12.75], [-43.36, -43.36, -12.75], [-37.36, -43.36, -12.75], [-31.36, -43.36, -12.75], [-25.36, -43.36, -12.75], [-19.36, -43.36, -12.75], [-13.36, -43.36, -12.75], [-7.36, -43.36, -12.75], [-1.36, -43.36, -12.75], [4.64, -43.36, -12.75], [10.64, -43.36, -12.75], [16.64, -43.36, -12.75], [22.64, -43.36, -12.75], [28.64, -43.36, -12.75], [34.64, -43.36, -12.75], [40.64, -43.36, -12.75], [46.64, -43.36, -12.75], [52.64, -43.36, -12.75], [58.64, -43.36, -12.75], [64.64, -43.36, -12.75], [70.64, -43.36, -12.75], [76.64, -43.36, -12.75], [82.64, -43.36, -12.75], [88.64, -43.36, -12.75], [94.64, -43.36, -12.75], [100.64, -43.36, -12.75], [-103.36, -37.36, -12.75], [-97.36, -37.36, -12.75], [-91.36, -37.36, -12.75], [-85.36, -37.36, -12.75], [-79.36, -37.36, -12.75], [-73.36, -37.36, -12.75], [-67.36, -37.36, -12.75], [-61.36, -37.36, -12.75], [-55.36, -37.36, -12.75], [-49.36, -37.36, -12.75], [-43.36, -37.36, -12.75], [-37.36, -37.36, -12.75], [-31.36, -37.36, -12.75], [-25.36, -37.36, -12.75], [-19.36, -37.36, -12.75], [-13.36, -37.36, -12.75], [-7.36, -37.36, -12.75], [-1.36, -37.36, -12.75], [4.64, -37.36, -12.75], [10.64, -37.36, -12.75], [16.64, -37.36, -12.75], [22.64, -37.36, -12.75], [28.64, -37.36, -12.75], [34.64, -37.36, -12.75], [40.64, -37.36, -12.75], [46.64, -37.36, -12.75], [52.64, -37.36, -12.75], [58.64, -37.36, -12.75], [64.64, -37.36, -12.75], [70.64, -37.36, -12.75], [76.64, -37.36, -12.75], [82.64, -37.36, -12.75], [88.64, -37.36, -12.75], [94.64, -37.36, -12.75], [100.64, -37.36, -12.75], [-103.36, -31.36, -12.75], [-97.36, -31.36, -12.75], [-91.36, -31.36, -12.75], [-85.36, -31.36, -12.75], [-79.36, -31.36, -12.75], [-73.36, -31.36, -12.75], [-67.36, -31.36, -12.75], [-61.36, -31.36, -12.75], [-55.36, -31.36, -12.75], [-49.36, -31.36, -12.75], [-43.36, -31.36, -12.75], [-37.36, -31.36, -12.75], [-31.36, -31.36, -12.75], [-25.36, -31.36, -12.75], [-19.36, -31.36, -12.75], [-13.36, -31.36, -12.75], [-7.36, -31.36, -12.75], [-1.36, -31.36, -12.75], [4.64, -31.36, -12.75], [10.64, -31.36, -12.75], [16.64, -31.36, -12.75], [22.64, -31.36, -12.75], [28.64, -31.36, -12.75], [34.64, -31.36, -12.75], [40.64, -31.36, -12.75], [46.64, -31.36, -12.75], [52.64, -31.36, -12.75], [58.64, -31.36, -12.75], [64.64, -31.36, -12.75], [70.64, -31.36, -12.75], [76.64, -31.36, -12.75], [82.64, -31.36, -12.75], [88.64, -31.36, -12.75], [94.64, -31.36, -12.75], [100.64, -31.36, -12.75], [-103.36, -25.36, -12.75], [-97.36, -25.36, -12.75], [-91.36, -25.36, -12.75], [-85.36, -25.36, -12.75], [-79.36, -25.36, -12.75], [-73.36, -25.36, -12.75], [-67.36, -25.36, -12.75], [-61.36, -25.36, -12.75], [-55.36, -25.36, -12.75], [-49.36, -25.36, -12.75], [-43.36, -25.36, -12.75], [-37.36, -25.36, -12.75], [-31.36, -25.36, -12.75], [-25.36, -25.36, -12.75], [-19.36, -25.36, -12.75], [-13.36, -25.36, -12.75], [-7.36, -25.36, -12.75], [-1.36, -25.36, -12.75], [4.64, -25.36, -12.75], [10.64, -25.36, -12.75], [16.64, -25.36, -12.75], [22.64, -25.36, -12.75], [28.64, -25.36, -12.75], [34.64, -25.36, -12.75], [40.64, -25.36, -12.75], [46.64, -25.36, -12.75], [52.64, -25.36, -12.75], [58.64, -25.36, -12.75], [64.64, -25.36, -12.75], [70.64, -25.36, -12.75], [76.64, -25.36, -12.75], [82.64, -25.36, -12.75], [88.64, -25.36, -12.75], [94.64, -25.36, -12.75], [100.64, -25.36, -12.75], [-103.36, -19.36, -12.75], [-97.36, -19.36, -12.75], [-91.36, -19.36, -12.75], [-85.36, -19.36, -12.75], [-79.36, -19.36, -12.75], [-73.36, -19.36, -12.75], [-67.36, -19.36, -12.75], [-61.36, -19.36, -12.75], [-55.36, -19.36, -12.75], [-49.36, -19.36, -12.75], [-43.36, -19.36, -12.75], [-37.36, -19.36, -12.75], [-31.36, -19.36, -12.75], [-25.36, -19.36, -12.75], [-19.36, -19.36, -12.75], [-13.36, -19.36, -12.75], [-7.36, -19.36, -12.75], [-1.36, -19.36, -12.75], [4.64, -19.36, -12.75], [10.64, -19.36, -12.75], [16.64, -19.36, -12.75], [22.64, -19.36, -12.75], [28.64, -19.36, -12.75], [34.64, -19.36, -12.75], [40.64, -19.36, -12.75], [46.64, -19.36, -12.75], [52.64, -19.36, -12.75], [58.64, -19.36, -12.75], [64.64, -19.36, -12.75], [70.64, -19.36, -12.75], [76.64, -19.36, -12.75], [82.64, -19.36, -12.75], [88.64, -19.36, -12.75], [94.64, -19.36, -12.75], [100.64, -19.36, -12.75], [-103.36, -13.36, -12.75], [-97.36, -13.36, -12.75], [-91.36, -13.36, -12.75], [-85.36, -13.36, -12.75], [-79.36, -13.36, -12.75], [-73.36, -13.36, -12.75], [-67.36, -13.36, -12.75], [-61.36, -13.36, -12.75], [-55.36, -13.36, -12.75], [-49.36, -13.36, -12.75], [-43.36, -13.36, -12.75], [-37.36, -13.36, -12.75], [-31.36, -13.36, -12.75], [-25.36, -13.36, -12.75], [-19.36, -13.36, -12.75], [-13.36, -13.36, -12.75], [-7.36, -13.36, -12.75], [-1.36, -13.36, -12.75], [4.64, -13.36, -12.75], [10.64, -13.36, -12.75], [16.64, -13.36, -12.75], [22.64, -13.36, -12.75], [28.64, -13.36, -12.75], [34.64, -13.36, -12.75], [40.64, -13.36, -12.75], [46.64, -13.36, -12.75], [52.64, -13.36, -12.75], [58.64, -13.36, -12.75], [64.64, -13.36, -12.75], [70.64, -13.36, -12.75], [76.64, -13.36, -12.75], [82.64, -13.36, -12.75], [88.64, -13.36, -12.75], [94.64, -13.36, -12.75], [100.64, -13.36, -12.75], [-103.36, -7.36, -12.75], [-97.36, -7.36, -12.75], [-91.36, -7.36, -12.75], [-85.36, -7.36, -12.75], [-79.36, -7.36, -12.75], [-73.36, -7.36, -12.75], [-67.36, -7.36, -12.75], [-61.36, -7.36, -12.75], [-55.36, -7.36, -12.75], [-49.36, -7.36, -12.75], [-43.36, -7.36, -12.75], [-37.36, -7.36, -12.75], [-31.36, -7.36, -12.75], [-25.36, -7.36, -12.75], [-19.36, -7.36, -12.75], [-13.36, -7.36, -12.75], [-7.36, -7.36, -12.75], [-1.36, -7.36, -12.75], [4.64, -7.36, -12.75], [10.64, -7.36, -12.75], [16.64, -7.36, -12.75], [22.64, -7.36, -12.75], [28.64, -7.36, -12.75], [34.64, -7.36, -12.75], [40.64, -7.36, -12.75], [46.64, -7.36, -12.75], [52.64, -7.36, -12.75], [58.64, -7.36, -12.75], [64.64, -7.36, -12.75], [70.64, -7.36, -12.75], [76.64, -7.36, -12.75], [82.64, -7.36, -12.75], [88.64, -7.36, -12.75], [94.64, -7.36, -12.75], [100.64, -7.36, -12.75], [-103.36, -1.36, -12.75], [-97.36, -1.36, -12.75], [-91.36, -1.36, -12.75], [-85.36, -1.36, -12.75], [-79.36, -1.36, -12.75], [-73.36, -1.36, -12.75], [-67.36, -1.36, -12.75], [-61.36, -1.36, -12.75], [-55.36, -1.36, -12.75], [-49.36, -1.36, -12.75], [-43.36, -1.36, -12.75], [-37.36, -1.36, -12.75], [-31.36, -1.36, -12.75], [-25.36, -1.36, -12.75], [-19.36, -1.36, -12.75], [-13.36, -1.36, -12.75], [-7.36, -1.36, -12.75], [-1.36, -1.36, -12.75], [4.64, -1.36, -12.75], [10.64, -1.36, -12.75], [16.64, -1.36, -12.75], [22.64, -1.36, -12.75], [28.64, -1.36, -12.75], [34.64, -1.36, -12.75], [40.64, -1.36, -12.75], [46.64, -1.36, -12.75], [52.64, -1.36, -12.75], [58.64, -1.36, -12.75], [64.64, -1.36, -12.75], [70.64, -1.36, -12.75], [76.64, -1.36, -12.75], [82.64, -1.36, -12.75], [88.64, -1.36, -12.75], [94.64, -1.36, -12.75], [100.64, -1.36, -12.75], [-103.36, 4.64, -12.75], [-97.36, 4.64, -12.75], [-91.36, 4.64, -12.75], [-85.36, 4.64, -12.75], [-79.36, 4.64, -12.75], [-73.36, 4.64, -12.75], [-67.36, 4.64, -12.75], [-61.36, 4.64, -12.75], [-55.36, 4.64, -12.75], [-49.36, 4.64, -12.75], [-43.36, 4.64, -12.75], [-37.36, 4.64, -12.75], [-31.36, 4.64, -12.75], [-25.36, 4.64, -12.75], [-19.36, 4.64, -12.75], [-13.36, 4.64, -12.75], [-7.36, 4.64, -12.75], [-1.36, 4.64, -12.75], [4.64, 4.64, -12.75], [10.64, 4.64, -12.75], [16.64, 4.64, -12.75], [22.64, 4.64, -12.75], [28.64, 4.64, -12.75], [34.64, 4.64, -12.75], [40.64, 4.64, -12.75], [46.64, 4.64, -12.75], [52.64, 4.64, -12.75], [58.64, 4.64, -12.75], [64.64, 4.64, -12.75], [70.64, 4.64, -12.75], [76.64, 4.64, -12.75], [82.64, 4.64, -12.75], [88.64, 4.64, -12.75], [94.64, 4.64, -12.75], [100.64, 4.64, -12.75], [-103.36, 10.64, -12.75], [-97.36, 10.64, -12.75], [-91.36, 10.64, -12.75], [-85.36, 10.64, -12.75], [-79.36, 10.64, -12.75], [-73.36, 10.64, -12.75], [-67.36, 10.64, -12.75], [-61.36, 10.64, -12.75], [-55.36, 10.64, -12.75], [-49.36, 10.64, -12.75], [-43.36, 10.64, -12.75], [-37.36, 10.64, -12.75], [-31.36, 10.64, -12.75], [-25.36, 10.64, -12.75], [-19.36, 10.64, -12.75], [-13.36, 10.64, -12.75], [-7.36, 10.64, -12.75], [-1.36, 10.64, -12.75], [4.64, 10.64, -12.75], [10.64, 10.64, -12.75], [16.64, 10.64, -12.75], [22.64, 10.64, -12.75], [28.64, 10.64, -12.75], [34.64, 10.64, -12.75], [40.64, 10.64, -12.75], [46.64, 10.64, -12.75], [52.64, 10.64, -12.75], [58.64, 10.64, -12.75], [64.64, 10.64, -12.75], [70.64, 10.64, -12.75], [76.64, 10.64, -12.75], [82.64, 10.64, -12.75], [88.64, 10.64, -12.75], [94.64, 10.64, -12.75], [100.64, 10.64, -12.75], [-103.36, 16.64, -12.75], [-97.36, 16.64, -12.75], [-91.36, 16.64, -12.75], [-85.36, 16.64, -12.75], [-79.36, 16.64, -12.75], [-73.36, 16.64, -12.75], [-67.36, 16.64, -12.75], [-61.36, 16.64, -12.75], [-55.36, 16.64, -12.75], [-49.36, 16.64, -12.75], [-43.36, 16.64, -12.75], [-37.36, 16.64, -12.75], [-31.36, 16.64, -12.75], [-25.36, 16.64, -12.75], [-19.36, 16.64, -12.75], [-13.36, 16.64, -12.75], [-7.36, 16.64, -12.75], [-1.36, 16.64, -12.75], [4.64, 16.64, -12.75], [10.64, 16.64, -12.75], [16.64, 16.64, -12.75], [22.64, 16.64, -12.75], [28.64, 16.64, -12.75], [34.64, 16.64, -12.75], [40.64, 16.64, -12.75], [46.64, 16.64, -12.75], [52.64, 16.64, -12.75], [58.64, 16.64, -12.75], [64.64, 16.64, -12.75], [70.64, 16.64, -12.75], [76.64, 16.64, -12.75], [82.64, 16.64, -12.75], [88.64, 16.64, -12.75], [94.64, 16.64, -12.75], [100.64, 16.64, -12.75], [-103.36, 22.64, -12.75], [-97.36, 22.64, -12.75], [-91.36, 22.64, -12.75], [-85.36, 22.64, -12.75], [-79.36, 22.64, -12.75], [-73.36, 22.64, -12.75], [-67.36, 22.64, -12.75], [-61.36, 22.64, -12.75], [-55.36, 22.64, -12.75], [-49.36, 22.64, -12.75], [-43.36, 22.64, -12.75], [-37.36, 22.64, -12.75], [-31.36, 22.64, -12.75], [-25.36, 22.64, -12.75], [-19.36, 22.64, -12.75], [-13.36, 22.64, -12.75], [-7.36, 22.64, -12.75], [-1.36, 22.64, -12.75], [4.64, 22.64, -12.75], [10.64, 22.64, -12.75], [16.64, 22.64, -12.75], [22.64, 22.64, -12.75], [28.64, 22.64, -12.75], [34.64, 22.64, -12.75], [40.64, 22.64, -12.75], [46.64, 22.64, -12.75], [52.64, 22.64, -12.75], [58.64, 22.64, -12.75], [64.64, 22.64, -12.75], [70.64, 22.64, -12.75], [76.64, 22.64, -12.75], [82.64, 22.64, -12.75], [88.64, 22.64, -12.75], [94.64, 22.64, -12.75], [100.64, 22.64, -12.75], [-103.36, 28.64, -12.75], [-97.36, 28.64, -12.75], [-91.36, 28.64, -12.75], [-85.36, 28.64, -12.75], [-79.36, 28.64, -12.75], [-73.36, 28.64, -12.75], [-67.36, 28.64, -12.75], [-61.36, 28.64, -12.75], [-55.36, 28.64, -12.75], [-49.36, 28.64, -12.75], [-43.36, 28.64, -12.75], [-37.36, 28.64, -12.75], [-31.36, 28.64, -12.75], [-25.36, 28.64, -12.75], [-19.36, 28.64, -12.75], [-13.36, 28.64, -12.75], [-7.36, 28.64, -12.75], [-1.36, 28.64, -12.75], [4.64, 28.64, -12.75], [10.64, 28.64, -12.75], [16.64, 28.64, -12.75], [22.64, 28.64, -12.75], [28.64, 28.64, -12.75], [34.64, 28.64, -12.75], [40.64, 28.64, -12.75], [46.64, 28.64, -12.75], [52.64, 28.64, -12.75], [58.64, 28.64, -12.75], [64.64, 28.64, -12.75], [70.64, 28.64, -12.75], [76.64, 28.64, -12.75], [82.64, 28.64, -12.75], [88.64, 28.64, -12.75], [94.64, 28.64, -12.75], [100.64, 28.64, -12.75], [-103.36, 34.64, -12.75], [-97.36, 34.64, -12.75], [-91.36, 34.64, -12.75], [-85.36, 34.64, -12.75], [-79.36, 34.64, -12.75], [-73.36, 34.64, -12.75], [-67.36, 34.64, -12.75], [-61.36, 34.64, -12.75], [-55.36, 34.64, -12.75], [-49.36, 34.64, -12.75], [-43.36, 34.64, -12.75], [-37.36, 34.64, -12.75], [-31.36, 34.64, -12.75], [-25.36, 34.64, -12.75], [-19.36, 34.64, -12.75], [-13.36, 34.64, -12.75], [-7.36, 34.64, -12.75], [-1.36, 34.64, -12.75], [4.64, 34.64, -12.75], [10.64, 34.64, -12.75], [16.64, 34.64, -12.75], [22.64, 34.64, -12.75], [28.64, 34.64, -12.75], [34.64, 34.64, -12.75], [40.64, 34.64, -12.75], [46.64, 34.64, -12.75], [52.64, 34.64, -12.75], [58.64, 34.64, -12.75], [64.64, 34.64, -12.75], [70.64, 34.64, -12.75], [76.64, 34.64, -12.75], [82.64, 34.64, -12.75], [88.64, 34.64, -12.75], [94.64, 34.64, -12.75], [100.64, 34.64, -12.75], [-103.36, 40.64, -12.75], [-97.36, 40.64, -12.75], [-91.36, 40.64, -12.75], [-85.36, 40.64, -12.75], [-79.36, 40.64, -12.75], [-73.36, 40.64, -12.75], [-67.36, 40.64, -12.75], [-61.36, 40.64, -12.75], [-55.36, 40.64, -12.75], [-49.36, 40.64, -12.75], [-43.36, 40.64, -12.75], [-37.36, 40.64, -12.75], [-31.36, 40.64, -12.75], [-25.36, 40.64, -12.75], [-19.36, 40.64, -12.75], [-13.36, 40.64, -12.75], [-7.36, 40.64, -12.75], [-1.36, 40.64, -12.75], [4.64, 40.64, -12.75], [10.64, 40.64, -12.75], [16.64, 40.64, -12.75], [22.64, 40.64, -12.75], [28.64, 40.64, -12.75], [34.64, 40.64, -12.75], [40.64, 40.64, -12.75], [46.64, 40.64, -12.75], [52.64, 40.64, -12.75], [58.64, 40.64, -12.75], [64.64, 40.64, -12.75], [70.64, 40.64, -12.75], [76.64, 40.64, -12.75], [82.64, 40.64, -12.75], [88.64, 40.64, -12.75], [94.64, 40.64, -12.75], [100.64, 40.64, -12.75], [-103.36, 46.64, -12.75], [-97.36, 46.64, -12.75], [-91.36, 46.64, -12.75], [-85.36, 46.64, -12.75], [-79.36, 46.64, -12.75], [-73.36, 46.64, -12.75], [-67.36, 46.64, -12.75], [-61.36, 46.64, -12.75], [-55.36, 46.64, -12.75], [-49.36, 46.64, -12.75], [-43.36, 46.64, -12.75], [-37.36, 46.64, -12.75], [-31.36, 46.64, -12.75], [-25.36, 46.64, -12.75], [-19.36, 46.64, -12.75], [-13.36, 46.64, -12.75], [-7.36, 46.64, -12.75], [-1.36, 46.64, -12.75], [4.64, 46.64, -12.75], [10.64, 46.64, -12.75], [16.64, 46.64, -12.75], [22.64, 46.64, -12.75], [28.64, 46.64, -12.75], [34.64, 46.64, -12.75], [40.64, 46.64, -12.75], [46.64, 46.64, -12.75], [52.64, 46.64, -12.75], [58.64, 46.64, -12.75], [64.64, 46.64, -12.75], [70.64, 46.64, -12.75], [76.64, 46.64, -12.75], [82.64, 46.64, -12.75], [88.64, 46.64, -12.75], [94.64, 46.64, -12.75], [100.64, 46.64, -12.75], [-103.36, 52.64, -12.75], [-97.36, 52.64, -12.75], [-91.36, 52.64, -12.75], [-85.36, 52.64, -12.75], [-79.36, 52.64, -12.75], [-73.36, 52.64, -12.75], [-67.36, 52.64, -12.75], [-61.36, 52.64, -12.75], [-55.36, 52.64, -12.75], [-49.36, 52.64, -12.75], [-43.36, 52.64, -12.75], [-37.36, 52.64, -12.75], [-31.36, 52.64, -12.75], [-25.36, 52.64, -12.75], [-19.36, 52.64, -12.75], [-13.36, 52.64, -12.75], [-7.36, 52.64, -12.75], [-1.36, 52.64, -12.75], [4.64, 52.64, -12.75], [10.64, 52.64, -12.75], [16.64, 52.64, -12.75], [22.64, 52.64, -12.75], [28.64, 52.64, -12.75], [34.64, 52.64, -12.75], [40.64, 52.64, -12.75], [46.64, 52.64, -12.75], [52.64, 52.64, -12.75], [58.64, 52.64, -12.75], [64.64, 52.64, -12.75], [70.64, 52.64, -12.75], [76.64, 52.64, -12.75], [82.64, 52.64, -12.75], [88.64, 52.64, -12.75], [94.64, 52.64, -12.75], [100.64, 52.64, -12.75], [-103.36, 58.64, -12.75], [-97.36, 58.64, -12.75], [-91.36, 58.64, -12.75], [-85.36, 58.64, -12.75], [-79.36, 58.64, -12.75], [-73.36, 58.64, -12.75], [-67.36, 58.64, -12.75], [-61.36, 58.64, -12.75], [-55.36, 58.64, -12.75], [-49.36, 58.64, -12.75], [-43.36, 58.64, -12.75], [-37.36, 58.64, -12.75], [-31.36, 58.64, -12.75], [-25.36, 58.64, -12.75], [-19.36, 58.64, -12.75], [-13.36, 58.64, -12.75], [-7.36, 58.64, -12.75], [-1.36, 58.64, -12.75], [4.64, 58.64, -12.75], [10.64, 58.64, -12.75], [16.64, 58.64, -12.75], [22.64, 58.64, -12.75], [28.64, 58.64, -12.75], [34.64, 58.64, -12.75], [40.64, 58.64, -12.75], [46.64, 58.64, -12.75], [52.64, 58.64, -12.75], [58.64, 58.64, -12.75], [64.64, 58.64, -12.75], [70.64, 58.64, -12.75], [76.64, 58.64, -12.75], [82.64, 58.64, -12.75], [88.64, 58.64, -12.75], [94.64, 58.64, -12.75], [100.64, 58.64, -12.75], [-103.36, 64.64, -12.75], [-97.36, 64.64, -12.75], [-91.36, 64.64, -12.75], [-85.36, 64.64, -12.75], [-79.36, 64.64, -12.75], [-73.36, 64.64, -12.75], [-67.36, 64.64, -12.75], [-61.36, 64.64, -12.75], [-55.36, 64.64, -12.75], [-49.36, 64.64, -12.75], [-43.36, 64.64, -12.75], [-37.36, 64.64, -12.75], [-31.36, 64.64, -12.75], [-25.36, 64.64, -12.75], [-19.36, 64.64, -12.75], [-13.36, 64.64, -12.75], [-7.36, 64.64, -12.75], [-1.36, 64.64, -12.75], [4.64, 64.64, -12.75], [10.64, 64.64, -12.75], [16.64, 64.64, -12.75], [22.64, 64.64, -12.75], [28.64, 64.64, -12.75], [34.64, 64.64, -12.75], [40.64, 64.64, -12.75], [46.64, 64.64, -12.75], [52.64, 64.64, -12.75], [58.64, 64.64, -12.75], [64.64, 64.64, -12.75], [70.64, 64.64, -12.75], [76.64, 64.64, -12.75], [82.64, 64.64, -12.75], [88.64, 64.64, -12.75], [94.64, 64.64, -12.75], [100.64, 64.64, -12.75], [-103.36, 70.64, -12.75], [-97.36, 70.64, -12.75], [-91.36, 70.64, -12.75], [-85.36, 70.64, -12.75], [-79.36, 70.64, -12.75], [-73.36, 70.64, -12.75], [-67.36, 70.64, -12.75], [-61.36, 70.64, -12.75], [-55.36, 70.64, -12.75], [-49.36, 70.64, -12.75], [-43.36, 70.64, -12.75], [-37.36, 70.64, -12.75], [-31.36, 70.64, -12.75], [-25.36, 70.64, -12.75], [-19.36, 70.64, -12.75], [-13.36, 70.64, -12.75], [-7.36, 70.64, -12.75], [-1.36, 70.64, -12.75], [4.64, 70.64, -12.75], [10.64, 70.64, -12.75], [16.64, 70.64, -12.75], [22.64, 70.64, -12.75], [28.64, 70.64, -12.75], [34.64, 70.64, -12.75], [40.64, 70.64, -12.75], [46.64, 70.64, -12.75], [52.64, 70.64, -12.75], [58.64, 70.64, -12.75], [64.64, 70.64, -12.75], [70.64, 70.64, -12.75], [76.64, 70.64, -12.75], [82.64, 70.64, -12.75], [88.64, 70.64, -12.75], [94.64, 70.64, -12.75], [100.64, 70.64, -12.75], [-103.36, 76.64, -12.75], [-97.36, 76.64, -12.75], [-91.36, 76.64, -12.75], [-85.36, 76.64, -12.75], [-79.36, 76.64, -12.75], [-73.36, 76.64, -12.75], [-67.36, 76.64, -12.75], [-61.36, 76.64, -12.75], [-55.36, 76.64, -12.75], [-49.36, 76.64, -12.75], [-43.36, 76.64, -12.75], [-37.36, 76.64, -12.75], [-31.36, 76.64, -12.75], [-25.36, 76.64, -12.75], [-19.36, 76.64, -12.75], [-13.36, 76.64, -12.75], [-7.36, 76.64, -12.75], [-1.36, 76.64, -12.75], [4.64, 76.64, -12.75], [10.64, 76.64, -12.75], [16.64, 76.64, -12.75], [22.64, 76.64, -12.75], [28.64, 76.64, -12.75], [34.64, 76.64, -12.75], [40.64, 76.64, -12.75], [46.64, 76.64, -12.75], [52.64, 76.64, -12.75], [58.64, 76.64, -12.75], [64.64, 76.64, -12.75], [70.64, 76.64, -12.75], [76.64, 76.64, -12.75], [82.64, 76.64, -12.75], [88.64, 76.64, -12.75], [94.64, 76.64, -12.75], [100.64, 76.64, -12.75], [-103.36, 82.64, -12.75], [-97.36, 82.64, -12.75], [-91.36, 82.64, -12.75], [-85.36, 82.64, -12.75], [-79.36, 82.64, -12.75], [-73.36, 82.64, -12.75], [-67.36, 82.64, -12.75], [-61.36, 82.64, -12.75], [-55.36, 82.64, -12.75], [-49.36, 82.64, -12.75], [-43.36, 82.64, -12.75], [-37.36, 82.64, -12.75], [-31.36, 82.64, -12.75], [-25.36, 82.64, -12.75], [-19.36, 82.64, -12.75], [-13.36, 82.64, -12.75], [-7.36, 82.64, -12.75], [-1.36, 82.64, -12.75], [4.64, 82.64, -12.75], [10.64, 82.64, -12.75], [16.64, 82.64, -12.75], [22.64, 82.64, -12.75], [28.64, 82.64, -12.75], [34.64, 82.64, -12.75], [40.64, 82.64, -12.75], [46.64, 82.64, -12.75], [52.64, 82.64, -12.75], [58.64, 82.64, -12.75], [64.64, 82.64, -12.75], [70.64, 82.64, -12.75], [76.64, 82.64, -12.75], [82.64, 82.64, -12.75], [88.64, 82.64, -12.75], [94.64, 82.64, -12.75], [100.64, 82.64, -12.75], [-97.36, 88.64, -12.75], [-91.36, 88.64, -12.75], [-85.36, 88.64, -12.75], [-79.36, 88.64, -12.75], [-73.36, 88.64, -12.75], [-67.36, 88.64, -12.75], [-61.36, 88.64, -12.75], [-55.36, 88.64, -12.75], [-49.36, 88.64, -12.75], [-43.36, 88.64, -12.75], [-37.36, 88.64, -12.75], [-31.36, 88.64, -12.75], [-25.36, 88.64, -12.75], [-19.36, 88.64, -12.75], [-13.36, 88.64, -12.75], [-7.36, 88.64, -12.75], [-1.36, 88.64, -12.75], [4.64, 88.64, -12.75], [10.64, 88.64, -12.75], [16.64, 88.64, -12.75], [22.64, 88.64, -12.75], [28.64, 88.64, -12.75], [34.64, 88.64, -12.75], [40.64, 88.64, -12.75], [46.64, 88.64, -12.75], [52.64, 88.64, -12.75], [58.64, 88.64, -12.75], [64.64, 88.64, -12.75], [70.64, 88.64, -12.75], [76.64, 88.64, -12.75], [82.64, 88.64, -12.75], [88.64, 88.64, -12.75], [94.64, 88.64, -12.75], [100.64, 88.64, -12.75], [-97.36, 94.64, -12.75], [-91.36, 94.64, -12.75], [-85.36, 94.64, -12.75], [-79.36, 94.64, -12.75], [-73.36, 94.64, -12.75], [-67.36, 94.64, -12.75], [-61.36, 94.64, -12.75], [-55.36, 94.64, -12.75], [-49.36, 94.64, -12.75], [-43.36, 94.64, -12.75], [-37.36, 94.64, -12.75], [-31.36, 94.64, -12.75], [-25.36, 94.64, -12.75], [-19.36, 94.64, -12.75], [-13.36, 94.64, -12.75], [-7.36, 94.64, -12.75], [-1.36, 94.64, -12.75], [4.64, 94.64, -12.75], [10.64, 94.64, -12.75], [16.64, 94.64, -12.75], [22.64, 94.64, -12.75], [28.64, 94.64, -12.75], [34.64, 94.64, -12.75], [40.64, 94.64, -12.75], [46.64, 94.64, -12.75], [52.64, 94.64, -12.75], [58.64, 94.64, -12.75], [64.64, 94.64, -12.75], [70.64, 94.64, -12.75], [76.64, 94.64, -12.75], [82.64, 94.64, -12.75], [88.64, 94.64, -12.75], [94.64, 94.64, -12.75], [100.64, 94.64, -12.75], [-97.36, 100.64, -12.75], [-91.36, 100.64, -12.75], [-85.36, 100.64, -12.75], [-79.36, 100.64, -12.75], [-73.36, 100.64, -12.75], [-67.36, 100.64, -12.75], [-61.36, 100.64, -12.75], [-55.36, 100.64, -12.75], [-49.36, 100.64, -12.75], [-43.36, 100.64, -12.75], [-37.36, 100.64, -12.75], [-31.36, 100.64, -12.75], [-25.36, 100.64, -12.75], [-19.36, 100.64, -12.75], [-13.36, 100.64, -12.75], [-7.36, 100.64, -12.75], [-1.36, 100.64, -12.75], [4.64, 100.64, -12.75], [10.64, 100.64, -12.75], [16.64, 100.64, -12.75], [22.64, 100.64, -12.75], [28.64, 100.64, -12.75], [34.64, 100.64, -12.75], [40.64, 100.64, -12.75], [46.64, 100.64, -12.75], [52.64, 100.64, -12.75], [58.64, 100.64, -12.75], [64.64, 100.64, -12.75], [70.64, 100.64, -12.75], [76.64, 100.64, -12.75], [-37.36, -103.36, -6.75], [-31.36, -103.36, -6.75], [-25.36, -103.36, -6.75], [-19.36, -103.36, -6.75], [-13.36, -103.36, -6.75], [-7.36, -103.36, -6.75], [-1.36, -103.36, -6.75], [4.64, -103.36, -6.75], [10.64, -103.36, -6.75], [16.64, -103.36, -6.75], [22.64, -103.36, -6.75], [28.64, -103.36, -6.75], [34.64, -103.36, -6.75], [40.64, -103.36, -6.75], [46.64, -103.36, -6.75], [52.64, -103.36, -6.75], [58.64, -103.36, -6.75], [64.64, -103.36, -6.75], [70.64, -103.36, -6.75], [76.64, -103.36, -6.75], [82.64, -103.36, -6.75], [88.64, -103.36, -6.75], [94.64, -103.36, -6.75], [-97.36, -97.36, -6.75], [-91.36, -97.36, -6.75], [-85.36, -97.36, -6.75], [-79.36, -97.36, -6.75], [-73.36, -97.36, -6.75], [-67.36, -97.36, -6.75], [-61.36, -97.36, -6.75], [-55.36, -97.36, -6.75], [-49.36, -97.36, -6.75], [-43.36, -97.36, -6.75], [-37.36, -97.36, -6.75], [-31.36, -97.36, -6.75], [-25.36, -97.36, -6.75], [-19.36, -97.36, -6.75], [-13.36, -97.36, -6.75], [-7.36, -97.36, -6.75], [-1.36, -97.36, -6.75], [4.64, -97.36, -6.75], [10.64, -97.36, -6.75], [16.64, -97.36, -6.75], [22.64, -97.36, -6.75], [28.64, -97.36, -6.75], [34.64, -97.36, -6.75], [40.64, -97.36, -6.75], [46.64, -97.36, -6.75], [52.64, -97.36, -6.75], [58.64, -97.36, -6.75], [64.64, -97.36, -6.75], [70.64, -97.36, -6.75], [76.64, -97.36, -6.75], [82.64, -97.36, -6.75], [88.64, -97.36, -6.75], [94.64, -97.36, -6.75], [-103.36, -91.36, -6.75], [-97.36, -91.36, -6.75], [-91.36, -91.36, -6.75], [-85.36, -91.36, -6.75], [-79.36, -91.36, -6.75], [-73.36, -91.36, -6.75], [-67.36, -91.36, -6.75], [-61.36, -91.36, -6.75], [-55.36, -91.36, -6.75], [-49.36, -91.36, -6.75], [-43.36, -91.36, -6.75], [-37.36, -91.36, -6.75], [-31.36, -91.36, -6.75], [-25.36, -91.36, -6.75], [-19.36, -91.36, -6.75], [-13.36, -91.36, -6.75], [-7.36, -91.36, -6.75], [-1.36, -91.36, -6.75], [4.64, -91.36, -6.75], [10.64, -91.36, -6.75], [16.64, -91.36, -6.75], [22.64, -91.36, -6.75], [28.64, -91.36, -6.75], [34.64, -91.36, -6.75], [40.64, -91.36, -6.75], [46.64, -91.36, -6.75], [52.64, -91.36, -6.75], [58.64, -91.36, -6.75], [64.64, -91.36, -6.75], [70.64, -91.36, -6.75], [76.64, -91.36, -6.75], [82.64, -91.36, -6.75], [88.64, -91.36, -6.75], [94.64, -91.36, -6.75], [100.64, -91.36, -6.75], [-103.36, -85.36, -6.75], [-97.36, -85.36, -6.75], [-91.36, -85.36, -6.75], [-85.36, -85.36, -6.75], [-79.36, -85.36, -6.75], [-73.36, -85.36, -6.75], [-67.36, -85.36, -6.75], [-61.36, -85.36, -6.75], [-55.36, -85.36, -6.75], [-49.36, -85.36, -6.75], [-43.36, -85.36, -6.75], [-37.36, -85.36, -6.75], [-31.36, -85.36, -6.75], [-25.36, -85.36, -6.75], [-19.36, -85.36, -6.75], [-13.36, -85.36, -6.75], [-7.36, -85.36, -6.75], [-1.36, -85.36, -6.75], [4.64, -85.36, -6.75], [10.64, -85.36, -6.75], [16.64, -85.36, -6.75], [22.64, -85.36, -6.75], [28.64, -85.36, -6.75], [34.64, -85.36, -6.75], [40.64, -85.36, -6.75], [46.64, -85.36, -6.75], [52.64, -85.36, -6.75], [58.64, -85.36, -6.75], [64.64, -85.36, -6.75], [70.64, -85.36, -6.75], [76.64, -85.36, -6.75], [82.64, -85.36, -6.75], [88.64, -85.36, -6.75], [94.64, -85.36, -6.75], [100.64, -85.36, -6.75], [-103.36, -79.36, -6.75], [-97.36, -79.36, -6.75], [-91.36, -79.36, -6.75], [-85.36, -79.36, -6.75], [-79.36, -79.36, -6.75], [-73.36, -79.36, -6.75], [-67.36, -79.36, -6.75], [-61.36, -79.36, -6.75], [-55.36, -79.36, -6.75], [-49.36, -79.36, -6.75], [-43.36, -79.36, -6.75], [-37.36, -79.36, -6.75], [-31.36, -79.36, -6.75], [-25.36, -79.36, -6.75], [-19.36, -79.36, -6.75], [-13.36, -79.36, -6.75], [-7.36, -79.36, -6.75], [-1.36, -79.36, -6.75], [4.64, -79.36, -6.75], [10.64, -79.36, -6.75], [16.64, -79.36, -6.75], [22.64, -79.36, -6.75], [28.64, -79.36, -6.75], [34.64, -79.36, -6.75], [40.64, -79.36, -6.75], [46.64, -79.36, -6.75], [52.64, -79.36, -6.75], [58.64, -79.36, -6.75], [64.64, -79.36, -6.75], [70.64, -79.36, -6.75], [76.64, -79.36, -6.75], [82.64, -79.36, -6.75], [88.64, -79.36, -6.75], [94.64, -79.36, -6.75], [100.64, -79.36, -6.75], [-103.36, -73.36, -6.75], [-97.36, -73.36, -6.75], [-91.36, -73.36, -6.75], [-85.36, -73.36, -6.75], [-79.36, -73.36, -6.75], [-73.36, -73.36, -6.75], [-67.36, -73.36, -6.75], [-61.36, -73.36, -6.75], [-55.36, -73.36, -6.75], [-49.36, -73.36, -6.75], [-43.36, -73.36, -6.75], [-37.36, -73.36, -6.75], [-31.36, -73.36, -6.75], [-25.36, -73.36, -6.75], [-19.36, -73.36, -6.75], [-13.36, -73.36, -6.75], [-7.36, -73.36, -6.75], [-1.36, -73.36, -6.75], [4.64, -73.36, -6.75], [10.64, -73.36, -6.75], [16.64, -73.36, -6.75], [22.64, -73.36, -6.75], [28.64, -73.36, -6.75], [34.64, -73.36, -6.75], [40.64, -73.36, -6.75], [46.64, -73.36, -6.75], [52.64, -73.36, -6.75], [58.64, -73.36, -6.75], [64.64, -73.36, -6.75], [70.64, -73.36, -6.75], [76.64, -73.36, -6.75], [82.64, -73.36, -6.75], [88.64, -73.36, -6.75], [94.64, -73.36, -6.75], [100.64, -73.36, -6.75], [-103.36, -67.36, -6.75], [-97.36, -67.36, -6.75], [-91.36, -67.36, -6.75], [-85.36, -67.36, -6.75], [-79.36, -67.36, -6.75], [-73.36, -67.36, -6.75], [-67.36, -67.36, -6.75], [-61.36, -67.36, -6.75], [-55.36, -67.36, -6.75], [-49.36, -67.36, -6.75], [-43.36, -67.36, -6.75], [-37.36, -67.36, -6.75], [-31.36, -67.36, -6.75], [-25.36, -67.36, -6.75], [-19.36, -67.36, -6.75], [-13.36, -67.36, -6.75], [-7.36, -67.36, -6.75], [-1.36, -67.36, -6.75], [4.64, -67.36, -6.75], [10.64, -67.36, -6.75], [16.64, -67.36, -6.75], [22.64, -67.36, -6.75], [28.64, -67.36, -6.75], [34.64, -67.36, -6.75], [40.64, -67.36, -6.75], [46.64, -67.36, -6.75], [52.64, -67.36, -6.75], [58.64, -67.36, -6.75], [64.64, -67.36, -6.75], [70.64, -67.36, -6.75], [76.64, -67.36, -6.75], [82.64, -67.36, -6.75], [88.64, -67.36, -6.75], [94.64, -67.36, -6.75], [100.64, -67.36, -6.75], [-103.36, -61.36, -6.75], [-97.36, -61.36, -6.75], [-91.36, -61.36, -6.75], [-85.36, -61.36, -6.75], [-79.36, -61.36, -6.75], [-73.36, -61.36, -6.75], [-67.36, -61.36, -6.75], [-61.36, -61.36, -6.75], [-55.36, -61.36, -6.75], [-49.36, -61.36, -6.75], [-43.36, -61.36, -6.75], [-37.36, -61.36, -6.75], [-31.36, -61.36, -6.75], [-25.36, -61.36, -6.75], [-19.36, -61.36, -6.75], [-13.36, -61.36, -6.75], [-7.36, -61.36, -6.75], [-1.36, -61.36, -6.75], [4.64, -61.36, -6.75], [10.64, -61.36, -6.75], [16.64, -61.36, -6.75], [22.64, -61.36, -6.75], [28.64, -61.36, -6.75], [34.64, -61.36, -6.75], [40.64, -61.36, -6.75], [46.64, -61.36, -6.75], [52.64, -61.36, -6.75], [58.64, -61.36, -6.75], [64.64, -61.36, -6.75], [70.64, -61.36, -6.75], [76.64, -61.36, -6.75], [82.64, -61.36, -6.75], [88.64, -61.36, -6.75], [94.64, -61.36, -6.75], [100.64, -61.36, -6.75], [-103.36, -55.36, -6.75], [-97.36, -55.36, -6.75], [-91.36, -55.36, -6.75], [-85.36, -55.36, -6.75], [-79.36, -55.36, -6.75], [-73.36, -55.36, -6.75], [-67.36, -55.36, -6.75], [-61.36, -55.36, -6.75], [-55.36, -55.36, -6.75], [-49.36, -55.36, -6.75], [-43.36, -55.36, -6.75], [-37.36, -55.36, -6.75], [-31.36, -55.36, -6.75], [-25.36, -55.36, -6.75], [-19.36, -55.36, -6.75], [-13.36, -55.36, -6.75], [-7.36, -55.36, -6.75], [-1.36, -55.36, -6.75], [4.64, -55.36, -6.75], [10.64, -55.36, -6.75], [16.64, -55.36, -6.75], [22.64, -55.36, -6.75], [28.64, -55.36, -6.75], [34.64, -55.36, -6.75], [40.64, -55.36, -6.75], [46.64, -55.36, -6.75], [52.64, -55.36, -6.75], [58.64, -55.36, -6.75], [64.64, -55.36, -6.75], [70.64, -55.36, -6.75], [76.64, -55.36, -6.75], [82.64, -55.36, -6.75], [88.64, -55.36, -6.75], [94.64, -55.36, -6.75], [100.64, -55.36, -6.75], [-103.36, -49.36, -6.75], [-97.36, -49.36, -6.75], [-91.36, -49.36, -6.75], [-85.36, -49.36, -6.75], [-79.36, -49.36, -6.75], [-73.36, -49.36, -6.75], [-67.36, -49.36, -6.75], [-61.36, -49.36, -6.75], [-55.36, -49.36, -6.75], [-49.36, -49.36, -6.75], [-43.36, -49.36, -6.75], [-37.36, -49.36, -6.75], [-31.36, -49.36, -6.75], [-25.36, -49.36, -6.75], [-19.36, -49.36, -6.75], [-13.36, -49.36, -6.75], [-7.36, -49.36, -6.75], [-1.36, -49.36, -6.75], [4.64, -49.36, -6.75], [10.64, -49.36, -6.75], [16.64, -49.36, -6.75], [22.64, -49.36, -6.75], [28.64, -49.36, -6.75], [34.64, -49.36, -6.75], [40.64, -49.36, -6.75], [46.64, -49.36, -6.75], [52.64, -49.36, -6.75], [58.64, -49.36, -6.75], [64.64, -49.36, -6.75], [70.64, -49.36, -6.75], [76.64, -49.36, -6.75], [82.64, -49.36, -6.75], [88.64, -49.36, -6.75], [94.64, -49.36, -6.75], [100.64, -49.36, -6.75], [-103.36, -43.36, -6.75], [-97.36, -43.36, -6.75], [-91.36, -43.36, -6.75], [-85.36, -43.36, -6.75], [-79.36, -43.36, -6.75], [-73.36, -43.36, -6.75], [-67.36, -43.36, -6.75], [-61.36, -43.36, -6.75], [-55.36, -43.36, -6.75], [-49.36, -43.36, -6.75], [-43.36, -43.36, -6.75], [-37.36, -43.36, -6.75], [-31.36, -43.36, -6.75], [-25.36, -43.36, -6.75], [-19.36, -43.36, -6.75], [-13.36, -43.36, -6.75], [-7.36, -43.36, -6.75], [-1.36, -43.36, -6.75], [4.64, -43.36, -6.75], [10.64, -43.36, -6.75], [16.64, -43.36, -6.75], [22.64, -43.36, -6.75], [28.64, -43.36, -6.75], [34.64, -43.36, -6.75], [40.64, -43.36, -6.75], [46.64, -43.36, -6.75], [52.64, -43.36, -6.75], [58.64, -43.36, -6.75], [64.64, -43.36, -6.75], [70.64, -43.36, -6.75], [76.64, -43.36, -6.75], [82.64, -43.36, -6.75], [88.64, -43.36, -6.75], [94.64, -43.36, -6.75], [100.64, -43.36, -6.75], [-103.36, -37.36, -6.75], [-97.36, -37.36, -6.75], [-91.36, -37.36, -6.75], [-85.36, -37.36, -6.75], [-79.36, -37.36, -6.75], [-73.36, -37.36, -6.75], [-67.36, -37.36, -6.75], [-61.36, -37.36, -6.75], [-55.36, -37.36, -6.75], [-49.36, -37.36, -6.75], [-43.36, -37.36, -6.75], [-37.36, -37.36, -6.75], [-31.36, -37.36, -6.75], [-25.36, -37.36, -6.75], [-19.36, -37.36, -6.75], [-13.36, -37.36, -6.75], [-7.36, -37.36, -6.75], [-1.36, -37.36, -6.75], [4.64, -37.36, -6.75], [10.64, -37.36, -6.75], [16.64, -37.36, -6.75], [22.64, -37.36, -6.75], [28.64, -37.36, -6.75], [34.64, -37.36, -6.75], [40.64, -37.36, -6.75], [46.64, -37.36, -6.75], [52.64, -37.36, -6.75], [58.64, -37.36, -6.75], [64.64, -37.36, -6.75], [70.64, -37.36, -6.75], [76.64, -37.36, -6.75], [82.64, -37.36, -6.75], [88.64, -37.36, -6.75], [94.64, -37.36, -6.75], [100.64, -37.36, -6.75], [-103.36, -31.36, -6.75], [-97.36, -31.36, -6.75], [-91.36, -31.36, -6.75], [-85.36, -31.36, -6.75], [-79.36, -31.36, -6.75], [-73.36, -31.36, -6.75], [-67.36, -31.36, -6.75], [-61.36, -31.36, -6.75], [-55.36, -31.36, -6.75], [-49.36, -31.36, -6.75], [-43.36, -31.36, -6.75], [-37.36, -31.36, -6.75], [-31.36, -31.36, -6.75], [-25.36, -31.36, -6.75], [-19.36, -31.36, -6.75], [-13.36, -31.36, -6.75], [-7.36, -31.36, -6.75], [-1.36, -31.36, -6.75], [4.64, -31.36, -6.75], [10.64, -31.36, -6.75], [16.64, -31.36, -6.75], [22.64, -31.36, -6.75], [28.64, -31.36, -6.75], [34.64, -31.36, -6.75], [40.64, -31.36, -6.75], [46.64, -31.36, -6.75], [52.64, -31.36, -6.75], [58.64, -31.36, -6.75], [64.64, -31.36, -6.75], [70.64, -31.36, -6.75], [76.64, -31.36, -6.75], [82.64, -31.36, -6.75], [88.64, -31.36, -6.75], [94.64, -31.36, -6.75], [100.64, -31.36, -6.75], [-103.36, -25.36, -6.75], [-97.36, -25.36, -6.75], [-91.36, -25.36, -6.75], [-85.36, -25.36, -6.75], [-79.36, -25.36, -6.75], [-73.36, -25.36, -6.75], [-67.36, -25.36, -6.75], [-61.36, -25.36, -6.75], [-55.36, -25.36, -6.75], [-49.36, -25.36, -6.75], [-43.36, -25.36, -6.75], [-37.36, -25.36, -6.75], [-31.36, -25.36, -6.75], [-25.36, -25.36, -6.75], [-19.36, -25.36, -6.75], [-13.36, -25.36, -6.75], [-7.36, -25.36, -6.75], [-1.36, -25.36, -6.75], [4.64, -25.36, -6.75], [10.64, -25.36, -6.75], [16.64, -25.36, -6.75], [22.64, -25.36, -6.75], [28.64, -25.36, -6.75], [34.64, -25.36, -6.75], [40.64, -25.36, -6.75], [46.64, -25.36, -6.75], [52.64, -25.36, -6.75], [58.64, -25.36, -6.75], [64.64, -25.36, -6.75], [70.64, -25.36, -6.75], [76.64, -25.36, -6.75], [82.64, -25.36, -6.75], [88.64, -25.36, -6.75], [94.64, -25.36, -6.75], [100.64, -25.36, -6.75], [-103.36, -19.36, -6.75], [-97.36, -19.36, -6.75], [-91.36, -19.36, -6.75], [-85.36, -19.36, -6.75], [-79.36, -19.36, -6.75], [-73.36, -19.36, -6.75], [-67.36, -19.36, -6.75], [-61.36, -19.36, -6.75], [-55.36, -19.36, -6.75], [-49.36, -19.36, -6.75], [-43.36, -19.36, -6.75], [-37.36, -19.36, -6.75], [-31.36, -19.36, -6.75], [-25.36, -19.36, -6.75], [-19.36, -19.36, -6.75], [-13.36, -19.36, -6.75], [-7.36, -19.36, -6.75], [-1.36, -19.36, -6.75], [4.64, -19.36, -6.75], [10.64, -19.36, -6.75], [16.64, -19.36, -6.75], [22.64, -19.36, -6.75], [28.64, -19.36, -6.75], [34.64, -19.36, -6.75], [40.64, -19.36, -6.75], [46.64, -19.36, -6.75], [52.64, -19.36, -6.75], [58.64, -19.36, -6.75], [64.64, -19.36, -6.75], [70.64, -19.36, -6.75], [76.64, -19.36, -6.75], [82.64, -19.36, -6.75], [88.64, -19.36, -6.75], [94.64, -19.36, -6.75], [100.64, -19.36, -6.75], [-103.36, -13.36, -6.75], [-97.36, -13.36, -6.75], [-91.36, -13.36, -6.75], [-85.36, -13.36, -6.75], [-79.36, -13.36, -6.75], [-73.36, -13.36, -6.75], [-67.36, -13.36, -6.75], [-61.36, -13.36, -6.75], [-55.36, -13.36, -6.75], [-49.36, -13.36, -6.75], [-43.36, -13.36, -6.75], [-37.36, -13.36, -6.75], [-31.36, -13.36, -6.75], [-25.36, -13.36, -6.75], [-19.36, -13.36, -6.75], [-13.36, -13.36, -6.75], [-7.36, -13.36, -6.75], [-1.36, -13.36, -6.75], [4.64, -13.36, -6.75], [10.64, -13.36, -6.75], [16.64, -13.36, -6.75], [22.64, -13.36, -6.75], [28.64, -13.36, -6.75], [34.64, -13.36, -6.75], [40.64, -13.36, -6.75], [46.64, -13.36, -6.75], [52.64, -13.36, -6.75], [58.64, -13.36, -6.75], [64.64, -13.36, -6.75], [70.64, -13.36, -6.75], [76.64, -13.36, -6.75], [82.64, -13.36, -6.75], [88.64, -13.36, -6.75], [94.64, -13.36, -6.75], [100.64, -13.36, -6.75], [-103.36, -7.36, -6.75], [-97.36, -7.36, -6.75], [-91.36, -7.36, -6.75], [-85.36, -7.36, -6.75], [-79.36, -7.36, -6.75], [-73.36, -7.36, -6.75], [-67.36, -7.36, -6.75], [-61.36, -7.36, -6.75], [-55.36, -7.36, -6.75], [-49.36, -7.36, -6.75], [-43.36, -7.36, -6.75], [-37.36, -7.36, -6.75], [-31.36, -7.36, -6.75], [-25.36, -7.36, -6.75], [-19.36, -7.36, -6.75], [-13.36, -7.36, -6.75], [-7.36, -7.36, -6.75], [-1.36, -7.36, -6.75], [4.64, -7.36, -6.75], [10.64, -7.36, -6.75], [16.64, -7.36, -6.75], [22.64, -7.36, -6.75], [28.64, -7.36, -6.75], [34.64, -7.36, -6.75], [40.64, -7.36, -6.75], [46.64, -7.36, -6.75], [52.64, -7.36, -6.75], [58.64, -7.36, -6.75], [64.64, -7.36, -6.75], [70.64, -7.36, -6.75], [76.64, -7.36, -6.75], [82.64, -7.36, -6.75], [88.64, -7.36, -6.75], [94.64, -7.36, -6.75], [100.64, -7.36, -6.75], [-103.36, -1.36, -6.75], [-97.36, -1.36, -6.75], [-91.36, -1.36, -6.75], [-85.36, -1.36, -6.75], [-79.36, -1.36, -6.75], [-73.36, -1.36, -6.75], [-67.36, -1.36, -6.75], [-61.36, -1.36, -6.75], [-55.36, -1.36, -6.75], [-49.36, -1.36, -6.75], [-43.36, -1.36, -6.75], [-37.36, -1.36, -6.75], [-31.36, -1.36, -6.75], [-25.36, -1.36, -6.75], [-19.36, -1.36, -6.75], [-13.36, -1.36, -6.75], [-7.36, -1.36, -6.75], [-1.36, -1.36, -6.75], [4.64, -1.36, -6.75], [10.64, -1.36, -6.75], [16.64, -1.36, -6.75], [22.64, -1.36, -6.75], [28.64, -1.36, -6.75], [34.64, -1.36, -6.75], [40.64, -1.36, -6.75], [46.64, -1.36, -6.75], [52.64, -1.36, -6.75], [58.64, -1.36, -6.75], [64.64, -1.36, -6.75], [70.64, -1.36, -6.75], [76.64, -1.36, -6.75], [82.64, -1.36, -6.75], [88.64, -1.36, -6.75], [94.64, -1.36, -6.75], [100.64, -1.36, -6.75], [-103.36, 4.64, -6.75], [-97.36, 4.64, -6.75], [-91.36, 4.64, -6.75], [-85.36, 4.64, -6.75], [-79.36, 4.64, -6.75], [-73.36, 4.64, -6.75], [-67.36, 4.64, -6.75], [-61.36, 4.64, -6.75], [-55.36, 4.64, -6.75], [-49.36, 4.64, -6.75], [-43.36, 4.64, -6.75], [-37.36, 4.64, -6.75], [-31.36, 4.64, -6.75], [-25.36, 4.64, -6.75], [-19.36, 4.64, -6.75], [-13.36, 4.64, -6.75], [-7.36, 4.64, -6.75], [-1.36, 4.64, -6.75], [4.64, 4.64, -6.75], [10.64, 4.64, -6.75], [16.64, 4.64, -6.75], [22.64, 4.64, -6.75], [28.64, 4.64, -6.75], [34.64, 4.64, -6.75], [40.64, 4.64, -6.75], [46.64, 4.64, -6.75], [52.64, 4.64, -6.75], [58.64, 4.64, -6.75], [64.64, 4.64, -6.75], [70.64, 4.64, -6.75], [76.64, 4.64, -6.75], [82.64, 4.64, -6.75], [88.64, 4.64, -6.75], [94.64, 4.64, -6.75], [100.64, 4.64, -6.75], [-103.36, 10.64, -6.75], [-97.36, 10.64, -6.75], [-91.36, 10.64, -6.75], [-85.36, 10.64, -6.75], [-79.36, 10.64, -6.75], [-73.36, 10.64, -6.75], [-67.36, 10.64, -6.75], [-61.36, 10.64, -6.75], [-55.36, 10.64, -6.75], [-49.36, 10.64, -6.75], [-43.36, 10.64, -6.75], [-37.36, 10.64, -6.75], [-31.36, 10.64, -6.75], [-25.36, 10.64, -6.75], [-19.36, 10.64, -6.75], [-13.36, 10.64, -6.75], [-7.36, 10.64, -6.75], [-1.36, 10.64, -6.75], [4.64, 10.64, -6.75], [10.64, 10.64, -6.75], [16.64, 10.64, -6.75], [22.64, 10.64, -6.75], [28.64, 10.64, -6.75], [34.64, 10.64, -6.75], [40.64, 10.64, -6.75], [46.64, 10.64, -6.75], [52.64, 10.64, -6.75], [58.64, 10.64, -6.75], [64.64, 10.64, -6.75], [70.64, 10.64, -6.75], [76.64, 10.64, -6.75], [82.64, 10.64, -6.75], [88.64, 10.64, -6.75], [94.64, 10.64, -6.75], [100.64, 10.64, -6.75], [-103.36, 16.64, -6.75], [-97.36, 16.64, -6.75], [-91.36, 16.64, -6.75], [-85.36, 16.64, -6.75], [-79.36, 16.64, -6.75], [-73.36, 16.64, -6.75], [-67.36, 16.64, -6.75], [-61.36, 16.64, -6.75], [-55.36, 16.64, -6.75], [-49.36, 16.64, -6.75], [-43.36, 16.64, -6.75], [-37.36, 16.64, -6.75], [-31.36, 16.64, -6.75], [-25.36, 16.64, -6.75], [-19.36, 16.64, -6.75], [-13.36, 16.64, -6.75], [-7.36, 16.64, -6.75], [-1.36, 16.64, -6.75], [4.64, 16.64, -6.75], [10.64, 16.64, -6.75], [16.64, 16.64, -6.75], [22.64, 16.64, -6.75], [28.64, 16.64, -6.75], [34.64, 16.64, -6.75], [40.64, 16.64, -6.75], [46.64, 16.64, -6.75], [52.64, 16.64, -6.75], [58.64, 16.64, -6.75], [64.64, 16.64, -6.75], [70.64, 16.64, -6.75], [76.64, 16.64, -6.75], [82.64, 16.64, -6.75], [88.64, 16.64, -6.75], [94.64, 16.64, -6.75], [100.64, 16.64, -6.75], [-103.36, 22.64, -6.75], [-97.36, 22.64, -6.75], [-91.36, 22.64, -6.75], [-85.36, 22.64, -6.75], [-79.36, 22.64, -6.75], [-73.36, 22.64, -6.75], [-67.36, 22.64, -6.75], [-61.36, 22.64, -6.75], [-55.36, 22.64, -6.75], [-49.36, 22.64, -6.75], [-43.36, 22.64, -6.75], [-37.36, 22.64, -6.75], [-31.36, 22.64, -6.75], [-25.36, 22.64, -6.75], [-19.36, 22.64, -6.75], [-13.36, 22.64, -6.75], [-7.36, 22.64, -6.75], [-1.36, 22.64, -6.75], [4.64, 22.64, -6.75], [10.64, 22.64, -6.75], [16.64, 22.64, -6.75], [22.64, 22.64, -6.75], [28.64, 22.64, -6.75], [34.64, 22.64, -6.75], [40.64, 22.64, -6.75], [46.64, 22.64, -6.75], [52.64, 22.64, -6.75], [58.64, 22.64, -6.75], [64.64, 22.64, -6.75], [70.64, 22.64, -6.75], [76.64, 22.64, -6.75], [82.64, 22.64, -6.75], [88.64, 22.64, -6.75], [94.64, 22.64, -6.75], [100.64, 22.64, -6.75], [-103.36, 28.64, -6.75], [-97.36, 28.64, -6.75], [-91.36, 28.64, -6.75], [-85.36, 28.64, -6.75], [-79.36, 28.64, -6.75], [-73.36, 28.64, -6.75], [-67.36, 28.64, -6.75], [-61.36, 28.64, -6.75], [-55.36, 28.64, -6.75], [-49.36, 28.64, -6.75], [-43.36, 28.64, -6.75], [-37.36, 28.64, -6.75], [-31.36, 28.64, -6.75], [-25.36, 28.64, -6.75], [-19.36, 28.64, -6.75], [-13.36, 28.64, -6.75], [-7.36, 28.64, -6.75], [-1.36, 28.64, -6.75], [4.64, 28.64, -6.75], [10.64, 28.64, -6.75], [16.64, 28.64, -6.75], [22.64, 28.64, -6.75], [28.64, 28.64, -6.75], [34.64, 28.64, -6.75], [40.64, 28.64, -6.75], [46.64, 28.64, -6.75], [52.64, 28.64, -6.75], [58.64, 28.64, -6.75], [64.64, 28.64, -6.75], [70.64, 28.64, -6.75], [76.64, 28.64, -6.75], [82.64, 28.64, -6.75], [88.64, 28.64, -6.75], [94.64, 28.64, -6.75], [100.64, 28.64, -6.75], [-103.36, 34.64, -6.75], [-97.36, 34.64, -6.75], [-91.36, 34.64, -6.75], [-85.36, 34.64, -6.75], [-79.36, 34.64, -6.75], [-73.36, 34.64, -6.75], [-67.36, 34.64, -6.75], [-61.36, 34.64, -6.75], [-55.36, 34.64, -6.75], [-49.36, 34.64, -6.75], [-43.36, 34.64, -6.75], [-37.36, 34.64, -6.75], [-31.36, 34.64, -6.75], [-25.36, 34.64, -6.75], [-19.36, 34.64, -6.75], [-13.36, 34.64, -6.75], [-7.36, 34.64, -6.75], [-1.36, 34.64, -6.75], [4.64, 34.64, -6.75], [10.64, 34.64, -6.75], [16.64, 34.64, -6.75], [22.64, 34.64, -6.75], [28.64, 34.64, -6.75], [34.64, 34.64, -6.75], [40.64, 34.64, -6.75], [46.64, 34.64, -6.75], [52.64, 34.64, -6.75], [58.64, 34.64, -6.75], [64.64, 34.64, -6.75], [70.64, 34.64, -6.75], [76.64, 34.64, -6.75], [82.64, 34.64, -6.75], [88.64, 34.64, -6.75], [94.64, 34.64, -6.75], [100.64, 34.64, -6.75], [-103.36, 40.64, -6.75], [-97.36, 40.64, -6.75], [-91.36, 40.64, -6.75], [-85.36, 40.64, -6.75], [-79.36, 40.64, -6.75], [-73.36, 40.64, -6.75], [-67.36, 40.64, -6.75], [-61.36, 40.64, -6.75], [-55.36, 40.64, -6.75], [-49.36, 40.64, -6.75], [-43.36, 40.64, -6.75], [-37.36, 40.64, -6.75], [-31.36, 40.64, -6.75], [-25.36, 40.64, -6.75], [-19.36, 40.64, -6.75], [-13.36, 40.64, -6.75], [-7.36, 40.64, -6.75], [-1.36, 40.64, -6.75], [4.64, 40.64, -6.75], [10.64, 40.64, -6.75], [16.64, 40.64, -6.75], [22.64, 40.64, -6.75], [28.64, 40.64, -6.75], [34.64, 40.64, -6.75], [40.64, 40.64, -6.75], [46.64, 40.64, -6.75], [52.64, 40.64, -6.75], [58.64, 40.64, -6.75], [64.64, 40.64, -6.75], [70.64, 40.64, -6.75], [76.64, 40.64, -6.75], [82.64, 40.64, -6.75], [88.64, 40.64, -6.75], [94.64, 40.64, -6.75], [100.64, 40.64, -6.75], [-103.36, 46.64, -6.75], [-97.36, 46.64, -6.75], [-91.36, 46.64, -6.75], [-85.36, 46.64, -6.75], [-79.36, 46.64, -6.75], [-73.36, 46.64, -6.75], [-67.36, 46.64, -6.75], [-61.36, 46.64, -6.75], [-55.36, 46.64, -6.75], [-49.36, 46.64, -6.75], [-43.36, 46.64, -6.75], [-37.36, 46.64, -6.75], [-31.36, 46.64, -6.75], [-25.36, 46.64, -6.75], [-19.36, 46.64, -6.75], [-13.36, 46.64, -6.75], [-7.36, 46.64, -6.75], [-1.36, 46.64, -6.75], [4.64, 46.64, -6.75], [10.64, 46.64, -6.75], [16.64, 46.64, -6.75], [22.64, 46.64, -6.75], [28.64, 46.64, -6.75], [34.64, 46.64, -6.75], [40.64, 46.64, -6.75], [46.64, 46.64, -6.75], [52.64, 46.64, -6.75], [58.64, 46.64, -6.75], [64.64, 46.64, -6.75], [70.64, 46.64, -6.75], [76.64, 46.64, -6.75], [82.64, 46.64, -6.75], [88.64, 46.64, -6.75], [94.64, 46.64, -6.75], [100.64, 46.64, -6.75], [-97.36, 52.64, -6.75], [-91.36, 52.64, -6.75], [-85.36, 52.64, -6.75], [-79.36, 52.64, -6.75], [-73.36, 52.64, -6.75], [-67.36, 52.64, -6.75], [-61.36, 52.64, -6.75], [-55.36, 52.64, -6.75], [-49.36, 52.64, -6.75], [-43.36, 52.64, -6.75], [-37.36, 52.64, -6.75], [-31.36, 52.64, -6.75], [-25.36, 52.64, -6.75], [-19.36, 52.64, -6.75], [-13.36, 52.64, -6.75], [-7.36, 52.64, -6.75], [-1.36, 52.64, -6.75], [4.64, 52.64, -6.75], [10.64, 52.64, -6.75], [16.64, 52.64, -6.75], [22.64, 52.64, -6.75], [28.64, 52.64, -6.75], [34.64, 52.64, -6.75], [40.64, 52.64, -6.75], [46.64, 52.64, -6.75], [52.64, 52.64, -6.75], [58.64, 52.64, -6.75], [64.64, 52.64, -6.75], [70.64, 52.64, -6.75], [76.64, 52.64, -6.75], [82.64, 52.64, -6.75], [88.64, 52.64, -6.75], [94.64, 52.64, -6.75], [100.64, 52.64, -6.75], [-97.36, 58.64, -6.75], [-91.36, 58.64, -6.75], [-85.36, 58.64, -6.75], [-79.36, 58.64, -6.75], [-73.36, 58.64, -6.75], [-67.36, 58.64, -6.75], [-61.36, 58.64, -6.75], [-55.36, 58.64, -6.75], [-49.36, 58.64, -6.75], [-43.36, 58.64, -6.75], [-37.36, 58.64, -6.75], [-31.36, 58.64, -6.75], [-25.36, 58.64, -6.75], [-19.36, 58.64, -6.75], [-13.36, 58.64, -6.75], [-7.36, 58.64, -6.75], [-1.36, 58.64, -6.75], [4.64, 58.64, -6.75], [10.64, 58.64, -6.75], [16.64, 58.64, -6.75], [22.64, 58.64, -6.75], [28.64, 58.64, -6.75], [34.64, 58.64, -6.75], [40.64, 58.64, -6.75], [46.64, 58.64, -6.75], [52.64, 58.64, -6.75], [58.64, 58.64, -6.75], [64.64, 58.64, -6.75], [70.64, 58.64, -6.75], [76.64, 58.64, -6.75], [82.64, 58.64, -6.75], [88.64, 58.64, -6.75], [94.64, 58.64, -6.75], [100.64, 58.64, -6.75], [-97.36, 64.64, -6.75], [-91.36, 64.64, -6.75], [-85.36, 64.64, -6.75], [-79.36, 64.64, -6.75], [-73.36, 64.64, -6.75], [-67.36, 64.64, -6.75], [-61.36, 64.64, -6.75], [-55.36, 64.64, -6.75], [-49.36, 64.64, -6.75], [-43.36, 64.64, -6.75], [-37.36, 64.64, -6.75], [-31.36, 64.64, -6.75], [-25.36, 64.64, -6.75], [-19.36, 64.64, -6.75], [-13.36, 64.64, -6.75], [-7.36, 64.64, -6.75], [-1.36, 64.64, -6.75], [4.64, 64.64, -6.75], [10.64, 64.64, -6.75], [16.64, 64.64, -6.75], [22.64, 64.64, -6.75], [28.64, 64.64, -6.75], [34.64, 64.64, -6.75], [40.64, 64.64, -6.75], [46.64, 64.64, -6.75], [52.64, 64.64, -6.75], [58.64, 64.64, -6.75], [64.64, 64.64, -6.75], [70.64, 64.64, -6.75], [76.64, 64.64, -6.75], [82.64, 64.64, -6.75], [88.64, 64.64, -6.75], [94.64, 64.64, -6.75], [100.64, 64.64, -6.75], [-97.36, 70.64, -6.75], [-91.36, 70.64, -6.75], [-85.36, 70.64, -6.75], [-79.36, 70.64, -6.75], [-73.36, 70.64, -6.75], [-67.36, 70.64, -6.75], [-61.36, 70.64, -6.75], [-55.36, 70.64, -6.75], [-49.36, 70.64, -6.75], [-43.36, 70.64, -6.75], [-37.36, 70.64, -6.75], [-31.36, 70.64, -6.75], [-25.36, 70.64, -6.75], [-19.36, 70.64, -6.75], [-13.36, 70.64, -6.75], [-7.36, 70.64, -6.75], [-1.36, 70.64, -6.75], [4.64, 70.64, -6.75], [10.64, 70.64, -6.75], [16.64, 70.64, -6.75], [22.64, 70.64, -6.75], [28.64, 70.64, -6.75], [34.64, 70.64, -6.75], [40.64, 70.64, -6.75], [46.64, 70.64, -6.75], [52.64, 70.64, -6.75], [58.64, 70.64, -6.75], [64.64, 70.64, -6.75], [70.64, 70.64, -6.75], [76.64, 70.64, -6.75], [82.64, 70.64, -6.75], [88.64, 70.64, -6.75], [94.64, 70.64, -6.75], [100.64, 70.64, -6.75], [-97.36, 76.64, -6.75], [-91.36, 76.64, -6.75], [-85.36, 76.64, -6.75], [-79.36, 76.64, -6.75], [-73.36, 76.64, -6.75], [-67.36, 76.64, -6.75], [-61.36, 76.64, -6.75], [-55.36, 76.64, -6.75], [-49.36, 76.64, -6.75], [-43.36, 76.64, -6.75], [-37.36, 76.64, -6.75], [-31.36, 76.64, -6.75], [-25.36, 76.64, -6.75], [-19.36, 76.64, -6.75], [-13.36, 76.64, -6.75], [-7.36, 76.64, -6.75], [-1.36, 76.64, -6.75], [4.64, 76.64, -6.75], [10.64, 76.64, -6.75], [16.64, 76.64, -6.75], [22.64, 76.64, -6.75], [28.64, 76.64, -6.75], [34.64, 76.64, -6.75], [40.64, 76.64, -6.75], [46.64, 76.64, -6.75], [52.64, 76.64, -6.75], [58.64, 76.64, -6.75], [64.64, 76.64, -6.75], [70.64, 76.64, -6.75], [76.64, 76.64, -6.75], [82.64, 76.64, -6.75], [88.64, 76.64, -6.75], [94.64, 76.64, -6.75], [100.64, 76.64, -6.75], [-97.36, 82.64, -6.75], [-91.36, 82.64, -6.75], [-85.36, 82.64, -6.75], [-79.36, 82.64, -6.75], [-73.36, 82.64, -6.75], [-67.36, 82.64, -6.75], [-61.36, 82.64, -6.75], [-55.36, 82.64, -6.75], [-49.36, 82.64, -6.75], [-43.36, 82.64, -6.75], [-37.36, 82.64, -6.75], [-31.36, 82.64, -6.75], [-25.36, 82.64, -6.75], [-19.36, 82.64, -6.75], [-13.36, 82.64, -6.75], [-7.36, 82.64, -6.75], [-1.36, 82.64, -6.75], [4.64, 82.64, -6.75], [10.64, 82.64, -6.75], [16.64, 82.64, -6.75], [22.64, 82.64, -6.75], [28.64, 82.64, -6.75], [34.64, 82.64, -6.75], [40.64, 82.64, -6.75], [46.64, 82.64, -6.75], [52.64, 82.64, -6.75], [58.64, 82.64, -6.75], [64.64, 82.64, -6.75], [70.64, 82.64, -6.75], [76.64, 82.64, -6.75], [82.64, 82.64, -6.75], [88.64, 82.64, -6.75], [94.64, 82.64, -6.75], [100.64, 82.64, -6.75], [-97.36, 88.64, -6.75], [-91.36, 88.64, -6.75], [-85.36, 88.64, -6.75], [-79.36, 88.64, -6.75], [-73.36, 88.64, -6.75], [-67.36, 88.64, -6.75], [-61.36, 88.64, -6.75], [-55.36, 88.64, -6.75], [-49.36, 88.64, -6.75], [-43.36, 88.64, -6.75], [-37.36, 88.64, -6.75], [-31.36, 88.64, -6.75], [-25.36, 88.64, -6.75], [-19.36, 88.64, -6.75], [-13.36, 88.64, -6.75], [-7.36, 88.64, -6.75], [-1.36, 88.64, -6.75], [4.64, 88.64, -6.75], [10.64, 88.64, -6.75], [16.64, 88.64, -6.75], [22.64, 88.64, -6.75], [28.64, 88.64, -6.75], [34.64, 88.64, -6.75], [40.64, 88.64, -6.75], [46.64, 88.64, -6.75], [52.64, 88.64, -6.75], [58.64, 88.64, -6.75], [64.64, 88.64, -6.75], [70.64, 88.64, -6.75], [76.64, 88.64, -6.75], [82.64, 88.64, -6.75], [88.64, 88.64, -6.75], [94.64, 88.64, -6.75], [100.64, 88.64, -6.75], [-97.36, 94.64, -6.75], [-91.36, 94.64, -6.75], [-85.36, 94.64, -6.75], [-79.36, 94.64, -6.75], [-73.36, 94.64, -6.75], [-67.36, 94.64, -6.75], [-61.36, 94.64, -6.75], [-55.36, 94.64, -6.75], [-49.36, 94.64, -6.75], [-43.36, 94.64, -6.75], [-37.36, 94.64, -6.75], [-31.36, 94.64, -6.75], [-25.36, 94.64, -6.75], [-19.36, 94.64, -6.75], [-13.36, 94.64, -6.75], [-7.36, 94.64, -6.75], [-1.36, 94.64, -6.75], [4.64, 94.64, -6.75], [10.64, 94.64, -6.75], [16.64, 94.64, -6.75], [22.64, 94.64, -6.75], [28.64, 94.64, -6.75], [34.64, 94.64, -6.75], [40.64, 94.64, -6.75], [46.64, 94.64, -6.75], [52.64, 94.64, -6.75], [58.64, 94.64, -6.75], [64.64, 94.64, -6.75], [70.64, 94.64, -6.75], [76.64, 94.64, -6.75], [82.64, 94.64, -6.75], [88.64, 94.64, -6.75], [94.64, 94.64, -6.75], [100.64, 94.64, -6.75], [-97.36, 100.64, -6.75], [-91.36, 100.64, -6.75], [-85.36, 100.64, -6.75], [-79.36, 100.64, -6.75], [-73.36, 100.64, -6.75], [-67.36, 100.64, -6.75], [-61.36, 100.64, -6.75], [-55.36, 100.64, -6.75], [-49.36, 100.64, -6.75], [-43.36, 100.64, -6.75], [-37.36, 100.64, -6.75], [-31.36, 100.64, -6.75], [-25.36, 100.64, -6.75], [-19.36, 100.64, -6.75], [-13.36, 100.64, -6.75], [-7.36, 100.64, -6.75], [-1.36, 100.64, -6.75], [4.64, 100.64, -6.75], [10.64, 100.64, -6.75], [16.64, 100.64, -6.75], [22.64, 100.64, -6.75], [28.64, 100.64, -6.75], [34.64, 100.64, -6.75], [40.64, 100.64, -6.75], [46.64, 100.64, -6.75], [52.64, 100.64, -6.75], [58.64, 100.64, -6.75], [64.64, 100.64, -6.75], [70.64, 100.64, -6.75], [76.64, 100.64, -6.75], [82.64, 100.64, -6.75], [88.64, 100.64, -6.75], [-37.36, -103.36, -0.75], [-31.36, -103.36, -0.75], [-25.36, -103.36, -0.75], [-19.36, -103.36, -0.75], [-13.36, -103.36, -0.75], [-7.36, -103.36, -0.75], [-1.36, -103.36, -0.75], [4.64, -103.36, -0.75], [10.64, -103.36, -0.75], [16.64, -103.36, -0.75], [22.64, -103.36, -0.75], [28.64, -103.36, -0.75], [34.64, -103.36, -0.75], [40.64, -103.36, -0.75], [46.64, -103.36, -0.75], [52.64, -103.36, -0.75], [58.64, -103.36, -0.75], [64.64, -103.36, -0.75], [70.64, -103.36, -0.75], [76.64, -103.36, -0.75], [82.64, -103.36, -0.75], [88.64, -103.36, -0.75], [94.64, -103.36, -0.75], [-97.36, -97.36, -0.75], [-91.36, -97.36, -0.75], [-85.36, -97.36, -0.75], [-79.36, -97.36, -0.75], [-73.36, -97.36, -0.75], [-67.36, -97.36, -0.75], [-61.36, -97.36, -0.75], [-55.36, -97.36, -0.75], [-49.36, -97.36, -0.75], [-43.36, -97.36, -0.75], [-37.36, -97.36, -0.75], [-31.36, -97.36, -0.75], [-25.36, -97.36, -0.75], [-19.36, -97.36, -0.75], [-13.36, -97.36, -0.75], [-7.36, -97.36, -0.75], [-1.36, -97.36, -0.75], [4.64, -97.36, -0.75], [10.64, -97.36, -0.75], [16.64, -97.36, -0.75], [22.64, -97.36, -0.75], [28.64, -97.36, -0.75], [34.64, -97.36, -0.75], [40.64, -97.36, -0.75], [46.64, -97.36, -0.75], [52.64, -97.36, -0.75], [58.64, -97.36, -0.75], [64.64, -97.36, -0.75], [70.64, -97.36, -0.75], [76.64, -97.36, -0.75], [82.64, -97.36, -0.75], [88.64, -97.36, -0.75], [94.64, -97.36, -0.75], [-103.36, -91.36, -0.75], [-97.36, -91.36, -0.75], [-91.36, -91.36, -0.75], [-85.36, -91.36, -0.75], [-79.36, -91.36, -0.75], [-73.36, -91.36, -0.75], [-67.36, -91.36, -0.75], [-61.36, -91.36, -0.75], [-55.36, -91.36, -0.75], [-49.36, -91.36, -0.75], [-43.36, -91.36, -0.75], [-37.36, -91.36, -0.75], [-31.36, -91.36, -0.75], [-25.36, -91.36, -0.75], [-19.36, -91.36, -0.75], [-13.36, -91.36, -0.75], [-7.36, -91.36, -0.75], [-1.36, -91.36, -0.75], [4.64, -91.36, -0.75], [10.64, -91.36, -0.75], [16.64, -91.36, -0.75], [22.64, -91.36, -0.75], [28.64, -91.36, -0.75], [34.64, -91.36, -0.75], [40.64, -91.36, -0.75], [46.64, -91.36, -0.75], [52.64, -91.36, -0.75], [58.64, -91.36, -0.75], [64.64, -91.36, -0.75], [70.64, -91.36, -0.75], [76.64, -91.36, -0.75], [82.64, -91.36, -0.75], [88.64, -91.36, -0.75], [94.64, -91.36, -0.75], [100.64, -91.36, -0.75], [-103.36, -85.36, -0.75], [-97.36, -85.36, -0.75], [-91.36, -85.36, -0.75], [-85.36, -85.36, -0.75], [-79.36, -85.36, -0.75], [-73.36, -85.36, -0.75], [-67.36, -85.36, -0.75], [-61.36, -85.36, -0.75], [-55.36, -85.36, -0.75], [-49.36, -85.36, -0.75], [-43.36, -85.36, -0.75], [-37.36, -85.36, -0.75], [-31.36, -85.36, -0.75], [-25.36, -85.36, -0.75], [-19.36, -85.36, -0.75], [-13.36, -85.36, -0.75], [-7.36, -85.36, -0.75], [-1.36, -85.36, -0.75], [4.64, -85.36, -0.75], [10.64, -85.36, -0.75], [16.64, -85.36, -0.75], [22.64, -85.36, -0.75], [28.64, -85.36, -0.75], [34.64, -85.36, -0.75], [40.64, -85.36, -0.75], [46.64, -85.36, -0.75], [52.64, -85.36, -0.75], [58.64, -85.36, -0.75], [64.64, -85.36, -0.75], [70.64, -85.36, -0.75], [76.64, -85.36, -0.75], [82.64, -85.36, -0.75], [88.64, -85.36, -0.75], [94.64, -85.36, -0.75], [100.64, -85.36, -0.75], [-103.36, -79.36, -0.75], [-97.36, -79.36, -0.75], [-91.36, -79.36, -0.75], [-85.36, -79.36, -0.75], [-79.36, -79.36, -0.75], [-73.36, -79.36, -0.75], [-67.36, -79.36, -0.75], [-61.36, -79.36, -0.75], [-55.36, -79.36, -0.75], [-49.36, -79.36, -0.75], [-43.36, -79.36, -0.75], [-37.36, -79.36, -0.75], [-31.36, -79.36, -0.75], [-25.36, -79.36, -0.75], [-19.36, -79.36, -0.75], [-13.36, -79.36, -0.75], [-7.36, -79.36, -0.75], [-1.36, -79.36, -0.75], [4.64, -79.36, -0.75], [10.64, -79.36, -0.75], [16.64, -79.36, -0.75], [22.64, -79.36, -0.75], [28.64, -79.36, -0.75], [34.64, -79.36, -0.75], [40.64, -79.36, -0.75], [46.64, -79.36, -0.75], [52.64, -79.36, -0.75], [58.64, -79.36, -0.75], [64.64, -79.36, -0.75], [70.64, -79.36, -0.75], [76.64, -79.36, -0.75], [82.64, -79.36, -0.75], [88.64, -79.36, -0.75], [94.64, -79.36, -0.75], [100.64, -79.36, -0.75], [-103.36, -73.36, -0.75], [-97.36, -73.36, -0.75], [-91.36, -73.36, -0.75], [-85.36, -73.36, -0.75], [-79.36, -73.36, -0.75], [-73.36, -73.36, -0.75], [-67.36, -73.36, -0.75], [-61.36, -73.36, -0.75], [-55.36, -73.36, -0.75], [-49.36, -73.36, -0.75], [-43.36, -73.36, -0.75], [-37.36, -73.36, -0.75], [-31.36, -73.36, -0.75], [-25.36, -73.36, -0.75], [-19.36, -73.36, -0.75], [-13.36, -73.36, -0.75], [-7.36, -73.36, -0.75], [-1.36, -73.36, -0.75], [4.64, -73.36, -0.75], [10.64, -73.36, -0.75], [16.64, -73.36, -0.75], [22.64, -73.36, -0.75], [28.64, -73.36, -0.75], [34.64, -73.36, -0.75], [40.64, -73.36, -0.75], [46.64, -73.36, -0.75], [52.64, -73.36, -0.75], [58.64, -73.36, -0.75], [64.64, -73.36, -0.75], [70.64, -73.36, -0.75], [76.64, -73.36, -0.75], [82.64, -73.36, -0.75], [88.64, -73.36, -0.75], [94.64, -73.36, -0.75], [100.64, -73.36, -0.75], [-103.36, -67.36, -0.75], [-97.36, -67.36, -0.75], [-91.36, -67.36, -0.75], [-85.36, -67.36, -0.75], [-79.36, -67.36, -0.75], [-73.36, -67.36, -0.75], [-67.36, -67.36, -0.75], [-61.36, -67.36, -0.75], [-55.36, -67.36, -0.75], [-49.36, -67.36, -0.75], [-43.36, -67.36, -0.75], [-37.36, -67.36, -0.75], [-31.36, -67.36, -0.75], [-25.36, -67.36, -0.75], [-19.36, -67.36, -0.75], [-13.36, -67.36, -0.75], [-7.36, -67.36, -0.75], [-1.36, -67.36, -0.75], [4.64, -67.36, -0.75], [10.64, -67.36, -0.75], [16.64, -67.36, -0.75], [22.64, -67.36, -0.75], [28.64, -67.36, -0.75], [34.64, -67.36, -0.75], [40.64, -67.36, -0.75], [46.64, -67.36, -0.75], [52.64, -67.36, -0.75], [58.64, -67.36, -0.75], [64.64, -67.36, -0.75], [70.64, -67.36, -0.75], [76.64, -67.36, -0.75], [82.64, -67.36, -0.75], [88.64, -67.36, -0.75], [94.64, -67.36, -0.75], [100.64, -67.36, -0.75], [-103.36, -61.36, -0.75], [-97.36, -61.36, -0.75], [-91.36, -61.36, -0.75], [-85.36, -61.36, -0.75], [-79.36, -61.36, -0.75], [-73.36, -61.36, -0.75], [-67.36, -61.36, -0.75], [-61.36, -61.36, -0.75], [-55.36, -61.36, -0.75], [-49.36, -61.36, -0.75], [-43.36, -61.36, -0.75], [-37.36, -61.36, -0.75], [-31.36, -61.36, -0.75], [-25.36, -61.36, -0.75], [-19.36, -61.36, -0.75], [-13.36, -61.36, -0.75], [-7.36, -61.36, -0.75], [-1.36, -61.36, -0.75], [4.64, -61.36, -0.75], [10.64, -61.36, -0.75], [16.64, -61.36, -0.75], [22.64, -61.36, -0.75], [28.64, -61.36, -0.75], [34.64, -61.36, -0.75], [40.64, -61.36, -0.75], [46.64, -61.36, -0.75], [52.64, -61.36, -0.75], [58.64, -61.36, -0.75], [64.64, -61.36, -0.75], [70.64, -61.36, -0.75], [76.64, -61.36, -0.75], [82.64, -61.36, -0.75], [88.64, -61.36, -0.75], [94.64, -61.36, -0.75], [100.64, -61.36, -0.75], [-103.36, -55.36, -0.75], [-97.36, -55.36, -0.75], [-91.36, -55.36, -0.75], [-85.36, -55.36, -0.75], [-79.36, -55.36, -0.75], [-73.36, -55.36, -0.75], [-67.36, -55.36, -0.75], [-61.36, -55.36, -0.75], [-55.36, -55.36, -0.75], [-49.36, -55.36, -0.75], [-43.36, -55.36, -0.75], [-37.36, -55.36, -0.75], [-31.36, -55.36, -0.75], [-25.36, -55.36, -0.75], [-19.36, -55.36, -0.75], [-13.36, -55.36, -0.75], [-7.36, -55.36, -0.75], [-1.36, -55.36, -0.75], [4.64, -55.36, -0.75], [10.64, -55.36, -0.75], [16.64, -55.36, -0.75], [22.64, -55.36, -0.75], [28.64, -55.36, -0.75], [34.64, -55.36, -0.75], [40.64, -55.36, -0.75], [46.64, -55.36, -0.75], [52.64, -55.36, -0.75], [58.64, -55.36, -0.75], [64.64, -55.36, -0.75], [70.64, -55.36, -0.75], [76.64, -55.36, -0.75], [82.64, -55.36, -0.75], [88.64, -55.36, -0.75], [94.64, -55.36, -0.75], [100.64, -55.36, -0.75], [-103.36, -49.36, -0.75], [-97.36, -49.36, -0.75], [-91.36, -49.36, -0.75], [-85.36, -49.36, -0.75], [-79.36, -49.36, -0.75], [-73.36, -49.36, -0.75], [-67.36, -49.36, -0.75], [-61.36, -49.36, -0.75], [-55.36, -49.36, -0.75], [-49.36, -49.36, -0.75], [-43.36, -49.36, -0.75], [-37.36, -49.36, -0.75], [-31.36, -49.36, -0.75], [-25.36, -49.36, -0.75], [-19.36, -49.36, -0.75], [-13.36, -49.36, -0.75], [-7.36, -49.36, -0.75], [-1.36, -49.36, -0.75], [4.64, -49.36, -0.75], [10.64, -49.36, -0.75], [16.64, -49.36, -0.75], [22.64, -49.36, -0.75], [28.64, -49.36, -0.75], [34.64, -49.36, -0.75], [40.64, -49.36, -0.75], [46.64, -49.36, -0.75], [52.64, -49.36, -0.75], [58.64, -49.36, -0.75], [64.64, -49.36, -0.75], [70.64, -49.36, -0.75], [76.64, -49.36, -0.75], [82.64, -49.36, -0.75], [88.64, -49.36, -0.75], [94.64, -49.36, -0.75], [100.64, -49.36, -0.75], [-103.36, -43.36, -0.75], [-97.36, -43.36, -0.75], [-91.36, -43.36, -0.75], [-85.36, -43.36, -0.75], [-79.36, -43.36, -0.75], [-73.36, -43.36, -0.75], [-67.36, -43.36, -0.75], [-61.36, -43.36, -0.75], [-55.36, -43.36, -0.75], [-49.36, -43.36, -0.75], [-43.36, -43.36, -0.75], [-37.36, -43.36, -0.75], [-31.36, -43.36, -0.75], [-25.36, -43.36, -0.75], [-19.36, -43.36, -0.75], [-13.36, -43.36, -0.75], [-7.36, -43.36, -0.75], [-1.36, -43.36, -0.75], [4.64, -43.36, -0.75], [10.64, -43.36, -0.75], [16.64, -43.36, -0.75], [22.64, -43.36, -0.75], [28.64, -43.36, -0.75], [34.64, -43.36, -0.75], [40.64, -43.36, -0.75], [46.64, -43.36, -0.75], [52.64, -43.36, -0.75], [58.64, -43.36, -0.75], [64.64, -43.36, -0.75], [70.64, -43.36, -0.75], [76.64, -43.36, -0.75], [82.64, -43.36, -0.75], [88.64, -43.36, -0.75], [94.64, -43.36, -0.75], [100.64, -43.36, -0.75], [-103.36, -37.36, -0.75], [-97.36, -37.36, -0.75], [-91.36, -37.36, -0.75], [-85.36, -37.36, -0.75], [-79.36, -37.36, -0.75], [-73.36, -37.36, -0.75], [-67.36, -37.36, -0.75], [-61.36, -37.36, -0.75], [-55.36, -37.36, -0.75], [-49.36, -37.36, -0.75], [-43.36, -37.36, -0.75], [-37.36, -37.36, -0.75], [-31.36, -37.36, -0.75], [-25.36, -37.36, -0.75], [-19.36, -37.36, -0.75], [-13.36, -37.36, -0.75], [-7.36, -37.36, -0.75], [-1.36, -37.36, -0.75], [4.64, -37.36, -0.75], [10.64, -37.36, -0.75], [16.64, -37.36, -0.75], [22.64, -37.36, -0.75], [28.64, -37.36, -0.75], [34.64, -37.36, -0.75], [40.64, -37.36, -0.75], [46.64, -37.36, -0.75], [52.64, -37.36, -0.75], [58.64, -37.36, -0.75], [64.64, -37.36, -0.75], [70.64, -37.36, -0.75], [76.64, -37.36, -0.75], [82.64, -37.36, -0.75], [88.64, -37.36, -0.75], [94.64, -37.36, -0.75], [100.64, -37.36, -0.75], [-103.36, -31.36, -0.75], [-97.36, -31.36, -0.75], [-91.36, -31.36, -0.75], [-85.36, -31.36, -0.75], [-79.36, -31.36, -0.75], [-73.36, -31.36, -0.75], [-67.36, -31.36, -0.75], [-61.36, -31.36, -0.75], [-55.36, -31.36, -0.75], [-49.36, -31.36, -0.75], [-43.36, -31.36, -0.75], [-37.36, -31.36, -0.75], [-31.36, -31.36, -0.75], [-25.36, -31.36, -0.75], [-19.36, -31.36, -0.75], [-13.36, -31.36, -0.75], [-7.36, -31.36, -0.75], [-1.36, -31.36, -0.75], [4.64, -31.36, -0.75], [10.64, -31.36, -0.75], [16.64, -31.36, -0.75], [22.64, -31.36, -0.75], [28.64, -31.36, -0.75], [34.64, -31.36, -0.75], [40.64, -31.36, -0.75], [46.64, -31.36, -0.75], [52.64, -31.36, -0.75], [58.64, -31.36, -0.75], [64.64, -31.36, -0.75], [70.64, -31.36, -0.75], [76.64, -31.36, -0.75], [82.64, -31.36, -0.75], [88.64, -31.36, -0.75], [94.64, -31.36, -0.75], [100.64, -31.36, -0.75], [-103.36, -25.36, -0.75], [-97.36, -25.36, -0.75], [-91.36, -25.36, -0.75], [-85.36, -25.36, -0.75], [-79.36, -25.36, -0.75], [-73.36, -25.36, -0.75], [-67.36, -25.36, -0.75], [-61.36, -25.36, -0.75], [-55.36, -25.36, -0.75], [-49.36, -25.36, -0.75], [-43.36, -25.36, -0.75], [-37.36, -25.36, -0.75], [-31.36, -25.36, -0.75], [-25.36, -25.36, -0.75], [-19.36, -25.36, -0.75], [-13.36, -25.36, -0.75], [-7.36, -25.36, -0.75], [-1.36, -25.36, -0.75], [4.64, -25.36, -0.75], [10.64, -25.36, -0.75], [16.64, -25.36, -0.75], [22.64, -25.36, -0.75], [28.64, -25.36, -0.75], [34.64, -25.36, -0.75], [40.64, -25.36, -0.75], [46.64, -25.36, -0.75], [52.64, -25.36, -0.75], [58.64, -25.36, -0.75], [64.64, -25.36, -0.75], [70.64, -25.36, -0.75], [76.64, -25.36, -0.75], [82.64, -25.36, -0.75], [88.64, -25.36, -0.75], [94.64, -25.36, -0.75], [100.64, -25.36, -0.75], [-103.36, -19.36, -0.75], [-97.36, -19.36, -0.75], [-91.36, -19.36, -0.75], [-85.36, -19.36, -0.75], [-79.36, -19.36, -0.75], [-73.36, -19.36, -0.75], [-67.36, -19.36, -0.75], [-61.36, -19.36, -0.75], [-55.36, -19.36, -0.75], [-49.36, -19.36, -0.75], [-43.36, -19.36, -0.75], [-37.36, -19.36, -0.75], [-31.36, -19.36, -0.75], [-25.36, -19.36, -0.75], [-19.36, -19.36, -0.75], [-13.36, -19.36, -0.75], [-7.36, -19.36, -0.75], [-1.36, -19.36, -0.75], [4.64, -19.36, -0.75], [10.64, -19.36, -0.75], [16.64, -19.36, -0.75], [22.64, -19.36, -0.75], [28.64, -19.36, -0.75], [34.64, -19.36, -0.75], [40.64, -19.36, -0.75], [46.64, -19.36, -0.75], [52.64, -19.36, -0.75], [58.64, -19.36, -0.75], [64.64, -19.36, -0.75], [70.64, -19.36, -0.75], [76.64, -19.36, -0.75], [82.64, -19.36, -0.75], [88.64, -19.36, -0.75], [94.64, -19.36, -0.75], [100.64, -19.36, -0.75], [-103.36, -13.36, -0.75], [-97.36, -13.36, -0.75], [-91.36, -13.36, -0.75], [-85.36, -13.36, -0.75], [-79.36, -13.36, -0.75], [-73.36, -13.36, -0.75], [-67.36, -13.36, -0.75], [-61.36, -13.36, -0.75], [-55.36, -13.36, -0.75], [-49.36, -13.36, -0.75], [-43.36, -13.36, -0.75], [-37.36, -13.36, -0.75], [-31.36, -13.36, -0.75], [-25.36, -13.36, -0.75], [-19.36, -13.36, -0.75], [-13.36, -13.36, -0.75], [-7.36, -13.36, -0.75], [-1.36, -13.36, -0.75], [4.64, -13.36, -0.75], [10.64, -13.36, -0.75], [16.64, -13.36, -0.75], [22.64, -13.36, -0.75], [28.64, -13.36, -0.75], [34.64, -13.36, -0.75], [40.64, -13.36, -0.75], [46.64, -13.36, -0.75], [52.64, -13.36, -0.75], [58.64, -13.36, -0.75], [64.64, -13.36, -0.75], [70.64, -13.36, -0.75], [76.64, -13.36, -0.75], [82.64, -13.36, -0.75], [88.64, -13.36, -0.75], [94.64, -13.36, -0.75], [100.64, -13.36, -0.75], [-103.36, -7.36, -0.75], [-97.36, -7.36, -0.75], [-91.36, -7.36, -0.75], [-85.36, -7.36, -0.75], [-79.36, -7.36, -0.75], [-73.36, -7.36, -0.75], [-67.36, -7.36, -0.75], [-61.36, -7.36, -0.75], [-55.36, -7.36, -0.75], [-49.36, -7.36, -0.75], [-43.36, -7.36, -0.75], [-37.36, -7.36, -0.75], [-31.36, -7.36, -0.75], [-25.36, -7.36, -0.75], [-19.36, -7.36, -0.75], [-13.36, -7.36, -0.75], [-7.36, -7.36, -0.75], [-1.36, -7.36, -0.75], [4.64, -7.36, -0.75], [10.64, -7.36, -0.75], [16.64, -7.36, -0.75], [22.64, -7.36, -0.75], [28.64, -7.36, -0.75], [34.64, -7.36, -0.75], [40.64, -7.36, -0.75], [46.64, -7.36, -0.75], [52.64, -7.36, -0.75], [58.64, -7.36, -0.75], [64.64, -7.36, -0.75], [70.64, -7.36, -0.75], [76.64, -7.36, -0.75], [82.64, -7.36, -0.75], [88.64, -7.36, -0.75], [94.64, -7.36, -0.75], [100.64, -7.36, -0.75], [-103.36, -1.36, -0.75], [-97.36, -1.36, -0.75], [-91.36, -1.36, -0.75], [-85.36, -1.36, -0.75], [-79.36, -1.36, -0.75], [-73.36, -1.36, -0.75], [-67.36, -1.36, -0.75], [-61.36, -1.36, -0.75], [-55.36, -1.36, -0.75], [-49.36, -1.36, -0.75], [-43.36, -1.36, -0.75], [-37.36, -1.36, -0.75], [-31.36, -1.36, -0.75], [-25.36, -1.36, -0.75], [-19.36, -1.36, -0.75], [-13.36, -1.36, -0.75], [-7.36, -1.36, -0.75], [-1.36, -1.36, -0.75], [4.64, -1.36, -0.75], [10.64, -1.36, -0.75], [16.64, -1.36, -0.75], [22.64, -1.36, -0.75], [28.64, -1.36, -0.75], [34.64, -1.36, -0.75], [40.64, -1.36, -0.75], [46.64, -1.36, -0.75], [52.64, -1.36, -0.75], [58.64, -1.36, -0.75], [64.64, -1.36, -0.75], [70.64, -1.36, -0.75], [76.64, -1.36, -0.75], [82.64, -1.36, -0.75], [88.64, -1.36, -0.75], [94.64, -1.36, -0.75], [100.64, -1.36, -0.75], [-103.36, 4.64, -0.75], [-97.36, 4.64, -0.75], [-91.36, 4.64, -0.75], [-85.36, 4.64, -0.75], [-79.36, 4.64, -0.75], [-73.36, 4.64, -0.75], [-67.36, 4.64, -0.75], [-61.36, 4.64, -0.75], [-55.36, 4.64, -0.75], [-49.36, 4.64, -0.75], [-43.36, 4.64, -0.75], [-37.36, 4.64, -0.75], [-31.36, 4.64, -0.75], [-25.36, 4.64, -0.75], [-19.36, 4.64, -0.75], [-13.36, 4.64, -0.75], [-7.36, 4.64, -0.75], [-1.36, 4.64, -0.75], [4.64, 4.64, -0.75], [10.64, 4.64, -0.75], [16.64, 4.64, -0.75], [22.64, 4.64, -0.75], [28.64, 4.64, -0.75], [34.64, 4.64, -0.75], [40.64, 4.64, -0.75], [46.64, 4.64, -0.75], [52.64, 4.64, -0.75], [58.64, 4.64, -0.75], [64.64, 4.64, -0.75], [70.64, 4.64, -0.75], [76.64, 4.64, -0.75], [82.64, 4.64, -0.75], [88.64, 4.64, -0.75], [94.64, 4.64, -0.75], [100.64, 4.64, -0.75], [-103.36, 10.64, -0.75], [-97.36, 10.64, -0.75], [-91.36, 10.64, -0.75], [-85.36, 10.64, -0.75], [-79.36, 10.64, -0.75], [-73.36, 10.64, -0.75], [-67.36, 10.64, -0.75], [-61.36, 10.64, -0.75], [-55.36, 10.64, -0.75], [-49.36, 10.64, -0.75], [-43.36, 10.64, -0.75], [-37.36, 10.64, -0.75], [-31.36, 10.64, -0.75], [-25.36, 10.64, -0.75], [-19.36, 10.64, -0.75], [-13.36, 10.64, -0.75], [-7.36, 10.64, -0.75], [-1.36, 10.64, -0.75], [4.64, 10.64, -0.75], [10.64, 10.64, -0.75], [16.64, 10.64, -0.75], [22.64, 10.64, -0.75], [28.64, 10.64, -0.75], [34.64, 10.64, -0.75], [40.64, 10.64, -0.75], [46.64, 10.64, -0.75], [52.64, 10.64, -0.75], [58.64, 10.64, -0.75], [64.64, 10.64, -0.75], [70.64, 10.64, -0.75], [76.64, 10.64, -0.75], [82.64, 10.64, -0.75], [88.64, 10.64, -0.75], [94.64, 10.64, -0.75], [100.64, 10.64, -0.75], [-103.36, 16.64, -0.75], [-97.36, 16.64, -0.75], [-91.36, 16.64, -0.75], [-85.36, 16.64, -0.75], [-79.36, 16.64, -0.75], [-73.36, 16.64, -0.75], [-67.36, 16.64, -0.75], [-61.36, 16.64, -0.75], [-55.36, 16.64, -0.75], [-49.36, 16.64, -0.75], [-43.36, 16.64, -0.75], [-37.36, 16.64, -0.75], [-31.36, 16.64, -0.75], [-25.36, 16.64, -0.75], [-19.36, 16.64, -0.75], [-13.36, 16.64, -0.75], [-7.36, 16.64, -0.75], [-1.36, 16.64, -0.75], [4.64, 16.64, -0.75], [10.64, 16.64, -0.75], [16.64, 16.64, -0.75], [22.64, 16.64, -0.75], [28.64, 16.64, -0.75], [34.64, 16.64, -0.75], [40.64, 16.64, -0.75], [46.64, 16.64, -0.75], [52.64, 16.64, -0.75], [58.64, 16.64, -0.75], [64.64, 16.64, -0.75], [70.64, 16.64, -0.75], [76.64, 16.64, -0.75], [82.64, 16.64, -0.75], [88.64, 16.64, -0.75], [94.64, 16.64, -0.75], [100.64, 16.64, -0.75], [-103.36, 22.64, -0.75], [-97.36, 22.64, -0.75], [-91.36, 22.64, -0.75], [-85.36, 22.64, -0.75], [-79.36, 22.64, -0.75], [-73.36, 22.64, -0.75], [-67.36, 22.64, -0.75], [-61.36, 22.64, -0.75], [-55.36, 22.64, -0.75], [-49.36, 22.64, -0.75], [-43.36, 22.64, -0.75], [-37.36, 22.64, -0.75], [-31.36, 22.64, -0.75], [-25.36, 22.64, -0.75], [-19.36, 22.64, -0.75], [-13.36, 22.64, -0.75], [-7.36, 22.64, -0.75], [-1.36, 22.64, -0.75], [4.64, 22.64, -0.75], [10.64, 22.64, -0.75], [16.64, 22.64, -0.75], [22.64, 22.64, -0.75], [28.64, 22.64, -0.75], [34.64, 22.64, -0.75], [40.64, 22.64, -0.75], [46.64, 22.64, -0.75], [52.64, 22.64, -0.75], [58.64, 22.64, -0.75], [64.64, 22.64, -0.75], [70.64, 22.64, -0.75], [76.64, 22.64, -0.75], [82.64, 22.64, -0.75], [88.64, 22.64, -0.75], [94.64, 22.64, -0.75], [100.64, 22.64, -0.75], [-103.36, 28.64, -0.75], [-97.36, 28.64, -0.75], [-91.36, 28.64, -0.75], [-85.36, 28.64, -0.75], [-79.36, 28.64, -0.75], [-73.36, 28.64, -0.75], [-67.36, 28.64, -0.75], [-61.36, 28.64, -0.75], [-55.36, 28.64, -0.75], [-49.36, 28.64, -0.75], [-43.36, 28.64, -0.75], [-37.36, 28.64, -0.75], [-31.36, 28.64, -0.75], [-25.36, 28.64, -0.75], [-19.36, 28.64, -0.75], [-13.36, 28.64, -0.75], [-7.36, 28.64, -0.75], [-1.36, 28.64, -0.75], [4.64, 28.64, -0.75], [10.64, 28.64, -0.75], [16.64, 28.64, -0.75], [22.64, 28.64, -0.75], [28.64, 28.64, -0.75], [34.64, 28.64, -0.75], [40.64, 28.64, -0.75], [46.64, 28.64, -0.75], [52.64, 28.64, -0.75], [58.64, 28.64, -0.75], [64.64, 28.64, -0.75], [70.64, 28.64, -0.75], [76.64, 28.64, -0.75], [82.64, 28.64, -0.75], [88.64, 28.64, -0.75], [94.64, 28.64, -0.75], [100.64, 28.64, -0.75], [-103.36, 34.64, -0.75], [-97.36, 34.64, -0.75], [-91.36, 34.64, -0.75], [-85.36, 34.64, -0.75], [-79.36, 34.64, -0.75], [-73.36, 34.64, -0.75], [-67.36, 34.64, -0.75], [-61.36, 34.64, -0.75], [-55.36, 34.64, -0.75], [-49.36, 34.64, -0.75], [-43.36, 34.64, -0.75], [-37.36, 34.64, -0.75], [-31.36, 34.64, -0.75], [-25.36, 34.64, -0.75], [-19.36, 34.64, -0.75], [-13.36, 34.64, -0.75], [-7.36, 34.64, -0.75], [-1.36, 34.64, -0.75], [4.64, 34.64, -0.75], [10.64, 34.64, -0.75], [16.64, 34.64, -0.75], [22.64, 34.64, -0.75], [28.64, 34.64, -0.75], [34.64, 34.64, -0.75], [40.64, 34.64, -0.75], [46.64, 34.64, -0.75], [52.64, 34.64, -0.75], [58.64, 34.64, -0.75], [64.64, 34.64, -0.75], [70.64, 34.64, -0.75], [76.64, 34.64, -0.75], [82.64, 34.64, -0.75], [88.64, 34.64, -0.75], [94.64, 34.64, -0.75], [100.64, 34.64, -0.75], [-103.36, 40.64, -0.75], [-97.36, 40.64, -0.75], [-91.36, 40.64, -0.75], [-85.36, 40.64, -0.75], [-79.36, 40.64, -0.75], [-73.36, 40.64, -0.75], [-67.36, 40.64, -0.75], [-61.36, 40.64, -0.75], [-55.36, 40.64, -0.75], [-49.36, 40.64, -0.75], [-43.36, 40.64, -0.75], [-37.36, 40.64, -0.75], [-31.36, 40.64, -0.75], [-25.36, 40.64, -0.75], [-19.36, 40.64, -0.75], [-13.36, 40.64, -0.75], [-7.36, 40.64, -0.75], [-1.36, 40.64, -0.75], [4.64, 40.64, -0.75], [10.64, 40.64, -0.75], [16.64, 40.64, -0.75], [22.64, 40.64, -0.75], [28.64, 40.64, -0.75], [34.64, 40.64, -0.75], [40.64, 40.64, -0.75], [46.64, 40.64, -0.75], [52.64, 40.64, -0.75], [58.64, 40.64, -0.75], [64.64, 40.64, -0.75], [70.64, 40.64, -0.75], [76.64, 40.64, -0.75], [82.64, 40.64, -0.75], [88.64, 40.64, -0.75], [94.64, 40.64, -0.75], [100.64, 40.64, -0.75], [-103.36, 46.64, -0.75], [-97.36, 46.64, -0.75], [-91.36, 46.64, -0.75], [-85.36, 46.64, -0.75], [-79.36, 46.64, -0.75], [-73.36, 46.64, -0.75], [-67.36, 46.64, -0.75], [-61.36, 46.64, -0.75], [-55.36, 46.64, -0.75], [-49.36, 46.64, -0.75], [-43.36, 46.64, -0.75], [-37.36, 46.64, -0.75], [-31.36, 46.64, -0.75], [-25.36, 46.64, -0.75], [-19.36, 46.64, -0.75], [-13.36, 46.64, -0.75], [-7.36, 46.64, -0.75], [-1.36, 46.64, -0.75], [4.64, 46.64, -0.75], [10.64, 46.64, -0.75], [16.64, 46.64, -0.75], [22.64, 46.64, -0.75], [28.64, 46.64, -0.75], [34.64, 46.64, -0.75], [40.64, 46.64, -0.75], [46.64, 46.64, -0.75], [52.64, 46.64, -0.75], [58.64, 46.64, -0.75], [64.64, 46.64, -0.75], [70.64, 46.64, -0.75], [76.64, 46.64, -0.75], [82.64, 46.64, -0.75], [88.64, 46.64, -0.75], [94.64, 46.64, -0.75], [100.64, 46.64, -0.75], [-97.36, 52.64, -0.75], [-91.36, 52.64, -0.75], [-85.36, 52.64, -0.75], [-79.36, 52.64, -0.75], [-73.36, 52.64, -0.75], [-67.36, 52.64, -0.75], [-61.36, 52.64, -0.75], [-55.36, 52.64, -0.75], [-49.36, 52.64, -0.75], [-43.36, 52.64, -0.75], [-37.36, 52.64, -0.75], [-31.36, 52.64, -0.75], [-25.36, 52.64, -0.75], [-19.36, 52.64, -0.75], [-13.36, 52.64, -0.75], [-7.36, 52.64, -0.75], [-1.36, 52.64, -0.75], [4.64, 52.64, -0.75], [10.64, 52.64, -0.75], [16.64, 52.64, -0.75], [22.64, 52.64, -0.75], [28.64, 52.64, -0.75], [34.64, 52.64, -0.75], [40.64, 52.64, -0.75], [46.64, 52.64, -0.75], [52.64, 52.64, -0.75], [58.64, 52.64, -0.75], [64.64, 52.64, -0.75], [70.64, 52.64, -0.75], [76.64, 52.64, -0.75], [82.64, 52.64, -0.75], [88.64, 52.64, -0.75], [94.64, 52.64, -0.75], [100.64, 52.64, -0.75], [-97.36, 58.64, -0.75], [-91.36, 58.64, -0.75], [-85.36, 58.64, -0.75], [-79.36, 58.64, -0.75], [-73.36, 58.64, -0.75], [-67.36, 58.64, -0.75], [-61.36, 58.64, -0.75], [-55.36, 58.64, -0.75], [-49.36, 58.64, -0.75], [-43.36, 58.64, -0.75], [-37.36, 58.64, -0.75], [-31.36, 58.64, -0.75], [-25.36, 58.64, -0.75], [-19.36, 58.64, -0.75], [-13.36, 58.64, -0.75], [-7.36, 58.64, -0.75], [-1.36, 58.64, -0.75], [4.64, 58.64, -0.75], [10.64, 58.64, -0.75], [16.64, 58.64, -0.75], [22.64, 58.64, -0.75], [28.64, 58.64, -0.75], [34.64, 58.64, -0.75], [40.64, 58.64, -0.75], [46.64, 58.64, -0.75], [52.64, 58.64, -0.75], [58.64, 58.64, -0.75], [64.64, 58.64, -0.75], [70.64, 58.64, -0.75], [76.64, 58.64, -0.75], [82.64, 58.64, -0.75], [88.64, 58.64, -0.75], [94.64, 58.64, -0.75], [100.64, 58.64, -0.75], [-97.36, 64.64, -0.75], [-91.36, 64.64, -0.75], [-85.36, 64.64, -0.75], [-79.36, 64.64, -0.75], [-73.36, 64.64, -0.75], [-67.36, 64.64, -0.75], [-61.36, 64.64, -0.75], [-55.36, 64.64, -0.75], [-49.36, 64.64, -0.75], [-43.36, 64.64, -0.75], [-37.36, 64.64, -0.75], [-31.36, 64.64, -0.75], [-25.36, 64.64, -0.75], [-19.36, 64.64, -0.75], [-13.36, 64.64, -0.75], [-7.36, 64.64, -0.75], [-1.36, 64.64, -0.75], [4.64, 64.64, -0.75], [10.64, 64.64, -0.75], [16.64, 64.64, -0.75], [22.64, 64.64, -0.75], [28.64, 64.64, -0.75], [34.64, 64.64, -0.75], [40.64, 64.64, -0.75], [46.64, 64.64, -0.75], [52.64, 64.64, -0.75], [58.64, 64.64, -0.75], [64.64, 64.64, -0.75], [70.64, 64.64, -0.75], [76.64, 64.64, -0.75], [82.64, 64.64, -0.75], [88.64, 64.64, -0.75], [94.64, 64.64, -0.75], [100.64, 64.64, -0.75], [-97.36, 70.64, -0.75], [-91.36, 70.64, -0.75], [-85.36, 70.64, -0.75], [-79.36, 70.64, -0.75], [-73.36, 70.64, -0.75], [-67.36, 70.64, -0.75], [-61.36, 70.64, -0.75], [-55.36, 70.64, -0.75], [-49.36, 70.64, -0.75], [-43.36, 70.64, -0.75], [-37.36, 70.64, -0.75], [-31.36, 70.64, -0.75], [-25.36, 70.64, -0.75], [-19.36, 70.64, -0.75], [-13.36, 70.64, -0.75], [-7.36, 70.64, -0.75], [-1.36, 70.64, -0.75], [4.64, 70.64, -0.75], [10.64, 70.64, -0.75], [16.64, 70.64, -0.75], [22.64, 70.64, -0.75], [28.64, 70.64, -0.75], [34.64, 70.64, -0.75], [40.64, 70.64, -0.75], [46.64, 70.64, -0.75], [52.64, 70.64, -0.75], [58.64, 70.64, -0.75], [64.64, 70.64, -0.75], [70.64, 70.64, -0.75], [76.64, 70.64, -0.75], [82.64, 70.64, -0.75], [88.64, 70.64, -0.75], [94.64, 70.64, -0.75], [100.64, 70.64, -0.75], [-97.36, 76.64, -0.75], [-91.36, 76.64, -0.75], [-85.36, 76.64, -0.75], [-79.36, 76.64, -0.75], [-73.36, 76.64, -0.75], [-67.36, 76.64, -0.75], [-61.36, 76.64, -0.75], [-55.36, 76.64, -0.75], [-49.36, 76.64, -0.75], [-43.36, 76.64, -0.75], [-37.36, 76.64, -0.75], [-31.36, 76.64, -0.75], [-25.36, 76.64, -0.75], [-19.36, 76.64, -0.75], [-13.36, 76.64, -0.75], [-7.36, 76.64, -0.75], [-1.36, 76.64, -0.75], [4.64, 76.64, -0.75], [10.64, 76.64, -0.75], [16.64, 76.64, -0.75], [22.64, 76.64, -0.75], [28.64, 76.64, -0.75], [34.64, 76.64, -0.75], [40.64, 76.64, -0.75], [46.64, 76.64, -0.75], [52.64, 76.64, -0.75], [58.64, 76.64, -0.75], [64.64, 76.64, -0.75], [70.64, 76.64, -0.75], [76.64, 76.64, -0.75], [82.64, 76.64, -0.75], [88.64, 76.64, -0.75], [94.64, 76.64, -0.75], [100.64, 76.64, -0.75], [-97.36, 82.64, -0.75], [-91.36, 82.64, -0.75], [-85.36, 82.64, -0.75], [-79.36, 82.64, -0.75], [-73.36, 82.64, -0.75], [-67.36, 82.64, -0.75], [-61.36, 82.64, -0.75], [-55.36, 82.64, -0.75], [-49.36, 82.64, -0.75], [-43.36, 82.64, -0.75], [-37.36, 82.64, -0.75], [-31.36, 82.64, -0.75], [-25.36, 82.64, -0.75], [-19.36, 82.64, -0.75], [-13.36, 82.64, -0.75], [-7.36, 82.64, -0.75], [-1.36, 82.64, -0.75], [4.64, 82.64, -0.75], [10.64, 82.64, -0.75], [16.64, 82.64, -0.75], [22.64, 82.64, -0.75], [28.64, 82.64, -0.75], [34.64, 82.64, -0.75], [40.64, 82.64, -0.75], [46.64, 82.64, -0.75], [52.64, 82.64, -0.75], [58.64, 82.64, -0.75], [64.64, 82.64, -0.75], [70.64, 82.64, -0.75], [76.64, 82.64, -0.75], [82.64, 82.64, -0.75], [88.64, 82.64, -0.75], [94.64, 82.64, -0.75], [100.64, 82.64, -0.75], [-97.36, 88.64, -0.75], [-91.36, 88.64, -0.75], [-85.36, 88.64, -0.75], [-79.36, 88.64, -0.75], [-73.36, 88.64, -0.75], [-67.36, 88.64, -0.75], [-61.36, 88.64, -0.75], [-55.36, 88.64, -0.75], [-49.36, 88.64, -0.75], [-43.36, 88.64, -0.75], [-37.36, 88.64, -0.75], [-31.36, 88.64, -0.75], [-25.36, 88.64, -0.75], [-19.36, 88.64, -0.75], [-13.36, 88.64, -0.75], [-7.36, 88.64, -0.75], [-1.36, 88.64, -0.75], [4.64, 88.64, -0.75], [10.64, 88.64, -0.75], [16.64, 88.64, -0.75], [22.64, 88.64, -0.75], [28.64, 88.64, -0.75], [34.64, 88.64, -0.75], [40.64, 88.64, -0.75], [46.64, 88.64, -0.75], [52.64, 88.64, -0.75], [58.64, 88.64, -0.75], [64.64, 88.64, -0.75], [70.64, 88.64, -0.75], [76.64, 88.64, -0.75], [82.64, 88.64, -0.75], [88.64, 88.64, -0.75], [94.64, 88.64, -0.75], [100.64, 88.64, -0.75], [-97.36, 94.64, -0.75], [-91.36, 94.64, -0.75], [-85.36, 94.64, -0.75], [-79.36, 94.64, -0.75], [-73.36, 94.64, -0.75], [-67.36, 94.64, -0.75], [-61.36, 94.64, -0.75], [-55.36, 94.64, -0.75], [-49.36, 94.64, -0.75], [-43.36, 94.64, -0.75], [-37.36, 94.64, -0.75], [-31.36, 94.64, -0.75], [-25.36, 94.64, -0.75], [-19.36, 94.64, -0.75], [-13.36, 94.64, -0.75], [-7.36, 94.64, -0.75], [-1.36, 94.64, -0.75], [4.64, 94.64, -0.75], [10.64, 94.64, -0.75], [16.64, 94.64, -0.75], [22.64, 94.64, -0.75], [28.64, 94.64, -0.75], [34.64, 94.64, -0.75], [40.64, 94.64, -0.75], [46.64, 94.64, -0.75], [52.64, 94.64, -0.75], [58.64, 94.64, -0.75], [64.64, 94.64, -0.75], [70.64, 94.64, -0.75], [76.64, 94.64, -0.75], [82.64, 94.64, -0.75], [88.64, 94.64, -0.75], [94.64, 94.64, -0.75], [100.64, 94.64, -0.75], [-97.36, 100.64, -0.75], [-91.36, 100.64, -0.75], [-85.36, 100.64, -0.75], [-79.36, 100.64, -0.75], [-73.36, 100.64, -0.75], [-67.36, 100.64, -0.75], [-61.36, 100.64, -0.75], [-55.36, 100.64, -0.75], [-49.36, 100.64, -0.75], [-43.36, 100.64, -0.75], [-37.36, 100.64, -0.75], [-31.36, 100.64, -0.75], [-25.36, 100.64, -0.75], [-19.36, 100.64, -0.75], [-13.36, 100.64, -0.75], [-7.36, 100.64, -0.75], [-1.36, 100.64, -0.75], [4.64, 100.64, -0.75], [10.64, 100.64, -0.75], [16.64, 100.64, -0.75], [22.64, 100.64, -0.75], [28.64, 100.64, -0.75], [34.64, 100.64, -0.75], [40.64, 100.64, -0.75], [46.64, 100.64, -0.75], [52.64, 100.64, -0.75], [58.64, 100.64, -0.75], [64.64, 100.64, -0.75], [70.64, 100.64, -0.75], [76.64, 100.64, -0.75], [82.64, 100.64, -0.75], [88.64, 100.64, -0.75], [-19.36, -103.36, 5.25], [-13.36, -103.36, 5.25], [-7.36, -103.36, 5.25], [-1.36, -103.36, 5.25], [4.64, -103.36, 5.25], [10.64, -103.36, 5.25], [16.64, -103.36, 5.25], [22.64, -103.36, 5.25], [28.64, -103.36, 5.25], [34.64, -103.36, 5.25], [40.64, -103.36, 5.25], [46.64, -103.36, 5.25], [52.64, -103.36, 5.25], [58.64, -103.36, 5.25], [64.64, -103.36, 5.25], [70.64, -103.36, 5.25], [76.64, -103.36, 5.25], [82.64, -103.36, 5.25], [88.64, -103.36, 5.25], [94.64, -103.36, 5.25], [-97.36, -97.36, 5.25], [-91.36, -97.36, 5.25], [-85.36, -97.36, 5.25], [-79.36, -97.36, 5.25], [-73.36, -97.36, 5.25], [-67.36, -97.36, 5.25], [-61.36, -97.36, 5.25], [-55.36, -97.36, 5.25], [-49.36, -97.36, 5.25], [-43.36, -97.36, 5.25], [-37.36, -97.36, 5.25], [-31.36, -97.36, 5.25], [-25.36, -97.36, 5.25], [-19.36, -97.36, 5.25], [-13.36, -97.36, 5.25], [-7.36, -97.36, 5.25], [-1.36, -97.36, 5.25], [4.64, -97.36, 5.25], [10.64, -97.36, 5.25], [16.64, -97.36, 5.25], [22.64, -97.36, 5.25], [28.64, -97.36, 5.25], [34.64, -97.36, 5.25], [40.64, -97.36, 5.25], [46.64, -97.36, 5.25], [52.64, -97.36, 5.25], [58.64, -97.36, 5.25], [64.64, -97.36, 5.25], [70.64, -97.36, 5.25], [76.64, -97.36, 5.25], [82.64, -97.36, 5.25], [88.64, -97.36, 5.25], [94.64, -97.36, 5.25], [-103.36, -91.36, 5.25], [-97.36, -91.36, 5.25], [-91.36, -91.36, 5.25], [-85.36, -91.36, 5.25], [-79.36, -91.36, 5.25], [-73.36, -91.36, 5.25], [-67.36, -91.36, 5.25], [-61.36, -91.36, 5.25], [-55.36, -91.36, 5.25], [-49.36, -91.36, 5.25], [-43.36, -91.36, 5.25], [-37.36, -91.36, 5.25], [-31.36, -91.36, 5.25], [-25.36, -91.36, 5.25], [-19.36, -91.36, 5.25], [-13.36, -91.36, 5.25], [-7.36, -91.36, 5.25], [-1.36, -91.36, 5.25], [4.64, -91.36, 5.25], [10.64, -91.36, 5.25], [16.64, -91.36, 5.25], [22.64, -91.36, 5.25], [28.64, -91.36, 5.25], [34.64, -91.36, 5.25], [40.64, -91.36, 5.25], [46.64, -91.36, 5.25], [52.64, -91.36, 5.25], [58.64, -91.36, 5.25], [64.64, -91.36, 5.25], [70.64, -91.36, 5.25], [76.64, -91.36, 5.25], [82.64, -91.36, 5.25], [88.64, -91.36, 5.25], [94.64, -91.36, 5.25], [100.64, -91.36, 5.25], [-103.36, -85.36, 5.25], [-97.36, -85.36, 5.25], [-91.36, -85.36, 5.25], [-85.36, -85.36, 5.25], [-79.36, -85.36, 5.25], [-73.36, -85.36, 5.25], [-67.36, -85.36, 5.25], [-61.36, -85.36, 5.25], [-55.36, -85.36, 5.25], [-49.36, -85.36, 5.25], [-43.36, -85.36, 5.25], [-37.36, -85.36, 5.25], [-31.36, -85.36, 5.25], [-25.36, -85.36, 5.25], [-19.36, -85.36, 5.25], [-13.36, -85.36, 5.25], [-7.36, -85.36, 5.25], [-1.36, -85.36, 5.25], [4.64, -85.36, 5.25], [10.64, -85.36, 5.25], [16.64, -85.36, 5.25], [22.64, -85.36, 5.25], [28.64, -85.36, 5.25], [34.64, -85.36, 5.25], [40.64, -85.36, 5.25], [46.64, -85.36, 5.25], [52.64, -85.36, 5.25], [58.64, -85.36, 5.25], [64.64, -85.36, 5.25], [70.64, -85.36, 5.25], [76.64, -85.36, 5.25], [82.64, -85.36, 5.25], [88.64, -85.36, 5.25], [94.64, -85.36, 5.25], [100.64, -85.36, 5.25], [-103.36, -79.36, 5.25], [-97.36, -79.36, 5.25], [-91.36, -79.36, 5.25], [-85.36, -79.36, 5.25], [-79.36, -79.36, 5.25], [-73.36, -79.36, 5.25], [-67.36, -79.36, 5.25], [-61.36, -79.36, 5.25], [-55.36, -79.36, 5.25], [-49.36, -79.36, 5.25], [-43.36, -79.36, 5.25], [-37.36, -79.36, 5.25], [-31.36, -79.36, 5.25], [-25.36, -79.36, 5.25], [-19.36, -79.36, 5.25], [-13.36, -79.36, 5.25], [-7.36, -79.36, 5.25], [-1.36, -79.36, 5.25], [4.64, -79.36, 5.25], [10.64, -79.36, 5.25], [16.64, -79.36, 5.25], [22.64, -79.36, 5.25], [28.64, -79.36, 5.25], [34.64, -79.36, 5.25], [40.64, -79.36, 5.25], [46.64, -79.36, 5.25], [52.64, -79.36, 5.25], [58.64, -79.36, 5.25], [64.64, -79.36, 5.25], [70.64, -79.36, 5.25], [76.64, -79.36, 5.25], [82.64, -79.36, 5.25], [88.64, -79.36, 5.25], [94.64, -79.36, 5.25], [100.64, -79.36, 5.25], [-103.36, -73.36, 5.25], [-97.36, -73.36, 5.25], [-91.36, -73.36, 5.25], [-85.36, -73.36, 5.25], [-79.36, -73.36, 5.25], [-73.36, -73.36, 5.25], [-67.36, -73.36, 5.25], [-61.36, -73.36, 5.25], [-55.36, -73.36, 5.25], [-49.36, -73.36, 5.25], [-43.36, -73.36, 5.25], [-37.36, -73.36, 5.25], [-31.36, -73.36, 5.25], [-25.36, -73.36, 5.25], [-19.36, -73.36, 5.25], [-13.36, -73.36, 5.25], [-7.36, -73.36, 5.25], [-1.36, -73.36, 5.25], [4.64, -73.36, 5.25], [10.64, -73.36, 5.25], [16.64, -73.36, 5.25], [22.64, -73.36, 5.25], [28.64, -73.36, 5.25], [34.64, -73.36, 5.25], [40.64, -73.36, 5.25], [46.64, -73.36, 5.25], [52.64, -73.36, 5.25], [58.64, -73.36, 5.25], [64.64, -73.36, 5.25], [70.64, -73.36, 5.25], [76.64, -73.36, 5.25], [82.64, -73.36, 5.25], [88.64, -73.36, 5.25], [94.64, -73.36, 5.25], [100.64, -73.36, 5.25], [-103.36, -67.36, 5.25], [-97.36, -67.36, 5.25], [-91.36, -67.36, 5.25], [-85.36, -67.36, 5.25], [-79.36, -67.36, 5.25], [-73.36, -67.36, 5.25], [-67.36, -67.36, 5.25], [-61.36, -67.36, 5.25], [-55.36, -67.36, 5.25], [-49.36, -67.36, 5.25], [-43.36, -67.36, 5.25], [-37.36, -67.36, 5.25], [-31.36, -67.36, 5.25], [-25.36, -67.36, 5.25], [-19.36, -67.36, 5.25], [-13.36, -67.36, 5.25], [-7.36, -67.36, 5.25], [-1.36, -67.36, 5.25], [4.64, -67.36, 5.25], [10.64, -67.36, 5.25], [16.64, -67.36, 5.25], [22.64, -67.36, 5.25], [28.64, -67.36, 5.25], [34.64, -67.36, 5.25], [40.64, -67.36, 5.25], [46.64, -67.36, 5.25], [52.64, -67.36, 5.25], [58.64, -67.36, 5.25], [64.64, -67.36, 5.25], [70.64, -67.36, 5.25], [76.64, -67.36, 5.25], [82.64, -67.36, 5.25], [88.64, -67.36, 5.25], [94.64, -67.36, 5.25], [100.64, -67.36, 5.25], [-103.36, -61.36, 5.25], [-97.36, -61.36, 5.25], [-91.36, -61.36, 5.25], [-85.36, -61.36, 5.25], [-79.36, -61.36, 5.25], [-73.36, -61.36, 5.25], [-67.36, -61.36, 5.25], [-61.36, -61.36, 5.25], [-55.36, -61.36, 5.25], [-49.36, -61.36, 5.25], [-43.36, -61.36, 5.25], [-37.36, -61.36, 5.25], [-31.36, -61.36, 5.25], [-25.36, -61.36, 5.25], [-19.36, -61.36, 5.25], [-13.36, -61.36, 5.25], [-7.36, -61.36, 5.25], [-1.36, -61.36, 5.25], [4.64, -61.36, 5.25], [10.64, -61.36, 5.25], [16.64, -61.36, 5.25], [22.64, -61.36, 5.25], [28.64, -61.36, 5.25], [34.64, -61.36, 5.25], [40.64, -61.36, 5.25], [46.64, -61.36, 5.25], [52.64, -61.36, 5.25], [58.64, -61.36, 5.25], [64.64, -61.36, 5.25], [70.64, -61.36, 5.25], [76.64, -61.36, 5.25], [82.64, -61.36, 5.25], [88.64, -61.36, 5.25], [94.64, -61.36, 5.25], [100.64, -61.36, 5.25], [-103.36, -55.36, 5.25], [-97.36, -55.36, 5.25], [-91.36, -55.36, 5.25], [-85.36, -55.36, 5.25], [-79.36, -55.36, 5.25], [-73.36, -55.36, 5.25], [-67.36, -55.36, 5.25], [-61.36, -55.36, 5.25], [-55.36, -55.36, 5.25], [-49.36, -55.36, 5.25], [-43.36, -55.36, 5.25], [-37.36, -55.36, 5.25], [-31.36, -55.36, 5.25], [-25.36, -55.36, 5.25], [-19.36, -55.36, 5.25], [-13.36, -55.36, 5.25], [-7.36, -55.36, 5.25], [-1.36, -55.36, 5.25], [4.64, -55.36, 5.25], [10.64, -55.36, 5.25], [16.64, -55.36, 5.25], [22.64, -55.36, 5.25], [28.64, -55.36, 5.25], [34.64, -55.36, 5.25], [40.64, -55.36, 5.25], [46.64, -55.36, 5.25], [52.64, -55.36, 5.25], [58.64, -55.36, 5.25], [64.64, -55.36, 5.25], [70.64, -55.36, 5.25], [76.64, -55.36, 5.25], [82.64, -55.36, 5.25], [88.64, -55.36, 5.25], [94.64, -55.36, 5.25], [100.64, -55.36, 5.25], [-103.36, -49.36, 5.25], [-97.36, -49.36, 5.25], [-91.36, -49.36, 5.25], [-85.36, -49.36, 5.25], [-79.36, -49.36, 5.25], [-73.36, -49.36, 5.25], [-67.36, -49.36, 5.25], [-61.36, -49.36, 5.25], [-55.36, -49.36, 5.25], [-49.36, -49.36, 5.25], [-43.36, -49.36, 5.25], [-37.36, -49.36, 5.25], [-31.36, -49.36, 5.25], [-25.36, -49.36, 5.25], [-19.36, -49.36, 5.25], [-13.36, -49.36, 5.25], [-7.36, -49.36, 5.25], [-1.36, -49.36, 5.25], [4.64, -49.36, 5.25], [10.64, -49.36, 5.25], [16.64, -49.36, 5.25], [22.64, -49.36, 5.25], [28.64, -49.36, 5.25], [34.64, -49.36, 5.25], [40.64, -49.36, 5.25], [46.64, -49.36, 5.25], [52.64, -49.36, 5.25], [58.64, -49.36, 5.25], [64.64, -49.36, 5.25], [70.64, -49.36, 5.25], [76.64, -49.36, 5.25], [82.64, -49.36, 5.25], [88.64, -49.36, 5.25], [94.64, -49.36, 5.25], [100.64, -49.36, 5.25], [-103.36, -43.36, 5.25], [-97.36, -43.36, 5.25], [-91.36, -43.36, 5.25], [-85.36, -43.36, 5.25], [-79.36, -43.36, 5.25], [-73.36, -43.36, 5.25], [-67.36, -43.36, 5.25], [-61.36, -43.36, 5.25], [-55.36, -43.36, 5.25], [-49.36, -43.36, 5.25], [-43.36, -43.36, 5.25], [-37.36, -43.36, 5.25], [-31.36, -43.36, 5.25], [-25.36, -43.36, 5.25], [-19.36, -43.36, 5.25], [-13.36, -43.36, 5.25], [-7.36, -43.36, 5.25], [-1.36, -43.36, 5.25], [4.64, -43.36, 5.25], [10.64, -43.36, 5.25], [16.64, -43.36, 5.25], [22.64, -43.36, 5.25], [28.64, -43.36, 5.25], [34.64, -43.36, 5.25], [40.64, -43.36, 5.25], [46.64, -43.36, 5.25], [52.64, -43.36, 5.25], [58.64, -43.36, 5.25], [64.64, -43.36, 5.25], [70.64, -43.36, 5.25], [76.64, -43.36, 5.25], [82.64, -43.36, 5.25], [88.64, -43.36, 5.25], [94.64, -43.36, 5.25], [100.64, -43.36, 5.25], [-103.36, -37.36, 5.25], [-97.36, -37.36, 5.25], [-91.36, -37.36, 5.25], [-85.36, -37.36, 5.25], [-79.36, -37.36, 5.25], [-73.36, -37.36, 5.25], [-67.36, -37.36, 5.25], [-61.36, -37.36, 5.25], [-55.36, -37.36, 5.25], [-49.36, -37.36, 5.25], [-43.36, -37.36, 5.25], [-37.36, -37.36, 5.25], [-31.36, -37.36, 5.25], [-25.36, -37.36, 5.25], [-19.36, -37.36, 5.25], [-13.36, -37.36, 5.25], [-7.36, -37.36, 5.25], [-1.36, -37.36, 5.25], [4.64, -37.36, 5.25], [10.64, -37.36, 5.25], [16.64, -37.36, 5.25], [22.64, -37.36, 5.25], [28.64, -37.36, 5.25], [34.64, -37.36, 5.25], [40.64, -37.36, 5.25], [46.64, -37.36, 5.25], [52.64, -37.36, 5.25], [58.64, -37.36, 5.25], [64.64, -37.36, 5.25], [70.64, -37.36, 5.25], [76.64, -37.36, 5.25], [82.64, -37.36, 5.25], [88.64, -37.36, 5.25], [94.64, -37.36, 5.25], [100.64, -37.36, 5.25], [-103.36, -31.36, 5.25], [-97.36, -31.36, 5.25], [-91.36, -31.36, 5.25], [-85.36, -31.36, 5.25], [-79.36, -31.36, 5.25], [-73.36, -31.36, 5.25], [-67.36, -31.36, 5.25], [-61.36, -31.36, 5.25], [-55.36, -31.36, 5.25], [-49.36, -31.36, 5.25], [-43.36, -31.36, 5.25], [-37.36, -31.36, 5.25], [-31.36, -31.36, 5.25], [-25.36, -31.36, 5.25], [-19.36, -31.36, 5.25], [-13.36, -31.36, 5.25], [-7.36, -31.36, 5.25], [-1.36, -31.36, 5.25], [4.64, -31.36, 5.25], [10.64, -31.36, 5.25], [16.64, -31.36, 5.25], [22.64, -31.36, 5.25], [28.64, -31.36, 5.25], [34.64, -31.36, 5.25], [40.64, -31.36, 5.25], [46.64, -31.36, 5.25], [52.64, -31.36, 5.25], [58.64, -31.36, 5.25], [64.64, -31.36, 5.25], [70.64, -31.36, 5.25], [76.64, -31.36, 5.25], [82.64, -31.36, 5.25], [88.64, -31.36, 5.25], [94.64, -31.36, 5.25], [100.64, -31.36, 5.25], [-103.36, -25.36, 5.25], [-97.36, -25.36, 5.25], [-91.36, -25.36, 5.25], [-85.36, -25.36, 5.25], [-79.36, -25.36, 5.25], [-73.36, -25.36, 5.25], [-67.36, -25.36, 5.25], [-61.36, -25.36, 5.25], [-55.36, -25.36, 5.25], [-49.36, -25.36, 5.25], [-43.36, -25.36, 5.25], [-37.36, -25.36, 5.25], [-31.36, -25.36, 5.25], [-25.36, -25.36, 5.25], [-19.36, -25.36, 5.25], [-13.36, -25.36, 5.25], [-7.36, -25.36, 5.25], [-1.36, -25.36, 5.25], [4.64, -25.36, 5.25], [10.64, -25.36, 5.25], [16.64, -25.36, 5.25], [22.64, -25.36, 5.25], [28.64, -25.36, 5.25], [34.64, -25.36, 5.25], [40.64, -25.36, 5.25], [46.64, -25.36, 5.25], [52.64, -25.36, 5.25], [58.64, -25.36, 5.25], [64.64, -25.36, 5.25], [70.64, -25.36, 5.25], [76.64, -25.36, 5.25], [82.64, -25.36, 5.25], [88.64, -25.36, 5.25], [94.64, -25.36, 5.25], [100.64, -25.36, 5.25], [-103.36, -19.36, 5.25], [-97.36, -19.36, 5.25], [-91.36, -19.36, 5.25], [-85.36, -19.36, 5.25], [-79.36, -19.36, 5.25], [-73.36, -19.36, 5.25], [-67.36, -19.36, 5.25], [-61.36, -19.36, 5.25], [-55.36, -19.36, 5.25], [-49.36, -19.36, 5.25], [-43.36, -19.36, 5.25], [-37.36, -19.36, 5.25], [-31.36, -19.36, 5.25], [-25.36, -19.36, 5.25], [-19.36, -19.36, 5.25], [-13.36, -19.36, 5.25], [-7.36, -19.36, 5.25], [-1.36, -19.36, 5.25], [4.64, -19.36, 5.25], [10.64, -19.36, 5.25], [16.64, -19.36, 5.25], [22.64, -19.36, 5.25], [28.64, -19.36, 5.25], [34.64, -19.36, 5.25], [40.64, -19.36, 5.25], [46.64, -19.36, 5.25], [52.64, -19.36, 5.25], [58.64, -19.36, 5.25], [64.64, -19.36, 5.25], [70.64, -19.36, 5.25], [76.64, -19.36, 5.25], [82.64, -19.36, 5.25], [88.64, -19.36, 5.25], [94.64, -19.36, 5.25], [100.64, -19.36, 5.25], [-103.36, -13.36, 5.25], [-97.36, -13.36, 5.25], [-91.36, -13.36, 5.25], [-85.36, -13.36, 5.25], [-79.36, -13.36, 5.25], [-73.36, -13.36, 5.25], [-67.36, -13.36, 5.25], [-61.36, -13.36, 5.25], [-55.36, -13.36, 5.25], [-49.36, -13.36, 5.25], [-43.36, -13.36, 5.25], [-37.36, -13.36, 5.25], [-31.36, -13.36, 5.25], [-25.36, -13.36, 5.25], [-19.36, -13.36, 5.25], [-13.36, -13.36, 5.25], [-7.36, -13.36, 5.25], [-1.36, -13.36, 5.25], [4.64, -13.36, 5.25], [10.64, -13.36, 5.25], [16.64, -13.36, 5.25], [22.64, -13.36, 5.25], [28.64, -13.36, 5.25], [34.64, -13.36, 5.25], [40.64, -13.36, 5.25], [46.64, -13.36, 5.25], [52.64, -13.36, 5.25], [58.64, -13.36, 5.25], [64.64, -13.36, 5.25], [70.64, -13.36, 5.25], [76.64, -13.36, 5.25], [82.64, -13.36, 5.25], [88.64, -13.36, 5.25], [94.64, -13.36, 5.25], [100.64, -13.36, 5.25], [-103.36, -7.36, 5.25], [-97.36, -7.36, 5.25], [-91.36, -7.36, 5.25], [-85.36, -7.36, 5.25], [-79.36, -7.36, 5.25], [-73.36, -7.36, 5.25], [-67.36, -7.36, 5.25], [-61.36, -7.36, 5.25], [-55.36, -7.36, 5.25], [-49.36, -7.36, 5.25], [-43.36, -7.36, 5.25], [-37.36, -7.36, 5.25], [-31.36, -7.36, 5.25], [-25.36, -7.36, 5.25], [-19.36, -7.36, 5.25], [-13.36, -7.36, 5.25], [-7.36, -7.36, 5.25], [-1.36, -7.36, 5.25], [4.64, -7.36, 5.25], [10.64, -7.36, 5.25], [16.64, -7.36, 5.25], [22.64, -7.36, 5.25], [28.64, -7.36, 5.25], [34.64, -7.36, 5.25], [40.64, -7.36, 5.25], [46.64, -7.36, 5.25], [52.64, -7.36, 5.25], [58.64, -7.36, 5.25], [64.64, -7.36, 5.25], [70.64, -7.36, 5.25], [76.64, -7.36, 5.25], [82.64, -7.36, 5.25], [88.64, -7.36, 5.25], [94.64, -7.36, 5.25], [100.64, -7.36, 5.25], [-103.36, -1.36, 5.25], [-97.36, -1.36, 5.25], [-91.36, -1.36, 5.25], [-85.36, -1.36, 5.25], [-79.36, -1.36, 5.25], [-73.36, -1.36, 5.25], [-67.36, -1.36, 5.25], [-61.36, -1.36, 5.25], [-55.36, -1.36, 5.25], [-49.36, -1.36, 5.25], [-43.36, -1.36, 5.25], [-37.36, -1.36, 5.25], [-31.36, -1.36, 5.25], [-25.36, -1.36, 5.25], [-19.36, -1.36, 5.25], [-13.36, -1.36, 5.25], [-7.36, -1.36, 5.25], [-1.36, -1.36, 5.25], [4.64, -1.36, 5.25], [10.64, -1.36, 5.25], [16.64, -1.36, 5.25], [22.64, -1.36, 5.25], [28.64, -1.36, 5.25], [34.64, -1.36, 5.25], [40.64, -1.36, 5.25], [46.64, -1.36, 5.25], [52.64, -1.36, 5.25], [58.64, -1.36, 5.25], [64.64, -1.36, 5.25], [70.64, -1.36, 5.25], [76.64, -1.36, 5.25], [82.64, -1.36, 5.25], [88.64, -1.36, 5.25], [94.64, -1.36, 5.25], [100.64, -1.36, 5.25], [-103.36, 4.64, 5.25], [-97.36, 4.64, 5.25], [-91.36, 4.64, 5.25], [-85.36, 4.64, 5.25], [-79.36, 4.64, 5.25], [-73.36, 4.64, 5.25], [-67.36, 4.64, 5.25], [-61.36, 4.64, 5.25], [-55.36, 4.64, 5.25], [-49.36, 4.64, 5.25], [-43.36, 4.64, 5.25], [-37.36, 4.64, 5.25], [-31.36, 4.64, 5.25], [-25.36, 4.64, 5.25], [-19.36, 4.64, 5.25], [-13.36, 4.64, 5.25], [-7.36, 4.64, 5.25], [-1.36, 4.64, 5.25], [4.64, 4.64, 5.25], [10.64, 4.64, 5.25], [16.64, 4.64, 5.25], [22.64, 4.64, 5.25], [28.64, 4.64, 5.25], [34.64, 4.64, 5.25], [40.64, 4.64, 5.25], [46.64, 4.64, 5.25], [52.64, 4.64, 5.25], [58.64, 4.64, 5.25], [64.64, 4.64, 5.25], [70.64, 4.64, 5.25], [76.64, 4.64, 5.25], [82.64, 4.64, 5.25], [88.64, 4.64, 5.25], [94.64, 4.64, 5.25], [100.64, 4.64, 5.25], [-103.36, 10.64, 5.25], [-97.36, 10.64, 5.25], [-91.36, 10.64, 5.25], [-85.36, 10.64, 5.25], [-79.36, 10.64, 5.25], [-73.36, 10.64, 5.25], [-67.36, 10.64, 5.25], [-61.36, 10.64, 5.25], [-55.36, 10.64, 5.25], [-49.36, 10.64, 5.25], [-43.36, 10.64, 5.25], [-37.36, 10.64, 5.25], [-31.36, 10.64, 5.25], [-25.36, 10.64, 5.25], [-19.36, 10.64, 5.25], [-13.36, 10.64, 5.25], [-7.36, 10.64, 5.25], [-1.36, 10.64, 5.25], [4.64, 10.64, 5.25], [10.64, 10.64, 5.25], [16.64, 10.64, 5.25], [22.64, 10.64, 5.25], [28.64, 10.64, 5.25], [34.64, 10.64, 5.25], [40.64, 10.64, 5.25], [46.64, 10.64, 5.25], [52.64, 10.64, 5.25], [58.64, 10.64, 5.25], [64.64, 10.64, 5.25], [70.64, 10.64, 5.25], [76.64, 10.64, 5.25], [82.64, 10.64, 5.25], [88.64, 10.64, 5.25], [94.64, 10.64, 5.25], [100.64, 10.64, 5.25], [-103.36, 16.64, 5.25], [-97.36, 16.64, 5.25], [-91.36, 16.64, 5.25], [-85.36, 16.64, 5.25], [-79.36, 16.64, 5.25], [-73.36, 16.64, 5.25], [-67.36, 16.64, 5.25], [-61.36, 16.64, 5.25], [-55.36, 16.64, 5.25], [-49.36, 16.64, 5.25], [-43.36, 16.64, 5.25], [-37.36, 16.64, 5.25], [-31.36, 16.64, 5.25], [-25.36, 16.64, 5.25], [-19.36, 16.64, 5.25], [-13.36, 16.64, 5.25], [-7.36, 16.64, 5.25], [-1.36, 16.64, 5.25], [4.64, 16.64, 5.25], [10.64, 16.64, 5.25], [16.64, 16.64, 5.25], [22.64, 16.64, 5.25], [28.64, 16.64, 5.25], [34.64, 16.64, 5.25], [40.64, 16.64, 5.25], [46.64, 16.64, 5.25], [52.64, 16.64, 5.25], [58.64, 16.64, 5.25], [64.64, 16.64, 5.25], [70.64, 16.64, 5.25], [76.64, 16.64, 5.25], [82.64, 16.64, 5.25], [88.64, 16.64, 5.25], [94.64, 16.64, 5.25], [100.64, 16.64, 5.25], [-103.36, 22.64, 5.25], [-97.36, 22.64, 5.25], [-91.36, 22.64, 5.25], [-85.36, 22.64, 5.25], [-79.36, 22.64, 5.25], [-73.36, 22.64, 5.25], [-67.36, 22.64, 5.25], [-61.36, 22.64, 5.25], [-55.36, 22.64, 5.25], [-49.36, 22.64, 5.25], [-43.36, 22.64, 5.25], [-37.36, 22.64, 5.25], [-31.36, 22.64, 5.25], [-25.36, 22.64, 5.25], [-19.36, 22.64, 5.25], [-13.36, 22.64, 5.25], [-7.36, 22.64, 5.25], [-1.36, 22.64, 5.25], [4.64, 22.64, 5.25], [10.64, 22.64, 5.25], [16.64, 22.64, 5.25], [22.64, 22.64, 5.25], [28.64, 22.64, 5.25], [34.64, 22.64, 5.25], [40.64, 22.64, 5.25], [46.64, 22.64, 5.25], [52.64, 22.64, 5.25], [58.64, 22.64, 5.25], [64.64, 22.64, 5.25], [70.64, 22.64, 5.25], [76.64, 22.64, 5.25], [82.64, 22.64, 5.25], [88.64, 22.64, 5.25], [94.64, 22.64, 5.25], [100.64, 22.64, 5.25], [-103.36, 28.64, 5.25], [-97.36, 28.64, 5.25], [-91.36, 28.64, 5.25], [-85.36, 28.64, 5.25], [-79.36, 28.64, 5.25], [-73.36, 28.64, 5.25], [-67.36, 28.64, 5.25], [-61.36, 28.64, 5.25], [-55.36, 28.64, 5.25], [-49.36, 28.64, 5.25], [-43.36, 28.64, 5.25], [-37.36, 28.64, 5.25], [-31.36, 28.64, 5.25], [-25.36, 28.64, 5.25], [-19.36, 28.64, 5.25], [-13.36, 28.64, 5.25], [-7.36, 28.64, 5.25], [-1.36, 28.64, 5.25], [4.64, 28.64, 5.25], [10.64, 28.64, 5.25], [16.64, 28.64, 5.25], [22.64, 28.64, 5.25], [28.64, 28.64, 5.25], [34.64, 28.64, 5.25], [40.64, 28.64, 5.25], [46.64, 28.64, 5.25], [52.64, 28.64, 5.25], [58.64, 28.64, 5.25], [64.64, 28.64, 5.25], [70.64, 28.64, 5.25], [76.64, 28.64, 5.25], [82.64, 28.64, 5.25], [88.64, 28.64, 5.25], [94.64, 28.64, 5.25], [100.64, 28.64, 5.25], [-103.36, 34.64, 5.25], [-97.36, 34.64, 5.25], [-91.36, 34.64, 5.25], [-85.36, 34.64, 5.25], [-79.36, 34.64, 5.25], [-73.36, 34.64, 5.25], [-67.36, 34.64, 5.25], [-61.36, 34.64, 5.25], [-55.36, 34.64, 5.25], [-49.36, 34.64, 5.25], [-43.36, 34.64, 5.25], [-37.36, 34.64, 5.25], [-31.36, 34.64, 5.25], [-25.36, 34.64, 5.25], [-19.36, 34.64, 5.25], [-13.36, 34.64, 5.25], [-7.36, 34.64, 5.25], [-1.36, 34.64, 5.25], [4.64, 34.64, 5.25], [10.64, 34.64, 5.25], [16.64, 34.64, 5.25], [22.64, 34.64, 5.25], [28.64, 34.64, 5.25], [34.64, 34.64, 5.25], [40.64, 34.64, 5.25], [46.64, 34.64, 5.25], [52.64, 34.64, 5.25], [58.64, 34.64, 5.25], [64.64, 34.64, 5.25], [70.64, 34.64, 5.25], [76.64, 34.64, 5.25], [82.64, 34.64, 5.25], [88.64, 34.64, 5.25], [94.64, 34.64, 5.25], [100.64, 34.64, 5.25], [-103.36, 40.64, 5.25], [-97.36, 40.64, 5.25], [-91.36, 40.64, 5.25], [-85.36, 40.64, 5.25], [-79.36, 40.64, 5.25], [-73.36, 40.64, 5.25], [-67.36, 40.64, 5.25], [-61.36, 40.64, 5.25], [-55.36, 40.64, 5.25], [-49.36, 40.64, 5.25], [-43.36, 40.64, 5.25], [-37.36, 40.64, 5.25], [-31.36, 40.64, 5.25], [-25.36, 40.64, 5.25], [-19.36, 40.64, 5.25], [-13.36, 40.64, 5.25], [-7.36, 40.64, 5.25], [-1.36, 40.64, 5.25], [4.64, 40.64, 5.25], [10.64, 40.64, 5.25], [16.64, 40.64, 5.25], [22.64, 40.64, 5.25], [28.64, 40.64, 5.25], [34.64, 40.64, 5.25], [40.64, 40.64, 5.25], [46.64, 40.64, 5.25], [52.64, 40.64, 5.25], [58.64, 40.64, 5.25], [64.64, 40.64, 5.25], [70.64, 40.64, 5.25], [76.64, 40.64, 5.25], [82.64, 40.64, 5.25], [88.64, 40.64, 5.25], [94.64, 40.64, 5.25], [100.64, 40.64, 5.25], [-103.36, 46.64, 5.25], [-97.36, 46.64, 5.25], [-91.36, 46.64, 5.25], [-85.36, 46.64, 5.25], [-79.36, 46.64, 5.25], [-73.36, 46.64, 5.25], [-67.36, 46.64, 5.25], [-61.36, 46.64, 5.25], [-55.36, 46.64, 5.25], [-49.36, 46.64, 5.25], [-43.36, 46.64, 5.25], [-37.36, 46.64, 5.25], [-31.36, 46.64, 5.25], [-25.36, 46.64, 5.25], [-19.36, 46.64, 5.25], [-13.36, 46.64, 5.25], [-7.36, 46.64, 5.25], [-1.36, 46.64, 5.25], [4.64, 46.64, 5.25], [10.64, 46.64, 5.25], [16.64, 46.64, 5.25], [22.64, 46.64, 5.25], [28.64, 46.64, 5.25], [34.64, 46.64, 5.25], [40.64, 46.64, 5.25], [46.64, 46.64, 5.25], [52.64, 46.64, 5.25], [58.64, 46.64, 5.25], [64.64, 46.64, 5.25], [70.64, 46.64, 5.25], [76.64, 46.64, 5.25], [82.64, 46.64, 5.25], [88.64, 46.64, 5.25], [94.64, 46.64, 5.25], [100.64, 46.64, 5.25], [-97.36, 52.64, 5.25], [-91.36, 52.64, 5.25], [-85.36, 52.64, 5.25], [-79.36, 52.64, 5.25], [-73.36, 52.64, 5.25], [-67.36, 52.64, 5.25], [-61.36, 52.64, 5.25], [-55.36, 52.64, 5.25], [-49.36, 52.64, 5.25], [-43.36, 52.64, 5.25], [-37.36, 52.64, 5.25], [-31.36, 52.64, 5.25], [-25.36, 52.64, 5.25], [-19.36, 52.64, 5.25], [-13.36, 52.64, 5.25], [-7.36, 52.64, 5.25], [-1.36, 52.64, 5.25], [4.64, 52.64, 5.25], [10.64, 52.64, 5.25], [16.64, 52.64, 5.25], [22.64, 52.64, 5.25], [28.64, 52.64, 5.25], [34.64, 52.64, 5.25], [40.64, 52.64, 5.25], [46.64, 52.64, 5.25], [52.64, 52.64, 5.25], [58.64, 52.64, 5.25], [64.64, 52.64, 5.25], [70.64, 52.64, 5.25], [76.64, 52.64, 5.25], [82.64, 52.64, 5.25], [88.64, 52.64, 5.25], [94.64, 52.64, 5.25], [100.64, 52.64, 5.25], [-97.36, 58.64, 5.25], [-91.36, 58.64, 5.25], [-85.36, 58.64, 5.25], [-79.36, 58.64, 5.25], [-73.36, 58.64, 5.25], [-67.36, 58.64, 5.25], [-61.36, 58.64, 5.25], [-55.36, 58.64, 5.25], [-49.36, 58.64, 5.25], [-43.36, 58.64, 5.25], [-37.36, 58.64, 5.25], [-31.36, 58.64, 5.25], [-25.36, 58.64, 5.25], [-19.36, 58.64, 5.25], [-13.36, 58.64, 5.25], [-7.36, 58.64, 5.25], [-1.36, 58.64, 5.25], [4.64, 58.64, 5.25], [10.64, 58.64, 5.25], [16.64, 58.64, 5.25], [22.64, 58.64, 5.25], [28.64, 58.64, 5.25], [34.64, 58.64, 5.25], [40.64, 58.64, 5.25], [46.64, 58.64, 5.25], [52.64, 58.64, 5.25], [58.64, 58.64, 5.25], [64.64, 58.64, 5.25], [70.64, 58.64, 5.25], [76.64, 58.64, 5.25], [82.64, 58.64, 5.25], [88.64, 58.64, 5.25], [94.64, 58.64, 5.25], [100.64, 58.64, 5.25], [-97.36, 64.64, 5.25], [-91.36, 64.64, 5.25], [-85.36, 64.64, 5.25], [-79.36, 64.64, 5.25], [-73.36, 64.64, 5.25], [-67.36, 64.64, 5.25], [-61.36, 64.64, 5.25], [-55.36, 64.64, 5.25], [-49.36, 64.64, 5.25], [-43.36, 64.64, 5.25], [-37.36, 64.64, 5.25], [-31.36, 64.64, 5.25], [-25.36, 64.64, 5.25], [-19.36, 64.64, 5.25], [-13.36, 64.64, 5.25], [-7.36, 64.64, 5.25], [-1.36, 64.64, 5.25], [4.64, 64.64, 5.25], [10.64, 64.64, 5.25], [16.64, 64.64, 5.25], [22.64, 64.64, 5.25], [28.64, 64.64, 5.25], [34.64, 64.64, 5.25], [40.64, 64.64, 5.25], [46.64, 64.64, 5.25], [52.64, 64.64, 5.25], [58.64, 64.64, 5.25], [64.64, 64.64, 5.25], [70.64, 64.64, 5.25], [76.64, 64.64, 5.25], [82.64, 64.64, 5.25], [88.64, 64.64, 5.25], [94.64, 64.64, 5.25], [100.64, 64.64, 5.25], [-97.36, 70.64, 5.25], [-91.36, 70.64, 5.25], [-85.36, 70.64, 5.25], [-79.36, 70.64, 5.25], [-73.36, 70.64, 5.25], [-67.36, 70.64, 5.25], [-61.36, 70.64, 5.25], [-55.36, 70.64, 5.25], [-49.36, 70.64, 5.25], [-43.36, 70.64, 5.25], [-37.36, 70.64, 5.25], [-31.36, 70.64, 5.25], [-25.36, 70.64, 5.25], [-19.36, 70.64, 5.25], [-13.36, 70.64, 5.25], [-7.36, 70.64, 5.25], [-1.36, 70.64, 5.25], [4.64, 70.64, 5.25], [10.64, 70.64, 5.25], [16.64, 70.64, 5.25], [22.64, 70.64, 5.25], [28.64, 70.64, 5.25], [34.64, 70.64, 5.25], [40.64, 70.64, 5.25], [46.64, 70.64, 5.25], [52.64, 70.64, 5.25], [58.64, 70.64, 5.25], [64.64, 70.64, 5.25], [70.64, 70.64, 5.25], [76.64, 70.64, 5.25], [82.64, 70.64, 5.25], [88.64, 70.64, 5.25], [94.64, 70.64, 5.25], [100.64, 70.64, 5.25], [-97.36, 76.64, 5.25], [-91.36, 76.64, 5.25], [-85.36, 76.64, 5.25], [-79.36, 76.64, 5.25], [-73.36, 76.64, 5.25], [-67.36, 76.64, 5.25], [-61.36, 76.64, 5.25], [-55.36, 76.64, 5.25], [-49.36, 76.64, 5.25], [-43.36, 76.64, 5.25], [-37.36, 76.64, 5.25], [-31.36, 76.64, 5.25], [-25.36, 76.64, 5.25], [-19.36, 76.64, 5.25], [-13.36, 76.64, 5.25], [-7.36, 76.64, 5.25], [-1.36, 76.64, 5.25], [4.64, 76.64, 5.25], [10.64, 76.64, 5.25], [16.64, 76.64, 5.25], [22.64, 76.64, 5.25], [28.64, 76.64, 5.25], [34.64, 76.64, 5.25], [40.64, 76.64, 5.25], [46.64, 76.64, 5.25], [52.64, 76.64, 5.25], [58.64, 76.64, 5.25], [64.64, 76.64, 5.25], [70.64, 76.64, 5.25], [76.64, 76.64, 5.25], [82.64, 76.64, 5.25], [88.64, 76.64, 5.25], [94.64, 76.64, 5.25], [100.64, 76.64, 5.25], [-97.36, 82.64, 5.25], [-91.36, 82.64, 5.25], [-85.36, 82.64, 5.25], [-79.36, 82.64, 5.25], [-73.36, 82.64, 5.25], [-67.36, 82.64, 5.25], [-61.36, 82.64, 5.25], [-55.36, 82.64, 5.25], [-49.36, 82.64, 5.25], [-43.36, 82.64, 5.25], [-37.36, 82.64, 5.25], [-31.36, 82.64, 5.25], [-25.36, 82.64, 5.25], [-19.36, 82.64, 5.25], [-13.36, 82.64, 5.25], [-7.36, 82.64, 5.25], [-1.36, 82.64, 5.25], [4.64, 82.64, 5.25], [10.64, 82.64, 5.25], [16.64, 82.64, 5.25], [22.64, 82.64, 5.25], [28.64, 82.64, 5.25], [34.64, 82.64, 5.25], [40.64, 82.64, 5.25], [46.64, 82.64, 5.25], [52.64, 82.64, 5.25], [58.64, 82.64, 5.25], [64.64, 82.64, 5.25], [70.64, 82.64, 5.25], [76.64, 82.64, 5.25], [82.64, 82.64, 5.25], [88.64, 82.64, 5.25], [94.64, 82.64, 5.25], [100.64, 82.64, 5.25], [-97.36, 88.64, 5.25], [-91.36, 88.64, 5.25], [-85.36, 88.64, 5.25], [-79.36, 88.64, 5.25], [-73.36, 88.64, 5.25], [-67.36, 88.64, 5.25], [-61.36, 88.64, 5.25], [-55.36, 88.64, 5.25], [-49.36, 88.64, 5.25], [-43.36, 88.64, 5.25], [-37.36, 88.64, 5.25], [-31.36, 88.64, 5.25], [-25.36, 88.64, 5.25], [-19.36, 88.64, 5.25], [-13.36, 88.64, 5.25], [-7.36, 88.64, 5.25], [-1.36, 88.64, 5.25], [4.64, 88.64, 5.25], [10.64, 88.64, 5.25], [16.64, 88.64, 5.25], [22.64, 88.64, 5.25], [28.64, 88.64, 5.25], [34.64, 88.64, 5.25], [40.64, 88.64, 5.25], [46.64, 88.64, 5.25], [52.64, 88.64, 5.25], [58.64, 88.64, 5.25], [64.64, 88.64, 5.25], [70.64, 88.64, 5.25], [76.64, 88.64, 5.25], [82.64, 88.64, 5.25], [88.64, 88.64, 5.25], [94.64, 88.64, 5.25], [100.64, 88.64, 5.25], [-97.36, 94.64, 5.25], [-91.36, 94.64, 5.25], [-85.36, 94.64, 5.25], [-79.36, 94.64, 5.25], [-73.36, 94.64, 5.25], [-67.36, 94.64, 5.25], [-61.36, 94.64, 5.25], [-55.36, 94.64, 5.25], [-49.36, 94.64, 5.25], [-43.36, 94.64, 5.25], [-37.36, 94.64, 5.25], [-31.36, 94.64, 5.25], [-25.36, 94.64, 5.25], [-19.36, 94.64, 5.25], [-13.36, 94.64, 5.25], [-7.36, 94.64, 5.25], [-1.36, 94.64, 5.25], [4.64, 94.64, 5.25], [10.64, 94.64, 5.25], [16.64, 94.64, 5.25], [22.64, 94.64, 5.25], [28.64, 94.64, 5.25], [34.64, 94.64, 5.25], [40.64, 94.64, 5.25], [46.64, 94.64, 5.25], [52.64, 94.64, 5.25], [58.64, 94.64, 5.25], [64.64, 94.64, 5.25], [70.64, 94.64, 5.25], [76.64, 94.64, 5.25], [82.64, 94.64, 5.25], [88.64, 94.64, 5.25], [94.64, 94.64, 5.25], [100.64, 94.64, 5.25], [-97.36, 100.64, 5.25], [-91.36, 100.64, 5.25], [-85.36, 100.64, 5.25], [-79.36, 100.64, 5.25], [-73.36, 100.64, 5.25], [-67.36, 100.64, 5.25], [-61.36, 100.64, 5.25], [-55.36, 100.64, 5.25], [-49.36, 100.64, 5.25], [-43.36, 100.64, 5.25], [-37.36, 100.64, 5.25], [-31.36, 100.64, 5.25], [-25.36, 100.64, 5.25], [-19.36, 100.64, 5.25], [-13.36, 100.64, 5.25], [-7.36, 100.64, 5.25], [-1.36, 100.64, 5.25], [4.64, 100.64, 5.25], [10.64, 100.64, 5.25], [16.64, 100.64, 5.25], [22.64, 100.64, 5.25], [28.64, 100.64, 5.25], [34.64, 100.64, 5.25], [40.64, 100.64, 5.25], [46.64, 100.64, 5.25], [52.64, 100.64, 5.25], [58.64, 100.64, 5.25], [64.64, 100.64, 5.25], [70.64, 100.64, 5.25], [76.64, 100.64, 5.25], [82.64, 100.64, 5.25], [88.64, 100.64, 5.25], [-19.36, -103.36, 11.25], [-13.36, -103.36, 11.25], [-7.36, -103.36, 11.25], [-1.36, -103.36, 11.25], [4.64, -103.36, 11.25], [10.64, -103.36, 11.25], [16.64, -103.36, 11.25], [22.64, -103.36, 11.25], [28.64, -103.36, 11.25], [34.64, -103.36, 11.25], [40.64, -103.36, 11.25], [46.64, -103.36, 11.25], [52.64, -103.36, 11.25], [58.64, -103.36, 11.25], [64.64, -103.36, 11.25], [70.64, -103.36, 11.25], [76.64, -103.36, 11.25], [82.64, -103.36, 11.25], [88.64, -103.36, 11.25], [94.64, -103.36, 11.25], [-97.36, -97.36, 11.25], [-91.36, -97.36, 11.25], [-85.36, -97.36, 11.25], [-79.36, -97.36, 11.25], [-73.36, -97.36, 11.25], [-67.36, -97.36, 11.25], [-61.36, -97.36, 11.25], [-55.36, -97.36, 11.25], [-49.36, -97.36, 11.25], [-43.36, -97.36, 11.25], [-37.36, -97.36, 11.25], [-31.36, -97.36, 11.25], [-25.36, -97.36, 11.25], [-19.36, -97.36, 11.25], [-13.36, -97.36, 11.25], [-7.36, -97.36, 11.25], [-1.36, -97.36, 11.25], [4.64, -97.36, 11.25], [10.64, -97.36, 11.25], [16.64, -97.36, 11.25], [22.64, -97.36, 11.25], [28.64, -97.36, 11.25], [34.64, -97.36, 11.25], [40.64, -97.36, 11.25], [46.64, -97.36, 11.25], [52.64, -97.36, 11.25], [58.64, -97.36, 11.25], [64.64, -97.36, 11.25], [70.64, -97.36, 11.25], [76.64, -97.36, 11.25], [82.64, -97.36, 11.25], [88.64, -97.36, 11.25], [94.64, -97.36, 11.25], [-103.36, -91.36, 11.25], [-97.36, -91.36, 11.25], [-91.36, -91.36, 11.25], [-85.36, -91.36, 11.25], [-79.36, -91.36, 11.25], [-73.36, -91.36, 11.25], [-67.36, -91.36, 11.25], [-61.36, -91.36, 11.25], [-55.36, -91.36, 11.25], [-49.36, -91.36, 11.25], [-43.36, -91.36, 11.25], [-37.36, -91.36, 11.25], [-31.36, -91.36, 11.25], [-25.36, -91.36, 11.25], [-19.36, -91.36, 11.25], [-13.36, -91.36, 11.25], [-7.36, -91.36, 11.25], [-1.36, -91.36, 11.25], [4.64, -91.36, 11.25], [10.64, -91.36, 11.25], [16.64, -91.36, 11.25], [22.64, -91.36, 11.25], [28.64, -91.36, 11.25], [34.64, -91.36, 11.25], [40.64, -91.36, 11.25], [46.64, -91.36, 11.25], [52.64, -91.36, 11.25], [58.64, -91.36, 11.25], [64.64, -91.36, 11.25], [70.64, -91.36, 11.25], [76.64, -91.36, 11.25], [82.64, -91.36, 11.25], [88.64, -91.36, 11.25], [94.64, -91.36, 11.25], [100.64, -91.36, 11.25], [-103.36, -85.36, 11.25], [-97.36, -85.36, 11.25], [-91.36, -85.36, 11.25], [-85.36, -85.36, 11.25], [-79.36, -85.36, 11.25], [-73.36, -85.36, 11.25], [-67.36, -85.36, 11.25], [-61.36, -85.36, 11.25], [-55.36, -85.36, 11.25], [-49.36, -85.36, 11.25], [-43.36, -85.36, 11.25], [-37.36, -85.36, 11.25], [-31.36, -85.36, 11.25], [-25.36, -85.36, 11.25], [-19.36, -85.36, 11.25], [-13.36, -85.36, 11.25], [-7.36, -85.36, 11.25], [-1.36, -85.36, 11.25], [4.64, -85.36, 11.25], [10.64, -85.36, 11.25], [16.64, -85.36, 11.25], [22.64, -85.36, 11.25], [28.64, -85.36, 11.25], [34.64, -85.36, 11.25], [40.64, -85.36, 11.25], [46.64, -85.36, 11.25], [52.64, -85.36, 11.25], [58.64, -85.36, 11.25], [64.64, -85.36, 11.25], [70.64, -85.36, 11.25], [76.64, -85.36, 11.25], [82.64, -85.36, 11.25], [88.64, -85.36, 11.25], [94.64, -85.36, 11.25], [100.64, -85.36, 11.25], [-103.36, -79.36, 11.25], [-97.36, -79.36, 11.25], [-91.36, -79.36, 11.25], [-85.36, -79.36, 11.25], [-79.36, -79.36, 11.25], [-73.36, -79.36, 11.25], [-67.36, -79.36, 11.25], [-61.36, -79.36, 11.25], [-55.36, -79.36, 11.25], [-49.36, -79.36, 11.25], [-43.36, -79.36, 11.25], [-37.36, -79.36, 11.25], [-31.36, -79.36, 11.25], [-25.36, -79.36, 11.25], [-19.36, -79.36, 11.25], [-13.36, -79.36, 11.25], [-7.36, -79.36, 11.25], [-1.36, -79.36, 11.25], [4.64, -79.36, 11.25], [10.64, -79.36, 11.25], [16.64, -79.36, 11.25], [22.64, -79.36, 11.25], [28.64, -79.36, 11.25], [34.64, -79.36, 11.25], [40.64, -79.36, 11.25], [46.64, -79.36, 11.25], [52.64, -79.36, 11.25], [58.64, -79.36, 11.25], [64.64, -79.36, 11.25], [70.64, -79.36, 11.25], [76.64, -79.36, 11.25], [82.64, -79.36, 11.25], [88.64, -79.36, 11.25], [94.64, -79.36, 11.25], [100.64, -79.36, 11.25], [-103.36, -73.36, 11.25], [-97.36, -73.36, 11.25], [-91.36, -73.36, 11.25], [-85.36, -73.36, 11.25], [-79.36, -73.36, 11.25], [-73.36, -73.36, 11.25], [-67.36, -73.36, 11.25], [-61.36, -73.36, 11.25], [-55.36, -73.36, 11.25], [-49.36, -73.36, 11.25], [-43.36, -73.36, 11.25], [-37.36, -73.36, 11.25], [-31.36, -73.36, 11.25], [-25.36, -73.36, 11.25], [-19.36, -73.36, 11.25], [-13.36, -73.36, 11.25], [-7.36, -73.36, 11.25], [-1.36, -73.36, 11.25], [4.64, -73.36, 11.25], [10.64, -73.36, 11.25], [16.64, -73.36, 11.25], [22.64, -73.36, 11.25], [28.64, -73.36, 11.25], [34.64, -73.36, 11.25], [40.64, -73.36, 11.25], [46.64, -73.36, 11.25], [52.64, -73.36, 11.25], [58.64, -73.36, 11.25], [64.64, -73.36, 11.25], [70.64, -73.36, 11.25], [76.64, -73.36, 11.25], [82.64, -73.36, 11.25], [88.64, -73.36, 11.25], [94.64, -73.36, 11.25], [100.64, -73.36, 11.25], [-103.36, -67.36, 11.25], [-97.36, -67.36, 11.25], [-91.36, -67.36, 11.25], [-85.36, -67.36, 11.25], [-79.36, -67.36, 11.25], [-73.36, -67.36, 11.25], [-67.36, -67.36, 11.25], [-61.36, -67.36, 11.25], [-55.36, -67.36, 11.25], [-49.36, -67.36, 11.25], [-43.36, -67.36, 11.25], [-37.36, -67.36, 11.25], [-31.36, -67.36, 11.25], [-25.36, -67.36, 11.25], [-19.36, -67.36, 11.25], [-13.36, -67.36, 11.25], [-7.36, -67.36, 11.25], [-1.36, -67.36, 11.25], [4.64, -67.36, 11.25], [10.64, -67.36, 11.25], [16.64, -67.36, 11.25], [22.64, -67.36, 11.25], [28.64, -67.36, 11.25], [34.64, -67.36, 11.25], [40.64, -67.36, 11.25], [46.64, -67.36, 11.25], [52.64, -67.36, 11.25], [58.64, -67.36, 11.25], [64.64, -67.36, 11.25], [70.64, -67.36, 11.25], [76.64, -67.36, 11.25], [82.64, -67.36, 11.25], [88.64, -67.36, 11.25], [94.64, -67.36, 11.25], [100.64, -67.36, 11.25], [-103.36, -61.36, 11.25], [-97.36, -61.36, 11.25], [-91.36, -61.36, 11.25], [-85.36, -61.36, 11.25], [-79.36, -61.36, 11.25], [-73.36, -61.36, 11.25], [-67.36, -61.36, 11.25], [-61.36, -61.36, 11.25], [-55.36, -61.36, 11.25], [-49.36, -61.36, 11.25], [-43.36, -61.36, 11.25], [-37.36, -61.36, 11.25], [-31.36, -61.36, 11.25], [-25.36, -61.36, 11.25], [-19.36, -61.36, 11.25], [-13.36, -61.36, 11.25], [-7.36, -61.36, 11.25], [-1.36, -61.36, 11.25], [4.64, -61.36, 11.25], [10.64, -61.36, 11.25], [16.64, -61.36, 11.25], [22.64, -61.36, 11.25], [28.64, -61.36, 11.25], [34.64, -61.36, 11.25], [40.64, -61.36, 11.25], [46.64, -61.36, 11.25], [52.64, -61.36, 11.25], [58.64, -61.36, 11.25], [64.64, -61.36, 11.25], [70.64, -61.36, 11.25], [76.64, -61.36, 11.25], [82.64, -61.36, 11.25], [88.64, -61.36, 11.25], [94.64, -61.36, 11.25], [100.64, -61.36, 11.25], [-103.36, -55.36, 11.25], [-97.36, -55.36, 11.25], [-91.36, -55.36, 11.25], [-85.36, -55.36, 11.25], [-79.36, -55.36, 11.25], [-73.36, -55.36, 11.25], [-67.36, -55.36, 11.25], [-61.36, -55.36, 11.25], [-55.36, -55.36, 11.25], [-49.36, -55.36, 11.25], [-43.36, -55.36, 11.25], [-37.36, -55.36, 11.25], [-31.36, -55.36, 11.25], [-25.36, -55.36, 11.25], [-19.36, -55.36, 11.25], [-13.36, -55.36, 11.25], [-7.36, -55.36, 11.25], [-1.36, -55.36, 11.25], [4.64, -55.36, 11.25], [10.64, -55.36, 11.25], [16.64, -55.36, 11.25], [22.64, -55.36, 11.25], [28.64, -55.36, 11.25], [34.64, -55.36, 11.25], [40.64, -55.36, 11.25], [46.64, -55.36, 11.25], [52.64, -55.36, 11.25], [58.64, -55.36, 11.25], [64.64, -55.36, 11.25], [70.64, -55.36, 11.25], [76.64, -55.36, 11.25], [82.64, -55.36, 11.25], [88.64, -55.36, 11.25], [94.64, -55.36, 11.25], [100.64, -55.36, 11.25], [-103.36, -49.36, 11.25], [-97.36, -49.36, 11.25], [-91.36, -49.36, 11.25], [-85.36, -49.36, 11.25], [-79.36, -49.36, 11.25], [-73.36, -49.36, 11.25], [-67.36, -49.36, 11.25], [-61.36, -49.36, 11.25], [-55.36, -49.36, 11.25], [-49.36, -49.36, 11.25], [-43.36, -49.36, 11.25], [-37.36, -49.36, 11.25], [-31.36, -49.36, 11.25], [-25.36, -49.36, 11.25], [-19.36, -49.36, 11.25], [-13.36, -49.36, 11.25], [-7.36, -49.36, 11.25], [-1.36, -49.36, 11.25], [4.64, -49.36, 11.25], [10.64, -49.36, 11.25], [16.64, -49.36, 11.25], [22.64, -49.36, 11.25], [28.64, -49.36, 11.25], [34.64, -49.36, 11.25], [40.64, -49.36, 11.25], [46.64, -49.36, 11.25], [52.64, -49.36, 11.25], [58.64, -49.36, 11.25], [64.64, -49.36, 11.25], [70.64, -49.36, 11.25], [76.64, -49.36, 11.25], [82.64, -49.36, 11.25], [88.64, -49.36, 11.25], [94.64, -49.36, 11.25], [100.64, -49.36, 11.25], [-103.36, -43.36, 11.25], [-97.36, -43.36, 11.25], [-91.36, -43.36, 11.25], [-85.36, -43.36, 11.25], [-79.36, -43.36, 11.25], [-73.36, -43.36, 11.25], [-67.36, -43.36, 11.25], [-61.36, -43.36, 11.25], [-55.36, -43.36, 11.25], [-49.36, -43.36, 11.25], [-43.36, -43.36, 11.25], [-37.36, -43.36, 11.25], [-31.36, -43.36, 11.25], [-25.36, -43.36, 11.25], [-19.36, -43.36, 11.25], [-13.36, -43.36, 11.25], [-7.36, -43.36, 11.25], [-1.36, -43.36, 11.25], [4.64, -43.36, 11.25], [10.64, -43.36, 11.25], [16.64, -43.36, 11.25], [22.64, -43.36, 11.25], [28.64, -43.36, 11.25], [34.64, -43.36, 11.25], [40.64, -43.36, 11.25], [46.64, -43.36, 11.25], [52.64, -43.36, 11.25], [58.64, -43.36, 11.25], [64.64, -43.36, 11.25], [70.64, -43.36, 11.25], [76.64, -43.36, 11.25], [82.64, -43.36, 11.25], [88.64, -43.36, 11.25], [94.64, -43.36, 11.25], [100.64, -43.36, 11.25], [-103.36, -37.36, 11.25], [-97.36, -37.36, 11.25], [-91.36, -37.36, 11.25], [-85.36, -37.36, 11.25], [-79.36, -37.36, 11.25], [-73.36, -37.36, 11.25], [-67.36, -37.36, 11.25], [-61.36, -37.36, 11.25], [-55.36, -37.36, 11.25], [-49.36, -37.36, 11.25], [-43.36, -37.36, 11.25], [-37.36, -37.36, 11.25], [-31.36, -37.36, 11.25], [-25.36, -37.36, 11.25], [-19.36, -37.36, 11.25], [-13.36, -37.36, 11.25], [-7.36, -37.36, 11.25], [-1.36, -37.36, 11.25], [4.64, -37.36, 11.25], [10.64, -37.36, 11.25], [16.64, -37.36, 11.25], [22.64, -37.36, 11.25], [28.64, -37.36, 11.25], [34.64, -37.36, 11.25], [40.64, -37.36, 11.25], [46.64, -37.36, 11.25], [52.64, -37.36, 11.25], [58.64, -37.36, 11.25], [64.64, -37.36, 11.25], [70.64, -37.36, 11.25], [76.64, -37.36, 11.25], [82.64, -37.36, 11.25], [88.64, -37.36, 11.25], [94.64, -37.36, 11.25], [100.64, -37.36, 11.25], [-103.36, -31.36, 11.25], [-97.36, -31.36, 11.25], [-91.36, -31.36, 11.25], [-85.36, -31.36, 11.25], [-79.36, -31.36, 11.25], [-73.36, -31.36, 11.25], [-67.36, -31.36, 11.25], [-61.36, -31.36, 11.25], [-55.36, -31.36, 11.25], [-49.36, -31.36, 11.25], [-43.36, -31.36, 11.25], [-37.36, -31.36, 11.25], [-31.36, -31.36, 11.25], [-25.36, -31.36, 11.25], [-19.36, -31.36, 11.25], [-13.36, -31.36, 11.25], [-7.36, -31.36, 11.25], [-1.36, -31.36, 11.25], [4.64, -31.36, 11.25], [10.64, -31.36, 11.25], [16.64, -31.36, 11.25], [22.64, -31.36, 11.25], [28.64, -31.36, 11.25], [34.64, -31.36, 11.25], [40.64, -31.36, 11.25], [46.64, -31.36, 11.25], [52.64, -31.36, 11.25], [58.64, -31.36, 11.25], [64.64, -31.36, 11.25], [70.64, -31.36, 11.25], [76.64, -31.36, 11.25], [82.64, -31.36, 11.25], [88.64, -31.36, 11.25], [94.64, -31.36, 11.25], [100.64, -31.36, 11.25], [-103.36, -25.36, 11.25], [-97.36, -25.36, 11.25], [-91.36, -25.36, 11.25], [-85.36, -25.36, 11.25], [-79.36, -25.36, 11.25], [-73.36, -25.36, 11.25], [-67.36, -25.36, 11.25], [-61.36, -25.36, 11.25], [-55.36, -25.36, 11.25], [-49.36, -25.36, 11.25], [-43.36, -25.36, 11.25], [-37.36, -25.36, 11.25], [-31.36, -25.36, 11.25], [-25.36, -25.36, 11.25], [-19.36, -25.36, 11.25], [-13.36, -25.36, 11.25], [-7.36, -25.36, 11.25], [-1.36, -25.36, 11.25], [4.64, -25.36, 11.25], [10.64, -25.36, 11.25], [16.64, -25.36, 11.25], [22.64, -25.36, 11.25], [28.64, -25.36, 11.25], [34.64, -25.36, 11.25], [40.64, -25.36, 11.25], [46.64, -25.36, 11.25], [52.64, -25.36, 11.25], [58.64, -25.36, 11.25], [64.64, -25.36, 11.25], [70.64, -25.36, 11.25], [76.64, -25.36, 11.25], [82.64, -25.36, 11.25], [88.64, -25.36, 11.25], [94.64, -25.36, 11.25], [100.64, -25.36, 11.25], [-103.36, -19.36, 11.25], [-97.36, -19.36, 11.25], [-91.36, -19.36, 11.25], [-85.36, -19.36, 11.25], [-79.36, -19.36, 11.25], [-73.36, -19.36, 11.25], [-67.36, -19.36, 11.25], [-61.36, -19.36, 11.25], [-55.36, -19.36, 11.25], [-49.36, -19.36, 11.25], [-43.36, -19.36, 11.25], [-37.36, -19.36, 11.25], [-31.36, -19.36, 11.25], [-25.36, -19.36, 11.25], [-19.36, -19.36, 11.25], [-13.36, -19.36, 11.25], [-7.36, -19.36, 11.25], [-1.36, -19.36, 11.25], [4.64, -19.36, 11.25], [10.64, -19.36, 11.25], [16.64, -19.36, 11.25], [22.64, -19.36, 11.25], [28.64, -19.36, 11.25], [34.64, -19.36, 11.25], [40.64, -19.36, 11.25], [46.64, -19.36, 11.25], [52.64, -19.36, 11.25], [58.64, -19.36, 11.25], [64.64, -19.36, 11.25], [70.64, -19.36, 11.25], [76.64, -19.36, 11.25], [82.64, -19.36, 11.25], [88.64, -19.36, 11.25], [94.64, -19.36, 11.25], [100.64, -19.36, 11.25], [-103.36, -13.36, 11.25], [-97.36, -13.36, 11.25], [-91.36, -13.36, 11.25], [-85.36, -13.36, 11.25], [-79.36, -13.36, 11.25], [-73.36, -13.36, 11.25], [-67.36, -13.36, 11.25], [-61.36, -13.36, 11.25], [-55.36, -13.36, 11.25], [-49.36, -13.36, 11.25], [-43.36, -13.36, 11.25], [-37.36, -13.36, 11.25], [-31.36, -13.36, 11.25], [-25.36, -13.36, 11.25], [-19.36, -13.36, 11.25], [-13.36, -13.36, 11.25], [-7.36, -13.36, 11.25], [-1.36, -13.36, 11.25], [4.64, -13.36, 11.25], [10.64, -13.36, 11.25], [16.64, -13.36, 11.25], [22.64, -13.36, 11.25], [28.64, -13.36, 11.25], [34.64, -13.36, 11.25], [40.64, -13.36, 11.25], [46.64, -13.36, 11.25], [52.64, -13.36, 11.25], [58.64, -13.36, 11.25], [64.64, -13.36, 11.25], [70.64, -13.36, 11.25], [76.64, -13.36, 11.25], [82.64, -13.36, 11.25], [88.64, -13.36, 11.25], [94.64, -13.36, 11.25], [100.64, -13.36, 11.25], [-103.36, -7.36, 11.25], [-97.36, -7.36, 11.25], [-91.36, -7.36, 11.25], [-85.36, -7.36, 11.25], [-79.36, -7.36, 11.25], [-73.36, -7.36, 11.25], [-67.36, -7.36, 11.25], [-61.36, -7.36, 11.25], [-55.36, -7.36, 11.25], [-49.36, -7.36, 11.25], [-43.36, -7.36, 11.25], [-37.36, -7.36, 11.25], [-31.36, -7.36, 11.25], [-25.36, -7.36, 11.25], [-19.36, -7.36, 11.25], [-13.36, -7.36, 11.25], [-7.36, -7.36, 11.25], [-1.36, -7.36, 11.25], [4.64, -7.36, 11.25], [10.64, -7.36, 11.25], [16.64, -7.36, 11.25], [22.64, -7.36, 11.25], [28.64, -7.36, 11.25], [34.64, -7.36, 11.25], [40.64, -7.36, 11.25], [46.64, -7.36, 11.25], [52.64, -7.36, 11.25], [58.64, -7.36, 11.25], [64.64, -7.36, 11.25], [70.64, -7.36, 11.25], [76.64, -7.36, 11.25], [82.64, -7.36, 11.25], [88.64, -7.36, 11.25], [94.64, -7.36, 11.25], [100.64, -7.36, 11.25], [-103.36, -1.36, 11.25], [-97.36, -1.36, 11.25], [-91.36, -1.36, 11.25], [-85.36, -1.36, 11.25], [-79.36, -1.36, 11.25], [-73.36, -1.36, 11.25], [-67.36, -1.36, 11.25], [-61.36, -1.36, 11.25], [-55.36, -1.36, 11.25], [-49.36, -1.36, 11.25], [-43.36, -1.36, 11.25], [-37.36, -1.36, 11.25], [-31.36, -1.36, 11.25], [-25.36, -1.36, 11.25], [-19.36, -1.36, 11.25], [-13.36, -1.36, 11.25], [-7.36, -1.36, 11.25], [-1.36, -1.36, 11.25], [4.64, -1.36, 11.25], [10.64, -1.36, 11.25], [16.64, -1.36, 11.25], [22.64, -1.36, 11.25], [28.64, -1.36, 11.25], [34.64, -1.36, 11.25], [40.64, -1.36, 11.25], [46.64, -1.36, 11.25], [52.64, -1.36, 11.25], [58.64, -1.36, 11.25], [64.64, -1.36, 11.25], [70.64, -1.36, 11.25], [76.64, -1.36, 11.25], [82.64, -1.36, 11.25], [88.64, -1.36, 11.25], [94.64, -1.36, 11.25], [100.64, -1.36, 11.25], [-103.36, 4.64, 11.25], [-97.36, 4.64, 11.25], [-91.36, 4.64, 11.25], [-85.36, 4.64, 11.25], [-79.36, 4.64, 11.25], [-73.36, 4.64, 11.25], [-67.36, 4.64, 11.25], [-61.36, 4.64, 11.25], [-55.36, 4.64, 11.25], [-49.36, 4.64, 11.25], [-43.36, 4.64, 11.25], [-37.36, 4.64, 11.25], [-31.36, 4.64, 11.25], [-25.36, 4.64, 11.25], [-19.36, 4.64, 11.25], [-13.36, 4.64, 11.25], [-7.36, 4.64, 11.25], [-1.36, 4.64, 11.25], [4.64, 4.64, 11.25], [10.64, 4.64, 11.25], [16.64, 4.64, 11.25], [22.64, 4.64, 11.25], [28.64, 4.64, 11.25], [34.64, 4.64, 11.25], [40.64, 4.64, 11.25], [46.64, 4.64, 11.25], [52.64, 4.64, 11.25], [58.64, 4.64, 11.25], [64.64, 4.64, 11.25], [70.64, 4.64, 11.25], [76.64, 4.64, 11.25], [82.64, 4.64, 11.25], [88.64, 4.64, 11.25], [94.64, 4.64, 11.25], [100.64, 4.64, 11.25], [-103.36, 10.64, 11.25], [-97.36, 10.64, 11.25], [-91.36, 10.64, 11.25], [-85.36, 10.64, 11.25], [-79.36, 10.64, 11.25], [-73.36, 10.64, 11.25], [-67.36, 10.64, 11.25], [-61.36, 10.64, 11.25], [-55.36, 10.64, 11.25], [-49.36, 10.64, 11.25], [-43.36, 10.64, 11.25], [-37.36, 10.64, 11.25], [-31.36, 10.64, 11.25], [-25.36, 10.64, 11.25], [-19.36, 10.64, 11.25], [-13.36, 10.64, 11.25], [-7.36, 10.64, 11.25], [-1.36, 10.64, 11.25], [4.64, 10.64, 11.25], [10.64, 10.64, 11.25], [16.64, 10.64, 11.25], [22.64, 10.64, 11.25], [28.64, 10.64, 11.25], [34.64, 10.64, 11.25], [40.64, 10.64, 11.25], [46.64, 10.64, 11.25], [52.64, 10.64, 11.25], [58.64, 10.64, 11.25], [64.64, 10.64, 11.25], [70.64, 10.64, 11.25], [76.64, 10.64, 11.25], [82.64, 10.64, 11.25], [88.64, 10.64, 11.25], [94.64, 10.64, 11.25], [100.64, 10.64, 11.25], [-103.36, 16.64, 11.25], [-97.36, 16.64, 11.25], [-91.36, 16.64, 11.25], [-85.36, 16.64, 11.25], [-79.36, 16.64, 11.25], [-73.36, 16.64, 11.25], [-67.36, 16.64, 11.25], [-61.36, 16.64, 11.25], [-55.36, 16.64, 11.25], [-49.36, 16.64, 11.25], [-43.36, 16.64, 11.25], [-37.36, 16.64, 11.25], [-31.36, 16.64, 11.25], [-25.36, 16.64, 11.25], [-19.36, 16.64, 11.25], [-13.36, 16.64, 11.25], [-7.36, 16.64, 11.25], [-1.36, 16.64, 11.25], [4.64, 16.64, 11.25], [10.64, 16.64, 11.25], [16.64, 16.64, 11.25], [22.64, 16.64, 11.25], [28.64, 16.64, 11.25], [34.64, 16.64, 11.25], [40.64, 16.64, 11.25], [46.64, 16.64, 11.25], [52.64, 16.64, 11.25], [58.64, 16.64, 11.25], [64.64, 16.64, 11.25], [70.64, 16.64, 11.25], [76.64, 16.64, 11.25], [82.64, 16.64, 11.25], [88.64, 16.64, 11.25], [94.64, 16.64, 11.25], [100.64, 16.64, 11.25], [-103.36, 22.64, 11.25], [-97.36, 22.64, 11.25], [-91.36, 22.64, 11.25], [-85.36, 22.64, 11.25], [-79.36, 22.64, 11.25], [-73.36, 22.64, 11.25], [-67.36, 22.64, 11.25], [-61.36, 22.64, 11.25], [-55.36, 22.64, 11.25], [-49.36, 22.64, 11.25], [-43.36, 22.64, 11.25], [-37.36, 22.64, 11.25], [-31.36, 22.64, 11.25], [-25.36, 22.64, 11.25], [-19.36, 22.64, 11.25], [-13.36, 22.64, 11.25], [-7.36, 22.64, 11.25], [-1.36, 22.64, 11.25], [4.64, 22.64, 11.25], [10.64, 22.64, 11.25], [16.64, 22.64, 11.25], [22.64, 22.64, 11.25], [28.64, 22.64, 11.25], [34.64, 22.64, 11.25], [40.64, 22.64, 11.25], [46.64, 22.64, 11.25], [52.64, 22.64, 11.25], [58.64, 22.64, 11.25], [64.64, 22.64, 11.25], [70.64, 22.64, 11.25], [76.64, 22.64, 11.25], [82.64, 22.64, 11.25], [88.64, 22.64, 11.25], [94.64, 22.64, 11.25], [100.64, 22.64, 11.25], [-103.36, 28.64, 11.25], [-97.36, 28.64, 11.25], [-91.36, 28.64, 11.25], [-85.36, 28.64, 11.25], [-79.36, 28.64, 11.25], [-73.36, 28.64, 11.25], [-67.36, 28.64, 11.25], [-61.36, 28.64, 11.25], [-55.36, 28.64, 11.25], [-49.36, 28.64, 11.25], [-43.36, 28.64, 11.25], [-37.36, 28.64, 11.25], [-31.36, 28.64, 11.25], [-25.36, 28.64, 11.25], [-19.36, 28.64, 11.25], [-13.36, 28.64, 11.25], [-7.36, 28.64, 11.25], [-1.36, 28.64, 11.25], [4.64, 28.64, 11.25], [10.64, 28.64, 11.25], [16.64, 28.64, 11.25], [22.64, 28.64, 11.25], [28.64, 28.64, 11.25], [34.64, 28.64, 11.25], [40.64, 28.64, 11.25], [46.64, 28.64, 11.25], [52.64, 28.64, 11.25], [58.64, 28.64, 11.25], [64.64, 28.64, 11.25], [70.64, 28.64, 11.25], [76.64, 28.64, 11.25], [82.64, 28.64, 11.25], [88.64, 28.64, 11.25], [94.64, 28.64, 11.25], [100.64, 28.64, 11.25], [-103.36, 34.64, 11.25], [-97.36, 34.64, 11.25], [-91.36, 34.64, 11.25], [-85.36, 34.64, 11.25], [-79.36, 34.64, 11.25], [-73.36, 34.64, 11.25], [-67.36, 34.64, 11.25], [-61.36, 34.64, 11.25], [-55.36, 34.64, 11.25], [-49.36, 34.64, 11.25], [-43.36, 34.64, 11.25], [-37.36, 34.64, 11.25], [-31.36, 34.64, 11.25], [-25.36, 34.64, 11.25], [-19.36, 34.64, 11.25], [-13.36, 34.64, 11.25], [-7.36, 34.64, 11.25], [-1.36, 34.64, 11.25], [4.64, 34.64, 11.25], [10.64, 34.64, 11.25], [16.64, 34.64, 11.25], [22.64, 34.64, 11.25], [28.64, 34.64, 11.25], [34.64, 34.64, 11.25], [40.64, 34.64, 11.25], [46.64, 34.64, 11.25], [52.64, 34.64, 11.25], [58.64, 34.64, 11.25], [64.64, 34.64, 11.25], [70.64, 34.64, 11.25], [76.64, 34.64, 11.25], [82.64, 34.64, 11.25], [88.64, 34.64, 11.25], [94.64, 34.64, 11.25], [100.64, 34.64, 11.25], [-103.36, 40.64, 11.25], [-97.36, 40.64, 11.25], [-91.36, 40.64, 11.25], [-85.36, 40.64, 11.25], [-79.36, 40.64, 11.25], [-73.36, 40.64, 11.25], [-67.36, 40.64, 11.25], [-61.36, 40.64, 11.25], [-55.36, 40.64, 11.25], [-49.36, 40.64, 11.25], [-43.36, 40.64, 11.25], [-37.36, 40.64, 11.25], [-31.36, 40.64, 11.25], [-25.36, 40.64, 11.25], [-19.36, 40.64, 11.25], [-13.36, 40.64, 11.25], [-7.36, 40.64, 11.25], [-1.36, 40.64, 11.25], [4.64, 40.64, 11.25], [10.64, 40.64, 11.25], [16.64, 40.64, 11.25], [22.64, 40.64, 11.25], [28.64, 40.64, 11.25], [34.64, 40.64, 11.25], [40.64, 40.64, 11.25], [46.64, 40.64, 11.25], [52.64, 40.64, 11.25], [58.64, 40.64, 11.25], [64.64, 40.64, 11.25], [70.64, 40.64, 11.25], [76.64, 40.64, 11.25], [82.64, 40.64, 11.25], [88.64, 40.64, 11.25], [94.64, 40.64, 11.25], [100.64, 40.64, 11.25], [-103.36, 46.64, 11.25], [-97.36, 46.64, 11.25], [-91.36, 46.64, 11.25], [-85.36, 46.64, 11.25], [-79.36, 46.64, 11.25], [-73.36, 46.64, 11.25], [-67.36, 46.64, 11.25], [-61.36, 46.64, 11.25], [-55.36, 46.64, 11.25], [-49.36, 46.64, 11.25], [-43.36, 46.64, 11.25], [-37.36, 46.64, 11.25], [-31.36, 46.64, 11.25], [-25.36, 46.64, 11.25], [-19.36, 46.64, 11.25], [-13.36, 46.64, 11.25], [-7.36, 46.64, 11.25], [-1.36, 46.64, 11.25], [4.64, 46.64, 11.25], [10.64, 46.64, 11.25], [16.64, 46.64, 11.25], [22.64, 46.64, 11.25], [28.64, 46.64, 11.25], [34.64, 46.64, 11.25], [40.64, 46.64, 11.25], [46.64, 46.64, 11.25], [52.64, 46.64, 11.25], [58.64, 46.64, 11.25], [64.64, 46.64, 11.25], [70.64, 46.64, 11.25], [76.64, 46.64, 11.25], [82.64, 46.64, 11.25], [88.64, 46.64, 11.25], [94.64, 46.64, 11.25], [100.64, 46.64, 11.25], [-97.36, 52.64, 11.25], [-91.36, 52.64, 11.25], [-85.36, 52.64, 11.25], [-79.36, 52.64, 11.25], [-73.36, 52.64, 11.25], [-67.36, 52.64, 11.25], [-61.36, 52.64, 11.25], [-55.36, 52.64, 11.25], [-49.36, 52.64, 11.25], [-43.36, 52.64, 11.25], [-37.36, 52.64, 11.25], [-31.36, 52.64, 11.25], [-25.36, 52.64, 11.25], [-19.36, 52.64, 11.25], [-13.36, 52.64, 11.25], [-7.36, 52.64, 11.25], [-1.36, 52.64, 11.25], [4.64, 52.64, 11.25], [10.64, 52.64, 11.25], [16.64, 52.64, 11.25], [22.64, 52.64, 11.25], [28.64, 52.64, 11.25], [34.64, 52.64, 11.25], [40.64, 52.64, 11.25], [46.64, 52.64, 11.25], [52.64, 52.64, 11.25], [58.64, 52.64, 11.25], [64.64, 52.64, 11.25], [70.64, 52.64, 11.25], [76.64, 52.64, 11.25], [82.64, 52.64, 11.25], [88.64, 52.64, 11.25], [94.64, 52.64, 11.25], [100.64, 52.64, 11.25], [-97.36, 58.64, 11.25], [-91.36, 58.64, 11.25], [-85.36, 58.64, 11.25], [-79.36, 58.64, 11.25], [-73.36, 58.64, 11.25], [-67.36, 58.64, 11.25], [-61.36, 58.64, 11.25], [-55.36, 58.64, 11.25], [-49.36, 58.64, 11.25], [-43.36, 58.64, 11.25], [-37.36, 58.64, 11.25], [-31.36, 58.64, 11.25], [-25.36, 58.64, 11.25], [-19.36, 58.64, 11.25], [-13.36, 58.64, 11.25], [-7.36, 58.64, 11.25], [-1.36, 58.64, 11.25], [4.64, 58.64, 11.25], [10.64, 58.64, 11.25], [16.64, 58.64, 11.25], [22.64, 58.64, 11.25], [28.64, 58.64, 11.25], [34.64, 58.64, 11.25], [40.64, 58.64, 11.25], [46.64, 58.64, 11.25], [52.64, 58.64, 11.25], [58.64, 58.64, 11.25], [64.64, 58.64, 11.25], [70.64, 58.64, 11.25], [76.64, 58.64, 11.25], [82.64, 58.64, 11.25], [88.64, 58.64, 11.25], [94.64, 58.64, 11.25], [100.64, 58.64, 11.25], [-97.36, 64.64, 11.25], [-91.36, 64.64, 11.25], [-85.36, 64.64, 11.25], [-79.36, 64.64, 11.25], [-73.36, 64.64, 11.25], [-67.36, 64.64, 11.25], [-61.36, 64.64, 11.25], [-55.36, 64.64, 11.25], [-49.36, 64.64, 11.25], [-43.36, 64.64, 11.25], [-37.36, 64.64, 11.25], [-31.36, 64.64, 11.25], [-25.36, 64.64, 11.25], [-19.36, 64.64, 11.25], [-13.36, 64.64, 11.25], [-7.36, 64.64, 11.25], [-1.36, 64.64, 11.25], [4.64, 64.64, 11.25], [10.64, 64.64, 11.25], [16.64, 64.64, 11.25], [22.64, 64.64, 11.25], [28.64, 64.64, 11.25], [34.64, 64.64, 11.25], [40.64, 64.64, 11.25], [46.64, 64.64, 11.25], [52.64, 64.64, 11.25], [58.64, 64.64, 11.25], [64.64, 64.64, 11.25], [70.64, 64.64, 11.25], [76.64, 64.64, 11.25], [82.64, 64.64, 11.25], [88.64, 64.64, 11.25], [94.64, 64.64, 11.25], [100.64, 64.64, 11.25], [-97.36, 70.64, 11.25], [-91.36, 70.64, 11.25], [-85.36, 70.64, 11.25], [-79.36, 70.64, 11.25], [-73.36, 70.64, 11.25], [-67.36, 70.64, 11.25], [-61.36, 70.64, 11.25], [-55.36, 70.64, 11.25], [-49.36, 70.64, 11.25], [-43.36, 70.64, 11.25], [-37.36, 70.64, 11.25], [-31.36, 70.64, 11.25], [-25.36, 70.64, 11.25], [-19.36, 70.64, 11.25], [-13.36, 70.64, 11.25], [-7.36, 70.64, 11.25], [-1.36, 70.64, 11.25], [4.64, 70.64, 11.25], [10.64, 70.64, 11.25], [16.64, 70.64, 11.25], [22.64, 70.64, 11.25], [28.64, 70.64, 11.25], [34.64, 70.64, 11.25], [40.64, 70.64, 11.25], [46.64, 70.64, 11.25], [52.64, 70.64, 11.25], [58.64, 70.64, 11.25], [64.64, 70.64, 11.25], [70.64, 70.64, 11.25], [76.64, 70.64, 11.25], [82.64, 70.64, 11.25], [88.64, 70.64, 11.25], [94.64, 70.64, 11.25], [100.64, 70.64, 11.25], [-97.36, 76.64, 11.25], [-91.36, 76.64, 11.25], [-85.36, 76.64, 11.25], [-79.36, 76.64, 11.25], [-73.36, 76.64, 11.25], [-67.36, 76.64, 11.25], [-61.36, 76.64, 11.25], [-55.36, 76.64, 11.25], [-49.36, 76.64, 11.25], [-43.36, 76.64, 11.25], [-37.36, 76.64, 11.25], [-31.36, 76.64, 11.25], [-25.36, 76.64, 11.25], [-19.36, 76.64, 11.25], [-13.36, 76.64, 11.25], [-7.36, 76.64, 11.25], [-1.36, 76.64, 11.25], [4.64, 76.64, 11.25], [10.64, 76.64, 11.25], [16.64, 76.64, 11.25], [22.64, 76.64, 11.25], [28.64, 76.64, 11.25], [34.64, 76.64, 11.25], [40.64, 76.64, 11.25], [46.64, 76.64, 11.25], [52.64, 76.64, 11.25], [58.64, 76.64, 11.25], [64.64, 76.64, 11.25], [70.64, 76.64, 11.25], [76.64, 76.64, 11.25], [82.64, 76.64, 11.25], [88.64, 76.64, 11.25], [94.64, 76.64, 11.25], [100.64, 76.64, 11.25], [-97.36, 82.64, 11.25], [-91.36, 82.64, 11.25], [-85.36, 82.64, 11.25], [-79.36, 82.64, 11.25], [-73.36, 82.64, 11.25], [-67.36, 82.64, 11.25], [-61.36, 82.64, 11.25], [-55.36, 82.64, 11.25], [-49.36, 82.64, 11.25], [-43.36, 82.64, 11.25], [-37.36, 82.64, 11.25], [-31.36, 82.64, 11.25], [-25.36, 82.64, 11.25], [-19.36, 82.64, 11.25], [-13.36, 82.64, 11.25], [-7.36, 82.64, 11.25], [-1.36, 82.64, 11.25], [4.64, 82.64, 11.25], [10.64, 82.64, 11.25], [16.64, 82.64, 11.25], [22.64, 82.64, 11.25], [28.64, 82.64, 11.25], [34.64, 82.64, 11.25], [40.64, 82.64, 11.25], [46.64, 82.64, 11.25], [52.64, 82.64, 11.25], [58.64, 82.64, 11.25], [64.64, 82.64, 11.25], [70.64, 82.64, 11.25], [76.64, 82.64, 11.25], [82.64, 82.64, 11.25], [88.64, 82.64, 11.25], [94.64, 82.64, 11.25], [100.64, 82.64, 11.25], [-97.36, 88.64, 11.25], [-91.36, 88.64, 11.25], [-85.36, 88.64, 11.25], [-79.36, 88.64, 11.25], [-73.36, 88.64, 11.25], [-67.36, 88.64, 11.25], [-61.36, 88.64, 11.25], [-55.36, 88.64, 11.25], [-49.36, 88.64, 11.25], [-43.36, 88.64, 11.25], [-37.36, 88.64, 11.25], [-31.36, 88.64, 11.25], [-25.36, 88.64, 11.25], [-19.36, 88.64, 11.25], [-13.36, 88.64, 11.25], [-7.36, 88.64, 11.25], [-1.36, 88.64, 11.25], [4.64, 88.64, 11.25], [10.64, 88.64, 11.25], [16.64, 88.64, 11.25], [22.64, 88.64, 11.25], [28.64, 88.64, 11.25], [34.64, 88.64, 11.25], [40.64, 88.64, 11.25], [46.64, 88.64, 11.25], [52.64, 88.64, 11.25], [58.64, 88.64, 11.25], [64.64, 88.64, 11.25], [70.64, 88.64, 11.25], [76.64, 88.64, 11.25], [82.64, 88.64, 11.25], [88.64, 88.64, 11.25], [94.64, 88.64, 11.25], [100.64, 88.64, 11.25], [-91.36, 94.64, 11.25], [-85.36, 94.64, 11.25], [-79.36, 94.64, 11.25], [-73.36, 94.64, 11.25], [-67.36, 94.64, 11.25], [-61.36, 94.64, 11.25], [-55.36, 94.64, 11.25], [-49.36, 94.64, 11.25], [-43.36, 94.64, 11.25], [-37.36, 94.64, 11.25], [-31.36, 94.64, 11.25], [-25.36, 94.64, 11.25], [-19.36, 94.64, 11.25], [-13.36, 94.64, 11.25], [-7.36, 94.64, 11.25], [-1.36, 94.64, 11.25], [4.64, 94.64, 11.25], [10.64, 94.64, 11.25], [16.64, 94.64, 11.25], [22.64, 94.64, 11.25], [28.64, 94.64, 11.25], [34.64, 94.64, 11.25], [40.64, 94.64, 11.25], [46.64, 94.64, 11.25], [52.64, 94.64, 11.25], [58.64, 94.64, 11.25], [64.64, 94.64, 11.25], [70.64, 94.64, 11.25], [76.64, 94.64, 11.25], [82.64, 94.64, 11.25], [88.64, 94.64, 11.25], [94.64, 94.64, 11.25], [100.64, 94.64, 11.25], [-91.36, 100.64, 11.25], [-85.36, 100.64, 11.25], [-79.36, 100.64, 11.25], [-73.36, 100.64, 11.25], [-67.36, 100.64, 11.25], [-61.36, 100.64, 11.25], [-55.36, 100.64, 11.25], [-49.36, 100.64, 11.25], [-43.36, 100.64, 11.25], [-37.36, 100.64, 11.25], [-31.36, 100.64, 11.25], [-25.36, 100.64, 11.25], [-19.36, 100.64, 11.25], [-13.36, 100.64, 11.25], [-7.36, 100.64, 11.25], [-1.36, 100.64, 11.25], [4.64, 100.64, 11.25], [10.64, 100.64, 11.25], [16.64, 100.64, 11.25], [22.64, 100.64, 11.25], [28.64, 100.64, 11.25], [34.64, 100.64, 11.25], [40.64, 100.64, 11.25], [46.64, 100.64, 11.25], [52.64, 100.64, 11.25], [58.64, 100.64, 11.25], [64.64, 100.64, 11.25], [70.64, 100.64, 11.25], [76.64, 100.64, 11.25], [82.64, 100.64, 11.25], [88.64, 100.64, 11.25], [94.64, 100.64, 11.25], [100.64, 100.64, 11.25], [-19.36, -103.36, 17.25], [-13.36, -103.36, 17.25], [-7.36, -103.36, 17.25], [-1.36, -103.36, 17.25], [4.64, -103.36, 17.25], [10.64, -103.36, 17.25], [16.64, -103.36, 17.25], [22.64, -103.36, 17.25], [28.64, -103.36, 17.25], [34.64, -103.36, 17.25], [40.64, -103.36, 17.25], [46.64, -103.36, 17.25], [52.64, -103.36, 17.25], [58.64, -103.36, 17.25], [64.64, -103.36, 17.25], [70.64, -103.36, 17.25], [76.64, -103.36, 17.25], [82.64, -103.36, 17.25], [88.64, -103.36, 17.25], [-97.36, -97.36, 17.25], [-91.36, -97.36, 17.25], [-85.36, -97.36, 17.25], [-79.36, -97.36, 17.25], [-73.36, -97.36, 17.25], [-67.36, -97.36, 17.25], [-61.36, -97.36, 17.25], [-55.36, -97.36, 17.25], [-49.36, -97.36, 17.25], [-43.36, -97.36, 17.25], [-37.36, -97.36, 17.25], [-31.36, -97.36, 17.25], [-25.36, -97.36, 17.25], [-19.36, -97.36, 17.25], [-13.36, -97.36, 17.25], [-7.36, -97.36, 17.25], [-1.36, -97.36, 17.25], [4.64, -97.36, 17.25], [10.64, -97.36, 17.25], [16.64, -97.36, 17.25], [22.64, -97.36, 17.25], [28.64, -97.36, 17.25], [34.64, -97.36, 17.25], [40.64, -97.36, 17.25], [46.64, -97.36, 17.25], [52.64, -97.36, 17.25], [58.64, -97.36, 17.25], [64.64, -97.36, 17.25], [70.64, -97.36, 17.25], [76.64, -97.36, 17.25], [82.64, -97.36, 17.25], [88.64, -97.36, 17.25], [94.64, -97.36, 17.25], [-103.36, -91.36, 17.25], [-97.36, -91.36, 17.25], [-91.36, -91.36, 17.25], [-85.36, -91.36, 17.25], [-79.36, -91.36, 17.25], [-73.36, -91.36, 17.25], [-67.36, -91.36, 17.25], [-61.36, -91.36, 17.25], [-55.36, -91.36, 17.25], [-49.36, -91.36, 17.25], [-43.36, -91.36, 17.25], [-37.36, -91.36, 17.25], [-31.36, -91.36, 17.25], [-25.36, -91.36, 17.25], [-19.36, -91.36, 17.25], [-13.36, -91.36, 17.25], [-7.36, -91.36, 17.25], [-1.36, -91.36, 17.25], [4.64, -91.36, 17.25], [10.64, -91.36, 17.25], [16.64, -91.36, 17.25], [22.64, -91.36, 17.25], [28.64, -91.36, 17.25], [34.64, -91.36, 17.25], [40.64, -91.36, 17.25], [46.64, -91.36, 17.25], [52.64, -91.36, 17.25], [58.64, -91.36, 17.25], [64.64, -91.36, 17.25], [70.64, -91.36, 17.25], [76.64, -91.36, 17.25], [82.64, -91.36, 17.25], [88.64, -91.36, 17.25], [94.64, -91.36, 17.25], [100.64, -91.36, 17.25], [-103.36, -85.36, 17.25], [-97.36, -85.36, 17.25], [-91.36, -85.36, 17.25], [-85.36, -85.36, 17.25], [-79.36, -85.36, 17.25], [-73.36, -85.36, 17.25], [-67.36, -85.36, 17.25], [-61.36, -85.36, 17.25], [-55.36, -85.36, 17.25], [-49.36, -85.36, 17.25], [-43.36, -85.36, 17.25], [-37.36, -85.36, 17.25], [-31.36, -85.36, 17.25], [-25.36, -85.36, 17.25], [-19.36, -85.36, 17.25], [-13.36, -85.36, 17.25], [-7.36, -85.36, 17.25], [-1.36, -85.36, 17.25], [4.64, -85.36, 17.25], [10.64, -85.36, 17.25], [16.64, -85.36, 17.25], [22.64, -85.36, 17.25], [28.64, -85.36, 17.25], [34.64, -85.36, 17.25], [40.64, -85.36, 17.25], [46.64, -85.36, 17.25], [52.64, -85.36, 17.25], [58.64, -85.36, 17.25], [64.64, -85.36, 17.25], [70.64, -85.36, 17.25], [76.64, -85.36, 17.25], [82.64, -85.36, 17.25], [88.64, -85.36, 17.25], [94.64, -85.36, 17.25], [100.64, -85.36, 17.25], [-103.36, -79.36, 17.25], [-97.36, -79.36, 17.25], [-91.36, -79.36, 17.25], [-85.36, -79.36, 17.25], [-79.36, -79.36, 17.25], [-73.36, -79.36, 17.25], [-67.36, -79.36, 17.25], [-61.36, -79.36, 17.25], [-55.36, -79.36, 17.25], [-49.36, -79.36, 17.25], [-43.36, -79.36, 17.25], [-37.36, -79.36, 17.25], [-31.36, -79.36, 17.25], [-25.36, -79.36, 17.25], [-19.36, -79.36, 17.25], [-13.36, -79.36, 17.25], [-7.36, -79.36, 17.25], [-1.36, -79.36, 17.25], [4.64, -79.36, 17.25], [10.64, -79.36, 17.25], [16.64, -79.36, 17.25], [22.64, -79.36, 17.25], [28.64, -79.36, 17.25], [34.64, -79.36, 17.25], [40.64, -79.36, 17.25], [46.64, -79.36, 17.25], [52.64, -79.36, 17.25], [58.64, -79.36, 17.25], [64.64, -79.36, 17.25], [70.64, -79.36, 17.25], [76.64, -79.36, 17.25], [82.64, -79.36, 17.25], [88.64, -79.36, 17.25], [94.64, -79.36, 17.25], [100.64, -79.36, 17.25], [-103.36, -73.36, 17.25], [-97.36, -73.36, 17.25], [-91.36, -73.36, 17.25], [-85.36, -73.36, 17.25], [-79.36, -73.36, 17.25], [-73.36, -73.36, 17.25], [-67.36, -73.36, 17.25], [-61.36, -73.36, 17.25], [-55.36, -73.36, 17.25], [-49.36, -73.36, 17.25], [-43.36, -73.36, 17.25], [-37.36, -73.36, 17.25], [-31.36, -73.36, 17.25], [-25.36, -73.36, 17.25], [-19.36, -73.36, 17.25], [-13.36, -73.36, 17.25], [-7.36, -73.36, 17.25], [-1.36, -73.36, 17.25], [4.64, -73.36, 17.25], [10.64, -73.36, 17.25], [16.64, -73.36, 17.25], [22.64, -73.36, 17.25], [28.64, -73.36, 17.25], [34.64, -73.36, 17.25], [40.64, -73.36, 17.25], [46.64, -73.36, 17.25], [52.64, -73.36, 17.25], [58.64, -73.36, 17.25], [64.64, -73.36, 17.25], [70.64, -73.36, 17.25], [76.64, -73.36, 17.25], [82.64, -73.36, 17.25], [88.64, -73.36, 17.25], [94.64, -73.36, 17.25], [100.64, -73.36, 17.25], [-103.36, -67.36, 17.25], [-97.36, -67.36, 17.25], [-91.36, -67.36, 17.25], [-85.36, -67.36, 17.25], [-79.36, -67.36, 17.25], [-73.36, -67.36, 17.25], [-67.36, -67.36, 17.25], [-61.36, -67.36, 17.25], [-55.36, -67.36, 17.25], [-49.36, -67.36, 17.25], [-43.36, -67.36, 17.25], [-37.36, -67.36, 17.25], [-31.36, -67.36, 17.25], [-25.36, -67.36, 17.25], [-19.36, -67.36, 17.25], [-13.36, -67.36, 17.25], [-7.36, -67.36, 17.25], [-1.36, -67.36, 17.25], [4.64, -67.36, 17.25], [10.64, -67.36, 17.25], [16.64, -67.36, 17.25], [22.64, -67.36, 17.25], [28.64, -67.36, 17.25], [34.64, -67.36, 17.25], [40.64, -67.36, 17.25], [46.64, -67.36, 17.25], [52.64, -67.36, 17.25], [58.64, -67.36, 17.25], [64.64, -67.36, 17.25], [70.64, -67.36, 17.25], [76.64, -67.36, 17.25], [82.64, -67.36, 17.25], [88.64, -67.36, 17.25], [94.64, -67.36, 17.25], [100.64, -67.36, 17.25], [-103.36, -61.36, 17.25], [-97.36, -61.36, 17.25], [-91.36, -61.36, 17.25], [-85.36, -61.36, 17.25], [-79.36, -61.36, 17.25], [-73.36, -61.36, 17.25], [-67.36, -61.36, 17.25], [-61.36, -61.36, 17.25], [-55.36, -61.36, 17.25], [-49.36, -61.36, 17.25], [-43.36, -61.36, 17.25], [-37.36, -61.36, 17.25], [-31.36, -61.36, 17.25], [-25.36, -61.36, 17.25], [-19.36, -61.36, 17.25], [-13.36, -61.36, 17.25], [-7.36, -61.36, 17.25], [-1.36, -61.36, 17.25], [4.64, -61.36, 17.25], [10.64, -61.36, 17.25], [16.64, -61.36, 17.25], [22.64, -61.36, 17.25], [28.64, -61.36, 17.25], [34.64, -61.36, 17.25], [40.64, -61.36, 17.25], [46.64, -61.36, 17.25], [52.64, -61.36, 17.25], [58.64, -61.36, 17.25], [64.64, -61.36, 17.25], [70.64, -61.36, 17.25], [76.64, -61.36, 17.25], [82.64, -61.36, 17.25], [88.64, -61.36, 17.25], [94.64, -61.36, 17.25], [100.64, -61.36, 17.25], [-103.36, -55.36, 17.25], [-97.36, -55.36, 17.25], [-91.36, -55.36, 17.25], [-85.36, -55.36, 17.25], [-79.36, -55.36, 17.25], [-73.36, -55.36, 17.25], [-67.36, -55.36, 17.25], [-61.36, -55.36, 17.25], [-55.36, -55.36, 17.25], [-49.36, -55.36, 17.25], [-43.36, -55.36, 17.25], [-37.36, -55.36, 17.25], [-31.36, -55.36, 17.25], [-25.36, -55.36, 17.25], [-19.36, -55.36, 17.25], [-13.36, -55.36, 17.25], [-7.36, -55.36, 17.25], [-1.36, -55.36, 17.25], [4.64, -55.36, 17.25], [10.64, -55.36, 17.25], [16.64, -55.36, 17.25], [22.64, -55.36, 17.25], [28.64, -55.36, 17.25], [34.64, -55.36, 17.25], [40.64, -55.36, 17.25], [46.64, -55.36, 17.25], [52.64, -55.36, 17.25], [58.64, -55.36, 17.25], [64.64, -55.36, 17.25], [70.64, -55.36, 17.25], [76.64, -55.36, 17.25], [82.64, -55.36, 17.25], [88.64, -55.36, 17.25], [94.64, -55.36, 17.25], [100.64, -55.36, 17.25], [-103.36, -49.36, 17.25], [-97.36, -49.36, 17.25], [-91.36, -49.36, 17.25], [-85.36, -49.36, 17.25], [-79.36, -49.36, 17.25], [-73.36, -49.36, 17.25], [-67.36, -49.36, 17.25], [-61.36, -49.36, 17.25], [-55.36, -49.36, 17.25], [-49.36, -49.36, 17.25], [-43.36, -49.36, 17.25], [-37.36, -49.36, 17.25], [-31.36, -49.36, 17.25], [-25.36, -49.36, 17.25], [-19.36, -49.36, 17.25], [-13.36, -49.36, 17.25], [-7.36, -49.36, 17.25], [-1.36, -49.36, 17.25], [4.64, -49.36, 17.25], [10.64, -49.36, 17.25], [16.64, -49.36, 17.25], [22.64, -49.36, 17.25], [28.64, -49.36, 17.25], [34.64, -49.36, 17.25], [40.64, -49.36, 17.25], [46.64, -49.36, 17.25], [52.64, -49.36, 17.25], [58.64, -49.36, 17.25], [64.64, -49.36, 17.25], [70.64, -49.36, 17.25], [76.64, -49.36, 17.25], [82.64, -49.36, 17.25], [88.64, -49.36, 17.25], [94.64, -49.36, 17.25], [100.64, -49.36, 17.25], [-103.36, -43.36, 17.25], [-97.36, -43.36, 17.25], [-91.36, -43.36, 17.25], [-85.36, -43.36, 17.25], [-79.36, -43.36, 17.25], [-73.36, -43.36, 17.25], [-67.36, -43.36, 17.25], [-61.36, -43.36, 17.25], [-55.36, -43.36, 17.25], [-49.36, -43.36, 17.25], [-43.36, -43.36, 17.25], [-37.36, -43.36, 17.25], [-31.36, -43.36, 17.25], [-25.36, -43.36, 17.25], [-19.36, -43.36, 17.25], [-13.36, -43.36, 17.25], [-7.36, -43.36, 17.25], [-1.36, -43.36, 17.25], [4.64, -43.36, 17.25], [10.64, -43.36, 17.25], [16.64, -43.36, 17.25], [22.64, -43.36, 17.25], [28.64, -43.36, 17.25], [34.64, -43.36, 17.25], [40.64, -43.36, 17.25], [46.64, -43.36, 17.25], [52.64, -43.36, 17.25], [58.64, -43.36, 17.25], [64.64, -43.36, 17.25], [70.64, -43.36, 17.25], [76.64, -43.36, 17.25], [82.64, -43.36, 17.25], [88.64, -43.36, 17.25], [94.64, -43.36, 17.25], [100.64, -43.36, 17.25], [-103.36, -37.36, 17.25], [-97.36, -37.36, 17.25], [-91.36, -37.36, 17.25], [-85.36, -37.36, 17.25], [-79.36, -37.36, 17.25], [-73.36, -37.36, 17.25], [-67.36, -37.36, 17.25], [-61.36, -37.36, 17.25], [-55.36, -37.36, 17.25], [-49.36, -37.36, 17.25], [-43.36, -37.36, 17.25], [-37.36, -37.36, 17.25], [-31.36, -37.36, 17.25], [-25.36, -37.36, 17.25], [-19.36, -37.36, 17.25], [-13.36, -37.36, 17.25], [-7.36, -37.36, 17.25], [-1.36, -37.36, 17.25], [4.64, -37.36, 17.25], [10.64, -37.36, 17.25], [16.64, -37.36, 17.25], [22.64, -37.36, 17.25], [28.64, -37.36, 17.25], [34.64, -37.36, 17.25], [40.64, -37.36, 17.25], [46.64, -37.36, 17.25], [52.64, -37.36, 17.25], [58.64, -37.36, 17.25], [64.64, -37.36, 17.25], [70.64, -37.36, 17.25], [76.64, -37.36, 17.25], [82.64, -37.36, 17.25], [88.64, -37.36, 17.25], [94.64, -37.36, 17.25], [100.64, -37.36, 17.25], [-103.36, -31.36, 17.25], [-97.36, -31.36, 17.25], [-91.36, -31.36, 17.25], [-85.36, -31.36, 17.25], [-79.36, -31.36, 17.25], [-73.36, -31.36, 17.25], [-67.36, -31.36, 17.25], [-61.36, -31.36, 17.25], [-55.36, -31.36, 17.25], [-49.36, -31.36, 17.25], [-43.36, -31.36, 17.25], [-37.36, -31.36, 17.25], [-31.36, -31.36, 17.25], [-25.36, -31.36, 17.25], [-19.36, -31.36, 17.25], [-13.36, -31.36, 17.25], [-7.36, -31.36, 17.25], [-1.36, -31.36, 17.25], [4.64, -31.36, 17.25], [10.64, -31.36, 17.25], [16.64, -31.36, 17.25], [22.64, -31.36, 17.25], [28.64, -31.36, 17.25], [34.64, -31.36, 17.25], [40.64, -31.36, 17.25], [46.64, -31.36, 17.25], [52.64, -31.36, 17.25], [58.64, -31.36, 17.25], [64.64, -31.36, 17.25], [70.64, -31.36, 17.25], [76.64, -31.36, 17.25], [82.64, -31.36, 17.25], [88.64, -31.36, 17.25], [94.64, -31.36, 17.25], [100.64, -31.36, 17.25], [-103.36, -25.36, 17.25], [-97.36, -25.36, 17.25], [-91.36, -25.36, 17.25], [-85.36, -25.36, 17.25], [-79.36, -25.36, 17.25], [-73.36, -25.36, 17.25], [-67.36, -25.36, 17.25], [-61.36, -25.36, 17.25], [-55.36, -25.36, 17.25], [-49.36, -25.36, 17.25], [-43.36, -25.36, 17.25], [-37.36, -25.36, 17.25], [-31.36, -25.36, 17.25], [-25.36, -25.36, 17.25], [-19.36, -25.36, 17.25], [-13.36, -25.36, 17.25], [-7.36, -25.36, 17.25], [-1.36, -25.36, 17.25], [4.64, -25.36, 17.25], [10.64, -25.36, 17.25], [16.64, -25.36, 17.25], [22.64, -25.36, 17.25], [28.64, -25.36, 17.25], [34.64, -25.36, 17.25], [40.64, -25.36, 17.25], [46.64, -25.36, 17.25], [52.64, -25.36, 17.25], [58.64, -25.36, 17.25], [64.64, -25.36, 17.25], [70.64, -25.36, 17.25], [76.64, -25.36, 17.25], [82.64, -25.36, 17.25], [88.64, -25.36, 17.25], [94.64, -25.36, 17.25], [100.64, -25.36, 17.25], [-103.36, -19.36, 17.25], [-97.36, -19.36, 17.25], [-91.36, -19.36, 17.25], [-85.36, -19.36, 17.25], [-79.36, -19.36, 17.25], [-73.36, -19.36, 17.25], [-67.36, -19.36, 17.25], [-61.36, -19.36, 17.25], [-55.36, -19.36, 17.25], [-49.36, -19.36, 17.25], [-43.36, -19.36, 17.25], [-37.36, -19.36, 17.25], [-31.36, -19.36, 17.25], [-25.36, -19.36, 17.25], [-19.36, -19.36, 17.25], [-13.36, -19.36, 17.25], [-7.36, -19.36, 17.25], [-1.36, -19.36, 17.25], [4.64, -19.36, 17.25], [10.64, -19.36, 17.25], [16.64, -19.36, 17.25], [22.64, -19.36, 17.25], [28.64, -19.36, 17.25], [34.64, -19.36, 17.25], [40.64, -19.36, 17.25], [46.64, -19.36, 17.25], [52.64, -19.36, 17.25], [58.64, -19.36, 17.25], [64.64, -19.36, 17.25], [70.64, -19.36, 17.25], [76.64, -19.36, 17.25], [82.64, -19.36, 17.25], [88.64, -19.36, 17.25], [94.64, -19.36, 17.25], [100.64, -19.36, 17.25], [-103.36, -13.36, 17.25], [-97.36, -13.36, 17.25], [-91.36, -13.36, 17.25], [-85.36, -13.36, 17.25], [-79.36, -13.36, 17.25], [-73.36, -13.36, 17.25], [-67.36, -13.36, 17.25], [-61.36, -13.36, 17.25], [-55.36, -13.36, 17.25], [-49.36, -13.36, 17.25], [-43.36, -13.36, 17.25], [-37.36, -13.36, 17.25], [-31.36, -13.36, 17.25], [-25.36, -13.36, 17.25], [-19.36, -13.36, 17.25], [-13.36, -13.36, 17.25], [-7.36, -13.36, 17.25], [-1.36, -13.36, 17.25], [4.64, -13.36, 17.25], [10.64, -13.36, 17.25], [16.64, -13.36, 17.25], [22.64, -13.36, 17.25], [28.64, -13.36, 17.25], [34.64, -13.36, 17.25], [40.64, -13.36, 17.25], [46.64, -13.36, 17.25], [52.64, -13.36, 17.25], [58.64, -13.36, 17.25], [64.64, -13.36, 17.25], [70.64, -13.36, 17.25], [76.64, -13.36, 17.25], [82.64, -13.36, 17.25], [88.64, -13.36, 17.25], [94.64, -13.36, 17.25], [100.64, -13.36, 17.25], [-103.36, -7.36, 17.25], [-97.36, -7.36, 17.25], [-91.36, -7.36, 17.25], [-85.36, -7.36, 17.25], [-79.36, -7.36, 17.25], [-73.36, -7.36, 17.25], [-67.36, -7.36, 17.25], [-61.36, -7.36, 17.25], [-55.36, -7.36, 17.25], [-49.36, -7.36, 17.25], [-43.36, -7.36, 17.25], [-37.36, -7.36, 17.25], [-31.36, -7.36, 17.25], [-25.36, -7.36, 17.25], [-19.36, -7.36, 17.25], [-13.36, -7.36, 17.25], [-7.36, -7.36, 17.25], [-1.36, -7.36, 17.25], [4.64, -7.36, 17.25], [10.64, -7.36, 17.25], [16.64, -7.36, 17.25], [22.64, -7.36, 17.25], [28.64, -7.36, 17.25], [34.64, -7.36, 17.25], [40.64, -7.36, 17.25], [46.64, -7.36, 17.25], [52.64, -7.36, 17.25], [58.64, -7.36, 17.25], [64.64, -7.36, 17.25], [70.64, -7.36, 17.25], [76.64, -7.36, 17.25], [82.64, -7.36, 17.25], [88.64, -7.36, 17.25], [94.64, -7.36, 17.25], [100.64, -7.36, 17.25], [-103.36, -1.36, 17.25], [-97.36, -1.36, 17.25], [-91.36, -1.36, 17.25], [-85.36, -1.36, 17.25], [-79.36, -1.36, 17.25], [-73.36, -1.36, 17.25], [-67.36, -1.36, 17.25], [-61.36, -1.36, 17.25], [-55.36, -1.36, 17.25], [-49.36, -1.36, 17.25], [-43.36, -1.36, 17.25], [-37.36, -1.36, 17.25], [-31.36, -1.36, 17.25], [-25.36, -1.36, 17.25], [-19.36, -1.36, 17.25], [-13.36, -1.36, 17.25], [-7.36, -1.36, 17.25], [-1.36, -1.36, 17.25], [4.64, -1.36, 17.25], [10.64, -1.36, 17.25], [16.64, -1.36, 17.25], [22.64, -1.36, 17.25], [28.64, -1.36, 17.25], [34.64, -1.36, 17.25], [40.64, -1.36, 17.25], [46.64, -1.36, 17.25], [52.64, -1.36, 17.25], [58.64, -1.36, 17.25], [64.64, -1.36, 17.25], [70.64, -1.36, 17.25], [76.64, -1.36, 17.25], [82.64, -1.36, 17.25], [88.64, -1.36, 17.25], [94.64, -1.36, 17.25], [100.64, -1.36, 17.25], [-103.36, 4.64, 17.25], [-97.36, 4.64, 17.25], [-91.36, 4.64, 17.25], [-85.36, 4.64, 17.25], [-79.36, 4.64, 17.25], [-73.36, 4.64, 17.25], [-67.36, 4.64, 17.25], [-61.36, 4.64, 17.25], [-55.36, 4.64, 17.25], [-49.36, 4.64, 17.25], [-43.36, 4.64, 17.25], [-37.36, 4.64, 17.25], [-31.36, 4.64, 17.25], [-25.36, 4.64, 17.25], [-19.36, 4.64, 17.25], [-13.36, 4.64, 17.25], [-7.36, 4.64, 17.25], [-1.36, 4.64, 17.25], [4.64, 4.64, 17.25], [10.64, 4.64, 17.25], [16.64, 4.64, 17.25], [22.64, 4.64, 17.25], [28.64, 4.64, 17.25], [34.64, 4.64, 17.25], [40.64, 4.64, 17.25], [46.64, 4.64, 17.25], [52.64, 4.64, 17.25], [58.64, 4.64, 17.25], [64.64, 4.64, 17.25], [70.64, 4.64, 17.25], [76.64, 4.64, 17.25], [82.64, 4.64, 17.25], [88.64, 4.64, 17.25], [94.64, 4.64, 17.25], [100.64, 4.64, 17.25], [-97.36, 10.64, 17.25], [-91.36, 10.64, 17.25], [-85.36, 10.64, 17.25], [-79.36, 10.64, 17.25], [-73.36, 10.64, 17.25], [-67.36, 10.64, 17.25], [-61.36, 10.64, 17.25], [-55.36, 10.64, 17.25], [-49.36, 10.64, 17.25], [-43.36, 10.64, 17.25], [-37.36, 10.64, 17.25], [-31.36, 10.64, 17.25], [-25.36, 10.64, 17.25], [-19.36, 10.64, 17.25], [-13.36, 10.64, 17.25], [-7.36, 10.64, 17.25], [-1.36, 10.64, 17.25], [4.64, 10.64, 17.25], [10.64, 10.64, 17.25], [16.64, 10.64, 17.25], [22.64, 10.64, 17.25], [28.64, 10.64, 17.25], [34.64, 10.64, 17.25], [40.64, 10.64, 17.25], [46.64, 10.64, 17.25], [52.64, 10.64, 17.25], [58.64, 10.64, 17.25], [64.64, 10.64, 17.25], [70.64, 10.64, 17.25], [76.64, 10.64, 17.25], [82.64, 10.64, 17.25], [88.64, 10.64, 17.25], [94.64, 10.64, 17.25], [100.64, 10.64, 17.25], [-97.36, 16.64, 17.25], [-91.36, 16.64, 17.25], [-85.36, 16.64, 17.25], [-79.36, 16.64, 17.25], [-73.36, 16.64, 17.25], [-67.36, 16.64, 17.25], [-61.36, 16.64, 17.25], [-55.36, 16.64, 17.25], [-49.36, 16.64, 17.25], [-43.36, 16.64, 17.25], [-37.36, 16.64, 17.25], [-31.36, 16.64, 17.25], [-25.36, 16.64, 17.25], [-19.36, 16.64, 17.25], [-13.36, 16.64, 17.25], [-7.36, 16.64, 17.25], [-1.36, 16.64, 17.25], [4.64, 16.64, 17.25], [10.64, 16.64, 17.25], [16.64, 16.64, 17.25], [22.64, 16.64, 17.25], [28.64, 16.64, 17.25], [34.64, 16.64, 17.25], [40.64, 16.64, 17.25], [46.64, 16.64, 17.25], [52.64, 16.64, 17.25], [58.64, 16.64, 17.25], [64.64, 16.64, 17.25], [70.64, 16.64, 17.25], [76.64, 16.64, 17.25], [82.64, 16.64, 17.25], [88.64, 16.64, 17.25], [94.64, 16.64, 17.25], [100.64, 16.64, 17.25], [-97.36, 22.64, 17.25], [-91.36, 22.64, 17.25], [-85.36, 22.64, 17.25], [-79.36, 22.64, 17.25], [-73.36, 22.64, 17.25], [-67.36, 22.64, 17.25], [-61.36, 22.64, 17.25], [-55.36, 22.64, 17.25], [-49.36, 22.64, 17.25], [-43.36, 22.64, 17.25], [-37.36, 22.64, 17.25], [-31.36, 22.64, 17.25], [-25.36, 22.64, 17.25], [-19.36, 22.64, 17.25], [-13.36, 22.64, 17.25], [-7.36, 22.64, 17.25], [-1.36, 22.64, 17.25], [4.64, 22.64, 17.25], [10.64, 22.64, 17.25], [16.64, 22.64, 17.25], [22.64, 22.64, 17.25], [28.64, 22.64, 17.25], [34.64, 22.64, 17.25], [40.64, 22.64, 17.25], [46.64, 22.64, 17.25], [52.64, 22.64, 17.25], [58.64, 22.64, 17.25], [64.64, 22.64, 17.25], [70.64, 22.64, 17.25], [76.64, 22.64, 17.25], [82.64, 22.64, 17.25], [88.64, 22.64, 17.25], [94.64, 22.64, 17.25], [100.64, 22.64, 17.25], [-97.36, 28.64, 17.25], [-91.36, 28.64, 17.25], [-85.36, 28.64, 17.25], [-79.36, 28.64, 17.25], [-73.36, 28.64, 17.25], [-67.36, 28.64, 17.25], [-61.36, 28.64, 17.25], [-55.36, 28.64, 17.25], [-49.36, 28.64, 17.25], [-43.36, 28.64, 17.25], [-37.36, 28.64, 17.25], [-31.36, 28.64, 17.25], [-25.36, 28.64, 17.25], [-19.36, 28.64, 17.25], [-13.36, 28.64, 17.25], [-7.36, 28.64, 17.25], [-1.36, 28.64, 17.25], [4.64, 28.64, 17.25], [10.64, 28.64, 17.25], [16.64, 28.64, 17.25], [22.64, 28.64, 17.25], [28.64, 28.64, 17.25], [34.64, 28.64, 17.25], [40.64, 28.64, 17.25], [46.64, 28.64, 17.25], [52.64, 28.64, 17.25], [58.64, 28.64, 17.25], [64.64, 28.64, 17.25], [70.64, 28.64, 17.25], [76.64, 28.64, 17.25], [82.64, 28.64, 17.25], [88.64, 28.64, 17.25], [94.64, 28.64, 17.25], [100.64, 28.64, 17.25], [-97.36, 34.64, 17.25], [-91.36, 34.64, 17.25], [-85.36, 34.64, 17.25], [-79.36, 34.64, 17.25], [-73.36, 34.64, 17.25], [-67.36, 34.64, 17.25], [-61.36, 34.64, 17.25], [-55.36, 34.64, 17.25], [-49.36, 34.64, 17.25], [-43.36, 34.64, 17.25], [-37.36, 34.64, 17.25], [-31.36, 34.64, 17.25], [-25.36, 34.64, 17.25], [-19.36, 34.64, 17.25], [-13.36, 34.64, 17.25], [-7.36, 34.64, 17.25], [-1.36, 34.64, 17.25], [4.64, 34.64, 17.25], [10.64, 34.64, 17.25], [16.64, 34.64, 17.25], [22.64, 34.64, 17.25], [28.64, 34.64, 17.25], [34.64, 34.64, 17.25], [40.64, 34.64, 17.25], [46.64, 34.64, 17.25], [52.64, 34.64, 17.25], [58.64, 34.64, 17.25], [64.64, 34.64, 17.25], [70.64, 34.64, 17.25], [76.64, 34.64, 17.25], [82.64, 34.64, 17.25], [88.64, 34.64, 17.25], [94.64, 34.64, 17.25], [100.64, 34.64, 17.25], [-97.36, 40.64, 17.25], [-91.36, 40.64, 17.25], [-85.36, 40.64, 17.25], [-79.36, 40.64, 17.25], [-73.36, 40.64, 17.25], [-67.36, 40.64, 17.25], [-61.36, 40.64, 17.25], [-55.36, 40.64, 17.25], [-49.36, 40.64, 17.25], [-43.36, 40.64, 17.25], [-37.36, 40.64, 17.25], [-31.36, 40.64, 17.25], [-25.36, 40.64, 17.25], [-19.36, 40.64, 17.25], [-13.36, 40.64, 17.25], [-7.36, 40.64, 17.25], [-1.36, 40.64, 17.25], [4.64, 40.64, 17.25], [10.64, 40.64, 17.25], [16.64, 40.64, 17.25], [22.64, 40.64, 17.25], [28.64, 40.64, 17.25], [34.64, 40.64, 17.25], [40.64, 40.64, 17.25], [46.64, 40.64, 17.25], [52.64, 40.64, 17.25], [58.64, 40.64, 17.25], [64.64, 40.64, 17.25], [70.64, 40.64, 17.25], [76.64, 40.64, 17.25], [82.64, 40.64, 17.25], [88.64, 40.64, 17.25], [94.64, 40.64, 17.25], [100.64, 40.64, 17.25], [-97.36, 46.64, 17.25], [-91.36, 46.64, 17.25], [-85.36, 46.64, 17.25], [-79.36, 46.64, 17.25], [-73.36, 46.64, 17.25], [-67.36, 46.64, 17.25], [-61.36, 46.64, 17.25], [-55.36, 46.64, 17.25], [-49.36, 46.64, 17.25], [-43.36, 46.64, 17.25], [-37.36, 46.64, 17.25], [-31.36, 46.64, 17.25], [-25.36, 46.64, 17.25], [-19.36, 46.64, 17.25], [-13.36, 46.64, 17.25], [-7.36, 46.64, 17.25], [-1.36, 46.64, 17.25], [4.64, 46.64, 17.25], [10.64, 46.64, 17.25], [16.64, 46.64, 17.25], [22.64, 46.64, 17.25], [28.64, 46.64, 17.25], [34.64, 46.64, 17.25], [40.64, 46.64, 17.25], [46.64, 46.64, 17.25], [52.64, 46.64, 17.25], [58.64, 46.64, 17.25], [64.64, 46.64, 17.25], [70.64, 46.64, 17.25], [76.64, 46.64, 17.25], [82.64, 46.64, 17.25], [88.64, 46.64, 17.25], [94.64, 46.64, 17.25], [100.64, 46.64, 17.25], [-97.36, 52.64, 17.25], [-91.36, 52.64, 17.25], [-85.36, 52.64, 17.25], [-79.36, 52.64, 17.25], [-73.36, 52.64, 17.25], [-67.36, 52.64, 17.25], [-61.36, 52.64, 17.25], [-55.36, 52.64, 17.25], [-49.36, 52.64, 17.25], [-43.36, 52.64, 17.25], [-37.36, 52.64, 17.25], [-31.36, 52.64, 17.25], [-25.36, 52.64, 17.25], [-19.36, 52.64, 17.25], [-13.36, 52.64, 17.25], [-7.36, 52.64, 17.25], [-1.36, 52.64, 17.25], [4.64, 52.64, 17.25], [10.64, 52.64, 17.25], [16.64, 52.64, 17.25], [22.64, 52.64, 17.25], [28.64, 52.64, 17.25], [34.64, 52.64, 17.25], [40.64, 52.64, 17.25], [46.64, 52.64, 17.25], [52.64, 52.64, 17.25], [58.64, 52.64, 17.25], [64.64, 52.64, 17.25], [70.64, 52.64, 17.25], [76.64, 52.64, 17.25], [82.64, 52.64, 17.25], [88.64, 52.64, 17.25], [94.64, 52.64, 17.25], [100.64, 52.64, 17.25], [-97.36, 58.64, 17.25], [-91.36, 58.64, 17.25], [-85.36, 58.64, 17.25], [-79.36, 58.64, 17.25], [-73.36, 58.64, 17.25], [-67.36, 58.64, 17.25], [-61.36, 58.64, 17.25], [-55.36, 58.64, 17.25], [-49.36, 58.64, 17.25], [-43.36, 58.64, 17.25], [-37.36, 58.64, 17.25], [-31.36, 58.64, 17.25], [-25.36, 58.64, 17.25], [-19.36, 58.64, 17.25], [-13.36, 58.64, 17.25], [-7.36, 58.64, 17.25], [-1.36, 58.64, 17.25], [4.64, 58.64, 17.25], [10.64, 58.64, 17.25], [16.64, 58.64, 17.25], [22.64, 58.64, 17.25], [28.64, 58.64, 17.25], [34.64, 58.64, 17.25], [40.64, 58.64, 17.25], [46.64, 58.64, 17.25], [52.64, 58.64, 17.25], [58.64, 58.64, 17.25], [64.64, 58.64, 17.25], [70.64, 58.64, 17.25], [76.64, 58.64, 17.25], [82.64, 58.64, 17.25], [88.64, 58.64, 17.25], [94.64, 58.64, 17.25], [100.64, 58.64, 17.25], [-97.36, 64.64, 17.25], [-91.36, 64.64, 17.25], [-85.36, 64.64, 17.25], [-79.36, 64.64, 17.25], [-73.36, 64.64, 17.25], [-67.36, 64.64, 17.25], [-61.36, 64.64, 17.25], [-55.36, 64.64, 17.25], [-49.36, 64.64, 17.25], [-43.36, 64.64, 17.25], [-37.36, 64.64, 17.25], [-31.36, 64.64, 17.25], [-25.36, 64.64, 17.25], [-19.36, 64.64, 17.25], [-13.36, 64.64, 17.25], [-7.36, 64.64, 17.25], [-1.36, 64.64, 17.25], [4.64, 64.64, 17.25], [10.64, 64.64, 17.25], [16.64, 64.64, 17.25], [22.64, 64.64, 17.25], [28.64, 64.64, 17.25], [34.64, 64.64, 17.25], [40.64, 64.64, 17.25], [46.64, 64.64, 17.25], [52.64, 64.64, 17.25], [58.64, 64.64, 17.25], [64.64, 64.64, 17.25], [70.64, 64.64, 17.25], [76.64, 64.64, 17.25], [82.64, 64.64, 17.25], [88.64, 64.64, 17.25], [94.64, 64.64, 17.25], [100.64, 64.64, 17.25], [-97.36, 70.64, 17.25], [-91.36, 70.64, 17.25], [-85.36, 70.64, 17.25], [-79.36, 70.64, 17.25], [-73.36, 70.64, 17.25], [-67.36, 70.64, 17.25], [-61.36, 70.64, 17.25], [-55.36, 70.64, 17.25], [-49.36, 70.64, 17.25], [-43.36, 70.64, 17.25], [-37.36, 70.64, 17.25], [-31.36, 70.64, 17.25], [-25.36, 70.64, 17.25], [-19.36, 70.64, 17.25], [-13.36, 70.64, 17.25], [-7.36, 70.64, 17.25], [-1.36, 70.64, 17.25], [4.64, 70.64, 17.25], [10.64, 70.64, 17.25], [16.64, 70.64, 17.25], [22.64, 70.64, 17.25], [28.64, 70.64, 17.25], [34.64, 70.64, 17.25], [40.64, 70.64, 17.25], [46.64, 70.64, 17.25], [52.64, 70.64, 17.25], [58.64, 70.64, 17.25], [64.64, 70.64, 17.25], [70.64, 70.64, 17.25], [76.64, 70.64, 17.25], [82.64, 70.64, 17.25], [88.64, 70.64, 17.25], [94.64, 70.64, 17.25], [100.64, 70.64, 17.25], [-97.36, 76.64, 17.25], [-91.36, 76.64, 17.25], [-85.36, 76.64, 17.25], [-79.36, 76.64, 17.25], [-73.36, 76.64, 17.25], [-67.36, 76.64, 17.25], [-61.36, 76.64, 17.25], [-55.36, 76.64, 17.25], [-49.36, 76.64, 17.25], [-43.36, 76.64, 17.25], [-37.36, 76.64, 17.25], [-31.36, 76.64, 17.25], [-25.36, 76.64, 17.25], [-19.36, 76.64, 17.25], [-13.36, 76.64, 17.25], [-7.36, 76.64, 17.25], [-1.36, 76.64, 17.25], [4.64, 76.64, 17.25], [10.64, 76.64, 17.25], [16.64, 76.64, 17.25], [22.64, 76.64, 17.25], [28.64, 76.64, 17.25], [34.64, 76.64, 17.25], [40.64, 76.64, 17.25], [46.64, 76.64, 17.25], [52.64, 76.64, 17.25], [58.64, 76.64, 17.25], [64.64, 76.64, 17.25], [70.64, 76.64, 17.25], [76.64, 76.64, 17.25], [82.64, 76.64, 17.25], [88.64, 76.64, 17.25], [94.64, 76.64, 17.25], [100.64, 76.64, 17.25], [-97.36, 82.64, 17.25], [-91.36, 82.64, 17.25], [-85.36, 82.64, 17.25], [-79.36, 82.64, 17.25], [-73.36, 82.64, 17.25], [-67.36, 82.64, 17.25], [-61.36, 82.64, 17.25], [-55.36, 82.64, 17.25], [-49.36, 82.64, 17.25], [-43.36, 82.64, 17.25], [-37.36, 82.64, 17.25], [-31.36, 82.64, 17.25], [-25.36, 82.64, 17.25], [-19.36, 82.64, 17.25], [-13.36, 82.64, 17.25], [-7.36, 82.64, 17.25], [-1.36, 82.64, 17.25], [4.64, 82.64, 17.25], [10.64, 82.64, 17.25], [16.64, 82.64, 17.25], [22.64, 82.64, 17.25], [28.64, 82.64, 17.25], [34.64, 82.64, 17.25], [40.64, 82.64, 17.25], [46.64, 82.64, 17.25], [52.64, 82.64, 17.25], [58.64, 82.64, 17.25], [64.64, 82.64, 17.25], [70.64, 82.64, 17.25], [76.64, 82.64, 17.25], [82.64, 82.64, 17.25], [88.64, 82.64, 17.25], [94.64, 82.64, 17.25], [100.64, 82.64, 17.25], [-97.36, 88.64, 17.25], [-91.36, 88.64, 17.25], [-85.36, 88.64, 17.25], [-79.36, 88.64, 17.25], [-73.36, 88.64, 17.25], [-67.36, 88.64, 17.25], [-61.36, 88.64, 17.25], [-55.36, 88.64, 17.25], [-49.36, 88.64, 17.25], [-43.36, 88.64, 17.25], [-37.36, 88.64, 17.25], [-31.36, 88.64, 17.25], [-25.36, 88.64, 17.25], [-19.36, 88.64, 17.25], [-13.36, 88.64, 17.25], [-7.36, 88.64, 17.25], [-1.36, 88.64, 17.25], [4.64, 88.64, 17.25], [10.64, 88.64, 17.25], [16.64, 88.64, 17.25], [22.64, 88.64, 17.25], [28.64, 88.64, 17.25], [34.64, 88.64, 17.25], [40.64, 88.64, 17.25], [46.64, 88.64, 17.25], [52.64, 88.64, 17.25], [58.64, 88.64, 17.25], [64.64, 88.64, 17.25], [70.64, 88.64, 17.25], [76.64, 88.64, 17.25], [82.64, 88.64, 17.25], [88.64, 88.64, 17.25], [94.64, 88.64, 17.25], [100.64, 88.64, 17.25], [-91.36, 94.64, 17.25], [-85.36, 94.64, 17.25], [-79.36, 94.64, 17.25], [-73.36, 94.64, 17.25], [-67.36, 94.64, 17.25], [-61.36, 94.64, 17.25], [-55.36, 94.64, 17.25], [-49.36, 94.64, 17.25], [-43.36, 94.64, 17.25], [-37.36, 94.64, 17.25], [-31.36, 94.64, 17.25], [-25.36, 94.64, 17.25], [-19.36, 94.64, 17.25], [-13.36, 94.64, 17.25], [-7.36, 94.64, 17.25], [-1.36, 94.64, 17.25], [4.64, 94.64, 17.25], [10.64, 94.64, 17.25], [16.64, 94.64, 17.25], [22.64, 94.64, 17.25], [28.64, 94.64, 17.25], [34.64, 94.64, 17.25], [40.64, 94.64, 17.25], [46.64, 94.64, 17.25], [52.64, 94.64, 17.25], [58.64, 94.64, 17.25], [64.64, 94.64, 17.25], [70.64, 94.64, 17.25], [76.64, 94.64, 17.25], [82.64, 94.64, 17.25], [88.64, 94.64, 17.25], [94.64, 94.64, 17.25], [100.64, 94.64, 17.25], [-91.36, 100.64, 17.25], [-85.36, 100.64, 17.25], [-79.36, 100.64, 17.25], [-73.36, 100.64, 17.25], [-67.36, 100.64, 17.25], [-61.36, 100.64, 17.25], [-55.36, 100.64, 17.25], [-49.36, 100.64, 17.25], [-43.36, 100.64, 17.25], [-37.36, 100.64, 17.25], [-31.36, 100.64, 17.25], [-25.36, 100.64, 17.25], [-19.36, 100.64, 17.25], [-13.36, 100.64, 17.25], [-7.36, 100.64, 17.25], [-1.36, 100.64, 17.25], [4.64, 100.64, 17.25], [10.64, 100.64, 17.25], [16.64, 100.64, 17.25], [22.64, 100.64, 17.25], [28.64, 100.64, 17.25], [34.64, 100.64, 17.25], [40.64, 100.64, 17.25], [46.64, 100.64, 17.25], [52.64, 100.64, 17.25], [58.64, 100.64, 17.25], [64.64, 100.64, 17.25], [70.64, 100.64, 17.25], [76.64, 100.64, 17.25], [82.64, 100.64, 17.25], [88.64, 100.64, 17.25], [-13.36, -103.36, 23.25], [-7.36, -103.36, 23.25], [-1.36, -103.36, 23.25], [4.64, -103.36, 23.25], [10.64, -103.36, 23.25], [16.64, -103.36, 23.25], [22.64, -103.36, 23.25], [28.64, -103.36, 23.25], [34.64, -103.36, 23.25], [40.64, -103.36, 23.25], [46.64, -103.36, 23.25], [52.64, -103.36, 23.25], [58.64, -103.36, 23.25], [64.64, -103.36, 23.25], [70.64, -103.36, 23.25], [76.64, -103.36, 23.25], [82.64, -103.36, 23.25], [88.64, -103.36, 23.25], [-97.36, -97.36, 23.25], [-91.36, -97.36, 23.25], [-85.36, -97.36, 23.25], [-79.36, -97.36, 23.25], [-73.36, -97.36, 23.25], [-67.36, -97.36, 23.25], [-61.36, -97.36, 23.25], [-55.36, -97.36, 23.25], [-49.36, -97.36, 23.25], [-43.36, -97.36, 23.25], [-37.36, -97.36, 23.25], [-31.36, -97.36, 23.25], [-25.36, -97.36, 23.25], [-19.36, -97.36, 23.25], [-13.36, -97.36, 23.25], [-7.36, -97.36, 23.25], [-1.36, -97.36, 23.25], [4.64, -97.36, 23.25], [10.64, -97.36, 23.25], [16.64, -97.36, 23.25], [22.64, -97.36, 23.25], [28.64, -97.36, 23.25], [34.64, -97.36, 23.25], [40.64, -97.36, 23.25], [46.64, -97.36, 23.25], [52.64, -97.36, 23.25], [58.64, -97.36, 23.25], [64.64, -97.36, 23.25], [70.64, -97.36, 23.25], [76.64, -97.36, 23.25], [82.64, -97.36, 23.25], [88.64, -97.36, 23.25], [94.64, -97.36, 23.25], [-97.36, -91.36, 23.25], [-91.36, -91.36, 23.25], [-85.36, -91.36, 23.25], [-79.36, -91.36, 23.25], [-73.36, -91.36, 23.25], [-67.36, -91.36, 23.25], [-61.36, -91.36, 23.25], [-55.36, -91.36, 23.25], [-49.36, -91.36, 23.25], [-43.36, -91.36, 23.25], [-37.36, -91.36, 23.25], [-31.36, -91.36, 23.25], [-25.36, -91.36, 23.25], [-19.36, -91.36, 23.25], [-13.36, -91.36, 23.25], [-7.36, -91.36, 23.25], [-1.36, -91.36, 23.25], [4.64, -91.36, 23.25], [10.64, -91.36, 23.25], [16.64, -91.36, 23.25], [22.64, -91.36, 23.25], [28.64, -91.36, 23.25], [34.64, -91.36, 23.25], [40.64, -91.36, 23.25], [46.64, -91.36, 23.25], [52.64, -91.36, 23.25], [58.64, -91.36, 23.25], [64.64, -91.36, 23.25], [70.64, -91.36, 23.25], [76.64, -91.36, 23.25], [82.64, -91.36, 23.25], [88.64, -91.36, 23.25], [94.64, -91.36, 23.25], [100.64, -91.36, 23.25], [-103.36, -85.36, 23.25], [-97.36, -85.36, 23.25], [-91.36, -85.36, 23.25], [-85.36, -85.36, 23.25], [-79.36, -85.36, 23.25], [-73.36, -85.36, 23.25], [-67.36, -85.36, 23.25], [-61.36, -85.36, 23.25], [-55.36, -85.36, 23.25], [-49.36, -85.36, 23.25], [-43.36, -85.36, 23.25], [-37.36, -85.36, 23.25], [-31.36, -85.36, 23.25], [-25.36, -85.36, 23.25], [-19.36, -85.36, 23.25], [-13.36, -85.36, 23.25], [-7.36, -85.36, 23.25], [-1.36, -85.36, 23.25], [4.64, -85.36, 23.25], [10.64, -85.36, 23.25], [16.64, -85.36, 23.25], [22.64, -85.36, 23.25], [28.64, -85.36, 23.25], [34.64, -85.36, 23.25], [40.64, -85.36, 23.25], [46.64, -85.36, 23.25], [52.64, -85.36, 23.25], [58.64, -85.36, 23.25], [64.64, -85.36, 23.25], [70.64, -85.36, 23.25], [76.64, -85.36, 23.25], [82.64, -85.36, 23.25], [88.64, -85.36, 23.25], [94.64, -85.36, 23.25], [100.64, -85.36, 23.25], [-103.36, -79.36, 23.25], [-97.36, -79.36, 23.25], [-91.36, -79.36, 23.25], [-85.36, -79.36, 23.25], [-79.36, -79.36, 23.25], [-73.36, -79.36, 23.25], [-67.36, -79.36, 23.25], [-61.36, -79.36, 23.25], [-55.36, -79.36, 23.25], [-49.36, -79.36, 23.25], [-43.36, -79.36, 23.25], [-37.36, -79.36, 23.25], [-31.36, -79.36, 23.25], [-25.36, -79.36, 23.25], [-19.36, -79.36, 23.25], [-13.36, -79.36, 23.25], [-7.36, -79.36, 23.25], [-1.36, -79.36, 23.25], [4.64, -79.36, 23.25], [10.64, -79.36, 23.25], [16.64, -79.36, 23.25], [22.64, -79.36, 23.25], [28.64, -79.36, 23.25], [34.64, -79.36, 23.25], [40.64, -79.36, 23.25], [46.64, -79.36, 23.25], [52.64, -79.36, 23.25], [58.64, -79.36, 23.25], [64.64, -79.36, 23.25], [70.64, -79.36, 23.25], [76.64, -79.36, 23.25], [82.64, -79.36, 23.25], [88.64, -79.36, 23.25], [94.64, -79.36, 23.25], [100.64, -79.36, 23.25], [-103.36, -73.36, 23.25], [-97.36, -73.36, 23.25], [-91.36, -73.36, 23.25], [-85.36, -73.36, 23.25], [-79.36, -73.36, 23.25], [-73.36, -73.36, 23.25], [-67.36, -73.36, 23.25], [-61.36, -73.36, 23.25], [-55.36, -73.36, 23.25], [-49.36, -73.36, 23.25], [-43.36, -73.36, 23.25], [-37.36, -73.36, 23.25], [-31.36, -73.36, 23.25], [-25.36, -73.36, 23.25], [-19.36, -73.36, 23.25], [-13.36, -73.36, 23.25], [-7.36, -73.36, 23.25], [-1.36, -73.36, 23.25], [4.64, -73.36, 23.25], [10.64, -73.36, 23.25], [16.64, -73.36, 23.25], [22.64, -73.36, 23.25], [28.64, -73.36, 23.25], [34.64, -73.36, 23.25], [40.64, -73.36, 23.25], [46.64, -73.36, 23.25], [52.64, -73.36, 23.25], [58.64, -73.36, 23.25], [64.64, -73.36, 23.25], [70.64, -73.36, 23.25], [76.64, -73.36, 23.25], [82.64, -73.36, 23.25], [88.64, -73.36, 23.25], [94.64, -73.36, 23.25], [100.64, -73.36, 23.25], [-103.36, -67.36, 23.25], [-97.36, -67.36, 23.25], [-91.36, -67.36, 23.25], [-85.36, -67.36, 23.25], [-79.36, -67.36, 23.25], [-73.36, -67.36, 23.25], [-67.36, -67.36, 23.25], [-61.36, -67.36, 23.25], [-55.36, -67.36, 23.25], [-49.36, -67.36, 23.25], [-43.36, -67.36, 23.25], [-37.36, -67.36, 23.25], [-31.36, -67.36, 23.25], [-25.36, -67.36, 23.25], [-19.36, -67.36, 23.25], [-13.36, -67.36, 23.25], [-7.36, -67.36, 23.25], [-1.36, -67.36, 23.25], [4.64, -67.36, 23.25], [10.64, -67.36, 23.25], [16.64, -67.36, 23.25], [22.64, -67.36, 23.25], [28.64, -67.36, 23.25], [34.64, -67.36, 23.25], [40.64, -67.36, 23.25], [46.64, -67.36, 23.25], [52.64, -67.36, 23.25], [58.64, -67.36, 23.25], [64.64, -67.36, 23.25], [70.64, -67.36, 23.25], [76.64, -67.36, 23.25], [82.64, -67.36, 23.25], [88.64, -67.36, 23.25], [94.64, -67.36, 23.25], [100.64, -67.36, 23.25], [-103.36, -61.36, 23.25], [-97.36, -61.36, 23.25], [-91.36, -61.36, 23.25], [-85.36, -61.36, 23.25], [-79.36, -61.36, 23.25], [-73.36, -61.36, 23.25], [-67.36, -61.36, 23.25], [-61.36, -61.36, 23.25], [-55.36, -61.36, 23.25], [-49.36, -61.36, 23.25], [-43.36, -61.36, 23.25], [-37.36, -61.36, 23.25], [-31.36, -61.36, 23.25], [-25.36, -61.36, 23.25], [-19.36, -61.36, 23.25], [-13.36, -61.36, 23.25], [-7.36, -61.36, 23.25], [-1.36, -61.36, 23.25], [4.64, -61.36, 23.25], [10.64, -61.36, 23.25], [16.64, -61.36, 23.25], [22.64, -61.36, 23.25], [28.64, -61.36, 23.25], [34.64, -61.36, 23.25], [40.64, -61.36, 23.25], [46.64, -61.36, 23.25], [52.64, -61.36, 23.25], [58.64, -61.36, 23.25], [64.64, -61.36, 23.25], [70.64, -61.36, 23.25], [76.64, -61.36, 23.25], [82.64, -61.36, 23.25], [88.64, -61.36, 23.25], [94.64, -61.36, 23.25], [100.64, -61.36, 23.25], [-103.36, -55.36, 23.25], [-97.36, -55.36, 23.25], [-91.36, -55.36, 23.25], [-85.36, -55.36, 23.25], [-79.36, -55.36, 23.25], [-73.36, -55.36, 23.25], [-67.36, -55.36, 23.25], [-61.36, -55.36, 23.25], [-55.36, -55.36, 23.25], [-49.36, -55.36, 23.25], [-43.36, -55.36, 23.25], [-37.36, -55.36, 23.25], [-31.36, -55.36, 23.25], [-25.36, -55.36, 23.25], [-19.36, -55.36, 23.25], [-13.36, -55.36, 23.25], [-7.36, -55.36, 23.25], [-1.36, -55.36, 23.25], [4.64, -55.36, 23.25], [10.64, -55.36, 23.25], [16.64, -55.36, 23.25], [22.64, -55.36, 23.25], [28.64, -55.36, 23.25], [34.64, -55.36, 23.25], [40.64, -55.36, 23.25], [46.64, -55.36, 23.25], [52.64, -55.36, 23.25], [58.64, -55.36, 23.25], [64.64, -55.36, 23.25], [70.64, -55.36, 23.25], [76.64, -55.36, 23.25], [82.64, -55.36, 23.25], [88.64, -55.36, 23.25], [94.64, -55.36, 23.25], [100.64, -55.36, 23.25], [-103.36, -49.36, 23.25], [-97.36, -49.36, 23.25], [-91.36, -49.36, 23.25], [-85.36, -49.36, 23.25], [-79.36, -49.36, 23.25], [-73.36, -49.36, 23.25], [-67.36, -49.36, 23.25], [-61.36, -49.36, 23.25], [-55.36, -49.36, 23.25], [-49.36, -49.36, 23.25], [-43.36, -49.36, 23.25], [-37.36, -49.36, 23.25], [-31.36, -49.36, 23.25], [-25.36, -49.36, 23.25], [-19.36, -49.36, 23.25], [-13.36, -49.36, 23.25], [-7.36, -49.36, 23.25], [-1.36, -49.36, 23.25], [4.64, -49.36, 23.25], [10.64, -49.36, 23.25], [16.64, -49.36, 23.25], [22.64, -49.36, 23.25], [28.64, -49.36, 23.25], [34.64, -49.36, 23.25], [40.64, -49.36, 23.25], [46.64, -49.36, 23.25], [52.64, -49.36, 23.25], [58.64, -49.36, 23.25], [64.64, -49.36, 23.25], [70.64, -49.36, 23.25], [76.64, -49.36, 23.25], [82.64, -49.36, 23.25], [88.64, -49.36, 23.25], [94.64, -49.36, 23.25], [100.64, -49.36, 23.25], [-103.36, -43.36, 23.25], [-97.36, -43.36, 23.25], [-91.36, -43.36, 23.25], [-85.36, -43.36, 23.25], [-79.36, -43.36, 23.25], [-73.36, -43.36, 23.25], [-67.36, -43.36, 23.25], [-61.36, -43.36, 23.25], [-55.36, -43.36, 23.25], [-49.36, -43.36, 23.25], [-43.36, -43.36, 23.25], [-37.36, -43.36, 23.25], [-31.36, -43.36, 23.25], [-25.36, -43.36, 23.25], [-19.36, -43.36, 23.25], [-13.36, -43.36, 23.25], [-7.36, -43.36, 23.25], [-1.36, -43.36, 23.25], [4.64, -43.36, 23.25], [10.64, -43.36, 23.25], [16.64, -43.36, 23.25], [22.64, -43.36, 23.25], [28.64, -43.36, 23.25], [34.64, -43.36, 23.25], [40.64, -43.36, 23.25], [46.64, -43.36, 23.25], [52.64, -43.36, 23.25], [58.64, -43.36, 23.25], [64.64, -43.36, 23.25], [70.64, -43.36, 23.25], [76.64, -43.36, 23.25], [82.64, -43.36, 23.25], [88.64, -43.36, 23.25], [94.64, -43.36, 23.25], [100.64, -43.36, 23.25], [-103.36, -37.36, 23.25], [-97.36, -37.36, 23.25], [-91.36, -37.36, 23.25], [-85.36, -37.36, 23.25], [-79.36, -37.36, 23.25], [-73.36, -37.36, 23.25], [-67.36, -37.36, 23.25], [-61.36, -37.36, 23.25], [-55.36, -37.36, 23.25], [-49.36, -37.36, 23.25], [-43.36, -37.36, 23.25], [-37.36, -37.36, 23.25], [-31.36, -37.36, 23.25], [-25.36, -37.36, 23.25], [-19.36, -37.36, 23.25], [-13.36, -37.36, 23.25], [-7.36, -37.36, 23.25], [-1.36, -37.36, 23.25], [4.64, -37.36, 23.25], [10.64, -37.36, 23.25], [16.64, -37.36, 23.25], [22.64, -37.36, 23.25], [28.64, -37.36, 23.25], [34.64, -37.36, 23.25], [40.64, -37.36, 23.25], [46.64, -37.36, 23.25], [52.64, -37.36, 23.25], [58.64, -37.36, 23.25], [64.64, -37.36, 23.25], [70.64, -37.36, 23.25], [76.64, -37.36, 23.25], [82.64, -37.36, 23.25], [88.64, -37.36, 23.25], [94.64, -37.36, 23.25], [100.64, -37.36, 23.25], [-103.36, -31.36, 23.25], [-97.36, -31.36, 23.25], [-91.36, -31.36, 23.25], [-85.36, -31.36, 23.25], [-79.36, -31.36, 23.25], [-73.36, -31.36, 23.25], [-67.36, -31.36, 23.25], [-61.36, -31.36, 23.25], [-55.36, -31.36, 23.25], [-49.36, -31.36, 23.25], [-43.36, -31.36, 23.25], [-37.36, -31.36, 23.25], [-31.36, -31.36, 23.25], [-25.36, -31.36, 23.25], [-19.36, -31.36, 23.25], [-13.36, -31.36, 23.25], [-7.36, -31.36, 23.25], [-1.36, -31.36, 23.25], [4.64, -31.36, 23.25], [10.64, -31.36, 23.25], [16.64, -31.36, 23.25], [22.64, -31.36, 23.25], [28.64, -31.36, 23.25], [34.64, -31.36, 23.25], [40.64, -31.36, 23.25], [46.64, -31.36, 23.25], [52.64, -31.36, 23.25], [58.64, -31.36, 23.25], [64.64, -31.36, 23.25], [70.64, -31.36, 23.25], [76.64, -31.36, 23.25], [82.64, -31.36, 23.25], [88.64, -31.36, 23.25], [94.64, -31.36, 23.25], [100.64, -31.36, 23.25], [-103.36, -25.36, 23.25], [-97.36, -25.36, 23.25], [-91.36, -25.36, 23.25], [-85.36, -25.36, 23.25], [-79.36, -25.36, 23.25], [-73.36, -25.36, 23.25], [-67.36, -25.36, 23.25], [-61.36, -25.36, 23.25], [-55.36, -25.36, 23.25], [-49.36, -25.36, 23.25], [-43.36, -25.36, 23.25], [-37.36, -25.36, 23.25], [-31.36, -25.36, 23.25], [-25.36, -25.36, 23.25], [-19.36, -25.36, 23.25], [-13.36, -25.36, 23.25], [-7.36, -25.36, 23.25], [-1.36, -25.36, 23.25], [4.64, -25.36, 23.25], [10.64, -25.36, 23.25], [16.64, -25.36, 23.25], [22.64, -25.36, 23.25], [28.64, -25.36, 23.25], [34.64, -25.36, 23.25], [40.64, -25.36, 23.25], [46.64, -25.36, 23.25], [52.64, -25.36, 23.25], [58.64, -25.36, 23.25], [64.64, -25.36, 23.25], [70.64, -25.36, 23.25], [76.64, -25.36, 23.25], [82.64, -25.36, 23.25], [88.64, -25.36, 23.25], [94.64, -25.36, 23.25], [100.64, -25.36, 23.25], [-103.36, -19.36, 23.25], [-97.36, -19.36, 23.25], [-91.36, -19.36, 23.25], [-85.36, -19.36, 23.25], [-79.36, -19.36, 23.25], [-73.36, -19.36, 23.25], [-67.36, -19.36, 23.25], [-61.36, -19.36, 23.25], [-55.36, -19.36, 23.25], [-49.36, -19.36, 23.25], [-43.36, -19.36, 23.25], [-37.36, -19.36, 23.25], [-31.36, -19.36, 23.25], [-25.36, -19.36, 23.25], [-19.36, -19.36, 23.25], [-13.36, -19.36, 23.25], [-7.36, -19.36, 23.25], [-1.36, -19.36, 23.25], [4.64, -19.36, 23.25], [10.64, -19.36, 23.25], [16.64, -19.36, 23.25], [22.64, -19.36, 23.25], [28.64, -19.36, 23.25], [34.64, -19.36, 23.25], [40.64, -19.36, 23.25], [46.64, -19.36, 23.25], [52.64, -19.36, 23.25], [58.64, -19.36, 23.25], [64.64, -19.36, 23.25], [70.64, -19.36, 23.25], [76.64, -19.36, 23.25], [82.64, -19.36, 23.25], [88.64, -19.36, 23.25], [94.64, -19.36, 23.25], [100.64, -19.36, 23.25], [-103.36, -13.36, 23.25], [-97.36, -13.36, 23.25], [-91.36, -13.36, 23.25], [-85.36, -13.36, 23.25], [-79.36, -13.36, 23.25], [-73.36, -13.36, 23.25], [-67.36, -13.36, 23.25], [-61.36, -13.36, 23.25], [-55.36, -13.36, 23.25], [-49.36, -13.36, 23.25], [-43.36, -13.36, 23.25], [-37.36, -13.36, 23.25], [-31.36, -13.36, 23.25], [-25.36, -13.36, 23.25], [-19.36, -13.36, 23.25], [-13.36, -13.36, 23.25], [-7.36, -13.36, 23.25], [-1.36, -13.36, 23.25], [4.64, -13.36, 23.25], [10.64, -13.36, 23.25], [16.64, -13.36, 23.25], [22.64, -13.36, 23.25], [28.64, -13.36, 23.25], [34.64, -13.36, 23.25], [40.64, -13.36, 23.25], [46.64, -13.36, 23.25], [52.64, -13.36, 23.25], [58.64, -13.36, 23.25], [64.64, -13.36, 23.25], [70.64, -13.36, 23.25], [76.64, -13.36, 23.25], [82.64, -13.36, 23.25], [88.64, -13.36, 23.25], [94.64, -13.36, 23.25], [100.64, -13.36, 23.25], [-103.36, -7.36, 23.25], [-97.36, -7.36, 23.25], [-91.36, -7.36, 23.25], [-85.36, -7.36, 23.25], [-79.36, -7.36, 23.25], [-73.36, -7.36, 23.25], [-67.36, -7.36, 23.25], [-61.36, -7.36, 23.25], [-55.36, -7.36, 23.25], [-49.36, -7.36, 23.25], [-43.36, -7.36, 23.25], [-37.36, -7.36, 23.25], [-31.36, -7.36, 23.25], [-25.36, -7.36, 23.25], [-19.36, -7.36, 23.25], [-13.36, -7.36, 23.25], [-7.36, -7.36, 23.25], [-1.36, -7.36, 23.25], [4.64, -7.36, 23.25], [10.64, -7.36, 23.25], [16.64, -7.36, 23.25], [22.64, -7.36, 23.25], [28.64, -7.36, 23.25], [34.64, -7.36, 23.25], [40.64, -7.36, 23.25], [46.64, -7.36, 23.25], [52.64, -7.36, 23.25], [58.64, -7.36, 23.25], [64.64, -7.36, 23.25], [70.64, -7.36, 23.25], [76.64, -7.36, 23.25], [82.64, -7.36, 23.25], [88.64, -7.36, 23.25], [94.64, -7.36, 23.25], [100.64, -7.36, 23.25], [-103.36, -1.36, 23.25], [-97.36, -1.36, 23.25], [-91.36, -1.36, 23.25], [-85.36, -1.36, 23.25], [-79.36, -1.36, 23.25], [-73.36, -1.36, 23.25], [-67.36, -1.36, 23.25], [-61.36, -1.36, 23.25], [-55.36, -1.36, 23.25], [-49.36, -1.36, 23.25], [-43.36, -1.36, 23.25], [-37.36, -1.36, 23.25], [-31.36, -1.36, 23.25], [-25.36, -1.36, 23.25], [-19.36, -1.36, 23.25], [-13.36, -1.36, 23.25], [-7.36, -1.36, 23.25], [-1.36, -1.36, 23.25], [4.64, -1.36, 23.25], [10.64, -1.36, 23.25], [16.64, -1.36, 23.25], [22.64, -1.36, 23.25], [28.64, -1.36, 23.25], [34.64, -1.36, 23.25], [40.64, -1.36, 23.25], [46.64, -1.36, 23.25], [52.64, -1.36, 23.25], [58.64, -1.36, 23.25], [64.64, -1.36, 23.25], [70.64, -1.36, 23.25], [76.64, -1.36, 23.25], [82.64, -1.36, 23.25], [88.64, -1.36, 23.25], [94.64, -1.36, 23.25], [100.64, -1.36, 23.25], [-97.36, 4.64, 23.25], [-91.36, 4.64, 23.25], [-85.36, 4.64, 23.25], [-79.36, 4.64, 23.25], [-73.36, 4.64, 23.25], [-67.36, 4.64, 23.25], [-61.36, 4.64, 23.25], [-55.36, 4.64, 23.25], [-49.36, 4.64, 23.25], [-43.36, 4.64, 23.25], [-37.36, 4.64, 23.25], [-31.36, 4.64, 23.25], [-25.36, 4.64, 23.25], [-19.36, 4.64, 23.25], [-13.36, 4.64, 23.25], [-7.36, 4.64, 23.25], [-1.36, 4.64, 23.25], [4.64, 4.64, 23.25], [10.64, 4.64, 23.25], [16.64, 4.64, 23.25], [22.64, 4.64, 23.25], [28.64, 4.64, 23.25], [34.64, 4.64, 23.25], [40.64, 4.64, 23.25], [46.64, 4.64, 23.25], [52.64, 4.64, 23.25], [58.64, 4.64, 23.25], [64.64, 4.64, 23.25], [70.64, 4.64, 23.25], [76.64, 4.64, 23.25], [82.64, 4.64, 23.25], [88.64, 4.64, 23.25], [94.64, 4.64, 23.25], [100.64, 4.64, 23.25], [-97.36, 10.64, 23.25], [-91.36, 10.64, 23.25], [-85.36, 10.64, 23.25], [-79.36, 10.64, 23.25], [-73.36, 10.64, 23.25], [-67.36, 10.64, 23.25], [-61.36, 10.64, 23.25], [-55.36, 10.64, 23.25], [-49.36, 10.64, 23.25], [-43.36, 10.64, 23.25], [-37.36, 10.64, 23.25], [-31.36, 10.64, 23.25], [-25.36, 10.64, 23.25], [-19.36, 10.64, 23.25], [-13.36, 10.64, 23.25], [-7.36, 10.64, 23.25], [-1.36, 10.64, 23.25], [4.64, 10.64, 23.25], [10.64, 10.64, 23.25], [16.64, 10.64, 23.25], [22.64, 10.64, 23.25], [28.64, 10.64, 23.25], [34.64, 10.64, 23.25], [40.64, 10.64, 23.25], [46.64, 10.64, 23.25], [52.64, 10.64, 23.25], [58.64, 10.64, 23.25], [64.64, 10.64, 23.25], [70.64, 10.64, 23.25], [76.64, 10.64, 23.25], [82.64, 10.64, 23.25], [88.64, 10.64, 23.25], [94.64, 10.64, 23.25], [100.64, 10.64, 23.25], [-97.36, 16.64, 23.25], [-91.36, 16.64, 23.25], [-85.36, 16.64, 23.25], [-79.36, 16.64, 23.25], [-73.36, 16.64, 23.25], [-67.36, 16.64, 23.25], [-61.36, 16.64, 23.25], [-55.36, 16.64, 23.25], [-49.36, 16.64, 23.25], [-43.36, 16.64, 23.25], [-37.36, 16.64, 23.25], [-31.36, 16.64, 23.25], [-25.36, 16.64, 23.25], [-19.36, 16.64, 23.25], [-13.36, 16.64, 23.25], [-7.36, 16.64, 23.25], [-1.36, 16.64, 23.25], [4.64, 16.64, 23.25], [10.64, 16.64, 23.25], [16.64, 16.64, 23.25], [22.64, 16.64, 23.25], [28.64, 16.64, 23.25], [34.64, 16.64, 23.25], [40.64, 16.64, 23.25], [46.64, 16.64, 23.25], [52.64, 16.64, 23.25], [58.64, 16.64, 23.25], [64.64, 16.64, 23.25], [70.64, 16.64, 23.25], [76.64, 16.64, 23.25], [82.64, 16.64, 23.25], [88.64, 16.64, 23.25], [94.64, 16.64, 23.25], [100.64, 16.64, 23.25], [-97.36, 22.64, 23.25], [-91.36, 22.64, 23.25], [-85.36, 22.64, 23.25], [-79.36, 22.64, 23.25], [-73.36, 22.64, 23.25], [-67.36, 22.64, 23.25], [-61.36, 22.64, 23.25], [-55.36, 22.64, 23.25], [-49.36, 22.64, 23.25], [-43.36, 22.64, 23.25], [-37.36, 22.64, 23.25], [-31.36, 22.64, 23.25], [-25.36, 22.64, 23.25], [-19.36, 22.64, 23.25], [-13.36, 22.64, 23.25], [-7.36, 22.64, 23.25], [-1.36, 22.64, 23.25], [4.64, 22.64, 23.25], [10.64, 22.64, 23.25], [16.64, 22.64, 23.25], [22.64, 22.64, 23.25], [28.64, 22.64, 23.25], [34.64, 22.64, 23.25], [40.64, 22.64, 23.25], [46.64, 22.64, 23.25], [52.64, 22.64, 23.25], [58.64, 22.64, 23.25], [64.64, 22.64, 23.25], [70.64, 22.64, 23.25], [76.64, 22.64, 23.25], [82.64, 22.64, 23.25], [88.64, 22.64, 23.25], [94.64, 22.64, 23.25], [100.64, 22.64, 23.25], [-97.36, 28.64, 23.25], [-91.36, 28.64, 23.25], [-85.36, 28.64, 23.25], [-79.36, 28.64, 23.25], [-73.36, 28.64, 23.25], [-67.36, 28.64, 23.25], [-61.36, 28.64, 23.25], [-55.36, 28.64, 23.25], [-49.36, 28.64, 23.25], [-43.36, 28.64, 23.25], [-37.36, 28.64, 23.25], [-31.36, 28.64, 23.25], [-25.36, 28.64, 23.25], [-19.36, 28.64, 23.25], [-13.36, 28.64, 23.25], [-7.36, 28.64, 23.25], [-1.36, 28.64, 23.25], [4.64, 28.64, 23.25], [10.64, 28.64, 23.25], [16.64, 28.64, 23.25], [22.64, 28.64, 23.25], [28.64, 28.64, 23.25], [34.64, 28.64, 23.25], [40.64, 28.64, 23.25], [46.64, 28.64, 23.25], [52.64, 28.64, 23.25], [58.64, 28.64, 23.25], [64.64, 28.64, 23.25], [70.64, 28.64, 23.25], [76.64, 28.64, 23.25], [82.64, 28.64, 23.25], [88.64, 28.64, 23.25], [94.64, 28.64, 23.25], [100.64, 28.64, 23.25], [-97.36, 34.64, 23.25], [-91.36, 34.64, 23.25], [-85.36, 34.64, 23.25], [-79.36, 34.64, 23.25], [-73.36, 34.64, 23.25], [-67.36, 34.64, 23.25], [-61.36, 34.64, 23.25], [-55.36, 34.64, 23.25], [-49.36, 34.64, 23.25], [-43.36, 34.64, 23.25], [-37.36, 34.64, 23.25], [-31.36, 34.64, 23.25], [-25.36, 34.64, 23.25], [-19.36, 34.64, 23.25], [-13.36, 34.64, 23.25], [-7.36, 34.64, 23.25], [-1.36, 34.64, 23.25], [4.64, 34.64, 23.25], [10.64, 34.64, 23.25], [16.64, 34.64, 23.25], [22.64, 34.64, 23.25], [28.64, 34.64, 23.25], [34.64, 34.64, 23.25], [40.64, 34.64, 23.25], [46.64, 34.64, 23.25], [52.64, 34.64, 23.25], [58.64, 34.64, 23.25], [64.64, 34.64, 23.25], [70.64, 34.64, 23.25], [76.64, 34.64, 23.25], [82.64, 34.64, 23.25], [88.64, 34.64, 23.25], [94.64, 34.64, 23.25], [100.64, 34.64, 23.25], [-97.36, 40.64, 23.25], [-91.36, 40.64, 23.25], [-85.36, 40.64, 23.25], [-79.36, 40.64, 23.25], [-73.36, 40.64, 23.25], [-67.36, 40.64, 23.25], [-61.36, 40.64, 23.25], [-55.36, 40.64, 23.25], [-49.36, 40.64, 23.25], [-43.36, 40.64, 23.25], [-37.36, 40.64, 23.25], [-31.36, 40.64, 23.25], [-25.36, 40.64, 23.25], [-19.36, 40.64, 23.25], [-13.36, 40.64, 23.25], [-7.36, 40.64, 23.25], [-1.36, 40.64, 23.25], [4.64, 40.64, 23.25], [10.64, 40.64, 23.25], [16.64, 40.64, 23.25], [22.64, 40.64, 23.25], [28.64, 40.64, 23.25], [34.64, 40.64, 23.25], [40.64, 40.64, 23.25], [46.64, 40.64, 23.25], [52.64, 40.64, 23.25], [58.64, 40.64, 23.25], [64.64, 40.64, 23.25], [70.64, 40.64, 23.25], [76.64, 40.64, 23.25], [82.64, 40.64, 23.25], [88.64, 40.64, 23.25], [94.64, 40.64, 23.25], [100.64, 40.64, 23.25], [-97.36, 46.64, 23.25], [-91.36, 46.64, 23.25], [-85.36, 46.64, 23.25], [-79.36, 46.64, 23.25], [-73.36, 46.64, 23.25], [-67.36, 46.64, 23.25], [-61.36, 46.64, 23.25], [-55.36, 46.64, 23.25], [-49.36, 46.64, 23.25], [-43.36, 46.64, 23.25], [-37.36, 46.64, 23.25], [-31.36, 46.64, 23.25], [-25.36, 46.64, 23.25], [-19.36, 46.64, 23.25], [-13.36, 46.64, 23.25], [-7.36, 46.64, 23.25], [-1.36, 46.64, 23.25], [4.64, 46.64, 23.25], [10.64, 46.64, 23.25], [16.64, 46.64, 23.25], [22.64, 46.64, 23.25], [28.64, 46.64, 23.25], [34.64, 46.64, 23.25], [40.64, 46.64, 23.25], [46.64, 46.64, 23.25], [52.64, 46.64, 23.25], [58.64, 46.64, 23.25], [64.64, 46.64, 23.25], [70.64, 46.64, 23.25], [76.64, 46.64, 23.25], [82.64, 46.64, 23.25], [88.64, 46.64, 23.25], [94.64, 46.64, 23.25], [100.64, 46.64, 23.25], [-97.36, 52.64, 23.25], [-91.36, 52.64, 23.25], [-85.36, 52.64, 23.25], [-79.36, 52.64, 23.25], [-73.36, 52.64, 23.25], [-67.36, 52.64, 23.25], [-61.36, 52.64, 23.25], [-55.36, 52.64, 23.25], [-49.36, 52.64, 23.25], [-43.36, 52.64, 23.25], [-37.36, 52.64, 23.25], [-31.36, 52.64, 23.25], [-25.36, 52.64, 23.25], [-19.36, 52.64, 23.25], [-13.36, 52.64, 23.25], [-7.36, 52.64, 23.25], [-1.36, 52.64, 23.25], [4.64, 52.64, 23.25], [10.64, 52.64, 23.25], [16.64, 52.64, 23.25], [22.64, 52.64, 23.25], [28.64, 52.64, 23.25], [34.64, 52.64, 23.25], [40.64, 52.64, 23.25], [46.64, 52.64, 23.25], [52.64, 52.64, 23.25], [58.64, 52.64, 23.25], [64.64, 52.64, 23.25], [70.64, 52.64, 23.25], [76.64, 52.64, 23.25], [82.64, 52.64, 23.25], [88.64, 52.64, 23.25], [94.64, 52.64, 23.25], [100.64, 52.64, 23.25], [-97.36, 58.64, 23.25], [-91.36, 58.64, 23.25], [-85.36, 58.64, 23.25], [-79.36, 58.64, 23.25], [-73.36, 58.64, 23.25], [-67.36, 58.64, 23.25], [-61.36, 58.64, 23.25], [-55.36, 58.64, 23.25], [-49.36, 58.64, 23.25], [-43.36, 58.64, 23.25], [-37.36, 58.64, 23.25], [-31.36, 58.64, 23.25], [-25.36, 58.64, 23.25], [-19.36, 58.64, 23.25], [-13.36, 58.64, 23.25], [-7.36, 58.64, 23.25], [-1.36, 58.64, 23.25], [4.64, 58.64, 23.25], [10.64, 58.64, 23.25], [16.64, 58.64, 23.25], [22.64, 58.64, 23.25], [28.64, 58.64, 23.25], [34.64, 58.64, 23.25], [40.64, 58.64, 23.25], [46.64, 58.64, 23.25], [52.64, 58.64, 23.25], [58.64, 58.64, 23.25], [64.64, 58.64, 23.25], [70.64, 58.64, 23.25], [76.64, 58.64, 23.25], [82.64, 58.64, 23.25], [88.64, 58.64, 23.25], [94.64, 58.64, 23.25], [100.64, 58.64, 23.25], [-97.36, 64.64, 23.25], [-91.36, 64.64, 23.25], [-85.36, 64.64, 23.25], [-79.36, 64.64, 23.25], [-73.36, 64.64, 23.25], [-67.36, 64.64, 23.25], [-61.36, 64.64, 23.25], [-55.36, 64.64, 23.25], [-49.36, 64.64, 23.25], [-43.36, 64.64, 23.25], [-37.36, 64.64, 23.25], [-31.36, 64.64, 23.25], [-25.36, 64.64, 23.25], [-19.36, 64.64, 23.25], [-13.36, 64.64, 23.25], [-7.36, 64.64, 23.25], [-1.36, 64.64, 23.25], [4.64, 64.64, 23.25], [10.64, 64.64, 23.25], [16.64, 64.64, 23.25], [22.64, 64.64, 23.25], [28.64, 64.64, 23.25], [34.64, 64.64, 23.25], [40.64, 64.64, 23.25], [46.64, 64.64, 23.25], [52.64, 64.64, 23.25], [58.64, 64.64, 23.25], [64.64, 64.64, 23.25], [70.64, 64.64, 23.25], [76.64, 64.64, 23.25], [82.64, 64.64, 23.25], [88.64, 64.64, 23.25], [94.64, 64.64, 23.25], [100.64, 64.64, 23.25], [-97.36, 70.64, 23.25], [-91.36, 70.64, 23.25], [-85.36, 70.64, 23.25], [-79.36, 70.64, 23.25], [-73.36, 70.64, 23.25], [-67.36, 70.64, 23.25], [-61.36, 70.64, 23.25], [-55.36, 70.64, 23.25], [-49.36, 70.64, 23.25], [-43.36, 70.64, 23.25], [-37.36, 70.64, 23.25], [-31.36, 70.64, 23.25], [-25.36, 70.64, 23.25], [-19.36, 70.64, 23.25], [-13.36, 70.64, 23.25], [-7.36, 70.64, 23.25], [-1.36, 70.64, 23.25], [4.64, 70.64, 23.25], [10.64, 70.64, 23.25], [16.64, 70.64, 23.25], [22.64, 70.64, 23.25], [28.64, 70.64, 23.25], [34.64, 70.64, 23.25], [40.64, 70.64, 23.25], [46.64, 70.64, 23.25], [52.64, 70.64, 23.25], [58.64, 70.64, 23.25], [64.64, 70.64, 23.25], [70.64, 70.64, 23.25], [76.64, 70.64, 23.25], [82.64, 70.64, 23.25], [88.64, 70.64, 23.25], [94.64, 70.64, 23.25], [100.64, 70.64, 23.25], [-97.36, 76.64, 23.25], [-91.36, 76.64, 23.25], [-85.36, 76.64, 23.25], [-79.36, 76.64, 23.25], [-73.36, 76.64, 23.25], [-67.36, 76.64, 23.25], [-61.36, 76.64, 23.25], [-55.36, 76.64, 23.25], [-49.36, 76.64, 23.25], [-43.36, 76.64, 23.25], [-37.36, 76.64, 23.25], [-31.36, 76.64, 23.25], [-25.36, 76.64, 23.25], [-19.36, 76.64, 23.25], [-13.36, 76.64, 23.25], [-7.36, 76.64, 23.25], [-1.36, 76.64, 23.25], [4.64, 76.64, 23.25], [10.64, 76.64, 23.25], [16.64, 76.64, 23.25], [22.64, 76.64, 23.25], [28.64, 76.64, 23.25], [34.64, 76.64, 23.25], [40.64, 76.64, 23.25], [46.64, 76.64, 23.25], [52.64, 76.64, 23.25], [58.64, 76.64, 23.25], [64.64, 76.64, 23.25], [70.64, 76.64, 23.25], [76.64, 76.64, 23.25], [82.64, 76.64, 23.25], [88.64, 76.64, 23.25], [94.64, 76.64, 23.25], [100.64, 76.64, 23.25], [-97.36, 82.64, 23.25], [-91.36, 82.64, 23.25], [-85.36, 82.64, 23.25], [-79.36, 82.64, 23.25], [-73.36, 82.64, 23.25], [-67.36, 82.64, 23.25], [-61.36, 82.64, 23.25], [-55.36, 82.64, 23.25], [-49.36, 82.64, 23.25], [-43.36, 82.64, 23.25], [-37.36, 82.64, 23.25], [-31.36, 82.64, 23.25], [-25.36, 82.64, 23.25], [-19.36, 82.64, 23.25], [-13.36, 82.64, 23.25], [-7.36, 82.64, 23.25], [-1.36, 82.64, 23.25], [4.64, 82.64, 23.25], [10.64, 82.64, 23.25], [16.64, 82.64, 23.25], [22.64, 82.64, 23.25], [28.64, 82.64, 23.25], [34.64, 82.64, 23.25], [40.64, 82.64, 23.25], [46.64, 82.64, 23.25], [52.64, 82.64, 23.25], [58.64, 82.64, 23.25], [64.64, 82.64, 23.25], [70.64, 82.64, 23.25], [76.64, 82.64, 23.25], [82.64, 82.64, 23.25], [88.64, 82.64, 23.25], [94.64, 82.64, 23.25], [100.64, 82.64, 23.25], [-97.36, 88.64, 23.25], [-91.36, 88.64, 23.25], [-85.36, 88.64, 23.25], [-79.36, 88.64, 23.25], [-73.36, 88.64, 23.25], [-67.36, 88.64, 23.25], [-61.36, 88.64, 23.25], [-55.36, 88.64, 23.25], [-49.36, 88.64, 23.25], [-43.36, 88.64, 23.25], [-37.36, 88.64, 23.25], [-31.36, 88.64, 23.25], [-25.36, 88.64, 23.25], [-19.36, 88.64, 23.25], [-13.36, 88.64, 23.25], [-7.36, 88.64, 23.25], [-1.36, 88.64, 23.25], [4.64, 88.64, 23.25], [10.64, 88.64, 23.25], [16.64, 88.64, 23.25], [22.64, 88.64, 23.25], [28.64, 88.64, 23.25], [34.64, 88.64, 23.25], [40.64, 88.64, 23.25], [46.64, 88.64, 23.25], [52.64, 88.64, 23.25], [58.64, 88.64, 23.25], [64.64, 88.64, 23.25], [70.64, 88.64, 23.25], [76.64, 88.64, 23.25], [82.64, 88.64, 23.25], [88.64, 88.64, 23.25], [94.64, 88.64, 23.25], [100.64, 88.64, 23.25], [-91.36, 94.64, 23.25], [-85.36, 94.64, 23.25], [-79.36, 94.64, 23.25], [-73.36, 94.64, 23.25], [-67.36, 94.64, 23.25], [-61.36, 94.64, 23.25], [-55.36, 94.64, 23.25], [-49.36, 94.64, 23.25], [-43.36, 94.64, 23.25], [-37.36, 94.64, 23.25], [-31.36, 94.64, 23.25], [-25.36, 94.64, 23.25], [-19.36, 94.64, 23.25], [-13.36, 94.64, 23.25], [-7.36, 94.64, 23.25], [-1.36, 94.64, 23.25], [4.64, 94.64, 23.25], [10.64, 94.64, 23.25], [16.64, 94.64, 23.25], [22.64, 94.64, 23.25], [28.64, 94.64, 23.25], [34.64, 94.64, 23.25], [40.64, 94.64, 23.25], [46.64, 94.64, 23.25], [52.64, 94.64, 23.25], [58.64, 94.64, 23.25], [64.64, 94.64, 23.25], [70.64, 94.64, 23.25], [76.64, 94.64, 23.25], [82.64, 94.64, 23.25], [88.64, 94.64, 23.25], [94.64, 94.64, 23.25], [100.64, 94.64, 23.25], [-91.36, 100.64, 23.25], [-85.36, 100.64, 23.25], [-79.36, 100.64, 23.25], [-73.36, 100.64, 23.25], [-67.36, 100.64, 23.25], [-61.36, 100.64, 23.25], [-55.36, 100.64, 23.25], [-49.36, 100.64, 23.25], [-43.36, 100.64, 23.25], [-37.36, 100.64, 23.25], [-31.36, 100.64, 23.25], [-25.36, 100.64, 23.25], [-19.36, 100.64, 23.25], [-13.36, 100.64, 23.25], [-7.36, 100.64, 23.25], [-1.36, 100.64, 23.25], [4.64, 100.64, 23.25], [10.64, 100.64, 23.25], [16.64, 100.64, 23.25], [22.64, 100.64, 23.25], [28.64, 100.64, 23.25], [34.64, 100.64, 23.25], [40.64, 100.64, 23.25], [46.64, 100.64, 23.25], [52.64, 100.64, 23.25], [58.64, 100.64, 23.25], [64.64, 100.64, 23.25], [70.64, 100.64, 23.25], [76.64, 100.64, 23.25], [82.64, 100.64, 23.25], [88.64, 100.64, 23.25], [58.64, -103.36, 29.25], [64.64, -103.36, 29.25], [70.64, -103.36, 29.25], [76.64, -103.36, 29.25], [82.64, -103.36, 29.25], [-91.36, -97.36, 29.25], [-85.36, -97.36, 29.25], [-79.36, -97.36, 29.25], [-73.36, -97.36, 29.25], [-67.36, -97.36, 29.25], [-61.36, -97.36, 29.25], [-55.36, -97.36, 29.25], [-49.36, -97.36, 29.25], [-43.36, -97.36, 29.25], [-37.36, -97.36, 29.25], [-31.36, -97.36, 29.25], [-25.36, -97.36, 29.25], [-19.36, -97.36, 29.25], [-13.36, -97.36, 29.25], [-7.36, -97.36, 29.25], [-1.36, -97.36, 29.25], [4.64, -97.36, 29.25], [10.64, -97.36, 29.25], [16.64, -97.36, 29.25], [22.64, -97.36, 29.25], [28.64, -97.36, 29.25], [34.64, -97.36, 29.25], [40.64, -97.36, 29.25], [46.64, -97.36, 29.25], [52.64, -97.36, 29.25], [58.64, -97.36, 29.25], [64.64, -97.36, 29.25], [70.64, -97.36, 29.25], [76.64, -97.36, 29.25], [82.64, -97.36, 29.25], [88.64, -97.36, 29.25], [-97.36, -91.36, 29.25], [-91.36, -91.36, 29.25], [-85.36, -91.36, 29.25], [-79.36, -91.36, 29.25], [-73.36, -91.36, 29.25], [-67.36, -91.36, 29.25], [-61.36, -91.36, 29.25], [-55.36, -91.36, 29.25], [-49.36, -91.36, 29.25], [-43.36, -91.36, 29.25], [-37.36, -91.36, 29.25], [-31.36, -91.36, 29.25], [-25.36, -91.36, 29.25], [-19.36, -91.36, 29.25], [-13.36, -91.36, 29.25], [-7.36, -91.36, 29.25], [-1.36, -91.36, 29.25], [4.64, -91.36, 29.25], [10.64, -91.36, 29.25], [16.64, -91.36, 29.25], [22.64, -91.36, 29.25], [28.64, -91.36, 29.25], [34.64, -91.36, 29.25], [40.64, -91.36, 29.25], [46.64, -91.36, 29.25], [52.64, -91.36, 29.25], [58.64, -91.36, 29.25], [64.64, -91.36, 29.25], [70.64, -91.36, 29.25], [76.64, -91.36, 29.25], [82.64, -91.36, 29.25], [88.64, -91.36, 29.25], [94.64, -91.36, 29.25], [-103.36, -85.36, 29.25], [-97.36, -85.36, 29.25], [-91.36, -85.36, 29.25], [-85.36, -85.36, 29.25], [-79.36, -85.36, 29.25], [-73.36, -85.36, 29.25], [-67.36, -85.36, 29.25], [-61.36, -85.36, 29.25], [-55.36, -85.36, 29.25], [-49.36, -85.36, 29.25], [-43.36, -85.36, 29.25], [-37.36, -85.36, 29.25], [-31.36, -85.36, 29.25], [-25.36, -85.36, 29.25], [-19.36, -85.36, 29.25], [-13.36, -85.36, 29.25], [-7.36, -85.36, 29.25], [-1.36, -85.36, 29.25], [4.64, -85.36, 29.25], [10.64, -85.36, 29.25], [16.64, -85.36, 29.25], [22.64, -85.36, 29.25], [28.64, -85.36, 29.25], [34.64, -85.36, 29.25], [40.64, -85.36, 29.25], [46.64, -85.36, 29.25], [52.64, -85.36, 29.25], [58.64, -85.36, 29.25], [64.64, -85.36, 29.25], [70.64, -85.36, 29.25], [76.64, -85.36, 29.25], [82.64, -85.36, 29.25], [88.64, -85.36, 29.25], [94.64, -85.36, 29.25], [-103.36, -79.36, 29.25], [-97.36, -79.36, 29.25], [-91.36, -79.36, 29.25], [-85.36, -79.36, 29.25], [-79.36, -79.36, 29.25], [-73.36, -79.36, 29.25], [-67.36, -79.36, 29.25], [-61.36, -79.36, 29.25], [-55.36, -79.36, 29.25], [-49.36, -79.36, 29.25], [-43.36, -79.36, 29.25], [-37.36, -79.36, 29.25], [-31.36, -79.36, 29.25], [-25.36, -79.36, 29.25], [-19.36, -79.36, 29.25], [-13.36, -79.36, 29.25], [-7.36, -79.36, 29.25], [-1.36, -79.36, 29.25], [4.64, -79.36, 29.25], [10.64, -79.36, 29.25], [16.64, -79.36, 29.25], [22.64, -79.36, 29.25], [28.64, -79.36, 29.25], [34.64, -79.36, 29.25], [40.64, -79.36, 29.25], [46.64, -79.36, 29.25], [52.64, -79.36, 29.25], [58.64, -79.36, 29.25], [64.64, -79.36, 29.25], [70.64, -79.36, 29.25], [76.64, -79.36, 29.25], [82.64, -79.36, 29.25], [88.64, -79.36, 29.25], [94.64, -79.36, 29.25], [-103.36, -73.36, 29.25], [-97.36, -73.36, 29.25], [-91.36, -73.36, 29.25], [-85.36, -73.36, 29.25], [-79.36, -73.36, 29.25], [-73.36, -73.36, 29.25], [-67.36, -73.36, 29.25], [-61.36, -73.36, 29.25], [-55.36, -73.36, 29.25], [-49.36, -73.36, 29.25], [-43.36, -73.36, 29.25], [-37.36, -73.36, 29.25], [-31.36, -73.36, 29.25], [-25.36, -73.36, 29.25], [-19.36, -73.36, 29.25], [-13.36, -73.36, 29.25], [-7.36, -73.36, 29.25], [-1.36, -73.36, 29.25], [4.64, -73.36, 29.25], [10.64, -73.36, 29.25], [16.64, -73.36, 29.25], [22.64, -73.36, 29.25], [28.64, -73.36, 29.25], [34.64, -73.36, 29.25], [40.64, -73.36, 29.25], [46.64, -73.36, 29.25], [52.64, -73.36, 29.25], [58.64, -73.36, 29.25], [64.64, -73.36, 29.25], [70.64, -73.36, 29.25], [76.64, -73.36, 29.25], [82.64, -73.36, 29.25], [88.64, -73.36, 29.25], [94.64, -73.36, 29.25], [-103.36, -67.36, 29.25], [-97.36, -67.36, 29.25], [-91.36, -67.36, 29.25], [-85.36, -67.36, 29.25], [-79.36, -67.36, 29.25], [-73.36, -67.36, 29.25], [-67.36, -67.36, 29.25], [-61.36, -67.36, 29.25], [-55.36, -67.36, 29.25], [-49.36, -67.36, 29.25], [-43.36, -67.36, 29.25], [-37.36, -67.36, 29.25], [-31.36, -67.36, 29.25], [-25.36, -67.36, 29.25], [-19.36, -67.36, 29.25], [-13.36, -67.36, 29.25], [-7.36, -67.36, 29.25], [-1.36, -67.36, 29.25], [4.64, -67.36, 29.25], [10.64, -67.36, 29.25], [16.64, -67.36, 29.25], [22.64, -67.36, 29.25], [28.64, -67.36, 29.25], [34.64, -67.36, 29.25], [40.64, -67.36, 29.25], [46.64, -67.36, 29.25], [52.64, -67.36, 29.25], [58.64, -67.36, 29.25], [64.64, -67.36, 29.25], [70.64, -67.36, 29.25], [76.64, -67.36, 29.25], [82.64, -67.36, 29.25], [88.64, -67.36, 29.25], [94.64, -67.36, 29.25], [100.64, -67.36, 29.25], [-103.36, -61.36, 29.25], [-97.36, -61.36, 29.25], [-91.36, -61.36, 29.25], [-85.36, -61.36, 29.25], [-79.36, -61.36, 29.25], [-73.36, -61.36, 29.25], [-67.36, -61.36, 29.25], [-61.36, -61.36, 29.25], [-55.36, -61.36, 29.25], [-49.36, -61.36, 29.25], [-43.36, -61.36, 29.25], [-37.36, -61.36, 29.25], [-31.36, -61.36, 29.25], [-25.36, -61.36, 29.25], [-19.36, -61.36, 29.25], [-13.36, -61.36, 29.25], [-7.36, -61.36, 29.25], [-1.36, -61.36, 29.25], [4.64, -61.36, 29.25], [10.64, -61.36, 29.25], [16.64, -61.36, 29.25], [22.64, -61.36, 29.25], [28.64, -61.36, 29.25], [34.64, -61.36, 29.25], [40.64, -61.36, 29.25], [46.64, -61.36, 29.25], [52.64, -61.36, 29.25], [58.64, -61.36, 29.25], [64.64, -61.36, 29.25], [70.64, -61.36, 29.25], [76.64, -61.36, 29.25], [82.64, -61.36, 29.25], [88.64, -61.36, 29.25], [94.64, -61.36, 29.25], [100.64, -61.36, 29.25], [-103.36, -55.36, 29.25], [-97.36, -55.36, 29.25], [-91.36, -55.36, 29.25], [-85.36, -55.36, 29.25], [-79.36, -55.36, 29.25], [-73.36, -55.36, 29.25], [-67.36, -55.36, 29.25], [-61.36, -55.36, 29.25], [-55.36, -55.36, 29.25], [-49.36, -55.36, 29.25], [-43.36, -55.36, 29.25], [-37.36, -55.36, 29.25], [-31.36, -55.36, 29.25], [-25.36, -55.36, 29.25], [-19.36, -55.36, 29.25], [-13.36, -55.36, 29.25], [-7.36, -55.36, 29.25], [-1.36, -55.36, 29.25], [4.64, -55.36, 29.25], [10.64, -55.36, 29.25], [16.64, -55.36, 29.25], [22.64, -55.36, 29.25], [28.64, -55.36, 29.25], [34.64, -55.36, 29.25], [40.64, -55.36, 29.25], [46.64, -55.36, 29.25], [52.64, -55.36, 29.25], [58.64, -55.36, 29.25], [64.64, -55.36, 29.25], [70.64, -55.36, 29.25], [76.64, -55.36, 29.25], [82.64, -55.36, 29.25], [88.64, -55.36, 29.25], [94.64, -55.36, 29.25], [100.64, -55.36, 29.25], [-103.36, -49.36, 29.25], [-97.36, -49.36, 29.25], [-91.36, -49.36, 29.25], [-85.36, -49.36, 29.25], [-79.36, -49.36, 29.25], [-73.36, -49.36, 29.25], [-67.36, -49.36, 29.25], [-61.36, -49.36, 29.25], [-55.36, -49.36, 29.25], [-49.36, -49.36, 29.25], [-43.36, -49.36, 29.25], [-37.36, -49.36, 29.25], [-31.36, -49.36, 29.25], [-25.36, -49.36, 29.25], [-19.36, -49.36, 29.25], [-13.36, -49.36, 29.25], [-7.36, -49.36, 29.25], [-1.36, -49.36, 29.25], [4.64, -49.36, 29.25], [10.64, -49.36, 29.25], [16.64, -49.36, 29.25], [22.64, -49.36, 29.25], [28.64, -49.36, 29.25], [34.64, -49.36, 29.25], [40.64, -49.36, 29.25], [46.64, -49.36, 29.25], [52.64, -49.36, 29.25], [58.64, -49.36, 29.25], [64.64, -49.36, 29.25], [70.64, -49.36, 29.25], [76.64, -49.36, 29.25], [82.64, -49.36, 29.25], [88.64, -49.36, 29.25], [94.64, -49.36, 29.25], [100.64, -49.36, 29.25], [-103.36, -43.36, 29.25], [-97.36, -43.36, 29.25], [-91.36, -43.36, 29.25], [-85.36, -43.36, 29.25], [-79.36, -43.36, 29.25], [-73.36, -43.36, 29.25], [-67.36, -43.36, 29.25], [-61.36, -43.36, 29.25], [-55.36, -43.36, 29.25], [-49.36, -43.36, 29.25], [-43.36, -43.36, 29.25], [-37.36, -43.36, 29.25], [-31.36, -43.36, 29.25], [-25.36, -43.36, 29.25], [-19.36, -43.36, 29.25], [-13.36, -43.36, 29.25], [-7.36, -43.36, 29.25], [-1.36, -43.36, 29.25], [4.64, -43.36, 29.25], [10.64, -43.36, 29.25], [16.64, -43.36, 29.25], [22.64, -43.36, 29.25], [28.64, -43.36, 29.25], [34.64, -43.36, 29.25], [40.64, -43.36, 29.25], [46.64, -43.36, 29.25], [52.64, -43.36, 29.25], [58.64, -43.36, 29.25], [64.64, -43.36, 29.25], [70.64, -43.36, 29.25], [76.64, -43.36, 29.25], [82.64, -43.36, 29.25], [88.64, -43.36, 29.25], [94.64, -43.36, 29.25], [100.64, -43.36, 29.25], [-103.36, -37.36, 29.25], [-97.36, -37.36, 29.25], [-91.36, -37.36, 29.25], [-85.36, -37.36, 29.25], [-79.36, -37.36, 29.25], [-73.36, -37.36, 29.25], [-67.36, -37.36, 29.25], [-61.36, -37.36, 29.25], [-55.36, -37.36, 29.25], [-49.36, -37.36, 29.25], [-43.36, -37.36, 29.25], [-37.36, -37.36, 29.25], [-31.36, -37.36, 29.25], [-25.36, -37.36, 29.25], [-19.36, -37.36, 29.25], [-13.36, -37.36, 29.25], [-7.36, -37.36, 29.25], [-1.36, -37.36, 29.25], [4.64, -37.36, 29.25], [10.64, -37.36, 29.25], [16.64, -37.36, 29.25], [22.64, -37.36, 29.25], [28.64, -37.36, 29.25], [34.64, -37.36, 29.25], [40.64, -37.36, 29.25], [46.64, -37.36, 29.25], [52.64, -37.36, 29.25], [58.64, -37.36, 29.25], [64.64, -37.36, 29.25], [70.64, -37.36, 29.25], [76.64, -37.36, 29.25], [82.64, -37.36, 29.25], [88.64, -37.36, 29.25], [94.64, -37.36, 29.25], [100.64, -37.36, 29.25], [-103.36, -31.36, 29.25], [-97.36, -31.36, 29.25], [-91.36, -31.36, 29.25], [-85.36, -31.36, 29.25], [-79.36, -31.36, 29.25], [-73.36, -31.36, 29.25], [-67.36, -31.36, 29.25], [-61.36, -31.36, 29.25], [-55.36, -31.36, 29.25], [-49.36, -31.36, 29.25], [-43.36, -31.36, 29.25], [-37.36, -31.36, 29.25], [-31.36, -31.36, 29.25], [-25.36, -31.36, 29.25], [-19.36, -31.36, 29.25], [-13.36, -31.36, 29.25], [-7.36, -31.36, 29.25], [-1.36, -31.36, 29.25], [4.64, -31.36, 29.25], [10.64, -31.36, 29.25], [16.64, -31.36, 29.25], [22.64, -31.36, 29.25], [28.64, -31.36, 29.25], [34.64, -31.36, 29.25], [40.64, -31.36, 29.25], [46.64, -31.36, 29.25], [52.64, -31.36, 29.25], [58.64, -31.36, 29.25], [64.64, -31.36, 29.25], [70.64, -31.36, 29.25], [76.64, -31.36, 29.25], [82.64, -31.36, 29.25], [88.64, -31.36, 29.25], [94.64, -31.36, 29.25], [100.64, -31.36, 29.25], [-103.36, -25.36, 29.25], [-97.36, -25.36, 29.25], [-91.36, -25.36, 29.25], [-85.36, -25.36, 29.25], [-79.36, -25.36, 29.25], [-73.36, -25.36, 29.25], [-67.36, -25.36, 29.25], [-61.36, -25.36, 29.25], [-55.36, -25.36, 29.25], [-49.36, -25.36, 29.25], [-43.36, -25.36, 29.25], [-37.36, -25.36, 29.25], [-31.36, -25.36, 29.25], [-25.36, -25.36, 29.25], [-19.36, -25.36, 29.25], [-13.36, -25.36, 29.25], [-7.36, -25.36, 29.25], [-1.36, -25.36, 29.25], [4.64, -25.36, 29.25], [10.64, -25.36, 29.25], [16.64, -25.36, 29.25], [22.64, -25.36, 29.25], [28.64, -25.36, 29.25], [34.64, -25.36, 29.25], [40.64, -25.36, 29.25], [46.64, -25.36, 29.25], [52.64, -25.36, 29.25], [58.64, -25.36, 29.25], [64.64, -25.36, 29.25], [70.64, -25.36, 29.25], [76.64, -25.36, 29.25], [82.64, -25.36, 29.25], [88.64, -25.36, 29.25], [94.64, -25.36, 29.25], [100.64, -25.36, 29.25], [-103.36, -19.36, 29.25], [-97.36, -19.36, 29.25], [-91.36, -19.36, 29.25], [-85.36, -19.36, 29.25], [-79.36, -19.36, 29.25], [-73.36, -19.36, 29.25], [-67.36, -19.36, 29.25], [-61.36, -19.36, 29.25], [-55.36, -19.36, 29.25], [-49.36, -19.36, 29.25], [-43.36, -19.36, 29.25], [-37.36, -19.36, 29.25], [-31.36, -19.36, 29.25], [-25.36, -19.36, 29.25], [-19.36, -19.36, 29.25], [-13.36, -19.36, 29.25], [-7.36, -19.36, 29.25], [-1.36, -19.36, 29.25], [4.64, -19.36, 29.25], [10.64, -19.36, 29.25], [16.64, -19.36, 29.25], [22.64, -19.36, 29.25], [28.64, -19.36, 29.25], [34.64, -19.36, 29.25], [40.64, -19.36, 29.25], [46.64, -19.36, 29.25], [52.64, -19.36, 29.25], [58.64, -19.36, 29.25], [64.64, -19.36, 29.25], [70.64, -19.36, 29.25], [76.64, -19.36, 29.25], [82.64, -19.36, 29.25], [88.64, -19.36, 29.25], [94.64, -19.36, 29.25], [100.64, -19.36, 29.25], [-103.36, -13.36, 29.25], [-97.36, -13.36, 29.25], [-91.36, -13.36, 29.25], [-85.36, -13.36, 29.25], [-79.36, -13.36, 29.25], [-73.36, -13.36, 29.25], [-67.36, -13.36, 29.25], [-61.36, -13.36, 29.25], [-55.36, -13.36, 29.25], [-49.36, -13.36, 29.25], [-43.36, -13.36, 29.25], [-37.36, -13.36, 29.25], [-31.36, -13.36, 29.25], [-25.36, -13.36, 29.25], [-19.36, -13.36, 29.25], [-13.36, -13.36, 29.25], [-7.36, -13.36, 29.25], [-1.36, -13.36, 29.25], [4.64, -13.36, 29.25], [10.64, -13.36, 29.25], [16.64, -13.36, 29.25], [22.64, -13.36, 29.25], [28.64, -13.36, 29.25], [34.64, -13.36, 29.25], [40.64, -13.36, 29.25], [46.64, -13.36, 29.25], [52.64, -13.36, 29.25], [58.64, -13.36, 29.25], [64.64, -13.36, 29.25], [70.64, -13.36, 29.25], [76.64, -13.36, 29.25], [82.64, -13.36, 29.25], [88.64, -13.36, 29.25], [94.64, -13.36, 29.25], [100.64, -13.36, 29.25], [-103.36, -7.36, 29.25], [-97.36, -7.36, 29.25], [-91.36, -7.36, 29.25], [-85.36, -7.36, 29.25], [-79.36, -7.36, 29.25], [-73.36, -7.36, 29.25], [-67.36, -7.36, 29.25], [-61.36, -7.36, 29.25], [-55.36, -7.36, 29.25], [-49.36, -7.36, 29.25], [-43.36, -7.36, 29.25], [-37.36, -7.36, 29.25], [-31.36, -7.36, 29.25], [-25.36, -7.36, 29.25], [-19.36, -7.36, 29.25], [-13.36, -7.36, 29.25], [-7.36, -7.36, 29.25], [-1.36, -7.36, 29.25], [4.64, -7.36, 29.25], [10.64, -7.36, 29.25], [16.64, -7.36, 29.25], [22.64, -7.36, 29.25], [28.64, -7.36, 29.25], [34.64, -7.36, 29.25], [40.64, -7.36, 29.25], [46.64, -7.36, 29.25], [52.64, -7.36, 29.25], [58.64, -7.36, 29.25], [64.64, -7.36, 29.25], [70.64, -7.36, 29.25], [76.64, -7.36, 29.25], [82.64, -7.36, 29.25], [88.64, -7.36, 29.25], [94.64, -7.36, 29.25], [100.64, -7.36, 29.25], [-103.36, -1.36, 29.25], [-97.36, -1.36, 29.25], [-91.36, -1.36, 29.25], [-85.36, -1.36, 29.25], [-79.36, -1.36, 29.25], [-73.36, -1.36, 29.25], [-67.36, -1.36, 29.25], [-61.36, -1.36, 29.25], [-55.36, -1.36, 29.25], [-49.36, -1.36, 29.25], [-43.36, -1.36, 29.25], [-37.36, -1.36, 29.25], [-31.36, -1.36, 29.25], [-25.36, -1.36, 29.25], [-19.36, -1.36, 29.25], [-13.36, -1.36, 29.25], [-7.36, -1.36, 29.25], [-1.36, -1.36, 29.25], [4.64, -1.36, 29.25], [10.64, -1.36, 29.25], [16.64, -1.36, 29.25], [22.64, -1.36, 29.25], [28.64, -1.36, 29.25], [34.64, -1.36, 29.25], [40.64, -1.36, 29.25], [46.64, -1.36, 29.25], [52.64, -1.36, 29.25], [58.64, -1.36, 29.25], [64.64, -1.36, 29.25], [70.64, -1.36, 29.25], [76.64, -1.36, 29.25], [82.64, -1.36, 29.25], [88.64, -1.36, 29.25], [94.64, -1.36, 29.25], [100.64, -1.36, 29.25], [-97.36, 4.64, 29.25], [-91.36, 4.64, 29.25], [-85.36, 4.64, 29.25], [-79.36, 4.64, 29.25], [-73.36, 4.64, 29.25], [-67.36, 4.64, 29.25], [-61.36, 4.64, 29.25], [-55.36, 4.64, 29.25], [-49.36, 4.64, 29.25], [-43.36, 4.64, 29.25], [-37.36, 4.64, 29.25], [-31.36, 4.64, 29.25], [-25.36, 4.64, 29.25], [-19.36, 4.64, 29.25], [-13.36, 4.64, 29.25], [-7.36, 4.64, 29.25], [-1.36, 4.64, 29.25], [4.64, 4.64, 29.25], [10.64, 4.64, 29.25], [16.64, 4.64, 29.25], [22.64, 4.64, 29.25], [28.64, 4.64, 29.25], [34.64, 4.64, 29.25], [40.64, 4.64, 29.25], [46.64, 4.64, 29.25], [52.64, 4.64, 29.25], [58.64, 4.64, 29.25], [64.64, 4.64, 29.25], [70.64, 4.64, 29.25], [76.64, 4.64, 29.25], [82.64, 4.64, 29.25], [88.64, 4.64, 29.25], [94.64, 4.64, 29.25], [100.64, 4.64, 29.25], [-97.36, 10.64, 29.25], [-91.36, 10.64, 29.25], [-85.36, 10.64, 29.25], [-79.36, 10.64, 29.25], [-73.36, 10.64, 29.25], [-67.36, 10.64, 29.25], [-61.36, 10.64, 29.25], [-55.36, 10.64, 29.25], [-49.36, 10.64, 29.25], [-43.36, 10.64, 29.25], [-37.36, 10.64, 29.25], [-31.36, 10.64, 29.25], [-25.36, 10.64, 29.25], [-19.36, 10.64, 29.25], [-13.36, 10.64, 29.25], [-7.36, 10.64, 29.25], [-1.36, 10.64, 29.25], [4.64, 10.64, 29.25], [10.64, 10.64, 29.25], [16.64, 10.64, 29.25], [22.64, 10.64, 29.25], [28.64, 10.64, 29.25], [34.64, 10.64, 29.25], [40.64, 10.64, 29.25], [46.64, 10.64, 29.25], [52.64, 10.64, 29.25], [58.64, 10.64, 29.25], [64.64, 10.64, 29.25], [70.64, 10.64, 29.25], [76.64, 10.64, 29.25], [82.64, 10.64, 29.25], [88.64, 10.64, 29.25], [94.64, 10.64, 29.25], [100.64, 10.64, 29.25], [-97.36, 16.64, 29.25], [-91.36, 16.64, 29.25], [-85.36, 16.64, 29.25], [-79.36, 16.64, 29.25], [-73.36, 16.64, 29.25], [-67.36, 16.64, 29.25], [-61.36, 16.64, 29.25], [-55.36, 16.64, 29.25], [-49.36, 16.64, 29.25], [-43.36, 16.64, 29.25], [-37.36, 16.64, 29.25], [-31.36, 16.64, 29.25], [-25.36, 16.64, 29.25], [-19.36, 16.64, 29.25], [-13.36, 16.64, 29.25], [-7.36, 16.64, 29.25], [-1.36, 16.64, 29.25], [4.64, 16.64, 29.25], [10.64, 16.64, 29.25], [16.64, 16.64, 29.25], [22.64, 16.64, 29.25], [28.64, 16.64, 29.25], [34.64, 16.64, 29.25], [40.64, 16.64, 29.25], [46.64, 16.64, 29.25], [52.64, 16.64, 29.25], [58.64, 16.64, 29.25], [64.64, 16.64, 29.25], [70.64, 16.64, 29.25], [76.64, 16.64, 29.25], [82.64, 16.64, 29.25], [88.64, 16.64, 29.25], [94.64, 16.64, 29.25], [100.64, 16.64, 29.25], [-97.36, 22.64, 29.25], [-91.36, 22.64, 29.25], [-85.36, 22.64, 29.25], [-79.36, 22.64, 29.25], [-73.36, 22.64, 29.25], [-67.36, 22.64, 29.25], [-61.36, 22.64, 29.25], [-55.36, 22.64, 29.25], [-49.36, 22.64, 29.25], [-43.36, 22.64, 29.25], [-37.36, 22.64, 29.25], [-31.36, 22.64, 29.25], [-25.36, 22.64, 29.25], [-19.36, 22.64, 29.25], [-13.36, 22.64, 29.25], [-7.36, 22.64, 29.25], [-1.36, 22.64, 29.25], [4.64, 22.64, 29.25], [10.64, 22.64, 29.25], [16.64, 22.64, 29.25], [22.64, 22.64, 29.25], [28.64, 22.64, 29.25], [34.64, 22.64, 29.25], [40.64, 22.64, 29.25], [46.64, 22.64, 29.25], [52.64, 22.64, 29.25], [58.64, 22.64, 29.25], [64.64, 22.64, 29.25], [70.64, 22.64, 29.25], [76.64, 22.64, 29.25], [82.64, 22.64, 29.25], [88.64, 22.64, 29.25], [94.64, 22.64, 29.25], [100.64, 22.64, 29.25], [-97.36, 28.64, 29.25], [-91.36, 28.64, 29.25], [-85.36, 28.64, 29.25], [-79.36, 28.64, 29.25], [-73.36, 28.64, 29.25], [-67.36, 28.64, 29.25], [-61.36, 28.64, 29.25], [-55.36, 28.64, 29.25], [-49.36, 28.64, 29.25], [-43.36, 28.64, 29.25], [-37.36, 28.64, 29.25], [-31.36, 28.64, 29.25], [-25.36, 28.64, 29.25], [-19.36, 28.64, 29.25], [-13.36, 28.64, 29.25], [-7.36, 28.64, 29.25], [-1.36, 28.64, 29.25], [4.64, 28.64, 29.25], [10.64, 28.64, 29.25], [16.64, 28.64, 29.25], [22.64, 28.64, 29.25], [28.64, 28.64, 29.25], [34.64, 28.64, 29.25], [40.64, 28.64, 29.25], [46.64, 28.64, 29.25], [52.64, 28.64, 29.25], [58.64, 28.64, 29.25], [64.64, 28.64, 29.25], [70.64, 28.64, 29.25], [76.64, 28.64, 29.25], [82.64, 28.64, 29.25], [88.64, 28.64, 29.25], [94.64, 28.64, 29.25], [100.64, 28.64, 29.25], [-97.36, 34.64, 29.25], [-91.36, 34.64, 29.25], [-85.36, 34.64, 29.25], [-79.36, 34.64, 29.25], [-73.36, 34.64, 29.25], [-67.36, 34.64, 29.25], [-61.36, 34.64, 29.25], [-55.36, 34.64, 29.25], [-49.36, 34.64, 29.25], [-43.36, 34.64, 29.25], [-37.36, 34.64, 29.25], [-31.36, 34.64, 29.25], [-25.36, 34.64, 29.25], [-19.36, 34.64, 29.25], [-13.36, 34.64, 29.25], [-7.36, 34.64, 29.25], [-1.36, 34.64, 29.25], [4.64, 34.64, 29.25], [10.64, 34.64, 29.25], [16.64, 34.64, 29.25], [22.64, 34.64, 29.25], [28.64, 34.64, 29.25], [34.64, 34.64, 29.25], [40.64, 34.64, 29.25], [46.64, 34.64, 29.25], [52.64, 34.64, 29.25], [58.64, 34.64, 29.25], [64.64, 34.64, 29.25], [70.64, 34.64, 29.25], [76.64, 34.64, 29.25], [82.64, 34.64, 29.25], [88.64, 34.64, 29.25], [94.64, 34.64, 29.25], [100.64, 34.64, 29.25], [-97.36, 40.64, 29.25], [-91.36, 40.64, 29.25], [-85.36, 40.64, 29.25], [-79.36, 40.64, 29.25], [-73.36, 40.64, 29.25], [-67.36, 40.64, 29.25], [-61.36, 40.64, 29.25], [-55.36, 40.64, 29.25], [-49.36, 40.64, 29.25], [-43.36, 40.64, 29.25], [-37.36, 40.64, 29.25], [-31.36, 40.64, 29.25], [-25.36, 40.64, 29.25], [-19.36, 40.64, 29.25], [-13.36, 40.64, 29.25], [-7.36, 40.64, 29.25], [-1.36, 40.64, 29.25], [4.64, 40.64, 29.25], [10.64, 40.64, 29.25], [16.64, 40.64, 29.25], [22.64, 40.64, 29.25], [28.64, 40.64, 29.25], [34.64, 40.64, 29.25], [40.64, 40.64, 29.25], [46.64, 40.64, 29.25], [52.64, 40.64, 29.25], [58.64, 40.64, 29.25], [64.64, 40.64, 29.25], [70.64, 40.64, 29.25], [76.64, 40.64, 29.25], [82.64, 40.64, 29.25], [88.64, 40.64, 29.25], [94.64, 40.64, 29.25], [100.64, 40.64, 29.25], [-97.36, 46.64, 29.25], [-91.36, 46.64, 29.25], [-85.36, 46.64, 29.25], [-79.36, 46.64, 29.25], [-73.36, 46.64, 29.25], [-67.36, 46.64, 29.25], [-61.36, 46.64, 29.25], [-55.36, 46.64, 29.25], [-49.36, 46.64, 29.25], [-43.36, 46.64, 29.25], [-37.36, 46.64, 29.25], [-31.36, 46.64, 29.25], [-25.36, 46.64, 29.25], [-19.36, 46.64, 29.25], [-13.36, 46.64, 29.25], [-7.36, 46.64, 29.25], [-1.36, 46.64, 29.25], [4.64, 46.64, 29.25], [10.64, 46.64, 29.25], [16.64, 46.64, 29.25], [22.64, 46.64, 29.25], [28.64, 46.64, 29.25], [34.64, 46.64, 29.25], [40.64, 46.64, 29.25], [46.64, 46.64, 29.25], [52.64, 46.64, 29.25], [58.64, 46.64, 29.25], [64.64, 46.64, 29.25], [70.64, 46.64, 29.25], [76.64, 46.64, 29.25], [82.64, 46.64, 29.25], [88.64, 46.64, 29.25], [94.64, 46.64, 29.25], [100.64, 46.64, 29.25], [-97.36, 52.64, 29.25], [-91.36, 52.64, 29.25], [-85.36, 52.64, 29.25], [-79.36, 52.64, 29.25], [-73.36, 52.64, 29.25], [-67.36, 52.64, 29.25], [-61.36, 52.64, 29.25], [-55.36, 52.64, 29.25], [-49.36, 52.64, 29.25], [-43.36, 52.64, 29.25], [-37.36, 52.64, 29.25], [-31.36, 52.64, 29.25], [-25.36, 52.64, 29.25], [-19.36, 52.64, 29.25], [-13.36, 52.64, 29.25], [-7.36, 52.64, 29.25], [-1.36, 52.64, 29.25], [4.64, 52.64, 29.25], [10.64, 52.64, 29.25], [16.64, 52.64, 29.25], [22.64, 52.64, 29.25], [28.64, 52.64, 29.25], [34.64, 52.64, 29.25], [40.64, 52.64, 29.25], [46.64, 52.64, 29.25], [52.64, 52.64, 29.25], [58.64, 52.64, 29.25], [64.64, 52.64, 29.25], [70.64, 52.64, 29.25], [76.64, 52.64, 29.25], [82.64, 52.64, 29.25], [88.64, 52.64, 29.25], [94.64, 52.64, 29.25], [100.64, 52.64, 29.25], [-97.36, 58.64, 29.25], [-91.36, 58.64, 29.25], [-85.36, 58.64, 29.25], [-79.36, 58.64, 29.25], [-73.36, 58.64, 29.25], [-67.36, 58.64, 29.25], [-61.36, 58.64, 29.25], [-55.36, 58.64, 29.25], [-49.36, 58.64, 29.25], [-43.36, 58.64, 29.25], [-37.36, 58.64, 29.25], [-31.36, 58.64, 29.25], [-25.36, 58.64, 29.25], [-19.36, 58.64, 29.25], [-13.36, 58.64, 29.25], [-7.36, 58.64, 29.25], [-1.36, 58.64, 29.25], [4.64, 58.64, 29.25], [10.64, 58.64, 29.25], [16.64, 58.64, 29.25], [22.64, 58.64, 29.25], [28.64, 58.64, 29.25], [34.64, 58.64, 29.25], [40.64, 58.64, 29.25], [46.64, 58.64, 29.25], [52.64, 58.64, 29.25], [58.64, 58.64, 29.25], [64.64, 58.64, 29.25], [70.64, 58.64, 29.25], [76.64, 58.64, 29.25], [82.64, 58.64, 29.25], [88.64, 58.64, 29.25], [94.64, 58.64, 29.25], [100.64, 58.64, 29.25], [-97.36, 64.64, 29.25], [-91.36, 64.64, 29.25], [-85.36, 64.64, 29.25], [-79.36, 64.64, 29.25], [-73.36, 64.64, 29.25], [-67.36, 64.64, 29.25], [-61.36, 64.64, 29.25], [-55.36, 64.64, 29.25], [-49.36, 64.64, 29.25], [-43.36, 64.64, 29.25], [-37.36, 64.64, 29.25], [-31.36, 64.64, 29.25], [-25.36, 64.64, 29.25], [-19.36, 64.64, 29.25], [-13.36, 64.64, 29.25], [-7.36, 64.64, 29.25], [-1.36, 64.64, 29.25], [4.64, 64.64, 29.25], [10.64, 64.64, 29.25], [16.64, 64.64, 29.25], [22.64, 64.64, 29.25], [28.64, 64.64, 29.25], [34.64, 64.64, 29.25], [40.64, 64.64, 29.25], [46.64, 64.64, 29.25], [52.64, 64.64, 29.25], [58.64, 64.64, 29.25], [64.64, 64.64, 29.25], [70.64, 64.64, 29.25], [76.64, 64.64, 29.25], [82.64, 64.64, 29.25], [88.64, 64.64, 29.25], [94.64, 64.64, 29.25], [100.64, 64.64, 29.25], [-97.36, 70.64, 29.25], [-91.36, 70.64, 29.25], [-85.36, 70.64, 29.25], [-79.36, 70.64, 29.25], [-73.36, 70.64, 29.25], [-67.36, 70.64, 29.25], [-61.36, 70.64, 29.25], [-55.36, 70.64, 29.25], [-49.36, 70.64, 29.25], [-43.36, 70.64, 29.25], [-37.36, 70.64, 29.25], [-31.36, 70.64, 29.25], [-25.36, 70.64, 29.25], [-19.36, 70.64, 29.25], [-13.36, 70.64, 29.25], [-7.36, 70.64, 29.25], [-1.36, 70.64, 29.25], [4.64, 70.64, 29.25], [10.64, 70.64, 29.25], [16.64, 70.64, 29.25], [22.64, 70.64, 29.25], [28.64, 70.64, 29.25], [34.64, 70.64, 29.25], [40.64, 70.64, 29.25], [46.64, 70.64, 29.25], [52.64, 70.64, 29.25], [58.64, 70.64, 29.25], [64.64, 70.64, 29.25], [70.64, 70.64, 29.25], [76.64, 70.64, 29.25], [82.64, 70.64, 29.25], [88.64, 70.64, 29.25], [94.64, 70.64, 29.25], [100.64, 70.64, 29.25], [-97.36, 76.64, 29.25], [-91.36, 76.64, 29.25], [-85.36, 76.64, 29.25], [-79.36, 76.64, 29.25], [-73.36, 76.64, 29.25], [-67.36, 76.64, 29.25], [-61.36, 76.64, 29.25], [-55.36, 76.64, 29.25], [-49.36, 76.64, 29.25], [-43.36, 76.64, 29.25], [-37.36, 76.64, 29.25], [-31.36, 76.64, 29.25], [-25.36, 76.64, 29.25], [-19.36, 76.64, 29.25], [-13.36, 76.64, 29.25], [-7.36, 76.64, 29.25], [-1.36, 76.64, 29.25], [4.64, 76.64, 29.25], [10.64, 76.64, 29.25], [16.64, 76.64, 29.25], [22.64, 76.64, 29.25], [28.64, 76.64, 29.25], [34.64, 76.64, 29.25], [40.64, 76.64, 29.25], [46.64, 76.64, 29.25], [52.64, 76.64, 29.25], [58.64, 76.64, 29.25], [64.64, 76.64, 29.25], [70.64, 76.64, 29.25], [76.64, 76.64, 29.25], [82.64, 76.64, 29.25], [88.64, 76.64, 29.25], [94.64, 76.64, 29.25], [100.64, 76.64, 29.25], [-97.36, 82.64, 29.25], [-91.36, 82.64, 29.25], [-85.36, 82.64, 29.25], [-79.36, 82.64, 29.25], [-73.36, 82.64, 29.25], [-67.36, 82.64, 29.25], [-61.36, 82.64, 29.25], [-55.36, 82.64, 29.25], [-49.36, 82.64, 29.25], [-43.36, 82.64, 29.25], [-37.36, 82.64, 29.25], [-31.36, 82.64, 29.25], [-25.36, 82.64, 29.25], [-19.36, 82.64, 29.25], [-13.36, 82.64, 29.25], [-7.36, 82.64, 29.25], [-1.36, 82.64, 29.25], [4.64, 82.64, 29.25], [10.64, 82.64, 29.25], [16.64, 82.64, 29.25], [22.64, 82.64, 29.25], [28.64, 82.64, 29.25], [34.64, 82.64, 29.25], [40.64, 82.64, 29.25], [46.64, 82.64, 29.25], [52.64, 82.64, 29.25], [58.64, 82.64, 29.25], [64.64, 82.64, 29.25], [70.64, 82.64, 29.25], [76.64, 82.64, 29.25], [82.64, 82.64, 29.25], [88.64, 82.64, 29.25], [94.64, 82.64, 29.25], [100.64, 82.64, 29.25], [-97.36, 88.64, 29.25], [-91.36, 88.64, 29.25], [-85.36, 88.64, 29.25], [-79.36, 88.64, 29.25], [-73.36, 88.64, 29.25], [-67.36, 88.64, 29.25], [-61.36, 88.64, 29.25], [-55.36, 88.64, 29.25], [-49.36, 88.64, 29.25], [-43.36, 88.64, 29.25], [-37.36, 88.64, 29.25], [-31.36, 88.64, 29.25], [-25.36, 88.64, 29.25], [-19.36, 88.64, 29.25], [-13.36, 88.64, 29.25], [-7.36, 88.64, 29.25], [-1.36, 88.64, 29.25], [4.64, 88.64, 29.25], [10.64, 88.64, 29.25], [16.64, 88.64, 29.25], [22.64, 88.64, 29.25], [28.64, 88.64, 29.25], [34.64, 88.64, 29.25], [40.64, 88.64, 29.25], [46.64, 88.64, 29.25], [52.64, 88.64, 29.25], [58.64, 88.64, 29.25], [64.64, 88.64, 29.25], [70.64, 88.64, 29.25], [76.64, 88.64, 29.25], [82.64, 88.64, 29.25], [88.64, 88.64, 29.25], [94.64, 88.64, 29.25], [100.64, 88.64, 29.25], [-91.36, 94.64, 29.25], [-85.36, 94.64, 29.25], [-79.36, 94.64, 29.25], [-73.36, 94.64, 29.25], [-67.36, 94.64, 29.25], [-61.36, 94.64, 29.25], [-55.36, 94.64, 29.25], [-49.36, 94.64, 29.25], [-43.36, 94.64, 29.25], [-37.36, 94.64, 29.25], [-31.36, 94.64, 29.25], [-25.36, 94.64, 29.25], [-19.36, 94.64, 29.25], [-13.36, 94.64, 29.25], [-7.36, 94.64, 29.25], [-1.36, 94.64, 29.25], [4.64, 94.64, 29.25], [10.64, 94.64, 29.25], [16.64, 94.64, 29.25], [22.64, 94.64, 29.25], [28.64, 94.64, 29.25], [34.64, 94.64, 29.25], [40.64, 94.64, 29.25], [46.64, 94.64, 29.25], [52.64, 94.64, 29.25], [58.64, 94.64, 29.25], [64.64, 94.64, 29.25], [70.64, 94.64, 29.25], [76.64, 94.64, 29.25], [82.64, 94.64, 29.25], [88.64, 94.64, 29.25], [94.64, 94.64, 29.25], [100.64, 94.64, 29.25], [-91.36, 100.64, 29.25], [-85.36, 100.64, 29.25], [-79.36, 100.64, 29.25], [-73.36, 100.64, 29.25], [-67.36, 100.64, 29.25], [-61.36, 100.64, 29.25], [-55.36, 100.64, 29.25], [-49.36, 100.64, 29.25], [-43.36, 100.64, 29.25], [-37.36, 100.64, 29.25], [-31.36, 100.64, 29.25], [-25.36, 100.64, 29.25], [-19.36, 100.64, 29.25], [-13.36, 100.64, 29.25], [-7.36, 100.64, 29.25], [-1.36, 100.64, 29.25], [4.64, 100.64, 29.25], [10.64, 100.64, 29.25], [16.64, 100.64, 29.25], [22.64, 100.64, 29.25], [28.64, 100.64, 29.25], [34.64, 100.64, 29.25], [40.64, 100.64, 29.25], [46.64, 100.64, 29.25], [52.64, 100.64, 29.25], [58.64, 100.64, 29.25], [64.64, 100.64, 29.25], [70.64, 100.64, 29.25], [76.64, 100.64, 29.25], [82.64, 100.64, 29.25], [88.64, 100.64, 29.25], [-85.36, -97.36, 35.25], [-43.36, -97.36, 35.25], [-37.36, -97.36, 35.25], [-31.36, -97.36, 35.25], [-25.36, -97.36, 35.25], [-19.36, -97.36, 35.25], [-13.36, -97.36, 35.25], [-7.36, -97.36, 35.25], [-1.36, -97.36, 35.25], [4.64, -97.36, 35.25], [10.64, -97.36, 35.25], [16.64, -97.36, 35.25], [22.64, -97.36, 35.25], [28.64, -97.36, 35.25], [34.64, -97.36, 35.25], [40.64, -97.36, 35.25], [46.64, -97.36, 35.25], [52.64, -97.36, 35.25], [58.64, -97.36, 35.25], [64.64, -97.36, 35.25], [70.64, -97.36, 35.25], [76.64, -97.36, 35.25], [82.64, -97.36, 35.25], [88.64, -97.36, 35.25], [-97.36, -91.36, 35.25], [-91.36, -91.36, 35.25], [-85.36, -91.36, 35.25], [-79.36, -91.36, 35.25], [-73.36, -91.36, 35.25], [-67.36, -91.36, 35.25], [-61.36, -91.36, 35.25], [-55.36, -91.36, 35.25], [-49.36, -91.36, 35.25], [-43.36, -91.36, 35.25], [-37.36, -91.36, 35.25], [-31.36, -91.36, 35.25], [-25.36, -91.36, 35.25], [-19.36, -91.36, 35.25], [-13.36, -91.36, 35.25], [-7.36, -91.36, 35.25], [-1.36, -91.36, 35.25], [4.64, -91.36, 35.25], [10.64, -91.36, 35.25], [16.64, -91.36, 35.25], [22.64, -91.36, 35.25], [28.64, -91.36, 35.25], [34.64, -91.36, 35.25], [40.64, -91.36, 35.25], [46.64, -91.36, 35.25], [52.64, -91.36, 35.25], [58.64, -91.36, 35.25], [64.64, -91.36, 35.25], [70.64, -91.36, 35.25], [76.64, -91.36, 35.25], [82.64, -91.36, 35.25], [88.64, -91.36, 35.25], [94.64, -91.36, 35.25], [-103.36, -85.36, 35.25], [-97.36, -85.36, 35.25], [-91.36, -85.36, 35.25], [-85.36, -85.36, 35.25], [-79.36, -85.36, 35.25], [-73.36, -85.36, 35.25], [-67.36, -85.36, 35.25], [-61.36, -85.36, 35.25], [-55.36, -85.36, 35.25], [-49.36, -85.36, 35.25], [-43.36, -85.36, 35.25], [-37.36, -85.36, 35.25], [-31.36, -85.36, 35.25], [-25.36, -85.36, 35.25], [-19.36, -85.36, 35.25], [-13.36, -85.36, 35.25], [-7.36, -85.36, 35.25], [-1.36, -85.36, 35.25], [4.64, -85.36, 35.25], [10.64, -85.36, 35.25], [16.64, -85.36, 35.25], [22.64, -85.36, 35.25], [28.64, -85.36, 35.25], [34.64, -85.36, 35.25], [40.64, -85.36, 35.25], [46.64, -85.36, 35.25], [52.64, -85.36, 35.25], [58.64, -85.36, 35.25], [64.64, -85.36, 35.25], [70.64, -85.36, 35.25], [76.64, -85.36, 35.25], [82.64, -85.36, 35.25], [88.64, -85.36, 35.25], [94.64, -85.36, 35.25], [-103.36, -79.36, 35.25], [-97.36, -79.36, 35.25], [-91.36, -79.36, 35.25], [-85.36, -79.36, 35.25], [-79.36, -79.36, 35.25], [-73.36, -79.36, 35.25], [-67.36, -79.36, 35.25], [-61.36, -79.36, 35.25], [-55.36, -79.36, 35.25], [-49.36, -79.36, 35.25], [-43.36, -79.36, 35.25], [-37.36, -79.36, 35.25], [-31.36, -79.36, 35.25], [-25.36, -79.36, 35.25], [-19.36, -79.36, 35.25], [-13.36, -79.36, 35.25], [-7.36, -79.36, 35.25], [-1.36, -79.36, 35.25], [4.64, -79.36, 35.25], [10.64, -79.36, 35.25], [16.64, -79.36, 35.25], [22.64, -79.36, 35.25], [28.64, -79.36, 35.25], [34.64, -79.36, 35.25], [40.64, -79.36, 35.25], [46.64, -79.36, 35.25], [52.64, -79.36, 35.25], [58.64, -79.36, 35.25], [64.64, -79.36, 35.25], [70.64, -79.36, 35.25], [76.64, -79.36, 35.25], [82.64, -79.36, 35.25], [88.64, -79.36, 35.25], [94.64, -79.36, 35.25], [-103.36, -73.36, 35.25], [-97.36, -73.36, 35.25], [-91.36, -73.36, 35.25], [-85.36, -73.36, 35.25], [-79.36, -73.36, 35.25], [-73.36, -73.36, 35.25], [-67.36, -73.36, 35.25], [-61.36, -73.36, 35.25], [-55.36, -73.36, 35.25], [-49.36, -73.36, 35.25], [-43.36, -73.36, 35.25], [-37.36, -73.36, 35.25], [-31.36, -73.36, 35.25], [-25.36, -73.36, 35.25], [-19.36, -73.36, 35.25], [-13.36, -73.36, 35.25], [-7.36, -73.36, 35.25], [-1.36, -73.36, 35.25], [4.64, -73.36, 35.25], [10.64, -73.36, 35.25], [16.64, -73.36, 35.25], [22.64, -73.36, 35.25], [28.64, -73.36, 35.25], [34.64, -73.36, 35.25], [40.64, -73.36, 35.25], [46.64, -73.36, 35.25], [52.64, -73.36, 35.25], [58.64, -73.36, 35.25], [64.64, -73.36, 35.25], [70.64, -73.36, 35.25], [76.64, -73.36, 35.25], [82.64, -73.36, 35.25], [88.64, -73.36, 35.25], [94.64, -73.36, 35.25], [-103.36, -67.36, 35.25], [-97.36, -67.36, 35.25], [-91.36, -67.36, 35.25], [-85.36, -67.36, 35.25], [-79.36, -67.36, 35.25], [-73.36, -67.36, 35.25], [-67.36, -67.36, 35.25], [-61.36, -67.36, 35.25], [-55.36, -67.36, 35.25], [-49.36, -67.36, 35.25], [-43.36, -67.36, 35.25], [-37.36, -67.36, 35.25], [-31.36, -67.36, 35.25], [-25.36, -67.36, 35.25], [-19.36, -67.36, 35.25], [-13.36, -67.36, 35.25], [-7.36, -67.36, 35.25], [-1.36, -67.36, 35.25], [4.64, -67.36, 35.25], [10.64, -67.36, 35.25], [16.64, -67.36, 35.25], [22.64, -67.36, 35.25], [28.64, -67.36, 35.25], [34.64, -67.36, 35.25], [40.64, -67.36, 35.25], [46.64, -67.36, 35.25], [52.64, -67.36, 35.25], [58.64, -67.36, 35.25], [64.64, -67.36, 35.25], [70.64, -67.36, 35.25], [76.64, -67.36, 35.25], [82.64, -67.36, 35.25], [88.64, -67.36, 35.25], [94.64, -67.36, 35.25], [100.64, -67.36, 35.25], [-103.36, -61.36, 35.25], [-97.36, -61.36, 35.25], [-91.36, -61.36, 35.25], [-85.36, -61.36, 35.25], [-79.36, -61.36, 35.25], [-73.36, -61.36, 35.25], [-67.36, -61.36, 35.25], [-61.36, -61.36, 35.25], [-55.36, -61.36, 35.25], [-49.36, -61.36, 35.25], [-43.36, -61.36, 35.25], [-37.36, -61.36, 35.25], [-31.36, -61.36, 35.25], [-25.36, -61.36, 35.25], [-19.36, -61.36, 35.25], [-13.36, -61.36, 35.25], [-7.36, -61.36, 35.25], [-1.36, -61.36, 35.25], [4.64, -61.36, 35.25], [10.64, -61.36, 35.25], [16.64, -61.36, 35.25], [22.64, -61.36, 35.25], [28.64, -61.36, 35.25], [34.64, -61.36, 35.25], [40.64, -61.36, 35.25], [46.64, -61.36, 35.25], [52.64, -61.36, 35.25], [58.64, -61.36, 35.25], [64.64, -61.36, 35.25], [70.64, -61.36, 35.25], [76.64, -61.36, 35.25], [82.64, -61.36, 35.25], [88.64, -61.36, 35.25], [94.64, -61.36, 35.25], [100.64, -61.36, 35.25], [-103.36, -55.36, 35.25], [-97.36, -55.36, 35.25], [-91.36, -55.36, 35.25], [-85.36, -55.36, 35.25], [-79.36, -55.36, 35.25], [-73.36, -55.36, 35.25], [-67.36, -55.36, 35.25], [-61.36, -55.36, 35.25], [-55.36, -55.36, 35.25], [-49.36, -55.36, 35.25], [-43.36, -55.36, 35.25], [-37.36, -55.36, 35.25], [-31.36, -55.36, 35.25], [-25.36, -55.36, 35.25], [-19.36, -55.36, 35.25], [-13.36, -55.36, 35.25], [-7.36, -55.36, 35.25], [-1.36, -55.36, 35.25], [4.64, -55.36, 35.25], [10.64, -55.36, 35.25], [16.64, -55.36, 35.25], [22.64, -55.36, 35.25], [28.64, -55.36, 35.25], [34.64, -55.36, 35.25], [40.64, -55.36, 35.25], [46.64, -55.36, 35.25], [52.64, -55.36, 35.25], [58.64, -55.36, 35.25], [64.64, -55.36, 35.25], [70.64, -55.36, 35.25], [76.64, -55.36, 35.25], [82.64, -55.36, 35.25], [88.64, -55.36, 35.25], [94.64, -55.36, 35.25], [100.64, -55.36, 35.25], [-103.36, -49.36, 35.25], [-97.36, -49.36, 35.25], [-91.36, -49.36, 35.25], [-85.36, -49.36, 35.25], [-79.36, -49.36, 35.25], [-73.36, -49.36, 35.25], [-67.36, -49.36, 35.25], [-61.36, -49.36, 35.25], [-55.36, -49.36, 35.25], [-49.36, -49.36, 35.25], [-43.36, -49.36, 35.25], [-37.36, -49.36, 35.25], [-31.36, -49.36, 35.25], [-25.36, -49.36, 35.25], [-19.36, -49.36, 35.25], [-13.36, -49.36, 35.25], [-7.36, -49.36, 35.25], [-1.36, -49.36, 35.25], [4.64, -49.36, 35.25], [10.64, -49.36, 35.25], [16.64, -49.36, 35.25], [22.64, -49.36, 35.25], [28.64, -49.36, 35.25], [34.64, -49.36, 35.25], [40.64, -49.36, 35.25], [46.64, -49.36, 35.25], [52.64, -49.36, 35.25], [58.64, -49.36, 35.25], [64.64, -49.36, 35.25], [70.64, -49.36, 35.25], [76.64, -49.36, 35.25], [82.64, -49.36, 35.25], [88.64, -49.36, 35.25], [94.64, -49.36, 35.25], [100.64, -49.36, 35.25], [-103.36, -43.36, 35.25], [-97.36, -43.36, 35.25], [-91.36, -43.36, 35.25], [-85.36, -43.36, 35.25], [-79.36, -43.36, 35.25], [-73.36, -43.36, 35.25], [-67.36, -43.36, 35.25], [-61.36, -43.36, 35.25], [-55.36, -43.36, 35.25], [-49.36, -43.36, 35.25], [-43.36, -43.36, 35.25], [-37.36, -43.36, 35.25], [-31.36, -43.36, 35.25], [-25.36, -43.36, 35.25], [-19.36, -43.36, 35.25], [-13.36, -43.36, 35.25], [-7.36, -43.36, 35.25], [-1.36, -43.36, 35.25], [4.64, -43.36, 35.25], [10.64, -43.36, 35.25], [16.64, -43.36, 35.25], [22.64, -43.36, 35.25], [28.64, -43.36, 35.25], [34.64, -43.36, 35.25], [40.64, -43.36, 35.25], [46.64, -43.36, 35.25], [52.64, -43.36, 35.25], [58.64, -43.36, 35.25], [64.64, -43.36, 35.25], [70.64, -43.36, 35.25], [76.64, -43.36, 35.25], [82.64, -43.36, 35.25], [88.64, -43.36, 35.25], [94.64, -43.36, 35.25], [100.64, -43.36, 35.25], [-103.36, -37.36, 35.25], [-97.36, -37.36, 35.25], [-91.36, -37.36, 35.25], [-85.36, -37.36, 35.25], [-79.36, -37.36, 35.25], [-73.36, -37.36, 35.25], [-67.36, -37.36, 35.25], [-61.36, -37.36, 35.25], [-55.36, -37.36, 35.25], [-49.36, -37.36, 35.25], [-43.36, -37.36, 35.25], [-37.36, -37.36, 35.25], [-31.36, -37.36, 35.25], [-25.36, -37.36, 35.25], [-19.36, -37.36, 35.25], [-13.36, -37.36, 35.25], [-7.36, -37.36, 35.25], [-1.36, -37.36, 35.25], [4.64, -37.36, 35.25], [10.64, -37.36, 35.25], [16.64, -37.36, 35.25], [22.64, -37.36, 35.25], [28.64, -37.36, 35.25], [34.64, -37.36, 35.25], [40.64, -37.36, 35.25], [46.64, -37.36, 35.25], [52.64, -37.36, 35.25], [58.64, -37.36, 35.25], [64.64, -37.36, 35.25], [70.64, -37.36, 35.25], [76.64, -37.36, 35.25], [82.64, -37.36, 35.25], [88.64, -37.36, 35.25], [94.64, -37.36, 35.25], [100.64, -37.36, 35.25], [-103.36, -31.36, 35.25], [-97.36, -31.36, 35.25], [-91.36, -31.36, 35.25], [-85.36, -31.36, 35.25], [-79.36, -31.36, 35.25], [-73.36, -31.36, 35.25], [-67.36, -31.36, 35.25], [-61.36, -31.36, 35.25], [-55.36, -31.36, 35.25], [-49.36, -31.36, 35.25], [-43.36, -31.36, 35.25], [-37.36, -31.36, 35.25], [-31.36, -31.36, 35.25], [-25.36, -31.36, 35.25], [-19.36, -31.36, 35.25], [-13.36, -31.36, 35.25], [-7.36, -31.36, 35.25], [-1.36, -31.36, 35.25], [4.64, -31.36, 35.25], [10.64, -31.36, 35.25], [16.64, -31.36, 35.25], [22.64, -31.36, 35.25], [28.64, -31.36, 35.25], [34.64, -31.36, 35.25], [40.64, -31.36, 35.25], [46.64, -31.36, 35.25], [52.64, -31.36, 35.25], [58.64, -31.36, 35.25], [64.64, -31.36, 35.25], [70.64, -31.36, 35.25], [76.64, -31.36, 35.25], [82.64, -31.36, 35.25], [88.64, -31.36, 35.25], [94.64, -31.36, 35.25], [100.64, -31.36, 35.25], [-103.36, -25.36, 35.25], [-97.36, -25.36, 35.25], [-91.36, -25.36, 35.25], [-85.36, -25.36, 35.25], [-79.36, -25.36, 35.25], [-73.36, -25.36, 35.25], [-67.36, -25.36, 35.25], [-61.36, -25.36, 35.25], [-55.36, -25.36, 35.25], [-49.36, -25.36, 35.25], [-43.36, -25.36, 35.25], [-37.36, -25.36, 35.25], [-31.36, -25.36, 35.25], [-25.36, -25.36, 35.25], [-19.36, -25.36, 35.25], [-13.36, -25.36, 35.25], [-7.36, -25.36, 35.25], [-1.36, -25.36, 35.25], [4.64, -25.36, 35.25], [10.64, -25.36, 35.25], [16.64, -25.36, 35.25], [22.64, -25.36, 35.25], [28.64, -25.36, 35.25], [34.64, -25.36, 35.25], [40.64, -25.36, 35.25], [46.64, -25.36, 35.25], [52.64, -25.36, 35.25], [58.64, -25.36, 35.25], [64.64, -25.36, 35.25], [70.64, -25.36, 35.25], [76.64, -25.36, 35.25], [82.64, -25.36, 35.25], [88.64, -25.36, 35.25], [94.64, -25.36, 35.25], [100.64, -25.36, 35.25], [-103.36, -19.36, 35.25], [-97.36, -19.36, 35.25], [-91.36, -19.36, 35.25], [-85.36, -19.36, 35.25], [-79.36, -19.36, 35.25], [-73.36, -19.36, 35.25], [-67.36, -19.36, 35.25], [-61.36, -19.36, 35.25], [-55.36, -19.36, 35.25], [-49.36, -19.36, 35.25], [-43.36, -19.36, 35.25], [-37.36, -19.36, 35.25], [-31.36, -19.36, 35.25], [-25.36, -19.36, 35.25], [-19.36, -19.36, 35.25], [-13.36, -19.36, 35.25], [-7.36, -19.36, 35.25], [-1.36, -19.36, 35.25], [4.64, -19.36, 35.25], [10.64, -19.36, 35.25], [16.64, -19.36, 35.25], [22.64, -19.36, 35.25], [28.64, -19.36, 35.25], [34.64, -19.36, 35.25], [40.64, -19.36, 35.25], [46.64, -19.36, 35.25], [52.64, -19.36, 35.25], [58.64, -19.36, 35.25], [64.64, -19.36, 35.25], [70.64, -19.36, 35.25], [76.64, -19.36, 35.25], [82.64, -19.36, 35.25], [88.64, -19.36, 35.25], [94.64, -19.36, 35.25], [100.64, -19.36, 35.25], [-103.36, -13.36, 35.25], [-97.36, -13.36, 35.25], [-91.36, -13.36, 35.25], [-85.36, -13.36, 35.25], [-79.36, -13.36, 35.25], [-73.36, -13.36, 35.25], [-67.36, -13.36, 35.25], [-61.36, -13.36, 35.25], [-55.36, -13.36, 35.25], [-49.36, -13.36, 35.25], [-43.36, -13.36, 35.25], [-37.36, -13.36, 35.25], [-31.36, -13.36, 35.25], [-25.36, -13.36, 35.25], [-19.36, -13.36, 35.25], [-13.36, -13.36, 35.25], [-7.36, -13.36, 35.25], [-1.36, -13.36, 35.25], [4.64, -13.36, 35.25], [10.64, -13.36, 35.25], [16.64, -13.36, 35.25], [22.64, -13.36, 35.25], [28.64, -13.36, 35.25], [34.64, -13.36, 35.25], [40.64, -13.36, 35.25], [46.64, -13.36, 35.25], [52.64, -13.36, 35.25], [58.64, -13.36, 35.25], [64.64, -13.36, 35.25], [70.64, -13.36, 35.25], [76.64, -13.36, 35.25], [82.64, -13.36, 35.25], [88.64, -13.36, 35.25], [94.64, -13.36, 35.25], [100.64, -13.36, 35.25], [-103.36, -7.36, 35.25], [-97.36, -7.36, 35.25], [-91.36, -7.36, 35.25], [-85.36, -7.36, 35.25], [-79.36, -7.36, 35.25], [-73.36, -7.36, 35.25], [-67.36, -7.36, 35.25], [-61.36, -7.36, 35.25], [-55.36, -7.36, 35.25], [-49.36, -7.36, 35.25], [-43.36, -7.36, 35.25], [-37.36, -7.36, 35.25], [-31.36, -7.36, 35.25], [-25.36, -7.36, 35.25], [-19.36, -7.36, 35.25], [-13.36, -7.36, 35.25], [-7.36, -7.36, 35.25], [-1.36, -7.36, 35.25], [4.64, -7.36, 35.25], [10.64, -7.36, 35.25], [16.64, -7.36, 35.25], [22.64, -7.36, 35.25], [28.64, -7.36, 35.25], [34.64, -7.36, 35.25], [40.64, -7.36, 35.25], [46.64, -7.36, 35.25], [52.64, -7.36, 35.25], [58.64, -7.36, 35.25], [64.64, -7.36, 35.25], [70.64, -7.36, 35.25], [76.64, -7.36, 35.25], [82.64, -7.36, 35.25], [88.64, -7.36, 35.25], [94.64, -7.36, 35.25], [100.64, -7.36, 35.25], [-97.36, -1.36, 35.25], [-91.36, -1.36, 35.25], [-85.36, -1.36, 35.25], [-79.36, -1.36, 35.25], [-73.36, -1.36, 35.25], [-67.36, -1.36, 35.25], [-61.36, -1.36, 35.25], [-55.36, -1.36, 35.25], [-49.36, -1.36, 35.25], [-43.36, -1.36, 35.25], [-37.36, -1.36, 35.25], [-31.36, -1.36, 35.25], [-25.36, -1.36, 35.25], [-19.36, -1.36, 35.25], [-13.36, -1.36, 35.25], [-7.36, -1.36, 35.25], [-1.36, -1.36, 35.25], [4.64, -1.36, 35.25], [10.64, -1.36, 35.25], [16.64, -1.36, 35.25], [22.64, -1.36, 35.25], [28.64, -1.36, 35.25], [34.64, -1.36, 35.25], [40.64, -1.36, 35.25], [46.64, -1.36, 35.25], [52.64, -1.36, 35.25], [58.64, -1.36, 35.25], [64.64, -1.36, 35.25], [70.64, -1.36, 35.25], [76.64, -1.36, 35.25], [82.64, -1.36, 35.25], [88.64, -1.36, 35.25], [94.64, -1.36, 35.25], [100.64, -1.36, 35.25], [-97.36, 4.64, 35.25], [-91.36, 4.64, 35.25], [-85.36, 4.64, 35.25], [-79.36, 4.64, 35.25], [-73.36, 4.64, 35.25], [-67.36, 4.64, 35.25], [-61.36, 4.64, 35.25], [-55.36, 4.64, 35.25], [-49.36, 4.64, 35.25], [-43.36, 4.64, 35.25], [-37.36, 4.64, 35.25], [-31.36, 4.64, 35.25], [-25.36, 4.64, 35.25], [-19.36, 4.64, 35.25], [-13.36, 4.64, 35.25], [-7.36, 4.64, 35.25], [-1.36, 4.64, 35.25], [4.64, 4.64, 35.25], [10.64, 4.64, 35.25], [16.64, 4.64, 35.25], [22.64, 4.64, 35.25], [28.64, 4.64, 35.25], [34.64, 4.64, 35.25], [40.64, 4.64, 35.25], [46.64, 4.64, 35.25], [52.64, 4.64, 35.25], [58.64, 4.64, 35.25], [64.64, 4.64, 35.25], [70.64, 4.64, 35.25], [76.64, 4.64, 35.25], [82.64, 4.64, 35.25], [88.64, 4.64, 35.25], [94.64, 4.64, 35.25], [100.64, 4.64, 35.25], [-97.36, 10.64, 35.25], [-91.36, 10.64, 35.25], [-85.36, 10.64, 35.25], [-79.36, 10.64, 35.25], [-73.36, 10.64, 35.25], [-67.36, 10.64, 35.25], [-61.36, 10.64, 35.25], [-55.36, 10.64, 35.25], [-49.36, 10.64, 35.25], [-43.36, 10.64, 35.25], [-37.36, 10.64, 35.25], [-31.36, 10.64, 35.25], [-25.36, 10.64, 35.25], [-19.36, 10.64, 35.25], [-13.36, 10.64, 35.25], [-7.36, 10.64, 35.25], [-1.36, 10.64, 35.25], [4.64, 10.64, 35.25], [10.64, 10.64, 35.25], [16.64, 10.64, 35.25], [22.64, 10.64, 35.25], [28.64, 10.64, 35.25], [34.64, 10.64, 35.25], [40.64, 10.64, 35.25], [46.64, 10.64, 35.25], [52.64, 10.64, 35.25], [58.64, 10.64, 35.25], [64.64, 10.64, 35.25], [70.64, 10.64, 35.25], [76.64, 10.64, 35.25], [82.64, 10.64, 35.25], [88.64, 10.64, 35.25], [94.64, 10.64, 35.25], [100.64, 10.64, 35.25], [-97.36, 16.64, 35.25], [-91.36, 16.64, 35.25], [-85.36, 16.64, 35.25], [-79.36, 16.64, 35.25], [-73.36, 16.64, 35.25], [-67.36, 16.64, 35.25], [-61.36, 16.64, 35.25], [-55.36, 16.64, 35.25], [-49.36, 16.64, 35.25], [-43.36, 16.64, 35.25], [-37.36, 16.64, 35.25], [-31.36, 16.64, 35.25], [-25.36, 16.64, 35.25], [-19.36, 16.64, 35.25], [-13.36, 16.64, 35.25], [-7.36, 16.64, 35.25], [-1.36, 16.64, 35.25], [4.64, 16.64, 35.25], [10.64, 16.64, 35.25], [16.64, 16.64, 35.25], [22.64, 16.64, 35.25], [28.64, 16.64, 35.25], [34.64, 16.64, 35.25], [40.64, 16.64, 35.25], [46.64, 16.64, 35.25], [52.64, 16.64, 35.25], [58.64, 16.64, 35.25], [64.64, 16.64, 35.25], [70.64, 16.64, 35.25], [76.64, 16.64, 35.25], [82.64, 16.64, 35.25], [88.64, 16.64, 35.25], [94.64, 16.64, 35.25], [100.64, 16.64, 35.25], [-97.36, 22.64, 35.25], [-91.36, 22.64, 35.25], [-85.36, 22.64, 35.25], [-79.36, 22.64, 35.25], [-73.36, 22.64, 35.25], [-67.36, 22.64, 35.25], [-61.36, 22.64, 35.25], [-55.36, 22.64, 35.25], [-49.36, 22.64, 35.25], [-43.36, 22.64, 35.25], [-37.36, 22.64, 35.25], [-31.36, 22.64, 35.25], [-25.36, 22.64, 35.25], [-19.36, 22.64, 35.25], [-13.36, 22.64, 35.25], [-7.36, 22.64, 35.25], [-1.36, 22.64, 35.25], [4.64, 22.64, 35.25], [10.64, 22.64, 35.25], [16.64, 22.64, 35.25], [22.64, 22.64, 35.25], [28.64, 22.64, 35.25], [34.64, 22.64, 35.25], [40.64, 22.64, 35.25], [46.64, 22.64, 35.25], [52.64, 22.64, 35.25], [58.64, 22.64, 35.25], [64.64, 22.64, 35.25], [70.64, 22.64, 35.25], [76.64, 22.64, 35.25], [82.64, 22.64, 35.25], [88.64, 22.64, 35.25], [94.64, 22.64, 35.25], [100.64, 22.64, 35.25], [-97.36, 28.64, 35.25], [-91.36, 28.64, 35.25], [-85.36, 28.64, 35.25], [-79.36, 28.64, 35.25], [-73.36, 28.64, 35.25], [-67.36, 28.64, 35.25], [-61.36, 28.64, 35.25], [-55.36, 28.64, 35.25], [-49.36, 28.64, 35.25], [-43.36, 28.64, 35.25], [-37.36, 28.64, 35.25], [-31.36, 28.64, 35.25], [-25.36, 28.64, 35.25], [-19.36, 28.64, 35.25], [-13.36, 28.64, 35.25], [-7.36, 28.64, 35.25], [-1.36, 28.64, 35.25], [4.64, 28.64, 35.25], [10.64, 28.64, 35.25], [16.64, 28.64, 35.25], [22.64, 28.64, 35.25], [28.64, 28.64, 35.25], [34.64, 28.64, 35.25], [40.64, 28.64, 35.25], [46.64, 28.64, 35.25], [52.64, 28.64, 35.25], [58.64, 28.64, 35.25], [64.64, 28.64, 35.25], [70.64, 28.64, 35.25], [76.64, 28.64, 35.25], [82.64, 28.64, 35.25], [88.64, 28.64, 35.25], [94.64, 28.64, 35.25], [100.64, 28.64, 35.25], [-97.36, 34.64, 35.25], [-91.36, 34.64, 35.25], [-85.36, 34.64, 35.25], [-79.36, 34.64, 35.25], [-73.36, 34.64, 35.25], [-67.36, 34.64, 35.25], [-61.36, 34.64, 35.25], [-55.36, 34.64, 35.25], [-49.36, 34.64, 35.25], [-43.36, 34.64, 35.25], [-37.36, 34.64, 35.25], [-31.36, 34.64, 35.25], [-25.36, 34.64, 35.25], [-19.36, 34.64, 35.25], [-13.36, 34.64, 35.25], [-7.36, 34.64, 35.25], [-1.36, 34.64, 35.25], [4.64, 34.64, 35.25], [10.64, 34.64, 35.25], [16.64, 34.64, 35.25], [22.64, 34.64, 35.25], [28.64, 34.64, 35.25], [34.64, 34.64, 35.25], [40.64, 34.64, 35.25], [46.64, 34.64, 35.25], [52.64, 34.64, 35.25], [58.64, 34.64, 35.25], [64.64, 34.64, 35.25], [70.64, 34.64, 35.25], [76.64, 34.64, 35.25], [82.64, 34.64, 35.25], [88.64, 34.64, 35.25], [94.64, 34.64, 35.25], [100.64, 34.64, 35.25], [-97.36, 40.64, 35.25], [-91.36, 40.64, 35.25], [-85.36, 40.64, 35.25], [-79.36, 40.64, 35.25], [-73.36, 40.64, 35.25], [-67.36, 40.64, 35.25], [-61.36, 40.64, 35.25], [-55.36, 40.64, 35.25], [-49.36, 40.64, 35.25], [-43.36, 40.64, 35.25], [-37.36, 40.64, 35.25], [-31.36, 40.64, 35.25], [-25.36, 40.64, 35.25], [-19.36, 40.64, 35.25], [-13.36, 40.64, 35.25], [-7.36, 40.64, 35.25], [-1.36, 40.64, 35.25], [4.64, 40.64, 35.25], [10.64, 40.64, 35.25], [16.64, 40.64, 35.25], [22.64, 40.64, 35.25], [28.64, 40.64, 35.25], [34.64, 40.64, 35.25], [40.64, 40.64, 35.25], [46.64, 40.64, 35.25], [52.64, 40.64, 35.25], [58.64, 40.64, 35.25], [64.64, 40.64, 35.25], [70.64, 40.64, 35.25], [76.64, 40.64, 35.25], [82.64, 40.64, 35.25], [88.64, 40.64, 35.25], [94.64, 40.64, 35.25], [100.64, 40.64, 35.25], [-97.36, 46.64, 35.25], [-91.36, 46.64, 35.25], [-85.36, 46.64, 35.25], [-79.36, 46.64, 35.25], [-73.36, 46.64, 35.25], [-67.36, 46.64, 35.25], [-61.36, 46.64, 35.25], [-55.36, 46.64, 35.25], [-49.36, 46.64, 35.25], [-43.36, 46.64, 35.25], [-37.36, 46.64, 35.25], [-31.36, 46.64, 35.25], [-25.36, 46.64, 35.25], [-19.36, 46.64, 35.25], [-13.36, 46.64, 35.25], [-7.36, 46.64, 35.25], [-1.36, 46.64, 35.25], [4.64, 46.64, 35.25], [10.64, 46.64, 35.25], [16.64, 46.64, 35.25], [22.64, 46.64, 35.25], [28.64, 46.64, 35.25], [34.64, 46.64, 35.25], [40.64, 46.64, 35.25], [46.64, 46.64, 35.25], [52.64, 46.64, 35.25], [58.64, 46.64, 35.25], [64.64, 46.64, 35.25], [70.64, 46.64, 35.25], [76.64, 46.64, 35.25], [82.64, 46.64, 35.25], [88.64, 46.64, 35.25], [94.64, 46.64, 35.25], [100.64, 46.64, 35.25], [-97.36, 52.64, 35.25], [-91.36, 52.64, 35.25], [-85.36, 52.64, 35.25], [-79.36, 52.64, 35.25], [-73.36, 52.64, 35.25], [-67.36, 52.64, 35.25], [-61.36, 52.64, 35.25], [-55.36, 52.64, 35.25], [-49.36, 52.64, 35.25], [-43.36, 52.64, 35.25], [-37.36, 52.64, 35.25], [-31.36, 52.64, 35.25], [-25.36, 52.64, 35.25], [-19.36, 52.64, 35.25], [-13.36, 52.64, 35.25], [-7.36, 52.64, 35.25], [-1.36, 52.64, 35.25], [4.64, 52.64, 35.25], [10.64, 52.64, 35.25], [16.64, 52.64, 35.25], [22.64, 52.64, 35.25], [28.64, 52.64, 35.25], [34.64, 52.64, 35.25], [40.64, 52.64, 35.25], [46.64, 52.64, 35.25], [52.64, 52.64, 35.25], [58.64, 52.64, 35.25], [64.64, 52.64, 35.25], [70.64, 52.64, 35.25], [76.64, 52.64, 35.25], [82.64, 52.64, 35.25], [88.64, 52.64, 35.25], [94.64, 52.64, 35.25], [100.64, 52.64, 35.25], [-97.36, 58.64, 35.25], [-91.36, 58.64, 35.25], [-85.36, 58.64, 35.25], [-79.36, 58.64, 35.25], [-73.36, 58.64, 35.25], [-67.36, 58.64, 35.25], [-61.36, 58.64, 35.25], [-55.36, 58.64, 35.25], [-49.36, 58.64, 35.25], [-43.36, 58.64, 35.25], [-37.36, 58.64, 35.25], [-31.36, 58.64, 35.25], [-25.36, 58.64, 35.25], [-19.36, 58.64, 35.25], [-13.36, 58.64, 35.25], [-7.36, 58.64, 35.25], [-1.36, 58.64, 35.25], [4.64, 58.64, 35.25], [10.64, 58.64, 35.25], [16.64, 58.64, 35.25], [22.64, 58.64, 35.25], [28.64, 58.64, 35.25], [34.64, 58.64, 35.25], [40.64, 58.64, 35.25], [46.64, 58.64, 35.25], [52.64, 58.64, 35.25], [58.64, 58.64, 35.25], [64.64, 58.64, 35.25], [70.64, 58.64, 35.25], [76.64, 58.64, 35.25], [82.64, 58.64, 35.25], [88.64, 58.64, 35.25], [94.64, 58.64, 35.25], [100.64, 58.64, 35.25], [-97.36, 64.64, 35.25], [-91.36, 64.64, 35.25], [-85.36, 64.64, 35.25], [-79.36, 64.64, 35.25], [-73.36, 64.64, 35.25], [-67.36, 64.64, 35.25], [-61.36, 64.64, 35.25], [-55.36, 64.64, 35.25], [-49.36, 64.64, 35.25], [-43.36, 64.64, 35.25], [-37.36, 64.64, 35.25], [-31.36, 64.64, 35.25], [-25.36, 64.64, 35.25], [-19.36, 64.64, 35.25], [-13.36, 64.64, 35.25], [-7.36, 64.64, 35.25], [-1.36, 64.64, 35.25], [4.64, 64.64, 35.25], [10.64, 64.64, 35.25], [16.64, 64.64, 35.25], [22.64, 64.64, 35.25], [28.64, 64.64, 35.25], [34.64, 64.64, 35.25], [40.64, 64.64, 35.25], [46.64, 64.64, 35.25], [52.64, 64.64, 35.25], [58.64, 64.64, 35.25], [64.64, 64.64, 35.25], [70.64, 64.64, 35.25], [76.64, 64.64, 35.25], [82.64, 64.64, 35.25], [88.64, 64.64, 35.25], [94.64, 64.64, 35.25], [100.64, 64.64, 35.25], [-97.36, 70.64, 35.25], [-91.36, 70.64, 35.25], [-85.36, 70.64, 35.25], [-79.36, 70.64, 35.25], [-73.36, 70.64, 35.25], [-67.36, 70.64, 35.25], [-61.36, 70.64, 35.25], [-55.36, 70.64, 35.25], [-49.36, 70.64, 35.25], [-43.36, 70.64, 35.25], [-37.36, 70.64, 35.25], [-31.36, 70.64, 35.25], [-25.36, 70.64, 35.25], [-19.36, 70.64, 35.25], [-13.36, 70.64, 35.25], [-7.36, 70.64, 35.25], [-1.36, 70.64, 35.25], [4.64, 70.64, 35.25], [10.64, 70.64, 35.25], [16.64, 70.64, 35.25], [22.64, 70.64, 35.25], [28.64, 70.64, 35.25], [34.64, 70.64, 35.25], [40.64, 70.64, 35.25], [46.64, 70.64, 35.25], [52.64, 70.64, 35.25], [58.64, 70.64, 35.25], [64.64, 70.64, 35.25], [70.64, 70.64, 35.25], [76.64, 70.64, 35.25], [82.64, 70.64, 35.25], [88.64, 70.64, 35.25], [94.64, 70.64, 35.25], [100.64, 70.64, 35.25], [-97.36, 76.64, 35.25], [-91.36, 76.64, 35.25], [-85.36, 76.64, 35.25], [-79.36, 76.64, 35.25], [-73.36, 76.64, 35.25], [-67.36, 76.64, 35.25], [-61.36, 76.64, 35.25], [-55.36, 76.64, 35.25], [-49.36, 76.64, 35.25], [-43.36, 76.64, 35.25], [-37.36, 76.64, 35.25], [-31.36, 76.64, 35.25], [-25.36, 76.64, 35.25], [-19.36, 76.64, 35.25], [-13.36, 76.64, 35.25], [-7.36, 76.64, 35.25], [-1.36, 76.64, 35.25], [4.64, 76.64, 35.25], [10.64, 76.64, 35.25], [16.64, 76.64, 35.25], [22.64, 76.64, 35.25], [28.64, 76.64, 35.25], [34.64, 76.64, 35.25], [40.64, 76.64, 35.25], [46.64, 76.64, 35.25], [52.64, 76.64, 35.25], [58.64, 76.64, 35.25], [64.64, 76.64, 35.25], [70.64, 76.64, 35.25], [76.64, 76.64, 35.25], [82.64, 76.64, 35.25], [88.64, 76.64, 35.25], [94.64, 76.64, 35.25], [100.64, 76.64, 35.25], [-97.36, 82.64, 35.25], [-91.36, 82.64, 35.25], [-85.36, 82.64, 35.25], [-79.36, 82.64, 35.25], [-73.36, 82.64, 35.25], [-67.36, 82.64, 35.25], [-61.36, 82.64, 35.25], [-55.36, 82.64, 35.25], [-49.36, 82.64, 35.25], [-43.36, 82.64, 35.25], [-37.36, 82.64, 35.25], [-31.36, 82.64, 35.25], [-25.36, 82.64, 35.25], [-19.36, 82.64, 35.25], [-13.36, 82.64, 35.25], [-7.36, 82.64, 35.25], [-1.36, 82.64, 35.25], [4.64, 82.64, 35.25], [10.64, 82.64, 35.25], [16.64, 82.64, 35.25], [22.64, 82.64, 35.25], [28.64, 82.64, 35.25], [34.64, 82.64, 35.25], [40.64, 82.64, 35.25], [46.64, 82.64, 35.25], [52.64, 82.64, 35.25], [58.64, 82.64, 35.25], [64.64, 82.64, 35.25], [70.64, 82.64, 35.25], [76.64, 82.64, 35.25], [82.64, 82.64, 35.25], [88.64, 82.64, 35.25], [94.64, 82.64, 35.25], [100.64, 82.64, 35.25], [-97.36, 88.64, 35.25], [-91.36, 88.64, 35.25], [-85.36, 88.64, 35.25], [-79.36, 88.64, 35.25], [-73.36, 88.64, 35.25], [-67.36, 88.64, 35.25], [-61.36, 88.64, 35.25], [-55.36, 88.64, 35.25], [-49.36, 88.64, 35.25], [-43.36, 88.64, 35.25], [-37.36, 88.64, 35.25], [-31.36, 88.64, 35.25], [-25.36, 88.64, 35.25], [-19.36, 88.64, 35.25], [-13.36, 88.64, 35.25], [-7.36, 88.64, 35.25], [-1.36, 88.64, 35.25], [4.64, 88.64, 35.25], [10.64, 88.64, 35.25], [16.64, 88.64, 35.25], [22.64, 88.64, 35.25], [28.64, 88.64, 35.25], [34.64, 88.64, 35.25], [40.64, 88.64, 35.25], [46.64, 88.64, 35.25], [52.64, 88.64, 35.25], [58.64, 88.64, 35.25], [64.64, 88.64, 35.25], [70.64, 88.64, 35.25], [76.64, 88.64, 35.25], [82.64, 88.64, 35.25], [88.64, 88.64, 35.25], [94.64, 88.64, 35.25], [100.64, 88.64, 35.25], [-91.36, 94.64, 35.25], [-85.36, 94.64, 35.25], [-79.36, 94.64, 35.25], [-73.36, 94.64, 35.25], [-67.36, 94.64, 35.25], [-61.36, 94.64, 35.25], [-55.36, 94.64, 35.25], [-49.36, 94.64, 35.25], [-43.36, 94.64, 35.25], [-37.36, 94.64, 35.25], [-31.36, 94.64, 35.25], [-25.36, 94.64, 35.25], [-19.36, 94.64, 35.25], [-13.36, 94.64, 35.25], [-7.36, 94.64, 35.25], [-1.36, 94.64, 35.25], [4.64, 94.64, 35.25], [10.64, 94.64, 35.25], [16.64, 94.64, 35.25], [22.64, 94.64, 35.25], [28.64, 94.64, 35.25], [34.64, 94.64, 35.25], [40.64, 94.64, 35.25], [46.64, 94.64, 35.25], [52.64, 94.64, 35.25], [58.64, 94.64, 35.25], [64.64, 94.64, 35.25], [70.64, 94.64, 35.25], [76.64, 94.64, 35.25], [82.64, 94.64, 35.25], [88.64, 94.64, 35.25], [-91.36, 100.64, 35.25], [-85.36, 100.64, 35.25], [-79.36, 100.64, 35.25], [-73.36, 100.64, 35.25], [-67.36, 100.64, 35.25], [-61.36, 100.64, 35.25], [-55.36, 100.64, 35.25], [-49.36, 100.64, 35.25], [-43.36, 100.64, 35.25], [-37.36, 100.64, 35.25], [-31.36, 100.64, 35.25], [-25.36, 100.64, 35.25], [-19.36, 100.64, 35.25], [-13.36, 100.64, 35.25], [-7.36, 100.64, 35.25], [-1.36, 100.64, 35.25], [4.64, 100.64, 35.25], [10.64, 100.64, 35.25], [16.64, 100.64, 35.25], [22.64, 100.64, 35.25], [28.64, 100.64, 35.25], [34.64, 100.64, 35.25], [40.64, 100.64, 35.25], [46.64, 100.64, 35.25], [52.64, 100.64, 35.25], [58.64, 100.64, 35.25], [64.64, 100.64, 35.25], [70.64, 100.64, 35.25], [76.64, 100.64, 35.25], [-43.36, -97.36, 41.25], [-37.36, -97.36, 41.25], [-31.36, -97.36, 41.25], [-25.36, -97.36, 41.25], [-19.36, -97.36, 41.25], [-13.36, -97.36, 41.25], [-7.36, -97.36, 41.25], [-1.36, -97.36, 41.25], [4.64, -97.36, 41.25], [10.64, -97.36, 41.25], [16.64, -97.36, 41.25], [22.64, -97.36, 41.25], [28.64, -97.36, 41.25], [34.64, -97.36, 41.25], [40.64, -97.36, 41.25], [46.64, -97.36, 41.25], [52.64, -97.36, 41.25], [58.64, -97.36, 41.25], [64.64, -97.36, 41.25], [70.64, -97.36, 41.25], [76.64, -97.36, 41.25], [82.64, -97.36, 41.25], [88.64, -97.36, 41.25], [-91.36, -91.36, 41.25], [-85.36, -91.36, 41.25], [-79.36, -91.36, 41.25], [-73.36, -91.36, 41.25], [-67.36, -91.36, 41.25], [-61.36, -91.36, 41.25], [-55.36, -91.36, 41.25], [-49.36, -91.36, 41.25], [-43.36, -91.36, 41.25], [-37.36, -91.36, 41.25], [-31.36, -91.36, 41.25], [-25.36, -91.36, 41.25], [-19.36, -91.36, 41.25], [-13.36, -91.36, 41.25], [-7.36, -91.36, 41.25], [-1.36, -91.36, 41.25], [4.64, -91.36, 41.25], [10.64, -91.36, 41.25], [16.64, -91.36, 41.25], [22.64, -91.36, 41.25], [28.64, -91.36, 41.25], [34.64, -91.36, 41.25], [40.64, -91.36, 41.25], [46.64, -91.36, 41.25], [52.64, -91.36, 41.25], [58.64, -91.36, 41.25], [64.64, -91.36, 41.25], [70.64, -91.36, 41.25], [76.64, -91.36, 41.25], [82.64, -91.36, 41.25], [88.64, -91.36, 41.25], [94.64, -91.36, 41.25], [-97.36, -85.36, 41.25], [-91.36, -85.36, 41.25], [-85.36, -85.36, 41.25], [-79.36, -85.36, 41.25], [-73.36, -85.36, 41.25], [-67.36, -85.36, 41.25], [-61.36, -85.36, 41.25], [-55.36, -85.36, 41.25], [-49.36, -85.36, 41.25], [-43.36, -85.36, 41.25], [-37.36, -85.36, 41.25], [-31.36, -85.36, 41.25], [-25.36, -85.36, 41.25], [-19.36, -85.36, 41.25], [-13.36, -85.36, 41.25], [-7.36, -85.36, 41.25], [-1.36, -85.36, 41.25], [4.64, -85.36, 41.25], [10.64, -85.36, 41.25], [16.64, -85.36, 41.25], [22.64, -85.36, 41.25], [28.64, -85.36, 41.25], [34.64, -85.36, 41.25], [40.64, -85.36, 41.25], [46.64, -85.36, 41.25], [52.64, -85.36, 41.25], [58.64, -85.36, 41.25], [64.64, -85.36, 41.25], [70.64, -85.36, 41.25], [76.64, -85.36, 41.25], [82.64, -85.36, 41.25], [88.64, -85.36, 41.25], [94.64, -85.36, 41.25], [-103.36, -79.36, 41.25], [-97.36, -79.36, 41.25], [-91.36, -79.36, 41.25], [-85.36, -79.36, 41.25], [-79.36, -79.36, 41.25], [-73.36, -79.36, 41.25], [-67.36, -79.36, 41.25], [-61.36, -79.36, 41.25], [-55.36, -79.36, 41.25], [-49.36, -79.36, 41.25], [-43.36, -79.36, 41.25], [-37.36, -79.36, 41.25], [-31.36, -79.36, 41.25], [-25.36, -79.36, 41.25], [-19.36, -79.36, 41.25], [-13.36, -79.36, 41.25], [-7.36, -79.36, 41.25], [-1.36, -79.36, 41.25], [4.64, -79.36, 41.25], [10.64, -79.36, 41.25], [16.64, -79.36, 41.25], [22.64, -79.36, 41.25], [28.64, -79.36, 41.25], [34.64, -79.36, 41.25], [40.64, -79.36, 41.25], [46.64, -79.36, 41.25], [52.64, -79.36, 41.25], [58.64, -79.36, 41.25], [64.64, -79.36, 41.25], [70.64, -79.36, 41.25], [76.64, -79.36, 41.25], [82.64, -79.36, 41.25], [88.64, -79.36, 41.25], [94.64, -79.36, 41.25], [-103.36, -73.36, 41.25], [-97.36, -73.36, 41.25], [-91.36, -73.36, 41.25], [-85.36, -73.36, 41.25], [-79.36, -73.36, 41.25], [-73.36, -73.36, 41.25], [-67.36, -73.36, 41.25], [-61.36, -73.36, 41.25], [-55.36, -73.36, 41.25], [-49.36, -73.36, 41.25], [-43.36, -73.36, 41.25], [-37.36, -73.36, 41.25], [-31.36, -73.36, 41.25], [-25.36, -73.36, 41.25], [-19.36, -73.36, 41.25], [-13.36, -73.36, 41.25], [-7.36, -73.36, 41.25], [-1.36, -73.36, 41.25], [4.64, -73.36, 41.25], [10.64, -73.36, 41.25], [16.64, -73.36, 41.25], [22.64, -73.36, 41.25], [28.64, -73.36, 41.25], [34.64, -73.36, 41.25], [40.64, -73.36, 41.25], [46.64, -73.36, 41.25], [52.64, -73.36, 41.25], [58.64, -73.36, 41.25], [64.64, -73.36, 41.25], [70.64, -73.36, 41.25], [76.64, -73.36, 41.25], [82.64, -73.36, 41.25], [88.64, -73.36, 41.25], [94.64, -73.36, 41.25], [-103.36, -67.36, 41.25], [-97.36, -67.36, 41.25], [-91.36, -67.36, 41.25], [-85.36, -67.36, 41.25], [-79.36, -67.36, 41.25], [-73.36, -67.36, 41.25], [-67.36, -67.36, 41.25], [-61.36, -67.36, 41.25], [-55.36, -67.36, 41.25], [-49.36, -67.36, 41.25], [-43.36, -67.36, 41.25], [-37.36, -67.36, 41.25], [-31.36, -67.36, 41.25], [-25.36, -67.36, 41.25], [-19.36, -67.36, 41.25], [-13.36, -67.36, 41.25], [-7.36, -67.36, 41.25], [-1.36, -67.36, 41.25], [4.64, -67.36, 41.25], [10.64, -67.36, 41.25], [16.64, -67.36, 41.25], [22.64, -67.36, 41.25], [28.64, -67.36, 41.25], [34.64, -67.36, 41.25], [40.64, -67.36, 41.25], [46.64, -67.36, 41.25], [52.64, -67.36, 41.25], [58.64, -67.36, 41.25], [64.64, -67.36, 41.25], [70.64, -67.36, 41.25], [76.64, -67.36, 41.25], [82.64, -67.36, 41.25], [88.64, -67.36, 41.25], [94.64, -67.36, 41.25], [100.64, -67.36, 41.25], [-103.36, -61.36, 41.25], [-97.36, -61.36, 41.25], [-91.36, -61.36, 41.25], [-85.36, -61.36, 41.25], [-79.36, -61.36, 41.25], [-73.36, -61.36, 41.25], [-67.36, -61.36, 41.25], [-61.36, -61.36, 41.25], [-55.36, -61.36, 41.25], [-49.36, -61.36, 41.25], [-43.36, -61.36, 41.25], [-37.36, -61.36, 41.25], [-31.36, -61.36, 41.25], [-25.36, -61.36, 41.25], [-19.36, -61.36, 41.25], [-13.36, -61.36, 41.25], [-7.36, -61.36, 41.25], [-1.36, -61.36, 41.25], [4.64, -61.36, 41.25], [10.64, -61.36, 41.25], [16.64, -61.36, 41.25], [22.64, -61.36, 41.25], [28.64, -61.36, 41.25], [34.64, -61.36, 41.25], [40.64, -61.36, 41.25], [46.64, -61.36, 41.25], [52.64, -61.36, 41.25], [58.64, -61.36, 41.25], [64.64, -61.36, 41.25], [70.64, -61.36, 41.25], [76.64, -61.36, 41.25], [82.64, -61.36, 41.25], [88.64, -61.36, 41.25], [94.64, -61.36, 41.25], [100.64, -61.36, 41.25], [-103.36, -55.36, 41.25], [-97.36, -55.36, 41.25], [-91.36, -55.36, 41.25], [-85.36, -55.36, 41.25], [-79.36, -55.36, 41.25], [-73.36, -55.36, 41.25], [-67.36, -55.36, 41.25], [-61.36, -55.36, 41.25], [-55.36, -55.36, 41.25], [-49.36, -55.36, 41.25], [-43.36, -55.36, 41.25], [-37.36, -55.36, 41.25], [-31.36, -55.36, 41.25], [-25.36, -55.36, 41.25], [-19.36, -55.36, 41.25], [-13.36, -55.36, 41.25], [-7.36, -55.36, 41.25], [-1.36, -55.36, 41.25], [4.64, -55.36, 41.25], [10.64, -55.36, 41.25], [16.64, -55.36, 41.25], [22.64, -55.36, 41.25], [28.64, -55.36, 41.25], [34.64, -55.36, 41.25], [40.64, -55.36, 41.25], [46.64, -55.36, 41.25], [52.64, -55.36, 41.25], [58.64, -55.36, 41.25], [64.64, -55.36, 41.25], [70.64, -55.36, 41.25], [76.64, -55.36, 41.25], [82.64, -55.36, 41.25], [88.64, -55.36, 41.25], [94.64, -55.36, 41.25], [100.64, -55.36, 41.25], [-103.36, -49.36, 41.25], [-97.36, -49.36, 41.25], [-91.36, -49.36, 41.25], [-85.36, -49.36, 41.25], [-79.36, -49.36, 41.25], [-73.36, -49.36, 41.25], [-67.36, -49.36, 41.25], [-61.36, -49.36, 41.25], [-55.36, -49.36, 41.25], [-49.36, -49.36, 41.25], [-43.36, -49.36, 41.25], [-37.36, -49.36, 41.25], [-31.36, -49.36, 41.25], [-25.36, -49.36, 41.25], [-19.36, -49.36, 41.25], [-13.36, -49.36, 41.25], [-7.36, -49.36, 41.25], [-1.36, -49.36, 41.25], [4.64, -49.36, 41.25], [10.64, -49.36, 41.25], [16.64, -49.36, 41.25], [22.64, -49.36, 41.25], [28.64, -49.36, 41.25], [34.64, -49.36, 41.25], [40.64, -49.36, 41.25], [46.64, -49.36, 41.25], [52.64, -49.36, 41.25], [58.64, -49.36, 41.25], [64.64, -49.36, 41.25], [70.64, -49.36, 41.25], [76.64, -49.36, 41.25], [82.64, -49.36, 41.25], [88.64, -49.36, 41.25], [94.64, -49.36, 41.25], [100.64, -49.36, 41.25], [-103.36, -43.36, 41.25], [-97.36, -43.36, 41.25], [-91.36, -43.36, 41.25], [-85.36, -43.36, 41.25], [-79.36, -43.36, 41.25], [-73.36, -43.36, 41.25], [-67.36, -43.36, 41.25], [-61.36, -43.36, 41.25], [-55.36, -43.36, 41.25], [-49.36, -43.36, 41.25], [-43.36, -43.36, 41.25], [-37.36, -43.36, 41.25], [-31.36, -43.36, 41.25], [-25.36, -43.36, 41.25], [-19.36, -43.36, 41.25], [-13.36, -43.36, 41.25], [-7.36, -43.36, 41.25], [-1.36, -43.36, 41.25], [4.64, -43.36, 41.25], [10.64, -43.36, 41.25], [16.64, -43.36, 41.25], [22.64, -43.36, 41.25], [28.64, -43.36, 41.25], [34.64, -43.36, 41.25], [40.64, -43.36, 41.25], [46.64, -43.36, 41.25], [52.64, -43.36, 41.25], [58.64, -43.36, 41.25], [64.64, -43.36, 41.25], [70.64, -43.36, 41.25], [76.64, -43.36, 41.25], [82.64, -43.36, 41.25], [88.64, -43.36, 41.25], [94.64, -43.36, 41.25], [100.64, -43.36, 41.25], [-103.36, -37.36, 41.25], [-97.36, -37.36, 41.25], [-91.36, -37.36, 41.25], [-85.36, -37.36, 41.25], [-79.36, -37.36, 41.25], [-73.36, -37.36, 41.25], [-67.36, -37.36, 41.25], [-61.36, -37.36, 41.25], [-55.36, -37.36, 41.25], [-49.36, -37.36, 41.25], [-43.36, -37.36, 41.25], [-37.36, -37.36, 41.25], [-31.36, -37.36, 41.25], [-25.36, -37.36, 41.25], [-19.36, -37.36, 41.25], [-13.36, -37.36, 41.25], [-7.36, -37.36, 41.25], [-1.36, -37.36, 41.25], [4.64, -37.36, 41.25], [10.64, -37.36, 41.25], [16.64, -37.36, 41.25], [22.64, -37.36, 41.25], [28.64, -37.36, 41.25], [34.64, -37.36, 41.25], [40.64, -37.36, 41.25], [46.64, -37.36, 41.25], [52.64, -37.36, 41.25], [58.64, -37.36, 41.25], [64.64, -37.36, 41.25], [70.64, -37.36, 41.25], [76.64, -37.36, 41.25], [82.64, -37.36, 41.25], [88.64, -37.36, 41.25], [94.64, -37.36, 41.25], [100.64, -37.36, 41.25], [-103.36, -31.36, 41.25], [-97.36, -31.36, 41.25], [-91.36, -31.36, 41.25], [-85.36, -31.36, 41.25], [-79.36, -31.36, 41.25], [-73.36, -31.36, 41.25], [-67.36, -31.36, 41.25], [-61.36, -31.36, 41.25], [-55.36, -31.36, 41.25], [-49.36, -31.36, 41.25], [-43.36, -31.36, 41.25], [-37.36, -31.36, 41.25], [-31.36, -31.36, 41.25], [-25.36, -31.36, 41.25], [-19.36, -31.36, 41.25], [-13.36, -31.36, 41.25], [-7.36, -31.36, 41.25], [-1.36, -31.36, 41.25], [4.64, -31.36, 41.25], [10.64, -31.36, 41.25], [16.64, -31.36, 41.25], [22.64, -31.36, 41.25], [28.64, -31.36, 41.25], [34.64, -31.36, 41.25], [40.64, -31.36, 41.25], [46.64, -31.36, 41.25], [52.64, -31.36, 41.25], [58.64, -31.36, 41.25], [64.64, -31.36, 41.25], [70.64, -31.36, 41.25], [76.64, -31.36, 41.25], [82.64, -31.36, 41.25], [88.64, -31.36, 41.25], [94.64, -31.36, 41.25], [100.64, -31.36, 41.25], [-103.36, -25.36, 41.25], [-97.36, -25.36, 41.25], [-91.36, -25.36, 41.25], [-85.36, -25.36, 41.25], [-79.36, -25.36, 41.25], [-73.36, -25.36, 41.25], [-67.36, -25.36, 41.25], [-61.36, -25.36, 41.25], [-55.36, -25.36, 41.25], [-49.36, -25.36, 41.25], [-43.36, -25.36, 41.25], [-37.36, -25.36, 41.25], [-31.36, -25.36, 41.25], [-25.36, -25.36, 41.25], [-19.36, -25.36, 41.25], [-13.36, -25.36, 41.25], [-7.36, -25.36, 41.25], [-1.36, -25.36, 41.25], [4.64, -25.36, 41.25], [10.64, -25.36, 41.25], [16.64, -25.36, 41.25], [22.64, -25.36, 41.25], [28.64, -25.36, 41.25], [34.64, -25.36, 41.25], [40.64, -25.36, 41.25], [46.64, -25.36, 41.25], [52.64, -25.36, 41.25], [58.64, -25.36, 41.25], [64.64, -25.36, 41.25], [70.64, -25.36, 41.25], [76.64, -25.36, 41.25], [82.64, -25.36, 41.25], [88.64, -25.36, 41.25], [94.64, -25.36, 41.25], [100.64, -25.36, 41.25], [-103.36, -19.36, 41.25], [-97.36, -19.36, 41.25], [-91.36, -19.36, 41.25], [-85.36, -19.36, 41.25], [-79.36, -19.36, 41.25], [-73.36, -19.36, 41.25], [-67.36, -19.36, 41.25], [-61.36, -19.36, 41.25], [-55.36, -19.36, 41.25], [-49.36, -19.36, 41.25], [-43.36, -19.36, 41.25], [-37.36, -19.36, 41.25], [-31.36, -19.36, 41.25], [-25.36, -19.36, 41.25], [-19.36, -19.36, 41.25], [-13.36, -19.36, 41.25], [-7.36, -19.36, 41.25], [-1.36, -19.36, 41.25], [4.64, -19.36, 41.25], [10.64, -19.36, 41.25], [16.64, -19.36, 41.25], [22.64, -19.36, 41.25], [28.64, -19.36, 41.25], [34.64, -19.36, 41.25], [40.64, -19.36, 41.25], [46.64, -19.36, 41.25], [52.64, -19.36, 41.25], [58.64, -19.36, 41.25], [64.64, -19.36, 41.25], [70.64, -19.36, 41.25], [76.64, -19.36, 41.25], [82.64, -19.36, 41.25], [88.64, -19.36, 41.25], [94.64, -19.36, 41.25], [100.64, -19.36, 41.25], [-103.36, -13.36, 41.25], [-97.36, -13.36, 41.25], [-91.36, -13.36, 41.25], [-85.36, -13.36, 41.25], [-79.36, -13.36, 41.25], [-73.36, -13.36, 41.25], [-67.36, -13.36, 41.25], [-61.36, -13.36, 41.25], [-55.36, -13.36, 41.25], [-49.36, -13.36, 41.25], [-43.36, -13.36, 41.25], [-37.36, -13.36, 41.25], [-31.36, -13.36, 41.25], [-25.36, -13.36, 41.25], [-19.36, -13.36, 41.25], [-13.36, -13.36, 41.25], [-7.36, -13.36, 41.25], [-1.36, -13.36, 41.25], [4.64, -13.36, 41.25], [10.64, -13.36, 41.25], [16.64, -13.36, 41.25], [22.64, -13.36, 41.25], [28.64, -13.36, 41.25], [34.64, -13.36, 41.25], [40.64, -13.36, 41.25], [46.64, -13.36, 41.25], [52.64, -13.36, 41.25], [58.64, -13.36, 41.25], [64.64, -13.36, 41.25], [70.64, -13.36, 41.25], [76.64, -13.36, 41.25], [82.64, -13.36, 41.25], [88.64, -13.36, 41.25], [94.64, -13.36, 41.25], [100.64, -13.36, 41.25], [-103.36, -7.36, 41.25], [-97.36, -7.36, 41.25], [-91.36, -7.36, 41.25], [-85.36, -7.36, 41.25], [-79.36, -7.36, 41.25], [-73.36, -7.36, 41.25], [-67.36, -7.36, 41.25], [-61.36, -7.36, 41.25], [-55.36, -7.36, 41.25], [-49.36, -7.36, 41.25], [-43.36, -7.36, 41.25], [-37.36, -7.36, 41.25], [-31.36, -7.36, 41.25], [-25.36, -7.36, 41.25], [-19.36, -7.36, 41.25], [-13.36, -7.36, 41.25], [-7.36, -7.36, 41.25], [-1.36, -7.36, 41.25], [4.64, -7.36, 41.25], [10.64, -7.36, 41.25], [16.64, -7.36, 41.25], [22.64, -7.36, 41.25], [28.64, -7.36, 41.25], [34.64, -7.36, 41.25], [40.64, -7.36, 41.25], [46.64, -7.36, 41.25], [52.64, -7.36, 41.25], [58.64, -7.36, 41.25], [64.64, -7.36, 41.25], [70.64, -7.36, 41.25], [76.64, -7.36, 41.25], [82.64, -7.36, 41.25], [88.64, -7.36, 41.25], [94.64, -7.36, 41.25], [100.64, -7.36, 41.25], [-97.36, -1.36, 41.25], [-91.36, -1.36, 41.25], [-85.36, -1.36, 41.25], [-79.36, -1.36, 41.25], [-73.36, -1.36, 41.25], [-67.36, -1.36, 41.25], [-61.36, -1.36, 41.25], [-55.36, -1.36, 41.25], [-49.36, -1.36, 41.25], [-43.36, -1.36, 41.25], [-37.36, -1.36, 41.25], [-31.36, -1.36, 41.25], [-25.36, -1.36, 41.25], [-19.36, -1.36, 41.25], [-13.36, -1.36, 41.25], [-7.36, -1.36, 41.25], [-1.36, -1.36, 41.25], [4.64, -1.36, 41.25], [10.64, -1.36, 41.25], [16.64, -1.36, 41.25], [22.64, -1.36, 41.25], [28.64, -1.36, 41.25], [34.64, -1.36, 41.25], [40.64, -1.36, 41.25], [46.64, -1.36, 41.25], [52.64, -1.36, 41.25], [58.64, -1.36, 41.25], [64.64, -1.36, 41.25], [70.64, -1.36, 41.25], [76.64, -1.36, 41.25], [82.64, -1.36, 41.25], [88.64, -1.36, 41.25], [94.64, -1.36, 41.25], [100.64, -1.36, 41.25], [-97.36, 4.64, 41.25], [-91.36, 4.64, 41.25], [-85.36, 4.64, 41.25], [-79.36, 4.64, 41.25], [-73.36, 4.64, 41.25], [-67.36, 4.64, 41.25], [-61.36, 4.64, 41.25], [-55.36, 4.64, 41.25], [-49.36, 4.64, 41.25], [-43.36, 4.64, 41.25], [-37.36, 4.64, 41.25], [-31.36, 4.64, 41.25], [-25.36, 4.64, 41.25], [-19.36, 4.64, 41.25], [-13.36, 4.64, 41.25], [-7.36, 4.64, 41.25], [-1.36, 4.64, 41.25], [4.64, 4.64, 41.25], [10.64, 4.64, 41.25], [16.64, 4.64, 41.25], [22.64, 4.64, 41.25], [28.64, 4.64, 41.25], [34.64, 4.64, 41.25], [40.64, 4.64, 41.25], [46.64, 4.64, 41.25], [52.64, 4.64, 41.25], [58.64, 4.64, 41.25], [64.64, 4.64, 41.25], [70.64, 4.64, 41.25], [76.64, 4.64, 41.25], [82.64, 4.64, 41.25], [88.64, 4.64, 41.25], [94.64, 4.64, 41.25], [100.64, 4.64, 41.25], [-97.36, 10.64, 41.25], [-91.36, 10.64, 41.25], [-85.36, 10.64, 41.25], [-79.36, 10.64, 41.25], [-73.36, 10.64, 41.25], [-67.36, 10.64, 41.25], [-61.36, 10.64, 41.25], [-55.36, 10.64, 41.25], [-49.36, 10.64, 41.25], [-43.36, 10.64, 41.25], [-37.36, 10.64, 41.25], [-31.36, 10.64, 41.25], [-25.36, 10.64, 41.25], [-19.36, 10.64, 41.25], [-13.36, 10.64, 41.25], [-7.36, 10.64, 41.25], [-1.36, 10.64, 41.25], [4.64, 10.64, 41.25], [10.64, 10.64, 41.25], [16.64, 10.64, 41.25], [22.64, 10.64, 41.25], [28.64, 10.64, 41.25], [34.64, 10.64, 41.25], [40.64, 10.64, 41.25], [46.64, 10.64, 41.25], [52.64, 10.64, 41.25], [58.64, 10.64, 41.25], [64.64, 10.64, 41.25], [70.64, 10.64, 41.25], [76.64, 10.64, 41.25], [82.64, 10.64, 41.25], [88.64, 10.64, 41.25], [94.64, 10.64, 41.25], [100.64, 10.64, 41.25], [-97.36, 16.64, 41.25], [-91.36, 16.64, 41.25], [-85.36, 16.64, 41.25], [-79.36, 16.64, 41.25], [-73.36, 16.64, 41.25], [-67.36, 16.64, 41.25], [-61.36, 16.64, 41.25], [-55.36, 16.64, 41.25], [-49.36, 16.64, 41.25], [-43.36, 16.64, 41.25], [-37.36, 16.64, 41.25], [-31.36, 16.64, 41.25], [-25.36, 16.64, 41.25], [-19.36, 16.64, 41.25], [-13.36, 16.64, 41.25], [-7.36, 16.64, 41.25], [-1.36, 16.64, 41.25], [4.64, 16.64, 41.25], [10.64, 16.64, 41.25], [16.64, 16.64, 41.25], [22.64, 16.64, 41.25], [28.64, 16.64, 41.25], [34.64, 16.64, 41.25], [40.64, 16.64, 41.25], [46.64, 16.64, 41.25], [52.64, 16.64, 41.25], [58.64, 16.64, 41.25], [64.64, 16.64, 41.25], [70.64, 16.64, 41.25], [76.64, 16.64, 41.25], [82.64, 16.64, 41.25], [88.64, 16.64, 41.25], [94.64, 16.64, 41.25], [100.64, 16.64, 41.25], [-97.36, 22.64, 41.25], [-91.36, 22.64, 41.25], [-85.36, 22.64, 41.25], [-79.36, 22.64, 41.25], [-73.36, 22.64, 41.25], [-67.36, 22.64, 41.25], [-61.36, 22.64, 41.25], [-55.36, 22.64, 41.25], [-49.36, 22.64, 41.25], [-43.36, 22.64, 41.25], [-37.36, 22.64, 41.25], [-31.36, 22.64, 41.25], [-25.36, 22.64, 41.25], [-19.36, 22.64, 41.25], [-13.36, 22.64, 41.25], [-7.36, 22.64, 41.25], [-1.36, 22.64, 41.25], [4.64, 22.64, 41.25], [10.64, 22.64, 41.25], [16.64, 22.64, 41.25], [22.64, 22.64, 41.25], [28.64, 22.64, 41.25], [34.64, 22.64, 41.25], [40.64, 22.64, 41.25], [46.64, 22.64, 41.25], [52.64, 22.64, 41.25], [58.64, 22.64, 41.25], [64.64, 22.64, 41.25], [70.64, 22.64, 41.25], [76.64, 22.64, 41.25], [82.64, 22.64, 41.25], [88.64, 22.64, 41.25], [94.64, 22.64, 41.25], [100.64, 22.64, 41.25], [-97.36, 28.64, 41.25], [-91.36, 28.64, 41.25], [-85.36, 28.64, 41.25], [-79.36, 28.64, 41.25], [-73.36, 28.64, 41.25], [-67.36, 28.64, 41.25], [-61.36, 28.64, 41.25], [-55.36, 28.64, 41.25], [-49.36, 28.64, 41.25], [-43.36, 28.64, 41.25], [-37.36, 28.64, 41.25], [-31.36, 28.64, 41.25], [-25.36, 28.64, 41.25], [-19.36, 28.64, 41.25], [-13.36, 28.64, 41.25], [-7.36, 28.64, 41.25], [-1.36, 28.64, 41.25], [4.64, 28.64, 41.25], [10.64, 28.64, 41.25], [16.64, 28.64, 41.25], [22.64, 28.64, 41.25], [28.64, 28.64, 41.25], [34.64, 28.64, 41.25], [40.64, 28.64, 41.25], [46.64, 28.64, 41.25], [52.64, 28.64, 41.25], [58.64, 28.64, 41.25], [64.64, 28.64, 41.25], [70.64, 28.64, 41.25], [76.64, 28.64, 41.25], [82.64, 28.64, 41.25], [88.64, 28.64, 41.25], [94.64, 28.64, 41.25], [100.64, 28.64, 41.25], [-97.36, 34.64, 41.25], [-91.36, 34.64, 41.25], [-85.36, 34.64, 41.25], [-79.36, 34.64, 41.25], [-73.36, 34.64, 41.25], [-67.36, 34.64, 41.25], [-61.36, 34.64, 41.25], [-55.36, 34.64, 41.25], [-49.36, 34.64, 41.25], [-43.36, 34.64, 41.25], [-37.36, 34.64, 41.25], [-31.36, 34.64, 41.25], [-25.36, 34.64, 41.25], [-19.36, 34.64, 41.25], [-13.36, 34.64, 41.25], [-7.36, 34.64, 41.25], [-1.36, 34.64, 41.25], [4.64, 34.64, 41.25], [10.64, 34.64, 41.25], [16.64, 34.64, 41.25], [22.64, 34.64, 41.25], [28.64, 34.64, 41.25], [34.64, 34.64, 41.25], [40.64, 34.64, 41.25], [46.64, 34.64, 41.25], [52.64, 34.64, 41.25], [58.64, 34.64, 41.25], [64.64, 34.64, 41.25], [70.64, 34.64, 41.25], [76.64, 34.64, 41.25], [82.64, 34.64, 41.25], [88.64, 34.64, 41.25], [94.64, 34.64, 41.25], [100.64, 34.64, 41.25], [-91.36, 40.64, 41.25], [-85.36, 40.64, 41.25], [-79.36, 40.64, 41.25], [-73.36, 40.64, 41.25], [-67.36, 40.64, 41.25], [-61.36, 40.64, 41.25], [-55.36, 40.64, 41.25], [-49.36, 40.64, 41.25], [-43.36, 40.64, 41.25], [-37.36, 40.64, 41.25], [-31.36, 40.64, 41.25], [-25.36, 40.64, 41.25], [-19.36, 40.64, 41.25], [-13.36, 40.64, 41.25], [-7.36, 40.64, 41.25], [-1.36, 40.64, 41.25], [4.64, 40.64, 41.25], [10.64, 40.64, 41.25], [16.64, 40.64, 41.25], [22.64, 40.64, 41.25], [28.64, 40.64, 41.25], [34.64, 40.64, 41.25], [40.64, 40.64, 41.25], [46.64, 40.64, 41.25], [52.64, 40.64, 41.25], [58.64, 40.64, 41.25], [64.64, 40.64, 41.25], [70.64, 40.64, 41.25], [76.64, 40.64, 41.25], [82.64, 40.64, 41.25], [88.64, 40.64, 41.25], [94.64, 40.64, 41.25], [100.64, 40.64, 41.25], [-91.36, 46.64, 41.25], [-85.36, 46.64, 41.25], [-79.36, 46.64, 41.25], [-73.36, 46.64, 41.25], [-67.36, 46.64, 41.25], [-61.36, 46.64, 41.25], [-55.36, 46.64, 41.25], [-49.36, 46.64, 41.25], [-43.36, 46.64, 41.25], [-37.36, 46.64, 41.25], [-31.36, 46.64, 41.25], [-25.36, 46.64, 41.25], [-19.36, 46.64, 41.25], [-13.36, 46.64, 41.25], [-7.36, 46.64, 41.25], [-1.36, 46.64, 41.25], [4.64, 46.64, 41.25], [10.64, 46.64, 41.25], [16.64, 46.64, 41.25], [22.64, 46.64, 41.25], [28.64, 46.64, 41.25], [34.64, 46.64, 41.25], [40.64, 46.64, 41.25], [46.64, 46.64, 41.25], [52.64, 46.64, 41.25], [58.64, 46.64, 41.25], [64.64, 46.64, 41.25], [70.64, 46.64, 41.25], [76.64, 46.64, 41.25], [82.64, 46.64, 41.25], [88.64, 46.64, 41.25], [94.64, 46.64, 41.25], [100.64, 46.64, 41.25], [-91.36, 52.64, 41.25], [-85.36, 52.64, 41.25], [-79.36, 52.64, 41.25], [-73.36, 52.64, 41.25], [-67.36, 52.64, 41.25], [-61.36, 52.64, 41.25], [-55.36, 52.64, 41.25], [-49.36, 52.64, 41.25], [-43.36, 52.64, 41.25], [-37.36, 52.64, 41.25], [-31.36, 52.64, 41.25], [-25.36, 52.64, 41.25], [-19.36, 52.64, 41.25], [-13.36, 52.64, 41.25], [-7.36, 52.64, 41.25], [-1.36, 52.64, 41.25], [4.64, 52.64, 41.25], [10.64, 52.64, 41.25], [16.64, 52.64, 41.25], [22.64, 52.64, 41.25], [28.64, 52.64, 41.25], [34.64, 52.64, 41.25], [40.64, 52.64, 41.25], [46.64, 52.64, 41.25], [52.64, 52.64, 41.25], [58.64, 52.64, 41.25], [64.64, 52.64, 41.25], [70.64, 52.64, 41.25], [76.64, 52.64, 41.25], [82.64, 52.64, 41.25], [88.64, 52.64, 41.25], [94.64, 52.64, 41.25], [100.64, 52.64, 41.25], [-91.36, 58.64, 41.25], [-85.36, 58.64, 41.25], [-79.36, 58.64, 41.25], [-73.36, 58.64, 41.25], [-67.36, 58.64, 41.25], [-61.36, 58.64, 41.25], [-55.36, 58.64, 41.25], [-49.36, 58.64, 41.25], [-43.36, 58.64, 41.25], [-37.36, 58.64, 41.25], [-31.36, 58.64, 41.25], [-25.36, 58.64, 41.25], [-19.36, 58.64, 41.25], [-13.36, 58.64, 41.25], [-7.36, 58.64, 41.25], [-1.36, 58.64, 41.25], [4.64, 58.64, 41.25], [10.64, 58.64, 41.25], [16.64, 58.64, 41.25], [22.64, 58.64, 41.25], [28.64, 58.64, 41.25], [34.64, 58.64, 41.25], [40.64, 58.64, 41.25], [46.64, 58.64, 41.25], [52.64, 58.64, 41.25], [58.64, 58.64, 41.25], [64.64, 58.64, 41.25], [70.64, 58.64, 41.25], [76.64, 58.64, 41.25], [82.64, 58.64, 41.25], [88.64, 58.64, 41.25], [94.64, 58.64, 41.25], [100.64, 58.64, 41.25], [-91.36, 64.64, 41.25], [-85.36, 64.64, 41.25], [-79.36, 64.64, 41.25], [-73.36, 64.64, 41.25], [-67.36, 64.64, 41.25], [-61.36, 64.64, 41.25], [-55.36, 64.64, 41.25], [-49.36, 64.64, 41.25], [-43.36, 64.64, 41.25], [-37.36, 64.64, 41.25], [-31.36, 64.64, 41.25], [-25.36, 64.64, 41.25], [-19.36, 64.64, 41.25], [-13.36, 64.64, 41.25], [-7.36, 64.64, 41.25], [-1.36, 64.64, 41.25], [4.64, 64.64, 41.25], [10.64, 64.64, 41.25], [16.64, 64.64, 41.25], [22.64, 64.64, 41.25], [28.64, 64.64, 41.25], [34.64, 64.64, 41.25], [40.64, 64.64, 41.25], [46.64, 64.64, 41.25], [52.64, 64.64, 41.25], [58.64, 64.64, 41.25], [64.64, 64.64, 41.25], [70.64, 64.64, 41.25], [76.64, 64.64, 41.25], [82.64, 64.64, 41.25], [88.64, 64.64, 41.25], [94.64, 64.64, 41.25], [-91.36, 70.64, 41.25], [-85.36, 70.64, 41.25], [-79.36, 70.64, 41.25], [-73.36, 70.64, 41.25], [-67.36, 70.64, 41.25], [-61.36, 70.64, 41.25], [-55.36, 70.64, 41.25], [-49.36, 70.64, 41.25], [-43.36, 70.64, 41.25], [-37.36, 70.64, 41.25], [-31.36, 70.64, 41.25], [-25.36, 70.64, 41.25], [-19.36, 70.64, 41.25], [-13.36, 70.64, 41.25], [-7.36, 70.64, 41.25], [-1.36, 70.64, 41.25], [4.64, 70.64, 41.25], [10.64, 70.64, 41.25], [16.64, 70.64, 41.25], [22.64, 70.64, 41.25], [28.64, 70.64, 41.25], [34.64, 70.64, 41.25], [40.64, 70.64, 41.25], [46.64, 70.64, 41.25], [52.64, 70.64, 41.25], [58.64, 70.64, 41.25], [64.64, 70.64, 41.25], [70.64, 70.64, 41.25], [76.64, 70.64, 41.25], [82.64, 70.64, 41.25], [88.64, 70.64, 41.25], [-91.36, 76.64, 41.25], [-85.36, 76.64, 41.25], [-79.36, 76.64, 41.25], [-73.36, 76.64, 41.25], [-67.36, 76.64, 41.25], [-61.36, 76.64, 41.25], [-55.36, 76.64, 41.25], [-49.36, 76.64, 41.25], [-43.36, 76.64, 41.25], [-37.36, 76.64, 41.25], [-31.36, 76.64, 41.25], [-25.36, 76.64, 41.25], [-19.36, 76.64, 41.25], [-13.36, 76.64, 41.25], [-7.36, 76.64, 41.25], [-1.36, 76.64, 41.25], [4.64, 76.64, 41.25], [10.64, 76.64, 41.25], [16.64, 76.64, 41.25], [22.64, 76.64, 41.25], [28.64, 76.64, 41.25], [34.64, 76.64, 41.25], [40.64, 76.64, 41.25], [46.64, 76.64, 41.25], [52.64, 76.64, 41.25], [58.64, 76.64, 41.25], [64.64, 76.64, 41.25], [70.64, 76.64, 41.25], [76.64, 76.64, 41.25], [82.64, 76.64, 41.25], [88.64, 76.64, 41.25], [-91.36, 82.64, 41.25], [-85.36, 82.64, 41.25], [-79.36, 82.64, 41.25], [-73.36, 82.64, 41.25], [-67.36, 82.64, 41.25], [-61.36, 82.64, 41.25], [-55.36, 82.64, 41.25], [-49.36, 82.64, 41.25], [-43.36, 82.64, 41.25], [-37.36, 82.64, 41.25], [-31.36, 82.64, 41.25], [-25.36, 82.64, 41.25], [-19.36, 82.64, 41.25], [-13.36, 82.64, 41.25], [-7.36, 82.64, 41.25], [-1.36, 82.64, 41.25], [4.64, 82.64, 41.25], [10.64, 82.64, 41.25], [16.64, 82.64, 41.25], [22.64, 82.64, 41.25], [28.64, 82.64, 41.25], [34.64, 82.64, 41.25], [40.64, 82.64, 41.25], [46.64, 82.64, 41.25], [52.64, 82.64, 41.25], [58.64, 82.64, 41.25], [64.64, 82.64, 41.25], [70.64, 82.64, 41.25], [76.64, 82.64, 41.25], [82.64, 82.64, 41.25], [88.64, 82.64, 41.25], [-91.36, 88.64, 41.25], [-85.36, 88.64, 41.25], [-79.36, 88.64, 41.25], [-73.36, 88.64, 41.25], [-67.36, 88.64, 41.25], [-61.36, 88.64, 41.25], [-55.36, 88.64, 41.25], [-49.36, 88.64, 41.25], [-43.36, 88.64, 41.25], [-37.36, 88.64, 41.25], [-31.36, 88.64, 41.25], [-25.36, 88.64, 41.25], [-19.36, 88.64, 41.25], [-13.36, 88.64, 41.25], [-7.36, 88.64, 41.25], [-1.36, 88.64, 41.25], [4.64, 88.64, 41.25], [10.64, 88.64, 41.25], [16.64, 88.64, 41.25], [22.64, 88.64, 41.25], [28.64, 88.64, 41.25], [34.64, 88.64, 41.25], [40.64, 88.64, 41.25], [46.64, 88.64, 41.25], [52.64, 88.64, 41.25], [58.64, 88.64, 41.25], [64.64, 88.64, 41.25], [70.64, 88.64, 41.25], [76.64, 88.64, 41.25], [82.64, 88.64, 41.25], [88.64, 88.64, 41.25], [-91.36, 94.64, 41.25], [-85.36, 94.64, 41.25], [-79.36, 94.64, 41.25], [-73.36, 94.64, 41.25], [-67.36, 94.64, 41.25], [-61.36, 94.64, 41.25], [-55.36, 94.64, 41.25], [-49.36, 94.64, 41.25], [-43.36, 94.64, 41.25], [-37.36, 94.64, 41.25], [-31.36, 94.64, 41.25], [-25.36, 94.64, 41.25], [-19.36, 94.64, 41.25], [-13.36, 94.64, 41.25], [-7.36, 94.64, 41.25], [-1.36, 94.64, 41.25], [4.64, 94.64, 41.25], [10.64, 94.64, 41.25], [16.64, 94.64, 41.25], [22.64, 94.64, 41.25], [28.64, 94.64, 41.25], [34.64, 94.64, 41.25], [40.64, 94.64, 41.25], [46.64, 94.64, 41.25], [52.64, 94.64, 41.25], [58.64, 94.64, 41.25], [64.64, 94.64, 41.25], [-91.36, 100.64, 41.25], [-85.36, 100.64, 41.25], [-79.36, 100.64, 41.25], [-73.36, 100.64, 41.25], [-67.36, 100.64, 41.25], [-61.36, 100.64, 41.25], [-55.36, 100.64, 41.25], [-49.36, 100.64, 41.25], [-43.36, 100.64, 41.25], [-37.36, 100.64, 41.25], [-31.36, 100.64, 41.25], [-25.36, 100.64, 41.25], [-19.36, 100.64, 41.25], [-13.36, 100.64, 41.25], [-7.36, 100.64, 41.25], [-1.36, 100.64, 41.25], [4.64, 100.64, 41.25], [10.64, 100.64, 41.25], [16.64, 100.64, 41.25], [22.64, 100.64, 41.25], [28.64, 100.64, 41.25], [34.64, 100.64, 41.25], [40.64, 100.64, 41.25], [46.64, 100.64, 41.25], [52.64, 100.64, 41.25], [58.64, 100.64, 41.25], [-31.36, -97.36, 47.25], [-25.36, -97.36, 47.25], [-19.36, -97.36, 47.25], [-13.36, -97.36, 47.25], [-7.36, -97.36, 47.25], [-1.36, -97.36, 47.25], [4.64, -97.36, 47.25], [10.64, -97.36, 47.25], [16.64, -97.36, 47.25], [22.64, -97.36, 47.25], [28.64, -97.36, 47.25], [34.64, -97.36, 47.25], [40.64, -97.36, 47.25], [46.64, -97.36, 47.25], [52.64, -97.36, 47.25], [-91.36, -91.36, 47.25], [-85.36, -91.36, 47.25], [-79.36, -91.36, 47.25], [-73.36, -91.36, 47.25], [-67.36, -91.36, 47.25], [-61.36, -91.36, 47.25], [-55.36, -91.36, 47.25], [-49.36, -91.36, 47.25], [-43.36, -91.36, 47.25], [-37.36, -91.36, 47.25], [-31.36, -91.36, 47.25], [-25.36, -91.36, 47.25], [-19.36, -91.36, 47.25], [-13.36, -91.36, 47.25], [-7.36, -91.36, 47.25], [-1.36, -91.36, 47.25], [4.64, -91.36, 47.25], [10.64, -91.36, 47.25], [16.64, -91.36, 47.25], [22.64, -91.36, 47.25], [28.64, -91.36, 47.25], [34.64, -91.36, 47.25], [40.64, -91.36, 47.25], [46.64, -91.36, 47.25], [52.64, -91.36, 47.25], [58.64, -91.36, 47.25], [64.64, -91.36, 47.25], [70.64, -91.36, 47.25], [76.64, -91.36, 47.25], [82.64, -91.36, 47.25], [88.64, -91.36, 47.25], [-91.36, -85.36, 47.25], [-85.36, -85.36, 47.25], [-79.36, -85.36, 47.25], [-73.36, -85.36, 47.25], [-67.36, -85.36, 47.25], [-61.36, -85.36, 47.25], [-55.36, -85.36, 47.25], [-49.36, -85.36, 47.25], [-43.36, -85.36, 47.25], [-37.36, -85.36, 47.25], [-31.36, -85.36, 47.25], [-25.36, -85.36, 47.25], [-19.36, -85.36, 47.25], [-13.36, -85.36, 47.25], [-7.36, -85.36, 47.25], [-1.36, -85.36, 47.25], [4.64, -85.36, 47.25], [10.64, -85.36, 47.25], [16.64, -85.36, 47.25], [22.64, -85.36, 47.25], [28.64, -85.36, 47.25], [34.64, -85.36, 47.25], [40.64, -85.36, 47.25], [46.64, -85.36, 47.25], [52.64, -85.36, 47.25], [58.64, -85.36, 47.25], [64.64, -85.36, 47.25], [70.64, -85.36, 47.25], [76.64, -85.36, 47.25], [82.64, -85.36, 47.25], [88.64, -85.36, 47.25], [-103.36, -79.36, 47.25], [-97.36, -79.36, 47.25], [-91.36, -79.36, 47.25], [-85.36, -79.36, 47.25], [-79.36, -79.36, 47.25], [-73.36, -79.36, 47.25], [-67.36, -79.36, 47.25], [-61.36, -79.36, 47.25], [-55.36, -79.36, 47.25], [-49.36, -79.36, 47.25], [-43.36, -79.36, 47.25], [-37.36, -79.36, 47.25], [-31.36, -79.36, 47.25], [-25.36, -79.36, 47.25], [-19.36, -79.36, 47.25], [-13.36, -79.36, 47.25], [-7.36, -79.36, 47.25], [-1.36, -79.36, 47.25], [4.64, -79.36, 47.25], [10.64, -79.36, 47.25], [16.64, -79.36, 47.25], [22.64, -79.36, 47.25], [28.64, -79.36, 47.25], [34.64, -79.36, 47.25], [40.64, -79.36, 47.25], [46.64, -79.36, 47.25], [52.64, -79.36, 47.25], [58.64, -79.36, 47.25], [64.64, -79.36, 47.25], [70.64, -79.36, 47.25], [76.64, -79.36, 47.25], [82.64, -79.36, 47.25], [88.64, -79.36, 47.25], [-103.36, -73.36, 47.25], [-97.36, -73.36, 47.25], [-91.36, -73.36, 47.25], [-85.36, -73.36, 47.25], [-79.36, -73.36, 47.25], [-73.36, -73.36, 47.25], [-67.36, -73.36, 47.25], [-61.36, -73.36, 47.25], [-55.36, -73.36, 47.25], [-49.36, -73.36, 47.25], [-43.36, -73.36, 47.25], [-37.36, -73.36, 47.25], [-31.36, -73.36, 47.25], [-25.36, -73.36, 47.25], [-19.36, -73.36, 47.25], [-13.36, -73.36, 47.25], [-7.36, -73.36, 47.25], [-1.36, -73.36, 47.25], [4.64, -73.36, 47.25], [10.64, -73.36, 47.25], [16.64, -73.36, 47.25], [22.64, -73.36, 47.25], [28.64, -73.36, 47.25], [34.64, -73.36, 47.25], [40.64, -73.36, 47.25], [46.64, -73.36, 47.25], [52.64, -73.36, 47.25], [58.64, -73.36, 47.25], [64.64, -73.36, 47.25], [70.64, -73.36, 47.25], [76.64, -73.36, 47.25], [82.64, -73.36, 47.25], [88.64, -73.36, 47.25], [-103.36, -67.36, 47.25], [-97.36, -67.36, 47.25], [-91.36, -67.36, 47.25], [-85.36, -67.36, 47.25], [-79.36, -67.36, 47.25], [-73.36, -67.36, 47.25], [-67.36, -67.36, 47.25], [-61.36, -67.36, 47.25], [-55.36, -67.36, 47.25], [-49.36, -67.36, 47.25], [-43.36, -67.36, 47.25], [-37.36, -67.36, 47.25], [-31.36, -67.36, 47.25], [-25.36, -67.36, 47.25], [-19.36, -67.36, 47.25], [-13.36, -67.36, 47.25], [-7.36, -67.36, 47.25], [-1.36, -67.36, 47.25], [4.64, -67.36, 47.25], [10.64, -67.36, 47.25], [16.64, -67.36, 47.25], [22.64, -67.36, 47.25], [28.64, -67.36, 47.25], [34.64, -67.36, 47.25], [40.64, -67.36, 47.25], [46.64, -67.36, 47.25], [52.64, -67.36, 47.25], [58.64, -67.36, 47.25], [64.64, -67.36, 47.25], [70.64, -67.36, 47.25], [76.64, -67.36, 47.25], [82.64, -67.36, 47.25], [88.64, -67.36, 47.25], [-103.36, -61.36, 47.25], [-97.36, -61.36, 47.25], [-91.36, -61.36, 47.25], [-85.36, -61.36, 47.25], [-79.36, -61.36, 47.25], [-73.36, -61.36, 47.25], [-67.36, -61.36, 47.25], [-61.36, -61.36, 47.25], [-55.36, -61.36, 47.25], [-49.36, -61.36, 47.25], [-43.36, -61.36, 47.25], [-37.36, -61.36, 47.25], [-31.36, -61.36, 47.25], [-25.36, -61.36, 47.25], [-19.36, -61.36, 47.25], [-13.36, -61.36, 47.25], [-7.36, -61.36, 47.25], [-1.36, -61.36, 47.25], [4.64, -61.36, 47.25], [10.64, -61.36, 47.25], [16.64, -61.36, 47.25], [22.64, -61.36, 47.25], [28.64, -61.36, 47.25], [34.64, -61.36, 47.25], [40.64, -61.36, 47.25], [46.64, -61.36, 47.25], [52.64, -61.36, 47.25], [58.64, -61.36, 47.25], [64.64, -61.36, 47.25], [70.64, -61.36, 47.25], [76.64, -61.36, 47.25], [82.64, -61.36, 47.25], [88.64, -61.36, 47.25], [-103.36, -55.36, 47.25], [-97.36, -55.36, 47.25], [-91.36, -55.36, 47.25], [-85.36, -55.36, 47.25], [-79.36, -55.36, 47.25], [-73.36, -55.36, 47.25], [-67.36, -55.36, 47.25], [-61.36, -55.36, 47.25], [-55.36, -55.36, 47.25], [-49.36, -55.36, 47.25], [-43.36, -55.36, 47.25], [-37.36, -55.36, 47.25], [-31.36, -55.36, 47.25], [-25.36, -55.36, 47.25], [-19.36, -55.36, 47.25], [-13.36, -55.36, 47.25], [-7.36, -55.36, 47.25], [-1.36, -55.36, 47.25], [4.64, -55.36, 47.25], [10.64, -55.36, 47.25], [16.64, -55.36, 47.25], [22.64, -55.36, 47.25], [28.64, -55.36, 47.25], [34.64, -55.36, 47.25], [40.64, -55.36, 47.25], [46.64, -55.36, 47.25], [52.64, -55.36, 47.25], [58.64, -55.36, 47.25], [64.64, -55.36, 47.25], [70.64, -55.36, 47.25], [76.64, -55.36, 47.25], [82.64, -55.36, 47.25], [88.64, -55.36, 47.25], [-103.36, -49.36, 47.25], [-97.36, -49.36, 47.25], [-91.36, -49.36, 47.25], [-85.36, -49.36, 47.25], [-79.36, -49.36, 47.25], [-73.36, -49.36, 47.25], [-67.36, -49.36, 47.25], [-61.36, -49.36, 47.25], [-55.36, -49.36, 47.25], [-49.36, -49.36, 47.25], [-43.36, -49.36, 47.25], [-37.36, -49.36, 47.25], [-31.36, -49.36, 47.25], [-25.36, -49.36, 47.25], [-19.36, -49.36, 47.25], [-13.36, -49.36, 47.25], [-7.36, -49.36, 47.25], [-1.36, -49.36, 47.25], [4.64, -49.36, 47.25], [10.64, -49.36, 47.25], [16.64, -49.36, 47.25], [22.64, -49.36, 47.25], [28.64, -49.36, 47.25], [34.64, -49.36, 47.25], [40.64, -49.36, 47.25], [46.64, -49.36, 47.25], [52.64, -49.36, 47.25], [58.64, -49.36, 47.25], [64.64, -49.36, 47.25], [70.64, -49.36, 47.25], [76.64, -49.36, 47.25], [82.64, -49.36, 47.25], [88.64, -49.36, 47.25], [-103.36, -43.36, 47.25], [-97.36, -43.36, 47.25], [-91.36, -43.36, 47.25], [-85.36, -43.36, 47.25], [-79.36, -43.36, 47.25], [-73.36, -43.36, 47.25], [-67.36, -43.36, 47.25], [-61.36, -43.36, 47.25], [-55.36, -43.36, 47.25], [-49.36, -43.36, 47.25], [-43.36, -43.36, 47.25], [-37.36, -43.36, 47.25], [-31.36, -43.36, 47.25], [-25.36, -43.36, 47.25], [-19.36, -43.36, 47.25], [-13.36, -43.36, 47.25], [-7.36, -43.36, 47.25], [-1.36, -43.36, 47.25], [4.64, -43.36, 47.25], [10.64, -43.36, 47.25], [16.64, -43.36, 47.25], [22.64, -43.36, 47.25], [28.64, -43.36, 47.25], [34.64, -43.36, 47.25], [40.64, -43.36, 47.25], [46.64, -43.36, 47.25], [52.64, -43.36, 47.25], [58.64, -43.36, 47.25], [64.64, -43.36, 47.25], [70.64, -43.36, 47.25], [76.64, -43.36, 47.25], [82.64, -43.36, 47.25], [88.64, -43.36, 47.25], [94.64, -43.36, 47.25], [-103.36, -37.36, 47.25], [-97.36, -37.36, 47.25], [-91.36, -37.36, 47.25], [-85.36, -37.36, 47.25], [-79.36, -37.36, 47.25], [-73.36, -37.36, 47.25], [-67.36, -37.36, 47.25], [-61.36, -37.36, 47.25], [-55.36, -37.36, 47.25], [-49.36, -37.36, 47.25], [-43.36, -37.36, 47.25], [-37.36, -37.36, 47.25], [-31.36, -37.36, 47.25], [-25.36, -37.36, 47.25], [-19.36, -37.36, 47.25], [-13.36, -37.36, 47.25], [-7.36, -37.36, 47.25], [-1.36, -37.36, 47.25], [4.64, -37.36, 47.25], [10.64, -37.36, 47.25], [16.64, -37.36, 47.25], [22.64, -37.36, 47.25], [28.64, -37.36, 47.25], [34.64, -37.36, 47.25], [40.64, -37.36, 47.25], [46.64, -37.36, 47.25], [52.64, -37.36, 47.25], [58.64, -37.36, 47.25], [64.64, -37.36, 47.25], [70.64, -37.36, 47.25], [76.64, -37.36, 47.25], [82.64, -37.36, 47.25], [88.64, -37.36, 47.25], [94.64, -37.36, 47.25], [-103.36, -31.36, 47.25], [-97.36, -31.36, 47.25], [-91.36, -31.36, 47.25], [-85.36, -31.36, 47.25], [-79.36, -31.36, 47.25], [-73.36, -31.36, 47.25], [-67.36, -31.36, 47.25], [-61.36, -31.36, 47.25], [-55.36, -31.36, 47.25], [-49.36, -31.36, 47.25], [-43.36, -31.36, 47.25], [-37.36, -31.36, 47.25], [-31.36, -31.36, 47.25], [-25.36, -31.36, 47.25], [-19.36, -31.36, 47.25], [-13.36, -31.36, 47.25], [-7.36, -31.36, 47.25], [-1.36, -31.36, 47.25], [4.64, -31.36, 47.25], [10.64, -31.36, 47.25], [16.64, -31.36, 47.25], [22.64, -31.36, 47.25], [28.64, -31.36, 47.25], [34.64, -31.36, 47.25], [40.64, -31.36, 47.25], [46.64, -31.36, 47.25], [52.64, -31.36, 47.25], [58.64, -31.36, 47.25], [64.64, -31.36, 47.25], [70.64, -31.36, 47.25], [76.64, -31.36, 47.25], [82.64, -31.36, 47.25], [88.64, -31.36, 47.25], [94.64, -31.36, 47.25], [-103.36, -25.36, 47.25], [-97.36, -25.36, 47.25], [-91.36, -25.36, 47.25], [-85.36, -25.36, 47.25], [-79.36, -25.36, 47.25], [-73.36, -25.36, 47.25], [-67.36, -25.36, 47.25], [-61.36, -25.36, 47.25], [-55.36, -25.36, 47.25], [-49.36, -25.36, 47.25], [-43.36, -25.36, 47.25], [-37.36, -25.36, 47.25], [-31.36, -25.36, 47.25], [-25.36, -25.36, 47.25], [-19.36, -25.36, 47.25], [-13.36, -25.36, 47.25], [-7.36, -25.36, 47.25], [-1.36, -25.36, 47.25], [4.64, -25.36, 47.25], [10.64, -25.36, 47.25], [16.64, -25.36, 47.25], [22.64, -25.36, 47.25], [28.64, -25.36, 47.25], [34.64, -25.36, 47.25], [40.64, -25.36, 47.25], [46.64, -25.36, 47.25], [52.64, -25.36, 47.25], [58.64, -25.36, 47.25], [64.64, -25.36, 47.25], [70.64, -25.36, 47.25], [76.64, -25.36, 47.25], [82.64, -25.36, 47.25], [88.64, -25.36, 47.25], [94.64, -25.36, 47.25], [-103.36, -19.36, 47.25], [-97.36, -19.36, 47.25], [-91.36, -19.36, 47.25], [-85.36, -19.36, 47.25], [-79.36, -19.36, 47.25], [-73.36, -19.36, 47.25], [-67.36, -19.36, 47.25], [-61.36, -19.36, 47.25], [-55.36, -19.36, 47.25], [-49.36, -19.36, 47.25], [-43.36, -19.36, 47.25], [-37.36, -19.36, 47.25], [-31.36, -19.36, 47.25], [-25.36, -19.36, 47.25], [-19.36, -19.36, 47.25], [-13.36, -19.36, 47.25], [-7.36, -19.36, 47.25], [-1.36, -19.36, 47.25], [4.64, -19.36, 47.25], [10.64, -19.36, 47.25], [16.64, -19.36, 47.25], [22.64, -19.36, 47.25], [28.64, -19.36, 47.25], [34.64, -19.36, 47.25], [40.64, -19.36, 47.25], [46.64, -19.36, 47.25], [52.64, -19.36, 47.25], [58.64, -19.36, 47.25], [64.64, -19.36, 47.25], [70.64, -19.36, 47.25], [76.64, -19.36, 47.25], [82.64, -19.36, 47.25], [88.64, -19.36, 47.25], [94.64, -19.36, 47.25], [-103.36, -13.36, 47.25], [-97.36, -13.36, 47.25], [-91.36, -13.36, 47.25], [-85.36, -13.36, 47.25], [-79.36, -13.36, 47.25], [-73.36, -13.36, 47.25], [-67.36, -13.36, 47.25], [-61.36, -13.36, 47.25], [-55.36, -13.36, 47.25], [-49.36, -13.36, 47.25], [-43.36, -13.36, 47.25], [-37.36, -13.36, 47.25], [-31.36, -13.36, 47.25], [-25.36, -13.36, 47.25], [-19.36, -13.36, 47.25], [-13.36, -13.36, 47.25], [-7.36, -13.36, 47.25], [-1.36, -13.36, 47.25], [4.64, -13.36, 47.25], [10.64, -13.36, 47.25], [16.64, -13.36, 47.25], [22.64, -13.36, 47.25], [28.64, -13.36, 47.25], [34.64, -13.36, 47.25], [40.64, -13.36, 47.25], [46.64, -13.36, 47.25], [52.64, -13.36, 47.25], [58.64, -13.36, 47.25], [64.64, -13.36, 47.25], [70.64, -13.36, 47.25], [76.64, -13.36, 47.25], [82.64, -13.36, 47.25], [88.64, -13.36, 47.25], [94.64, -13.36, 47.25], [-97.36, -7.36, 47.25], [-91.36, -7.36, 47.25], [-85.36, -7.36, 47.25], [-79.36, -7.36, 47.25], [-73.36, -7.36, 47.25], [-67.36, -7.36, 47.25], [-61.36, -7.36, 47.25], [-55.36, -7.36, 47.25], [-49.36, -7.36, 47.25], [-43.36, -7.36, 47.25], [-37.36, -7.36, 47.25], [-31.36, -7.36, 47.25], [-25.36, -7.36, 47.25], [-19.36, -7.36, 47.25], [-13.36, -7.36, 47.25], [-7.36, -7.36, 47.25], [-1.36, -7.36, 47.25], [4.64, -7.36, 47.25], [10.64, -7.36, 47.25], [16.64, -7.36, 47.25], [22.64, -7.36, 47.25], [28.64, -7.36, 47.25], [34.64, -7.36, 47.25], [40.64, -7.36, 47.25], [46.64, -7.36, 47.25], [52.64, -7.36, 47.25], [58.64, -7.36, 47.25], [64.64, -7.36, 47.25], [70.64, -7.36, 47.25], [76.64, -7.36, 47.25], [82.64, -7.36, 47.25], [88.64, -7.36, 47.25], [94.64, -7.36, 47.25], [-97.36, -1.36, 47.25], [-91.36, -1.36, 47.25], [-85.36, -1.36, 47.25], [-79.36, -1.36, 47.25], [-73.36, -1.36, 47.25], [-67.36, -1.36, 47.25], [-61.36, -1.36, 47.25], [-55.36, -1.36, 47.25], [-49.36, -1.36, 47.25], [-43.36, -1.36, 47.25], [-37.36, -1.36, 47.25], [-31.36, -1.36, 47.25], [-25.36, -1.36, 47.25], [-19.36, -1.36, 47.25], [-13.36, -1.36, 47.25], [-7.36, -1.36, 47.25], [-1.36, -1.36, 47.25], [4.64, -1.36, 47.25], [10.64, -1.36, 47.25], [16.64, -1.36, 47.25], [22.64, -1.36, 47.25], [28.64, -1.36, 47.25], [34.64, -1.36, 47.25], [40.64, -1.36, 47.25], [46.64, -1.36, 47.25], [52.64, -1.36, 47.25], [58.64, -1.36, 47.25], [64.64, -1.36, 47.25], [70.64, -1.36, 47.25], [76.64, -1.36, 47.25], [82.64, -1.36, 47.25], [88.64, -1.36, 47.25], [94.64, -1.36, 47.25], [-97.36, 4.64, 47.25], [-91.36, 4.64, 47.25], [-85.36, 4.64, 47.25], [-79.36, 4.64, 47.25], [-73.36, 4.64, 47.25], [-67.36, 4.64, 47.25], [-61.36, 4.64, 47.25], [-55.36, 4.64, 47.25], [-49.36, 4.64, 47.25], [-43.36, 4.64, 47.25], [-37.36, 4.64, 47.25], [-31.36, 4.64, 47.25], [-25.36, 4.64, 47.25], [-19.36, 4.64, 47.25], [-13.36, 4.64, 47.25], [-7.36, 4.64, 47.25], [-1.36, 4.64, 47.25], [4.64, 4.64, 47.25], [10.64, 4.64, 47.25], [16.64, 4.64, 47.25], [22.64, 4.64, 47.25], [28.64, 4.64, 47.25], [34.64, 4.64, 47.25], [40.64, 4.64, 47.25], [46.64, 4.64, 47.25], [52.64, 4.64, 47.25], [58.64, 4.64, 47.25], [64.64, 4.64, 47.25], [70.64, 4.64, 47.25], [76.64, 4.64, 47.25], [82.64, 4.64, 47.25], [88.64, 4.64, 47.25], [94.64, 4.64, 47.25], [-97.36, 10.64, 47.25], [-91.36, 10.64, 47.25], [-85.36, 10.64, 47.25], [-79.36, 10.64, 47.25], [-73.36, 10.64, 47.25], [-67.36, 10.64, 47.25], [-61.36, 10.64, 47.25], [-55.36, 10.64, 47.25], [-49.36, 10.64, 47.25], [-43.36, 10.64, 47.25], [-37.36, 10.64, 47.25], [-31.36, 10.64, 47.25], [-25.36, 10.64, 47.25], [-19.36, 10.64, 47.25], [-13.36, 10.64, 47.25], [-7.36, 10.64, 47.25], [-1.36, 10.64, 47.25], [4.64, 10.64, 47.25], [10.64, 10.64, 47.25], [16.64, 10.64, 47.25], [22.64, 10.64, 47.25], [28.64, 10.64, 47.25], [34.64, 10.64, 47.25], [40.64, 10.64, 47.25], [46.64, 10.64, 47.25], [52.64, 10.64, 47.25], [58.64, 10.64, 47.25], [64.64, 10.64, 47.25], [70.64, 10.64, 47.25], [76.64, 10.64, 47.25], [82.64, 10.64, 47.25], [88.64, 10.64, 47.25], [94.64, 10.64, 47.25], [-97.36, 16.64, 47.25], [-91.36, 16.64, 47.25], [-85.36, 16.64, 47.25], [-79.36, 16.64, 47.25], [-73.36, 16.64, 47.25], [-67.36, 16.64, 47.25], [-61.36, 16.64, 47.25], [-55.36, 16.64, 47.25], [-49.36, 16.64, 47.25], [-43.36, 16.64, 47.25], [-37.36, 16.64, 47.25], [-31.36, 16.64, 47.25], [-25.36, 16.64, 47.25], [-19.36, 16.64, 47.25], [-13.36, 16.64, 47.25], [-7.36, 16.64, 47.25], [-1.36, 16.64, 47.25], [4.64, 16.64, 47.25], [10.64, 16.64, 47.25], [16.64, 16.64, 47.25], [22.64, 16.64, 47.25], [28.64, 16.64, 47.25], [34.64, 16.64, 47.25], [40.64, 16.64, 47.25], [46.64, 16.64, 47.25], [52.64, 16.64, 47.25], [58.64, 16.64, 47.25], [64.64, 16.64, 47.25], [70.64, 16.64, 47.25], [76.64, 16.64, 47.25], [82.64, 16.64, 47.25], [88.64, 16.64, 47.25], [94.64, 16.64, 47.25], [-97.36, 22.64, 47.25], [-91.36, 22.64, 47.25], [-85.36, 22.64, 47.25], [-79.36, 22.64, 47.25], [-73.36, 22.64, 47.25], [-67.36, 22.64, 47.25], [-61.36, 22.64, 47.25], [-55.36, 22.64, 47.25], [-49.36, 22.64, 47.25], [-43.36, 22.64, 47.25], [-37.36, 22.64, 47.25], [-31.36, 22.64, 47.25], [-25.36, 22.64, 47.25], [-19.36, 22.64, 47.25], [-13.36, 22.64, 47.25], [-7.36, 22.64, 47.25], [-1.36, 22.64, 47.25], [4.64, 22.64, 47.25], [10.64, 22.64, 47.25], [16.64, 22.64, 47.25], [22.64, 22.64, 47.25], [28.64, 22.64, 47.25], [34.64, 22.64, 47.25], [40.64, 22.64, 47.25], [46.64, 22.64, 47.25], [52.64, 22.64, 47.25], [58.64, 22.64, 47.25], [64.64, 22.64, 47.25], [70.64, 22.64, 47.25], [76.64, 22.64, 47.25], [82.64, 22.64, 47.25], [88.64, 22.64, 47.25], [94.64, 22.64, 47.25], [-91.36, 28.64, 47.25], [-85.36, 28.64, 47.25], [-79.36, 28.64, 47.25], [-73.36, 28.64, 47.25], [-67.36, 28.64, 47.25], [-61.36, 28.64, 47.25], [-55.36, 28.64, 47.25], [-49.36, 28.64, 47.25], [-43.36, 28.64, 47.25], [-37.36, 28.64, 47.25], [-31.36, 28.64, 47.25], [-25.36, 28.64, 47.25], [-19.36, 28.64, 47.25], [-13.36, 28.64, 47.25], [-7.36, 28.64, 47.25], [-1.36, 28.64, 47.25], [4.64, 28.64, 47.25], [10.64, 28.64, 47.25], [16.64, 28.64, 47.25], [22.64, 28.64, 47.25], [28.64, 28.64, 47.25], [34.64, 28.64, 47.25], [40.64, 28.64, 47.25], [46.64, 28.64, 47.25], [52.64, 28.64, 47.25], [58.64, 28.64, 47.25], [64.64, 28.64, 47.25], [70.64, 28.64, 47.25], [76.64, 28.64, 47.25], [82.64, 28.64, 47.25], [88.64, 28.64, 47.25], [94.64, 28.64, 47.25], [-91.36, 34.64, 47.25], [-85.36, 34.64, 47.25], [-79.36, 34.64, 47.25], [-73.36, 34.64, 47.25], [-67.36, 34.64, 47.25], [-61.36, 34.64, 47.25], [-55.36, 34.64, 47.25], [-49.36, 34.64, 47.25], [-43.36, 34.64, 47.25], [-37.36, 34.64, 47.25], [-31.36, 34.64, 47.25], [-25.36, 34.64, 47.25], [-19.36, 34.64, 47.25], [-13.36, 34.64, 47.25], [-7.36, 34.64, 47.25], [-1.36, 34.64, 47.25], [4.64, 34.64, 47.25], [10.64, 34.64, 47.25], [16.64, 34.64, 47.25], [22.64, 34.64, 47.25], [28.64, 34.64, 47.25], [34.64, 34.64, 47.25], [40.64, 34.64, 47.25], [46.64, 34.64, 47.25], [52.64, 34.64, 47.25], [58.64, 34.64, 47.25], [64.64, 34.64, 47.25], [70.64, 34.64, 47.25], [76.64, 34.64, 47.25], [82.64, 34.64, 47.25], [88.64, 34.64, 47.25], [94.64, 34.64, 47.25], [-91.36, 40.64, 47.25], [-85.36, 40.64, 47.25], [-79.36, 40.64, 47.25], [-73.36, 40.64, 47.25], [-67.36, 40.64, 47.25], [-61.36, 40.64, 47.25], [-55.36, 40.64, 47.25], [-49.36, 40.64, 47.25], [-43.36, 40.64, 47.25], [-37.36, 40.64, 47.25], [-31.36, 40.64, 47.25], [-25.36, 40.64, 47.25], [-19.36, 40.64, 47.25], [-13.36, 40.64, 47.25], [-7.36, 40.64, 47.25], [-1.36, 40.64, 47.25], [4.64, 40.64, 47.25], [10.64, 40.64, 47.25], [16.64, 40.64, 47.25], [22.64, 40.64, 47.25], [28.64, 40.64, 47.25], [34.64, 40.64, 47.25], [40.64, 40.64, 47.25], [46.64, 40.64, 47.25], [52.64, 40.64, 47.25], [58.64, 40.64, 47.25], [64.64, 40.64, 47.25], [70.64, 40.64, 47.25], [76.64, 40.64, 47.25], [82.64, 40.64, 47.25], [-91.36, 46.64, 47.25], [-85.36, 46.64, 47.25], [-79.36, 46.64, 47.25], [-73.36, 46.64, 47.25], [-67.36, 46.64, 47.25], [-61.36, 46.64, 47.25], [-55.36, 46.64, 47.25], [-49.36, 46.64, 47.25], [-43.36, 46.64, 47.25], [-37.36, 46.64, 47.25], [-31.36, 46.64, 47.25], [-25.36, 46.64, 47.25], [-19.36, 46.64, 47.25], [-13.36, 46.64, 47.25], [-7.36, 46.64, 47.25], [-1.36, 46.64, 47.25], [4.64, 46.64, 47.25], [10.64, 46.64, 47.25], [16.64, 46.64, 47.25], [22.64, 46.64, 47.25], [28.64, 46.64, 47.25], [34.64, 46.64, 47.25], [40.64, 46.64, 47.25], [46.64, 46.64, 47.25], [52.64, 46.64, 47.25], [58.64, 46.64, 47.25], [64.64, 46.64, 47.25], [70.64, 46.64, 47.25], [76.64, 46.64, 47.25], [-91.36, 52.64, 47.25], [-85.36, 52.64, 47.25], [-79.36, 52.64, 47.25], [-73.36, 52.64, 47.25], [-67.36, 52.64, 47.25], [-61.36, 52.64, 47.25], [-55.36, 52.64, 47.25], [-49.36, 52.64, 47.25], [-43.36, 52.64, 47.25], [-37.36, 52.64, 47.25], [-31.36, 52.64, 47.25], [-25.36, 52.64, 47.25], [-19.36, 52.64, 47.25], [-13.36, 52.64, 47.25], [-7.36, 52.64, 47.25], [-1.36, 52.64, 47.25], [4.64, 52.64, 47.25], [10.64, 52.64, 47.25], [16.64, 52.64, 47.25], [22.64, 52.64, 47.25], [28.64, 52.64, 47.25], [34.64, 52.64, 47.25], [40.64, 52.64, 47.25], [46.64, 52.64, 47.25], [52.64, 52.64, 47.25], [58.64, 52.64, 47.25], [64.64, 52.64, 47.25], [-91.36, 58.64, 47.25], [-85.36, 58.64, 47.25], [-79.36, 58.64, 47.25], [-73.36, 58.64, 47.25], [-67.36, 58.64, 47.25], [-61.36, 58.64, 47.25], [-55.36, 58.64, 47.25], [-49.36, 58.64, 47.25], [-43.36, 58.64, 47.25], [-37.36, 58.64, 47.25], [-31.36, 58.64, 47.25], [-25.36, 58.64, 47.25], [-19.36, 58.64, 47.25], [-13.36, 58.64, 47.25], [-7.36, 58.64, 47.25], [-1.36, 58.64, 47.25], [4.64, 58.64, 47.25], [10.64, 58.64, 47.25], [16.64, 58.64, 47.25], [22.64, 58.64, 47.25], [28.64, 58.64, 47.25], [34.64, 58.64, 47.25], [40.64, 58.64, 47.25], [46.64, 58.64, 47.25], [52.64, 58.64, 47.25], [-91.36, 64.64, 47.25], [-85.36, 64.64, 47.25], [-79.36, 64.64, 47.25], [-73.36, 64.64, 47.25], [-67.36, 64.64, 47.25], [-61.36, 64.64, 47.25], [-55.36, 64.64, 47.25], [-49.36, 64.64, 47.25], [-43.36, 64.64, 47.25], [-37.36, 64.64, 47.25], [-31.36, 64.64, 47.25], [-25.36, 64.64, 47.25], [-19.36, 64.64, 47.25], [-13.36, 64.64, 47.25], [-7.36, 64.64, 47.25], [-1.36, 64.64, 47.25], [4.64, 64.64, 47.25], [10.64, 64.64, 47.25], [16.64, 64.64, 47.25], [22.64, 64.64, 47.25], [28.64, 64.64, 47.25], [34.64, 64.64, 47.25], [40.64, 64.64, 47.25], [-91.36, 70.64, 47.25], [-85.36, 70.64, 47.25], [-79.36, 70.64, 47.25], [-73.36, 70.64, 47.25], [-67.36, 70.64, 47.25], [-61.36, 70.64, 47.25], [-55.36, 70.64, 47.25], [-49.36, 70.64, 47.25], [-43.36, 70.64, 47.25], [-37.36, 70.64, 47.25], [-31.36, 70.64, 47.25], [-25.36, 70.64, 47.25], [-19.36, 70.64, 47.25], [-13.36, 70.64, 47.25], [-7.36, 70.64, 47.25], [-1.36, 70.64, 47.25], [4.64, 70.64, 47.25], [10.64, 70.64, 47.25], [16.64, 70.64, 47.25], [22.64, 70.64, 47.25], [28.64, 70.64, 47.25], [34.64, 70.64, 47.25], [40.64, 70.64, 47.25], [-91.36, 76.64, 47.25], [-85.36, 76.64, 47.25], [-79.36, 76.64, 47.25], [-73.36, 76.64, 47.25], [-67.36, 76.64, 47.25], [-61.36, 76.64, 47.25], [-55.36, 76.64, 47.25], [-49.36, 76.64, 47.25], [-43.36, 76.64, 47.25], [-37.36, 76.64, 47.25], [-31.36, 76.64, 47.25], [-25.36, 76.64, 47.25], [-19.36, 76.64, 47.25], [-13.36, 76.64, 47.25], [-7.36, 76.64, 47.25], [-1.36, 76.64, 47.25], [4.64, 76.64, 47.25], [10.64, 76.64, 47.25], [16.64, 76.64, 47.25], [22.64, 76.64, 47.25], [28.64, 76.64, 47.25], [34.64, 76.64, 47.25], [40.64, 76.64, 47.25], [-91.36, 82.64, 47.25], [-85.36, 82.64, 47.25], [-79.36, 82.64, 47.25], [-73.36, 82.64, 47.25], [-67.36, 82.64, 47.25], [-61.36, 82.64, 47.25], [-55.36, 82.64, 47.25], [-49.36, 82.64, 47.25], [-43.36, 82.64, 47.25], [-37.36, 82.64, 47.25], [-31.36, 82.64, 47.25], [-25.36, 82.64, 47.25], [-19.36, 82.64, 47.25], [-13.36, 82.64, 47.25], [-7.36, 82.64, 47.25], [-1.36, 82.64, 47.25], [4.64, 82.64, 47.25], [10.64, 82.64, 47.25], [16.64, 82.64, 47.25], [22.64, 82.64, 47.25], [28.64, 82.64, 47.25], [34.64, 82.64, 47.25], [40.64, 82.64, 47.25], [-85.36, 88.64, 47.25], [-79.36, 88.64, 47.25], [-73.36, 88.64, 47.25], [-67.36, 88.64, 47.25], [-61.36, 88.64, 47.25], [-55.36, 88.64, 47.25], [-49.36, 88.64, 47.25], [-43.36, 88.64, 47.25], [-37.36, 88.64, 47.25], [-31.36, 88.64, 47.25], [-25.36, 88.64, 47.25], [-19.36, 88.64, 47.25], [-13.36, 88.64, 47.25], [-7.36, 88.64, 47.25], [-1.36, 88.64, 47.25], [-85.36, 94.64, 47.25], [-79.36, 94.64, 47.25], [-73.36, 94.64, 47.25], [-67.36, 94.64, 47.25], [-61.36, 94.64, 47.25], [-55.36, 94.64, 47.25], [-49.36, 94.64, 47.25], [-43.36, 94.64, 47.25], [-37.36, 94.64, 47.25], [-31.36, 94.64, 47.25], [-25.36, 94.64, 47.25], [-19.36, 94.64, 47.25], [-13.36, 94.64, 47.25], [-49.36, 100.64, 47.25], [-43.36, 100.64, 47.25], [-37.36, 100.64, 47.25], [-31.36, 100.64, 47.25], [-25.36, 100.64, 47.25], [-55.36, -91.36, 53.25], [-49.36, -91.36, 53.25], [-43.36, -91.36, 53.25], [-37.36, -91.36, 53.25], [-1.36, -91.36, 53.25], [4.64, -91.36, 53.25], [10.64, -91.36, 53.25], [-79.36, -85.36, 53.25], [-73.36, -85.36, 53.25], [-67.36, -85.36, 53.25], [-61.36, -85.36, 53.25], [-55.36, -85.36, 53.25], [-49.36, -85.36, 53.25], [-43.36, -85.36, 53.25], [-37.36, -85.36, 53.25], [-31.36, -85.36, 53.25], [-25.36, -85.36, 53.25], [-19.36, -85.36, 53.25], [-13.36, -85.36, 53.25], [-7.36, -85.36, 53.25], [-1.36, -85.36, 53.25], [4.64, -85.36, 53.25], [10.64, -85.36, 53.25], [16.64, -85.36, 53.25], [22.64, -85.36, 53.25], [28.64, -85.36, 53.25], [34.64, -85.36, 53.25], [-91.36, -79.36, 53.25], [-85.36, -79.36, 53.25], [-79.36, -79.36, 53.25], [-73.36, -79.36, 53.25], [-67.36, -79.36, 53.25], [-61.36, -79.36, 53.25], [-55.36, -79.36, 53.25], [-49.36, -79.36, 53.25], [-43.36, -79.36, 53.25], [-37.36, -79.36, 53.25], [-31.36, -79.36, 53.25], [-25.36, -79.36, 53.25], [-19.36, -79.36, 53.25], [-13.36, -79.36, 53.25], [-7.36, -79.36, 53.25], [-1.36, -79.36, 53.25], [4.64, -79.36, 53.25], [10.64, -79.36, 53.25], [16.64, -79.36, 53.25], [22.64, -79.36, 53.25], [28.64, -79.36, 53.25], [-91.36, -73.36, 53.25], [-85.36, -73.36, 53.25], [-79.36, -73.36, 53.25], [-73.36, -73.36, 53.25], [-67.36, -73.36, 53.25], [-61.36, -73.36, 53.25], [-55.36, -73.36, 53.25], [-49.36, -73.36, 53.25], [-43.36, -73.36, 53.25], [-37.36, -73.36, 53.25], [-31.36, -73.36, 53.25], [-25.36, -73.36, 53.25], [-19.36, -73.36, 53.25], [-13.36, -73.36, 53.25], [-7.36, -73.36, 53.25], [-1.36, -73.36, 53.25], [4.64, -73.36, 53.25], [10.64, -73.36, 53.25], [16.64, -73.36, 53.25], [22.64, -73.36, 53.25], [-91.36, -67.36, 53.25], [-85.36, -67.36, 53.25], [-79.36, -67.36, 53.25], [-73.36, -67.36, 53.25], [-67.36, -67.36, 53.25], [-61.36, -67.36, 53.25], [-55.36, -67.36, 53.25], [-49.36, -67.36, 53.25], [-43.36, -67.36, 53.25], [-37.36, -67.36, 53.25], [-31.36, -67.36, 53.25], [-25.36, -67.36, 53.25], [-19.36, -67.36, 53.25], [-13.36, -67.36, 53.25], [-7.36, -67.36, 53.25], [-1.36, -67.36, 53.25], [4.64, -67.36, 53.25], [10.64, -67.36, 53.25], [16.64, -67.36, 53.25], [22.64, -67.36, 53.25], [-91.36, -61.36, 53.25], [-85.36, -61.36, 53.25], [-79.36, -61.36, 53.25], [-73.36, -61.36, 53.25], [-67.36, -61.36, 53.25], [-61.36, -61.36, 53.25], [-55.36, -61.36, 53.25], [-49.36, -61.36, 53.25], [-43.36, -61.36, 53.25], [-37.36, -61.36, 53.25], [-31.36, -61.36, 53.25], [-25.36, -61.36, 53.25], [-19.36, -61.36, 53.25], [-13.36, -61.36, 53.25], [-7.36, -61.36, 53.25], [-1.36, -61.36, 53.25], [4.64, -61.36, 53.25], [10.64, -61.36, 53.25], [16.64, -61.36, 53.25], [-91.36, -55.36, 53.25], [-85.36, -55.36, 53.25], [-79.36, -55.36, 53.25], [-73.36, -55.36, 53.25], [-67.36, -55.36, 53.25], [-61.36, -55.36, 53.25], [-55.36, -55.36, 53.25], [-49.36, -55.36, 53.25], [-43.36, -55.36, 53.25], [-37.36, -55.36, 53.25], [-31.36, -55.36, 53.25], [-25.36, -55.36, 53.25], [-19.36, -55.36, 53.25], [-13.36, -55.36, 53.25], [-7.36, -55.36, 53.25], [-1.36, -55.36, 53.25], [4.64, -55.36, 53.25], [10.64, -55.36, 53.25], [16.64, -55.36, 53.25], [-91.36, -49.36, 53.25], [-85.36, -49.36, 53.25], [-79.36, -49.36, 53.25], [-73.36, -49.36, 53.25], [-67.36, -49.36, 53.25], [-61.36, -49.36, 53.25], [-55.36, -49.36, 53.25], [-49.36, -49.36, 53.25], [-43.36, -49.36, 53.25], [-37.36, -49.36, 53.25], [-31.36, -49.36, 53.25], [-25.36, -49.36, 53.25], [-19.36, -49.36, 53.25], [-13.36, -49.36, 53.25], [-7.36, -49.36, 53.25], [-1.36, -49.36, 53.25], [4.64, -49.36, 53.25], [10.64, -49.36, 53.25], [-91.36, -43.36, 53.25], [-85.36, -43.36, 53.25], [-79.36, -43.36, 53.25], [-73.36, -43.36, 53.25], [-67.36, -43.36, 53.25], [-61.36, -43.36, 53.25], [-55.36, -43.36, 53.25], [-49.36, -43.36, 53.25], [-43.36, -43.36, 53.25], [-37.36, -43.36, 53.25], [-31.36, -43.36, 53.25], [-25.36, -43.36, 53.25], [-19.36, -43.36, 53.25], [-13.36, -43.36, 53.25], [-7.36, -43.36, 53.25], [-1.36, -43.36, 53.25], [4.64, -43.36, 53.25], [10.64, -43.36, 53.25], [-91.36, -37.36, 53.25], [-85.36, -37.36, 53.25], [-79.36, -37.36, 53.25], [-73.36, -37.36, 53.25], [-67.36, -37.36, 53.25], [-61.36, -37.36, 53.25], [-55.36, -37.36, 53.25], [-49.36, -37.36, 53.25], [-43.36, -37.36, 53.25], [-37.36, -37.36, 53.25], [-31.36, -37.36, 53.25], [-25.36, -37.36, 53.25], [-19.36, -37.36, 53.25], [-13.36, -37.36, 53.25], [-7.36, -37.36, 53.25], [-1.36, -37.36, 53.25], [4.64, -37.36, 53.25], [-91.36, -31.36, 53.25], [-85.36, -31.36, 53.25], [-79.36, -31.36, 53.25], [-73.36, -31.36, 53.25], [-67.36, -31.36, 53.25], [-61.36, -31.36, 53.25], [-55.36, -31.36, 53.25], [-49.36, -31.36, 53.25], [-43.36, -31.36, 53.25], [-37.36, -31.36, 53.25], [-31.36, -31.36, 53.25], [-25.36, -31.36, 53.25], [-19.36, -31.36, 53.25], [-13.36, -31.36, 53.25], [-7.36, -31.36, 53.25], [-1.36, -31.36, 53.25], [4.64, -31.36, 53.25], [-91.36, -25.36, 53.25], [-85.36, -25.36, 53.25], [-79.36, -25.36, 53.25], [-73.36, -25.36, 53.25], [-67.36, -25.36, 53.25], [-61.36, -25.36, 53.25], [-55.36, -25.36, 53.25], [-49.36, -25.36, 53.25], [-43.36, -25.36, 53.25], [-37.36, -25.36, 53.25], [-31.36, -25.36, 53.25], [-25.36, -25.36, 53.25], [-19.36, -25.36, 53.25], [-13.36, -25.36, 53.25], [-7.36, -25.36, 53.25], [-1.36, -25.36, 53.25], [-91.36, -19.36, 53.25], [-85.36, -19.36, 53.25], [-79.36, -19.36, 53.25], [-73.36, -19.36, 53.25], [-67.36, -19.36, 53.25], [-61.36, -19.36, 53.25], [-55.36, -19.36, 53.25], [-49.36, -19.36, 53.25], [-43.36, -19.36, 53.25], [-37.36, -19.36, 53.25], [-31.36, -19.36, 53.25], [-91.36, -13.36, 53.25], [-85.36, -13.36, 53.25], [-79.36, -13.36, 53.25], [-73.36, -13.36, 53.25], [-67.36, -13.36, 53.25], [-61.36, -13.36, 53.25], [-55.36, -13.36, 53.25], [-49.36, -13.36, 53.25], [-43.36, -13.36, 53.25], [-37.36, -13.36, 53.25], [-31.36, -13.36, 53.25], [-91.36, -7.36, 53.25], [-85.36, -7.36, 53.25], [-79.36, -7.36, 53.25], [-73.36, -7.36, 53.25], [-67.36, -7.36, 53.25], [-61.36, -7.36, 53.25], [-55.36, -7.36, 53.25], [-49.36, -7.36, 53.25], [-43.36, -7.36, 53.25], [-37.36, -7.36, 53.25], [-31.36, -7.36, 53.25], [-91.36, -1.36, 53.25], [-85.36, -1.36, 53.25], [-79.36, -1.36, 53.25], [-73.36, -1.36, 53.25], [-67.36, -1.36, 53.25], [-61.36, -1.36, 53.25], [-55.36, -1.36, 53.25], [-49.36, -1.36, 53.25], [-43.36, -1.36, 53.25], [-37.36, -1.36, 53.25], [-31.36, -1.36, 53.25], [-91.36, 4.64, 53.25], [-85.36, 4.64, 53.25], [-79.36, 4.64, 53.25], [-73.36, 4.64, 53.25], [-67.36, 4.64, 53.25], [-61.36, 4.64, 53.25], [-55.36, 4.64, 53.25], [-49.36, 4.64, 53.25], [-43.36, 4.64, 53.25], [-37.36, 4.64, 53.25], [-31.36, 4.64, 53.25], [-91.36, 10.64, 53.25], [-85.36, 10.64, 53.25], [-79.36, 10.64, 53.25], [-73.36, 10.64, 53.25], [-67.36, 10.64, 53.25], [-61.36, 10.64, 53.25], [-55.36, 10.64, 53.25], [-49.36, 10.64, 53.25], [-43.36, 10.64, 53.25], [-37.36, 10.64, 53.25], [-31.36, 10.64, 53.25], [-91.36, 16.64, 53.25], [-85.36, 16.64, 53.25], [-79.36, 16.64, 53.25], [-73.36, 16.64, 53.25], [-67.36, 16.64, 53.25], [-61.36, 16.64, 53.25], [-55.36, 16.64, 53.25], [-49.36, 16.64, 53.25], [-43.36, 16.64, 53.25], [-37.36, 16.64, 53.25], [-31.36, 16.64, 53.25], [-91.36, 22.64, 53.25], [-85.36, 22.64, 53.25], [-79.36, 22.64, 53.25], [-73.36, 22.64, 53.25], [-67.36, 22.64, 53.25], [-61.36, 22.64, 53.25], [-55.36, 22.64, 53.25], [-49.36, 22.64, 53.25], [-43.36, 22.64, 53.25], [-37.36, 22.64, 53.25], [-31.36, 22.64, 53.25], [-91.36, 28.64, 53.25], [-85.36, 28.64, 53.25], [-79.36, 28.64, 53.25], [-73.36, 28.64, 53.25], [-67.36, 28.64, 53.25], [-61.36, 28.64, 53.25], [-55.36, 28.64, 53.25], [-49.36, 28.64, 53.25], [-43.36, 28.64, 53.25], [-37.36, 28.64, 53.25], [-31.36, 28.64, 53.25], [-91.36, 34.64, 53.25], [-85.36, 34.64, 53.25], [-79.36, 34.64, 53.25], [-73.36, 34.64, 53.25], [-67.36, 34.64, 53.25], [-61.36, 34.64, 53.25], [-55.36, 34.64, 53.25], [-49.36, 34.64, 53.25], [-43.36, 34.64, 53.25], [-37.36, 34.64, 53.25], [-31.36, 34.64, 53.25], [-85.36, 40.64, 53.25], [-79.36, 40.64, 53.25], [-73.36, 40.64, 53.25], [-67.36, 40.64, 53.25], [-61.36, 40.64, 53.25], [-55.36, 40.64, 53.25], [-49.36, 40.64, 53.25], [-43.36, 40.64, 53.25], [-37.36, 40.64, 53.25], [-31.36, 40.64, 53.25], [-85.36, 46.64, 53.25], [-79.36, 46.64, 53.25], [-73.36, 46.64, 53.25], [-67.36, 46.64, 53.25], [-61.36, 46.64, 53.25], [-55.36, 46.64, 53.25], [-49.36, 46.64, 53.25], [-43.36, 46.64, 53.25], [-37.36, 46.64, 53.25], [-85.36, 52.64, 53.25], [-79.36, 52.64, 53.25], [-73.36, 52.64, 53.25], [-67.36, 52.64, 53.25], [-61.36, 52.64, 53.25], [-55.36, 52.64, 53.25], [-49.36, 52.64, 53.25], [-43.36, 52.64, 53.25], [-37.36, 52.64, 53.25]], values: [-0.08, -0.14, -0.13, -0.03, 0.25, -0.31, 0.1, 0.03, -0.07, -0.12, -0.16, 0.01, -0.12, -0.03, -0.11, 0.38, 0.04, -0.13, -0.06, -0.09, -0.2, -0.06, 0.43, 0.32, 0.25, 0.34, 0.58, 0.16, -0.1, -0.07, -0.04, -0.46, 0.03, 0, 0.07, 0.46, 0.21, 0.28, 0.27, 0.55, 0.35, -0.01, -0.12, -0.2, -0.56, -0.02, 0.06, 0.2, -0.1, -0.43, 0.14, 0.23, 0.15, 0.31, 0.2, 0.19, 0.36, -0.07, 0.08, 0.04, -0.11, 0.15, 0.06, 0.24, -0.06, -0.45, -0.73, -0.74, -0.68, -0.14, 0.14, 0.28, 0.1, 0.29, 0.12, 0.31, 0.35, 0.37, 0.08, 0.32, 0.11, -0.02, 0.13, 0.18, 0.07, -0.57, -0.71, -0.71, -0.67, -0.71, -0.72, 0.3, 0.2, 0.08, 0.05, 0.18, 0.32, 0.39, 0.12, 0.05, 0.15, 0.23, -0.29, 0.18, 0.54, -0.12, -0.65, -0.71, -0.73, -0.69, -0.67, -0.71, 0.26, 0.03, 0.26, 0.29, 0.19, 0.31, 0.45, 0.04, 0.27, 0.09, 0.5, 0.53, 0.12, 0.14, 0.43, -0.2, -0.7, -0.68, -0.71, -0.69, -0.64, -0.68, 0.16, -0.48, 0.16, 0.23, -0.14, 0.15, 0.14, -0.21, -0.36, 0, 0.42, 0.41, 0.39, 0.51, 0.19, -0.38, -0.69, -0.72, -0.71, -0.7, -0.62, -0.7, 0.46, 0.05, -0.41, -0.22, -0.06, -0.04, -0.01, -0.37, -0.13, -0.16, 0.33, 0.72, 0.7, 0.52, 0.48, -0.11, -0.68, -0.74, -0.71, -0.7, -0.74, -0.46, -0.72, -0.09, 0.13, 0.34, -0.13, -0.09, 0.01, 0.07, -0.18, -0.16, 0.07, 0.58, 0.41, 0.46, 0.46, -0.01, -0.47, -0.73, -0.7, -0.7, -0.7, -0.72, -0.71, -0.72, 0.34, 0.34, 0.06, 0.16, -0.05, 0.04, -0.16, -0.06, -0.03, 0.2, 0.36, 0.85, 0.54, 0.41, 0.07, -0.48, -0.7, -0.72, -0.73, -0.7, -0.72, -0.72, -0.73, -0.71, 0, 0.44, 0.47, 0.18, -0.13, 0.38, 0.17, 0.28, 0.55, 0.03, 0.12, 0.29, 0.12, -0.37, -0.58, -0.71, -0.72, -0.69, -0.74, -0.72, -0.73, -0.73, -0.7, -0.71, -0.56, -0.46, -0.16, 0.07, 0.16, -0.12, 0.01, -0.08, -0.16, 0.2, -0.08, -0.44, -0.68, -0.71, -0.7, -0.74, -0.73, -0.7, -0.72, -0.73, -0.72, -0.73, -0.7, -0.73, -0.72, -0.71, -0.56, -0.03, -0.11, -0.14, -0.01, -0.13, 0.1, -0.56, -0.71, -0.67, -0.71, -0.69, -0.73, -0.76, -0.71, -0.71, -0.74, -0.72, -0.7, -0.7, -0.69, -0.74, -0.73, -0.36, -0.1, -0.39, 0.02, -0.41, -0.14, -0.71, -0.73, -0.62, -0.7, -0.69, -0.39, -0.68, -0.67, 0.66, -0.66, -0.67, 1.05, -0.66, -0.65, 1.32, -0.69, -0.64, 0.5, -0.66, -0.54, -0.59, 0.32, -0.69, -0.6, -0.06, 0.24, -0.51, -0.59, 0.72, 0.4, 2.11, 1, 0.95, 0.63, 0.04, -0.07, -0.08, 0.02, 0.13, 0.03, -0.4, -0.2, 0.15, -0.01, -0.43, -0.64, -0.33, 0.31, -0.05, 0.16, 0.33, 0, -0.26, 0.85, 0.93, 0.05, 0.03, 0.08, -0.1, 0.25, 0.24, -0.14, 0.43, 0.15, -0.48, -0.62, 0.47, 0.25, -0.35, -0.36, -0.4, -0.16, -0.02, -0.31, -0.14, -0.07, 0.14, 0.11, 0.47, 0.33, 0.32, 0.43, 0.33, 0.31, 0.02, -0.2, 0.08, -0.63, 0.42, 0.12, 0.03, -0.11, -0.09, -0.03, -0.15, -0.37, 0.18, -0.02, -0.07, 0.57, 0.16, 0.38, 0.59, 0.65, 0.65, 0.52, 0.42, 0.68, -0.36, -0.18, 0.05, -0.57, 0.39, 1.17, 0.74, 0.1, 0.39, 0.84, -0.08, -0.08, -0.28, -0.34, -0.12, 0.03, 0.23, 1.39, 0.54, 0.46, 0.57, 0.02, 0.69, 0.61, 0.28, 0.3, -0.2, -0.26, 0.02, -0.57, -0.67, 0.19, -0.31, 0.24, 0.34, 0, 0.44, 0.29, 0.09, -0.12, -0.54, -0.01, 0.1, 0.57, 0.38, 0.1, 0.05, 0.59, -0.13, 0.62, 0.6, 0.46, 0.39, -0.42, -0.41, -0.28, -0.64, -0.67, 0.2, 0.19, -0.34, 0.37, 0.05, 0.07, 0.08, 0.44, 0.01, 0.15, -0.35, 0.05, 0.05, 0.53, 0.01, 0.05, 0.28, 0.15, -0.12, 0.06, 0.57, 0.54, 0.37, -0.5, -0.52, -0.63, -0.63, -0.71, 0.13, 0.03, -0.02, -0.31, -0.05, 0.12, 0.01, 0.39, 0.41, -0.08, -0.22, -0.12, 0.24, 0.67, 0.03, -0.02, 0.23, -0.06, 0.18, 0.07, 0.33, 0.71, -0.11, -0.66, -0.47, -0.68, -0.64, -0.72, 0.17, 0.12, 0.02, 0.01, -0.49, -0.02, 0.1, 0.03, 0.25, 0.73, 0.17, 0.11, 0.05, 0.23, 0.02, -0.03, 0.05, 0.14, -0.24, 0.4, -0.06, 0.35, 0.68, -0.22, -0.68, -0.54, -0.69, -0.65, -0.67, -0.11, 0.25, 0.09, 0.04, -0.64, -0.21, 0.08, -0.18, -0.05, 0.52, 0.41, 0.27, 0.3, 0.33, -0.11, -0.42, 0.52, 0.09, 0.11, -0.07, -0.15, 0.38, 0.83, -0.28, -0.7, -0.6, -0.7, -0.7, -0.68, -0.16, 0.18, 0.1, 0.02, -0.17, 0.3, 0.5, 0.24, -0.01, 0.16, 0.22, 0.11, 0.08, 0.24, -0.02, -0.11, 0.23, 0.66, 0.24, 0, -0.02, 0.66, 0.92, -0.4, -0.69, -0.65, -0.66, -0.59, -0.72, -0.73, -0.37, 0.33, 0.31, -0.16, 0.02, 0.39, 0.35, 0, 0.21, 0.39, 0.18, -0.05, 0.16, 0.26, 0.35, 0, 0.06, 0.75, 0.98, -0.03, 0.08, 0.88, 0.71, -0.52, -0.68, -0.68, -0.64, -0.64, -0.72, -0.68, -0.3, 0.4, 0.34, -0.06, -0.18, 0.76, 0.73, -0.27, -0.02, -0.14, 0.49, 0.01, 0.31, 0.23, -0.16, -0.21, -0.14, 0.22, 1.1, -0.05, 0.35, 0.66, 0.12, -0.66, -0.7, -0.64, -0.65, -0.59, -0.73, -0.7, -0.69, -0.4, 0.03, 0.46, 0.5, 0.15, 0.76, 0.33, -0.65, -0.46, -0.22, 0.71, 0.24, 0.83, 0.79, -0.06, -0.69, -0.71, 0.06, 0.23, -0.17, 0.48, 0.7, -0.12, -0.68, -0.72, -0.66, -0.71, -0.63, -0.73, -0.7, -0.69, -0.66, -0.16, 0.56, 0.66, 0.44, 0.57, -0.16, -0.67, -0.7, -0.05, 0.54, 0.05, 0.32, 0.42, -0.08, -0.7, -0.45, 0.09, 0.13, 0.53, 0.75, 0.14, -0.63, -0.72, -0.72, -0.69, -0.67, 0.2, -0.71, -0.68, -0.71, -0.72, -0.7, -0.46, -0.03, 0.49, 0.79, 0.52, 0.79, 0.45, -0.34, -0.14, 0.57, -0.24, -0.26, 0.51, -0.17, -0.37, 0.37, 1.01, 0.51, 0.73, 0.47, -0.26, -0.69, -0.72, -0.71, -0.72, -0.7, -0.71, -0.75, -0.69, -0.72, -0.69, -0.69, -0.7, -0.41, 0.12, 0.5, 0.62, 0.75, 0.87, -0.14, 0.17, 0.37, 0.19, 0.1, 0.57, 0.45, -0.11, 0.8, 0.91, 0.61, 0.15, -0.41, -0.72, -0.73, -0.68, -0.72, -0.69, -0.68, -0.75, -0.73, -0.7, -0.69, -0.72, -0.71, -0.69, -0.7, -0.7, -0.69, -0.51, 0, 0.32, 0.62, 1.05, 0.46, 0.45, 0.56, 0.37, 0.19, 0.78, 0.61, 0.38, 0.43, 0.19, -0.3, -0.55, -0.71, -0.73, -0.72, -0.72, -0.71, -0.69, -0.7, -0.74, -0.71, -0.73, -0.73, -0.73, -0.71, -0.7, -0.73, -0.71, -0.7, -0.71, -0.71, -0.5, -0.31, -0.06, 0.17, 0.22, 0.74, -0.55, -0.06, 0.56, 0.19, -0.1, -0.42, -0.56, -0.74, -0.71, -0.72, -0.7, -0.71, -0.72, -0.71, -0.7, -0.66, -0.69, -0.73, -0.72, -0.73, -0.72, -0.72, -0.74, -0.7, -0.71, -0.72, -0.71, -0.71, -0.72, -0.6, -0.2, 0.08, 0.15, -0.06, -0.06, -0.22, -0.72, -0.72, -0.74, -0.74, -0.72, -0.71, -0.7, -0.72, -0.68, -0.72, -0.73, -0.7, -0.73, -0.72, -0.71, -0.74, -0.73, -0.72, -0.7, -0.72, -0.73, -0.71, -0.7, -0.72, -0.14, 0.08, -0.28, -0.08, -0.03, -0.35, -0.72, -0.7, -0.75, 0.13, 0, -0.71, -0.67, -0.73, -0.7, -0.69, -0.72, -0.7, -0.71, -0.73, -0.67, -0.68, -0.7, -0.65, -0.67, -0.66, -0.69, -0.56, -0.69, -0.71, -0.71, -0.67, -0.68, -0.68, -0.69, -0.69, -0.71, -0.7, 0.14, -0.3, -0.63, -0.67, -0.7, -0.73, -0.7, -0.69, -0.7, -0.69, -0.69, -0.23, 0.09, 0.17, -0.31, -0.69, -0.67, -0.7, -0.71, -0.72, -0.68, -0.71, -0.67, -0.26, 0.06, 0.13, 0.26, -0.49, -0.68, -0.7, -0.66, -0.72, -0.72, -0.67, -0.67, -0.26, -0.3, -0.14, -0.1, 0.05, -0.08, -0.11, -0.03, 0.04, 0.06, -0.56, -0.7, -0.68, -0.69, -0.67, -0.68, -0.68, -0.63, -0.1, -0.01, 0.03, -0.07, -0.14, 0.1, 0.25, -0.03, 0.2, -0.17, 0.08, -0.3, -0.68, -0.7, -0.67, -0.7, -0.66, -0.69, -0.65, 0.25, 0.22, 0.26, 0.13, 0.12, 0.41, 0.27, 0.32, 0.42, 0.32, 0.34, 0.26, -0.28, 0.17, -0.65, -0.69, -0.71, -0.71, -0.68, -0.66, -0.61, 0.11, 0.2, 0.23, 0.58, -0.06, 0.28, 0.6, 0.26, 0.09, 0.58, 0.47, 0.25, -0.12, 0.21, -0.07, 0.02, -0.45, -0.68, -0.63, -0.14, -0.68, -0.65, -0.67, -0.18, 0.12, 0.14, 0.05, 0.2, 0.03, 2.59, 2.51, 1.16, 3.06, 0.67, 0.15, 0.4, 0.43, -0.02, 0.3, 0.09, -0.07, 0.08, -0.6, -0.59, -0.12, -0.64, -0.66, -0.59, -0.2, -0.06, 0.24, 0.22, 0.24, 0.57, -0.22, 0.46, 1.99, 0.28, 0.05, 2.32, 1.88, 0.01, 0.44, 0.34, 0.2, 0.15, 0.12, 0.1, 0.41, -0.16, -0.4, 0.58, -0.64, -0.59, -0.62, -0.48, -0.31, 0.03, -0.04, -0.16, 0.32, 0, 0.49, 0.16, -0.03, 0.43, 0.57, 0.25, 0.55, 0.14, -0.26, 1.53, 0.37, -0.07, 0.36, 0.2, 0.06, 0.43, 0.1, 0.19, 0.54, -0.58, -0.64, -0.59, -0.16, 0.16, -0.18, 0.14, 0.22, 0.2, 0.26, 0.22, 0.37, 0.65, 0.02, -0.21, -0.01, -0.06, -0.11, 0.17, -0.18, -0.07, 0.03, 0.2, 0.23, 0.44, 0.55, 0.57, 0.43, 0.34, 0.49, 0.18, -0.63, -0.61, -0.6, 0.02, -0.58, 0.06, 0.1, 0.3, 0.39, 0.55, 0.5, 0.33, 0.48, 0.31, 0.1, 0.03, 0.13, 0.09, -0.06, 0.29, -0.1, 0.14, -0.05, 0.46, 0.25, -0.16, 0.6, 1.3, 0.96, 0.64, 0.54, 0.42, -0.03, -0.4, -0.61, -0.56, -0.66, -0.66, -0.01, -0.6, -0.37, 0.3, 0.48, 0.43, 0.42, 0.75, 1.47, 0.51, 0.09, 1.04, 1.03, -0.16, 0.22, -0.09, -0.05, 0.05, 0.12, 0.46, 1.4, 0.67, 0.52, 0.57, 0.28, 0.58, 0.84, 0.6, 0.64, -0.18, -0.55, -0.63, -0.54, -0.54, -0.62, -0.16, -0.44, -0.33, -0.01, 0.19, 0.44, 0.54, 1.06, 0.13, 0.34, 0.44, 0.79, 0.78, 0.64, 0.49, 0.35, -0.43, 0.27, 0.29, 0.87, 0.92, 0.77, 0.87, 0.73, 0.09, 1, 0.64, 0.65, 0.91, -0.04, -0.64, -0.65, 0.03, -0.65, -0.63, -0.56, -0.34, -0.65, -0.41, 0.43, 0.49, 0.55, 1, -0.15, 0.6, 0.2, 0.27, 0.37, 0.85, 0.15, -0.24, -0.59, -0.5, 0.05, 0.68, 0.16, 0.19, -0.04, -0.01, 0.06, 0.22, 0.81, 0.8, 0.94, -0.31, -0.68, -0.65, -0.17, -0.72, -0.67, -0.66, -0.16, -0.55, -0.5, 0.35, 0.67, 0.53, 0.09, 0.03, 0.14, 0.13, 0.2, -0.01, 0.71, -0.09, -0.35, -0.64, -0.47, -0.16, 0.52, -0.04, 0.18, 0.04, 0.23, -0.11, -0.2, 0.48, 1.03, 0.66, -0.42, -0.69, -0.71, -0.6, -0.63, -0.69, -0.69, -0.2, -0.36, -0.65, -0.08, 0.78, 0.39, 0.03, 0.01, -0.07, 0.25, -0.11, -0.02, 0.31, 0.32, -0.46, -0.5, -0.61, 0.23, 0.18, -0.08, -0.01, 0.1, -0.25, -0.23, -0.13, 0.3, 1.14, 0.26, -0.64, -0.68, -0.69, -0.66, -0.72, -0.73, -0.67, -0.08, -0.24, -0.67, -0.42, 0.66, 0.33, -0.08, 0.02, -0.46, -0.14, 0.48, -0.27, 0.11, 0.62, 0.2, -0.49, -0.1, 0.39, 0.13, 0.07, 0.38, 0.11, 0.13, -0.16, -0.17, 0.43, 1.14, -0.02, -0.69, -0.68, -0.68, -0.7, -0.7, -0.62, -0.04, -0.29, -0.69, -0.46, 0.44, 0.67, 0.2, -0.07, -0.43, 0.67, 1.26, 1.19, -0.08, 0.49, 0.75, -0.27, 0.14, 1.42, 0.42, 0.24, 0.45, 0.82, 0.78, -0.27, -0.16, 0.83, 1.2, -0.02, -0.69, -0.71, -0.43, -0.08, -0.72, -0.64, -0.02, -0.45, -0.68, -0.7, 0.25, 0.97, 0.36, -0.14, -0.05, 1.05, 0.44, -0.08, -0.15, 0.78, 1.42, -0.05, 0.98, 1.4, -0.17, -0.45, -0.11, 0.66, 0.69, 0.36, -0.28, 0.65, 0.91, -0.37, -0.69, -0.71, -0.16, 0.11, -0.72, -0.51, -0.06, -0.68, -0.71, -0.69, -0.09, 1.06, 0.72, 0.18, 0.46, 1.08, 0.3, -0.23, 0.01, 0.53, 1.33, 0.42, 1.03, 0.94, 0.07, -0.5, -0.26, 0.41, 0.9, 0.72, 0.03, 0.74, 0.33, -0.65, -0.67, -0.71, 0.03, -0.68, -0.73, -0.16, -0.04, -0.67, -0.69, -0.67, -0.35, 0.45, 0.48, -0.16, 0.57, 0.84, 0.32, -0.42, -0.59, 0.23, 0.98, 0.36, 1.13, 0.67, 0.07, -0.34, -0.49, -0.09, -0.23, -0.09, 0.72, 0.74, -0.12, -0.67, -0.68, -0.69, -0.26, -0.03, -0.72, -0.74, -0.14, -0.68, -0.67, -0.68, -0.69, -0.1, 0.89, 0.29, 0.16, -0.16, -0.41, -0.26, -0.54, 0.31, 1.06, 0.5, 0.57, 1.04, 0.22, -0.37, -0.32, -0.18, 0.03, 0.52, 0.74, 0.47, -0.52, -0.69, -0.63, -0.7, -0.68, 0.31, -0.71, -0.69, 0.03, -0.67, -0.7, -0.69, -0.71, -0.49, 0.3, 0.89, 0.51, 0.47, 0.04, -0.01, -0.36, 0.49, 1.16, 0.59, 0.54, 0.89, 0.26, -0.23, 0.37, 0.55, 1.01, 0.73, 0.71, -0.02, -0.69, -0.68, -0.7, -0.68, -0.69, -0.7, -0.72, -0.69, -0.14, -0.68, -0.69, -0.69, -0.73, -0.69, -0.18, 0.48, 0.8, 0.85, 1.18, 0.46, 0.08, 0.02, 1.01, 0.88, 0.52, 0.89, -0.14, 0.33, 0.42, 0.75, 0.79, 0.38, -0.36, -0.68, -0.71, -0.71, -0.71, -0.69, -0.72, -0.69, -0.72, -0.73, -0.68, -0.71, -0.71, -0.72, -0.68, -0.7, -0.7, -0.44, 0.06, 0.46, 0.64, 1.09, 0.84, -0.07, 0.85, 0.41, -0.01, 1.3, 0.1, 0.79, 0.72, 0.27, -0.18, -0.57, -0.71, -0.69, -0.7, -0.69, -0.72, -0.66, -0.69, -0.72, -0.74, -0.7, -0.7, -0.7, -0.69, -0.71, -0.72, -0.69, -0.72, -0.71, -0.7, -0.51, -0.23, -0.07, 0.06, 0.24, 0.75, -0.43, -0.18, 0.7, 0.26, -0.12, -0.37, -0.65, -0.68, -0.71, -0.71, -0.7, -0.71, -0.7, -0.71, -0.7, -0.72, -0.71, -0.75, -0.71, -0.72, -0.72, -0.7, -0.72, -0.68, -0.7, -0.71, -0.72, -0.71, -0.71, -0.72, -0.7, -0.59, -0.33, 0.14, 0.41, -0.11, 0.05, -0.24, -0.66, -0.7, -0.72, -0.74, -0.7, -0.71, -0.7, -0.72, -0.71, -0.69, -0.7, -0.71, -0.7, -0.72, -0.71, -0.69, -0.72, -0.73, -0.74, -0.71, -0.72, -0.74, -0.72, -0.72, -0.7, -0.72, -0.06, -0.12, -0.12, 0.01, -0.47, -0.74, -0.71, -0.71, -0.67, -0.68, -0.69, -0.7, -0.7, -0.69, -0.69, -0.69, -0.7, -0.72, -0.72, -0.69, -0.7, -0.72, -0.7, -0.72, -0.34, 0.58, 0.28, 0.23, -0.71, -0.7, -0.7, -0.69, -0.69, -0.67, -0.67, -0.67, -0.67, -0.67, -0.66, -0.68, -0.68, -0.71, -0.71, -0.69, -0.7, -0.7, -0.72, -0.69, -0.71, -0.67, -0.67, -0.67, -0.67, -0.68, -0.67, -0.66, -0.67, -0.68, -0.67, -0.69, -0.68, -0.7, -0.69, -0.71, -0.69, -0.71, -0.69, -0.68, -0.69, -0.7, -0.68, -0.68, -0.7, -0.69, -0.68, -0.66, -0.65, -0.67, -0.68, -0.7, -0.69, -0.7, -0.71, -0.69, -0.71, -0.71, -0.67, -0.7, -0.71, -0.69, -0.71, -0.72, -0.7, -0.66, -0.71, -0.71, -0.69, -0.68, -0.66, -0.69, -0.67, -0.59, 0.04, 0.27, 0.24, 0, 0.02, 0.39, 0.46, 0.23, -0.26, -0.67, -0.7, -0.71, -0.7, -0.67, -0.69, -0.67, -0.68, -0.67, 0.19, -0.67, -0.67, -0.69, -0.72, -0.69, -0.69, -0.67, -0.72, -0.7, -0.7, -0.29, 0.47, 0.5, 0.36, 0.19, 0.27, 0.24, 0.15, 0.22, 0.37, 0.48, 0.03, -0.46, -0.66, -0.68, -0.71, -0.7, -0.71, -0.7, -0.69, -0.69, -0.7, -0.69, -0.68, -0.7, -0.72, -0.68, -0.7, -0.67, -0.72, -0.67, -0.72, -0.7, -0.2, 0.52, 0.37, -0.03, -0.03, -0.08, 0.06, -0.19, -0.22, -0.16, -0.01, 0.45, 0.51, -0.01, -0.47, -0.67, -0.7, -0.67, -0.7, -0.69, -0.71, -0.7, -0.69, -0.22, -0.7, -0.67, -0.7, -0.73, -0.71, -0.72, -0.72, -0.67, -0.69, -0.33, 0.27, 0.44, -0.2, -0.25, -0.15, -0.06, 0.05, 0, 0.1, -0.14, -0.13, 0.05, 0.36, 0.47, 0.04, -0.61, -0.71, -0.7, -0.7, -0.68, -0.69, -0.67, -0.68, -0.37, -0.73, -0.72, -0.7, -0.69, -0.69, -0.73, -0.72, -0.69, -0.57, 0.04, 0.34, 0, -0.14, -0.12, 0.31, 0.38, 0.23, 0.42, 0.21, 0.14, -0.04, -0.07, -0.08, 0.28, 0.46, 0.02, -0.66, -0.69, -0.69, -0.72, -0.7, -0.68, -0.68, 0.12, 0.18, -0.7, -0.7, -0.72, -0.72, -0.71, -0.68, -0.66, -0.19, 0.1, -0.12, -0.08, -0.16, 0.03, -0.09, 0.07, 0.44, 0.47, 0.32, 0.02, 0.13, 0.08, 0.07, 0.17, 0.18, 0.52, -0.13, -0.68, -0.7, -0.69, -0.67, -0.68, -0.64, -0.51, 0.41, -0.69, -0.64, -0.71, -0.69, -0.66, -0.69, -0.6, 0.2, 0.11, 0.14, 0.02, 0.27, -0.03, 0.32, 0.43, 0.51, 0.46, 0.42, 0.58, 0.32, -0.02, 0.3, 0.22, 0.42, 0.33, 0.41, -0.62, -0.7, -0.7, -0.69, -0.65, -0.63, -0.67, 0.13, -0.68, -0.63, -0.69, -0.7, -0.69, -0.67, -0.22, 0.29, -0.13, 0.62, 0.36, 0.12, 0.15, 0.37, 0.28, 0.16, -0.07, 0.19, 0.17, 0.28, 0.05, -0.13, 0.06, 0.95, -0.14, 0.76, -0.16, -0.66, -0.67, -0.35, -0.66, -0.23, -0.67, -0.67, -0.67, -0.65, -0.69, -0.68, -0.68, -0.65, 0.26, -0.27, 0.28, 0.07, 0.28, 0.18, 0.46, 0.2, -0.07, 0.62, 0.63, 0.48, -0.07, -0.04, 0.23, 0.15, 0.07, 0.27, 0.52, -0.19, 0.43, -0.51, -0.38, -0.16, -0.64, 0.1, -0.7, -0.67, -0.66, -0.6, -0.69, -0.69, -0.68, -0.61, 0.15, -0.13, 0.4, 0.2, 0.34, 0.56, 0.46, 0.29, 1.49, 2.42, 1.89, 2.15, 0.03, 0.44, 0.48, 0.64, 0.2, 0.03, 0.07, 0.11, 0.28, -0.56, -0.15, 0.27, -0.65, -0.13, -0.62, -0.66, -0.62, -0.67, 0.05, -0.29, -0.63, -0.42, -0.02, 0.08, 0.41, 0.29, 0.44, 0.61, 0.49, 0.17, 1.57, 0.73, 0.73, 2.32, 0.84, 0.53, 0.46, 0.79, 0.75, 0.28, -0.28, -0.47, 0.47, 0.26, 0.09, 0.05, -0.61, -0.62, -0.62, -0.6, -0.65, -0.64, -0.65, 0.19, -0.13, -0.44, -0.08, 0.24, 0.11, 0.01, 0.37, 0.96, 1.07, 0.31, -0.09, 0.76, 1.96, 1.85, 2.17, 0.31, -0.08, 0.76, 0.72, 0.5, 0.44, -0.17, -0.11, 0.3, 0.06, -0.14, -0.05, -0.64, -0.62, -0.59, -0.15, -0.72, -0.66, -0.56, 0.08, 0.41, -0.02, 0.28, 0.33, 0.02, 0.16, 0.21, 0.02, 0.54, 0.38, 0.01, 0.47, 0.83, 0.63, 1.12, 0.36, 0.17, 0.42, 0.04, 0.06, 0.94, 0.59, 0.49, 0.27, 0.22, 0.03, -0.27, -0.63, -0.56, -0.24, -0.05, -0.65, -0.57, -0.65, -0.4, 0.47, 0.2, 0.1, 0.61, 0.67, 0.55, 0.62, 0.39, 0.15, 0.27, 0.42, 0.23, 0.21, 0.31, 0.16, 0.4, 0.13, 0.32, 0.51, 0.12, 0.63, 0.88, 0.7, 0.45, 0.43, 0.36, -0.13, -0.52, -0.59, -0.3, 0.28, -0.65, -0.57, -0.57, -0.29, -0.06, 0.5, 0.37, 0.85, 1.08, 1.14, 0.67, 0.11, 1.55, 1.62, 0.42, 0.2, 0.5, 0.18, 0.34, -0.02, 0.33, 0.97, 0.34, 0.65, 0.97, 0.35, 0.31, 0.72, 0.73, 1.02, 0.19, -0.54, -0.58, -0.37, -0.01, -0.66, -0.46, -0.55, -0.48, -0.01, 0.82, 0.91, 0.93, 0.64, 0.49, 0.75, 1.1, 0.65, 0.77, 0.56, 0.01, -0.21, 0.02, -0.05, -0.01, 0.86, 0.8, 0.69, 0.64, 0.59, 0.4, 0.13, 0.65, 0.71, 1.29, 0.04, -0.67, -0.61, -0.63, -0.56, -0.69, -0.54, -0.64, -0.65, 0.12, 0.74, 0.69, 0.66, 1.06, 0.27, 0.43, 0.13, 0.87, 0.76, 0.42, 0.7, 0.34, -0.31, 0.01, 0.8, 0.32, 1.13, 1.01, 0.21, 0.25, 0.09, 0.42, 0.72, 0.95, 1.38, -0.01, -0.61, -0.67, -0.67, -0.57, -0.69, -0.48, -0.64, -0.66, -0.29, 0.82, 0.77, 0.55, 0.23, 0.13, 0.11, 0.21, 0.18, 0.71, 0.49, 0.29, -0.58, -0.62, -0.66, -0.06, 0.48, 0.68, 0.33, -0.11, 0.17, 0.61, 0.12, 0.1, 1.2, 1.32, -0.38, -0.7, -0.7, -0.71, -0.71, -0.68, -0.14, -0.66, -0.68, -0.52, 0.33, 1.08, 0.64, -0.04, 0.28, 0.38, 0.1, 0.08, 0.22, 0.24, 0.25, -0.63, -0.64, -0.66, -0.32, 0.05, 0.04, 0.01, 0.04, 0.56, -0.16, -0.15, 0.14, 1.55, 0.79, -0.41, -0.7, -0.68, -0.69, -0.69, -0.73, 0.01, -0.67, -0.71, -0.68, -0.05, 1.19, 0.91, -0.16, -0.17, -0.08, 0.14, 0.15, 0.13, 0.06, 0.08, 0.36, -0.45, -0.44, 1.01, 0.5, 0.46, 0.79, -0.03, -0.17, -0.26, -0.14, 0.2, 1.38, 0.53, -0.57, -0.68, -0.7, -0.71, -0.73, -0.31, -0.6, -0.68, -0.73, -0.35, 1.02, 1.14, -0.13, -0.21, -0.3, 0.24, 0.32, 0.55, 0.16, 1.16, 1.13, 0.2, 0.86, 1.73, 0.21, -0.42, 0.3, 0.56, 0.08, -0.34, -0.13, 0.44, 1.44, 0.11, -0.68, -0.69, -0.65, 0.51, -0.66, -0.54, -0.69, -0.68, -0.69, -0.46, 0.48, 1.4, 0.41, -0.03, 0.05, 1.13, 0.31, -0.16, -0.57, 0.84, 1.61, 0.59, 0.97, 1.77, -0.05, -0.63, -0.14, 0.33, 1.18, 0.05, 0.36, 0.9, 1.13, -0.19, -0.67, -0.68, -0.67, -0.68, -0.71, -0.64, -0.66, -0.71, -0.69, -0.68, 0.11, 1.03, 0.49, 0.26, 0.36, 1.12, 0.07, -0.41, -0.59, 0.72, 1.73, 0.41, 0.88, 1.5, -0.25, -0.4, -0.4, 0.05, 1.17, 0.59, 0.1, 1.03, 0.78, -0.56, -0.67, -0.71, -0.68, 0.18, -0.72, 0.14, -0.37, -0.64, -0.7, -0.67, -0.34, 0.9, 0.72, 0.19, 1.05, 0.81, 0.2, -0.42, -0.37, 0.49, 1.04, 0.63, 0.66, 0.91, -0.07, -0.61, -0.36, -0.16, -0.03, 0.39, 0.24, 1.11, -0.02, -0.66, -0.68, -0.7, -0.7, -0.69, -0.25, -0.71, -0.66, -0.34, -0.7, -0.66, -0.7, 0.04, 0.81, 0.63, -0.18, -0.27, -0.53, -0.59, -0.57, 0.09, 0.99, 0.87, 0.91, 0.92, -0.13, -0.45, -0.4, -0.07, 0.1, 0.3, 0.81, 0.53, -0.46, -0.68, -0.7, -0.68, -0.71, 0.61, -0.7, -0.68, 0.18, -0.56, -0.7, -0.7, -0.68, -0.48, 0.59, 0.85, 0.48, 0.24, -0.12, 0.17, -0.37, 0.28, 1.13, 0.96, 0.83, 1.39, 0.56, -0.22, -0.11, 0.49, 0.31, 0.94, 0.63, -0.28, -0.61, -0.69, -0.69, -0.68, -0.73, -0.69, -0.72, -0.69, 0.3, -0.68, -0.71, -0.68, -0.69, -0.69, -0.05, 0.67, 0.76, 1.06, 0.39, 0.15, -0.15, 0.05, 0.98, 0.38, 0.48, 1.31, 0.08, -0.19, 0.37, 1.08, 1.07, 0.56, -0.32, -0.62, -0.68, -0.69, -0.69, -0.7, -0.69, -0.68, -0.71, -0.7, -0.69, -0.71, -0.7, -0.73, -0.68, -0.7, -0.69, -0.39, -0.04, 0.66, 0.86, 0.69, 0.59, 0.22, 0.82, 0.16, 0.43, 1.53, 0.31, 0.61, 0.68, 0.38, 0.04, -0.54, -0.69, -0.69, -0.69, -0.69, -0.69, -0.68, -0.7, -0.72, -0.69, -0.71, -0.69, -0.71, 0.11, -0.71, -0.7, -0.69, -0.71, -0.69, -0.7, -0.46, -0.21, -0.05, 0.08, 0.34, 0.75, -0.05, 0.25, 0.16, 0.41, -0.1, -0.42, -0.51, -0.7, -0.73, -0.7, -0.7, -0.7, -0.68, -0.69, -0.7, -0.7, -0.72, -0.7, -0.71, -0.72, -0.73, 0.04, -0.72, -0.7, -0.71, -0.69, -0.71, -0.73, -0.73, -0.7, -0.73, -0.64, -0.32, 0.17, 0.12, 0.15, 0.03, -0.19, -0.71, -0.7, -0.71, -0.71, -0.71, -0.7, -0.71, -0.72, -0.74, -0.71, -0.69, -0.69, -0.68, -0.7, -0.74, -0.73, -0.71, -0.69, -0.71, -0.7, -0.7, -0.71, -0.72, -0.73, -0.68, -0.71, -0.71, -0.69, -0.19, 0.04, 0, 0.02, -0.63, -0.71, -0.7, -0.71, -0.72, -0.68, -0.69, -0.67, -0.7, -0.7, -0.7, -0.72, -0.69, -0.71, -0.71, -0.71, -0.73, -0.7, -0.7, -0.7, -0.74, -0.67, -0.71, -0.7, -0.69, -0.66, -0.68, 0.42, 0.1, 0.05, -0.69, -0.7, -0.71, -0.68, -0.69, -0.71, -0.73, -0.73, -0.67, -0.69, -0.71, -0.7, -0.69, -0.71, -0.7, -0.71, -0.73, -0.72, -0.72, -0.7, -0.69, -0.69, -0.7, -0.67, -0.69, -0.71, -0.7, -0.7, -0.69, -0.71, -0.71, -0.69, -0.7, -0.69, -0.69, -0.71, -0.73, -0.66, -0.67, -0.69, -0.69, -0.7, -0.69, -0.69, -0.71, -0.7, -0.69, -0.7, -0.7, -0.71, -0.7, -0.7, -0.7, -0.71, -0.69, -0.72, -0.73, -0.69, -0.7, -0.72, -0.72, -0.72, -0.71, -0.68, -0.67, -0.71, -0.67, -0.61, -0.62, -0.67, -0.64, -0.58, -0.58, -0.54, -0.65, -0.69, -0.7, -0.69, -0.71, -0.69, -0.68, -0.72, -0.75, -0.69, -0.69, -0.69, -0.68, -0.7, -0.69, -0.74, -0.71, -0.69, -0.71, -0.71, -0.7, -0.69, -0.7, -0.68, -0.68, -0.49, 0.16, 0.28, 0.12, 0.07, 0.21, 0.43, 0.68, 0.72, 0.1, -0.47, -0.65, -0.69, -0.68, -0.72, -0.69, -0.68, -0.67, -0.69, -0.09, -0.68, -0.71, -0.71, -0.72, -0.69, -0.69, -0.73, -0.71, -0.69, -0.69, -0.69, -0.64, -0.59, 0.08, 0.76, 0.84, 0.46, 0.5, 0.68, 0.73, 0.54, 0.66, 0.99, 0.88, 0.57, -0.12, -0.66, -0.68, -0.66, -0.65, -0.69, -0.69, -0.68, -0.7, -0.67, -0.7, -0.7, -0.66, -0.69, -0.73, -0.71, -0.71, -0.68, -0.71, -0.69, -0.6, 0.05, 0.78, 0.55, 0.22, 0.26, 0.19, 0.28, -0.02, 0.07, 0.2, 0.34, 0.66, 0.68, 0.69, 0.03, -0.68, -0.67, -0.67, -0.7, -0.72, -0.69, -0.65, -0.72, -0.31, -0.69, -0.71, -0.69, -0.69, -0.69, -0.67, -0.69, -0.69, -0.67, -0.13, 0.66, 0.73, 0.11, -0.15, -0.03, 0.37, 0.47, 0.64, 0.55, 0.16, -0.07, 0.03, 0.48, 0.92, 0.55, -0.24, -0.67, -0.7, -0.68, -0.69, -0.71, -0.7, -0.69, -0.71, -0.67, -0.71, -0.67, -0.7, -0.69, -0.68, -0.68, -0.69, -0.39, 0.45, 0.85, 0.15, 0.01, 0.24, 0.54, 0.63, 0.59, 0.52, 0.35, 0.18, 0.25, -0.02, 0.12, 0.55, 0.83, 0.74, -0.53, -0.69, -0.7, -0.69, -0.72, -0.69, -0.7, 0.23, -0.69, -0.68, -0.71, -0.69, -0.7, -0.7, -0.67, -0.63, 0.29, 0.71, 0.24, -0.08, 0.1, -0.09, 0.3, 0.11, 0.06, 0.02, -0.22, 0.01, 0.14, 0, -0.08, 0.03, 0.08, 0.81, 0.61, -0.66, -0.7, -0.68, -0.7, -0.71, -0.69, -0.69, -0.7, -0.64, -0.59, -0.7, -0.69, -0.7, -0.68, -0.06, 0.72, 0.1, 0.48, 0.14, -0.07, 0.02, -0.05, -0.12, -0.33, -0.41, 0.05, 0, 0.16, 0.24, -0.01, -0.12, 0.29, 0.02, 0.9, -0.07, -0.66, -0.66, -0.69, -0.69, -0.68, -0.69, -0.59, -0.67, -0.7, -0.67, -0.67, -0.67, -0.64, 0.55, 0.34, 0.56, -0.12, -0.06, 0.24, 0.15, 0.11, 0.32, 0.75, 1.78, 0.18, 0.28, 0.19, 0.25, 0.27, 0.03, -0.23, 0.82, 0.04, 0.89, -0.61, -0.69, -0.44, -0.68, -0.72, -0.73, -0.69, -0.71, -0.73, -0.69, -0.69, -0.68, -0.56, 0.73, -0.25, 0.62, -0.1, 0.22, 0.11, 0.19, 0.18, 0.58, 2.56, 2.91, 1.25, 0.18, 0.12, 0.18, 0.27, 0.18, -0.46, -0.43, 0.09, 0.55, -0.23, -0.26, -0.28, -0.59, -0.61, -0.63, -0.7, -0.69, -0.67, -0.39, -0.57, -0.59, -0.03, 0, 0.36, 0.06, -0.03, 0.15, 0.44, 0.62, 0.25, 1.41, 1.84, 1.7, 1.79, 0.19, 0.28, 0.46, 0.13, -0.1, -0.25, -0.55, -0.24, 0.08, 0.26, -0.09, -0.18, -0.4, -0.63, -0.68, -0.65, -0.61, -0.64, -0.65, -0.09, -0.03, -0.49, 0.04, -0.07, -0.17, -0.3, 0.06, 0.21, 0.35, 0.57, 0, 2.07, 1.2, 1.02, 2, 1.54, -0.01, 0.42, 0.06, -0.01, -0.35, -0.47, -0.59, -0.23, 0.26, -0.21, -0.34, -0.51, -0.61, -0.64, -0.65, -0.54, -0.65, -0.64, 0.14, 0.28, -0.1, 0.41, -0.35, -0.54, -0.14, 0.01, 0.57, 0.71, 0.37, 0.42, 2.39, 1.95, 0.85, 2.57, 1.97, 0.34, 0.68, 0.35, 0.16, -0.3, -0.23, -0.37, 0.18, -0.02, -0.47, -0.58, -0.52, -0.61, -0.66, -0.62, -0.61, -0.63, -0.65, -0.22, 0.02, 0.17, 0.14, 0.33, -0.22, 0.04, 0.12, 0.53, 0.69, 0.41, 0.47, 0.91, 2.36, 2.23, 1.95, 0.55, 0.71, 0.24, 0.07, 0.09, 0.55, -0.3, 0.08, 0.15, -0.47, -0.54, -0.53, -0.63, -0.58, -0.55, -0.62, -0.65, -0.61, -0.62, -0.62, -0.15, -0.06, 0.18, 0.43, 0.35, 0.67, 0.83, 0.31, 0.28, 0.46, 0.47, 0.7, 0.11, 1.04, 0.16, 0.92, 0.69, 0.35, 0.67, -0.1, 0.34, 0.6, 0.44, 0.35, -0.36, -0.11, 0.14, -0.56, -0.64, -0.6, -0.64, -0.63, -0.53, -0.58, -0.42, -0.24, 0.21, 0.27, 0.39, 0.67, 0.91, 0.69, 0.6, 0.95, 0.93, 0.31, -0.01, 0.9, 0.3, 0.73, 0.31, 0.27, 1.08, 0.36, 1.49, 0.95, 0.41, 0.49, 0.54, 0.9, 1.11, 0.54, -0.6, -0.6, -0.58, -0.59, -0.63, 0.07, -0.66, -0.38, 0.19, 0.7, 0.57, 0.62, 0.34, 0.4, 0.83, 1.11, 0.84, 1.49, 0.47, 0, -0.18, -0.19, -0.2, -0.04, 0.29, 0.44, 1.57, 0.82, 0.08, 0.15, 0.47, 0.19, 0.93, 1.45, 0.2, -0.58, -0.64, -0.63, -0.59, -0.66, -0.23, -0.56, -0.58, 0.07, 1.01, 0.69, 0.56, 0.08, 0.18, 0.32, -0.03, 0.41, 0.89, 0.28, 0.51, 0.27, -0.15, -0.12, 0.95, 0.9, 0.85, 0.58, 0.04, -0.16, 0.05, 0.26, 0.32, 1.51, 1.49, 0.26, -0.65, -0.68, -0.69, -0.72, -0.65, -0.63, -0.66, -0.65, -0.02, 1.41, 1.09, 0.68, 0.69, 0.27, -0.12, -0.1, 0.53, 1.34, 0.6, 0.68, -0.11, -0.39, -0.32, 0.72, 0.48, 1.32, 0.56, -0.15, -0.18, 0.55, 0.33, 0.19, 1.35, 1.66, -0.15, -0.69, -0.68, -0.68, -0.68, -0.71, -0.69, -0.68, -0.66, -0.46, 0.78, 1.34, 0.54, 0.13, 0.66, 0.78, -0.17, 0.11, 0.17, 0.91, 0.11, -0.63, -0.46, -0.6, 0.04, 0.55, 0.08, 0.16, 0.05, 0.65, 0.55, 0, 0.21, 1.23, 1.58, -0.41, -0.71, -0.68, -0.68, -0.68, -0.7, -0.46, -0.67, -0.67, 0.13, 1.49, 0.91, -0.07, 0.26, 0.14, 0.69, -0.03, 0.51, 0.42, 0.16, -0.15, 0.41, -0.09, 0.72, 0.54, 0.35, 1.2, 1.24, 0.04, -0.1, 0.05, 0.26, 1.63, 1.2, -0.51, -0.69, -0.68, -0.58, -0.69, -0.72, -0.73, -0.54, -0.66, -0.68, -0.17, 1.36, 1.42, -0.05, -0.09, -0.14, -0.08, 0.47, 0.65, 0.14, 0.37, 1.24, 0.95, 0.4, 1.22, 0.81, -0.59, 0.3, 0.24, 0.17, -0.28, -0.05, 0.13, 1.74, 0.69, -0.67, -0.66, -0.56, -0.35, -0.68, -0.66, -0.66, -0.7, -0.71, -0.33, 1.16, 1.51, 0.02, -0.21, -0.34, 0.41, 0.53, -0.26, -0.65, 0.37, 1.29, 0.66, 1.14, 1.35, -0.29, -0.67, -0.42, 0.65, 0.51, 0.22, 0.67, 0.56, 1.48, 0.26, -0.67, -0.7, -0.7, -0.35, -0.71, -0.51, -0.7, -0.71, -0.68, -0.67, 0.25, 1.41, 0.23, 0.57, 0.47, 0.94, 0.16, -0.31, -0.68, 0.07, 1.24, 0.9, 1.28, 1.09, -0.39, -0.69, -0.38, -0.12, 0.78, 1.04, 0.59, 1.63, 1.12, -0.54, -0.65, -0.67, -0.71, -0.7, -0.69, -0.71, -0.68, -0.63, -0.68, -0.67, -0.36, 1.01, 1.37, 0.31, 0.85, 0.71, -0.32, -0.35, -0.65, -0.15, 0.81, 0.63, 0.63, 0.59, -0.08, -0.67, -0.67, -0.48, -0.39, 0.88, 0.22, 1.27, 0.35, -0.68, -0.69, -0.72, -0.67, -0.68, -0.27, -0.73, 0.31, -0.66, -0.69, -0.65, -0.64, 0.28, 1.2, 0.04, 0.24, -0.15, -0.61, -0.65, -0.63, -0.08, 0.49, 0.59, 0.95, 0.52, -0.1, -0.64, -0.33, -0.25, -0.15, 0.24, 0.83, 0.67, -0.36, -0.65, -0.69, -0.69, -0.7, -0.5, -0.69, -0.72, -0.65, -0.66, -0.7, -0.69, -0.65, -0.47, 0.42, 0.94, 0.35, 0.02, 0.2, 0.33, -0.51, -0.26, 1.15, 0.91, 1.08, 0.8, -0.24, -0.32, 0.55, 0.33, 0.8, 0.74, 0.83, -0.24, -0.65, -0.68, -0.68, -0.67, -0.65, -0.7, -0.67, -0.7, 0.47, -0.71, -0.67, -0.69, -0.69, -0.64, -0.31, 0.43, 0.87, 0.5, 0.13, 0.23, -0.03, -0.11, 1.2, 0.97, 1.2, 0.85, 0.7, 0.04, 0.56, 0.63, 0.97, 0.63, -0.24, -0.65, -0.7, -0.68, -0.7, -0.68, -0.7, -0.72, -0.67, -0.73, -0.68, -0.68, -0.68, -0.69, -0.68, -0.72, -0.68, -0.53, 0.03, 0.78, 1.05, 0.78, 0.61, 0.08, 1.34, 1.35, 1.04, 0.78, 0.13, 0.62, 0.33, 0.22, 0.11, -0.44, -0.66, -0.68, -0.69, -0.69, -0.69, -0.71, -0.69, -0.71, -0.69, -0.72, -0.72, -0.69, -0.43, -0.71, -0.67, -0.68, -0.68, -0.65, -0.7, -0.41, -0.11, 0.04, 0.14, 0.45, 0.43, 0.38, 0.51, 0.47, 0.34, -0.1, -0.38, -0.47, -0.7, -0.68, -0.72, -0.7, -0.7, -0.69, -0.72, -0.62, -0.71, -0.68, -0.7, -0.71, -0.72, -0.68, -0.67, -0.69, -0.7, -0.69, -0.72, -0.7, -0.69, -0.68, -0.69, -0.69, -0.65, -0.4, 0.07, 0.34, 0.25, 0.15, -0.24, -0.7, -0.68, -0.72, -0.68, -0.7, -0.7, -0.67, -0.69, -0.69, -0.7, -0.7, -0.69, -0.71, -0.7, -0.73, -0.74, -0.72, -0.7, -0.71, -0.71, -0.71, -0.69, -0.71, -0.72, -0.72, -0.7, -0.7, -0.7, -0.67, -0.29, -0.03, -0.16, 0.15, -0.64, -0.67, -0.68, -0.7, -0.72, -0.68, -0.69, -0.68, -0.73, -0.72, -0.7, -0.69, -0.71, -0.73, -0.71, -0.69, -0.69, -0.7, -0.68, -0.7, -0.7, -0.68, -0.7, -0.68, -0.7, -0.7, -0.7, -0.7, -0.1, 0.13, -0.17, -0.72, -0.66, -0.69, -0.7, -0.73, -0.67, -0.73, -0.7, -0.72, -0.7, -0.73, -0.71, -0.71, -0.72, -0.69, -0.67, -0.69, -0.7, -0.7, -0.69, -0.7, -0.72, -0.69, -0.73, -0.71, -0.71, -0.7, -0.7, -0.69, -0.71, -0.71, -0.72, -0.72, -0.73, -0.7, -0.7, -0.67, -0.71, -0.71, -0.67, -0.7, -0.71, -0.7, -0.7, -0.68, -0.71, -0.68, -0.7, -0.71, -0.69, -0.71, -0.67, -0.71, -0.69, -0.68, -0.7, -0.7, -0.68, -0.71, -0.73, -0.69, -0.71, -0.71, -0.71, -0.72, -0.68, -0.7, -0.67, -0.7, -0.69, -0.7, -0.69, -0.7, -0.69, -0.71, -0.7, -0.7, -0.69, -0.67, -0.63, -0.67, -0.69, -0.66, -0.65, -0.65, -0.54, -0.48, -0.63, -0.68, -0.71, -0.7, -0.7, -0.7, -0.72, -0.69, -0.69, -0.72, -0.72, -0.71, -0.66, -0.69, -0.69, -0.73, -0.71, -0.68, -0.71, -0.7, -0.7, -0.7, -0.69, -0.69, -0.62, -0.16, 0.3, 0.38, 0.07, -0.18, 0.09, 0.75, 0.96, 0.88, 0.53, -0.19, -0.66, -0.65, -0.7, -0.7, -0.71, -0.69, -0.69, -0.71, -0.42, -0.67, -0.69, -0.69, -0.69, -0.67, -0.7, -0.71, -0.69, -0.71, -0.7, -0.68, -0.69, -0.52, 0.49, 1, 1.11, 1.05, 1.35, 1.57, 1.3, 1.15, 0.94, 1.26, 1.44, 1.14, 0.18, -0.66, -0.66, -0.71, -0.69, -0.67, -0.7, -0.68, -0.7, -0.7, -0.7, -0.68, -0.67, -0.68, -0.71, -0.68, -0.7, -0.69, -0.68, -0.69, -0.69, -0.48, 0.68, 1.01, 0.77, 0.48, 0.31, 0.17, 0, -0.09, 0.33, 0.07, 0.37, 0.88, 0.71, 1.46, 0.42, -0.64, -0.68, -0.68, -0.7, -0.69, -0.71, -0.68, -0.67, -0.28, -0.65, -0.68, -0.69, -0.71, -0.71, -0.72, -0.69, -0.7, -0.69, -0.62, 0.57, 0.75, 0.79, 0.12, 0.18, 0.59, 0.51, 0.38, 0.33, 0.36, 0.42, 0.26, 0.21, 0.49, 0.93, 1.39, 0.4, -0.67, -0.68, -0.68, -0.69, -0.69, -0.7, -0.67, -0.67, -0.67, -0.56, -0.67, -0.69, -0.69, -0.71, -0.7, -0.71, -0.67, 0.25, 1, 0.9, 0.18, 0.11, 0.06, -0.12, -0.13, -0.15, -0.12, -0.05, 0.04, 0.04, -0.18, -0.39, -0.02, 0.59, 1.31, 0.01, -0.68, -0.67, -0.72, -0.7, -0.69, -0.69, -0.68, -0.7, -0.64, 0.01, -0.69, -0.69, -0.68, -0.68, -0.68, -0.51, 1.01, 0.9, 0.42, -0.21, 0.03, 0.43, 0.54, 0.41, 0.28, 0.19, 0.76, 0.32, 0.55, 0.26, 0.17, -0.29, -0.07, 0.48, 1.06, -0.52, -0.65, -0.69, -0.7, -0.7, -0.68, -0.66, -0.7, -0.57, -0.68, -0.34, -0.72, -0.7, -0.68, -0.64, 0.49, 0.94, 0.43, -0.18, 0.1, 0.34, 0.33, 0.34, 0.25, 1.36, 1.31, 0.53, 0.24, 0.27, 0.22, 0.2, 0.28, -0.12, 0.39, 0.62, 0.92, -0.66, -0.67, -0.68, -0.7, -0.66, -0.69, -0.67, -0.67, -0.72, -0.66, -0.66, -0.7, -0.66, -0.51, 1.08, 0.04, 0.31, -0.08, 0.32, 0.22, 0.22, 0.11, 0.45, 2.36, 3.43, 0.36, 0.31, 0.17, 0.23, 0.22, 0.27, 0.02, -0.49, -0.06, 0.85, -0.31, -0.69, -0.32, -0.63, -0.68, -0.7, -0.68, -0.73, -0.71, -0.68, -0.65, -0.65, -0.66, 0.44, 0.64, 0.6, -0.26, 0.16, 0.18, 0.24, 0.23, 0.18, 0.24, 0.94, 1.53, 0.24, 0.23, 0.17, 0.15, 0.29, 0.28, 0.31, -0.48, -0.46, 0, 0.52, -0.47, -0.55, -0.57, -0.67, -0.71, -0.71, -0.66, -0.67, -0.65, -0.28, -0.37, -0.64, 0.57, 0.03, -0.44, -0.42, 0.27, 0.16, 0.18, 0.24, 0.2, 0.27, 0.63, 2.22, 0.75, 0.33, 0.18, 0.22, 0.48, 0.46, 0.59, -0.34, -0.3, -0.4, 0.36, -0.12, -0.28, -0.51, -0.67, -0.63, -0.67, -0.51, -0.67, -0.62, -0.05, -0.2, -0.14, 0.41, -0.35, -0.54, -0.47, 0.23, 0.59, 0.54, 0.2, 0.27, 1.31, 0.92, 0.78, 1.25, 0.79, 0.24, 0.42, 0.5, 0.44, 0.44, -0.16, -0.54, -0.18, 0.52, -0.25, -0.49, -0.56, -0.66, -0.66, -0.68, -0.55, -0.64, -0.58, -0.31, -0.44, -0.27, 0.43, -0.42, -0.58, -0.45, -0.13, 0.1, 0.37, 0.26, 0.43, 2.45, 0.77, 0.48, 0.9, 2.77, 0.61, 0.26, 0.2, 0.09, -0.44, -0.45, -0.47, -0.2, 0.21, -0.56, -0.57, -0.57, -0.66, -0.65, -0.66, -0.58, -0.64, -0.63, -0.54, -0.4, -0.39, 0.1, 0.14, -0.42, -0.51, -0.34, -0.06, -0.13, 0.09, 0.34, 2.49, 2.25, 2.56, 2.56, 0.97, 0.53, 0.21, 0.48, 0.15, -0.22, -0.54, -0.3, 0.04, -0.25, -0.48, -0.48, -0.56, -0.56, -0.5, -0.54, -0.54, -0.59, -0.63, -0.63, -0.61, -0.57, -0.36, 0.15, -0.11, -0.41, -0.02, 0.1, 0.35, 0.09, 1.15, 0.71, 2.22, 3.07, 2.01, 0.63, 0.52, 0.6, 0.61, -0.33, -0.16, -0.21, -0.15, -0.29, -0.31, -0.14, 0.49, -0.58, -0.6, -0.63, -0.61, -0.6, -0.57, -0.61, -0.57, -0.12, -0.19, -0.36, 0.31, 0.23, 0.43, 0.46, 0.08, 1.21, 0.5, 0.27, 0.27, 0.35, 0.89, 0.34, 0.3, 0.22, -0.14, 1.08, 0.36, 0.88, 0.16, 0.37, 0.32, 0.62, 1.17, 0.17, -0.59, -0.58, -0.6, -0.58, -0.49, -0.59, -0.58, -0.54, 0.25, 0.78, 0.36, 0.75, 0.35, 0.46, 0.4, 0.72, 0.54, 0.33, 0.45, -0.07, 0.16, -0.15, 0.22, 0.07, 0.25, 0.66, 0.32, 0.18, 0.14, -0.1, 0.48, 0.94, 1.44, 1.36, 0.14, -0.6, -0.59, -0.63, -0.63, -0.6, -0.61, -0.55, -0.63, 0.18, 1.13, 0.87, 0.55, 0.74, -0.14, 0.31, 0.41, 0.88, 0.53, 0.53, 0.53, 0.13, 0.18, 0.53, 0.5, 0.29, 0.32, 0.48, 0.37, -0.16, -0.05, -0.31, 0.18, 1.45, 1.43, 0.07, -0.61, -0.66, -0.64, -0.63, -0.68, -0.63, -0.65, -0.65, -0.02, 1.54, 1.46, 0.32, 0.16, 0.14, -0.13, -0.08, 0.45, 1.09, 0.47, 0.57, -0.33, -0.02, -0.14, 0.25, 0.23, 0.6, 0.53, -0.09, 0, 0.09, 0.45, 0.44, 1.2, 1.34, -0.02, -0.66, -0.65, -0.68, -0.64, -0.69, -0.69, -0.66, -0.65, -0.48, 1, 1.58, 0.88, 0.08, 0.65, 0.53, 0.08, 0.33, 0.49, 0.25, 0.36, 0.03, 0.2, 0.01, -0.01, 0.36, 0.45, 0.4, 0.15, 0.43, 0.73, 0.22, 0.25, 1.19, 1.39, -0.34, -0.66, -0.69, -0.65, -0.72, -0.64, -0.7, -0.69, -0.67, -0.66, 0.61, 1.55, 0.6, -0.12, 0.19, 0.78, 0.82, 0.44, 0.51, 0.47, 0.08, -0.42, 1, 0.11, -0.14, 0.8, 0.35, 0.87, 1.3, 0.65, 0.29, -0.06, 0.47, 1.68, 1.33, -0.51, -0.69, -0.69, -0.66, -0.69, -0.65, -0.68, -0.69, -0.67, -0.63, 0.1, 1.68, 1.01, 0.05, 0.18, -0.09, -0.1, 0.74, 1.05, 0.41, 0.39, 0.31, 0.76, 0.43, 0.67, -0.06, -0.08, 0.29, 0.2, -0.1, -0.28, 0.05, 0.4, 1.77, 0.78, -0.61, -0.65, -0.64, -0.65, -0.65, -0.59, -0.62, -0.68, -0.69, -0.69, -0.34, 1.44, 1.81, 0.1, -0.23, -0.22, 0.09, -0.01, -0.43, -0.66, -0.26, 0.45, 0.4, 0.8, 0.61, -0.48, -0.65, -0.38, 0.21, 0.28, -0.18, 0.8, 0.81, 1.72, 0.31, -0.63, -0.69, -0.69, -0.69, -0.7, -0.61, -0.37, -0.69, -0.54, -0.66, -0.68, 0.55, 1.66, 0.04, 0.61, 0.05, 0.73, 0.41, -0.63, -0.69, -0.33, 0.6, 0.4, 0.44, 0.78, -0.44, -0.7, -0.65, -0.22, 0.89, 0.45, 0.51, 1.3, 1.12, -0.47, -0.68, -0.7, -0.67, -0.45, -0.7, 0.12, -0.66, -0.07, -0.68, -0.69, -0.69, -0.31, 1.11, 1.33, 0.47, 1.18, 0.62, -0.42, -0.68, -0.67, -0.28, 1.11, 0.81, 0.77, 0.95, -0.19, -0.65, -0.58, -0.21, 0.6, 0.86, 0.41, 1.33, 0.5, -0.58, -0.67, -0.69, -0.69, -0.69, -0.34, -0.14, -0.7, -0.67, -0.67, -0.69, -0.68, -0.61, 0.4, 1.21, 0.45, 0.39, -0.21, -0.32, -0.43, -0.63, -0.08, 0.35, 0.7, 0.49, 0.46, 0, -0.03, 0.3, 0.2, 0.86, 0.26, 0.42, 0.7, -0.34, -0.61, -0.65, -0.68, -0.64, -0.61, -0.7, -0.68, -0.09, -0.68, -0.68, -0.66, -0.7, -0.66, -0.54, 0.47, 0.95, 0.45, 0.2, 0.11, 0.07, -0.18, 0.47, 0.38, 0.59, 0.56, 0.97, 0.25, 0.05, 0.29, 1.06, 1.05, 1.19, 0.73, -0.21, -0.58, -0.64, -0.65, -0.68, -0.65, -0.17, -0.68, -0.64, -0.68, 0.72, -0.69, -0.68, -0.69, -0.68, -0.65, -0.4, 0.44, 1.03, 0.88, 0.85, 0.15, -0.08, 0.44, 0.87, 0.68, 0.66, 1.03, 0.3, 0.42, 0.82, 1.07, 0.78, 0.48, -0.11, -0.64, -0.65, -0.67, -0.68, -0.67, -0.65, -0.67, -0.65, -0.69, -0.66, -0.68, -0.69, -0.63, -0.7, -0.66, -0.7, -0.68, -0.5, 0.17, 0.47, 0.63, 0.81, 0.41, 0.54, 0.75, 1.04, 0.64, 0.66, 0.56, 0.37, 0.19, 0.13, 0.08, -0.38, -0.64, -0.67, -0.69, -0.69, -0.67, -0.67, -0.7, -0.68, -0.69, -0.69, -0.66, -0.67, -0.69, -0.66, -0.68, -0.68, -0.68, -0.7, -0.7, -0.64, -0.38, -0.07, 0, 0.02, 0.25, 0.64, 0.35, 0.88, 0.38, 0.18, -0.08, -0.3, -0.42, -0.57, -0.69, -0.69, -0.69, -0.7, -0.69, -0.69, -0.4, -0.71, -0.69, -0.7, -0.71, -0.69, -0.68, -0.71, -0.71, -0.68, -0.67, -0.71, -0.72, -0.7, -0.71, -0.7, -0.68, -0.65, -0.38, 0.06, 0.33, 0.55, 0.28, -0.19, -0.66, -0.68, -0.69, -0.69, -0.69, -0.69, -0.69, -0.69, -0.68, -0.67, -0.69, -0.68, -0.7, -0.72, -0.72, -0.7, -0.68, -0.71, -0.7, -0.71, -0.71, -0.7, -0.7, -0.68, -0.69, -0.7, -0.7, -0.69, -0.66, -0.48, -0.04, 0.07, -0.14, -0.62, -0.66, -0.69, -0.69, -0.7, -0.71, -0.72, -0.71, -0.7, -0.68, -0.66, -0.71, -0.69, -0.66, -0.72, -0.73, -0.7, -0.66, -0.7, -0.66, -0.71, -0.68, -0.67, -0.67, -0.69, -0.68, -0.71, -0.67, -0.7, -0.68, -0.67, -0.22, 0.22, -0.54, -0.71, -0.73, -0.7, -0.69, -0.7, -0.69, -0.73, -0.64, -0.66, -0.71, -0.67, -0.7, -0.73, -0.7, -0.7, -0.7, -0.71, -0.69, -0.7, -0.71, -0.68, -0.71, -0.71, -0.71, -0.72, -0.7, -0.72, -0.71, -0.74, -0.69, -0.7, -0.71, -0.71, -0.71, -0.71, -0.7, -0.69, -0.69, -0.68, -0.71, -0.69, -0.69, -0.69, -0.69, -0.7, -0.68, -0.68, -0.69, -0.67, -0.68, -0.67, -0.6, -0.66, -0.69, -0.72, -0.73, -0.68, -0.69, -0.68, -0.72, -0.7, -0.69, -0.7, -0.7, -0.69, -0.7, -0.7, -0.69, -0.69, -0.7, -0.7, -0.7, -0.7, -0.71, -0.72, -0.7, -0.69, -0.69, -0.66, -0.45, -0.35, -0.3, -0.35, -0.3, -0.06, -0.04, -0.14, -0.49, -0.68, -0.71, -0.72, -0.68, -0.69, -0.68, -0.68, -0.68, -0.71, -0.71, -0.73, -0.68, -0.69, -0.72, -0.71, -0.7, -0.71, -0.7, -0.7, -0.7, -0.66, -0.69, -0.66, -0.47, 0.27, 0.64, 0.79, 0.87, 0.83, 0.93, 1.13, 1.46, 1.24, 0.92, 0.29, -0.6, -0.68, -0.68, -0.7, -0.69, -0.69, -0.71, -0.69, -0.69, -0.71, -0.69, -0.72, -0.71, -0.69, -0.7, -0.68, -0.7, -0.72, -0.68, -0.68, -0.67, -0.28, 0.98, 1.61, 1.6, 1.44, 1.64, 1.47, 1.4, 1.46, 1.62, 1.79, 1.75, 1.67, 0.95, -0.48, -0.7, -0.7, -0.69, -0.71, -0.7, -0.67, -0.7, -0.72, -0.69, -0.66, -0.7, -0.7, -0.69, -0.69, -0.69, -0.7, -0.68, -0.69, -0.69, -0.3, 1.16, 1.07, 1.12, 0.48, 0, 0.08, -0.17, -0.12, -0.11, -0.08, -0.1, 0.49, 1.05, 1.67, 1.18, -0.47, -0.7, -0.69, -0.66, -0.67, -0.71, -0.73, -0.71, 0.05, -0.65, -0.72, -0.67, -0.69, -0.73, -0.69, -0.7, -0.68, -0.67, -0.53, 1.17, 1.31, 0.74, 0.01, -0.14, -0.34, -0.34, -0.01, -0.11, -0.13, 0, -0.08, -0.37, -0.3, 0.62, 1.82, 1.15, -0.65, -0.7, -0.69, -0.67, -0.7, -0.66, -0.69, -0.71, -0.71, -0.58, -0.68, -0.7, -0.7, -0.68, -0.68, -0.72, -0.64, 0.79, 1.37, 0.85, -0.21, -0.24, 0.25, 0.47, 0.45, 0.37, 0.21, 0.29, 0.32, 0.15, 0.2, 0.21, -0.3, 0.14, 1.53, 0.61, -0.7, -0.69, -0.73, -0.69, -0.68, -0.67, -0.7, -0.72, -0.68, 0, -0.68, -0.7, -0.69, -0.67, -0.67, -0.12, 1.49, 0.49, -0.23, 0.06, 0.15, 0.23, 0.18, 0.29, 0.56, 1.09, 0.31, 0.23, 0.22, 0.15, 0.22, 0.54, -0.13, 0.37, 1.62, -0.01, -0.71, -0.7, -0.7, -0.69, -0.7, -0.67, -0.68, -0.15, -0.7, -0.06, -0.73, -0.7, -0.69, -0.66, 1.21, 0.75, -0.25, -0.12, 0.24, 0.23, 0.14, 0.25, 0.45, 1.64, 1.42, 0.44, 0.15, 0.18, 0.2, 0.22, 0.53, 0.33, -0.26, 0.32, 1.14, -0.49, -0.7, -0.7, -0.67, -0.67, -0.69, -0.7, -0.69, -0.7, -0.68, -0.68, -0.69, -0.69, -0.05, 1.09, 0.2, -0.14, 0.45, 0.2, 0.18, 0.24, 0.21, 0.31, 1.3, 1.01, 0.62, 0.22, 0.22, 0.14, 0.25, 0.37, 0.29, -0.19, -0.06, 0.43, 0.55, -0.66, -0.38, -0.33, -0.69, -0.71, -0.71, -0.66, -0.67, -0.69, -0.61, -0.65, -0.65, 1.02, 0.12, -0.41, -0.01, 0.36, 0.21, 0.18, 0.22, 0.19, 0.18, 0.19, 0.9, 0.17, 0.19, 0.14, 0.2, 0.12, 0.35, 0.67, 0.29, -0.35, -0.37, 0.68, -0.59, -0.47, -0.45, -0.69, -0.68, -0.7, -0.72, -0.67, -0.7, -0.25, -0.29, -0.54, 0.77, -0.35, -0.48, 0.23, 0.62, 0.14, 0.23, 0.18, 0.2, 0.34, 0.65, 1.62, 0.77, 0.19, 0.11, 0.13, 0.15, 0.23, 0.5, 0.75, -0.24, -0.27, 0.35, -0.13, -0.29, 0.05, -0.64, -0.67, -0.69, -0.17, -0.64, -0.64, -0.01, -0.07, -0.2, 0.19, -0.48, -0.4, 0.59, 0.56, 0.27, 0.26, 0.27, 0.16, 0.78, 0.68, 1.03, 0.99, 0.98, 0.59, 0.28, 0.23, 0.54, 0.59, 0.07, -0.4, -0.56, 0.55, 0.22, -0.25, -0.36, -0.66, -0.67, -0.67, -0.7, -0.7, -0.52, -0.48, -0.45, 0.03, 0.11, -0.51, -0.51, 0.05, 0.62, 0.62, 0.62, 0.64, 1.74, 2.82, 0.36, 0.13, 0.77, 2.71, 1.75, 1.42, 1.09, 0.31, -0.31, -0.54, -0.59, -0.49, 0.37, -0.28, -0.64, -0.62, -0.67, -0.63, -0.65, -0.66, -0.64, -0.66, -0.52, -0.56, -0.28, 0.26, -0.43, -0.59, -0.45, -0.35, -0.15, 0.36, 1.94, 1.51, 3.33, 1.55, 0.31, 2.16, 2.9, 1.67, 2.02, -0.31, -0.42, -0.33, -0.57, -0.45, 0.42, 0.38, -0.06, -0.24, -0.61, -0.64, -0.62, -0.65, -0.64, -0.66, -0.64, -0.57, -0.55, -0.53, -0.25, 0.05, -0.44, -0.53, -0.28, -0.4, -0.26, 1.18, 0.5, 1.14, 3.67, 3.7, 3.49, 0.94, 0.38, 0.08, -0.31, -0.32, -0.47, -0.4, -0.3, 0.16, 0.22, 0.92, -0.06, -0.62, -0.53, -0.59, -0.66, -0.63, -0.56, -0.52, -0.52, -0.07, -0.3, -0.43, -0.26, -0.32, -0.32, -0.28, -0.33, 1.11, -0.04, 0.74, 0.68, 1.4, 2.91, 1.38, 0.54, 0.63, 0.35, 0.65, -0.25, -0.13, -0.21, 0.23, -0.14, 1.1, 1.27, -0.13, -0.6, -0.63, -0.63, -0.65, -0.63, -0.58, -0.63, -0.56, 0.19, 0.93, 0.52, 0.36, 0.27, 0.09, 0.22, 0.51, 0.32, -0.05, 0.29, 0.5, 0.61, 0.78, 0.55, 0.5, 0.49, 0.26, 0.48, 0.01, -0.28, -0.04, -0.02, 0.23, 1.16, 1.38, -0.13, -0.55, -0.61, -0.61, -0.6, -0.65, -0.58, -0.59, -0.57, 0.01, 0.88, 1.15, 0.77, 0.38, 0.08, -0.14, -0.14, 0.22, 0.28, -0.02, 0.56, 0.55, 0.97, 0.76, 0.66, 0.27, 0.1, 0.22, -0.08, 0.15, -0.14, -0.07, -0.15, 1.35, 1.37, -0.27, -0.62, -0.67, -0.67, -0.66, -0.65, -0.63, -0.68, -0.62, -0.41, 0.98, 1.18, 0.53, -0.19, -0.13, -0.11, -0.23, 0.45, 0.37, 0.32, 0.13, 0.45, 0.7, 0.58, 0.28, 0.29, 0.19, 0.18, 0.12, 0.1, 0.3, 0.13, 0.27, 1.69, 1.48, -0.16, -0.65, -0.66, -0.67, -0.68, -0.7, -0.65, -0.67, -0.67, -0.64, 0.86, 1.43, 0.81, 0.32, 0.15, -0.15, -0.1, 0.14, 0.24, 0.3, 0.48, -0.21, 0.34, 0.07, 0.01, 0.04, -0.1, 0.14, 0.18, -0.03, 0.19, -0.19, 0.26, 1.67, 1.46, -0.08, -0.65, -0.65, -0.24, -0.7, -0.67, -0.69, -0.69, -0.69, -0.68, 0.62, 1.5, 0.85, 0, 0.23, 0.94, 0.38, 0.14, 0.23, -0.07, 0.8, 0.03, 0.05, 0.24, 0.28, 0.84, 0.24, 0.19, 0.46, 0.5, 0.36, 0.08, 0.71, 2.22, 1.43, -0.18, -0.64, -0.63, -0.7, -0.65, -0.7, -0.68, -0.69, -0.67, -0.65, 0.19, 1.55, 0.91, -0.01, -0.05, 0.08, 0.62, 1.03, 0.91, 1.01, 0.73, 0.49, 0.44, 0.58, 0.07, 0.72, 0.69, 0.5, 0.3, -0.07, -0.14, -0.11, 0.47, 2.04, 1.24, -0.54, -0.61, -0.68, -0.7, -0.71, -0.7, -0.28, -0.67, -0.51, -0.68, -0.39, 1.38, 1.88, 0.8, -0.05, -0.24, 0.03, 0.2, 0.38, -0.55, -0.35, 0.79, 0.86, 1.16, 0.82, -0.29, -0.63, -0.19, 0.46, 0.36, -0.24, 0.86, 1.52, 2.04, 0.47, -0.64, -0.69, -0.67, -0.31, -0.68, -0.28, -0.46, -0.22, -0.66, -0.7, -0.64, 0.48, 1.46, 0.97, 0.84, -0.26, 0.67, 0.54, -0.61, -0.67, -0.54, 0.91, 0.58, 0.57, 0.87, -0.42, -0.58, -0.37, 0.76, 1.01, 0, 0.45, 1.71, 1.05, -0.08, -0.65, -0.69, -0.68, -0.68, -0.69, -0.66, -0.69, -0.69, -0.67, -0.71, -0.65, -0.2, 1.22, 1.39, 0.4, 0.34, 1.36, 0.15, -0.41, -0.6, -0.13, 0.24, 0.52, 0.54, 0.26, -0.33, -0.43, -0.07, 1.25, 1.3, 0.89, 0.53, 1.14, 0.13, -0.61, -0.68, -0.69, -0.67, -0.7, -0.56, -0.45, -0.69, -0.67, -0.69, -0.68, -0.66, -0.58, 0.22, 1.19, 0.44, 0.78, 0.91, 1.03, 0.31, 0.01, -0.02, 0.53, 0.53, 0.58, 0.9, -0.12, 0.56, 0.59, 1.19, 1.67, 1.06, 0.37, 0.49, -0.35, -0.68, -0.66, -0.68, -0.65, -0.64, -0.67, -0.72, 0.06, -0.64, -0.68, -0.69, -0.66, -0.68, -0.51, 0.44, 0.88, 0.35, 1.31, 1.38, 0.81, 0.68, 0.46, 0.47, 0.86, 0.74, 0.74, 0.66, 1.02, 2.08, 2.32, 1.83, 1.23, 0.67, -0.15, -0.66, -0.65, -0.68, -0.66, -0.68, -0.09, -0.66, -0.68, -0.69, 0.64, -0.67, -0.69, -0.66, -0.66, -0.63, -0.42, 0.35, 0.76, 1.49, 1.49, 1.33, 0.93, 0.7, 0.58, 0.46, 0.71, 0.86, 0.21, 0.87, 2.02, 2.32, 1.39, 0.63, -0.05, -0.56, -0.63, -0.66, -0.67, -0.68, -0.67, -0.69, -0.68, -0.69, -0.66, -0.69, -0.65, -0.61, -0.67, -0.65, -0.64, -0.62, -0.49, 0.14, 0.52, 0.92, 1.01, 0.88, 0.31, 0.37, 0.83, 0.77, 0.5, 0.4, 0.31, 0.2, 0.8, 0.4, -0.16, -0.59, -0.62, -0.63, -0.65, -0.63, -0.66, -0.69, -0.69, -0.71, -0.7, -0.66, -0.65, -0.7, -0.69, -0.67, -0.64, -0.63, -0.64, -0.65, -0.62, -0.29, -0.06, 0.04, -0.01, 0.19, 0.31, 0.73, 0.92, 0.42, 0.31, -0.01, -0.18, -0.26, -0.44, -0.65, -0.69, -0.67, -0.71, -0.67, -0.69, -0.43, -0.68, -0.7, -0.71, -0.66, -0.65, -0.7, -0.7, -0.69, -0.69, -0.71, -0.68, -0.7, -0.68, -0.7, -0.64, -0.58, -0.62, -0.42, 0.01, 0.56, 0.39, 0.33, -0.12, -0.65, -0.69, -0.68, -0.7, -0.7, -0.7, -0.69, -0.68, -0.72, -0.68, -0.7, -0.7, -0.7, -0.68, -0.73, -0.7, -0.71, -0.7, -0.7, -0.73, -0.71, -0.68, -0.7, -0.69, -0.72, -0.71, -0.69, -0.69, -0.67, -0.49, -0.04, 0.19, -0.17, -0.61, -0.7, -0.69, -0.68, -0.68, -0.68, -0.72, -0.68, -0.69, -0.69, -0.66, -0.71, -0.67, -0.66, -0.7, -0.69, -0.7, -0.67, -0.7, -0.68, -0.69, -0.69, -0.74, -0.69, -0.69, -0.69, -0.69, -0.69, -0.71, -0.69, -0.65, -0.55, -0.36, -0.61, -0.71, -0.68, -0.71, -0.7, -0.7, -0.69, -0.68, -0.71, -0.72, -0.71, -0.71, -0.69, -0.68, -0.71, -0.71, -0.69, -0.68, -0.71, -0.71, -0.69, -0.69, -0.68, -0.73, -0.71, -0.72, -0.7, -0.7, -0.71, -0.7, -0.71, -0.7, -0.68, -0.7, -0.69, -0.7, -0.7, -0.7, -0.69, -0.71, -0.7, -0.7, -0.67, -0.68, -0.68, -0.64, -0.5, -0.49, -0.46, -0.47, -0.56, -0.59, -0.69, -0.69, -0.7, -0.72, -0.71, -0.69, -0.71, -0.71, -0.69, -0.7, -0.69, -0.7, -0.73, -0.71, -0.7, -0.69, -0.7, -0.7, -0.71, -0.7, -0.7, -0.7, -0.69, -0.68, -0.67, -0.55, -0.12, 0.23, 0.47, 0.51, 0.59, 0.58, 0.45, 0.39, -0.1, -0.57, -0.72, -0.71, -0.7, -0.7, -0.69, -0.69, -0.7, -0.7, -0.71, -0.68, -0.72, -0.71, -0.71, -0.73, -0.7, -0.72, -0.71, -0.7, -0.69, -0.7, -0.71, -0.67, -0.4, 0.76, 1.48, 1.72, 1.74, 1.3, 1.31, 1.67, 1.62, 1.99, 1.68, 0.8, -0.47, -0.68, -0.68, -0.7, -0.69, -0.71, -0.72, -0.71, -0.71, -0.71, -0.66, -0.7, -0.7, -0.69, -0.7, -0.68, -0.68, -0.71, -0.69, -0.72, -0.66, -0.08, 1.48, 2.16, 2.08, 1.21, 0.54, 0.23, 0.15, 0.21, 0.16, 0.67, 1.38, 2.09, 1.61, -0.27, -0.66, -0.69, -0.68, -0.67, -0.7, -0.69, -0.7, -0.72, -0.74, -0.69, -0.72, -0.69, -0.7, -0.69, -0.71, -0.69, -0.71, -0.69, -0.68, -0.07, 1.8, 1.8, 0.55, -0.23, -0.33, -0.26, -0.04, -0.05, -0.26, -0.41, -0.48, -0.53, 0.18, 1.22, 1.79, 0.01, -0.66, -0.68, -0.69, -0.66, -0.71, -0.68, -0.68, -0.13, -0.67, -0.69, -0.69, -0.69, -0.7, -0.7, -0.71, -0.73, -0.69, -0.33, 1.74, 1.39, -0.13, -0.41, 0.04, 0.55, 0.76, 0.31, 0.18, 0.73, 0.37, 0.5, 0.63, 0.02, -0.46, 0.8, 1.78, -0.34, -0.7, -0.68, -0.71, -0.71, -0.33, -0.68, -0.67, -0.69, -0.64, -0.69, -0.7, -0.7, -0.7, -0.69, -0.69, -0.65, 1.27, 1.44, -0.33, -0.27, 0.42, 0.29, 0.41, 0.25, 0.88, 1.06, 0.33, 0.33, 0.31, 0.82, 0.65, 0.4, -0.2, 1.12, 1.43, -0.58, -0.69, -0.7, -0.7, -0.69, -0.67, -0.73, -0.7, -0.7, -0.12, -0.7, -0.7, -0.69, -0.69, -0.7, 0.18, 1.54, 0.09, 0.29, 0.68, 0.49, 0.54, 0.19, 0.18, 0.3, 1.01, 0.21, 0.17, 0.19, 0.54, 0.23, 0.55, 0.14, -0.03, 1.66, 0.74, -0.67, -0.69, -0.68, -0.72, -0.7, -0.69, -0.7, 0.07, -0.7, -0.01, -0.69, -0.68, -0.7, -0.48, 1.61, 0.55, -0.31, 0.51, 0.36, 0.26, 0.14, 0.16, 0.33, 0.61, 0.47, 0.29, 0.14, 0.12, 0.2, 0.23, 0.27, 0.44, -0.08, -0.3, 1.46, 0, -0.69, -0.71, -0.69, -0.69, -0.71, -0.65, -0.69, -0.69, -0.71, -0.69, -0.69, -0.68, 0.61, 0.87, -0.22, 0.23, 0.22, 0.26, 0.13, 0.12, 0.11, 0.71, 1.19, 0.21, 0.62, 0.09, 0.09, 0.07, 0.12, 0.13, 0.13, 0.54, -0.22, -0.19, 1.13, -0.64, -0.23, -0.38, -0.67, -0.66, -0.7, -0.7, -0.68, -0.7, -0.65, -0.68, -0.6, 1.22, -0.23, -0.38, 0.58, 0.22, 0.2, 0.09, 0.15, 0.09, 0.15, 0.47, 0.4, 0.23, 0.08, 0.08, 0.09, 0.1, 0.1, 0.27, 0.51, -0.26, -0.21, 0.66, -0.57, -0.4, -0.33, -0.65, -0.71, -0.67, -0.68, -0.67, -0.51, -0.14, -0.5, -0.39, 0.48, -0.28, -0.27, 0.55, 0.21, 0.17, 0.08, 0.12, 0.16, 0.64, 0.54, 0.8, 0.69, 0.63, 0.11, 0.18, 0.04, 0.13, 0.46, 0.99, 0.2, -0.43, -0.07, 0.13, -0.29, 0.01, -0.67, -0.68, -0.69, 0.06, -0.67, -0.67, -0.13, -0.23, -0.01, -0.04, -0.22, 0.18, 0.98, 0.6, 0.63, 0.28, 0.3, 0.3, 0.86, 0.45, 0.97, 0.61, 0.46, 0.23, 0.3, 2.05, 2.09, 1.8, 0.6, -0.57, -0.64, -0.19, -0.06, 0.14, -0.42, -0.51, -0.67, -0.69, -0.68, -0.66, -0.56, -0.29, -0.03, 0.09, 0.15, -0.6, -0.37, 0.4, 1.37, 1.54, 1.27, 1.07, 0.45, 0.95, 0.18, 0.19, 0.4, 0.31, 0.4, 1.53, 3.12, 2.01, -0.47, -0.6, -0.57, -0.58, -0.08, -0.3, -0.2, -0.49, -0.51, -0.66, -0.68, -0.67, -0.67, -0.65, -0.54, -0.54, -0.1, 0.16, -0.54, -0.59, -0.47, -0.41, -0.26, -0.17, 1.6, 2.17, 1.54, 0.48, 0.21, 0.31, 0.98, 2.38, 2.24, -0.62, -0.61, -0.46, -0.61, -0.61, -0.41, 0.06, -0.26, -0.23, -0.66, -0.65, -0.64, -0.64, -0.68, -0.65, -0.65, -0.65, -0.52, -0.19, 0.16, 0.38, -0.47, -0.61, -0.46, 0.06, -0.04, -0.44, 3.16, 3.52, 0.8, 0.16, 0.65, 2.89, 2.52, -0.31, 0.88, 1.02, -0.36, -0.51, -0.48, -0.15, 0.47, 0.67, 0.48, -0.64, -0.6, -0.49, -0.55, -0.56, -0.57, -0.63, -0.55, -0.25, 0.31, 0.08, 0.31, -0.17, -0.47, -0.52, 0.33, 0.1, 0.26, 0.85, 1.6, 3.11, 2.75, 2.98, 2.46, 0.7, 0.38, -0.32, 0.29, -0.41, -0.45, -0.34, -0.29, 0.57, 0.49, -0.21, -0.62, -0.65, -0.66, -0.63, -0.61, -0.65, -0.59, -0.63, -0.28, 0.96, 0.96, 0.04, 0.01, -0.29, -0.36, -0.25, 1.24, 0.31, 0.72, 1.15, 0.93, 1.3, 1.14, 0.59, 0.68, 0.64, 0.72, 0.07, 0.03, 0.06, -0.15, -0.12, 1.18, 0.95, -0.07, -0.55, -0.52, -0.49, -0.56, -0.62, -0.64, -0.64, -0.59, -0.4, 0.94, 1.49, 0.25, -0.18, -0.29, -0.02, 0.38, 0.2, 0.65, 0.84, 0.78, 0.15, 0.04, 0.01, 0.51, 0.62, 1.5, 0.22, 0.06, 0.16, -0.07, 0.01, -0.14, 1.26, 1.24, -0.13, -0.68, -0.67, -0.66, -0.49, -0.63, -0.62, -0.63, -0.65, -0.61, 0.92, 1.54, 0.44, -0.17, -0.14, 0.04, -0.09, 0.01, 0.26, 0.86, 0.19, -0.01, -0.1, -0.15, -0.08, 0.04, 0.55, 0.25, 0.1, 0.09, -0.01, -0.12, -0.12, 1.38, 1.64, -0.02, -0.66, -0.65, -0.04, -0.68, -0.69, -0.65, -0.67, -0.58, -0.61, 0.78, 1.67, 1.16, -0.08, -0.35, 0.33, -0.01, 0.24, 0.37, 0.8, -0.5, -0.38, -0.5, -0.35, -0.4, -0.27, 0.41, 0.39, 0.18, 0.25, 0.35, -0.12, 0.31, 2.05, 1.64, -0.07, -0.66, -0.63, -0.69, -0.41, -0.65, -0.67, -0.68, -0.68, -0.65, 0.55, 1.52, 1.7, 0.25, 0.38, 0.38, 0.41, 0.24, 0.52, 0.26, -0.28, -0.13, -0.51, -0.42, -0.31, -0.41, 0.68, 0.48, 0.47, -0.03, 0.85, 0.13, 1.55, 2.26, 1.45, -0.15, -0.66, -0.67, -0.68, -0.68, -0.71, -0.23, -0.69, -0.64, -0.62, 0.26, 1.69, 1.73, 0.79, 0.01, 0.19, 0.45, 0.53, 0.68, 1.12, 0.46, -0.37, -0.09, -0.05, -0.39, -0.04, 0.4, 0.87, 0.6, 0.39, 0.35, 0.17, 1.78, 2.51, 1.27, -0.38, -0.58, -0.67, -0.43, -0.73, -0.67, -0.31, -0.47, -0.69, -0.64, -0.3, 1.26, 2.38, 1.01, -0.03, 0.18, 0.14, 0.8, 0.64, 0.33, -0.37, 0.52, 1.01, 1.05, 0.23, -0.38, 0.25, 0.45, 0.83, 0.39, 0, 0.76, 2.21, 2.25, 0.89, -0.66, -0.65, -0.68, -0.66, -0.67, -0.65, -0.69, -0.7, -0.66, -0.63, -0.65, 0.86, 2.02, 1.58, 0.85, 0.03, 0.24, 1.31, 0.07, -0.45, -0.55, 0.14, 0.34, 0.43, 0.25, -0.48, -0.13, 0.93, 1.59, 0.98, -0.06, 0.14, 1.83, 1.14, 0.07, -0.56, -0.69, -0.69, -0.68, -0.69, -0.68, -0.7, -0.64, -0.64, -0.7, -0.63, -0.08, 1.36, 1.61, 0.42, 0.23, 0.83, 1.86, 0.89, -0.19, -0.53, 0.3, 0.8, 0.47, 0.36, -0.49, 0.51, 1.17, 2.35, 2.06, 0.16, -0.31, 1.47, 0.26, -0.56, -0.63, -0.67, -0.62, -0.66, -0.61, -0.57, -0.7, -0.66, -0.67, -0.67, -0.69, -0.64, -0.05, 0.96, 0.52, 0.43, 1.55, 2.1, 1.41, 0.69, -0.07, 0.37, 0.61, 0.44, 0.4, -0.28, 1.17, 1.52, 1.41, 2.09, 1.48, 0.4, 0.25, -0.3, -0.66, -0.64, -0.67, -0.63, -0.67, -0.65, -0.69, -0.21, -0.66, -0.67, -0.68, -0.67, -0.7, -0.54, 0.1, 0.65, 0.83, 2.08, 2.98, 2.3, 1.56, 0.78, 0.13, 0.77, 0.39, 0.28, 0.47, 1.7, 2.49, 2.69, 2.65, 1.38, 0.36, -0.11, -0.64, -0.64, -0.67, -0.69, -0.68, 0.23, -0.66, -0.7, -0.71, -0.16, -0.69, -0.57, -0.67, -0.67, -0.65, -0.43, 0.24, 0.86, 1.85, 2.69, 2.45, 1.68, 1.03, 0.4, 0.47, 0.86, 0.82, 1.13, 2.12, 2.09, 2.62, 2.05, 1, 0.03, -0.39, -0.64, -0.63, -0.62, -0.68, -0.68, -0.65, -0.65, -0.64, -0.68, -0.65, -0.7, -0.66, -0.64, -0.68, -0.63, -0.63, -0.42, 0.14, 0.96, 1.78, 2.01, 1.59, 0.95, 0.55, 1.06, 1.05, 0.34, 1.14, 0.36, 0.85, 0.76, 0.92, -0.03, -0.29, -0.64, -0.62, -0.64, -0.67, -0.66, -0.67, -0.67, -0.68, -0.67, -0.68, -0.68, -0.67, -0.67, -0.67, -0.65, -0.64, -0.64, -0.6, -0.47, -0.1, 0.42, 0.52, 0.4, 0.24, 0.17, 0.07, 0.56, 0.55, -0.08, 0.05, -0.06, -0.04, -0.15, -0.43, -0.67, -0.7, -0.71, -0.68, -0.69, -0.47, -0.7, -0.69, -0.7, -0.67, -0.69, -0.68, -0.68, -0.67, -0.67, -0.7, -0.7, -0.7, -0.69, -0.6, -0.48, -0.39, -0.45, -0.33, 0.04, 0.82, 0.51, 0.47, -0.19, -0.5, -0.56, -0.57, -0.71, -0.68, -0.69, -0.71, -0.7, -0.72, -0.7, -0.71, -0.73, -0.7, -0.71, -0.68, -0.72, -0.7, -0.69, -0.71, -0.71, -0.71, -0.69, -0.67, -0.66, -0.7, -0.72, -0.68, -0.69, -0.69, -0.48, -0.05, 0.01, -0.18, -0.57, -0.67, -0.69, -0.68, -0.68, -0.73, -0.68, -0.71, -0.68, -0.68, -0.7, -0.69, -0.69, -0.72, -0.65, -0.7, -0.73, -0.67, -0.71, -0.68, -0.7, -0.7, -0.69, -0.69, -0.7, -0.7, -0.71, -0.69, -0.7, -0.68, -0.68, -0.63, -0.4, -0.64, -0.68, -0.69, -0.7, -0.7, -0.68, -0.65, -0.66, -0.67, -0.71, -0.68, -0.7, -0.66, -0.73, -0.7, -0.69, -0.7, -0.7, -0.66, -0.71, -0.64, -0.69, -0.69, -0.72, -0.7, -0.69, -0.71, -0.71, -0.71, -0.71, -0.72, -0.7, -0.72, -0.69, -0.72, -0.73, -0.7, -0.72, -0.71, -0.69, -0.67, -0.69, -0.67, -0.73, -0.71, -0.71, -0.69, -0.6, -0.33, -0.24, -0.04, 0.11, 0.03, -0.01, -0.23, -0.61, -0.65, -0.69, -0.7, -0.71, -0.7, -0.69, -0.7, -0.71, -0.69, -0.69, -0.7, -0.72, -0.7, -0.71, -0.7, -0.71, -0.67, -0.68, -0.69, -0.7, -0.7, -0.7, -0.69, -0.58, -0.14, 0.3, 0.64, 0.56, 0.73, 0.84, 1.11, 1.13, 0.68, 0.36, -0.13, -0.53, -0.65, -0.69, -0.7, -0.71, -0.67, -0.7, -0.69, -0.68, -0.69, -0.7, -0.74, -0.7, -0.72, -0.69, -0.72, -0.7, -0.7, -0.68, -0.69, -0.71, -0.69, -0.57, 0.27, 1.02, 1.88, 1.62, 1.36, 0.81, 0.84, 0.94, 1.09, 1.75, 2.09, 1.42, 0.28, -0.42, -0.66, -0.68, -0.68, -0.71, -0.72, -0.68, -0.7, -0.71, -0.69, -0.71, -0.71, -0.72, -0.7, -0.69, -0.71, -0.7, -0.7, -0.67, -0.66, -0.61, 0.54, 2.17, 1.63, 0.55, -0.06, -0.11, -0.14, -0.17, -0.26, -0.29, -0.34, 0.21, 1.43, 2.06, 0.9, -0.49, -0.68, -0.67, -0.65, -0.7, -0.7, -0.69, -0.69, -0.69, -0.7, -0.69, -0.71, -0.7, -0.69, -0.7, -0.66, -0.7, -0.68, -0.62, 0.61, 2.55, 0.9, -0.23, -0.25, -0.18, -0.07, 0.15, 0.28, 0.07, 0.32, 0.36, -0.28, -0.46, 0.45, 1.97, 1.09, -0.54, -0.68, -0.67, -0.71, -0.69, -0.66, -0.67, -0.11, -0.67, -0.71, -0.69, -0.72, -0.69, -0.68, -0.67, -0.66, -0.69, 0.21, 2.47, 0.29, -0.54, 0.13, 0.43, 0.51, 0.97, 0.38, 0.52, 1.25, 0.95, 0.52, 0.35, 0.12, -0.43, -0.04, 2.1, 0.17, -0.66, -0.68, -0.69, -0.7, -0.14, -0.67, -0.69, -0.67, -0.71, -0.69, -0.65, -0.67, -0.7, -0.68, -0.7, -0.5, 1.82, 0.2, -0.54, 0.5, 0.3, 0.39, 0.54, 0.3, 1.27, 1.31, 0.45, 0.32, 0.37, 0.23, 0.22, 0.65, -0.17, 0, 2.28, -0.35, -0.67, -0.68, -0.67, -0.71, -0.67, -0.69, -0.67, -0.7, -0.06, -0.72, -0.7, -0.7, -0.7, -0.67, 0.64, 1.85, -0.43, 0.77, 0.23, 0.27, 0.26, 0.29, 0.18, 1.19, 0.95, 0.24, 0.25, 0.25, 0.18, 0.19, 0.22, 0.42, -0.26, 0.28, 1.9, -0.6, -0.67, -0.67, -0.68, -0.7, -0.6, -0.71, -0.57, -0.71, -0.31, -0.68, -0.68, -0.7, -0.32, 1.74, 0.19, 0.12, 0.2, 0.12, 0.2, 0.16, 0.16, 0.07, 0.26, 0.21, 0.2, 0.07, 0.2, 0.22, 0.15, 0.23, 0.44, 0.68, -0.46, 0.64, 0.81, -0.64, -0.66, -0.67, -0.66, -0.67, -0.7, -0.71, -0.69, -0.69, -0.69, -0.69, -0.66, 1.15, 0.22, -0.17, 0.53, 0.08, 0.13, 0.14, 0.18, 0.04, 0.03, 0.18, 0.28, 0.15, 0.05, 0.07, 0.19, 0.22, 0.42, 0.31, 0.92, -0.24, -0.36, 1.35, -0.62, -0.33, -0.62, -0.67, -0.67, -0.75, -0.69, -0.71, -0.71, -0.67, -0.72, -0.46, 1.24, -0.29, 0.14, 0.41, 0.21, 0.11, 0.1, 0.08, 0.06, 0.15, 0.64, 0.2, 1.23, 0.15, 0.07, 0.07, 0.32, 0.25, 0.61, 0.67, 0.13, -0.29, 0.25, -0.48, -0.07, -0.11, -0.65, -0.68, -0.71, -0.7, -0.66, -0.4, -0.26, -0.45, -0.26, 0.44, -0.38, 0.57, 0.67, 0.12, 0.07, 0.15, 0.11, 0.03, 0.33, 1.93, 1.47, 2.09, 0.09, 0.11, 0.04, 0.17, 0.87, 0.44, 1.3, -0.16, -0.54, -0.36, 0.16, -0.62, -0.23, -0.68, -0.71, -0.73, -0.17, -0.67, -0.63, 0.09, -0.31, 0.28, -0.17, -0.13, 0.35, 1.57, 0.68, 0.54, 0.24, 0.35, 0.25, 0.32, 2.25, 2.47, 1.54, 0.29, 0.27, 0.25, 0.39, 0.64, 1.46, -0.21, -0.42, -0.47, -0.47, 0.6, -0.03, -0.41, -0.56, -0.68, -0.72, -0.68, -0.68, -0.49, 0.01, 0.09, 0.16, -0.12, -0.63, -0.61, 0.3, 2.08, 1.38, 0.78, 0.22, 0.21, 0.21, 0.05, 0.1, 0.05, 0.2, 0.23, 0.92, 0.52, 2.01, -0.45, -0.57, -0.53, -0.52, -0.5, 0.8, -0.32, -0.51, -0.61, -0.68, -0.68, -0.65, -0.69, -0.54, -0.47, 0.02, 0.03, -0.23, -0.61, -0.63, -0.6, -0.4, -0.6, 1.4, 2.53, 0.47, 0.16, 0.15, -0.01, 0.02, 0.17, 0.77, 3.15, 0.48, -0.33, -0.44, -0.66, -0.49, -0.48, -0.52, 0.26, -0.56, -0.28, -0.54, -0.57, -0.68, -0.7, -0.66, -0.68, -0.63, -0.31, -0.41, 0.2, -0.44, -0.63, -0.62, -0.46, 0.11, -0.31, 2.18, 3.4, 0.74, 0.06, 0.06, 0.11, 0.73, 3.25, 1.1, -0.38, -0.49, 0.1, -0.38, -0.21, -0.19, -0.33, 0.53, 0.36, -0.59, -0.66, -0.62, -0.66, -0.65, -0.56, -0.59, -0.56, -0.05, 0.16, 0.26, -0.36, -0.52, -0.51, -0.54, -0.3, -0.41, -0.19, 0.96, 3.67, 0.69, 0.31, 0.39, 2.62, 1.21, 0.59, -0.06, 0.23, 0.3, 0.02, 0.19, 0.03, -0.22, 0.96, -0.01, -0.54, -0.58, -0.51, -0.65, -0.64, -0.57, -0.58, -0.51, -0.23, 0.96, 0.58, 0.05, -0.32, -0.2, -0.04, 0.19, 0.16, 0.62, 0.55, 0.12, 2.7, 3.16, 2.47, 0.7, 0.51, 1.56, 0.08, 0.12, 0.51, 0.02, 0.25, -0.06, 0.44, 1, 0.28, -0.57, -0.6, -0.6, -0.17, -0.63, -0.62, -0.62, -0.6, -0.48, 0.83, 1.26, 0.23, -0.25, 0.04, -0.07, 0.24, 0.17, 0.88, 2.72, 0.3, 0.44, -0.12, 0.06, 0.26, 2.03, 0.62, 0.13, 0.11, 0.03, -0.02, 0.01, -0.15, 1, 1.3, 0.16, -0.65, -0.64, -0.65, -0.66, -0.58, -0.65, -0.65, -0.62, -0.62, 0.72, 1.54, 0.52, -0.35, 0.05, 0.01, 0.05, 0.1, 0.28, 1.19, 0.84, 0.1, -0.35, -0.46, 0.69, 0.83, 0.23, 0.45, 0.19, 0.28, 0, 0.1, 0.17, 1.79, 1.39, 0.02, -0.62, -0.65, -0.6, -0.26, -0.69, -0.69, -0.68, -0.65, -0.6, 0.74, 1.71, 1.79, -0.07, 0.44, 0.18, 0.33, 0.16, 0.03, 0.19, 0.39, -0.6, -0.43, -0.55, -0.48, 0.34, 0.32, 0.03, 0.28, 0.1, 0.05, 0.09, 0.54, 1.79, 1.67, -0.04, -0.64, -0.68, -0.68, -0.7, -0.68, -0.31, -0.61, -0.7, -0.65, 0.51, 1.92, 1.89, 0.37, 0.12, 0.42, 0.41, 0.11, 0.12, 0.25, -0.04, -0.61, -0.57, -0.59, -0.62, 0.19, 0.58, 0.31, 0, -0.09, 0.15, 0.22, 0.7, 1.88, 1.85, -0.11, -0.68, -0.69, -0.31, -0.67, -0.65, -0.4, -0.67, -0.69, -0.66, 0.18, 1.78, 2, 0.5, 0.02, 0.52, 0.17, 0.17, 0.57, 0.64, -0.05, -0.68, -0.66, -0.6, -0.58, 0.08, 1.02, 0.88, 0.49, 0.27, 0.29, -0.15, 0.84, 2.26, 1.69, -0.38, -0.68, -0.69, -0.71, -0.7, -0.68, -0.7, -0.68, -0.68, -0.65, -0.26, 1.67, 2.57, 1.67, -0.08, 0.06, 0.41, 0.88, 0.58, 1.27, -0.19, -0.06, 0.96, 0.92, -0.14, -0.24, 1.03, 1.56, 0.96, 0.16, -0.03, 0.12, 1.77, 2.04, 0.96, -0.67, -0.64, -0.69, -0.66, -0.68, -0.64, -0.67, -0.55, -0.63, -0.59, -0.58, 0.94, 2.32, 2, 1.14, -0.19, 0.45, 0.97, 1.58, 0.72, -0.25, -0.33, 0.4, 1.09, -0.27, -0.21, 1.2, 1.56, 1.91, 0.68, 0.12, -0.06, 1.68, 0.77, -0.1, -0.62, -0.68, -0.6, -0.7, -0.7, -0.68, -0.7, -0.63, -0.69, -0.59, 0, 1.27, 1.92, 0.31, -0.37, 0.05, 2, 2.13, 1.28, 0.55, -0.13, 0.51, 0.97, 0.23, 0.14, 1.73, 2.28, 2.35, 1.98, -0.04, -0.27, 1.23, 0.58, -0.33, -0.69, -0.66, -0.64, -0.67, -0.67, -0.71, -0.64, -0.7, -0.65, -0.67, -0.59, 0.02, 0.86, 0.62, 0.18, 1.99, 2.22, 1.73, 1.84, 0.55, 0.37, 0.14, 0.52, 0.57, 0.21, 2.04, 2.02, 2.73, 1.77, 1.06, 0.8, 0.5, -0.23, -0.67, -0.64, -0.66, -0.68, -0.68, -0.73, -0.09, -0.69, -0.69, -0.65, -0.66, -0.63, -0.44, -0.06, 0.25, 0.55, 2.17, 2.8, 2.61, 1.6, 1.66, 0.48, 0.94, 0.43, 0.23, 0.78, 1.82, 3.95, 4.31, 3.57, 1.53, 0.49, 0, -0.48, -0.7, -0.69, -0.69, -0.68, 0.15, -0.6, -0.7, -0.6, -0.68, -0.66, -0.63, -0.66, -0.69, -0.43, 0.1, 0.91, 1.88, 3.41, 3.32, 2.26, 1.37, 0.8, 0.5, 0.62, 0.42, 1.18, 1.19, 3.07, 3.11, 2.89, 1.52, 0.25, -0.37, -0.64, -0.64, -0.63, -0.67, -0.66, -0.66, -0.6, -0.64, -0.63, -0.63, -0.68, -0.62, -0.62, -0.65, -0.62, -0.16, 0.16, 1.63, 2.52, 2.81, 1.95, 0.44, 0.53, 0.68, 0.83, -0.16, 0.7, 0.77, 1.86, 1.52, 1.68, 0.35, -0.21, -0.69, -0.68, -0.65, -0.68, -0.66, -0.67, -0.68, -0.73, -0.69, -0.71, -0.67, -0.66, -0.62, -0.64, -0.68, -0.62, -0.56, -0.3, 0, 1.18, 1.08, 0.34, 0.34, 0.24, 0.27, 0.25, 0.31, -0.14, 0.25, 0.31, 0.43, 0.14, -0.41, -0.61, -0.66, -0.71, -0.7, -0.69, -0.57, -0.69, -0.71, -0.74, -0.65, -0.71, -0.68, -0.67, -0.69, -0.69, -0.67, -0.69, -0.69, -0.64, -0.54, -0.28, -0.17, -0.25, -0.18, 0.04, 0.85, 0.22, 0.78, -0.14, -0.28, -0.37, -0.39, -0.6, -0.68, -0.7, -0.7, -0.71, -0.67, -0.7, -0.69, -0.68, -0.69, -0.69, -0.71, -0.67, -0.69, -0.72, -0.72, -0.67, -0.71, -0.67, -0.68, -0.7, -0.68, -0.71, -0.68, -0.67, -0.67, -0.42, -0.08, -0.06, -0.08, -0.48, -0.67, -0.69, -0.69, -0.69, -0.71, -0.71, -0.7, -0.7, -0.67, -0.7, -0.72, -0.71, -0.71, -0.7, -0.7, -0.71, -0.69, -0.69, -0.7, -0.7, -0.71, -0.71, -0.7, -0.69, -0.71, -0.73, -0.69, -0.67, -0.7, -0.69, -0.66, -0.4, -0.61, -0.71, -0.69, -0.66, -0.69, -0.68, -0.68, -0.67, -0.72, -0.69, -0.69, -0.72, -0.67, -0.7, -0.69, -0.65, -0.7, -0.68, -0.7, -0.67, -0.71, -0.64, -0.59, -0.62, -0.63, -0.68, -0.7, -0.72, -0.72, -0.72, -0.72, -0.68, -0.71, -0.69, -0.71, -0.72, -0.71, -0.72, -0.71, -0.72, -0.7, -0.72, -0.67, -0.7, -0.69, -0.68, -0.69, -0.65, -0.49, -0.22, 0.09, 0.02, -0.14, -0.1, 0.08, 0.33, -0.01, -0.18, -0.44, -0.6, -0.71, -0.68, -0.71, -0.71, -0.7, -0.68, -0.7, -0.7, -0.69, -0.73, -0.72, -0.7, -0.7, -0.71, -0.69, -0.71, -0.7, -0.67, -0.68, -0.71, -0.59, -0.23, 0.28, 0.62, 1.2, 1.65, 1.67, 1.8, 2.01, 1.71, 1.2, 0.69, 0.37, 0.06, -0.53, -0.67, -0.71, -0.68, -0.72, -0.72, -0.72, -0.7, -0.71, -0.72, -0.72, -0.69, -0.69, -0.71, -0.69, -0.73, -0.69, -0.67, -0.7, -0.69, -0.59, 0.05, 0.6, 1.53, 1.1, 0.44, 0.2, 0.2, 0.14, 0.09, 0.34, 0.29, 0.99, 1.71, 1.09, 0.28, -0.45, -0.67, -0.66, -0.7, -0.69, -0.68, -0.72, -0.68, -0.66, -0.7, -0.71, -0.71, -0.71, -0.69, -0.69, -0.67, -0.66, -0.67, -0.64, -0.12, 1.15, 1.99, 0.77, -0.37, -0.21, -0.33, -0.09, -0.03, -0.13, 0.26, -0.25, -0.36, 0.63, 1.55, 1.4, 0.49, -0.51, -0.67, -0.67, -0.68, -0.67, -0.71, -0.73, -0.67, -0.71, -0.67, -0.7, -0.7, -0.65, -0.68, -0.69, -0.66, -0.67, -0.36, 1.33, 1.38, 0.06, -0.34, 0.24, 0.17, 0.51, 0.42, 0.2, 0.6, 0.73, 0.47, 0.27, -0.3, -0.18, 1.59, 2, -0.2, -0.65, -0.66, -0.69, -0.69, -0.7, -0.68, -0.34, -0.65, -0.7, -0.7, -0.71, -0.64, -0.69, -0.69, -0.64, -0.58, 1.14, 1.66, 0.03, -0.14, 0.4, 0.64, 0.7, 0.74, 1.24, 1.43, 0.86, 0.49, 0.53, 0.75, 0.86, 0.35, -0.37, 0.7, 1.87, -0.63, -0.67, -0.71, -0.69, -0.63, -0.68, -0.68, -0.67, -0.67, -0.67, 0.05, -0.68, -0.69, -0.69, -0.65, -0.26, 2.33, -0.28, -0.02, 0.77, 0.35, 0.44, 0.38, 0.72, 1.73, 1.71, 1.38, 1.05, 0.59, 0.41, 0.42, 0.5, -0.09, -0.34, 1.44, 0.44, -0.69, -0.69, -0.68, -0.68, -0.7, -0.71, -0.67, -0.71, 0.08, -0.68, -0.69, -0.69, -0.66, -0.63, 1.41, 0.37, -0.55, 0.47, 0.43, 0.36, 0.39, 0.58, 0.5, 0.74, 0.33, 0.55, 0.38, 0.38, 0.7, 0.53, 0.51, 0.7, -0.11, -0.14, 1.8, -0.22, -0.7, -0.68, -0.7, -0.68, -0.55, -0.62, -0.69, -0.7, -0.44, -0.66, -0.69, -0.7, 0.07, 1.31, -0.4, 0.2, 0.6, 0.66, 0.48, 0.41, 0.16, 0.28, 0.21, 0.07, 0.22, 0.12, 0.19, 0.14, 0.7, 1.21, 0.45, 0.25, -0.32, -0.07, 1.68, -0.64, -0.69, -0.69, -0.69, -0.71, -0.66, -0.68, -0.66, -0.7, -0.69, -0.67, -0.64, 1.83, -0.02, -0.26, 0.92, 0.32, 0.67, 0.53, 0.14, 0.11, 0.12, 0.25, 0.56, 0.09, 0.06, 0.17, 0.2, 0.21, 1.07, 0.99, 0.36, 0.1, -0.42, 1.08, -0.46, -0.7, -0.71, -0.66, -0.69, -0.69, -0.67, -0.7, -0.66, -0.68, -0.67, -0.39, 1.16, -0.31, 0.04, 0.63, 0.28, 0.4, 0.13, 0.13, 0.11, 0.11, 0.29, 0.28, 0.15, 0.16, 0.14, 0.21, 0.17, 0.26, 0.73, 0.33, 0.25, -0.44, -0.34, 0.21, -0.47, -0.16, -0.55, -0.66, -0.69, -0.7, -0.7, -0.51, 0.12, -0.52, 0.14, -0.25, -0.39, 0.51, 0.85, 0.99, 0.52, 0.18, 0.15, 0.09, 0.12, 0.9, 2.77, 0.65, 0.08, 0.15, 0.1, 0.31, 0.37, 0.28, 0.66, -0.08, -0.42, -0.49, 1.12, -0.48, -0.11, -0.56, -0.7, -0.71, -0.59, -0.68, -0.68, -0.13, -0.43, 0.48, -0.39, -0.55, -0.05, 0.74, 1.01, 0.39, 0.33, 0.22, 0.09, 0.14, 1.63, 3.6, 1.32, 0.64, 0.23, 0.24, 0.27, 0.36, -0.04, 0.19, -0.04, -0.1, -0.26, -0.01, -0.47, -0.13, -0.53, -0.69, -0.68, -0.74, -0.68, -0.59, -0.15, -0.02, 0.89, -0.5, -0.46, -0.25, -0.18, 0.67, 0.33, 0.46, 0.26, 0.25, 0.3, 0.03, -0.04, 0.09, 0.21, 0.37, 0.59, 0.44, 0.17, 0.03, 0.02, 0.12, -0.1, -0.31, -0.2, -0.07, -0.24, -0.51, -0.65, -0.68, -0.7, -0.66, -0.57, -0.58, -0.29, 0.85, -0.18, -0.54, -0.37, -0.47, -0.37, -0.24, 1.35, 1.17, 0.8, 0.22, -0.03, -0.03, 0, 0.24, 1.11, 2.14, 0.27, 0.06, -0.01, 0.14, 0.02, 0, 0.14, 0.14, 0.08, 0.22, -0.6, -0.65, -0.69, -0.67, -0.66, -0.51, -0.59, -0.5, 0.84, -0.31, -0.53, -0.28, -0.54, -0.58, -0.45, -0.12, 2.09, 2.36, 0.25, 0.03, 0.04, 0.03, 0.04, 1.95, 1.02, 0.25, 0.27, 0.23, 0.04, 0.02, 0.15, -0.03, 0.15, 0.54, -0.49, -0.68, -0.67, -0.63, -0.64, -0.61, -0.69, -0.65, 0.13, 0.51, -0.26, -0.05, 0.02, 0.08, -0.2, -0.08, 0.08, 0.24, 1.38, 1.61, -0.02, 0, 0.01, 0.71, 2.76, 0.17, 0.18, 0.06, 0.2, 0.05, 0.12, 0.12, 0.07, 0.54, 0.55, -0.67, -0.65, -0.63, -0.19, -0.59, -0.64, -0.64, -0.58, -0.15, 1.01, 0.38, 0.2, -0.08, -0.01, 0.45, 0.17, 0.07, 0.12, 0.9, 2.56, 2.81, 2.8, 2.94, 2.96, 0.63, 0.31, 0.12, 0.21, 0.1, 0.1, 0, 0.25, 0.19, 0.98, 0.65, -0.64, -0.65, -0.67, -0.68, -0.65, -0.64, -0.62, -0.6, -0.5, 0.66, 1.09, -0.11, 0.04, 0.14, 0.07, 0.26, 0.36, 0.24, 0.63, 0.96, 1.09, 1.81, 1.57, 0.77, 0.32, 0.3, 0.38, 0.78, 0.02, -0.04, -0.05, -0.04, 0.66, 1.01, 0.66, -0.65, -0.66, -0.64, 0.23, -0.69, -0.64, -0.62, -0.62, -0.57, 1.11, 1.5, 0.64, 0.06, 0.16, 0, 0.04, 0.48, 0.1, 0.29, 0.87, 0.45, 0.55, 0.53, 0.94, 1.05, 0.51, 0.07, 0.08, 0.05, 0.11, -0.03, 0.38, 0.58, 1, 0.17, -0.61, -0.62, -0.63, -0.67, -0.64, -0.36, -0.58, -0.68, -0.62, 0.74, 1.54, 0.84, -0.06, 0.45, 0.43, 0.02, 0.06, 0.07, 0.34, 0.7, 0.39, 0.47, 0.52, 0.31, 0.55, 1.07, 0.85, 0.56, 0.03, 0.08, 0.51, -0.01, 1.31, 1.12, -0.18, -0.63, -0.69, -0.29, -0.72, -0.62, -0.49, -0.63, -0.67, -0.67, 0.33, 1.83, 1.73, 0.12, 0.05, 0.02, 0.12, 0.35, 0.66, 0.76, 0.41, -0.09, -0.5, -0.54, -0.19, 0.44, 0.81, 1.56, 0.87, 0.45, 0.36, 0.59, -0.15, 1.58, 1.41, -0.33, -0.68, -0.68, -0.67, -0.69, -0.67, -0.68, -0.64, -0.69, -0.68, 0, 2.09, 1.64, 0.58, 0.33, 0.25, 0.11, 0.75, 1.46, 0.83, 0.33, -0.51, -0.29, -0.31, -0.48, 0.43, 0.57, 0.61, 0.71, 1.45, 0.66, 0.29, 0.34, 1.83, 1.37, -0.41, -0.69, -0.69, -0.68, -0.73, -0.69, -0.71, -0.39, -0.68, -0.67, -0.38, 1.67, 2.46, 1.14, 0.01, 0.16, 0.99, 1.46, 1.1, 0.87, 0.2, -0.45, 0.12, -0.07, -0.3, -0.09, 0.81, 0.96, 1.39, 1.03, 0.29, -0.05, 0.89, 1.86, 0.86, -0.66, -0.67, -0.65, -0.7, -0.7, -0.69, -0.68, -0.67, -0.66, -0.67, -0.63, 0.66, 2.19, 2.16, 0.51, -0.1, 0.16, 1.04, 1.57, 1.51, 0.7, -0.33, 0.38, 0.34, -0.4, -0.05, 1.75, 1.65, 1.67, 0.62, 0.09, 0.11, 1.23, 1.19, -0.13, -0.64, -0.68, -0.65, -0.69, -0.68, -0.68, -0.67, -0.68, -0.66, -0.62, -0.18, 1.66, 1.9, 0.11, -0.03, 0.9, 2.01, 2.38, 2.14, 0.75, -0.24, 0.29, 0.79, -0.28, 0.29, 1.76, 1.98, 1.97, 1.29, 0.49, -0.05, 1.44, 0.66, -0.28, -0.67, -0.65, -0.67, -0.67, -0.7, -0.72, -0.62, -0.68, -0.67, -0.69, -0.64, 0.05, 0.78, 0.46, -0.08, 1.4, 2.38, 3.06, 2.16, 1.5, -0.11, 0.36, 0.61, -0.18, 0.7, 1.56, 2.51, 2.36, 2.1, 0.75, 0.16, 0.69, 0.02, -0.64, -0.68, -0.67, -0.66, -0.68, -0.71, -0.22, -0.67, -0.66, -0.67, -0.65, -0.67, -0.26, 0.19, 0.08, 0.89, 1.34, 2.74, 2.91, 2.35, 1.23, 0.07, 0.48, 1.08, 0.08, 0.93, 1.75, 3.28, 3.39, 3.17, 1.51, 0.19, 0.2, -0.28, -0.65, -0.64, -0.66, -0.67, 0.01, 0.16, -0.66, -0.66, -0.68, -0.67, -0.71, -0.65, -0.65, -0.4, 0.2, 0.51, 1.97, 4.04, 4.15, 3.47, 1.24, 0.51, 0.02, 0.42, 0.21, 0.65, 1.57, 2.99, 2.93, 2.54, 1.33, 0.47, 0.08, -0.62, -0.61, -0.67, -0.69, -0.67, -0.69, -0.64, -0.66, -0.65, -0.68, -0.68, -0.68, -0.66, -0.64, -0.64, -0.26, 0.4, 1.79, 2.78, 2.62, 2.18, 1.2, 0.19, 0.27, 0.17, -0.05, 0.21, 1.38, 1.35, 1.69, 2.15, 0.63, 0.16, -0.5, -0.65, -0.69, -0.71, -0.67, -0.68, -0.69, -0.7, -0.66, -0.67, -0.63, -0.65, -0.67, -0.64, -0.65, -0.66, -0.61, -0.23, 0.42, 0.83, 0.44, 0.97, 0.68, 0.37, 0.79, -0.02, 0.18, 0.15, 0.34, 0.49, 0.49, 0.28, -0.11, -0.58, -0.68, -0.68, -0.66, -0.7, -0.68, -0.66, -0.64, -0.7, -0.71, -0.7, -0.66, -0.66, -0.71, -0.67, -0.67, -0.69, -0.69, -0.67, -0.38, 0.06, 0.02, 0.06, 0.04, 0.19, 0.06, 0.34, 0.02, 0.21, -0.06, -0.08, -0.18, -0.48, -0.66, -0.7, -0.69, -0.7, -0.69, -0.73, -0.7, -0.7, -0.7, -0.68, -0.7, -0.71, -0.66, -0.69, -0.67, -0.68, -0.67, -0.7, -0.68, -0.72, -0.69, -0.64, -0.57, -0.51, -0.39, -0.4, -0.03, 0.12, -0.01, -0.28, -0.48, -0.59, -0.68, -0.7, -0.66, -0.69, -0.69, -0.7, -0.71, -0.68, -0.71, -0.68, -0.69, -0.69, -0.7, -0.71, -0.68, -0.68, -0.67, -0.73, -0.71, -0.68, -0.71, -0.71, -0.67, -0.71, -0.7, -0.7, -0.73, -0.71, -0.59, -0.49, -0.59, -0.7, -0.68, -0.7, -0.66, -0.69, -0.65, -0.68, -0.69, -0.68, -0.71, -0.67, -0.66, -0.67, -0.7, -0.67, -0.68, -0.63, -0.63, -0.52, -0.47, -0.6, -0.62, -0.71, -0.72, -0.71, -0.72, -0.7, -0.7, -0.73, -0.71, -0.72, -0.7, -0.71, -0.71, -0.72, -0.68, -0.71, -0.69, -0.72, -0.67, -0.65, -0.7, -0.71, -0.58, -0.44, -0.23, 0.25, 0.18, 0.28, 0.3, 0.27, 0.24, 0.23, -0.04, 0.09, -0.51, -0.65, -0.7, -0.69, -0.69, -0.68, -0.72, -0.71, -0.7, -0.69, -0.68, -0.69, -0.7, -0.73, -0.68, -0.7, -0.69, -0.72, -0.7, -0.69, -0.66, -0.22, -0.01, 0.33, 1.09, 1.47, 1.26, 1.18, 1.06, 1.07, 1.12, 1.19, 1.1, 0.56, 0.12, -0.1, -0.66, -0.68, -0.67, -0.71, -0.7, -0.7, -0.68, -0.69, -0.67, -0.68, -0.72, -0.68, -0.68, -0.69, -0.71, -0.7, -0.71, -0.69, -0.65, -0.2, 0.28, 1.31, 1.43, 0.84, 0.33, -0.04, -0.14, -0.21, -0.16, 0.05, 0.04, 0.59, 1.35, 1.47, 0.59, 0.01, -0.63, -0.66, -0.69, -0.69, -0.69, -0.68, -0.7, -0.7, -0.7, -0.66, -0.72, -0.71, -0.68, -0.69, -0.69, -0.66, -0.67, -0.21, 0.43, 1.65, 1.27, 0.28, -0.34, 0.09, 0.7, 0.04, 0.12, 0.41, 0.29, -0.03, -0.33, -0.21, 1.06, 1.59, 0.87, 0, -0.67, -0.67, -0.69, -0.67, -0.7, -0.71, -0.67, -0.67, -0.67, -0.71, -0.69, -0.68, -0.67, -0.68, -0.67, -0.55, 0.62, 2.07, 0.92, -0.36, -0.08, 0.4, 0.39, 0.38, 0.39, 0.23, 0.23, 0.69, 0.79, 0.29, 0.41, -0.06, 0.84, 2.36, 1.27, -0.54, -0.68, -0.67, -0.68, -0.67, -0.68, -0.36, -0.68, -0.71, -0.7, -0.69, -0.67, -0.68, -0.67, -0.65, -0.36, 1.92, 1.25, -0.32, 0.36, 0.53, 0.62, 0.46, 0.58, 0.77, 0.59, 0.78, 0.29, 0.32, 0.46, 0.26, 0.43, -0.17, 1.03, 2.34, -0.01, -0.69, -0.7, -0.69, -0.68, -0.67, -0.72, -0.65, -0.68, -0.7, -0.27, -0.7, -0.67, -0.68, -0.66, 0.83, 1.47, -0.19, 0.19, 0.62, 0.59, 0.34, 0.37, 0.55, 1.45, 0.91, 0.85, 0.75, 0.3, 0.36, 0.26, 0.27, 0.13, -0.3, 0.57, 1.68, -0.64, -0.69, -0.69, -0.7, -0.67, -0.7, -0.7, -0.68, 0.15, -0.69, -0.67, -0.71, -0.69, -0.57, 2.23, 0.19, -0.31, 0.77, 0.71, 0.71, 0.4, 0.06, 0.38, 0.95, 1.29, 0.73, 0.37, 0.18, 0.76, 0.31, 0.41, 0.35, -0.02, -0.05, 1.03, 0.38, -0.68, -0.68, -0.7, -0.7, -0.51, 0.02, -0.69, -0.7, -0.67, -0.71, -0.69, -0.7, 0.82, 0.63, -0.37, 0.34, 0.61, 0.77, 0.36, 0.26, 0.23, 0.51, 0.57, 1.02, 0.25, 0.48, 0.28, 0.25, 0.32, 0.11, 0.21, 0.33, -0.21, -0.2, 1.74, -0.57, -0.71, -0.71, -0.69, -0.68, -0.63, -0.68, -0.65, -0.7, -0.68, -0.69, -0.55, 1.56, -0.22, -0.13, 0.35, 0.27, 0.58, 0.2, 0.19, 0.25, 0.45, 0.24, 0.89, 0.21, 0.29, 0.33, 0.25, 0.35, 0.05, 0.33, 0.3, 0.23, -0.39, 0.63, -0.27, -0.69, -0.7, -0.7, -0.69, -0.67, -0.71, -0.69, -0.68, -0.7, -0.68, -0.09, 0.28, -0.54, 0.11, 0.49, 0.39, 0.34, 0.34, 0.21, 0.15, 0.31, 0.09, 0.21, 0.13, 0.28, 0.25, 0.61, 0.35, 0.06, 0.07, 0.09, 0.12, -0.05, -0.45, 1.16, -0.7, -0.61, -0.68, -0.68, -0.7, -0.7, -0.68, -0.62, -0.21, -0.63, 0.77, -0.43, -0.42, 0.34, 0.15, 0.12, 0.25, 0.4, 0.17, 0.2, 0.13, 0.16, 0.09, 0.29, 0.18, 0.11, 0.26, 0.45, 0.06, 0.24, 0.19, 0.28, 0.02, 0.05, 1.1, -0.62, -0.3, -0.52, -0.68, -0.7, -0.64, -0.68, -0.49, -0.32, -0.64, 1.17, -0.48, -0.32, -0.02, 0.35, 0.18, 0.24, 0.74, 0.48, 0.21, 0.17, 0.56, 2.66, 0.57, 0.17, 0.34, 0.42, 0.09, 0.03, 0.16, 0.11, 0.04, -0.07, -0.06, -0.08, -0.23, -0.29, -0.59, -0.67, -0.69, -0.72, -0.71, -0.64, -0.17, -0.61, 0.67, -0.42, 0.15, 0.07, 0.3, 0.11, 0.08, 0.24, 0.44, 0.2, 1.41, 0.15, 0.34, 0.09, 1.22, 0.84, 0.6, 0.06, 0.12, 0.41, 0.05, 0.15, -0.05, 0.53, -0.12, 0.25, -0.2, -0.43, -0.69, -0.7, -0.71, -0.7, -0.66, -0.41, -0.13, 0.47, -0.28, 0.02, 0.08, 0.09, 0.26, 0.11, 0.17, 0.15, 1.13, 1.19, 0.03, 0.09, 0.03, 0.22, 2.27, 0.09, 0.11, 0.05, 0.27, 0.02, 0.09, 0.24, 0.38, -0.19, 0.97, -0.52, -0.61, -0.68, -0.71, -0.71, -0.7, -0.61, -0.51, -0.18, 0.43, 0.12, 0.03, 0.28, -0.01, 0.25, 0.13, 0.09, 0.08, 1.06, 0.7, 0.03, -0.01, 0.03, 0.01, 1.19, -0.05, 0, 0.16, 0.24, 0.07, 0.11, 0.48, 0.63, -0.12, 1.26, -0.62, -0.63, -0.64, -0.63, -0.69, -0.67, -0.54, -0.61, 0.19, 0.19, -0.19, -0.05, 0.06, 0.04, 0.65, 0.21, 0.06, 0.04, 0.21, 1.17, -0.01, 0.1, 0.03, 0.29, 0.3, 0.18, 0.19, 0.88, 0.03, 0.07, 0.22, 0.04, 0.39, 0.13, 1.09, -0.61, -0.64, -0.59, -0.65, -0.68, -0.66, -0.61, -0.64, -0.24, 0.65, 0, 0.35, 0.34, -0.02, 0.09, 0.37, 0.27, 0.18, 0.13, 1.03, 1.86, 2.64, 2.79, 2.9, 0.14, 0.08, 0.4, 0.61, 0.06, 0.1, 0.1, -0.06, 0.38, 0.08, 0.68, -0.61, -0.63, -0.67, 1.13, -0.66, -0.64, -0.62, -0.64, -0.53, 0.48, 0.37, 0.14, -0.08, -0.01, 0.03, 0.44, 0.8, 0.33, 0.19, 0.58, 2.85, 3.18, 2.71, 2.8, 0.2, 0.16, 0.43, 0.31, 0.04, 0.04, 0.01, 0.11, 0.26, 0.75, 0.55, -0.65, -0.64, -0.65, -0.68, -0.65, -0.42, -0.65, -0.63, -0.67, 0.55, 0.87, 0.36, -0.08, 0.14, 0.06, 0.07, 0.41, 0.08, 0.24, 0.79, 2.11, 2.56, 2.6, 2.3, 1.09, 0.81, 0.61, 0.29, 0.41, 0.05, 0.43, 0.7, 0.32, 0.99, 0.43, -0.68, -0.67, -0.18, -0.68, -0.69, -0.1, -0.47, -0.62, -0.65, 0.85, 1.31, 0.23, 0.48, 0.09, 0.04, 0.04, 0.43, 0.54, 0.61, 1.74, 1.45, 1.9, 1.95, 1.43, 1.14, 1.59, 0.87, 1.27, 1.04, 0.41, 0.24, 0.19, 0.5, 0.99, -0.03, -0.67, -0.7, -0.68, -0.7, -0.66, -0.65, -0.65, -0.66, -0.65, 0.1, 1.06, 1.04, -0.17, 0.47, 0.22, 0.37, 1.65, 1.22, 0.61, 0.53, 0.52, 0.87, 0.73, 0.43, 0.38, 0.14, 0.41, 1.32, 1.32, 0.67, 0.04, 0.36, 0.87, 1.03, -0.37, -0.68, -0.66, -0.66, -0.7, -0.69, -0.69, -0.24, -0.67, -0.68, -0.36, 1.46, 1.63, 0.03, 0.84, 0.36, 0.59, 0.76, 0.36, 0.15, 0.33, 0.01, 0.03, -0.06, 0.49, 0.21, 0.81, 1.03, 0.98, 0.83, 1.05, 0.61, 0.15, 1.19, 1.33, -0.64, -0.67, -0.7, -0.69, -0.66, -0.7, -0.68, -0.7, -0.66, -0.67, -0.52, 1.3, 1.71, 0.67, 0.03, 0.62, 1.58, 1.43, 0.8, 0.73, 0.35, -0.01, 0.09, 0.02, 0.65, 0.29, 0.79, 1.63, 0.74, 1.23, 0.9, -0.09, 0.22, 1.42, 0.94, -0.59, -0.67, -0.53, -0.7, -0.68, -0.67, -0.69, -0.68, -0.68, -0.68, -0.63, 0.46, 1.82, 1.36, 0.35, 0.26, 0.92, 0.92, 1.53, 1.45, 0.55, -0.06, 0.38, 0.58, 0.38, 0.66, 1.3, 1.47, 1.6, 1.36, 0.41, 0.06, 0.55, 1.28, -0.13, -0.64, -0.7, -0.66, -0.56, -0.66, -0.71, -0.7, -0.69, -0.69, -0.69, -0.18, 1.5, 2.02, 0.09, 0.05, 0.9, 2, 2.12, 1.48, 0.97, 0.18, 0.26, 1, 0.72, 1.13, 2.08, 1.81, 1.44, 1.37, 0.21, 0.46, 0.88, 0.93, -0.34, -0.69, -0.68, -0.68, -0.69, -0.69, -0.69, -0.67, -0.67, -0.67, -0.69, -0.66, 0.07, 1.1, 0.5, -0.08, 0.99, 2.56, 2.31, 1.69, 1.89, 0.34, 0.49, 1.58, 0.04, 0.74, 2.16, 2.07, 2.4, 2.33, 0.7, 0.22, 1.38, 0.05, -0.66, -0.69, -0.67, -0.67, -0.69, -0.71, -0.28, -0.65, -0.58, -0.68, -0.65, -0.68, -0.31, 0.24, 0.91, 0.35, 1.61, 2.38, 2.02, 2.31, 1.2, 0.74, 0.93, 0.9, -0.03, 1.21, 1.37, 2.21, 2.59, 2.34, 0.48, 0.09, 0.34, -0.31, -0.66, -0.67, -0.69, -0.7, -0.01, -0.33, -0.69, -0.68, -0.69, -0.7, -0.69, -0.64, -0.65, -0.25, 0.47, 0.51, 1.45, 3.47, 3.05, 2.8, 0.95, 0.09, 0.12, 0.57, -0.07, 0.67, 1.17, 2.55, 2.66, 2.18, 1.32, 0.74, 0.14, -0.64, -0.64, -0.67, -0.68, -0.67, -0.69, -0.66, -0.66, -0.6, -0.69, -0.67, -0.68, -0.66, -0.64, -0.48, 0.23, 0.55, 1.1, 2.42, 2.28, 1.51, 0.93, 0.22, -0.24, -0.35, 0.06, -0.02, 1.02, 1.58, 1.78, 1.65, 0.66, 0.31, -0.38, -0.66, -0.67, -0.68, -0.68, -0.68, -0.66, -0.71, -0.67, -0.68, -0.69, -0.68, -0.69, -0.68, -0.7, -0.68, -0.41, 0.19, 0.46, 1.21, 1.44, 1.2, 0.37, 0.19, 0.47, 0.22, 0.19, 0.11, 0.13, 0.24, 0.37, 0.52, 0.11, -0.39, -0.67, -0.66, -0.72, -0.69, -0.66, -0.69, -0.67, -0.71, -0.68, -0.7, -0.67, -0.68, -0.69, -0.68, -0.69, -0.68, -0.69, -0.61, -0.05, 0.4, 0.32, 0.28, 0.12, -0.09, 0.01, 0.46, -0.18, -0.05, 0.14, 0.2, 0.2, -0.01, -0.66, -0.67, -0.68, -0.67, -0.69, -0.68, -0.68, -0.7, -0.69, -0.71, -0.69, -0.69, -0.67, -0.72, -0.56, -0.69, -0.71, -0.67, -0.69, -0.69, -0.7, -0.65, -0.4, -0.06, -0.1, -0.11, 0.28, 0.54, 0.25, 0, -0.23, -0.38, -0.67, -0.67, -0.71, -0.7, -0.71, -0.69, -0.7, -0.69, -0.71, -0.7, -0.74, -0.74, -0.72, -0.7, -0.71, -0.72, -0.69, -0.7, -0.69, -0.7, -0.72, -0.68, -0.68, -0.72, -0.72, -0.72, -0.7, -0.7, -0.59, -0.46, -0.62, -0.68, -0.72, -0.72, -0.7, -0.69, -0.73, -0.73, -0.73, -0.71, -0.7, -0.68, -0.67, -0.69, -0.68, -0.67, -0.59, -0.59, -0.63, -0.33, -0.32, -0.44, -0.56, -0.7, -0.71, -0.72, -0.68, -0.72, -0.67, -0.71, -0.7, -0.74, -0.71, -0.69, -0.69, -0.72, -0.71, -0.71, -0.7, -0.69, -0.67, -0.71, -0.68, -0.67, -0.44, -0.31, -0.04, 0.28, 0.21, 0.15, 0.32, 0.42, 0.34, 0.47, 0.18, -0.03, -0.36, -0.65, -0.7, -0.69, -0.71, -0.68, -0.73, -0.7, -0.69, -0.69, -0.66, -0.68, -0.69, -0.69, -0.72, -0.69, -0.69, -0.7, -0.7, -0.69, -0.64, 0.07, 0.21, 0.6, 1.01, 0.87, 1.18, 1.11, 0.96, 1.06, 1.06, 1.16, 1.36, 0.73, 0.23, -0.1, -0.62, -0.66, -0.67, -0.7, -0.69, -0.7, -0.7, -0.7, -0.71, -0.67, -0.68, -0.69, -0.71, -0.7, -0.7, -0.71, -0.7, -0.69, -0.68, 0.07, 0.69, 1.53, 1.24, 0.51, -0.08, 0.17, -0.24, -0.05, 0.4, -0.08, -0.4, 0.29, 1.19, 1.52, 0.42, 0, -0.45, -0.62, -0.66, -0.64, -0.7, -0.68, -0.68, -0.65, -0.68, -0.7, -0.7, -0.69, -0.7, -0.69, -0.67, -0.71, -0.62, 0.18, 0.84, 1.82, 0.78, -0.19, 0.02, 0.23, 0.21, 0.14, 0.05, 1.05, 0.26, 0.22, -0.22, -0.36, 0.67, 1.52, 1.17, 0.29, -0.47, -0.67, -0.66, -0.72, -0.7, -0.68, -0.71, -0.7, -0.67, -0.69, -0.69, -0.7, -0.68, -0.7, -0.68, -0.24, 0.87, 1.63, 0.37, -0.28, 0.03, 0.29, 0.67, 0.2, 0.5, 0.45, 0.4, 0.69, 0.18, 0.14, 0.15, -0.25, 0.44, 1.97, 1.48, -0.05, -0.68, -0.66, -0.7, -0.69, -0.7, -0.06, -0.69, -0.69, -0.67, -0.7, -0.69, -0.68, -0.7, -0.54, 0.58, 2.44, 1.05, -0.32, 0.2, 0.12, 0.33, 0.27, 0.2, 0.48, 0.71, 0.14, 0.22, 0.23, 0.32, 0.14, 0.22, -0.18, 0.3, 2.21, 0.85, -0.68, -0.69, -0.68, -0.65, -0.7, -0.7, -0.73, -0.7, -0.7, -0.7, -0.7, -0.69, -0.7, -0.6, 1.63, 0.72, -0.24, 0.16, 0.21, 0.15, 0.15, 0.47, 0.34, 0.85, 0.87, 0.49, 0.22, 0.16, 0.17, 0.09, 0.03, 0.25, 0.08, 0.63, 1.73, -0.35, -0.7, -0.69, -0.7, -0.73, -0.69, -0.68, -0.7, 0.17, -0.64, -0.69, -0.68, -0.68, -0.15, 1.49, 0.03, -0.19, 0.33, 0.33, 0.2, 0.19, 0.62, 0.63, 0.99, 1.36, 1.1, 0.49, 0.26, 0.09, 0.29, 0.08, 0.16, 0.44, -0.44, 0.73, 0.61, -0.68, -0.68, -0.69, -0.69, -0.39, 0.13, -0.68, -0.69, -0.69, -0.67, -0.65, -0.66, 1.37, 0.6, -0.41, 0.25, 0.3, 0.04, 0.1, 0.15, 0.51, 0.7, 1.95, 2.02, 1.17, 0.77, 0.28, 0.14, 0.06, 0.13, 0.26, 0.35, -0.11, -0.14, 1.97, -0.51, -0.69, -0.67, -0.71, -0.69, -0.42, -0.65, -0.62, -0.7, -0.69, -0.65, -0.49, 1.42, -0.26, -0.19, 0.11, 0.15, 0.04, 0.14, 0.19, 0.37, 0.41, 0.59, 0.35, 0.52, 0.32, 0.49, 0.12, 0.24, 0.08, 0.07, 0.04, 0.35, -0.4, 0.51, -0.02, -0.69, -0.7, -0.7, -0.68, -0.71, -0.68, -0.69, -0.67, -0.7, -0.69, -0.11, 0.2, -0.32, 0.27, 0.19, 0.07, 0.03, 0.07, 0.15, 0.41, 0.35, 0.19, 0.87, 0.34, 0.43, 0.47, 0.04, 0.12, 0.15, 0.12, 0.12, 0.14, 0.15, -0.42, 1.58, -0.67, -0.68, -0.7, -0.69, -0.69, -0.69, -0.69, -0.72, -0.68, -0.69, 0.92, -0.44, -0.11, 0.11, 0.09, 0.2, 0.07, 0.06, 0.51, 0.72, 0.26, 0.24, 0.63, 0.31, 0.29, 0.68, 0.33, 0.11, 0.12, 0.12, 0.08, 0.13, 0.04, 0.28, 0.87, -0.39, -0.6, -0.68, -0.67, -0.66, -0.71, -0.69, -0.49, -0.36, -0.69, 1.43, -0.15, -0.09, 0.18, 0.29, 0.37, 0.04, 0.2, 0.2, 0.68, 0.28, 1.01, 1.3, 1.51, 0.66, 0.44, 0.34, 0.11, 0.14, 0.1, 0.11, 0.08, 0.12, 0.13, -0.13, 0.72, -0.43, -0.67, -0.69, -0.69, -0.69, -0.7, -0.58, -0.15, -0.52, 0.57, -0.13, 0.06, 0.06, 0.14, 0.09, 0.12, 0.13, 0.43, 0.33, 1.02, 0.73, 1.86, 0.21, 3.13, 0.43, 0.09, 0.1, 0.27, 0.11, 0.09, 0.12, 0.52, 0.03, -0.19, 0.89, -0.56, -0.61, -0.7, -0.69, -0.71, -0.67, -0.6, -0.13, -0.46, -0.23, -0.08, 0.01, 0.06, 0.04, 0.12, 0.08, 0.06, 0.04, 0.2, 2.12, 0.09, 0.09, 0.15, 1.76, 1.18, 0.06, 0.08, 0.4, 0.13, 0.09, 0.11, 0.39, 0.11, -0.17, 0.77, -0.67, -0.59, -0.67, -0.7, -0.71, -0.67, -0.68, -0.24, -0.27, 0.22, 0.25, 0.39, 0.31, 0.05, 0.04, 0.06, 0.06, 0.08, 1.15, 0.74, 0.21, 0.31, 0.2, 0.08, 0.36, 0.39, 0.33, 0.73, 0.13, 0.07, 0.04, 0.1, -0.05, 0.02, 0.74, -0.62, -0.68, -0.27, -0.64, -0.73, -0.68, -0.46, -0.68, -0.23, 0.19, 0.06, 0.3, 0.34, 0.07, 0.04, 0.25, 0.15, 0.36, 0.45, 0.28, 0.13, 2.46, 0.54, 0.14, 0.54, 0.98, 0.68, 0.42, 0.05, 0.16, 0.4, 0.56, 0.2, 0.08, 0.8, -0.66, -0.66, -0.68, 0.72, -0.62, -0.61, -0.64, -0.61, -0.53, 0.59, 0.14, -0.01, 0.26, 0.04, 0.1, 0.49, 0.98, 0.73, 0.71, 0.76, 1.55, 3.96, 3.07, 1.54, 0.31, 0.81, 0.81, 0.09, 0.1, 0.33, 0.13, 0.03, 0.09, 0.32, 0.58, -0.67, -0.68, -0.66, -0.65, -0.64, -0.4, -0.66, -0.64, -0.63, 0.5, 0.17, 0.06, -0.02, 0.16, 0.05, 0.12, 0.36, 0.79, 0.21, 1.16, 2.98, 3.29, 3.44, 2.07, 0.62, 0.43, 0.15, 0.13, 0.59, 0.07, 0.45, 0.42, 0.08, 0.64, 0.65, -0.67, -0.66, -0.24, -0.66, -0.63, -0.07, -0.03, -0.66, -0.66, 0.79, 0.32, 0.45, 0.17, 0.22, 0.01, 0.26, 0.28, 0.47, 0.43, 1.81, 2.7, 2.4, 2.29, 2.22, 1.35, 0.83, 0.59, 0.89, 1.4, 0.38, 0.65, 0.15, 0.12, 0.69, 0.3, -0.69, -0.67, -0.69, -0.67, -0.65, -0.63, -0.65, -0.62, -0.63, 0.64, 0.93, 0.45, 0.73, 0.38, 0.36, 0.11, 0.91, 0.75, 1.13, 1.22, 1.2, 1.66, 1.9, 1.35, 1.34, 0.41, 0.66, 0.95, 1.2, 1.12, 0.53, 0.19, 0.34, 0.71, -0.08, -0.67, -0.68, -0.65, -0.72, -0.7, -0.7, -0.09, -0.67, -0.64, 0.11, 0.92, 0.37, 0.12, 0.26, 0.64, 1.37, 1.01, 0.34, 0.18, 0.22, 0.2, 0.92, 1.62, 0.12, 0.3, 0.08, 1.16, 0.53, 0.92, 1.63, 0.75, 0.1, 0.3, 0.78, -0.35, -0.69, -0.65, -0.67, -0.68, -0.68, -0.7, -0.69, -0.66, -0.66, -0.48, 0.99, 0.99, 0.21, 0.27, 0.78, 1.2, 0.98, 0.4, 0.14, 0.3, 0.42, 0.55, 0.96, 0.13, 0.04, 0.2, 0.34, 0.52, 0.86, 0.48, 1.06, -0.19, 0.79, 0.55, -0.62, -0.66, -0.37, -0.7, -0.7, -0.68, -0.7, -0.69, -0.68, -0.65, -0.65, 0.78, 1.23, 0.2, 0.38, 0.86, 0.41, 0.34, 1, 0.63, 0.07, 0.58, 0.33, 0.61, 0.09, 0.11, 0.31, 0.67, 0.33, 0.48, 0.43, -0.12, 0.12, 1.04, 0.4, -0.62, -0.69, -0.69, -0.68, -0.67, -0.64, -0.73, -0.69, -0.67, -0.69, -0.66, 0.21, 1.14, 1, 0.03, 0.44, 0.62, 0.68, 1.27, 0.85, 0.61, 0.23, 0.67, 0.3, 0.25, 0.19, 0.43, 0.81, 0.63, 0.15, 0.18, -0.17, 0.82, 0.96, -0.24, -0.66, -0.69, -0.62, -0.35, -0.67, -0.68, -0.69, -0.67, -0.69, -0.66, -0.45, 1.19, 1.07, 0, 0.44, 0.41, 1.1, 1.08, 0.84, 1.01, 0.13, 0.43, 0.72, 0.12, 0.13, 1.26, 0.92, 1.22, 0.45, -0.16, 0.46, 0.33, 0.89, -0.3, -0.69, -0.68, -0.67, -0.63, -0.68, -0.67, -0.67, -0.67, -0.69, -0.66, -0.67, 0.03, 1.27, 0.32, 0.24, 0.37, 1.18, 1.4, 1.27, 1.21, 0.14, 0.28, 0.07, -0.03, 0.23, 1.5, 0.93, 1.52, 1.11, 0.51, 0.49, 0.54, -0.06, -0.65, -0.7, -0.69, -0.71, -0.68, -0.66, -0.33, -0.68, -0.5, -0.69, -0.67, -0.69, -0.29, 0.32, 1, -0.06, 1.05, 2.24, 1.83, 1.78, 1.05, -0.02, 0.08, 0.64, 0.48, 0.18, 1.31, 1.46, 1.63, 2.15, 0.47, 0.54, 0.5, -0.24, -0.66, -0.68, -0.69, -0.68, -0.05, -0.65, -0.66, -0.63, -0.69, -0.67, -0.68, -0.67, -0.67, -0.24, 0.49, 0.24, 0.65, 1.89, 2.18, 1.63, 0.54, 0.08, -0.03, 0.62, 0.11, 0.07, 0.56, 0.45, 1.09, 0.93, 0.75, 0.6, 0.08, -0.66, -0.68, -0.68, -0.69, -0.67, -0.71, -0.67, -0.62, 0.24, -0.67, -0.67, -0.66, -0.68, -0.67, -0.47, 0.26, 0.71, 0.9, 1.97, 1.73, 1.2, 1.06, 0.13, -0.01, -0.11, -0.04, 0.15, 0.4, 0.27, 0.73, 0.61, 0.46, 0.51, -0.15, -0.66, -0.66, -0.7, -0.69, -0.69, -0.69, -0.69, -0.7, -0.7, -0.67, -0.67, -0.7, -0.66, -0.7, -0.67, -0.38, 0.46, 0.59, 0.17, 0.48, 0.36, 0.18, 0.21, -0.04, 0.48, 0.04, -0.19, -0.09, 0.34, 0.17, 0.71, 0.33, -0.14, -0.69, -0.7, -0.68, -0.67, -0.67, -0.72, -0.68, -0.67, -0.7, -0.7, -0.71, -0.69, -0.67, -0.69, -0.68, -0.68, -0.69, -0.63, 0.27, 0.5, 0.47, 0.19, 0.02, 0.03, 0.01, -0.02, -0.32, -0.19, -0.08, 0.3, 0.47, 0.12, -0.51, -0.68, -0.72, -0.69, -0.69, -0.7, -0.64, -0.7, -0.67, -0.69, -0.7, -0.7, -0.69, -0.38, -0.7, -0.7, -0.69, -0.68, -0.68, -0.65, -0.42, 0.12, 0.07, 0.15, 0.09, 0.52, 0.71, 0.49, 0.16, 0.05, 0.03, -0.51, -0.69, -0.69, -0.66, -0.67, -0.69, -0.7, -0.66, -0.7, -0.68, -0.69, -0.71, -0.69, -0.7, -0.67, -0.7, -0.69, -0.69, -0.68, -0.7, -0.7, -0.7, -0.69, -0.69, -0.67, -0.71, -0.68, -0.56, -0.4, -0.57, -0.66, -0.72, -0.71, -0.71, -0.7, -0.68, -0.68, -0.68, -0.66, -0.68, -0.71, -0.65, -0.71, -0.69, -0.71, -0.68, -0.64, -0.61, -0.62, -0.59, -0.15, -0.28, -0.27, -0.57, -0.7, -0.73, -0.7, -0.69, -0.68, -0.71, -0.7, -0.71, -0.67, -0.68, -0.72, -0.71, -0.67, -0.68, -0.7, -0.72, -0.67, -0.7, -0.71, -0.61, -0.39, -0.1, 0.08, 0.17, 0.23, 0.53, 0.5, 0.56, 0.61, 0.27, 0.1, -0.13, -0.3, -0.69, -0.69, -0.69, -0.69, -0.7, -0.68, -0.72, -0.68, -0.71, -0.67, -0.72, -0.7, -0.7, -0.68, -0.69, -0.68, -0.69, -0.7, -0.71, -0.66, -0.06, 0.23, 0.8, 1.08, 0.97, 1.11, 1.08, 1.24, 1.16, 1.1, 1.2, 0.95, 0.89, 0.05, -0.2, -0.68, -0.66, -0.69, -0.7, -0.71, -0.68, -0.67, -0.7, -0.71, -0.74, -0.65, -0.7, -0.74, -0.69, -0.7, -0.68, -0.69, -0.66, -0.64, -0.22, 0.58, 1.24, 1.33, 0.32, -0.07, 0.89, 0.04, 0.21, 0.77, 0.05, -0.36, 0.22, 1.04, 1.51, 0.28, -0.2, -0.5, -0.68, -0.68, -0.66, -0.68, -0.68, -0.68, -0.68, -0.7, -0.69, -0.71, -0.71, -0.71, -0.69, -0.7, -0.66, -0.54, 0, 0.58, 1.37, 0.5, -0.44, -0.03, 0.22, 0.68, 0.62, 0.77, 0.74, 0.34, 0.11, 0.26, -0.41, 0.54, 1.41, 0.95, 0.34, -0.39, -0.7, -0.68, -0.65, -0.66, -0.68, -0.65, -0.71, -0.7, -0.68, -0.7, -0.7, -0.71, -0.68, -0.64, 0.04, 1.06, 1.95, 0.57, -0.05, 0.07, 0.16, 0.26, 0.41, 0.49, 0.73, 0.59, 0.37, 0.16, 0.12, 0.22, -0.11, 0.05, 1.4, 1.03, 0.14, -0.62, -0.68, -0.68, -0.69, -0.63, 0.34, -0.62, -0.69, -0.71, -0.68, -0.67, -0.7, -0.65, -0.57, 0.67, 2.23, 0.66, -0.29, 0.07, 0.28, 0.08, 0.33, 0.19, 0.14, 0.74, 0.39, 0.11, 0.08, 0.07, 0.01, 0.08, 0, 0.27, 1.72, 0.71, -0.56, -0.68, -0.71, -0.67, -0.71, -0.7, -0.66, -0.68, -0.72, -0.69, -0.69, -0.69, -0.71, -0.3, 1.94, 0.99, -0.35, 0.12, 0.15, 0.11, 0.18, 0.09, 0.04, 0.24, 0.39, 0.09, 0.06, 0.07, 0.15, 0.02, 0.05, -0.03, -0.36, 0.45, 1.86, -0.07, -0.67, -0.7, -0.69, -0.7, -0.7, -0.66, -0.7, 0.07, -0.65, -0.7, -0.68, -0.71, 0.28, 1.55, -0.05, 0.07, 0.17, 0.08, 0.09, 0.13, 0.17, 0.23, 0.96, 0.96, 0.08, 0.07, 0.33, 0.08, 0.06, 0.02, 0.03, 0.24, -0.37, 0.65, 1.14, -0.66, -0.71, -0.71, -0.68, -0.23, -0.62, -0.7, -0.71, -0.7, -0.71, -0.69, -0.62, 1.58, 0.34, -0.18, 0.58, 0.21, 0.06, 0.12, 0.07, 0.25, 0.3, 1.25, 1.14, 0.98, 0.23, 0.46, 0.15, 0.08, 0.03, 0.29, 0.12, 0.2, -0.13, 1.98, -0.48, -0.68, -0.7, -0.68, -0.73, -0.05, -0.61, -0.68, -0.69, -0.68, -0.71, -0.45, 1.48, -0.21, 0.38, 0.1, 0.23, 0.06, 0.1, 0.05, 0.15, 0.63, 1.18, 0.34, 1.17, 0.08, 0.08, 0.08, 0.07, 0.11, 0.11, 0.14, -0.01, 0.03, 0.33, 0.22, -0.68, -0.7, -0.68, -0.71, -0.72, -0.66, -0.7, -0.72, -0.7, -0.68, 0.02, 0.6, -0.12, 0.26, 0.04, 0.09, 0.06, 0.12, 0.13, 0.15, 0.76, 1.44, 0.13, 1.11, 0.47, 0.28, 0.12, 0.1, 0.08, 0.1, 0.33, 0.11, 0.11, -0.23, 1.86, -0.58, -0.7, -0.7, -0.7, -0.7, -0.69, -0.68, -0.69, -0.71, -0.68, 1.02, -0.44, 0.12, 0.22, 0.05, 0.05, 0.14, 0.3, 0.16, 0.03, 0.57, 0.6, 0.52, 1.09, 0.81, 0.14, 0.29, 0.24, 0.26, 0.1, 0.15, 0.07, 0.06, 0.02, 0.71, -0.12, -0.68, -0.67, -0.66, -0.68, -0.72, -0.71, -0.73, -0.69, -0.62, 1.67, -0.13, 0.14, 0.04, 0.06, 0.12, 0.09, 0.22, 0.23, 0.06, 0.64, 1.75, 2.92, 3.16, 1.33, 0.11, 0.1, 0.09, 0.89, 0.09, 0.21, 0.1, 0.34, 0.27, 0.05, 0.84, -0.71, -0.69, -0.67, -0.69, -0.69, -0.7, -0.68, -0.66, -0.46, 0.69, 0.08, 0.15, 0.09, 0.07, 0.12, 0.62, 0.11, 0.1, 0.12, 0.84, 1.56, 0.66, 0.27, 2.13, 0.32, 0.2, 0.19, 1.2, 0.16, 0.32, 0.24, 0.43, 0.21, 0.02, 0.79, -0.66, -0.65, -0.68, -0.7, -0.69, -0.69, -0.66, -0.6, -0.25, 0.57, -0.01, -0.06, 0.14, 0.08, 0.1, 0.92, 0.37, 0.27, 0.48, 2.15, 0.1, 0.26, 0.13, 1.13, 0.92, 0.37, 0.25, 0.76, 0.16, 0.6, 0.59, 0.43, 0.1, -0.03, 0.76, -0.57, -0.68, -0.21, -0.67, -0.7, -0.67, -0.68, -0.66, 0.17, 0.47, 0.07, 0.05, 0.21, 0.15, 0.13, 0.63, 0.57, 0.4, 1.12, 0.2, 0.04, 0.1, 0.05, 0.09, 0.27, 0.42, 0.08, 0.1, 0.17, 0.34, 0.12, 0.57, -0.24, -0.02, 0.34, -0.58, -0.67, -0.69, -0.41, -0.69, -0.67, -0.65, -0.67, 0.08, 0.24, 0.11, 0.25, 0.06, 0.15, 0.21, 0.11, 0.5, 0.29, 0.42, 0.14, 0.06, 0.71, 0.11, 0.07, 0.43, 0.35, 0.17, 0.17, 0.42, 0.36, 0.27, 0.81, 0.39, 0.03, 0.13, -0.51, -0.58, -0.66, -0.61, -0.67, -0.38, -0.67, -0.65, -0.33, 0.3, 0.43, 0.11, 0.37, 0.43, 0.09, 0.14, 0.1, 0.24, 0.49, 0.2, 0.09, 1.13, 0.81, 0.35, 0.27, 0.24, 0.18, 0.22, 1.1, 0.45, 0.12, 0.63, 0.41, 0.52, -0.03, -0.56, -0.7, -0.21, -0.66, -0.6, -0.66, -0.67, -0.55, 0.2, 0.12, 0.22, 0.17, 0.59, 0.43, 0.71, 0.23, 0.23, 0.25, 0.27, 0.78, 1.49, 1.14, 0.9, 0.36, 0.24, 0.27, 0.19, 0.91, 1.59, 0.31, 0.59, -0.14, 0.67, 0.3, -0.68, -0.67, -0.66, -0.67, -0.65, -0.64, -0.66, -0.68, 0.74, 0.56, 0.22, 0.68, 0.2, 0.81, 0.96, 0.17, 0.31, 0.51, 0.41, 1.06, 1.94, 2.02, 0.57, 0.51, 0.14, 0.15, 0.64, 1.63, 1.1, 0.47, -0.03, 0.04, 0.23, 0.54, -0.67, -0.68, -0.69, -0.68, -0.72, 0, -0.67, -0.66, 0.43, 0.56, -0.01, 0.07, 0.57, 0.61, 1.24, 0.36, 0.81, 0.25, 0.2, 0.18, 1.82, 2.09, 0.44, 0.16, 0.23, 0.31, 0.52, 1.23, 0.96, 0.73, 0.69, -0.27, 0.89, 0.1, -0.66, -0.65, -0.67, -0.7, -0.67, -0.67, -0.65, -0.66, -0.11, 0.54, 0.39, 0.58, 0.72, 1.26, 1.24, 0.86, 0.8, 0.19, 0.35, 0.07, 0.78, 1.52, 0.19, 0.22, 0.16, 0.45, 1.4, 0.75, 0.69, 1.91, 0.46, 0.05, 0.36, -0.17, -0.68, -0.47, -0.69, -0.7, -0.75, -0.67, -0.68, -0.66, -0.53, 0.44, 0.46, -0.14, 0.97, 1.56, 0.7, 0.59, 0.15, 0.12, 0.11, 0.06, 0.84, 0.7, 0.09, 0.1, 0.11, 0.4, 1.21, 0.58, 0.71, 0.51, -0.08, 0.5, 0.18, -0.47, -0.69, -0.69, -0.69, -0.69, -0.68, -0.66, -0.71, -0.68, -0.67, 0.19, 0.99, -0.14, 0.27, 0.53, 0.31, 0.29, 0.8, 0.35, 0.06, 0.08, 0.44, 0.49, 0.11, 0.1, 0.1, 0.18, 0.45, 0.25, 0.23, 0.1, -0.05, -0.01, 0.18, -0.62, -0.66, -0.69, -0.69, -0.72, -0.66, -0.68, -0.68, -0.68, -0.68, 0.04, 1.02, 0.01, -0.33, 0.18, 0.04, 0.43, 0.29, 0.08, 0.04, 0.16, 0.19, 0.12, 0.27, 0.23, 0.07, 0.15, 0.32, 0.19, 0.17, 0.06, 0.13, 0.85, 0.01, -0.67, -0.68, -0.68, -0.67, -0.67, -0.68, -0.68, -0.66, -0.66, -0.7, -0.54, 0.66, 0.66, -0.18, 0.11, -0.13, 0.43, 0.63, 0.8, 0.29, 0.11, 0.45, 0.24, 0.12, 0.29, 0.4, 0.66, 0.55, 0.29, 0.06, -0.04, 0.1, 0.63, -0.2, -0.63, -0.68, -0.7, -0.69, -0.69, -0.67, -0.68, -0.68, -0.69, -0.68, -0.69, 0.02, 1.03, 0.57, -0.22, -0.02, 0.7, 0.56, 0.78, 0.77, 0.18, 0.14, 0.16, 0.07, 0.01, 0.69, 0.84, 0.37, 0.95, 0.4, 0.48, 0.42, -0.13, -0.67, -0.68, -0.7, -0.71, -0.67, -0.7, -0.36, -0.65, -0.48, -0.68, -0.72, -0.68, -0.33, 0.13, 0.79, 0.17, 0.69, 0.9, 0.41, 0.67, 0.82, 0.07, 0.27, 0.51, 0.19, -0.08, 0.41, 0.5, 0.68, 1.24, 0.67, 0.43, 0.96, -0.23, -0.65, -0.69, -0.67, -0.65, 0.18, -0.67, -0.7, -0.66, -0.64, -0.68, -0.68, -0.67, -0.64, -0.22, 0.74, 0.57, 0.42, 0.93, 0.25, 0.48, 1, -0.08, -0.03, 0.45, 0.1, 0.04, 0.68, 0.51, 0.95, 0.35, 1.07, 0.36, 0.26, -0.61, -0.68, -0.68, -0.67, -0.69, -0.7, -0.67, -0.68, 0.35, -0.64, -0.69, -0.69, -0.7, -0.66, -0.64, 0.04, 0.71, 0.53, 1.03, 0.6, 0.69, 0.61, 0.1, 0.46, 0.12, 0.04, 0.17, 0.07, 0.42, 0.78, 0.33, 0.67, 0.52, -0.21, -0.68, -0.66, -0.66, -0.66, -0.67, -0.68, -0.68, -0.69, -0.7, -0.69, -0.68, -0.68, -0.71, -0.7, -0.68, -0.34, 0.52, 0.37, -0.17, 0.54, 0.5, 0.07, 0.03, -0.33, -0.02, 0.08, 0.32, -0.13, -0.14, 0.24, 0.51, 0.38, -0.28, -0.67, -0.67, -0.68, -0.68, -0.71, -0.7, -0.69, -0.66, -0.69, -0.69, -0.66, -0.68, -0.69, -0.68, -0.68, -0.68, -0.67, -0.6, 0.27, 0.63, 0.55, 0.07, -0.08, -0.09, -0.23, -0.15, -0.29, -0.2, -0.16, 0.38, 0.82, 0.14, -0.34, -0.67, -0.67, -0.7, -0.67, -0.67, -0.7, -0.65, -0.69, -0.71, -0.69, -0.71, -0.7, -0.51, -0.71, -0.69, -0.69, -0.72, -0.69, -0.66, -0.34, 0.06, 0.57, 0.37, 0.45, 0.72, 0.75, 0.65, 0.44, 0.21, -0.08, -0.37, -0.52, -0.65, -0.68, -0.69, -0.67, -0.65, -0.67, -0.67, -0.71, -0.69, -0.68, -0.7, -0.69, -0.69, -0.69, -0.71, -0.67, -0.7, -0.66, -0.67, -0.69, -0.67, -0.69, -0.67, -0.6, -0.56, -0.5, -0.45, -0.54, -0.62, -0.66, -0.7, -0.69, -0.7, -0.69, -0.68, -0.71, -0.72, -0.7, -0.69, -0.69, -0.71, -0.7, -0.64, -0.63, -0.63, -0.32, -0.37, -0.26, -0.51, -0.68, -0.66, -0.71, -0.68, -0.69, -0.7, -0.68, -0.7, -0.72, -0.7, -0.72, -0.7, -0.69, -0.72, -0.71, -0.69, -0.69, -0.69, -0.72, -0.56, -0.36, -0.27, 0.09, 0.21, 0.55, 0.67, 0.82, 0.61, 0.59, 0.28, 0.02, -0.2, -0.2, -0.57, -0.69, -0.7, -0.68, -0.71, -0.69, -0.67, -0.7, -0.68, -0.67, -0.72, -0.7, -0.69, -0.68, -0.64, -0.7, -0.7, -0.69, -0.64, -0.34, 0.06, 0.62, 0.85, 1.09, 1.09, 1.41, 1.42, 1.28, 1.23, 1.15, 0.76, 0.34, 0.33, -0.41, -0.7, -0.69, -0.69, -0.7, -0.71, -0.7, -0.69, -0.71, -0.67, -0.71, -0.68, -0.68, -0.71, -0.69, -0.69, -0.71, -0.7, -0.68, -0.66, -0.39, 0.15, 1.23, 1.35, 0.37, -0.41, 0.62, 0.3, 0.53, 0.44, 0.04, -0.41, -0.02, 1.37, 0.8, -0.14, -0.61, -0.63, -0.66, -0.7, -0.67, -0.7, -0.68, -0.71, -0.67, -0.69, -0.73, -0.69, -0.66, -0.7, -0.68, -0.71, -0.71, -0.58, -0.24, 0.14, 0.78, 0.8, -0.08, 0.03, 0.12, 0.27, 0.81, 0.4, 0.14, 0.43, 0.16, 0.37, -0.16, 0.33, 0.78, 0.22, 0, -0.15, -0.66, -0.67, -0.67, -0.68, -0.68, -0.72, -0.67, -0.67, -0.68, -0.7, -0.67, -0.67, -0.7, -0.57, -0.12, 0.25, 1.06, 0.37, -0.26, 0.1, 0.08, 0.2, 0.28, 0.7, 0.83, 0.69, 0.33, 0.1, 0.18, 0.17, -0.06, -0.11, 0.79, 1.1, 0.07, -0.58, -0.7, -0.64, -0.67, -0.65, 0.15, -0.64, -0.71, -0.69, -0.69, -0.68, -0.7, -0.7, -0.35, 0.74, 1.33, 0.51, 0.07, 0.1, 0.02, 0.03, 0.1, 0.47, 0.31, 0.26, 0.21, 0.15, 0.05, 0.17, -0.01, 0.27, -0.37, -0.12, 1.09, 0.64, -0.38, -0.67, -0.7, -0.7, -0.67, -0.7, -0.67, -0.72, -0.7, -0.69, -0.7, -0.71, -0.68, -0.3, 1.63, 1.03, -0.45, 0.35, 0.06, 0.02, 0, 0.11, 0.32, 0.18, 0.47, 0.1, 0.81, 0.17, 0.04, 0.07, 0.27, 0.19, -0.29, 0.23, 1.52, 0.44, -0.7, -0.66, -0.69, -0.7, -0.69, -0.68, -0.67, 0.14, -0.55, -0.69, -0.7, -0.71, 1.01, 1.24, 0.19, -0.07, 0.08, 0.05, 0.06, 0.19, 0.12, 0.03, 0.35, 0.49, 0.41, 0.15, 0.13, 0.14, 0.03, 0.02, 0.17, 0.13, -0.28, 0.6, 1.65, -0.7, -0.69, -0.67, -0.69, -0.16, -0.71, -0.68, -0.7, -0.71, -0.71, -0.71, -0.69, 1.78, 0.62, -0.22, 0.28, 0.29, 0.03, 0.05, 0.38, 0.16, 0.14, 0.34, 1.42, 0.55, 0.11, 0.1, 0.79, 0.08, 0.05, 0.09, 0.15, 0.38, -0.02, 1.53, -0.38, -0.7, -0.71, -0.69, -0.72, -0.29, -0.59, -0.68, -0.73, -0.7, -0.66, -0.56, 1.82, -0.16, 0.24, 0.15, 0.05, 0.05, 0.14, 0.63, 0.21, 0.15, 0.61, 1.97, 0.78, 0.29, 0.16, 1.26, 0.51, 0.17, 0.17, 0.17, 0.25, -0.07, 0.33, 0.44, -0.7, -0.69, -0.69, -0.67, -0.67, -0.65, -0.7, -0.72, -0.69, -0.68, -0.03, 0.71, -0.12, 0.04, 0.08, 0.04, 0.07, 0.67, 0.51, 0.07, 0.16, 1.58, 1.4, 1.69, 0.44, 0.46, 1.82, 1.61, 0.14, 0.12, 0.27, 0.41, 0.13, -0.2, 1.69, -0.59, -0.65, -0.67, -0.69, -0.69, -0.69, -0.7, -0.68, -0.68, -0.7, 0.98, -0.44, 0.11, 0.03, 0.22, 0.08, 0.13, 1.65, 0.84, 0.39, 0.23, 1.63, 2.68, 2, 0.25, 0.15, 1.04, 1.97, 0.92, 0.23, 0.19, 0.23, 0.42, 0.13, 0.5, -0.21, -0.67, -0.69, -0.7, -0.65, -0.71, -0.69, -0.72, -0.68, -0.55, 1.79, -0.03, -0.09, 0.1, 0.27, 0.1, 0.43, 1.46, 1.14, 0.22, 0.38, 2.01, 3.48, 2.87, 0.98, 0.27, 0.61, 1.46, 0.73, 0.16, 0.21, 0.31, 0.22, 0.43, 0.04, 0.9, -0.7, -0.68, -0.62, -0.69, -0.67, -0.69, -0.68, -0.71, -0.39, 0.7, 0.11, 0.04, 0.48, 0.45, 0.16, 0.3, 0.83, 0.61, 0.27, 1.06, 2.97, 2.8, 2.4, 1.53, 0.47, 0.28, 0.52, 0.58, 0.15, 0.32, 0.23, 0.26, 0.57, -0.05, 1.01, -0.65, -0.68, -0.67, -0.65, -0.7, -0.71, -0.71, -0.67, -0.01, 0.46, 0.23, 0.24, 0.32, 0.19, 0.19, 0.15, 0.79, 0.39, 0.17, 0.41, 1.19, 1.27, 0.83, 0.71, 0.27, 0.13, 0.14, 0.15, 0.39, 0.45, 0.19, 0.26, 0.16, 0.06, 0.68, -0.54, -0.69, -0.68, -0.65, -0.65, -0.67, -0.71, -0.64, 0.15, 0.25, -0.02, 0.18, 0.24, 0.79, 0.11, 0.34, 0.12, 0.18, 0.13, 0.12, 0.12, 2.25, 1.29, 0.17, 0.23, 0.08, 0.16, 0.25, 1.27, 0.15, 0.2, 0.11, -0.04, 0.08, 0.33, -0.54, -0.15, -0.69, -0.64, -0.68, -0.3, -0.64, -0.55, 0.15, 0.41, 0.18, 0.34, 0.22, 0.45, 0.18, 0.66, 0.11, 0.17, 0.16, 0.16, 0.15, 2.14, 1.37, 0.21, 0.12, 0.18, 0.18, 0.24, 0.85, 0.64, 0.52, 0.8, 0.27, 0.44, 0.16, -0.48, -0.65, -0.13, -0.68, -0.43, -0.69, -0.7, -0.2, 0.42, 0.16, 0.13, 0.55, 0.41, 0.88, 1.14, 0.18, 0.19, 0.29, 0.18, 0.22, 1.84, 1.32, 0.21, 0.17, 0.21, 0.28, 0.26, 1.71, 0.94, 0.15, 0.28, 0.5, 0.48, 0.19, -0.55, -0.67, -0.67, -0.67, -0.66, -0.66, -0.65, -0.43, 0.28, 0.37, 0.28, 0.48, 0.23, 1.23, 0.91, 0.17, 0.48, 0.31, 0.25, 0.32, 2, 1.89, 0.25, 0.15, 0.81, 0.7, 0.27, 1, 0.94, 0.66, 1.04, 0.14, 0.41, 0.24, -0.56, -0.66, -0.67, -0.69, -0.66, 0.05, -0.69, -0.59, 0.22, 0.35, -0.01, 0.37, 0.34, 0.84, 1.24, 0.24, 0.27, 0.16, 0.22, 0.33, 1.17, 2.07, 0.87, 0.22, 0.2, 0.29, 0.27, 0.59, 0.63, 0.79, 1.58, -0.11, 0.03, 0.63, -0.63, -0.67, -0.66, -0.69, -0.69, -0.69, -0.69, -0.68, 0.46, 0.22, -0.06, 0.05, 0.19, 1, 1.27, 0.33, 0.16, 0.36, 0.22, 0.46, 1.41, 1.81, 0.78, 0.22, 0.21, 0.24, 0.31, 1.62, 0.99, 1.67, 0.43, -0.08, 0.72, 0.63, -0.67, -0.69, -0.65, -0.71, -0.66, -0.7, -0.66, -0.7, -0.26, 0.5, -0.1, 0.62, 0.65, 1.24, 1.57, 0.85, 0.69, 0.18, 0.14, 0.62, 1.41, 0.85, 0.57, 0.19, 0.35, 0.23, 1.03, 1.35, 1.36, 1.56, 0.39, 0.21, 0.61, -0.06, -0.68, -0.66, -0.7, -0.67, -0.69, -0.69, -0.68, -0.67, -0.48, 0.08, 0.32, 0.15, 0.91, 0.51, 1.08, 0.54, 0.53, 0.21, 0.22, 0.67, 0.63, 0.42, 0.57, 0.53, 0.22, 0.26, 0.75, 0.86, 0.19, 0.21, 0.12, 0.07, 0.2, -0.27, -0.7, -0.69, -0.71, -0.69, -0.67, -0.7, -0.65, -0.68, -0.68, 0.25, 0.54, -0.03, 0.18, 0.64, 0.37, 0.61, 0.25, 0.41, 0.25, 0.56, 0.36, 0.6, 0.61, 0.66, 0.71, 0.21, 0.43, 0.26, 0.18, 0.72, 0.15, 0.09, 0.36, -0.58, -0.67, -0.7, -0.68, -0.68, -0.69, -0.71, -0.68, -0.69, -0.69, 0.19, 0.36, -0.07, 0.16, 0.48, 0.35, 0.2, 0.45, 0.25, 0.21, 0.64, 0.41, 0.18, 0.17, 0.64, 0.27, 0.32, 0.4, 0.35, 0.39, 0.08, -0.02, 0.31, -0.08, -0.67, -0.7, -0.69, -0.67, -0.66, -0.68, -0.67, -0.69, -0.71, -0.68, -0.58, 0.33, 0.11, -0.21, 0.29, 0.3, 0.4, 0.26, 0.41, 0.14, 0.14, 0.15, 0.99, 0.16, 0.18, 0.39, 0.29, 0.35, 0.22, 0.42, 0, 0.02, 0.61, -0.03, -0.69, -0.66, -0.67, -0.68, -0.72, -0.45, -0.69, -0.73, -0.7, -0.68, -0.67, -0.06, 0.61, 0.32, -0.11, 0.18, 0.2, 0.04, 0.17, 0.09, 0.23, 0.64, 0.33, 0.27, 0.27, 0.16, 0.3, 0.26, 0.24, 0.21, 0.03, 0.12, -0.08, -0.6, -0.69, -0.67, -0.71, -0.68, -0.65, -0.47, -0.65, -0.45, -0.68, -0.67, -0.68, -0.35, 0.02, 0.29, 0.38, 0.51, 0.37, 0.44, 0.09, 0.09, 0.04, 0.19, 0.39, 0.07, 0.45, 0.07, 0.2, 0, 0.46, 0.52, 0.43, 0.47, -0.23, -0.67, -0.69, -0.68, -0.65, 0.15, -0.68, -0.71, -0.68, -0.68, -0.69, -0.68, -0.68, -0.68, -0.22, 0.83, 0.33, 0.42, 0.53, 0.29, 0.3, 0.15, 0.12, 0.35, 0.69, 0.62, 0.1, 0.4, 0.02, 0.65, 0, 0.69, 0.28, 0.18, -0.58, -0.68, -0.68, -0.67, -0.65, -0.67, -0.69, -0.67, -0.6, -0.69, -0.69, -0.69, -0.63, -0.68, -0.62, 0.08, 0.25, 0.55, 0.7, -0.03, 0.25, 0.62, 0.3, 0.58, 0.09, 0.97, 0.47, 0.87, 0.42, 0.65, 0.62, 0.58, 0.01, -0.49, -0.68, -0.67, -0.67, -0.72, -0.68, -0.68, -0.71, -0.69, -0.67, -0.65, -0.68, -0.66, -0.69, -0.71, -0.71, -0.52, 0.01, 0.1, 0.53, 0.42, 0.32, 0.17, -0.16, -0.12, -0.16, -0.02, -0.14, 0.5, 0.37, 0.44, 0.41, 0.08, -0.39, -0.7, -0.69, -0.69, -0.69, -0.68, -0.68, -0.69, -0.7, -0.67, -0.63, -0.69, -0.67, -0.71, -0.68, -0.7, -0.68, -0.69, -0.57, -0.12, 0.46, 0.55, 0.15, -0.05, -0.03, -0.06, -0.03, -0.02, -0.09, 0.15, 0.42, 0.85, 0.02, -0.45, -0.7, -0.68, -0.67, -0.7, -0.68, -0.65, -0.69, -0.67, -0.7, -0.68, -0.67, -0.67, -0.66, -0.68, -0.71, -0.68, -0.69, -0.67, -0.69, -0.29, -0.11, 0.29, 0.87, 0.89, 0.74, 0.67, 0.78, 0.79, 0.28, -0.15, -0.3, -0.52, -0.68, -0.68, -0.72, -0.7, -0.69, -0.66, -0.69, -0.69, -0.73, -0.69, -0.71, -0.68, -0.7, -0.68, -0.69, -0.67, -0.7, -0.69, -0.67, -0.7, -0.69, -0.62, -0.57, -0.52, -0.48, -0.49, -0.47, -0.5, -0.59, -0.63, -0.7, -0.7, -0.7, -0.69, -0.67, -0.66, -0.65, -0.67, -0.66, -0.67, -0.66, -0.68, -0.65, -0.67, -0.7, -0.69, -0.73, -0.68, -0.66, -0.65, -0.7, -0.68, -0.71, -0.68, -0.56, -0.33, -0.26, -0.17, -0.34, 0.04, 0.17, 0.52, 0.18, 0.1, -0.12, -0.18, -0.38, -0.44, -0.55, -0.67, -0.68, -0.66, -0.69, -0.7, -0.66, -0.65, -0.69, -0.71, -0.7, -0.67, -0.68, -0.68, -0.7, -0.7, -0.69, -0.61, -0.55, -0.03, 0.02, 0.28, 0.76, 1.06, 1.17, 1.39, 1.38, 1.54, 0.86, 0.7, -0.17, -0.11, -0.53, -0.55, -0.66, -0.67, -0.66, -0.67, -0.69, -0.7, -0.68, -0.69, -0.68, -0.69, -0.68, -0.66, -0.67, -0.71, -0.71, -0.67, -0.69, -0.49, 0.02, 0.42, 1.79, 0.67, -0.33, 0.17, 1.08, 0.4, 0.94, 0.02, -0.41, 0, 1.09, 0.34, -0.51, -0.57, -0.5, -0.62, -0.68, -0.64, -0.67, -0.7, -0.69, -0.68, -0.66, -0.68, -0.67, -0.72, -0.66, -0.68, -0.7, -0.63, -0.66, -0.48, 0.34, 0.95, -0.2, -0.02, 0.05, 0.27, 1.06, 0.74, 0.27, 0.22, 0, 0.35, -0.39, 0.53, 0.35, -0.21, -0.03, -0.15, -0.69, -0.67, -0.69, -0.65, -0.7, -0.68, -0.72, -0.69, -0.69, -0.66, -0.71, -0.7, -0.46, -0.06, 0.19, 0.35, 0.29, -0.44, 0.24, 0.6, 0.3, 0.59, 0.2, 0.54, 0.43, 0.36, 0.09, 0.89, 0.79, -0.27, -0.03, 1.27, 1.01, 0.16, -0.51, -0.69, -0.68, -0.7, -0.71, -0.6, -0.73, -0.71, -0.71, -0.65, -0.72, -0.7, -0.2, 0.48, 0.84, 1.2, -0.24, 0.18, 0.08, 0.11, 0.11, 0.51, 0.53, 0.4, 0.68, 0.62, 0.09, 0.27, 0.4, 0.1, -0.12, 0.09, 1.39, 0.91, -0.28, -0.71, -0.68, -0.7, -0.71, -0.65, -0.66, -0.69, -0.65, -0.7, -0.69, -0.68, -0.66, -0.08, 0.95, 0.6, -0.36, 0.28, 0.11, 0.1, 0.09, 0.52, 0.38, 0.43, 0.36, 0.52, 0.37, 0.84, 0.12, 0.15, 0.1, 0.18, -0.35, -0.15, 1.17, 0.57, -0.68, -0.67, -0.68, -0.68, -0.7, -0.68, -0.67, 0.06, -0.35, -0.69, -0.68, -0.7, 0.81, 1.24, -0.07, 0.21, 0.22, 0.1, 0.06, 0.42, 0.57, 0.16, 0.32, 0.44, 0.22, 0.57, 0.69, 0.31, 0.06, 0.3, 0.19, 0.59, -0.32, 0.67, 1.55, -0.67, -0.66, -0.67, -0.71, 0.13, -0.67, -0.69, -0.69, -0.67, -0.7, -0.7, -0.69, 1.45, 0.76, -0.06, 0.1, 0.16, 0.01, 0.1, 0.53, 0.55, 0.39, 0.64, 0.73, 0.87, 0.87, 0.28, 0.71, 0.11, 0.08, 0.12, 0.33, 0.34, -0.06, 1.23, -0.07, -0.68, -0.69, -0.71, -0.68, -0.58, -0.69, -0.69, -0.7, -0.7, -0.71, -0.53, 1.76, -0.09, 0.63, 0.08, 0.03, 0.08, 0.48, 1.09, 0.29, 0.52, 0.26, 1.33, 0.1, 0.4, 0.26, 1.49, 0.47, 0.1, 0.12, 0.4, 0.24, -0.02, 0.38, 0.96, -0.65, -0.69, -0.69, -0.68, -0.68, -0.62, -0.72, -0.71, -0.69, -0.69, -0.08, 0.85, -0.16, 0.35, 0.06, 0.13, 0.15, 1.14, 2.37, 0.57, 0.52, 0.27, 2.18, 0.25, 0.49, 0.2, 1.82, 1.05, 0.2, 0.21, 0.22, 0.45, 0.3, -0.12, 1.81, -0.61, -0.73, -0.7, -0.68, -0.67, -0.7, -0.73, -0.69, -0.7, -0.68, 0.61, -0.21, 0.69, 0.58, 0.28, 0.21, 0.22, 1.7, 2.74, 1.34, 0.28, 0.17, 2.29, 1.12, 0.24, 0.95, 3.19, 1.59, 0.3, 0.13, 0.24, 0.34, 0.1, -0.25, 0.72, -0.21, -0.7, -0.7, -0.69, -0.71, -0.69, -0.68, -0.7, -0.65, -0.72, 1.67, -0.15, 0.35, 0.31, 0.37, 0.23, 0.25, 1.6, 1.88, 1.11, 0.4, 0.92, 2, 1.35, 0.81, 0.78, 1.13, 1.66, 0.37, 0.21, 0.24, 0.48, 0.5, -0.19, -0.01, 0.71, -0.65, -0.69, -0.71, -0.74, -0.71, -0.69, -0.66, -0.69, -0.44, 0.92, 0.15, 0.33, 0.16, 0.26, 0.2, 0.21, 1.29, 1.15, 0.89, 0.36, 1.78, 1.92, 2.35, 0.26, 0.65, 1.08, 1.02, 0.26, 0.71, 0.58, 0.21, 0.24, 0.56, -0.15, 0.81, -0.67, -0.69, -0.71, -0.69, -0.73, -0.69, -0.7, -0.69, -0.14, 0.47, -0.01, 0.31, 0.27, 0.14, 0.23, 0.21, 0.28, 0.56, 0.35, 0.3, 0.77, 2.82, 1.85, 0.59, 0.24, 0.34, 0.32, 0.36, 0.32, 0.22, 0.31, 0.46, 0.21, 0.09, 0.86, -0.63, 0.54, -0.72, -0.69, -0.69, -0.05, -0.65, -0.66, 0.06, 0.53, 0.03, 0.41, 0.16, 0.13, 0.42, 0.59, 0.21, 0.22, 0.2, 0.24, 0.43, 2.43, 0.93, 0.28, 0.24, 0.28, 0.27, 0.37, 0.58, 0.34, 1.03, 0.68, 0.01, 0.37, 0.46, -0.51, -0.66, -0.19, -0.68, -0.67, -0.39, -0.64, -0.69, 0.08, 0.52, -0.08, -0.16, 0.22, 0.18, 0.63, 1.13, 0.77, 0.25, 0.21, 0.23, 0.24, 1.03, 0.66, 0.26, 0.3, 0.35, 0.35, 0.44, 1.36, 0.9, 1.19, 0.68, 0.25, 0.48, 0.32, -0.54, -0.67, -0.68, -0.67, -0.65, -0.69, -0.67, -0.24, 0.13, 0.44, 0.09, 0.58, 0.37, 1.03, 0.74, 0.42, 0.24, 0.38, 0.31, 0.23, 0.69, 0.67, 0.32, 0.27, 0.25, 0.43, 0.27, 0.88, 1.11, 0.77, 0.52, 0.24, 0.4, 0.17, -0.54, -0.7, -0.68, -0.67, -0.65, 0.15, -0.67, -0.46, 0.13, 0.51, 0.23, 0.27, 0.83, 1.25, 0.52, 0.29, 0.29, 0.43, 0.25, 0.3, 1.34, 1.65, 0.45, 0.24, 0.3, 0.23, 0.59, 1.64, 0.3, 0.48, 0.58, 0.13, 0.39, 0.21, -0.54, -0.69, -0.7, -0.71, -0.68, -0.68, -0.67, -0.6, 0.41, 0.56, -0.09, 1.01, 0.77, 0.24, 1.31, 0.26, 0.3, 0.29, 0.31, 1.3, 2.55, 2.54, 1.41, 0.46, 0.37, 0.34, 0.43, 0.51, 0.29, 0.55, 0.98, -0.31, 0.91, 0.56, -0.58, -0.68, -0.69, -0.69, -0.64, -0.68, -0.66, -0.69, 0.66, 0.42, -0.17, 1.11, 0.95, 1.02, 0.83, 1.01, 0.28, 0.34, 0.33, 0.74, 2.83, 3.2, 1.5, 0.77, 0.43, 0.38, 0.77, 0.86, 0.45, 0.83, 1.39, -0.08, 0.47, 0.62, -0.69, -0.7, -0.7, -0.71, -0.66, -0.67, -0.65, -0.68, -0.01, 0.46, 0.01, 0.21, 1.4, 1.73, 0.86, 0.83, 0.37, 0.33, 0.31, 1.01, 2.59, 2.87, 1.6, 0.82, 0.32, 0.33, 0.64, 1.14, 0.87, 1.15, 0.41, 0, 0.41, 0.18, -0.66, -0.69, -0.71, -0.71, -0.71, -0.66, -0.05, -0.69, -0.37, 0.17, 0.57, 0, 2.35, 1.23, 1.31, 1.32, 0.4, 0.3, 0.7, 1.97, 1.74, 1.2, 2.62, 2.03, 0.84, 0.51, 0.86, 0.58, 0.63, 0.56, 0.41, 0.01, 0.45, -0.17, -0.68, -0.69, -0.69, -0.7, -0.72, -0.69, -0.7, -0.67, -0.7, 0.28, 0.26, -0.12, 0.94, 0.28, 0.27, 0.62, 0.33, 0.29, 1.36, 1.02, 0.64, 0.47, 0.56, 1.16, 0.82, 0.35, 0.46, 0.29, 0.82, 0.33, -0.2, -0.05, 0.27, -0.62, -0.71, -0.72, -0.69, -0.67, -0.69, -0.68, -0.68, -0.69, -0.67, 0.08, 0.39, -0.01, 0.32, 0.37, 0.26, 0.41, 0.35, 0.33, 0.61, 0.6, 0.24, 0.71, 0.29, 0.65, 0.28, 0.34, 0.36, 0.5, 1.12, 0.54, 0.24, 0.37, -0.08, -0.67, -0.67, -0.7, -0.71, -0.69, -0.7, -0.67, -0.68, -0.66, -0.67, -0.6, 0.39, -0.18, 0.18, 0.82, 0.24, 0.38, 0.39, 0.34, 0.27, 0.19, 0.41, 0.34, 0.18, 0.18, 0.32, 0.32, 0.34, 0.61, 0.41, 0.1, 0.14, 0.58, -0.28, -0.69, -0.7, -0.68, -0.68, -0.7, -0.43, -0.69, -0.65, -0.67, -0.67, -0.69, 0.11, 0.85, -0.17, 0.44, 1.23, 0.26, 0.42, 0.3, 0.29, 0.25, 0.29, 0.46, 0.25, 0.27, 0.24, 0.38, 0.49, 0.22, 0.6, -0.27, 0.32, 0.27, -0.59, -0.68, -0.68, -0.68, -0.7, -0.7, -0.53, -0.7, -0.48, -0.67, -0.68, -0.68, -0.53, -0.17, 0.03, 0, -0.01, 0.07, 0.18, 0.38, 0.4, 0.42, 0.48, 0.3, 0.65, 0.61, 0.31, 0.44, 0.85, 1.04, 0.2, 0.61, 0.28, -0.31, -0.68, -0.69, -0.69, -0.7, 0.04, -0.69, -0.68, -0.7, -0.69, -0.69, -0.7, -0.67, -0.66, -0.26, 0.45, 0.59, -0.23, 0.5, 0.66, 0.27, 0.43, 0.57, 0.93, 1.57, 1.27, 0.43, 0.53, 0.38, 0.83, 0.07, 0.31, 0.33, 0.05, -0.61, -0.68, -0.67, -0.69, -0.71, -0.71, -0.69, -0.68, -0.68, -0.67, -0.68, -0.67, -0.67, -0.67, -0.64, 0.17, 0.26, 0.62, 0.84, 0.34, 1.11, 1.02, 0.01, 0.92, 0.05, 1.06, 0.63, 0.39, 0.86, 1.04, 0.58, 0.61, -0.08, -0.54, -0.67, -0.69, -0.69, -0.69, -0.69, -0.7, -0.7, -0.71, -0.68, -0.67, -0.69, -0.67, -0.69, -0.68, -0.69, -0.63, -0.03, -0.08, 0.58, 0.7, 0.52, 0.47, -0.12, 0.27, -0.03, -0.19, 0.82, 0.62, 0.61, 0.61, 0.45, -0.03, -0.47, -0.72, -0.7, -0.68, -0.69, -0.67, -0.71, -0.71, -0.71, -0.66, -0.69, -0.68, -0.7, -0.68, -0.67, -0.69, -0.68, -0.7, -0.58, -0.19, 0.53, 0.43, 0.45, 0.3, 0.25, 0.49, -0.04, 0.04, 0.21, 0.36, 0.7, 1.03, 0.02, -0.52, -0.7, -0.69, -0.66, -0.69, -0.69, -0.64, -0.69, -0.67, -0.71, -0.71, -0.68, -0.69, -0.68, -0.68, -0.67, -0.69, -0.7, -0.67, -0.67, -0.46, -0.14, 0.35, 0.66, 0.95, 0.8, 0.71, 0.72, 0.48, 0.2, -0.19, -0.33, -0.55, -0.64, -0.67, -0.68, -0.67, -0.74, -0.68, -0.68, -0.71, -0.69, -0.69, -0.68, -0.68, -0.69, -0.68, -0.67, -0.71, -0.67, -0.67, -0.7, -0.69, -0.67, -0.59, -0.55, -0.52, -0.53, -0.55, -0.52, -0.55, -0.61, -0.62, -0.66, -0.7, -0.68, -0.68, -0.69, -0.7, -0.69, -0.71, -0.68, -0.71, -0.74, -0.69, -0.5, -0.25, -0.39, -0.27, -0.32, -0.17, 0.02, -0.03, -0.09, -0.02, -0.36, -0.34, -0.35, -0.36, -0.47, -0.68, -0.68, -0.69, -0.73, -0.71, -0.67, -0.69, -0.66, -0.69, -0.68, -0.7, -0.67, -0.66, -0.66, -0.66, -0.69, -0.52, -0.44, -0.42, 0.03, -0.11, 1.02, 0.9, 0.8, 1.11, 0.97, 0.92, 1.22, 0.81, 0.18, -0.02, -0.49, -0.46, -0.67, -0.67, -0.71, -0.67, -0.73, -0.66, -0.7, -0.66, -0.71, -0.7, -0.69, -0.67, -0.66, -0.66, -0.67, -0.68, -0.65, -0.48, -0.14, 0.16, 1.32, 1.03, -0.07, -0.21, 0.32, -0.1, -0.21, -0.32, -0.36, 0.4, 1.19, 0.29, 0.06, -0.57, -0.24, -0.54, -0.71, -0.69, -0.69, -0.69, -0.69, -0.69, -0.65, -0.67, -0.69, -0.69, -0.68, -0.7, -0.69, -0.47, -0.53, -0.49, 0.24, 0.87, -0.16, 0.04, 0.39, 0.14, 0.33, 0.27, 0.41, 0.33, 0.06, -0.01, -0.08, 0.81, 0.72, 0.26, 0.07, 0, -0.7, -0.69, -0.67, -0.73, -0.71, -0.69, -0.67, -0.69, -0.7, -0.68, -0.7, -0.68, -0.41, 0, -0.05, 0.56, 0.61, -0.06, 0.02, 0.04, 0.3, 0.56, 0.36, 0.35, 0.41, 0.15, 0.8, 0.18, 0.13, -0.21, 0.26, 1.53, 0.94, 0.08, -0.55, -0.7, -0.7, -0.71, -0.68, -0.71, -0.67, -0.69, -0.69, -0.67, -0.7, -0.71, -0.28, 0.46, 0.9, 1.33, -0.28, 0.24, 0.26, 0.11, 0.07, 0.48, 0.44, 0.63, 0.55, 0.27, 0.21, 0.08, 0.15, 0.21, 0.03, -0.04, 1.42, 1.07, -0.29, -0.7, -0.69, -0.69, -0.66, -0.7, -0.66, -0.66, -0.53, -0.69, -0.67, -0.65, -0.69, -0.16, 1.06, 1.1, -0.43, 0.11, 0.22, 0.19, 0.03, 0.16, 0.31, 0.51, 0.62, 0.53, 0.41, 0.12, 0.16, 0.14, 0.1, 0.39, -0.15, 0.32, 1.6, 0.7, -0.7, -0.71, -0.71, -0.71, -0.68, -0.66, -0.69, 0.08, -0.02, -0.67, -0.67, -0.68, 0.84, 1.24, -0.39, -0.07, 0.33, 0.44, 0.06, 0.11, 0.25, 0.64, 0.41, 0.25, 0.28, 0.25, 0.14, 0.16, 0.14, 0.14, 0.47, 0.2, -0.32, 0.49, 1.33, -0.67, -0.7, -0.68, -0.69, 0.26, -0.7, -0.69, -0.68, -0.71, -0.68, -0.67, -0.67, 1.36, 0.7, -0.31, 0.28, 0.19, 0.23, 0.12, 0.15, 0.23, 0.51, 0.45, 0.52, 0.54, 0.36, 0.44, 0.21, 0.14, 0.13, 0.16, 0.31, -0.01, -0.02, 1.48, 0.01, -0.69, -0.69, -0.69, -0.71, -0.65, -0.68, -0.68, -0.69, -0.69, -0.68, -0.48, 1.58, -0.11, -0.06, 0.39, 0.46, 0.12, 0.16, 0.65, 0.42, 0.22, 0.12, 0.71, 0.31, 0.36, 0.19, 0.74, 0.21, 0.17, 0.16, 0.19, 0.84, -0.08, 0.91, 1.19, -0.71, -0.7, -0.7, -0.69, -0.69, -0.51, -0.66, -0.7, -0.67, -0.7, -0.01, 0.66, -0.03, 0.15, 0.4, 0.4, 0.15, 0.35, 1.07, 0.83, 0.35, 0.6, 0.33, 0.18, 0.26, 0.53, 1, 0.96, 0.19, 0.18, 0.27, 0.44, 0.26, -0.21, 1.99, -0.67, -0.68, -0.73, -0.72, -0.67, -0.68, -0.71, -0.69, -0.71, -0.69, 0.61, 0.22, 0.34, 0.53, 0.2, 0.13, 0.24, 1.14, 2.43, 1.5, 0.17, 0.15, 0.7, 0.35, 0.25, 0.58, 2.82, 1.44, 0.21, 0.25, 0.24, 0.31, 0.29, -0.29, 0.92, -0.24, -0.7, -0.67, -0.69, -0.69, -0.66, -0.7, -0.71, -0.67, -0.68, 1.49, -0.23, 0.18, 0.48, 0.33, 0.44, 0.38, 1.12, 2.04, 2.14, 0.78, 0.27, 0.73, 0.43, 0.7, 1.73, 2.9, 1, 0.42, 0.32, 0.28, 0.27, 0.32, -0.1, 0.2, 0.54, -0.66, -0.71, -0.68, -0.68, -0.73, -0.68, -0.69, -0.69, -0.64, 1.03, 0.05, 0.27, 0.35, 0.26, 0.33, 0.35, 0.73, 1.53, 1.85, 1.28, 0.82, 0.68, 0.57, 1.16, 1.47, 1.44, 1.06, 0.47, 0.51, 0.3, 0.41, 0.78, 0.09, -0.03, 0.9, -0.69, 0, -0.7, -0.7, -0.67, 0.06, -0.7, -0.66, -0.45, 0.86, 0.21, 0.19, 0.35, 0.49, 0.41, 0.63, 0.35, 0.87, 1.02, 1.02, 1.54, 2.15, 2.04, 0.91, 1.29, 1.25, 0.32, 0.99, 1.26, 0.29, 0.81, 0.66, 0.34, -0.1, 0.98, -0.7, -0.68, -0.18, -0.68, -0.66, -0.56, -0.65, -0.7, -0.37, 0.83, 0.03, -0.06, 1.11, 1.38, 1.14, 0.37, 0.44, 0.39, 0.27, 0.57, 0.9, 2.3, 2.07, 1.03, 0.74, 0.28, 0.3, 1.05, 1.49, 0.25, 0.18, 0.45, 0.96, 0.3, 0.75, -0.58, -0.69, -0.68, -0.7, -0.65, -0.69, -0.66, -0.34, 0.6, -0.11, 0.19, 0.75, 0.63, 0.58, 1.41, 0.49, 0.34, 0.28, 0.22, 0.33, 1.42, 1.4, 0.35, 0.29, 0.27, 0.24, 0.95, 0.59, 0.52, 0.64, 0.44, 0.51, 0.08, 0.52, -0.53, -0.66, -0.67, -0.7, -0.7, 0.09, -0.69, -0.43, 0.26, 0.37, 0.28, 1.2, 0.89, 0.37, 1.38, 0.84, 0.27, 0.37, 0.29, 0.36, 1.24, 1.38, 0.51, 0.31, 0.31, 0.29, 0.33, 1.05, 0.35, 0.41, 0.58, 0.37, 0.03, 0.24, -0.52, -0.67, -0.69, -0.69, -0.67, -0.67, -0.67, -0.54, 0.26, 0.22, 0.13, 0.24, 0.48, 0.56, 0.82, 0.41, 0.33, 0.38, 0.37, 0.96, 1.73, 2.05, 1.67, 0.71, 0.37, 0.33, 0.68, 0.52, 0.7, 0.37, 0.56, 0.16, 0.22, 0.42, -0.54, -0.7, -0.7, -0.7, -0.69, -0.69, -0.67, -0.6, 0.46, 0.67, -0.34, 0.41, 0.43, 0.69, 0.72, 0.81, 0.31, 0.33, 0.69, 1.58, 3.6, 2.85, 2.51, 0.71, 0.37, 0.31, 0.72, 0.65, 0.59, 0.52, 0.73, -0.15, 0.72, 0.86, -0.65, -0.68, -0.71, -0.64, -0.65, -0.66, -0.68, -0.68, 0.6, 0.68, 0, 0.6, 0.75, 0.62, 0.44, 0.61, 0.37, 0.42, 0.7, 1.34, 3.77, 3.47, 2.2, 0.71, 0.33, 0.36, 0.67, 0.4, 0.32, 0.53, 0.31, -0.28, 0.26, 0.49, -0.68, -0.72, -0.69, -0.7, -0.69, -0.7, 0.03, -0.67, 0.1, 0.52, 0.35, 0.14, 1.2, 0.55, 0.36, 0.67, 0.61, 0.37, 0.66, 1.7, 3.42, 3.21, 3.16, 1.34, 0.32, 0.38, 0.82, 0.81, 0.33, 0.52, 1.49, -0.16, 0.77, 0.19, -0.7, -0.7, -0.67, -0.69, -0.68, -0.67, -0.67, -0.67, -0.41, 0.27, 0.21, 0.67, 1.48, 0.75, 0.8, 0.37, 1.36, 0.29, 1.28, 3.41, 0.96, 1.22, 1.13, 2.79, 0.62, 0.22, 0.34, 0.34, 0.58, 1.07, 0.83, 0.03, 0.38, -0.27, -0.7, -0.69, -0.71, -0.68, -0.68, -0.69, -0.69, -0.68, -0.66, 0.48, 0.49, -0.28, 0.84, 0.59, 0.74, 0.93, 0.35, 0.31, 1.39, 0.59, 0.42, 0.28, 0.51, 0.59, 0.46, 0.27, 0.43, 0.45, 0.42, 0.82, 0.18, -0.08, 0.28, -0.57, -0.7, -0.68, -0.67, -0.71, -0.69, -0.69, -0.71, -0.7, -0.66, 0.13, 0.27, 0.09, -0.11, 0.52, 0.36, 0.56, 0.35, 0.3, 0.33, 0.41, 0.4, 0.34, 0.18, 0.3, 0.27, 0.27, 0.42, 0.62, 0.79, 0.63, 0.1, 0.59, -0.04, -0.7, -0.7, -0.7, -0.7, -0.72, -0.7, -0.7, -0.7, -0.7, -0.69, -0.64, 0.38, 0.03, 0.77, 0.77, 1.06, 0.34, 0.45, 0.3, 0.29, 0.23, 0.5, 0.41, 0.26, 0.23, 0.25, 0.31, 0.34, 1, 0.81, 0.44, 0.03, 0.38, -0.29, -0.7, -0.68, -0.69, -0.7, -0.64, -0.67, -0.67, -0.68, -0.68, -0.67, -0.69, 0.08, 0.77, 0.24, 0.42, 0.43, 0.33, 0.34, 0.58, 0.34, 0.29, 0.41, 1.35, 0.4, 0.25, 0.38, 0.54, 0.67, 0.48, 0.49, 0.56, 0.85, 0.08, -0.58, -0.71, -0.69, -0.68, -0.68, -0.7, -0.57, -0.68, -0.59, -0.68, -0.69, -0.69, -0.54, 0.24, 0.68, -0.12, -0.11, 0.32, 0.33, 0.41, 0.41, 0.22, 0.2, 1.03, 0.22, 0.2, 0.3, 0.29, 0.89, 0.73, 0.2, 0.45, 0.25, -0.4, -0.66, -0.7, -0.68, -0.71, 0.06, -0.68, -0.69, -0.67, -0.7, -0.7, -0.68, -0.68, -0.67, -0.44, 0.03, 0.49, 0.12, 0.45, 0.63, 0.79, 0.7, 0.24, 0.49, 1.26, 1.46, 0.4, 0.83, 0.67, 1.34, 0.07, 0.96, 0.32, 0.05, -0.63, -0.7, -0.68, -0.67, -0.69, -0.68, -0.7, -0.72, -0.65, -0.66, -0.69, -0.67, -0.67, -0.69, -0.63, -0.28, 0.36, 0.55, 0.22, 0.8, 1.04, 0.74, 0.05, 0.5, 0.03, 0.77, 0.84, 1.03, 0.76, 0.37, 0.45, 0.13, 0.09, -0.55, -0.71, -0.68, -0.66, -0.71, -0.67, -0.72, -0.69, -0.68, -0.68, -0.67, -0.69, -0.68, -0.7, -0.69, -0.69, -0.63, -0.18, 0.29, 0.41, 0.78, 0.72, 0.61, 0.61, 0.33, -0.22, 0.18, 0.48, 0.55, 0.07, 0.5, 0.59, 0.1, -0.48, -0.66, -0.69, -0.7, -0.68, -0.68, -0.66, -0.7, -0.73, -0.7, -0.69, -0.68, -0.69, -0.71, -0.67, -0.7, -0.66, -0.69, -0.63, -0.36, 0.31, 0.54, 0.37, 0.39, 0.36, 0.29, 0.04, 0, 0.26, 0.3, 0.75, 0.82, -0.08, -0.52, -0.68, -0.7, -0.71, -0.69, -0.7, -0.25, -0.71, -0.64, -0.68, -0.7, -0.68, -0.67, -0.69, -0.69, -0.69, -0.68, -0.68, -0.66, -0.63, -0.51, -0.3, 0.02, 0.48, 0.68, 0.65, 0.58, 0.47, 0.17, -0.01, -0.23, -0.43, -0.62, -0.69, -0.69, -0.68, -0.67, -0.68, -0.7, -0.71, -0.71, -0.73, -0.65, -0.67, -0.67, -0.73, -0.64, -0.65, -0.67, -0.68, -0.68, -0.71, -0.67, -0.56, -0.6, -0.6, -0.62, -0.59, -0.62, -0.68, -0.68, -0.7, -0.72, -0.7, -0.69, -0.68, -0.66, -0.67, -0.72, -0.68, -0.51, -0.29, -0.43, -0.44, -0.51, -0.6, -0.47, -0.4, -0.52, -0.48, -0.19, -0.46, -0.35, -0.4, -0.55, -0.7, -0.72, -0.7, -0.69, -0.69, -0.67, -0.65, -0.69, -0.67, -0.69, -0.71, -0.68, -0.69, -0.72, -0.7, -0.49, -0.38, -0.38, 0.04, -0.07, -0.06, 0.41, 0.28, 0.22, 0.78, 0.54, 0.33, -0.24, -0.09, -0.46, -0.62, -0.47, -0.69, -0.71, -0.7, -0.7, -0.7, -0.7, -0.7, -0.68, -0.7, -0.72, -0.65, -0.7, -0.68, -0.63, -0.69, -0.58, -0.5, -0.21, 0.01, 0.76, 1.66, 1.35, 0.38, 0.9, 0.43, 0.17, 0, 0.45, 1.81, 1.46, 0.41, -0.19, -0.43, -0.49, -0.73, -0.69, -0.68, -0.7, -0.71, -0.69, -0.68, -0.72, -0.7, -0.69, -0.69, -0.69, -0.68, -0.69, -0.42, -0.29, -0.3, 0.22, 1.18, 0.23, -0.14, -0.33, 0.21, -0.27, -0.14, -0.17, -0.08, -0.25, -0.03, -0.15, 1.46, 0.91, 0.6, -0.36, -0.5, -0.7, -0.68, -0.67, -0.71, -0.67, -0.67, -0.69, -0.7, -0.68, -0.69, -0.7, -0.7, -0.59, 0.19, 0.33, 0.98, 1, -0.27, 0.16, 0.43, 0.08, 0.2, 0.54, 0.48, 0.31, 0.32, 0.1, 0.7, -0.01, -0.37, 0.92, 1.73, 0.85, -0.38, -0.68, -0.69, -0.67, -0.7, -0.71, -0.68, -0.7, -0.69, -0.67, -0.66, -0.72, -0.7, -0.4, 0.13, 1.26, 1.65, -0.35, 0.13, 0.38, 0.42, 0.1, 0.34, 0.52, 0.75, 0.67, 0.37, 0.15, 0.48, 0.2, 0.05, 0.15, 0.5, 2.23, 0.46, -0.53, -0.71, -0.65, -0.66, -0.69, -0.66, -0.64, -0.69, -0.64, -0.66, -0.67, -0.66, -0.65, -0.3, 1.01, 1.26, -0.38, -0.15, 0.14, 0.21, 0.07, 0.11, 0.34, 0.14, 0.37, 0.23, 0.73, 0.14, 0.2, 0.19, 0.19, 0.6, -0.22, 0.6, 1.85, 0.12, -0.7, -0.72, -0.65, -0.67, -0.7, -0.71, -0.67, 0.04, 0.2, -0.69, -0.71, -0.67, 0.67, 1.66, 0.38, -0.25, 0.53, 0.11, 0.12, 0.28, 0.52, 0.27, 0.31, 0.68, 0.5, 0.36, 1.09, 0.12, 0.16, 0.17, 0.13, 0.15, -0.33, 1.19, 1.35, -0.69, -0.72, -0.66, -0.7, 0.24, -0.71, -0.67, -0.7, -0.67, -0.69, -0.7, -0.71, 1.31, 0.9, -0.26, 0.19, 0.17, 0.13, 0.15, 0.19, 0.26, 0.32, 0.36, 0.43, 0.36, 0.33, 0.47, 0.43, 0.28, 0.15, 0.39, 0.47, 0.04, 0.12, 1.68, -0.16, -0.72, -0.7, -0.68, -0.71, -0.67, -0.69, -0.68, -0.69, -0.7, -0.72, -0.52, 1.69, 0.09, -0.15, 0.24, 0.36, 0.2, 0.16, 0.24, 0.24, 0.17, 0.57, 0.3, 0.4, 0.13, 0.32, 0.24, 0.25, 0.18, 0.52, 0.35, 0.46, -0.43, 0.64, 0.66, -0.73, -0.69, -0.68, -0.69, -0.71, -0.38, -0.7, -0.67, -0.68, -0.69, -0.02, 0.83, -0.06, 0.6, 0.15, 0.21, 0.17, 0.21, 0.17, 0.2, 0.21, 0.36, 0.26, 0.4, 0.21, 0.27, 0.69, 0.22, 0.21, 0.35, 0.21, 0.22, -0.11, 0.16, 1.76, -0.67, -0.71, -0.7, -0.45, -0.68, -0.67, -0.7, -0.71, -0.68, -0.68, 0.47, 0.6, -0.19, 0.31, 0.34, 0.62, 0.22, 0.23, 1.14, 1.18, 0.19, 0.24, 0.51, 0.3, 0.27, 0.43, 2.37, 0.36, 0.25, 0.28, 0.14, 0.17, 0.11, -0.34, 1.06, -0.31, -0.69, -0.69, -0.68, -0.7, -0.71, -0.67, -0.67, -0.64, -0.69, 1.13, 0.06, -0.1, 0.15, 0.41, 0.24, 0.27, 0.33, 1.6, 3.37, 1.29, 0.21, 0.33, 0.37, 0.28, 2.74, 3.12, 0.79, 0.34, 0.42, 0.38, 0.47, 0.19, 0.07, 0.47, 0.31, -0.68, 0.01, -0.68, -0.67, -0.71, -0.16, -0.7, -0.68, -0.7, 1.49, -0.24, 0.76, 0.42, 0.29, 0.42, 0.32, 0.28, 1.04, 3.53, 3.6, 1.13, 0.3, 0.36, 1.62, 3.95, 2.12, 0.81, 0.43, 0.39, 0.25, 0.33, 0.52, -0.22, 0.21, 1.05, -0.68, -0.1, -0.21, -0.68, -0.68, -0.68, -0.7, -0.65, -0.65, 1.32, -0.2, 1.09, 0.48, 0.44, 0.43, 0.6, 0.79, 0.77, 1.83, 2.99, 2.01, 1.01, 1.34, 2.79, 3.69, 1.78, 0.57, 0.51, 0.31, 0.27, 0.26, 0.27, 0.09, 0.04, 1.05, -0.7, -0.71, -0.67, -0.67, -0.64, -0.67, -0.7, -0.56, -0.53, 0.79, -0.05, 0.18, 0.82, 0.58, 0.39, 0.33, 0.59, 0.3, 1.53, 2.07, 2.22, 2.18, 2.31, 2.43, 2.08, 0.85, 0.32, 0.49, 0.62, 0.44, 0.39, 1.15, 0.49, 0.12, 1.04, -0.66, -0.7, -0.75, -0.7, -0.71, 0.09, -0.68, -0.51, 0.59, 0.12, 1.04, 0.72, 0.77, 0.89, 0.9, 0.71, 0.36, 0.6, 1.69, 2.64, 2.11, 2.24, 3.12, 1.92, 0.81, 0.39, 0.53, 0.39, 0.4, 0.33, 0.31, 0.41, 0.08, 0.94, -0.63, -0.71, -0.69, -0.69, -0.67, -0.64, -0.67, -0.51, 0.62, 0.19, 0.43, 0.36, 0.44, 0.5, 0.45, 0.33, 0.39, 0.45, 1.23, 2.96, 2.62, 2.34, 3.41, 1.63, 0.74, 0.47, 0.49, 0.45, 0.34, 0.66, 1.08, 0.21, 0.1, 0.61, -0.64, -0.7, -0.71, -0.72, -0.69, -0.68, -0.66, -0.65, 0.81, 0.23, -0.1, 0.68, 0.34, 0.33, 0.82, 0.82, 0.32, 0.4, 0.75, 2.81, 3.1, 2.21, 3.53, 1.05, 0.49, 0.39, 0.46, 0.62, 0.37, 0.3, 0.34, -0.18, 0.26, 1.05, -0.69, -0.69, -0.68, -0.67, -0.7, -0.66, -0.67, -0.67, 0.93, 0.44, -0.12, 0.71, 0.33, 0.35, 0.29, 0.46, 0.34, 0.45, 0.85, 2.49, 4.19, 2.81, 3.76, 0.99, 0.53, 0.42, 0.47, 0.41, 1.02, 0.56, 0.73, -0.15, 0.37, 0.8, -0.71, -0.71, -0.73, -0.71, -0.68, -0.69, -0.22, -0.66, 0.3, 0.94, -0.06, 0.39, 0.75, 0.94, 0.34, 0.75, 0.39, 0.44, 0.78, 2.89, 3.21, 2.6, 3.17, 2.25, 0.66, 0.4, 0.41, 0.28, 0.96, 0.81, 1.12, -0.22, 0.44, 0.23, -0.72, -0.69, -0.71, -0.71, -0.68, -0.68, -0.7, -0.68, 0.07, 0.43, -0.1, 0.69, 0.43, 0.37, 0.46, 0.45, 0.35, 0.38, 1.09, 2.76, 1.41, 1.66, 1.37, 1.45, 0.61, 0.39, 0.33, 0.35, 0.62, 0.59, 0.68, 0.06, 0.5, -0.16, -0.68, -0.69, -0.7, -0.72, -0.68, -0.65, -0.7, -0.69, -0.54, 0.32, -0.07, 0.41, 0.36, 0.47, 0.44, 0.5, 0.33, 0.36, 0.63, 1.25, 1.38, 0.91, 1.22, 1.15, 0.41, 0.37, 0.36, 0.36, 0.34, 0.44, 0.49, 0.06, 0.67, -0.49, -0.7, -0.7, -0.7, -0.69, -0.69, -0.67, -0.69, -0.69, 0.31, 0.84, -0.26, 0.64, 0.47, 0.35, 0.3, 0.49, 0.38, 0.91, 1.01, 0.27, 0.37, 0.3, 0.85, 0.38, 0.32, 0.41, 0.37, 0.36, 0.81, 0.16, -0.09, 0.2, -0.66, -0.7, -0.74, -0.69, -0.64, -0.67, -0.69, -0.7, -0.7, -0.25, 0.31, -0.01, 0.44, 0.43, 0.47, 0.36, 0.37, 0.37, 0.31, 0.32, 0.29, 0.26, 0.53, 0.34, 0.27, 0.34, 0.38, 0.4, 0.68, 0.45, -0.08, 0.47, -0.35, -0.72, -0.68, -0.7, -0.7, -0.72, -0.71, -0.72, -0.68, -0.69, -0.68, 0.21, 0.66, -0.06, 0.81, 0.36, 0.59, 0.33, 0.39, 0.34, 0.29, 0.28, 0.37, 0.2, 0.34, 0.24, 0.34, 0.49, 0.51, 0.48, 0.27, 0.03, 0.38, -0.36, -0.73, -0.71, -0.68, -0.7, -0.7, -0.69, -0.68, -0.7, -0.69, -0.7, -0.17, 0.51, -0.05, 0.62, 0.96, 0.82, 0.43, 0.4, 0.28, 0.5, 0.44, 0.22, 0.69, 0.28, 0.28, 0.3, 0.72, 0.84, 0.94, 0.76, 0.59, -0.32, -0.7, -0.71, -0.7, -0.72, -0.68, -0.68, -0.66, -0.69, -0.69, -0.71, -0.7, -0.57, -0.27, 0.52, -0.12, 0.86, 0.47, 1.4, 0.71, 0.31, 0.25, 0.28, 1.31, 0.51, 0.24, 0.73, 0.65, 0.71, 1.29, 0.07, 0.49, 0.23, -0.44, -0.71, -0.68, -0.69, -0.72, 0.29, -0.69, -0.7, -0.72, -0.71, -0.69, -0.67, -0.49, 0.07, 0.54, 0.29, 0.66, 1.07, 0.67, 0.37, 0.26, 0.46, 0.86, 0.95, 0.26, 0.21, 1.05, 0.93, 0.22, 0.46, 0.28, -0.12, -0.71, -0.72, -0.69, -0.7, -0.68, -0.69, -0.69, -0.7, -0.7, -0.69, -0.72, -0.65, -0.39, 0.03, 0.47, 0.54, -0.02, 1.17, 1.5, 1.16, 0.88, 0.25, 0.95, 0.79, 1.03, 0.08, 0.14, 0.25, 0.39, -0.14, -0.64, -0.72, -0.71, -0.73, -0.72, -0.69, -0.64, -0.68, -0.69, -0.67, -0.64, -0.69, -0.69, -0.63, -0.3, 0.38, 0.36, 0.41, 0.89, 0.25, 0.19, -0.05, -0.13, -0.06, -0.05, -0.03, -0.24, 0.77, 0.37, -0.21, -0.61, -0.73, -0.7, -0.7, -0.71, -0.73, -0.69, -0.68, -0.67, -0.67, -0.69, -0.67, -0.71, -0.7, -0.69, -0.66, -0.52, 0.05, 0.36, 1, 0.75, 0.47, 0.45, 0.28, 0.32, 0.56, 0.62, 0.82, 0.19, -0.33, -0.64, -0.69, -0.7, -0.73, -0.7, -0.7, 0.42, -0.71, -0.69, -0.67, -0.69, -0.67, -0.68, -0.67, -0.69, -0.68, -0.68, -0.68, -0.62, -0.47, -0.3, -0.09, 0.07, 0.14, 0.05, -0.25, -0.43, -0.45, -0.51, -0.61, -0.7, -0.69, -0.71, -0.71, -0.69, -0.66, -0.69, -0.7, -0.69, -0.65, -0.68, -0.7, -0.72, -0.69, -0.7, -0.68, -0.7, -0.66, -0.66, -0.7, -0.71, -0.69, -0.7, -0.7, -0.7, -0.73, -0.7, -0.65, -0.7, -0.7, -0.7, -0.27, -0.39, -0.38, -0.63, -0.71, -0.72, -0.66, -0.52, -0.45, -0.47, -0.5, -0.53, -0.69, -0.71, -0.71, -0.66, -0.67, -0.69, -0.68, -0.68, -0.69, -0.72, -0.6, -0.33, -0.31, -0.31, -0.57, -0.55, -0.27, -0.32, -0.33, -0.14, -0.1, -0.14, -0.55, -0.29, -0.54, -0.72, -0.7, -0.67, -0.73, -0.68, -0.69, -0.69, -0.71, -0.71, -0.67, -0.69, -0.69, -0.68, -0.72, -0.7, -0.65, -0.61, -0.34, 0.15, 0.11, 0.98, 1.76, 1.72, 2.14, 1.55, 1.67, 1.42, 1.79, 1.25, 0.62, 0.17, -0.25, -0.72, -0.7, -0.7, -0.7, -0.71, -0.71, -0.73, -0.72, -0.73, -0.69, -0.71, -0.7, -0.69, -0.69, -0.69, -0.61, -0.45, -0.22, 0.17, 1.21, 1.63, 0.02, -0.27, -0.24, -0.1, -0.23, -0.09, -0.21, -0.42, -0.22, 0.96, 1.79, 1.07, 0.14, -0.69, -0.72, -0.7, -0.69, -0.68, -0.68, -0.69, -0.66, -0.69, -0.69, -0.69, -0.69, -0.67, -0.66, -0.51, -0.01, 0.89, 1.98, 0.5, -0.29, 0.54, 0.64, 0.13, 0.82, 0.77, 0.62, 0.31, 0.35, 0.23, -0.4, -0.28, 1.7, 1.95, 0.49, -0.7, -0.72, -0.7, -0.72, -0.7, -0.71, -0.67, -0.68, -0.68, -0.7, -0.67, -0.71, -0.59, -0.39, 1.06, 2.08, 0, -0.31, 0.04, 0.24, 0.1, 0.57, 0.79, 1.14, 1.15, 0.61, 0.16, 0.67, 0.28, -0.1, -0.48, 0.44, 1.92, 0.03, -0.66, -0.72, -0.66, -0.67, -0.7, -0.7, -0.65, -0.67, -0.66, -0.69, -0.66, -0.52, 0.38, 2.22, 0.11, -0.14, 0.38, 0.2, 0.33, 0.08, 0.42, 0.07, 0.75, 0.11, 0.34, 0.05, 0.42, 0.21, 0.46, 0.03, -0.45, 0.84, 1.52, -0.55, -0.71, -0.7, -0.32, -0.73, -0.67, 0.33, 0.14, -0.69, -0.68, -0.7, -0.28, 1.65, 0.68, -0.18, 0.36, 0.62, 0.16, 0.13, 0.12, 0.39, 0.13, 0.35, 0.42, 0.26, 0.05, 0.12, 0.4, 0.67, 0.5, 0.12, -0.5, 2.09, 0.38, -0.69, -0.72, -0.71, -0.7, -0.69, -0.72, -0.68, -0.68, -0.7, -0.7, 0.53, 2.46, -0.47, 0.31, 0.6, 0.25, 0.23, 0.17, 0.3, 0.28, 0.41, 0.33, 0.22, 0.26, 0.09, 0.12, 0.14, 0.12, 0.16, 0.21, -0.27, 0.35, 1.53, -0.34, -0.72, -0.72, -0.72, -0.71, -0.69, -0.71, -0.7, -0.72, -0.69, 1.53, 0.77, -0.35, 0.28, 0.18, 0.44, 0.09, 0.18, 0.2, 0.16, 0.29, 0.44, 0.28, 0.17, 0.36, 0.23, 0.13, 0.36, 0.15, 0.22, 0.45, -0.48, 0.76, 0.4, -0.71, -0.7, -0.69, -0.56, -0.2, -0.67, -0.67, -0.69, -0.71, -0.33, 1.43, 0.21, 0.43, 0.54, 0.33, 0.2, 0.26, 0.22, 0.26, 0.17, 0.18, 0.56, 0.43, 0.16, 0.28, 0.21, 0.15, 0.14, 0.21, 0.27, 0.16, -0.09, 0.48, 1.73, -0.7, -0.73, -0.72, -0.7, -0.69, -0.65, -0.66, -0.67, -0.67, 0.18, 0.61, -0.28, 0.32, 0.18, 0.48, 0.18, 0.19, 0.28, 0.27, 0.19, 0.21, 0.45, 0.19, 0.29, 0.28, 0.25, 0.23, 0.16, 0.26, 0.25, 0.53, 0.04, -0.05, 0.69, -0.41, -0.68, -0.47, -0.71, -0.63, -0.35, -0.68, -0.67, -0.64, 0.68, 0.37, 0.16, 0.33, 0.46, 0.29, 0.3, 0.29, 0.3, 1.24, 0.38, 0.23, 0.38, 0.27, 0.25, 0.58, 0.29, 0.21, 0.27, 0.26, 0.48, 0.16, 0.37, -0.31, 0.46, 0.34, -0.69, 0.05, -0.36, -0.68, -0.68, -0.7, -0.65, -0.7, 1.3, 0.15, -0.13, 0.37, 0.44, 0.46, 0.24, 0.32, 0.43, 2.29, 1.26, 0.26, 0.5, 0.37, 0.3, 1.27, 0.77, 0.24, 0.23, 0.26, 0.28, 0.62, 0.48, 0.32, 0.23, 1.45, -0.72, -0.7, -0.71, -0.66, -0.71, -0.7, -0.36, -0.69, 1.12, -0.04, 0.34, 0.8, 0.39, 0.33, 0.49, 0.31, 0.52, 1.35, 2.54, 0.62, 1.14, 1.12, 0.76, 2.25, 0.69, 0.31, 0.27, 0.32, 0.23, 0.3, 0.32, 0.21, 0.02, 1.34, -0.71, -0.71, -0.71, -0.67, 0.04, -0.64, -0.65, 1.04, 0.06, 0.07, 0.27, 0.24, 0.28, 0.35, 0.41, 0.34, 0.91, 2.34, 1.71, 0.56, 0.62, 1.43, 1.85, 0.58, 0.3, 0.26, 0.3, 0.29, 0.18, 0.93, 0.19, 0.04, 1.39, -0.75, -0.68, -0.69, -0.68, -0.67, -0.69, -0.65, 1.03, 0.21, 0.24, 0.73, 0.32, 0.31, 0.31, 0.31, 0.36, 0.63, 1.57, 2.02, 1.03, 0.88, 1.56, 1.58, 0.5, 0.25, 0.18, 0.17, 0.21, 0.31, 0.61, -0.11, 0.25, 1.37, -0.71, -0.64, -0.68, -0.7, -0.71, -0.69, -0.68, 1.1, 0.58, 0.09, 0.36, 0.31, 0.35, 0.31, 0.45, 0.33, 0.57, 1.43, 1.98, 1.41, 0.93, 1.53, 1.43, 0.44, 0.22, 0.19, 0.19, 0.26, 0.38, 0.29, -0.05, 0.23, 1.09, -0.65, -0.67, -0.69, -0.68, -0.7, -0.68, -0.68, 0.98, 0.39, -0.16, 0.9, 1.46, 0.31, 0.29, 0.43, 0.29, 0.56, 1.35, 1.97, 1.1, 0.88, 1.15, 1.14, 0.44, 0.19, 0.2, 0.17, 0.43, 0.62, 0.41, -0.24, 0.15, 0.73, -0.71, -0.68, -0.7, -0.7, -0.7, -0.72, -0.68, 0.58, 0.34, 0.01, 0.35, 0.34, 0.35, 0.3, 0.35, 0.31, 0.35, 1, 1.21, 0.93, 0.67, 0.73, 0.69, 0.48, 0.19, 0.3, 0.25, 0.8, 0.49, 1.09, -0.37, 0.42, 0.29, -0.68, -0.68, -0.68, -0.67, -0.67, -0.71, -0.67, 0.25, 0.5, 0, 0.7, 0.56, 0.45, 0.56, 0.51, 0.32, 0.26, 0.55, 0.57, 0.92, 1.07, 0.85, 0.37, 0.24, 0.18, 0.17, 0.42, 0.44, 0.77, 0.78, -0.19, 0.56, -0.03, -0.7, -0.69, -0.68, -0.69, -0.69, -0.67, -0.41, 0.35, -0.07, 0.72, 0.64, 0.61, 0.42, 0.36, 0.35, 0.3, 0.29, 0.66, 0.6, 0.38, 0.53, 0.4, 0.23, 0.18, 0.18, 0.26, 0.72, 0.47, 0.62, -0.06, 0.94, -0.31, -0.7, -0.72, -0.69, -0.7, -0.68, -0.68, -0.65, 0.59, -0.05, 0.12, 0.61, 0.59, 0.53, 0.28, 0.28, 0.27, 0.4, 0.63, 0.4, 0.41, 0.3, 0.31, 0.23, 0.14, 0.22, 0.47, 0.93, 1.07, 0.17, 0.1, 0.26, -0.64, -0.66, -0.7, -0.71, -0.71, -0.7, -0.68, -0.72, -0.34, 0.57, -0.05, 0.7, 0.24, 0.37, 0.43, 0.3, 0.24, 0.25, 0.41, 0.42, 0.36, 0.63, 0.4, 0.13, 0.09, 0.15, 0.18, 0.34, 0.33, -0.38, 0.54, -0.34, -0.72, -0.71, -0.7, -0.72, -0.7, -0.69, -0.51, 0.28, -0.12, 0.49, 0.72, 0.54, 0.32, 0.24, 0.2, 0.18, 0.33, 0.67, 0.31, 0.57, 0.21, 0.2, 0.18, 0.32, 0.2, 0.3, 0.08, -0.06, 0.6, -0.53, -0.68, -0.67, -0.67, -0.71, -0.7, -0.71, -0.38, 0.41, -0.12, 0.15, 0.96, 0.44, 0.56, 0.59, 0.2, 0.21, 0.43, 0.25, 0.53, 0.11, 0.12, 0.15, 0.29, 0.35, 0.9, -0.34, 0.51, -0.34, -0.67, -0.68, -0.67, -0.72, -0.72, -0.38, 0.2, 0.21, 0.18, 0.62, 0.57, 0.33, 0.45, 0.27, 0.25, 0.24, 1.17, 0.33, 0.36, 0.29, 0.33, 0.21, 0.61, -0.27, 0.02, -0.69, -0.71, -0.71, -0.68, -0.7, -0.71, -0.48, 0.45, 0, -0.16, 0.79, 0.8, 0.27, 0.81, 0.47, 0.34, 0.56, 0.77, 0.39, 0.1, 0.57, 0.64, -0.02, -0.65, -0.67, -0.69, -0.7, -0.69, -0.69, -0.61, -0.16, 0.29, 0.57, 0.07, 0.75, 0.98, 0.74, 0.6, 0.49, 0.75, 1.06, 0.63, 0.78, 0.38, -0.29, -0.09, -0.69, -0.67, -0.68, -0.72, -0.72, -0.69, -0.65, -0.33, 0.08, 0.17, 0.59, -0.03, 0.21, 0.14, 0.73, 0.3, 0.03, 0.42, 0.15, 0.09, -0.13, 0.19, 0.31, -0.74, -0.7, -0.68, -0.67, -0.71, -0.71, -0.69, -0.72, -0.42, -0.04, 0.62, 0.21, 0.24, -0.01, -0.11, -0.36, -0.4, -0.4, -0.34, -0.27, 0.28, 0.59, 0.57, -0.69, -0.69, -0.7, -0.7, -0.72, -0.71, -0.71, -0.69, -0.62, -0.44, 0.4, 0.36, 0.43, 0.8, 0.2, -0.68, -0.7, -0.71, -0.73, -0.71, -0.72, -0.72, -0.71, -0.73, -0.64, -0.64, -0.55, -0.37, -0.66, -0.72, -0.67, -0.74, -0.72, -0.73, -0.71, -0.71, -0.68, -0.68, -0.68, -0.69, -0.69, -0.72, -0.71, -0.69, -0.71, -0.69, -0.68, -0.39, -0.53, -0.04, 0.88, 1.29, 1.57, 1.6, 1.9, 1.71, 1.2, 0.48, 0, -0.37, -0.69, -0.7, -0.71, -0.71, -0.71, -0.71, -0.66, -0.62, 0.14, 0.63, 1.48, 2.27, 0.7, -0.31, -0.52, -0.46, -0.59, -0.46, -0.2, 1.12, 1.76, -0.71, -0.69, -0.72, -0.73, -0.76, -0.68, -0.62, 0.32, 1.29, 1.96, -0.1, -0.56, -0.54, -0.05, 0.27, -0.06, 0.09, -0.08, -0.21, -0.54, -0.72, -0.72, -0.7, -0.69, -0.69, -0.67, 0.35, 1.72, 0.52, -0.41, -0.26, 0.38, 0.25, 0.26, 1.04, 0.27, 1.32, 0.72, 0.28, 0.47, -0.71, -0.73, -0.71, -0.72, -0.66, -0.14, 1.6, 0.75, -0.38, -0.1, 0.85, 0.45, 0.31, 0.07, 0.73, 0.74, 0.21, 0.18, 0.66, 0.01, -0.7, -0.69, -0.68, -0.69, 1.07, 1.9, -0.54, -0.08, 0.3, 0.33, 0.3, 0.18, 0.43, 0.15, 0.53, 0.29, 1.13, 0.42, -0.73, -0.71, -0.69, -0.72, -0.19, 1.81, -0.27, -0.4, 0.19, 0.16, 0.06, 0.12, 0.13, 0.41, 0.43, 0.02, 0.12, 0.15, -0.73, -0.69, -0.7, -0.72, 0.4, 0.71, -0.44, 0.21, 0.42, 0.53, 0.11, 0.21, 0.14, 0.36, 0.3, 0.28, 0.38, 0.05, -0.71, -0.71, -0.69, -0.68, 1.49, 0.33, -0.23, 0.23, 0.26, 0.29, 0.4, 0.12, 0.16, 0.2, 0.11, 0.81, 0.35, -0.7, -0.72, -0.69, -0.29, 0.81, -0.27, 0.39, 0.27, 0.27, 0.23, 0.14, 0.21, 0.21, 0.2, 0.22, 0.31, 0.34, -0.72, -0.69, -0.7, 0.38, 0.71, -0.4, 0.22, 0.25, 0.24, 0.23, 0.16, 0.33, 0.24, 0.29, 0.23, 0.49, -0.68, 0.24, -0.69, 0.93, 0.74, -0.03, 0.35, 0.48, 0.18, 0.18, 0.18, 0.12, 0.47, -0.73, 1.47, 0.22, 0.7, 0.34, 0.27, 0.39, 0.25, 0.2, -0.7, -0.73, -0.7, 1.45, -0.03, 0.15, 0.29, 0.41, 0.41, 0.25, 0.25, -0.69, -0.72, -0.69, 1.17, 0.19, 0.03, 0.95, 0.21, 0.27, 0.28, 0.17, -0.69, -0.72, -0.7, 1.2, 0.33, -0.2, 0.29, 0.38, 0.23, 0.22, 0.2, -0.7, -0.7, -0.69, 0.66, 0.13, -0.11, 0.37, 0.45, 0.21, 0.39, 0.21, -0.73, -0.68, -0.7, 0.13, 0.74, -0.2, 0.47, 0.33, 0.39, 0.2, 0.19, -0.68, -0.73, -0.72, -0.35, 0.54, -0.27, 0.3, 0.88, 0.52, 0.36, 0.11, -0.72, -0.71, -0.72, -0.59, 0.82, -0.04, -0.08, 1, 0.49, 0.34, 0.12, -0.73, -0.69, -0.72, -0.71, -0.04, 0.64, -0.26, 0.46, 0.52, 0.2, 0.06, -0.71, -0.75, -0.73, -0.35, 0.67, -0.08, 0.22, 0.9, 0.46, 0.07, -0.71, -0.71, -0.69, -0.69, -0.23, 0.45, -0.32, 0.42, 0.17, -0.74, -0.71, -0.73, -0.71, -0.53, 0.27, 0.01, -0.25, 0.24] }, fingerprint: "095d1083d51ddd78b616dc1b80f10ead293180ca0d26d2ec572c45c3f67def58", source: "mean of VS-SEG-018 VS-SEG-018(mirror) VS-SEG-084 VS-SEG-084(mirror) VS-SEG-086 VS-SEG-086(mirror) VS-SEG-118 VS-SEG-118(mirror) VS-SEG-156 VS-SEG-156(mirror) VS-SEG-211 VS-SEG-211(mirror) (VS-SEG, TCIA, CC BY 4.0)" }];

// portable/src/enhancement-qc.js
var ENH_QC_VERSION = 1;
var ENH_QC_DEFAULTS = Object.freeze({ qc_ppi_pei_min: 1, qc_ppi_ref_min: 1.5 });
var REF_RADIUS_MM = 15;
var REF_POSTERIOR_MM = 10;
var REF_MIN_VOX = 500;
var EYE_MIN_MM3 = 1500;
var EYE_ANTERIOR_MM = 35;
var EYE_CAP_MM = 4;
var fin = (v) => Number.isFinite(v) ? v : null;
var validRef = (r) => typeof r === "number" && Number.isFinite(r) && r > 0;
var ident = (x) => x;
function finiteValues(a) {
  const out = a instanceof Float32Array ? new Float32Array(a.length) : new Float64Array(a.length);
  let n = 0;
  for (let x = 0; x < a.length; x++) {
    const v = a[x];
    if (Number.isFinite(v)) out[n++] = v;
  }
  return n === a.length ? out : out.slice(0, n);
}
function selectK(a, k) {
  let l = 0, r = a.length - 1;
  while (r > l) {
    const m = l + r >> 1;
    let x = a[l], y = a[m], z = a[r];
    const p = x < y ? y < z ? y : x < z ? z : x : x < z ? x : y < z ? z : y;
    let i = l, j = r;
    while (i <= j) {
      while (a[i] < p) i++;
      while (a[j] > p) j--;
      if (i <= j) {
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
        i++;
        j--;
      }
    }
    if (k <= j) r = j;
    else if (k >= i) l = i;
    else break;
  }
  return a[k];
}
function percentileLinear(v, q) {
  const n = v.length;
  if (!n) return NaN;
  const rd = v instanceof Float32Array ? Math.fround : ident;
  const vi = (n - 1) * (q / 100), g = vi - Math.floor(vi);
  let lo, hi;
  if (vi >= n - 1) {
    lo = hi = n - 1;
  } else {
    lo = Math.floor(vi);
    hi = lo + 1;
  }
  const a = selectK(v, lo);
  let b = a;
  if (hi !== lo) {
    b = Infinity;
    for (let x = lo + 1; x < n; x++) if (v[x] < b) b = v[x];
  }
  const d = rd(b - a);
  return g >= 0.5 ? b - d * (1 - g) : a + d * g;
}
function npPercentile(values, q) {
  const v = finiteValues(values);
  return v.length ? fin(percentileLinear(v, q)) : null;
}
function median(vals) {
  const n = vals.length;
  if (!n) return null;
  const s = vals instanceof Float32Array ? Float32Array.from(vals).sort() : Float64Array.from(vals).sort();
  if (n % 2) return s[(n - 1) / 2];
  const rd = vals instanceof Float32Array ? Math.fround : ident;
  return rd(s[n / 2 - 1] + s[n / 2]) / 2;
}
function pairwise(v, s, n, rd) {
  if (n < 8) {
    let r = 0;
    for (let i = 0; i < n; i++) r = rd(r + v[s + i]);
    return r;
  }
  if (n <= 128) {
    let r0 = v[s], r1 = v[s + 1], r2 = v[s + 2], r3 = v[s + 3], r4 = v[s + 4], r5 = v[s + 5], r6 = v[s + 6], r7 = v[s + 7], i = 8;
    const m = n - n % 8;
    for (; i < m; i += 8) {
      const b = s + i;
      r0 = rd(r0 + v[b]);
      r1 = rd(r1 + v[b + 1]);
      r2 = rd(r2 + v[b + 2]);
      r3 = rd(r3 + v[b + 3]);
      r4 = rd(r4 + v[b + 4]);
      r5 = rd(r5 + v[b + 5]);
      r6 = rd(r6 + v[b + 6]);
      r7 = rd(r7 + v[b + 7]);
    }
    let res = rd(rd(rd(r0 + r1) + rd(r2 + r3)) + rd(rd(r4 + r5) + rd(r6 + r7)));
    for (; i < n; i++) res = rd(res + v[s + i]);
    return res;
  }
  let n2 = Math.floor(n / 2);
  n2 -= n2 % 8;
  return rd(pairwise(v, s, n2, rd) + pairwise(v, s + n2, n - n2, rd));
}
function npMean(img, idx2) {
  const n = idx2.length;
  if (!n) return NaN;
  const f32 = img instanceof Float32Array, rd = f32 ? Math.fround : ident, v = f32 ? new Float32Array(n) : new Float64Array(n);
  for (let t = 0; t < n; t++) v[t] = img[idx2[t]];
  let sum = 0;
  for (let s = 0; s < n; s += 8192) sum = rd(sum + pairwise(v, s, Math.min(8192, n - s), rd));
  return rd(sum / n);
}
function cOrder(idx2, shape) {
  const [nx, ny, nz] = shape, n = idx2.length, key = new Float64Array(n);
  for (let t = 0; t < n; t++) {
    const x = idx2[t], i = x % nx, u = (x - i) / nx, j = u % ny, k = (u - j) / ny;
    key[t] = (i * ny + j) * nz + k;
  }
  key.sort();
  const out = new Int32Array(n);
  for (let t = 0; t < n; t++) {
    const q = key[t], k = q % nz, u = (q - k) / nz, j = u % ny, i = (u - j) / ny;
    out[t] = i + nx * (j + ny * k);
  }
  return out;
}
function qcOtsu(values) {
  const f32 = values instanceof Float32Array, rd = f32 ? Math.fround : ident, len = values.length;
  let n = 0, mn = Infinity, mx = -Infinity;
  for (let x = 0; x < len; x++) {
    const v = values[x];
    if (Number.isFinite(v)) {
      n++;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  }
  if (!n) return 0;
  let first = mn, last = mx;
  if (first === last) {
    first -= 0.5;
    last += 0.5;
  }
  const NB = 256, step = (last - first) / NB, edges = new Float64Array(NB + 1);
  for (let b = 0; b < NB; b++) edges[b] = rd(b * step + first);
  edges[NB] = rd(last);
  const f0 = rd(first), denom = rd(last - first), hist = new Float64Array(NB);
  for (let x = 0; x < len; x++) {
    const v = values[x];
    if (!Number.isFinite(v)) continue;
    let b = Math.trunc(rd(rd(rd(v - f0) / denom) * NB));
    if (b === NB) b--;
    if (v < edges[b]) b--;
    if (v >= edges[b + 1] && b !== NB - 1) b++;
    hist[b]++;
  }
  const c = new Float64Array(NB);
  for (let b = 0; b < NB; b++) c[b] = rd(rd(edges[b] + edges[b + 1]) / 2);
  let tot = 0;
  for (let b = 0; b < NB; b++) tot += hist[b];
  if (tot === 0) return median(finiteValues(values));
  const omega = new Float64Array(NB), mu = new Float64Array(NB);
  let so = 0, sm = 0;
  for (let b = 0; b < NB; b++) {
    const p = hist[b] / tot;
    so += p;
    sm += p * c[b];
    omega[b] = so;
    mu[b] = sm;
  }
  const muT = mu[NB - 1];
  let best = -1, bestSig = -Infinity;
  for (let b = 0; b < NB; b++) {
    const d = omega[b] * (1 - omega[b]);
    if (d === 0) continue;
    const q = muT * omega[b] - mu[b], sig = q * q / d;
    if (Number.isNaN(sig)) continue;
    if (sig > bestSig) {
      bestSig = sig;
      best = b;
    }
  }
  if (best < 0) return median(finiteValues(values));
  return c[best];
}
function fluidThreshold(hv) {
  const v = finiteValues(hv);
  if (!v.length) return 0;
  let thr = qcOtsu(v);
  if (thr < 0.2 * percentileLinear(v, 99)) {
    let m = 0;
    for (let x = 0; x < v.length; x++) if (v[x] > thr) m++;
    const up = v instanceof Float32Array ? new Float32Array(m) : new Float64Array(m);
    let y = 0;
    for (let x = 0; x < v.length; x++) if (v[x] > thr) up[y++] = v[x];
    thr = qcOtsu(up);
  }
  return thr;
}
function roundHalfEven(x) {
  const f = Math.floor(x), d = x - f;
  const r = d < 0.5 ? f : d > 0.5 ? f + 1 : f % 2 === 0 ? f : f + 1;
  return r + 0;
}
function sphereIndices(shape, centerIjk, radiusMm, spacing2) {
  const [nx, ny] = shape, lo = [], hi = [];
  for (let d = 0; d < 3; d++) {
    const rv = radiusMm / spacing2[d];
    lo[d] = Math.max(Math.floor(centerIjk[d] - rv), 0);
    hi[d] = Math.min(Math.ceil(centerIjk[d] + rv) + 1, shape[d]);
  }
  const r2 = radiusMm * radiusMm, out = [];
  for (let k = lo[2]; k < hi[2]; k++) {
    const dk = ((k - centerIjk[2]) * spacing2[2]) ** 2;
    for (let j = lo[1]; j < hi[1]; j++) {
      const dj = ((j - centerIjk[1]) * spacing2[1]) ** 2;
      for (let i = lo[0]; i < hi[0]; i++) {
        if (((i - centerIjk[0]) * spacing2[0]) ** 2 + dj + dk <= r2) out.push(i + nx * (j + ny * k));
      }
    }
  }
  return Int32Array.from(out);
}
function localReference(ppi, mrc, shape, spacing2, centerIjk, radiusMm = REF_RADIUS_MM, minVox = REF_MIN_VOX) {
  const center = [0, 1, 2].map((d) => roundHalfEven(centerIjk[d]));
  const idx2 = sphereIndices(shape, center, radiusMm, spacing2);
  let mn = Infinity, mx = -Infinity, nf = 0;
  for (let x = 0; x < mrc.length; x++) {
    const v = mrc[x];
    if (Number.isFinite(v)) {
      nf++;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  }
  if (!nf || mx <= mn) return { value: null, n: 0, center_ijk: center };
  const thr = fluidThreshold(mrc);
  const vals = ppi instanceof Float32Array ? new Float32Array(idx2.length) : new Float64Array(idx2.length);
  let n = 0;
  for (let t = 0; t < idx2.length; t++) {
    const x = idx2[t];
    if (!(mrc[x] > thr)) {
      const v = ppi[x];
      if (Number.isFinite(v)) vals[n++] = v;
    }
  }
  const sel = vals.subarray(0, n);
  return { value: n < minVox ? null : fin(median(sel)), n, center_ijk: center };
}
function structureQc(ppi, pei, fluidIdx, ref, cfg) {
  const n = fluidIdx.length;
  if (!n) return { n: 0, ppi_mean: null, pei_mean: null, ppi_over_pei: null, ppi_over_ref: null, low: false };
  const pm = npMean(ppi, fluidIdx), em = pei ? npMean(pei, fluidIdx) : NaN;
  const rPe = em > 0 ? fin(pm / em) : null, rRef = validRef(ref) ? fin(pm / ref) : null;
  const low = rPe !== null && rPe < cfg.qc_ppi_pei_min || rRef !== null && rRef < cfg.qc_ppi_ref_min;
  return { n, ppi_mean: fin(pm), pei_mean: pei ? fin(em) : null, ppi_over_pei: rPe, ppi_over_ref: rRef, low };
}
function perilymphRatio(ppi, hydrops, fluidIdx, ref) {
  if (!hydrops || !validRef(ref)) return null;
  const sel = [];
  for (let t = 0; t < fluidIdx.length; t++) {
    const x = fluidIdx[t];
    if (hydrops[x] >= 0) sel.push(x);
  }
  return sel.length ? fin(npMean(ppi, sel) / ref) : null;
}
function sideState(structs) {
  const present = (structs || []).filter((s) => s && typeof s === "object");
  if (!present.some((s) => s.ppi_over_pei != null || s.ppi_over_ref != null)) return "na";
  return present.every((s) => s.low === true) ? "low" : "ok";
}
function erodeBox(m, b, h) {
  const [bx, by, bz] = b, line = new Uint8Array(Math.max(bx, by, bz)), pre = new Int32Array(Math.max(bx, by, bz) + 1);
  const pass = (len, count, start, stride, hw) => {
    const w = 2 * hw + 1;
    for (let l = 0; l < count; l++) {
      const s0 = start(l);
      pre[0] = 0;
      for (let p = 0; p < len; p++) {
        line[p] = m[s0 + p * stride];
        pre[p + 1] = pre[p] + line[p];
      }
      for (let p = 0; p < len; p++) m[s0 + p * stride] = p - hw >= 0 && p + hw < len && pre[p + hw + 1] - pre[p - hw] === w ? 1 : 0;
    }
  };
  pass(bx, by * bz, (l) => l * bx, 1, h[0]);
  pass(by, bx * bz, (l) => l % bx + bx * by * Math.floor(l / bx), bx, h[1]);
  pass(bz, bx * by, (l) => l, bx * by, h[2]);
}
function eyeQc(mrc, ppi, pei, shape, affine, refY) {
  const out = { status: "not_found", n_globes: 0, ant_ppi_over_pei: null, vit_ppi_over_pei: null, ant_ppi_mean: null, vit_ppi_mean: null, centers_ijk: [] };
  const [nx, ny, nz] = shape, N = nx * ny * nz;
  let mn = Infinity, mx = -Infinity, nf = 0;
  for (let x = 0; x < N; x++) {
    const v = mrc[x];
    if (Number.isFinite(v)) {
      nf++;
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  }
  if (!nf || mx <= mn) return out;
  const thr = qcOtsu(mrc);
  const mask = new Uint8Array(N);
  let nFluid = 0;
  for (let x = 0; x < N; x++) if (mrc[x] > thr) {
    mask[x] = 1;
    nFluid++;
  }
  if (!nFluid) return out;
  const [a10, a11, a12, a13] = affine[1];
  const vox = nx > 1 && ny > 1 && nz > 1 ? Math.abs(affine[0][0] * affine[1][1] * affine[2][2]) : 1;
  const Y = (i, j, k) => a10 * i + a11 * j + a12 * k + a13;
  const queue = new Int32Array(nFluid), cand = [];
  for (let s0 = 0; s0 < N; s0++) {
    if (mask[s0] !== 1) continue;
    let head = 0, tail = 0, sumY = 0, minKey = Infinity;
    queue[tail++] = s0;
    mask[s0] = 2;
    while (head < tail) {
      const x = queue[head++], i = x % nx, t = (x - i) / nx, j = t % ny, k = (t - j) / ny;
      sumY += Y(i, j, k);
      const key = (i * ny + j) * nz + k;
      if (key < minKey) minKey = key;
      for (let dk = -1; dk <= 1; dk++) {
        const kk = k + dk;
        if (kk < 0 || kk >= nz) continue;
        for (let dj = -1; dj <= 1; dj++) {
          const jj = j + dj;
          if (jj < 0 || jj >= ny) continue;
          const base = nx * (jj + ny * kk);
          for (let di = -1; di <= 1; di++) {
            const ii = i + di;
            if (ii < 0 || ii >= nx) continue;
            const y = ii + base;
            if (mask[y] === 1) {
              mask[y] = 2;
              queue[tail++] = y;
            }
          }
        }
      }
    }
    if (tail * vox < EYE_MIN_MM3) continue;
    if (sumY / tail > refY + EYE_ANTERIOR_MM) cand.push({ size: tail, minKey, idx: queue.slice(0, tail) });
  }
  cand.sort((a, b) => b.size - a.size || a.minKey - b.minKey);
  const kept = cand.slice(0, 2);
  if (!kept.length) return out;
  const ant = [], vit = [];
  for (const g of kept) {
    const idx2 = g.idx, lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
    let yAnt = -Infinity, si = 0, sj = 0, sk = 0;
    for (let t = 0; t < idx2.length; t++) {
      const x = idx2[t], i = x % nx, u = (x - i) / nx, j = u % ny, k = (u - j) / ny;
      const yv = Y(i, j, k);
      if (yv > yAnt) yAnt = yv;
      si += i;
      sj += j;
      sk += k;
      if (i < lo[0]) lo[0] = i;
      if (j < lo[1]) lo[1] = j;
      if (k < lo[2]) lo[2] = k;
      if (i > hi[0]) hi[0] = i;
      if (j > hi[1]) hi[1] = j;
      if (k > hi[2]) hi[2] = k;
    }
    out.centers_ijk.push([roundHalfEven(si / idx2.length), roundHalfEven(sj / idx2.length), roundHalfEven(sk / idx2.length)]);
    const capY = yAnt - EYE_CAP_MM, b = [hi[0] - lo[0] + 1, hi[1] - lo[1] + 1, hi[2] - lo[2] + 1], sub = new Uint8Array(b[0] * b[1] * b[2]);
    const subAt = (i, j, k) => i - lo[0] + b[0] * (j - lo[1] + b[1] * (k - lo[2]));
    for (let t = 0; t < idx2.length; t++) {
      const x = idx2[t], i = x % nx, u = (x - i) / nx, j = u % ny, k = (u - j) / ny;
      sub[subAt(i, j, k)] = 1;
      if (Y(i, j, k) > capY) ant.push(x);
    }
    erodeBox(sub, b, [2, 2, 1]);
    erodeBox(sub, b, [2, 2, 1]);
    let core = 0;
    for (let t = 0; t < sub.length; t++) core += sub[t];
    if (core) {
      for (let k = 0; k < b[2]; k++) for (let j = 0; j < b[1]; j++) for (let i = 0; i < b[0]; i++) {
        if (sub[i + b[0] * (j + b[1] * k)]) vit.push(i + lo[0] + nx * (j + lo[1] + ny * (k + lo[2])));
      }
    } else {
      for (let t = 0; t < idx2.length; t++) {
        const x = idx2[t], i = x % nx, u = (x - i) / nx, j = u % ny, k = (u - j) / ny;
        if (!(Y(i, j, k) > capY)) vit.push(x);
      }
    }
  }
  out.n_globes = kept.length;
  out.status = kept.length === 2 ? "found" : "one";
  if (ant.length) {
    const o = cOrder(ant, shape), pm = npMean(ppi, o), em = npMean(pei, o);
    out.ant_ppi_mean = fin(pm);
    out.ant_ppi_over_pei = em > 0 ? fin(pm / em) : null;
  }
  if (vit.length) {
    const o = cOrder(vit, shape), pm = npMean(ppi, o), em = npMean(pei, o);
    out.vit_ppi_mean = fin(pm);
    out.vit_ppi_over_pei = em > 0 ? fin(pm / em) : null;
  }
  return out;
}
var toWorld2 = (A, p) => [0, 1, 2].map((r) => A[r][0] * p[0] + A[r][1] * p[1] + A[r][2] * p[2] + A[r][3]);
function toVoxel(A, w) {
  const [a, b, c] = [A[0], A[1], A[2]], q = [w[0] - a[3], w[1] - b[3], w[2] - c[3]];
  if (!a[1] && !a[2] && !b[0] && !b[2] && !c[0] && !c[1]) return [q[0] / a[0], q[1] / b[1], q[2] / c[2]];
  const m = [[b[1] * c[2] - b[2] * c[1], a[2] * c[1] - a[1] * c[2], a[1] * b[2] - a[2] * b[1]], [b[2] * c[0] - b[0] * c[2], a[0] * c[2] - a[2] * c[0], a[2] * b[0] - a[0] * b[2]], [b[0] * c[1] - b[1] * c[0], a[1] * c[0] - a[0] * c[1], a[0] * b[1] - a[1] * b[0]]];
  const det = a[0] * m[0][0] + a[1] * m[1][0] + a[2] * m[2][0];
  return m.map((r) => (r[0] * q[0] + r[1] * q[1] + r[2] * q[2]) / det);
}
var STRUCT_LABELS = [1, 2, 3, 4];
function enhQcSeedKey(seeds) {
  const s = seeds || {};
  return JSON.stringify([s[1] ?? null, s[2] ?? null, s[3] ?? null, s[4] ?? null]);
}
function computeEnhancementQc(c, cfg, cache) {
  const num = (v, d) => typeof v === "number" && Number.isFinite(v) ? v : d;
  const th = { qc_ppi_pei_min: num(cfg && cfg.qc_ppi_pei_min, ENH_QC_DEFAULTS.qc_ppi_pei_min), qc_ppi_ref_min: num(cfg && cfg.qc_ppi_ref_min, ENH_QC_DEFAULTS.qc_ppi_ref_min) };
  const im = c.images || {}, ppi = im.ppi, pei = im.pei || null, mrc = im.mrc, hyd = im.hydrops || null;
  const shape = c.shape, A = c.affine, N = shape[0] * shape[1] * shape[2];
  const spacing2 = Array.isArray(c.spacing) && c.spacing.length === 3 ? c.spacing : [0, 1, 2].map((i) => Math.hypot(A[0][i], A[1][i], A[2][i]));
  const labels = c.labels && c.labels.length === N ? c.labels : null;
  const rec = {
    version: ENH_QC_VERSION,
    verdict: "undetermined",
    reasons: [],
    thresholds: th,
    reference: { value: null, kind: "none", center_ijk: null, radius_mm: REF_RADIUS_MM, posterior_mm: REF_POSTERIOR_MM, n_voxels: 0 },
    eye: { status: "not_searched", n_globes: 0, ant_ppi_over_pei: null, vit_ppi_over_pei: null, ant_ppi_mean: null, vit_ppi_mean: null, centers_ijk: [] },
    structures: {},
    sides: { R: "na", L: "na" },
    override: null,
    history: [],
    computed_at_revision: Number.isFinite(c.revision) ? c.revision : 0
  };
  const counts = [0, 0, 0, 0, 0];
  if (labels) for (let x = 0; x < N; x++) {
    const L = labels[x];
    if (L >= 1 && L <= 4) counts[L]++;
  }
  if (!ppi || !mrc) {
    if (!ppi) rec.reasons.push("NO_PPI");
    if (!mrc) rec.reasons.push("NO_MRC");
    if (ppi && !pei) rec.reasons.push("NO_PEI");
    for (const L of STRUCT_LABELS) rec.structures[L] = { n: counts[L], ppi_mean: null, pei_mean: null, ppi_over_pei: null, ppi_over_ref: null, ppi_over_ref_peri: null, low: false };
    return rec;
  }
  if (!pei) rec.reasons.push("NO_PEI");
  const idx2 = STRUCT_LABELS.map((L) => new Int32Array(counts[L]));
  if (labels) {
    const fill = [0, 0, 0, 0];
    for (let x = 0; x < N; x++) {
      const L = labels[x];
      if (L >= 1 && L <= 4) idx2[L - 1][fill[L - 1]++] = x;
    }
  }
  for (let t = 0; t < 4; t++) idx2[t] = cOrder(idx2[t], shape);
  const seeds = STRUCT_LABELS.map((L) => c.seeds && c.seeds[L]).filter((p) => Array.isArray(p) && p.length >= 3 && [0, 1, 2].every((d) => Number.isFinite(p[d])));
  const seedsOk = seeds.length === 4;
  let ref = null;
  if (seedsOk) {
    const key = enhQcSeedKey(c.seeds);
    if (cache && cache.key === key && cache.eye && typeof cache.eye === "object" && cache.reference && typeof cache.reference === "object") {
      rec.reference = { ...cache.reference, center_ijk: Array.isArray(cache.reference.center_ijk) ? cache.reference.center_ijk.slice() : cache.reference.center_ijk };
      rec.eye = { ...cache.eye, centers_ijk: Array.isArray(cache.eye.centers_ijk) ? cache.eye.centers_ijk.map((p) => p.slice()) : [] };
      ref = rec.reference.value;
    } else {
      const w = seeds.map((p) => toWorld2(A, p)), mid = [0, 1, 2].map((d) => w.reduce((s, p) => s + p[d], 0) / w.length);
      const refY = mid[1], centre = toVoxel(A, [mid[0], mid[1] - REF_POSTERIOR_MM, mid[2]]);
      const lr = localReference(ppi, mrc, shape, spacing2, centre, REF_RADIUS_MM, REF_MIN_VOX);
      ref = lr.value;
      rec.reference = { value: lr.value, kind: lr.value !== null ? "pons_sphere" : "none", center_ijk: lr.center_ijk, radius_mm: REF_RADIUS_MM, posterior_mm: REF_POSTERIOR_MM, n_voxels: lr.n };
      if (pei) rec.eye = eyeQc(mrc, ppi, pei, shape, A, refY);
    }
  }
  for (const L of STRUCT_LABELS) {
    const s = structureQc(ppi, pei, idx2[L - 1], ref, th);
    rec.structures[L] = { n: s.n, ppi_mean: s.ppi_mean, pei_mean: s.pei_mean, ppi_over_pei: s.ppi_over_pei, ppi_over_ref: s.ppi_over_ref, ppi_over_ref_peri: perilymphRatio(ppi, hyd, idx2[L - 1], ref), low: s.low };
  }
  const R = sideState([rec.structures[1], rec.structures[2]]), Lf = sideState([rec.structures[3], rec.structures[4]]);
  rec.sides = { R, L: Lf };
  const eyeLow = rec.eye.ant_ppi_over_pei !== null && rec.eye.ant_ppi_over_pei < th.qc_ppi_pei_min;
  const hasVoxels = counts.some((n) => n > 0), hasRoi = seedsOk && hasVoxels;
  if (eyeLow) rec.reasons.push("EYE_LOW");
  if (R === "low") rec.reasons.push("SIDE_LOW_R");
  if (Lf === "low") rec.reasons.push("SIDE_LOW_L");
  if (rec.eye.status === "not_found") rec.reasons.push("EYE_NOT_FOUND");
  if (seedsOk && ref === null) rec.reasons.push("NO_REF");
  if (!hasVoxels) rec.reasons.push("NO_ROI");
  if (!seedsOk) rec.reasons.push("NO_SEEDS");
  if (eyeLow || R === "low" && Lf !== "ok" || Lf === "low" && R !== "ok") rec.verdict = "insufficient";
  else if (R === "low" || Lf === "low") rec.verdict = "insufficient_one_side";
  else if (rec.eye.ant_ppi_over_pei === null && (!hasRoi || R === "na" && Lf === "na")) rec.verdict = "undetermined";
  else rec.verdict = "sufficient";
  return rec;
}

// portable/src/worker.js
var studioVersion = typeof __STUDIO_VERSION__ !== "undefined" ? __STUDIO_VERSION__ : "dev";
var studioName = true ? "ELH Studio" : "ELH Studio";
var cases = /* @__PURE__ */ new Map();
var series = /* @__PURE__ */ new Map();
var studies = [];
var uid = () => crypto.randomUUID().replaceAll("-", "");
var qcConfig = { ...ENH_QC_DEFAULTS };
var QC_RANGES = { qc_ppi_pei_min: [0.5, 2], qc_ppi_ref_min: [1, 3] };
var QC_VERDICTS = ["sufficient", "insufficient", "insufficient_one_side", "undetermined"];
var QC_HISTORY_MAX = 20;
var plainObject = (v) => !!v && typeof v === "object" && !Array.isArray(v);
function qcRefresh(c) {
  const prev = c.enhancement_qc;
  if (prev && prev.computed_at_revision === c.revision && plainObject(prev.thresholds) && Object.keys(QC_RANGES).every((k) => prev.thresholds[k] === qcConfig[k])) return prev;
  const q = computeEnhancementQc(c, qcConfig, c.qcSeedCache);
  if (q.eye && (q.eye.status !== "not_searched" || c.images.ppi && !c.images.pei && q.reference && Array.isArray(q.reference.center_ijk))) c.qcSeedCache = { key: enhQcSeedKey(c.seeds), eye: { ...q.eye, centers_ijk: q.eye.centers_ijk.map((p) => p.slice()) }, reference: { ...q.reference } };
  q.override = prev && plainObject(prev.override) ? prev.override : null;
  q.history = [...prev && Array.isArray(prev.history) ? prev.history : [], { revision: q.computed_at_revision, verdict: q.verdict }].slice(-QC_HISTORY_MAX);
  c.enhancement_qc = q;
  return q;
}
function qcThresholds(p) {
  const out = {};
  for (const [k, [lo, hi]] of Object.entries(QC_RANGES)) {
    const v = p ? p[k] : void 0;
    if (typeof v !== "number" || !Number.isFinite(v) || v < lo - 1e-9 || v > hi + 1e-9) throw Error("\u3057\u304D\u3044\u5024\u306E\u7BC4\u56F2\u5916\u3067\u3059\u3002");
    out[k] = v;
  }
  return out;
}
function qcRestore(r) {
  if (!plainObject(r) || r.version !== ENH_QC_VERSION || !QC_VERDICTS.includes(r.verdict) || !["thresholds", "sides", "structures", "eye", "reference"].every((k) => plainObject(r[k]))) return null;
  const history = Array.isArray(r.history) ? r.history.filter((h) => plainObject(h) && Number.isFinite(h.revision) && QC_VERDICTS.includes(h.verdict)).map((h) => ({ revision: h.revision, verdict: h.verdict })).slice(-QC_HISTORY_MAX) : [];
  return { ...r, override: plainObject(r.override) ? r.override : null, history };
}
function qcFlags(q, label) {
  if (!q) return [];
  return [...q.sides && q.sides[label <= 2 ? "R" : "L"] === "low" ? ["ENH_LOW_SIDE"] : [], ...Array.isArray(q.reasons) && q.reasons.includes("EYE_LOW") ? ["ENH_LOW_EYE"] : [], ...q.override ? ["ENH_QC_OVERRIDE"] : []];
}
var QC_README = {
  ja: { sufficient: "\u9020\u5F71 QC\uFF1A\u5341\u5206", continued: "\u9020\u5F71 QC\uFF1A\u4E0D\u8DB3\uFF08\u7D9A\u884C\u306E\u8A18\u9332\u3042\u308A\uFF09", insufficient: "\u9020\u5F71 QC\uFF1A\u4E0D\u8DB3", one_side: "\u9020\u5F71 QC\uFF1A\u4E0D\u8DB3\uFF08\u7247\u5074\u306E\u307F\uFF09", undetermined: "\u9020\u5F71 QC\uFF1A\u5224\u5B9A\u3067\u304D\u305A" },
  en: { sufficient: "Enhancement QC: sufficient", continued: "Enhancement QC: insufficient (continued, recorded)", insufficient: "Enhancement QC: insufficient", one_side: "Enhancement QC: insufficient (one side only)", undetermined: "Enhancement QC: undetermined" }
};
function qcReadmeLine(q, language) {
  const v = q && q.verdict, key = v === "insufficient" ? q.override ? "continued" : "insufficient" : v === "insufficient_one_side" ? "one_side" : v === "sufficient" ? "sufficient" : "undetermined";
  return QC_README[language === "en" ? "en" : "ja"][key];
}
function describe(c) {
  return Object.fromEntries(Object.entries(c).filter(([k]) => !["images", "labels", "undo", "affine", "cutPreview", "lumen", "lumenCache", "lumenFlip", "lumenSaved", "lumenImagesSaved", "qcSeedCache"].includes(k)));
}
var INPUT_MODES = { ppi_pei: ["ppi", "pei", "mrc"], ppi_mrc: ["ppi", "mrc"], given: ["hydrops_input", "mrc"] };
var ROLE_NAMES = { ppi: "PPI", pei: "PEI", mrc: "MRC", hydrops_input: "HYDROPS \u578B\u753B\u50CF" };
var K_DEFAULT = 0.04;
function modeRoles(mode) {
  if (typeof mode !== "string" || !Object.hasOwn(INPUT_MODES, mode)) throw Error("\u5165\u529B\u306E\u7A2E\u985E\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  return INPUT_MODES[mode];
}
function inputK(k) {
  if (k === void 0 || k === null || k === "") return K_DEFAULT;
  const v = typeof k === "string" ? Number(k.trim() || NaN) : k;
  if (!validK(v)) throw Error(K_RANGE_MESSAGE);
  return v;
}
var inputFlip = (f) => f === true || f === "true" || f === "on";
var kText = (k) => Number(k).toFixed(3);
var TEMPLATE_NOTE = true ? "\u53C2\u7167\u306F\u516C\u958B\u30C7\u30FC\u30BFVS-SEG\u306E6\u4F8B\u3092\u5E73\u5747\u3057\u305F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u3059\u3002\u81EA\u52D5\u691C\u51FA\u306E\u5F8C\u306F\u4E2D\u5FC3\u70B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u88C5\u7F6E\u30FB\u64AE\u50CF\u6CD5\u3078\u306E\u4E00\u822C\u5316\u306F\u672A\u691C\u8A3C\u3067\u3059\u3002" : false ? "\u53C2\u7167\u306F\u63D0\u4F9B\u6E08\u307F3\u4F8B\u306B\u7531\u6765\u3059\u308B\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u3059\u3002\u4ED6\u88C5\u7F6E\u30FB\u64AE\u50CF\u6CD5\u3078\u306E\u4E00\u822C\u5316\u306F\u672A\u691C\u8A3C\u3067\u3059\u3002" : "\u53C2\u7167\u306F\u5408\u6210\u75C7\u4F8B4\u4F8B\u306B\u7531\u6765\u3059\u308B\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3067\u3059\u3002\u5B9F\u75C7\u4F8B\u3067\u306F\u4E2D\u5FC3\u70B9\u3092\u624B\u52D5\u3067\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4ED6\u88C5\u7F6E\u30FB\u64AE\u50CF\u6CD5\u3078\u306E\u4E00\u822C\u5316\u306F\u672A\u691C\u8A3C\u3067\u3059\u3002";
var CASE_WARNINGS = ["\u7814\u7A76\u7528\u306E\u81EA\u52D5\u62BD\u51FA\u5019\u88DC\u3067\u3059\u3002\u6B63\u89E3\u30DE\u30B9\u30AF\u306B\u3088\u308B\u5206\u5272\u7CBE\u5EA6\u306E\u691C\u8A3C\u306F\u672A\u5B8C\u4E86\u3067\u3059\u3002", "\u753B\u50CF\u5EA7\u6A19\u304C\u4E00\u81F4\u3057\u3066\u3082\u4F53\u52D5\u306F\u6B8B\u308A\u5F97\u307E\u3059\u3002PPI\u30FBPEI\u306E\u4F4D\u7F6E\u305A\u308C\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", TEMPLATE_NOTE];
function caseWarnings(mode, k) {
  if (mode === "ppi_mrc") return [`HYDROPS2\uFF08PPI \u2212 k \xD7 MRC\u3001k = ${kText(k)}\uFF09\u3067\u3059\u3002%EH \u306F k \u306B\u654F\u611F\u3067\u3059\u3002\u53E4\u5178 HYDROPS \u306E\u5024\u3084\u3057\u304D\u3044\u5024\u3068\u306F\u6BD4\u3079\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u9020\u5F71\u306E\u5341\u5206\u3055\u306F PPI/PEI \u3067\u306F\u78BA\u8A8D\u3067\u304D\u307E\u305B\u3093\u3002`, CASE_WARNINGS[0], CASE_WARNINGS[2]];
  if (mode === "given") return ["\u5165\u529B\u753B\u50CF\u306E\u8CA0\u306E\u753B\u7D20\u3092\u5185\u30EA\u30F3\u30D1\u3068\u3057\u3066\u6570\u3048\u3066\u3044\u307E\u3059\u3002\u8D64\u306E\u91CD\u306A\u308A\u304C\u5185\u30EA\u30F3\u30D1\u8154\u306B\u4E00\u81F4\u3059\u308B\u304B\uFF08\u5916\u30EA\u30F3\u30D1\u3084\u9AA8\u304C\u8D64\u304F\u306A\u3044\u304B\uFF09\u3092\u78BA\u8A8D\u3057\u3001\u9006\u306A\u3089\u8AAD\u307F\u8FBC\u307F\u76F4\u3057\u3066\u7B26\u53F7\u3092\u53CD\u8EE2\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5408\u6210\u75C7\u4F8B\u3067\u52D5\u4F5C\u3092\u78BA\u8A8D\u3057\u3066\u3044\u307E\u3059\u3002real IR \u306F\u672A\u691C\u8A3C\u3067\u3059\u3002", CASE_WARNINGS[0], CASE_WARNINGS[2]];
  return CASE_WARNINGS.slice();
}
function provenanceOf(role, v) {
  const p = { format: v.meta.format, inversion_time_ms: v.meta.ti ?? null, description: v.meta.description ?? "", series_number: v.meta.series_number ?? null, tr_ms: v.meta.tr ?? null, te_ms: v.meta.te ?? null };
  if (role === "hydrops_input") p.rescale_intercept = Number.isFinite(v.meta.rescale_intercept) ? v.meta.rescale_intercept : null;
  return p;
}
function makeCaseFrom({ mode = "ppi_pei", volumes = {}, title, k, flip } = {}) {
  const roles = modeRoles(mode), v = volumes || {};
  let images, kk, flipped;
  if (mode === "ppi_mrc") {
    kk = inputK(k);
    images = createImagesPpiMrc(v.ppi, v.mrc, kk);
  } else if (mode === "given") {
    flipped = inputFlip(flip);
    images = createImagesGiven(v.hydrops_input, v.mrc, flipped);
  } else images = createImagesPpiPei(v.ppi, v.pei, v.mrc);
  const ref = mode === "given" ? v.hydrops_input : v.ppi, id = uid();
  const c = {
    id,
    title,
    label: "",
    memo: "",
    shape: ref.shape,
    affine: ref.affine,
    spacing: spacing(ref),
    images,
    labels: new Uint8Array(ref.data.length),
    seeds: {},
    apex: {},
    lumen_manual: lumenManualDefaults(),
    undo: [],
    lumen: {},
    lumenCache: /* @__PURE__ */ new Map(),
    lumenFlip: { R: false, L: false },
    lumenSaved: null,
    lumenImagesSaved: null,
    reviewed: false,
    revision: 0,
    created: (/* @__PURE__ */ new Date()).toISOString(),
    automatic: null,
    kinds: Object.keys(images),
    has_roi: false,
    provenance: Object.fromEntries(roles.filter((r) => v[r]).map((r) => [r, provenanceOf(r, v[r])])),
    warnings: caseWarnings(mode, kk),
    windows: windows(images),
    input_mode: mode
  };
  if (mode === "ppi_mrc") {
    c.k = kk;
    c.k_context = { mrc_p99: npPercentile(v.mrc.data, 99) };
  }
  if (mode === "given") c.sign_flipped = flipped;
  c.rows = quantify(c);
  c.lumen_status = lumenManualStatus(c);
  c.lumen_saved_sides = lumenSavedSides(c);
  qcRefresh(c);
  cases.set(id, c);
  return c;
}
var lumenSavedSides = (c) => ["R", "L"].filter((s) => c.lumenSaved && c.lumenSaved[s] && c.lumenSaved[s].revision === c.revision && !(c.lumen_status && c.lumen_status[s] && c.lumen_status[s].excluded));
function refresh(c) {
  c.rows = quantify(c);
  c.has_roi = c.labels.some((x) => x > 0);
  c.lumen_status = lumenManualStatus(c);
  c.lumen_saved_sides = lumenSavedSides(c);
  qcRefresh(c);
  return describe(c);
}
async function auto(c, progress) {
  if (!c.images.mrc) throw Error("\u81EA\u52D5\u5C40\u5728\u306B\u306FMRC\u304C\u5FC5\u8981\u3067\u3059\u3002");
  const vol = { data: c.images.mrc, shape: c.shape, affine: c.affine };
  const { seeds, info } = await localize(vol, atlas_vsseg_mean_default, progress);
  progress("\u8778\u725B\u30FB\u524D\u5EAD\u306E\u5019\u88DC\u3092\u62BD\u51FA\u3057\u3066\u8CA0\u4FE1\u53F7\u3092\u8A08\u6E2C\u4E2D");
  const result = segment(vol, seeds);
  Object.assign(c, result, { automatic: info, reviewed: false, undo: [], two_plane_edits: [], revision: c.revision + 1 });
  refresh(c);
  return c;
}
function safeUnzip(bytes) {
  let total = 0, count = 0;
  return unzipSync(bytes, { filter: (file) => {
    total += file.originalSize;
    count++;
    if (total > 512 * 1024 ** 2 || count > 4096) throw Error("ZIP\u306E\u5C55\u958B\u5F8C\u30B5\u30A4\u30BA\u30FB\u30D5\u30A1\u30A4\u30EB\u6570\u304C\u4E0A\u9650\u3092\u8D85\u3048\u307E\u3059\u3002");
    return !file.name.endsWith("/") && !file.name.startsWith("__MACOSX/") && !file.name.split("/").pop().startsWith(".");
  } });
}
async function loadFile(file, progress) {
  if (file.size > 512 * 1024 ** 2) throw Error("\u30D5\u30A1\u30A4\u30EB\u4E0A\u9650\u306F512MB\u3067\u3059\u3002");
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (/\.nii(\.gz)?$/i.test(file.name)) return loadNifti(bytes);
  if (/\.zip$/i.test(file.name)) {
    const entries = safeUnzip(bytes);
    return loadDicom(Object.entries(entries).filter(([name]) => !/DICOMDIR$/i.test(name)).map(([name, bytes2]) => new File([bytes2], name)), progress);
  }
  throw Error("NIfTI (.nii/.nii.gz) \u307E\u305F\u306F\u5358\u4E00DICOM\u30B7\u30EA\u30FC\u30BA\u306EZIP\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
}
async function scan(files, progress) {
  series = /* @__PURE__ */ new Map();
  studies = [];
  const studyMap = /* @__PURE__ */ new Map();
  let skipped = 0;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.name.startsWith(".") || file.name === "DICOMDIR") continue;
    try {
      let h;
      try {
        h = dicomHeader(new Uint8Array(await file.slice(0, 131072).arrayBuffer()), true);
      } catch {
        h = dicomHeader(new Uint8Array(await file.arrayBuffer()), true);
      }
      if (!h.uid || !h.study || !h.rows || !h.cols) continue;
      if (!series.has(h.uid)) {
        const rescale = (tag) => {
          const t = (h.ds.string(tag) || "").trim(), x = t === "" ? NaN : Number(t.split("\\")[0]);
          return Number.isFinite(x) ? x : null;
        };
        const id = uid();
        series.set(h.uid, {
          id,
          files: [],
          study: h.study,
          description: h.description,
          number: Number(h.ds.string("x00200011")) || 0,
          ti: h.ti || null,
          tr: h.ds.string("x00180080") || "",
          te: h.ds.string("x00180081") || "",
          rows: h.rows,
          cols: h.cols,
          pixel_spacing: h.pixelSpacing,
          thickness: h.thickness || null,
          frames: h.frames,
          transfer: h.transfer,
          image_type: h.ds.string("x00080008") || "",
          modality: h.modality,
          rescale_intercept: rescale("x00281052"),
          rescale_slope: rescale("x00281053")
        });
      }
      series.get(h.uid).files.push(file);
      if (!studyMap.has(h.study)) studyMap.set(h.study, { id: uid(), date: h.ds.string("x00080020") || "", series: [] });
    } catch {
      skipped++;
    }
    if (i % 50 === 0) progress(`DICOM\u30D8\u30C3\u30C0\u3092\u78BA\u8A8D\u4E2D ${i + 1}/${files.length}`);
  }
  const keyed = /* @__PURE__ */ new Map();
  for (const s of series.values()) {
    studyMap.get(s.study).series.push({ ...s, files: void 0, study: void 0, count: s.files.length });
    keyed.set(s.id, s);
  }
  series = keyed;
  for (const study of studyMap.values()) {
    study.series.sort((a, b) => a.number - b.number);
    const match = { ppi: [], pei: [], mrc: [] }, given = [];
    for (const s of study.series) {
      const text = s.description.toUpperCase();
      if (s.modality !== "MR" || s.frames !== 1) continue;
      if (/(^|[^A-Z])MRC([^A-Z]|$)|CISTERN/.test(text)) match.mrc.push(s.id);
      else if (/(^|[^A-Z])PPI([^A-Z]|$)/.test(text) || Math.abs((s.ti || 0) - 2250) < 1) match.ppi.push(s.id);
      else if (/(^|[^A-Z])PEI([^A-Z]|$)/.test(text) || Math.abs((s.ti || 0) - 2050) < 1) match.pei.push(s.id);
      if (/SUB|HYDROPS|REAL.?IR|PSIR/i.test(s.description) || s.rescale_intercept !== null && s.rescale_intercept < 0) given.push(s.id);
    }
    study.suggested = Object.fromEntries(Object.entries(match).map(([k, v]) => [k, v.length === 1 ? v[0] : ""]));
    study.complete = Object.values(study.suggested).every(Boolean);
    study.suggested.hydrops_input = given.length === 1 ? given[0] : "";
    studies.push(study);
  }
  studies.sort((a, b) => Number(b.complete) - Number(a.complete) || a.date.localeCompare(b.date));
  studies.forEach((s, i) => s.title = `Case ${String(i + 1).padStart(2, "0")}`);
  return { studies, skipped, total_files: files.length, note: "\u30B7\u30EA\u30FC\u30BA\u540D\u3068TI\u306B\u57FA\u3065\u304F\u5019\u88DC\u3067\u3059\u3002\u30D8\u30C3\u30C0\u30FB\u64AE\u50CF\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u3066\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002" };
}
var HYDROPS2_SOURCE = "https://doi.org/10.2463/mrms.11.303";
var MODE_FORMULAS = { ppi_pei: { hydrops: "PPI - PEI", mi2: "(PPI - PEI) * MRC" }, ppi_mrc: { hydrops: "PPI - k * MRC", mi2: "(PPI - k * MRC) * MRC" }, given: { hydrops: "input image (signed; negative = endolymph)", mi2: "input image * MRC" } };
var QC_IMAGE_KINDS = { ppi_pei: ["ppi", "pei", "hydrops"], ppi_mrc: ["ppi", "mrc", "hydrops"], given: ["mrc", "mi2", "hydrops"] };
var caseMode = (c) => typeof c.input_mode === "string" && Object.hasOwn(INPUT_MODES, c.input_mode) ? c.input_mode : "ppi_pei";
function modeReadmeLine(c, language) {
  const en = language === "en", mode = caseMode(c);
  if (mode === "ppi_mrc") return (en ? `Input type: PPI \u2212 k \xD7 MRC (HYDROPS2, k = ${kText(c.k)}). Open with ELH Studio 1.2 or later.` : `\u5165\u529B\u306E\u7A2E\u985E\uFF1APPI \u2212 k \xD7 MRC\uFF08HYDROPS2\u3001k = ${kText(c.k)}\uFF09\u3002ELH Studio 1.2 \u4EE5\u964D\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002`) + "\n";
  if (mode === "given") {
    const f = c.sign_flipped === true;
    return (en ? `Input type: one HYDROPS-type image (signed, negative = endolymph; sign flipped: ${f ? "Yes" : "No"}). Checked with synthetic cases; real IR is not verified. Open with ELH Studio 1.2 or later.` : `\u5165\u529B\u306E\u7A2E\u985E\uFF1AHYDROPS \u578B\u306E 1 \u679A\uFF08\u7B26\u53F7\u3064\u304D\u3001\u8CA0 = \u5185\u30EA\u30F3\u30D1\u3002\u7B26\u53F7\u53CD\u8EE2\uFF1A${f ? "\u3042\u308A" : "\u306A\u3057"}\uFF09\u3002\u5408\u6210\u75C7\u4F8B\u3067\u52D5\u4F5C\u3092\u78BA\u8A8D\u3001real IR \u306F\u672A\u691C\u8A3C\u3002ELH Studio 1.2 \u4EE5\u964D\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\u3002`) + "\n";
  }
  return "";
}
function binsReadmeLine(has, language) {
  if (!has) return "";
  return language === "en" ? "lumen.csv, skeleton_norm_* columns (cochlea rows): endolymph percentage inside the skeleton tube (whole, basal, middle, apical turn), percentage of fluid outside the shape, confidence (high/mid/low), tube radius in mm. Empty if the normalization failed or the ZIP was saved before ELH Studio 1.3.0. report.json (skeleton_norm.rule) records the rule used: tube radius, confidence thresholds, scale limits.\nlumen_skeleton_bins.csv: one row per ear per 10-degree bin along the skeleton (voxel counts of fluid inside the tube, endolymph inside the tube, fluid outside the shape; resampled counts smp_in, smp_el).\n" : "lumen.csv \u306E skeleton_norm_* \u5217\uFF08\u8778\u725B\u306E\u884C\uFF09\uFF1A\u7BA1\u306E\u4E2D\u306E\u5185\u30EA\u30F3\u30D1\u306E\u5272\u5408\uFF08\u5168\u4F53\u3001\u57FA\u5E95\u56DE\u8EE2\u3001\u4E2D\u56DE\u8EE2\u3001\u9802\u56DE\u8EE2\uFF09\u3001\u5F62\u306E\u5916\u306E\u6DB2\u4F53\u306E\u5272\u5408\u3001\u4FE1\u983C\u5EA6\uFF08high/mid/low\uFF09\u3001\u7BA1\u306E\u534A\u5F84\uFF08mm\uFF09\u3002\u6B63\u898F\u5316\u306B\u5931\u6557\u3057\u305F\u8033\u3001\u304A\u3088\u3073 ELH Studio 1.3.0 \u3088\u308A\u524D\u306B\u4FDD\u5B58\u3057\u305F ZIP \u3067\u306F\u7A7A\u3067\u3059\u3002report.json \u306E skeleton_norm.rule \u306B\u3001\u4F7F\u3063\u305F\u57FA\u6E96\uFF08\u7BA1\u306E\u534A\u5F84\u3001\u4FE1\u983C\u5EA6\u306E\u3057\u304D\u3044\u5024\u3001\u500D\u7387\u306E\u9650\u754C\uFF09\u3092\u8A18\u9332\u3057\u307E\u3059\u3002\nlumen_skeleton_bins.csv\uFF1A\u8033\u3054\u3068\u30FB\u30B9\u30B1\u30EB\u30C8\u30F3\u306B\u6CBF\u3063\u305F 10\xB0 \u3054\u3068\u306B 1 \u884C\uFF08\u7BA1\u306E\u4E2D\u306E\u6DB2\u4F53\u3001\u7BA1\u306E\u4E2D\u306E\u5185\u30EA\u30F3\u30D1\u3001\u5F62\u306E\u5916\u306E\u6DB2\u4F53\u306E\u30DC\u30AF\u30BB\u30EB\u6570\u3001\u304A\u3088\u3073\u8AAD\u307F\u76F4\u3057\u306E\u6570 smp_in\u30FBsmp_el\uFF09\u3002\n";
}
var isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
var isPng = (b) => b instanceof Uint8Array && b.length >= 8 && [137, 80, 78, 71, 13, 10, 26, 10].every((v, i) => b[i] === v);
var lumenImageGroup = (kind) => LUMEN_IMAGE_KINDS[kind] === "norm" ? "norm" : "lumen";
function lumenImagesFor(c, input) {
  const plan = lumenImagePlan(c), meta = isObj(input) && isObj(input.meta) ? input.meta : null, given = isObj(input) && isObj(input.files) ? input.files : {};
  const valid = !!meta && Number.isFinite(meta.header_px) && typeof meta.label === "string" && (meta.language === "ja" || meta.language === "en") && isObj(meta.sides);
  const files = {}, sides = {}, missing = { lumen: [], norm: [] }, failed = { norm: [] }, normError = { norm: [] }, lumencFailed = { norm: [] };
  for (const side of ["R", "L"]) {
    const p = plan[side];
    if (p.source !== "current" && p.source !== "restored") continue;
    const m = valid ? meta.sides[side] : null, match = isObj(m) && m.revision === p.revision && m.flip === p.flip && typeof p.flip === "boolean";
    const names = [], lacking = /* @__PURE__ */ new Set(), fail = /* @__PURE__ */ new Set(), nerr = /* @__PURE__ */ new Set(), lcf = /* @__PURE__ */ new Set();
    for (const [kind, name] of Object.entries(LUMEN_IMAGE_FILES[side])) {
      const part = p[LUMEN_IMAGE_KINDS[kind]], g = lumenImageGroup(kind);
      if (!part.ok) {
        if (part.state === "failed") fail.add(g);
        else if (part.state === "norm_error") nerr.add(g);
        else if (part.state === "absent") lacking.add(g);
        else if (part.state === "error" && g === "norm") lcf.add(g);
        continue;
      }
      if (match && Object.hasOwn(given, name) && isPng(given[name])) {
        files[name] = given[name];
        names.push(name);
      } else lacking.add(g);
    }
    if (names.length) sides[side] = { revision: p.revision, flip: p.flip, files: names };
    for (const g of lacking) missing[g].push(side);
    for (const g of fail) failed[g].push(side);
    for (const g of nerr) normError[g].push(side);
    for (const g of lcf) lumencFailed[g].push(side);
  }
  return { files, sides, missing, failed, normError, lumencFailed, meta: valid ? { header_px: meta.header_px, label: meta.label, language: meta.language } : null };
}
var imagePatterns = (g) => Object.keys(LUMEN_IMAGE_KINDS).filter((k) => lumenImageGroup(k) === g).map((k) => LUMEN_IMAGE_FILES.R[k].replace(/_R\.png$/, "_*.png")).join(" / ");
var earsJa = (ears) => ears.map((s) => s === "R" ? "\u53F3" : "\u5DE6").join("\u30FB");
var earsEn = (ears) => ears.map((s) => s === "R" ? "Right" : "Left").join(", ");
var IMAGE_README = {
  ja: {
    lumen: {
      has: (f) => `${f}\uFF1ALUMEN \u306E\u753B\u50CF\uFF08\u89E3\u6790\u3057\u305F\u8033\u3060\u3051\u3002\u6570\u5024\u306F lumen.csv\uFF09\u3002MRC\u30FBHYDROPS \u306E\u6BB5\u306E\u660E\u308B\u3055\u306F\u8033\uFF08\u753B\u50CF\uFF09\u3054\u3068\u306B\u81EA\u52D5\u3067\u8ABF\u6574\u3057\u3066\u3044\u307E\u3059\u3002`,
      missing: (ears) => `LUMEN \u306E\u753B\u50CF\u304C\u7121\u3044\u8033\uFF1A${earsJa(ears)}\u3002\u300C\u89E3\u6790\u958B\u59CB\u300D\u3067\u8868\u793A\u3057\u76F4\u3057\u3066\u304B\u3089\u4FDD\u5B58\u3059\u308B\u3068\u5165\u308A\u307E\u3059\u3002`
    },
    norm: {
      has: (f) => `${f}\uFF1A\u5171\u901A\u306E\u5F62\u3067\u6BD4\u3079\u308B\u753B\u50CF\uFF08\u91CD\u306A\u308A\u3092\u5916\u3057\u305F\u3089\u305B\u3093\u3001\u5171\u901A\u306E\u5F15\u304D\u4F38\u3070\u3057\u50CF\u3001\u89D2\u5EA6\u3054\u3068\u306E\u7DDA\u3002\u30B9\u30B1\u30EB\u30C8\u30F3\u3067\u6B63\u898F\u5316\u3067\u304D\u305F\u8033\u3060\u3051\u3002\u6570\u5024\u306F lumen.csv \u306E skeleton_norm_* \u5217\u3068 lumen_skeleton_bins.csv\uFF09\u3002\u89D2\u5EA6\u306F\u30B9\u30B1\u30EB\u30C8\u30F3\u4E0A\u306E\u89D2\u5EA6\uFF08\u57FA\u5E95\u306E\u7AEF\u304C 0\xB0\u3002LUMEN-C \u306E\u89D2\u5EA6\u3068\u306F\u8D77\u70B9\u304C\u9055\u3044\u307E\u3059\uFF09\u3067\u3001\u5DE6\u8033\u306F\u93E1\u50CF\u306B\u3057\u3066\u53F3\u8033\u3068\u540C\u3058\u5411\u304D\u306B\u63CF\u3044\u3066\u3044\u307E\u3059\u3002`,
      missing: (ears) => `\u5171\u901A\u306E\u5F62\u3067\u6BD4\u3079\u308B\u753B\u50CF\u304C\u7121\u3044\u8033\uFF1A${earsJa(ears)}\u3002\u300C\u89E3\u6790\u958B\u59CB\u300D\u3067\u89E3\u6790\u3057\u76F4\u3057\u3066\u304B\u3089\u4FDD\u5B58\u3059\u308B\u3068\u5165\u308A\u307E\u3059\u3002`,
      failed: (ears) => `\u5171\u901A\u306E\u5F62\u3067\u6BD4\u3079\u308B\u753B\u50CF\u304C\u7121\u3044\u8033\uFF08\u30B9\u30B1\u30EB\u30C8\u30F3\u3092\u5F53\u3066\u306F\u3081\u3089\u308C\u306A\u304B\u3063\u305F\u305F\u3081\uFF09\uFF1A${earsJa(ears)}\u3002`,
      normError: (ears) => `\u5171\u901A\u306E\u5F62\u3067\u6BD4\u3079\u308B\u753B\u50CF\u304C\u7121\u3044\u8033\uFF08\u6B63\u898F\u5316\u3092\u8A08\u7B97\u3067\u304D\u306A\u304B\u3063\u305F\u305F\u3081\uFF09\uFF1A${earsJa(ears)}\u3002`,
      lumencFailed: (ears) => `\u5171\u901A\u306E\u5F62\u3067\u6BD4\u3079\u308B\u753B\u50CF\u304C\u7121\u3044\u8033\uFF08LUMEN-C \u306E\u89E3\u6790\u306B\u5931\u6557\u3057\u305F\u305F\u3081\uFF09\uFF1A${earsJa(ears)}\u3002`
    }
  },
  en: {
    lumen: {
      has: (f) => `${f}: LUMEN images (analysed ears only; the numbers are in lumen.csv). The brightness of the MRC and HYDROPS rows is adjusted automatically for each ear (each image).`,
      missing: (ears) => `Ears without a LUMEN image: ${earsEn(ears)}. Show them again with \u201CStart analysis\u201D and save to include them.`
    },
    norm: {
      has: (f) => `${f}: images of \u201CCompare on a common shape\u201D (untangled spiral, common stretched view, per-angle profile; ears with a skeleton normalization only; the numbers are in the skeleton_norm_* columns of lumen.csv and in lumen_skeleton_bins.csv). The angle is the angle along the skeleton (0\xB0 at the basal end; its origin differs from the LUMEN-C angle); the left ear is mirrored and drawn in the same orientation as the right ear.`,
      missing: (ears) => `Ears without the \u201CCompare on a common shape\u201D images: ${earsEn(ears)}. Analyse again with \u201CStart analysis\u201D and save to include them.`,
      failed: (ears) => `Ears without the \u201CCompare on a common shape\u201D images (the skeleton could not be fitted): ${earsEn(ears)}.`,
      normError: (ears) => `Ears without the \u201CCompare on a common shape\u201D images (the normalization could not be computed): ${earsEn(ears)}.`,
      lumencFailed: (ears) => `Ears without the \u201CCompare on a common shape\u201D images (the LUMEN-C analysis failed): ${earsEn(ears)}.`
    }
  }
};
function imageReadmeLines(images, language) {
  const T = IMAGE_README[language === "en" ? "en" : "ja"], lines = [], kindOf = {};
  for (const side of ["R", "L"]) for (const [k, n] of Object.entries(LUMEN_IMAGE_FILES[side])) kindOf[n] = k;
  for (const g of ["lumen", "norm"]) {
    const t = T[g];
    if (Object.keys(images.files).some((n) => lumenImageGroup(kindOf[n]) === g)) lines.push(t.has(imagePatterns(g)));
    if (images.missing[g] && images.missing[g].length) lines.push(t.missing(images.missing[g]));
    if (t.failed && images.failed[g] && images.failed[g].length) lines.push(t.failed(images.failed[g]));
    if (t.normError && images.normError[g] && images.normError[g].length) lines.push(t.normError(images.normError[g]));
    if (t.lumencFailed && images.lumencFailed[g] && images.lumencFailed[g].length) lines.push(t.lumencFailed(images.lumencFailed[g]));
  }
  return lines.map((l) => l + "\n").join("");
}
var LUMEN_IMAGE_HEADER_PX_MAX = 1e3;
function lumenImagesRestore(li, files) {
  if (!isObj(li) || !Number.isInteger(li.header_px) || li.header_px < 1 || li.header_px > LUMEN_IMAGE_HEADER_PX_MAX || typeof li.label !== "string" || li.language !== "ja" && li.language !== "en" || !isObj(li.sides)) return null;
  const out = { header_px: li.header_px, label: li.label, language: li.language, sides: {}, files: {} };
  if (typeof li.app === "string") out.app = li.app;
  else if ("app" in li) out.app = null;
  for (const side of ["R", "L"]) {
    const s = li.sides[side];
    if (!isObj(s) || !Number.isInteger(s.revision) || typeof s.flip !== "boolean" || !Array.isArray(s.files)) continue;
    const names = Object.values(LUMEN_IMAGE_FILES[side]).filter((n) => s.files.includes(n) && isPng(files[n]));
    if (!names.length) continue;
    out.sides[side] = { revision: s.revision, flip: s.flip, files: names };
    for (const n of names) out.files[n] = files[n];
  }
  return Object.keys(out.sides).length ? out : null;
}
function lumenImageState(c) {
  const plan = lumenImagePlan(c), s = c.lumenImagesSaved;
  if (!s) return { plan, saved: null };
  const files = {}, ours = s.app === void 0 || s.app === studioName;
  for (const side of ["R", "L"]) {
    const m = s.sides[side], p = plan[side];
    if (ours && p.source === "restored" && m && m.revision === p.revision && m.flip === p.flip) for (const n of m.files) files[n] = s.files[n];
  }
  return { plan, saved: { header_px: s.header_px, label: s.label, language: s.language, files } };
}
async function exportCase(c, progress, language = "ja", lumenImages = null) {
  const englishRegions = { 1: "Right cochlea", 2: "Right vestibule", 3: "Left cochlea", 4: "Left vestibule" };
  progress("\u753B\u50CF\u30FB\u30DE\u30B9\u30AF\u30FB\u8A08\u6E2C\u5024\u3092ZIP\u306B\u307E\u3068\u3081\u3066\u3044\u307E\u3059");
  const files = {}, report = { ...describe(c), affine: c.affine, format: "HYDROPS_STUDIO_PORTABLE_1", formulas: { ...MODE_FORMULAS[caseMode(c)], ratio: "100 * count(ROI & image < 0) / count(ROI)" }, sources: ["https://doi.org/10.2463/mrms.2012-0027", ...caseMode(c) === "ppi_mrc" ? [HYDROPS2_SOURCE] : []] };
  const lumen = lumenReport(c, studioVersion);
  if (Object.keys(lumen).length) report.lumen = lumen;
  const images = lumenImagesFor(c, lumenImages);
  if (images.meta && Object.keys(images.sides).length) report.lumen_images = { ...images.meta, app: studioName, created: (/* @__PURE__ */ new Date()).toISOString(), sides: images.sides };
  files["report.json"] = strToU8(JSON.stringify(report, null, 2));
  for (const [name, bytes] of Object.entries(images.files)) files[name] = bytes;
  for (const [kind, data] of Object.entries(c.images)) files[kind + ".nii"] = niftiBytes(data, c.shape, c.affine);
  files["roi_labels.nii"] = niftiBytes(c.labels, c.shape, c.affine, true);
  const negative = new Uint8Array(c.labels.length);
  for (let i = 0; i < negative.length; i++) negative[i] = c.labels[i] && c.images.hydrops[i] < 0 ? 1 : 0;
  files["negative_signal.nii"] = niftiBytes(negative, c.shape, c.affine, true);
  const fields = ["label", "region", "image", "fluid_voxels", "negative_voxels", "fluid_mm3", "negative_mm3", "ratio_percent", "z_minus1_percent", "z_plus1_percent", "slices_with_roi", "flags"];
  const quote = (v) => '"' + String(v ?? "").replaceAll('"', '""') + '"';
  const qc = c.enhancement_qc, flagsOf = (r) => {
    const extra = qcFlags(qc, r.label);
    return extra.length ? [...r.flags || [], ...extra] : r.flags;
  };
  files["measurements.csv"] = strToU8("\uFEFF" + [fields.join(","), ...c.rows.map((r) => fields.map((k) => quote(k === "region" && language === "en" ? englishRegions[r.label] : k === "flags" ? flagsOf(r) : r[k])).join(","))].join("\r\n"));
  const lumenRows = lumenExportRows(c, studioVersion);
  if (lumenRows.length) files["lumen.csv"] = strToU8("\uFEFF" + [LUMEN_CSV_FIELDS.join(","), ...lumenRows.map((r) => LUMEN_CSV_FIELDS.map((k) => quote(r[k])).join(","))].join("\r\n"));
  const binRows = lumenBinRows(c, studioVersion);
  if (binRows.length) files["lumen_skeleton_bins.csv"] = strToU8("\uFEFF" + [LUMEN_BINS_CSV_FIELDS.join(","), ...binRows.map((r) => LUMEN_BINS_CSV_FIELDS.map((k) => quote(r[k])).join(","))].join("\r\n"));
  if (c.label || c.memo) files["notes.txt"] = strToU8((c.label ? (language === "en" ? "Name: " : "\u8868\u793A\u540D: ") + c.label + "\n" : "") + (c.memo ? (language === "en" ? "Notes:\n" : "\u899A\u66F8:\n") + c.memo + "\n" : ""));
  files["README.txt"] = strToU8(language === "en" ? studioName + " / Research prototype\nROI: 1=Right cochlea, 2=Right vestibule, 3=Left cochlea, 4=Left vestibule\nNegative signal represents candidate endolymph. Check for CSF/IAC/SCC contamination.\nReopen this ZIP with \u201COpen saved results\u201D.\nSource patient tags are excluded, but the images remain sensitive information.\nCross-sectional grading thresholds are not applied to 3D volume ratios.\nThe report.json schema and stored metadata retain their original values for compatibility.\n" + qcReadmeLine(qc, "en") + "\n" + modeReadmeLine(c, "en") + binsReadmeLine(binRows.length > 0, "en") + imageReadmeLines(images, "en") : studioName + " / \u7814\u7A76\u7528\u30D7\u30ED\u30C8\u30BF\u30A4\u30D7\nROI: 1=\u53F3\u8778\u725B, 2=\u53F3\u524D\u5EAD, 3=\u5DE6\u8778\u725B, 4=\u5DE6\u524D\u5EAD\n\u8CA0\u4FE1\u53F7\u306F\u5185\u30EA\u30F3\u30D1\u5019\u88DC\u3067\u3059\u3002CSF/IAC/SCC\u6DF7\u5165\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u672CZIP\u306F\u300C\u4FDD\u5B58\u7D50\u679C\u3092\u958B\u304F\u300D\u3067\u518D\u8AAD\u8FBC\u3067\u304D\u307E\u3059\u3002\n\u5143\u306E\u60A3\u8005\u30BF\u30B0\u306F\u9664\u5916\u3057\u3066\u3044\u307E\u3059\u304C\u753B\u50CF\u306F\u6A5F\u5FAE\u60C5\u5831\u3067\u3059\u3002\n3D\u4F53\u7A4D\u6BD4\u306B\u65AD\u9762\u7A4D\u30B0\u30EC\u30FC\u30C9\u95BE\u5024\u3092\u9069\u7528\u3057\u3066\u3044\u307E\u305B\u3093\u3002\n" + qcReadmeLine(qc, "ja") + "\n" + modeReadmeLine(c, "ja") + binsReadmeLine(binRows.length > 0, "ja") + imageReadmeLines(images, "ja"));
  if (typeof OffscreenCanvas !== "undefined") for (const side of ["R", "L"]) {
    const pair = side === "R" ? [1, 2] : [3, 4], points = pair.map((k) => c.seeds[k]).filter(Boolean);
    if (!points.length) continue;
    const center = [0, 1, 2].map((i) => points.reduce((s, p) => s + p[i], 0) / points.length), z = Math.round(center[2]);
    const canvas = new OffscreenCanvas(900, 340), ctx = canvas.getContext("2d");
    ctx.fillStyle = "#09121e";
    ctx.fillRect(0, 0, 900, 340);
    const qcKinds = QC_IMAGE_KINDS[caseMode(c)];
    for (const [i, kind] of qcKinds.entries()) {
      const source = new OffscreenCanvas(c.shape[0], c.shape[1]), context = source.getContext("2d");
      context.putImageData(new ImageData(renderPixels(c, kind, z), c.shape[0], c.shape[1]), 0, 0);
      const px = c.shape[0] - 1 - center[0], py = c.shape[1] - 1 - center[1], r = 16 / c.spacing[0];
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(source, px - r, py - r, r * 2, r * 2, i * 300 + 5, 30, 290, 290);
      ctx.fillStyle = "#dce7ef";
      ctx.font = "14px sans-serif";
      ctx.fillText(`${side}  ${kind.toUpperCase()} / slice ${z + 1}`, i * 300 + 8, 20);
    }
    files[`QC_${side}_${qcKinds.map((k) => k.toUpperCase()).join("_")}.png`] = new Uint8Array(await (await canvas.convertToBlob({ type: "image/png" })).arrayBuffer());
  }
  return zipSync(files, { level: 1 });
}
var apexInside = (p, shape) => Array.isArray(p) && p.length === 3 && p.every((x, d) => typeof x === "number" && Number.isFinite(x) && x >= 0 && x < shape[d]);
function apexRestore(a, shape) {
  const out = {};
  if (a && typeof a === "object" && !Array.isArray(a)) {
    for (const s of ["R", "L"]) if (apexInside(a[s], shape)) out[s] = a[s].slice();
  }
  return out;
}
async function restore(file) {
  const files = safeUnzip(new Uint8Array(await file.arrayBuffer()));
  if (!files["report.json"]) throw Error("\u672C\u30A2\u30D7\u30EA\u3067\u4FDD\u5B58\u3057\u305FZIP\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
  const report = JSON.parse(strFromU8(files["report.json"]));
  if (report.format !== "HYDROPS_STUDIO_PORTABLE_1") throw Error("\u4FDD\u5B58\u7D50\u679C\u306E\u5F62\u5F0F\u304C\u7570\u306A\u308A\u307E\u3059\u3002");
  const mode = report.input_mode === void 0 ? "ppi_pei" : report.input_mode;
  if (typeof mode !== "string" || !Object.hasOwn(INPUT_MODES, mode)) throw Error("\u4FDD\u5B58\u7D50\u679C\u306E\u5F62\u5F0F\u304C\u7570\u306A\u308A\u307E\u3059\u3002");
  let c, ref;
  if (mode === "ppi_pei") {
    const ppi = loadNifti(files["ppi.nii"]), pei = loadNifti(files["pei.nii"]), mrc = files["mrc.nii"] ? loadNifti(files["mrc.nii"]) : null;
    c = makeCaseFrom({ mode, volumes: { ppi, pei, mrc }, title: report.title });
    ref = ppi;
  } else {
    const needed = mode === "ppi_mrc" ? ["ppi.nii", "mrc.nii"] : ["hydrops.nii", "mrc.nii"];
    if (needed.some((n) => !files[n])) throw Error("\u4FDD\u5B58\u7D50\u679C\u306E\u5F62\u5F0F\u304C\u7570\u306A\u308A\u307E\u3059\u3002");
    const mrc = loadNifti(files["mrc.nii"]);
    if (mode === "ppi_mrc") {
      ref = loadNifti(files["ppi.nii"]);
      c = makeCaseFrom({ mode, volumes: { ppi: ref, mrc }, title: report.title, k: typeof report.k === "number" ? report.k : NaN });
    } else {
      ref = loadNifti(files["hydrops.nii"]);
      c = makeCaseFrom({ mode, volumes: { hydrops_input: ref, mrc }, title: report.title, flip: false });
      c.sign_flipped = report.sign_flipped === true;
    }
  }
  const mask = loadNifti(files["roi_labels.nii"]);
  compatible(ref, mask);
  if (mask.data.some((x) => !Number.isInteger(x) || x < 0 || x > 4)) throw Error("ROI\u30DE\u30B9\u30AF\u306E\u30E9\u30D9\u30EB\u304C\u4E0D\u6B63\u3067\u3059\u3002");
  if (report.affine && report.affine.length === 4 && report.affine.flat().length === 16 && report.affine.flat().every((v, i) => Number.isFinite(v) && Math.abs(v - c.affine.flat()[i]) < 1e-3)) {
    c.affine = report.affine;
    c.spacing = spacing(c);
  }
  c.labels = Uint8Array.from(mask.data);
  c.seeds = report.seeds || {};
  c.automatic = report.automatic;
  c.reviewed = !!report.reviewed;
  c.created = report.created;
  c.revision = report.revision || 0;
  c.provenance = report.provenance || c.provenance;
  c.two_plane_edits = Array.isArray(report.two_plane_edits) ? report.two_plane_edits : [];
  c.apex = apexRestore(report.apex, c.shape);
  c.lumen_manual = lumenManualRestore(report.lumen_manual);
  c.label = typeof report.label === "string" ? report.label : "";
  c.memo = typeof report.memo === "string" ? report.memo : "";
  c.enhancement_qc = qcRestore(report.enhancement_qc);
  const saved = lumenRestore(report.lumen);
  c.lumenSaved = saved.saved;
  c.lumenFlip = saved.flip;
  c.lumenImagesSaved = lumenImagesRestore(report.lumen_images, files);
  refresh(c);
  return describe(c);
}
self.onmessage = async (event) => {
  const { id, action, payload } = event.data, progress = (message) => self.postMessage({ id, progress: message });
  try {
    let result;
    if (action === "scan") result = await scan(payload.files, progress);
    else if (action === "load") {
      const { title, automatic } = payload, roles = payload.roles || {}, mode = payload.mode || "ppi_pei", need = modeRoles(mode), k = mode === "ppi_mrc" ? inputK(payload.k) : void 0;
      const chosen = need.map((r) => roles[r]).filter(Boolean);
      if (new Set(chosen).size !== chosen.length) throw Error("\u540C\u4E00\u30B7\u30EA\u30FC\u30BA\u3092\u8907\u6570\u306E\u5F79\u5272\u306B\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002");
      if (mode !== "ppi_pei" && !roles.mrc) throw Error(MRC_REQUIRED_MESSAGE);
      const volumes = {};
      for (const role of need) {
        if (!roles[role] && role === "mrc") continue;
        const name = ROLE_NAMES[role], selected = series.get(roles[role]);
        if (!selected) throw Error(`${name}\u306E\u30B7\u30EA\u30FC\u30BA\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`);
        progress(`${name}\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D`);
        volumes[role] = await loadDicom(selected.files, (s) => progress(`${name}\uFF1A${s}`));
      }
      const c = makeCaseFrom({ mode, volumes, title, k, flip: payload.flip });
      if (automatic && volumes.mrc) {
        try {
          await auto(c, progress);
        } catch (e) {
          c.warnings.push(`\u81EA\u52D5\u62BD\u51FA\u306F\u672A\u5B8C\u4E86\uFF1A${e.message}`);
        }
      }
      result = describe(c);
    } else if (action === "upload") {
      const mode = payload.mode || "ppi_pei", need = modeRoles(mode), k = mode === "ppi_mrc" ? inputK(payload.k) : void 0;
      if (mode !== "ppi_pei" && !payload.mrc) throw Error(MRC_REQUIRED_MESSAGE);
      for (const role of need) if (role !== "mrc" && !payload[role]) throw Error(`${ROLE_NAMES[role]}\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`);
      const vols = {};
      for (const key of need) if (payload[key]) vols[key] = await loadFile(payload[key], progress);
      const c = makeCaseFrom({ mode, volumes: vols, title: "Imported case", k, flip: payload.flip });
      result = describe(c);
    } else if (action === "history") result = [...cases.values()].map((c) => ({ id: c.id, title: c.title, label: c.label || "", memo: c.memo || "", created: c.created, reviewed: c.reviewed })).reverse();
    else if (action === "restore") result = await restore(payload.file);
    else if (action === "qc_config") {
      qcConfig = qcThresholds(payload);
      for (const c of cases.values()) qcRefresh(c);
      result = { ok: true, cases: [...cases.keys()] };
    } else {
      const c = cases.get(payload.case_id);
      if (!c) throw Error("\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044\u3002");
      if (action === "detail") result = describe(c);
      else if (action === "annotate") {
        c.label = String(payload.label ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 80);
        c.memo = String(payload.memo ?? "").slice(0, 2e3);
        result = describe(c);
      } else if (action === "slices") {
        const images = payload.kinds.map((k) => renderPixels(c, k, payload.z, payload.overlay, payload.contrast, payload.roiOpacity));
        self.postMessage({ id, result: { images, width: c.shape[0], height: c.shape[1] } }, images.map((x) => x.buffer));
        return;
      } else if (action === "oblique") {
        const r = renderOblique(c, payload);
        self.postMessage({ id, result: r }, [r.pixels.buffer]);
        return;
      } else if (action === "automatic") {
        await auto(c, progress);
        result = describe(c);
      } else if (action === "seed") {
        if (!c.images.mrc) throw Error("\u4E2D\u5FC3\u70B9\u304B\u3089\u306E\u62BD\u51FA\u306B\u306FMRC\u304C\u5FC5\u8981\u3067\u3059\u3002");
        c.seeds[payload.label] = payload.point;
        c.reviewed = false;
        if (Object.keys(c.seeds).length === 4) {
          Object.assign(c, segment({ data: c.images.mrc, shape: c.shape, affine: c.affine }, c.seeds));
          c.undo = [];
          c.two_plane_edits = [];
          c.revision++;
          c.manual_seed_edit = true;
        }
        result = refresh(c);
      } else if (action === "polygon") {
        polygon(c, payload);
        result = refresh(c);
      } else if (action === "undo") {
        undoEdit(c);
        c.cutPreview = null;
        result = refresh(c);
      } else if (action === "cut_preview") {
        const selection = intersectContours(c, payload), mask = new Uint8Array(c.labels.length);
        for (const p of selection.indices) mask[p] = 1;
        c.cutPreview = { ...selection, label: payload.label, axial: payload.axial, coronal: payload.coronal, drawn_at: payload.drawn_at, revision: c.revision, token: uid(), mask };
        result = Object.fromEntries(Object.entries(c.cutPreview).filter(([k]) => !["indices", "mask"].includes(k)));
      } else if (action === "cut_apply") {
        if (!c.cutPreview || c.cutPreview.token !== payload.token) throw Error("\u524A\u9664\u7BC4\u56F2\u3092\u5148\u306B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
        applyIntersection(c, c.cutPreview);
        c.cutPreview = null;
        result = refresh(c);
      } else if (action === "cut_clear") {
        c.cutPreview = null;
        result = {};
      } else if (action === "ortho") {
        const preview = c.cutPreview?.token === payload.token && c.cutPreview?.revision === c.revision ? c.cutPreview.mask : null;
        result = renderOrtho(c, payload.plane, payload.slice, preview, payload.roiOpacity);
        self.postMessage({ id, result }, [result.pixels.buffer]);
        return;
      } else if (action === "apex") {
        if (!c.images.mrc) throw Error("\u8778\u725B\u9802\u306E\u8A2D\u5B9A\u306B\u306FMRC\u304C\u5FC5\u8981\u3067\u3059\u3002");
        const side = payload.side;
        if (side !== "R" && side !== "L") throw Error("\u8033\u306E\u5074\uFF08R/L\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
        if (payload.point === null) {
          if (!c.apex[side]) {
            result = refresh(c);
          } else {
            delete c.apex[side];
            c.lumenFlip[side] = false;
            c.revision++;
            result = refresh(c);
          }
        } else {
          if (!apexInside(payload.point, c.shape)) throw Error("\u8778\u725B\u9802\u304C\u753B\u50CF\u306E\u5916\u3067\u3059\u3002");
          c.apex[side] = payload.point.slice();
          c.lumenFlip[side] = false;
          c.revision++;
          result = refresh(c);
        }
      } else if (action === "lumen_image_plan") result = lumenImageState(c);
      else if (action === "lumen_manual") {
        const side = payload.side;
        if (side !== "R" && side !== "L") throw Error("\u8033\u306E\u5074\uFF08R/L\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
        const next = { ...c.lumen_manual[side] };
        if ("csf_not_needed" in payload) next.csf_not_needed = !!payload.csf_not_needed;
        if ("excluded" in payload) next.excluded = lumenExcluded(payload.excluded ?? null);
        c.lumen_manual[side] = next;
        result = refresh(c);
      } else if (action === "lumen") {
        if (!c.images.mrc || !c.images.hydrops) throw Error("LUMEN\u306B\u306FMRC\u3068HYDROPS\u753B\u50CF\u304C\u5FC5\u8981\u3067\u3059\u3002");
        if (payload.side !== "R" && payload.side !== "L") throw Error("\u8033\u306E\u5074\uFF08R/L\uFF09\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
        const side = payload.side, flip = c.apex[side] ? false : typeof payload.flip === "boolean" ? payload.flip : !!c.lumenFlip[side], key = `${c.revision}:${side}:${flip}`;
        c.lumenFlip[side] = flip;
        let r = c.lumenCache.get(key);
        if (!r) {
          progress("LUMEN\uFF1A\u8778\u725B\u3068\u524D\u5EAD\u3092\u89E3\u6790\u4E2D\uFF08\u6570\u79D2\u304B\u304B\u308A\u307E\u3059\uFF09");
          r = computeLumen(c, side, { flip });
          for (const k of [...c.lumenCache.keys()]) if (!k.startsWith(`${c.revision}:`)) c.lumenCache.delete(k);
          c.lumenCache.set(key, r);
        }
        c.lumen[side] = r;
        result = { ...r, affine: c.affine.map((row) => row.slice()) };
      } else if (action === "review") {
        c.reviewed = payload.reviewed;
        result = { reviewed: c.reviewed };
      } else if (action === "qc_override") {
        const note = String(payload.note ?? "").replace(/[\r\n]+/g, " ").trim();
        if ([...note].length > 80) throw Error("\u30E1\u30E2\u306F80\u5B57\u307E\u3067\u3067\u3059\u3002");
        const q = qcRefresh(c);
        c.enhancement_qc = { ...q, override: { at: (/* @__PURE__ */ new Date()).toISOString(), revision_at: c.revision, verdict_at_override: q.verdict, note } };
        result = describe(c);
      } else if (action === "export") {
        const bytes = await exportCase(c, progress, payload.language, payload.lumen_images);
        self.postMessage({ id, result: { bytes } }, [bytes.buffer]);
        return;
      } else throw Error("\u672A\u5BFE\u5FDC\u306E\u64CD\u4F5C\u3067\u3059\u3002");
    }
    self.postMessage({ id, result });
  } catch (error) {
    self.postMessage({ id, error: error instanceof Error ? error.message : String(error) });
  }
};
/*! Bundled license information:

dicom-parser/dist/dicomParser.min.js:
  (*! dicom-parser - 1.8.12 - 2023-02-20 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/dicomParser *)
*/
