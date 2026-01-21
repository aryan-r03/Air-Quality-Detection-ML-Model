# Quick Start Guide 🚀

## Installation & Running in 3 Steps

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Run the Application
```bash
python app.py
```

### Step 3: Open Your Browser
Navigate to: **http://127.0.0.1:5000**

---

## Project File Structure (What Goes Where)

```
air_quality_app/
│
├── 📄 app.py                         ← Main application (START HERE)
├── 📄 config.py                      ← Settings and configuration
├── 📄 requirements.txt               ← Python packages needed
│
├── 📁 models/                        ← Machine Learning Code
│   ├── __init__.py
│   └── air_quality_model.py         ← Model logic
│
├── 📁 utils/                         ← Helper Functions
│   ├── __init__.py
│   └── model_utils.py               ← Training utilities
│
├── 📁 templates/                     ← HTML Files
│   └── index.html                   ← Main webpage
│
├── 📁 static/                        ← Frontend Assets
│   ├── css/
│   │   └── style.css               ← All styles here
│   └── js/
│       └── main.js                 ← All JavaScript here
│
└── 📁 data/                          ← Data Files (Optional)
    └── air_quality.csv              ← Your training data
```

---

## File Storage Rules

### Python Files
- **Models**: Put in `models/` folder
- **Utilities**: Put in `utils/` folder
- **Main app**: `app.py` in root

### Frontend Files
- **HTML**: Must go in `templates/` folder
- **CSS**: Must go in `static/css/` folder
- **JavaScript**: Must go in `static/js/` folder
- **Images**: Put in `static/images/` folder (if needed)

### Data Files
- **CSV files**: Put in `data/` folder
- **Trained models**: Auto-generated in root (`.pkl` files)

---

## Common Commands

### Install packages
```bash
pip install -r requirements.txt
```

### Run the app
```bash
python app.py
```

### Run with custom port
```bash
# Edit app.py, change line:
app.run(debug=True, port=5001)
```

### Train new model
```bash
# Delete old model and restart:
rm air_quality_model.pkl
python app.py
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Module not found" | Run `pip install -r requirements.txt` |
| "Port already in use" | Change port in `app.py` |
| Page not loading styles | Check `static/` folder structure |
| Model not training | Check `data/` folder for CSV file |

---

## File Sequence for Storage

When setting up the project, create files in this order:

1. **Create main directory**
   ```bash
   mkdir air_quality_app
   cd air_quality_app
   ```

2. **Create subdirectories**
   ```bash
   mkdir models utils templates static static/css static/js data
   ```

3. **Add Python files**
   - `models/air_quality_model.py`
   - `models/__init__.py`
   - `utils/model_utils.py`
   - `utils/__init__.py`
   - `app.py`
   - `config.py`
   - `requirements.txt`

4. **Add frontend files**
   - `templates/index.html`
   - `static/css/style.css`
   - `static/js/main.js`

5. **Run the application**
   ```bash
   pip install -r requirements.txt
   python app.py
   ```

---

## What Each File Does

| File | Purpose |
|------|---------|
| `app.py` | Main Flask application, routes, API endpoints |
| `config.py` | Configuration settings (ports, paths, etc.) |
| `requirements.txt` | List of Python packages to install |
| `models/air_quality_model.py` | ML model class with training & prediction |
| `utils/model_utils.py` | Helper functions for model management |
| `templates/index.html` | Web page structure (HTML only) |
| `static/css/style.css` | All styling (colors, layout, animations) |
| `static/js/main.js` | Frontend logic (form handling, API calls) |
| `data/air_quality.csv` | Optional training data |

---

That's it! Your application should now be running at http://127.0.0.1:5000 🎉
