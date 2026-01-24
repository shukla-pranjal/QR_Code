# Docker Deployment Guide

This guide explains how to set up automated Docker image builds and deployments to Docker Hub using GitHub Actions.

## 🔐 Setting Up Docker Hub Secrets

To enable the automated Docker build and push workflow, you need to configure the following secrets in your GitHub repository:

### Step 1: Get Your Docker Hub Credentials

1. **Docker Username**: Your Docker Hub username (e.g., `johndoe`)
2. **Docker Password**: Create a Docker Hub access token (recommended) or use your password
   - Go to [Docker Hub Security Settings](https://hub.docker.com/settings/security)
   - Click "New Access Token"
   - Give it a description (e.g., "GitHub Actions QR Code")
   - Copy the generated token

### Step 2: Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   | Secret Name | Value | Description |
   |------------|-------|-------------|
   | `DOCKER_USERNAME` | Your Docker Hub username | Used for Docker Hub login |
   | `DOCKER_PASSWORD` | Your Docker Hub access token or password | Used for Docker Hub authentication |

> [!IMPORTANT]
> Use an **access token** instead of your password for better security. Access tokens can be revoked without changing your password.

## 🚀 How the Workflow Works

The GitHub Actions workflow (`.github/workflows/docker-image.yml`) automatically:

1. **Builds** Docker images for both `backend` and `frontend` services
2. **Pushes** images to Docker Hub at:
   - `<your-username>/qr-code-backend`
   - `<your-username>/qr-code-frontend`
3. **Tags** images with multiple tags:
   - `latest` - Latest build from main branch
   - `main-<git-sha>` - Specific commit SHA
   - Branch name for other branches

### Workflow Features

- ✅ **Multi-platform builds**: Builds for both `linux/amd64` and `linux/arm64`
- ✅ **Layer caching**: Uses Docker registry for faster builds
- ✅ **Pull request testing**: Builds (but doesn't push) on PRs
- ✅ **Matrix strategy**: Builds backend and frontend in parallel

## 📦 Image Naming Convention

Your Docker images will be available at:

```
<DOCKER_USERNAME>/qr-code-backend:latest
<DOCKER_USERNAME>/qr-code-backend:main-<sha>

<DOCKER_USERNAME>/qr-code-frontend:latest
<DOCKER_USERNAME>/qr-code-frontend:main-<sha>
```

## 🔄 Triggering Builds

The workflow automatically triggers on:

- **Push to main branch**: Builds and pushes images with `latest` tag
- **Pull requests**: Builds images (test only, no push)

## 🐳 Using the Published Images

After the workflow runs successfully, you can pull and use the images:

### Pull Images

```bash
docker pull <DOCKER_USERNAME>/qr-code-backend:latest
docker pull <DOCKER_USERNAME>/qr-code-frontend:latest
```

### Run with Docker Compose (using remote images)

Create a `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  backend:
    image: <DOCKER_USERNAME>/qr-code-backend:latest
    container_name: qr-backend
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
      - PORT=5000
    restart: unless-stopped

  frontend:
    image: <DOCKER_USERNAME>/qr-code-frontend:latest
    container_name: qr-frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
    environment:
      - VITE_API_URL=http://localhost:5000
```

Run with:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 🧪 Testing Locally

To test the Docker build locally before pushing:

### Build Backend

```bash
cd backend
docker build -t qr-code-backend:test .
```

### Build Frontend

```bash
cd frontend
docker build -t qr-code-frontend:test .
```

### Test with Local Docker Compose

```bash
docker-compose up --build
```

## 🔍 Monitoring Builds

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. Select the **Build and Push Docker Images** workflow
4. View the build logs and status

## ❌ Troubleshooting

### Build Fails with "unauthorized: authentication required"

- Verify that `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are set correctly
- Ensure the Docker Hub access token has write permissions
- Check if the token is still valid

### Build Fails with "denied: requested access to the resource is denied"

- Verify your Docker Hub username is correct
- Ensure you have permissions to push to the repositories
- Repository names should be: `qr-code-backend` and `qr-code-frontend`

### Images Not Appearing on Docker Hub

- Check the workflow run logs in GitHub Actions
- Ensure the workflow completed the "Build and push" step successfully
- Verify you're on the main branch (only main branch pushes to Docker Hub)

## 🔒 Security Best Practices

1. **Use Access Tokens**: Never use your Docker Hub password directly
2. **Rotate Tokens**: Regularly rotate your access tokens
3. **Limit Scope**: Create separate tokens for different projects
4. **Monitor Usage**: Check Docker Hub for unauthorized access

## 📚 Additional Resources

- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
- [GitHub Actions Docker Documentation](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)
- [Docker Build Push Action](https://github.com/marketplace/actions/build-and-push-docker-images)
