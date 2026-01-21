# File Organization & Sequence Guide

## 📂 Complete Directory Structure

```
air_quality_app/                    (Root folder - create this first)
│
├── 📄 app.py                       (Main Flask application)
├── 📄 config.py                    (Configuration settings)
├── 📄 requirements.txt             (Python dependencies)
├── 📄 README.md                    (Full documentation)
├── 📄 QUICKSTART.md                (Quick setup guide)
├── 📄 .gitignore                   (Git ignore rules)
│
├── 📁 models/                      (Machine Learning models folder)
│   ├── 📄 __init__.py             (Makes it a Python package)
│   └── 📄 air_quality_model.py    (ML model class)
│
├── 📁 utils/                       (Utility functions folder)
│   ├── 📄 __init__.py             (Makes it a Python package)
│   └── 📄 model_utils.py          (Helper functions)
│
├── 📁 templates/                   (HTML templates folder)
│   └── 📄 index.html              (Main webpage)
│
├── 📁 static/                      (Static files folder)
│   ├── 📁 css/                    (Stylesheets folder)
│   │   └── 📄 style.css          (CSS styles)
│   └── 📁 js/                     (JavaScript folder)
│       └── 📄 main.js            (Frontend logic)
│
└── 📁 data/                        (Data files folder - optional)
    ├── 📄 README.md               (Data folder guide)
    └── 📄 air_quality.csv         (Training data - optional)
```

---

## 🔢 Creation Sequence (Step-by-Step Order)

### Phase 1: Create Directory Structure
```bash
# Step 1: Create main folder
mkdir air_quality_app
cd air_quality_app

# Step 2: Create all subdirectories at once
mkdir -p models utils templates static/css static/js data
```

### Phase 2: Create Python Backend Files
```bash
# Step 3: Create __init__.py files (makes folders into Python packages)
touch models/__init__.py
touch utils/__init__.py

# Step 4: Create model files
# Create: models/air_quality_model.py

# Step 5: Create utility files  
# Create: utils/model_utils.py

# Step 6: Create main application
# Create: app.py

# Step 7: Create configuration
# Create: config.py

# Step 8: Create requirements file
# Create: requirements.txt
```

### Phase 3: Create Frontend Files
```bash
# Step 9: Create HTML template
# Create: templates/index.html

# Step 10: Create CSS styles
# Create: static/css/style.css

# Step 11: Create JavaScript
# Create: static/js/main.js
```

### Phase 4: Create Documentation
```bash
# Step 12: Create documentation files
# Create: README.md
# Create: QUICKSTART.md
# Create: .gitignore
# Create: data/README.md
```

### Phase 5: Run the Application
```bash
# Step 13: Install dependencies
pip install -r requirements.txt

# Step 14: Run the application
python app.py
```

---

## 📋 File Type Categories

### Backend (Python) Files
```
app.py                          ← Flask routes & API endpoints
config.py                       ← Settings & configuration
models/air_quality_model.py     ← ML model definition
utils/model_utils.py            ← Helper functions
```

### Frontend Files
```
templates/index.html            ← HTML structure
static/css/style.css           ← Visual styling
static/js/main.js              ← Interactive logic
```

### Configuration Files
```
requirements.txt                ← Python packages
.gitignore                      ← Git ignore rules
README.md                       ← Documentation
QUICKSTART.md                   ← Quick start guide
```

### Data Files (Optional)
```
data/air_quality.csv           ← Training dataset
air_quality_model.pkl          ← Trained model (auto-generated)
```

---

## 🎯 Where to Store Different File Types

| File Type | Location | Example |
|-----------|----------|---------|
| Python classes | `models/` | `air_quality_model.py` |
| Python utilities | `utils/` | `model_utils.py` |
| Main Flask app | Root | `app.py` |
| HTML pages | `templates/` | `index.html` |
| CSS stylesheets | `static/css/` | `style.css` |
| JavaScript files | `static/js/` | `main.js` |
| Images | `static/images/` | `logo.png` |
| Data files | `data/` | `air_quality.csv` |
| Config files | Root | `config.py`, `.env` |
| Docs | Root | `README.md` |

---

## 🔄 How Files Connect

```
┌─────────────┐
│   app.py    │ ← Main entry point, imports from models/ and utils/
└──────┬──────┘
       │
       ├─→ models/air_quality_model.py  (ML model)
       ├─→ utils/model_utils.py         (Helper functions)
       └─→ templates/index.html         (Renders web page)
                  │
                  ├─→ static/css/style.css    (Styling)
                  └─→ static/js/main.js       (Interactivity)
                             │
                             └─→ /api/predict  (Calls back to app.py)
```

---

## ✅ Quick Checklist

Before running the application, ensure you have:

- [ ] Created all folders (models, utils, templates, static/css, static/js, data)
- [ ] Created all Python files with correct content
- [ ] Created all frontend files (HTML, CSS, JS)
- [ ] Created __init__.py in models/ and utils/
- [ ] Created requirements.txt
- [ ] Installed dependencies (`pip install -r requirements.txt`)
- [ ] You're in the correct directory (air_quality_app/)

Then run: `python app.py`

---

## 🎨 Frontend File Relationships

```
index.html
    │
    ├── <link href="static/css/style.css">     (Loads styles)
    └── <script src="static/js/main.js">       (Loads JavaScript)
                     │
                     └── fetch('/api/predict')  (Calls API)
```

---

## 🗂️ File Naming Conventions

| Purpose | Naming Pattern | Example |
|---------|---------------|---------|
| Python modules | snake_case.py | `air_quality_model.py` |
| Python classes | PascalCase | `AirQualityModel` |
| HTML files | lowercase.html | `index.html` |
| CSS files | lowercase.css | `style.css` |
| JS files | lowercase.js | `main.js` |
| Config files | UPPERCASE.txt | `README.md` |

---

This organization follows Flask best practices and keeps your code clean and maintainable! 🚀
