// Created by: Kevin Romero
// Date: 6/13/2022
// Description: Physics 1 simulations implemented from scratch
//              using pure JavaScript, HTML5, SVG, and CSS.

var object1 = document.getElementById("object1");
let start = 0;
let elapsed = 0;
locationUpdate(object1);

// TODO:
//      - add y direction movement
//      - add gravity
//      - add alternative equations for finding time, acceleration, initial Coordinates and initial velocity.
//      - maybe add an unit's converter
//      - add spring energy
//      - add collision detection (for square objects, circular objects might be difficult)
//      - move values to classes.
//      - add mouse to object interaction.
//      - remove timer and move to an endless 60 fps animation.

// DONE:
//      - Motion in x direction
//      - functions for the 4 equations of kinematics.

// note: 60 fps animation can be implemented better. right now using Timeout it makes waits equal or greater
// x amount of seconds, but would like for it to wait x amount of seconds, anything less it will not keep going till that time,
// and anything more it will skip execution.For basic work like this one, it takes less time than desired duration, but with more
// work later on, it could take more than desired duration, also fps is dependent on duration but later on duration will
// be infinite.

// update an object's location
function locationUpdate(object) {
  const fps = 60;
  let duration = 20;
  let initialX = parseFloat(object.getAttributeNS(null, "x"));
  let initialV = 80;
  let finalX = 0;
  let finalV = 20;
  //   let counter = 0;
  let acceleration = -5;

  //simple animation produces
  //timer 1 wait 1 second to update i.
  for (let i = 0; i < duration; i++) {
    setTimeout(() => {
      // Render 60 frames per second, wait 1000/60th of a second per iteration.
      for (let f = 0; f < fps; f++) {
        //timer 2 wait 17 miliseconds to update image
        setTimeout(() => {
          if (finalV > 0) {
            finalV = ONEDirVelocity(initialV, i + f / fps, acceleration, null);
            finalX =
              initialX + ONEDirDistance(initialV, i + f / fps, null, finalV);
          }
          object.setAttributeNS(null, "x", finalX);
          console.log("Final Velocity: " + finalV);
          console.log(
            "location: " + parseFloat(object.getAttributeNS(null, "x"))
          );
          //   counter++;
          //   console.log("frame: " + counter);
        }, f * (1000 / fps));
      }
    }, i * 1000);
  }
}

// Kinematic Equations for displacement
function ONEDirDistance(velIni, time, accel, velFinal) {
  if (accel == null) {
    return ((velIni + velFinal) / 2) * time; // without acceleration
  } else {
    return velIni * time + (1 / 2) * accel * Math.pow(time, 2); // with acceleration
  }
}

// Kinematic Equations for Final Velocity
function ONEDirVelocity(velIni, time, accel, distance) {
  if (time == null) {
    return Math.sqrt(Math.pow(velIni, 2) + 2 * accel * distance); // without time
  } else {
    return velIni + accel * time; //with time
  }
}
