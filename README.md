# Machine Learning for Predicting Preferred Study Environments

This project is designed for university students, utilizing machine learning to
predict their preferred study environments and enhance their academic
experience.

---

## Features

### Video Overview

[Watch the project overview on YouTube](https://youtu.be/97-FbF7Zu-w)

- **Dataset Creation**: Custom dataset collected via Google Forms with responses from 155 participants.
- **Machine Learning Models**: Random Forests, Gradient Boosting Machine, Artificial Neural Networks (ANN), and Stacking.
- **Data Preprocessing**: One-hot encoding, label encoding, SMOTE, and feature selection using Random Forest.
- **Evaluation Metrics**: Accuracy, F1-score, and AUC for model comparisons.
- **User Interface**: Simple web application built with HTML, CSS, JavaScript, and Flask.

---

## Dataset

- **Source**: Google Forms survey.
- **Responses**: 155 rows with 8 features and 1 categorical target variable (`Preferred Study Environment` with values: `Cafe`, `Home`, `Library`, `Park`).

### Preprocessing Steps

1. Checked for missing and NaN values.
2. Applied:
   - One-hot encoding for categorical features.
   - Label encoding for the target variable.
3. Addressed class imbalance using SMOTE (Synthetic Minority Over-sampling Technique).
4. Performed forward feature selection to mitigate overfitting.

---

## Models

### Random Forests
- **Before tuning**: Accuracy: 0.826
- **After tuning**: Accuracy: 0.858 (with K-Fold CV)

### Gradient Boosting Machine
- **Before tuning**: Accuracy: 0.813
- **After tuning**: Accuracy: 0.833 (with K-Fold CV)

### Artificial Neural Networks (ANN)
- **Before tuning**: Accuracy: 0.83
- **After tuning**: Accuracy: 0.893

### Stacking
- Final Accuracy: 0.88

---

## Results and Discussion

- ANN demonstrated the best performance with a tuned accuracy of 0.893.
- Stacking combined the strengths of individual models, achieving an accuracy of 0.88.
- Comprehensive evaluation metrics (precision, recall, F1-score, AUC) confirmed the reliability of the models.

---

## User Interface

The application interface was designed to be simple and intuitive:

1. **Frontend**: Built using HTML, CSS, and JavaScript.
2. **Backend**: Flask framework for handling API requests and integrating the trained ANN model.
3. **Prediction Process**:
   - User inputs data via the interface.
   - Model processes the input and provides predictions along with probabilities.

---

## How to Run

### Prerequisites

- Python 3.11
- Required Python libraries (install via `requirements.txt`):
  ```bash
  pip install -r requirements.txt
  ```

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ibrahemassa/Machine-Learning-Preferred-Study-Environments.git
   cd Machine-Learning-Preferred-Study-Environments
   ```
2. Start the Flask server:
   ```bash
   python app.py
   ```
3. Open your web browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```
4. Input the required data and view the predictions.
---
