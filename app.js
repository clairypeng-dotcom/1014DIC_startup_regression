/**
 * 50 Startups Machine Learning Interactive Dashboard (CRISP-DM)
 * Main JavaScript Controller
 */

// Embedded 50 Startups Dataset (Allows instant offline execution via file://)
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

// Forward Selection Empirical Results Data
const FS_DATA = [
  { step: 1, feature: "R&D Spend", cvRmse: 9745.40, testRmse: 8274.87, testR2: 0.9465 },
  { step: 2, feature: "Marketing Spend", cvRmse: 9482.34, testRmse: 8198.80, testR2: 0.9474 },
  { step: 3, feature: "Administration", cvRmse: 9678.08, testRmse: 8803.78, testR2: 0.9394 },
  { step: 4, feature: "State_Florida", cvRmse: 9885.56, testRmse: 9068.54, testR2: 0.9357 },
  { step: 5, feature: "State_New York", cvRmse: 10158.66, testRmse: 9137.99, testR2: 0.9347 }
];

// Empirical Model Coefficients (derived from 40-sample training set)
const MODELS = {
  optimal: {
    name: "Optimal 2-Feature Model (R&D + Marketing)",
    intercept: 46346.33876,
    coef: {
      rd: 0.788618,
      marketing: 0.032577,
      admin: 0.0,
      stateFL: 0.0,
      stateNY: 0.0
    },
    r2: 0.9474,
    rmse: 8198.80
  },
  full: {
    name: "Full 5-Feature Baseline Model",
    intercept: 42554.16762,
    coef: {
      rd: 0.773467,
      marketing: 0.036610,
      admin: 0.032885,
      stateFL: -959.284,
      stateNY: 699.369
    },
    r2: 0.9347,
    rmse: 9137.99
  }
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initPhaseTabs();
  initForwardSelectionChart();
  initSimulator();
  initDatasetExplorer();
});

/* ==========================================================================
   1. CRISP-DM PHASE TABS NAVIGATION
   ========================================================================== */
function initPhaseTabs() {
  const tabs = document.querySelectorAll(".phase-tab");
  const panels = document.querySelectorAll(".phase-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetPhase = tab.getAttribute("data-phase");

      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetPanel = document.getElementById(`panelPhase${targetPhase}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   2. FORWARD SELECTION CANVAS INTERACTIVE CHART
   ========================================================================== */
function initForwardSelectionChart() {
  const canvas = document.getElementById("fsChartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Handle High-DPI screens (Retina)
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    drawChart(rect.width, rect.height);
  }

  function drawChart(w, h) {
    ctx.clearRect(0, 0, w, h);

    const padding = { top: 40, right: 60, bottom: 50, left: 70 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Y Axis 1 (RMSE): Min 7,800 to Max 10,500
    const minRmse = 7800;
    const maxRmse = 10600;
    const getY_RMSE = val => padding.top + chartH - ((val - minRmse) / (maxRmse - minRmse)) * chartH;

    // Y Axis 2 (R²): Min 0.930 to Max 0.950
    const minR2 = 0.930;
    const maxR2 = 0.950;
    const getY_R2 = val => padding.top + chartH - ((val - minR2) / (maxR2 - minR2)) * chartH;

    // X Axis: 5 steps (1 to 5)
    const getX = stepIndex => padding.left + (stepIndex / (FS_DATA.length - 1)) * chartW;

    // 1. Draw horizontal grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 1;
    for (let rmse = 8000; rmse <= 10500; rmse += 500) {
      const y = getY_RMSE(rmse);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      // Left Y-axis label (RMSE)
      ctx.fillStyle = "#64748b";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(`$${rmse.toLocaleString()}`, padding.left - 10, y + 4);
    }

    // Right Y-axis labels (R²)
    for (let r2 = 0.930; r2 <= 0.950; r2 += 0.005) {
      const y = getY_R2(r2);
      ctx.fillStyle = "#a855f7";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "left";
      ctx.fillText(r2.toFixed(3), w - padding.right + 10, y + 4);
    }

    // 2. Draw vertical grid & X labels
    FS_DATA.forEach((item, idx) => {
      const x = getX(idx);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + chartH);
      ctx.stroke();

      // X Label
      ctx.fillStyle = idx === 1 ? "#10b981" : "#94a3b8";
      ctx.font = idx === 1 ? "bold 12px Inter, sans-serif" : "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`k = ${item.step}`, x, padding.top + chartH + 20);
      ctx.font = "10px Inter, sans-serif";
      ctx.fillStyle = "#64748b";
      ctx.fillText(item.feature, x, padding.top + chartH + 34);
    });

    // 3. Highlight Step 2 Optimal Vertical Band
    const optX = getX(1);
    ctx.fillStyle = "rgba(16, 185, 129, 0.08)";
    ctx.fillRect(optX - 35, padding.top, 70, chartH);
    ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(optX - 35, padding.top, 70, chartH);
    ctx.setLineDash([]);

    // 4. Draw Line Function
    function drawCurve(dataKey, color, isR2 = false) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;

      FS_DATA.forEach((d, idx) => {
        const x = getX(idx);
        const y = isR2 ? getY_R2(d[dataKey]) : getY_RMSE(d[dataKey]);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Draw point markers
      FS_DATA.forEach((d, idx) => {
        const x = getX(idx);
        const y = isR2 ? getY_R2(d[dataKey]) : getY_RMSE(d[dataKey]);

        ctx.fillStyle = "#0e121e";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(x, y, idx === 1 ? 6.5 : 4.5, 0, Math.PI * 2);
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

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
}

/* ==========================================================================
   3. INTERACTIVE STARTUP PROFIT SIMULATOR
   ========================================================================== */
function initSimulator() {
  const rangeRd = document.getElementById("rangeRd");
  const rangeMarketing = document.getElementById("rangeMarketing");
  const rangeAdmin = document.getElementById("rangeAdmin");
  const selectState = document.getElementById("selectState");
  const modelSelect = document.getElementById("simModelSelect");
  const btnReset = document.getElementById("btnResetSim");

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

    // Update display labels
    displayRd.textContent = formatMoney(rd);
    displayMarketing.textContent = formatMoney(marketing);
    displayAdmin.textContent = formatMoney(admin);

    // Calculate Optimal Model (k=2)
    // Formula: 46346.33876 + 0.788618 * R&D + 0.032577 * Marketing
    const optProfit = MODELS.optimal.intercept +
                      MODELS.optimal.coef.rd * rd +
                      MODELS.optimal.coef.marketing * marketing;

    // Calculate Full Model (k=5)
    // Formula: 42554.16762 + 0.773467 * R&D + 0.032885 * Admin + 0.036610 * Marketing + State
    let statePenalty = 0;
    if (state === "Florida") statePenalty = MODELS.full.coef.stateFL;
    else if (state === "New York") statePenalty = MODELS.full.coef.stateNY;

    const fullProfit = MODELS.full.intercept +
                       MODELS.full.coef.rd * rd +
                       MODELS.full.coef.admin * admin +
                       MODELS.full.coef.marketing * marketing +
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

        // Waterfall attribution
        const baseImpact = MODELS.optimal.intercept;
        const rdImpact = MODELS.optimal.coef.rd * rd;
        const mktImpact = MODELS.optimal.coef.marketing * marketing;

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

        // Waterfall attribution
        const baseImpact = MODELS.full.intercept;
        const rdImpact = MODELS.full.coef.rd * rd;
        const mktImpact = MODELS.full.coef.marketing * marketing;
        const admImpact = MODELS.full.coef.admin * admin;

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

  // Event Listeners
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

  // Initial Calculation
  updatePrediction();
}

/* ==========================================================================
   4. INTERACTIVE 50 STARTUPS DATASET EXPLORER
   ========================================================================== */
function initDatasetExplorer() {
  const tableBody = document.getElementById("startupsTableBody");
  const searchInput = document.getElementById("datasetSearch");
  const filterPills = document.querySelectorAll(".filter-pill");
  const visibleCount = document.getElementById("visibleCount");
  const avgProfitDisplay = document.getElementById("avgProfitDisplay");
  const avgRdDisplay = document.getElementById("avgRdDisplay");
  const headers = document.querySelectorAll("#interactiveStartupsTable th");

  let currentFilter = "all";
  let searchQuery = "";
  let sortField = "id";
  let sortDirection = "asc";

  function formatCurrency(val) {
    return "$" + val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function renderTable() {
    let filtered = STARTUPS_DATA.map((item, idx) => ({ ...item, id: idx + 1 }));

    // Apply State Filter
    if (currentFilter !== "all") {
      filtered = filtered.filter(row => row.State === currentFilter);
    }

    // Apply Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(row => {
        return (
          row.State.toLowerCase().includes(q) ||
          row["R&D Spend"].toString().includes(q) ||
          row.Administration.toString().includes(q) ||
          row["Marketing Spend"].toString().includes(q) ||
          row.Profit.toString().includes(q)
        );
      });
    }

    // Apply Sorting
    filtered.sort((a, b) => {
      let valA, valB;
      if (sortField === "id") { valA = a.id; valB = b.id; }
      else if (sortField === "rd") { valA = a["R&D Spend"]; valB = b["R&D Spend"]; }
      else if (sortField === "admin") { valA = a.Administration; valB = b.Administration; }
      else if (sortField === "marketing") { valA = a["Marketing Spend"]; valB = b["Marketing Spend"]; }
      else if (sortField === "state") { valA = a.State; valB = b.State; }
      else if (sortField === "profit") { valA = a.Profit; valB = b.Profit; }

      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    // Populate Table
    tableBody.innerHTML = "";
    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">No startups found matching criteria.</td></tr>`;
    } else {
      filtered.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="font-mono text-muted">${row.id}</td>
          <td class="font-mono">${formatCurrency(row["R&D Spend"])}</td>
          <td class="font-mono">${formatCurrency(row.Administration)}</td>
          <td class="font-mono">${formatCurrency(row["Marketing Spend"])}</td>
          <td><span class="badge ${getStateBadgeClass(row.State)}">${row.State}</span></td>
          <td class="font-mono text-green font-bold"><strong>${formatCurrency(row.Profit)}</strong></td>
        `;
        tableBody.appendChild(tr);
      });
    }

    // Update Stats Summary
    visibleCount.textContent = filtered.length;
    if (filtered.length > 0) {
      const totalProfit = filtered.reduce((acc, r) => acc + r.Profit, 0);
      const totalRd = filtered.reduce((acc, r) => acc + r["R&D Spend"], 0);
      avgProfitDisplay.textContent = formatCurrency(totalProfit / filtered.length);
      avgRdDisplay.textContent = formatCurrency(totalRd / filtered.length);
    } else {
      avgProfitDisplay.textContent = "$0.00";
      avgRdDisplay.textContent = "$0.00";
    }
  }

  function getStateBadgeClass(state) {
    if (state === "California") return "badge-accent";
    if (state === "New York") return "pill-purple";
    return "pill-green";
  }

  // Search input handler
  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value;
    renderTable();
  });

  // Filter pills handler
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.getAttribute("data-state");
      renderTable();
    });
  });

  // Sorting header click handler
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (sortField === field) {
        sortDirection = sortDirection === "asc" ? "desc" : "asc";
      } else {
        sortField = field;
        sortDirection = "desc";
      }
      renderTable();
    });
  });

  // Initial render
  renderTable();
}
