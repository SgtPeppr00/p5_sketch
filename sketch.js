// --- Animation Parameters ---
const radius = 150;     // The radius of the circle path (R)
const speed = 0.05;     // Controls how fast the animation runs
let centerX, centerY;   // Variables for the center of the canvas

/**
 * 1. setup()
 * Set up the canvas and calculate the center point.
 */
function setup() {
  createCanvas(600, 400);
  
  // Calculate the center of the canvas
  centerX = width / 2;
  centerY = height / 2;
}

/**
 * 2. draw()
 * Runs continuously, recalculating the position based on trigonometry.
 */
function draw() {
  // Clear the background on every frame (to prevent trails)
  background(20, 20, 40); // Dark blue background

  // --- Math Calculation ---
  
  // 1. Calculate the angle (theta)
  // frameCount is an increasing counter (0, 1, 2, 3, ...)
  // We multiply it by 'speed' to slow down the rotation
  let angle = frameCount * speed;
  
  // 2. Calculate the animated X and Y positions
  // x = R * cos(angle)
  // y = R * sin(angle)
  // We add 'centerX' and 'centerY' to shift the origin (0,0) to the canvas center
  let x = centerX + radius * cos(angle);
  let y = centerY + radius * sin(angle);
  
  // --- Drawing ---
  
  // 1. Draw a point at the calculated X and Y position
  fill(255, 100, 0); // Orange fill color
  noStroke();
  circle(x, y, 40); // Draw a 40-pixel diameter circle
  
  // 2. Optional: Draw the path for context
  stroke(100, 100, 255); // Light blue stroke
  noFill();
  circle(centerX, centerY, radius * 2); // Diameter is 2*R
  
  // 3. Optional: Draw a line from the center to the point (the radius vector)
  stroke(255); // White stroke
  line(centerX, centerY, x, y);
}