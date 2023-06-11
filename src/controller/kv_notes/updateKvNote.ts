/**
 * - implementation of put/update route for a note by id
 */

// @description: UPDATE single note
// @route PUT /api/kv/notes/:collection/:id
const updateKvNote = async ({
  params,
  request,
  response,
}: {
  params: { collection: string; id: string };
  request: any;
  response: any;
}) => {
  try {
    const body = await request.body();
    const note = await body.value;
    note.updatedAt = Date.now();

    const kv = await Deno.openKv();

    const oldNote = await kv.get([params.collection, params.id, note.username]);

    const ok = await kv.atomic()
      .check(oldNote)
      .set([params.collection, params.id, note.username], note)
      .commit();
        
    if (ok) {
      response.status = 200;
      response.body = {
        success: true,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Something went wrong."
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

export { updateKvNote };
