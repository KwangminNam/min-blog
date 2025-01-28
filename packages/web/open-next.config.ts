
const config = {
  functions: {
    edge: {
      runtime: 'edge',
      routes: ['app/api/og/route', 'app/api/test/route'],
      patterns: ['api/og', 'api/test'],
    },
  },
  default: {
    override: {
      wrapper: 'aws-lambda-streaming',
    },
  },
};

export default config;