const form = document.getElementById('airQualityForm');
        const loading = document.getElementById('loading');
        const resultDiv = document.getElementById('result');
        const analyzeBtn = document.getElementById('analyzeBtn');

        function loadGoodAir() {
            document.getElementById('temperature').value = 22;
            document.getElementById('humidity').value = 55;
            document.getElementById('pm25').value = 15;
            document.getElementById('pm10').value = 25;
            document.getElementById('no2').value = 20;
            document.getElementById('so2').value = 10;
            document.getElementById('co').value = 0.3;
            document.getElementById('o3').value = 40;
        }

        function loadModerateAir() {
            document.getElementById('temperature').value = 28;
            document.getElementById('humidity').value = 65;
            document.getElementById('pm25').value = 45;
            document.getElementById('pm10').value = 65;
            document.getElementById('no2').value = 50;
            document.getElementById('so2').value = 30;
            document.getElementById('co').value = 1.2;
            document.getElementById('o3').value = 80;
        }

        function loadUnhealthyAir() {
            document.getElementById('temperature').value = 32;
            document.getElementById('humidity').value = 70;
            document.getElementById('pm25').value = 120;
            document.getElementById('pm10').value = 180;
            document.getElementById('no2').value = 100;
            document.getElementById('so2').value = 70;
            document.getElementById('co').value = 3.5;
            document.getElementById('o3').value = 140;
        }

        function clearForm() {
            form.reset();
            resultDiv.style.display = 'none';
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const features = {
                temperature: parseFloat(document.getElementById('temperature').value),
                humidity: parseFloat(document.getElementById('humidity').value),
                pm25: parseFloat(document.getElementById('pm25').value),
                pm10: parseFloat(document.getElementById('pm10').value),
                no2: parseFloat(document.getElementById('no2').value),
                so2: parseFloat(document.getElementById('so2').value),
                co: parseFloat(document.getElementById('co').value),
                o3: parseFloat(document.getElementById('o3').value)
            };

            analyzeBtn.disabled = true;
            loading.style.display = 'flex';
            resultDiv.style.display = 'none';

            try {
                const response = await fetch('/api/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ features: features })
                });

                const data = await response.json();

                if (data.success) {
                    displayResult(data.result);
                } else {
                    displayError(data.error || 'Unknown error');
                }
            } catch (error) {
                displayError(error.message);
            } finally {
                analyzeBtn.disabled = false;
                loading.style.display = 'none';
            }
        });

        function displayResult(result) {
            const colorClass = result.color;

            resultDiv.innerHTML = `
                <div class="result-container">
                    <div class="aqi-circle ${colorClass}">
                        <div class="aqi-value">${Math.round(result.aqi)}</div>
                        <div class="aqi-label">AQI</div>
                    </div>

                    <div class="category-title ${colorClass}">${result.category}</div>
                    <div class="health-text">${result.health_implication}</div>

                    <div class="info-box">
                        <div class="info-box-title">ℹ️ About Air Quality Index</div>
                        <div class="info-box-text">
                            The Air Quality Index (AQI) is calculated based on multiple pollutants including PM2.5, PM10, NO2, SO2, CO, and O3. This prediction is generated using machine learning algorithms trained on environmental data. For official air quality information, please consult your local environmental protection agency.
                        </div>
                    </div>
                </div>
            `;

            resultDiv.style.display = 'flex';
        }

        function displayError(errorMessage) {
            resultDiv.innerHTML = `
                <div class="result-container">
                    <div class="aqi-circle" style="border-color: #666; background: rgba(100, 100, 100, 0.2);">
                        <div class="aqi-value">--</div>
                        <div class="aqi-label">ERROR</div>
                    </div>

                    <div class="category-title" style="color: #999;">CALCULATION ERROR</div>
                    <div class="health-text">Unable to calculate AQI. Please check your inputs.</div>

                    <div class="info-box">
                        <div class="info-box-title">⚠️ Error Details</div>
                        <div class="info-box-text">${errorMessage}</div>
                    </div>
                </div>
            `;

            resultDiv.style.display = 'flex';
        }

        // Load good air example by default
        window.addEventListener('load', () => {
            loadGoodAir();
        });