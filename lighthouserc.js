module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
      url: ['./bodas-com-mx.html'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:accessibility': ['warn', {minScore: 0.5}],
        'categories:performance': ['warn', {minScore: 0.6}],
        'categories:best-practices': ['warn', {minScore: 0.7}],
        'categories:seo': ['warn', {minScore: 0.8}],
      }
    },
    upload: {
      target: 'temporary-public-storage',
    }
  }
};
