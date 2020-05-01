const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = async function () {
  try {
    const { stdout } = await exec('git describe');
    process.env.GIT_DESCRIBE = stdout;
  } catch (e) {
    // ignore
  }
}
