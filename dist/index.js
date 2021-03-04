function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactBootstrap = require('react-bootstrap');
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));
var wmkColorPalette = require('wmk-color-palette');
var wmkLib = require('wmk-lib');
var fa = require('react-icons/fa');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = new wmkColorPalette.ColorPalette([{
  value: "#fefefe",
  group: "white",
  reverse: true
}, {
  value: "#575757",
  group: "gray",
  text: true
}, {
  value: "#055DB8",
  group: "blue",
  primary: true
}, {
  value: "#D04A01",
  group: "orange",
  accent: true
}, {
  value: "#1F99E8",
  group: "blue",
  secondary: true
}, {
  value: "#2F8379",
  group: "green",
  tertiary: true
}, {
  value: "#999999",
  group: "gray"
}, {
  value: "#D2D2D2",
  group: "gray",
  coaccent: true
}, {
  value: "#F1F1F1",
  group: "gray"
}, {
  value: "#F8F8F8",
  group: "white"
}, {
  value: "#0a0a0a",
  group: "black",
  black: true
}, {
  value: "#c50b0b",
  group: "red"
}]);

var _templateObject;
var Title = styled.h4(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 1rem 0 0.5rem 0;\n"])), function (_ref) {
  var colors = _ref.colors;
  return colors.hex("primary");
});

var GalleryTitle = function GalleryTitle(_ref2) {
  var children = _ref2.children,
      colors = _ref2.colors;
  return /*#__PURE__*/React.createElement(Title, {
    colors: colors
  }, children);
};
GalleryTitle.propTypes = {
  children: PropTypes.node.isRequired,
  colors: PropTypes.object
};
GalleryTitle.defaultProps = {
  colors: colors
};

var _templateObject$1, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var StyledTitle = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: 3;\n  height: 100%;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  color: white;\n  border: none;\n  display: inline-block;\n  padding: 0.5rem;\n  text-align: left;\n  width: 100%;\n  top: 0;\n  left: 0;\n"])));
var WrapCol = styled(reactBootstrap.Col)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: ", "px;\n  :hover {\n    .cat-overlay {\n      background: rgb(0, 0, 0);\n      transition: all 0.3s ease;\n      background: linear-gradient(\n        180deg,\n        rgba(0, 0, 0, 0.6) 0%,\n        rgba(0, 0, 0, 0) 60%\n      );\n    }\n  }\n"])), function (_ref) {
  var height = _ref.height;
  return height;
});
var StyledOverlay = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.6) 0%,\n    rgba(0, 0, 0, 0) 40%\n  );\n  transition: all 0.3s ease;\n"])));
var StyledLink = styled(wmkLib.WMKLink)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0 0.5rem;\n"])));
var StyledBg = styled.img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  object-fit: cover;\n  max-width: 100%;\n  z-index: 1;\n"])));

var TileCategory = function TileCategory(_ref2) {
  var tag = _ref2.tag,
      height = _ref2.height,
      width = _ref2.width;
  var bg = tag.bg,
      title = tag.title,
      slug = tag.slug;
  return /*#__PURE__*/React.createElement(WrapCol, {
    lg: 3,
    md: 6,
    height: height
  }, /*#__PURE__*/React.createElement(StyledLink, {
    to: slug,
    height: height,
    width: width
  }, /*#__PURE__*/React.createElement(StyledBg, {
    height: height,
    width: width,
    src: bg,
    alt: title
  }), /*#__PURE__*/React.createElement(StyledTitle, null, title), /*#__PURE__*/React.createElement(StyledOverlay, {
    className: "cat-overlay"
  })));
};

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1;
var BGImg = styled.img(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  object-fit: cover;\n  width: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n"])), function (_ref) {
  var height = _ref.height;
  return height + "px";
});
var HoverLink = styled(wmkLib.WMKLink)(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  display: block;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  position: relative;\n  overflow: hidden;\n  :hover {\n    span {\n      transtion: all 0.4s ease;\n      bottom: 0;\n    }\n  }\n"])));
var HoverTitle = styled.span(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  display: block;\n  position: absolute;\n  width: 100%;\n  bottom: -5rem;\n  transition: all 0.4s ease;\n  background: rgb(47, 144, 154, 0.8);\n  color: white;\n  font-size: 0.7rem;\n  text-align: left;\n  padding: 0.3rem 0.5rem;\n"])));
var Overlay = styled.div(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgb(0, 0, 0);\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.6) 0%,\n    rgba(0, 0, 0, 0) 70%\n  );\n  transition: all 0.5s ease;\n  :hover {\n    transition: all 0.5s ease;\n    background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.3) 0%,\n      rgba(0, 0, 0, 0) 50%\n    );\n  }\n"])));
var PlayIconWrap = styled.div(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    font-size: 6vh;\n    color: white;\n    opacity: 0.8;\n  }\n"])));

var PlayIcon = function PlayIcon(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(PlayIconWrap, null, children);
};

var TileHover = function TileHover(_ref3) {
  var bg = _ref3.bg,
      title = _ref3.title,
      to = _ref3.to,
      width = _ref3.width,
      height = _ref3.height,
      type = _ref3.type,
      target = _ref3.target;
  return /*#__PURE__*/React.createElement(reactBootstrap.Col, {
    lg: 3,
    md: 6
  }, /*#__PURE__*/React.createElement(HoverLink, {
    to: to,
    target: target,
    width: width,
    height: height
  }, bg ? /*#__PURE__*/React.createElement(BGImg, {
    src: bg,
    alt: title,
    width: width,
    height: height
  }) : null, /*#__PURE__*/React.createElement(HoverTitle, null, title), /*#__PURE__*/React.createElement(Overlay, null), type === "video" ? /*#__PURE__*/React.createElement(PlayIcon, null, /*#__PURE__*/React.createElement(fa.FaPlayCircle, null)) : null));
};
TileHover.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string
};
TileHover.defaultProps = {
  width: 350,
  height: 175
};

var _templateObject$3, _templateObject2$2;
var Wrap = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  * {\n    margin-right: 15px;\n    font-size: 0.75rem;\n    font-weight: 300;\n  }\n  button {\n    border: none;\n    background: none;\n    height: 1.1rem;\n    padding: 0;\n    color: ", ";\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  img {\n    width: 10px;\n    height: 15px;\n    position: relative;\n    top: 2px;\n  }\n"])), function (_ref) {
  var colors = _ref.colors;
  return colors.hex("primary");
});
var CurrentTitle = styled.p(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n  color: green;\n  text-decoration: underline;\n"])));
var BreadCrumbs = function BreadCrumbs(_ref2) {
  var root = _ref2.root,
      paths = _ref2.paths,
      current = _ref2.current,
      Separator = _ref2.Separator;
  return /*#__PURE__*/React.createElement(Wrap, null, root ? /*#__PURE__*/React.createElement(BreadCrumbLink, {
    to: get_1(root, "to"),
    target: get_1(root, "target")
  }, get_1(root, "text")) : null, paths && paths.length ? paths.map(function (path, i) {
    return /*#__PURE__*/React.createElement(BreadCrumbLink, {
      seperate: true,
      Separator: Separator,
      to: get_1(path, "to"),
      target: get_1(path, "target"),
      key: "crumbLink" + i
    }, get_1(path, "text"));
  }) : null, /*#__PURE__*/React.createElement(BreadCrumbCurrent, {
    Separator: Separator
  }, current));
};
BreadCrumbs.propTypes = {
  root: PropTypes.object,
  paths: PropTypes.array,
  current: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  Separator: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  colors: PropTypes.object
};
BreadCrumbs.defaultProps = {
  colors: colors
};

var BreadCrumbCurrent = function BreadCrumbCurrent(_ref3) {
  var children = _ref3.children,
      Separator = _ref3.Separator;
  return children ? /*#__PURE__*/React.createElement(React.Fragment, null, Separator ? /*#__PURE__*/React.createElement(Separator, null) : /*#__PURE__*/React.createElement("span", null, "|"), /*#__PURE__*/React.createElement(CurrentTitle, null, children)) : null;
};

var BreadCrumbLink = function BreadCrumbLink(_ref4) {
  var Separator = _ref4.Separator,
      seperate = _ref4.seperate,
      to = _ref4.to,
      target = _ref4.target,
      children = _ref4.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, seperate ? Separator ? /*#__PURE__*/React.createElement(Separator, null) : /*#__PURE__*/React.createElement("span", null, "|") : null, /*#__PURE__*/React.createElement(wmkLib.WMKLink, {
    to: to,
    target: target
  }, children));
};

var MediaGallery = function MediaGallery(_ref) {
  var media = _ref.media,
      init = _ref.init,
      tileHeight = _ref.tileHeight,
      tileWidth = _ref.tileWidth,
      Breadcrumbs = _ref.Breadcrumbs,
      crumbs = _ref.crumbs;
  var hash = media.hash,
      arr = media.arr;
  var key = get_1(init, "slug");
  var galleryTitle = get_1("init", "title");
  return /*#__PURE__*/React.createElement(reactBootstrap.Container, null, Breadcrumbs ? /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(Breadcrumbs, {
    root: get_1(crumbs, "root"),
    paths: get_1(crumbs, "paths"),
    current: get_1(crumbs, "current")
  }))) : null, galleryTitle ? /*#__PURE__*/React.createElement(reactBootstrap.Row, null, /*#__PURE__*/React.createElement(reactBootstrap.Col, null, /*#__PURE__*/React.createElement(GalleryTitle, null, galleryTitle))) : null, /*#__PURE__*/React.createElement(reactBootstrap.Row, null, !init ? arr.map(function (category) {
    var media = category.media,
        slug = category.slug,
        title = category.title,
        bg = category.bg,
        key = category.key;
    return slug !== "general" ? /*#__PURE__*/React.createElement(TileCategory, {
      media: media,
      key: slug,
      tag: category,
      title: title,
      bg: bg,
      width: tileWidth,
      height: tileHeight,
      objKey: key
    }) : null;
  }) : init && hash[key] && hash[key].map(function (med, i) {
    var type = med.type,
        title = med.title,
        to = med.to,
        bg = med.bg;
    return /*#__PURE__*/React.createElement(TileHover, {
      key: "media" + i,
      bg: bg,
      type: type,
      title: title,
      to: to,
      width: tileWidth,
      height: tileHeight
    });
  })));
};
MediaGallery.propTypes = {
  media: PropTypes.object.isRequired,
  init: PropTypes.object,
  tileHeight: PropTypes.number,
  tileWidth: PropTypes.number,
  crumbs: PropTypes.object
};
MediaGallery.defaultProps = {
  tileHeight: 175,
  tileWidth: 350,
  Breadcrumbs: BreadCrumbs,
  crumbs: {
    root: {
      to: "/",
      text: "Home"
    },
    paths: [],
    current: false
  }
};

exports.BreadCrumbs = BreadCrumbs;
exports.MediaGallery = MediaGallery;
//# sourceMappingURL=index.js.map
