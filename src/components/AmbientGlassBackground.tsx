import React from 'react';

/** Original, theme-aware glass ribbons shared by every section of the portfolio. */
export function AmbientGlassBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <svg className="glass-ribbons" viewBox="0 0 1600 1100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pearl-ribbon-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d7eeff" stopOpacity=".78" />
            <stop offset=".18" stopColor="#9bd8fa" stopOpacity=".46" />
            <stop offset=".4" stopColor="#f5f8fc" stopOpacity=".3" />
            <stop offset=".62" stopColor="#77c9df" stopOpacity=".42" />
            <stop offset=".82" stopColor="#c2b5f2" stopOpacity=".32" />
            <stop offset="1" stopColor="#f5f8fc" stopOpacity=".72" />
          </linearGradient>
          <linearGradient id="pearl-ribbon-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#77c9df" stopOpacity=".4" />
            <stop offset=".3" stopColor="#d7eeff" stopOpacity=".52" />
            <stop offset=".56" stopColor="#9bd8fa" stopOpacity=".35" />
            <stop offset=".78" stopColor="#c2b5f2" stopOpacity=".28" />
            <stop offset="1" stopColor="#f5f8fc" stopOpacity=".65" />
          </linearGradient>
          <linearGradient id="pearl-ribbon-c" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#c2b5f2" stopOpacity=".25" />
            <stop offset=".32" stopColor="#77c9df" stopOpacity=".45" />
            <stop offset=".62" stopColor="#d7eeff" stopOpacity=".55" />
            <stop offset=".82" stopColor="#9bd8fa" stopOpacity=".4" />
            <stop offset="1" stopColor="#b8cbdd" stopOpacity=".34" />
          </linearGradient>
          <linearGradient id="graphite-ribbon-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c1d5dc" stopOpacity=".22" />
            <stop offset=".24" stopColor="#42616b" stopOpacity=".50" />
            <stop offset=".52" stopColor="#1b3039" stopOpacity=".38" />
            <stop offset=".78" stopColor="#456a72" stopOpacity=".46" />
            <stop offset="1" stopColor="#d0dfe4" stopOpacity=".22" />
          </linearGradient>
          <linearGradient id="graphite-ribbon-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#365d67" stopOpacity=".45" />
            <stop offset=".34" stopColor="#b5c5cb" stopOpacity=".22" />
            <stop offset=".65" stopColor="#24434c" stopOpacity=".48" />
            <stop offset="1" stopColor="#aec4cc" stopOpacity=".22" />
          </linearGradient>
          <linearGradient id="graphite-ribbon-c" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#bed0d6" stopOpacity=".18" />
            <stop offset=".42" stopColor="#32616a" stopOpacity=".46" />
            <stop offset=".72" stopColor="#b0c2c8" stopOpacity=".22" />
            <stop offset="1" stopColor="#24464e" stopOpacity=".42" />
          </linearGradient>
          <linearGradient id="glass-edge-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset=".32" stopColor="#ffffff" stopOpacity=".85" />
            <stop offset=".58" stopColor="#b9e1f2" stopOpacity=".62" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glass-edge-dark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#95d9e2" stopOpacity="0" />
            <stop offset=".35" stopColor="#a4d9e2" stopOpacity=".52" />
            <stop offset=".62" stopColor="#4fb4c0" stopOpacity=".55" />
            <stop offset="1" stopColor="#95d9e2" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="pearl-light-wash">
            <stop offset="0" stopColor="#9bd8fa" stopOpacity=".42" />
            <stop offset=".42" stopColor="#77c9df" stopOpacity=".2" />
            <stop offset=".72" stopColor="#c2b5f2" stopOpacity=".16" />
            <stop offset="1" stopColor="#d7eeff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sea-light-wash">
            <stop offset="0" stopColor="#77c9df" stopOpacity=".34" />
            <stop offset=".5" stopColor="#9bd8fa" stopOpacity=".14" />
            <stop offset="1" stopColor="#f5f8fc" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="violet-light-wash">
            <stop offset="0" stopColor="#c2b5f2" stopOpacity=".28" />
            <stop offset=".56" stopColor="#c2b5f2" stopOpacity=".1" />
            <stop offset="1" stopColor="#c2b5f2" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="graphite-light-wash">
            <stop offset="0" stopColor="#244951" stopOpacity=".24" />
            <stop offset=".62" stopColor="#182a36" stopOpacity=".10" />
            <stop offset="1" stopColor="#10151d" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glass-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <g className="glass-ribbon-set glass-ribbon-set-light">
          <ellipse cx="420" cy="350" rx="650" ry="430" fill="url(#pearl-light-wash)" />
          <ellipse cx="1120" cy="570" rx="660" ry="440" fill="url(#sea-light-wash)" opacity=".72" />
          <ellipse cx="1320" cy="820" rx="600" ry="390" fill="url(#violet-light-wash)" opacity=".62" />
          <g className="glass-ribbon glass-ribbon-one">
            <path d="M-230 90 C80 10 265 70 440 250 C600 416 720 435 900 272 C1087 102 1290 28 1830 146 L1830 400 C1360 278 1194 351 1010 536 C812 733 558 707 350 492 C174 310 45 268 -230 425Z" fill="url(#pearl-ribbon-a)" />
            <path d="M-190 112 C92 40 269 95 428 260 C599 437 737 450 916 285 C1097 117 1303 56 1790 160" fill="none" stroke="url(#glass-edge-light)" strokeWidth="5" opacity=".66" />
            <path d="M-155 132 C126 62 284 119 441 280 C608 451 744 462 928 301 C1105 145 1316 82 1760 182" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity=".44" />
          </g>
          <g className="glass-ribbon glass-ribbon-two">
            <path d="M-190 518 C110 330 320 348 520 520 C705 679 839 790 1065 651 C1272 524 1450 435 1810 540 L1810 800 C1508 704 1325 744 1110 886 C850 1058 653 916 452 754 C246 588 80 617 -190 832Z" fill="url(#pearl-ribbon-b)" />
            <path d="M-150 541 C125 368 322 378 508 537 C704 703 857 817 1080 676 C1290 544 1468 476 1770 558" fill="none" stroke="url(#glass-edge-light)" strokeWidth="4" opacity=".58" />
            <path d="M-128 562 C142 394 333 404 520 556 C710 712 868 836 1094 696 C1307 566 1476 497 1744 579" fill="none" stroke="#eaf7ff" strokeWidth="1.5" opacity=".34" />
          </g>
          <g className="glass-ribbon glass-ribbon-three">
            <path d="M-140 892 C148 719 344 750 548 886 C772 1036 951 1099 1174 956 C1392 815 1555 794 1770 862 L1770 1170 L-140 1170Z" fill="url(#pearl-ribbon-c)" />
            <path d="M-100 921 C168 770 346 789 542 916 C764 1059 965 1123 1185 979 C1380 852 1542 835 1732 884" fill="none" stroke="url(#glass-edge-light)" strokeWidth="5" opacity=".58" />
          </g>
          <path d="M110 250 C280 148 414 169 548 310 C684 454 828 486 951 399" fill="none" stroke="#ffffff" strokeWidth="28" strokeLinecap="round" opacity=".16" filter="url(#soft-glass-shadow)" />
        </g>

        <g className="glass-ribbon-set glass-ribbon-set-dark">
          <ellipse cx="420" cy="350" rx="650" ry="430" fill="url(#graphite-light-wash)" />
          <ellipse cx="1320" cy="820" rx="600" ry="390" fill="url(#graphite-light-wash)" opacity=".56" />
          <g className="glass-ribbon glass-ribbon-one">
            <path d="M-230 90 C80 10 265 70 440 250 C600 416 720 435 900 272 C1087 102 1290 28 1830 146 L1830 400 C1360 278 1194 351 1010 536 C812 733 558 707 350 492 C174 310 45 268 -230 425Z" fill="url(#graphite-ribbon-a)" />
            <path d="M-190 112 C92 40 269 95 428 260 C599 437 737 450 916 285 C1097 117 1303 56 1790 160" fill="none" stroke="url(#glass-edge-dark)" strokeWidth="5" opacity=".56" />
          </g>
          <g className="glass-ribbon glass-ribbon-two">
            <path d="M-190 518 C110 330 320 348 520 520 C705 679 839 790 1065 651 C1272 524 1450 435 1810 540 L1810 800 C1508 704 1325 744 1110 886 C850 1058 653 916 452 754 C246 588 80 617 -190 832Z" fill="url(#graphite-ribbon-b)" />
            <path d="M-150 541 C125 368 322 378 508 537 C704 703 857 817 1080 676 C1290 544 1468 476 1770 558" fill="none" stroke="url(#glass-edge-dark)" strokeWidth="4" opacity=".48" />
          </g>
          <g className="glass-ribbon glass-ribbon-three">
            <path d="M-140 892 C148 719 344 750 548 886 C772 1036 951 1099 1174 956 C1392 815 1555 794 1770 862 L1770 1170 L-140 1170Z" fill="url(#graphite-ribbon-c)" />
            <path d="M-100 921 C168 770 346 789 542 916 C764 1059 965 1123 1185 979 C1380 852 1542 835 1732 884" fill="none" stroke="url(#glass-edge-dark)" strokeWidth="5" opacity=".5" />
          </g>
          <path d="M110 250 C280 148 414 169 548 310 C684 454 828 486 951 399" fill="none" stroke="#8dd7df" strokeWidth="28" strokeLinecap="round" opacity=".10" filter="url(#soft-glass-shadow)" />
        </g>
      </svg>
    </div>
  );
}
