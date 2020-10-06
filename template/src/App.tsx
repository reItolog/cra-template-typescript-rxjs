import React, { memo } from 'react';

import AppRouter from './router/AppRouter';
import ErrorBoundary from './shared/components/ErrorBoundary/ErrorBoundary';

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
});

export default App;
