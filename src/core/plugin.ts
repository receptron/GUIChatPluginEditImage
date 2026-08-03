import type { ToolContext, ToolPluginCore } from "gui-chat-protocol";
import type { EditImageArgs, ImageToolData, EditImageResult } from "./types";
import { isEditImageResult } from "./hostResponse";
import { TOOL_NAME, TOOL_DEFINITION } from "./definition";

// context is nullable on purpose: hosts that run the plugin without client-side
// state (MulmoClaude's server bridge) pass an empty or missing context, and
// reading through it unguarded threw a TypeError instead of returning a result.
export const editImage = async (
  context: ToolContext | null | undefined,
  args: EditImageArgs,
): Promise<EditImageResult> => {
  const { prompt } = args;

  if (!context?.app?.editImage) {
    return { message: "editImage function not available" };
  }

  const result = await context.app.editImage(prompt);
  if (!isEditImageResult(result)) {
    return { message: "editImage returned an unrecognized response" };
  }

  return result;
};

export const pluginCore: ToolPluginCore<ImageToolData, unknown, EditImageArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: editImage,
  generatingMessage: "Editing image...",
  isEnabled: () => true,
  backends: ["imageGen"],
};

export { TOOL_NAME, TOOL_DEFINITION };
export const executeEditImage = editImage;
