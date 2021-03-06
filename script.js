function display() {
  // calling elements by id and assigning them in variable

  var text = document.getElementById('mytext').value;
  var x_cord = document.getElementById('xcor').value;
  var y_cord = document.getElementById('ycor').value;
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;

  console.log(x_cord, y_cord, text, height, width);
  let span = document.getElementById('span');
  span.innerHTML = text;
  span.style.position = 'absolute';

  if (10 < x_cord && x_cord < 440) {
    // nested if for checking x-coordinate range

    if (y_cord < 250) {
      // checking y-coordinate range

      span.style.top = y_cord + 'px';
      span.style.left = x_cord + 'px';
      // span.style.display = 'block'
    } else {
      alert('assign y-coordinate in range');
      span.style.display = 'none';
    }
  } else {
    alert('assign x-coordinate in range');
    span.style.display = 'none';
  }

  // assigning height & width

  span.style.height = height + 'px';
  span.style.fontSize = width + 'px';
}

// function for displaying styling as alert when click print

function output() {
  alert(
    'The x & y coordinates are : ' +
      span.style.left +
      ' & ' +
      span.style.top +
      '\n The width and height are : ' +
      span.style.fontSize +
      ' & ' +
      span.style.height
  );
}

// function to reload page on pressing reload button

function refreshPage() {
  window.location.reload();
}

// setting color dynamically

function change_color() {
  document.getElementById('span').style.color = document.getElementById(
    'color'
  ).value;
}

// Drag & drop element

const el = document.querySelector('.span');
el.addEventListener('mousedown', mousedown);

function mousedown(e) {
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;

    const rect = el.getBoundingClientRect();

    el.style.left = rect.left - newX + 'px';
    el.style.top = rect.top - newY + 'px';

    prevX = e.clientX;
    prevY = e.clientY;
  }

  function mouseup() {
    window.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  }
}
