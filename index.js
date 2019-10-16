const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const temp = Array.isArray(collection) ? collection : Object.values(collection)
        for (let i = 0; i < temp.length; ++i) {
          callback(temp[i]);
        } 
      return collection;
    },

    map: function(collection, callback) {
      const temp = Array.isArray(collection) ? collection.slice() : Object.values(collection);
      const newArr = [];
      for (let i = 0; i < temp.length; ++i) {
        newArr.push(callback(temp[i]));
      }
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let i = 0;
      if (acc == null) {
        acc = collection[0];
        i = 1;
      }

      for (i; i < collection.length; ++i) {
        acc = callback(acc,collection[i],collection);
      }
      return acc; 
    },

    find: function (collection,predicate) {
      for (let i = 0; i < collection.length; ++i) {
          if(predicate(collection[i]))
            return collection[i]
      }
    },

    filter: function (collection, predicate) {
      const arr = [];
      for (let i = 0; i < collection.length; ++i) {
        if(predicate(collection[i]))
          arr.push(collection[i])
      }
      return arr;
    },

    size: function (collection) {
      const size = Array.isArray(collection) ? collection.length : Object.values(collection).length;  
      return size;
    },
    functions: function() {

    },
    first: function(collection,n) {
      return n == null ? collection[0] : collection.slice(0,n);
    },
    last: function(collection,n) {
      return n == null ? collection[collection.length-1] : collection.slice(collection.length-n,collection.length);
    },
    compact: function (array) {
      const arr = [];
      for (let i = 0; i < array.length; ++i) {
        if (!!array[i])
          arr.push(array[i]);
      }

      return arr;
    },
    sortBy: function(array, callback) {
      const sortArr = [...array];
      return sortArr.sort(function(a,b) {return callback(a)-callback(b)});
    },
    flatten: function(array, depth = false) {
      let flattenArr = [];

      if (depth) {
//        const flattenArr = [];
        for (let i = 0; i < array.length; ++i) {
          flattenArr = flattenArr.concat(array[i])
        }
      } else { 
        while(array.length) {
          let element = array.shift();
          if (Array.isArray(element))
            array = element.concat(array);
          else 
            flattenArr.push(element);
        }
      }
      return flattenArr;
    },
    uniq: function(array, isSorted, callback){
        const uniqueSet = new Set();
        let uniqArr = [];
        if (callback === undefined) {
          for(let i = 0; i < array.length; ++i){
            if(!uniqueSet.has(array[i])) {
              uniqueSet.add(array[i]);
              uniqArr.push(array[i]);
            }
          }
        }
        else {
          for(let i = 0; i < array.length; ++i){
            let val = callback(array[i]);
            if(!uniqueSet.has(val)) {
              uniqueSet.add(val);
              uniqArr.push(array[i]);
            }
          }        
        }
        return uniqArr;
    },
    keys: function(object){
      return Object.keys(object);
    },
    values: function(object){
      return Object.values(object);
    },
    functions: function(object){
      const functionNames = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
