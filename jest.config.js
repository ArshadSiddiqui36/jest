/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testPathIgnorePatterns : [
        "sum.test.js",
      ],
      coveragePathIgnorePatterns: [
        "sum.test.js"
      ],
};
  
module.exports = config;

//   Or a function returning an object:

//   /** @returns {Promise<import('jest').Config>} */
// module.exports = async () => {
//     return {
//         verbose: true,
//     };
// };