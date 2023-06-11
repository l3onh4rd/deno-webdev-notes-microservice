/**
 * - route to delete one note
 */

// @description: DELETE single note
// @route DELETE /api/kv/note
const deleteKvNote = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  try {

    const body = await request.body();
    const bodyData = await body.value;

    const kv = await Deno.openKv();

    await kv.delete([bodyData.collection, bodyData.id, bodyData.username]);

    const result = await kv.get([bodyData.collection, bodyData.id, bodyData.username]);

    if (result.value === null) {
      response.status = 200;
      response.body = {
        success: true
      };
    } else {
      response.status = 404;
      response.body = {
        success: false,
        message: "No note was deleted"
      };
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { deleteKvNote };
