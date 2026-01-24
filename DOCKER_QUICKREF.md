# 🐳 Docker Quick Reference

## 🚀 Quick Start

### Option 1: Build Locally
```bash
docker-compose up --build
```
Access at: http://localhost

### Option 2: Use Published Images from Docker Hub
```bash
# Create .env file
echo "DOCKER_USERNAME=your-dockerhub-username" > .env

# Pull and run
docker-compose pull
docker-compose up -d
```

## 📋 Common Commands

### Build & Run
```bash
# Build and start all services
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild specific service
docker-compose up --build backend
```

### Image Management
```bash
# Pull latest images from Docker Hub
docker-compose pull

# Push images to Docker Hub (manual)
docker tag qr-backend:latest <username>/qr-code-backend:latest
docker tag qr-frontend:latest <username>/qr-code-frontend:latest
docker push <username>/qr-code-backend:latest
docker push <username>/qr-code-frontend:latest
```

### Debugging
```bash
# Enter backend container
docker exec -it qr-backend /bin/bash

# Enter frontend container
docker exec -it qr-frontend /bin/sh

# Check container health
docker ps
docker inspect qr-backend
docker inspect qr-frontend
```

## 🔑 GitHub Secrets Setup

**Required secrets for automated builds:**
- `DOCKER_USERNAME` - Your Docker Hub username
- `DOCKER_PASSWORD` - Your Docker Hub access token

**To add secrets:**
1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add both secrets

## 📦 Published Images

After GitHub Actions runs successfully:
```
<DOCKER_USERNAME>/qr-code-backend:latest
<DOCKER_USERNAME>/qr-code-frontend:latest
```

## 📚 Documentation

- **[DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md)** - Complete deployment guide
- **[DOCKER_TEST.md](./DOCKER_TEST.md)** - Testing guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - General deployment info
- **[.env.example](./.env.example)** - Environment variables template

## ⚡ Environment Variables

Create a `.env` file in the project root:

```env
DOCKER_USERNAME=your-dockerhub-username
BACKEND_PORT=5000
FRONTEND_PORT=80
BACKEND_URL=http://localhost:5000
```

## 🔄 Workflow Triggers

- **Push to main** → Builds & pushes images to Docker Hub
- **Pull request** → Builds only (no push)

## ✅ Health Checks

Both services include health checks:
- Backend: `http://localhost:5000/api/health`
- Frontend: `http://localhost/`

Check status:
```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
```
