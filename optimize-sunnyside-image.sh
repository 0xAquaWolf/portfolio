#!/bin/bash

# Script to optimize SunnySide HVAC screenshot
# Run this after placing the screenshot as sunnyside-hvac-original.png

cd /Users/0xaquawolf/Projects/portfolio/public/projects/

# Check if original file exists
if [ ! -f "sunnyside-hvac-original.png" ]; then
    echo "❌ Error: Please save the screenshot as 'sunnyside-hvac-original.png' first"
    exit 1
fi

echo "🖼️  Optimizing SunnySide HVAC screenshot..."

# Convert to optimized JPG
convert sunnyside-hvac-original.png \
    -quality 85 \
    -strip \
    -resize '1600x900>' \
    -interlace Plane \
    sunnyside-hvac.jpg

# Check file size
echo "📊 Optimized file size:"
ls -lh sunnyside-hvac.jpg

# Clean up original
rm sunnyside-hvac-original.png

echo "✅ Optimization complete! Image saved as sunnyside-hvac.jpg"