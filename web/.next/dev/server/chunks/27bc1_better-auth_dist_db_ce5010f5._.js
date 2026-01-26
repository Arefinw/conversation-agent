module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/schema.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeSchema",
    ()=>mergeSchema,
    "parseAccountInput",
    ()=>parseAccountInput,
    "parseAccountOutput",
    ()=>parseAccountOutput,
    "parseAdditionalUserInput",
    ()=>parseAdditionalUserInput,
    "parseInputData",
    ()=>parseInputData,
    "parseSessionInput",
    ()=>parseSessionInput,
    "parseSessionOutput",
    ()=>parseSessionOutput,
    "parseUserInput",
    ()=>parseUserInput,
    "parseUserOutput",
    ()=>parseUserOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
;
//#region src/db/schema.ts
const cache = /* @__PURE__ */ new WeakMap();
function parseOutputData(data, schema) {
    const fields = schema.fields;
    const parsedData = {};
    for(const key in data){
        const field = fields[key];
        if (!field) {
            parsedData[key] = data[key];
            continue;
        }
        if (field.returned === false) continue;
        parsedData[key] = data[key];
    }
    return parsedData;
}
function getAllFields(options, table) {
    if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
    const tableCache = cache.get(options);
    if (tableCache.has(table)) return tableCache.get(table);
    let schema = {
        ...table === "user" ? options.user?.additionalFields : {},
        ...table === "session" ? options.session?.additionalFields : {}
    };
    for (const plugin of options.plugins || [])if (plugin.schema && plugin.schema[table]) schema = {
        ...schema,
        ...plugin.schema[table].fields
    };
    cache.get(options).set(table, schema);
    return schema;
}
function parseUserOutput(options, user) {
    return {
        ...parseOutputData(user, {
            fields: getAllFields(options, "user")
        }),
        id: user.id
    };
}
function parseAccountOutput(options, account) {
    return parseOutputData(account, {
        fields: getAllFields(options, "account")
    });
}
function parseSessionOutput(options, session) {
    return parseOutputData(session, {
        fields: getAllFields(options, "session")
    });
}
function parseInputData(data, schema) {
    const action = schema.action || "create";
    const fields = schema.fields;
    const parsedData = Object.assign(Object.create(null), null);
    for(const key in fields){
        if (key in data) {
            if (fields[key].input === false) {
                if (fields[key].defaultValue !== void 0) {
                    if (action !== "update") {
                        parsedData[key] = fields[key].defaultValue;
                        continue;
                    }
                }
                if (data[key]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: `${key} is not allowed to be set`
                });
                continue;
            }
            if (fields[key].validator?.input && data[key] !== void 0) {
                const result = fields[key].validator.input["~standard"].validate(data[key]);
                if (result instanceof Promise) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: "Async validation is not supported for additional fields"
                });
                if ("issues" in result && result.issues) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: result.issues[0]?.message || "Validation Error"
                });
                parsedData[key] = result.value;
                continue;
            }
            if (fields[key].transform?.input && data[key] !== void 0) {
                parsedData[key] = fields[key].transform?.input(data[key]);
                continue;
            }
            parsedData[key] = data[key];
            continue;
        }
        if (fields[key].defaultValue !== void 0 && action === "create") {
            if (typeof fields[key].defaultValue === "function") {
                parsedData[key] = fields[key].defaultValue();
                continue;
            }
            parsedData[key] = fields[key].defaultValue;
            continue;
        }
        if (fields[key].required && action === "create") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: `${key} is required`
        });
    }
    return parsedData;
}
function parseUserInput(options, user = {}, action) {
    return parseInputData(user, {
        fields: getAllFields(options, "user"),
        action
    });
}
function parseAdditionalUserInput(options, user) {
    const schema = getAllFields(options, "user");
    return parseInputData(user || {}, {
        fields: schema
    });
}
function parseAccountInput(options, account) {
    return parseInputData(account, {
        fields: getAllFields(options, "account")
    });
}
function parseSessionInput(options, session) {
    return parseInputData(session, {
        fields: getAllFields(options, "session")
    });
}
function mergeSchema(schema, newSchema) {
    if (!newSchema) return schema;
    for(const table in newSchema){
        const newModelName = newSchema[table]?.modelName;
        if (newModelName) schema[table].modelName = newModelName;
        for(const field in schema[table].fields){
            const newField = newSchema[table]?.fields?.[field];
            if (!newField) continue;
            schema[table].fields[field].fieldName = newField;
        }
    }
    return schema;
}
;
 //# sourceMappingURL=schema.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/adapter-base.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseAdapter",
    ()=>getBaseAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$get$2d$tables$2d$CMc_Emww$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getAuthTables$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/get-tables-CMc_Emww.mjs [app-route] (ecmascript) <export t as getAuthTables>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export i as logger>");
;
;
//#region src/db/adapter-base.ts
async function getBaseAdapter(options, handleDirectDatabase) {
    let adapter;
    if (!options.database) {
        const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$get$2d$tables$2d$CMc_Emww$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getAuthTables$3e$__["getAuthTables"])(options);
        const memoryDB = Object.keys(tables).reduce((acc, key)=>{
            acc[key] = [];
            return acc;
        }, {});
        const { memoryAdapter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/memory-adapter/index.mjs [app-route] (ecmascript, async loader)");
        adapter = memoryAdapter(memoryDB)(options);
    } else if (typeof options.database === "function") adapter = options.database(options);
    else adapter = await handleDirectDatabase(options);
    if (!adapter.transaction) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
        adapter.transaction = async (cb)=>{
            return cb(adapter);
        };
    }
    return adapter;
}
;
 //# sourceMappingURL=adapter-base.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/adapter-kysely.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAdapter",
    ()=>getAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$base$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/adapter-base.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export t as BetterAuthError>");
;
;
//#region src/db/adapter-kysely.ts
async function getAdapter(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$base$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseAdapter"])(options, async (opts)=>{
        const { createKyselyAdapter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-route] (ecmascript, async loader)");
        const { kysely, databaseType, transaction } = await createKyselyAdapter(opts);
        if (!kysely) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Failed to initialize database adapter");
        const { kyselyAdapter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-route] (ecmascript, async loader)");
        return kyselyAdapter(kysely, {
            type: databaseType || "sqlite",
            debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
            transaction
        })(opts);
    });
}
;
 //# sourceMappingURL=adapter-kysely.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/field.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFieldAttribute",
    ()=>createFieldAttribute
]);
//#region src/db/field.ts
const createFieldAttribute = (type, config)=>{
    return {
        type,
        ...config
    };
};
;
 //# sourceMappingURL=field.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/field-converter.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertFromDB",
    ()=>convertFromDB,
    "convertToDB",
    ()=>convertToDB
]);
//#region src/db/field-converter.ts
function convertToDB(fields, values) {
    let result = values.id ? {
        id: values.id
    } : {};
    for(const key in fields){
        const field = fields[key];
        const value = values[key];
        if (value === void 0) continue;
        result[field.fieldName || key] = value;
    }
    return result;
}
function convertFromDB(fields, values) {
    if (!values) return null;
    let result = {
        id: values.id
    };
    for (const [key, value] of Object.entries(fields))result[key] = values[value.fieldName || key];
    return result;
}
;
 //# sourceMappingURL=field-converter.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/with-hooks.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWithHooks",
    ()=>getWithHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context-DblZrIwO.mjs [app-route] (ecmascript) <export t as getCurrentAdapter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context-DblZrIwO.mjs [app-route] (ecmascript) <export u as getCurrentAuthContext>");
;
//#region src/db/with-hooks.ts
function getWithHooks(adapter, ctx) {
    const hooks = ctx.hooks;
    async function createWithHooks(data, model, customCreateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.before;
            if (toRun) {
                const result = await toRun(actualData, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customCreated = customCreateFn ? await customCreateFn.fn(actualData) : null;
        const created = !customCreateFn || customCreateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).create({
            model,
            data: actualData,
            forceAllowId: true
        }) : customCreated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.after;
            if (toRun) await toRun(created, context);
        }
        return created;
    }
    async function updateWithHooks(data, where, model, customUpdateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).update({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) await toRun(updated, context);
        }
        return updated;
    }
    async function updateManyWithHooks(data, where, model, customUpdateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).updateMany({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) await toRun(updated, context);
        }
        return updated;
    }
    async function deleteWithHooks(where, model, customDeleteFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
        let entityToDelete = null;
        try {
            entityToDelete = (await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model,
                where,
                limit: 1
            }))[0] || null;
        } catch  {}
        if (entityToDelete) for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.before;
            if (toRun) {
                if (await toRun(entityToDelete, context) === false) return null;
            }
        }
        const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
        const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).delete({
            model,
            where
        }) : customDeleted;
        if (entityToDelete) for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.after;
            if (toRun) await toRun(entityToDelete, context);
        }
        return deleted;
    }
    async function deleteManyWithHooks(where, model, customDeleteFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
        let entitiesToDelete = [];
        try {
            entitiesToDelete = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model,
                where
            });
        } catch  {}
        for (const entity of entitiesToDelete)for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.before;
            if (toRun) {
                if (await toRun(entity, context) === false) return null;
            }
        }
        const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
        const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).deleteMany({
            model,
            where
        }) : customDeleted;
        for (const entity of entitiesToDelete)for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.after;
            if (toRun) await toRun(entity, context);
        }
        return deleted;
    }
    return {
        createWithHooks,
        updateWithHooks,
        updateManyWithHooks,
        deleteWithHooks,
        deleteManyWithHooks
    };
}
;
 //# sourceMappingURL=with-hooks.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/internal-adapter.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInternalAdapter",
    ()=>createInternalAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/date.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$get$2d$request$2d$ip$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/get-request-ip.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$with$2d$hooks$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/with-hooks.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context-DblZrIwO.mjs [app-route] (ecmascript) <export t as getCurrentAdapter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context-DblZrIwO.mjs [app-route] (ecmascript) <export u as getCurrentAuthContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/context-DblZrIwO.mjs [app-route] (ecmascript) <export i as runWithTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__generateId$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export r as generateId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export n as safeJSONParse>");
;
;
;
;
;
;
//#region src/db/internal-adapter.ts
const createInternalAdapter = (adapter, ctx)=>{
    const logger = ctx.logger;
    const options = ctx.options;
    const secondaryStorage = options.secondaryStorage;
    const sessionExpiration = options.session?.expiresIn || 3600 * 24 * 7;
    const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$with$2d$hooks$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWithHooks"])(adapter, ctx);
    async function refreshUserSessions(user) {
        if (!secondaryStorage) return;
        const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
        if (!listRaw) return;
        const now = Date.now();
        const validSessions = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(listRaw) || []).filter((s)=>s.expiresAt > now);
        await Promise.all(validSessions.map(async ({ token })=>{
            const cached = await secondaryStorage.get(token);
            if (!cached) return;
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(cached);
            if (!parsed) return;
            const sessionTTL = Math.max(Math.floor(new Date(parsed.session.expiresAt).getTime() - now) / 1e3, 0);
            await secondaryStorage.set(token, JSON.stringify({
                session: parsed.session,
                user
            }), Math.floor(sessionTTL));
        }));
    }
    return {
        createOAuthUser: async (user, account)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__["runWithTransaction"])(adapter, async ()=>{
                const createdUser = await createWithHooks({
                    createdAt: /* @__PURE__ */ new Date(),
                    updatedAt: /* @__PURE__ */ new Date(),
                    ...user
                }, "user", void 0);
                return {
                    user: createdUser,
                    account: await createWithHooks({
                        ...account,
                        userId: createdUser.id,
                        createdAt: /* @__PURE__ */ new Date(),
                        updatedAt: /* @__PURE__ */ new Date()
                    }, "account", void 0)
                };
            });
        },
        createUser: async (user)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...user,
                email: user.email?.toLowerCase()
            }, "user", void 0);
        },
        createAccount: async (account)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...account
            }, "account", void 0);
        },
        listSessions: async (userId)=>{
            if (secondaryStorage) {
                const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                if (!currentList) return [];
                const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(currentList) || [];
                const now = Date.now();
                const validSessions = list.filter((s)=>s.expiresAt > now);
                const sessions = [];
                for (const session of validSessions){
                    const sessionStringified = await secondaryStorage.get(session.token);
                    if (sessionStringified) {
                        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(sessionStringified);
                        if (!s) return [];
                        const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, {
                            ...s.session,
                            expiresAt: new Date(s.session.expiresAt)
                        });
                        sessions.push(parsedSession);
                    }
                }
                return sessions;
            }
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "session",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        listUsers: async (limit, offset, sortBy, where)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "user",
                limit,
                offset,
                sortBy,
                where
            });
        },
        countTotalUsers: async (where)=>{
            const total = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).count({
                model: "user",
                where
            });
            if (typeof total === "string") return parseInt(total);
            return total;
        },
        deleteUser: async (userId)=>{
            if (!secondaryStorage || options.session?.storeSessionInDatabase) await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "session", void 0);
            await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "account", void 0);
            await deleteWithHooks([
                {
                    field: "id",
                    value: userId
                }
            ], "user", void 0);
        },
        createSession: async (userId, dontRememberMe, override, overrideAll)=>{
            const ctx$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])().catch(()=>null);
            const headers = ctx$1?.headers || ctx$1?.request?.headers;
            const { id: _, ...rest } = override || {};
            const defaultAdditionalFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionInput"])(ctx$1?.context.options ?? options, {});
            const data = {
                ipAddress: ctx$1?.request || ctx$1?.headers ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$get$2d$request$2d$ip$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getIp"])(ctx$1?.request || ctx$1?.headers, ctx$1?.context.options) || "" : "",
                userAgent: headers?.get("user-agent") || "",
                ...rest,
                expiresAt: dontRememberMe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(3600 * 24, "sec") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(sessionExpiration, "sec"),
                userId,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__generateId$3e$__["generateId"])(32),
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...defaultAdditionalFields,
                ...overrideAll ? rest : {}
            };
            return await createWithHooks(data, "session", secondaryStorage ? {
                fn: async (sessionData)=>{
                    /**
					* store the session token for the user
					* so we can retrieve it later for listing sessions
					*/ const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                    let list = [];
                    const now = Date.now();
                    if (currentList) {
                        list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(currentList) || [];
                        list = list.filter((session)=>session.expiresAt > now);
                    }
                    const sorted = list.sort((a, b)=>a.expiresAt - b.expiresAt);
                    let furthestSessionExp = sorted.at(-1)?.expiresAt;
                    sorted.push({
                        token: data.token,
                        expiresAt: data.expiresAt.getTime()
                    });
                    if (!furthestSessionExp || furthestSessionExp < data.expiresAt.getTime()) furthestSessionExp = data.expiresAt.getTime();
                    const furthestSessionTTL = Math.max(Math.floor((furthestSessionExp - now) / 1e3), 0);
                    if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
                    const user = await adapter.findOne({
                        model: "user",
                        where: [
                            {
                                field: "id",
                                value: userId
                            }
                        ]
                    });
                    const sessionTTL = Math.max(Math.floor((data.expiresAt.getTime() - now) / 1e3), 0);
                    if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
                        session: sessionData,
                        user
                    }), sessionTTL);
                    return sessionData;
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
        },
        findSession: async (token)=>{
            if (secondaryStorage) {
                const sessionStringified = await secondaryStorage.get(token);
                if (!sessionStringified && !options.session?.storeSessionInDatabase) return null;
                if (sessionStringified) {
                    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(sessionStringified);
                    if (!s) return null;
                    return {
                        session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, {
                            ...s.session,
                            expiresAt: new Date(s.session.expiresAt),
                            createdAt: new Date(s.session.createdAt),
                            updatedAt: new Date(s.session.updatedAt)
                        }),
                        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.options, {
                            ...s.user,
                            createdAt: new Date(s.user.createdAt),
                            updatedAt: new Date(s.user.updatedAt)
                        })
                    };
                }
            }
            const result = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "session",
                where: [
                    {
                        value: token,
                        field: "token"
                    }
                ],
                join: {
                    user: true
                }
            });
            if (!result) return null;
            const { user, ...session } = result;
            if (!user) return null;
            return {
                session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"])(ctx.options, session),
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.options, user)
            };
        },
        findSessions: async (sessionTokens)=>{
            if (secondaryStorage) {
                const sessions$1 = [];
                for (const sessionToken of sessionTokens){
                    const sessionStringified = await secondaryStorage.get(sessionToken);
                    if (sessionStringified) {
                        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(sessionStringified);
                        if (!s) return [];
                        const session = {
                            session: {
                                ...s.session,
                                expiresAt: new Date(s.session.expiresAt)
                            },
                            user: {
                                ...s.user,
                                createdAt: new Date(s.user.createdAt),
                                updatedAt: new Date(s.user.updatedAt)
                            }
                        };
                        sessions$1.push(session);
                    }
                }
                return sessions$1;
            }
            const sessions = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "session",
                where: [
                    {
                        field: "token",
                        value: sessionTokens,
                        operator: "in"
                    }
                ],
                join: {
                    user: true
                }
            });
            if (!sessions.length) return [];
            if (sessions.some((session)=>!session.user)) return [];
            return sessions.map((_session)=>{
                const { user, ...session } = _session;
                return {
                    session,
                    user
                };
            });
        },
        updateSession: async (sessionToken, session)=>{
            return await updateWithHooks(session, [
                {
                    field: "token",
                    value: sessionToken
                }
            ], "session", secondaryStorage ? {
                async fn (data) {
                    const currentSession = await secondaryStorage.get(sessionToken);
                    let updatedSession = null;
                    if (currentSession) {
                        const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(currentSession);
                        if (!parsedSession) return null;
                        updatedSession = {
                            ...parsedSession.session,
                            ...data
                        };
                        return updatedSession;
                    } else return null;
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
        },
        deleteSession: async (token)=>{
            if (secondaryStorage) {
                const data = await secondaryStorage.get(token);
                if (data) {
                    const { session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(data) ?? {};
                    if (!session) {
                        logger.error("Session not found in secondary storage");
                        return;
                    }
                    const userId = session.userId;
                    const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                    if (currentList) {
                        let list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(currentList) || [];
                        const now = Date.now();
                        const filtered = list.filter((session$1)=>session$1.expiresAt > now && session$1.token !== token);
                        const furthestSessionExp = filtered.sort((a, b)=>a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
                        if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), Math.floor((furthestSessionExp - now) / 1e3));
                        else await secondaryStorage.delete(`active-sessions-${userId}`);
                    } else logger.error("Active sessions list not found in secondary storage");
                }
                await secondaryStorage.delete(token);
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
            }
            await deleteWithHooks([
                {
                    field: "token",
                    value: token
                }
            ], "session", void 0);
        },
        deleteAccounts: async (userId)=>{
            await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "account", void 0);
        },
        deleteAccount: async (accountId)=>{
            await deleteWithHooks([
                {
                    field: "id",
                    value: accountId
                }
            ], "account", void 0);
        },
        deleteSessions: async (userIdOrSessionTokens)=>{
            if (secondaryStorage) {
                if (typeof userIdOrSessionTokens === "string") {
                    const activeSession = await secondaryStorage.get(`active-sessions-${userIdOrSessionTokens}`);
                    const sessions = activeSession ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(activeSession) : [];
                    if (!sessions) return;
                    for (const session of sessions)await secondaryStorage.delete(session.token);
                    await secondaryStorage.delete(`active-sessions-${userIdOrSessionTokens}`);
                } else for (const sessionToken of userIdOrSessionTokens)if (await secondaryStorage.get(sessionToken)) await secondaryStorage.delete(sessionToken);
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
            }
            await deleteManyWithHooks([
                {
                    field: Array.isArray(userIdOrSessionTokens) ? "token" : "userId",
                    value: userIdOrSessionTokens,
                    operator: Array.isArray(userIdOrSessionTokens) ? "in" : void 0
                }
            ], "session", void 0);
        },
        findOAuthUser: async (email, accountId, providerId)=>{
            const account = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        value: accountId,
                        field: "accountId"
                    }
                ],
                join: {
                    user: true
                }
            }).then((accounts)=>{
                return accounts.find((a)=>a.providerId === providerId);
            });
            if (account) if (account.user) return {
                user: account.user,
                accounts: [
                    account
                ]
            };
            else {
                const user = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                    model: "user",
                    where: [
                        {
                            value: email.toLowerCase(),
                            field: "email"
                        }
                    ]
                });
                if (user) return {
                    user,
                    accounts: [
                        account
                    ]
                };
                return null;
            }
            else {
                const user = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                    model: "user",
                    where: [
                        {
                            value: email.toLowerCase(),
                            field: "email"
                        }
                    ]
                });
                if (user) return {
                    user,
                    accounts: await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                        model: "account",
                        where: [
                            {
                                value: user.id,
                                field: "userId"
                            }
                        ]
                    }) || []
                };
                else return null;
            }
        },
        findUserByEmail: async (email, options$1)=>{
            const result = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "user",
                where: [
                    {
                        value: email.toLowerCase(),
                        field: "email"
                    }
                ],
                join: {
                    ...options$1?.includeAccounts ? {
                        account: true
                    } : {}
                }
            });
            if (!result) return null;
            const { account: accounts, ...user } = result;
            return {
                user,
                accounts: accounts ?? []
            };
        },
        findUserById: async (userId)=>{
            if (!userId) return null;
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "user",
                where: [
                    {
                        field: "id",
                        value: userId
                    }
                ]
            });
        },
        linkAccount: async (account)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...account
            }, "account", void 0);
        },
        updateUser: async (userId, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "id",
                    value: userId
                }
            ], "user", void 0);
            await refreshUserSessions(user);
            await refreshUserSessions(user);
            return user;
        },
        updateUserByEmail: async (email, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "email",
                    value: email.toLowerCase()
                }
            ], "user", void 0);
            await refreshUserSessions(user);
            await refreshUserSessions(user);
            return user;
        },
        updatePassword: async (userId, password)=>{
            await updateManyWithHooks({
                password
            }, [
                {
                    field: "userId",
                    value: userId
                },
                {
                    field: "providerId",
                    value: "credential"
                }
            ], "account", void 0);
        },
        findAccounts: async (userId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        findAccount: async (accountId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "account",
                where: [
                    {
                        field: "accountId",
                        value: accountId
                    }
                ]
            });
        },
        findAccountByProviderId: async (accountId, providerId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "account",
                where: [
                    {
                        field: "accountId",
                        value: accountId
                    },
                    {
                        field: "providerId",
                        value: providerId
                    }
                ]
            });
        },
        findAccountByUserId: async (userId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        updateAccount: async (id, data)=>{
            return await updateWithHooks(data, [
                {
                    field: "id",
                    value: id
                }
            ], "account", void 0);
        },
        createVerificationValue: async (data)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...data
            }, "verification", void 0);
        },
        findVerificationValue: async (identifier)=>{
            const verification = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DblZrIwO$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "verification",
                where: [
                    {
                        field: "identifier",
                        value: identifier
                    }
                ],
                sortBy: {
                    field: "createdAt",
                    direction: "desc"
                },
                limit: 1
            });
            if (!options.verification?.disableCleanup) await deleteManyWithHooks([
                {
                    field: "expiresAt",
                    value: /* @__PURE__ */ new Date(),
                    operator: "lt"
                }
            ], "verification", void 0);
            return verification[0];
        },
        deleteVerificationValue: async (id)=>{
            await deleteWithHooks([
                {
                    field: "id",
                    value: id
                }
            ], "verification", void 0);
        },
        deleteVerificationByIdentifier: async (identifier)=>{
            await deleteWithHooks([
                {
                    field: "identifier",
                    value: identifier
                }
            ], "verification", void 0);
        },
        updateVerificationValue: async (id, data)=>{
            return await updateWithHooks(data, [
                {
                    field: "id",
                    value: id
                }
            ], "verification", void 0);
        }
    };
};
;
 //# sourceMappingURL=internal-adapter.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/to-zod.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toZodSchema",
    ()=>toZodSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/index.js [app-route] (ecmascript)");
;
//#region src/db/to-zod.ts
function toZodSchema({ fields, isClientSide }) {
    const zodFields = Object.keys(fields).reduce((acc, key)=>{
        const field = fields[key];
        if (!field) return acc;
        if (isClientSide && field.input === false) return acc;
        let schema;
        if (field.type === "json") schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.json ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.json() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.any();
        else if (field.type === "string[]" || field.type === "number[]") schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.array(field.type === "string[]" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.string() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.number());
        else if (Array.isArray(field.type)) schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.any();
        else schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__[field.type]();
        if (field?.required === false) schema = schema.optional();
        if (field?.returned === false) return acc;
        return {
            ...acc,
            [key]: schema
        };
    }, {});
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.object(zodFields);
}
;
 //# sourceMappingURL=to-zod.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/get-schema.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSchema",
    ()=>getSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/index.mjs [app-route] (ecmascript) <locals>");
;
//#region src/db/get-schema.ts
function getSchema(config) {
    const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db_exports"].getAuthTables)(config);
    let schema = {};
    for(const key in tables){
        const table = tables[key];
        const fields = table.fields;
        let actualFields = {};
        Object.entries(fields).forEach(([key$1, field])=>{
            actualFields[field.fieldName || key$1] = field;
            if (field.references) {
                const refTable = tables[field.references.model];
                if (refTable) actualFields[field.fieldName || key$1].references = {
                    ...field.references,
                    model: refTable.modelName,
                    field: field.references.field
                };
            }
        });
        if (schema[table.modelName]) {
            schema[table.modelName].fields = {
                ...schema[table.modelName].fields,
                ...actualFields
            };
            continue;
        }
        schema[table.modelName] = {
            fields: actualFields,
            order: table.order || Infinity
        };
    }
    return schema;
}
;
 //# sourceMappingURL=get-schema.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/get-migration.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMigrations",
    ()=>getMigrations,
    "matchType",
    ()=>matchType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$kysely$2d$adapter$2f$dialect$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/dialect.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/get-schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$get$2d$tables$2d$CMc_Emww$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getAuthTables$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/get-tables-CMc_Emww.mjs [app-route] (ecmascript) <export t as getAuthTables>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export n as createLogger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/raw-builder/sql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/db/adapter/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
//#region src/db/get-migration.ts
const map = {
    postgres: {
        string: [
            "character varying",
            "varchar",
            "text",
            "uuid"
        ],
        number: [
            "int4",
            "integer",
            "bigint",
            "smallint",
            "numeric",
            "real",
            "double precision"
        ],
        boolean: [
            "bool",
            "boolean"
        ],
        date: [
            "timestamptz",
            "timestamp",
            "date"
        ],
        json: [
            "json",
            "jsonb"
        ]
    },
    mysql: {
        string: [
            "varchar",
            "text",
            "uuid"
        ],
        number: [
            "integer",
            "int",
            "bigint",
            "smallint",
            "decimal",
            "float",
            "double"
        ],
        boolean: [
            "boolean",
            "tinyint"
        ],
        date: [
            "timestamp",
            "datetime",
            "date"
        ],
        json: [
            "json"
        ]
    },
    sqlite: {
        string: [
            "TEXT"
        ],
        number: [
            "INTEGER",
            "REAL"
        ],
        boolean: [
            "INTEGER",
            "BOOLEAN"
        ],
        date: [
            "DATE",
            "INTEGER"
        ],
        json: [
            "TEXT"
        ]
    },
    mssql: {
        string: [
            "varchar",
            "nvarchar",
            "uniqueidentifier"
        ],
        number: [
            "int",
            "bigint",
            "smallint",
            "decimal",
            "float",
            "double"
        ],
        boolean: [
            "bit",
            "smallint"
        ],
        date: [
            "datetime2",
            "date",
            "datetime"
        ],
        json: [
            "varchar",
            "nvarchar"
        ]
    }
};
function matchType(columnDataType, fieldType, dbType) {
    function normalize(type) {
        return type.toLowerCase().split("(")[0].trim();
    }
    if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
    const types = map[dbType];
    return (Array.isArray(fieldType) ? types["string"].map((t)=>t.toLowerCase()) : types[fieldType].map((t)=>t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Get the current PostgreSQL schema (search_path) for the database connection
* Returns the first schema in the search_path, defaulting to 'public' if not found
*/ async function getPostgresSchema(db) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SHOW search_path`.execute(db);
        if (result.rows[0]?.search_path) return result.rows[0].search_path.split(",").map((s)=>s.trim()).map((s)=>s.replace(/^["']|["']$/g, "")).filter((s)=>!s.startsWith("$"))[0] || "public";
    } catch  {}
    return "public";
}
async function getMigrations(config) {
    const betterAuthSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchema"])(config);
    const logger$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__["createLogger"])(config.logger);
    let { kysely: db, databaseType: dbType } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapters$2f$kysely$2d$adapter$2f$dialect$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createKyselyAdapter"])(config);
    if (!dbType) {
        logger$1.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
        dbType = "sqlite";
    }
    if (!db) {
        logger$1.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
        process.exit(1);
    }
    let currentSchema = "public";
    if (dbType === "postgres") {
        currentSchema = await getPostgresSchema(db);
        logger$1.debug(`PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`);
        try {
            if (!(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
				SELECT schema_name 
				FROM information_schema.schemata 
				WHERE schema_name = ${currentSchema}
			`.execute(db)).rows[0]) logger$1.warn(`Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`);
        } catch (error) {
            logger$1.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    const allTableMetadata = await db.introspection.getTables();
    let tableMetadata = allTableMetadata;
    if (dbType === "postgres") try {
        const tablesInSchema = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
				SELECT table_name 
				FROM information_schema.tables 
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
        const tableNamesInSchema = new Set(tablesInSchema.rows.map((row)=>row.table_name));
        tableMetadata = allTableMetadata.filter((table)=>table.schema === currentSchema && tableNamesInSchema.has(table.name));
        logger$1.debug(`Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t)=>t.name).join(", ") || "(none)"}`);
    } catch (error) {
        logger$1.warn(`Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`);
    }
    const toBeCreated = [];
    const toBeAdded = [];
    for (const [key, value] of Object.entries(betterAuthSchema)){
        const table = tableMetadata.find((t)=>t.name === key);
        if (!table) {
            const tIndex = toBeCreated.findIndex((t)=>t.table === key);
            const tableData = {
                table: key,
                fields: value.fields,
                order: value.order || Infinity
            };
            const insertIndex = toBeCreated.findIndex((t)=>(t.order || Infinity) > tableData.order);
            if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
            else toBeCreated[tIndex].fields = {
                ...toBeCreated[tIndex].fields,
                ...value.fields
            };
            else toBeCreated.splice(insertIndex, 0, tableData);
            continue;
        }
        let toBeAddedFields = {};
        for (const [fieldName, field] of Object.entries(value.fields)){
            const column = table.columns.find((c)=>c.name === fieldName);
            if (!column) {
                toBeAddedFields[fieldName] = field;
                continue;
            }
            if (matchType(column.dataType, field.type, dbType)) continue;
            else logger$1.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
        }
        if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
            table: key,
            fields: toBeAddedFields,
            order: value.order || Infinity
        });
    }
    const migrations = [];
    const useUUIDs = config.advanced?.database?.generateId === "uuid";
    const useNumberId = config.advanced?.database?.useNumberId || config.advanced?.database?.generateId === "serial";
    function getType(field, fieldName) {
        const type = field.type;
        const provider = dbType || "sqlite";
        const typeMap = {
            string: {
                sqlite: "text",
                postgres: "text",
                mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
                mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
            },
            boolean: {
                sqlite: "integer",
                postgres: "boolean",
                mysql: "boolean",
                mssql: "smallint"
            },
            number: {
                sqlite: field.bigint ? "bigint" : "integer",
                postgres: field.bigint ? "bigint" : "integer",
                mysql: field.bigint ? "bigint" : "integer",
                mssql: field.bigint ? "bigint" : "integer"
            },
            date: {
                sqlite: "date",
                postgres: "timestamptz",
                mysql: "timestamp(3)",
                mssql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`datetime2(3)`
            },
            json: {
                sqlite: "text",
                postgres: "jsonb",
                mysql: "json",
                mssql: "varchar(8000)"
            },
            id: {
                postgres: useNumberId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
                mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                sqlite: useNumberId ? "integer" : "text"
            },
            foreignKeyId: {
                postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
                mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                sqlite: useNumberId ? "integer" : "text"
            },
            "string[]": {
                sqlite: "text",
                postgres: "jsonb",
                mysql: "json",
                mssql: "varchar(8000)"
            },
            "number[]": {
                sqlite: "text",
                postgres: "jsonb",
                mysql: "json",
                mssql: "varchar(8000)"
            }
        };
        if (fieldName === "id" || field.references?.field === "id") {
            if (fieldName === "id") return typeMap.id[provider];
            return typeMap.foreignKeyId[provider];
        }
        if (Array.isArray(type)) return "text";
        if (!(type in typeMap)) throw new Error(`Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`);
        return typeMap[type][provider];
    }
    const getModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initGetModelName"])({
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$get$2d$tables$2d$CMc_Emww$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getAuthTables$3e$__["getAuthTables"])(config),
        usePlural: false
    });
    const getFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$adapter$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initGetFieldName"])({
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$get$2d$tables$2d$CMc_Emww$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__getAuthTables$3e$__["getAuthTables"])(config),
        usePlural: false
    });
    function getReferencePath(model, field) {
        try {
            return `${getModelName(model)}.${getFieldName({
                model,
                field
            })}`;
        } catch  {
            return `${model}.${field}`;
        }
    }
    if (toBeAdded.length) for (const table of toBeAdded)for (const [fieldName, field] of Object.entries(table.fields)){
        const type = getType(field, fieldName);
        let builder = db.schema.alterTable(table.table);
        if (field.index) {
            const index = db.schema.alterTable(table.table).addIndex(`${table.table}_${fieldName}_idx`);
            migrations.push(index);
        }
        let built = builder.addColumn(fieldName, type, (col)=>{
            col = field.required !== false ? col.notNull() : col;
            if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
            if (field.unique) col = col.unique();
            if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP(3)`);
            else col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`);
            return col;
        });
        migrations.push(built);
    }
    let toBeIndexed = [];
    if (config.advanced?.database?.useNumberId) logger$1.warn("`useNumberId` is deprecated. Please use `generateId` with `serial` instead.");
    if (toBeCreated.length) for (const table of toBeCreated){
        const idType = getType({
            type: useNumberId ? "number" : "string"
        }, "id");
        let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col)=>{
            if (useNumberId) {
                if (dbType === "postgres") return col.primaryKey().notNull();
                else if (dbType === "sqlite") return col.primaryKey().notNull();
                else if (dbType === "mssql") return col.identity().primaryKey().notNull();
                return col.autoIncrement().primaryKey().notNull();
            }
            if (useUUIDs) {
                if (dbType === "postgres") return col.primaryKey().defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`pg_catalog.gen_random_uuid()`).notNull();
                return col.primaryKey().notNull();
            }
            return col.primaryKey().notNull();
        });
        for (const [fieldName, field] of Object.entries(table.fields)){
            const type = getType(field, fieldName);
            dbT = dbT.addColumn(fieldName, type, (col)=>{
                col = field.required !== false ? col.notNull() : col;
                if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
                if (field.unique) col = col.unique();
                if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP(3)`);
                else col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`);
                return col;
            });
            if (field.index) {
                let builder = db.schema.createIndex(`${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`).on(table.table).columns([
                    fieldName
                ]);
                toBeIndexed.push(field.unique ? builder.unique() : builder);
            }
        }
        migrations.push(dbT);
    }
    if (toBeIndexed.length) for (const index of toBeIndexed)migrations.push(index);
    async function runMigrations() {
        for (const migration of migrations)await migration.execute();
    }
    async function compileMigrations() {
        return migrations.map((m)=>m.compile().sql).join(";\n\n") + ";";
    }
    return {
        toBeCreated,
        toBeAdded,
        runMigrations,
        compileMigrations
    };
}
;
 //# sourceMappingURL=get-migration.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db_exports",
    ()=>db_exports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/_virtual/rolldown_runtime.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$base$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/adapter-base.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$kysely$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/adapter-kysely.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$field$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/field.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$field$2d$converter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/field-converter.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$with$2d$hooks$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/with-hooks.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$internal$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/internal-adapter.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$to$2d$zod$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/to-zod.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/get-schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$migration$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/get-migration.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/db/index.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/db/index.ts
var db_exports = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__export"])({
    convertFromDB: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$field$2d$converter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertFromDB"],
    convertToDB: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$field$2d$converter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["convertToDB"],
    createFieldAttribute: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$field$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createFieldAttribute"],
    createInternalAdapter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$internal$2d$adapter$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createInternalAdapter"],
    getAdapter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$kysely$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAdapter"],
    getBaseAdapter: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$adapter$2d$base$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getBaseAdapter"],
    getMigrations: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$migration$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"],
    getSchema: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchema"],
    getWithHooks: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$with$2d$hooks$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWithHooks"],
    matchType: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$get$2d$migration$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["matchType"],
    mergeSchema: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeSchema"],
    parseAccountInput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAccountInput"],
    parseAccountOutput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAccountOutput"],
    parseAdditionalUserInput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAdditionalUserInput"],
    parseInputData: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseInputData"],
    parseSessionInput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionInput"],
    parseSessionOutput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSessionOutput"],
    parseUserInput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserInput"],
    parseUserOutput: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"],
    toZodSchema: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$to$2d$zod$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toZodSchema"]
});
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$_virtual$2f$rolldown_runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__reExport"])(db_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__);
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=27bc1_better-auth_dist_db_ce5010f5._.js.map