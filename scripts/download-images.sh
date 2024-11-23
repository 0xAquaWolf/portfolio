#!/bin/bash

# Create projects directory if it doesn't exist
mkdir -p public/projects

# Download images
curl "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/trading-bot.jpg"
curl "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/defi-yield.jpg"
curl "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/nft-marketplace.jpg"
curl "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/bridge.jpg"
curl "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/dao.jpg"
curl "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=100&w=2000&h=1200" -o "public/projects/portfolio-tracker.jpg"

echo "Images downloaded successfully!"
