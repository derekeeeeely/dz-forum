import oss from 'ali-oss';
import config from '../config';

const env = process.env.NODE_ENV || 'development';
const ossConfig = (config as any)[env].oss;

const store = new oss(ossConfig);

/**
 * 上传图片用handler
 * @param req 请求
 * @param res 响应
 */
const uploadHandler = async (req: any, res: any) => {
  const { name, data } = req.files.file
  const options: any = { headers: { 'Cache-Control': 'no-cache' }};

  try {
    const result: any = await store.put(`/regneva/${+Date.now()}_${name}`, data, options);
    res.send({
      data: result.url,
      status: true
    })
  } catch (error) {
    throw new Error(error);
  }
}

export default uploadHandler;
