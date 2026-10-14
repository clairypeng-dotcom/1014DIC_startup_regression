/**
 * Machine Learning Regression Analytics Dashboard (CRISP-DM)
 * Multi-Dataset Controller: 50 Startups & Boston Housing
 * Pair programmed with Antigravity AI
 */

// ==========================================================================
// 1. DATASETS DEFINITIONS
// ==========================================================================

// Embedded 50 Startups Dataset (Offline compatibility)
const STARTUPS_DATA = [
  {"R&D Spend": 165349.2, "Administration": 136897.8, "Marketing Spend": 471784.1, "State": "New York", "Profit": 192261.83},
  {"R&D Spend": 162597.7, "Administration": 151377.59, "Marketing Spend": 443898.53, "State": "California", "Profit": 191792.06},
  {"R&D Spend": 153441.51, "Administration": 101145.55, "Marketing Spend": 407934.54, "State": "Florida", "Profit": 191050.39},
  {"R&D Spend": 144372.41, "Administration": 118671.85, "Marketing Spend": 383199.62, "State": "New York", "Profit": 182901.99},
  {"R&D Spend": 142107.34, "Administration": 91391.77, "Marketing Spend": 366168.42, "State": "Florida", "Profit": 166187.94},
  {"R&D Spend": 131876.9, "Administration": 99814.71, "Marketing Spend": 362861.36, "State": "New York", "Profit": 156991.12},
  {"R&D Spend": 134615.46, "Administration": 147198.87, "Marketing Spend": 127716.82, "State": "California", "Profit": 156122.51},
  {"R&D Spend": 130298.13, "Administration": 145530.06, "Marketing Spend": 323876.68, "State": "Florida", "Profit": 155752.6},
  {"R&D Spend": 120542.52, "Administration": 148718.95, "Marketing Spend": 311613.29, "State": "New York", "Profit": 152211.77},
  {"R&D Spend": 123334.88, "Administration": 108679.17, "Marketing Spend": 304981.62, "State": "California", "Profit": 149759.96},
  {"R&D Spend": 101913.08, "Administration": 110594.11, "Marketing Spend": 229160.95, "State": "Florida", "Profit": 146121.95},
  {"R&D Spend": 100671.96, "Administration": 91790.61, "Marketing Spend": 249744.55, "State": "California", "Profit": 144259.4},
  {"R&D Spend": 93863.75, "Administration": 127320.38, "Marketing Spend": 249839.44, "State": "Florida", "Profit": 141585.52},
  {"R&D Spend": 91992.39, "Administration": 135495.07, "Marketing Spend": 252664.93, "State": "California", "Profit": 134307.35},
  {"R&D Spend": 119943.24, "Administration": 156547.42, "Marketing Spend": 256512.92, "State": "Florida", "Profit": 132602.65},
  {"R&D Spend": 114523.61, "Administration": 122616.84, "Marketing Spend": 261776.23, "State": "New York", "Profit": 129917.04},
  {"R&D Spend": 78013.11, "Administration": 121597.55, "Marketing Spend": 264346.06, "State": "California", "Profit": 126992.93},
  {"R&D Spend": 94657.16, "Administration": 145077.58, "Marketing Spend": 282574.31, "State": "New York", "Profit": 125370.37},
  {"R&D Spend": 91749.16, "Administration": 114175.79, "Marketing Spend": 294919.57, "State": "Florida", "Profit": 124266.9},
  {"R&D Spend": 86419.7, "Administration": 153514.11, "Marketing Spend": 0.0, "State": "New York", "Profit": 122776.86},
  {"R&D Spend": 76253.86, "Administration": 113867.3, "Marketing Spend": 298664.47, "State": "California", "Profit": 118474.03},
  {"R&D Spend": 78389.47, "Administration": 153773.43, "Marketing Spend": 299737.29, "State": "New York", "Profit": 111313.02},
  {"R&D Spend": 73994.56, "Administration": 122782.75, "Marketing Spend": 303319.26, "State": "Florida", "Profit": 110352.25},
  {"R&D Spend": 67532.53, "Administration": 105751.03, "Marketing Spend": 304768.73, "State": "Florida", "Profit": 108733.99},
  {"R&D Spend": 77044.01, "Administration": 99281.34, "Marketing Spend": 140574.81, "State": "New York", "Profit": 108552.04},
  {"R&D Spend": 64664.71, "Administration": 139553.16, "Marketing Spend": 137962.62, "State": "California", "Profit": 107404.34},
  {"R&D Spend": 75328.87, "Administration": 144135.98, "Marketing Spend": 134050.07, "State": "Florida", "Profit": 105733.54},
  {"R&D Spend": 72107.6, "Administration": 127864.55, "Marketing Spend": 353183.81, "State": "New York", "Profit": 105008.31},
  {"R&D Spend": 66051.52, "Administration": 182645.56, "Marketing Spend": 118148.2, "State": "Florida", "Profit": 103282.38},
  {"R&D Spend": 65605.48, "Administration": 153032.06, "Marketing Spend": 107138.38, "State": "New York", "Profit": 101004.64},
  {"R&D Spend": 61994.48, "Administration": 115641.28, "Marketing Spend": 91131.24, "State": "Florida", "Profit": 99937.59},
  {"R&D Spend": 61136.38, "Administration": 152701.92, "Marketing Spend": 88218.23, "State": "New York", "Profit": 97483.56},
  {"R&D Spend": 63408.86, "Administration": 129219.61, "Marketing Spend": 46085.25, "State": "California", "Profit": 97427.84},
  {"R&D Spend": 55493.95, "Administration": 103057.49, "Marketing Spend": 214634.81, "State": "Florida", "Profit": 96778.92},
  {"R&D Spend": 46426.07, "Administration": 157693.92, "Marketing Spend": 210797.67, "State": "California", "Profit": 96712.8},
  {"R&D Spend": 46014.02, "Administration": 85047.44, "Marketing Spend": 205517.64, "State": "New York", "Profit": 96479.51},
  {"R&D Spend": 28663.76, "Administration": 127056.21, "Marketing Spend": 201126.82, "State": "Florida", "Profit": 90708.19},
  {"R&D Spend": 44069.95, "Administration": 51283.14, "Marketing Spend": 197029.42, "State": "California", "Profit": 89949.14},
  {"R&D Spend": 20229.59, "Administration": 65947.93, "Marketing Spend": 185265.1, "State": "New York", "Profit": 81229.06},
  {"R&D Spend": 38558.51, "Administration": 82982.09, "Marketing Spend": 174999.3, "State": "California", "Profit": 81005.76},
  {"R&D Spend": 28754.33, "Administration": 118546.05, "Marketing Spend": 172795.67, "State": "California", "Profit": 78239.91},
  {"R&D Spend": 27892.92, "Administration": 84710.77, "Marketing Spend": 164470.71, "State": "Florida", "Profit": 77798.83},
  {"R&D Spend": 23640.93, "Administration": 96189.63, "Marketing Spend": 148001.11, "State": "California", "Profit": 71498.49},
  {"R&D Spend": 15505.73, "Administration": 127382.3, "Marketing Spend": 35534.17, "State": "New York", "Profit": 69758.98},
  {"R&D Spend": 13187.67, "Administration": 154806.68, "Marketing Spend": 2971.55, "State": "California", "Profit": 64926.08},
  {"R&D Spend": 1000.23, "Administration": 124153.04, "Marketing Spend": 1903.93, "State": "New York", "Profit": 64926.08},
  {"R&D Spend": 1315.46, "Administration": 115816.21, "Marketing Spend": 297114.46, "State": "Florida", "Profit": 49490.75},
  {"R&D Spend": 0.0, "Administration": 135426.92, "Marketing Spend": 0.0, "State": "California", "Profit": 42559.73},
  {"R&D Spend": 542.05, "Administration": 51743.15, "Marketing Spend": 0.0, "State": "New York", "Profit": 35673.41},
  {"R&D Spend": 0.0, "Administration": 116983.8, "Marketing Spend": 45173.06, "State": "California", "Profit": 14681.4}
];

// 50 Startups Forward Selection Empirical Results
const FS_DATA_STARTUPS = [
  { step: 1, feature: "R&D Spend", cvRmse: 9745.40, testRmse: 8274.87, testR2: 0.9465 },
  { step: 2, feature: "Marketing Spend", cvRmse: 9482.34, testRmse: 8198.80, testR2: 0.9474 },
  { step: 3, feature: "Administration", cvRmse: 9678.08, testRmse: 8803.78, testR2: 0.9394 },
  { step: 4, feature: "State_Florida", cvRmse: 9885.56, testRmse: 9068.54, testR2: 0.9357 },
  { step: 5, feature: "State_New York", cvRmse: 10158.66, testRmse: 9137.99, testR2: 0.9347 }
];

// Boston Housing Forward Selection Empirical Results (13 steps)
const FS_DATA_BOSTON = [
  { step: 1, feature: "lstat", cvRmse: 6.0468, testRmse: 6.8071, testR2: 0.4310 },
  { step: 2, feature: "ptratio", cvRmse: 5.4163, testRmse: 7.1752, testR2: 0.3677 },
  { step: 3, feature: "rm", cvRmse: 4.9392, testRmse: 6.4558, testR2: 0.4882 },
  { step: 4, feature: "b", cvRmse: 4.8741, testRmse: 6.3836, testR2: 0.4996 },
  { step: 5, feature: "chas", cvRmse: 4.8263, testRmse: 6.2939, testR2: 0.5135 },
  { step: 6, feature: "dis", cvRmse: 4.7971, testRmse: 6.0854, testR2: 0.5452 },
  { step: 7, feature: "nox", cvRmse: 4.6811, testRmse: 5.9729, testR2: 0.5619 },
  { step: 8, feature: "crim", cvRmse: 4.6656, testRmse: 6.0156, testR2: 0.5556 },
  { step: 9, feature: "zn", cvRmse: 4.6561, testRmse: 5.9582, testR2: 0.5640 },
  { step: 10, feature: "indus", cvRmse: 4.6560, testRmse: 5.9707, testR2: 0.5622 },
  { step: 11, feature: "rad", cvRmse: 4.6668, testRmse: 5.8583, testR2: 0.5785 },
  { step: 12, feature: "tax", cvRmse: 4.6143, testRmse: 5.7802, testR2: 0.5897 },
  { step: 13, feature: "age", cvRmse: 4.6493, testRmse: 5.7835, testR2: 0.5892 }
];

// 50 Startups Empirical Models
const MODELS_STARTUPS = {
  optimal: {
    name: "Optimal 2-Feature Model (R&D + Marketing)",
    intercept: 46346.33876,
    coef: { rd: 0.788618, marketing: 0.032577, admin: 0.0, stateFL: 0.0, stateNY: 0.0 },
    r2: 0.9474,
    rmse: 8198.80
  },
  full: {
    name: "Full 5-Feature Baseline Model",
    intercept: 42554.16762,
    coef: { rd: 0.773467, marketing: 0.036610, admin: 0.032885, stateFL: -959.284, stateNY: 699.369 },
    r2: 0.9347,
    rmse: 9137.99
  }
};

// Boston Housing Empirical Models
const MODELS_BOSTON = {
  optimal: {
    name: "Optimal 12-Feature Model (without Age)",
    intercept: 38.19538,
    coef: {
      lstat: -0.496990,
      ptratio: -1.047631,
      rm: 3.689463,
      b: 0.008044,
      chas: 2.335575,
      dis: -1.373146,
      nox: -16.394327,
      crim: -0.119145,
      zn: 0.045249,
      indus: 0.005759,
      rad: 0.245226,
      tax: -0.011009,
      age: 0.0
    },
    r2: 0.5897,
    rmse: 5.7802
  },
  full: {
    name: "Full 13-Feature Baseline Model",
    intercept: 38.09169,
    coef: {
      crim: -0.119443,
      zn: 0.044780,
      indus: 0.005485,
      chas: 2.340804,
      nox: -16.123604,
      rm: 3.708709,
      age: -0.003121,
      dis: -1.386397,
      rad: 0.244178,
      tax: -0.010990,
      ptratio: -1.045921,
      b: 0.008110,
      lstat: -0.492793
    },
    r2: 0.5892,
    rmse: 5.7835
  },
  core: {
    name: "Core 3-Feature Hedonic Model (RM + LSTAT + PTRATIO)",
    intercept: 24.03109,
    coef: {
      rm: 4.264947,
      lstat: -0.575521,
      ptratio: -1.136547
    },
    r2: 0.4882,
    rmse: 6.4558
  }
};

// Global App State
let currentDataset = "startups"; // "startups" | "boston"

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initProblemDropdown();
  initPhaseTabs();
  initForwardSelectionChart();
  initStartupSimulator();
  initBostonSimulator();
  initStartupDatasetExplorer();
  initBostonDatasetExplorer();
  initCustomDatasetPipeline();

  // Check URL hash on load
  if (window.location.hash === "#boston") {
    switchDataset("boston");
  } else if (window.location.hash === "#custom") {
    switchDataset("custom");
  }
});

/* ==========================================================================
   PROBLEM DROPDOWN WINDOW & DATASET SWITCHER
   ========================================================================== */
function initProblemDropdown() {
  const triggers = document.querySelectorAll(".dropdown-trigger");
  const windows = document.querySelectorAll(".dropdown-window");
  const options = document.querySelectorAll(".dropdown-option");

  // Toggle dropdown window
  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentDropdown = trigger.closest(".problem-dropdown");
      const targetWindow = parentDropdown ? parentDropdown.querySelector(".dropdown-window") : null;

      // Close other open dropdowns first
      windows.forEach(w => {
        if (w !== targetWindow) {
          w.classList.remove("open");
          const otherTrigger = w.closest(".problem-dropdown")?.querySelector(".dropdown-trigger");
          if (otherTrigger) otherTrigger.classList.remove("open");
        }
      });

      if (targetWindow) {
        const isOpen = targetWindow.classList.toggle("open");
        trigger.classList.toggle("open", isOpen);
        trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });
  });

  // Select problem from dropdown window options
  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetDataset = opt.getAttribute("data-dataset");
      if (targetDataset) {
        switchDataset(targetDataset);
      }
      closeAllDropdowns();
    });

    // Keyboard accessibility (Enter or Space)
    opt.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const targetDataset = opt.getAttribute("data-dataset");
        if (targetDataset) {
          switchDataset(targetDataset);
        }
        closeAllDropdowns();
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    closeAllDropdowns();
  });

  // Close dropdowns on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
    }
  });

  function closeAllDropdowns() {
    windows.forEach(w => w.classList.remove("open"));
    triggers.forEach(t => {
      t.classList.remove("open");
      t.setAttribute("aria-expanded", "false");
    });
  }
}

function switchDataset(dataset) {
  currentDataset = dataset;
  const isBoston = dataset === "boston";
  const isCustom = dataset === "custom";

  // 1. Update Dropdown Triggers in Navbar & Hero
  const navIcon = document.getElementById("navProblemIcon");
  const navTitle = document.getElementById("navProblemTitle");
  const navBadge = document.getElementById("navProblemBadge");

  const heroIcon = document.getElementById("heroProblemIcon");
  const heroTitle = document.getElementById("heroProblemTitle");
  const heroBadge = document.getElementById("heroProblemBadge");

  if (isCustom) {
    if (navIcon) navIcon.textContent = "🌐";
    if (navTitle) navTitle.textContent = "Problem 3: Custom Dataset";
    if (navBadge) navBadge.textContent = "Auto ML";

    if (heroIcon) heroIcon.textContent = "🌐";
    if (heroTitle) heroTitle.textContent = "Problem 3: Custom Tabular Dataset";
    if (heroBadge) heroBadge.textContent = "Auto ML";
  } else if (isBoston) {
    if (navIcon) navIcon.textContent = "🏡";
    if (navTitle) navTitle.textContent = "Problem 2: Boston Housing";
    if (navBadge) navBadge.textContent = "k=12 Optimal";

    if (heroIcon) heroIcon.textContent = "🏡";
    if (heroTitle) heroTitle.textContent = "Problem 2: Boston Housing Valuation";
    if (heroBadge) heroBadge.textContent = "k=12 Optimal";
  } else {
    if (navIcon) navIcon.textContent = "🚀";
    if (navTitle) navTitle.textContent = "Problem 1: 50 Startups";
    if (navBadge) navBadge.textContent = "k=2 Optimal";

    if (heroIcon) heroIcon.textContent = "🚀";
    if (heroTitle) heroTitle.textContent = "Problem 1: 50 Startups Profitability";
    if (heroBadge) heroBadge.textContent = "k=2 Optimal";
  }

  // 2. Update Active Status on all Dropdown Options
  document.querySelectorAll(".dropdown-option").forEach(opt => {
    const isTarget = opt.getAttribute("data-dataset") === dataset;
    opt.classList.toggle("active", isTarget);
    opt.setAttribute("aria-selected", isTarget ? "true" : "false");
  });

  // 3. Toggle Content Blocks across all Sections
  document.querySelectorAll('.dataset-content').forEach(el => {
    const elDataset = el.getAttribute("data-dataset");
    if (elDataset) {
      el.classList.toggle("hidden-dataset", elDataset !== dataset);
    }
  });

  // 4. Redraw Forward Selection Chart for the newly active dataset
  if (typeof window.redrawFsChart === "function") {
    window.redrawFsChart();
  }
}

/* ==========================================================================
   2. CRISP-DM PHASE TABS NAVIGATION
   ========================================================================== */
function initPhaseTabs() {
  // Support phase tabs for startups, boston, and custom
  ["startups", "boston", "custom"].forEach(ds => {
    const container = document.getElementById(`phaseTabContainer_${ds}`);
    if (!container) return;

    const tabs = container.querySelectorAll(".phase-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetPhase = tab.getAttribute("data-phase");
        const parentSection = container.closest(".dataset-content");
        if (!parentSection) return;

        parentSection.querySelectorAll(".phase-tab").forEach(t => t.classList.remove("active"));
        parentSection.querySelectorAll(".phase-panel").forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        const targetPanel = document.getElementById(`panelPhase${targetPhase}_${ds}`);
        if (targetPanel) {
          targetPanel.classList.add("active");
        }
      });
    });
  });
}

/* ==========================================================================
   3. FORWARD SELECTION CANVAS INTERACTIVE CHART (DUAL DATASET)
   ========================================================================== */
function initForwardSelectionChart() {
  const canvas = document.getElementById("fsChartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeAndDraw() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawChart(rect.width, rect.height);
  }

  function drawChart(w, h) {
    ctx.clearRect(0, 0, w, h);

    const isBoston = currentDataset === "boston";
    const isCustom = currentDataset === "custom";
    let data = FS_DATA_STARTUPS;
    let optimalIdx = 1; // Step 2 for Startups

    if (isCustom && window.customFsData && window.customFsData.length > 0) {
      data = window.customFsData;
      optimalIdx = window.customOptimalIdx ?? 0;
    } else if (isBoston) {
      data = FS_DATA_BOSTON;
      optimalIdx = 11; // Step 12 for Boston
    }

    const padding = { top: 40, right: 65, bottom: 55, left: 75 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Y Axis ranges
    let minRmse, maxRmse, minR2, maxR2;
    if (isCustom) {
      const allRmse = data.map(d => [d.cvRmse, d.testRmse]).flat();
      const allR2 = data.map(d => d.testR2);
      minRmse = Math.min(...allRmse) * 0.92;
      maxRmse = Math.max(...allRmse) * 1.08;
      minR2 = Math.max(-0.5, Math.min(...allR2) * 0.95);
      maxR2 = Math.min(1.0, Math.max(...allR2) * 1.02);
      if (minRmse === maxRmse) { minRmse *= 0.8; maxRmse *= 1.2; }
      if (minR2 === maxR2) { minR2 -= 0.1; maxR2 += 0.1; }
    } else if (isBoston) {
      minRmse = 4.2;
      maxRmse = 7.5;
      minR2 = 0.30;
      maxR2 = 0.65;
    } else {
      minRmse = 7800;
      maxRmse = 10600;
      minR2 = 0.930;
      maxR2 = 0.950;
    }

    const getY_RMSE = val => padding.top + chartH - ((val - minRmse) / (maxRmse - minRmse)) * chartH;
    const getY_R2 = val => padding.top + chartH - ((val - minR2) / (maxR2 - minR2)) * chartH;
    const getX = stepIndex => padding.left + (stepIndex / Math.max(1, data.length - 1)) * chartW;

    // 1. Draw horizontal grid lines & Left Y labels (RMSE)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 1;

    const numTicks = 6;
    for (let i = 0; i <= numTicks; i++) {
      const val = minRmse + (i / numTicks) * (maxRmse - minRmse);
      const y = getY_RMSE(val);

      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      let lbl;
      if (isCustom) {
        lbl = val >= 1000 ? `$${Math.round(val).toLocaleString()}` : val.toFixed(2);
      } else if (isBoston) {
        lbl = `$${val.toFixed(1)}k`;
      } else {
        lbl = `$${Math.round(val).toLocaleString()}`;
      }
      ctx.fillText(lbl, padding.left - 10, y + 4);
    }

    // Right Y-axis labels (R²)
    for (let i = 0; i <= numTicks; i++) {
      const r2 = minR2 + (i / numTicks) * (maxR2 - minR2);
      const y = getY_R2(r2);
      ctx.fillStyle = "#a855f7";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "left";
      ctx.fillText(r2.toFixed(isBoston ? 2 : 3), w - padding.right + 10, y + 4);
    }

    // 2. Draw vertical grid & X labels
    data.forEach((item, idx) => {
      const x = getX(idx);
      ctx.strokeStyle = idx === optimalIdx ? "rgba(16, 185, 129, 0.25)" : "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = idx === optimalIdx ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + chartH);
      ctx.stroke();

      // Step text
      ctx.fillStyle = idx === optimalIdx ? "#10b981" : "#94a3b8";
      ctx.font = idx === optimalIdx ? "bold 11px Outfit, sans-serif" : "10px Outfit, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`k=${item.step}`, x, padding.top + chartH + 20);

      // Feature text
      ctx.fillStyle = idx === optimalIdx ? "#10b981" : "#64748b";
      ctx.font = "9px JetBrains Mono, monospace";
      const featText = isCustom ? (item.feature.length > 10 ? item.feature.slice(0, 9) + "…" : item.feature) : (isBoston ? item.feature : `+${item.feature.split(" ")[0]}`);
      ctx.fillText(featText, x, padding.top + chartH + 34);
    });

    // 3. Highlight Optimal Vertical Band
    const optX = getX(optimalIdx);
    ctx.fillStyle = "rgba(16, 185, 129, 0.07)";
    const bandWidth = chartW / data.length;
    ctx.fillRect(optX - bandWidth / 2, padding.top, bandWidth, chartH);

    // Helper: draw continuous line with markers
    function drawCurve(key, color, isR2 = false) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      data.forEach((item, idx) => {
        const x = getX(idx);
        const y = isR2 ? getY_R2(item[key]) : getY_RMSE(item[key]);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Points
      data.forEach((item, idx) => {
        const x = getX(idx);
        const y = isR2 ? getY_R2(item[key]) : getY_RMSE(item[key]);
        const isOpt = idx === optimalIdx;

        ctx.fillStyle = isOpt ? color : "#07090e";
        ctx.strokeStyle = color;
        ctx.lineWidth = isOpt ? 3 : 2;
        ctx.beginPath();
        ctx.arc(x, y, isOpt ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    // Draw Train CV RMSE (Cyan)
    drawCurve("cvRmse", "#38bdf8", false);

    // Draw Test RMSE (Emerald Green)
    drawCurve("testRmse", "#10b981", false);

    // Draw Test R² (Purple)
    drawCurve("testR2", "#a855f7", true);
  }

  window.addEventListener("resize", resizeAndDraw);
  window.redrawFsChart = resizeAndDraw;
  resizeAndDraw();
}

/* ==========================================================================
   4. 50 STARTUPS INTERACTIVE PROFIT SIMULATOR
   ========================================================================== */
function initStartupSimulator() {
  const rangeRd = document.getElementById("rangeRd");
  const rangeMarketing = document.getElementById("rangeMarketing");
  const rangeAdmin = document.getElementById("rangeAdmin");
  const selectState = document.getElementById("selectState");
  const modelSelect = document.getElementById("simModelSelect");
  const btnReset = document.getElementById("btnResetSim");

  if (!rangeRd) return;

  const displayRd = document.getElementById("displayRd");
  const displayMarketing = document.getElementById("displayMarketing");
  const displayAdmin = document.getElementById("displayAdmin");

  const singleResultBox = document.getElementById("singleResultBox");
  const dualCompareBox = document.getElementById("dualCompareBox");
  const resModelLabel = document.getElementById("resModelLabel");
  const valPredictedProfit = document.getElementById("valPredictedProfit");
  const valProfitMargin = document.getElementById("valProfitMargin");
  const valTotalSpend = document.getElementById("valTotalSpend");

  const compValOptimal = document.getElementById("compValOptimal");
  const compValFull = document.getElementById("compValFull");

  const amtBase = document.getElementById("amtBase");
  const amtRd = document.getElementById("amtRd");
  const amtMarketing = document.getElementById("amtMarketing");
  const amtAdmin = document.getElementById("amtAdmin");

  const barBase = document.getElementById("barBase");
  const barRd = document.getElementById("barRd");
  const barMarketing = document.getElementById("barMarketing");
  const barAdmin = document.getElementById("barAdmin");
  const adminNotice = document.getElementById("adminNotice");

  function formatMoney(num) {
    return "$" + Math.round(num).toLocaleString();
  }

  function updatePrediction() {
    const rd = parseFloat(rangeRd.value);
    const marketing = parseFloat(rangeMarketing.value);
    const admin = parseFloat(rangeAdmin.value);
    const state = selectState.value;
    const mode = modelSelect.value;

    displayRd.textContent = formatMoney(rd);
    displayMarketing.textContent = formatMoney(marketing);
    displayAdmin.textContent = formatMoney(admin);

    const optProfit = MODELS_STARTUPS.optimal.intercept +
                      MODELS_STARTUPS.optimal.coef.rd * rd +
                      MODELS_STARTUPS.optimal.coef.marketing * marketing;

    let statePenalty = 0;
    if (state === "Florida") statePenalty = MODELS_STARTUPS.full.coef.stateFL;
    else if (state === "New York") statePenalty = MODELS_STARTUPS.full.coef.stateNY;

    const fullProfit = MODELS_STARTUPS.full.intercept +
                       MODELS_STARTUPS.full.coef.rd * rd +
                       MODELS_STARTUPS.full.coef.admin * admin +
                       MODELS_STARTUPS.full.coef.marketing * marketing +
                       statePenalty;

    const totalSpend = rd + marketing + admin;
    valTotalSpend.textContent = `Total Budget: ${formatMoney(totalSpend)}`;

    if (mode === "compare") {
      singleResultBox.classList.add("hidden");
      dualCompareBox.classList.remove("hidden");
      compValOptimal.textContent = formatMoney(optProfit);
      compValFull.textContent = formatMoney(fullProfit);
      adminNotice.textContent = "Admin & State included only in Full Model comparison.";
    } else {
      singleResultBox.classList.remove("hidden");
      dualCompareBox.classList.add("hidden");

      if (mode === "optimal") {
        resModelLabel.textContent = "Projected Operating Profit (Optimal k=2 Model)";
        valPredictedProfit.textContent = formatMoney(optProfit);
        const margin = ((optProfit / totalSpend) * 100).toFixed(1);
        valProfitMargin.textContent = `Estimated Profit / Spend: ${margin}%`;
        adminNotice.textContent = "Ignored in Optimal 2-feature model to minimize prediction variance.";

        const baseImpact = MODELS_STARTUPS.optimal.intercept;
        const rdImpact = MODELS_STARTUPS.optimal.coef.rd * rd;
        const mktImpact = MODELS_STARTUPS.optimal.coef.marketing * marketing;

        amtBase.textContent = `+${formatMoney(baseImpact)}`;
        amtRd.textContent = `+${formatMoney(rdImpact)}`;
        amtMarketing.textContent = `+${formatMoney(mktImpact)}`;
        amtAdmin.textContent = "$0.00 (Excluded)";

        const maxImpact = Math.max(baseImpact, rdImpact, mktImpact, 1);
        barBase.style.width = `${Math.min(100, (baseImpact / maxImpact) * 100)}%`;
        barRd.style.width = `${Math.min(100, (rdImpact / maxImpact) * 100)}%`;
        barMarketing.style.width = `${Math.min(100, (mktImpact / maxImpact) * 100)}%`;
        barAdmin.style.width = "0%";
      } else {
        resModelLabel.textContent = "Projected Operating Profit (Full Baseline Model)";
        valPredictedProfit.textContent = formatMoney(fullProfit);
        const margin = ((fullProfit / totalSpend) * 100).toFixed(1);
        valProfitMargin.textContent = `Estimated Profit / Spend: ${margin}%`;
        adminNotice.textContent = "Active in Full Baseline model.";

        const baseImpact = MODELS_STARTUPS.full.intercept;
        const rdImpact = MODELS_STARTUPS.full.coef.rd * rd;
        const mktImpact = MODELS_STARTUPS.full.coef.marketing * marketing;
        const admImpact = MODELS_STARTUPS.full.coef.admin * admin;

        amtBase.textContent = `+${formatMoney(baseImpact)}`;
        amtRd.textContent = `+${formatMoney(rdImpact)}`;
        amtMarketing.textContent = `+${formatMoney(mktImpact)}`;
        amtAdmin.textContent = `+${formatMoney(admImpact)}`;

        const maxImpact = Math.max(baseImpact, rdImpact, mktImpact, admImpact, 1);
        barBase.style.width = `${Math.min(100, (baseImpact / maxImpact) * 100)}%`;
        barRd.style.width = `${Math.min(100, (rdImpact / maxImpact) * 100)}%`;
        barMarketing.style.width = `${Math.min(100, (mktImpact / maxImpact) * 100)}%`;
        barAdmin.style.width = `${Math.min(100, (admImpact / maxImpact) * 100)}%`;
      }
    }
  }

  [rangeRd, rangeMarketing, rangeAdmin, selectState, modelSelect].forEach(el => {
    el.addEventListener("input", updatePrediction);
    el.addEventListener("change", updatePrediction);
  });

  btnReset.addEventListener("click", () => {
    rangeRd.value = 100000;
    rangeMarketing.value = 250000;
    rangeAdmin.value = 120000;
    selectState.value = "California";
    modelSelect.value = "optimal";
    updatePrediction();
  });

  updatePrediction();
}

/* ==========================================================================
   5. BOSTON HOUSING LIVE VALUATION ESTIMATOR
   ========================================================================== */
function initBostonSimulator() {
  const rangeRm = document.getElementById("bostonRangeRm");
  const rangeLstat = document.getElementById("bostonRangeLstat");
  const rangePtratio = document.getElementById("bostonRangePtratio");
  const rangeCrim = document.getElementById("bostonRangeCrim");
  const rangeTax = document.getElementById("bostonRangeTax");
  const rangeDis = document.getElementById("bostonRangeDis");
  const rangeNox = document.getElementById("bostonRangeNox");
  const checkChas = document.getElementById("bostonCheckChas");
  const modelSelect = document.getElementById("bostonModelSelect");
  const btnReset = document.getElementById("btnResetBostonSim");

  if (!rangeRm) return;

  const displayRm = document.getElementById("displayBostonRm");
  const displayLstat = document.getElementById("displayBostonLstat");
  const displayPtratio = document.getElementById("displayBostonPtratio");
  const displayCrim = document.getElementById("displayBostonCrim");
  const displayTax = document.getElementById("displayBostonTax");
  const displayDis = document.getElementById("displayBostonDis");
  const displayNox = document.getElementById("displayBostonNox");

  const singleResultBox = document.getElementById("bostonSingleResultBox");
  const dualCompareBox = document.getElementById("bostonDualCompareBox");
  const resModelLabel = document.getElementById("bostonResModelLabel");
  const valPredictedPrice = document.getElementById("valBostonPredictedPrice");
  const valConfidenceBand = document.getElementById("valBostonConfidenceBand");
  const valTaxAssessment = document.getElementById("valBostonTaxAssessment");

  const compValOptimal = document.getElementById("compBostonValOptimal");
  const compValFull = document.getElementById("compBostonValFull");

  const amtBase = document.getElementById("amtBostonBase");
  const amtRm = document.getElementById("amtBostonRm");
  const amtLstat = document.getElementById("amtBostonLstat");
  const amtPtratio = document.getElementById("amtBostonPtratio");
  const amtChas = document.getElementById("amtBostonChas");

  const barBase = document.getElementById("barBostonBase");
  const barRm = document.getElementById("barBostonRm");
  const barLstat = document.getElementById("barBostonLstat");
  const barPtratio = document.getElementById("barBostonPtratio");
  const barChas = document.getElementById("barBostonChas");

  function formatDollar(valK) {
    const dollars = Math.round(valK * 1000);
    return `$${dollars.toLocaleString()} ($${valK.toFixed(2)}k)`;
  }

  function updateBostonPrediction() {
    const rm = parseFloat(rangeRm.value);
    const lstat = parseFloat(rangeLstat.value);
    const ptratio = parseFloat(rangePtratio.value);
    const crim = parseFloat(rangeCrim.value);
    const tax = parseFloat(rangeTax.value);
    const dis = parseFloat(rangeDis.value);
    const nox = parseFloat(rangeNox.value);
    const chas = checkChas.checked ? 1 : 0;
    const mode = modelSelect.value;

    displayRm.textContent = `${rm.toFixed(1)} rooms`;
    displayLstat.textContent = `${lstat.toFixed(1)}%`;
    displayPtratio.textContent = `${ptratio.toFixed(1)}:1`;
    displayCrim.textContent = `${crim.toFixed(2)}`;
    displayTax.textContent = `$${Math.round(tax)}`;
    displayDis.textContent = `${dis.toFixed(1)} mi`;
    displayNox.textContent = `${nox.toFixed(2)} ppm`;

    // Fixed default medians for remaining features (zn=11.36, indus=11.14, rad=9.5, b=356.67, age=68.57)
    const zn = 11.36;
    const indus = 11.14;
    const rad = 9.5;
    const b = 356.67;
    const age = 68.57;

    // Optimal 12-feature model
    const optPriceK = MODELS_BOSTON.optimal.intercept +
      MODELS_BOSTON.optimal.coef.rm * rm +
      MODELS_BOSTON.optimal.coef.lstat * lstat +
      MODELS_BOSTON.optimal.coef.ptratio * ptratio +
      MODELS_BOSTON.optimal.coef.crim * crim +
      MODELS_BOSTON.optimal.coef.tax * tax +
      MODELS_BOSTON.optimal.coef.dis * dis +
      MODELS_BOSTON.optimal.coef.nox * nox +
      MODELS_BOSTON.optimal.coef.chas * chas +
      MODELS_BOSTON.optimal.coef.zn * zn +
      MODELS_BOSTON.optimal.coef.indus * indus +
      MODELS_BOSTON.optimal.coef.rad * rad +
      MODELS_BOSTON.optimal.coef.b * b;

    // Full 13-feature model
    const fullPriceK = MODELS_BOSTON.full.intercept +
      MODELS_BOSTON.full.coef.rm * rm +
      MODELS_BOSTON.full.coef.lstat * lstat +
      MODELS_BOSTON.full.coef.ptratio * ptratio +
      MODELS_BOSTON.full.coef.crim * crim +
      MODELS_BOSTON.full.coef.tax * tax +
      MODELS_BOSTON.full.coef.dis * dis +
      MODELS_BOSTON.full.coef.nox * nox +
      MODELS_BOSTON.full.coef.chas * chas +
      MODELS_BOSTON.full.coef.zn * zn +
      MODELS_BOSTON.full.coef.indus * indus +
      MODELS_BOSTON.full.coef.rad * rad +
      MODELS_BOSTON.full.coef.b * b +
      MODELS_BOSTON.full.coef.age * age;

    // Core 3-feature model
    const corePriceK = MODELS_BOSTON.core.intercept +
      MODELS_BOSTON.core.coef.rm * rm +
      MODELS_BOSTON.core.coef.lstat * lstat +
      MODELS_BOSTON.core.coef.ptratio * ptratio;

    // Bound price between $5k and $50k (dataset boundaries)
    const clamp = val => Math.max(5.0, Math.min(50.0, val));
    const safeOptK = clamp(optPriceK);
    const safeFullK = clamp(fullPriceK);
    const safeCoreK = clamp(corePriceK);

    valTaxAssessment.textContent = `Est. Property Tax: $${Math.round((safeOptK * 1000 * (tax / 10000))).toLocaleString()}/yr`;

    if (mode === "compare") {
      singleResultBox.classList.add("hidden");
      dualCompareBox.classList.remove("hidden");
      compValOptimal.textContent = `$${Math.round(safeOptK * 1000).toLocaleString()}`;
      compValFull.textContent = `$${Math.round(safeFullK * 1000).toLocaleString()}`;
    } else {
      singleResultBox.classList.remove("hidden");
      dualCompareBox.classList.add("hidden");

      let activePriceK = safeOptK;
      if (mode === "full") {
        resModelLabel.textContent = "Projected Median Home Value (Full 13-Feature Model)";
        activePriceK = safeFullK;
      } else if (mode === "core") {
        resModelLabel.textContent = "Projected Median Home Value (Core 3-Feature Model)";
        activePriceK = safeCoreK;
      } else {
        resModelLabel.textContent = "Projected Median Home Value (Optimal 12-Feature Model)";
        activePriceK = safeOptK;
      }

      valPredictedPrice.textContent = formatDollar(activePriceK);
      const lowBand = Math.max(5.0, activePriceK - 5.78);
      const highBand = Math.min(50.0, activePriceK + 5.78);
      valConfidenceBand.textContent = `95% Confidence Band: $${Math.round(lowBand * 1000).toLocaleString()} – $${Math.round(highBand * 1000).toLocaleString()}`;

      // Attribution
      const baseImpact = MODELS_BOSTON.optimal.intercept;
      const rmImpact = MODELS_BOSTON.optimal.coef.rm * rm;
      const lstatImpact = MODELS_BOSTON.optimal.coef.lstat * lstat;
      const ptratioImpact = MODELS_BOSTON.optimal.coef.ptratio * ptratio;
      const chasImpact = MODELS_BOSTON.optimal.coef.chas * chas;

      amtBase.textContent = `+$${Math.round(baseImpact * 1000).toLocaleString()}`;
      amtRm.textContent = `+$${Math.round(rmImpact * 1000).toLocaleString()}`;
      amtLstat.textContent = `${lstatImpact < 0 ? "-" : "+"}$${Math.round(Math.abs(lstatImpact) * 1000).toLocaleString()}`;
      amtPtratio.textContent = `${ptratioImpact < 0 ? "-" : "+"}$${Math.round(Math.abs(ptratioImpact) * 1000).toLocaleString()}`;
      amtChas.textContent = chas ? `+$${Math.round(chasImpact * 1000).toLocaleString()}` : "$0 (Inland)";

      const maxImpact = Math.max(Math.abs(baseImpact), Math.abs(rmImpact), Math.abs(lstatImpact), Math.abs(ptratioImpact), 1);
      barBase.style.width = `${Math.min(100, (Math.abs(baseImpact) / maxImpact) * 100)}%`;
      barRm.style.width = `${Math.min(100, (Math.abs(rmImpact) / maxImpact) * 100)}%`;
      barLstat.style.width = `${Math.min(100, (Math.abs(lstatImpact) / maxImpact) * 100)}%`;
      barPtratio.style.width = `${Math.min(100, (Math.abs(ptratioImpact) / maxImpact) * 100)}%`;
      barChas.style.width = chas ? `${Math.min(100, (Math.abs(chasImpact) / maxImpact) * 100)}%` : "0%";
    }
  }

  // Presets
  const presets = {
    luxury: { rm: 8.0, lstat: 3.2, ptratio: 14.5, crim: 0.05, tax: 310, dis: 2.2, nox: 0.45, chas: true },
    suburban: { rm: 6.8, lstat: 7.5, ptratio: 16.5, crim: 0.20, tax: 280, dis: 5.5, nox: 0.43, chas: false },
    urban: { rm: 6.0, lstat: 14.0, ptratio: 19.0, crim: 3.50, tax: 450, dis: 3.2, nox: 0.54, chas: false },
    industrial: { rm: 5.2, lstat: 24.0, ptratio: 20.2, crim: 12.00, tax: 666, dis: 2.1, nox: 0.69, chas: false }
  };

  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const presetKey = btn.getAttribute("data-preset");
      const p = presets[presetKey];
      if (!p) return;

      rangeRm.value = p.rm;
      rangeLstat.value = p.lstat;
      rangePtratio.value = p.ptratio;
      rangeCrim.value = p.crim;
      rangeTax.value = p.tax;
      rangeDis.value = p.dis;
      rangeNox.value = p.nox;
      checkChas.checked = p.chas;
      modelSelect.value = "optimal";
      updateBostonPrediction();
    });
  });

  [rangeRm, rangeLstat, rangePtratio, rangeCrim, rangeTax, rangeDis, rangeNox, checkChas, modelSelect].forEach(el => {
    el.addEventListener("input", updateBostonPrediction);
    el.addEventListener("change", updateBostonPrediction);
  });

  btnReset.addEventListener("click", () => {
    rangeRm.value = 6.2;
    rangeLstat.value = 12.0;
    rangePtratio.value = 18.5;
    rangeCrim.value = 3.6;
    rangeTax.value = 400;
    rangeDis.value = 3.8;
    rangeNox.value = 0.55;
    checkChas.checked = false;
    modelSelect.value = "optimal";
    updateBostonPrediction();
  });

  updateBostonPrediction();
}

/* ==========================================================================
   6. 50 STARTUPS DATASET EXPLORER
   ========================================================================== */
function initStartupDatasetExplorer() {
  const tableBody = document.getElementById("startupsTableBody");
  const searchInput = document.getElementById("datasetSearch");
  const filterPills = document.querySelectorAll("#stateFilterPills .filter-pill");
  const visibleCount = document.getElementById("visibleCount");
  const avgProfitDisplay = document.getElementById("avgProfitDisplay");
  const avgRdDisplay = document.getElementById("avgRdDisplay");
  const headers = document.querySelectorAll("#interactiveStartupsTable th");

  if (!tableBody) return;

  let currentFilter = "all";
  let searchQuery = "";
  let sortField = "id";
  let sortDirection = "asc";

  function formatCurrency(val) {
    return "$" + val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderTable() {
    let filtered = STARTUPS_DATA.map((item, idx) => ({ ...item, id: idx + 1 }));

    if (currentFilter !== "all") {
      filtered = filtered.filter(row => row.State === currentFilter);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(row =>
        row.State.toLowerCase().includes(q) ||
        row["R&D Spend"].toString().includes(q) ||
        row["Profit"].toString().includes(q)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (sortField === "rd") { valA = a["R&D Spend"]; valB = b["R&D Spend"]; }
      else if (sortField === "admin") { valA = a["Administration"]; valB = b["Administration"]; }
      else if (sortField === "marketing") { valA = a["Marketing Spend"]; valB = b["Marketing Spend"]; }
      else if (sortField === "profit") { valA = a["Profit"]; valB = b["Profit"]; }
      else if (sortField === "state") { valA = a["State"]; valB = b["State"]; }

      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    tableBody.innerHTML = "";
    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:32px; color:var(--text-muted)">No matching startup records found.</td></tr>`;
      visibleCount.textContent = "0";
      return;
    }

    visibleCount.textContent = filtered.length;
    const avgProfit = filtered.reduce((acc, cur) => acc + cur["Profit"], 0) / filtered.length;
    const avgRd = filtered.reduce((acc, cur) => acc + cur["R&D Spend"], 0) / filtered.length;
    avgProfitDisplay.textContent = formatCurrency(avgProfit);
    avgRdDisplay.textContent = formatCurrency(avgRd);

    filtered.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="row-id">#${row.id}</span></td>
        <td class="font-mono text-cyan">${formatCurrency(row["R&D Spend"])}</td>
        <td class="font-mono">${formatCurrency(row["Administration"])}</td>
        <td class="font-mono text-purple">${formatCurrency(row["Marketing Spend"])}</td>
        <td><span class="state-pill state-${row.State.toLowerCase().replace(" ", "")}">${row.State}</span></td>
        <td class="font-mono text-green"><strong>${formatCurrency(row["Profit"])}</strong></td>
      `;
      tableBody.appendChild(tr);
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-state");
      renderTable();
    });
  });

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value;
    renderTable();
  });

  headers.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (!field) return;
      if (sortField === field) {
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      } else {
        sortField = field;
        sortDirection = "desc";
      }
      renderTable();
    });
  });

  renderTable();
}

/* ==========================================================================
   7. BOSTON HOUSING DATASET EXPLORER (506 CENSUS TRACTS)
   ========================================================================== */
function initBostonDatasetExplorer() {
  const tableBody = document.getElementById("bostonTableBody");
  const searchInput = document.getElementById("bostonDatasetSearch");
  const filterPills = document.querySelectorAll("#bostonFilterPills .filter-pill");
  const visibleCount = document.getElementById("bostonVisibleCount");
  const avgPriceDisplay = document.getElementById("bostonAvgPriceDisplay");
  const avgRoomsDisplay = document.getElementById("bostonAvgRoomsDisplay");
  const avgCrimDisplay = document.getElementById("bostonAvgCrimDisplay");
  const headers = document.querySelectorAll("#interactiveBostonTable th");

  if (!tableBody) return;

  // Use embedded BOSTON_DATA (from boston_data.js)
  const rawData = typeof BOSTON_DATA !== "undefined" ? BOSTON_DATA : [];

  let currentFilter = "all";
  let searchQuery = "";
  let sortField = "id";
  let sortDirection = "asc";

  function renderTable() {
    let filtered = rawData.map((item, idx) => ({ ...item, id: idx + 1 }));

    // Apply Filter
    if (currentFilter === "river") {
      filtered = filtered.filter(row => row.chas === 1);
    } else if (currentFilter === "inland") {
      filtered = filtered.filter(row => row.chas === 0);
    } else if (currentFilter === "luxury") {
      filtered = filtered.filter(row => row.medv >= 30.0);
    } else if (currentFilter === "affordable") {
      filtered = filtered.filter(row => row.medv < 20.0);
    }

    // Apply Search
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(row =>
        row.id.toString().includes(q) ||
        row.rm.toString().includes(q) ||
        row.medv.toString().includes(q) ||
        row.crim.toString().includes(q) ||
        row.lstat.toString().includes(q)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];

      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    tableBody.innerHTML = "";
    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:32px; color:var(--text-muted)">No matching census tracts found.</td></tr>`;
      visibleCount.textContent = "0";
      return;
    }

    visibleCount.textContent = filtered.length;
    const avgPrice = filtered.reduce((acc, cur) => acc + cur.medv, 0) / filtered.length;
    const avgRooms = filtered.reduce((acc, cur) => acc + cur.rm, 0) / filtered.length;
    const avgCrim = filtered.reduce((acc, cur) => acc + cur.crim, 0) / filtered.length;

    avgPriceDisplay.textContent = `$${Math.round(avgPrice * 1000).toLocaleString()} ($${avgPrice.toFixed(1)}k)`;
    avgRoomsDisplay.textContent = `${avgRooms.toFixed(2)} rms`;
    avgCrimDisplay.textContent = `${avgCrim.toFixed(2)}`;

    // Render limited rows if too many to ensure smooth 60fps scrolling (render up to 100 per page or virtual)
    const displayList = filtered.slice(0, 150);

    displayList.forEach(row => {
      const tr = document.createElement("tr");
      const priceDollars = Math.round(row.medv * 1000);
      const isWaterfront = row.chas === 1;

      tr.innerHTML = `
        <td><span class="row-id">#${row.id}</span></td>
        <td class="font-mono text-cyan">${row.rm.toFixed(2)}</td>
        <td class="font-mono text-amber">${row.lstat.toFixed(1)}%</td>
        <td class="font-mono">${row.ptratio.toFixed(1)}</td>
        <td class="font-mono">${row.crim.toFixed(3)}</td>
        <td class="font-mono">$${Math.round(row.tax)}</td>
        <td class="font-mono">${row.nox.toFixed(3)}</td>
        <td>
          <span class="status-pill ${isWaterfront ? 'status-optimal' : 'status-baseline'}">
            ${isWaterfront ? '🌊 River' : 'Inland'}
          </span>
        </td>
        <td class="font-mono text-green">
          <strong>$${priceDollars.toLocaleString()}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted); display:block;">($${row.medv.toFixed(1)}k)</span>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    if (filtered.length > 150) {
      const trNotice = document.createElement("tr");
      trNotice.innerHTML = `<td colspan="9" style="text-align:center; padding:12px; font-size:0.85rem; color:var(--text-muted)">Showing first 150 of ${filtered.length} matching census tracts. Use search or filters to narrow down.</td>`;
      tableBody.appendChild(trNotice);
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-filter");
      renderTable();
    });
  });

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value;
    renderTable();
  });

  headers.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (!field) return;
      if (sortField === field) {
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      } else {
        sortField = field;
        sortDirection = "desc";
      }
      renderTable();
    });
  });

  renderTable();
}

/* ==========================================================================
   8. ARBITRARY CUSTOM DATASET LOADER & CLIENT-SIDE AUTO-ML PIPELINE
   ========================================================================== */
function initCustomDatasetPipeline() {
  const urlInput = document.getElementById("customUrlInput");
  const runBtn = document.getElementById("btnRunCustomPipeline");
  const uploadBtn = document.getElementById("btnUploadCsvTrigger");
  const fileInput = document.getElementById("customFileInput");
  const presetChips = document.querySelectorAll(".preset-chip");
  const targetSelect = document.getElementById("customTargetSelect");
  const summaryMini = document.getElementById("customSummaryMini");

  let rawCsvText = null;
  let parsedDataset = null;
  let currentTargetCol = null;
  let customPipelineResult = null;

  // Preset default URL
  const DEFAULT_URL = "https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv";

  // Event: Preset chip clicks
  presetChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const url = chip.getAttribute("data-url");
      if (url && urlInput) {
        urlInput.value = url;
        fetchAndRunPipeline(url);
      }
    });
  });

  // Event: Run button click
  if (runBtn) {
    runBtn.addEventListener("click", () => {
      const url = urlInput ? urlInput.value.trim() : "";
      if (url) {
        fetchAndRunPipeline(url);
      } else if (rawCsvText) {
        executeAutoML(rawCsvText, "User Dataset");
      }
    });
  }

  // Event: Enter key in URL input
  if (urlInput) {
    urlInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const url = urlInput.value.trim();
        if (url) fetchAndRunPipeline(url);
      }
    });
  }

  // Event: Upload trigger
  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        rawCsvText = evt.target.result;
        if (urlInput) urlInput.value = `File: ${file.name}`;
        executeAutoML(rawCsvText, file.name);
      };
      reader.readAsText(file);
    });
  }

  // Event: Target column change
  if (targetSelect) {
    targetSelect.addEventListener("change", () => {
      currentTargetCol = targetSelect.value;
      if (parsedDataset) {
        trainAndRenderPipeline(parsedDataset, currentTargetCol);
      }
    });
  }

  // Helper: Fetch CSV from URL and run
  async function fetchAndRunPipeline(url) {
    if (!runBtn) return;
    const origText = runBtn.innerHTML;
    runBtn.innerHTML = `<span>Loading...</span>`;
    runBtn.disabled = true;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to download CSV from URL`);
      }
      rawCsvText = await response.text();
      const fileName = url.substring(url.lastIndexOf("/") + 1).split("?")[0] || "Custom_Dataset.csv";
      executeAutoML(rawCsvText, fileName, url);
    } catch (err) {
      console.warn("Direct fetch error:", err);
      // Fallback: If CORS blocks external URL, load embedded representation
      if (url.includes("50_Startups.csv")) {
        rawCsvText = generateCsvFromStartups();
        executeAutoML(rawCsvText, "50_Startups.csv (Embedded Zero-CORS)", url);
      } else {
        alert(`Could not fetch CSV directly from URL due to CORS security policy: ${err.message}\n\nTip: You can download the CSV file and use "Upload Local CSV" for instant local parsing.`);
      }
    } finally {
      runBtn.innerHTML = origText;
      runBtn.disabled = false;
    }
  }

  function generateCsvFromStartups() {
    let csv = "R&D Spend,Administration,Marketing Spend,State,Profit\n";
    STARTUPS_DATA.forEach(row => {
      csv += `${row["R&D Spend"]},${row["Administration"]},${row["Marketing Spend"]},${row["State"]},${row["Profit"]}\n`;
    });
    return csv;
  }

  function executeAutoML(csvText, sourceName, sourceUrl = "") {
    parsedDataset = parseCSV(csvText);
    if (!parsedDataset || parsedDataset.rows.length === 0) {
      alert("Invalid CSV format or empty file. Please provide a valid CSV dataset.");
      return;
    }

    const { headers, rows } = parsedDataset;

    const numericCols = headers.filter(h => {
      let numCount = 0;
      rows.forEach(r => {
        const v = parseFloat(r[h]);
        if (!isNaN(v)) numCount++;
      });
      return numCount / rows.length > 0.6;
    });

    if (numericCols.length === 0) {
      alert("No continuous numerical columns found for regression modeling.");
      return;
    }

    if (targetSelect) {
      targetSelect.innerHTML = "";
      numericCols.forEach(col => {
        const opt = document.createElement("option");
        opt.value = col;
        opt.textContent = `${col} (Continuous)`;
        targetSelect.appendChild(opt);
      });

      let defaultTarget = numericCols[numericCols.length - 1];
      const matchProfit = numericCols.find(c => /profit/i.test(c));
      const matchPrice = numericCols.find(c => /price|medv|target|val/i.test(c));
      if (matchProfit) defaultTarget = matchProfit;
      else if (matchPrice) defaultTarget = matchPrice;

      targetSelect.value = defaultTarget;
      currentTargetCol = defaultTarget;
    }

    if (summaryMini) {
      summaryMini.textContent = `Loaded: ${sourceName} (${rows.length} rows, ${headers.length} columns)`;
    }

    const p1Title = document.getElementById("customPhase1Title");
    const p1Lead = document.getElementById("customPhase1Lead");
    const srcDisplay = document.getElementById("customSourceDisplay");
    const cliCmd = document.getElementById("customCliCommand");

    if (p1Title) p1Title.textContent = `Phase 1: Problem Understanding (${sourceName})`;
    if (p1Lead) p1Lead.textContent = `CRISP-DM Regression pipeline for ${sourceName} predicting target variable [${currentTargetCol}].`;
    if (srcDisplay) srcDisplay.textContent = sourceUrl || sourceName;
    if (cliCmd) cliCmd.textContent = `python custom_regression.py --url "${sourceUrl || sourceName}"`;

    trainAndRenderPipeline(parsedDataset, currentTargetCol);
  }

  function trainAndRenderPipeline(dataset, targetCol) {
    const { headers, rows } = dataset;
    const targetBadge = document.getElementById("customTargetBadge");
    if (targetBadge) targetBadge.textContent = targetCol;

    const edaStats = computeEdaStats(rows, headers, targetCol);
    renderPhase2Eda(edaStats, rows.length, headers.length);

    const prepResult = prepareDesignMatrix(rows, headers, targetCol);
    renderPhase3Prep(prepResult, rows.length);

    const N = rows.length;
    const trainIndices = [];
    const testIndices = [];
    for (let i = 0; i < N; i++) {
      if (i % 5 === 0) testIndices.push(i);
      else trainIndices.push(i);
    }

    const X_train = trainIndices.map(i => prepResult.X[i]);
    const y_train = trainIndices.map(i => prepResult.y[i]);
    const X_test = testIndices.map(i => prepResult.X[i]);
    const y_test = testIndices.map(i => prepResult.y[i]);

    const fullBeta = solveOLS(X_train, y_train);
    renderPhase4Model(prepResult.featureNames, fullBeta, targetCol);

    const fsResults = runForwardSelectionEngine(
      trainIndices.map(i => prepResult.featureRows[i]),
      y_train,
      testIndices.map(i => prepResult.featureRows[i]),
      y_test,
      prepResult.featureNames,
      targetCol
    );

    customPipelineResult = {
      prepResult,
      trainIndices,
      testIndices,
      fullBeta,
      fsResults,
      targetCol
    };

    window.customFsData = fsResults.steps;
    window.customOptimalIdx = fsResults.optimalIdx;

    const optStep = fsResults.steps[fsResults.optimalIdx];
    const kpiR2 = document.getElementById("customKpiR2");
    const kpiRmse = document.getElementById("customKpiRmse");
    const kpiDriver = document.getElementById("customKpiDriver");
    const kpiOccam = document.getElementById("customKpiOccam");

    if (kpiR2) kpiR2.textContent = optStep.testR2.toFixed(4);
    if (kpiRmse) kpiRmse.textContent = formatCurrencyOrNum(optStep.testRmse, targetCol);
    if (kpiDriver) {
      const topFeat = fsResults.steps[0].feature;
      kpiDriver.textContent = `${topFeat}`;
    }
    if (kpiOccam) kpiOccam.textContent = `k = ${optStep.step} Features`;

    const optPredictions = predictOLS(
      testIndices.map(i => buildDesignRow(prepResult.featureRows[i], optStep.selectedFeatures)),
      optStep.beta
    );
    renderPhase5Eval(y_test, optPredictions, targetCol);

    renderFsSection(fsResults, targetCol);
    renderCustomSimulator(prepResult, fsResults, targetCol);
    renderCustomExplorer(headers, rows, targetCol);

    if (typeof window.redrawFsChart === "function") {
      window.redrawFsChart();
    }
  }

  function parseCSV(text) {
    const lines = [];
    let row = [];
    let inQuotes = false;
    let entry = "";
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      const next = text[i + 1];
      if (c === '"') {
        if (inQuotes && next === '"') {
          entry += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        row.push(entry.trim());
        entry = "";
      } else if ((c === '\r' || c === '\n') && !inQuotes) {
        if (c === '\r' && next === '\n') i++;
        row.push(entry.trim());
        entry = "";
        if (row.length > 0 && row.some(cell => cell.length > 0)) {
          lines.push(row);
        }
        row = [];
      } else {
        entry += c;
      }
    }
    if (entry.length > 0 || row.length > 0) {
      row.push(entry.trim());
      if (row.some(cell => cell.length > 0)) lines.push(row);
    }
    if (lines.length < 2) return null;
    const headers = lines[0].map(h => h.replace(/^["']|["']$/g, '').trim());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const vals = lines[i];
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = vals[j] !== undefined ? vals[j].replace(/^["']|["']$/g, '').trim() : "";
      }
      rows.push(obj);
    }
    return { headers, rows };
  }

  function computeEdaStats(rows, headers, targetCol) {
    return headers.map(h => {
      let isNum = true;
      const nums = [];
      const cats = {};
      rows.forEach(r => {
        const raw = r[h];
        const val = parseFloat(raw);
        if (isNaN(val)) isNum = false;
        else nums.push(val);
        cats[raw] = (cats[raw] || 0) + 1;
      });

      if (isNum && nums.length > 0) {
        const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
        const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / Math.max(1, nums.length - 1);
        const std = Math.sqrt(variance);
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        return { col: h, type: "Numerical", mean, std, min, max, isTarget: h === targetCol };
      } else {
        const uniqueCount = Object.keys(cats).length;
        return { col: h, type: `Categorical (${uniqueCount} levels)`, mean: "--", std: "--", min: "--", max: "--", isTarget: h === targetCol };
      }
    });
  }

  function renderPhase2Eda(stats, totalRows, totalCols) {
    const tbody = document.getElementById("customEdaTableBody");
    const rowsEl = document.getElementById("customTotalRows");
    const colsEl = document.getElementById("customTotalCols");

    if (rowsEl) rowsEl.textContent = totalRows;
    if (colsEl) colsEl.textContent = totalCols;

    if (!tbody) return;
    tbody.innerHTML = "";
    stats.forEach(st => {
      const tr = document.createElement("tr");
      if (st.isTarget) tr.classList.add("table-row-highlight");
      tr.innerHTML = `
        <td><strong>${st.col}</strong> ${st.isTarget ? '<span class="status-pill status-optimal" style="margin-left:6px;">Target (y)</span>' : ''}</td>
        <td><span class="badge ${st.type.startsWith('Num') ? 'badge-accent' : 'badge-subtle'}">${st.type}</span></td>
        <td class="font-mono">${typeof st.mean === 'number' ? st.mean.toLocaleString(undefined, {maximumFractionDigits:2}) : st.mean}</td>
        <td class="font-mono">${typeof st.std === 'number' ? st.std.toLocaleString(undefined, {maximumFractionDigits:2}) : st.std}</td>
        <td class="font-mono">${typeof st.min === 'number' ? st.min.toLocaleString(undefined, {maximumFractionDigits:2}) : st.min}</td>
        <td class="font-mono">${typeof st.max === 'number' ? st.max.toLocaleString(undefined, {maximumFractionDigits:2}) : st.max}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function prepareDesignMatrix(rows, headers, targetCol) {
    const predictorCols = headers.filter(h => h !== targetCol);
    const featureNames = [];
    const categoricalMaps = {};

    predictorCols.forEach(col => {
      let isNumeric = true;
      const uniqueVals = new Set();
      rows.forEach(r => {
        const v = parseFloat(r[col]);
        if (isNaN(v)) isNumeric = false;
        uniqueVals.add(r[col]);
      });

      if (!isNumeric) {
        const sortedCats = Array.from(uniqueVals).sort();
        const dummyLevels = sortedCats.slice(1);
        categoricalMaps[col] = {
          baseline: sortedCats[0],
          levels: dummyLevels
        };
        dummyLevels.forEach(lvl => {
          featureNames.push(`${col}_${lvl}`);
        });
      } else {
        featureNames.push(col);
      }
    });

    const featureRows = rows.map(r => {
      const fRow = {};
      predictorCols.forEach(col => {
        if (categoricalMaps[col]) {
          const map = categoricalMaps[col];
          map.levels.forEach(lvl => {
            fRow[`${col}_${lvl}`] = r[col] === lvl ? 1.0 : 0.0;
          });
        } else {
          fRow[col] = parseFloat(r[col]) || 0.0;
        }
      });
      return fRow;
    });

    const X = featureRows.map(fRow => {
      const rowArr = [1.0];
      featureNames.forEach(fn => rowArr.push(fRow[fn]));
      return rowArr;
    });

    const y = rows.map(r => parseFloat(r[targetCol]) || 0.0);

    return {
      predictorCols,
      categoricalMaps,
      featureNames,
      featureRows,
      X,
      y
    };
  }

  function renderPhase3Prep(prep, totalCount) {
    const trainCountEl = document.getElementById("customTrainCount");
    const testCountEl = document.getElementById("customTestCount");
    const featureCountEl = document.getElementById("customFeatureCount");
    const tagList = document.getElementById("customFeatureTagList");

    const testCount = Math.floor(totalCount * 0.2);
    const trainCount = totalCount - testCount;

    if (trainCountEl) trainCountEl.textContent = trainCount;
    if (testCountEl) testCountEl.textContent = testCount;
    if (featureCountEl) featureCountEl.textContent = prep.featureNames.length;

    if (tagList) {
      tagList.innerHTML = "";
      prep.featureNames.forEach(fn => {
        const li = document.createElement("li");
        li.className = "tag-item";
        li.textContent = fn;
        tagList.appendChild(li);
      });
    }
  }

  function matrixTranspose(A) {
    const rows = A.length, cols = A[0].length;
    const res = Array.from({ length: cols }, () => new Float64Array(rows));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        res[j][i] = A[i][j];
      }
    }
    return res;
  }

  function matrixMultiply(A, B) {
    const rowsA = A.length, colsA = A[0].length, colsB = B[0].length;
    const res = Array.from({ length: rowsA }, () => new Float64Array(colsB));
    for (let i = 0; i < rowsA; i++) {
      for (let k = 0; k < colsA; k++) {
        const a = A[i][k];
        if (a === 0) continue;
        for (let j = 0; j < colsB; j++) {
          res[i][j] += a * B[k][j];
        }
      }
    }
    return res;
  }

  function invertMatrix(M, ridge = 1e-7) {
    const n = M.length;
    const aug = Array.from({ length: n }, (_, i) => {
      const row = new Float64Array(2 * n);
      for (let j = 0; j < n; j++) {
        row[j] = M[i][j] + (i === j ? ridge : 0);
      }
      row[n + i] = 1.0;
      return row;
    });

    for (let i = 0; i < n; i++) {
      let maxRow = i;
      let maxVal = Math.abs(aug[i][i]);
      for (let k = i + 1; k < n; k++) {
        const val = Math.abs(aug[k][i]);
        if (val > maxVal) {
          maxVal = val;
          maxRow = k;
        }
      }

      if (maxVal < 1e-12) {
        aug[i][i] += 1e-5;
      } else if (maxRow !== i) {
        const tmp = aug[i];
        aug[i] = aug[maxRow];
        aug[maxRow] = tmp;
      }

      const pivot = aug[i][i];
      for (let j = 0; j < 2 * n; j++) aug[i][j] /= pivot;

      for (let k = 0; k < n; k++) {
        if (k === i) continue;
        const factor = aug[k][i];
        if (Math.abs(factor) < 1e-14) continue;
        for (let j = 0; j < 2 * n; j++) {
          aug[k][j] -= factor * aug[i][j];
        }
      }
    }

    return Array.from({ length: n }, (_, i) => {
      const row = new Float64Array(n);
      for (let j = 0; j < n; j++) row[j] = aug[i][n + j];
      return row;
    });
  }

  function solveOLS(X, y) {
    const Xt = matrixTranspose(X);
    const XtX = matrixMultiply(Xt, X);
    const invXtX = invertMatrix(XtX, 1e-7);

    const P = Xt.length;
    const N = y.length;
    const Xty = new Float64Array(P);
    for (let i = 0; i < P; i++) {
      let sum = 0;
      for (let j = 0; j < N; j++) {
        sum += Xt[i][j] * y[j];
      }
      Xty[i] = sum;
    }

    const beta = new Float64Array(P);
    for (let i = 0; i < P; i++) {
      let sum = 0;
      for (let j = 0; j < P; j++) {
        sum += invXtX[i][j] * Xty[j];
      }
      beta[i] = sum;
    }
    return beta;
  }

  function predictOLS(X, beta) {
    const N = X.length;
    const P = beta.length;
    const yPred = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      let sum = 0;
      for (let j = 0; j < P; j++) {
        sum += X[i][j] * beta[j];
      }
      yPred[i] = sum;
    }
    return yPred;
  }

  function calcMetrics(yTrue, yPred) {
    const n = yTrue.length;
    let sumErr2 = 0, sumAbsErr = 0, sumY = 0;
    for (let i = 0; i < n; i++) {
      const err = yTrue[i] - yPred[i];
      sumErr2 += err * err;
      sumAbsErr += Math.abs(err);
      sumY += yTrue[i];
    }
    const mse = sumErr2 / n;
    const rmse = Math.sqrt(mse);
    const mae = sumAbsErr / n;
    const yMean = sumY / n;

    let ssTot = 0;
    for (let i = 0; i < n; i++) {
      ssTot += Math.pow(yTrue[i] - yMean, 2);
    }
    const r2 = ssTot === 0 ? 0 : 1 - (sumErr2 / ssTot);
    return { mse, rmse, mae, r2 };
  }

  function buildDesignRow(fRow, featuresList) {
    const row = [1.0];
    featuresList.forEach(fn => row.push(fRow[fn]));
    return row;
  }

  function renderPhase4Model(featureNames, beta, targetCol) {
    const formulaEl = document.getElementById("customModelFormula");
    const tbody = document.getElementById("customCoefTableBody");
    const interceptEl = document.getElementById("customModelIntercept");

    const intercept = beta[0];
    if (interceptEl) interceptEl.textContent = formatCurrencyOrNum(intercept, targetCol);

    if (formulaEl) {
      let formula = `${targetCol} = ${intercept.toFixed(2)}`;
      featureNames.forEach((fn, idx) => {
        const coef = beta[idx + 1];
        const sign = coef >= 0 ? "+" : "-";
        formula += ` ${sign} ${Math.abs(coef).toFixed(4)}·[${fn}]`;
      });
      formulaEl.textContent = formula;
    }

    if (!tbody) return;
    tbody.innerHTML = "";

    const maxAbs = Math.max(...featureNames.map((_, i) => Math.abs(beta[i + 1])), 1e-9);

    featureNames.forEach((fn, idx) => {
      const coef = beta[idx + 1];
      const relPct = Math.min(100, Math.max(5, (Math.abs(coef) / maxAbs) * 100));
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${fn}</strong></td>
        <td class="font-mono ${coef >= 0 ? 'text-green' : 'text-amber'}">${coef >= 0 ? '+' : ''}${coef.toFixed(4)}</td>
        <td>
          <div class="progress-bar-bg" style="height:6px; background:rgba(255,255,255,0.08); border-radius:3px;">
            <div style="height:100%; width:${relPct}%; background:${coef >= 0 ? 'var(--accent-green)' : 'var(--accent-amber)'}; border-radius:3px;"></div>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  function runForwardSelectionEngine(trainFRows, trainY, testFRows, testY, allFeatures, targetCol) {
    const N_train = trainFRows.length;
    const K_FOLDS = Math.min(5, N_train);
    const folds = Array.from({ length: K_FOLDS }, () => []);
    for (let i = 0; i < N_train; i++) {
      folds[i % K_FOLDS].push(i);
    }

    const selectedFeatures = [];
    const remainingFeatures = [...allFeatures];
    const steps = [];

    while (remainingFeatures.length > 0) {
      let bestFeature = null;
      let bestCvRmse = Infinity;

      for (const candidate of remainingFeatures) {
        const testSubset = [...selectedFeatures, candidate];
        let foldRmseSum = 0;

        for (let f = 0; f < K_FOLDS; f++) {
          const valIndices = folds[f];
          const trIndices = folds.filter((_, idx) => idx !== f).flat();

          const tr_X = trIndices.map(i => buildDesignRow(trainFRows[i], testSubset));
          const tr_y = trIndices.map(i => trainY[i]);
          const val_X = valIndices.map(i => buildDesignRow(trainFRows[i], testSubset));
          const val_y = valIndices.map(i => trainY[i]);

          const beta = solveOLS(tr_X, tr_y);
          const yPred = predictOLS(val_X, beta);
          const metrics = calcMetrics(val_y, yPred);
          foldRmseSum += metrics.rmse;
        }

        const avgCvRmse = foldRmseSum / K_FOLDS;
        if (avgCvRmse < bestCvRmse) {
          bestCvRmse = avgCvRmse;
          bestFeature = candidate;
        }
      }

      selectedFeatures.push(bestFeature);
      const remIdx = remainingFeatures.indexOf(bestFeature);
      if (remIdx !== -1) remainingFeatures.splice(remIdx, 1);

      const full_train_X = trainFRows.map(fRow => buildDesignRow(fRow, selectedFeatures));
      const beta = solveOLS(full_train_X, trainY);
      const full_test_X = testFRows.map(fRow => buildDesignRow(fRow, selectedFeatures));
      const testPred = predictOLS(full_test_X, beta);
      const testMetrics = calcMetrics(testY, testPred);

      steps.push({
        step: steps.length + 1,
        feature: bestFeature,
        selectedFeatures: [...selectedFeatures],
        cvRmse: bestCvRmse,
        testRmse: testMetrics.rmse,
        testR2: testMetrics.r2,
        beta: beta
      });
    }

    let optimalIdx = 0;
    let minCv = steps[0].cvRmse;
    for (let s = 1; s < steps.length; s++) {
      if (steps[s].cvRmse < minCv) {
        minCv = steps[s].cvRmse;
        optimalIdx = s;
      }
    }

    return { steps, optimalIdx };
  }

  function renderPhase5Eval(yTest, yPred, targetCol) {
    const metrics = calcMetrics(yTest, yPred);
    const r2El = document.getElementById("customEvalR2");
    const rmseEl = document.getElementById("customEvalRmse");
    const maeEl = document.getElementById("customEvalMae");
    const mseEl = document.getElementById("customEvalMse");

    if (r2El) r2El.textContent = metrics.r2.toFixed(4);
    if (rmseEl) rmseEl.textContent = formatCurrencyOrNum(metrics.rmse, targetCol);
    if (maeEl) maeEl.textContent = formatCurrencyOrNum(metrics.mae, targetCol);
    if (mseEl) mseEl.textContent = metrics.mse.toLocaleString(undefined, { maximumFractionDigits: 1 });

    const canvas = document.getElementById("customActualVsPredCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const pad = { top: 30, right: 30, bottom: 45, left: 65 };
    const plotW = w - pad.left - pad.right;
    const plotH = h - pad.top - pad.bottom;

    const allVals = [...yTest, ...yPred];
    const minVal = Math.min(...allVals) * 0.95;
    const maxVal = Math.max(...allVals) * 1.05;

    const scaleX = v => pad.left + ((v - minVal) / Math.max(1e-9, maxVal - minVal)) * plotW;
    const scaleY = v => pad.top + plotH - ((v - minVal) / Math.max(1e-9, maxVal - minVal)) * plotH;

    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 1;
    const ticks = 5;
    for (let i = 0; i <= ticks; i++) {
      const v = minVal + (i / ticks) * (maxVal - minVal);
      const x = scaleX(v);
      const y = scaleY(v);

      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + plotW, y);
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(formatCompact(v), pad.left - 8, y + 3);

      ctx.textAlign = "center";
      ctx.fillText(formatCompact(v), x, pad.top + plotH + 18);
    }

    ctx.strokeStyle = "rgba(16, 185, 129, 0.5)";
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(scaleX(minVal), scaleY(minVal));
    ctx.lineTo(scaleX(maxVal), scaleY(maxVal));
    ctx.stroke();
    ctx.setLineDash([]);

    for (let i = 0; i < yTest.length; i++) {
      const px = scaleX(yTest[i]);
      const py = scaleY(yPred[i]);

      ctx.fillStyle = "#38bdf8";
      ctx.strokeStyle = "#0284c7";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px Outfit, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`Actual ${targetCol} (Test Set)`, pad.left + plotW / 2, h - 8);

    ctx.save();
    ctx.translate(16, pad.top + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(`Predicted ${targetCol}`, 0, 0);
    ctx.restore();
  }

  function renderFsSection(fs, targetCol) {
    const listEl = document.getElementById("customFsStepsList");
    const badgeEl = document.getElementById("customFsStepsBadge");
    const tbody = document.getElementById("customFsTableBody");
    const exportBtn = document.getElementById("btnExportCustomFsCsv");

    if (badgeEl) badgeEl.textContent = `${fs.steps.length} Steps Evaluated`;

    if (listEl) {
      listEl.innerHTML = "";
      fs.steps.forEach((st, idx) => {
        const isOpt = idx === fs.optimalIdx;
        const card = document.createElement("div");
        card.className = `step-card ${isOpt ? 'winner-card' : ''}`;
        card.innerHTML = `
          <div class="step-badge ${isOpt ? 'winner-badge' : ''}">${isOpt ? `★ k = ${st.step} (Best)` : `k = ${st.step}`}</div>
          <div class="step-body">
            <div class="step-feature">+ ${st.feature}</div>
            <div class="step-metrics">
              <span class="${isOpt ? 'text-green' : ''}">CV RMSE: <strong>${formatCompact(st.cvRmse)}</strong></span>
              <span class="${isOpt ? 'text-green' : ''}">Test RMSE: <strong>${formatCompact(st.testRmse)}</strong></span>
              <span class="${isOpt ? 'text-green' : ''}">Test R²: <strong>${st.testR2.toFixed(4)}</strong></span>
            </div>
          </div>
        `;
        listEl.appendChild(card);
      });
    }

    if (tbody) {
      tbody.innerHTML = "";
      fs.steps.forEach((st, idx) => {
        const isOpt = idx === fs.optimalIdx;
        const tr = document.createElement("tr");
        if (isOpt) tr.classList.add("table-row-highlight");
        tr.innerHTML = `
          <td>${st.step}</td>
          <td><strong>${st.feature}</strong></td>
          <td><code>${st.selectedFeatures.join(", ")}</code></td>
          <td class="font-mono ${isOpt ? 'text-green font-bold' : ''}">${formatCompact(st.cvRmse)}</td>
          <td class="font-mono ${isOpt ? 'text-green font-bold' : ''}">${formatCompact(st.testRmse)}</td>
          <td class="font-mono ${isOpt ? 'text-green font-bold' : ''}">${st.testR2.toFixed(4)}</td>
          <td><span class="status-pill ${isOpt ? 'status-optimal' : 'status-baseline'}">${isOpt ? '★ Optimal Model' : 'Step ' + st.step}</span></td>
        `;
        tbody.appendChild(tr);
      });
    }

    if (exportBtn) {
      exportBtn.onclick = () => {
        let csv = "Step,Added_Feature,Selected_Features,Train_5Fold_CV_RMSE,Test_RMSE,Test_R2\n";
        fs.steps.forEach(st => {
          csv += `${st.step},"${st.feature}","${st.selectedFeatures.join('; ')}",${st.cvRmse},${st.testRmse},${st.testR2}\n`;
        });
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "custom_forward_selection_results.csv";
        a.click();
        URL.revokeObjectURL(url);
      };
    }
  }

  function renderCustomSimulator(prep, fs, targetCol) {
    const container = document.getElementById("customSlidersContainer");
    const predValEl = document.getElementById("customValPredicted");
    const modelSelect = document.getElementById("customSimModelSelect");
    const waterfallEl = document.getElementById("customWaterfallContainer");
    const resetBtn = document.getElementById("btnResetCustomSim");

    if (!container) return;
    container.innerHTML = "";

    const optStep = fs.steps[fs.optimalIdx];
    const fullStep = fs.steps[fs.steps.length - 1];

    const featStats = {};
    prep.featureNames.forEach(fn => {
      const vals = prep.featureRows.map(r => r[fn]);
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
      featStats[fn] = { min, max, mean, current: mean };
    });

    prep.featureNames.forEach(fn => {
      const st = featStats[fn];
      const isBinary = (st.min === 0 && st.max === 1);
      const stepVal = isBinary ? 1 : Math.max(0.01, (st.max - st.min) / 100);

      const group = document.createElement("div");
      group.className = "slider-group";
      group.innerHTML = `
        <div class="slider-header">
          <label for="simSlider_${fn}" class="slider-title">${fn}</label>
          <span class="slider-display" id="dispSlider_${fn}">${formatCompact(st.mean)}</span>
        </div>
        <input type="range" id="simSlider_${fn}" min="${st.min}" max="${st.max}" step="${stepVal}" value="${st.mean}" class="slider-input">
      `;
      container.appendChild(group);

      const input = group.querySelector("input");
      input.addEventListener("input", () => {
        const val = parseFloat(input.value);
        featStats[fn].current = val;
        group.querySelector(".slider-display").textContent = formatCompact(val);
        recalculatePrediction();
      });
    });

    function recalculatePrediction() {
      const mode = modelSelect ? modelSelect.value : "optimal";
      const activeStep = mode === "full" ? fullStep : optStep;

      let yPred = activeStep.beta[0];
      const impacts = [];

      activeStep.selectedFeatures.forEach((fn, idx) => {
        const coef = activeStep.beta[idx + 1];
        const val = featStats[fn].current;
        const impact = coef * val;
        yPred += impact;
        impacts.push({ fn, impact });
      });

      if (predValEl) {
        predValEl.textContent = formatCurrencyOrNum(yPred, targetCol);
      }

      if (waterfallEl) {
        waterfallEl.innerHTML = "";
        const maxImpact = Math.max(...impacts.map(im => Math.abs(im.impact)), Math.abs(activeStep.beta[0]), 1e-9);

        const interceptRow = document.createElement("div");
        interceptRow.className = "contrib-row";
        const baseWidth = Math.min(100, Math.max(5, (Math.abs(activeStep.beta[0]) / maxImpact) * 100));
        interceptRow.innerHTML = `
          <span class="contrib-name">Base Intercept (β₀)</span>
          <div class="contrib-track"><div class="contrib-fill fill-base" style="width:${baseWidth}%;"></div></div>
          <span class="contrib-amount">${formatCurrencyOrNum(activeStep.beta[0], targetCol)}</span>
        `;
        waterfallEl.appendChild(interceptRow);

        impacts.forEach(im => {
          const row = document.createElement("div");
          row.className = "contrib-row";
          const width = Math.min(100, Math.max(5, (Math.abs(im.impact) / maxImpact) * 100));
          const isPos = im.impact >= 0;
          row.innerHTML = `
            <span class="contrib-name">${im.fn}</span>
            <div class="contrib-track"><div class="contrib-fill ${isPos ? 'fill-rd' : 'fill-marketing'}" style="width:${width}%;"></div></div>
            <span class="contrib-amount ${isPos ? 'text-green' : 'text-amber'}">${isPos ? '+' : ''}${formatCompact(im.impact)}</span>
          `;
          waterfallEl.appendChild(row);
        });
      }
    }

    if (modelSelect) {
      modelSelect.addEventListener("change", recalculatePrediction);
    }

    if (resetBtn) {
      resetBtn.onclick = () => {
        prep.featureNames.forEach(fn => {
          const st = featStats[fn];
          st.current = st.mean;
          const input = document.getElementById(`simSlider_${fn}`);
          const disp = document.getElementById(`dispSlider_${fn}`);
          if (input) input.value = st.mean;
          if (disp) disp.textContent = formatCompact(st.mean);
        });
        recalculatePrediction();
      };
    }

    recalculatePrediction();
  }

  function renderCustomExplorer(headers, rows, targetCol) {
    const thead = document.getElementById("customTableHead");
    const tbody = document.getElementById("customExplorerTableBody");
    const searchInput = document.getElementById("customDatasetSearch");
    const countEl = document.getElementById("customVisibleCount");
    const meanTargetEl = document.getElementById("customMeanTargetVal");

    let sortCol = targetCol;
    let sortAsc = false;
    let query = "";

    if (thead) {
      thead.innerHTML = "";
      const tr = document.createElement("tr");
      headers.forEach(h => {
        const th = document.createElement("th");
        th.setAttribute("data-sort", h);
        th.style.cursor = "pointer";
        th.innerHTML = `${h} <span class="sort-icon">⇅</span>`;
        th.addEventListener("click", () => {
          if (sortCol === h) sortAsc = !sortAsc;
          else { sortCol = h; sortAsc = false; }
          drawRows();
        });
        tr.appendChild(th);
      });
      thead.appendChild(tr);
    }

    function drawRows() {
      let filtered = rows.filter(r => {
        if (!query) return true;
        return Object.values(r).some(v => v.toString().toLowerCase().includes(query.toLowerCase()));
      });

      filtered.sort((a, b) => {
        let va = parseFloat(a[sortCol]) || a[sortCol];
        let vb = parseFloat(b[sortCol]) || b[sortCol];
        if (va < vb) return sortAsc ? -1 : 1;
        if (va > vb) return sortAsc ? 1 : -1;
        return 0;
      });

      if (countEl) countEl.textContent = filtered.length;

      if (meanTargetEl && filtered.length > 0) {
        const sumT = filtered.reduce((acc, r) => acc + (parseFloat(r[targetCol]) || 0), 0);
        meanTargetEl.textContent = formatCurrencyOrNum(sumT / filtered.length, targetCol);
      }

      if (!tbody) return;
      tbody.innerHTML = "";
      const displayRows = filtered.slice(0, 100);

      displayRows.forEach(r => {
        const tr = document.createElement("tr");
        let html = "";
        headers.forEach(h => {
          const val = r[h];
          const isNum = !isNaN(parseFloat(val));
          const isTarget = h === targetCol;
          const displayVal = isNum && parseFloat(val) > 1000 ? parseFloat(val).toLocaleString() : val;
          html += `<td class="${isNum ? 'font-mono' : ''} ${isTarget ? 'text-green font-bold' : ''}">${displayVal}</td>`;
        });
        tr.innerHTML = html;
        tbody.appendChild(tr);
      });

      if (filtered.length > 100) {
        const trNote = document.createElement("tr");
        trNote.innerHTML = `<td colspan="${headers.length}" style="text-align:center; padding:12px; color:var(--text-muted); font-size:0.85rem;">Showing first 100 of ${filtered.length} records.</td>`;
        tbody.appendChild(trNote);
      }
    }

    if (searchInput) {
      searchInput.oninput = (e) => {
        query = e.target.value.trim();
        drawRows();
      };
    }

    drawRows();
  }

  function formatCurrencyOrNum(val, targetName = "") {
    if (typeof val !== "number" || isNaN(val)) return "--";
    const isMoney = /profit|spend|price|tax|cost|income/i.test(targetName);
    if (isMoney) {
      return `$${Math.round(val).toLocaleString()}`;
    }
    return val >= 1000 ? val.toLocaleString(undefined, { maximumFractionDigits: 2 }) : val.toFixed(2);
  }

  function formatCompact(val) {
    if (typeof val !== "number" || isNaN(val)) return "--";
    if (Math.abs(val) >= 1e6) return (val / 1e6).toFixed(2) + "M";
    if (Math.abs(val) >= 1e3) return (val / 1e3).toFixed(1) + "k";
    return val.toFixed(2);
  }

  // Pre-load default 50_Startups URL into memory so Problem 3 is instantly interactive!
  fetchAndRunPipeline(DEFAULT_URL);
}
