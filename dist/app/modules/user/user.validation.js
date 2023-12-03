"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        first_name: zod_1.z.string(),
        last_name: zod_1.z.string(),
        email: zod_1.z.string(),
        gender: zod_1.z.string(),
        avatar: zod_1.z.string(),
        domain: zod_1.z.string(),
        available: zod_1.z.boolean(),
    }),
});
const updateUserZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        first_name: zod_1.z.string().optional(),
        last_name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        gender: zod_1.z.string().optional(),
        avatar: zod_1.z.string().optional(),
        domain: zod_1.z.string().optional(),
        available: zod_1.z.boolean().optional(),
    }),
});
exports.UserValidation = {
    createUserZodValidation,
    updateUserZodValidation,
};
