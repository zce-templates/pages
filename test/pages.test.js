import test from 'ava'

import path from 'path'
import { generator } from 'zce-cli'
import { util } from 'zce-cli/lib/common'
import mockPrompt from 'mock-prompt'

test.before(async t => {
  const cwd = path.join(__dirname, 'dist')
  await util.mkdirp(cwd)
  process.chdir(cwd)
})

test.after(async t => {
  const cwd = process.cwd()
  process.chdir(__dirname)
  await util.rimraf(cwd)
})

test.serial('minimal', async t => {
  // TODO: mock prompt answers
  mockPrompt({})

  await generator.init('../../', 'minimal-template', { force: true, save: false })

  t.true(await util.exists(path.join(process.cwd(), 'minimal-template/README.md')))

  // TODO: other asserts
})
