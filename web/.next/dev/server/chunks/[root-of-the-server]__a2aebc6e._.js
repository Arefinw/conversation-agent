module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/auth-schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "account",
    ()=>account,
    "accountRelations",
    ()=>accountRelations,
    "session",
    ()=>session,
    "sessionRelations",
    ()=>sessionRelations,
    "user",
    ()=>user,
    "userRelations",
    ()=>userRelations,
    "verification",
    ()=>verification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/relations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/pg-core/indexes.js [app-route] (ecmascript)");
;
;
const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("user", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").notNull().unique(),
    emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("email_verified").default(false).notNull(),
    image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
});
const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("session", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull(),
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull().unique(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull(),
    ipAddress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("ip_address"),
    userAgent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_agent"),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    })
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("session_userId_idx").on(table.userId)
    ]);
const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("account", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    accountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("account_id").notNull(),
    providerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("provider_id").notNull(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("user_id").notNull().references(()=>user.id, {
        onDelete: "cascade"
    }),
    accessToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("access_token"),
    refreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("refresh_token"),
    idToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_token"),
    accessTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("access_token_expires_at"),
    refreshTokenExpiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("refresh_token_expires_at"),
    scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("scope"),
    password: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password"),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("account_userId_idx").on(table.userId)
    ]);
const verification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verification", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey(),
    identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("value").notNull(),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires_at").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("created_at").defaultNow().notNull(),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("updated_at").defaultNow().$onUpdate(()=>/* @__PURE__ */ new Date()).notNull()
}, (table)=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["index"])("verification_identifier_idx").on(table.identifier)
    ]);
const userRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(user, ({ many })=>({
        sessions: many(session),
        accounts: many(account)
    }));
const sessionRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(session, ({ one })=>({
        user: one(user, {
            fields: [
                session.userId
            ],
            references: [
                user.id
            ]
        })
    }));
const accountRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relations"])(account, ({ one })=>({
        user: one(user, {
            fields: [
                account.userId
            ],
            references: [
                user.id
            ]
        })
    }));
}),
"[project]/lib/database.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types+pg@8.16.0_kysely@0.28.10_pg@8.17.2/node_modules/drizzle-orm/node-postgres/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$17$2e$2$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/.pnpm/pg@8.17.2/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dotenv$40$17$2e$2$2e$3$2f$node_modules$2f$dotenv$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dotenv@17.2.3/node_modules/dotenv/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth-schema.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$17$2e$2$2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$17$2e$2$2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$17$2e$2$2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString: process.env.POSTGRES_URL
});
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$pg$40$8$2e$16$2e$0_kysely$40$0$2e$28$2e$10_pg$40$8$2e$17$2e$2$2f$node_modules$2f$drizzle$2d$orm$2f$node$2d$postgres$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(pool, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$auth$2d$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.17_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@type_24df911cd5a483b9c41eed7ad9b93374/node_modules/better-auth/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.17_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@type_24df911cd5a483b9c41eed7ad9b93374/node_modules/better-auth/dist/auth/full.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.17_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@type_24df911cd5a483b9c41eed7ad9b93374/node_modules/better-auth/dist/adapters/drizzle-adapter/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.17_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@type_24df911cd5a483b9c41eed7ad9b93374/node_modules/better-auth/dist/adapters/drizzle-adapter/drizzle-adapter.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/database.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2f$full$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["betterAuth"])({
    database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$drizzle$2d$adapter$2f$drizzle$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzleAdapter"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$database$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"], {
        provider: "pg"
    }),
    emailAndPassword: {
        enabled: true
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/auth/[...all]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.17_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@type_24df911cd5a483b9c41eed7ad9b93374/node_modules/better-auth/dist/integrations/next-js.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const { POST, GET } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$17_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$type_24df911cd5a483b9c41eed7ad9b93374$2f$node_modules$2f$better$2d$auth$2f$dist$2f$integrations$2f$next$2d$js$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toNextJsHandler"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a2aebc6e._.js.map