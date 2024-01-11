import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

const getMultiple = async (req: Request, res: Response) => {
  res.status(200).json({ status: "success" });
};

async function create(data: any) {
  console.log("In Service", data);

  const result = await prismaClient.test.create({ data: data });
  return { result };
}

async function update() {
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

export default { getMultiple, create };
