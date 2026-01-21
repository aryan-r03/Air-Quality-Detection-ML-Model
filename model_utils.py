# utils/model_utils.py
"""
Utility functions for model training and management
"""

import os
from models.air_quality_model import AirQualityModel


def train_and_save_model(csv_path=None, model_path='air_quality_model.pkl'):
    """
    Train the air quality model and save it to disk
    
    Args:
        csv_path: Path to CSV file (optional)
        model_path: Path where to save the model
        
    Returns:
        Trained AirQualityModel instance
    """
    air_quality_model = AirQualityModel()
    
    # Load or create dataset
    if csv_path and os.path.exists(csv_path):
        df = air_quality_model.load_dataset_from_csv(csv_path)
    else:
        df = air_quality_model.create_sample_dataset()
    
    # Train model
    air_quality_model.train(df)
    
    # Save model
    air_quality_model.save_model(model_path)
    
    return air_quality_model


def load_or_train_model(csv_path=None, model_path='air_quality_model.pkl'):
    """
    Load existing model or train a new one if not found
    
    Args:
        csv_path: Path to CSV file (optional)
        model_path: Path to saved model
        
    Returns:
        AirQualityModel instance
    """
    air_quality_model = AirQualityModel()
    
    if os.path.exists(model_path):
        print(f"Loading existing model from {model_path}...")
        air_quality_model.load_model(model_path)
    else:
        print("No existing model found. Training new model...")
        air_quality_model = train_and_save_model(csv_path, model_path)
    
    return air_quality_model
