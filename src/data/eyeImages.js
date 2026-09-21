// ReMiCare - Vector Illustrations (VISI Medical Group Aesthetic)
// Clean lines, high-contrast, teal medical palette, realistic eye trauma cues

export const eyeIllustrations = {
  // Hero Image: Bác sĩ / Người chăm sóc mắt kiểm tra thị lực
  heroCaregiver: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
    <rect width="600" height="450" fill="%23E8F5F5"/>
    <circle cx="300" cy="225" r="190" fill="%23FFFFFF" stroke="%23DCE7E8" stroke-width="4"/>
    
    <!-- Medical Cross Shield Badge -->
    <circle cx="510" cy="80" r="45" fill="%230B7F86"/>
    <path d="M495 80 L525 80 M510 65 L510 95" stroke="%23FFFFFF" stroke-width="6" stroke-linecap="round"/>
    
    <!-- Ophthalmologist / Doctor silhouette with slit-lamp light -->
    <path d="M160 380 C160 270 230 250 300 250 C370 250 440 270 440 380 Z" fill="%23075F66"/>
    <!-- Doctor Coat Lapels -->
    <polygon points="300,270 260,380 340,380" fill="%23FFFFFF"/>
    <path d="M300 270 L300 380" stroke="%230B7F86" stroke-width="3"/>
    <polygon points="260,270 280,330 260,350" fill="%23DDEFEF"/>
    <polygon points="340,270 320,330 340,350" fill="%23DDEFEF"/>
    
    <!-- Stethoscope -->
    <path d="M250 310 Q300 360 350 310" fill="none" stroke="%230B7F86" stroke-width="6" stroke-linecap="round"/>
    <circle cx="300" cy="365" r="10" fill="%230B7F86"/>
    
    <!-- Doctor Head -->
    <circle cx="300" cy="180" r="55" fill="%23FDBA74"/>
    <!-- Hair -->
    <path d="M245 170 Q300 110 355 170 Q350 140 300 135 Q250 140 245 170 Z" fill="%231E293B"/>
    <!-- Medical Head Mirror / Headband -->
    <rect x="255" y="155" width="90" height="12" rx="4" fill="%230B7F86"/>
    <circle cx="300" cy="161" r="16" fill="%23E2E8F0" stroke="%230B7F86" stroke-width="3"/>
    <circle cx="300" cy="161" r="5" fill="%23075F66"/>
    
    <!-- Focused Slit-lamp Medical Eye Examination Beam -->
    <path d="M120 220 L270 210 L120 250 Z" fill="%2338BDF8" opacity="0.35"/>
    <ellipse cx="140" cy="235" rx="55" ry="32" fill="%23FFFFFF" stroke="%230B7F86" stroke-width="4"/>
    <circle cx="140" cy="235" r="18" fill="%230B7F86"/>
    <circle cx="140" cy="235" r="8" fill="%230F172A"/>
    
    <!-- Brand banner -->
    <rect x="180" y="395" width="240" height="38" rx="19" fill="%23FFFFFF" stroke="%230B7F86" stroke-width="2"/>
    <text x="300" y="420" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="%230B7F86" text-anchor="middle">KHANGEYE • REMICARE</text>
  </svg>`,

  // 1. Mắt bị va đập
  bluntTrauma: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <ellipse cx="200" cy="130" rx="160" ry="100" fill="%23FDECEC" stroke="%23F8B4B4" stroke-width="2"/>
    <ellipse cx="190" cy="125" rx="130" ry="80" fill="%23DDD6FE" opacity="0.7"/>
    <path d="M80 130 Q200 85 320 130 Q200 175 80 130 Z" fill="%23FCA5A5" stroke="%23C62828" stroke-width="6"/>
    <circle cx="200" cy="130" r="38" fill="%239B1C1C"/>
    <circle cx="200" cy="130" r="16" fill="%23173B40"/>
    <!-- Shock impact burst -->
    <path d="M200 35 L208 58 L232 62 L212 78 L220 102 L200 86 L180 102 L188 78 L168 62 L192 58 Z" fill="%23C62828"/>
    <!-- Severity Badge on image -->
    <circle cx="345" cy="45" r="24" fill="%23C62828"/>
    <text x="345" y="53" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">!</text>
  </svg>`,

  // 2. Dị vật vào mắt (Dị vật găm vào mắt)
  foreignObject: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 35 350 130 Q200 225 50 130 Z" fill="%23FFFFFF" stroke="%23C62828" stroke-width="6"/>
    <circle cx="200" cy="130" r="50" fill="%230B7F86" stroke="%23075F66" stroke-width="4"/>
    <circle cx="200" cy="130" r="22" fill="%23173B40"/>
    <!-- Dị vật / Mảnh dằm găm vào -->
    <polygon points="190,120 270,55 285,70 205,135" fill="%2378350F" stroke="%23451A03" stroke-width="3"/>
    <circle cx="195" cy="142" r="7" fill="%23C62828"/>
    <!-- Warning sign -->
    <circle cx="345" cy="45" r="24" fill="%23C62828"/>
    <text x="345" y="53" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">🚫</text>
  </svg>`,

  // 3. Hóa chất vào mắt
  chemicalSplash: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 40 350 130 Q200 220 50 130 Z" fill="%23FDECEC" stroke="%23C62828" stroke-width="6"/>
    <circle cx="200" cy="130" r="48" fill="%23EF4444" stroke="%23C62828" stroke-width="4"/>
    <circle cx="200" cy="130" r="20" fill="%23450A0A"/>
    <!-- Toxic droplets -->
    <path d="M125 65 C125 65 110 90 110 102 C110 110 117 117 125 117 C133 117 140 110 140 102 C140 90 125 65 125 65 Z" fill="%23C88A00"/>
    <path d="M260 55 C260 55 245 80 245 92 C245 100 252 107 260 107 C268 107 275 100 275 92 C275 80 260 55 260 55 Z" fill="%232E7D5B"/>
    <circle cx="345" cy="45" r="24" fill="%23C62828"/>
    <text x="345" y="54" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">🧪</text>
  </svg>`,

  // 4. Mắt đỏ + ghèn
  redEye: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 35 350 130 Q200 225 50 130 Z" fill="%23FFF6DD" stroke="%23C88A00" stroke-width="6"/>
    <!-- Blood vessels -->
    <path d="M75 125 Q120 115 145 120" stroke="%23EF4444" stroke-width="3" fill="none"/>
    <path d="M80 140 Q110 148 140 135" stroke="%23EF4444" stroke-width="3" fill="none"/>
    <path d="M325 125 Q285 115 255 125" stroke="%23EF4444" stroke-width="3" fill="none"/>
    <!-- Iris -->
    <circle cx="200" cy="130" r="48" fill="%239B1C1C"/>
    <circle cx="200" cy="130" r="22" fill="%23173B40"/>
    <!-- Ghèn mắt vàng -->
    <ellipse cx="65" cy="135" rx="16" ry="10" fill="%23FACC15" stroke="%23C88A00" stroke-width="2"/>
    <circle cx="345" cy="45" r="24" fill="%23C88A00"/>
    <text x="345" y="53" font-family="sans-serif" font-size="20" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">!</text>
  </svg>`,

  // 5. Nhìn mờ
  blurryVision: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M45 125 Q195 30 345 125 Q195 220 45 125 Z" fill="none" stroke="%23DCE7E8" stroke-width="5" opacity="0.6"/>
    <path d="M55 135 Q205 40 355 135 Q205 230 55 135 Z" fill="none" stroke="%2364777A" stroke-width="5" opacity="0.4"/>
    <path d="M50 130 Q200 35 350 130 Q200 225 50 130 Z" fill="%23FFFFFF" stroke="%23C88A00" stroke-width="6"/>
    <!-- Ghosted irises -->
    <circle cx="190" cy="126" r="46" fill="%23DDEFEF" opacity="0.8"/>
    <circle cx="210" cy="134" r="46" fill="%23E8F5F5" opacity="0.8"/>
    <circle cx="200" cy="130" r="42" fill="%230B7F86"/>
    <circle cx="200" cy="130" r="18" fill="%23173B40"/>
    <circle cx="345" cy="45" r="24" fill="%23C88A00"/>
    <text x="345" y="53" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">🔍</text>
  </svg>`,

  // 6. Mắt khô / mỏi (Mức Safe: 🟢 Chăm sóc)
  dryFatigueEye: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 45 350 130 Q200 215 50 130 Z" fill="%23EAF6F0" stroke="%232E7D5B" stroke-width="6"/>
    <circle cx="200" cy="130" r="48" fill="%230B7F86" stroke="%23075F66" stroke-width="3"/>
    <circle cx="200" cy="130" r="20" fill="%23173B40"/>
    <circle cx="208" cy="122" r="6" fill="%23FFFFFF"/>
    <!-- Soothing tear drop -->
    <path d="M130 90 C130 90 115 115 115 125 C115 133 122 140 130 140 C138 140 145 133 145 125 C145 115 130 90 130 90 Z" fill="%230B7F86"/>
    <path d="M120 115 L140 115" stroke="%23FFFFFF" stroke-width="2"/>
    <!-- Gentle rest Zzz -->
    <text x="270" y="90" font-family="sans-serif" font-size="22" font-weight="bold" fill="%232E7D5B">z</text>
    <text x="290" y="75" font-family="sans-serif" font-size="16" font-weight="bold" fill="%232E7D5B">z</text>
    <circle cx="345" cy="45" r="24" fill="%232E7D5B"/>
    <text x="345" y="54" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">✓</text>
  </svg>`,

  // Extra chấn thương mắt
  fishhook: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 35 350 130 Q200 225 50 130 Z" fill="%23FFFFFF" stroke="%23C62828" stroke-width="6"/>
    <circle cx="200" cy="130" r="48" fill="%230B7F86"/>
    <circle cx="200" cy="130" r="20" fill="%23173B40"/>
    <path d="M230 50 L230 130 A26 26 0 0 1 185 140 L185 120" fill="none" stroke="%23475569" stroke-width="8" stroke-linecap="round"/>
    <circle cx="345" cy="45" r="24" fill="%23C62828"/>
    <text x="345" y="54" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">🪝</text>
  </svg>`,

  eyeBurn: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 40 350 130 Q200 220 50 130 Z" fill="%23FDECEC" stroke="%23C62828" stroke-width="6"/>
    <circle cx="200" cy="130" r="48" fill="%23C88A00"/>
    <path d="M200 115 Q212 90 200 70 Q188 90 200 115 Z" fill="%23C62828"/>
    <circle cx="345" cy="45" r="24" fill="%23C62828"/>
    <text x="345" y="54" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">🔥</text>
  </svg>`,

  cloudyEye: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" width="100%" height="100%">
    <rect width="400" height="260" fill="%23F6FAFA"/>
    <path d="M50 130 Q200 35 350 130 Q200 225 50 130 Z" fill="%23FFFFFF" stroke="%2364777A" stroke-width="6"/>
    <circle cx="200" cy="130" r="50" fill="%230B7F86"/>
    <circle cx="200" cy="130" r="30" fill="%23DCE7E8" stroke="%2394A3B8" stroke-width="3"/>
    <ellipse cx="195" cy="125" rx="18" ry="14" fill="%23FFFFFF" opacity="0.95"/>
    <circle cx="345" cy="45" r="24" fill="%23C88A00"/>
    <text x="345" y="53" font-family="sans-serif" font-size="18" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">👁</text>
  </svg>`
};
