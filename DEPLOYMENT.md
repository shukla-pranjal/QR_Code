# QR Code Generator - Deployment Guide

## Overview
This QR code generator has been containerized with Docker and is ready for deployment to Render.com with automatic keep-alive functionality.

## Features
✅ Minimalist UI design  
✅ 8 QR code templates (URL, Text, WiFi, vCard, Email, SMS, Phone, WhatsApp)  
✅ Logo embedding in QR codes  
✅ Color customization  
✅ QR code scanner (camera & image upload)  
✅ History tracking  
✅ Health check endpoint  
✅ Keep-alive service for Render.com free tier  

## Architecture
- **Backend**: Flask API (Python)
- **Frontend**: React + Vite (Static)
- **Keep-Alive**: Python cron service

## Local Development with Docker

### Prerequisites
- Docker and Docker Compose installed

### Quick Start
```bash
# Build and start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost
# Backend API: http://localhost:5000
# Health Check: http://localhost:5000/api/health
```

### Individual Service Commands
```bash
# Backend only
docker-compose up backend

# Frontend only
docker-compose up frontend

# Keep-alive only
docker-compose up keep-alive
```

## Deployment to Render.com

### Option 1: Using render.yaml (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Add Docker and deployment configs"
   git push origin main
   ```

2. **Deploy on Render.com**
   - Go to https://render.com
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`
   - Click "Apply" to create all services

3. **Configure Environment Variables** (if needed)
   - Backend service: No additional vars needed
   - Frontend service: Set `VITE_API_URL` to your backend URL

4. **Keep-Alive Service**
   - The cron job will automatically ping your backend every minute
   - Update the URL in render.yaml line 45 to match your backend URL

### Option 2: Manual Setup

#### Backend Service
1. Create new **Web Service**
2. Settings:
   - **Name**: qr-code-backend
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app --bind 0.0.0.0:$PORT`
   - **Health Check Path**: `/api/health`

#### Frontend Service
1. Create new **Static Site**
2. Settings:
   - **Name**: qr-code-frontend
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`

#### Keep-Alive Cron Job
1. Create new **Cron Job**
2. Settings:
   - **Name**: qr-code-keep-alive
   - **Schedule**: `* * * * *` (every minute)
   - **Command**: `python -c "import requests; requests.get('YOUR_BACKEND_URL/api/health')"`
   - Replace `YOUR_BACKEND_URL` with actual backend URL

## Environment Variables

### Backend (.env)
```bash
FLASK_ENV=production
PORT=5000
```

### Frontend (.env)
```bash
VITE_API_URL=https://your-backend-url.onrender.com
```

## Health Check
The backend includes a health endpoint at `/api/health` that returns:
```json
{
  "status": "healthy",
  "message": "QR Code API is running"
}
```

## Keep-Alive Mechanism
The keep-alive service prevents Render.com's free tier from spinning down due to inactivity by:
- Pinging the health endpoint every 60 seconds
- Logging each request with timestamp
- Automatically restarting if health checks fail

## API Endpoints

### Generate QR Code
```http
POST /api/generate
Content-Type: application/json

{
  "text": "https://example.com",
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

## Docker Images

### Build Images Individually
```bash
# Backend
cd backend
docker build -t qr-backend .

# Frontend
cd frontend
docker build -t qr-frontend .

# Keep-Alive
cd keep-alive
docker build -t qr-keep-alive .
```

### Push to Docker Hub (Optional)
```bash
docker tag qr-backend your-username/qr-backend:latest
docker push your-username/qr-backend:latest

docker tag qr-frontend your-username/qr-frontend:latest
docker push your-username/qr-frontend:latest
```

## Troubleshooting

### Backend Issues
- Check logs: `docker-compose logs backend`
- Verify health: `curl http://localhost:5000/api/health`
- Check Python version: Should be 3.12+

### Frontend Issues  
- Check build output: `docker-compose logs frontend`
- Verify nginx config: `docker-compose exec frontend cat /etc/nginx/conf.d/default.conf`
- Clear browser cache if changes don't appear

### Keep-Alive Issues
- Check logs: `docker-compose logs keep-alive`
- Verify backend URL is correct
- Ensure backend is reachable from keep-alive container

## Production Considerations

1. **CORS**: Configure allowed origins in backend for production
2. **HTTPS**: Render.com provides free SSL certificates
3. **Rate Limiting**: Consider adding rate limiting to API endpoints
4. **Monitoring**: Set up monitoring and alerts for health checks
5. **Backups**: No database, so no backup needed

## Support
For issues or questions, check the GitHub repository README.
