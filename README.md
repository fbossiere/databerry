
<h1 align="center" style="font-weight: bold">
  <br>
  <a href="https://databerry.ai"><img src="public/databerry-logo-icon.png" alt="WebTorrent" width="200"></a>
  <br>
  Databerry
  <br>
    <h3 align="center">The no-code platform for building custom LLM Agents</h3>
  <br>
  
</h1>

<!-- <h4 align="center">The no-code platform for semantic search and retrieval of personal or organizational documents.</h4> -->



<h2 align="center">
<img src="public/og-image.png" alt="Databerry" width="1000" style="max-width: 100%;">
</h2>

**[Databerry](https://databerry.ai)** provides a user-friendly solution to quickly setup a semantic search system over your personal data without any technical knowledge.

### [📄 Documentation](https://docs.databerry.ai/)

### Features
- Load data from anywhere
  - Raw text
  - Web page
  - Files
    - Word
    - Excel
    - Powerpoint
    - PDF
    - Markdown
    - Plain Text
  - Web Site (coming soon)
  - Notion (coming soon)
  - Airtable (coming soon)
- No-code: User-friendly interface to manage your datastores and chat with your data
- Securized API endpoint for querying your data
- Auto sync data sources (coming soon)
- **Auto generates a ChatGPT Plugin** for each datastore

### Semantic Search Specs
- Vector Datbase: Qdrant
- Embeddigs: Openai's text-embedding-ada-002
- Chunk size: 256 tokens

### Stack
- Next.js
- Joy UI
- LangchainJS
- PostgreSQL
- Prisma
- Qdrant

Inspired by the [ChatGPT Retrieval Plugin](https://github.com/openai/chatgpt-retrieval-plugin).

### Run the project locally
Minimum requirements to run the projects locally
- Node.js v18
- Postgres Database
- Redis
- Qdrant
- GitHub App (NextAuth)
- Email Provider (NextAuth)
- OpenAI API Key
- AWS S3 Credentials

```bash
# Create .env.local
cp .env.example .env.local

# Install dependencies
pnpm install

# Generate DB tables
pnpm prisma:migrate:dev

# Run server
pnpm dev

# Run worker process
pnpm worker:datasource-loader
```
