// web/convex/files.ts
import { convexToJson, v } from "convex/values";
import { mutation } from "./_generated/server";

// Generate an upload url
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Grab the public url
export const getFileUrl = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
