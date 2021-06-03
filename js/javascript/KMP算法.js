function getNext(str) {
  var res = [],
    k = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    if (i === 0) {
      res.push(0);
      continue;
    }
    while (k > 0 && str[i] !== str[k]) {
      k = str[k - 1];
    }
    if (str[i] === str[k]) {
      k++;
    }
    res[i] = k;
  }
  return res;
}


