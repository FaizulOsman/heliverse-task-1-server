"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamValidation = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    gender: zod_1.z.string().optional(),
    avatar: zod_1.z.string().optional(),
    domain: zod_1.z.string().optional(),
    available: zod_1.z.boolean().optional(),
});
const createTeamZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        team_name: zod_1.z.string(),
        users: zod_1.z.array(userSchema),
    }),
});
exports.TeamValidation = {
    createTeamZodValidation,
};
