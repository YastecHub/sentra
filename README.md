# Sentra Backend API

A Node.js backend service integrated with YarnGPT AI capabilities.

## Overview

This project provides a RESTful API backend built with Node.js that leverages YarnGPT's AI services for enhanced functionality.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- YarnGPT API key

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd sentra

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env
```

## Environment Configuration

Create a `.env` file with the following variables:

```env
PORT=3000
NODE_ENV=development
YARNGPT_API_KEY=your_yarngpt_api_key_here
YARNGPT_BASE_URL=https://yarngpt.ai/api
```

## YarnGPT Integration

This project integrates with YarnGPT API for AI-powered features. 

### API Documentation
- YarnGPT API Docs: https://yarngpt.ai/api-docs

### Key Features
- AI text generation
- Content analysis
- Smart data processing

## Quick Start

```bash
# Start development server
npm run dev

# Start production server
npm start
```

## API Endpoints

### Health Check
```
GET /health
```

### YarnGPT Integration Endpoints
```
POST /api/generate
POST /api/analyze
```

## Project Structure

```
sentra/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middleware/
│   └── utils/
├── tests/
├── docs/
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

MIT License