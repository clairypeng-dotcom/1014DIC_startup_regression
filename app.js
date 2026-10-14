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

  // Check URL hash on load
  if (window.location.hash === "#boston") {
    switchDataset("boston");
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

  // 1. Update Dropdown Triggers in Navbar & Hero
  const navIcon = document.getElementById("navProblemIcon");
  const navTitle = document.getElementById("navProblemTitle");
  const navBadge = document.getElementById("navProblemBadge");

  const heroIcon = document.getElementById("heroProblemIcon");
  const heroTitle = document.getElementById("heroProblemTitle");
  const heroBadge = document.getElementById("heroProblemBadge");

  if (navIcon) navIcon.textContent = isBoston ? "🏡" : "🚀";
  if (navTitle) navTitle.textContent = isBoston ? "Problem 2: Boston Housing" : "Problem 1: 50 Startups";
  if (navBadge) navBadge.textContent = isBoston ? "k=12 Optimal" : "k=2 Optimal";

  if (heroIcon) heroIcon.textContent = isBoston ? "🏡" : "🚀";
  if (heroTitle) heroTitle.textContent = isBoston ? "Problem 2: Boston Housing Valuation" : "Problem 1: 50 Startups Profitability";
  if (heroBadge) heroBadge.textContent = isBoston ? "k=12 Optimal" : "k=2 Optimal";

  // 2. Update Active Status on all Dropdown Options
  document.querySelectorAll(".dropdown-option").forEach(opt => {
    const isTarget = opt.getAttribute("data-dataset") === dataset;
    opt.classList.toggle("active", isTarget);
    opt.setAttribute("aria-selected", isTarget ? "true" : "false");
  });

  // 3. Toggle Content Blocks across all Sections
  document.querySelectorAll('.dataset-content[data-dataset="startups"]').forEach(el => {
    el.classList.toggle("hidden-dataset", isBoston);
  });
  document.querySelectorAll('.dataset-content[data-dataset="boston"]').forEach(el => {
    el.classList.toggle("hidden-dataset", !isBoston);
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
  // Support phase tabs for both startups and boston
  ["startups", "boston"].forEach(ds => {
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
    const data = isBoston ? FS_DATA_BOSTON : FS_DATA_STARTUPS;
    const optimalIdx = isBoston ? 11 : 1; // Step 12 for Boston, Step 2 for Startups

    const padding = { top: 40, right: 65, bottom: 55, left: 75 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Y Axis ranges
    const minRmse = isBoston ? 4.2 : 7800;
    const maxRmse = isBoston ? 7.5 : 10600;
    const getY_RMSE = val => padding.top + chartH - ((val - minRmse) / (maxRmse - minRmse)) * chartH;

    const minR2 = isBoston ? 0.30 : 0.930;
    const maxR2 = isBoston ? 0.65 : 0.950;
    const getY_R2 = val => padding.top + chartH - ((val - minR2) / (maxR2 - minR2)) * chartH;

    const getX = stepIndex => padding.left + (stepIndex / (data.length - 1)) * chartW;

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
      const lbl = isBoston ? `$${val.toFixed(1)}k` : `$${Math.round(val).toLocaleString()}`;
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

      // Feature text (rotated or compact if many features)
      ctx.fillStyle = idx === optimalIdx ? "#10b981" : "#64748b";
      ctx.font = "9px JetBrains Mono, monospace";
      const featText = isBoston ? item.feature : `+${item.feature.split(" ")[0]}`;
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
