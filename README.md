# Unofficial Notion App for Linux

An unofficial desktop application for Notion built with Electron for Linux systems.

> ⚠️ **Disclaimer**: This is an unofficial, community-made application. Use at your own risk. Not affiliated with or endorsed by Notion Labs, Inc.

## Installation

1. Download the latest `.deb` file from [GitHub Releases](https://github.com/Rycarddo/unofficial-notion-app-linux/releases)
2. Install it:

```bash
   sudo dpkg -i unofficial-notion-app_1.0.0_amd64.deb
```

3. Launch from your applications menu or run:

```bash
   unofficial-notion-app
```

## Building from Source

```bash
# Clone the repository
git clone https://github.com/Rycarddo/unofficial-notion-app-linux.git
cd unofficial-notion-app-linux

# Install dependencies
npm install

# Run in development mode
npm start

# Build .deb package
npm run build
```

## Requirements

- Ubuntu/Debian-based Linux distribution
- Node.js 14+ (for building from source)

## License

ISC License - See LICENSE file for details

## Credits

Built with [Electron](https://www.electronjs.org/)
