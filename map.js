
// NUMBER KEY:
// 0 = no walls
// 1 = normal wall
// 2 = black wall
// 3 = secret wall
// 4 = brick walls
// 8 = user start position
// 9 = console log position

const map = {
  "data": [
    0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 4, 4, 4, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    4, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    4, 0, 0, 0, 4, 4, 4, 1, 0, 8, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    4, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
    0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0
  ],
  "height":19,
  "width":19
}


document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 12;
  const el = document.querySelector('#walls');
  let playerPos

    for (var x = 0; x < map.height; x++)  {
      for (var y = 0; y < map.width; y++) {

        const i = (y * map.width ) + x;
        const position = `${((x - (map.width / 2)) * WALL_SIZE)} 1.5 ${(y - (map.height / 2)) * WALL_SIZE}`;

        if (map.data[i] === 1 || map.data[i] == 2 || map.data[i] === 3 || map.data[i] === 4) {
          wall = document.createElement('a-box');
          el.appendChild(wall);

          wall.setAttribute('width', WALL_SIZE);
          wall.setAttribute('height', WALL_HEIGHT);
          wall.setAttribute('depth', WALL_SIZE);
          wall.setAttribute('position', position);

          if (map.data[i] === 2) {
            wall.setAttribute('color', '#000');
            wall.setAttribute('static-body', '');
          }


          else if (map.data[i] === 3) {
            wall.setAttribute('color', '#fff');
            wall.setAttribute('material', 'src: #wall-secret; repeat: 4 4');
          }


          else if (map.data[i] === 4) {
            wall.setAttribute('color', '#fff');
            wall.setAttribute('material', 'src: #wall-brick; repeat: 2 2');
            wall.setAttribute('static-body', '');
          }

          else { 
            wall.setAttribute('color', '#fff');
            wall.setAttribute('material', 'src: #wall; repeat: 4 4');
            wall.setAttribute('static-body', '');
          }
        }

        if (map.data[i] === 8)  {
          playerPos = position;
        }

        if (map.data[i] === 9) {
          console.log(position);
        }
      }
    }
    document.querySelector('#player').setAttribute('position', playerPos);
});
