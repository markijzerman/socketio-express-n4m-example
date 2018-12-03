console.log('started!');
window.addEventListener('devicemotion', motion, false);

uniqueID = Math.floor(Math.random() * 10000);

// function for getting accelerometer
function motion(e) {
  let acc = e.acceleration;
  if(!acc.hasOwnProperty('x')) {
    acc = e.accelerationIncludingGravity;
  }


  ax = acc.x;
  ay = acc.y;
  az = acc.z;

  

  var accel = document.getElementById('acc');
  accel.innerHTML = " ax: " + ax + " ay: " + ay + " az: " + az;
  ioSocket.emit('sensor', {type: 'sensor',
                           message: 'ID: ' + uniqueID + ' ax: ' + ax + ' ay: ' + ay + ' az: ' + az});
};