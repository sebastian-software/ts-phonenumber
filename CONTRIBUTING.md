# Contributing to ts-phonenumber

Thank you for your interest in contributing to ts-phonenumber!

## Development Setup

1. **Prerequisites**
   - Node.js 20 or later
   - pnpm (via Corepack)

2. **Clone and install**

   ```bash
   git clone https://github.com/sebastian-software/ts-phonenumber.git
   cd ts-phonenumber
   corepack enable
   pnpm install
   ```

3. **Run tests**

   ```bash
   pnpm test
   ```

4. **Build**
   ```bash
   pnpm build
   ```

## Code Style

- We use **Prettier** for formatting
- We use **ESLint** with TypeScript strict rules
- Pre-commit hooks automatically format staged files
- Pre-push hooks run type checking and linting

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add support for French phone numbers
fix: correct mobile pattern for Germany
docs: update CLI usage examples
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Make your changes
4. Ensure tests pass (`pnpm test`)
5. Ensure type checking passes (`pnpm typecheck`)
6. Ensure linting passes (`pnpm lint`)
7. Commit your changes using conventional commits
8. Push to your fork
9. Open a Pull Request

## Adding New Country Metadata

1. Create a new file in `src/metadata/countries/XX.ts` (where XX is the ISO 3166-1 alpha-2 code)
2. Follow the structure of existing country files (e.g., `DE.ts`)
3. Add tests for the new country
4. Update any relevant group bundles

## Reporting Issues

- Use GitHub Issues for bug reports and feature requests
- Include reproduction steps for bugs
- Include your Node.js version and OS

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 license.
