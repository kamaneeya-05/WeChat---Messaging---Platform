# Database Configuration & Migrations

This folder contains all MongoDB-related files including:

## Files

### Schemas
- Model definitions are in `backend/src/models/`

### Migrations
- Add migration scripts here for database schema updates
- Example: `001-add-user-roles.js`

### Seeds
- Add seed data scripts here
- Example: `seed-users.js` for initial data

### Backups
- Database backup files can be stored here

## Usage

```bash
# Run migrations
node database/migrations/001-migration.js

# Seed database
node database/seeds/seed-data.js
```

## MongoDB Connection
- Connection string configured in `backend/src/config/db.js`
- Uses environment variable `MONGODB_URI` from `.env`
