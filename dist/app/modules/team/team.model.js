"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
// Team Schema
const UserSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    avatar: { type: String, required: true },
    domain: { type: String, required: true },
    available: { type: Boolean, required: true },
});
const TeamSchema = new mongoose_1.Schema({
    team_name: { type: String, required: true },
    users: [UserSchema],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Team = (0, mongoose_1.model)('Team', TeamSchema);
