export const TOOL_NAME = "editImage";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description: "Edit the previously generated image based on a text prompt.",
  parameters: {
    type: "object" as const,
    properties: {
      prompt: {
        type: "string",
        description:
          "Description of the edits to be made to the image in English",
      },
    },
    required: ["prompt"],
  },
};
