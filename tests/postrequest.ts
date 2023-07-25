Feature("POST Request");

Scenario("API Test", ({ I }) => {
  async function postUsers() {
    const data = {
      first_name: "victor",
      job: "writer",
    };

    try {
      const response = await I.sendPostRequest("/api/users", data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  postUsers();
});

//const http = require("http");
/*function disp() {
    let url = "http://reqres.in/api/users?page=2";

    let params = {
      headers: {
        "Content-Type": "application/json",
        
      },
    };

    let response = http.get(url, params);
    console.log(response);
    I.seeResponseCodeIsSuccessful();

    I.check(response, {
      "is status 200": (r) => r.status === 200,
    });
  }
  disp();*/
