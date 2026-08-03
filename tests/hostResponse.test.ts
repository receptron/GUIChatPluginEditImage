/**
 * `context.app.editImage` returns `unknown` since gui-chat-protocol 2.0.0, and
 * the host builds the whole ToolResult, so the plugin narrows it here instead
 * of trusting the host's shape.
 *
 * Run with: yarn test
 */

import { test, describe } from "node:test";
import assert from "node:assert";
import { isEditImageResult } from "../src/core/hostResponse.js";

describe("isEditImageResult", () => {
  test("accepts a result carrying an edited image", () => {
    assert.equal(
      isEditImageResult({
        message: "Edited",
        title: "cat",
        data: { imageData: "base64", prompt: "a cat" },
      }),
      true,
    );
  });

  test("accepts a narrate-only result with no data", () => {
    assert.equal(isEditImageResult({ message: "Nothing to edit" }), true);
  });

  test("rejects a result without a message", () => {
    assert.equal(
      isEditImageResult({ data: { imageData: "base64", prompt: "a cat" } }),
      false,
    );
  });

  test("rejects image data missing the prompt the view renders", () => {
    assert.equal(
      isEditImageResult({ message: "Edited", data: { imageData: "base64" } }),
      false,
    );
  });

  test("rejects a result whose optional fields have the wrong type", () => {
    assert.equal(isEditImageResult({ message: "Edited", title: 42 }), false);
    assert.equal(isEditImageResult({ message: "Edited", updating: "yes" }), false);
  });

  test("rejects values that are not a result object", () => {
    [null, undefined, "ok", 7].forEach((value) => {
      assert.equal(
        isEditImageResult(value),
        false,
        `should reject ${JSON.stringify(value)}`,
      );
    });
  });
});
