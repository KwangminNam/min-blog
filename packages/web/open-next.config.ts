
const config = {
  default: {
    functions: {
      edge: {
        runtime: 'edge',
        routes: ['app/api/og/route'],
        patterns: ['api/og'],
      },
    },
    override: {
      wrapper: 'aws-lambda-streaming',
    },
  },
};

export default config;