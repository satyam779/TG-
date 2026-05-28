import { lazy } from 'react';

/**
 * Enhanced lazy loader that handles ChunkLoadErrors by attempting a force refresh.
 * This is crucial for production apps to handle scenarios where a new deployment
 * has removed old JS chunks that a user's browser is still trying to load.
 */
export const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    const storageKey = 'techyguide-chunk-retry-count';
    const retryCount = parseInt(window.sessionStorage.getItem(storageKey) || '0', 10);

    try {
      const component = await componentImport();
      window.sessionStorage.setItem(storageKey, '0'); // Reset on success
      return component;
    } catch (error) {
      // Check if it's a ChunkLoadError or related loading failure
      const isChunkError = 
        error.name === 'ChunkLoadError' || 
        /Loading chunk .* failed./i.test(error.message) ||
        /Unexpected token '<'/i.test(error.message); // Often happens when index.html is returned for a missing chunk

      if (isChunkError && retryCount < 2) {
        window.sessionStorage.setItem(storageKey, (retryCount + 1).toString());
        console.warn('Chunk loading failed, retrying page refresh...', error);
        window.location.reload();
        // Return a promise that never resolves to prevent further execution before reload
        return new Promise(() => {});
      }
      
      // If we already retried and still failed, or it's not a chunk error, rethrow
      throw error;
    }
  });
