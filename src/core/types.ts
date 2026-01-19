import type { ToolResult } from "gui-chat-protocol";

export interface ImageToolData {
  imageData: string;
  prompt: string;
}

export interface EditImageArgs {
  prompt: string;
}

export type EditImageResult = ToolResult<ImageToolData>;
