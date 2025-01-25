
const config = {
  default: {
    functions: {
      edge: {
        runtime: 'edge',
        route: "global",
      }
    },
    override: {
      wrapper: 'aws-lambda-streaming',
    },
  },
};

export default config;