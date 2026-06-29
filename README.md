# Redux Media List Project

A Redux-based React application for managing movies and songs.

## Features

- Add movies and songs to lists
- Remove items from lists
- View all movies and songs
- Redux state management
- Comprehensive Jest unit tests

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Project Structure

```
src/
├── redux/
│   ├── store.js          # Redux store configuration
│   ├── actions.js        # Action creators
│   └── reducers.js       # Reducers for movies and songs
├── components/
│   ├── App.js            # Main app component
│   ├── MovieList.js      # Movies display component
│   └── SongList.js       # Songs display component
├── __tests__/
│   ├── reducers.test.js  # Tests for reducers
│   ├── actions.test.js   # Tests for actions
│   ├── App.test.js       # Tests for App component
│   └── setup.js          # Jest setup file
└── index.js              # Entry point
```

## Technologies Used

- React 18
- Redux
- Redux Thunk
- Jest
- React Testing Library

## Git Setup

Initialize repository:
```bash
git init
git add .
git commit -m "Initial commit: Redux media list project"
```

Add remote:
```bash
git remote add origin <your-repository-url>
git push -u origin main
```
