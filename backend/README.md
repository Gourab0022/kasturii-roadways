# Kasturii Roadways Strapi 5 backend

This backend is under development and is not production-ready.

Run with Node.js 20/22 and PostgreSQL. Copy .env.example to .env and fill in strong random secrets and database settings. Run npm install, then npm run develop. Configure and publish content from the Strapi admin.

For deployment, use a persistent Node host and managed PostgreSQL with backups. Keep secrets server-side, restrict public content permissions, and implement validated rate-limited contact submissions. The existing static /admin dashboard is a localStorage demo, not a secure production admin.
