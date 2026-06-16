// Canvas scene illustrations for Stage 5
// Each lesson has its own set of scenes

function drawCanvasScene(canvas, unitId, lessonId, index) {
  const ctx = canvas.getContext('2d');
  const W = 320, H = 200;
  canvas.width = W; canvas.height = H;

  // Background
  const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
  skyGrad.addColorStop(0, '#E3F2FD'); skyGrad.addColorStop(1, '#ffffff');
  ctx.fillStyle = skyGrad;
  ctx.beginPath(); roundRect(ctx, 0, 0, W, H, 16); ctx.fill();
  ctx.fillStyle = '#E8F5E9'; ctx.fillRect(0, 162, W, 38);
  ctx.fillStyle = '#C8E6C9'; ctx.fillRect(0, 162, W, 2);

  // Snowflakes
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  for (let i = 0; i < 6; i++) {
    ctx.font = `${5 + Math.random() * 7}px sans-serif`;
    ctx.fillText('❄', 20 + i * 47, 175 + (i % 3) * 10);
  }

  if (unitId === '2' && lessonId === '1') drawU2L1(ctx, index);
  else if (unitId === '2' && lessonId === '2') drawU2L2(ctx, index);
  else if (unitId === '2' && lessonId === '3') drawU2L3(ctx, index);
  else drawDefault(ctx);
}

// ============================================================
// UNIT 2 LESSON 1 — Stationery (9 scenes)
// ============================================================
function drawU2L1(ctx, idx) {
  switch (idx) {
    case 0: drawElsa(ctx, 85, 95); drawBag(ctx, 195, 130, 1); drawBook(ctx, 150, 55, 1); break;
    case 1: drawElsa(ctx, 85, 95); drawPaper(ctx, 195, 108, 1); drawPencilToPaper(ctx, 155, 75); break;
    case 2: drawElsa(ctx, 85, 95); drawPaperWithScribble(ctx, 195, 108); drawEraserOver(ctx, 165, 85); drawSparkles(ctx, 245, 95); break;
    case 3: drawElsa(ctx, 85, 95); drawPictureOnWall(ctx, 195, 78); drawGlueHand(ctx, 160, 95); break;
    case 4: drawElsa(ctx, 85, 95); drawPaperHalf(ctx, 210, 108); drawScissors(ctx, 155, 85); break;
    case 5: drawElsa(ctx, 85, 95); drawPaperBlank(ctx, 195, 108); drawRuler(ctx, 205, 118); drawPencilLine(ctx, 197, 102, 67); break;
    case 6: drawElsa(ctx, 85, 95); drawPaperName(ctx, 195, 110); drawPenHand(ctx, 158, 82); break;
    case 7: drawElsa(ctx, 85, 95); drawBed(ctx, 175, 100); drawBug(ctx, 210, 130); break;
    case 8: drawElsa(ctx, 85, 95); drawDog(ctx, 200, 118); drawNut(ctx, 110, 118); break;
    default: drawDefault(ctx);
  }
}

// ============================================================
// UNIT 2 LESSON 2 — Actions (7 scenes)
// ============================================================
function drawU2L2(ctx, idx) {
  switch (idx) {
    case 0: drawElsa(ctx, 85, 95); drawPaperBlank(ctx, 195, 108); drawPencilToPaper(ctx, 155, 75); break;
    case 1: drawElsa(ctx, 85, 95); drawFoldingPaper(ctx, 200, 100); break;
    case 2: drawElsa(ctx, 85, 95); drawPaperHalf(ctx, 210, 108); drawScissors(ctx, 155, 85); drawColorCircle(ctx, 235, 108); break;
    case 3: drawElsa(ctx, 85, 95); drawOpenCard(ctx, 200, 95); break;
    case 4: drawElsa(ctx, 85, 95); drawPointing(ctx, 200, 108); break;
    case 5: drawElsa(ctx, 85, 95); drawTidyBox(ctx, 200, 110); break;
    case 6: drawElsa(ctx, 85, 95); drawHugGum(ctx, 200, 100); break;
    default: drawDefault(ctx);
  }
}

// ============================================================
// UNIT 2 LESSON 3 — Classroom (7 scenes)
// ============================================================
function drawU2L3(ctx, idx) {
  switch (idx) {
    case 0: drawElsa(ctx, 85, 95); drawClassroom(ctx, 185, 90); drawChair(ctx, 170, 130); break;
    case 1: drawElsa(ctx, 85, 95); drawDesk(ctx, 185, 120); drawBoard(ctx, 220, 85); break;
    case 2: drawElsa(ctx, 85, 95); drawDoor(ctx, 200, 85); drawTeacherFig(ctx, 140, 100); break;
    case 3: drawElsa(ctx, 85, 95); drawStudentFig(ctx, 155, 100); drawTrashCan(ctx, 200, 120); break;
    case 4: drawElsa(ctx, 85, 95); drawMug(ctx, 200, 118); drawNumber10(ctx, 235, 120); break;
    case 5: drawElsa(ctx, 85, 95); drawBed(ctx, 185, 105); break;
    case 6: drawElsa(ctx, 85, 95); drawBanSign(ctx, 200, 95); break;
    default: drawDefault(ctx);
  }
}

function drawDefault(ctx) { ctx.font = '40px sans-serif'; ctx.fillText('📖', 140, 120); }

// ============= ELSA =============
function drawElsa(ctx, cx, cy) {
  ctx.save(); ctx.translate(cx, cy);
  // Cape
  ctx.fillStyle = 'rgba(126,87,194,0.22)';
  ctx.beginPath(); ctx.moveTo(-25,22); ctx.quadraticCurveTo(-55,40,-58,85); ctx.lineTo(-58,110); ctx.lineTo(-35,100); ctx.lineTo(-18,110); ctx.lineTo(0,95); ctx.fill();
  ctx.beginPath(); ctx.moveTo(25,22); ctx.quadraticCurveTo(55,40,58,85); ctx.lineTo(58,110); ctx.lineTo(35,100); ctx.lineTo(18,110); ctx.lineTo(0,95); ctx.fill();
  // Legs + socks + shoes
  ctx.strokeStyle='#FFE0BD'; ctx.lineWidth=12; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-8,85); ctx.lineTo(-10,128); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(10,85); ctx.lineTo(12,128); ctx.stroke();
  ctx.strokeStyle='white'; ctx.lineWidth=13;
  ctx.beginPath(); ctx.moveTo(-10,120); ctx.lineTo(-10,128); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(12,120); ctx.lineTo(12,128); ctx.stroke();
  ctx.fillStyle='#1565C0';
  ctx.beginPath(); ctx.ellipse(-12,133,12,6,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(14,133,12,6,0,0,Math.PI*2); ctx.fill();
  // Dress
  const dg=ctx.createLinearGradient(0,24,0,86); dg.addColorStop(0,'#64B5F6'); dg.addColorStop(1,'#1E88E5');
  ctx.fillStyle=dg;
  ctx.beginPath(); ctx.moveTo(-22,24); ctx.quadraticCurveTo(-28,44,-26,74); ctx.lineTo(-18,86); ctx.lineTo(0,82); ctx.lineTo(18,86); ctx.lineTo(26,74); ctx.quadraticCurveTo(28,44,22,24); ctx.fill();
  ctx.fillStyle='#0D47A1'; ctx.fillRect(-22,22,44,6);
  ctx.fillStyle='#FFD700'; ctx.beginPath(); ctx.arc(0,25,4,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='18px sans-serif'; ctx.fillText('❄',-9,64);
  // Arms
  ctx.strokeStyle='#FFE0BD'; ctx.lineWidth=10; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-22,30); ctx.lineTo(-42,62); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(22,30); ctx.lineTo(52,18); ctx.stroke();
  // Head
  ctx.fillStyle='#FFE0BD'; ctx.strokeStyle='#E8C9A0'; ctx.lineWidth=1.5;
  ctx.beginPath(); ctx.arc(0,0,30,0,Math.PI*2); ctx.fill(); ctx.stroke();
  // Hair
  const hg=ctx.createLinearGradient(0,-30,0,24); hg.addColorStop(0,'#FFF9C4'); hg.addColorStop(1,'#FFD54F');
  ctx.fillStyle=hg;
  ctx.beginPath(); ctx.arc(0,-2,30,Math.PI,0); ctx.quadraticCurveTo(20,-20,0,-34); ctx.quadraticCurveTo(-20,-20,-30,-2); ctx.fill();
  ctx.strokeStyle='#FFD54F'; ctx.lineWidth=9; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-28,0); ctx.quadraticCurveTo(-42,28,-38,52); ctx.stroke();
  ctx.strokeStyle='#F9A825'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.moveTo(-28,0); ctx.quadraticCurveTo(-42,28,-38,52); ctx.stroke();
  ctx.fillStyle='#7E57C2'; ctx.beginPath(); ctx.arc(-39,54,4,0,Math.PI*2); ctx.fill();
  // Eyes
  ctx.fillStyle='white'; ctx.beginPath(); ctx.ellipse(-9,2,6,7,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(11,2,6,7,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#37474F'; ctx.beginPath(); ctx.arc(-7,1,3.5,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(13,1,3.5,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(-6,0,1.2,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(14,0,1.2,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#8D6E63'; ctx.lineWidth=1.5; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-17,-8); ctx.quadraticCurveTo(-9,-12,-3,-9); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(5,-9); ctx.quadraticCurveTo(11,-12,19,-8); ctx.stroke();
  ctx.strokeStyle='#E8C9A0'; ctx.lineWidth=1.2;
  ctx.beginPath(); ctx.moveTo(1,6); ctx.quadraticCurveTo(0,10,-1,10); ctx.stroke();
  ctx.strokeStyle='#E57373'; ctx.lineWidth=2; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(-5,12); ctx.quadraticCurveTo(0,18,7,12); ctx.stroke();
  const bl=ctx.createRadialGradient(-16,10,0,-16,10,8); bl.addColorStop(0,'rgba(255,205,210,0.6)'); bl.addColorStop(1,'rgba(255,205,210,0)');
  ctx.fillStyle=bl; ctx.beginPath(); ctx.arc(-16,10,8,0,Math.PI*2); ctx.fill();
  const br=ctx.createRadialGradient(18,10,0,18,10,8); br.addColorStop(0,'rgba(255,205,210,0.6)'); br.addColorStop(1,'rgba(255,205,210,0)');
  ctx.fillStyle=br; ctx.beginPath(); ctx.arc(18,10,8,0,Math.PI*2); ctx.fill();
  ctx.restore();
}

// ============= PROPS =============
function roundRect(ctx,x,y,w,h,r){ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.arcTo(x+w,y,x+w,y+r,r);ctx.lineTo(x+w,y+h-r);ctx.arcTo(x+w,y+h,x+w-r,y+h,r);ctx.lineTo(x+r,y+h);ctx.arcTo(x,y+h,x,y+h-r,r);ctx.lineTo(x,y+r);ctx.arcTo(x,y,x+r,y,r);ctx.closePath();}

function drawBag(ctx,x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
const bg=ctx.createLinearGradient(0,10,64,62);bg.addColorStop(0,'#EF5350');bg.addColorStop(1,'#C62828');
ctx.fillStyle=bg;ctx.beginPath();roundRect(ctx,0,10,64,52,12);ctx.fill();
ctx.strokeStyle='#B71C1C';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,10,64,52,12);ctx.stroke();
ctx.strokeStyle='#EF5350';ctx.lineWidth=5;ctx.lineCap='round';
ctx.beginPath();ctx.moveTo(18,10);ctx.quadraticCurveTo(18,-5,32,-5);ctx.quadraticCurveTo(46,-5,46,10);ctx.stroke();
ctx.fillStyle='#E53935';ctx.strokeStyle='#B71C1C';ctx.lineWidth=1;ctx.beginPath();roundRect(ctx,8,24,48,22,6);ctx.fill();ctx.stroke();
ctx.strokeStyle='#FFCDD2';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(12,30);ctx.lineTo(52,30);ctx.stroke();
ctx.restore();}

function drawBook(ctx,x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
ctx.fillStyle='#29B6F6';ctx.strokeStyle='#0277BD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,32,40,3);ctx.fill();ctx.stroke();
ctx.fillStyle='rgba(255,255,255,0.5)';ctx.fillRect(5,8,22,3);ctx.fillRect(5,15,18,3);ctx.fillRect(5,22,20,3);ctx.restore();}

function drawPaper(ctx,x,y,s){ctx.save();ctx.translate(x,y);ctx.scale(s,s);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,70,50,4);ctx.fill();ctx.stroke();
ctx.strokeStyle='#90A4AE';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(10,15);ctx.lineTo(60,15);ctx.stroke();
ctx.beginPath();ctx.moveTo(10,25);ctx.lineTo(55,25);ctx.stroke();
ctx.beginPath();ctx.moveTo(10,35);ctx.lineTo(58,35);ctx.stroke();ctx.restore();}

function drawPencilToPaper(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.rotate(0.25);
// Yellow body
ctx.fillStyle='#FFC107';ctx.strokeStyle='#F9A825';ctx.lineWidth=1;
ctx.beginPath();roundRect(ctx,0,1,35,7,2);ctx.fill();ctx.stroke();
// Orange wood cone
ctx.fillStyle='#FF9800';
ctx.beginPath();ctx.moveTo(35,1);ctx.lineTo(45,4.5);ctx.lineTo(35,8);ctx.closePath();ctx.fill();
ctx.strokeStyle='#E65100';ctx.lineWidth=0.8;
ctx.beginPath();ctx.moveTo(35,1);ctx.lineTo(45,4.5);ctx.lineTo(35,8);ctx.stroke();
// Graphite tip
ctx.fillStyle='#333';ctx.beginPath();ctx.arc(45,4.5,1.5,0,Math.PI*2);ctx.fill();
// Pink eraser
ctx.fillStyle='#F48FB1';ctx.strokeStyle='#E91E63';ctx.lineWidth=0.8;
ctx.beginPath();roundRect(ctx,-7,1,9,7,2);ctx.fill();ctx.stroke();
// Metal band
ctx.fillStyle='#BDBDBD';ctx.fillRect(-2,1,3,7);
ctx.restore();}

function drawPaperWithScribble(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,70,50,4);ctx.fill();ctx.stroke();
ctx.strokeStyle='#90A4AE';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(10,18);ctx.lineTo(60,18);ctx.stroke();
ctx.strokeStyle='#F44336';ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(10,30);ctx.quadraticCurveTo(25,22,40,30);ctx.quadraticCurveTo(55,38,60,30);ctx.stroke();ctx.restore();}

function drawEraserOver(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FF8A80';ctx.beginPath();roundRect(ctx,0,0,28,14,4);ctx.fill();
ctx.fillStyle='#1E88E5';ctx.beginPath();roundRect(ctx,22,-1,6,16,2);ctx.fill();ctx.restore();}

function drawSparkles(ctx,x,y){ctx.save();ctx.translate(x,y);ctx.font='14px sans-serif';ctx.fillText('✨',0,0);ctx.font='10px sans-serif';ctx.fillText('✨',15,-10);ctx.restore();}

function drawPictureOnWall(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF9C4';ctx.strokeStyle='#F9A825';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,60,48,3);ctx.fill();ctx.stroke();
ctx.fillStyle='#FFCC02';ctx.beginPath();ctx.arc(25,18,8,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='#81C784';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(10,32);ctx.lineTo(50,32);ctx.stroke();
ctx.beginPath();ctx.moveTo(18,32);ctx.lineTo(16,27);ctx.stroke();
ctx.beginPath();ctx.moveTo(30,32);ctx.lineTo(30,24);ctx.stroke();
ctx.restore();}

function drawGlueHand(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1;ctx.beginPath();roundRect(ctx,0,6,10,18,3);ctx.fill();ctx.stroke();
ctx.fillStyle='#FF9800';ctx.strokeStyle='#E65100';ctx.lineWidth=0.5;ctx.beginPath();roundRect(ctx,1,0,8,7,2);ctx.fill();ctx.stroke();ctx.restore();}

function drawPaperHalf(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,55,40,3);ctx.fill();ctx.stroke();
ctx.strokeStyle='#F44336';ctx.lineWidth=2;ctx.setLineDash([5,4]);ctx.beginPath();ctx.moveTo(5,20);ctx.quadraticCurveTo(12,18,20,20);ctx.stroke();ctx.setLineDash([]);ctx.restore();}

function drawScissors(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.strokeStyle='#78909C';ctx.lineWidth=2;
ctx.beginPath();ctx.arc(0,0,6,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(0,14,6,0,Math.PI*2);ctx.stroke();
ctx.beginPath();ctx.moveTo(0,6);ctx.lineTo(0,8);ctx.stroke();
ctx.beginPath();ctx.moveTo(-6,0);ctx.lineTo(-14,-8);ctx.stroke();
ctx.beginPath();ctx.moveTo(-6,14);ctx.lineTo(-14,22);ctx.stroke();ctx.restore();}

function drawPaperBlank(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,70,50,4);ctx.fill();ctx.stroke();ctx.restore();}

function drawRuler(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF176';ctx.strokeStyle='#F9A825';ctx.lineWidth=1;ctx.beginPath();roundRect(ctx,0,0,55,12,2);ctx.fill();ctx.stroke();
for(let i=13;i<55;i+=10){ctx.strokeStyle='#F9A825';ctx.lineWidth=0.7;ctx.beginPath();ctx.moveTo(i,2);ctx.lineTo(i,10);ctx.stroke();}ctx.restore();}

function drawPencilLine(ctx,x,y,w){ctx.save();ctx.translate(x,y);
ctx.strokeStyle='#1E88E5';ctx.lineWidth=2.5;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,0);ctx.stroke();ctx.restore();}

function drawPaperName(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,65,45,3);ctx.fill();ctx.stroke();
ctx.fillStyle='#1E88E5';ctx.font='bold 12px Arial';ctx.fillText('E l s a',8,28);ctx.restore();}

function drawPenHand(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.rotate(0.2);
// Pen body (blue)
ctx.fillStyle='#1565C0';ctx.strokeStyle='#0D47A1';ctx.lineWidth=1;
ctx.beginPath();roundRect(ctx,0,2,38,6,2);ctx.fill();ctx.stroke();
// Silver clip
ctx.fillStyle='#BDBDBD';ctx.strokeStyle='#9E9E9E';ctx.lineWidth=0.5;
ctx.beginPath();roundRect(ctx,4,-2,3,5,1);ctx.fill();ctx.stroke();
// Pen cone / tip
ctx.fillStyle='#37474F';
ctx.beginPath();ctx.moveTo(38,2);ctx.lineTo(46,5);ctx.lineTo(38,8);ctx.closePath();ctx.fill();
// Ballpoint
ctx.fillStyle='#FFC107';ctx.beginPath();ctx.arc(46,5,2,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#333';ctx.beginPath();ctx.arc(46,5,1,0,Math.PI*2);ctx.fill();
// Pen cap (on back)
ctx.fillStyle='#1E88E5';ctx.strokeStyle='#0D47A1';ctx.lineWidth=0.8;
ctx.beginPath();roundRect(ctx,-6,2,8,6,2);ctx.fill();ctx.stroke();
ctx.restore();}

function drawBed(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#8D6E63';ctx.strokeStyle='#6D4C41';ctx.lineWidth=2;ctx.beginPath();roundRect(ctx,0,5,80,42,8);ctx.fill();ctx.stroke();
ctx.fillStyle='#A1887F';ctx.beginPath();roundRect(ctx,0,2,80,8,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#CE93D8';ctx.strokeStyle='#AB47BC';ctx.lineWidth=1;ctx.beginPath();roundRect(ctx,0,22,80,25,4);ctx.fill();ctx.stroke();
ctx.fillStyle='white';ctx.beginPath();roundRect(ctx,55,8,20,12,6);ctx.fill();ctx.strokeStyle='#E0E0E0';ctx.lineWidth=1;ctx.stroke();
ctx.fillStyle='rgba(255,255,255,0.3)';ctx.fillRect(8,10,64,3);ctx.restore();}

function drawBug(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#F44336';ctx.strokeStyle='#C62828';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(0,0,10,7,0,0,Math.PI*2);ctx.fill();ctx.stroke();
ctx.fillStyle='#D32F2F';ctx.beginPath();ctx.arc(-10,-2,5,0,Math.PI*2);ctx.fill();
ctx.fillStyle='white';ctx.beginPath();ctx.arc(-12,-4,2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(-9,-4,2,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#333';ctx.beginPath();ctx.arc(-12,-4,1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(-9,-4,1,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='#333';ctx.lineWidth=1.2;ctx.lineCap='round';
ctx.beginPath();ctx.moveTo(-12,-6);ctx.lineTo(-16,-16);ctx.stroke();ctx.beginPath();ctx.moveTo(-8,-6);ctx.lineTo(-6,-18);ctx.stroke();
for(let i=-5;i<=5;i+=5){ctx.beginPath();ctx.moveTo(i,5);ctx.lineTo(i-7,12);ctx.stroke();}
ctx.beginPath();ctx.moveTo(-3,-5);ctx.lineTo(-10,-10);ctx.stroke();ctx.beginPath();ctx.moveTo(3,-5);ctx.lineTo(8,-10);ctx.stroke();
ctx.fillStyle='#EF9A9A';ctx.beginPath();ctx.arc(-3,-1,2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(3,2,1.5,0,Math.PI*2);ctx.fill();ctx.restore();}

function drawDog(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#F5DEB3';ctx.strokeStyle='#D4B896';ctx.lineWidth=1.2;
ctx.beginPath();ctx.ellipse(25,30,20,14,0,0,Math.PI*2);ctx.fill();ctx.stroke();
ctx.beginPath();ctx.arc(15,16,12,0,Math.PI*2);ctx.fill();ctx.stroke();
ctx.fillStyle='#D4B896';ctx.beginPath();ctx.ellipse(8,8,5,10,-0.3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(22,8,5,10,0.3,0,Math.PI*2);ctx.fill();
ctx.fillStyle='white';ctx.beginPath();ctx.arc(11,14,2.5,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(19,14,2.5,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#333';ctx.beginPath();ctx.arc(12,14,1.5,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(20,14,1.5,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#333';ctx.beginPath();ctx.ellipse(15,19,3,2,0,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#F48FB1';ctx.beginPath();ctx.ellipse(15,23,2.5,3,0,0,Math.PI*2);ctx.fill();
ctx.strokeStyle='#D4B896';ctx.lineWidth=3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(44,22);ctx.quadraticCurveTo(54,10,52,2);ctx.stroke();
ctx.beginPath();ctx.moveTo(14,42);ctx.lineTo(12,52);ctx.stroke();ctx.beginPath();ctx.moveTo(34,42);ctx.lineTo(36,52);ctx.stroke();
ctx.fillStyle='#F44336';ctx.beginPath();roundRect(ctx,6,22,18,4,1);ctx.fill();ctx.restore();}

function drawNut(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#D7CCC8';ctx.strokeStyle='#8D6E63';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(0,0,9,6,0,0,Math.PI*2);ctx.fill();ctx.stroke();
ctx.strokeStyle='#8D6E63';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-5,-3);ctx.quadraticCurveTo(0,-6,5,-3);ctx.stroke();
ctx.beginPath();ctx.moveTo(-4,0);ctx.quadraticCurveTo(0,-2,4,0);ctx.stroke();
ctx.beginPath();ctx.moveTo(-5,3);ctx.quadraticCurveTo(0,6,5,3);ctx.stroke();
ctx.fillStyle='#A1887F';ctx.beginPath();ctx.arc(-2,-2,0.8,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(2,-1,0.8,0,Math.PI*2);ctx.fill();
ctx.beginPath();ctx.arc(0,2,0.8,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(3,2.5,0.8,0,Math.PI*2);ctx.fill();
ctx.fillStyle='rgba(255,255,255,0.3)';ctx.beginPath();ctx.ellipse(-3,-2,3,1.5,0,0,Math.PI*2);ctx.fill();ctx.restore();}

// ===== L2 helpers =====
function drawFoldingPaper(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF9C4';ctx.strokeStyle='#F9A825';ctx.lineWidth=1.5;
ctx.beginPath();ctx.moveTo(5,28);ctx.lineTo(25,8);ctx.lineTo(45,28);ctx.closePath();ctx.fill();ctx.stroke();
ctx.strokeStyle='#E0E0E0';ctx.lineWidth=1;ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(25,8);ctx.lineTo(25,28);ctx.stroke();ctx.setLineDash([]);ctx.restore();}

function drawColorCircle(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='rgba(66,165,245,0.5)';ctx.beginPath();ctx.arc(10,10,8,0,Math.PI*2);ctx.fill();ctx.restore();}

function drawOpenCard(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF9C4';ctx.strokeStyle='#F9A825';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,55,60,3);ctx.fill();ctx.stroke();
ctx.strokeStyle='#E0E0E0';ctx.lineWidth=1;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(27,0);ctx.lineTo(27,60);ctx.stroke();ctx.setLineDash([]);
ctx.fillStyle='#FFF176';ctx.globalAlpha=0.3;ctx.fillRect(0,0,27,60);ctx.globalAlpha=1;
ctx.fillStyle='#F9A825';ctx.font='bold 7px sans-serif';ctx.fillText('OPEN',3,35);ctx.restore();}

function drawPointing(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF9C4';ctx.strokeStyle='#F9A825';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,55,45,3);ctx.fill();ctx.stroke();
ctx.fillStyle='#FFCC02';ctx.beginPath();ctx.arc(25,18,8,0,Math.PI*2);ctx.fill();ctx.restore();}

function drawTidyBox(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FF7043';ctx.strokeStyle='#E64A19';ctx.lineWidth=1.5;
ctx.beginPath();roundRect(ctx,0,0,45,35,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#FFAB91';ctx.fillRect(5,5,35,3);ctx.fillRect(10,14,25,3);ctx.fillRect(10,24,20,3);
ctx.font='16px sans-serif';ctx.fillText('📦',50,22);ctx.restore();}

function drawHugGum(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='rgba(244,143,177,0.3)';ctx.beginPath();ctx.arc(25,20,18,0,Math.PI*2);ctx.fill();
ctx.font='20px sans-serif';ctx.fillText('🤗',18,26);
ctx.fillStyle='#F48FB1';ctx.strokeStyle='#E91E63';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,5,40,14,8,2);ctx.fill();ctx.stroke();
ctx.font='14px sans-serif';ctx.fillText('🫧',50,28);ctx.restore();}

// ===== L3 helpers =====
function drawClassroom(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFF9C4';ctx.strokeStyle='#F9A825';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,90,60,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#BBDEFB';ctx.beginPath();roundRect(ctx,10,10,25,20,2);ctx.fill();ctx.fillText('ABC',14,24);
ctx.beginPath();roundRect(ctx,50,10,25,20,2);ctx.fill();ctx.fillText('123',54,24);ctx.restore();}

function drawChair(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#8D6E63';ctx.strokeStyle='#6D4C41';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,0,30,32,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#A1887F';ctx.fillRect(3,3,24,2);ctx.nextLineWidth=4;ctx.lineCap='round';
ctx.strokeStyle='#6D4C41';ctx.beginPath();ctx.moveTo(6,32);ctx.lineTo(6,44);ctx.stroke();
ctx.beginPath();ctx.moveTo(24,32);ctx.lineTo(24,44);ctx.stroke();ctx.restore();}

function drawDesk(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#8D6E63';ctx.strokeStyle='#6D4C41';ctx.lineWidth=2;ctx.beginPath();roundRect(ctx,0,0,60,8,2);ctx.fill();ctx.stroke();
ctx.fillStyle='#6D4C41';ctx.fillRect(6,6,4,20);ctx.fillRect(50,6,4,20);ctx.restore();}

function drawBoard(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#546E7A';ctx.strokeStyle='#37474F';ctx.lineWidth=2;ctx.beginPath();roundRect(ctx,0,15,65,40,3);ctx.fill();ctx.stroke();
ctx.fillStyle='white';ctx.font='8px sans-serif';ctx.fillText('Hello!',8,35);ctx.fillText('2+2=4',8,48);ctx.restore();}

function drawDoor(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#8D6E63';ctx.strokeStyle='#6D4C41';ctx.lineWidth=2;ctx.beginPath();roundRect(ctx,0,0,45,80,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#A1887F';ctx.beginPath();roundRect(ctx,4,4,37,32,1);ctx.fill();ctx.strokeStyle='#6D4C41';ctx.lineWidth=1;ctx.stroke();
ctx.beginPath();roundRect(ctx,4,44,37,32,1);ctx.fill();ctx.stroke();
ctx.fillStyle='#FFD700';ctx.beginPath();ctx.arc(35,42,3,0,Math.PI*2);ctx.fill();ctx.restore();}

function drawTeacherFig(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFE0BD';ctx.beginPath();ctx.arc(0,0,18,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#66BB6A';ctx.beginPath();roundRect(ctx,-12,16,24,30,4);ctx.fill();
ctx.strokeStyle='#FFE0BD';ctx.lineWidth=6;ctx.lineCap='round';
ctx.beginPath();ctx.moveTo(-8,40);ctx.lineTo(-10,54);ctx.stroke();ctx.beginPath();ctx.moveTo(8,40);ctx.lineTo(10,54);ctx.stroke();ctx.restore();}

function drawStudentFig(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#FFE0BD';ctx.beginPath();ctx.arc(0,0,14,0,Math.PI*2);ctx.fill();
ctx.fillStyle='#FF7043';ctx.beginPath();roundRect(ctx,-10,12,20,26,3);ctx.fill();
ctx.strokeStyle='#FFE0BD';ctx.lineWidth=5;ctx.lineCap='round';
ctx.beginPath();ctx.moveTo(-6,34);ctx.lineTo(-8,46);ctx.stroke();ctx.beginPath();ctx.moveTo(6,34);ctx.lineTo(8,46);ctx.stroke();ctx.restore();}

function drawTrashCan(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='#BDBDBD';ctx.strokeStyle='#9E9E9E';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,5,28,40,4);ctx.fill();ctx.stroke();
ctx.fillStyle='#E0E0E0';ctx.fillRect(-2,2,32,5);
ctx.strokeStyle='white';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(8,18);ctx.lineTo(20,18);ctx.stroke();
ctx.beginPath();ctx.moveTo(8,28);ctx.lineTo(20,28);ctx.stroke();ctx.restore();}

function drawMug(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#BDBDBD';ctx.lineWidth=1.5;ctx.beginPath();roundRect(ctx,0,5,28,34,4);ctx.fill();ctx.stroke();
ctx.strokeStyle='#BDBDBD';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(28,12);ctx.quadraticCurveTo(38,12,38,22);ctx.quadraticCurveTo(38,32,28,32);ctx.stroke();
ctx.fillStyle='rgba(100,181,246,0.4)';ctx.beginPath();ctx.ellipse(14,16,9,3,0,0,Math.PI*2);ctx.fill();ctx.restore();}

function drawNumber10(ctx,x,y){ctx.save();ctx.translate(x,y);ctx.fillStyle='#1E88E5';ctx.font='bold 20px sans-serif';ctx.fillText('10',0,0);ctx.restore();}

function drawBanSign(ctx,x,y){ctx.save();ctx.translate(x,y);
ctx.fillStyle='white';ctx.strokeStyle='#F44336';ctx.lineWidth=3;ctx.beginPath();ctx.arc(25,25,24,0,Math.PI*2);ctx.fill();ctx.stroke();
ctx.strokeStyle='#F44336';ctx.lineWidth=3.5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(10,10);ctx.lineTo(40,40);ctx.stroke();ctx.restore();}
