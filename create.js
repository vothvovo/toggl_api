// go to https://www.base64encode.org/ and encode this with your stuff: EMAIL:PASSWORD
import fetch from "node-fetch";
const workspaceId = "";
const base64Creds = "";
// get current time entry
fetch("https://api.track.toggl.com/api/v9/me/time_entries/current", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64Creds}`,
  },
})
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    fetch(
      `https://api.track.toggl.com/api/v9/workspaces/${workspaceId}/time_entries/${json.id}/stop`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64Creds}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
