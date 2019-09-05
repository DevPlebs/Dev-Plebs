// fixes issues with tailwind.macro and tailwindV1+
// https://github.com/bradlc/babel-plugin-tailwind-components/issues/39
exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    node :{
      fs: 'empty'
    }
  })
}