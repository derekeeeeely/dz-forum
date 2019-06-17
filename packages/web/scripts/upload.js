const oss = require('ali-oss');
const co = require('co');
// const SDK = require('@alicloud/pop-core')
const path = require('path');
const fs = require('fs')

const pkg = require('../package.json')
const ROOT_PATH = path.join(__dirname, '../build');
const NEXT_PATH_PAGE = path.join(ROOT_PATH, './server')
const NEXT_PATH_STATIC = path.join(ROOT_PATH, './static')
const BUILD_ID = fs.readFileSync(path.join(ROOT_PATH, './BUILD_ID'), 'utf8')

const store = oss({

})

// 上传一个文件到OSS
// targetPath：OSS文件路径
// filePath: 本地文件路径
function uploadOneFile(targetPath, filePath, options) {
  co(function* () {
    return yield store.put(targetPath, filePath, options);
  }).then((result) => {
    console.log(`${result.name} has been uploaded to oss`);
  }).catch(e => {
    console.log(`${filePath} 上传失败，重新发起上传`);
    // 上传失败重新发起上传
    uploadOneFile(targetPath, filePath, options);
  })
}

// 按文件夹层级上传文件
function uploadFiles(dir, upload) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach((fileName) => {
        const filePath = path.join(dir, fileName);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          uploadFiles(filePath, upload);
        } else {
          // 该执行上传操作了, filePath是当前文件绝对路径
          upload && upload(filePath)
        }
      })
    }
  })
}

const cacheControl = {
  'headers': {
    'Cache-Control': "max-age=31536000"
  }
}

// 上传Next Pages文件
uploadFiles(NEXT_PATH_PAGE, filePath => {
  const targetPath = filePath.replace(NEXT_PATH_PAGE, 'page')
    .replace(/\\|\/{1,2}/g, '/') // 替换 \\ 或者 //
  const pageReg = /(\/index)|(\/page)$/g
  // 将类似 /page/goods/list/index.js 作为 /page/goods/list 文件上传
  if (pageReg.test(targetPath) && /(\/|\\)index\.js$/g.test(filePath)) {
    uploadOneFile(`${pkg.name}/${pkg.version}/_next/${BUILD_ID}/${targetPath.replace(pageReg, '')}`, filePath, cacheControl)
  } else {
    uploadOneFile(`${pkg.name}/${pkg.version}/_next/${BUILD_ID}/${targetPath}`, filePath, cacheControl)
  }
})

// 上传static文件夹下静态资源
uploadFiles(NEXT_PATH_STATIC, (filePath) => {
  const targetPath = filePath.replace(NEXT_PATH_STATIC, '').replace(/\\|\/{1,2}/g, '/')
  uploadOneFile(`${pkg.name}/${pkg.version}/_next/static${targetPath}`, filePath)
})
