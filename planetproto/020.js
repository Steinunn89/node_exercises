// -> Create a machine object
//    with a property motors = 4
var machine = {
	motors: 4
}
__

// -> Create a robot object
//    with a property friendly = true
var robot = {
	friendly: true
}
__

// -> Create a robby object
var robby = {}
__

// -> Make machine the prototype of robot
robot.__proto__ = machine
__

// -> Make robot the prototype of robby
robby.__proto__ = robot
__

// -> What is `robby.motors`?
claim(robby.motors, 4)

// -> What is `robby.friendly`?
claim(robby.friendly, true)


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
