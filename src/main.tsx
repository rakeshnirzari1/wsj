import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Aggressively remove loading fallback
const removeLoadingFallback = () => {
  const fallback = document.getElementById('loading-fallback');
  if (fallback) {
    fallback.remove();
    console.log('Loading fallback removed by React');
  }
};

// Remove fallback immediately when this script runs
removeLoadingFallback();

// Add error handling for the entire app
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    
    // Remove loading fallback again before rendering
    removeLoadingFallback();
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    
    // Final fallback removal after React has fully rendered
    setTimeout(() => {
      const fallback = document.getElementById('loading-fallback');
      if (fallback) {
        fallback.remove();
      }
    }, 500);
  } catch (error) {
    console.error('Failed to render app:', error);
    // Fallback rendering
    removeLoadingFallback();
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <h1>Loading Error</h1>
        <p>There was an error loading the application. Please refresh the page.</p>
        <p style="color: red; font-size: 12px;">Error: ${error.message}</p>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
  removeLoadingFallback();
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Loading Error</h1>
      <p>Root element not found. Please contact support.</p>
    </div>
  `;
}