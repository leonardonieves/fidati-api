import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: false, unique: true, sparse: true })
  email?: string;

  @Prop({ required: true })
  phoneCode: string; // Ej: +1, +53

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true, unique: true })
  fullPhone: string; // phoneCode + phoneNumber. Ej: "+5355555555"

  @Prop({ enum: ['male', 'female', 'non-binary', 'other'], required: false })
  gender?: string;

  @Prop({ required: false })
  birthdate?: string; // YYYY-MM-DD

  @Prop({
    type: Object,
    required: false,
    default: {},
  })
  preferences?: {
    lookingFor?: 'male' | 'female' | 'both' | 'all';
    minAge?: number;
    maxAge?: number;
  };

  @Prop({
    enum: ['admin', 'basic', 'premium'],
    default: 'basic',
  })
  role: 'admin' | 'basic' | 'premium';

  @Prop({
    enum: ['auth0', 'google', 'email', 'sms'],
    required: true,
  })
  provider: 'auth0' | 'google' | 'email' | 'sms';

  @Prop({ required: true, unique: true }) // sub de Auth0
  auth0Id: string;

  // Nuevos campos
  @Prop({ required: false, default: '' })
  bio?: string;

  @Prop({ required: false, default: '' })
  avatarUrl?: string;

  @Prop({ required: false, default: '' })
  location?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Middleware para generar fullPhone automáticamente
UserSchema.pre<UserDocument>('save', function (next) {
  this.fullPhone = `${this.phoneCode}${this.phoneNumber}`;
  next();
});
