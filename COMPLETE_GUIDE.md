# 🎯 Complete Setup & Usage Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [File Organization](#file-organization)
3. [Installation Steps](#installation-steps)
4. [Running the Application](#running-the-application)
5. [File Storage Rules](#file-storage-rules)
6. [Customization Guide](#customization-guide)

---

## 🌟 Project Overview

This is a refactored Air Quality Prediction web application that uses Machine Learning to predict Air Quality Index (AQI) based on environmental parameters.

**What changed:**
- ❌ Single 775-line `app.py` file with embedded HTML/CSS/JS
- ✅ Modular structure with separated concerns

---

## 📁 File Organization

### Complete Directory Structure
```
air_quality_app/
│
├── 📄 app.py                       # Main Flask application (START HERE)
├── 📄 config.py                    # Configuration settings
├── 📄 requirements.txt             # Python dependencies
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Full documentation
├── 📄 QUICKSTART.md                # Quick start guide
├── 📄 FILE_ORGANIZATION.md         # Detailed file structure
│
├── 📁 models/                      # Machine Learning Code
│   ├── 📄 __init__.py             # Package initializer
│   └── 📄 air_quality_model.py    # ML model class
│
├── 📁 utils/                       # Helper Functions
│   ├── 📄 __init__.py             # Package initializer
│   └── 📄 model_utils.py          # Model training utilities
│
├── 📁 templates/                   # HTML Templates (Flask requirement)
│   └── 📄 index.html              # Main webpage
│
├── 📁 static/                      # Static Assets (Flask requirement)
│   ├── 📁 css/
│   │   └── 📄 style.css          # All styles
│   └── 📁 js/
│       └── 📄 main.js            # All JavaScript
│
└── 📁 data/                        # Data Files (Optional)
    ├── 📄 README.md               # Data folder instructions
    └── 📄 air_quality.csv         # Training data (optional)
```

---

## 🚀 Installation Steps

### Step 1: Prerequisites
Ensure you have:
- Python 3.8 or higher
- pip (Python package manager)

Check your Python version:
```bash
python --version
# or
python3 --version
```

### Step 2: Extract the Project
```bash
# Navigate to where you extracted the folder
cd air_quality_app
```

### Step 3: Create Virtual Environment (Recommended)
```bash
# Create virtual environment
python -m venv venv

# Activate it:
# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
```

You should see `(venv)` in your terminal prompt.

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

This installs:
- Flask (web framework)
- Flask-CORS (cross-origin support)
- pandas (data manipulation)
- numpy (numerical computing)
- scikit-learn (machine learning)

### Step 5: Verify Installation
```bash
pip list
```

You should see all the packages listed in `requirements.txt`.

---

## ▶️ Running the Application

### Method 1: Simple Run
```bash
python app.py
```

### Method 2: Using Python 3 explicitly
```bash
python3 app.py
```

### Expected Output
```
============================================================
Initializing Air Quality Prediction System...
============================================================

Creating sample air quality dataset...
✓ Model loaded from air_quality_model.pkl

✓ System ready!
============================================================

============================================================
Starting Flask Development Server...
============================================================

🌐 Server running at: http://127.0.0.1:5000
📊 API endpoint: http://127.0.0.1:5000/api/predict

💡 Press CTRL+C to stop the server

============================================================
```

### Access the Application
1. Open your web browser
2. Navigate to: **http://127.0.0.1:5000**
3. You should see the Air Quality Predictor interface

---

## 📂 File Storage Rules

### ✅ DO Store Here:

#### Python Backend Files
```
✅ Models        → models/
✅ Utilities     → utils/
✅ Main app      → Root directory (app.py)
✅ Configuration → Root directory (config.py)
```

#### Frontend Files
```
✅ HTML files    → templates/
✅ CSS files     → static/css/
✅ JavaScript    → static/js/
✅ Images        → static/images/ (create if needed)
✅ Fonts         → static/fonts/ (create if needed)
```

#### Data & Models
```
✅ CSV files     → data/
✅ Model files   → Root directory (.pkl files)
```

#### Documentation
```
✅ README files  → Root directory
✅ Config files  → Root directory
```

### ❌ DON'T Store Here:

```
❌ Don't put HTML in the root directory
❌ Don't put CSS/JS outside static/
❌ Don't put Python files in templates/
❌ Don't put models in static/
```

### 🎯 Quick Reference Table

| File Type | Correct Location | Example |
|-----------|-----------------|---------|
| Python classes | `models/` | `air_quality_model.py` |
| Python utilities | `utils/` | `model_utils.py` |
| Flask routes | Root | `app.py` |
| HTML pages | `templates/` | `index.html` |
| CSS files | `static/css/` | `style.css` |
| JavaScript | `static/js/` | `main.js` |
| Images | `static/images/` | `logo.png` |
| CSV data | `data/` | `air_quality.csv` |
| Documentation | Root | `README.md` |

---

## 🎨 Customization Guide

### Change the Port
```python
# In app.py, find this line at the bottom:
app.run(debug=True, host='0.0.0.0', port=5000)

# Change to:
app.run(debug=True, host='0.0.0.0', port=8080)
```

### Modify Colors/Styles
```css
/* Edit: static/css/style.css */

/* Change background gradient: */
body {
    background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 100%);
}

/* Change button color: */
.analyze-btn {
    background: linear-gradient(135deg, #newcolor1 0%, #newcolor2 100%);
}
```

### Update Page Title
```html
<!-- Edit: templates/index.html -->
<title>Your New Title</title>

<!-- Update header: -->
<h1>🌍 Your New Header</h1>
```

### Modify ML Model Parameters
```python
# Edit: models/air_quality_model.py

# Find this line:
self.model = RandomForestRegressor(n_estimators=100, random_state=42)

# Change to:
self.model = RandomForestRegressor(
    n_estimators=200,      # More trees
    max_depth=15,          # Limit tree depth
    random_state=42
)
```

### Add New API Endpoint
```python
# In app.py, add:

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({
        'status': 'online',
        'version': '1.0.0'
    })
```

### Use Your Own Data
1. Place your CSV file in `data/` folder
2. Ensure it has these columns:
   - temperature, humidity, pm25, pm10, no2, so2, co, o3, aqi
3. Delete existing model:
   ```bash
   rm air_quality_model.pkl
   ```
4. Update `config.py`:
   ```python
   CSV_PATH = 'data/your_file.csv'
   ```
5. Restart the app - it will train on your data

---

## 🔧 Common Tasks

### View All Files
```bash
# On macOS/Linux:
ls -la

# On Windows:
dir

# Show tree structure:
tree
```

### Edit a File
```bash
# Using nano (simple):
nano app.py

# Using vim (advanced):
vim app.py

# Using VS Code:
code .
```

### Check if Server is Running
```bash
# Check port 5000:
# On macOS/Linux:
lsof -i :5000

# On Windows:
netstat -ano | findstr :5000
```

### Stop the Server
```
Press CTRL+C in the terminal
```

### View Logs
The console where you ran `python app.py` shows all logs in real-time.

### Restart After Changes
```bash
# Stop server (CTRL+C)
# Start again:
python app.py
```

---

## 🐛 Troubleshooting

### Problem: "Module not found" error
**Solution:**
```bash
pip install -r requirements.txt
```

### Problem: "Port already in use"
**Solution:**
```bash
# Option 1: Kill the process using the port
# On macOS/Linux:
lsof -ti:5000 | xargs kill -9

# Option 2: Change the port in app.py
# Change port=5000 to port=5001
```

### Problem: "Template not found"
**Solution:**
- Ensure `index.html` is in `templates/` folder
- Check file name spelling (case-sensitive on Linux/macOS)

### Problem: "Static files not loading"
**Solution:**
- Verify `style.css` is in `static/css/`
- Verify `main.js` is in `static/js/`
- Clear browser cache (CTRL+F5)

### Problem: "Model file not found"
**Solution:**
```bash
# Let the app create a new model:
rm air_quality_model.pkl
python app.py
# The app will train and save a new model automatically
```

---

## 📚 Documentation Files Included

1. **README.md** - Complete project documentation
2. **QUICKSTART.md** - Quick setup guide
3. **FILE_ORGANIZATION.md** - Detailed file structure
4. **REFACTORING_SUMMARY.md** - What changed and why
5. This file - Complete setup guide

---

## ✅ Setup Checklist

Before first run:
- [ ] Python 3.8+ installed
- [ ] Extracted `air_quality_app` folder
- [ ] Navigated to folder (`cd air_quality_app`)
- [ ] Created virtual environment (optional but recommended)
- [ ] Activated virtual environment
- [ ] Installed dependencies (`pip install -r requirements.txt`)

To run:
- [ ] Run `python app.py`
- [ ] See success messages in terminal
- [ ] Open browser to http://127.0.0.1:5000
- [ ] See the Air Quality Predictor page

---

## 🎓 Learning Resources

### Understanding the Code Structure

**app.py** (Main Application)
- Flask app setup
- Route definitions
- API endpoints
- Server configuration

**models/air_quality_model.py** (ML Model)
- Model training
- Predictions
- Data processing
- AQI calculations

**templates/index.html** (Frontend Structure)
- HTML layout
- Form inputs
- Results display

**static/css/style.css** (Styling)
- Visual design
- Responsive layout
- Animations

**static/js/main.js** (Interactivity)
- Form handling
- API calls
- Dynamic updates

---

## 🎉 You're All Set!

Your refactored application is ready to use. The modular structure makes it easy to:
- 🔍 Find specific functionality
- ✏️ Make changes safely
- 🚀 Add new features
- 🤝 Collaborate with others
- 📦 Deploy to production

**Start the application:**
```bash
python app.py
```

**Access it at:**
http://127.0.0.1:5000

Happy coding! 🌍✨
