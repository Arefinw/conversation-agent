module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/client.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twoFactorClient",
    ()=>twoFactorClient
]);
//#region src/plugins/two-factor/client.ts
const twoFactorClient = (options)=>{
    return {
        id: "two-factor",
        $InferServerPlugin: {},
        atomListeners: [
            {
                matcher: (path)=>path.startsWith("/two-factor/"),
                signal: "$sessionSignal"
            }
        ],
        pathMethods: {
            "/two-factor/disable": "POST",
            "/two-factor/enable": "POST",
            "/two-factor/send-otp": "POST",
            "/two-factor/generate-backup-codes": "POST"
        },
        fetchPlugins: [
            {
                id: "two-factor",
                name: "two-factor",
                hooks: {
                    async onSuccess (context) {
                        if (context.data?.twoFactorRedirect) {
                            if (options?.onTwoFactorRedirect) await options.onTwoFactorRedirect();
                        }
                    }
                }
            }
        ]
    };
};
;
 //# sourceMappingURL=client.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TWO_FACTOR_ERROR_CODES",
    ()=>TWO_FACTOR_ERROR_CODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__defineErrorCodes$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export i as defineErrorCodes>");
;
//#region src/plugins/two-factor/error-code.ts
const TWO_FACTOR_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__defineErrorCodes$3e$__["defineErrorCodes"])({
    OTP_NOT_ENABLED: "OTP not enabled",
    OTP_HAS_EXPIRED: "OTP has expired",
    TOTP_NOT_ENABLED: "TOTP not enabled",
    TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled",
    BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled",
    INVALID_BACKUP_CODE: "Invalid backup code",
    INVALID_CODE: "Invalid code",
    TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.",
    INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie"
});
;
 //# sourceMappingURL=error-code.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/constant.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRUST_DEVICE_COOKIE_MAX_AGE",
    ()=>TRUST_DEVICE_COOKIE_MAX_AGE,
    "TRUST_DEVICE_COOKIE_NAME",
    ()=>TRUST_DEVICE_COOKIE_NAME,
    "TWO_FACTOR_COOKIE_NAME",
    ()=>TWO_FACTOR_COOKIE_NAME
]);
//#region src/plugins/two-factor/constant.ts
const TWO_FACTOR_COOKIE_NAME = "two_factor";
const TRUST_DEVICE_COOKIE_NAME = "trust_device";
const TRUST_DEVICE_COOKIE_MAX_AGE = 720 * 60 * 60;
;
 //# sourceMappingURL=constant.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/verify-two-factor.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyTwoFactor",
    ()=>verifyTwoFactor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/routes/session.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/constant.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
//#region src/plugins/two-factor/verify-two-factor.ts
async function verifyTwoFactor(ctx) {
    const invalid = (errorKey)=>{
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"][errorKey]
        });
    };
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionFromCtx"])(ctx);
    if (!session) {
        const cookieName = ctx.context.createAuthCookie(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_COOKIE_NAME"]);
        const twoFactorCookie = await ctx.getSignedCookie(cookieName.name, ctx.context.secret);
        if (!twoFactorCookie) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].INVALID_TWO_FACTOR_COOKIE
        });
        const verificationToken = await ctx.context.internalAdapter.findVerificationValue(twoFactorCookie);
        if (!verificationToken) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].INVALID_TWO_FACTOR_COOKIE
        });
        const user = await ctx.context.internalAdapter.findUserById(verificationToken.value);
        if (!user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].INVALID_TWO_FACTOR_COOKIE
        });
        const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
        return {
            valid: async (ctx$1)=>{
                const session$1 = await ctx$1.context.internalAdapter.createSession(verificationToken.value, !!dontRememberMe);
                if (!session$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                    message: "failed to create session"
                });
                await ctx$1.context.internalAdapter.deleteVerificationValue(verificationToken.id);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx$1, {
                    session: session$1,
                    user
                });
                ctx$1.setCookie(cookieName.name, "", {
                    maxAge: 0
                });
                if (ctx$1.body.trustDevice) {
                    const trustDeviceCookie = ctx$1.context.createAuthCookie(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_NAME"], {
                        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_MAX_AGE"]
                    });
                    /**
					* create a token that will be used to
					* verify the device
					*/ const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx$1.context.secret, `${user.id}!${session$1.token}`);
                    await ctx$1.setSignedCookie(trustDeviceCookie.name, `${token}!${session$1.token}`, ctx$1.context.secret, trustDeviceCookie.attributes);
                    ctx$1.setCookie(ctx$1.context.authCookies.dontRememberToken.name, "", {
                        maxAge: 0
                    });
                }
                return ctx$1.json({
                    token: session$1.token,
                    user: {
                        id: user.id,
                        email: user.email,
                        emailVerified: user.emailVerified,
                        name: user.name,
                        image: user.image,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                });
            },
            invalid,
            session: {
                session: null,
                user
            },
            key: twoFactorCookie
        };
    }
    return {
        valid: async (ctx$1)=>{
            return ctx$1.json({
                token: session.session.token,
                user: {
                    id: session.user.id,
                    email: session.user.email,
                    emailVerified: session.user.emailVerified,
                    name: session.user.name,
                    image: session.user.image,
                    createdAt: session.user.createdAt,
                    updatedAt: session.user.updatedAt
                }
            });
        },
        invalid,
        session,
        key: `${session.user.id}!${session.session.id}`
    };
}
;
 //# sourceMappingURL=verify-two-factor.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/backup-codes/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backupCode2fa",
    ()=>backupCode2fa,
    "generateBackupCodes",
    ()=>generateBackupCodes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/routes/session.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/verify-two-factor.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export n as safeJSONParse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/api/index.mjs [app-route] (ecmascript)");
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
//#region src/plugins/two-factor/backup-codes/index.ts
function generateBackupCodesFn(options) {
    return Array.from({
        length: options?.amount ?? 10
    }).fill(null).map(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(options?.length ?? 10, "a-z", "0-9", "A-Z")).map((code)=>`${code.slice(0, 5)}-${code.slice(5)}`);
}
async function generateBackupCodes(secret, options) {
    const backupCodes = options?.customBackupCodesGenerate ? options.customBackupCodesGenerate() : generateBackupCodesFn(options);
    if (options?.storeBackupCodes === "encrypted") return {
        backupCodes,
        encryptedBackupCodes: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
            data: JSON.stringify(backupCodes),
            key: secret
        })
    };
    if (typeof options?.storeBackupCodes === "object" && "encrypt" in options?.storeBackupCodes) return {
        backupCodes,
        encryptedBackupCodes: await options?.storeBackupCodes.encrypt(JSON.stringify(backupCodes))
    };
    return {
        backupCodes,
        encryptedBackupCodes: JSON.stringify(backupCodes)
    };
}
async function verifyBackupCode(data, key, options) {
    const codes = await getBackupCodes(data.backupCodes, key, options);
    if (!codes) return {
        status: false,
        updated: null
    };
    return {
        status: codes.includes(data.code),
        updated: codes.filter((code)=>code !== data.code)
    };
}
async function getBackupCodes(backupCodes, key, options) {
    if (options?.storeBackupCodes === "encrypted") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
        key,
        data: backupCodes
    }));
    if (typeof options?.storeBackupCodes === "object" && "decrypt" in options?.storeBackupCodes) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(await options?.storeBackupCodes.decrypt(backupCodes));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(backupCodes);
}
const verifyBackupCodeBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: `A backup code to verify. Eg: "123456"`
    }),
    disableSession: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().meta({
        description: "If true, the session cookie will not be set."
    }).optional(),
    trustDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().meta({
        description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true"
    }).optional()
});
const viewBackupCodesBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerce"].string().meta({
        description: `The user ID to view all backup codes. Eg: "user-id"`
    })
});
const generateBackupCodesBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The users password."
    })
});
const backupCode2fa = (opts)=>{
    const twoFactorTable = "twoFactor";
    return {
        id: "backup_code",
        endpoints: {
            verifyBackupCode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/verify-backup-code", {
                method: "POST",
                body: verifyBackupCodeBodySchema,
                metadata: {
                    openapi: {
                        description: "Verify a backup code for two-factor authentication",
                        responses: {
                            "200": {
                                description: "Backup code verified successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                user: {
                                                    type: "object",
                                                    properties: {
                                                        id: {
                                                            type: "string",
                                                            description: "Unique identifier of the user"
                                                        },
                                                        email: {
                                                            type: "string",
                                                            format: "email",
                                                            nullable: true,
                                                            description: "User's email address"
                                                        },
                                                        emailVerified: {
                                                            type: "boolean",
                                                            nullable: true,
                                                            description: "Whether the email is verified"
                                                        },
                                                        name: {
                                                            type: "string",
                                                            nullable: true,
                                                            description: "User's name"
                                                        },
                                                        image: {
                                                            type: "string",
                                                            format: "uri",
                                                            nullable: true,
                                                            description: "User's profile image URL"
                                                        },
                                                        twoFactorEnabled: {
                                                            type: "boolean",
                                                            description: "Whether two-factor authentication is enabled for the user"
                                                        },
                                                        createdAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the user was created"
                                                        },
                                                        updatedAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the user was last updated"
                                                        }
                                                    },
                                                    required: [
                                                        "id",
                                                        "twoFactorEnabled",
                                                        "createdAt",
                                                        "updatedAt"
                                                    ],
                                                    description: "The authenticated user object with two-factor details"
                                                },
                                                session: {
                                                    type: "object",
                                                    properties: {
                                                        token: {
                                                            type: "string",
                                                            description: "Session token"
                                                        },
                                                        userId: {
                                                            type: "string",
                                                            description: "ID of the user associated with the session"
                                                        },
                                                        createdAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the session was created"
                                                        },
                                                        expiresAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the session expires"
                                                        }
                                                    },
                                                    required: [
                                                        "token",
                                                        "userId",
                                                        "createdAt",
                                                        "expiresAt"
                                                    ],
                                                    description: "The current session object, included unless disableSession is true"
                                                }
                                            },
                                            required: [
                                                "user",
                                                "session"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const { session, valid } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTwoFactor"])(ctx);
                const user = session.user;
                const twoFactor = await ctx.context.adapter.findOne({
                    model: twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        }
                    ]
                });
                if (!twoFactor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].BACKUP_CODES_NOT_ENABLED
                });
                const validate = await verifyBackupCode({
                    backupCodes: twoFactor.backupCodes,
                    code: ctx.body.code
                }, ctx.context.secret, opts);
                if (!validate.status) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].INVALID_BACKUP_CODE
                });
                const updatedBackupCodes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
                    key: ctx.context.secret,
                    data: JSON.stringify(validate.updated)
                });
                if (!await ctx.context.adapter.updateMany({
                    model: twoFactorTable,
                    update: {
                        backupCodes: updatedBackupCodes
                    },
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        },
                        {
                            field: "backupCodes",
                            value: twoFactor.backupCodes
                        }
                    ]
                })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("CONFLICT", {
                    message: "Failed to verify backup code. Please try again."
                });
                if (!ctx.body.disableSession) return valid(ctx);
                return ctx.json({
                    token: session.session?.token,
                    user: {
                        id: session.user?.id,
                        email: session.user.email,
                        emailVerified: session.user.emailVerified,
                        name: session.user.name,
                        image: session.user.image,
                        createdAt: session.user.createdAt,
                        updatedAt: session.user.updatedAt
                    }
                });
            }),
            generateBackupCodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/generate-backup-codes", {
                method: "POST",
                body: generateBackupCodesBodySchema,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        description: "Generate new backup codes for two-factor authentication",
                        responses: {
                            "200": {
                                description: "Backup codes generated successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                status: {
                                                    type: "boolean",
                                                    description: "Indicates if the backup codes were generated successfully",
                                                    enum: [
                                                        true
                                                    ]
                                                },
                                                backupCodes: {
                                                    type: "array",
                                                    items: {
                                                        type: "string"
                                                    },
                                                    description: "Array of generated backup codes in plain text"
                                                }
                                            },
                                            required: [
                                                "status",
                                                "backupCodes"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const user = ctx.context.session.user;
                if (!user.twoFactorEnabled) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].TWO_FACTOR_NOT_ENABLED
                });
                await ctx.context.password.checkPassword(user.id, ctx);
                const backupCodes = await generateBackupCodes(ctx.context.secret, opts);
                await ctx.context.adapter.updateMany({
                    model: twoFactorTable,
                    update: {
                        backupCodes: backupCodes.encryptedBackupCodes
                    },
                    where: [
                        {
                            field: "userId",
                            value: ctx.context.session.user.id
                        }
                    ]
                });
                return ctx.json({
                    status: true,
                    backupCodes: backupCodes.backupCodes
                });
            }),
            viewBackupCodes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
                method: "POST",
                body: viewBackupCodesBodySchema
            }, async (ctx)=>{
                const twoFactor = await ctx.context.adapter.findOne({
                    model: twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: ctx.body.userId
                        }
                    ]
                });
                if (!twoFactor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].BACKUP_CODES_NOT_ENABLED
                });
                const decryptedBackupCodes = await getBackupCodes(twoFactor.backupCodes, ctx.context.secret, opts);
                if (!decryptedBackupCodes) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].INVALID_BACKUP_CODE
                });
                return ctx.json({
                    status: true,
                    backupCodes: decryptedBackupCodes
                });
            })
        }
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/utils.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultKeyHasher",
    ()=>defaultKeyHasher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
;
;
//#region src/plugins/two-factor/utils.ts
const defaultKeyHasher = async (token)=>{
    const hash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(new TextEncoder().encode(token));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64Url"].encode(new Uint8Array(hash), {
        padding: false
    });
};
;
 //# sourceMappingURL=utils.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/otp/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "otp2fa",
    ()=>otp2fa
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/buffer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/verify-two-factor.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/api/index.mjs [app-route] (ecmascript)");
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
//#region src/plugins/two-factor/otp/index.ts
const verifyOTPBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The otp code to verify. Eg: \"012345\""
    }),
    trustDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().optional().meta({
        description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true"
    })
});
const send2FaOTPBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    trustDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().optional().meta({
        description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true"
    })
}).optional();
/**
* The otp adapter is created from the totp adapter.
*/ const otp2fa = (options)=>{
    const opts = {
        storeOTP: "plain",
        digits: 6,
        ...options,
        period: (options?.period || 3) * 60 * 1e3
    };
    async function storeOTP(ctx, otp) {
        if (opts.storeOTP === "hashed") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(otp);
        if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return await opts.storeOTP.hash(otp);
        if (typeof opts.storeOTP === "object" && "encrypt" in opts.storeOTP) return await opts.storeOTP.encrypt(otp);
        if (opts.storeOTP === "encrypted") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
            key: ctx.context.secret,
            data: otp
        });
        return otp;
    }
    async function decryptOTP(ctx, otp) {
        if (opts.storeOTP === "hashed") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultKeyHasher"])(otp);
        if (opts.storeOTP === "encrypted") return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
            key: ctx.context.secret,
            data: otp
        });
        if (typeof opts.storeOTP === "object" && "encrypt" in opts.storeOTP) return await opts.storeOTP.decrypt(otp);
        if (typeof opts.storeOTP === "object" && "hash" in opts.storeOTP) return await opts.storeOTP.hash(otp);
        return otp;
    }
    return {
        id: "otp",
        endpoints: {
            sendTwoFactorOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/send-otp", {
                method: "POST",
                body: send2FaOTPBodySchema,
                metadata: {
                    openapi: {
                        summary: "Send two factor OTP",
                        description: "Send two factor OTP to the user",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                status: {
                                                    type: "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (!options || !options.sendOTP) {
                    ctx.context.logger.error("send otp isn't configured. Please configure the send otp function on otp options.");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "otp isn't configured"
                    });
                }
                const { session, key } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTwoFactor"])(ctx);
                const code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(opts.digits, "0-9");
                const hashedCode = await storeOTP(ctx, code);
                await ctx.context.internalAdapter.createVerificationValue({
                    value: `${hashedCode}:0`,
                    identifier: `2fa-otp-${key}`,
                    expiresAt: new Date(Date.now() + opts.period)
                });
                const sendOTPResult = options.sendOTP({
                    user: session.user,
                    otp: code
                }, ctx);
                if (sendOTPResult instanceof Promise) await ctx.context.runInBackgroundOrAwait(sendOTPResult.catch((e)=>{
                    ctx.context.logger.error("Failed to send two-factor OTP", e);
                }));
                return ctx.json({
                    status: true
                });
            }),
            verifyTwoFactorOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/verify-otp", {
                method: "POST",
                body: verifyOTPBodySchema,
                metadata: {
                    openapi: {
                        summary: "Verify two factor OTP",
                        description: "Verify two factor OTP",
                        responses: {
                            "200": {
                                description: "Two-factor OTP verified successfully",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                token: {
                                                    type: "string",
                                                    description: "Session token for the authenticated session"
                                                },
                                                user: {
                                                    type: "object",
                                                    properties: {
                                                        id: {
                                                            type: "string",
                                                            description: "Unique identifier of the user"
                                                        },
                                                        email: {
                                                            type: "string",
                                                            format: "email",
                                                            nullable: true,
                                                            description: "User's email address"
                                                        },
                                                        emailVerified: {
                                                            type: "boolean",
                                                            nullable: true,
                                                            description: "Whether the email is verified"
                                                        },
                                                        name: {
                                                            type: "string",
                                                            nullable: true,
                                                            description: "User's name"
                                                        },
                                                        image: {
                                                            type: "string",
                                                            format: "uri",
                                                            nullable: true,
                                                            description: "User's profile image URL"
                                                        },
                                                        createdAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the user was created"
                                                        },
                                                        updatedAt: {
                                                            type: "string",
                                                            format: "date-time",
                                                            description: "Timestamp when the user was last updated"
                                                        }
                                                    },
                                                    required: [
                                                        "id",
                                                        "createdAt",
                                                        "updatedAt"
                                                    ],
                                                    description: "The authenticated user object"
                                                }
                                            },
                                            required: [
                                                "token",
                                                "user"
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const { session, key, valid, invalid } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTwoFactor"])(ctx);
                const toCheckOtp = await ctx.context.internalAdapter.findVerificationValue(`2fa-otp-${key}`);
                const [otp, counter] = toCheckOtp?.value?.split(":") ?? [];
                const decryptedOtp = await decryptOTP(ctx, otp);
                if (!toCheckOtp || toCheckOtp.expiresAt < /* @__PURE__ */ new Date()) {
                    if (toCheckOtp) await ctx.context.internalAdapter.deleteVerificationValue(toCheckOtp.id);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].OTP_HAS_EXPIRED
                    });
                }
                const allowedAttempts = options?.allowedAttempts || 5;
                if (parseInt(counter) >= allowedAttempts) {
                    await ctx.context.internalAdapter.deleteVerificationValue(toCheckOtp.id);
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE
                    });
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constantTimeEqual"])(new TextEncoder().encode(decryptedOtp), new TextEncoder().encode(ctx.body.code))) {
                    if (!session.user.twoFactorEnabled) {
                        if (!session.session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
                        });
                        const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, {
                            twoFactorEnabled: true
                        });
                        const newSession = await ctx.context.internalAdapter.createSession(session.user.id, false, session.session);
                        await ctx.context.internalAdapter.deleteSession(session.session.token);
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                            session: newSession,
                            user: updatedUser
                        });
                        return ctx.json({
                            token: newSession.token,
                            user: {
                                id: updatedUser.id,
                                email: updatedUser.email,
                                emailVerified: updatedUser.emailVerified,
                                name: updatedUser.name,
                                image: updatedUser.image,
                                createdAt: updatedUser.createdAt,
                                updatedAt: updatedUser.updatedAt
                            }
                        });
                    }
                    return valid(ctx);
                } else {
                    await ctx.context.internalAdapter.updateVerificationValue(toCheckOtp.id, {
                        value: `${otp}:${(parseInt(counter, 10) || 0) + 1}`
                    });
                    return invalid("INVALID_CODE");
                }
            })
        }
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/schema.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
//#region src/plugins/two-factor/schema.ts
const schema = {
    user: {
        fields: {
            twoFactorEnabled: {
                type: "boolean",
                required: false,
                defaultValue: false,
                input: false
            }
        }
    },
    twoFactor: {
        fields: {
            secret: {
                type: "string",
                required: true,
                returned: false,
                index: true
            },
            backupCodes: {
                type: "string",
                required: true,
                returned: false
            },
            userId: {
                type: "string",
                required: true,
                returned: false,
                references: {
                    model: "user",
                    field: "id"
                },
                index: true
            }
        }
    }
};
;
 //# sourceMappingURL=schema.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/totp/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "totp2fa",
    ()=>totp2fa
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/routes/session.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/verify-two-factor.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/api/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/otp.mjs [app-route] (ecmascript)");
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
//#region src/plugins/two-factor/totp/index.ts
const generateTOTPBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    secret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The secret to generate the TOTP code"
    })
});
const getTOTPURIBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "User password"
    })
});
const verifyTOTPBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The otp code to verify. Eg: \"012345\""
    }),
    trustDevice: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().meta({
        description: "If true, the device will be trusted for 30 days. It'll be refreshed on every sign in request within this time. Eg: true"
    }).optional()
});
const totp2fa = (options)=>{
    const opts = {
        ...options,
        digits: options?.digits || 6,
        period: options?.period || 30
    };
    const twoFactorTable = "twoFactor";
    return {
        id: "totp",
        endpoints: {
            generateTOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])({
                method: "POST",
                body: generateTOTPBodySchema,
                metadata: {
                    openapi: {
                        summary: "Generate TOTP code",
                        description: "Use this endpoint to generate a TOTP code",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                code: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (options?.disable) {
                    ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "totp isn't configured"
                    });
                }
                return {
                    code: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOTP"])(ctx.body.secret, {
                        period: opts.period,
                        digits: opts.digits
                    }).totp()
                };
            }),
            getTOTPURI: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/get-totp-uri", {
                method: "POST",
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                body: getTOTPURIBodySchema,
                metadata: {
                    openapi: {
                        summary: "Get TOTP URI",
                        description: "Use this endpoint to get the TOTP URI",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                totpURI: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (options?.disable) {
                    ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "totp isn't configured"
                    });
                }
                const user = ctx.context.session.user;
                const twoFactor = await ctx.context.adapter.findOne({
                    model: twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        }
                    ]
                });
                if (!twoFactor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].TOTP_NOT_ENABLED
                });
                const secret = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                    key: ctx.context.secret,
                    data: twoFactor.secret
                });
                await ctx.context.password.checkPassword(user.id, ctx);
                return {
                    totpURI: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOTP"])(secret, {
                        digits: opts.digits,
                        period: opts.period
                    }).url(options?.issuer || ctx.context.appName, user.email)
                };
            }),
            verifyTOTP: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/verify-totp", {
                method: "POST",
                body: verifyTOTPBodySchema,
                metadata: {
                    openapi: {
                        summary: "Verify two factor TOTP",
                        description: "Verify two factor TOTP",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                status: {
                                                    type: "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                if (options?.disable) {
                    ctx.context.logger.error("totp isn't configured. please pass totp option on two factor plugin to enable totp");
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: "totp isn't configured"
                    });
                }
                const { session, valid, invalid } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$verify$2d$two$2d$factor$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyTwoFactor"])(ctx);
                const user = session.user;
                const twoFactor = await ctx.context.adapter.findOne({
                    model: twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        }
                    ]
                });
                if (!twoFactor) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"].TOTP_NOT_ENABLED
                });
                if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOTP"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                    key: ctx.context.secret,
                    data: twoFactor.secret
                }), {
                    period: opts.period,
                    digits: opts.digits
                }).verify(ctx.body.code)) return invalid("INVALID_CODE");
                if (!user.twoFactorEnabled) {
                    if (!session.session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
                    });
                    const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, {
                        twoFactorEnabled: true
                    });
                    const newSession = await ctx.context.internalAdapter.createSession(user.id, false, session.session).catch((e)=>{
                        throw e;
                    });
                    await ctx.context.internalAdapter.deleteSession(session.session.token);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                        session: newSession,
                        user: updatedUser
                    });
                }
                return valid(ctx);
            })
        }
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twoFactor",
    ()=>twoFactor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/routes/session.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$password$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/password.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/client.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/constant.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$backup$2d$codes$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/backup-codes/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$otp$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/otp/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$totp$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/plugins/two-factor/totp/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/api/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/otp.mjs [app-route] (ecmascript)");
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
;
;
;
;
;
;
;
;
//#region src/plugins/two-factor/index.ts
const enableTwoFactorBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "User password"
    }),
    issuer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "Custom issuer for the TOTP URI"
    }).optional()
});
const disableTwoFactorBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "User password"
    })
});
const twoFactor = (options)=>{
    const opts = {
        twoFactorTable: "twoFactor"
    };
    const backupCodeOptions = {
        storeBackupCodes: "encrypted",
        ...options?.backupCodeOptions
    };
    const totp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$totp$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["totp2fa"])(options?.totpOptions);
    const backupCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$backup$2d$codes$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["backupCode2fa"])(backupCodeOptions);
    const otp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$otp$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["otp2fa"])(options?.otpOptions);
    return {
        id: "two-factor",
        endpoints: {
            ...totp.endpoints,
            ...otp.endpoints,
            ...backupCode.endpoints,
            enableTwoFactor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/enable", {
                method: "POST",
                body: enableTwoFactorBodySchema,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        summary: "Enable two factor authentication",
                        description: "Use this endpoint to enable two factor authentication. This will generate a TOTP URI and backup codes. Once the user verifies the TOTP URI, the two factor authentication will be enabled.",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                totpURI: {
                                                    type: "string",
                                                    description: "TOTP URI"
                                                },
                                                backupCodes: {
                                                    type: "array",
                                                    items: {
                                                        type: "string"
                                                    },
                                                    description: "Backup codes"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const user = ctx.context.session.user;
                const { password, issuer } = ctx.body;
                if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$password$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePassword"])(ctx, {
                    password,
                    userId: user.id
                })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_PASSWORD
                });
                const secret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(32);
                const encryptedSecret = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
                    key: ctx.context.secret,
                    data: secret
                });
                const backupCodes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$backup$2d$codes$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateBackupCodes"])(ctx.context.secret, backupCodeOptions);
                if (options?.skipVerificationOnEnable) {
                    const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, {
                        twoFactorEnabled: true
                    });
                    /**
					* Update the session cookie with the new user data
					*/ await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                        session: await ctx.context.internalAdapter.createSession(updatedUser.id, false, ctx.context.session.session),
                        user: updatedUser
                    });
                    await ctx.context.internalAdapter.deleteSession(ctx.context.session.session.token);
                }
                await ctx.context.adapter.deleteMany({
                    model: opts.twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: user.id
                        }
                    ]
                });
                await ctx.context.adapter.create({
                    model: opts.twoFactorTable,
                    data: {
                        secret: encryptedSecret,
                        backupCodes: backupCodes.encryptedBackupCodes,
                        userId: user.id
                    }
                });
                const totpURI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$otp$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOTP"])(secret, {
                    digits: options?.totpOptions?.digits || 6,
                    period: options?.totpOptions?.period
                }).url(issuer || options?.issuer || ctx.context.appName, user.email);
                return ctx.json({
                    totpURI,
                    backupCodes: backupCodes.backupCodes
                });
            }),
            disableTwoFactor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/two-factor/disable", {
                method: "POST",
                body: disableTwoFactorBodySchema,
                use: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$session$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessionMiddleware"]
                ],
                metadata: {
                    openapi: {
                        summary: "Disable two factor authentication",
                        description: "Use this endpoint to disable two factor authentication.",
                        responses: {
                            200: {
                                description: "Successful response",
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object",
                                            properties: {
                                                status: {
                                                    type: "boolean"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, async (ctx)=>{
                const user = ctx.context.session.user;
                const { password } = ctx.body;
                if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$password$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validatePassword"])(ctx, {
                    password,
                    userId: user.id
                })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_PASSWORD
                });
                const updatedUser = await ctx.context.internalAdapter.updateUser(user.id, {
                    twoFactorEnabled: false
                });
                await ctx.context.adapter.delete({
                    model: opts.twoFactorTable,
                    where: [
                        {
                            field: "userId",
                            value: updatedUser.id
                        }
                    ]
                });
                /**
				* Update the session cookie with the new user data
				*/ await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setSessionCookie"])(ctx, {
                    session: await ctx.context.internalAdapter.createSession(updatedUser.id, false, ctx.context.session.session),
                    user: updatedUser
                });
                await ctx.context.internalAdapter.deleteSession(ctx.context.session.session.token);
                return ctx.json({
                    status: true
                });
            })
        },
        options,
        hooks: {
            after: [
                {
                    matcher (context) {
                        return context.path === "/sign-in/email" || context.path === "/sign-in/username" || context.path === "/sign-in/phone-number";
                    },
                    handler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
                        const data = ctx.context.newSession;
                        if (!data) return;
                        if (!data?.user.twoFactorEnabled) return;
                        const trustDeviceCookieAttrs = ctx.context.createAuthCookie(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_NAME"], {
                            maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_MAX_AGE"]
                        });
                        const trustDeviceCookie = await ctx.getSignedCookie(trustDeviceCookieAttrs.name, ctx.context.secret);
                        if (trustDeviceCookie) {
                            const [token, sessionToken] = trustDeviceCookie.split("!");
                            if (token === await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx.context.secret, `${data.user.id}!${sessionToken}`)) {
                                const newTrustDeviceCookie = ctx.context.createAuthCookie(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_NAME"], {
                                    maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRUST_DEVICE_COOKIE_MAX_AGE"]
                                });
                                const newToken = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx.context.secret, `${data.user.id}!${data.session.token}`);
                                await ctx.setSignedCookie(newTrustDeviceCookie.name, `${newToken}!${data.session.token}`, ctx.context.secret, trustDeviceCookieAttrs.attributes);
                                return;
                            }
                        }
                        /**
				* remove the session cookie. It's set by the sign in credential
				*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSessionCookie"])(ctx, true);
                        await ctx.context.internalAdapter.deleteSession(data.session.token);
                        const maxAge = (options?.otpOptions?.period ?? 3) * 60;
                        const twoFactorCookie = ctx.context.createAuthCookie(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$constant$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_COOKIE_NAME"], {
                            maxAge
                        });
                        const identifier = `2fa-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(20)}`;
                        await ctx.context.internalAdapter.createVerificationValue({
                            value: data.user.id,
                            identifier,
                            expiresAt: new Date(Date.now() + maxAge * 1e3)
                        });
                        await ctx.setSignedCookie(twoFactorCookie.name, identifier, ctx.context.secret, twoFactorCookie.attributes);
                        return ctx.json({
                            twoFactorRedirect: true
                        });
                    })
                }
            ]
        },
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeSchema"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["schema"], options?.schema),
        rateLimit: [
            {
                pathMatcher (path) {
                    return path.startsWith("/two-factor/");
                },
                window: 10,
                max: 3
            }
        ],
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"]
    };
};
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=27bc1_better-auth_dist_plugins_two-factor_4bae2f1e._.js.map