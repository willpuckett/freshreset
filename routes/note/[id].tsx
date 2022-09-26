import { ObjectId } from "mongo";
import db from "../../mongodb.ts";

export interface INote {
  title: string;
  body: string;
  date?: Date;
  _id?: ObjectId;
}

const notesCollection = db.collection("notes");

// const getSingleNote = async (ctx: RouterContext) => {
//     const id = ctx.params.id;
//     // Get single note
//     const note = await notesCollection.findOne({
//       _id: new ObjectId(id),
//     });
//     // Return output
//     ctx.response.body = note;
//   };


//   const updateNote = async (ctx: RouterContext) => {
//     const id = ctx.params.id;
//     // Get title and body from request
//     const { title, body } = await ctx.request.body().value;
  
//     const { modifiedCount } = await notesCollection.updateOne(
//       {
//         _id: new ObjectId(id),
//       },
//       {
//         $set: {
//           title,
//           body,
//         },
//       },
//     );
  
//     if (!modifiedCount) {
//       ctx.response.status = 404;
//       ctx.response.body = { message: "Note does not exist" };
//       return;
//     }
  
//     ctx.response.body = await notesCollection.findOne({
//       _id: new ObjectId(id),
//     });
//   };
  
//   const deleteNote = async (ctx: RouterContext) => {
//     const id = ctx.params.id;
//     const count = await notesCollection.deleteOne({
//       _id: new ObjectId(id),
//     });
//     if (!count) {
//       ctx.response.status = 404;
//       ctx.response.body = { message: "Note does not exist" };
//       return;
//     }
  
//     ctx.response.status = 204;
//   };
  