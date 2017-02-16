var board = [
 ['rock2',      'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular'],
 ['rock12',     'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],
 ['rock12',     'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular'],
 ['rock12',     'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular'],
 ['rock12',     'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'wall-regular'],//row 4
 ['rock8',      'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 5
 ['path-floor', 'pacman',       'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor'],//row 6
 ['rock7',      'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 7
 ['rock12',     'wall-regular', 'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'wall-regular', 'wall-regular'],//row 8
 ['rock12',     'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],//row 9
 ['rock12',     'path-floor',   'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'path-floor',   'wall-regular'],//row 'wall-regular''path-floor'
 ['rock12',     'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'path-floor',   'wall-regular', 'wall-regular', 'path-floor',   'path-floor',   'path-floor',   'wall-regular'],//row 'wall-regular''wall-regular'
 ['rock8',      'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'rock15',       'wall-regular'],//row 'wall-regular'2
];

var arr = [];
board.forEach(function(row) {
  row.forEach(function(col) {

    if (arr.indexOf(col) < 0) {
      arr.push(col);
    }
  });
  //console.log(row.length);
});
console.log(arr.sort());
