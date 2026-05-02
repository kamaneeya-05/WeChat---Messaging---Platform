# Contributing Guidelines

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Commit: `git commit -m "feat: add your feature"`
6. Push: `git push origin feature/your-feature`
7. Open a Pull Request

## Commit Message Format

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Build/setup changes

Example:
```
feat: add user profile update endpoint
fix: resolve message deletion bug
docs: update API documentation
```

## Code Style

### Backend (Node.js)
- Use ES6+ syntax
- Follow consistent indentation (2 spaces)
- Use meaningful variable names
- Add comments for complex logic

### Frontend (React)
- Functional components with hooks
- Use camelCase for variables/functions
- One component per file
- Keep components small and focused

## Testing

Run tests before submitting PR:
```bash
npm test
```

## Pull Request Process

1. Update documentation if needed
2. Add/update tests
3. Ensure all tests pass
4. Provide clear PR description
5. Wait for code review

## Reporting Issues

Use GitHub Issues with:
- Clear title
- Detailed description
- Steps to reproduce (for bugs)
- Screenshots if applicable
- Environment info
