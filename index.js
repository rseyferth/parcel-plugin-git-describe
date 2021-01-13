const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = async function () {
  try {
    const { stdout: git_decribe } = await exec("git describe");
    process.env.GIT_DESCRIBE = git_decribe;

    const { stdout: git_branch } = await exec(
      "git rev-parse --abbrev-ref HEAD"
    );
    process.env.GIT_BRANCH = git_branch;
  } catch (e) {
    // ignore
  }
};
