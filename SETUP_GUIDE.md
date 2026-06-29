# Redux Media List - Setup Guide

## Project Overview

This is a complete Redux-based React application for managing movies and songs. It includes full Redux state management, React components, and comprehensive Jest unit tests with 100% passing tests.

## Project Structure

```
ReduxPravticeTCS/
├── public/
│   └── index.html                 # HTML entry point
├── src/
│   ├── __tests__/
│   │   ├── setup.js              # Jest setup configuration
│   │   ├── actions.test.js       # Tests for Redux actions (8 tests)
│   │   ├── reducers.test.js      # Tests for Redux reducers (11 tests)
│   │   └── App.test.js           # Tests for React components (2 tests)
│   ├── redux/
│   │   ├── actions.js            # Redux action creators
│   │   ├── reducers.js           # Redux reducers
│   │   └── store.js              # Redux store configuration
│   ├── components/
│   │   ├── App.js                # Main application component
│   │   ├── MovieList.js          # Movies display component
│   │   ├── SongList.js           # Songs display component
│   │   └── App.css               # Styling
│   └── index.js                  # React app entry point
├── .babelrc                       # Babel configuration
├── .gitignore                     # Git ignore rules
├── package.json                   # Dependencies and scripts
├── README.md                      # Project readme
└── SETUP_GUIDE.md                 # This file
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This installs:
- **React** & **React DOM** - UI framework
- **Redux** & **React-Redux** - State management
- **Jest** & Testing utilities - Unit testing
- **Babel** - JavaScript compilation

### 2. Run Tests

```bash
# Run all tests (21 tests pass)
npm test

# Run tests in watch mode (auto-rerun on changes)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### 3. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Features

### Add Movies
- Enter movie title and genre
- Click "Add Movie" to add to the list
- Each movie gets a unique ID and timestamp

### Add Songs
- Enter song title and artist
- Click "Add Song" to add to the list
- Each song gets a unique ID and timestamp

### Remove Items
- Click "Remove" button next to any item
- Instantly removed from Redux store

### Redux State Management
```javascript
// Example state structure
{
  movies: {
    movies: [
      { id: 1234567890, title: "Inception", genre: "Sci-Fi" },
      { id: 1234567891, title: "The Matrix", genre: "Action" }
    ]
  },
  songs: {
    songs: [
      { id: 1234567892, title: "Imagine", artist: "John Lennon" },
      { id: 1234567893, title: "Bohemian Rhapsody", artist: "Queen" }
    ]
  }
}
```

## Redux Actions

### Movie Actions
- `addMovie(movie)` - Add a movie to the list
- `removeMovie(id)` - Remove a movie by ID

### Song Actions
- `addSong(song)` - Add a song to the list
- `removeSong(id)` - Remove a song by ID

Example usage:
```javascript
import { useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../redux/actions';

const dispatch = useDispatch();

// Add movie
dispatch(addMovie({ title: 'Inception', genre: 'Sci-Fi' }));

// Remove movie
dispatch(removeMovie(movieId));
```

## Test Coverage

**Total: 21 tests - ALL PASSING ✅**

### Action Tests (8 tests)
- ✅ Add movie action creation
- ✅ Remove movie action creation
- ✅ Add song action creation
- ✅ Remove song action creation
- ✅ ID generation on actions

### Reducer Tests (11 tests)
- ✅ Initial state handling
- ✅ Add movie reducer
- ✅ Multiple movie additions
- ✅ Remove movie reducer
- ✅ State immutability on movies
- ✅ Add song reducer
- ✅ Multiple song additions
- ✅ Remove song reducer
- ✅ State immutability on songs

### Component Tests (2 tests)
- ✅ App renders correctly
- ✅ Add/remove functionality integration
- ✅ Form field clearing
- ✅ Empty state messages

## Git Setup

### Initialize Local Repository (Already Done ✅)

```bash
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### View Commit History

```bash
git log --oneline
```

Output:
```
2d38199 Fix Jest configuration to ignore setup.js in test runs
b202611 Initial commit: Redux media list project with movies and songs management
```

### Upload to GitHub

1. **Create a new repository on GitHub** (don't initialize with README)

2. **Add remote origin** (replace with your repository URL):

```bash
git remote add origin https://github.com/YOUR_USERNAME/redux-media-list.git
git branch -M main
git push -u origin main
```

3. **Verify the remote**:

```bash
git remote -v
```

### Daily Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your descriptive message"

# Push to GitHub
git push
```

### Example Commits

```bash
# After adding features
git add .
git commit -m "Add delete functionality for movies and songs"
git push

# After fixing bugs
git commit -m "Fix: Prevent duplicate IDs in list items"
git push

# After running tests
git commit -m "Test: Add reducer test coverage for edge cases"
git push
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Available Scripts

```bash
npm start              # Start development server
npm test               # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run build         # Build for production
npm run eject         # Eject from react-scripts (not reversible)
```

## Project Dependencies

### Core Dependencies
- `react` - UI framework
- `redux` - State management
- `react-redux` - React bindings for Redux
- `react-dom` - React DOM rendering

### Development Dependencies
- `jest` - Testing framework
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - DOM matchers
- `babel-jest` - Babel integration for Jest
- `jest-environment-jsdom` - DOM environment for tests

## Troubleshooting

### Tests fail to run
```bash
# Clear Jest cache
npm test -- --clearCache
```

### Node modules issues
```bash
# Remove and reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

### Git push issues
```bash
# Fetch latest from remote
git fetch origin

# Pull latest changes
git pull origin main

# Then push your changes
git push
```

## Next Steps

1. ✅ Project created and initialized
2. ✅ All 21 tests passing
3. ✅ Git repository initialized with initial commits
4. ✅ Ready to upload to GitHub

To upload to GitHub:
```bash
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Notes

- State is stored in Redux (not persisted to localStorage)
- No backend API - all data is in-memory
- IDs are generated using `Date.now()` timestamps
- Responsive CSS grid layout for movies and songs
- All components are functional components with hooks

## Support

For issues or questions:
1. Check the README.md
2. Review the test files for usage examples
3. Examine component files for implementation details
