# LaraVue - Laravel Vue.js Starter Kit

## Overview

LaraVue is an advanced open-source starter kit designed for mid-level developers, designed with Laravel with Vue.js to provide a robust foundation for web application development.

## Technical Stack

- Backend: Laravel
- Frontend: Vue.js
- Authentication: Laravel Breeze via Sanctum
- Styling: Tailwind CSS

## Features

- Comprehensive authentication system
- Advanced layout with responsive sidebar
- Dark mode support
- Sample CRUD project structure
- Role-based access control
- API-first approach

## Prerequisites

- PHP 8.3+
- Composer
- Node.js 20+
- NPM
- MySQL 8.0+

## Quick Start

```bash
# Clone repository
git clone https://github.com/scriptmint-solution/laravue.git

# Navigate to project directory
cd laravue

# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install

# Configure environment
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate

# Start development servers
composer run dev
```

## Project Structure

```
laravue/
├── app/
├── config/
├── database/
├── resources/
│   └── js/
│       ├── components/
│       ├── layouts/
│       └── pages/
└── routes/
```

## Planned Roadmap

- [ ] Complete authentication flow
- [ ] Translation support
- [ ] Implement role management
- [ ] Add dashboard template
- [ ] Sample CRUD project module

## Development Guidelines

1. Follow Laravel and Vue.js best practices
2. Maintain clean, modular code
3. Write comprehensive tests
4. Document new features

## Contributing

Contributions are welcome! Please submit pull requests to the `dev` branch.

## License

MIT License. See `LICENSE.md` for more details.

## Contact

Maintainer: Vinay Kesharwani, ScriptMint
Website: https://scriptmint.com
Email: hello@scriptmint.com
