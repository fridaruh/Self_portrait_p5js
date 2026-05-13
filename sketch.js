/** 
    'A Self Portrait' (2026) by Frida Ruh.
    
    Inspired in 'A Self Portrait' (2025) by Irene Fubara-Manuel.
    This program draws my self-portrait using code.
    
    Self-portraiture is a process through which I learn methods.
    Whether it is drawing myself in animation, as a 3D character, or 
    with code, self-portraiture is how I announce myself in a new
    medium. It is the "hello world" of my situated black feminist
    creative practice.
    
    For the 2025 version, I have drawn the portrait using the 
    rectMode(CENTER) function. Then commented it out to
    create a more cubist/expressionist portrait.
**/

// Filling up the brush
let hair = [72, 53, 25];       // #483519
let skin = "#F5D9C8";         // skin tone
let skin2 = "#E8C4A8";        // depth

function setup() {
  createCanvas(440, 520);
  background("#FFFFFF"); // white background
  rectMode(CENTER);
}

function draw() {
  // Background 
  noStroke();
  fill("#D44030");
  rect(220, 280, 300, 600, 40);

  // Hair
  fill(hair);
  ellipse(210, 150, 80, 70);
  ellipse(170, 160, 80, 70);
  ellipse(260, 160, 80, 70);
  

  // Shirt
  fill(20, 20, 20); // almost black
  ellipse(220, 560, 350, 340);

  // Neck
  fill(skin2);
  rect(220, 390, 80, 120, 30);

  // Ears
  fill(skin2);
  ellipse(148, 290, 30, 45);
  ellipse(292, 290, 30, 45);

  // Head
  fill(skin);
  rect(220, 280, 150, 230, 70);

  // Hair
  fill(hair);
  ellipse(160, 175, 80, 70);
  ellipse(220, 165, 90, 60);
  ellipse(280, 175, 80, 70);
  ellipse(135, 200, 60, 80);
  ellipse(305, 200, 60, 80);

  // Nose 
  fill(skin2);
  ellipse(220, 295, 18, 22);
  ellipse(220, 307, 30, 12);

  // Glasses 
  stroke(10, 10, 10);
  strokeWeight(8);
  // Bridge of glasses
  line(193, 265, 247, 265);
  
  //  Yellow Lenses
  fill(220, 180, 50); 
  rect(168, 265, 72, 45, 12);
  rect(272, 265, 72, 45, 12);

  // Mouth
  noStroke();
  fill(20, 20, 20); 
  rect(220, 345, 28, 8, 5);

  // Eyebrows
  fill(hair);
  rect(170, 230, 70, 12, 5);
  rect(265, 230, 70, 12, 5);
}