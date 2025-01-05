```javascript
// ... your Tailwind CSS configuration ...
module.exports = {
  // ... other configurations ...
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Removed node_modules entry
  theme: {
    extend: {},
  },
  plugins: [],
};
```
This corrected configuration only processes files within the `src` directory, preventing the inclusion of irrelevant files from node_modules and resolving the unexpected behavior.