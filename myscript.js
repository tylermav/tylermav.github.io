// The amount of symbol we want to place;
var count = 200;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
    center: new Point(0, 0),
    radius: 5,
    fillColor: 'white',
    strokeColor: 'black'
});


// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    // Changes the color nth times depending on how many is given in the count
    //	and sets the colors to the 'symbols'
    path['fillColor'] = randColor();
    var symbol = new SymbolDefinition(path);
    var center = Point.random() * view.size;
    var placed = symbol.place(center);
    var scale = (i + (i + 10)) / count; // Controls the sizes of the symbols
    placed.scale(scale);
    placed.data.vector = new Point({
        angle: Math.random() * 360,
        length : scale * Math.random() * 1 // Controls how fast the symbols moves
    });
}

var vector = new Point({
    angle: 45,
    length: 0
});

/* PART 1A: (look towards 1b for info):
var mouseVector = vector.clone();

function onMouseMove(event) {
    mouseVector = view.center - event.point;
}
*/

// The onFrame function is called up to 60 times a second:
function onFrame(event) {

// PART 1B: Controls the camera and follows the mouse
    // vector = vector + (mouseVector - vector) / -10000;

    // Run through the active layer's children list and change
    // the position of the placed symbols:
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        var size = item.bounds.size;
        var length = vector.length / 10 * size.width / 10;
        item.position += vector.normalize(length) + item.data.vector;
        keepInView(item);
    }
}

function keepInView(item) {
    var position = item.position;
    var itemBounds = item.bounds;
    var bounds = view.bounds;
    if (itemBounds.left > bounds.width) {
        position.x = -item.bounds.width;
    }

    if (position.x < -itemBounds.width) {
        position.x = bounds.width + itemBounds.width;
    }

    if (itemBounds.top > view.size.height) {
        position.y = -itemBounds.height;
    }

    if (position.y < -itemBounds.height) {
        position.y = bounds.height  + itemBounds.height / 2;
    }
}

function randColor() {
  var r = Math.floor(Math.random()*156) + 100;
  var g = Math.floor(Math.random()*156) + 100;
  var b = Math.floor(Math.random()*156) + 100;

  return 'rgb('+ r +', '+ g +', '+ b +')';
}
</script>
