# nature

A landscape-led website concept about noticing and caring for the natural world. Serve the parent websites directory with a static server, then open `/test7/`.

The original anime meadow is AI-generated artwork. Editorial images are real photographs: forest from Unsplash (photo-1441974231531-c6227db76b6e), wildflowers by Helena Jankovičová Kováčová from Pexels (18364671), and stream by Juan Felipe Ramírez from Pexels (17370930). The meadow stays still; the sky, butterflies, and night fireflies add movement. Day/night, navigation, the breathing dialog, and conservation links work without a backend. External resources are credited by their linked organizations.

The fireflies are a Remotion Player composition in `motion/fireflies.jsx`. The prebuilt `assets/fireflies-player.js` runs on the static site; to rebuild it after editing, run `npm install --prefix motion` followed by `npm --prefix motion run build`. The player pauses outside the night hero and honors reduced motion.
