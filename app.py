# app.py
"""
Air Quality Prediction Flask Application
Main application entry point
"""

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import sys

# Add current directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from utils.model_utils import load_or_train_model

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configuration
CSV_FILE = 'data/air_quality.csv'
MODEL_FILE = 'air_quality_model.pkl'

# Load or train model on startup
print("\n" + "=" * 60)
print("Initializing Air Quality Prediction System...")
print("=" * 60)

air_quality_analyzer = load_or_train_model(
    csv_path=CSV_FILE if os.path.exists(CSV_FILE) else None,
    model_path=MODEL_FILE
)

print("\n✓ System ready!")
print("=" * 60 + "\n")


@app.route('/')
def home():
    """
    Render the main page
    """
    return render_template('index.html')


@app.route('/api/predict', methods=['POST'])
def predict_air_quality():
    """
    API endpoint for air quality prediction
    
    Expected JSON format:
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
    
    Returns:
    {
        "success": true,
        "result": {
            "aqi": 85.5,
            "category": "MODERATE",
            "health_implication": "Acceptable for most people",
            "color": "yellow"
        }
    }
    """
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({
                'success': False,
                'error': 'No data provided'
            }), 400
        
        features = data.get('features', {})
        
        if not features:
            return jsonify({
                'success': False,
                'error': 'No features provided'
            }), 400
        
        # Make prediction
        result = air_quality_analyzer.predict(features)
        
        return jsonify({
            'success': True,
            'result': result
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """
    Health check endpoint
    """
    return jsonify({
        'status': 'healthy',
        'model_loaded': air_quality_analyzer.model is not None
    })


if __name__ == '__main__':
    print("\n" + "=" * 60)
    print("Starting Flask Development Server...")
    print("=" * 60)
    print("\n🌐 Server running at: http://127.0.0.1:5000")
    print("📊 API endpoint: http://127.0.0.1:5000/api/predict")
    print("\n💡 Press CTRL+C to stop the server\n")
    print("=" * 60 + "\n")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
