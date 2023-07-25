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
  include: {
    I: "./steps_file",
  },
  name: "API_POC",
  plugins: {
    allure: {
      enabled: true,
      //require: "@codeceptjs/allure-legacy",
    },
  },
};
