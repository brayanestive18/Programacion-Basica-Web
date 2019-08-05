document.addEventListener("keyup", drawWithKey);
var keys =
{
  LEFT : 37,
  UP : 38,
  RIGHT : 39,
  DOWN : 40
};

function drawWithKey(key)
{
  switch (key.keyCode) {
    case keys.LEFT:
      console.log("LEFT!");
      break;

    case keys.UP:
      console.log("UP!");
      break;

    case keys.RIGHT:
      console.log("RIGHT!");
      break;

    case keys.DOWN:
      console.log("DOWN!");
      break;

    default:
      console.log("Key?");

  }
}
