import * as bcrypt from 'bcryptjs';
export class HashUtil {
  private static _secret = '';
  constructor() {
    HashUtil._secret = process.env.JWT_SECRET_KEY || 'rxPhglGJWPlOW596';
  }

  static validateHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash || '');
  }

  /**
   * generate hash from password or string
   * @param {string} password
   * @returns {string}
   */
  static generateHash(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
