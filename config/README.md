# Configuration Files

This folder contains shared configuration files used by both backend and frontend.

## Files to Add

### Environment Configuration
- `.env.local` - Local development environment (not tracked by git)
- `.env.production` - Production environment settings

### Database Configuration
- Connection strings
- Database names
- Pool settings

### API Configuration
- Base URLs
- API endpoints
- Timeout settings

## Note

Keep sensitive data in `.env` files (never commit these):
- API keys
- Database passwords
- JWT secrets
- Third-party service credentials

Use `.env.example` as a template for new developers.
