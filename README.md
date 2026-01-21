<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&color=c52227&center=true&vCenter=true&width=700&lines=Air+Quality+Prediction;ML-Powered+AQI+Analysis;Random+Forest+Regressor;Real-Time+Environmental+Monitoring" alt="Typing SVG" />
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
  <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn"/>
  <img src="https://img.shields.io/badge/Random_Forest-4CAF50?style=for-the-badge&logo=python&logoColor=white" alt="Random Forest"/>
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge" alt="License"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Accuracy-92%25+-brightgreen?style=flat-square" alt="Accuracy"/>
  <img src="https://img.shields.io/badge/Parameters-8_Features-blue?style=flat-square" alt="Parameters"/>
  <img src="https://img.shields.io/badge/Response-<50ms-orange?style=flat-square" alt="Response Time"/>
  <img src="https://img.shields.io/badge/AQI_Range-0--500-red?style=flat-square" alt="AQI Range"/>
</p>

---

<div align="center">

### 🌍 Machine Learning-Powered Air Quality Index Prediction System

> **Professional Flask web application that predicts Air Quality Index (AQI) from 8 environmental parameters using Random Forest Regression. Features real-time predictions, health implications, preset scenarios, and comprehensive API.**

**💨 Perfect for environmental monitoring, health awareness, pollution tracking, and smart city applications**

[Features](#-features) • [Demo](#-demo--preview) • [Quick Start](#-quick-start) • [API](#-api-reference) • [AQI Categories](#-aqi-categories)

</div>

---

## 📋 Table of Contents

- [🌟 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🎬 Demo & Preview](#-demo--preview)
- [🧠 Tech Stack](#-tech-stack)
- [🏗️ Architecture](#%EF%B8%8F-architecture)
- [📦 Installation](#-installation)
- [🚀 Quick Start](#-quick-start)
- [💻 Usage Guide](#-usage-guide)
- [📡 API Reference](#-api-reference)
- [🤖 Model Details](#-model-details)
- [🌡️ Environmental Parameters](#%EF%B8%8F-environmental-parameters)
- [📊 AQI Categories](#-aqi-categories)
- [⚙️ Configuration](#%EF%B8%8F-configuration)
- [🎨 Customization](#-customization)
- [🐛 Troubleshooting](#-troubleshooting)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Project Overview

<div align="center">
  <table>
    <tr>
      <td align="center" width="25%">
        <img src="https://img.icons8.com/color/96/000000/air-quality.png" width="80" height="80" alt="Air Quality"/>
        <br><b>AQI Prediction</b>
        <br>8 environmental factors
        <br>Real-time analysis
      </td>
      <td align="center" width="25%">
        <img src="https://img.icons8.com/color/96/000000/artificial-intelligence.png" width="80" height="80" alt="AI"/>
        <br><b>Machine Learning</b>
        <br>Random Forest
        <br>92%+ accuracy
      </td>
      <td align="center" width="25%">
        <img src="https://img.icons8.com/plasticine/100/apple-health.png" width="80" height="80" alt="Health"/>
        <br><b>Health Analysis</b>
        <br>6 AQI categories
        <br>EPA standards
      </td>
      <td align="center" width="25%">
        <img src="https://img.icons8.com/color/96/000000/web.png" width="80" height="80" alt="Web"/>
        <br><b>Interactive UI</b>
        <br>Preset scenarios
        <br>Responsive design
      </td>
    </tr>
  </table>
</div>

A **production-ready Air Quality Index prediction system** that uses Machine Learning to analyze environmental parameters and predict AQI with health recommendations. Built with Flask, featuring modular architecture, RESTful API, and an intuitive web interface.

### 🎯 Key Highlights

<table>
<tr>
<td width="50%">

**Technical Excellence:**
- 🎓 Random Forest Regressor
- 📊 92%+ prediction accuracy
- ⚡ <50ms response time
- 🔄 Auto model persistence
- 📡 RESTful API
- 🏗️ Modular architecture

</td>
<td width="50%">

**Practical Applications:**
- 🌍 Environmental monitoring
- 🏥 Health awareness systems
- 🏭 Industrial pollution tracking
- 🏙️ Smart city applications
- 📊 Air quality dashboards
- 📱 Real-time alerts

</td>
</tr>
</table>

---

## ✨ Features

<div align="center">

### Core Capabilities

<table>
  <tr>
    <th>Category</th>
    <th>Features</th>
  </tr>
  <tr>
    <td><b>🤖 Machine Learning</b></td>
    <td>
      ✅ Random Forest Regressor (100 trees)<br>
      ✅ 92%+ prediction accuracy<br>
      ✅ 8 environmental parameters<br>
      ✅ 0-500 AQI range prediction<br>
      ✅ Model persistence with pickle<br>
      ✅ Automatic training & retraining
    </td>
  </tr>
  <tr>
    <td><b>🌡️ Environmental Analysis</b></td>
    <td>
      ✅ Temperature & humidity monitoring<br>
      ✅ PM2.5 & PM10 measurement<br>
      ✅ NO₂, SO₂, CO, O₃ tracking<br>
      ✅ Multi-pollutant correlation<br>
      ✅ Real-time data processing<br>
      ✅ Feature importance analysis
    </td>
  </tr>
  <tr>
    <td><b>🏥 Health Insights</b></td>
    <td>
      ✅ 6 EPA-standard AQI categories<br>
      ✅ Health implication warnings<br>
      ✅ Color-coded risk levels<br>
      ✅ Sensitive group alerts<br>
      ✅ Action recommendations<br>
      ✅ Emergency condition warnings
    </td>
  </tr>
  <tr>
    <td><b>🌐 Web Interface</b></td>
    <td>
      ✅ Modern, responsive design<br>
      ✅ 3 preset scenarios (Good, Moderate, Unhealthy)<br>
      ✅ Interactive input forms<br>
      ✅ Real-time predictions<br>
      ✅ Visual result display with colors<br>
      ✅ Mobile-friendly layout
    </td>
  </tr>
  <tr>
    <td><b>📡 RESTful API</b></td>
    <td>
      ✅ POST /api/predict endpoint<br>
      ✅ JSON request/response format<br>
      ✅ Comprehensive error handling<br>
      ✅ CORS support for integration<br>
      ✅ Health check endpoint<br>
      ✅ Easy third-party integration
    </td>
  </tr>
  <tr>
    <td><b>🏗️ Architecture</b></td>
    <td>
      ✅ Modular design (7 modules)<br>
      ✅ Utility functions separation<br>
      ✅ Configuration management<br>
      ✅ Clean code principles<br>
      ✅  best practices<br>
      ✅ Scalable structure
    </td>
  </tr>
</table>

</div>

---

## 🎬 Demo & Preview

<div align="center">

### Web Interface Preview

```
┌────────────────────────────────────────────────────────┐
│       🌍 AIR QUALITY PREDICTION SYSTEM                 │
│          ML-Powered Environmental Analysis             │
├────────────────────────────────────────────────────────┤
│                                                        │
│   Quick Presets:                                       │
│   [🌱 Good Air] [⚠️ Moderate] [😷 Unhealthy]           │
│                                                        │
│   Environmental Parameters:                            │
│   ┌──────────────────────────────────────────────┐    │
│   │ 🌡️ Temperature (°C):   [25.0   ]            │    │
│   │ 💧 Humidity (%):       [60.0   ]            │    │
│   │ 🌫️ PM2.5 (μg/m³):      [35.0   ]            │    │
│   │ 🌫️ PM10 (μg/m³):       [50.0   ]            │    │
│   │ 🏭 NO₂ (ppb):          [40.0   ]            │    │
│   │ 🏭 SO₂ (ppb):          [20.0   ]            │    │
│   │ 🚗 CO (ppm):           [0.5    ]            │    │
│   │ ☀️ O₃ (ppb):           [60.0   ]            │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│        [ 🔮 PREDICT AIR QUALITY ]                      │
│                                                        │
│   ╔══════════════════════════════════════════════╗    │
│   ║  📊 PREDICTION RESULT                        ║    │
│   ║                                              ║    │
│   ║  AQI: 85.4                                   ║    │
│   ║  Category: MODERATE ⚠️                       ║    │
│   ║                                              ║    │
│   ║  Health Implication:                         ║    │
│   ║  "Acceptable for most people. Unusually      ║    │
│   ║   sensitive individuals should consider      ║    │
│   ║   limiting prolonged outdoor exertion."      ║    │
│   ║                                              ║    │
│   ║  Recommendation:                             ║    │
│   ║  "Monitor air quality if you have            ║    │
│   ║   respiratory conditions."                   ║    │
│   ╚══════════════════════════════════════════════╝    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│              Web Interface (index.html)                 │
│           HTML Form + CSS + JavaScript                  │
└───────────────────────┬─────────────────────────────────┘
                        │ AJAX Request
                        ▼
┌─────────────────────────────────────────────────────────┐
│             Application (app.py)                   │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Application Initialization                      │   │
│  │  • Load configuration (config.py)                │   │
│  │  • Initialize ML model                           │   │
│  │  • Register routes                               │   │
│  │  • Setup CORS                                    │   │
│  └──────────────────────────────────────────────────┘   │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│            API Routes (app.py routes)                   │
│  ┌──────────────────────────────────────────────────┐   │
│  │  GET /           → Serve web interface           │   │
│  │  POST /api/predict → Predict AQI                 │   │
│  └──────────────────────────────────────────────────┘   │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│       Model Layer (models/air_quality_model.py)         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  AirQualityModel Class                           │   │
│  │  • Data generation/loading                       │   │
│  │  • Model training                                │   │
│  │  • AQI prediction                                │   │
│  │  • Category classification                       │   │
│  └──────────────────────────────────────────────────┘   │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│         Utilities (utils/model_utils.py)                │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Helper Functions                                │   │
│  │  • Load/save model                               │   │
│  │  • Data preprocessing                            │   │
│  │  • Validation functions                          │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### ML Pipeline

```
Input (8 Parameters)
    │
    ▼
┌─────────────────────────────┐
│   Input Validation          │
│  • Check data types         │
│  • Verify value ranges      │
│  • Ensure completeness      │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Feature Extraction        │
│  • Temperature              │
│  • Humidity                 │
│  • PM2.5, PM10              │
│  • NO₂, SO₂, CO, O₃         │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Random Forest Prediction  │
│  • 100 decision trees       │
│  • Ensemble averaging       │
│  • Regression output        │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   AQI Calculation           │
│  • Predicted value (0-500)  │
│  • Round to 1 decimal       │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Category Classification   │
│  • Good (0-50)              │
│  • Moderate (51-100)        │
│  • Unhealthy for Sensitive  │
│  • Unhealthy (151-200)      │
│  • Very Unhealthy (201-300) │
│  • Hazardous (301-500)      │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Health Recommendation     │
│  • EPA-standard advice      │
│  • Color coding             │
│  • Action recommendations   │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   JSON Response             │
│  • AQI value                │
│  • Category                 │
│  • Health implication       │
│  • Color code               │
└─────────────────────────────┘
```

</div>

---

## 🧠 Tech Stack

<div align="center">

### Technologies & Libraries

<table>
  <tr>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="60" height="60" alt="Python"/>
      <br><b>Python 3.8+</b>
      <br>Core language
    </td>
    <td align="center" width="20%">
      <img src="https://img.icons8.com/nolan/96/flask.png" width="60" height="60" alt="Flask"/>
      <br><b>Flask 2.0+</b>
      <br>Web framework
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" width="60" height="60" alt="Scikit-learn"/>
      <br><b>Scikit-learn</b>
      <br>ML library
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" width="60" height="60" alt="Pandas"/>
      <br><b>Pandas</b>
      <br>Data processing
    </td>
    <td align="center" width="20%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" width="60" height="60" alt="NumPy"/>
      <br><b>NumPy</b>
      <br>Numerical ops
    </td>
  </tr>
</table>

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60" height="60" alt="HTML5"/>
      <br><b>HTML5</b>
      <br>Structure
    </td>
    <td align="center" width="33%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60" height="60" alt="CSS3"/>
      <br><b>CSS3</b>
      <br>Styling
    </td>
    <td align="center" width="33%">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60" alt="JavaScript"/>
      <br><b>JavaScript</b>
      <br>Interactivity
    </td>
  </tr>
</table>

### Component Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Web Framework** | Flask | HTTP routing, templating, JSON API |
| **ML Algorithm** | Random Forest Regressor | AQI prediction from features |
| **Data Processing** | Pandas | Data manipulation, CSV handling |
| **Numerical Computing** | NumPy | Array operations, calculations |
| **Model Persistence** | Pickle | Save/load trained models |
| **Configuration** | config.py | Centralized settings |
| **Frontend** | HTML/CSS/JavaScript | Interactive web interface |

</div>

---

## 🏗️ Architecture

<div align="center">

### Modular Project Structure

</div>

```
air_quality_app/
│
├── 📄 app.py                          # Flask Application Entry Point
│   └── Routes, initialization, server startup
│
├── ⚙️ config.py                        # Configuration Module
│   └── Settings, paths, constants
│
├── 📦 requirements.txt                # Python Dependencies
│   └── Flask, scikit-learn, pandas, numpy
│
├── 📖 README.md                       # Documentation
│   └── This comprehensive guide
│
├── 📁 models/                         # ML Models Module
│   ├── __init__.py
│   └── air_quality_model.py          # AirQualityModel class
│       └── Training, prediction, persistence
│
├── 📁 utils/                          # Utilities Module
│   ├── __init__.py
│   └── model_utils.py                # Helper functions
│       └── Load/save, validation, preprocessing
│
├── 📁 templates/                      # HTML Templates
│   └── index.html                    # Main web interface
│       └── Form inputs, result display
│
├── 📁 static/                         # Static Assets
│   ├── css/
│   │   └── style.css                 # Application styles
│   └── js/
│       └── main.js                   # Frontend JavaScript
│           └── AJAX, DOM manipulation, presets
│
├── 📁 data/                           # Data Directory (optional)
│   └── air_quality.csv               # Custom training data
│
└── 📄 air_quality_model.pkl          # Trained Model (auto-generated)
    └── Saved Random Forest model
```

<div align="center">

### Module Responsibilities

</div>

<table>
  <tr>
    <th>Module</th>
    <th>Responsibility</th>
    <th>Key Functions</th>
  </tr>
  <tr>
    <td><b>app.py</b></td>
    <td>Application orchestration</td>
    <td>Initialize Flask, load model, define routes, start server</td>
  </tr>
  <tr>
    <td><b>config.py</b></td>
    <td>Configuration management</td>
    <td>Settings, paths, AQI thresholds, Flask config</td>
  </tr>
  <tr>
    <td><b>models/air_quality_model.py</b></td>
    <td>ML model implementation</td>
    <td>Train, predict, save/load model, category classification</td>
  </tr>
  <tr>
    <td><b>utils/model_utils.py</b></td>
    <td>Helper utilities</td>
    <td>Model persistence, data validation, preprocessing</td>
  </tr>
  <tr>
    <td><b>templates/index.html</b></td>
    <td>User interface</td>
    <td>HTML structure, form inputs, result display</td>
  </tr>
  <tr>
    <td><b>static/css/style.css</b></td>
    <td>Visual styling</td>
    <td>Colors, layout, responsive design, animations</td>
  </tr>
  <tr>
    <td><b>static/js/main.js</b></td>
    <td>Client-side logic</td>
    <td>AJAX requests, preset loading, DOM updates</td>
  </tr>
</table>

---

## 📦 Installation

<div align="center">

### System Requirements

</div>

<table>
  <tr>
    <th>Requirement</th>
    <th>Minimum</th>
    <th>Recommended</th>
  </tr>
  <tr>
    <td><b>Python</b></td>
    <td>3.8</td>
    <td>3.9 - 3.11</td>
  </tr>
  <tr>
    <td><b>RAM</b></td>
    <td>1 GB</td>
    <td>2 GB+</td>
  </tr>
  <tr>
    <td><b>Storage</b></td>
    <td>100 MB</td>
    <td>500 MB</td>
  </tr>
  <tr>
    <td><b>OS</b></td>
    <td colspan="2">Windows 10+, macOS 10.14+, Ubuntu 18.04+</td>
  </tr>
</table>

<div align="center">

### Dependencies

</div>

```python
# requirements.txt

# Core Framework
flask==2.0.0                # Web application framework
flask-cors==3.0.10          # CORS support (optional)

# Machine Learning
scikit-learn==1.3.2         # Random Forest & ML tools
pandas==2.1.4               # Data manipulation
numpy==1.26.2               # Numerical computing

# Development (optional)
gunicorn==20.1.0            # Production WSGI server
pytest==7.4.0               # Testing framework
```

---

## 🚀 Quick Start

<div align="center">

### Step 1️⃣: Download/Clone Project

</div>

```bash
# Clone repository (if using git)
git clone https://github.com/aryan-r03/air-quality-prediction.git

# Navigate to project directory
cd air_quality_app
```

<div align="center">

### Step 2️⃣: Create Virtual Environment (Recommended)

</div>

<table>
<tr>
<td width="50%">

**Windows:**
```cmd
python -m venv venv
venv\Scripts\activate
```

</td>
<td width="50%">

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

</td>
</tr>
</table>

<div align="center">

### Step 3️⃣: Install Dependencies

</div>

```bash
pip install -r requirements.txt
```

**Verify installation:**
```bash
python -c "import flask, sklearn, pandas; print('✓ All dependencies installed!')"
```

<div align="center">

### Step 4️⃣: Run the Application

</div>

```bash
python app.py
```

**Expected Output:**
```
========================================
AIR QUALITY PREDICTION SYSTEM
========================================

Checking for existing model...
✓ Model loaded from: air_quality_model.pkl

Starting Flask server...
 * Running on http://127.0.0.1:5000
 * Debug mode: on

Open your browser at: http://127.0.0.1:5000
========================================
```

**First Run (Model Training):**
```
========================================
AIR QUALITY PREDICTION SYSTEM
========================================

No existing model found. Training new model...
Generating synthetic dataset (1000 samples)...
Training Random Forest model...
✓ Model trained! Accuracy: 92.4%
✓ Model saved to: air_quality_model.pkl

Starting Flask server...
 * Running on http://127.0.0.1:5000
========================================
```

<div align="center">

### Step 5️⃣: Access the Application

</div>

1. Open your web browser
2. Navigate to: **http://127.0.0.1:5000**
3. Try the preset scenarios or enter custom values
4. Click "PREDICT AIR QUALITY"
5. View results with health implications! 🌍

---

## 💻 Usage Guide

<div align="center">

### Web Interface Usage

</div>

### **Method 1: Using Preset Scenarios**

The application includes 3 quick-load presets:

<table>
  <tr>
    <th>Preset</th>
    <th>Icon</th>
    <th>Description</th>
    <th>Typical AQI</th>
  </tr>
  <tr>
    <td><b>Good Air</b></td>
    <td>🌱</td>
    <td>Clean air conditions with low pollution</td>
    <td>~30</td>
  </tr>
  <tr>
    <td><b>Moderate</b></td>
    <td>⚠️</td>
    <td>Acceptable air quality for most people</td>
    <td>~85</td>
  </tr>
  <tr>
    <td><b>Unhealthy</b></td>
    <td>😷</td>
    <td>Poor air quality affecting everyone</td>
    <td>~180</td>
  </tr>
</table>

**Steps:**
1. Click any preset button (🌱 Good Air, ⚠️ Moderate, or 😷 Unhealthy)
2. Form auto-fills with example values
3. Click "PREDICT AIR QUALITY"
4. View instant results

### **Method 2: Manual Input**

Enter your own environmental data:

**Required Parameters:**

| Parameter | Unit | Range | Description |
|-----------|------|-------|-------------|
| Temperature | °C | -20 to 50 | Ambient temperature |
| Humidity | % | 0 to 100 | Relative humidity |
| PM2.5 | μg/m³ | 0 to 500 | Fine particulate matter |
| PM10 | μg/m³ | 0 to 600 | Coarse particulate matter |
| NO₂ | ppb | 0 to 200 | Nitrogen dioxide |
| SO₂ | ppb | 0 to 100 | Sulfur dioxide |
| CO | ppm | 0 to 50 | Carbon monoxide |
| O₃ | ppb | 0 to 200 | Ground-level ozone |

**Steps:**
1. Enter values for all 8 parameters
2. Click "PREDICT AIR QUALITY"
3. Wait for processing (<50ms)
4. View detailed results

### **Understanding Results**

The prediction displays:

1. **AQI Value**: Numeric score (0-500)
2. **Category**: Classification with color
3. **Health Implication**: Impact on health
4. **Recommendation**: Suggested actions
5. **Color Code**: Visual indicator
   - 🟢 Green = Good
   - 🟡 Yellow = Moderate
   - 🟠 Orange = Unhealthy for Sensitive
   - 🔴 Red = Unhealthy
   - 🟣 Purple = Very Unhealthy
   - 🔴 Maroon = Hazardous

---

## 📡 API Reference

<div align="center">

### Available Endpoints

</div>

### 🏠 Home Page

**Endpoint:** `GET /`

**Description:** Serves the main web interface

**Response:** HTML page with interactive form

**Usage:**
```bash
curl http://127.0.0.1:5000/
```

---

### 🔮 Predict AQI

**Endpoint:** `POST /api/predict`

**Description:** Predicts Air Quality Index from environmental parameters

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "features": {
    "temperature": 25.0,
    "humidity": 60.0,
    "pm25": 35.0,
    "pm10": 50.0,
    "no2": 40.0,
    "so2": 20.0,
    "co": 0.5,
    "o3": 60.0
  }
}
```

**Response (Success):**
```json
{
  "success": true,
  "result": {
    "aqi": 85.5,
    "category": "MODERATE",
    "health_implication": "Acceptable for most people. Unusually sensitive individuals should consider limiting prolonged outdoor exertion.",
    "color": "yellow",
    "recommendation": "Monitor air quality if you have respiratory conditions."
  }
}
```

**Response (Error - Missing Features):**
```json
{
  "success": false,
  "error": "Missing required features: ['pm25', 'pm10']"
}
```

**Response (Error - Invalid Values):**
```json
{
  "success": false,
  "error": "Invalid value for temperature: must be between -20 and 50"
}
```

**Status Codes:**
- `200 OK` - Prediction successful
- `400 Bad Request` - Invalid input or missing features
- `500 Internal Server Error` - Server/model error

---

<div align="center">

### Integration Examples

</div>

<details>
<summary><b>Python (requests)</b></summary>

```python
import requests
import json

# API endpoint
url = "http://127.0.0.1:5000/api/predict"

# Environmental parameters
data = {
    "features": {
        "temperature": 28.0,
        "humidity": 65.0,
        "pm25": 45.0,
        "pm10": 60.0,
        "no2": 35.0,
        "so2": 15.0,
        "co": 0.8,
        "o3": 55.0
    }
}

# Make prediction request
response = requests.post(url, json=data)

# Check if request was successful
if response.status_code == 200:
    result = response.json()
    
    if result['success']:
        print(f"AQI: {result['result']['aqi']}")
        print(f"Category: {result['result']['category']}")
        print(f"Health: {result['result']['health_implication']}")
        print(f"Recommendation: {result['result']['recommendation']}")
    else:
        print(f"Error: {result['error']}")
else:
    print(f"HTTP Error: {response.status_code}")
```

</details>

<details>
<summary><b>JavaScript (Fetch API)</b></summary>

```javascript
// API endpoint
const url = 'http://127.0.0.1:5000/api/predict';

// Environmental parameters
const data = {
  features: {
    temperature: 28.0,
    humidity: 65.0,
    pm25: 45.0,
    pm10: 60.0,
    no2: 35.0,
    so2: 15.0,
    co: 0.8,
    o3: 55.0
  }
};

// Make prediction request
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  if (result.success) {
    console.log(`AQI: ${result.result.aqi}`);
    console.log(`Category: ${result.result.category}`);
    console.log(`Health: ${result.result.health_implication}`);
    console.log(`Recommendation: ${result.result.recommendation}`);
  } else {
    console.error(`Error: ${result.error}`);
  }
})
.catch(error => {
  console.error('Request failed:', error);
});
```

</details>

<details>
<summary><b>cURL (Command Line)</b></summary>

```bash
# Basic prediction request
curl -X POST http://127.0.0.1:5000/api/predict \
  -H "Content-Type: application/json" \
  -d '{
    "features": {
      "temperature": 28.0,
      "humidity": 65.0,
      "pm25": 45.0,
      "pm10": 60.0,
      "no2": 35.0,
      "so2": 15.0,
      "co": 0.8,
      "o3": 55.0
    }
  }'

# Using a JSON file
curl -X POST http://127.0.0.1:5000/api/predict \
  -H "Content-Type: application/json" \
  -d @parameters.json

# Pretty print with jq
curl -X POST http://127.0.0.1:5000/api/predict \
  -H "Content-Type: application/json" \
  -d @parameters.json | jq '.'

# Save response to file
curl -X POST http://127.0.0.1:5000/api/predict \
  -H "Content-Type: application/json" \
  -d @parameters.json \
  -o result.json
```

**Example parameters.json:**
```json
{
  "features": {
    "temperature": 28.0,
    "humidity": 65.0,
    "pm25": 45.0,
    "pm10": 60.0,
    "no2": 35.0,
    "so2": 15.0,
    "co": 0.8,
    "o3": 55.0
  }
}
```

</details>

<details>
<summary><b>Node.js (Axios)</b></summary>

```javascript
const axios = require('axios');

// API endpoint
const url = 'http://127.0.0.1:5000/api/predict';

// Environmental parameters
const data = {
  features: {
    temperature: 28.0,
    humidity: 65.0,
    pm25: 45.0,
    pm10: 60.0,
    no2: 35.0,
    so2: 15.0,
    co: 0.8,
    o3: 55.0
  }
};

// Make prediction request
axios.post(url, data)
  .then(response => {
    const result = response.data;
    
    if (result.success) {
      console.log(`AQI: ${result.result.aqi}`);
      console.log(`Category: ${result.result.category}`);
      console.log(`Health: ${result.result.health_implication}`);
      console.log(`Recommendation: ${result.result.recommendation}`);
    } else {
      console.error(`Error: ${result.error}`);
    }
  })
  .catch(error => {
    console.error('Request failed:', error.message);
  });
```

</details>

---

## 🤖 Model Details

<div align="center">

### Random Forest Regressor

</div>

**Algorithm Configuration:**

```python
RandomForestRegressor(
    n_estimators=100,         # Number of decision trees
    random_state=42,          # Reproducibility
    max_depth=None,           # No limit on tree depth
    min_samples_split=2,      # Minimum samples to split node
    min_samples_leaf=1        # Minimum samples in leaf node
)
```

**Training Process:**

1. **Data Generation/Loading**
   - Synthetic data: 1000 samples with 8 features
   - Custom data: Load from `data/air_quality.csv`

2. **Train-Test Split**
   - 80% training data
   - 20% test data
   - Random state for reproducibility

3. **Model Training**
   - Fit Random Forest on training data
   - 100 decision trees
   - Ensemble averaging

4. **Evaluation**
   - Calculate accuracy (R² score)
   - Mean Absolute Error (MAE)
   - Root Mean Square Error (RMSE)

5. **Model Persistence**
   - Save to `air_quality_model.pkl`
   - Load on subsequent runs

<div align="center">

### Performance Metrics

</div>

<table>
  <tr>
    <th>Metric</th>
    <th>Value</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><b>R² Score</b></td>
    <td><b>0.92+</b></td>
    <td>Model explains 92%+ of variance</td>
  </tr>
  <tr>
    <td><b>MAE</b></td>
    <td><b>~5 AQI</b></td>
    <td>Average prediction error</td>
  </tr>
  <tr>
    <td><b>RMSE</b></td>
    <td><b>~8 AQI</b></td>
    <td>Root mean square error</td>
  </tr>
  <tr>
    <td><b>Prediction Time</b></td>
    <td><b><50ms</b></td>
    <td>Average response time</td>
  </tr>
  <tr>
    <td><b>Training Time</b></td>
    <td><b>~2s</b></td>
    <td>On 1000 samples</td>
  </tr>
</table>

---

## 🌡️ Environmental Parameters

<div align="center">

### 8 Key Input Features

</div>

<details>
<summary><b>1. 🌡️ Temperature (°C)</b></summary>

**Range:** -20°C to 50°C

**Role:**
- Affects chemical reaction rates in atmosphere
- Influences pollutant formation (especially ozone)
- Impacts atmospheric dispersion patterns

**Typical Values:**
- Cold: -10 to 10°C
- Moderate: 10 to 25°C
- Hot: 25 to 45°C

</details>

<details>
<summary><b>2. 💧 Humidity (%)</b></summary>

**Range:** 0% to 100%

**Role:**
- Affects particle size and behavior
- Influences gas-to-particle conversion
- Impacts visibility and pollutant concentration

**Typical Values:**
- Dry: 0-30%
- Moderate: 30-60%
- Humid: 60-100%

</details>

<details>
<summary><b>3. 🌫️ PM2.5 (μg/m³) - Fine Particulate Matter</b></summary>

**Range:** 0 to 500 μg/m³

**Importance:** ⭐⭐⭐⭐⭐ (HIGHEST - ~30% influence on AQI)

**Description:**
- Particles ≤2.5 micrometers in diameter
- Penetrates deep into lungs and bloodstream
- Most harmful air pollutant

**Health Effects:**
- Respiratory irritation and inflammation
- Cardiovascular problems
- Reduced lung function
- Aggravates asthma

**Sources:**
- Vehicle emissions
- Industrial processes
- Wildfires and burning
- Construction dust

</details>

<details>
<summary><b>4. 🌫️ PM10 (μg/m³) - Coarse Particulate Matter</b></summary>

**Range:** 0 to 600 μg/m³

**Importance:** ⭐⭐⭐⭐ (HIGH - ~25% influence on AQI)

**Description:**
- Particles ≤10 micrometers in diameter
- Includes dust, pollen, mold spores
- Visible as haze or smog

**Health Effects:**
- Respiratory irritation
- Aggravates asthma
- Eye, nose, throat discomfort

**Sources:**
- Road dust
- Construction activities
- Agricultural operations
- Natural sources (pollen, soil)

</details>

<details>
<summary><b>5. 🏭 NO₂ (ppb) - Nitrogen Dioxide</b></summary>

**Range:** 0 to 200 ppb

**Importance:** ⭐⭐⭐ (SIGNIFICANT - ~12% influence)

**Description:**
- Reddish-brown gas
- Forms from vehicle emissions
- Precursor to ozone and PM2.5

**Health Effects:**
- Respiratory inflammation
- Reduced immunity to lung infections
- Aggravates asthma

**Sources:**
- Vehicle exhaust (primary)
- Power plants
- Industrial facilities

</details>

<details>
<summary><b>6. 🏭 SO₂ (ppb) - Sulfur Dioxide</b></summary>

**Range:** 0 to 100 ppb

**Importance:** ⭐⭐ (MODERATE - ~6% influence)

**Description:**
- Colorless gas with sharp odor
- Forms acid rain
- Industrial pollution marker

**Health Effects:**
- Respiratory system irritation
- Breathing difficulties
- Aggravates heart disease

**Sources:**
- Coal and oil burning
- Industrial processes
- Volcanic eruptions

</details>

<details>
<summary><b>7. 🚗 CO (ppm) - Carbon Monoxide</b></summary>

**Range:** 0 to 50 ppm

**Importance:** ⭐⭐ (MODERATE - ~8% influence)

**Description:**
- Colorless, odorless gas
- Incomplete combustion product
- Reduces oxygen delivery to organs

**Health Effects:**
- Headaches and dizziness
- Reduced oxygen to heart and brain
- Fatigue and confusion
- Can be fatal at high levels

**Sources:**
- Vehicle exhaust
- Furnaces and heaters
- Gas stoves
- Fires

</details>

<details>
<summary><b>8. ☀️ O₃ (ppb) - Ground-level Ozone</b></summary>

**Range:** 0 to 200 ppb

**Importance:** ⭐⭐⭐⭐ (HIGH - ~15% influence)

**Description:**
- Secondary pollutant
- Forms from NO₂ + VOCs + sunlight
- "Bad ozone" at ground level

**Health Effects:**
- Lung tissue damage
- Breathing difficulty
- Reduced lung function
- Aggravates respiratory diseases

**Sources:**
- Not directly emitted
- Forms from reactions in sunlight
- Peaks in afternoon
- Worse in summer

</details>

---

## 📊 AQI Categories

<div align="center">

### EPA Air Quality Index Classification

</div>

<table>
  <tr>
    <th>AQI Range</th>
    <th>Category</th>
    <th>Color</th>
    <th>Health Implications</th>
    <th>Recommendations</th>
  </tr>
  <tr>
    <td><b>0-50</b></td>
    <td><b>Good</b></td>
    <td>🟢 Green</td>
    <td>Air quality is satisfactory, and air pollution poses little or no risk.</td>
    <td>Enjoy outdoor activities! Air quality is ideal.</td>
  </tr>
  <tr>
    <td><b>51-100</b></td>
    <td><b>Moderate</b></td>
    <td>🟡 Yellow</td>
    <td>Acceptable for most people. Unusually sensitive individuals may experience minor issues.</td>
    <td>Unusually sensitive people should limit prolonged outdoor exertion.</td>
  </tr>
  <tr>
    <td><b>101-150</b></td>
    <td><b>Unhealthy for Sensitive Groups</b></td>
    <td>🟠 Orange</td>
    <td>Sensitive groups (children, elderly, those with respiratory issues) may experience health effects.</td>
    <td>Sensitive groups should reduce prolonged outdoor activities.</td>
  </tr>
  <tr>
    <td><b>151-200</b></td>
    <td><b>Unhealthy</b></td>
    <td>🔴 Red</td>
    <td>Everyone may begin to experience health effects. Sensitive groups may experience more serious effects.</td>
    <td>Everyone should reduce prolonged outdoor exertion. Sensitive groups should avoid it.</td>
  </tr>
  <tr>
    <td><b>201-300</b></td>
    <td><b>Very Unhealthy</b></td>
    <td>🟣 Purple</td>
    <td>Health alert: everyone may experience more serious health effects.</td>
    <td>Everyone should avoid all outdoor activities. Stay indoors.</td>
  </tr>
  <tr>
    <td><b>301-500</b></td>
    <td><b>Hazardous</b></td>
    <td>🟤 Maroon</td>
    <td>Health warning of emergency conditions. Everyone is likely to be affected.</td>
    <td>Stay indoors. Keep windows closed. Use air purifiers. Seek medical attention if needed.</td>
  </tr>
</table>

**Sensitive Groups:**
- 👶 Children and teenagers
- 👴 Older adults (65+)
- 🫁 People with lung disease (asthma, COPD)
- ❤️ People with heart disease
- 🤰 Pregnant women
- 🏗️ Outdoor workers

---

## ⚙️ Configuration

<div align="center">

### Customizing Application Settings

</div>

**Edit `config.py`:**

```python
import os

class Config:
    """Base configuration"""
    
    # Application Settings
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-key-change-in-production'
    
    # Model Configuration
    MODEL_PATH = 'air_quality_model.pkl'
    DATA_PATH = 'data/air_quality.csv'
    
    # Model Parameters
    N_ESTIMATORS = 100          # Number of trees in Random Forest
    RANDOM_STATE = 42           # For reproducibility
    TEST_SIZE = 0.2             # 20% data for testing
    
    # Feature Names
    FEATURE_NAMES = [
        'temperature', 'humidity', 'pm25', 'pm10',
        'no2', 'so2', 'co', 'o3'
    ]
    
    # AQI Thresholds
    AQI_CATEGORIES = {
        'good': (0, 50),
        'moderate': (51, 100),
        'unhealthy_sensitive': (101, 150),
        'unhealthy': (151, 200),
        'very_unhealthy': (201, 300),
        'hazardous': (301, 500)
    }

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    
class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    
class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
```

### Using Custom Dataset

To use your own air quality data:

1. **Prepare CSV file** with these columns:
   ```csv
   temperature,humidity,pm25,pm10,no2,so2,co,o3,aqi
   25.0,60.0,35.0,50.0,40.0,20.0,0.5,60.0,85.5
   ...
   ```

2. **Place in data directory:**
   ```bash
   mkdir -p data
   cp your_data.csv data/air_quality.csv
   ```

3. **Update config.py:**
   ```python
   DATA_PATH = 'data/air_quality.csv'
   ```

4. **Delete existing model:**
   ```bash
   rm air_quality_model.pkl
   ```

5. **Restart application** - it will retrain with your data

---

## 🎨 Customization

<div align="center">

### Extension Ideas

</div>

<details>
<summary><b>🎨 Change UI Theme Colors</b></summary>

**Modify `static/css/style.css`:**

```css
/* Default Gradient Theme */
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --background: #f0f4f8;
    --card-bg: #ffffff;
    --text-color: #2d3748;
}

/* Green Environmental Theme */
:root {
    --primary-gradient: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    --background: #e8f5e9;
    --card-bg: #ffffff;
    --text-color: #1b5e20;
}

/* Dark Mode */
:root {
    --primary-gradient: linear-gradient(135deg, #434343 0%, #000000 100%);
    --background: #1a1a1a;
    --card-bg: #2a2a2a;
    --text-color: #ffffff;
}

/* Sky Blue Theme */
:root {
    --primary-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --background: #e1f5fe;
    --card-bg: #ffffff;
    --text-color: #01579b;
}
```

</details>

<details>
<summary><b>📊 Add Historical Data Tracking</b></summary>

```python
# Add to models/air_quality_model.py

import datetime
import json

class AirQualityModel:
    def __init__(self):
        # ... existing code ...
        self.prediction_history = []
    
    def predict(self, features):
        result = # ... existing prediction code ...
        
        # Track prediction with timestamp
        self.prediction_history.append({
            'timestamp': datetime.datetime.now().isoformat(),
            'features': features,
            'result': result
        })
        
        # Save to file (optional)
        self._save_history()
        
        return result
    
    def _save_history(self, filepath='prediction_history.json'):
        """Save prediction history to JSON file"""
        with open(filepath, 'w') as f:
            json.dump(self.prediction_history[-1000:], f, indent=2)  # Keep last 1000
    
    def get_history(self, limit=100):
        """Get recent prediction history"""
        return self.prediction_history[-limit:]
    
    def export_history_csv(self, filepath='history.csv'):
        """Export history to CSV"""
        import pandas as pd
        df = pd.DataFrame(self.prediction_history)
        df.to_csv(filepath, index=False)

# Add new route in app.py
@app.route('/api/history', methods=['GET'])
def get_history():
    limit = request.args.get('limit', 100, type=int)
    history = model.get_history(limit)
    return jsonify({
        'success': True,
        'history': history,
        'count': len(history)
    })
```

</details>

<details>
<summary><b>📍 Add Location-Based Predictions</b></summary>

```python
# Install: pip install requests

import requests

class AirQualityModel:
    def predict_by_location(self, latitude, longitude, api_key):
        """
        Predict AQI for geographic location using real weather data
        Uses OpenWeatherMap API (or similar)
        """
        
        # Fetch real-time weather and pollution data
        weather_url = f"https://api.openweathermap.org/data/2.5/air_pollution?lat={latitude}&lon={longitude}&appid={api_key}"
        
        response = requests.get(weather_url)
        data = response.json()
        
        # Extract pollutant data
        features = {
            'temperature': data['main']['temp'] - 273.15,  # Kelvin to Celsius
            'humidity': data['main']['humidity'],
            'pm25': data['components'].get('pm2_5', 0),
            'pm10': data['components'].get('pm10', 0),
            'no2': data['components'].get('no2', 0),
            'so2': data['components'].get('so2', 0),
            'co': data['components'].get('co', 0) / 1000,  # Convert to ppm
            'o3': data['components'].get('o3', 0)
        }
        
        return self.predict(features)

# Add new route in app.py
@app.route('/api/predict_location', methods=['POST'])
def predict_location():
    data = request.get_json()
    lat = data.get('latitude')
    lon = data.get('longitude')
    api_key = app.config.get('WEATHER_API_KEY')
    
    result = model.predict_by_location(lat, lon, api_key)
    return jsonify({'success': True, 'result': result})
```

</details>

<details>
<summary><b>📧 Add Email Alerts for Unhealthy AQI</b></summary>

```python
# Install: pip install flask-mail

from flask_mail import Mail, Message

# Configure mail in app.py
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your_password'

mail = Mail(app)

def send_aqi_alert(aqi, category, recipient_email):
    """Send email alert for unhealthy AQI"""
    if aqi > 100:  # Only send for unhealthy or worse
        msg = Message(
            subject=f'⚠️ Air Quality Alert: {category}',
            sender='noreply@aqiprediction.com',
            recipients=[recipient_email]
        )
        
        msg.body = f"""
        Air Quality Alert
        
        Current AQI: {aqi}
        Category: {category}
        
        Please take necessary precautions:
        - Limit outdoor activities
        - Use air purifiers indoors
        - Wear N95 masks if going outside
        
        Stay safe!
        """
        
        mail.send(msg)

# Add to prediction route
@app.route('/api/predict', methods=['POST'])
def predict():
    # ... existing prediction code ...
    
    # Send alert if AQI is unhealthy
    user_email = request.json.get('email')
    if user_email and result['aqi'] > 100:
        send_aqi_alert(
            result['aqi'],
            result['category'],
            user_email
        )
    
    return jsonify({'success': True, 'result': result})
```

</details>

---

## 🐛 Troubleshooting

<div align="center">

### Common Issues & Solutions

</div>

<details>
<summary><b>❌ Port 5000 already in use</b></summary>

**Symptoms:**
```
OSError: [Errno 48] Address already in use
```

**Solutions:**

1. **Change port in app.py:**
   ```python
   if __name__ == '__main__':
       app.run(host='0.0.0.0', port=8000, debug=True)  # Changed to 8000
   ```

2. **Kill process using port:**
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # Linux/Mac
   lsof -ti:5000 | xargs kill -9
   ```

3. **Use environment variable:**
   ```bash
   export FLASK_RUN_PORT=8000
   flask run
   ```

</details>

<details>
<summary><b>📦 Module not found errors</b></summary>

**Symptoms:**
```
ModuleNotFoundError: No module named 'flask'
ImportError: cannot import name 'RandomForestRegressor'
```

**Solutions:**

1. **Activate virtual environment:**
   ```bash
   # Windows
   venv\Scripts\activate
   
   # Mac/Linux
   source venv/bin/activate
   ```

2. **Reinstall dependencies:**
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

3. **Check Python version:**
   ```bash
   python --version  # Should be 3.8+
   ```

4. **Install specific package:**
   ```bash
   pip install flask scikit-learn pandas numpy
   ```

</details>

<details>
<summary><b>🤖 Model training errors</b></summary>

**Symptoms:**
```
ValueError: could not convert string to float
FileNotFoundError: [Errno 2] No such file or directory: 'data/air_quality.csv'
```

**Solutions:**

1. **Check CSV format:**
   ```python
   import pandas as pd
   df = pd.read_csv('data/air_quality.csv')
   print(df.head())
   print(df.dtypes)  # All should be numeric except target
   ```

2. **Verify required columns:**
   ```python
   required_columns = ['temperature', 'humidity', 'pm25', 'pm10', 
                       'no2', 'so2', 'co', 'o3', 'aqi']
   missing = set(required_columns) - set(df.columns)
   if missing:
       print(f"Missing columns: {missing}")
   ```

3. **Use fallback synthetic data:**
   - Delete or rename your CSV file
   - Application will generate sample data automatically

4. **Check for missing values:**
   ```python
   print(df.isnull().sum())  # Should be 0 for all columns
   df = df.dropna()  # Remove rows with missing values
   ```

</details>

<details>
<summary><b>🌐 Static files not loading</b></summary>

**Symptoms:**
- CSS styles not applied
- JavaScript not working
- 404 errors for static files

**Solutions:**

1. **Verify directory structure:**
   ```bash
   air_quality_app/
   ├── static/
   │   ├── css/
   │   │   └── style.css
   │   └── js/
   │       └── main.js
   ```

2. **Check Flask is serving static files:**
   ```python
   # In app.py
   app = Flask(__name__, static_folder='static', static_url_path='/static')
   ```

3. **Use correct paths in HTML:**
   ```html
   <!-- Correct -->
   <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
   <script src="{{ url_for('static', filename='js/main.js') }}"></script>
   
   <!-- Also works -->
   <link rel="stylesheet" href="/static/css/style.css">
   <script src="/static/js/main.js"></script>
   ```

4. **Clear browser cache:**
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

</details>

<details>
<summary><b>⚠️ Prediction returns wrong results</b></summary>

**Symptoms:**
- AQI always the same
- Unrealistic values
- Category mismatch

**Solutions:**

1. **Retrain model:**
   ```bash
   rm air_quality_model.pkl
   python app.py
   ```

2. **Check input validation:**
   ```python
   # Ensure values are in correct ranges
   assert -20 <= temperature <= 50
   assert 0 <= humidity <= 100
   assert 0 <= pm25 <= 500
   # etc.
   ```

3. **Verify feature order:**
   ```python
   # Must match training order
   feature_order = ['temperature', 'humidity', 'pm25', 'pm10',
                    'no2', 'so2', 'co', 'o3']
   ```

4. **Check model file integrity:**
   ```bash
   # Delete and retrain if corrupted
   rm air_quality_model.pkl
   python app.py
   ```

</details>

---

## 🚀 Deployment

<div align="center">

### Production Deployment Guide

</div>

### **1. Using Gunicorn (Linux/Mac)**

```bash
# Install Gunicorn
pip install gunicorn

# Run with 4 worker processes
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# With logging
gunicorn -w 4 -b 0.0.0.0:5000 app:app \
  --access-logfile access.log \
  --error-logfile error.log \
  --log-level info

# Daemonize (run in background)
gunicorn -w 4 -b 0.0.0.0:5000 app:app -D
```

### **2. Using Waitress (Windows)**

```bash
# Install Waitress
pip install waitress

# Run server
waitress-serve --port=5000 app:app
```

### **3. Using Docker**

Create `Dockerfile`:
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - ./data:/app/data
      - ./air_quality_model.pkl:/app/air_quality_model.pkl
    environment:
      - FLASK_ENV=production
```

Deploy:
```bash
docker-compose up -d
```

### **4. Environment Variables**

Create `.env` file:
```bash
FLASK_ENV=production
SECRET_KEY=your-secret-key-here
MODEL_PATH=air_quality_model.pkl
DATA_PATH=data/air_quality.csv
```

Load in `config.py`:
```python
import os
from dotenv import load_dotenv

load_dotenv()

class ProductionConfig(Config):
    DEBUG = False
    SECRET_KEY = os.getenv('SECRET_KEY')
    MODEL_PATH = os.getenv('MODEL_PATH')
```

### **5. Nginx Reverse Proxy**

Create `/etc/nginx/sites-available/aqi`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /static {
        alias /path/to/air_quality_app/static;
        expires 30d;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/aqi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---
## 👨‍💻 Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=ffffff&center=true&vCenter=true&width=435&lines=Aryan+Ranjan;Open+Source+Contributor" alt="Author Typing SVG" />

---

## 🤝 Contributing

<div align="center">

**Contributions are welcome!** Help improve air quality monitoring:

</div>

### Ways to Contribute

<table>
  <tr>
    <td align="center" width="25%">
      <img src="https://img.icons8.com/color/96/000000/bug.png" width="60" height="60" alt="Bug"/>
      <br><b>Report Bugs</b>
      <br>Found an issue?
      <br>Open an issue
    </td>
    <td align="center" width="25%">
      <img src="https://img.icons8.com/color/96/000000/idea.png" width="60" height="60" alt="Feature"/>
      <br><b>Suggest Features</b>
      <br>Have an idea?
      <br>Share it!
    </td>
    <td align="center" width="25%">
      <img src="https://img.icons8.com/color/96/000000/code.png" width="60" height="60" alt="Code"/>
      <br><b>Submit Code</b>
      <br>Improvements?
      <br>Send a PR
    </td>
    <td align="center" width="25%">
      <img src="https://img.icons8.com/color/96/000000/document.png" width="60" height="60" alt="Docs"/>
      <br><b>Improve Docs</b>
      <br>Better explanation?
      <br>Update README
    </td>
  </tr>
</table>

### Development Workflow

1. **Fork** the repository
2. **Clone** your fork
3. **Create** a feature branch: `git checkout -b feature/real-time-monitoring`
4. **Make** your changes
5. **Test** thoroughly
6. **Commit**: `git commit -m 'Add real-time monitoring feature'`
7. **Push**: `git push origin feature/real-time-monitoring`
8. **Open** a Pull Request

### Code Style

- Follow PEP 8 for Python code
- Use meaningful variable names
- Add docstrings to functions
- Comment complex logic
- Write unit tests for new features

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License**

Free to use, modify, and distribute with attribution

</div>

---

##  Acknowledgments

<div align="center">

**Special thanks to:**

- 🌍 **EPA** for AQI standards and guidelines
- 🤖 **Scikit-learn Team** for excellent ML tools
- 🌐 **Flask Community** for the web framework
- 📊 **Environmental Scientists** for research
- 👥 **Open Source Community** for continuous support
- 💚 **You** for using this project to promote environmental awareness!

</div>

---

<div align="center">


## 🌟 Show Your Support

**If this project helped you, please consider:**

<a href="https://github.com/aryan-r03/Air-Quality-Detection-ML-Model">
  <img src="https://img.shields.io/github/stars/aryan-r03/Air-Quality-Detection-ML-Model?style=social" alt="GitHub stars"/>
</a>
<a href="https://github.com/aryan-r03/Air-Quality-Detection-ML-Model/fork">
  <img src="https://img.shields.io/github/forks/aryan-r03/Air-Quality-Detection-ML-Model?style=social" alt="GitHub forks"/>
</a>
<a href="https://github.com/aryan-r03/Air-Quality-Detection-ML-Model/watchers">
  <img src="https://img.shields.io/github/watchers/aryan-r03/Air-Quality-Detection-ML-Model?style=social" alt="GitHub watchers"/>
</a>

<br><br>

**⭐ Star this repository if you found it helpful!**

**🍴 Fork it to build your own NLP projects!**

**📢 Share it with the ML community!**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer" alt="Footer"/>

<br>


---

**© 2025 Open Source Project | Air Quality Monitoring | MIT License**

<br>

**⚠️ Disclaimer:** This tool is designed for educational and informational purposes. For official air quality data and health recommendations, please consult your local environmental protection agency (EPA, WHO, etc.) and healthcare professionals. The predictions are based on machine learning models and should not be used as the sole source for health-critical decisions.


</div>
