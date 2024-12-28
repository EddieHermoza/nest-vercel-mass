"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
exports.formatDate = formatDate;
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
function formatDate(date) {
    const zonedDate = (0, date_fns_tz_1.toZonedTime)(date, 'America/Lima');
    return (0, date_fns_1.format)(zonedDate, 'dd-MM-yyyy HH:mm');
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
//# sourceMappingURL=utils.js.map