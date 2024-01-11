"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const getMultiple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ status: "success" });
});
function create(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("In Service", data);
        const result = yield prismaClient.test.create({ data: data });
        return { result };
    });
}
function update() {
    return __awaiter(this, void 0, void 0, function* () {
        //   const result = await db.query(
        //     `UPDATE programming_languages
        //     SET name=?, released_year=?, githut_rank=?,
        //     pypl_rank=?, tiobe_rank=?
        //     WHERE id=?`,
        //     [
        //       programmingLanguage.name, programmingLanguage.released_year,
        //       programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
        //       programmingLanguage.tiobe_rank, id
        //     ]
        //   );
        //   let message = 'Error in updating programming language';
        //   if (result.affectedRows) {
        //     message = 'Programming language updated successfully';
        //   }
        return { mes: "sage" };
    });
}
// async function remove(id){
//   const result = await db.query(
//     `DELETE FROM programming_languages WHERE id=?`,
//     [id]
//   );
//   let message = 'Error in deleting programming language';
//   if (result.affectedRows) {
//     message = 'Programming language deleted successfully';
//   }
//   return {message};
// }
// module.exports = {
//   getMultiple,
//   create,
//   update,
//   remove
// }
exports.default = { getMultiple, create };
