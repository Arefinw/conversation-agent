module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/date.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDate",
    ()=>getDate
]);
//#region src/utils/date.ts
const getDate = (span, unit = "ms")=>{
    return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
;
 //# sourceMappingURL=date.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/time.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ms",
    ()=>ms,
    "sec",
    ()=>sec
]);
//#region src/utils/time.ts
const SEC = 1e3;
const MIN = SEC * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
    const match = REGEX.exec(value);
    if (!match || match[4] && match[1]) throw new TypeError(`Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`);
    const n = parseFloat(match[2]);
    const unit = match[3].toLowerCase();
    let result;
    switch(unit){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            result = n * YEAR;
            break;
        case "months":
        case "month":
        case "mo":
            result = n * MONTH;
            break;
        case "weeks":
        case "week":
        case "w":
            result = n * WEEK;
            break;
        case "days":
        case "day":
        case "d":
            result = n * DAY;
            break;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            result = n * HOUR;
            break;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            result = n * MIN;
            break;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            result = n * SEC;
            break;
        default:
            throw new TypeError(`Unknown time unit: "${unit}"`);
    }
    if (match[1] === "-" || match[4] === "ago") return -result;
    return result;
}
/**
* Parse a time string and return the value in milliseconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in milliseconds
* @throws TypeError if the string format is invalid
*
* @example
* ms("1d")          // 86400000
* ms("2 hours")     // 7200000
* ms("30s")         // 30000
* ms("2 hours ago") // -7200000
*/ function ms(value) {
    return parse(value);
}
/**
* Parse a time string and return the value in seconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in seconds (rounded)
* @throws TypeError if the string format is invalid
*
* @example
* sec("1d")          // 86400
* sec("2 hours")     // 7200
* sec("-30s")        // -30
* sec("2 hours ago") // -7200
*/ function sec(value) {
    return Math.round(parse(value) / 1e3);
}
;
 //# sourceMappingURL=time.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/get-request-ip.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIp",
    ()=>getIp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export d as isDevelopment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export p as isTest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
;
;
//#region src/utils/get-request-ip.ts
const LOCALHOST_IP = "127.0.0.1";
function getIp(req, options) {
    if (options.advanced?.ipAddress?.disableIpTracking) return null;
    const headers = "headers" in req ? req.headers : req;
    const ipHeaders = options.advanced?.ipAddress?.ipAddressHeaders || [
        "x-forwarded-for"
    ];
    for (const key of ipHeaders){
        const value = "get" in headers ? headers.get(key) : headers[key];
        if (typeof value === "string") {
            const ip = value.split(",")[0].trim();
            if (isValidIP(ip)) return ip;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__["isTest"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__["isDevelopment"])()) return LOCALHOST_IP;
    return null;
}
function isValidIP(ip) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ipv4"]().safeParse(ip).success) return true;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ipv6"]().safeParse(ip).success) return true;
    return false;
}
;
 //# sourceMappingURL=get-request-ip.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/wildcard.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wildcardMatch",
    ()=>wildcardMatch
]);
//#region src/utils/wildcard.ts
/**
* Escapes a character if it has a special meaning in regular expressions
* and returns the character as is if it doesn't
*/ function escapeRegExpChar(char) {
    if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") return `\\${char}`;
    else return char;
}
/**
* Escapes all characters in a given string that have a special meaning in regular expressions
*/ function escapeRegExpString(str) {
    let result = "";
    for(let i = 0; i < str.length; i++)result += escapeRegExpChar(str[i]);
    return result;
}
/**
* Transforms one or more glob patterns into a RegExp pattern
*/ function transform(pattern, separator = true) {
    if (Array.isArray(pattern)) return `(?:${pattern.map((p)=>`^${transform(p, separator)}$`).join("|")})`;
    let separatorSplitter = "";
    let separatorMatcher = "";
    let wildcard = ".";
    if (separator === true) {
        separatorSplitter = "/";
        separatorMatcher = "[/\\\\]";
        wildcard = "[^/\\\\]";
    } else if (separator) {
        separatorSplitter = separator;
        separatorMatcher = escapeRegExpString(separatorSplitter);
        if (separatorMatcher.length > 1) {
            separatorMatcher = `(?:${separatorMatcher})`;
            wildcard = `((?!${separatorMatcher}).)`;
        } else wildcard = `[^${separatorMatcher}]`;
    }
    let requiredSeparator = separator ? `${separatorMatcher}+?` : "";
    let optionalSeparator = separator ? `${separatorMatcher}*?` : "";
    let segments = separator ? pattern.split(separatorSplitter) : [
        pattern
    ];
    let result = "";
    for(let s = 0; s < segments.length; s++){
        let segment = segments[s];
        let nextSegment = segments[s + 1];
        let currentSeparator = "";
        if (!segment && s > 0) continue;
        if (separator) if (s === segments.length - 1) currentSeparator = optionalSeparator;
        else if (nextSegment !== "**") currentSeparator = requiredSeparator;
        else currentSeparator = "";
        if (separator && segment === "**") {
            if (currentSeparator) {
                result += s === 0 ? "" : currentSeparator;
                result += `(?:${wildcard}*?${currentSeparator})*?`;
            }
            continue;
        }
        for(let c = 0; c < segment.length; c++){
            let char = segment[c];
            if (char === "\\") {
                if (c < segment.length - 1) {
                    result += escapeRegExpChar(segment[c + 1]);
                    c++;
                }
            } else if (char === "?") result += wildcard;
            else if (char === "*") result += `${wildcard}*?`;
            else result += escapeRegExpChar(char);
        }
        result += currentSeparator;
    }
    return result;
}
function isMatch(regexp, sample) {
    if (typeof sample !== "string") throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
    return regexp.test(sample);
}
/**
* Compiles one or more glob patterns into a RegExp and returns an isMatch function.
* The isMatch function takes a sample string as its only argument and returns `true`
* if the string matches the pattern(s).
*
* ```js
* wildcardMatch('src/*.js')('src/index.js') //=> true
* ```
*
* ```js
* const isMatch = wildcardMatch('*.example.com', '.')
* isMatch('foo.example.com') //=> true
* isMatch('foo.bar.com') //=> false
* ```
*/ function wildcardMatch(pattern, options) {
    if (typeof pattern !== "string" && !Array.isArray(pattern)) throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
    if (typeof options === "string" || typeof options === "boolean") options = {
        separator: options
    };
    if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
    options = options || {};
    if (options.separator === "\\") throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
    let regexpPattern = transform(pattern, options.separator);
    let regexp = new RegExp(`^${regexpPattern}$`, options.flags);
    let fn = isMatch.bind(null, regexp);
    fn.options = options;
    fn.pattern = pattern;
    fn.regexp = regexp;
    return fn;
}
;
 //# sourceMappingURL=wildcard.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/hide-metadata.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIDE_METADATA",
    ()=>HIDE_METADATA
]);
//#region src/utils/hide-metadata.ts
const HIDE_METADATA = {
    scope: "server"
};
;
 //# sourceMappingURL=hide-metadata.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$state$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/oauth2/state.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$hide$2d$metadata$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/hide-metadata.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__r__as__generateId$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export r as generateId>");
;
;
;
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/plugin-helper.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEndpointResponse",
    ()=>getEndpointResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
;
//#region src/utils/plugin-helper.ts
const getEndpointResponse = async (ctx)=>{
    const returned = ctx.context.returned;
    if (!returned) return null;
    if (returned instanceof Response) {
        if (returned.status !== 200) return null;
        return await returned.clone().json();
    }
    if (returned instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) return null;
    return returned;
};
;
 //# sourceMappingURL=plugin-helper.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/middleware-response.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "middlewareResponse",
    ()=>middlewareResponse
]);
//#region src/utils/middleware-response.ts
const middlewareResponse = ({ message, status })=>({
        response: new Response(JSON.stringify({
            message
        }), {
            status
        })
    });
;
 //# sourceMappingURL=middleware-response.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/url.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseURL",
    ()=>getBaseURL,
    "getHost",
    ()=>getHost,
    "getOrigin",
    ()=>getOrigin,
    "getProtocol",
    ()=>getProtocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export t as BetterAuthError>");
;
;
//#region src/utils/url.ts
function checkHasPath(url) {
    try {
        return (new URL(url).pathname.replace(/\/+$/, "") || "/") !== "/";
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`);
    }
}
function assertHasProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`, String(error));
    }
}
function withPath(url, path = "/api/auth") {
    assertHasProtocol(url);
    if (checkHasPath(url)) return url;
    const trimmedUrl = url.replace(/\/+$/, "");
    if (!path || path === "/") return trimmedUrl;
    path = path.startsWith("/") ? path : `/${path}`;
    return `${trimmedUrl}${path}`;
}
function validateProxyHeader(header, type) {
    if (!header || header.trim() === "") return false;
    if (type === "proto") return header === "http" || header === "https";
    if (type === "host") {
        if ([
            /\.\./,
            /\0/,
            /[\s]/,
            /^[.]/,
            /[<>'"]/,
            /javascript:/i,
            /file:/i,
            /data:/i
        ].some((pattern)=>pattern.test(header))) return false;
        return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(:[0-9]{1,5})?$/.test(header) || /^(\d{1,3}\.){3}\d{1,3}(:[0-9]{1,5})?$/.test(header) || /^\[[0-9a-fA-F:]+\](:[0-9]{1,5})?$/.test(header) || /^localhost(:[0-9]{1,5})?$/i.test(header);
    }
    return false;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
    if (url) return withPath(url, path);
    if (loadEnv !== false) {
        const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NEXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_AUTH_URL || (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL !== "/" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL : void 0);
        if (fromEnv) return withPath(fromEnv, path);
    }
    const fromRequest = request?.headers.get("x-forwarded-host");
    const fromRequestProto = request?.headers.get("x-forwarded-proto");
    if (fromRequest && fromRequestProto && trustedProxyHeaders) {
        if (validateProxyHeader(fromRequestProto, "proto") && validateProxyHeader(fromRequest, "host")) try {
            return withPath(`${fromRequestProto}://${fromRequest}`, path);
        } catch (_error) {}
    }
    if (request) {
        const url$1 = getOrigin(request.url);
        if (!url$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Could not get origin from request. Please provide a valid base URL.");
        return withPath(url$1, path);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function getOrigin(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin === "null" ? null : parsedUrl.origin;
    } catch  {
        return null;
    }
}
function getProtocol(url) {
    try {
        return new URL(url).protocol;
    } catch  {
        return null;
    }
}
function getHost(url) {
    try {
        return new URL(url).host;
    } catch  {
        return null;
    }
}
;
 //# sourceMappingURL=url.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/boolean.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toBoolean",
    ()=>toBoolean
]);
//#region src/utils/boolean.ts
function toBoolean(value) {
    return value === "true" || value === true;
}
;
 //# sourceMappingURL=boolean.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/shim.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shimContext",
    ()=>shimContext
]);
//#region src/utils/shim.ts
const shimContext = (originalObject, newContext)=>{
    const shimmedObj = {};
    for (const [key, value] of Object.entries(originalObject)){
        shimmedObj[key] = (ctx)=>{
            return value({
                ...ctx,
                context: {
                    ...newContext,
                    ...ctx.context
                }
            });
        };
        shimmedObj[key].path = value.path;
        shimmedObj[key].method = value.method;
        shimmedObj[key].options = value.options;
        shimmedObj[key].headers = value.headers;
    }
    return shimmedObj;
};
;
 //# sourceMappingURL=shim.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/hashing.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toChecksumAddress",
    ()=>toChecksumAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/sha3.js [app-route] (ecmascript)");
;
;
//#region src/utils/hashing.ts
/**
* TS implementation of ERC-55 ("Mixed-case checksum address encoding") using @noble/hashes
* @param address - The address to convert to a checksum address
* @returns The checksummed address
*/ function toChecksumAddress(address) {
    address = address.toLowerCase().replace("0x", "");
    const hash = [
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha3$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["keccak_256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utf8ToBytes"])(address))
    ].map((v)=>v.toString(16).padStart(2, "0")).join("");
    let ret = "0x";
    for(let i = 0; i < 40; i++)if (parseInt(hash[i], 16) >= 8) ret += address[i].toUpperCase();
    else ret += address[i];
    return ret;
}
;
 //# sourceMappingURL=hashing.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/password.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPassword",
    ()=>checkPassword,
    "validatePassword",
    ()=>validatePassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
;
//#region src/utils/password.ts
async function validatePassword(ctx, data) {
    const credentialAccount = (await ctx.context.internalAdapter.findAccounts(data.userId))?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword) return false;
    return await ctx.context.password.verify({
        hash: currentPassword,
        password: data.password
    });
}
async function checkPassword(userId, c) {
    const credentialAccount = (await c.context.internalAdapter.findAccounts(userId))?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword || !c.body.password) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "No password credential found"
    });
    if (!await c.context.password.verify({
        hash: currentPassword,
        password: c.body.password
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Invalid password"
    });
    return true;
}
;
 //# sourceMappingURL=password.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/jwt.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signJWT",
    ()=>signJWT,
    "symmetricDecodeJWT",
    ()=>symmetricDecodeJWT,
    "symmetricEncodeJWT",
    ()=>symmetricEncodeJWT,
    "verifyJWT",
    ()=>verifyJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/hkdf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/sha2.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/encrypt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/util/base64url.js [app-route] (ecmascript) <export * as base64url>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwk/thumbprint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/decrypt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.3/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
;
;
//#region src/crypto/jwt.ts
async function signJWT(payload, secret, expiresIn = 3600) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
    try {
        return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(secret))).payload;
    } catch  {
        return null;
    }
}
const info = new Uint8Array([
    66,
    101,
    116,
    116,
    101,
    114,
    65,
    117,
    116,
    104,
    46,
    106,
    115,
    32,
    71,
    101,
    110,
    101,
    114,
    97,
    116,
    101,
    100,
    32,
    69,
    110,
    99,
    114,
    121,
    112,
    116,
    105,
    111,
    110,
    32,
    75,
    101,
    121
]);
const now = ()=>Date.now() / 1e3 | 0;
const alg = "dir";
const enc = "A256CBC-HS512";
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
    const encryptionSecret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hkdf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"], new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
    const thumbprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateJwkThumbprint"])({
        kty: "oct",
        k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__["base64url"].encode(encryptionSecret)
    }, "sha256");
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EncryptJWT"](payload).setProtectedHeader({
        alg,
        enc,
        kid: thumbprint
    }).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
async function symmetricDecodeJWT(token, secret, salt) {
    if (!token) return null;
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtDecrypt"])(token, async ({ kid })=>{
            const encryptionSecret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hkdf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"], new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
            if (kid === void 0) return encryptionSecret;
            if (kid === await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateJwkThumbprint"])({
                kty: "oct",
                k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$3$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__["base64url"].encode(encryptionSecret)
            }, "sha256")) return encryptionSecret;
            throw new Error("no matching decryption secret");
        }, {
            clockTolerance: 15,
            keyManagementAlgorithms: [
                alg
            ],
            contentEncryptionAlgorithms: [
                enc,
                "A256GCM"
            ]
        });
        return payload;
    } catch  {
        return null;
    }
}
;
 //# sourceMappingURL=jwt.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/buffer.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constantTimeEqual",
    ()=>constantTimeEqual
]);
//#region src/crypto/buffer.ts
/**
* Compare two buffers in constant time.
*/ function constantTimeEqual(a, b) {
    if (typeof a === "string") a = new TextEncoder().encode(a);
    if (typeof b === "string") b = new TextEncoder().encode(b);
    const aBuffer = new Uint8Array(a);
    const bBuffer = new Uint8Array(b);
    let c = aBuffer.length ^ bBuffer.length;
    const length = Math.max(aBuffer.length, bBuffer.length);
    for(let i = 0; i < length; i++)c |= (i < aBuffer.length ? aBuffer[i] : 0) ^ (i < bBuffer.length ? bBuffer[i] : 0);
    return c === 0;
}
;
 //# sourceMappingURL=buffer.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/password.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/buffer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/scrypt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js [app-route] (ecmascript)");
;
;
;
;
;
//#region src/crypto/password.ts
const config = {
    N: 16384,
    r: 16,
    p: 1,
    dkLen: 64
};
async function generateKey(password, salt) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scryptAsync"])(password.normalize("NFKC"), salt, {
        N: config.N,
        p: config.p,
        r: config.r,
        dkLen: config.dkLen,
        maxmem: 128 * config.N * config.r * 2
    });
}
const hashPassword = async (password)=>{
    const salt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode(crypto.getRandomValues(new Uint8Array(16)));
    const key = await generateKey(password, salt);
    return `${salt}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hex"].encode(key)}`;
};
const verifyPassword = async ({ hash, password })=>{
    const [salt, key] = hash.split(":");
    if (!salt || !key) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Invalid password hash");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["constantTimeEqual"])(await generateKey(password, salt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToBytes"])(key));
};
;
 //# sourceMappingURL=password.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateRandomString",
    ()=>generateRandomString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-route] (ecmascript)");
;
//#region src/crypto/random.ts
const generateRandomString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "0-9", "A-Z", "-_");
;
 //# sourceMappingURL=random.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCryptoKey",
    ()=>getCryptoKey,
    "makeSignature",
    ()=>makeSignature,
    "symmetricDecrypt",
    ()=>symmetricDecrypt,
    "symmetricEncrypt",
    ()=>symmetricEncrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$buffer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/buffer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/jwt.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$password$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/password.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/chacha.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.1.1/node_modules/@noble/ciphers/utils.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/crypto/index.ts
const algorithm = {
    name: "HMAC",
    hash: "SHA-256"
};
const symmetricEncrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
};
const symmetricDecrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$1$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
};
const getCryptoKey = async (secret)=>{
    const secretBuf = typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().importKey("raw", secretBuf, algorithm, false, [
        "sign",
        "verify"
    ]);
};
const makeSignature = async (value, secret)=>{
    const key = await getCryptoKey(secret);
    const signature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWebcryptoSubtle"])().sign(algorithm.name, key, new TextEncoder().encode(value));
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/session-store.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAccountStore",
    ()=>createAccountStore,
    "createSessionStore",
    ()=>createSessionStore,
    "getAccountCookie",
    ()=>getAccountCookie,
    "getChunkedCookie",
    ()=>getChunkedCookie,
    "getSessionQuerySchema",
    ()=>getSessionQuerySchema,
    "setAccountCookie",
    ()=>setAccountCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/jwt.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export n as safeJSONParse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
;
;
;
;
//#region src/cookies/session-store.ts
const ALLOWED_COOKIE_SIZE = 4096;
const ESTIMATED_EMPTY_COOKIE_SIZE = 200;
const CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
/**
* Parse cookies from the request headers
*/ function parseCookiesFromContext(ctx) {
    const cookieHeader = ctx.headers?.get("cookie");
    if (!cookieHeader) return {};
    const cookies = {};
    const pairs = cookieHeader.split("; ");
    for (const pair of pairs){
        const [name, ...valueParts] = pair.split("=");
        if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
    }
    return cookies;
}
/**
* Extract the chunk index from a cookie name
*/ function getChunkIndex(cookieName) {
    const parts = cookieName.split(".");
    const lastPart = parts[parts.length - 1];
    const index = parseInt(lastPart || "0", 10);
    return isNaN(index) ? 0 : index;
}
/**
* Read all existing chunks from cookies
*/ function readExistingChunks(cookieName, ctx) {
    const chunks = {};
    const cookies = parseCookiesFromContext(ctx);
    for (const [name, value] of Object.entries(cookies))if (name.startsWith(cookieName)) chunks[name] = value;
    return chunks;
}
/**
* Get the full session data by joining all chunks
*/ function joinChunks(chunks) {
    return Object.keys(chunks).sort((a, b)=>{
        return getChunkIndex(a) - getChunkIndex(b);
    }).map((key)=>chunks[key]).join("");
}
/**
* Split a cookie value into chunks if needed
*/ function chunkCookie(storeName, cookie, chunks, logger) {
    const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
    if (chunkCount === 1) {
        chunks[cookie.name] = cookie.value;
        return [
            cookie
        ];
    }
    const cookies = [];
    for(let i = 0; i < chunkCount; i++){
        const name = `${cookie.name}.${i}`;
        const start = i * CHUNK_SIZE;
        const value = cookie.value.substring(start, start + CHUNK_SIZE);
        cookies.push({
            ...cookie,
            name,
            value
        });
        chunks[name] = value;
    }
    logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
        message: `${storeName} cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunkCount,
        chunks: cookies.map((c)=>c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
    });
    return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/ function getCleanCookies(chunks, cookieOptions) {
    const cleanedChunks = {};
    for(const name in chunks)cleanedChunks[name] = {
        name,
        value: "",
        options: {
            ...cookieOptions,
            maxAge: 0
        }
    };
    return cleanedChunks;
}
/**
* Create a session store for handling cookie chunking.
* When session data exceeds 4KB, it automatically splits it into multiple cookies.
*
* Based on next-auth's SessionStore implementation.
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/ const storeFactory = (storeName)=>(cookieName, cookieOptions, ctx)=>{
        const chunks = readExistingChunks(cookieName, ctx);
        const logger = ctx.context.logger;
        return {
            getValue () {
                return joinChunks(chunks);
            },
            hasChunks () {
                return Object.keys(chunks).length > 0;
            },
            chunk (value, options) {
                const cleanedChunks = getCleanCookies(chunks, cookieOptions);
                for(const name in chunks)delete chunks[name];
                const cookies = cleanedChunks;
                const chunked = chunkCookie(storeName, {
                    name: cookieName,
                    value,
                    options: {
                        ...cookieOptions,
                        ...options
                    }
                }, chunks, logger);
                for (const chunk of chunked)cookies[chunk.name] = chunk;
                return Object.values(cookies);
            },
            clean () {
                const cleanedChunks = getCleanCookies(chunks, cookieOptions);
                for(const name in chunks)delete chunks[name];
                return Object.values(cleanedChunks);
            },
            setCookies (cookies) {
                for (const cookie of cookies)ctx.setCookie(cookie.name, cookie.value, cookie.options);
            }
        };
    };
const createSessionStore = storeFactory("Session");
const createAccountStore = storeFactory("Account");
function getChunkedCookie(ctx, cookieName) {
    const value = ctx.getCookie(cookieName);
    if (value) return value;
    const chunks = [];
    const cookieHeader = ctx.headers?.get("cookie");
    if (!cookieHeader) return null;
    const cookies = {};
    const pairs = cookieHeader.split("; ");
    for (const pair of pairs){
        const [name, ...valueParts] = pair.split("=");
        if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
    }
    for (const [name, val] of Object.entries(cookies))if (name.startsWith(cookieName + ".")) {
        const indexStr = name.split(".").at(-1);
        const index = parseInt(indexStr || "0", 10);
        if (!isNaN(index)) chunks.push({
            index,
            value: val
        });
    }
    if (chunks.length > 0) {
        chunks.sort((a, b)=>a.index - b.index);
        return chunks.map((c)=>c.value).join("");
    }
    return null;
}
async function setAccountCookie(c, accountData) {
    const accountDataCookie = c.context.authCookies.accountData;
    const options = {
        maxAge: 300,
        ...accountDataCookie.options
    };
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["symmetricEncodeJWT"])(accountData, c.context.secret, "better-auth-account", options.maxAge);
    if (data.length > ALLOWED_COOKIE_SIZE) {
        const accountStore = createAccountStore(accountDataCookie.name, options, c);
        const cookies = accountStore.chunk(data, options);
        accountStore.setCookies(cookies);
    } else {
        const accountStore = createAccountStore(accountDataCookie.name, options, c);
        if (accountStore.hasChunks()) {
            const cleanCookies = accountStore.clean();
            accountStore.setCookies(cleanCookies);
        }
        c.setCookie(accountDataCookie.name, data, options);
    }
}
async function getAccountCookie(c) {
    const accountCookie = getChunkedCookie(c, c.context.authCookies.accountData.name);
    if (accountCookie) {
        const accountData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["symmetricDecodeJWT"])(accountCookie, c.context.secret, "better-auth-account"));
        if (accountData) return accountData;
    }
    return null;
}
const getSessionQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optional"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
    disableCookieCache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerce"].boolean().meta({
        description: "Disable cookie cache and fetch session from database"
    }).optional(),
    disableRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerce"].boolean().meta({
        description: "Disable session refresh. Useful for checking session status, without updating the session"
    }).optional()
}));
;
 //# sourceMappingURL=session-store.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/cookie-utils.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSetCookieHeader",
    ()=>parseSetCookieHeader,
    "setCookieToHeader",
    ()=>setCookieToHeader
]);
//#region src/cookies/cookie-utils.ts
function parseSetCookieHeader(setCookie) {
    const cookies = /* @__PURE__ */ new Map();
    setCookie.split(", ").forEach((cookieString)=>{
        const [nameValue, ...attributes] = cookieString.split(";").map((part)=>part.trim());
        const [name, ...valueParts] = (nameValue || "").split("=");
        const value = valueParts.join("=");
        if (!name || value === void 0) return;
        const attrObj = {
            value
        };
        attributes.forEach((attribute)=>{
            const [attrName, ...attrValueParts] = attribute.split("=");
            const attrValue = attrValueParts.join("=");
            const normalizedAttrName = attrName.trim().toLowerCase();
            switch(normalizedAttrName){
                case "max-age":
                    attrObj["max-age"] = attrValue ? parseInt(attrValue.trim(), 10) : void 0;
                    break;
                case "expires":
                    attrObj.expires = attrValue ? new Date(attrValue.trim()) : void 0;
                    break;
                case "domain":
                    attrObj.domain = attrValue ? attrValue.trim() : void 0;
                    break;
                case "path":
                    attrObj.path = attrValue ? attrValue.trim() : void 0;
                    break;
                case "secure":
                    attrObj.secure = true;
                    break;
                case "httponly":
                    attrObj.httponly = true;
                    break;
                case "samesite":
                    attrObj.samesite = attrValue ? attrValue.trim().toLowerCase() : void 0;
                    break;
                default:
                    attrObj[normalizedAttrName] = attrValue ? attrValue.trim() : true;
                    break;
            }
        });
        cookies.set(name, attrObj);
    });
    return cookies;
}
function setCookieToHeader(headers) {
    return (context)=>{
        const setCookieHeader = context.response.headers.get("set-cookie");
        if (!setCookieHeader) return;
        const cookieMap = /* @__PURE__ */ new Map();
        (headers.get("cookie") || "").split(";").forEach((cookie)=>{
            const [name, ...rest] = cookie.trim().split("=");
            if (name && rest.length > 0) cookieMap.set(name, rest.join("="));
        });
        setCookieHeader.split(",").forEach((header)=>{
            parseSetCookieHeader(header).forEach((value, name)=>{
                cookieMap.set(name, value.value);
            });
        });
        const updatedCookies = Array.from(cookieMap.entries()).map(([name, value])=>`${name}=${value}`).join("; ");
        headers.set("cookie", updatedCookies);
    };
}
;
 //# sourceMappingURL=cookie-utils.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCookieGetter",
    ()=>createCookieGetter,
    "deleteSessionCookie",
    ()=>deleteSessionCookie,
    "getCookieCache",
    ()=>getCookieCache,
    "getCookies",
    ()=>getCookies,
    "getSessionCookie",
    ()=>getSessionCookie,
    "parseCookies",
    ()=>parseCookies,
    "setCookieCache",
    ()=>setCookieCache,
    "setSessionCookie",
    ()=>setSessionCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/date.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/db/schema.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/jwt.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/session-store.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/utils/time.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$cookie$2d$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/cookie-utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export f as isProduction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/error-CzMAIrPb.mjs [app-route] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/utils-NloIXYE0.mjs [app-route] (ecmascript) <export n as safeJSONParse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-route] (ecmascript)");
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
//#region src/cookies/index.ts
function createCookieGetter(options) {
    const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : options.baseURL !== void 0 ? options.baseURL.startsWith("https://") ? true : false : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"]) ? "__Secure-" : "";
    const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
    const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (options.baseURL ? new URL(options.baseURL).hostname : void 0) : void 0;
    if (crossSubdomainEnabled && !domain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("baseURL is required when crossSubdomainCookies are enabled");
    function createCookie(cookieName, overrideAttributes = {}) {
        const prefix = options.advanced?.cookiePrefix || "better-auth";
        const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
        const attributes = options.advanced?.cookies?.[cookieName]?.attributes;
        return {
            name: `${secureCookiePrefix}${name}`,
            attributes: {
                secure: !!secureCookiePrefix,
                sameSite: "lax",
                path: "/",
                httpOnly: true,
                ...crossSubdomainEnabled ? {
                    domain
                } : {},
                ...options.advanced?.defaultCookieAttributes,
                ...overrideAttributes,
                ...attributes
            }
        };
    }
    return createCookie;
}
function getCookies(options) {
    const createCookie = createCookieGetter(options);
    const sessionToken = createCookie("session_token", {
        maxAge: options.session?.expiresIn || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$time$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sec"])("7d")
    });
    const sessionData = createCookie("session_data", {
        maxAge: options.session?.cookieCache?.maxAge || 300
    });
    const accountData = createCookie("account_data", {
        maxAge: options.session?.cookieCache?.maxAge || 300
    });
    const dontRememberToken = createCookie("dont_remember");
    return {
        sessionToken: {
            name: sessionToken.name,
            options: sessionToken.attributes
        },
        sessionData: {
            name: sessionData.name,
            options: sessionData.attributes
        },
        dontRememberToken: {
            name: dontRememberToken.name,
            options: dontRememberToken.attributes
        },
        accountData: {
            name: accountData.name,
            options: accountData.attributes
        }
    };
}
async function setCookieCache(ctx, session, dontRememberMe) {
    if (ctx.context.options.session?.cookieCache?.enabled) {
        const filteredSession = Object.entries(session.session).reduce((acc, [key, value])=>{
            const fieldConfig = ctx.context.options.session?.additionalFields?.[key];
            if (!fieldConfig || fieldConfig.returned !== false) acc[key] = value;
            return acc;
        }, {});
        const filteredUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$db$2f$schema$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUserOutput"])(ctx.context.options, session.user);
        const versionConfig = ctx.context.options.session?.cookieCache?.version;
        let version = "1";
        if (versionConfig) {
            if (typeof versionConfig === "string") version = versionConfig;
            else if (typeof versionConfig === "function") {
                const result = versionConfig(session.session, session.user);
                version = result instanceof Promise ? await result : result;
            }
        }
        const sessionData = {
            session: filteredSession,
            user: filteredUser,
            updatedAt: Date.now(),
            version
        };
        const options = {
            ...ctx.context.authCookies.sessionData.options,
            maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.options.maxAge
        };
        const expiresAtDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$date$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDate"])(options.maxAge || 60, "sec").getTime();
        const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
        let data;
        if (strategy === "jwe") data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["symmetricEncodeJWT"])(sessionData, ctx.context.secret, "better-auth-session", options.maxAge || 300);
        else if (strategy === "jwt") data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signJWT"])(sessionData, ctx.context.secret, options.maxAge || 300);
        else data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64Url"].encode(JSON.stringify({
            session: sessionData,
            expiresAt: expiresAtDate,
            signature: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
                ...sessionData,
                expiresAt: expiresAtDate
            }))
        }), {
            padding: false
        });
        if (data.length > 4093) {
            const sessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionStore"])(ctx.context.authCookies.sessionData.name, options, ctx);
            const cookies = sessionStore.chunk(data, options);
            sessionStore.setCookies(cookies);
        } else {
            const sessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionStore"])(ctx.context.authCookies.sessionData.name, options, ctx);
            if (sessionStore.hasChunks()) {
                const cleanCookies = sessionStore.clean();
                sessionStore.setCookies(cleanCookies);
            }
            ctx.setCookie(ctx.context.authCookies.sessionData.name, data, options);
        }
    }
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
    const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
    dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
    const options = ctx.context.authCookies.sessionToken.options;
    const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
    await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
        ...options,
        maxAge,
        ...overrides
    });
    if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.options);
    await setCookieCache(ctx, session, dontRememberMe);
    ctx.context.setNewSession(session);
    /**
	* If secondary storage is enabled, store the session data in the secondary storage
	* This is useful if the session got updated and we want to update the session data in the
	* secondary storage
	*/ if (ctx.context.options.secondaryStorage) await ctx.context.secondaryStorage?.set(session.session.token, JSON.stringify({
        user: session.user,
        session: session.session
    }), Math.floor((new Date(session.session.expiresAt).getTime() - Date.now()) / 1e3));
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
    ctx.setCookie(ctx.context.authCookies.sessionToken.name, "", {
        ...ctx.context.authCookies.sessionToken.options,
        maxAge: 0
    });
    ctx.setCookie(ctx.context.authCookies.sessionData.name, "", {
        ...ctx.context.authCookies.sessionData.options,
        maxAge: 0
    });
    if (ctx.context.options.account?.storeAccountCookie) {
        ctx.setCookie(ctx.context.authCookies.accountData.name, "", {
            ...ctx.context.authCookies.accountData.options,
            maxAge: 0
        });
        const accountStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAccountStore"])(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.options, ctx);
        const cleanCookies$1 = accountStore.clean();
        accountStore.setCookies(cleanCookies$1);
    }
    if (ctx.context.oauthConfig.storeStateStrategy === "cookie") {
        const stateCookie = ctx.context.createAuthCookie("oauth_state");
        ctx.setCookie(stateCookie.name, "", {
            ...stateCookie.attributes,
            maxAge: 0
        });
    }
    const sessionStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSessionStore"])(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.options, ctx);
    const cleanCookies = sessionStore.clean();
    sessionStore.setCookies(cleanCookies);
    if (!skipDontRememberMe) ctx.setCookie(ctx.context.authCookies.dontRememberToken.name, "", {
        ...ctx.context.authCookies.dontRememberToken.options,
        maxAge: 0
    });
}
function parseCookies(cookieHeader) {
    const cookies = cookieHeader.split("; ");
    const cookieMap = /* @__PURE__ */ new Map();
    cookies.forEach((cookie)=>{
        const [name, value] = cookie.split(/=(.*)/s);
        cookieMap.set(name, value);
    });
    return cookieMap;
}
const getSessionCookie = (request, config)=>{
    if (config?.cookiePrefix) if (config.cookieName) config.cookiePrefix = `${config.cookiePrefix}-`;
    else config.cookiePrefix = `${config.cookiePrefix}.`;
    const cookies = ("headers" in request ? request.headers : request).get("cookie");
    if (!cookies) return null;
    const { cookieName = "session_token", cookiePrefix = "better-auth." } = config || {};
    const name = `${cookiePrefix}${cookieName}`;
    const secureCookieName = `__Secure-${name}`;
    const parsedCookie = parseCookies(cookies);
    const sessionToken = parsedCookie.get(name) || parsedCookie.get(secureCookieName);
    if (sessionToken) return sessionToken;
    return null;
};
const getCookieCache = async (request, config)=>{
    const cookies = (request instanceof Headers ? request : request.headers).get("cookie");
    if (!cookies) return null;
    const { cookieName = "session_data", cookiePrefix = "better-auth" } = config || {};
    const name = config?.isSecure !== void 0 ? config.isSecure ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"] ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}`;
    const parsedCookie = parseCookies(cookies);
    let sessionData = parsedCookie.get(name);
    if (!sessionData) {
        const chunks = [];
        for (const [cookieName$1, value] of parsedCookie.entries())if (cookieName$1.startsWith(name + ".")) {
            const parts = cookieName$1.split(".");
            const indexStr = parts[parts.length - 1];
            const index = parseInt(indexStr || "0", 10);
            if (!isNaN(index)) chunks.push({
                index,
                value
            });
        }
        if (chunks.length > 0) {
            chunks.sort((a, b)=>a.index - b.index);
            sessionData = chunks.map((c)=>c.value).join("");
        }
    }
    if (sessionData) {
        const secret = config?.secret || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_SECRET;
        if (!secret) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CzMAIrPb$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("getCookieCache requires a secret to be provided. Either pass it as an option or set the BETTER_AUTH_SECRET environment variable");
        const strategy = config?.strategy || "compact";
        if (strategy === "jwe") {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["symmetricDecodeJWT"])(sessionData, secret, "better-auth-session");
            if (payload && payload.session && payload.user) {
                if (config?.version) {
                    const cookieVersion = payload.version || "1";
                    let expectedVersion = "1";
                    if (typeof config.version === "string") expectedVersion = config.version;
                    else if (typeof config.version === "function") {
                        const result = config.version(payload.session, payload.user);
                        expectedVersion = result instanceof Promise ? await result : result;
                    }
                    if (cookieVersion !== expectedVersion) return null;
                }
                return payload;
            }
            return null;
        } else if (strategy === "jwt") {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$jwt$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyJWT"])(sessionData, secret);
            if (payload && payload.session && payload.user) {
                if (config?.version) {
                    const cookieVersion = payload.version || "1";
                    let expectedVersion = "1";
                    if (typeof config.version === "string") expectedVersion = config.version;
                    else if (typeof config.version === "function") {
                        const result = config.version(payload.session, payload.user);
                        expectedVersion = result instanceof Promise ? await result : result;
                    }
                    if (cookieVersion !== expectedVersion) return null;
                }
                return payload;
            }
            return null;
        } else {
            const sessionDataPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$NloIXYE0$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__safeJSONParse$3e$__["safeJSONParse"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["binary"].decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["base64Url"].decode(sessionData)));
            if (!sessionDataPayload) return null;
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").verify(secret, JSON.stringify({
                ...sessionDataPayload.session,
                expiresAt: sessionDataPayload.expiresAt
            }), sessionDataPayload.signature)) return null;
            if (config?.version && sessionDataPayload.session) {
                const cookieVersion = sessionDataPayload.session.version || "1";
                let expectedVersion = "1";
                if (typeof config.version === "string") expectedVersion = config.version;
                else if (typeof config.version === "function") {
                    const result = config.version(sessionDataPayload.session.session, sessionDataPayload.session.user);
                    expectedVersion = result instanceof Promise ? await result : result;
                }
                if (cookieVersion !== expectedVersion) return null;
            }
            return sessionDataPayload.session;
        }
    }
    return null;
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/_virtual/rolldown_runtime.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__export",
    ()=>__export,
    "__reExport",
    ()=>__reExport
]);
//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (all, symbols)=>{
    let target = {};
    for(var name in all){
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    }
    if (symbols) {
        __defProp(target, Symbol.toStringTag, {
            value: "Module"
        });
    }
    return target;
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for(var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++){
            key = keys[i];
            if (!__hasOwnProp.call(to, key) && key !== except) {
                __defProp(to, key, {
                    get: ((k)=>from[k]).bind(null, key),
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            }
        }
    }
    return to;
};
var __reExport = (target, mod, secondTarget, symbols)=>{
    if (symbols) {
        __defProp(target, Symbol.toStringTag, {
            value: "Module"
        });
        secondTarget && __defProp(secondTarget, Symbol.toStringTag, {
            value: "Module"
        });
    }
    __copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/dialect.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createKyselyAdapter",
    ()=>createKyselyAdapter,
    "getKyselyDatabaseType",
    ()=>getKyselyDatabaseType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/kysely.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/dialect/mssql/mssql-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.10/node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect.js [app-route] (ecmascript)");
;
//#region src/adapters/kysely-adapter/dialect.ts
function getKyselyDatabaseType(db) {
    if (!db) return null;
    if ("dialect" in db) return getKyselyDatabaseType(db.dialect);
    if ("createDriver" in db) {
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SqliteDialect"]) return "sqlite";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MysqlDialect"]) return "mysql";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresDialect"]) return "postgres";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MssqlDialect"]) return "mssql";
    }
    if ("aggregate" in db) return "sqlite";
    if ("getConnection" in db) return "mysql";
    if ("connect" in db) return "postgres";
    if ("fileControl" in db) return "sqlite";
    if ("open" in db && "close" in db && "prepare" in db) return "sqlite";
    return null;
}
const createKyselyAdapter = async (config)=>{
    const db = config.database;
    if (!db) return {
        kysely: null,
        databaseType: null,
        transaction: void 0
    };
    if ("db" in db) return {
        kysely: db.db,
        databaseType: db.type,
        transaction: db.transaction
    };
    if ("dialect" in db) return {
        kysely: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kysely"]({
            dialect: db.dialect
        }),
        databaseType: db.type,
        transaction: db.transaction
    };
    let dialect = void 0;
    const databaseType = getKyselyDatabaseType(db);
    if ("createDriver" in db) dialect = db;
    if ("aggregate" in db && !("createSession" in db)) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SqliteDialect"]({
        database: db
    });
    if ("getConnection" in db) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MysqlDialect"](db);
    if ("connect" in db) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresDialect"]({
        pool: db
    });
    if ("fileControl" in db) {
        const { BunSqliteDialect } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/bun-sqlite-dialect.mjs [app-route] (ecmascript, async loader)");
        dialect = new BunSqliteDialect({
            database: db
        });
    }
    if ("createSession" in db && ("TURBOPACK compile-time value", "undefined") === "undefined") {
        let DatabaseSync = void 0;
        try {
            let nodeSqlite = "node:sqlite";
            ({ DatabaseSync } = await import(/* @vite-ignore */ /* webpackIgnore: true */ nodeSqlite));
        } catch (error) {
            if (error !== null && typeof error === "object" && "code" in error && error.code !== "ERR_UNKNOWN_BUILTIN_MODULE") throw error;
        }
        if (DatabaseSync && db instanceof DatabaseSync) {
            const { NodeSqliteDialect } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/adapters/kysely-adapter/node-sqlite-dialect.mjs [app-route] (ecmascript, async loader)");
            dialect = new NodeSqliteDialect({
                database: db
            });
        }
    }
    return {
        kysely: dialect ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$10$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Kysely"]({
            dialect
        }) : null,
        databaseType,
        transaction: void 0
    };
};
;
 //# sourceMappingURL=dialect.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/oauth2/state.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateState",
    ()=>generateState,
    "parseState",
    ()=>parseState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$oauth$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/middlewares/oauth.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/random.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/schemas.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.3.5/node_modules/zod/v4/classic/external.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
;
;
;
;
;
//#region src/oauth2/state.ts
async function generateState(c, link, additionalData) {
    const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
    if (!callbackURL) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "callbackURL is required"
    });
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(128);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$random$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRandomString"])(32);
    const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
    const stateData = {
        ...additionalData ? additionalData : {},
        callbackURL,
        codeVerifier,
        errorURL: c.body?.errorCallbackURL,
        newUserURL: c.body?.newUserCallbackURL,
        link,
        expiresAt: Date.now() + 600 * 1e3,
        requestSignUp: c.body?.requestSignUp,
        state
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$oauth$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setOAuthState"])(stateData);
    if (storeStateStrategy === "cookie") {
        const encryptedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
            key: c.context.secret,
            data: JSON.stringify(stateData)
        });
        const stateCookie$1 = c.context.createAuthCookie("oauth_state", {
            maxAge: 600 * 1e3
        });
        c.setCookie(stateCookie$1.name, encryptedData, stateCookie$1.attributes);
        return {
            state,
            codeVerifier
        };
    }
    const stateCookie = c.context.createAuthCookie("state", {
        maxAge: 300 * 1e3
    });
    await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
    const expiresAt = /* @__PURE__ */ new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);
    const verification = await c.context.internalAdapter.createVerificationValue({
        value: JSON.stringify(stateData),
        identifier: state,
        expiresAt
    });
    if (!verification) {
        c.context.logger.error("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Unable to create verification"
        });
    }
    return {
        state: verification.identifier,
        codeVerifier
    };
}
async function parseState(c) {
    const state = c.query.state || c.body.state;
    const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
    const stateDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["looseObject"]({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"](),
        codeVerifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"](),
        errorURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().optional(),
        newUserURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().optional(),
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["number"](),
        link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["object"]({
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"](),
            userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["coerce"].string()
        }).optional(),
        requestSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"]().optional(),
        state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$3$2e$5$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["string"]().optional()
    });
    let parsedData;
    /**
	* This is generally cause security issue and should only be used in
	* dev or staging environments. It's currently used by the oauth-proxy
	* plugin
	*/ const skipStateCookieCheck = c.context.oauthConfig?.skipStateCookieCheck;
    if (storeStateStrategy === "cookie") {
        const stateCookie = c.context.createAuthCookie("oauth_state");
        const encryptedData = c.getCookie(stateCookie.name);
        if (!encryptedData) {
            c.context.logger.error("State Mismatch. OAuth state cookie not found", {
                state
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        try {
            const decryptedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
                key: c.context.secret,
                data: encryptedData
            });
            parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
        } catch (error) {
            c.context.logger.error("Failed to decrypt or parse OAuth state cookie", {
                error
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        if (!c.context.oauthConfig?.skipStateCookieCheck && parsedData.state && parsedData.state !== state) {
            c.context.logger.error("State Mismatch. State parameter does not match", {
                expected: parsedData.state,
                received: state
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=state_mismatch`);
        }
        c.setCookie(stateCookie.name, "", {
            maxAge: 0
        });
    } else {
        const data = await c.context.internalAdapter.findVerificationValue(state);
        if (!data) {
            c.context.logger.error("State Mismatch. Verification not found", {
                state
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        parsedData = stateDataSchema.parse(JSON.parse(data.value));
        const stateCookie = c.context.createAuthCookie("state");
        const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
        if (!skipStateCookieCheck && (!stateCookieValue || stateCookieValue !== state)) {
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=state_mismatch`);
        }
        c.setCookie(stateCookie.name, "", {
            maxAge: 0
        });
        await c.context.internalAdapter.deleteVerificationValue(data.id);
    }
    if (!parsedData.errorURL) parsedData.errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    if (parsedData.expiresAt < Date.now()) {
        const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
        throw c.redirect(`${errorURL}?error=please_restart_the_process`);
    }
    if (parsedData) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$middlewares$2f$oauth$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setOAuthState"])(parsedData);
    return parsedData;
}
;
 //# sourceMappingURL=state.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/oauth2/utils.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptOAuthToken",
    ()=>decryptOAuthToken,
    "setTokenUtil",
    ()=>setTokenUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/crypto/index.mjs [app-route] (ecmascript) <locals>");
;
//#region src/oauth2/utils.ts
function decryptOAuthToken(token, ctx) {
    if (!token) return token;
    if (ctx.options.account?.encryptOAuthTokens) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricDecrypt"])({
        key: ctx.secret,
        data: token
    });
    return token;
}
function setTokenUtil(token, ctx) {
    if (ctx.options.account?.encryptOAuthTokens && token) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["symmetricEncrypt"])({
        key: ctx.secret,
        data: token
    });
    return token;
}
;
 //# sourceMappingURL=utils.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/oauth2/link-account.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleOAuthUserInfo",
    ()=>handleOAuthUserInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/cookies/session-store.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/oauth2/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$email$2d$verification$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/routes/email-verification.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/api/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.7_zod@4.3.5/node_modules/better-call/dist/error.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export d as isDevelopment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.9_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.21_better-call_a7acfc47a46e60e6562bd24737ea2ee5/node_modules/@better-auth/core/dist/env-DbssmzoK.mjs [app-route] (ecmascript) <export i as logger>");
;
;
;
;
;
//#region src/oauth2/link-account.ts
async function handleOAuthUserInfo(c, opts) {
    const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } = opts;
    const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("Better auth was unable to query your database.\nError: ", e);
        const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
        throw c.redirect(`${errorURL}?error=internal_server_error`);
    });
    let user = dbUser?.user;
    let isRegister = !user;
    if (dbUser) {
        const hasBeenLinked = dbUser.accounts.find((a)=>a.providerId === account.providerId && a.accountId === account.accountId);
        if (!hasBeenLinked) {
            const trustedProviders = c.context.options.account?.accountLinking?.trustedProviders;
            if (!(opts.isTrustedProvider || trustedProviders?.includes(account.providerId)) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__["isDevelopment"])()) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
                return {
                    error: "account not linked",
                    data: null
                };
            }
            try {
                await c.context.internalAdapter.linkAccount({
                    providerId: account.providerId,
                    accountId: userInfo.id.toString(),
                    userId: dbUser.user.id,
                    accessToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.accessToken, c.context),
                    refreshToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.refreshToken, c.context),
                    idToken: account.idToken,
                    accessTokenExpiresAt: account.accessTokenExpiresAt,
                    refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                    scope: account.scope
                });
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("Unable to link account", e);
                return {
                    error: "unable to link account",
                    data: null
                };
            }
            if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, {
                emailVerified: true
            });
        } else {
            if (c.context.options.account?.updateAccountOnSignIn !== false) {
                const updateData = Object.fromEntries(Object.entries({
                    idToken: account.idToken,
                    accessToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.accessToken, c.context),
                    refreshToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.refreshToken, c.context),
                    accessTokenExpiresAt: account.accessTokenExpiresAt,
                    refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                    scope: account.scope
                }).filter(([_, value])=>value !== void 0));
                if (c.context.options.account?.storeAccountCookie) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setAccountCookie"])(c, {
                    ...account,
                    ...updateData
                });
                if (Object.keys(updateData).length > 0) await c.context.internalAdapter.updateAccount(hasBeenLinked.id, updateData);
            }
            if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, {
                emailVerified: true
            });
        }
        if (overrideUserInfo) {
            const { id: _, ...restUserInfo } = userInfo;
            user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
                ...restUserInfo,
                email: userInfo.email.toLowerCase(),
                emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
            });
        }
    } else {
        if (disableSignUp) return {
            error: "signup disabled",
            data: null,
            isRegister: false
        };
        try {
            const { id: _, ...restUserInfo } = userInfo;
            const accountData = {
                accessToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.accessToken, c.context),
                refreshToken: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$oauth2$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setTokenUtil"])(account.refreshToken, c.context),
                idToken: account.idToken,
                accessTokenExpiresAt: account.accessTokenExpiresAt,
                refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                scope: account.scope,
                providerId: account.providerId,
                accountId: userInfo.id.toString()
            };
            const { user: createdUser, account: createdAccount } = await c.context.internalAdapter.createOAuthUser({
                ...restUserInfo,
                email: userInfo.email.toLowerCase()
            }, accountData);
            user = createdUser;
            if (c.context.options.account?.storeAccountCookie) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2f$session$2d$store$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setAccountCookie"])(c, createdAccount);
            if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp && c.context.options.emailVerification?.sendVerificationEmail) {
                const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$9_drizzle$2d$kit$40$0$2e$31$2e$8_drizzle$2d$orm$40$0$2e$45$2e$1_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types_2c2f84378f2ef24b1a7bf909953e43a4$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2f$routes$2f$email$2d$verification$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEmailVerificationToken"])(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
                const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
                await c.context.runInBackgroundOrAwait(c.context.options.emailVerification.sendVerificationEmail({
                    user,
                    url,
                    token
                }, c.request));
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$9_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$21_better$2d$call_a7acfc47a46e60e6562bd24737ea2ee5$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DbssmzoK$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error(e);
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$7_zod$40$4$2e$3$2e$5$2f$node_modules$2f$better$2d$call$2f$dist$2f$error$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]) return {
                error: e.message,
                data: null,
                isRegister: false
            };
            return {
                error: "unable to create user",
                data: null,
                isRegister: false
            };
        }
    }
    if (!user) return {
        error: "unable to create user",
        data: null,
        isRegister: false
    };
    const session = await c.context.internalAdapter.createSession(user.id);
    if (!session) return {
        error: "unable to create session",
        data: null,
        isRegister: false
    };
    return {
        data: {
            session,
            user
        },
        error: null,
        isRegister
    };
}
;
 //# sourceMappingURL=link-account.mjs.map
}),
"[project]/node_modules/.pnpm/better-auth@1.4.9_drizzle-kit@0.31.8_drizzle-orm@0.45.1_@opentelemetry+api@1.9.0_@types_2c2f84378f2ef24b1a7bf909953e43a4/node_modules/better-auth/dist/client/parser.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseJSON",
    ()=>parseJSON
]);
//#region src/client/parser.ts
const PROTO_POLLUTION_PATTERNS = {
    proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/
};
const JSON_SIGNATURE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
const SPECIAL_VALUES = {
    true: true,
    false: false,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: Number.POSITIVE_INFINITY,
    "-infinity": Number.NEGATIVE_INFINITY
};
const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
function parseISODate(value) {
    const match = ISO_DATE_REGEX.exec(value);
    if (!match) return null;
    const [, year, month, day, hour, minute, second, ms, offsetSign, offsetHour, offsetMinute] = match;
    let date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(second, 10), ms ? parseInt(ms.padEnd(3, "0"), 10) : 0));
    if (offsetSign) {
        const offset = (parseInt(offsetHour, 10) * 60 + parseInt(offsetMinute, 10)) * (offsetSign === "+" ? -1 : 1);
        date.setUTCMinutes(date.getUTCMinutes() + offset);
    }
    return isValidDate(date) ? date : null;
}
function betterJSONParse(value, options = {}) {
    const { strict = false, warnings = false, reviver, parseDates = true } = options;
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    if (trimmed.length > 0 && trimmed[0] === "\"" && trimmed.endsWith("\"") && !trimmed.slice(1, -1).includes("\"")) return trimmed.slice(1, -1);
    const lowerValue = trimmed.toLowerCase();
    if (lowerValue.length <= 9 && lowerValue in SPECIAL_VALUES) return SPECIAL_VALUES[lowerValue];
    if (!JSON_SIGNATURE.test(trimmed)) {
        if (strict) throw new SyntaxError("[better-json] Invalid JSON");
        return value;
    }
    if (Object.entries(PROTO_POLLUTION_PATTERNS).some(([key, pattern])=>{
        const matches = pattern.test(trimmed);
        if (matches && warnings) console.warn(`[better-json] Detected potential prototype pollution attempt using ${key} pattern`);
        return matches;
    }) && strict) throw new Error("[better-json] Potential prototype pollution attempt detected");
    try {
        const secureReviver = (key, value$1)=>{
            if (key === "__proto__" || key === "constructor" && value$1 && typeof value$1 === "object" && "prototype" in value$1) {
                if (warnings) console.warn(`[better-json] Dropping "${key}" key to prevent prototype pollution`);
                return;
            }
            if (parseDates && typeof value$1 === "string") {
                const date = parseISODate(value$1);
                if (date) return date;
            }
            return reviver ? reviver(key, value$1) : value$1;
        };
        return JSON.parse(trimmed, secureReviver);
    } catch (error) {
        if (strict) throw error;
        return value;
    }
}
function parseJSON(value, options = {
    strict: true
}) {
    return betterJSONParse(value, options);
}
;
 //# sourceMappingURL=parser.mjs.map
}),
];

//# sourceMappingURL=27bc1_better-auth_dist_1fa27c13._.js.map