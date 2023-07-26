import { setHeadlessWhen, setCommonPlugins } from "@codeceptjs/configure";
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: "./*_test.ts",
  output: "./output",
  helpers: {
    REST: {
      endpoint: "https://reqres.in",
      timeout: 20_000,
    },
    JSONResponse: {},
  },
  ApiDataFactory: {
    endpoint: "https://reqres.in",
    cleanup: false,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    factories: {
      user: {
        factory: "./Factories/apiuser",
        create: (data) => ({ method: "POST", url: "/api/users", data }),
      },
    },
  },
  include: {
    I: "./steps/steps.ts",
  },
  name: "API_POC",
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
    },
  },
};
