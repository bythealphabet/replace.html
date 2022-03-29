import replace from "replace-in-file";

const options = {
  files: ["./*.html"],
  from: `<img
                    alt="Logo"
                    src="./logo-equans-white.png"
                    width="200"
                    height="75"
                    style="
                      display: block;
                      width: 200px;
                      max-width: 200px;
                      min-width: 200px;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      color: #ffffff;
                      font-size: 18px;
                    "
                    border="0"
                  />`,
  to: `<img
                    alt="Logo"
                    src="./logo-equans-white.png"
                    width="260"
                    style="
                      display: block;
                      width: 260px;
                      max-width: 260px;
                      min-width: 260px;
                      font-family: 'Lato', Helvetica, Arial, sans-serif;
                      color: #ffffff;
                      font-size: 18px;
                    "
                    border="0"
                  />`,
};

try {
  const results = await replace(options);
  console.log("Replacement results:", results);
} catch (error) {
  console.error("Error occurred:", error);
}
