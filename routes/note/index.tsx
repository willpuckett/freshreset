import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { ObjectId } from "mongo";
import db from "../../mongodb.ts";

export interface INote {
  title: string;
  body: string;
  date?: Date;
  _id?: ObjectId;
}

const notesCollection = db.collection("notes");

// trying the handler


export const handler: Handlers = {
    async GET(_req, ctx) {
        const notes = await notesCollection.find().toArray();
        // ctx.response.body = notes;
    //   const project = await db.projects.findOne({ id: ctx.params.id });
      if (!notes) {
        return new Response("No notes found", { status: 404 });
      }
      return Response.json(notes);
    },
    async POST(req) {
      // Get title and body from request
      console.log(req.body)
      // const { title, body } = await req.body.value;
      // Create Note object
      const note: INote = {
        title,
        body,
        date: new Date(),
      };
      // Insert Note in MongoDB
      const id = await notesCollection.insertOne(note);
      
      note._id = id;
      // Return with success response
      return Response.json(note, { status: 201 });
    },
    async DELETE(_req, ctx) {
     const count = await notesCollection.deleteMany({});
    if (!count) {
      return new Response("Notes already empty", { status: 404 });
    }
    return new Response("", { status: 204 });
    }
  };
  
  
  


















// .get("/note", routes.getNotes)
// .post("/note", routes.createNote)
// .delete("/note", routes.deleteNotes);

// const getNotes = async (ctx: RouterContext) => {
//     // Get Notes from MongoDB
//     const notes = await notesCollection.find().toArray();
//     // Return output
//     ctx.response.body = notes;
//   };

//   const createNote = async (ctx: RouterContext) => {
//     // Get title and body from request
//     const { title, body } = await ctx.request.body().value;
//     // Create Note object
//     const note: INote = {
//       title,
//       body,
//       date: new Date(),
//     };
//     // Insert Note in MongoDB
//     const id = await notesCollection.insertOne(note);
  
//     note._id = id;
//     // Return with success response
//     ctx.response.status = 201;
//     ctx.response.body = note;
//   };

// const deleteNotes = async (ctx: RouterContext) => {
//     const count = await notesCollection.deleteMany({});
//     if (!count) {
//       ctx.response.status = 404;
//       ctx.response.body = { message: "Notes already empty" };
//       return;
//     }
//     ctx.response.status = 204;
//   };

  