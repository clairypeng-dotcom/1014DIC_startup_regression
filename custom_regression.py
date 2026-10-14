"""
Custom Dataset Multiple Linear Regression & Forward Selection (CRISP-DM Pipeline)
Author: AI Pair Programmer & pengjie

Accepts any CSV dataset URL or local CSV path, performs automatic data cleaning,
one-hot encoding (drop_first=True), OLS Multiple Linear Regression,
5-fold cross-validation forward selection, evaluation, and artifact generation.

Example Usage:
    python custom_regression.py --url https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv
"""

import os
import sys
import io
import argparse
import requests
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from tabulate import tabulate

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error


DEFAULT_URL = "https://raw.githubusercontent.com/Avik-Jain/100-Days-Of-ML-Code/master/datasets/50_Startups.csv"
OUTPUT_DIR = "outputs"


def load_dataset(source: str) -> pd.DataFrame:
    """Loads dataset from URL or local file path."""
    print(f"\n[LOAD] Loading dataset from: {source}")
    if source.startswith("http://") or source.startswith("https://"):
        try:
            resp = requests.get(source, timeout=15)
            resp.raise_for_status()
            df = pd.read_csv(io.StringIO(resp.text))
        except Exception as e:
            print(f"[ERROR] Failed to load URL: {e}")
            sys.exit(1)
    else:
        if not os.path.exists(source):
            print(f"[ERROR] Local file not found: {source}")
            sys.exit(1)
        df = pd.read_csv(source)

    # Clean column names (strip whitespace)
    df.columns = [c.strip() for c in df.columns]
    print(f"[SUCCESS] Dataset loaded successfully. Shape: {df.shape[0]} rows, {df.shape[1]} columns")
    return df


def phase_data_understanding(df: pd.DataFrame, target_col: str):
    print("\n" + "=" * 80)
    print("PHASE 2: DATA UNDERSTANDING (CUSTOM DATASET)")
    print("=" * 80)
    print(f"Target Column specified: '{target_col}'")
    print("\nColumn Information & Missing Counts:")
    missing = df.isnull().sum()
    info = []
    for col in df.columns:
        info.append({
            "Column": col,
            "Type": str(df[col].dtype),
            "Missing": int(missing[col]),
            "Is Target": "YES" if col == target_col else "No"
        })
    print(tabulate(info, headers="keys", tablefmt="github"))

    print("\nFirst 5 Records:")
    print(tabulate(df.head(), headers="keys", tablefmt="github", showindex=False))

    print("\nSummary Statistics:")
    print(tabulate(df.describe(), headers="keys", tablefmt="github"))


def phase_data_preparation(df: pd.DataFrame, target_col: str):
    print("\n" + "=" * 80)
    print("PHASE 3: DATA PREPARATION (CUSTOM DATASET)")
    print("=" * 80)

    # Drop missing values if any
    cleaned_df = df.dropna().copy()
    if len(cleaned_df) < len(df):
        print(f"[WARN] Dropped {len(df) - len(cleaned_df)} rows containing missing values.")

    if target_col not in cleaned_df.columns:
        # Default to the last numeric column
        numeric_cols = cleaned_df.select_dtypes(include=[np.number]).columns.tolist()
        if not numeric_cols:
            print("[ERROR] No numeric columns available for regression target.")
            sys.exit(1)
        target_col = numeric_cols[-1]
        print(f"[AUTO-DETECT] Defaulted target variable to: '{target_col}'")

    # One-hot encode categorical features with drop_first=True
    cat_cols = cleaned_df.select_dtypes(include=['object', 'category']).columns.tolist()
    if target_col in cat_cols:
        cat_cols.remove(target_col)

    if cat_cols:
        print(f"Applying One-Hot Encoding (drop_first=True) on categorical features: {cat_cols}")
        df_encoded = pd.get_dummies(cleaned_df, columns=cat_cols, drop_first=True, dtype=int)
    else:
        df_encoded = cleaned_df.copy()

    X = df_encoded.drop(columns=[target_col])
    # Ensure all feature columns are numeric
    X = X.select_dtypes(include=[np.number])
    y = df_encoded[target_col].astype(float)

    print(f"Feature matrix X shape: {X.shape}")
    print(f"Target vector y shape: {y.shape}")
    print("Features list:", list(X.columns))

    # 80/20 train/test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=0
    )

    print(f"Train samples: {len(X_train)} (80%) | Test samples: {len(X_test)} (20%)")
    return X_train, X_test, y_train, y_test, list(X.columns)


def phase_modeling(X_train: pd.DataFrame, y_train: pd.Series):
    print("\n" + "=" * 80)
    print("PHASE 4: MODELING (FULL FEATURE OLS REGRESSION)")
    print("=" * 80)

    model = LinearRegression()
    model.fit(X_train, y_train)

    print(f"Model Intercept (beta_0): {model.intercept_:.4f}")
    coef_df = pd.DataFrame({
        "Feature": X_train.columns,
        "Coefficient": model.coef_
    })
    print(tabulate(coef_df, headers="keys", tablefmt="github", showindex=False))
    return model


def phase_evaluation(model: LinearRegression, X_test: pd.DataFrame, y_test: pd.Series, target_name: str):
    print("\n" + "=" * 80)
    print("PHASE 5: EVALUATION")
    print("=" * 80)

    y_pred = model.predict(X_test)
    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)

    eval_df = pd.DataFrame({
        "Metric": ["R-squared (R2)", "MAE", "MSE", "RMSE"],
        "Value": [f"{r2:.4f}", f"{mae:.4f}", f"{mse:.4f}", f"{rmse:.4f}"]
    })
    print(tabulate(eval_df, headers="keys", tablefmt="github", showindex=False))

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    plot_path = os.path.join(OUTPUT_DIR, "custom_actual_vs_predicted.png")

    plt.figure(figsize=(8, 6), dpi=300)
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')

    plt.scatter(y_test, y_pred, color="#6366f1", edgecolor="#312e81", s=80, alpha=0.85, label="Test Samples")

    min_val = min(y_test.min(), y_pred.min()) * 0.95
    max_val = max(y_test.max(), y_pred.max()) * 1.05
    plt.plot([min_val, max_val], [min_val, max_val], color="#ef4444", linestyle="--", linewidth=2, label="Ideal Line (y = x)")

    plt.title(f"Actual vs. Predicted {target_name} (Custom Dataset)", fontsize=13, fontweight="bold", pad=12)
    plt.xlabel(f"Actual {target_name}", fontsize=11, labelpad=8)
    plt.ylabel(f"Predicted {target_name}", fontsize=11, labelpad=8)
    plt.xlim(min_val, max_val)
    plt.ylim(min_val, max_val)

    textstr = f"$R^2 = {r2:.4f}$\n$RMSE = {rmse:.4f}$\n$MAE = {mae:.4f}$"
    props = dict(boxstyle="round,pad=0.5", facecolor="#f8f9fa", edgecolor="#ced4da", alpha=0.9)
    plt.text(0.05, 0.92, textstr, transform=plt.gca().transAxes, fontsize=11,
             verticalalignment="top", bbox=props)

    plt.legend(loc="lower right", frameon=True)
    plt.tight_layout()
    plt.savefig(plot_path, dpi=300)
    plt.close()
    print(f"\n[SAVED] Scatter plot successfully saved to: {plot_path}")

    return {"r2": r2, "rmse": rmse, "mae": mae, "mse": mse}


def forward_selection(X_train: pd.DataFrame, y_train: pd.Series,
                      X_test: pd.DataFrame, y_test: pd.Series,
                      max_features: int = 15, n_splits: int = 5):
    print("\n" + "=" * 80)
    print("FORWARD SELECTION (5-FOLD CV ON TRAINING SET)")
    print("=" * 80)

    selected_features = []
    remaining_features = list(X_train.columns)
    total_steps = min(max_features, len(remaining_features))
    results = []

    # Handle small datasets where n_splits might exceed train size
    n_splits = min(n_splits, len(X_train))
    kf = KFold(n_splits=n_splits, shuffle=True, random_state=0)

    for step in range(1, total_steps + 1):
        best_candidate = None
        best_cv_rmse = float("inf")

        for candidate in remaining_features:
            current_candidates = selected_features + [candidate]
            X_sub = X_train[current_candidates]

            lr_cv = LinearRegression()
            neg_mse = cross_val_score(lr_cv, X_sub, y_train, cv=kf, scoring="neg_mean_squared_error")
            mean_cv_rmse = np.mean(np.sqrt(-neg_mse))

            if mean_cv_rmse < best_cv_rmse:
                best_cv_rmse = mean_cv_rmse
                best_candidate = candidate

        selected_features.append(best_candidate)
        remaining_features.remove(best_candidate)

        # Train model with current subset
        model_k = LinearRegression()
        model_k.fit(X_train[selected_features], y_train)

        # Evaluate on test set
        y_test_pred = model_k.predict(X_test[selected_features])
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
    print("\nForward Selection Summary Table:")
    print(tabulate(results_df, headers="keys", tablefmt="github", showindex=False))

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    csv_path = os.path.join(OUTPUT_DIR, "custom_forward_selection_results.csv")
    results_df.to_csv(csv_path, index=False)
    print(f"\n[SAVED] Forward selection results saved to: {csv_path}")
    return results_df


def main():
    parser = argparse.ArgumentParser(description="Custom Dataset Regression & Forward Selection")
    parser.add_argument("--url", type=str, default=DEFAULT_URL, help="URL or path to CSV dataset")
    parser.add_argument("--target", type=str, default="Profit", help="Target variable column name")
    args = parser.parse_args()

    df = load_dataset(args.url)
    target_col = args.target if args.target in df.columns else df.columns[-1]

    phase_data_understanding(df, target_col)
    X_train, X_test, y_train, y_test, features = phase_data_preparation(df, target_col)
    full_model = phase_modeling(X_train, y_train)
    eval_metrics = phase_evaluation(full_model, X_test, y_test, target_col)
    fs_results = forward_selection(X_train, y_train, X_test, y_test)

    print("\n" + "=" * 80)
    print("CUSTOM DATASET PIPELINE COMPLETED SUCCESSFULLY!")
    print("=" * 80)


if __name__ == "__main__":
    main()
