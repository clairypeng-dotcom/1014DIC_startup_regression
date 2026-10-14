# Machine Learning Regression Analytics Studio: 50 Startups & Boston Housing (CRISP-DM)

A dual-domain empirical Machine Learning project implementing Multiple Linear Regression and Forward Selection under the **CRISP-DM** (Cross-Industry Standard Process for Data Mining) framework. Featuring interactive web dashboards, real-time prediction engines, 5-fold cross-validation analytics, and publication-quality diagnostic plots.

---

## Table of Contents
- [Executive Overview](#executive-overview)
- [Project Architecture & Deliverables](#project-architecture--deliverables)
- [Dataset 1: 50 Startups Profitability](#dataset-1-50-startups-profitability)
  - [CRISP-DM 6 Phases](#startups-crisp-dm-6-phases)
  - [Forward Selection Results (k=1..5)](#startups-forward-selection-results)
- [Dataset 2: Boston Housing Valuation](#dataset-2-boston-housing-valuation)
  - [CRISP-DM 6 Phases](#boston-crisp-dm-6-phases)
  - [Forward Selection Results (k=1..13)](#boston-forward-selection-results)
- [Interactive Web Application Features](#interactive-web-application-features)
- [Environment Setup & Reproduction Guide](#environment-setup--reproduction-guide)

---

## Executive Overview

This study explores multiple linear regression across two distinct domains:
1. **Corporate Financial Planning (50 Startups)**: Predicting commercial profitability from operational allocations (R&D, Marketing, Administration, Geography).
2. **Urban Real Estate Economics (Boston Housing)**: Hedonic pricing estimation for 506 census tracts across structural attributes (`rm`, `age`), demographics (`lstat`, `ptratio`), and environmental factors (`nox`, `chas`, `dis`).

### Summary of Key Findings

| Domain | Dataset | Sample Size | Features | Full Model Test R² | Optimal Model (CV Winner) | Optimal Test R² | Optimal Test RMSE |
|---|---|---|---|---|---|---|---|
| **Venture Capital** | 50 Startups | 50 | 5 | 0.9347 | **k = 2** (`R&D + Marketing`) | **0.9474** | **$8,198.80** |
| **Real Estate** | Boston Housing | 506 | 13 | 0.5892 | **k = 12** (`All except Age`) | **0.5897** | **$5,780.20** |

- **Occam's Razor Proven**: In both datasets, greedy forward selection guided strictly by **5-Fold Cross-Validation on the Training Set** discovered more parsimonious models that outperform the full feature baselines on held-out test data.
- **Primary Value Drivers**:
  - In 50 Startups: `R&D Spend` drives over 94.6% of profit variation ($\beta \approx +0.7735$).
  - In Boston Housing: `Average Rooms (RM)` adds **+$3,709** per room, while `Lower Status Population (LSTAT)` reduces median value by **-$493** per 1% increase, and Charles River waterfront parcels command a **+$2,341** premium.

---

## Project Architecture & Deliverables

```text
startup_regression/
├── boston_data.js                     # Embedded Boston Housing data for offline execution
├── boston_regression.py               # Complete CRISP-DM pipeline for Boston Housing
├── startup_regression.py              # Complete CRISP-DM pipeline for 50 Startups
├── index.html                         # Interactive dual-dataset web dashboard
├── style.css                          # Dark glassmorphism design system
├── app.js                             # Multi-dataset controller, charts & live simulators
├── requirements.txt                   # Python dependencies
├── README.md                          # Comprehensive project technical report
└── outputs/                           # Generated empirical artifacts
    ├── actual_vs_predicted_profit.png # Startups 300-DPI scatter plot
    ├── boston_actual_vs_predicted.png # Boston Housing 300-DPI scatter plot
    ├── boston_forward_selection_results.csv # Boston 13-step selection table
    ├── boston_housing.csv             # Local copy of raw Boston Housing dataset
    ├── boston_housing_data.json       # JSON formatted records
    ├── forward_selection_results.csv  # Startups 5-step selection table
    └── startups_data.json             # Startups JSON records
```

---

## Dataset 1: 50 Startups Profitability

### Startups CRISP-DM 6 Phases

1. **Business Understanding**: Underwrite venture capital investments, maximize capital efficiency, and model the financial return of R&D vs administrative overhead.
2. **Data Understanding**: 50 records from US startups across California, New York, and Florida. Zero missing values. Mean profit = $112,012.64.
3. **Data Preparation**: One-Hot Encoding on `State` with `drop_first=True` to eliminate the dummy variable trap. 80/20 train/test split (40 train / 10 test, `random_state=0`).
4. **Modeling**: Ordinary Least Squares (OLS) Multiple Linear Regression.
   $$\text{Predicted Profit} = 42,554.17 + 0.7735(\text{R&D}) + 0.0329(\text{Admin}) + 0.0366(\text{Mkt}) - 959.28(\text{FL}) + 699.37(\text{NY})$$
5. **Evaluation**: Test $R^2 = 0.9347$, Test RMSE = $9,137.99$, MAE = $7,514.29$. High linear fidelity along $y = x$.
6. **Deployment**: Saved publication-grade plot (`actual_vs_predicted_profit.png`) and tabular CSV metrics.

### Startups Forward Selection Results

| Step (k) | Added Feature | Selected Features | Train 5-Fold CV RMSE | Test RMSE | Test R² | Status |
|:---:|---|---|:---:|:---:|:---:|:---:|
| 1 | R&D Spend | `R&D Spend` | $9,745.40 | $8,274.87 | 0.9465 | Baseline |
| **2** | **Marketing Spend** | `R&D Spend, Marketing Spend` | **$9,482.34** | **$8,198.80** | **0.9474** | **★ Optimal Model** |
| 3 | Administration | `R&D, Marketing, Admin` | $9,678.08 | $8,803.78 | 0.9394 | Overfitting Begins |
| 4 | State_Florida | `R&D, Marketing, Admin, State_FL` | $9,885.56 | $9,068.54 | 0.9357 | Increased Variance |
| 5 | State_New York | `All 5 Features` | $10,158.66 | $9,137.99 | 0.9347 | Full Model |

---

## Dataset 2: Boston Housing Valuation

### Boston CRISP-DM 6 Phases

1. **Business Understanding**: Estimate tract-level property values (`MEDV` in $1,000s) using Hedonic pricing. Benchmark structural features (`rm`), environmental externalities (`nox`), school quality (`ptratio`), and accessibility (`dis`, `rad`).
2. **Data Understanding**: 506 census tracts across 13 predictor columns + target (`medv`). Zero missing entries.
   - Mean price: $22,533 ($22.53k). Range: $5,000 to $50,000.
   - 35 tracts border the Charles River (`chas = 1`), 471 inland (`chas = 0`).
3. **Data Preparation**: 80/20 train/test split (404 train / 102 test, `random_state=0`). Zero test leakage during cross-validation.
4. **Modeling**: Full 13-feature OLS Multiple Linear Regression:
   $$\begin{aligned}
   \text{Predicted MEDV} = & \, 38.0917 - 0.1194(\text{CRIM}) + 0.0448(\text{ZN}) + 0.0055(\text{INDUS}) + 2.3408(\text{CHAS}) \\
   & - 16.1236(\text{NOX}) + 3.7087(\text{RM}) - 0.0031(\text{AGE}) - 1.3864(\text{DIS}) + 0.2442(\text{RAD}) \\
   & - 0.0110(\text{TAX}) - 1.0459(\text{PTRATIO}) + 0.0081(\text{B}) - 0.4928(\text{LSTAT})
   \end{aligned}$$
5. **Evaluation**: Full model test metrics on 102 held-out tracts: Test $R^2 = 0.5892$, Test RMSE = $5,783.51$, Test MAE = $3,842.91$.
6. **Deployment**: Saved local CSV (`boston_housing.csv`), JSON (`boston_housing_data.json`), forward selection CSV (`boston_forward_selection_results.csv`), and scatter plot (`boston_actual_vs_predicted.png`).

### Boston Forward Selection Results

| Step (k) | Added Feature | Train 5-Fold CV RMSE | Test RMSE | Test R² | Analytical Interpretation |
|:---:|---|:---:|:---:|:---:|---|
| 1 | `lstat` | 6.0468 ($6,047) | 6.8071 | 0.4310 | Primary demographic driver |
| 2 | `ptratio` | 5.4163 ($5,416) | 7.1752 | 0.3677 | School district quality |
| 3 | `rm` | 4.9392 ($4,939) | 6.4558 | 0.4882 | Core Hedonic structural factor |
| 4 | `b` | 4.8741 ($4,874) | 6.3836 | 0.4996 | Demographic index |
| 5 | `chas` | 4.8263 ($4,826) | 6.2939 | 0.5135 | Charles River waterfront premium |
| 6 | `dis` | 4.7971 ($4,797) | 6.0854 | 0.5452 | Commute distance to employment |
| 7 | `nox` | 4.6811 ($4,681) | 5.9729 | 0.5619 | Air pollution penalty |
| 8 | `crim` | 4.6656 ($4,666) | 6.0156 | 0.5556 | Crime rate penalty |
| 9 | `zn` | 4.6561 ($4,656) | 5.9582 | 0.5640 | Large lot residential zoning |
| 10 | `indus` | 4.6560 ($4,656) | 5.9707 | 0.5622 | Industrial/commercial ratio |
| 11 | `rad` | 4.6668 ($4,667) | 5.8583 | 0.5785 | Radial highway accessibility |
| **12** | **`tax`** | **4.6143 ($4,614)** | **5.7802** | **0.5897** | **★ Optimal Model (Min CV RMSE)** |
| 13 | `age` | 4.6493 ($4,649) | 5.7835 | 0.5892 | Redundant feature; degrades CV score |

---

## Interactive Web Application Features

The single unified web application (`index.html`) seamlessly switches between both datasets without reloading:
1. **Interactive Problem Dropdown Window**: Prominent dropdown windows located in both the sticky navigation bar and the Hero section allow users to expand a menu showing:
   - **Problem 1: 50 Startups Profitability** ($N=50$, $k=2$ Optimal, Test $R^2 = 0.9474$, Test RMSE = $8,198.80$)
   - **Problem 2: Boston Housing Valuation** ($N=506$, $k=12$ Optimal, Test $R^2 = 0.5897$, Test RMSE = $5,780.20$)
   Selecting either problem immediately updates the entire page's context with zero page reload.
2. **Dynamic Executive KPIs**: Automatically updates KPI cards, trends, and Occam's razor summaries.
3. **CRISP-DM 6-Phase Explorer**: Interactive tab navigation for Business Understanding, EDA tables, formulas, and 300-DPI scatter plots.
4. **HTML5 Canvas Error Curves**: High-DPI interactive chart displaying Train 5-Fold CV RMSE, Test RMSE, and Test R² curves with highlighted optimal steps.
5. **Live Prediction Simulators**:
   - **Startup Profit Simulator**: Adjust R&D, Marketing, Admin budgets and State headquarters with live waterfall profit attribution.
   - **Boston Home Valuation Estimator**: Interactive sliders for RM, LSTAT, PTRATIO, CRIM, TAX, NOX, and Charles River waterfront checkbox. Includes quick presets (*Beacon Hill Luxury*, *Suburban Family*, *Urban Flat*, *Industrial District*) and 95% valuation confidence intervals.
6. **Interactive Dataset Explorers**:
   - Filter pills (State filters for startups; River waterfront & price tier filters for Boston).
   - Real-time text search and click-to-sort on every column.
   - Summary statistics display bar.

---

## Environment Setup & Reproduction Guide

### 1. Prerequisites
- Python 3.9+ installed
- Modern web browser (Chrome, Edge, Safari, Firefox)

### 2. Setup Virtual Environment
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 3. Run Both Regression Pipelines
```bash
# Run 50 Startups Pipeline
python startup_regression.py

# Run Boston Housing Pipeline
python boston_regression.py
```

### 4. Launch the Interactive Dashboard
You can open `index.html` directly in your browser:
```bash
# macOS
open index.html

# Or launch a local development server
python -m http.server 8000
# Then visit: http://localhost:8000
```
