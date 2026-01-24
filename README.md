# QR Code Generator

A modern, minimalist QR code generator with advanced features including templates, logo embedding, and QR code scanning.

## Features

### 🎨 Minimalist Design
- Clean, white interface with neutral tones
- Focused user experience
- Responsive layout for all devices

### 📋 QR Code Templates
- **URL**: Website links
- **Text**: Plain text content
- **WiFi**: Network credentials  
- **vCard**: Contact information
- **Email**: Email address with subject/body
- **SMS**: Text messages
- **Phone**: Phone numbers
- **WhatsApp**: Direct WhatsApp links

### 🎨 Customization Options
- Color customization (foreground & background)
- Size adjustment (150px - 800px)
- Error correction levels (L, M, Q, H)
- Logo embedding in center of QR code

### 📷 QR Code Scanner
- Camera scanning using device camera
- Image upload scanning
- Automatic QR code detection

### 📜 History & Management
- Automatic history tracking
- Quick reload previous codes
- Clear history functionality

## Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS v4
- html5-qrcode for scanning
- Axios for API calls

**Backend:**
- Flask (Python)
- qrcode library with PIL
- CORS enabled
- Gunicorn for production

**Deployment:**
- Docker & Docker Compose
- Nginx for frontend serving
- Keep-alive service for Render.com

## Quick Start

### Local Development (without Docker)

1. **Backend**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Access the app at `http://localhost:5173`

### With Docker

```bash
# Build and start all services
docker-compose up --build

# Access at http://localhost
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Render.com.

## API Documentation

### Generate QR Code
```http
POST /api/generate
Content-Type: application/json

{
  "text": "Content to encode",
  "size": 300,
  "fg_color": "#000000",
  "bg_color": "#ffffff",
  "error_correction": "M",
  "logo": {
    "image": "data:image/png;base64,...",
    "size": 20
  }
}
```

### Health Check
```http
GET /api/health
```

## Project Structure

```
qrCode/
├── backend/              # Flask API
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/             # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── QRGenerator.jsx
│   │   │   ├── QRTemplates.jsx
│   │   │   ├── QRHistory.jsx
│   │   │   ├── QRScanner.jsx
│   │   │   └── LogoUploader.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── keep-alive/           # Keep-alive service
│   ├── keep-alive.py
│   └── Dockerfile
├── docker-compose.yml
├── render.yaml
└── README.md
```

## Screenshots

### Generate QR Code
Minimalist interface with template selection and customization options.

### Scanner
Scan existing QR codes using camera or image upload.

### History
Track and reload previously generated QR codes.

## License

MIT License - feel free to use for personal or commercial projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
