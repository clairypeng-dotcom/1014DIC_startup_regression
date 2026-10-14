"""
50 Startups Multiple Linear Regression and Forward Selection using CRISP-DM
Assignment: startup_regression
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
import requests
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from tabulate import tabulate

from sklearn.model_selection import train_test_split, KFold, cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error


DATA_URL = "https://raw.githubusercontent.com/harimittapalli/Mulitple-Linear-Reggression/master/50_Startups.csv"
OUTPUT_DIR = "outputs"


def phase_business_understanding():
    """
    Phase 1: Business Understanding
    Defines the project objective, business context, and problem statement.
    """
    print("\n" + "=" * 80)
    print("PHASE 1: BUSINESS UNDERSTANDING")
    print("=" * 80)
    explanation = """
Objective:
    Predict the profitability ('Profit') of startup companies based on their expenditures
    and geographic location, utilizing Multiple Linear Regression and Forward Selection.

Business Context & Value:
    1. Venture Capitalists & Angel Investors:
       - Evaluate startup potential and estimate expected returns based on financial allocation.
       - Identify which spending categories (R&D, Administration, Marketing) correlate most
         strongly with sustained profitability.
    2. Startup Founders & Executives:
       - Optimize budget allocation and avoid overspending on low-impact activities.
       - Maximize capital efficiency and reduce cash burn rate.
    3. Feature Selection Rationale:
       - Identify the most parsimonious model that achieves high predictive accuracy without
         unnecessary complexity or risk of overfitting.
    """
    print(explanation.strip())


def phase_data_understanding():
    """
    Phase 2: Data Understanding
    Downloads dataset using requests, checks integrity, and inspects structure.
    """
    print("\n" + "=" * 80)
    print("PHASE 2: DATA UNDERSTANDING")
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
    
    # Save raw data locally for auditability
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    csv_text = response.text
    df = pd.read_csv(io.StringIO(csv_text))

    print(f"\nDataset Shape: {df.shape[0]} rows, {df.shape[1]} columns")
    print("\nColumns:")
    for col in df.columns:
        print(f"  - {col} ({df[col].dtype})")

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
    Applies One-Hot Encoding (drop_first=True) to 'State' and splits train/test sets.
    """
    print("\n" + "=" * 80)
    print("PHASE 3: DATA PREPARATION")
    print("=" * 80)

    print("Unique values in 'State' column before encoding:", df['State'].unique().tolist())
    
    # One-hot encode 'State' with drop_first=True to avoid dummy variable trap (multicollinearity)
    # Using dtype=int ensures standard numerical values (0 and 1)
    df_encoded = pd.get_dummies(df, columns=['State'], drop_first=True, dtype=int)
    
    print("\nColumns after One-Hot Encoding (drop_first=True):")
    for col in df_encoded.columns:
        print(f"  - {col}")

    # Separate target variable 'Profit' and features
    target_col = "Profit"
    feature_cols = [col for col in df_encoded.columns if col != target_col]
    
    X = df_encoded[feature_cols]
    y = df_encoded[target_col]

    print(f"\nFeature matrix X shape: {X.shape}")
    print(f"Target vector y shape: {y.shape}")
    print("Features:", list(X.columns))

    # Split into train and test sets with test_size=0.2, random_state=0
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=0
    )

    print(f"\nTrain set: {X_train.shape[0]} samples (80%)")
    print(f"Test set:  {X_test.shape[0]} samples (20%)")

    return X_train, X_test, y_train, y_test, list(X.columns)


def phase_modeling(X_train: pd.DataFrame, y_train: pd.Series):
    """
    Phase 4: Modeling
    Trains Multiple Linear Regression on all features using sklearn.
    """
    print("\n" + "=" * 80)
    print("PHASE 4: MODELING (FULL FEATURE MODEL)")
    print("=" * 80)

    model = LinearRegression()
    model.fit(X_train, y_train)

    print("Multiple Linear Regression trained successfully.")
    print(f"Intercept (beta_0): {model.intercept_:.4f}")
    print("Coefficients:")
    coef_df = pd.DataFrame({
        "Feature": X_train.columns,
        "Coefficient": model.coef_
    })
    print(tabulate(coef_df, headers="keys", tablefmt="github", showindex=False))

    return model


def phase_evaluation(model: LinearRegression, X_test: pd.DataFrame, y_test: pd.Series):
    """
    Phase 5: Evaluation
    Evaluates model on test set: R2, MAE, MSE, RMSE and plots Actual vs Predicted.
    """
    print("\n" + "=" * 80)
    print("PHASE 5: EVALUATION (FULL FEATURE MODEL)")
    print("=" * 80)

    y_pred = model.predict(X_test)

    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    mse = mean_squared_error(y_test, y_pred)
    rmse = np.sqrt(mse)

    eval_results = pd.DataFrame({
        "Metric": ["R-squared (R2)", "MAE", "MSE", "RMSE"],
        "Value": [f"{r2:.4f}", f"{mae:.2f}", f"{mse:.2f}", f"{rmse:.2f}"]
    })
    print(tabulate(eval_results, headers="keys", tablefmt="github", showindex=False))

    # Plot Actual vs Predicted Profit
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    plot_path = os.path.join(OUTPUT_DIR, "actual_vs_predicted_profit.png")

    plt.figure(figsize=(8, 6), dpi=300)
    plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
    
    # Scatter plot
    plt.scatter(y_test, y_pred, color="#1f77b4", edgecolor="black", s=90, alpha=0.85, label="Test Samples")
    
    # Reference perfect prediction line (y = x)
    min_val = min(y_test.min(), y_pred.min()) * 0.95
    max_val = max(y_test.max(), y_pred.max()) * 1.05
    plt.plot([min_val, max_val], [min_val, max_val], color="#e74c3c", linestyle="--", linewidth=2, label="Ideal Line (y = x)")

    plt.title("Actual vs. Predicted Profit (50 Startups)", fontsize=14, fontweight="bold", pad=12)
    plt.xlabel("Actual Profit ($)", fontsize=12, labelpad=8)
    plt.ylabel("Predicted Profit ($)", fontsize=12, labelpad=8)
    plt.xlim(min_val, max_val)
    plt.ylim(min_val, max_val)

    # Annotation box with metrics
    textstr = f"$R^2 = {r2:.4f}$\n$RMSE = {rmse:,.2f}$\n$MAE = {mae:,.2f}$"
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
                      max_features: int = 5, n_splits: int = 5):
    """
    Forward Selection Feature Selection Algorithm.
    
    Rules:
    - Iteratively selects 1, 2, ..., max_features features.
    - At each step, selects the feature that minimizes the 5-fold cross-validation RMSE
      on the TRAINING SET.
    - Strictly does NOT use the test set for feature selection.
    - For each selected subset, retrains on full training set and computes test set RMSE and R2.
    """
    print("\n" + "=" * 80)
    print("FORWARD SELECTION (5-FOLD CV ON TRAINING SET)")
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

            # Linear regression model for candidate evaluation
            lr_cv = LinearRegression()
            
            # Use negative mean squared error
            neg_mse_scores = cross_val_score(
                lr_cv, X_sub, y_train, cv=kf, scoring="neg_mean_squared_error"
            )
            # Calculate fold RMSEs and take the average
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
            "Train 5-Fold CV RMSE": round(best_cv_rmse, 2),
            "Test RMSE": round(test_rmse, 2),
            "Test R-squared": round(test_r2, 4)
        })

    results_df = pd.DataFrame(results)

    # Print Markdown table using tabulate
    print("\nForward Selection Summary Table:")
    print(tabulate(results_df, headers="keys", tablefmt="github", showindex=False))

    # Save to CSV
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    csv_path = os.path.join(OUTPUT_DIR, "forward_selection_results.csv")
    results_df.to_csv(csv_path, index=False)
    print(f"\n[SAVED] Forward selection results successfully saved to: {csv_path}")

    return results_df


def main():
    print("=" * 80)
    print("50 STARTUPS REGRESSION & FORWARD SELECTION PIPELINE")
    print("=" * 80)

    # Step 1: Business Understanding
    phase_business_understanding()

    # Step 2: Data Understanding
    df = phase_data_understanding()

    # Step 3: Data Preparation
    X_train, X_test, y_train, y_test, feature_names = phase_data_preparation(df)

    # Step 4: Modeling (Full model with all 5 features)
    full_model = phase_modeling(X_train, y_train)

    # Step 5: Evaluation (Full model)
    eval_metrics = phase_evaluation(full_model, X_test, y_test)

    # Step 6: Forward Selection (k = 1 to 5 features)
    fs_results = forward_selection(X_train, y_train, X_test, y_test, max_features=5, n_splits=5)

    print("\n" + "=" * 80)
    print("PIPELINE COMPLETED SUCCESSFULLY!")
    print(f"Artifacts generated:")
    print(f"  - outputs/actual_vs_predicted_profit.png")
    print(f"  - outputs/forward_selection_results.csv")
    print("=" * 80)


if __name__ == "__main__":
    main()
