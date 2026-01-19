# @gui-chat-plugin/edit-image

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fedit-image.svg)](https://www.npmjs.com/package/@gui-chat-plugin/edit-image)

Image editing plugin for GUI Chat applications. Edit previously generated images based on text prompts.

## Features

- Edit existing images with natural language prompts
- Support for various editing operations (add objects, change style, modify background)
- Display edited images with original prompt

## Installation

```bash
yarn add @gui-chat-plugin/edit-image
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import EditImagePlugin from "@gui-chat-plugin/edit-image/vue";

const pluginList = [
  // ... other plugins
  EditImagePlugin,
];

// In src/main.ts
import "@gui-chat-plugin/edit-image/style.css";
```

### Core-only Usage

```typescript
import { executeEditImage, TOOL_DEFINITION } from "@gui-chat-plugin/edit-image";

// Edit an image
const result = await executeEditImage(context, {
  prompt: "Add sunglasses to the person",
});
```

## API

### EditImageArgs

```typescript
interface EditImageArgs {
  prompt: string; // Description of edits to make
}
```

### ImageToolData

```typescript
interface ImageToolData {
  imageData: string; // Base64 encoded image data
  prompt: string;    // The edit prompt used
}
```

## Requirements

This plugin requires the host application to provide an `editImage` function via the context:

```typescript
context.app.editImage(prompt: string): Promise<EditImageResult>
```

## Development

```bash
# Install dependencies
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## Test Prompts

Try these prompts to test the plugin (after generating an image first):

1. "Add a rainbow in the sky of this image"
2. "Change the background to a beach scene"
3. "Make the colors more vibrant and add some butterflies"

## License

MIT
