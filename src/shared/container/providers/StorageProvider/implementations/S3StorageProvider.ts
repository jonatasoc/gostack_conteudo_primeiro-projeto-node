import fs from 'fs';
import path from 'path';
import aws, { S3 } from 'aws-sdk';
import mime from 'mime';

import uploadconfig from '@config/upload';

import StorageProviderInterface from '../models/SotareProviderInterface';

class DiskStorageProvider implements StorageProviderInterface {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-2',
    });
  }
  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadconfig.tmpFolder, file);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: uploadconfig.config.aws.bucket,
        Key: file,
        ACL: 'public-read',
        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadconfig.config.aws.bucket,
        Key: file,
      })
      .promise();
  }
}

export default DiskStorageProvider;
