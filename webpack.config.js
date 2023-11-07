module.exports = {
  target: "node",
  externals: {
    '@electra/core': 'commonjs2 @electra/core'
  },
  plugins: [],
  mode:    process.env.ENV === 'dev' ? 'development' : 'production',
  // Entry
  entry: {
    index: './index.ts'
  },
  // Output
  output:  {
    filename: '[name].min.js',
    path:     `${__dirname}/dist`,
    library: {
      type: "umd"
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // Loaders
  module: {
    rules: [
      // TypeScript
      {
        test: /\.(ts|tsx)$/,
        use:  [{ loader:  'ts-loader' }]
      }
    ]
  }
};
