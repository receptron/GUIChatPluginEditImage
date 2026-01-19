import type { ToolContext, ToolPluginCore } from "gui-chat-protocol";
import type { EditImageArgs, ImageToolData, EditImageResult } from "./types";
import { TOOL_NAME, TOOL_DEFINITION } from "./definition";

export const editImage = async (
  context: ToolContext,
  args: EditImageArgs,
): Promise<EditImageResult> => {
  const { prompt } = args;

  if (!context.app?.editImage) {
    return { message: "editImage function not available" };
  }

  return context.app.editImage(prompt);
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
