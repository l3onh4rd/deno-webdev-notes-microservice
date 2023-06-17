/**
 * - route to read all notes by collection with Deno KV
 */

// @description: GET all notes
// @route GET /api/kv/notes/:collection
const readKvNotes = async ({
  params,
  request,
  response,
}: {
  params: { collection: string };
  request: any;
  response: any;
}) => {
  try {
    const kv = await Deno.openKv();

    const notes = [];
    for await (const result of kv.list({ prefix: [params.collection] })) {
      notes.push(result.value);
    }

    switch (notes.length) {
      case 0:
        response.status = 200;
        response.body = {
          success: true,
          notesCount: notes.length,
          message: `No notes found`,
          data: notes,
        };
        break;
      default:
        response.status = 200;
        response.body = {
          success: true,
          notesCount: notes.length,
          data: notes,
        };
        break;
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { readKvNotes };
