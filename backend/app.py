from flask import Flask, request, jsonify
from flask_cors import CORS
import qrcode
import io
import base64
from PIL import Image
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint for unified keep-alive monitoring"""
    return jsonify({
        'project': 'QR Code Generator',
        'status': 'healthy',
        'message': 'QR Code API is running'
    }), 200

@app.route('/api/generate', methods=['POST'])
def generate_qr():
    """
    Generate QR code from provided data
    Expected JSON payload:
    {
        "text": "string (required)",
        "size": int (optional, default: 300),
        "fg_color": "string (optional, default: #000000)",
        "bg_color": "string (optional, default: #ffffff)",
        "error_correction": "string (optional, default: M, options: L, M, Q, H)"
    }
    """
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data or 'text' not in data:
            return jsonify({'error': 'Text field is required'}), 400
        
        text = data.get('text', '').strip()
        if not text:
            return jsonify({'error': 'Text cannot be empty'}), 400
        
        # Get optional parameters with defaults
        size = data.get('size', 300)
        fg_color = data.get('fg_color', '#000000')
        bg_color = data.get('bg_color', '#ffffff')
        error_correction_level = data.get('error_correction', 'M')
        logo_data = data.get('logo', None)
        
        # Validate size
        if not isinstance(size, int) or size < 100 or size > 1000:
            return jsonify({'error': 'Size must be between 100 and 1000 pixels'}), 400
        
        # Map error correction level
        error_correction_map = {
            'L': qrcode.constants.ERROR_CORRECT_L,
            'M': qrcode.constants.ERROR_CORRECT_M,
            'Q': qrcode.constants.ERROR_CORRECT_Q,
            'H': qrcode.constants.ERROR_CORRECT_H,
        }
        
        error_correction = error_correction_map.get(
            error_correction_level.upper(), 
            qrcode.constants.ERROR_CORRECT_M
        )
        
        # Generate QR code
        qr = qrcode.QRCode(
            version=1,
            error_correction=error_correction,
            box_size=10,
            border=4,
        )
        qr.add_data(text)
        qr.make(fit=True)
        
        # Create image
        img = qr.make_image(fill_color=fg_color, back_color=bg_color)
        img = img.convert('RGB')
        
        # Resize to requested size
        img = img.resize((size, size), Image.Resampling.LANCZOS)
        
        # Add logo if provided
        if logo_data and isinstance(logo_data, dict):
            try:
                logo_image_data = logo_data.get('image', '')
                logo_size_percent = logo_data.get('size', 20)
                
                # Extract base64 image data
                if logo_image_data.startswith('data:image'):
                    logo_image_data = logo_image_data.split(',')[1]
                
                # Decode logo
                logo_bytes = base64.b64decode(logo_image_data)
                logo = Image.open(io.BytesIO(logo_bytes))
                
                # Calculate logo size
                logo_size = int(size * (logo_size_percent / 100))
                
                # Resize logo
                logo.thumbnail((logo_size, logo_size), Image.Resampling.LANCZOS)
                
                # Calculate position to center logo
                logo_pos = (
                    (size - logo.size[0]) // 2,
                    (size - logo.size[1]) // 2
                )
                
                # Add white background behind logo for better visibility
                if logo.mode == 'RGBA':
                    background = Image.new('RGB', logo.size, 'white')
                    background.paste(logo, mask=logo.split()[3])
                    img.paste(background, logo_pos)
                else:
                    img.paste(logo, logo_pos)
                    
            except Exception as logo_error:
                app.logger.warning(f"Failed to add logo: {str(logo_error)}")
                # Continue without logo if there's an error
        
        # Convert to base64
        buffered = io.BytesIO()
        img.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return jsonify({
            'success': True,
            'image': f'data:image/png;base64,{img_str}',
            'message': 'QR code generated successfully'
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error generating QR code: {str(e)}")
        return jsonify({'error': f'Failed to generate QR code: {str(e)}'}), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
