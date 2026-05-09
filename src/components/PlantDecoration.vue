<!-- src/components/PlantDecoration.vue -->
<template>
  <!-- 底部小森林装饰 -->
  <div class="forest-decoration">
    <svg viewBox="0 0 1920 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- 草地背景 -->
      <path d="M0 110 L0 50 Q150 20 300 40 Q450 60 600 35 Q750 10 900 40 Q1050 70 1200 40 Q1350 10 1500 45 Q1650 70 1800 35 L1920 50 L1920 110 Z" fill="#86efac"/>
      
      <!-- 灌木丛1 -->
      <g transform="translate(50, 40)">
        <ellipse cx="30" cy="40" rx="50" ry="38" fill="#4ade80"/>
        <ellipse cx="0" cy="50" rx="35" ry="28" fill="#22c55e"/>
        <ellipse cx="60" cy="45" rx="40" ry="32" fill="#16a34a"/>
        <ellipse cx="30" cy="30" rx="28" ry="22" fill="#86efac"/>
      </g>
      
      <!-- 灌木丛2 -->
      <g transform="translate(300, 45)">
        <ellipse cx="25" cy="35" rx="45" ry="32" fill="#4ade80"/>
        <ellipse cx="-10" cy="40" rx="30" ry="25" fill="#22c55e"/>
        <ellipse cx="50" cy="38" rx="35" ry="28" fill="#16a34a"/>
      </g>
      
      <!-- 灌木丛3 -->
      <g transform="translate(580, 42)">
        <ellipse cx="35" cy="38" rx="50" ry="35" fill="#4ade80"/>
        <ellipse cx="-5" cy="45" rx="35" ry="28" fill="#22c55e"/>
        <ellipse cx="65" cy="42" rx="40" ry="30" fill="#16a34a"/>
        <ellipse cx="35" cy="25" rx="25" ry="20" fill="#86efac"/>
      </g>
      
      <!-- 灌木丛4 -->
      <g transform="translate(900, 45)">
        <ellipse cx="30" cy="35" rx="48" ry="32" fill="#4ade80"/>
        <ellipse cx="-8" cy="40" rx="32" ry="26" fill="#22c55e"/>
        <ellipse cx="58" cy="38" rx="36" ry="28" fill="#16a34a"/>
      </g>
      
      <!-- 灌木丛5 -->
      <g transform="translate(1200, 42)">
        <ellipse cx="32" cy="38" rx="52" ry="36" fill="#4ade80"/>
        <ellipse cx="-10" cy="45" rx="36" ry="28" fill="#22c55e"/>
        <ellipse cx="68" cy="42" rx="42" ry="32" fill="#16a34a"/>
        <ellipse cx="32" cy="26" rx="28" ry="21" fill="#86efac"/>
      </g>
      
      <!-- 灌木丛6 -->
      <g transform="translate(1550, 48)">
        <ellipse cx="28" cy="33" rx="45" ry="30" fill="#4ade80"/>
        <ellipse cx="-6" cy="38" rx="30" ry="25" fill="#22c55e"/>
        <ellipse cx="54" cy="36" rx="34" ry="26" fill="#16a34a"/>
      </g>
      
      <!-- 小花1 -->
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="6" fill="#fbbf24"/>
        <circle cx="-3" cy="-3" r="3" fill="#fef3c7"/>
        <circle cx="3" cy="-3" r="3" fill="#fef3c7"/>
        <circle cx="0" cy="3" r="3" fill="#fef3c7"/>
      </g>
      
      <!-- 小花2 -->
      <g transform="translate(450, 75)">
        <circle cx="0" cy="0" r="5" fill="#fb7185"/>
        <circle cx="-2" cy="-2" r="2.5" fill="#fecdd3"/>
        <circle cx="2" cy="-2" r="2.5" fill="#fecdd3"/>
        <circle cx="0" cy="2" r="2.5" fill="#fecdd3"/>
      </g>
      
      <!-- 小花3 -->
      <g transform="translate(750, 72)">
        <circle cx="0" cy="0" r="5" fill="#a78bfa"/>
        <circle cx="-2" cy="-2" r="2.5" fill="#e9d5ff"/>
        <circle cx="2" cy="-2" r="2.5" fill="#e9d5ff"/>
        <circle cx="0" cy="2" r="2.5" fill="#e9d5ff"/>
      </g>
      
      <!-- 小花4 -->
      <g transform="translate(1050, 76)">
        <circle cx="0" cy="0" r="6" fill="#60a5fa"/>
        <circle cx="-3" cy="-3" r="3" fill="#dbeafe"/>
        <circle cx="3" cy="-3" r="3" fill="#dbeafe"/>
        <circle cx="0" cy="3" r="3" fill="#dbeafe"/>
      </g>
      
      <!-- 小花5 -->
      <g transform="translate(1350, 73)">
        <circle cx="0" cy="0" r="5" fill="#fb923c"/>
        <circle cx="-2" cy="-2" r="2.5" fill="#ffedd5"/>
        <circle cx="2" cy="-2" r="2.5" fill="#ffedd5"/>
        <circle cx="0" cy="2" r="2.5" fill="#ffedd5"/>
      </g>
      
      <!-- 小花6 -->
      <g transform="translate(1650, 74)">
        <circle cx="0" cy="0" r="5" fill="#34d399"/>
        <circle cx="-2" cy="-2" r="2.5" fill="#d1fae5"/>
        <circle cx="2" cy="-2" r="2.5" fill="#d1fae5"/>
        <circle cx="0" cy="2" r="2.5" fill="#d1fae5"/>
      </g>
      
      <!-- 蘑菇1 -->
      <g transform="translate(250, 60)">
        <rect x="-4" y="-15" width="8" height="15" fill="#92400e"/>
        <ellipse cx="0" cy="-20" rx="12" ry="12" fill="#fb7185"/>
        <circle cx="-5" cy="-22" r="2" fill="#fda4af"/>
        <circle cx="4" cy="-18" r="1.5" fill="#fda4af"/>
        <circle cx="-2" cy="-15" r="1" fill="#fda4af"/>
      </g>
      
      <!-- 蘑菇2 -->
      <g transform="translate(700, 62)">
        <rect x="-3" y="-12" width="6" height="12" fill="#78350f"/>
        <ellipse cx="0" cy="-17" rx="10" ry="10" fill="#a78bfa"/>
        <circle cx="-4" cy="-19" r="1.5" fill="#e9d5ff"/>
        <circle cx="3" cy="-15" r="1" fill="#e9d5ff"/>
      </g>
      
      <!-- 蘑菇3 -->
      <g transform="translate(1300, 61)">
        <rect x="-3.5" y="-14" width="7" height="14" fill="#92400e"/>
        <ellipse cx="0" cy="-19" rx="11" ry="11" fill="#fbbf24"/>
        <circle cx="-4" cy="-21" r="1.5" fill="#fef3c7"/>
        <circle cx="3" cy="-17" r="1" fill="#fef3c7"/>
      </g>
      
      <!-- 小石头 -->
      <ellipse cx="100" cy="92" rx="8" ry="4" fill="#9ca3af"/>
      <ellipse cx="380" cy="93" rx="6" ry="3" fill="#6b7280"/>
      <ellipse cx="650" cy="92" rx="7" ry="3.5" fill="#9ca3af"/>
      <ellipse cx="950" cy="93" rx="9" ry="4" fill="#6b7280"/>
      <ellipse cx="1250" cy="92" rx="7" ry="3.5" fill="#9ca3af"/>
      <ellipse cx="1550" cy="93" rx="8" ry="4" fill="#6b7280"/>
      <ellipse cx="1800" cy="92" rx="6" ry="3" fill="#9ca3af"/>
      
      <!-- 草丛细节 -->
      <path d="M80 65 Q85 55 90 65" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M380 68 Q384 58 388 68" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M680 66 Q685 56 690 66" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M1000 67 Q1005 57 1010 67" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M1350 65 Q1355 55 1360 65" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M1650 66 Q1655 56 1660 66" stroke="#22c55e" stroke-width="2" fill="none"/>
      <path d="M1850 65 Q1855 55 1860 65" stroke="#22c55e" stroke-width="2" fill="none"/>
    </svg>
  </div>
</template>

<script setup>
// 纯装饰组件，无需逻辑
</script>

<style scoped>
.forest-decoration {
  position: fixed;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 9998;
  pointer-events: none;
}

.forest-decoration svg {
  width: 100%;
  height: 100%;
}

</style>