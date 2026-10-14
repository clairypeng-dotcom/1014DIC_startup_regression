"""
Boston Housing Multiple Linear Regression and Forward Selection using CRISP-DM
Assignment: Boston Housing Regression Extension
Author: AI Pair Programmer & pengjie

This script follows the CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology:
1. Business Understanding
2. Data Understanding
3. Data Preparation
4. Modeling
5. Evaluation
6. Deployment (Summary & Artifact generation)
"""

import os
import sys
import io
import json
import requests
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from tabulate import tabulate

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error


DATA_URL = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
OUTPUT_DIR = "outputs"

FEATURE_DESCRIPTIONS = {
    "crim": "Per capita crime rate by town",
    "zn": "Proportion of residential land zoned for lots over 25,000 sq.ft.",
    "indus": "Proportion of non-retail business acres per town",
    "chas": "Charles River dummy variable (= 1 if tract bounds river; 0 otherwise)",
    "nox": "Nitric oxides concentration (parts per 10 million)",
    "rm": "Average number of rooms per dwelling",
    "age": "Proportion of owner-occupied units built prior to 1940",
    "dis": "Weighted distances to five Boston employment centres",
    "rad": "Index of accessibility to radial highways",
    "tax": "Full-value property-tax rate per $10,000",
    "ptratio": "Pupil-teacher ratio by town",
    "b": "1000(Bk - 0.63)^2 where Bk is proportion of Black residents by town",
    "lstat": "Percentage lower status of the population",
    "medv": "Median value of owner-occupied homes in $1000's (Target)"
}


def phase_business_understanding():
    """
    Phase 1: Business Understanding
    Defines the project objective, business context, and Hedonic pricing framework.
    """
    print("\n" + "=" * 80)
    print("PHASE 1: BUSINESS UNDERSTANDING (BOSTON HOUSING)")
    print("=" * 80)
    explanation = """
Objective:
    Predict the median value of owner-occupied homes ('medv' in $1,000s) across 506 Boston
    census tracts based on structural attributes, neighborhood demographics, accessibility,
    and environmental factors using Multiple Linear Regression and Forward Selection.

Economic & Urban Planning Context:
    1. Real Estate Valuation & Hedonic Pricing:
       - Quantify marginal willingness-to-pay for key home attributes (e.g., number of rooms 'rm',
         neighborhood socio-economic tier 'lstat', and public school quality 'ptratio').
       - Enable municipal assessors, mortgage underwriters, and property buyers to estimate
         fair market valuations using transparent, interpretable regression baselines.
    2. Urban Economics & Public Policy:
       - Measure the negative economic externalities of environmental pollution (nitric oxide 'nox')
         and crime rates ('crim') on residential property values.
       - Assess the economic dividend of municipal infrastructure investments (e.g., transit accessibility 'rad').
    3. Feature Selection & Model Parsimony (Occam's Razor):
       - With 13 candidate predictors, identify which structural and environmental features
         contribute genuine out-of-sample predictive power versus those introducing multicollinearity
         or overfitting (e.g., property age vs tax rates).
    """
    print(explanation.strip())


def phase_data_understanding():
    """
    Phase 2: Data Understanding
    Downloads Boston Housing dataset using requests, checks integrity, and inspects structure.
    """
    print("\n" + "=" * 80)
    print("PHASE 2: DATA UNDERSTANDING (BOSTON HOUSING)")
    print("=" * 80)
    print(f"Downloading dataset from: {DATA_URL}")

    try:
        response = requests.get(DATA_URL, timeout=15)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"\n[ERROR] Failed to download dataset from {DATA_URL}!")
        print(f"Details: {e}")
        print("Please check your internet connection or verify the URL before re-running.")
        sys.exit(1)

    print("[SUCCESS] Dataset downloaded successfully.")

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    csv_text = response.text
    df = pd.read_csv(io.StringIO(csv_text))

    # Save local CSV copy for offline reproducibility
    csv_save_path = os.path.join(OUTPUT_DIR, "boston_housing.csv")
    df.to_csv(csv_save_path, index=False)
    print(f"[SAVED] Raw Boston Housing dataset saved locally to: {csv_save_path}")

    # Save JSON version for frontend interactive explorer
    json_save_path = os.path.join(OUTPUT_DIR, "boston_housing_data.json")
    df.to_json(json_save_path, orient="records", indent=2)
    print(f"[SAVED] Boston Housing JSON records saved to: {json_save_path}")

    print(f"\nDataset Shape: {df.shape[0]} rows (census tracts), {df.shape[1]} columns")
    print("\nColumns and Data Dictionary:")
    col_summary = []
    for col in df.columns:
        col_summary.append({
            "Column": col,
            "Dtype": str(df[col].dtype),
            "Description": FEATURE_DESCRIPTIONS.get(col, "N/A")
        })
    print(tabulate(col_summary, headers="keys", tablefmt="github"))

    print("\nFirst 5 Records:")
    print(tabulate(df.head(), headers="keys", tablefmt="github", showindex=False))

    print("\nMissing Values Count per Column:")
    missing = df.isnull().sum()
    missing_df = pd.DataFrame({"Column": missing.index, "Missing Count": missing.values})
    print(tabulate(missing_df, headers="keys", tablefmt="github", showindex=False))

    print("\nDescriptive Statistics:")
    print(tabulate(df.describe(), headers="keys", tablefmt="github"))

    return df


def phase_data_preparation(df: pd.DataFrame):
    """
    Phase 3: Data Preparation
    Splits features and target 'medv', performs train/test split (80/20, random_state=0).
    """
    print("\n" + "=" * 80)
    print("PHASE 3: DATA PREPARATION (BOSTON HOUSING)")
    print("=" * 80)

    target_col = "medv"
    feature_cols = [col for col in df.columns if col != target_col]

    X = df[feature_cols]
    y = df[target_col]

    print(f"Feature matrix X shape: {X.shape} (13 predictors)")
    print(f"Target vector y shape: {y.shape} ('medv' in $1,000s)")
    print("Features:", list(X.columns))

    # Split into train and test sets with test_size=0.2, random_state=0
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=0
    )

    print(f"\nTrain set: {X_train.shape[0]} samples (80.0%)")
    print(f"Test set:  {X_test.shape[0]} samples (20.0%)")

    return X_train, X_test, y_train, y_test, feature_cols


def phase_modeling(X_train: pd.DataFrame, y_train: pd.Series):
    """
    Phase 4: Modeling
    Trains Multiple Linear Regression on all 13 features using sklearn.
    """
    print("\n" + "=" * 80)
    print("PHASE 4: MODELING (FULL 13-FEATURE OLS MODEL)")
    print("=" * 80)

    model = LinearRegression()
    model.fit(X_train, y_train)

    print("Multiple Linear Regression trained successfully.")
    print(f"Intercept (beta_0): {model.intercept_:.4f}")
    print("\nCoefficients & Interpretations:")
    coef_df = pd.DataFrame({
        "Feature": X_train.columns,
        "Coefficient": model.coef_,
        "Impact on Price": [
            f"{c:+.4f} ($ {c*1000:+.0f})" for c in model.coef_
        ],
        "Description": [FEATURE_DESCRIPTIONS.get(col, "") for col in X_train.columns]
    })
    print(tabulate(coef_df, headers="keys", tablefmt="github", showindex=False))

    return model


def phase_evaluation(model: LinearRegression, X_test: pd.DataFrame, y_test: pd.Series):
    """
    Phase 5: Evaluation
    Evaluates model on test set: R2, MAE, MSE, RMSE and plots Actual vs Predicted home prices.
    """
    print("\n" + "=" * 80)
    print("PHASE 5: EVALUATION (FULL 13-FEATURE MODEL)")
    print("=" * 80)

    y_pred = model.predict(X_test)

    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)

    eval_results = pd.DataFrame({
        "Metric": ["R-squared (R2)", "MAE ($k)", "MSE", "RMSE ($k)", "MAE ($)", "RMSE ($)"],
        "Value": [
            f"{r2:.4f}",
            f"{mae:.2f}",
            f"{mse:.2f}",
            f"{rmse:.2f}",
            f"${mae*1000:,.0f}",
            f"${rmse*1000:,.0f}"
        ]
    })
    print(tabulate(eval_results, headers="keys", tablefmt="github", showindex=False))

    # Plot Actual vs Predicted Housing Prices
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    plot_path = os.path.join(OUTPUT_DIR, "boston_actual_vs_predicted.png")

    plt.figure(figsize=(8, 6), dpi=300)
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')

    # Scatter plot
    plt.scatter(y_test, y_pred, color="#0ea5e9", edgecolor="#0369a1", s=80, alpha=0.85, label="Test Tracts (N=102)")

    # Reference perfect prediction line (y = x)
    min_val = min(y_test.min(), y_pred.min()) * 0.95
    max_val = max(y_test.max(), y_pred.max()) * 1.05
    plt.plot([min_val, max_val], [min_val, max_val], color="#ef4444", linestyle="--", linewidth=2, label="Ideal Line (y = x)")

    plt.title("Actual vs. Predicted Median Home Value (Boston Housing)", fontsize=14, fontweight="bold", pad=12)
    plt.xlabel("Actual Median Home Value ($1,000s)", fontsize=12, labelpad=8)
    plt.ylabel("Predicted Median Home Value ($1,000s)", fontsize=12, labelpad=8)
    plt.xlim(min_val, max_val)
    plt.ylim(min_val, max_val)

    # Annotation box with metrics
    textstr = f"$R^2 = {r2:.4f}$\n$RMSE = \\${rmse*1000:,.0f}$ ({rmse:.2f}k)\n$MAE = \\${mae*1000:,.0f}$ ({mae:.2f}k)"
    props = dict(boxstyle="round,pad=0.5", facecolor="#f8f9fa", edgecolor="#ced4da", alpha=0.9)
    plt.text(0.05, 0.92, textstr, transform=plt.gca().transAxes, fontsize=11,
             verticalalignment="top", bbox=props)

    plt.legend(loc="lower right", frameon=True)
    plt.tight_layout()
    plt.savefig(plot_path, dpi=300)
    plt.close()
    print(f"\n[SAVED] Scatter plot successfully saved to: {plot_path}")

    return {
        "R2": r2,
        "MAE": mae,
        "MSE": mse,
        "RMSE": rmse,
        "y_pred": y_pred
    }


def forward_selection(X_train: pd.DataFrame, y_train: pd.Series,
                      X_test: pd.DataFrame, y_test: pd.Series,
                      max_features: int = 13, n_splits: int = 5):
    """
    Forward Selection Feature Selection Algorithm for Boston Housing.
    
    Rules:
    - Iteratively selects 1, 2, ..., max_features features.
    - At each step, selects the feature that minimizes the 5-fold cross-validation RMSE
      on the TRAINING SET.
    - Strictly does NOT use the test set for feature selection (Zero Test Leakage).
    - For each selected subset, retrains on full training set and computes test set RMSE and R2.
    """
    print("\n" + "=" * 80)
    print("FORWARD SELECTION (5-FOLD CV ON TRAINING SET - BOSTON HOUSING)")
    print("=" * 80)

    selected_features = []
    remaining_features = list(X_train.columns)

    total_steps = min(max_features, len(remaining_features))
    results = []

    # 5-fold cross-validation configuration on training set
    kf = KFold(n_splits=n_splits, shuffle=True, random_state=0)

    for step in range(1, total_steps + 1):
        best_candidate = None
        best_cv_rmse = float("inf")

        for candidate in remaining_features:
            current_candidates = selected_features + [candidate]
            X_sub = X_train[current_candidates]

            lr_cv = LinearRegression()

            # Cross validation scoring
            neg_mse_scores = cross_val_score(
                lr_cv, X_sub, y_train, cv=kf, scoring="neg_mean_squared_error"
            )
            fold_rmses = np.sqrt(-neg_mse_scores)
            mean_cv_rmse = np.mean(fold_rmses)

            if mean_cv_rmse < best_cv_rmse:
                best_cv_rmse = mean_cv_rmse
                best_candidate = candidate

        # Update selected and remaining feature sets
        selected_features.append(best_candidate)
        remaining_features.remove(best_candidate)

        # Retrain model on full training set with current selected features
        final_model_k = LinearRegression()
        final_model_k.fit(X_train[selected_features], y_train)

        # Evaluate on test set
        y_test_pred = final_model_k.predict(X_test[selected_features])
        test_rmse = np.sqrt(mean_squared_error(y_test, y_test_pred))
        test_r2 = r2_score(y_test, y_test_pred)

        results.append({
            "Step (k)": step,
            "Added Feature": best_candidate,
            "Selected Features": ", ".join(selected_features),
            "Train 5-Fold CV RMSE": round(best_cv_rmse, 4),
            "Test RMSE": round(test_rmse, 4),
            "Test R-squared": round(test_r2, 4)
        })

    results_df = pd.DataFrame(results)

    # Print Markdown table using tabulate
    print("\nBoston Housing Forward Selection Summary Table:")
    print(tabulate(results_df, headers="keys", tablefmt="github", showindex=False))

    # Save to CSV
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    csv_path = os.path.join(OUTPUT_DIR, "boston_forward_selection_results.csv")
    results_df.to_csv(csv_path, index=False)
    print(f"\n[SAVED] Forward selection results successfully saved to: {csv_path}")

    return results_df


def main():
    print("=" * 80)
    print("BOSTON HOUSING REGRESSION & FORWARD SELECTION PIPELINE")
    print("=" * 80)

    # Step 1: Business Understanding
    phase_business_understanding()

    # Step 2: Data Understanding
    df = phase_data_understanding()

    # Step 3: Data Preparation
    X_train, X_test, y_train, y_test, feature_names = phase_data_preparation(df)

    # Step 4: Modeling (Full model with all 13 features)
    full_model = phase_modeling(X_train, y_train)

    # Step 5: Evaluation (Full model)
    eval_metrics = phase_evaluation(full_model, X_test, y_test)

    # Step 6: Forward Selection (k = 1 to 13 features)
    fs_results = forward_selection(X_train, y_train, X_test, y_test, max_features=13, n_splits=5)

    print("\n" + "=" * 80)
    print("BOSTON PIPELINE COMPLETED SUCCESSFULLY!")
    print(f"Artifacts generated:")
    print(f"  - outputs/boston_housing.csv")
    print(f"  - outputs/boston_housing_data.json")
    print(f"  - outputs/boston_actual_vs_predicted.png")
    print(f"  - outputs/boston_forward_selection_results.csv")
    print("=" * 80)


if __name__ == "__main__":
    main()
