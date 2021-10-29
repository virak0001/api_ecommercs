import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TokenPayloadDto {
  @ApiProperty() accessToken: string;
  @ApiProperty({ default: 'bearer' }) tokenType = 'bearer';
  @ApiProperty() expiresIn: number | string;
  @ApiPropertyOptional() refreshToken?: string;
  @ApiPropertyOptional() type?: string;
}
