// ========================================
// Emoji Helper — renders custom shapes for items without good emoji
// ========================================

function emojiHTML(emoji) {
  if (emoji === '___eraser___') {
    // Pink school eraser with blue sleeve — detailed SVG
    return `<svg class="custom-emoji-svg" width="48" height="28" viewBox="0 0 48 28" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eraserGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FFB3B3"/>
          <stop offset="30%" stop-color="#FF8A8A"/>
          <stop offset="100%" stop-color="#E57373"/>
        </linearGradient>
        <linearGradient id="sleeveGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#42A5F5"/>
          <stop offset="100%" stop-color="#1E88E5"/>
        </linearGradient>
        <filter id="eraserShadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00000033"/>
        </filter>
      </defs>
      <!-- Eraser body -->
      <rect x="2" y="3" width="42" height="22" rx="5" ry="5" fill="url(#eraserGrad)" filter="url(#eraserShadow)"/>
      <!-- Highlight -->
      <rect x="6" y="5" width="34" height="5" rx="2" fill="#ffffff33"/>
      <!-- Blue sleeve wrap -->
      <rect x="14" y="1" width="10" height="26" rx="3" fill="url(#sleeveGrad)"/>
      <rect x="14" y="1" width="10" height="26" rx="3" fill="none" stroke="#1565C0" stroke-width="1"/>
      <!-- Sleeve text lines -->
      <line x1="17" y1="8" x2="21" y2="8" stroke="#ffffff88" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="17" y1="12" x2="21" y2="12" stroke="#ffffff88" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="17" y1="16" x2="21" y2="16" stroke="#ffffff88" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="17" y1="20" x2="21" y2="20" stroke="#ffffff88" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  }

  if (emoji === '___glue___') {
    // White school glue bottle with orange cap — detailed SVG
    return `<svg class="custom-emoji-svg" width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="glueGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#E0E0E0"/>
          <stop offset="30%" stop-color="#FAFAFA"/>
          <stop offset="70%" stop-color="#F5F5F5"/>
          <stop offset="100%" stop-color="#D0D0D0"/>
        </linearGradient>
        <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#FF9800"/>
          <stop offset="100%" stop-color="#E65100"/>
        </linearGradient>
        <filter id="glueShadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-color="#00000022"/>
        </filter>
      </defs>
      <!-- Bottle body (trapezoid shape - wider at bottom) -->
      <path d="M10,12 L11,35 L21,35 L22,12 Z" fill="url(#glueGrad)" stroke="#BDBDBD" stroke-width="1" filter="url(#glueShadow)"/>
      <!-- Bottle neck -->
      <rect x="13" y="7" width="6" height="6" rx="1" fill="url(#glueGrad)" stroke="#BDBDBD" stroke-width="0.5"/>
      <!-- Orange cap -->
      <rect x="12" y="3" width="8" height="6" rx="2" fill="url(#capGrad)" stroke="#BF360C" stroke-width="0.5"/>
      <!-- Cap ridges -->
      <line x1="14" y1="5" x2="14" y2="7" stroke="#BF360C33" stroke-width="1"/>
      <line x1="16" y1="5" x2="16" y2="7" stroke="#BF360C33" stroke-width="1"/>
      <line x1="18" y1="5" x2="18" y2="7" stroke="#BF360C33" stroke-width="1"/>
      <!-- Label on bottle -->
      <rect x="11.5" y="18" width="9" height="10" rx="1" fill="#FFCC80" stroke="#FF9800" stroke-width="0.5"/>
      <!-- Label design -->
      <text x="16" y="24" text-anchor="middle" font-size="3.5" font-weight="bold" fill="#E65100" font-family="Arial">GLUE</text>
      <!-- Highlight on bottle -->
      <path d="M12,14 L12.5,33" stroke="#ffffffaa" stroke-width="1.5"/>
    </svg>`;
  }

  if (emoji === '___chair___') {
    return `<svg class="custom-emoji-svg" width="36" height="44" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="28" height="6" rx="2" fill="#8D6E63" stroke="#6D4C41" stroke-width="1.2"/>
      <rect x="6" y="0" width="24" height="12" rx="3" fill="#A1887F" stroke="#8D6E63" stroke-width="1"/>
      <rect x="6" y="14" width="4" height="26" rx="1.5" fill="#6D4C41"/>
      <rect x="26" y="14" width="4" height="26" rx="1.5" fill="#6D4C41"/>
      <rect x="4" y="36" width="28" height="3" rx="1" fill="#5D4037"/>
    </svg>`;
  }
  if (emoji === '___desk___') {
    return `<svg class="custom-emoji-svg" width="44" height="36" viewBox="0 0 44 36" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="40" height="6" rx="2" fill="#8D6E63" stroke="#6D4C41" stroke-width="1.2"/>
      <rect x="6" y="8" width="4" height="26" rx="1" fill="#6D4C41"/>
      <rect x="34" y="8" width="4" height="26" rx="1" fill="#6D4C41"/>
      <rect x="34" y="26" width="6" height="2" rx="1" fill="#5D4037"/>
      <rect x="6" y="26" width="6" height="2" rx="1" fill="#5D4037"/>
      <rect x="4" y="20" width="36" height="1.5" fill="#A1887F" opacity="0.3"/>
      <rect x="8" y="8" width="15" height="14" rx="1" fill="#BBDEFB" opacity="0.4"/>
    </svg>`;
  }
  if (emoji === '___fold___') {
    // Two hands folding paper — detailed hands with palms and fingers
    return `<svg class="custom-emoji-svg" width="54" height="38" viewBox="0 0 54 38" xmlns="http://www.w3.org/2000/svg">
      <!-- Paper being folded -->
      <polygon points="7,28 27,6 47,28" fill="#FFF9C4" stroke="#F9A825" stroke-width="1.5"/>
      <line x1="27" y1="6" x2="27" y2="28" stroke="#E0E0E0" stroke-width="1.2" stroke-dasharray="3,3"/>
      <!-- LEFT HAND — palm with thumb and fingers -->
      <g transform="translate(2,10)">
        <!-- Palm -->
        <ellipse cx="8" cy="10" rx="10" ry="8" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="1" transform="rotate(-10,8,10)"/>
        <!-- Thumb -->
        <ellipse cx="2" cy="3" rx="4" ry="3" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.8" transform="rotate(-40,2,3)"/>
        <!-- Index finger -->
        <rect x="8" y="0" width="3.5" height="8" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
        <!-- Middle finger -->
        <rect x="12" y="-1" width="3.5" height="9" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
        <!-- Ring finger -->
        <rect x="16" y="2" width="3" height="7" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
      </g>
      <!-- RIGHT HAND — palm with thumb and fingers -->
      <g transform="translate(36,10)">
        <!-- Palm -->
        <ellipse cx="8" cy="10" rx="10" ry="8" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="1" transform="rotate(10,8,10)"/>
        <!-- Thumb -->
        <ellipse cx="14" cy="3" rx="4" ry="3" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.8" transform="rotate(40,14,3)"/>
        <!-- Index finger -->
        <rect x="4" y="0" width="3.5" height="8" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
        <!-- Middle finger -->
        <rect x="0.5" y="-1" width="3.5" height="9" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
        <!-- Ring finger -->
        <rect x="-3" y="2" width="3" height="7" rx="1.5" fill="#FFE0BD" stroke="#E8C9A0" stroke-width="0.5"/>
      </g>
      <!-- Fold arrows -->
      <path d="M24,8 L22,4 L20,8" fill="none" stroke="#FF9800" stroke-width="1.5"/>
      <path d="M30,8 L32,4 L34,8" fill="none" stroke="#FF9800" stroke-width="1.5"/>
    </svg>`;
  }

  if (emoji === '___gum___') {
    // Stick of chewing gum
    return `<svg class="custom-emoji-svg" width="44" height="20" viewBox="0 0 44 20" xmlns="http://www.w3.org/2000/svg">
      <!-- Gum stick body -->
      <rect x="2" y="3" width="38" height="14" rx="3" fill="#F48FB1" stroke="#E91E63" stroke-width="1.5"/>
      <!-- Highlight -->
      <rect x="5" y="5" width="32" height="3" rx="1" fill="white" opacity="0.4"/>
      <!-- Wrapper lines -->
      <line x1="14" y1="3" x2="14" y2="17" stroke="#E91E63" stroke-width="1" opacity="0.5"/>
      <line x1="28" y1="3" x2="28" y2="17" stroke="#E91E63" stroke-width="1" opacity="0.5"/>
      <!-- Brand mark -->
      <text x="21" y="13" text-anchor="middle" font-size="6" fill="white" font-weight="bold" font-family="Arial">GUM</text>
    </svg>`;
  }

  return emoji;
}
