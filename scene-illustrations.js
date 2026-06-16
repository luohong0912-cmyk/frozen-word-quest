// Scene illustrations for Stage 5 — per unit, per lesson
// function sceneIllustration(unitId, lessonId, index)

function sceneIllustration(unitId, lessonId, index) {

  // Shared defs
  const defs = `
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#E3F2FD"/><stop offset="100%" stop-color="#fff"/></linearGradient>
    <linearGradient id="dress" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#64B5F6"/><stop offset="100%" stop-color="#1E88E5"/></linearGradient>
    <linearGradient id="hairG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFF9C4"/><stop offset="100%" stop-color="#FFD54F"/></linearGradient>
    <radialGradient id="cheek" cx="50%" cy="50%"><stop offset="0%" stop-color="#FFCDD2" stop-opacity="0.6"/><stop offset="100%" stop-color="#FFCDD2" stop-opacity="0"/></radialGradient>
  </defs>`;
  const bg = `<rect width="320" height="200" rx="16" fill="url(#sky)"/><rect x="0" y="162" width="320" height="38" fill="#E8F5E9"/><rect x="0" y="162" width="320" height="2" fill="#C8E6C9"/>`;
  const elsaHead = `
    <circle cx="0" cy="0" r="30" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="1.5"/>
    <path d="M-30,-2 Q-30,-32 0,-34 Q30,-32 30,-2 Q28,-10 20,-14 Q0,-20 -20,-14 Q-28,-10 -30,-2Z" fill="url(#hairG)"/>
    <path d="M-28,0 Q-38,12 -40,28 Q-42,40 -38,52" fill="none" stroke="#FFD54F" stroke-width="9" stroke-linecap="round"/>
    <path d="M-28,0 Q-38,12 -40,28 Q-42,40 -38,52" fill="none" stroke="#F9A825" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    <circle cx="-39" cy="54" r="4" fill="#7E57C2"/>
    <ellipse cx="-9" cy="2" rx="6" ry="7" fill="white"/><circle cx="-7" cy="1" r="3.5" fill="#37474F"/><circle cx="-6" cy="0" r="1.2" fill="white"/>
    <ellipse cx="11" cy="2" rx="6" ry="7" fill="white"/><circle cx="13" cy="1" r="3.5" fill="#37474F"/><circle cx="14" cy="0" r="1.2" fill="white"/>
    <path d="M-17,-8 Q-9,-12 -3,-9" fill="none" stroke="#8D6E63" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5,-9 Q11,-12 19,-8" fill="none" stroke="#8D6E63" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M1,6 Q0,9 -1,9" fill="none" stroke="#E8C9A0" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M-5,12 Q0,18 7,12" fill="none" stroke="#E57373" stroke-width="2" stroke-linecap="round"/>
    <circle cx="-16" cy="10" r="8" fill="url(#cheek)"/><circle cx="18" cy="10" r="8" fill="url(#cheek)"/>`;
  const elsaBody = `
    <g transform="translate(0,24)">
      <path d="M-22,0 Q-28,20 -26,50 L-18,62 L0,58 L18,62 L26,50 Q28,20 22,0Z" fill="url(#dress)"/>
      <rect x="-22" y="-2" width="44" height="6" rx="2" fill="#0D47A1"/><circle cx="0" cy="1" r="4" fill="#FFD700"/>
      <text x="0" y="35" text-anchor="middle" font-size="16" fill="white" opacity="0.3">❄</text>
    </g>
    <line x1="-8" y1="85" x2="-10" y2="128" stroke="#FFE0BD" stroke-width="12" stroke-linecap="round"/>
    <line x1="10" y1="85" x2="12" y2="128" stroke="#FFE0BD" stroke-width="12" stroke-linecap="round"/>
    <line x1="-10" y1="120" x2="-10" y2="128" stroke="white" stroke-width="13" stroke-linecap="round"/>
    <line x1="12" y1="120" x2="12" y2="128" stroke="white" stroke-width="13" stroke-linecap="round"/>
    <ellipse cx="-12" cy="132" rx="12" ry="6" fill="#1565C0"/>
    <ellipse cx="14" cy="132" rx="12" ry="6" fill="#1565C0"/>
    <ellipse cx="-14" cy="130" rx="8" ry="3" fill="#42A5F5" opacity="0.5"/>
    <ellipse cx="12" cy="130" rx="8" ry="3" fill="#42A5F5" opacity="0.5"/>`;
  const cape = `
    <path d="M-25,22 Q-55,40 -58,85 L-58,110 L-35,100 L-18,110 L0,95Z" fill="#7E57C2" opacity="0.25"/>
    <path d="M25,22 Q55,40 58,85 L58,110 L35,100 L18,110 L0,95Z" fill="#7E57C2" opacity="0.2"/>`;

  // =====================================================================
  // UNIT 2 LESSON 1 — Stationery
  // =====================================================================
  if (unitId === '2' && lessonId === '1') {
    const l1 = [
      // 0
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,108)"><rect x="0" y="10" width="64" height="52" rx="12" fill="#EF5350" stroke="#C62828" stroke-width="2"/><path d="M18,10 Q18,-5 32,-5 Q46,-5 46,10" fill="none" stroke="#EF5350" stroke-width="5" stroke-linecap="round"/><rect x="8" y="24" width="48" height="22" rx="6" fill="#E53935" stroke="#B71C1C" stroke-width="1"/><line x1="12" y1="30" x2="52" y2="30" stroke="#FFCDD2" stroke-width="1.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-42" y2="62" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-42" cy="62" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="52" y2="18" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="54" cy="16" r="6" fill="#FFE0BD"/><g transform="translate(54,-8)"><rect x="0" y="5" width="32" height="40" rx="3" fill="#29B6F6" stroke="#0277BD" stroke-width="1.5"/><rect x="5" y="13" width="22" height="3" rx="1" fill="white" opacity="0.5"/><rect x="5" y="20" width="18" height="3" rx="1" fill="white" opacity="0.5"/><rect x="5" y="27" width="20" height="3" rx="1" fill="white" opacity="0.5"/></g>${elsaHead}</g>
        <path d="M155,58 Q178,55 200,70" fill="none" stroke="#FF9800" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="205,75 200,63 194,76" fill="#FF9800"/>
      </svg>`,
      // 1
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,100)"><rect x="0" y="0" width="70" height="50" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><line x1="10" y1="15" x2="60" y2="15" stroke="#90A4AE" stroke-width="1.5"/><line x1="10" y1="25" x2="55" y2="25" stroke="#90A4AE" stroke-width="1.5"/><line x1="10" y1="35" x2="58" y2="35" stroke="#90A4AE" stroke-width="1.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="60" y2="18" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="62" cy="17" r="5" fill="#FFE0BD"/><line x1="62" y1="17" x2="78" y2="22" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/><circle cx="80" cy="23" r="3" fill="#FF7043"/>${elsaHead}</g>
      </svg>`,
      // 2
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,100)"><rect x="0" y="0" width="70" height="50" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><line x1="10" y1="20" x2="60" y2="20" stroke="#90A4AE" stroke-width="1.5"/><path d="M10,30 Q25,24 40,30 Q55,36 60,30" stroke="#F44336" stroke-width="1.8" fill="none"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="60" y2="30" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="62" cy="30" r="5" fill="#FFE0BD"/><g transform="translate(62,20)"><rect x="0" y="0" width="28" height="14" rx="4" fill="#FF8A80" stroke="#E57373" stroke-width="1"/><rect x="22" y="-1" width="6" height="16" rx="2" fill="#1E88E5"/></g>${elsaHead}</g>
        <text x="235" y="95" font-size="14">✨</text><text x="250" y="85" font-size="10">✨</text>
      </svg>`,
      // 3
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,70)"><rect x="0" y="0" width="60" height="48" rx="3" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/><circle cx="25" cy="18" r="8" fill="#FFCC02"/><line x1="10" y1="32" x2="50" y2="32" stroke="#81C784" stroke-width="2"/><line x1="18" y1="32" x2="16" y2="27" stroke="#81C784" stroke-width="1.5"/><line x1="30" y1="32" x2="30" y2="24" stroke="#F48FB1" stroke-width="1.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="58" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-35" cy="58" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="55" y2="35" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="57" cy="36" r="5" fill="#FFE0BD"/><g transform="translate(52,36)"><rect x="0" y="0" width="10" height="18" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1"/><rect x="1" y="-6" width="8" height="7" rx="2" fill="#FF9800" stroke="#E65100" stroke-width="0.5"/></g>${elsaHead}</g>
      </svg>`,
      // 4-8...
    ];
    if (index < l1.length) return l1[index];
    return l1.map((s,i) => `<g id="s${i}">${s}</g>`).join(''); // Return all if index out of range
  }

  // For scenes beyond index 3 in U2L1, return from the combined set
  if (unitId === '2' && lessonId === '1') {
    // These were already defined in previous edit, reconstruct inline
    const rest = [
      // 4: scissors
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(210,100)"><rect x="0" y="0" width="55" height="40" rx="2" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><path d="M0,20 Q10,18 20,20" fill="none" stroke="#F44336" stroke-width="2" stroke-dasharray="5,4"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="60" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="60" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="58" y2="35" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="60" cy="36" r="5" fill="#FFE0BD"/><g transform="translate(60,30)"><circle cx="0" cy="0" r="6" fill="none" stroke="#78909C" stroke-width="2"/><circle cx="0" cy="14" r="6" fill="none" stroke="#78909C" stroke-width="2"/><line x1="0" y1="6" x2="0" y2="8" stroke="#78909C" stroke-width="2"/><line x1="-6" y1="0" x2="-14" y2="-8" stroke="#78909C" stroke-width="2.5" stroke-linecap="round"/><line x1="-6" y1="14" x2="-14" y2="22" stroke="#78909C" stroke-width="2.5" stroke-linecap="round"/></g>${elsaHead}</g>
      </svg>`,
      // 5: ruler
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,100)"><rect x="0" y="0" width="70" height="50" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><rect x="5" y="30" width="55" height="12" rx="2" fill="#FFF176" stroke="#F9A825" stroke-width="1"/><line x1="14" y1="32" x2="14" y2="40" stroke="#F9A825" stroke-width="0.8"/><line x1="24" y1="32" x2="24" y2="40" stroke="#F9A825" stroke-width="0.8"/><line x1="34" y1="32" x2="34" y2="40" stroke="#F9A825" stroke-width="0.8"/><line x1="44" y1="32" x2="44" y2="40" stroke="#F9A825" stroke-width="0.8"/><line x1="54" y1="32" x2="54" y2="40" stroke="#F9A825" stroke-width="0.8"/><line x1="10" y1="18" x2="65" y2="18" stroke="#1E88E5" stroke-width="2.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-35" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="50" y2="42" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="52" cy="43" r="5" fill="#FFE0BD"/><line x1="52" y1="43" x2="65" y2="42" stroke="#FFC107" stroke-width="3.5" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`,
      // 6: pen
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,100)"><rect x="0" y="0" width="65" height="45" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><text x="8" y="28" font-size="12" fill="#1E88E5" font-family="Arial" font-weight="bold">E l s a</text><line x1="10" y1="35" x2="55" y2="35" stroke="#90A4AE" stroke-width="1.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="55" y2="25" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="57" cy="24" r="5" fill="#FFE0BD"/><line x1="57" y1="24" x2="68" y2="30" stroke="#1565C0" stroke-width="2.5" stroke-linecap="round"/><circle cx="70" cy="31" r="3" fill="#FFC107"/>${elsaHead}</g>
      </svg>`,
      // 7: bug on bed
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(175,82)"><rect x="0" y="-10" width="100" height="18" rx="4" fill="#6D4C41" stroke="#5D4037" stroke-width="2"/><rect x="5" y="-6" width="90" height="10" rx="2" fill="#8D6E63"/><rect x="-2" y="8" width="104" height="48" rx="6" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><rect x="-2" y="22" width="104" height="28" rx="4" fill="#CE93D8" stroke="#AB47BC" stroke-width="1.5"/><rect x="10" y="24" width="84" height="3" rx="1" fill="#E1BEE7" opacity="0.6"/><rect x="10" y="32" width="84" height="3" rx="1" fill="#E1BEE7" opacity="0.6"/><rect x="10" y="40" width="84" height="3" rx="1" fill="#E1BEE7" opacity="0.6"/><rect x="60" y="10" width="36" height="16" rx="8" fill="white" stroke="#E0E0E0" stroke-width="1"/></g>
        <g transform="translate(210,120)"><ellipse cx="0" cy="0" rx="10" ry="7" fill="#F44336" stroke="#C62828" stroke-width="1.5"/><circle cx="-10" cy="-2" r="5" fill="#D32F2F" stroke="#B71C1C" stroke-width="1"/><circle cx="-12" cy="-4" r="2" fill="white"/><circle cx="-12" cy="-4" r="1" fill="#333"/><circle cx="-9" cy="-4" r="2" fill="white"/><circle cx="-9" cy="-4" r="1" fill="#333"/><line x1="-12" y1="-6" x2="-16" y2="-16" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><circle cx="-16" cy="-17" r="1.5" fill="#333"/><line x1="-8" y1="-6" x2="-6" y2="-18" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><circle cx="-6" cy="-19" r="1.5" fill="#333"/><line x1="-5" y1="5" x2="-12" y2="12" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><line x1="0" y1="7" x2="-2" y2="14" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><line x1="5" y1="6" x2="8" y2="13" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><line x1="-3" y1="-5" x2="-10" y2="-10" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><line x1="3" y1="-5" x2="8" y2="-10" stroke="#333" stroke-width="1.5" stroke-linecap="round"/><circle cx="-3" cy="-1" r="2" fill="#EF9A9A"/><circle cx="3" cy="2" r="1.5" fill="#EF9A9A"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-45" y2="48" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-47" cy="48" r="5" fill="#FFE0BD"/><line x1="22" y1="35" x2="38" y2="50" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><line x1="22" y1="35" x2="50" y2="28" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="52" cy="27" r="5" fill="#FFE0BD"/><line x1="52" y1="27" x2="58" y2="27" stroke="#FFE0BD" stroke-width="2.5" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`,
      // 8: nut and pet
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(210,105)"><ellipse cx="25" cy="30" rx="20" ry="14" fill="#F5DEB3" stroke="#D4B896" stroke-width="1.5"/><circle cx="15" cy="16" r="12" fill="#F5DEB3" stroke="#D4B896" stroke-width="1.5"/><ellipse cx="8" cy="8" rx="5" ry="10" fill="#D4B896" stroke="#C4A882" stroke-width="1" transform="rotate(-15,8,8)"/><ellipse cx="22" cy="8" rx="5" ry="10" fill="#D4B896" stroke="#C4A882" stroke-width="1" transform="rotate(15,22,8)"/><circle cx="11" cy="14" r="2.5" fill="white"/><circle cx="12" cy="14" r="1.5" fill="#333"/><circle cx="19" cy="14" r="2.5" fill="white"/><circle cx="20" cy="14" r="1.5" fill="#333"/><ellipse cx="15" cy="19" rx="3" ry="2" fill="#333"/><ellipse cx="15" cy="23" rx="2.5" ry="3" fill="#F48FB1"/><path d="M44,22 Q54,10 52,2" stroke="#D4B896" stroke-width="3" fill="none" stroke-linecap="round"/><line x1="14" y1="42" x2="12" y2="52" stroke="#D4B896" stroke-width="3.5" stroke-linecap="round"/><line x1="34" y1="42" x2="36" y2="52" stroke="#D4B896" stroke-width="3.5" stroke-linecap="round"/><rect x="6" y="22" width="18" height="4" rx="1" fill="#F44336"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><line x1="10" y1="28" x2="0" y2="10" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-1" cy="8" r="5" fill="#FFE0BD"/><g transform="translate(-4,-2)"><ellipse cx="0" cy="0" rx="9" ry="6" fill="#D7CCC8" stroke="#8D6E63" stroke-width="1.5"/><path d="M-5,-3 Q0,-6 5,-3" fill="none" stroke="#8D6E63" stroke-width="1.2"/><path d="M-4,0 Q0,-2 4,0" fill="none" stroke="#8D6E63" stroke-width="1"/><path d="M-5,3 Q0,6 5,3" fill="none" stroke="#8D6E63" stroke-width="1.2"/><circle cx="-2" cy="-2" r="0.8" fill="#A1887F"/><circle cx="2" cy="-1" r="0.8" fill="#A1887F"/><circle cx="0" cy="2" r="0.8" fill="#A1887F"/><circle cx="3" cy="2.5" r="0.8" fill="#A1887F"/><ellipse cx="-3" cy="-2" rx="3" ry="1.5" fill="white" opacity="0.3"/></g>${elsaHead}</g>
      </svg>`
    ];
    if (index >= 4 && index - 4 < rest.length) return rest[index - 4];
    return rest[0]; // fallback
  }

  // =====================================================================
  // UNIT 2 LESSON 2 — Actions
  // =====================================================================
  if (unitId === '2' && lessonId === '2') {
    const l2 = [
      // 0: draw + write
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(195,95)"><rect x="0" y="0" width="75" height="55" rx="3" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><circle cx="25" cy="22" r="12" fill="none" stroke="#FF9800" stroke-width="2"/><circle cx="25" cy="22" r="5" fill="#FFCC02"/><line x1="10" y1="40" x2="65" y2="40" stroke="#90A4AE" stroke-width="1.5"/><text x="8" y="36" font-size="7" fill="#1E88E5" font-family="Arial">Happy B-day!</text></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="58" y2="22" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="60" cy="21" r="5" fill="#FFE0BD"/><line x1="60" y1="21" x2="76" y2="26" stroke="#FFC107" stroke-width="3" stroke-linecap="round"/><circle cx="78" cy="27" r="3" fill="#FF7043"/>${elsaHead}</g>
      </svg>`,
      // 1: stick + fold
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,90)"><rect x="0" y="0" width="55" height="60" rx="2" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/><line x1="27" y1="0" x2="27" y2="60" stroke="#E0E0E0" stroke-width="1" stroke-dasharray="4,3"/><rect x="5" y="8" width="20" height="25" rx="1" fill="#FFCC02" opacity="0.5"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-35" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="55" y2="35" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="57" cy="36" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 2: cut + color
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,95)"><rect x="0" y="0" width="55" height="50" rx="2" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><path d="M0,20 Q10,16 20,20" fill="none" stroke="#F44336" stroke-width="2" stroke-dasharray="4,4"/><circle cx="35" cy="30" r="8" fill="#42A5F5" opacity="0.6"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="60" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="60" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="55" y2="32" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="57" cy="31" r="5" fill="#FFE0BD"/><g transform="translate(57,25)"><circle cx="0" cy="0" r="6" fill="none" stroke="#78909C" stroke-width="2"/><circle cx="0" cy="14" r="6" fill="none" stroke="#78909C" stroke-width="2"/><line x1="0" y1="6" x2="0" y2="8" stroke="#78909C" stroke-width="2"/><line x1="-6" y1="0" x2="-14" y2="-8" stroke="#78909C" stroke-width="2.5" stroke-linecap="round"/><line x1="-6" y1="14" x2="-14" y2="22" stroke="#78909C" stroke-width="2.5" stroke-linecap="round"/></g>${elsaHead}</g>
      </svg>`,
      // 3: open + close
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,90)"><rect x="0" y="0" width="55" height="60" rx="2" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/><line x1="27" y1="0" x2="27" y2="60" stroke="#E0E0E0" stroke-width="1" stroke-dasharray="4,3"/><rect x="0" y="0" width="27" height="60" rx="0" fill="#FFF176" opacity="0.4"/><text x="5" y="35" font-size="8" fill="#F9A825">OPEN</text></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="52" y2="28" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="54" cy="27" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 4: point
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,100)"><rect x="0" y="0" width="55" height="45" rx="2" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/><circle cx="25" cy="18" r="8" fill="#FFCC02"/><line x1="10" y1="32" x2="45" y2="32" stroke="#81C784" stroke-width="2"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="52" y2="20" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="54" cy="18" r="5" fill="#FFE0BD"/><line x1="54" y1="18" x2="64" y2="18" stroke="#FFE0BD" stroke-width="2.5" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`,
      // 5: tidy + put away
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,95)"><rect x="0" y="0" width="45" height="35" rx="3" fill="#FF7043" stroke="#E64A19" stroke-width="1.5"/><rect x="5" y="5" width="35" height="3" rx="1" fill="#FFAB91"/><rect x="10" y="14" width="25" height="3" rx="1" fill="#FFAB91"/><rect x="10" y="24" width="20" height="3" rx="1" fill="#FFAB91"/><text x="50" y="22" font-size="10">📦</text></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="52" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-35" cy="52" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="52" y2="40" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="54" cy="41" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 6: got + gum
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,95)"><circle cx="25" cy="20" r="15" fill="#F48FB1" opacity="0.5"/><text x="25" y="24" text-anchor="middle" font-size="16">🤗</text><rect x="5" y="40" width="10" height="6" rx="2" fill="#E91E63" stroke="#AD1457" stroke-width="1"/><text x="50" y="26" font-size="14">🫧</text></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-42" y2="58" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-43" cy="59" r="5" fill="#FFE0BD"/><line x1="10" y1="30" x2="5" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`
    ];
    if (index < l2.length) return l2[index];
    return l2[0];
  }

  // =====================================================================
  // UNIT 2 LESSON 3 — Classroom
  // =====================================================================
  if (unitId === '2' && lessonId === '3') {
    const l3 = [
      // 0: classroom + chair
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(185,80)"><rect x="0" y="0" width="90" height="70" rx="4" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/><rect x="10" y="10" width="30" height="25" rx="2" fill="#BBDEFB"/><text x="18" y="26" font-size="10" fill="#1E88E5">ABC</text><rect x="50" y="10" width="30" height="25" rx="2" fill="#BBDEFB"/><text x="56" y="26" font-size="10" fill="#1E88E5">123</text><rect x="5" y="45" width="50" height="20" rx="2" fill="#A5D6A7"/><rect x="10" y="48" width="12" height="14" rx="1" fill="#81C784"/><rect x="26" y="48" width="12" height="14" rx="1" fill="#81C784"/></g>
        <g transform="translate(170,110)"><rect x="0" y="0" width="35" height="40" rx="3" fill="#8D6E63" stroke="#6D4C41" stroke-width="1.5"/><rect x="2" y="5" width="31" height="3" rx="1" fill="#A1887F"/><rect x="2" y="25" width="31" height="3" rx="1" fill="#A1887F"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="35" x2="40" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`,
      // 1: desk + board
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(185,80)"><rect x="0" y="15" width="85" height="55" rx="3" fill="#546E7A" stroke="#37474F" stroke-width="2"/><text x="12" y="40" font-size="9" fill="white">2+2=4</text><text x="12" y="54" font-size="9" fill="white">Hello!</text><rect x="60" y="20" width="18" height="4" rx="1" fill="white" opacity="0.3"/><rect x="0" y="0" width="85" height="18" rx="2" fill="#78909C"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="55" y2="20" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="57" cy="19" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 2: door + teacher
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,70)"><rect x="0" y="0" width="50" height="90" rx="3" fill="#8D6E63" stroke="#6D4C41" stroke-width="2"/><circle cx="38" cy="45" r="4" fill="#FFD700"/><rect x="5" y="5" width="40" height="35" rx="1" fill="#A1887F"/><rect x="5" y="50" width="40" height="35" rx="1" fill="#A1887F"/></g>
        <g transform="translate(140,75)"><circle cx="0" cy="0" r="18" fill="#FFE0BD"/><rect x="-12" y="16" width="24" height="30" rx="4" fill="#66BB6A"/><line x1="-12" y1="40" x2="-14" y2="55" stroke="#FFE0BD" stroke-width="6" stroke-linecap="round"/><line x1="12" y1="40" x2="14" y2="55" stroke="#FFE0BD" stroke-width="6" stroke-linecap="round"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-40" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-40" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="50" y2="40" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="52" cy="41" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 3: student + trash can
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,105)"><rect x="0" y="5" width="28" height="45" rx="3" fill="#BDBDBD" stroke="#9E9E9E" stroke-width="1.5"/><rect x="-3" y="2" width="34" height="6" rx="1" fill="#E0E0E0"/><line x1="8" y1="18" x2="20" y2="18" stroke="white" stroke-width="1"/><line x1="8" y1="28" x2="20" y2="28" stroke="white" stroke-width="1"/></g>
        <g transform="translate(155,80)"><circle cx="0" cy="0" r="14" fill="#FFE0BD"/><rect x="-10" y="12" width="20" height="26" rx="3" fill="#FF7043"/><line x1="-8" y1="34" x2="-10" y2="48" stroke="#FFE0BD" stroke-width="5" stroke-linecap="round"/><line x1="8" y1="34" x2="10" y2="48" stroke="#FFE0BD" stroke-width="5" stroke-linecap="round"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-35" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-35" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="48" y2="42" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="50" cy="43" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 4: mug + ten
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(185,95)"><rect x="0" y="5" width="32" height="38" rx="4" fill="white" stroke="#BDBDBD" stroke-width="1.5"/><path d="M32,12 Q42,12 42,22 Q42,32 32,32" fill="none" stroke="#BDBDBD" stroke-width="2"/><ellipse cx="16" cy="15" rx="10" ry="3" fill="#64B5F6" opacity="0.5"/><text x="60" y="40" font-size="18" font-weight="bold" fill="#1E88E5">10</text></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="30" x2="50" y2="38" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="52" cy="39" r="5" fill="#FFE0BD"/>${elsaHead}</g>
      </svg>`,
      // 5: bed
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(185,85)"><rect x="0" y="5" width="85" height="55" rx="6" fill="#8D6E63" stroke="#6D4C41" stroke-width="2"/><rect x="-2" y="2" width="89" height="10" rx="4" fill="#A1887F"/><rect x="-2" y="25" width="89" height="30" rx="4" fill="#CE93D8" stroke="#AB47BC" stroke-width="1"/><rect x="60" y="8" width="20" height="12" rx="6" fill="white"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="55" r="5" fill="#FFE0BD"/><line x1="22" y1="35" x2="40" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/>${elsaHead}</g>
      </svg>`,
      // 6: ban + mad
      `<svg viewBox="0 0 320 200" width="320" height="200" xmlns="http://www.w3.org/2000/svg">${defs}${bg}
        <g transform="translate(200,80)"><circle cx="25" cy="25" r="24" fill="white" stroke="#F44336" stroke-width="3"/><line x1="10" y1="10" x2="40" y2="40" stroke="#F44336" stroke-width="3.5" stroke-linecap="round"/></g>
        <g transform="translate(85,40)">${cape}${elsaBody}<line x1="-22" y1="30" x2="-38" y2="58" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/><circle cx="-38" cy="58" r="5" fill="#FFE0BD"/><line x1="10" y1="30" x2="5" y2="55" stroke="#FFE0BD" stroke-width="10" stroke-linecap="round"/>
          <!-- Mad face overlay -->
          <circle cx="0" cy="0" r="30" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="1.5"/>
          <path d="M-30,-2 Q-30,-32 0,-34 Q30,-32 30,-2" fill="url(#hairG)"/>
          <ellipse cx="-9" cy="2" rx="6" ry="7" fill="white"/><circle cx="-7" cy="1" r="3.5" fill="#37474F"/><circle cx="-6" cy="0" r="1.2" fill="white"/>
          <ellipse cx="11" cy="2" rx="6" ry="7" fill="white"/><circle cx="13" cy="1" r="3.5" fill="#37474F"/><circle cx="14" cy="0" r="1.2" fill="white"/>
          <!-- Angry eyebrows -->
          <line x1="-17" y1="-10" x2="-3" y2="-6" stroke="#37474F" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="5" y1="-6" x2="19" y2="-10" stroke="#37474F" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Frown -->
          <path d="M-6,15 Q0,10 8,15" fill="none" stroke="#E57373" stroke-width="2" stroke-linecap="round"/>
        </g>
      </svg>`
    ];
    if (index < l3.length) return l3[index];
    return l3[0];
  }

  return `<div style="font-size:3rem;padding:20px;">📖</div>`;
}
