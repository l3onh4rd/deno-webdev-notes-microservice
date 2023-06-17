/**
 * - route to get one note by id with Deno KV
 */

// @description: GET single note
// @route GET /api/kv/note/:collection/:id
const readKvNote = async ({
  params,
  response,
}: {
  params: { id: string; collection: string };
  response: any;
}) => {
  try {
    const kv = await Deno.openKv();

    const notes = [];
    for await (
      const result of kv.list({ prefix: [params.collection, params.id] })
    ) {
      notes.push(result.value);
    }

    switch (notes.length) {
      case 0:
        response.status = 404;
        response.body = {
          success: true,
          message: `No note found`,
        };
        break;

      case 1:
        response.status = 200;
        response.body = {
          success: true,
          data: notes[0],
        };
        break;
      default:
        response.status = 500;
        response.body = {
          success: false,
          msg: "More than one note was found for this id. Major issue.",
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

export { readKvNote };
