        document.getElementById('convert-btn').addEventListener('click', function() {
            const temperatureInput = document.getElementById('temperature');
            const errorElement = document.getElementById('temperature-error');
            const resultElement = document.getElementById('result');

            if (temperatureInput.value === '' || isNaN(temperatureInput.value)) {
                errorElement.style.display = 'block';
                resultElement.style.display = 'none';
                return;
            } else {
                errorElement.style.display = 'none';
            }
            
            const temperature = parseFloat(temperatureInput.value);
            const fromUnit = document.querySelector('input[name="from-unit"]:checked').value;
            const toUnit = document.querySelector('input[name="to-unit"]:checked').value;
 
            let convertedTemp;
            let unitSymbol;
            
            if (fromUnit === toUnit) {
                convertedTemp = temperature;
            } else {
                
                let celsius;
                if (fromUnit === 'celsius') {
                    celsius = temperature;
                } else if (fromUnit === 'fahrenheit') {
                    celsius = (temperature - 32) * 5/9;
                } else if (fromUnit === 'kelvin') {
                    celsius = temperature - 273.15;
                }
                    
                if (toUnit === 'celsius') {
                    convertedTemp = celsius;
                } else if (toUnit === 'fahrenheit') {
                    convertedTemp = (celsius * 9/5) + 32;
                } else if (toUnit === 'kelvin') {
                    convertedTemp = celsius + 273.15;
                }
            }
            
            convertedTemp = Math.round(convertedTemp * 100) / 100;
            
          
            if (toUnit === 'celsius') {
                unitSymbol = '°C';
            } else if (toUnit === 'fahrenheit') {
                unitSymbol = '°F';
            } else if (toUnit === 'kelvin') {
                unitSymbol = 'K';
            }
            
            resultElement.textContent = `Converted Temperature: ${convertedTemp} ${unitSymbol}`;
            resultElement.style.display = 'block';
        });
